"""
Rewritten extract_purchase_info_db.py to process interactions from the database rather than local JSON files.
Each time you call process_order_info(user_name), it will gather interactions for that user from the DB,
apply the same logic to extract order data, and store results in a new "order_processed" collection.
"""

import json
from urllib.parse import urlparse

from pymongo import MongoClient
from datetime import datetime, timezone

import config

client = MongoClient(config.MONGO_URI)
db = client[config.DATABASE_NAME]
interaction_collection = db[config.INTERACTION_COLLECTION_NAME]
order_collection = db[config.ORDER_COLLECTION_NAME]
order_processed_collection = db["order_processed"]


def is_cart_page(url):
    """
    Check if the provided URL path matches a known cart page endpoint.
    Returns True if it is a cart page, otherwise False.
    """
    path = urlparse(url).path
    return path in ["/gp/cart/view.html", "/cart"]


def is_add_to_cart_page(url):
    """
    Check if the provided URL path matches a known 'add to cart' endpoint.
    Returns True if it is an add-to-cart page, otherwise False.
    """
    path = urlparse(url).path
    return path in ["/cart/smart-wagon", "/cart/add-to-cart"]


def is_fresh_substitution_page(url):
    """
    Check if the provided URL path matches a known Fresh substitution page endpoint.
    Returns True if it is a Fresh substitution page, otherwise False.
    """
    path = urlparse(url).path
    return path in ["/alm/substitution"]


def match_quantity(asin, title, interactions, index):
    """
    Traverse the interactions backwards from the given index to find
    the item matching the provided ASIN. Return the quantity if found
    and is non-zero, otherwise return an empty string.
    """
    quantity = ""
    # Loop backward through the interactions
    for i in range(index, -1, -1):
        interaction = interactions[i]
        # Some data might be in "page-meta" or "pageMeta":
        page_meta = interaction.get("page-meta", interaction.get("pageMeta", {}))

        # Look for the item in active_items
        for item in page_meta.get("active_items", []):
            if item.get("asin") == asin:
                quantity = item.get("quantity", "")
                if quantity != "0" and quantity != "":
                    return quantity

        # If not found in active_items, look in promotion_items
        for item in page_meta.get("promotion_items", []):
            if item.get("asin") == asin:
                quantity = item.get("quantity", "")
                if quantity != "0" and quantity != "":
                    return quantity

    # If quantity is "0", reset it to empty string
    if quantity == "0":
        quantity = ""
    return quantity


def process_order_info(user_name):
    """
    Gathers all interactions for the given user from the DB,
    applies extraction logic to build an order_result,
    and stores the result in a new document in the 'order_processed' collection.
    Also marks processed documents so they're not processed repeatedly.
    """

    interactions_cursor = interaction_collection.find({
        "user_name": user_name,
        "processed_order": {"$ne": True}
    })
    interactions = list(interactions_cursor)

    # Sort by timestamp if needed (assuming ISO8601 strings, you can also sort in DB query if you prefer)
    # For safety, we'll do a stable sort here:
    interactions.sort(key=lambda x: x.get("timestamp", ""))

    order_cursor = order_collection.find({
        "user_name": user_name,
        "processed_order": {"$ne": True}
    })
    add_to_cart_orders = list(order_cursor)
    add_to_cart_orders.sort(key=lambda x: x.get("timestamp", ""))

    order_result = []
    if len(interactions) > 0:
    # We iterate over the interactions just like the script did with enumerate
        for index, interaction in enumerate(interactions):
            product_result = {
                "uuid": interaction.get("uuid"),
                "timestamp": interaction.get("timestamp"),
                "products": []
            }

            # Some data come from "page-meta", others from "pageMeta"
            page_meta = interaction.get("page-meta", interaction.get("pageMeta", {}))
            semantic_id = interaction.get("data-semantic-id", "")

            # -- Logic for buy_now or set_up_now
            if semantic_id.endswith("buy_now") or semantic_id.endswith("set_up_now"):
                product_info = {
                    "asin": None,
                    "title": None,
                    "price": None,
                    "quantity": None,
                    "options": []
                }

                # If we have product_details, collect them
                if "product_details" in page_meta:
                    for detail in page_meta["product_details"]:
                        if "title" in detail:
                            product_info["title"] = detail["title"]
                        if "price" in detail:
                            product_info["price"] = detail["price"]
                        if "asin" in detail:
                            product_info["asin"] = detail["asin"]

                # Gather product_options if present
                if "product_options" in page_meta:
                    product_info["options"] = page_meta["product_options"]

                # Gather product_quantity if present
                if "product_quantity" in page_meta:
                    product_info["quantity"] = page_meta["product_quantity"][0].get("quantity", "")

                # "active_items_opened_purchase" key may store the purchase item details
                if "active_items_opened_purchase" in page_meta:
                    item = page_meta["active_items_opened_purchase"][0]
                    product_info = {
                        "asin": item.get("asin"),
                        "title": item.get("title"),
                        "price": item.get("price"),
                        "quantity": item.get("quantity"),
                        "options": []
                    }

                product_result["products"].append(product_info)

            # -- Logic for check_out
            elif semantic_id.endswith("check_out"):
                url = interaction.get("url", "")

                # If on a cart page
                if is_cart_page(url):
                    active_items = page_meta.get("active_items", [])
                    for item in active_items:
                        if item.get('selected') == True:
                            product_info = {
                                "asin": item.get("asin"),
                                "title": item.get("title"),
                                "price": item.get("price"),
                                "quantity": item.get("quantity"),
                                "options": item.get("options", [])
                            }
                            product_result["products"].append(product_info)

                # If on an add-to-cart page
                # elif is_add_to_cart_page(url):
                #     cart_info = interaction.get("cartInfo", {})
                #     for item in cart_info.get("active_items", []):
                #         product_info = {
                #             "asin": item.get("asin"),
                #             "title": item.get("title"),
                #             "price": item.get("price"),
                #             "quantity": item.get("quantity"),
                #             "options": item.get("options", [])
                #         }
                #         product_result["products"].append(product_info)

                # If on a fresh substitution page
                elif is_fresh_substitution_page(url):
                    active_items = page_meta.get("active_items", [])
                    for item in active_items:
                        product_info = {
                            "asin": item.get("asin"),
                            "title": item.get("title"),
                            "price": item.get("price"),
                            "quantity": item.get("quantity"),
                            "options": item.get("options", [])
                        }
                        # Check if we need updated quantity from earlier interactions
                        product_info["quantity"] = match_quantity(
                            item.get("asin"),
                            item.get("title"),
                            interactions,
                            index
                        )
                        product_result["products"].append(product_info)
            if len(product_result["products"]) > 0:
                order_result.append(product_result)

    if len(add_to_cart_orders) > 0:
        for order_detail in add_to_cart_orders:
            if 'uuid' not in order_detail:
                continue
            detail_result = {
                "uuid": order_detail["uuid"],
                "timestamp": order_detail["timestamp"],
                "products": []
            }
            for item in order_detail["metadata"].get("active_items", []):
                if item.get('selected') == True:
                    product_info = {
                        "asin": item.get("asin"),
                        "title": item.get("title"),
                        "price": item.get("price"),
                        "quantity": item.get("quantity"),
                        "options": item.get("options", [])
                    }
                    detail_result["products"].append(product_info)
            # Insert these detail_result items into order_result
            order_result.append(detail_result)

            # Finally, if this product_result has any discovered products, append it
            if len(product_result["products"]) > 0:
                order_result.append(product_result)

    if len(order_result) > 0:
        docs_to_insert = []
        for single_order in order_result:
            doc = {
                **single_order,
                "user_name": user_name,
                "processed_at": datetime.now(timezone.utc).isoformat()
            }
            docs_to_insert.append(doc)
        order_processed_collection.insert_many(docs_to_insert)

    # 3. 处理完成后，将本次处理过的 interactions 和 orders 打上 processed 标记
    if interactions:
        interaction_ids = [doc["_id"] for doc in interactions]
        interaction_collection.update_many(
            {"_id": {"$in": interaction_ids}},
            {"$set": {"processed_order": True}}
        )

    if add_to_cart_orders:
        order_ids = [doc["_id"] for doc in add_to_cart_orders]
        order_collection.update_many(
            {"_id": {"$in": order_ids}},
            {"$set": {"processed_order": True}}
        )

    return order_result  # Optionally return the structure if needed by the caller

import sys

def get_username_from_args():
    """
    Retrieve username from command-line arguments, if provided.
    Returns the username as a string or None if no username argument is given.
    """
    if len(sys.argv) > 1:
        return sys.argv[1]
    return None

if __name__ == "__main__":
    user_arg = get_username_from_args()
    if user_arg:
        # Process only the specified user if a username is passed in
        distinct_users = [user_arg]
    else:
        # Gather all distinct users from both the interaction and order collections
        distinct_users = set(interaction_collection.distinct("user_name")).union(
            order_collection.distinct("user_name")
        )

    # For each user found, run process_order_info
    for user in distinct_users:
        result = process_order_info(user)
        print(f"user_name: {user}, processed_time: {datetime.now(timezone.utc).isoformat()}, "
              f"number_of_processed_docs: {len(result)}")