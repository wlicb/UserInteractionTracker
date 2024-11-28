let lastScrollTime = 0;  // Track last scroll timestamp
const SCROLL_THRESHOLD = 1500; // Minimum time in ms between screenshots for scroll actions
let htmlSnapshotId = null;

function processElement(element, recipe, parentName = "", nthChild = 0) {
    // Create a new element using the DOM API
    let tagName = recipe.tag_name || element.tagName.toLowerCase();
    // Handle underscored tags
    if (tagName.endsWith("_")) {
        tagName = tagName.slice(0, -1);
    }
    const newElement = document.createElement(tagName);

    // Extract text content based on the recipe
    let elementText = "";
    if (recipe.text_selector) {
        const textElement = element.querySelector(recipe.text_selector);
        if (textElement) {
            elementText = textElement.innerText || textElement.textContent || "";
        }
    } else if (recipe.text_js) {
        elementText = eval(recipe.text_js);
    } else if (recipe.add_text) {
        elementText = element.innerText || element.textContent || "";
    }
    elementText = elementText.replace(/\s+/g, " ").trim();
    if (recipe.text_format && elementText) {
        elementText = recipe.text_format.replace("{}", elementText);
    }

    if (elementText && recipe.add_text) {
        newElement.textContent = elementText;
    }

    // Build the node attributes
    let elementName = "";
    if (recipe.name) {
        if (recipe.name === "from_text") {
            elementName = parentName ? parentName + "." : "";
            elementName += elementText.toLowerCase().replace(/[^\w]+/g, "_");
        } else if (recipe.name === "from_nth_child") {
            elementName = parentName ? parentName + "." : "";
            elementName += nthChild.toString();
        } else {
            elementName = parentName ? parentName + "." : "";
            elementName += recipe.name;
        }
        newElement.setAttribute("name", elementName);
        parentName = elementName;
    }

    // Handle clickables and inputs
    if (recipe.clickable) {
        if (!recipe.name) {
            throw new Error("clickable element must have a name");
        }
        // handle click_selector
        if (recipe.click_selector) {
            click_element = element.querySelector(recipe.click_selector);
        } else {
            click_element = element;
        }
        if (click_element) {
            click_element.setAttribute("data-clickable-id", elementName);
        } else {
            console.log('click-element not found', element, recipe);
        }
        if (!window.clickable_recipes) {
            window.clickable_recipes = {};
        }
        window.clickable_recipes[elementName] = recipe;
    }
    if (tagName === "input") {
        const inputType = element.getAttribute("type");
        if (["text", "number"].includes(inputType)) {
            newElement.setAttribute("value", element.value);
            element.setAttribute("data-input-id", elementName);
        } else if (inputType === "checkbox") {
            newElement.setAttribute("checked", element.checked.toString());
        } else if (inputType === "radio") {
            newElement.setAttribute("checked", element.checked.toString());
            element.setAttribute("data-clickable-id", elementName);
        }
        if (!window.input_recipes) {
            window.input_recipes = {};
        }
        window.input_recipes[elementName] = recipe;
    }
    // **Handle select elements**
    if (tagName === "select") {
        // Tag the select element with data-select-id
        element.setAttribute("data-select-id", elementName);

        const options = element.querySelectorAll('option');
        options.forEach((option) => {
            const optionValue = option.getAttribute('value') || option.textContent.trim();
            const optionName = elementName + "." + optionValue;
            const newOption = document.createElement('option');
            newOption.textContent = option.textContent;
            newOption.setAttribute('value', optionValue);
            newOption.setAttribute('name', optionName);
            newOption.setAttribute('selected', option.selected.toString());
            option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
            newElement.appendChild(newOption);
        });
    }
    // Copy specified attributes
    const attrsToCopy = ["alt", "title", "type", "value", "role", "aria-label", "aria-hidden", "aria-selected"];
    attrsToCopy.forEach((attr) => {
        const value = element.getAttribute(attr);
        if (value) {
            newElement.setAttribute(attr, value);
        }
    });
    if (recipe.keep_attr) {
        for (const key in recipe.keep_attr) {
            const value = element.getAttribute(key);
            if (value) {
                newElement.setAttribute(key, value);
            }
        }
    }
    if (recipe['class']) {
        newElement.setAttribute('class', recipe['class']);
    }
    if (recipe['id']) {
        newElement.setAttribute('id', recipe['id']);
    }

    // Override attributes if specified
    if (recipe.override_attr) {
        for (const key in recipe.override_attr) {
            newElement.setAttribute(key, eval(recipe.override_attr[key]));
        }
    }

    // Process children
    if (recipe.children && recipe.children.length > 0) {
        for (const childRecipe of recipe.children) {
            const selector = childRecipe.direct_child ? `:scope > ${childRecipe.selector}` : childRecipe.selector;
            const childElements = element.querySelectorAll(selector);
            childElements.forEach((childElement, index) => {
                const childNode = processElement(childElement, childRecipe, parentName, index);
                newElement.appendChild(childNode);
                if (childRecipe.insert_split_marker) {
                    const every = childRecipe.insert_split_marker_every || 1;
                    if (index % every == 0) {
                        const splitMarker = document.createElement('split-marker');
                        newElement.appendChild(splitMarker);
                        // console.log("inserting split marker 1");
                    }
                }
                if (childRecipe.insert_split_marker) {
                    // console.log("inserting split marker 2");
                    const splitMarker = document.createElement('split-marker');
                    newElement.appendChild(splitMarker);
                } else {
                    console.log("no split marker");
                }
            });
        }
    }

    // Handle empty messages
    if (recipe.empty_message && newElement.children.length === 0) {
        const emptyTextNode = document.createTextNode(recipe.empty_message);
        newElement.appendChild(emptyTextNode);
    }

    return newElement;
}


document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded')
    const url = window.location.href;
    try {
        const response = await chrome.runtime.sendMessage({ 
            action: 'getRecipe', 
            url: url 
        });
        console.log('response')
        if (response && response.recipe) {
            const recipe = response.recipe;
            const rootElement = document.querySelector(recipe.selector);
            if (rootElement) {
                const newRoot = processElement(rootElement, recipe);
                console.log(newRoot.outerHTML)
            }
        }
    } catch (error) {
        console.error('Error initializing clickable elements:', error);
    }
    try{
        const timestamp = new Date().toISOString();
        captureScreenshot(timestamp);
        captureInteraction('navigate', '',timestamp,'','',url);
    }catch(error){
        console.error('Error capturing screenshot:', error);
    }
});




function generateHtmlSnapshotId() {
    const url = window.location.href;
    const timestamp = new Date().toISOString();
    return `html_${hashCode(url)}_${timestamp}`;
}
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; 
    }
    console.log("Hash value before return:", hash);
    return hash.toString();
  }  

// Function to get clickable elements in the viewport
function getClickableElementsInViewport() {
    const clickableElements = []; // Array to store clickable elements

    // Select all potential clickable elements
    const allElements = document.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');

    // Check if each element is in the viewport
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            clickableElements.push({
                tagName: element.tagName,
                className: element.className,
                id: element.id,
                innerText: element.innerText.trim(),
                outerHTML: element.outerHTML.trim(),
            });
        }
    });

    return clickableElements;
}

// Function to capture interactions
async function captureInteraction(eventType, target, timestamp,selector,clickableId,url) {
    try {
        // Generate new HTML snapshot ID
        const currentSnapshotId = generateHtmlSnapshotId();
        
        // Save HTML snapshot and wait for it to complete
        await new Promise((resolve, reject) => {
            chrome.storage.local.get(['htmlSnapshots'], (result) => {
                const htmlSnapshots = result.htmlSnapshots || {};
                htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML;
                chrome.storage.local.set({ htmlSnapshots }, () => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve();
                    }
                });
            });
        });

        // const clickableElements = getClickableElementsInViewport();
        const data = {
            eventType,
            timestamp: timestamp,
            target: target,
            targetOuterHTML: target.outerHTML,
            targetClass: target.className,
            targetId: target.id,
            targetText: target.innerText || target.value || '',
            htmlSnapshotId: currentSnapshotId,  // Use the new snapshot ID
            // clickableElements: clickableElements,
            selector: selector || '',
            clickableId: clickableId || '',
            url: url || '',
        };

        await chrome.runtime.sendMessage({ action: 'saveData', data });
    } catch (error) {
        console.error(`Error during ${eventType} event handling:`, error);
    }
}

// Capture scroll interactions
document.addEventListener('scroll', async (event) => {
    try {
        const currentTime = Date.now();
        if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
            lastScrollTime = currentTime;
            const timestamp=new Date().toISOString();
            // Only capture the screenshot after 3 seconds of inactivity
            await captureInteraction('scroll',event.target,timestamp);
            await captureScreenshot(timestamp);

        }
    } catch (error) {
        console.error('Error during scroll event handling:', error);
    }
});


document.addEventListener("blur", async (event) => {
    const validInputTypes = ["text", "password", "email", "number", "search", "tel", "url"];
    const target = event.target;
    
    // Check if it's a textarea or a valid input type
    if (target.tagName === "TEXTAREA" || 
        (target.tagName === "INPUT" && validInputTypes.includes(target.getAttribute("type")))) {
        const timestamp = new Date().toISOString();
        await captureScreenshot(timestamp);
        await captureInteraction("input", target, timestamp);
    }
}, true);

// Capture click interactions
function getUniqueSelector(element) {
    if (element.id) {
        return `#${element.id}`; 
    }
    if (element.className) {
        const className = element.className.trim().split(/\s+/).join('.');
        return `${element.tagName.toLowerCase()}.${className}`;
    }
    return element.tagName.toLowerCase(); 
}

function getFullSelector(element) {
    let path = [];
    while (element.parentElement) {
        path.unshift(getUniqueSelector(element));
        element = element.parentElement;
    }
    return path.join(' > '); 
}

// document.addEventListener('click', async (event) => {
//     try {
//         timestamp=new Date().toISOString();
//         const selector=getFullSelector(event.target);
//         // const originalElement=event.target
//         // const foundElement = document.querySelector(selector);
//         // const isSameElement = foundElement === originalElement;
//         // console.log(isSameElement)

//         await captureScreenshot(timestamp);
//         await captureInteraction('click', event.target,timestamp,selector);
        
//     } catch (error) {
//         console.error('Error during click event handling:', error);
//     }
// });
document.addEventListener('click', async (event) => {
    try {
        function findClickableParent(element, depth=0) {
            if (!element || depth >= 2) return null;
            if (element.hasAttribute('data-clickable-id')) {
                return element;
            }
            return findClickableParent(element.parentElement, depth+1);
        }
        console.log('click')
        const clickableElement = findClickableParent(event.target);
        const clickableId = clickableElement ? clickableElement.getAttribute('data-clickable-id') : null;
        
        const timestamp = new Date().toISOString();
        console.log(timestamp)
        const selector = getFullSelector(event.target);
        console.log('start screenshot')
        await captureScreenshot(timestamp);
        console.log('start interaction')
        await captureInteraction('click', event.target, timestamp, selector, clickableId);
        console.log('end interaction')
    } catch (error) {
        console.error('Error during click event handling:', error);
    }
});


// Function to capture screenshots with unique ID
async function captureScreenshot(timestamp) {
  try {
      // Generate a unique screenshot ID
      const screenshotId = `screenshot_${timestamp}`;
      // Capture the screenshot
      await chrome.runtime.sendMessage({ action: 'captureScreenshot', screenshotId });


  } catch (error) {
      console.error('Error capturing screenshot:', error);
  }
}


document.addEventListener("DOMContentLoaded", () => {
    // get all "Place Your Order" buttons
    const placeOrderButtons = document.querySelectorAll('input[id="placeOrder"]');

    if (placeOrderButtons.length === 0) {
        console.log("No Place Your Order buttons found!");
        return;
    }
    // get all product information, filter out interference items
    const items = document.querySelectorAll('.lineitem-title-text');
    const orderDetails = [];

    items.forEach((item) => {
        // filter out interference items
        if (item.matches('.a-size-base.lineitem-title-text')) {
            console.log("Skipping interfering element:", item.innerText);
            return;
        }

        // get product name
        const productName = item.innerText.trim();

        // get product price
        const priceElement = item.closest('div').querySelector('.lineitem-price-text');
        const productPrice = priceElement
            ? priceElement.innerText.trim().replace('$', '')
            : '0.00'; // if price is not exist, default '0.00'

        orderDetails.push({
            name: productName,
            price: parseFloat(productPrice),
        });
    });
    // add listener to each button
    placeOrderButtons.forEach((button) => {
        button.addEventListener("click", async(event) => {
            const orderDetails=orderDetails
            console.log("Place Your Order button clicked!");
            let result = await chrome.storage.local.get({orderDetails:[]});
            result=result.orderDetails||[]
            let storeOrderDetails = result.concat(orderDetails);
            await chrome.storage.local.set({ orderDetails:storeOrderDetails });

    });
})});
