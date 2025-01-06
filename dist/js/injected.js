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
var data_collector_secret_id = '676a665144398e6967567a2b';
var url_includes = ['amazon.com', '127.0.0.1:8000'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxpQkFBaUIsR0FBRyxJQUFJO0FBQzlCLElBQU1DLFdBQVcsMEJBQTBCO0FBQzNDLElBQU1DLEdBQUcsR0FBRyxJQUFJO0FBQ2hCLElBQU1DLFVBQVUsR0FBRyx5Q0FBeUM7QUFDNUQsSUFBTUMsUUFBUSxHQUFHLGtDQUFrQztBQUNuRCxJQUFNQyx3QkFBd0IsR0FBRywwQkFBMEI7QUFDM0QsSUFBTUMsWUFBWSxHQUFHLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO0FBQ3JELElBQU1DLHNCQUFzQixNQUFBQyxNQUFBLENBQU1KLFFBQVEsZ0NBQTZCO0FBQ3ZFLElBQU1LLGlCQUFpQixNQUFBRCxNQUFBLENBQU1KLFFBQVEsbUJBQWdCO0FBQ3JELElBQU1NLFVBQVUsR0FBRyxDQUN4QixrQ0FBa0MsRUFDbEMsZ0NBQWdDLEVBQ2hDLG9DQUFvQyxFQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUFBLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0NoQkQscUpBQUFDLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csbUJBQUFqRyxDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUwsQ0FBQSxDQUFBTyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUFELEtBQUEsV0FBQUosQ0FBQSxnQkFBQUwsQ0FBQSxDQUFBSyxDQUFBLEtBQUFLLENBQUEsQ0FBQTZDLElBQUEsR0FBQXRELENBQUEsQ0FBQWUsQ0FBQSxJQUFBd0UsT0FBQSxDQUFBdEMsT0FBQSxDQUFBbEMsQ0FBQSxFQUFBb0MsSUFBQSxDQUFBbEQsQ0FBQSxFQUFBSyxDQUFBO0FBQUEsU0FBQWdHLGtCQUFBbEcsQ0FBQSw2QkFBQUosQ0FBQSxTQUFBRCxDQUFBLEdBQUF3RyxTQUFBLGFBQUFoQixPQUFBLFdBQUF0RixDQUFBLEVBQUFLLENBQUEsUUFBQUssQ0FBQSxHQUFBUCxDQUFBLENBQUFvRyxLQUFBLENBQUF4RyxDQUFBLEVBQUFELENBQUEsWUFBQTBHLE1BQUFyRyxDQUFBLElBQUFpRyxrQkFBQSxDQUFBMUYsQ0FBQSxFQUFBVixDQUFBLEVBQUFLLENBQUEsRUFBQW1HLEtBQUEsRUFBQUMsTUFBQSxVQUFBdEcsQ0FBQSxjQUFBc0csT0FBQXRHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFdBQUF0RyxDQUFBLEtBQUFxRyxLQUFBO0FBRHVFO0FBRWhFLFNBQVNFLFdBQVdBLENBQUNDLE9BQW9CLEVBQVc7RUFDekQsT0FBT0EsT0FBTyxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssSUFBSTtBQUNsRDtBQUNPLFNBQWVDLFdBQVdBLENBQUFDLEVBQUE7RUFBQSxPQUFBQyxZQUFBLENBQUFSLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBYWhDLFNBQUFTLGFBQUE7RUFBQUEsWUFBQSxHQUFBVixpQkFBQSxjQUFBeEcsbUJBQUEsR0FBQW9GLElBQUEsQ0FiTSxTQUFBK0IsUUFBMkJDLEdBQUc7SUFBQSxPQUFBcEgsbUJBQUEsR0FBQXVCLElBQUEsVUFBQThGLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBekIsSUFBQSxHQUFBeUIsUUFBQSxDQUFBcEQsSUFBQTtRQUFBO1VBQ25DcUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFSixHQUFHLENBQUM7VUFBQUUsUUFBQSxDQUFBcEQsSUFBQTtVQUFBLE9BQ25CdUQsYUFBYSxDQUFDTCxHQUFHLENBQUM7UUFBQTtVQUFBLElBQUFFLFFBQUEsQ0FBQTFELElBQUE7WUFBQTBELFFBQUEsQ0FBQXBELElBQUE7WUFBQTtVQUFBO1VBQzVCcUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO1VBQzFCRSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1lBQ3BCQyxJQUFJLEVBQUU7VUFDUixDQUFDLENBQUM7VUFBQVAsUUFBQSxDQUFBcEQsSUFBQTtVQUFBO1FBQUE7VUFFRnFELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztVQUM1QkUsTUFBTSxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztZQUNwQkMsSUFBSSxFQUFFO1VBQ1IsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFQLFFBQUEsQ0FBQXRCLElBQUE7TUFBQTtJQUFBLEdBQUFtQixPQUFBO0VBQUEsQ0FFTDtFQUFBLE9BQUFELFlBQUEsQ0FBQVIsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFFTSxTQUFTcUIsWUFBWUEsQ0FBQSxFQUFHO0VBQzdCLElBQU1DLDBCQUEwQixHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0VBRXhGLElBQU1DLGFBQWEsR0FBRyxDQUFDLENBQUM7RUFFeEJILDBCQUEwQixDQUFDakYsT0FBTyxDQUFDLFVBQUNnRSxPQUFPLEVBQUs7SUFDOUMsSUFBTXFCLFFBQVEsR0FBR3JCLE9BQU8sQ0FBQ3NCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztJQUMvRCxJQUFNQyxRQUFRLEdBQUd2QixPQUFPLENBQUNzQixZQUFZLENBQUMsd0JBQXdCLENBQUM7SUFFL0QsSUFBSSxDQUFDRixhQUFhLENBQUNDLFFBQVEsQ0FBQyxFQUFFO01BQzVCRCxhQUFhLENBQUNDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7SUFDOUI7SUFDQUQsYUFBYSxDQUFDQyxRQUFRLENBQUMsQ0FBQ3pELElBQUksQ0FBQzRELElBQUksQ0FBQ0MsS0FBSyxDQUFDRixRQUFRLENBQUMsQ0FBQztFQUNwRCxDQUFDLENBQUM7RUFFRixPQUFPSCxhQUFhO0FBQ3RCO0FBRU8sU0FBU00sOEJBQThCQSxDQUFBLEVBQUc7RUFDL0M7RUFDQSxJQUFNQyxZQUFZLEdBQUdULFFBQVEsQ0FBQ1UsU0FBUyxDQUFDLElBQUksQ0FBYTtFQUN6RCxJQUFNQyxXQUFXLEdBQUdGLFlBQVksQ0FBQ1IsZ0JBQWdCLENBQy9DLGtFQUNGLENBQUM7O0VBRUQ7RUFDQVUsV0FBVyxDQUFDN0YsT0FBTyxDQUFDLFVBQUNnRSxPQUFPLEVBQUs7SUFDL0IsSUFBTThCLElBQUksR0FBRzlCLE9BQU8sQ0FBQytCLHFCQUFxQixDQUFDLENBQUM7SUFDNUMsSUFDRUQsSUFBSSxDQUFDRSxHQUFHLElBQUksQ0FBQyxJQUNiRixJQUFJLENBQUNHLElBQUksSUFBSSxDQUFDLElBQ2RILElBQUksQ0FBQ0ksTUFBTSxLQUFLQyxNQUFNLENBQUNDLFdBQVcsSUFBSWxCLFFBQVEsQ0FBQ21CLGVBQWUsQ0FBQ0MsWUFBWSxDQUFDLElBQzVFUixJQUFJLENBQUNTLEtBQUssS0FBS0osTUFBTSxDQUFDSyxVQUFVLElBQUl0QixRQUFRLENBQUNtQixlQUFlLENBQUNJLFdBQVcsQ0FBQyxFQUN6RTtNQUNBO01BQ0F6QyxPQUFPLENBQUMwQyxZQUFZLENBQUMsa0NBQWtDLEVBQUUsTUFBTSxDQUFDO0lBQ2xFO0VBQ0YsQ0FBQyxDQUFDO0VBQ0YsT0FBT2YsWUFBWTtBQUNyQjs7QUFFQTtBQUNPLFNBQVNnQixzQkFBc0JBLENBQUEsRUFBRztFQUN2Q3pCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQ25GLE9BQU8sQ0FBQyxVQUFDZ0UsT0FBTyxFQUFLO0lBQ25GQSxPQUFPLENBQUM0QyxlQUFlLENBQUMsa0NBQWtDLENBQUM7RUFDN0QsQ0FBQyxDQUFDO0FBQ0o7QUFFTyxTQUFlakMsYUFBYUEsQ0FBQWtDLEdBQUE7RUFBQSxPQUFBQyxjQUFBLENBQUFsRCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQWlDbEMsU0FBQW1ELGVBQUE7RUFBQUEsY0FBQSxHQUFBcEQsaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBakNNLFNBQUF5RSxTQUE2QnpDLEdBQVc7SUFBQSxJQUFBMEMsWUFBQTtNQUFBQyxNQUFBO01BQUFDLE1BQUE7TUFBQUMsTUFBQSxHQUFBeEQsU0FBQTtJQUFBLE9BQUF6RyxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMkksVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF0RSxJQUFBLEdBQUFzRSxTQUFBLENBQUFqRyxJQUFBO1FBQUE7VUFBRTRGLFlBQXFCLEdBQUFHLE1BQUEsQ0FBQWxGLE1BQUEsUUFBQWtGLE1BQUEsUUFBQUcsU0FBQSxHQUFBSCxNQUFBLE1BQUcsS0FBSztVQUFBLElBQ3ZFSCxZQUFZO1lBQUFLLFNBQUEsQ0FBQWpHLElBQUE7WUFBQTtVQUFBO1VBQUEsS0FDWHdELE1BQU0sQ0FBQzJDLE9BQU87WUFBQUYsU0FBQSxDQUFBakcsSUFBQTtZQUFBO1VBQUE7VUFBQWlHLFNBQUEsQ0FBQWpHLElBQUE7VUFBQSxPQUNLd0QsTUFBTSxDQUFDMkMsT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFBQTtVQUFqRFIsTUFBTSxHQUFBSSxTQUFBLENBQUF2RyxJQUFBO1VBQUEsSUFDUG1HLE1BQU0sQ0FBQ0MsTUFBTTtZQUFBRyxTQUFBLENBQUFqRyxJQUFBO1lBQUE7VUFBQTtVQUNoQnFELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztVQUN6QjtVQUFBLE9BQUEyQyxTQUFBLENBQUFwRyxNQUFBLFdBQ08sSUFBSTtRQUFBO1VBQUFvRyxTQUFBLENBQUFqRyxJQUFBO1VBQUE7UUFBQTtVQUFBaUcsU0FBQSxDQUFBakcsSUFBQTtVQUFBLE9BR1EsSUFBSXVCLE9BQU8sQ0FBUyxVQUFDdEMsT0FBTyxFQUFLO1lBQ3BELElBQU1xSCxjQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlDLEtBQW1CLEVBQUs7Y0FDN0MsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLENBQUM3SSxJQUFJLEtBQUssc0JBQXNCLEVBQUU7Z0JBQzlDb0gsTUFBTSxDQUFDMEIsbUJBQW1CLENBQUMsU0FBUyxFQUFFSCxjQUFhLENBQUM7Z0JBQ3BEckgsT0FBTyxDQUFDc0gsS0FBSyxDQUFDQyxJQUFJLENBQUNWLE1BQU0sQ0FBQztjQUM1QjtZQUNGLENBQUM7WUFDRGYsTUFBTSxDQUFDMkIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFSixjQUFhLENBQUM7WUFDakR2QixNQUFNLENBQUM0QixXQUFXLENBQUM7Y0FBRWhKLElBQUksRUFBRTtZQUFjLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDbEQsQ0FBQyxDQUFDO1FBQUE7VUFUSW1JLE1BQU0sR0FBQUcsU0FBQSxDQUFBdkcsSUFBQTtVQUFBLElBVVBvRyxNQUFNO1lBQUFHLFNBQUEsQ0FBQWpHLElBQUE7WUFBQTtVQUFBO1VBQUEsT0FBQWlHLFNBQUEsQ0FBQXBHLE1BQUEsV0FFRixJQUFJO1FBQUE7VUFBQSxJQUlacUQsR0FBRztZQUFBK0MsU0FBQSxDQUFBakcsSUFBQTtZQUFBO1VBQUE7VUFBQSxPQUFBaUcsU0FBQSxDQUFBcEcsTUFBQSxXQUNDLElBQUk7UUFBQTtVQUFBLE9BQUFvRyxTQUFBLENBQUFwRyxNQUFBLFdBR1gsQ0FBQ3BFLGlEQUFZLENBQUNtTCxJQUFJLENBQUMsVUFBQ0MsVUFBVTtZQUFBLE9BQUszRCxHQUFHLENBQUM0RCxRQUFRLENBQUNELFVBQVUsQ0FBQztVQUFBLEVBQUMsSUFDNURoTCwrQ0FBVSxDQUFDK0ssSUFBSSxDQUFDLFVBQUNHLFVBQVU7WUFBQSxPQUFLN0QsR0FBRyxDQUFDNEQsUUFBUSxDQUFDQyxVQUFVLENBQUM7VUFBQSxFQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFkLFNBQUEsQ0FBQW5FLElBQUE7TUFBQTtJQUFBLEdBQUE2RCxRQUFBO0VBQUEsQ0FFNUQ7RUFBQSxPQUFBRCxjQUFBLENBQUFsRCxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUVNLFNBQVN5RSxzQkFBc0JBLENBQUNDLElBQVksRUFBRTtFQUNuRCxJQUFNL0QsR0FBRyxHQUFHNkIsTUFBTSxDQUFDbUMsUUFBUSxDQUFDQyxJQUFJO0VBQ2hDLElBQU1DLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUMxQyxlQUFBM0wsTUFBQSxDQUFlNEwsUUFBUSxDQUFDckUsR0FBRyxDQUFDLE9BQUF2SCxNQUFBLENBQUl5TCxTQUFTLE9BQUF6TCxNQUFBLENBQUlzTCxJQUFJO0FBQ25EO0FBQ08sU0FBU00sUUFBUUEsQ0FBQ0MsR0FBVyxFQUFFO0VBQ3BDLElBQUlDLElBQUksR0FBRyxDQUFDO0VBQ1osS0FBSyxJQUFJaEwsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0ssR0FBRyxDQUFDM0csTUFBTSxFQUFFcEUsQ0FBQyxFQUFFLEVBQUU7SUFDbkNnTCxJQUFJLEdBQUcsQ0FBQ0EsSUFBSSxJQUFJLENBQUMsSUFBSUEsSUFBSSxHQUFHRCxHQUFHLENBQUNFLFVBQVUsQ0FBQ2pMLENBQUMsQ0FBQztJQUM3Q2dMLElBQUksSUFBSSxDQUFDO0VBQ1g7RUFDQXBFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJCQUEyQixFQUFFbUUsSUFBSSxDQUFDO0VBQzlDLE9BQU9BLElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUM7QUFDeEI7QUFFTyxTQUFlQyxhQUFhQSxDQUFBQyxHQUFBO0VBQUEsT0FBQUMsY0FBQSxDQUFBdEYsS0FBQSxPQUFBRCxTQUFBO0FBQUE7QUFnQmxDLFNBQUF1RixlQUFBO0VBQUFBLGNBQUEsR0FBQXhGLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQWhCTSxTQUFBNkcsU0FBNkJDLE9BQWU7SUFBQSxJQUFBQyxRQUFBLEVBQUF6QixJQUFBO0lBQUEsT0FBQTFLLG1CQUFBLEdBQUF1QixJQUFBLFVBQUE2SyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXhHLElBQUEsR0FBQXdHLFNBQUEsQ0FBQW5JLElBQUE7UUFBQTtVQUFBbUksU0FBQSxDQUFBeEcsSUFBQTtVQUFBd0csU0FBQSxDQUFBbkksSUFBQTtVQUFBLE9BRXhCb0ksS0FBSyxJQUFBek0sTUFBQSxDQUFJQyxzREFBaUIsZUFBQUQsTUFBQSxDQUFZcU0sT0FBTyxHQUFJO1lBQ3RFekksTUFBTSxFQUFFO1VBQ1YsQ0FBQyxDQUFDO1FBQUE7VUFGSTBJLFFBQVEsR0FBQUUsU0FBQSxDQUFBekksSUFBQTtVQUFBeUksU0FBQSxDQUFBbkksSUFBQTtVQUFBLE9BR0tpSSxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBNUI3QixJQUFJLEdBQUEyQixTQUFBLENBQUF6SSxJQUFBO1VBQUEsS0FFTnVJLFFBQVEsQ0FBQ0ssRUFBRTtZQUFBSCxTQUFBLENBQUFuSSxJQUFBO1lBQUE7VUFBQTtVQUFBLE9BQUFtSSxTQUFBLENBQUF0SSxNQUFBLFdBQ04sU0FBUztRQUFBO1VBQUEsT0FBQXNJLFNBQUEsQ0FBQXRJLE1BQUEsV0FFVDJHLElBQUksSUFBSSxlQUFlO1FBQUE7VUFBQTJCLFNBQUEsQ0FBQW5JLElBQUE7VUFBQTtRQUFBO1VBQUFtSSxTQUFBLENBQUF4RyxJQUFBO1VBQUF3RyxTQUFBLENBQUFJLEVBQUEsR0FBQUosU0FBQTtVQUdoQzlFLE9BQU8sQ0FBQ0MsR0FBRyxXQUFBM0gsTUFBQSxDQUFXd00sU0FBQSxDQUFBSSxFQUFBLENBQWlCQyxPQUFPLENBQUUsQ0FBQztRQUFBO1VBQUEsT0FBQUwsU0FBQSxDQUFBdEksTUFBQSxXQUU1QyxlQUFlO1FBQUE7UUFBQTtVQUFBLE9BQUFzSSxTQUFBLENBQUFyRyxJQUFBO01BQUE7SUFBQSxHQUFBaUcsUUFBQTtFQUFBLENBQ3ZCO0VBQUEsT0FBQUQsY0FBQSxDQUFBdEYsS0FBQSxPQUFBRCxTQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpQkFBaUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEdBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0JBQXNCLElBQUksdUJBQXVCO0FBQzNFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsSUFBSSxNQUFNO0FBQy9DO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYyxFQUFFLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVEsYUFBYSxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVEsZUFBZSxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxJQUFJO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BTQTtBQUNBLGlFQUFlLEVBQUUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNEOUIsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLDhFQUE4RSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUs7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcUM7QUFDckM7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENRO0FBQ047QUFDc0I7QUFDakQ7QUFDQSxRQUFRLGtEQUFNO0FBQ2QsZUFBZSxrREFBTTtBQUNyQjtBQUNBO0FBQ0EsbURBQW1ELCtDQUFHO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFlO0FBQzFCO0FBQ0EsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQy9CO0FBQ0EsdUNBQXVDLGlEQUFLO0FBQzVDO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDSnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OytDQ0xBLHFKQUFBekcsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENBQUEsR0FBQVQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBZCxDQUFBLENBQUFOLFNBQUEsR0FBQVUsQ0FBQSxPQUFBVyxPQUFBLENBQUFwQixDQUFBLGdCQUFBRSxDQUFBLENBQUFLLENBQUEsZUFBQUgsS0FBQSxFQUFBaUIsZ0JBQUEsQ0FBQXpCLENBQUEsRUFBQUMsQ0FBQSxFQUFBWSxDQUFBLE1BQUFGLENBQUEsYUFBQWUsU0FBQTFCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG1CQUFBMEIsSUFBQSxZQUFBQyxHQUFBLEVBQUE1QixDQUFBLENBQUE2QixJQUFBLENBQUE5QixDQUFBLEVBQUFFLENBQUEsY0FBQUQsQ0FBQSxhQUFBMkIsSUFBQSxXQUFBQyxHQUFBLEVBQUE1QixDQUFBLFFBQUFELENBQUEsQ0FBQXNCLElBQUEsR0FBQUEsSUFBQSxNQUFBUyxDQUFBLHFCQUFBQyxDQUFBLHFCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBWixVQUFBLGNBQUFhLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQXBCLE1BQUEsQ0FBQW9CLENBQUEsRUFBQTFCLENBQUEscUNBQUEyQixDQUFBLEdBQUFwQyxNQUFBLENBQUFxQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXZDLENBQUEsSUFBQUcsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBVyxDQUFBLEVBQUE3QixDQUFBLE1BQUEwQixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBakMsU0FBQSxHQUFBbUIsU0FBQSxDQUFBbkIsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFjLENBQUEsWUFBQU0sc0JBQUEzQyxDQUFBLGdDQUFBNEMsT0FBQSxXQUFBN0MsQ0FBQSxJQUFBa0IsTUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLFlBQUFDLENBQUEsZ0JBQUE2QyxPQUFBLENBQUE5QyxDQUFBLEVBQUFDLENBQUEsc0JBQUE4QyxjQUFBOUMsQ0FBQSxFQUFBRCxDQUFBLGFBQUFnRCxPQUFBOUMsQ0FBQSxFQUFBSyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxRQUFBRSxDQUFBLEdBQUFhLFFBQUEsQ0FBQTFCLENBQUEsQ0FBQUMsQ0FBQSxHQUFBRCxDQUFBLEVBQUFNLENBQUEsbUJBQUFPLENBQUEsQ0FBQWMsSUFBQSxRQUFBWixDQUFBLEdBQUFGLENBQUEsQ0FBQWUsR0FBQSxFQUFBRSxDQUFBLEdBQUFmLENBQUEsQ0FBQVAsS0FBQSxTQUFBc0IsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQTFCLENBQUEsQ0FBQXlCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBL0IsQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFuRCxDQUFBLElBQUErQyxNQUFBLFNBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVgsQ0FBQSxJQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsUUFBQVosQ0FBQSxDQUFBa0QsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBZSxDQUFBLENBQUFQLEtBQUEsR0FBQVIsQ0FBQSxFQUFBUyxDQUFBLENBQUFNLENBQUEsZ0JBQUFmLENBQUEsV0FBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFNBQUFBLENBQUEsQ0FBQUUsQ0FBQSxDQUFBZSxHQUFBLFNBQUEzQixDQUFBLEVBQUFLLENBQUEsb0JBQUFFLEtBQUEsV0FBQUEsTUFBQVIsQ0FBQSxFQUFBSSxDQUFBLGFBQUFnRCwyQkFBQSxlQUFBckQsQ0FBQSxXQUFBQSxDQUFBLEVBQUFFLENBQUEsSUFBQThDLE1BQUEsQ0FBQS9DLENBQUEsRUFBQUksQ0FBQSxFQUFBTCxDQUFBLEVBQUFFLENBQUEsZ0JBQUFBLENBQUEsR0FBQUEsQ0FBQSxHQUFBQSxDQUFBLENBQUFrRCxJQUFBLENBQUFDLDBCQUFBLEVBQUFBLDBCQUFBLElBQUFBLDBCQUFBLHFCQUFBM0IsaUJBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBRSxDQUFBLEdBQUF3QixDQUFBLG1CQUFBckIsQ0FBQSxFQUFBRSxDQUFBLFFBQUFMLENBQUEsS0FBQTBCLENBQUEsUUFBQXFCLEtBQUEsc0NBQUEvQyxDQUFBLEtBQUEyQixDQUFBLG9CQUFBeEIsQ0FBQSxRQUFBRSxDQUFBLFdBQUFILEtBQUEsRUFBQVIsQ0FBQSxFQUFBc0QsSUFBQSxlQUFBbEQsQ0FBQSxDQUFBbUQsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBTCxDQUFBLENBQUF3QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVQsQ0FBQSxDQUFBb0QsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBVCxDQUFBLE9BQUFXLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFYLENBQUEsQ0FBQW1ELE1BQUEsRUFBQW5ELENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQXVELEtBQUEsR0FBQXZELENBQUEsQ0FBQXdCLEdBQUEsc0JBQUF4QixDQUFBLENBQUFtRCxNQUFBLFFBQUFqRCxDQUFBLEtBQUF3QixDQUFBLFFBQUF4QixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUF3QixHQUFBLEVBQUF4QixDQUFBLENBQUF3RCxpQkFBQSxDQUFBeEQsQ0FBQSxDQUFBd0IsR0FBQSx1QkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsSUFBQW5ELENBQUEsQ0FBQXlELE1BQUEsV0FBQXpELENBQUEsQ0FBQXdCLEdBQUEsR0FBQXRCLENBQUEsR0FBQTBCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUEzQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWlDLENBQUEsQ0FBQVYsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUFrRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUExQixLQUFBLEVBQUE2QixDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWxELENBQUEsQ0FBQWtELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXJCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQW1ELE1BQUEsWUFBQW5ELENBQUEsQ0FBQXdCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUExRCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFzRCxNQUFBLEVBQUFqRCxDQUFBLEdBQUFQLENBQUEsQ0FBQWEsUUFBQSxDQUFBUixDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUF1RCxRQUFBLHFCQUFBcEQsQ0FBQSxJQUFBTCxDQUFBLENBQUFhLFFBQUEsZUFBQVgsQ0FBQSxDQUFBc0QsTUFBQSxhQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxFQUFBeUQsbUJBQUEsQ0FBQTFELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFzRCxNQUFBLGtCQUFBbkQsQ0FBQSxLQUFBSCxDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBMUQsQ0FBQSxpQkFBQThCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQXBCLENBQUEsRUFBQVAsQ0FBQSxDQUFBYSxRQUFBLEVBQUFYLENBQUEsQ0FBQTJCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUExQixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUEzQixDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBckQsQ0FBQSxDQUFBRixDQUFBLENBQUFnRSxVQUFBLElBQUFwRCxDQUFBLENBQUFILEtBQUEsRUFBQVAsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBakUsQ0FBQSxDQUFBa0UsT0FBQSxlQUFBaEUsQ0FBQSxDQUFBc0QsTUFBQSxLQUFBdEQsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLElBQUF2QixDQUFBLElBQUFWLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsc0NBQUE3RCxDQUFBLENBQUF1RCxRQUFBLFNBQUF0QixDQUFBLGNBQUFnQyxhQUFBbEUsQ0FBQSxRQUFBRCxDQUFBLEtBQUFvRSxNQUFBLEVBQUFuRSxDQUFBLFlBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBcEUsQ0FBQSxXQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXNFLFVBQUEsR0FBQXJFLENBQUEsS0FBQUQsQ0FBQSxDQUFBdUUsUUFBQSxHQUFBdEUsQ0FBQSxXQUFBdUUsVUFBQSxDQUFBQyxJQUFBLENBQUF6RSxDQUFBLGNBQUEwRSxjQUFBekUsQ0FBQSxRQUFBRCxDQUFBLEdBQUFDLENBQUEsQ0FBQTBFLFVBQUEsUUFBQTNFLENBQUEsQ0FBQTRCLElBQUEsb0JBQUE1QixDQUFBLENBQUE2QixHQUFBLEVBQUE1QixDQUFBLENBQUEwRSxVQUFBLEdBQUEzRSxDQUFBLGFBQUF5QixRQUFBeEIsQ0FBQSxTQUFBdUUsVUFBQSxNQUFBSixNQUFBLGFBQUFuRSxDQUFBLENBQUE0QyxPQUFBLENBQUFzQixZQUFBLGNBQUFTLEtBQUEsaUJBQUFsQyxPQUFBMUMsQ0FBQSxRQUFBQSxDQUFBLFdBQUFBLENBQUEsUUFBQUUsQ0FBQSxHQUFBRixDQUFBLENBQUFZLENBQUEsT0FBQVYsQ0FBQSxTQUFBQSxDQUFBLENBQUE0QixJQUFBLENBQUE5QixDQUFBLDRCQUFBQSxDQUFBLENBQUFpRSxJQUFBLFNBQUFqRSxDQUFBLE9BQUE2RSxLQUFBLENBQUE3RSxDQUFBLENBQUE4RSxNQUFBLFNBQUF2RSxDQUFBLE9BQUFHLENBQUEsWUFBQXVELEtBQUEsYUFBQTFELENBQUEsR0FBQVAsQ0FBQSxDQUFBOEUsTUFBQSxPQUFBekUsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBTyxDQUFBLFVBQUEwRCxJQUFBLENBQUF4RCxLQUFBLEdBQUFULENBQUEsQ0FBQU8sQ0FBQSxHQUFBMEQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxZQUFBdkQsQ0FBQSxDQUFBdUQsSUFBQSxHQUFBdkQsQ0FBQSxnQkFBQXFELFNBQUEsQ0FBQWQsT0FBQSxDQUFBakQsQ0FBQSxrQ0FBQW9DLGlCQUFBLENBQUFoQyxTQUFBLEdBQUFpQywwQkFBQSxFQUFBOUIsQ0FBQSxDQUFBb0MsQ0FBQSxtQkFBQWxDLEtBQUEsRUFBQTRCLDBCQUFBLEVBQUFqQixZQUFBLFNBQUFiLENBQUEsQ0FBQThCLDBCQUFBLG1CQUFBNUIsS0FBQSxFQUFBMkIsaUJBQUEsRUFBQWhCLFlBQUEsU0FBQWdCLGlCQUFBLENBQUEyQyxXQUFBLEdBQUE3RCxNQUFBLENBQUFtQiwwQkFBQSxFQUFBckIsQ0FBQSx3QkFBQWhCLENBQUEsQ0FBQWdGLG1CQUFBLGFBQUEvRSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBZ0YsV0FBQSxXQUFBakYsQ0FBQSxLQUFBQSxDQUFBLEtBQUFvQyxpQkFBQSw2QkFBQXBDLENBQUEsQ0FBQStFLFdBQUEsSUFBQS9FLENBQUEsQ0FBQWtGLElBQUEsT0FBQWxGLENBQUEsQ0FBQW1GLElBQUEsYUFBQWxGLENBQUEsV0FBQUUsTUFBQSxDQUFBaUYsY0FBQSxHQUFBakYsTUFBQSxDQUFBaUYsY0FBQSxDQUFBbkYsQ0FBQSxFQUFBb0MsMEJBQUEsS0FBQXBDLENBQUEsQ0FBQW9GLFNBQUEsR0FBQWhELDBCQUFBLEVBQUFuQixNQUFBLENBQUFqQixDQUFBLEVBQUFlLENBQUEseUJBQUFmLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFxQixNQUFBLENBQUFtQixDQUFBLEdBQUExQyxDQUFBLEtBQUFELENBQUEsQ0FBQXNGLEtBQUEsYUFBQXJGLENBQUEsYUFBQWtELE9BQUEsRUFBQWxELENBQUEsT0FBQTJDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTNDLFNBQUEsR0FBQWMsTUFBQSxDQUFBNkIsYUFBQSxDQUFBM0MsU0FBQSxFQUFBVSxDQUFBLGlDQUFBZCxDQUFBLENBQUErQyxhQUFBLEdBQUFBLGFBQUEsRUFBQS9DLENBQUEsQ0FBQXVGLEtBQUEsYUFBQXRGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQThFLE9BQUEsT0FBQTVFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXJCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUcsQ0FBQSxVQUFBVixDQUFBLENBQUFnRixtQkFBQSxDQUFBOUUsQ0FBQSxJQUFBVSxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbkQsQ0FBQSxXQUFBQSxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUFRLEtBQUEsR0FBQUcsQ0FBQSxDQUFBcUQsSUFBQSxXQUFBckIscUJBQUEsQ0FBQUQsQ0FBQSxHQUFBekIsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBM0IsQ0FBQSxnQkFBQUUsTUFBQSxDQUFBeUIsQ0FBQSxFQUFBL0IsQ0FBQSxpQ0FBQU0sTUFBQSxDQUFBeUIsQ0FBQSw2REFBQTNDLENBQUEsQ0FBQXlGLElBQUEsYUFBQXhGLENBQUEsUUFBQUQsQ0FBQSxHQUFBRyxNQUFBLENBQUFGLENBQUEsR0FBQUMsQ0FBQSxnQkFBQUcsQ0FBQSxJQUFBTCxDQUFBLEVBQUFFLENBQUEsQ0FBQXVFLElBQUEsQ0FBQXBFLENBQUEsVUFBQUgsQ0FBQSxDQUFBd0YsT0FBQSxhQUFBekIsS0FBQSxXQUFBL0QsQ0FBQSxDQUFBNEUsTUFBQSxTQUFBN0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF5RixHQUFBLFFBQUExRixDQUFBLElBQUFELENBQUEsU0FBQWlFLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsV0FBQUEsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsUUFBQWpFLENBQUEsQ0FBQTBDLE1BQUEsR0FBQUEsTUFBQSxFQUFBakIsT0FBQSxDQUFBckIsU0FBQSxLQUFBNkUsV0FBQSxFQUFBeEQsT0FBQSxFQUFBbUQsS0FBQSxXQUFBQSxNQUFBNUUsQ0FBQSxhQUFBNEYsSUFBQSxXQUFBM0IsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQTNELENBQUEsT0FBQXNELElBQUEsWUFBQUUsUUFBQSxjQUFBRCxNQUFBLGdCQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxPQUFBdUUsVUFBQSxDQUFBM0IsT0FBQSxDQUFBNkIsYUFBQSxJQUFBMUUsQ0FBQSxXQUFBRSxDQUFBLGtCQUFBQSxDQUFBLENBQUEyRixNQUFBLE9BQUF4RixDQUFBLENBQUF5QixJQUFBLE9BQUE1QixDQUFBLE1BQUEyRSxLQUFBLEVBQUEzRSxDQUFBLENBQUE0RixLQUFBLGNBQUE1RixDQUFBLElBQUFELENBQUEsTUFBQThGLElBQUEsV0FBQUEsS0FBQSxTQUFBeEMsSUFBQSxXQUFBdEQsQ0FBQSxRQUFBdUUsVUFBQSxJQUFBRyxVQUFBLGtCQUFBMUUsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxjQUFBbUUsSUFBQSxLQUFBbkMsaUJBQUEsV0FBQUEsa0JBQUE3RCxDQUFBLGFBQUF1RCxJQUFBLFFBQUF2RCxDQUFBLE1BQUFFLENBQUEsa0JBQUErRixPQUFBNUYsQ0FBQSxFQUFBRSxDQUFBLFdBQUFLLENBQUEsQ0FBQWdCLElBQUEsWUFBQWhCLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxDQUFBK0QsSUFBQSxHQUFBNUQsQ0FBQSxFQUFBRSxDQUFBLEtBQUFMLENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsS0FBQU0sQ0FBQSxhQUFBQSxDQUFBLFFBQUFpRSxVQUFBLENBQUFNLE1BQUEsTUFBQXZFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRyxDQUFBLFFBQUE4RCxVQUFBLENBQUFqRSxDQUFBLEdBQUFLLENBQUEsR0FBQUYsQ0FBQSxDQUFBaUUsVUFBQSxpQkFBQWpFLENBQUEsQ0FBQTBELE1BQUEsU0FBQTZCLE1BQUEsYUFBQXZGLENBQUEsQ0FBQTBELE1BQUEsU0FBQXdCLElBQUEsUUFBQTlFLENBQUEsR0FBQVQsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxlQUFBTSxDQUFBLEdBQUFYLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEscUJBQUFJLENBQUEsSUFBQUUsQ0FBQSxhQUFBNEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxnQkFBQXVCLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsY0FBQXhELENBQUEsYUFBQThFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEscUJBQUFyRCxDQUFBLFFBQUFzQyxLQUFBLHFEQUFBc0MsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxZQUFBUixNQUFBLFdBQUFBLE9BQUE3RCxDQUFBLEVBQUFELENBQUEsYUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE1RSxDQUFBLFNBQUFBLENBQUEsUUFBQUssQ0FBQSxRQUFBaUUsVUFBQSxDQUFBdEUsQ0FBQSxPQUFBSyxDQUFBLENBQUE2RCxNQUFBLFNBQUF3QixJQUFBLElBQUF2RixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLHdCQUFBcUYsSUFBQSxHQUFBckYsQ0FBQSxDQUFBK0QsVUFBQSxRQUFBNUQsQ0FBQSxHQUFBSCxDQUFBLGFBQUFHLENBQUEsaUJBQUFULENBQUEsbUJBQUFBLENBQUEsS0FBQVMsQ0FBQSxDQUFBMEQsTUFBQSxJQUFBcEUsQ0FBQSxJQUFBQSxDQUFBLElBQUFVLENBQUEsQ0FBQTRELFVBQUEsS0FBQTVELENBQUEsY0FBQUUsQ0FBQSxHQUFBRixDQUFBLEdBQUFBLENBQUEsQ0FBQWlFLFVBQUEsY0FBQS9ELENBQUEsQ0FBQWdCLElBQUEsR0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBVSxDQUFBLFNBQUE4QyxNQUFBLGdCQUFBUyxJQUFBLEdBQUF2RCxDQUFBLENBQUE0RCxVQUFBLEVBQUFuQyxDQUFBLFNBQUErRCxRQUFBLENBQUF0RixDQUFBLE1BQUFzRixRQUFBLFdBQUFBLFNBQUFqRyxDQUFBLEVBQUFELENBQUEsb0JBQUFDLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEscUJBQUE1QixDQUFBLENBQUEyQixJQUFBLG1CQUFBM0IsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBcUMsSUFBQSxHQUFBaEUsQ0FBQSxDQUFBNEIsR0FBQSxnQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsU0FBQW9FLElBQUEsUUFBQW5FLEdBQUEsR0FBQTVCLENBQUEsQ0FBQTRCLEdBQUEsT0FBQTJCLE1BQUEsa0JBQUFTLElBQUEseUJBQUFoRSxDQUFBLENBQUEyQixJQUFBLElBQUE1QixDQUFBLFVBQUFpRSxJQUFBLEdBQUFqRSxDQUFBLEdBQUFtQyxDQUFBLEtBQUFnRSxNQUFBLFdBQUFBLE9BQUFsRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBb0UsVUFBQSxLQUFBckUsQ0FBQSxjQUFBaUcsUUFBQSxDQUFBaEcsQ0FBQSxDQUFBeUUsVUFBQSxFQUFBekUsQ0FBQSxDQUFBcUUsUUFBQSxHQUFBRyxhQUFBLENBQUF4RSxDQUFBLEdBQUFpQyxDQUFBLHlCQUFBaUUsT0FBQW5HLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFrRSxNQUFBLEtBQUFuRSxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBeUUsVUFBQSxrQkFBQXRFLENBQUEsQ0FBQXVCLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBNkMsYUFBQSxDQUFBeEUsQ0FBQSxZQUFBSyxDQUFBLFlBQUErQyxLQUFBLDhCQUFBK0MsYUFBQSxXQUFBQSxjQUFBckcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZ0JBQUFvRCxRQUFBLEtBQUE1QyxRQUFBLEVBQUE2QixNQUFBLENBQUExQyxDQUFBLEdBQUFnRSxVQUFBLEVBQUE5RCxDQUFBLEVBQUFnRSxPQUFBLEVBQUE3RCxDQUFBLG9CQUFBbUQsTUFBQSxVQUFBM0IsR0FBQSxHQUFBNUIsQ0FBQSxHQUFBa0MsQ0FBQSxPQUFBbkMsQ0FBQTtBQUFBLFNBQUFzRyxtQkFBQWpHLENBQUEsRUFBQUosQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFFLENBQUEsY0FBQUosQ0FBQSxHQUFBTCxDQUFBLENBQUFPLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLEdBQUFOLENBQUEsQ0FBQUQsS0FBQSxXQUFBSixDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUssQ0FBQSxDQUFBNkMsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBZSxDQUFBLElBQUF3RSxPQUFBLENBQUF0QyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFsRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBZ0csa0JBQUFsRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQXdHLFNBQUEsYUFBQWhCLE9BQUEsV0FBQXRGLENBQUEsRUFBQUssQ0FBQSxRQUFBSyxDQUFBLEdBQUFQLENBQUEsQ0FBQW9HLEtBQUEsQ0FBQXhHLENBQUEsRUFBQUQsQ0FBQSxZQUFBMEcsTUFBQXJHLENBQUEsSUFBQWlHLGtCQUFBLENBQUExRixDQUFBLEVBQUFWLENBQUEsRUFBQUssQ0FBQSxFQUFBbUcsS0FBQSxFQUFBQyxNQUFBLFVBQUF0RyxDQUFBLGNBQUFzRyxPQUFBdEcsQ0FBQSxJQUFBaUcsa0JBQUEsQ0FBQTFGLENBQUEsRUFBQVYsQ0FBQSxFQUFBSyxDQUFBLEVBQUFtRyxLQUFBLEVBQUFDLE1BQUEsV0FBQXRHLENBQUEsS0FBQXFHLEtBQUE7QUFLcUI7QUFDYztBQUNFO0FBQ3JDOztBQVFBLElBQU1tRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2pCLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDeEI5RCxNQUFNLENBQUMrRCxhQUFhLEdBQUcsSUFBSTtJQUMzQixJQUFNQyx3QkFBd0IsR0FBR0MsV0FBVyxDQUFDN00sU0FBUyxDQUFDdUssZ0JBQWdCOztJQUV2RTtJQUNBLElBQU11QyxPQUFPLEdBQUcsS0FBSztJQUVyQixTQUFTQyxrQkFBa0JBLENBQ3pCQyxTQUFpQixFQUNqQkMsTUFBVyxFQUNYaEMsU0FBaUIsRUFDakJpQyxRQUFnQixFQUNoQm5HLEdBQVcsRUFDWCtELElBQVksRUFDWjtNQUNBLFNBQVNxQyxtQkFBbUJBLENBQzFCMUcsT0FBMkIsRUFHSDtRQUFBLElBRnhCMkcsS0FBYSxHQUFBaEgsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBMkQsU0FBQSxHQUFBM0QsU0FBQSxNQUFHLENBQUM7UUFBQSxJQUNqQmlILGFBQXFDLEdBQUFqSCxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUEyRCxTQUFBLEdBQUEzRCxTQUFBLE1BQUcsQ0FBQyxDQUFDO1FBRTFDO1FBQ0EsSUFBSSxDQUFDSyxPQUFPLElBQUkyRyxLQUFLLElBQUksRUFBRSxFQUFFLE9BQU9DLGFBQWE7O1FBRWpEO1FBQ0EsSUFBSTVHLE9BQU8sQ0FBQzZHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1VBQzdDRCxhQUFhLENBQUMsbUJBQW1CLENBQUMsR0FBRzVHLE9BQU8sQ0FBQ3NCLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7UUFDdEY7UUFDQSxJQUFJdEIsT0FBTyxDQUFDNkcsWUFBWSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7VUFDbERELGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUNyQzVHLE9BQU8sQ0FBQ3NCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7UUFDeEQ7UUFDQSxJQUFJdEIsT0FBTyxDQUFDNkcsWUFBWSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7VUFDbERELGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxHQUNyQzVHLE9BQU8sQ0FBQ3NCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLEVBQUU7UUFDeEQ7O1FBRUE7UUFDQSxPQUFPb0YsbUJBQW1CLENBQUMxRyxPQUFPLENBQUM4RyxhQUFhLEVBQUVILEtBQUssR0FBRyxDQUFDLEVBQUVDLGFBQWEsQ0FBQztNQUM3RTtNQUVBLElBQU1HLFFBQVEsR0FBRy9GLHlEQUFZLENBQUMsQ0FBQztNQUMvQixJQUFNNEYsYUFBYSxHQUFHRixtQkFBbUIsQ0FBQ0YsTUFBcUIsQ0FBQztNQUNoRTtNQUNBLElBQU1RLGlCQUFpQixHQUFHNUMsbUVBQXNCLENBQUNDLElBQUksQ0FBQzs7TUFFdEQ7TUFDQSxJQUFNNEMsZ0JBQWdCLEdBQUc7UUFDdkJDLE9BQU8sRUFBRVYsTUFBTSxDQUFDVSxPQUFPO1FBQ3ZCQyxTQUFTLEVBQUVYLE1BQU0sQ0FBQ1csU0FBUztRQUMzQkMsRUFBRSxFQUFFWixNQUFNLENBQUNZLEVBQUU7UUFDYkMsU0FBUyxFQUFFYixNQUFNLENBQUNhLFNBQVMsSUFBSWIsTUFBTSxDQUFDNU0sS0FBSyxJQUFJLEVBQUU7UUFDakQwTixTQUFTLEVBQUVkLE1BQU0sQ0FBQ2M7TUFDcEIsQ0FBQztNQUNELElBQU1DLFNBQVMsR0FBRzdGLDJFQUE4QixDQUFDLENBQUM7TUFDbEQsSUFBTWtDLElBQUksR0FBRztRQUNYUyxJQUFJLEVBQUVBLElBQUk7UUFDVmtDLFNBQVMsRUFBVEEsU0FBUztRQUNUL0IsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCZ0MsTUFBTSxFQUFFUyxnQkFBZ0I7UUFBRTtRQUMxQjtRQUNBO1FBQ0E7UUFDQTtRQUNBTyxjQUFjLEVBQUVSLGlCQUFpQjtRQUNqQ1AsUUFBUSxFQUFFQSxRQUFRLElBQUksRUFBRTtRQUN4QixrQkFBa0IsRUFBRUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRTtRQUM1RCxtQkFBbUIsRUFBRUEsYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRTtRQUNsRSxtQkFBbUIsRUFBRUEsYUFBYSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRTtRQUNsRSxXQUFXLEVBQUVHLFFBQVEsSUFBSSxFQUFFO1FBQzNCekcsR0FBRyxFQUFFQSxHQUFHLElBQUksRUFBRTtRQUNkbUgsV0FBVyxFQUFFRixTQUFTLENBQUNsRixlQUFlLENBQUNpRjtNQUN6QyxDQUFDO01BRUQsT0FBTzFELElBQUk7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQU04RCxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLE1BQU0sRUFBSztNQUNqQyxPQUFPLElBQUloSixPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRXVMLE1BQU0sRUFBSztRQUN0QyxJQUFJRCxNQUFNLENBQUNFLE9BQU8sRUFBRTtVQUNsQjtVQUNBeEwsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLENBQUMsTUFBTTtVQUNMO1VBQ0FzTCxNQUFNLENBQUM3RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFBQSxPQUFNekgsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQUEsR0FBRTtZQUFFeUwsSUFBSSxFQUFFO1VBQUssQ0FBQyxDQUFDO1FBQ3pFO01BQ0YsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlwRSxLQUFZLEVBQUs7TUFDekMsSUFBTTNELE9BQU8sR0FBRzJELEtBQUssQ0FBQzZDLE1BQXFCO01BQzNDLElBQU13QixNQUFNLEdBQUdoSSxPQUFPLENBQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUM7TUFDbkMsSUFBSStILE1BQU0sRUFBRTtRQUNWLE9BQU8sSUFBSTtNQUNiO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUEsSUFBSWhJLE9BQU8sQ0FBQ2tILE9BQU8sQ0FBQ2UsV0FBVyxDQUFDLENBQUMsS0FBSyxPQUFPLEVBQUU7UUFDN0MsSUFBSWpJLE9BQU8sQ0FBQ2pGLElBQUksS0FBSyxRQUFRLEVBQUU7VUFDN0IsT0FBTyxJQUFJO1FBQ2I7TUFDRjtNQUNBLE9BQU8sS0FBSztJQUNkLENBQUM7SUFDRDtJQUNBcUwsV0FBVyxDQUFDN00sU0FBUyxDQUFDdUssZ0JBQWdCLEdBQUcsVUFBVS9JLElBQUksRUFBRW1OLFFBQVEsRUFBZ0I7TUFBQSxJQUFBQyxLQUFBO01BQUEsSUFBZEMsT0FBTyxHQUFBekksU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBMkQsU0FBQSxHQUFBM0QsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUM3RSxJQUFJeUksT0FBTyxJQUFJQSxPQUFPLENBQUNDLGlCQUFpQixFQUFFO1FBQ3hDLE9BQU9sQyx3QkFBd0IsQ0FBQ2xMLElBQUksQ0FBQyxJQUFJLEVBQUVGLElBQUksRUFBRW1OLFFBQVEsRUFBRUUsT0FBTyxDQUFDO01BQ3JFO01BQ0EsSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSTNFLEtBQUssRUFBSztRQUN0QyxJQUFJLE9BQU91RSxRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ2xDQSxRQUFRLENBQUNqTixJQUFJLENBQUNrTixLQUFJLEVBQUV4RSxLQUFLLENBQUM7UUFDNUIsQ0FBQyxNQUFNLElBQUl1RSxRQUFRLElBQUksT0FBT0EsUUFBUSxDQUFDSyxXQUFXLEtBQUssVUFBVSxFQUFFO1VBQ2pFTCxRQUFRLENBQUNLLFdBQVcsQ0FBQ3ROLElBQUksQ0FBQ2lOLFFBQVEsRUFBRXZFLEtBQUssQ0FBQztRQUM1QztNQUNGLENBQUM7TUFFRCxJQUFJNUksSUFBSSxLQUFLLE9BQU8sSUFBSW1OLFFBQVEsRUFBRTtRQUNoQyxJQUFNTSxlQUFlO1VBQUEsSUFBQUMsSUFBQSxHQUFBL0ksaUJBQUEsY0FBQXhHLG1CQUFBLEdBQUFvRixJQUFBLENBQUcsU0FBQStCLFFBQWdCc0QsS0FBSztZQUFBLElBQUE2QyxNQUFBLEVBQUFrQyxVQUFBLEVBQUFmLE1BQUEsRUFBQW5ELFNBQUEsRUFBQW1FLEtBQUEsRUFBQUMsa0JBQUEsRUFBQUMsbUJBQUEsRUFBQXBDLFFBQUEsRUFBQTdDLElBQUEsRUFBQWtGLFFBQUEsRUFBQXpFLElBQUEsRUFBQTBFLG1CQUFBLEVBQUFDLEtBQUEsRUFBQUMsb0JBQUE7WUFBQSxPQUFBL1AsbUJBQUEsR0FBQXVCLElBQUEsVUFBQThGLFNBQUFDLFFBQUE7Y0FBQSxrQkFBQUEsUUFBQSxDQUFBekIsSUFBQSxHQUFBeUIsUUFBQSxDQUFBcEQsSUFBQTtnQkFBQTtrQkFBQSxLQUN2QytFLE1BQU0sQ0FBQ3hCLGFBQWE7b0JBQUFILFFBQUEsQ0FBQXBELElBQUE7b0JBQUE7a0JBQUE7a0JBQ3RCcUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7a0JBQzdCNEgsb0JBQW9CLENBQUMzRSxLQUFLLENBQUM7a0JBQUEsT0FBQW5ELFFBQUEsQ0FBQXZELE1BQUE7Z0JBQUE7a0JBR3ZCdUosTUFBTSxHQUFHN0MsS0FBSyxDQUFDNkMsTUFBTTtrQkFBQSxLQUN2QnpHLHdEQUFXLENBQUN5RyxNQUFNLENBQUM7b0JBQUFoRyxRQUFBLENBQUFwRCxJQUFBO29CQUFBO2tCQUFBO2tCQUNyQmtMLG9CQUFvQixDQUFDM0UsS0FBSyxDQUFDO2tCQUFBLE9BQUFuRCxRQUFBLENBQUF2RCxNQUFBO2dCQUFBO2tCQUFBLEtBR3pCMEcsS0FBSyxDQUFDdUYsZ0JBQWdCO29CQUFBMUksUUFBQSxDQUFBcEQsSUFBQTtvQkFBQTtrQkFBQTtrQkFDeEJxRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztrQkFBQSxPQUFBRixRQUFBLENBQUF2RCxNQUFBO2dCQUFBO2tCQUFBLEtBSTlCMEcsS0FBSyxDQUFDd0YsWUFBWTtvQkFBQTNJLFFBQUEsQ0FBQXBELElBQUE7b0JBQUE7a0JBQUE7a0JBQ2RzTCxVQUFVLEdBQUcsSUFBSVUsZUFBZSxDQUFDLENBQUM7a0JBQ3hDekYsS0FBSyxDQUFDMEYsY0FBYyxDQUFDekwsSUFBSSxDQUFDOEssVUFBVSxDQUFDO2tCQUFBLEtBQ2pDL0UsS0FBSyxDQUFDd0YsWUFBWTtvQkFBQTNJLFFBQUEsQ0FBQXBELElBQUE7b0JBQUE7a0JBQUE7a0JBQ2R1SyxNQUFNLEdBQUdoRSxLQUFLLENBQUN3RixZQUFZLENBQUN4QixNQUFNO2tCQUFBbkgsUUFBQSxDQUFBcEQsSUFBQTtrQkFBQSxPQUNsQ3NLLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDO2dCQUFBO2tCQUM1QmxILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1EQUFtRCxDQUFDO2tCQUFBRixRQUFBLENBQUFwRCxJQUFBO2tCQUFBO2dCQUFBO2tCQUVoRXFELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdEQUF3RCxDQUFDO2dCQUFBO2tCQUV2RSxJQUFJLE9BQU93SCxRQUFRLEtBQUssVUFBVSxFQUFFO29CQUNsQ0EsUUFBUSxDQUFDak4sSUFBSSxDQUFDLElBQUksRUFBRTBJLEtBQUssQ0FBQztrQkFDNUIsQ0FBQyxNQUFNLElBQUl1RSxRQUFRLElBQUksT0FBT0EsUUFBUSxDQUFDSyxXQUFXLEtBQUssVUFBVSxFQUFFO29CQUNqRUwsUUFBUSxDQUFDSyxXQUFXLENBQUN0TixJQUFJLENBQUNpTixRQUFRLEVBQUV2RSxLQUFLLENBQUM7a0JBQzVDO2tCQUNBK0UsVUFBVSxDQUFDWSxLQUFLLENBQUMsQ0FBQztrQkFBQSxPQUFBOUksUUFBQSxDQUFBdkQsTUFBQTtnQkFBQTtrQkFHcEIwRyxLQUFLLENBQUN3RixZQUFZLEdBQUcsSUFBSUMsZUFBZSxDQUFDLENBQUM7a0JBQzFDekYsS0FBSyxDQUFDMEYsY0FBYyxHQUFHLEVBQUU7a0JBRXpCNUksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLEVBQUVpRCxLQUFLLENBQUM2QyxNQUFNLENBQUM7a0JBQzlEL0YsT0FBTyxDQUFDQyxHQUFHLENBQUNpRCxLQUFLLENBQUM7a0JBQ1phLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUMxQztrQkFDQWpFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaUQsS0FBSyxDQUFDNkMsTUFBTSxDQUFDO2tCQUFBLEtBQ3JCdUIsZ0JBQWdCLENBQUNwRSxLQUFLLENBQUM7b0JBQUFuRCxRQUFBLENBQUFwRCxJQUFBO29CQUFBO2tCQUFBO2tCQUN6QjtrQkFDQXFELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxDQUFDO2tCQUNqRGlELEtBQUssQ0FBQzRGLGNBQWMsQ0FBQyxDQUFDO2tCQUN0QjVGLEtBQUssQ0FBQzRGLGNBQWMsR0FBRyxZQUFNO29CQUMzQjVGLEtBQUssQ0FBQzZGLG9CQUFvQixHQUFHLElBQUk7a0JBQ25DLENBQUM7a0JBQ0Q3RixLQUFLLENBQUM2RixvQkFBb0IsR0FBRyxLQUFLO2tCQUNsQy9JLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixFQUFFaUQsS0FBSyxDQUFDO2tCQUN2QztrQkFDTVUsS0FBSSxHQUFHeUIsZ0RBQU0sQ0FBQyxDQUFDO2tCQUFBdEYsUUFBQSxDQUFBekIsSUFBQTtrQkFFYjZKLGtCQUFrQixHQUFHLElBQUlqSyxPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRXVMLE1BQU0sRUFBSztvQkFDMUQsU0FBU2xFLGFBQWFBLENBQUNDLEtBQW1CLEVBQUU7c0JBQzFDLElBQ0VBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDN0ksSUFBSSxLQUFLLHFCQUFxQixJQUN6QzRJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDWSxTQUFTLEtBQUtBLFNBQVMsRUFDbEM7d0JBQ0FyQyxNQUFNLENBQUMwQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUVILGFBQWEsQ0FBQzt3QkFDcEQsSUFBSUMsS0FBSyxDQUFDQyxJQUFJLENBQUM2RixPQUFPLEVBQUU7MEJBQ3RCcE4sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQixDQUFDLE1BQU07MEJBQ0x1TCxNQUFNLENBQUMsSUFBSW5MLEtBQUssQ0FBQ2tILEtBQUssQ0FBQ0MsSUFBSSxDQUFDOEYsS0FBSyxJQUFJLG1CQUFtQixDQUFDLENBQUM7d0JBQzVEO3NCQUNGO29CQUNGO29CQUNBdkgsTUFBTSxDQUFDMkIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFSixhQUFhLENBQUM7O29CQUVqRDtvQkFDQWlHLFVBQVUsQ0FBQyxZQUFNO3NCQUNmeEgsTUFBTSxDQUFDMEIsbUJBQW1CLENBQUMsU0FBUyxFQUFFSCxhQUFhLENBQUM7c0JBQ3BEa0UsTUFBTSxDQUFDLElBQUluTCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDekMsQ0FBQyxFQUFFNEosT0FBTyxDQUFDO2tCQUNiLENBQUMsQ0FBQztrQkFFSXdDLG1CQUFtQixHQUFHLElBQUlsSyxPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRXVMLE1BQU0sRUFBSztvQkFDM0QsU0FBU2dDLGNBQWNBLENBQUNqRyxLQUFtQixFQUFFO3NCQUMzQyxJQUNFQSxLQUFLLENBQUNDLElBQUksQ0FBQzdJLElBQUksS0FBSyxzQkFBc0IsSUFDMUM0SSxLQUFLLENBQUNDLElBQUksQ0FBQ1ksU0FBUyxLQUFLQSxTQUFTLEVBQ2xDO3dCQUNBckMsTUFBTSxDQUFDMEIsbUJBQW1CLENBQUMsU0FBUyxFQUFFK0YsY0FBYyxDQUFDO3dCQUNyRCxJQUFJakcsS0FBSyxDQUFDQyxJQUFJLENBQUM2RixPQUFPLEVBQUU7MEJBQ3RCcE4sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQixDQUFDLE1BQU07MEJBQ0x1TCxNQUFNLENBQUMsSUFBSW5MLEtBQUssQ0FBQ2tILEtBQUssQ0FBQ0MsSUFBSSxDQUFDOEYsS0FBSyxJQUFJLG9CQUFvQixDQUFDLENBQUM7d0JBQzdEO3NCQUNGO29CQUNGO29CQUNBdkgsTUFBTSxDQUFDMkIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOEYsY0FBYyxDQUFDOztvQkFFbEQ7b0JBQ0FELFVBQVUsQ0FBQyxZQUFNO3NCQUNmeEgsTUFBTSxDQUFDMEIsbUJBQW1CLENBQUMsU0FBUyxFQUFFK0YsY0FBYyxDQUFDO3NCQUNyRGhDLE1BQU0sQ0FBQyxJQUFJbkwsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQzFDLENBQUMsRUFBRTRKLE9BQU8sQ0FBQztrQkFDYixDQUFDLENBQUMsRUFDRjtrQkFDTUksUUFBUSxHQUFHVixvREFBTSxDQUFDcEMsS0FBSyxDQUFDNkMsTUFBTSxFQUFFO29CQUNwQ3FELHFCQUFxQixFQUFFO2tCQUN6QixDQUFDLENBQUM7a0JBQ0lqRyxJQUFJLEdBQUcwQyxrQkFBa0IsQ0FDN0IsU0FBUyxFQUNUM0MsS0FBSyxDQUFDNkMsTUFBTSxFQUNaaEMsU0FBUyxFQUNUaUMsUUFBUSxFQUNSdEUsTUFBTSxDQUFDbUMsUUFBUSxDQUFDQyxJQUFJLEVBQ3BCRixLQUNGLENBQUMsRUFFRDtrQkFDQTtrQkFDQTtrQkFDQWxDLE1BQU0sQ0FBQzRCLFdBQVcsQ0FDaEI7b0JBQUVoSixJQUFJLEVBQUUsb0JBQW9CO29CQUFFeUosU0FBUyxFQUFFQSxTQUFTO29CQUFFSCxJQUFJLEVBQUVBO2tCQUFLLENBQUMsRUFDaEUsR0FDRixDQUFDO2tCQUNEbEMsTUFBTSxDQUFDNEIsV0FBVyxDQUFDO29CQUFFaEosSUFBSSxFQUFFLHVCQUF1QjtvQkFBRTZJLElBQUksRUFBRUEsSUFBSTtvQkFBRVMsSUFBSSxFQUFFQTtrQkFBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO2tCQUNsRjtrQkFDQTtrQkFDQTVELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdDQUF3QyxDQUFDO2tCQUFBRixRQUFBLENBQUFwRCxJQUFBO2tCQUFBLE9BQy9DdUIsT0FBTyxDQUFDbUwsR0FBRyxDQUFDLENBQUNsQixrQkFBa0IsRUFBRUMsbUJBQW1CLENBQUMsQ0FBQztnQkFBQTtrQkFDNURwSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQztrQkFDbEQ7a0JBQ0E7a0JBQ0E7a0JBQ0E7a0JBQ0E7a0JBQUFGLFFBQUEsQ0FBQXBELElBQUE7a0JBQUE7Z0JBQUE7a0JBQUFvRCxRQUFBLENBQUF6QixJQUFBO2tCQUFBeUIsUUFBQSxDQUFBbUYsRUFBQSxHQUFBbkYsUUFBQTtrQkFFQUMsT0FBTyxDQUFDaUosS0FBSyxDQUFDLFFBQVEsRUFBQWxKLFFBQUEsQ0FBQW1GLEVBQU8sQ0FBQztnQkFBQTtrQkFBQW5GLFFBQUEsQ0FBQXpCLElBQUE7a0JBRTlCMEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7a0JBQ3hDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3dILFFBQVEsQ0FBQztrQkFDckJ6SCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2lELEtBQUssQ0FBQztrQkFDbEJBLEtBQUssQ0FBQ3dGLFlBQVksQ0FBQ0csS0FBSyxDQUFDLENBQUM7a0JBQzFCO2tCQUFBOUksUUFBQSxDQUFBcEQsSUFBQTtrQkFBQSxPQUNNdUIsT0FBTyxDQUFDbUwsR0FBRyxDQUNmbkcsS0FBSyxDQUFDMEYsY0FBYyxDQUFDVSxHQUFHLENBQUMsVUFBQ3JCLFVBQVU7b0JBQUEsT0FBS2hCLGNBQWMsQ0FBQ2dCLFVBQVUsQ0FBQ2YsTUFBTSxDQUFDO2tCQUFBLEVBQzVFLENBQUM7Z0JBQUE7a0JBQ0RXLG9CQUFvQixDQUFDM0UsS0FBSyxDQUFDO2tCQUMzQmxELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRWlELEtBQUssQ0FBQztrQkFDM0JsRCxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQztrQkFDNUQsSUFBSSxDQUFDaUQsS0FBSyxDQUFDNkYsb0JBQW9CLEVBQUU7b0JBQy9CO29CQUNBO29CQUNNVixRQUFRLEdBQUcsSUFBSWtCLFVBQVUsQ0FBQ3JHLEtBQUssQ0FBQzVJLElBQUksRUFBRTtzQkFDMUNrUCxPQUFPLEVBQUV0RyxLQUFLLENBQUNzRyxPQUFPO3NCQUN0QkMsVUFBVSxFQUFFLEtBQUs7c0JBQUU7c0JBQ25CQyxRQUFRLEVBQUV4RyxLQUFLLENBQUN3RyxRQUFRO3NCQUN4QkMsSUFBSSxFQUFFekcsS0FBSyxDQUFDeUcsSUFBSTtzQkFDaEJDLE1BQU0sRUFBRTFHLEtBQUssQ0FBQzBHLE1BQU07c0JBQ3BCQyxPQUFPLEVBQUUzRyxLQUFLLENBQUMyRyxPQUFPO3NCQUN0QkMsT0FBTyxFQUFFNUcsS0FBSyxDQUFDNEcsT0FBTztzQkFDdEJDLE9BQU8sRUFBRTdHLEtBQUssQ0FBQzZHLE9BQU87c0JBQ3RCQyxPQUFPLEVBQUU5RyxLQUFLLENBQUM4RyxPQUFPO3NCQUN0QkMsT0FBTyxFQUFFL0csS0FBSyxDQUFDK0csT0FBTztzQkFDdEJDLE1BQU0sRUFBRWhILEtBQUssQ0FBQ2dILE1BQU07c0JBQ3BCQyxRQUFRLEVBQUVqSCxLQUFLLENBQUNpSCxRQUFRO3NCQUN4QkMsT0FBTyxFQUFFbEgsS0FBSyxDQUFDa0gsT0FBTztzQkFDdEJDLE1BQU0sRUFBRW5ILEtBQUssQ0FBQ21ILE1BQU07c0JBQ3BCQyxPQUFPLEVBQUVwSCxLQUFLLENBQUNvSCxPQUFPO3NCQUN0QkMsYUFBYSxFQUFFckgsS0FBSyxDQUFDcUg7b0JBQ3ZCLENBQUMsQ0FBQztvQkFDRmxDLFFBQVEsQ0FBQ0ksZ0JBQWdCLEdBQUcsSUFBSTs7b0JBRWhDO29CQUNBMUMsTUFBTSxDQUFDeUUsYUFBYSxDQUFDbkMsUUFBUSxDQUFDO2tCQUNoQztrQkFBQyxPQUFBdEksUUFBQSxDQUFBbEIsTUFBQTtnQkFBQTtrQkFBQSxPQUFBa0IsUUFBQSxDQUFBdkQsTUFBQTtnQkFBQTtrQkFJQ29ILElBQUksR0FBR3lCLGdEQUFNLENBQUMsQ0FBQztrQkFBQXRGLFFBQUEsQ0FBQXpCLElBQUE7a0JBRW5CO2tCQUNNNkosbUJBQWtCLEdBQUcsSUFBSWpLLE9BQU8sQ0FBQyxVQUFDdEMsT0FBTyxFQUFFdUwsTUFBTSxFQUFLO29CQUMxRCxTQUFTbEUsYUFBYUEsQ0FBQ0MsS0FBbUIsRUFBRTtzQkFDMUMsSUFDRUEsS0FBSyxDQUFDQyxJQUFJLENBQUM3SSxJQUFJLEtBQUsscUJBQXFCLElBQ3pDNEksS0FBSyxDQUFDQyxJQUFJLENBQUNZLFNBQVMsS0FBS0EsU0FBUyxFQUNsQzt3QkFDQXJDLE1BQU0sQ0FBQzBCLG1CQUFtQixDQUFDLFNBQVMsRUFBRUgsYUFBYSxDQUFDO3dCQUNwRCxJQUFJQyxLQUFLLENBQUNDLElBQUksQ0FBQzZGLE9BQU8sRUFBRTswQkFDdEJwTixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsTUFBTTswQkFDTHVMLE1BQU0sQ0FBQyxJQUFJbkwsS0FBSyxDQUFDa0gsS0FBSyxDQUFDQyxJQUFJLENBQUM4RixLQUFLLElBQUksbUJBQW1CLENBQUMsQ0FBQzt3QkFDNUQ7c0JBQ0Y7b0JBQ0Y7b0JBQ0F2SCxNQUFNLENBQUMyQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVKLGFBQWEsQ0FBQzs7b0JBRWpEO29CQUNBaUcsVUFBVSxDQUFDLFlBQU07c0JBQ2Z4SCxNQUFNLENBQUMwQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUVILGFBQWEsQ0FBQztzQkFDcERrRSxNQUFNLENBQUMsSUFBSW5MLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLEVBQUU0SixPQUFPLENBQUM7a0JBQ2IsQ0FBQyxDQUFDO2tCQUNJekMsS0FBSSxHQUFHMEMsa0JBQWtCLENBQzdCLFNBQVMsRUFDVDNDLEtBQUssQ0FBQzZDLE1BQU0sRUFDWmhDLFNBQVMsRUFDVHVCLG9EQUFNLENBQUNwQyxLQUFLLENBQUM2QyxNQUFNLEVBQUU7b0JBQ25CcUQscUJBQXFCLEVBQUU7a0JBQ3pCLENBQUMsQ0FBQyxFQUNGMUgsTUFBTSxDQUFDbUMsUUFBUSxDQUFDQyxJQUFJLEVBQ3BCRixJQUNGLENBQUMsRUFDRDtrQkFDQWxDLE1BQU0sQ0FBQzRCLFdBQVcsQ0FDaEI7b0JBQUVoSixJQUFJLEVBQUUsb0JBQW9CO29CQUFFeUosU0FBUyxFQUFFQSxTQUFTO29CQUFFSCxJQUFJLEVBQUVBO2tCQUFLLENBQUMsRUFDaEUsR0FDRixDQUFDO2tCQUNEbEMsTUFBTSxDQUFDNEIsV0FBVyxDQUFDO29CQUFFaEosSUFBSSxFQUFFLHVCQUF1QjtvQkFBRTZJLElBQUksRUFBRUEsS0FBSTtvQkFBRVMsSUFBSSxFQUFFQTtrQkFBSyxDQUFDLEVBQUUsR0FBRyxDQUFDO2tCQUM1RXdFLG9CQUFtQixHQUFHLElBQUlsSyxPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRXVMLE1BQU0sRUFBSztvQkFDM0QsU0FBU2dDLGNBQWNBLENBQUNqRyxLQUFtQixFQUFFO3NCQUMzQyxJQUNFQSxLQUFLLENBQUNDLElBQUksQ0FBQzdJLElBQUksS0FBSyxzQkFBc0IsSUFDMUM0SSxLQUFLLENBQUNDLElBQUksQ0FBQ1ksU0FBUyxLQUFLQSxTQUFTLEVBQ2xDO3dCQUNBckMsTUFBTSxDQUFDMEIsbUJBQW1CLENBQUMsU0FBUyxFQUFFK0YsY0FBYyxDQUFDO3dCQUNyRCxJQUFJakcsS0FBSyxDQUFDQyxJQUFJLENBQUM2RixPQUFPLEVBQUU7MEJBQ3RCcE4sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqQixDQUFDLE1BQU07MEJBQ0x1TCxNQUFNLENBQUMsSUFBSW5MLEtBQUssQ0FBQ2tILEtBQUssQ0FBQ0MsSUFBSSxDQUFDOEYsS0FBSyxJQUFJLG9CQUFvQixDQUFDLENBQUM7d0JBQzdEO3NCQUNGO29CQUNGO29CQUNBdkgsTUFBTSxDQUFDMkIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFOEYsY0FBYyxDQUFDOztvQkFFbEQ7b0JBQ0FELFVBQVUsQ0FBQyxZQUFNO3NCQUNmeEgsTUFBTSxDQUFDMEIsbUJBQW1CLENBQUMsU0FBUyxFQUFFK0YsY0FBYyxDQUFDO3NCQUNyRGhDLE1BQU0sQ0FBQyxJQUFJbkwsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQzFDLENBQUMsRUFBRTRKLE9BQU8sQ0FBQztrQkFDYixDQUFDLENBQUMsRUFDRjtrQkFDQTtrQkFDQTtrQkFDQTVGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdDQUF3QyxDQUFDO2tCQUFBRixRQUFBLENBQUFwRCxJQUFBO2tCQUFBLE9BQy9DdUIsT0FBTyxDQUFDbUwsR0FBRyxDQUFDLENBQUNsQixtQkFBa0IsRUFBRUMsb0JBQW1CLENBQUMsQ0FBQztnQkFBQTtrQkFDNURwSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQztrQkFDbEQ7a0JBQUFGLFFBQUEsQ0FBQXBELElBQUE7a0JBQUE7Z0JBQUE7a0JBQUFvRCxRQUFBLENBQUF6QixJQUFBO2tCQUFBeUIsUUFBQSxDQUFBMEssRUFBQSxHQUFBMUssUUFBQTtrQkFFQUMsT0FBTyxDQUFDaUosS0FBSyxDQUFDLDZCQUE2QixFQUFBbEosUUFBQSxDQUFBMEssRUFBTyxDQUFDO2tCQUNuRDtnQkFBQTtrQkFBQTFLLFFBQUEsQ0FBQXpCLElBQUE7a0JBRUEwQixPQUFPLENBQUNDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQztrQkFDeENpRCxLQUFLLENBQUN3RixZQUFZLENBQUNHLEtBQUssQ0FBQyxDQUFDO2tCQUMxQjtrQkFBQTlJLFFBQUEsQ0FBQXBELElBQUE7a0JBQUEsT0FDTXVCLE9BQU8sQ0FBQ21MLEdBQUcsQ0FDZm5HLEtBQUssQ0FBQzBGLGNBQWMsQ0FBQ1UsR0FBRyxDQUFDLFVBQUNyQixVQUFVO29CQUFBLE9BQUtoQixjQUFjLENBQUNnQixVQUFVLENBQUNmLE1BQU0sQ0FBQztrQkFBQSxFQUM1RSxDQUFDO2dCQUFBO2tCQUNEVyxvQkFBb0IsQ0FBQzNFLEtBQUssQ0FBQztrQkFBQSxPQUFBbkQsUUFBQSxDQUFBbEIsTUFBQTtnQkFBQTtnQkFBQTtrQkFBQSxPQUFBa0IsUUFBQSxDQUFBdEIsSUFBQTtjQUFBO1lBQUEsR0FBQW1CLE9BQUE7VUFBQSxDQUU5QjtVQUFBLGdCQS9QS21JLGVBQWVBLENBQUFySSxFQUFBO1lBQUEsT0FBQXNJLElBQUEsQ0FBQTdJLEtBQUEsT0FBQUQsU0FBQTtVQUFBO1FBQUEsR0ErUHBCOztRQUVEO1FBQ0EsSUFBSXlJLE9BQU8sRUFBRTtVQUNYO1VBQ0EsSUFBSSxPQUFPQSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2hDQSxPQUFPLEdBQUc7Y0FDUitDLFVBQVUsRUFBRSxLQUFLO2NBQ2pCQyxPQUFPLEVBQUU7WUFDWCxDQUFDO1VBQ0gsQ0FBQyxNQUFNLElBQUloUCxPQUFBLENBQU9nTSxPQUFPLE1BQUssUUFBUSxFQUFFO1lBQ3RDQSxPQUFPLENBQUNnRCxPQUFPLEdBQUcsS0FBSztVQUN6QjtRQUNGO1FBQ0EsT0FBT2pGLHdCQUF3QixDQUFDbEwsSUFBSSxDQUFDLElBQUksRUFBRUYsSUFBSSxFQUFFeU4sZUFBZSxFQUFFSixPQUFPLENBQUM7TUFDNUUsQ0FBQyxNQUFNO1FBQ0w7UUFDQSxPQUFPakMsd0JBQXdCLENBQUNsTCxJQUFJLENBQUMsSUFBSSxFQUFFRixJQUFJLEVBQUVtTixRQUFRLEVBQUVFLE9BQU8sQ0FBQztNQUNyRTtJQUNGLENBQUM7SUFFRDNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RCxDQUFDOztJQUVwRTtJQUNBLFNBQVMySyxrQkFBa0JBLENBQUEsRUFBRztNQUM1Qm5LLFFBQVEsQ0FBQzRDLGdCQUFnQixDQUN2QixPQUFPO1FBQUEsSUFBQXdILEtBQUEsR0FBQTVMLGlCQUFBLGNBQUF4RyxtQkFBQSxHQUFBb0YsSUFBQSxDQUNQLFNBQUF5RSxTQUFnQlksS0FBaUI7VUFBQSxJQUFBNEgsR0FBQSxFQUFBL0UsTUFBQSxFQUFBaEMsU0FBQSxFQUFBSCxJQUFBLEVBQUF1RSxrQkFBQSxFQUFBaEYsSUFBQSxFQUFBaUYsbUJBQUEsRUFBQUMsUUFBQTtVQUFBLE9BQUE1UCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMkksVUFBQUMsU0FBQTtZQUFBLGtCQUFBQSxTQUFBLENBQUF0RSxJQUFBLEdBQUFzRSxTQUFBLENBQUFqRyxJQUFBO2NBQUE7Z0JBQUEsS0FDM0IrRSxNQUFNLENBQUN4QixhQUFhO2tCQUFBMEMsU0FBQSxDQUFBakcsSUFBQTtrQkFBQTtnQkFBQTtnQkFDdEJxRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFBQSxPQUFBMkMsU0FBQSxDQUFBcEcsTUFBQTtjQUFBO2dCQUFBLEtBRzNCOEMsd0RBQVcsQ0FBQzRELEtBQUssQ0FBQzZDLE1BQU0sQ0FBQztrQkFBQW5ELFNBQUEsQ0FBQWpHLElBQUE7a0JBQUE7Z0JBQUE7Z0JBQUEsT0FBQWlHLFNBQUEsQ0FBQXBHLE1BQUE7Y0FBQTtnQkFBQSxLQUd6QjBHLEtBQUssQ0FBQ3VGLGdCQUFnQjtrQkFBQTdGLFNBQUEsQ0FBQWpHLElBQUE7a0JBQUE7Z0JBQUE7Z0JBQ3hCcUQsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7Z0JBQUEsT0FBQTJDLFNBQUEsQ0FBQXBHLE1BQUE7Y0FBQTtnQkFBQSxLQU1oQzhLLGdCQUFnQixDQUFDcEUsS0FBSyxDQUFDO2tCQUFBTixTQUFBLENBQUFqRyxJQUFBO2tCQUFBO2dCQUFBO2dCQUN6QjtnQkFDTW1PLEdBQUcsR0FBRzlHLElBQUksQ0FBQzhHLEdBQUcsQ0FBQyxDQUFDO2dCQUFBLEtBQ2xCNUgsS0FBSyxDQUFDd0YsWUFBWTtrQkFBQTlGLFNBQUEsQ0FBQWpHLElBQUE7a0JBQUE7Z0JBQUE7Z0JBQ3BCcUQsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0VBQWdFLENBQUM7Z0JBQzdFRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQztnQkFBQSxPQUFBMkMsU0FBQSxDQUFBcEcsTUFBQTtjQUFBO2dCQUdsRTBHLEtBQUssQ0FBQ3dGLFlBQVksR0FBRyxJQUFJQyxlQUFlLENBQUMsQ0FBQztnQkFDMUN6RixLQUFLLENBQUMwRixjQUFjLEdBQUcsRUFBRTtnQkFFbkI3QyxNQUFNLEdBQUc3QyxLQUFLLENBQUM2QyxNQUFNLEVBQzNCO2dCQUNBL0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hEO2dCQUNBaUQsS0FBSyxDQUFDNEYsY0FBYyxDQUFDLENBQUM7Z0JBQ3RCNUYsS0FBSyxDQUFDNkgsZUFBZSxDQUFDLENBQUM7Z0JBQ2pCaEgsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEVBQzFDO2dCQUNNTCxJQUFJLEdBQUd5QixnREFBTSxDQUFDLENBQUM7Z0JBQUF6QyxTQUFBLENBQUF0RSxJQUFBO2dCQUVuQjtnQkFDTTZKLGtCQUFrQixHQUFHLElBQUlqSyxPQUFPLENBQUMsVUFBQ3RDLE9BQU8sRUFBRXVMLE1BQU0sRUFBSztrQkFDMUQsU0FBU2xFLGFBQWFBLENBQUNDLEtBQW1CLEVBQUU7b0JBQzFDLElBQ0VBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDN0ksSUFBSSxLQUFLLHFCQUFxQixJQUN6QzRJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDWSxTQUFTLEtBQUtBLFNBQVMsRUFDbEM7c0JBQ0FyQyxNQUFNLENBQUMwQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUVILGFBQWEsQ0FBQztzQkFDcEQsSUFBSUMsS0FBSyxDQUFDQyxJQUFJLENBQUM2RixPQUFPLEVBQUU7d0JBQ3RCcE4sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3NCQUNqQixDQUFDLE1BQU07d0JBQ0x1TCxNQUFNLENBQUMsSUFBSW5MLEtBQUssQ0FBQ2tILEtBQUssQ0FBQ0MsSUFBSSxDQUFDOEYsS0FBSyxJQUFJLG1CQUFtQixDQUFDLENBQUM7c0JBQzVEO29CQUNGO2tCQUNGO2tCQUNBdkgsTUFBTSxDQUFDMkIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFSixhQUFhLEVBQUU7b0JBQ2hEK0gsT0FBTyxFQUFFO2tCQUNYLENBQUMsQ0FBQzs7a0JBRUY7a0JBQ0E5QixVQUFVLENBQUMsWUFBTTtvQkFDZnhILE1BQU0sQ0FBQzBCLG1CQUFtQixDQUFDLFNBQVMsRUFBRUgsYUFBYSxDQUFDO29CQUNwRGtFLE1BQU0sQ0FBQyxJQUFJbkwsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7a0JBQ3pDLENBQUMsRUFBRTRKLE9BQU8sQ0FBQyxFQUFDO2dCQUNkLENBQUMsQ0FBQyxFQUVGOztnQkFDQWxFLE1BQU0sQ0FBQzRCLFdBQVcsQ0FDaEI7a0JBQUVoSixJQUFJLEVBQUUsb0JBQW9CO2tCQUFFeUosU0FBUyxFQUFFQSxTQUFTO2tCQUFFSCxJQUFJLEVBQUVBO2dCQUFLLENBQUMsRUFDaEUsR0FDRixDQUFDO2dCQUNLVCxJQUFJLEdBQUcwQyxrQkFBa0IsQ0FDN0IsU0FBUyxFQUNUM0MsS0FBSyxDQUFDNkMsTUFBTSxFQUNaaEMsU0FBUyxFQUNUdUIsb0RBQU0sQ0FBQ1MsTUFBTSxFQUFFO2tCQUNicUQscUJBQXFCLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxFQUNGMUgsTUFBTSxDQUFDbUMsUUFBUSxDQUFDQyxJQUFJLEVBQ3BCRixJQUNGLENBQUM7Z0JBQ0RsQyxNQUFNLENBQUM0QixXQUFXLENBQUM7a0JBQUVoSixJQUFJLEVBQUUsdUJBQXVCO2tCQUFFNkksSUFBSSxFQUFFQSxJQUFJO2tCQUFFUyxJQUFJLEVBQUVBO2dCQUFLLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQzVFd0UsbUJBQW1CLEdBQUcsSUFBSWxLLE9BQU8sQ0FBQyxVQUFDdEMsT0FBTyxFQUFFdUwsTUFBTSxFQUFLO2tCQUMzRCxTQUFTZ0MsY0FBY0EsQ0FBQ2pHLEtBQW1CLEVBQUU7b0JBQzNDLElBQ0VBLEtBQUssQ0FBQ0MsSUFBSSxDQUFDN0ksSUFBSSxLQUFLLHNCQUFzQixJQUMxQzRJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDWSxTQUFTLEtBQUtBLFNBQVMsRUFDbEM7c0JBQ0FyQyxNQUFNLENBQUMwQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUrRixjQUFjLENBQUM7c0JBQ3JELElBQUlqRyxLQUFLLENBQUNDLElBQUksQ0FBQzZGLE9BQU8sRUFBRTt3QkFDdEJwTixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7c0JBQ2pCLENBQUMsTUFBTTt3QkFDTHVMLE1BQU0sQ0FBQyxJQUFJbkwsS0FBSyxDQUFDa0gsS0FBSyxDQUFDQyxJQUFJLENBQUM4RixLQUFLLElBQUksb0JBQW9CLENBQUMsQ0FBQztzQkFDN0Q7b0JBQ0Y7a0JBQ0Y7a0JBQ0F2SCxNQUFNLENBQUMyQixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU4RixjQUFjLENBQUM7O2tCQUVsRDtrQkFDQUQsVUFBVSxDQUFDLFlBQU07b0JBQ2Z4SCxNQUFNLENBQUMwQixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUrRixjQUFjLENBQUM7b0JBQ3JEaEMsTUFBTSxDQUFDLElBQUluTCxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztrQkFDMUMsQ0FBQyxFQUFFNEosT0FBTyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxFQUNGO2dCQUFBaEQsU0FBQSxDQUFBakcsSUFBQTtnQkFBQSxPQUNNd0wsa0JBQWtCO2NBQUE7Z0JBQUF2RixTQUFBLENBQUFqRyxJQUFBO2dCQUFBLE9BQ2xCeUwsbUJBQW1CO2NBQUE7Z0JBQUF4RixTQUFBLENBQUFqRyxJQUFBO2dCQUFBO2NBQUE7Z0JBQUFpRyxTQUFBLENBQUF0RSxJQUFBO2dCQUFBc0UsU0FBQSxDQUFBc0MsRUFBQSxHQUFBdEMsU0FBQTtnQkFLekI1QyxPQUFPLENBQUNpSixLQUFLLENBQUMsNkJBQTZCLEVBQUFyRyxTQUFBLENBQUFzQyxFQUFPLENBQUM7Z0JBQ25EO2NBQUE7Z0JBQUF0QyxTQUFBLENBQUF0RSxJQUFBO2dCQUVBNEUsS0FBSyxDQUFDd0YsWUFBWSxDQUFDRyxLQUFLLENBQUMsQ0FBQztnQkFBQWpHLFNBQUEsQ0FBQWpHLElBQUE7Z0JBQUEsT0FDcEJ1QixPQUFPLENBQUNtTCxHQUFHLENBQ2ZuRyxLQUFLLENBQUMwRixjQUFjLENBQUNVLEdBQUcsQ0FBQyxVQUFDckIsVUFBVTtrQkFBQSxPQUFLaEIsY0FBYyxDQUFDZ0IsVUFBVSxDQUFDZixNQUFNLENBQUM7Z0JBQUEsRUFDNUUsQ0FBQztjQUFBO2dCQUNEbEgsT0FBTyxDQUFDQyxHQUFHLENBQUMsK0NBQStDLENBQUM7Z0JBQzVELElBQUksQ0FBQ2lELEtBQUssQ0FBQzZGLG9CQUFvQixFQUFFO2tCQUMvQjtrQkFDTVYsUUFBUSxHQUFHLElBQUlrQixVQUFVLENBQUNyRyxLQUFLLENBQUM1SSxJQUFJLEVBQUU7b0JBQzFDa1AsT0FBTyxFQUFFdEcsS0FBSyxDQUFDc0csT0FBTztvQkFDdEJDLFVBQVUsRUFBRSxLQUFLO29CQUFFO29CQUNuQkMsUUFBUSxFQUFFeEcsS0FBSyxDQUFDd0csUUFBUTtvQkFDeEJDLElBQUksRUFBRXpHLEtBQUssQ0FBQ3lHLElBQUk7b0JBQ2hCQyxNQUFNLEVBQUUxRyxLQUFLLENBQUMwRyxNQUFNO29CQUNwQkMsT0FBTyxFQUFFM0csS0FBSyxDQUFDMkcsT0FBTztvQkFDdEJDLE9BQU8sRUFBRTVHLEtBQUssQ0FBQzRHLE9BQU87b0JBQ3RCQyxPQUFPLEVBQUU3RyxLQUFLLENBQUM2RyxPQUFPO29CQUN0QkMsT0FBTyxFQUFFOUcsS0FBSyxDQUFDOEcsT0FBTztvQkFDdEJDLE9BQU8sRUFBRS9HLEtBQUssQ0FBQytHLE9BQU87b0JBQ3RCQyxNQUFNLEVBQUVoSCxLQUFLLENBQUNnSCxNQUFNO29CQUNwQkMsUUFBUSxFQUFFakgsS0FBSyxDQUFDaUgsUUFBUTtvQkFDeEJDLE9BQU8sRUFBRWxILEtBQUssQ0FBQ2tILE9BQU87b0JBQ3RCQyxNQUFNLEVBQUVuSCxLQUFLLENBQUNtSCxNQUFNO29CQUNwQkMsT0FBTyxFQUFFcEgsS0FBSyxDQUFDb0gsT0FBTztvQkFDdEJDLGFBQWEsRUFBRXJILEtBQUssQ0FBQ3FIO2tCQUN2QixDQUFDLENBQUM7a0JBQ0ZsQyxRQUFRLENBQUNJLGdCQUFnQixHQUFHLElBQUk7O2tCQUVoQztrQkFDQTFDLE1BQU0sQ0FBQ3lFLGFBQWEsQ0FBQ25DLFFBQVEsQ0FBQztnQkFDaEM7Z0JBQUMsT0FBQXpGLFNBQUEsQ0FBQS9ELE1BQUE7Y0FBQTtjQUFBO2dCQUFBLE9BQUErRCxTQUFBLENBQUFuRSxJQUFBO1lBQUE7VUFBQSxHQUFBNkQsUUFBQTtRQUFBLENBR047UUFBQSxpQkFBQUYsR0FBQTtVQUFBLE9BQUF5SSxLQUFBLENBQUExTCxLQUFBLE9BQUFELFNBQUE7UUFBQTtNQUFBLEtBQ0Q7UUFDRXdMLFVBQVUsRUFBRSxJQUFJO1FBQ2hCOUMsaUJBQWlCLEVBQUUsSUFBSTtRQUN2QitDLE9BQU8sRUFBRTtNQUNYLENBQ0YsQ0FBQyxFQUFDO0lBQ0o7O0lBRUE7SUFDQUMsa0JBQWtCLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQ0QsSUFBSSxDQUFDbEosTUFBTSxDQUFDK0QsYUFBYSxFQUFFO0lBQ3pCRCxXQUFXLENBQUMsQ0FBQztFQUNmO0VBQ0EvRSxRQUFRLENBQUM0QyxnQkFBZ0IsQ0FDdkIsa0JBQWtCLEVBQ2xCLFlBQU07SUFDSnJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQy9CQywwREFBYSxDQUFDd0IsTUFBTSxDQUFDbUMsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQ2hJLElBQUksQ0FBQyxVQUFDMEcsTUFBTSxFQUFLO01BQ25EeEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFdUMsTUFBTSxDQUFDO01BQ3BDZCxNQUFNLENBQUN4QixhQUFhLEdBQUdzQyxNQUFNO0lBQy9CLENBQUMsQ0FBQztFQUNKLENBQUMsRUFDRDtJQUNFNkUsSUFBSSxFQUFFO0VBQ1IsQ0FDRixDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBbkgsMERBQWEsQ0FBQ3dCLE1BQU0sQ0FBQ21DLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDaEksSUFBSSxDQUFDLFVBQUMwRyxNQUFNLEVBQUs7RUFDekQsSUFBSSxDQUFDQSxNQUFNLEVBQUU7SUFDWCtDLElBQUksQ0FBQyxDQUFDO0VBQ1I7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BtZWR2L2ZpbmRlci9maW5kZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9pbmplY3RlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnNjc2YTY2NTE0NDM5OGU2OTY3NTY3YTJiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlcyA9IFsnYW1hem9uLmNvbScsICcxMjcuMC4wLjE6ODAwMCddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG4iLCJpbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZXMsIGNoZWNrX3VzZXJfaWRfdXJsIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKCEoYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpKSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgY29uc3QgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuLy8gQWRkIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIG1hcmtlcnMgd2hlbiBuZWVkZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja2FibGVNYXJrZXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbdmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG91bGRFeGNsdWRlKHVybDogc3RyaW5nLCBpZ25vcmVVc2VySWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICBpZiAoIWlnbm9yZVVzZXJJZCkge1xuICAgIGlmIChjaHJvbWUuc3RvcmFnZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VySWQnKVxuICAgICAgaWYgKCFyZXN1bHQudXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyB1c2VyIGlkJylcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnR0VUX1VTRVJfSURfUkVTUE9OU0UnKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEudXNlcklkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdHRVRfVVNFUl9JRCcgfSwgJyonKVxuICAgICAgfSlcbiAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gKFxuICAgICF1cmxfaW5jbHVkZXMuc29tZSgoaW5jbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGluY2x1ZGVVcmwpKSB8fFxuICAgIGZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG59XG5leHBvcnQgZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IGhhc2ggPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCB8PSAwXG4gIH1cbiAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICByZXR1cm4gaGFzaC50b1N0cmluZygpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja191c2VyX2lkKHVzZXJfaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y2hlY2tfdXNlcl9pZF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuICdzdWNjZXNzJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YSB8fCAnVW5rbm93biBlcnJvcidcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gKVxuICB9XG4gIHJldHVybiAnVW5rbm93biBlcnJvcidcbn1cbiIsIi8vIExpY2Vuc2U6IE1JVFxuLy8gQXV0aG9yOiBBbnRvbiBNZWR2ZWRldiA8YW50b25AbWVkdi5pbz5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FudG9ubWVkdi9maW5kZXJcbmNvbnN0IGFjY2VwdGVkQXR0ck5hbWVzID0gbmV3IFNldChbJ3JvbGUnLCAnbmFtZScsICdhcmlhLWxhYmVsJywgJ3JlbCcsICdocmVmJ10pO1xuLyoqIENoZWNrIGlmIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBhcmUgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbmFtZUlzT2sgPSBhY2NlcHRlZEF0dHJOYW1lcy5oYXMobmFtZSk7XG4gICAgbmFtZUlzT2sgfHw9IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSAmJiB3b3JkTGlrZShuYW1lKTtcbiAgICBsZXQgdmFsdWVJc09rID0gd29yZExpa2UodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDEwMDtcbiAgICB2YWx1ZUlzT2sgfHw9IHZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiB3b3JkTGlrZSh2YWx1ZS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5hbWVJc09rICYmIHZhbHVlSXNPaztcbn1cbi8qKiBDaGVjayBpZiBpZCBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZE5hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiBjbGFzcyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiB0YWcgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gdGFnTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKiogRmluZHMgdW5pcXVlIENTUyBzZWxlY3RvcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRlcihpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChpbnB1dC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZW5lcmF0ZSBDU1Mgc2VsZWN0b3IgZm9yIG5vbi1lbGVtZW50IG5vZGUgdHlwZS5gKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICByb290OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBpZE5hbWU6IGlkTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIHRpbWVvdXRNczogMTAwMCxcbiAgICAgICAgc2VlZE1pbkxlbmd0aDogMyxcbiAgICAgICAgb3B0aW1pemVkTWluTGVuZ3RoOiAyLFxuICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IEluZmluaXR5LFxuICAgIH07XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3Qgcm9vdERvY3VtZW50ID0gZmluZFJvb3REb2N1bWVudChjb25maWcucm9vdCwgZGVmYXVsdHMpO1xuICAgIGxldCBmb3VuZFBhdGg7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSkge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMgfHxcbiAgICAgICAgICAgIGNvdW50ID49IGNvbmZpZy5tYXhOdW1iZXJPZlBhdGhDaGVja3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGZQYXRoID0gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIWZQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lb3V0OiBDYW4ndCBmaW5kIGEgdW5pcXVlIHNlbGVjdG9yIGFmdGVyICR7Y29uZmlnLnRpbWVvdXRNc31tc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yKGZQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAodW5pcXVlKGNhbmRpZGF0ZSwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICAgICAgZm91bmRQYXRoID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxlY3RvciB3YXMgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICBjb25zdCBvcHRpbWl6ZWQgPSBbXG4gICAgICAgIC4uLm9wdGltaXplKGZvdW5kUGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpLFxuICAgIF07XG4gICAgb3B0aW1pemVkLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBpZiAob3B0aW1pemVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKG9wdGltaXplZFswXSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcihmb3VuZFBhdGgpO1xufVxuZnVuY3Rpb24qIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgIGxldCBwYXRocyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRpZShjdXJyZW50LCBjb25maWcpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbGV2ZWwpIHtcbiAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2gobGV2ZWwpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgICAgIHBhdGhzLnB1c2goLi4uY29tYmluYXRpb25zKHN0YWNrKSk7XG4gICAgICAgIGlmIChpID49IGNvbmZpZy5zZWVkTWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGhzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB3b3JkTGlrZShuYW1lKSB7XG4gICAgaWYgKC9eW2EtelxcLV17Myx9JC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBuYW1lLnNwbGl0KC8tfFtBLVpdLyk7XG4gICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICAgICAgaWYgKHdvcmQubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1teYWVpb3VdezQsfS9pLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRpZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBjb25zdCBsZXZlbCA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChlbGVtZW50SWQgJiYgY29uZmlnLmlkTmFtZShlbGVtZW50SWQpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJyMnICsgQ1NTLmVzY2FwZShlbGVtZW50SWQpLFxuICAgICAgICAgICAgcGVuYWx0eTogMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZiAoY29uZmlnLmNsYXNzTmFtZShuYW1lKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJy4nICsgQ1NTLmVzY2FwZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5hdHRyKGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGBbJHtDU1MuZXNjYXBlKGF0dHIubmFtZSl9PVwiJHtDU1MuZXNjYXBlKGF0dHIudmFsdWUpfVwiXWAsXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoY29uZmlnLnRhZ05hbWUodGFnTmFtZSkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgcGVuYWx0eTogNSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMTAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBudGggPSBpbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChudGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aENoaWxkKHRhZ05hbWUsIG50aCksXG4gICAgICAgICAgICBwZW5hbHR5OiA1MCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbDtcbn1cbmZ1bmN0aW9uIHNlbGVjdG9yKHBhdGgpIHtcbiAgICBsZXQgbm9kZSA9IHBhdGhbMF07XG4gICAgbGV0IHF1ZXJ5ID0gbm9kZS5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHBhdGhbaV0ubGV2ZWwgfHwgMDtcbiAgICAgICAgaWYgKG5vZGUubGV2ZWwgPT09IGxldmVsIC0gMSkge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ID4gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcGF0aFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gcGVuYWx0eShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgubWFwKChub2RlKSA9PiBub2RlLnBlbmFsdHkpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKTtcbn1cbmZ1bmN0aW9uIGJ5UGVuYWx0eShhLCBiKSB7XG4gICAgcmV0dXJuIHBlbmFsdHkoYSkgLSBwZW5hbHR5KGIpO1xufVxuZnVuY3Rpb24gaW5kZXhPZihpbnB1dCwgdGFnTmFtZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgICAgICh0YWdOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUpKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBpbnB1dCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihjdXJyZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgIHBlbmFsdHk6IE5hTixcbiAgICAgICAgICAgIGxldmVsOiBpLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpZiAodW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gbnRoQ2hpbGQodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtY2hpbGQoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uIG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1vZi10eXBlKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiogY29tYmluYXRpb25zKHN0YWNrLCBwYXRoID0gW10pIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHN0YWNrWzBdKSB7XG4gICAgICAgICAgICB5aWVsZCogY29tYmluYXRpb25zKHN0YWNrLnNsaWNlKDEsIHN0YWNrLmxlbmd0aCksIHBhdGguY29uY2F0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBmaW5kUm9vdERvY3VtZW50KHJvb3ROb2RlLCBkZWZhdWx0cykge1xuICAgIGlmIChyb290Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG4gICAgaWYgKHJvb3ROb2RlID09PSBkZWZhdWx0cy5yb290KSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZS5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcm9vdE5vZGU7XG59XG5mdW5jdGlvbiB1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3QgY3NzID0gc2VsZWN0b3IocGF0aCk7XG4gICAgc3dpdGNoIChyb290RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjc3MpLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHNlbGVjdCBhbnkgbm9kZSB3aXRoIHRoaXMgc2VsZWN0b3I6ICR7Y3NzfWApO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiogb3B0aW1pemUocGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPiAyICYmIHBhdGgubGVuZ3RoID4gY29uZmlnLm9wdGltaXplZE1pbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IFsuLi5wYXRoXTtcbiAgICAgICAgICAgIG5ld1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaWYgKHVuaXF1ZShuZXdQYXRoLCByb290RG9jdW1lbnQpICYmXG4gICAgICAgICAgICAgICAgcm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IobmV3UGF0aCkpID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG5ld1BhdGg7XG4gICAgICAgICAgICAgICAgeWllbGQqIG9wdGltaXplKG5ld1BhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQsXG4gIGlzRnJvbVBvcHVwLFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBmaW5kZXIgfSBmcm9tICdAbWVkdi9maW5kZXInXG4vLyBleHRlbmQgd2luZG93XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIG1vbmtleVBhdGNoZWQ6IGJvb2xlYW5cbiAgICBzaG91bGRFeGNsdWRlOiBib29sZWFuXG4gIH1cbn1cblxuY29uc3Qgd29yayA9ICgpID0+IHtcbiAgY29uc3QgbW9ua2V5UGF0Y2ggPSAoKSA9PiB7XG4gICAgd2luZG93Lm1vbmtleVBhdGNoZWQgPSB0cnVlXG4gICAgY29uc3Qgb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyID0gRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJcblxuICAgIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgICBjb25zdCBUaW1lT3V0ID0gMzAwMDBcblxuICAgIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgICAgdGFyZ2V0OiBhbnksXG4gICAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICAgIHNlbGVjdG9yOiBzdHJpbmcsXG4gICAgICB1cmw6IHN0cmluZyxcbiAgICAgIHV1aWQ6IHN0cmluZ1xuICAgICkge1xuICAgICAgZnVuY3Rpb24gZmluZENsaWNrYWJsZVBhcmVudChcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBkZXB0aDogbnVtYmVyID0gMCxcbiAgICAgICAgYWxsQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgICApOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICAgICAgLy8gQmFzZSBjYXNlOiBpZiBlbGVtZW50IGlzIG51bGwgb3Igd2UndmUgcmVhY2hlZCBtYXggZGVwdGhcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IGRlcHRoID49IDE1KSByZXR1cm4gYWxsQXR0cmlidXRlc1xuXG4gICAgICAgIC8vIENoZWNrIGFuZCBjb2xsZWN0IGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIGF0IGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1jbGlja2FibGUtaWQnXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykpIHtcbiAgICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gPVxuICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnRpbnVlIHNlYXJjaGluZyB1cCB0aGUgdHJlZSwgcGFzc2luZyBhbG9uZyBjb2xsZWN0ZWQgYXR0cmlidXRlc1xuICAgICAgICByZXR1cm4gZmluZENsaWNrYWJsZVBhcmVudChlbGVtZW50LnBhcmVudEVsZW1lbnQsIGRlcHRoICsgMSwgYWxsQXR0cmlidXRlcylcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuICAgICAgY29uc3QgYWxsQXR0cmlidXRlcyA9IGZpbmRDbGlja2FibGVQYXJlbnQodGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLy8gR2VuZXJhdGUgbmV3IEhUTUwgc25hcHNob3QgSURcbiAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh1dWlkKVxuXG4gICAgICAvLyBDcmVhdGUgYSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0XG4gICAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICB0YXJnZXQ6IHNlcmlhbGl6ZWRUYXJnZXQsIC8vIFJlcGxhY2UgZGlyZWN0IERPTSBlbGVtZW50IHdpdGggc2VyaWFsaXphYmxlIG9iamVjdFxuICAgICAgICAvLyAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgLy8gICB0YXJnZXRDbGFzczogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgLy8gICB0YXJnZXRJZDogdGFyZ2V0LmlkLFxuICAgICAgICAvLyAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciB8fCAnJyxcbiAgICAgICAgJ2RhdGEtc2VtYW50aWMtaWQnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddIHx8ICcnLFxuICAgICAgICAnZWxlbWVudC1tZXRhLW5hbWUnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gfHwgJycsXG4gICAgICAgICdlbGVtZW50LW1ldGEtZGF0YSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSB8fCAnJyxcbiAgICAgICAgJ3BhZ2UtbWV0YSc6IHBhZ2VNZXRhIHx8ICcnLFxuICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgaHRtbENvbnRlbnQ6IG1hcmtlZERvYy5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIC8vIHRvZG86IHBhdGNoIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3VwcG9ydCB3cmFwXG4gICAgLy8gY29uc3QgYmxvY2tTaWduYWxzID0ge31cbiAgICAvLyBjb25zdCBmaW5pc2hTaWduYWxzID0ge31cbiAgICBjb25zdCB3YWl0X2Zvcl9hYm9ydCA9IChzaWduYWwpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIC8vIElmIGFscmVhZHkgYWJvcnRlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSwgbGlzdGVuIGZvciB0aGUgYWJvcnQgZXZlbnRcbiAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZXNvbHZlKHZvaWQgMCksIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhc0RlZmF1bHRBY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCBhbmNob3IgPSBlbGVtZW50LmNsb3Nlc3QoJ2EnKVxuICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gaWYgaWQgaXMgbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uXG4gICAgICAvLyBpZiAoZWxlbWVudC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicpIHtcbiAgICAgIC8vICAgcmV0dXJuIHRydWVcbiAgICAgIC8vIH1cblxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIE1vbmtleSBwYXRjaCBhZGRFdmVudExpc3RlbmVyXG4gICAgRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5za2lwX21vbmtleV9wYXRjaCkge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgICBjb25zdCBjYWxsT3JpZ2luYWxMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJyAmJiBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCB3cmFwcGVkTGlzdGVuZXIgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAod2luZG93LnNob3VsZEV4Y2x1ZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgZXhjbHVkZScpXG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5wdXNoKGNvbnRyb2xsZXIpXG4gICAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGV2ZW50LmJsb2NrX3NpZ25hbC5zaWduYWxcbiAgICAgICAgICAgICAgYXdhaXQgd2FpdF9mb3JfYWJvcnQoc2lnbmFsKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgdW5ibG9ja2luZycpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgbm8gYmxvY2sgc2lnbmFsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMgPSBbXVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIGRldGVjdGVkIG9uOicsIGV2ZW50LnRhcmdldClcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IGZhbHNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgcGF0Y2ggZXZlbnQnLCBldmVudClcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIGxvZyBiZWZvcmUgYW5kIGFmdGVyIHRpbWVcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBmaW5kZXIoZXZlbnQudGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICAgJ2NsaWNrX2EnLFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLy8gYXdhaXQgc2xlZXAgNSBzZWNvbmRzXG4gICAgICAgICAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCA1MDAwKSk7XG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiMVwiKVxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3YWl0aW5nIGZvciBzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbicpXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzY3JlZW5zaG90Q29tcGxldGUsIGludGVyYWN0aW9uQ29tcGxldGVdKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24gY29tcGxldGUnKVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAvLyBhbGVydChcIjJcIilcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAgIC8vIHJlLWRpc3BhdGNoIHRoZSBldmVudFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgICAgLy8gYWJvcnQgYWxsIGZpbmlzaFNpZ25hbHNcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkLCAyJylcbiAgICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0byB3YWl0IGZvciBzY3JlZW5zaG90IGNvbXBsZXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgJ2NsaWNrX2InLFxuICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgZmluZGVyKGV2ZW50LnRhcmdldCwge1xuICAgICAgICAgICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogMFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIFJlcXVlc3Qgc2NyZWVuc2hvdFxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAvLyBhd2FpdCBBU3NjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgLy8gYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhaXRpbmcgZm9yIHNjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uJylcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzY3JlZW5zaG90Q29tcGxldGUsIGludGVyYWN0aW9uQ29tcGxldGVdKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uIGNvbXBsZXRlJylcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgYWZ0ZXIgc2NyZWVuc2hvdCBpcyBjYXB0dXJlZFxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAvLyBhYm9ydCBhbGwgZmluaXNoU2lnbmFsc1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gaWYgYm9vbGVhbiwgc2V0IHBhc3NpdmUgdG8gdHJ1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICB1c2VDYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIHdyYXBwZWRMaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG5vbi1jbGljayBldmVudHNcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpXG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIDxhPiB0YWdzXG4gICAgZnVuY3Rpb24gaGFuZGxlQW5jaG9yQ2xpY2tzKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zaG91bGRFeGNsdWRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGV4Y2x1ZGUnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCBiJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IDxhPiB0YWcgaW4gY2FzZSBvZiBuZXN0ZWQgZWxlbWVudHMgaW5zaWRlIHRoZSA8YT5cbiAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG5cbiAgICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBBbmNob3IgY2xpY2sgZXZlbnQgaGFuZGVyIGZyb20gb3VyIG93biBsaXN0ZW5lcicpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYWxyZWFkeSBiZSBsb2dnZWQgaW4gb3RoZXIgZXZlbnQgbGlzdGVuZXJzJylcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzID0gW11cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgICAvLyBpZiAoIWFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJzdGFydFBlcmlvZGljVXBsb2FkZWZcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8g55uR5ZCs5oiq5Zu+5a6M5oiQ55qE5raI5oGvXG4gICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8g5re75Yqg6LaF5pe25aSE55CGXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KSAvLyAz56eS6LaF5pe2XG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgLy8g5Y+R6YCB5oiq5Zu+6K+35rGCXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICAgJ2NsaWNrX2MnLFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgZmluZGVyKHRhcmdldCwge1xuICAgICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgICBhd2FpdCBzY3JlZW5zaG90Q29tcGxldGVcbiAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuXG4gICAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQsIDEnKVxuICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VDYXB0dXJlOiB0cnVlLFxuICAgICAgICAgIHNraXBfbW9ua2V5X3BhdGNoOiB0cnVlLFxuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICkgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gaGFuZGxlIDxhPiB0YWcgY2xpY2tzXG4gICAgaGFuZGxlQW5jaG9yQ2xpY2tzKClcbiAgfVxuICBpZiAoIXdpbmRvdy5tb25rZXlQYXRjaGVkKSB7XG4gICAgbW9ua2V5UGF0Y2goKVxuICB9XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkJylcbiAgICAgIHNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgICAgICAgd2luZG93LnNob3VsZEV4Y2x1ZGUgPSByZXN1bHRcbiAgICAgIH0pXG4gICAgfSxcbiAgICB7XG4gICAgICBvbmNlOiB0cnVlXG4gICAgfVxuICApXG59XG5cbi8vIGlnbm9yZSB1c2VyIGlkIGZvciBub3csIGJlY2F1c2UgZnVsbCBjaGVjayB3b3VsZCBiZSBhc3luYy5cbnNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBpZiAoIXJlc3VsdCkge1xuICAgIHdvcmsoKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZXMiLCJpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIiwiY29uY2F0IiwiY2hlY2tfdXNlcl9pZF91cmwiLCJmaWx0ZXJfdXJsIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImlzRnJvbVBvcHVwIiwiZWxlbWVudCIsImNsb3Nlc3QiLCJ1cGRhdGVfaWNvbiIsIl94IiwiX3VwZGF0ZV9pY29uIiwiX2NhbGxlZSIsInVybCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic2hvdWxkRXhjbHVkZSIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncm91cGVkUmVzdWx0IiwibWV0YU5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJtZXRhRGF0YSIsIkpTT04iLCJwYXJzZSIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsIl94MiIsIl9zaG91bGRFeGNsdWRlIiwiX2NhbGxlZTIiLCJpZ25vcmVVc2VySWQiLCJyZXN1bHQiLCJ1c2VySWQiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJ1bmRlZmluZWQiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0TWVzc2FnZSIsInNvbWUiLCJpbmNsdWRlVXJsIiwiaW5jbHVkZXMiLCJleGNsdWRlVXJsIiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsInV1aWQiLCJsb2NhdGlvbiIsImhyZWYiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJoYXNoQ29kZSIsInN0ciIsImhhc2giLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJjaGVja191c2VyX2lkIiwiX3gzIiwiX2NoZWNrX3VzZXJfaWQiLCJfY2FsbGVlMyIsInVzZXJfaWQiLCJyZXNwb25zZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZldGNoIiwianNvbiIsIm9rIiwidDAiLCJtZXNzYWdlIiwidjQiLCJ1dWlkdjQiLCJmaW5kZXIiLCJ3b3JrIiwibW9ua2V5UGF0Y2giLCJtb25rZXlQYXRjaGVkIiwib3JpZ2luYWxBZGRFdmVudExpc3RlbmVyIiwiRXZlbnRUYXJnZXQiLCJUaW1lT3V0IiwiY2FwdHVyZUludGVyYWN0aW9uIiwiZXZlbnRUeXBlIiwidGFyZ2V0Iiwic2VsZWN0b3IiLCJmaW5kQ2xpY2thYmxlUGFyZW50IiwiZGVwdGgiLCJhbGxBdHRyaWJ1dGVzIiwiaGFzQXR0cmlidXRlIiwicGFyZW50RWxlbWVudCIsInBhZ2VNZXRhIiwiY3VycmVudFNuYXBzaG90SWQiLCJzZXJpYWxpemVkVGFyZ2V0IiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImlkIiwiaW5uZXJUZXh0Iiwib3V0ZXJIVE1MIiwibWFya2VkRG9jIiwiaHRtbFNuYXBzaG90SWQiLCJodG1sQ29udGVudCIsIndhaXRfZm9yX2Fib3J0Iiwic2lnbmFsIiwicmVqZWN0IiwiYWJvcnRlZCIsIm9uY2UiLCJoYXNEZWZhdWx0QWN0aW9uIiwiYW5jaG9yIiwidG9Mb3dlckNhc2UiLCJsaXN0ZW5lciIsIl90aGlzIiwib3B0aW9ucyIsInNraXBfbW9ua2V5X3BhdGNoIiwiY2FsbE9yaWdpbmFsTGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsIndyYXBwZWRMaXN0ZW5lciIsIl9yZWYiLCJjb250cm9sbGVyIiwiX3V1aWQiLCJzY3JlZW5zaG90Q29tcGxldGUiLCJpbnRlcmFjdGlvbkNvbXBsZXRlIiwibmV3RXZlbnQiLCJfc2NyZWVuc2hvdENvbXBsZXRlIiwiX2RhdGEiLCJfaW50ZXJhY3Rpb25Db21wbGV0ZSIsImp1c3RfZm9yX2RlZmF1bHQiLCJibG9ja19zaWduYWwiLCJBYm9ydENvbnRyb2xsZXIiLCJmaW5pc2hfc2lnbmFscyIsImFib3J0IiwicHJldmVudERlZmF1bHQiLCJteV9kZWZhdWx0X3ByZXZlbnRlZCIsInN1Y2Nlc3MiLCJlcnJvciIsInNldFRpbWVvdXQiLCJoYW5kbGVNZXNzYWdlMSIsIm1heE51bWJlck9mUGF0aENoZWNrcyIsImFsbCIsIm1hcCIsIk1vdXNlRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNvbXBvc2VkIiwidmlldyIsImRldGFpbCIsInNjcmVlblgiLCJzY3JlZW5ZIiwiY2xpZW50WCIsImNsaWVudFkiLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJtZXRhS2V5IiwiYnV0dG9uIiwiYnV0dG9ucyIsInJlbGF0ZWRUYXJnZXQiLCJkaXNwYXRjaEV2ZW50IiwidDEiLCJ1c2VDYXB0dXJlIiwicGFzc2l2ZSIsImhhbmRsZUFuY2hvckNsaWNrcyIsIl9yZWYyIiwibm93Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2FwdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=
