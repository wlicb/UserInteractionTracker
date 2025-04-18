from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timedelta, timezone

import config


client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
user_collection = db[config.USER_COLLECTION_NAME]
session_split_collection = db[config.SESSION_SPLIT_COLLECTION_NAME]
order_processed_collection = db[config.ORDER_PROCESSED_COLLECTION_NAME]

SESSION_TIMEOUT = 78 # 78 minutes




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





def sessionize_interactions(user_name,save_to_db=False,process_time=None):
    session_num=0
    interactions = list(interaction_collection.find({"user_name": user_name}).sort('timestamp', 1))
    current_session = {
        "start_time": None,
        "end_time": None,
        "uuid_list": []
    }
    last_interaction_time = None
    session_list=[]
    for interaction in interactions:
        timestamp_str = interaction.get('timestamp')
        if not timestamp_str:
            continue
        timestamp = parse_timestamp(timestamp_str)
        if not timestamp:
            continue

        if last_interaction_time:
            time_diff = timestamp - last_interaction_time
            if time_diff > timedelta(minutes=SESSION_TIMEOUT):
                if current_session["start_time"] is not None:
                    current_session["end_time"] = last_interaction_time
                    session_name = f"'{current_session['start_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'_'{current_session['end_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'"
                    
                    if save_to_db:
                        session_split_collection.insert_one({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list": current_session["uuid_list"],
                            "processed_time": process_time,
                            "is_long_interval": True,
                            "is_purchase": is_purchase_event(interaction)
                        })
                    else:
                        # print({
                        #     "user_name": user_name,
                        #     "session_name": session_name,
                        #     "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                        #     "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                        #     "uuid_list_length": len(current_session["uuid_list"]),
                        # })
                        session_list.append({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list_length": len(current_session["uuid_list"]),
                        })
                    session_num+=1
                current_session = {
                    "start_time": None,
                    "end_time": None,
                    "uuid_list": []
                }

            elif is_purchase_event(interaction):
                event_uuid = interaction.get("uuid",'')
                current_session["uuid_list"].append(event_uuid)
                if event_uuid:
                    if current_session["start_time"] is not None:
                        current_session["end_time"] = timestamp
                        session_name = f"'{current_session['start_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'_'{current_session['end_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'"
                        if save_to_db:
                            session_split_collection.insert_one({
                            "user_name": user_name,
                            "session_name": session_name,
                            "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            "uuid_list": current_session["uuid_list"],
                            "processed_time": process_time,
                            "is_long_interval": False,
                            "is_purchase": True
                            })
                        else:
                            # print({
                            # "user_name": user_name,
                            # "session_name": session_name,
                            # "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            # "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                            # "uuid_list_length": len(current_session["uuid_list"]),
                            # })
                            session_list.append({
                                "user_name": user_name,
                                "session_name": session_name,
                                "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                                "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                                "uuid_list_length": len(current_session["uuid_list"]),
                            })

                        session_num+=1
                    current_session = {
                        "start_time": None,
                        "end_time": None,
                        "uuid_list": []
                    }
                    continue
        if current_session["start_time"] is None:
            current_session["start_time"] = timestamp

        current_session["uuid_list"].append(interaction["uuid"])

        last_interaction_time = timestamp

    # Add this block to handle the last session
    if current_session["start_time"] is not None:
        current_session["end_time"] = last_interaction_time
        session_name = f"'{current_session['start_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'_'{current_session['end_time'].strftime('%Y-%m-%dT%H:%M:%S.%fZ')}'"
        # print(session_name)
        if save_to_db:
            session_split_collection.insert_one({
                "user_name": user_name,
                "session_name": session_name,
                "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "uuid_list": current_session["uuid_list"],
                "processed_time": process_time,
                "is_long_interval": True,
                "is_purchase": is_purchase_event(interaction),
            })
        else:
            # print({
            #     "user_name": user_name,
            #     "session_name": session_name,
            #     "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
            #     "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
            #     "uuid_list_length": len(current_session["uuid_list"]),
            # })
            session_list.append({
                "user_name": user_name,
                "session_name": session_name,
                "start_time": current_session["start_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "end_time": current_session["end_time"].strftime("%Y-%m-%dT%H:%M:%S.%fZ"),
                "uuid_list_length": len(current_session["uuid_list"]),
            })
        session_num+=1
    print(f"user_name: {user_name}, processed_time: {datetime.now(timezone.utc).isoformat()},number_of_sessions: {session_num}")
    return session_list



if __name__ == "__main__":
    # from extract_purchase_info_db import get_username_from_args
    # user_arg = get_username_from_args()
    # if user_arg:
    #     # Process only the specified user if a username is passed in
    #     distinct_users = [user_arg]
    # else:
    #     # Gather all distinct users from both the interaction and order collections
    #     distinct_users = set(interaction_collection.distinct("user_name")).union(
    #         interaction_collection.distinct("user_name")
    #     )

    # # For each user found, run process_order_info
    # for user in distinct_users:
    #     sessionize_interactions(user)
    # sessionize_interactions("dakuo",save_to_db=False)
    process_time=datetime.now(timezone.utc).isoformat()
    all_users=user_collection.find({"user_name": {"$ne": ""}}, {"_id": 0, "user_name": 1})
    filter_user_list=['hailab','unknown',
                        'hailab-yuxuan_984624',
                        'hailab-yuxuan',
                        'wenbo_326409',
                        'hailab-ziyi',
                        'hailab-test-buyer',
                        'abcdefg',
                        'hailab-03',
                        'zoey-000000',
                        'yuxuan','hai-user1','','hailab-buyer-test']
    valid_user_list=[]                    
    for user in all_users:
        if user["user_name"] in filter_user_list or 'hailab' in user["user_name"]:
            continue
        valid_user_list.append(user["user_name"])
    print(valid_user_list)
    all_session_list=[]
    for user in valid_user_list:
        all_session_list.extend(sessionize_interactions(user,save_to_db=True))
    # Calculate session lengths and create distribution
    import matplotlib.pyplot as plt
    from datetime import datetime

    session_lengths = []
    for session in all_session_list:    
        session_lengths.append(session["uuid_list_length"])

    # Calculate distribution of sessions by UUID count
    uuid_count_distribution = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "10-20": 0,
        "20-35": 0,
        "35-50": 0,
        "50+": 0
    }

    for session in all_session_list:
        uuid_count = session["uuid_list_length"]
        if uuid_count == 1:
            uuid_count_distribution["1"] += 1
        elif uuid_count == 2:
            uuid_count_distribution["2"] += 1
        elif uuid_count == 3:
            uuid_count_distribution["3"] += 1
        elif uuid_count == 4:
            uuid_count_distribution["4"] += 1
        elif uuid_count == 5:
            uuid_count_distribution["5"] += 1
        elif 6 <= uuid_count <= 10:
            uuid_count_distribution["6-10"] += 1
        elif 10 < uuid_count <= 20:
            uuid_count_distribution["10-20"] += 1
        elif 20 < uuid_count <= 35:
            uuid_count_distribution["20-35"] += 1
        elif 35 < uuid_count <= 50:
            uuid_count_distribution["35-50"] += 1
        else:
            uuid_count_distribution["50+"] += 1

    print("\nSession Distribution by UUID Count:")
    print("-" * 40)
    for range_name, count in uuid_count_distribution.items():
        percentage = (count / len(session_lengths)) * 100
        print(f"{range_name} Actions: {count} sessions ({percentage:.1f}%)")
    # Create bar plot of distribution
    plt.figure(figsize=(12, 6))
    plt.bar(uuid_count_distribution.keys(), uuid_count_distribution.values())
    plt.title(f'Distribution of Sessions length (total {len(session_lengths)} sessions)')
    plt.xlabel('Number of Actions in Session')
    plt.ylabel('Number of Sessions')
    plt.xticks(rotation=45)
    
    # Add value labels on top of each bar
    for i, v in enumerate(uuid_count_distribution.values()):
        plt.text(i, v, str(v), ha='center', va='bottom')
    
    plt.tight_layout()
    plt.savefig('session_distribution.png')
    plt.close()
    # print("\nSessions with 3-4 UUIDs:")
    # print("-" * 40)
    # for session in all_session_list:
    #     if session["uuid_list_length"] in [3]:
    #         print(f"Session: {session['session_name']}")
    #         print(f"User: {session['user_name']}")
    #         print(f"Action count: {session['uuid_list_length']}")
    #         print(f"Start time: {session['start_time']}")
    #         print(f"End time: {session['end_time']}")
    #         print("-" * 40)
    # for session in all_session_list:
    #     if session["uuid_list_length"] in [4]:
    #         print(f"Session: {session['session_name']}")
    #         print(f"User: {session['user_name']}")
    #         print(f"Action count: {session['uuid_list_length']}")
    #         print(f"Start time: {session['start_time']}")
    #         print(f"End time: {session['end_time']}")
    #         print("-" * 40)
    # for session in all_session_list:
    #     if session["uuid_list_length"] in [5]:
    #         print(f"Session: {session['session_name']}")
    #         print(f"User: {session['user_name']}")
    #         print(f"Action count: {session['uuid_list_length']}")
    #         print(f"Start time: {session['start_time']}")
    #         print(f"End time: {session['end_time']}")
    #         print("-" * 40)
    # Create filtered distribution without sessions of length <= 4
    filtered_session_lengths = [length for length in session_lengths if length > 4]
    filtered_uuid_count_distribution = {
        "5-10": 0,
        "11-20": 0,
        "21-35": 0,
        "35-50": 0,
        "50+": 0
    }

    for length in filtered_session_lengths:
        if 5 <= length <= 10:
            filtered_uuid_count_distribution["5-10"] += 1
        elif 11 <= length <= 20:
            filtered_uuid_count_distribution["11-20"] += 1
        elif 21 <= length <= 35:
            filtered_uuid_count_distribution["21-35"] += 1
        elif 35 <= length <= 50:
            filtered_uuid_count_distribution["35-50"] += 1
        else:
            filtered_uuid_count_distribution["50+"] += 1

    # Create bar plot of filtered distribution
    plt.figure(figsize=(12, 6))
    bars = plt.bar(filtered_uuid_count_distribution.keys(), filtered_uuid_count_distribution.values())
    plt.title(f'Distribution of Sessions length >4 (total {len(filtered_session_lengths)} sessions)')
    plt.xlabel('Number of Actions in Session')
    plt.ylabel('Number of Sessions')
    plt.xticks(rotation=45)
    
    # Add value and percentage labels on top of each bar
    total = sum(filtered_uuid_count_distribution.values())
    for bar in bars:
        height = bar.get_height()
        percentage = (height / total) * 100
        plt.text(bar.get_x() + bar.get_width()/2., height,
                f'{int(height)}\n({percentage:.1f}%)',
                ha='center', va='bottom')
    
    plt.tight_layout()
    plt.savefig('filtered_session_distribution.png')
    plt.close()