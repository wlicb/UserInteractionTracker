from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import zipfile
from io import BytesIO
import re
from datetime import datetime, timedelta, timezone
from bson import ObjectId
import json
from pymongo import MongoClient
import boto3
from botocore.exceptions import NoCredentialsError

import config

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.COLLECTION_NAME]

AWS_ACCESS_KEY = config.AWS_ACCESS_KEY
AWS_SECRET_KEY = config.AWS_SECRET_KEY
BUCKET_NAME = config.BUCKET_NAME

s3_client = boto3.client('s3',
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY)

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
    
@app.route('/generate_presigned_post', methods=['GET'])
def generate_presigned_post():

    user_id = request.args.get('user_id')

    result, status = check_user(user_id, interaction_collection)

    if status!=200:
        return result, status
    else: user_id = result

    expiration = config.EXPIRATION_TIME  
    expire_timestamp = int((datetime.now(timezone.utc) + timedelta(seconds=expiration)).timestamp())

    prefix = f'uploads/user_interactions_data/USER_{user_id}'
    
    try:
        # Generate a presigned POST URL
        response = s3_client.generate_presigned_post(
                    Bucket=BUCKET_NAME,
                    Key=f'{prefix}/${{filename}}',
                    ExpiresIn=expiration,
                    Conditions=[
                        ["content-length-range", 0*(1024*1024), 100*(1024*1024)], #100MB
                        ["starts-with", "$key", prefix],
                    ]
                )

        response['expire_timestamp'] = expire_timestamp 
        return jsonify(response)

    except NoCredentialsError:
        return jsonify({'error': 'Credentials not available'}), 403




if __name__ == '__main__':
    app.run(debug=True, port=5000)
