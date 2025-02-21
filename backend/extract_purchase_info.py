# This script processes JSON "interactions" files to extract information related
# to purchased or cart items on an e-commerce site.

import json
import pandas as pd
import os
import glob
from urllib.parse import urlparse

def is_cart_page(url):
    """
    Check if the provided URL path matches a known cart page endpoint.
    Returns True if it is a cart page, otherwise False.
    """
    path = urlparse(url).path
    return path in ["/gp/cart/view.html", "/cart" ]

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
    # Loop backward through all interactions
    for i in range(index, -1, -1):
        interaction = interactions[i]
        # Get page metadata (could come from different keys)
        page_meta = interaction.get("page-meta", interaction.get("pageMeta", {}))

        # Look for the item in active_items
        for item in page_meta.get("active_items", []):
            if item.get("asin") == asin:
                quantity = item.get("quantity", "")
                if quantity != "0" and quantity != "":
                    print(asin, quantity)
                    return quantity

        # If not found in active_items, look for it in promotion_items
        for item in page_meta.get("promotion_items", []):
            if item.get("asin") == asin:
                quantity = item.get("quantity", "")
                if quantity != "0" and quantity != "":
                    print(asin, quantity)
                    return quantity

    # If quantity is "0", reset it to empty string
    if quantity == "0":
        quantity = ""

    return quantity

# Find all interaction files in the local directory matching the pattern "interactions_*.json"
input_files = glob.glob("interactions_*.json")

# Process each matching file
for file_path in input_files:
    # Extract a unique identifier (timestamp or suffix) from the filename
    file_suffix = file_path.split("_")[-1].split(".")[0]  # e.g., for 'interactions_1234.json' -> '1234'
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)

    order_result = []  # will store information about items in this file
    interactions = data.get("interactions", [])

    # Iterate over each interaction in the file
    for index, interaction in enumerate(interactions):
        product_result={
            "uuid":interaction['uuid'],
            "timestamp":interaction['timestamp'],
            "products":[]
        }
        # Some data come from "page-meta", others from "pageMeta"
        page_meta = interaction.get("page-meta", interaction.get("pageMeta", {}))
        semantic_id = interaction.get("data-semantic-id", "")

        # Look for buy_now or set_up_now interactions
        if semantic_id.endswith("buy_now") or semantic_id.endswith("set_up_now"):
            print("buy / set up button")
            product_info = {
                "asin": None,
                "title": None,
                "price": None,
                "quantity": None,
                "options": []
            }

            # If on a product detail page, extract relevant info
            if "product_details" in page_meta:
                for detail in page_meta["product_details"]:
                    if "title" in detail:
                        product_info["title"] = detail["title"]
                    if "price" in detail:
                        product_info["price"] = detail["price"]
                    if "asin" in detail:
                        product_info["asin"] = detail["asin"]

            # Extract product_options if present
            if "product_options" in page_meta:
                product_info["options"] = page_meta["product_options"]
            # Extract product_quantity if present
            if "product_quantity" in page_meta:
                product_info["quantity"] = page_meta["product_quantity"][0]["quantity"]

            # In a "buy again" scenario, this key may store the item's purchase details
            if "active_items_opened_purchase" in page_meta:
                item = page_meta["active_items_opened_purchase"][0]
                product_info = {
                    "asin": item.get("asin"),
                    "title": item.get("title"),
                    "price": item.get("price"),
                    "quantity": item.get("quantity"),
                    "options": []
                }
            # Add the extracted item to the list
            product_result["products"].append(product_info)


        # If the semantic ID is a check out action
        elif semantic_id.endswith("check_out"):
            url = interaction.get("url", "")

            # If on a cart page, gather active_items
            if is_cart_page(url):
                print("check out button on cart page")
                for item in page_meta["active_items"]:
                    product_info = {
                        "asin": item.get("asin"),
                        "title": item.get("title"),
                        "price": item.get("price"),
                        "quantity": item.get("quantity"),
                        "options": []
                    }
                    # Include item options if any
                    if "options" in item:
                        product_info["options"] = item["options"]
                    product_result["products"].append(product_info)

            # If on an add-to-cart page, gather info from cartInfo
            elif is_add_to_cart_page(url):
                print("check out button on add to cart page")
                cart_info = interaction.get("cartInfo", {})
                for item in cart_info.get("active_items", []):
                    product_info = {
                        "asin": item.get("asin"),
                        "title": item.get("title"),
                        "price": item.get("price"),
                        "quantity": item.get("quantity"),
                        "options": []
                    }
                    if "options" in item:
                        product_info["options"] = item["options"]
                    product_result["products"].append(product_info)

            # If on a fresh substitution page, the actual quantity might be found further up the chain
            elif is_fresh_substitution_page(url):
                print("check out button on fresh substition page")
                for item in page_meta["active_items"]:
                    product_info = {
                        "asin": item.get("asin"),
                        "title": item.get("title"),
                        "price": item.get("price"),
                        "quantity": item.get("quantity"),
                        "options": []
                    }
                    if "options" in item:
                        product_info["options"] = item["options"]
                    # Because items on the fresh substitution page might not show "current" quantity,
                    # we retrieve the quantity from previous interactions using match_quantity()
                    product_info["quantity"] = match_quantity(item.get("asin"), item.get("title"), interactions, index)
                    product_result["products"].append(product_info)
        if len(product_result["products"]) > 0:
            order_result.append(product_result)

    order_details = data.get("orderDetails", [])
    for order_detail in order_details:
        print("cartdetail-check out button on add to cart page")
        if 'uuid' not in order_detail.keys():
            continue
        product_result={
            "uuid":order_detail['uuid'],
            "timestamp":order_detail['timestamp'],
            "products":[]
        }
        for item in order_detail['metadata']['active_items']:
            product_info = {
                "asin": item.get("asin"),
                "title": item.get("title"),
                "price": item.get("price"),
                "quantity": item.get("quantity"),
                "options": []
            }
            if "options" in item:
                product_info["options"] = item["options"]
            product_result["products"].append(product_info)
        order_result.append(product_result)


    # Each file's extracted items are saved to a corresponding order_info_{file_suffix}.json
    output_file_path = f"order_info_{file_suffix}.json"
    with open(output_file_path, "w", encoding="utf-8") as output_file:
        json.dump(order_result, output_file, indent=4)
