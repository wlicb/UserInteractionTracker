# import json
# from pymongo import MongoClient
# import config
# client = MongoClient(config.MONGO_URI)
# db = client[config.DATABASE_NAME]
# user_collection = db[config.USER_COLLECTION_NAME]    
# user_list = user_collection.find({}, {"_id": 0, "user_name": 1})
# print(list(user_list))
import random

# Generate 20 random 6-digit numbers
random_numbers = []
for _ in range(20):
    number = random.randint(100000, 999999)
    random_numbers.append(number)
    
print("\nRandom 6-digit numbers:")
for num in random_numbers:
    print(num)
