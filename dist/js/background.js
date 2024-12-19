/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popup_probability: () => (/* binding */ popup_probability)
/* harmony export */ });
const popup_probability = 0.15;


/***/ }),

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
    selector: '#nav-search-bar-form',
    children: [
        {
            selector: 'input#twotabsearchtextbox',
            name: 'search_input'
        },
        {
            selector: '#nav-search-submit-button',
            clickable: true,
            name: 'search_button'
        }
    ]
};
const refinement_option = [
    {
        selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
        add_text: true,
        class: 'refinement-title'
    },
    {
        selector: 'ul:nth-of-type(1) > span.a-declarative > span > li',
        add_text: true,
        name: 'from_text',
        clickable: true,
        click_selector: 'a',
        direct_child: true,
        children: [{ selector: "input[type='checkbox']" }]
    }
];
const recipes = [
    {
        match: '/',
        match_method: 'url',
        selector: 'html',
        children: [
            { selector: 'head', children: [{ selector: 'title', add_text: true }] },
            {
                selector: 'body',
                children: [nav]
            }
        ]
    },
    {
        match: '/s',
        match_method: 'url',
        selector: 'html',
        children: [
            { selector: 'head', children: [{ selector: 'title', add_text: true }] },
            {
                selector: 'body',
                children: [
                    nav,
                    {
                        selector: '#s-refinements',
                        name: 'refinements',
                        children: [
                            {
                                selector: 'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
                                name: 'from_text',
                                text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
                                children: refinement_option
                            },
                            {
                                selector: '#departments',
                                name: 'departments',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true
                                    }
                                ]
                            },
                            {
                                selector: '#reviewsRefinements',
                                name: 'reviews_refinements',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'div.s-main-slot.s-result-list.s-search-results',
                        name: 'search_results',
                        children: [
                            {
                                insert_split_marker: true,
                                insert_split_marker_every: 4,
                                selector: 'div[data-component-type="s-search-result"]',
                                text_selector: 'span.a-size-base-plus.a-color-base.a-text-normal',
                                name: 'from_text',
                                class: 'search-result',
                                children: [
                                    {
                                        selector: "div[data-cy='title-recipe'] a",
                                        add_text: true,
                                        class: 'product-name',
                                        clickable: true,
                                        name: 'view_product'
                                    },
                                    {
                                        selector: "div[data-cy='reviews-block']",
                                        class: 'product-review',
                                        children: [
                                            {
                                                selector: 'span.a-icon-alt',
                                                add_text: true,
                                                class: 'product-rating'
                                            },
                                            {
                                                selector: 'span.a-size-base.s-underline-text',
                                                add_text: true,
                                                text_format: '{} reviews',
                                                class: 'product-rating-count'
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='price-recipe']",
                                        class: 'product-price',
                                        children: [
                                            {
                                                selector: 'a.a-link-normal > span.a-price > span.a-offscreen',
                                                add_text: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='delivery-recipe']",
                                        add_text: true,
                                        class: 'product-delivery'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'span.s-pagination-strip',
                        name: 'pagination',
                        children: [
                            {
                                selector: '.s-pagination-item',
                                add_text: true,
                                name: 'from_text',
                                clickable: true
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '#productTitle',
        match_text: '',
        selector: 'html',
        terminate: 'return !!arguments[0]',
        terminate_callback: 'return arguments[0]',
        children: [
            { selector: 'head', children: [{ selector: 'title', add_text: true }] },
            {
                selector: 'body',
                children: [
                    nav,
                    {
                        selector: '#centerCol',
                        class: 'product-card',
                        children: [
                            {
                                selector: '#title',
                                add_text: true,
                                keep_attr: ['id']
                            },
                            {
                                selector: '#averageCustomerReviews',
                                class: 'review',
                                children: [
                                    {
                                        selector: 'span.a-icon-alt',
                                        add_text: true
                                    },
                                    {
                                        selector: '#acrCustomerReviewText',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#apex_desktop_newAccordionRow #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                                add_text: true,
                                text_format: 'Price: {}',
                                class: 'product-price'
                            },
                            {
                                selector: '#twister',
                                class: 'product-options',
                                children: [
                                    {
                                        selector: 'div.a-row:has(label.a-form-label):has(span.selection)',
                                        children: [
                                            {
                                                selector: 'label.a-form-label',
                                                add_text: true
                                            },
                                            {
                                                selector: 'span.selection',
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: '#addToCart:has(#buy-now-button)',
                        name: 'add_to_cart',
                        children: [
                            {
                                selector: '#productFactsDesktopExpander',
                                add_text: true,
                                class: 'product-facts'
                            },
                            {
                                selector: 'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
                                add_text: true,
                                class: 'product-delivery'
                            },
                            {
                                selector: '#buy-now-button',
                                add_text: true,
                                clickable: true,
                                name: 'buy_now',
                                class: 'product-buy-now',
                                before_hook: `
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
`
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/ap/signin',
        match_method: 'url',
        terminate: 'return !!arguments[0]',
        terminate_callback: 'return arguments[0]',
        selector: 'html'
    }
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
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
// chrome.webNavigation.onCommitted.addListener(
//   (details) => {
//     if (details.frameId === 0) {
//       // Only inject into the main frame
//       chrome.scripting.executeScript({
//         target: { tabId: details.tabId },
//         files: ['js/injected.js'],
//         world: 'MAIN' // Ensures the script is injected into the main world
//       })
//     }
//   },
//   { url: [{ urlMatches: '.*amazon\\.com.*' }, { urlMatches: 'file://.*' }] }
// )
// chrome.tabs.onCreated.addListener((tab) => {
//   if (tab.url.includes('amazon.com') || tab.url.includes('file')) {
//       chrome.scripting.executeScript({
//         target: { tabId: details.tabId },
//         files: ['js/injected.js'],
//         world: 'MAIN' // Ensures the script is injected into the main world
//       })
//   }
// })
// chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
//   if (changeInfo.status === 'loading' && (tab.url.includes('amazon.com') || tab.url.includes('file'))) {
//     chrome.scripting.executeScript({
//       target: { tabId: tabId },
//       files: ['js/injected.js'],
//       world: 'MAIN' // Ensures the script is injected into the main world
//     })
//   }
// })
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

let upload_url = 'http://userdatacollect.hailab.io/upload';
let interactions = [];
const interactionsLimit = 100;
let screenshots = [];
let reasonsAnnotation = [];
const reasonsLimit = 100;
const screenshotLimit = 100;
let actionSequenceId = 0;
let uploadTimer = null;
let userId = '';

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
    if (history.backStack.length > 0 && history.backStack[history.backStack.length - 1] === url) {
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
                return 'Why did you choose to buy this product immediately, and what convinced you to skip further exploration of other options? Why do you like this particular product?';
            }
            else if ((_a = data.target.className) === null || _a === void 0 ? void 0 : _a.includes('sc-product-link')) {
                return 'What made you click on this product, and what specific aspects attracted your attention compared to other search results?';
            }
            else if (data.target.id === 'add-to-cart-button') {
                return 'Why did you decide to add this item to your cart, and are you planning to buy it now or later? What convinced you that this item was the right choice for your needs?';
            }
            else {
                return 'What was your reason for clicking on this element?';
            }
        case 'scroll':
            return 'What are you doing while scrolling—are you browsing search results, looking at reviews, or something else, and what are you hoping to find?';
        case 'input':
            return 'What are you searching for, and how did you decide on the search terms you used? Are you looking for a specific product, brand, or feature?';
        case 'navigation':
            if (data.navigationType === 'back') {
                return 'Why did you decide to go back to the previous page, and what were you hoping to revisit or reconsider?';
            }
            else if (data.navigationType === 'forward') {
                return 'Why did you decide to return to this page after previously navigating away, and what new or unresolved information are you looking for now?';
            }
            return `What is the reason for this ${data.navigationType} navigation?`;
        case 'tabActivate':
            return `Why did you switch to this tab? Do you have specific task or information in mind?`;
        default:
            return `What is the reason for the ${eventType} action?`;
    }
}
// Add new function to handle screenshot saving
function saveScreenshot_1(screenshotDataUrl, screenshotId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (screenshotDataUrl) {
            // Get existing screenshots from storage
            let result = yield chrome.storage.local.get({ screenshots: [] });
            let storeScreenshots = result.screenshots || [];
            // Add new screenshot
            storeScreenshots.push([screenshotDataUrl, screenshotId]);
            // Save back to storage
            yield chrome.storage.local.set({ screenshots: storeScreenshots });
            return true;
        }
        return false;
    });
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    ;
    (() => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (message.action === 'saveData') {
            try {
                const saveData = () => __awaiter(void 0, void 0, void 0, function* () {
                    console.log('saveData ', message.data.eventType);
                    actionSequenceId++;
                    console.log(actionSequenceId);
                    message.data.actionSequenceId = actionSequenceId;
                    // 直接存储到 chrome.storage.local
                    let result = yield chrome.storage.local.get({ interactions: [] });
                    result = result.interactions || [];
                    result.push(message.data);
                    yield chrome.storage.local.set({ interactions: result });
                });
                // popup
                // await sendPopup(sender.tab?.id, message.data.timestamp, message.data.eventType, actionSequenceId)
                yield Promise.all([
                    saveData(),
                    sendPopup((_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id, message.data.timestamp, message.data.eventType, message.data)
                ]);
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
                    const success = yield saveScreenshot_1(screenshotDataUrl, message.screenshotId);
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
                const success = yield downloadDataLocally();
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
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    console.log('Hash value before return:', hash);
    return hash.toString();
}
const saveHTML = (htmlContent, currentSnapshotId) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield chrome.storage.local.get({ htmlSnapshots: {} });
    const htmlSnapshots = result.htmlSnapshots || {};
    htmlSnapshots[currentSnapshotId] = htmlContent;
    yield chrome.storage.local.set({ htmlSnapshots });
});
const saveInteraction = (eventType, timestamp, target_url, htmlSnapshotId, currentactionSequenceId) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        eventType,
        timestamp,
        target_url,
        htmlSnapshotId,
        actionSequenceId: currentactionSequenceId
    };
    let interactions = yield chrome.storage.local.get({ interactions: [] });
    let storeInteractions = interactions.interactions || [];
    storeInteractions.push(data);
    yield chrome.storage.local.set({ interactions: storeInteractions });
});
const saveScreenshot = (windowId, timestamp) => __awaiter(void 0, void 0, void 0, function* () {
    const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(windowId, {
        format: 'jpeg',
        quality: 25
    });
    const screenshotId = `screenshot_${timestamp}`;
    yield saveScreenshot_1(screenshotDataUrl, screenshotId);
});
const sendPopup = (tabId, timestamp, eventType, currentactionSequenceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const question = getCustomQuestion(eventType, data);
    if (Math.random() < _config__WEBPACK_IMPORTED_MODULE_1__.popup_probability && tabId) {
        try {
            const reason = yield chrome.tabs.sendMessage(tabId, {
                action: 'show_popup',
                question: question
            });
            if (reason && reason.input !== null) {
                const newitem = {
                    actionSequenceId: currentactionSequenceId,
                    timestamp: timestamp,
                    eventType: eventType,
                    reason: reason
                };
                let result = yield chrome.storage.local.get({ reasonsAnnotation: [] });
                let storeReasonsAnnotation = result.reasonsAnnotation || [];
                // Add new reason
                storeReasonsAnnotation.push(newitem);
                // Save back to storage
                yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation });
            }
        }
        catch (error) {
            console.error('Error popup:', error);
        }
    }
});
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
        if (tab.url && (tab.url.includes('amazon.com') || tab.url.includes('file'))) {
            const timestamp = new Date().toISOString();
            const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}`;
            chrome.tabs.sendMessage(tabId, { action: 'getHTML' }, (response) => __awaiter(void 0, void 0, void 0, function* () {
                const htmlContent = response === null || response === void 0 ? void 0 : response.html;
                // await saveHTML(htmlContent, currentSnapshotId)
                // await saveInteraction('tabActivate', timestamp, tab.url, currentSnapshotId, actionSequenceId)
                // await saveScreenshot(tab.windowId, timestamp)
                actionSequenceId++;
                const currentactionSequenceId = actionSequenceId;
                yield Promise.all([
                    saveHTML(htmlContent, currentSnapshotId),
                    saveInteraction('tabActivate', timestamp, tab.url, currentSnapshotId, currentactionSequenceId),
                    saveScreenshot(tab.windowId, timestamp),
                    sendPopup(tabId, timestamp, 'tabActivate', currentactionSequenceId, {})
                ]);
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
            const matchMethod = recipe.match_method || 'text';
            if (matchMethod === 'text') {
                try {
                    // Execute script in tab to check for matching element
                    const [{ result: hasMatch }] = yield chrome.scripting.executeScript({
                        target: { tabId },
                        func: (selector, matchText) => {
                            var _a, _b;
                            const element = document.querySelector(selector);
                            return (element &&
                                (!matchText ||
                                    ((_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(matchText.toLowerCase())) !== null && _b !== void 0 ? _b : false)));
                        },
                        args: [recipe.match, recipe.match_text || '']
                    });
                    if (hasMatch) {
                        return recipe;
                    }
                }
                catch (error) {
                    console.error('Error checking text match:', error);
                }
            }
            else if (matchMethod === 'url' && recipe.match === path) {
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
    if (details.url.includes('amazon.com') || details.url.includes('file')) {
        const navigationType = analyzeNavigation(details.tabId, details.url);
        console.log(`Navigation type: ${navigationType} for tab ${details.tabId} to ${details.url}`);
        const timestamp = new Date().toISOString();
        chrome.tabs.sendMessage(details.tabId, { action: 'getHTML' }, (response) => __awaiter(void 0, void 0, void 0, function* () {
            const htmlContent = response === null || response === void 0 ? void 0 : response.html;
            const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}`;
            // await saveHTML(htmlContent, currentSnapshotId)
            // await saveInteraction('navigation', timestamp, details.url, currentSnapshotId)
            // await saveScreenshot((await chrome.tabs.get(details.tabId)).windowId, timestamp)
            actionSequenceId++;
            const currentactionSequenceId = actionSequenceId;
            yield Promise.all([
                saveHTML(htmlContent, currentSnapshotId),
                saveInteraction('navigation', timestamp, details.url, currentSnapshotId, currentactionSequenceId),
                saveScreenshot((yield chrome.tabs.get(details.tabId)).windowId, timestamp)
            ]);
            if (navigationType !== 'new' && navigationType !== 'reload') {
                console.log('send message to popup navigation');
                yield sendPopup(details.tabId, timestamp, 'navigation', currentactionSequenceId, {
                    navigationType: navigationType
                });
            }
        }));
    }
}));
// Add cleanup when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
    delete tabNavigationHistory[tabId];
});
// Add this function to handle data upload
function downloadDataLocally() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const folderName = `DATA/SESSION_${timestamp}`;
            // Get userId and data from storage
            const userIdResult = yield chrome.storage.local.get({ userId: '' });
            const currentUserId = userIdResult.userId;
            const snapshots = yield chrome.storage.local.get({ htmlSnapshots: [] });
            const interact = yield chrome.storage.local.get({ interactions: [] });
            const orderDetails = yield chrome.storage.local.get({ orderDetails: [] });
            const screen = yield chrome.storage.local.get({ screenshots: [] });
            const ReasonsAnnotation = yield chrome.storage.local.get({ reasonsAnnotation: [] });
            let htmlSnapshots = snapshots.htmlSnapshots || {};
            let storeInteractions = interact.interactions || [];
            let storeorderDetails = orderDetails.orderDetails || [];
            let storeScreenshots = screen.screenshots || [];
            let storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || [];
            // const allInteractions = [...storeInteractions, ...interactions];
            // const allScreenshots = [...storeScreenshots, ...screenshots];
            // const allReasons = [...storeReasonsAnnotation, ...reasonsAnnotation];
            // Upload session info
            console.log('uploading session info');
            const sessionInfoContent = `Session data for timestamp: ${timestamp}, user id: ${currentUserId},\n order details: \n ${JSON.stringify(storeorderDetails)}`;
            chrome.downloads.download({
                url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(sessionInfoContent),
                filename: `${folderName}/session_info.txt`,
                saveAs: false
            });
            // Upload HTML snapshots as separate files
            console.log('uploading html snapshots');
            for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
                yield chrome.downloads.download({
                    url: 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent),
                    filename: `${folderName}/html/${snapshotId.replace(/[:.]/g, "-")}.html`,
                    saveAs: false
                });
            }
            // Upload interactions JSON
            console.log('uploading interactions');
            const fullData = {
                interactions: storeInteractions,
                reasons: storeReasonsAnnotation,
                orderDetails: orderDetails
            };
            const interactionsData = JSON.stringify(fullData, null, 2);
            chrome.downloads.download({
                url: 'data:text/json;charset=utf-8,' + encodeURIComponent(interactionsData),
                filename: `${folderName}/interactions.json`,
                saveAs: false
            });
            // Upload screenshots
            console.log('uploading screenshots');
            for (const [screenshotData, screenshotId] of storeScreenshots) {
                chrome.downloads.download({
                    url: screenshotData,
                    filename: `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, "-")}.jpg`,
                    saveAs: false
                });
            }
            // Clear cache after successful upload
            chrome.storage.local.remove([
                'htmlSnapshots',
                'interactions',
                'orderDetails',
                'screenshots',
                'reasonsAnnotation'
            ]);
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
// Add this variable at the top with other state variables
let lastUploadTimestamp = '';
function uploadDataToServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const interact = yield chrome.storage.local.get({ interactions: [] });
            const storeInteractions = interact.interactions || [];
            // Check if there are any interactions and get the latest timestamp
            if (storeInteractions.length === 0) {
                console.log('No interactions to upload');
                return false;
            }
            const latestTimestamp = storeInteractions[storeInteractions.length - 1].timestamp;
            // If the latest timestamp hasn't changed, skip upload
            if (latestTimestamp === lastUploadTimestamp) {
                console.log('No new interactions since last upload');
                return false;
            }
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const folderName = `DATA/SESSION_${timestamp}`;
            // Get userId and data from storage
            const userIdResult = yield chrome.storage.local.get({ userId: '' });
            const currentUserId = userIdResult.userId;
            const snapshots = yield chrome.storage.local.get({ htmlSnapshots: [] });
            //   const interact = await chrome.storage.local.get({ interactions: [] })
            const orderDetails = yield chrome.storage.local.get({ orderDetails: [] });
            const screen = yield chrome.storage.local.get({ screenshots: [] });
            const ReasonsAnnotation = yield chrome.storage.local.get({ reasonsAnnotation: [] });
            let htmlSnapshots = snapshots.htmlSnapshots || {};
            //   let storeInteractions = interact.interactions || []
            let storeorderDetails = orderDetails.orderDetails || [];
            let storeScreenshots = screen.screenshots || [];
            let storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || [];
            // const allInteractions = [...storeInteractions, ...interactions];
            // const allScreenshots = [...storeScreenshots, ...screenshots];
            // const allReasons = [...storeReasonsAnnotation, ...reasonsAnnotation];
            // Upload session info
            const sessionInfo = new Blob([
                `Session data for timestamp: ${timestamp}, user id: ${currentUserId} \n order details: \n ${JSON.stringify(orderDetails)}`
            ], { type: 'text/plain' });
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
                interactions: storeInteractions,
                reasons: storeReasonsAnnotation,
                orderDetails: orderDetails
            };
            const interactionsBlob = new Blob([JSON.stringify(fullData, null, 2)], {
                type: 'application/json'
            });
            const jsonFormData = new FormData();
            jsonFormData.append('file', interactionsBlob, `${folderName}/interactions.json`);
            yield fetch(upload_url, {
                method: 'POST',
                body: jsonFormData
            });
            // Upload screenshots
            console.log('uploading screenshots');
            for (const [screenshotData, screenshotId] of storeScreenshots) {
                const response = yield fetch(screenshotData);
                const blob = yield response.blob();
                const formData = new FormData();
                formData.append('file', blob, `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, '-')}.jpg`);
                console.log('uploading screenshots');
                yield fetch(upload_url, {
                    method: 'POST',
                    body: formData
                });
            }
            // Original upload logic here...
            // ... (keep existing upload code) ...
            // After successful upload, update the last upload timestamp
            lastUploadTimestamp = latestTimestamp;
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
        uploadTimer = setInterval(uploadDataToServer, 10000); // 10 seconds
    }
}
// Stop the periodic upload timer
function stopPeriodicUpload() {
    if (uploadTimer) {
        clearInterval(uploadTimer);
        uploadTimer = null;
    }
}
startPeriodicUpload();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw2REFBNkQsV0FBVztBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVcsZUFBZSxtQ0FBbUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGUudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kX3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNTtcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAndWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJyxcbiAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW3sgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiIH1dXG4gICAgfVxuXTtcbmV4cG9ydCBjb25zdCByZWNpcGVzID0gW1xuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvJyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgc2VsZWN0b3I6ICdoZWFkJywgY2hpbGRyZW46IFt7IHNlbGVjdG9yOiAndGl0bGUnLCBhZGRfdGV4dDogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvcycsXG4gICAgICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHNlbGVjdG9yOiAnaGVhZCcsIGNoaWxkcmVuOiBbeyBzZWxlY3RvcjogJ3RpdGxlJywgYWRkX3RleHQ6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLXBsdXMuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZpZXdfcHJvZHVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZScsXG4gICAgICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgICAgICB0ZXJtaW5hdGU6ICdyZXR1cm4gISFhcmd1bWVudHNbMF0nLFxuICAgICAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6ICdyZXR1cm4gYXJndW1lbnRzWzBdJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgc2VsZWN0b3I6ICdoZWFkJywgY2hpbGRyZW46IFt7IHNlbGVjdG9yOiAndGl0bGUnLCBhZGRfdGV4dDogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydpZCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhcGV4X2Rlc2t0b3BfbmV3QWNjb3JkaW9uUm93ICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydDpoYXMoI2J1eS1ub3ctYnV0dG9uKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNidXktbm93LWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXlfbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVfaG9vazogYFxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLmlubmVyVGV4dFxuY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheVwiKS5pbm5lclRleHRcbmNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKVwiKSkubWFwKGEgPT4gKHtsYWJlbDogYS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuYS1mb3JtLWxhYmVsXCIpLmlubmVyVGV4dCwgdmFsdWU6IGEucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpLmlubmVyVGV4dH0pKVxuY29uc3Qgb3B0aW9uc19kaWN0ID0ge31cbmZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zX2RpY3Rbb3B0aW9uW1wibGFiZWxcIl0ucmVwbGFjZShcIjogXCIsIFwiXCIpXSA9IG9wdGlvbltcInZhbHVlXCJdXG59XG5jb25zdCBhc2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I0FTSU5cIikudmFsdWVcbmNvbnNvbGUubG9nKHt0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbn0pXG5yZXR1cm4ge3RpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2lufVxuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICB0ZXJtaW5hdGU6ICdyZXR1cm4gISFhcmd1bWVudHNbMF0nLFxuICAgICAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6ICdyZXR1cm4gYXJndW1lbnRzWzBdJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJ1xuICAgIH1cbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNyYy9iYWNrZ3JvdW5kX3Rlc3QudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbi8vIGNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKFxuLy8gICAoZGV0YWlscykgPT4ge1xuLy8gICAgIGlmIChkZXRhaWxzLmZyYW1lSWQgPT09IDApIHtcbi8vICAgICAgIC8vIE9ubHkgaW5qZWN0IGludG8gdGhlIG1haW4gZnJhbWVcbi8vICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4vLyAgICAgICAgIHRhcmdldDogeyB0YWJJZDogZGV0YWlscy50YWJJZCB9LFxuLy8gICAgICAgICBmaWxlczogWydqcy9pbmplY3RlZC5qcyddLFxuLy8gICAgICAgICB3b3JsZDogJ01BSU4nIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgeyB1cmw6IFt7IHVybE1hdGNoZXM6ICcuKmFtYXpvblxcXFwuY29tLionIH0sIHsgdXJsTWF0Y2hlczogJ2ZpbGU6Ly8uKicgfV0gfVxuLy8gKVxuLy8gY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCh0YWIpID0+IHtcbi8vICAgaWYgKHRhYi51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSB8fCB0YWIudXJsLmluY2x1ZGVzKCdmaWxlJykpIHtcbi8vICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4vLyAgICAgICAgIHRhcmdldDogeyB0YWJJZDogZGV0YWlscy50YWJJZCB9LFxuLy8gICAgICAgICBmaWxlczogWydqcy9pbmplY3RlZC5qcyddLFxuLy8gICAgICAgICB3b3JsZDogJ01BSU4nIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4vLyAgICAgICB9KVxuLy8gICB9XG4vLyB9KVxuLy8gY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbykgPT4ge1xuLy8gICBpZiAoY2hhbmdlSW5mby5zdGF0dXMgPT09ICdsb2FkaW5nJyAmJiAodGFiLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpIHx8IHRhYi51cmwuaW5jbHVkZXMoJ2ZpbGUnKSkpIHtcbi8vICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuLy8gICAgICAgdGFyZ2V0OiB7IHRhYklkOiB0YWJJZCB9LFxuLy8gICAgICAgZmlsZXM6IFsnanMvaW5qZWN0ZWQuanMnXSxcbi8vICAgICAgIHdvcmxkOiAnTUFJTicgLy8gRW5zdXJlcyB0aGUgc2NyaXB0IGlzIGluamVjdGVkIGludG8gdGhlIG1haW4gd29ybGRcbi8vICAgICB9KVxuLy8gICB9XG4vLyB9KVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuL3JlY2lwZSc7XG5sZXQgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnO1xubGV0IGludGVyYWN0aW9ucyA9IFtdO1xuY29uc3QgaW50ZXJhY3Rpb25zTGltaXQgPSAxMDA7XG5sZXQgc2NyZWVuc2hvdHMgPSBbXTtcbmxldCByZWFzb25zQW5ub3RhdGlvbiA9IFtdO1xuY29uc3QgcmVhc29uc0xpbWl0ID0gMTAwO1xuY29uc3Qgc2NyZWVuc2hvdExpbWl0ID0gMTAwO1xubGV0IGFjdGlvblNlcXVlbmNlSWQgPSAwO1xubGV0IHVwbG9hZFRpbWVyID0gbnVsbDtcbmxldCB1c2VySWQgPSAnJztcbmltcG9ydCB7IHBvcHVwX3Byb2JhYmlsaXR5IH0gZnJvbSAnLi9jb25maWcnO1xuY29uc3QgdGFiTmF2aWdhdGlvbkhpc3RvcnkgPSB7fTtcbmZ1bmN0aW9uIGFuYWx5emVOYXZpZ2F0aW9uKHRhYklkLCB1cmwpIHtcbiAgICBpZiAoIXRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXSkge1xuICAgICAgICB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0gPSB7XG4gICAgICAgICAgICBiYWNrU3RhY2s6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZFN0YWNrOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRVcmw6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgaGlzdG9yeSA9IHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXTtcbiAgICBpZiAoIWhpc3RvcnkuY3VycmVudFVybCkge1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiAnbmV3JztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuY3VycmVudFVybCA9PT0gdXJsKSB7XG4gICAgICAgIHJldHVybiAncmVsb2FkJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCA+IDAgJiYgaGlzdG9yeS5iYWNrU3RhY2tbaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmZvcndhcmRTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuYmFja1N0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2JhY2snO1xuICAgIH1cbiAgICBpZiAoaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgICBoaXN0b3J5LmZvcndhcmRTdGFja1toaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsKSB7XG4gICAgICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5mb3J3YXJkU3RhY2sucG9wKCk7XG4gICAgICAgIHJldHVybiAnZm9yd2FyZCc7XG4gICAgfVxuICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFjayA9IFtdO1xuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IHVybDtcbiAgICByZXR1cm4gJ25ldyc7XG59XG4vLyBSZXBsYWNlIHRoZSBzaW1wbGUgcXVlc3Rpb24gd2l0aCBhIG1vcmUgZGV0YWlsZWQgb25lIGJhc2VkIG9uIGV2ZW50IHR5cGVcbmZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKGV2ZW50VHlwZSwgZGF0YSkge1xuICAgIHZhciBfYTtcbiAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgICAgICAgaWYgKGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1NldCBVcCBOb3cnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgY2hvb3NlICdTZXQgVXAgTm93JyBpbnN0ZWFkIG9mIGJ1eSBvbmNlLCBhbmQgd2h5IGRvIHlvdSBsaWtlIHRoaXMgcGFydGljdWxhciBwcm9kdWN0P1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50YXJnZXQuaWQgPT09ICdidXktbm93LWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGNob29zZSB0byBidXkgdGhpcyBwcm9kdWN0IGltbWVkaWF0ZWx5LCBhbmQgd2hhdCBjb252aW5jZWQgeW91IHRvIHNraXAgZnVydGhlciBleHBsb3JhdGlvbiBvZiBvdGhlciBvcHRpb25zPyBXaHkgZG8geW91IGxpa2UgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChfYSA9IGRhdGEudGFyZ2V0LmNsYXNzTmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2hhdCBtYWRlIHlvdSBjbGljayBvbiB0aGlzIHByb2R1Y3QsIGFuZCB3aGF0IHNwZWNpZmljIGFzcGVjdHMgYXR0cmFjdGVkIHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIG90aGVyIHNlYXJjaCByZXN1bHRzPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnRhcmdldC5pZCA9PT0gJ2FkZC10by1jYXJ0LWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydCwgYW5kIGFyZSB5b3UgcGxhbm5pbmcgdG8gYnV5IGl0IG5vdyBvciBsYXRlcj8gV2hhdCBjb252aW5jZWQgeW91IHRoYXQgdGhpcyBpdGVtIHdhcyB0aGUgcmlnaHQgY2hvaWNlIGZvciB5b3VyIG5lZWRzPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doYXQgd2FzIHlvdXIgcmVhc29uIGZvciBjbGlja2luZyBvbiB0aGlzIGVsZW1lbnQ/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IGRvaW5nIHdoaWxlIHNjcm9sbGluZ+KAlGFyZSB5b3UgYnJvd3Npbmcgc2VhcmNoIHJlc3VsdHMsIGxvb2tpbmcgYXQgcmV2aWV3cywgb3Igc29tZXRoaW5nIGVsc2UsIGFuZCB3aGF0IGFyZSB5b3UgaG9waW5nIHRvIGZpbmQ/JztcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciwgYW5kIGhvdyBkaWQgeW91IGRlY2lkZSBvbiB0aGUgc2VhcmNoIHRlcm1zIHlvdSB1c2VkPyBBcmUgeW91IGxvb2tpbmcgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdCwgYnJhbmQsIG9yIGZlYXR1cmU/JztcbiAgICAgICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICAgICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gZ28gYmFjayB0byB0aGUgcHJldmlvdXMgcGFnZSwgYW5kIHdoYXQgd2VyZSB5b3UgaG9waW5nIHRvIHJldmlzaXQgb3IgcmVjb25zaWRlcj8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSBhZnRlciBwcmV2aW91c2x5IG5hdmlnYXRpbmcgYXdheSwgYW5kIHdoYXQgbmV3IG9yIHVucmVzb2x2ZWQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvciBub3c/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzICR7ZGF0YS5uYXZpZ2F0aW9uVHlwZX0gbmF2aWdhdGlvbj9gO1xuICAgICAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICAgICAgICByZXR1cm4gYFdoeSBkaWQgeW91IHN3aXRjaCB0byB0aGlzIHRhYj8gRG8geW91IGhhdmUgc3BlY2lmaWMgdGFzayBvciBpbmZvcm1hdGlvbiBpbiBtaW5kP2A7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlICR7ZXZlbnRUeXBlfSBhY3Rpb24/YDtcbiAgICB9XG59XG4vLyBBZGQgbmV3IGZ1bmN0aW9uIHRvIGhhbmRsZSBzY3JlZW5zaG90IHNhdmluZ1xuZnVuY3Rpb24gc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAvLyBHZXQgZXhpc3Rpbmcgc2NyZWVuc2hvdHMgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSByZXN1bHQuc2NyZWVuc2hvdHMgfHwgW107XG4gICAgICAgICAgICAvLyBBZGQgbmV3IHNjcmVlbnNob3RcbiAgICAgICAgICAgIHN0b3JlU2NyZWVuc2hvdHMucHVzaChbc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZF0pO1xuICAgICAgICAgICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNjcmVlbnNob3RzOiBzdG9yZVNjcmVlbnNob3RzIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIDtcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NhdmVEYXRhJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzYXZlRGF0YSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZURhdGEgJywgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uU2VxdWVuY2VJZCk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZGF0YS5hY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZDtcbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l5a2Y5YKo5YiwIGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtZXNzYWdlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBwb3B1cFxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNlbmRQb3B1cChzZW5kZXIudGFiPy5pZCwgbWVzc2FnZS5kYXRhLnRpbWVzdGFtcCwgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSwgYWN0aW9uU2VxdWVuY2VJZClcbiAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgIHNhdmVEYXRhKCksXG4gICAgICAgICAgICAgICAgICAgIHNlbmRQb3B1cCgoX2EgPSBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQsIG1lc3NhZ2UuZGF0YS50aW1lc3RhbXAsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUsIG1lc3NhZ2UuZGF0YSlcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2F2ZURhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxuICAgICAgICB9XG4gICAgICAgIC8vIENhcHR1cmUgc2NyZWVuc2hvdCBvbiBkZW1hbmRcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2FwdHVyZVNjcmVlbnNob3QnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXQgc2NyZWVuc2hvdCByZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdCgpO1xuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0geWllbGQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgbWVzc2FnZS5zY3JlZW5zaG90SWQpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzLCBtZXNzYWdlOiBzdWNjZXNzID8gdW5kZWZpbmVkIDogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjYXB0dXJlU2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvd25sb2FkIGRhdGEgb24gdXNlciByZXF1ZXN0XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2Rvd25sb2FkRGF0YScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkRGF0YScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCBkb3dubG9hZERhdGFMb2NhbGx5KCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjbGVhck1lbW9yeUNhY2hlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90cyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uID0gW107XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCA9IDA7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGNsZWFyTWVtb3J5Q2FjaGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldFJlY2lwZScgJiYgKChfYiA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVjaXBlKHNlbmRlci50YWIuaWQsIG1lc3NhZ2UudXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVjaXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHJlY2lwZTogcmVjaXBlIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBnZXRSZWNpcGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZSB0aGF0IHNlbmRSZXNwb25zZSB3aWxsIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICB9XG4gICAgfSkpKCk7XG4gICAgcmV0dXJuIHRydWU7IC8vIEtlZXBzIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VzXG59KTtcbi8vIENhcHR1cmUgdGhlIHNjcmVlbnNob3QgaW4gdGhlIGN1cnJlbnQgdGFiXG5mdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuY29uc3Qgc2F2ZUhUTUwgPSAoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czoge30gfSk7XG4gICAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gaHRtbENvbnRlbnQ7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KTtcbn0pO1xuY29uc3Qgc2F2ZUludGVyYWN0aW9uID0gKGV2ZW50VHlwZSwgdGltZXN0YW1wLCB0YXJnZXRfdXJsLCBodG1sU25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICB0YXJnZXRfdXJsLFxuICAgICAgICBodG1sU25hcHNob3RJZCxcbiAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWRcbiAgICB9O1xuICAgIGxldCBpbnRlcmFjdGlvbnMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0aW9ucy5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgc3RvcmVJbnRlcmFjdGlvbnMucHVzaChkYXRhKTtcbiAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zIH0pO1xufSk7XG5jb25zdCBzYXZlU2NyZWVuc2hvdCA9ICh3aW5kb3dJZCwgdGltZXN0YW1wKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHdpbmRvd0lkLCB7XG4gICAgICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgICAgICBxdWFsaXR5OiAyNVxuICAgIH0pO1xuICAgIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfWA7XG4gICAgeWllbGQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKTtcbn0pO1xuY29uc3Qgc2VuZFBvcHVwID0gKHRhYklkLCB0aW1lc3RhbXAsIGV2ZW50VHlwZSwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIGRhdGEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlLCBkYXRhKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHBvcHVwX3Byb2JhYmlsaXR5ICYmIHRhYklkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3Nob3dfcG9wdXAnLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5pbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pO1xuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gcmVzdWx0LnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgcmVhc29uXG4gICAgICAgICAgICAgICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbi5wdXNoKG5ld2l0ZW0pO1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVhc29uc0Fubm90YXRpb246IHN0b3JlUmVhc29uc0Fubm90YXRpb24gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3B1cDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoYWN0aXZlSW5mbykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFiSWQgPSBhY3RpdmVJbmZvLnRhYklkO1xuICAgICAgICBjb25zdCB0YWIgPSB5aWVsZCBjaHJvbWUudGFicy5nZXQodGFiSWQpO1xuICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgU3dpdGNoZWQgdG8gdGFiICR7dGFiSWR9IHdpdGggVVJMOiAke3RhYi51cmx9YCk7XG4gICAgICAgIGlmICh0YWIudXJsICYmICh0YWIudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgdGFiLnVybC5pbmNsdWRlcygnZmlsZScpKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKHRhYi51cmwpfV8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5odG1sO1xuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVIVE1MKGh0bWxDb250ZW50LCBjdXJyZW50U25hcHNob3RJZClcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBzYXZlSW50ZXJhY3Rpb24oJ3RhYkFjdGl2YXRlJywgdGltZXN0YW1wLCB0YWIudXJsLCBjdXJyZW50U25hcHNob3RJZCwgYWN0aW9uU2VxdWVuY2VJZClcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBzYXZlU2NyZWVuc2hvdCh0YWIud2luZG93SWQsIHRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUludGVyYWN0aW9uKCd0YWJBY3RpdmF0ZScsIHRpbWVzdGFtcCwgdGFiLnVybCwgY3VycmVudFNuYXBzaG90SWQsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVNjcmVlbnNob3QodGFiLndpbmRvd0lkLCB0aW1lc3RhbXApLFxuICAgICAgICAgICAgICAgICAgICBzZW5kUG9wdXAodGFiSWQsIHRpbWVzdGFtcCwgJ3RhYkFjdGl2YXRlJywgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIHt9KVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0YWIgYWN0aXZhdGUgaGFuZGxlcjonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHRhYklkLCB1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgICAgIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCc7XG4gICAgICAgICAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbeyByZXN1bHQ6IGhhc01hdGNoIH1dID0geWllbGQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogKHNlbGVjdG9yLCBtYXRjaFRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFtYXRjaFRleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoX2IgPSAoX2EgPSBlbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaFRleHQudG9Mb3dlckNhc2UoKSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtyZWNpcGUubWF0Y2gsIHJlY2lwZS5tYXRjaF90ZXh0IHx8ICcnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApO1xuICAgIH0pO1xufVxuY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21taXR0ZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChkZXRhaWxzLmZyYW1lSWQgIT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zb2xlLmxvZygnd2ViTmF2aWdhdGlvbiBvbkNvbW1pdHRlZCBldmVudCB0cmlnZ2VyZWQ6JywgZGV0YWlscyk7XG4gICAgaWYgKGRldGFpbHMudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgZGV0YWlscy51cmwuaW5jbHVkZXMoJ2ZpbGUnKSkge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YCk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuaHRtbDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpXG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVTY3JlZW5zaG90KChhd2FpdCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQpLFxuICAgICAgICAgICAgICAgIHNhdmVTY3JlZW5zaG90KCh5aWVsZCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uVHlwZSAhPT0gJ25ldycgJiYgbmF2aWdhdGlvblR5cGUgIT09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCBuYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2VuZFBvcHVwKGRldGFpbHMudGFiSWQsIHRpbWVzdGFtcCwgJ25hdmlnYXRpb24nLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICAgIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG59KTtcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuZnVuY3Rpb24gZG93bmxvYWREYXRhTG9jYWxseSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgREFUQS9TRVNTSU9OXyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgdXNlcklkUmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgdXNlcklkOiAnJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB1c2VySWRSZXN1bHQudXNlcklkO1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbEludGVyYWN0aW9ucyA9IFsuLi5zdG9yZUludGVyYWN0aW9ucywgLi4uaW50ZXJhY3Rpb25zXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFNjcmVlbnNob3RzID0gWy4uLnN0b3JlU2NyZWVuc2hvdHMsIC4uLnNjcmVlbnNob3RzXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFJlYXNvbnMgPSBbLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4ucmVhc29uc0Fubm90YXRpb25dO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKTtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25JbmZvQ29udGVudCA9IGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9LCB1c2VyIGlkOiAke2N1cnJlbnRVc2VySWR9LFxcbiBvcmRlciBkZXRhaWxzOiBcXG4gJHtKU09OLnN0cmluZ2lmeShzdG9yZW9yZGVyRGV0YWlscyl9YDtcbiAgICAgICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgICAgICAgIHVybDogJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvbkluZm9Db250ZW50KSxcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vc2Vzc2lvbl9pbmZvLnR4dGAsXG4gICAgICAgICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NuYXBzaG90SWQsIGh0bWxDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhodG1sU25hcHNob3RzKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdkYXRhOnRleHQvaHRtbDtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoaHRtbENvbnRlbnQpLFxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWQucmVwbGFjZSgvWzouXS9nLCBcIi1cIil9Lmh0bWxgLFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zJyk7XG4gICAgICAgICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zLFxuICAgICAgICAgICAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICAgICAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbnNEYXRhID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpO1xuICAgICAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGludGVyYWN0aW9uc0RhdGEpLFxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMuanNvbmAsXG4gICAgICAgICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzY3JlZW5zaG90RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgXCItXCIpfS5qcGdgLFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhciBjYWNoZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtcbiAgICAgICAgICAgICAgICAnaHRtbFNuYXBzaG90cycsXG4gICAgICAgICAgICAgICAgJ2ludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgJ29yZGVyRGV0YWlscycsXG4gICAgICAgICAgICAgICAgJ3NjcmVlbnNob3RzJyxcbiAgICAgICAgICAgICAgICAncmVhc29uc0Fubm90YXRpb24nXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gQWRkIHRoaXMgdmFyaWFibGUgYXQgdGhlIHRvcCB3aXRoIG90aGVyIHN0YXRlIHZhcmlhYmxlc1xubGV0IGxhc3RVcGxvYWRUaW1lc3RhbXAgPSAnJztcbmZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3QgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGludGVyYWN0aW9ucyBhbmQgZ2V0IHRoZSBsYXRlc3QgdGltZXN0YW1wXG4gICAgICAgICAgICBpZiAoc3RvcmVJbnRlcmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGludGVyYWN0aW9ucyB0byB1cGxvYWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUaW1lc3RhbXAgPSBzdG9yZUludGVyYWN0aW9uc1tzdG9yZUludGVyYWN0aW9ucy5sZW5ndGggLSAxXS50aW1lc3RhbXA7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbGF0ZXN0IHRpbWVzdGFtcCBoYXNuJ3QgY2hhbmdlZCwgc2tpcCB1cGxvYWRcbiAgICAgICAgICAgIGlmIChsYXRlc3RUaW1lc3RhbXAgPT09IGxhc3RVcGxvYWRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbmV3IGludGVyYWN0aW9ucyBzaW5jZSBsYXN0IHVwbG9hZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csICctJyk7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gYERBVEEvU0VTU0lPTl8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZDtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90cyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgLy8gICBjb25zdCBpbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW4gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICAvLyAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbEludGVyYWN0aW9ucyA9IFsuLi5zdG9yZUludGVyYWN0aW9ucywgLi4uaW50ZXJhY3Rpb25zXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFNjcmVlbnNob3RzID0gWy4uLnN0b3JlU2NyZWVuc2hvdHMsIC4uLnNjcmVlbnNob3RzXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFJlYXNvbnMgPSBbLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4ucmVhc29uc0Fubm90YXRpb25dO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihbXG4gICAgICAgICAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH0sIHVzZXIgaWQ6ICR7Y3VycmVudFVzZXJJZH0gXFxuIG9yZGVyIGRldGFpbHM6IFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgICAgICAgXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbywgYCR7Zm9sZGVyTmFtZX0vc2Vzc2lvbl9pbmZvLnR4dGApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKTtcbiAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBzZXNzaW9uRm9ybURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGh0bWwgc25hcHNob3RzJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQmxvYiA9IG5ldyBCbG9iKFtodG1sQ29udGVudF0sIHsgdHlwZTogJ3RleHQvaHRtbCcgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBodG1sQmxvYiwgYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWR9Lmh0bWxgKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICBvcmRlckRldGFpbHM6IG9yZGVyRGV0YWlsc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uc0Jsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBqc29uRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBpbnRlcmFjdGlvbnNCbG9iLCBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMuanNvbmApO1xuICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHNjcmVlbnNob3REYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYmxvYiwgYCR7Zm9sZGVyTmFtZX0vc2NyZWVuc2hvdHMvJHtzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpfS5qcGdgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIHVwbG9hZCBsb2dpYyBoZXJlLi4uXG4gICAgICAgICAgICAvLyAuLi4gKGtlZXAgZXhpc3RpbmcgdXBsb2FkIGNvZGUpIC4uLlxuICAgICAgICAgICAgLy8gQWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWQsIHVwZGF0ZSB0aGUgbGFzdCB1cGxvYWQgdGltZXN0YW1wXG4gICAgICAgICAgICBsYXN0VXBsb2FkVGltZXN0YW1wID0gbGF0ZXN0VGltZXN0YW1wO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgMTAwMDApOyAvLyAxMCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9