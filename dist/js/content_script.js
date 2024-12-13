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
// document.addEventListener('click', (event) => {
//     try {
//         function findClickableParent(element: HTMLElement | null, depth: number = 0): HTMLElement | null {
//             if (!element || depth>=2) return null;
//             if (element.hasAttribute('data-clickable-id')) {
//                 return element;
//             }
//             return findClickableParent(element.parentElement,depth+1);
//         }
//         const clickableElement = findClickableParent(event.target as HTMLElement);
//         const clickableId = clickableElement ? clickableElement.getAttribute('data-clickable-id') || '' : '';
//         console.log('click')
//         const timestamp=new Date().toISOString();
//         console.log(timestamp)
//         const selector=getFullSelector(event.target);
//         console.log('srart screenshot')
//         captureScreenshot(timestamp);
//         console.log('end screenshot')
//         captureInteraction('click', event.target,timestamp,selector,clickableId,'');
//         console.log('end')
//     } catch (error) {
//         console.error('Error during click event handling:', error);
//     }
// });
// Function to capture screenshots with unique ID
function captureScreenshot(timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Generate a unique screenshot ID
            const screenshotId = `screenshot_${timestamp}`;
            // Capture the screenshot
            yield chrome.runtime.sendMessage({ action: 'captureScreenshot', screenshotId });
        }
        catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    });
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EscUJBQXFCO0FBQ3JCLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0Esa0VBQWtFLGtCQUFrQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxHQUFHO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGtCQUFrQjtBQUNwRjtBQUNBO0FBQ0EscURBQXFELG1DQUFtQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL2VsZW1lbnQtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHRfdGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoZWxlbWVudCwgcmVjaXBlLCBwYXJlbnROYW1lID0gXCJcIiwgbnRoQ2hpbGQgPSAwKSB7XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgICBsZXQgdGFnTmFtZSA9IHJlY2lwZS50YWdfbmFtZSB8fCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBIYW5kbGUgdW5kZXJzY29yZWQgdGFnc1xuICAgIGlmICh0YWdOYW1lLmVuZHNXaXRoKFwiX1wiKSkge1xuICAgICAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgICBsZXQgZWxlbWVudFRleHQgPSBcIlwiO1xuICAgIGlmIChyZWNpcGUudGV4dF9zZWxlY3Rvcikge1xuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3Rvcik7XG4gICAgICAgIGlmICh0ZXh0RWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudFRleHQgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQgfHwgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgICAgICBlbGVtZW50VGV4dCA9IGV2YWwocmVjaXBlLnRleHRfanMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWNpcGUuYWRkX3RleHQpIHtcbiAgICAgICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8IFwiXCI7XG4gICAgfVxuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuICAgIGlmIChyZWNpcGUudGV4dF9mb3JtYXQgJiYgZWxlbWVudFRleHQpIHtcbiAgICAgICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZShcInt9XCIsIGVsZW1lbnRUZXh0KTtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHQ7XG4gICAgfVxuICAgIC8vIEJ1aWxkIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgICBsZXQgZWxlbWVudE5hbWUgPSBcIlwiO1xuICAgIGlmIChyZWNpcGUubmFtZSkge1xuICAgICAgICBpZiAocmVjaXBlLm5hbWUgPT09IFwiZnJvbV90ZXh0XCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyBcIi5cIiA6IFwiXCI7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSArPSBlbGVtZW50VGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3XSsvZywgXCJfXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSBcImZyb21fbnRoX2NoaWxkXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyBcIi5cIiA6IFwiXCI7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArIFwiLlwiIDogXCJcIjtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lICs9IHJlY2lwZS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZTtcbiAgICB9XG4gICAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICAgIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNsaWNrYWJsZSBlbGVtZW50IG11c3QgaGF2ZSBhIG5hbWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgICAgIGxldCBjbGlja19lbGVtZW50O1xuICAgICAgICBpZiAocmVjaXBlLmNsaWNrX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5jbGlja19zZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaWNrYWJsZS1pZFwiLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2stZWxlbWVudCBub3QgZm91bmQnLCBlbGVtZW50LCByZWNpcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlO1xuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gXCJpbnB1dFwiKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcbiAgICAgICAgaWYgKFtcInRleHRcIiwgXCJudW1iZXJcIl0uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbnB1dC1pZFwiLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSBcInJhZGlvXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2xpY2thYmxlLWlkXCIsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdpbmRvdy5pbnB1dF9yZWNpcGVzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZTtcbiAgICB9XG4gICAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgICBpZiAodGFnTmFtZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdC1pZFwiLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpIHx8IG9wdGlvbi50ZXh0Q29udGVudC50cmltKCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudE5hbWUgKyBcIi5cIiArIG9wdGlvblZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvblZhbHVlKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLnNlbGVjdGVkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBvcHRpb25OYW1lKTsgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBhdHRyc1RvQ29weSA9IFtcImFsdFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwicm9sZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJhcmlhLWhpZGRlblwiLCBcImFyaWEtc2VsZWN0ZWRcIl07XG4gICAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChyZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWNpcGVbJ2NsYXNzJ10pIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKTtcbiAgICB9XG4gICAgaWYgKHJlY2lwZVsnaWQnXSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICAgIGlmIChyZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBldmFsKHJlY2lwZS5vdmVycmlkZV9hdHRyW2tleV0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBQcm9jZXNzIGNoaWxkcmVuXG4gICAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkUmVjaXBlIG9mIHJlY2lwZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZFJlY2lwZS5kaXJlY3RfY2hpbGQgPyBgOnNjb3BlID4gJHtjaGlsZFJlY2lwZS5zZWxlY3Rvcn1gIDogY2hpbGRSZWNpcGUuc2VsZWN0b3I7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlcnkgPSBjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IHx8IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gc3BsaXQgbWFya2VyXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICAgIGlmIChyZWNpcGUuZW1wdHlfbWVzc2FnZSAmJiBuZXdFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpO1xuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBwcm9jZXNzRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudC1wcm9jZXNzb3InO1xubGV0IGxhc3RTY3JvbGxUaW1lID0gMDsgLy8gVHJhY2sgbGFzdCBzY3JvbGwgdGltZXN0YW1wXG5jb25zdCBTQ1JPTExfVEhSRVNIT0xEID0gMTUwMDsgLy8gTWluaW11bSB0aW1lIGluIG1zIGJldHdlZW4gc2NyZWVuc2hvdHMgZm9yIHNjcm9sbCBhY3Rpb25zXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2dldFJlY2lwZScsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgIH0sIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJyk7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZWNpcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwZSA9IHJlc3BvbnNlLnJlY2lwZTtcbiAgICAgICAgICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1Jvb3Qub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIGNsaWNrYWJsZSBlbGVtZW50czonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9YDtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhhc2ggdmFsdWUgYmVmb3JlIHJldHVybjpcIiwgaGFzaCk7XG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cbi8vIEZ1bmN0aW9uIHRvIGdldCBjbGlja2FibGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0XG5mdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gICAgY29uc3QgY2xpY2thYmxlRWxlbWVudHMgPSBbXTsgLy8gQXJyYXkgdG8gc3RvcmUgY2xpY2thYmxlIGVsZW1lbnRzXG4gICAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gICAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAgICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocmVjdC50b3AgPj0gMCAmJlxuICAgICAgICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgICAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgICAgIGNsaWNrYWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6IGVsZW1lbnQudGFnTmFtZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGVsZW1lbnQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIGlubmVyVGV4dDogZWxlbWVudC5pbm5lclRleHQudHJpbSgpLFxuICAgICAgICAgICAgICAgIG91dGVySFRNTDogZWxlbWVudC5vdXRlckhUTUwudHJpbSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xpY2thYmxlRWxlbWVudHM7XG59XG4vLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGFyZ2V0LCB0aW1lc3RhbXAsIHNlbGVjdG9yLCBjbGlja2FibGVJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKTtcbiAgICAgICAgICAgIC8vIFNhdmUgSFRNTCBzbmFwc2hvdCBhbmQgd2FpdCBmb3IgaXQgdG8gY29tcGxldGVcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydodG1sU25hcHNob3RzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc3QgY2xpY2thYmxlRWxlbWVudHMgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICB0YXJnZXRDbGFzczogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICB0YXJnZXRJZDogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAvLyBjbGlja2FibGVFbGVtZW50czogY2xpY2thYmxlRWxlbWVudHMsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZUlkOiBjbGlja2FibGVJZCB8fCAnJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3NhdmVEYXRhJywgZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBDYXB0dXJlIHNjcm9sbCBpbnRlcmFjdGlvbnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBsYXN0U2Nyb2xsVGltZSA+PSBTQ1JPTExfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICBsYXN0U2Nyb2xsVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgeWllbGQgY2FwdHVyZUludGVyYWN0aW9uKCdzY3JvbGwnLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgJycsICcnLCAnJyk7XG4gICAgICAgICAgICB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIGV2ZW50IGhhbmRsaW5nOicsIGVycm9yKTtcbiAgICB9XG59KSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyZ2V0ICYmXG4gICAgICAgICgodGFyZ2V0LnRhZ05hbWUgPT09IFwiSU5QVVRcIiAmJiB0YXJnZXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHx8XG4gICAgICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKSkge1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCk7XG4gICAgICAgIHlpZWxkIGNhcHR1cmVJbnRlcmFjdGlvbihcImlucHV0XCIsIHRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnKTtcbiAgICB9XG59KSwgdHJ1ZSk7XG4vLyBDYXB0dXJlIGNsaWNrIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gZ2V0VW5pcXVlU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignLicpO1xuICAgICAgICByZXR1cm4gYCR7ZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LiR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGdldEZ1bGxTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhdGgudW5zaGlmdChnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSk7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpO1xufVxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbi8vICAgICB0cnkge1xuLy8gICAgICAgICBmdW5jdGlvbiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCwgZGVwdGg6IG51bWJlciA9IDApOiBIVE1MRWxlbWVudCB8IG51bGwge1xuLy8gICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGRlcHRoPj0yKSByZXR1cm4gbnVsbDtcbi8vICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LGRlcHRoKzEpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnQgPSBmaW5kQ2xpY2thYmxlUGFyZW50KGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4vLyAgICAgICAgIGNvbnN0IGNsaWNrYWJsZUlkID0gY2xpY2thYmxlRWxlbWVudCA/IGNsaWNrYWJsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpIHx8ICcnIDogJyc7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdjbGljaycpXG4vLyAgICAgICAgIGNvbnN0IHRpbWVzdGFtcD1uZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRpbWVzdGFtcClcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0b3I9Z2V0RnVsbFNlbGVjdG9yKGV2ZW50LnRhcmdldCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdzcmFydCBzY3JlZW5zaG90Jylcbi8vICAgICAgICAgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2VuZCBzY3JlZW5zaG90Jylcbi8vICAgICAgICAgY2FwdHVyZUludGVyYWN0aW9uKCdjbGljaycsIGV2ZW50LnRhcmdldCx0aW1lc3RhbXAsc2VsZWN0b3IsY2xpY2thYmxlSWQsJycpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnZW5kJylcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgY2xpY2sgZXZlbnQgaGFuZGxpbmc6JywgZXJyb3IpO1xuLy8gICAgIH1cbi8vIH0pO1xuLy8gRnVuY3Rpb24gdG8gY2FwdHVyZSBzY3JlZW5zaG90cyB3aXRoIHVuaXF1ZSBJRFxuZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIHNjcmVlbnNob3QgSURcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBzY3JlZW5zaG90XG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NhcHR1cmVTY3JlZW5zaG90Jywgc2NyZWVuc2hvdElkIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGFsbCB0eXBlcyBvZiBvcmRlciBidXR0b25zXG4gICAgY29uc3QgcGxhY2VPcmRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtpZD1cInBsYWNlT3JkZXJcIl0sIGlucHV0W2lkPVwidHVyYm8tY2hlY2tvdXQtcHlvLWJ1dHRvblwiXScpO1xuICAgIGNvbnN0IGJ1eU5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiYnV5LW5vdy1idXR0b25cIl0nKTtcbiAgICBjb25zdCBzZXR1cE5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cInJjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZVwiXScpO1xuICAgIGNvbnN0IHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2NlZWRUb1JldGFpbENoZWNrb3V0XCJdJyk7XG4gICAgLy8gSGFuZGxlIEJ1eSBOb3cgYW5kIFNldCBVcCBOb3cgYnV0dG9ucyBpZiBwcmVzZW50XG4gICAgW2J1eU5vd0J1dHRvbiwgc2V0dXBOb3dCdXR0b25dLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgoX2IgPSAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICgoX2QgPSAoX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheVwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW46ICgoX2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjQVNJTlwiKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnZhbHVlKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGFsbCBvcHRpb24gc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25Sb3dzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIikpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAoKF9iID0gKF9hID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5hLWZvcm0tbGFiZWxcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKFwiOiBcIiwgXCJcIikpIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgoX2MgPSByb3cucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5uZXJUZXh0KSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEluZm8ub3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2J1dHRvbi5pZH0gY2xpY2tlZCAtIFByb2R1Y3QgSW5mbzpgLCBwcm9kdWN0SW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHJlc3VsdC5vcmRlckRldGFpbHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJvZHVjdEluZm8ucHJpY2UucmVwbGFjZSgvW14wLTkuXS9nLCAnJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RJbmZvLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24pIHtcbiAgICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInNjLWFjdGl2ZS1cIl0nKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09ICdzYy1hY3RpdmUtY2FydCcpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdExpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByb2R1Y3QtdGl0bGUtY29udCAuc2MtcHJvZHVjdC1saW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZUVsZW1lbnQgPSBwcm9kdWN0TGluay5xdWVyeVNlbGVjdG9yKCcuYS10cnVuY2F0ZS1mdWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICgoX2EgPSBmdWxsTmFtZUVsZW1lbnQgPT09IG51bGwgfHwgZnVsbE5hbWVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmdWxsTmFtZUVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwcm9kdWN0TGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gKChfYiA9IGhyZWYubWF0Y2goL3Byb2R1Y3RcXC8oW0EtWjAtOV17MTB9KS8pKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJpY2UtYmxvY2sgLmEtb2Zmc2NyZWVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVsZW1lbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KCgoX2MgPSBwcmljZUVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSkgfHwgJzAnKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbkVsZW1lbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtcHJvZHVjdC12YXJpYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25FbGVtZW50cy5mb3JFYWNoKHZhcmlhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAoKF9iID0gKF9hID0gdmFyaWF0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hLXRleHQtYm9sZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50cmltKCkucmVwbGFjZSgnOicsICcnKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKChfZCA9IChfYyA9IHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS1zaXplLXNtYWxsOm5vdCguYS10ZXh0LWJvbGQpJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRyaW0oKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gcmVzdWx0Lm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5jb25jYXQoc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlsczogdXBkYXRlZE9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTDtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaHRtbDogaHRtbENvbnRlbnQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=