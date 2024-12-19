/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/element-processor.ts":
/*!****************************************!*\
  !*** ./src/utils/element-processor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processElement: () => (/* binding */ processElement)
/* harmony export */ });
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
    }
    else if (recipe.text_js) {
        elementText = eval(recipe.text_js);
    }
    else if (recipe.add_text) {
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
        }
        else if (recipe.name === "from_nth_child") {
            elementName = parentName ? parentName + "." : "";
            elementName += nthChild.toString();
        }
        else {
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
        let click_element;
        if (recipe.click_selector) {
            click_element = element.querySelector(recipe.click_selector);
        }
        else {
            click_element = element;
        }
        if (click_element) {
            click_element.setAttribute("data-clickable-id", elementName);
        }
        else {
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
        }
        else if (inputType === "checkbox") {
            newElement.setAttribute("checked", element.checked.toString());
        }
        else if (inputType === "radio") {
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
                }
                else {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/content_script_test.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_element_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/element-processor */ "./src/utils/element-processor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('message', (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.source !== window)
        return;
    if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
        yield captureScreenshot(event.data.timestamp);
    }
    if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
        try {
            const response1 = yield chrome.storage.local.get(['htmlSnapshots'], (result) => {
                const htmlSnapshots = result.htmlSnapshots || {};
                htmlSnapshots[event.data.data.htmlSnapshotId] = event.data.data.htmlContent;
                chrome.storage.local.set({ htmlSnapshots });
            });
            console.log(response1);
            const dataForBackground = Object.assign({}, event.data.data);
            delete dataForBackground.htmlContent;
            const response2 = yield chrome.runtime.sendMessage({
                action: 'saveData',
                data: dataForBackground
            });
            if (!response1.success || !response2.success) {
                throw new Error(response1.message + response2.message || 'interaction capture failed');
            }
            console.log(response2);
            window.postMessage({
                type: 'INTERACTION_COMPLETE',
                timestamp: event.data.data.timestamp,
                success: true
            }, '*');
        }
        catch (error) {
            console.error('Error saving interaction data:', error);
            window.postMessage({
                type: 'INTERACTION_COMPLETE',
                success: false,
                error: error.message,
                timestamp: event.data.data.timestamp
            }, '*');
        }
    }
}));
function captureScreenshot(timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const screenshotId = `screenshot_${timestamp}`;
            const response = yield chrome.runtime.sendMessage({
                action: 'captureScreenshot',
                screenshotId
            });
            if (!response.success) {
                throw new Error(response.message || 'Screenshot capture failed');
            }
            window.postMessage({
                type: 'SCREENSHOT_COMPLETE',
                timestamp: timestamp,
                success: true
            }, '*');
        }
        catch (error) {
            console.error('Error capturing screenshot in content script:', error);
            window.postMessage({
                type: 'SCREENSHOT_COMPLETE',
                timestamp: timestamp,
                success: false,
                error: error.message
            }, '*');
        }
    });
}

let lastScrollTime = 0; // Track last scroll timestamp
const SCROLL_THRESHOLD = 1500; // Minimum time in ms between screenshots for scroll actions
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('DOMContentLoaded');
    const url = window.location.href;
    try {
        const response = yield new Promise(resolve => {
            chrome.runtime.sendMessage({
                action: 'getRecipe',
                url: url
            }, resolve);
        });
        console.log('response');
        if (response && response.recipe) {
            const recipe = response.recipe;
            const rootElement = document.querySelector(recipe.selector);
            if (rootElement) {
                const newRoot = (0,_utils_element_processor__WEBPACK_IMPORTED_MODULE_0__.processElement)(rootElement, recipe);
                console.log(newRoot.outerHTML);
            }
        }
    }
    catch (error) {
        console.error('Error initializing clickable elements:', error);
    }
}));
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
        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
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
function captureInteraction(eventType, target, timestamp, selector, clickableId, url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Generate new HTML snapshot ID
            const currentSnapshotId = generateHtmlSnapshotId();
            // Save HTML snapshot and wait for it to complete
            yield new Promise((resolve, reject) => {
                chrome.storage.local.get(['htmlSnapshots'], (result) => {
                    const htmlSnapshots = result.htmlSnapshots || {};
                    htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML;
                    chrome.storage.local.set({ htmlSnapshots }, () => {
                        if (chrome.runtime.lastError) {
                            reject(chrome.runtime.lastError);
                        }
                        else {
                            resolve(void 0);
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
                htmlSnapshotId: currentSnapshotId,
                // clickableElements: clickableElements,
                selector: selector || '',
                clickableId: clickableId || '',
                url: url || '',
            };
            yield chrome.runtime.sendMessage({ action: 'saveData', data });
        }
        catch (error) {
            console.error(`Error during ${eventType} event handling:`, error);
        }
    });
}
// Capture scroll interactions
document.addEventListener('scroll', (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (event.target instanceof HTMLElement && isFromPopup(event.target)) {
            return;
        }
        const currentTime = Date.now();
        if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
            lastScrollTime = currentTime;
            const timestamp = new Date().toISOString();
            yield captureInteraction('scroll', event.target, timestamp, '', '', '');
            yield captureScreenshot(timestamp);
        }
    }
    catch (error) {
        console.error('Error during scroll event handling:', error);
    }
}));
document.addEventListener("blur", (event) => __awaiter(void 0, void 0, void 0, function* () {
    const target = event.target;
    if (isFromPopup(target)) {
        return;
    }
    if (target &&
        ((target.tagName === "INPUT" && target.type === "text") ||
            target.tagName === "TEXTAREA")) {
        const timestamp = new Date().toISOString();
        yield captureScreenshot(timestamp);
        yield captureInteraction("input", target, timestamp, '', '', '');
    }
}), true);
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
document.addEventListener("DOMContentLoaded", () => {
    // Handle all types of order buttons
    const placeOrderButtons = document.querySelectorAll('input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]');
    const buyNowButton = document.querySelector('input[id="buy-now-button"]');
    const setupNowButton = document.querySelector('button[id="rcx-subscribe-submit-button-announce"]');
    const proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]');
    // Handle Buy Now and Set Up Now buttons if present
    [buyNowButton, setupNowButton].forEach(button => {
        if (button) {
            button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b, _c, _d, _e;
                try {
                    const productInfo = {
                        title: ((_b = (_a = document.querySelector("#title")) === null || _a === void 0 ? void 0 : _a.innerText) === null || _b === void 0 ? void 0 : _b.trim()) || "",
                        price: ((_d = (_c = document.querySelector("span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay")) === null || _c === void 0 ? void 0 : _c.innerText) === null || _d === void 0 ? void 0 : _d.trim()) || "",
                        asin: ((_e = document.querySelector("input#ASIN")) === null || _e === void 0 ? void 0 : _e.value) || "",
                        options: {}
                    };
                    // Get all option selections
                    const optionRows = Array.from(document.querySelectorAll("#twister div.a-row:has(label.a-form-label):has(span.selection)"));
                    optionRows.forEach(row => {
                        var _a, _b, _c;
                        const label = ((_b = (_a = row.querySelector("label.a-form-label")) === null || _a === void 0 ? void 0 : _a.innerText) === null || _b === void 0 ? void 0 : _b.replace(": ", "")) || "";
                        const value = ((_c = row.querySelector("span.selection")) === null || _c === void 0 ? void 0 : _c.innerText) || "";
                        if (label && value) {
                            productInfo.options[label] = value;
                        }
                    });
                    console.log(`${button.id} clicked - Product Info:`, productInfo);
                    // Store the product info
                    let result = yield chrome.storage.local.get({ orderDetails: [] });
                    const orderDetails = result.orderDetails || [];
                    orderDetails.push({
                        name: productInfo.title,
                        price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
                        asin: productInfo.asin,
                        options: productInfo.options
                    });
                    yield chrome.storage.local.set({ orderDetails });
                }
                catch (error) {
                    console.error(`Error capturing ${button.id} product info:`, error);
                }
            }));
        }
    });
    if (proceedToCheckoutButton) {
        proceedToCheckoutButton.addEventListener("click", (event) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const selectedItems = [];
                const cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]'))
                    .filter(item => item.id !== 'sc-active-cart');
                for (const item of cartItems) {
                    const checkbox = item.querySelector('input[type="checkbox"]');
                    if (checkbox && checkbox.checked) {
                        const productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link');
                        if (productLink) {
                            const fullNameElement = productLink.querySelector('.a-truncate-full');
                            const name = ((_a = fullNameElement === null || fullNameElement === void 0 ? void 0 : fullNameElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                            const href = productLink.getAttribute('href') || '';
                            const asin = ((_b = href.match(/product\/([A-Z0-9]{10})/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
                            const priceElement = item.querySelector('.sc-item-price-block .a-offscreen');
                            const price = priceElement ?
                                parseFloat(((_c = priceElement.textContent) === null || _c === void 0 ? void 0 : _c.replace(/[^0-9.]/g, '')) || '0') : 0;
                            const options = {};
                            const variationElements = item.querySelectorAll('.sc-product-variation');
                            variationElements.forEach(variation => {
                                var _a, _b, _c, _d;
                                const label = ((_b = (_a = variation.querySelector('.a-text-bold')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim().replace(':', '')) || '';
                                const value = ((_d = (_c = variation.querySelector('.a-size-small:not(.a-text-bold)')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || '';
                                if (label && value) {
                                    options[label] = value;
                                }
                            });
                            selectedItems.push({
                                name,
                                asin,
                                price,
                                options
                            });
                        }
                    }
                }
                if (selectedItems.length > 0) {
                    let result = yield chrome.storage.local.get({ orderDetails: [] });
                    const orderDetails = result.orderDetails || [];
                    const updatedOrderDetails = orderDetails.concat(selectedItems);
                    yield chrome.storage.local.set({ orderDetails: updatedOrderDetails });
                    console.log('Stored selected cart items:', selectedItems);
                }
            }
            catch (error) {
                console.error('Error capturing selected cart items:', error);
            }
        }));
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getHTML') {
        const htmlContent = document.documentElement.outerHTML;
        sendResponse({ html: htmlContent });
    }
    return true;
});
function createModal(question, sendResponse) {
    const modalHtml = `
        <div id="reason-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        ">
            <div style="
                background: white;
                padding: 20px;
                border-radius: 8px;
                width: 400px;
            ">
                <h3>${question}</h3>
                <textarea id="reason-input" style="
                    width: 100%;
                    height: 100px;
                    margin: 10px 0;
                "></textarea>
                <div style="
                    text-align: right;
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                ">
                    <button id="reason-skip">Skip</button>
                    <button id="reason-submit">Submit</button>
                </div>
            </div>
        </div>
    `;
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    // Add event listeners
    const submitBtn = document.getElementById('reason-submit');
    const skipBtn = document.getElementById('reason-skip');
    const input = document.getElementById('reason-input');
    submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', () => {
        const value = input.value;
        modalContainer.remove();
        sendResponse({ input: value });
    });
    skipBtn === null || skipBtn === void 0 ? void 0 : skipBtn.addEventListener('click', () => {
        modalContainer.remove();
        sendResponse({ input: null });
    });
}
// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'show_popup') {
        createModal(message.question, sendResponse);
        return true; // Will respond asynchronously
    }
});
function isFromPopup(element) {
    return element.closest('#reason-modal') !== null;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb250ZW50X3NjcmlwdF90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50LCByZWNpcGUsIHBhcmVudE5hbWUgPSBcIlwiLCBudGhDaGlsZCA9IDApIHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudCB1c2luZyB0aGUgRE9NIEFQSVxuICAgIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gICAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoXCJfXCIpKSB7XG4gICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICAgIGxldCBlbGVtZW50VGV4dCA9IFwiXCI7XG4gICAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS50ZXh0X3NlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgICAgIGVsZW1lbnRUZXh0ID0gZXZhbChyZWNpcGUudGV4dF9qcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgICAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgXCJcIjtcbiAgICB9XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XG4gICAgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCAmJiBlbGVtZW50VGV4dCkge1xuICAgICAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKFwie31cIiwgZWxlbWVudFRleHQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dDtcbiAgICB9XG4gICAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICAgIGxldCBlbGVtZW50TmFtZSA9IFwiXCI7XG4gICAgaWYgKHJlY2lwZS5uYW1lKSB7XG4gICAgICAgIGlmIChyZWNpcGUubmFtZSA9PT0gXCJmcm9tX3RleHRcIikge1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArIFwiLlwiIDogXCJcIjtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCBcIl9cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09IFwiZnJvbV9udGhfY2hpbGRcIikge1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArIFwiLlwiIDogXCJcIjtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgXCIuXCIgOiBcIlwiO1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gICAgaWYgKHJlY2lwZS5jbGlja2FibGUpIHtcbiAgICAgICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgY2xpY2tfc2VsZWN0b3JcbiAgICAgICAgbGV0IGNsaWNrX2VsZW1lbnQ7XG4gICAgICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICAgICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2xpY2thYmxlLWlkXCIsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGU7XG4gICAgfVxuICAgIGlmICh0YWdOYW1lID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICBpZiAoW1widGV4dFwiLCBcIm51bWJlclwiXS5pbmNsdWRlcyhpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlucHV0LWlkXCIsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dFR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dFR5cGUgPT09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jbGlja2FibGUtaWRcIiwgZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlO1xuICAgIH1cbiAgICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICAgIGlmICh0YWdOYW1lID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIC8vIFRhZyB0aGUgc2VsZWN0IGVsZW1lbnQgd2l0aCBkYXRhLXNlbGVjdC1pZFxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtc2VsZWN0LWlkXCIsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgb3B0aW9uLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArIFwiLlwiICsgb3B0aW9uVmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsIG9wdGlvbk5hbWUpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uc2VsZWN0ZWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpOyAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ29weSBzcGVjaWZpZWQgYXR0cmlidXRlc1xuICAgIGNvbnN0IGF0dHJzVG9Db3B5ID0gW1wiYWx0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIiwgXCJyb2xlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImFyaWEtaGlkZGVuXCIsIFwiYXJpYS1zZWxlY3RlZFwiXTtcbiAgICBhdHRyc1RvQ29weS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLmtlZXBfYXR0cikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlY2lwZVsnY2xhc3MnXSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZWNpcGVbJ2NsYXNzJ10pO1xuICAgIH1cbiAgICBpZiAocmVjaXBlWydpZCddKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHJlY2lwZVsnaWQnXSk7XG4gICAgfVxuICAgIC8vIE92ZXJyaWRlIGF0dHJpYnV0ZXMgaWYgc3BlY2lmaWVkXG4gICAgaWYgKHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGV2YWwocmVjaXBlLm92ZXJyaWRlX2F0dHJba2V5XSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgICBpZiAocmVjaXBlLmNoaWxkcmVuICYmIHJlY2lwZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZCA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvcjtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlID0gcHJvY2Vzc0VsZW1lbnQoY2hpbGRFbGVtZW50LCBjaGlsZFJlY2lwZSwgcGFyZW50TmFtZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJubyBzcGxpdCBtYXJrZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIGVtcHR5IG1lc3NhZ2VzXG4gICAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZWNpcGUuZW1wdHlfbWVzc2FnZSk7XG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBUFRVUkVfU0NSRUVOU0hPVCcpIHtcbiAgICAgICAgeWllbGQgY2FwdHVyZVNjcmVlbnNob3QoZXZlbnQuZGF0YS50aW1lc3RhbXApO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NBVkVfSU5URVJBQ1RJT05fREFUQScpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMSA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzW2V2ZW50LmRhdGEuZGF0YS5odG1sU25hcHNob3RJZF0gPSBldmVudC5kYXRhLmRhdGEuaHRtbENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UxKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFGb3JCYWNrZ3JvdW5kID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQuZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhRm9yQmFja2dyb3VuZC5odG1sQ29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IHlpZWxkIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdzYXZlRGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YUZvckJhY2tncm91bmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZTEuc3VjY2VzcyB8fCAhcmVzcG9uc2UyLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UxLm1lc3NhZ2UgKyByZXNwb25zZTIubWVzc2FnZSB8fCAnaW50ZXJhY3Rpb24gY2FwdHVyZSBmYWlsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlMik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgaW50ZXJhY3Rpb24gZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdjYXB0dXJlU2NyZWVuc2hvdCcsXG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdElkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8ICdTY3JlZW5zaG90IGNhcHR1cmUgZmFpbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3QgaW4gY29udGVudCBzY3JpcHQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi91dGlscy9lbGVtZW50LXByb2Nlc3Nvcic7XG5sZXQgbGFzdFNjcm9sbFRpbWUgPSAwOyAvLyBUcmFjayBsYXN0IHNjcm9sbCB0aW1lc3RhbXBcbmNvbnN0IFNDUk9MTF9USFJFU0hPTEQgPSAxNTAwOyAvLyBNaW5pbXVtIHRpbWUgaW4gbXMgYmV0d2VlbiBzY3JlZW5zaG90cyBmb3Igc2Nyb2xsIGFjdGlvbnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpO1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0UmVjaXBlJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlY2lwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVjaXBlID0gcmVzcG9uc2UucmVjaXBlO1xuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Um9vdC5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgY2xpY2thYmxlIGVsZW1lbnRzOicsIGVycm9yKTtcbiAgICB9XG59KSk7XG5mdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1gO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOlwiLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuLy8gRnVuY3Rpb24gdG8gZ2V0IGNsaWNrYWJsZSBlbGVtZW50cyBpbiB0aGUgdmlld3BvcnRcbmZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgICBjb25zdCBjbGlja2FibGVFbGVtZW50cyA9IFtdOyAvLyBBcnJheSB0byBzdG9yZSBjbGlja2FibGUgZWxlbWVudHNcbiAgICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydFxuICAgIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChyZWN0LnRvcCA+PSAwICYmXG4gICAgICAgICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSkge1xuICAgICAgICAgICAgY2xpY2thYmxlRWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnTmFtZTogZWxlbWVudC50YWdOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogZWxlbWVudC5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgaW5uZXJUZXh0OiBlbGVtZW50LmlubmVyVGV4dC50cmltKCksXG4gICAgICAgICAgICAgICAgb3V0ZXJIVE1MOiBlbGVtZW50Lm91dGVySFRNTC50cmltKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjbGlja2FibGVFbGVtZW50cztcbn1cbi8vIEZ1bmN0aW9uIHRvIGNhcHR1cmUgaW50ZXJhY3Rpb25zXG5mdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0YXJnZXQsIHRpbWVzdGFtcCwgc2VsZWN0b3IsIGNsaWNrYWJsZUlkLCB1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgbmV3IEhUTUwgc25hcHNob3QgSURcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpO1xuICAgICAgICAgICAgLy8gU2F2ZSBIVE1MIHNuYXBzaG90IGFuZCB3YWl0IGZvciBpdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zdCBjbGlja2FibGVFbGVtZW50cyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0T3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgIHRhcmdldENsYXNzOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHRhcmdldElkOiB0YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZUVsZW1lbnRzOiBjbGlja2FibGVFbGVtZW50cyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IgfHwgJycsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlSWQ6IGNsaWNrYWJsZUlkIHx8ICcnLFxuICAgICAgICAgICAgICAgIHVybDogdXJsIHx8ICcnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIENhcHR1cmUgc2Nyb2xsIGludGVyYWN0aW9uc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNGcm9tUG9wdXAoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gbGFzdFNjcm9sbFRpbWUgPj0gU0NST0xMX1RIUkVTSE9MRCkge1xuICAgICAgICAgICAgbGFzdFNjcm9sbFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIHlpZWxkIGNhcHR1cmVJbnRlcmFjdGlvbignc2Nyb2xsJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsICcnLCAnJywgJycpO1xuICAgICAgICAgICAgeWllbGQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNjcm9sbCBldmVudCBoYW5kbGluZzonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ICYmXG4gICAgICAgICgodGFyZ2V0LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiB0YXJnZXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHx8XG4gICAgICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKSkge1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCk7XG4gICAgICAgIHlpZWxkIGNhcHR1cmVJbnRlcmFjdGlvbihcImlucHV0XCIsIHRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnKTtcbiAgICB9XG59KSwgdHJ1ZSk7XG4vLyBDYXB0dXJlIGNsaWNrIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gZ2V0VW5pcXVlU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignLicpO1xuICAgICAgICByZXR1cm4gYCR7ZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LiR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGdldEZ1bGxTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhdGgudW5zaGlmdChnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSk7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIC8vIEhhbmRsZSBhbGwgdHlwZXMgb2Ygb3JkZXIgYnV0dG9uc1xuICAgIGNvbnN0IHBsYWNlT3JkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbaWQ9XCJwbGFjZU9yZGVyXCJdLCBpbnB1dFtpZD1cInR1cmJvLWNoZWNrb3V0LXB5by1idXR0b25cIl0nKTtcbiAgICBjb25zdCBidXlOb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImJ1eS1ub3ctYnV0dG9uXCJdJyk7XG4gICAgY29uc3Qgc2V0dXBOb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25baWQ9XCJyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2VcIl0nKTtcbiAgICBjb25zdCBwcm9jZWVkVG9DaGVja291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcm9jZWVkVG9SZXRhaWxDaGVja291dFwiXScpO1xuICAgIC8vIEhhbmRsZSBCdXkgTm93IGFuZCBTZXQgVXAgTm93IGJ1dHRvbnMgaWYgcHJlc2VudFxuICAgIFtidXlOb3dCdXR0b24sIHNldHVwTm93QnV0dG9uXS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAoKF9iID0gKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAoKF9kID0gKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXlcIikpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5pbm5lclRleHQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50cmltKCkpIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2luOiAoKF9lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I0FTSU5cIikpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS52YWx1ZSkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHt9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBhbGwgb3B0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uUm93cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gKChfYiA9IChfYSA9IHJvdy5xdWVyeVNlbGVjdG9yKFwibGFiZWwuYS1mb3JtLWxhYmVsXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZShcIjogXCIsIFwiXCIpKSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoKF9jID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnNlbGVjdGlvblwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCkgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbmZvLm9wdGlvbnNbbGFiZWxdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtidXR0b24uaWR9IGNsaWNrZWQgLSBQcm9kdWN0IEluZm86YCwgcHJvZHVjdEluZm8pO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgcHJvZHVjdCBpbmZvXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSByZXN1bHQub3JkZXJEZXRhaWxzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBvcmRlckRldGFpbHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByb2R1Y3RJbmZvLnByaWNlLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW46IHByb2R1Y3RJbmZvLmFzaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBwcm9kdWN0SW5mby5vcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBvcmRlckRldGFpbHMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjYXB0dXJpbmcgJHtidXR0b24uaWR9IHByb2R1Y3QgaW5mbzpgLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uKSB7XG4gICAgICAgIHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJzYy1hY3RpdmUtXCJdJykpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSAnc2MtYWN0aXZlLWNhcnQnKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2FydEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94ICYmIGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RMaW5rID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcm9kdWN0LXRpdGxlLWNvbnQgLnNjLXByb2R1Y3QtbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnVsbE5hbWVFbGVtZW50ID0gcHJvZHVjdExpbmsucXVlcnlTZWxlY3RvcignLmEtdHJ1bmNhdGUtZnVsbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAoKF9hID0gZnVsbE5hbWVFbGVtZW50ID09PSBudWxsIHx8IGZ1bGxOYW1lRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZnVsbE5hbWVFbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHJpbSgpKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gcHJvZHVjdExpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9ICgoX2IgPSBocmVmLm1hdGNoKC9wcm9kdWN0XFwvKFtBLVowLTldezEwfSkvKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iWzFdKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByaWNlLWJsb2NrIC5hLW9mZnNjcmVlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbGVtZW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCgoKF9jID0gcHJpY2VFbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgvW14wLTkuXS9nLCAnJykpIHx8ICcwJykgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25FbGVtZW50cyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnNjLXByb2R1Y3QtdmFyaWF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uRWxlbWVudHMuZm9yRWFjaCh2YXJpYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gKChfYiA9IChfYSA9IHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS10ZXh0LWJvbGQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpLnJlcGxhY2UoJzonLCAnJykpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgoX2QgPSAoX2MgPSB2YXJpYXRpb24ucXVlcnlTZWxlY3RvcignLmEtc2l6ZS1zbWFsbDpub3QoLmEtdGV4dC1ib2xkKScpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50cmltKCkpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbGFiZWxdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHJlc3VsdC5vcmRlckRldGFpbHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRPcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMuY29uY2F0KHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBvcmRlckRldGFpbHM6IHVwZGF0ZWRPcmRlckRldGFpbHMgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgc2VsZWN0ZWQgY2FydCBpdGVtczonLCBzZWxlY3RlZEl0ZW1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2VsZWN0ZWQgY2FydCBpdGVtczonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG59KTtcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRIVE1MJykge1xuICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGh0bWw6IGh0bWxDb250ZW50IH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn0pO1xuZnVuY3Rpb24gY3JlYXRlTW9kYWwocXVlc3Rpb24sIHNlbmRSZXNwb25zZSkge1xuICAgIGNvbnN0IG1vZGFsSHRtbCA9IGBcbiAgICAgICAgPGRpdiBpZD1cInJlYXNvbi1tb2RhbFwiIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgIFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgIDxoMz4ke3F1ZXN0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwicmVhc29uLWlucHV0XCIgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXNraXBcIj5Ta2lwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWFzb24tc3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IG1vZGFsSHRtbDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1zdWJtaXQnKTtcbiAgICBjb25zdCBza2lwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1za2lwJyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0Jyk7XG4gICAgc3VibWl0QnRuID09PSBudWxsIHx8IHN1Ym1pdEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IHZhbHVlIH0pO1xuICAgIH0pO1xuICAgIHNraXBCdG4gPT09IG51bGwgfHwgc2tpcEJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2tpcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiBudWxsIH0pO1xuICAgIH0pO1xufVxuLy8gTGlzdGVuIGZvciBtZXNzYWdlcyBmcm9tIGJhY2tncm91bmQgc2NyaXB0XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd19wb3B1cCcpIHtcbiAgICAgICAgY3JlYXRlTW9kYWwobWVzc2FnZS5xdWVzdGlvbiwgc2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIFdpbGwgcmVzcG9uZCBhc3luY2hyb25vdXNseVxuICAgIH1cbn0pO1xuZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==