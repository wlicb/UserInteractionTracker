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
  var htmlElement = document.documentElement;
  var metaData = htmlElement.getAttribute('data-element-meta-data');
  var metaName = htmlElement.getAttribute('data-element-meta-name');
  return {
    metaData: metaData,
    metaName: metaName
  };
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
      if (!element || depth >= 5) return allAttributes;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLElBQUk7TUFDdkJzRCxPQUFPLEVBQUU7SUFDWCxDQUNGLENBQUMsRUFBQztFQUNKOztFQUVBO0VBQ0FDLGtCQUFrQixDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUNELElBQUksQ0FBQ3RPLE1BQU0sQ0FBQ3lILGFBQWEsRUFBRTtFQUN6QkQsV0FBVyxDQUFDLENBQUM7QUFDZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQG1lZHYvZmluZGVyL2ZpbmRlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2luamVjdGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICc2NzZhNjY1MTQ0Mzk4ZTY5Njc1NjdhMmInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGUgPSAnYW1hem9uLmNvbSdcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl91cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG4iLCJpbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZSB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmIChcbiAgICB1cmwgJiZcbiAgICB1cmwuaW5jbHVkZXModXJsX2luY2x1ZGUpICYmXG4gICAgIWZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICApIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9JbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gIGNvbnN0IG1ldGFEYXRhID0gaHRtbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcbiAgY29uc3QgbWV0YU5hbWUgPSBodG1sRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICByZXR1cm4ge1xuICAgIG1ldGFEYXRhOiBtZXRhRGF0YSxcbiAgICBtZXRhTmFtZTogbWV0YU5hbWVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdleHRlbnNpb24tY2xpY2thYmxlLW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuLy8gQWRkIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIG1hcmtlcnMgd2hlbiBuZWVkZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja2FibGVNYXJrZXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXh0ZW5zaW9uLWNsaWNrYWJsZS1tYXJrZXJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdleHRlbnNpb24tY2xpY2thYmxlLW1hcmtlcicpXG4gIH0pXG59XG4iLCIvLyBMaWNlbnNlOiBNSVRcbi8vIEF1dGhvcjogQW50b24gTWVkdmVkZXYgPGFudG9uQG1lZHYuaW8+XG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRvbm1lZHYvZmluZGVyXG5jb25zdCBhY2NlcHRlZEF0dHJOYW1lcyA9IG5ldyBTZXQoWydyb2xlJywgJ25hbWUnLCAnYXJpYS1sYWJlbCcsICdyZWwnLCAnaHJlZiddKTtcbi8qKiBDaGVjayBpZiBhdHRyaWJ1dGUgbmFtZSBhbmQgdmFsdWUgYXJlIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IG5hbWVJc09rID0gYWNjZXB0ZWRBdHRyTmFtZXMuaGFzKG5hbWUpO1xuICAgIG5hbWVJc09rIHx8PSBuYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykgJiYgd29yZExpa2UobmFtZSk7XG4gICAgbGV0IHZhbHVlSXNPayA9IHdvcmRMaWtlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCAxMDA7XG4gICAgdmFsdWVJc09rIHx8PSB2YWx1ZS5zdGFydHNXaXRoKCcjJykgJiYgd29yZExpa2UodmFsdWUuc2xpY2UoMSkpO1xuICAgIHJldHVybiBuYW1lSXNPayAmJiB2YWx1ZUlzT2s7XG59XG4vKiogQ2hlY2sgaWYgaWQgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gaWROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgY2xhc3MgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgdGFnIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhZ05hbWUobmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqIEZpbmRzIHVuaXF1ZSBDU1Mgc2VsZWN0b3JzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kZXIoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoaW5wdXQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2VuZXJhdGUgQ1NTIHNlbGVjdG9yIGZvciBub24tZWxlbWVudCBub2RlIHR5cGUuYCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgcm9vdDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgaWROYW1lOiBpZE5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICBhdHRyOiBhdHRyLFxuICAgICAgICB0aW1lb3V0TXM6IDEwMDAsXG4gICAgICAgIHNlZWRNaW5MZW5ndGg6IDMsXG4gICAgICAgIG9wdGltaXplZE1pbkxlbmd0aDogMixcbiAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiBJbmZpbml0eSxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IHJvb3REb2N1bWVudCA9IGZpbmRSb290RG9jdW1lbnQoY29uZmlnLnJvb3QsIGRlZmF1bHRzKTtcbiAgICBsZXQgZm91bmRQYXRoO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2Ygc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zIHx8XG4gICAgICAgICAgICBjb3VudCA+PSBjb25maWcubWF4TnVtYmVyT2ZQYXRoQ2hlY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBmUGF0aCA9IGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFmUGF0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGltZW91dDogQ2FuJ3QgZmluZCBhIHVuaXF1ZSBzZWxlY3RvciBhZnRlciAke2NvbmZpZy50aW1lb3V0TXN9bXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcihmUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKHVuaXF1ZShjYW5kaWRhdGUsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kUGF0aCA9IGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZWN0b3Igd2FzIG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW1pemVkID0gW1xuICAgICAgICAuLi5vcHRpbWl6ZShmb3VuZFBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSxcbiAgICBdO1xuICAgIG9wdGltaXplZC5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgaWYgKG9wdGltaXplZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvcihvcHRpbWl6ZWRbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3IoZm91bmRQYXRoKTtcbn1cbmZ1bmN0aW9uKiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aWUoY3VycmVudCwgY29uZmlnKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGxldmVsKSB7XG4gICAgICAgICAgICBub2RlLmxldmVsID0gaTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxldmVsKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgICAgICBwYXRocy5wdXNoKC4uLmNvbWJpbmF0aW9ucyhzdGFjaykpO1xuICAgICAgICBpZiAoaSA+PSBjb25maWcuc2VlZE1pbkxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRocyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgfVxufVxuZnVuY3Rpb24gd29yZExpa2UobmFtZSkge1xuICAgIGlmICgvXlthLXpcXC1dezMsfSQvaS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gbmFtZS5zcGxpdCgvLXxbQS1aXS8pO1xuICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgICAgICAgIGlmICh3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9bXmFlaW91XXs0LH0vaS50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0aWUoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBbXTtcbiAgICBjb25zdCBlbGVtZW50SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAoZWxlbWVudElkICYmIGNvbmZpZy5pZE5hbWUoZWxlbWVudElkKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICcjJyArIENTUy5lc2NhcGUoZWxlbWVudElkKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFtpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5jbGFzc05hbWUobmFtZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcuJyArIENTUy5lc2NhcGUobmFtZSksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBlbGVtZW50LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGlmIChjb25maWcuYXR0cihhdHRyLm5hbWUsIGF0dHIudmFsdWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgWyR7Q1NTLmVzY2FwZShhdHRyLm5hbWUpfT1cIiR7Q1NTLmVzY2FwZShhdHRyLnZhbHVlKX1cIl1gLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbmZpZy50YWdOYW1lKHRhZ05hbWUpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogdGFnTmFtZSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbnRoID0gaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAobnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhDaGlsZCh0YWdOYW1lLCBudGgpLFxuICAgICAgICAgICAgcGVuYWx0eTogNTAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGV2ZWw7XG59XG5mdW5jdGlvbiBzZWxlY3RvcihwYXRoKSB7XG4gICAgbGV0IG5vZGUgPSBwYXRoWzBdO1xuICAgIGxldCBxdWVyeSA9IG5vZGUubmFtZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBwYXRoW2ldLmxldmVsIHx8IDA7XG4gICAgICAgIGlmIChub2RlLmxldmVsID09PSBsZXZlbCAtIDEpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSA+ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHBhdGhbaV07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIHBlbmFsdHkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLm1hcCgobm9kZSkgPT4gbm9kZS5wZW5hbHR5KS5yZWR1Y2UoKGFjYywgaSkgPT4gYWNjICsgaSwgMCk7XG59XG5mdW5jdGlvbiBieVBlbmFsdHkoYSwgYikge1xuICAgIHJldHVybiBwZW5hbHR5KGEpIC0gcGVuYWx0eShiKTtcbn1cbmZ1bmN0aW9uIGluZGV4T2YoaW5wdXQsIHRhZ05hbWUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICAgICAodGFnTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YWdOYW1lKSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuZnVuY3Rpb24gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCkge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoY3VycmVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICBwZW5hbHR5OiBOYU4sXG4gICAgICAgICAgICBsZXZlbDogaSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaWYgKHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG50aENoaWxkKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLWNoaWxkKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtb2YtdHlwZSgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24qIGNvbWJpbmF0aW9ucyhzdGFjaywgcGF0aCA9IFtdKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBzdGFja1swXSkge1xuICAgICAgICAgICAgeWllbGQqIGNvbWJpbmF0aW9ucyhzdGFjay5zbGljZSgxLCBzdGFjay5sZW5ndGgpLCBwYXRoLmNvbmNhdChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHlpZWxkIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gZmluZFJvb3REb2N1bWVudChyb290Tm9kZSwgZGVmYXVsdHMpIHtcbiAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICAgIGlmIChyb290Tm9kZSA9PT0gZGVmYXVsdHMucm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGUub3duZXJEb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xufVxuZnVuY3Rpb24gdW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IGNzcyA9IHNlbGVjdG9yKHBhdGgpO1xuICAgIHN3aXRjaCAocm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3NzKS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBzZWxlY3QgYW55IG5vZGUgd2l0aCB0aGlzIHNlbGVjdG9yOiAke2Nzc31gKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24qIG9wdGltaXplKHBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMiAmJiBwYXRoLmxlbmd0aCA+IGNvbmZpZy5vcHRpbWl6ZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBbLi4ucGF0aF07XG4gICAgICAgICAgICBuZXdQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGlmICh1bmlxdWUobmV3UGF0aCwgcm9vdERvY3VtZW50KSAmJlxuICAgICAgICAgICAgICAgIHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKG5ld1BhdGgpKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXdQYXRoO1xuICAgICAgICAgICAgICAgIHlpZWxkKiBvcHRpbWl6ZShuZXdQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZpbmRQYWdlTWV0YSwgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LCBpc0Zyb21Qb3B1cCB9IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBmaW5kZXIgfSBmcm9tICdAbWVkdi9maW5kZXInXG4vLyBleHRlbmQgd2luZG93XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIG1vbmtleVBhdGNoZWQ6IGJvb2xlYW5cbiAgfVxufVxuY29uc3QgbW9ua2V5UGF0Y2ggPSAoKSA9PiB7XG4gIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICBjb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclxuXG4gIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgY29uc3QgREVCT1VOQ0VfREVMQVkgPSAxNTAgLy8gMzAwbXNcbiAgbGV0IGxhc3RDbGlja1RpbWVzdGFtcCA9IDBcbiAgY29uc3QgVGltZU91dCA9IDMwMDAwXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKSB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1gXG4gIH1cbiAgZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgICBsZXQgaGFzaCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgICBoYXNoIHw9IDBcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbiAgfVxuICAvLyBmdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdG9yKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcge1xuICAvLyAgIGlmIChlbGVtZW50LmlkKSB7XG4gIC8vICAgICByZXR1cm4gYCMke2VsZW1lbnQuaWR9YFxuICAvLyAgIH1cblxuICAvLyAgIGxldCBwYXRoID0gW11cbiAgLy8gICBsZXQgY3VycmVudCA9IGVsZW1lbnRcblxuICAvLyAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gIC8vICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuXG4gIC8vICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUgJiYgdHlwZW9mIGN1cnJlbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAvLyAgICAgICBzZWxlY3RvciArPSAnLicgKyBjdXJyZW50LmNsYXNzTmFtZS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnLicpXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIGxldCBzaWJsaW5nID0gY3VycmVudFxuICAvLyAgICAgbGV0IG50aCA9IDFcbiAgLy8gICAgIHdoaWxlIChzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgLy8gICAgICAgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAvLyAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSBjdXJyZW50LnRhZ05hbWUpIHtcbiAgLy8gICAgICAgICBudGgrK1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAobnRoID4gMSkge1xuICAvLyAgICAgICBzZWxlY3RvciArPSBgOm50aC1vZi10eXBlKCR7bnRofSlgXG4gIC8vICAgICB9XG5cbiAgLy8gICAgIHBhdGgudW5zaGlmdChzZWxlY3RvcilcbiAgLy8gICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnRcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gcGF0aC5qb2luKCcgPiAnKVxuICAvLyB9XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIHRhcmdldDogYW55LFxuICAgIHRpbWVzdGFtcDogc3RyaW5nLFxuICAgIHNlbGVjdG9yOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdXVpZDogc3RyaW5nXG4gICkge1xuICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoXG4gICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICBkZXB0aDogbnVtYmVyID0gMCxcbiAgICAgIGFsbEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgICk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgICAgLy8gQmFzZSBjYXNlOiBpZiBlbGVtZW50IGlzIG51bGwgb3Igd2UndmUgcmVhY2hlZCBtYXggZGVwdGhcbiAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSA1KSByZXR1cm4gYWxsQXR0cmlidXRlc1xuXG4gICAgICAvLyBDaGVjayBhbmQgY29sbGVjdCBhbGwgcmVsZXZhbnQgYXR0cmlidXRlcyBhdCBjdXJyZW50IGxldmVsXG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJykpIHtcbiAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1jbGlja2FibGUtaWQnXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpIHx8ICcnXG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSkge1xuICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gPVxuICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpKSB7XG4gICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9XG4gICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSB8fCAnJ1xuICAgICAgfVxuXG4gICAgICAvLyBDb250aW51ZSBzZWFyY2hpbmcgdXAgdGhlIHRyZWUsIHBhc3NpbmcgYWxvbmcgY29sbGVjdGVkIGF0dHJpYnV0ZXNcbiAgICAgIHJldHVybiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCwgZGVwdGggKyAxLCBhbGxBdHRyaWJ1dGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcbiAgICBjb25zdCBhbGxBdHRyaWJ1dGVzID0gZmluZENsaWNrYWJsZVBhcmVudCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgLy8gR2VuZXJhdGUgbmV3IEhUTUwgc25hcHNob3QgSURcbiAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKVxuXG4gICAgLy8gQ3JlYXRlIGEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIHRhcmdldFxuICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXJnZXQgPSB7XG4gICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgIGNsYXNzTmFtZTogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgIGlkOiB0YXJnZXQuaWQsXG4gICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgb3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MXG4gICAgfVxuICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgIHRhcmdldDogc2VyaWFsaXplZFRhcmdldCwgLy8gUmVwbGFjZSBkaXJlY3QgRE9NIGVsZW1lbnQgd2l0aCBzZXJpYWxpemFibGUgb2JqZWN0XG4gICAgICAvLyAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgIC8vICAgdGFyZ2V0Q2xhc3M6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAvLyAgIHRhcmdldElkOiB0YXJnZXQuaWQsXG4gICAgICAvLyAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgJ2RhdGEtc2VtYW50aWMtaWQnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddIHx8ICcnLFxuICAgICAgJ2VsZW1lbnQtbWV0YS1uYW1lJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddIHx8ICcnLFxuICAgICAgJ2VsZW1lbnQtbWV0YS1kYXRhJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddIHx8ICcnLFxuICAgICAgJ3BhZ2UtbWV0YSc6IHBhZ2VNZXRhIHx8ICcnLFxuICAgICAgdXJsOiB1cmwgfHwgJycsXG4gICAgICBodG1sQ29udGVudDogbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG4gIC8vIHRvZG86IHBhdGNoIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3VwcG9ydCB3cmFwXG4gIGNvbnN0IGJsb2NrU2lnbmFscyA9IHt9XG5cbiAgY29uc3QgZXhlY3V0ZURlZmF1bHRBY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2V4ZWN1dGVEZWZhdWx0QWN0aW9uJylcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICBpZiAoZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0IHByZXZlbnRlZCBpbiBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgYW5jaG9yID0gZWxlbWVudC5jbG9zZXN0KCdhJylcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgLy8gaWYgdHlwZSBpcyBzdWJtaXQsIHN1Ym1pdCB0aGUgZm9ybVxuICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCB0aGUgZm9ybScpXG4gICAgICAgIGVsZW1lbnQuZm9ybT8uc3VibWl0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgaGFzRGVmYXVsdEFjdGlvbiA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgYW5jaG9yID0gZWxlbWVudC5jbG9zZXN0KCdhJylcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICBpZiAoYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8vIGlmIGlkIGlzIG5hdi1zZWFyY2gtc3VibWl0LWJ1dHRvblxuICAgIC8vIGlmIChlbGVtZW50LmlkID09PSAnbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJykge1xuICAgIC8vICAgcmV0dXJuIHRydWVcbiAgICAvLyB9XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIC8vIE1vbmtleSBwYXRjaCBhZGRFdmVudExpc3RlbmVyXG4gIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNraXBfbW9ua2V5X3BhdGNoKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdjbGljaycgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGNvbnN0IHdyYXBwZWRMaXN0ZW5lciA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2gnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIGJsb2NraW5nJylcbiAgICAgICAgICBpZiAoYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLnNpZ25hbFxuICAgICAgICAgICAgY29uc3Qgd2FpdF9mb3JfYWJvcnQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGFscmVhZHkgYWJvcnRlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbGlzdGVuIGZvciB0aGUgYWJvcnQgZXZlbnRcbiAgICAgICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZXNvbHZlKHZvaWQgMCksIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXdhaXQgd2FpdF9mb3JfYWJvcnRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCB1bmJsb2NraW5nJylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIG5vIGJsb2NrIHNpZ25hbCcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsYXN0Q2xpY2tUaW1lc3RhbXAgPSBub3dcbiAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0gPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KVxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gZmFsc2VcbiAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgcGF0Y2ggZXZlbnQnLCBldmVudClcbiAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAnY2xpY2tfYScsXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICBmaW5kZXIoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNsZWVwIDUgc2Vjb25kc1xuICAgICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiMVwiKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2NyZWVuc2hvdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAvLyByZS1kaXNwYXRjaCB0aGUgZXZlbnRcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKVxuICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJylcbiAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdG8gd2FpdCBmb3Igc2NyZWVuc2hvdCBjb21wbGV0aW9uXG4gICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJiBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgJ2NsaWNrX2InLFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgZmluZGVyKGV2ZW50LnRhcmdldCksXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICApXG4gICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICBhd2FpdCBzY3JlZW5zaG90Q29tcGxldGVcbiAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBldmVuIGlmIHNjcmVlbnNob3QgZmFpbHNcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKVxuICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIC8vIGlmIGJvb2xlYW4sIHNldCBwYXNzaXZlIHRvIHRydWVcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXNlQ2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIGZvciBub24tY2xpY2sgZXZlbnRzXG4gICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJylcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIDxhPiB0YWdzXG4gIGZ1bmN0aW9uIGhhbmRsZUFuY2hvckNsaWNrcygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoaXNGcm9tUG9wdXAoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoIGInKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgYW5jaG9yIGNsaWNrIGV2ZW50JylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsYXN0Q2xpY2tUaW1lc3RhbXAgPSBub3dcbiAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0gPSBuZXcgQWJvcnRDb250cm9sbGVyKClcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IDxhPiB0YWcgaW4gY2FzZSBvZiBuZXN0ZWQgZWxlbWVudHMgaW5zaWRlIHRoZSA8YT5cbiAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuXG4gICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgLy8gaWYgKCFhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOebkeWQrOaIquWbvuWujOaIkOeahOa2iOaBr1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpIC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIOWPkemAgeaIquWbvuivt+axglxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICdjbGlja19jJyxcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgIGZpbmRlcih0YXJnZXQpLFxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG5cbiAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQnKVxuICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgdmlldzogZXZlbnQudmlldyxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgIHNjcmVlblk6IGV2ZW50LnNjcmVlblksXG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgLy8gUmUtZGlzcGF0Y2ggdGhlIG5ldyBldmVudFxuICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZUNhcHR1cmU6IHRydWUsXG4gICAgICAgIHNraXBfbW9ua2V5X3BhdGNoOiB0cnVlLFxuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfVxuICAgICkgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG4gIH1cblxuICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBoYW5kbGUgPGE+IHRhZyBjbGlja3NcbiAgaGFuZGxlQW5jaG9yQ2xpY2tzKClcbn1cbmlmICghd2luZG93Lm1vbmtleVBhdGNoZWQpIHtcbiAgbW9ua2V5UGF0Y2goKVxufVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZSIsImludGVyYWN0aW9uX3VybCIsImNvbmNhdCIsImZpbHRlcl91cmwiLCJpc0Zyb21Qb3B1cCIsImVsZW1lbnQiLCJjbG9zZXN0IiwidXBkYXRlX2ljb24iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJzb21lIiwiZXhjbHVkZVVybCIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiaHRtbEVsZW1lbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm1ldGFEYXRhIiwiZ2V0QXR0cmlidXRlIiwibWV0YU5hbWUiLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInY0IiwidXVpZHY0IiwiZmluZGVyIiwibW9ua2V5UGF0Y2giLCJtb25rZXlQYXRjaGVkIiwib3JpZ2luYWxBZGRFdmVudExpc3RlbmVyIiwiRXZlbnRUYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiREVCT1VOQ0VfREVMQVkiLCJsYXN0Q2xpY2tUaW1lc3RhbXAiLCJUaW1lT3V0IiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsImxvY2F0aW9uIiwiaHJlZiIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImNhcHR1cmVJbnRlcmFjdGlvbiIsImV2ZW50VHlwZSIsInRhcmdldCIsInNlbGVjdG9yIiwidXVpZCIsImZpbmRDbGlja2FibGVQYXJlbnQiLCJkZXB0aCIsInVuZGVmaW5lZCIsImFsbEF0dHJpYnV0ZXMiLCJoYXNBdHRyaWJ1dGUiLCJwYXJlbnRFbGVtZW50IiwicGFnZU1ldGEiLCJjdXJyZW50U25hcHNob3RJZCIsInNlcmlhbGl6ZWRUYXJnZXQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJpbm5lclRleHQiLCJvdXRlckhUTUwiLCJtYXJrZWREb2MiLCJkYXRhIiwiaHRtbFNuYXBzaG90SWQiLCJodG1sQ29udGVudCIsImJsb2NrU2lnbmFscyIsImV4ZWN1dGVEZWZhdWx0QWN0aW9uIiwiZXZlbnQiLCJteV9kZWZhdWx0X3ByZXZlbnRlZCIsImFuY2hvciIsInRvTG93ZXJDYXNlIiwiX2VsZW1lbnQkZm9ybSIsImZvcm0iLCJzdWJtaXQiLCJoYXNEZWZhdWx0QWN0aW9uIiwic3RhcnRzV2l0aCIsImxpc3RlbmVyIiwib3B0aW9ucyIsInNraXBfbW9ua2V5X3BhdGNoIiwid3JhcHBlZExpc3RlbmVyIiwiX3JlZiIsIl9jYWxsZWUiLCJub3ciLCJzaWduYWwiLCJ3YWl0X2Zvcl9hYm9ydCIsIl91dWlkIiwic2NyZWVuc2hvdENvbXBsZXRlIiwiaW50ZXJhY3Rpb25Db21wbGV0ZSIsIm5ld0V2ZW50IiwiX3NjcmVlbnNob3RDb21wbGV0ZSIsIl9kYXRhIiwiX2ludGVyYWN0aW9uQ29tcGxldGUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiaGFuZGxlRXZlbnQiLCJqdXN0X2Zvcl9kZWZhdWx0IiwicmVqZWN0IiwiYWJvcnRlZCIsIm9uY2UiLCJBYm9ydENvbnRyb2xsZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZU1lc3NhZ2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3VjY2VzcyIsImVycm9yIiwic2V0VGltZW91dCIsImhhbmRsZU1lc3NhZ2UxIiwicG9zdE1lc3NhZ2UiLCJ0MCIsImFib3J0IiwiTW91c2VFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJ2aWV3IiwiZGV0YWlsIiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJidXR0b25zIiwicmVsYXRlZFRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJ0MSIsIl94IiwidXNlQ2FwdHVyZSIsInBhc3NpdmUiLCJoYW5kbGVBbmNob3JDbGlja3MiLCJfcmVmMiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY2FwdHVyZSIsIl94MiJdLCJzb3VyY2VSb290IjoiIn0=
