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
/* harmony export */   base_url: () => (/* binding */ base_url),
/* harmony export */   data_collector_secret_id: () => (/* binding */ data_collector_secret_id),
/* harmony export */   filter_url: () => (/* binding */ filter_url),
/* harmony export */   folder_name: () => (/* binding */ folder_name),
/* harmony export */   interaction_url: () => (/* binding */ interaction_url),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_include: () => (/* binding */ url_include),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
const popup_probability = 0.15;
const folder_name = `user_interaction_data`;
const zip = true;
const upload_url = 'http://userdatacollect.hailab.io/upload';
const base_url = 'http://userdatacollect.hailab.io';
const data_collector_secret_id = '676a665144398e6967567a2b';
const url_include = 'amazon.com';
const interaction_url = `${base_url}/interactions`;
const filter_url = [
    'https://www.amazon.com/checkout/',
    'https://www.amazon.com/gp/buy/',
    'https://www.amazon.com/a/addresses',
    'https://www.amazon.com/cpe/yourpayments/'
    //   'https://www.amazon.com/gp/product/handle-buy-box/',
    //   'https://www.amazon.com/gp/checkoutportal/',
    //   'https://www.amazon.com/gp/cart/desktop/'
];


/***/ }),

/***/ "./src/injected.ts":
/*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const monkeyPatch = () => {
    window.monkeyPatched = true;
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    // Add this at the top of the file
    const DEBOUNCE_DELAY = 150; // 300ms
    let lastClickTimestamp = 0;
    const TimeOut = 30000;
    function generateHtmlSnapshotId() {
        const url = window.location.href;
        const timestamp = new Date().toISOString();
        return `html_${hashCode(url)}_${timestamp}`;
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
    function generateSelector(element) {
        if (element.id) {
            return `#${element.id}`;
        }
        let path = [];
        let current = element;
        while (current && current !== document.body && current.parentElement) {
            let selector = current.tagName.toLowerCase();
            if (current.className && typeof current.className === 'string') {
                selector += '.' + current.className.trim().replace(/\s+/g, '.');
            }
            let sibling = current;
            let nth = 1;
            while (sibling.previousElementSibling) {
                sibling = sibling.previousElementSibling;
                if (sibling.tagName === current.tagName) {
                    nth++;
                }
            }
            if (nth > 1) {
                selector += `:nth-of-type(${nth})`;
            }
            path.unshift(selector);
            current = current.parentElement;
        }
        return path.join(' > ');
    }
    function captureInteraction(eventType, target, timestamp, selector, url, uuid) {
        function findClickableParent(element, depth = 0, allAttributes = {}) {
            // Base case: if element is null or we've reached max depth
            if (!element || depth >= 5)
                return allAttributes;
            // Check and collect all relevant attributes at current level
            if (element.hasAttribute('data-clickable-id')) {
                allAttributes['data-clickable-id'] = element.getAttribute('data-clickable-id') || '';
            }
            if (element.hasAttribute('data-element-meta-name')) {
                allAttributes['data-element-meta-name'] =
                    element.getAttribute('data-element-meta-name') || '';
            }
            if (element.hasAttribute('data-element-meta-data')) {
                allAttributes['data-element-meta-data'] =
                    element.getAttribute('data-element-meta-data') || '';
            }
            // Continue searching up the tree, passing along collected attributes
            return findClickableParent(element.parentElement, depth + 1, allAttributes);
        }
        const pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
        const allAttributes = findClickableParent(target);
        // Generate new HTML snapshot ID
        const currentSnapshotId = generateHtmlSnapshotId();
        // Create a serializable version of the target
        const serializedTarget = {
            tagName: target.tagName,
            className: target.className,
            id: target.id,
            innerText: target.innerText || target.value || '',
            outerHTML: target.outerHTML
        };
        const markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
        const data = {
            uuid: uuid,
            eventType,
            timestamp: timestamp,
            target: serializedTarget,
            //   targetOuterHTML: target.outerHTML,
            //   targetClass: target.className,
            //   targetId: target.id,
            //   targetText: target.innerText || target.value || '',
            htmlSnapshotId: currentSnapshotId,
            selector: selector || '',
            'data-semantic-id': allAttributes['data-clickable-id'] || '',
            'element-meta-name': allAttributes['data-element-meta-name'] || '',
            'element-meta-data': allAttributes['data-element-meta-data'] || '',
            'page-meta': pageMeta || '',
            url: url || '',
            htmlContent: markedDoc.documentElement.outerHTML
        };
        return data;
    }
    // todo: patch removeEventListener support wrap
    const blockSignals = {};
    const executeDefaultAction = (event) => {
        var _a;
        console.log('executeDefaultAction');
        const element = event.target;
        console.log(element);
        console.log(event);
        if (event.my_default_prevented) {
            console.log('default prevented in original listener');
            return;
        }
        const anchor = element.closest('a');
        if (anchor) {
            window.location.href = anchor.href;
        }
        else if (element.tagName.toLowerCase() === 'input') {
            // if type is submit, submit the form
            if (element.type === 'submit') {
                console.log('submit the form');
                (_a = element.form) === null || _a === void 0 ? void 0 : _a.submit();
            }
        }
    };
    const hasDefaultAction = (event) => {
        const element = event.target;
        const anchor = element.closest('a');
        if (anchor) {
            if (anchor.href.startsWith('javascript:')) {
                return false;
            }
            return true;
        }
        // if id is nav-search-submit-button
        // if (element.id === 'nav-search-submit-button') {
        //   return true
        // }
        if (element.tagName.toLowerCase() === 'input') {
            if (element.type === 'submit') {
                return true;
            }
        }
        return false;
    };
    // Monkey patch addEventListener
    EventTarget.prototype.addEventListener = function (type, listener, options = {}) {
        if (options && options.skip_monkey_patch) {
            return originalAddEventListener.call(this, type, listener, options);
        }
        if (type === 'click' && listener) {
            const wrappedListener = function (event) {
                return __awaiter(this, void 0, void 0, function* () {
                    const target = event.target;
                    if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
                        if (typeof listener === 'function') {
                            listener.call(this, event);
                        }
                        else if (listener && typeof listener.handleEvent === 'function') {
                            listener.handleEvent.call(listener, event);
                        }
                        return;
                    }
                    if (event.just_for_default) {
                        console.log('skip monkey patch');
                        return;
                    }
                    // Add debouncing logic
                    const now = Date.now();
                    if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
                        console.log('[Monkey Patch] Debouncing click event, blocking');
                        if (blockSignals[lastClickTimestamp]) {
                            const signal = blockSignals[lastClickTimestamp].signal;
                            const wait_for_abort = new Promise((resolve, reject) => {
                                if (signal.aborted) {
                                    // If already aborted, resolve immediately
                                    resolve(void 0);
                                }
                                else {
                                    // Otherwise, listen for the abort event
                                    signal.addEventListener('abort', () => resolve(void 0), { once: true });
                                }
                            });
                            yield wait_for_abort;
                            console.log('[Monkey Patch] Debouncing click event, unblocking');
                        }
                        else {
                            console.log('[Monkey Patch] Debouncing click event, no block signal');
                        }
                        if (typeof listener === 'function') {
                            listener.call(this, event);
                        }
                        else if (listener && typeof listener.handleEvent === 'function') {
                            listener.handleEvent.call(listener, event);
                        }
                        return;
                    }
                    lastClickTimestamp = now;
                    blockSignals[lastClickTimestamp] = new AbortController();
                    console.log('[Monkey Patch] Click detected on:', event.target);
                    console.log(event.target);
                    const timestamp = new Date().toISOString();
                    // const anchor = target.closest('a')
                    console.log(event.target);
                    if (hasDefaultAction(event)) {
                        // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
                        console.log('[Monkey Patch] Click on cancelable');
                        event.preventDefault();
                        event.stopPropagation();
                        event.preventDefault = () => {
                            event.my_default_prevented = true;
                        };
                        event.my_default_prevented = false;
                        console.log('after patch event', event);
                        // const targetHref = anchor.href
                        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        try {
                            const screenshotComplete = new Promise((resolve, reject) => {
                                function handleMessage(event) {
                                    if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                        event.data.timestamp === timestamp) {
                                        window.removeEventListener('message', handleMessage);
                                        if (event.data.success) {
                                            resolve(void 0);
                                        }
                                        else {
                                            reject(new Error(event.data.error || 'Screenshot failed'));
                                        }
                                    }
                                }
                                window.addEventListener('message', handleMessage);
                                // Add timeout
                                setTimeout(() => {
                                    window.removeEventListener('message', handleMessage);
                                    reject(new Error('Screenshot timeout'));
                                }, TimeOut);
                            });
                            const interactionComplete = new Promise((resolve, reject) => {
                                function handleMessage1(event) {
                                    if (event.data.type === 'INTERACTION_COMPLETE' &&
                                        event.data.timestamp === timestamp) {
                                        window.removeEventListener('message', handleMessage1);
                                        if (event.data.success) {
                                            resolve(void 0);
                                        }
                                        else {
                                            reject(new Error(event.data.error || 'Interaction failed'));
                                        }
                                    }
                                }
                                window.addEventListener('message', handleMessage1);
                                // Add timeout
                                setTimeout(() => {
                                    window.removeEventListener('message', handleMessage1);
                                    reject(new Error('Interaction timeout'));
                                }, TimeOut);
                            });
                            const data = captureInteraction('click_a', event.target, timestamp, generateSelector(event.target), window.location.href, uuid);
                            // await sleep 5 seconds
                            // await new Promise(resolve => setTimeout(resolve, 5000));
                            // alert("1")
                            window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                            window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                            // alert("3")
                            // Wait for screenshot to complete
                            yield screenshotComplete;
                            yield interactionComplete;
                            // console.log("completed")
                            // debugger
                            // alert("2")
                            // window.location.href = targetHref
                            // re-dispatch the event
                        }
                        catch (error) {
                            console.error('Error:', error);
                        }
                        finally {
                            console.log('running original listener');
                            console.log(listener);
                            blockSignals[lastClickTimestamp].abort();
                            if (typeof listener === 'function') {
                                listener.call(this, event);
                            }
                            else if (listener && typeof listener.handleEvent === 'function') {
                                listener.handleEvent.call(listener, event);
                            }
                            console.log('re-dispatch the event if its not prevented');
                            if (!event.my_default_prevented) {
                                // Clone the original event
                                const newEvent = new MouseEvent(event.type, {
                                    bubbles: event.bubbles,
                                    cancelable: false,
                                    composed: event.composed,
                                    view: event.view,
                                    detail: event.detail,
                                    screenX: event.screenX,
                                    screenY: event.screenY,
                                    clientX: event.clientX,
                                    clientY: event.clientY,
                                    ctrlKey: event.ctrlKey,
                                    altKey: event.altKey,
                                    shiftKey: event.shiftKey,
                                    metaKey: event.metaKey,
                                    button: event.button,
                                    buttons: event.buttons,
                                    relatedTarget: event.relatedTarget
                                });
                                newEvent.just_for_default = true;
                                // Re-dispatch the new event
                                target.dispatchEvent(newEvent);
                            }
                        }
                        return;
                    }
                    try {
                        // Create a promise to wait for screenshot completion
                        const screenshotComplete = new Promise((resolve, reject) => {
                            function handleMessage(event) {
                                if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
                                        reject(new Error(event.data.error || 'Screenshot failed'));
                                    }
                                }
                            }
                            window.addEventListener('message', handleMessage);
                            // Add timeout
                            setTimeout(() => {
                                window.removeEventListener('message', handleMessage);
                                reject(new Error('Screenshot timeout'));
                            }, TimeOut);
                        });
                        const data = captureInteraction('click_b', event.target, timestamp, generateSelector(event.target), window.location.href);
                        // Request screenshot
                        window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                        window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*');
                        const interactionComplete = new Promise((resolve, reject) => {
                            function handleMessage1(event) {
                                if (event.data.type === 'INTERACTION_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage1);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
                                        reject(new Error(event.data.error || 'Interaction failed'));
                                    }
                                }
                            }
                            window.addEventListener('message', handleMessage1);
                            // Add timeout
                            setTimeout(() => {
                                window.removeEventListener('message', handleMessage1);
                                reject(new Error('Interaction timeout'));
                            }, TimeOut);
                        });
                        // Wait for screenshot to complete
                        yield screenshotComplete;
                        yield interactionComplete;
                        // Execute original listener after screenshot is captured
                    }
                    catch (error) {
                        console.error('Error capturing screenshot:', error);
                        // Execute original listener even if screenshot fails
                    }
                    finally {
                        console.log('running original listener');
                        blockSignals[lastClickTimestamp].abort();
                        if (typeof listener === 'function') {
                            listener.call(this, event);
                        }
                        else if (listener && typeof listener.handleEvent === 'function') {
                            listener.handleEvent.call(listener, event);
                        }
                    }
                });
            };
            // Call the original addEventListener with the wrapped listener
            if (options) {
                // if boolean, set passive to true
                if (typeof options === 'boolean') {
                    options = {
                        useCapture: false,
                        passive: false
                    };
                }
                else if (typeof options === 'object') {
                    options.passive = false;
                }
            }
            return originalAddEventListener.call(this, type, wrappedListener, options);
        }
        else {
            // Call the original addEventListener for non-click events
            return originalAddEventListener.call(this, type, listener, options);
        }
    };
    console.log('[Monkey Patch] addEventListener successfully patched.');
    // Function to handle clicks on <a> tags
    function handleAnchorClicks() {
        document.addEventListener('click', function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
                    return;
                }
                if (event.just_for_default) {
                    console.log('skip monkey patch b');
                    return;
                }
                // Add debouncing logic
                const now = Date.now();
                if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
                    console.log('[Monkey Patch] Debouncing anchor click event');
                    return;
                }
                lastClickTimestamp = now;
                blockSignals[lastClickTimestamp] = new AbortController();
                const target = event.target;
                // Find the closest <a> tag in case of nested elements inside the <a>
                // const anchor = target.closest('a')
                if (hasDefaultAction(event)) {
                    // console.log('[Intercepted] Click on <a> tag:', anchor.href)
                    console.log('[Intercepted] Click on cancelable');
                    // if (!anchor.href.startsWith('javascript:')) {
                    event.preventDefault();
                    event.stopPropagation();
                    const timestamp = new Date().toISOString();
                    // const targetHref = anchor.href
                    try {
                        // 监听截图完成的消息
                        const screenshotComplete = new Promise((resolve, reject) => {
                            function handleMessage(event) {
                                if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
                                        reject(new Error(event.data.error || 'Screenshot failed'));
                                    }
                                }
                            }
                            window.addEventListener('message', handleMessage, {
                                capture: true
                            });
                            // 添加超时处理
                            setTimeout(() => {
                                window.removeEventListener('message', handleMessage);
                                reject(new Error('Screenshot timeout'));
                            }, TimeOut); // 3秒超时
                        });
                        // 发送截图请求
                        window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                        const data = captureInteraction('click_c', event.target, timestamp, generateSelector(target), window.location.href);
                        window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*');
                        const interactionComplete = new Promise((resolve, reject) => {
                            function handleMessage1(event) {
                                if (event.data.type === 'INTERACTION_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage1);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
                                        reject(new Error(event.data.error || 'Interaction failed'));
                                    }
                                }
                            }
                            window.addEventListener('message', handleMessage1);
                            // Add timeout
                            setTimeout(() => {
                                window.removeEventListener('message', handleMessage1);
                                reject(new Error('Interaction timeout'));
                            }, TimeOut);
                        });
                        // 等待截图完成
                        yield screenshotComplete;
                        yield interactionComplete;
                        // 截图确认完成后再跳转
                        // window.location.href = targetHref
                    }
                    catch (error) {
                        console.error('Error capturing screenshot:', error);
                        // window.location.href = targetHref
                    }
                    finally {
                        blockSignals[lastClickTimestamp].abort();
                        console.log('re-dispatch the event if its not prevented');
                        if (!event.my_default_prevented) {
                            // Clone the original event
                            const newEvent = new MouseEvent(event.type, {
                                bubbles: event.bubbles,
                                cancelable: false,
                                composed: event.composed,
                                view: event.view,
                                detail: event.detail,
                                screenX: event.screenX,
                                screenY: event.screenY,
                                clientX: event.clientX,
                                clientY: event.clientY,
                                ctrlKey: event.ctrlKey,
                                altKey: event.altKey,
                                shiftKey: event.shiftKey,
                                metaKey: event.metaKey,
                                button: event.button,
                                buttons: event.buttons,
                                relatedTarget: event.relatedTarget
                            });
                            newEvent.just_for_default = true;
                            // Re-dispatch the new event
                            target.dispatchEvent(newEvent);
                        }
                    }
                }
            });
        }, {
            useCapture: true,
            skip_monkey_patch: true,
            passive: false
        }); // Use capture phase to intercept the event earlier
    }
    // Call the function to handle <a> tag clicks
    handleAnchorClicks();
};
if (!window.monkeyPatched) {
    monkeyPatch();
}


/***/ }),

/***/ "./src/utils/util.ts":
/*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findPageMeta: () => (/* binding */ findPageMeta),
/* harmony export */   getClickableElementsInViewport: () => (/* binding */ getClickableElementsInViewport),
/* harmony export */   isFromPopup: () => (/* binding */ isFromPopup),
/* harmony export */   removeClickableMarkers: () => (/* binding */ removeClickableMarkers),
/* harmony export */   update_icon: () => (/* binding */ update_icon)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");

function isFromPopup(element) {
    return element.closest('#reason-modal') !== null;
}
function update_icon(url) {
    console.log('update_icon', url);
    if (url &&
        url.includes(_config__WEBPACK_IMPORTED_MODULE_0__.url_include) &&
        !_config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some((excludeUrl) => url.includes(excludeUrl))) {
        console.log('active icon');
        chrome.action.setIcon({
            path: '../icon.png'
        });
    }
    else {
        console.log('inactive icon');
        chrome.action.setIcon({
            path: '../Inactive_icon.png'
        });
    }
}
function findPageMeta() {
    const htmlElement = document.documentElement;
    const metaData = htmlElement.getAttribute('data-element-meta-data');
    const metaName = htmlElement.getAttribute('data-element-meta-name');
    return {
        metaData: metaData,
        metaName: metaName
    };
}
function getClickableElementsInViewport() {
    // Select all potential clickable elements
    const documentCopy = document.cloneNode(true);
    const allElements = documentCopy.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport and add marker
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            // Add marker attribute to the element
            element.setAttribute('extension-clickable-marker', 'true');
        }
    });
    return documentCopy;
}
// Add cleanup function to remove markers when needed
function removeClickableMarkers() {
    document.querySelectorAll('[extension-clickable-marker]').forEach((element) => {
        element.removeAttribute('extension-clickable-marker');
    });
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"injected": 0
/******/ 		};
/******/
/******/ 		// no chunk on demand loading
/******/
/******/ 		// no prefetching
/******/
/******/ 		// no preloaded
/******/
/******/ 		// no HMR
/******/
/******/ 		// no HMR manifest
/******/
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_extension_typescript_starter"] = self["webpackChunkchrome_extension_typescript_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/injected.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDeUY7QUFDckQ7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjLEdBQUcsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkVBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsWUFBWTtBQUMxRztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGdEQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDhEQUE4RDtBQUMvRyxpREFBaUQsdURBQXVEO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSw2Q0FBNkMsa0RBQWtEO0FBQy9GLDZDQUE2QywyQ0FBMkM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDLHlCQUF5QjtBQUN6QjtBQUNBLDZDQUE2QyxrREFBa0Q7QUFDL0Y7QUFDQSw2Q0FBNkMsMkNBQTJDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdoQm9EO0FBQzdDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixnREFBVztBQUNoQyxTQUFTLCtDQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7OztVQ3BEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvaW5qZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1O1xuZXhwb3J0IGNvbnN0IGZvbGRlcl9uYW1lID0gYHVzZXJfaW50ZXJhY3Rpb25fZGF0YWA7XG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCc7XG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8nO1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICc2NzZhNjY1MTQ0Mzk4ZTY5Njc1NjdhMmInO1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlID0gJ2FtYXpvbi5jb20nO1xuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNgO1xuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nXG4gICAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gICAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAgIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2FydC9kZXNrdG9wLydcbl07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGZpbmRQYWdlTWV0YSwgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LCBpc0Zyb21Qb3B1cCB9IGZyb20gJy4vdXRpbHMvdXRpbCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmNvbnN0IG1vbmtleVBhdGNoID0gKCkgPT4ge1xuICAgIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZTtcbiAgICBjb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbiAgICAvLyBBZGQgdGhpcyBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgY29uc3QgREVCT1VOQ0VfREVMQVkgPSAxNTA7IC8vIDMwMG1zXG4gICAgbGV0IGxhc3RDbGlja1RpbWVzdGFtcCA9IDA7XG4gICAgY29uc3QgVGltZU91dCA9IDMwMDAwO1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgICAgICBsZXQgaGFzaCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICBoYXNoIHw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKTtcbiAgICAgICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gYCMke2VsZW1lbnQuaWR9YDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aCA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmNsYXNzTmFtZSAmJiB0eXBlb2YgY3VycmVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgKz0gJy4nICsgY3VycmVudC5jbGFzc05hbWUudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzaWJsaW5nID0gY3VycmVudDtcbiAgICAgICAgICAgIGxldCBudGggPSAxO1xuICAgICAgICAgICAgd2hpbGUgKHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gY3VycmVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG50aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChudGggPiAxKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgKz0gYDpudGgtb2YtdHlwZSgke250aH0pYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGgudW5zaGlmdChzZWxlY3Rvcik7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0YXJnZXQsIHRpbWVzdGFtcCwgc2VsZWN0b3IsIHVybCwgdXVpZCkge1xuICAgICAgICBmdW5jdGlvbiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQsIGRlcHRoID0gMCwgYWxsQXR0cmlidXRlcyA9IHt9KSB7XG4gICAgICAgICAgICAvLyBCYXNlIGNhc2U6IGlmIGVsZW1lbnQgaXMgbnVsbCBvciB3ZSd2ZSByZWFjaGVkIG1heCBkZXB0aFxuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGRlcHRoID49IDUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsbEF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAvLyBDaGVjayBhbmQgY29sbGVjdCBhbGwgcmVsZXZhbnQgYXR0cmlidXRlcyBhdCBjdXJyZW50IGxldmVsXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJykpIHtcbiAgICAgICAgICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSkge1xuICAgICAgICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSA9XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSkge1xuICAgICAgICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb250aW51ZSBzZWFyY2hpbmcgdXAgdGhlIHRyZWUsIHBhc3NpbmcgYWxvbmcgY29sbGVjdGVkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIHJldHVybiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCwgZGVwdGggKyAxLCBhbGxBdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpO1xuICAgICAgICBjb25zdCBhbGxBdHRyaWJ1dGVzID0gZmluZENsaWNrYWJsZVBhcmVudCh0YXJnZXQpO1xuICAgICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIHRhcmdldFxuICAgICAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgICAgICAgdGFnTmFtZTogdGFyZ2V0LnRhZ05hbWUsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAgICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgaW5uZXJUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgIG91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXJrZWREb2MgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIHRhcmdldDogc2VyaWFsaXplZFRhcmdldCxcbiAgICAgICAgICAgIC8vICAgdGFyZ2V0T3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MLFxuICAgICAgICAgICAgLy8gICB0YXJnZXRDbGFzczogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgIC8vICAgdGFyZ2V0SWQ6IHRhcmdldC5pZCxcbiAgICAgICAgICAgIC8vICAgdGFyZ2V0VGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IgfHwgJycsXG4gICAgICAgICAgICAnZGF0YS1zZW1hbnRpYy1pZCc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gfHwgJycsXG4gICAgICAgICAgICAnZWxlbWVudC1tZXRhLW5hbWUnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gfHwgJycsXG4gICAgICAgICAgICAnZWxlbWVudC1tZXRhLWRhdGEnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJ10gfHwgJycsXG4gICAgICAgICAgICAncGFnZS1tZXRhJzogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgICAgIGh0bWxDb250ZW50OiBtYXJrZWREb2MuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgLy8gdG9kbzogcGF0Y2ggcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdXBwb3J0IHdyYXBcbiAgICBjb25zdCBibG9ja1NpZ25hbHMgPSB7fTtcbiAgICBjb25zdCBleGVjdXRlRGVmYXVsdEFjdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlRGVmYXVsdEFjdGlvbicpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICBpZiAoZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IHByZXZlbnRlZCBpbiBvcmlnaW5hbCBsaXN0ZW5lcicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpO1xuICAgICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAvLyBpZiB0eXBlIGlzIHN1Ym1pdCwgc3VibWl0IHRoZSBmb3JtXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQgdGhlIGZvcm0nKTtcbiAgICAgICAgICAgICAgICAoX2EgPSBlbGVtZW50LmZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaGFzRGVmYXVsdEFjdGlvbiA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCBhbmNob3IgPSBlbGVtZW50LmNsb3Nlc3QoJ2EnKTtcbiAgICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICAgICAgaWYgKGFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpZCBpcyBuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cbiAgICAgICAgLy8gaWYgKGVsZW1lbnQuaWQgPT09ICduYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHRydWVcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2tpcF9tb25rZXlfcGF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgYmxvY2tpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLnNpZ25hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3YWl0X2Zvcl9hYm9ydCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IGFib3J0ZWQsIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbGlzdGVuIGZvciB0aGUgYWJvcnQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlc29sdmUodm9pZCAwKSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgd2FpdF9mb3JfYWJvcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIHVuYmxvY2tpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBubyBibG9jayBzaWduYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXN0Q2xpY2tUaW1lc3RhbXAgPSBub3c7XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgcGF0Y2ggZXZlbnQnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKCdjbGlja19hJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsIGdlbmVyYXRlU2VsZWN0b3IoZXZlbnQudGFyZ2V0KSwgd2luZG93LmxvY2F0aW9uLmhyZWYsIHV1aWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNsZWVwIDUgc2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoXCIxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChcIjNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgc2NyZWVuc2hvdENvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGludGVyYWN0aW9uQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb21wbGV0ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlLWRpc3BhdGNoIHRoZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdG8gd2FpdCBmb3Igc2NyZWVuc2hvdCBjb21wbGV0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiYgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKCdjbGlja19iJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsIGdlbmVyYXRlU2VsZWN0b3IoZXZlbnQudGFyZ2V0KSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBzY3JlZW5zaG90Q29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBpbnRlcmFjdGlvbkNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIG9yaWdpbmFsIGxpc3RlbmVyIGV2ZW4gaWYgc2NyZWVuc2hvdCBmYWlsc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYm9vbGVhbiwgc2V0IHBhc3NpdmUgdG8gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG5vbi1jbGljayBldmVudHNcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpO1xuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjbGlja3Mgb24gPGE+IHRhZ3NcbiAgICBmdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoIGInKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGFuY2hvciBjbGljayBldmVudCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3RDbGlja1RpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgICAgICAgICBibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXSA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCA8YT4gdGFnIGluIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIGluc2lkZSB0aGUgPGE+XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiBjYW5jZWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebkeWQrOaIquWbvuWujOaIkOeahOa2iOaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDotoXml7blpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpOyAvLyAz56eS6LaF5pe2XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPkemAgeaIquWbvuivt+axglxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKCdjbGlja19jJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsIGdlbmVyYXRlU2VsZWN0b3IodGFyZ2V0KSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgc2NyZWVuc2hvdENvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgaW50ZXJhY3Rpb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b246IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdXNlQ2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgIHNraXBfbW9ua2V5X3BhdGNoOiB0cnVlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7IC8vIFVzZSBjYXB0dXJlIHBoYXNlIHRvIGludGVyY2VwdCB0aGUgZXZlbnQgZWFybGllclxuICAgIH1cbiAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBoYW5kbGUgPGE+IHRhZyBjbGlja3NcbiAgICBoYW5kbGVBbmNob3JDbGlja3MoKTtcbn07XG5pZiAoIXdpbmRvdy5tb25rZXlQYXRjaGVkKSB7XG4gICAgbW9ua2V5UGF0Y2goKTtcbn1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlIH0gZnJvbSAnLi4vY29uZmlnJztcbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybCk7XG4gICAgaWYgKHVybCAmJlxuICAgICAgICB1cmwuaW5jbHVkZXModXJsX2luY2x1ZGUpICYmXG4gICAgICAgICFmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJyk7XG4gICAgICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICAgICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKTtcbiAgICAgICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgICAgICAgIHBhdGg6ICcuLi9JbmFjdGl2ZV9pY29uLnBuZydcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBtZXRhRGF0YSA9IGh0bWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpO1xuICAgIGNvbnN0IG1ldGFOYW1lID0gaHRtbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWV0YURhdGE6IG1ldGFEYXRhLFxuICAgICAgICBtZXRhTmFtZTogbWV0YU5hbWVcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAgICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICAgICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkb2N1bWVudENvcHk7XG59XG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyJyk7XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluamVjdGVkXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9leHRlbnNpb25fdHlwZXNjcmlwdF9zdGFydGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2Nocm9tZV9leHRlbnNpb25fdHlwZXNjcmlwdF9zdGFydGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5qZWN0ZWQudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
