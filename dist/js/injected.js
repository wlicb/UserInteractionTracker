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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


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
  function generateSelector(element) {
    if (element.id) {
      return "#".concat(element.id);
    }
    var path = [];
    var current = element;
    while (current && current !== document.body && current.parentElement) {
      var selector = current.tagName.toLowerCase();
      if (current.className && typeof current.className === 'string') {
        selector += '.' + current.className.trim().replace(/\s+/g, '.');
      }
      var sibling = current;
      var nth = 1;
      while (sibling.previousElementSibling) {
        sibling = sibling.previousElementSibling;
        if (sibling.tagName === current.tagName) {
          nth++;
        }
      }
      if (nth > 1) {
        selector += ":nth-of-type(".concat(nth, ")");
      }
      path.unshift(selector);
      current = current.parentElement;
    }
    return path.join(' > ');
  }
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
          var target, now, signal, wait_for_abort, timestamp, uuid, screenshotComplete, interactionComplete, data, newEvent, _screenshotComplete, _data, _interactionComplete;
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
                uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
                data = captureInteraction('click_a', event.target, timestamp, generateSelector(event.target), window.location.href, uuid); // await sleep 5 seconds
                // await new Promise(resolve => setTimeout(resolve, 5000));
                // alert("1")
                window.postMessage({
                  type: 'CAPTURE_SCREENSHOT',
                  timestamp: timestamp,
                  uuid: uuid
                }, '*');
                window.postMessage({
                  type: 'SAVE_INTERACTION_DATA',
                  data: data,
                  uuid: uuid
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
                _context.prev = 59;
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
                _data = captureInteraction('click_b', event.target, timestamp, generateSelector(event.target), window.location.href); // Request screenshot
                window.postMessage({
                  type: 'CAPTURE_SCREENSHOT',
                  timestamp: timestamp
                }, '*');
                window.postMessage({
                  type: 'SAVE_INTERACTION_DATA',
                  data: _data
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
                _context.next = 67;
                return _screenshotComplete;
              case 67:
                _context.next = 69;
                return _interactionComplete;
              case 69:
                _context.next = 74;
                break;
              case 71:
                _context.prev = 71;
                _context.t1 = _context["catch"](59);
                console.error('Error capturing screenshot:', _context.t1);
                // Execute original listener even if screenshot fails
              case 74:
                _context.prev = 74;
                console.log('running original listener');
                blockSignals[lastClickTimestamp].abort();
                if (typeof listener === 'function') {
                  listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                  listener.handleEvent.call(listener, event);
                }
                return _context.finish(74);
              case 79:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[35, 47, 50, 58], [59, 71, 74, 79]]);
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
        var now, target, timestamp, screenshotComplete, data, interactionComplete, newEvent;
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
                _context2.next = 37;
                break;
              }
              // console.log('[Intercepted] Click on <a> tag:', anchor.href)
              console.log('[Intercepted] Click on cancelable');
              // if (!anchor.href.startsWith('javascript:')) {
              event.preventDefault();
              event.stopPropagation();
              timestamp = new Date().toISOString(); // const targetHref = anchor.href
              _context2.prev = 17;
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
                timestamp: timestamp
              }, '*');
              data = captureInteraction('click_c', event.target, timestamp, generateSelector(target), window.location.href);
              window.postMessage({
                type: 'SAVE_INTERACTION_DATA',
                data: data
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
              _context2.next = 25;
              return screenshotComplete;
            case 25:
              _context2.next = 27;
              return interactionComplete;
            case 27:
              _context2.next = 32;
              break;
            case 29:
              _context2.prev = 29;
              _context2.t0 = _context2["catch"](17);
              console.error('Error capturing screenshot:', _context2.t0);
              // window.location.href = targetHref
            case 32:
              _context2.prev = 32;
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
              return _context2.finish(32);
            case 37:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[17, 29, 32, 37]]);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU87a0JBQ3RCQyxNQUFNLEVBQUV0RCxLQUFLLENBQUNzRCxNQUFNO2tCQUNwQkMsT0FBTyxFQUFFdkQsS0FBSyxDQUFDdUQsT0FBTztrQkFDdEJDLGFBQWEsRUFBRXhELEtBQUssQ0FBQ3dEO2dCQUN2QixDQUFDLENBQUM7Z0JBQ0ZyQyxRQUFRLENBQUNPLGdCQUFnQixHQUFHLElBQUk7O2dCQUVoQztnQkFDQTNDLE1BQU0sQ0FBQzBFLGFBQWEsQ0FBQ3RDLFFBQVEsQ0FBQztjQUNoQztjQUFDLE9BQUErQyxTQUFBLENBQUF0SSxNQUFBO1lBQUE7WUFBQTtjQUFBLE9BQUFzSSxTQUFBLENBQUFqSixJQUFBO1VBQUE7UUFBQSxHQUFBK0ksUUFBQTtNQUFBLENBR047TUFBQSxpQkFBQUksR0FBQTtRQUFBLE9BQUFMLEtBQUEsQ0FBQXhILEtBQUEsT0FBQUQsU0FBQTtNQUFBO0lBQUEsS0FDRDtNQUNFc0gsVUFBVSxFQUFFLElBQUk7TUFDaEJsRCxpQkFBaUIsRUFBRSxJQUFJO01BQ3ZCbUQsT0FBTyxFQUFFO0lBQ1gsQ0FDRixDQUFDLEVBQUM7RUFDSjs7RUFFQTtFQUNBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFDRCxJQUFJLENBQUNuUixNQUFNLENBQUNnSyxhQUFhLEVBQUU7RUFDekJELFdBQVcsQ0FBQyxDQUFDO0FBQ2YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvaW5qZWN0ZWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IGZvbGRlcl9uYW1lID0gYHVzZXJfaW50ZXJhY3Rpb25fZGF0YWBcbmV4cG9ydCBjb25zdCB6aXAgPSB0cnVlXG5leHBvcnQgY29uc3QgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnXG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8nXG5leHBvcnQgY29uc3QgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkID0gJzY3NmE2NjUxNDQzOThlNjk2NzU2N2EyYidcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZSA9ICdhbWF6b24uY29tJ1xuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNgXG5leHBvcnQgY29uc3QgZmlsdGVyX3VybCA9IFtcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvYnV5LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2EvYWRkcmVzc2VzJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJvZHVjdC9oYW5kbGUtYnV5LWJveC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NoZWNrb3V0cG9ydGFsLycsXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2FydC9kZXNrdG9wLydcbl1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKFxuICAgIHVybCAmJlxuICAgIHVybC5pbmNsdWRlcyh1cmxfaW5jbHVkZSkgJiZcbiAgICAhZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL0luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgY29uc3QgbWV0YURhdGEgPSBodG1sRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuICBjb25zdCBtZXRhTmFtZSA9IGh0bWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gIHJldHVybiB7XG4gICAgbWV0YURhdGE6IG1ldGFEYXRhLFxuICAgIG1ldGFOYW1lOiBtZXRhTmFtZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tleHRlbnNpb24tY2xpY2thYmxlLW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyJylcbiAgfSlcbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmluZFBhZ2VNZXRhLCBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQsIGlzRnJvbVBvcHVwIH0gZnJvbSAnLi91dGlscy91dGlsJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbi8vIGV4dGVuZCB3aW5kb3dcbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgbW9ua2V5UGF0Y2hlZDogYm9vbGVhblxuICB9XG59XG5jb25zdCBtb25rZXlQYXRjaCA9ICgpID0+IHtcbiAgd2luZG93Lm1vbmtleVBhdGNoZWQgPSB0cnVlXG4gIGNvbnN0IG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyXG5cbiAgLy8gQWRkIHRoaXMgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuICBjb25zdCBERUJPVU5DRV9ERUxBWSA9IDE1MCAvLyAzMDBtc1xuICBsZXQgbGFzdENsaWNrVGltZXN0YW1wID0gMFxuICBjb25zdCBUaW1lT3V0ID0gMzAwMDBcbiAgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfWBcbiAgfVxuICBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICAgIGxldCBoYXNoID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICAgIGhhc2ggfD0gMFxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxuICB9XG4gIGZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0b3IoZWxlbWVudDogRWxlbWVudCk6IHN0cmluZyB7XG4gICAgaWYgKGVsZW1lbnQuaWQpIHtcbiAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gXG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSBbXVxuICAgIGxldCBjdXJyZW50ID0gZWxlbWVudFxuXG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBjdXJyZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGxldCBzZWxlY3RvciA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIGlmIChjdXJyZW50LmNsYXNzTmFtZSAmJiB0eXBlb2YgY3VycmVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNlbGVjdG9yICs9ICcuJyArIGN1cnJlbnQuY2xhc3NOYW1lLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICcuJylcbiAgICAgIH1cblxuICAgICAgbGV0IHNpYmxpbmcgPSBjdXJyZW50XG4gICAgICBsZXQgbnRoID0gMVxuICAgICAgd2hpbGUgKHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICBzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09IGN1cnJlbnQudGFnTmFtZSkge1xuICAgICAgICAgIG50aCsrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChudGggPiAxKSB7XG4gICAgICAgIHNlbGVjdG9yICs9IGA6bnRoLW9mLXR5cGUoJHtudGh9KWBcbiAgICAgIH1cblxuICAgICAgcGF0aC51bnNoaWZ0KHNlbGVjdG9yKVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudFxuICAgIH1cblxuICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpXG4gIH1cblxuICBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgdGFyZ2V0OiBhbnksXG4gICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgc2VsZWN0b3I6IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICB1dWlkOiBzdHJpbmdcbiAgKSB7XG4gICAgZnVuY3Rpb24gZmluZENsaWNrYWJsZVBhcmVudChcbiAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgIGRlcHRoOiBudW1iZXIgPSAwLFxuICAgICAgYWxsQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAvLyBCYXNlIGNhc2U6IGlmIGVsZW1lbnQgaXMgbnVsbCBvciB3ZSd2ZSByZWFjaGVkIG1heCBkZXB0aFxuICAgICAgaWYgKCFlbGVtZW50IHx8IGRlcHRoID49IDUpIHJldHVybiBhbGxBdHRyaWJ1dGVzXG5cbiAgICAgIC8vIENoZWNrIGFuZCBjb2xsZWN0IGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIGF0IGN1cnJlbnQgbGV2ZWxcbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJykgfHwgJydcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpKSB7XG4gICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSA9XG4gICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykpIHtcbiAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID1cbiAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRpbnVlIHNlYXJjaGluZyB1cCB0aGUgdHJlZSwgcGFzc2luZyBhbG9uZyBjb2xsZWN0ZWQgYXR0cmlidXRlc1xuICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEsIGFsbEF0dHJpYnV0ZXMpXG4gICAgfVxuXG4gICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuICAgIGNvbnN0IGFsbEF0dHJpYnV0ZXMgPSBmaW5kQ2xpY2thYmxlUGFyZW50KHRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpXG5cbiAgICAvLyBDcmVhdGUgYSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0XG4gICAgY29uc3Qgc2VyaWFsaXplZFRhcmdldCA9IHtcbiAgICAgIHRhZ05hbWU6IHRhcmdldC50YWdOYW1lLFxuICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgaWQ6IHRhcmdldC5pZCxcbiAgICAgIGlubmVyVGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICB9XG4gICAgY29uc3QgbWFya2VkRG9jID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KClcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgdXVpZDogdXVpZCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgdGFyZ2V0OiBzZXJpYWxpemVkVGFyZ2V0LCAvLyBSZXBsYWNlIGRpcmVjdCBET00gZWxlbWVudCB3aXRoIHNlcmlhbGl6YWJsZSBvYmplY3RcbiAgICAgIC8vICAgdGFyZ2V0T3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MLFxuICAgICAgLy8gICB0YXJnZXRDbGFzczogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgIC8vICAgdGFyZ2V0SWQ6IHRhcmdldC5pZCxcbiAgICAgIC8vICAgdGFyZ2V0VGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3IgfHwgJycsXG4gICAgICAnZGF0YS1zZW1hbnRpYy1pZCc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gfHwgJycsXG4gICAgICAnZWxlbWVudC1tZXRhLW5hbWUnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gfHwgJycsXG4gICAgICAnZWxlbWVudC1tZXRhLWRhdGEnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJ10gfHwgJycsXG4gICAgICAncGFnZS1tZXRhJzogcGFnZU1ldGEgfHwgJycsXG4gICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgIGh0bWxDb250ZW50OiBtYXJrZWREb2MuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH1cbiAgLy8gdG9kbzogcGF0Y2ggcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdXBwb3J0IHdyYXBcbiAgY29uc3QgYmxvY2tTaWduYWxzID0ge31cblxuICBjb25zdCBleGVjdXRlRGVmYXVsdEFjdGlvbiA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXhlY3V0ZURlZmF1bHRBY3Rpb24nKVxuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIGlmIChldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgcHJldmVudGVkIGluIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhbmNob3IgPSBlbGVtZW50LmNsb3Nlc3QoJ2EnKVxuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWZcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAvLyBpZiB0eXBlIGlzIHN1Ym1pdCwgc3VibWl0IHRoZSBmb3JtXG4gICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VibWl0IHRoZSBmb3JtJylcbiAgICAgICAgZWxlbWVudC5mb3JtPy5zdWJtaXQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBoYXNEZWZhdWx0QWN0aW9uID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICBjb25zdCBhbmNob3IgPSBlbGVtZW50LmNsb3Nlc3QoJ2EnKVxuICAgIGlmIChhbmNob3IpIHtcbiAgICAgIGlmIChhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLy8gaWYgaWQgaXMgbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uXG4gICAgLy8gaWYgKGVsZW1lbnQuaWQgPT09ICduYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nKSB7XG4gICAgLy8gICByZXR1cm4gdHJ1ZVxuICAgIC8vIH1cblxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbiAgRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2tpcF9tb25rZXlfcGF0Y2gpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJyAmJiBsaXN0ZW5lcikge1xuICAgICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICBpZiAobm93IC0gbGFzdENsaWNrVGltZXN0YW1wIDwgREVCT1VOQ0VfREVMQVkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgYmxvY2tpbmcnKVxuICAgICAgICAgIGlmIChibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXSkge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uc2lnbmFsXG4gICAgICAgICAgICBjb25zdCB3YWl0X2Zvcl9hYm9ydCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYWxyZWFkeSBhYm9ydGVkLCByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBsaXN0ZW4gZm9yIHRoZSBhYm9ydCBldmVudFxuICAgICAgICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlc29sdmUodm9pZCAwKSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCB3YWl0X2Zvcl9hYm9ydFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIHVuYmxvY2tpbmcnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgbm8gYmxvY2sgc2lnbmFsJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxhc3RDbGlja1RpbWVzdGFtcCA9IG5vd1xuICAgICAgICBibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXSA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBkZXRlY3RlZCBvbjonLCBldmVudC50YXJnZXQpXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZilcbiAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSBmYWxzZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwYXRjaCBldmVudCcsIGV2ZW50KVxuICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICdjbGlja19hJyxcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgIGdlbmVyYXRlU2VsZWN0b3IoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNsZWVwIDUgc2Vjb25kc1xuICAgICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiMVwiKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2NyZWVuc2hvdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAvLyByZS1kaXNwYXRjaCB0aGUgZXZlbnRcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKVxuICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJylcbiAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBDcmVhdGUgYSBwcm9taXNlIHRvIHdhaXQgZm9yIHNjcmVlbnNob3QgY29tcGxldGlvblxuICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiYgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICdjbGlja19iJyxcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgIGdlbmVyYXRlU2VsZWN0b3IoZXZlbnQudGFyZ2V0KSxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICAgICAgKVxuICAgICAgICAgIC8vIFJlcXVlc3Qgc2NyZWVuc2hvdFxuICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9LCAnKicpXG4gICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEgfSwgJyonKVxuICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgYWZ0ZXIgc2NyZWVuc2hvdCBpcyBjYXB0dXJlZFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdLmFib3J0KClcbiAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAvLyBpZiBib29sZWFuLCBzZXQgcGFzc2l2ZSB0byB0cnVlXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVzZUNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIHdyYXBwZWRMaXN0ZW5lciwgb3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpXG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrcyBvbiA8YT4gdGFnc1xuICBmdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgaWYgKGlzRnJvbVBvcHVwKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCBiJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgIGlmIChub3cgLSBsYXN0Q2xpY2tUaW1lc3RhbXAgPCBERUJPVU5DRV9ERUxBWSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGFuY2hvciBjbGljayBldmVudCcpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgbGFzdENsaWNrVGltZXN0YW1wID0gbm93XG4gICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG5cbiAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCA8YT4gdGFnIGluIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIGluc2lkZSB0aGUgPGE+XG4gICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcblxuICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgIC8vIGlmICghYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIOebkeWQrOaIquWbvuWujOaIkOeahOa2iOaBr1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpIC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIOWPkemAgeaIquWbvuivt+axglxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wIH0sICcqJylcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICdjbGlja19jJyxcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgIGdlbmVyYXRlU2VsZWN0b3IodGFyZ2V0KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhIH0sICcqJylcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDnrYnlvoXmiKrlm77lrozmiJBcbiAgICAgICAgICAgIGF3YWl0IHNjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuXG4gICAgICAgICAgICAvLyDmiKrlm77noa7orqTlrozmiJDlkI7lho3ot7PovaxcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXS5hYm9ydCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkJylcbiAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VDYXB0dXJlOiB0cnVlLFxuICAgICAgICBza2lwX21vbmtleV9wYXRjaDogdHJ1ZSxcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH1cbiAgICApIC8vIFVzZSBjYXB0dXJlIHBoYXNlIHRvIGludGVyY2VwdCB0aGUgZXZlbnQgZWFybGllclxuICB9XG5cbiAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaGFuZGxlIDxhPiB0YWcgY2xpY2tzXG4gIGhhbmRsZUFuY2hvckNsaWNrcygpXG59XG5pZiAoIXdpbmRvdy5tb25rZXlQYXRjaGVkKSB7XG4gIG1vbmtleVBhdGNoKClcbn1cbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsImZvbGRlcl9uYW1lIiwiemlwIiwidXBsb2FkX3VybCIsImJhc2VfdXJsIiwiZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkIiwidXJsX2luY2x1ZGUiLCJpbnRlcmFjdGlvbl91cmwiLCJjb25jYXQiLCJmaWx0ZXJfdXJsIiwiaXNGcm9tUG9wdXAiLCJlbGVtZW50IiwiY2xvc2VzdCIsInVwZGF0ZV9pY29uIiwidXJsIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwic29tZSIsImV4Y2x1ZGVVcmwiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImh0bWxFbGVtZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJtZXRhRGF0YSIsImdldEF0dHJpYnV0ZSIsIm1ldGFOYW1lIiwiZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0IiwiZG9jdW1lbnRDb3B5IiwiY2xvbmVOb2RlIiwiYWxsRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsInY0IiwidXVpZHY0IiwibW9ua2V5UGF0Y2giLCJtb25rZXlQYXRjaGVkIiwib3JpZ2luYWxBZGRFdmVudExpc3RlbmVyIiwiRXZlbnRUYXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiREVCT1VOQ0VfREVMQVkiLCJsYXN0Q2xpY2tUaW1lc3RhbXAiLCJUaW1lT3V0IiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsImxvY2F0aW9uIiwiaHJlZiIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImdlbmVyYXRlU2VsZWN0b3IiLCJpZCIsImN1cnJlbnQiLCJib2R5IiwicGFyZW50RWxlbWVudCIsInNlbGVjdG9yIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiY2xhc3NOYW1lIiwidHJpbSIsInJlcGxhY2UiLCJzaWJsaW5nIiwibnRoIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInVuc2hpZnQiLCJqb2luIiwiY2FwdHVyZUludGVyYWN0aW9uIiwiZXZlbnRUeXBlIiwidGFyZ2V0IiwidXVpZCIsImZpbmRDbGlja2FibGVQYXJlbnQiLCJkZXB0aCIsImFsbEF0dHJpYnV0ZXMiLCJoYXNBdHRyaWJ1dGUiLCJwYWdlTWV0YSIsImN1cnJlbnRTbmFwc2hvdElkIiwic2VyaWFsaXplZFRhcmdldCIsImlubmVyVGV4dCIsIm91dGVySFRNTCIsIm1hcmtlZERvYyIsImRhdGEiLCJodG1sU25hcHNob3RJZCIsImh0bWxDb250ZW50IiwiYmxvY2tTaWduYWxzIiwiZXhlY3V0ZURlZmF1bHRBY3Rpb24iLCJldmVudCIsIm15X2RlZmF1bHRfcHJldmVudGVkIiwiYW5jaG9yIiwiX2VsZW1lbnQkZm9ybSIsImZvcm0iLCJzdWJtaXQiLCJoYXNEZWZhdWx0QWN0aW9uIiwic3RhcnRzV2l0aCIsImxpc3RlbmVyIiwib3B0aW9ucyIsInNraXBfbW9ua2V5X3BhdGNoIiwid3JhcHBlZExpc3RlbmVyIiwiX3JlZiIsIl9jYWxsZWUiLCJub3ciLCJzaWduYWwiLCJ3YWl0X2Zvcl9hYm9ydCIsInNjcmVlbnNob3RDb21wbGV0ZSIsImludGVyYWN0aW9uQ29tcGxldGUiLCJuZXdFdmVudCIsIl9zY3JlZW5zaG90Q29tcGxldGUiLCJfZGF0YSIsIl9pbnRlcmFjdGlvbkNvbXBsZXRlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImhhbmRsZUV2ZW50IiwianVzdF9mb3JfZGVmYXVsdCIsImFib3J0ZWQiLCJvbmNlIiwiQWJvcnRDb250cm9sbGVyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVNZXNzYWdlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTWVzc2FnZTEiLCJwb3N0TWVzc2FnZSIsInQwIiwiYWJvcnQiLCJNb3VzZUV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsInZpZXciLCJkZXRhaWwiLCJzY3JlZW5YIiwic2NyZWVuWSIsImNsaWVudFgiLCJjbGllbnRZIiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwibWV0YUtleSIsImJ1dHRvbiIsImJ1dHRvbnMiLCJyZWxhdGVkVGFyZ2V0IiwiZGlzcGF0Y2hFdmVudCIsInQxIiwiX3giLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImhhbmRsZUFuY2hvckNsaWNrcyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjYXB0dXJlIiwiX3gyIl0sInNvdXJjZVJvb3QiOiIifQ==
