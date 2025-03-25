import json
from pymongo import MongoClient
import config
client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
user_collection = db[config.USER_COLLECTION_NAME]    
user_list = user_collection.find({}, {"_id": 0, "user_name": 1})
print(list(user_list))