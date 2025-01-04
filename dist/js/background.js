/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/recipe_new.ts":
/*!***************************!*\
  !*** ./src/recipe_new.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add_to_cart_button: () => (/* binding */ add_to_cart_button),
/* harmony export */   buy_box_with_accordion: () => (/* binding */ buy_box_with_accordion),
/* harmony export */   buy_box_without_accordion_delivery: () => (/* binding */ buy_box_without_accordion_delivery),
/* harmony export */   buy_box_without_accordion_pick_up: () => (/* binding */ buy_box_without_accordion_pick_up),
/* harmony export */   buy_now_button: () => (/* binding */ buy_now_button),
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   delivery_frequency_selector: () => (/* binding */ delivery_frequency_selector),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   product_delivery: () => (/* binding */ product_delivery),
/* harmony export */   product_facts: () => (/* binding */ product_facts),
/* harmony export */   quantity_selector: () => (/* binding */ quantity_selector),
/* harmony export */   recipes: () => (/* binding */ recipes),
/* harmony export */   refinement_option: () => (/* binding */ refinement_option),
/* harmony export */   set_up_now_button: () => (/* binding */ set_up_now_button)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var nav = {
  selector: '#navbar-main',
  name: 'nav_bar',
  children: [{
    selector: '#nav-search-bar-form',
    children: [{
      selector: 'input#twotabsearchtextbox',
      name: 'search_input'
    }, {
      selector: '#nav-search-submit-button',
      clickable: true,
      name: 'search_button'
    }]
  }, {
    selector: '#nav-link-accountList',
    text_selector: '#nav-link-accountList span.nav-line-2',
    add_text: true,
    clickable: true,
    name: 'account_and_list_button'
  }, {
    selector: '#nav-orders',
    add_text: true,
    clickable: true,
    name: 'order_button'
  }, {
    selector: '#nav-cart',
    text_selector: '#nav-cart .nav-line-2',
    add_text: true,
    clickable: true,
    name: 'cart_button'
  }]
};
var refinement_option = [{
  selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
  add_text: true,
  "class": 'refinement-title'
}, {
  selector: 'a.s-navigation-clear-link',
  add_text: true,
  name: 'clear_selection',
  clickable: true
}, {
  selector: "ul:nth-of-type(1) > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item):has(input[type='checkbox'])",
  add_text: true,
  name: 'from_text',
  clickable: true,
  // click_selector: "a",
  direct_child: true,
  text_js: function text_js(element) {
    try {
      var text = '';
      if (!element) {
        return text;
      }
      var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim();
        if (aChild && aChild.hasAttribute('title')) {
          text += ' ';
          text += aChild.getAttribute('title');
        }
      } else {
        var _aChild = element.querySelector('a.a-link-normal.s-navigation-item');
        if (_aChild && _aChild.hasAttribute('title')) {
          text += _aChild.getAttribute('title');
        }
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        text = 'Clear Option ' + text;
      }
      return text;
    } catch (e) {
      console.log(e);
      return '';
    }
  },
  generate_metadata: function generate_metadata(element) {
    var _element$closest;
    var text = '';
    var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
    if (element.innerText && element.innerText.trim()) {
      text += element.innerText.trim();
      if (aChild && aChild.hasAttribute('title')) {
        text += '_';
        text += aChild.getAttribute('title');
      }
    } else {
      var _aChild2 = element.querySelector('a.a-link-normal.s-navigation-item');
      if (_aChild2 && _aChild2.hasAttribute('title')) {
        text += _aChild2.getAttribute('title');
      }
    }
    var nameEm = (_element$closest = element.closest('ul')) === null || _element$closest === void 0 ? void 0 : _element$closest.previousElementSibling;
    var name = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText;
    var url = '';
    if (aChild && aChild.hasAttribute('href')) {
      url = aChild.getAttribute('href');
    }
    if (aChild && aChild.getAttribute('aria-current') === 'true') {
      return {
        name: 'refinements.' + name,
        data: {
          title: text,
          selected: true,
          url: url
        }
      };
    }
    return {
      name: 'refinements.' + name,
      data: {
        title: text,
        selected: false,
        url: url
      }
    };
  },
  children: [{
    selector: "input[type='checkbox']"
  }]
}, {
  selector: "ul:nth-of-type(1) > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item):not(:has(input[type='checkbox']))",
  add_text: true,
  name: 'from_text',
  clickable: true,
  direct_child: true,
  text_js: function text_js(element) {
    try {
      var text = '';
      if (!element) {
        return text;
      }
      var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim();
        if (aChild && aChild.hasAttribute('title')) {
          text += ' ';
          text += aChild.getAttribute('title');
        }
      } else {
        var _aChild3 = element.querySelector('a.a-link-normal.s-navigation-item');
        if (_aChild3 && _aChild3.hasAttribute('title')) {
          text += _aChild3.getAttribute('title');
        }
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        text = 'Clear Option ' + text;
      }
      return text;
    } catch (e) {
      console.log(e);
      return '';
    }
  },
  generate_metadata: function generate_metadata(element) {
    var _element$closest2;
    var text = '';
    var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
    if (element.innerText && element.innerText.trim()) {
      text += element.innerText.trim();
      if (aChild && aChild.hasAttribute('title')) {
        text += '_';
        text += aChild.getAttribute('title');
      }
    } else {
      var _aChild4 = element.querySelector('a.a-link-normal.s-navigation-item');
      if (_aChild4 && _aChild4.hasAttribute('title')) {
        text += _aChild4.getAttribute('title');
      }
    }
    var nameEm = (_element$closest2 = element.closest('ul')) === null || _element$closest2 === void 0 ? void 0 : _element$closest2.previousElementSibling;
    var name = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText;
    var url = '';
    if (aChild && aChild.hasAttribute('href')) {
      url = aChild.getAttribute('href');
    }
    if (aChild && aChild.getAttribute('aria-current') === 'true') {
      return {
        name: 'refinements.' + name,
        data: {
          title: text,
          selected: true,
          url: url
        }
      };
    }
    return {
      name: 'refinements.' + name,
      data: {
        title: text,
        selected: false,
        url: url
      }
    };
  }
}, {
  selector: "ul:nth-of-type(1) > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
  name: 'more_options',
  children: [{
    selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
    name: 'toggle_expansion',
    add_text: true
  }, {
    selector: "li:has(input[type='checkbox'])",
    add_text: true,
    name: 'from_text',
    clickable: true,
    // click_selector: "a",
    text_js: function text_js(element) {
      try {
        var text = '';
        if (!element) {
          return text;
        }
        var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
        if (element.innerText && element.innerText.trim()) {
          text += element.innerText.trim();
          if (aChild && aChild.hasAttribute('title')) {
            text += ' ';
            text += aChild.getAttribute('title');
          }
        } else {
          var _aChild5 = element.querySelector('a.a-link-normal.s-navigation-item');
          if (_aChild5 && _aChild5.hasAttribute('title')) {
            text += _aChild5.getAttribute('title');
          }
        }
        if (aChild && aChild.getAttribute('aria-current') === 'true') {
          text = 'Clear Option ' + text;
        }
        return text;
      } catch (e) {
        console.log(e);
        return '';
      }
    },
    generate_metadata: function generate_metadata(element) {
      var _element$closest3;
      var text = '';
      var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim();
        if (aChild && aChild.hasAttribute('title')) {
          text += '_';
          text += aChild.getAttribute('title');
        }
      } else {
        var _aChild6 = element.querySelector('a.a-link-normal.s-navigation-item');
        if (_aChild6 && _aChild6.hasAttribute('title')) {
          text += _aChild6.getAttribute('title');
        }
      }
      var nameEm = (_element$closest3 = element.closest('ul')) === null || _element$closest3 === void 0 ? void 0 : _element$closest3.previousElementSibling;
      var name = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText;
      var url = '';
      if (aChild && aChild.hasAttribute('href')) {
        url = aChild.getAttribute('href');
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        return {
          name: 'refinements.' + name,
          data: {
            title: text,
            selected: true,
            url: url
          }
        };
      }
      return {
        name: 'refinements.' + name,
        data: {
          title: text,
          selected: false,
          url: url
        }
      };
    },
    children: [{
      selector: "input[type='checkbox']"
    }]
  }, {
    selector: "li:not(:has(input[type='checkbox']))",
    add_text: true,
    name: 'from_text',
    clickable: true,
    text_js: function text_js(element) {
      try {
        var text = '';
        if (!element) {
          return text;
        }
        var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
        if (element.innerText && element.innerText.trim()) {
          text += element.innerText.trim();
          if (aChild && aChild.hasAttribute('title')) {
            text += ' ';
            text += aChild.getAttribute('title');
          }
        } else {
          var _aChild7 = element.querySelector('a.a-link-normal.s-navigation-item');
          if (_aChild7 && _aChild7.hasAttribute('title')) {
            text += _aChild7.getAttribute('title');
          }
        }
        if (aChild && aChild.getAttribute('aria-current') === 'true') {
          text = 'Clear Option ' + text;
        }
        return text;
      } catch (e) {
        console.log(e);
        return '';
      }
    },
    generate_metadata: function generate_metadata(element) {
      var _element$closest4;
      var text = '';
      var aChild = element.querySelector('a.a-link-normal.s-navigation-item');
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim();
        if (aChild && aChild.hasAttribute('title')) {
          text += '_';
          text += aChild.getAttribute('title');
        }
      } else {
        var _aChild8 = element.querySelector('a.a-link-normal.s-navigation-item');
        if (_aChild8 && _aChild8.hasAttribute('title')) {
          text += _aChild8.getAttribute('title');
        }
      }
      var nameEm = (_element$closest4 = element.closest('ul')) === null || _element$closest4 === void 0 ? void 0 : _element$closest4.previousElementSibling;
      var name = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText;
      var url = '';
      if (aChild && aChild.hasAttribute('href')) {
        url = aChild.getAttribute('href');
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        return {
          name: 'refinements.' + name,
          data: {
            title: text,
            selected: true,
            url: url
          }
        };
      }
      return {
        name: 'refinements.' + name,
        data: {
          title: text,
          selected: false,
          url: url
        }
      };
    }
  }]
}];
var product_facts = {
  selector: '#productFactsDesktopExpander',
  add_text: true,
  "class": 'product-facts'
};
var product_delivery = {
  selector: 'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
  add_text: true,
  "class": 'product-delivery'
};
var quantity_selector = {
  selector: '#selectQuantity',
  name: 'quantity_selector',
  children: [{
    selector: 'label',
    add_text: true
  }, {
    selector: 'span.a-dropdown-prompt',
    add_text: true
  }, {
    selector: 'select',
    // clickable: true,
    name: 'drop_down_list'
  }]
};
var delivery_frequency_selector = {
  selector: '#replenishmentFrequency_feature_div',
  name: 'delivery_frequency_selector',
  text_selector: 'div.a-section.a-spacing-micro > span',
  add_text: true,
  children: [{
    selector: '#rcxOrdFreqOnmlWrapper span.a-dropdown-prompt',
    add_text: true
  }, {
    selector: '#rcxOrdFreqOnmlWrapper select',
    // clickable: true,
    name: 'drop_down_list'
  }]
};
var set_up_now_button = {
  selector: '#rcx-subscribe-submit-button-announce',
  add_text: true,
  clickable: true,
  name: 'set_up_now',
  "class": 'product-set-up-now'
};
var add_to_cart_button = {
  selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb']",
  add_text: true,
  clickable: true,
  name: 'add_to_cart',
  "class": 'product-add-to-cart'
};
var buy_now_button = {
  selector: "input[name='submit.buy-now']",
  add_text: true,
  clickable: true,
  name: 'buy_now',
  "class": 'product-buy-now'
};
var buy_box_with_accordion = {
  selector: '#buyBoxAccordion > div.a-box.celwidget',
  name: 'from_text',
  text_selector: 'div.accordion-caption > span',
  children: [{
    selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header']",
    name: 'accordion_selector',
    add_text: true,
    clickable: true,
    text_selector: 'h5 span.a-text-bold'
  }, {
    selector: 'div.a-accordion-inner.accordion-row-content',
    name: 'purchase_form',
    children: [product_facts, product_delivery, quantity_selector, delivery_frequency_selector, set_up_now_button, add_to_cart_button, buy_now_button]
  }]
};
var buy_box_without_accordion_delivery = {
  selector: '#gsod_singleOfferDisplay_Desktop',
  children: [{
    selector: '#addToCart',
    name: 'purchase_form',
    children: [product_facts, product_delivery, quantity_selector, add_to_cart_button, buy_now_button]
  }]
};
var buy_box_without_accordion_pick_up = {
  selector: '#gsod_singleOfferDisplay_group_2_Desktop',
  children: [{
    selector: '#pickUpOfferDisplay',
    name: 'purchase_form',
    children: [product_facts, product_delivery, quantity_selector, add_to_cart_button, buy_now_button]
  }]
};
var cart = [nav, {
  selector: "div[data-name='Active Items']",
  name: 'active_item_list',
  children: [{
    selector: 'div.sc-list-item-content',
    text_selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
    name: 'from_text',
    children: [{
      selector: 'div.sc-item-check-checkbox-selector input',
      clickable: true,
      name: 'checkbox'
    }, {
      selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title',
      clickable: true,
      text_selector: 'span.a-truncate-full',
      add_text: true,
      name: 'product_detail'
    }, {
      selector: 'div.sc-item-content-group span.sc-quantity-stepper',
      children: [{
        selector: "button[aria-label='Decrease quantity by one']",
        add_text: true,
        text_js: function text_js(element) {
          if (element.hasAttribute('aria-label')) {
            return element.getAttribute('aria-label');
          }
          return '';
        },
        clickable: true,
        name: 'decrease_quantity_by_one'
      }, {
        selector: "div[role='spinbutton']",
        add_text: true,
        text_format: 'Current Quantity: {}'
      }, {
        selector: "button[aria-label='Increase quantity by one']",
        add_text: true,
        text_js: function text_js(element) {
          if (element.hasAttribute('aria-label')) {
            return element.getAttribute('aria-label');
          }
          return '';
        },
        clickable: true,
        name: 'increase_quantity_by_one'
      }]
    }, {
      selector: "div.sc-item-content-group input[data-action='delete']",
      add_text: true,
      clickable: true,
      name: 'delete'
    }, {
      selector: "div.sc-item-content-group input[data-action='save-for-later']",
      add_text: true,
      clickable: true,
      name: 'save_for_later'
    }]
  }]
}, {
  selector: '#sc-buy-box-ptc-button input',
  add_text: true,
  clickable: true,
  name: 'check_out'
}];
var recipes = [{
  match: '/',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav]
  }]
}, {
  match: '/s',
  match_method: 'url',
  selector: 'html',
  generate_metadata: function generate_metadata(em) {
    var _em$querySelector;
    var term = (_em$querySelector = em.querySelector('#navbar-main #nav-search-bar-form input#twotabsearchtextbox')) === null || _em$querySelector === void 0 ? void 0 : _em$querySelector.value;
    return {
      name: 'search_term',
      data: {
        term: term
      }
    };
  },
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#s-refinements',
      name: 'refinements',
      children: [{
        selector: 'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
        name: 'from_text',
        text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
        children: refinement_option
      }, {
        selector: '#departments',
        name: 'departments',
        add_text: true,
        text_format: 'Department',
        children: [{
          selector: 'li a',
          add_text: true,
          name: 'from_text',
          clickable: true
        }],
        generate_metadata: function generate_metadata(element) {
          var selection = element.querySelectorAll("li a[aria-current='true']");
          if (!selection) {
            return {
              name: 'refinements.department',
              data: {
                selection: null
              }
            };
          } else {
            var selection_string = '';
            var _iterator = _createForOfIteratorHelper(selection),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var s = _step.value;
                if (s) {
                  selection_string += s.innerText;
                  selection_string += ',';
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            return {
              name: 'refinements.department',
              data: {
                selection: selection_string
              }
            };
          }
        }
      }, {
        selector: '#reviewsRefinements',
        name: 'reviews_refinements',
        add_text: true,
        text_format: 'Customer Reviews',
        children: [{
          selector: 'a.s-navigation-clear-link',
          add_text: true,
          name: 'clear_selection',
          clickable: true
        }, {
          selector: "li a[aria-current='true']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          text_format: 'Clear Option {}'
        }, {
          selector: "li a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true
        }],
        generate_metadata: function generate_metadata(element) {
          var selection = element.querySelectorAll("li a[aria-current='true']");
          if (!selection) {
            return {
              name: 'refinements.reviews',
              data: {
                selection: null
              }
            };
          } else {
            var selection_string = '';
            var _iterator2 = _createForOfIteratorHelper(selection),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var s = _step2.value;
                if (s) {
                  selection_string += s.innerText;
                  selection_string += ',';
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            return {
              name: 'refinements.reviews',
              data: {
                selection: selection_string
              }
            };
          }
        }
      }, {
        selector: '#priceRefinements',
        name: 'price_refinements',
        children: [
        // 2 cases: selection / slider
        {
          selector: '#p_36-title, div.sf-refinement-heading span',
          add_text: true,
          name: 'price_heading'
        },
        // case 1: selection
        {
          selector: "div[aria-labelledby='p_36-title'] > a",
          add_text: true,
          name: 'clear_price_selection',
          clickable: true
        }, {
          selector: "ul[aria-labelledby='p_36-title'] a[aria-current='true']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          text_format: 'Clear Option {}'
        }, {
          selector: "ul[aria-labelledby='p_36-title'] a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true
        }, {
          selector: '#p_n_deal_type-title',
          add_text: true,
          name: 'deals_discounts_heading'
        }, {
          selector: "div[aria-labelledby='p_n_deal_type-title'] > a",
          add_text: true,
          name: 'clear_deals_discount_selection',
          clickable: true
        }, {
          selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='true']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          text_format: 'Clear Option {}'
        }, {
          selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true
        },
        // case 2: slider
        {
          selector: 'div.sf-range-slider-row:nth-of-type(1)',
          add_text: true
        }, {
          selector: 'div.sf-range-slider-row:nth-of-type(2) div.s-lower-bound input',
          name: 'price_min_value',
          add_text: true,
          // text_js: (element) => {
          //   const text = element.getAttribute("aria-valuetext")
          //   console.log(text)
          //   if (text) {
          //     return text;
          //   } else {
          //     return "";
          //   }
          // },
          clickable: true,
          keep_attr: ['min', 'max', 'step'],
          override_attr: {
            step_values: function step_values(em) {
              var formEm = em.closest('form');
              if (formEm) {
                var prop = formEm.getAttribute('data-slider-props');
                if (prop) {
                  var steps = JSON.parse(prop).stepLabels;
                  return steps;
                }
              }
              return '';
            },
            current_value: function current_value(em) {
              var value = Number.parseInt(em.getAttribute('value'));
              if (value !== null) {
                var formEm = em.closest('form');
                if (formEm) {
                  var prop = formEm.getAttribute('data-slider-props');
                  if (prop) {
                    var steps = JSON.parse(prop).stepLabels;
                    return steps[value];
                  }
                }
              }
              return '';
            }
          }
        }, {
          selector: 'div.sf-range-slider-row:nth-of-type(2) div.s-upper-bound input',
          name: 'price_max_value',
          add_text: true,
          // text_js: (element) => {
          //   const text = element.getAttribute("aria-valuetext")
          //   if (text) {
          //     return text;
          //   } else {
          //     return "";
          //   }
          // },
          clickable: true,
          keep_attr: ['min', 'max', 'step'],
          override_attr: {
            step_values: function step_values(em) {
              var formEm = em.closest('form');
              if (formEm) {
                var prop = formEm.getAttribute('data-slider-props');
                if (prop) {
                  var steps = JSON.parse(prop).stepLabels;
                  return steps;
                }
              }
              return '';
            },
            current_value: function current_value(em) {
              var value = Number.parseInt(em.getAttribute('value'));
              if (value !== null) {
                var formEm = em.closest('form');
                if (formEm) {
                  var prop = formEm.getAttribute('data-slider-props');
                  if (prop) {
                    var steps = JSON.parse(prop).stepLabels;
                    return steps[value];
                  }
                }
              }
              return '';
            }
          }
        }, {
          selector: 'div.sf-submit-range-button input',
          name: 'submit_price_range',
          add_text: true,
          text_format: 'Go',
          clickable: true
        }, {
          selector: 'div.sf-reset-range-link a',
          name: 'reset_price_selection',
          add_text: true,
          clickable: true
        }],
        generate_metadata: function generate_metadata(element) {
          // case 2
          var rangeEm = element.querySelector('div.sf-range-slider-row:nth-of-type(1)');
          if (rangeEm) {
            var _rangeEm$innerText;
            return {
              name: 'refinements.price',
              data: {
                selection: (_rangeEm$innerText = rangeEm.innerText) === null || _rangeEm$innerText === void 0 ? void 0 : _rangeEm$innerText.replace(/[\n]/g, '')
              }
            };
          }
          // case 1
          var selection = element.querySelectorAll("li a[aria-current='true']");
          if (!selection) {
            return {
              title: 'Price',
              selection: ''
            };
          } else {
            var selection_string = '';
            var _iterator3 = _createForOfIteratorHelper(selection),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var s = _step3.value;
                if (s) {
                  selection_string += s.innerText;
                  selection_string += ',';
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return {
              name: 'refinements.price',
              data: {
                selection: selection_string
              }
            };
          }
        }
      }]
    }, {
      selector: 'div.s-main-slot.s-result-list.s-search-results',
      name: 'search_results',
      children: [{
        insert_split_marker: true,
        insert_split_marker_every: 4,
        selector: 'div[data-component-type="s-search-result"]',
        text_selector: 'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span',
        name: 'from_text',
        "class": 'search-result',
        children: [{
          selector: "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
          add_text: true,
          "class": 'product-name',
          clickable: true,
          name: 'product_name'
        }, {
          selector: 'div.s-product-image-container',
          add_text: true,
          name: 'product_image',
          clickable: true,
          text_format: 'Product Image'
        }, {
          selector: "div[data-cy='reviews-block']",
          "class": 'product-review',
          children: [{
            selector: 'span.a-icon-alt',
            add_text: true,
            "class": 'product-rating'
          }, {
            selector: 'span.a-size-base.s-underline-text',
            add_text: true,
            text_format: '{} reviews',
            "class": 'product-rating-count'
          }]
        }, {
          selector: "div[data-cy='price-recipe']",
          "class": 'product-price',
          children: [{
            selector: 'a.a-link-normal > span.a-price > span.a-offscreen',
            add_text: true
          }]
        }, {
          selector: "div[data-cy='delivery-recipe']",
          add_text: true,
          "class": 'product-delivery'
        }, {
          selector: "div[data-cy='add-to-cart'] button",
          add_text: true,
          clickable: true,
          name: 'add_to_cart'
        }, {
          selector: "div[data-csa-c-content-id='s-search-see-details-button'] a",
          add_text: true,
          clickable: true,
          name: 'see_options'
        }],
        generate_metadata: function generate_metadata(em) {
          var asin = em.getAttribute('data-asin');
          var priceEm = em.querySelector("div[data-cy='price-recipe'] a.a-link-normal > span.a-price > span.a-offscreen");
          var price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
          var titleEm = em.querySelector('span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span');
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = em.querySelector("div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector("div[data-cy='delivery-recipe']");
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: 'search_results',
            data: {
              title: title,
              asin: asin,
              price: price,
              url: url,
              delivery: delivery
            }
          };
        }
      }]
    }, {
      selector: 'span.s-pagination-strip',
      name: 'pagination',
      children: [{
        selector: '.s-pagination-item',
        add_text: true,
        name: 'from_text',
        clickable: true
      }]
    }]
  }]
}, {
  match: '#productTitle',
  match_text: '',
  selector: 'html',
  generate_metadata: function generate_metadata(em) {
    var _em$querySelector2, _em$querySelector3;
    var title = em.querySelector('#title').innerText;
    var price = (_em$querySelector2 = em.querySelector("#apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[class='offersConsistencyEnabled'] > div:not([style='display:none;']):not([style=\"display: none;\"]) #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, #apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[data-csa-c-content-id='apex_with_rio_cx'] #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen")) === null || _em$querySelector2 === void 0 ? void 0 : _em$querySelector2.innerText.replace(/[\n]/g, '').trim();
    var asin = em.querySelector('input#ASIN').value;
    var bullet_list = (_em$querySelector3 = em.querySelector('#productFactsDesktopExpander ul, #featurebullets_feature_div ul')) === null || _em$querySelector3 === void 0 || (_em$querySelector3 = _em$querySelector3.innerText) === null || _em$querySelector3 === void 0 ? void 0 : _em$querySelector3.replace(/[\n]/g, ' ');
    return {
      name: 'product_detail',
      data: {
        title: title,
        price: price,
        asin: asin,
        bullet_list: bullet_list
      }
    };
  },
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#centerCol',
      "class": 'product-card',
      children: [{
        selector: '#title',
        add_text: true,
        keep_attr: ['id']
      }, {
        selector: '#averageCustomerReviews',
        "class": 'review',
        children: [{
          selector: 'span.a-icon-alt',
          add_text: true
        }, {
          selector: '#acrCustomerReviewText',
          add_text: true
        }]
      }, {
        selector: '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen, #apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
        add_text: true,
        text_format: 'Price: {}',
        "class": 'product-price'
      }, {
        selector: '#twister',
        "class": 'product-options',
        name: 'product_options',
        children: [{
          selector: 'div.a-section',
          text_selector: 'div.a-row:has(label.a-form-label) > label.a-form-label',
          name: 'from_text',
          direct_child: true,
          generate_metadata: function generate_metadata(em) {
            var _em$querySelector4, _em$querySelector5;
            var label = (_em$querySelector4 = em.querySelector('div.a-row:has(label.a-form-label) label.a-form-label')) === null || _em$querySelector4 === void 0 ? void 0 : _em$querySelector4.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector5 = em.querySelector('div.a-row:has(label.a-form-label) span.selection')) === null || _em$querySelector5 === void 0 ? void 0 : _em$querySelector5.innerHTML;
            if (value === undefined || value === '') {
              var _em$querySelector6;
              var options = (_em$querySelector6 = em.querySelector('select')) === null || _em$querySelector6 === void 0 ? void 0 : _em$querySelector6.querySelectorAll('option');
              // console.log(options);
              if (options) {
                var _iterator4 = _createForOfIteratorHelper(options),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var option = _step4.value;
                    // console.log(option);
                    if (option && option.getAttribute('selected') !== null) {
                      value = option.innerHTML.trim();
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
              // console.log(value);
            }
            return {
              name: 'product_options',
              data: {
                label: label,
                value: value.trim()
              }
            };
          },
          children: [{
            selector: 'div.a-row:has(label.a-form-label)',
            children: [{
              selector: 'label.a-form-label',
              add_text: true
            }, {
              selector: 'span.selection',
              add_text: true
            }]
          }, {
            selector: 'select',
            add_text: true,
            // clickable: true,
            name: 'drop_down_list'
          }, {
            selector: 'ul',
            name: 'button_list',
            children: [{
              selector: 'li button',
              add_text: true,
              clickable: true,
              name: 'from_text',
              text_js: function text_js(element) {
                var text = '';
                if (element.innerText.trim()) {
                  text += element.innerText.trim();
                  var imgChild = element.querySelector('img');
                  if (imgChild && imgChild.alt) {
                    text += ' ';
                    text += imgChild.alt;
                  }
                } else {
                  var _imgChild = element.querySelector('img');
                  if (_imgChild && _imgChild.alt) {
                    text += _imgChild.alt;
                  }
                }
                return text.trim();
              }
            }]
          }]
        }]
      },
      // handle new twisters
      {
        selector: '#twister-plus-inline-twister',
        "class": 'product-options',
        name: 'product_options',
        children: [{
          selector: 'div.inline-twister-row',
          text_selector: 'div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary',
          name: 'from_text',
          direct_child: true,
          generate_metadata: function generate_metadata(em) {
            var _em$querySelector7, _em$querySelector8;
            var label = (_em$querySelector7 = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary')) === null || _em$querySelector7 === void 0 ? void 0 : _em$querySelector7.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector8 = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.inline-twister-dim-title-value')) === null || _em$querySelector8 === void 0 ? void 0 : _em$querySelector8.innerHTML;
            if (value === undefined || value === '') {
              var _em$querySelector9;
              var options = (_em$querySelector9 = em.querySelector('select')) === null || _em$querySelector9 === void 0 ? void 0 : _em$querySelector9.querySelectorAll('option');
              // console.log(options);
              if (options) {
                var _iterator5 = _createForOfIteratorHelper(options),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var option = _step5.value;
                    // console.log(option);
                    if (option && option.getAttribute('selected') !== null) {
                      value = option.innerHTML.trim();
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
              // console.log(value);
            }
            return {
              name: 'product_options',
              data: {
                label: label,
                value: value.trim()
              }
            };
          },
          children: [{
            selector: 'div.inline-twister-dim-title-value-truncate-expanded',
            children: [{
              selector: 'span.a-size-base.a-color-secondary',
              add_text: true
            }, {
              selector: 'span.inline-twister-dim-title-value',
              add_text: true
            }]
          }, {
            selector: 'select',
            add_text: true,
            // clickable: true,
            name: 'drop_down_list'
          }, {
            selector: 'ul',
            name: 'button_list',
            children: [{
              selector: 'li span:not(.aok-hidden) input',
              add_text: true,
              clickable: true,
              name: 'from_text',
              text_js: function text_js(element) {
                var textEm = element.nextElementSibling;
                var text = '';
                if (textEm.innerText.trim()) {
                  text += textEm.innerText.trim();
                  var imgChild = textEm.querySelector('img');
                  if (imgChild && imgChild.alt) {
                    text += ' ';
                    text += imgChild.alt;
                  }
                } else {
                  var _imgChild2 = textEm.querySelector('img');
                  if (_imgChild2 && _imgChild2.alt) {
                    text += _imgChild2.alt;
                  }
                }
                return text.trim();
              }
            }]
          }]
        }, {
          selector: 'div.inline-twister-singleton-header',
          text_selector: 'span.a-size-base.a-color-secondary',
          name: 'from_text',
          children: [{
            selector: 'span.a-size-base.a-color-secondary',
            add_text: true
          }, {
            selector: 'span.inline-twister-dim-title-value-truncate',
            add_text: true
          }],
          generate_metadata: function generate_metadata(em) {
            var _em$querySelector10, _em$querySelector11;
            var label = (_em$querySelector10 = em.querySelector('span.a-size-base.a-color-secondary')) === null || _em$querySelector10 === void 0 ? void 0 : _em$querySelector10.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector11 = em.querySelector('span.inline-twister-dim-title-value-truncate')) === null || _em$querySelector11 === void 0 ? void 0 : _em$querySelector11.innerHTML;
            return {
              name: 'product_options',
              data: {
                label: label,
                value: value.trim()
              }
            };
          }
        }]
      }, {
        selector: '#productFactsDesktopExpander ul, #featurebullets_feature_div ul',
        add_text: true,
        name: 'about_this_item',
        text_format: 'About this item: {}'
      }]
    }, {
      selector: '#buybox:has(div.a-tab-container):not(:has(#partialState_buybox_desktop))',
      name: 'buybox',
      children: [{
        selector: '#tab_heading_desktop_buybox_group_1 a',
        name: 'deliver_tab',
        clickable: true,
        add_text: true
      }, {
        selector: '#tab_heading_desktop_buybox_group_2 a',
        name: 'pick_up_tab',
        clickable: true,
        add_text: true
      }, {
        selector: '#tab_desktop_buybox_group_1',
        name: 'delivery',
        add_text: true,
        text_format: 'Delivery',
        children: [buy_box_with_accordion, buy_box_without_accordion_delivery]
      }, {
        selector: '#tab_desktop_buybox_group_2',
        name: 'pick_up',
        add_text: true,
        text_format: 'Pick Up',
        children: [buy_box_without_accordion_pick_up]
      }]
    }, {
      selector: '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop))',
      name: 'buybox',
      children: [buy_box_with_accordion, buy_box_without_accordion_delivery]
    }, {
      selector: '#partialState_buybox_desktop',
      children: [{
        selector: '#partialStateBuybox div.a-section.a-text-center.a-spacing-small',
        add_text: true
      }]
    }, {
      selector: '#attach-warranty-pane #attach-warranty-display',
      name: 'warranty-box',
      children: [{
        selector: 'div.attach-warranty-box',
        text_selector: '#attach-warranty-card-display-title',
        name: 'from_text',
        children: [{
          selector: "input[type='checkbox']",
          name: 'select',
          clickable: true
        }, {
          selector: '#attach-warranty-card-display-title',
          add_text: true
        }, {
          selector: '#attach-warranty-card-price',
          add_text: true
        }]
      }, {
        selector: 'div.a-section.attach-warranty-button-row',
        children: [{
          selector: "input[aria-labelledby='attachSiAddCoverage-announce']",
          name: 'add_protection',
          clickable: true,
          add_text: true,
          text_format: 'Add Protection'
        }, {
          selector: "input[aria-labelledby='attachSiNoCoverage-announce']",
          name: 'no_protection',
          clickable: true,
          add_text: true,
          text_format: 'No Thanks'
        }]
      }]
    }]
  }]
}, {
  match: '/cart/smart-wagon',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: [nav, {
      selector: '#sw-atc-buy-box',
      children: [{
        selector: '#sw-subtotal',
        children: [{
          selector: '#sw-subtotal-item-count',
          add_text: true
        }, {
          selector: "span[aria-hidden='true']",
          add_text: true
        }]
      }, {
        selector: '#sc-buy-box-ptc-button span.a-button-inner input',
        add_text: true,
        text_selector: 'div.sc-without-multicart',
        clickable: true,
        name: 'check_out'
      }, {
        selector: '#sw-gtc a',
        add_text: true,
        clickable: true,
        name: 'go_to_cart'
      }]
    }]
  }]
}, {
  match: '/cart',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: cart
  }]
}, {
  match: '/gp/cart/view.html',
  match_method: 'url',
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: cart
  }]
}, {
  match: '/ap/signin',
  match_method: 'url',
  terminate: function terminate() {
    return !!arguments[0];
  },
  terminate_callback: function terminate_callback() {
    return arguments[0];
  },
  selector: 'html'
}, {
  match: '/gp/buy/spc/handlers/display.html',
  match_method: 'url',
  terminate: function terminate() {
    return !!arguments[0];
  },
  terminate_callback: function terminate_callback() {
    return arguments[0];
  },
  selector: 'html'
}];

/***/ }),

/***/ "./src/utils/util.ts":
/*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/jszip/dist/jszip.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jszip/dist/jszip.min.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/

!function(e){if(true)module.exports=e();else {}}(function(){return function s(a,o,h){function u(r,e){if(!o[r]){if(!a[r]){var t=undefined;if(!e&&t)return require(r,!0);if(l)return l(r,!0);var n=new Error("Cannot find module '"+r+"'");throw n.code="MODULE_NOT_FOUND",n}var i=o[r]={exports:{}};a[r][0].call(i.exports,function(e){var t=a[r][1][e];return u(t||e)},i,i.exports,s,a,o,h)}return o[r].exports}for(var l=undefined,e=0;e<h.length;e++)u(h[e]);return u}({1:[function(e,t,r){"use strict";var d=e("./utils"),c=e("./support"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(e){for(var t,r,n,i,s,a,o,h=[],u=0,l=e.length,f=l,c="string"!==d.getTypeOf(e);u<e.length;)f=l-u,n=c?(t=e[u++],r=u<l?e[u++]:0,u<l?e[u++]:0):(t=e.charCodeAt(u++),r=u<l?e.charCodeAt(u++):0,u<l?e.charCodeAt(u++):0),i=t>>2,s=(3&t)<<4|r>>4,a=1<f?(15&r)<<2|n>>6:64,o=2<f?63&n:64,h.push(p.charAt(i)+p.charAt(s)+p.charAt(a)+p.charAt(o));return h.join("")},r.decode=function(e){var t,r,n,i,s,a,o=0,h=0,u="data:";if(e.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var l,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===p.charAt(64)&&f--,e.charAt(e.length-2)===p.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(l=c.uint8array?new Uint8Array(0|f):new Array(0|f);o<e.length;)t=p.indexOf(e.charAt(o++))<<2|(i=p.indexOf(e.charAt(o++)))>>4,r=(15&i)<<4|(s=p.indexOf(e.charAt(o++)))>>2,n=(3&s)<<6|(a=p.indexOf(e.charAt(o++))),l[h++]=t,64!==s&&(l[h++]=r),64!==a&&(l[h++]=n);return l}},{"./support":30,"./utils":32}],2:[function(e,t,r){"use strict";var n=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),a=e("./stream/DataLengthProbe");function o(e,t,r,n,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=n,this.compressedContent=i}o.prototype={getContentWorker:function(){var e=new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(e,t,r){return e.pipe(new s).pipe(new a("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression",t)},t.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,r){"use strict";var n=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,r){"use strict";var n=e("./utils");var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==n.getTypeOf(e)?function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,r){"use strict";r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,t,r){"use strict";var n=null;n="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:n}},{lie:37}],7:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),a=e("./stream/GenericWorker"),o=n?"uint8array":"array";function h(e,t){a.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}r.magic="\b\0",s.inherits(h,a),h.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(o,e.data),!1)},h.prototype.flush=function(){a.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var t=this;this._pako.onData=function(e){t.push({data:e,meta:t.meta})}},r.compressWorker=function(e){return new h("Deflate",e)},r.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,r){"use strict";function A(e,t){var r,n="";for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}function n(e,t,r,n,i,s){var a,o,h=e.file,u=e.compression,l=s!==O.utf8encode,f=I.transformTo("string",s(h.name)),c=I.transformTo("string",O.utf8encode(h.name)),d=h.comment,p=I.transformTo("string",s(d)),m=I.transformTo("string",O.utf8encode(d)),_=c.length!==h.name.length,g=m.length!==d.length,b="",v="",y="",w=h.dir,k=h.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!r||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var S=0;t&&(S|=8),l||!_&&!g||(S|=2048);var z=0,C=0;w&&(z|=16),"UNIX"===i?(C=798,z|=function(e,t){var r=e;return e||(r=t?16893:33204),(65535&r)<<16}(h.unixPermissions,w)):(C=20,z|=function(e){return 63&(e||0)}(h.dosPermissions)),a=k.getUTCHours(),a<<=6,a|=k.getUTCMinutes(),a<<=5,a|=k.getUTCSeconds()/2,o=k.getUTCFullYear()-1980,o<<=4,o|=k.getUTCMonth()+1,o<<=5,o|=k.getUTCDate(),_&&(v=A(1,1)+A(B(f),4)+c,b+="up"+A(v.length,2)+v),g&&(y=A(1,1)+A(B(p),4)+m,b+="uc"+A(y.length,2)+y);var E="";return E+="\n\0",E+=A(S,2),E+=u.magic,E+=A(a,2),E+=A(o,2),E+=A(x.crc32,4),E+=A(x.compressedSize,4),E+=A(x.uncompressedSize,4),E+=A(f.length,2),E+=A(b.length,2),{fileRecord:R.LOCAL_FILE_HEADER+E+f+b,dirRecord:R.CENTRAL_FILE_HEADER+A(C,2)+E+A(p.length,2)+"\0\0\0\0"+A(z,4)+A(n,4)+f+b+p}}var I=e("../utils"),i=e("../stream/GenericWorker"),O=e("../utf8"),B=e("../crc32"),R=e("../signature");function s(e,t,r,n){i.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=n,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}I.inherits(s,i),s.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,n=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,i.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-n-1))/r:100}}))},s.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=n(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0},s.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=n(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:function(e){return R.DATA_DESCRIPTOR+A(e.crc32,4)+A(e.compressedSize,4)+A(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},s.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,n=function(e,t,r,n,i){var s=I.transformTo("string",i(n));return R.CENTRAL_DIRECTORY_END+"\0\0\0\0"+A(e,2)+A(e,2)+A(t,4)+A(r,4)+A(s.length,2)+s}(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:n,meta:{percent:100}})},s.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},s.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(e){t.error(e)}),this},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},s.prototype.error=function(e){var t=this._sources;if(!i.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch(e){}return!0},s.prototype.lock=function(){i.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=s},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,r){"use strict";var u=e("../compressions"),n=e("./ZipFileWorker");r.generateWorker=function(e,a,t){var o=new n(a.streamFiles,t,a.platform,a.encodeFileName),h=0;try{e.forEach(function(e,t){h++;var r=function(e,t){var r=e||t,n=u[r];if(!n)throw new Error(r+" is not a valid compression method !");return n}(t.options.compression,a.compression),n=t.options.compressionOptions||a.compressionOptions||{},i=t.dir,s=t.date;t._compressWorker(r,n).withStreamInfo("file",{name:e,dir:i,date:s,comment:t.comment||"",unixPermissions:t.unixPermissions,dosPermissions:t.dosPermissions}).pipe(o)}),o.entriesCount=h}catch(e){o.error(e)}return o}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new n;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(e,t){return(new n).loadAsync(e,t)},n.external=e("./external"),t.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,r){"use strict";var u=e("./utils"),i=e("./external"),n=e("./utf8"),s=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function f(n){return new i.Promise(function(e,t){var r=n.decompressed.getContentWorker().pipe(new a);r.on("error",function(e){t(e)}).on("end",function(){r.streamInfo.crc32!==n.decompressed.crc32?t(new Error("Corrupted zip : CRC32 mismatch")):e()}).resume()})}t.exports=function(e,o){var h=this;return o=u.extend(o||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",e,!0,o.optimizedBinaryString,o.base64).then(function(e){var t=new s(o);return t.load(e),t}).then(function(e){var t=[i.Promise.resolve(e)],r=e.files;if(o.checkCRC32)for(var n=0;n<r.length;n++)t.push(f(r[n]));return i.Promise.all(t)}).then(function(e){for(var t=e.shift(),r=t.files,n=0;n<r.length;n++){var i=r[n],s=i.fileNameStr,a=u.resolve(i.fileNameStr);h.file(a,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileCommentStr.length?i.fileCommentStr:null,unixPermissions:i.unixPermissions,dosPermissions:i.dosPermissions,createFolders:o.createFolders}),i.dir||(h.file(a).unsafeOriginalName=s)}return t.zipComment.length&&(h.comment=t.zipComment),h})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}n.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",function(e){t.push({data:e,meta:{percent:0}})}).on("error",function(e){t.isPaused?this.generatedError=e:t.error(e)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,r){"use strict";var i=e("readable-stream").Readable;function n(e,t,r){i.call(this,t),this._helper=e;var n=this;e.on("data",function(e,t){n.push(e)||n._helper.pause(),r&&r(t)}).on("error",function(e){n.emit("error",e)}).on("end",function(){n.push(null)})}e("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(e,t,r){"use strict";t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,r){"use strict";function s(e,t,r){var n,i=u.getTypeOf(t),s=u.extend(r||{},f);s.date=s.date||new Date,null!==s.compression&&(s.compression=s.compression.toUpperCase()),"string"==typeof s.unixPermissions&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=g(e)),s.createFolders&&(n=_(e))&&b.call(this,n,!0);var a="string"===i&&!1===s.binary&&!1===s.base64;r&&void 0!==r.binary||(s.binary=!a),(t instanceof c&&0===t.uncompressedSize||s.dir||!t||0===t.length)&&(s.base64=!1,s.binary=!0,t="",s.compression="STORE",i="string");var o=null;o=t instanceof c||t instanceof l?t:p.isNode&&p.isStream(t)?new m(e,t):u.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var h=new d(e,o,s);this.files[e]=h}var i=e("./utf8"),u=e("./utils"),l=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),f=e("./defaults"),c=e("./compressedObject"),d=e("./zipObject"),o=e("./generate"),p=e("./nodejsUtils"),m=e("./nodejs/NodejsStreamInputAdapter"),_=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},g=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},b=function(e,t){return t=void 0!==t?t:f.createFolders,e=g(e),this.files[e]||s.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function h(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var n={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,n;for(t in this.files)n=this.files[t],(r=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(r,n)},filter:function(r){var n=[];return this.forEach(function(e,t){r(e,t)&&n.push(t)}),n},file:function(e,t,r){if(1!==arguments.length)return e=this.root+e,s.call(this,e,t,r),this;if(h(e)){var n=e;return this.filter(function(e,t){return!t.dir&&n.test(e)})}var i=this.files[this.root+e];return i&&!i.dir?i:null},folder:function(r){if(!r)return this;if(h(r))return this.filter(function(e,t){return t.dir&&r.test(e)});var e=this.root+r,t=b.call(this,e),n=this.clone();return n.root=t.name,n},remove:function(r){r=this.root+r;var e=this.files[r];if(e||("/"!==r.slice(-1)&&(r+="/"),e=this.files[r]),e&&!e.dir)delete this.files[r];else for(var t=this.filter(function(e,t){return t.name.slice(0,r.length)===r}),n=0;n<t.length;n++)delete this.files[t[n].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if((r=u.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),"binarystring"===r.type&&(r.type="string"),!r.type)throw new Error("No output type specified.");u.checkSupport(r.type),"darwin"!==r.platform&&"freebsd"!==r.platform&&"linux"!==r.platform&&"sunos"!==r.platform||(r.platform="UNIX"),"win32"===r.platform&&(r.platform="DOS");var n=r.comment||this.comment||"";t=o.generateWorker(this,r,n)}catch(e){(t=new l("error")).error(e)}return new a(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=n},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,r){"use strict";t.exports=e("stream")},{stream:void 0}],17:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&r===s[1]&&n===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,r){"use strict";var n=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,r=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t);return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,r){"use strict";var n=e("./Uint8ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,r){"use strict";var n=e("./DataReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,r){"use strict";var n=e("./ArrayReader");function i(e){n.call(this,e)}e("../utils").inherits(i,n),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,r){"use strict";var n=e("../utils"),i=e("../support"),s=e("./ArrayReader"),a=e("./StringReader"),o=e("./NodeBufferReader"),h=e("./Uint8ArrayReader");t.exports=function(e){var t=n.getTypeOf(e);return n.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new o(e):i.uint8array?new h(n.transformTo("uint8array",e)):new s(n.transformTo("array",e)):new a(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,r){"use strict";r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../utils");function s(e){n.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,n),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,r){"use strict";var n=e("./GenericWorker"),i=e("../crc32");function s(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,n),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}n.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,r){"use strict";var n=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=n.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}n.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,r){"use strict";function n(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(e){t.processChunk(e)}),e.on("end",function(){t.end()}),e.on("error",function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=n},{}],29:[function(e,t,r){"use strict";var h=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),u=e("../base64"),n=e("../support"),a=e("../external"),o=null;if(n.nodestream)try{o=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function l(e,o){return new a.Promise(function(t,r){var n=[],i=e._internalType,s=e._outputType,a=e._mimeType;e.on("data",function(e,t){n.push(e),o&&o(t)}).on("error",function(e){n=[],r(e)}).on("end",function(){try{var e=function(e,t,r){switch(e){case"blob":return h.newBlob(h.transformTo("arraybuffer",t),r);case"base64":return u.encode(t);default:return h.transformTo(e,t)}}(s,function(e,t){var r,n=0,i=null,s=0;for(r=0;r<t.length;r++)s+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),r=0;r<t.length;r++)i.set(t[r],n),n+=t[r].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(i,n),a);t(e)}catch(e){r(e)}n=[]}).resume()})}function f(e,t,r){var n=t;switch(t){case"blob":case"arraybuffer":n="uint8array";break;case"base64":n="string"}try{this._internalType=n,this._outputType=t,this._mimeType=r,h.checkSupport(n),this._worker=e.pipe(new i(n)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}f.prototype={accumulate:function(e){return l(this,e)},on:function(e,t){var r=this;return"data"===e?this._worker.on(e,function(e){t.call(r,e.data,e.meta)}):this._worker.on(e,function(){h.delay(t,arguments,r)}),this},resume:function(){return h.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(h.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new o(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,r){"use strict";if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer="undefined"!=typeof Buffer,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1;else{var n=new ArrayBuffer(0);try{r.blob=0===new Blob([n],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(n),r.blob=0===i.getBlob("application/zip").size}catch(e){r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch(e){r.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,s){"use strict";for(var o=e("./utils"),h=e("./support"),r=e("./nodejsUtils"),n=e("./stream/GenericWorker"),u=new Array(256),i=0;i<256;i++)u[i]=252<=i?6:248<=i?5:240<=i?4:224<=i?3:192<=i?2:1;u[254]=u[254]=1;function a(){n.call(this,"utf-8 decode"),this.leftOver=null}function l(){n.call(this,"utf-8 encode")}s.utf8encode=function(e){return h.nodebuffer?r.newBufferFrom(e,"utf-8"):function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=h.uint8array?new Uint8Array(o):new Array(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t}(e)},s.utf8decode=function(e){return h.nodebuffer?o.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,r,n,i,s=e.length,a=new Array(2*s);for(t=r=0;t<s;)if((n=e[t++])<128)a[r++]=n;else if(4<(i=u[n]))a[r++]=65533,t+=i-1;else{for(n&=2===i?31:3===i?15:7;1<i&&t<s;)n=n<<6|63&e[t++],i--;1<i?a[r++]=65533:n<65536?a[r++]=n:(n-=65536,a[r++]=55296|n>>10&1023,a[r++]=56320|1023&n)}return a.length!==r&&(a.subarray?a=a.subarray(0,r):a.length=r),o.applyFromCharCode(a)}(e=o.transformTo(h.uint8array?"uint8array":"array",e))},o.inherits(a,n),a.prototype.processChunk=function(e){var t=o.transformTo(h.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(h.uint8array){var r=t;(t=new Uint8Array(r.length+this.leftOver.length)).set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var n=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}(t),i=t;n!==t.length&&(h.uint8array?(i=t.subarray(0,n),this.leftOver=t.subarray(n,t.length)):(i=t.slice(0,n),this.leftOver=t.slice(n,t.length))),this.push({data:s.utf8decode(i),meta:e.meta})},a.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=a,o.inherits(l,n),l.prototype.processChunk=function(e){this.push({data:s.utf8encode(e.data),meta:e.meta})},s.Utf8EncodeWorker=l},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,a){"use strict";var o=e("./support"),h=e("./base64"),r=e("./nodejsUtils"),u=e("./external");function n(e){return e}function l(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r);return t}e("setimmediate"),a.newBlob=function(t,r){a.checkSupport("blob");try{return new Blob([t],{type:r})}catch(e){try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return n.append(t),n.getBlob(r)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var i={stringifyByChunk:function(e,t,r){var n=[],i=0,s=e.length;if(s<=r)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+r,s)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+r,s)))),i+=r;return n.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:function(){try{return o.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return o.nodebuffer&&1===String.fromCharCode.apply(null,r.allocBuffer(1)).length}catch(e){return!1}}()}};function s(e){var t=65536,r=a.getTypeOf(e),n=!0;if("uint8array"===r?n=i.applyCanBeUsed.uint8array:"nodebuffer"===r&&(n=i.applyCanBeUsed.nodebuffer),n)for(;1<t;)try{return i.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return i.stringifyByChar(e)}function f(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}a.applyFromCharCode=s;var c={};c.string={string:n,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return c.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,r.allocBuffer(e.length))}},c.array={string:s,array:n,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(e)}},c.arraybuffer={string:function(e){return s(new Uint8Array(e))},array:function(e){return f(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:n,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return r.newBufferFrom(new Uint8Array(e))}},c.uint8array={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:n,nodebuffer:function(e){return r.newBufferFrom(e)}},c.nodebuffer={string:s,array:function(e){return f(e,new Array(e.length))},arraybuffer:function(e){return c.nodebuffer.uint8array(e).buffer},uint8array:function(e){return f(e,new Uint8Array(e.length))},nodebuffer:n},a.transformTo=function(e,t){if(t=t||"",!e)return t;a.checkSupport(e);var r=a.getTypeOf(t);return c[r][e](t)},a.resolve=function(e){for(var t=e.split("/"),r=[],n=0;n<t.length;n++){var i=t[n];"."===i||""===i&&0!==n&&n!==t.length-1||(".."===i?r.pop():r.push(i))}return r.join("/")},a.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":o.nodebuffer&&r.isBuffer(e)?"nodebuffer":o.uint8array&&e instanceof Uint8Array?"uint8array":o.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},a.checkSupport=function(e){if(!o[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},a.MAX_VALUE_16BITS=65535,a.MAX_VALUE_32BITS=-1,a.pretty=function(e){var t,r,n="";for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase();return n},a.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})},a.inherits=function(e,t){function r(){}r.prototype=t.prototype,e.prototype=new r},a.extend=function(){var e,t,r={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===r[t]&&(r[t]=arguments[e][t]);return r},a.prepareContent=function(r,e,n,i,s){return u.Promise.resolve(e).then(function(n){return o.blob&&(n instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(n)))&&"undefined"!=typeof FileReader?new u.Promise(function(t,r){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.onerror=function(e){r(e.target.error)},e.readAsArrayBuffer(n)}):n}).then(function(e){var t=a.getTypeOf(e);return t?("arraybuffer"===t?e=a.transformTo("uint8array",e):"string"===t&&(s?e=h.decode(e):n&&!0!==i&&(e=function(e){return l(e,o.uint8array?new Uint8Array(e.length):new Array(e.length))}(e))),e):u.Promise.reject(new Error("Can't read the data of '"+r+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),a=e("./zipEntry"),o=e("./support");function h(e){this.files=[],this.loadOptions=e}h.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var n=this.reader.readString(4)===t;return this.reader.setIndex(r),n},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=o.uint8array?"uint8array":"array",r=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new a({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw!this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var r=this.centralDirOffset+this.centralDirSize;this.zip64&&(r+=20,r+=12+this.zip64EndOfCentralSize);var n=t-r;if(0<n)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=n);else if(n<0)throw new Error("Corrupted zip: missing "+Math.abs(n)+" bytes.")},prepareReader:function(e){this.reader=n(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,r){"use strict";var n=e("./reader/readerFor"),s=e("./utils"),i=e("./compressedObject"),a=e("./crc32"),o=e("./utf8"),h=e("./compressions"),u=e("./support");function l(e,t){this.options=e,this.loadOptions=t}l.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in h)if(Object.prototype.hasOwnProperty.call(h,t)&&h[t].magic===e)return h[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new i(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=n(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,r,n,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),r=e.readInt(2),n=e.readData(r),this.extraFields[t]={id:t,length:r,value:n};e.setIndex(i)},handleUTF8:function(){var e=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var r=s.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var n=this.findExtraFieldUnicodeComment();if(null!==n)this.fileCommentStr=n;else{var i=s.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(i)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=n(e.value);return 1!==t.readInt(1)?null:a(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readData(e.length-5))}return null}},t.exports=l},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,r){"use strict";function n(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}var s=e("./stream/StreamHelper"),i=e("./stream/DataWorker"),a=e("./utf8"),o=e("./compressedObject"),h=e("./stream/GenericWorker");n.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");var n="string"===(r=e.toLowerCase())||"text"===r;"binarystring"!==r&&"text"!==r||(r="string"),t=this._decompressWorker();var i=!this._dataBinary;i&&!n&&(t=t.pipe(new a.Utf8EncodeWorker)),!i&&n&&(t=t.pipe(new a.Utf8DecodeWorker))}catch(e){(t=new h("error")).error(e)}return new s(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof o&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof h?this._data:new i(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],l=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<u.length;f++)n.prototype[u[f]]=l;t.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,l,t){(function(t){"use strict";var r,n,e=t.MutationObserver||t.WebKitMutationObserver;if(e){var i=0,s=new e(u),a=t.document.createTextNode("");s.observe(a,{characterData:!0}),r=function(){a.data=i=++i%2}}else if(t.setImmediate||void 0===t.MessageChannel)r="document"in t&&"onreadystatechange"in t.document.createElement("script")?function(){var e=t.document.createElement("script");e.onreadystatechange=function(){u(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},t.document.documentElement.appendChild(e)}:function(){setTimeout(u,0)};else{var o=new t.MessageChannel;o.port1.onmessage=u,r=function(){o.port2.postMessage(0)}}var h=[];function u(){var e,t;n=!0;for(var r=h.length;r;){for(t=h,h=[],e=-1;++e<r;)t[e]();r=h.length}n=!1}l.exports=function(e){1!==h.push(e)||n||r()}}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,r){"use strict";var i=e("immediate");function u(){}var l={},s=["REJECTED"],a=["FULFILLED"],n=["PENDING"];function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=n,this.queue=[],this.outcome=void 0,e!==u&&d(this,e)}function h(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function f(t,r,n){i(function(){var e;try{e=r(n)}catch(e){return l.reject(t,e)}e===t?l.reject(t,new TypeError("Cannot resolve promise with itself")):l.resolve(t,e)})}function c(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function d(t,e){var r=!1;function n(e){r||(r=!0,l.reject(t,e))}function i(e){r||(r=!0,l.resolve(t,e))}var s=p(function(){e(i,n)});"error"===s.status&&n(s.value)}function p(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}(t.exports=o).prototype.finally=function(t){if("function"!=typeof t)return this;var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})})},o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===s)return this;var r=new this.constructor(u);this.state!==n?f(r,this.state===a?e:t,this.outcome):this.queue.push(new h(r,e,t));return r},h.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},h.prototype.otherCallFulfilled=function(e){f(this.promise,this.onFulfilled,e)},h.prototype.callRejected=function(e){l.reject(this.promise,e)},h.prototype.otherCallRejected=function(e){f(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=p(c,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)d(e,n);else{e.state=a,e.outcome=t;for(var i=-1,s=e.queue.length;++i<s;)e.queue[i].callFulfilled(t)}return e},l.reject=function(e,t){e.state=s,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},o.resolve=function(e){if(e instanceof this)return e;return l.resolve(new this(u),e)},o.reject=function(e){var t=new this(u);return l.reject(t,e)},o.all=function(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,i=!1;if(!n)return this.resolve([]);var s=new Array(n),a=0,t=-1,o=new this(u);for(;++t<n;)h(e[t],t);return o;function h(e,t){r.resolve(e).then(function(e){s[t]=e,++a!==n||i||(i=!0,l.resolve(o,s))},function(e){i||(i=!0,l.reject(o,e))})}},o.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var r=e.length,n=!1;if(!r)return this.resolve([]);var i=-1,s=new this(u);for(;++i<r;)a=e[i],t.resolve(a).then(function(e){n||(n=!0,l.resolve(s,e))},function(e){n||(n=!0,l.reject(s,e))});var a;return s}},{immediate:36}],38:[function(e,t,r){"use strict";var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,r){"use strict";var a=e("./zlib/deflate"),o=e("./utils/common"),h=e("./utils/strings"),i=e("./zlib/messages"),s=e("./zlib/zstream"),u=Object.prototype.toString,l=0,f=-1,c=0,d=8;function p(e){if(!(this instanceof p))return new p(e);this.options=o.assign({level:f,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var r=a.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==l)throw new Error(i[r]);if(t.header&&a.deflateSetHeader(this.strm,t.header),t.dictionary){var n;if(n="string"==typeof t.dictionary?h.string2buf(t.dictionary):"[object ArrayBuffer]"===u.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(r=a.deflateSetDictionary(this.strm,n))!==l)throw new Error(i[r]);this._dict_set=!0}}function n(e,t){var r=new p(t);if(r.push(e,!0),r.err)throw r.msg||i[r.err];return r.result}p.prototype.push=function(e,t){var r,n,i=this.strm,s=this.options.chunkSize;if(this.ended)return!1;n=t===~~t?t:!0===t?4:0,"string"==typeof e?i.input=h.string2buf(e):"[object ArrayBuffer]"===u.call(e)?i.input=new Uint8Array(e):i.input=e,i.next_in=0,i.avail_in=i.input.length;do{if(0===i.avail_out&&(i.output=new o.Buf8(s),i.next_out=0,i.avail_out=s),1!==(r=a.deflate(i,n))&&r!==l)return this.onEnd(r),!(this.ended=!0);0!==i.avail_out&&(0!==i.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(h.buf2binstring(o.shrinkBuf(i.output,i.next_out))):this.onData(o.shrinkBuf(i.output,i.next_out)))}while((0<i.avail_in||0===i.avail_out)&&1!==r);return 4===n?(r=a.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===l):2!==n||(this.onEnd(l),!(i.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=p,r.deflate=n,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,n(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,n(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,r){"use strict";var c=e("./zlib/inflate"),d=e("./utils/common"),p=e("./utils/strings"),m=e("./zlib/constants"),n=e("./zlib/messages"),i=e("./zlib/zstream"),s=e("./zlib/gzheader"),_=Object.prototype.toString;function a(e){if(!(this instanceof a))return new a(e);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var r=c.inflateInit2(this.strm,t.windowBits);if(r!==m.Z_OK)throw new Error(n[r]);this.header=new s,c.inflateGetHeader(this.strm,this.header)}function o(e,t){var r=new a(t);if(r.push(e,!0),r.err)throw r.msg||n[r.err];return r.result}a.prototype.push=function(e,t){var r,n,i,s,a,o,h=this.strm,u=this.options.chunkSize,l=this.options.dictionary,f=!1;if(this.ended)return!1;n=t===~~t?t:!0===t?m.Z_FINISH:m.Z_NO_FLUSH,"string"==typeof e?h.input=p.binstring2buf(e):"[object ArrayBuffer]"===_.call(e)?h.input=new Uint8Array(e):h.input=e,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new d.Buf8(u),h.next_out=0,h.avail_out=u),(r=c.inflate(h,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&l&&(o="string"==typeof l?p.string2buf(l):"[object ArrayBuffer]"===_.call(l)?new Uint8Array(l):l,r=c.inflateSetDictionary(this.strm,o)),r===m.Z_BUF_ERROR&&!0===f&&(r=m.Z_OK,f=!1),r!==m.Z_STREAM_END&&r!==m.Z_OK)return this.onEnd(r),!(this.ended=!0);h.next_out&&(0!==h.avail_out&&r!==m.Z_STREAM_END&&(0!==h.avail_in||n!==m.Z_FINISH&&n!==m.Z_SYNC_FLUSH)||("string"===this.options.to?(i=p.utf8border(h.output,h.next_out),s=h.next_out-i,a=p.buf2string(h.output,i),h.next_out=s,h.avail_out=u-s,s&&d.arraySet(h.output,h.output,i,s,0),this.onData(a)):this.onData(d.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(f=!0)}while((0<h.avail_in||0===h.avail_out)&&r!==m.Z_STREAM_END);return r===m.Z_STREAM_END&&(n=m.Z_FINISH),n===m.Z_FINISH?(r=c.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===m.Z_OK):n!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(h.avail_out=0))},a.prototype.onData=function(e){this.chunks.push(e)},a.prototype.onEnd=function(e){e===m.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=a,r.inflate=o,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,o(e,t)},r.ungzip=o},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,r){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,r,n,i){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),i);else for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){var t,r,n,i,s,a;for(t=n=0,r=e.length;t<r;t++)n+=e[t].length;for(a=new Uint8Array(n),t=i=0,r=e.length;t<r;t++)s=e[t],a.set(s,i),i+=s.length;return a}},s={arraySet:function(e,t,r,n,i){for(var s=0;s<n;s++)e[i+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}};r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,i)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],42:[function(e,t,r){"use strict";var h=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var u=new h.Buf8(256),n=0;n<256;n++)u[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,h.shrinkBuf(e,t));for(var r="",n=0;n<t;n++)r+=String.fromCharCode(e[n]);return r}u[254]=u[254]=1,r.string2buf=function(e){var t,r,n,i,s,a=e.length,o=0;for(i=0;i<a;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),o+=r<128?1:r<2048?2:r<65536?3:4;for(t=new h.Buf8(o),i=s=0;s<o;i++)55296==(64512&(r=e.charCodeAt(i)))&&i+1<a&&56320==(64512&(n=e.charCodeAt(i+1)))&&(r=65536+(r-55296<<10)+(n-56320),i++),r<128?t[s++]=r:(r<2048?t[s++]=192|r>>>6:(r<65536?t[s++]=224|r>>>12:(t[s++]=240|r>>>18,t[s++]=128|r>>>12&63),t[s++]=128|r>>>6&63),t[s++]=128|63&r);return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new h.Buf8(e.length),r=0,n=t.length;r<n;r++)t[r]=e.charCodeAt(r);return t},r.buf2string=function(e,t){var r,n,i,s,a=t||e.length,o=new Array(2*a);for(r=n=0;r<a;)if((i=e[r++])<128)o[n++]=i;else if(4<(s=u[i]))o[n++]=65533,r+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&r<a;)i=i<<6|63&e[r++],s--;1<s?o[n++]=65533:i<65536?o[n++]=i:(i-=65536,o[n++]=55296|i>>10&1023,o[n++]=56320|1023&i)}return l(o,n)},r.utf8border=function(e,t){var r;for((t=t||e.length)>e.length&&(t=e.length),r=t-1;0<=r&&128==(192&e[r]);)r--;return r<0?t:0===r?t:r+u[e[r]]>t?r:t}},{"./common":41}],43:[function(e,t,r){"use strict";t.exports=function(e,t,r,n){for(var i=65535&e|0,s=e>>>16&65535|0,a=0;0!==r;){for(r-=a=2e3<r?2e3:r;s=s+(i=i+t[n++]|0)|0,--a;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,r){"use strict";t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,r){"use strict";var o=function(){for(var e,t=[],r=0;r<256;r++){e=r;for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1;t[r]=e}return t}();t.exports=function(e,t,r,n){var i=o,s=n+r;e^=-1;for(var a=n;a<s;a++)e=e>>>8^i[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,r){"use strict";var h,c=e("../utils/common"),u=e("./trees"),d=e("./adler32"),p=e("./crc32"),n=e("./messages"),l=0,f=4,m=0,_=-2,g=-1,b=4,i=2,v=8,y=9,s=286,a=30,o=19,w=2*s+1,k=15,x=3,S=258,z=S+x+1,C=42,E=113,A=1,I=2,O=3,B=4;function R(e,t){return e.msg=n[t],t}function T(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),0!==r&&(c.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function N(e,t){u._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function U(e,t){e.pending_buf[e.pending++]=t}function P(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var r,n,i=e.max_chain_length,s=e.strstart,a=e.prev_length,o=e.nice_match,h=e.strstart>e.w_size-z?e.strstart-(e.w_size-z):0,u=e.window,l=e.w_mask,f=e.prev,c=e.strstart+S,d=u[s+a-1],p=u[s+a];e.prev_length>=e.good_match&&(i>>=2),o>e.lookahead&&(o=e.lookahead);do{if(u[(r=t)+a]===p&&u[r+a-1]===d&&u[r]===u[s]&&u[++r]===u[s+1]){s+=2,r++;do{}while(u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&u[++s]===u[++r]&&s<c);if(n=S-(c-s),s=c-S,a<n){if(e.match_start=t,o<=(a=n))break;d=u[s+a-1],p=u[s+a]}}}while((t=f[t&l])>h&&0!=--i);return a<=e.lookahead?a:e.lookahead}function j(e){var t,r,n,i,s,a,o,h,u,l,f=e.w_size;do{if(i=e.window_size-e.lookahead-e.strstart,e.strstart>=f+(f-z)){for(c.arraySet(e.window,e.window,f,f,0),e.match_start-=f,e.strstart-=f,e.block_start-=f,t=r=e.hash_size;n=e.head[--t],e.head[t]=f<=n?n-f:0,--r;);for(t=r=f;n=e.prev[--t],e.prev[t]=f<=n?n-f:0,--r;);i+=f}if(0===e.strm.avail_in)break;if(a=e.strm,o=e.window,h=e.strstart+e.lookahead,u=i,l=void 0,l=a.avail_in,u<l&&(l=u),r=0===l?0:(a.avail_in-=l,c.arraySet(o,a.input,a.next_in,l,h),1===a.state.wrap?a.adler=d(a.adler,o,l,h):2===a.state.wrap&&(a.adler=p(a.adler,o,l,h)),a.next_in+=l,a.total_in+=l,l),e.lookahead+=r,e.lookahead+e.insert>=x)for(s=e.strstart-e.insert,e.ins_h=e.window[s],e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[s+x-1])&e.hash_mask,e.prev[s&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=s,s++,e.insert--,!(e.lookahead+e.insert<x)););}while(e.lookahead<z&&0!==e.strm.avail_in)}function Z(e,t){for(var r,n;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r)),e.match_length>=x)if(n=u._tr_tally(e,e.strstart-e.match_start,e.match_length-x),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=x){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else n=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(n&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function W(e,t){for(var r,n,i;;){if(e.lookahead<z){if(j(e),e.lookahead<z&&t===l)return A;if(0===e.lookahead)break}if(r=0,e.lookahead>=x&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=x-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-z&&(e.match_length=L(e,r),e.match_length<=5&&(1===e.strategy||e.match_length===x&&4096<e.strstart-e.match_start)&&(e.match_length=x-1)),e.prev_length>=x&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-x,n=u._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-x),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+x-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=x-1,e.strstart++,n&&(N(e,!1),0===e.strm.avail_out))return A}else if(e.match_available){if((n=u._tr_tally(e,0,e.window[e.strstart-1]))&&N(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return A}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=u._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<x-1?e.strstart:x-1,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}function M(e,t,r,n,i){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=i}function H(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*w),this.dyn_dtree=new c.Buf16(2*(2*a+1)),this.bl_tree=new c.Buf16(2*(2*o+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(k+1),this.heap=new c.Buf16(2*s+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*s+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=i,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?C:E,e.adler=2===t.wrap?0:1,t.last_flush=l,u._tr_init(t),m):R(e,_)}function K(e){var t=G(e);return t===m&&function(e){e.window_size=2*e.w_size,D(e.head),e.max_lazy_match=h[e.level].max_lazy,e.good_match=h[e.level].good_length,e.nice_match=h[e.level].nice_length,e.max_chain_length=h[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=x-1,e.match_available=0,e.ins_h=0}(e.state),t}function Y(e,t,r,n,i,s){if(!e)return _;var a=1;if(t===g&&(t=6),n<0?(a=0,n=-n):15<n&&(a=2,n-=16),i<1||y<i||r!==v||n<8||15<n||t<0||9<t||s<0||b<s)return R(e,_);8===n&&(n=9);var o=new H;return(e.state=o).strm=e,o.wrap=a,o.gzhead=null,o.w_bits=n,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=i+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+x-1)/x),o.window=new c.Buf8(2*o.w_size),o.head=new c.Buf16(o.hash_size),o.prev=new c.Buf16(o.w_size),o.lit_bufsize=1<<i+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new c.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=3*o.lit_bufsize,o.level=t,o.strategy=s,o.method=r,K(e)}h=[new M(0,0,0,0,function(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===l)return A;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var n=e.block_start+r;if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,N(e,!1),0===e.strm.avail_out))return A;if(e.strstart-e.block_start>=e.w_size-z&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):(e.strstart>e.block_start&&(N(e,!1),e.strm.avail_out),A)}),new M(4,4,8,4,Z),new M(4,5,16,8,Z),new M(4,6,32,32,Z),new M(4,4,16,16,W),new M(8,16,32,32,W),new M(8,16,128,128,W),new M(8,32,128,256,W),new M(32,128,258,1024,W),new M(32,258,258,4096,W)],r.deflateInit=function(e,t){return Y(e,t,v,15,8,0)},r.deflateInit2=Y,r.deflateReset=K,r.deflateResetKeep=G,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?_:(e.state.gzhead=t,m):_},r.deflate=function(e,t){var r,n,i,s;if(!e||!e.state||5<t||t<0)return e?R(e,_):_;if(n=e.state,!e.output||!e.input&&0!==e.avail_in||666===n.status&&t!==f)return R(e,0===e.avail_out?-5:_);if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===C)if(2===n.wrap)e.adler=0,U(n,31),U(n,139),U(n,8),n.gzhead?(U(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),U(n,255&n.gzhead.time),U(n,n.gzhead.time>>8&255),U(n,n.gzhead.time>>16&255),U(n,n.gzhead.time>>24&255),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(U(n,255&n.gzhead.extra.length),U(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=p(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(U(n,0),U(n,0),U(n,0),U(n,0),U(n,0),U(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),U(n,3),n.status=E);else{var a=v+(n.w_bits-8<<4)<<8;a|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(a|=32),a+=31-a%31,n.status=E,P(n,a),0!==n.strstart&&(P(n,e.adler>>>16),P(n,65535&e.adler)),e.adler=1}if(69===n.status)if(n.gzhead.extra){for(i=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending!==n.pending_buf_size));)U(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){i=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),F(e),i=n.pending,n.pending===n.pending_buf_size)){s=1;break}s=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,U(n,s)}while(0!==s);n.gzhead.hcrc&&n.pending>i&&(e.adler=p(e.adler,n.pending_buf,n.pending-i,i)),0===s&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&F(e),n.pending+2<=n.pending_buf_size&&(U(n,255&e.adler),U(n,e.adler>>8&255),e.adler=0,n.status=E)):n.status=E),0!==n.pending){if(F(e),0===e.avail_out)return n.last_flush=-1,m}else if(0===e.avail_in&&T(t)<=T(r)&&t!==f)return R(e,-5);if(666===n.status&&0!==e.avail_in)return R(e,-5);if(0!==e.avail_in||0!==n.lookahead||t!==l&&666!==n.status){var o=2===n.strategy?function(e,t){for(var r;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===l)return A;break}if(e.match_length=0,r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):3===n.strategy?function(e,t){for(var r,n,i,s,a=e.window;;){if(e.lookahead<=S){if(j(e),e.lookahead<=S&&t===l)return A;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=x&&0<e.strstart&&(n=a[i=e.strstart-1])===a[++i]&&n===a[++i]&&n===a[++i]){s=e.strstart+S;do{}while(n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&n===a[++i]&&i<s);e.match_length=S-(s-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=x?(r=u._tr_tally(e,1,e.match_length-x),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=u._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(N(e,!1),0===e.strm.avail_out))return A}return e.insert=0,t===f?(N(e,!0),0===e.strm.avail_out?O:B):e.last_lit&&(N(e,!1),0===e.strm.avail_out)?A:I}(n,t):h[n.level].func(n,t);if(o!==O&&o!==B||(n.status=666),o===A||o===O)return 0===e.avail_out&&(n.last_flush=-1),m;if(o===I&&(1===t?u._tr_align(n):5!==t&&(u._tr_stored_block(n,0,0,!1),3===t&&(D(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),F(e),0===e.avail_out))return n.last_flush=-1,m}return t!==f?m:n.wrap<=0?1:(2===n.wrap?(U(n,255&e.adler),U(n,e.adler>>8&255),U(n,e.adler>>16&255),U(n,e.adler>>24&255),U(n,255&e.total_in),U(n,e.total_in>>8&255),U(n,e.total_in>>16&255),U(n,e.total_in>>24&255)):(P(n,e.adler>>>16),P(n,65535&e.adler)),F(e),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?m:1)},r.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==C&&69!==t&&73!==t&&91!==t&&103!==t&&t!==E&&666!==t?R(e,_):(e.state=null,t===E?R(e,-3):m):_},r.deflateSetDictionary=function(e,t){var r,n,i,s,a,o,h,u,l=t.length;if(!e||!e.state)return _;if(2===(s=(r=e.state).wrap)||1===s&&r.status!==C||r.lookahead)return _;for(1===s&&(e.adler=d(e.adler,t,l,0)),r.wrap=0,l>=r.w_size&&(0===s&&(D(r.head),r.strstart=0,r.block_start=0,r.insert=0),u=new c.Buf8(r.w_size),c.arraySet(u,t,l-r.w_size,r.w_size,0),t=u,l=r.w_size),a=e.avail_in,o=e.next_in,h=e.input,e.avail_in=l,e.next_in=0,e.input=t,j(r);r.lookahead>=x;){for(n=r.strstart,i=r.lookahead-(x-1);r.ins_h=(r.ins_h<<r.hash_shift^r.window[n+x-1])&r.hash_mask,r.prev[n&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=n,n++,--i;);r.strstart=n,r.lookahead=x-1,j(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=x-1,r.match_available=0,e.next_in=o,e.input=h,e.avail_in=a,r.wrap=s,m},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,r){"use strict";t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,r){"use strict";t.exports=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C;r=e.state,n=e.next_in,z=e.input,i=n+(e.avail_in-5),s=e.next_out,C=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),h=r.dmax,u=r.wsize,l=r.whave,f=r.wnext,c=r.window,d=r.hold,p=r.bits,m=r.lencode,_=r.distcode,g=(1<<r.lenbits)-1,b=(1<<r.distbits)-1;e:do{p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=m[d&g];t:for(;;){if(d>>>=y=v>>>24,p-=y,0===(y=v>>>16&255))C[s++]=65535&v;else{if(!(16&y)){if(0==(64&y)){v=m[(65535&v)+(d&(1<<y)-1)];continue t}if(32&y){r.mode=12;break e}e.msg="invalid literal/length code",r.mode=30;break e}w=65535&v,(y&=15)&&(p<y&&(d+=z[n++]<<p,p+=8),w+=d&(1<<y)-1,d>>>=y,p-=y),p<15&&(d+=z[n++]<<p,p+=8,d+=z[n++]<<p,p+=8),v=_[d&b];r:for(;;){if(d>>>=y=v>>>24,p-=y,!(16&(y=v>>>16&255))){if(0==(64&y)){v=_[(65535&v)+(d&(1<<y)-1)];continue r}e.msg="invalid distance code",r.mode=30;break e}if(k=65535&v,p<(y&=15)&&(d+=z[n++]<<p,(p+=8)<y&&(d+=z[n++]<<p,p+=8)),h<(k+=d&(1<<y)-1)){e.msg="invalid distance too far back",r.mode=30;break e}if(d>>>=y,p-=y,(y=s-a)<k){if(l<(y=k-y)&&r.sane){e.msg="invalid distance too far back",r.mode=30;break e}if(S=c,(x=0)===f){if(x+=u-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}}else if(f<y){if(x+=u+f-y,(y-=f)<w){for(w-=y;C[s++]=c[x++],--y;);if(x=0,f<w){for(w-=y=f;C[s++]=c[x++],--y;);x=s-k,S=C}}}else if(x+=f-y,y<w){for(w-=y;C[s++]=c[x++],--y;);x=s-k,S=C}for(;2<w;)C[s++]=S[x++],C[s++]=S[x++],C[s++]=S[x++],w-=3;w&&(C[s++]=S[x++],1<w&&(C[s++]=S[x++]))}else{for(x=s-k;C[s++]=C[x++],C[s++]=C[x++],C[s++]=C[x++],2<(w-=3););w&&(C[s++]=C[x++],1<w&&(C[s++]=C[x++]))}break}}break}}while(n<i&&s<o);n-=w=p>>3,d&=(1<<(p-=w<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<i?i-n+5:5-(n-i),e.avail_out=s<o?o-s+257:257-(s-o),r.hold=d,r.bits=p}},{}],49:[function(e,t,r){"use strict";var I=e("../utils/common"),O=e("./adler32"),B=e("./crc32"),R=e("./inffast"),T=e("./inftrees"),D=1,F=2,N=0,U=-2,P=1,n=852,i=592;function L(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function s(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new I.Buf16(320),this.work=new I.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function a(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=P,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new I.Buf32(n),t.distcode=t.distdyn=new I.Buf32(i),t.sane=1,t.back=-1,N):U}function o(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,a(e)):U}function h(e,t){var r,n;return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?U:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,o(e))):U}function u(e,t){var r,n;return e?(n=new s,(e.state=n).window=null,(r=h(e,t))!==N&&(e.state=null),r):U}var l,f,c=!0;function j(e){if(c){var t;for(l=new I.Buf32(512),f=new I.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(T(D,e.lens,0,288,l,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;T(F,e.lens,0,32,f,0,e.work,{bits:5}),c=!1}e.lencode=l,e.lenbits=9,e.distcode=f,e.distbits=5}function Z(e,t,r,n){var i,s=e.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new I.Buf8(s.wsize)),n>=s.wsize?(I.arraySet(s.window,t,r-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(n<(i=s.wsize-s.wnext)&&(i=n),I.arraySet(s.window,t,r-n,i,s.wnext),(n-=i)?(I.arraySet(s.window,t,r-n,n,0),s.wnext=n,s.whave=s.wsize):(s.wnext+=i,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=i))),0}r.inflateReset=o,r.inflateReset2=h,r.inflateResetKeep=a,r.inflateInit=function(e){return u(e,15)},r.inflateInit2=u,r.inflate=function(e,t){var r,n,i,s,a,o,h,u,l,f,c,d,p,m,_,g,b,v,y,w,k,x,S,z,C=0,E=new I.Buf8(4),A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return U;12===(r=e.state).mode&&(r.mode=13),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,f=o,c=h,x=N;e:for(;;)switch(r.mode){case P:if(0===r.wrap){r.mode=13;break}for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(2&r.wrap&&35615===u){E[r.check=0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0),l=u=0,r.mode=2;break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",r.mode=30;break}if(8!=(15&u)){e.msg="unknown compression method",r.mode=30;break}if(l-=4,k=8+(15&(u>>>=4)),0===r.wbits)r.wbits=k;else if(k>r.wbits){e.msg="invalid window size",r.mode=30;break}r.dmax=1<<k,e.adler=r.check=1,r.mode=512&u?10:12,l=u=0;break;case 2:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.flags=u,8!=(255&r.flags)){e.msg="unknown compression method",r.mode=30;break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=30;break}r.head&&(r.head.text=u>>8&1),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=3;case 3:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.time=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,E[2]=u>>>16&255,E[3]=u>>>24&255,r.check=B(r.check,E,4,0)),l=u=0,r.mode=4;case 4:for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.head&&(r.head.xflags=255&u,r.head.os=u>>8),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0,r.mode=5;case 5:if(1024&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length=u,r.head&&(r.head.extra_len=u),512&r.flags&&(E[0]=255&u,E[1]=u>>>8&255,r.check=B(r.check,E,2,0)),l=u=0}else r.head&&(r.head.extra=null);r.mode=6;case 6:if(1024&r.flags&&(o<(d=r.length)&&(d=o),d&&(r.head&&(k=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),I.arraySet(r.head.extra,n,s,d,k)),512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,r.length-=d),r.length))break e;r.length=0,r.mode=7;case 7:if(2048&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.name+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=8;case 8:if(4096&r.flags){if(0===o)break e;for(d=0;k=n[s+d++],r.head&&k&&r.length<65536&&(r.head.comment+=String.fromCharCode(k)),k&&d<o;);if(512&r.flags&&(r.check=B(r.check,n,d,s)),o-=d,s+=d,k)break e}else r.head&&(r.head.comment=null);r.mode=9;case 9:if(512&r.flags){for(;l<16;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(65535&r.check)){e.msg="header crc mismatch",r.mode=30;break}l=u=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=12;break;case 10:for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}e.adler=r.check=L(u),l=u=0,r.mode=11;case 11:if(0===r.havedict)return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,2;e.adler=r.check=1,r.mode=12;case 12:if(5===t||6===t)break e;case 13:if(r.last){u>>>=7&l,l-=7&l,r.mode=27;break}for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}switch(r.last=1&u,l-=1,3&(u>>>=1)){case 0:r.mode=14;break;case 1:if(j(r),r.mode=20,6!==t)break;u>>>=2,l-=2;break e;case 2:r.mode=17;break;case 3:e.msg="invalid block type",r.mode=30}u>>>=2,l-=2;break;case 14:for(u>>>=7&l,l-=7&l;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",r.mode=30;break}if(r.length=65535&u,l=u=0,r.mode=15,6===t)break e;case 15:r.mode=16;case 16:if(d=r.length){if(o<d&&(d=o),h<d&&(d=h),0===d)break e;I.arraySet(i,n,s,d,a),o-=d,s+=d,h-=d,a+=d,r.length-=d;break}r.mode=12;break;case 17:for(;l<14;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(r.nlen=257+(31&u),u>>>=5,l-=5,r.ndist=1+(31&u),u>>>=5,l-=5,r.ncode=4+(15&u),u>>>=4,l-=4,286<r.nlen||30<r.ndist){e.msg="too many length or distance symbols",r.mode=30;break}r.have=0,r.mode=18;case 18:for(;r.have<r.ncode;){for(;l<3;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.lens[A[r.have++]]=7&u,u>>>=3,l-=3}for(;r.have<19;)r.lens[A[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,S={bits:r.lenbits},x=T(0,r.lens,0,19,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid code lengths set",r.mode=30;break}r.have=0,r.mode=19;case 19:for(;r.have<r.nlen+r.ndist;){for(;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(b<16)u>>>=_,l-=_,r.lens[r.have++]=b;else{if(16===b){for(z=_+2;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u>>>=_,l-=_,0===r.have){e.msg="invalid bit length repeat",r.mode=30;break}k=r.lens[r.have-1],d=3+(3&u),u>>>=2,l-=2}else if(17===b){for(z=_+3;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=3+(7&(u>>>=_)),u>>>=3,l-=3}else{for(z=_+7;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}l-=_,k=0,d=11+(127&(u>>>=_)),u>>>=7,l-=7}if(r.have+d>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=30;break}for(;d--;)r.lens[r.have++]=k}}if(30===r.mode)break;if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=30;break}if(r.lenbits=9,S={bits:r.lenbits},x=T(D,r.lens,0,r.nlen,r.lencode,0,r.work,S),r.lenbits=S.bits,x){e.msg="invalid literal/lengths set",r.mode=30;break}if(r.distbits=6,r.distcode=r.distdyn,S={bits:r.distbits},x=T(F,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,S),r.distbits=S.bits,x){e.msg="invalid distances set",r.mode=30;break}if(r.mode=20,6===t)break e;case 20:r.mode=21;case 21:if(6<=o&&258<=h){e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,R(e,c),a=e.next_out,i=e.output,h=e.avail_out,s=e.next_in,n=e.input,o=e.avail_in,u=r.hold,l=r.bits,12===r.mode&&(r.back=-1);break}for(r.back=0;g=(C=r.lencode[u&(1<<r.lenbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(g&&0==(240&g)){for(v=_,y=g,w=b;g=(C=r.lencode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,r.length=b,0===g){r.mode=26;break}if(32&g){r.back=-1,r.mode=12;break}if(64&g){e.msg="invalid literal/length code",r.mode=30;break}r.extra=15&g,r.mode=22;case 22:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.length+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=23;case 23:for(;g=(C=r.distcode[u&(1<<r.distbits)-1])>>>16&255,b=65535&C,!((_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(0==(240&g)){for(v=_,y=g,w=b;g=(C=r.distcode[w+((u&(1<<v+y)-1)>>v)])>>>16&255,b=65535&C,!(v+(_=C>>>24)<=l);){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}u>>>=v,l-=v,r.back+=v}if(u>>>=_,l-=_,r.back+=_,64&g){e.msg="invalid distance code",r.mode=30;break}r.offset=b,r.extra=15&g,r.mode=24;case 24:if(r.extra){for(z=r.extra;l<z;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}r.offset+=u&(1<<r.extra)-1,u>>>=r.extra,l-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=30;break}r.mode=25;case 25:if(0===h)break e;if(d=c-h,r.offset>d){if((d=r.offset-d)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=30;break}p=d>r.wnext?(d-=r.wnext,r.wsize-d):r.wnext-d,d>r.length&&(d=r.length),m=r.window}else m=i,p=a-r.offset,d=r.length;for(h<d&&(d=h),h-=d,r.length-=d;i[a++]=m[p++],--d;);0===r.length&&(r.mode=21);break;case 26:if(0===h)break e;i[a++]=r.length,h--,r.mode=21;break;case 27:if(r.wrap){for(;l<32;){if(0===o)break e;o--,u|=n[s++]<<l,l+=8}if(c-=h,e.total_out+=c,r.total+=c,c&&(e.adler=r.check=r.flags?B(r.check,i,c,a-c):O(r.check,i,c,a-c)),c=h,(r.flags?u:L(u))!==r.check){e.msg="incorrect data check",r.mode=30;break}l=u=0}r.mode=28;case 28:if(r.wrap&&r.flags){for(;l<32;){if(0===o)break e;o--,u+=n[s++]<<l,l+=8}if(u!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=30;break}l=u=0}r.mode=29;case 29:x=1;break e;case 30:x=-3;break e;case 31:return-4;case 32:default:return U}return e.next_out=a,e.avail_out=h,e.next_in=s,e.avail_in=o,r.hold=u,r.bits=l,(r.wsize||c!==e.avail_out&&r.mode<30&&(r.mode<27||4!==t))&&Z(e,e.output,e.next_out,c-e.avail_out)?(r.mode=31,-4):(f-=e.avail_in,c-=e.avail_out,e.total_in+=f,e.total_out+=c,r.total+=c,r.wrap&&c&&(e.adler=r.check=r.flags?B(r.check,i,c,e.next_out-c):O(r.check,i,c,e.next_out-c)),e.data_type=r.bits+(r.last?64:0)+(12===r.mode?128:0)+(20===r.mode||15===r.mode?256:0),(0==f&&0===c||4===t)&&x===N&&(x=-5),x)},r.inflateEnd=function(e){if(!e||!e.state)return U;var t=e.state;return t.window&&(t.window=null),e.state=null,N},r.inflateGetHeader=function(e,t){var r;return e&&e.state?0==(2&(r=e.state).wrap)?U:((r.head=t).done=!1,N):U},r.inflateSetDictionary=function(e,t){var r,n=t.length;return e&&e.state?0!==(r=e.state).wrap&&11!==r.mode?U:11===r.mode&&O(1,t,n,0)!==r.check?-3:Z(e,t,n,n)?(r.mode=31,-4):(r.havedict=1,N):U},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,r){"use strict";var D=e("../utils/common"),F=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],N=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],U=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],P=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,r,n,i,s,a,o){var h,u,l,f,c,d,p,m,_,g=o.bits,b=0,v=0,y=0,w=0,k=0,x=0,S=0,z=0,C=0,E=0,A=null,I=0,O=new D.Buf16(16),B=new D.Buf16(16),R=null,T=0;for(b=0;b<=15;b++)O[b]=0;for(v=0;v<n;v++)O[t[r+v]]++;for(k=g,w=15;1<=w&&0===O[w];w--);if(w<k&&(k=w),0===w)return i[s++]=20971520,i[s++]=20971520,o.bits=1,0;for(y=1;y<w&&0===O[y];y++);for(k<y&&(k=y),b=z=1;b<=15;b++)if(z<<=1,(z-=O[b])<0)return-1;if(0<z&&(0===e||1!==w))return-1;for(B[1]=0,b=1;b<15;b++)B[b+1]=B[b]+O[b];for(v=0;v<n;v++)0!==t[r+v]&&(a[B[t[r+v]]++]=v);if(d=0===e?(A=R=a,19):1===e?(A=F,I-=257,R=N,T-=257,256):(A=U,R=P,-1),b=y,c=s,S=v=E=0,l=-1,f=(C=1<<(x=k))-1,1===e&&852<C||2===e&&592<C)return 1;for(;;){for(p=b-S,_=a[v]<d?(m=0,a[v]):a[v]>d?(m=R[T+a[v]],A[I+a[v]]):(m=96,0),h=1<<b-S,y=u=1<<x;i[c+(E>>S)+(u-=h)]=p<<24|m<<16|_|0,0!==u;);for(h=1<<b-1;E&h;)h>>=1;if(0!==h?(E&=h-1,E+=h):E=0,v++,0==--O[b]){if(b===w)break;b=t[r+a[v]]}if(k<b&&(E&f)!==l){for(0===S&&(S=k),c+=y,z=1<<(x=b-S);x+S<w&&!((z-=O[x+S])<=0);)x++,z<<=1;if(C+=1<<x,1===e&&852<C||2===e&&592<C)return 1;i[l=E&f]=k<<24|x<<16|c-s|0}}return 0!==E&&(i[c+E]=b-S<<24|64<<16|0),o.bits=k,0}},{"../utils/common":41}],51:[function(e,t,r){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,r){"use strict";var i=e("../utils/common"),o=0,h=1;function n(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,a=29,u=256,l=u+1+a,f=30,c=19,_=2*l+1,g=15,d=16,p=7,m=256,b=16,v=17,y=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],S=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],z=new Array(2*(l+2));n(z);var C=new Array(2*f);n(C);var E=new Array(512);n(E);var A=new Array(256);n(A);var I=new Array(a);n(I);var O,B,R,T=new Array(f);function D(e,t,r,n,i){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function N(e){return e<256?E[e]:E[256+(e>>>7)]}function U(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function P(e,t,r){e.bi_valid>d-r?(e.bi_buf|=t<<e.bi_valid&65535,U(e,e.bi_buf),e.bi_buf=t>>d-e.bi_valid,e.bi_valid+=r-d):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function L(e,t,r){P(e,r[2*t],r[2*t+1])}function j(e,t){for(var r=0;r|=1&e,e>>>=1,r<<=1,0<--t;);return r>>>1}function Z(e,t,r){var n,i,s=new Array(g+1),a=0;for(n=1;n<=g;n++)s[n]=a=a+r[n-1]<<1;for(i=0;i<=t;i++){var o=e[2*i+1];0!==o&&(e[2*i]=j(s[o]++,o))}}function W(e){var t;for(t=0;t<l;t++)e.dyn_ltree[2*t]=0;for(t=0;t<f;t++)e.dyn_dtree[2*t]=0;for(t=0;t<c;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*m]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function M(e){8<e.bi_valid?U(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function H(e,t,r,n){var i=2*t,s=2*r;return e[i]<e[s]||e[i]===e[s]&&n[t]<=n[r]}function G(e,t,r){for(var n=e.heap[r],i=r<<1;i<=e.heap_len&&(i<e.heap_len&&H(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!H(t,n,e.heap[i],e.depth));)e.heap[r]=e.heap[i],r=i,i<<=1;e.heap[r]=n}function K(e,t,r){var n,i,s,a,o=0;if(0!==e.last_lit)for(;n=e.pending_buf[e.d_buf+2*o]<<8|e.pending_buf[e.d_buf+2*o+1],i=e.pending_buf[e.l_buf+o],o++,0===n?L(e,i,t):(L(e,(s=A[i])+u+1,t),0!==(a=w[s])&&P(e,i-=I[s],a),L(e,s=N(--n),r),0!==(a=k[s])&&P(e,n-=T[s],a)),o<e.last_lit;);L(e,m,t)}function Y(e,t){var r,n,i,s=t.dyn_tree,a=t.stat_desc.static_tree,o=t.stat_desc.has_stree,h=t.stat_desc.elems,u=-1;for(e.heap_len=0,e.heap_max=_,r=0;r<h;r++)0!==s[2*r]?(e.heap[++e.heap_len]=u=r,e.depth[r]=0):s[2*r+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=u<2?++u:0)]=1,e.depth[i]=0,e.opt_len--,o&&(e.static_len-=a[2*i+1]);for(t.max_code=u,r=e.heap_len>>1;1<=r;r--)G(e,s,r);for(i=h;r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],G(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*i]=s[2*r]+s[2*n],e.depth[i]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=i,e.heap[1]=i++,G(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,i,s,a,o,h=t.dyn_tree,u=t.max_code,l=t.stat_desc.static_tree,f=t.stat_desc.has_stree,c=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,m=0;for(s=0;s<=g;s++)e.bl_count[s]=0;for(h[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<_;r++)p<(s=h[2*h[2*(n=e.heap[r])+1]+1]+1)&&(s=p,m++),h[2*n+1]=s,u<n||(e.bl_count[s]++,a=0,d<=n&&(a=c[n-d]),o=h[2*n],e.opt_len+=o*(s+a),f&&(e.static_len+=o*(l[2*n+1]+a)));if(0!==m){do{for(s=p-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,m-=2}while(0<m);for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)u<(i=e.heap[--r])||(h[2*i+1]!==s&&(e.opt_len+=(s-h[2*i+1])*h[2*i],h[2*i+1]=s),n--)}}(e,t),Z(s,u,e.bl_count)}function X(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)i=a,a=t[2*(n+1)+1],++o<h&&i===a||(o<u?e.bl_tree[2*i]+=o:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*b]++):o<=10?e.bl_tree[2*v]++:e.bl_tree[2*y]++,s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4))}function V(e,t,r){var n,i,s=-1,a=t[1],o=0,h=7,u=4;for(0===a&&(h=138,u=3),n=0;n<=r;n++)if(i=a,a=t[2*(n+1)+1],!(++o<h&&i===a)){if(o<u)for(;L(e,i,e.bl_tree),0!=--o;);else 0!==i?(i!==s&&(L(e,i,e.bl_tree),o--),L(e,b,e.bl_tree),P(e,o-3,2)):o<=10?(L(e,v,e.bl_tree),P(e,o-3,3)):(L(e,y,e.bl_tree),P(e,o-11,7));s=i,u=(o=0)===a?(h=138,3):i===a?(h=6,3):(h=7,4)}}n(T);var q=!1;function J(e,t,r,n){P(e,(s<<1)+(n?1:0),3),function(e,t,r,n){M(e),n&&(U(e,r),U(e,~r)),i.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}(e,t,r,!0)}r._tr_init=function(e){q||(function(){var e,t,r,n,i,s=new Array(g+1);for(n=r=0;n<a-1;n++)for(I[n]=r,e=0;e<1<<w[n];e++)A[r++]=n;for(A[r-1]=n,n=i=0;n<16;n++)for(T[n]=i,e=0;e<1<<k[n];e++)E[i++]=n;for(i>>=7;n<f;n++)for(T[n]=i<<7,e=0;e<1<<k[n]-7;e++)E[256+i++]=n;for(t=0;t<=g;t++)s[t]=0;for(e=0;e<=143;)z[2*e+1]=8,e++,s[8]++;for(;e<=255;)z[2*e+1]=9,e++,s[9]++;for(;e<=279;)z[2*e+1]=7,e++,s[7]++;for(;e<=287;)z[2*e+1]=8,e++,s[8]++;for(Z(z,l+1,s),e=0;e<f;e++)C[2*e+1]=5,C[2*e]=j(e,5);O=new D(z,w,u+1,l,g),B=new D(C,k,0,f,g),R=new D(new Array(0),x,0,c,p)}(),q=!0),e.l_desc=new F(e.dyn_ltree,O),e.d_desc=new F(e.dyn_dtree,B),e.bl_desc=new F(e.bl_tree,R),e.bi_buf=0,e.bi_valid=0,W(e)},r._tr_stored_block=J,r._tr_flush_block=function(e,t,r,n){var i,s,a=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,r=4093624447;for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return o;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return h;for(t=32;t<u;t++)if(0!==e.dyn_ltree[2*t])return h;return o}(e)),Y(e,e.l_desc),Y(e,e.d_desc),a=function(e){var t;for(X(e,e.dyn_ltree,e.l_desc.max_code),X(e,e.dyn_dtree,e.d_desc.max_code),Y(e,e.bl_desc),t=c-1;3<=t&&0===e.bl_tree[2*S[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),i=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=i&&(i=s)):i=s=r+5,r+4<=i&&-1!==t?J(e,t,r,n):4===e.strategy||s===i?(P(e,2+(n?1:0),3),K(e,z,C)):(P(e,4+(n?1:0),3),function(e,t,r,n){var i;for(P(e,t-257,5),P(e,r-1,5),P(e,n-4,4),i=0;i<n;i++)P(e,e.bl_tree[2*S[i]+1],3);V(e,e.dyn_ltree,t-1),V(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,a+1),K(e,e.dyn_ltree,e.dyn_dtree)),W(e),n&&M(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(A[r]+u+1)]++,e.dyn_dtree[2*N(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){P(e,2,3),L(e,m,z),function(e){16===e.bi_valid?(U(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,r){"use strict";t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,r){(function(e){!function(r,n){"use strict";if(!r.setImmediate){var i,s,t,a,o=1,h={},u=!1,l=r.document,e=Object.getPrototypeOf&&Object.getPrototypeOf(r);e=e&&e.setTimeout?e:r,i="[object process]"==={}.toString.call(r.process)?function(e){process.nextTick(function(){c(e)})}:function(){if(r.postMessage&&!r.importScripts){var e=!0,t=r.onmessage;return r.onmessage=function(){e=!1},r.postMessage("","*"),r.onmessage=t,e}}()?(a="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",d,!1):r.attachEvent("onmessage",d),function(e){r.postMessage(a+e,"*")}):r.MessageChannel?((t=new MessageChannel).port1.onmessage=function(e){c(e.data)},function(e){t.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(s=l.documentElement,function(e){var t=l.createElement("script");t.onreadystatechange=function(){c(e),t.onreadystatechange=null,s.removeChild(t),t=null},s.appendChild(t)}):function(e){setTimeout(c,0,e)},e.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return h[o]=n,i(o),o++},e.clearImmediate=f}function f(e){delete h[e]}function c(e){if(u)setTimeout(c,0,e);else{var t=h[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{f(e),u=!1}}}}function d(e){e.source===r&&"string"==typeof e.data&&0===e.data.indexOf(a)&&c(+e.data.slice(a.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _recipe_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe_new */ "./src/recipe_new.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/config.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x28) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x29) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck




var interactions = [];
var screenshots = [];
var reasonsAnnotation = [];
var actionSequenceId = 0;
var uploadTimer = null;
var userId = '';
var lastTimestamp = null;
var lastuploadTimestamp = null;
var lastGeneratePresignedPostResponse = null;

var upload_url = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.base_url, "/upload");
var interactions_url = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.base_url, "/interactions");
var generate_presigned_post_url = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.base_url, "/generate_presigned_post");
var tabNavigationHistory = {};
function analyzeNavigation(tabId, url) {
  if (!tabNavigationHistory[tabId]) {
    tabNavigationHistory[tabId] = {
      backStack: [],
      forwardStack: [],
      currentUrl: null
    };
  }
  var history = tabNavigationHistory[tabId];
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
  if (history.forwardStack.length > 0 && history.forwardStack[history.forwardStack.length - 1] === url) {
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
  var _data$target$classNam;
  switch (eventType) {
    case 'click_a':
    case 'click_b':
    case 'click_c':
      // Check if it's a specific type of click
      if (data.target.innerText === 'Set Up Now') {
        return "Why did you choose 'Set Up Now' instead of buy once, and why do you like this particular product?";
      } else if (data.target.id === 'buy-now-button') {
        return 'Why did you choose to buy this product immediately, and what convinced you to skip further exploration of other options? Why do you like this particular product?';
      } else if ((_data$target$classNam = data.target.className) !== null && _data$target$classNam !== void 0 && _data$target$classNam.includes('sc-product-link')) {
        return 'What made you click on this product, and what specific aspects attracted your attention compared to other search results?';
      } else if (data.target.id === 'add-to-cart-button') {
        return 'Why did you decide to add this item to your cart, and are you planning to buy it now or later? What convinced you that this item was the right choice for your needs?';
      } else {
        return 'What was your reason for clicking on this element?';
      }
    case 'scroll':
      return 'What are you doing while scrolling—are you browsing search results, looking at reviews, or something else, and what are you hoping to find?';
    case 'input':
      return 'What are you searching for, and how did you decide on the search terms you used? Are you looking for a specific product, brand, or feature?';
    case 'navigation':
      if (data.navigationType === 'back') {
        return 'Why did you decide to go back to the previous page, and what were you hoping to revisit or reconsider?';
      } else if (data.navigationType === 'forward') {
        return 'Why did you decide to return to this page after previously navigating away, and what new or unresolved information are you looking for now?';
      }
      return "What is the reason for this ".concat(data.navigationType, " navigation?");
    case 'tabActivate':
      return "Why did you switch to this tab? Do you have specific task or information in mind?";
    default:
      return "What is the reason for the ".concat(eventType, " action?");
  }
}

// Add new function to handle screenshot saving
function saveScreenshot_1(_x, _x2) {
  return _saveScreenshot_.apply(this, arguments);
}
function _saveScreenshot_() {
  _saveScreenshot_ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(screenshotDataUrl, screenshotId) {
    var result, storeScreenshots;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          if (!screenshotDataUrl) {
            _context12.next = 9;
            break;
          }
          _context12.next = 3;
          return chrome.storage.local.get({
            screenshots: []
          });
        case 3:
          result = _context12.sent;
          storeScreenshots = result.screenshots || []; // Add new screenshot
          storeScreenshots.push([screenshotDataUrl, screenshotId]);

          // Save back to storage
          _context12.next = 8;
          return chrome.storage.local.set({
            screenshots: storeScreenshots
          });
        case 8:
          return _context12.abrupt("return", true);
        case 9:
          return _context12.abrupt("return", false);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _saveScreenshot_.apply(this, arguments);
}
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  ;
  _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var _sender$tab2;
    var _sender$tab, currentactionSequenceId, uuid, saveData, screenshotDataUrl, success, _success;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(message.action === 'saveData')) {
            _context2.next = 17;
            break;
          }
          _context2.prev = 1;
          actionSequenceId++;
          currentactionSequenceId = actionSequenceId;
          console.log(currentactionSequenceId);
          // message.data.actionSequenceId = currentactionSequenceId
          uuid = message.data.uuid;
          saveData = /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var result;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    console.log('saveData ', message.data.eventType);
                    _context.next = 3;
                    return chrome.storage.local.get({
                      interactions: []
                    });
                  case 3:
                    result = _context.sent;
                    result = result.interactions || [];
                    result.push(message.data);
                    _context.next = 8;
                    return chrome.storage.local.set({
                      interactions: result
                    });
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function saveData() {
              return _ref2.apply(this, arguments);
            };
          }(); // popup
          // await sendPopup(sender.tab?.id, message.data.timestamp, message.data.eventType, actionSequenceId)
          _context2.next = 9;
          return Promise.all([saveData(), sendPopup((_sender$tab = sender.tab) === null || _sender$tab === void 0 ? void 0 : _sender$tab.id, message.data.timestamp, message.data.eventType,
          // currentactionSequenceId,
          message.data, uuid)]);
        case 9:
          sendResponse({
            success: true
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.error('Error in saveData:', _context2.t0);
          sendResponse({
            success: false,
            error: _context2.t0.message
          });
        case 16:
          return _context2.abrupt("return", true);
        case 17:
          if (!(message.action === 'captureScreenshot')) {
            _context2.next = 38;
            break;
          }
          _context2.prev = 18;
          console.log('get screenshot request');
          _context2.next = 22;
          return captureScreenshot();
        case 22:
          screenshotDataUrl = _context2.sent;
          if (!screenshotDataUrl) {
            _context2.next = 30;
            break;
          }
          _context2.next = 26;
          return saveScreenshot_1(screenshotDataUrl, message.screenshotId);
        case 26:
          success = _context2.sent;
          sendResponse({
            success: success,
            message: success ? undefined : 'Failed to capture screenshot'
          });
          _context2.next = 31;
          break;
        case 30:
          sendResponse({
            success: false,
            message: 'Failed to capture screenshot'
          });
        case 31:
          _context2.next = 37;
          break;
        case 33:
          _context2.prev = 33;
          _context2.t1 = _context2["catch"](18);
          console.error('Error in captureScreenshot:', _context2.t1);
          sendResponse({
            success: false,
            message: 'Failed to capture screenshot'
          });
        case 37:
          return _context2.abrupt("return", true);
        case 38:
          if (!(message.action === 'downloadData')) {
            _context2.next = 52;
            break;
          }
          _context2.prev = 39;
          console.log('downloadData');
          _context2.next = 43;
          return downloadDataLocally();
        case 43:
          _success = _context2.sent;
          sendResponse({
            success: _success
          });
          _context2.next = 51;
          break;
        case 47:
          _context2.prev = 47;
          _context2.t2 = _context2["catch"](39);
          console.error('Error handling download:', _context2.t2);
          sendResponse({
            success: false,
            error: _context2.t2.message
          });
        case 51:
          return _context2.abrupt("return", true);
        case 52:
          if (!(message.action === 'clearMemoryCache')) {
            _context2.next = 55;
            break;
          }
          try {
            interactions = [];
            screenshots = [];
            reasonsAnnotation = [];
            actionSequenceId = 0;
            interactions.length = 0;
            screenshots.length = 0;
            reasonsAnnotation.length = 0;
            sendResponse({
              success: true
            });
          } catch (error) {
            console.error('Error handling clearMemoryCache:', error);
            sendResponse({
              success: false,
              error: error.message
            });
          }
          return _context2.abrupt("return", true);
        case 55:
          if (!(message.action === 'getRecipe' && (_sender$tab2 = sender.tab) !== null && _sender$tab2 !== void 0 && _sender$tab2.id)) {
            _context2.next = 58;
            break;
          }
          try {
            selectRecipe(sender.tab.id, message.url).then(function (recipe) {
              sendResponse({
                recipe: recipe
              });
            })["catch"](function (error) {
              sendResponse({
                error: error.message
              });
            });
          } catch (error) {
            console.error('Error handling getRecipe:', error);
            sendResponse({
              success: false,
              error: error.message
            });
          }
          return _context2.abrupt("return", true);
        case 58:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12], [18, 33], [39, 47]]);
  }))();
  return true; // Keeps the message channel open for async responses
});

// Capture the screenshot in the current tab
function captureScreenshot() {
  return _captureScreenshot.apply(this, arguments);
}
function _captureScreenshot() {
  _captureScreenshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var _yield$chrome$tabs$qu, _yield$chrome$tabs$qu2, tab;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return chrome.tabs.query({
            active: true,
            currentWindow: true
          });
        case 3:
          _yield$chrome$tabs$qu = _context13.sent;
          _yield$chrome$tabs$qu2 = _slicedToArray(_yield$chrome$tabs$qu, 1);
          tab = _yield$chrome$tabs$qu2[0];
          if (!tab) {
            _context13.next = 10;
            break;
          }
          _context13.next = 9;
          return chrome.tabs.captureVisibleTab(tab.windowId, {
            format: 'jpeg',
            quality: 25
          });
        case 9:
          return _context13.abrupt("return", _context13.sent);
        case 10:
          _context13.next = 15;
          break;
        case 12:
          _context13.prev = 12;
          _context13.t0 = _context13["catch"](0);
          console.error('Error capturing screenshot:', _context13.t0);
        case 15:
          return _context13.abrupt("return", null);
        case 16:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 12]]);
  }));
  return _captureScreenshot.apply(this, arguments);
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
var saveHTML = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(htmlContent, currentSnapshotId) {
    var result, htmlSnapshots;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return chrome.storage.local.get({
            htmlSnapshots: {}
          });
        case 2:
          result = _context3.sent;
          htmlSnapshots = result.htmlSnapshots || {};
          htmlSnapshots[currentSnapshotId] = htmlContent;
          _context3.next = 7;
          return chrome.storage.local.set({
            htmlSnapshots: htmlSnapshots
          });
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function saveHTML(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
var saveInteraction = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(eventType, timestamp, target_url, htmlSnapshotId, currentactionSequenceId, uuid) {
    var navigationType,
      pageMeta,
      data,
      interactions,
      storeInteractions,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          navigationType = _args4.length > 6 && _args4[6] !== undefined ? _args4[6] : null;
          pageMeta = _args4.length > 7 && _args4[7] !== undefined ? _args4[7] : null;
          data = {
            eventType: eventType,
            timestamp: timestamp,
            target_url: target_url,
            htmlSnapshotId: htmlSnapshotId,
            // actionSequenceId: currentactionSequenceId,
            uuid: uuid,
            pageMeta: pageMeta
          }; // Add navigationType only if it exists
          if (navigationType) {
            data['navigationType'] = navigationType;
          }
          _context4.next = 6;
          return chrome.storage.local.get({
            interactions: []
          });
        case 6:
          interactions = _context4.sent;
          storeInteractions = interactions.interactions || [];
          storeInteractions.push(data);
          _context4.next = 11;
          return chrome.storage.local.set({
            interactions: storeInteractions
          });
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function saveInteraction(_x5, _x6, _x7, _x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();
var saveScreenshot = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(windowId, timestamp, uuid) {
    var screenshotDataUrl, screenshotId;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return chrome.tabs.captureVisibleTab(windowId, {
            format: 'jpeg',
            quality: 25
          });
        case 2:
          screenshotDataUrl = _context5.sent;
          screenshotId = "screenshot_".concat(timestamp, "_").concat(uuid);
          _context5.next = 6;
          return saveScreenshot_1(screenshotDataUrl, screenshotId);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function saveScreenshot(_x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
var sendPopup = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(tabId, timestamp, eventType, data, uuid) {
    var _data$target, _data$target2;
    var question, reason, newitem, result, storeReasonsAnnotation;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!((_data$target = data.target) !== null && _data$target !== void 0 && (_data$target = _data$target.id) !== null && _data$target !== void 0 && _data$target.toLowerCase().includes('rufus') || (_data$target2 = data.target) !== null && _data$target2 !== void 0 && (_data$target2 = _data$target2.className) !== null && _data$target2 !== void 0 && _data$target2.toLowerCase().includes('rufus'))) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return");
        case 2:
          question = getCustomQuestion(eventType, data);
          if (!(Math.random() < _config__WEBPACK_IMPORTED_MODULE_3__.popup_probability && tabId)) {
            _context6.next = 22;
            break;
          }
          _context6.prev = 4;
          _context6.next = 7;
          return chrome.tabs.sendMessage(tabId, {
            action: 'show_popup',
            question: question
          });
        case 7:
          reason = _context6.sent;
          if (!(reason && reason.input !== null)) {
            _context6.next = 17;
            break;
          }
          newitem = {
            action_uuid: uuid,
            timestamp: timestamp,
            eventType: eventType,
            reason: reason
            // uuid: uuid
          };
          _context6.next = 12;
          return chrome.storage.local.get({
            reasonsAnnotation: []
          });
        case 12:
          result = _context6.sent;
          storeReasonsAnnotation = result.reasonsAnnotation || []; // Add new reason
          storeReasonsAnnotation.push(newitem);
          // Save back to storage
          _context6.next = 17;
          return chrome.storage.local.set({
            reasonsAnnotation: storeReasonsAnnotation
          });
        case 17:
          _context6.next = 22;
          break;
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](4);
          console.error('Error popup:', _context6.t0);
        case 22:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 19]]);
  }));
  return function sendPopup(_x14, _x15, _x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

// listen to switches between activated tabs
chrome.tabs.onActivated.addListener(/*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(activeInfo) {
    var tabId, tab, timestamp, uuid, currentSnapshotId;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          tabId = activeInfo.tabId;
          _context8.next = 4;
          return chrome.tabs.get(tabId);
        case 4:
          tab = _context8.sent;
          if (tab) {
            _context8.next = 8;
            break;
          }
          console.error("Failed to get tab with ID: ".concat(tabId));
          return _context8.abrupt("return");
        case 8:
          console.log("Switched to tab ".concat(tabId, " with URL: ").concat(tab.url));
          (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.update_icon)(tab.url);
          if (tab.url && tab.url.includes(_config__WEBPACK_IMPORTED_MODULE_3__.url_include) && !_config__WEBPACK_IMPORTED_MODULE_3__.filter_url.some(function (excludeUrl) {
            return tab.url.includes(excludeUrl);
          })) {
            timestamp = new Date().toISOString();
            uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
            currentSnapshotId = "html_".concat(hashCode(tab.url), "_").concat(timestamp, "_").concat(uuid);
            chrome.tabs.sendMessage(tabId, {
              action: 'getHTML'
            }, /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response) {
                var htmlContent, pageMeta, currentactionSequenceId;
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      htmlContent = response === null || response === void 0 ? void 0 : response.html;
                      pageMeta = response === null || response === void 0 ? void 0 : response.pageMeta;
                      actionSequenceId++;
                      currentactionSequenceId = actionSequenceId;
                      _context7.next = 6;
                      return Promise.all([saveHTML(htmlContent, currentSnapshotId), saveInteraction('tabActivate', timestamp, tab.url, currentSnapshotId, currentactionSequenceId, uuid, null, pageMeta), saveScreenshot(tab.windowId, timestamp, uuid), sendPopup(tabId, timestamp, 'tabActivate', {}, uuid)]);
                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7);
              }));
              return function (_x20) {
                return _ref8.apply(this, arguments);
              };
            }());
          }
          _context8.next = 16;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](0);
          console.error('Error in tab activate handler:', _context8.t0);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 13]]);
  }));
  return function (_x19) {
    return _ref7.apply(this, arguments);
  };
}());
function selectRecipe(_x21, _x22) {
  return _selectRecipe.apply(this, arguments);
}
function _selectRecipe() {
  _selectRecipe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(tabId, url) {
    var parsedUrl, path, _iterator, _step, recipe, matchMethod, _yield$chrome$scripti, _yield$chrome$scripti2, hasMatch;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          parsedUrl = new URL(url);
          path = parsedUrl.pathname;
          _iterator = _createForOfIteratorHelper(_recipe_new__WEBPACK_IMPORTED_MODULE_0__.recipes);
          _context14.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context14.next = 28;
            break;
          }
          recipe = _step.value;
          matchMethod = recipe.match_method || 'text';
          if (!(matchMethod === 'text')) {
            _context14.next = 24;
            break;
          }
          _context14.prev = 9;
          _context14.next = 12;
          return chrome.scripting.executeScript({
            target: {
              tabId: tabId
            },
            func: function func(selector, matchText) {
              var _element$textContent$, _element$textContent;
              var element = document.querySelector(selector);
              return element && (!matchText || ((_element$textContent$ = (_element$textContent = element.textContent) === null || _element$textContent === void 0 ? void 0 : _element$textContent.toLowerCase().includes(matchText.toLowerCase())) !== null && _element$textContent$ !== void 0 ? _element$textContent$ : false));
            },
            args: [recipe.match, recipe.match_text || '']
          });
        case 12:
          _yield$chrome$scripti = _context14.sent;
          _yield$chrome$scripti2 = _slicedToArray(_yield$chrome$scripti, 1);
          hasMatch = _yield$chrome$scripti2[0].result;
          if (!hasMatch) {
            _context14.next = 17;
            break;
          }
          return _context14.abrupt("return", recipe);
        case 17:
          _context14.next = 22;
          break;
        case 19:
          _context14.prev = 19;
          _context14.t0 = _context14["catch"](9);
          console.error('Error checking text match:', _context14.t0);
        case 22:
          _context14.next = 26;
          break;
        case 24:
          if (!(matchMethod === 'url' && recipe.match === path)) {
            _context14.next = 26;
            break;
          }
          return _context14.abrupt("return", recipe);
        case 26:
          _context14.next = 5;
          break;
        case 28:
          _context14.next = 33;
          break;
        case 30:
          _context14.prev = 30;
          _context14.t1 = _context14["catch"](3);
          _iterator.e(_context14.t1);
        case 33:
          _context14.prev = 33;
          _iterator.f();
          return _context14.finish(33);
        case 36:
          throw new Error("No matching recipe found for path: ".concat(path));
        case 37:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[3, 30, 33, 36], [9, 19]]);
  }));
  return _selectRecipe.apply(this, arguments);
}
chrome.webNavigation.onCompleted.addListener(/*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(details) {
    var navigationType, timestamp, uuid;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          if (!(details.frameId !== 0)) {
            _context10.next = 2;
            break;
          }
          return _context10.abrupt("return");
        case 2:
          console.log('webNavigation onCompleted event triggered:', details);
          (0,_utils_util__WEBPACK_IMPORTED_MODULE_2__.update_icon)(details.url);
          if (details.url.includes(_config__WEBPACK_IMPORTED_MODULE_3__.url_include) && !_config__WEBPACK_IMPORTED_MODULE_3__.filter_url.some(function (excludeUrl) {
            return details.url.includes(excludeUrl);
          })) {
            navigationType = analyzeNavigation(details.tabId, details.url);
            console.log("Navigation type: ".concat(navigationType, " for tab ").concat(details.tabId, " to ").concat(details.url));
            timestamp = new Date().toISOString();
            uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])();
            chrome.tabs.sendMessage(details.tabId, {
              action: 'getHTML'
            }, /*#__PURE__*/function () {
              var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(response) {
                var htmlContent, pageMeta, currentSnapshotId, currentactionSequenceId;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      htmlContent = response === null || response === void 0 ? void 0 : response.html;
                      pageMeta = response === null || response === void 0 ? void 0 : response.pageMeta;
                      currentSnapshotId = "html_".concat(hashCode(details.url), "_").concat(timestamp, "_").concat(uuid);
                      actionSequenceId++;
                      currentactionSequenceId = actionSequenceId;
                      _context9.t0 = Promise;
                      _context9.t1 = saveHTML(htmlContent, currentSnapshotId);
                      _context9.t2 = saveInteraction('navigation', timestamp, details.url, currentSnapshotId, currentactionSequenceId, uuid, navigationType, pageMeta);
                      _context9.t3 = saveScreenshot;
                      _context9.next = 11;
                      return chrome.tabs.get(details.tabId);
                    case 11:
                      _context9.t4 = _context9.sent.windowId;
                      _context9.t5 = timestamp;
                      _context9.t6 = uuid;
                      _context9.t7 = (0, _context9.t3)(_context9.t4, _context9.t5, _context9.t6);
                      _context9.t8 = [_context9.t1, _context9.t2, _context9.t7];
                      _context9.next = 18;
                      return _context9.t0.all.call(_context9.t0, _context9.t8);
                    case 18:
                      if (!(navigationType !== 'new' && navigationType !== 'reload')) {
                        _context9.next = 22;
                        break;
                      }
                      console.log('send message to popup navigation');
                      _context9.next = 22;
                      return sendPopup(details.tabId, timestamp, 'navigation',
                      // currentactionSequenceId,
                      {
                        navigationType: navigationType
                      }, uuid);
                    case 22:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              return function (_x24) {
                return _ref10.apply(this, arguments);
              };
            }());
          }
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x23) {
    return _ref9.apply(this, arguments);
  };
}());

// Add cleanup when tab is closed
chrome.tabs.onRemoved.addListener(function (tabId) {
  delete tabNavigationHistory[tabId];
});

// Add this function to handle data upload
function downloadDataLocally() {
  return _downloadDataLocally.apply(this, arguments);
}
function _downloadDataLocally() {
  _downloadDataLocally = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, interact, orderDetails, screen, ReasonsAnnotation, htmlSnapshots, storeInteractions, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation, sessionInfoContent, _i2, _Object$entries, _Object$entries$_i, snapshotId, htmlContent, fullData, interactionsData, _iterator2, _step2, _step2$value, screenshotData, screenshotId, _zip, _fullData, interactions_json, screenshotsFolder, _iterator3, _step3, _step3$value, _screenshotData, _screenshotId, response, blob, htmlSnapshotsFolder, _i3, _Object$entries2, _Object$entries2$_i, _snapshotId, _htmlContent, zipBlob, reader;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Get userId and data from storage
          _context15.next = 4;
          return chrome.storage.local.get({
            userId: ''
          });
        case 4:
          userIdResult = _context15.sent;
          currentUserId = userIdResult.userId;
          user_id = currentUserId || 'unknown';
          folderName = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.folder_name, "/USER_").concat(user_id, "/SESSION_").concat(timestamp);
          _context15.next = 10;
          return chrome.storage.local.get({
            htmlSnapshots: []
          });
        case 10:
          snapshots = _context15.sent;
          _context15.next = 13;
          return chrome.storage.local.get({
            interactions: []
          });
        case 13:
          interact = _context15.sent;
          _context15.next = 16;
          return chrome.storage.local.get({
            orderDetails: []
          });
        case 16:
          orderDetails = _context15.sent;
          _context15.next = 19;
          return chrome.storage.local.get({
            screenshots: []
          });
        case 19:
          screen = _context15.sent;
          _context15.next = 22;
          return chrome.storage.local.get({
            reasonsAnnotation: []
          });
        case 22:
          ReasonsAnnotation = _context15.sent;
          htmlSnapshots = snapshots.htmlSnapshots || {};
          storeInteractions = interact.interactions || [];
          storeOrderDetails = orderDetails.orderDetails || [];
          storeScreenshots = screen.screenshots || [];
          storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || []; // concatenating with the seen data
          _context15.next = 30;
          return chrome.storage.local.get({
            seen_interactions: []
          });
        case 30:
          seen_interact = _context15.sent;
          _context15.next = 33;
          return chrome.storage.local.get({
            seen_htmlSnapshots: []
          });
        case 33:
          seen_snapshots = _context15.sent;
          _context15.next = 36;
          return chrome.storage.local.get({
            seen_orderDetails: []
          });
        case 36:
          seen_orderDetails = _context15.sent;
          _context15.next = 39;
          return chrome.storage.local.get({
            seen_screenshots: []
          });
        case 39:
          seen_screen = _context15.sent;
          _context15.next = 42;
          return chrome.storage.local.get({
            seen_reasonsAnnotation: []
          });
        case 42:
          seen_ReasonsAnnotation = _context15.sent;
          seen_storeInteractions = seen_interact.interactions || [];
          seen_htmlSnapshots = seen_snapshots.htmlSnapshots || {};
          seen_storeOrderDetails = seen_orderDetails.orderDetails || [];
          seen_storeScreenshots = seen_screen.screenshots || [];
          seen_storeReasonsAnnotation = seen_ReasonsAnnotation.reasonsAnnotation || [];
          storeInteractions = [].concat(_toConsumableArray(seen_storeInteractions), _toConsumableArray(storeInteractions));
          htmlSnapshots = _objectSpread(_objectSpread({}, seen_htmlSnapshots), htmlSnapshots);
          storeOrderDetails = [].concat(_toConsumableArray(seen_storeOrderDetails), _toConsumableArray(storeOrderDetails));
          storeScreenshots = [].concat(_toConsumableArray(seen_storeScreenshots), _toConsumableArray(storeScreenshots));
          storeReasonsAnnotation = [].concat(_toConsumableArray(seen_storeReasonsAnnotation), _toConsumableArray(storeReasonsAnnotation));
          if (_config__WEBPACK_IMPORTED_MODULE_3__.zip) {
            _context15.next = 75;
            break;
          }
          // Upload session info
          console.log('downloading session info');
          sessionInfoContent = "Session data for timestamp: ".concat(timestamp, ", user id: ").concat(currentUserId, ",\n order details: \n ").concat(JSON.stringify(storeorderDetails));
          chrome.downloads.download({
            url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(sessionInfoContent),
            filename: "".concat(folderName, "/session_info.txt"),
            saveAs: false
          });

          // Upload HTML snapshots as separate files
          console.log('downloading html snapshots');
          _i2 = 0, _Object$entries = Object.entries(htmlSnapshots);
        case 59:
          if (!(_i2 < _Object$entries.length)) {
            _context15.next = 66;
            break;
          }
          _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2), snapshotId = _Object$entries$_i[0], htmlContent = _Object$entries$_i[1];
          _context15.next = 63;
          return chrome.downloads.download({
            url: 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent),
            filename: "".concat(folderName, "/html/").concat(snapshotId.replace(/[:.]/g, '-'), ".html"),
            saveAs: false
          });
        case 63:
          _i2++;
          _context15.next = 59;
          break;
        case 66:
          // Upload interactions JSON
          console.log('downloading interactions');
          fullData = {
            interactions: storeInteractions,
            reasons: storeReasonsAnnotation,
            orderDetails: orderDetails
          };
          interactionsData = JSON.stringify(fullData, null, 2);
          chrome.downloads.download({
            url: 'data:text/json;charset=utf-8,' + encodeURIComponent(interactionsData),
            filename: "".concat(folderName, "/interactions.json"),
            saveAs: false
          });

          // Upload screenshots
          console.log('downloading screenshots');
          _iterator2 = _createForOfIteratorHelper(storeScreenshots);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _step2$value = _slicedToArray(_step2.value, 2), screenshotData = _step2$value[0], screenshotId = _step2$value[1];
              chrome.downloads.download({
                url: screenshotData,
                filename: "".concat(folderName, "/screenshots/").concat(screenshotId.replace(/[:.]/g, '-'), ".jpg"),
                saveAs: false
              });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          _context15.next = 113;
          break;
        case 75:
          console.log('downloading zip file');
          _zip = new (jszip__WEBPACK_IMPORTED_MODULE_1___default())();
          _zip.file('session_info.txt', "Session data for timestamp: ".concat(timestamp, "\n          \n user id: ").concat(user_id, "\n                \n order details:\n                \n ").concat(JSON.stringify(orderDetails)));
          _fullData = {
            interactions: storeInteractions,
            reasons: storeReasonsAnnotation,
            orderDetails: orderDetails
          };
          interactions_json = JSON.stringify(_fullData, null, 2);
          _zip.file('interactions.json', interactions_json);
          screenshotsFolder = _zip.folder('screenshots');
          _iterator3 = _createForOfIteratorHelper(storeScreenshots);
          _context15.prev = 83;
          _iterator3.s();
        case 85:
          if ((_step3 = _iterator3.n()).done) {
            _context15.next = 96;
            break;
          }
          _step3$value = _slicedToArray(_step3.value, 2), _screenshotData = _step3$value[0], _screenshotId = _step3$value[1];
          _context15.next = 89;
          return fetch(_screenshotData);
        case 89:
          response = _context15.sent;
          _context15.next = 92;
          return response.blob();
        case 92:
          blob = _context15.sent;
          screenshotsFolder.file(_screenshotId.replace(/[:.]/g, '-') + '.jpg', blob);
        case 94:
          _context15.next = 85;
          break;
        case 96:
          _context15.next = 101;
          break;
        case 98:
          _context15.prev = 98;
          _context15.t0 = _context15["catch"](83);
          _iterator3.e(_context15.t0);
        case 101:
          _context15.prev = 101;
          _iterator3.f();
          return _context15.finish(101);
        case 104:
          htmlSnapshotsFolder = _zip.folder('htmlSnapshots');
          for (_i3 = 0, _Object$entries2 = Object.entries(htmlSnapshots); _i3 < _Object$entries2.length; _i3++) {
            _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2), _snapshotId = _Object$entries2$_i[0], _htmlContent = _Object$entries2$_i[1];
            htmlSnapshotsFolder.file(_snapshotId + '.html', _htmlContent);
          }
          _context15.next = 108;
          return _zip.generateAsync({
            type: 'blob'
          });
        case 108:
          zipBlob = _context15.sent;
          console.log('zip file is generated');
          reader = new FileReader();
          reader.onloadend = function () {
            var base64Zip = reader.result.split(',')[1]; // Get the base64 part
            chrome.downloads.download({
              url: 'data:application/zip;base64,' + base64Zip,
              filename: "".concat(folderName, ".zip"),
              saveAs: false
            });
          };
          reader.readAsDataURL(zipBlob);
        case 113:
          // Clear cache after successful upload
          chrome.storage.local.remove(['seen_htmlSnapshots', 'seen_interactions', 'seen_orderDetails', 'seen_screenshots', 'seen_reasonsAnnotation']);
          return _context15.abrupt("return", true);
        case 117:
          _context15.prev = 117;
          _context15.t1 = _context15["catch"](0);
          console.error('Error download data:', _context15.t1);
          return _context15.abrupt("return", false);
        case 121:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 117], [83, 98, 101, 104]]);
  }));
  return _downloadDataLocally.apply(this, arguments);
}
function presignedFormData(name) {
  var formData = new FormData();
  formData.append('key', name);
  Object.keys(lastGeneratePresignedPostResponse.fields).forEach(function (key) {
    if (key != 'key') formData.append(key, lastGeneratePresignedPostResponse.fields[key]);
  });
  return formData;
}
var customFetch = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(url, options) {
    var response;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return fetch(url, options);
        case 2:
          response = _context11.sent;
          if (response.ok) {
            _context11.next = 6;
            break;
          }
          console.log('response', response);
          throw new Error("HTTP error! Status: ".concat(response.status));
        case 6:
          return _context11.abrupt("return", response);
        case 7:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function customFetch(_x25, _x26) {
    return _ref11.apply(this, arguments);
  };
}();
function gzipHtml(_x27) {
  return _gzipHtml.apply(this, arguments);
}
function _gzipHtml() {
  _gzipHtml = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(content) {
    var cs, writer, encoder, encodedContent, compressedBlob;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          // Create a new GZIP compression stream
          cs = new CompressionStream('gzip'); // Create a writable stream to which we'll write the compressed data
          writer = cs.writable.getWriter(); // Encode the content to Uint8Array
          encoder = new TextEncoder();
          encodedContent = encoder.encode(content); // Write the encoded content into the compression stream
          writer.write(encodedContent);

          // Close the writer to finish compression
          writer.close();

          // Get the compressed data as a Blob
          _context16.next = 8;
          return new Response(cs.readable).blob();
        case 8:
          compressedBlob = _context16.sent;
          return _context16.abrupt("return", compressedBlob);
        case 10:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _gzipHtml.apply(this, arguments);
}
function uploadDataToServer() {
  return _uploadDataToServer.apply(this, arguments);
} // Start the periodic upload timer
function _uploadDataToServer() {
  _uploadDataToServer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
    var _lastGeneratePresigne, _lastGeneratePresigne2, interact, storeInteractions, timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, orderDetails, screen, ReasonsAnnotation, htmlSnapshots, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, fullData, _lastGeneratePresigne3, postUrlResult, sessionInfo, sessionFormData, _i4, _Object$entries3, _Object$entries3$_i, snapshotId, htmlContent, htmlBlob, formData, _iterator4, _step4, _step4$value, screenshotData, screenshotId, response, blob, _formData, interactions_json, interactionsBlob, jsonFormDataFile, jsonFormData, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          stopPeriodicUpload();
          _context17.prev = 1;
          _context17.next = 4;
          return chrome.storage.local.get({
            interactions: []
          });
        case 4:
          interact = _context17.sent;
          storeInteractions = interact.interactions || []; // Check if there are any interactions and get the latest timestamp
          if (!(storeInteractions.length === 0)) {
            _context17.next = 10;
            break;
          }
          console.log('No interactions to upload');
          startPeriodicUpload();
          return _context17.abrupt("return", false);
        case 10:
          _context17.next = 12;
          return chrome.storage.local.get({
            user_interaction_tracker_last_timestamp: null
          });
        case 12:
          lastTimestamp = _context17.sent;
          lastTimestamp = lastTimestamp.user_interaction_tracker_last_timestamp || null;
          if (lastTimestamp) console.log('lastTimestamp restored: ', lastTimestamp);
          timestamp = lastTimestamp || new Date().toISOString().replace(/[:.]/g, '-');
          _context17.next = 18;
          return chrome.storage.local.set({
            user_interaction_tracker_last_timestamp: timestamp
          });
        case 18:
          _context17.next = 20;
          return chrome.storage.local.get({
            userId: ''
          });
        case 20:
          userIdResult = _context17.sent;
          currentUserId = userIdResult.userId;
          user_id = currentUserId || 'unknown';
          folderName = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.folder_name, "/USER/").concat(user_id);
          _context17.next = 26;
          return chrome.storage.local.get({
            htmlSnapshots: []
          });
        case 26:
          snapshots = _context17.sent;
          _context17.next = 29;
          return chrome.storage.local.get({
            orderDetails: []
          });
        case 29:
          orderDetails = _context17.sent;
          _context17.next = 32;
          return chrome.storage.local.get({
            screenshots: []
          });
        case 32:
          screen = _context17.sent;
          _context17.next = 35;
          return chrome.storage.local.get({
            reasonsAnnotation: []
          });
        case 35:
          ReasonsAnnotation = _context17.sent;
          htmlSnapshots = snapshots.htmlSnapshots || {};
          storeOrderDetails = orderDetails.orderDetails || [];
          storeScreenshots = screen.screenshots || [];
          storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || [];
          fullData = {
            interactions: storeInteractions,
            reasons: storeReasonsAnnotation,
            orderDetails: storeOrderDetails
          };
          if (!(!lastGeneratePresignedPostResponse || ((_lastGeneratePresigne = lastGeneratePresignedPostResponse) === null || _lastGeneratePresigne === void 0 ? void 0 : _lastGeneratePresigne.expire_timestamp) < Date.now() / 1000 ||
          // prevent from requesting for post url over and over
          !((_lastGeneratePresigne2 = lastGeneratePresignedPostResponse) !== null && _lastGeneratePresigne2 !== void 0 && (_lastGeneratePresigne2 = _lastGeneratePresigne2.fields) !== null && _lastGeneratePresigne2 !== void 0 && _lastGeneratePresigne2.key.includes(user_id)))) {
            _context17.next = 51;
            break;
          }
          console.log('getting new post url');
          console.log("".concat(generate_presigned_post_url, "?user_id=").concat(user_id));
          _context17.next = 46;
          return customFetch("".concat(generate_presigned_post_url, "?user_id=").concat(user_id), {
            method: 'GET'
          });
        case 46:
          postUrlResult = _context17.sent;
          _context17.next = 49;
          return postUrlResult.json();
        case 49:
          lastGeneratePresignedPostResponse = _context17.sent;
          console.log('new post url received', ((_lastGeneratePresigne3 = lastGeneratePresignedPostResponse) === null || _lastGeneratePresigne3 === void 0 ? void 0 : _lastGeneratePresigne3.expire_timestamp) - Date.now() / 1000);
        case 51:
          _context17.prev = 51;
          sessionInfo = new Blob(["Session data for timestamp: ".concat(timestamp, "\n                    \n user id: ").concat(user_id, "\n                    \n order details:\n                    \n ").concat(JSON.stringify(orderDetails))], {
            type: 'text/plain'
          });
          sessionFormData = presignedFormData("".concat(folderName, "/order_info_").concat(timestamp, ".txt"));
          sessionFormData.append('file', sessionInfo);
          console.log('uploading session info');
          _context17.next = 58;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: sessionFormData
          });
        case 58:
          // Upload HTML snapshots as separate files
          console.log('uploading html snapshots');
          _i4 = 0, _Object$entries3 = Object.entries(htmlSnapshots);
        case 60:
          if (!(_i4 < _Object$entries3.length)) {
            _context17.next = 72;
            break;
          }
          _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2), snapshotId = _Object$entries3$_i[0], htmlContent = _Object$entries3$_i[1];
          _context17.next = 64;
          return gzipHtml(htmlContent);
        case 64:
          htmlBlob = _context17.sent;
          formData = presignedFormData("".concat(folderName, "/html/").concat(snapshotId, ".html.gz"));
          formData.append('file', htmlBlob);
          _context17.next = 69;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: formData
          });
        case 69:
          _i4++;
          _context17.next = 60;
          break;
        case 72:
          // Upload screenshots
          console.log('uploading screenshots');
          _iterator4 = _createForOfIteratorHelper(storeScreenshots);
          _context17.prev = 74;
          _iterator4.s();
        case 76:
          if ((_step4 = _iterator4.n()).done) {
            _context17.next = 91;
            break;
          }
          _step4$value = _slicedToArray(_step4.value, 2), screenshotData = _step4$value[0], screenshotId = _step4$value[1];
          _context17.next = 80;
          return customFetch(screenshotData);
        case 80:
          response = _context17.sent;
          _context17.next = 83;
          return response.blob();
        case 83:
          blob = _context17.sent;
          _formData = presignedFormData("".concat(folderName, "/screenshots/").concat(screenshotId.replace(/[:.]/g, '-'), ".jpg"));
          _formData.append('file', blob);
          console.log('uploading screenshots');
          _context17.next = 89;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: _formData
          })["catch"](function () {
            throw new Error("Error: ".concat(e));
          });
        case 89:
          _context17.next = 76;
          break;
        case 91:
          _context17.next = 96;
          break;
        case 93:
          _context17.prev = 93;
          _context17.t0 = _context17["catch"](74);
          _iterator4.e(_context17.t0);
        case 96:
          _context17.prev = 96;
          _iterator4.f();
          return _context17.finish(96);
        case 99:
          // Upload interactions JSON
          console.log('uploading interactions');
          interactions_json = JSON.stringify(fullData, null, 2);
          interactionsBlob = new Blob([interactions_json], {
            type: 'application/json'
          });
          jsonFormDataFile = presignedFormData("".concat(folderName, "/interactions_").concat(timestamp, ".json"));
          jsonFormDataFile.append('file', interactionsBlob);
          _context17.next = 106;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: jsonFormDataFile
          });
        case 106:
          jsonFormData = new FormData();
          jsonFormData.append('interactions', interactions_json);
          jsonFormData.append('user_id', user_id);
          console.log('uploading interactions as a json');
          _context17.next = 112;
          return customFetch(interactions_url, {
            method: 'POST',
            body: jsonFormData
          });
        case 112:
          _context17.next = 119;
          break;
        case 114:
          _context17.prev = 114;
          _context17.t1 = _context17["catch"](51);
          startPeriodicUpload();
          console.error('Error uploading data:', _context17.t1);
          return _context17.abrupt("return", false);
        case 119:
          if (!user_id.includes(_config__WEBPACK_IMPORTED_MODULE_3__.data_collector_secret_id)) {
            _context17.next = 155;
            break;
          }
          _context17.next = 122;
          return chrome.storage.local.get({
            seen_interactions: []
          });
        case 122:
          seen_interact = _context17.sent;
          _context17.next = 125;
          return chrome.storage.local.get({
            seen_htmlSnapshots: []
          });
        case 125:
          seen_snapshots = _context17.sent;
          _context17.next = 128;
          return chrome.storage.local.get({
            seen_orderDetails: []
          });
        case 128:
          seen_orderDetails = _context17.sent;
          _context17.next = 131;
          return chrome.storage.local.get({
            seen_screenshots: []
          });
        case 131:
          seen_screen = _context17.sent;
          _context17.next = 134;
          return chrome.storage.local.get({
            seen_reasonsAnnotation: []
          });
        case 134:
          seen_ReasonsAnnotation = _context17.sent;
          seen_storeInteractions = seen_interact.interactions || [];
          seen_htmlSnapshots = seen_snapshots.htmlSnapshots || {};
          seen_storeOrderDetails = seen_orderDetails.orderDetails || [];
          seen_storeScreenshots = seen_screen.screenshots || [];
          seen_storeReasonsAnnotation = seen_ReasonsAnnotation.reasonsAnnotation || [];
          seen_storeInteractions = [].concat(_toConsumableArray(seen_storeInteractions), _toConsumableArray(storeInteractions));
          seen_htmlSnapshots = _objectSpread(_objectSpread({}, seen_htmlSnapshots), htmlSnapshots);
          seen_storeOrderDetails = [].concat(_toConsumableArray(seen_storeOrderDetails), _toConsumableArray(storeOrderDetails));
          seen_storeScreenshots = [].concat(_toConsumableArray(seen_storeScreenshots), _toConsumableArray(storeScreenshots));
          seen_storeReasonsAnnotation = [].concat(_toConsumableArray(seen_storeReasonsAnnotation), _toConsumableArray(storeReasonsAnnotation));
          _context17.next = 147;
          return chrome.storage.local.set({
            seen_interactions: seen_storeInteractions
          });
        case 147:
          _context17.next = 149;
          return chrome.storage.local.set({
            seen_htmlSnapshots: seen_htmlSnapshots
          });
        case 149:
          _context17.next = 151;
          return chrome.storage.local.set({
            seen_orderDetails: seen_storeOrderDetails
          });
        case 151:
          _context17.next = 153;
          return chrome.storage.local.set({
            seen_screenshots: seen_storeScreenshots
          });
        case 153:
          _context17.next = 155;
          return chrome.storage.local.set({
            seen_reasonsAnnotation: seen_storeReasonsAnnotation
          });
        case 155:
          lastTimestamp = null;
          chrome.storage.local.remove(['htmlSnapshots', 'orderDetails', 'screenshots', 'reasonsAnnotation', 'interactions', 'user_interaction_tracker_last_timestamp']);
          interactions.length = 0;
          screenshots.length = 0;
          reasonsAnnotation.length = 0;
          startPeriodicUpload();
          return _context17.abrupt("return", true);
        case 164:
          _context17.prev = 164;
          _context17.t2 = _context17["catch"](1);
          startPeriodicUpload();
          console.error('Error uploading data:', _context17.t2);
          return _context17.abrupt("return", false);
        case 169:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 164], [51, 114], [74, 93, 96, 99]]);
  }));
  return _uploadDataToServer.apply(this, arguments);
}
function startPeriodicUpload() {
  if (!uploadTimer) {
    console.log('startPeriodicUpload');
    uploadTimer = setInterval(uploadDataToServer_new, 10000); // 10 seconds
  }
}

// Stop the periodic upload timer
function stopPeriodicUpload() {
  if (uploadTimer) {
    // console.log('stopPeriodicUpload')
    clearInterval(uploadTimer);
    uploadTimer = false;
  }
}
if (uploadTimer == null) {
  console.log('--initializing interval--');
  startPeriodicUpload();
}
function uploadDataToServer_new() {
  return _uploadDataToServer_new.apply(this, arguments);
}
function _uploadDataToServer_new() {
  _uploadDataToServer_new = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    var _lastGeneratePresigne4, _lastGeneratePresigne5, checkInteract, checkstoreInteractions, currentTimestamp, timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, orderDetails, screen, ReasonsAnnotation, interact, storeInteractions, htmlSnapshots, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, interactionsToUpload, snapshotsToUpload, screenshotsToUpload, reasonsAnnotationToUpload, orderDetailsToUpload, fullData, _lastGeneratePresigne6, postUrlResult, sessionInfo, sessionFormData, _iterator5, _step5, _step5$value, snapshotId, htmlContent, htmlBlob, formData, _iterator6, _step6, _step6$value, screenshotData, screenshotId, response, blob, _formData2, interactions_json, interactionsBlob, jsonFormDataFile, jsonFormData, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation, currentData, newData;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          stopPeriodicUpload();
          _context18.prev = 1;
          _context18.next = 4;
          return chrome.storage.local.get({
            interactions: []
          });
        case 4:
          checkInteract = _context18.sent;
          checkstoreInteractions = checkInteract.interactions || []; // Check if there are any interactions and get the latest timestamp
          if (!(checkstoreInteractions.length === 0)) {
            _context18.next = 10;
            break;
          }
          console.log('No interactions to upload');
          startPeriodicUpload();
          return _context18.abrupt("return", false);
        case 10:
          _context18.next = 12;
          return chrome.storage.local.get({
            lastuploadTimestamp: null
          });
        case 12:
          lastuploadTimestamp = _context18.sent;
          lastuploadTimestamp = lastuploadTimestamp.lastuploadTimestamp || null;
          currentTimestamp = new Date().toISOString();
          _context18.next = 17;
          return chrome.storage.local.get({
            user_interaction_tracker_last_timestamp: null
          });
        case 17:
          lastTimestamp = _context18.sent;
          lastTimestamp = lastTimestamp.user_interaction_tracker_last_timestamp || null;
          if (lastTimestamp) console.log('lastTimestamp restored: ', lastTimestamp);
          timestamp = lastTimestamp || currentTimestamp.replace(/[:.]/g, '-');
          _context18.next = 23;
          return chrome.storage.local.set({
            user_interaction_tracker_last_timestamp: timestamp
          });
        case 23:
          _context18.next = 25;
          return chrome.storage.local.get({
            userId: ''
          });
        case 25:
          userIdResult = _context18.sent;
          currentUserId = userIdResult.userId;
          user_id = currentUserId || 'unknown';
          folderName = "".concat(_config__WEBPACK_IMPORTED_MODULE_3__.folder_name, "/USER/").concat(user_id);
          _context18.next = 31;
          return chrome.storage.local.get({
            htmlSnapshots: []
          });
        case 31:
          snapshots = _context18.sent;
          _context18.next = 34;
          return chrome.storage.local.get({
            orderDetails: []
          });
        case 34:
          orderDetails = _context18.sent;
          _context18.next = 37;
          return chrome.storage.local.get({
            screenshots: []
          });
        case 37:
          screen = _context18.sent;
          _context18.next = 40;
          return chrome.storage.local.get({
            reasonsAnnotation: []
          });
        case 40:
          ReasonsAnnotation = _context18.sent;
          _context18.next = 43;
          return chrome.storage.local.get({
            interactions: []
          });
        case 43:
          interact = _context18.sent;
          storeInteractions = interact.interactions || [];
          htmlSnapshots = snapshots.htmlSnapshots || {};
          storeOrderDetails = orderDetails.orderDetails || [];
          storeScreenshots = screen.screenshots || [];
          storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || [];
          interactionsToUpload = storeInteractions.filter(function (item) {
            return !lastuploadTimestamp || item.timestamp > lastuploadTimestamp;
          });
          snapshotsToUpload = Object.entries(htmlSnapshots).filter(function (_ref12) {
            var _ref13 = _slicedToArray(_ref12, 2),
              snapshotId = _ref13[0],
              content = _ref13[1];
            // Extract timestamp from snapshotId (format: html_${hash}_${timestamp}_${uuid})
            var timestampMatch = snapshotId.match(/_(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)_/);
            if (!timestampMatch) return true; // Include if can't parse timestamp
            var snapshotTimestamp = timestampMatch[1];
            return !lastuploadTimestamp || snapshotTimestamp > lastuploadTimestamp;
          });
          screenshotsToUpload = storeScreenshots.filter(function (_ref14) {
            var _ref15 = _slicedToArray(_ref14, 2),
              screenshotData = _ref15[0],
              screenshotId = _ref15[1];
            // Extract timestamp from screenshotId (format: screenshot_${timestamp}_${uuid})
            var timestampMatch = screenshotId.match(/screenshot_(.+?)_/);
            if (!timestampMatch) return true; // Include if can't parse timestamp
            var screenshotTimestamp = timestampMatch[1];
            return !lastuploadTimestamp || screenshotTimestamp > lastuploadTimestamp;
          });
          reasonsAnnotationToUpload = storeReasonsAnnotation.filter(function (item) {
            return !lastuploadTimestamp || item.timestamp > lastuploadTimestamp;
          });
          orderDetailsToUpload = storeOrderDetails.filter(function (item) {
            return !lastuploadTimestamp || item.timestamp > lastuploadTimestamp;
          });
          fullData = {
            interactions: interactionsToUpload,
            reasons: reasonsAnnotationToUpload,
            orderDetails: orderDetailsToUpload
          };
          if (!(!lastGeneratePresignedPostResponse || ((_lastGeneratePresigne4 = lastGeneratePresignedPostResponse) === null || _lastGeneratePresigne4 === void 0 ? void 0 : _lastGeneratePresigne4.expire_timestamp) < Date.now() / 1000 ||
          // prevent from requesting for post url over and over
          !((_lastGeneratePresigne5 = lastGeneratePresignedPostResponse) !== null && _lastGeneratePresigne5 !== void 0 && (_lastGeneratePresigne5 = _lastGeneratePresigne5.fields) !== null && _lastGeneratePresigne5 !== void 0 && _lastGeneratePresigne5.key.includes(user_id)))) {
            _context18.next = 65;
            break;
          }
          console.log('getting new post url');
          console.log("".concat(generate_presigned_post_url, "?user_id=").concat(user_id));
          _context18.next = 60;
          return customFetch("".concat(generate_presigned_post_url, "?user_id=").concat(user_id), {
            method: 'GET'
          });
        case 60:
          postUrlResult = _context18.sent;
          _context18.next = 63;
          return postUrlResult.json();
        case 63:
          lastGeneratePresignedPostResponse = _context18.sent;
          console.log('new post url received', ((_lastGeneratePresigne6 = lastGeneratePresignedPostResponse) === null || _lastGeneratePresigne6 === void 0 ? void 0 : _lastGeneratePresigne6.expire_timestamp) - Date.now() / 1000);
        case 65:
          _context18.prev = 65;
          sessionInfo = new Blob(["Session data for timestamp: ".concat(timestamp, "\n                    \n user id: ").concat(user_id, "\n                    \n order details:\n                    \n ").concat(JSON.stringify(orderDetailsToUpload))], {
            type: 'text/plain'
          });
          sessionFormData = presignedFormData("".concat(folderName, "/order_info_").concat(timestamp, ".txt"));
          sessionFormData.append('file', sessionInfo);
          console.log('uploading session info');
          _context18.next = 72;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: sessionFormData
          });
        case 72:
          // Upload HTML snapshots as separate files
          console.log('uploading html snapshots');
          _iterator5 = _createForOfIteratorHelper(snapshotsToUpload);
          _context18.prev = 74;
          _iterator5.s();
        case 76:
          if ((_step5 = _iterator5.n()).done) {
            _context18.next = 87;
            break;
          }
          _step5$value = _slicedToArray(_step5.value, 2), snapshotId = _step5$value[0], htmlContent = _step5$value[1];
          _context18.next = 80;
          return gzipHtml(htmlContent);
        case 80:
          htmlBlob = _context18.sent;
          formData = presignedFormData("".concat(folderName, "/html/").concat(snapshotId, ".html.gz"));
          formData.append('file', htmlBlob);
          _context18.next = 85;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: formData
          });
        case 85:
          _context18.next = 76;
          break;
        case 87:
          _context18.next = 92;
          break;
        case 89:
          _context18.prev = 89;
          _context18.t0 = _context18["catch"](74);
          _iterator5.e(_context18.t0);
        case 92:
          _context18.prev = 92;
          _iterator5.f();
          return _context18.finish(92);
        case 95:
          // Upload screenshots
          console.log('uploading screenshots');
          _iterator6 = _createForOfIteratorHelper(screenshotsToUpload);
          _context18.prev = 97;
          _iterator6.s();
        case 99:
          if ((_step6 = _iterator6.n()).done) {
            _context18.next = 114;
            break;
          }
          _step6$value = _slicedToArray(_step6.value, 2), screenshotData = _step6$value[0], screenshotId = _step6$value[1];
          _context18.next = 103;
          return customFetch(screenshotData);
        case 103:
          response = _context18.sent;
          _context18.next = 106;
          return response.blob();
        case 106:
          blob = _context18.sent;
          _formData2 = presignedFormData("".concat(folderName, "/screenshots/").concat(screenshotId.replace(/[:.]/g, '-'), ".jpg"));
          _formData2.append('file', blob);
          console.log('uploading screenshots');
          _context18.next = 112;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: _formData2
          })["catch"](function () {
            throw new Error("Error: ".concat(e));
          });
        case 112:
          _context18.next = 99;
          break;
        case 114:
          _context18.next = 119;
          break;
        case 116:
          _context18.prev = 116;
          _context18.t1 = _context18["catch"](97);
          _iterator6.e(_context18.t1);
        case 119:
          _context18.prev = 119;
          _iterator6.f();
          return _context18.finish(119);
        case 122:
          // Upload interactions JSON
          console.log('uploading interactions');
          interactions_json = JSON.stringify(fullData, null, 2);
          interactionsBlob = new Blob([interactions_json], {
            type: 'application/json'
          });
          jsonFormDataFile = presignedFormData("".concat(folderName, "/interactions_").concat(timestamp, ".json"));
          jsonFormDataFile.append('file', interactionsBlob);
          _context18.next = 129;
          return customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: jsonFormDataFile
          });
        case 129:
          jsonFormData = new FormData();
          jsonFormData.append('interactions', interactions_json);
          jsonFormData.append('user_id', user_id);
          console.log('uploading interactions as a json');
          _context18.next = 135;
          return customFetch(interactions_url, {
            method: 'POST',
            body: jsonFormData
          });
        case 135:
          _context18.next = 142;
          break;
        case 137:
          _context18.prev = 137;
          _context18.t2 = _context18["catch"](65);
          startPeriodicUpload();
          console.error('Error uploading data:', _context18.t2);
          return _context18.abrupt("return", false);
        case 142:
          if (!user_id.includes(_config__WEBPACK_IMPORTED_MODULE_3__.data_collector_secret_id)) {
            _context18.next = 178;
            break;
          }
          _context18.next = 145;
          return chrome.storage.local.get({
            seen_interactions: []
          });
        case 145:
          seen_interact = _context18.sent;
          _context18.next = 148;
          return chrome.storage.local.get({
            seen_htmlSnapshots: []
          });
        case 148:
          seen_snapshots = _context18.sent;
          _context18.next = 151;
          return chrome.storage.local.get({
            seen_orderDetails: []
          });
        case 151:
          seen_orderDetails = _context18.sent;
          _context18.next = 154;
          return chrome.storage.local.get({
            seen_screenshots: []
          });
        case 154:
          seen_screen = _context18.sent;
          _context18.next = 157;
          return chrome.storage.local.get({
            seen_reasonsAnnotation: []
          });
        case 157:
          seen_ReasonsAnnotation = _context18.sent;
          seen_storeInteractions = seen_interact.interactions || [];
          seen_htmlSnapshots = seen_snapshots.htmlSnapshots || {};
          seen_storeOrderDetails = seen_orderDetails.orderDetails || [];
          seen_storeScreenshots = seen_screen.screenshots || [];
          seen_storeReasonsAnnotation = seen_ReasonsAnnotation.reasonsAnnotation || [];
          seen_storeInteractions = [].concat(_toConsumableArray(seen_storeInteractions), _toConsumableArray(storeInteractions));
          seen_htmlSnapshots = _objectSpread(_objectSpread({}, seen_htmlSnapshots), htmlSnapshots);
          seen_storeOrderDetails = [].concat(_toConsumableArray(seen_storeOrderDetails), _toConsumableArray(storeOrderDetails));
          seen_storeScreenshots = [].concat(_toConsumableArray(seen_storeScreenshots), _toConsumableArray(storeScreenshots));
          seen_storeReasonsAnnotation = [].concat(_toConsumableArray(seen_storeReasonsAnnotation), _toConsumableArray(storeReasonsAnnotation));
          _context18.next = 170;
          return chrome.storage.local.set({
            seen_interactions: seen_storeInteractions
          });
        case 170:
          _context18.next = 172;
          return chrome.storage.local.set({
            seen_htmlSnapshots: seen_htmlSnapshots
          });
        case 172:
          _context18.next = 174;
          return chrome.storage.local.set({
            seen_orderDetails: seen_storeOrderDetails
          });
        case 174:
          _context18.next = 176;
          return chrome.storage.local.set({
            seen_screenshots: seen_storeScreenshots
          });
        case 176:
          _context18.next = 178;
          return chrome.storage.local.set({
            seen_reasonsAnnotation: seen_storeReasonsAnnotation
          });
        case 178:
          lastTimestamp = null;
          lastuploadTimestamp = currentTimestamp;
          _context18.next = 182;
          return chrome.storage.local.set({
            lastuploadTimestamp: lastuploadTimestamp
          });
        case 182:
          _context18.next = 184;
          return chrome.storage.local.get({
            interactions: [],
            htmlSnapshots: {},
            orderDetails: [],
            screenshots: [],
            reasonsAnnotation: []
          });
        case 184:
          currentData = _context18.sent;
          newData = {
            interactions: currentData.interactions.filter(function (item) {
              return item.timestamp > currentTimestamp;
            }),
            htmlSnapshots: Object.fromEntries(Object.entries(currentData.htmlSnapshots).filter(function (_ref16) {
              var _ref17 = _slicedToArray(_ref16, 1),
                snapshotId = _ref17[0];
              var timestampMatch = snapshotId.match(/_(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)_/);
              if (!timestampMatch) return true;
              var snapshotTimestamp = timestampMatch[1];
              return snapshotTimestamp > currentTimestamp;
            })),
            orderDetails: currentData.orderDetails.filter(function (item) {
              return item.timestamp > currentTimestamp;
            }),
            screenshots: currentData.screenshots.filter(function (_ref18) {
              var _ref19 = _slicedToArray(_ref18, 2),
                _ = _ref19[0],
                screenshotId = _ref19[1];
              var timestampMatch = screenshotId.match(/screenshot_(.+?)_/);
              if (!timestampMatch) return true;
              var screenshotTimestamp = timestampMatch[1];
              return screenshotTimestamp > currentTimestamp;
            }),
            reasonsAnnotation: currentData.reasonsAnnotation.filter(function (item) {
              return item.timestamp > currentTimestamp;
            })
          };
          _context18.next = 188;
          return chrome.storage.local.set(newData);
        case 188:
          // chrome.storage.local.remove([
          //   'htmlSnapshots',
          //   'orderDetails',
          //   'screenshots',
          //   'reasonsAnnotation',
          //   'interactions',
          //   'user_interaction_tracker_last_timestamp'
          // ])
          // interactions.length = 0
          // screenshots.length = 0
          // reasonsAnnotation.length = 0

          startPeriodicUpload();
          return _context18.abrupt("return", true);
        case 192:
          _context18.prev = 192;
          _context18.t3 = _context18["catch"](1);
          startPeriodicUpload();
          console.error('Error uploading data:', _context18.t3);
          return _context18.abrupt("return", false);
        case 197:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 192], [65, 137], [74, 89, 92, 95], [97, 116, 119, 122]]);
  }));
  return _uploadDataToServer_new.apply(this, arguments);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO1lBQUEsQ0FDN0M7VUFDRixDQUFDO1VBQUFlLFVBQUEsQ0FBQTFhLElBQUE7VUFBQSxPQUNLN0csTUFBTSxDQUFDaU4sT0FBTyxDQUFDQyxLQUFLLENBQUNFLEdBQUcsQ0FBQ2lVLE9BQU8sQ0FBQztRQUFBO1VBQ3ZDO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE3QixtQkFBbUIsQ0FBQyxDQUFDO1VBQUEsT0FBQStCLFVBQUEsQ0FBQS9hLE1BQUEsV0FFZCxJQUFJO1FBQUE7VUFBQSthLFVBQUEsQ0FBQXJZLElBQUE7VUFBQXFZLFVBQUEsQ0FBQXhLLEVBQUEsR0FBQXdLLFVBQUE7VUFFWC9CLG1CQUFtQixDQUFDLENBQUM7VUFDckJqbUIsT0FBTyxDQUFDcU0sS0FBSyxDQUFDLHVCQUF1QixFQUFBMmIsVUFBQSxDQUFBeEssRUFBTyxDQUFDO1VBQUEsT0FBQXdLLFVBQUEsQ0FBQS9hLE1BQUEsV0FDdEMsS0FBSztRQUFBO1FBQUE7VUFBQSxPQUFBK2EsVUFBQSxDQUFBbFksSUFBQTtNQUFBO0lBQUEsR0FBQThXLFNBQUE7RUFBQSxDQUVmO0VBQUEsT0FBQUQsdUJBQUEsQ0FBQXhWLEtBQUEsT0FBQWpMLFNBQUE7QUFBQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9qc3ppcC9kaXN0L2pzemlwLm1pbi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnNjc2YTY2NTE0NDM5OGU2OTY3NTY3YTJiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlID0gJ2FtYXpvbi5jb20nXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc2BcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLydcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJ1xuXVxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKTpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSlcIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSk6bm90KDpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSkpXCIsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwibGk6aGFzKGlucHV0W3R5cGU9J2NoZWNrYm94J10pXCIsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsIGRhdGE6IHsgdGl0bGU6IHRleHQsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJsaTpub3QoOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKSlcIixcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsIGRhdGE6IHsgdGl0bGU6IHRleHQsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eScsXG4gIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gIGNsYXNzOiAncHJvZHVjdC1hZGQtdG8tY2FydCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYnV5LW5vdyddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdidXlfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICBzZWxlY3RvcjogJyNidXlCb3hBY2NvcmRpb24gPiBkaXYuYS1ib3guY2Vsd2lkZ2V0JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJyNuYXZiYXItbWFpbiAjbmF2LXNlYXJjaC1iYXItZm9ybSBpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94J1xuICAgICAgKT8udmFsdWVcbiAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIlxuICAgICAgICAgICAgICAgICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnQnLCBkYXRhOiB7IHNlbGVjdGlvbjogbnVsbCB9IH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb25fc3RyaW5nID0gJydcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25fc3RyaW5nICs9IHMuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25fc3RyaW5nICs9ICcsJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudCcsIGRhdGE6IHsgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc3RyaW5nIH0gfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICAgICBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIlxuICAgICAgICAgICAgICAgICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxuICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHNlbGVjdGlvbjogbnVsbCB9IH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb25fc3RyaW5nID0gJydcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25fc3RyaW5nICs9IHMuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25fc3RyaW5nICs9ICcsJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc3RyaW5nIH0gfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3ByaWNlUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIC8vIDIgY2FzZXM6IHNlbGVjdGlvbiAvIHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwXzM2LXRpdGxlLCBkaXYuc2YtcmVmaW5lbWVudC1oZWFkaW5nIHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDE6IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy1sb3dlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9taW5fdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRleHQpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtdXBwZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWF4X3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2Ytc3VibWl0LXJhbmdlLWJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJtaXRfcHJpY2VfcmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdHbycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmVzZXQtcmFuZ2UtbGluayBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jlc2V0X3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyXG4gICAgICAgICAgICAgICAgICBjb25zdCByYW5nZUVtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknXG4gICAgICAgICAgICAgICAgICApIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBzZWxlY3Rpb246IHJhbmdlRW0uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJykgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDFcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAgICAgXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cbiAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlOiAnUHJpY2UnLCBzZWxlY3Rpb246ICcnIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb25fc3RyaW5nID0gJydcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzIG9mIHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25fc3RyaW5nICs9IHMuaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25fc3RyaW5nICs9ICcsJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHNlbGVjdGlvbjogc2VsZWN0aW9uX3N0cmluZyB9IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtcHJvZHVjdC1pbWFnZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZScsXG4gICAgbWF0Y2hfdGV4dDogJycsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmlubmVyVGV4dFxuICAgICAgY29uc3QgcHJpY2UgPSBlbVxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIiNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPSdhcGV4X2RwX2NlbnRlcl9jb2x1bW4nXSA+IGRpdltjbGFzcz0nb2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkJ10gPiBkaXY6bm90KFtzdHlsZT0nZGlzcGxheTpub25lOyddKTpub3QoW3N0eWxlPVxcXCJkaXNwbGF5OiBub25lO1xcXCJdKSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPSdhcGV4X2RwX2NlbnRlcl9jb2x1bW4nXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J2FwZXhfd2l0aF9yaW9fY3gnXSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IGRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUuYW9rLWFsaWduLWNlbnRlci5hb2stcmVsYXRpdmUgPiBzcGFuLmFvay1vZmZzY3JlZW5cIlxuICAgICAgICApXG4gICAgICAgID8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAudHJpbSgpXG4gICAgICBjb25zdCBhc2luID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpLnZhbHVlXG4gICAgICBjb25zdCBidWxsZXRfbGlzdCA9IGVtXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwnKVxuICAgICAgICA/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJywgZGF0YTogeyB0aXRsZSwgcHJpY2UsIGFzaW4sIGJ1bGxldF9saXN0IH0gfVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXZlcmFnZUN1c3RvbWVyUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lLmFvay1hbGlnbi1jZW50ZXIuYW9rLXJlbGF0aXZlID4gc3Bhbi5hb2stb2Zmc2NyZWVuLCAjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9XCJhcGV4X3dpdGhfcmlvX2N4XCJdICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgbGFiZWwuYS1mb3JtLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBzcGFuLnNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIHNwYW46bm90KC5hb2staGlkZGVuKSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bCwgI2ZlYXR1cmVidWxsZXRzX2ZlYXR1cmVfZGl2IHVsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbToge30nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hdHRhY2gtd2FycmFudHktYnV0dG9uLXJvdycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF9wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgUHJvdGVjdGlvbidcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lOb0NvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25vX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ05vIFRoYW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvY2FydC92aWV3Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYXAvc2lnbmluJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2J1eS9zcGMvaGFuZGxlcnMvZGlzcGxheS5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfVxuXVxuIiwiaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGUgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoXG4gICAgdXJsICYmXG4gICAgdXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSAmJlxuICAgICFmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vSW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKCkge1xuICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICBjb25zdCBtZXRhRGF0YSA9IGh0bWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG4gIGNvbnN0IG1ldGFOYW1lID0gaHRtbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgcmV0dXJuIHtcbiAgICBtZXRhRGF0YTogbWV0YURhdGEsXG4gICAgbWV0YU5hbWU6IG1ldGFOYW1lXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZXh0ZW5zaW9uLWNsaWNrYWJsZS1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2V4dGVuc2lvbi1jbGlja2FibGUtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZXh0ZW5zaW9uLWNsaWNrYWJsZS1tYXJrZXInKVxuICB9KVxufVxuIiwiLyohXG5cbkpTWmlwIHYzLjEwLjEgLSBBIEphdmFTY3JpcHQgY2xhc3MgZm9yIGdlbmVyYXRpbmcgYW5kIHJlYWRpbmcgemlwIGZpbGVzXG48aHR0cDovL3N0dWFydGsuY29tL2pzemlwPlxuXG4oYykgMjAwOS0yMDE2IFN0dWFydCBLbmlnaHRsZXkgPHN0dWFydCBbYXRdIHN0dWFydGsuY29tPlxuRHVhbCBsaWNlbmNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2Ugb3IgR1BMdjMuIFNlZSBodHRwczovL3Jhdy5naXRodWIuY29tL1N0dWsvanN6aXAvbWFpbi9MSUNFTlNFLm1hcmtkb3duLlxuXG5KU1ppcCB1c2VzIHRoZSBsaWJyYXJ5IHBha28gcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIDpcbmh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrby9ibG9iL21haW4vTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD1lKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsZSl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFlJiZ0KXJldHVybiB0KHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIG49bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBuLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsbn12YXIgaT1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwoaS5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciB0PWFbcl1bMV1bZV07cmV0dXJuIHUodHx8ZSl9LGksaS5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZT0wO2U8aC5sZW5ndGg7ZSsrKXUoaFtlXSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9ZShcIi4vdXRpbHNcIiksYz1lKFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyLG4saSxzLGEsbyxoPVtdLHU9MCxsPWUubGVuZ3RoLGY9bCxjPVwic3RyaW5nXCIhPT1kLmdldFR5cGVPZihlKTt1PGUubGVuZ3RoOylmPWwtdSxuPWM/KHQ9ZVt1KytdLHI9dTxsP2VbdSsrXTowLHU8bD9lW3UrK106MCk6KHQ9ZS5jaGFyQ29kZUF0KHUrKykscj11PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCksaT10Pj4yLHM9KDMmdCk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8bj4+Njo2NCxvPTI8Zj82MyZuOjY0LGgucHVzaChwLmNoYXJBdChpKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYoZS5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyooZT1lLnJlcGxhY2UoL1teQS1aYS16MC05Ky89XS9nLFwiXCIpKS5sZW5ndGgvNDtpZihlLmNoYXJBdChlLmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLGUuY2hhckF0KGUubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWMudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288ZS5sZW5ndGg7KXQ9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpPDwyfChpPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSk+PjQscj0oMTUmaSk8PDR8KHM9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpKT4+MixuPSgzJnMpPDw2fChhPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSksbFtoKytdPXQsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1uKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL2V4dGVybmFsXCIpLGk9ZShcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz1lKFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxhPWUoXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIik7ZnVuY3Rpb24gbyhlLHQscixuLGkpe3RoaXMuY29tcHJlc3NlZFNpemU9ZSx0aGlzLnVuY29tcHJlc3NlZFNpemU9dCx0aGlzLmNyYzMyPXIsdGhpcy5jb21wcmVzc2lvbj1uLHRoaXMuY29tcHJlc3NlZENvbnRlbnQ9aX1vLnByb3RvdHlwZT17Z2V0Q29udGVudFdvcmtlcjpmdW5jdGlvbigpe3ZhciBlPW5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS5waXBlKHRoaXMuY29tcHJlc3Npb24udW5jb21wcmVzc1dvcmtlcigpKS5waXBlKG5ldyBhKFwiZGF0YV9sZW5ndGhcIikpLHQ9dGhpcztyZXR1cm4gZS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aWYodGhpcy5zdHJlYW1JbmZvLmRhdGFfbGVuZ3RoIT09dC51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyA6IHVuY29tcHJlc3NlZCBkYXRhIHNpemUgbWlzbWF0Y2hcIil9KSxlfSxnZXRDb21wcmVzc2VkV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzZWRTaXplXCIsdGhpcy5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJ1bmNvbXByZXNzZWRTaXplXCIsdGhpcy51bmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsdGhpcy5jcmMzMikud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHRoaXMuY29tcHJlc3Npb24pfX0sby5jcmVhdGVXb3JrZXJGcm9tPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5waXBlKG5ldyBzKS5waXBlKG5ldyBhKFwidW5jb21wcmVzc2VkU2l6ZVwiKSkucGlwZSh0LmNvbXByZXNzV29ya2VyKHIpKS5waXBlKG5ldyBhKFwiY29tcHJlc3NlZFNpemVcIikpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIix0KX0sdC5leHBvcnRzPW99LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCI6MjYsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6Mjd9XSwzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ci5TVE9SRT17bWFnaWM6XCJcXDBcXDBcIixjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgbihcIlNUT1JFIGNvbXByZXNzaW9uXCIpfSx1bmNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKFwiU1RPUkUgZGVjb21wcmVzc2lvblwiKX19LHIuREVGTEFURT1lKFwiLi9mbGF0ZVwiKX0se1wiLi9mbGF0ZVwiOjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6Mjh9XSw0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vdXRpbHNcIik7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwIT09ZSYmZS5sZW5ndGg/XCJzdHJpbmdcIiE9PW4uZ2V0VHlwZU9mKGUpP2Z1bmN0aW9uKGUsdCxyLG4pe3ZhciBpPW8scz1uK3I7ZV49LTE7Zm9yKHZhciBhPW47YTxzO2ErKyllPWU+Pj44XmlbMjU1JihlXnRbYV0pXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTpmdW5jdGlvbihlLHQscixuKXt2YXIgaT1vLHM9bityO2VePS0xO2Zvcih2YXIgYT1uO2E8czthKyspZT1lPj4+OF5pWzI1NSYoZV50LmNoYXJDb2RlQXQoYSkpXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTowfX0se1wiLi91dGlsc1wiOjMyfV0sNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuYmFzZTY0PSExLHIuYmluYXJ5PSExLHIuZGlyPSExLHIuY3JlYXRlRm9sZGVycz0hMCxyLmRhdGU9bnVsbCxyLmNvbXByZXNzaW9uPW51bGwsci5jb21wcmVzc2lvbk9wdGlvbnM9bnVsbCxyLmNvbW1lbnQ9bnVsbCxyLnVuaXhQZXJtaXNzaW9ucz1udWxsLHIuZG9zUGVybWlzc2lvbnM9bnVsbH0se31dLDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1udWxsO249XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2U/UHJvbWlzZTplKFwibGllXCIpLHQuZXhwb3J0cz17UHJvbWlzZTpufX0se2xpZTozN31dLDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDMyQXJyYXksaT1lKFwicGFrb1wiKSxzPWUoXCIuL3V0aWxzXCIpLGE9ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksbz1uP1widWludDhhcnJheVwiOlwiYXJyYXlcIjtmdW5jdGlvbiBoKGUsdCl7YS5jYWxsKHRoaXMsXCJGbGF0ZVdvcmtlci9cIitlKSx0aGlzLl9wYWtvPW51bGwsdGhpcy5fcGFrb0FjdGlvbj1lLHRoaXMuX3Bha29PcHRpb25zPXQsdGhpcy5tZXRhPXt9fXIubWFnaWM9XCJcXGJcXDBcIixzLmluaGVyaXRzKGgsYSksaC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMubWV0YT1lLm1ldGEsbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2gocy50cmFuc2Zvcm1UbyhvLGUuZGF0YSksITEpfSxoLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmZsdXNoLmNhbGwodGhpcyksbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2goW10sITApfSxoLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuX3Bha289bnVsbH0saC5wcm90b3R5cGUuX2NyZWF0ZVBha289ZnVuY3Rpb24oKXt0aGlzLl9wYWtvPW5ldyBpW3RoaXMuX3Bha29BY3Rpb25dKHtyYXc6ITAsbGV2ZWw6dGhpcy5fcGFrb09wdGlvbnMubGV2ZWx8fC0xfSk7dmFyIHQ9dGhpczt0aGlzLl9wYWtvLm9uRGF0YT1mdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOnQubWV0YX0pfX0sci5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGgoXCJEZWZsYXRlXCIsZSl9LHIudW5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbigpe3JldHVybiBuZXcgaChcIkluZmxhdGVcIix7fSl9fSx7XCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3V0aWxzXCI6MzIscGFrbzozOH1dLDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBBKGUsdCl7dmFyIHIsbj1cIlwiO2ZvcihyPTA7cjx0O3IrKyluKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZlKSxlPj4+PTg7cmV0dXJuIG59ZnVuY3Rpb24gbihlLHQscixuLGkscyl7dmFyIGEsbyxoPWUuZmlsZSx1PWUuY29tcHJlc3Npb24sbD1zIT09Ty51dGY4ZW5jb2RlLGY9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoaC5uYW1lKSksYz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGgubmFtZSkpLGQ9aC5jb21tZW50LHA9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoZCkpLG09SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShkKSksXz1jLmxlbmd0aCE9PWgubmFtZS5sZW5ndGgsZz1tLmxlbmd0aCE9PWQubGVuZ3RoLGI9XCJcIix2PVwiXCIseT1cIlwiLHc9aC5kaXIsaz1oLmRhdGUseD17Y3JjMzI6MCxjb21wcmVzc2VkU2l6ZTowLHVuY29tcHJlc3NlZFNpemU6MH07dCYmIXJ8fCh4LmNyYzMyPWUuY3JjMzIseC5jb21wcmVzc2VkU2l6ZT1lLmNvbXByZXNzZWRTaXplLHgudW5jb21wcmVzc2VkU2l6ZT1lLnVuY29tcHJlc3NlZFNpemUpO3ZhciBTPTA7dCYmKFN8PTgpLGx8fCFfJiYhZ3x8KFN8PTIwNDgpO3ZhciB6PTAsQz0wO3cmJih6fD0xNiksXCJVTklYXCI9PT1pPyhDPTc5OCx6fD1mdW5jdGlvbihlLHQpe3ZhciByPWU7cmV0dXJuIGV8fChyPXQ/MTY4OTM6MzMyMDQpLCg2NTUzNSZyKTw8MTZ9KGgudW5peFBlcm1pc3Npb25zLHcpKTooQz0yMCx6fD1mdW5jdGlvbihlKXtyZXR1cm4gNjMmKGV8fDApfShoLmRvc1Blcm1pc3Npb25zKSksYT1rLmdldFVUQ0hvdXJzKCksYTw8PTYsYXw9ay5nZXRVVENNaW51dGVzKCksYTw8PTUsYXw9ay5nZXRVVENTZWNvbmRzKCkvMixvPWsuZ2V0VVRDRnVsbFllYXIoKS0xOTgwLG88PD00LG98PWsuZ2V0VVRDTW9udGgoKSsxLG88PD01LG98PWsuZ2V0VVRDRGF0ZSgpLF8mJih2PUEoMSwxKStBKEIoZiksNCkrYyxiKz1cInVwXCIrQSh2Lmxlbmd0aCwyKSt2KSxnJiYoeT1BKDEsMSkrQShCKHApLDQpK20sYis9XCJ1Y1wiK0EoeS5sZW5ndGgsMikreSk7dmFyIEU9XCJcIjtyZXR1cm4gRSs9XCJcXG5cXDBcIixFKz1BKFMsMiksRSs9dS5tYWdpYyxFKz1BKGEsMiksRSs9QShvLDIpLEUrPUEoeC5jcmMzMiw0KSxFKz1BKHguY29tcHJlc3NlZFNpemUsNCksRSs9QSh4LnVuY29tcHJlc3NlZFNpemUsNCksRSs9QShmLmxlbmd0aCwyKSxFKz1BKGIubGVuZ3RoLDIpLHtmaWxlUmVjb3JkOlIuTE9DQUxfRklMRV9IRUFERVIrRStmK2IsZGlyUmVjb3JkOlIuQ0VOVFJBTF9GSUxFX0hFQURFUitBKEMsMikrRStBKHAubGVuZ3RoLDIpK1wiXFwwXFwwXFwwXFwwXCIrQSh6LDQpK0Eobiw0KStmK2IrcH19dmFyIEk9ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLE89ZShcIi4uL3V0ZjhcIiksQj1lKFwiLi4vY3JjMzJcIiksUj1lKFwiLi4vc2lnbmF0dXJlXCIpO2Z1bmN0aW9uIHMoZSx0LHIsbil7aS5jYWxsKHRoaXMsXCJaaXBGaWxlV29ya2VyXCIpLHRoaXMuYnl0ZXNXcml0dGVuPTAsdGhpcy56aXBDb21tZW50PXQsdGhpcy56aXBQbGF0Zm9ybT1yLHRoaXMuZW5jb2RlRmlsZU5hbWU9bix0aGlzLnN0cmVhbUZpbGVzPWUsdGhpcy5hY2N1bXVsYXRlPSExLHRoaXMuY29udGVudEJ1ZmZlcj1bXSx0aGlzLmRpclJlY29yZHM9W10sdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PTAsdGhpcy5lbnRyaWVzQ291bnQ9MCx0aGlzLmN1cnJlbnRGaWxlPW51bGwsdGhpcy5fc291cmNlcz1bXX1JLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlKXt2YXIgdD1lLm1ldGEucGVyY2VudHx8MCxyPXRoaXMuZW50cmllc0NvdW50LG49dGhpcy5fc291cmNlcy5sZW5ndGg7dGhpcy5hY2N1bXVsYXRlP3RoaXMuY29udGVudEJ1ZmZlci5wdXNoKGUpOih0aGlzLmJ5dGVzV3JpdHRlbis9ZS5kYXRhLmxlbmd0aCxpLnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcyx7ZGF0YTplLmRhdGEsbWV0YTp7Y3VycmVudEZpbGU6dGhpcy5jdXJyZW50RmlsZSxwZXJjZW50OnI/KHQrMTAwKihyLW4tMSkpL3I6MTAwfX0pKX0scy5wcm90b3R5cGUub3BlbmVkU291cmNlPWZ1bmN0aW9uKGUpe3RoaXMuY3VycmVudFNvdXJjZU9mZnNldD10aGlzLmJ5dGVzV3JpdHRlbix0aGlzLmN1cnJlbnRGaWxlPWUuZmlsZS5uYW1lO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyO2lmKHQpe3ZhciByPW4oZSx0LCExLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pfWVsc2UgdGhpcy5hY2N1bXVsYXRlPSEwfSxzLnByb3RvdHlwZS5jbG9zZWRTb3VyY2U9ZnVuY3Rpb24oZSl7dGhpcy5hY2N1bXVsYXRlPSExO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyLHI9bihlLHQsITAsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7aWYodGhpcy5kaXJSZWNvcmRzLnB1c2goci5kaXJSZWNvcmQpLHQpdGhpcy5wdXNoKHtkYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBSLkRBVEFfREVTQ1JJUFRPUitBKGUuY3JjMzIsNCkrQShlLmNvbXByZXNzZWRTaXplLDQpK0EoZS51bmNvbXByZXNzZWRTaXplLDQpfShlKSxtZXRhOntwZXJjZW50OjEwMH19KTtlbHNlIGZvcih0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KTt0aGlzLmNvbnRlbnRCdWZmZXIubGVuZ3RoOyl0aGlzLnB1c2godGhpcy5jb250ZW50QnVmZmVyLnNoaWZ0KCkpO3RoaXMuY3VycmVudEZpbGU9bnVsbH0scy5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5ieXRlc1dyaXR0ZW4sdD0wO3Q8dGhpcy5kaXJSZWNvcmRzLmxlbmd0aDt0KyspdGhpcy5wdXNoKHtkYXRhOnRoaXMuZGlyUmVjb3Jkc1t0XSxtZXRhOntwZXJjZW50OjEwMH19KTt2YXIgcj10aGlzLmJ5dGVzV3JpdHRlbi1lLG49ZnVuY3Rpb24oZSx0LHIsbixpKXt2YXIgcz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsaShuKSk7cmV0dXJuIFIuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EK1wiXFwwXFwwXFwwXFwwXCIrQShlLDIpK0EoZSwyKStBKHQsNCkrQShyLDQpK0Eocy5sZW5ndGgsMikrc30odGhpcy5kaXJSZWNvcmRzLmxlbmd0aCxyLGUsdGhpcy56aXBDb21tZW50LHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpuLG1ldGE6e3BlcmNlbnQ6MTAwfX0pfSxzLnByb3RvdHlwZS5wcmVwYXJlTmV4dFNvdXJjZT1mdW5jdGlvbigpe3RoaXMucHJldmlvdXM9dGhpcy5fc291cmNlcy5zaGlmdCgpLHRoaXMub3BlbmVkU291cmNlKHRoaXMucHJldmlvdXMuc3RyZWFtSW5mbyksdGhpcy5pc1BhdXNlZD90aGlzLnByZXZpb3VzLnBhdXNlKCk6dGhpcy5wcmV2aW91cy5yZXN1bWUoKX0scy5wcm90b3R5cGUucmVnaXN0ZXJQcmV2aW91cz1mdW5jdGlvbihlKXt0aGlzLl9zb3VyY2VzLnB1c2goZSk7dmFyIHQ9dGhpcztyZXR1cm4gZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnByb2Nlc3NDaHVuayhlKX0pLGUub24oXCJlbmRcIixmdW5jdGlvbigpe3QuY2xvc2VkU291cmNlKHQucHJldmlvdXMuc3RyZWFtSW5mbyksdC5fc291cmNlcy5sZW5ndGg/dC5wcmVwYXJlTmV4dFNvdXJjZSgpOnQuZW5kKCl9KSxlLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0LmVycm9yKGUpfSksdGhpc30scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKCF0aGlzLnByZXZpb3VzJiZ0aGlzLl9zb3VyY2VzLmxlbmd0aD8odGhpcy5wcmVwYXJlTmV4dFNvdXJjZSgpLCEwKTp0aGlzLnByZXZpb3VzfHx0aGlzLl9zb3VyY2VzLmxlbmd0aHx8dGhpcy5nZW5lcmF0ZWRFcnJvcj92b2lkIDA6KHRoaXMuZW5kKCksITApKX0scy5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fc291cmNlcztpZighaS5wcm90b3R5cGUuZXJyb3IuY2FsbCh0aGlzLGUpKXJldHVybiExO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXRyeXt0W3JdLmVycm9yKGUpfWNhdGNoKGUpe31yZXR1cm4hMH0scy5wcm90b3R5cGUubG9jaz1mdW5jdGlvbigpe2kucHJvdG90eXBlLmxvY2suY2FsbCh0aGlzKTtmb3IodmFyIGU9dGhpcy5fc291cmNlcyx0PTA7dDxlLmxlbmd0aDt0KyspZVt0XS5sb2NrKCl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi9zaWduYXR1cmVcIjoyMyxcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGY4XCI6MzEsXCIuLi91dGlsc1wiOjMyfV0sOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuLi9jb21wcmVzc2lvbnNcIiksbj1lKFwiLi9aaXBGaWxlV29ya2VyXCIpO3IuZ2VuZXJhdGVXb3JrZXI9ZnVuY3Rpb24oZSxhLHQpe3ZhciBvPW5ldyBuKGEuc3RyZWFtRmlsZXMsdCxhLnBsYXRmb3JtLGEuZW5jb2RlRmlsZU5hbWUpLGg9MDt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7aCsrO3ZhciByPWZ1bmN0aW9uKGUsdCl7dmFyIHI9ZXx8dCxuPXVbcl07aWYoIW4pdGhyb3cgbmV3IEVycm9yKHIrXCIgaXMgbm90IGEgdmFsaWQgY29tcHJlc3Npb24gbWV0aG9kICFcIik7cmV0dXJuIG59KHQub3B0aW9ucy5jb21wcmVzc2lvbixhLmNvbXByZXNzaW9uKSxuPXQub3B0aW9ucy5jb21wcmVzc2lvbk9wdGlvbnN8fGEuY29tcHJlc3Npb25PcHRpb25zfHx7fSxpPXQuZGlyLHM9dC5kYXRlO3QuX2NvbXByZXNzV29ya2VyKHIsbikud2l0aFN0cmVhbUluZm8oXCJmaWxlXCIse25hbWU6ZSxkaXI6aSxkYXRlOnMsY29tbWVudDp0LmNvbW1lbnR8fFwiXCIsdW5peFBlcm1pc3Npb25zOnQudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOnQuZG9zUGVybWlzc2lvbnN9KS5waXBlKG8pfSksby5lbnRyaWVzQ291bnQ9aH1jYXRjaChlKXtvLmVycm9yKGUpfXJldHVybiBvfX0se1wiLi4vY29tcHJlc3Npb25zXCI6MyxcIi4vWmlwRmlsZVdvcmtlclwiOjh9XSwxMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG47aWYoYXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29uc3RydWN0b3Igd2l0aCBwYXJhbWV0ZXJzIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpO3RoaXMuZmlsZXM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmNvbW1lbnQ9bnVsbCx0aGlzLnJvb3Q9XCJcIix0aGlzLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IG47Zm9yKHZhciB0IGluIHRoaXMpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1t0XSYmKGVbdF09dGhpc1t0XSk7cmV0dXJuIGV9fShuLnByb3RvdHlwZT1lKFwiLi9vYmplY3RcIikpLmxvYWRBc3luYz1lKFwiLi9sb2FkXCIpLG4uc3VwcG9ydD1lKFwiLi9zdXBwb3J0XCIpLG4uZGVmYXVsdHM9ZShcIi4vZGVmYXVsdHNcIiksbi52ZXJzaW9uPVwiMy4xMC4xXCIsbi5sb2FkQXN5bmM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4obmV3IG4pLmxvYWRBc3luYyhlLHQpfSxuLmV4dGVybmFsPWUoXCIuL2V4dGVybmFsXCIpLHQuZXhwb3J0cz1ufSx7XCIuL2RlZmF1bHRzXCI6NSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9sb2FkXCI6MTEsXCIuL29iamVjdFwiOjE1LFwiLi9zdXBwb3J0XCI6MzB9XSwxMTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuL3V0aWxzXCIpLGk9ZShcIi4vZXh0ZXJuYWxcIiksbj1lKFwiLi91dGY4XCIpLHM9ZShcIi4vemlwRW50cmllc1wiKSxhPWUoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLGw9ZShcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gZihuKXtyZXR1cm4gbmV3IGkuUHJvbWlzZShmdW5jdGlvbihlLHQpe3ZhciByPW4uZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBhKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0KGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PW4uZGVjb21wcmVzc2VkLmNyYzMyP3QobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTplKCl9KS5yZXN1bWUoKX0pfXQuZXhwb3J0cz1mdW5jdGlvbihlLG8pe3ZhciBoPXRoaXM7cmV0dXJuIG89dS5leHRlbmQob3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm4udXRmOGRlY29kZX0pLGwuaXNOb2RlJiZsLmlzU3RyZWFtKGUpP2kuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6dS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIixlLCEwLG8ub3B0aW1pemVkQmluYXJ5U3RyaW5nLG8uYmFzZTY0KS50aGVuKGZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBzKG8pO3JldHVybiB0LmxvYWQoZSksdH0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9W2kuUHJvbWlzZS5yZXNvbHZlKGUpXSxyPWUuZmlsZXM7aWYoby5jaGVja0NSQzMyKWZvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXQucHVzaChmKHJbbl0pKTtyZXR1cm4gaS5Qcm9taXNlLmFsbCh0KX0pLnRoZW4oZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc2hpZnQoKSxyPXQuZmlsZXMsbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dLHM9aS5maWxlTmFtZVN0cixhPXUucmVzb2x2ZShpLmZpbGVOYW1lU3RyKTtoLmZpbGUoYSxpLmRlY29tcHJlc3NlZCx7YmluYXJ5OiEwLG9wdGltaXplZEJpbmFyeVN0cmluZzohMCxkYXRlOmkuZGF0ZSxkaXI6aS5kaXIsY29tbWVudDppLmZpbGVDb21tZW50U3RyLmxlbmd0aD9pLmZpbGVDb21tZW50U3RyOm51bGwsdW5peFBlcm1pc3Npb25zOmkudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOmkuZG9zUGVybWlzc2lvbnMsY3JlYXRlRm9sZGVyczpvLmNyZWF0ZUZvbGRlcnN9KSxpLmRpcnx8KGguZmlsZShhKS51bnNhZmVPcmlnaW5hbE5hbWU9cyl9cmV0dXJuIHQuemlwQ29tbWVudC5sZW5ndGgmJihoLmNvbW1lbnQ9dC56aXBDb21tZW50KSxofSl9fSx7XCIuL2V4dGVybmFsXCI6NixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyaWVzXCI6MzN9XSwxMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKGUsdCl7aS5jYWxsKHRoaXMsXCJOb2RlanMgc3RyZWFtIGlucHV0IGFkYXB0ZXIgZm9yIFwiK2UpLHRoaXMuX3Vwc3RyZWFtRW5kZWQ9ITEsdGhpcy5fYmluZFN0cmVhbSh0KX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUuX2JpbmRTdHJlYW09ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczsodGhpcy5fc3RyZWFtPWUpLnBhdXNlKCksZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOntwZXJjZW50OjB9fSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6dC5lcnJvcihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmlzUGF1c2VkP3QuX3Vwc3RyZWFtRW5kZWQ9ITA6dC5lbmQoKX0pfSxzLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucGF1c2UuY2FsbCh0aGlzKSYmKHRoaXMuX3N0cmVhbS5wYXVzZSgpLCEwKX0scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKHRoaXMuX3Vwc3RyZWFtRW5kZWQ/dGhpcy5lbmQoKTp0aGlzLl9zdHJlYW0ucmVzdW1lKCksITApfSx0LmV4cG9ydHM9c30se1wiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0aWxzXCI6MzJ9XSwxMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGU7ZnVuY3Rpb24gbihlLHQscil7aS5jYWxsKHRoaXMsdCksdGhpcy5faGVscGVyPWU7dmFyIG49dGhpcztlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUsdCl7bi5wdXNoKGUpfHxuLl9oZWxwZXIucGF1c2UoKSxyJiZyKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe24uZW1pdChcImVycm9yXCIsZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7bi5wdXNoKG51bGwpfSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuX3JlYWQ9ZnVuY3Rpb24oKXt0aGlzLl9oZWxwZXIucmVzdW1lKCl9LHQuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyLFwicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwxNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17aXNOb2RlOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsbmV3QnVmZmVyRnJvbTpmdW5jdGlvbihlLHQpe2lmKEJ1ZmZlci5mcm9tJiZCdWZmZXIuZnJvbSE9PVVpbnQ4QXJyYXkuZnJvbSlyZXR1cm4gQnVmZmVyLmZyb20oZSx0KTtpZihcIm51bWJlclwiPT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImRhdGFcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO3JldHVybiBuZXcgQnVmZmVyKGUsdCl9LGFsbG9jQnVmZmVyOmZ1bmN0aW9uKGUpe2lmKEJ1ZmZlci5hbGxvYylyZXR1cm4gQnVmZmVyLmFsbG9jKGUpO3ZhciB0PW5ldyBCdWZmZXIoZSk7cmV0dXJuIHQuZmlsbCgwKSx0fSxpc0J1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGUpfSxpc1N0cmVhbTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wYXVzZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZXN1bWV9fX0se31dLDE1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQscil7dmFyIG4saT11LmdldFR5cGVPZih0KSxzPXUuZXh0ZW5kKHJ8fHt9LGYpO3MuZGF0ZT1zLmRhdGV8fG5ldyBEYXRlLG51bGwhPT1zLmNvbXByZXNzaW9uJiYocy5jb21wcmVzc2lvbj1zLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCkpLFwic3RyaW5nXCI9PXR5cGVvZiBzLnVuaXhQZXJtaXNzaW9ucyYmKHMudW5peFBlcm1pc3Npb25zPXBhcnNlSW50KHMudW5peFBlcm1pc3Npb25zLDgpKSxzLnVuaXhQZXJtaXNzaW9ucyYmMTYzODQmcy51bml4UGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kb3NQZXJtaXNzaW9ucyYmMTYmcy5kb3NQZXJtaXNzaW9ucyYmKHMuZGlyPSEwKSxzLmRpciYmKGU9ZyhlKSkscy5jcmVhdGVGb2xkZXJzJiYobj1fKGUpKSYmYi5jYWxsKHRoaXMsbiwhMCk7dmFyIGE9XCJzdHJpbmdcIj09PWkmJiExPT09cy5iaW5hcnkmJiExPT09cy5iYXNlNjQ7ciYmdm9pZCAwIT09ci5iaW5hcnl8fChzLmJpbmFyeT0hYSksKHQgaW5zdGFuY2VvZiBjJiYwPT09dC51bmNvbXByZXNzZWRTaXplfHxzLmRpcnx8IXR8fDA9PT10Lmxlbmd0aCkmJihzLmJhc2U2ND0hMSxzLmJpbmFyeT0hMCx0PVwiXCIscy5jb21wcmVzc2lvbj1cIlNUT1JFXCIsaT1cInN0cmluZ1wiKTt2YXIgbz1udWxsO289dCBpbnN0YW5jZW9mIGN8fHQgaW5zdGFuY2VvZiBsP3Q6cC5pc05vZGUmJnAuaXNTdHJlYW0odCk/bmV3IG0oZSx0KTp1LnByZXBhcmVDb250ZW50KGUsdCxzLmJpbmFyeSxzLm9wdGltaXplZEJpbmFyeVN0cmluZyxzLmJhc2U2NCk7dmFyIGg9bmV3IGQoZSxvLHMpO3RoaXMuZmlsZXNbZV09aH12YXIgaT1lKFwiLi91dGY4XCIpLHU9ZShcIi4vdXRpbHNcIiksbD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxhPWUoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksZj1lKFwiLi9kZWZhdWx0c1wiKSxjPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksZD1lKFwiLi96aXBPYmplY3RcIiksbz1lKFwiLi9nZW5lcmF0ZVwiKSxwPWUoXCIuL25vZGVqc1V0aWxzXCIpLG09ZShcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiKSxfPWZ1bmN0aW9uKGUpe1wiL1wiPT09ZS5zbGljZSgtMSkmJihlPWUuc3Vic3RyaW5nKDAsZS5sZW5ndGgtMSkpO3ZhciB0PWUubGFzdEluZGV4T2YoXCIvXCIpO3JldHVybiAwPHQ/ZS5zdWJzdHJpbmcoMCx0KTpcIlwifSxnPWZ1bmN0aW9uKGUpe3JldHVyblwiL1wiIT09ZS5zbGljZSgtMSkmJihlKz1cIi9cIiksZX0sYj1mdW5jdGlvbihlLHQpe3JldHVybiB0PXZvaWQgMCE9PXQ/dDpmLmNyZWF0ZUZvbGRlcnMsZT1nKGUpLHRoaXMuZmlsZXNbZV18fHMuY2FsbCh0aGlzLGUsbnVsbCx7ZGlyOiEwLGNyZWF0ZUZvbGRlcnM6dH0pLHRoaXMuZmlsZXNbZV19O2Z1bmN0aW9uIGgoZSl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX12YXIgbj17bG9hZDpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmb3JFYWNoOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbjtmb3IodCBpbiB0aGlzLmZpbGVzKW49dGhpcy5maWxlc1t0XSwocj10LnNsaWNlKHRoaXMucm9vdC5sZW5ndGgsdC5sZW5ndGgpKSYmdC5zbGljZSgwLHRoaXMucm9vdC5sZW5ndGgpPT09dGhpcy5yb290JiZlKHIsbil9LGZpbHRlcjpmdW5jdGlvbihyKXt2YXIgbj1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cihlLHQpJiZuLnB1c2godCl9KSxufSxmaWxlOmZ1bmN0aW9uKGUsdCxyKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT10aGlzLnJvb3QrZSxzLmNhbGwodGhpcyxlLHQsciksdGhpcztpZihoKGUpKXt2YXIgbj1lO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiF0LmRpciYmbi50ZXN0KGUpfSl9dmFyIGk9dGhpcy5maWxlc1t0aGlzLnJvb3QrZV07cmV0dXJuIGkmJiFpLmRpcj9pOm51bGx9LGZvbGRlcjpmdW5jdGlvbihyKXtpZighcilyZXR1cm4gdGhpcztpZihoKHIpKXJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiB0LmRpciYmci50ZXN0KGUpfSk7dmFyIGU9dGhpcy5yb290K3IsdD1iLmNhbGwodGhpcyxlKSxuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi5yb290PXQubmFtZSxufSxyZW1vdmU6ZnVuY3Rpb24ocil7cj10aGlzLnJvb3Qrcjt2YXIgZT10aGlzLmZpbGVzW3JdO2lmKGV8fChcIi9cIiE9PXIuc2xpY2UoLTEpJiYocis9XCIvXCIpLGU9dGhpcy5maWxlc1tyXSksZSYmIWUuZGlyKWRlbGV0ZSB0aGlzLmZpbGVzW3JdO2Vsc2UgZm9yKHZhciB0PXRoaXMuZmlsdGVyKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZS5zbGljZSgwLHIubGVuZ3RoKT09PXJ9KSxuPTA7bjx0Lmxlbmd0aDtuKyspZGVsZXRlIHRoaXMuZmlsZXNbdFtuXS5uYW1lXTtyZXR1cm4gdGhpc30sZ2VuZXJhdGU6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbTpmdW5jdGlvbihlKXt2YXIgdCxyPXt9O3RyeXtpZigocj11LmV4dGVuZChlfHx7fSx7c3RyZWFtRmlsZXM6ITEsY29tcHJlc3Npb246XCJTVE9SRVwiLGNvbXByZXNzaW9uT3B0aW9uczpudWxsLHR5cGU6XCJcIixwbGF0Zm9ybTpcIkRPU1wiLGNvbW1lbnQ6bnVsbCxtaW1lVHlwZTpcImFwcGxpY2F0aW9uL3ppcFwiLGVuY29kZUZpbGVOYW1lOmkudXRmOGVuY29kZX0pKS50eXBlPXIudHlwZS50b0xvd2VyQ2FzZSgpLHIuY29tcHJlc3Npb249ci5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpLFwiYmluYXJ5c3RyaW5nXCI9PT1yLnR5cGUmJihyLnR5cGU9XCJzdHJpbmdcIiksIXIudHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3UuY2hlY2tTdXBwb3J0KHIudHlwZSksXCJkYXJ3aW5cIiE9PXIucGxhdGZvcm0mJlwiZnJlZWJzZFwiIT09ci5wbGF0Zm9ybSYmXCJsaW51eFwiIT09ci5wbGF0Zm9ybSYmXCJzdW5vc1wiIT09ci5wbGF0Zm9ybXx8KHIucGxhdGZvcm09XCJVTklYXCIpLFwid2luMzJcIj09PXIucGxhdGZvcm0mJihyLnBsYXRmb3JtPVwiRE9TXCIpO3ZhciBuPXIuY29tbWVudHx8dGhpcy5jb21tZW50fHxcIlwiO3Q9by5nZW5lcmF0ZVdvcmtlcih0aGlzLHIsbil9Y2F0Y2goZSl7KHQ9bmV3IGwoXCJlcnJvclwiKSkuZXJyb3IoZSl9cmV0dXJuIG5ldyBhKHQsci50eXBlfHxcInN0cmluZ1wiLHIubWltZVR5cGUpfSxnZW5lcmF0ZUFzeW5jOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbShlKS5hY2N1bXVsYXRlKHQpfSxnZW5lcmF0ZU5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT1lfHx7fSkudHlwZXx8KGUudHlwZT1cIm5vZGVidWZmZXJcIiksdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKGUpLnRvTm9kZWpzU3RyZWFtKHQpfX07dC5leHBvcnRzPW59LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2RlZmF1bHRzXCI6NSxcIi4vZ2VuZXJhdGVcIjo5LFwiLi9ub2RlanMvTm9kZWpzU3RyZWFtSW5wdXRBZGFwdGVyXCI6MTIsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBPYmplY3RcIjozNX1dLDE2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWUoXCJzdHJlYW1cIil9LHtzdHJlYW06dm9pZCAwfV0sMTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSk7Zm9yKHZhciB0PTA7dDx0aGlzLmRhdGEubGVuZ3RoO3QrKyllW3RdPTI1NSZlW3RdfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhW3RoaXMuemVybytlXX0saS5wcm90b3R5cGUubGFzdEluZGV4T2ZTaWduYXR1cmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hhckNvZGVBdCgwKSxyPWUuY2hhckNvZGVBdCgxKSxuPWUuY2hhckNvZGVBdCgyKSxpPWUuY2hhckNvZGVBdCgzKSxzPXRoaXMubGVuZ3RoLTQ7MDw9czstLXMpaWYodGhpcy5kYXRhW3NdPT09dCYmdGhpcy5kYXRhW3MrMV09PT1yJiZ0aGlzLmRhdGFbcysyXT09PW4mJnRoaXMuZGF0YVtzKzNdPT09aSlyZXR1cm4gcy10aGlzLnplcm87cmV0dXJuLTF9LGkucHJvdG90eXBlLnJlYWRBbmRDaGVja1NpZ25hdHVyZT1mdW5jdGlvbihlKXt2YXIgdD1lLmNoYXJDb2RlQXQoMCkscj1lLmNoYXJDb2RlQXQoMSksbj1lLmNoYXJDb2RlQXQoMiksaT1lLmNoYXJDb2RlQXQoMykscz10aGlzLnJlYWREYXRhKDQpO3JldHVybiB0PT09c1swXSYmcj09PXNbMV0mJm49PT1zWzJdJiZpPT09c1szXX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7aWYodGhpcy5jaGVja09mZnNldChlKSwwPT09ZSlyZXR1cm5bXTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDE4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIGkoZSl7dGhpcy5kYXRhPWUsdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpcy5pbmRleD0wLHRoaXMuemVybz0wfWkucHJvdG90eXBlPXtjaGVja09mZnNldDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSW5kZXgodGhpcy5pbmRleCtlKX0sY2hlY2tJbmRleDpmdW5jdGlvbihlKXtpZih0aGlzLmxlbmd0aDx0aGlzLnplcm8rZXx8ZTwwKXRocm93IG5ldyBFcnJvcihcIkVuZCBvZiBkYXRhIHJlYWNoZWQgKGRhdGEgbGVuZ3RoID0gXCIrdGhpcy5sZW5ndGgrXCIsIGFza2VkIGluZGV4ID0gXCIrZStcIikuIENvcnJ1cHRlZCB6aXAgP1wiKX0sc2V0SW5kZXg6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0luZGV4KGUpLHRoaXMuaW5kZXg9ZX0sc2tpcDpmdW5jdGlvbihlKXt0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgrZSl9LGJ5dGVBdDpmdW5jdGlvbigpe30scmVhZEludDpmdW5jdGlvbihlKXt2YXIgdCxyPTA7Zm9yKHRoaXMuY2hlY2tPZmZzZXQoZSksdD10aGlzLmluZGV4K2UtMTt0Pj10aGlzLmluZGV4O3QtLSlyPShyPDw4KSt0aGlzLmJ5dGVBdCh0KTtyZXR1cm4gdGhpcy5pbmRleCs9ZSxyfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBuLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5yZWFkRGF0YShlKSl9LHJlYWREYXRhOmZ1bmN0aW9uKCl7fSxsYXN0SW5kZXhPZlNpZ25hdHVyZTpmdW5jdGlvbigpe30scmVhZEFuZENoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKCl7fSxyZWFkRGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZEludCg0KTtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk4MCsoZT4+MjUmMTI3KSwoZT4+MjEmMTUpLTEsZT4+MTYmMzEsZT4+MTEmMzEsZT4+NSY2MywoMzEmZSk8PDEpKX19LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyfV0sMTk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmNoYXJDb2RlQXQodGhpcy56ZXJvK2UpfSxpLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmxhc3RJbmRleE9mKGUpLXRoaXMuemVyb30saS5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09dGhpcy5yZWFkRGF0YSg0KX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDIxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vQXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXtpZih0aGlzLmNoZWNrT2Zmc2V0KGUpLDA9PT1lKXJldHVybiBuZXcgVWludDhBcnJheSgwKTt2YXIgdD10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTd9XSwyMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdXBwb3J0XCIpLHM9ZShcIi4vQXJyYXlSZWFkZXJcIiksYT1lKFwiLi9TdHJpbmdSZWFkZXJcIiksbz1lKFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCIpLGg9ZShcIi4vVWludDhBcnJheVJlYWRlclwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5nZXRUeXBlT2YoZSk7cmV0dXJuIG4uY2hlY2tTdXBwb3J0KHQpLFwic3RyaW5nXCIhPT10fHxpLnVpbnQ4YXJyYXk/XCJub2RlYnVmZmVyXCI9PT10P25ldyBvKGUpOmkudWludDhhcnJheT9uZXcgaChuLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpKTpuZXcgcyhuLnRyYW5zZm9ybVRvKFwiYXJyYXlcIixlKSk6bmV3IGEoZSl9fSx7XCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3LFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCI6MTksXCIuL1N0cmluZ1JlYWRlclwiOjIwLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuTE9DQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwM1x1MDAwNFwiLHIuQ0VOVFJBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAxXHUwMDAyXCIsci5DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNVx1MDAwNlwiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUj1cIlBLXHUwMDA2XHUwMDA3XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNlx1MDAwNlwiLHIuREFUQV9ERVNDUklQVE9SPVwiUEtcdTAwMDdcXGJcIn0se31dLDI0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBzKGUpe24uY2FsbCh0aGlzLFwiQ29udmVydFdvcmtlciB0byBcIitlKSx0aGlzLmRlc3RUeXBlPWV9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnB1c2goe2RhdGE6aS50cmFuc2Zvcm1Ubyh0aGlzLmRlc3RUeXBlLGUuZGF0YSksbWV0YTplLm1ldGF9KX0sdC5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi9jcmMzMlwiKTtmdW5jdGlvbiBzKCl7bi5jYWxsKHRoaXMsXCJDcmMzMlByb2JlXCIpLHRoaXMud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLDApfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnN0cmVhbUluZm8uY3JjMzI9aShlLmRhdGEsdGhpcy5zdHJlYW1JbmZvLmNyYzMyfHwwKSx0aGlzLnB1c2goZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFMZW5ndGhQcm9iZSBmb3IgXCIrZSksdGhpcy5wcm9wTmFtZT1lLHRoaXMud2l0aFN0cmVhbUluZm8oZSwwKX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe2lmKGUpe3ZhciB0PXRoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXXx8MDt0aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV09dCtlLmRhdGEubGVuZ3RofWkucHJvdG90eXBlLnByb2Nlc3NDaHVuay5jYWxsKHRoaXMsZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFXb3JrZXJcIik7dmFyIHQ9dGhpczt0aGlzLmRhdGFJc1JlYWR5PSExLHRoaXMuaW5kZXg9MCx0aGlzLm1heD0wLHRoaXMuZGF0YT1udWxsLHRoaXMudHlwZT1cIlwiLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsZS50aGVuKGZ1bmN0aW9uKGUpe3QuZGF0YUlzUmVhZHk9ITAsdC5kYXRhPWUsdC5tYXg9ZSYmZS5sZW5ndGh8fDAsdC50eXBlPW4uZ2V0VHlwZU9mKGUpLHQuaXNQYXVzZWR8fHQuX3RpY2tBbmRSZXBlYXQoKX0sZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pfW4uaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7aS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuZGF0YT1udWxsfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMuX3RpY2tTY2hlZHVsZWQmJnRoaXMuZGF0YUlzUmVhZHkmJih0aGlzLl90aWNrU2NoZWR1bGVkPSEwLG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSksITApfSxzLnByb3RvdHlwZS5fdGlja0FuZFJlcGVhdD1mdW5jdGlvbigpe3RoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkfHwodGhpcy5fdGljaygpLHRoaXMuaXNGaW5pc2hlZHx8KG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSx0aGlzLl90aWNrU2NoZWR1bGVkPSEwKSl9LHMucHJvdG90eXBlLl90aWNrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciBlPW51bGwsdD1NYXRoLm1pbih0aGlzLm1heCx0aGlzLmluZGV4KzE2Mzg0KTtpZih0aGlzLmluZGV4Pj10aGlzLm1heClyZXR1cm4gdGhpcy5lbmQoKTtzd2l0Y2godGhpcy50eXBlKXtjYXNlXCJzdHJpbmdcIjplPXRoaXMuZGF0YS5zdWJzdHJpbmcodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJ1aW50OGFycmF5XCI6ZT10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJhcnJheVwiOmNhc2VcIm5vZGVidWZmZXJcIjplPXRoaXMuZGF0YS5zbGljZSh0aGlzLmluZGV4LHQpfXJldHVybiB0aGlzLmluZGV4PXQsdGhpcy5wdXNoKHtkYXRhOmUsbWV0YTp7cGVyY2VudDp0aGlzLm1heD90aGlzLmluZGV4L3RoaXMubWF4KjEwMDowfX0pfSx0LmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3RoaXMubmFtZT1lfHxcImRlZmF1bHRcIix0aGlzLnN0cmVhbUluZm89e30sdGhpcy5nZW5lcmF0ZWRFcnJvcj1udWxsLHRoaXMuZXh0cmFTdHJlYW1JbmZvPXt9LHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5pc0ZpbmlzaGVkPSExLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5fbGlzdGVuZXJzPXtkYXRhOltdLGVuZDpbXSxlcnJvcjpbXX0sdGhpcy5wcmV2aW91cz1udWxsfW4ucHJvdG90eXBlPXtwdXNoOmZ1bmN0aW9uKGUpe3RoaXMuZW1pdChcImRhdGFcIixlKX0sZW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3RoaXMuZmx1c2goKTt0cnl7dGhpcy5lbWl0KFwiZW5kXCIpLHRoaXMuY2xlYW5VcCgpLHRoaXMuaXNGaW5pc2hlZD0hMH1jYXRjaChlKXt0aGlzLmVtaXQoXCJlcnJvclwiLGUpfXJldHVybiEwfSxlcnJvcjpmdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6KHRoaXMuaXNGaW5pc2hlZD0hMCx0aGlzLmVtaXQoXCJlcnJvclwiLGUpLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMuZXJyb3IoZSksdGhpcy5jbGVhblVwKCkpLCEwKX0sb246ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2VdLnB1c2godCksdGhpc30sY2xlYW5VcDpmdW5jdGlvbigpe3RoaXMuc3RyZWFtSW5mbz10aGlzLmdlbmVyYXRlZEVycm9yPXRoaXMuZXh0cmFTdHJlYW1JbmZvPW51bGwsdGhpcy5fbGlzdGVuZXJzPVtdfSxlbWl0OmZ1bmN0aW9uKGUsdCl7aWYodGhpcy5fbGlzdGVuZXJzW2VdKWZvcih2YXIgcj0wO3I8dGhpcy5fbGlzdGVuZXJzW2VdLmxlbmd0aDtyKyspdGhpcy5fbGlzdGVuZXJzW2VdW3JdLmNhbGwodGhpcyx0KX0scGlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZWdpc3RlclByZXZpb3VzKHRoaXMpfSxyZWdpc3RlclByZXZpb3VzOmZ1bmN0aW9uKGUpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLnN0cmVhbUluZm89ZS5zdHJlYW1JbmZvLHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpcy5wcmV2aW91cz1lO3ZhciB0PXRoaXM7cmV0dXJuIGUub24oXCJkYXRhXCIsZnVuY3Rpb24oZSl7dC5wcm9jZXNzQ2h1bmsoZSl9KSxlLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmVuZCgpfSksZS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNQYXVzZWQmJiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucGF1c2UoKSwhMCl9LHJlc3VtZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIGU9dGhpcy5pc1BhdXNlZD0hMTtyZXR1cm4gdGhpcy5nZW5lcmF0ZWRFcnJvciYmKHRoaXMuZXJyb3IodGhpcy5nZW5lcmF0ZWRFcnJvciksZT0hMCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5yZXN1bWUoKSwhZX0sZmx1c2g6ZnVuY3Rpb24oKXt9LHByb2Nlc3NDaHVuazpmdW5jdGlvbihlKXt0aGlzLnB1c2goZSl9LHdpdGhTdHJlYW1JbmZvOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdPXQsdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzfSxtZXJnZVN0cmVhbUluZm86ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5leHRyYVN0cmVhbUluZm8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZXh0cmFTdHJlYW1JbmZvLGUpJiYodGhpcy5zdHJlYW1JbmZvW2VdPXRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdKX0sbG9jazpmdW5jdGlvbigpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLmlzTG9ja2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMubG9jaygpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBlPVwiV29ya2VyIFwiK3RoaXMubmFtZTtyZXR1cm4gdGhpcy5wcmV2aW91cz90aGlzLnByZXZpb3VzK1wiIC0+IFwiK2U6ZX19LHQuZXhwb3J0cz1ufSx7fV0sMjk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi9Db252ZXJ0V29ya2VyXCIpLHM9ZShcIi4vR2VuZXJpY1dvcmtlclwiKSx1PWUoXCIuLi9iYXNlNjRcIiksbj1lKFwiLi4vc3VwcG9ydFwiKSxhPWUoXCIuLi9leHRlcm5hbFwiKSxvPW51bGw7aWYobi5ub2Rlc3RyZWFtKXRyeXtvPWUoXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiKX1jYXRjaChlKXt9ZnVuY3Rpb24gbChlLG8pe3JldHVybiBuZXcgYS5Qcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIG49W10saT1lLl9pbnRlcm5hbFR5cGUscz1lLl9vdXRwdXRUeXBlLGE9ZS5fbWltZVR5cGU7ZS5vbihcImRhdGFcIixmdW5jdGlvbihlLHQpe24ucHVzaChlKSxvJiZvKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe249W10scihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJibG9iXCI6cmV0dXJuIGgubmV3QmxvYihoLnRyYW5zZm9ybVRvKFwiYXJyYXlidWZmZXJcIix0KSxyKTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gdS5lbmNvZGUodCk7ZGVmYXVsdDpyZXR1cm4gaC50cmFuc2Zvcm1UbyhlLHQpfX0ocyxmdW5jdGlvbihlLHQpe3ZhciByLG49MCxpPW51bGwscz0wO2ZvcihyPTA7cjx0Lmxlbmd0aDtyKyspcys9dFtyXS5sZW5ndGg7c3dpdGNoKGUpe2Nhc2VcInN0cmluZ1wiOnJldHVybiB0LmpvaW4oXCJcIik7Y2FzZVwiYXJyYXlcIjpyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSx0KTtjYXNlXCJ1aW50OGFycmF5XCI6Zm9yKGk9bmV3IFVpbnQ4QXJyYXkocykscj0wO3I8dC5sZW5ndGg7cisrKWkuc2V0KHRbcl0sbiksbis9dFtyXS5sZW5ndGg7cmV0dXJuIGk7Y2FzZVwibm9kZWJ1ZmZlclwiOnJldHVybiBCdWZmZXIuY29uY2F0KHQpO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiY29uY2F0IDogdW5zdXBwb3J0ZWQgdHlwZSAnXCIrZStcIidcIil9fShpLG4pLGEpO3QoZSl9Y2F0Y2goZSl7cihlKX1uPVtdfSkucmVzdW1lKCl9KX1mdW5jdGlvbiBmKGUsdCxyKXt2YXIgbj10O3N3aXRjaCh0KXtjYXNlXCJibG9iXCI6Y2FzZVwiYXJyYXlidWZmZXJcIjpuPVwidWludDhhcnJheVwiO2JyZWFrO2Nhc2VcImJhc2U2NFwiOm49XCJzdHJpbmdcIn10cnl7dGhpcy5faW50ZXJuYWxUeXBlPW4sdGhpcy5fb3V0cHV0VHlwZT10LHRoaXMuX21pbWVUeXBlPXIsaC5jaGVja1N1cHBvcnQobiksdGhpcy5fd29ya2VyPWUucGlwZShuZXcgaShuKSksZS5sb2NrKCl9Y2F0Y2goZSl7dGhpcy5fd29ya2VyPW5ldyBzKFwiZXJyb3JcIiksdGhpcy5fd29ya2VyLmVycm9yKGUpfX1mLnByb3RvdHlwZT17YWNjdW11bGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gbCh0aGlzLGUpfSxvbjpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7cmV0dXJuXCJkYXRhXCI9PT1lP3RoaXMuX3dvcmtlci5vbihlLGZ1bmN0aW9uKGUpe3QuY2FsbChyLGUuZGF0YSxlLm1ldGEpfSk6dGhpcy5fd29ya2VyLm9uKGUsZnVuY3Rpb24oKXtoLmRlbGF5KHQsYXJndW1lbnRzLHIpfSksdGhpc30scmVzdW1lOmZ1bmN0aW9uKCl7cmV0dXJuIGguZGVsYXkodGhpcy5fd29ya2VyLnJlc3VtZSxbXSx0aGlzLl93b3JrZXIpLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dvcmtlci5wYXVzZSgpLHRoaXN9LHRvTm9kZWpzU3RyZWFtOmZ1bmN0aW9uKGUpe2lmKGguY2hlY2tTdXBwb3J0KFwibm9kZXN0cmVhbVwiKSxcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGUpdGhyb3cgbmV3IEVycm9yKHRoaXMuX291dHB1dFR5cGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIG1ldGhvZFwiKTtyZXR1cm4gbmV3IG8odGhpcyx7b2JqZWN0TW9kZTpcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGV9LGUpfX0sdC5leHBvcnRzPWZ9LHtcIi4uL2Jhc2U2NFwiOjEsXCIuLi9leHRlcm5hbFwiOjYsXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiOjEzLFwiLi4vc3VwcG9ydFwiOjMwLFwiLi4vdXRpbHNcIjozMixcIi4vQ29udmVydFdvcmtlclwiOjI0LFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwzMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2lmKHIuYmFzZTY0PSEwLHIuYXJyYXk9ITAsci5zdHJpbmc9ITAsci5hcnJheWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LHIubm9kZWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLHIudWludDhhcnJheT1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxcInVuZGVmaW5lZFwiPT10eXBlb2YgQXJyYXlCdWZmZXIpci5ibG9iPSExO2Vsc2V7dmFyIG49bmV3IEFycmF5QnVmZmVyKDApO3RyeXtyLmJsb2I9MD09PW5ldyBCbG9iKFtuXSx7dHlwZTpcImFwcGxpY2F0aW9uL3ppcFwifSkuc2l6ZX1jYXRjaChlKXt0cnl7dmFyIGk9bmV3KHNlbGYuQmxvYkJ1aWxkZXJ8fHNlbGYuV2ViS2l0QmxvYkJ1aWxkZXJ8fHNlbGYuTW96QmxvYkJ1aWxkZXJ8fHNlbGYuTVNCbG9iQnVpbGRlcik7aS5hcHBlbmQobiksci5ibG9iPTA9PT1pLmdldEJsb2IoXCJhcHBsaWNhdGlvbi96aXBcIikuc2l6ZX1jYXRjaChlKXtyLmJsb2I9ITF9fX10cnl7ci5ub2Rlc3RyZWFtPSEhZShcInJlYWRhYmxlLXN0cmVhbVwiKS5SZWFkYWJsZX1jYXRjaChlKXtyLm5vZGVzdHJlYW09ITF9fSx7XCJyZWFkYWJsZS1zdHJlYW1cIjoxNn1dLDMxOltmdW5jdGlvbihlLHQscyl7XCJ1c2Ugc3RyaWN0XCI7Zm9yKHZhciBvPWUoXCIuL3V0aWxzXCIpLGg9ZShcIi4vc3VwcG9ydFwiKSxyPWUoXCIuL25vZGVqc1V0aWxzXCIpLG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksdT1uZXcgQXJyYXkoMjU2KSxpPTA7aTwyNTY7aSsrKXVbaV09MjUyPD1pPzY6MjQ4PD1pPzU6MjQwPD1pPzQ6MjI0PD1pPzM6MTkyPD1pPzI6MTt1WzI1NF09dVsyNTRdPTE7ZnVuY3Rpb24gYSgpe24uY2FsbCh0aGlzLFwidXRmLTggZGVjb2RlXCIpLHRoaXMubGVmdE92ZXI9bnVsbH1mdW5jdGlvbiBsKCl7bi5jYWxsKHRoaXMsXCJ1dGYtOCBlbmNvZGVcIil9cy51dGY4ZW5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBoLm5vZGVidWZmZXI/ci5uZXdCdWZmZXJGcm9tKGUsXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGE9ZS5sZW5ndGgsbz0wO2ZvcihpPTA7aTxhO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKHQ9aC51aW50OGFycmF5P25ldyBVaW50OEFycmF5KG8pOm5ldyBBcnJheShvKSxpPXM9MDtzPG87aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykscjwxMjg/dFtzKytdPXI6KHI8MjA0OD90W3MrK109MTkyfHI+Pj42OihyPDY1NTM2P3RbcysrXT0yMjR8cj4+PjEyOih0W3MrK109MjQwfHI+Pj4xOCx0W3MrK109MTI4fHI+Pj4xMiY2MyksdFtzKytdPTEyOHxyPj4+NiY2MyksdFtzKytdPTEyOHw2MyZyKTtyZXR1cm4gdH0oZSl9LHMudXRmOGRlY29kZT1mdW5jdGlvbihlKXtyZXR1cm4gaC5ub2RlYnVmZmVyP28udHJhbnNmb3JtVG8oXCJub2RlYnVmZmVyXCIsZSkudG9TdHJpbmcoXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzPWUubGVuZ3RoLGE9bmV3IEFycmF5KDIqcyk7Zm9yKHQ9cj0wO3Q8czspaWYoKG49ZVt0KytdKTwxMjgpYVtyKytdPW47ZWxzZSBpZig0PChpPXVbbl0pKWFbcisrXT02NTUzMyx0Kz1pLTE7ZWxzZXtmb3IobiY9Mj09PWk/MzE6Mz09PWk/MTU6NzsxPGkmJnQ8czspbj1uPDw2fDYzJmVbdCsrXSxpLS07MTxpP2FbcisrXT02NTUzMzpuPDY1NTM2P2FbcisrXT1uOihuLT02NTUzNixhW3IrK109NTUyOTZ8bj4+MTAmMTAyMyxhW3IrK109NTYzMjB8MTAyMyZuKX1yZXR1cm4gYS5sZW5ndGghPT1yJiYoYS5zdWJhcnJheT9hPWEuc3ViYXJyYXkoMCxyKTphLmxlbmd0aD1yKSxvLmFwcGx5RnJvbUNoYXJDb2RlKGEpfShlPW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixlKSl9LG8uaW5oZXJpdHMoYSxuKSxhLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dmFyIHQ9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLGUuZGF0YSk7aWYodGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgpe2lmKGgudWludDhhcnJheSl7dmFyIHI9dDsodD1uZXcgVWludDhBcnJheShyLmxlbmd0aCt0aGlzLmxlZnRPdmVyLmxlbmd0aCkpLnNldCh0aGlzLmxlZnRPdmVyLDApLHQuc2V0KHIsdGhpcy5sZWZ0T3Zlci5sZW5ndGgpfWVsc2UgdD10aGlzLmxlZnRPdmVyLmNvbmNhdCh0KTt0aGlzLmxlZnRPdmVyPW51bGx9dmFyIG49ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IoKHQ9dHx8ZS5sZW5ndGgpPmUubGVuZ3RoJiYodD1lLmxlbmd0aCkscj10LTE7MDw9ciYmMTI4PT0oMTkyJmVbcl0pOylyLS07cmV0dXJuIHI8MD90OjA9PT1yP3Q6cit1W2Vbcl1dPnQ/cjp0fSh0KSxpPXQ7biE9PXQubGVuZ3RoJiYoaC51aW50OGFycmF5PyhpPXQuc3ViYXJyYXkoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc3ViYXJyYXkobix0Lmxlbmd0aCkpOihpPXQuc2xpY2UoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc2xpY2Uobix0Lmxlbmd0aCkpKSx0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKGkpLG1ldGE6ZS5tZXRhfSl9LGEucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7dGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgmJih0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKHRoaXMubGVmdE92ZXIpLG1ldGE6e319KSx0aGlzLmxlZnRPdmVyPW51bGwpfSxzLlV0ZjhEZWNvZGVXb3JrZXI9YSxvLmluaGVyaXRzKGwsbiksbC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMucHVzaCh7ZGF0YTpzLnV0ZjhlbmNvZGUoZS5kYXRhKSxtZXRhOmUubWV0YX0pfSxzLlV0ZjhFbmNvZGVXb3JrZXI9bH0se1wiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzJ9XSwzMjpbZnVuY3Rpb24oZSx0LGEpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL3N1cHBvcnRcIiksaD1lKFwiLi9iYXNlNjRcIikscj1lKFwiLi9ub2RlanNVdGlsc1wiKSx1PWUoXCIuL2V4dGVybmFsXCIpO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGV9ZnVuY3Rpb24gbChlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7KytyKXRbcl09MjU1JmUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH1lKFwic2V0aW1tZWRpYXRlXCIpLGEubmV3QmxvYj1mdW5jdGlvbih0LHIpe2EuY2hlY2tTdXBwb3J0KFwiYmxvYlwiKTt0cnl7cmV0dXJuIG5ldyBCbG9iKFt0XSx7dHlwZTpyfSl9Y2F0Y2goZSl7dHJ5e3ZhciBuPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO3JldHVybiBuLmFwcGVuZCh0KSxuLmdldEJsb2Iocil9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwiQnVnIDogY2FuJ3QgY29uc3RydWN0IHRoZSBCbG9iLlwiKX19fTt2YXIgaT17c3RyaW5naWZ5QnlDaHVuazpmdW5jdGlvbihlLHQscil7dmFyIG49W10saT0wLHM9ZS5sZW5ndGg7aWYoczw9cilyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGUpO2Zvcig7aTxzOylcImFycmF5XCI9PT10fHxcIm5vZGVidWZmZXJcIj09PXQ/bi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlLnNsaWNlKGksTWF0aC5taW4oaStyLHMpKSkpOm4ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZS5zdWJhcnJheShpLE1hdGgubWluKGkrcixzKSkpKSxpKz1yO3JldHVybiBuLmpvaW4oXCJcIil9LHN0cmluZ2lmeUJ5Q2hhcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9XCJcIixyPTA7cjxlLmxlbmd0aDtyKyspdCs9U3RyaW5nLmZyb21DaGFyQ29kZShlW3JdKTtyZXR1cm4gdH0sYXBwbHlDYW5CZVVzZWQ6e3VpbnQ4YXJyYXk6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8udWludDhhcnJheSYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKSxub2RlYnVmZmVyOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLm5vZGVidWZmZXImJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsci5hbGxvY0J1ZmZlcigxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKX19O2Z1bmN0aW9uIHMoZSl7dmFyIHQ9NjU1MzYscj1hLmdldFR5cGVPZihlKSxuPSEwO2lmKFwidWludDhhcnJheVwiPT09cj9uPWkuYXBwbHlDYW5CZVVzZWQudWludDhhcnJheTpcIm5vZGVidWZmZXJcIj09PXImJihuPWkuYXBwbHlDYW5CZVVzZWQubm9kZWJ1ZmZlciksbilmb3IoOzE8dDspdHJ5e3JldHVybiBpLnN0cmluZ2lmeUJ5Q2h1bmsoZSxyLHQpfWNhdGNoKGUpe3Q9TWF0aC5mbG9vcih0LzIpfXJldHVybiBpLnN0cmluZ2lmeUJ5Q2hhcihlKX1mdW5jdGlvbiBmKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspdFtyXT1lW3JdO3JldHVybiB0fWEuYXBwbHlGcm9tQ2hhckNvZGU9czt2YXIgYz17fTtjLnN0cmluZz17c3RyaW5nOm4sYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGMuc3RyaW5nLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBsKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gbChlLHIuYWxsb2NCdWZmZXIoZS5sZW5ndGgpKX19LGMuYXJyYXk9e3N0cmluZzpzLGFycmF5Om4sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KGUpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShlKX19LGMuYXJyYXlidWZmZXI9e3N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm4gcyhuZXcgVWludDhBcnJheShlKSl9LGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKG5ldyBVaW50OEFycmF5KGUpLG5ldyBBcnJheShlLmJ5dGVMZW5ndGgpKX0sYXJyYXlidWZmZXI6bix1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVWludDhBcnJheShlKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKG5ldyBVaW50OEFycmF5KGUpKX19LGMudWludDhhcnJheT17c3RyaW5nOnMsYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYnVmZmVyfSx1aW50OGFycmF5Om4sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKGUpfX0sYy5ub2RlYnVmZmVyPXtzdHJpbmc6cyxhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihlLG5ldyBBcnJheShlLmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gYy5ub2RlYnVmZmVyLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpufSxhLnRyYW5zZm9ybVRvPWZ1bmN0aW9uKGUsdCl7aWYodD10fHxcIlwiLCFlKXJldHVybiB0O2EuY2hlY2tTdXBwb3J0KGUpO3ZhciByPWEuZ2V0VHlwZU9mKHQpO3JldHVybiBjW3JdW2VdKHQpfSxhLnJlc29sdmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIvXCIpLHI9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO1wiLlwiPT09aXx8XCJcIj09PWkmJjAhPT1uJiZuIT09dC5sZW5ndGgtMXx8KFwiLi5cIj09PWk/ci5wb3AoKTpyLnB1c2goaSkpfXJldHVybiByLmpvaW4oXCIvXCIpfSxhLmdldFR5cGVPZj1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9cInN0cmluZ1wiOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImFycmF5XCI6by5ub2RlYnVmZmVyJiZyLmlzQnVmZmVyKGUpP1wibm9kZWJ1ZmZlclwiOm8udWludDhhcnJheSYmZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk/XCJ1aW50OGFycmF5XCI6by5hcnJheWJ1ZmZlciYmZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP1wiYXJyYXlidWZmZXJcIjp2b2lkIDB9LGEuY2hlY2tTdXBwb3J0PWZ1bmN0aW9uKGUpe2lmKCFvW2UudG9Mb3dlckNhc2UoKV0pdGhyb3cgbmV3IEVycm9yKGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHBsYXRmb3JtXCIpfSxhLk1BWF9WQUxVRV8xNkJJVFM9NjU1MzUsYS5NQVhfVkFMVUVfMzJCSVRTPS0xLGEucHJldHR5PWZ1bmN0aW9uKGUpe3ZhciB0LHIsbj1cIlwiO2ZvcihyPTA7cjwoZXx8XCJcIikubGVuZ3RoO3IrKyluKz1cIlxcXFx4XCIrKCh0PWUuY2hhckNvZGVBdChyKSk8MTY/XCIwXCI6XCJcIikrdC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gbn0sYS5kZWxheT1mdW5jdGlvbihlLHQscil7c2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7ZS5hcHBseShyfHxudWxsLHR8fFtdKX0pfSxhLmluaGVyaXRzPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcigpe31yLnByb3RvdHlwZT10LnByb3RvdHlwZSxlLnByb3RvdHlwZT1uZXcgcn0sYS5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LHI9e307Zm9yKGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWZvcih0IGluIGFyZ3VtZW50c1tlXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2VdLHQpJiZ2b2lkIDA9PT1yW3RdJiYoclt0XT1hcmd1bWVudHNbZV1bdF0pO3JldHVybiByfSxhLnByZXBhcmVDb250ZW50PWZ1bmN0aW9uKHIsZSxuLGkscyl7cmV0dXJuIHUuUHJvbWlzZS5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG8uYmxvYiYmKG4gaW5zdGFuY2VvZiBCbG9ifHwtMSE9PVtcIltvYmplY3QgRmlsZV1cIixcIltvYmplY3QgQmxvYl1cIl0uaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobikpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI/bmV3IHUuUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBlPW5ldyBGaWxlUmVhZGVyO2Uub25sb2FkPWZ1bmN0aW9uKGUpe3QoZS50YXJnZXQucmVzdWx0KX0sZS5vbmVycm9yPWZ1bmN0aW9uKGUpe3IoZS50YXJnZXQuZXJyb3IpfSxlLnJlYWRBc0FycmF5QnVmZmVyKG4pfSk6bn0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9YS5nZXRUeXBlT2YoZSk7cmV0dXJuIHQ/KFwiYXJyYXlidWZmZXJcIj09PXQ/ZT1hLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpOlwic3RyaW5nXCI9PT10JiYocz9lPWguZGVjb2RlKGUpOm4mJiEwIT09aSYmKGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxvLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpOm5ldyBBcnJheShlLmxlbmd0aCkpfShlKSkpLGUpOnUuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2FuJ3QgcmVhZCB0aGUgZGF0YSBvZiAnXCIrcitcIicuIElzIGl0IGluIGEgc3VwcG9ydGVkIEphdmFTY3JpcHQgdHlwZSAoU3RyaW5nLCBCbG9iLCBBcnJheUJ1ZmZlciwgZXRjKSA/XCIpKX0pfX0se1wiLi9iYXNlNjRcIjoxLFwiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N1cHBvcnRcIjozMCxzZXRpbW1lZGlhdGU6NTR9XSwzMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIiksaT1lKFwiLi91dGlsc1wiKSxzPWUoXCIuL3NpZ25hdHVyZVwiKSxhPWUoXCIuL3ppcEVudHJ5XCIpLG89ZShcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBoKGUpe3RoaXMuZmlsZXM9W10sdGhpcy5sb2FkT3B0aW9ucz1lfWgucHJvdG90eXBlPXtjaGVja1NpZ25hdHVyZTpmdW5jdGlvbihlKXtpZighdGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKGUpKXt0aGlzLnJlYWRlci5pbmRleC09NDt2YXIgdD10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpO3Rocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiB1bmV4cGVjdGVkIHNpZ25hdHVyZSAoXCIraS5wcmV0dHkodCkrXCIsIGV4cGVjdGVkIFwiK2kucHJldHR5KGUpK1wiKVwiKX19LGlzU2lnbmF0dXJlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5yZWFkZXIuaW5kZXg7dGhpcy5yZWFkZXIuc2V0SW5kZXgoZSk7dmFyIG49dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KT09PXQ7cmV0dXJuIHRoaXMucmVhZGVyLnNldEluZGV4KHIpLG59LHJlYWRCbG9ja0VuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy56aXBDb21tZW50TGVuZ3RoPXRoaXMucmVhZGVyLnJlYWRJbnQoMik7dmFyIGU9dGhpcy5yZWFkZXIucmVhZERhdGEodGhpcy56aXBDb21tZW50TGVuZ3RoKSx0PW8udWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIscj1pLnRyYW5zZm9ybVRvKHQsZSk7dGhpcy56aXBDb21tZW50PXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnJlYWRlci5za2lwKDQpLHRoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhPXt9O2Zvcih2YXIgZSx0LHIsbj10aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZS00NDswPG47KWU9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCkscj10aGlzLnJlYWRlci5yZWFkRGF0YSh0KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGFbZV09e2lkOmUsbGVuZ3RoOnQsdmFsdWU6cn19LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcjpmdW5jdGlvbigpe2lmKHRoaXMuZGlza1dpdGhaaXA2NENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuZGlza3NDb3VudD10aGlzLnJlYWRlci5yZWFkSW50KDQpLDE8dGhpcy5kaXNrc0NvdW50KXRocm93IG5ldyBFcnJvcihcIk11bHRpLXZvbHVtZXMgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpfSxyZWFkTG9jYWxGaWxlczpmdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKGU9MDtlPHRoaXMuZmlsZXMubGVuZ3RoO2UrKyl0PXRoaXMuZmlsZXNbZV0sdGhpcy5yZWFkZXIuc2V0SW5kZXgodC5sb2NhbEhlYWRlck9mZnNldCksdGhpcy5jaGVja1NpZ25hdHVyZShzLkxPQ0FMX0ZJTEVfSEVBREVSKSx0LnJlYWRMb2NhbFBhcnQodGhpcy5yZWFkZXIpLHQuaGFuZGxlVVRGOCgpLHQucHJvY2Vzc0F0dHJpYnV0ZXMoKX0scmVhZENlbnRyYWxEaXI6ZnVuY3Rpb24oKXt2YXIgZTtmb3IodGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5jZW50cmFsRGlyT2Zmc2V0KTt0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0ZJTEVfSEVBREVSKTspKGU9bmV3IGEoe3ppcDY0OnRoaXMuemlwNjR9LHRoaXMubG9hZE9wdGlvbnMpKS5yZWFkQ2VudHJhbFBhcnQodGhpcy5yZWFkZXIpLHRoaXMuZmlsZXMucHVzaChlKTtpZih0aGlzLmNlbnRyYWxEaXJSZWNvcmRzIT09dGhpcy5maWxlcy5sZW5ndGgmJjAhPT10aGlzLmNlbnRyYWxEaXJSZWNvcmRzJiYwPT09dGhpcy5maWxlcy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IGV4cGVjdGVkIFwiK3RoaXMuY2VudHJhbERpclJlY29yZHMrXCIgcmVjb3JkcyBpbiBjZW50cmFsIGRpciwgZ290IFwiK3RoaXMuZmlsZXMubGVuZ3RoKX0scmVhZEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKTtpZihlPDApdGhyb3chdGhpcy5pc1NpZ25hdHVyZSgwLHMuTE9DQUxfRklMRV9IRUFERVIpP25ldyBFcnJvcihcIkNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IDogaXMgdGhpcyBhIHppcCBmaWxlID8gSWYgaXQgaXMsIHNlZSBodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vaG93dG8vcmVhZF96aXAuaHRtbFwiKTpuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleChlKTt2YXIgdD1lO2lmKHRoaXMuY2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrRW5kT2ZDZW50cmFsKCksdGhpcy5kaXNrTnVtYmVyPT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkcz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyU2l6ZT09PWkuTUFYX1ZBTFVFXzMyQklUU3x8dGhpcy5jZW50cmFsRGlyT2Zmc2V0PT09aS5NQVhfVkFMVUVfMzJCSVRTKXtpZih0aGlzLnppcDY0PSEwLChlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUikpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGxvY2F0b3JcIik7aWYodGhpcy5yZWFkZXIuc2V0SW5kZXgoZSksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yKCksIXRoaXMuaXNTaWduYXR1cmUodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyLHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSYmKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPDApKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWwoKX12YXIgcj10aGlzLmNlbnRyYWxEaXJPZmZzZXQrdGhpcy5jZW50cmFsRGlyU2l6ZTt0aGlzLnppcDY0JiYocis9MjAscis9MTIrdGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUpO3ZhciBuPXQtcjtpZigwPG4pdGhpcy5pc1NpZ25hdHVyZSh0LHMuQ0VOVFJBTF9GSUxFX0hFQURFUil8fCh0aGlzLnJlYWRlci56ZXJvPW4pO2Vsc2UgaWYobjwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IG1pc3NpbmcgXCIrTWF0aC5hYnMobikrXCIgYnl0ZXMuXCIpfSxwcmVwYXJlUmVhZGVyOmZ1bmN0aW9uKGUpe3RoaXMucmVhZGVyPW4oZSl9LGxvYWQ6ZnVuY3Rpb24oZSl7dGhpcy5wcmVwYXJlUmVhZGVyKGUpLHRoaXMucmVhZEVuZE9mQ2VudHJhbCgpLHRoaXMucmVhZENlbnRyYWxEaXIoKSx0aGlzLnJlYWRMb2NhbEZpbGVzKCl9fSx0LmV4cG9ydHM9aH0se1wiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3NpZ25hdHVyZVwiOjIzLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcEVudHJ5XCI6MzR9XSwzNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIikscz1lKFwiLi91dGlsc1wiKSxpPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksYT1lKFwiLi9jcmMzMlwiKSxvPWUoXCIuL3V0ZjhcIiksaD1lKFwiLi9jb21wcmVzc2lvbnNcIiksdT1lKFwiLi9zdXBwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0KXt0aGlzLm9wdGlvbnM9ZSx0aGlzLmxvYWRPcHRpb25zPXR9bC5wcm90b3R5cGU9e2lzRW5jcnlwdGVkOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PSgxJnRoaXMuYml0RmxhZyl9LHVzZVVURjg6ZnVuY3Rpb24oKXtyZXR1cm4gMjA0OD09KDIwNDgmdGhpcy5iaXRGbGFnKX0scmVhZExvY2FsUGFydDpmdW5jdGlvbihlKXt2YXIgdCxyO2lmKGUuc2tpcCgyMiksdGhpcy5maWxlTmFtZUxlbmd0aD1lLnJlYWRJbnQoMikscj1lLnJlYWRJbnQoMiksdGhpcy5maWxlTmFtZT1lLnJlYWREYXRhKHRoaXMuZmlsZU5hbWVMZW5ndGgpLGUuc2tpcChyKSwtMT09PXRoaXMuY29tcHJlc3NlZFNpemV8fC0xPT09dGhpcy51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyBvciBjb3JydXB0ZWQgemlwIDogZGlkbid0IGdldCBlbm91Z2ggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2VudHJhbCBkaXJlY3RvcnkgKGNvbXByZXNzZWRTaXplID09PSAtMSB8fCB1bmNvbXByZXNzZWRTaXplID09PSAtMSlcIik7aWYobnVsbD09PSh0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBoKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoLHQpJiZoW3RdLm1hZ2ljPT09ZSlyZXR1cm4gaFt0XTtyZXR1cm4gbnVsbH0odGhpcy5jb21wcmVzc2lvbk1ldGhvZCkpKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBjb21wcmVzc2lvbiBcIitzLnByZXR0eSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKStcIiB1bmtub3duIChpbm5lciBmaWxlIDogXCIrcy50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMuZmlsZU5hbWUpK1wiKVwiKTt0aGlzLmRlY29tcHJlc3NlZD1uZXcgaSh0aGlzLmNvbXByZXNzZWRTaXplLHRoaXMudW5jb21wcmVzc2VkU2l6ZSx0aGlzLmNyYzMyLHQsZS5yZWFkRGF0YSh0aGlzLmNvbXByZXNzZWRTaXplKSl9LHJlYWRDZW50cmFsUGFydDpmdW5jdGlvbihlKXt0aGlzLnZlcnNpb25NYWRlQnk9ZS5yZWFkSW50KDIpLGUuc2tpcCgyKSx0aGlzLmJpdEZsYWc9ZS5yZWFkSW50KDIpLHRoaXMuY29tcHJlc3Npb25NZXRob2Q9ZS5yZWFkU3RyaW5nKDIpLHRoaXMuZGF0ZT1lLnJlYWREYXRlKCksdGhpcy5jcmMzMj1lLnJlYWRJbnQoNCksdGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoNCksdGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg0KTt2YXIgdD1lLnJlYWRJbnQoMik7aWYodGhpcy5leHRyYUZpZWxkc0xlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5maWxlQ29tbWVudExlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDIpLHRoaXMuaW50ZXJuYWxGaWxlQXR0cmlidXRlcz1lLnJlYWRJbnQoMiksdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPWUucmVhZEludCg0KSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg0KSx0aGlzLmlzRW5jcnlwdGVkKCkpdGhyb3cgbmV3IEVycm9yKFwiRW5jcnlwdGVkIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKTtlLnNraXAodCksdGhpcy5yZWFkRXh0cmFGaWVsZHMoZSksdGhpcy5wYXJzZVpJUDY0RXh0cmFGaWVsZChlKSx0aGlzLmZpbGVDb21tZW50PWUucmVhZERhdGEodGhpcy5maWxlQ29tbWVudExlbmd0aCl9LHByb2Nlc3NBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7dGhpcy51bml4UGVybWlzc2lvbnM9bnVsbCx0aGlzLmRvc1Blcm1pc3Npb25zPW51bGw7dmFyIGU9dGhpcy52ZXJzaW9uTWFkZUJ5Pj44O3RoaXMuZGlyPSEhKDE2JnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMD09ZSYmKHRoaXMuZG9zUGVybWlzc2lvbnM9NjMmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwzPT1lJiYodGhpcy51bml4UGVybWlzc2lvbnM9dGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPj4xNiY2NTUzNSksdGhpcy5kaXJ8fFwiL1wiIT09dGhpcy5maWxlTmFtZVN0ci5zbGljZSgtMSl8fCh0aGlzLmRpcj0hMCl9LHBhcnNlWklQNjRFeHRyYUZpZWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5leHRyYUZpZWxkc1sxXSl7dmFyIGU9bih0aGlzLmV4dHJhRmllbGRzWzFdLnZhbHVlKTt0aGlzLnVuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLnVuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg4KSksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmRpc2tOdW1iZXJTdGFydD1lLnJlYWRJbnQoNCkpfX0scmVhZEV4dHJhRmllbGRzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpPWUuaW5kZXgrdGhpcy5leHRyYUZpZWxkc0xlbmd0aDtmb3IodGhpcy5leHRyYUZpZWxkc3x8KHRoaXMuZXh0cmFGaWVsZHM9e30pO2UuaW5kZXgrNDxpOyl0PWUucmVhZEludCgyKSxyPWUucmVhZEludCgyKSxuPWUucmVhZERhdGEociksdGhpcy5leHRyYUZpZWxkc1t0XT17aWQ6dCxsZW5ndGg6cix2YWx1ZTpufTtlLnNldEluZGV4KGkpfSxoYW5kbGVVVEY4OmZ1bmN0aW9uKCl7dmFyIGU9dS51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIjtpZih0aGlzLnVzZVVURjgoKSl0aGlzLmZpbGVOYW1lU3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVOYW1lKSx0aGlzLmZpbGVDb21tZW50U3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVDb21tZW50KTtlbHNle3ZhciB0PXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aCgpO2lmKG51bGwhPT10KXRoaXMuZmlsZU5hbWVTdHI9dDtlbHNle3ZhciByPXMudHJhbnNmb3JtVG8oZSx0aGlzLmZpbGVOYW1lKTt0aGlzLmZpbGVOYW1lU3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9dmFyIG49dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50KCk7aWYobnVsbCE9PW4pdGhpcy5maWxlQ29tbWVudFN0cj1uO2Vsc2V7dmFyIGk9cy50cmFuc2Zvcm1UbyhlLHRoaXMuZmlsZUNvbW1lbnQpO3RoaXMuZmlsZUNvbW1lbnRTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShpKX19fSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5leHRyYUZpZWxkc1syODc4OV07aWYoZSl7dmFyIHQ9bihlLnZhbHVlKTtyZXR1cm4gMSE9PXQucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlTmFtZSkhPT10LnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUodC5yZWFkRGF0YShlLmxlbmd0aC01KSl9cmV0dXJuIG51bGx9LGZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmV4dHJhRmllbGRzWzI1NDYxXTtpZihlKXt2YXIgdD1uKGUudmFsdWUpO3JldHVybiAxIT09dC5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVDb21tZW50KSE9PXQucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZSh0LnJlYWREYXRhKGUubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH19LHQuZXhwb3J0cz1sfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9jb21wcmVzc2lvbnNcIjozLFwiLi9jcmMzMlwiOjQsXCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzJ9XSwzNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LHIpe3RoaXMubmFtZT1lLHRoaXMuZGlyPXIuZGlyLHRoaXMuZGF0ZT1yLmRhdGUsdGhpcy5jb21tZW50PXIuY29tbWVudCx0aGlzLnVuaXhQZXJtaXNzaW9ucz1yLnVuaXhQZXJtaXNzaW9ucyx0aGlzLmRvc1Blcm1pc3Npb25zPXIuZG9zUGVybWlzc2lvbnMsdGhpcy5fZGF0YT10LHRoaXMuX2RhdGFCaW5hcnk9ci5iaW5hcnksdGhpcy5vcHRpb25zPXtjb21wcmVzc2lvbjpyLmNvbXByZXNzaW9uLGNvbXByZXNzaW9uT3B0aW9uczpyLmNvbXByZXNzaW9uT3B0aW9uc319dmFyIHM9ZShcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiKSxpPWUoXCIuL3N0cmVhbS9EYXRhV29ya2VyXCIpLGE9ZShcIi4vdXRmOFwiKSxvPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksaD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtuLnByb3RvdHlwZT17aW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24oZSl7dmFyIHQ9bnVsbCxyPVwic3RyaW5nXCI7dHJ5e2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dmFyIG49XCJzdHJpbmdcIj09PShyPWUudG9Mb3dlckNhc2UoKSl8fFwidGV4dFwiPT09cjtcImJpbmFyeXN0cmluZ1wiIT09ciYmXCJ0ZXh0XCIhPT1yfHwocj1cInN0cmluZ1wiKSx0PXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTt2YXIgaT0hdGhpcy5fZGF0YUJpbmFyeTtpJiYhbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSwhaSYmbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhEZWNvZGVXb3JrZXIpKX1jYXRjaChlKXsodD1uZXcgaChcImVycm9yXCIpKS5lcnJvcihlKX1yZXR1cm4gbmV3IHModCxyLFwiXCIpfSxhc3luYzpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKGUpLmFjY3VtdWxhdGUodCl9LG5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbShlfHxcIm5vZGVidWZmZXJcIikudG9Ob2RlanNTdHJlYW0odCl9LF9jb21wcmVzc1dvcmtlcjpmdW5jdGlvbihlLHQpe2lmKHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvJiZ0aGlzLl9kYXRhLmNvbXByZXNzaW9uLm1hZ2ljPT09ZS5tYWdpYylyZXR1cm4gdGhpcy5fZGF0YS5nZXRDb21wcmVzc2VkV29ya2VyKCk7dmFyIHI9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3JldHVybiB0aGlzLl9kYXRhQmluYXJ5fHwocj1yLnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLG8uY3JlYXRlV29ya2VyRnJvbShyLGUsdCl9LF9kZWNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvP3RoaXMuX2RhdGEuZ2V0Q29udGVudFdvcmtlcigpOnRoaXMuX2RhdGEgaW5zdGFuY2VvZiBoP3RoaXMuX2RhdGE6bmV3IGkodGhpcy5fZGF0YSl9fTtmb3IodmFyIHU9W1wiYXNUZXh0XCIsXCJhc0JpbmFyeVwiLFwiYXNOb2RlQnVmZmVyXCIsXCJhc1VpbnQ4QXJyYXlcIixcImFzQXJyYXlCdWZmZXJcIl0sbD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmPTA7Zjx1Lmxlbmd0aDtmKyspbi5wcm90b3R5cGVbdVtmXV09bDt0LmV4cG9ydHM9bn0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIjoyNyxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzF9XSwzNjpbZnVuY3Rpb24oZSxsLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgcixuLGU9dC5NdXRhdGlvbk9ic2VydmVyfHx0LldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7aWYoZSl7dmFyIGk9MCxzPW5ldyBlKHUpLGE9dC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtzLm9ic2VydmUoYSx7Y2hhcmFjdGVyRGF0YTohMH0pLHI9ZnVuY3Rpb24oKXthLmRhdGE9aT0rK2klMn19ZWxzZSBpZih0LnNldEltbWVkaWF0ZXx8dm9pZCAwPT09dC5NZXNzYWdlQ2hhbm5lbClyPVwiZG9jdW1lbnRcImluIHQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oKXt2YXIgZT10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt1KCksZS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksZT1udWxsfSx0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKX06ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KHUsMCl9O2Vsc2V7dmFyIG89bmV3IHQuTWVzc2FnZUNoYW5uZWw7by5wb3J0MS5vbm1lc3NhZ2U9dSxyPWZ1bmN0aW9uKCl7by5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19dmFyIGg9W107ZnVuY3Rpb24gdSgpe3ZhciBlLHQ7bj0hMDtmb3IodmFyIHI9aC5sZW5ndGg7cjspe2Zvcih0PWgsaD1bXSxlPS0xOysrZTxyOyl0W2VdKCk7cj1oLmxlbmd0aH1uPSExfWwuZXhwb3J0cz1mdW5jdGlvbihlKXsxIT09aC5wdXNoKGUpfHxufHxyKCl9fSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV0sMzc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiaW1tZWRpYXRlXCIpO2Z1bmN0aW9uIHUoKXt9dmFyIGw9e30scz1bXCJSRUpFQ1RFRFwiXSxhPVtcIkZVTEZJTExFRFwiXSxuPVtcIlBFTkRJTkdcIl07ZnVuY3Rpb24gbyhlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7dGhpcy5zdGF0ZT1uLHRoaXMucXVldWU9W10sdGhpcy5vdXRjb21lPXZvaWQgMCxlIT09dSYmZCh0aGlzLGUpfWZ1bmN0aW9uIGgoZSx0LHIpe3RoaXMucHJvbWlzZT1lLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0aGlzLm9uRnVsZmlsbGVkPXQsdGhpcy5jYWxsRnVsZmlsbGVkPXRoaXMub3RoZXJDYWxsRnVsZmlsbGVkKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodGhpcy5vblJlamVjdGVkPXIsdGhpcy5jYWxsUmVqZWN0ZWQ9dGhpcy5vdGhlckNhbGxSZWplY3RlZCl9ZnVuY3Rpb24gZih0LHIsbil7aShmdW5jdGlvbigpe3ZhciBlO3RyeXtlPXIobil9Y2F0Y2goZSl7cmV0dXJuIGwucmVqZWN0KHQsZSl9ZT09PXQ/bC5yZWplY3QodCxuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKSk6bC5yZXNvbHZlKHQsZSl9KX1mdW5jdGlvbiBjKGUpe3ZhciB0PWUmJmUudGhlbjtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIHI9ITE7ZnVuY3Rpb24gbihlKXtyfHwocj0hMCxsLnJlamVjdCh0LGUpKX1mdW5jdGlvbiBpKGUpe3J8fChyPSEwLGwucmVzb2x2ZSh0LGUpKX12YXIgcz1wKGZ1bmN0aW9uKCl7ZShpLG4pfSk7XCJlcnJvclwiPT09cy5zdGF0dXMmJm4ocy52YWx1ZSl9ZnVuY3Rpb24gcChlLHQpe3ZhciByPXt9O3RyeXtyLnZhbHVlPWUodCksci5zdGF0dXM9XCJzdWNjZXNzXCJ9Y2F0Y2goZSl7ci5zdGF0dXM9XCJlcnJvclwiLHIudmFsdWU9ZX1yZXR1cm4gcn0odC5leHBvcnRzPW8pLnByb3RvdHlwZS5maW5hbGx5PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIHRoaXM7dmFyIHI9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiByLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGV9KX0sZnVuY3Rpb24oZSl7cmV0dXJuIHIucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBlfSl9KX0sby5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxvLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmdGhpcy5zdGF0ZT09PWF8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJnRoaXMuc3RhdGU9PT1zKXJldHVybiB0aGlzO3ZhciByPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHUpO3RoaXMuc3RhdGUhPT1uP2Yocix0aGlzLnN0YXRlPT09YT9lOnQsdGhpcy5vdXRjb21lKTp0aGlzLnF1ZXVlLnB1c2gobmV3IGgocixlLHQpKTtyZXR1cm4gcn0saC5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZD1mdW5jdGlvbihlKXtsLnJlc29sdmUodGhpcy5wcm9taXNlLGUpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vbkZ1bGZpbGxlZCxlKX0saC5wcm90b3R5cGUuY2FsbFJlamVjdGVkPWZ1bmN0aW9uKGUpe2wucmVqZWN0KHRoaXMucHJvbWlzZSxlKX0saC5wcm90b3R5cGUub3RoZXJDYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vblJlamVjdGVkLGUpfSxsLnJlc29sdmU9ZnVuY3Rpb24oZSx0KXt2YXIgcj1wKGMsdCk7aWYoXCJlcnJvclwiPT09ci5zdGF0dXMpcmV0dXJuIGwucmVqZWN0KGUsci52YWx1ZSk7dmFyIG49ci52YWx1ZTtpZihuKWQoZSxuKTtlbHNle2Uuc3RhdGU9YSxlLm91dGNvbWU9dDtmb3IodmFyIGk9LTEscz1lLnF1ZXVlLmxlbmd0aDsrK2k8czspZS5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHQpfXJldHVybiBlfSxsLnJlamVjdD1mdW5jdGlvbihlLHQpe2Uuc3RhdGU9cyxlLm91dGNvbWU9dDtmb3IodmFyIHI9LTEsbj1lLnF1ZXVlLmxlbmd0aDsrK3I8bjspZS5xdWV1ZVtyXS5jYWxsUmVqZWN0ZWQodCk7cmV0dXJuIGV9LG8ucmVzb2x2ZT1mdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgdGhpcylyZXR1cm4gZTtyZXR1cm4gbC5yZXNvbHZlKG5ldyB0aGlzKHUpLGUpfSxvLnJlamVjdD1mdW5jdGlvbihlKXt2YXIgdD1uZXcgdGhpcyh1KTtyZXR1cm4gbC5yZWplY3QodCxlKX0sby5hbGw9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgbj1lLmxlbmd0aCxpPSExO2lmKCFuKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBzPW5ldyBBcnJheShuKSxhPTAsdD0tMSxvPW5ldyB0aGlzKHUpO2Zvcig7Kyt0PG47KWgoZVt0XSx0KTtyZXR1cm4gbztmdW5jdGlvbiBoKGUsdCl7ci5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24oZSl7c1t0XT1lLCsrYSE9PW58fGl8fChpPSEwLGwucmVzb2x2ZShvLHMpKX0sZnVuY3Rpb24oZSl7aXx8KGk9ITAsbC5yZWplY3QobyxlKSl9KX19LG8ucmFjZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciByPWUubGVuZ3RoLG49ITE7aWYoIXIpcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIGk9LTEscz1uZXcgdGhpcyh1KTtmb3IoOysraTxyOylhPWVbaV0sdC5yZXNvbHZlKGEpLnRoZW4oZnVuY3Rpb24oZSl7bnx8KG49ITAsbC5yZXNvbHZlKHMsZSkpfSxmdW5jdGlvbihlKXtufHwobj0hMCxsLnJlamVjdChzLGUpKX0pO3ZhciBhO3JldHVybiBzfX0se2ltbWVkaWF0ZTozNn1dLDM4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49e307KDAsZShcIi4vbGliL3V0aWxzL2NvbW1vblwiKS5hc3NpZ24pKG4sZShcIi4vbGliL2RlZmxhdGVcIiksZShcIi4vbGliL2luZmxhdGVcIiksZShcIi4vbGliL3psaWIvY29uc3RhbnRzXCIpKSx0LmV4cG9ydHM9bn0se1wiLi9saWIvZGVmbGF0ZVwiOjM5LFwiLi9saWIvaW5mbGF0ZVwiOjQwLFwiLi9saWIvdXRpbHMvY29tbW9uXCI6NDEsXCIuL2xpYi96bGliL2NvbnN0YW50c1wiOjQ0fV0sMzk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT1lKFwiLi96bGliL2RlZmxhdGVcIiksbz1lKFwiLi91dGlscy9jb21tb25cIiksaD1lKFwiLi91dGlscy9zdHJpbmdzXCIpLGk9ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxzPWUoXCIuL3psaWIvenN0cmVhbVwiKSx1PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbD0wLGY9LTEsYz0wLGQ9ODtmdW5jdGlvbiBwKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHApKXJldHVybiBuZXcgcChlKTt0aGlzLm9wdGlvbnM9by5hc3NpZ24oe2xldmVsOmYsbWV0aG9kOmQsY2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MTUsbWVtTGV2ZWw6OCxzdHJhdGVneTpjLHRvOlwiXCJ9LGV8fHt9KTt2YXIgdD10aGlzLm9wdGlvbnM7dC5yYXcmJjA8dC53aW5kb3dCaXRzP3Qud2luZG93Qml0cz0tdC53aW5kb3dCaXRzOnQuZ3ppcCYmMDx0LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cys9MTYpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgcyx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9YS5kZWZsYXRlSW5pdDIodGhpcy5zdHJtLHQubGV2ZWwsdC5tZXRob2QsdC53aW5kb3dCaXRzLHQubWVtTGV2ZWwsdC5zdHJhdGVneSk7aWYociE9PWwpdGhyb3cgbmV3IEVycm9yKGlbcl0pO2lmKHQuaGVhZGVyJiZhLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLHQuaGVhZGVyKSx0LmRpY3Rpb25hcnkpe3ZhciBuO2lmKG49XCJzdHJpbmdcIj09dHlwZW9mIHQuZGljdGlvbmFyeT9oLnN0cmluZzJidWYodC5kaWN0aW9uYXJ5KTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwodC5kaWN0aW9uYXJ5KT9uZXcgVWludDhBcnJheSh0LmRpY3Rpb25hcnkpOnQuZGljdGlvbmFyeSwocj1hLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxuKSkhPT1sKXRocm93IG5ldyBFcnJvcihpW3JdKTt0aGlzLl9kaWN0X3NldD0hMH19ZnVuY3Rpb24gbihlLHQpe3ZhciByPW5ldyBwKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8aVtyLmVycl07cmV0dXJuIHIucmVzdWx0fXAucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGk9dGhpcy5zdHJtLHM9dGhpcy5vcHRpb25zLmNodW5rU2l6ZTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD80OjAsXCJzdHJpbmdcIj09dHlwZW9mIGU/aS5pbnB1dD1oLnN0cmluZzJidWYoZSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKGUpP2kuaW5wdXQ9bmV3IFVpbnQ4QXJyYXkoZSk6aS5pbnB1dD1lLGkubmV4dF9pbj0wLGkuYXZhaWxfaW49aS5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWkuYXZhaWxfb3V0JiYoaS5vdXRwdXQ9bmV3IG8uQnVmOChzKSxpLm5leHRfb3V0PTAsaS5hdmFpbF9vdXQ9cyksMSE9PShyPWEuZGVmbGF0ZShpLG4pKSYmciE9PWwpcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTswIT09aS5hdmFpbF9vdXQmJigwIT09aS5hdmFpbF9pbnx8NCE9PW4mJjIhPT1uKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5vbkRhdGEoaC5idWYyYmluc3RyaW5nKG8uc2hyaW5rQnVmKGkub3V0cHV0LGkubmV4dF9vdXQpKSk6dGhpcy5vbkRhdGEoby5zaHJpbmtCdWYoaS5vdXRwdXQsaS5uZXh0X291dCkpKX13aGlsZSgoMDxpLmF2YWlsX2lufHwwPT09aS5hdmFpbF9vdXQpJiYxIT09cik7cmV0dXJuIDQ9PT1uPyhyPWEuZGVmbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bCk6MiE9PW58fCh0aGlzLm9uRW5kKGwpLCEoaS5hdmFpbF9vdXQ9MCkpfSxwLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaHVua3MucHVzaChlKX0scC5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24oZSl7ZT09PWwmJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9by5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkRlZmxhdGU9cCxyLmRlZmxhdGU9bixyLmRlZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG4oZSx0KX0sci5nemlwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dHx8e30pLmd6aXA9ITAsbihlLHQpfX0se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2RlZmxhdGVcIjo0NixcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZShcIi4vemxpYi9pbmZsYXRlXCIpLGQ9ZShcIi4vdXRpbHMvY29tbW9uXCIpLHA9ZShcIi4vdXRpbHMvc3RyaW5nc1wiKSxtPWUoXCIuL3psaWIvY29uc3RhbnRzXCIpLG49ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxpPWUoXCIuL3psaWIvenN0cmVhbVwiKSxzPWUoXCIuL3psaWIvZ3poZWFkZXJcIiksXz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2Z1bmN0aW9uIGEoZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgYSkpcmV0dXJuIG5ldyBhKGUpO3RoaXMub3B0aW9ucz1kLmFzc2lnbih7Y2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MCx0bzpcIlwifSxlfHx7fSk7dmFyIHQ9dGhpcy5vcHRpb25zO3QucmF3JiYwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cz0tdC53aW5kb3dCaXRzLDA9PT10LndpbmRvd0JpdHMmJih0LndpbmRvd0JpdHM9LTE1KSksISgwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNil8fGUmJmUud2luZG93Qml0c3x8KHQud2luZG93Qml0cys9MzIpLDE1PHQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDQ4JiYwPT0oMTUmdC53aW5kb3dCaXRzKSYmKHQud2luZG93Qml0c3w9MTUpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgaSx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9Yy5pbmZsYXRlSW5pdDIodGhpcy5zdHJtLHQud2luZG93Qml0cyk7aWYociE9PW0uWl9PSyl0aHJvdyBuZXcgRXJyb3IobltyXSk7dGhpcy5oZWFkZXI9bmV3IHMsYy5pbmZsYXRlR2V0SGVhZGVyKHRoaXMuc3RybSx0aGlzLmhlYWRlcil9ZnVuY3Rpb24gbyhlLHQpe3ZhciByPW5ldyBhKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8bltyLmVycl07cmV0dXJuIHIucmVzdWx0fWEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saD10aGlzLnN0cm0sdT10aGlzLm9wdGlvbnMuY2h1bmtTaXplLGw9dGhpcy5vcHRpb25zLmRpY3Rpb25hcnksZj0hMTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD9tLlpfRklOSVNIOm0uWl9OT19GTFVTSCxcInN0cmluZ1wiPT10eXBlb2YgZT9oLmlucHV0PXAuYmluc3RyaW5nMmJ1ZihlKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwoZSk/aC5pbnB1dD1uZXcgVWludDhBcnJheShlKTpoLmlucHV0PWUsaC5uZXh0X2luPTAsaC5hdmFpbF9pbj1oLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09aC5hdmFpbF9vdXQmJihoLm91dHB1dD1uZXcgZC5CdWY4KHUpLGgubmV4dF9vdXQ9MCxoLmF2YWlsX291dD11KSwocj1jLmluZmxhdGUoaCxtLlpfTk9fRkxVU0gpKT09PW0uWl9ORUVEX0RJQ1QmJmwmJihvPVwic3RyaW5nXCI9PXR5cGVvZiBsP3Auc3RyaW5nMmJ1ZihsKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwobCk/bmV3IFVpbnQ4QXJyYXkobCk6bCxyPWMuaW5mbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLG8pKSxyPT09bS5aX0JVRl9FUlJPUiYmITA9PT1mJiYocj1tLlpfT0ssZj0hMSksciE9PW0uWl9TVFJFQU1fRU5EJiZyIT09bS5aX09LKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7aC5uZXh0X291dCYmKDAhPT1oLmF2YWlsX291dCYmciE9PW0uWl9TVFJFQU1fRU5EJiYoMCE9PWguYXZhaWxfaW58fG4hPT1tLlpfRklOSVNIJiZuIT09bS5aX1NZTkNfRkxVU0gpfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz8oaT1wLnV0Zjhib3JkZXIoaC5vdXRwdXQsaC5uZXh0X291dCkscz1oLm5leHRfb3V0LWksYT1wLmJ1ZjJzdHJpbmcoaC5vdXRwdXQsaSksaC5uZXh0X291dD1zLGguYXZhaWxfb3V0PXUtcyxzJiZkLmFycmF5U2V0KGgub3V0cHV0LGgub3V0cHV0LGkscywwKSx0aGlzLm9uRGF0YShhKSk6dGhpcy5vbkRhdGEoZC5zaHJpbmtCdWYoaC5vdXRwdXQsaC5uZXh0X291dCkpKSksMD09PWguYXZhaWxfaW4mJjA9PT1oLmF2YWlsX291dCYmKGY9ITApfXdoaWxlKCgwPGguYXZhaWxfaW58fDA9PT1oLmF2YWlsX291dCkmJnIhPT1tLlpfU1RSRUFNX0VORCk7cmV0dXJuIHI9PT1tLlpfU1RSRUFNX0VORCYmKG49bS5aX0ZJTklTSCksbj09PW0uWl9GSU5JU0g/KHI9Yy5pbmZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1tLlpfT0spOm4hPT1tLlpfU1lOQ19GTFVTSHx8KHRoaXMub25FbmQobS5aX09LKSwhKGguYXZhaWxfb3V0PTApKX0sYS5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2h1bmtzLnB1c2goZSl9LGEucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKGUpe2U9PT1tLlpfT0smJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9ZC5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkluZmxhdGU9YSxyLmluZmxhdGU9byxyLmluZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG8oZSx0KX0sci51bmd6aXA9b30se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2NvbnN0YW50c1wiOjQ0LFwiLi96bGliL2d6aGVhZGVyXCI6NDcsXCIuL3psaWIvaW5mbGF0ZVwiOjQ5LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgSW50MzJBcnJheTtyLmFzc2lnbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3QubGVuZ3RoOyl7dmFyIHI9dC5zaGlmdCgpO2lmKHIpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IocitcIm11c3QgYmUgbm9uLW9iamVjdFwiKTtmb3IodmFyIG4gaW4gcilyLmhhc093blByb3BlcnR5KG4pJiYoZVtuXT1yW25dKX19cmV0dXJuIGV9LHIuc2hyaW5rQnVmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPT09dD9lOmUuc3ViYXJyYXk/ZS5zdWJhcnJheSgwLHQpOihlLmxlbmd0aD10LGUpfTt2YXIgaT17YXJyYXlTZXQ6ZnVuY3Rpb24oZSx0LHIsbixpKXtpZih0LnN1YmFycmF5JiZlLnN1YmFycmF5KWUuc2V0KHQuc3ViYXJyYXkocixyK24pLGkpO2Vsc2UgZm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYTtmb3IodD1uPTAscj1lLmxlbmd0aDt0PHI7dCsrKW4rPWVbdF0ubGVuZ3RoO2ZvcihhPW5ldyBVaW50OEFycmF5KG4pLHQ9aT0wLHI9ZS5sZW5ndGg7dDxyO3QrKylzPWVbdF0sYS5zZXQocyxpKSxpKz1zLmxlbmd0aDtyZXR1cm4gYX19LHM9e2FycmF5U2V0OmZ1bmN0aW9uKGUsdCxyLG4saSl7Zm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3JldHVybltdLmNvbmNhdC5hcHBseShbXSxlKX19O3Iuc2V0VHlwZWQ9ZnVuY3Rpb24oZSl7ZT8oci5CdWY4PVVpbnQ4QXJyYXksci5CdWYxNj1VaW50MTZBcnJheSxyLkJ1ZjMyPUludDMyQXJyYXksci5hc3NpZ24ocixpKSk6KHIuQnVmOD1BcnJheSxyLkJ1ZjE2PUFycmF5LHIuQnVmMzI9QXJyYXksci5hc3NpZ24ocixzKSl9LHIuc2V0VHlwZWQobil9LHt9XSw0MjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBoPWUoXCIuL2NvbW1vblwiKSxpPSEwLHM9ITA7dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxbMF0pfWNhdGNoKGUpe2k9ITF9dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSl9Y2F0Y2goZSl7cz0hMX1mb3IodmFyIHU9bmV3IGguQnVmOCgyNTYpLG49MDtuPDI1NjtuKyspdVtuXT0yNTI8PW4/NjoyNDg8PW4/NToyNDA8PW4/NDoyMjQ8PW4/MzoxOTI8PW4/MjoxO2Z1bmN0aW9uIGwoZSx0KXtpZih0PDY1NTM3JiYoZS5zdWJhcnJheSYmc3x8IWUuc3ViYXJyYXkmJmkpKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsaC5zaHJpbmtCdWYoZSx0KSk7Zm9yKHZhciByPVwiXCIsbj0wO248dDtuKyspcis9U3RyaW5nLmZyb21DaGFyQ29kZShlW25dKTtyZXR1cm4gcn11WzI1NF09dVsyNTRdPTEsci5zdHJpbmcyYnVmPWZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYT1lLmxlbmd0aCxvPTA7Zm9yKGk9MDtpPGE7aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IodD1uZXcgaC5CdWY4KG8pLGk9cz0wO3M8bztpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxyPDEyOD90W3MrK109cjoocjwyMDQ4P3RbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/dFtzKytdPTIyNHxyPj4+MTI6KHRbcysrXT0yNDB8cj4+PjE4LHRbcysrXT0xMjh8cj4+PjEyJjYzKSx0W3MrK109MTI4fHI+Pj42JjYzKSx0W3MrK109MTI4fDYzJnIpO3JldHVybiB0fSxyLmJ1ZjJiaW5zdHJpbmc9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxlLmxlbmd0aCl9LHIuYmluc3RyaW5nMmJ1Zj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IGguQnVmOChlLmxlbmd0aCkscj0wLG49dC5sZW5ndGg7cjxuO3IrKyl0W3JdPWUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH0sci5idWYyc3RyaW5nPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYT10fHxlLmxlbmd0aCxvPW5ldyBBcnJheSgyKmEpO2ZvcihyPW49MDtyPGE7KWlmKChpPWVbcisrXSk8MTI4KW9bbisrXT1pO2Vsc2UgaWYoNDwocz11W2ldKSlvW24rK109NjU1MzMscis9cy0xO2Vsc2V7Zm9yKGkmPTI9PT1zPzMxOjM9PT1zPzE1Ojc7MTxzJiZyPGE7KWk9aTw8Nnw2MyZlW3IrK10scy0tOzE8cz9vW24rK109NjU1MzM6aTw2NTUzNj9vW24rK109aTooaS09NjU1MzYsb1tuKytdPTU1Mjk2fGk+PjEwJjEwMjMsb1tuKytdPTU2MzIwfDEwMjMmaSl9cmV0dXJuIGwobyxuKX0sci51dGY4Ym9yZGVyPWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKCh0PXR8fGUubGVuZ3RoKT5lLmxlbmd0aCYmKHQ9ZS5sZW5ndGgpLHI9dC0xOzA8PXImJjEyOD09KDE5MiZlW3JdKTspci0tO3JldHVybiByPDA/dDowPT09cj90OnIrdVtlW3JdXT50P3I6dH19LHtcIi4vY29tbW9uXCI6NDF9XSw0MzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXtmb3IodmFyIGk9NjU1MzUmZXwwLHM9ZT4+PjE2JjY1NTM1fDAsYT0wOzAhPT1yOyl7Zm9yKHItPWE9MmUzPHI/MmUzOnI7cz1zKyhpPWkrdFtuKytdfDApfDAsLS1hOyk7aSU9NjU1MjEscyU9NjU1MjF9cmV0dXJuIGl8czw8MTZ8MH19LHt9XSw0NDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17Wl9OT19GTFVTSDowLFpfUEFSVElBTF9GTFVTSDoxLFpfU1lOQ19GTFVTSDoyLFpfRlVMTF9GTFVTSDozLFpfRklOSVNIOjQsWl9CTE9DSzo1LFpfVFJFRVM6NixaX09LOjAsWl9TVFJFQU1fRU5EOjEsWl9ORUVEX0RJQ1Q6MixaX0VSUk5POi0xLFpfU1RSRUFNX0VSUk9SOi0yLFpfREFUQV9FUlJPUjotMyxaX0JVRl9FUlJPUjotNSxaX05PX0NPTVBSRVNTSU9OOjAsWl9CRVNUX1NQRUVEOjEsWl9CRVNUX0NPTVBSRVNTSU9OOjksWl9ERUZBVUxUX0NPTVBSRVNTSU9OOi0xLFpfRklMVEVSRUQ6MSxaX0hVRkZNQU5fT05MWToyLFpfUkxFOjMsWl9GSVhFRDo0LFpfREVGQVVMVF9TVFJBVEVHWTowLFpfQklOQVJZOjAsWl9URVhUOjEsWl9VTktOT1dOOjIsWl9ERUZMQVRFRDo4fX0se31dLDQ1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9byxzPW4rcjtlXj0tMTtmb3IodmFyIGE9bjthPHM7YSsrKWU9ZT4+PjheaVsyNTUmKGVedFthXSldO3JldHVybi0xXmV9fSx7fV0sNDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaCxjPWUoXCIuLi91dGlscy9jb21tb25cIiksdT1lKFwiLi90cmVlc1wiKSxkPWUoXCIuL2FkbGVyMzJcIikscD1lKFwiLi9jcmMzMlwiKSxuPWUoXCIuL21lc3NhZ2VzXCIpLGw9MCxmPTQsbT0wLF89LTIsZz0tMSxiPTQsaT0yLHY9OCx5PTkscz0yODYsYT0zMCxvPTE5LHc9MipzKzEsaz0xNSx4PTMsUz0yNTgsej1TK3grMSxDPTQyLEU9MTEzLEE9MSxJPTIsTz0zLEI9NDtmdW5jdGlvbiBSKGUsdCl7cmV0dXJuIGUubXNnPW5bdF0sdH1mdW5jdGlvbiBUKGUpe3JldHVybihlPDwxKS0oNDxlPzk6MCl9ZnVuY3Rpb24gRChlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9ZnVuY3Rpb24gRihlKXt2YXIgdD1lLnN0YXRlLHI9dC5wZW5kaW5nO3I+ZS5hdmFpbF9vdXQmJihyPWUuYXZhaWxfb3V0KSwwIT09ciYmKGMuYXJyYXlTZXQoZS5vdXRwdXQsdC5wZW5kaW5nX2J1Zix0LnBlbmRpbmdfb3V0LHIsZS5uZXh0X291dCksZS5uZXh0X291dCs9cix0LnBlbmRpbmdfb3V0Kz1yLGUudG90YWxfb3V0Kz1yLGUuYXZhaWxfb3V0LT1yLHQucGVuZGluZy09ciwwPT09dC5wZW5kaW5nJiYodC5wZW5kaW5nX291dD0wKSl9ZnVuY3Rpb24gTihlLHQpe3UuX3RyX2ZsdXNoX2Jsb2NrKGUsMDw9ZS5ibG9ja19zdGFydD9lLmJsb2NrX3N0YXJ0Oi0xLGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydCx0KSxlLmJsb2NrX3N0YXJ0PWUuc3Ryc3RhcnQsRihlLnN0cm0pfWZ1bmN0aW9uIFUoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10fWZ1bmN0aW9uIFAoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10Pj4+OCYyNTUsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnR9ZnVuY3Rpb24gTChlLHQpe3ZhciByLG4saT1lLm1heF9jaGFpbl9sZW5ndGgscz1lLnN0cnN0YXJ0LGE9ZS5wcmV2X2xlbmd0aCxvPWUubmljZV9tYXRjaCxoPWUuc3Ryc3RhcnQ+ZS53X3NpemUtej9lLnN0cnN0YXJ0LShlLndfc2l6ZS16KTowLHU9ZS53aW5kb3csbD1lLndfbWFzayxmPWUucHJldixjPWUuc3Ryc3RhcnQrUyxkPXVbcythLTFdLHA9dVtzK2FdO2UucHJldl9sZW5ndGg+PWUuZ29vZF9tYXRjaCYmKGk+Pj0yKSxvPmUubG9va2FoZWFkJiYobz1lLmxvb2thaGVhZCk7ZG97aWYodVsocj10KSthXT09PXAmJnVbcithLTFdPT09ZCYmdVtyXT09PXVbc10mJnVbKytyXT09PXVbcysxXSl7cys9MixyKys7ZG97fXdoaWxlKHVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZzPGMpO2lmKG49Uy0oYy1zKSxzPWMtUyxhPG4pe2lmKGUubWF0Y2hfc3RhcnQ9dCxvPD0oYT1uKSlicmVhaztkPXVbcythLTFdLHA9dVtzK2FdfX19d2hpbGUoKHQ9Zlt0JmxdKT5oJiYwIT0tLWkpO3JldHVybiBhPD1lLmxvb2thaGVhZD9hOmUubG9va2FoZWFkfWZ1bmN0aW9uIGooZSl7dmFyIHQscixuLGkscyxhLG8saCx1LGwsZj1lLndfc2l6ZTtkb3tpZihpPWUud2luZG93X3NpemUtZS5sb29rYWhlYWQtZS5zdHJzdGFydCxlLnN0cnN0YXJ0Pj1mKyhmLXopKXtmb3IoYy5hcnJheVNldChlLndpbmRvdyxlLndpbmRvdyxmLGYsMCksZS5tYXRjaF9zdGFydC09ZixlLnN0cnN0YXJ0LT1mLGUuYmxvY2tfc3RhcnQtPWYsdD1yPWUuaGFzaF9zaXplO249ZS5oZWFkWy0tdF0sZS5oZWFkW3RdPWY8PW4/bi1mOjAsLS1yOyk7Zm9yKHQ9cj1mO249ZS5wcmV2Wy0tdF0sZS5wcmV2W3RdPWY8PW4/bi1mOjAsLS1yOyk7aSs9Zn1pZigwPT09ZS5zdHJtLmF2YWlsX2luKWJyZWFrO2lmKGE9ZS5zdHJtLG89ZS53aW5kb3csaD1lLnN0cnN0YXJ0K2UubG9va2FoZWFkLHU9aSxsPXZvaWQgMCxsPWEuYXZhaWxfaW4sdTxsJiYobD11KSxyPTA9PT1sPzA6KGEuYXZhaWxfaW4tPWwsYy5hcnJheVNldChvLGEuaW5wdXQsYS5uZXh0X2luLGwsaCksMT09PWEuc3RhdGUud3JhcD9hLmFkbGVyPWQoYS5hZGxlcixvLGwsaCk6Mj09PWEuc3RhdGUud3JhcCYmKGEuYWRsZXI9cChhLmFkbGVyLG8sbCxoKSksYS5uZXh0X2luKz1sLGEudG90YWxfaW4rPWwsbCksZS5sb29rYWhlYWQrPXIsZS5sb29rYWhlYWQrZS5pbnNlcnQ+PXgpZm9yKHM9ZS5zdHJzdGFydC1lLmluc2VydCxlLmluc19oPWUud2luZG93W3NdLGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzKzFdKSZlLmhhc2hfbWFzaztlLmluc2VydCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzK3gtMV0pJmUuaGFzaF9tYXNrLGUucHJldltzJmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPXMscysrLGUuaW5zZXJ0LS0sIShlLmxvb2thaGVhZCtlLmluc2VydDx4KSk7KTt9d2hpbGUoZS5sb29rYWhlYWQ8eiYmMCE9PWUuc3RybS5hdmFpbF9pbil9ZnVuY3Rpb24gWihlLHQpe2Zvcih2YXIgcixuOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksMCE9PXImJmUuc3Ryc3RhcnQtcjw9ZS53X3NpemUteiYmKGUubWF0Y2hfbGVuZ3RoPUwoZSxyKSksZS5tYXRjaF9sZW5ndGg+PXgpaWYobj11Ll90cl90YWxseShlLGUuc3Ryc3RhcnQtZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aC14KSxlLmxvb2thaGVhZC09ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg8PWUubWF4X2xhenlfbWF0Y2gmJmUubG9va2FoZWFkPj14KXtmb3IoZS5tYXRjaF9sZW5ndGgtLTtlLnN0cnN0YXJ0KyssZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0LDAhPS0tZS5tYXRjaF9sZW5ndGg7KTtlLnN0cnN0YXJ0Kyt9ZWxzZSBlLnN0cnN0YXJ0Kz1lLm1hdGNoX2xlbmd0aCxlLm1hdGNoX2xlbmd0aD0wLGUuaW5zX2g9ZS53aW5kb3dbZS5zdHJzdGFydF0sZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQrMV0pJmUuaGFzaF9tYXNrO2Vsc2Ugbj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydF0pLGUubG9va2FoZWFkLS0sZS5zdHJzdGFydCsrO2lmKG4mJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIFcoZSx0KXtmb3IodmFyIHIsbixpOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksZS5wcmV2X2xlbmd0aD1lLm1hdGNoX2xlbmd0aCxlLnByZXZfbWF0Y2g9ZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aD14LTEsMCE9PXImJmUucHJldl9sZW5ndGg8ZS5tYXhfbGF6eV9tYXRjaCYmZS5zdHJzdGFydC1yPD1lLndfc2l6ZS16JiYoZS5tYXRjaF9sZW5ndGg9TChlLHIpLGUubWF0Y2hfbGVuZ3RoPD01JiYoMT09PWUuc3RyYXRlZ3l8fGUubWF0Y2hfbGVuZ3RoPT09eCYmNDA5NjxlLnN0cnN0YXJ0LWUubWF0Y2hfc3RhcnQpJiYoZS5tYXRjaF9sZW5ndGg9eC0xKSksZS5wcmV2X2xlbmd0aD49eCYmZS5tYXRjaF9sZW5ndGg8PWUucHJldl9sZW5ndGgpe2ZvcihpPWUuc3Ryc3RhcnQrZS5sb29rYWhlYWQteCxuPXUuX3RyX3RhbGx5KGUsZS5zdHJzdGFydC0xLWUucHJldl9tYXRjaCxlLnByZXZfbGVuZ3RoLXgpLGUubG9va2FoZWFkLT1lLnByZXZfbGVuZ3RoLTEsZS5wcmV2X2xlbmd0aC09MjsrK2Uuc3Ryc3RhcnQ8PWkmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLDAhPS0tZS5wcmV2X2xlbmd0aDspO2lmKGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5tYXRjaF9sZW5ndGg9eC0xLGUuc3Ryc3RhcnQrKyxuJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9ZWxzZSBpZihlLm1hdGNoX2F2YWlsYWJsZSl7aWYoKG49dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnQtMV0pKSYmTihlLCExKSxlLnN0cnN0YXJ0KyssZS5sb29rYWhlYWQtLSwwPT09ZS5zdHJtLmF2YWlsX291dClyZXR1cm4gQX1lbHNlIGUubWF0Y2hfYXZhaWxhYmxlPTEsZS5zdHJzdGFydCsrLGUubG9va2FoZWFkLS19cmV0dXJuIGUubWF0Y2hfYXZhaWxhYmxlJiYobj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydC0xXSksZS5tYXRjaF9hdmFpbGFibGU9MCksZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIE0oZSx0LHIsbixpKXt0aGlzLmdvb2RfbGVuZ3RoPWUsdGhpcy5tYXhfbGF6eT10LHRoaXMubmljZV9sZW5ndGg9cix0aGlzLm1heF9jaGFpbj1uLHRoaXMuZnVuYz1pfWZ1bmN0aW9uIEgoKXt0aGlzLnN0cm09bnVsbCx0aGlzLnN0YXR1cz0wLHRoaXMucGVuZGluZ19idWY9bnVsbCx0aGlzLnBlbmRpbmdfYnVmX3NpemU9MCx0aGlzLnBlbmRpbmdfb3V0PTAsdGhpcy5wZW5kaW5nPTAsdGhpcy53cmFwPTAsdGhpcy5nemhlYWQ9bnVsbCx0aGlzLmd6aW5kZXg9MCx0aGlzLm1ldGhvZD12LHRoaXMubGFzdF9mbHVzaD0tMSx0aGlzLndfc2l6ZT0wLHRoaXMud19iaXRzPTAsdGhpcy53X21hc2s9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMud2luZG93X3NpemU9MCx0aGlzLnByZXY9bnVsbCx0aGlzLmhlYWQ9bnVsbCx0aGlzLmluc19oPTAsdGhpcy5oYXNoX3NpemU9MCx0aGlzLmhhc2hfYml0cz0wLHRoaXMuaGFzaF9tYXNrPTAsdGhpcy5oYXNoX3NoaWZ0PTAsdGhpcy5ibG9ja19zdGFydD0wLHRoaXMubWF0Y2hfbGVuZ3RoPTAsdGhpcy5wcmV2X21hdGNoPTAsdGhpcy5tYXRjaF9hdmFpbGFibGU9MCx0aGlzLnN0cnN0YXJ0PTAsdGhpcy5tYXRjaF9zdGFydD0wLHRoaXMubG9va2FoZWFkPTAsdGhpcy5wcmV2X2xlbmd0aD0wLHRoaXMubWF4X2NoYWluX2xlbmd0aD0wLHRoaXMubWF4X2xhenlfbWF0Y2g9MCx0aGlzLmxldmVsPTAsdGhpcy5zdHJhdGVneT0wLHRoaXMuZ29vZF9tYXRjaD0wLHRoaXMubmljZV9tYXRjaD0wLHRoaXMuZHluX2x0cmVlPW5ldyBjLkJ1ZjE2KDIqdyksdGhpcy5keW5fZHRyZWU9bmV3IGMuQnVmMTYoMiooMiphKzEpKSx0aGlzLmJsX3RyZWU9bmV3IGMuQnVmMTYoMiooMipvKzEpKSxEKHRoaXMuZHluX2x0cmVlKSxEKHRoaXMuZHluX2R0cmVlKSxEKHRoaXMuYmxfdHJlZSksdGhpcy5sX2Rlc2M9bnVsbCx0aGlzLmRfZGVzYz1udWxsLHRoaXMuYmxfZGVzYz1udWxsLHRoaXMuYmxfY291bnQ9bmV3IGMuQnVmMTYoaysxKSx0aGlzLmhlYXA9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5oZWFwKSx0aGlzLmhlYXBfbGVuPTAsdGhpcy5oZWFwX21heD0wLHRoaXMuZGVwdGg9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5kZXB0aCksdGhpcy5sX2J1Zj0wLHRoaXMubGl0X2J1ZnNpemU9MCx0aGlzLmxhc3RfbGl0PTAsdGhpcy5kX2J1Zj0wLHRoaXMub3B0X2xlbj0wLHRoaXMuc3RhdGljX2xlbj0wLHRoaXMubWF0Y2hlcz0wLHRoaXMuaW5zZXJ0PTAsdGhpcy5iaV9idWY9MCx0aGlzLmJpX3ZhbGlkPTB9ZnVuY3Rpb24gRyhlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8oZS50b3RhbF9pbj1lLnRvdGFsX291dD0wLGUuZGF0YV90eXBlPWksKHQ9ZS5zdGF0ZSkucGVuZGluZz0wLHQucGVuZGluZ19vdXQ9MCx0LndyYXA8MCYmKHQud3JhcD0tdC53cmFwKSx0LnN0YXR1cz10LndyYXA/QzpFLGUuYWRsZXI9Mj09PXQud3JhcD8wOjEsdC5sYXN0X2ZsdXNoPWwsdS5fdHJfaW5pdCh0KSxtKTpSKGUsXyl9ZnVuY3Rpb24gSyhlKXt2YXIgdD1HKGUpO3JldHVybiB0PT09bSYmZnVuY3Rpb24oZSl7ZS53aW5kb3dfc2l6ZT0yKmUud19zaXplLEQoZS5oZWFkKSxlLm1heF9sYXp5X21hdGNoPWhbZS5sZXZlbF0ubWF4X2xhenksZS5nb29kX21hdGNoPWhbZS5sZXZlbF0uZ29vZF9sZW5ndGgsZS5uaWNlX21hdGNoPWhbZS5sZXZlbF0ubmljZV9sZW5ndGgsZS5tYXhfY2hhaW5fbGVuZ3RoPWhbZS5sZXZlbF0ubWF4X2NoYWluLGUuc3Ryc3RhcnQ9MCxlLmJsb2NrX3N0YXJ0PTAsZS5sb29rYWhlYWQ9MCxlLmluc2VydD0wLGUubWF0Y2hfbGVuZ3RoPWUucHJldl9sZW5ndGg9eC0xLGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5pbnNfaD0wfShlLnN0YXRlKSx0fWZ1bmN0aW9uIFkoZSx0LHIsbixpLHMpe2lmKCFlKXJldHVybiBfO3ZhciBhPTE7aWYodD09PWcmJih0PTYpLG48MD8oYT0wLG49LW4pOjE1PG4mJihhPTIsbi09MTYpLGk8MXx8eTxpfHxyIT09dnx8bjw4fHwxNTxufHx0PDB8fDk8dHx8czwwfHxiPHMpcmV0dXJuIFIoZSxfKTs4PT09biYmKG49OSk7dmFyIG89bmV3IEg7cmV0dXJuKGUuc3RhdGU9bykuc3RybT1lLG8ud3JhcD1hLG8uZ3poZWFkPW51bGwsby53X2JpdHM9bixvLndfc2l6ZT0xPDxvLndfYml0cyxvLndfbWFzaz1vLndfc2l6ZS0xLG8uaGFzaF9iaXRzPWkrNyxvLmhhc2hfc2l6ZT0xPDxvLmhhc2hfYml0cyxvLmhhc2hfbWFzaz1vLmhhc2hfc2l6ZS0xLG8uaGFzaF9zaGlmdD1+figoby5oYXNoX2JpdHMreC0xKS94KSxvLndpbmRvdz1uZXcgYy5CdWY4KDIqby53X3NpemUpLG8uaGVhZD1uZXcgYy5CdWYxNihvLmhhc2hfc2l6ZSksby5wcmV2PW5ldyBjLkJ1ZjE2KG8ud19zaXplKSxvLmxpdF9idWZzaXplPTE8PGkrNixvLnBlbmRpbmdfYnVmX3NpemU9NCpvLmxpdF9idWZzaXplLG8ucGVuZGluZ19idWY9bmV3IGMuQnVmOChvLnBlbmRpbmdfYnVmX3NpemUpLG8uZF9idWY9MSpvLmxpdF9idWZzaXplLG8ubF9idWY9MypvLmxpdF9idWZzaXplLG8ubGV2ZWw9dCxvLnN0cmF0ZWd5PXMsby5tZXRob2Q9cixLKGUpfWg9W25ldyBNKDAsMCwwLDAsZnVuY3Rpb24oZSx0KXt2YXIgcj02NTUzNTtmb3Iocj5lLnBlbmRpbmdfYnVmX3NpemUtNSYmKHI9ZS5wZW5kaW5nX2J1Zl9zaXplLTUpOzspe2lmKGUubG9va2FoZWFkPD0xKXtpZihqKGUpLDA9PT1lLmxvb2thaGVhZCYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWUuc3Ryc3RhcnQrPWUubG9va2FoZWFkLGUubG9va2FoZWFkPTA7dmFyIG49ZS5ibG9ja19zdGFydCtyO2lmKCgwPT09ZS5zdHJzdGFydHx8ZS5zdHJzdGFydD49bikmJihlLmxvb2thaGVhZD1lLnN0cnN0YXJ0LW4sZS5zdHJzdGFydD1uLE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBO2lmKGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydD49ZS53X3NpemUteiYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD0wLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6KGUuc3Ryc3RhcnQ+ZS5ibG9ja19zdGFydCYmKE4oZSwhMSksZS5zdHJtLmF2YWlsX291dCksQSl9KSxuZXcgTSg0LDQsOCw0LFopLG5ldyBNKDQsNSwxNiw4LFopLG5ldyBNKDQsNiwzMiwzMixaKSxuZXcgTSg0LDQsMTYsMTYsVyksbmV3IE0oOCwxNiwzMiwzMixXKSxuZXcgTSg4LDE2LDEyOCwxMjgsVyksbmV3IE0oOCwzMiwxMjgsMjU2LFcpLG5ldyBNKDMyLDEyOCwyNTgsMTAyNCxXKSxuZXcgTSgzMiwyNTgsMjU4LDQwOTYsVyldLHIuZGVmbGF0ZUluaXQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gWShlLHQsdiwxNSw4LDApfSxyLmRlZmxhdGVJbml0Mj1ZLHIuZGVmbGF0ZVJlc2V0PUssci5kZWZsYXRlUmVzZXRLZWVwPUcsci5kZWZsYXRlU2V0SGVhZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJmUuc3RhdGU/MiE9PWUuc3RhdGUud3JhcD9fOihlLnN0YXRlLmd6aGVhZD10LG0pOl99LHIuZGVmbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzO2lmKCFlfHwhZS5zdGF0ZXx8NTx0fHx0PDApcmV0dXJuIGU/UihlLF8pOl87aWYobj1lLnN0YXRlLCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2lufHw2NjY9PT1uLnN0YXR1cyYmdCE9PWYpcmV0dXJuIFIoZSwwPT09ZS5hdmFpbF9vdXQ/LTU6Xyk7aWYobi5zdHJtPWUscj1uLmxhc3RfZmx1c2gsbi5sYXN0X2ZsdXNoPXQsbi5zdGF0dXM9PT1DKWlmKDI9PT1uLndyYXApZS5hZGxlcj0wLFUobiwzMSksVShuLDEzOSksVShuLDgpLG4uZ3poZWFkPyhVKG4sKG4uZ3poZWFkLnRleHQ/MTowKSsobi5nemhlYWQuaGNyYz8yOjApKyhuLmd6aGVhZC5leHRyYT80OjApKyhuLmd6aGVhZC5uYW1lPzg6MCkrKG4uZ3poZWFkLmNvbW1lbnQ/MTY6MCkpLFUobiwyNTUmbi5nemhlYWQudGltZSksVShuLG4uZ3poZWFkLnRpbWU+PjgmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MTYmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MjQmMjU1KSxVKG4sOT09PW4ubGV2ZWw/MjoyPD1uLnN0cmF0ZWd5fHxuLmxldmVsPDI/NDowKSxVKG4sMjU1Jm4uZ3poZWFkLm9zKSxuLmd6aGVhZC5leHRyYSYmbi5nemhlYWQuZXh0cmEubGVuZ3RoJiYoVShuLDI1NSZuLmd6aGVhZC5leHRyYS5sZW5ndGgpLFUobixuLmd6aGVhZC5leHRyYS5sZW5ndGg+PjgmMjU1KSksbi5nemhlYWQuaGNyYyYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLDApKSxuLmd6aW5kZXg9MCxuLnN0YXR1cz02OSk6KFUobiwwKSxVKG4sMCksVShuLDApLFUobiwwKSxVKG4sMCksVShuLDk9PT1uLmxldmVsPzI6Mjw9bi5zdHJhdGVneXx8bi5sZXZlbDwyPzQ6MCksVShuLDMpLG4uc3RhdHVzPUUpO2Vsc2V7dmFyIGE9disobi53X2JpdHMtODw8NCk8PDg7YXw9KDI8PW4uc3RyYXRlZ3l8fG4ubGV2ZWw8Mj8wOm4ubGV2ZWw8Nj8xOjY9PT1uLmxldmVsPzI6Myk8PDYsMCE9PW4uc3Ryc3RhcnQmJihhfD0zMiksYSs9MzEtYSUzMSxuLnN0YXR1cz1FLFAobixhKSwwIT09bi5zdHJzdGFydCYmKFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksZS5hZGxlcj0xfWlmKDY5PT09bi5zdGF0dXMpaWYobi5nemhlYWQuZXh0cmEpe2ZvcihpPW4ucGVuZGluZztuLmd6aW5kZXg8KDY1NTM1Jm4uZ3poZWFkLmV4dHJhLmxlbmd0aCkmJihuLnBlbmRpbmchPT1uLnBlbmRpbmdfYnVmX3NpemV8fChuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLEYoZSksaT1uLnBlbmRpbmcsbi5wZW5kaW5nIT09bi5wZW5kaW5nX2J1Zl9zaXplKSk7KVUobiwyNTUmbi5nemhlYWQuZXh0cmFbbi5nemluZGV4XSksbi5nemluZGV4Kys7bi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxuLmd6aW5kZXg9PT1uLmd6aGVhZC5leHRyYS5sZW5ndGgmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz03Myl9ZWxzZSBuLnN0YXR1cz03MztpZig3Mz09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLm5hbWUpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQubmFtZS5sZW5ndGg/MjU1Jm4uZ3poZWFkLm5hbWUuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz05MSl9ZWxzZSBuLnN0YXR1cz05MTtpZig5MT09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLmNvbW1lbnQpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQuY29tbWVudC5sZW5ndGg/MjU1Jm4uZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLnN0YXR1cz0xMDMpfWVsc2Ugbi5zdGF0dXM9MTAzO2lmKDEwMz09PW4uc3RhdHVzJiYobi5nemhlYWQuaGNyYz8obi5wZW5kaW5nKzI+bi5wZW5kaW5nX2J1Zl9zaXplJiZGKGUpLG4ucGVuZGluZysyPD1uLnBlbmRpbmdfYnVmX3NpemUmJihVKG4sMjU1JmUuYWRsZXIpLFUobixlLmFkbGVyPj44JjI1NSksZS5hZGxlcj0wLG4uc3RhdHVzPUUpKTpuLnN0YXR1cz1FKSwwIT09bi5wZW5kaW5nKXtpZihGKGUpLDA9PT1lLmF2YWlsX291dClyZXR1cm4gbi5sYXN0X2ZsdXNoPS0xLG19ZWxzZSBpZigwPT09ZS5hdmFpbF9pbiYmVCh0KTw9VChyKSYmdCE9PWYpcmV0dXJuIFIoZSwtNSk7aWYoNjY2PT09bi5zdGF0dXMmJjAhPT1lLmF2YWlsX2luKXJldHVybiBSKGUsLTUpO2lmKDAhPT1lLmF2YWlsX2lufHwwIT09bi5sb29rYWhlYWR8fHQhPT1sJiY2NjYhPT1uLnN0YXR1cyl7dmFyIG89Mj09PW4uc3RyYXRlZ3k/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI7Oyl7aWYoMD09PWUubG9va2FoZWFkJiYoaihlKSwwPT09ZS5sb29rYWhlYWQpKXtpZih0PT09bClyZXR1cm4gQTticmVha31pZihlLm1hdGNoX2xlbmd0aD0wLHI9dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnRdKSxlLmxvb2thaGVhZC0tLGUuc3Ryc3RhcnQrKyxyJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PTAsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfShuLHQpOjM9PT1uLnN0cmF0ZWd5P2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciByLG4saSxzLGE9ZS53aW5kb3c7Oyl7aWYoZS5sb29rYWhlYWQ8PVMpe2lmKGooZSksZS5sb29rYWhlYWQ8PVMmJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31pZihlLm1hdGNoX2xlbmd0aD0wLGUubG9va2FoZWFkPj14JiYwPGUuc3Ryc3RhcnQmJihuPWFbaT1lLnN0cnN0YXJ0LTFdKT09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSl7cz1lLnN0cnN0YXJ0K1M7ZG97fXdoaWxlKG49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJmk8cyk7ZS5tYXRjaF9sZW5ndGg9Uy0ocy1pKSxlLm1hdGNoX2xlbmd0aD5lLmxvb2thaGVhZCYmKGUubWF0Y2hfbGVuZ3RoPWUubG9va2FoZWFkKX1pZihlLm1hdGNoX2xlbmd0aD49eD8ocj11Ll90cl90YWxseShlLDEsZS5tYXRjaF9sZW5ndGgteCksZS5sb29rYWhlYWQtPWUubWF0Y2hfbGVuZ3RoLGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTApOihyPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyspLHImJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9MCx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9KG4sdCk6aFtuLmxldmVsXS5mdW5jKG4sdCk7aWYobyE9PU8mJm8hPT1CfHwobi5zdGF0dXM9NjY2KSxvPT09QXx8bz09PU8pcmV0dXJuIDA9PT1lLmF2YWlsX291dCYmKG4ubGFzdF9mbHVzaD0tMSksbTtpZihvPT09SSYmKDE9PT10P3UuX3RyX2FsaWduKG4pOjUhPT10JiYodS5fdHJfc3RvcmVkX2Jsb2NrKG4sMCwwLCExKSwzPT09dCYmKEQobi5oZWFkKSwwPT09bi5sb29rYWhlYWQmJihuLnN0cnN0YXJ0PTAsbi5ibG9ja19zdGFydD0wLG4uaW5zZXJ0PTApKSksRihlKSwwPT09ZS5hdmFpbF9vdXQpKXJldHVybiBuLmxhc3RfZmx1c2g9LTEsbX1yZXR1cm4gdCE9PWY/bTpuLndyYXA8PTA/MTooMj09PW4ud3JhcD8oVShuLDI1NSZlLmFkbGVyKSxVKG4sZS5hZGxlcj4+OCYyNTUpLFUobixlLmFkbGVyPj4xNiYyNTUpLFUobixlLmFkbGVyPj4yNCYyNTUpLFUobiwyNTUmZS50b3RhbF9pbiksVShuLGUudG90YWxfaW4+PjgmMjU1KSxVKG4sZS50b3RhbF9pbj4+MTYmMjU1KSxVKG4sZS50b3RhbF9pbj4+MjQmMjU1KSk6KFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksRihlKSwwPG4ud3JhcCYmKG4ud3JhcD0tbi53cmFwKSwwIT09bi5wZW5kaW5nP206MSl9LHIuZGVmbGF0ZUVuZD1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8odD1lLnN0YXRlLnN0YXR1cykhPT1DJiY2OSE9PXQmJjczIT09dCYmOTEhPT10JiYxMDMhPT10JiZ0IT09RSYmNjY2IT09dD9SKGUsXyk6KGUuc3RhdGU9bnVsbCx0PT09RT9SKGUsLTMpOm0pOl99LHIuZGVmbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGw9dC5sZW5ndGg7aWYoIWV8fCFlLnN0YXRlKXJldHVybiBfO2lmKDI9PT0ocz0ocj1lLnN0YXRlKS53cmFwKXx8MT09PXMmJnIuc3RhdHVzIT09Q3x8ci5sb29rYWhlYWQpcmV0dXJuIF87Zm9yKDE9PT1zJiYoZS5hZGxlcj1kKGUuYWRsZXIsdCxsLDApKSxyLndyYXA9MCxsPj1yLndfc2l6ZSYmKDA9PT1zJiYoRChyLmhlYWQpLHIuc3Ryc3RhcnQ9MCxyLmJsb2NrX3N0YXJ0PTAsci5pbnNlcnQ9MCksdT1uZXcgYy5CdWY4KHIud19zaXplKSxjLmFycmF5U2V0KHUsdCxsLXIud19zaXplLHIud19zaXplLDApLHQ9dSxsPXIud19zaXplKSxhPWUuYXZhaWxfaW4sbz1lLm5leHRfaW4saD1lLmlucHV0LGUuYXZhaWxfaW49bCxlLm5leHRfaW49MCxlLmlucHV0PXQsaihyKTtyLmxvb2thaGVhZD49eDspe2ZvcihuPXIuc3Ryc3RhcnQsaT1yLmxvb2thaGVhZC0oeC0xKTtyLmluc19oPShyLmluc19oPDxyLmhhc2hfc2hpZnReci53aW5kb3dbbit4LTFdKSZyLmhhc2hfbWFzayxyLnByZXZbbiZyLndfbWFza109ci5oZWFkW3IuaW5zX2hdLHIuaGVhZFtyLmluc19oXT1uLG4rKywtLWk7KTtyLnN0cnN0YXJ0PW4sci5sb29rYWhlYWQ9eC0xLGoocil9cmV0dXJuIHIuc3Ryc3RhcnQrPXIubG9va2FoZWFkLHIuYmxvY2tfc3RhcnQ9ci5zdHJzdGFydCxyLmluc2VydD1yLmxvb2thaGVhZCxyLmxvb2thaGVhZD0wLHIubWF0Y2hfbGVuZ3RoPXIucHJldl9sZW5ndGg9eC0xLHIubWF0Y2hfYXZhaWxhYmxlPTAsZS5uZXh0X2luPW8sZS5pbnB1dD1oLGUuYXZhaWxfaW49YSxyLndyYXA9cyxtfSxyLmRlZmxhdGVJbmZvPVwicGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9tZXNzYWdlc1wiOjUxLFwiLi90cmVlc1wiOjUyfV0sNDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLnRleHQ9MCx0aGlzLnRpbWU9MCx0aGlzLnhmbGFncz0wLHRoaXMub3M9MCx0aGlzLmV4dHJhPW51bGwsdGhpcy5leHRyYV9sZW49MCx0aGlzLm5hbWU9XCJcIix0aGlzLmNvbW1lbnQ9XCJcIix0aGlzLmhjcmM9MCx0aGlzLmRvbmU9ITF9fSx7fV0sNDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQztyPWUuc3RhdGUsbj1lLm5leHRfaW4sej1lLmlucHV0LGk9bisoZS5hdmFpbF9pbi01KSxzPWUubmV4dF9vdXQsQz1lLm91dHB1dCxhPXMtKHQtZS5hdmFpbF9vdXQpLG89cysoZS5hdmFpbF9vdXQtMjU3KSxoPXIuZG1heCx1PXIud3NpemUsbD1yLndoYXZlLGY9ci53bmV4dCxjPXIud2luZG93LGQ9ci5ob2xkLHA9ci5iaXRzLG09ci5sZW5jb2RlLF89ci5kaXN0Y29kZSxnPSgxPDxyLmxlbmJpdHMpLTEsYj0oMTw8ci5kaXN0Yml0cyktMTtlOmRve3A8MTUmJihkKz16W24rK108PHAscCs9OCxkKz16W24rK108PHAscCs9OCksdj1tW2QmZ107dDpmb3IoOzspe2lmKGQ+Pj49eT12Pj4+MjQscC09eSwwPT09KHk9dj4+PjE2JjI1NSkpQ1tzKytdPTY1NTM1JnY7ZWxzZXtpZighKDE2JnkpKXtpZigwPT0oNjQmeSkpe3Y9bVsoNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSB0fWlmKDMyJnkpe3IubW9kZT0xMjticmVhayBlfWUubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9dz02NTUzNSZ2LCh5Jj0xNSkmJihwPHkmJihkKz16W24rK108PHAscCs9OCksdys9ZCYoMTw8eSktMSxkPj4+PXkscC09eSkscDwxNSYmKGQrPXpbbisrXTw8cCxwKz04LGQrPXpbbisrXTw8cCxwKz04KSx2PV9bZCZiXTtyOmZvcig7Oyl7aWYoZD4+Pj15PXY+Pj4yNCxwLT15LCEoMTYmKHk9dj4+PjE2JjI1NSkpKXtpZigwPT0oNjQmeSkpe3Y9X1soNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSByfWUubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoaz02NTUzNSZ2LHA8KHkmPTE1KSYmKGQrPXpbbisrXTw8cCwocCs9OCk8eSYmKGQrPXpbbisrXTw8cCxwKz04KSksaDwoays9ZCYoMTw8eSktMSkpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgZX1pZihkPj4+PXkscC09eSwoeT1zLWEpPGspe2lmKGw8KHk9ay15KSYmci5zYW5lKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoUz1jLCh4PTApPT09Zil7aWYoeCs9dS15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTt4PXMtayxTPUN9fWVsc2UgaWYoZjx5KXtpZih4Kz11K2YteSwoeS09Zik8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTtpZih4PTAsZjx3KXtmb3Iody09eT1mO0NbcysrXT1jW3grK10sLS15Oyk7eD1zLWssUz1DfX19ZWxzZSBpZih4Kz1mLXkseTx3KXtmb3Iody09eTtDW3MrK109Y1t4KytdLC0teTspO3g9cy1rLFM9Q31mb3IoOzI8dzspQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sdy09Mzt3JiYoQ1tzKytdPVNbeCsrXSwxPHcmJihDW3MrK109U1t4KytdKSl9ZWxzZXtmb3IoeD1zLWs7Q1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sMjwody09Myk7KTt3JiYoQ1tzKytdPUNbeCsrXSwxPHcmJihDW3MrK109Q1t4KytdKSl9YnJlYWt9fWJyZWFrfX13aGlsZShuPGkmJnM8byk7bi09dz1wPj4zLGQmPSgxPDwocC09dzw8MykpLTEsZS5uZXh0X2luPW4sZS5uZXh0X291dD1zLGUuYXZhaWxfaW49bjxpP2ktbis1OjUtKG4taSksZS5hdmFpbF9vdXQ9czxvP28tcysyNTc6MjU3LShzLW8pLHIuaG9sZD1kLHIuYml0cz1wfX0se31dLDQ5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEk9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSxPPWUoXCIuL2FkbGVyMzJcIiksQj1lKFwiLi9jcmMzMlwiKSxSPWUoXCIuL2luZmZhc3RcIiksVD1lKFwiLi9pbmZ0cmVlc1wiKSxEPTEsRj0yLE49MCxVPS0yLFA9MSxuPTg1MixpPTU5MjtmdW5jdGlvbiBMKGUpe3JldHVybihlPj4+MjQmMjU1KSsoZT4+PjgmNjUyODApKygoNjUyODAmZSk8PDgpKygoMjU1JmUpPDwyNCl9ZnVuY3Rpb24gcygpe3RoaXMubW9kZT0wLHRoaXMubGFzdD0hMSx0aGlzLndyYXA9MCx0aGlzLmhhdmVkaWN0PSExLHRoaXMuZmxhZ3M9MCx0aGlzLmRtYXg9MCx0aGlzLmNoZWNrPTAsdGhpcy50b3RhbD0wLHRoaXMuaGVhZD1udWxsLHRoaXMud2JpdHM9MCx0aGlzLndzaXplPTAsdGhpcy53aGF2ZT0wLHRoaXMud25leHQ9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMuaG9sZD0wLHRoaXMuYml0cz0wLHRoaXMubGVuZ3RoPTAsdGhpcy5vZmZzZXQ9MCx0aGlzLmV4dHJhPTAsdGhpcy5sZW5jb2RlPW51bGwsdGhpcy5kaXN0Y29kZT1udWxsLHRoaXMubGVuYml0cz0wLHRoaXMuZGlzdGJpdHM9MCx0aGlzLm5jb2RlPTAsdGhpcy5ubGVuPTAsdGhpcy5uZGlzdD0wLHRoaXMuaGF2ZT0wLHRoaXMubmV4dD1udWxsLHRoaXMubGVucz1uZXcgSS5CdWYxNigzMjApLHRoaXMud29yaz1uZXcgSS5CdWYxNigyODgpLHRoaXMubGVuZHluPW51bGwsdGhpcy5kaXN0ZHluPW51bGwsdGhpcy5zYW5lPTAsdGhpcy5iYWNrPTAsdGhpcy53YXM9MH1mdW5jdGlvbiBhKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPyh0PWUuc3RhdGUsZS50b3RhbF9pbj1lLnRvdGFsX291dD10LnRvdGFsPTAsZS5tc2c9XCJcIix0LndyYXAmJihlLmFkbGVyPTEmdC53cmFwKSx0Lm1vZGU9UCx0Lmxhc3Q9MCx0LmhhdmVkaWN0PTAsdC5kbWF4PTMyNzY4LHQuaGVhZD1udWxsLHQuaG9sZD0wLHQuYml0cz0wLHQubGVuY29kZT10LmxlbmR5bj1uZXcgSS5CdWYzMihuKSx0LmRpc3Rjb2RlPXQuZGlzdGR5bj1uZXcgSS5CdWYzMihpKSx0LnNhbmU9MSx0LmJhY2s9LTEsTik6VX1mdW5jdGlvbiBvKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPygodD1lLnN0YXRlKS53c2l6ZT0wLHQud2hhdmU9MCx0LnduZXh0PTAsYShlKSk6VX1mdW5jdGlvbiBoKGUsdCl7dmFyIHIsbjtyZXR1cm4gZSYmZS5zdGF0ZT8obj1lLnN0YXRlLHQ8MD8ocj0wLHQ9LXQpOihyPTErKHQ+PjQpLHQ8NDgmJih0Jj0xNSkpLHQmJih0PDh8fDE1PHQpP1U6KG51bGwhPT1uLndpbmRvdyYmbi53Yml0cyE9PXQmJihuLndpbmRvdz1udWxsKSxuLndyYXA9cixuLndiaXRzPXQsbyhlKSkpOlV9ZnVuY3Rpb24gdShlLHQpe3ZhciByLG47cmV0dXJuIGU/KG49bmV3IHMsKGUuc3RhdGU9bikud2luZG93PW51bGwsKHI9aChlLHQpKSE9PU4mJihlLnN0YXRlPW51bGwpLHIpOlV9dmFyIGwsZixjPSEwO2Z1bmN0aW9uIGooZSl7aWYoYyl7dmFyIHQ7Zm9yKGw9bmV3IEkuQnVmMzIoNTEyKSxmPW5ldyBJLkJ1ZjMyKDMyKSx0PTA7dDwxNDQ7KWUubGVuc1t0KytdPTg7Zm9yKDt0PDI1NjspZS5sZW5zW3QrK109OTtmb3IoO3Q8MjgwOyllLmxlbnNbdCsrXT03O2Zvcig7dDwyODg7KWUubGVuc1t0KytdPTg7Zm9yKFQoRCxlLmxlbnMsMCwyODgsbCwwLGUud29yayx7Yml0czo5fSksdD0wO3Q8MzI7KWUubGVuc1t0KytdPTU7VChGLGUubGVucywwLDMyLGYsMCxlLndvcmsse2JpdHM6NX0pLGM9ITF9ZS5sZW5jb2RlPWwsZS5sZW5iaXRzPTksZS5kaXN0Y29kZT1mLGUuZGlzdGJpdHM9NX1mdW5jdGlvbiBaKGUsdCxyLG4pe3ZhciBpLHM9ZS5zdGF0ZTtyZXR1cm4gbnVsbD09PXMud2luZG93JiYocy53c2l6ZT0xPDxzLndiaXRzLHMud25leHQ9MCxzLndoYXZlPTAscy53aW5kb3c9bmV3IEkuQnVmOChzLndzaXplKSksbj49cy53c2l6ZT8oSS5hcnJheVNldChzLndpbmRvdyx0LHItcy53c2l6ZSxzLndzaXplLDApLHMud25leHQ9MCxzLndoYXZlPXMud3NpemUpOihuPChpPXMud3NpemUtcy53bmV4dCkmJihpPW4pLEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4saSxzLnduZXh0KSwobi09aSk/KEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4sbiwwKSxzLnduZXh0PW4scy53aGF2ZT1zLndzaXplKToocy53bmV4dCs9aSxzLnduZXh0PT09cy53c2l6ZSYmKHMud25leHQ9MCkscy53aGF2ZTxzLndzaXplJiYocy53aGF2ZSs9aSkpKSwwfXIuaW5mbGF0ZVJlc2V0PW8sci5pbmZsYXRlUmVzZXQyPWgsci5pbmZsYXRlUmVzZXRLZWVwPWEsci5pbmZsYXRlSW5pdD1mdW5jdGlvbihlKXtyZXR1cm4gdShlLDE1KX0sci5pbmZsYXRlSW5pdDI9dSxyLmluZmxhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQz0wLEU9bmV3IEkuQnVmOCg0KSxBPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XTtpZighZXx8IWUuc3RhdGV8fCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2luKXJldHVybiBVOzEyPT09KHI9ZS5zdGF0ZSkubW9kZSYmKHIubW9kZT0xMyksYT1lLm5leHRfb3V0LGk9ZS5vdXRwdXQsaD1lLmF2YWlsX291dCxzPWUubmV4dF9pbixuPWUuaW5wdXQsbz1lLmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLGY9byxjPWgseD1OO2U6Zm9yKDs7KXN3aXRjaChyLm1vZGUpe2Nhc2UgUDppZigwPT09ci53cmFwKXtyLm1vZGU9MTM7YnJlYWt9Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMiZyLndyYXAmJjM1NjE1PT09dSl7RVtyLmNoZWNrPTBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSxsPXU9MCxyLm1vZGU9MjticmVha31pZihyLmZsYWdzPTAsci5oZWFkJiYoci5oZWFkLmRvbmU9ITEpLCEoMSZyLndyYXApfHwoKCgyNTUmdSk8PDgpKyh1Pj44KSklMzEpe2UubXNnPVwiaW5jb3JyZWN0IGhlYWRlciBjaGVja1wiLHIubW9kZT0zMDticmVha31pZig4IT0oMTUmdSkpe2UubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYobC09NCxrPTgrKDE1Jih1Pj4+PTQpKSwwPT09ci53Yml0cylyLndiaXRzPWs7ZWxzZSBpZihrPnIud2JpdHMpe2UubXNnPVwiaW52YWxpZCB3aW5kb3cgc2l6ZVwiLHIubW9kZT0zMDticmVha31yLmRtYXg9MTw8ayxlLmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9NTEyJnU/MTA6MTIsbD11PTA7YnJlYWs7Y2FzZSAyOmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHIuZmxhZ3M9dSw4IT0oMjU1JnIuZmxhZ3MpKXtlLm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKDU3MzQ0JnIuZmxhZ3Mpe2UubXNnPVwidW5rbm93biBoZWFkZXIgZmxhZ3Mgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGVhZCYmKHIuaGVhZC50ZXh0PXU+PjgmMSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTM7Y2FzZSAzOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC50aW1lPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxFWzJdPXU+Pj4xNiYyNTUsRVszXT11Pj4+MjQmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsNCwwKSksbD11PTAsci5tb2RlPTQ7Y2FzZSA0OmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC54ZmxhZ3M9MjU1JnUsci5oZWFkLm9zPXU+PjgpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT01O2Nhc2UgNTppZigxMDI0JnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIubGVuZ3RoPXUsci5oZWFkJiYoci5oZWFkLmV4dHJhX2xlbj11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MH1lbHNlIHIuaGVhZCYmKHIuaGVhZC5leHRyYT1udWxsKTtyLm1vZGU9NjtjYXNlIDY6aWYoMTAyNCZyLmZsYWdzJiYobzwoZD1yLmxlbmd0aCkmJihkPW8pLGQmJihyLmhlYWQmJihrPXIuaGVhZC5leHRyYV9sZW4tci5sZW5ndGgsci5oZWFkLmV4dHJhfHwoci5oZWFkLmV4dHJhPW5ldyBBcnJheShyLmhlYWQuZXh0cmFfbGVuKSksSS5hcnJheVNldChyLmhlYWQuZXh0cmEsbixzLGQsaykpLDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssbixkLHMpKSxvLT1kLHMrPWQsci5sZW5ndGgtPWQpLHIubGVuZ3RoKSlicmVhayBlO3IubGVuZ3RoPTAsci5tb2RlPTc7Y2FzZSA3OmlmKDIwNDgmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5uYW1lKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5uYW1lPW51bGwpO3IubGVuZ3RoPTAsci5tb2RlPTg7Y2FzZSA4OmlmKDQwOTYmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5jb21tZW50Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5jb21tZW50PW51bGwpO3IubW9kZT05O2Nhc2UgOTppZig1MTImci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYodSE9PSg2NTUzNSZyLmNoZWNrKSl7ZS5tc2c9XCJoZWFkZXIgY3JjIG1pc21hdGNoXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIuaGVhZCYmKHIuaGVhZC5oY3JjPXIuZmxhZ3M+PjkmMSxyLmhlYWQuZG9uZT0hMCksZS5hZGxlcj1yLmNoZWNrPTAsci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTA6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ZS5hZGxlcj1yLmNoZWNrPUwodSksbD11PTAsci5tb2RlPTExO2Nhc2UgMTE6aWYoMD09PXIuaGF2ZWRpY3QpcmV0dXJuIGUubmV4dF9vdXQ9YSxlLmF2YWlsX291dD1oLGUubmV4dF9pbj1zLGUuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwyO2UuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT0xMjtjYXNlIDEyOmlmKDU9PT10fHw2PT09dClicmVhayBlO2Nhc2UgMTM6aWYoci5sYXN0KXt1Pj4+PTcmbCxsLT03Jmwsci5tb2RlPTI3O2JyZWFrfWZvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9c3dpdGNoKHIubGFzdD0xJnUsbC09MSwzJih1Pj4+PTEpKXtjYXNlIDA6ci5tb2RlPTE0O2JyZWFrO2Nhc2UgMTppZihqKHIpLHIubW9kZT0yMCw2IT09dClicmVhazt1Pj4+PTIsbC09MjticmVhayBlO2Nhc2UgMjpyLm1vZGU9MTc7YnJlYWs7Y2FzZSAzOmUubXNnPVwiaW52YWxpZCBibG9jayB0eXBlXCIsci5tb2RlPTMwfXU+Pj49MixsLT0yO2JyZWFrO2Nhc2UgMTQ6Zm9yKHU+Pj49NyZsLGwtPTcmbDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoKDY1NTM1JnUpIT0odT4+PjE2XjY1NTM1KSl7ZS5tc2c9XCJpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuZ3RoPTY1NTM1JnUsbD11PTAsci5tb2RlPTE1LDY9PT10KWJyZWFrIGU7Y2FzZSAxNTpyLm1vZGU9MTY7Y2FzZSAxNjppZihkPXIubGVuZ3RoKXtpZihvPGQmJihkPW8pLGg8ZCYmKGQ9aCksMD09PWQpYnJlYWsgZTtJLmFycmF5U2V0KGksbixzLGQsYSksby09ZCxzKz1kLGgtPWQsYSs9ZCxyLmxlbmd0aC09ZDticmVha31yLm1vZGU9MTI7YnJlYWs7Y2FzZSAxNzpmb3IoO2w8MTQ7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihyLm5sZW49MjU3KygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5kaXN0PTErKDMxJnUpLHU+Pj49NSxsLT01LHIubmNvZGU9NCsoMTUmdSksdT4+Pj00LGwtPTQsMjg2PHIubmxlbnx8MzA8ci5uZGlzdCl7ZS5tc2c9XCJ0b28gbWFueSBsZW5ndGggb3IgZGlzdGFuY2Ugc3ltYm9sc1wiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTg7Y2FzZSAxODpmb3IoO3IuaGF2ZTxyLm5jb2RlOyl7Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbnNbQVtyLmhhdmUrK11dPTcmdSx1Pj4+PTMsbC09M31mb3IoO3IuaGF2ZTwxOTspci5sZW5zW0Fbci5oYXZlKytdXT0wO2lmKHIubGVuY29kZT1yLmxlbmR5bixyLmxlbmJpdHM9NyxTPXtiaXRzOnIubGVuYml0c30seD1UKDAsci5sZW5zLDAsMTksci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE5O2Nhc2UgMTk6Zm9yKDtyLmhhdmU8ci5ubGVuK3IubmRpc3Q7KXtmb3IoO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoYjwxNil1Pj4+PV8sbC09XyxyLmxlbnNbci5oYXZlKytdPWI7ZWxzZXtpZigxNj09PWIpe2Zvcih6PV8rMjtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZih1Pj4+PV8sbC09XywwPT09ci5oYXZlKXtlLm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9az1yLmxlbnNbci5oYXZlLTFdLGQ9MysoMyZ1KSx1Pj4+PTIsbC09Mn1lbHNlIGlmKDE3PT09Yil7Zm9yKHo9XyszO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWwtPV8saz0wLGQ9MysoNyYodT4+Pj1fKSksdT4+Pj0zLGwtPTN9ZWxzZXtmb3Ioej1fKzc7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9bC09XyxrPTAsZD0xMSsoMTI3Jih1Pj4+PV8pKSx1Pj4+PTcsbC09N31pZihyLmhhdmUrZD5yLm5sZW4rci5uZGlzdCl7ZS5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWZvcig7ZC0tOylyLmxlbnNbci5oYXZlKytdPWt9fWlmKDMwPT09ci5tb2RlKWJyZWFrO2lmKDA9PT1yLmxlbnNbMjU2XSl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgLS0gbWlzc2luZyBlbmQtb2YtYmxvY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5iaXRzPTksUz17Yml0czpyLmxlbmJpdHN9LHg9VChELHIubGVucywwLHIubmxlbixyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLmRpc3RiaXRzPTYsci5kaXN0Y29kZT1yLmRpc3RkeW4sUz17Yml0czpyLmRpc3RiaXRzfSx4PVQoRixyLmxlbnMsci5ubGVuLHIubmRpc3Qsci5kaXN0Y29kZSwwLHIud29yayxTKSxyLmRpc3RiaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2VzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLm1vZGU9MjAsNj09PXQpYnJlYWsgZTtjYXNlIDIwOnIubW9kZT0yMTtjYXNlIDIxOmlmKDY8PW8mJjI1ODw9aCl7ZS5uZXh0X291dD1hLGUuYXZhaWxfb3V0PWgsZS5uZXh0X2luPXMsZS5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLFIoZSxjKSxhPWUubmV4dF9vdXQsaT1lLm91dHB1dCxoPWUuYXZhaWxfb3V0LHM9ZS5uZXh0X2luLG49ZS5pbnB1dCxvPWUuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsMTI9PT1yLm1vZGUmJihyLmJhY2s9LTEpO2JyZWFrfWZvcihyLmJhY2s9MDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKGcmJjA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIubGVuY29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9XyxyLmxlbmd0aD1iLDA9PT1nKXtyLm1vZGU9MjY7YnJlYWt9aWYoMzImZyl7ci5iYWNrPS0xLHIubW9kZT0xMjticmVha31pZig2NCZnKXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVha31yLmV4dHJhPTE1Jmcsci5tb2RlPTIyO2Nhc2UgMjI6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbmd0aCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9ci53YXM9ci5sZW5ndGgsci5tb2RlPTIzO2Nhc2UgMjM6Zm9yKDtnPShDPXIuZGlzdGNvZGVbdSYoMTw8ci5kaXN0Yml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5kaXN0Y29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9Xyw2NCZnKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVha31yLm9mZnNldD1iLHIuZXh0cmE9MTUmZyxyLm1vZGU9MjQ7Y2FzZSAyNDppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIub2Zmc2V0Kz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1pZihyLm9mZnNldD5yLmRtYXgpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9ci5tb2RlPTI1O2Nhc2UgMjU6aWYoMD09PWgpYnJlYWsgZTtpZihkPWMtaCxyLm9mZnNldD5kKXtpZigoZD1yLm9mZnNldC1kKT5yLndoYXZlJiZyLnNhbmUpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9cD1kPnIud25leHQ/KGQtPXIud25leHQsci53c2l6ZS1kKTpyLnduZXh0LWQsZD5yLmxlbmd0aCYmKGQ9ci5sZW5ndGgpLG09ci53aW5kb3d9ZWxzZSBtPWkscD1hLXIub2Zmc2V0LGQ9ci5sZW5ndGg7Zm9yKGg8ZCYmKGQ9aCksaC09ZCxyLmxlbmd0aC09ZDtpW2ErK109bVtwKytdLC0tZDspOzA9PT1yLmxlbmd0aCYmKHIubW9kZT0yMSk7YnJlYWs7Y2FzZSAyNjppZigwPT09aClicmVhayBlO2lbYSsrXT1yLmxlbmd0aCxoLS0sci5tb2RlPTIxO2JyZWFrO2Nhc2UgMjc6aWYoci53cmFwKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1fD1uW3MrK108PGwsbCs9OH1pZihjLT1oLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsYyYmKGUuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxpLGMsYS1jKTpPKHIuY2hlY2ssaSxjLGEtYykpLGM9aCwoci5mbGFncz91OkwodSkpIT09ci5jaGVjayl7ZS5tc2c9XCJpbmNvcnJlY3QgZGF0YSBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjg7Y2FzZSAyODppZihyLndyYXAmJnIuZmxhZ3Mpe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHUhPT0oNDI5NDk2NzI5NSZyLnRvdGFsKSl7ZS5tc2c9XCJpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yOTtjYXNlIDI5Ong9MTticmVhayBlO2Nhc2UgMzA6eD0tMzticmVhayBlO2Nhc2UgMzE6cmV0dXJuLTQ7Y2FzZSAzMjpkZWZhdWx0OnJldHVybiBVfXJldHVybiBlLm5leHRfb3V0PWEsZS5hdmFpbF9vdXQ9aCxlLm5leHRfaW49cyxlLmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsKHIud3NpemV8fGMhPT1lLmF2YWlsX291dCYmci5tb2RlPDMwJiYoci5tb2RlPDI3fHw0IT09dCkpJiZaKGUsZS5vdXRwdXQsZS5uZXh0X291dCxjLWUuYXZhaWxfb3V0KT8oci5tb2RlPTMxLC00KTooZi09ZS5hdmFpbF9pbixjLT1lLmF2YWlsX291dCxlLnRvdGFsX2luKz1mLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsci53cmFwJiZjJiYoZS5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLGksYyxlLm5leHRfb3V0LWMpOk8oci5jaGVjayxpLGMsZS5uZXh0X291dC1jKSksZS5kYXRhX3R5cGU9ci5iaXRzKyhyLmxhc3Q/NjQ6MCkrKDEyPT09ci5tb2RlPzEyODowKSsoMjA9PT1yLm1vZGV8fDE1PT09ci5tb2RlPzI1NjowKSwoMD09ZiYmMD09PWN8fDQ9PT10KSYmeD09PU4mJih4PS01KSx4KX0sci5pbmZsYXRlRW5kPWZ1bmN0aW9uKGUpe2lmKCFlfHwhZS5zdGF0ZSlyZXR1cm4gVTt2YXIgdD1lLnN0YXRlO3JldHVybiB0LndpbmRvdyYmKHQud2luZG93PW51bGwpLGUuc3RhdGU9bnVsbCxOfSxyLmluZmxhdGVHZXRIZWFkZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZSYmZS5zdGF0ZT8wPT0oMiYocj1lLnN0YXRlKS53cmFwKT9VOigoci5oZWFkPXQpLmRvbmU9ITEsTik6VX0sci5pbmZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbihlLHQpe3ZhciByLG49dC5sZW5ndGg7cmV0dXJuIGUmJmUuc3RhdGU/MCE9PShyPWUuc3RhdGUpLndyYXAmJjExIT09ci5tb2RlP1U6MTE9PT1yLm1vZGUmJk8oMSx0LG4sMCkhPT1yLmNoZWNrPy0zOlooZSx0LG4sbik/KHIubW9kZT0zMSwtNCk6KHIuaGF2ZWRpY3Q9MSxOKTpVfSxyLmluZmxhdGVJbmZvPVwicGFrbyBpbmZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9pbmZmYXN0XCI6NDgsXCIuL2luZnRyZWVzXCI6NTB9XSw1MDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBEPWUoXCIuLi91dGlscy9jb21tb25cIiksRj1bMyw0LDUsNiw3LDgsOSwxMCwxMSwxMywxNSwxNywxOSwyMywyNywzMSwzNSw0Myw1MSw1OSw2Nyw4Myw5OSwxMTUsMTMxLDE2MywxOTUsMjI3LDI1OCwwLDBdLE49WzE2LDE2LDE2LDE2LDE2LDE2LDE2LDE2LDE3LDE3LDE3LDE3LDE4LDE4LDE4LDE4LDE5LDE5LDE5LDE5LDIwLDIwLDIwLDIwLDIxLDIxLDIxLDIxLDE2LDcyLDc4XSxVPVsxLDIsMyw0LDUsNyw5LDEzLDE3LDI1LDMzLDQ5LDY1LDk3LDEyOSwxOTMsMjU3LDM4NSw1MTMsNzY5LDEwMjUsMTUzNywyMDQ5LDMwNzMsNDA5Nyw2MTQ1LDgxOTMsMTIyODksMTYzODUsMjQ1NzcsMCwwXSxQPVsxNiwxNiwxNiwxNiwxNywxNywxOCwxOCwxOSwxOSwyMCwyMCwyMSwyMSwyMiwyMiwyMywyMywyNCwyNCwyNSwyNSwyNiwyNiwyNywyNywyOCwyOCwyOSwyOSw2NCw2NF07dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4saSxzLGEsbyl7dmFyIGgsdSxsLGYsYyxkLHAsbSxfLGc9by5iaXRzLGI9MCx2PTAseT0wLHc9MCxrPTAseD0wLFM9MCx6PTAsQz0wLEU9MCxBPW51bGwsST0wLE89bmV3IEQuQnVmMTYoMTYpLEI9bmV3IEQuQnVmMTYoMTYpLFI9bnVsbCxUPTA7Zm9yKGI9MDtiPD0xNTtiKyspT1tiXT0wO2Zvcih2PTA7djxuO3YrKylPW3Rbcit2XV0rKztmb3Ioaz1nLHc9MTU7MTw9dyYmMD09PU9bd107dy0tKTtpZih3PGsmJihrPXcpLDA9PT13KXJldHVybiBpW3MrK109MjA5NzE1MjAsaVtzKytdPTIwOTcxNTIwLG8uYml0cz0xLDA7Zm9yKHk9MTt5PHcmJjA9PT1PW3ldO3krKyk7Zm9yKGs8eSYmKGs9eSksYj16PTE7Yjw9MTU7YisrKWlmKHo8PD0xLCh6LT1PW2JdKTwwKXJldHVybi0xO2lmKDA8eiYmKDA9PT1lfHwxIT09dykpcmV0dXJuLTE7Zm9yKEJbMV09MCxiPTE7YjwxNTtiKyspQltiKzFdPUJbYl0rT1tiXTtmb3Iodj0wO3Y8bjt2KyspMCE9PXRbcit2XSYmKGFbQlt0W3Irdl1dKytdPXYpO2lmKGQ9MD09PWU/KEE9Uj1hLDE5KToxPT09ZT8oQT1GLEktPTI1NyxSPU4sVC09MjU3LDI1Nik6KEE9VSxSPVAsLTEpLGI9eSxjPXMsUz12PUU9MCxsPS0xLGY9KEM9MTw8KHg9aykpLTEsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7Zm9yKDs7KXtmb3IocD1iLVMsXz1hW3ZdPGQ/KG09MCxhW3ZdKTphW3ZdPmQ/KG09UltUK2Fbdl1dLEFbSSthW3ZdXSk6KG09OTYsMCksaD0xPDxiLVMseT11PTE8PHg7aVtjKyhFPj5TKSsodS09aCldPXA8PDI0fG08PDE2fF98MCwwIT09dTspO2ZvcihoPTE8PGItMTtFJmg7KWg+Pj0xO2lmKDAhPT1oPyhFJj1oLTEsRSs9aCk6RT0wLHYrKywwPT0tLU9bYl0pe2lmKGI9PT13KWJyZWFrO2I9dFtyK2Fbdl1dfWlmKGs8YiYmKEUmZikhPT1sKXtmb3IoMD09PVMmJihTPWspLGMrPXksej0xPDwoeD1iLVMpO3grUzx3JiYhKCh6LT1PW3grU10pPD0wKTspeCsrLHo8PD0xO2lmKEMrPTE8PHgsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7aVtsPUUmZl09azw8MjR8eDw8MTZ8Yy1zfDB9fXJldHVybiAwIT09RSYmKGlbYytFXT1iLVM8PDI0fDY0PDwxNnwwKSxvLmJpdHM9aywwfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17MjpcIm5lZWQgZGljdGlvbmFyeVwiLDE6XCJzdHJlYW0gZW5kXCIsMDpcIlwiLFwiLTFcIjpcImZpbGUgZXJyb3JcIixcIi0yXCI6XCJzdHJlYW0gZXJyb3JcIixcIi0zXCI6XCJkYXRhIGVycm9yXCIsXCItNFwiOlwiaW5zdWZmaWNpZW50IG1lbW9yeVwiLFwiLTVcIjpcImJ1ZmZlciBlcnJvclwiLFwiLTZcIjpcImluY29tcGF0aWJsZSB2ZXJzaW9uXCJ9fSx7fV0sNTI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLG89MCxoPTE7ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9dmFyIHM9MCxhPTI5LHU9MjU2LGw9dSsxK2EsZj0zMCxjPTE5LF89MipsKzEsZz0xNSxkPTE2LHA9NyxtPTI1NixiPTE2LHY9MTcseT0xOCx3PVswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdLGs9WzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTNdLHg9WzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMiwzLDddLFM9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdLHo9bmV3IEFycmF5KDIqKGwrMikpO24oeik7dmFyIEM9bmV3IEFycmF5KDIqZik7bihDKTt2YXIgRT1uZXcgQXJyYXkoNTEyKTtuKEUpO3ZhciBBPW5ldyBBcnJheSgyNTYpO24oQSk7dmFyIEk9bmV3IEFycmF5KGEpO24oSSk7dmFyIE8sQixSLFQ9bmV3IEFycmF5KGYpO2Z1bmN0aW9uIEQoZSx0LHIsbixpKXt0aGlzLnN0YXRpY190cmVlPWUsdGhpcy5leHRyYV9iaXRzPXQsdGhpcy5leHRyYV9iYXNlPXIsdGhpcy5lbGVtcz1uLHRoaXMubWF4X2xlbmd0aD1pLHRoaXMuaGFzX3N0cmVlPWUmJmUubGVuZ3RofWZ1bmN0aW9uIEYoZSx0KXt0aGlzLmR5bl90cmVlPWUsdGhpcy5tYXhfY29kZT0wLHRoaXMuc3RhdF9kZXNjPXR9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZTwyNTY/RVtlXTpFWzI1NisoZT4+PjcpXX1mdW5jdGlvbiBVKGUsdCl7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnQsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109dD4+PjgmMjU1fWZ1bmN0aW9uIFAoZSx0LHIpe2UuYmlfdmFsaWQ+ZC1yPyhlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxVKGUsZS5iaV9idWYpLGUuYmlfYnVmPXQ+PmQtZS5iaV92YWxpZCxlLmJpX3ZhbGlkKz1yLWQpOihlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxlLmJpX3ZhbGlkKz1yKX1mdW5jdGlvbiBMKGUsdCxyKXtQKGUsclsyKnRdLHJbMip0KzFdKX1mdW5jdGlvbiBqKGUsdCl7Zm9yKHZhciByPTA7cnw9MSZlLGU+Pj49MSxyPDw9MSwwPC0tdDspO3JldHVybiByPj4+MX1mdW5jdGlvbiBaKGUsdCxyKXt2YXIgbixpLHM9bmV3IEFycmF5KGcrMSksYT0wO2ZvcihuPTE7bjw9ZztuKyspc1tuXT1hPWErcltuLTFdPDwxO2ZvcihpPTA7aTw9dDtpKyspe3ZhciBvPWVbMippKzFdOzAhPT1vJiYoZVsyKmldPWooc1tvXSsrLG8pKX19ZnVuY3Rpb24gVyhlKXt2YXIgdDtmb3IodD0wO3Q8bDt0KyspZS5keW5fbHRyZWVbMip0XT0wO2Zvcih0PTA7dDxmO3QrKyllLmR5bl9kdHJlZVsyKnRdPTA7Zm9yKHQ9MDt0PGM7dCsrKWUuYmxfdHJlZVsyKnRdPTA7ZS5keW5fbHRyZWVbMiptXT0xLGUub3B0X2xlbj1lLnN0YXRpY19sZW49MCxlLmxhc3RfbGl0PWUubWF0Y2hlcz0wfWZ1bmN0aW9uIE0oZSl7ODxlLmJpX3ZhbGlkP1UoZSxlLmJpX2J1Zik6MDxlLmJpX3ZhbGlkJiYoZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109ZS5iaV9idWYpLGUuYmlfYnVmPTAsZS5iaV92YWxpZD0wfWZ1bmN0aW9uIEgoZSx0LHIsbil7dmFyIGk9Mip0LHM9MipyO3JldHVybiBlW2ldPGVbc118fGVbaV09PT1lW3NdJiZuW3RdPD1uW3JdfWZ1bmN0aW9uIEcoZSx0LHIpe2Zvcih2YXIgbj1lLmhlYXBbcl0saT1yPDwxO2k8PWUuaGVhcF9sZW4mJihpPGUuaGVhcF9sZW4mJkgodCxlLmhlYXBbaSsxXSxlLmhlYXBbaV0sZS5kZXB0aCkmJmkrKywhSCh0LG4sZS5oZWFwW2ldLGUuZGVwdGgpKTspZS5oZWFwW3JdPWUuaGVhcFtpXSxyPWksaTw8PTE7ZS5oZWFwW3JdPW59ZnVuY3Rpb24gSyhlLHQscil7dmFyIG4saSxzLGEsbz0wO2lmKDAhPT1lLmxhc3RfbGl0KWZvcig7bj1lLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvXTw8OHxlLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvKzFdLGk9ZS5wZW5kaW5nX2J1ZltlLmxfYnVmK29dLG8rKywwPT09bj9MKGUsaSx0KTooTChlLChzPUFbaV0pK3UrMSx0KSwwIT09KGE9d1tzXSkmJlAoZSxpLT1JW3NdLGEpLEwoZSxzPU4oLS1uKSxyKSwwIT09KGE9a1tzXSkmJlAoZSxuLT1UW3NdLGEpKSxvPGUubGFzdF9saXQ7KTtMKGUsbSx0KX1mdW5jdGlvbiBZKGUsdCl7dmFyIHIsbixpLHM9dC5keW5fdHJlZSxhPXQuc3RhdF9kZXNjLnN0YXRpY190cmVlLG89dC5zdGF0X2Rlc2MuaGFzX3N0cmVlLGg9dC5zdGF0X2Rlc2MuZWxlbXMsdT0tMTtmb3IoZS5oZWFwX2xlbj0wLGUuaGVhcF9tYXg9XyxyPTA7cjxoO3IrKykwIT09c1syKnJdPyhlLmhlYXBbKytlLmhlYXBfbGVuXT11PXIsZS5kZXB0aFtyXT0wKTpzWzIqcisxXT0wO2Zvcig7ZS5oZWFwX2xlbjwyOylzWzIqKGk9ZS5oZWFwWysrZS5oZWFwX2xlbl09dTwyPysrdTowKV09MSxlLmRlcHRoW2ldPTAsZS5vcHRfbGVuLS0sbyYmKGUuc3RhdGljX2xlbi09YVsyKmkrMV0pO2Zvcih0Lm1heF9jb2RlPXUscj1lLmhlYXBfbGVuPj4xOzE8PXI7ci0tKUcoZSxzLHIpO2ZvcihpPWg7cj1lLmhlYXBbMV0sZS5oZWFwWzFdPWUuaGVhcFtlLmhlYXBfbGVuLS1dLEcoZSxzLDEpLG49ZS5oZWFwWzFdLGUuaGVhcFstLWUuaGVhcF9tYXhdPXIsZS5oZWFwWy0tZS5oZWFwX21heF09bixzWzIqaV09c1syKnJdK3NbMipuXSxlLmRlcHRoW2ldPShlLmRlcHRoW3JdPj1lLmRlcHRoW25dP2UuZGVwdGhbcl06ZS5kZXB0aFtuXSkrMSxzWzIqcisxXT1zWzIqbisxXT1pLGUuaGVhcFsxXT1pKyssRyhlLHMsMSksMjw9ZS5oZWFwX2xlbjspO2UuaGVhcFstLWUuaGVhcF9tYXhdPWUuaGVhcFsxXSxmdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoPXQuZHluX3RyZWUsdT10Lm1heF9jb2RlLGw9dC5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsZj10LnN0YXRfZGVzYy5oYXNfc3RyZWUsYz10LnN0YXRfZGVzYy5leHRyYV9iaXRzLGQ9dC5zdGF0X2Rlc2MuZXh0cmFfYmFzZSxwPXQuc3RhdF9kZXNjLm1heF9sZW5ndGgsbT0wO2ZvcihzPTA7czw9ZztzKyspZS5ibF9jb3VudFtzXT0wO2ZvcihoWzIqZS5oZWFwW2UuaGVhcF9tYXhdKzFdPTAscj1lLmhlYXBfbWF4KzE7cjxfO3IrKylwPChzPWhbMipoWzIqKG49ZS5oZWFwW3JdKSsxXSsxXSsxKSYmKHM9cCxtKyspLGhbMipuKzFdPXMsdTxufHwoZS5ibF9jb3VudFtzXSsrLGE9MCxkPD1uJiYoYT1jW24tZF0pLG89aFsyKm5dLGUub3B0X2xlbis9byoocythKSxmJiYoZS5zdGF0aWNfbGVuKz1vKihsWzIqbisxXSthKSkpO2lmKDAhPT1tKXtkb3tmb3Iocz1wLTE7MD09PWUuYmxfY291bnRbc107KXMtLTtlLmJsX2NvdW50W3NdLS0sZS5ibF9jb3VudFtzKzFdKz0yLGUuYmxfY291bnRbcF0tLSxtLT0yfXdoaWxlKDA8bSk7Zm9yKHM9cDswIT09cztzLS0pZm9yKG49ZS5ibF9jb3VudFtzXTswIT09bjspdTwoaT1lLmhlYXBbLS1yXSl8fChoWzIqaSsxXSE9PXMmJihlLm9wdF9sZW4rPShzLWhbMippKzFdKSpoWzIqaV0saFsyKmkrMV09cyksbi0tKX19KGUsdCksWihzLHUsZS5ibF9jb3VudCl9ZnVuY3Rpb24gWChlLHQscil7dmFyIG4saSxzPS0xLGE9dFsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLHRbMioocisxKSsxXT02NTUzNSxuPTA7bjw9cjtuKyspaT1hLGE9dFsyKihuKzEpKzFdLCsrbzxoJiZpPT09YXx8KG88dT9lLmJsX3RyZWVbMippXSs9bzowIT09aT8oaSE9PXMmJmUuYmxfdHJlZVsyKmldKyssZS5ibF90cmVlWzIqYl0rKyk6bzw9MTA/ZS5ibF90cmVlWzIqdl0rKzplLmJsX3RyZWVbMip5XSsrLHM9aSx1PShvPTApPT09YT8oaD0xMzgsMyk6aT09PWE/KGg9NiwzKTooaD03LDQpKX1mdW5jdGlvbiBWKGUsdCxyKXt2YXIgbixpLHM9LTEsYT10WzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9Myksbj0wO248PXI7bisrKWlmKGk9YSxhPXRbMioobisxKSsxXSwhKCsrbzxoJiZpPT09YSkpe2lmKG88dSlmb3IoO0woZSxpLGUuYmxfdHJlZSksMCE9LS1vOyk7ZWxzZSAwIT09aT8oaSE9PXMmJihMKGUsaSxlLmJsX3RyZWUpLG8tLSksTChlLGIsZS5ibF90cmVlKSxQKGUsby0zLDIpKTpvPD0xMD8oTChlLHYsZS5ibF90cmVlKSxQKGUsby0zLDMpKTooTChlLHksZS5ibF90cmVlKSxQKGUsby0xMSw3KSk7cz1pLHU9KG89MCk9PT1hPyhoPTEzOCwzKTppPT09YT8oaD02LDMpOihoPTcsNCl9fW4oVCk7dmFyIHE9ITE7ZnVuY3Rpb24gSihlLHQscixuKXtQKGUsKHM8PDEpKyhuPzE6MCksMyksZnVuY3Rpb24oZSx0LHIsbil7TShlKSxuJiYoVShlLHIpLFUoZSx+cikpLGkuYXJyYXlTZXQoZS5wZW5kaW5nX2J1ZixlLndpbmRvdyx0LHIsZS5wZW5kaW5nKSxlLnBlbmRpbmcrPXJ9KGUsdCxyLCEwKX1yLl90cl9pbml0PWZ1bmN0aW9uKGUpe3F8fChmdW5jdGlvbigpe3ZhciBlLHQscixuLGkscz1uZXcgQXJyYXkoZysxKTtmb3Iobj1yPTA7bjxhLTE7bisrKWZvcihJW25dPXIsZT0wO2U8MTw8d1tuXTtlKyspQVtyKytdPW47Zm9yKEFbci0xXT1uLG49aT0wO248MTY7bisrKWZvcihUW25dPWksZT0wO2U8MTw8a1tuXTtlKyspRVtpKytdPW47Zm9yKGk+Pj03O248ZjtuKyspZm9yKFRbbl09aTw8NyxlPTA7ZTwxPDxrW25dLTc7ZSsrKUVbMjU2K2krK109bjtmb3IodD0wO3Q8PWc7dCsrKXNbdF09MDtmb3IoZT0wO2U8PTE0MzspelsyKmUrMV09OCxlKyssc1s4XSsrO2Zvcig7ZTw9MjU1Oyl6WzIqZSsxXT05LGUrKyxzWzldKys7Zm9yKDtlPD0yNzk7KXpbMiplKzFdPTcsZSsrLHNbN10rKztmb3IoO2U8PTI4NzspelsyKmUrMV09OCxlKyssc1s4XSsrO2ZvcihaKHosbCsxLHMpLGU9MDtlPGY7ZSsrKUNbMiplKzFdPTUsQ1syKmVdPWooZSw1KTtPPW5ldyBEKHosdyx1KzEsbCxnKSxCPW5ldyBEKEMsaywwLGYsZyksUj1uZXcgRChuZXcgQXJyYXkoMCkseCwwLGMscCl9KCkscT0hMCksZS5sX2Rlc2M9bmV3IEYoZS5keW5fbHRyZWUsTyksZS5kX2Rlc2M9bmV3IEYoZS5keW5fZHRyZWUsQiksZS5ibF9kZXNjPW5ldyBGKGUuYmxfdHJlZSxSKSxlLmJpX2J1Zj0wLGUuYmlfdmFsaWQ9MCxXKGUpfSxyLl90cl9zdG9yZWRfYmxvY2s9SixyLl90cl9mbHVzaF9ibG9jaz1mdW5jdGlvbihlLHQscixuKXt2YXIgaSxzLGE9MDswPGUubGV2ZWw/KDI9PT1lLnN0cm0uZGF0YV90eXBlJiYoZS5zdHJtLmRhdGFfdHlwZT1mdW5jdGlvbihlKXt2YXIgdCxyPTQwOTM2MjQ0NDc7Zm9yKHQ9MDt0PD0zMTt0Kysscj4+Pj0xKWlmKDEmciYmMCE9PWUuZHluX2x0cmVlWzIqdF0pcmV0dXJuIG87aWYoMCE9PWUuZHluX2x0cmVlWzE4XXx8MCE9PWUuZHluX2x0cmVlWzIwXXx8MCE9PWUuZHluX2x0cmVlWzI2XSlyZXR1cm4gaDtmb3IodD0zMjt0PHU7dCsrKWlmKDAhPT1lLmR5bl9sdHJlZVsyKnRdKXJldHVybiBoO3JldHVybiBvfShlKSksWShlLGUubF9kZXNjKSxZKGUsZS5kX2Rlc2MpLGE9ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKFgoZSxlLmR5bl9sdHJlZSxlLmxfZGVzYy5tYXhfY29kZSksWChlLGUuZHluX2R0cmVlLGUuZF9kZXNjLm1heF9jb2RlKSxZKGUsZS5ibF9kZXNjKSx0PWMtMTszPD10JiYwPT09ZS5ibF90cmVlWzIqU1t0XSsxXTt0LS0pO3JldHVybiBlLm9wdF9sZW4rPTMqKHQrMSkrNSs1KzQsdH0oZSksaT1lLm9wdF9sZW4rMys3Pj4+Mywocz1lLnN0YXRpY19sZW4rMys3Pj4+Myk8PWkmJihpPXMpKTppPXM9cis1LHIrNDw9aSYmLTEhPT10P0ooZSx0LHIsbik6ND09PWUuc3RyYXRlZ3l8fHM9PT1pPyhQKGUsMisobj8xOjApLDMpLEsoZSx6LEMpKTooUChlLDQrKG4/MTowKSwzKSxmdW5jdGlvbihlLHQscixuKXt2YXIgaTtmb3IoUChlLHQtMjU3LDUpLFAoZSxyLTEsNSksUChlLG4tNCw0KSxpPTA7aTxuO2krKylQKGUsZS5ibF90cmVlWzIqU1tpXSsxXSwzKTtWKGUsZS5keW5fbHRyZWUsdC0xKSxWKGUsZS5keW5fZHRyZWUsci0xKX0oZSxlLmxfZGVzYy5tYXhfY29kZSsxLGUuZF9kZXNjLm1heF9jb2RlKzEsYSsxKSxLKGUsZS5keW5fbHRyZWUsZS5keW5fZHRyZWUpKSxXKGUpLG4mJk0oZSl9LHIuX3RyX3RhbGx5PWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqZS5sYXN0X2xpdF09dD4+PjgmMjU1LGUucGVuZGluZ19idWZbZS5kX2J1ZisyKmUubGFzdF9saXQrMV09MjU1JnQsZS5wZW5kaW5nX2J1ZltlLmxfYnVmK2UubGFzdF9saXRdPTI1NSZyLGUubGFzdF9saXQrKywwPT09dD9lLmR5bl9sdHJlZVsyKnJdKys6KGUubWF0Y2hlcysrLHQtLSxlLmR5bl9sdHJlZVsyKihBW3JdK3UrMSldKyssZS5keW5fZHRyZWVbMipOKHQpXSsrKSxlLmxhc3RfbGl0PT09ZS5saXRfYnVmc2l6ZS0xfSxyLl90cl9hbGlnbj1mdW5jdGlvbihlKXtQKGUsMiwzKSxMKGUsbSx6KSxmdW5jdGlvbihlKXsxNj09PWUuYmlfdmFsaWQ/KFUoZSxlLmJpX2J1ZiksZS5iaV9idWY9MCxlLmJpX3ZhbGlkPTApOjg8PWUuYmlfdmFsaWQmJihlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT0yNTUmZS5iaV9idWYsZS5iaV9idWY+Pj04LGUuYmlfdmFsaWQtPTgpfShlKX19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLmlucHV0PW51bGwsdGhpcy5uZXh0X2luPTAsdGhpcy5hdmFpbF9pbj0wLHRoaXMudG90YWxfaW49MCx0aGlzLm91dHB1dD1udWxsLHRoaXMubmV4dF9vdXQ9MCx0aGlzLmF2YWlsX291dD0wLHRoaXMudG90YWxfb3V0PTAsdGhpcy5tc2c9XCJcIix0aGlzLnN0YXRlPW51bGwsdGhpcy5kYXRhX3R5cGU9Mix0aGlzLmFkbGVyPTB9fSx7fV0sNTQ6W2Z1bmN0aW9uKGUsdCxyKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKHIsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIXIuc2V0SW1tZWRpYXRlKXt2YXIgaSxzLHQsYSxvPTEsaD17fSx1PSExLGw9ci5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2U9ZSYmZS5zZXRUaW1lb3V0P2U6cixpPVwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChyLnByb2Nlc3MpP2Z1bmN0aW9uKGUpe3Byb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKXtjKGUpfSl9OmZ1bmN0aW9uKCl7aWYoci5wb3N0TWVzc2FnZSYmIXIuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsdD1yLm9ubWVzc2FnZTtyZXR1cm4gci5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSxyLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHIub25tZXNzYWdlPXQsZX19KCk/KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixyLmFkZEV2ZW50TGlzdGVuZXI/ci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGQsITEpOnIuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixkKSxmdW5jdGlvbihlKXtyLnBvc3RNZXNzYWdlKGErZSxcIipcIil9KTpyLk1lc3NhZ2VDaGFubmVsPygodD1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtjKGUuZGF0YSl9LGZ1bmN0aW9uKGUpe3QucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTpsJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gbC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhzPWwuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKGUpe3ZhciB0PWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2MoZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxzLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0scy5hcHBlbmRDaGlsZCh0KX0pOmZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoYywwLGUpfSxlLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdPWFyZ3VtZW50c1tyKzFdO3ZhciBuPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGhbb109bixpKG8pLG8rK30sZS5jbGVhckltbWVkaWF0ZT1mfWZ1bmN0aW9uIGYoZSl7ZGVsZXRlIGhbZV19ZnVuY3Rpb24gYyhlKXtpZih1KXNldFRpbWVvdXQoYywwLGUpO2Vsc2V7dmFyIHQ9aFtlXTtpZih0KXt1PSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxyPWUuYXJncztzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoclswXSk7YnJlYWs7Y2FzZSAyOnQoclswXSxyWzFdKTticmVhaztjYXNlIDM6dChyWzBdLHJbMV0sclsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KG4scil9fSh0KX1maW5hbGx5e2YoZSksdT0hMX19fX1mdW5jdGlvbiBkKGUpe2Uuc291cmNlPT09ciYmXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PWUuZGF0YS5pbmRleE9mKGEpJiZjKCtlLmRhdGEuc2xpY2UoYS5sZW5ndGgpKX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV19LHt9LFsxMF0pKDEwKX0pOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgbmF2LCByZWZpbmVtZW50X29wdGlvbiwgcmVjaXBlcyB9IGZyb20gJy4vcmVjaXBlX25ldydcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCdcbmltcG9ydCB7IHVwZGF0ZV9pY29uIH0gZnJvbSAnLi91dGlscy91dGlsJ1xubGV0IGludGVyYWN0aW9uczogYW55W10gPSBbXVxubGV0IHNjcmVlbnNob3RzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXVxubGV0IHJlYXNvbnNBbm5vdGF0aW9uOiBhbnlbXSA9IFtdXG5sZXQgYWN0aW9uU2VxdWVuY2VJZCA9IDBcbmxldCB1cGxvYWRUaW1lcjogTm9kZUpTLlRpbWVyIHwgbnVsbCB8IGZhbHNlID0gbnVsbFxubGV0IHVzZXJJZDogc3RyaW5nID0gJydcblxubGV0IGxhc3RUaW1lc3RhbXA6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgbGFzdHVwbG9hZFRpbWVzdGFtcDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbmxldCBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U6IHtcbiAgdXJsOiBzdHJpbmdcbiAgZmllbGRzOiB7IGtleTogc3RyaW5nOyBBV1NBY2Nlc3NLZXlJZDogc3RyaW5nOyBwb2xpY3k6IHN0cmluZzsgc2lnbmF0dXJlOiBzdHJpbmcgfVxuICB0aW1lc3RhbXA6IG51bWJlclxufSB8IG51bGwgPSBudWxsXG5cbmltcG9ydCB7XG4gIHBvcHVwX3Byb2JhYmlsaXR5LFxuICBmb2xkZXJfbmFtZSxcbiAgemlwLFxuICBiYXNlX3VybCxcbiAgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkLFxuICB1cmxfaW5jbHVkZSxcbiAgZmlsdGVyX3VybFxufSBmcm9tICcuL2NvbmZpZydcblxuY29uc3QgdXBsb2FkX3VybCA9IGAke2Jhc2VfdXJsfS91cGxvYWRgXG5jb25zdCBpbnRlcmFjdGlvbnNfdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc2BcbmNvbnN0IGdlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybCA9IGAke2Jhc2VfdXJsfS9nZW5lcmF0ZV9wcmVzaWduZWRfcG9zdGBcblxuaW50ZXJmYWNlIFRhYkhpc3Rvcnkge1xuICBiYWNrU3RhY2s6IHN0cmluZ1tdXG4gIGZvcndhcmRTdGFjazogc3RyaW5nW11cbiAgY3VycmVudFVybDogc3RyaW5nIHwgbnVsbFxufVxuXG5jb25zdCB0YWJOYXZpZ2F0aW9uSGlzdG9yeToge1xuICBbdGFiSWQ6IG51bWJlcl06IFRhYkhpc3Rvcnlcbn0gPSB7fVxuXG5mdW5jdGlvbiBhbmFseXplTmF2aWdhdGlvbih0YWJJZDogbnVtYmVyLCB1cmw6IHN0cmluZyk6ICduZXcnIHwgJ2JhY2snIHwgJ2ZvcndhcmQnIHwgJ3JlbG9hZCcge1xuICBpZiAoIXRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXSkge1xuICAgIHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXSA9IHtcbiAgICAgIGJhY2tTdGFjazogW10sXG4gICAgICBmb3J3YXJkU3RhY2s6IFtdLFxuICAgICAgY3VycmVudFVybDogbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhpc3RvcnkgPSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF1cblxuICBpZiAoIWhpc3RvcnkuY3VycmVudFVybCkge1xuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IHVybFxuICAgIHJldHVybiAnbmV3J1xuICB9XG4gIGlmIChoaXN0b3J5LmN1cnJlbnRVcmwgPT09IHVybCkge1xuICAgIHJldHVybiAncmVsb2FkJ1xuICB9XG5cbiAgaWYgKGhpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCA+IDAgJiYgaGlzdG9yeS5iYWNrU3RhY2tbaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgIGhpc3RvcnkuZm9yd2FyZFN0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsISlcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmJhY2tTdGFjay5wb3AoKSFcbiAgICByZXR1cm4gJ2JhY2snXG4gIH1cblxuICBpZiAoXG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoID4gMCAmJlxuICAgIGhpc3RvcnkuZm9yd2FyZFN0YWNrW2hpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCAtIDFdID09PSB1cmxcbiAgKSB7XG4gICAgaGlzdG9yeS5iYWNrU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwhKVxuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuZm9yd2FyZFN0YWNrLnBvcCgpIVxuICAgIHJldHVybiAnZm9yd2FyZCdcbiAgfVxuXG4gIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsISlcbiAgaGlzdG9yeS5mb3J3YXJkU3RhY2sgPSBbXVxuICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmxcbiAgcmV0dXJuICduZXcnXG59XG5cbi8vIFJlcGxhY2UgdGhlIHNpbXBsZSBxdWVzdGlvbiB3aXRoIGEgbW9yZSBkZXRhaWxlZCBvbmUgYmFzZWQgb24gZXZlbnQgdHlwZVxuZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSAnY2xpY2tfYSc6XG4gICAgY2FzZSAnY2xpY2tfYic6XG4gICAgY2FzZSAnY2xpY2tfYyc6XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgaWYgKGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1NldCBVcCBOb3cnKSB7XG4gICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGNob29zZSAnU2V0IFVwIE5vdycgaW5zdGVhZCBvZiBidXkgb25jZSwgYW5kIHdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD9cIlxuICAgICAgfSBlbHNlIGlmIChkYXRhLnRhcmdldC5pZCA9PT0gJ2J1eS1ub3ctYnV0dG9uJykge1xuICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGNob29zZSB0byBidXkgdGhpcyBwcm9kdWN0IGltbWVkaWF0ZWx5LCBhbmQgd2hhdCBjb252aW5jZWQgeW91IHRvIHNraXAgZnVydGhlciBleHBsb3JhdGlvbiBvZiBvdGhlciBvcHRpb25zPyBXaHkgZG8geW91IGxpa2UgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnRhcmdldC5jbGFzc05hbWU/LmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKSkge1xuICAgICAgICByZXR1cm4gJ1doYXQgbWFkZSB5b3UgY2xpY2sgb24gdGhpcyBwcm9kdWN0LCBhbmQgd2hhdCBzcGVjaWZpYyBhc3BlY3RzIGF0dHJhY3RlZCB5b3VyIGF0dGVudGlvbiBjb21wYXJlZCB0byBvdGhlciBzZWFyY2ggcmVzdWx0cz8nXG4gICAgICB9IGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJykge1xuICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydCwgYW5kIGFyZSB5b3UgcGxhbm5pbmcgdG8gYnV5IGl0IG5vdyBvciBsYXRlcj8gV2hhdCBjb252aW5jZWQgeW91IHRoYXQgdGhpcyBpdGVtIHdhcyB0aGUgcmlnaHQgY2hvaWNlIGZvciB5b3VyIG5lZWRzPydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnV2hhdCB3YXMgeW91ciByZWFzb24gZm9yIGNsaWNraW5nIG9uIHRoaXMgZWxlbWVudD8nXG4gICAgICB9XG4gICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IGRvaW5nIHdoaWxlIHNjcm9sbGluZ+KAlGFyZSB5b3UgYnJvd3Npbmcgc2VhcmNoIHJlc3VsdHMsIGxvb2tpbmcgYXQgcmV2aWV3cywgb3Igc29tZXRoaW5nIGVsc2UsIGFuZCB3aGF0IGFyZSB5b3UgaG9waW5nIHRvIGZpbmQ/J1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3IsIGFuZCBob3cgZGlkIHlvdSBkZWNpZGUgb24gdGhlIHNlYXJjaCB0ZXJtcyB5b3UgdXNlZD8gQXJlIHlvdSBsb29raW5nIGZvciBhIHNwZWNpZmljIHByb2R1Y3QsIGJyYW5kLCBvciBmZWF0dXJlPydcbiAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gZ28gYmFjayB0byB0aGUgcHJldmlvdXMgcGFnZSwgYW5kIHdoYXQgd2VyZSB5b3UgaG9waW5nIHRvIHJldmlzaXQgb3IgcmVjb25zaWRlcj8nXG4gICAgICB9IGVsc2UgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdmb3J3YXJkJykge1xuICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byByZXR1cm4gdG8gdGhpcyBwYWdlIGFmdGVyIHByZXZpb3VzbHkgbmF2aWdhdGluZyBhd2F5LCBhbmQgd2hhdCBuZXcgb3IgdW5yZXNvbHZlZCBpbmZvcm1hdGlvbiBhcmUgeW91IGxvb2tpbmcgZm9yIG5vdz8nXG4gICAgICB9XG4gICAgICByZXR1cm4gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyAke2RhdGEubmF2aWdhdGlvblR5cGV9IG5hdmlnYXRpb24/YFxuICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgIHJldHVybiBgV2h5IGRpZCB5b3Ugc3dpdGNoIHRvIHRoaXMgdGFiPyBEbyB5b3UgaGF2ZSBzcGVjaWZpYyB0YXNrIG9yIGluZm9ybWF0aW9uIGluIG1pbmQ/YFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlICR7ZXZlbnRUeXBlfSBhY3Rpb24/YFxuICB9XG59XG5cbi8vIEFkZCBuZXcgZnVuY3Rpb24gdG8gaGFuZGxlIHNjcmVlbnNob3Qgc2F2aW5nXG5hc3luYyBmdW5jdGlvbiBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsOiBzdHJpbmcsIHNjcmVlbnNob3RJZDogc3RyaW5nKSB7XG4gIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgIC8vIEdldCBleGlzdGluZyBzY3JlZW5zaG90cyBmcm9tIHN0b3JhZ2VcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSByZXN1bHQuc2NyZWVuc2hvdHMgfHwgW11cblxuICAgIC8vIEFkZCBuZXcgc2NyZWVuc2hvdFxuICAgIHN0b3JlU2NyZWVuc2hvdHMucHVzaChbc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZF0pXG5cbiAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNjcmVlbnNob3RzOiBzdG9yZVNjcmVlbnNob3RzIH0pXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICA7KGFzeW5jICgpID0+IHtcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzYXZlRGF0YScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFjdGlvblNlcXVlbmNlSWQrK1xuICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWRcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudGFjdGlvblNlcXVlbmNlSWQpXG4gICAgICAgIC8vIG1lc3NhZ2UuZGF0YS5hY3Rpb25TZXF1ZW5jZUlkID0gY3VycmVudGFjdGlvblNlcXVlbmNlSWRcbiAgICAgICAgY29uc3QgdXVpZCA9IG1lc3NhZ2UuZGF0YS51dWlkXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlRGF0YSAnLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlKVxuICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgICAgICAgIHJlc3VsdC5wdXNoKG1lc3NhZ2UuZGF0YSlcbiAgICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHJlc3VsdCB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIHBvcHVwXG4gICAgICAgIC8vIGF3YWl0IHNlbmRQb3B1cChzZW5kZXIudGFiPy5pZCwgbWVzc2FnZS5kYXRhLnRpbWVzdGFtcCwgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSwgYWN0aW9uU2VxdWVuY2VJZClcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHNhdmVEYXRhKCksXG4gICAgICAgICAgc2VuZFBvcHVwKFxuICAgICAgICAgICAgc2VuZGVyLnRhYj8uaWQsXG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgICAgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSxcbiAgICAgICAgICAgIC8vIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgbWVzc2FnZS5kYXRhLFxuICAgICAgICAgICAgdXVpZFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc2F2ZURhdGE6JywgZXJyb3IpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZSAvLyBLZWVwIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZVxuICAgIH1cblxuICAgIC8vIENhcHR1cmUgc2NyZWVuc2hvdCBvbiBkZW1hbmRcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjYXB0dXJlU2NyZWVuc2hvdCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXQgc2NyZWVuc2hvdCByZXF1ZXN0JylcbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSBhd2FpdCBjYXB0dXJlU2NyZWVuc2hvdCgpXG4gICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBtZXNzYWdlLnNjcmVlbnNob3RJZClcbiAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgc3VjY2VzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHN1Y2Nlc3MgPyB1bmRlZmluZWQgOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCdcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY2FwdHVyZVNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gRG93bmxvYWQgZGF0YSBvbiB1c2VyIHJlcXVlc3RcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdkb3dubG9hZERhdGEnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWREYXRhJylcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IGRvd25sb2FkRGF0YUxvY2FsbHkoKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBkb3dubG9hZDonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2xlYXJNZW1vcnlDYWNoZScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGludGVyYWN0aW9ucyA9IFtdXG4gICAgICAgIHNjcmVlbnNob3RzID0gW11cbiAgICAgICAgcmVhc29uc0Fubm90YXRpb24gPSBbXVxuICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkID0gMFxuICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMFxuICAgICAgICBzY3JlZW5zaG90cy5sZW5ndGggPSAwXG4gICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBjbGVhck1lbW9yeUNhY2hlOicsIGVycm9yKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0UmVjaXBlJyAmJiBzZW5kZXIudGFiPy5pZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0UmVjaXBlKHNlbmRlci50YWIuaWQsIG1lc3NhZ2UudXJsKVxuICAgICAgICAgIC50aGVuKChyZWNpcGUpID0+IHtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHJlY2lwZTogcmVjaXBlIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KVxuICAgICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBnZXRSZWNpcGU6JywgZXJyb3IpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZSAvLyBJbmRpY2F0ZSB0aGF0IHNlbmRSZXNwb25zZSB3aWxsIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgIH1cbiAgfSkoKVxuICByZXR1cm4gdHJ1ZSAvLyBLZWVwcyB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlc1xufSlcblxuLy8gQ2FwdHVyZSB0aGUgc2NyZWVuc2hvdCBpbiB0aGUgY3VycmVudCB0YWJcbmFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KCkge1xuICB0cnkge1xuICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcbiAgICBpZiAodGFiKSB7XG4gICAgICByZXR1cm4gYXdhaXQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7XG4gICAgICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgICAgICBxdWFsaXR5OiAyNVxuICAgICAgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IGhhc2ggPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCB8PSAwXG4gIH1cbiAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICByZXR1cm4gaGFzaC50b1N0cmluZygpXG59XG5cbmNvbnN0IHNhdmVIVE1MID0gYXN5bmMgKGh0bWxDb250ZW50OiBzdHJpbmcsIGN1cnJlbnRTbmFwc2hvdElkOiBzdHJpbmcpID0+IHtcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IHt9IH0pXG4gIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fVxuICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGh0bWxDb250ZW50XG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSlcbn1cblxuY29uc3Qgc2F2ZUludGVyYWN0aW9uID0gYXN5bmMgKFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgdGltZXN0YW1wOiBzdHJpbmcsXG4gIHRhcmdldF91cmw6IHN0cmluZyxcbiAgaHRtbFNuYXBzaG90SWQ6IHN0cmluZyxcbiAgY3VycmVudGFjdGlvblNlcXVlbmNlSWQ6IG51bWJlcixcbiAgdXVpZDogc3RyaW5nLFxuICBuYXZpZ2F0aW9uVHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gIHBhZ2VNZXRhOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZXZlbnRUeXBlLFxuICAgIHRpbWVzdGFtcCxcbiAgICB0YXJnZXRfdXJsLFxuICAgIGh0bWxTbmFwc2hvdElkLFxuICAgIC8vIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgIHV1aWQsXG4gICAgcGFnZU1ldGFcbiAgfVxuXG4gIC8vIEFkZCBuYXZpZ2F0aW9uVHlwZSBvbmx5IGlmIGl0IGV4aXN0c1xuICBpZiAobmF2aWdhdGlvblR5cGUpIHtcbiAgICBkYXRhWyduYXZpZ2F0aW9uVHlwZSddID0gbmF2aWdhdGlvblR5cGVcbiAgfVxuXG4gIGxldCBpbnRlcmFjdGlvbnMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4gIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0aW9ucy5pbnRlcmFjdGlvbnMgfHwgW11cbiAgc3RvcmVJbnRlcmFjdGlvbnMucHVzaChkYXRhKVxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zIH0pXG59XG5cbmNvbnN0IHNhdmVTY3JlZW5zaG90ID0gYXN5bmMgKHdpbmRvd0lkOiBudW1iZXIsIHRpbWVzdGFtcDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSBhd2FpdCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih3aW5kb3dJZCwge1xuICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgIHF1YWxpdHk6IDI1XG4gIH0pXG5cbiAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4gIGF3YWl0IHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZClcbn1cbmNvbnN0IHNlbmRQb3B1cCA9IGFzeW5jIChcbiAgdGFiSWQ6IG51bWJlcixcbiAgdGltZXN0YW1wOiBzdHJpbmcsXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICAvLyBhY3Rpb25fdXVpZDogc3RyaW5nLFxuICBkYXRhOiBhbnksXG4gIHV1aWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGlmIChcbiAgICBkYXRhLnRhcmdldD8uaWQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3J1ZnVzJykgfHxcbiAgICBkYXRhLnRhcmdldD8uY2xhc3NOYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdydWZ1cycpXG4gICkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlLCBkYXRhKVxuICBpZiAoTWF0aC5yYW5kb20oKSA8IHBvcHVwX3Byb2JhYmlsaXR5ICYmIHRhYklkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlYXNvbiA9IGF3YWl0IGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgIGFjdGlvbjogJ3Nob3dfcG9wdXAnLFxuICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25cbiAgICAgIH0pXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5pbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBuZXdpdGVtID0ge1xuICAgICAgICAgIGFjdGlvbl91dWlkOiB1dWlkLFxuICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICAgICAgLy8gdXVpZDogdXVpZFxuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSlcbiAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSByZXN1bHQucmVhc29uc0Fubm90YXRpb24gfHwgW11cbiAgICAgICAgLy8gQWRkIG5ldyByZWFzb25cbiAgICAgICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbi5wdXNoKG5ld2l0ZW0pXG4gICAgICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvcHVwOicsIGVycm9yKVxuICAgIH1cbiAgfVxufVxuXG4vLyBsaXN0ZW4gdG8gc3dpdGNoZXMgYmV0d2VlbiBhY3RpdmF0ZWQgdGFic1xuY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGFjdGl2ZUluZm8pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0YWJJZCA9IGFjdGl2ZUluZm8udGFiSWRcbiAgICBjb25zdCB0YWIgPSBhd2FpdCBjaHJvbWUudGFicy5nZXQodGFiSWQpXG4gICAgaWYgKCF0YWIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBnZXQgdGFiIHdpdGggSUQ6ICR7dGFiSWR9YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgU3dpdGNoZWQgdG8gdGFiICR7dGFiSWR9IHdpdGggVVJMOiAke3RhYi51cmx9YClcbiAgICB1cGRhdGVfaWNvbih0YWIudXJsKVxuICAgIGlmIChcbiAgICAgIHRhYi51cmwgJiZcbiAgICAgIHRhYi51cmwuaW5jbHVkZXModXJsX2luY2x1ZGUpICYmXG4gICAgICAhZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB0YWIudXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICAgICkge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZSh0YWIudXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCBhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZT8uaHRtbFxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IHJlc3BvbnNlPy5wYWdlTWV0YVxuICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKytcbiAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkXG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHNhdmVIVE1MKGh0bWxDb250ZW50LCBjdXJyZW50U25hcHNob3RJZCksXG4gICAgICAgICAgc2F2ZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgJ3RhYkFjdGl2YXRlJyxcbiAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgIHRhYi51cmwsXG4gICAgICAgICAgICBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgdXVpZCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwYWdlTWV0YVxuICAgICAgICAgICksXG4gICAgICAgICAgc2F2ZVNjcmVlbnNob3QodGFiLndpbmRvd0lkLCB0aW1lc3RhbXAsIHV1aWQpLFxuICAgICAgICAgIHNlbmRQb3B1cCh0YWJJZCwgdGltZXN0YW1wLCAndGFiQWN0aXZhdGUnLCB7fSwgdXVpZClcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHRhYiBhY3RpdmF0ZSBoYW5kbGVyOicsIGVycm9yKVxuICB9XG59KVxuXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RSZWNpcGUodGFiSWQ6IG51bWJlciwgdXJsOiBzdHJpbmcpIHtcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpXG4gIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWVcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuXG4gICAgaWYgKG1hdGNoTWV0aG9kID09PSAndGV4dCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICBjb25zdCBbeyByZXN1bHQ6IGhhc01hdGNoIH1dID0gYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICBmdW5jOiAoc2VsZWN0b3IsIG1hdGNoVGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgICAgICghbWF0Y2hUZXh0IHx8XG4gICAgICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobWF0Y2hUZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFyZ3M6IFtyZWNpcGUubWF0Y2gsIHJlY2lwZS5tYXRjaF90ZXh0IHx8ICcnXVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGV4dCBtYXRjaDonLCBlcnJvcilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hdGNoTWV0aG9kID09PSAndXJsJyAmJiByZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgIHJldHVybiByZWNpcGVcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tcGxldGVkLmFkZExpc3RlbmVyKGFzeW5jIChkZXRhaWxzKSA9PiB7XG4gIGlmIChkZXRhaWxzLmZyYW1lSWQgIT09IDApIHJldHVyblxuICBjb25zb2xlLmxvZygnd2ViTmF2aWdhdGlvbiBvbkNvbXBsZXRlZCBldmVudCB0cmlnZ2VyZWQ6JywgZGV0YWlscylcbiAgdXBkYXRlX2ljb24oZGV0YWlscy51cmwpXG4gIGlmIChcbiAgICBkZXRhaWxzLnVybC5pbmNsdWRlcyh1cmxfaW5jbHVkZSkgJiZcbiAgICAhZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiBkZXRhaWxzLnVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKSB7XG4gICAgY29uc3QgbmF2aWdhdGlvblR5cGUgPSBhbmFseXplTmF2aWdhdGlvbihkZXRhaWxzLnRhYklkLCBkZXRhaWxzLnVybClcbiAgICBjb25zb2xlLmxvZyhgTmF2aWdhdGlvbiB0eXBlOiAke25hdmlnYXRpb25UeXBlfSBmb3IgdGFiICR7ZGV0YWlscy50YWJJZH0gdG8gJHtkZXRhaWxzLnVybH1gKVxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGRldGFpbHMudGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlPy5odG1sXG4gICAgICBjb25zdCBwYWdlTWV0YSA9IHJlc3BvbnNlPy5wYWdlTWV0YVxuICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKGRldGFpbHMudXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4gICAgICBhY3Rpb25TZXF1ZW5jZUlkKytcbiAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZFxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpLFxuICAgICAgICBzYXZlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ25hdmlnYXRpb24nLFxuICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICBkZXRhaWxzLnVybCxcbiAgICAgICAgICBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICB1dWlkLFxuICAgICAgICAgIG5hdmlnYXRpb25UeXBlLFxuICAgICAgICAgIHBhZ2VNZXRhXG4gICAgICAgICksXG4gICAgICAgIHNhdmVTY3JlZW5zaG90KChhd2FpdCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXAsIHV1aWQpXG4gICAgICBdKVxuICAgICAgaWYgKG5hdmlnYXRpb25UeXBlICE9PSAnbmV3JyAmJiBuYXZpZ2F0aW9uVHlwZSAhPT0gJ3JlbG9hZCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCBuYXZpZ2F0aW9uJylcbiAgICAgICAgYXdhaXQgc2VuZFBvcHVwKFxuICAgICAgICAgIGRldGFpbHMudGFiSWQsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICAvLyBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHV1aWRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG5cbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICBkZWxldGUgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdXG59KVxuXG4vLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBoYW5kbGUgZGF0YSB1cGxvYWRcbmFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkRGF0YUxvY2FsbHkoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKVxuXG4gICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCB1c2VySWRSZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pXG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWRcblxuICAgIGxldCB1c2VyX2lkID0gY3VycmVudFVzZXJJZCB8fCAndW5rbm93bidcblxuICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgJHtmb2xkZXJfbmFtZX0vVVNFUl8ke3VzZXJfaWR9L1NFU1NJT05fJHt0aW1lc3RhbXB9YFxuXG4gICAgY29uc3Qgc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSlcbiAgICBjb25zdCBpbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICBjb25zdCBvcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pXG4gICAgY29uc3Qgc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbiAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICBsZXQgc3RvcmVPcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbiAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbiAgICAvLyBjb25jYXRlbmF0aW5nIHdpdGggdGhlIHNlZW4gZGF0YVxuICAgIGNvbnN0IHNlZW5faW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2ludGVyYWN0aW9uczogW10gfSlcbiAgICBjb25zdCBzZWVuX3NuYXBzaG90cyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faHRtbFNuYXBzaG90czogW10gfSlcbiAgICBjb25zdCBzZWVuX29yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fb3JkZXJEZXRhaWxzOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9zY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuICAgIGxldCBzZWVuX3N0b3JlSW50ZXJhY3Rpb25zID0gc2Vlbl9pbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICBsZXQgc2Vlbl9odG1sU25hcHNob3RzID0gc2Vlbl9zbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgIGxldCBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gc2Vlbl9vcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgbGV0IHNlZW5fc3RvcmVTY3JlZW5zaG90cyA9IHNlZW5fc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgbGV0IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHNlZW5fUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgIHN0b3JlSW50ZXJhY3Rpb25zID0gWy4uLnNlZW5fc3RvcmVJbnRlcmFjdGlvbnMsIC4uLnN0b3JlSW50ZXJhY3Rpb25zXVxuICAgIGh0bWxTbmFwc2hvdHMgPSB7IC4uLnNlZW5faHRtbFNuYXBzaG90cywgLi4uaHRtbFNuYXBzaG90cyB9XG4gICAgc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgc3RvcmVTY3JlZW5zaG90cyA9IFsuLi5zZWVuX3N0b3JlU2NyZWVuc2hvdHMsIC4uLnN0b3JlU2NyZWVuc2hvdHNdXG4gICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFsuLi5zZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24sIC4uLnN0b3JlUmVhc29uc0Fubm90YXRpb25dXG5cbiAgICBpZiAoIXppcCkge1xuICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIHNlc3Npb24gaW5mbycpXG4gICAgICBjb25zdCBzZXNzaW9uSW5mb0NvbnRlbnQgPSBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfSwgdXNlciBpZDogJHtjdXJyZW50VXNlcklkfSxcXG4gb3JkZXIgZGV0YWlsczogXFxuICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIHN0b3Jlb3JkZXJEZXRhaWxzXG4gICAgICApfWBcbiAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb25JbmZvQ29udGVudCksXG4gICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9zZXNzaW9uX2luZm8udHh0YCxcbiAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgfSlcblxuICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICBjb25zb2xlLmxvZygnZG93bmxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgIGF3YWl0IGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgIHVybDogJ2RhdGE6dGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChodG1sQ29udGVudCksXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uaHRtbGAsXG4gICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICB9XG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnNEYXRhID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXG4gICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGludGVyYWN0aW9uc0RhdGEpLFxuICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zLmpzb25gLFxuICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgIHVybDogc2NyZWVuc2hvdERhdGEsXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYCxcbiAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyB6aXAgZmlsZScpXG4gICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuICAgICAgemlwLmZpbGUoXG4gICAgICAgICdzZXNzaW9uX2luZm8udHh0JyxcbiAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH1cbiAgICAgICAgICBcXG4gdXNlciBpZDogJHt1c2VyX2lkfVxuICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuICAgICAgICAgICAgICAgIFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgKVxuXG4gICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcbiAgICAgIHppcC5maWxlKCdpbnRlcmFjdGlvbnMuanNvbicsIGludGVyYWN0aW9uc19qc29uKVxuICAgICAgY29uc3Qgc2NyZWVuc2hvdHNGb2xkZXIgPSB6aXAuZm9sZGVyKCdzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2NyZWVuc2hvdERhdGEpXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKClcbiAgICAgICAgc2NyZWVuc2hvdHNGb2xkZXIuZmlsZShzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpICsgJy5qcGcnLCBibG9iKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBodG1sU25hcHNob3RzRm9sZGVyID0gemlwLmZvbGRlcignaHRtbFNuYXBzaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgaHRtbFNuYXBzaG90c0ZvbGRlci5maWxlKHNuYXBzaG90SWQgKyAnLmh0bWwnLCBodG1sQ29udGVudClcbiAgICAgIH1cblxuICAgICAgY29uc3QgemlwQmxvYiA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pXG4gICAgICBjb25zb2xlLmxvZygnemlwIGZpbGUgaXMgZ2VuZXJhdGVkJylcblxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYmFzZTY0WmlwID0gcmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdIC8vIEdldCB0aGUgYmFzZTY0IHBhcnRcbiAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgdXJsOiAnZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LCcgKyBiYXNlNjRaaXAsXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9LnppcGAsXG4gICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoemlwQmxvYilcbiAgICB9XG5cbiAgICAvLyBDbGVhciBjYWNoZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAnc2Vlbl9odG1sU25hcHNob3RzJyxcbiAgICAgICdzZWVuX2ludGVyYWN0aW9ucycsXG4gICAgICAnc2Vlbl9vcmRlckRldGFpbHMnLFxuICAgICAgJ3NlZW5fc2NyZWVuc2hvdHMnLFxuICAgICAgJ3NlZW5fcmVhc29uc0Fubm90YXRpb24nXG4gICAgXSlcblxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWQgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVzaWduZWRGb3JtRGF0YShuYW1lKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgZm9ybURhdGEuYXBwZW5kKCdrZXknLCBuYW1lKVxuXG4gIE9iamVjdC5rZXlzKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS5maWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChrZXkgIT0gJ2tleScpIGZvcm1EYXRhLmFwcGVuZChrZXksIGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS5maWVsZHNba2V5XSlcbiAgfSlcblxuICByZXR1cm4gZm9ybURhdGFcbn1cblxuY29uc3QgY3VzdG9tRmV0Y2ggPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKVxuXG4gIC8vIElmIHJlc3BvbnNlIGlzIG5vdCBPSyAoc3RhdHVzIGNvZGUgbm90IGluIDIwMC0yOTkgcmFuZ2UpLCB0aHJvdyBhbiBlcnJvclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ3ppcEh0bWwoY29udGVudCkge1xuICAvLyBDcmVhdGUgYSBuZXcgR1pJUCBjb21wcmVzc2lvbiBzdHJlYW1cbiAgY29uc3QgY3MgPSBuZXcgQ29tcHJlc3Npb25TdHJlYW0oJ2d6aXAnKVxuXG4gIC8vIENyZWF0ZSBhIHdyaXRhYmxlIHN0cmVhbSB0byB3aGljaCB3ZSdsbCB3cml0ZSB0aGUgY29tcHJlc3NlZCBkYXRhXG4gIGNvbnN0IHdyaXRlciA9IGNzLndyaXRhYmxlLmdldFdyaXRlcigpXG5cbiAgLy8gRW5jb2RlIHRoZSBjb250ZW50IHRvIFVpbnQ4QXJyYXlcbiAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG4gIGNvbnN0IGVuY29kZWRDb250ZW50ID0gZW5jb2Rlci5lbmNvZGUoY29udGVudClcblxuICAvLyBXcml0ZSB0aGUgZW5jb2RlZCBjb250ZW50IGludG8gdGhlIGNvbXByZXNzaW9uIHN0cmVhbVxuICB3cml0ZXIud3JpdGUoZW5jb2RlZENvbnRlbnQpXG5cbiAgLy8gQ2xvc2UgdGhlIHdyaXRlciB0byBmaW5pc2ggY29tcHJlc3Npb25cbiAgd3JpdGVyLmNsb3NlKClcblxuICAvLyBHZXQgdGhlIGNvbXByZXNzZWQgZGF0YSBhcyBhIEJsb2JcbiAgY29uc3QgY29tcHJlc3NlZEJsb2IgPSBhd2FpdCBuZXcgUmVzcG9uc2UoY3MucmVhZGFibGUpLmJsb2IoKVxuXG4gIHJldHVybiBjb21wcmVzc2VkQmxvYlxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGxvYWREYXRhVG9TZXJ2ZXIoKSB7XG4gIHN0b3BQZXJpb2RpY1VwbG9hZCgpXG4gIHRyeSB7XG4gICAgY29uc3QgaW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgaW50ZXJhY3Rpb25zIGFuZCBnZXQgdGhlIGxhdGVzdCB0aW1lc3RhbXBcbiAgICBpZiAoc3RvcmVJbnRlcmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJhY3Rpb25zIHRvIHVwbG9hZCcpXG4gICAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBsYXN0VGltZXN0YW1wID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHtcbiAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogbnVsbFxuICAgIH0pXG4gICAgbGFzdFRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAudXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wIHx8IG51bGxcblxuICAgIGlmIChsYXN0VGltZXN0YW1wKSBjb25zb2xlLmxvZygnbGFzdFRpbWVzdGFtcCByZXN0b3JlZDogJywgbGFzdFRpbWVzdGFtcClcblxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKVxuXG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogdGltZXN0YW1wXG4gICAgfSkgLy8gbWFraW5nIHN1cmUgd2l0aCByZW9wZW5pbmcgdGhlIGJyb3dzZXIsIGl0IGNvbnRpbnVlcyBmcm9tIGxlZnQgcG9pbnQgYW5kIHJld3JpdGVzIHRoZSBpbmZvcm1hdGlvblxuXG4gICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCB1c2VySWRSZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pXG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWRcblxuICAgIGxldCB1c2VyX2lkID0gY3VycmVudFVzZXJJZCB8fCAndW5rbm93bidcblxuICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgJHtmb2xkZXJfbmFtZX0vVVNFUi8ke3VzZXJfaWR9YFxuXG4gICAgY29uc3Qgc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSlcbiAgICBjb25zdCBvcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pXG4gICAgY29uc3Qgc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbiAgICBsZXQgc3RvcmVPcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbiAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbiAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuICAgICAgb3JkZXJEZXRhaWxzOiBzdG9yZU9yZGVyRGV0YWlsc1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlIHx8XG4gICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgPCBEYXRlLm5vdygpIC8gMTAwMCB8fCAvLyBwcmV2ZW50IGZyb20gcmVxdWVzdGluZyBmb3IgcG9zdCB1cmwgb3ZlciBhbmQgb3ZlclxuICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZT8uZmllbGRzPy5rZXkuaW5jbHVkZXModXNlcl9pZClcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIG5ldyBwb3N0IHVybCcpXG4gICAgICBjb25zb2xlLmxvZyhgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWApXG4gICAgICBsZXQgcG9zdFVybFJlc3VsdCA9IGF3YWl0IGN1c3RvbUZldGNoKGAke2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuXG4gICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UgPSBhd2FpdCBwb3N0VXJsUmVzdWx0Lmpzb24oKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICduZXcgcG9zdCB1cmwgcmVjZWl2ZWQnLFxuICAgICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgLSBEYXRlLm5vdygpIC8gMTAwMFxuICAgICAgKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihcbiAgICAgICAgW1xuICAgICAgICAgIGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgIFxcbiB1c2VyIGlkOiAke3VzZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuICAgICAgICAgICAgICAgICAgICBcXG4gJHtKU09OLnN0cmluZ2lmeShvcmRlckRldGFpbHMpfWBcbiAgICAgICAgXSxcbiAgICAgICAgeyB0eXBlOiAndGV4dC9wbGFpbicgfVxuICAgICAgKVxuICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vb3JkZXJfaW5mb18ke3RpbWVzdGFtcH0udHh0YClcbiAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbylcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKVxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgIC8vIGNvbnN0IGh0bWxCbG9iID0gbmV3IEJsb2IoW2h0bWxDb250ZW50XSwgeyB0eXBlOiAndGV4dC9odG1sJyB9KVxuICAgICAgICBjb25zdCBodG1sQmxvYiA9IGF3YWl0IGd6aXBIdG1sKGh0bWxDb250ZW50KVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkfS5odG1sLmd6YClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaHRtbEJsb2IpXG5cbiAgICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY3VzdG9tRmV0Y2goc2NyZWVuc2hvdERhdGEpXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKClcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBwcmVzaWduZWRGb3JtRGF0YShcbiAgICAgICAgICBgJHtmb2xkZXJOYW1lfS9zY3JlZW5zaG90cy8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csICctJyl9LmpwZ2BcbiAgICAgICAgKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKVxuICAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7ZX1gKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zJylcbiAgICAgIGNvbnN0IGludGVyYWN0aW9uc19qc29uID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXG5cbiAgICAgIGNvbnN0IGludGVyYWN0aW9uc0Jsb2IgPSBuZXcgQmxvYihbaW50ZXJhY3Rpb25zX2pzb25dLCB7XG4gICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YUZpbGUgPSBwcmVzaWduZWRGb3JtRGF0YShgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnNfJHt0aW1lc3RhbXB9Lmpzb25gKVxuXG4gICAgICBqc29uRm9ybURhdGFGaWxlLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IpXG5cbiAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YUZpbGVcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ2ludGVyYWN0aW9ucycsIGludGVyYWN0aW9uc19qc29uKVxuICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgndXNlcl9pZCcsIHVzZXJfaWQpXG5cbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zIGFzIGEganNvbicpXG4gICAgICBhd2FpdCBjdXN0b21GZXRjaChpbnRlcmFjdGlvbnNfdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBqc29uRm9ybURhdGFcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGRhdGE6JywgZXJyb3IpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodXNlcl9pZC5pbmNsdWRlcyhkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQpKSB7XG4gICAgICBjb25zdCBzZWVuX2ludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX3NuYXBzaG90cyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faHRtbFNuYXBzaG90czogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX3NjcmVlbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuICAgICAgbGV0IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBzZWVuX2ludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgICAgbGV0IHNlZW5faHRtbFNuYXBzaG90cyA9IHNlZW5fc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbiAgICAgIGxldCBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gc2Vlbl9vcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gc2Vlbl9zY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbiAgICAgIGxldCBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gPSBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbiAgICAgIHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBbLi4uc2Vlbl9zdG9yZUludGVyYWN0aW9ucywgLi4uc3RvcmVJbnRlcmFjdGlvbnNdXG4gICAgICBzZWVuX2h0bWxTbmFwc2hvdHMgPSB7IC4uLnNlZW5faHRtbFNuYXBzaG90cywgLi4uaHRtbFNuYXBzaG90cyB9XG4gICAgICBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gWy4uLnNlZW5fc3RvcmVPcmRlckRldGFpbHMsIC4uLnN0b3JlT3JkZXJEZXRhaWxzXVxuICAgICAgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gWy4uLnNlZW5fc3RvcmVTY3JlZW5zaG90cywgLi4uc3RvcmVTY3JlZW5zaG90c11cbiAgICAgIHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFsuLi5zZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24sIC4uLnN0b3JlUmVhc29uc0Fubm90YXRpb25dXG5cbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faW50ZXJhY3Rpb25zOiBzZWVuX3N0b3JlSW50ZXJhY3Rpb25zIH0pXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX2h0bWxTbmFwc2hvdHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fb3JkZXJEZXRhaWxzOiBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzIH0pXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX3NjcmVlbnNob3RzOiBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fcmVhc29uc0Fubm90YXRpb246IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KVxuICAgIH1cblxuICAgIGxhc3RUaW1lc3RhbXAgPSBudWxsXG5cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgJ29yZGVyRGV0YWlscycsXG4gICAgICAnc2NyZWVuc2hvdHMnLFxuICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbiAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCdcbiAgICBdKVxuICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBTdGFydCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdGFydFBlcmlvZGljVXBsb2FkKCkge1xuICBpZiAoIXVwbG9hZFRpbWVyKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0UGVyaW9kaWNVcGxvYWQnKVxuICAgIHVwbG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwodXBsb2FkRGF0YVRvU2VydmVyX25ldywgMTAwMDApIC8vIDEwIHNlY29uZHNcbiAgfVxufVxuXG4vLyBTdG9wIHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0b3BQZXJpb2RpY1VwbG9hZCgpIHtcbiAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3N0b3BQZXJpb2RpY1VwbG9hZCcpXG4gICAgY2xlYXJJbnRlcnZhbCh1cGxvYWRUaW1lcilcbiAgICB1cGxvYWRUaW1lciA9IGZhbHNlXG4gIH1cbn1cbmlmICh1cGxvYWRUaW1lciA9PSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKCctLWluaXRpYWxpemluZyBpbnRlcnZhbC0tJylcbiAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcl9uZXcoKSB7XG4gIHN0b3BQZXJpb2RpY1VwbG9hZCgpXG4gIHRyeSB7XG4gICAgY29uc3QgY2hlY2tJbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICBjb25zdCBjaGVja3N0b3JlSW50ZXJhY3Rpb25zID0gY2hlY2tJbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgaW50ZXJhY3Rpb25zIGFuZCBnZXQgdGhlIGxhdGVzdCB0aW1lc3RhbXBcbiAgICBpZiAoY2hlY2tzdG9yZUludGVyYWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcmFjdGlvbnMgdG8gdXBsb2FkJylcbiAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxhc3R1cGxvYWRUaW1lc3RhbXAgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBsYXN0dXBsb2FkVGltZXN0YW1wOiBudWxsIH0pXG4gICAgbGFzdHVwbG9hZFRpbWVzdGFtcCA9IGxhc3R1cGxvYWRUaW1lc3RhbXAubGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBudWxsXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7XG4gICAgICB1c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXA6IG51bGxcbiAgICB9KVxuICAgIGxhc3RUaW1lc3RhbXAgPSBsYXN0VGltZXN0YW1wLnVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCB8fCBudWxsXG5cbiAgICBpZiAobGFzdFRpbWVzdGFtcCkgY29uc29sZS5sb2coJ2xhc3RUaW1lc3RhbXAgcmVzdG9yZWQ6ICcsIGxhc3RUaW1lc3RhbXApXG5cbiAgICBjb25zdCB0aW1lc3RhbXAgPSBsYXN0VGltZXN0YW1wIHx8IGN1cnJlbnRUaW1lc3RhbXAucmVwbGFjZSgvWzouXS9nLCAnLScpXG5cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgdXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICB9KSAvLyBtYWtpbmcgc3VyZSB3aXRoIHJlb3BlbmluZyB0aGUgYnJvd3NlciwgaXQgY29udGludWVzIGZyb20gbGVmdCBwb2ludCBhbmQgcmV3cml0ZXMgdGhlIGluZm9ybWF0aW9uXG5cbiAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSlcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZFxuXG4gICAgbGV0IHVzZXJfaWQgPSBjdXJyZW50VXNlcklkIHx8ICd1bmtub3duJ1xuXG4gICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSLyR7dXNlcl9pZH1gXG5cbiAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuICAgIGNvbnN0IGludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuXG4gICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9XG4gICAgbGV0IHN0b3JlT3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXVxuICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuXG4gICAgY29uc3QgaW50ZXJhY3Rpb25zVG9VcGxvYWQgPSBzdG9yZUludGVyYWN0aW9ucy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBpdGVtLnRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHNuYXBzaG90c1RvVXBsb2FkID0gT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykuZmlsdGVyKChbc25hcHNob3RJZCwgY29udGVudF0pID0+IHtcbiAgICAgIC8vIEV4dHJhY3QgdGltZXN0YW1wIGZyb20gc25hcHNob3RJZCAoZm9ybWF0OiBodG1sXyR7aGFzaH1fJHt0aW1lc3RhbXB9XyR7dXVpZH0pXG4gICAgICBjb25zdCB0aW1lc3RhbXBNYXRjaCA9IHNuYXBzaG90SWQubWF0Y2goL18oXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn0uXFxkezN9WilfLylcbiAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlIC8vIEluY2x1ZGUgaWYgY2FuJ3QgcGFyc2UgdGltZXN0YW1wXG4gICAgICBjb25zdCBzbmFwc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgc25hcHNob3RUaW1lc3RhbXAgPiBsYXN0dXBsb2FkVGltZXN0YW1wXG4gICAgfSlcbiAgICBjb25zdCBzY3JlZW5zaG90c1RvVXBsb2FkID0gc3RvcmVTY3JlZW5zaG90cy5maWx0ZXIoKFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSkgPT4ge1xuICAgICAgLy8gRXh0cmFjdCB0aW1lc3RhbXAgZnJvbSBzY3JlZW5zaG90SWQgKGZvcm1hdDogc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1fJHt1dWlkfSlcbiAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc2NyZWVuc2hvdElkLm1hdGNoKC9zY3JlZW5zaG90XyguKz8pXy8pXG4gICAgICBpZiAoIXRpbWVzdGFtcE1hdGNoKSByZXR1cm4gdHJ1ZSAvLyBJbmNsdWRlIGlmIGNhbid0IHBhcnNlIHRpbWVzdGFtcFxuICAgICAgY29uc3Qgc2NyZWVuc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgc2NyZWVuc2hvdFRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHJlYXNvbnNBbm5vdGF0aW9uVG9VcGxvYWQgPSBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFsYXN0dXBsb2FkVGltZXN0YW1wIHx8IGl0ZW0udGltZXN0YW1wID4gbGFzdHVwbG9hZFRpbWVzdGFtcFxuICAgIH0pXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzVG9VcGxvYWQgPSBzdG9yZU9yZGVyRGV0YWlscy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBpdGVtLnRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuXG4gICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICBpbnRlcmFjdGlvbnM6IGludGVyYWN0aW9uc1RvVXBsb2FkLFxuICAgICAgcmVhc29uczogcmVhc29uc0Fubm90YXRpb25Ub1VwbG9hZCxcbiAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzVG9VcGxvYWRcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZSB8fFxuICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5leHBpcmVfdGltZXN0YW1wIDwgRGF0ZS5ub3coKSAvIDEwMDAgfHwgLy8gcHJldmVudCBmcm9tIHJlcXVlc3RpbmcgZm9yIHBvc3QgdXJsIG92ZXIgYW5kIG92ZXJcbiAgICAgICFsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmZpZWxkcz8ua2V5LmluY2x1ZGVzKHVzZXJfaWQpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBuZXcgcG9zdCB1cmwnKVxuICAgICAgY29uc29sZS5sb2coYCR7Z2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gKVxuICAgICAgbGV0IHBvc3RVcmxSZXN1bHQgPSBhd2FpdCBjdXN0b21GZXRjaChgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSlcblxuICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlID0gYXdhaXQgcG9zdFVybFJlc3VsdC5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnbmV3IHBvc3QgdXJsIHJlY2VpdmVkJyxcbiAgICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5leHBpcmVfdGltZXN0YW1wIC0gRGF0ZS5ub3coKSAvIDEwMDBcbiAgICAgIClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlc3Npb25JbmZvID0gbmV3IEJsb2IoXG4gICAgICAgIFtcbiAgICAgICAgICBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICBcXG4gdXNlciBpZDogJHt1c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICBcXG4gb3JkZXIgZGV0YWlsczpcbiAgICAgICAgICAgICAgICAgICAgXFxuICR7SlNPTi5zdHJpbmdpZnkob3JkZXJEZXRhaWxzVG9VcGxvYWQpfWBcbiAgICAgICAgXSxcbiAgICAgICAgeyB0eXBlOiAndGV4dC9wbGFpbicgfVxuICAgICAgKVxuICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vb3JkZXJfaW5mb18ke3RpbWVzdGFtcH0udHh0YClcbiAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbylcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKVxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIHNuYXBzaG90c1RvVXBsb2FkKSB7XG4gICAgICAgIGNvbnN0IGh0bWxCbG9iID0gYXdhaXQgZ3ppcEh0bWwoaHRtbENvbnRlbnQpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWR9Lmh0bWwuZ3pgKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBodG1sQmxvYilcblxuICAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJylcbiAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHNjcmVlbnNob3RzVG9VcGxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjdXN0b21GZXRjaChzY3JlZW5zaG90RGF0YSlcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKFxuICAgICAgICAgIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYFxuICAgICAgICApXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtlfWApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtpbnRlcmFjdGlvbnNfanNvbl0sIHtcbiAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgICAgY29uc3QganNvbkZvcm1EYXRhRmlsZSA9IHByZXNpZ25lZEZvcm1EYXRhKGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9uc18ke3RpbWVzdGFtcH0uanNvbmApXG5cbiAgICAgIGpzb25Gb3JtRGF0YUZpbGUuYXBwZW5kKCdmaWxlJywgaW50ZXJhY3Rpb25zQmxvYilcblxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToganNvbkZvcm1EYXRhRmlsZVxuICAgICAgfSlcblxuICAgICAgY29uc3QganNvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnaW50ZXJhY3Rpb25zJywgaW50ZXJhY3Rpb25zX2pzb24pXG4gICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCd1c2VyX2lkJywgdXNlcl9pZClcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMgYXMgYSBqc29uJylcbiAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGludGVyYWN0aW9uc191cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh1c2VyX2lkLmluY2x1ZGVzKGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCkpIHtcbiAgICAgIGNvbnN0IHNlZW5faW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2ludGVyYWN0aW9uczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9odG1sU25hcHNob3RzOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9vcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX29yZGVyRGV0YWlsczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9zY3JlZW5zaG90czogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgICBsZXQgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IHNlZW5faW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9odG1sU25hcHNob3RzID0gc2Vlbl9zbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgICAgbGV0IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBzZWVuX29yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICAgIGxldCBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBzZWVuX3NjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgICAgbGV0IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHNlZW5fUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgICAgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IFsuLi5zZWVuX3N0b3JlSW50ZXJhY3Rpb25zLCAuLi5zdG9yZUludGVyYWN0aW9uc11cbiAgICAgIHNlZW5faHRtbFNuYXBzaG90cyA9IHsgLi4uc2Vlbl9odG1sU25hcHNob3RzLCAuLi5odG1sU25hcHNob3RzIH1cbiAgICAgIHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgICBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBbLi4uc2Vlbl9zdG9yZVNjcmVlbnNob3RzLCAuLi5zdG9yZVNjcmVlbnNob3RzXVxuICAgICAgc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gWy4uLnNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbl1cblxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faHRtbFNuYXBzaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fc2NyZWVuc2hvdHM6IHNlZW5fc3RvcmVTY3JlZW5zaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pXG4gICAgfVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IG51bGxcbiAgICBsYXN0dXBsb2FkVGltZXN0YW1wID0gY3VycmVudFRpbWVzdGFtcFxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGxhc3R1cGxvYWRUaW1lc3RhbXA6IGxhc3R1cGxvYWRUaW1lc3RhbXAgfSlcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7XG4gICAgICBpbnRlcmFjdGlvbnM6IFtdLFxuICAgICAgaHRtbFNuYXBzaG90czoge30sXG4gICAgICBvcmRlckRldGFpbHM6IFtdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgcmVhc29uc0Fubm90YXRpb246IFtdXG4gICAgfSlcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgaW50ZXJhY3Rpb25zOiBjdXJyZW50RGF0YS5pbnRlcmFjdGlvbnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXApLFxuXG4gICAgICBodG1sU25hcHNob3RzOiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGN1cnJlbnREYXRhLmh0bWxTbmFwc2hvdHMpLmZpbHRlcigoW3NuYXBzaG90SWRdKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wTWF0Y2ggPSBzbmFwc2hvdElkLm1hdGNoKC9fKFxcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfTpcXGR7Mn06XFxkezJ9LlxcZHszfVopXy8pXG4gICAgICAgICAgaWYgKCF0aW1lc3RhbXBNYXRjaCkgcmV0dXJuIHRydWVcbiAgICAgICAgICBjb25zdCBzbmFwc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICAgICAgcmV0dXJuIHNuYXBzaG90VGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIG9yZGVyRGV0YWlsczogY3VycmVudERhdGEub3JkZXJEZXRhaWxzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aW1lc3RhbXAgPiBjdXJyZW50VGltZXN0YW1wKSxcbiAgICAgIHNjcmVlbnNob3RzOiBjdXJyZW50RGF0YS5zY3JlZW5zaG90cy5maWx0ZXIoKFtfLCBzY3JlZW5zaG90SWRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc2NyZWVuc2hvdElkLm1hdGNoKC9zY3JlZW5zaG90XyguKz8pXy8pXG4gICAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlXG4gICAgICAgIGNvbnN0IHNjcmVlbnNob3RUaW1lc3RhbXAgPSB0aW1lc3RhbXBNYXRjaFsxXVxuICAgICAgICByZXR1cm4gc2NyZWVuc2hvdFRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXBcbiAgICAgIH0pLFxuICAgICAgcmVhc29uc0Fubm90YXRpb246IGN1cnJlbnREYXRhLnJlYXNvbnNBbm5vdGF0aW9uLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgKVxuICAgIH1cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQobmV3RGF0YSlcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgIC8vICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgIC8vICAgJ29yZGVyRGV0YWlscycsXG4gICAgLy8gICAnc2NyZWVuc2hvdHMnLFxuICAgIC8vICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbiAgICAvLyAgICdpbnRlcmFjdGlvbnMnLFxuICAgIC8vICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCdcbiAgICAvLyBdKVxuICAgIC8vIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgLy8gc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuICAgIC8vIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZSIsImludGVyYWN0aW9uX3VybCIsImNvbmNhdCIsImZpbHRlcl91cmwiLCJuYXYiLCJzZWxlY3RvciIsIm5hbWUiLCJjaGlsZHJlbiIsImNsaWNrYWJsZSIsInRleHRfc2VsZWN0b3IiLCJhZGRfdGV4dCIsInJlZmluZW1lbnRfb3B0aW9uIiwiZGlyZWN0X2NoaWxkIiwidGV4dF9qcyIsImVsZW1lbnQiLCJ0ZXh0IiwiYUNoaWxkIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInRyaW0iLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJlIiwiY29uc29sZSIsImxvZyIsImdlbmVyYXRlX21ldGFkYXRhIiwiX2VsZW1lbnQkY2xvc2VzdCIsIm5hbWVFbSIsImNsb3Nlc3QiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidXJsIiwiZGF0YSIsInRpdGxlIiwic2VsZWN0ZWQiLCJfZWxlbWVudCRjbG9zZXN0MiIsIl9lbGVtZW50JGNsb3Nlc3QzIiwiX2VsZW1lbnQkY2xvc2VzdDQiLCJwcm9kdWN0X2ZhY3RzIiwicHJvZHVjdF9kZWxpdmVyeSIsInF1YW50aXR5X3NlbGVjdG9yIiwiZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yIiwic2V0X3VwX25vd19idXR0b24iLCJhZGRfdG9fY2FydF9idXR0b24iLCJidXlfbm93X2J1dHRvbiIsImJ1eV9ib3hfd2l0aF9hY2NvcmRpb24iLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5IiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwIiwiY2FydCIsInRleHRfZm9ybWF0IiwicmVjaXBlcyIsIm1hdGNoIiwibWF0Y2hfbWV0aG9kIiwiZW0iLCJfZW0kcXVlcnlTZWxlY3RvciIsInRlcm0iLCJ2YWx1ZSIsInNlbGVjdGlvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWxlY3Rpb25fc3RyaW5nIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVyciIsImYiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwia2VlcF9hdHRyIiwib3ZlcnJpZGVfYXR0ciIsInN0ZXBfdmFsdWVzIiwiZm9ybUVtIiwicHJvcCIsInN0ZXBzIiwiSlNPTiIsInBhcnNlIiwic3RlcExhYmVscyIsImN1cnJlbnRfdmFsdWUiLCJOdW1iZXIiLCJwYXJzZUludCIsInJhbmdlRW0iLCJfcmFuZ2VFbSRpbm5lclRleHQiLCJyZXBsYWNlIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImluc2VydF9zcGxpdF9tYXJrZXIiLCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsIm1hdGNoX3RleHQiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJfZW0kcXVlcnlTZWxlY3RvcjMiLCJidWxsZXRfbGlzdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsImxhYmVsIiwiaW5uZXJIVE1MIiwidW5kZWZpbmVkIiwiX2VtJHF1ZXJ5U2VsZWN0b3I2Iiwib3B0aW9ucyIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJvcHRpb24iLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNyIsIl9lbSRxdWVyeVNlbGVjdG9yOCIsIl9lbSRxdWVyeVNlbGVjdG9yOSIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjEwIiwiX2VtJHF1ZXJ5U2VsZWN0b3IxMSIsInRlcm1pbmF0ZSIsImFyZ3VtZW50cyIsInRlcm1pbmF0ZV9jYWxsYmFjayIsImlzRnJvbVBvcHVwIiwidXBkYXRlX2ljb24iLCJpbmNsdWRlcyIsInNvbWUiLCJleGNsdWRlVXJsIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJmaW5kUGFnZU1ldGEiLCJodG1sRWxlbWVudCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwibWV0YURhdGEiLCJtZXRhTmFtZSIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwiZm9yRWFjaCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwibWV0aG9kTmFtZSIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJncyIsImFwcGx5IiwidjQiLCJ1dWlkdjQiLCJKU1ppcCIsImludGVyYWN0aW9ucyIsInNjcmVlbnNob3RzIiwicmVhc29uc0Fubm90YXRpb24iLCJhY3Rpb25TZXF1ZW5jZUlkIiwidXBsb2FkVGltZXIiLCJ1c2VySWQiLCJsYXN0VGltZXN0YW1wIiwibGFzdHVwbG9hZFRpbWVzdGFtcCIsImxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZSIsImludGVyYWN0aW9uc191cmwiLCJnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmwiLCJ0YWJOYXZpZ2F0aW9uSGlzdG9yeSIsImFuYWx5emVOYXZpZ2F0aW9uIiwidGFiSWQiLCJiYWNrU3RhY2siLCJmb3J3YXJkU3RhY2siLCJjdXJyZW50VXJsIiwiaGlzdG9yeSIsImdldEN1c3RvbVF1ZXN0aW9uIiwiZXZlbnRUeXBlIiwiX2RhdGEkdGFyZ2V0JGNsYXNzTmFtIiwidGFyZ2V0IiwiaWQiLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uVHlwZSIsInNhdmVTY3JlZW5zaG90XzEiLCJfeCIsIl94MiIsIl9zYXZlU2NyZWVuc2hvdF8iLCJfY2FsbGVlMTIiLCJzY3JlZW5zaG90RGF0YVVybCIsInNjcmVlbnNob3RJZCIsInN0b3JlU2NyZWVuc2hvdHMiLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsInNldCIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJfY2FsbGVlMiIsIl9zZW5kZXIkdGFiMiIsIl9zZW5kZXIkdGFiIiwiY3VycmVudGFjdGlvblNlcXVlbmNlSWQiLCJ1dWlkIiwic2F2ZURhdGEiLCJzdWNjZXNzIiwiX3N1Y2Nlc3MiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfcmVmMiIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiYWxsIiwic2VuZFBvcHVwIiwidGFiIiwidGltZXN0YW1wIiwidDAiLCJjYXB0dXJlU2NyZWVuc2hvdCIsInQxIiwiZG93bmxvYWREYXRhTG9jYWxseSIsInQyIiwic2VsZWN0UmVjaXBlIiwicmVjaXBlIiwiX2NhcHR1cmVTY3JlZW5zaG90IiwiX2NhbGxlZTEzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1IiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1MiIsIl9jYWxsZWUxMyQiLCJfY29udGV4dDEzIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIl9zbGljZWRUb0FycmF5IiwiY2FwdHVyZVZpc2libGVUYWIiLCJ3aW5kb3dJZCIsImZvcm1hdCIsInF1YWxpdHkiLCJoYXNoQ29kZSIsInN0ciIsImhhc2giLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJzYXZlSFRNTCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJodG1sQ29udGVudCIsImN1cnJlbnRTbmFwc2hvdElkIiwiaHRtbFNuYXBzaG90cyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94MyIsIl94NCIsInNhdmVJbnRlcmFjdGlvbiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJ0YXJnZXRfdXJsIiwiaHRtbFNuYXBzaG90SWQiLCJwYWdlTWV0YSIsInN0b3JlSW50ZXJhY3Rpb25zIiwiX2FyZ3M0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g1IiwiX3g2IiwiX3g3IiwiX3g4IiwiX3g5IiwiX3gxMCIsInNhdmVTY3JlZW5zaG90IiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94MTEiLCJfeDEyIiwiX3gxMyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfZGF0YSR0YXJnZXQiLCJfZGF0YSR0YXJnZXQyIiwicXVlc3Rpb24iLCJyZWFzb24iLCJuZXdpdGVtIiwic3RvcmVSZWFzb25zQW5ub3RhdGlvbiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInRvTG93ZXJDYXNlIiwiTWF0aCIsInJhbmRvbSIsInNlbmRNZXNzYWdlIiwiaW5wdXQiLCJhY3Rpb25fdXVpZCIsIl94MTQiLCJfeDE1IiwiX3gxNiIsIl94MTciLCJfeDE4Iiwib25BY3RpdmF0ZWQiLCJfcmVmNyIsIl9jYWxsZWU4IiwiYWN0aXZlSW5mbyIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIl9yZWY4IiwiX2NhbGxlZTciLCJyZXNwb25zZSIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsImh0bWwiLCJfeDIwIiwiX3gxOSIsIl94MjEiLCJfeDIyIiwiX3NlbGVjdFJlY2lwZSIsIl9jYWxsZWUxNCIsInBhcnNlZFVybCIsIm1hdGNoTWV0aG9kIiwiX3lpZWxkJGNocm9tZSRzY3JpcHRpIiwiX3lpZWxkJGNocm9tZSRzY3JpcHRpMiIsImhhc01hdGNoIiwiX2NhbGxlZTE0JCIsIl9jb250ZXh0MTQiLCJVUkwiLCJwYXRobmFtZSIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJmdW5jIiwibWF0Y2hUZXh0IiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIndlYk5hdmlnYXRpb24iLCJvbkNvbXBsZXRlZCIsIl9yZWY5IiwiX2NhbGxlZTEwIiwiZGV0YWlscyIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwiZnJhbWVJZCIsIl9yZWYxMCIsIl9jYWxsZWU5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwidDMiLCJ0NCIsInQ1IiwidDYiLCJ0NyIsInQ4IiwiX3gyNCIsIl94MjMiLCJvblJlbW92ZWQiLCJfZG93bmxvYWREYXRhTG9jYWxseSIsIl9jYWxsZWUxNSIsInVzZXJJZFJlc3VsdCIsImN1cnJlbnRVc2VySWQiLCJ1c2VyX2lkIiwiZm9sZGVyTmFtZSIsInNuYXBzaG90cyIsImludGVyYWN0Iiwib3JkZXJEZXRhaWxzIiwic2NyZWVuIiwiUmVhc29uc0Fubm90YXRpb24iLCJzdG9yZU9yZGVyRGV0YWlscyIsInNlZW5faW50ZXJhY3QiLCJzZWVuX3NuYXBzaG90cyIsInNlZW5fb3JkZXJEZXRhaWxzIiwic2Vlbl9zY3JlZW4iLCJzZWVuX1JlYXNvbnNBbm5vdGF0aW9uIiwic2Vlbl9zdG9yZUludGVyYWN0aW9ucyIsInNlZW5faHRtbFNuYXBzaG90cyIsInNlZW5fc3RvcmVPcmRlckRldGFpbHMiLCJzZWVuX3N0b3JlU2NyZWVuc2hvdHMiLCJzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24iLCJzZXNzaW9uSW5mb0NvbnRlbnQiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJzbmFwc2hvdElkIiwiZnVsbERhdGEiLCJpbnRlcmFjdGlvbnNEYXRhIiwiX3N0ZXAyJHZhbHVlIiwic2NyZWVuc2hvdERhdGEiLCJfemlwIiwiX2Z1bGxEYXRhIiwiaW50ZXJhY3Rpb25zX2pzb24iLCJzY3JlZW5zaG90c0ZvbGRlciIsIl9zdGVwMyR2YWx1ZSIsIl9zY3JlZW5zaG90RGF0YSIsIl9zY3JlZW5zaG90SWQiLCJibG9iIiwiaHRtbFNuYXBzaG90c0ZvbGRlciIsIl9pMyIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiX3NuYXBzaG90SWQiLCJfaHRtbENvbnRlbnQiLCJ6aXBCbG9iIiwicmVhZGVyIiwiX2NhbGxlZTE1JCIsIl9jb250ZXh0MTUiLCJzZWVuX2ludGVyYWN0aW9ucyIsInNlZW5fc2NyZWVuc2hvdHMiLCJzZWVuX3JlYXNvbnNBbm5vdGF0aW9uIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX29iamVjdFNwcmVhZCIsInN0cmluZ2lmeSIsInN0b3Jlb3JkZXJEZXRhaWxzIiwiZG93bmxvYWRzIiwiZG93bmxvYWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJmaWxlbmFtZSIsInNhdmVBcyIsImVudHJpZXMiLCJyZWFzb25zIiwiZmlsZSIsImZvbGRlciIsImZldGNoIiwiZ2VuZXJhdGVBc3luYyIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJiYXNlNjRaaXAiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJyZW1vdmUiLCJwcmVzaWduZWRGb3JtRGF0YSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWVsZHMiLCJjdXN0b21GZXRjaCIsIl9yZWYxMSIsIl9jYWxsZWUxMSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwib2siLCJzdGF0dXMiLCJfeDI1IiwiX3gyNiIsImd6aXBIdG1sIiwiX3gyNyIsIl9nemlwSHRtbCIsIl9jYWxsZWUxNiIsImNvbnRlbnQiLCJjcyIsIndyaXRlciIsImVuY29kZXIiLCJlbmNvZGVkQ29udGVudCIsImNvbXByZXNzZWRCbG9iIiwiX2NhbGxlZTE2JCIsIl9jb250ZXh0MTYiLCJDb21wcmVzc2lvblN0cmVhbSIsImdldFdyaXRlciIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwid3JpdGUiLCJjbG9zZSIsIlJlc3BvbnNlIiwicmVhZGFibGUiLCJ1cGxvYWREYXRhVG9TZXJ2ZXIiLCJfdXBsb2FkRGF0YVRvU2VydmVyIiwiX2NhbGxlZTE3IiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lIiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lMiIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTMiLCJwb3N0VXJsUmVzdWx0Iiwic2Vzc2lvbkluZm8iLCJzZXNzaW9uRm9ybURhdGEiLCJfaTQiLCJfT2JqZWN0JGVudHJpZXMzIiwiX09iamVjdCRlbnRyaWVzMyRfaSIsImh0bWxCbG9iIiwiX3N0ZXA0JHZhbHVlIiwiX2Zvcm1EYXRhIiwiaW50ZXJhY3Rpb25zQmxvYiIsImpzb25Gb3JtRGF0YUZpbGUiLCJqc29uRm9ybURhdGEiLCJfY2FsbGVlMTckIiwiX2NvbnRleHQxNyIsInN0b3BQZXJpb2RpY1VwbG9hZCIsInN0YXJ0UGVyaW9kaWNVcGxvYWQiLCJ1c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXAiLCJleHBpcmVfdGltZXN0YW1wIiwibm93IiwianNvbiIsIkJsb2IiLCJib2R5Iiwic2V0SW50ZXJ2YWwiLCJ1cGxvYWREYXRhVG9TZXJ2ZXJfbmV3IiwiY2xlYXJJbnRlcnZhbCIsIl91cGxvYWREYXRhVG9TZXJ2ZXJfbmV3IiwiX2NhbGxlZTE4IiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lNCIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTUiLCJjaGVja0ludGVyYWN0IiwiY2hlY2tzdG9yZUludGVyYWN0aW9ucyIsImN1cnJlbnRUaW1lc3RhbXAiLCJpbnRlcmFjdGlvbnNUb1VwbG9hZCIsInNuYXBzaG90c1RvVXBsb2FkIiwic2NyZWVuc2hvdHNUb1VwbG9hZCIsInJlYXNvbnNBbm5vdGF0aW9uVG9VcGxvYWQiLCJvcmRlckRldGFpbHNUb1VwbG9hZCIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTYiLCJfc3RlcDUkdmFsdWUiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2IiwiX3N0ZXA2JHZhbHVlIiwiX2Zvcm1EYXRhMiIsImN1cnJlbnREYXRhIiwibmV3RGF0YSIsIl9jYWxsZWUxOCQiLCJfY29udGV4dDE4IiwiZmlsdGVyIiwiaXRlbSIsIl9yZWYxMiIsIl9yZWYxMyIsInRpbWVzdGFtcE1hdGNoIiwic25hcHNob3RUaW1lc3RhbXAiLCJfcmVmMTQiLCJfcmVmMTUiLCJzY3JlZW5zaG90VGltZXN0YW1wIiwiZnJvbUVudHJpZXMiLCJfcmVmMTYiLCJfcmVmMTciLCJfcmVmMTgiLCJfcmVmMTkiLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==
