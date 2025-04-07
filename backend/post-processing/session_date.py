from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timedelta, timezone

import config


client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]

session_split_collection = db[config.SESSION_SPLIT_COLLECTION_NAME]
order_processed_collection = db[config.ORDER_PROCESSED_COLLECTION_NAME]

SESSION_TIMEOUT = config.SESSION_TIMEOUT

sessions = []
session_id = 1
last_interaction_time = None


def parse_timestamp(ts):
    try:
        return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%S.%fZ")
    except ValueError:
        try:
            return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%SZ")
        except ValueError:
            return None
def is_purchase_event(interaction):
    data_semantic_id = interaction.get('data-semantic-id', '')
    target = interaction.get('target', {})
    if isinstance(target, dict):
        inner_text = target.get('innerText', '')
    else:
        inner_text = ''

    purchase_keywords = ('buy_now', 'set_up_now', 'check_out')
    if any(data_semantic_id.endswith(keyword) for keyword in purchase_keywords):
        return True

    if inner_text == 'Proceed to checkout':
        return True

    return False


def get_purchased_items_by_uuid(uuid_value):

    order_doc = order_processed_collection.find_one({"uuid": uuid_value})
    if not order_doc or "items" not in order_doc:
        return []
    return order_doc["items"]

def fuzzy_match(search_term, product_name):
    for item in search_term.split():
        if item in product_name:
            return True
    return False

def find_related_interactions(purchased_items, reference_time, user_name):
    if not purchased_items:
        return []

    item_names = [item.get("title", "") for item in purchased_items]

    time_range = reference_time - timedelta(hours=24)

    interactions_cursor = interaction_collection.find({
        "timestamp": {"$gte": time_range.isoformat()},
        "user_name": user_name
    })

    matched_interaction_ids = []
    for itx in interactions_cursor:
        PageMeta = itx.get("pageMeta", {})
        if isinstance(PageMeta, dict):
            search_terms = PageMeta.get('search_term', [])
            if search_terms:
                search_term = search_terms[0]['term']
            else:
                search_term = ''
        else:
            search_term = ''

        for item_name in item_names:
            if fuzzy_match(search_term.lower(),item_name.lower()):
                matched_interaction_ids.append(itx["uuid"])
                break

    return matched_interaction_ids


def sessionize_interactions(user_name, date=None):
    """
    Sessionize interactions for a user, processing only the current day's interactions.
    """

    if date is None:
        date = datetime.now(timezone.utc)
    if isinstance(date, str):
        date = datetime.fromisoformat(date)
    # Convert the date string to a datetime object representing the start of the day
    start_of_day = date.strftime("%Y-%m-%dT00:00:00.000Z")
    # Calculate the end of the day
    end_of_day = (date + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")

    # Fetch interactions for the current day
    interactions = list(interaction_collection.find({
        "user_name": user_name,
        "timestamp": {"$gte": start_of_day, "$lt": end_of_day}
    }).sort('timestamp', 1))

    current_session = {
        "start_time": None,
        "end_time": None,
        "uuid_list": []
    }
    last_interaction_time = None

    # Fetch the last session's end time
    last_session = session_split_collection.find_one(
        {"user_name": user_name},
        sort=[("end_time", -1)]
    )
    if last_session:
        last_session_end_time = parse_timestamp(last_session["end_time"])
        current_session = {
            "start_time": parse_timestamp(last_session["start_time"]),
            "end_time": last_session_end_time,
            "uuid_list": last_session["uuid_list"]
        }
    else:
        last_session_end_time = None
        current_session = {
            "start_time": None,
            "end_time": None,
            "uuid_list": []
        }

    for interaction in interactions:
        timestamp_str = interaction.get('timestamp')
        if not timestamp_str:
            continue
        timestamp = parse_timestamp(timestamp_str)
        if not timestamp:
            continue

        # Check if the interaction should be part of the last session
        if last_session_end_time and (timestamp - last_session_end_time <= timedelta(minutes=30)):
            current_session["uuid_list"].append(interaction["uuid"])
            last_interaction_time = timestamp
            continue

        if last_interaction_time:
            time_diff = timestamp - last_interaction_time
            if time_diff > timedelta(minutes=SESSION_TIMEOUT):
                if current_session["start_time"] is not None:
                    current_session["end_time"] = last_interaction_time
                    session_name = f'{current_session["start_time"].isoformat()}_{current_session["end_time"].isoformat()}'
                    # Check if the session already exists
                    existing_session = session_split_collection.find_one({"session_name": session_name})
                    if not existing_session:
                        session_split_collection.insert_one({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"],
                            "end_time": current_session["end_time"],
                            "uuid_list": current_session["uuid_list"],
                        })
                    current_session = {
                        "start_time": None,
                        "end_time": None,
                        "uuid_list": []
                    }

            elif is_purchase_event(interaction):
                event_uuid = interaction.get("uuid",'')
                current_session["uuid_list"].append(event_uuid)
                if event_uuid:
                    purchased_items = get_purchased_items_by_uuid(event_uuid)
                    related_interactions = find_related_interactions(purchased_items, timestamp, user_name)
                    current_session["uuid_list"].extend(related_interactions)
                    if current_session["start_time"] is not None:
                        current_session["end_time"] = last_interaction_time
                        session_name = f'{current_session["start_time"].isoformat()}_{current_session["end_time"].isoformat()}'
                        # Check if the session already exists
                        existing_session = session_split_collection.find_one({"session_name": session_name})
                        if not existing_session:
                            session_split_collection.insert_one({
                                "user_name": user_name,
                                "session_name": session_name,
                                "start_time": current_session["start_time"],
                                "end_time": current_session["end_time"],
                                "uuid_list": current_session["uuid_list"],
                            })
                        current_session = {
                            "start_time": None,
                            "end_time": None,
                            "uuid_list": []
                        }
        if current_session["start_time"] is None:
            current_session["start_time"] = timestamp

        current_session["uuid_list"].append(interaction["uuid"])

        last_interaction_time = timestamp

    # Update the last session in the database
    if last_session:
        session_split_collection.update_one(
            {"_id": last_session["_id"]},
            {"$set": {
                "end_time": last_interaction_time,
                "uuid_list": current_session["uuid_list"]
            }}
        )
    elif current_session["start_time"] is not None:
        # Insert the last session if it exists
        current_session["end_time"] = last_interaction_time
        session_name = f'{current_session["start_time"].isoformat()}_{current_session["end_time"].isoformat()}'
        # Check if the session already exists
        existing_session = session_split_collection.find_one({"session_name": session_name})
        if not existing_session:
            session_split_collection.insert_one({
                "user_name": user_name,
                "session_name": session_name,
                "start_time": current_session["start_time"],
                "end_time": current_session["end_time"],
                "uuid_list": current_session["uuid_list"],
            })

    print("Sessionization complete.")

# Example usage
sessionize_interactions("hailab-buyer-test", "2025-03-06")
