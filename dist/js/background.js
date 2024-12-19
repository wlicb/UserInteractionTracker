/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/recipe.ts":
/*!***********************!*\
  !*** ./src/recipe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   recipes: () => (/* binding */ recipes),
/* harmony export */   refinement_option: () => (/* binding */ refinement_option)
/* harmony export */ });
const nav = {
    "selector": "#nav-search-bar-form",
    "children": [
        {
            "selector": "input#twotabsearchtextbox",
            "name": "search_input",
        },
        {
            "selector": "#nav-search-submit-button",
            "clickable": true,
            "name": "search_button",
        },
    ],
};
const refinement_option = [
    {
        "selector": "span.a-size-base.a-color-base.puis-bold-weight-text",
        "add_text": true,
        "class": "refinement-title",
    },
    {
        "selector": "ul:nth-of-type(1) > span.a-declarative > span > li",
        "add_text": true,
        "name": "from_text",
        "clickable": true,
        "click_selector": "a",
        "direct_child": true,
        "children": [{ "selector": "input[type='checkbox']" }],
    },
];
const recipes = [
    {
        "match": "/",
        "match_method": "url",
        "selector": "html",
        "children": [
            { "selector": "head", "children": [{ "selector": "title", "add_text": true }] },
            {
                "selector": "body",
                "children": [nav],
            },
        ],
    },
    {
        "match": "/s",
        "match_method": "url",
        "selector": "html",
        "children": [
            { "selector": "head", "children": [{ "selector": "title", "add_text": true }] },
            {
                "selector": "body",
                "children": [
                    nav,
                    {
                        "selector": "#s-refinements",
                        "name": "refinements",
                        "children": [
                            {
                                "selector": "div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)",
                                "name": "from_text",
                                "text_selector": "span.a-size-base.a-color-base.puis-bold-weight-text",
                                "children": refinement_option,
                            },
                            {
                                "selector": "#departments",
                                "name": "departments",
                                "children": [
                                    {
                                        "selector": "li a",
                                        "add_text": true,
                                        "name": "from_text",
                                        "clickable": true,
                                    }
                                ],
                            },
                            {
                                "selector": "#reviewsRefinements",
                                "name": "reviews_refinements",
                                "children": [
                                    {
                                        "selector": "li a",
                                        "add_text": true,
                                        "name": "from_text",
                                        "clickable": true,
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        "selector": "div.s-main-slot.s-result-list.s-search-results",
                        "name": "search_results",
                        "children": [
                            {
                                "insert_split_marker": true,
                                "insert_split_marker_every": 4,
                                "selector": 'div[data-component-type="s-search-result"]',
                                "text_selector": "span.a-size-base-plus.a-color-base.a-text-normal",
                                "name": "from_text",
                                "class": "search-result",
                                "children": [
                                    {
                                        "selector": "div[data-cy='title-recipe'] a",
                                        "add_text": true,
                                        "class": "product-name",
                                        "clickable": true,
                                        "name": "view_product",
                                    },
                                    {
                                        "selector": "div[data-cy='reviews-block']",
                                        "class": "product-review",
                                        "children": [
                                            {
                                                "selector": "span.a-icon-alt",
                                                "add_text": true,
                                                "class": "product-rating",
                                            },
                                            {
                                                "selector": "span.a-size-base.s-underline-text",
                                                "add_text": true,
                                                "text_format": "{} reviews",
                                                "class": "product-rating-count",
                                            },
                                        ],
                                    },
                                    {
                                        "selector": "div[data-cy='price-recipe']",
                                        "class": "product-price",
                                        "children": [
                                            {
                                                "selector": "a.a-link-normal > span.a-price > span.a-offscreen",
                                                "add_text": true,
                                            },
                                        ],
                                    },
                                    {
                                        "selector": "div[data-cy='delivery-recipe']",
                                        "add_text": true,
                                        "class": "product-delivery",
                                    },
                                ],
                            }
                        ],
                    },
                    {
                        "selector": "span.s-pagination-strip",
                        "name": "pagination",
                        "children": [
                            {
                                "selector": ".s-pagination-item",
                                "add_text": true,
                                "name": "from_text",
                                "clickable": true,
                            }
                        ],
                    },
                ],
            },
        ],
    },
    {
        "match": "#productTitle",
        "match_text": "",
        "selector": "html",
        "terminate": "return !!arguments[0]",
        "terminate_callback": "return arguments[0]",
        "children": [
            { "selector": "head", "children": [{ "selector": "title", "add_text": true }] },
            {
                "selector": "body",
                "children": [
                    nav,
                    {
                        "selector": "#centerCol",
                        "class": "product-card",
                        "children": [
                            {
                                "selector": "#title",
                                "add_text": true,
                                "keep_attr": ["id"],
                            },
                            {
                                "selector": "#averageCustomerReviews",
                                "class": "review",
                                "children": [
                                    {
                                        "selector": "span.a-icon-alt",
                                        "add_text": true,
                                    },
                                    {
                                        "selector": "#acrCustomerReviewText",
                                        "add_text": true,
                                    },
                                ],
                            },
                            {
                                "selector": "#apex_desktop_newAccordionRow #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay",
                                "add_text": true,
                                "text_format": "Price: {}",
                                "class": "product-price",
                            },
                            {
                                "selector": "#twister",
                                "class": "product-options",
                                "children": [
                                    {
                                        "selector": "div.a-row:has(label.a-form-label):has(span.selection)",
                                        "children": [
                                            {
                                                "selector": "label.a-form-label",
                                                "add_text": true,
                                            },
                                            {
                                                "selector": "span.selection",
                                                "add_text": true,
                                            },
                                        ],
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        "selector": "#addToCart:has(#buy-now-button)",
                        "name": "add_to_cart",
                        "children": [
                            {
                                "selector": "#productFactsDesktopExpander",
                                "add_text": true,
                                "class": "product-facts",
                            },
                            {
                                "selector": "div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE",
                                "add_text": true,
                                "class": "product-delivery",
                            },
                            {
                                "selector": "#buy-now-button",
                                "add_text": true,
                                "clickable": true,
                                "name": "buy_now",
                                "class": "product-buy-now",
                                "before_hook": `
const title = document.querySelector("#title").innerText
const price = document.querySelector("span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay").innerText
const options = Array.from(document.querySelectorAll("#twister div.a-row:has(label.a-form-label):has(span.selection)")).map(a => ({label: a.querySelector("label.a-form-label").innerText, value: a.querySelector("span.selection").innerText}))
const options_dict = {}
for (const option of options) {
    options_dict[option["label"].replace(": ", "")] = option["value"]
}
const asin = document.querySelector("input#ASIN").value
console.log({title, price, options: options_dict, asin})
return {title, price, options: options_dict, asin}
`,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        "match": "/ap/signin",
        "match_method": "url",
        "terminate": "return !!arguments[0]",
        "terminate_callback": "return arguments[0]",
        "selector": "html",
    },
];


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
/*!********************************!*\
  !*** ./src/background_test.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe */ "./src/recipe.ts");
// src/background_test.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
chrome.webNavigation.onCommitted.addListener((details) => {
    if (details.frameId === 0) { // Only inject into the main frame
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ["js/injected.js"],
            world: "MAIN" // Ensures the script is injected into the main world
        });
    }
}, { url: [{ urlMatches: ".*amazon\\.com.*" }] });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

let upload_url = "http://userdatacollect.hailab.io/upload";
let interactions = [];
const interactionsLimit = 100;
let screenshots = [];
let reasonsAnnotation = [];
const reasonsLimit = 100;
const screenshotLimit = 100;
let actionSequenceId = 0;
let uploadTimer = null;
let userId = "";
let navigation_probability = 0.1;
let other_probability = 0.1;
const tabNavigationHistory = {};
function analyzeNavigation(tabId, url) {
    if (!tabNavigationHistory[tabId]) {
        tabNavigationHistory[tabId] = {
            backStack: [],
            forwardStack: [],
            currentUrl: null
        };
    }
    const history = tabNavigationHistory[tabId];
    if (!history.currentUrl) {
        history.currentUrl = url;
        return 'new';
    }
    if (history.currentUrl === url) {
        return 'reload';
    }
    if (history.backStack.length > 0 &&
        history.backStack[history.backStack.length - 1] === url) {
        history.forwardStack.push(history.currentUrl);
        history.currentUrl = history.backStack.pop();
        return 'back';
    }
    if (history.forwardStack.length > 0 &&
        history.forwardStack[history.forwardStack.length - 1] === url) {
        history.backStack.push(history.currentUrl);
        history.currentUrl = history.forwardStack.pop();
        return 'forward';
    }
    history.backStack.push(history.currentUrl);
    history.forwardStack = [];
    history.currentUrl = url;
    return 'new';
}
// Replace the simple question with a more detailed one based on event type
function getCustomQuestion(eventType, data) {
    var _a;
    switch (eventType) {
        case 'click':
            // Check if it's a specific type of click
            if (data.target.innerText === 'Set Up Now') {
                return "Why did you choose 'Set Up Now' instead of buy once, and why do you like this particular product?";
            }
            else if (data.target.id === 'buy-now-button') {
                return "Why did you choose to buy this product immediately, and what convinced you to skip further exploration of other options? Why do you like this particular product?";
            }
            else if ((_a = data.target.className) === null || _a === void 0 ? void 0 : _a.includes('sc-product-link')) {
                return "What made you click on this product, and what specific aspects attracted your attention compared to other search results?";
            }
            else if (data.target.id === 'add-to-cart-button') {
                return "Why did you decide to add this item to your cart, and are you planning to buy it now or later? What convinced you that this item was the right choice for your needs?";
            }
            else {
                return "What was your reason for clicking on this element?";
            }
        case 'scroll':
            return "What are you doing while scrolling—are you browsing search results, looking at reviews, or something else, and what are you hoping to find?";
        case 'input':
            return "What are you searching for, and how did you decide on the search terms you used? Are you looking for a specific product, brand, or feature?";
        case 'navigation':
            if (data.navigationType === 'back') {
                return "Why did you decide to go back to the previous page, and what were you hoping to revisit or reconsider?";
            }
            else if (data.navigationType === 'forward') {
                return "Why did you decide to return to this page after previously navigating away, and what new or unresolved information are you looking for now?";
            }
            return `What is the reason for this ${data.navigationType} navigation?`;
        case 'tabActivate':
            return `Why did you switch to this tab? Do you have specific task or information in mind?`;
        default:
            return `What is the reason for the ${eventType} action?`;
    }
}
// Add new function to handle screenshot saving
function saveScreenshot(screenshotDataUrl, screenshotId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (screenshotDataUrl) {
            screenshots.push([screenshotDataUrl, screenshotId]);
            if (screenshots.length > screenshotLimit) {
                let result = yield chrome.storage.local.get({ screenshots: [] });
                result = result.screenshots || [];
                const storeScreenshots = result.concat(screenshots);
                screenshots.length = 0;
                yield chrome.storage.local.set({ screenshots: storeScreenshots });
            }
            return true;
        }
        return false;
    });
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (message.action === 'saveData') {
            try {
                console.log('saveData ', message.data.eventType);
                actionSequenceId++;
                console.log(actionSequenceId);
                message.data.actionSequenceId = actionSequenceId;
                interactions.push(message.data);
                if (interactions.length > interactionsLimit) {
                    let result = yield chrome.storage.local.get({ interactions: [] });
                    result = result.interactions || [];
                    let storeInteractions = result.concat(interactions);
                    interactions.length = 0;
                    yield chrome.storage.local.set({ interactions: storeInteractions });
                }
                console.log('send message to popup');
                const question = getCustomQuestion(message.data.eventType, message.data);
                if (Math.random() < other_probability && ((_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id)) {
                    try {
                        const reason = yield chrome.tabs.sendMessage(sender.tab.id, {
                            action: 'show_popup',
                            question: question
                        });
                        if (reason && reason.input !== null) {
                            const newitem = {
                                actionSequenceId: message.data.actionSequenceId,
                                timestamp: message.data.timestamp,
                                eventType: message.data.eventType,
                                reason: reason
                            };
                            reasonsAnnotation.push(newitem);
                        }
                        if (reasonsAnnotation.length > reasonsLimit) {
                            let result = yield chrome.storage.local.get({ reasonsAnnotation: [] });
                            result = result.reasonsAnnotation || [];
                            let storeReasonsAnnotation = result.concat(reasonsAnnotation);
                            reasonsAnnotation.length = 0;
                            yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation });
                        }
                    }
                    catch (error) {
                        console.error('Error popup:', error);
                    }
                }
                sendResponse({ success: true });
            }
            catch (error) {
                console.error('Error in saveData:', error);
                sendResponse({ success: false, error: error.message });
            }
            return true; // Keep message channel open for async response
        }
        // Capture screenshot on demand
        if (message.action === 'captureScreenshot') {
            try {
                console.log('get screenshot request');
                const screenshotDataUrl = yield captureScreenshot();
                if (screenshotDataUrl) {
                    const success = yield saveScreenshot(screenshotDataUrl, message.screenshotId);
                    sendResponse({ success, message: success ? undefined : 'Failed to capture screenshot' });
                }
                else {
                    sendResponse({ success: false, message: 'Failed to capture screenshot' });
                }
            }
            catch (error) {
                console.error('Error in captureScreenshot:', error);
                sendResponse({ success: false, message: 'Failed to capture screenshot' });
            }
            return true;
        }
        // Download data on user request
        if (message.action === 'downloadData') {
            try {
                console.log('downloadData');
                const success = yield uploadDataToServer();
                sendResponse({ success });
            }
            catch (error) {
                console.error('Error handling download:', error);
                sendResponse({ success: false, error: error.message });
            }
            return true;
        }
        if (message.action === 'clearMemoryCache') {
            try {
                interactions = [];
                screenshots = [];
                reasonsAnnotation = [];
                actionSequenceId = 0;
                sendResponse({ success: true });
            }
            catch (error) {
                console.error('Error handling clearMemoryCache:', error);
                sendResponse({ success: false, error: error.message });
            }
            return true;
        }
        if (message.action === 'getRecipe' && ((_b = sender.tab) === null || _b === void 0 ? void 0 : _b.id)) {
            try {
                selectRecipe(sender.tab.id, message.url)
                    .then((recipe) => {
                    sendResponse({ recipe: recipe });
                })
                    .catch((error) => {
                    sendResponse({ error: error.message });
                });
            }
            catch (error) {
                console.error('Error handling getRecipe:', error);
                sendResponse({ success: false, error: error.message });
            }
            return true; // Indicate that sendResponse will be called asynchronously
        }
    }))();
    return true; // Keeps the message channel open for async responses
});
// Capture the screenshot in the current tab
function captureScreenshot() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true });
            if (tab) {
                return yield chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 25 });
            }
        }
        catch (error) {
            console.error('Error capturing screenshot:', error);
        }
        return null;
    });
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
// listen to switches between activated tabs
chrome.tabs.onActivated.addListener((activeInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tabId = activeInfo.tabId;
        const tab = yield chrome.tabs.get(tabId);
        if (!tab) {
            console.error(`Failed to get tab with ID: ${tabId}`);
            return;
        }
        console.log(`Switched to tab ${tabId} with URL: ${tab.url}`);
        if (tab.url && tab.url.includes('amazon.com')) {
            const timestamp = new Date().toISOString();
            const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}`;
            chrome.tabs.sendMessage(tabId, { action: 'getHTML' }, (response) => __awaiter(void 0, void 0, void 0, function* () {
                const htmlContent = response === null || response === void 0 ? void 0 : response.html;
                let result = yield chrome.storage.local.get({ htmlSnapshots: {} });
                const htmlSnapshots = result.htmlSnapshots || {};
                htmlSnapshots[currentSnapshotId] = htmlContent;
                yield chrome.storage.local.set({ htmlSnapshots });
                actionSequenceId++;
                const currentactionSequenceId = actionSequenceId;
                const data = {
                    eventType: "tabActivate",
                    timestamp: timestamp,
                    target_url: tab.url,
                    htmlSnapshotId: currentSnapshotId,
                    actionSequenceId: currentactionSequenceId,
                };
                interactions.push(data);
                if (interactions.length > interactionsLimit) {
                    let result = yield chrome.storage.local.get({ interactions: [] });
                    result = result.interactions || [];
                    let storeInteractions = result.concat(interactions);
                    interactions.length = 0;
                    yield chrome.storage.local.set({ interactions: storeInteractions });
                }
                ;
                const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 25 });
                const screenshotId = `screenshot_${timestamp}`;
                yield saveScreenshot(screenshotDataUrl, screenshotId);
                console.log('send message to popup tabActivate');
                const question = getCustomQuestion("tabActivate", data);
                if (Math.random() < navigation_probability && tabId) {
                    try {
                        const reason = yield chrome.tabs.sendMessage(tabId, {
                            action: 'show_popup',
                            question: question
                        });
                        if (reasonreason && reason.input !== null) {
                            const newitem = {
                                actionSequenceId: currentactionSequenceId,
                                timestamp: timestamp,
                                eventType: "tabActivate",
                                reason: reason
                            };
                            reasonsAnnotation.push(newitem);
                        }
                        if (reasonsAnnotation.length > reasonsLimit) {
                            let result = yield chrome.storage.local.get({ reasonsAnnotation: [] });
                            result = result.reasonsAnnotation || [];
                            let storeReasonsAnnotation = result.concat(reasonsAnnotation);
                            reasonsAnnotation.length = 0;
                            yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation });
                        }
                    }
                    catch (error) {
                        console.error('Error popup:', error);
                    }
                }
            }));
        }
    }
    catch (error) {
        console.error('Error in tab activate handler:', error);
    }
}));
function selectRecipe(tabId, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const parsedUrl = new URL(url);
        const path = parsedUrl.pathname;
        for (const recipe of _recipe__WEBPACK_IMPORTED_MODULE_0__.recipes) {
            const matchMethod = recipe.match_method || "text";
            if (matchMethod === "text") {
                try {
                    // Execute script in tab to check for matching element
                    const [{ result: hasMatch }] = yield chrome.scripting.executeScript({
                        target: { tabId },
                        func: (selector, matchText) => {
                            var _a, _b;
                            const element = document.querySelector(selector);
                            return element && (!matchText || ((_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(matchText.toLowerCase())) !== null && _b !== void 0 ? _b : false));
                        },
                        args: [recipe.match, recipe.match_text || ""]
                    });
                    if (hasMatch) {
                        return recipe;
                    }
                }
                catch (error) {
                    console.error("Error checking text match:", error);
                }
            }
            else if (matchMethod === "url" && recipe.match === path) {
                return recipe;
            }
        }
        throw new Error(`No matching recipe found for path: ${path}`);
    });
}
chrome.webNavigation.onCommitted.addListener((details) => __awaiter(void 0, void 0, void 0, function* () {
    if (details.frameId !== 0)
        return;
    console.log('webNavigation onCommitted event triggered:', details);
    if (details.url.includes('amazon.com')) {
        const navigationType = analyzeNavigation(details.tabId, details.url);
        console.log(`Navigation type: ${navigationType} for tab ${details.tabId} to ${details.url}`);
        const timestamp = new Date().toISOString();
        chrome.tabs.sendMessage(details.tabId, { action: 'getHTML' }, (response) => __awaiter(void 0, void 0, void 0, function* () {
            const htmlContent = response === null || response === void 0 ? void 0 : response.html;
            const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}`;
            let result = yield chrome.storage.local.get({ htmlSnapshots: {} });
            const htmlSnapshots = result.htmlSnapshots || {};
            htmlSnapshots[currentSnapshotId] = htmlContent;
            yield chrome.storage.local.set({ htmlSnapshots });
            actionSequenceId++;
            const currentactionSequenceId = actionSequenceId;
            const data = {
                eventType: "navigation",
                navigationType: navigationType,
                timestamp: timestamp,
                target_url: details.url,
                htmlSnapshotId: currentSnapshotId,
                actionSequenceId: currentactionSequenceId,
            };
            interactions.push(data);
            if (interactions.length > interactionsLimit) {
                let result = yield chrome.storage.local.get({ interactions: [] });
                result = result.interactions || [];
                let storeInteractions = result.concat(interactions);
                interactions.length = 0;
                yield chrome.storage.local.set({ interactions: storeInteractions });
            }
            // add screenshot
            const tab = yield chrome.tabs.get(details.tabId);
            const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(tab.windowId, {
                format: 'jpeg',
                quality: 25
            });
            const screenshotId = `screenshot_${timestamp}`;
            yield saveScreenshot(screenshotDataUrl, screenshotId);
            if (navigationType !== 'new' && navigationType !== 'reload') {
                console.log('send message to popup navigation');
                const question = getCustomQuestion("navigation", data);
                if (Math.random() < navigation_probability && details.tabId) {
                    try {
                        const reason = yield chrome.tabs.sendMessage(details.tabId, {
                            action: 'show_popup',
                            question: question
                        });
                        if (reason && reason.input !== null) {
                            const newitem = {
                                actionSequenceId: currentactionSequenceId,
                                timestamp: timestamp,
                                eventType: "navigation",
                                reason: reason
                            };
                            reasonsAnnotation.push(newitem);
                        }
                        if (reasonsAnnotation.length > reasonsLimit) {
                            let result = yield chrome.storage.local.get({ reasonsAnnotation: [] });
                            result = result.reasonsAnnotation || [];
                            let storeReasonsAnnotation = result.concat(reasonsAnnotation);
                            reasonsAnnotation.length = 0;
                            yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation });
                        }
                    }
                    catch (error) {
                        console.error('Error popup:', error);
                    }
                }
            }
        }));
    }
}));
// Add cleanup when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
    delete tabNavigationHistory[tabId];
});
// Add this function to handle data upload
function uploadDataToServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const folderName = `DATA/SESSION_${timestamp}`;
            // Get userId and data from storage
            const userIdResult = yield chrome.storage.local.get({ userId: "" });
            const currentUserId = userIdResult.userId;
            const { htmlSnapshots = {}, storeInteractions = [], storeScreenshots = [], storeReasonsAnnotation = [], orderDetails = [] } = yield chrome.storage.local.get(['htmlSnapshots', 'interactions', 'screenshots', 'reasonsAnnotation', 'orderDetails']);
            // Combine with in-memory data
            const allInteractions = [...storeInteractions, ...interactions];
            const allScreenshots = [...storeScreenshots, ...screenshots];
            const allReasons = [...storeReasonsAnnotation, ...reasonsAnnotation];
            // Upload session info
            const sessionInfo = new Blob([`Session data for timestamp: ${timestamp}, user id: ${currentUserId} \n order details: \n ${JSON.stringify(orderDetails)}`], { type: 'text/plain' });
            const sessionFormData = new FormData();
            sessionFormData.append('file', sessionInfo, `${folderName}/session_info.txt`);
            console.log('uploading session info');
            yield fetch(upload_url, {
                method: 'POST',
                body: sessionFormData
            });
            // Upload HTML snapshots as separate files
            console.log('uploading html snapshots');
            for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
                const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
                const formData = new FormData();
                formData.append('file', htmlBlob, `${folderName}/html/${snapshotId}.html`);
                yield fetch(upload_url, { method: 'POST', body: formData });
            }
            // Upload interactions JSON
            console.log('uploading interactions');
            const fullData = {
                interactions: allInteractions,
                reasons: allReasons,
                orderDetails: orderDetails
            };
            const interactionsBlob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
            const jsonFormData = new FormData();
            jsonFormData.append('file', interactionsBlob, `${folderName}/interactions.json`);
            yield fetch(upload_url, {
                method: 'POST',
                body: jsonFormData
            });
            // Upload screenshots
            console.log('uploading interactions');
            for (const [screenshotData, screenshotId] of allScreenshots) {
                const response = yield fetch(screenshotData);
                const blob = yield response.blob();
                const formData = new FormData();
                formData.append('file', blob, `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, "-")}.jpg`);
                console.log('uploading screenshots');
                yield fetch(upload_url, {
                    method: 'POST',
                    body: formData
                });
            }
            // Clear cache after successful upload
            chrome.storage.local.remove(['htmlSnapshots', 'interactions', 'orderDetails', 'screenshots', 'reasonsAnnotation']);
            interactions.length = 0;
            screenshots.length = 0;
            reasonsAnnotation.length = 0;
            return true;
        }
        catch (error) {
            console.error('Error uploading data:', error);
            return false;
        }
    });
}
// Start the periodic upload timer
function startPeriodicUpload() {
    if (!uploadTimer) {
        uploadTimer = setInterval(uploadDataToServer, 60000); // 60 seconds
    }
}
// Stop the periodic upload timer
function stopPeriodicUpload() {
    if (uploadTimer) {
        clearInterval(uploadTimer);
        uploadTimer = null;
    }
}
// startPeriodicUpload();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQ7QUFDQSxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBLG9CQUFvQixrQkFBa0Isa0dBQWtHO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsVUFBVSxhQUFhLGVBQWUsdUJBQXVCLDZCQUE2QixNQUFNLG9CQUFvQjtBQUM3TDtBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxtQkFBbUI7QUFDOUU7QUFDQSxxREFBcUQsV0FBVyxRQUFRLFdBQVc7QUFDbkYsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLDBCQUEwQjtBQUMvRztBQUNBLDZEQUE2RCxXQUFXO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVyxlQUFlLG1DQUFtQztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGUudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kX3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgICBcInNlbGVjdG9yXCI6IFwiI25hdi1zZWFyY2gtYmFyLWZvcm1cIixcbiAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImlucHV0I3R3b3RhYnNlYXJjaHRleHRib3hcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInNlYXJjaF9pbnB1dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInNlYXJjaF9idXR0b25cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAgICB7XG4gICAgICAgIFwic2VsZWN0b3JcIjogXCJzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHRcIixcbiAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICBcImNsYXNzXCI6IFwicmVmaW5lbWVudC10aXRsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNlbGVjdG9yXCI6IFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGlcIixcbiAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJjbGlja19zZWxlY3RvclwiOiBcImFcIixcbiAgICAgICAgXCJkaXJlY3RfY2hpbGRcIjogdHJ1ZSxcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcInNlbGVjdG9yXCI6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiIH1dLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gICAge1xuICAgICAgICBcIm1hdGNoXCI6IFwiL1wiLFxuICAgICAgICBcIm1hdGNoX21ldGhvZFwiOiBcInVybFwiLFxuICAgICAgICBcInNlbGVjdG9yXCI6IFwiaHRtbFwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHsgXCJzZWxlY3RvclwiOiBcImhlYWRcIiwgXCJjaGlsZHJlblwiOiBbeyBcInNlbGVjdG9yXCI6IFwidGl0bGVcIiwgXCJhZGRfdGV4dFwiOiB0cnVlIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtuYXZdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJtYXRjaFwiOiBcIi9zXCIsXG4gICAgICAgIFwibWF0Y2hfbWV0aG9kXCI6IFwidXJsXCIsXG4gICAgICAgIFwic2VsZWN0b3JcIjogXCJodG1sXCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgeyBcInNlbGVjdG9yXCI6IFwiaGVhZFwiLCBcImNoaWxkcmVuXCI6IFt7IFwic2VsZWN0b3JcIjogXCJ0aXRsZVwiLCBcImFkZF90ZXh0XCI6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjcy1yZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRfc2VsZWN0b3JcIjogXCJzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiByZWZpbmVtZW50X29wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNkZXBhcnRtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXBhcnRtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwibGkgYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3Jldmlld3NSZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyZXZpZXdzX3JlZmluZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJsaSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hfcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluc2VydF9zcGxpdF9tYXJrZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5XCI6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X3NlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS1wbHVzLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwic2VhcmNoLXJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmlld19wcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtcmV2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJzcGFuLmEtaWNvbi1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXJhdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRfZm9ybWF0XCI6IFwie30gcmV2aWV3c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtcmF0aW5nLWNvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1kZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5zLXBhZ2luYXRpb24tc3RyaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIi5zLXBhZ2luYXRpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibWF0Y2hcIjogXCIjcHJvZHVjdFRpdGxlXCIsXG4gICAgICAgIFwibWF0Y2hfdGV4dFwiOiBcIlwiLFxuICAgICAgICBcInNlbGVjdG9yXCI6IFwiaHRtbFwiLFxuICAgICAgICBcInRlcm1pbmF0ZVwiOiBcInJldHVybiAhIWFyZ3VtZW50c1swXVwiLFxuICAgICAgICBcInRlcm1pbmF0ZV9jYWxsYmFja1wiOiBcInJldHVybiBhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7IFwic2VsZWN0b3JcIjogXCJoZWFkXCIsIFwiY2hpbGRyZW5cIjogW3sgXCJzZWxlY3RvclwiOiBcInRpdGxlXCIsIFwiYWRkX3RleHRcIjogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNjZW50ZXJDb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiN0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2VlcF9hdHRyXCI6IFtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2F2ZXJhZ2VDdXN0b21lclJldmlld3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInJldmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLWljb24tYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2FjckN1c3RvbWVyUmV2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjYXBleF9kZXNrdG9wX25ld0FjY29yZGlvblJvdyAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRfZm9ybWF0XCI6IFwiUHJpY2U6IHt9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjdHdpc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1vcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwibGFiZWwuYS1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJzcGFuLnNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjYWRkVG9DYXJ0OmhhcygjYnV5LW5vdy1idXR0b24pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhZGRfdG9fY2FydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWZhY3RzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWRlbGl2ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjYnV5LW5vdy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJidXlfbm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJ1eS1ub3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVfaG9va1wiOiBgXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikuaW5uZXJUZXh0XG5jb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5XCIpLmlubmVyVGV4dFxuY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pXCIpKS5tYXAoYSA9PiAoe2xhYmVsOiBhLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5hLWZvcm0tbGFiZWxcIikuaW5uZXJUZXh0LCB2YWx1ZTogYS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5zZWxlY3Rpb25cIikuaW5uZXJUZXh0fSkpXG5jb25zdCBvcHRpb25zX2RpY3QgPSB7fVxuZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgIG9wdGlvbnNfZGljdFtvcHRpb25bXCJsYWJlbFwiXS5yZXBsYWNlKFwiOiBcIiwgXCJcIildID0gb3B0aW9uW1widmFsdWVcIl1cbn1cbmNvbnN0IGFzaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjQVNJTlwiKS52YWx1ZVxuY29uc29sZS5sb2coe3RpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2lufSlcbnJldHVybiB7dGl0bGUsIHByaWNlLCBvcHRpb25zOiBvcHRpb25zX2RpY3QsIGFzaW59XG5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm1hdGNoXCI6IFwiL2FwL3NpZ25pblwiLFxuICAgICAgICBcIm1hdGNoX21ldGhvZFwiOiBcInVybFwiLFxuICAgICAgICBcInRlcm1pbmF0ZVwiOiBcInJldHVybiAhIWFyZ3VtZW50c1swXVwiLFxuICAgICAgICBcInRlcm1pbmF0ZV9jYWxsYmFja1wiOiBcInJldHVybiBhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcImh0bWxcIixcbiAgICB9LFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3JjL2JhY2tncm91bmRfdGVzdC50c1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21taXR0ZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IHtcbiAgICBpZiAoZGV0YWlscy5mcmFtZUlkID09PSAwKSB7IC8vIE9ubHkgaW5qZWN0IGludG8gdGhlIG1haW4gZnJhbWVcbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogZGV0YWlscy50YWJJZCB9LFxuICAgICAgICAgICAgZmlsZXM6IFtcImpzL2luamVjdGVkLmpzXCJdLFxuICAgICAgICAgICAgd29ybGQ6IFwiTUFJTlwiIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4gICAgICAgIH0pO1xuICAgIH1cbn0sIHsgdXJsOiBbeyB1cmxNYXRjaGVzOiBcIi4qYW1hem9uXFxcXC5jb20uKlwiIH1dIH0pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuL3JlY2lwZSc7XG5sZXQgdXBsb2FkX3VybCA9IFwiaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkXCI7XG5sZXQgaW50ZXJhY3Rpb25zID0gW107XG5jb25zdCBpbnRlcmFjdGlvbnNMaW1pdCA9IDEwMDtcbmxldCBzY3JlZW5zaG90cyA9IFtdO1xubGV0IHJlYXNvbnNBbm5vdGF0aW9uID0gW107XG5jb25zdCByZWFzb25zTGltaXQgPSAxMDA7XG5jb25zdCBzY3JlZW5zaG90TGltaXQgPSAxMDA7XG5sZXQgYWN0aW9uU2VxdWVuY2VJZCA9IDA7XG5sZXQgdXBsb2FkVGltZXIgPSBudWxsO1xubGV0IHVzZXJJZCA9IFwiXCI7XG5sZXQgbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTtcbmxldCBvdGhlcl9wcm9iYWJpbGl0eSA9IDAuMTtcbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5ID0ge307XG5mdW5jdGlvbiBhbmFseXplTmF2aWdhdGlvbih0YWJJZCwgdXJsKSB7XG4gICAgaWYgKCF0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0pIHtcbiAgICAgICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGhpc3RvcnkgPSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG4gICAgaWYgKCFoaXN0b3J5LmN1cnJlbnRVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gJ25ldyc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmN1cnJlbnRVcmwgPT09IHVybCkge1xuICAgICAgICByZXR1cm4gJ3JlbG9hZCc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggPiAwICYmXG4gICAgICAgIGhpc3RvcnkuYmFja1N0YWNrW2hpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmJhY2tTdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuICdiYWNrJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuZm9yd2FyZFN0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2ZvcndhcmQnO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sgPSBbXTtcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgcmV0dXJuICduZXcnO1xufVxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5mdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGUsIGRhdGEpIHtcbiAgICB2YXIgX2E7XG4gICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgICAgICAgIGlmIChkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGNob29zZSAnU2V0IFVwIE5vdycgaW5zdGVhZCBvZiBidXkgb25jZSwgYW5kIHdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgY2hvb3NlIHRvIGJ1eSB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHksIGFuZCB3aGF0IGNvbnZpbmNlZCB5b3UgdG8gc2tpcCBmdXJ0aGVyIGV4cGxvcmF0aW9uIG9mIG90aGVyIG9wdGlvbnM/IFdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChfYSA9IGRhdGEudGFyZ2V0LmNsYXNzTmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoYXQgbWFkZSB5b3UgY2xpY2sgb24gdGhpcyBwcm9kdWN0LCBhbmQgd2hhdCBzcGVjaWZpYyBhc3BlY3RzIGF0dHJhY3RlZCB5b3VyIGF0dGVudGlvbiBjb21wYXJlZCB0byBvdGhlciBzZWFyY2ggcmVzdWx0cz9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydCwgYW5kIGFyZSB5b3UgcGxhbm5pbmcgdG8gYnV5IGl0IG5vdyBvciBsYXRlcj8gV2hhdCBjb252aW5jZWQgeW91IHRoYXQgdGhpcyBpdGVtIHdhcyB0aGUgcmlnaHQgY2hvaWNlIGZvciB5b3VyIG5lZWRzP1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2hhdCB3YXMgeW91ciByZWFzb24gZm9yIGNsaWNraW5nIG9uIHRoaXMgZWxlbWVudD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiBcIldoYXQgYXJlIHlvdSBkb2luZyB3aGlsZSBzY3JvbGxpbmfigJRhcmUgeW91IGJyb3dzaW5nIHNlYXJjaCByZXN1bHRzLCBsb29raW5nIGF0IHJldmlld3MsIG9yIHNvbWV0aGluZyBlbHNlLCBhbmQgd2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kP1wiO1xuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICByZXR1cm4gXCJXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciwgYW5kIGhvdyBkaWQgeW91IGRlY2lkZSBvbiB0aGUgc2VhcmNoIHRlcm1zIHlvdSB1c2VkPyBBcmUgeW91IGxvb2tpbmcgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdCwgYnJhbmQsIG9yIGZlYXR1cmU/XCI7XG4gICAgICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGRlY2lkZSB0byBnbyBiYWNrIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBhbmQgd2hhdCB3ZXJlIHlvdSBob3BpbmcgdG8gcmV2aXNpdCBvciByZWNvbnNpZGVyP1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgZGVjaWRlIHRvIHJldHVybiB0byB0aGlzIHBhZ2UgYWZ0ZXIgcHJldmlvdXNseSBuYXZpZ2F0aW5nIGF3YXksIGFuZCB3aGF0IG5ldyBvciB1bnJlc29sdmVkIGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3Igbm93P1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2A7XG4gICAgICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgICAgICAgIHJldHVybiBgV2h5IGRpZCB5b3Ugc3dpdGNoIHRvIHRoaXMgdGFiPyBEbyB5b3UgaGF2ZSBzcGVjaWZpYyB0YXNrIG9yIGluZm9ybWF0aW9uIGluIG1pbmQ/YDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gO1xuICAgIH1cbn1cbi8vIEFkZCBuZXcgZnVuY3Rpb24gdG8gaGFuZGxlIHNjcmVlbnNob3Qgc2F2aW5nXG5mdW5jdGlvbiBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICBzY3JlZW5zaG90cy5wdXNoKFtzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkXSk7XG4gICAgICAgICAgICBpZiAoc2NyZWVuc2hvdHMubGVuZ3RoID4gc2NyZWVuc2hvdExpbWl0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNjcmVlbnNob3RzOiBbXSB9KTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc2NyZWVuc2hvdHMgfHwgW107XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmVTY3JlZW5zaG90cyA9IHJlc3VsdC5jb25jYXQoc2NyZWVuc2hvdHMpO1xuICAgICAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2NyZWVuc2hvdHM6IHN0b3JlU2NyZWVuc2hvdHMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzYXZlRGF0YScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVEYXRhICcsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUpO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb25TZXF1ZW5jZUlkKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGEuYWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2gobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3Rpb25zLmxlbmd0aCA+IGludGVyYWN0aW9uc0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSByZXN1bHQuY29uY2F0KGludGVyYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtZXNzYWdlIHRvIHBvcHVwJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBnZXRDdXN0b21RdWVzdGlvbihtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgb3RoZXJfcHJvYmFiaWxpdHkgJiYgKChfYSA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IHlpZWxkIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHNlbmRlci50YWIuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdzaG93X3BvcHVwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24uaW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkOiBtZXNzYWdlLmRhdGEuYWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBtZXNzYWdlLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5wdXNoKG5ld2l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA+IHJlYXNvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gcmVzdWx0LmNvbmNhdChyZWFzb25zQW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uc0Fubm90YXRpb24ubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZWFzb25zQW5ub3RhdGlvbjogc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvcHVwOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2F2ZURhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxuICAgICAgICB9XG4gICAgICAgIC8vIENhcHR1cmUgc2NyZWVuc2hvdCBvbiBkZW1hbmRcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2FwdHVyZVNjcmVlbnNob3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgc2NyZWVuc2hvdCByZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0geWllbGQgc2F2ZVNjcmVlbnNob3Qoc2NyZWVuc2hvdERhdGFVcmwsIG1lc3NhZ2Uuc2NyZWVuc2hvdElkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcywgbWVzc2FnZTogc3VjY2VzcyA/IHVuZGVmaW5lZCA6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY2FwdHVyZVNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEb3dubG9hZCBkYXRhIG9uIHVzZXIgcmVxdWVzdFxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdkb3dubG9hZERhdGEnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZERhdGEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0geWllbGQgdXBsb2FkRGF0YVRvU2VydmVyKCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjbGVhck1lbW9yeUNhY2hlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90cyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uID0gW107XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCA9IDA7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGNsZWFyTWVtb3J5Q2FjaGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldFJlY2lwZScgJiYgKChfYiA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVjaXBlKHNlbmRlci50YWIuaWQsIG1lc3NhZ2UudXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVjaXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHJlY2lwZTogcmVjaXBlIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBnZXRSZWNpcGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZSB0aGF0IHNlbmRSZXNwb25zZSB3aWxsIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICB9XG4gICAgfSkpKCk7XG4gICAgcmV0dXJuIHRydWU7IC8vIEtlZXBzIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VzXG59KTtcbi8vIENhcHR1cmUgdGhlIHNjcmVlbnNob3QgaW4gdGhlIGN1cnJlbnQgdGFiXG5mdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhhc2ggdmFsdWUgYmVmb3JlIHJldHVybjpcIiwgaGFzaCk7XG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoYWN0aXZlSW5mbykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFiSWQgPSBhY3RpdmVJbmZvLnRhYklkO1xuICAgICAgICBjb25zdCB0YWIgPSB5aWVsZCBjaHJvbWUudGFicy5nZXQodGFiSWQpO1xuICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgU3dpdGNoZWQgdG8gdGFiICR7dGFiSWR9IHdpdGggVVJMOiAke3RhYi51cmx9YCk7XG4gICAgICAgIGlmICh0YWIudXJsICYmIHRhYi51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKHRhYi51cmwpfV8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5odG1sO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiB7fSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90c1tjdXJyZW50U25hcHNob3RJZF0gPSBodG1sQ29udGVudDtcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBcInRhYkFjdGl2YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRfdXJsOiB0YWIudXJsLFxuICAgICAgICAgICAgICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0aW9ucy5sZW5ndGggPiBpbnRlcmFjdGlvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gcmVzdWx0LmNvbmNhdChpbnRlcmFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgICAgIHlpZWxkIHNhdmVTY3JlZW5zaG90KHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2UgdG8gcG9wdXAgdGFiQWN0aXZhdGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVzdGlvbiA9IGdldEN1c3RvbVF1ZXN0aW9uKFwidGFiQWN0aXZhdGVcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBuYXZpZ2F0aW9uX3Byb2JhYmlsaXR5ICYmIHRhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3Nob3dfcG9wdXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhc29ucmVhc29uICYmIHJlYXNvbi5pbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBcInRhYkFjdGl2YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5wdXNoKG5ld2l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA+IHJlYXNvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gcmVzdWx0LmNvbmNhdChyZWFzb25zQW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uc0Fubm90YXRpb24ubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZWFzb25zQW5ub3RhdGlvbjogc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvcHVwOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdGFiIGFjdGl2YXRlIGhhbmRsZXI6JywgZXJyb3IpO1xuICAgIH1cbn0pKTtcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSh0YWJJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lO1xuICAgICAgICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpZiAobWF0Y2hNZXRob2QgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFt7IHJlc3VsdDogaGFzTWF0Y2ggfV0gPSB5aWVsZCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jOiAoc2VsZWN0b3IsIG1hdGNoVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICYmICghbWF0Y2hUZXh0IHx8ICgoX2IgPSAoX2EgPSBlbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaFRleHQudG9Mb3dlckNhc2UoKSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW3JlY2lwZS5tYXRjaCwgcmVjaXBlLm1hdGNoX3RleHQgfHwgXCJcIl1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gXCJ1cmxcIiAmJiByZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YCk7XG4gICAgfSk7XG59XG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCAhPT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKCd3ZWJOYXZpZ2F0aW9uIG9uQ29tbWl0dGVkIGV2ZW50IHRyaWdnZXJlZDonLCBkZXRhaWxzKTtcbiAgICBpZiAoZGV0YWlscy51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSkge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YCk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuaHRtbDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czoge30gfSk7XG4gICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGh0bWxDb250ZW50O1xuICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KTtcbiAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZDtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgdGFyZ2V0X3VybDogZGV0YWlscy51cmwsXG4gICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGludGVyYWN0aW9ucy5sZW5ndGggPiBpbnRlcmFjdGlvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gcmVzdWx0LmNvbmNhdChpbnRlcmFjdGlvbnMpO1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgc2NyZWVuc2hvdFxuICAgICAgICAgICAgY29uc3QgdGFiID0geWllbGQgY2hyb21lLnRhYnMuZ2V0KGRldGFpbHMudGFiSWQpO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdqcGVnJyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAyNVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgeWllbGQgc2F2ZVNjcmVlbnNob3Qoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZCk7XG4gICAgICAgICAgICBpZiAobmF2aWdhdGlvblR5cGUgIT09ICduZXcnICYmIG5hdmlnYXRpb25UeXBlICE9PSAncmVsb2FkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2UgdG8gcG9wdXAgbmF2aWdhdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oXCJuYXZpZ2F0aW9uXCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSAmJiBkZXRhaWxzLnRhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShkZXRhaWxzLnRhYklkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnc2hvd19wb3B1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3aXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uc0Fubm90YXRpb24ucHVzaChuZXdpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPiByZWFzb25zTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHJlc3VsdC5jb25jYXQocmVhc29uc0Fubm90YXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVhc29uc0Fubm90YXRpb246IHN0b3JlUmVhc29uc0Fubm90YXRpb24gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3B1cDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG59KSk7XG4vLyBBZGQgY2xlYW51cCB3aGVuIHRhYiBpcyBjbG9zZWRcbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgICBkZWxldGUgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdO1xufSk7XG4vLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBoYW5kbGUgZGF0YSB1cGxvYWRcbmZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgREFUQS9TRVNTSU9OXyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgdXNlcklkUmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgdXNlcklkOiBcIlwiIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWQ7XG4gICAgICAgICAgICBjb25zdCB7IGh0bWxTbmFwc2hvdHMgPSB7fSwgc3RvcmVJbnRlcmFjdGlvbnMgPSBbXSwgc3RvcmVTY3JlZW5zaG90cyA9IFtdLCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gW10sIG9yZGVyRGV0YWlscyA9IFtdIH0gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydodG1sU25hcHNob3RzJywgJ2ludGVyYWN0aW9ucycsICdzY3JlZW5zaG90cycsICdyZWFzb25zQW5ub3RhdGlvbicsICdvcmRlckRldGFpbHMnXSk7XG4gICAgICAgICAgICAvLyBDb21iaW5lIHdpdGggaW4tbWVtb3J5IGRhdGFcbiAgICAgICAgICAgIGNvbnN0IGFsbEludGVyYWN0aW9ucyA9IFsuLi5zdG9yZUludGVyYWN0aW9ucywgLi4uaW50ZXJhY3Rpb25zXTtcbiAgICAgICAgICAgIGNvbnN0IGFsbFNjcmVlbnNob3RzID0gWy4uLnN0b3JlU2NyZWVuc2hvdHMsIC4uLnNjcmVlbnNob3RzXTtcbiAgICAgICAgICAgIGNvbnN0IGFsbFJlYXNvbnMgPSBbLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4ucmVhc29uc0Fubm90YXRpb25dO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihbYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH0sIHVzZXIgaWQ6ICR7Y3VycmVudFVzZXJJZH0gXFxuIG9yZGVyIGRldGFpbHM6IFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YF0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBzZXNzaW9uRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgc2Vzc2lvbkluZm8sIGAke2ZvbGRlck5hbWV9L3Nlc3Npb25faW5mby50eHRgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2Vzc2lvbiBpbmZvJyk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBIVE1MIHNuYXBzaG90cyBhcyBzZXBhcmF0ZSBmaWxlc1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBodG1sIHNuYXBzaG90cycpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbEJsb2IgPSBuZXcgQmxvYihbaHRtbENvbnRlbnRdLCB7IHR5cGU6ICd0ZXh0L2h0bWwnIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaHRtbEJsb2IsIGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkfS5odG1sYCk7XG4gICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zJyk7XG4gICAgICAgICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnM6IGFsbEludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICByZWFzb25zOiBhbGxSZWFzb25zLFxuICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMildLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IsIGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9ucy5qc29uYCk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keToganNvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIGFsbFNjcmVlbnNob3RzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChzY3JlZW5zaG90RGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IHlpZWxkIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IsIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgXCItXCIpfS5qcGdgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENsZWFyIGNhY2hlIGFmdGVyIHN1Y2Nlc3NmdWwgdXBsb2FkXG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoWydodG1sU25hcHNob3RzJywgJ2ludGVyYWN0aW9ucycsICdvcmRlckRldGFpbHMnLCAnc2NyZWVuc2hvdHMnLCAncmVhc29uc0Fubm90YXRpb24nXSk7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgNjAwMDApOyAvLyA2MCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuLy8gc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9