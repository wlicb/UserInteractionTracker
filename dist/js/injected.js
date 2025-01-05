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
var popup_probability = 0.15;
var folder_name = "user_interaction_data";
var zip = true;
var upload_url = 'http://userdatacollect.hailab.io/upload';
var base_url = 'http://userdatacollect.hailab.io';
var data_collector_secret_id = '676a665144398e6967567a2b';
var url_include = 'amazon.com';
var interaction_url = "".concat(base_url, "/interactions");
var filter_url = ['https://www.amazon.com/checkout/', 'https://www.amazon.com/gp/buy/', 'https://www.amazon.com/a/addresses', 'https://www.amazon.com/cpe/yourpayments/'
//   'https://www.amazon.com/gp/product/handle-buy-box/',
//   'https://www.amazon.com/gp/checkoutportal/',
//   'https://www.amazon.com/gp/cart/desktop/'
];

/***/ }),

/***/ "./src/utils/util.ts":
/*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findPageMeta: () => (/* binding */ findPageMeta),
/* harmony export */   generateHtmlSnapshotId: () => (/* binding */ generateHtmlSnapshotId),
/* harmony export */   getClickableElementsInViewport: () => (/* binding */ getClickableElementsInViewport),
/* harmony export */   hashCode: () => (/* binding */ hashCode),
/* harmony export */   isFromPopup: () => (/* binding */ isFromPopup),
/* harmony export */   removeClickableMarkers: () => (/* binding */ removeClickableMarkers),
/* harmony export */   shouldExclude: () => (/* binding */ shouldExclude),
/* harmony export */   update_icon: () => (/* binding */ update_icon)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");

function isFromPopup(element) {
  return element.closest('#reason-modal') !== null;
}
function update_icon(url) {
  console.log('update_icon', url);
  if (url && url.includes(_config__WEBPACK_IMPORTED_MODULE_0__.url_include) && !_config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some(function (excludeUrl) {
    return url.includes(excludeUrl);
  })) {
    console.log('active icon');
    chrome.action.setIcon({
      path: '../icon.png'
    });
  } else {
    console.log('inactive icon');
    chrome.action.setIcon({
      path: '../Inactive_icon.png'
    });
  }
}
function findPageMeta() {
  var all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]');
  var groupedResult = {};
  all_element_with_meta_data.forEach(function (element) {
    var metaName = element.getAttribute('data-element-meta-name');
    var metaData = element.getAttribute('data-element-meta-data');
    if (!groupedResult[metaName]) {
      groupedResult[metaName] = [];
    }
    groupedResult[metaName].push(JSON.parse(metaData));
  });
  return groupedResult;
}
function getClickableElementsInViewport() {
  // Select all potential clickable elements
  var documentCopy = document.cloneNode(true);
  var allElements = documentCopy.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');

  // Check if each element is in the viewport and add marker
  allElements.forEach(function (element) {
    var rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      // Add marker attribute to the element
      element.setAttribute('visible-clickable-element-marker', 'true');
    }
  });
  return documentCopy;
}

// Add cleanup function to remove markers when needed
function removeClickableMarkers() {
  document.querySelectorAll('[visible-clickable-element-marker]').forEach(function (element) {
    element.removeAttribute('visible-clickable-element-marker');
  });
}
function shouldExclude(url) {
  return !url.includes(_config__WEBPACK_IMPORTED_MODULE_0__.url_include) || _config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some(function (excludeUrl) {
    return url.includes(excludeUrl);
  });
}
function generateHtmlSnapshotId(uuid) {
  var url = window.location.href;
  var timestamp = new Date().toISOString();
  return "html_".concat(hashCode(url), "_").concat(timestamp, "_").concat(uuid);
}
function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  console.log('Hash value before return:', hash);
  return hash.toString();
}

/***/ }),

/***/ "./node_modules/@medv/finder/finder.js":
/*!*********************************************!*\
  !*** ./node_modules/@medv/finder/finder.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attr: () => (/* binding */ attr),
/* harmony export */   className: () => (/* binding */ className),
/* harmony export */   finder: () => (/* binding */ finder),
/* harmony export */   idName: () => (/* binding */ idName),
/* harmony export */   tagName: () => (/* binding */ tagName)
/* harmony export */ });
// License: MIT
// Author: Anton Medvedev <anton@medv.io>
// Source: https://github.com/antonmedv/finder
const acceptedAttrNames = new Set(['role', 'name', 'aria-label', 'rel', 'href']);
/** Check if attribute name and value are word-like. */
function attr(name, value) {
    let nameIsOk = acceptedAttrNames.has(name);
    nameIsOk ||= name.startsWith('data-') && wordLike(name);
    let valueIsOk = wordLike(value) && value.length < 100;
    valueIsOk ||= value.startsWith('#') && wordLike(value.slice(1));
    return nameIsOk && valueIsOk;
}
/** Check if id name is word-like. */
function idName(name) {
    return wordLike(name);
}
/** Check if class name is word-like. */
function className(name) {
    return wordLike(name);
}
/** Check if tag name is word-like. */
function tagName(name) {
    return true;
}
/** Finds unique CSS selectors for the given element. */
function finder(input, options) {
    if (input.nodeType !== Node.ELEMENT_NODE) {
        throw new Error(`Can't generate CSS selector for non-element node type.`);
    }
    if (input.tagName.toLowerCase() === 'html') {
        return 'html';
    }
    const defaults = {
        root: document.body,
        idName: idName,
        className: className,
        tagName: tagName,
        attr: attr,
        timeoutMs: 1000,
        seedMinLength: 3,
        optimizedMinLength: 2,
        maxNumberOfPathChecks: Infinity,
    };
    const startTime = new Date();
    const config = { ...defaults, ...options };
    const rootDocument = findRootDocument(config.root, defaults);
    let foundPath;
    let count = 0;
    for (const candidate of search(input, config, rootDocument)) {
        const elapsedTimeMs = new Date().getTime() - startTime.getTime();
        if (elapsedTimeMs > config.timeoutMs ||
            count >= config.maxNumberOfPathChecks) {
            const fPath = fallback(input, rootDocument);
            if (!fPath) {
                throw new Error(`Timeout: Can't find a unique selector after ${config.timeoutMs}ms`);
            }
            return selector(fPath);
        }
        count++;
        if (unique(candidate, rootDocument)) {
            foundPath = candidate;
            break;
        }
    }
    if (!foundPath) {
        throw new Error(`Selector was not found.`);
    }
    const optimized = [
        ...optimize(foundPath, input, config, rootDocument, startTime),
    ];
    optimized.sort(byPenalty);
    if (optimized.length > 0) {
        return selector(optimized[0]);
    }
    return selector(foundPath);
}
function* search(input, config, rootDocument) {
    const stack = [];
    let paths = [];
    let current = input;
    let i = 0;
    while (current && current !== rootDocument) {
        const level = tie(current, config);
        for (const node of level) {
            node.level = i;
        }
        stack.push(level);
        current = current.parentElement;
        i++;
        paths.push(...combinations(stack));
        if (i >= config.seedMinLength) {
            paths.sort(byPenalty);
            for (const candidate of paths) {
                yield candidate;
            }
            paths = [];
        }
    }
    paths.sort(byPenalty);
    for (const candidate of paths) {
        yield candidate;
    }
}
function wordLike(name) {
    if (/^[a-z\-]{3,}$/i.test(name)) {
        const words = name.split(/-|[A-Z]/);
        for (const word of words) {
            if (word.length <= 2) {
                return false;
            }
            if (/[^aeiou]{4,}/i.test(word)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
function tie(element, config) {
    const level = [];
    const elementId = element.getAttribute('id');
    if (elementId && config.idName(elementId)) {
        level.push({
            name: '#' + CSS.escape(elementId),
            penalty: 0,
        });
    }
    for (let i = 0; i < element.classList.length; i++) {
        const name = element.classList[i];
        if (config.className(name)) {
            level.push({
                name: '.' + CSS.escape(name),
                penalty: 1,
            });
        }
    }
    for (let i = 0; i < element.attributes.length; i++) {
        const attr = element.attributes[i];
        if (config.attr(attr.name, attr.value)) {
            level.push({
                name: `[${CSS.escape(attr.name)}="${CSS.escape(attr.value)}"]`,
                penalty: 2,
            });
        }
    }
    const tagName = element.tagName.toLowerCase();
    if (config.tagName(tagName)) {
        level.push({
            name: tagName,
            penalty: 5,
        });
        const index = indexOf(element, tagName);
        if (index !== undefined) {
            level.push({
                name: nthOfType(tagName, index),
                penalty: 10,
            });
        }
    }
    const nth = indexOf(element);
    if (nth !== undefined) {
        level.push({
            name: nthChild(tagName, nth),
            penalty: 50,
        });
    }
    return level;
}
function selector(path) {
    let node = path[0];
    let query = node.name;
    for (let i = 1; i < path.length; i++) {
        const level = path[i].level || 0;
        if (node.level === level - 1) {
            query = `${path[i].name} > ${query}`;
        }
        else {
            query = `${path[i].name} ${query}`;
        }
        node = path[i];
    }
    return query;
}
function penalty(path) {
    return path.map((node) => node.penalty).reduce((acc, i) => acc + i, 0);
}
function byPenalty(a, b) {
    return penalty(a) - penalty(b);
}
function indexOf(input, tagName) {
    const parent = input.parentNode;
    if (!parent) {
        return undefined;
    }
    let child = parent.firstChild;
    if (!child) {
        return undefined;
    }
    let i = 0;
    while (child) {
        if (child.nodeType === Node.ELEMENT_NODE &&
            (tagName === undefined ||
                child.tagName.toLowerCase() === tagName)) {
            i++;
        }
        if (child === input) {
            break;
        }
        child = child.nextSibling;
    }
    return i;
}
function fallback(input, rootDocument) {
    let i = 0;
    let current = input;
    const path = [];
    while (current && current !== rootDocument) {
        const tagName = current.tagName.toLowerCase();
        const index = indexOf(current, tagName);
        if (index === undefined) {
            return;
        }
        path.push({
            name: nthOfType(tagName, index),
            penalty: NaN,
            level: i,
        });
        current = current.parentElement;
        i++;
    }
    if (unique(path, rootDocument)) {
        return path;
    }
}
function nthChild(tagName, index) {
    if (tagName === 'html') {
        return 'html';
    }
    return `${tagName}:nth-child(${index})`;
}
function nthOfType(tagName, index) {
    if (tagName === 'html') {
        return 'html';
    }
    return `${tagName}:nth-of-type(${index})`;
}
function* combinations(stack, path = []) {
    if (stack.length > 0) {
        for (let node of stack[0]) {
            yield* combinations(stack.slice(1, stack.length), path.concat(node));
        }
    }
    else {
        yield path;
    }
}
function findRootDocument(rootNode, defaults) {
    if (rootNode.nodeType === Node.DOCUMENT_NODE) {
        return rootNode;
    }
    if (rootNode === defaults.root) {
        return rootNode.ownerDocument;
    }
    return rootNode;
}
function unique(path, rootDocument) {
    const css = selector(path);
    switch (rootDocument.querySelectorAll(css).length) {
        case 0:
            throw new Error(`Can't select any node with this selector: ${css}`);
        case 1:
            return true;
        default:
            return false;
    }
}
function* optimize(path, input, config, rootDocument, startTime) {
    if (path.length > 2 && path.length > config.optimizedMinLength) {
        for (let i = 1; i < path.length - 1; i++) {
            const elapsedTimeMs = new Date().getTime() - startTime.getTime();
            if (elapsedTimeMs > config.timeoutMs) {
                return;
            }
            const newPath = [...path];
            newPath.splice(i, 1);
            if (unique(newPath, rootDocument) &&
                rootDocument.querySelector(selector(newPath)) === input) {
                yield newPath;
                yield* optimize(newPath, input, config, rootDocument, startTime);
            }
        }
    }
}


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
/*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _medv_finder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @medv/finder */ "./node_modules/@medv/finder/finder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



// extend window

var monkeyPatch = function monkeyPatch() {
  var url = window.location.href;
  if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(url)) {
    return;
  }
  window.monkeyPatched = true;
  var originalAddEventListener = EventTarget.prototype.addEventListener;

  // Add this at the top of the file
  var DEBOUNCE_DELAY = 150; // 300ms
  var lastClickTimestamp = 0;
  var TimeOut = 30000;
  function captureInteraction(eventType, target, timestamp, selector, url, uuid) {
    function findClickableParent(element) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var allAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // Base case: if element is null or we've reached max depth
      if (!element || depth >= 15) return allAttributes;

      // Check and collect all relevant attributes at current level
      if (element.hasAttribute('data-clickable-id')) {
        allAttributes['data-clickable-id'] = element.getAttribute('data-clickable-id') || '';
      }
      if (element.hasAttribute('data-element-meta-name')) {
        allAttributes['data-element-meta-name'] = element.getAttribute('data-element-meta-name') || '';
      }
      if (element.hasAttribute('data-element-meta-data')) {
        allAttributes['data-element-meta-data'] = element.getAttribute('data-element-meta-data') || '';
      }

      // Continue searching up the tree, passing along collected attributes
      return findClickableParent(element.parentElement, depth + 1, allAttributes);
    }
    var pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
    var allAttributes = findClickableParent(target);
    // Generate new HTML snapshot ID
    var currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(uuid);

    // Create a serializable version of the target
    var serializedTarget = {
      tagName: target.tagName,
      className: target.className,
      id: target.id,
      innerText: target.innerText || target.value || '',
      outerHTML: target.outerHTML
    };
    var markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
    var data = {
      uuid: uuid,
      eventType: eventType,
      timestamp: timestamp,
      target: serializedTarget,
      // Replace direct DOM element with serializable object
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
  var blockSignals = {};
  var executeDefaultAction = function executeDefaultAction(event) {
    console.log('executeDefaultAction');
    var element = event.target;
    console.log(element);
    console.log(event);
    if (event.my_default_prevented) {
      console.log('default prevented in original listener');
      return;
    }
    var anchor = element.closest('a');
    if (anchor) {
      window.location.href = anchor.href;
    } else if (element.tagName.toLowerCase() === 'input') {
      // if type is submit, submit the form
      if (element.type === 'submit') {
        var _element$form;
        console.log('submit the form');
        (_element$form = element.form) === null || _element$form === void 0 || _element$form.submit();
      }
    }
  };
  var hasDefaultAction = function hasDefaultAction(event) {
    var element = event.target;
    var anchor = element.closest('a');
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
  EventTarget.prototype.addEventListener = function (type, listener) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (options && options.skip_monkey_patch) {
      return originalAddEventListener.call(this, type, listener, options);
    }
    if (type === 'click' && listener) {
      var wrappedListener = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
          var target, now, signal, wait_for_abort, timestamp, _uuid, screenshotComplete, interactionComplete, data, newEvent, uuid, _screenshotComplete, _data, _interactionComplete;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                target = event.target;
                if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
                  _context.next = 4;
                  break;
                }
                if (typeof listener === 'function') {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                  listener.handleEvent.call(listener, event);
                }
                return _context.abrupt("return");
              case 4:
                if (!event.just_for_default) {
                  _context.next = 7;
                  break;
                }
                console.log('skip monkey patch');
                return _context.abrupt("return");
              case 7:
                // Add debouncing logic
                now = Date.now();
                if (!(now - lastClickTimestamp < DEBOUNCE_DELAY)) {
                  _context.next = 21;
                  break;
                }
                console.log('[Monkey Patch] Debouncing click event, blocking');
                if (!blockSignals[lastClickTimestamp]) {
                  _context.next = 18;
                  break;
                }
                signal = blockSignals[lastClickTimestamp].signal;
                wait_for_abort = new Promise(function (resolve, reject) {
                  if (signal.aborted) {
                    // If already aborted, resolve immediately
                    resolve(void 0);
                  } else {
                    // Otherwise, listen for the abort event
                    signal.addEventListener('abort', function () {
                      return resolve(void 0);
                    }, {
                      once: true
                    });
                  }
                });
                _context.next = 15;
                return wait_for_abort;
              case 15:
                console.log('[Monkey Patch] Debouncing click event, unblocking');
                _context.next = 19;
                break;
              case 18:
                console.log('[Monkey Patch] Debouncing click event, no block signal');
              case 19:
                if (typeof listener === 'function') {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                  listener.handleEvent.call(listener, event);
                }
                return _context.abrupt("return");
              case 21:
                lastClickTimestamp = now;
                blockSignals[lastClickTimestamp] = new AbortController();
                console.log('[Monkey Patch] Click detected on:', event.target);
                console.log(event.target);
                timestamp = new Date().toISOString(); // const anchor = target.closest('a')
                console.log(event.target);
                if (!hasDefaultAction(event)) {
                  _context.next = 59;
                  break;
                }
                // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
                console.log('[Monkey Patch] Click on cancelable');
                event.preventDefault();
                event.stopPropagation();
                event.preventDefault = function () {
                  event.my_default_prevented = true;
                };
                event.my_default_prevented = false;
                console.log('after patch event', event);
                // const targetHref = anchor.href
                _uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                _context.prev = 35;
                screenshotComplete = new Promise(function (resolve, reject) {
                  function handleMessage(event) {
                    if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                      window.removeEventListener('message', handleMessage);
                      if (event.data.success) {
                        resolve(void 0);
                      } else {
                        reject(new Error(event.data.error || 'Screenshot failed'));
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage);

                  // Add timeout
                  setTimeout(function () {
                    window.removeEventListener('message', handleMessage);
                    reject(new Error('Screenshot timeout'));
                  }, TimeOut);
                });
                interactionComplete = new Promise(function (resolve, reject) {
                  function handleMessage1(event) {
                    if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
                      window.removeEventListener('message', handleMessage1);
                      if (event.data.success) {
                        resolve(void 0);
                      } else {
                        reject(new Error(event.data.error || 'Interaction failed'));
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage1);

                  // Add timeout
                  setTimeout(function () {
                    window.removeEventListener('message', handleMessage1);
                    reject(new Error('Interaction timeout'));
                  }, TimeOut);
                });
                data = captureInteraction('click_a', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target), window.location.href, _uuid); // await sleep 5 seconds
                // await new Promise(resolve => setTimeout(resolve, 5000));
                // alert("1")
                window.postMessage({
                  type: 'CAPTURE_SCREENSHOT',
                  timestamp: timestamp,
                  uuid: _uuid
                }, '*');
                window.postMessage({
                  type: 'SAVE_INTERACTION_DATA',
                  data: data,
                  uuid: _uuid
                }, '*');
                // alert("3")
                // Wait for screenshot to complete
                _context.next = 43;
                return screenshotComplete;
              case 43:
                _context.next = 45;
                return interactionComplete;
              case 45:
                _context.next = 50;
                break;
              case 47:
                _context.prev = 47;
                _context.t0 = _context["catch"](35);
                console.error('Error:', _context.t0);
              case 50:
                _context.prev = 50;
                console.log('running original listener');
                console.log(listener);
                blockSignals[lastClickTimestamp].abort();
                if (typeof listener === 'function') {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                  listener.handleEvent.call(listener, event);
                }
                console.log('re-dispatch the event if its not prevented');
                if (!event.my_default_prevented) {
                  // Clone the original event
                  newEvent = new MouseEvent(event.type, {
                    bubbles: event.bubbles,
                    cancelable: false,
                    // Ensures the default behavior occurs
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
                return _context.finish(50);
              case 58:
                return _context.abrupt("return");
              case 59:
                uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                _context.prev = 60;
                // Create a promise to wait for screenshot completion
                _screenshotComplete = new Promise(function (resolve, reject) {
                  function handleMessage(event) {
                    if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                      window.removeEventListener('message', handleMessage);
                      if (event.data.success) {
                        resolve(void 0);
                      } else {
                        reject(new Error(event.data.error || 'Screenshot failed'));
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage);

                  // Add timeout
                  setTimeout(function () {
                    window.removeEventListener('message', handleMessage);
                    reject(new Error('Screenshot timeout'));
                  }, TimeOut);
                });
                _data = captureInteraction('click_b', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target), window.location.href, uuid); // Request screenshot
                window.postMessage({
                  type: 'CAPTURE_SCREENSHOT',
                  timestamp: timestamp,
                  uuid: uuid
                }, '*');
                window.postMessage({
                  type: 'SAVE_INTERACTION_DATA',
                  data: _data,
                  uuid: uuid
                }, '*');
                _interactionComplete = new Promise(function (resolve, reject) {
                  function handleMessage1(event) {
                    if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
                      window.removeEventListener('message', handleMessage1);
                      if (event.data.success) {
                        resolve(void 0);
                      } else {
                        reject(new Error(event.data.error || 'Interaction failed'));
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage1);

                  // Add timeout
                  setTimeout(function () {
                    window.removeEventListener('message', handleMessage1);
                    reject(new Error('Interaction timeout'));
                  }, TimeOut);
                }); // Wait for screenshot to complete
                _context.next = 68;
                return _screenshotComplete;
              case 68:
                _context.next = 70;
                return _interactionComplete;
              case 70:
                _context.next = 75;
                break;
              case 72:
                _context.prev = 72;
                _context.t1 = _context["catch"](60);
                console.error('Error capturing screenshot:', _context.t1);
                // Execute original listener even if screenshot fails
              case 75:
                _context.prev = 75;
                console.log('running original listener');
                blockSignals[lastClickTimestamp].abort();
                if (typeof listener === 'function') {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                  listener.handleEvent.call(listener, event);
                }
                return _context.finish(75);
              case 80:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[35, 47, 50, 58], [60, 72, 75, 80]]);
        }));
        return function wrappedListener(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      // Call the original addEventListener with the wrapped listener
      if (options) {
        // if boolean, set passive to true
        if (typeof options === 'boolean') {
          options = {
            useCapture: false,
            passive: false
          };
        } else if (_typeof(options) === 'object') {
          options.passive = false;
        }
      }
      return originalAddEventListener.call(this, type, wrappedListener, options);
    } else {
      // Call the original addEventListener for non-click events
      return originalAddEventListener.call(this, type, listener, options);
    }
  };
  console.log('[Monkey Patch] addEventListener successfully patched.');

  // Function to handle clicks on <a> tags
  function handleAnchorClicks() {
    document.addEventListener('click', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
        var now, target, timestamp, uuid, screenshotComplete, data, interactionComplete, newEvent;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              if (!event.just_for_default) {
                _context2.next = 5;
                break;
              }
              console.log('skip monkey patch b');
              return _context2.abrupt("return");
            case 5:
              // Add debouncing logic
              now = Date.now();
              if (!(now - lastClickTimestamp < DEBOUNCE_DELAY)) {
                _context2.next = 9;
                break;
              }
              console.log('[Monkey Patch] Debouncing anchor click event');
              return _context2.abrupt("return");
            case 9:
              lastClickTimestamp = now;
              blockSignals[lastClickTimestamp] = new AbortController();
              target = event.target; // Find the closest <a> tag in case of nested elements inside the <a>
              // const anchor = target.closest('a')
              if (!hasDefaultAction(event)) {
                _context2.next = 38;
                break;
              }
              // console.log('[Intercepted] Click on <a> tag:', anchor.href)
              console.log('[Intercepted] Click on cancelable');
              // if (!anchor.href.startsWith('javascript:')) {
              event.preventDefault();
              event.stopPropagation();
              timestamp = new Date().toISOString(); // const targetHref = anchor.href
              uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
              _context2.prev = 18;
              // 监听截图完成的消息
              screenshotComplete = new Promise(function (resolve, reject) {
                function handleMessage(event) {
                  if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                    window.removeEventListener('message', handleMessage);
                    if (event.data.success) {
                      resolve(void 0);
                    } else {
                      reject(new Error(event.data.error || 'Screenshot failed'));
                    }
                  }
                }
                window.addEventListener('message', handleMessage, {
                  capture: true
                });

                // 添加超时处理
                setTimeout(function () {
                  window.removeEventListener('message', handleMessage);
                  reject(new Error('Screenshot timeout'));
                }, TimeOut); // 3秒超时
              }); // 发送截图请求

              window.postMessage({
                type: 'CAPTURE_SCREENSHOT',
                timestamp: timestamp,
                uuid: uuid
              }, '*');
              data = captureInteraction('click_c', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(target), window.location.href, uuid);
              window.postMessage({
                type: 'SAVE_INTERACTION_DATA',
                data: data,
                uuid: uuid
              }, '*');
              interactionComplete = new Promise(function (resolve, reject) {
                function handleMessage1(event) {
                  if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
                    window.removeEventListener('message', handleMessage1);
                    if (event.data.success) {
                      resolve(void 0);
                    } else {
                      reject(new Error(event.data.error || 'Interaction failed'));
                    }
                  }
                }
                window.addEventListener('message', handleMessage1);

                // Add timeout
                setTimeout(function () {
                  window.removeEventListener('message', handleMessage1);
                  reject(new Error('Interaction timeout'));
                }, TimeOut);
              }); // 等待截图完成
              _context2.next = 26;
              return screenshotComplete;
            case 26:
              _context2.next = 28;
              return interactionComplete;
            case 28:
              _context2.next = 33;
              break;
            case 30:
              _context2.prev = 30;
              _context2.t0 = _context2["catch"](18);
              console.error('Error capturing screenshot:', _context2.t0);
              // window.location.href = targetHref
            case 33:
              _context2.prev = 33;
              blockSignals[lastClickTimestamp].abort();
              console.log('re-dispatch the event if its not prevented');
              if (!event.my_default_prevented) {
                // Clone the original event
                newEvent = new MouseEvent(event.type, {
                  bubbles: event.bubbles,
                  cancelable: false,
                  // Ensures the default behavior occurs
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
              return _context2.finish(33);
            case 38:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[18, 30, 33, 38]]);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }(), {
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTztrQkFDdEJDLE1BQU0sRUFBRTFELEtBQUssQ0FBQzBELE1BQU07a0JBQ3BCQyxPQUFPLEVBQUUzRCxLQUFLLENBQUMyRCxPQUFPO2tCQUN0QkMsYUFBYSxFQUFFNUQsS0FBSyxDQUFDNEQ7Z0JBQ3ZCLENBQUMsQ0FBQztnQkFDRnZDLFFBQVEsQ0FBQ08sZ0JBQWdCLEdBQUcsSUFBSTs7Z0JBRWhDO2dCQUNBbEQsTUFBTSxDQUFDbUYsYUFBYSxDQUFDeEMsUUFBUSxDQUFDO2NBQ2hDO2NBQUMsT0FBQWlELFNBQUEsQ0FBQWxILE1BQUE7WUFBQTtZQUFBO2NBQUEsT0FBQWtILFNBQUEsQ0FBQXRILElBQUE7VUFBQTtRQUFBLEdBQUFvSCxRQUFBO01BQUEsQ0FHTjtNQUFBLGlCQUFBSSxHQUFBO1FBQUEsT0FBQUwsS0FBQSxDQUFBekcsS0FBQSxPQUFBRCxTQUFBO01BQUE7SUFBQSxLQUNEO01BQ0V1RyxVQUFVLEVBQUUsSUFBSTtNQUNoQnJELGlCQUFpQixFQUFFLElBQUk7TUFDdkJzRCxPQUFPLEVBQUU7SUFDWCxDQUNGLENBQUMsRUFBQztFQUNKOztFQUVBO0VBQ0FDLGtCQUFrQixDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELElBQUksQ0FBQ3ZPLE1BQU0sQ0FBQ3NJLGFBQWEsRUFBRTtFQUN6QkQsV0FBVyxDQUFDLENBQUM7QUFDZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQG1lZHYvZmluZGVyL2ZpbmRlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2luamVjdGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICc2NzZhNjY1MTQ0Mzk4ZTY5Njc1NjdhMmInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGUgPSAnYW1hem9uLmNvbSdcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl91cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG4iLCJpbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZSB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmIChcbiAgICB1cmwgJiZcbiAgICB1cmwuaW5jbHVkZXModXJsX2luY2x1ZGUpICYmXG4gICAgIWZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICApIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9JbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZykge1xuICByZXR1cm4gIXVybC5pbmNsdWRlcyh1cmxfaW5jbHVkZSkgfHwgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG59XG5leHBvcnQgZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IGhhc2ggPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCB8PSAwXG4gIH1cbiAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICByZXR1cm4gaGFzaC50b1N0cmluZygpXG59IiwiLy8gTGljZW5zZTogTUlUXG4vLyBBdXRob3I6IEFudG9uIE1lZHZlZGV2IDxhbnRvbkBtZWR2LmlvPlxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vYW50b25tZWR2L2ZpbmRlclxuY29uc3QgYWNjZXB0ZWRBdHRyTmFtZXMgPSBuZXcgU2V0KFsncm9sZScsICduYW1lJywgJ2FyaWEtbGFiZWwnLCAncmVsJywgJ2hyZWYnXSk7XG4vKiogQ2hlY2sgaWYgYXR0cmlidXRlIG5hbWUgYW5kIHZhbHVlIGFyZSB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBuYW1lSXNPayA9IGFjY2VwdGVkQXR0ck5hbWVzLmhhcyhuYW1lKTtcbiAgICBuYW1lSXNPayB8fD0gbmFtZS5zdGFydHNXaXRoKCdkYXRhLScpICYmIHdvcmRMaWtlKG5hbWUpO1xuICAgIGxldCB2YWx1ZUlzT2sgPSB3b3JkTGlrZSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMTAwO1xuICAgIHZhbHVlSXNPayB8fD0gdmFsdWUuc3RhcnRzV2l0aCgnIycpICYmIHdvcmRMaWtlKHZhbHVlLnNsaWNlKDEpKTtcbiAgICByZXR1cm4gbmFtZUlzT2sgJiYgdmFsdWVJc09rO1xufVxuLyoqIENoZWNrIGlmIGlkIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHdvcmRMaWtlKG5hbWUpO1xufVxuLyoqIENoZWNrIGlmIGNsYXNzIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHdvcmRMaWtlKG5hbWUpO1xufVxuLyoqIENoZWNrIGlmIHRhZyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWdOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKiBGaW5kcyB1bmlxdWUgQ1NTIHNlbGVjdG9ycyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZGVyKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlucHV0Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdlbmVyYXRlIENTUyBzZWxlY3RvciBmb3Igbm9uLWVsZW1lbnQgbm9kZSB0eXBlLmApO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHJvb3Q6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGlkTmFtZTogaWROYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYXR0cjogYXR0cixcbiAgICAgICAgdGltZW91dE1zOiAxMDAwLFxuICAgICAgICBzZWVkTWluTGVuZ3RoOiAzLFxuICAgICAgICBvcHRpbWl6ZWRNaW5MZW5ndGg6IDIsXG4gICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogSW5maW5pdHksXG4gICAgfTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcbiAgICBjb25zdCByb290RG9jdW1lbnQgPSBmaW5kUm9vdERvY3VtZW50KGNvbmZpZy5yb290LCBkZWZhdWx0cyk7XG4gICAgbGV0IGZvdW5kUGF0aDtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lTXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcyB8fFxuICAgICAgICAgICAgY291bnQgPj0gY29uZmlnLm1heE51bWJlck9mUGF0aENoZWNrcykge1xuICAgICAgICAgICAgY29uc3QgZlBhdGggPSBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KTtcbiAgICAgICAgICAgIGlmICghZlBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRpbWVvdXQ6IENhbid0IGZpbmQgYSB1bmlxdWUgc2VsZWN0b3IgYWZ0ZXIgJHtjb25maWcudGltZW91dE1zfW1zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IoZlBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmICh1bmlxdWUoY2FuZGlkYXRlLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZFBhdGggPSBjYW5kaWRhdGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kUGF0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlbGVjdG9yIHdhcyBub3QgZm91bmQuYCk7XG4gICAgfVxuICAgIGNvbnN0IG9wdGltaXplZCA9IFtcbiAgICAgICAgLi4ub3B0aW1pemUoZm91bmRQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSksXG4gICAgXTtcbiAgICBvcHRpbWl6ZWQuc29ydChieVBlbmFsdHkpO1xuICAgIGlmIChvcHRpbWl6ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3Iob3B0aW1pemVkWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9yKGZvdW5kUGF0aCk7XG59XG5mdW5jdGlvbiogc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgbGV0IHBhdGhzID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gcm9vdERvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gdGllKGN1cnJlbnQsIGNvbmZpZyk7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBsZXZlbCkge1xuICAgICAgICAgICAgbm9kZS5sZXZlbCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sucHVzaChsZXZlbCk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICAgICAgcGF0aHMucHVzaCguLi5jb21iaW5hdGlvbnMoc3RhY2spKTtcbiAgICAgICAgaWYgKGkgPj0gY29uZmlnLnNlZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgY2FuZGlkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgeWllbGQgY2FuZGlkYXRlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdvcmRMaWtlKG5hbWUpIHtcbiAgICBpZiAoL15bYS16XFwtXXszLH0kL2kudGVzdChuYW1lKSkge1xuICAgICAgICBjb25zdCB3b3JkcyA9IG5hbWUuc3BsaXQoLy18W0EtWl0vKTtcbiAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICAgICAgICBpZiAod29yZC5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvW15hZWlvdV17NCx9L2kudGVzdCh3b3JkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdGllKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGNvbnN0IGxldmVsID0gW107XG4gICAgY29uc3QgZWxlbWVudElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKGVsZW1lbnRJZCAmJiBjb25maWcuaWROYW1lKGVsZW1lbnRJZCkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnIycgKyBDU1MuZXNjYXBlKGVsZW1lbnRJZCksXG4gICAgICAgICAgICBwZW5hbHR5OiAwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbaV07XG4gICAgICAgIGlmIChjb25maWcuY2xhc3NOYW1lKG5hbWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnLicgKyBDU1MuZXNjYXBlKG5hbWUpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZWxlbWVudC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICBpZiAoY29uZmlnLmF0dHIoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYFske0NTUy5lc2NhcGUoYXR0ci5uYW1lKX09XCIke0NTUy5lc2NhcGUoYXR0ci52YWx1ZSl9XCJdYCxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChjb25maWcudGFnTmFtZSh0YWdOYW1lKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHRhZ05hbWUsXG4gICAgICAgICAgICBwZW5hbHR5OiA1LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIHRhZ05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG50aCA9IGluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKG50aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoQ2hpbGQodGFnTmFtZSwgbnRoKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxldmVsO1xufVxuZnVuY3Rpb24gc2VsZWN0b3IocGF0aCkge1xuICAgIGxldCBub2RlID0gcGF0aFswXTtcbiAgICBsZXQgcXVlcnkgPSBub2RlLm5hbWU7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gcGF0aFtpXS5sZXZlbCB8fCAwO1xuICAgICAgICBpZiAobm9kZS5sZXZlbCA9PT0gbGV2ZWwgLSAxKSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke3BhdGhbaV0ubmFtZX0gPiAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke3BhdGhbaV0ubmFtZX0gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBwYXRoW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBwZW5hbHR5KHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5tYXAoKG5vZGUpID0+IG5vZGUucGVuYWx0eSkucmVkdWNlKChhY2MsIGkpID0+IGFjYyArIGksIDApO1xufVxuZnVuY3Rpb24gYnlQZW5hbHR5KGEsIGIpIHtcbiAgICByZXR1cm4gcGVuYWx0eShhKSAtIHBlbmFsdHkoYik7XG59XG5mdW5jdGlvbiBpbmRleE9mKGlucHV0LCB0YWdOYW1lKSB7XG4gICAgY29uc3QgcGFyZW50ID0gaW5wdXQucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAgICAgKHRhZ05hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFnTmFtZSkpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgPT09IGlucHV0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gcm9vdERvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGN1cnJlbnQsIHRhZ05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgcGVuYWx0eTogTmFOLFxuICAgICAgICAgICAgbGV2ZWw6IGksXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIGlmICh1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBudGhDaGlsZCh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1jaGlsZCgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24gbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLW9mLXR5cGUoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uKiBjb21iaW5hdGlvbnMoc3RhY2ssIHBhdGggPSBbXSkge1xuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygc3RhY2tbMF0pIHtcbiAgICAgICAgICAgIHlpZWxkKiBjb21iaW5hdGlvbnMoc3RhY2suc2xpY2UoMSwgc3RhY2subGVuZ3RoKSwgcGF0aC5jb25jYXQobm9kZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB5aWVsZCBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmRSb290RG9jdW1lbnQocm9vdE5vZGUsIGRlZmF1bHRzKSB7XG4gICAgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cbiAgICBpZiAocm9vdE5vZGUgPT09IGRlZmF1bHRzLnJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByb290Tm9kZTtcbn1cbmZ1bmN0aW9uIHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBjc3MgPSBzZWxlY3RvcihwYXRoKTtcbiAgICBzd2l0Y2ggKHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNzcykubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3Qgc2VsZWN0IGFueSBub2RlIHdpdGggdGhpcyBzZWxlY3RvcjogJHtjc3N9YCk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uKiBvcHRpbWl6ZShwYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDIgJiYgcGF0aC5sZW5ndGggPiBjb25maWcub3B0aW1pemVkTWluTGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lTXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gWy4uLnBhdGhdO1xuICAgICAgICAgICAgbmV3UGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpZiAodW5pcXVlKG5ld1BhdGgsIHJvb3REb2N1bWVudCkgJiZcbiAgICAgICAgICAgICAgICByb290RG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcihuZXdQYXRoKSkgPT09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgeWllbGQgbmV3UGF0aDtcbiAgICAgICAgICAgICAgICB5aWVsZCogb3B0aW1pemUobmV3UGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBmaW5kUGFnZU1ldGEsXG4gIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCxcbiAgaXNGcm9tUG9wdXAsXG4gIHNob3VsZEV4Y2x1ZGUsXG4gIGdlbmVyYXRlSHRtbFNuYXBzaG90SWRcbn0gZnJvbSAnLi91dGlscy91dGlsJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IGZpbmRlciB9IGZyb20gJ0BtZWR2L2ZpbmRlcidcbi8vIGV4dGVuZCB3aW5kb3dcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbW9ua2V5UGF0Y2hlZDogYm9vbGVhblxuICB9XG59XG5jb25zdCBtb25rZXlQYXRjaCA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgaWYgKHNob3VsZEV4Y2x1ZGUodXJsKSkge1xuICAgIHJldHVyblxuICB9XG4gIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICBjb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclxuXG4gIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgY29uc3QgREVCT1VOQ0VfREVMQVkgPSAxNTAgLy8gMzAwbXNcbiAgbGV0IGxhc3RDbGlja1RpbWVzdGFtcCA9IDBcbiAgY29uc3QgVGltZU91dCA9IDMwMDAwXG4gIFxuXG4gIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICB0YXJnZXQ6IGFueSxcbiAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgIHVybDogc3RyaW5nLFxuICAgIHV1aWQ6IHN0cmluZ1xuICApIHtcbiAgICBmdW5jdGlvbiBmaW5kQ2xpY2thYmxlUGFyZW50KFxuICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgZGVwdGg6IG51bWJlciA9IDAsXG4gICAgICBhbGxBdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgICApOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICAgIC8vIEJhc2UgY2FzZTogaWYgZWxlbWVudCBpcyBudWxsIG9yIHdlJ3ZlIHJlYWNoZWQgbWF4IGRlcHRoXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgZGVwdGggPj0gMTUpIHJldHVybiBhbGxBdHRyaWJ1dGVzXG5cbiAgICAgIC8vIENoZWNrIGFuZCBjb2xsZWN0IGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIGF0IGN1cnJlbnQgbGV2ZWxcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJykgfHwgJydcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpKSB7XG4gICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSA9XG4gICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykpIHtcbiAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID1cbiAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRpbnVlIHNlYXJjaGluZyB1cCB0aGUgdHJlZSwgcGFzc2luZyBhbG9uZyBjb2xsZWN0ZWQgYXR0cmlidXRlc1xuICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEsIGFsbEF0dHJpYnV0ZXMpXG4gICAgfVxuXG4gICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuICAgIGNvbnN0IGFsbEF0dHJpYnV0ZXMgPSBmaW5kQ2xpY2thYmxlUGFyZW50KHRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh1dWlkKVxuXG4gICAgLy8gQ3JlYXRlIGEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIHRhcmdldFxuICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXJnZXQgPSB7XG4gICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgIGNsYXNzTmFtZTogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgIGlkOiB0YXJnZXQuaWQsXG4gICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgb3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MXG4gICAgfVxuICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgIHRhcmdldDogc2VyaWFsaXplZFRhcmdldCwgLy8gUmVwbGFjZSBkaXJlY3QgRE9NIGVsZW1lbnQgd2l0aCBzZXJpYWxpemFibGUgb2JqZWN0XG4gICAgICAvLyAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgIC8vICAgdGFyZ2V0Q2xhc3M6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAvLyAgIHRhcmdldElkOiB0YXJnZXQuaWQsXG4gICAgICAvLyAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgJ2RhdGEtc2VtYW50aWMtaWQnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddIHx8ICcnLFxuICAgICAgJ2VsZW1lbnQtbWV0YS1uYW1lJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddIHx8ICcnLFxuICAgICAgJ2VsZW1lbnQtbWV0YS1kYXRhJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddIHx8ICcnLFxuICAgICAgJ3BhZ2UtbWV0YSc6IHBhZ2VNZXRhIHx8ICcnLFxuICAgICAgdXJsOiB1cmwgfHwgJycsXG4gICAgICBodG1sQ29udGVudDogbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIC8vIHRvZG86IHBhdGNoIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3VwcG9ydCB3cmFwXG4gIGNvbnN0IGJsb2NrU2lnbmFscyA9IHt9XG5cbiAgY29uc3QgZXhlY3V0ZURlZmF1bHRBY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V4ZWN1dGVEZWZhdWx0QWN0aW9uJylcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBpZiAoZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IHByZXZlbnRlZCBpbiBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgYW5jaG9yID0gZWxlbWVudC5jbG9zZXN0KCdhJylcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgLy8gaWYgdHlwZSBpcyBzdWJtaXQsIHN1Ym1pdCB0aGUgZm9ybVxuICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCB0aGUgZm9ybScpXG4gICAgICAgIGVsZW1lbnQuZm9ybT8uc3VibWl0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgaGFzRGVmYXVsdEFjdGlvbiA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgYW5jaG9yID0gZWxlbWVudC5jbG9zZXN0KCdhJylcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICBpZiAoYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIGlmIGlkIGlzIG5hdi1zZWFyY2gtc3VibWl0LWJ1dHRvblxuICAgIC8vIGlmIChlbGVtZW50LmlkID09PSAnbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJykge1xuICAgIC8vICAgcmV0dXJuIHRydWVcbiAgICAvLyB9XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIC8vIE1vbmtleSBwYXRjaCBhZGRFdmVudExpc3RlbmVyXG4gIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNraXBfbW9ua2V5X3BhdGNoKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjbGljaycgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGNvbnN0IHdyYXBwZWRMaXN0ZW5lciA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2gnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIGJsb2NraW5nJylcbiAgICAgICAgICBpZiAoYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLnNpZ25hbFxuICAgICAgICAgICAgY29uc3Qgd2FpdF9mb3JfYWJvcnQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGFscmVhZHkgYWJvcnRlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbGlzdGVuIGZvciB0aGUgYWJvcnQgZXZlbnRcbiAgICAgICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZXNvbHZlKHZvaWQgMCksIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXdhaXQgd2FpdF9mb3JfYWJvcnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCB1bmJsb2NraW5nJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIG5vIGJsb2NrIHNpZ25hbCcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsYXN0Q2xpY2tUaW1lc3RhbXAgPSBub3dcbiAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0gPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KVxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gZmFsc2VcbiAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgcGF0Y2ggZXZlbnQnLCBldmVudClcbiAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAnY2xpY2tfYScsXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICBmaW5kZXIoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNsZWVwIDUgc2Vjb25kc1xuICAgICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiMVwiKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2NyZWVuc2hvdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAvLyByZS1kaXNwYXRjaCB0aGUgZXZlbnRcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKVxuICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJylcbiAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdG8gd2FpdCBmb3Igc2NyZWVuc2hvdCBjb21wbGV0aW9uXG4gICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJiBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgJ2NsaWNrX2InLFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgZmluZGVyKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICBhd2FpdCBzY3JlZW5zaG90Q29tcGxldGVcbiAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBldmVuIGlmIHNjcmVlbnNob3QgZmFpbHNcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKVxuICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIC8vIGlmIGJvb2xlYW4sIHNldCBwYXNzaXZlIHRvIHRydWVcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXNlQ2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIGZvciBub24tY2xpY2sgZXZlbnRzXG4gICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJylcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIDxhPiB0YWdzXG4gIGZ1bmN0aW9uIGhhbmRsZUFuY2hvckNsaWNrcygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoaXNGcm9tUG9wdXAoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoIGInKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgYW5jaG9yIGNsaWNrIGV2ZW50JylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsYXN0Q2xpY2tUaW1lc3RhbXAgPSBub3dcbiAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0gPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IDxhPiB0YWcgaW4gY2FzZSBvZiBuZXN0ZWQgZWxlbWVudHMgaW5zaWRlIHRoZSA8YT5cbiAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuXG4gICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgLy8gaWYgKCFhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOebkeWQrOaIquWbvuWujOaIkOeahOa2iOaBr1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpIC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIOWPkemAgeaIquWbvuivt+axglxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICdjbGlja19jJyxcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgIGZpbmRlcih0YXJnZXQpLFxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG5cbiAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQnKVxuICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgdmlldzogZXZlbnQudmlldyxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgIHNjcmVlblk6IGV2ZW50LnNjcmVlblksXG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgLy8gUmUtZGlzcGF0Y2ggdGhlIG5ldyBldmVudFxuICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZUNhcHR1cmU6IHRydWUsXG4gICAgICAgIHNraXBfbW9ua2V5X3BhdGNoOiB0cnVlLFxuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfVxuICAgICkgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG4gIH1cblxuICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBoYW5kbGUgPGE+IHRhZyBjbGlja3NcbiAgaGFuZGxlQW5jaG9yQ2xpY2tzKClcbn1cbmlmICghd2luZG93Lm1vbmtleVBhdGNoZWQpIHtcbiAgbW9ua2V5UGF0Y2goKVxufVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZSIsImludGVyYWN0aW9uX3VybCIsImNvbmNhdCIsImZpbHRlcl91cmwiLCJpc0Zyb21Qb3B1cCIsImVsZW1lbnQiLCJjbG9zZXN0IiwidXBkYXRlX2ljb24iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJzb21lIiwiZXhjbHVkZVVybCIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncm91cGVkUmVzdWx0IiwiZm9yRWFjaCIsIm1ldGFOYW1lIiwiZ2V0QXR0cmlidXRlIiwibWV0YURhdGEiLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwiZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0IiwiZG9jdW1lbnRDb3B5IiwiY2xvbmVOb2RlIiwiYWxsRWxlbWVudHMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGlja2FibGVNYXJrZXJzIiwicmVtb3ZlQXR0cmlidXRlIiwic2hvdWxkRXhjbHVkZSIsImdlbmVyYXRlSHRtbFNuYXBzaG90SWQiLCJ1dWlkIiwibG9jYXRpb24iLCJocmVmIiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJ2NCIsInV1aWR2NCIsImZpbmRlciIsIm1vbmtleVBhdGNoIiwibW9ua2V5UGF0Y2hlZCIsIm9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciIsIkV2ZW50VGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkRFQk9VTkNFX0RFTEFZIiwibGFzdENsaWNrVGltZXN0YW1wIiwiVGltZU91dCIsImNhcHR1cmVJbnRlcmFjdGlvbiIsImV2ZW50VHlwZSIsInRhcmdldCIsInNlbGVjdG9yIiwiZmluZENsaWNrYWJsZVBhcmVudCIsImRlcHRoIiwidW5kZWZpbmVkIiwiYWxsQXR0cmlidXRlcyIsImhhc0F0dHJpYnV0ZSIsInBhcmVudEVsZW1lbnQiLCJwYWdlTWV0YSIsImN1cnJlbnRTbmFwc2hvdElkIiwic2VyaWFsaXplZFRhcmdldCIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJpZCIsImlubmVyVGV4dCIsIm91dGVySFRNTCIsIm1hcmtlZERvYyIsImRhdGEiLCJodG1sU25hcHNob3RJZCIsImh0bWxDb250ZW50IiwiYmxvY2tTaWduYWxzIiwiZXhlY3V0ZURlZmF1bHRBY3Rpb24iLCJldmVudCIsIm15X2RlZmF1bHRfcHJldmVudGVkIiwiYW5jaG9yIiwidG9Mb3dlckNhc2UiLCJfZWxlbWVudCRmb3JtIiwiZm9ybSIsInN1Ym1pdCIsImhhc0RlZmF1bHRBY3Rpb24iLCJzdGFydHNXaXRoIiwibGlzdGVuZXIiLCJvcHRpb25zIiwic2tpcF9tb25rZXlfcGF0Y2giLCJ3cmFwcGVkTGlzdGVuZXIiLCJfcmVmIiwiX2NhbGxlZSIsIm5vdyIsInNpZ25hbCIsIndhaXRfZm9yX2Fib3J0IiwiX3V1aWQiLCJzY3JlZW5zaG90Q29tcGxldGUiLCJpbnRlcmFjdGlvbkNvbXBsZXRlIiwibmV3RXZlbnQiLCJfc2NyZWVuc2hvdENvbXBsZXRlIiwiX2RhdGEiLCJfaW50ZXJhY3Rpb25Db21wbGV0ZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJoYW5kbGVFdmVudCIsImp1c3RfZm9yX2RlZmF1bHQiLCJyZWplY3QiLCJhYm9ydGVkIiwib25jZSIsIkFib3J0Q29udHJvbGxlciIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlTWVzc2FnZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdWNjZXNzIiwiZXJyb3IiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTWVzc2FnZTEiLCJwb3N0TWVzc2FnZSIsInQwIiwiYWJvcnQiLCJNb3VzZUV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsInZpZXciLCJkZXRhaWwiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwibWV0YUtleSIsImJ1dHRvbiIsImJ1dHRvbnMiLCJyZWxhdGVkVGFyZ2V0IiwiZGlzcGF0Y2hFdmVudCIsInQxIiwiX3giLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImhhbmRsZUFuY2hvckNsaWNrcyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjYXB0dXJlIiwiX3gyIl0sInNvdXJjZVJvb3QiOiIifQ==
