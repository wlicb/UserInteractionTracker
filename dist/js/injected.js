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
/* harmony export */   getClickableElementsInViewport: () => (/* binding */ getClickableElementsInViewport),
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
      element.setAttribute('extension-clickable-marker', 'true');
    }
  });
  return documentCopy;
}

// Add cleanup function to remove markers when needed
function removeClickableMarkers() {
  document.querySelectorAll('[extension-clickable-marker]').forEach(function (element) {
    element.removeAttribute('extension-clickable-marker');
  });
}
function shouldExclude(url) {
  return !url.includes(_config__WEBPACK_IMPORTED_MODULE_0__.url_include) || _config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some(function (excludeUrl) {
    return url.includes(excludeUrl);
  });
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
  function generateHtmlSnapshotId() {
    var url = window.location.href;
    var timestamp = new Date().toISOString();
    return "html_".concat(hashCode(url), "_").concat(timestamp);
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
  // function generateSelector(element: Element): string {
  //   if (element.id) {
  //     return `#${element.id}`
  //   }

  //   let path = []
  //   let current = element

  //   while (current && current !== document.body && current.parentElement) {
  //     let selector = current.tagName.toLowerCase()

  //     if (current.className && typeof current.className === 'string') {
  //       selector += '.' + current.className.trim().replace(/\s+/g, '.')
  //     }

  //     let sibling = current
  //     let nth = 1
  //     while (sibling.previousElementSibling) {
  //       sibling = sibling.previousElementSibling
  //       if (sibling.tagName === current.tagName) {
  //         nth++
  //       }
  //     }
  //     if (nth > 1) {
  //       selector += `:nth-of-type(${nth})`
  //     }

  //     path.unshift(selector)
  //     current = current.parentElement
  //   }

  //   return path.join(' > ')
  // }

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
    var currentSnapshotId = generateHtmlSnapshotId();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGlCQUFpQixHQUFHLElBQUk7QUFDOUIsSUFBTUMsV0FBVywwQkFBMEI7QUFDM0MsSUFBTUMsR0FBRyxHQUFHLElBQUk7QUFDaEIsSUFBTUMsVUFBVSxHQUFHLHlDQUF5QztBQUM1RCxJQUFNQyxRQUFRLEdBQUcsa0NBQWtDO0FBQ25ELElBQU1DLHdCQUF3QixHQUFHLDBCQUEwQjtBQUMzRCxJQUFNQyxXQUFXLEdBQUcsWUFBWTtBQUNoQyxJQUFNQyxlQUFlLE1BQUFDLE1BQUEsQ0FBTUosUUFBUSxrQkFBZTtBQUNsRCxJQUFNSyxVQUFVLEdBQUcsQ0FDeEIsa0NBQWtDLEVBQ2xDLGdDQUFnQyxFQUNoQyxvQ0FBb0MsRUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFBQSxDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCa0Q7QUFFNUMsU0FBU0MsV0FBV0EsQ0FBQ0MsT0FBb0IsRUFBVztFQUN6RCxPQUFPQSxPQUFPLENBQUNDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUFJO0FBQ2xEO0FBQ08sU0FBU0MsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVGLEdBQUcsQ0FBQztFQUMvQixJQUNFQSxHQUFHLElBQ0hBLEdBQUcsQ0FBQ0csUUFBUSxDQUFDWCxnREFBVyxDQUFDLElBQ3pCLENBQUNHLCtDQUFVLENBQUNTLElBQUksQ0FBQyxVQUFDQyxVQUFVO0lBQUEsT0FBS0wsR0FBRyxDQUFDRyxRQUFRLENBQUNFLFVBQVUsQ0FBQztFQUFBLEVBQUMsRUFDMUQ7SUFDQUosT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzFCSSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO01BQ3BCQyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSixDQUFDLE1BQU07SUFDTFIsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzVCSSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO01BQ3BCQyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjtBQUNGO0FBRU8sU0FBU0MsWUFBWUEsQ0FBQSxFQUFHO0VBQzdCLElBQU1DLDBCQUEwQixHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0VBRXhGLElBQU1DLGFBQWEsR0FBRyxDQUFDLENBQUM7RUFFeEJILDBCQUEwQixDQUFDSSxPQUFPLENBQUMsVUFBQ2xCLE9BQU8sRUFBSztJQUM5QyxJQUFNbUIsUUFBUSxHQUFHbkIsT0FBTyxDQUFDb0IsWUFBWSxDQUFDLHdCQUF3QixDQUFDO0lBQy9ELElBQU1DLFFBQVEsR0FBR3JCLE9BQU8sQ0FBQ29CLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztJQUUvRCxJQUFJLENBQUNILGFBQWEsQ0FBQ0UsUUFBUSxDQUFDLEVBQUU7TUFDNUJGLGFBQWEsQ0FBQ0UsUUFBUSxDQUFDLEdBQUcsRUFBRTtJQUM5QjtJQUNBRixhQUFhLENBQUNFLFFBQVEsQ0FBQyxDQUFDRyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxRQUFRLENBQUMsQ0FBQztFQUNwRCxDQUFDLENBQUM7RUFFRixPQUFPSixhQUFhO0FBQ3RCO0FBRU8sU0FBU1EsOEJBQThCQSxDQUFBLEVBQUc7RUFDL0M7RUFDQSxJQUFNQyxZQUFZLEdBQUdYLFFBQVEsQ0FBQ1ksU0FBUyxDQUFDLElBQUksQ0FBYTtFQUN6RCxJQUFNQyxXQUFXLEdBQUdGLFlBQVksQ0FBQ1YsZ0JBQWdCLENBQy9DLGtFQUNGLENBQUM7O0VBRUQ7RUFDQVksV0FBVyxDQUFDVixPQUFPLENBQUMsVUFBQ2xCLE9BQU8sRUFBSztJQUMvQixJQUFNNkIsSUFBSSxHQUFHN0IsT0FBTyxDQUFDOEIscUJBQXFCLENBQUMsQ0FBQztJQUM1QyxJQUNFRCxJQUFJLENBQUNFLEdBQUcsSUFBSSxDQUFDLElBQ2JGLElBQUksQ0FBQ0csSUFBSSxJQUFJLENBQUMsSUFDZEgsSUFBSSxDQUFDSSxNQUFNLEtBQUtDLE1BQU0sQ0FBQ0MsV0FBVyxJQUFJcEIsUUFBUSxDQUFDcUIsZUFBZSxDQUFDQyxZQUFZLENBQUMsSUFDNUVSLElBQUksQ0FBQ1MsS0FBSyxLQUFLSixNQUFNLENBQUNLLFVBQVUsSUFBSXhCLFFBQVEsQ0FBQ3FCLGVBQWUsQ0FBQ0ksV0FBVyxDQUFDLEVBQ3pFO01BQ0E7TUFDQXhDLE9BQU8sQ0FBQ3lDLFlBQVksQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUM7SUFDNUQ7RUFDRixDQUFDLENBQUM7RUFDRixPQUFPZixZQUFZO0FBQ3JCOztBQUVBO0FBQ08sU0FBU2dCLHNCQUFzQkEsQ0FBQSxFQUFHO0VBQ3ZDM0IsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDRSxPQUFPLENBQUMsVUFBQ2xCLE9BQU8sRUFBSztJQUM3RUEsT0FBTyxDQUFDMkMsZUFBZSxDQUFDLDRCQUE0QixDQUFDO0VBQ3ZELENBQUMsQ0FBQztBQUNKO0FBRU8sU0FBU0MsYUFBYUEsQ0FBQ3pDLEdBQVcsRUFBRTtFQUN6QyxPQUFPLENBQUNBLEdBQUcsQ0FBQ0csUUFBUSxDQUFDWCxnREFBVyxDQUFDLElBQUlHLCtDQUFVLENBQUNTLElBQUksQ0FBQyxVQUFDQyxVQUFVO0lBQUEsT0FBS0wsR0FBRyxDQUFDRyxRQUFRLENBQUNFLFVBQVUsQ0FBQztFQUFBLEVBQUM7QUFDaEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpQkFBaUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEdBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0JBQXNCLElBQUksdUJBQXVCO0FBQzNFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsSUFBSSxNQUFNO0FBQy9DO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYyxFQUFFLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVEsYUFBYSxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVEsZUFBZSxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxJQUFJO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BTQTtBQUNBLGlFQUFlLEVBQUUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNEOUIsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLDhFQUE4RSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUs7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcUM7QUFDckM7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENRO0FBQ047QUFDc0I7QUFDakQ7QUFDQSxRQUFRLGtEQUFNO0FBQ2QsZUFBZSxrREFBTTtBQUNyQjtBQUNBO0FBQ0EsbURBQW1ELCtDQUFHO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFlO0FBQzFCO0FBQ0EsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQy9CO0FBQ0EsdUNBQXVDLGlEQUFLO0FBQzVDO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDSnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OytDQ0xBLHFKQUFBcUMsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBN0IsT0FBQSxXQUFBNEIsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE0QyxPQUFBLENBQUE3QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE2QyxjQUFBN0MsQ0FBQSxFQUFBRCxDQUFBLGFBQUErQyxPQUFBN0MsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWlCLE9BQUEsQ0FBQWpCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBaUQsT0FBQSxDQUFBbEIsQ0FBQSxDQUFBbUIsT0FBQSxFQUFBQyxJQUFBLFdBQUFsRCxDQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBOEMsTUFBQSxVQUFBOUMsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBaUQsT0FBQSxDQUFBbEIsQ0FBQSxFQUFBb0IsSUFBQSxXQUFBbEQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQThDLE1BQUEsVUFBQTlDLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUErQywyQkFBQSxlQUFBcEQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQTZDLE1BQUEsQ0FBQTlDLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBMUIsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQW9CLEtBQUEsc0NBQUE5QyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBcUQsSUFBQSxlQUFBakQsQ0FBQSxDQUFBa0QsTUFBQSxHQUFBN0MsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBbUQsUUFBQSxNQUFBMUMsQ0FBQSxRQUFBRSxDQUFBLEdBQUF5QyxtQkFBQSxDQUFBM0MsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQWtELE1BQUEsRUFBQWxELENBQUEsQ0FBQXFELElBQUEsR0FBQXJELENBQUEsQ0FBQXNELEtBQUEsR0FBQXRELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFrRCxNQUFBLFFBQUFoRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF1RCxpQkFBQSxDQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQWtELE1BQUEsSUFBQWxELENBQUEsQ0FBQXdELE1BQUEsV0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFpRCxJQUFBLEdBQUFwQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQXlCLElBQUEsRUFBQWpELENBQUEsQ0FBQWlELElBQUEsa0JBQUFoQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQWtELE1BQUEsWUFBQWxELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNEIsb0JBQUF6RCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFxRCxNQUFBLEVBQUFoRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUFzRCxRQUFBLHFCQUFBbkQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBcUQsTUFBQSxhQUFBckQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBd0QsbUJBQUEsQ0FBQXpELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFxRCxNQUFBLGtCQUFBbEQsQ0FBQSxLQUFBSCxDQUFBLENBQUFxRCxNQUFBLFlBQUFyRCxDQUFBLENBQUEyQixHQUFBLE9BQUFpQyxTQUFBLHVDQUFBekQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFxRCxNQUFBLFlBQUFyRCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUFzRCxRQUFBLFNBQUFyQixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEMsSUFBQSxJQUFBcEQsQ0FBQSxDQUFBRixDQUFBLENBQUErRCxVQUFBLElBQUFuRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBOEQsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBaUUsT0FBQSxlQUFBL0QsQ0FBQSxDQUFBcUQsTUFBQSxLQUFBckQsQ0FBQSxDQUFBcUQsTUFBQSxXQUFBckQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFzRCxRQUFBLFNBQUFyQixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXFELE1BQUEsWUFBQXJELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWlDLFNBQUEsc0NBQUE1RCxDQUFBLENBQUFzRCxRQUFBLFNBQUFyQixDQUFBLGNBQUErQixhQUFBakUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFtRSxNQUFBLEVBQUFsRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBb0UsUUFBQSxHQUFBbkUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFVBQUEsR0FBQXBFLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsUUFBQSxHQUFBckUsQ0FBQSxXQUFBc0UsVUFBQSxDQUFBL0YsSUFBQSxDQUFBd0IsQ0FBQSxjQUFBd0UsY0FBQXZFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUF3RSxVQUFBLFFBQUF6RSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBd0UsVUFBQSxHQUFBekUsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXNFLFVBQUEsTUFBQUosTUFBQSxhQUFBbEUsQ0FBQSxDQUFBN0IsT0FBQSxDQUFBOEYsWUFBQSxjQUFBUSxLQUFBLGlCQUFBaEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBZ0UsSUFBQSxTQUFBaEUsQ0FBQSxPQUFBMkUsS0FBQSxDQUFBM0UsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBckUsQ0FBQSxPQUFBRyxDQUFBLFlBQUFzRCxLQUFBLGFBQUF6RCxDQUFBLEdBQUFQLENBQUEsQ0FBQTRFLE1BQUEsT0FBQXZFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBeUQsSUFBQSxDQUFBdkQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQXlELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXZELEtBQUEsR0FBQVIsQ0FBQSxFQUFBK0QsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXRELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsZ0JBQUFvRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWhELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBeUMsV0FBQSxHQUFBM0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUE4RSxtQkFBQSxhQUFBN0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQThFLFdBQUEsV0FBQS9FLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUE2RSxXQUFBLElBQUE3RSxDQUFBLENBQUFnRixJQUFBLE9BQUFoRixDQUFBLENBQUFpRixJQUFBLGFBQUFoRixDQUFBLFdBQUFFLE1BQUEsQ0FBQStFLGNBQUEsR0FBQS9FLE1BQUEsQ0FBQStFLGNBQUEsQ0FBQWpGLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFrRixTQUFBLEdBQUE5QywwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFvRixLQUFBLGFBQUFuRixDQUFBLGFBQUFpRCxPQUFBLEVBQUFqRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRSxhQUFBLENBQUExQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTRCLGFBQUEsQ0FBQTFDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBOEMsYUFBQSxHQUFBQSxhQUFBLEVBQUE5QyxDQUFBLENBQUFxRixLQUFBLGFBQUFwRixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE0RSxPQUFBLE9BQUExRSxDQUFBLE9BQUFrQyxhQUFBLENBQUF4QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBOEUsbUJBQUEsQ0FBQTVFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFvRCxJQUFBLEdBQUFiLElBQUEsV0FBQWxELENBQUEsV0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBckQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQW9ELElBQUEsV0FBQXBCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF1RixJQUFBLGFBQUF0RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUExQixJQUFBLENBQUE2QixDQUFBLFVBQUFILENBQUEsQ0FBQXNGLE9BQUEsYUFBQXhCLEtBQUEsV0FBQTlELENBQUEsQ0FBQTBFLE1BQUEsU0FBQTNFLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUYsR0FBQSxRQUFBeEYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFnRSxJQUFBLENBQUF2RCxLQUFBLEdBQUFSLENBQUEsRUFBQStELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFoRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTJFLFdBQUEsRUFBQXRELE9BQUEsRUFBQWlELEtBQUEsV0FBQUEsTUFBQTFFLENBQUEsYUFBQTBGLElBQUEsV0FBQTFCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUExRCxDQUFBLE9BQUFxRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTFCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXNFLFVBQUEsQ0FBQW5HLE9BQUEsQ0FBQW9HLGFBQUEsSUFBQXhFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBeUYsTUFBQSxPQUFBdEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBeUUsS0FBQSxFQUFBekUsQ0FBQSxDQUFBMEYsS0FBQSxjQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE0RixJQUFBLFdBQUFBLEtBQUEsU0FBQXZDLElBQUEsV0FBQXJELENBQUEsUUFBQXNFLFVBQUEsSUFBQUUsVUFBQSxrQkFBQXhFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQWlFLElBQUEsS0FBQWxDLGlCQUFBLFdBQUFBLGtCQUFBNUQsQ0FBQSxhQUFBc0QsSUFBQSxRQUFBdEQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBNkYsT0FBQTFGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQThELElBQUEsR0FBQTNELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFxRCxNQUFBLFdBQUFyRCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBZ0UsVUFBQSxDQUFBSyxNQUFBLE1BQUFyRSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBNkQsVUFBQSxDQUFBaEUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQStELFVBQUEsaUJBQUEvRCxDQUFBLENBQUF5RCxNQUFBLFNBQUE0QixNQUFBLGFBQUFyRixDQUFBLENBQUF5RCxNQUFBLFNBQUF1QixJQUFBLFFBQUE1RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTBFLElBQUEsR0FBQWhGLENBQUEsQ0FBQTBELFFBQUEsU0FBQTJCLE1BQUEsQ0FBQXJGLENBQUEsQ0FBQTBELFFBQUEsZ0JBQUFzQixJQUFBLEdBQUFoRixDQUFBLENBQUEyRCxVQUFBLFNBQUEwQixNQUFBLENBQUFyRixDQUFBLENBQUEyRCxVQUFBLGNBQUF2RCxDQUFBLGFBQUE0RSxJQUFBLEdBQUFoRixDQUFBLENBQUEwRCxRQUFBLFNBQUEyQixNQUFBLENBQUFyRixDQUFBLENBQUEwRCxRQUFBLHFCQUFBcEQsQ0FBQSxRQUFBcUMsS0FBQSxxREFBQXFDLElBQUEsR0FBQWhGLENBQUEsQ0FBQTJELFVBQUEsU0FBQTBCLE1BQUEsQ0FBQXJGLENBQUEsQ0FBQTJELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBNUQsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXFFLFVBQUEsQ0FBQUssTUFBQSxNQUFBMUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWdFLFVBQUEsQ0FBQXJFLENBQUEsT0FBQUssQ0FBQSxDQUFBNEQsTUFBQSxTQUFBdUIsSUFBQSxJQUFBckYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQW1GLElBQUEsR0FBQW5GLENBQUEsQ0FBQThELFVBQUEsUUFBQTNELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQXlELE1BQUEsSUFBQW5FLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUEyRCxVQUFBLEtBQUEzRCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUErRCxVQUFBLGNBQUE3RCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBNkMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBMkQsVUFBQSxFQUFBbEMsQ0FBQSxTQUFBNkQsUUFBQSxDQUFBcEYsQ0FBQSxNQUFBb0YsUUFBQSxXQUFBQSxTQUFBL0YsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQW9DLElBQUEsR0FBQS9ELENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFrRSxJQUFBLFFBQUFqRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEwQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBL0QsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBZ0UsSUFBQSxHQUFBaEUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBOEQsTUFBQSxXQUFBQSxPQUFBaEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF1RSxVQUFBLENBQUFLLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFxRSxVQUFBLENBQUF2RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW1FLFVBQUEsS0FBQXBFLENBQUEsY0FBQStGLFFBQUEsQ0FBQTlGLENBQUEsQ0FBQXVFLFVBQUEsRUFBQXZFLENBQUEsQ0FBQW9FLFFBQUEsR0FBQUUsYUFBQSxDQUFBdEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQStELE9BQUFqRyxDQUFBLGFBQUFELENBQUEsUUFBQXVFLFVBQUEsQ0FBQUssTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXFFLFVBQUEsQ0FBQXZFLENBQUEsT0FBQUUsQ0FBQSxDQUFBaUUsTUFBQSxLQUFBbEUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXVFLFVBQUEsa0JBQUFwRSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTJDLGFBQUEsQ0FBQXRFLENBQUEsWUFBQUssQ0FBQSxZQUFBOEMsS0FBQSw4QkFBQThDLGFBQUEsV0FBQUEsY0FBQW5HLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBbUQsUUFBQSxLQUFBM0MsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBK0QsVUFBQSxFQUFBN0QsQ0FBQSxFQUFBK0QsT0FBQSxFQUFBNUQsQ0FBQSxvQkFBQWtELE1BQUEsVUFBQTFCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBb0csbUJBQUEvRixDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTRDLElBQUEsR0FBQXJELENBQUEsQ0FBQWUsQ0FBQSxJQUFBc0UsT0FBQSxDQUFBckMsT0FBQSxDQUFBakMsQ0FBQSxFQUFBbUMsSUFBQSxDQUFBakQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQThGLGtCQUFBaEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUFzRyxTQUFBLGFBQUFoQixPQUFBLFdBQUFwRixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFrRyxLQUFBLENBQUF0RyxDQUFBLEVBQUFELENBQUEsWUFBQXdHLE1BQUFuRyxDQUFBLElBQUErRixrQkFBQSxDQUFBeEYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQWlHLEtBQUEsRUFBQUMsTUFBQSxVQUFBcEcsQ0FBQSxjQUFBb0csT0FBQXBHLENBQUEsSUFBQStGLGtCQUFBLENBQUF4RixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBaUcsS0FBQSxFQUFBQyxNQUFBLFdBQUFwRyxDQUFBLEtBQUFtRyxLQUFBO0FBSXFCO0FBQ2M7QUFDRTtBQUNyQzs7QUFNQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3hCLElBQU14SixHQUFHLEdBQUcrQixNQUFNLENBQUMwSCxRQUFRLENBQUNDLElBQUk7RUFDaEMsSUFBSWpILDBEQUFhLENBQUN6QyxHQUFHLENBQUMsRUFBRTtJQUN0QjtFQUNGO0VBQ0ErQixNQUFNLENBQUM0SCxhQUFhLEdBQUcsSUFBSTtFQUMzQixJQUFNQyx3QkFBd0IsR0FBR0MsV0FBVyxDQUFDOUcsU0FBUyxDQUFDK0csZ0JBQWdCOztFQUV2RTtFQUNBLElBQU1DLGNBQWMsR0FBRyxHQUFHLEVBQUM7RUFDM0IsSUFBSUMsa0JBQWtCLEdBQUcsQ0FBQztFQUMxQixJQUFNQyxPQUFPLEdBQUcsS0FBSztFQUNyQixTQUFTQyxzQkFBc0JBLENBQUEsRUFBRztJQUNoQyxJQUFNbEssR0FBRyxHQUFHK0IsTUFBTSxDQUFDMEgsUUFBUSxDQUFDQyxJQUFJO0lBQ2hDLElBQU1TLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxlQUFBM0ssTUFBQSxDQUFlNEssUUFBUSxDQUFDdEssR0FBRyxDQUFDLE9BQUFOLE1BQUEsQ0FBSXlLLFNBQVM7RUFDM0M7RUFDQSxTQUFTRyxRQUFRQSxDQUFDQyxHQUFXLEVBQUU7SUFDN0IsSUFBSUMsSUFBSSxHQUFHLENBQUM7SUFDWixLQUFLLElBQUluSCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrSCxHQUFHLENBQUNoRCxNQUFNLEVBQUVsRSxDQUFDLEVBQUUsRUFBRTtNQUNuQ21ILElBQUksR0FBRyxDQUFDQSxJQUFJLElBQUksQ0FBQyxJQUFJQSxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsVUFBVSxDQUFDcEgsQ0FBQyxDQUFDO01BQzdDbUgsSUFBSSxJQUFJLENBQUM7SUFDWDtJQUNBdkssT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLEVBQUVzSyxJQUFJLENBQUM7SUFDOUMsT0FBT0EsSUFBSSxDQUFDRSxRQUFRLENBQUMsQ0FBQztFQUN4QjtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTs7RUFFQSxTQUFTQyxrQkFBa0JBLENBQ3pCQyxTQUFpQixFQUNqQkMsTUFBVyxFQUNYVixTQUFpQixFQUNqQlcsUUFBZ0IsRUFDaEI5SyxHQUFXLEVBQ1grSyxJQUFZLEVBQ1o7SUFDQSxTQUFTQyxtQkFBbUJBLENBQzFCbkwsT0FBMkIsRUFHSDtNQUFBLElBRnhCb0wsS0FBYSxHQUFBaEMsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBaUMsU0FBQSxHQUFBakMsU0FBQSxNQUFHLENBQUM7TUFBQSxJQUNqQmtDLGFBQXFDLEdBQUFsQyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFpQyxTQUFBLEdBQUFqQyxTQUFBLE1BQUcsQ0FBQyxDQUFDO01BRTFDO01BQ0EsSUFBSSxDQUFDcEosT0FBTyxJQUFJb0wsS0FBSyxJQUFJLEVBQUUsRUFBRSxPQUFPRSxhQUFhOztNQUVqRDtNQUNBLElBQUl0TCxPQUFPLENBQUN1TCxZQUFZLENBQUMsbUJBQW1CLENBQUMsRUFBRTtRQUM3Q0QsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUd0TCxPQUFPLENBQUNvQixZQUFZLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFO01BQ3RGO01BQ0EsSUFBSXBCLE9BQU8sQ0FBQ3VMLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1FBQ2xERCxhQUFhLENBQUMsd0JBQXdCLENBQUMsR0FDckN0TCxPQUFPLENBQUNvQixZQUFZLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFO01BQ3hEO01BQ0EsSUFBSXBCLE9BQU8sQ0FBQ3VMLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1FBQ2xERCxhQUFhLENBQUMsd0JBQXdCLENBQUMsR0FDckN0TCxPQUFPLENBQUNvQixZQUFZLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFO01BQ3hEOztNQUVBO01BQ0EsT0FBTytKLG1CQUFtQixDQUFDbkwsT0FBTyxDQUFDd0wsYUFBYSxFQUFFSixLQUFLLEdBQUcsQ0FBQyxFQUFFRSxhQUFhLENBQUM7SUFDN0U7SUFFQSxJQUFNRyxRQUFRLEdBQUc1Syx5REFBWSxDQUFDLENBQUM7SUFDL0IsSUFBTXlLLGFBQWEsR0FBR0gsbUJBQW1CLENBQUNILE1BQXFCLENBQUM7SUFDaEU7SUFDQSxJQUFNVSxpQkFBaUIsR0FBR3JCLHNCQUFzQixDQUFDLENBQUM7O0lBRWxEO0lBQ0EsSUFBTXNCLGdCQUFnQixHQUFHO01BQ3ZCQyxPQUFPLEVBQUVaLE1BQU0sQ0FBQ1ksT0FBTztNQUN2QkMsU0FBUyxFQUFFYixNQUFNLENBQUNhLFNBQVM7TUFDM0JDLEVBQUUsRUFBRWQsTUFBTSxDQUFDYyxFQUFFO01BQ2JDLFNBQVMsRUFBRWYsTUFBTSxDQUFDZSxTQUFTLElBQUlmLE1BQU0sQ0FBQ3pILEtBQUssSUFBSSxFQUFFO01BQ2pEeUksU0FBUyxFQUFFaEIsTUFBTSxDQUFDZ0I7SUFDcEIsQ0FBQztJQUNELElBQU1DLFNBQVMsR0FBR3hLLDJFQUE4QixDQUFDLENBQUM7SUFDbEQsSUFBTXlLLElBQUksR0FBRztNQUNYaEIsSUFBSSxFQUFFQSxJQUFJO01BQ1ZILFNBQVMsRUFBVEEsU0FBUztNQUNUVCxTQUFTLEVBQUVBLFNBQVM7TUFDcEJVLE1BQU0sRUFBRVcsZ0JBQWdCO01BQUU7TUFDMUI7TUFDQTtNQUNBO01BQ0E7TUFDQVEsY0FBYyxFQUFFVCxpQkFBaUI7TUFDakNULFFBQVEsRUFBRUEsUUFBUSxJQUFJLEVBQUU7TUFDeEIsa0JBQWtCLEVBQUVLLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7TUFDNUQsbUJBQW1CLEVBQUVBLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7TUFDbEUsbUJBQW1CLEVBQUVBLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7TUFDbEUsV0FBVyxFQUFFRyxRQUFRLElBQUksRUFBRTtNQUMzQnRMLEdBQUcsRUFBRUEsR0FBRyxJQUFJLEVBQUU7TUFDZGlNLFdBQVcsRUFBRUgsU0FBUyxDQUFDN0osZUFBZSxDQUFDNEo7SUFDekMsQ0FBQztJQUVELE9BQU9FLElBQUk7RUFDYjtFQUNBO0VBQ0EsSUFBTUcsWUFBWSxHQUFHLENBQUMsQ0FBQztFQUV2QixJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFJQyxLQUFZLEVBQUs7SUFDN0NuTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUNuQyxJQUFNTCxPQUFPLEdBQUd1TSxLQUFLLENBQUN2QixNQUFxQjtJQUMzQzVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxPQUFPLENBQUM7SUFDcEJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa00sS0FBSyxDQUFDO0lBQ2xCLElBQUlBLEtBQUssQ0FBQ0Msb0JBQW9CLEVBQUU7TUFDOUJwTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQztNQUNyRDtJQUNGO0lBQ0EsSUFBTW9NLE1BQU0sR0FBR3pNLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNuQyxJQUFJd00sTUFBTSxFQUFFO01BQ1Z2SyxNQUFNLENBQUMwSCxRQUFRLENBQUNDLElBQUksR0FBRzRDLE1BQU0sQ0FBQzVDLElBQUk7SUFDcEMsQ0FBQyxNQUFNLElBQUk3SixPQUFPLENBQUM0TCxPQUFPLENBQUNjLFdBQVcsQ0FBQyxDQUFDLEtBQUssT0FBTyxFQUFFO01BQ3BEO01BQ0EsSUFBSTFNLE9BQU8sQ0FBQzBFLElBQUksS0FBSyxRQUFRLEVBQUU7UUFBQSxJQUFBaUksYUFBQTtRQUM3QnZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO1FBQzlCLENBQUFzTSxhQUFBLEdBQUEzTSxPQUFPLENBQUM0TSxJQUFJLGNBQUFELGFBQUEsZUFBWkEsYUFBQSxDQUFjRSxNQUFNLENBQUMsQ0FBQztNQUN4QjtJQUNGO0VBQ0YsQ0FBQztFQUNELElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlQLEtBQVksRUFBSztJQUN6QyxJQUFNdk0sT0FBTyxHQUFHdU0sS0FBSyxDQUFDdkIsTUFBcUI7SUFDM0MsSUFBTXlCLE1BQU0sR0FBR3pNLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNuQyxJQUFJd00sTUFBTSxFQUFFO01BQ1YsSUFBSUEsTUFBTSxDQUFDNUMsSUFBSSxDQUFDa0QsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ3pDLE9BQU8sS0FBSztNQUNkO01BQ0EsT0FBTyxJQUFJO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxJQUFJL00sT0FBTyxDQUFDNEwsT0FBTyxDQUFDYyxXQUFXLENBQUMsQ0FBQyxLQUFLLE9BQU8sRUFBRTtNQUM3QyxJQUFJMU0sT0FBTyxDQUFDMEUsSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLElBQUk7TUFDYjtJQUNGO0lBQ0EsT0FBTyxLQUFLO0VBQ2QsQ0FBQztFQUNEO0VBQ0FzRixXQUFXLENBQUM5RyxTQUFTLENBQUMrRyxnQkFBZ0IsR0FBRyxVQUFVdkYsSUFBSSxFQUFFc0ksUUFBUSxFQUFnQjtJQUFBLElBQWRDLE9BQU8sR0FBQTdELFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQWlDLFNBQUEsR0FBQWpDLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDN0UsSUFBSTZELE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxpQkFBaUIsRUFBRTtNQUN4QyxPQUFPbkQsd0JBQXdCLENBQUNuRixJQUFJLENBQUMsSUFBSSxFQUFFRixJQUFJLEVBQUVzSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQztJQUNyRTtJQUVBLElBQUl2SSxJQUFJLEtBQUssT0FBTyxJQUFJc0ksUUFBUSxFQUFFO01BQ2hDLElBQU1HLGVBQWU7UUFBQSxJQUFBQyxJQUFBLEdBQUFqRSxpQkFBQSxjQUFBdEcsbUJBQUEsR0FBQWtGLElBQUEsQ0FBRyxTQUFBc0YsUUFBZ0JkLEtBQUs7VUFBQSxJQUFBdkIsTUFBQSxFQUFBc0MsR0FBQSxFQUFBQyxNQUFBLEVBQUFDLGNBQUEsRUFBQWxELFNBQUEsRUFBQW1ELEtBQUEsRUFBQUMsa0JBQUEsRUFBQUMsbUJBQUEsRUFBQXpCLElBQUEsRUFBQTBCLFFBQUEsRUFBQTFDLElBQUEsRUFBQTJDLG1CQUFBLEVBQUFDLEtBQUEsRUFBQUMsb0JBQUE7VUFBQSxPQUFBbEwsbUJBQUEsR0FBQXVCLElBQUEsVUFBQTRKLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBekYsSUFBQSxHQUFBeUYsUUFBQSxDQUFBbkgsSUFBQTtjQUFBO2dCQUNyQ2tFLE1BQU0sR0FBR3VCLEtBQUssQ0FBQ3ZCLE1BQU07Z0JBQUEsS0FDdkJqTCx3REFBVyxDQUFDaUwsTUFBTSxDQUFDO2tCQUFBaUQsUUFBQSxDQUFBbkgsSUFBQTtrQkFBQTtnQkFBQTtnQkFDckIsSUFBSSxPQUFPa0csUUFBUSxLQUFLLFVBQVUsRUFBRTtrQkFDbENBLFFBQVEsQ0FBQ3BJLElBQUksQ0FBQyxJQUFJLEVBQUUySCxLQUFLLENBQUM7Z0JBQzVCLENBQUMsTUFBTSxJQUFJUyxRQUFRLElBQUksT0FBT0EsUUFBUSxDQUFDa0IsV0FBVyxLQUFLLFVBQVUsRUFBRTtrQkFDakVsQixRQUFRLENBQUNrQixXQUFXLENBQUN0SixJQUFJLENBQUNvSSxRQUFRLEVBQUVULEtBQUssQ0FBQztnQkFDNUM7Z0JBQUMsT0FBQTBCLFFBQUEsQ0FBQXRILE1BQUE7Y0FBQTtnQkFBQSxLQUdDNEYsS0FBSyxDQUFDNEIsZ0JBQWdCO2tCQUFBRixRQUFBLENBQUFuSCxJQUFBO2tCQUFBO2dCQUFBO2dCQUN4QjFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2dCQUFBLE9BQUE0TixRQUFBLENBQUF0SCxNQUFBO2NBQUE7Z0JBR2xDO2dCQUNNMkcsR0FBRyxHQUFHL0MsSUFBSSxDQUFDK0MsR0FBRyxDQUFDLENBQUM7Z0JBQUEsTUFDbEJBLEdBQUcsR0FBR25ELGtCQUFrQixHQUFHRCxjQUFjO2tCQUFBK0QsUUFBQSxDQUFBbkgsSUFBQTtrQkFBQTtnQkFBQTtnQkFDM0MxRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQztnQkFBQSxLQUMxRGdNLFlBQVksQ0FBQ2xDLGtCQUFrQixDQUFDO2tCQUFBOEQsUUFBQSxDQUFBbkgsSUFBQTtrQkFBQTtnQkFBQTtnQkFDNUJ5RyxNQUFNLEdBQUdsQixZQUFZLENBQUNsQyxrQkFBa0IsQ0FBQyxDQUFDb0QsTUFBTTtnQkFDaERDLGNBQWMsR0FBRyxJQUFJcEYsT0FBTyxDQUFDLFVBQUNyQyxPQUFPLEVBQUVxSSxNQUFNLEVBQUs7a0JBQ3RELElBQUliLE1BQU0sQ0FBQ2MsT0FBTyxFQUFFO29CQUNsQjtvQkFDQXRJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztrQkFDakIsQ0FBQyxNQUFNO29CQUNMO29CQUNBd0gsTUFBTSxDQUFDdEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3NCQUFBLE9BQU1sRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQUEsR0FBRTtzQkFBRXVJLElBQUksRUFBRTtvQkFBSyxDQUFDLENBQUM7a0JBQ3pFO2dCQUNGLENBQUMsQ0FBQztnQkFBQUwsUUFBQSxDQUFBbkgsSUFBQTtnQkFBQSxPQUNJMEcsY0FBYztjQUFBO2dCQUNwQnBOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1EQUFtRCxDQUFDO2dCQUFBNE4sUUFBQSxDQUFBbkgsSUFBQTtnQkFBQTtjQUFBO2dCQUVoRTFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdEQUF3RCxDQUFDO2NBQUE7Z0JBRXZFLElBQUksT0FBTzJNLFFBQVEsS0FBSyxVQUFVLEVBQUU7a0JBQ2xDQSxRQUFRLENBQUNwSSxJQUFJLENBQUMsSUFBSSxFQUFFMkgsS0FBSyxDQUFDO2dCQUM1QixDQUFDLE1BQU0sSUFBSVMsUUFBUSxJQUFJLE9BQU9BLFFBQVEsQ0FBQ2tCLFdBQVcsS0FBSyxVQUFVLEVBQUU7a0JBQ2pFbEIsUUFBUSxDQUFDa0IsV0FBVyxDQUFDdEosSUFBSSxDQUFDb0ksUUFBUSxFQUFFVCxLQUFLLENBQUM7Z0JBQzVDO2dCQUFDLE9BQUEwQixRQUFBLENBQUF0SCxNQUFBO2NBQUE7Z0JBR0h3RCxrQkFBa0IsR0FBR21ELEdBQUc7Z0JBQ3hCakIsWUFBWSxDQUFDbEMsa0JBQWtCLENBQUMsR0FBRyxJQUFJb0UsZUFBZSxDQUFDLENBQUM7Z0JBRXhEbk8sT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLEVBQUVrTSxLQUFLLENBQUN2QixNQUFNLENBQUM7Z0JBQzlENUssT0FBTyxDQUFDQyxHQUFHLENBQUNrTSxLQUFLLENBQUN2QixNQUFNLENBQUM7Z0JBQ25CVixTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFDMUM7Z0JBQ0FwSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2tNLEtBQUssQ0FBQ3ZCLE1BQU0sQ0FBQztnQkFBQSxLQUNyQjhCLGdCQUFnQixDQUFDUCxLQUFLLENBQUM7a0JBQUEwQixRQUFBLENBQUFuSCxJQUFBO2tCQUFBO2dCQUFBO2dCQUN6QjtnQkFDQTFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxDQUFDO2dCQUNqRGtNLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxDQUFDO2dCQUN0QmpDLEtBQUssQ0FBQ2tDLGVBQWUsQ0FBQyxDQUFDO2dCQUN2QmxDLEtBQUssQ0FBQ2lDLGNBQWMsR0FBRyxZQUFNO2tCQUMzQmpDLEtBQUssQ0FBQ0Msb0JBQW9CLEdBQUcsSUFBSTtnQkFDbkMsQ0FBQztnQkFDREQsS0FBSyxDQUFDQyxvQkFBb0IsR0FBRyxLQUFLO2dCQUNsQ3BNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFa00sS0FBSyxDQUFDO2dCQUN2QztnQkFDTXJCLEtBQUksR0FBR3pCLGdEQUFNLENBQUMsQ0FBQztnQkFBQXdFLFFBQUEsQ0FBQXpGLElBQUE7Z0JBRWJrRixrQkFBa0IsR0FBRyxJQUFJdEYsT0FBTyxDQUFDLFVBQUNyQyxPQUFPLEVBQUVxSSxNQUFNLEVBQUs7a0JBQzFELFNBQVNNLGFBQWFBLENBQUNuQyxLQUFtQixFQUFFO29CQUMxQyxJQUNFQSxLQUFLLENBQUNMLElBQUksQ0FBQ3hILElBQUksS0FBSyxxQkFBcUIsSUFDekM2SCxLQUFLLENBQUNMLElBQUksQ0FBQzVCLFNBQVMsS0FBS0EsU0FBUyxFQUNsQztzQkFDQXBJLE1BQU0sQ0FBQ3lNLG1CQUFtQixDQUFDLFNBQVMsRUFBRUQsYUFBYSxDQUFDO3NCQUNwRCxJQUFJbkMsS0FBSyxDQUFDTCxJQUFJLENBQUMwQyxPQUFPLEVBQUU7d0JBQ3RCN0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3NCQUNqQixDQUFDLE1BQU07d0JBQ0xxSSxNQUFNLENBQUMsSUFBSWpJLEtBQUssQ0FBQ29HLEtBQUssQ0FBQ0wsSUFBSSxDQUFDMkMsS0FBSyxJQUFJLG1CQUFtQixDQUFDLENBQUM7c0JBQzVEO29CQUNGO2tCQUNGO2tCQUNBM00sTUFBTSxDQUFDK0gsZ0JBQWdCLENBQUMsU0FBUyxFQUFFeUUsYUFBYSxDQUFDOztrQkFFakQ7a0JBQ0FJLFVBQVUsQ0FBQyxZQUFNO29CQUNmNU0sTUFBTSxDQUFDeU0sbUJBQW1CLENBQUMsU0FBUyxFQUFFRCxhQUFhLENBQUM7b0JBQ3BETixNQUFNLENBQUMsSUFBSWpJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2tCQUN6QyxDQUFDLEVBQUVpRSxPQUFPLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDO2dCQUVJdUQsbUJBQW1CLEdBQUcsSUFBSXZGLE9BQU8sQ0FBQyxVQUFDckMsT0FBTyxFQUFFcUksTUFBTSxFQUFLO2tCQUMzRCxTQUFTVyxjQUFjQSxDQUFDeEMsS0FBbUIsRUFBRTtvQkFDM0MsSUFDRUEsS0FBSyxDQUFDTCxJQUFJLENBQUN4SCxJQUFJLEtBQUssc0JBQXNCLElBQzFDNkgsS0FBSyxDQUFDTCxJQUFJLENBQUM1QixTQUFTLEtBQUtBLFNBQVMsRUFDbEM7c0JBQ0FwSSxNQUFNLENBQUN5TSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVJLGNBQWMsQ0FBQztzQkFDckQsSUFBSXhDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDMEMsT0FBTyxFQUFFO3dCQUN0QjdJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztzQkFDakIsQ0FBQyxNQUFNO3dCQUNMcUksTUFBTSxDQUFDLElBQUlqSSxLQUFLLENBQUNvRyxLQUFLLENBQUNMLElBQUksQ0FBQzJDLEtBQUssSUFBSSxvQkFBb0IsQ0FBQyxDQUFDO3NCQUM3RDtvQkFDRjtrQkFDRjtrQkFDQTNNLE1BQU0sQ0FBQytILGdCQUFnQixDQUFDLFNBQVMsRUFBRThFLGNBQWMsQ0FBQzs7a0JBRWxEO2tCQUNBRCxVQUFVLENBQUMsWUFBTTtvQkFDZjVNLE1BQU0sQ0FBQ3lNLG1CQUFtQixDQUFDLFNBQVMsRUFBRUksY0FBYyxDQUFDO29CQUNyRFgsTUFBTSxDQUFDLElBQUlqSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztrQkFDMUMsQ0FBQyxFQUFFaUUsT0FBTyxDQUFDO2dCQUNiLENBQUMsQ0FBQztnQkFDSThCLElBQUksR0FBR3BCLGtCQUFrQixDQUM3QixTQUFTLEVBQ1R5QixLQUFLLENBQUN2QixNQUFNLEVBQ1pWLFNBQVMsRUFDVFosb0RBQU0sQ0FBQzZDLEtBQUssQ0FBQ3ZCLE1BQU0sQ0FBQyxFQUNwQjlJLE1BQU0sQ0FBQzBILFFBQVEsQ0FBQ0MsSUFBSSxFQUNwQnFCLEtBQ0YsQ0FBQyxFQUNEO2dCQUNBO2dCQUNBO2dCQUNBaEosTUFBTSxDQUFDOE0sV0FBVyxDQUNoQjtrQkFBRXRLLElBQUksRUFBRSxvQkFBb0I7a0JBQUU0RixTQUFTLEVBQUVBLFNBQVM7a0JBQUVZLElBQUksRUFBRUE7Z0JBQUssQ0FBQyxFQUNoRSxHQUNGLENBQUM7Z0JBQ0RoSixNQUFNLENBQUM4TSxXQUFXLENBQUM7a0JBQUV0SyxJQUFJLEVBQUUsdUJBQXVCO2tCQUFFd0gsSUFBSSxFQUFFQSxJQUFJO2tCQUFFaEIsSUFBSSxFQUFFQTtnQkFBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUNsRjtnQkFDQTtnQkFBQStDLFFBQUEsQ0FBQW5ILElBQUE7Z0JBQUEsT0FDTTRHLGtCQUFrQjtjQUFBO2dCQUFBTyxRQUFBLENBQUFuSCxJQUFBO2dCQUFBLE9BQ2xCNkcsbUJBQW1CO2NBQUE7Z0JBQUFNLFFBQUEsQ0FBQW5ILElBQUE7Z0JBQUE7Y0FBQTtnQkFBQW1ILFFBQUEsQ0FBQXpGLElBQUE7Z0JBQUF5RixRQUFBLENBQUFnQixFQUFBLEdBQUFoQixRQUFBO2dCQU96QjdOLE9BQU8sQ0FBQ3lPLEtBQUssQ0FBQyxRQUFRLEVBQUFaLFFBQUEsQ0FBQWdCLEVBQU8sQ0FBQztjQUFBO2dCQUFBaEIsUUFBQSxDQUFBekYsSUFBQTtnQkFFOUJwSSxPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeENELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMk0sUUFBUSxDQUFDO2dCQUNyQlgsWUFBWSxDQUFDbEMsa0JBQWtCLENBQUMsQ0FBQytFLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLE9BQU9sQyxRQUFRLEtBQUssVUFBVSxFQUFFO2tCQUNsQ0EsUUFBUSxDQUFDcEksSUFBSSxDQUFDLElBQUksRUFBRTJILEtBQUssQ0FBQztnQkFDNUIsQ0FBQyxNQUFNLElBQUlTLFFBQVEsSUFBSSxPQUFPQSxRQUFRLENBQUNrQixXQUFXLEtBQUssVUFBVSxFQUFFO2tCQUNqRWxCLFFBQVEsQ0FBQ2tCLFdBQVcsQ0FBQ3RKLElBQUksQ0FBQ29JLFFBQVEsRUFBRVQsS0FBSyxDQUFDO2dCQUM1QztnQkFDQW5NLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO2dCQUN6RCxJQUFJLENBQUNrTSxLQUFLLENBQUNDLG9CQUFvQixFQUFFO2tCQUMvQjtrQkFDTW9CLFFBQVEsR0FBRyxJQUFJdUIsVUFBVSxDQUFDNUMsS0FBSyxDQUFDN0gsSUFBSSxFQUFFO29CQUMxQzBLLE9BQU8sRUFBRTdDLEtBQUssQ0FBQzZDLE9BQU87b0JBQ3RCQyxVQUFVLEVBQUUsS0FBSztvQkFBRTtvQkFDbkJDLFFBQVEsRUFBRS9DLEtBQUssQ0FBQytDLFFBQVE7b0JBQ3hCQyxJQUFJLEVBQUVoRCxLQUFLLENBQUNnRCxJQUFJO29CQUNoQkMsTUFBTSxFQUFFakQsS0FBSyxDQUFDaUQsTUFBTTtvQkFDcEJDLE9BQU8sRUFBRWxELEtBQUssQ0FBQ2tELE9BQU87b0JBQ3RCQyxPQUFPLEVBQUVuRCxLQUFLLENBQUNtRCxPQUFPO29CQUN0QkMsT0FBTyxFQUFFcEQsS0FBSyxDQUFDb0QsT0FBTztvQkFDdEJDLE9BQU8sRUFBRXJELEtBQUssQ0FBQ3FELE9BQU87b0JBQ3RCQyxPQUFPLEVBQUV0RCxLQUFLLENBQUNzRCxPQUFPO29CQUN0QkMsTUFBTSxFQUFFdkQsS0FBSyxDQUFDdUQsTUFBTTtvQkFDcEJDLFFBQVEsRUFBRXhELEtBQUssQ0FBQ3dELFFBQVE7b0JBQ3hCQyxPQUFPLEVBQUV6RCxLQUFLLENBQUN5RCxPQUFPO29CQUN0QkMsTUFBTSxFQUFFMUQsS0FBSyxDQUFDMEQsTUFBTTtvQkFDcEJDLE9BQU8sRUFBRTNELEtBQUssQ0FBQzJELE9BQU87b0JBQ3RCQyxhQUFhLEVBQUU1RCxLQUFLLENBQUM0RDtrQkFDdkIsQ0FBQyxDQUFDO2tCQUNGdkMsUUFBUSxDQUFDTyxnQkFBZ0IsR0FBRyxJQUFJOztrQkFFaEM7a0JBQ0FuRCxNQUFNLENBQUNvRixhQUFhLENBQUN4QyxRQUFRLENBQUM7Z0JBQ2hDO2dCQUFDLE9BQUFLLFFBQUEsQ0FBQWxGLE1BQUE7Y0FBQTtnQkFBQSxPQUFBa0YsUUFBQSxDQUFBdEgsTUFBQTtjQUFBO2dCQUlDdUUsSUFBSSxHQUFHekIsZ0RBQU0sQ0FBQyxDQUFDO2dCQUFBd0UsUUFBQSxDQUFBekYsSUFBQTtnQkFFbkI7Z0JBQ01rRixtQkFBa0IsR0FBRyxJQUFJdEYsT0FBTyxDQUFDLFVBQUNyQyxPQUFPLEVBQUVxSSxNQUFNLEVBQUs7a0JBQzFELFNBQVNNLGFBQWFBLENBQUNuQyxLQUFtQixFQUFFO29CQUMxQyxJQUFJQSxLQUFLLENBQUNMLElBQUksQ0FBQ3hILElBQUksS0FBSyxxQkFBcUIsSUFBSTZILEtBQUssQ0FBQ0wsSUFBSSxDQUFDNUIsU0FBUyxLQUFLQSxTQUFTLEVBQUU7c0JBQ25GcEksTUFBTSxDQUFDeU0sbUJBQW1CLENBQUMsU0FBUyxFQUFFRCxhQUFhLENBQUM7c0JBQ3BELElBQUluQyxLQUFLLENBQUNMLElBQUksQ0FBQzBDLE9BQU8sRUFBRTt3QkFDdEI3SSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7c0JBQ2pCLENBQUMsTUFBTTt3QkFDTHFJLE1BQU0sQ0FBQyxJQUFJakksS0FBSyxDQUFDb0csS0FBSyxDQUFDTCxJQUFJLENBQUMyQyxLQUFLLElBQUksbUJBQW1CLENBQUMsQ0FBQztzQkFDNUQ7b0JBQ0Y7a0JBQ0Y7a0JBQ0EzTSxNQUFNLENBQUMrSCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUV5RSxhQUFhLENBQUM7O2tCQUVqRDtrQkFDQUksVUFBVSxDQUFDLFlBQU07b0JBQ2Y1TSxNQUFNLENBQUN5TSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVELGFBQWEsQ0FBQztvQkFDcEROLE1BQU0sQ0FBQyxJQUFJakksS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7a0JBQ3pDLENBQUMsRUFBRWlFLE9BQU8sQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0k4QixLQUFJLEdBQUdwQixrQkFBa0IsQ0FDN0IsU0FBUyxFQUNUeUIsS0FBSyxDQUFDdkIsTUFBTSxFQUNaVixTQUFTLEVBQ1RaLG9EQUFNLENBQUM2QyxLQUFLLENBQUN2QixNQUFNLENBQUMsRUFDcEI5SSxNQUFNLENBQUMwSCxRQUFRLENBQUNDLElBQUksRUFDcEJxQixJQUNGLENBQUMsRUFDRDtnQkFDQWhKLE1BQU0sQ0FBQzhNLFdBQVcsQ0FBQztrQkFBRXRLLElBQUksRUFBRSxvQkFBb0I7a0JBQUU0RixTQUFTLEVBQUVBLFNBQVM7a0JBQUVZLElBQUksRUFBRUE7Z0JBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDekZoSixNQUFNLENBQUM4TSxXQUFXLENBQUM7a0JBQUV0SyxJQUFJLEVBQUUsdUJBQXVCO2tCQUFFd0gsSUFBSSxFQUFFQSxLQUFJO2tCQUFFaEIsSUFBSSxFQUFFQTtnQkFBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUM1RXlDLG9CQUFtQixHQUFHLElBQUl2RixPQUFPLENBQUMsVUFBQ3JDLE9BQU8sRUFBRXFJLE1BQU0sRUFBSztrQkFDM0QsU0FBU1csY0FBY0EsQ0FBQ3hDLEtBQW1CLEVBQUU7b0JBQzNDLElBQ0VBLEtBQUssQ0FBQ0wsSUFBSSxDQUFDeEgsSUFBSSxLQUFLLHNCQUFzQixJQUMxQzZILEtBQUssQ0FBQ0wsSUFBSSxDQUFDNUIsU0FBUyxLQUFLQSxTQUFTLEVBQ2xDO3NCQUNBcEksTUFBTSxDQUFDeU0sbUJBQW1CLENBQUMsU0FBUyxFQUFFSSxjQUFjLENBQUM7c0JBQ3JELElBQUl4QyxLQUFLLENBQUNMLElBQUksQ0FBQzBDLE9BQU8sRUFBRTt3QkFDdEI3SSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7c0JBQ2pCLENBQUMsTUFBTTt3QkFDTHFJLE1BQU0sQ0FBQyxJQUFJakksS0FBSyxDQUFDb0csS0FBSyxDQUFDTCxJQUFJLENBQUMyQyxLQUFLLElBQUksb0JBQW9CLENBQUMsQ0FBQztzQkFDN0Q7b0JBQ0Y7a0JBQ0Y7a0JBQ0EzTSxNQUFNLENBQUMrSCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU4RSxjQUFjLENBQUM7O2tCQUVsRDtrQkFDQUQsVUFBVSxDQUFDLFlBQU07b0JBQ2Y1TSxNQUFNLENBQUN5TSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVJLGNBQWMsQ0FBQztvQkFDckRYLE1BQU0sQ0FBQyxJQUFJakksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7a0JBQzFDLENBQUMsRUFBRWlFLE9BQU8sQ0FBQztnQkFDYixDQUFDLENBQUMsRUFDRjtnQkFBQTZELFFBQUEsQ0FBQW5ILElBQUE7Z0JBQUEsT0FDTTRHLG1CQUFrQjtjQUFBO2dCQUFBTyxRQUFBLENBQUFuSCxJQUFBO2dCQUFBLE9BQ2xCNkcsb0JBQW1CO2NBQUE7Z0JBQUFNLFFBQUEsQ0FBQW5ILElBQUE7Z0JBQUE7Y0FBQTtnQkFBQW1ILFFBQUEsQ0FBQXpGLElBQUE7Z0JBQUF5RixRQUFBLENBQUFvQyxFQUFBLEdBQUFwQyxRQUFBO2dCQUd6QjdOLE9BQU8sQ0FBQ3lPLEtBQUssQ0FBQyw2QkFBNkIsRUFBQVosUUFBQSxDQUFBb0MsRUFBTyxDQUFDO2dCQUNuRDtjQUFBO2dCQUFBcEMsUUFBQSxDQUFBekYsSUFBQTtnQkFFQXBJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixDQUFDO2dCQUN4Q2dNLFlBQVksQ0FBQ2xDLGtCQUFrQixDQUFDLENBQUMrRSxLQUFLLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxPQUFPbEMsUUFBUSxLQUFLLFVBQVUsRUFBRTtrQkFDbENBLFFBQVEsQ0FBQ3BJLElBQUksQ0FBQyxJQUFJLEVBQUUySCxLQUFLLENBQUM7Z0JBQzVCLENBQUMsTUFBTSxJQUFJUyxRQUFRLElBQUksT0FBT0EsUUFBUSxDQUFDa0IsV0FBVyxLQUFLLFVBQVUsRUFBRTtrQkFDakVsQixRQUFRLENBQUNrQixXQUFXLENBQUN0SixJQUFJLENBQUNvSSxRQUFRLEVBQUVULEtBQUssQ0FBQztnQkFDNUM7Z0JBQUMsT0FBQTBCLFFBQUEsQ0FBQWxGLE1BQUE7Y0FBQTtjQUFBO2dCQUFBLE9BQUFrRixRQUFBLENBQUF0RixJQUFBO1lBQUE7VUFBQSxHQUFBMEUsT0FBQTtRQUFBLENBRUo7UUFBQSxnQkFuUEtGLGVBQWVBLENBQUFtRCxFQUFBO1VBQUEsT0FBQWxELElBQUEsQ0FBQS9ELEtBQUEsT0FBQUQsU0FBQTtRQUFBO01BQUEsR0FtUHBCOztNQUVEO01BQ0EsSUFBSTZELE9BQU8sRUFBRTtRQUNYO1FBQ0EsSUFBSSxPQUFPQSxPQUFPLEtBQUssU0FBUyxFQUFFO1VBQ2hDQSxPQUFPLEdBQUc7WUFDUnNELFVBQVUsRUFBRSxLQUFLO1lBQ2pCQyxPQUFPLEVBQUU7VUFDWCxDQUFDO1FBQ0gsQ0FBQyxNQUFNLElBQUkxSyxPQUFBLENBQU9tSCxPQUFPLE1BQUssUUFBUSxFQUFFO1VBQ3RDQSxPQUFPLENBQUN1RCxPQUFPLEdBQUcsS0FBSztRQUN6QjtNQUNGO01BQ0EsT0FBT3pHLHdCQUF3QixDQUFDbkYsSUFBSSxDQUFDLElBQUksRUFBRUYsSUFBSSxFQUFFeUksZUFBZSxFQUFFRixPQUFPLENBQUM7SUFDNUUsQ0FBQyxNQUFNO01BQ0w7TUFDQSxPQUFPbEQsd0JBQXdCLENBQUNuRixJQUFJLENBQUMsSUFBSSxFQUFFRixJQUFJLEVBQUVzSSxRQUFRLEVBQUVDLE9BQU8sQ0FBQztJQUNyRTtFQUNGLENBQUM7RUFFRDdNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RCxDQUFDOztFQUVwRTtFQUNBLFNBQVNvUSxrQkFBa0JBLENBQUEsRUFBRztJQUM1QjFQLFFBQVEsQ0FBQ2tKLGdCQUFnQixDQUN2QixPQUFPO01BQUEsSUFBQXlHLEtBQUEsR0FBQXZILGlCQUFBLGNBQUF0RyxtQkFBQSxHQUFBa0YsSUFBQSxDQUNQLFNBQUE0SSxTQUFnQnBFLEtBQWlCO1FBQUEsSUFBQWUsR0FBQSxFQUFBdEMsTUFBQSxFQUFBVixTQUFBLEVBQUFZLElBQUEsRUFBQXdDLGtCQUFBLEVBQUF4QixJQUFBLEVBQUF5QixtQkFBQSxFQUFBQyxRQUFBO1FBQUEsT0FBQS9LLG1CQUFBLEdBQUF1QixJQUFBLFVBQUF3TSxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQXJJLElBQUEsR0FBQXFJLFNBQUEsQ0FBQS9KLElBQUE7WUFBQTtjQUFBLEtBQzNCL0csd0RBQVcsQ0FBQ3dNLEtBQUssQ0FBQ3ZCLE1BQU0sQ0FBQztnQkFBQTZGLFNBQUEsQ0FBQS9KLElBQUE7Z0JBQUE7Y0FBQTtjQUFBLE9BQUErSixTQUFBLENBQUFsSyxNQUFBO1lBQUE7Y0FBQSxLQUd6QjRGLEtBQUssQ0FBQzRCLGdCQUFnQjtnQkFBQTBDLFNBQUEsQ0FBQS9KLElBQUE7Z0JBQUE7Y0FBQTtjQUN4QjFHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2NBQUEsT0FBQXdRLFNBQUEsQ0FBQWxLLE1BQUE7WUFBQTtjQUdwQztjQUNNMkcsR0FBRyxHQUFHL0MsSUFBSSxDQUFDK0MsR0FBRyxDQUFDLENBQUM7Y0FBQSxNQUNsQkEsR0FBRyxHQUFHbkQsa0JBQWtCLEdBQUdELGNBQWM7Z0JBQUEyRyxTQUFBLENBQUEvSixJQUFBO2dCQUFBO2NBQUE7Y0FDM0MxRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQztjQUFBLE9BQUF3USxTQUFBLENBQUFsSyxNQUFBO1lBQUE7Y0FHN0R3RCxrQkFBa0IsR0FBR21ELEdBQUc7Y0FDeEJqQixZQUFZLENBQUNsQyxrQkFBa0IsQ0FBQyxHQUFHLElBQUlvRSxlQUFlLENBQUMsQ0FBQztjQUVsRHZELE1BQU0sR0FBR3VCLEtBQUssQ0FBQ3ZCLE1BQU0sRUFFM0I7Y0FDQTtjQUFBLEtBRUk4QixnQkFBZ0IsQ0FBQ1AsS0FBSyxDQUFDO2dCQUFBc0UsU0FBQSxDQUFBL0osSUFBQTtnQkFBQTtjQUFBO2NBQ3pCO2NBQ0ExRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQztjQUNoRDtjQUNBa00sS0FBSyxDQUFDaUMsY0FBYyxDQUFDLENBQUM7Y0FDdEJqQyxLQUFLLENBQUNrQyxlQUFlLENBQUMsQ0FBQztjQUNqQm5FLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUMxQztjQUNNVSxJQUFJLEdBQUd6QixnREFBTSxDQUFDLENBQUM7Y0FBQW9ILFNBQUEsQ0FBQXJJLElBQUE7Y0FFbkI7Y0FDTWtGLGtCQUFrQixHQUFHLElBQUl0RixPQUFPLENBQUMsVUFBQ3JDLE9BQU8sRUFBRXFJLE1BQU0sRUFBSztnQkFDMUQsU0FBU00sYUFBYUEsQ0FBQ25DLEtBQW1CLEVBQUU7a0JBQzFDLElBQ0VBLEtBQUssQ0FBQ0wsSUFBSSxDQUFDeEgsSUFBSSxLQUFLLHFCQUFxQixJQUN6QzZILEtBQUssQ0FBQ0wsSUFBSSxDQUFDNUIsU0FBUyxLQUFLQSxTQUFTLEVBQ2xDO29CQUNBcEksTUFBTSxDQUFDeU0sbUJBQW1CLENBQUMsU0FBUyxFQUFFRCxhQUFhLENBQUM7b0JBQ3BELElBQUluQyxLQUFLLENBQUNMLElBQUksQ0FBQzBDLE9BQU8sRUFBRTtzQkFDdEI3SSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsTUFBTTtzQkFDTHFJLE1BQU0sQ0FBQyxJQUFJakksS0FBSyxDQUFDb0csS0FBSyxDQUFDTCxJQUFJLENBQUMyQyxLQUFLLElBQUksbUJBQW1CLENBQUMsQ0FBQztvQkFDNUQ7a0JBQ0Y7Z0JBQ0Y7Z0JBQ0EzTSxNQUFNLENBQUMrSCxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUV5RSxhQUFhLEVBQUU7a0JBQ2hEb0MsT0FBTyxFQUFFO2dCQUNYLENBQUMsQ0FBQzs7Z0JBRUY7Z0JBQ0FoQyxVQUFVLENBQUMsWUFBTTtrQkFDZjVNLE1BQU0sQ0FBQ3lNLG1CQUFtQixDQUFDLFNBQVMsRUFBRUQsYUFBYSxDQUFDO2tCQUNwRE4sTUFBTSxDQUFDLElBQUlqSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxFQUFFaUUsT0FBTyxDQUFDLEVBQUM7Y0FDZCxDQUFDLENBQUMsRUFFRjs7Y0FDQWxJLE1BQU0sQ0FBQzhNLFdBQVcsQ0FDaEI7Z0JBQUV0SyxJQUFJLEVBQUUsb0JBQW9CO2dCQUFFNEYsU0FBUyxFQUFFQSxTQUFTO2dCQUFFWSxJQUFJLEVBQUVBO2NBQUssQ0FBQyxFQUNoRSxHQUNGLENBQUM7Y0FDS2dCLElBQUksR0FBR3BCLGtCQUFrQixDQUM3QixTQUFTLEVBQ1R5QixLQUFLLENBQUN2QixNQUFNLEVBQ1pWLFNBQVMsRUFDVFosb0RBQU0sQ0FBQ3NCLE1BQU0sQ0FBQyxFQUNkOUksTUFBTSxDQUFDMEgsUUFBUSxDQUFDQyxJQUFJLEVBQ3BCcUIsSUFDRixDQUFDO2NBQ0RoSixNQUFNLENBQUM4TSxXQUFXLENBQUM7Z0JBQUV0SyxJQUFJLEVBQUUsdUJBQXVCO2dCQUFFd0gsSUFBSSxFQUFFQSxJQUFJO2dCQUFFaEIsSUFBSSxFQUFFQTtjQUFLLENBQUMsRUFBRSxHQUFHLENBQUM7Y0FDNUV5QyxtQkFBbUIsR0FBRyxJQUFJdkYsT0FBTyxDQUFDLFVBQUNyQyxPQUFPLEVBQUVxSSxNQUFNLEVBQUs7Z0JBQzNELFNBQVNXLGNBQWNBLENBQUN4QyxLQUFtQixFQUFFO2tCQUMzQyxJQUNFQSxLQUFLLENBQUNMLElBQUksQ0FBQ3hILElBQUksS0FBSyxzQkFBc0IsSUFDMUM2SCxLQUFLLENBQUNMLElBQUksQ0FBQzVCLFNBQVMsS0FBS0EsU0FBUyxFQUNsQztvQkFDQXBJLE1BQU0sQ0FBQ3lNLG1CQUFtQixDQUFDLFNBQVMsRUFBRUksY0FBYyxDQUFDO29CQUNyRCxJQUFJeEMsS0FBSyxDQUFDTCxJQUFJLENBQUMwQyxPQUFPLEVBQUU7c0JBQ3RCN0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqQixDQUFDLE1BQU07c0JBQ0xxSSxNQUFNLENBQUMsSUFBSWpJLEtBQUssQ0FBQ29HLEtBQUssQ0FBQ0wsSUFBSSxDQUFDMkMsS0FBSyxJQUFJLG9CQUFvQixDQUFDLENBQUM7b0JBQzdEO2tCQUNGO2dCQUNGO2dCQUNBM00sTUFBTSxDQUFDK0gsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOEUsY0FBYyxDQUFDOztnQkFFbEQ7Z0JBQ0FELFVBQVUsQ0FBQyxZQUFNO2tCQUNmNU0sTUFBTSxDQUFDeU0sbUJBQW1CLENBQUMsU0FBUyxFQUFFSSxjQUFjLENBQUM7a0JBQ3JEWCxNQUFNLENBQUMsSUFBSWpJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLEVBQUVpRSxPQUFPLENBQUM7Y0FDYixDQUFDLENBQUMsRUFDRjtjQUFBeUcsU0FBQSxDQUFBL0osSUFBQTtjQUFBLE9BQ000RyxrQkFBa0I7WUFBQTtjQUFBbUQsU0FBQSxDQUFBL0osSUFBQTtjQUFBLE9BQ2xCNkcsbUJBQW1CO1lBQUE7Y0FBQWtELFNBQUEsQ0FBQS9KLElBQUE7Y0FBQTtZQUFBO2NBQUErSixTQUFBLENBQUFySSxJQUFBO2NBQUFxSSxTQUFBLENBQUE1QixFQUFBLEdBQUE0QixTQUFBO2NBS3pCelEsT0FBTyxDQUFDeU8sS0FBSyxDQUFDLDZCQUE2QixFQUFBZ0MsU0FBQSxDQUFBNUIsRUFBTyxDQUFDO2NBQ25EO1lBQUE7Y0FBQTRCLFNBQUEsQ0FBQXJJLElBQUE7Y0FFQTZELFlBQVksQ0FBQ2xDLGtCQUFrQixDQUFDLENBQUMrRSxLQUFLLENBQUMsQ0FBQztjQUN4QzlPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO2NBQ3pELElBQUksQ0FBQ2tNLEtBQUssQ0FBQ0Msb0JBQW9CLEVBQUU7Z0JBQy9CO2dCQUNNb0IsUUFBUSxHQUFHLElBQUl1QixVQUFVLENBQUM1QyxLQUFLLENBQUM3SCxJQUFJLEVBQUU7a0JBQzFDMEssT0FBTyxFQUFFN0MsS0FBSyxDQUFDNkMsT0FBTztrQkFDdEJDLFVBQVUsRUFBRSxLQUFLO2tCQUFFO2tCQUNuQkMsUUFBUSxFQUFFL0MsS0FBSyxDQUFDK0MsUUFBUTtrQkFDeEJDLElBQUksRUFBRWhELEtBQUssQ0FBQ2dELElBQUk7a0JBQ2hCQyxNQUFNLEVBQUVqRCxLQUFLLENBQUNpRCxNQUFNO2tCQUNwQkMsT0FBTyxFQUFFbEQsS0FBSyxDQUFDa0QsT0FBTztrQkFDdEJDLE9BQU8sRUFBRW5ELEtBQUssQ0FBQ21ELE9BQU87a0JBQ3RCQyxPQUFPLEVBQUVwRCxLQUFLLENBQUNvRCxPQUFPO2tCQUN0QkMsT0FBTyxFQUFFckQsS0FBSyxDQUFDcUQsT0FBTztrQkFDdEJDLE9BQU8sRUFBRXRELEtBQUssQ0FBQ3NELE9BQU87a0JBQ3RCQyxNQUFNLEVBQUV2RCxLQUFLLENBQUN1RCxNQUFNO2tCQUNwQkMsUUFBUSxFQUFFeEQsS0FBSyxDQUFDd0QsUUFBUTtrQkFDeEJDLE9BQU8sRUFBRXpELEtBQUssQ0FBQ3lELE9BQU87a0JBQ3RCQyxNQUFNLEVBQUUxRCxLQUFLLENBQUMwRCxNQUFNO2tCQUNwQkMsT0FBTyxFQUFFM0QsS0FBSyxDQUFDMkQsT0FBTztrQkFDdEJDLGFBQWEsRUFBRTVELEtBQUssQ0FBQzREO2dCQUN2QixDQUFDLENBQUM7Z0JBQ0Z2QyxRQUFRLENBQUNPLGdCQUFnQixHQUFHLElBQUk7O2dCQUVoQztnQkFDQW5ELE1BQU0sQ0FBQ29GLGFBQWEsQ0FBQ3hDLFFBQVEsQ0FBQztjQUNoQztjQUFDLE9BQUFpRCxTQUFBLENBQUE5SCxNQUFBO1lBQUE7WUFBQTtjQUFBLE9BQUE4SCxTQUFBLENBQUFsSSxJQUFBO1VBQUE7UUFBQSxHQUFBZ0ksUUFBQTtNQUFBLENBR047TUFBQSxpQkFBQUksR0FBQTtRQUFBLE9BQUFMLEtBQUEsQ0FBQXJILEtBQUEsT0FBQUQsU0FBQTtNQUFBO0lBQUEsS0FDRDtNQUNFbUgsVUFBVSxFQUFFLElBQUk7TUFDaEJyRCxpQkFBaUIsRUFBRSxJQUFJO01BQ3ZCc0QsT0FBTyxFQUFFO0lBQ1gsQ0FDRixDQUFDLEVBQUM7RUFDSjs7RUFFQTtFQUNBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxJQUFJLENBQUN2TyxNQUFNLENBQUM0SCxhQUFhLEVBQUU7RUFDekJILFdBQVcsQ0FBQyxDQUFDO0FBQ2YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BtZWR2L2ZpbmRlci9maW5kZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9pbmplY3RlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnNjc2YTY2NTE0NDM5OGU2OTY3NTY3YTJiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlID0gJ2FtYXpvbi5jb20nXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc2BcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLydcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJ1xuXVxuIiwiaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGUgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoXG4gICAgdXJsICYmXG4gICAgdXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSAmJlxuICAgICFmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vSW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKCkge1xuICBjb25zdCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHRlbnNpb24tY2xpY2thYmxlLW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuICF1cmwuaW5jbHVkZXModXJsX2luY2x1ZGUpIHx8IGZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxufVxuIiwiLy8gTGljZW5zZTogTUlUXG4vLyBBdXRob3I6IEFudG9uIE1lZHZlZGV2IDxhbnRvbkBtZWR2LmlvPlxuLy8gU291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vYW50b25tZWR2L2ZpbmRlclxuY29uc3QgYWNjZXB0ZWRBdHRyTmFtZXMgPSBuZXcgU2V0KFsncm9sZScsICduYW1lJywgJ2FyaWEtbGFiZWwnLCAncmVsJywgJ2hyZWYnXSk7XG4vKiogQ2hlY2sgaWYgYXR0cmlidXRlIG5hbWUgYW5kIHZhbHVlIGFyZSB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIGxldCBuYW1lSXNPayA9IGFjY2VwdGVkQXR0ck5hbWVzLmhhcyhuYW1lKTtcbiAgICBuYW1lSXNPayB8fD0gbmFtZS5zdGFydHNXaXRoKCdkYXRhLScpICYmIHdvcmRMaWtlKG5hbWUpO1xuICAgIGxldCB2YWx1ZUlzT2sgPSB3b3JkTGlrZSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMTAwO1xuICAgIHZhbHVlSXNPayB8fD0gdmFsdWUuc3RhcnRzV2l0aCgnIycpICYmIHdvcmRMaWtlKHZhbHVlLnNsaWNlKDEpKTtcbiAgICByZXR1cm4gbmFtZUlzT2sgJiYgdmFsdWVJc09rO1xufVxuLyoqIENoZWNrIGlmIGlkIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHdvcmRMaWtlKG5hbWUpO1xufVxuLyoqIENoZWNrIGlmIGNsYXNzIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHdvcmRMaWtlKG5hbWUpO1xufVxuLyoqIENoZWNrIGlmIHRhZyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWdOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKiBGaW5kcyB1bmlxdWUgQ1NTIHNlbGVjdG9ycyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZGVyKGlucHV0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlucHV0Lm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdlbmVyYXRlIENTUyBzZWxlY3RvciBmb3Igbm9uLWVsZW1lbnQgbm9kZSB0eXBlLmApO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHJvb3Q6IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGlkTmFtZTogaWROYW1lLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgdGFnTmFtZTogdGFnTmFtZSxcbiAgICAgICAgYXR0cjogYXR0cixcbiAgICAgICAgdGltZW91dE1zOiAxMDAwLFxuICAgICAgICBzZWVkTWluTGVuZ3RoOiAzLFxuICAgICAgICBvcHRpbWl6ZWRNaW5MZW5ndGg6IDIsXG4gICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogSW5maW5pdHksXG4gICAgfTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcbiAgICBjb25zdCByb290RG9jdW1lbnQgPSBmaW5kUm9vdERvY3VtZW50KGNvbmZpZy5yb290LCBkZWZhdWx0cyk7XG4gICAgbGV0IGZvdW5kUGF0aDtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lTXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcyB8fFxuICAgICAgICAgICAgY291bnQgPj0gY29uZmlnLm1heE51bWJlck9mUGF0aENoZWNrcykge1xuICAgICAgICAgICAgY29uc3QgZlBhdGggPSBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KTtcbiAgICAgICAgICAgIGlmICghZlBhdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRpbWVvdXQ6IENhbid0IGZpbmQgYSB1bmlxdWUgc2VsZWN0b3IgYWZ0ZXIgJHtjb25maWcudGltZW91dE1zfW1zYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IoZlBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50Kys7XG4gICAgICAgIGlmICh1bmlxdWUoY2FuZGlkYXRlLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgICAgICBmb3VuZFBhdGggPSBjYW5kaWRhdGU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kUGF0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlbGVjdG9yIHdhcyBub3QgZm91bmQuYCk7XG4gICAgfVxuICAgIGNvbnN0IG9wdGltaXplZCA9IFtcbiAgICAgICAgLi4ub3B0aW1pemUoZm91bmRQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSksXG4gICAgXTtcbiAgICBvcHRpbWl6ZWQuc29ydChieVBlbmFsdHkpO1xuICAgIGlmIChvcHRpbWl6ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3Iob3B0aW1pemVkWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9yKGZvdW5kUGF0aCk7XG59XG5mdW5jdGlvbiogc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IHN0YWNrID0gW107XG4gICAgbGV0IHBhdGhzID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gcm9vdERvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gdGllKGN1cnJlbnQsIGNvbmZpZyk7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBsZXZlbCkge1xuICAgICAgICAgICAgbm9kZS5sZXZlbCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sucHVzaChsZXZlbCk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICAgICAgcGF0aHMucHVzaCguLi5jb21iaW5hdGlvbnMoc3RhY2spKTtcbiAgICAgICAgaWYgKGkgPj0gY29uZmlnLnNlZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgY2FuZGlkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aHMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgeWllbGQgY2FuZGlkYXRlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHdvcmRMaWtlKG5hbWUpIHtcbiAgICBpZiAoL15bYS16XFwtXXszLH0kL2kudGVzdChuYW1lKSkge1xuICAgICAgICBjb25zdCB3b3JkcyA9IG5hbWUuc3BsaXQoLy18W0EtWl0vKTtcbiAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICAgICAgICBpZiAod29yZC5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgvW15hZWlvdV17NCx9L2kudGVzdCh3b3JkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gdGllKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGNvbnN0IGxldmVsID0gW107XG4gICAgY29uc3QgZWxlbWVudElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKGVsZW1lbnRJZCAmJiBjb25maWcuaWROYW1lKGVsZW1lbnRJZCkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnIycgKyBDU1MuZXNjYXBlKGVsZW1lbnRJZCksXG4gICAgICAgICAgICBwZW5hbHR5OiAwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gZWxlbWVudC5jbGFzc0xpc3RbaV07XG4gICAgICAgIGlmIChjb25maWcuY2xhc3NOYW1lKG5hbWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnLicgKyBDU1MuZXNjYXBlKG5hbWUpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZWxlbWVudC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICBpZiAoY29uZmlnLmF0dHIoYXR0ci5uYW1lLCBhdHRyLnZhbHVlKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogYFske0NTUy5lc2NhcGUoYXR0ci5uYW1lKX09XCIke0NTUy5lc2NhcGUoYXR0ci52YWx1ZSl9XCJdYCxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChjb25maWcudGFnTmFtZSh0YWdOYW1lKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IHRhZ05hbWUsXG4gICAgICAgICAgICBwZW5hbHR5OiA1LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIHRhZ05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG50aCA9IGluZGV4T2YoZWxlbWVudCk7XG4gICAgaWYgKG50aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoQ2hpbGQodGFnTmFtZSwgbnRoKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUwLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxldmVsO1xufVxuZnVuY3Rpb24gc2VsZWN0b3IocGF0aCkge1xuICAgIGxldCBub2RlID0gcGF0aFswXTtcbiAgICBsZXQgcXVlcnkgPSBub2RlLm5hbWU7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxldmVsID0gcGF0aFtpXS5sZXZlbCB8fCAwO1xuICAgICAgICBpZiAobm9kZS5sZXZlbCA9PT0gbGV2ZWwgLSAxKSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke3BhdGhbaV0ubmFtZX0gPiAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IGAke3BhdGhbaV0ubmFtZX0gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSBwYXRoW2ldO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBwZW5hbHR5KHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5tYXAoKG5vZGUpID0+IG5vZGUucGVuYWx0eSkucmVkdWNlKChhY2MsIGkpID0+IGFjYyArIGksIDApO1xufVxuZnVuY3Rpb24gYnlQZW5hbHR5KGEsIGIpIHtcbiAgICByZXR1cm4gcGVuYWx0eShhKSAtIHBlbmFsdHkoYik7XG59XG5mdW5jdGlvbiBpbmRleE9mKGlucHV0LCB0YWdOYW1lKSB7XG4gICAgY29uc3QgcGFyZW50ID0gaW5wdXQucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgY2hpbGQgPSBwYXJlbnQuZmlyc3RDaGlsZDtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAgICAgKHRhZ05hbWUgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGFnTmFtZSkpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQgPT09IGlucHV0KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICByZXR1cm4gaTtcbn1cbmZ1bmN0aW9uIGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGN1cnJlbnQgPSBpbnB1dDtcbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gcm9vdERvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGN1cnJlbnQsIHRhZ05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgcGVuYWx0eTogTmFOLFxuICAgICAgICAgICAgbGV2ZWw6IGksXG4gICAgICAgIH0pO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIGlmICh1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBudGhDaGlsZCh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1jaGlsZCgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24gbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLW9mLXR5cGUoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uKiBjb21iaW5hdGlvbnMoc3RhY2ssIHBhdGggPSBbXSkge1xuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IG5vZGUgb2Ygc3RhY2tbMF0pIHtcbiAgICAgICAgICAgIHlpZWxkKiBjb21iaW5hdGlvbnMoc3RhY2suc2xpY2UoMSwgc3RhY2subGVuZ3RoKSwgcGF0aC5jb25jYXQobm9kZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB5aWVsZCBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmRSb290RG9jdW1lbnQocm9vdE5vZGUsIGRlZmF1bHRzKSB7XG4gICAgaWYgKHJvb3ROb2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cbiAgICBpZiAocm9vdE5vZGUgPT09IGRlZmF1bHRzLnJvb3QpIHtcbiAgICAgICAgcmV0dXJuIHJvb3ROb2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiByb290Tm9kZTtcbn1cbmZ1bmN0aW9uIHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBjc3MgPSBzZWxlY3RvcihwYXRoKTtcbiAgICBzd2l0Y2ggKHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNzcykubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3Qgc2VsZWN0IGFueSBub2RlIHdpdGggdGhpcyBzZWxlY3RvcjogJHtjc3N9YCk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uKiBvcHRpbWl6ZShwYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA+IDIgJiYgcGF0aC5sZW5ndGggPiBjb25maWcub3B0aW1pemVkTWluTGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lTXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gWy4uLnBhdGhdO1xuICAgICAgICAgICAgbmV3UGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBpZiAodW5pcXVlKG5ld1BhdGgsIHJvb3REb2N1bWVudCkgJiZcbiAgICAgICAgICAgICAgICByb290RG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcihuZXdQYXRoKSkgPT09IGlucHV0KSB7XG4gICAgICAgICAgICAgICAgeWllbGQgbmV3UGF0aDtcbiAgICAgICAgICAgICAgICB5aWVsZCogb3B0aW1pemUobmV3UGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBmaW5kUGFnZU1ldGEsXG4gIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCxcbiAgaXNGcm9tUG9wdXAsXG4gIHNob3VsZEV4Y2x1ZGVcbn0gZnJvbSAnLi91dGlscy91dGlsJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IGZpbmRlciB9IGZyb20gJ0BtZWR2L2ZpbmRlcidcbi8vIGV4dGVuZCB3aW5kb3dcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbW9ua2V5UGF0Y2hlZDogYm9vbGVhblxuICB9XG59XG5jb25zdCBtb25rZXlQYXRjaCA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgaWYgKHNob3VsZEV4Y2x1ZGUodXJsKSkge1xuICAgIHJldHVyblxuICB9XG4gIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICBjb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclxuXG4gIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgY29uc3QgREVCT1VOQ0VfREVMQVkgPSAxNTAgLy8gMzAwbXNcbiAgbGV0IGxhc3RDbGlja1RpbWVzdGFtcCA9IDBcbiAgY29uc3QgVGltZU91dCA9IDMwMDAwXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKSB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1gXG4gIH1cbiAgZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgICBsZXQgaGFzaCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgICBoYXNoIHw9IDBcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbiAgfVxuICAvLyBmdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcge1xuICAvLyAgIGlmIChlbGVtZW50LmlkKSB7XG4gIC8vICAgICByZXR1cm4gYCMke2VsZW1lbnQuaWR9YFxuICAvLyAgIH1cblxuICAvLyAgIGxldCBwYXRoID0gW11cbiAgLy8gICBsZXQgY3VycmVudCA9IGVsZW1lbnRcblxuICAvLyAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gIC8vICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXG4gIC8vICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUgJiYgdHlwZW9mIGN1cnJlbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAvLyAgICAgICBzZWxlY3RvciArPSAnLicgKyBjdXJyZW50LmNsYXNzTmFtZS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnLicpXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxldCBzaWJsaW5nID0gY3VycmVudFxuICAvLyAgICAgbGV0IG50aCA9IDFcbiAgLy8gICAgIHdoaWxlIChzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgLy8gICAgICAgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAvLyAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSBjdXJyZW50LnRhZ05hbWUpIHtcbiAgLy8gICAgICAgICBudGgrK1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAobnRoID4gMSkge1xuICAvLyAgICAgICBzZWxlY3RvciArPSBgOm50aC1vZi10eXBlKCR7bnRofSlgXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIHBhdGgudW5zaGlmdChzZWxlY3RvcilcbiAgLy8gICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnRcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gcGF0aC5qb2luKCcgPiAnKVxuICAvLyB9XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIHRhcmdldDogYW55LFxuICAgIHRpbWVzdGFtcDogc3RyaW5nLFxuICAgIHNlbGVjdG9yOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdXVpZDogc3RyaW5nXG4gICkge1xuICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoXG4gICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICBkZXB0aDogbnVtYmVyID0gMCxcbiAgICAgIGFsbEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgICk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgICAgLy8gQmFzZSBjYXNlOiBpZiBlbGVtZW50IGlzIG51bGwgb3Igd2UndmUgcmVhY2hlZCBtYXggZGVwdGhcbiAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSAxNSkgcmV0dXJuIGFsbEF0dHJpYnV0ZXNcblxuICAgICAgLy8gQ2hlY2sgYW5kIGNvbGxlY3QgYWxsIHJlbGV2YW50IGF0dHJpYnV0ZXMgYXQgY3VycmVudCBsZXZlbFxuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpKSB7XG4gICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykpIHtcbiAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID1cbiAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpIHx8ICcnXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSkge1xuICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJ10gPVxuICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJydcbiAgICAgIH1cblxuICAgICAgLy8gQ29udGludWUgc2VhcmNoaW5nIHVwIHRoZSB0cmVlLCBwYXNzaW5nIGFsb25nIGNvbGxlY3RlZCBhdHRyaWJ1dGVzXG4gICAgICByZXR1cm4gZmluZENsaWNrYWJsZVBhcmVudChlbGVtZW50LnBhcmVudEVsZW1lbnQsIGRlcHRoICsgMSwgYWxsQXR0cmlidXRlcylcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgY29uc3QgYWxsQXR0cmlidXRlcyA9IGZpbmRDbGlja2FibGVQYXJlbnQodGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKClcblxuICAgIC8vIENyZWF0ZSBhIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSB0YXJnZXRcbiAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgdGFnTmFtZTogdGFyZ2V0LnRhZ05hbWUsXG4gICAgICBjbGFzc05hbWU6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgaW5uZXJUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgIG91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTFxuICAgIH1cbiAgICBjb25zdCBtYXJrZWREb2MgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICB1dWlkOiB1dWlkLFxuICAgICAgZXZlbnRUeXBlLFxuICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICB0YXJnZXQ6IHNlcmlhbGl6ZWRUYXJnZXQsIC8vIFJlcGxhY2UgZGlyZWN0IERPTSBlbGVtZW50IHdpdGggc2VyaWFsaXphYmxlIG9iamVjdFxuICAgICAgLy8gICB0YXJnZXRPdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUwsXG4gICAgICAvLyAgIHRhcmdldENsYXNzOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgLy8gICB0YXJnZXRJZDogdGFyZ2V0LmlkLFxuICAgICAgLy8gICB0YXJnZXRUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciB8fCAnJyxcbiAgICAgICdkYXRhLXNlbWFudGljLWlkJzogYWxsQXR0cmlidXRlc1snZGF0YS1jbGlja2FibGUtaWQnXSB8fCAnJyxcbiAgICAgICdlbGVtZW50LW1ldGEtbmFtZSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSB8fCAnJyxcbiAgICAgICdlbGVtZW50LW1ldGEtZGF0YSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSB8fCAnJyxcbiAgICAgICdwYWdlLW1ldGEnOiBwYWdlTWV0YSB8fCAnJyxcbiAgICAgIHVybDogdXJsIHx8ICcnLFxuICAgICAgaHRtbENvbnRlbnQ6IG1hcmtlZERvYy5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuICAvLyB0b2RvOiBwYXRjaCByZW1vdmVFdmVudExpc3RlbmVyIHN1cHBvcnQgd3JhcFxuICBjb25zdCBibG9ja1NpZ25hbHMgPSB7fVxuXG4gIGNvbnN0IGV4ZWN1dGVEZWZhdWx0QWN0aW9uID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdleGVjdXRlRGVmYXVsdEFjdGlvbicpXG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgaWYgKGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCBwcmV2ZW50ZWQgaW4gb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZlxuICAgIH0gZWxzZSBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIC8vIGlmIHR5cGUgaXMgc3VibWl0LCBzdWJtaXQgdGhlIGZvcm1cbiAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQgdGhlIGZvcm0nKVxuICAgICAgICBlbGVtZW50LmZvcm0/LnN1Ym1pdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGhhc0RlZmF1bHRBY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpXG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgaWYgKGFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBpZiBpZCBpcyBuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cbiAgICAvLyBpZiAoZWxlbWVudC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicpIHtcbiAgICAvLyAgIHJldHVybiB0cnVlXG4gICAgLy8gfVxuXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAvLyBNb25rZXkgcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lclxuICBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5za2lwX21vbmtleV9wYXRjaCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnY2xpY2snICYmIGxpc3RlbmVyKSB7XG4gICAgICBjb25zdCB3cmFwcGVkTGlzdGVuZXIgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIGlmIChub3cgLSBsYXN0Q2xpY2tUaW1lc3RhbXAgPCBERUJPVU5DRV9ERUxBWSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBibG9ja2luZycpXG4gICAgICAgICAgaWYgKGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdKSB7XG4gICAgICAgICAgICBjb25zdCBzaWduYWwgPSBibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXS5zaWduYWxcbiAgICAgICAgICAgIGNvbnN0IHdhaXRfZm9yX2Fib3J0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbHJlYWR5IGFib3J0ZWQsIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGxpc3RlbiBmb3IgdGhlIGFib3J0IGV2ZW50XG4gICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gcmVzb2x2ZSh2b2lkIDApLCB7IG9uY2U6IHRydWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGF3YWl0IHdhaXRfZm9yX2Fib3J0XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgdW5ibG9ja2luZycpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBubyBibG9jayBzaWduYWwnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGFzdENsaWNrVGltZXN0YW1wID0gbm93XG4gICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIGRldGVjdGVkIG9uOicsIGV2ZW50LnRhcmdldClcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IGZhbHNlXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIHBhdGNoIGV2ZW50JywgZXZlbnQpXG4gICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgJ2NsaWNrX2EnLFxuICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgZmluZGVyKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBhd2FpdCBzbGVlcCA1IHNlY29uZHNcbiAgICAgICAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDAwKSk7XG4gICAgICAgICAgICAvLyBhbGVydChcIjFcIilcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgICAvLyBhbGVydChcIjNcIilcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgIGF3YWl0IHNjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb21wbGV0ZWRcIilcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBhbGVydChcIjJcIilcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgLy8gcmUtZGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0ZW5lcilcbiAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KClcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlLWRpc3BhdGNoIHRoZSBldmVudCBpZiBpdHMgbm90IHByZXZlbnRlZCcpXG4gICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgIC8vIENsb25lIHRoZSBvcmlnaW5hbCBldmVudFxuICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLCAvLyBFbnN1cmVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9jY3Vyc1xuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcbiAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICBidXR0b246IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBDcmVhdGUgYSBwcm9taXNlIHRvIHdhaXQgZm9yIHNjcmVlbnNob3QgY29tcGxldGlvblxuICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiYgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICdjbGlja19iJyxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGZpbmRlcihldmVudC50YXJnZXQpLFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1dWlkXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIFJlcXVlc3Qgc2NyZWVuc2hvdFxuICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgYWZ0ZXIgc2NyZWVuc2hvdCBpcyBjYXB0dXJlZFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KClcbiAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAvLyBpZiBib29sZWFuLCBzZXQgcGFzc2l2ZSB0byB0cnVlXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVzZUNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIHdyYXBwZWRMaXN0ZW5lciwgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpXG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrcyBvbiA8YT4gdGFnc1xuICBmdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKGlzRnJvbVBvcHVwKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCBiJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIGlmIChub3cgLSBsYXN0Q2xpY2tUaW1lc3RhbXAgPCBERUJPVU5DRV9ERUxBWSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGFuY2hvciBjbGljayBldmVudCcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGFzdENsaWNrVGltZXN0YW1wID0gbm93XG4gICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCA8YT4gdGFnIGluIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIGluc2lkZSB0aGUgPGE+XG4gICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcblxuICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgIC8vIGlmICghYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDnm5HlkKzmiKrlm77lrozmiJDnmoTmtojmga9cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSwge1xuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAvLyDmt7vliqDotoXml7blpITnkIZcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KSAvLyAz56eS6LaF5pe2XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyDlj5HpgIHmiKrlm77or7fmsYJcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAnY2xpY2tfYycsXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICBmaW5kZXIodGFyZ2V0KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDnrYnlvoXmiKrlm77lrozmiJBcbiAgICAgICAgICAgIGF3YWl0IHNjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuXG4gICAgICAgICAgICAvLyDmiKrlm77noa7orqTlrozmiJDlkI7lho3ot7PovaxcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXS5hYm9ydCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJylcbiAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VDYXB0dXJlOiB0cnVlLFxuICAgICAgICBza2lwX21vbmtleV9wYXRjaDogdHJ1ZSxcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH1cbiAgICApIC8vIFVzZSBjYXB0dXJlIHBoYXNlIHRvIGludGVyY2VwdCB0aGUgZXZlbnQgZWFybGllclxuICB9XG5cbiAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaGFuZGxlIDxhPiB0YWcgY2xpY2tzXG4gIGhhbmRsZUFuY2hvckNsaWNrcygpXG59XG5pZiAoIXdpbmRvdy5tb25rZXlQYXRjaGVkKSB7XG4gIG1vbmtleVBhdGNoKClcbn1cbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsImZvbGRlcl9uYW1lIiwiemlwIiwidXBsb2FkX3VybCIsImJhc2VfdXJsIiwiZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkIiwidXJsX2luY2x1ZGUiLCJpbnRlcmFjdGlvbl91cmwiLCJjb25jYXQiLCJmaWx0ZXJfdXJsIiwiaXNGcm9tUG9wdXAiLCJlbGVtZW50IiwiY2xvc2VzdCIsInVwZGF0ZV9pY29uIiwidXJsIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwic29tZSIsImV4Y2x1ZGVVcmwiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ3JvdXBlZFJlc3VsdCIsImZvckVhY2giLCJtZXRhTmFtZSIsImdldEF0dHJpYnV0ZSIsIm1ldGFEYXRhIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsInNob3VsZEV4Y2x1ZGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInY0IiwidXVpZHY0IiwiZmluZGVyIiwibW9ua2V5UGF0Y2giLCJsb2NhdGlvbiIsImhyZWYiLCJtb25rZXlQYXRjaGVkIiwib3JpZ2luYWxBZGRFdmVudExpc3RlbmVyIiwiRXZlbnRUYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiREVCT1VOQ0VfREVMQVkiLCJsYXN0Q2xpY2tUaW1lc3RhbXAiLCJUaW1lT3V0IiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImNhcHR1cmVJbnRlcmFjdGlvbiIsImV2ZW50VHlwZSIsInRhcmdldCIsInNlbGVjdG9yIiwidXVpZCIsImZpbmRDbGlja2FibGVQYXJlbnQiLCJkZXB0aCIsInVuZGVmaW5lZCIsImFsbEF0dHJpYnV0ZXMiLCJoYXNBdHRyaWJ1dGUiLCJwYXJlbnRFbGVtZW50IiwicGFnZU1ldGEiLCJjdXJyZW50U25hcHNob3RJZCIsInNlcmlhbGl6ZWRUYXJnZXQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJpbm5lclRleHQiLCJvdXRlckhUTUwiLCJtYXJrZWREb2MiLCJkYXRhIiwiaHRtbFNuYXBzaG90SWQiLCJodG1sQ29udGVudCIsImJsb2NrU2lnbmFscyIsImV4ZWN1dGVEZWZhdWx0QWN0aW9uIiwiZXZlbnQiLCJteV9kZWZhdWx0X3ByZXZlbnRlZCIsImFuY2hvciIsInRvTG93ZXJDYXNlIiwiX2VsZW1lbnQkZm9ybSIsImZvcm0iLCJzdWJtaXQiLCJoYXNEZWZhdWx0QWN0aW9uIiwic3RhcnRzV2l0aCIsImxpc3RlbmVyIiwib3B0aW9ucyIsInNraXBfbW9ua2V5X3BhdGNoIiwid3JhcHBlZExpc3RlbmVyIiwiX3JlZiIsIl9jYWxsZWUiLCJub3ciLCJzaWduYWwiLCJ3YWl0X2Zvcl9hYm9ydCIsIl91dWlkIiwic2NyZWVuc2hvdENvbXBsZXRlIiwiaW50ZXJhY3Rpb25Db21wbGV0ZSIsIm5ld0V2ZW50IiwiX3NjcmVlbnNob3RDb21wbGV0ZSIsIl9kYXRhIiwiX2ludGVyYWN0aW9uQ29tcGxldGUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiaGFuZGxlRXZlbnQiLCJqdXN0X2Zvcl9kZWZhdWx0IiwicmVqZWN0IiwiYWJvcnRlZCIsIm9uY2UiLCJBYm9ydENvbnRyb2xsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZU1lc3NhZ2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3VjY2VzcyIsImVycm9yIiwic2V0VGltZW91dCIsImhhbmRsZU1lc3NhZ2UxIiwicG9zdE1lc3NhZ2UiLCJ0MCIsImFib3J0IiwiTW91c2VFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJ2aWV3IiwiZGV0YWlsIiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJidXR0b25zIiwicmVsYXRlZFRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJ0MSIsIl94IiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJoYW5kbGVBbmNob3JDbGlja3MiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY2FwdHVyZSIsIl94MiJdLCJzb3VyY2VSb290IjoiIn0=
