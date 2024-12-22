from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import zipfile
from io import BytesIO
import re
from datetime import datetime
from bson import ObjectId
import json
from pymongo import MongoClient

import config

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.COLLECTION_NAME]

# db_schema
# [
#     {
#         _id:user_id,
#         user_name:user_name,
#         interactions:[
#             {**interaction},
#             .
#             .
#             .
#         ]
#     },
#     .
#     .
#     .
# ]

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
REMOVE_ZIP_FILE= True
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
localhost:5000

def check_user(user_id, interaction_collection):
    if not user_id: 
        app.logger.error(f'user_id is not available')
        return {'error': f'user_id is not available'}, 400 
    
    try:
        user_id = ObjectId(user_id)
    except:
        app.logger.error(f'User ID is not a valid ObjectId: {user_id}')
        return {f'error': f'User ID is not a valid id:{user_id}'}, 400

    user= interaction_collection.find_one({"_id": user_id})

    if not user:
        app.logger.error(f'User not found. user_id: {user_id}')
        return {f'error': f'User not found. user_id: {user_id}'}, 403
    
    return user_id, 200

    


@app.route('/upload', methods=['POST'])
def upload_file():
    
    if 'file' not in request.files:
        app.logger.info('No file part in the request')
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        app.logger.info('No selected file')
        return jsonify({'error': 'No selected file'}), 400
    
    user_id = request.form.get('user_id')

    result, status = check_user(user_id, interaction_collection)
    if status!=200:
        return jsonify(result), status
    else: user_id = result

   
    if file:
        filepath = ""
        if file.filename.endswith('.zip'):
            try:
                file_bytes = file.read()

                with zipfile.ZipFile(BytesIO(file_bytes), 'r') as zip_ref:
                    filepath = os.path.join(UPLOAD_FOLDER, file.filename.replace('.zip', ''))
                    os.makedirs(filepath, exist_ok=True)
                    
                    zip_ref.extractall(filepath)
                    app.logger.info(f'File {file.filename} decompressed successfully')

            except zipfile.BadZipFile:
                app.logger.error(f'Error: {file.filename} is not a valid zip file')
                return jsonify({'error': 'Invalid zip file'}), 400    
        else:
            filepath = os.path.join(UPLOAD_FOLDER, file.filename)
            os.makedirs(os.path.dirname(filepath), exist_ok=True)

            file.save(filepath)
            app.logger.info(f'File {file.filename} uploaded successfully')
            
        return jsonify({'message': f'File {file.filename} uploaded successfully'}), 200

    

@app.route('/interactions', methods=['POST'])
def interactions():
    data = None
    json_data = request.form.get('interactions')
    
    if not json_data:
        return jsonify({'error': 'Interactions not found'}), 400
    
    try:
        data = json.loads(json_data) 
    except json.JSONDecodeError:
        return jsonify({'error': 'Invalid JSON data'}), 400   


    user_id = request.form.get('user_id')

    result, status = check_user(user_id, interaction_collection)
    if status!=200:
        return result, status
    else: user_id = result
    

    if data:
        interaction_collection.update_one(
            { "_id": user_id }, 
            {
                "$push": {
                    "interactions": {
                        "$each": data["interactions"]
                    }
                }
            }
        )
        app.logger.info(f'Interactions added successfully, ${len(data["interactions"])}')

        return jsonify({'message': f'Interactions added successfully'}), 200
    
    return jsonify({'error': f'Unknown error'}), 400



if __name__ == '__main__':
    app.run(debug=True, port=5000)
