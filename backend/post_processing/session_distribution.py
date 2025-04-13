from pymongo import MongoClient
from datetime import datetime, timedelta
import config
import re
import matplotlib.pyplot as plt

# Connect to MongoDB
client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]

processed_interaction_collection = db[config.PROCESSED_INTERACTION_COLLECTION_NAME]  # New collection for processed interactions
processed_session_split_collection = db[config.PROCESSED_SESSION_SPLIT_COLLECTION_NAME]  # New collection for processed session splits
session_split_collection = db[config.SESSION_SPLIT_COLLECTION_NAME]
def get_session_distribution():
    """Get session distribution based on session length."""
    # Get all processed interactions
    processed_session_split = list(processed_session_split_collection.find({}, {"_id": 0}))

    session_lengths = []
    for session in processed_session_split:    
        session_lengths.append(len(session["uuid_list"]))

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

    for session in processed_session_split:
        uuid_count = len(session["uuid_list"])
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
    plt.savefig('processed_session_distribution.png')
    plt.close()

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
    plt.savefig('processed_filtered_session_distribution.png')
    plt.close()

if __name__ == "__main__":
    get_session_distribution()
    # Calculate average session lengths before and after processing
    sessions = list(session_split_collection.find({}, {"_id": 0}))
    processed_sessions = list(processed_session_split_collection.find({}, {"_id": 0}))

    original_lengths = [len(session.get('uuid_list', [])) for session in sessions]
    processed_lengths = [len(session.get('uuid_list', [])) for session in processed_sessions]

    original_avg = sum(original_lengths) / len(original_lengths) if original_lengths else 0
    processed_avg = sum(processed_lengths) / len(processed_lengths) if processed_lengths else 0

    print("\nAverage Session Lengths:")
    print("-" * 40)
    print(f"Before processing: {original_avg:.2f} actions per session")
    print(f"After processing: {processed_avg:.2f} actions per session")
    print(f"Difference: {processed_avg - original_avg:.2f} actions")