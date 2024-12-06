from flask import Flask, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        app.logger.info('No file part in the request')
        return {'error': 'No file part'}, 400
    
    file = request.files['file']
    if file.filename == '':
        app.logger.info('No selected file')
        return {'error': 'No selected file'}, 400

    if file:
        # Create directory structure if it doesn't exist
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        file.save(filepath)
        app.logger.info(f'File {file.filename} uploaded successfully')
        return {'message': f'File {file.filename} uploaded successfully'}, 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
