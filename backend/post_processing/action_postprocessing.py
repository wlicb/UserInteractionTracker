from pymongo import MongoClient
from datetime import datetime, timedelta
import config
import re

# Connect to MongoDB
client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
session_split_collection = db[config.SESSION_SPLIT_COLLECTION_NAME]
processed_interaction_collection = db[config.PROCESSED_INTERACTION_COLLECTION_NAME]  
# interactions after reorder, input_context, click_navigate
processed_session_split_collection = db[config.PROCESSED_SESSION_SPLIT_COLLECTION_NAME]  
# session split after reorder, input_context, click_navigate
processed_interaction_clean_collection = db[config.PROCESSED_INTERACTION_CLEAN_COLLECTION_NAME]  
# interactions after clean
processed_session_with_clean_interactions = db[config.PROCESSED_SESSION_CLEAN_INTERACTIONS_COLLECTION_NAME]
def parse_timestamp(ts):
    """Parse timestamp string to datetime object."""
    try:
        return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%S.%fZ")
    except ValueError:
        try:
            return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%SZ")
        except ValueError:
            return None

def is_search_box(input_action):
    """Check if the input action is for a search box."""
    if not input_action:
        return False
    
    if input_action.get('input-id') == 'twotabsearchtextbox':
        return True
    return False

def is_search_button(click_action):
    """Check if the click action is for a search button."""
    if not click_action or 'click' not in click_action.get('eventType', ''):
        return False
    
    # Check in data-semantic-id
    data_semantic_id = click_action.get('data-semantic-id', '').lower()
    if 'search_button' in data_semantic_id or 'search_input' in data_semantic_id:
        return True
    
    return False

def is_zero_position(click_action):
    """Check if the click action has zero position coordinates."""
    if not click_action or 'click' not in click_action.get('eventType', ''):
        return False
    
    # Check if mouse position is all zeros
    mouse_position = click_action.get('mousePosition', {})
    if mouse_position:
        x = mouse_position.get('clientX', 1000)
        y = mouse_position.get('clientY', 1000)
        return x == 0 and y == 0
    
    return False

def process_click_input_order(interactions):
    """Process and reorder click and input actions if needed."""
    processed_interactions = []
    i = 0
    count=0
    count_reorder=0
    while i < len(interactions):
        current_action = interactions[i]
        
        # Check if current action is a click and next action is an input
        if (i < len(interactions) - 1 and 
            'click' in current_action.get('eventType', '') and 
            'input' in interactions[i+1].get('eventType', '')):
            count+=1
            click_action = current_action
            input_action = interactions[i+1]
                

            # Check conditions for reordering
            should_reorder = is_zero_position(click_action)
            
            
            if should_reorder:
                count_reorder+=1
                # Assign processed_timestamp to both actions
                click_timestamp = click_action.get('timestamp', '')
                input_timestamp = input_action.get('timestamp', '')
                
                if click_timestamp and input_timestamp:
                    # Add processed_timestamp to both actions
                    click_action['processed_timestamp'],input_action['processed_timestamp'] = input_timestamp,click_timestamp
                    
                    # Swap the order
                    processed_interactions.append(input_action)
                    processed_interactions.append(click_action)
                    i += 2
                    continue
        
        processed_interactions.append(current_action)
        i += 1
    print('count',count)
    print('count_reorder',count_reorder)
    return processed_interactions

def process_input_context(interactions):
    """Add processed_context to input actions."""
    processed_interactions = []
    
    for i, action in enumerate(interactions):
        if 'input' in action.get('eventType', ''):
            # Default to None
            context_action = None
            
            # Get timestamps for comparison
            action_timestamp = parse_timestamp(action.get('timestamp', ''))
            
            # Check if there's a next action
            if i < len(interactions) - 1:
                next_action = interactions[i+1]
                next_timestamp = parse_timestamp(next_action.get('timestamp', ''))
                next_interval = (next_timestamp - action_timestamp).total_seconds() if next_timestamp and action_timestamp else float('inf')
            else:
                next_interval = float('inf')
            
            # Check if there's a previous action
            if i > 0:
                prev_action = interactions[i-1]
                prev_timestamp = parse_timestamp(prev_action.get('timestamp', ''))
                prev_interval = (action_timestamp - prev_timestamp).total_seconds() if prev_timestamp and action_timestamp else float('inf')
            else:
                prev_interval = float('inf')
            
            # If next interval is too long (> 2 seconds), compare with previous interval
            if next_interval > 2:
                # Choose the action with the shorter interval
                if prev_interval < next_interval:
                    context_action = interactions[i-1] if i > 0 else None
                else:
                    context_action = interactions[i+1] if i < len(interactions) - 1 else None
            else:
                # Default to next action if interval is reasonable
                context_action = interactions[i+1] if i < len(interactions) - 1 else None
            
            # If still no context action and we have a previous action, use that
            if context_action is None and i > 0:
                context_action = interactions[i-1]
                
            # Combine htmlId and timestamp from the context action
            if context_action:
                context_html_id = context_action.get('htmlSnapshotId', '')
                context_timestamp = context_action.get('timestamp', '')
                
                if context_html_id and context_timestamp:
                    action['processed_context'] = {
                        'htmlSnapshotId': context_html_id,
                        'timestamp': context_timestamp
                    }
        
        processed_interactions.append(action)
    
    return processed_interactions

def process_click_navigate(interactions):
    """Combine click and navigate actions."""
    processed_interactions = []
    i = 0
    click_navigate_count = 0
    while i < len(interactions):
        current_action = interactions[i]
        
        # Check if current action is a click and next action is a navigate
        if (i < len(interactions) - 1 and 
            'click' in current_action.get('eventType', '') ):
            if i<len(interactions)-2:
                next_action = interactions[i+1]
                if 'navigation' in next_action.get('eventType', '') and next_action.get('navigationType','') == 'new':
                    next_flag = True
                else:
                    next_flag = False
            else:
                next_flag = True
            
            if next_flag:
                click_navigate_count += 1
                click_action = current_action
                navigate_action = interactions[i+1]
                
                # Check time interval
                click_timestamp = parse_timestamp(click_action.get('timestamp', ''))
                navigate_timestamp = parse_timestamp(navigate_action.get('timestamp', ''))
                print(click_timestamp,navigate_timestamp)
                if click_timestamp and navigate_timestamp:
                    time_diff = navigate_timestamp - click_timestamp
                    
                    # If time interval is less than 1 second
                    if time_diff.total_seconds() < 6 or click_action.get('data-semantic-id',''):
                        # Add navigate attributes to click action
                        click_action['processed_navigate_to_new_page'] = {
                            'target_url': navigate_action.get('target_url', ''),
                            'htmlSnapshotId': navigate_action.get('htmlSnapshotId', ''),
                            'uuid': navigate_action.get('uuid', ''),
                            'timestamp': navigate_action.get('timestamp', '')
                        }
                        
                        processed_interactions.append(click_action)
                        i += 2
                        continue
        
        processed_interactions.append(current_action)
        i += 1
    print('click_navigate_count',click_navigate_count)
    return processed_interactions

def process_session_actions(session):
    """Process all actions in a session."""
    # Get all interactions for this session
    session_name = session.get('session_name') 
    uuid_list = session.get('uuid_list', [])
    session_length=len(uuid_list)
    if session_length<=4:
        return
    user_name = session.get('user_name')
    session_processed_time = session.get('processed_time')
    
    if not uuid_list:
        return
    
    # Get all interactions for this session
    interactions = list(interaction_collection.find(
        {"uuid": {"$in": uuid_list}},
        {"_id": 0}
    ).sort('timestamp', 1))
    
    if not interactions:
        return
    
    print('before processing',len(interactions))
    # Apply all processing steps
    processed_interactions = process_click_input_order(interactions)
    print('after processing click_input_order',len(processed_interactions))
    processed_interactions = process_input_context(processed_interactions)
    print('after processing input_context',len(processed_interactions))
    processed_interactions = process_click_navigate(processed_interactions)
    print('after processing click_navigate',len(processed_interactions))
    
    # Generate new UUIDs for processed interactions
    new_uuid_list = []
    for interaction in processed_interactions:
        # Generate a new UUID for the processed interaction
        new_uuid_list.append(interaction['uuid'])
        
        # Add session information
        interaction['session_name'] = session_name
        interaction['user_name'] = user_name
        interaction['processed_time'] = session_processed_time
    
    # Insert the processed interactions into the new collection
    if processed_interactions:
        processed_interaction_collection.insert_many(processed_interactions)
        print(f"Processed {len(processed_interactions)} interactions for session {session_name}")
    
    # Create a new processed session document
    processed_session = {
        "user_name": user_name,
        "session_name": session_name,
        "start_time": session.get('start_time'),
        "end_time": session.get('end_time'),
        "uuid_list": new_uuid_list,  # Use the new UUIDs
        "processed_time": session_processed_time,
        "is_long_interval": session.get('is_long_interval', False),
        "is_purchase": session.get('is_purchase', False)
    }
    
    # Insert the processed session into the new collection
    processed_session_split_collection.insert_one(processed_session)
    

def process_all_sessions():
    """Process all sessions in the database."""
    # Get all sessions
    sessions = list(session_split_collection.find({}, {"_id": 0}))
    
    for session in sessions:
        process_session_actions(session)

def process_user_sessions(user_name):
    """Process all sessions for a specific user."""
    # Get all sessions for the user
    sessions = list(session_split_collection.find(
        {"user_name": user_name},
        {"_id": 0}
    ))
    
    for session in sessions:
        process_session_actions(session)

def clean_data(session,save_to_db=False):
    """Clean data for a specific session."""
    # Get all interactions for this session
    processed_interactions = list(processed_interaction_collection.find(
        {"session_name": session.get('session_name')},
        {"_id": 0}
    ))
    
    if not processed_interactions:
        return
    
    # Sort interactions by timestamp
    processed_interactions.sort(key=lambda x: x.get('timestamp', ''))
    
    # Filter and transform interactions
    cleaned_interactions = []
    for interaction in processed_interactions:
        event_type = interaction.get('eventType', '')
        
        # Skip navigation, scroll, and tabactivate events
        if ('navigation' in event_type or 
            'scroll' in event_type or 
            'tabactivate' in event_type):
            continue
        
        # Skip input events with no input text
        if 'input' in event_type and not interaction.get('input-values', ''):
            continue
        
        # Check for purchase intention in click events
        if 'click' in event_type:
            # Check for purchase intention signals in various attributes
            
            data_semantic_id = interaction.get('data-semantic-id', '').lower()
            # element_meta_name = interaction.get('element-meta-name', '').lower()
            # inner_text = target.get('innerText', '').lower()
            # outer_html = target.get('outerHTML', '').lower()
            
            # Define purchase intention keywords
            # purchase_keywords = ['buy now', 'checkout', 'purchase', 
            #                    'subscribe', 'subscription', 'proceed to checkout', 
            #                    'place your order', 'buy', 'complete purchase']
            
            # Check if any purchase keyword exists in the relevant fields
            # is_purchase_intent = any(keyword in text for keyword in purchase_keywords 
            #                         for text in [data_semantic_id, element_meta_name, inner_text, outer_html]
            #                         if text)
            is_purchase_intent = any([data_semantic_id.endswith("buy_now"),
                              data_semantic_id.endswith("check_out"),
                              data_semantic_id.endswith("set_up_now")])
            
            if is_purchase_intent:
                interaction['eventType'] = 'purchase_intent'
            else:
                # Categorize non-purchase clicks
                if is_search_button(interaction):
                    interaction['eventType'] = 'click'  # Search button
                    interaction['click_type'] = 'search'
                elif 'refinements' in data_semantic_id:
                    interaction['eventType'] = 'click'  # Filter
                    interaction['click_type'] = 'filter'
                else:
                    interaction['eventType'] = 'click'  # Other clicks
                    interaction['click_type'] = 'other'
        # Add to cleaned interactions
        cleaned_interactions.append(interaction)
    
    # Check if we need to add a termination action
    if cleaned_interactions:
        last_action = cleaned_interactions[-1]
        if last_action.get('eventType') != 'purchase_intent':
            # Create termination action
            termination_action = {
                'eventType': 'termination',
                'timestamp': last_action.get('timestamp', ''),  # Same timestamp as last action
                'uuid': f"{last_action.get('uuid', '')}_termination",
                'session_name': session.get('session_name'),
                'user_name': session.get('user_name'),
                'processed_time': session.get('processed_time')
            }
            cleaned_interactions.append(termination_action)
    
    # Insert the cleaned interactions into the clean collection
    if cleaned_interactions and save_to_db:
        processed_interaction_clean_collection.insert_many(cleaned_interactions)
        print(f"Cleaned {len(cleaned_interactions)} interactions for session {session.get('session_name')}")
    
    return cleaned_interactions

def process_clean_data():
    """
    clean data from processed_interaction_collection and insert into processed_interaction_clean_collection
    delete navigation 
    delete scroll
    delete tabactivate
    leaving input,click
    delete input if there is no input-text
    define a new purchase intention action from clicks (use clicking on buy_now button, subscription button, proceed to checkout button as signal)
    split the remaining click into different types (search button, filter, others) and name different clicks (click_a, click_b, click_c) all 'click'
    add a termination action for each session if the last action is not a purchase intention action
    """
    # Get all sessions
    processed_sessions = list(processed_session_split_collection.find({}, {"_id": 0}))
    
    for session in processed_sessions:
        cleaned_interactions = clean_data(session)
        if cleaned_interactions:
            # Initialize uuid_list_cleaned as an empty list
            session['uuid_list_cleaned'] = []
            for interaction in cleaned_interactions:
                session['uuid_list_cleaned'].append(interaction['uuid'])
            
            processed_session_with_clean_interactions.insert_one(session)

def clean_data_distribution():
    processed_sessions = list(processed_session_with_clean_interactions.find({}, {"_id": 0}))
    
    # Initialize counters
    length_distribution = {
        "1-2": {"total": 0, "terminate": 0, "purchase": 0},
        "3": {"total": 0, "terminate": 0, "purchase": 0},
        "4": {"total": 0, "terminate": 0, "purchase": 0},
        "5-10": {"total": 0, "terminate": 0, "purchase": 0},
        "11-20": {"total": 0, "terminate": 0, "purchase": 0},
        "21-35": {"total": 0, "terminate": 0, "purchase": 0},
        "35-50": {"total": 0, "terminate": 0, "purchase": 0},
        "50+": {"total": 0, "terminate": 0, "purchase": 0}
    }
    
    total_sessions = 0
    total_terminate = 0
    total_purchase = 0
    
    # Analyze each session
    for session in processed_sessions:
        # Get session length and UUID list
        uuid_list = session.get('uuid_list_cleaned', [])
        length = len(uuid_list)
        if length == 0:
            continue
            
        total_sessions += 1
        
        # Get the last action to determine end type
        last_uuid = uuid_list[-1]
        last_action = processed_interaction_clean_collection.find_one({"uuid": last_uuid}, {"_id": 0})
        
        # Determine end type
        end_type = "terminate"
        if last_action and last_action.get('eventType') == 'purchase_intent':
            end_type = "purchase"
            total_purchase += 1
        else:
            total_terminate += 1
        
        # Categorize by length
        category = None
        if 1 <= length <= 2:
            category = "1-2"
        elif length == 3:
            category = "3"
        elif length == 4:
            category = "4"
        elif 5 <= length <= 10:
            category = "5-10"
        elif 11 <= length <= 20:
            category = "11-20"
        elif 21 <= length <= 35:
            category = "21-35"
        elif 35 <= length <= 50:
            category = "35-50"
        else:
            category = "50+"
            
        if category:
            length_distribution[category]["total"] += 1
            length_distribution[category][end_type] += 1
    
    # Calculate average length
    processed_lengths = [len(session.get('uuid_list_cleaned', [])) for session in processed_sessions]
    average_length = sum(processed_lengths) / len(processed_lengths) if processed_lengths else 0
    print(f"Average session length after cleaning: {average_length:.2f}")
    
    # Print statistics
    print(f"\nTotal sessions: {total_sessions}")
    print(f"Sessions ending with purchase: {total_purchase} ({(total_purchase/total_sessions*100):.2f}%)")
    print(f"Sessions ending with termination: {total_terminate} ({(total_terminate/total_sessions*100):.2f}%)")
    
    print("\nBreakdown by length category:")
    print("=" * 80)
    print(f"{'Length':<10} {'Total':<10} {'Purchase':<10} {'Terminate':<10} {'Purchase %':<10} {'Terminate %':<10}")
    print("-" * 80)
    
    for category, counts in length_distribution.items():
        if counts["total"] > 0:
            purchase_pct = counts["purchase"] / counts["total"] * 100
            terminate_pct = counts["terminate"] / counts["total"] * 100
            print(f"{category:<10} {counts['total']:<10} {counts['purchase']:<10} {counts['terminate']:<10} {purchase_pct:.2f}%{'':<5} {terminate_pct:.2f}%")
    
    # Prepare data for plotting
    categories = []
    purchase_counts = []
    terminate_counts = []
    
    for category, counts in length_distribution.items():
        if counts["total"] > 0:
            categories.append(category)
            purchase_counts.append(counts["purchase"])
            terminate_counts.append(counts["terminate"])
    
    # Create stacked bar chart
    from matplotlib import pyplot as plt
    plt.figure(figsize=(14, 8))
    
    width = 0.65
    plt.bar(categories, purchase_counts, width, label='Purchase', color='#3498db')
    plt.bar(categories, terminate_counts, width, bottom=purchase_counts, label='Terminate', color='#e74c3c')
    
    # Add text annotations
    for i, category in enumerate(categories):
        total = purchase_counts[i] + terminate_counts[i]
        purchase_pct = purchase_counts[i] / total * 100 if total > 0 else 0
        
        # Show percentage on bars
        if purchase_counts[i] > 0:
            plt.text(i, purchase_counts[i]/2, f"{purchase_pct:.1f}%", 
                     ha='center', va='center', color='white', fontweight='bold')
        
        if terminate_counts[i] > 0:
            plt.text(i, purchase_counts[i] + terminate_counts[i]/2, f"{100-purchase_pct:.1f}%", 
                     ha='center', va='center', color='white', fontweight='bold')
        
        # Show totals above bars
        plt.text(i, purchase_counts[i] + terminate_counts[i] + 1, str(total), 
                 ha='center', va='bottom')
    
    plt.xlabel('Session Length')
    plt.ylabel('Number of Sessions')
    plt.title(f'Distribution of Session Endings by Length Category (Avg Length: {average_length:.2f})')
    plt.legend(loc='upper right')
    plt.xticks(rotation=45)
    plt.tight_layout()
    
    plt.savefig('session_endings_by_length.png')
    plt.close()

if __name__ == "__main__":
    import sys
    
    # if len(sys.argv) > 1:
    #     # Process specific user
    #     user_name = sys.argv[1]
    #     process_user_sessions(user_name)
    # else:
    #     # Process all sessions
    #     process_all_sessions()

    # process_clean_data()
    clean_data_distribution()