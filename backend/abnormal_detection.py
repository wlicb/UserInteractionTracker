import json
from urllib.parse import urlparse
from datetime import timedelta

from pymongo import MongoClient
from datetime import datetime, timezone, timedelta

import config
import sys

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
order_collection = db[config.ORDER_COLLECTION_NAME]
order_processed_collection = db["order_processed"]

def get_username_from_args():
    """
    Get the username from command line arguments.
    """
    return sys.argv[1] if len(sys.argv) > 1 else None

def get_interactions_by_date(user_name, date=None):
    """
    Get interactions by date.
    """
    if date is None:
        date = datetime.now(timezone.utc)
    if isinstance(date, str):
        date = datetime.fromisoformat(date)
    # Convert the date string to a datetime object representing the start of the day
    start_of_day = date.strftime("%Y-%m-%dT00:00:00.000Z")
    # Calculate the end of the day
    end_of_day = (date + timedelta(days=1)).strftime("%Y-%m-%dT00:00:00.000Z")
    # print(start_of_day, end_of_day)
    # Query for interactions within the start and end of the specified day
    return interaction_collection.find({
        "user_name": user_name,
        "timestamp": {"$gte": start_of_day, "$lt": end_of_day}
    })

def abnormal_detection(user_name, date=None):
    """
    Detect abnormal behavior of a user.
    """
    abnormal_interactions = []  # {reason: str, interaction: [uuid, uuid, ...]}
    interactions = get_interactions_by_date(user_name, date)
    interactions = sorted(interactions, key=lambda x: x['timestamp'])
    if len(interactions) == 0:
        return [{'reason': 'No interactions', 'interaction': []}]
    # Define thresholds
    long_gap_threshold = timedelta(minutes=config.LONG_GAP_MIN)
    long_gap_abnormal_uuids=[]
    long_gap_count=0

    # Check for rapid interactions
    rapid_interaction_abnormal_uuids=[]
    rapid_interaction_window=timedelta(seconds=config.RAPID_INTERACTION_WINDOW_SEC)
    rapid_interaction_rate= config.RAPID_INTERACTION_RATE 
    interaction_window=[]

    # Check for repeated interactions
    repeated_interaction_abnormal_uuids=[]
    repeated_interaction_count=1
    repeated_interaction_threshold=config.REPEATED_TARGET_COUNT
    repeat_tmp_uuid=[]

    previous_target=None
    previous_interaction_time = None

    for interaction in interactions:
        current_interaction_uuid = interaction['uuid']
        current_interaction_time = datetime.fromisoformat(interaction['timestamp'])
        #check for long gap
        if previous_interaction_time is not None:
            gap = current_interaction_time - previous_interaction_time
            if gap > long_gap_threshold:
                long_gap_abnormal_uuids.extend([[previous_interaction_uuid, current_interaction_uuid]])
                long_gap_count+=1
        #check for rapid interaction
        interaction_window.append([current_interaction_time, current_interaction_uuid])
        interaction_window=[t for t in interaction_window if t[0] > current_interaction_time - rapid_interaction_window]
        if len(interaction_window) > rapid_interaction_rate*rapid_interaction_window.total_seconds():
            rapid_interaction_abnormal_uuids.extend([[t[1] for t in interaction_window]])
            interaction_window=[]

        #check for repeated interaction
        current_target=interaction.get('selector',None)
        action_type=interaction.get('eventType',None)
        if action_type.startswith('click') and current_target is not None:
            if current_target==previous_target:
                repeated_interaction_count+=1
                repeat_tmp_uuid.append(current_interaction_uuid)
            else:
                repeated_interaction_count=1
                repeat_tmp_uuid=[current_interaction_uuid]
            if repeated_interaction_count>=repeated_interaction_threshold:
                repeated_interaction_abnormal_uuids.extend([repeat_tmp_uuid])
                repeated_interaction_count=1
                repeat_tmp_uuid=[]
        else:
            previous_target=None
            repeat_tmp_uuid=[]
            repeated_interaction_count=1
        previous_target=current_target
        previous_interaction_time = current_interaction_time
        previous_interaction_uuid = current_interaction_uuid

    if long_gap_count/len(interactions) > config.LONG_GAP_PERCENTAGE:
        abnormal_interactions.append({
            "reason": "Long gap between interactions",
            "interaction": long_gap_abnormal_uuids
        })
    if rapid_interaction_abnormal_uuids:
        abnormal_interactions.append({
            "reason": "Rapid interaction",
            "interaction": rapid_interaction_abnormal_uuids
        })
    if repeated_interaction_abnormal_uuids:
        abnormal_interactions.append({
            "reason": "Repeated interaction",
            "interaction": repeated_interaction_abnormal_uuids
        })

    

    return abnormal_interactions

if __name__ == "__main__":
    user_name = get_username_from_args() or "hailab-buyer-test"
    detection_result = abnormal_detection(user_name, date=None) #"2025-03-06"
    print(detection_result)