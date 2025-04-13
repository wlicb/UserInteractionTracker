import boto3
import json
import os
import gzip
import io
from typing import List, Dict, Any
import pandas as pd
from sklearn.metrics import accuracy_score, f1_score
import openai
import config
from pymongo import MongoClient
# Initialize AWS S3 client
s3_client = boto3.client('s3')
BUCKET_NAME = config.S3_BUCKET_NAME

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]

processed_interaction_clean_collection = db[config.PROCESSED_INTERACTION_CLEAN_COLLECTION_NAME]  

processed_session_with_clean_interactions = db[config.PROCESSED_SESSION_CLEAN_INTERACTIONS_COLLECTION_NAME]

def get_html_context_from_s3(user_name: str, uuid_list: List[str]) -> List[str]:
    """Fetch HTML context from S3 for a given UUID list."""
    html_dict = {}
    for uuid in uuid_list:
        try:
            # Use the known base path structure
            base_prefix = f"/USER/{user_name}/html/"
            
            # List objects in the bucket with the UUID in the key, but only within the known path
            paginator = s3_client.get_paginator('list_objects_v2')
            found_files = []
            
            for page in paginator.paginate(
                Bucket=BUCKET_NAME,
                Prefix=base_prefix
            ):
                if 'Contents' not in page:
                    continue
                    
                for obj in page['Contents']:
                    key = obj['Key']
                    # Check if the key contains the UUID
                    if uuid in key and (key.endswith('.html.gz') or key.endswith('.html')):
                        found_files.append(key)
                
                # If we found both the original and simplified files, we can stop searching
                if len(found_files) >= 2:
                    break
            
            # Process the found files
            html_content = ""
            for key in found_files:
                try:
                    response = s3_client.get_object(
                        Bucket=BUCKET_NAME,
                        Key=key
                    )
                    
                    # Handle gzipped content
                    if key.endswith('.gz'):
                        with gzip.GzipFile(fileobj=response['Body']) as gz_file:
                            html_content = gz_file.read().decode('utf-8')
                    else:
                        html_content = response['Body'].read().decode('utf-8')
                    
                    # If this is the simplified version, use it
                    if 'simplified' in key:
                        html_dict[uuid] = html_content
                        break
                except Exception as e:
                    print(f"Error processing file {key}: {str(e)}")
            
            # If we didn't find a simplified version or couldn't process it, use the original
            if not html_dict and html_content:
                html_dict[uuid] = html_content
            
            # If we still don't have any content, add an empty string
            if not html_dict:
                print(f"Error: Could not find HTML context for UUID {uuid} in path {base_prefix}")
                html_dict[uuid] = ""
                
        except Exception as e:
            print(f"Error fetching HTML context for UUID {uuid}: {str(e)}")
            html_dict[uuid] = ""
            
    return html_dict

def get_session_context(session: Dict[str, Any]) -> List[str]:
    """Get the context for a session."""
    if not session:
        return []
    user_name = session.get('user_name', '')
    session_uuid_list = session.get('uuid_list', [])
    if not user_name or not session_uuid_list:
        return []
    
    return get_html_context_from_s3(user_name, session_uuid_list)

def get_session_interactions(session: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Get all interactions for a session."""
    if not session:
        return []
    
    interactions = []
    user_name = session.get('user_name', '')
    last_html_context = ""
    html_contexts = get_html_context_from_s3(user_name, session.get('uuid_list', []))
    for uuid in session.get('uuid_list', []):
        interaction = processed_interaction_clean_collection.find_one({'uuid': uuid})
        if interaction:
            if interaction.get('eventType') == 'termination':
                interactions.append({
                    'uuid': uuid,
                    'action_type': 'termination',
                    'action_data': {},
                    'html_context': last_html_context,
                    'timestamp': interaction.get('timestamp', 0)
                })
                continue
            if interaction.get('eventType') == 'click':
                action_data={
                    'click_type': interaction.get('click_type', ''),
                    'target': interaction.get('target', ''),
                    'semantic_id': interaction.get('data-semantic-id', ''),
                    'selector': interaction.get('selector', ''),
                    'url': interaction.get('url', ''),
                    
                }
                html_context = html_contexts[uuid]
                last_html_context = html_context
            elif interaction.get('eventType') == 'input':
                action_data={
                    'target': interaction.get('input-id', ''),
                    'value': interaction.get('input-values', ''),
                    'selector': interaction.get('selector', ''),
                    'url': interaction.get('url', ''),
                    
                }
                html_context = html_contexts[interaction['processed_context']['htmlSnapshotId'].split('_')[-1]]
                last_html_context = html_context
            elif interaction.get('eventType') == 'purchase_intent':
                action_data={
                    'target': interaction.get('target', ''),
                    'semantic_id': interaction.get('data-semantic-id', ''),
                    'selector': interaction.get('selector', ''),
                    'url': interaction.get('url', ''),
                }
                html_context = html_contexts[uuid]
                last_html_context = html_context
            else:
                action_data={}
            interactions.append({
                'uuid': uuid,
                'action_type': interaction.get('eventType', ''),
                'action_data': action_data,
                'html_context': html_context,
                'timestamp': interaction.get('timestamp', 0)
            })
    
    return sorted(interactions, key=lambda x: x['timestamp'])

def predict_next_action(interactions: List[Dict[str, Any]], current_index: int) -> str:
    """Predict the next action using GPT-4."""
    # Prepare the context for GPT-4
    context = "Given the following interaction sequence and HTML contexts, predict the next action type:\n\n"
    
    for i, interaction in enumerate(interactions[:current_index + 1]):
        context += f"Step {i + 1}:\n"
        context += f"Action Type: {interaction['action_type']}\n"
        context += f"HTML Context: {interaction['html_context'][:500]}...\n\n"
    
    # Call GPT-4 API
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an expert at predicting user interactions on web pages."},
            {"role": "user", "content": context}
        ]
    )
    
    return response.choices[0].message.content.strip()

def evaluate_predictions(true_actions: List[str], predicted_actions: List[str]) -> Dict[str, float]:
    """Calculate accuracy and F1 score for predictions."""
    accuracy = accuracy_score(true_actions, predicted_actions)
    f1 = f1_score(true_actions, predicted_actions, average='weighted')
    
    return {
        'accuracy': accuracy,
        'f1_score': f1
    }

def main():

    results = []
    
    try:
        # Get all processed sessions
        sessions = processed_session_with_clean_interactions.find().limit(2)
        
        for session in sessions:
            behavior_data = get_session_interactions(session)
            exit()
            if len(interactions) < 5:
                continue
                
            

            true_actions = []
            predicted_actions = []
            
            # Predict actions for all interactions after the first one
            for i in range(1, len(interactions)):
                true_action = interactions[i]['action_type']
                predicted_action = predict_next_action(interactions, i-1)
                
                true_actions.append(true_action)
                predicted_actions.append(predicted_action)
            
            # Evaluate predictions for this session
            session_results = evaluate_predictions(true_actions, predicted_actions)
            results.append({
                'session_id': session.session_id,
                **session_results
            })
    
    finally:
        db_session.close()
    
    # Calculate overall metrics
    df_results = pd.DataFrame(results)
    overall_accuracy = df_results['accuracy'].mean()
    overall_f1 = df_results['f1_score'].mean()
    
    print(f"Overall Accuracy: {overall_accuracy:.4f}")
    print(f"Overall F1 Score: {overall_f1:.4f}")
    
    # Save detailed results
    df_results.to_csv('action_prediction_results.csv', index=False)

if __name__ == "__main__":
    main() 