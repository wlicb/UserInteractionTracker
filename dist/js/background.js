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
}, { url: [{ urlMatches: ".*" }] });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

let upload_url = "http://userdatacollect.hailab.io/upload";
let interactions = [];
const interactionsLimit = 10;
let screenshots = [];
const screenshotLimit = 10;
let actionSequenceId = 0;
let uploadTimer = null;
let userId = "";
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
        var _a;
        try {
            if (message.action === 'saveData') {
                console.log('saveData ', message.data.eventType);
                actionSequenceId++;
                message.data.actionSequenceId = actionSequenceId;
                interactions.push(message.data);
                if (interactions.length > interactionsLimit) {
                    let result = yield chrome.storage.local.get({ interactions: [] });
                    result = result.interactions || [];
                    let storeInteractions = result.concat(interactions);
                    interactions.length = 0;
                    yield chrome.storage.local.set({ interactions: storeInteractions });
                }
                sendResponse({ success: true });
            }
            // Capture screenshot on demand
            if (message.action === 'captureScreenshot') {
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
            }
            if (message.action === 'clearMemoryCache') {
                interactions = [];
                screenshots = [];
                actionSequenceId = 0;
                sendResponse({ success: true });
            }
            if (message.action === 'getRecipe' && ((_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id)) {
                selectRecipe(sender.tab.id, message.url)
                    .then((recipe) => {
                    sendResponse({ recipe: recipe });
                })
                    .catch((error) => {
                    sendResponse({ error: error.message });
                });
                return true; // Indicate that sendResponse will be called asynchronously
            }
        }
        catch (error) {
            // chrome.storage.local.clear();
            console.error('Error handling message:', error);
            sendResponse({ success: false, error: error.message });
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
                const data = {
                    eventType: "tabActivate",
                    timestamp: timestamp,
                    target_url: tab.url,
                    htmlSnapshotId: currentSnapshotId,
                    actionSequenceId: actionSequenceId,
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
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            func: () => document.documentElement.outerHTML
        }, (results) => __awaiter(void 0, void 0, void 0, function* () {
            if (results && results[0] && results[0].result) {
                const pageHtml = results[0].result;
                const timestamp = new Date().toISOString();
                const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}`;
                let result = yield chrome.storage.local.get({ htmlSnapshots: {} });
                const htmlSnapshots = result.htmlSnapshots || {};
                htmlSnapshots[currentSnapshotId] = pageHtml;
                yield chrome.storage.local.set({ htmlSnapshots });
                // Add navigation data to interactions
                actionSequenceId++;
                const data = {
                    eventType: "navigation",
                    navigationType: navigationType,
                    timestamp: timestamp,
                    target_url: details.url,
                    htmlSnapshotId: currentSnapshotId,
                    actionSequenceId,
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
            // Get userId from storage
            const userIdResult = yield chrome.storage.local.get({ userId: "" });
            const currentUserId = userIdResult.userId;
            // Get all data from storage
            const snapshots = yield chrome.storage.local.get({ htmlSnapshots: [] });
            const interact = yield chrome.storage.local.get({ interactions: [] });
            const orderDetails = yield chrome.storage.local.get({ orderDetails: [] });
            const screen = yield chrome.storage.local.get({ screenshots: [] });
            let htmlSnapshots = snapshots.htmlSnapshots || {};
            let storeInteractions = interact.interactions || [];
            let storeorderDetails = orderDetails.orderDetails || [];
            let storeScreenshots = screen.screenshots || [];
            // Combine with in-memory data
            storeInteractions = storeInteractions.concat(interactions);
            storeScreenshots = storeScreenshots.concat(screenshots);
            // Prepare the full data object
            const fullData = {
                htmlSnapshots,
                interactions: storeInteractions,
                orderDetails: storeorderDetails,
            };
            // Upload session info
            const sessionInfo = new Blob([`Session data for timestamp: ${timestamp}, user id: ${currentUserId}`], { type: 'text/plain' });
            const sessionFormData = new FormData();
            sessionFormData.append('file', sessionInfo, `${folderName}/session_info.txt`);
            console.log('uploading session info');
            yield fetch(upload_url, {
                method: 'POST',
                body: sessionFormData
            });
            // Upload interactions JSON
            const interactionsBlob = new Blob([JSON.stringify(fullData, null, 2)], { type: 'application/json' });
            const jsonFormData = new FormData();
            console.log('uploading interactions');
            jsonFormData.append('file', interactionsBlob, `${folderName}/interactions.json`);
            yield fetch(upload_url, {
                method: 'POST',
                body: jsonFormData
            });
            // Upload screenshots
            for (const [screenshotData, screenshotId] of storeScreenshots) {
                const response = yield fetch(screenshotData);
                const blob = yield response.blob();
                const formData = new FormData();
                formData.append('file', blob, `${folderName}/${screenshotId.replace(/[:.]/g, "-")}.jpg`);
                console.log('uploading screenshots');
                yield fetch(upload_url, {
                    method: 'POST',
                    body: formData
                });
            }
            // Clear cache after successful upload
            chrome.storage.local.remove(['htmlSnapshots', 'interactions', 'orderDetails', 'screenshots']);
            interactions.length = 0;
            screenshots.length = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVO0FBQ3pEO0FBQ0Esa0VBQWtFLFlBQVk7QUFDOUU7QUFDQTtBQUNBLCtEQUErRCxtQkFBbUI7QUFDbEYsOERBQThELGtCQUFrQjtBQUNoRixrRUFBa0Usa0JBQWtCO0FBQ3BGLDREQUE0RCxpQkFBaUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxVQUFVLGFBQWEsY0FBYyxNQUFNLG9CQUFvQjtBQUN4STtBQUNBLDJEQUEyRCxXQUFXO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EscUZBQXFGLDBCQUEwQjtBQUMvRztBQUNBO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVyxHQUFHLG1DQUFtQztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYmFja2dyb3VuZF90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gICAgXCJzZWxlY3RvclwiOiBcIiNuYXYtc2VhcmNoLWJhci1mb3JtXCIsXG4gICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94XCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hfaW5wdXRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cIixcbiAgICAgICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hfYnV0dG9uXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gICAge1xuICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0XCIsXG4gICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgXCJjbGFzc1wiOiBcInJlZmluZW1lbnQtdGl0bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpXCIsXG4gICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgXCJuYW1lXCI6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgIFwiY2xpY2tfc2VsZWN0b3JcIjogXCJhXCIsXG4gICAgICAgIFwiZGlyZWN0X2NoaWxkXCI6IHRydWUsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJzZWxlY3RvclwiOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiB9XSxcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCByZWNpcGVzID0gW1xuICAgIHtcbiAgICAgICAgXCJtYXRjaFwiOiBcIi9cIixcbiAgICAgICAgXCJtYXRjaF9tZXRob2RcIjogXCJ1cmxcIixcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcImh0bWxcIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7IFwic2VsZWN0b3JcIjogXCJoZWFkXCIsIFwiY2hpbGRyZW5cIjogW3sgXCJzZWxlY3RvclwiOiBcInRpdGxlXCIsIFwiYWRkX3RleHRcIjogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbbmF2XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibWF0Y2hcIjogXCIvc1wiLFxuICAgICAgICBcIm1hdGNoX21ldGhvZFwiOiBcInVybFwiLFxuICAgICAgICBcInNlbGVjdG9yXCI6IFwiaHRtbFwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHsgXCJzZWxlY3RvclwiOiBcImhlYWRcIiwgXCJjaGlsZHJlblwiOiBbeyBcInNlbGVjdG9yXCI6IFwidGl0bGVcIiwgXCJhZGRfdGV4dFwiOiB0cnVlIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3MtcmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJlZmluZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lOm5vdCg6aGFzKCNuLXRpdGxlKSk6aGFzKHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCk6aGFzKHVsIHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaSk6bm90KCNyZXZpZXdzUmVmaW5lbWVudHMpOm5vdCgjZGVwYXJ0bWVudHMpOm5vdCgjcHJpY2VSZWZpbmVtZW50cyk6bm90KCNmaWx0ZXJzKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X3NlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogcmVmaW5lbWVudF9vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjZGVwYXJ0bWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGVwYXJ0bWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImxpIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNyZXZpZXdzUmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmV2aWV3c19yZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwibGkgYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2VhcmNoX3Jlc3VsdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnNlcnRfc3BsaXRfbWFya2VyXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeVwiOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dF9zZWxlY3RvclwiOiBcInNwYW4uYS1zaXplLWJhc2UtcGx1cy5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlYXJjaC1yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZpZXdfcHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXJldmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLWljb24tYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1yYXRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcInNwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X2Zvcm1hdFwiOiBcInt9IHJldmlld3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXJhdGluZy1jb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtZGVsaXZlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcInNwYW4ucy1wYWdpbmF0aW9uLXN0cmlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIucy1wYWdpbmF0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm1hdGNoXCI6IFwiI3Byb2R1Y3RUaXRsZVwiLFxuICAgICAgICBcIm1hdGNoX3RleHRcIjogXCJcIixcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcImh0bWxcIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVcIjogXCJyZXR1cm4gISFhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVfY2FsbGJhY2tcIjogXCJyZXR1cm4gYXJndW1lbnRzWzBdXCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgeyBcInNlbGVjdG9yXCI6IFwiaGVhZFwiLCBcImNoaWxkcmVuXCI6IFt7IFwic2VsZWN0b3JcIjogXCJ0aXRsZVwiLCBcImFkZF90ZXh0XCI6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjY2VudGVyQ29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtlZXBfYXR0clwiOiBbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJyZXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcInNwYW4uYS1pY29uLWFsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNhY3JDdXN0b21lclJldmlld1RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2FwZXhfZGVza3RvcF9uZXdBY2NvcmRpb25Sb3cgI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X2Zvcm1hdFwiOiBcIlByaWNlOiB7fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3R3aXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3Qtb3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImxhYmVsLmEtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5zZWxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2FkZFRvQ2FydDpoYXMoI2J1eS1ub3ctYnV0dG9uKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYWRkX3RvX2NhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1mYWN0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1kZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2J1eS1ub3ctYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnV5X25vd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1idXktbm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlX2hvb2tcIjogYFxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLmlubmVyVGV4dFxuY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheVwiKS5pbm5lclRleHRcbmNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKVwiKSkubWFwKGEgPT4gKHtsYWJlbDogYS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuYS1mb3JtLWxhYmVsXCIpLmlubmVyVGV4dCwgdmFsdWU6IGEucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpLmlubmVyVGV4dH0pKVxuY29uc3Qgb3B0aW9uc19kaWN0ID0ge31cbmZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zX2RpY3Rbb3B0aW9uW1wibGFiZWxcIl0ucmVwbGFjZShcIjogXCIsIFwiXCIpXSA9IG9wdGlvbltcInZhbHVlXCJdXG59XG5jb25zdCBhc2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I0FTSU5cIikudmFsdWVcbmNvbnNvbGUubG9nKHt0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbn0pXG5yZXR1cm4ge3RpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2lufVxuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJtYXRjaFwiOiBcIi9hcC9zaWduaW5cIixcbiAgICAgICAgXCJtYXRjaF9tZXRob2RcIjogXCJ1cmxcIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVcIjogXCJyZXR1cm4gISFhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVfY2FsbGJhY2tcIjogXCJyZXR1cm4gYXJndW1lbnRzWzBdXCIsXG4gICAgICAgIFwic2VsZWN0b3JcIjogXCJodG1sXCIsXG4gICAgfSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCA9PT0gMCkgeyAvLyBPbmx5IGluamVjdCBpbnRvIHRoZSBtYWluIGZyYW1lXG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbiAgICAgICAgICAgIGZpbGVzOiBbXCJqcy9pbmplY3RlZC5qc1wiXSxcbiAgICAgICAgICAgIHdvcmxkOiBcIk1BSU5cIiAvLyBFbnN1cmVzIHRoZSBzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGUgbWFpbiB3b3JsZFxuICAgICAgICB9KTtcbiAgICB9XG59LCB7IHVybDogW3sgdXJsTWF0Y2hlczogXCIuKlwiIH1dIH0pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuL3JlY2lwZSc7XG5sZXQgdXBsb2FkX3VybCA9IFwiaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkXCI7XG5sZXQgaW50ZXJhY3Rpb25zID0gW107XG5jb25zdCBpbnRlcmFjdGlvbnNMaW1pdCA9IDEwO1xubGV0IHNjcmVlbnNob3RzID0gW107XG5jb25zdCBzY3JlZW5zaG90TGltaXQgPSAxMDtcbmxldCBhY3Rpb25TZXF1ZW5jZUlkID0gMDtcbmxldCB1cGxvYWRUaW1lciA9IG51bGw7XG5sZXQgdXNlcklkID0gXCJcIjtcbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5ID0ge307XG5mdW5jdGlvbiBhbmFseXplTmF2aWdhdGlvbih0YWJJZCwgdXJsKSB7XG4gICAgaWYgKCF0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0pIHtcbiAgICAgICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGhpc3RvcnkgPSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG4gICAgaWYgKCFoaXN0b3J5LmN1cnJlbnRVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gJ25ldyc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmN1cnJlbnRVcmwgPT09IHVybCkge1xuICAgICAgICByZXR1cm4gJ3JlbG9hZCc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggPiAwICYmXG4gICAgICAgIGhpc3RvcnkuYmFja1N0YWNrW2hpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmJhY2tTdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuICdiYWNrJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuZm9yd2FyZFN0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2ZvcndhcmQnO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sgPSBbXTtcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgcmV0dXJuICduZXcnO1xufVxuLy8gQWRkIG5ldyBmdW5jdGlvbiB0byBoYW5kbGUgc2NyZWVuc2hvdCBzYXZpbmdcbmZ1bmN0aW9uIHNhdmVTY3JlZW5zaG90KHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLnB1c2goW3NjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWRdKTtcbiAgICAgICAgICAgIGlmIChzY3JlZW5zaG90cy5sZW5ndGggPiBzY3JlZW5zaG90TGltaXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zY3JlZW5zaG90cyB8fCBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZVNjcmVlbnNob3RzID0gcmVzdWx0LmNvbmNhdChzY3JlZW5zaG90cyk7XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzY3JlZW5zaG90czogc3RvcmVTY3JlZW5zaG90cyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NhdmVEYXRhJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlRGF0YSAnLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhLmFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0aW9ucy5sZW5ndGggPiBpbnRlcmFjdGlvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gcmVzdWx0LmNvbmNhdChpbnRlcmFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhcHR1cmUgc2NyZWVuc2hvdCBvbiBkZW1hbmRcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NhcHR1cmVTY3JlZW5zaG90Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgc2NyZWVuc2hvdCByZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0geWllbGQgc2F2ZVNjcmVlbnNob3Qoc2NyZWVuc2hvdERhdGFVcmwsIG1lc3NhZ2Uuc2NyZWVuc2hvdElkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcywgbWVzc2FnZTogc3VjY2VzcyA/IHVuZGVmaW5lZCA6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG93bmxvYWQgZGF0YSBvbiB1c2VyIHJlcXVlc3RcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2Rvd25sb2FkRGF0YScpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWREYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCB1cGxvYWREYXRhVG9TZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NsZWFyTWVtb3J5Q2FjaGUnKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdHMgPSBbXTtcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkID0gMDtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0UmVjaXBlJyAmJiAoKF9hID0gc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkKSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdFJlY2lwZShzZW5kZXIudGFiLmlkLCBtZXNzYWdlLnVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlY2lwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyByZWNpcGU6IHJlY2lwZSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZSB0aGF0IHNlbmRSZXNwb25zZSB3aWxsIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIoKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIG1lc3NhZ2U6JywgZXJyb3IpO1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgfSkpKCk7XG4gICAgcmV0dXJuIHRydWU7IC8vIEtlZXBzIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VzXG59KTtcbi8vIENhcHR1cmUgdGhlIHNjcmVlbnNob3QgaW4gdGhlIGN1cnJlbnQgdGFiXG5mdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhhc2ggdmFsdWUgYmVmb3JlIHJldHVybjpcIiwgaGFzaCk7XG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoYWN0aXZlSW5mbykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFiSWQgPSBhY3RpdmVJbmZvLnRhYklkO1xuICAgICAgICBjb25zdCB0YWIgPSB5aWVsZCBjaHJvbWUudGFicy5nZXQodGFiSWQpO1xuICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgU3dpdGNoZWQgdG8gdGFiICR7dGFiSWR9IHdpdGggVVJMOiAke3RhYi51cmx9YCk7XG4gICAgICAgIGlmICh0YWIudXJsICYmIHRhYi51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKHRhYi51cmwpfV8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5odG1sO1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiB7fSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90c1tjdXJyZW50U25hcHNob3RJZF0gPSBodG1sQ29udGVudDtcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IFwidGFiQWN0aXZhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF91cmw6IHRhYi51cmwsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogYWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGlvbnMubGVuZ3RoID4gaW50ZXJhY3Rpb25zTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IHJlc3VsdC5jb25jYXQoaW50ZXJhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHRhYi53aW5kb3dJZCwgeyBmb3JtYXQ6ICdqcGVnJywgcXVhbGl0eTogMjUgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgICAgICB5aWVsZCBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdGFiIGFjdGl2YXRlIGhhbmRsZXI6JywgZXJyb3IpO1xuICAgIH1cbn0pKTtcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSh0YWJJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lO1xuICAgICAgICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpZiAobWF0Y2hNZXRob2QgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFt7IHJlc3VsdDogaGFzTWF0Y2ggfV0gPSB5aWVsZCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jOiAoc2VsZWN0b3IsIG1hdGNoVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50ICYmICghbWF0Y2hUZXh0IHx8ICgoX2IgPSAoX2EgPSBlbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaFRleHQudG9Mb3dlckNhc2UoKSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW3JlY2lwZS5tYXRjaCwgcmVjaXBlLm1hdGNoX3RleHQgfHwgXCJcIl1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gXCJ1cmxcIiAmJiByZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YCk7XG4gICAgfSk7XG59XG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCAhPT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKCd3ZWJOYXZpZ2F0aW9uIG9uQ29tbWl0dGVkIGV2ZW50IHRyaWdnZXJlZDonLCBkZXRhaWxzKTtcbiAgICBpZiAoZGV0YWlscy51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSkge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YCk7XG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbiAgICAgICAgICAgIGZ1bmM6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbiAgICAgICAgfSwgKHJlc3VsdHMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0c1swXSAmJiByZXN1bHRzWzBdLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VIdG1sID0gcmVzdWx0c1swXS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IHt9IH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IHBhZ2VIdG1sO1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIG5hdmlnYXRpb24gZGF0YSB0byBpbnRlcmFjdGlvbnNcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblR5cGU6IG5hdmlnYXRpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X3VybDogZGV0YWlscy51cmwsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcmFjdGlvbnMubGVuZ3RoID4gaW50ZXJhY3Rpb25zTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IHJlc3VsdC5jb25jYXQoaW50ZXJhY3Rpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFkZCBzY3JlZW5zaG90XG4gICAgICAgICAgICAgICAgY29uc3QgdGFiID0geWllbGQgY2hyb21lLnRhYnMuZ2V0KGRldGFpbHMudGFiSWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAyNVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAgICAgeWllbGQgc2F2ZVNjcmVlbnNob3Qoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG59KSk7XG4vLyBBZGQgY2xlYW51cCB3aGVuIHRhYiBpcyBjbG9zZWRcbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgICBkZWxldGUgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdO1xufSk7XG4vLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBoYW5kbGUgZGF0YSB1cGxvYWRcbmZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgREFUQS9TRVNTSU9OXyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBHZXQgdXNlcklkIGZyb20gc3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgdXNlcklkUmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgdXNlcklkOiBcIlwiIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWQ7XG4gICAgICAgICAgICAvLyBHZXQgYWxsIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW4gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgLy8gQ29tYmluZSB3aXRoIGluLW1lbW9yeSBkYXRhXG4gICAgICAgICAgICBzdG9yZUludGVyYWN0aW9ucyA9IHN0b3JlSW50ZXJhY3Rpb25zLmNvbmNhdChpbnRlcmFjdGlvbnMpO1xuICAgICAgICAgICAgc3RvcmVTY3JlZW5zaG90cyA9IHN0b3JlU2NyZWVuc2hvdHMuY29uY2F0KHNjcmVlbnNob3RzKTtcbiAgICAgICAgICAgIC8vIFByZXBhcmUgdGhlIGZ1bGwgZGF0YSBvYmplY3RcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdHMsXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICBvcmRlckRldGFpbHM6IHN0b3Jlb3JkZXJEZXRhaWxzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBzZXNzaW9uIGluZm9cbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25JbmZvID0gbmV3IEJsb2IoW2BTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9LCB1c2VyIGlkOiAke2N1cnJlbnRVc2VySWR9YF0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBzZXNzaW9uRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgc2Vzc2lvbkluZm8sIGAke2ZvbGRlck5hbWV9L3Nlc3Npb25faW5mby50eHRgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2Vzc2lvbiBpbmZvJyk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMildLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKTtcbiAgICAgICAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBpbnRlcmFjdGlvbnNCbG9iLCBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMuanNvbmApO1xuICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHNjcmVlbnNob3REYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYmxvYiwgYCR7Zm9sZGVyTmFtZX0vJHtzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCBcIi1cIil9LmpwZ2ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYXIgY2FjaGUgYWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWRcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbJ2h0bWxTbmFwc2hvdHMnLCAnaW50ZXJhY3Rpb25zJywgJ29yZGVyRGV0YWlscycsICdzY3JlZW5zaG90cyddKTtcbiAgICAgICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBTdGFydCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdGFydFBlcmlvZGljVXBsb2FkKCkge1xuICAgIGlmICghdXBsb2FkVGltZXIpIHtcbiAgICAgICAgdXBsb2FkVGltZXIgPSBzZXRJbnRlcnZhbCh1cGxvYWREYXRhVG9TZXJ2ZXIsIDYwMDAwKTsgLy8gNjAgc2Vjb25kc1xuICAgIH1cbn1cbi8vIFN0b3AgdGhlIHBlcmlvZGljIHVwbG9hZCB0aW1lclxuZnVuY3Rpb24gc3RvcFBlcmlvZGljVXBsb2FkKCkge1xuICAgIGlmICh1cGxvYWRUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHVwbG9hZFRpbWVyKTtcbiAgICAgICAgdXBsb2FkVGltZXIgPSBudWxsO1xuICAgIH1cbn1cbi8vIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==