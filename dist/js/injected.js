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
/* harmony export */   check_user_id_url: () => (/* binding */ check_user_id_url),
/* harmony export */   data_collector_secret_id: () => (/* binding */ data_collector_secret_id),
/* harmony export */   filter_url: () => (/* binding */ filter_url),
/* harmony export */   folder_name: () => (/* binding */ folder_name),
/* harmony export */   interaction_status_url: () => (/* binding */ interaction_status_url),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_includes: () => (/* binding */ url_includes),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
var popup_probability = 0.15;
var folder_name = "user_interaction_data";
var zip = true;
var upload_url = 'http://userdatacollect.hailab.io/upload';
var base_url = 'http://userdatacollect.hailab.io';
var data_collector_secret_id = 'hailab';
var url_includes = ['www.amazon.com'];
var interaction_status_url = "".concat(base_url, "/interactions_record_status");
var check_user_id_url = "".concat(base_url, "/check_user_id");
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
/* harmony export */   check_user_id: () => (/* binding */ check_user_id),
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function isFromPopup(element) {
  return element.closest('#reason-modal') !== null;
}
function update_icon(_x) {
  return _update_icon.apply(this, arguments);
}
function _update_icon() {
  _update_icon = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('update_icon', url);
          _context.next = 3;
          return shouldExclude(url);
        case 3:
          if (_context.sent) {
            _context.next = 8;
            break;
          }
          console.log('active icon');
          chrome.action.setIcon({
            path: '../icon.png'
          });
          _context.next = 10;
          break;
        case 8:
          console.log('inactive icon');
          chrome.action.setIcon({
            path: '../inactive_icon.png'
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _update_icon.apply(this, arguments);
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
function shouldExclude(_x2) {
  return _shouldExclude.apply(this, arguments);
}
function _shouldExclude() {
  _shouldExclude = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var ignoreUserId,
      result,
      userId,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ignoreUserId = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
          if (ignoreUserId) {
            _context2.next = 16;
            break;
          }
          if (!chrome.storage) {
            _context2.next = 11;
            break;
          }
          _context2.next = 5;
          return chrome.storage.local.get('userId');
        case 5:
          result = _context2.sent;
          if (result.userId) {
            _context2.next = 9;
            break;
          }
          console.log('no user id');
          // if there is no user id, we should not be recording anything
          return _context2.abrupt("return", true);
        case 9:
          _context2.next = 16;
          break;
        case 11:
          _context2.next = 13;
          return new Promise(function (resolve) {
            var _handleMessage = function handleMessage(event) {
              if (event.data.type === 'GET_USER_ID_RESPONSE') {
                window.removeEventListener('message', _handleMessage);
                resolve(event.data.userId);
              }
            };
            window.addEventListener('message', _handleMessage);
            window.postMessage({
              type: 'GET_USER_ID'
            }, '*');
          });
        case 13:
          userId = _context2.sent;
          if (userId) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", true);
        case 16:
          if (url) {
            _context2.next = 18;
            break;
          }
          return _context2.abrupt("return", true);
        case 18:
          return _context2.abrupt("return", !_config__WEBPACK_IMPORTED_MODULE_0__.url_includes.some(function (includeUrl) {
            return url.includes(includeUrl);
          }) || _config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some(function (excludeUrl) {
            return url.includes(excludeUrl);
          }));
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _shouldExclude.apply(this, arguments);
}
function generateHtmlSnapshotId(timestamp, uuid) {
  var url = window.location.href;
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
function check_user_id(_x3) {
  return _check_user_id.apply(this, arguments);
}
function _check_user_id() {
  _check_user_id = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user_id) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.check_user_id_url, "?user_id=").concat(user_id), {
            method: 'GET'
          });
        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return response.json();
        case 6:
          data = _context3.sent;
          if (!response.ok) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", 'success');
        case 11:
          return _context3.abrupt("return", data || 'Unknown error');
        case 12:
          _context3.next = 17;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log("Error: ".concat(_context3.t0.message));
        case 17:
          return _context3.abrupt("return", 'Unknown error');
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return _check_user_id.apply(this, arguments);
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

var work = function work() {
  var monkeyPatch = function monkeyPatch() {
    window.monkeyPatched = true;
    var originalAddEventListener = EventTarget.prototype.addEventListener;

    // Add this at the top of the file
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
      var currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);

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
    // const blockSignals = {}
    // const finishSignals = {}
    var wait_for_abort = function wait_for_abort(signal) {
      return new Promise(function (resolve, reject) {
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
    };
    var hasDefaultAction = function hasDefaultAction(event) {
      var element = event.target;
      var anchor = element.closest('a');
      if (anchor) {
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
      var _this = this;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (options && options.skip_monkey_patch) {
        return originalAddEventListener.call(this, type, listener, options);
      }
      var callOriginalListener = function callOriginalListener(event) {
        if (typeof listener === 'function') {
          listener.call(_this, event);
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent.call(listener, event);
        }
      };
      if (type === 'click' && listener) {
        var wrappedListener = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
            var target, controller, signal, timestamp, _uuid, screenshotComplete, interactionComplete, selector, data, newEvent, uuid, _screenshotComplete, _data, _interactionComplete;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!window.shouldExclude) {
                    _context.next = 4;
                    break;
                  }
                  console.log('should exclude');
                  callOriginalListener(event);
                  return _context.abrupt("return");
                case 4:
                  target = event.target;
                  if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
                    _context.next = 8;
                    break;
                  }
                  callOriginalListener(event);
                  return _context.abrupt("return");
                case 8:
                  if (!event.just_for_default) {
                    _context.next = 11;
                    break;
                  }
                  console.log('skip monkey patch');
                  return _context.abrupt("return");
                case 11:
                  if (!event.block_signal) {
                    _context.next = 25;
                    break;
                  }
                  controller = new AbortController();
                  event.finish_signals.push(controller);
                  if (!event.block_signal) {
                    _context.next = 21;
                    break;
                  }
                  signal = event.block_signal.signal;
                  _context.next = 18;
                  return wait_for_abort(signal);
                case 18:
                  console.log('[Monkey Patch] Debouncing click event, unblocking');
                  _context.next = 22;
                  break;
                case 21:
                  console.log('[Monkey Patch] Debouncing click event, no block signal');
                case 22:
                  if (typeof listener === 'function') {
                    listener.call(this, event);
                  } else if (listener && typeof listener.handleEvent === 'function') {
                    listener.handleEvent.call(listener, event);
                  }
                  controller.abort();
                  return _context.abrupt("return");
                case 25:
                  event.block_signal = new AbortController();
                  event.finish_signals = [];
                  console.log('[Monkey Patch] Click detected on:', event.target);
                  console.log(event);
                  timestamp = new Date().toISOString(); // const anchor = target.closest('a')
                  console.log(event.target);
                  if (!hasDefaultAction(event)) {
                    _context.next = 67;
                    break;
                  }
                  // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
                  console.log('[Monkey Patch] Click on cancelable');
                  event.preventDefault();
                  event.preventDefault = function () {
                    event.my_default_prevented = true;
                  };
                  event.my_default_prevented = false;
                  console.log('after patch event', event);
                  // const targetHref = anchor.href
                  _uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                  _context.prev = 38;
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
                  }); // log before and after time
                  selector = (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                    maxNumberOfPathChecks: 0
                  });
                  data = captureInteraction('click_a', event.target, timestamp, selector, window.location.href, _uuid); // await sleep 5 seconds
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
                  console.log('waiting for screenshot and interaction');
                  _context.next = 48;
                  return Promise.all([screenshotComplete, interactionComplete]);
                case 48:
                  console.log('screenshot and interaction complete');
                  // console.log("completed")
                  // debugger
                  // alert("2")
                  // window.location.href = targetHref
                  // re-dispatch the event
                  _context.next = 54;
                  break;
                case 51:
                  _context.prev = 51;
                  _context.t0 = _context["catch"](38);
                  console.error('Error:', _context.t0);
                case 54:
                  _context.prev = 54;
                  console.log('running original listener');
                  console.log(listener);
                  console.log(event);
                  event.block_signal.abort();
                  // abort all finishSignals
                  _context.next = 61;
                  return Promise.all(event.finish_signals.map(function (controller) {
                    return wait_for_abort(controller.signal);
                  }));
                case 61:
                  callOriginalListener(event);
                  console.log('event', event);
                  console.log('re-dispatch the event if its not prevented, 2');
                  if (!event.my_default_prevented) {
                    // debugger
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
                  return _context.finish(54);
                case 66:
                  return _context.abrupt("return");
                case 67:
                  uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                  _context.prev = 68;
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
                  _data = captureInteraction('click_b', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                    maxNumberOfPathChecks: 0
                  }), window.location.href, uuid); // Request screenshot
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
                  // await ASscreenshotComplete
                  // await interactionComplete
                  console.log('waiting for screenshot and interaction');
                  _context.next = 77;
                  return Promise.all([_screenshotComplete, _interactionComplete]);
                case 77:
                  console.log('screenshot and interaction complete');
                  // Execute original listener after screenshot is captured
                  _context.next = 83;
                  break;
                case 80:
                  _context.prev = 80;
                  _context.t1 = _context["catch"](68);
                  console.error('Error capturing screenshot:', _context.t1);
                  // Execute original listener even if screenshot fails
                case 83:
                  _context.prev = 83;
                  console.log('running original listener');
                  event.block_signal.abort();
                  // abort all finishSignals
                  _context.next = 88;
                  return Promise.all(event.finish_signals.map(function (controller) {
                    return wait_for_abort(controller.signal);
                  }));
                case 88:
                  callOriginalListener(event);
                  return _context.finish(83);
                case 90:
                case "end":
                  return _context.stop();
              }
            }, _callee, this, [[38, 51, 54, 66], [68, 80, 83, 90]]);
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
                if (!window.shouldExclude) {
                  _context2.next = 3;
                  break;
                }
                console.log('should exclude');
                return _context2.abrupt("return");
              case 3:
                if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
                  _context2.next = 5;
                  break;
                }
                return _context2.abrupt("return");
              case 5:
                if (!event.just_for_default) {
                  _context2.next = 8;
                  break;
                }
                console.log('skip monkey patch b');
                return _context2.abrupt("return");
              case 8:
                if (!hasDefaultAction(event)) {
                  _context2.next = 44;
                  break;
                }
                // Add debouncing logic
                now = Date.now();
                if (!event.block_signal) {
                  _context2.next = 14;
                  break;
                }
                console.log('[Monkey Patch] Anchor click event hander from our own listener');
                console.log('should already be logged in other event listeners');
                return _context2.abrupt("return");
              case 14:
                event.block_signal = new AbortController();
                event.finish_signals = [];
                target = event.target; // console.log('[Intercepted] Click on <a> tag:', anchor.href)
                console.log('[Intercepted] Click on cancelable');
                // if (!anchor.href.startsWith('javascript:')) {
                event.preventDefault();
                event.stopPropagation();
                timestamp = new Date().toISOString(); // const targetHref = anchor.hrstartPeriodicUploadef
                uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                _context2.prev = 22;
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
                data = captureInteraction('click_c', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(target, {
                  maxNumberOfPathChecks: 0
                }), window.location.href, uuid);
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
                _context2.next = 30;
                return screenshotComplete;
              case 30:
                _context2.next = 32;
                return interactionComplete;
              case 32:
                _context2.next = 37;
                break;
              case 34:
                _context2.prev = 34;
                _context2.t0 = _context2["catch"](22);
                console.error('Error capturing screenshot:', _context2.t0);
                // window.location.href = targetHref
              case 37:
                _context2.prev = 37;
                event.block_signal.abort();
                _context2.next = 41;
                return Promise.all(event.finish_signals.map(function (controller) {
                  return wait_for_abort(controller.signal);
                }));
              case 41:
                console.log('re-dispatch the event if its not prevented, 1');
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
                return _context2.finish(37);
              case 44:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[22, 34, 37, 44]]);
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
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then(function (result) {
      console.log('shouldExclude', result);
      window.shouldExclude = result;
    });
  }, {
    once: true
  });
};

// ignore user id for now, because full check would be async.
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href, true).then(function (result) {
  if (!result) {
    work();
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUMsZUFBZSxFQUFFdUMsTUFBTSxDQUFDO01BQ3BDZCxNQUFNLENBQUN4QixhQUFhLEdBQUdzQyxNQUFNO0lBQy9CLENBQUMsQ0FBQztFQUNKLENBQUMsRUFDRDtJQUNFMkUsSUFBSSxFQUFFO0VBQ1IsQ0FDRixDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBakgsMERBQWEsQ0FBQ3dCLE1BQU0sQ0FBQ29DLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDakksSUFBSSxDQUFDLFVBQUMwRyxNQUFNLEVBQUs7RUFDekQsSUFBSSxDQUFDQSxNQUFNLEVBQUU7SUFDWDZDLElBQUksQ0FBQyxDQUFDO0VBQ1I7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BtZWR2L2ZpbmRlci9maW5kZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9pbmplY3RlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnaGFpbGFiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlcyA9IFsnd3d3LmFtYXpvbi5jb20nXVxuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zX3JlY29yZF9zdGF0dXNgXG5leHBvcnQgY29uc3QgY2hlY2tfdXNlcl9pZF91cmwgPSBgJHtiYXNlX3VybH0vY2hlY2tfdXNlcl9pZGBcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLydcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJ1xuXVxuIiwiaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG4iLCIvLyBMaWNlbnNlOiBNSVRcbi8vIEF1dGhvcjogQW50b24gTWVkdmVkZXYgPGFudG9uQG1lZHYuaW8+XG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRvbm1lZHYvZmluZGVyXG5jb25zdCBhY2NlcHRlZEF0dHJOYW1lcyA9IG5ldyBTZXQoWydyb2xlJywgJ25hbWUnLCAnYXJpYS1sYWJlbCcsICdyZWwnLCAnaHJlZiddKTtcbi8qKiBDaGVjayBpZiBhdHRyaWJ1dGUgbmFtZSBhbmQgdmFsdWUgYXJlIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IG5hbWVJc09rID0gYWNjZXB0ZWRBdHRyTmFtZXMuaGFzKG5hbWUpO1xuICAgIG5hbWVJc09rIHx8PSBuYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykgJiYgd29yZExpa2UobmFtZSk7XG4gICAgbGV0IHZhbHVlSXNPayA9IHdvcmRMaWtlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCAxMDA7XG4gICAgdmFsdWVJc09rIHx8PSB2YWx1ZS5zdGFydHNXaXRoKCcjJykgJiYgd29yZExpa2UodmFsdWUuc2xpY2UoMSkpO1xuICAgIHJldHVybiBuYW1lSXNPayAmJiB2YWx1ZUlzT2s7XG59XG4vKiogQ2hlY2sgaWYgaWQgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gaWROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgY2xhc3MgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgdGFnIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhZ05hbWUobmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqIEZpbmRzIHVuaXF1ZSBDU1Mgc2VsZWN0b3JzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kZXIoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoaW5wdXQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2VuZXJhdGUgQ1NTIHNlbGVjdG9yIGZvciBub24tZWxlbWVudCBub2RlIHR5cGUuYCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgcm9vdDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgaWROYW1lOiBpZE5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICBhdHRyOiBhdHRyLFxuICAgICAgICB0aW1lb3V0TXM6IDEwMDAsXG4gICAgICAgIHNlZWRNaW5MZW5ndGg6IDMsXG4gICAgICAgIG9wdGltaXplZE1pbkxlbmd0aDogMixcbiAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiBJbmZpbml0eSxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IHJvb3REb2N1bWVudCA9IGZpbmRSb290RG9jdW1lbnQoY29uZmlnLnJvb3QsIGRlZmF1bHRzKTtcbiAgICBsZXQgZm91bmRQYXRoO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2Ygc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zIHx8XG4gICAgICAgICAgICBjb3VudCA+PSBjb25maWcubWF4TnVtYmVyT2ZQYXRoQ2hlY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBmUGF0aCA9IGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFmUGF0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGltZW91dDogQ2FuJ3QgZmluZCBhIHVuaXF1ZSBzZWxlY3RvciBhZnRlciAke2NvbmZpZy50aW1lb3V0TXN9bXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcihmUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKHVuaXF1ZShjYW5kaWRhdGUsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kUGF0aCA9IGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZWN0b3Igd2FzIG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW1pemVkID0gW1xuICAgICAgICAuLi5vcHRpbWl6ZShmb3VuZFBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSxcbiAgICBdO1xuICAgIG9wdGltaXplZC5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgaWYgKG9wdGltaXplZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvcihvcHRpbWl6ZWRbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3IoZm91bmRQYXRoKTtcbn1cbmZ1bmN0aW9uKiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aWUoY3VycmVudCwgY29uZmlnKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGxldmVsKSB7XG4gICAgICAgICAgICBub2RlLmxldmVsID0gaTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxldmVsKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgICAgICBwYXRocy5wdXNoKC4uLmNvbWJpbmF0aW9ucyhzdGFjaykpO1xuICAgICAgICBpZiAoaSA+PSBjb25maWcuc2VlZE1pbkxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRocyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgfVxufVxuZnVuY3Rpb24gd29yZExpa2UobmFtZSkge1xuICAgIGlmICgvXlthLXpcXC1dezMsfSQvaS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gbmFtZS5zcGxpdCgvLXxbQS1aXS8pO1xuICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgICAgICAgIGlmICh3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9bXmFlaW91XXs0LH0vaS50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0aWUoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBbXTtcbiAgICBjb25zdCBlbGVtZW50SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAoZWxlbWVudElkICYmIGNvbmZpZy5pZE5hbWUoZWxlbWVudElkKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICcjJyArIENTUy5lc2NhcGUoZWxlbWVudElkKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFtpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5jbGFzc05hbWUobmFtZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcuJyArIENTUy5lc2NhcGUobmFtZSksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBlbGVtZW50LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGlmIChjb25maWcuYXR0cihhdHRyLm5hbWUsIGF0dHIudmFsdWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgWyR7Q1NTLmVzY2FwZShhdHRyLm5hbWUpfT1cIiR7Q1NTLmVzY2FwZShhdHRyLnZhbHVlKX1cIl1gLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbmZpZy50YWdOYW1lKHRhZ05hbWUpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogdGFnTmFtZSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbnRoID0gaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAobnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhDaGlsZCh0YWdOYW1lLCBudGgpLFxuICAgICAgICAgICAgcGVuYWx0eTogNTAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGV2ZWw7XG59XG5mdW5jdGlvbiBzZWxlY3RvcihwYXRoKSB7XG4gICAgbGV0IG5vZGUgPSBwYXRoWzBdO1xuICAgIGxldCBxdWVyeSA9IG5vZGUubmFtZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBwYXRoW2ldLmxldmVsIHx8IDA7XG4gICAgICAgIGlmIChub2RlLmxldmVsID09PSBsZXZlbCAtIDEpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSA+ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHBhdGhbaV07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIHBlbmFsdHkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLm1hcCgobm9kZSkgPT4gbm9kZS5wZW5hbHR5KS5yZWR1Y2UoKGFjYywgaSkgPT4gYWNjICsgaSwgMCk7XG59XG5mdW5jdGlvbiBieVBlbmFsdHkoYSwgYikge1xuICAgIHJldHVybiBwZW5hbHR5KGEpIC0gcGVuYWx0eShiKTtcbn1cbmZ1bmN0aW9uIGluZGV4T2YoaW5wdXQsIHRhZ05hbWUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICAgICAodGFnTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YWdOYW1lKSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuZnVuY3Rpb24gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCkge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoY3VycmVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICBwZW5hbHR5OiBOYU4sXG4gICAgICAgICAgICBsZXZlbDogaSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaWYgKHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG50aENoaWxkKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLWNoaWxkKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtb2YtdHlwZSgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24qIGNvbWJpbmF0aW9ucyhzdGFjaywgcGF0aCA9IFtdKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBzdGFja1swXSkge1xuICAgICAgICAgICAgeWllbGQqIGNvbWJpbmF0aW9ucyhzdGFjay5zbGljZSgxLCBzdGFjay5sZW5ndGgpLCBwYXRoLmNvbmNhdChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHlpZWxkIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gZmluZFJvb3REb2N1bWVudChyb290Tm9kZSwgZGVmYXVsdHMpIHtcbiAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICAgIGlmIChyb290Tm9kZSA9PT0gZGVmYXVsdHMucm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGUub3duZXJEb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xufVxuZnVuY3Rpb24gdW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IGNzcyA9IHNlbGVjdG9yKHBhdGgpO1xuICAgIHN3aXRjaCAocm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3NzKS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBzZWxlY3QgYW55IG5vZGUgd2l0aCB0aGlzIHNlbGVjdG9yOiAke2Nzc31gKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24qIG9wdGltaXplKHBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMiAmJiBwYXRoLmxlbmd0aCA+IGNvbmZpZy5vcHRpbWl6ZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBbLi4ucGF0aF07XG4gICAgICAgICAgICBuZXdQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGlmICh1bmlxdWUobmV3UGF0aCwgcm9vdERvY3VtZW50KSAmJlxuICAgICAgICAgICAgICAgIHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKG5ld1BhdGgpKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXdQYXRoO1xuICAgICAgICAgICAgICAgIHlpZWxkKiBvcHRpbWl6ZShuZXdQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGZpbmRQYWdlTWV0YSxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBpc0Zyb21Qb3B1cCxcbiAgc2hvdWxkRXhjbHVkZSxcbiAgZ2VuZXJhdGVIdG1sU25hcHNob3RJZFxufSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgZmluZGVyIH0gZnJvbSAnQG1lZHYvZmluZGVyJ1xuLy8gZXh0ZW5kIHdpbmRvd1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBtb25rZXlQYXRjaGVkOiBib29sZWFuXG4gICAgc2hvdWxkRXhjbHVkZTogYm9vbGVhblxuICB9XG59XG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIGNvbnN0IG1vbmtleVBhdGNoID0gKCkgPT4ge1xuICAgIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICAgIGNvbnN0IG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyXG5cbiAgICAvLyBBZGQgdGhpcyBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgY29uc3QgVGltZU91dCA9IDMwMDAwXG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICAgIHRhcmdldDogYW55LFxuICAgICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICB1dWlkOiBzdHJpbmdcbiAgICApIHtcbiAgICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoXG4gICAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgZGVwdGg6IG51bWJlciA9IDAsXG4gICAgICAgIGFsbEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgICAgKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAgIC8vIEJhc2UgY2FzZTogaWYgZWxlbWVudCBpcyBudWxsIG9yIHdlJ3ZlIHJlYWNoZWQgbWF4IGRlcHRoXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSAxNSkgcmV0dXJuIGFsbEF0dHJpYnV0ZXNcblxuICAgICAgICAvLyBDaGVjayBhbmQgY29sbGVjdCBhbGwgcmVsZXZhbnQgYXR0cmlidXRlcyBhdCBjdXJyZW50IGxldmVsXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9XG4gICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb250aW51ZSBzZWFyY2hpbmcgdXAgdGhlIHRyZWUsIHBhc3NpbmcgYWxvbmcgY29sbGVjdGVkIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEsIGFsbEF0dHJpYnV0ZXMpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcbiAgICAgIGNvbnN0IGFsbEF0dHJpYnV0ZXMgPSBmaW5kQ2xpY2thYmxlUGFyZW50KHRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICAvLyBDcmVhdGUgYSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0XG4gICAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICB0YXJnZXQ6IHNlcmlhbGl6ZWRUYXJnZXQsXG4gICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAnZGF0YS1zZW1hbnRpYy1pZCc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gfHwgJycsXG4gICAgICAgICdlbGVtZW50LW1ldGEtbmFtZSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSB8fCAnJyxcbiAgICAgICAgJ2VsZW1lbnQtbWV0YS1kYXRhJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddIHx8ICcnLFxuICAgICAgICAncGFnZS1tZXRhJzogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgIHVybDogdXJsIHx8ICcnLFxuICAgICAgICBodG1sQ29udGVudDogbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gICAgLy8gdG9kbzogcGF0Y2ggcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdXBwb3J0IHdyYXBcbiAgICAvLyBjb25zdCBibG9ja1NpZ25hbHMgPSB7fVxuICAgIC8vIGNvbnN0IGZpbmlzaFNpZ25hbHMgPSB7fVxuICAgIGNvbnN0IHdhaXRfZm9yX2Fib3J0ID0gKHNpZ25hbCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgLy8gSWYgYWxyZWFkeSBhYm9ydGVkLCByZXNvbHZlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCBsaXN0ZW4gZm9yIHRoZSBhYm9ydCBldmVudFxuICAgICAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHJlc29sdmUodm9pZCAwKSwgeyBvbmNlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFzRGVmYXVsdEFjdGlvbiA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpXG4gICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICAvLyBpZiBpZCBpcyBuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cbiAgICAgIC8vIGlmIChlbGVtZW50LmlkID09PSAnbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJykge1xuICAgICAgLy8gICByZXR1cm4gdHJ1ZVxuICAgICAgLy8gfVxuXG4gICAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbiAgICBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNraXBfbW9ua2V5X3BhdGNoKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbGxPcmlnaW5hbExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAnY2xpY2snICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRMaXN0ZW5lciA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuc2hvdWxkRXhjbHVkZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBleGNsdWRlJylcbiAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLnB1c2goY29udHJvbGxlcilcbiAgICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gZXZlbnQuYmxvY2tfc2lnbmFsLnNpZ25hbFxuICAgICAgICAgICAgICBhd2FpdCB3YWl0X2Zvcl9hYm9ydChzaWduYWwpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCB1bmJsb2NraW5nJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBubyBibG9jayBzaWduYWwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscyA9IFtdXG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwYXRjaCBldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gbG9nIGJlZm9yZSBhbmQgYWZ0ZXIgdGltZVxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGZpbmRlcihldmVudC50YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgICAnY2xpY2tfYScsXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAvLyBhd2FpdCBzbGVlcCA1IHNlY29uZHNcbiAgICAgICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKTtcbiAgICAgICAgICAgICAgLy8gYWxlcnQoXCIxXCIpXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgICAgLy8gYWxlcnQoXCIzXCIpXG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhaXRpbmcgZm9yIHNjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uJylcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NjcmVlbnNob3RDb21wbGV0ZSwgaW50ZXJhY3Rpb25Db21wbGV0ZV0pXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbiBjb21wbGV0ZScpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIpXG4gICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgICAgLy8gcmUtZGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdGVuZXIpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwuYWJvcnQoKVxuICAgICAgICAgICAgICAvLyBhYm9ydCBhbGwgZmluaXNoU2lnbmFsc1xuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5tYXAoKGNvbnRyb2xsZXIpID0+IHdhaXRfZm9yX2Fib3J0KGNvbnRyb2xsZXIuc2lnbmFsKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQsIDInKVxuICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwcm9taXNlIHRvIHdhaXQgZm9yIHNjcmVlbnNob3QgY29tcGxldGlvblxuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAnY2xpY2tfYicsXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICBmaW5kZXIoZXZlbnQudGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgIC8vIGF3YWl0IEFTc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICAvLyBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2FpdGluZyBmb3Igc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24nKVxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NjcmVlbnNob3RDb21wbGV0ZSwgaW50ZXJhY3Rpb25Db21wbGV0ZV0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24gY29tcGxldGUnKVxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBldmVuIGlmIHNjcmVlbnNob3QgZmFpbHNcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgIC8vIGFib3J0IGFsbCBmaW5pc2hTaWduYWxzXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBpZiBib29sZWFuLCBzZXQgcGFzc2l2ZSB0byB0cnVlXG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIHVzZUNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJylcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjbGlja3Mgb24gPGE+IHRhZ3NcbiAgICBmdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBpZiAod2luZG93LnNob3VsZEV4Y2x1ZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgZXhjbHVkZScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoIGInKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgPGE+IHRhZyBpbiBjYXNlIG9mIG5lc3RlZCBlbGVtZW50cyBpbnNpZGUgdGhlIDxhPlxuICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcblxuICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIEFuY2hvciBjbGljayBldmVudCBoYW5kZXIgZnJvbSBvdXIgb3duIGxpc3RlbmVyJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBhbHJlYWR5IGJlIGxvZ2dlZCBpbiBvdGhlciBldmVudCBsaXN0ZW5lcnMnKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMgPSBbXVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICAgIC8vIGlmICghYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocnN0YXJ0UGVyaW9kaWNVcGxvYWRlZlxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyDnm5HlkKzmiKrlm77lrozmiJDnmoTmtojmga9cbiAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyDmt7vliqDotoXml7blpITnkIZcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpIC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAvLyDlj5HpgIHmiKrlm77or7fmsYJcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgICAnY2xpY2tfYycsXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBmaW5kZXIodGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8g562J5b6F5oiq5Zu+5a6M5oiQXG4gICAgICAgICAgICAgIGF3YWl0IHNjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG5cbiAgICAgICAgICAgICAgLy8g5oiq5Zu+56Gu6K6k5a6M5oiQ5ZCO5YaN6Lez6L2sXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlLWRpc3BhdGNoIHRoZSBldmVudCBpZiBpdHMgbm90IHByZXZlbnRlZCwgMScpXG4gICAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVzZUNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgc2tpcF9tb25rZXlfcGF0Y2g6IHRydWUsXG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgKSAvLyBVc2UgY2FwdHVyZSBwaGFzZSB0byBpbnRlcmNlcHQgdGhlIGV2ZW50IGVhcmxpZXJcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBoYW5kbGUgPGE+IHRhZyBjbGlja3NcbiAgICBoYW5kbGVBbmNob3JDbGlja3MoKVxuICB9XG4gIGlmICghd2luZG93Lm1vbmtleVBhdGNoZWQpIHtcbiAgICBtb25rZXlQYXRjaCgpXG4gIH1cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnRE9NQ29udGVudExvYWRlZCcsXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKVxuICAgICAgc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGRFeGNsdWRlJywgcmVzdWx0KVxuICAgICAgICB3aW5kb3cuc2hvdWxkRXhjbHVkZSA9IHJlc3VsdFxuICAgICAgfSlcbiAgICB9LFxuICAgIHtcbiAgICAgIG9uY2U6IHRydWVcbiAgICB9XG4gIClcbn1cblxuLy8gaWdub3JlIHVzZXIgaWQgZm9yIG5vdywgYmVjYXVzZSBmdWxsIGNoZWNrIHdvdWxkIGJlIGFzeW5jLlxuc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgd29yaygpXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsicG9wdXBfcHJvYmFiaWxpdHkiLCJmb2xkZXJfbmFtZSIsInppcCIsInVwbG9hZF91cmwiLCJiYXNlX3VybCIsImRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCIsInVybF9pbmNsdWRlcyIsImludGVyYWN0aW9uX3N0YXR1c191cmwiLCJjb25jYXQiLCJjaGVja191c2VyX2lkX3VybCIsImZpbHRlcl91cmwiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiaXNGcm9tUG9wdXAiLCJlbGVtZW50IiwiY2xvc2VzdCIsInVwZGF0ZV9pY29uIiwiX3giLCJfdXBkYXRlX2ljb24iLCJfY2FsbGVlIiwidXJsIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzaG91bGRFeGNsdWRlIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJmaW5kUGFnZU1ldGEiLCJhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdyb3VwZWRSZXN1bHQiLCJtZXRhTmFtZSIsImdldEF0dHJpYnV0ZSIsIm1ldGFEYXRhIiwiSlNPTiIsInBhcnNlIiwiZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0IiwiZG9jdW1lbnRDb3B5IiwiY2xvbmVOb2RlIiwiYWxsRWxlbWVudHMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGlja2FibGVNYXJrZXJzIiwicmVtb3ZlQXR0cmlidXRlIiwiX3gyIiwiX3Nob3VsZEV4Y2x1ZGUiLCJfY2FsbGVlMiIsImlnbm9yZVVzZXJJZCIsInJlc3VsdCIsInVzZXJJZCIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInVuZGVmaW5lZCIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImhhbmRsZU1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc3RNZXNzYWdlIiwic29tZSIsImluY2x1ZGVVcmwiLCJpbmNsdWRlcyIsImV4Y2x1ZGVVcmwiLCJnZW5lcmF0ZUh0bWxTbmFwc2hvdElkIiwidGltZXN0YW1wIiwidXVpZCIsImxvY2F0aW9uIiwiaHJlZiIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsImNoZWNrX3VzZXJfaWQiLCJfeDMiLCJfY2hlY2tfdXNlcl9pZCIsIl9jYWxsZWUzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmV0Y2giLCJqc29uIiwib2siLCJ0MCIsIm1lc3NhZ2UiLCJ2NCIsInV1aWR2NCIsImZpbmRlciIsIndvcmsiLCJtb25rZXlQYXRjaCIsIm1vbmtleVBhdGNoZWQiLCJvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudFRhcmdldCIsIlRpbWVPdXQiLCJjYXB0dXJlSW50ZXJhY3Rpb24iLCJldmVudFR5cGUiLCJ0YXJnZXQiLCJzZWxlY3RvciIsImZpbmRDbGlja2FibGVQYXJlbnQiLCJkZXB0aCIsImFsbEF0dHJpYnV0ZXMiLCJoYXNBdHRyaWJ1dGUiLCJwYXJlbnRFbGVtZW50IiwicGFnZU1ldGEiLCJjdXJyZW50U25hcHNob3RJZCIsInNlcmlhbGl6ZWRUYXJnZXQiLCJ0YWdOYW1lIiwiY2xhc3NOYW1lIiwiaWQiLCJpbm5lclRleHQiLCJvdXRlckhUTUwiLCJtYXJrZWREb2MiLCJodG1sU25hcHNob3RJZCIsImh0bWxDb250ZW50Iiwid2FpdF9mb3JfYWJvcnQiLCJzaWduYWwiLCJyZWplY3QiLCJhYm9ydGVkIiwib25jZSIsImhhc0RlZmF1bHRBY3Rpb24iLCJhbmNob3IiLCJ0b0xvd2VyQ2FzZSIsImxpc3RlbmVyIiwiX3RoaXMiLCJvcHRpb25zIiwic2tpcF9tb25rZXlfcGF0Y2giLCJjYWxsT3JpZ2luYWxMaXN0ZW5lciIsImhhbmRsZUV2ZW50Iiwid3JhcHBlZExpc3RlbmVyIiwiX3JlZiIsImNvbnRyb2xsZXIiLCJfdXVpZCIsInNjcmVlbnNob3RDb21wbGV0ZSIsImludGVyYWN0aW9uQ29tcGxldGUiLCJuZXdFdmVudCIsIl9zY3JlZW5zaG90Q29tcGxldGUiLCJfZGF0YSIsIl9pbnRlcmFjdGlvbkNvbXBsZXRlIiwianVzdF9mb3JfZGVmYXVsdCIsImJsb2NrX3NpZ25hbCIsIkFib3J0Q29udHJvbGxlciIsImZpbmlzaF9zaWduYWxzIiwiYWJvcnQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJwcmV2ZW50RGVmYXVsdCIsIm15X2RlZmF1bHRfcHJldmVudGVkIiwic3VjY2VzcyIsImVycm9yIiwic2V0VGltZW91dCIsImhhbmRsZU1lc3NhZ2UxIiwibWF4TnVtYmVyT2ZQYXRoQ2hlY2tzIiwiYWxsIiwibWFwIiwiTW91c2VFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJ2aWV3IiwiZGV0YWlsIiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJidXR0b25zIiwicmVsYXRlZFRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJ0MSIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiaGFuZGxlQW5jaG9yQ2xpY2tzIiwiX3JlZjIiLCJub3ciLCJzdG9wUHJvcGFnYXRpb24iLCJjYXB0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==
