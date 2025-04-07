import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from pymongo import MongoClient
from config import MONGO_URI, DATABASE_NAME, INTERACTION_COLLECTION_NAME, USER_COLLECTION_NAME

# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
interaction_collection = db[INTERACTION_COLLECTION_NAME]
user_collection = db[USER_COLLECTION_NAME]

def get_user_interactions(start_date):
    """
    Get interaction data for all users within the specified date range
    
    Args:
        start_date (datetime): Start date
        
    Returns:
        dict: Dictionary with username as key and interaction list as value
    """
    all_users = list(user_collection.find({}, {"user_name": 1, "_id": 0}))
    user_interactions = {}
    
    for user in all_users:
        user_name = user.get("user_name")
        if not user_name:
            continue
        
        # Get user interaction data
        query = {
            "user_name": user_name,
            "timestamp": {"$gte": start_date.isoformat()}
        }
        
        interactions = list(interaction_collection.find(
            query,
            {"timestamp": 1, "eventType": 1, "_id": 0,'navigationType':1}
        ).sort("timestamp", 1))
        
        if interactions:
            user_interactions[user_name] = interactions
            print(f"Retrieved {len(interactions)} interaction records for user {user_name}")
    
    return user_interactions

def calculate_general_intervals(user_interactions):
    """
    Calculate time intervals between all interactions for all users
    
    Args:
        user_interactions (dict): User interaction data
        
    Returns:
        list: All time intervals (in seconds)
    """
    all_intervals = []
    click_types = {'click_a', 'click_b', 'click_c'}
    skipped_patterns = 0
    
    for user_name, interactions in user_interactions.items():
        if len(interactions) < 2:
            continue
        
        # Calculate intervals for this user
        i = 0
        while i < len(interactions) - 1:
            try:
                current_event = interactions[i].get('eventType', '').lower()
                next_event = interactions[i + 1].get('eventType', '').lower()
                next_nav_type = interactions[i + 1].get('navigationType', '')
                
                # Check if next event should be skipped
                is_current_click = current_event in click_types
                is_next_click = next_event in click_types
                is_next_new_nav = next_nav_type == 'new'
                
                should_skip_next = (
                    (is_current_click and is_next_new_nav) or
                    (current_event == 'input' and is_next_click)
                )
                
                if should_skip_next and i < len(interactions) - 2:
                    # Find the next valid event
                    next_valid_idx = i + 2
                    current_time = datetime.fromisoformat(interactions[i]["timestamp"].replace('Z', '+00:00'))
                    next_valid_time = datetime.fromisoformat(interactions[next_valid_idx]["timestamp"].replace('Z', '+00:00'))
                    interval_seconds = (next_valid_time - current_time).total_seconds()
                    all_intervals.append(interval_seconds)
                    
                    skipped_patterns += 1
                    i = next_valid_idx
                else:
                    # Calculate normal interval
                    current_time = datetime.fromisoformat(interactions[i]["timestamp"].replace('Z', '+00:00'))
                    next_time = datetime.fromisoformat(interactions[i + 1]["timestamp"].replace('Z', '+00:00'))
                    interval_seconds = (next_time - current_time).total_seconds()
                    all_intervals.append(interval_seconds)
                    i += 1
                    
            except (ValueError, KeyError) as e:
                print(f"Error processing timestamps for user {user_name}: {e}")
                i += 1
    
    # Print statistics about skipped patterns
    print(f"Patterns skipped (but intervals calculated): {skipped_patterns}")
    
    return all_intervals

def calculate_scroll_intervals(user_interactions):
    """
    Calculate time intervals between consecutive scroll operations
    
    Args:
        user_interactions (dict): User interaction data
        
    Returns:
        list: Time intervals between consecutive scroll operations (in seconds)
    """
    scroll_intervals = []
    
    for user_name, interactions in user_interactions.items():
        # Track the last scroll event
        last_scroll_time = None
        
        for interaction in interactions:
            try:
                if "eventType" in interaction and interaction["eventType"].lower() == "scroll":
                    current_time = datetime.fromisoformat(interaction["timestamp"].replace('Z', '+00:00'))
                    
                    # If there was a previous scroll event, calculate the interval
                    if last_scroll_time:
                        interval_seconds = (current_time - last_scroll_time).total_seconds()
                        scroll_intervals.append(interval_seconds)
                    
                    # Update the last scroll time
                    last_scroll_time = current_time
                    
            except (ValueError, KeyError) as e:
                print(f"Error processing scroll events for user {user_name}: {e}")
    
    return scroll_intervals

def calculate_click_intervals(user_interactions):
    """
    Calculate time intervals before and after click operations
    
    Args:
        user_interactions (dict): User interaction data
        
    Returns:
        dict: Interval data for different click types
    """
    # Initialize interval lists for different click types
    click_intervals = {
        "click_a_before": [],
        "click_a_after": [],
        "click_b_before": [],
        "click_b_after": [],
        "click_c_before": [],
        "click_c_after": [],
        "all_clicks_before": [],
        "all_clicks_after": []
    }
    
    for user_name, interactions in user_interactions.items():
        if len(interactions) < 2:
            continue
        
        for i in range(len(interactions)):
            try:
                # Check if this is a click event
                interaction_type = interactions[i].get("eventType", "").lower()
                if "click" in interaction_type:
                    current_time = datetime.fromisoformat(interactions[i]["timestamp"].replace('Z', '+00:00'))
                    
                    # Calculate interval before the click
                    if i > 0:
                        prev_time = datetime.fromisoformat(interactions[i-1]["timestamp"].replace('Z', '+00:00'))
                        interval_before = (current_time - prev_time).total_seconds()
                        
                        # Add to the appropriate click type list
                        if "click_a" in interaction_type:
                            click_intervals["click_a_before"].append(interval_before)
                        elif "click_b" in interaction_type:
                            click_intervals["click_b_before"].append(interval_before)
                        elif "click_c" in interaction_type:
                            click_intervals["click_c_before"].append(interval_before)
                        
                        # Add to the list of all clicks
                        click_intervals["all_clicks_before"].append(interval_before)
                    
                    # Calculate interval after the click
                    if i < len(interactions) - 1:
                        next_time = datetime.fromisoformat(interactions[i+1]["timestamp"].replace('Z', '+00:00'))
                        interval_after = (next_time - current_time).total_seconds()
                        
                        # Add to the appropriate click type list
                        if "click_a" in interaction_type:
                            click_intervals["click_a_after"].append(interval_after)
                        elif "click_b" in interaction_type:
                            click_intervals["click_b_after"].append(interval_after)
                        elif "click_c" in interaction_type:
                            click_intervals["click_c_after"].append(interval_after)
                        
                        # Add to the list of all clicks
                        click_intervals["all_clicks_after"].append(interval_after)
                        
            except (ValueError, KeyError) as e:
                print(f"Error processing click events for user {user_name}: {e}")
    
    return click_intervals

def draw_distribution(intervals, title, filename, max_value=50):
    """
    Draw a distribution histogram of intervals
    
    Args:
        intervals (list): List of intervals (in seconds)
        title (str): Chart title
        filename (str): Filename to save
        max_value (float): Maximum interval value (in seconds)
    
    Returns:
        dict: Statistical data
    """
    if not intervals:
        print(f"No data to plot chart: {title}")
        return None
    
    # Filter intervals less than or equal to the maximum value
    filtered_intervals = [i for i in intervals if i <= max_value]
    
    if not filtered_intervals:
        print(f"No data after filtering to plot chart: {title}")
        return None
    
    plt.figure(figsize=(12, 6))
    
    # Calculate appropriate bin size to make bars narrower
    data_range = max(filtered_intervals) - min(filtered_intervals)
    if data_range > 0:
        # Make bars narrower by reducing bin width to 0.25 seconds
        bin_width = 0.25  # Changed from 1 to 0.25 
        bins = np.arange(min(filtered_intervals), max(filtered_intervals) + bin_width, bin_width)
    else:
        bins = 50
    
    plt.hist(filtered_intervals, bins=bins, alpha=0.7, color='skyblue', edgecolor='black')
    plt.title(title)
    plt.xlabel('Time Interval (seconds)')
    plt.ylabel('Frequency')
    plt.grid(True, alpha=0.3)
    
    # Add statistical summary
    mean_val = np.mean(filtered_intervals)
    median_val = np.median(filtered_intervals)
    plt.axvline(mean_val, color='red', linestyle='dashed', linewidth=1, label=f'Mean: {mean_val:.2f}s')
    plt.axvline(median_val, color='green', linestyle='dashed', linewidth=1, label=f'Median: {median_val:.2f}s')
    
    plt.legend()
    plt.tight_layout()
    plt.savefig(filename)
    plt.close()
    print(f"Distribution saved as {filename}")
    
    # Calculate and return statistics
    stats = {
        "count": len(filtered_intervals),
        "mean": mean_val,
        "median": median_val,
        "min": min(filtered_intervals),
        "max": max(filtered_intervals),
        "std": np.std(filtered_intervals)
    }
    
    print(f"Statistics for {title}:")
    for key, value in stats.items():
        print(f"  {key}: {value}")
    
    return stats

def draw_full_distribution(intervals, title, filename):
    """
    Draw a distribution histogram of intervals without filtering by maximum value
    
    Args:
        intervals (list): List of intervals (in seconds)
        title (str): Chart title
        filename (str): Filename to save
    
    Returns:
        dict: Statistical data
    """
    if not intervals:
        print(f"No data to plot chart: {title}")
        return None
    
    # Convert intervals from seconds to minutes and filter out invalid values
    intervals_minutes = [i / 60 for i in intervals if i > 0]  # Only keep positive values
    
    if not intervals_minutes:
        print(f"No valid data to plot chart after filtering: {title}")
        return None
    
    plt.figure(figsize=(12, 6))
    
    # Calculate appropriate bin size
    min_val = min(intervals_minutes)
    max_val = max(intervals_minutes)
    
    # Print some debug information
    print(f"Number of intervals: {len(intervals_minutes)}")
    print(f"Min value: {min_val:.4f} minutes")
    print(f"Max value: {max_val:.4f} minutes")
    
    # Create log-spaced bins
    if min_val < max_val:
        # Ensure minimum value is positive for log scale
        min_val = max(min_val, 1e-6)  # Set minimum to 1 microsecond in minutes
        log_bins = np.logspace(np.log10(min_val), np.log10(max_val), 50)
        
        # Create histogram with density=True for normalized frequency
        plt.hist(intervals_minutes, bins=log_bins, alpha=0.7, color='skyblue', 
                edgecolor='black', density=True)
        plt.xscale('log')
        
        # Add grid with appropriate scale
        plt.grid(True, which="both", ls="-", alpha=0.2)
        
        # Format x-axis with appropriate tick labels
        plt.gca().xaxis.set_major_formatter(plt.FuncFormatter(lambda x, _: f"{x:.2f}"))
    else:
        print("Warning: min_val >= max_val, using regular histogram")
        plt.hist(intervals_minutes, bins=50, alpha=0.7, color='skyblue', 
                edgecolor='black', density=True)
    
    plt.title(title)
    plt.xlabel('Time Interval (minutes)')
    plt.ylabel('Normalized Frequency')
    
    # Add statistical summary
    mean_val = np.mean(intervals_minutes)
    median_val = np.median(intervals_minutes)
    plt.axvline(mean_val, color='red', linestyle='dashed', linewidth=1, 
                label=f'Mean: {mean_val:.2f} min')
    plt.axvline(median_val, color='green', linestyle='dashed', linewidth=1, 
                label=f'Median: {median_val:.2f} min')
    
    plt.legend()
    plt.tight_layout()
    plt.savefig(filename)
    plt.close()
    print(f"Full distribution saved as {filename}")
    
    # Calculate and return statistics (in minutes)
    stats = {
        "count": len(intervals_minutes),
        "mean": mean_val,
        "median": median_val,
        "min": min_val,
        "max": max_val,
        "std": np.std(intervals_minutes)
    }
    
    print(f"Statistics for {title} (in minutes):")
    for key, value in stats.items():
        print(f"  {key}: {value}")
    
    return stats

def main():
    """Main function: Perform analysis and draw distribution charts"""
    print("Starting analysis of user interaction intervals from the past week...")
    
    # Calculate date from one week ago
    now = datetime.now()
    start_date = now - timedelta(days=7)
    
    print(f"Analysis period: {start_date.strftime('%Y-%m-%d')} to {now.strftime('%Y-%m-%d')}")
    
    # Create output directory
    output_dir = "interval_analysis"
    os.makedirs(output_dir, exist_ok=True)
    
    # Get user interaction data
    user_interactions = get_user_interactions(start_date)
    
    if not user_interactions:
        print("No user interaction data found. Analysis complete.")
        return
    
    print(f"Retrieved interaction data for {len(user_interactions)} users")
    
    # 1. Calculate and plot the distribution of all interaction intervals
    all_intervals = calculate_general_intervals(user_interactions)
    general_stats = draw_distribution(
        all_intervals,
        "Distribution of All User Interaction Intervals (≤ 50 seconds)",
        f"{output_dir}/all_interactions_intervals.png",
        max_value=50
    )
    
    # Draw full distribution without the 50-second limit
    full_general_stats = draw_full_distribution(
        all_intervals,
        "Full Distribution of All User Interaction Intervals",
        f"{output_dir}/full_all_interactions_intervals.png"
    )
    
    # 2. Calculate and plot the distribution of consecutive scroll operation intervals
    scroll_intervals = calculate_scroll_intervals(user_interactions)
    scroll_stats = draw_distribution(
        scroll_intervals,
        "Distribution of Consecutive Scroll Operation Intervals (≤ 50 seconds)",
        f"{output_dir}/scroll_intervals.png",
        max_value=50
    )
    
    # 3. Calculate and plot the distribution of click operation intervals
    click_intervals = calculate_click_intervals(user_interactions)
    
    # Plot the combined distributions of all click types
    all_clicks_before_stats = draw_distribution(
        click_intervals["all_clicks_before"],
        "Distribution of Intervals Before Click Operations (≤ 50 seconds)",
        f"{output_dir}/all_clicks_before_intervals.png",
        max_value=50
    )
    
    all_clicks_after_stats = draw_distribution(
        click_intervals["all_clicks_after"],
        "Distribution of Intervals After Click Operations (≤ 50 seconds)",
        f"{output_dir}/all_clicks_after_intervals.png",
        max_value=50
    )
    
    # Save results to CSV file
    intervals_data = []
    
    # Add all interaction interval data
    for interval in all_intervals:
        if interval <= 50:
            intervals_data.append({
                "type": "all_interactions",
                "interval_seconds": interval
            })
    
    # Add scroll interval data
    for interval in scroll_intervals:
        if interval <= 50:
            intervals_data.append({
                "type": "consecutive_scrolls",
                "interval_seconds": interval
            })
    
    # Add click interval data
    for click_type, intervals in click_intervals.items():
        for interval in intervals:
            if interval <= 50:
                intervals_data.append({
                    "type": click_type,
                    "interval_seconds": interval
                })
    
    # Save as CSV
    df = pd.DataFrame(intervals_data)
    csv_file = f"{output_dir}/all_intervals_data.csv"
    df.to_csv(csv_file, index=False)
    print(f"All interval data saved to {csv_file}")
    
    # Collect all statistics and save to text file
    stats = {
        "analysis_period": f"{start_date.strftime('%Y-%m-%d')} to {now.strftime('%Y-%m-%d')}",
        "all_interactions": general_stats,
        "full_all_interactions": full_general_stats,
        "consecutive_scrolls": scroll_stats,
        "before_click_operations": all_clicks_before_stats,
        "after_click_operations": all_clicks_after_stats
    }
    
    with open(f"{output_dir}/interval_statistics.txt", "w", encoding="utf-8") as f:
        for category, category_stats in stats.items():
            f.write(f"{category}:\n")
            if isinstance(category_stats, dict):
                for key, value in category_stats.items():
                    f.write(f"  {key}: {value}\n")
            else:
                f.write(f"  {category_stats}\n")
    
    print("Interval analysis complete!")

if __name__ == "__main__":
    main()
