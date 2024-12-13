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
            const sessionInfo = new Blob([`Session data for timestamp: ${timestamp}, user id: ${currentUserId} \n order details: \n ${JSON.stringify(storeorderDetails)}`], { type: 'text/plain' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVO0FBQ3pEO0FBQ0Esa0VBQWtFLFlBQVk7QUFDOUU7QUFDQTtBQUNBLCtEQUErRCxtQkFBbUI7QUFDbEYsOERBQThELGtCQUFrQjtBQUNoRixrRUFBa0Usa0JBQWtCO0FBQ3BGLDREQUE0RCxpQkFBaUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxVQUFVLGFBQWEsZUFBZSx1QkFBdUIsa0NBQWtDLE1BQU0sb0JBQW9CO0FBQ2xNO0FBQ0EsMkRBQTJELFdBQVc7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxRkFBcUYsMEJBQTBCO0FBQy9HO0FBQ0E7QUFDQSw2REFBNkQsV0FBVztBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXLEdBQUcsbUNBQW1DO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGUudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kX3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgICBcInNlbGVjdG9yXCI6IFwiI25hdi1zZWFyY2gtYmFyLWZvcm1cIixcbiAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImlucHV0I3R3b3RhYnNlYXJjaHRleHRib3hcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInNlYXJjaF9pbnB1dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvblwiLFxuICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInNlYXJjaF9idXR0b25cIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAgICB7XG4gICAgICAgIFwic2VsZWN0b3JcIjogXCJzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHRcIixcbiAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICBcImNsYXNzXCI6IFwicmVmaW5lbWVudC10aXRsZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNlbGVjdG9yXCI6IFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGlcIixcbiAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgXCJjbGlja19zZWxlY3RvclwiOiBcImFcIixcbiAgICAgICAgXCJkaXJlY3RfY2hpbGRcIjogdHJ1ZSxcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbeyBcInNlbGVjdG9yXCI6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiIH1dLFxuICAgIH0sXG5dO1xuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gICAge1xuICAgICAgICBcIm1hdGNoXCI6IFwiL1wiLFxuICAgICAgICBcIm1hdGNoX21ldGhvZFwiOiBcInVybFwiLFxuICAgICAgICBcInNlbGVjdG9yXCI6IFwiaHRtbFwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHsgXCJzZWxlY3RvclwiOiBcImhlYWRcIiwgXCJjaGlsZHJlblwiOiBbeyBcInNlbGVjdG9yXCI6IFwidGl0bGVcIiwgXCJhZGRfdGV4dFwiOiB0cnVlIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtuYXZdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJtYXRjaFwiOiBcIi9zXCIsXG4gICAgICAgIFwibWF0Y2hfbWV0aG9kXCI6IFwidXJsXCIsXG4gICAgICAgIFwic2VsZWN0b3JcIjogXCJodG1sXCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgeyBcInNlbGVjdG9yXCI6IFwiaGVhZFwiLCBcImNoaWxkcmVuXCI6IFt7IFwic2VsZWN0b3JcIjogXCJ0aXRsZVwiLCBcImFkZF90ZXh0XCI6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjcy1yZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRfc2VsZWN0b3JcIjogXCJzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiByZWZpbmVtZW50X29wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNkZXBhcnRtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJkZXBhcnRtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwibGkgYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3Jldmlld3NSZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJyZXZpZXdzX3JlZmluZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJsaSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hfcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluc2VydF9zcGxpdF9tYXJrZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5XCI6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X3NlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS1wbHVzLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwic2VhcmNoLXJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmlld19wcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtcmV2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJzcGFuLmEtaWNvbi1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXJhdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRfZm9ybWF0XCI6IFwie30gcmV2aWV3c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtcmF0aW5nLWNvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1kZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5zLXBhZ2luYXRpb24tc3RyaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInBhZ2luYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIi5zLXBhZ2luYXRpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZyb21fdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibWF0Y2hcIjogXCIjcHJvZHVjdFRpdGxlXCIsXG4gICAgICAgIFwibWF0Y2hfdGV4dFwiOiBcIlwiLFxuICAgICAgICBcInNlbGVjdG9yXCI6IFwiaHRtbFwiLFxuICAgICAgICBcInRlcm1pbmF0ZVwiOiBcInJldHVybiAhIWFyZ3VtZW50c1swXVwiLFxuICAgICAgICBcInRlcm1pbmF0ZV9jYWxsYmFja1wiOiBcInJldHVybiBhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7IFwic2VsZWN0b3JcIjogXCJoZWFkXCIsIFwiY2hpbGRyZW5cIjogW3sgXCJzZWxlY3RvclwiOiBcInRpdGxlXCIsIFwiYWRkX3RleHRcIjogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNjZW50ZXJDb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiN0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2VlcF9hdHRyXCI6IFtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2F2ZXJhZ2VDdXN0b21lclJldmlld3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInJldmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLWljb24tYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2FjckN1c3RvbWVyUmV2aWV3VGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjYXBleF9kZXNrdG9wX25ld0FjY29yZGlvblJvdyAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRfZm9ybWF0XCI6IFwiUHJpY2U6IHt9XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXByaWNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjdHdpc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1vcHRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwibGFiZWwuYS1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJzcGFuLnNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjYWRkVG9DYXJ0OmhhcygjYnV5LW5vdy1idXR0b24pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhZGRfdG9fY2FydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWZhY3RzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWRlbGl2ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjYnV5LW5vdy1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJidXlfbm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LWJ1eS1ub3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmVfaG9va1wiOiBgXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikuaW5uZXJUZXh0XG5jb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5XCIpLmlubmVyVGV4dFxuY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pXCIpKS5tYXAoYSA9PiAoe2xhYmVsOiBhLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5hLWZvcm0tbGFiZWxcIikuaW5uZXJUZXh0LCB2YWx1ZTogYS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5zZWxlY3Rpb25cIikuaW5uZXJUZXh0fSkpXG5jb25zdCBvcHRpb25zX2RpY3QgPSB7fVxuZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgIG9wdGlvbnNfZGljdFtvcHRpb25bXCJsYWJlbFwiXS5yZXBsYWNlKFwiOiBcIiwgXCJcIildID0gb3B0aW9uW1widmFsdWVcIl1cbn1cbmNvbnN0IGFzaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjQVNJTlwiKS52YWx1ZVxuY29uc29sZS5sb2coe3RpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2lufSlcbnJldHVybiB7dGl0bGUsIHByaWNlLCBvcHRpb25zOiBvcHRpb25zX2RpY3QsIGFzaW59XG5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm1hdGNoXCI6IFwiL2FwL3NpZ25pblwiLFxuICAgICAgICBcIm1hdGNoX21ldGhvZFwiOiBcInVybFwiLFxuICAgICAgICBcInRlcm1pbmF0ZVwiOiBcInJldHVybiAhIWFyZ3VtZW50c1swXVwiLFxuICAgICAgICBcInRlcm1pbmF0ZV9jYWxsYmFja1wiOiBcInJldHVybiBhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcImh0bWxcIixcbiAgICB9LFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21taXR0ZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IHtcbiAgICBpZiAoZGV0YWlscy5mcmFtZUlkID09PSAwKSB7IC8vIE9ubHkgaW5qZWN0IGludG8gdGhlIG1haW4gZnJhbWVcbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogZGV0YWlscy50YWJJZCB9LFxuICAgICAgICAgICAgZmlsZXM6IFtcImpzL2luamVjdGVkLmpzXCJdLFxuICAgICAgICAgICAgd29ybGQ6IFwiTUFJTlwiIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4gICAgICAgIH0pO1xuICAgIH1cbn0sIHsgdXJsOiBbeyB1cmxNYXRjaGVzOiBcIi4qXCIgfV0gfSk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgcmVjaXBlcyB9IGZyb20gJy4vcmVjaXBlJztcbmxldCB1cGxvYWRfdXJsID0gXCJodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWRcIjtcbmxldCBpbnRlcmFjdGlvbnMgPSBbXTtcbmNvbnN0IGludGVyYWN0aW9uc0xpbWl0ID0gMTA7XG5sZXQgc2NyZWVuc2hvdHMgPSBbXTtcbmNvbnN0IHNjcmVlbnNob3RMaW1pdCA9IDEwO1xubGV0IGFjdGlvblNlcXVlbmNlSWQgPSAwO1xubGV0IHVwbG9hZFRpbWVyID0gbnVsbDtcbmxldCB1c2VySWQgPSBcIlwiO1xuY29uc3QgdGFiTmF2aWdhdGlvbkhpc3RvcnkgPSB7fTtcbmZ1bmN0aW9uIGFuYWx5emVOYXZpZ2F0aW9uKHRhYklkLCB1cmwpIHtcbiAgICBpZiAoIXRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXSkge1xuICAgICAgICB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0gPSB7XG4gICAgICAgICAgICBiYWNrU3RhY2s6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZFN0YWNrOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRVcmw6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgaGlzdG9yeSA9IHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXTtcbiAgICBpZiAoIWhpc3RvcnkuY3VycmVudFVybCkge1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiAnbmV3JztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuY3VycmVudFVybCA9PT0gdXJsKSB7XG4gICAgICAgIHJldHVybiAncmVsb2FkJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgaGlzdG9yeS5iYWNrU3RhY2tbaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmZvcndhcmRTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuYmFja1N0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2JhY2snO1xuICAgIH1cbiAgICBpZiAoaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgICBoaXN0b3J5LmZvcndhcmRTdGFja1toaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsKSB7XG4gICAgICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5mb3J3YXJkU3RhY2sucG9wKCk7XG4gICAgICAgIHJldHVybiAnZm9yd2FyZCc7XG4gICAgfVxuICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFjayA9IFtdO1xuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IHVybDtcbiAgICByZXR1cm4gJ25ldyc7XG59XG4vLyBBZGQgbmV3IGZ1bmN0aW9uIHRvIGhhbmRsZSBzY3JlZW5zaG90IHNhdmluZ1xuZnVuY3Rpb24gc2F2ZVNjcmVlbnNob3Qoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgICAgc2NyZWVuc2hvdHMucHVzaChbc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZF0pO1xuICAgICAgICAgICAgaWYgKHNjcmVlbnNob3RzLmxlbmd0aCA+IHNjcmVlbnNob3RMaW1pdCkge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlU2NyZWVuc2hvdHMgPSByZXN1bHQuY29uY2F0KHNjcmVlbnNob3RzKTtcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNjcmVlbnNob3RzOiBzdG9yZVNjcmVlbnNob3RzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2F2ZURhdGEnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVEYXRhICcsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUpO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGEuYWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2gobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJhY3Rpb25zLmxlbmd0aCA+IGludGVyYWN0aW9uc0xpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSByZXN1bHQuY29uY2F0KGludGVyYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBzY3JlZW5zaG90IG9uIGRlbWFuZFxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2FwdHVyZVNjcmVlbnNob3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBzY3JlZW5zaG90IHJlcXVlc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgbWVzc2FnZS5zY3JlZW5zaG90SWQpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzLCBtZXNzYWdlOiBzdWNjZXNzID8gdW5kZWZpbmVkIDogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEb3dubG9hZCBkYXRhIG9uIHVzZXIgcmVxdWVzdFxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZG93bmxvYWREYXRhJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZERhdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHlpZWxkIHVwbG9hZERhdGFUb1NlcnZlcigpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgZG93bmxvYWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2xlYXJNZW1vcnlDYWNoZScpIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90cyA9IFtdO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQgPSAwO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRSZWNpcGUnICYmICgoX2EgPSBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVjaXBlKHNlbmRlci50YWIuaWQsIG1lc3NhZ2UudXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVjaXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHJlY2lwZTogcmVjaXBlIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEluZGljYXRlIHRoYXQgc2VuZFJlc3BvbnNlIHdpbGwgYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5jbGVhcigpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgbWVzc2FnZTonLCBlcnJvcik7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9KSkoKTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcHMgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZXNcbn0pO1xuLy8gQ2FwdHVyZSB0aGUgc2NyZWVuc2hvdCBpbiB0aGUgY3VycmVudCB0YWJcbmZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBbdGFiXSA9IHlpZWxkIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHsgZm9ybWF0OiAnanBlZycsIHF1YWxpdHk6IDI1IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOlwiLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuLy8gbGlzdGVuIHRvIHN3aXRjaGVzIGJldHdlZW4gYWN0aXZhdGVkIHRhYnNcbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKChhY3RpdmVJbmZvKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJJZCA9IGFjdGl2ZUluZm8udGFiSWQ7XG4gICAgICAgIGNvbnN0IHRhYiA9IHlpZWxkIGNocm9tZS50YWJzLmdldCh0YWJJZCk7XG4gICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHRhYiB3aXRoIElEOiAke3RhYklkfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBTd2l0Y2hlZCB0byB0YWIgJHt0YWJJZH0gd2l0aCBVUkw6ICR7dGFiLnVybH1gKTtcbiAgICAgICAgaWYgKHRhYi51cmwgJiYgdGFiLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUodGFiLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IHt9IH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGh0bWxDb250ZW50O1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSk7XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZTogXCJ0YWJBY3RpdmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0X3VybDogdGFiLnVybCxcbiAgICAgICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkOiBhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0aW9ucy5sZW5ndGggPiBpbnRlcmFjdGlvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gcmVzdWx0LmNvbmNhdChpbnRlcmFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgICAgIHlpZWxkIHNhdmVTY3JlZW5zaG90KHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0YWIgYWN0aXZhdGUgaGFuZGxlcjonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHRhYklkLCB1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgICAgIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCBcInRleHRcIjtcbiAgICAgICAgICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3sgcmVzdWx0OiBoYXNNYXRjaCB9XSA9IHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmM6IChzZWxlY3RvciwgbWF0Y2hUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgKCFtYXRjaFRleHQgfHwgKChfYiA9IChfYSA9IGVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG1hdGNoVGV4dC50b0xvd2VyQ2FzZSgpKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbcmVjaXBlLm1hdGNoLCByZWNpcGUubWF0Y2hfdGV4dCB8fCBcIlwiXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hlY2tpbmcgdGV4dCBtYXRjaDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoTWV0aG9kID09PSBcInVybFwiICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNpcGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKTtcbiAgICB9KTtcbn1cbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZGV0YWlscy5mcmFtZUlkICE9PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc29sZS5sb2coJ3dlYk5hdmlnYXRpb24gb25Db21taXR0ZWQgZXZlbnQgdHJpZ2dlcmVkOicsIGRldGFpbHMpO1xuICAgIGlmIChkZXRhaWxzLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpKSB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25UeXBlID0gYW5hbHl6ZU5hdmlnYXRpb24oZGV0YWlscy50YWJJZCwgZGV0YWlscy51cmwpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTmF2aWdhdGlvbiB0eXBlOiAke25hdmlnYXRpb25UeXBlfSBmb3IgdGFiICR7ZGV0YWlscy50YWJJZH0gdG8gJHtkZXRhaWxzLnVybH1gKTtcbiAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZDogZGV0YWlscy50YWJJZCB9LFxuICAgICAgICAgICAgZnVuYzogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICB9LCAocmVzdWx0cykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMF0ucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZUh0bWwgPSByZXN1bHRzWzBdLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKGRldGFpbHMudXJsKX1fJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czoge30gfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gcGFnZUh0bWw7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbmF2aWdhdGlvbiBkYXRhIHRvIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRfdXJsOiBkZXRhaWxzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYgKGludGVyYWN0aW9ucy5sZW5ndGggPiBpbnRlcmFjdGlvbnNMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gcmVzdWx0LmNvbmNhdChpbnRlcmFjdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWRkIHNjcmVlbnNob3RcbiAgICAgICAgICAgICAgICBjb25zdCB0YWIgPSB5aWVsZCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgIHF1YWxpdHk6IDI1XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgICAgICB5aWVsZCBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICAgIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG59KTtcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuZnVuY3Rpb24gdXBsb2FkRGF0YVRvU2VydmVyKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IGBEQVRBL1NFU1NJT05fJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgIC8vIEdldCB1c2VySWQgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCB1c2VySWRSZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6IFwiXCIgfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZDtcbiAgICAgICAgICAgIC8vIEdldCBhbGwgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90cyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3QgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbiA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNjcmVlbnNob3RzOiBbXSB9KTtcbiAgICAgICAgICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICBsZXQgc3RvcmVvcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW107XG4gICAgICAgICAgICAvLyBDb21iaW5lIHdpdGggaW4tbWVtb3J5IGRhdGFcbiAgICAgICAgICAgIHN0b3JlSW50ZXJhY3Rpb25zID0gc3RvcmVJbnRlcmFjdGlvbnMuY29uY2F0KGludGVyYWN0aW9ucyk7XG4gICAgICAgICAgICBzdG9yZVNjcmVlbnNob3RzID0gc3RvcmVTY3JlZW5zaG90cy5jb25jYXQoc2NyZWVuc2hvdHMpO1xuICAgICAgICAgICAgLy8gUHJlcGFyZSB0aGUgZnVsbCBkYXRhIG9iamVjdFxuICAgICAgICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90cyxcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zLFxuICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsczogc3RvcmVvcmRlckRldGFpbHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihbYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH0sIHVzZXIgaWQ6ICR7Y3VycmVudFVzZXJJZH0gXFxuIG9yZGVyIGRldGFpbHM6IFxcbiAke0pTT04uc3RyaW5naWZ5KHN0b3Jlb3JkZXJEZXRhaWxzKX1gXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbywgYCR7Zm9sZGVyTmFtZX0vc2Vzc2lvbl9pbmZvLnR4dGApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKTtcbiAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBzZXNzaW9uRm9ybURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVXBsb2FkIGludGVyYWN0aW9ucyBKU09OXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbnNCbG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGZ1bGxEYXRhLCBudWxsLCAyKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICAgICAgY29uc3QganNvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGludGVyYWN0aW9ucycpO1xuICAgICAgICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IsIGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9ucy5qc29uYCk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keToganNvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgICAgICAgZm9yIChjb25zdCBbc2NyZWVuc2hvdERhdGEsIHNjcmVlbnNob3RJZF0gb2Ygc3RvcmVTY3JlZW5zaG90cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goc2NyZWVuc2hvdERhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iLCBgJHtmb2xkZXJOYW1lfS8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csIFwiLVwiKX0uanBnYCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhciBjYWNoZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFsnaHRtbFNuYXBzaG90cycsICdpbnRlcmFjdGlvbnMnLCAnb3JkZXJEZXRhaWxzJywgJ3NjcmVlbnNob3RzJ10pO1xuICAgICAgICAgICAgaW50ZXJhY3Rpb25zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICBzY3JlZW5zaG90cy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgNjAwMDApOyAvLyA2MCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuLy8gc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9