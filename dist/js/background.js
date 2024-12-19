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


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
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
                actionSequenceId++;
                const currentactionSequenceId = actionSequenceId;
                console.log(currentactionSequenceId);
                message.data.actionSequenceId = currentactionSequenceId;
                const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                message.data.uuid = uuid;
                const saveData = () => __awaiter(void 0, void 0, void 0, function* () {
                    console.log('saveData ', message.data.eventType);
                    let result = yield chrome.storage.local.get({ interactions: [] });
                    result = result.interactions || [];
                    result.push(message.data);
                    yield chrome.storage.local.set({ interactions: result });
                });
                // popup
                // await sendPopup(sender.tab?.id, message.data.timestamp, message.data.eventType, actionSequenceId)
                yield Promise.all([
                    saveData(),
                    sendPopup((_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id, message.data.timestamp, message.data.eventType, currentactionSequenceId, message.data, uuid)
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
const saveInteraction = (eventType, timestamp, target_url, htmlSnapshotId, currentactionSequenceId, uuid) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        eventType,
        timestamp,
        target_url,
        htmlSnapshotId,
        actionSequenceId: currentactionSequenceId,
        uuid: uuid
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
const sendPopup = (tabId, timestamp, eventType, currentactionSequenceId, data, uuid) => __awaiter(void 0, void 0, void 0, function* () {
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
                    reason: reason,
                    uuid: uuid
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
                const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                yield Promise.all([
                    saveHTML(htmlContent, currentSnapshotId),
                    saveInteraction('tabActivate', timestamp, tab.url, currentSnapshotId, currentactionSequenceId, uuid),
                    saveScreenshot(tab.windowId, timestamp),
                    sendPopup(tabId, timestamp, 'tabActivate', currentactionSequenceId, {}, uuid)
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
            const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
            yield Promise.all([
                saveHTML(htmlContent, currentSnapshotId),
                saveInteraction('navigation', timestamp, details.url, currentSnapshotId, currentactionSequenceId, uuid),
                saveScreenshot((yield chrome.tabs.get(details.tabId)).windowId, timestamp)
            ]);
            if (navigationType !== 'new' && navigationType !== 'reload') {
                console.log('send message to popup navigation');
                yield sendPopup(details.tabId, timestamp, 'navigation', currentactionSequenceId, {
                    navigationType: navigationType
                }, uuid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGlEQUFpRCxXQUFXLGVBQWUsbUNBQW1DO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYmFja2dyb3VuZF90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTU7XG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtYmFyLWZvcm0nLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQjdHdvdGFic2VhcmNodGV4dGJveCcsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IHJlZmluZW1lbnRfb3B0aW9uID0gW1xuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogJ3VsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYScsXG4gICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFt7IHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiB9XVxuICAgIH1cbl07XG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnLycsXG4gICAgICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHNlbGVjdG9yOiAnaGVhZCcsIGNoaWxkcmVuOiBbeyBzZWxlY3RvcjogJ3RpdGxlJywgYWRkX3RleHQ6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnL3MnLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgeyBzZWxlY3RvcjogJ2hlYWQnLCBjaGlsZHJlbjogW3sgc2VsZWN0b3I6ICd0aXRsZScsIGFkZF90ZXh0OiB0cnVlIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmV2aWV3c1JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS1wbHVzLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd2aWV3X3Byb2R1Y3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgICAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgdGVybWluYXRlOiAncmV0dXJuICEhYXJndW1lbnRzWzBdJyxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiAncmV0dXJuIGFyZ3VtZW50c1swXScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHNlbGVjdG9yOiAnaGVhZCcsIGNoaWxkcmVuOiBbeyBzZWxlY3RvcjogJ3RpdGxlJywgYWRkX3RleHQ6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXBleF9kZXNrdG9wX25ld0FjY29yZGlvblJvdyAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQ6aGFzKCNidXktbm93LWJ1dHRvbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5LW5vdy1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1idXktbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlX2hvb2s6IGBcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5pbm5lclRleHRcbmNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXlcIikuaW5uZXJUZXh0XG5jb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIikpLm1hcChhID0+ICh7bGFiZWw6IGEucXVlcnlTZWxlY3RvcihcImxhYmVsLmEtZm9ybS1sYWJlbFwiKS5pbm5lclRleHQsIHZhbHVlOiBhLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnNlbGVjdGlvblwiKS5pbm5lclRleHR9KSlcbmNvbnN0IG9wdGlvbnNfZGljdCA9IHt9XG5mb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgb3B0aW9uc19kaWN0W29wdGlvbltcImxhYmVsXCJdLnJlcGxhY2UoXCI6IFwiLCBcIlwiKV0gPSBvcHRpb25bXCJ2YWx1ZVwiXVxufVxuY29uc3QgYXNpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNBU0lOXCIpLnZhbHVlXG5jb25zb2xlLmxvZyh7dGl0bGUsIHByaWNlLCBvcHRpb25zOiBvcHRpb25zX2RpY3QsIGFzaW59KVxucmV0dXJuIHt0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbn1cbmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvYXAvc2lnbmluJyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgdGVybWluYXRlOiAncmV0dXJuICEhYXJndW1lbnRzWzBdJyxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiAncmV0dXJuIGFyZ3VtZW50c1swXScsXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgICB9XG5dO1xuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzcmMvYmFja2dyb3VuZF90ZXN0LnRzXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG4vLyBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcihcbi8vICAgKGRldGFpbHMpID0+IHtcbi8vICAgICBpZiAoZGV0YWlscy5mcmFtZUlkID09PSAwKSB7XG4vLyAgICAgICAvLyBPbmx5IGluamVjdCBpbnRvIHRoZSBtYWluIGZyYW1lXG4vLyAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuLy8gICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbi8vICAgICAgICAgZmlsZXM6IFsnanMvaW5qZWN0ZWQuanMnXSxcbi8vICAgICAgICAgd29ybGQ6ICdNQUlOJyAvLyBFbnN1cmVzIHRoZSBzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGUgbWFpbiB3b3JsZFxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIHsgdXJsOiBbeyB1cmxNYXRjaGVzOiAnLiphbWF6b25cXFxcLmNvbS4qJyB9LCB7IHVybE1hdGNoZXM6ICdmaWxlOi8vLionIH1dIH1cbi8vIClcbi8vIGNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4vLyAgIGlmICh0YWIudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgdGFiLnVybC5pbmNsdWRlcygnZmlsZScpKSB7XG4vLyAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuLy8gICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbi8vICAgICAgICAgZmlsZXM6IFsnanMvaW5qZWN0ZWQuanMnXSxcbi8vICAgICAgICAgd29ybGQ6ICdNQUlOJyAvLyBFbnN1cmVzIHRoZSBzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGUgbWFpbiB3b3JsZFxuLy8gICAgICAgfSlcbi8vICAgfVxuLy8gfSlcbi8vIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8pID0+IHtcbi8vICAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09PSAnbG9hZGluZycgJiYgKHRhYi51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSB8fCB0YWIudXJsLmluY2x1ZGVzKCdmaWxlJykpKSB7XG4vLyAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbi8vICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbi8vICAgICAgIGZpbGVzOiBbJ2pzL2luamVjdGVkLmpzJ10sXG4vLyAgICAgICB3b3JsZDogJ01BSU4nIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuL3JlY2lwZSc7XG5sZXQgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnO1xubGV0IGludGVyYWN0aW9ucyA9IFtdO1xuY29uc3QgaW50ZXJhY3Rpb25zTGltaXQgPSAxMDA7XG5sZXQgc2NyZWVuc2hvdHMgPSBbXTtcbmxldCByZWFzb25zQW5ub3RhdGlvbiA9IFtdO1xuY29uc3QgcmVhc29uc0xpbWl0ID0gMTAwO1xuY29uc3Qgc2NyZWVuc2hvdExpbWl0ID0gMTAwO1xubGV0IGFjdGlvblNlcXVlbmNlSWQgPSAwO1xubGV0IHVwbG9hZFRpbWVyID0gbnVsbDtcbmxldCB1c2VySWQgPSAnJztcbmltcG9ydCB7IHBvcHVwX3Byb2JhYmlsaXR5IH0gZnJvbSAnLi9jb25maWcnO1xuY29uc3QgdGFiTmF2aWdhdGlvbkhpc3RvcnkgPSB7fTtcbmZ1bmN0aW9uIGFuYWx5emVOYXZpZ2F0aW9uKHRhYklkLCB1cmwpIHtcbiAgICBpZiAoIXRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXSkge1xuICAgICAgICB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0gPSB7XG4gICAgICAgICAgICBiYWNrU3RhY2s6IFtdLFxuICAgICAgICAgICAgZm9yd2FyZFN0YWNrOiBbXSxcbiAgICAgICAgICAgIGN1cnJlbnRVcmw6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgaGlzdG9yeSA9IHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXTtcbiAgICBpZiAoIWhpc3RvcnkuY3VycmVudFVybCkge1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgICAgIHJldHVybiAnbmV3JztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuY3VycmVudFVybCA9PT0gdXJsKSB7XG4gICAgICAgIHJldHVybiAncmVsb2FkJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCA+IDAgJiYgaGlzdG9yeS5iYWNrU3RhY2tbaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmZvcndhcmRTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuYmFja1N0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2JhY2snO1xuICAgIH1cbiAgICBpZiAoaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoID4gMCAmJlxuICAgICAgICBoaXN0b3J5LmZvcndhcmRTdGFja1toaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsKSB7XG4gICAgICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5mb3J3YXJkU3RhY2sucG9wKCk7XG4gICAgICAgIHJldHVybiAnZm9yd2FyZCc7XG4gICAgfVxuICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFjayA9IFtdO1xuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IHVybDtcbiAgICByZXR1cm4gJ25ldyc7XG59XG4vLyBSZXBsYWNlIHRoZSBzaW1wbGUgcXVlc3Rpb24gd2l0aCBhIG1vcmUgZGV0YWlsZWQgb25lIGJhc2VkIG9uIGV2ZW50IHR5cGVcbmZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKGV2ZW50VHlwZSwgZGF0YSkge1xuICAgIHZhciBfYTtcbiAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdjbGljayc6XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgICAgICAgaWYgKGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1NldCBVcCBOb3cnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgY2hvb3NlICdTZXQgVXAgTm93JyBpbnN0ZWFkIG9mIGJ1eSBvbmNlLCBhbmQgd2h5IGRvIHlvdSBsaWtlIHRoaXMgcGFydGljdWxhciBwcm9kdWN0P1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50YXJnZXQuaWQgPT09ICdidXktbm93LWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGNob29zZSB0byBidXkgdGhpcyBwcm9kdWN0IGltbWVkaWF0ZWx5LCBhbmQgd2hhdCBjb252aW5jZWQgeW91IHRvIHNraXAgZnVydGhlciBleHBsb3JhdGlvbiBvZiBvdGhlciBvcHRpb25zPyBXaHkgZG8geW91IGxpa2UgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChfYSA9IGRhdGEudGFyZ2V0LmNsYXNzTmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2hhdCBtYWRlIHlvdSBjbGljayBvbiB0aGlzIHByb2R1Y3QsIGFuZCB3aGF0IHNwZWNpZmljIGFzcGVjdHMgYXR0cmFjdGVkIHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIG90aGVyIHNlYXJjaCByZXN1bHRzPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnRhcmdldC5pZCA9PT0gJ2FkZC10by1jYXJ0LWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydCwgYW5kIGFyZSB5b3UgcGxhbm5pbmcgdG8gYnV5IGl0IG5vdyBvciBsYXRlcj8gV2hhdCBjb252aW5jZWQgeW91IHRoYXQgdGhpcyBpdGVtIHdhcyB0aGUgcmlnaHQgY2hvaWNlIGZvciB5b3VyIG5lZWRzPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doYXQgd2FzIHlvdXIgcmVhc29uIGZvciBjbGlja2luZyBvbiB0aGlzIGVsZW1lbnQ/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IGRvaW5nIHdoaWxlIHNjcm9sbGluZ+KAlGFyZSB5b3UgYnJvd3Npbmcgc2VhcmNoIHJlc3VsdHMsIGxvb2tpbmcgYXQgcmV2aWV3cywgb3Igc29tZXRoaW5nIGVsc2UsIGFuZCB3aGF0IGFyZSB5b3UgaG9waW5nIHRvIGZpbmQ/JztcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciwgYW5kIGhvdyBkaWQgeW91IGRlY2lkZSBvbiB0aGUgc2VhcmNoIHRlcm1zIHlvdSB1c2VkPyBBcmUgeW91IGxvb2tpbmcgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdCwgYnJhbmQsIG9yIGZlYXR1cmU/JztcbiAgICAgICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICAgICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gZ28gYmFjayB0byB0aGUgcHJldmlvdXMgcGFnZSwgYW5kIHdoYXQgd2VyZSB5b3UgaG9waW5nIHRvIHJldmlzaXQgb3IgcmVjb25zaWRlcj8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSBhZnRlciBwcmV2aW91c2x5IG5hdmlnYXRpbmcgYXdheSwgYW5kIHdoYXQgbmV3IG9yIHVucmVzb2x2ZWQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvciBub3c/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzICR7ZGF0YS5uYXZpZ2F0aW9uVHlwZX0gbmF2aWdhdGlvbj9gO1xuICAgICAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICAgICAgICByZXR1cm4gYFdoeSBkaWQgeW91IHN3aXRjaCB0byB0aGlzIHRhYj8gRG8geW91IGhhdmUgc3BlY2lmaWMgdGFzayBvciBpbmZvcm1hdGlvbiBpbiBtaW5kP2A7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlICR7ZXZlbnRUeXBlfSBhY3Rpb24/YDtcbiAgICB9XG59XG4vLyBBZGQgbmV3IGZ1bmN0aW9uIHRvIGhhbmRsZSBzY3JlZW5zaG90IHNhdmluZ1xuZnVuY3Rpb24gc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAvLyBHZXQgZXhpc3Rpbmcgc2NyZWVuc2hvdHMgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSByZXN1bHQuc2NyZWVuc2hvdHMgfHwgW107XG4gICAgICAgICAgICAvLyBBZGQgbmV3IHNjcmVlbnNob3RcbiAgICAgICAgICAgIHN0b3JlU2NyZWVuc2hvdHMucHVzaChbc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZF0pO1xuICAgICAgICAgICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNjcmVlbnNob3RzOiBzdG9yZVNjcmVlbnNob3RzIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIDtcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NhdmVEYXRhJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGEuYWN0aW9uU2VxdWVuY2VJZCA9IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGEudXVpZCA9IHV1aWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZURhdGEgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVEYXRhICcsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiByZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gcG9wdXBcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBzZW5kUG9wdXAoc2VuZGVyLnRhYj8uaWQsIG1lc3NhZ2UuZGF0YS50aW1lc3RhbXAsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUsIGFjdGlvblNlcXVlbmNlSWQpXG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBzYXZlRGF0YSgpLFxuICAgICAgICAgICAgICAgICAgICBzZW5kUG9wdXAoKF9hID0gc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkLCBtZXNzYWdlLmRhdGEudGltZXN0YW1wLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwgbWVzc2FnZS5kYXRhLCB1dWlkKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzYXZlRGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FwdHVyZSBzY3JlZW5zaG90IG9uIGRlbWFuZFxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjYXB0dXJlU2NyZWVuc2hvdCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBzY3JlZW5zaG90IHJlcXVlc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBtZXNzYWdlLnNjcmVlbnNob3RJZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3MsIG1lc3NhZ2U6IHN1Y2Nlc3MgPyB1bmRlZmluZWQgOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNhcHR1cmVTY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG93bmxvYWQgZGF0YSBvbiB1c2VyIHJlcXVlc3RcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZG93bmxvYWREYXRhJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWREYXRhJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHlpZWxkIGRvd25sb2FkRGF0YUxvY2FsbHkoKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgZG93bmxvYWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NsZWFyTWVtb3J5Q2FjaGUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHNjcmVlbnNob3RzID0gW107XG4gICAgICAgICAgICAgICAgcmVhc29uc0Fubm90YXRpb24gPSBbXTtcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkID0gMDtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgY2xlYXJNZW1vcnlDYWNoZTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0UmVjaXBlJyAmJiAoKF9iID0gc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RSZWNpcGUoc2VuZGVyLnRhYi5pZCwgbWVzc2FnZS51cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZWNpcGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgcmVjaXBlOiByZWNpcGUgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGdldFJlY2lwZTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEluZGljYXRlIHRoYXQgc2VuZFJlc3BvbnNlIHdpbGwgYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIH1cbiAgICB9KSkoKTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcHMgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZXNcbn0pO1xuLy8gQ2FwdHVyZSB0aGUgc2NyZWVuc2hvdCBpbiB0aGUgY3VycmVudCB0YWJcbmZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBbdGFiXSA9IHlpZWxkIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHsgZm9ybWF0OiAnanBlZycsIHF1YWxpdHk6IDI1IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpO1xuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKCk7XG59XG5jb25zdCBzYXZlSFRNTCA9IChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiB7fSB9KTtcbiAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgaHRtbFNuYXBzaG90c1tjdXJyZW50U25hcHNob3RJZF0gPSBodG1sQ29udGVudDtcbiAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xufSk7XG5jb25zdCBzYXZlSW50ZXJhY3Rpb24gPSAoZXZlbnRUeXBlLCB0aW1lc3RhbXAsIHRhcmdldF91cmwsIGh0bWxTbmFwc2hvdElkLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwgdXVpZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgIHRhcmdldF91cmwsXG4gICAgICAgIGh0bWxTbmFwc2hvdElkLFxuICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkOiBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgdXVpZDogdXVpZFxuICAgIH07XG4gICAgbGV0IGludGVyYWN0aW9ucyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3Rpb25zLmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICBzdG9yZUludGVyYWN0aW9ucy5wdXNoKGRhdGEpO1xuICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSk7XG59KTtcbmNvbnN0IHNhdmVTY3JlZW5zaG90ID0gKHdpbmRvd0lkLCB0aW1lc3RhbXApID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIod2luZG93SWQsIHtcbiAgICAgICAgZm9ybWF0OiAnanBlZycsXG4gICAgICAgIHF1YWxpdHk6IDI1XG4gICAgfSk7XG4gICAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9YDtcbiAgICB5aWVsZCBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpO1xufSk7XG5jb25zdCBzZW5kUG9wdXAgPSAodGFiSWQsIHRpbWVzdGFtcCwgZXZlbnRUeXBlLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwgZGF0YSwgdXVpZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcXVlc3Rpb24gPSBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGUsIGRhdGEpO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgcG9wdXBfcHJvYmFiaWxpdHkgJiYgdGFiSWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IHlpZWxkIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnc2hvd19wb3B1cCcsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3aXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ6IHV1aWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSByZXN1bHQucmVhc29uc0Fubm90YXRpb24gfHwgW107XG4gICAgICAgICAgICAgICAgLy8gQWRkIG5ldyByZWFzb25cbiAgICAgICAgICAgICAgICBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLnB1c2gobmV3aXRlbSk7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZWFzb25zQW5ub3RhdGlvbjogc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvcHVwOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8gbGlzdGVuIHRvIHN3aXRjaGVzIGJldHdlZW4gYWN0aXZhdGVkIHRhYnNcbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKChhY3RpdmVJbmZvKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJJZCA9IGFjdGl2ZUluZm8udGFiSWQ7XG4gICAgICAgIGNvbnN0IHRhYiA9IHlpZWxkIGNocm9tZS50YWJzLmdldCh0YWJJZCk7XG4gICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHRhYiB3aXRoIElEOiAke3RhYklkfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBTd2l0Y2hlZCB0byB0YWIgJHt0YWJJZH0gd2l0aCBVUkw6ICR7dGFiLnVybH1gKTtcbiAgICAgICAgaWYgKHRhYi51cmwgJiYgKHRhYi51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSB8fCB0YWIudXJsLmluY2x1ZGVzKCdmaWxlJykpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUodGFiLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKVxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVJbnRlcmFjdGlvbigndGFiQWN0aXZhdGUnLCB0aW1lc3RhbXAsIHRhYi51cmwsIGN1cnJlbnRTbmFwc2hvdElkLCBhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVTY3JlZW5zaG90KHRhYi53aW5kb3dJZCwgdGltZXN0YW1wKVxuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUludGVyYWN0aW9uKCd0YWJBY3RpdmF0ZScsIHRpbWVzdGFtcCwgdGFiLnVybCwgY3VycmVudFNuYXBzaG90SWQsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLCB1dWlkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVNjcmVlbnNob3QodGFiLndpbmRvd0lkLCB0aW1lc3RhbXApLFxuICAgICAgICAgICAgICAgICAgICBzZW5kUG9wdXAodGFiSWQsIHRpbWVzdGFtcCwgJ3RhYkFjdGl2YXRlJywgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIHt9LCB1dWlkKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0YWIgYWN0aXZhdGUgaGFuZGxlcjonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHRhYklkLCB1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgICAgIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCc7XG4gICAgICAgICAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbeyByZXN1bHQ6IGhhc01hdGNoIH1dID0geWllbGQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogKHNlbGVjdG9yLCBtYXRjaFRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFtYXRjaFRleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoX2IgPSAoX2EgPSBlbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaFRleHQudG9Mb3dlckNhc2UoKSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtyZWNpcGUubWF0Y2gsIHJlY2lwZS5tYXRjaF90ZXh0IHx8ICcnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApO1xuICAgIH0pO1xufVxuY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21taXR0ZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChkZXRhaWxzLmZyYW1lSWQgIT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zb2xlLmxvZygnd2ViTmF2aWdhdGlvbiBvbkNvbW1pdHRlZCBldmVudCB0cmlnZ2VyZWQ6JywgZGV0YWlscyk7XG4gICAgaWYgKGRldGFpbHMudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgZGV0YWlscy51cmwuaW5jbHVkZXMoJ2ZpbGUnKSkge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YCk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuaHRtbDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpXG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVTY3JlZW5zaG90KChhd2FpdCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIHV1aWQpLFxuICAgICAgICAgICAgICAgIHNhdmVTY3JlZW5zaG90KCh5aWVsZCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uVHlwZSAhPT0gJ25ldycgJiYgbmF2aWdhdGlvblR5cGUgIT09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCBuYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2VuZFBvcHVwKGRldGFpbHMudGFiSWQsIHRpbWVzdGFtcCwgJ25hdmlnYXRpb24nLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGVcbiAgICAgICAgICAgICAgICB9LCB1dWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICAgIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG59KTtcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuZnVuY3Rpb24gZG93bmxvYWREYXRhTG9jYWxseSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgREFUQS9TRVNTSU9OXyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgdXNlcklkUmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgdXNlcklkOiAnJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB1c2VySWRSZXN1bHQudXNlcklkO1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbEludGVyYWN0aW9ucyA9IFsuLi5zdG9yZUludGVyYWN0aW9ucywgLi4uaW50ZXJhY3Rpb25zXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFNjcmVlbnNob3RzID0gWy4uLnN0b3JlU2NyZWVuc2hvdHMsIC4uLnNjcmVlbnNob3RzXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFJlYXNvbnMgPSBbLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4ucmVhc29uc0Fubm90YXRpb25dO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKTtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25JbmZvQ29udGVudCA9IGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9LCB1c2VyIGlkOiAke2N1cnJlbnRVc2VySWR9LFxcbiBvcmRlciBkZXRhaWxzOiBcXG4gJHtKU09OLnN0cmluZ2lmeShzdG9yZW9yZGVyRGV0YWlscyl9YDtcbiAgICAgICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgICAgICAgIHVybDogJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvbkluZm9Db250ZW50KSxcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vc2Vzc2lvbl9pbmZvLnR4dGAsXG4gICAgICAgICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NuYXBzaG90SWQsIGh0bWxDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhodG1sU25hcHNob3RzKSkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdkYXRhOnRleHQvaHRtbDtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoaHRtbENvbnRlbnQpLFxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWQucmVwbGFjZSgvWzouXS9nLCBcIi1cIil9Lmh0bWxgLFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zJyk7XG4gICAgICAgICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zLFxuICAgICAgICAgICAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICAgICAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbnNEYXRhID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpO1xuICAgICAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGludGVyYWN0aW9uc0RhdGEpLFxuICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMuanNvbmAsXG4gICAgICAgICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBzY3JlZW5zaG90RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgXCItXCIpfS5qcGdgLFxuICAgICAgICAgICAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhciBjYWNoZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtcbiAgICAgICAgICAgICAgICAnaHRtbFNuYXBzaG90cycsXG4gICAgICAgICAgICAgICAgJ2ludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgJ29yZGVyRGV0YWlscycsXG4gICAgICAgICAgICAgICAgJ3NjcmVlbnNob3RzJyxcbiAgICAgICAgICAgICAgICAncmVhc29uc0Fubm90YXRpb24nXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gQWRkIHRoaXMgdmFyaWFibGUgYXQgdGhlIHRvcCB3aXRoIG90aGVyIHN0YXRlIHZhcmlhYmxlc1xubGV0IGxhc3RVcGxvYWRUaW1lc3RhbXAgPSAnJztcbmZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3QgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IGludGVyYWN0aW9ucyBhbmQgZ2V0IHRoZSBsYXRlc3QgdGltZXN0YW1wXG4gICAgICAgICAgICBpZiAoc3RvcmVJbnRlcmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGludGVyYWN0aW9ucyB0byB1cGxvYWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsYXRlc3RUaW1lc3RhbXAgPSBzdG9yZUludGVyYWN0aW9uc1tzdG9yZUludGVyYWN0aW9ucy5sZW5ndGggLSAxXS50aW1lc3RhbXA7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbGF0ZXN0IHRpbWVzdGFtcCBoYXNuJ3QgY2hhbmdlZCwgc2tpcCB1cGxvYWRcbiAgICAgICAgICAgIGlmIChsYXRlc3RUaW1lc3RhbXAgPT09IGxhc3RVcGxvYWRUaW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbmV3IGludGVyYWN0aW9ucyBzaW5jZSBsYXN0IHVwbG9hZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csICctJyk7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gYERBVEEvU0VTU0lPTl8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZDtcbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90cyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgLy8gICBjb25zdCBpbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW4gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICAvLyAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbEludGVyYWN0aW9ucyA9IFsuLi5zdG9yZUludGVyYWN0aW9ucywgLi4uaW50ZXJhY3Rpb25zXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFNjcmVlbnNob3RzID0gWy4uLnN0b3JlU2NyZWVuc2hvdHMsIC4uLnNjcmVlbnNob3RzXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFJlYXNvbnMgPSBbLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4ucmVhc29uc0Fubm90YXRpb25dO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihbXG4gICAgICAgICAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH0sIHVzZXIgaWQ6ICR7Y3VycmVudFVzZXJJZH0gXFxuIG9yZGVyIGRldGFpbHM6IFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgICAgICAgXSwgeyB0eXBlOiAndGV4dC9wbGFpbicgfSk7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbywgYCR7Zm9sZGVyTmFtZX0vc2Vzc2lvbl9pbmZvLnR4dGApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKTtcbiAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBzZXNzaW9uRm9ybURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGh0bWwgc25hcHNob3RzJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQmxvYiA9IG5ldyBCbG9iKFtodG1sQ29udGVudF0sIHsgdHlwZTogJ3RleHQvaHRtbCcgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBodG1sQmxvYiwgYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWR9Lmh0bWxgKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICBvcmRlckRldGFpbHM6IG9yZGVyRGV0YWlsc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uc0Jsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXSwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBqc29uRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBpbnRlcmFjdGlvbnNCbG9iLCBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMuanNvbmApO1xuICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHNjcmVlbnNob3REYXRhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0geWllbGQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYmxvYiwgYCR7Zm9sZGVyTmFtZX0vc2NyZWVuc2hvdHMvJHtzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpfS5qcGdgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE9yaWdpbmFsIHVwbG9hZCBsb2dpYyBoZXJlLi4uXG4gICAgICAgICAgICAvLyAuLi4gKGtlZXAgZXhpc3RpbmcgdXBsb2FkIGNvZGUpIC4uLlxuICAgICAgICAgICAgLy8gQWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWQsIHVwZGF0ZSB0aGUgbGFzdCB1cGxvYWQgdGltZXN0YW1wXG4gICAgICAgICAgICBsYXN0VXBsb2FkVGltZXN0YW1wID0gbGF0ZXN0VGltZXN0YW1wO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgMTAwMDApOyAvLyAxMCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9