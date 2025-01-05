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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var nav = {
  selector: '#navbar-main',
  name: 'nav_bar',
  children: [{
    selector: '#nav-search-bar-form',
    children: [{
      selector: 'input#twotabsearchtextbox',
      name: 'search_input',
      generate_metadata: function generate_metadata(em) {
        var term = em === null || em === void 0 ? void 0 : em.value;
        return {
          name: 'search_term',
          data: {
            term: term
          }
        };
      }
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
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var selected = em === null || em === void 0 ? void 0 : em.getAttribute('aria-current');
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            if (selected && selected == 'true') {
              return {
                name: 'refinements.departments',
                data: {
                  title: title,
                  selected: true,
                  url: url
                }
              };
            } else {
              return {
                name: 'refinements.departments',
                data: {
                  title: title,
                  selected: false,
                  url: url
                }
              };
            }
          }
        }]
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
          text_format: 'Clear Option {}',
          generate_metadata: function generate_metadata(em) {
            var _em$innerText;
            var title = em === null || em === void 0 || (_em$innerText = em.innerText) === null || _em$innerText === void 0 ? void 0 : _em$innerText.replace(/\n/g, ' ');
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.reviews',
              data: {
                title: title,
                selected: true,
                url: url
              }
            };
          }
        }, {
          selector: "li a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var _em$innerText2;
            var title = em === null || em === void 0 || (_em$innerText2 = em.innerText) === null || _em$innerText2 === void 0 ? void 0 : _em$innerText2.replace(/\n/g, ' ');
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.reviews',
              data: {
                title: title,
                selected: false,
                url: url
              }
            };
          }
        }]
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
          text_format: 'Clear Option {}',
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: true,
                url: url
              }
            };
          }
        }, {
          selector: "ul[aria-labelledby='p_36-title'] a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: false,
                url: url
              }
            };
          }
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
          text_format: 'Clear Option {}',
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: true,
                url: url
              }
            };
          }
        }, {
          selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='false']",
          add_text: true,
          name: 'from_text',
          clickable: true,
          generate_metadata: function generate_metadata(em) {
            var title = em === null || em === void 0 ? void 0 : em.innerText;
            var url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
            return {
              name: 'refinements.price',
              data: {
                title: title,
                selected: false,
                url: url
              }
            };
          }
        },
        // case 2: slider
        {
          selector: 'div.sf-range-slider-row:nth-of-type(1)',
          add_text: true,
          generate_metadata: function generate_metadata(em) {
            var _em$innerText3;
            var range = em === null || em === void 0 || (_em$innerText3 = em.innerText) === null || _em$innerText3 === void 0 ? void 0 : _em$innerText3.replace(/\n/g, '');
            return {
              name: 'refinements.price',
              data: {
                title: 'price_range',
                range: range
              }
            };
          }
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
        }]
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
          selector: 'div.s-color-swatch-container',
          name: 'available_colors',
          children: [{
            selector: 'div.s-color-swatch-pad',
            name: 'from_text',
            clickable: true,
            add_text: true,
            text_js: function text_js(em) {
              var aChild = em.querySelector('a');
              if (aChild) {
                return aChild.getAttribute('aria-label') || '';
              }
              return '';
            }
          }, {
            selector: "div[data-csa-c-type='link'] a",
            direct_child: true,
            name: 'from_text',
            clickable: true,
            add_text: true
          }]
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
    }, {
      selector: 'div.a-popover-wrapper',
      name: 'popover',
      children: [{
        selector: 'header.a-popover-header button',
        add_text: true,
        clickable: true,
        name: 'close',
        text_format: 'Close'
      }, {
        selector: 'div.a-popover-inner div.puis-atc-size-variation',
        children: [{
          selector: 'div.a-row:nth-of-type(1)',
          direct_child: true,
          children: [{
            selector: "span[data-component-type='s-product-image'] a",
            name: 'product_image',
            add_text: true,
            clickable: true,
            text_format: 'Product Image'
          }, {
            selector: 'div.puis-size-variation-title a',
            name: 'product_title',
            add_text: true,
            clickable: true
          }, {
            selector: 'div.puis-size-variation-product-spec',
            name: 'product_specification',
            add_text: true,
            clickable: true,
            click_selector: 'a'
          }]
        }, {
          selector: 'div.a-row:nth-of-type(2)',
          direct_child: true,
          children: [{
            selector: 'div.puis-size-variation-product-options',
            name: 'from_text',
            text_selector: 'span.a-size-base.a-color-secondary',
            children: [{
              selector: 'span.a-size-base.a-color-secondary',
              add_text: true
            }, {
              selector: 'span.a-dropdown-prompt',
              add_text: true
            }, {
              selector: 'select',
              name: 'drop_down_list'
            }]
          }, {
            selector: 'div.puis-size-variation-price a',
            name: 'price',
            clickable: true,
            add_text: true,
            text_selector: "span[aria-hidden='true']"
          }, {
            selector: 'div.puis-size-variation-delivery',
            add_text: true,
            name: 'delivery'
          }]
        }, {
          selector: 'div.a-row:nth-of-type(3)',
          direct_child: true,
          children: [{
            selector: 'span.s-no-js-hide input',
            name: 'cancel',
            clickable: true,
            add_text: true,
            text_format: 'Cancel'
          }, {
            selector: 'div.puis-atcb-add-container button',
            name: 'add_to_cart',
            clickable: true,
            add_text: true
          }]
        }]
      }]
    }]
  }]
}, {
  match: '#productTitle',
  match_text: '',
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
      selector: '#centerCol',
      "class": 'product-card',
      children: [{
        selector: '#title',
        add_text: true,
        keep_attr: ['id'],
        generate_metadata: function generate_metadata(em) {
          return {
            name: 'product_details',
            data: {
              label: 'title',
              value: (em === null || em === void 0 ? void 0 : em.innerText) || ''
            }
          };
        }
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
        "class": 'product-price',
        generate_metadata: function generate_metadata(em) {
          var _em$innerText4;
          return {
            name: 'product_details',
            data: {
              label: 'price',
              value: (em === null || em === void 0 || (_em$innerText4 = em.innerText) === null || _em$innerText4 === void 0 ? void 0 : _em$innerText4.replace(/\n/g, '')) || ''
            }
          };
        }
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
            var _em$querySelector, _em$querySelector2;
            var label = (_em$querySelector = em.querySelector('div.a-row:has(label.a-form-label) label.a-form-label')) === null || _em$querySelector === void 0 ? void 0 : _em$querySelector.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector2 = em.querySelector('div.a-row:has(label.a-form-label) span.selection')) === null || _em$querySelector2 === void 0 ? void 0 : _em$querySelector2.innerHTML;
            if (value === undefined || value === '') {
              var _em$querySelector3;
              var options = (_em$querySelector3 = em.querySelector('select')) === null || _em$querySelector3 === void 0 ? void 0 : _em$querySelector3.querySelectorAll('option');
              // console.log(options);
              if (options) {
                var _iterator = _createForOfIteratorHelper(options),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var option = _step.value;
                    // console.log(option);
                    if (option && option.getAttribute('selected') !== null) {
                      value = option.innerHTML.trim();
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
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
            var _em$querySelector4, _em$querySelector5;
            var label = (_em$querySelector4 = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary')) === null || _em$querySelector4 === void 0 ? void 0 : _em$querySelector4.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector5 = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.inline-twister-dim-title-value')) === null || _em$querySelector5 === void 0 ? void 0 : _em$querySelector5.innerHTML;
            if (value === undefined || value === '') {
              var _em$querySelector6;
              var options = (_em$querySelector6 = em.querySelector('select')) === null || _em$querySelector6 === void 0 ? void 0 : _em$querySelector6.querySelectorAll('option');
              // console.log(options);
              if (options) {
                var _iterator2 = _createForOfIteratorHelper(options),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var option = _step2.value;
                    // console.log(option);
                    if (option && option.getAttribute('selected') !== null) {
                      value = option.innerHTML.trim();
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
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
            var _em$querySelector7, _em$querySelector8;
            var label = (_em$querySelector7 = em.querySelector('span.a-size-base.a-color-secondary')) === null || _em$querySelector7 === void 0 ? void 0 : _em$querySelector7.innerHTML.replace(/[:\n]/g, '').trim();
            var value = (_em$querySelector8 = em.querySelector('span.inline-twister-dim-title-value-truncate')) === null || _em$querySelector8 === void 0 ? void 0 : _em$querySelector8.innerHTML;
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
        text_format: 'About this item: {}',
        generate_metadata: function generate_metadata(em) {
          var _em$innerText5;
          return {
            name: 'product_details',
            data: {
              label: 'bullet_list',
              value: (em === null || em === void 0 || (_em$innerText5 = em.innerText) === null || _em$innerText5 === void 0 ? void 0 : _em$innerText5.replace(/\n/g, ' ')) || ''
            }
          };
        }
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
      }],
      generate_metadata: function generate_metadata(em) {
        var asinEm = em.querySelector('input#ASIN');
        return {
          name: 'product_details',
          data: {
            label: 'asin',
            value: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
          }
        };
      }
    }, {
      selector: '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop))',
      name: 'buybox',
      children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
      generate_metadata: function generate_metadata(em) {
        var asinEm = em.querySelector('input#ASIN');
        return {
          name: 'product_details',
          data: {
            label: 'asin',
            value: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
          }
        };
      }
    }, {
      selector: '#partialState_buybox_desktop',
      children: [{
        selector: '#partialStateBuybox div.a-section.a-text-center.a-spacing-small',
        add_text: true
      }],
      generate_metadata: function generate_metadata(em) {
        var asinEm = em.querySelector('input#ASIN');
        return {
          name: 'product_details',
          data: {
            label: 'asin',
            value: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
          }
        };
      }
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
    var timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, interact, orderDetails, screen, ReasonsAnnotation, htmlSnapshots, storeInteractions, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation, sessionInfoContent, _i, _Object$entries, _Object$entries$_i, snapshotId, htmlContent, fullData, interactionsData, _iterator2, _step2, _step2$value, screenshotData, screenshotId, _zip, _fullData, interactions_json, screenshotsFolder, _iterator3, _step3, _step3$value, _screenshotData, _screenshotId, response, blob, htmlSnapshotsFolder, _i2, _Object$entries2, _Object$entries2$_i, _snapshotId, _htmlContent, zipBlob, reader;
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
          seen_storeInteractions = seen_interact.seen_interactions || [];
          seen_htmlSnapshots = seen_snapshots.seen_htmlSnapshots || {};
          seen_storeOrderDetails = seen_orderDetails.seen_orderDetails || [];
          seen_storeScreenshots = seen_screen.seen_screenshots || [];
          seen_storeReasonsAnnotation = seen_ReasonsAnnotation.seen_reasonsAnnotation || [];
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
          _i = 0, _Object$entries = Object.entries(htmlSnapshots);
        case 59:
          if (!(_i < _Object$entries.length)) {
            _context15.next = 66;
            break;
          }
          _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), snapshotId = _Object$entries$_i[0], htmlContent = _Object$entries$_i[1];
          _context15.next = 63;
          return chrome.downloads.download({
            url: 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent),
            filename: "".concat(folderName, "/html/").concat(snapshotId.replace(/[:.]/g, '-'), ".html"),
            saveAs: false
          });
        case 63:
          _i++;
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
          for (_i2 = 0, _Object$entries2 = Object.entries(htmlSnapshots); _i2 < _Object$entries2.length; _i2++) {
            _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), _snapshotId = _Object$entries2$_i[0], _htmlContent = _Object$entries2$_i[1];
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
    var _lastGeneratePresigne, _lastGeneratePresigne2, interact, storeInteractions, timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, orderDetails, screen, ReasonsAnnotation, htmlSnapshots, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, fullData, _lastGeneratePresigne3, postUrlResult, sessionInfo, sessionFormData, _i3, _Object$entries3, _Object$entries3$_i, snapshotId, htmlContent, htmlBlob, formData, _iterator4, _step4, _step4$value, screenshotData, screenshotId, response, blob, _formData, interactions_json, interactionsBlob, jsonFormDataFile, jsonFormData, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation;
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
          _i3 = 0, _Object$entries3 = Object.entries(htmlSnapshots);
        case 60:
          if (!(_i3 < _Object$entries3.length)) {
            _context17.next = 72;
            break;
          }
          _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2), snapshotId = _Object$entries3$_i[0], htmlContent = _Object$entries3$_i[1];
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
          _i3++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUNxUyxLQUFLLENBQUMsdUJBQXVCLEVBQUFrVCxVQUFBLENBQUEvSyxFQUFPLENBQUM7VUFBQSxPQUFBK0ssVUFBQSxDQUFBamEsTUFBQSxXQUN0QyxLQUFLO1FBQUE7UUFBQTtVQUFBLE9BQUFpYSxVQUFBLENBQUFsWSxJQUFBO01BQUE7SUFBQSxHQUFBNFcsU0FBQTtFQUFBLENBRWY7RUFBQSxPQUFBRCx1QkFBQSxDQUFBbFcsS0FBQSxPQUFBdkksU0FBQTtBQUFBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICc2NzZhNjY1MTQ0Mzk4ZTY5Njc1NjdhMmInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGUgPSAnYW1hem9uLmNvbSdcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl91cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICBzZWxlY3RvcjogJyNuYXZiYXItbWFpbicsXG4gIG5hbWU6ICduYXZfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKVwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKTpub3QoOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKSlcIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJsaTpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSlcIixcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImxpOm5vdCg6aGFzKGlucHV0W3R5cGU9J2NoZWNrYm94J10pKVwiLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHMnLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X25hbWUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXByb2R1Y3QtaW1hZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXZhaWxhYmxlX2NvbG9ycycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtcGFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy10eXBlPSdsaW5rJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdhZGQtdG8tY2FydCddIGJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ3RpdGxlJywgdmFsdWU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZS5hb2stYWxpZ24tY2VudGVyLmFvay1yZWxhdGl2ZSA+IHNwYW4uYW9rLW9mZnNjcmVlbiwgI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAncHJpY2UnLCB2YWx1ZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgc3Bhbjpub3QoLmFvay1oaWRkZW4pIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEVtLmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1zaW5nbGV0b24taGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dF90aGlzX2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWJvdXQgdGhpcyBpdGVtOiB7fScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdidWxsZXRfbGlzdCcsIHZhbHVlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdhc2luJywgdmFsdWU6IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdhc2luJywgdmFsdWU6IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH1cbl1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKFxuICAgIHVybCAmJlxuICAgIHVybC5pbmNsdWRlcyh1cmxfaW5jbHVkZSkgJiZcbiAgICAhZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL0luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgY29uc3QgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdleHRlbnNpb24tY2xpY2thYmxlLW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuLy8gQWRkIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIG1hcmtlcnMgd2hlbiBuZWVkZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja2FibGVNYXJrZXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZXh0ZW5zaW9uLWNsaWNrYWJsZS1tYXJrZXJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdleHRlbnNpb24tY2xpY2thYmxlLW1hcmtlcicpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRFeGNsdWRlKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiAhdXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSB8fCBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbn1cbiIsIi8qIVxuXG5KU1ppcCB2My4xMC4xIC0gQSBKYXZhU2NyaXB0IGNsYXNzIGZvciBnZW5lcmF0aW5nIGFuZCByZWFkaW5nIHppcCBmaWxlc1xuPGh0dHA6Ly9zdHVhcnRrLmNvbS9qc3ppcD5cblxuKGMpIDIwMDktMjAxNiBTdHVhcnQgS25pZ2h0bGV5IDxzdHVhcnQgW2F0XSBzdHVhcnRrLmNvbT5cbkR1YWwgbGljZW5jZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIG9yIEdQTHYzLiBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9TdHVrL2pzemlwL21haW4vTElDRU5TRS5tYXJrZG93bi5cblxuSlNaaXAgdXNlcyB0aGUgbGlicmFyeSBwYWtvIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSA6XG5odHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL3Bha28vYmxvYi9tYWluL0xJQ0VOU0VcbiovXG5cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcykuSlNaaXA9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gcyhhLG8saCl7ZnVuY3Rpb24gdShyLGUpe2lmKCFvW3JdKXtpZighYVtyXSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZSYmdClyZXR1cm4gdChyLCEwKTtpZihsKXJldHVybiBsKHIsITApO3ZhciBuPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrcitcIidcIik7dGhyb3cgbi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLG59dmFyIGk9b1tyXT17ZXhwb3J0czp7fX07YVtyXVswXS5jYWxsKGkuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgdD1hW3JdWzFdW2VdO3JldHVybiB1KHR8fGUpfSxpLGkuZXhwb3J0cyxzLGEsbyxoKX1yZXR1cm4gb1tyXS5leHBvcnRzfWZvcih2YXIgbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGU9MDtlPGgubGVuZ3RoO2UrKyl1KGhbZV0pO3JldHVybiB1fSh7MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBkPWUoXCIuL3V0aWxzXCIpLGM9ZShcIi4vc3VwcG9ydFwiKSxwPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtyLmVuY29kZT1mdW5jdGlvbihlKXtmb3IodmFyIHQscixuLGkscyxhLG8saD1bXSx1PTAsbD1lLmxlbmd0aCxmPWwsYz1cInN0cmluZ1wiIT09ZC5nZXRUeXBlT2YoZSk7dTxlLmxlbmd0aDspZj1sLXUsbj1jPyh0PWVbdSsrXSxyPXU8bD9lW3UrK106MCx1PGw/ZVt1KytdOjApOih0PWUuY2hhckNvZGVBdCh1KyspLHI9dTxsP2UuY2hhckNvZGVBdCh1KyspOjAsdTxsP2UuY2hhckNvZGVBdCh1KyspOjApLGk9dD4+MixzPSgzJnQpPDw0fHI+PjQsYT0xPGY/KDE1JnIpPDwyfG4+PjY6NjQsbz0yPGY/NjMmbjo2NCxoLnB1c2gocC5jaGFyQXQoaSkrcC5jaGFyQXQocykrcC5jaGFyQXQoYSkrcC5jaGFyQXQobykpO3JldHVybiBoLmpvaW4oXCJcIil9LHIuZGVjb2RlPWZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYSxvPTAsaD0wLHU9XCJkYXRhOlwiO2lmKGUuc3Vic3RyKDAsdS5sZW5ndGgpPT09dSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGJhc2U2NCBpbnB1dCwgaXQgbG9va3MgbGlrZSBhIGRhdGEgdXJsLlwiKTt2YXIgbCxmPTMqKGU9ZS5yZXBsYWNlKC9bXkEtWmEtejAtOSsvPV0vZyxcIlwiKSkubGVuZ3RoLzQ7aWYoZS5jaGFyQXQoZS5sZW5ndGgtMSk9PT1wLmNoYXJBdCg2NCkmJmYtLSxlLmNoYXJBdChlLmxlbmd0aC0yKT09PXAuY2hhckF0KDY0KSYmZi0tLGYlMSE9MCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGJhc2U2NCBpbnB1dCwgYmFkIGNvbnRlbnQgbGVuZ3RoLlwiKTtmb3IobD1jLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkoMHxmKTpuZXcgQXJyYXkoMHxmKTtvPGUubGVuZ3RoOyl0PXAuaW5kZXhPZihlLmNoYXJBdChvKyspKTw8MnwoaT1wLmluZGV4T2YoZS5jaGFyQXQobysrKSkpPj40LHI9KDE1JmkpPDw0fChzPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSk+PjIsbj0oMyZzKTw8NnwoYT1wLmluZGV4T2YoZS5jaGFyQXQobysrKSkpLGxbaCsrXT10LDY0IT09cyYmKGxbaCsrXT1yKSw2NCE9PWEmJihsW2grK109bik7cmV0dXJuIGx9fSx7XCIuL3N1cHBvcnRcIjozMCxcIi4vdXRpbHNcIjozMn1dLDI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9leHRlcm5hbFwiKSxpPWUoXCIuL3N0cmVhbS9EYXRhV29ya2VyXCIpLHM9ZShcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIiksYT1lKFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCIpO2Z1bmN0aW9uIG8oZSx0LHIsbixpKXt0aGlzLmNvbXByZXNzZWRTaXplPWUsdGhpcy51bmNvbXByZXNzZWRTaXplPXQsdGhpcy5jcmMzMj1yLHRoaXMuY29tcHJlc3Npb249bix0aGlzLmNvbXByZXNzZWRDb250ZW50PWl9by5wcm90b3R5cGU9e2dldENvbnRlbnRXb3JrZXI6ZnVuY3Rpb24oKXt2YXIgZT1uZXcgaShuLlByb21pc2UucmVzb2x2ZSh0aGlzLmNvbXByZXNzZWRDb250ZW50KSkucGlwZSh0aGlzLmNvbXByZXNzaW9uLnVuY29tcHJlc3NXb3JrZXIoKSkucGlwZShuZXcgYShcImRhdGFfbGVuZ3RoXCIpKSx0PXRoaXM7cmV0dXJuIGUub24oXCJlbmRcIixmdW5jdGlvbigpe2lmKHRoaXMuc3RyZWFtSW5mby5kYXRhX2xlbmd0aCE9PXQudW5jb21wcmVzc2VkU2l6ZSl0aHJvdyBuZXcgRXJyb3IoXCJCdWcgOiB1bmNvbXByZXNzZWQgZGF0YSBzaXplIG1pc21hdGNoXCIpfSksZX0sZ2V0Q29tcHJlc3NlZFdvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgaShuLlByb21pc2UucmVzb2x2ZSh0aGlzLmNvbXByZXNzZWRDb250ZW50KSkud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2VkU2l6ZVwiLHRoaXMuY29tcHJlc3NlZFNpemUpLndpdGhTdHJlYW1JbmZvKFwidW5jb21wcmVzc2VkU2l6ZVwiLHRoaXMudW5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLHRoaXMuY3JjMzIpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIix0aGlzLmNvbXByZXNzaW9uKX19LG8uY3JlYXRlV29ya2VyRnJvbT1mdW5jdGlvbihlLHQscil7cmV0dXJuIGUucGlwZShuZXcgcykucGlwZShuZXcgYShcInVuY29tcHJlc3NlZFNpemVcIikpLnBpcGUodC5jb21wcmVzc1dvcmtlcihyKSkucGlwZShuZXcgYShcImNvbXByZXNzZWRTaXplXCIpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzaW9uXCIsdCl9LHQuZXhwb3J0cz1vfSx7XCIuL2V4dGVybmFsXCI6NixcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vc3RyZWFtL0RhdGFMZW5ndGhQcm9iZVwiOjI2LFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiOjI3fV0sMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpO3IuU1RPUkU9e21hZ2ljOlwiXFwwXFwwXCIsY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4oXCJTVE9SRSBjb21wcmVzc2lvblwiKX0sdW5jb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgbihcIlNUT1JFIGRlY29tcHJlc3Npb25cIil9fSxyLkRFRkxBVEU9ZShcIi4vZmxhdGVcIil9LHtcIi4vZmxhdGVcIjo3LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4fV0sNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3V0aWxzXCIpO3ZhciBvPWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9W10scj0wO3I8MjU2O3IrKyl7ZT1yO2Zvcih2YXIgbj0wO248ODtuKyspZT0xJmU/Mzk4ODI5MjM4NF5lPj4+MTplPj4+MTt0W3JdPWV9cmV0dXJuIHR9KCk7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMCE9PWUmJmUubGVuZ3RoP1wic3RyaW5nXCIhPT1uLmdldFR5cGVPZihlKT9mdW5jdGlvbihlLHQscixuKXt2YXIgaT1vLHM9bityO2VePS0xO2Zvcih2YXIgYT1uO2E8czthKyspZT1lPj4+OF5pWzI1NSYoZV50W2FdKV07cmV0dXJuLTFeZX0oMHx0LGUsZS5sZW5ndGgsMCk6ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9byxzPW4rcjtlXj0tMTtmb3IodmFyIGE9bjthPHM7YSsrKWU9ZT4+PjheaVsyNTUmKGVedC5jaGFyQ29kZUF0KGEpKV07cmV0dXJuLTFeZX0oMHx0LGUsZS5sZW5ndGgsMCk6MH19LHtcIi4vdXRpbHNcIjozMn1dLDU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyLmJhc2U2ND0hMSxyLmJpbmFyeT0hMSxyLmRpcj0hMSxyLmNyZWF0ZUZvbGRlcnM9ITAsci5kYXRlPW51bGwsci5jb21wcmVzc2lvbj1udWxsLHIuY29tcHJlc3Npb25PcHRpb25zPW51bGwsci5jb21tZW50PW51bGwsci51bml4UGVybWlzc2lvbnM9bnVsbCxyLmRvc1Blcm1pc3Npb25zPW51bGx9LHt9XSw2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49bnVsbDtuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlP1Byb21pc2U6ZShcImxpZVwiKSx0LmV4cG9ydHM9e1Byb21pc2U6bn19LHtsaWU6Mzd9XSw3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MTZBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQzMkFycmF5LGk9ZShcInBha29cIikscz1lKFwiLi91dGlsc1wiKSxhPWUoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLG89bj9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCI7ZnVuY3Rpb24gaChlLHQpe2EuY2FsbCh0aGlzLFwiRmxhdGVXb3JrZXIvXCIrZSksdGhpcy5fcGFrbz1udWxsLHRoaXMuX3Bha29BY3Rpb249ZSx0aGlzLl9wYWtvT3B0aW9ucz10LHRoaXMubWV0YT17fX1yLm1hZ2ljPVwiXFxiXFwwXCIscy5pbmhlcml0cyhoLGEpLGgucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLm1ldGE9ZS5tZXRhLG51bGw9PT10aGlzLl9wYWtvJiZ0aGlzLl9jcmVhdGVQYWtvKCksdGhpcy5fcGFrby5wdXNoKHMudHJhbnNmb3JtVG8obyxlLmRhdGEpLCExKX0saC5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXthLnByb3RvdHlwZS5mbHVzaC5jYWxsKHRoaXMpLG51bGw9PT10aGlzLl9wYWtvJiZ0aGlzLl9jcmVhdGVQYWtvKCksdGhpcy5fcGFrby5wdXNoKFtdLCEwKX0saC5wcm90b3R5cGUuY2xlYW5VcD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmNsZWFuVXAuY2FsbCh0aGlzKSx0aGlzLl9wYWtvPW51bGx9LGgucHJvdG90eXBlLl9jcmVhdGVQYWtvPWZ1bmN0aW9uKCl7dGhpcy5fcGFrbz1uZXcgaVt0aGlzLl9wYWtvQWN0aW9uXSh7cmF3OiEwLGxldmVsOnRoaXMuX3Bha29PcHRpb25zLmxldmVsfHwtMX0pO3ZhciB0PXRoaXM7dGhpcy5fcGFrby5vbkRhdGE9ZnVuY3Rpb24oZSl7dC5wdXNoKHtkYXRhOmUsbWV0YTp0Lm1ldGF9KX19LHIuY29tcHJlc3NXb3JrZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBoKFwiRGVmbGF0ZVwiLGUpfSxyLnVuY29tcHJlc3NXb3JrZXI9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGgoXCJJbmZsYXRlXCIse30pfX0se1wiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi91dGlsc1wiOjMyLHBha286Mzh9XSw4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gQShlLHQpe3ZhciByLG49XCJcIjtmb3Iocj0wO3I8dDtyKyspbis9U3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmZSksZT4+Pj04O3JldHVybiBufWZ1bmN0aW9uIG4oZSx0LHIsbixpLHMpe3ZhciBhLG8saD1lLmZpbGUsdT1lLmNvbXByZXNzaW9uLGw9cyE9PU8udXRmOGVuY29kZSxmPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixzKGgubmFtZSkpLGM9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShoLm5hbWUpKSxkPWguY29tbWVudCxwPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixzKGQpKSxtPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixPLnV0ZjhlbmNvZGUoZCkpLF89Yy5sZW5ndGghPT1oLm5hbWUubGVuZ3RoLGc9bS5sZW5ndGghPT1kLmxlbmd0aCxiPVwiXCIsdj1cIlwiLHk9XCJcIix3PWguZGlyLGs9aC5kYXRlLHg9e2NyYzMyOjAsY29tcHJlc3NlZFNpemU6MCx1bmNvbXByZXNzZWRTaXplOjB9O3QmJiFyfHwoeC5jcmMzMj1lLmNyYzMyLHguY29tcHJlc3NlZFNpemU9ZS5jb21wcmVzc2VkU2l6ZSx4LnVuY29tcHJlc3NlZFNpemU9ZS51bmNvbXByZXNzZWRTaXplKTt2YXIgUz0wO3QmJihTfD04KSxsfHwhXyYmIWd8fChTfD0yMDQ4KTt2YXIgej0wLEM9MDt3JiYoenw9MTYpLFwiVU5JWFwiPT09aT8oQz03OTgsenw9ZnVuY3Rpb24oZSx0KXt2YXIgcj1lO3JldHVybiBlfHwocj10PzE2ODkzOjMzMjA0KSwoNjU1MzUmcik8PDE2fShoLnVuaXhQZXJtaXNzaW9ucyx3KSk6KEM9MjAsenw9ZnVuY3Rpb24oZSl7cmV0dXJuIDYzJihlfHwwKX0oaC5kb3NQZXJtaXNzaW9ucykpLGE9ay5nZXRVVENIb3VycygpLGE8PD02LGF8PWsuZ2V0VVRDTWludXRlcygpLGE8PD01LGF8PWsuZ2V0VVRDU2Vjb25kcygpLzIsbz1rLmdldFVUQ0Z1bGxZZWFyKCktMTk4MCxvPDw9NCxvfD1rLmdldFVUQ01vbnRoKCkrMSxvPDw9NSxvfD1rLmdldFVUQ0RhdGUoKSxfJiYodj1BKDEsMSkrQShCKGYpLDQpK2MsYis9XCJ1cFwiK0Eodi5sZW5ndGgsMikrdiksZyYmKHk9QSgxLDEpK0EoQihwKSw0KSttLGIrPVwidWNcIitBKHkubGVuZ3RoLDIpK3kpO3ZhciBFPVwiXCI7cmV0dXJuIEUrPVwiXFxuXFwwXCIsRSs9QShTLDIpLEUrPXUubWFnaWMsRSs9QShhLDIpLEUrPUEobywyKSxFKz1BKHguY3JjMzIsNCksRSs9QSh4LmNvbXByZXNzZWRTaXplLDQpLEUrPUEoeC51bmNvbXByZXNzZWRTaXplLDQpLEUrPUEoZi5sZW5ndGgsMiksRSs9QShiLmxlbmd0aCwyKSx7ZmlsZVJlY29yZDpSLkxPQ0FMX0ZJTEVfSEVBREVSK0UrZitiLGRpclJlY29yZDpSLkNFTlRSQUxfRklMRV9IRUFERVIrQShDLDIpK0UrQShwLmxlbmd0aCwyKStcIlxcMFxcMFxcMFxcMFwiK0Eoeiw0KStBKG4sNCkrZitiK3B9fXZhciBJPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxPPWUoXCIuLi91dGY4XCIpLEI9ZShcIi4uL2NyYzMyXCIpLFI9ZShcIi4uL3NpZ25hdHVyZVwiKTtmdW5jdGlvbiBzKGUsdCxyLG4pe2kuY2FsbCh0aGlzLFwiWmlwRmlsZVdvcmtlclwiKSx0aGlzLmJ5dGVzV3JpdHRlbj0wLHRoaXMuemlwQ29tbWVudD10LHRoaXMuemlwUGxhdGZvcm09cix0aGlzLmVuY29kZUZpbGVOYW1lPW4sdGhpcy5zdHJlYW1GaWxlcz1lLHRoaXMuYWNjdW11bGF0ZT0hMSx0aGlzLmNvbnRlbnRCdWZmZXI9W10sdGhpcy5kaXJSZWNvcmRzPVtdLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldD0wLHRoaXMuZW50cmllc0NvdW50PTAsdGhpcy5jdXJyZW50RmlsZT1udWxsLHRoaXMuX3NvdXJjZXM9W119SS5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5tZXRhLnBlcmNlbnR8fDAscj10aGlzLmVudHJpZXNDb3VudCxuPXRoaXMuX3NvdXJjZXMubGVuZ3RoO3RoaXMuYWNjdW11bGF0ZT90aGlzLmNvbnRlbnRCdWZmZXIucHVzaChlKToodGhpcy5ieXRlc1dyaXR0ZW4rPWUuZGF0YS5sZW5ndGgsaS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMse2RhdGE6ZS5kYXRhLG1ldGE6e2N1cnJlbnRGaWxlOnRoaXMuY3VycmVudEZpbGUscGVyY2VudDpyPyh0KzEwMCooci1uLTEpKS9yOjEwMH19KSl9LHMucHJvdG90eXBlLm9wZW5lZFNvdXJjZT1mdW5jdGlvbihlKXt0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQ9dGhpcy5ieXRlc1dyaXR0ZW4sdGhpcy5jdXJyZW50RmlsZT1lLmZpbGUubmFtZTt2YXIgdD10aGlzLnN0cmVhbUZpbGVzJiYhZS5maWxlLmRpcjtpZih0KXt2YXIgcj1uKGUsdCwhMSx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQsdGhpcy56aXBQbGF0Zm9ybSx0aGlzLmVuY29kZUZpbGVOYW1lKTt0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KX1lbHNlIHRoaXMuYWNjdW11bGF0ZT0hMH0scy5wcm90b3R5cGUuY2xvc2VkU291cmNlPWZ1bmN0aW9uKGUpe3RoaXMuYWNjdW11bGF0ZT0hMTt2YXIgdD10aGlzLnN0cmVhbUZpbGVzJiYhZS5maWxlLmRpcixyPW4oZSx0LCEwLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO2lmKHRoaXMuZGlyUmVjb3Jkcy5wdXNoKHIuZGlyUmVjb3JkKSx0KXRoaXMucHVzaCh7ZGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUi5EQVRBX0RFU0NSSVBUT1IrQShlLmNyYzMyLDQpK0EoZS5jb21wcmVzc2VkU2l6ZSw0KStBKGUudW5jb21wcmVzc2VkU2l6ZSw0KX0oZSksbWV0YTp7cGVyY2VudDoxMDB9fSk7ZWxzZSBmb3IodGhpcy5wdXNoKHtkYXRhOnIuZmlsZVJlY29yZCxtZXRhOntwZXJjZW50OjB9fSk7dGhpcy5jb250ZW50QnVmZmVyLmxlbmd0aDspdGhpcy5wdXNoKHRoaXMuY29udGVudEJ1ZmZlci5zaGlmdCgpKTt0aGlzLmN1cnJlbnRGaWxlPW51bGx9LHMucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMuYnl0ZXNXcml0dGVuLHQ9MDt0PHRoaXMuZGlyUmVjb3Jkcy5sZW5ndGg7dCsrKXRoaXMucHVzaCh7ZGF0YTp0aGlzLmRpclJlY29yZHNbdF0sbWV0YTp7cGVyY2VudDoxMDB9fSk7dmFyIHI9dGhpcy5ieXRlc1dyaXR0ZW4tZSxuPWZ1bmN0aW9uKGUsdCxyLG4saSl7dmFyIHM9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLGkobikpO3JldHVybiBSLkNFTlRSQUxfRElSRUNUT1JZX0VORCtcIlxcMFxcMFxcMFxcMFwiK0EoZSwyKStBKGUsMikrQSh0LDQpK0Eociw0KStBKHMubGVuZ3RoLDIpK3N9KHRoaXMuZGlyUmVjb3Jkcy5sZW5ndGgscixlLHRoaXMuemlwQ29tbWVudCx0aGlzLmVuY29kZUZpbGVOYW1lKTt0aGlzLnB1c2goe2RhdGE6bixtZXRhOntwZXJjZW50OjEwMH19KX0scy5wcm90b3R5cGUucHJlcGFyZU5leHRTb3VyY2U9ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzPXRoaXMuX3NvdXJjZXMuc2hpZnQoKSx0aGlzLm9wZW5lZFNvdXJjZSh0aGlzLnByZXZpb3VzLnN0cmVhbUluZm8pLHRoaXMuaXNQYXVzZWQ/dGhpcy5wcmV2aW91cy5wYXVzZSgpOnRoaXMucHJldmlvdXMucmVzdW1lKCl9LHMucHJvdG90eXBlLnJlZ2lzdGVyUHJldmlvdXM9ZnVuY3Rpb24oZSl7dGhpcy5fc291cmNlcy5wdXNoKGUpO3ZhciB0PXRoaXM7cmV0dXJuIGUub24oXCJkYXRhXCIsZnVuY3Rpb24oZSl7dC5wcm9jZXNzQ2h1bmsoZSl9KSxlLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmNsb3NlZFNvdXJjZSh0LnByZXZpb3VzLnN0cmVhbUluZm8pLHQuX3NvdXJjZXMubGVuZ3RoP3QucHJlcGFyZU5leHRTb3VyY2UoKTp0LmVuZCgpfSksZS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pLHRoaXN9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJighdGhpcy5wcmV2aW91cyYmdGhpcy5fc291cmNlcy5sZW5ndGg/KHRoaXMucHJlcGFyZU5leHRTb3VyY2UoKSwhMCk6dGhpcy5wcmV2aW91c3x8dGhpcy5fc291cmNlcy5sZW5ndGh8fHRoaXMuZ2VuZXJhdGVkRXJyb3I/dm9pZCAwOih0aGlzLmVuZCgpLCEwKSl9LHMucHJvdG90eXBlLmVycm9yPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuX3NvdXJjZXM7aWYoIWkucHJvdG90eXBlLmVycm9yLmNhbGwodGhpcyxlKSlyZXR1cm4hMTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl0cnl7dFtyXS5lcnJvcihlKX1jYXRjaChlKXt9cmV0dXJuITB9LHMucHJvdG90eXBlLmxvY2s9ZnVuY3Rpb24oKXtpLnByb3RvdHlwZS5sb2NrLmNhbGwodGhpcyk7Zm9yKHZhciBlPXRoaXMuX3NvdXJjZXMsdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0ubG9jaygpfSx0LmV4cG9ydHM9c30se1wiLi4vY3JjMzJcIjo0LFwiLi4vc2lnbmF0dXJlXCI6MjMsXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi4vdXRmOFwiOjMxLFwiLi4vdXRpbHNcIjozMn1dLDk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgdT1lKFwiLi4vY29tcHJlc3Npb25zXCIpLG49ZShcIi4vWmlwRmlsZVdvcmtlclwiKTtyLmdlbmVyYXRlV29ya2VyPWZ1bmN0aW9uKGUsYSx0KXt2YXIgbz1uZXcgbihhLnN0cmVhbUZpbGVzLHQsYS5wbGF0Zm9ybSxhLmVuY29kZUZpbGVOYW1lKSxoPTA7dHJ5e2UuZm9yRWFjaChmdW5jdGlvbihlLHQpe2grKzt2YXIgcj1mdW5jdGlvbihlLHQpe3ZhciByPWV8fHQsbj11W3JdO2lmKCFuKXRocm93IG5ldyBFcnJvcihyK1wiIGlzIG5vdCBhIHZhbGlkIGNvbXByZXNzaW9uIG1ldGhvZCAhXCIpO3JldHVybiBufSh0Lm9wdGlvbnMuY29tcHJlc3Npb24sYS5jb21wcmVzc2lvbiksbj10Lm9wdGlvbnMuY29tcHJlc3Npb25PcHRpb25zfHxhLmNvbXByZXNzaW9uT3B0aW9uc3x8e30saT10LmRpcixzPXQuZGF0ZTt0Ll9jb21wcmVzc1dvcmtlcihyLG4pLndpdGhTdHJlYW1JbmZvKFwiZmlsZVwiLHtuYW1lOmUsZGlyOmksZGF0ZTpzLGNvbW1lbnQ6dC5jb21tZW50fHxcIlwiLHVuaXhQZXJtaXNzaW9uczp0LnVuaXhQZXJtaXNzaW9ucyxkb3NQZXJtaXNzaW9uczp0LmRvc1Blcm1pc3Npb25zfSkucGlwZShvKX0pLG8uZW50cmllc0NvdW50PWh9Y2F0Y2goZSl7by5lcnJvcihlKX1yZXR1cm4gb319LHtcIi4uL2NvbXByZXNzaW9uc1wiOjMsXCIuL1ppcEZpbGVXb3JrZXJcIjo4fV0sMTA6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpcmV0dXJuIG5ldyBuO2lmKGFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGNvbnN0cnVjdG9yIHdpdGggcGFyYW1ldGVycyBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKTt0aGlzLmZpbGVzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5jb21tZW50PW51bGwsdGhpcy5yb290PVwiXCIsdGhpcy5jbG9uZT1mdW5jdGlvbigpe3ZhciBlPW5ldyBuO2Zvcih2YXIgdCBpbiB0aGlzKVwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXNbdF0mJihlW3RdPXRoaXNbdF0pO3JldHVybiBlfX0obi5wcm90b3R5cGU9ZShcIi4vb2JqZWN0XCIpKS5sb2FkQXN5bmM9ZShcIi4vbG9hZFwiKSxuLnN1cHBvcnQ9ZShcIi4vc3VwcG9ydFwiKSxuLmRlZmF1bHRzPWUoXCIuL2RlZmF1bHRzXCIpLG4udmVyc2lvbj1cIjMuMTAuMVwiLG4ubG9hZEFzeW5jPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKG5ldyBuKS5sb2FkQXN5bmMoZSx0KX0sbi5leHRlcm5hbD1lKFwiLi9leHRlcm5hbFwiKSx0LmV4cG9ydHM9bn0se1wiLi9kZWZhdWx0c1wiOjUsXCIuL2V4dGVybmFsXCI6NixcIi4vbG9hZFwiOjExLFwiLi9vYmplY3RcIjoxNSxcIi4vc3VwcG9ydFwiOjMwfV0sMTE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgdT1lKFwiLi91dGlsc1wiKSxpPWUoXCIuL2V4dGVybmFsXCIpLG49ZShcIi4vdXRmOFwiKSxzPWUoXCIuL3ppcEVudHJpZXNcIiksYT1lKFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxsPWUoXCIuL25vZGVqc1V0aWxzXCIpO2Z1bmN0aW9uIGYobil7cmV0dXJuIG5ldyBpLlByb21pc2UoZnVuY3Rpb24oZSx0KXt2YXIgcj1uLmRlY29tcHJlc3NlZC5nZXRDb250ZW50V29ya2VyKCkucGlwZShuZXcgYSk7ci5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dChlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtyLnN0cmVhbUluZm8uY3JjMzIhPT1uLmRlY29tcHJlc3NlZC5jcmMzMj90KG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBDUkMzMiBtaXNtYXRjaFwiKSk6ZSgpfSkucmVzdW1lKCl9KX10LmV4cG9ydHM9ZnVuY3Rpb24oZSxvKXt2YXIgaD10aGlzO3JldHVybiBvPXUuZXh0ZW5kKG98fHt9LHtiYXNlNjQ6ITEsY2hlY2tDUkMzMjohMSxvcHRpbWl6ZWRCaW5hcnlTdHJpbmc6ITEsY3JlYXRlRm9sZGVyczohMSxkZWNvZGVGaWxlTmFtZTpuLnV0ZjhkZWNvZGV9KSxsLmlzTm9kZSYmbC5pc1N0cmVhbShlKT9pLlByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkpTWmlwIGNhbid0IGFjY2VwdCBhIHN0cmVhbSB3aGVuIGxvYWRpbmcgYSB6aXAgZmlsZS5cIikpOnUucHJlcGFyZUNvbnRlbnQoXCJ0aGUgbG9hZGVkIHppcCBmaWxlXCIsZSwhMCxvLm9wdGltaXplZEJpbmFyeVN0cmluZyxvLmJhc2U2NCkudGhlbihmdW5jdGlvbihlKXt2YXIgdD1uZXcgcyhvKTtyZXR1cm4gdC5sb2FkKGUpLHR9KS50aGVuKGZ1bmN0aW9uKGUpe3ZhciB0PVtpLlByb21pc2UucmVzb2x2ZShlKV0scj1lLmZpbGVzO2lmKG8uY2hlY2tDUkMzMilmb3IodmFyIG49MDtuPHIubGVuZ3RoO24rKyl0LnB1c2goZihyW25dKSk7cmV0dXJuIGkuUHJvbWlzZS5hbGwodCl9KS50aGVuKGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnNoaWZ0KCkscj10LmZpbGVzLG49MDtuPHIubGVuZ3RoO24rKyl7dmFyIGk9cltuXSxzPWkuZmlsZU5hbWVTdHIsYT11LnJlc29sdmUoaS5maWxlTmFtZVN0cik7aC5maWxlKGEsaS5kZWNvbXByZXNzZWQse2JpbmFyeTohMCxvcHRpbWl6ZWRCaW5hcnlTdHJpbmc6ITAsZGF0ZTppLmRhdGUsZGlyOmkuZGlyLGNvbW1lbnQ6aS5maWxlQ29tbWVudFN0ci5sZW5ndGg/aS5maWxlQ29tbWVudFN0cjpudWxsLHVuaXhQZXJtaXNzaW9uczppLnVuaXhQZXJtaXNzaW9ucyxkb3NQZXJtaXNzaW9uczppLmRvc1Blcm1pc3Npb25zLGNyZWF0ZUZvbGRlcnM6by5jcmVhdGVGb2xkZXJzfSksaS5kaXJ8fChoLmZpbGUoYSkudW5zYWZlT3JpZ2luYWxOYW1lPXMpfXJldHVybiB0LnppcENvbW1lbnQubGVuZ3RoJiYoaC5jb21tZW50PXQuemlwQ29tbWVudCksaH0pfX0se1wiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9DcmMzMlByb2JlXCI6MjUsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cmllc1wiOjMzfV0sMTI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlLHQpe2kuY2FsbCh0aGlzLFwiTm9kZWpzIHN0cmVhbSBpbnB1dCBhZGFwdGVyIGZvciBcIitlKSx0aGlzLl91cHN0cmVhbUVuZGVkPSExLHRoaXMuX2JpbmRTdHJlYW0odCl9bi5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLl9iaW5kU3RyZWFtPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7KHRoaXMuX3N0cmVhbT1lKS5wYXVzZSgpLGUub24oXCJkYXRhXCIsZnVuY3Rpb24oZSl7dC5wdXNoKHtkYXRhOmUsbWV0YTp7cGVyY2VudDowfX0pfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe3QuaXNQYXVzZWQ/dGhpcy5nZW5lcmF0ZWRFcnJvcj1lOnQuZXJyb3IoZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dC5pc1BhdXNlZD90Ll91cHN0cmVhbUVuZGVkPSEwOnQuZW5kKCl9KX0scy5wcm90b3R5cGUucGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnBhdXNlLmNhbGwodGhpcykmJih0aGlzLl9zdHJlYW0ucGF1c2UoKSwhMCl9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJih0aGlzLl91cHN0cmVhbUVuZGVkP3RoaXMuZW5kKCk6dGhpcy5fc3RyZWFtLnJlc3VtZSgpLCEwKX0sdC5leHBvcnRzPXN9LHtcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGlsc1wiOjMyfV0sMTM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlO2Z1bmN0aW9uIG4oZSx0LHIpe2kuY2FsbCh0aGlzLHQpLHRoaXMuX2hlbHBlcj1lO3ZhciBuPXRoaXM7ZS5vbihcImRhdGFcIixmdW5jdGlvbihlLHQpe24ucHVzaChlKXx8bi5faGVscGVyLnBhdXNlKCksciYmcih0KX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXtuLmVtaXQoXCJlcnJvclwiLGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe24ucHVzaChudWxsKX0pfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhuLGkpLG4ucHJvdG90eXBlLl9yZWFkPWZ1bmN0aW9uKCl7dGhpcy5faGVscGVyLnJlc3VtZSgpfSx0LmV4cG9ydHM9bn0se1wiLi4vdXRpbHNcIjozMixcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMTQ6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9e2lzTm9kZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLG5ld0J1ZmZlckZyb206ZnVuY3Rpb24oZSx0KXtpZihCdWZmZXIuZnJvbSYmQnVmZmVyLmZyb20hPT1VaW50OEFycmF5LmZyb20pcmV0dXJuIEJ1ZmZlci5mcm9tKGUsdCk7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJkYXRhXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKTtyZXR1cm4gbmV3IEJ1ZmZlcihlLHQpfSxhbGxvY0J1ZmZlcjpmdW5jdGlvbihlKXtpZihCdWZmZXIuYWxsb2MpcmV0dXJuIEJ1ZmZlci5hbGxvYyhlKTt2YXIgdD1uZXcgQnVmZmVyKGUpO3JldHVybiB0LmZpbGwoMCksdH0saXNCdWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcihlKX0saXNTdHJlYW06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucGF1c2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucmVzdW1lfX19LHt9XSwxNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHMoZSx0LHIpe3ZhciBuLGk9dS5nZXRUeXBlT2YodCkscz11LmV4dGVuZChyfHx7fSxmKTtzLmRhdGU9cy5kYXRlfHxuZXcgRGF0ZSxudWxsIT09cy5jb21wcmVzc2lvbiYmKHMuY29tcHJlc3Npb249cy5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpKSxcInN0cmluZ1wiPT10eXBlb2Ygcy51bml4UGVybWlzc2lvbnMmJihzLnVuaXhQZXJtaXNzaW9ucz1wYXJzZUludChzLnVuaXhQZXJtaXNzaW9ucyw4KSkscy51bml4UGVybWlzc2lvbnMmJjE2Mzg0JnMudW5peFBlcm1pc3Npb25zJiYocy5kaXI9ITApLHMuZG9zUGVybWlzc2lvbnMmJjE2JnMuZG9zUGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kaXImJihlPWcoZSkpLHMuY3JlYXRlRm9sZGVycyYmKG49XyhlKSkmJmIuY2FsbCh0aGlzLG4sITApO3ZhciBhPVwic3RyaW5nXCI9PT1pJiYhMT09PXMuYmluYXJ5JiYhMT09PXMuYmFzZTY0O3ImJnZvaWQgMCE9PXIuYmluYXJ5fHwocy5iaW5hcnk9IWEpLCh0IGluc3RhbmNlb2YgYyYmMD09PXQudW5jb21wcmVzc2VkU2l6ZXx8cy5kaXJ8fCF0fHwwPT09dC5sZW5ndGgpJiYocy5iYXNlNjQ9ITEscy5iaW5hcnk9ITAsdD1cIlwiLHMuY29tcHJlc3Npb249XCJTVE9SRVwiLGk9XCJzdHJpbmdcIik7dmFyIG89bnVsbDtvPXQgaW5zdGFuY2VvZiBjfHx0IGluc3RhbmNlb2YgbD90OnAuaXNOb2RlJiZwLmlzU3RyZWFtKHQpP25ldyBtKGUsdCk6dS5wcmVwYXJlQ29udGVudChlLHQscy5iaW5hcnkscy5vcHRpbWl6ZWRCaW5hcnlTdHJpbmcscy5iYXNlNjQpO3ZhciBoPW5ldyBkKGUsbyxzKTt0aGlzLmZpbGVzW2VdPWh9dmFyIGk9ZShcIi4vdXRmOFwiKSx1PWUoXCIuL3V0aWxzXCIpLGw9ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksYT1lKFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLGY9ZShcIi4vZGVmYXVsdHNcIiksYz1lKFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGQ9ZShcIi4vemlwT2JqZWN0XCIpLG89ZShcIi4vZ2VuZXJhdGVcIikscD1lKFwiLi9ub2RlanNVdGlsc1wiKSxtPWUoXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIiksXz1mdW5jdGlvbihlKXtcIi9cIj09PWUuc2xpY2UoLTEpJiYoZT1lLnN1YnN0cmluZygwLGUubGVuZ3RoLTEpKTt2YXIgdD1lLmxhc3RJbmRleE9mKFwiL1wiKTtyZXR1cm4gMDx0P2Uuc3Vic3RyaW5nKDAsdCk6XCJcIn0sZz1mdW5jdGlvbihlKXtyZXR1cm5cIi9cIiE9PWUuc2xpY2UoLTEpJiYoZSs9XCIvXCIpLGV9LGI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD12b2lkIDAhPT10P3Q6Zi5jcmVhdGVGb2xkZXJzLGU9ZyhlKSx0aGlzLmZpbGVzW2VdfHxzLmNhbGwodGhpcyxlLG51bGwse2RpcjohMCxjcmVhdGVGb2xkZXJzOnR9KSx0aGlzLmZpbGVzW2VdfTtmdW5jdGlvbiBoKGUpe3JldHVyblwiW29iamVjdCBSZWdFeHBdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9dmFyIG49e2xvYWQ6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZm9yRWFjaDpmdW5jdGlvbihlKXt2YXIgdCxyLG47Zm9yKHQgaW4gdGhpcy5maWxlcyluPXRoaXMuZmlsZXNbdF0sKHI9dC5zbGljZSh0aGlzLnJvb3QubGVuZ3RoLHQubGVuZ3RoKSkmJnQuc2xpY2UoMCx0aGlzLnJvb3QubGVuZ3RoKT09PXRoaXMucm9vdCYmZShyLG4pfSxmaWx0ZXI6ZnVuY3Rpb24ocil7dmFyIG49W107cmV0dXJuIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlLHQpe3IoZSx0KSYmbi5wdXNoKHQpfSksbn0sZmlsZTpmdW5jdGlvbihlLHQscil7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGU9dGhpcy5yb290K2Uscy5jYWxsKHRoaXMsZSx0LHIpLHRoaXM7aWYoaChlKSl7dmFyIG49ZTtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oZSx0KXtyZXR1cm4hdC5kaXImJm4udGVzdChlKX0pfXZhciBpPXRoaXMuZmlsZXNbdGhpcy5yb290K2VdO3JldHVybiBpJiYhaS5kaXI/aTpudWxsfSxmb2xkZXI6ZnVuY3Rpb24ocil7aWYoIXIpcmV0dXJuIHRoaXM7aWYoaChyKSlyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5kaXImJnIudGVzdChlKX0pO3ZhciBlPXRoaXMucm9vdCtyLHQ9Yi5jYWxsKHRoaXMsZSksbj10aGlzLmNsb25lKCk7cmV0dXJuIG4ucm9vdD10Lm5hbWUsbn0scmVtb3ZlOmZ1bmN0aW9uKHIpe3I9dGhpcy5yb290K3I7dmFyIGU9dGhpcy5maWxlc1tyXTtpZihlfHwoXCIvXCIhPT1yLnNsaWNlKC0xKSYmKHIrPVwiL1wiKSxlPXRoaXMuZmlsZXNbcl0pLGUmJiFlLmRpcilkZWxldGUgdGhpcy5maWxlc1tyXTtlbHNlIGZvcih2YXIgdD10aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiB0Lm5hbWUuc2xpY2UoMCxyLmxlbmd0aCk9PT1yfSksbj0wO248dC5sZW5ndGg7bisrKWRlbGV0ZSB0aGlzLmZpbGVzW3Rbbl0ubmFtZV07cmV0dXJuIHRoaXN9LGdlbmVyYXRlOmZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGdlbmVyYXRlSW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24oZSl7dmFyIHQscj17fTt0cnl7aWYoKHI9dS5leHRlbmQoZXx8e30se3N0cmVhbUZpbGVzOiExLGNvbXByZXNzaW9uOlwiU1RPUkVcIixjb21wcmVzc2lvbk9wdGlvbnM6bnVsbCx0eXBlOlwiXCIscGxhdGZvcm06XCJET1NcIixjb21tZW50Om51bGwsbWltZVR5cGU6XCJhcHBsaWNhdGlvbi96aXBcIixlbmNvZGVGaWxlTmFtZTppLnV0ZjhlbmNvZGV9KSkudHlwZT1yLnR5cGUudG9Mb3dlckNhc2UoKSxyLmNvbXByZXNzaW9uPXIuY29tcHJlc3Npb24udG9VcHBlckNhc2UoKSxcImJpbmFyeXN0cmluZ1wiPT09ci50eXBlJiYoci50eXBlPVwic3RyaW5nXCIpLCFyLnR5cGUpdGhyb3cgbmV3IEVycm9yKFwiTm8gb3V0cHV0IHR5cGUgc3BlY2lmaWVkLlwiKTt1LmNoZWNrU3VwcG9ydChyLnR5cGUpLFwiZGFyd2luXCIhPT1yLnBsYXRmb3JtJiZcImZyZWVic2RcIiE9PXIucGxhdGZvcm0mJlwibGludXhcIiE9PXIucGxhdGZvcm0mJlwic3Vub3NcIiE9PXIucGxhdGZvcm18fChyLnBsYXRmb3JtPVwiVU5JWFwiKSxcIndpbjMyXCI9PT1yLnBsYXRmb3JtJiYoci5wbGF0Zm9ybT1cIkRPU1wiKTt2YXIgbj1yLmNvbW1lbnR8fHRoaXMuY29tbWVudHx8XCJcIjt0PW8uZ2VuZXJhdGVXb3JrZXIodGhpcyxyLG4pfWNhdGNoKGUpeyh0PW5ldyBsKFwiZXJyb3JcIikpLmVycm9yKGUpfXJldHVybiBuZXcgYSh0LHIudHlwZXx8XCJzdHJpbmdcIixyLm1pbWVUeXBlKX0sZ2VuZXJhdGVBc3luYzpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmdlbmVyYXRlSW50ZXJuYWxTdHJlYW0oZSkuYWNjdW11bGF0ZSh0KX0sZ2VuZXJhdGVOb2RlU3RyZWFtOmZ1bmN0aW9uKGUsdCl7cmV0dXJuKGU9ZXx8e30pLnR5cGV8fChlLnR5cGU9XCJub2RlYnVmZmVyXCIpLHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbShlKS50b05vZGVqc1N0cmVhbSh0KX19O3QuZXhwb3J0cz1ufSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9kZWZhdWx0c1wiOjUsXCIuL2dlbmVyYXRlXCI6OSxcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiOjEyLFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCI6MjksXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMixcIi4vemlwT2JqZWN0XCI6MzV9XSwxNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1lKFwic3RyZWFtXCIpfSx7c3RyZWFtOnZvaWQgMH1dLDE3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpO2Zvcih2YXIgdD0wO3Q8dGhpcy5kYXRhLmxlbmd0aDt0KyspZVt0XT0yNTUmZVt0XX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5ieXRlQXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZGF0YVt0aGlzLnplcm8rZV19LGkucHJvdG90eXBlLmxhc3RJbmRleE9mU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoYXJDb2RlQXQoMCkscj1lLmNoYXJDb2RlQXQoMSksbj1lLmNoYXJDb2RlQXQoMiksaT1lLmNoYXJDb2RlQXQoMykscz10aGlzLmxlbmd0aC00OzA8PXM7LS1zKWlmKHRoaXMuZGF0YVtzXT09PXQmJnRoaXMuZGF0YVtzKzFdPT09ciYmdGhpcy5kYXRhW3MrMl09PT1uJiZ0aGlzLmRhdGFbcyszXT09PWkpcmV0dXJuIHMtdGhpcy56ZXJvO3JldHVybi0xfSxpLnByb3RvdHlwZS5yZWFkQW5kQ2hlY2tTaWduYXR1cmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jaGFyQ29kZUF0KDApLHI9ZS5jaGFyQ29kZUF0KDEpLG49ZS5jaGFyQ29kZUF0KDIpLGk9ZS5jaGFyQ29kZUF0KDMpLHM9dGhpcy5yZWFkRGF0YSg0KTtyZXR1cm4gdD09PXNbMF0mJnI9PT1zWzFdJiZuPT09c1syXSYmaT09PXNbM119LGkucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKGUpe2lmKHRoaXMuY2hlY2tPZmZzZXQoZSksMD09PWUpcmV0dXJuW107dmFyIHQ9dGhpcy5kYXRhLnNsaWNlKHRoaXMuemVybyt0aGlzLmluZGV4LHRoaXMuemVybyt0aGlzLmluZGV4K2UpO3JldHVybiB0aGlzLmluZGV4Kz1lLHR9LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9EYXRhUmVhZGVyXCI6MTh9XSwxODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBpKGUpe3RoaXMuZGF0YT1lLHRoaXMubGVuZ3RoPWUubGVuZ3RoLHRoaXMuaW5kZXg9MCx0aGlzLnplcm89MH1pLnByb3RvdHlwZT17Y2hlY2tPZmZzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0luZGV4KHRoaXMuaW5kZXgrZSl9LGNoZWNrSW5kZXg6ZnVuY3Rpb24oZSl7aWYodGhpcy5sZW5ndGg8dGhpcy56ZXJvK2V8fGU8MCl0aHJvdyBuZXcgRXJyb3IoXCJFbmQgb2YgZGF0YSByZWFjaGVkIChkYXRhIGxlbmd0aCA9IFwiK3RoaXMubGVuZ3RoK1wiLCBhc2tlZCBpbmRleCA9IFwiK2UrXCIpLiBDb3JydXB0ZWQgemlwID9cIil9LHNldEluZGV4OmZ1bmN0aW9uKGUpe3RoaXMuY2hlY2tJbmRleChlKSx0aGlzLmluZGV4PWV9LHNraXA6ZnVuY3Rpb24oZSl7dGhpcy5zZXRJbmRleCh0aGlzLmluZGV4K2UpfSxieXRlQXQ6ZnVuY3Rpb24oKXt9LHJlYWRJbnQ6ZnVuY3Rpb24oZSl7dmFyIHQscj0wO2Zvcih0aGlzLmNoZWNrT2Zmc2V0KGUpLHQ9dGhpcy5pbmRleCtlLTE7dD49dGhpcy5pbmRleDt0LS0pcj0ocjw8OCkrdGhpcy5ieXRlQXQodCk7cmV0dXJuIHRoaXMuaW5kZXgrPWUscn0scmVhZFN0cmluZzpmdW5jdGlvbihlKXtyZXR1cm4gbi50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMucmVhZERhdGEoZSkpfSxyZWFkRGF0YTpmdW5jdGlvbigpe30sbGFzdEluZGV4T2ZTaWduYXR1cmU6ZnVuY3Rpb24oKXt9LHJlYWRBbmRDaGVja1NpZ25hdHVyZTpmdW5jdGlvbigpe30scmVhZERhdGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnJlYWRJbnQoNCk7cmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDE5ODArKGU+PjI1JjEyNyksKGU+PjIxJjE1KS0xLGU+PjE2JjMxLGU+PjExJjMxLGU+PjUmNjMsKDMxJmUpPDwxKSl9fSx0LmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMn1dLDE5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vVWludDhBcnJheVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2hlY2tPZmZzZXQoZSk7dmFyIHQ9dGhpcy5kYXRhLnNsaWNlKHRoaXMuemVybyt0aGlzLmluZGV4LHRoaXMuemVybyt0aGlzLmluZGV4K2UpO3JldHVybiB0aGlzLmluZGV4Kz1lLHR9LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL0RhdGFSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5ieXRlQXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZGF0YS5jaGFyQ29kZUF0KHRoaXMuemVybytlKX0saS5wcm90b3R5cGUubGFzdEluZGV4T2ZTaWduYXR1cmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZGF0YS5sYXN0SW5kZXhPZihlKS10aGlzLnplcm99LGkucHJvdG90eXBlLnJlYWRBbmRDaGVja1NpZ25hdHVyZT1mdW5jdGlvbihlKXtyZXR1cm4gZT09PXRoaXMucmVhZERhdGEoNCl9LGkucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2hlY2tPZmZzZXQoZSk7dmFyIHQ9dGhpcy5kYXRhLnNsaWNlKHRoaXMuemVybyt0aGlzLmluZGV4LHRoaXMuemVybyt0aGlzLmluZGV4K2UpO3JldHVybiB0aGlzLmluZGV4Kz1lLHR9LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9EYXRhUmVhZGVyXCI6MTh9XSwyMTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL0FycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7aWYodGhpcy5jaGVja09mZnNldChlKSwwPT09ZSlyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7dmFyIHQ9dGhpcy5kYXRhLnN1YmFycmF5KHRoaXMuemVybyt0aGlzLmluZGV4LHRoaXMuemVybyt0aGlzLmluZGV4K2UpO3JldHVybiB0aGlzLmluZGV4Kz1lLHR9LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3fV0sMjI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi4vc3VwcG9ydFwiKSxzPWUoXCIuL0FycmF5UmVhZGVyXCIpLGE9ZShcIi4vU3RyaW5nUmVhZGVyXCIpLG89ZShcIi4vTm9kZUJ1ZmZlclJlYWRlclwiKSxoPWUoXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PW4uZ2V0VHlwZU9mKGUpO3JldHVybiBuLmNoZWNrU3VwcG9ydCh0KSxcInN0cmluZ1wiIT09dHx8aS51aW50OGFycmF5P1wibm9kZWJ1ZmZlclwiPT09dD9uZXcgbyhlKTppLnVpbnQ4YXJyYXk/bmV3IGgobi50cmFuc2Zvcm1UbyhcInVpbnQ4YXJyYXlcIixlKSk6bmV3IHMobi50cmFuc2Zvcm1UbyhcImFycmF5XCIsZSkpOm5ldyBhKGUpfX0se1wiLi4vc3VwcG9ydFwiOjMwLFwiLi4vdXRpbHNcIjozMixcIi4vQXJyYXlSZWFkZXJcIjoxNyxcIi4vTm9kZUJ1ZmZlclJlYWRlclwiOjE5LFwiLi9TdHJpbmdSZWFkZXJcIjoyMCxcIi4vVWludDhBcnJheVJlYWRlclwiOjIxfV0sMjM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyLkxPQ0FMX0ZJTEVfSEVBREVSPVwiUEtcdTAwMDNcdTAwMDRcIixyLkNFTlRSQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwMVx1MDAwMlwiLHIuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EPVwiUEtcdTAwMDVcdTAwMDZcIixyLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1I9XCJQS1x1MDAwNlx1MDAwN1wiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EPVwiUEtcdTAwMDZcdTAwMDZcIixyLkRBVEFfREVTQ1JJUFRPUj1cIlBLXHUwMDA3XFxiXCJ9LHt9XSwyNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL0dlbmVyaWNXb3JrZXJcIiksaT1lKFwiLi4vdXRpbHNcIik7ZnVuY3Rpb24gcyhlKXtuLmNhbGwodGhpcyxcIkNvbnZlcnRXb3JrZXIgdG8gXCIrZSksdGhpcy5kZXN0VHlwZT1lfWkuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dGhpcy5wdXNoKHtkYXRhOmkudHJhbnNmb3JtVG8odGhpcy5kZXN0VHlwZSxlLmRhdGEpLG1ldGE6ZS5tZXRhfSl9LHQuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL0dlbmVyaWNXb3JrZXJcIiksaT1lKFwiLi4vY3JjMzJcIik7ZnVuY3Rpb24gcygpe24uY2FsbCh0aGlzLFwiQ3JjMzJQcm9iZVwiKSx0aGlzLndpdGhTdHJlYW1JbmZvKFwiY3JjMzJcIiwwKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMocyxuKSxzLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dGhpcy5zdHJlYW1JbmZvLmNyYzMyPWkoZS5kYXRhLHRoaXMuc3RyZWFtSW5mby5jcmMzMnx8MCksdGhpcy5wdXNoKGUpfSx0LmV4cG9ydHM9c30se1wiLi4vY3JjMzJcIjo0LFwiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi9HZW5lcmljV29ya2VyXCIpO2Z1bmN0aW9uIHMoZSl7aS5jYWxsKHRoaXMsXCJEYXRhTGVuZ3RoUHJvYmUgZm9yIFwiK2UpLHRoaXMucHJvcE5hbWU9ZSx0aGlzLndpdGhTdHJlYW1JbmZvKGUsMCl9bi5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXtpZihlKXt2YXIgdD10aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV18fDA7dGhpcy5zdHJlYW1JbmZvW3RoaXMucHJvcE5hbWVdPXQrZS5kYXRhLmxlbmd0aH1pLnByb3RvdHlwZS5wcm9jZXNzQ2h1bmsuY2FsbCh0aGlzLGUpfSx0LmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi9HZW5lcmljV29ya2VyXCIpO2Z1bmN0aW9uIHMoZSl7aS5jYWxsKHRoaXMsXCJEYXRhV29ya2VyXCIpO3ZhciB0PXRoaXM7dGhpcy5kYXRhSXNSZWFkeT0hMSx0aGlzLmluZGV4PTAsdGhpcy5tYXg9MCx0aGlzLmRhdGE9bnVsbCx0aGlzLnR5cGU9XCJcIix0aGlzLl90aWNrU2NoZWR1bGVkPSExLGUudGhlbihmdW5jdGlvbihlKXt0LmRhdGFJc1JlYWR5PSEwLHQuZGF0YT1lLHQubWF4PWUmJmUubGVuZ3RofHwwLHQudHlwZT1uLmdldFR5cGVPZihlKSx0LmlzUGF1c2VkfHx0Ll90aWNrQW5kUmVwZWF0KCl9LGZ1bmN0aW9uKGUpe3QuZXJyb3IoZSl9KX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUuY2xlYW5VcD1mdW5jdGlvbigpe2kucHJvdG90eXBlLmNsZWFuVXAuY2FsbCh0aGlzKSx0aGlzLmRhdGE9bnVsbH0scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKCF0aGlzLl90aWNrU2NoZWR1bGVkJiZ0aGlzLmRhdGFJc1JlYWR5JiYodGhpcy5fdGlja1NjaGVkdWxlZD0hMCxuLmRlbGF5KHRoaXMuX3RpY2tBbmRSZXBlYXQsW10sdGhpcykpLCEwKX0scy5wcm90b3R5cGUuX3RpY2tBbmRSZXBlYXQ9ZnVuY3Rpb24oKXt0aGlzLl90aWNrU2NoZWR1bGVkPSExLHRoaXMuaXNQYXVzZWR8fHRoaXMuaXNGaW5pc2hlZHx8KHRoaXMuX3RpY2soKSx0aGlzLmlzRmluaXNoZWR8fChuLmRlbGF5KHRoaXMuX3RpY2tBbmRSZXBlYXQsW10sdGhpcyksdGhpcy5fdGlja1NjaGVkdWxlZD0hMCkpfSxzLnByb3RvdHlwZS5fdGljaz1mdW5jdGlvbigpe2lmKHRoaXMuaXNQYXVzZWR8fHRoaXMuaXNGaW5pc2hlZClyZXR1cm4hMTt2YXIgZT1udWxsLHQ9TWF0aC5taW4odGhpcy5tYXgsdGhpcy5pbmRleCsxNjM4NCk7aWYodGhpcy5pbmRleD49dGhpcy5tYXgpcmV0dXJuIHRoaXMuZW5kKCk7c3dpdGNoKHRoaXMudHlwZSl7Y2FzZVwic3RyaW5nXCI6ZT10aGlzLmRhdGEuc3Vic3RyaW5nKHRoaXMuaW5kZXgsdCk7YnJlYWs7Y2FzZVwidWludDhhcnJheVwiOmU9dGhpcy5kYXRhLnN1YmFycmF5KHRoaXMuaW5kZXgsdCk7YnJlYWs7Y2FzZVwiYXJyYXlcIjpjYXNlXCJub2RlYnVmZmVyXCI6ZT10aGlzLmRhdGEuc2xpY2UodGhpcy5pbmRleCx0KX1yZXR1cm4gdGhpcy5pbmRleD10LHRoaXMucHVzaCh7ZGF0YTplLG1ldGE6e3BlcmNlbnQ6dGhpcy5tYXg/dGhpcy5pbmRleC90aGlzLm1heCoxMDA6MH19KX0sdC5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt0aGlzLm5hbWU9ZXx8XCJkZWZhdWx0XCIsdGhpcy5zdHJlYW1JbmZvPXt9LHRoaXMuZ2VuZXJhdGVkRXJyb3I9bnVsbCx0aGlzLmV4dHJhU3RyZWFtSW5mbz17fSx0aGlzLmlzUGF1c2VkPSEwLHRoaXMuaXNGaW5pc2hlZD0hMSx0aGlzLmlzTG9ja2VkPSExLHRoaXMuX2xpc3RlbmVycz17ZGF0YTpbXSxlbmQ6W10sZXJyb3I6W119LHRoaXMucHJldmlvdXM9bnVsbH1uLnByb3RvdHlwZT17cHVzaDpmdW5jdGlvbihlKXt0aGlzLmVtaXQoXCJkYXRhXCIsZSl9LGVuZDpmdW5jdGlvbigpe2lmKHRoaXMuaXNGaW5pc2hlZClyZXR1cm4hMTt0aGlzLmZsdXNoKCk7dHJ5e3RoaXMuZW1pdChcImVuZFwiKSx0aGlzLmNsZWFuVXAoKSx0aGlzLmlzRmluaXNoZWQ9ITB9Y2F0Y2goZSl7dGhpcy5lbWl0KFwiZXJyb3JcIixlKX1yZXR1cm4hMH0sZXJyb3I6ZnVuY3Rpb24oZSl7cmV0dXJuIXRoaXMuaXNGaW5pc2hlZCYmKHRoaXMuaXNQYXVzZWQ/dGhpcy5nZW5lcmF0ZWRFcnJvcj1lOih0aGlzLmlzRmluaXNoZWQ9ITAsdGhpcy5lbWl0KFwiZXJyb3JcIixlKSx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLmVycm9yKGUpLHRoaXMuY2xlYW5VcCgpKSwhMCl9LG9uOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlXS5wdXNoKHQpLHRoaXN9LGNsZWFuVXA6ZnVuY3Rpb24oKXt0aGlzLnN0cmVhbUluZm89dGhpcy5nZW5lcmF0ZWRFcnJvcj10aGlzLmV4dHJhU3RyZWFtSW5mbz1udWxsLHRoaXMuX2xpc3RlbmVycz1bXX0sZW1pdDpmdW5jdGlvbihlLHQpe2lmKHRoaXMuX2xpc3RlbmVyc1tlXSlmb3IodmFyIHI9MDtyPHRoaXMuX2xpc3RlbmVyc1tlXS5sZW5ndGg7cisrKXRoaXMuX2xpc3RlbmVyc1tlXVtyXS5jYWxsKHRoaXMsdCl9LHBpcGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVnaXN0ZXJQcmV2aW91cyh0aGlzKX0scmVnaXN0ZXJQcmV2aW91czpmdW5jdGlvbihlKXtpZih0aGlzLmlzTG9ja2VkKXRocm93IG5ldyBFcnJvcihcIlRoZSBzdHJlYW0gJ1wiK3RoaXMrXCInIGhhcyBhbHJlYWR5IGJlZW4gdXNlZC5cIik7dGhpcy5zdHJlYW1JbmZvPWUuc3RyZWFtSW5mbyx0aGlzLm1lcmdlU3RyZWFtSW5mbygpLHRoaXMucHJldmlvdXM9ZTt2YXIgdD10aGlzO3JldHVybiBlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUpe3QucHJvY2Vzc0NodW5rKGUpfSksZS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dC5lbmQoKX0pLGUub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe3QuZXJyb3IoZSl9KSx0aGlzfSxwYXVzZTpmdW5jdGlvbigpe3JldHVybiF0aGlzLmlzUGF1c2VkJiYhdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD0hMCx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLnBhdXNlKCksITApfSxyZXN1bWU6ZnVuY3Rpb24oKXtpZighdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciBlPXRoaXMuaXNQYXVzZWQ9ITE7cmV0dXJuIHRoaXMuZ2VuZXJhdGVkRXJyb3ImJih0aGlzLmVycm9yKHRoaXMuZ2VuZXJhdGVkRXJyb3IpLGU9ITApLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucmVzdW1lKCksIWV9LGZsdXNoOmZ1bmN0aW9uKCl7fSxwcm9jZXNzQ2h1bms6ZnVuY3Rpb24oZSl7dGhpcy5wdXNoKGUpfSx3aXRoU3RyZWFtSW5mbzpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmV4dHJhU3RyZWFtSW5mb1tlXT10LHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpc30sbWVyZ2VTdHJlYW1JbmZvOmZ1bmN0aW9uKCl7Zm9yKHZhciBlIGluIHRoaXMuZXh0cmFTdHJlYW1JbmZvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGlzLmV4dHJhU3RyZWFtSW5mbyxlKSYmKHRoaXMuc3RyZWFtSW5mb1tlXT10aGlzLmV4dHJhU3RyZWFtSW5mb1tlXSl9LGxvY2s6ZnVuY3Rpb24oKXtpZih0aGlzLmlzTG9ja2VkKXRocm93IG5ldyBFcnJvcihcIlRoZSBzdHJlYW0gJ1wiK3RoaXMrXCInIGhhcyBhbHJlYWR5IGJlZW4gdXNlZC5cIik7dGhpcy5pc0xvY2tlZD0hMCx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLmxvY2soKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXt2YXIgZT1cIldvcmtlciBcIit0aGlzLm5hbWU7cmV0dXJuIHRoaXMucHJldmlvdXM/dGhpcy5wcmV2aW91cytcIiAtPiBcIitlOmV9fSx0LmV4cG9ydHM9bn0se31dLDI5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGg9ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4vQ29udmVydFdvcmtlclwiKSxzPWUoXCIuL0dlbmVyaWNXb3JrZXJcIiksdT1lKFwiLi4vYmFzZTY0XCIpLG49ZShcIi4uL3N1cHBvcnRcIiksYT1lKFwiLi4vZXh0ZXJuYWxcIiksbz1udWxsO2lmKG4ubm9kZXN0cmVhbSl0cnl7bz1lKFwiLi4vbm9kZWpzL05vZGVqc1N0cmVhbU91dHB1dEFkYXB0ZXJcIil9Y2F0Y2goZSl7fWZ1bmN0aW9uIGwoZSxvKXtyZXR1cm4gbmV3IGEuUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBuPVtdLGk9ZS5faW50ZXJuYWxUeXBlLHM9ZS5fb3V0cHV0VHlwZSxhPWUuX21pbWVUeXBlO2Uub24oXCJkYXRhXCIsZnVuY3Rpb24oZSx0KXtuLnB1c2goZSksbyYmbyh0KX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXtuPVtdLHIoZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dHJ5e3ZhciBlPWZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2goZSl7Y2FzZVwiYmxvYlwiOnJldHVybiBoLm5ld0Jsb2IoaC50cmFuc2Zvcm1UbyhcImFycmF5YnVmZmVyXCIsdCkscik7Y2FzZVwiYmFzZTY0XCI6cmV0dXJuIHUuZW5jb2RlKHQpO2RlZmF1bHQ6cmV0dXJuIGgudHJhbnNmb3JtVG8oZSx0KX19KHMsZnVuY3Rpb24oZSx0KXt2YXIgcixuPTAsaT1udWxsLHM9MDtmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXMrPXRbcl0ubGVuZ3RoO3N3aXRjaChlKXtjYXNlXCJzdHJpbmdcIjpyZXR1cm4gdC5qb2luKFwiXCIpO2Nhc2VcImFycmF5XCI6cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sdCk7Y2FzZVwidWludDhhcnJheVwiOmZvcihpPW5ldyBVaW50OEFycmF5KHMpLHI9MDtyPHQubGVuZ3RoO3IrKylpLnNldCh0W3JdLG4pLG4rPXRbcl0ubGVuZ3RoO3JldHVybiBpO2Nhc2VcIm5vZGVidWZmZXJcIjpyZXR1cm4gQnVmZmVyLmNvbmNhdCh0KTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcImNvbmNhdCA6IHVuc3VwcG9ydGVkIHR5cGUgJ1wiK2UrXCInXCIpfX0oaSxuKSxhKTt0KGUpfWNhdGNoKGUpe3IoZSl9bj1bXX0pLnJlc3VtZSgpfSl9ZnVuY3Rpb24gZihlLHQscil7dmFyIG49dDtzd2l0Y2godCl7Y2FzZVwiYmxvYlwiOmNhc2VcImFycmF5YnVmZmVyXCI6bj1cInVpbnQ4YXJyYXlcIjticmVhaztjYXNlXCJiYXNlNjRcIjpuPVwic3RyaW5nXCJ9dHJ5e3RoaXMuX2ludGVybmFsVHlwZT1uLHRoaXMuX291dHB1dFR5cGU9dCx0aGlzLl9taW1lVHlwZT1yLGguY2hlY2tTdXBwb3J0KG4pLHRoaXMuX3dvcmtlcj1lLnBpcGUobmV3IGkobikpLGUubG9jaygpfWNhdGNoKGUpe3RoaXMuX3dvcmtlcj1uZXcgcyhcImVycm9yXCIpLHRoaXMuX3dvcmtlci5lcnJvcihlKX19Zi5wcm90b3R5cGU9e2FjY3VtdWxhdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGwodGhpcyxlKX0sb246ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzO3JldHVyblwiZGF0YVwiPT09ZT90aGlzLl93b3JrZXIub24oZSxmdW5jdGlvbihlKXt0LmNhbGwocixlLmRhdGEsZS5tZXRhKX0pOnRoaXMuX3dvcmtlci5vbihlLGZ1bmN0aW9uKCl7aC5kZWxheSh0LGFyZ3VtZW50cyxyKX0pLHRoaXN9LHJlc3VtZTpmdW5jdGlvbigpe3JldHVybiBoLmRlbGF5KHRoaXMuX3dvcmtlci5yZXN1bWUsW10sdGhpcy5fd29ya2VyKSx0aGlzfSxwYXVzZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93b3JrZXIucGF1c2UoKSx0aGlzfSx0b05vZGVqc1N0cmVhbTpmdW5jdGlvbihlKXtpZihoLmNoZWNrU3VwcG9ydChcIm5vZGVzdHJlYW1cIiksXCJub2RlYnVmZmVyXCIhPT10aGlzLl9vdXRwdXRUeXBlKXRocm93IG5ldyBFcnJvcih0aGlzLl9vdXRwdXRUeXBlK1wiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBtZXRob2RcIik7cmV0dXJuIG5ldyBvKHRoaXMse29iamVjdE1vZGU6XCJub2RlYnVmZmVyXCIhPT10aGlzLl9vdXRwdXRUeXBlfSxlKX19LHQuZXhwb3J0cz1mfSx7XCIuLi9iYXNlNjRcIjoxLFwiLi4vZXh0ZXJuYWxcIjo2LFwiLi4vbm9kZWpzL05vZGVqc1N0cmVhbU91dHB1dEFkYXB0ZXJcIjoxMyxcIi4uL3N1cHBvcnRcIjozMCxcIi4uL3V0aWxzXCI6MzIsXCIuL0NvbnZlcnRXb3JrZXJcIjoyNCxcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMzA6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtpZihyLmJhc2U2ND0hMCxyLmFycmF5PSEwLHIuc3RyaW5nPSEwLHIuYXJyYXlidWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxyLm5vZGVidWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlcixyLnVpbnQ4YXJyYXk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXksXCJ1bmRlZmluZWRcIj09dHlwZW9mIEFycmF5QnVmZmVyKXIuYmxvYj0hMTtlbHNle3ZhciBuPW5ldyBBcnJheUJ1ZmZlcigwKTt0cnl7ci5ibG9iPTA9PT1uZXcgQmxvYihbbl0se3R5cGU6XCJhcHBsaWNhdGlvbi96aXBcIn0pLnNpemV9Y2F0Y2goZSl7dHJ5e3ZhciBpPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO2kuYXBwZW5kKG4pLHIuYmxvYj0wPT09aS5nZXRCbG9iKFwiYXBwbGljYXRpb24vemlwXCIpLnNpemV9Y2F0Y2goZSl7ci5ibG9iPSExfX19dHJ5e3Iubm9kZXN0cmVhbT0hIWUoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGV9Y2F0Y2goZSl7ci5ub2Rlc3RyZWFtPSExfX0se1wicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwzMTpbZnVuY3Rpb24oZSx0LHMpe1widXNlIHN0cmljdFwiO2Zvcih2YXIgbz1lKFwiLi91dGlsc1wiKSxoPWUoXCIuL3N1cHBvcnRcIikscj1lKFwiLi9ub2RlanNVdGlsc1wiKSxuPWUoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLHU9bmV3IEFycmF5KDI1NiksaT0wO2k8MjU2O2krKyl1W2ldPTI1Mjw9aT82OjI0ODw9aT81OjI0MDw9aT80OjIyNDw9aT8zOjE5Mjw9aT8yOjE7dVsyNTRdPXVbMjU0XT0xO2Z1bmN0aW9uIGEoKXtuLmNhbGwodGhpcyxcInV0Zi04IGRlY29kZVwiKSx0aGlzLmxlZnRPdmVyPW51bGx9ZnVuY3Rpb24gbCgpe24uY2FsbCh0aGlzLFwidXRmLTggZW5jb2RlXCIpfXMudXRmOGVuY29kZT1mdW5jdGlvbihlKXtyZXR1cm4gaC5ub2RlYnVmZmVyP3IubmV3QnVmZmVyRnJvbShlLFwidXRmLThcIik6ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhPWUubGVuZ3RoLG89MDtmb3IoaT0wO2k8YTtpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxvKz1yPDEyOD8xOnI8MjA0OD8yOnI8NjU1MzY/Mzo0O2Zvcih0PWgudWludDhhcnJheT9uZXcgVWludDhBcnJheShvKTpuZXcgQXJyYXkobyksaT1zPTA7czxvO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLHI8MTI4P3RbcysrXT1yOihyPDIwNDg/dFtzKytdPTE5MnxyPj4+Njoocjw2NTUzNj90W3MrK109MjI0fHI+Pj4xMjoodFtzKytdPTI0MHxyPj4+MTgsdFtzKytdPTEyOHxyPj4+MTImNjMpLHRbcysrXT0xMjh8cj4+PjYmNjMpLHRbcysrXT0xMjh8NjMmcik7cmV0dXJuIHR9KGUpfSxzLnV0ZjhkZWNvZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGgubm9kZWJ1ZmZlcj9vLnRyYW5zZm9ybVRvKFwibm9kZWJ1ZmZlclwiLGUpLnRvU3RyaW5nKFwidXRmLThcIik6ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscz1lLmxlbmd0aCxhPW5ldyBBcnJheSgyKnMpO2Zvcih0PXI9MDt0PHM7KWlmKChuPWVbdCsrXSk8MTI4KWFbcisrXT1uO2Vsc2UgaWYoNDwoaT11W25dKSlhW3IrK109NjU1MzMsdCs9aS0xO2Vsc2V7Zm9yKG4mPTI9PT1pPzMxOjM9PT1pPzE1Ojc7MTxpJiZ0PHM7KW49bjw8Nnw2MyZlW3QrK10saS0tOzE8aT9hW3IrK109NjU1MzM6bjw2NTUzNj9hW3IrK109bjoobi09NjU1MzYsYVtyKytdPTU1Mjk2fG4+PjEwJjEwMjMsYVtyKytdPTU2MzIwfDEwMjMmbil9cmV0dXJuIGEubGVuZ3RoIT09ciYmKGEuc3ViYXJyYXk/YT1hLnN1YmFycmF5KDAscik6YS5sZW5ndGg9ciksby5hcHBseUZyb21DaGFyQ29kZShhKX0oZT1vLnRyYW5zZm9ybVRvKGgudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIsZSkpfSxvLmluaGVyaXRzKGEsbiksYS5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3ZhciB0PW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixlLmRhdGEpO2lmKHRoaXMubGVmdE92ZXImJnRoaXMubGVmdE92ZXIubGVuZ3RoKXtpZihoLnVpbnQ4YXJyYXkpe3ZhciByPXQ7KHQ9bmV3IFVpbnQ4QXJyYXkoci5sZW5ndGgrdGhpcy5sZWZ0T3Zlci5sZW5ndGgpKS5zZXQodGhpcy5sZWZ0T3ZlciwwKSx0LnNldChyLHRoaXMubGVmdE92ZXIubGVuZ3RoKX1lbHNlIHQ9dGhpcy5sZWZ0T3Zlci5jb25jYXQodCk7dGhpcy5sZWZ0T3Zlcj1udWxsfXZhciBuPWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKCh0PXR8fGUubGVuZ3RoKT5lLmxlbmd0aCYmKHQ9ZS5sZW5ndGgpLHI9dC0xOzA8PXImJjEyOD09KDE5MiZlW3JdKTspci0tO3JldHVybiByPDA/dDowPT09cj90OnIrdVtlW3JdXT50P3I6dH0odCksaT10O24hPT10Lmxlbmd0aCYmKGgudWludDhhcnJheT8oaT10LnN1YmFycmF5KDAsbiksdGhpcy5sZWZ0T3Zlcj10LnN1YmFycmF5KG4sdC5sZW5ndGgpKTooaT10LnNsaWNlKDAsbiksdGhpcy5sZWZ0T3Zlcj10LnNsaWNlKG4sdC5sZW5ndGgpKSksdGhpcy5wdXNoKHtkYXRhOnMudXRmOGRlY29kZShpKSxtZXRhOmUubWV0YX0pfSxhLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe3RoaXMubGVmdE92ZXImJnRoaXMubGVmdE92ZXIubGVuZ3RoJiYodGhpcy5wdXNoKHtkYXRhOnMudXRmOGRlY29kZSh0aGlzLmxlZnRPdmVyKSxtZXRhOnt9fSksdGhpcy5sZWZ0T3Zlcj1udWxsKX0scy5VdGY4RGVjb2RlV29ya2VyPWEsby5pbmhlcml0cyhsLG4pLGwucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnB1c2goe2RhdGE6cy51dGY4ZW5jb2RlKGUuZGF0YSksbWV0YTplLm1ldGF9KX0scy5VdGY4RW5jb2RlV29ya2VyPWx9LHtcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMzI6W2Z1bmN0aW9uKGUsdCxhKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiLi9zdXBwb3J0XCIpLGg9ZShcIi4vYmFzZTY0XCIpLHI9ZShcIi4vbm9kZWpzVXRpbHNcIiksdT1lKFwiLi9leHRlcm5hbFwiKTtmdW5jdGlvbiBuKGUpe3JldHVybiBlfWZ1bmN0aW9uIGwoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoOysrcil0W3JdPTI1NSZlLmNoYXJDb2RlQXQocik7cmV0dXJuIHR9ZShcInNldGltbWVkaWF0ZVwiKSxhLm5ld0Jsb2I9ZnVuY3Rpb24odCxyKXthLmNoZWNrU3VwcG9ydChcImJsb2JcIik7dHJ5e3JldHVybiBuZXcgQmxvYihbdF0se3R5cGU6cn0pfWNhdGNoKGUpe3RyeXt2YXIgbj1uZXcoc2VsZi5CbG9iQnVpbGRlcnx8c2VsZi5XZWJLaXRCbG9iQnVpbGRlcnx8c2VsZi5Nb3pCbG9iQnVpbGRlcnx8c2VsZi5NU0Jsb2JCdWlsZGVyKTtyZXR1cm4gbi5hcHBlbmQodCksbi5nZXRCbG9iKHIpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcIkJ1ZyA6IGNhbid0IGNvbnN0cnVjdCB0aGUgQmxvYi5cIil9fX07dmFyIGk9e3N0cmluZ2lmeUJ5Q2h1bms6ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPVtdLGk9MCxzPWUubGVuZ3RoO2lmKHM8PXIpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlKTtmb3IoO2k8czspXCJhcnJheVwiPT09dHx8XCJub2RlYnVmZmVyXCI9PT10P24ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZS5zbGljZShpLE1hdGgubWluKGkrcixzKSkpKTpuLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGUuc3ViYXJyYXkoaSxNYXRoLm1pbihpK3IscykpKSksaSs9cjtyZXR1cm4gbi5qb2luKFwiXCIpfSxzdHJpbmdpZnlCeUNoYXI6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVwiXCIscj0wO3I8ZS5sZW5ndGg7cisrKXQrPVN0cmluZy5mcm9tQ2hhckNvZGUoZVtyXSk7cmV0dXJuIHR9LGFwcGx5Q2FuQmVVc2VkOnt1aW50OGFycmF5OmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLnVpbnQ4YXJyYXkmJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpLmxlbmd0aH1jYXRjaChlKXtyZXR1cm4hMX19KCksbm9kZWJ1ZmZlcjpmdW5jdGlvbigpe3RyeXtyZXR1cm4gby5ub2RlYnVmZmVyJiYxPT09U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHIuYWxsb2NCdWZmZXIoMSkpLmxlbmd0aH1jYXRjaChlKXtyZXR1cm4hMX19KCl9fTtmdW5jdGlvbiBzKGUpe3ZhciB0PTY1NTM2LHI9YS5nZXRUeXBlT2YoZSksbj0hMDtpZihcInVpbnQ4YXJyYXlcIj09PXI/bj1pLmFwcGx5Q2FuQmVVc2VkLnVpbnQ4YXJyYXk6XCJub2RlYnVmZmVyXCI9PT1yJiYobj1pLmFwcGx5Q2FuQmVVc2VkLm5vZGVidWZmZXIpLG4pZm9yKDsxPHQ7KXRyeXtyZXR1cm4gaS5zdHJpbmdpZnlCeUNodW5rKGUscix0KX1jYXRjaChlKXt0PU1hdGguZmxvb3IodC8yKX1yZXR1cm4gaS5zdHJpbmdpZnlCeUNoYXIoZSl9ZnVuY3Rpb24gZihlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXRbcl09ZVtyXTtyZXR1cm4gdH1hLmFwcGx5RnJvbUNoYXJDb2RlPXM7dmFyIGM9e307Yy5zdHJpbmc9e3N0cmluZzpuLGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBsKGUsbmV3IEFycmF5KGUubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiBjLnN0cmluZy51aW50OGFycmF5KGUpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbChlLG5ldyBVaW50OEFycmF5KGUubGVuZ3RoKSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxyLmFsbG9jQnVmZmVyKGUubGVuZ3RoKSl9fSxjLmFycmF5PXtzdHJpbmc6cyxhcnJheTpuLGFycmF5YnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVWludDhBcnJheShlKS5idWZmZXJ9LHVpbnQ4YXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KGUpfSxub2RlYnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiByLm5ld0J1ZmZlckZyb20oZSl9fSxjLmFycmF5YnVmZmVyPXtzdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIHMobmV3IFVpbnQ4QXJyYXkoZSkpfSxhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihuZXcgVWludDhBcnJheShlKSxuZXcgQXJyYXkoZS5ieXRlTGVuZ3RoKSl9LGFycmF5YnVmZmVyOm4sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShuZXcgVWludDhBcnJheShlKSl9fSxjLnVpbnQ4YXJyYXk9e3N0cmluZzpzLGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKGUsbmV3IEFycmF5KGUubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiBlLmJ1ZmZlcn0sdWludDhhcnJheTpuLG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShlKX19LGMubm9kZWJ1ZmZlcj17c3RyaW5nOnMsYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGMubm9kZWJ1ZmZlci51aW50OGFycmF5KGUpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihlLG5ldyBVaW50OEFycmF5KGUubGVuZ3RoKSl9LG5vZGVidWZmZXI6bn0sYS50cmFuc2Zvcm1Ubz1mdW5jdGlvbihlLHQpe2lmKHQ9dHx8XCJcIiwhZSlyZXR1cm4gdDthLmNoZWNrU3VwcG9ydChlKTt2YXIgcj1hLmdldFR5cGVPZih0KTtyZXR1cm4gY1tyXVtlXSh0KX0sYS5yZXNvbHZlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLnNwbGl0KFwiL1wiKSxyPVtdLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtcIi5cIj09PWl8fFwiXCI9PT1pJiYwIT09biYmbiE9PXQubGVuZ3RoLTF8fChcIi4uXCI9PT1pP3IucG9wKCk6ci5wdXNoKGkpKX1yZXR1cm4gci5qb2luKFwiL1wiKX0sYS5nZXRUeXBlT2Y9ZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/XCJzdHJpbmdcIjpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk/XCJhcnJheVwiOm8ubm9kZWJ1ZmZlciYmci5pc0J1ZmZlcihlKT9cIm5vZGVidWZmZXJcIjpvLnVpbnQ4YXJyYXkmJmUgaW5zdGFuY2VvZiBVaW50OEFycmF5P1widWludDhhcnJheVwiOm8uYXJyYXlidWZmZXImJmUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj9cImFycmF5YnVmZmVyXCI6dm9pZCAwfSxhLmNoZWNrU3VwcG9ydD1mdW5jdGlvbihlKXtpZighb1tlLnRvTG93ZXJDYXNlKCldKXRocm93IG5ldyBFcnJvcihlK1wiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF0Zm9ybVwiKX0sYS5NQVhfVkFMVUVfMTZCSVRTPTY1NTM1LGEuTUFYX1ZBTFVFXzMyQklUUz0tMSxhLnByZXR0eT1mdW5jdGlvbihlKXt2YXIgdCxyLG49XCJcIjtmb3Iocj0wO3I8KGV8fFwiXCIpLmxlbmd0aDtyKyspbis9XCJcXFxceFwiKygodD1lLmNoYXJDb2RlQXQocikpPDE2P1wiMFwiOlwiXCIpK3QudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIG59LGEuZGVsYXk9ZnVuY3Rpb24oZSx0LHIpe3NldEltbWVkaWF0ZShmdW5jdGlvbigpe2UuYXBwbHkocnx8bnVsbCx0fHxbXSl9KX0sYS5pbmhlcml0cz1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoKXt9ci5wcm90b3R5cGU9dC5wcm90b3R5cGUsZS5wcm90b3R5cGU9bmV3IHJ9LGEuZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxyPXt9O2ZvcihlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKylmb3IodCBpbiBhcmd1bWVudHNbZV0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tlXSx0KSYmdm9pZCAwPT09clt0XSYmKHJbdF09YXJndW1lbnRzW2VdW3RdKTtyZXR1cm4gcn0sYS5wcmVwYXJlQ29udGVudD1mdW5jdGlvbihyLGUsbixpLHMpe3JldHVybiB1LlByb21pc2UucmVzb2x2ZShlKS50aGVuKGZ1bmN0aW9uKG4pe3JldHVybiBvLmJsb2ImJihuIGluc3RhbmNlb2YgQmxvYnx8LTEhPT1bXCJbb2JqZWN0IEZpbGVdXCIsXCJbb2JqZWN0IEJsb2JdXCJdLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4pKSkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBGaWxlUmVhZGVyP25ldyB1LlByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgZT1uZXcgRmlsZVJlYWRlcjtlLm9ubG9hZD1mdW5jdGlvbihlKXt0KGUudGFyZ2V0LnJlc3VsdCl9LGUub25lcnJvcj1mdW5jdGlvbihlKXtyKGUudGFyZ2V0LmVycm9yKX0sZS5yZWFkQXNBcnJheUJ1ZmZlcihuKX0pOm59KS50aGVuKGZ1bmN0aW9uKGUpe3ZhciB0PWEuZ2V0VHlwZU9mKGUpO3JldHVybiB0PyhcImFycmF5YnVmZmVyXCI9PT10P2U9YS50cmFuc2Zvcm1UbyhcInVpbnQ4YXJyYXlcIixlKTpcInN0cmluZ1wiPT09dCYmKHM/ZT1oLmRlY29kZShlKTpuJiYhMCE9PWkmJihlPWZ1bmN0aW9uKGUpe3JldHVybiBsKGUsby51aW50OGFycmF5P25ldyBVaW50OEFycmF5KGUubGVuZ3RoKTpuZXcgQXJyYXkoZS5sZW5ndGgpKX0oZSkpKSxlKTp1LlByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkNhbid0IHJlYWQgdGhlIGRhdGEgb2YgJ1wiK3IrXCInLiBJcyBpdCBpbiBhIHN1cHBvcnRlZCBKYXZhU2NyaXB0IHR5cGUgKFN0cmluZywgQmxvYiwgQXJyYXlCdWZmZXIsIGV0YykgP1wiKSl9KX19LHtcIi4vYmFzZTY0XCI6MSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdXBwb3J0XCI6MzAsc2V0aW1tZWRpYXRlOjU0fV0sMzM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9yZWFkZXIvcmVhZGVyRm9yXCIpLGk9ZShcIi4vdXRpbHNcIikscz1lKFwiLi9zaWduYXR1cmVcIiksYT1lKFwiLi96aXBFbnRyeVwiKSxvPWUoXCIuL3N1cHBvcnRcIik7ZnVuY3Rpb24gaChlKXt0aGlzLmZpbGVzPVtdLHRoaXMubG9hZE9wdGlvbnM9ZX1oLnByb3RvdHlwZT17Y2hlY2tTaWduYXR1cmU6ZnVuY3Rpb24oZSl7aWYoIXRoaXMucmVhZGVyLnJlYWRBbmRDaGVja1NpZ25hdHVyZShlKSl7dGhpcy5yZWFkZXIuaW5kZXgtPTQ7dmFyIHQ9dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KTt0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIG9yIGJ1ZzogdW5leHBlY3RlZCBzaWduYXR1cmUgKFwiK2kucHJldHR5KHQpK1wiLCBleHBlY3RlZCBcIitpLnByZXR0eShlKStcIilcIil9fSxpc1NpZ25hdHVyZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXMucmVhZGVyLmluZGV4O3RoaXMucmVhZGVyLnNldEluZGV4KGUpO3ZhciBuPXRoaXMucmVhZGVyLnJlYWRTdHJpbmcoNCk9PT10O3JldHVybiB0aGlzLnJlYWRlci5zZXRJbmRleChyKSxufSxyZWFkQmxvY2tFbmRPZkNlbnRyYWw6ZnVuY3Rpb24oKXt0aGlzLmRpc2tOdW1iZXI9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5jZW50cmFsRGlyUmVjb3Jkc09uVGhpc0Rpc2s9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5jZW50cmFsRGlyU2l6ZT10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuY2VudHJhbERpck9mZnNldD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuemlwQ29tbWVudExlbmd0aD10aGlzLnJlYWRlci5yZWFkSW50KDIpO3ZhciBlPXRoaXMucmVhZGVyLnJlYWREYXRhKHRoaXMuemlwQ29tbWVudExlbmd0aCksdD1vLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLHI9aS50cmFuc2Zvcm1Ubyh0LGUpO3RoaXMuemlwQ29tbWVudD10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKHIpfSxyZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuemlwNjRFbmRPZkNlbnRyYWxTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5yZWFkZXIuc2tpcCg0KSx0aGlzLmRpc2tOdW1iZXI9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyUmVjb3Jkc09uVGhpc0Rpc2s9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyU2l6ZT10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpck9mZnNldD10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuemlwNjRFeHRlbnNpYmxlRGF0YT17fTtmb3IodmFyIGUsdCxyLG49dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUtNDQ7MDxuOyllPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHI9dGhpcy5yZWFkZXIucmVhZERhdGEodCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhW2VdPXtpZDplLGxlbmd0aDp0LHZhbHVlOnJ9fSxyZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbExvY2F0b3I6ZnVuY3Rpb24oKXtpZih0aGlzLmRpc2tXaXRoWmlwNjRDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXI9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmRpc2tzQ291bnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSwxPHRoaXMuZGlza3NDb3VudCl0aHJvdyBuZXcgRXJyb3IoXCJNdWx0aS12b2x1bWVzIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKX0scmVhZExvY2FsRmlsZXM6ZnVuY3Rpb24oKXt2YXIgZSx0O2ZvcihlPTA7ZTx0aGlzLmZpbGVzLmxlbmd0aDtlKyspdD10aGlzLmZpbGVzW2VdLHRoaXMucmVhZGVyLnNldEluZGV4KHQubG9jYWxIZWFkZXJPZmZzZXQpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5MT0NBTF9GSUxFX0hFQURFUiksdC5yZWFkTG9jYWxQYXJ0KHRoaXMucmVhZGVyKSx0LmhhbmRsZVVURjgoKSx0LnByb2Nlc3NBdHRyaWJ1dGVzKCl9LHJlYWRDZW50cmFsRGlyOmZ1bmN0aW9uKCl7dmFyIGU7Zm9yKHRoaXMucmVhZGVyLnNldEluZGV4KHRoaXMuY2VudHJhbERpck9mZnNldCk7dGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKHMuQ0VOVFJBTF9GSUxFX0hFQURFUik7KShlPW5ldyBhKHt6aXA2NDp0aGlzLnppcDY0fSx0aGlzLmxvYWRPcHRpb25zKSkucmVhZENlbnRyYWxQYXJ0KHRoaXMucmVhZGVyKSx0aGlzLmZpbGVzLnB1c2goZSk7aWYodGhpcy5jZW50cmFsRGlyUmVjb3JkcyE9PXRoaXMuZmlsZXMubGVuZ3RoJiYwIT09dGhpcy5jZW50cmFsRGlyUmVjb3JkcyYmMD09PXRoaXMuZmlsZXMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiBleHBlY3RlZCBcIit0aGlzLmNlbnRyYWxEaXJSZWNvcmRzK1wiIHJlY29yZHMgaW4gY2VudHJhbCBkaXIsIGdvdCBcIit0aGlzLmZpbGVzLmxlbmd0aCl9LHJlYWRFbmRPZkNlbnRyYWw6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLkNFTlRSQUxfRElSRUNUT1JZX0VORCk7aWYoZTwwKXRocm93IXRoaXMuaXNTaWduYXR1cmUoMCxzLkxPQ0FMX0ZJTEVfSEVBREVSKT9uZXcgRXJyb3IoXCJDYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeSA6IGlzIHRoaXMgYSB6aXAgZmlsZSA/IElmIGl0IGlzLCBzZWUgaHR0cHM6Ly9zdHVrLmdpdGh1Yi5pby9qc3ppcC9kb2N1bWVudGF0aW9uL2hvd3RvL3JlYWRfemlwLmh0bWxcIik6bmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnlcIik7dGhpcy5yZWFkZXIuc2V0SW5kZXgoZSk7dmFyIHQ9ZTtpZih0aGlzLmNoZWNrU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSx0aGlzLnJlYWRCbG9ja0VuZE9mQ2VudHJhbCgpLHRoaXMuZGlza051bWJlcj09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkc09uVGhpc0Rpc2s9PT1pLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuY2VudHJhbERpclJlY29yZHM9PT1pLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuY2VudHJhbERpclNpemU9PT1pLk1BWF9WQUxVRV8zMkJJVFN8fHRoaXMuY2VudHJhbERpck9mZnNldD09PWkuTUFYX1ZBTFVFXzMyQklUUyl7aWYodGhpcy56aXA2ND0hMCwoZT10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpKTwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeSBsb2NhdG9yXCIpO2lmKHRoaXMucmVhZGVyLnNldEluZGV4KGUpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SKSx0aGlzLnJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcigpLCF0aGlzLmlzU2lnbmF0dXJlKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcixzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCkmJih0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXI9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcjwwKSl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIHRoZSBaSVA2NCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnlcIik7dGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyKSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSx0aGlzLnJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsKCl9dmFyIHI9dGhpcy5jZW50cmFsRGlyT2Zmc2V0K3RoaXMuY2VudHJhbERpclNpemU7dGhpcy56aXA2NCYmKHIrPTIwLHIrPTEyK3RoaXMuemlwNjRFbmRPZkNlbnRyYWxTaXplKTt2YXIgbj10LXI7aWYoMDxuKXRoaXMuaXNTaWduYXR1cmUodCxzLkNFTlRSQUxfRklMRV9IRUFERVIpfHwodGhpcy5yZWFkZXIuemVybz1uKTtlbHNlIGlmKG48MCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBtaXNzaW5nIFwiK01hdGguYWJzKG4pK1wiIGJ5dGVzLlwiKX0scHJlcGFyZVJlYWRlcjpmdW5jdGlvbihlKXt0aGlzLnJlYWRlcj1uKGUpfSxsb2FkOmZ1bmN0aW9uKGUpe3RoaXMucHJlcGFyZVJlYWRlcihlKSx0aGlzLnJlYWRFbmRPZkNlbnRyYWwoKSx0aGlzLnJlYWRDZW50cmFsRGlyKCksdGhpcy5yZWFkTG9jYWxGaWxlcygpfX0sdC5leHBvcnRzPWh9LHtcIi4vcmVhZGVyL3JlYWRlckZvclwiOjIyLFwiLi9zaWduYXR1cmVcIjoyMyxcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyeVwiOjM0fV0sMzQ6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9yZWFkZXIvcmVhZGVyRm9yXCIpLHM9ZShcIi4vdXRpbHNcIiksaT1lKFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGE9ZShcIi4vY3JjMzJcIiksbz1lKFwiLi91dGY4XCIpLGg9ZShcIi4vY29tcHJlc3Npb25zXCIpLHU9ZShcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBsKGUsdCl7dGhpcy5vcHRpb25zPWUsdGhpcy5sb2FkT3B0aW9ucz10fWwucHJvdG90eXBlPXtpc0VuY3J5cHRlZDpmdW5jdGlvbigpe3JldHVybiAxPT0oMSZ0aGlzLmJpdEZsYWcpfSx1c2VVVEY4OmZ1bmN0aW9uKCl7cmV0dXJuIDIwNDg9PSgyMDQ4JnRoaXMuYml0RmxhZyl9LHJlYWRMb2NhbFBhcnQ6ZnVuY3Rpb24oZSl7dmFyIHQscjtpZihlLnNraXAoMjIpLHRoaXMuZmlsZU5hbWVMZW5ndGg9ZS5yZWFkSW50KDIpLHI9ZS5yZWFkSW50KDIpLHRoaXMuZmlsZU5hbWU9ZS5yZWFkRGF0YSh0aGlzLmZpbGVOYW1lTGVuZ3RoKSxlLnNraXAociksLTE9PT10aGlzLmNvbXByZXNzZWRTaXplfHwtMT09PXRoaXMudW5jb21wcmVzc2VkU2l6ZSl0aHJvdyBuZXcgRXJyb3IoXCJCdWcgb3IgY29ycnVwdGVkIHppcCA6IGRpZG4ndCBnZXQgZW5vdWdoIGluZm9ybWF0aW9uIGZyb20gdGhlIGNlbnRyYWwgZGlyZWN0b3J5IChjb21wcmVzc2VkU2l6ZSA9PT0gLTEgfHwgdW5jb21wcmVzc2VkU2l6ZSA9PT0gLTEpXCIpO2lmKG51bGw9PT0odD1mdW5jdGlvbihlKXtmb3IodmFyIHQgaW4gaClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaCx0KSYmaFt0XS5tYWdpYz09PWUpcmV0dXJuIGhbdF07cmV0dXJuIG51bGx9KHRoaXMuY29tcHJlc3Npb25NZXRob2QpKSl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIDogY29tcHJlc3Npb24gXCIrcy5wcmV0dHkodGhpcy5jb21wcmVzc2lvbk1ldGhvZCkrXCIgdW5rbm93biAoaW5uZXIgZmlsZSA6IFwiK3MudHJhbnNmb3JtVG8oXCJzdHJpbmdcIix0aGlzLmZpbGVOYW1lKStcIilcIik7dGhpcy5kZWNvbXByZXNzZWQ9bmV3IGkodGhpcy5jb21wcmVzc2VkU2l6ZSx0aGlzLnVuY29tcHJlc3NlZFNpemUsdGhpcy5jcmMzMix0LGUucmVhZERhdGEodGhpcy5jb21wcmVzc2VkU2l6ZSkpfSxyZWFkQ2VudHJhbFBhcnQ6ZnVuY3Rpb24oZSl7dGhpcy52ZXJzaW9uTWFkZUJ5PWUucmVhZEludCgyKSxlLnNraXAoMiksdGhpcy5iaXRGbGFnPWUucmVhZEludCgyKSx0aGlzLmNvbXByZXNzaW9uTWV0aG9kPWUucmVhZFN0cmluZygyKSx0aGlzLmRhdGU9ZS5yZWFkRGF0ZSgpLHRoaXMuY3JjMzI9ZS5yZWFkSW50KDQpLHRoaXMuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDQpLHRoaXMudW5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoNCk7dmFyIHQ9ZS5yZWFkSW50KDIpO2lmKHRoaXMuZXh0cmFGaWVsZHNMZW5ndGg9ZS5yZWFkSW50KDIpLHRoaXMuZmlsZUNvbW1lbnRMZW5ndGg9ZS5yZWFkSW50KDIpLHRoaXMuZGlza051bWJlclN0YXJ0PWUucmVhZEludCgyKSx0aGlzLmludGVybmFsRmlsZUF0dHJpYnV0ZXM9ZS5yZWFkSW50KDIpLHRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcz1lLnJlYWRJbnQoNCksdGhpcy5sb2NhbEhlYWRlck9mZnNldD1lLnJlYWRJbnQoNCksdGhpcy5pc0VuY3J5cHRlZCgpKXRocm93IG5ldyBFcnJvcihcIkVuY3J5cHRlZCB6aXAgYXJlIG5vdCBzdXBwb3J0ZWRcIik7ZS5za2lwKHQpLHRoaXMucmVhZEV4dHJhRmllbGRzKGUpLHRoaXMucGFyc2VaSVA2NEV4dHJhRmllbGQoZSksdGhpcy5maWxlQ29tbWVudD1lLnJlYWREYXRhKHRoaXMuZmlsZUNvbW1lbnRMZW5ndGgpfSxwcm9jZXNzQXR0cmlidXRlczpmdW5jdGlvbigpe3RoaXMudW5peFBlcm1pc3Npb25zPW51bGwsdGhpcy5kb3NQZXJtaXNzaW9ucz1udWxsO3ZhciBlPXRoaXMudmVyc2lvbk1hZGVCeT4+ODt0aGlzLmRpcj0hISgxNiZ0aGlzLmV4dGVybmFsRmlsZUF0dHJpYnV0ZXMpLDA9PWUmJih0aGlzLmRvc1Blcm1pc3Npb25zPTYzJnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMz09ZSYmKHRoaXMudW5peFBlcm1pc3Npb25zPXRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcz4+MTYmNjU1MzUpLHRoaXMuZGlyfHxcIi9cIiE9PXRoaXMuZmlsZU5hbWVTdHIuc2xpY2UoLTEpfHwodGhpcy5kaXI9ITApfSxwYXJzZVpJUDY0RXh0cmFGaWVsZDpmdW5jdGlvbigpe2lmKHRoaXMuZXh0cmFGaWVsZHNbMV0pe3ZhciBlPW4odGhpcy5leHRyYUZpZWxkc1sxXS52YWx1ZSk7dGhpcy51bmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg4KSksdGhpcy5jb21wcmVzc2VkU2l6ZT09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5sb2NhbEhlYWRlck9mZnNldD1lLnJlYWRJbnQoOCkpLHRoaXMuZGlza051bWJlclN0YXJ0PT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDQpKX19LHJlYWRFeHRyYUZpZWxkczpmdW5jdGlvbihlKXt2YXIgdCxyLG4saT1lLmluZGV4K3RoaXMuZXh0cmFGaWVsZHNMZW5ndGg7Zm9yKHRoaXMuZXh0cmFGaWVsZHN8fCh0aGlzLmV4dHJhRmllbGRzPXt9KTtlLmluZGV4KzQ8aTspdD1lLnJlYWRJbnQoMikscj1lLnJlYWRJbnQoMiksbj1lLnJlYWREYXRhKHIpLHRoaXMuZXh0cmFGaWVsZHNbdF09e2lkOnQsbGVuZ3RoOnIsdmFsdWU6bn07ZS5zZXRJbmRleChpKX0saGFuZGxlVVRGODpmdW5jdGlvbigpe3ZhciBlPXUudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCI7aWYodGhpcy51c2VVVEY4KCkpdGhpcy5maWxlTmFtZVN0cj1vLnV0ZjhkZWNvZGUodGhpcy5maWxlTmFtZSksdGhpcy5maWxlQ29tbWVudFN0cj1vLnV0ZjhkZWNvZGUodGhpcy5maWxlQ29tbWVudCk7ZWxzZXt2YXIgdD10aGlzLmZpbmRFeHRyYUZpZWxkVW5pY29kZVBhdGgoKTtpZihudWxsIT09dCl0aGlzLmZpbGVOYW1lU3RyPXQ7ZWxzZXt2YXIgcj1zLnRyYW5zZm9ybVRvKGUsdGhpcy5maWxlTmFtZSk7dGhpcy5maWxlTmFtZVN0cj10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKHIpfXZhciBuPXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlQ29tbWVudCgpO2lmKG51bGwhPT1uKXRoaXMuZmlsZUNvbW1lbnRTdHI9bjtlbHNle3ZhciBpPXMudHJhbnNmb3JtVG8oZSx0aGlzLmZpbGVDb21tZW50KTt0aGlzLmZpbGVDb21tZW50U3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUoaSl9fX0sZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZXh0cmFGaWVsZHNbMjg3ODldO2lmKGUpe3ZhciB0PW4oZS52YWx1ZSk7cmV0dXJuIDEhPT10LnJlYWRJbnQoMSk/bnVsbDphKHRoaXMuZmlsZU5hbWUpIT09dC5yZWFkSW50KDQpP251bGw6by51dGY4ZGVjb2RlKHQucmVhZERhdGEoZS5sZW5ndGgtNSkpfXJldHVybiBudWxsfSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5leHRyYUZpZWxkc1syNTQ2MV07aWYoZSl7dmFyIHQ9bihlLnZhbHVlKTtyZXR1cm4gMSE9PXQucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlQ29tbWVudCkhPT10LnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUodC5yZWFkRGF0YShlLmxlbmd0aC01KSl9cmV0dXJuIG51bGx9fSx0LmV4cG9ydHM9bH0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vY29tcHJlc3Npb25zXCI6MyxcIi4vY3JjMzJcIjo0LFwiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyfV0sMzU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxyKXt0aGlzLm5hbWU9ZSx0aGlzLmRpcj1yLmRpcix0aGlzLmRhdGU9ci5kYXRlLHRoaXMuY29tbWVudD1yLmNvbW1lbnQsdGhpcy51bml4UGVybWlzc2lvbnM9ci51bml4UGVybWlzc2lvbnMsdGhpcy5kb3NQZXJtaXNzaW9ucz1yLmRvc1Blcm1pc3Npb25zLHRoaXMuX2RhdGE9dCx0aGlzLl9kYXRhQmluYXJ5PXIuYmluYXJ5LHRoaXMub3B0aW9ucz17Y29tcHJlc3Npb246ci5jb21wcmVzc2lvbixjb21wcmVzc2lvbk9wdGlvbnM6ci5jb21wcmVzc2lvbk9wdGlvbnN9fXZhciBzPWUoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksaT1lKFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiKSxhPWUoXCIuL3V0ZjhcIiksbz1lKFwiLi9jb21wcmVzc2VkT2JqZWN0XCIpLGg9ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7bi5wcm90b3R5cGU9e2ludGVybmFsU3RyZWFtOmZ1bmN0aW9uKGUpe3ZhciB0PW51bGwscj1cInN0cmluZ1wiO3RyeXtpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3ZhciBuPVwic3RyaW5nXCI9PT0ocj1lLnRvTG93ZXJDYXNlKCkpfHxcInRleHRcIj09PXI7XCJiaW5hcnlzdHJpbmdcIiE9PXImJlwidGV4dFwiIT09cnx8KHI9XCJzdHJpbmdcIiksdD10aGlzLl9kZWNvbXByZXNzV29ya2VyKCk7dmFyIGk9IXRoaXMuX2RhdGFCaW5hcnk7aSYmIW4mJih0PXQucGlwZShuZXcgYS5VdGY4RW5jb2RlV29ya2VyKSksIWkmJm4mJih0PXQucGlwZShuZXcgYS5VdGY4RGVjb2RlV29ya2VyKSl9Y2F0Y2goZSl7KHQ9bmV3IGgoXCJlcnJvclwiKSkuZXJyb3IoZSl9cmV0dXJuIG5ldyBzKHQscixcIlwiKX0sYXN5bmM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbShlKS5hY2N1bXVsYXRlKHQpfSxub2RlU3RyZWFtOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJlYW0oZXx8XCJub2RlYnVmZmVyXCIpLnRvTm9kZWpzU3RyZWFtKHQpfSxfY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oZSx0KXtpZih0aGlzLl9kYXRhIGluc3RhbmNlb2YgbyYmdGhpcy5fZGF0YS5jb21wcmVzc2lvbi5tYWdpYz09PWUubWFnaWMpcmV0dXJuIHRoaXMuX2RhdGEuZ2V0Q29tcHJlc3NlZFdvcmtlcigpO3ZhciByPXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTtyZXR1cm4gdGhpcy5fZGF0YUJpbmFyeXx8KHI9ci5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSxvLmNyZWF0ZVdvcmtlckZyb20ocixlLHQpfSxfZGVjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9kYXRhIGluc3RhbmNlb2Ygbz90aGlzLl9kYXRhLmdldENvbnRlbnRXb3JrZXIoKTp0aGlzLl9kYXRhIGluc3RhbmNlb2YgaD90aGlzLl9kYXRhOm5ldyBpKHRoaXMuX2RhdGEpfX07Zm9yKHZhciB1PVtcImFzVGV4dFwiLFwiYXNCaW5hcnlcIixcImFzTm9kZUJ1ZmZlclwiLFwiYXNVaW50OEFycmF5XCIsXCJhc0FycmF5QnVmZmVyXCJdLGw9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZj0wO2Y8dS5sZW5ndGg7ZisrKW4ucHJvdG90eXBlW3VbZl1dPWw7dC5leHBvcnRzPW59LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6MjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxfV0sMzY6W2Z1bmN0aW9uKGUsbCx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbixlPXQuTXV0YXRpb25PYnNlcnZlcnx8dC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO2lmKGUpe3ZhciBpPTAscz1uZXcgZSh1KSxhPXQuZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7cy5vYnNlcnZlKGEse2NoYXJhY3RlckRhdGE6ITB9KSxyPWZ1bmN0aW9uKCl7YS5kYXRhPWk9KytpJTJ9fWVsc2UgaWYodC5zZXRJbW1lZGlhdGV8fHZvaWQgMD09PXQuTWVzc2FnZUNoYW5uZWwpcj1cImRvY3VtZW50XCJpbiB0JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gdC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKCl7dmFyIGU9dC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2Uub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7dSgpLGUub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLGU9bnVsbH0sdC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSl9OmZ1bmN0aW9uKCl7c2V0VGltZW91dCh1LDApfTtlbHNle3ZhciBvPW5ldyB0Lk1lc3NhZ2VDaGFubmVsO28ucG9ydDEub25tZXNzYWdlPXUscj1mdW5jdGlvbigpe28ucG9ydDIucG9zdE1lc3NhZ2UoMCl9fXZhciBoPVtdO2Z1bmN0aW9uIHUoKXt2YXIgZSx0O249ITA7Zm9yKHZhciByPWgubGVuZ3RoO3I7KXtmb3IodD1oLGg9W10sZT0tMTsrK2U8cjspdFtlXSgpO3I9aC5sZW5ndGh9bj0hMX1sLmV4cG9ydHM9ZnVuY3Rpb24oZSl7MSE9PWgucHVzaChlKXx8bnx8cigpfX0pLmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9KX0se31dLDM3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9ZShcImltbWVkaWF0ZVwiKTtmdW5jdGlvbiB1KCl7fXZhciBsPXt9LHM9W1wiUkVKRUNURURcIl0sYT1bXCJGVUxGSUxMRURcIl0sbj1bXCJQRU5ESU5HXCJdO2Z1bmN0aW9uIG8oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwicmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO3RoaXMuc3RhdGU9bix0aGlzLnF1ZXVlPVtdLHRoaXMub3V0Y29tZT12b2lkIDAsZSE9PXUmJmQodGhpcyxlKX1mdW5jdGlvbiBoKGUsdCxyKXt0aGlzLnByb21pc2U9ZSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYodGhpcy5vbkZ1bGZpbGxlZD10LHRoaXMuY2FsbEZ1bGZpbGxlZD10aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZCksXCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHRoaXMub25SZWplY3RlZD1yLHRoaXMuY2FsbFJlamVjdGVkPXRoaXMub3RoZXJDYWxsUmVqZWN0ZWQpfWZ1bmN0aW9uIGYodCxyLG4pe2koZnVuY3Rpb24oKXt2YXIgZTt0cnl7ZT1yKG4pfWNhdGNoKGUpe3JldHVybiBsLnJlamVjdCh0LGUpfWU9PT10P2wucmVqZWN0KHQsbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZXNvbHZlIHByb21pc2Ugd2l0aCBpdHNlbGZcIikpOmwucmVzb2x2ZSh0LGUpfSl9ZnVuY3Rpb24gYyhlKXt2YXIgdD1lJiZlLnRoZW47aWYoZSYmKFwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gZnVuY3Rpb24oKXt0LmFwcGx5KGUsYXJndW1lbnRzKX19ZnVuY3Rpb24gZCh0LGUpe3ZhciByPSExO2Z1bmN0aW9uIG4oZSl7cnx8KHI9ITAsbC5yZWplY3QodCxlKSl9ZnVuY3Rpb24gaShlKXtyfHwocj0hMCxsLnJlc29sdmUodCxlKSl9dmFyIHM9cChmdW5jdGlvbigpe2UoaSxuKX0pO1wiZXJyb3JcIj09PXMuc3RhdHVzJiZuKHMudmFsdWUpfWZ1bmN0aW9uIHAoZSx0KXt2YXIgcj17fTt0cnl7ci52YWx1ZT1lKHQpLHIuc3RhdHVzPVwic3VjY2Vzc1wifWNhdGNoKGUpe3Iuc3RhdHVzPVwiZXJyb3JcIixyLnZhbHVlPWV9cmV0dXJuIHJ9KHQuZXhwb3J0cz1vKS5wcm90b3R5cGUuZmluYWxseT1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXJldHVybiB0aGlzO3ZhciByPXRoaXMuY29uc3RydWN0b3I7cmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gci5yZXNvbHZlKHQoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiBlfSl9LGZ1bmN0aW9uKGUpe3JldHVybiByLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgZX0pfSl9LG8ucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0sby5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJnRoaXMuc3RhdGU9PT1hfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZ0aGlzLnN0YXRlPT09cylyZXR1cm4gdGhpczt2YXIgcj1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih1KTt0aGlzLnN0YXRlIT09bj9mKHIsdGhpcy5zdGF0ZT09PWE/ZTp0LHRoaXMub3V0Y29tZSk6dGhpcy5xdWV1ZS5wdXNoKG5ldyBoKHIsZSx0KSk7cmV0dXJuIHJ9LGgucHJvdG90eXBlLmNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24oZSl7bC5yZXNvbHZlKHRoaXMucHJvbWlzZSxlKX0saC5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkPWZ1bmN0aW9uKGUpe2YodGhpcy5wcm9taXNlLHRoaXMub25GdWxmaWxsZWQsZSl9LGgucHJvdG90eXBlLmNhbGxSZWplY3RlZD1mdW5jdGlvbihlKXtsLnJlamVjdCh0aGlzLnByb21pc2UsZSl9LGgucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkPWZ1bmN0aW9uKGUpe2YodGhpcy5wcm9taXNlLHRoaXMub25SZWplY3RlZCxlKX0sbC5yZXNvbHZlPWZ1bmN0aW9uKGUsdCl7dmFyIHI9cChjLHQpO2lmKFwiZXJyb3JcIj09PXIuc3RhdHVzKXJldHVybiBsLnJlamVjdChlLHIudmFsdWUpO3ZhciBuPXIudmFsdWU7aWYobilkKGUsbik7ZWxzZXtlLnN0YXRlPWEsZS5vdXRjb21lPXQ7Zm9yKHZhciBpPS0xLHM9ZS5xdWV1ZS5sZW5ndGg7KytpPHM7KWUucXVldWVbaV0uY2FsbEZ1bGZpbGxlZCh0KX1yZXR1cm4gZX0sbC5yZWplY3Q9ZnVuY3Rpb24oZSx0KXtlLnN0YXRlPXMsZS5vdXRjb21lPXQ7Zm9yKHZhciByPS0xLG49ZS5xdWV1ZS5sZW5ndGg7KytyPG47KWUucXVldWVbcl0uY2FsbFJlamVjdGVkKHQpO3JldHVybiBlfSxvLnJlc29sdmU9ZnVuY3Rpb24oZSl7aWYoZSBpbnN0YW5jZW9mIHRoaXMpcmV0dXJuIGU7cmV0dXJuIGwucmVzb2x2ZShuZXcgdGhpcyh1KSxlKX0sby5yZWplY3Q9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IHRoaXModSk7cmV0dXJuIGwucmVqZWN0KHQsZSl9LG8uYWxsPWZ1bmN0aW9uKGUpe3ZhciByPXRoaXM7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKXJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKFwibXVzdCBiZSBhbiBhcnJheVwiKSk7dmFyIG49ZS5sZW5ndGgsaT0hMTtpZighbilyZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTt2YXIgcz1uZXcgQXJyYXkobiksYT0wLHQ9LTEsbz1uZXcgdGhpcyh1KTtmb3IoOysrdDxuOyloKGVbdF0sdCk7cmV0dXJuIG87ZnVuY3Rpb24gaChlLHQpe3IucmVzb2x2ZShlKS50aGVuKGZ1bmN0aW9uKGUpe3NbdF09ZSwrK2EhPT1ufHxpfHwoaT0hMCxsLnJlc29sdmUobyxzKSl9LGZ1bmN0aW9uKGUpe2l8fChpPSEwLGwucmVqZWN0KG8sZSkpfSl9fSxvLnJhY2U9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgcj1lLmxlbmd0aCxuPSExO2lmKCFyKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBpPS0xLHM9bmV3IHRoaXModSk7Zm9yKDsrK2k8cjspYT1lW2ldLHQucmVzb2x2ZShhKS50aGVuKGZ1bmN0aW9uKGUpe258fChuPSEwLGwucmVzb2x2ZShzLGUpKX0sZnVuY3Rpb24oZSl7bnx8KG49ITAsbC5yZWplY3QocyxlKSl9KTt2YXIgYTtyZXR1cm4gc319LHtpbW1lZGlhdGU6MzZ9XSwzODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPXt9OygwLGUoXCIuL2xpYi91dGlscy9jb21tb25cIikuYXNzaWduKShuLGUoXCIuL2xpYi9kZWZsYXRlXCIpLGUoXCIuL2xpYi9pbmZsYXRlXCIpLGUoXCIuL2xpYi96bGliL2NvbnN0YW50c1wiKSksdC5leHBvcnRzPW59LHtcIi4vbGliL2RlZmxhdGVcIjozOSxcIi4vbGliL2luZmxhdGVcIjo0MCxcIi4vbGliL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9saWIvemxpYi9jb25zdGFudHNcIjo0NH1dLDM5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGE9ZShcIi4vemxpYi9kZWZsYXRlXCIpLG89ZShcIi4vdXRpbHMvY29tbW9uXCIpLGg9ZShcIi4vdXRpbHMvc3RyaW5nc1wiKSxpPWUoXCIuL3psaWIvbWVzc2FnZXNcIikscz1lKFwiLi96bGliL3pzdHJlYW1cIiksdT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLGw9MCxmPS0xLGM9MCxkPTg7ZnVuY3Rpb24gcChlKXtpZighKHRoaXMgaW5zdGFuY2VvZiBwKSlyZXR1cm4gbmV3IHAoZSk7dGhpcy5vcHRpb25zPW8uYXNzaWduKHtsZXZlbDpmLG1ldGhvZDpkLGNodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjE1LG1lbUxldmVsOjgsc3RyYXRlZ3k6Yyx0bzpcIlwifSxlfHx7fSk7dmFyIHQ9dGhpcy5vcHRpb25zO3QucmF3JiYwPHQud2luZG93Qml0cz90LndpbmRvd0JpdHM9LXQud2luZG93Qml0czp0Lmd6aXAmJjA8dC53aW5kb3dCaXRzJiZ0LndpbmRvd0JpdHM8MTYmJih0LndpbmRvd0JpdHMrPTE2KSx0aGlzLmVycj0wLHRoaXMubXNnPVwiXCIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IHMsdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciByPWEuZGVmbGF0ZUluaXQyKHRoaXMuc3RybSx0LmxldmVsLHQubWV0aG9kLHQud2luZG93Qml0cyx0Lm1lbUxldmVsLHQuc3RyYXRlZ3kpO2lmKHIhPT1sKXRocm93IG5ldyBFcnJvcihpW3JdKTtpZih0LmhlYWRlciYmYS5kZWZsYXRlU2V0SGVhZGVyKHRoaXMuc3RybSx0LmhlYWRlciksdC5kaWN0aW9uYXJ5KXt2YXIgbjtpZihuPVwic3RyaW5nXCI9PXR5cGVvZiB0LmRpY3Rpb25hcnk/aC5zdHJpbmcyYnVmKHQuZGljdGlvbmFyeSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKHQuZGljdGlvbmFyeSk/bmV3IFVpbnQ4QXJyYXkodC5kaWN0aW9uYXJ5KTp0LmRpY3Rpb25hcnksKHI9YS5kZWZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sbikpIT09bCl0aHJvdyBuZXcgRXJyb3IoaVtyXSk7dGhpcy5fZGljdF9zZXQ9ITB9fWZ1bmN0aW9uIG4oZSx0KXt2YXIgcj1uZXcgcCh0KTtpZihyLnB1c2goZSwhMCksci5lcnIpdGhyb3cgci5tc2d8fGlbci5lcnJdO3JldHVybiByLnJlc3VsdH1wLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpPXRoaXMuc3RybSxzPXRoaXMub3B0aW9ucy5jaHVua1NpemU7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtuPXQ9PT1+fnQ/dDohMD09PXQ/NDowLFwic3RyaW5nXCI9PXR5cGVvZiBlP2kuaW5wdXQ9aC5zdHJpbmcyYnVmKGUpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PXUuY2FsbChlKT9pLmlucHV0PW5ldyBVaW50OEFycmF5KGUpOmkuaW5wdXQ9ZSxpLm5leHRfaW49MCxpLmF2YWlsX2luPWkuaW5wdXQubGVuZ3RoO2Rve2lmKDA9PT1pLmF2YWlsX291dCYmKGkub3V0cHV0PW5ldyBvLkJ1ZjgocyksaS5uZXh0X291dD0wLGkuYXZhaWxfb3V0PXMpLDEhPT0ocj1hLmRlZmxhdGUoaSxuKSkmJnIhPT1sKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7MCE9PWkuYXZhaWxfb3V0JiYoMCE9PWkuYXZhaWxfaW58fDQhPT1uJiYyIT09bil8fChcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMub25EYXRhKGguYnVmMmJpbnN0cmluZyhvLnNocmlua0J1ZihpLm91dHB1dCxpLm5leHRfb3V0KSkpOnRoaXMub25EYXRhKG8uc2hyaW5rQnVmKGkub3V0cHV0LGkubmV4dF9vdXQpKSl9d2hpbGUoKDA8aS5hdmFpbF9pbnx8MD09PWkuYXZhaWxfb3V0KSYmMSE9PXIpO3JldHVybiA0PT09bj8ocj1hLmRlZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHIpLHRoaXMuZW5kZWQ9ITAscj09PWwpOjIhPT1ufHwodGhpcy5vbkVuZChsKSwhKGkuYXZhaWxfb3V0PTApKX0scC5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2h1bmtzLnB1c2goZSl9LHAucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKGUpe2U9PT1sJiYoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLnJlc3VsdD10aGlzLmNodW5rcy5qb2luKFwiXCIpOnRoaXMucmVzdWx0PW8uZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPWUsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ30sci5EZWZsYXRlPXAsci5kZWZsYXRlPW4sci5kZWZsYXRlUmF3PWZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dHx8e30pLnJhdz0hMCxuKGUsdCl9LHIuZ3ppcD1mdW5jdGlvbihlLHQpe3JldHVybih0PXR8fHt9KS5nemlwPSEwLG4oZSx0KX19LHtcIi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL3V0aWxzL3N0cmluZ3NcIjo0MixcIi4vemxpYi9kZWZsYXRlXCI6NDYsXCIuL3psaWIvbWVzc2FnZXNcIjo1MSxcIi4vemxpYi96c3RyZWFtXCI6NTN9XSw0MDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBjPWUoXCIuL3psaWIvaW5mbGF0ZVwiKSxkPWUoXCIuL3V0aWxzL2NvbW1vblwiKSxwPWUoXCIuL3V0aWxzL3N0cmluZ3NcIiksbT1lKFwiLi96bGliL2NvbnN0YW50c1wiKSxuPWUoXCIuL3psaWIvbWVzc2FnZXNcIiksaT1lKFwiLi96bGliL3pzdHJlYW1cIikscz1lKFwiLi96bGliL2d6aGVhZGVyXCIpLF89T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztmdW5jdGlvbiBhKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGEpKXJldHVybiBuZXcgYShlKTt0aGlzLm9wdGlvbnM9ZC5hc3NpZ24oe2NodW5rU2l6ZToxNjM4NCx3aW5kb3dCaXRzOjAsdG86XCJcIn0sZXx8e30pO3ZhciB0PXRoaXMub3B0aW9uczt0LnJhdyYmMDw9dC53aW5kb3dCaXRzJiZ0LndpbmRvd0JpdHM8MTYmJih0LndpbmRvd0JpdHM9LXQud2luZG93Qml0cywwPT09dC53aW5kb3dCaXRzJiYodC53aW5kb3dCaXRzPS0xNSkpLCEoMDw9dC53aW5kb3dCaXRzJiZ0LndpbmRvd0JpdHM8MTYpfHxlJiZlLndpbmRvd0JpdHN8fCh0LndpbmRvd0JpdHMrPTMyKSwxNTx0LndpbmRvd0JpdHMmJnQud2luZG93Qml0czw0OCYmMD09KDE1JnQud2luZG93Qml0cykmJih0LndpbmRvd0JpdHN8PTE1KSx0aGlzLmVycj0wLHRoaXMubXNnPVwiXCIsdGhpcy5lbmRlZD0hMSx0aGlzLmNodW5rcz1bXSx0aGlzLnN0cm09bmV3IGksdGhpcy5zdHJtLmF2YWlsX291dD0wO3ZhciByPWMuaW5mbGF0ZUluaXQyKHRoaXMuc3RybSx0LndpbmRvd0JpdHMpO2lmKHIhPT1tLlpfT0spdGhyb3cgbmV3IEVycm9yKG5bcl0pO3RoaXMuaGVhZGVyPW5ldyBzLGMuaW5mbGF0ZUdldEhlYWRlcih0aGlzLnN0cm0sdGhpcy5oZWFkZXIpfWZ1bmN0aW9uIG8oZSx0KXt2YXIgcj1uZXcgYSh0KTtpZihyLnB1c2goZSwhMCksci5lcnIpdGhyb3cgci5tc2d8fG5bci5lcnJdO3JldHVybiByLnJlc3VsdH1hLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYSxvLGg9dGhpcy5zdHJtLHU9dGhpcy5vcHRpb25zLmNodW5rU2l6ZSxsPXRoaXMub3B0aW9ucy5kaWN0aW9uYXJ5LGY9ITE7aWYodGhpcy5lbmRlZClyZXR1cm4hMTtuPXQ9PT1+fnQ/dDohMD09PXQ/bS5aX0ZJTklTSDptLlpfTk9fRkxVU0gsXCJzdHJpbmdcIj09dHlwZW9mIGU/aC5pbnB1dD1wLmJpbnN0cmluZzJidWYoZSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Xy5jYWxsKGUpP2guaW5wdXQ9bmV3IFVpbnQ4QXJyYXkoZSk6aC5pbnB1dD1lLGgubmV4dF9pbj0wLGguYXZhaWxfaW49aC5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWguYXZhaWxfb3V0JiYoaC5vdXRwdXQ9bmV3IGQuQnVmOCh1KSxoLm5leHRfb3V0PTAsaC5hdmFpbF9vdXQ9dSksKHI9Yy5pbmZsYXRlKGgsbS5aX05PX0ZMVVNIKSk9PT1tLlpfTkVFRF9ESUNUJiZsJiYobz1cInN0cmluZ1wiPT10eXBlb2YgbD9wLnN0cmluZzJidWYobCk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09Xy5jYWxsKGwpP25ldyBVaW50OEFycmF5KGwpOmwscj1jLmluZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxvKSkscj09PW0uWl9CVUZfRVJST1ImJiEwPT09ZiYmKHI9bS5aX09LLGY9ITEpLHIhPT1tLlpfU1RSRUFNX0VORCYmciE9PW0uWl9PSylyZXR1cm4gdGhpcy5vbkVuZChyKSwhKHRoaXMuZW5kZWQ9ITApO2gubmV4dF9vdXQmJigwIT09aC5hdmFpbF9vdXQmJnIhPT1tLlpfU1RSRUFNX0VORCYmKDAhPT1oLmF2YWlsX2lufHxuIT09bS5aX0ZJTklTSCYmbiE9PW0uWl9TWU5DX0ZMVVNIKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/KGk9cC51dGY4Ym9yZGVyKGgub3V0cHV0LGgubmV4dF9vdXQpLHM9aC5uZXh0X291dC1pLGE9cC5idWYyc3RyaW5nKGgub3V0cHV0LGkpLGgubmV4dF9vdXQ9cyxoLmF2YWlsX291dD11LXMscyYmZC5hcnJheVNldChoLm91dHB1dCxoLm91dHB1dCxpLHMsMCksdGhpcy5vbkRhdGEoYSkpOnRoaXMub25EYXRhKGQuc2hyaW5rQnVmKGgub3V0cHV0LGgubmV4dF9vdXQpKSkpLDA9PT1oLmF2YWlsX2luJiYwPT09aC5hdmFpbF9vdXQmJihmPSEwKX13aGlsZSgoMDxoLmF2YWlsX2lufHwwPT09aC5hdmFpbF9vdXQpJiZyIT09bS5aX1NUUkVBTV9FTkQpO3JldHVybiByPT09bS5aX1NUUkVBTV9FTkQmJihuPW0uWl9GSU5JU0gpLG49PT1tLlpfRklOSVNIPyhyPWMuaW5mbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bS5aX09LKTpuIT09bS5aX1NZTkNfRkxVU0h8fCh0aGlzLm9uRW5kKG0uWl9PSyksIShoLmF2YWlsX291dD0wKSl9LGEucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbihlKXt0aGlzLmNodW5rcy5wdXNoKGUpfSxhLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbihlKXtlPT09bS5aX09LJiYoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLnJlc3VsdD10aGlzLmNodW5rcy5qb2luKFwiXCIpOnRoaXMucmVzdWx0PWQuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcykpLHRoaXMuY2h1bmtzPVtdLHRoaXMuZXJyPWUsdGhpcy5tc2c9dGhpcy5zdHJtLm1zZ30sci5JbmZsYXRlPWEsci5pbmZsYXRlPW8sci5pbmZsYXRlUmF3PWZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dHx8e30pLnJhdz0hMCxvKGUsdCl9LHIudW5nemlwPW99LHtcIi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL3V0aWxzL3N0cmluZ3NcIjo0MixcIi4vemxpYi9jb25zdGFudHNcIjo0NCxcIi4vemxpYi9nemhlYWRlclwiOjQ3LFwiLi96bGliL2luZmxhdGVcIjo0OSxcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MTZBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEludDMyQXJyYXk7ci5hc3NpZ249ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTt0Lmxlbmd0aDspe3ZhciByPXQuc2hpZnQoKTtpZihyKXtpZihcIm9iamVjdFwiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKHIrXCJtdXN0IGJlIG5vbi1vYmplY3RcIik7Zm9yKHZhciBuIGluIHIpci5oYXNPd25Qcm9wZXJ0eShuKSYmKGVbbl09cltuXSl9fXJldHVybiBlfSxyLnNocmlua0J1Zj1mdW5jdGlvbihlLHQpe3JldHVybiBlLmxlbmd0aD09PXQ/ZTplLnN1YmFycmF5P2Uuc3ViYXJyYXkoMCx0KTooZS5sZW5ndGg9dCxlKX07dmFyIGk9e2FycmF5U2V0OmZ1bmN0aW9uKGUsdCxyLG4saSl7aWYodC5zdWJhcnJheSYmZS5zdWJhcnJheSllLnNldCh0LnN1YmFycmF5KHIscituKSxpKTtlbHNlIGZvcih2YXIgcz0wO3M8bjtzKyspZVtpK3NdPXRbcitzXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGE7Zm9yKHQ9bj0wLHI9ZS5sZW5ndGg7dDxyO3QrKyluKz1lW3RdLmxlbmd0aDtmb3IoYT1uZXcgVWludDhBcnJheShuKSx0PWk9MCxyPWUubGVuZ3RoO3Q8cjt0Kyspcz1lW3RdLGEuc2V0KHMsaSksaSs9cy5sZW5ndGg7cmV0dXJuIGF9fSxzPXthcnJheVNldDpmdW5jdGlvbihlLHQscixuLGkpe2Zvcih2YXIgcz0wO3M8bjtzKyspZVtpK3NdPXRbcitzXX0sZmxhdHRlbkNodW5rczpmdW5jdGlvbihlKXtyZXR1cm5bXS5jb25jYXQuYXBwbHkoW10sZSl9fTtyLnNldFR5cGVkPWZ1bmN0aW9uKGUpe2U/KHIuQnVmOD1VaW50OEFycmF5LHIuQnVmMTY9VWludDE2QXJyYXksci5CdWYzMj1JbnQzMkFycmF5LHIuYXNzaWduKHIsaSkpOihyLkJ1Zjg9QXJyYXksci5CdWYxNj1BcnJheSxyLkJ1ZjMyPUFycmF5LHIuYXNzaWduKHIscykpfSxyLnNldFR5cGVkKG4pfSx7fV0sNDI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD1lKFwiLi9jb21tb25cIiksaT0hMCxzPSEwO3RyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsWzBdKX1jYXRjaChlKXtpPSExfXRyeXtTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsbmV3IFVpbnQ4QXJyYXkoMSkpfWNhdGNoKGUpe3M9ITF9Zm9yKHZhciB1PW5ldyBoLkJ1ZjgoMjU2KSxuPTA7bjwyNTY7bisrKXVbbl09MjUyPD1uPzY6MjQ4PD1uPzU6MjQwPD1uPzQ6MjI0PD1uPzM6MTkyPD1uPzI6MTtmdW5jdGlvbiBsKGUsdCl7aWYodDw2NTUzNyYmKGUuc3ViYXJyYXkmJnN8fCFlLnN1YmFycmF5JiZpKSlyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGguc2hyaW5rQnVmKGUsdCkpO2Zvcih2YXIgcj1cIlwiLG49MDtuPHQ7bisrKXIrPVN0cmluZy5mcm9tQ2hhckNvZGUoZVtuXSk7cmV0dXJuIHJ9dVsyNTRdPXVbMjU0XT0xLHIuc3RyaW5nMmJ1Zj1mdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGE9ZS5sZW5ndGgsbz0wO2ZvcihpPTA7aTxhO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKHQ9bmV3IGguQnVmOChvKSxpPXM9MDtzPG87aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykscjwxMjg/dFtzKytdPXI6KHI8MjA0OD90W3MrK109MTkyfHI+Pj42OihyPDY1NTM2P3RbcysrXT0yMjR8cj4+PjEyOih0W3MrK109MjQwfHI+Pj4xOCx0W3MrK109MTI4fHI+Pj4xMiY2MyksdFtzKytdPTEyOHxyPj4+NiY2MyksdFtzKytdPTEyOHw2MyZyKTtyZXR1cm4gdH0sci5idWYyYmluc3RyaW5nPWZ1bmN0aW9uKGUpe3JldHVybiBsKGUsZS5sZW5ndGgpfSxyLmJpbnN0cmluZzJidWY9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PW5ldyBoLkJ1ZjgoZS5sZW5ndGgpLHI9MCxuPXQubGVuZ3RoO3I8bjtyKyspdFtyXT1lLmNoYXJDb2RlQXQocik7cmV0dXJuIHR9LHIuYnVmMnN0cmluZz1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGE9dHx8ZS5sZW5ndGgsbz1uZXcgQXJyYXkoMiphKTtmb3Iocj1uPTA7cjxhOylpZigoaT1lW3IrK10pPDEyOClvW24rK109aTtlbHNlIGlmKDQ8KHM9dVtpXSkpb1tuKytdPTY1NTMzLHIrPXMtMTtlbHNle2ZvcihpJj0yPT09cz8zMTozPT09cz8xNTo3OzE8cyYmcjxhOylpPWk8PDZ8NjMmZVtyKytdLHMtLTsxPHM/b1tuKytdPTY1NTMzOmk8NjU1MzY/b1tuKytdPWk6KGktPTY1NTM2LG9bbisrXT01NTI5NnxpPj4xMCYxMDIzLG9bbisrXT01NjMyMHwxMDIzJmkpfXJldHVybiBsKG8sbil9LHIudXRmOGJvcmRlcj1mdW5jdGlvbihlLHQpe3ZhciByO2ZvcigodD10fHxlLmxlbmd0aCk+ZS5sZW5ndGgmJih0PWUubGVuZ3RoKSxyPXQtMTswPD1yJiYxMjg9PSgxOTImZVtyXSk7KXItLTtyZXR1cm4gcjwwP3Q6MD09PXI/dDpyK3VbZVtyXV0+dD9yOnR9fSx7XCIuL2NvbW1vblwiOjQxfV0sNDM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7Zm9yKHZhciBpPTY1NTM1JmV8MCxzPWU+Pj4xNiY2NTUzNXwwLGE9MDswIT09cjspe2ZvcihyLT1hPTJlMzxyPzJlMzpyO3M9cysoaT1pK3RbbisrXXwwKXwwLC0tYTspO2klPTY1NTIxLHMlPTY1NTIxfXJldHVybiBpfHM8PDE2fDB9fSx7fV0sNDQ6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9e1pfTk9fRkxVU0g6MCxaX1BBUlRJQUxfRkxVU0g6MSxaX1NZTkNfRkxVU0g6MixaX0ZVTExfRkxVU0g6MyxaX0ZJTklTSDo0LFpfQkxPQ0s6NSxaX1RSRUVTOjYsWl9PSzowLFpfU1RSRUFNX0VORDoxLFpfTkVFRF9ESUNUOjIsWl9FUlJOTzotMSxaX1NUUkVBTV9FUlJPUjotMixaX0RBVEFfRVJST1I6LTMsWl9CVUZfRVJST1I6LTUsWl9OT19DT01QUkVTU0lPTjowLFpfQkVTVF9TUEVFRDoxLFpfQkVTVF9DT01QUkVTU0lPTjo5LFpfREVGQVVMVF9DT01QUkVTU0lPTjotMSxaX0ZJTFRFUkVEOjEsWl9IVUZGTUFOX09OTFk6MixaX1JMRTozLFpfRklYRUQ6NCxaX0RFRkFVTFRfU1RSQVRFR1k6MCxaX0JJTkFSWTowLFpfVEVYVDoxLFpfVU5LTk9XTjoyLFpfREVGTEFURUQ6OH19LHt9XSw0NTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9W10scj0wO3I8MjU2O3IrKyl7ZT1yO2Zvcih2YXIgbj0wO248ODtuKyspZT0xJmU/Mzk4ODI5MjM4NF5lPj4+MTplPj4+MTt0W3JdPWV9cmV0dXJuIHR9KCk7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4pe3ZhciBpPW8scz1uK3I7ZV49LTE7Zm9yKHZhciBhPW47YTxzO2ErKyllPWU+Pj44XmlbMjU1JihlXnRbYV0pXTtyZXR1cm4tMV5lfX0se31dLDQ2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGgsYz1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLHU9ZShcIi4vdHJlZXNcIiksZD1lKFwiLi9hZGxlcjMyXCIpLHA9ZShcIi4vY3JjMzJcIiksbj1lKFwiLi9tZXNzYWdlc1wiKSxsPTAsZj00LG09MCxfPS0yLGc9LTEsYj00LGk9Mix2PTgseT05LHM9Mjg2LGE9MzAsbz0xOSx3PTIqcysxLGs9MTUseD0zLFM9MjU4LHo9Uyt4KzEsQz00MixFPTExMyxBPTEsST0yLE89MyxCPTQ7ZnVuY3Rpb24gUihlLHQpe3JldHVybiBlLm1zZz1uW3RdLHR9ZnVuY3Rpb24gVChlKXtyZXR1cm4oZTw8MSktKDQ8ZT85OjApfWZ1bmN0aW9uIEQoZSl7Zm9yKHZhciB0PWUubGVuZ3RoOzA8PS0tdDspZVt0XT0wfWZ1bmN0aW9uIEYoZSl7dmFyIHQ9ZS5zdGF0ZSxyPXQucGVuZGluZztyPmUuYXZhaWxfb3V0JiYocj1lLmF2YWlsX291dCksMCE9PXImJihjLmFycmF5U2V0KGUub3V0cHV0LHQucGVuZGluZ19idWYsdC5wZW5kaW5nX291dCxyLGUubmV4dF9vdXQpLGUubmV4dF9vdXQrPXIsdC5wZW5kaW5nX291dCs9cixlLnRvdGFsX291dCs9cixlLmF2YWlsX291dC09cix0LnBlbmRpbmctPXIsMD09PXQucGVuZGluZyYmKHQucGVuZGluZ19vdXQ9MCkpfWZ1bmN0aW9uIE4oZSx0KXt1Ll90cl9mbHVzaF9ibG9jayhlLDA8PWUuYmxvY2tfc3RhcnQ/ZS5ibG9ja19zdGFydDotMSxlLnN0cnN0YXJ0LWUuYmxvY2tfc3RhcnQsdCksZS5ibG9ja19zdGFydD1lLnN0cnN0YXJ0LEYoZS5zdHJtKX1mdW5jdGlvbiBVKGUsdCl7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109dH1mdW5jdGlvbiBQKGUsdCl7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109dD4+PjgmMjU1LGUucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPTI1NSZ0fWZ1bmN0aW9uIEwoZSx0KXt2YXIgcixuLGk9ZS5tYXhfY2hhaW5fbGVuZ3RoLHM9ZS5zdHJzdGFydCxhPWUucHJldl9sZW5ndGgsbz1lLm5pY2VfbWF0Y2gsaD1lLnN0cnN0YXJ0PmUud19zaXplLXo/ZS5zdHJzdGFydC0oZS53X3NpemUteik6MCx1PWUud2luZG93LGw9ZS53X21hc2ssZj1lLnByZXYsYz1lLnN0cnN0YXJ0K1MsZD11W3MrYS0xXSxwPXVbcythXTtlLnByZXZfbGVuZ3RoPj1lLmdvb2RfbWF0Y2gmJihpPj49Miksbz5lLmxvb2thaGVhZCYmKG89ZS5sb29rYWhlYWQpO2Rve2lmKHVbKHI9dCkrYV09PT1wJiZ1W3IrYS0xXT09PWQmJnVbcl09PT11W3NdJiZ1Wysrcl09PT11W3MrMV0pe3MrPTIscisrO2Rve313aGlsZSh1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmczxjKTtpZihuPVMtKGMtcykscz1jLVMsYTxuKXtpZihlLm1hdGNoX3N0YXJ0PXQsbzw9KGE9bikpYnJlYWs7ZD11W3MrYS0xXSxwPXVbcythXX19fXdoaWxlKCh0PWZbdCZsXSk+aCYmMCE9LS1pKTtyZXR1cm4gYTw9ZS5sb29rYWhlYWQ/YTplLmxvb2thaGVhZH1mdW5jdGlvbiBqKGUpe3ZhciB0LHIsbixpLHMsYSxvLGgsdSxsLGY9ZS53X3NpemU7ZG97aWYoaT1lLndpbmRvd19zaXplLWUubG9va2FoZWFkLWUuc3Ryc3RhcnQsZS5zdHJzdGFydD49ZisoZi16KSl7Zm9yKGMuYXJyYXlTZXQoZS53aW5kb3csZS53aW5kb3csZixmLDApLGUubWF0Y2hfc3RhcnQtPWYsZS5zdHJzdGFydC09ZixlLmJsb2NrX3N0YXJ0LT1mLHQ9cj1lLmhhc2hfc2l6ZTtuPWUuaGVhZFstLXRdLGUuaGVhZFt0XT1mPD1uP24tZjowLC0tcjspO2Zvcih0PXI9ZjtuPWUucHJldlstLXRdLGUucHJldlt0XT1mPD1uP24tZjowLC0tcjspO2krPWZ9aWYoMD09PWUuc3RybS5hdmFpbF9pbilicmVhaztpZihhPWUuc3RybSxvPWUud2luZG93LGg9ZS5zdHJzdGFydCtlLmxvb2thaGVhZCx1PWksbD12b2lkIDAsbD1hLmF2YWlsX2luLHU8bCYmKGw9dSkscj0wPT09bD8wOihhLmF2YWlsX2luLT1sLGMuYXJyYXlTZXQobyxhLmlucHV0LGEubmV4dF9pbixsLGgpLDE9PT1hLnN0YXRlLndyYXA/YS5hZGxlcj1kKGEuYWRsZXIsbyxsLGgpOjI9PT1hLnN0YXRlLndyYXAmJihhLmFkbGVyPXAoYS5hZGxlcixvLGwsaCkpLGEubmV4dF9pbis9bCxhLnRvdGFsX2luKz1sLGwpLGUubG9va2FoZWFkKz1yLGUubG9va2FoZWFkK2UuaW5zZXJ0Pj14KWZvcihzPWUuc3Ryc3RhcnQtZS5pbnNlcnQsZS5pbnNfaD1lLndpbmRvd1tzXSxlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbcysxXSkmZS5oYXNoX21hc2s7ZS5pbnNlcnQmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbcyt4LTFdKSZlLmhhc2hfbWFzayxlLnByZXZbcyZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1zLHMrKyxlLmluc2VydC0tLCEoZS5sb29rYWhlYWQrZS5pbnNlcnQ8eCkpOyk7fXdoaWxlKGUubG9va2FoZWFkPHomJjAhPT1lLnN0cm0uYXZhaWxfaW4pfWZ1bmN0aW9uIFooZSx0KXtmb3IodmFyIHIsbjs7KXtpZihlLmxvb2thaGVhZDx6KXtpZihqKGUpLGUubG9va2FoZWFkPHomJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31pZihyPTAsZS5sb29rYWhlYWQ+PXgmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLDAhPT1yJiZlLnN0cnN0YXJ0LXI8PWUud19zaXplLXomJihlLm1hdGNoX2xlbmd0aD1MKGUscikpLGUubWF0Y2hfbGVuZ3RoPj14KWlmKG49dS5fdHJfdGFsbHkoZSxlLnN0cnN0YXJ0LWUubWF0Y2hfc3RhcnQsZS5tYXRjaF9sZW5ndGgteCksZS5sb29rYWhlYWQtPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPD1lLm1heF9sYXp5X21hdGNoJiZlLmxvb2thaGVhZD49eCl7Zm9yKGUubWF0Y2hfbGVuZ3RoLS07ZS5zdHJzdGFydCsrLGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCwwIT0tLWUubWF0Y2hfbGVuZ3RoOyk7ZS5zdHJzdGFydCsrfWVsc2UgZS5zdHJzdGFydCs9ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg9MCxlLmluc19oPWUud2luZG93W2Uuc3Ryc3RhcnRdLGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0KzFdKSZlLmhhc2hfbWFzaztlbHNlIG49dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnRdKSxlLmxvb2thaGVhZC0tLGUuc3Ryc3RhcnQrKztpZihuJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PWUuc3Ryc3RhcnQ8eC0xP2Uuc3Ryc3RhcnQ6eC0xLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6ZS5sYXN0X2xpdCYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpP0E6SX1mdW5jdGlvbiBXKGUsdCl7Zm9yKHZhciByLG4saTs7KXtpZihlLmxvb2thaGVhZDx6KXtpZihqKGUpLGUubG9va2FoZWFkPHomJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31pZihyPTAsZS5sb29rYWhlYWQ+PXgmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLGUucHJldl9sZW5ndGg9ZS5tYXRjaF9sZW5ndGgsZS5wcmV2X21hdGNoPWUubWF0Y2hfc3RhcnQsZS5tYXRjaF9sZW5ndGg9eC0xLDAhPT1yJiZlLnByZXZfbGVuZ3RoPGUubWF4X2xhenlfbWF0Y2gmJmUuc3Ryc3RhcnQtcjw9ZS53X3NpemUteiYmKGUubWF0Y2hfbGVuZ3RoPUwoZSxyKSxlLm1hdGNoX2xlbmd0aDw9NSYmKDE9PT1lLnN0cmF0ZWd5fHxlLm1hdGNoX2xlbmd0aD09PXgmJjQwOTY8ZS5zdHJzdGFydC1lLm1hdGNoX3N0YXJ0KSYmKGUubWF0Y2hfbGVuZ3RoPXgtMSkpLGUucHJldl9sZW5ndGg+PXgmJmUubWF0Y2hfbGVuZ3RoPD1lLnByZXZfbGVuZ3RoKXtmb3IoaT1lLnN0cnN0YXJ0K2UubG9va2FoZWFkLXgsbj11Ll90cl90YWxseShlLGUuc3Ryc3RhcnQtMS1lLnByZXZfbWF0Y2gsZS5wcmV2X2xlbmd0aC14KSxlLmxvb2thaGVhZC09ZS5wcmV2X2xlbmd0aC0xLGUucHJldl9sZW5ndGgtPTI7KytlLnN0cnN0YXJ0PD1pJiYoZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0KSwwIT0tLWUucHJldl9sZW5ndGg7KTtpZihlLm1hdGNoX2F2YWlsYWJsZT0wLGUubWF0Y2hfbGVuZ3RoPXgtMSxlLnN0cnN0YXJ0KyssbiYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfWVsc2UgaWYoZS5tYXRjaF9hdmFpbGFibGUpe2lmKChuPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0LTFdKSkmJk4oZSwhMSksZS5zdHJzdGFydCsrLGUubG9va2FoZWFkLS0sMD09PWUuc3RybS5hdmFpbF9vdXQpcmV0dXJuIEF9ZWxzZSBlLm1hdGNoX2F2YWlsYWJsZT0xLGUuc3Ryc3RhcnQrKyxlLmxvb2thaGVhZC0tfXJldHVybiBlLm1hdGNoX2F2YWlsYWJsZSYmKG49dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnQtMV0pLGUubWF0Y2hfYXZhaWxhYmxlPTApLGUuaW5zZXJ0PWUuc3Ryc3RhcnQ8eC0xP2Uuc3Ryc3RhcnQ6eC0xLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6ZS5sYXN0X2xpdCYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpP0E6SX1mdW5jdGlvbiBNKGUsdCxyLG4saSl7dGhpcy5nb29kX2xlbmd0aD1lLHRoaXMubWF4X2xhenk9dCx0aGlzLm5pY2VfbGVuZ3RoPXIsdGhpcy5tYXhfY2hhaW49bix0aGlzLmZ1bmM9aX1mdW5jdGlvbiBIKCl7dGhpcy5zdHJtPW51bGwsdGhpcy5zdGF0dXM9MCx0aGlzLnBlbmRpbmdfYnVmPW51bGwsdGhpcy5wZW5kaW5nX2J1Zl9zaXplPTAsdGhpcy5wZW5kaW5nX291dD0wLHRoaXMucGVuZGluZz0wLHRoaXMud3JhcD0wLHRoaXMuZ3poZWFkPW51bGwsdGhpcy5nemluZGV4PTAsdGhpcy5tZXRob2Q9dix0aGlzLmxhc3RfZmx1c2g9LTEsdGhpcy53X3NpemU9MCx0aGlzLndfYml0cz0wLHRoaXMud19tYXNrPTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLndpbmRvd19zaXplPTAsdGhpcy5wcmV2PW51bGwsdGhpcy5oZWFkPW51bGwsdGhpcy5pbnNfaD0wLHRoaXMuaGFzaF9zaXplPTAsdGhpcy5oYXNoX2JpdHM9MCx0aGlzLmhhc2hfbWFzaz0wLHRoaXMuaGFzaF9zaGlmdD0wLHRoaXMuYmxvY2tfc3RhcnQ9MCx0aGlzLm1hdGNoX2xlbmd0aD0wLHRoaXMucHJldl9tYXRjaD0wLHRoaXMubWF0Y2hfYXZhaWxhYmxlPTAsdGhpcy5zdHJzdGFydD0wLHRoaXMubWF0Y2hfc3RhcnQ9MCx0aGlzLmxvb2thaGVhZD0wLHRoaXMucHJldl9sZW5ndGg9MCx0aGlzLm1heF9jaGFpbl9sZW5ndGg9MCx0aGlzLm1heF9sYXp5X21hdGNoPTAsdGhpcy5sZXZlbD0wLHRoaXMuc3RyYXRlZ3k9MCx0aGlzLmdvb2RfbWF0Y2g9MCx0aGlzLm5pY2VfbWF0Y2g9MCx0aGlzLmR5bl9sdHJlZT1uZXcgYy5CdWYxNigyKncpLHRoaXMuZHluX2R0cmVlPW5ldyBjLkJ1ZjE2KDIqKDIqYSsxKSksdGhpcy5ibF90cmVlPW5ldyBjLkJ1ZjE2KDIqKDIqbysxKSksRCh0aGlzLmR5bl9sdHJlZSksRCh0aGlzLmR5bl9kdHJlZSksRCh0aGlzLmJsX3RyZWUpLHRoaXMubF9kZXNjPW51bGwsdGhpcy5kX2Rlc2M9bnVsbCx0aGlzLmJsX2Rlc2M9bnVsbCx0aGlzLmJsX2NvdW50PW5ldyBjLkJ1ZjE2KGsrMSksdGhpcy5oZWFwPW5ldyBjLkJ1ZjE2KDIqcysxKSxEKHRoaXMuaGVhcCksdGhpcy5oZWFwX2xlbj0wLHRoaXMuaGVhcF9tYXg9MCx0aGlzLmRlcHRoPW5ldyBjLkJ1ZjE2KDIqcysxKSxEKHRoaXMuZGVwdGgpLHRoaXMubF9idWY9MCx0aGlzLmxpdF9idWZzaXplPTAsdGhpcy5sYXN0X2xpdD0wLHRoaXMuZF9idWY9MCx0aGlzLm9wdF9sZW49MCx0aGlzLnN0YXRpY19sZW49MCx0aGlzLm1hdGNoZXM9MCx0aGlzLmluc2VydD0wLHRoaXMuYmlfYnVmPTAsdGhpcy5iaV92YWxpZD0wfWZ1bmN0aW9uIEcoZSl7dmFyIHQ7cmV0dXJuIGUmJmUuc3RhdGU/KGUudG90YWxfaW49ZS50b3RhbF9vdXQ9MCxlLmRhdGFfdHlwZT1pLCh0PWUuc3RhdGUpLnBlbmRpbmc9MCx0LnBlbmRpbmdfb3V0PTAsdC53cmFwPDAmJih0LndyYXA9LXQud3JhcCksdC5zdGF0dXM9dC53cmFwP0M6RSxlLmFkbGVyPTI9PT10LndyYXA/MDoxLHQubGFzdF9mbHVzaD1sLHUuX3RyX2luaXQodCksbSk6UihlLF8pfWZ1bmN0aW9uIEsoZSl7dmFyIHQ9RyhlKTtyZXR1cm4gdD09PW0mJmZ1bmN0aW9uKGUpe2Uud2luZG93X3NpemU9MiplLndfc2l6ZSxEKGUuaGVhZCksZS5tYXhfbGF6eV9tYXRjaD1oW2UubGV2ZWxdLm1heF9sYXp5LGUuZ29vZF9tYXRjaD1oW2UubGV2ZWxdLmdvb2RfbGVuZ3RoLGUubmljZV9tYXRjaD1oW2UubGV2ZWxdLm5pY2VfbGVuZ3RoLGUubWF4X2NoYWluX2xlbmd0aD1oW2UubGV2ZWxdLm1heF9jaGFpbixlLnN0cnN0YXJ0PTAsZS5ibG9ja19zdGFydD0wLGUubG9va2FoZWFkPTAsZS5pbnNlcnQ9MCxlLm1hdGNoX2xlbmd0aD1lLnByZXZfbGVuZ3RoPXgtMSxlLm1hdGNoX2F2YWlsYWJsZT0wLGUuaW5zX2g9MH0oZS5zdGF0ZSksdH1mdW5jdGlvbiBZKGUsdCxyLG4saSxzKXtpZighZSlyZXR1cm4gXzt2YXIgYT0xO2lmKHQ9PT1nJiYodD02KSxuPDA/KGE9MCxuPS1uKToxNTxuJiYoYT0yLG4tPTE2KSxpPDF8fHk8aXx8ciE9PXZ8fG48OHx8MTU8bnx8dDwwfHw5PHR8fHM8MHx8YjxzKXJldHVybiBSKGUsXyk7OD09PW4mJihuPTkpO3ZhciBvPW5ldyBIO3JldHVybihlLnN0YXRlPW8pLnN0cm09ZSxvLndyYXA9YSxvLmd6aGVhZD1udWxsLG8ud19iaXRzPW4sby53X3NpemU9MTw8by53X2JpdHMsby53X21hc2s9by53X3NpemUtMSxvLmhhc2hfYml0cz1pKzcsby5oYXNoX3NpemU9MTw8by5oYXNoX2JpdHMsby5oYXNoX21hc2s9by5oYXNoX3NpemUtMSxvLmhhc2hfc2hpZnQ9fn4oKG8uaGFzaF9iaXRzK3gtMSkveCksby53aW5kb3c9bmV3IGMuQnVmOCgyKm8ud19zaXplKSxvLmhlYWQ9bmV3IGMuQnVmMTYoby5oYXNoX3NpemUpLG8ucHJldj1uZXcgYy5CdWYxNihvLndfc2l6ZSksby5saXRfYnVmc2l6ZT0xPDxpKzYsby5wZW5kaW5nX2J1Zl9zaXplPTQqby5saXRfYnVmc2l6ZSxvLnBlbmRpbmdfYnVmPW5ldyBjLkJ1Zjgoby5wZW5kaW5nX2J1Zl9zaXplKSxvLmRfYnVmPTEqby5saXRfYnVmc2l6ZSxvLmxfYnVmPTMqby5saXRfYnVmc2l6ZSxvLmxldmVsPXQsby5zdHJhdGVneT1zLG8ubWV0aG9kPXIsSyhlKX1oPVtuZXcgTSgwLDAsMCwwLGZ1bmN0aW9uKGUsdCl7dmFyIHI9NjU1MzU7Zm9yKHI+ZS5wZW5kaW5nX2J1Zl9zaXplLTUmJihyPWUucGVuZGluZ19idWZfc2l6ZS01KTs7KXtpZihlLmxvb2thaGVhZDw9MSl7aWYoaihlKSwwPT09ZS5sb29rYWhlYWQmJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31lLnN0cnN0YXJ0Kz1lLmxvb2thaGVhZCxlLmxvb2thaGVhZD0wO3ZhciBuPWUuYmxvY2tfc3RhcnQrcjtpZigoMD09PWUuc3Ryc3RhcnR8fGUuc3Ryc3RhcnQ+PW4pJiYoZS5sb29rYWhlYWQ9ZS5zdHJzdGFydC1uLGUuc3Ryc3RhcnQ9bixOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQTtpZihlLnN0cnN0YXJ0LWUuYmxvY2tfc3RhcnQ+PWUud19zaXplLXomJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9MCx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOihlLnN0cnN0YXJ0PmUuYmxvY2tfc3RhcnQmJihOKGUsITEpLGUuc3RybS5hdmFpbF9vdXQpLEEpfSksbmV3IE0oNCw0LDgsNCxaKSxuZXcgTSg0LDUsMTYsOCxaKSxuZXcgTSg0LDYsMzIsMzIsWiksbmV3IE0oNCw0LDE2LDE2LFcpLG5ldyBNKDgsMTYsMzIsMzIsVyksbmV3IE0oOCwxNiwxMjgsMTI4LFcpLG5ldyBNKDgsMzIsMTI4LDI1NixXKSxuZXcgTSgzMiwxMjgsMjU4LDEwMjQsVyksbmV3IE0oMzIsMjU4LDI1OCw0MDk2LFcpXSxyLmRlZmxhdGVJbml0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIFkoZSx0LHYsMTUsOCwwKX0sci5kZWZsYXRlSW5pdDI9WSxyLmRlZmxhdGVSZXNldD1LLHIuZGVmbGF0ZVJlc2V0S2VlcD1HLHIuZGVmbGF0ZVNldEhlYWRlcj1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZlLnN0YXRlPzIhPT1lLnN0YXRlLndyYXA/XzooZS5zdGF0ZS5nemhlYWQ9dCxtKTpffSxyLmRlZmxhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscztpZighZXx8IWUuc3RhdGV8fDU8dHx8dDwwKXJldHVybiBlP1IoZSxfKTpfO2lmKG49ZS5zdGF0ZSwhZS5vdXRwdXR8fCFlLmlucHV0JiYwIT09ZS5hdmFpbF9pbnx8NjY2PT09bi5zdGF0dXMmJnQhPT1mKXJldHVybiBSKGUsMD09PWUuYXZhaWxfb3V0Py01Ol8pO2lmKG4uc3RybT1lLHI9bi5sYXN0X2ZsdXNoLG4ubGFzdF9mbHVzaD10LG4uc3RhdHVzPT09QylpZigyPT09bi53cmFwKWUuYWRsZXI9MCxVKG4sMzEpLFUobiwxMzkpLFUobiw4KSxuLmd6aGVhZD8oVShuLChuLmd6aGVhZC50ZXh0PzE6MCkrKG4uZ3poZWFkLmhjcmM/MjowKSsobi5nemhlYWQuZXh0cmE/NDowKSsobi5nemhlYWQubmFtZT84OjApKyhuLmd6aGVhZC5jb21tZW50PzE2OjApKSxVKG4sMjU1Jm4uZ3poZWFkLnRpbWUpLFUobixuLmd6aGVhZC50aW1lPj44JjI1NSksVShuLG4uZ3poZWFkLnRpbWU+PjE2JjI1NSksVShuLG4uZ3poZWFkLnRpbWU+PjI0JjI1NSksVShuLDk9PT1uLmxldmVsPzI6Mjw9bi5zdHJhdGVneXx8bi5sZXZlbDwyPzQ6MCksVShuLDI1NSZuLmd6aGVhZC5vcyksbi5nemhlYWQuZXh0cmEmJm4uZ3poZWFkLmV4dHJhLmxlbmd0aCYmKFUobiwyNTUmbi5nemhlYWQuZXh0cmEubGVuZ3RoKSxVKG4sbi5nemhlYWQuZXh0cmEubGVuZ3RoPj44JjI1NSkpLG4uZ3poZWFkLmhjcmMmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZywwKSksbi5nemluZGV4PTAsbi5zdGF0dXM9NjkpOihVKG4sMCksVShuLDApLFUobiwwKSxVKG4sMCksVShuLDApLFUobiw5PT09bi5sZXZlbD8yOjI8PW4uc3RyYXRlZ3l8fG4ubGV2ZWw8Mj80OjApLFUobiwzKSxuLnN0YXR1cz1FKTtlbHNle3ZhciBhPXYrKG4ud19iaXRzLTg8PDQpPDw4O2F8PSgyPD1uLnN0cmF0ZWd5fHxuLmxldmVsPDI/MDpuLmxldmVsPDY/MTo2PT09bi5sZXZlbD8yOjMpPDw2LDAhPT1uLnN0cnN0YXJ0JiYoYXw9MzIpLGErPTMxLWElMzEsbi5zdGF0dXM9RSxQKG4sYSksMCE9PW4uc3Ryc3RhcnQmJihQKG4sZS5hZGxlcj4+PjE2KSxQKG4sNjU1MzUmZS5hZGxlcikpLGUuYWRsZXI9MX1pZig2OT09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLmV4dHJhKXtmb3IoaT1uLnBlbmRpbmc7bi5nemluZGV4PCg2NTUzNSZuLmd6aGVhZC5leHRyYS5sZW5ndGgpJiYobi5wZW5kaW5nIT09bi5wZW5kaW5nX2J1Zl9zaXplfHwobi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxGKGUpLGk9bi5wZW5kaW5nLG4ucGVuZGluZyE9PW4ucGVuZGluZ19idWZfc2l6ZSkpOylVKG4sMjU1Jm4uZ3poZWFkLmV4dHJhW24uZ3ppbmRleF0pLG4uZ3ppbmRleCsrO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksbi5nemluZGV4PT09bi5nemhlYWQuZXh0cmEubGVuZ3RoJiYobi5nemluZGV4PTAsbi5zdGF0dXM9NzMpfWVsc2Ugbi5zdGF0dXM9NzM7aWYoNzM9PT1uLnN0YXR1cylpZihuLmd6aGVhZC5uYW1lKXtpPW4ucGVuZGluZztkb3tpZihuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUmJihuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLEYoZSksaT1uLnBlbmRpbmcsbi5wZW5kaW5nPT09bi5wZW5kaW5nX2J1Zl9zaXplKSl7cz0xO2JyZWFrfXM9bi5nemluZGV4PG4uZ3poZWFkLm5hbWUubGVuZ3RoPzI1NSZuLmd6aGVhZC5uYW1lLmNoYXJDb2RlQXQobi5nemluZGV4KyspOjAsVShuLHMpfXdoaWxlKDAhPT1zKTtuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLDA9PT1zJiYobi5nemluZGV4PTAsbi5zdGF0dXM9OTEpfWVsc2Ugbi5zdGF0dXM9OTE7aWYoOTE9PT1uLnN0YXR1cylpZihuLmd6aGVhZC5jb21tZW50KXtpPW4ucGVuZGluZztkb3tpZihuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUmJihuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLEYoZSksaT1uLnBlbmRpbmcsbi5wZW5kaW5nPT09bi5wZW5kaW5nX2J1Zl9zaXplKSl7cz0xO2JyZWFrfXM9bi5nemluZGV4PG4uZ3poZWFkLmNvbW1lbnQubGVuZ3RoPzI1NSZuLmd6aGVhZC5jb21tZW50LmNoYXJDb2RlQXQobi5nemluZGV4KyspOjAsVShuLHMpfXdoaWxlKDAhPT1zKTtuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLDA9PT1zJiYobi5zdGF0dXM9MTAzKX1lbHNlIG4uc3RhdHVzPTEwMztpZigxMDM9PT1uLnN0YXR1cyYmKG4uZ3poZWFkLmhjcmM/KG4ucGVuZGluZysyPm4ucGVuZGluZ19idWZfc2l6ZSYmRihlKSxuLnBlbmRpbmcrMjw9bi5wZW5kaW5nX2J1Zl9zaXplJiYoVShuLDI1NSZlLmFkbGVyKSxVKG4sZS5hZGxlcj4+OCYyNTUpLGUuYWRsZXI9MCxuLnN0YXR1cz1FKSk6bi5zdGF0dXM9RSksMCE9PW4ucGVuZGluZyl7aWYoRihlKSwwPT09ZS5hdmFpbF9vdXQpcmV0dXJuIG4ubGFzdF9mbHVzaD0tMSxtfWVsc2UgaWYoMD09PWUuYXZhaWxfaW4mJlQodCk8PVQocikmJnQhPT1mKXJldHVybiBSKGUsLTUpO2lmKDY2Nj09PW4uc3RhdHVzJiYwIT09ZS5hdmFpbF9pbilyZXR1cm4gUihlLC01KTtpZigwIT09ZS5hdmFpbF9pbnx8MCE9PW4ubG9va2FoZWFkfHx0IT09bCYmNjY2IT09bi5zdGF0dXMpe3ZhciBvPTI9PT1uLnN0cmF0ZWd5P2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciByOzspe2lmKDA9PT1lLmxvb2thaGVhZCYmKGooZSksMD09PWUubG9va2FoZWFkKSl7aWYodD09PWwpcmV0dXJuIEE7YnJlYWt9aWYoZS5tYXRjaF9sZW5ndGg9MCxyPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyssciYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD0wLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6ZS5sYXN0X2xpdCYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpP0E6SX0obix0KTozPT09bi5zdHJhdGVneT9mdW5jdGlvbihlLHQpe2Zvcih2YXIgcixuLGkscyxhPWUud2luZG93Ozspe2lmKGUubG9va2FoZWFkPD1TKXtpZihqKGUpLGUubG9va2FoZWFkPD1TJiZ0PT09bClyZXR1cm4gQTtpZigwPT09ZS5sb29rYWhlYWQpYnJlYWt9aWYoZS5tYXRjaF9sZW5ndGg9MCxlLmxvb2thaGVhZD49eCYmMDxlLnN0cnN0YXJ0JiYobj1hW2k9ZS5zdHJzdGFydC0xXSk9PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0pe3M9ZS5zdHJzdGFydCtTO2Rve313aGlsZShuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldJiZpPHMpO2UubWF0Y2hfbGVuZ3RoPVMtKHMtaSksZS5tYXRjaF9sZW5ndGg+ZS5sb29rYWhlYWQmJihlLm1hdGNoX2xlbmd0aD1lLmxvb2thaGVhZCl9aWYoZS5tYXRjaF9sZW5ndGg+PXg/KHI9dS5fdHJfdGFsbHkoZSwxLGUubWF0Y2hfbGVuZ3RoLXgpLGUubG9va2FoZWFkLT1lLm1hdGNoX2xlbmd0aCxlLnN0cnN0YXJ0Kz1lLm1hdGNoX2xlbmd0aCxlLm1hdGNoX2xlbmd0aD0wKToocj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydF0pLGUubG9va2FoZWFkLS0sZS5zdHJzdGFydCsrKSxyJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PTAsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfShuLHQpOmhbbi5sZXZlbF0uZnVuYyhuLHQpO2lmKG8hPT1PJiZvIT09Qnx8KG4uc3RhdHVzPTY2Niksbz09PUF8fG89PT1PKXJldHVybiAwPT09ZS5hdmFpbF9vdXQmJihuLmxhc3RfZmx1c2g9LTEpLG07aWYobz09PUkmJigxPT09dD91Ll90cl9hbGlnbihuKTo1IT09dCYmKHUuX3RyX3N0b3JlZF9ibG9jayhuLDAsMCwhMSksMz09PXQmJihEKG4uaGVhZCksMD09PW4ubG9va2FoZWFkJiYobi5zdHJzdGFydD0wLG4uYmxvY2tfc3RhcnQ9MCxuLmluc2VydD0wKSkpLEYoZSksMD09PWUuYXZhaWxfb3V0KSlyZXR1cm4gbi5sYXN0X2ZsdXNoPS0xLG19cmV0dXJuIHQhPT1mP206bi53cmFwPD0wPzE6KDI9PT1uLndyYXA/KFUobiwyNTUmZS5hZGxlciksVShuLGUuYWRsZXI+PjgmMjU1KSxVKG4sZS5hZGxlcj4+MTYmMjU1KSxVKG4sZS5hZGxlcj4+MjQmMjU1KSxVKG4sMjU1JmUudG90YWxfaW4pLFUobixlLnRvdGFsX2luPj44JjI1NSksVShuLGUudG90YWxfaW4+PjE2JjI1NSksVShuLGUudG90YWxfaW4+PjI0JjI1NSkpOihQKG4sZS5hZGxlcj4+PjE2KSxQKG4sNjU1MzUmZS5hZGxlcikpLEYoZSksMDxuLndyYXAmJihuLndyYXA9LW4ud3JhcCksMCE9PW4ucGVuZGluZz9tOjEpfSxyLmRlZmxhdGVFbmQ9ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIGUmJmUuc3RhdGU/KHQ9ZS5zdGF0ZS5zdGF0dXMpIT09QyYmNjkhPT10JiY3MyE9PXQmJjkxIT09dCYmMTAzIT09dCYmdCE9PUUmJjY2NiE9PXQ/UihlLF8pOihlLnN0YXRlPW51bGwsdD09PUU/UihlLC0zKTptKTpffSxyLmRlZmxhdGVTZXREaWN0aW9uYXJ5PWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYSxvLGgsdSxsPXQubGVuZ3RoO2lmKCFlfHwhZS5zdGF0ZSlyZXR1cm4gXztpZigyPT09KHM9KHI9ZS5zdGF0ZSkud3JhcCl8fDE9PT1zJiZyLnN0YXR1cyE9PUN8fHIubG9va2FoZWFkKXJldHVybiBfO2ZvcigxPT09cyYmKGUuYWRsZXI9ZChlLmFkbGVyLHQsbCwwKSksci53cmFwPTAsbD49ci53X3NpemUmJigwPT09cyYmKEQoci5oZWFkKSxyLnN0cnN0YXJ0PTAsci5ibG9ja19zdGFydD0wLHIuaW5zZXJ0PTApLHU9bmV3IGMuQnVmOChyLndfc2l6ZSksYy5hcnJheVNldCh1LHQsbC1yLndfc2l6ZSxyLndfc2l6ZSwwKSx0PXUsbD1yLndfc2l6ZSksYT1lLmF2YWlsX2luLG89ZS5uZXh0X2luLGg9ZS5pbnB1dCxlLmF2YWlsX2luPWwsZS5uZXh0X2luPTAsZS5pbnB1dD10LGoocik7ci5sb29rYWhlYWQ+PXg7KXtmb3Iobj1yLnN0cnN0YXJ0LGk9ci5sb29rYWhlYWQtKHgtMSk7ci5pbnNfaD0oci5pbnNfaDw8ci5oYXNoX3NoaWZ0XnIud2luZG93W24reC0xXSkmci5oYXNoX21hc2ssci5wcmV2W24mci53X21hc2tdPXIuaGVhZFtyLmluc19oXSxyLmhlYWRbci5pbnNfaF09bixuKyssLS1pOyk7ci5zdHJzdGFydD1uLHIubG9va2FoZWFkPXgtMSxqKHIpfXJldHVybiByLnN0cnN0YXJ0Kz1yLmxvb2thaGVhZCxyLmJsb2NrX3N0YXJ0PXIuc3Ryc3RhcnQsci5pbnNlcnQ9ci5sb29rYWhlYWQsci5sb29rYWhlYWQ9MCxyLm1hdGNoX2xlbmd0aD1yLnByZXZfbGVuZ3RoPXgtMSxyLm1hdGNoX2F2YWlsYWJsZT0wLGUubmV4dF9pbj1vLGUuaW5wdXQ9aCxlLmF2YWlsX2luPWEsci53cmFwPXMsbX0sci5kZWZsYXRlSW5mbz1cInBha28gZGVmbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdClcIn0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL2FkbGVyMzJcIjo0MyxcIi4vY3JjMzJcIjo0NSxcIi4vbWVzc2FnZXNcIjo1MSxcIi4vdHJlZXNcIjo1Mn1dLDQ3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy50ZXh0PTAsdGhpcy50aW1lPTAsdGhpcy54ZmxhZ3M9MCx0aGlzLm9zPTAsdGhpcy5leHRyYT1udWxsLHRoaXMuZXh0cmFfbGVuPTAsdGhpcy5uYW1lPVwiXCIsdGhpcy5jb21tZW50PVwiXCIsdGhpcy5oY3JjPTAsdGhpcy5kb25lPSExfX0se31dLDQ4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYSxvLGgsdSxsLGYsYyxkLHAsbSxfLGcsYix2LHksdyxrLHgsUyx6LEM7cj1lLnN0YXRlLG49ZS5uZXh0X2luLHo9ZS5pbnB1dCxpPW4rKGUuYXZhaWxfaW4tNSkscz1lLm5leHRfb3V0LEM9ZS5vdXRwdXQsYT1zLSh0LWUuYXZhaWxfb3V0KSxvPXMrKGUuYXZhaWxfb3V0LTI1NyksaD1yLmRtYXgsdT1yLndzaXplLGw9ci53aGF2ZSxmPXIud25leHQsYz1yLndpbmRvdyxkPXIuaG9sZCxwPXIuYml0cyxtPXIubGVuY29kZSxfPXIuZGlzdGNvZGUsZz0oMTw8ci5sZW5iaXRzKS0xLGI9KDE8PHIuZGlzdGJpdHMpLTE7ZTpkb3twPDE1JiYoZCs9eltuKytdPDxwLHArPTgsZCs9eltuKytdPDxwLHArPTgpLHY9bVtkJmddO3Q6Zm9yKDs7KXtpZihkPj4+PXk9dj4+PjI0LHAtPXksMD09PSh5PXY+Pj4xNiYyNTUpKUNbcysrXT02NTUzNSZ2O2Vsc2V7aWYoISgxNiZ5KSl7aWYoMD09KDY0JnkpKXt2PW1bKDY1NTM1JnYpKyhkJigxPDx5KS0xKV07Y29udGludWUgdH1pZigzMiZ5KXtyLm1vZGU9MTI7YnJlYWsgZX1lLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVhayBlfXc9NjU1MzUmdiwoeSY9MTUpJiYocDx5JiYoZCs9eltuKytdPDxwLHArPTgpLHcrPWQmKDE8PHkpLTEsZD4+Pj15LHAtPXkpLHA8MTUmJihkKz16W24rK108PHAscCs9OCxkKz16W24rK108PHAscCs9OCksdj1fW2QmYl07cjpmb3IoOzspe2lmKGQ+Pj49eT12Pj4+MjQscC09eSwhKDE2Jih5PXY+Pj4xNiYyNTUpKSl7aWYoMD09KDY0JnkpKXt2PV9bKDY1NTM1JnYpKyhkJigxPDx5KS0xKV07Y29udGludWUgcn1lLm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVhayBlfWlmKGs9NjU1MzUmdixwPCh5Jj0xNSkmJihkKz16W24rK108PHAsKHArPTgpPHkmJihkKz16W24rK108PHAscCs9OCkpLGg8KGsrPWQmKDE8PHkpLTEpKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoZD4+Pj15LHAtPXksKHk9cy1hKTxrKXtpZihsPCh5PWsteSkmJnIuc2FuZSl7ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVhayBlfWlmKFM9YywoeD0wKT09PWYpe2lmKHgrPXUteSx5PHcpe2Zvcih3LT15O0NbcysrXT1jW3grK10sLS15Oyk7eD1zLWssUz1DfX1lbHNlIGlmKGY8eSl7aWYoeCs9dStmLXksKHktPWYpPHcpe2Zvcih3LT15O0NbcysrXT1jW3grK10sLS15Oyk7aWYoeD0wLGY8dyl7Zm9yKHctPXk9ZjtDW3MrK109Y1t4KytdLC0teTspO3g9cy1rLFM9Q319fWVsc2UgaWYoeCs9Zi15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTt4PXMtayxTPUN9Zm9yKDsyPHc7KUNbcysrXT1TW3grK10sQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLHctPTM7dyYmKENbcysrXT1TW3grK10sMTx3JiYoQ1tzKytdPVNbeCsrXSkpfWVsc2V7Zm9yKHg9cy1rO0NbcysrXT1DW3grK10sQ1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLDI8KHctPTMpOyk7dyYmKENbcysrXT1DW3grK10sMTx3JiYoQ1tzKytdPUNbeCsrXSkpfWJyZWFrfX1icmVha319d2hpbGUobjxpJiZzPG8pO24tPXc9cD4+MyxkJj0oMTw8KHAtPXc8PDMpKS0xLGUubmV4dF9pbj1uLGUubmV4dF9vdXQ9cyxlLmF2YWlsX2luPW48aT9pLW4rNTo1LShuLWkpLGUuYXZhaWxfb3V0PXM8bz9vLXMrMjU3OjI1Ny0ocy1vKSxyLmhvbGQ9ZCxyLmJpdHM9cH19LHt9XSw0OTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBJPWUoXCIuLi91dGlscy9jb21tb25cIiksTz1lKFwiLi9hZGxlcjMyXCIpLEI9ZShcIi4vY3JjMzJcIiksUj1lKFwiLi9pbmZmYXN0XCIpLFQ9ZShcIi4vaW5mdHJlZXNcIiksRD0xLEY9MixOPTAsVT0tMixQPTEsbj04NTIsaT01OTI7ZnVuY3Rpb24gTChlKXtyZXR1cm4oZT4+PjI0JjI1NSkrKGU+Pj44JjY1MjgwKSsoKDY1MjgwJmUpPDw4KSsoKDI1NSZlKTw8MjQpfWZ1bmN0aW9uIHMoKXt0aGlzLm1vZGU9MCx0aGlzLmxhc3Q9ITEsdGhpcy53cmFwPTAsdGhpcy5oYXZlZGljdD0hMSx0aGlzLmZsYWdzPTAsdGhpcy5kbWF4PTAsdGhpcy5jaGVjaz0wLHRoaXMudG90YWw9MCx0aGlzLmhlYWQ9bnVsbCx0aGlzLndiaXRzPTAsdGhpcy53c2l6ZT0wLHRoaXMud2hhdmU9MCx0aGlzLnduZXh0PTAsdGhpcy53aW5kb3c9bnVsbCx0aGlzLmhvbGQ9MCx0aGlzLmJpdHM9MCx0aGlzLmxlbmd0aD0wLHRoaXMub2Zmc2V0PTAsdGhpcy5leHRyYT0wLHRoaXMubGVuY29kZT1udWxsLHRoaXMuZGlzdGNvZGU9bnVsbCx0aGlzLmxlbmJpdHM9MCx0aGlzLmRpc3RiaXRzPTAsdGhpcy5uY29kZT0wLHRoaXMubmxlbj0wLHRoaXMubmRpc3Q9MCx0aGlzLmhhdmU9MCx0aGlzLm5leHQ9bnVsbCx0aGlzLmxlbnM9bmV3IEkuQnVmMTYoMzIwKSx0aGlzLndvcms9bmV3IEkuQnVmMTYoMjg4KSx0aGlzLmxlbmR5bj1udWxsLHRoaXMuZGlzdGR5bj1udWxsLHRoaXMuc2FuZT0wLHRoaXMuYmFjaz0wLHRoaXMud2FzPTB9ZnVuY3Rpb24gYShlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8odD1lLnN0YXRlLGUudG90YWxfaW49ZS50b3RhbF9vdXQ9dC50b3RhbD0wLGUubXNnPVwiXCIsdC53cmFwJiYoZS5hZGxlcj0xJnQud3JhcCksdC5tb2RlPVAsdC5sYXN0PTAsdC5oYXZlZGljdD0wLHQuZG1heD0zMjc2OCx0LmhlYWQ9bnVsbCx0LmhvbGQ9MCx0LmJpdHM9MCx0LmxlbmNvZGU9dC5sZW5keW49bmV3IEkuQnVmMzIobiksdC5kaXN0Y29kZT10LmRpc3RkeW49bmV3IEkuQnVmMzIoaSksdC5zYW5lPTEsdC5iYWNrPS0xLE4pOlV9ZnVuY3Rpb24gbyhlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8oKHQ9ZS5zdGF0ZSkud3NpemU9MCx0LndoYXZlPTAsdC53bmV4dD0wLGEoZSkpOlV9ZnVuY3Rpb24gaChlLHQpe3ZhciByLG47cmV0dXJuIGUmJmUuc3RhdGU/KG49ZS5zdGF0ZSx0PDA/KHI9MCx0PS10KToocj0xKyh0Pj40KSx0PDQ4JiYodCY9MTUpKSx0JiYodDw4fHwxNTx0KT9VOihudWxsIT09bi53aW5kb3cmJm4ud2JpdHMhPT10JiYobi53aW5kb3c9bnVsbCksbi53cmFwPXIsbi53Yml0cz10LG8oZSkpKTpVfWZ1bmN0aW9uIHUoZSx0KXt2YXIgcixuO3JldHVybiBlPyhuPW5ldyBzLChlLnN0YXRlPW4pLndpbmRvdz1udWxsLChyPWgoZSx0KSkhPT1OJiYoZS5zdGF0ZT1udWxsKSxyKTpVfXZhciBsLGYsYz0hMDtmdW5jdGlvbiBqKGUpe2lmKGMpe3ZhciB0O2ZvcihsPW5ldyBJLkJ1ZjMyKDUxMiksZj1uZXcgSS5CdWYzMigzMiksdD0wO3Q8MTQ0OyllLmxlbnNbdCsrXT04O2Zvcig7dDwyNTY7KWUubGVuc1t0KytdPTk7Zm9yKDt0PDI4MDspZS5sZW5zW3QrK109Nztmb3IoO3Q8Mjg4OyllLmxlbnNbdCsrXT04O2ZvcihUKEQsZS5sZW5zLDAsMjg4LGwsMCxlLndvcmsse2JpdHM6OX0pLHQ9MDt0PDMyOyllLmxlbnNbdCsrXT01O1QoRixlLmxlbnMsMCwzMixmLDAsZS53b3JrLHtiaXRzOjV9KSxjPSExfWUubGVuY29kZT1sLGUubGVuYml0cz05LGUuZGlzdGNvZGU9ZixlLmRpc3RiaXRzPTV9ZnVuY3Rpb24gWihlLHQscixuKXt2YXIgaSxzPWUuc3RhdGU7cmV0dXJuIG51bGw9PT1zLndpbmRvdyYmKHMud3NpemU9MTw8cy53Yml0cyxzLnduZXh0PTAscy53aGF2ZT0wLHMud2luZG93PW5ldyBJLkJ1Zjgocy53c2l6ZSkpLG4+PXMud3NpemU/KEkuYXJyYXlTZXQocy53aW5kb3csdCxyLXMud3NpemUscy53c2l6ZSwwKSxzLnduZXh0PTAscy53aGF2ZT1zLndzaXplKToobjwoaT1zLndzaXplLXMud25leHQpJiYoaT1uKSxJLmFycmF5U2V0KHMud2luZG93LHQsci1uLGkscy53bmV4dCksKG4tPWkpPyhJLmFycmF5U2V0KHMud2luZG93LHQsci1uLG4sMCkscy53bmV4dD1uLHMud2hhdmU9cy53c2l6ZSk6KHMud25leHQrPWkscy53bmV4dD09PXMud3NpemUmJihzLnduZXh0PTApLHMud2hhdmU8cy53c2l6ZSYmKHMud2hhdmUrPWkpKSksMH1yLmluZmxhdGVSZXNldD1vLHIuaW5mbGF0ZVJlc2V0Mj1oLHIuaW5mbGF0ZVJlc2V0S2VlcD1hLHIuaW5mbGF0ZUluaXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHUoZSwxNSl9LHIuaW5mbGF0ZUluaXQyPXUsci5pbmZsYXRlPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYSxvLGgsdSxsLGYsYyxkLHAsbSxfLGcsYix2LHksdyxrLHgsUyx6LEM9MCxFPW5ldyBJLkJ1ZjgoNCksQT1bMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV07aWYoIWV8fCFlLnN0YXRlfHwhZS5vdXRwdXR8fCFlLmlucHV0JiYwIT09ZS5hdmFpbF9pbilyZXR1cm4gVTsxMj09PShyPWUuc3RhdGUpLm1vZGUmJihyLm1vZGU9MTMpLGE9ZS5uZXh0X291dCxpPWUub3V0cHV0LGg9ZS5hdmFpbF9vdXQscz1lLm5leHRfaW4sbj1lLmlucHV0LG89ZS5hdmFpbF9pbix1PXIuaG9sZCxsPXIuYml0cyxmPW8sYz1oLHg9TjtlOmZvcig7Oylzd2l0Y2goci5tb2RlKXtjYXNlIFA6aWYoMD09PXIud3JhcCl7ci5tb2RlPTEzO2JyZWFrfWZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKDImci53cmFwJiYzNTYxNT09PXUpe0Vbci5jaGVjaz0wXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCksbD11PTAsci5tb2RlPTI7YnJlYWt9aWYoci5mbGFncz0wLHIuaGVhZCYmKHIuaGVhZC5kb25lPSExKSwhKDEmci53cmFwKXx8KCgoMjU1JnUpPDw4KSsodT4+OCkpJTMxKXtlLm1zZz1cImluY29ycmVjdCBoZWFkZXIgY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoOCE9KDE1JnUpKXtlLm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKGwtPTQsaz04KygxNSYodT4+Pj00KSksMD09PXIud2JpdHMpci53Yml0cz1rO2Vsc2UgaWYoaz5yLndiaXRzKXtlLm1zZz1cImludmFsaWQgd2luZG93IHNpemVcIixyLm1vZGU9MzA7YnJlYWt9ci5kbWF4PTE8PGssZS5hZGxlcj1yLmNoZWNrPTEsci5tb2RlPTUxMiZ1PzEwOjEyLGw9dT0wO2JyZWFrO2Nhc2UgMjpmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihyLmZsYWdzPXUsOCE9KDI1NSZyLmZsYWdzKSl7ZS5tc2c9XCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiLHIubW9kZT0zMDticmVha31pZig1NzM0NCZyLmZsYWdzKXtlLm1zZz1cInVua25vd24gaGVhZGVyIGZsYWdzIHNldFwiLHIubW9kZT0zMDticmVha31yLmhlYWQmJihyLmhlYWQudGV4dD11Pj44JjEpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT0zO2Nhc2UgMzpmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmhlYWQmJihyLmhlYWQudGltZT11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsRVsyXT11Pj4+MTYmMjU1LEVbM109dT4+PjI0JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDQsMCkpLGw9dT0wLHIubW9kZT00O2Nhc2UgNDpmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmhlYWQmJihyLmhlYWQueGZsYWdzPTI1NSZ1LHIuaGVhZC5vcz11Pj44KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MCxyLm1vZGU9NTtjYXNlIDU6aWYoMTAyNCZyLmZsYWdzKXtmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbmd0aD11LHIuaGVhZCYmKHIuaGVhZC5leHRyYV9sZW49dSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTB9ZWxzZSByLmhlYWQmJihyLmhlYWQuZXh0cmE9bnVsbCk7ci5tb2RlPTY7Y2FzZSA2OmlmKDEwMjQmci5mbGFncyYmKG88KGQ9ci5sZW5ndGgpJiYoZD1vKSxkJiYoci5oZWFkJiYoaz1yLmhlYWQuZXh0cmFfbGVuLXIubGVuZ3RoLHIuaGVhZC5leHRyYXx8KHIuaGVhZC5leHRyYT1uZXcgQXJyYXkoci5oZWFkLmV4dHJhX2xlbikpLEkuYXJyYXlTZXQoci5oZWFkLmV4dHJhLG4scyxkLGspKSw1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLHIubGVuZ3RoLT1kKSxyLmxlbmd0aCkpYnJlYWsgZTtyLmxlbmd0aD0wLHIubW9kZT03O2Nhc2UgNzppZigyMDQ4JnIuZmxhZ3Mpe2lmKDA9PT1vKWJyZWFrIGU7Zm9yKGQ9MDtrPW5bcytkKytdLHIuaGVhZCYmayYmci5sZW5ndGg8NjU1MzYmJihyLmhlYWQubmFtZSs9U3RyaW5nLmZyb21DaGFyQ29kZShrKSksayYmZDxvOyk7aWYoNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxuLGQscykpLG8tPWQscys9ZCxrKWJyZWFrIGV9ZWxzZSByLmhlYWQmJihyLmhlYWQubmFtZT1udWxsKTtyLmxlbmd0aD0wLHIubW9kZT04O2Nhc2UgODppZig0MDk2JnIuZmxhZ3Mpe2lmKDA9PT1vKWJyZWFrIGU7Zm9yKGQ9MDtrPW5bcytkKytdLHIuaGVhZCYmayYmci5sZW5ndGg8NjU1MzYmJihyLmhlYWQuY29tbWVudCs9U3RyaW5nLmZyb21DaGFyQ29kZShrKSksayYmZDxvOyk7aWYoNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxuLGQscykpLG8tPWQscys9ZCxrKWJyZWFrIGV9ZWxzZSByLmhlYWQmJihyLmhlYWQuY29tbWVudD1udWxsKTtyLm1vZGU9OTtjYXNlIDk6aWYoNTEyJnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHUhPT0oNjU1MzUmci5jaGVjaykpe2UubXNnPVwiaGVhZGVyIGNyYyBtaXNtYXRjaFwiLHIubW9kZT0zMDticmVha31sPXU9MH1yLmhlYWQmJihyLmhlYWQuaGNyYz1yLmZsYWdzPj45JjEsci5oZWFkLmRvbmU9ITApLGUuYWRsZXI9ci5jaGVjaz0wLHIubW9kZT0xMjticmVhaztjYXNlIDEwOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWUuYWRsZXI9ci5jaGVjaz1MKHUpLGw9dT0wLHIubW9kZT0xMTtjYXNlIDExOmlmKDA9PT1yLmhhdmVkaWN0KXJldHVybiBlLm5leHRfb3V0PWEsZS5hdmFpbF9vdXQ9aCxlLm5leHRfaW49cyxlLmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsMjtlLmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9MTI7Y2FzZSAxMjppZig1PT09dHx8Nj09PXQpYnJlYWsgZTtjYXNlIDEzOmlmKHIubGFzdCl7dT4+Pj03JmwsbC09NyZsLHIubW9kZT0yNzticmVha31mb3IoO2w8Mzspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXN3aXRjaChyLmxhc3Q9MSZ1LGwtPTEsMyYodT4+Pj0xKSl7Y2FzZSAwOnIubW9kZT0xNDticmVhaztjYXNlIDE6aWYoaihyKSxyLm1vZGU9MjAsNiE9PXQpYnJlYWs7dT4+Pj0yLGwtPTI7YnJlYWsgZTtjYXNlIDI6ci5tb2RlPTE3O2JyZWFrO2Nhc2UgMzplLm1zZz1cImludmFsaWQgYmxvY2sgdHlwZVwiLHIubW9kZT0zMH11Pj4+PTIsbC09MjticmVhaztjYXNlIDE0OmZvcih1Pj4+PTcmbCxsLT03Jmw7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKCg2NTUzNSZ1KSE9KHU+Pj4xNl42NTUzNSkpe2UubXNnPVwiaW52YWxpZCBzdG9yZWQgYmxvY2sgbGVuZ3Roc1wiLHIubW9kZT0zMDticmVha31pZihyLmxlbmd0aD02NTUzNSZ1LGw9dT0wLHIubW9kZT0xNSw2PT09dClicmVhayBlO2Nhc2UgMTU6ci5tb2RlPTE2O2Nhc2UgMTY6aWYoZD1yLmxlbmd0aCl7aWYobzxkJiYoZD1vKSxoPGQmJihkPWgpLDA9PT1kKWJyZWFrIGU7SS5hcnJheVNldChpLG4scyxkLGEpLG8tPWQscys9ZCxoLT1kLGErPWQsci5sZW5ndGgtPWQ7YnJlYWt9ci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTc6Zm9yKDtsPDE0Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoci5ubGVuPTI1NysoMzEmdSksdT4+Pj01LGwtPTUsci5uZGlzdD0xKygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5jb2RlPTQrKDE1JnUpLHU+Pj49NCxsLT00LDI4NjxyLm5sZW58fDMwPHIubmRpc3Qpe2UubXNnPVwidG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHNcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE4O2Nhc2UgMTg6Zm9yKDtyLmhhdmU8ci5uY29kZTspe2Zvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ci5sZW5zW0Fbci5oYXZlKytdXT03JnUsdT4+Pj0zLGwtPTN9Zm9yKDtyLmhhdmU8MTk7KXIubGVuc1tBW3IuaGF2ZSsrXV09MDtpZihyLmxlbmNvZGU9ci5sZW5keW4sci5sZW5iaXRzPTcsUz17Yml0czpyLmxlbmJpdHN9LHg9VCgwLHIubGVucywwLDE5LHIubGVuY29kZSwwLHIud29yayxTKSxyLmxlbmJpdHM9Uy5iaXRzLHgpe2UubXNnPVwiaW52YWxpZCBjb2RlIGxlbmd0aHMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGF2ZT0wLHIubW9kZT0xOTtjYXNlIDE5OmZvcig7ci5oYXZlPHIubmxlbityLm5kaXN0Oyl7Zm9yKDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKGI8MTYpdT4+Pj1fLGwtPV8sci5sZW5zW3IuaGF2ZSsrXT1iO2Vsc2V7aWYoMTY9PT1iKXtmb3Ioej1fKzI7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYodT4+Pj1fLGwtPV8sMD09PXIuaGF2ZSl7ZS5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWs9ci5sZW5zW3IuaGF2ZS0xXSxkPTMrKDMmdSksdT4+Pj0yLGwtPTJ9ZWxzZSBpZigxNz09PWIpe2Zvcih6PV8rMztsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1sLT1fLGs9MCxkPTMrKDcmKHU+Pj49XykpLHU+Pj49MyxsLT0zfWVsc2V7Zm9yKHo9Xys3O2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWwtPV8saz0wLGQ9MTErKDEyNyYodT4+Pj1fKSksdT4+Pj03LGwtPTd9aWYoci5oYXZlK2Q+ci5ubGVuK3IubmRpc3Qpe2UubXNnPVwiaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdFwiLHIubW9kZT0zMDticmVha31mb3IoO2QtLTspci5sZW5zW3IuaGF2ZSsrXT1rfX1pZigzMD09PXIubW9kZSlicmVhaztpZigwPT09ci5sZW5zWzI1Nl0pe2UubXNnPVwiaW52YWxpZCBjb2RlIC0tIG1pc3NpbmcgZW5kLW9mLWJsb2NrXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuYml0cz05LFM9e2JpdHM6ci5sZW5iaXRzfSx4PVQoRCxyLmxlbnMsMCxyLm5sZW4sci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7ZS5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5kaXN0Yml0cz02LHIuZGlzdGNvZGU9ci5kaXN0ZHluLFM9e2JpdHM6ci5kaXN0Yml0c30seD1UKEYsci5sZW5zLHIubmxlbixyLm5kaXN0LHIuZGlzdGNvZGUsMCxyLndvcmssUyksci5kaXN0Yml0cz1TLmJpdHMseCl7ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlcyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5tb2RlPTIwLDY9PT10KWJyZWFrIGU7Y2FzZSAyMDpyLm1vZGU9MjE7Y2FzZSAyMTppZig2PD1vJiYyNTg8PWgpe2UubmV4dF9vdXQ9YSxlLmF2YWlsX291dD1oLGUubmV4dF9pbj1zLGUuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCxSKGUsYyksYT1lLm5leHRfb3V0LGk9ZS5vdXRwdXQsaD1lLmF2YWlsX291dCxzPWUubmV4dF9pbixuPWUuaW5wdXQsbz1lLmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLDEyPT09ci5tb2RlJiYoci5iYWNrPS0xKTticmVha31mb3Ioci5iYWNrPTA7Zz0oQz1yLmxlbmNvZGVbdSYoMTw8ci5sZW5iaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihnJiYwPT0oMjQwJmcpKXtmb3Iodj1fLHk9Zyx3PWI7Zz0oQz1yLmxlbmNvZGVbdysoKHUmKDE8PHYreSktMSk+PnYpXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEodisoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXU+Pj49dixsLT12LHIuYmFjays9dn1pZih1Pj4+PV8sbC09XyxyLmJhY2srPV8sci5sZW5ndGg9YiwwPT09Zyl7ci5tb2RlPTI2O2JyZWFrfWlmKDMyJmcpe3IuYmFjaz0tMSxyLm1vZGU9MTI7YnJlYWt9aWYoNjQmZyl7ZS5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIixyLm1vZGU9MzA7YnJlYWt9ci5leHRyYT0xNSZnLHIubW9kZT0yMjtjYXNlIDIyOmlmKHIuZXh0cmEpe2Zvcih6PXIuZXh0cmE7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ci5sZW5ndGgrPXUmKDE8PHIuZXh0cmEpLTEsdT4+Pj1yLmV4dHJhLGwtPXIuZXh0cmEsci5iYWNrKz1yLmV4dHJhfXIud2FzPXIubGVuZ3RoLHIubW9kZT0yMztjYXNlIDIzOmZvcig7Zz0oQz1yLmRpc3Rjb2RlW3UmKDE8PHIuZGlzdGJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKDA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIuZGlzdGNvZGVbdysoKHUmKDE8PHYreSktMSk+PnYpXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEodisoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXU+Pj49dixsLT12LHIuYmFjays9dn1pZih1Pj4+PV8sbC09XyxyLmJhY2srPV8sNjQmZyl7ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIGNvZGVcIixyLm1vZGU9MzA7YnJlYWt9ci5vZmZzZXQ9YixyLmV4dHJhPTE1Jmcsci5tb2RlPTI0O2Nhc2UgMjQ6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLm9mZnNldCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9aWYoci5vZmZzZXQ+ci5kbWF4KXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrfXIubW9kZT0yNTtjYXNlIDI1OmlmKDA9PT1oKWJyZWFrIGU7aWYoZD1jLWgsci5vZmZzZXQ+ZCl7aWYoKGQ9ci5vZmZzZXQtZCk+ci53aGF2ZSYmci5zYW5lKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrfXA9ZD5yLnduZXh0PyhkLT1yLnduZXh0LHIud3NpemUtZCk6ci53bmV4dC1kLGQ+ci5sZW5ndGgmJihkPXIubGVuZ3RoKSxtPXIud2luZG93fWVsc2UgbT1pLHA9YS1yLm9mZnNldCxkPXIubGVuZ3RoO2ZvcihoPGQmJihkPWgpLGgtPWQsci5sZW5ndGgtPWQ7aVthKytdPW1bcCsrXSwtLWQ7KTswPT09ci5sZW5ndGgmJihyLm1vZGU9MjEpO2JyZWFrO2Nhc2UgMjY6aWYoMD09PWgpYnJlYWsgZTtpW2ErK109ci5sZW5ndGgsaC0tLHIubW9kZT0yMTticmVhaztjYXNlIDI3OmlmKHIud3JhcCl7Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdXw9bltzKytdPDxsLGwrPTh9aWYoYy09aCxlLnRvdGFsX291dCs9YyxyLnRvdGFsKz1jLGMmJihlLmFkbGVyPXIuY2hlY2s9ci5mbGFncz9CKHIuY2hlY2ssaSxjLGEtYyk6TyhyLmNoZWNrLGksYyxhLWMpKSxjPWgsKHIuZmxhZ3M/dTpMKHUpKSE9PXIuY2hlY2spe2UubXNnPVwiaW5jb3JyZWN0IGRhdGEgY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5tb2RlPTI4O2Nhc2UgMjg6aWYoci53cmFwJiZyLmZsYWdzKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZih1IT09KDQyOTQ5NjcyOTUmci50b3RhbCkpe2UubXNnPVwiaW5jb3JyZWN0IGxlbmd0aCBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjk7Y2FzZSAyOTp4PTE7YnJlYWsgZTtjYXNlIDMwOng9LTM7YnJlYWsgZTtjYXNlIDMxOnJldHVybi00O2Nhc2UgMzI6ZGVmYXVsdDpyZXR1cm4gVX1yZXR1cm4gZS5uZXh0X291dD1hLGUuYXZhaWxfb3V0PWgsZS5uZXh0X2luPXMsZS5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLChyLndzaXplfHxjIT09ZS5hdmFpbF9vdXQmJnIubW9kZTwzMCYmKHIubW9kZTwyN3x8NCE9PXQpKSYmWihlLGUub3V0cHV0LGUubmV4dF9vdXQsYy1lLmF2YWlsX291dCk/KHIubW9kZT0zMSwtNCk6KGYtPWUuYXZhaWxfaW4sYy09ZS5hdmFpbF9vdXQsZS50b3RhbF9pbis9ZixlLnRvdGFsX291dCs9YyxyLnRvdGFsKz1jLHIud3JhcCYmYyYmKGUuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxpLGMsZS5uZXh0X291dC1jKTpPKHIuY2hlY2ssaSxjLGUubmV4dF9vdXQtYykpLGUuZGF0YV90eXBlPXIuYml0cysoci5sYXN0PzY0OjApKygxMj09PXIubW9kZT8xMjg6MCkrKDIwPT09ci5tb2RlfHwxNT09PXIubW9kZT8yNTY6MCksKDA9PWYmJjA9PT1jfHw0PT09dCkmJng9PT1OJiYoeD0tNSkseCl9LHIuaW5mbGF0ZUVuZD1mdW5jdGlvbihlKXtpZighZXx8IWUuc3RhdGUpcmV0dXJuIFU7dmFyIHQ9ZS5zdGF0ZTtyZXR1cm4gdC53aW5kb3cmJih0LndpbmRvdz1udWxsKSxlLnN0YXRlPW51bGwsTn0sci5pbmZsYXRlR2V0SGVhZGVyPWZ1bmN0aW9uKGUsdCl7dmFyIHI7cmV0dXJuIGUmJmUuc3RhdGU/MD09KDImKHI9ZS5zdGF0ZSkud3JhcCk/VTooKHIuaGVhZD10KS5kb25lPSExLE4pOlV9LHIuaW5mbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24oZSx0KXt2YXIgcixuPXQubGVuZ3RoO3JldHVybiBlJiZlLnN0YXRlPzAhPT0ocj1lLnN0YXRlKS53cmFwJiYxMSE9PXIubW9kZT9VOjExPT09ci5tb2RlJiZPKDEsdCxuLDApIT09ci5jaGVjaz8tMzpaKGUsdCxuLG4pPyhyLm1vZGU9MzEsLTQpOihyLmhhdmVkaWN0PTEsTik6VX0sci5pbmZsYXRlSW5mbz1cInBha28gaW5mbGF0ZSAoZnJvbSBOb2RlY2EgcHJvamVjdClcIn0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDEsXCIuL2FkbGVyMzJcIjo0MyxcIi4vY3JjMzJcIjo0NSxcIi4vaW5mZmFzdFwiOjQ4LFwiLi9pbmZ0cmVlc1wiOjUwfV0sNTA6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgRD1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLEY9WzMsNCw1LDYsNyw4LDksMTAsMTEsMTMsMTUsMTcsMTksMjMsMjcsMzEsMzUsNDMsNTEsNTksNjcsODMsOTksMTE1LDEzMSwxNjMsMTk1LDIyNywyNTgsMCwwXSxOPVsxNiwxNiwxNiwxNiwxNiwxNiwxNiwxNiwxNywxNywxNywxNywxOCwxOCwxOCwxOCwxOSwxOSwxOSwxOSwyMCwyMCwyMCwyMCwyMSwyMSwyMSwyMSwxNiw3Miw3OF0sVT1bMSwyLDMsNCw1LDcsOSwxMywxNywyNSwzMyw0OSw2NSw5NywxMjksMTkzLDI1NywzODUsNTEzLDc2OSwxMDI1LDE1MzcsMjA0OSwzMDczLDQwOTcsNjE0NSw4MTkzLDEyMjg5LDE2Mzg1LDI0NTc3LDAsMF0sUD1bMTYsMTYsMTYsMTYsMTcsMTcsMTgsMTgsMTksMTksMjAsMjAsMjEsMjEsMjIsMjIsMjMsMjMsMjQsMjQsMjUsMjUsMjYsMjYsMjcsMjcsMjgsMjgsMjksMjksNjQsNjRdO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuLGkscyxhLG8pe3ZhciBoLHUsbCxmLGMsZCxwLG0sXyxnPW8uYml0cyxiPTAsdj0wLHk9MCx3PTAsaz0wLHg9MCxTPTAsej0wLEM9MCxFPTAsQT1udWxsLEk9MCxPPW5ldyBELkJ1ZjE2KDE2KSxCPW5ldyBELkJ1ZjE2KDE2KSxSPW51bGwsVD0wO2ZvcihiPTA7Yjw9MTU7YisrKU9bYl09MDtmb3Iodj0wO3Y8bjt2KyspT1t0W3Irdl1dKys7Zm9yKGs9Zyx3PTE1OzE8PXcmJjA9PT1PW3ddO3ctLSk7aWYodzxrJiYoaz13KSwwPT09dylyZXR1cm4gaVtzKytdPTIwOTcxNTIwLGlbcysrXT0yMDk3MTUyMCxvLmJpdHM9MSwwO2Zvcih5PTE7eTx3JiYwPT09T1t5XTt5KyspO2ZvcihrPHkmJihrPXkpLGI9ej0xO2I8PTE1O2IrKylpZih6PDw9MSwoei09T1tiXSk8MClyZXR1cm4tMTtpZigwPHomJigwPT09ZXx8MSE9PXcpKXJldHVybi0xO2ZvcihCWzFdPTAsYj0xO2I8MTU7YisrKUJbYisxXT1CW2JdK09bYl07Zm9yKHY9MDt2PG47disrKTAhPT10W3Irdl0mJihhW0JbdFtyK3ZdXSsrXT12KTtpZihkPTA9PT1lPyhBPVI9YSwxOSk6MT09PWU/KEE9RixJLT0yNTcsUj1OLFQtPTI1NywyNTYpOihBPVUsUj1QLC0xKSxiPXksYz1zLFM9dj1FPTAsbD0tMSxmPShDPTE8PCh4PWspKS0xLDE9PT1lJiY4NTI8Q3x8Mj09PWUmJjU5MjxDKXJldHVybiAxO2Zvcig7Oyl7Zm9yKHA9Yi1TLF89YVt2XTxkPyhtPTAsYVt2XSk6YVt2XT5kPyhtPVJbVCthW3ZdXSxBW0krYVt2XV0pOihtPTk2LDApLGg9MTw8Yi1TLHk9dT0xPDx4O2lbYysoRT4+UykrKHUtPWgpXT1wPDwyNHxtPDwxNnxffDAsMCE9PXU7KTtmb3IoaD0xPDxiLTE7RSZoOyloPj49MTtpZigwIT09aD8oRSY9aC0xLEUrPWgpOkU9MCx2KyssMD09LS1PW2JdKXtpZihiPT09dylicmVhaztiPXRbcithW3ZdXX1pZihrPGImJihFJmYpIT09bCl7Zm9yKDA9PT1TJiYoUz1rKSxjKz15LHo9MTw8KHg9Yi1TKTt4K1M8dyYmISgoei09T1t4K1NdKTw9MCk7KXgrKyx6PDw9MTtpZihDKz0xPDx4LDE9PT1lJiY4NTI8Q3x8Mj09PWUmJjU5MjxDKXJldHVybiAxO2lbbD1FJmZdPWs8PDI0fHg8PDE2fGMtc3wwfX1yZXR1cm4gMCE9PUUmJihpW2MrRV09Yi1TPDwyNHw2NDw8MTZ8MCksby5iaXRzPWssMH19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ezI6XCJuZWVkIGRpY3Rpb25hcnlcIiwxOlwic3RyZWFtIGVuZFwiLDA6XCJcIixcIi0xXCI6XCJmaWxlIGVycm9yXCIsXCItMlwiOlwic3RyZWFtIGVycm9yXCIsXCItM1wiOlwiZGF0YSBlcnJvclwiLFwiLTRcIjpcImluc3VmZmljaWVudCBtZW1vcnlcIixcIi01XCI6XCJidWZmZXIgZXJyb3JcIixcIi02XCI6XCJpbmNvbXBhdGlibGUgdmVyc2lvblwifX0se31dLDUyOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSxvPTAsaD0xO2Z1bmN0aW9uIG4oZSl7Zm9yKHZhciB0PWUubGVuZ3RoOzA8PS0tdDspZVt0XT0wfXZhciBzPTAsYT0yOSx1PTI1NixsPXUrMSthLGY9MzAsYz0xOSxfPTIqbCsxLGc9MTUsZD0xNixwPTcsbT0yNTYsYj0xNix2PTE3LHk9MTgsdz1bMCwwLDAsMCwwLDAsMCwwLDEsMSwxLDEsMiwyLDIsMiwzLDMsMywzLDQsNCw0LDQsNSw1LDUsNSwwXSxrPVswLDAsMCwwLDEsMSwyLDIsMywzLDQsNCw1LDUsNiw2LDcsNyw4LDgsOSw5LDEwLDEwLDExLDExLDEyLDEyLDEzLDEzXSx4PVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDIsMyw3XSxTPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XSx6PW5ldyBBcnJheSgyKihsKzIpKTtuKHopO3ZhciBDPW5ldyBBcnJheSgyKmYpO24oQyk7dmFyIEU9bmV3IEFycmF5KDUxMik7bihFKTt2YXIgQT1uZXcgQXJyYXkoMjU2KTtuKEEpO3ZhciBJPW5ldyBBcnJheShhKTtuKEkpO3ZhciBPLEIsUixUPW5ldyBBcnJheShmKTtmdW5jdGlvbiBEKGUsdCxyLG4saSl7dGhpcy5zdGF0aWNfdHJlZT1lLHRoaXMuZXh0cmFfYml0cz10LHRoaXMuZXh0cmFfYmFzZT1yLHRoaXMuZWxlbXM9bix0aGlzLm1heF9sZW5ndGg9aSx0aGlzLmhhc19zdHJlZT1lJiZlLmxlbmd0aH1mdW5jdGlvbiBGKGUsdCl7dGhpcy5keW5fdHJlZT1lLHRoaXMubWF4X2NvZGU9MCx0aGlzLnN0YXRfZGVzYz10fWZ1bmN0aW9uIE4oZSl7cmV0dXJuIGU8MjU2P0VbZV06RVsyNTYrKGU+Pj43KV19ZnVuY3Rpb24gVShlLHQpe2UucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPTI1NSZ0LGUucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPXQ+Pj44JjI1NX1mdW5jdGlvbiBQKGUsdCxyKXtlLmJpX3ZhbGlkPmQtcj8oZS5iaV9idWZ8PXQ8PGUuYmlfdmFsaWQmNjU1MzUsVShlLGUuYmlfYnVmKSxlLmJpX2J1Zj10Pj5kLWUuYmlfdmFsaWQsZS5iaV92YWxpZCs9ci1kKTooZS5iaV9idWZ8PXQ8PGUuYmlfdmFsaWQmNjU1MzUsZS5iaV92YWxpZCs9cil9ZnVuY3Rpb24gTChlLHQscil7UChlLHJbMip0XSxyWzIqdCsxXSl9ZnVuY3Rpb24gaihlLHQpe2Zvcih2YXIgcj0wO3J8PTEmZSxlPj4+PTEscjw8PTEsMDwtLXQ7KTtyZXR1cm4gcj4+PjF9ZnVuY3Rpb24gWihlLHQscil7dmFyIG4saSxzPW5ldyBBcnJheShnKzEpLGE9MDtmb3Iobj0xO248PWc7bisrKXNbbl09YT1hK3Jbbi0xXTw8MTtmb3IoaT0wO2k8PXQ7aSsrKXt2YXIgbz1lWzIqaSsxXTswIT09byYmKGVbMippXT1qKHNbb10rKyxvKSl9fWZ1bmN0aW9uIFcoZSl7dmFyIHQ7Zm9yKHQ9MDt0PGw7dCsrKWUuZHluX2x0cmVlWzIqdF09MDtmb3IodD0wO3Q8Zjt0KyspZS5keW5fZHRyZWVbMip0XT0wO2Zvcih0PTA7dDxjO3QrKyllLmJsX3RyZWVbMip0XT0wO2UuZHluX2x0cmVlWzIqbV09MSxlLm9wdF9sZW49ZS5zdGF0aWNfbGVuPTAsZS5sYXN0X2xpdD1lLm1hdGNoZXM9MH1mdW5jdGlvbiBNKGUpezg8ZS5iaV92YWxpZD9VKGUsZS5iaV9idWYpOjA8ZS5iaV92YWxpZCYmKGUucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPWUuYmlfYnVmKSxlLmJpX2J1Zj0wLGUuYmlfdmFsaWQ9MH1mdW5jdGlvbiBIKGUsdCxyLG4pe3ZhciBpPTIqdCxzPTIqcjtyZXR1cm4gZVtpXTxlW3NdfHxlW2ldPT09ZVtzXSYmblt0XTw9bltyXX1mdW5jdGlvbiBHKGUsdCxyKXtmb3IodmFyIG49ZS5oZWFwW3JdLGk9cjw8MTtpPD1lLmhlYXBfbGVuJiYoaTxlLmhlYXBfbGVuJiZIKHQsZS5oZWFwW2krMV0sZS5oZWFwW2ldLGUuZGVwdGgpJiZpKyssIUgodCxuLGUuaGVhcFtpXSxlLmRlcHRoKSk7KWUuaGVhcFtyXT1lLmhlYXBbaV0scj1pLGk8PD0xO2UuaGVhcFtyXT1ufWZ1bmN0aW9uIEsoZSx0LHIpe3ZhciBuLGkscyxhLG89MDtpZigwIT09ZS5sYXN0X2xpdClmb3IoO249ZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqb108PDh8ZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqbysxXSxpPWUucGVuZGluZ19idWZbZS5sX2J1ZitvXSxvKyssMD09PW4/TChlLGksdCk6KEwoZSwocz1BW2ldKSt1KzEsdCksMCE9PShhPXdbc10pJiZQKGUsaS09SVtzXSxhKSxMKGUscz1OKC0tbiksciksMCE9PShhPWtbc10pJiZQKGUsbi09VFtzXSxhKSksbzxlLmxhc3RfbGl0Oyk7TChlLG0sdCl9ZnVuY3Rpb24gWShlLHQpe3ZhciByLG4saSxzPXQuZHluX3RyZWUsYT10LnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxvPXQuc3RhdF9kZXNjLmhhc19zdHJlZSxoPXQuc3RhdF9kZXNjLmVsZW1zLHU9LTE7Zm9yKGUuaGVhcF9sZW49MCxlLmhlYXBfbWF4PV8scj0wO3I8aDtyKyspMCE9PXNbMipyXT8oZS5oZWFwWysrZS5oZWFwX2xlbl09dT1yLGUuZGVwdGhbcl09MCk6c1syKnIrMV09MDtmb3IoO2UuaGVhcF9sZW48Mjspc1syKihpPWUuaGVhcFsrK2UuaGVhcF9sZW5dPXU8Mj8rK3U6MCldPTEsZS5kZXB0aFtpXT0wLGUub3B0X2xlbi0tLG8mJihlLnN0YXRpY19sZW4tPWFbMippKzFdKTtmb3IodC5tYXhfY29kZT11LHI9ZS5oZWFwX2xlbj4+MTsxPD1yO3ItLSlHKGUscyxyKTtmb3IoaT1oO3I9ZS5oZWFwWzFdLGUuaGVhcFsxXT1lLmhlYXBbZS5oZWFwX2xlbi0tXSxHKGUscywxKSxuPWUuaGVhcFsxXSxlLmhlYXBbLS1lLmhlYXBfbWF4XT1yLGUuaGVhcFstLWUuaGVhcF9tYXhdPW4sc1syKmldPXNbMipyXStzWzIqbl0sZS5kZXB0aFtpXT0oZS5kZXB0aFtyXT49ZS5kZXB0aFtuXT9lLmRlcHRoW3JdOmUuZGVwdGhbbl0pKzEsc1syKnIrMV09c1syKm4rMV09aSxlLmhlYXBbMV09aSsrLEcoZSxzLDEpLDI8PWUuaGVhcF9sZW47KTtlLmhlYXBbLS1lLmhlYXBfbWF4XT1lLmhlYXBbMV0sZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saD10LmR5bl90cmVlLHU9dC5tYXhfY29kZSxsPXQuc3RhdF9kZXNjLnN0YXRpY190cmVlLGY9dC5zdGF0X2Rlc2MuaGFzX3N0cmVlLGM9dC5zdGF0X2Rlc2MuZXh0cmFfYml0cyxkPXQuc3RhdF9kZXNjLmV4dHJhX2Jhc2UscD10LnN0YXRfZGVzYy5tYXhfbGVuZ3RoLG09MDtmb3Iocz0wO3M8PWc7cysrKWUuYmxfY291bnRbc109MDtmb3IoaFsyKmUuaGVhcFtlLmhlYXBfbWF4XSsxXT0wLHI9ZS5oZWFwX21heCsxO3I8XztyKyspcDwocz1oWzIqaFsyKihuPWUuaGVhcFtyXSkrMV0rMV0rMSkmJihzPXAsbSsrKSxoWzIqbisxXT1zLHU8bnx8KGUuYmxfY291bnRbc10rKyxhPTAsZDw9biYmKGE9Y1tuLWRdKSxvPWhbMipuXSxlLm9wdF9sZW4rPW8qKHMrYSksZiYmKGUuc3RhdGljX2xlbis9byoobFsyKm4rMV0rYSkpKTtpZigwIT09bSl7ZG97Zm9yKHM9cC0xOzA9PT1lLmJsX2NvdW50W3NdOylzLS07ZS5ibF9jb3VudFtzXS0tLGUuYmxfY291bnRbcysxXSs9MixlLmJsX2NvdW50W3BdLS0sbS09Mn13aGlsZSgwPG0pO2ZvcihzPXA7MCE9PXM7cy0tKWZvcihuPWUuYmxfY291bnRbc107MCE9PW47KXU8KGk9ZS5oZWFwWy0tcl0pfHwoaFsyKmkrMV0hPT1zJiYoZS5vcHRfbGVuKz0ocy1oWzIqaSsxXSkqaFsyKmldLGhbMippKzFdPXMpLG4tLSl9fShlLHQpLFoocyx1LGUuYmxfY291bnQpfWZ1bmN0aW9uIFgoZSx0LHIpe3ZhciBuLGkscz0tMSxhPXRbMV0sbz0wLGg9Nyx1PTQ7Zm9yKDA9PT1hJiYoaD0xMzgsdT0zKSx0WzIqKHIrMSkrMV09NjU1MzUsbj0wO248PXI7bisrKWk9YSxhPXRbMioobisxKSsxXSwrK288aCYmaT09PWF8fChvPHU/ZS5ibF90cmVlWzIqaV0rPW86MCE9PWk/KGkhPT1zJiZlLmJsX3RyZWVbMippXSsrLGUuYmxfdHJlZVsyKmJdKyspOm88PTEwP2UuYmxfdHJlZVsyKnZdKys6ZS5ibF90cmVlWzIqeV0rKyxzPWksdT0obz0wKT09PWE/KGg9MTM4LDMpOmk9PT1hPyhoPTYsMyk6KGg9Nyw0KSl9ZnVuY3Rpb24gVihlLHQscil7dmFyIG4saSxzPS0xLGE9dFsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLG49MDtuPD1yO24rKylpZihpPWEsYT10WzIqKG4rMSkrMV0sISgrK288aCYmaT09PWEpKXtpZihvPHUpZm9yKDtMKGUsaSxlLmJsX3RyZWUpLDAhPS0tbzspO2Vsc2UgMCE9PWk/KGkhPT1zJiYoTChlLGksZS5ibF90cmVlKSxvLS0pLEwoZSxiLGUuYmxfdHJlZSksUChlLG8tMywyKSk6bzw9MTA/KEwoZSx2LGUuYmxfdHJlZSksUChlLG8tMywzKSk6KEwoZSx5LGUuYmxfdHJlZSksUChlLG8tMTEsNykpO3M9aSx1PShvPTApPT09YT8oaD0xMzgsMyk6aT09PWE/KGg9NiwzKTooaD03LDQpfX1uKFQpO3ZhciBxPSExO2Z1bmN0aW9uIEooZSx0LHIsbil7UChlLChzPDwxKSsobj8xOjApLDMpLGZ1bmN0aW9uKGUsdCxyLG4pe00oZSksbiYmKFUoZSxyKSxVKGUsfnIpKSxpLmFycmF5U2V0KGUucGVuZGluZ19idWYsZS53aW5kb3csdCxyLGUucGVuZGluZyksZS5wZW5kaW5nKz1yfShlLHQsciwhMCl9ci5fdHJfaW5pdD1mdW5jdGlvbihlKXtxfHwoZnVuY3Rpb24oKXt2YXIgZSx0LHIsbixpLHM9bmV3IEFycmF5KGcrMSk7Zm9yKG49cj0wO248YS0xO24rKylmb3IoSVtuXT1yLGU9MDtlPDE8PHdbbl07ZSsrKUFbcisrXT1uO2ZvcihBW3ItMV09bixuPWk9MDtuPDE2O24rKylmb3IoVFtuXT1pLGU9MDtlPDE8PGtbbl07ZSsrKUVbaSsrXT1uO2ZvcihpPj49NztuPGY7bisrKWZvcihUW25dPWk8PDcsZT0wO2U8MTw8a1tuXS03O2UrKylFWzI1NitpKytdPW47Zm9yKHQ9MDt0PD1nO3QrKylzW3RdPTA7Zm9yKGU9MDtlPD0xNDM7KXpbMiplKzFdPTgsZSsrLHNbOF0rKztmb3IoO2U8PTI1NTspelsyKmUrMV09OSxlKyssc1s5XSsrO2Zvcig7ZTw9Mjc5Oyl6WzIqZSsxXT03LGUrKyxzWzddKys7Zm9yKDtlPD0yODc7KXpbMiplKzFdPTgsZSsrLHNbOF0rKztmb3IoWih6LGwrMSxzKSxlPTA7ZTxmO2UrKylDWzIqZSsxXT01LENbMiplXT1qKGUsNSk7Tz1uZXcgRCh6LHcsdSsxLGwsZyksQj1uZXcgRChDLGssMCxmLGcpLFI9bmV3IEQobmV3IEFycmF5KDApLHgsMCxjLHApfSgpLHE9ITApLGUubF9kZXNjPW5ldyBGKGUuZHluX2x0cmVlLE8pLGUuZF9kZXNjPW5ldyBGKGUuZHluX2R0cmVlLEIpLGUuYmxfZGVzYz1uZXcgRihlLmJsX3RyZWUsUiksZS5iaV9idWY9MCxlLmJpX3ZhbGlkPTAsVyhlKX0sci5fdHJfc3RvcmVkX2Jsb2NrPUosci5fdHJfZmx1c2hfYmxvY2s9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGkscyxhPTA7MDxlLmxldmVsPygyPT09ZS5zdHJtLmRhdGFfdHlwZSYmKGUuc3RybS5kYXRhX3R5cGU9ZnVuY3Rpb24oZSl7dmFyIHQscj00MDkzNjI0NDQ3O2Zvcih0PTA7dDw9MzE7dCsrLHI+Pj49MSlpZigxJnImJjAhPT1lLmR5bl9sdHJlZVsyKnRdKXJldHVybiBvO2lmKDAhPT1lLmR5bl9sdHJlZVsxOF18fDAhPT1lLmR5bl9sdHJlZVsyMF18fDAhPT1lLmR5bl9sdHJlZVsyNl0pcmV0dXJuIGg7Zm9yKHQ9MzI7dDx1O3QrKylpZigwIT09ZS5keW5fbHRyZWVbMip0XSlyZXR1cm4gaDtyZXR1cm4gb30oZSkpLFkoZSxlLmxfZGVzYyksWShlLGUuZF9kZXNjKSxhPWZ1bmN0aW9uKGUpe3ZhciB0O2ZvcihYKGUsZS5keW5fbHRyZWUsZS5sX2Rlc2MubWF4X2NvZGUpLFgoZSxlLmR5bl9kdHJlZSxlLmRfZGVzYy5tYXhfY29kZSksWShlLGUuYmxfZGVzYyksdD1jLTE7Mzw9dCYmMD09PWUuYmxfdHJlZVsyKlNbdF0rMV07dC0tKTtyZXR1cm4gZS5vcHRfbGVuKz0zKih0KzEpKzUrNSs0LHR9KGUpLGk9ZS5vcHRfbGVuKzMrNz4+PjMsKHM9ZS5zdGF0aWNfbGVuKzMrNz4+PjMpPD1pJiYoaT1zKSk6aT1zPXIrNSxyKzQ8PWkmJi0xIT09dD9KKGUsdCxyLG4pOjQ9PT1lLnN0cmF0ZWd5fHxzPT09aT8oUChlLDIrKG4/MTowKSwzKSxLKGUseixDKSk6KFAoZSw0KyhuPzE6MCksMyksZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk7Zm9yKFAoZSx0LTI1Nyw1KSxQKGUsci0xLDUpLFAoZSxuLTQsNCksaT0wO2k8bjtpKyspUChlLGUuYmxfdHJlZVsyKlNbaV0rMV0sMyk7VihlLGUuZHluX2x0cmVlLHQtMSksVihlLGUuZHluX2R0cmVlLHItMSl9KGUsZS5sX2Rlc2MubWF4X2NvZGUrMSxlLmRfZGVzYy5tYXhfY29kZSsxLGErMSksSyhlLGUuZHluX2x0cmVlLGUuZHluX2R0cmVlKSksVyhlKSxuJiZNKGUpfSxyLl90cl90YWxseT1mdW5jdGlvbihlLHQscil7cmV0dXJuIGUucGVuZGluZ19idWZbZS5kX2J1ZisyKmUubGFzdF9saXRdPXQ+Pj44JjI1NSxlLnBlbmRpbmdfYnVmW2UuZF9idWYrMiplLmxhc3RfbGl0KzFdPTI1NSZ0LGUucGVuZGluZ19idWZbZS5sX2J1ZitlLmxhc3RfbGl0XT0yNTUmcixlLmxhc3RfbGl0KyssMD09PXQ/ZS5keW5fbHRyZWVbMipyXSsrOihlLm1hdGNoZXMrKyx0LS0sZS5keW5fbHRyZWVbMiooQVtyXSt1KzEpXSsrLGUuZHluX2R0cmVlWzIqTih0KV0rKyksZS5sYXN0X2xpdD09PWUubGl0X2J1ZnNpemUtMX0sci5fdHJfYWxpZ249ZnVuY3Rpb24oZSl7UChlLDIsMyksTChlLG0seiksZnVuY3Rpb24oZSl7MTY9PT1lLmJpX3ZhbGlkPyhVKGUsZS5iaV9idWYpLGUuYmlfYnVmPTAsZS5iaV92YWxpZD0wKTo4PD1lLmJpX3ZhbGlkJiYoZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JmUuYmlfYnVmLGUuYmlfYnVmPj49OCxlLmJpX3ZhbGlkLT04KX0oZSl9fSx7XCIuLi91dGlscy9jb21tb25cIjo0MX1dLDUzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5pbnB1dD1udWxsLHRoaXMubmV4dF9pbj0wLHRoaXMuYXZhaWxfaW49MCx0aGlzLnRvdGFsX2luPTAsdGhpcy5vdXRwdXQ9bnVsbCx0aGlzLm5leHRfb3V0PTAsdGhpcy5hdmFpbF9vdXQ9MCx0aGlzLnRvdGFsX291dD0wLHRoaXMubXNnPVwiXCIsdGhpcy5zdGF0ZT1udWxsLHRoaXMuZGF0YV90eXBlPTIsdGhpcy5hZGxlcj0wfX0se31dLDU0OltmdW5jdGlvbihlLHQscil7KGZ1bmN0aW9uKGUpeyFmdW5jdGlvbihyLG4pe1widXNlIHN0cmljdFwiO2lmKCFyLnNldEltbWVkaWF0ZSl7dmFyIGkscyx0LGEsbz0xLGg9e30sdT0hMSxsPXIuZG9jdW1lbnQsZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YmJk9iamVjdC5nZXRQcm90b3R5cGVPZihyKTtlPWUmJmUuc2V0VGltZW91dD9lOnIsaT1cIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwoci5wcm9jZXNzKT9mdW5jdGlvbihlKXtwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCl7YyhlKX0pfTpmdW5jdGlvbigpe2lmKHIucG9zdE1lc3NhZ2UmJiFyLmltcG9ydFNjcmlwdHMpe3ZhciBlPSEwLHQ9ci5vbm1lc3NhZ2U7cmV0dXJuIHIub25tZXNzYWdlPWZ1bmN0aW9uKCl7ZT0hMX0sci5wb3N0TWVzc2FnZShcIlwiLFwiKlwiKSxyLm9ubWVzc2FnZT10LGV9fSgpPyhhPVwic2V0SW1tZWRpYXRlJFwiK01hdGgucmFuZG9tKCkrXCIkXCIsci5hZGRFdmVudExpc3RlbmVyP3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixkLCExKTpyLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsZCksZnVuY3Rpb24oZSl7ci5wb3N0TWVzc2FnZShhK2UsXCIqXCIpfSk6ci5NZXNzYWdlQ2hhbm5lbD8oKHQ9bmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7YyhlLmRhdGEpfSxmdW5jdGlvbihlKXt0LnBvcnQyLnBvc3RNZXNzYWdlKGUpfSk6bCYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIGwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT8ocz1sLmRvY3VtZW50RWxlbWVudCxmdW5jdGlvbihlKXt2YXIgdD1sLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtjKGUpLHQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwscy5yZW1vdmVDaGlsZCh0KSx0PW51bGx9LHMuYXBwZW5kQ2hpbGQodCl9KTpmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGMsMCxlKX0sZS5zZXRJbW1lZGlhdGU9ZnVuY3Rpb24oZSl7XCJmdW5jdGlvblwiIT10eXBlb2YgZSYmKGU9bmV3IEZ1bmN0aW9uKFwiXCIrZSkpO2Zvcih2YXIgdD1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aC0xKSxyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXT1hcmd1bWVudHNbcisxXTt2YXIgbj17Y2FsbGJhY2s6ZSxhcmdzOnR9O3JldHVybiBoW29dPW4saShvKSxvKyt9LGUuY2xlYXJJbW1lZGlhdGU9Zn1mdW5jdGlvbiBmKGUpe2RlbGV0ZSBoW2VdfWZ1bmN0aW9uIGMoZSl7aWYodSlzZXRUaW1lb3V0KGMsMCxlKTtlbHNle3ZhciB0PWhbZV07aWYodCl7dT0hMDt0cnl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2FsbGJhY2sscj1lLmFyZ3M7c3dpdGNoKHIubGVuZ3RoKXtjYXNlIDA6dCgpO2JyZWFrO2Nhc2UgMTp0KHJbMF0pO2JyZWFrO2Nhc2UgMjp0KHJbMF0sclsxXSk7YnJlYWs7Y2FzZSAzOnQoclswXSxyWzFdLHJbMl0pO2JyZWFrO2RlZmF1bHQ6dC5hcHBseShuLHIpfX0odCl9ZmluYWxseXtmKGUpLHU9ITF9fX19ZnVuY3Rpb24gZChlKXtlLnNvdXJjZT09PXImJlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT1lLmRhdGEuaW5kZXhPZihhKSYmYygrZS5kYXRhLnNsaWNlKGEubGVuZ3RoKSl9fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT1lP3RoaXM6ZTpzZWxmKX0pLmNhbGwodGhpcyxcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9KX0se31dfSx7fSxbMTBdKSgxMCl9KTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IG5hdiwgcmVmaW5lbWVudF9vcHRpb24sIHJlY2lwZXMgfSBmcm9tICcuL3JlY2lwZV9uZXcnXG5pbXBvcnQgSlNaaXAgZnJvbSAnanN6aXAnXG5pbXBvcnQgeyB1cGRhdGVfaWNvbiB9IGZyb20gJy4vdXRpbHMvdXRpbCdcbmxldCBpbnRlcmFjdGlvbnM6IGFueVtdID0gW11cbmxldCBzY3JlZW5zaG90czogW3N0cmluZywgc3RyaW5nXVtdID0gW11cbmxldCByZWFzb25zQW5ub3RhdGlvbjogYW55W10gPSBbXVxubGV0IGFjdGlvblNlcXVlbmNlSWQgPSAwXG5sZXQgdXBsb2FkVGltZXI6IE5vZGVKUy5UaW1lciB8IG51bGwgfCBmYWxzZSA9IG51bGxcbmxldCB1c2VySWQ6IHN0cmluZyA9ICcnXG5cbmxldCBsYXN0VGltZXN0YW1wOiBzdHJpbmcgfCBudWxsID0gbnVsbFxubGV0IGxhc3R1cGxvYWRUaW1lc3RhbXA6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlOiB7XG4gIHVybDogc3RyaW5nXG4gIGZpZWxkczogeyBrZXk6IHN0cmluZzsgQVdTQWNjZXNzS2V5SWQ6IHN0cmluZzsgcG9saWN5OiBzdHJpbmc7IHNpZ25hdHVyZTogc3RyaW5nIH1cbiAgdGltZXN0YW1wOiBudW1iZXJcbn0gfCBudWxsID0gbnVsbFxuXG5pbXBvcnQge1xuICBwb3B1cF9wcm9iYWJpbGl0eSxcbiAgZm9sZGVyX25hbWUsXG4gIHppcCxcbiAgYmFzZV91cmwsXG4gIGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCxcbiAgdXJsX2luY2x1ZGUsXG4gIGZpbHRlcl91cmxcbn0gZnJvbSAnLi9jb25maWcnXG5cbmNvbnN0IHVwbG9hZF91cmwgPSBgJHtiYXNlX3VybH0vdXBsb2FkYFxuY29uc3QgaW50ZXJhY3Rpb25zX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNgXG5jb25zdCBnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmwgPSBgJHtiYXNlX3VybH0vZ2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RgXG5cbmludGVyZmFjZSBUYWJIaXN0b3J5IHtcbiAgYmFja1N0YWNrOiBzdHJpbmdbXVxuICBmb3J3YXJkU3RhY2s6IHN0cmluZ1tdXG4gIGN1cnJlbnRVcmw6IHN0cmluZyB8IG51bGxcbn1cblxuY29uc3QgdGFiTmF2aWdhdGlvbkhpc3Rvcnk6IHtcbiAgW3RhYklkOiBudW1iZXJdOiBUYWJIaXN0b3J5XG59ID0ge31cblxuZnVuY3Rpb24gYW5hbHl6ZU5hdmlnYXRpb24odGFiSWQ6IG51bWJlciwgdXJsOiBzdHJpbmcpOiAnbmV3JyB8ICdiYWNrJyB8ICdmb3J3YXJkJyB8ICdyZWxvYWQnIHtcbiAgaWYgKCF0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0pIHtcbiAgICB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0gPSB7XG4gICAgICBiYWNrU3RhY2s6IFtdLFxuICAgICAgZm9yd2FyZFN0YWNrOiBbXSxcbiAgICAgIGN1cnJlbnRVcmw6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBoaXN0b3J5ID0gdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdXG5cbiAgaWYgKCFoaXN0b3J5LmN1cnJlbnRVcmwpIHtcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmxcbiAgICByZXR1cm4gJ25ldydcbiAgfVxuICBpZiAoaGlzdG9yeS5jdXJyZW50VXJsID09PSB1cmwpIHtcbiAgICByZXR1cm4gJ3JlbG9hZCdcbiAgfVxuXG4gIGlmIChoaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggPiAwICYmIGhpc3RvcnkuYmFja1N0YWNrW2hpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCEpXG4gICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5iYWNrU3RhY2sucG9wKCkhXG4gICAgcmV0dXJuICdiYWNrJ1xuICB9XG5cbiAgaWYgKFxuICAgIGhpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFja1toaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsXG4gICkge1xuICAgIGhpc3RvcnkuYmFja1N0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsISlcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmZvcndhcmRTdGFjay5wb3AoKSFcbiAgICByZXR1cm4gJ2ZvcndhcmQnXG4gIH1cblxuICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCEpXG4gIGhpc3RvcnkuZm9yd2FyZFN0YWNrID0gW11cbiAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsXG4gIHJldHVybiAnbmV3J1xufVxuXG4vLyBSZXBsYWNlIHRoZSBzaW1wbGUgcXVlc3Rpb24gd2l0aCBhIG1vcmUgZGV0YWlsZWQgb25lIGJhc2VkIG9uIGV2ZW50IHR5cGVcbmZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKGV2ZW50VHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgJ2NsaWNrX2EnOlxuICAgIGNhc2UgJ2NsaWNrX2InOlxuICAgIGNhc2UgJ2NsaWNrX2MnOlxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgIGlmIChkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93Jykge1xuICAgICAgICByZXR1cm4gXCJXaHkgZGlkIHlvdSBjaG9vc2UgJ1NldCBVcCBOb3cnIGluc3RlYWQgb2YgYnV5IG9uY2UsIGFuZCB3aHkgZG8geW91IGxpa2UgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/XCJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS50YXJnZXQuaWQgPT09ICdidXktbm93LWJ1dHRvbicpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBjaG9vc2UgdG8gYnV5IHRoaXMgcHJvZHVjdCBpbW1lZGlhdGVseSwgYW5kIHdoYXQgY29udmluY2VkIHlvdSB0byBza2lwIGZ1cnRoZXIgZXhwbG9yYXRpb24gb2Ygb3RoZXIgb3B0aW9ucz8gV2h5IGRvIHlvdSBsaWtlIHRoaXMgcGFydGljdWxhciBwcm9kdWN0PydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJykpIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IG1hZGUgeW91IGNsaWNrIG9uIHRoaXMgcHJvZHVjdCwgYW5kIHdoYXQgc3BlY2lmaWMgYXNwZWN0cyBhdHRyYWN0ZWQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gb3RoZXIgc2VhcmNoIHJlc3VsdHM/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhLnRhcmdldC5pZCA9PT0gJ2FkZC10by1jYXJ0LWJ1dHRvbicpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQsIGFuZCBhcmUgeW91IHBsYW5uaW5nIHRvIGJ1eSBpdCBub3cgb3IgbGF0ZXI/IFdoYXQgY29udmluY2VkIHlvdSB0aGF0IHRoaXMgaXRlbSB3YXMgdGhlIHJpZ2h0IGNob2ljZSBmb3IgeW91ciBuZWVkcz8nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1doYXQgd2FzIHlvdXIgcmVhc29uIGZvciBjbGlja2luZyBvbiB0aGlzIGVsZW1lbnQ/J1xuICAgICAgfVxuICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBkb2luZyB3aGlsZSBzY3JvbGxpbmfigJRhcmUgeW91IGJyb3dzaW5nIHNlYXJjaCByZXN1bHRzLCBsb29raW5nIGF0IHJldmlld3MsIG9yIHNvbWV0aGluZyBlbHNlLCBhbmQgd2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kPydcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yLCBhbmQgaG93IGRpZCB5b3UgZGVjaWRlIG9uIHRoZSBzZWFyY2ggdGVybXMgeW91IHVzZWQ/IEFyZSB5b3UgbG9va2luZyBmb3IgYSBzcGVjaWZpYyBwcm9kdWN0LCBicmFuZCwgb3IgZmVhdHVyZT8nXG4gICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2UsIGFuZCB3aGF0IHdlcmUgeW91IGhvcGluZyB0byByZXZpc2l0IG9yIHJlY29uc2lkZXI/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSBhZnRlciBwcmV2aW91c2x5IG5hdmlnYXRpbmcgYXdheSwgYW5kIHdoYXQgbmV3IG9yIHVucmVzb2x2ZWQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvciBub3c/J1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2BcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICByZXR1cm4gYFdoeSBkaWQgeW91IHN3aXRjaCB0byB0aGlzIHRhYj8gRG8geW91IGhhdmUgc3BlY2lmaWMgdGFzayBvciBpbmZvcm1hdGlvbiBpbiBtaW5kP2BcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSAke2V2ZW50VHlwZX0gYWN0aW9uP2BcbiAgfVxufVxuXG4vLyBBZGQgbmV3IGZ1bmN0aW9uIHRvIGhhbmRsZSBzY3JlZW5zaG90IHNhdmluZ1xuYXN5bmMgZnVuY3Rpb24gc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybDogc3RyaW5nLCBzY3JlZW5zaG90SWQ6IHN0cmluZykge1xuICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAvLyBHZXQgZXhpc3Rpbmcgc2NyZWVuc2hvdHMgZnJvbSBzdG9yYWdlXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNjcmVlbnNob3RzOiBbXSB9KVxuICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gcmVzdWx0LnNjcmVlbnNob3RzIHx8IFtdXG5cbiAgICAvLyBBZGQgbmV3IHNjcmVlbnNob3RcbiAgICBzdG9yZVNjcmVlbnNob3RzLnB1c2goW3NjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWRdKVxuXG4gICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzY3JlZW5zaG90czogc3RvcmVTY3JlZW5zaG90cyB9KVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgOyhhc3luYyAoKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2F2ZURhdGEnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKytcbiAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICAvLyBtZXNzYWdlLmRhdGEuYWN0aW9uU2VxdWVuY2VJZCA9IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkXG4gICAgICAgIGNvbnN0IHV1aWQgPSBtZXNzYWdlLmRhdGEudXVpZFxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZURhdGEgJywgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSlcbiAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICAgICAgICByZXN1bHQucHVzaChtZXNzYWdlLmRhdGEpXG4gICAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiByZXN1bHQgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBwb3B1cFxuICAgICAgICAvLyBhd2FpdCBzZW5kUG9wdXAoc2VuZGVyLnRhYj8uaWQsIG1lc3NhZ2UuZGF0YS50aW1lc3RhbXAsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUsIGFjdGlvblNlcXVlbmNlSWQpXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBzYXZlRGF0YSgpLFxuICAgICAgICAgIHNlbmRQb3B1cChcbiAgICAgICAgICAgIHNlbmRlci50YWI/LmlkLFxuICAgICAgICAgICAgbWVzc2FnZS5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUsXG4gICAgICAgICAgICAvLyBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICAgIG1lc3NhZ2UuZGF0YSxcbiAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHNhdmVEYXRhOicsIGVycm9yKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWUgLy8gS2VlcCBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIHNjcmVlbnNob3Qgb24gZGVtYW5kXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2FwdHVyZVNjcmVlbnNob3QnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZygnZ2V0IHNjcmVlbnNob3QgcmVxdWVzdCcpXG4gICAgICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0gYXdhaXQgY2FwdHVyZVNjcmVlbnNob3QoKVxuICAgICAgICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgbWVzc2FnZS5zY3JlZW5zaG90SWQpXG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBzdWNjZXNzID8gdW5kZWZpbmVkIDogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNhcHR1cmVTY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERvd25sb2FkIGRhdGEgb24gdXNlciByZXF1ZXN0XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZG93bmxvYWREYXRhJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkRGF0YScpXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBkb3dubG9hZERhdGFMb2NhbGx5KClcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcyB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgZG93bmxvYWQ6JywgZXJyb3IpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NsZWFyTWVtb3J5Q2FjaGUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpbnRlcmFjdGlvbnMgPSBbXVxuICAgICAgICBzY3JlZW5zaG90cyA9IFtdXG4gICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uID0gW11cbiAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCA9IDBcbiAgICAgICAgaW50ZXJhY3Rpb25zLmxlbmd0aCA9IDBcbiAgICAgICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwXG5cbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgY2xlYXJNZW1vcnlDYWNoZTonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldFJlY2lwZScgJiYgc2VuZGVyLnRhYj8uaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNlbGVjdFJlY2lwZShzZW5kZXIudGFiLmlkLCBtZXNzYWdlLnVybClcbiAgICAgICAgICAudGhlbigocmVjaXBlKSA9PiB7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyByZWNpcGU6IHJlY2lwZSB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSlcbiAgICAgICAgICB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgZ2V0UmVjaXBlOicsIGVycm9yKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWUgLy8gSW5kaWNhdGUgdGhhdCBzZW5kUmVzcG9uc2Ugd2lsbCBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcbiAgICB9XG4gIH0pKClcbiAgcmV0dXJuIHRydWUgLy8gS2VlcHMgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZXNcbn0pXG5cbi8vIENhcHR1cmUgdGhlIHNjcmVlbnNob3QgaW4gdGhlIGN1cnJlbnQgdGFiXG5hc3luYyBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBbdGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pXG4gICAgaWYgKHRhYikge1xuICAgICAgcmV0dXJuIGF3YWl0IGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHRhYi53aW5kb3dJZCwge1xuICAgICAgICBmb3JtYXQ6ICdqcGVnJyxcbiAgICAgICAgcXVhbGl0eTogMjVcbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5jb25zdCBzYXZlSFRNTCA9IGFzeW5jIChodG1sQ29udGVudDogc3RyaW5nLCBjdXJyZW50U25hcHNob3RJZDogc3RyaW5nKSA9PiB7XG4gIGxldCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiB7fSB9KVxuICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge31cbiAgaHRtbFNuYXBzaG90c1tjdXJyZW50U25hcHNob3RJZF0gPSBodG1sQ29udGVudFxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pXG59XG5cbmNvbnN0IHNhdmVJbnRlcmFjdGlvbiA9IGFzeW5jIChcbiAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gIHRpbWVzdGFtcDogc3RyaW5nLFxuICB0YXJnZXRfdXJsOiBzdHJpbmcsXG4gIGh0bWxTbmFwc2hvdElkOiBzdHJpbmcsXG4gIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkOiBudW1iZXIsXG4gIHV1aWQ6IHN0cmluZyxcbiAgbmF2aWdhdGlvblR5cGU6IHN0cmluZyB8IG51bGwgPSBudWxsLFxuICBwYWdlTWV0YTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbikgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGV2ZW50VHlwZSxcbiAgICB0aW1lc3RhbXAsXG4gICAgdGFyZ2V0X3VybCxcbiAgICBodG1sU25hcHNob3RJZCxcbiAgICAvLyBhY3Rpb25TZXF1ZW5jZUlkOiBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICB1dWlkLFxuICAgIHBhZ2VNZXRhXG4gIH1cblxuICAvLyBBZGQgbmF2aWdhdGlvblR5cGUgb25seSBpZiBpdCBleGlzdHNcbiAgaWYgKG5hdmlnYXRpb25UeXBlKSB7XG4gICAgZGF0YVsnbmF2aWdhdGlvblR5cGUnXSA9IG5hdmlnYXRpb25UeXBlXG4gIH1cblxuICBsZXQgaW50ZXJhY3Rpb25zID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdGlvbnMuaW50ZXJhY3Rpb25zIHx8IFtdXG4gIHN0b3JlSW50ZXJhY3Rpb25zLnB1c2goZGF0YSlcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KVxufVxuXG5jb25zdCBzYXZlU2NyZWVuc2hvdCA9IGFzeW5jICh3aW5kb3dJZDogbnVtYmVyLCB0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0gYXdhaXQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIod2luZG93SWQsIHtcbiAgICBmb3JtYXQ6ICdqcGVnJyxcbiAgICBxdWFsaXR5OiAyNVxuICB9KVxuXG4gIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICBhd2FpdCBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpXG59XG5jb25zdCBzZW5kUG9wdXAgPSBhc3luYyAoXG4gIHRhYklkOiBudW1iZXIsXG4gIHRpbWVzdGFtcDogc3RyaW5nLFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgLy8gYWN0aW9uX3V1aWQ6IHN0cmluZyxcbiAgZGF0YTogYW55LFxuICB1dWlkOiBzdHJpbmdcbikgPT4ge1xuICBpZiAoXG4gICAgZGF0YS50YXJnZXQ/LmlkPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdydWZ1cycpIHx8XG4gICAgZGF0YS50YXJnZXQ/LmNsYXNzTmFtZT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncnVmdXMnKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBxdWVzdGlvbiA9IGdldEN1c3RvbVF1ZXN0aW9uKGV2ZW50VHlwZSwgZGF0YSlcbiAgaWYgKE1hdGgucmFuZG9tKCkgPCBwb3B1cF9wcm9iYWJpbGl0eSAmJiB0YWJJZCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWFzb24gPSBhd2FpdCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhY3Rpb246ICdzaG93X3BvcHVwJyxcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICB9KVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24uaW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmV3aXRlbSA9IHtcbiAgICAgICAgICBhY3Rpb25fdXVpZDogdXVpZCxcbiAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICBldmVudFR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICByZWFzb246IHJlYXNvblxuICAgICAgICAgIC8vIHV1aWQ6IHV1aWRcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pXG4gICAgICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gcmVzdWx0LnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG4gICAgICAgIC8vIEFkZCBuZXcgcmVhc29uXG4gICAgICAgIHN0b3JlUmVhc29uc0Fubm90YXRpb24ucHVzaChuZXdpdGVtKVxuICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZWFzb25zQW5ub3RhdGlvbjogc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3B1cDonLCBlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuLy8gbGlzdGVuIHRvIHN3aXRjaGVzIGJldHdlZW4gYWN0aXZhdGVkIHRhYnNcbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFzeW5jIChhY3RpdmVJbmZvKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGFiSWQgPSBhY3RpdmVJbmZvLnRhYklkXG4gICAgY29uc3QgdGFiID0gYXdhaXQgY2hyb21lLnRhYnMuZ2V0KHRhYklkKVxuICAgIGlmICghdGFiKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHRhYiB3aXRoIElEOiAke3RhYklkfWApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc29sZS5sb2coYFN3aXRjaGVkIHRvIHRhYiAke3RhYklkfSB3aXRoIFVSTDogJHt0YWIudXJsfWApXG4gICAgdXBkYXRlX2ljb24odGFiLnVybClcbiAgICBpZiAoXG4gICAgICB0YWIudXJsICYmXG4gICAgICB0YWIudXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSAmJlxuICAgICAgIWZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdGFiLnVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgICApIHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUodGFiLnVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2U/Lmh0bWxcbiAgICAgICAgY29uc3QgcGFnZU1ldGEgPSByZXNwb25zZT8ucGFnZU1ldGFcbiAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrXG4gICAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZFxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpLFxuICAgICAgICAgIHNhdmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICd0YWJBY3RpdmF0ZScsXG4gICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICB0YWIudXJsLFxuICAgICAgICAgICAgY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgICAgICBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgcGFnZU1ldGFcbiAgICAgICAgICApLFxuICAgICAgICAgIHNhdmVTY3JlZW5zaG90KHRhYi53aW5kb3dJZCwgdGltZXN0YW1wLCB1dWlkKSxcbiAgICAgICAgICBzZW5kUG9wdXAodGFiSWQsIHRpbWVzdGFtcCwgJ3RhYkFjdGl2YXRlJywge30sIHV1aWQpXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0YWIgYWN0aXZhdGUgaGFuZGxlcjonLCBlcnJvcilcbiAgfVxufSlcblxuYXN5bmMgZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHRhYklkOiBudW1iZXIsIHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKVxuICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcblxuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgW3sgcmVzdWx0OiBoYXNNYXRjaCB9XSA9IGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgZnVuYzogKHNlbGVjdG9yLCBtYXRjaFRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICAgICAoIW1hdGNoVGV4dCB8fFxuICAgICAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG1hdGNoVGV4dC50b0xvd2VyQ2FzZSgpKSA/PyBmYWxzZSkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhcmdzOiBbcmVjaXBlLm1hdGNoLCByZWNpcGUubWF0Y2hfdGV4dCB8fCAnJ11cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICByZXR1cm4gcmVjaXBlXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xuICBpZiAoZGV0YWlscy5mcmFtZUlkICE9PSAwKSByZXR1cm5cbiAgY29uc29sZS5sb2coJ3dlYk5hdmlnYXRpb24gb25Db21wbGV0ZWQgZXZlbnQgdHJpZ2dlcmVkOicsIGRldGFpbHMpXG4gIHVwZGF0ZV9pY29uKGRldGFpbHMudXJsKVxuICBpZiAoXG4gICAgZGV0YWlscy51cmwuaW5jbHVkZXModXJsX2luY2x1ZGUpICYmXG4gICAgIWZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gZGV0YWlscy51cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gICkge1xuICAgIGNvbnN0IG5hdmlnYXRpb25UeXBlID0gYW5hbHl6ZU5hdmlnYXRpb24oZGV0YWlscy50YWJJZCwgZGV0YWlscy51cmwpXG4gICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YClcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShkZXRhaWxzLnRhYklkLCB7IGFjdGlvbjogJ2dldEhUTUwnIH0sIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZT8uaHRtbFxuICAgICAgY29uc3QgcGFnZU1ldGEgPSByZXNwb25zZT8ucGFnZU1ldGFcbiAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrXG4gICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWRcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgc2F2ZUludGVyYWN0aW9uKFxuICAgICAgICAgICduYXZpZ2F0aW9uJyxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgZGV0YWlscy51cmwsXG4gICAgICAgICAgY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgICAgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgdXVpZCxcbiAgICAgICAgICBuYXZpZ2F0aW9uVHlwZSxcbiAgICAgICAgICBwYWdlTWV0YVxuICAgICAgICApLFxuICAgICAgICBzYXZlU2NyZWVuc2hvdCgoYXdhaXQgY2hyb21lLnRhYnMuZ2V0KGRldGFpbHMudGFiSWQpKS53aW5kb3dJZCwgdGltZXN0YW1wLCB1dWlkKVxuICAgICAgXSlcbiAgICAgIGlmIChuYXZpZ2F0aW9uVHlwZSAhPT0gJ25ldycgJiYgbmF2aWdhdGlvblR5cGUgIT09ICdyZWxvYWQnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2UgdG8gcG9wdXAgbmF2aWdhdGlvbicpXG4gICAgICAgIGF3YWl0IHNlbmRQb3B1cChcbiAgICAgICAgICBkZXRhaWxzLnRhYklkLFxuICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAnbmF2aWdhdGlvbicsXG4gICAgICAgICAgLy8gY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmF2aWdhdGlvblR5cGU6IG5hdmlnYXRpb25UeXBlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1dWlkXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG4vLyBBZGQgY2xlYW51cCB3aGVuIHRhYiBpcyBjbG9zZWRcbmNocm9tZS50YWJzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigodGFiSWQpID0+IHtcbiAgZGVsZXRlIHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXVxufSlcblxuLy8gQWRkIHRoaXMgZnVuY3Rpb24gdG8gaGFuZGxlIGRhdGEgdXBsb2FkXG5hc3luYyBmdW5jdGlvbiBkb3dubG9hZERhdGFMb2NhbGx5KCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csICctJylcblxuICAgIC8vIEdldCB1c2VySWQgYW5kIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgY29uc3QgdXNlcklkUmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgdXNlcklkOiAnJyB9KVxuICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB1c2VySWRSZXN1bHQudXNlcklkXG5cbiAgICBsZXQgdXNlcl9pZCA9IGN1cnJlbnRVc2VySWQgfHwgJ3Vua25vd24nXG5cbiAgICBjb25zdCBmb2xkZXJOYW1lID0gYCR7Zm9sZGVyX25hbWV9L1VTRVJfJHt1c2VyX2lkfS9TRVNTSU9OXyR7dGltZXN0YW1wfWBcblxuICAgIGNvbnN0IHNuYXBzaG90cyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IFtdIH0pXG4gICAgY29uc3QgaW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KVxuICAgIGNvbnN0IHNjcmVlbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNjcmVlbnNob3RzOiBbXSB9KVxuICAgIGNvbnN0IFJlYXNvbnNBbm5vdGF0aW9uID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pXG5cbiAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9XG4gICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgbGV0IHN0b3JlT3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXVxuICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuXG4gICAgLy8gY29uY2F0ZW5hdGluZyB3aXRoIHRoZSBzZWVuIGRhdGFcbiAgICBjb25zdCBzZWVuX2ludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgY29uc3Qgc2Vlbl9zbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2h0bWxTbmFwc2hvdHM6IFtdIH0pXG4gICAgY29uc3Qgc2Vlbl9vcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX29yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzZWVuX3NjcmVlbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgY29uc3Qgc2Vlbl9SZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fcmVhc29uc0Fubm90YXRpb246IFtdIH0pXG5cbiAgICBsZXQgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IHNlZW5faW50ZXJhY3Quc2Vlbl9pbnRlcmFjdGlvbnMgfHwgW11cbiAgICBsZXQgc2Vlbl9odG1sU25hcHNob3RzID0gc2Vlbl9zbmFwc2hvdHMuc2Vlbl9odG1sU25hcHNob3RzIHx8IHt9XG4gICAgbGV0IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBzZWVuX29yZGVyRGV0YWlscy5zZWVuX29yZGVyRGV0YWlscyB8fCBbXVxuICAgIGxldCBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBzZWVuX3NjcmVlbi5zZWVuX3NjcmVlbnNob3RzIHx8IFtdXG4gICAgbGV0IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHNlZW5fUmVhc29uc0Fubm90YXRpb24uc2Vlbl9yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuXG4gICAgc3RvcmVJbnRlcmFjdGlvbnMgPSBbLi4uc2Vlbl9zdG9yZUludGVyYWN0aW9ucywgLi4uc3RvcmVJbnRlcmFjdGlvbnNdXG4gICAgaHRtbFNuYXBzaG90cyA9IHsgLi4uc2Vlbl9odG1sU25hcHNob3RzLCAuLi5odG1sU25hcHNob3RzIH1cbiAgICBzdG9yZU9yZGVyRGV0YWlscyA9IFsuLi5zZWVuX3N0b3JlT3JkZXJEZXRhaWxzLCAuLi5zdG9yZU9yZGVyRGV0YWlsc11cbiAgICBzdG9yZVNjcmVlbnNob3RzID0gWy4uLnNlZW5fc3RvcmVTY3JlZW5zaG90cywgLi4uc3RvcmVTY3JlZW5zaG90c11cbiAgICBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gWy4uLnNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbl1cblxuICAgIGlmICghemlwKSB7XG4gICAgICAvLyBVcGxvYWQgc2Vzc2lvbiBpbmZvXG4gICAgICBjb25zb2xlLmxvZygnZG93bmxvYWRpbmcgc2Vzc2lvbiBpbmZvJylcbiAgICAgIGNvbnN0IHNlc3Npb25JbmZvQ29udGVudCA9IGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9LCB1c2VyIGlkOiAke2N1cnJlbnRVc2VySWR9LFxcbiBvcmRlciBkZXRhaWxzOiBcXG4gJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgc3RvcmVvcmRlckRldGFpbHNcbiAgICAgICl9YFxuICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgIHVybDogJ2RhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvbkluZm9Db250ZW50KSxcbiAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3Nlc3Npb25faW5mby50eHRgLFxuICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBodG1sIHNuYXBzaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgYXdhaXQgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2h0bWw7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGh0bWxDb250ZW50KSxcbiAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpfS5odG1sYCxcbiAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIGludGVyYWN0aW9ucycpXG4gICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgIH1cbiAgICAgIGNvbnN0IGludGVyYWN0aW9uc0RhdGEgPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcbiAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6ICdkYXRhOnRleHQvanNvbjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUklDb21wb25lbnQoaW50ZXJhY3Rpb25zRGF0YSksXG4gICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMuanNvbmAsXG4gICAgICAgIHNhdmVBczogZmFsc2VcbiAgICAgIH0pXG5cbiAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIHNjcmVlbnNob3RzJylcbiAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgdXJsOiBzY3JlZW5zaG90RGF0YSxcbiAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vc2NyZWVuc2hvdHMvJHtzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpfS5qcGdgLFxuICAgICAgICAgIHNhdmVBczogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIHppcCBmaWxlJylcbiAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpXG4gICAgICB6aXAuZmlsZShcbiAgICAgICAgJ3Nlc3Npb25faW5mby50eHQnLFxuICAgICAgICBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfVxuICAgICAgICAgIFxcbiB1c2VyIGlkOiAke3VzZXJfaWR9XG4gICAgICAgICAgICAgICAgXFxuIG9yZGVyIGRldGFpbHM6XG4gICAgICAgICAgICAgICAgXFxuICR7SlNPTi5zdHJpbmdpZnkob3JkZXJEZXRhaWxzKX1gXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgICBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zLFxuICAgICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuICAgICAgICBvcmRlckRldGFpbHM6IG9yZGVyRGV0YWlsc1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnNfanNvbiA9IEpTT04uc3RyaW5naWZ5KGZ1bGxEYXRhLCBudWxsLCAyKVxuICAgICAgemlwLmZpbGUoJ2ludGVyYWN0aW9ucy5qc29uJywgaW50ZXJhY3Rpb25zX2pzb24pXG4gICAgICBjb25zdCBzY3JlZW5zaG90c0ZvbGRlciA9IHppcC5mb2xkZXIoJ3NjcmVlbnNob3RzJylcbiAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzY3JlZW5zaG90RGF0YSlcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuICAgICAgICBzY3JlZW5zaG90c0ZvbGRlci5maWxlKHNjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csICctJykgKyAnLmpwZycsIGJsb2IpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHNGb2xkZXIgPSB6aXAuZm9sZGVyKCdodG1sU25hcHNob3RzJylcbiAgICAgIGZvciAoY29uc3QgW3NuYXBzaG90SWQsIGh0bWxDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhodG1sU25hcHNob3RzKSkge1xuICAgICAgICBodG1sU25hcHNob3RzRm9sZGVyLmZpbGUoc25hcHNob3RJZCArICcuaHRtbCcsIGh0bWxDb250ZW50KVxuICAgICAgfVxuXG4gICAgICBjb25zdCB6aXBCbG9iID0gYXdhaXQgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSlcbiAgICAgIGNvbnNvbGUubG9nKCd6aXAgZmlsZSBpcyBnZW5lcmF0ZWQnKVxuXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBiYXNlNjRaaXAgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV0gLy8gR2V0IHRoZSBiYXNlNjQgcGFydFxuICAgICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgICB1cmw6ICdkYXRhOmFwcGxpY2F0aW9uL3ppcDtiYXNlNjQsJyArIGJhc2U2NFppcCxcbiAgICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0uemlwYCxcbiAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh6aXBCbG9iKVxuICAgIH1cblxuICAgIC8vIENsZWFyIGNhY2hlIGFmdGVyIHN1Y2Nlc3NmdWwgdXBsb2FkXG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtcbiAgICAgICdzZWVuX2h0bWxTbmFwc2hvdHMnLFxuICAgICAgJ3NlZW5faW50ZXJhY3Rpb25zJyxcbiAgICAgICdzZWVuX29yZGVyRGV0YWlscycsXG4gICAgICAnc2Vlbl9zY3JlZW5zaG90cycsXG4gICAgICAnc2Vlbl9yZWFzb25zQW5ub3RhdGlvbidcbiAgICBdKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkb3dubG9hZCBkYXRhOicsIGVycm9yKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZXNpZ25lZEZvcm1EYXRhKG5hbWUpIHtcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICBmb3JtRGF0YS5hcHBlbmQoJ2tleScsIG5hbWUpXG5cbiAgT2JqZWN0LmtleXMobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLmZpZWxkcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleSAhPSAna2V5JykgZm9ybURhdGEuYXBwZW5kKGtleSwgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLmZpZWxkc1trZXldKVxuICB9KVxuXG4gIHJldHVybiBmb3JtRGF0YVxufVxuXG5jb25zdCBjdXN0b21GZXRjaCA9IGFzeW5jICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpXG5cbiAgLy8gSWYgcmVzcG9uc2UgaXMgbm90IE9LIChzdGF0dXMgY29kZSBub3QgaW4gMjAwLTI5OSByYW5nZSksIHRocm93IGFuIGVycm9yXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YClcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZVxufVxuXG5hc3luYyBmdW5jdGlvbiBnemlwSHRtbChjb250ZW50KSB7XG4gIC8vIENyZWF0ZSBhIG5ldyBHWklQIGNvbXByZXNzaW9uIHN0cmVhbVxuICBjb25zdCBjcyA9IG5ldyBDb21wcmVzc2lvblN0cmVhbSgnZ3ppcCcpXG5cbiAgLy8gQ3JlYXRlIGEgd3JpdGFibGUgc3RyZWFtIHRvIHdoaWNoIHdlJ2xsIHdyaXRlIHRoZSBjb21wcmVzc2VkIGRhdGFcbiAgY29uc3Qgd3JpdGVyID0gY3Mud3JpdGFibGUuZ2V0V3JpdGVyKClcblxuICAvLyBFbmNvZGUgdGhlIGNvbnRlbnQgdG8gVWludDhBcnJheVxuICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcbiAgY29uc3QgZW5jb2RlZENvbnRlbnQgPSBlbmNvZGVyLmVuY29kZShjb250ZW50KVxuXG4gIC8vIFdyaXRlIHRoZSBlbmNvZGVkIGNvbnRlbnQgaW50byB0aGUgY29tcHJlc3Npb24gc3RyZWFtXG4gIHdyaXRlci53cml0ZShlbmNvZGVkQ29udGVudClcblxuICAvLyBDbG9zZSB0aGUgd3JpdGVyIHRvIGZpbmlzaCBjb21wcmVzc2lvblxuICB3cml0ZXIuY2xvc2UoKVxuXG4gIC8vIEdldCB0aGUgY29tcHJlc3NlZCBkYXRhIGFzIGEgQmxvYlxuICBjb25zdCBjb21wcmVzc2VkQmxvYiA9IGF3YWl0IG5ldyBSZXNwb25zZShjcy5yZWFkYWJsZSkuYmxvYigpXG5cbiAgcmV0dXJuIGNvbXByZXNzZWRCbG9iXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcigpIHtcbiAgc3RvcFBlcmlvZGljVXBsb2FkKClcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICBjb25zdCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBpbnRlcmFjdGlvbnMgYW5kIGdldCB0aGUgbGF0ZXN0IHRpbWVzdGFtcFxuICAgIGlmIChzdG9yZUludGVyYWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcmFjdGlvbnMgdG8gdXBsb2FkJylcbiAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxhc3RUaW1lc3RhbXAgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoe1xuICAgICAgdXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wOiBudWxsXG4gICAgfSlcbiAgICBsYXN0VGltZXN0YW1wID0gbGFzdFRpbWVzdGFtcC51c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXAgfHwgbnVsbFxuXG4gICAgaWYgKGxhc3RUaW1lc3RhbXApIGNvbnNvbGUubG9nKCdsYXN0VGltZXN0YW1wIHJlc3RvcmVkOiAnLCBsYXN0VGltZXN0YW1wKVxuXG4gICAgY29uc3QgdGltZXN0YW1wID0gbGFzdFRpbWVzdGFtcCB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpXG5cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgdXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICB9KSAvLyBtYWtpbmcgc3VyZSB3aXRoIHJlb3BlbmluZyB0aGUgYnJvd3NlciwgaXQgY29udGludWVzIGZyb20gbGVmdCBwb2ludCBhbmQgcmV3cml0ZXMgdGhlIGluZm9ybWF0aW9uXG5cbiAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSlcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZFxuXG4gICAgbGV0IHVzZXJfaWQgPSBjdXJyZW50VXNlcklkIHx8ICd1bmtub3duJ1xuXG4gICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSLyR7dXNlcl9pZH1gXG5cbiAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgbGV0IGh0bWxTbmFwc2hvdHMgPSBzbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgIGxldCBzdG9yZU9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHNjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgIGNvbnN0IGZ1bGxEYXRhID0ge1xuICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICBvcmRlckRldGFpbHM6IHN0b3JlT3JkZXJEZXRhaWxzXG4gICAgfVxuICAgIGlmIChcbiAgICAgICFsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UgfHxcbiAgICAgIGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZT8uZXhwaXJlX3RpbWVzdGFtcCA8IERhdGUubm93KCkgLyAxMDAwIHx8IC8vIHByZXZlbnQgZnJvbSByZXF1ZXN0aW5nIGZvciBwb3N0IHVybCBvdmVyIGFuZCBvdmVyXG4gICAgICAhbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5maWVsZHM/LmtleS5pbmNsdWRlcyh1c2VyX2lkKVxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coJ2dldHRpbmcgbmV3IHBvc3QgdXJsJylcbiAgICAgIGNvbnNvbGUubG9nKGAke2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YClcbiAgICAgIGxldCBwb3N0VXJsUmVzdWx0ID0gYXdhaXQgY3VzdG9tRmV0Y2goYCR7Z2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pXG5cbiAgICAgIGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZSA9IGF3YWl0IHBvc3RVcmxSZXN1bHQuanNvbigpXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ25ldyBwb3N0IHVybCByZWNlaXZlZCcsXG4gICAgICAgIGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZT8uZXhwaXJlX3RpbWVzdGFtcCAtIERhdGUubm93KCkgLyAxMDAwXG4gICAgICApXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXNzaW9uSW5mbyA9IG5ldyBCbG9iKFxuICAgICAgICBbXG4gICAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgXFxuIHVzZXIgaWQ6ICR7dXNlcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgXFxuIG9yZGVyIGRldGFpbHM6XG4gICAgICAgICAgICAgICAgICAgIFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgICBdLFxuICAgICAgICB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9XG4gICAgICApXG4gICAgICBjb25zdCBzZXNzaW9uRm9ybURhdGEgPSBwcmVzaWduZWRGb3JtRGF0YShgJHtmb2xkZXJOYW1lfS9vcmRlcl9pbmZvXyR7dGltZXN0YW1wfS50eHRgKVxuICAgICAgc2Vzc2lvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlc3Npb25JbmZvKVxuXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpXG4gICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBzZXNzaW9uRm9ybURhdGFcbiAgICAgIH0pXG5cbiAgICAgIC8vIFVwbG9hZCBIVE1MIHNuYXBzaG90cyBhcyBzZXBhcmF0ZSBmaWxlc1xuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBodG1sIHNuYXBzaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgLy8gY29uc3QgaHRtbEJsb2IgPSBuZXcgQmxvYihbaHRtbENvbnRlbnRdLCB7IHR5cGU6ICd0ZXh0L2h0bWwnIH0pXG4gICAgICAgIGNvbnN0IGh0bWxCbG9iID0gYXdhaXQgZ3ppcEh0bWwoaHRtbENvbnRlbnQpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWR9Lmh0bWwuZ3pgKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBodG1sQmxvYilcblxuICAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJylcbiAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjdXN0b21GZXRjaChzY3JlZW5zaG90RGF0YSlcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKFxuICAgICAgICAgIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYFxuICAgICAgICApXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtlfWApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtpbnRlcmFjdGlvbnNfanNvbl0sIHtcbiAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgICAgY29uc3QganNvbkZvcm1EYXRhRmlsZSA9IHByZXNpZ25lZEZvcm1EYXRhKGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9uc18ke3RpbWVzdGFtcH0uanNvbmApXG5cbiAgICAgIGpzb25Gb3JtRGF0YUZpbGUuYXBwZW5kKCdmaWxlJywgaW50ZXJhY3Rpb25zQmxvYilcblxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToganNvbkZvcm1EYXRhRmlsZVxuICAgICAgfSlcblxuICAgICAgY29uc3QganNvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnaW50ZXJhY3Rpb25zJywgaW50ZXJhY3Rpb25zX2pzb24pXG4gICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCd1c2VyX2lkJywgdXNlcl9pZClcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMgYXMgYSBqc29uJylcbiAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGludGVyYWN0aW9uc191cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh1c2VyX2lkLmluY2x1ZGVzKGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCkpIHtcbiAgICAgIGNvbnN0IHNlZW5faW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2ludGVyYWN0aW9uczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9odG1sU25hcHNob3RzOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9vcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX29yZGVyRGV0YWlsczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9zY3JlZW5zaG90czogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgICBsZXQgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IHNlZW5faW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9odG1sU25hcHNob3RzID0gc2Vlbl9zbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgICAgbGV0IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBzZWVuX29yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICAgIGxldCBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBzZWVuX3NjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgICAgbGV0IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHNlZW5fUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgICAgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IFsuLi5zZWVuX3N0b3JlSW50ZXJhY3Rpb25zLCAuLi5zdG9yZUludGVyYWN0aW9uc11cbiAgICAgIHNlZW5faHRtbFNuYXBzaG90cyA9IHsgLi4uc2Vlbl9odG1sU25hcHNob3RzLCAuLi5odG1sU25hcHNob3RzIH1cbiAgICAgIHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgICBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBbLi4uc2Vlbl9zdG9yZVNjcmVlbnNob3RzLCAuLi5zdG9yZVNjcmVlbnNob3RzXVxuICAgICAgc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gWy4uLnNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbl1cblxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faHRtbFNuYXBzaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fc2NyZWVuc2hvdHM6IHNlZW5fc3RvcmVTY3JlZW5zaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pXG4gICAgfVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IG51bGxcblxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAnaHRtbFNuYXBzaG90cycsXG4gICAgICAnb3JkZXJEZXRhaWxzJyxcbiAgICAgICdzY3JlZW5zaG90cycsXG4gICAgICAncmVhc29uc0Fubm90YXRpb24nLFxuICAgICAgJ2ludGVyYWN0aW9ucycsXG4gICAgICAndXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wJ1xuICAgIF0pXG4gICAgaW50ZXJhY3Rpb25zLmxlbmd0aCA9IDBcbiAgICBzY3JlZW5zaG90cy5sZW5ndGggPSAwXG4gICAgcmVhc29uc0Fubm90YXRpb24ubGVuZ3RoID0gMFxuXG4gICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBkYXRhOicsIGVycm9yKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gIGlmICghdXBsb2FkVGltZXIpIHtcbiAgICBjb25zb2xlLmxvZygnc3RhcnRQZXJpb2RpY1VwbG9hZCcpXG4gICAgdXBsb2FkVGltZXIgPSBzZXRJbnRlcnZhbCh1cGxvYWREYXRhVG9TZXJ2ZXJfbmV3LCAxMDAwMCkgLy8gMTAgc2Vjb25kc1xuICB9XG59XG5cbi8vIFN0b3AgdGhlIHBlcmlvZGljIHVwbG9hZCB0aW1lclxuZnVuY3Rpb24gc3RvcFBlcmlvZGljVXBsb2FkKCkge1xuICBpZiAodXBsb2FkVGltZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc3RvcFBlcmlvZGljVXBsb2FkJylcbiAgICBjbGVhckludGVydmFsKHVwbG9hZFRpbWVyKVxuICAgIHVwbG9hZFRpbWVyID0gZmFsc2VcbiAgfVxufVxuaWYgKHVwbG9hZFRpbWVyID09IG51bGwpIHtcbiAgY29uc29sZS5sb2coJy0taW5pdGlhbGl6aW5nIGludGVydmFsLS0nKVxuICBzdGFydFBlcmlvZGljVXBsb2FkKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBsb2FkRGF0YVRvU2VydmVyX25ldygpIHtcbiAgc3RvcFBlcmlvZGljVXBsb2FkKClcbiAgdHJ5IHtcbiAgICBjb25zdCBjaGVja0ludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgIGNvbnN0IGNoZWNrc3RvcmVJbnRlcmFjdGlvbnMgPSBjaGVja0ludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBpbnRlcmFjdGlvbnMgYW5kIGdldCB0aGUgbGF0ZXN0IHRpbWVzdGFtcFxuICAgIGlmIChjaGVja3N0b3JlSW50ZXJhY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ05vIGludGVyYWN0aW9ucyB0byB1cGxvYWQnKVxuICAgICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgbGFzdHVwbG9hZFRpbWVzdGFtcCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGxhc3R1cGxvYWRUaW1lc3RhbXA6IG51bGwgfSlcbiAgICBsYXN0dXBsb2FkVGltZXN0YW1wID0gbGFzdHVwbG9hZFRpbWVzdGFtcC5sYXN0dXBsb2FkVGltZXN0YW1wIHx8IG51bGxcbiAgICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG5cbiAgICBsYXN0VGltZXN0YW1wID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHtcbiAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogbnVsbFxuICAgIH0pXG4gICAgbGFzdFRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAudXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wIHx8IG51bGxcblxuICAgIGlmIChsYXN0VGltZXN0YW1wKSBjb25zb2xlLmxvZygnbGFzdFRpbWVzdGFtcCByZXN0b3JlZDogJywgbGFzdFRpbWVzdGFtcClcblxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAgfHwgY3VycmVudFRpbWVzdGFtcC5yZXBsYWNlKC9bOi5dL2csICctJylcblxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgICB1c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXA6IHRpbWVzdGFtcFxuICAgIH0pIC8vIG1ha2luZyBzdXJlIHdpdGggcmVvcGVuaW5nIHRoZSBicm93c2VyLCBpdCBjb250aW51ZXMgZnJvbSBsZWZ0IHBvaW50IGFuZCByZXdyaXRlcyB0aGUgaW5mb3JtYXRpb25cblxuICAgIC8vIEdldCB1c2VySWQgYW5kIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgY29uc3QgdXNlcklkUmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgdXNlcklkOiAnJyB9KVxuICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB1c2VySWRSZXN1bHQudXNlcklkXG5cbiAgICBsZXQgdXNlcl9pZCA9IGN1cnJlbnRVc2VySWQgfHwgJ3Vua25vd24nXG5cbiAgICBjb25zdCBmb2xkZXJOYW1lID0gYCR7Zm9sZGVyX25hbWV9L1VTRVIvJHt1c2VyX2lkfWBcblxuICAgIGNvbnN0IHNuYXBzaG90cyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IFtdIH0pXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KVxuICAgIGNvbnN0IHNjcmVlbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNjcmVlbnNob3RzOiBbXSB9KVxuICAgIGNvbnN0IFJlYXNvbnNBbm5vdGF0aW9uID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pXG4gICAgY29uc3QgaW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG5cbiAgICBjb25zdCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbiAgICBsZXQgc3RvcmVPcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbiAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbiAgICBjb25zdCBpbnRlcmFjdGlvbnNUb1VwbG9hZCA9IHN0b3JlSW50ZXJhY3Rpb25zLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFsYXN0dXBsb2FkVGltZXN0YW1wIHx8IGl0ZW0udGltZXN0YW1wID4gbGFzdHVwbG9hZFRpbWVzdGFtcFxuICAgIH0pXG4gICAgY29uc3Qgc25hcHNob3RzVG9VcGxvYWQgPSBPYmplY3QuZW50cmllcyhodG1sU25hcHNob3RzKS5maWx0ZXIoKFtzbmFwc2hvdElkLCBjb250ZW50XSkgPT4ge1xuICAgICAgLy8gRXh0cmFjdCB0aW1lc3RhbXAgZnJvbSBzbmFwc2hvdElkIChmb3JtYXQ6IGh0bWxfJHtoYXNofV8ke3RpbWVzdGFtcH1fJHt1dWlkfSlcbiAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc25hcHNob3RJZC5tYXRjaCgvXyhcXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfS5cXGR7M31aKV8vKVxuICAgICAgaWYgKCF0aW1lc3RhbXBNYXRjaCkgcmV0dXJuIHRydWUgLy8gSW5jbHVkZSBpZiBjYW4ndCBwYXJzZSB0aW1lc3RhbXBcbiAgICAgIGNvbnN0IHNuYXBzaG90VGltZXN0YW1wID0gdGltZXN0YW1wTWF0Y2hbMV1cbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBzbmFwc2hvdFRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHNjcmVlbnNob3RzVG9VcGxvYWQgPSBzdG9yZVNjcmVlbnNob3RzLmZpbHRlcigoW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdKSA9PiB7XG4gICAgICAvLyBFeHRyYWN0IHRpbWVzdGFtcCBmcm9tIHNjcmVlbnNob3RJZCAoZm9ybWF0OiBzY3JlZW5zaG90XyR7dGltZXN0YW1wfV8ke3V1aWR9KVxuICAgICAgY29uc3QgdGltZXN0YW1wTWF0Y2ggPSBzY3JlZW5zaG90SWQubWF0Y2goL3NjcmVlbnNob3RfKC4rPylfLylcbiAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlIC8vIEluY2x1ZGUgaWYgY2FuJ3QgcGFyc2UgdGltZXN0YW1wXG4gICAgICBjb25zdCBzY3JlZW5zaG90VGltZXN0YW1wID0gdGltZXN0YW1wTWF0Y2hbMV1cbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBzY3JlZW5zaG90VGltZXN0YW1wID4gbGFzdHVwbG9hZFRpbWVzdGFtcFxuICAgIH0pXG4gICAgY29uc3QgcmVhc29uc0Fubm90YXRpb25Ub1VwbG9hZCA9IHN0b3JlUmVhc29uc0Fubm90YXRpb24uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgaXRlbS50aW1lc3RhbXAgPiBsYXN0dXBsb2FkVGltZXN0YW1wXG4gICAgfSlcbiAgICBjb25zdCBvcmRlckRldGFpbHNUb1VwbG9hZCA9IHN0b3JlT3JkZXJEZXRhaWxzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFsYXN0dXBsb2FkVGltZXN0YW1wIHx8IGl0ZW0udGltZXN0YW1wID4gbGFzdHVwbG9hZFRpbWVzdGFtcFxuICAgIH0pXG5cbiAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgIGludGVyYWN0aW9uczogaW50ZXJhY3Rpb25zVG9VcGxvYWQsXG4gICAgICByZWFzb25zOiByZWFzb25zQW5ub3RhdGlvblRvVXBsb2FkLFxuICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNUb1VwbG9hZFxuICAgIH1cbiAgICBpZiAoXG4gICAgICAhbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlIHx8XG4gICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgPCBEYXRlLm5vdygpIC8gMTAwMCB8fCAvLyBwcmV2ZW50IGZyb20gcmVxdWVzdGluZyBmb3IgcG9zdCB1cmwgb3ZlciBhbmQgb3ZlclxuICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZT8uZmllbGRzPy5rZXkuaW5jbHVkZXModXNlcl9pZClcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIG5ldyBwb3N0IHVybCcpXG4gICAgICBjb25zb2xlLmxvZyhgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWApXG4gICAgICBsZXQgcG9zdFVybFJlc3VsdCA9IGF3YWl0IGN1c3RvbUZldGNoKGAke2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuXG4gICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UgPSBhd2FpdCBwb3N0VXJsUmVzdWx0Lmpzb24oKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICduZXcgcG9zdCB1cmwgcmVjZWl2ZWQnLFxuICAgICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgLSBEYXRlLm5vdygpIC8gMTAwMFxuICAgICAgKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihcbiAgICAgICAgW1xuICAgICAgICAgIGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgIFxcbiB1c2VyIGlkOiAke3VzZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuICAgICAgICAgICAgICAgICAgICBcXG4gJHtKU09OLnN0cmluZ2lmeShvcmRlckRldGFpbHNUb1VwbG9hZCl9YFxuICAgICAgICBdLFxuICAgICAgICB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9XG4gICAgICApXG4gICAgICBjb25zdCBzZXNzaW9uRm9ybURhdGEgPSBwcmVzaWduZWRGb3JtRGF0YShgJHtmb2xkZXJOYW1lfS9vcmRlcl9pbmZvXyR7dGltZXN0YW1wfS50eHRgKVxuICAgICAgc2Vzc2lvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlc3Npb25JbmZvKVxuXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpXG4gICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBzZXNzaW9uRm9ybURhdGFcbiAgICAgIH0pXG5cbiAgICAgIC8vIFVwbG9hZCBIVE1MIHNuYXBzaG90cyBhcyBzZXBhcmF0ZSBmaWxlc1xuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBodG1sIHNuYXBzaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2Ygc25hcHNob3RzVG9VcGxvYWQpIHtcbiAgICAgICAgY29uc3QgaHRtbEJsb2IgPSBhd2FpdCBnemlwSHRtbChodG1sQ29udGVudClcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBwcmVzaWduZWRGb3JtRGF0YShgJHtmb2xkZXJOYW1lfS9odG1sLyR7c25hcHNob3RJZH0uaHRtbC5nemApXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGh0bWxCbG9iKVxuXG4gICAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc2NyZWVuc2hvdERhdGEsIHNjcmVlbnNob3RJZF0gb2Ygc2NyZWVuc2hvdHNUb1VwbG9hZCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGN1c3RvbUZldGNoKHNjcmVlbnNob3REYXRhKVxuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoXG4gICAgICAgICAgYCR7Zm9sZGVyTmFtZX0vc2NyZWVuc2hvdHMvJHtzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpfS5qcGdgXG4gICAgICAgIClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgYmxvYilcblxuICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJylcbiAgICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiAke2V9YClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gVXBsb2FkIGludGVyYWN0aW9ucyBKU09OXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGludGVyYWN0aW9ucycpXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnNfanNvbiA9IEpTT04uc3RyaW5naWZ5KGZ1bGxEYXRhLCBudWxsLCAyKVxuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnNCbG9iID0gbmV3IEJsb2IoW2ludGVyYWN0aW9uc19qc29uXSwge1xuICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgICBjb25zdCBqc29uRm9ybURhdGFGaWxlID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zXyR7dGltZXN0YW1wfS5qc29uYClcblxuICAgICAganNvbkZvcm1EYXRhRmlsZS5hcHBlbmQoJ2ZpbGUnLCBpbnRlcmFjdGlvbnNCbG9iKVxuXG4gICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBqc29uRm9ybURhdGFGaWxlXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBqc29uRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCdpbnRlcmFjdGlvbnMnLCBpbnRlcmFjdGlvbnNfanNvbilcbiAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ3VzZXJfaWQnLCB1c2VyX2lkKVxuXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGludGVyYWN0aW9ucyBhcyBhIGpzb24nKVxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2goaW50ZXJhY3Rpb25zX3VybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToganNvbkZvcm1EYXRhXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBkYXRhOicsIGVycm9yKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHVzZXJfaWQuaW5jbHVkZXMoZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkKSkge1xuICAgICAgY29uc3Qgc2Vlbl9pbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9zbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2h0bWxTbmFwc2hvdHM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX29yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fb3JkZXJEZXRhaWxzOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9zY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3NjcmVlbnNob3RzOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9SZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fcmVhc29uc0Fubm90YXRpb246IFtdIH0pXG5cbiAgICAgIGxldCBzZWVuX3N0b3JlSW50ZXJhY3Rpb25zID0gc2Vlbl9pbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICAgIGxldCBzZWVuX2h0bWxTbmFwc2hvdHMgPSBzZWVuX3NuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9XG4gICAgICBsZXQgc2Vlbl9zdG9yZU9yZGVyRGV0YWlscyA9IHNlZW5fb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXVxuICAgICAgbGV0IHNlZW5fc3RvcmVTY3JlZW5zaG90cyA9IHNlZW5fc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gc2Vlbl9SZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuXG4gICAgICBzZWVuX3N0b3JlSW50ZXJhY3Rpb25zID0gWy4uLnNlZW5fc3RvcmVJbnRlcmFjdGlvbnMsIC4uLnN0b3JlSW50ZXJhY3Rpb25zXVxuICAgICAgc2Vlbl9odG1sU25hcHNob3RzID0geyAuLi5zZWVuX2h0bWxTbmFwc2hvdHMsIC4uLmh0bWxTbmFwc2hvdHMgfVxuICAgICAgc2Vlbl9zdG9yZU9yZGVyRGV0YWlscyA9IFsuLi5zZWVuX3N0b3JlT3JkZXJEZXRhaWxzLCAuLi5zdG9yZU9yZGVyRGV0YWlsc11cbiAgICAgIHNlZW5fc3RvcmVTY3JlZW5zaG90cyA9IFsuLi5zZWVuX3N0b3JlU2NyZWVuc2hvdHMsIC4uLnN0b3JlU2NyZWVuc2hvdHNdXG4gICAgICBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gPSBbLi4uc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uLCAuLi5zdG9yZVJlYXNvbnNBbm5vdGF0aW9uXVxuXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX2ludGVyYWN0aW9uczogc2Vlbl9zdG9yZUludGVyYWN0aW9ucyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9odG1sU25hcHNob3RzIH0pXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX29yZGVyRGV0YWlsczogc2Vlbl9zdG9yZU9yZGVyRGV0YWlscyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9zY3JlZW5zaG90czogc2Vlbl9zdG9yZVNjcmVlbnNob3RzIH0pXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gfSlcbiAgICB9XG5cbiAgICBsYXN0VGltZXN0YW1wID0gbnVsbFxuICAgIGxhc3R1cGxvYWRUaW1lc3RhbXAgPSBjdXJyZW50VGltZXN0YW1wXG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgbGFzdHVwbG9hZFRpbWVzdGFtcDogbGFzdHVwbG9hZFRpbWVzdGFtcCB9KVxuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHtcbiAgICAgIGludGVyYWN0aW9uczogW10sXG4gICAgICBodG1sU25hcHNob3RzOiB7fSxcbiAgICAgIG9yZGVyRGV0YWlsczogW10sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICByZWFzb25zQW5ub3RhdGlvbjogW11cbiAgICB9KVxuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBpbnRlcmFjdGlvbnM6IGN1cnJlbnREYXRhLmludGVyYWN0aW9ucy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcCksXG5cbiAgICAgIGh0bWxTbmFwc2hvdHM6IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY3VycmVudERhdGEuaHRtbFNuYXBzaG90cykuZmlsdGVyKChbc25hcHNob3RJZF0pID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lc3RhbXBNYXRjaCA9IHNuYXBzaG90SWQubWF0Y2goL18oXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn0uXFxkezN9WilfLylcbiAgICAgICAgICBpZiAoIXRpbWVzdGFtcE1hdGNoKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGNvbnN0IHNuYXBzaG90VGltZXN0YW1wID0gdGltZXN0YW1wTWF0Y2hbMV1cbiAgICAgICAgICByZXR1cm4gc25hcHNob3RUaW1lc3RhbXAgPiBjdXJyZW50VGltZXN0YW1wXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgb3JkZXJEZXRhaWxzOiBjdXJyZW50RGF0YS5vcmRlckRldGFpbHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXApLFxuICAgICAgc2NyZWVuc2hvdHM6IGN1cnJlbnREYXRhLnNjcmVlbnNob3RzLmZpbHRlcigoW18sIHNjcmVlbnNob3RJZF0pID0+IHtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wTWF0Y2ggPSBzY3JlZW5zaG90SWQubWF0Y2goL3NjcmVlbnNob3RfKC4rPylfLylcbiAgICAgICAgaWYgKCF0aW1lc3RhbXBNYXRjaCkgcmV0dXJuIHRydWVcbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICAgIHJldHVybiBzY3JlZW5zaG90VGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgfSksXG4gICAgICByZWFzb25zQW5ub3RhdGlvbjogY3VycmVudERhdGEucmVhc29uc0Fubm90YXRpb24uZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50aW1lc3RhbXAgPiBjdXJyZW50VGltZXN0YW1wXG4gICAgICApXG4gICAgfVxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldChuZXdEYXRhKVxuICAgIC8vIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgLy8gICAnaHRtbFNuYXBzaG90cycsXG4gICAgLy8gICAnb3JkZXJEZXRhaWxzJyxcbiAgICAvLyAgICdzY3JlZW5zaG90cycsXG4gICAgLy8gICAncmVhc29uc0Fubm90YXRpb24nLFxuICAgIC8vICAgJ2ludGVyYWN0aW9ucycsXG4gICAgLy8gICAndXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wJ1xuICAgIC8vIF0pXG4gICAgLy8gaW50ZXJhY3Rpb25zLmxlbmd0aCA9IDBcbiAgICAvLyBzY3JlZW5zaG90cy5sZW5ndGggPSAwXG4gICAgLy8gcmVhc29uc0Fubm90YXRpb24ubGVuZ3RoID0gMFxuXG4gICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBkYXRhOicsIGVycm9yKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG4iXSwibmFtZXMiOlsicG9wdXBfcHJvYmFiaWxpdHkiLCJmb2xkZXJfbmFtZSIsInppcCIsInVwbG9hZF91cmwiLCJiYXNlX3VybCIsImRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCIsInVybF9pbmNsdWRlIiwiaW50ZXJhY3Rpb25fdXJsIiwiY29uY2F0IiwiZmlsdGVyX3VybCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJjbGlja2FibGUiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwibmFtZUVtIiwiY2xvc2VzdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ1cmwiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfZWxlbWVudCRjbG9zZXN0MyIsIl9lbGVtZW50JGNsb3Nlc3Q0IiwicHJvZHVjdF9mYWN0cyIsInByb2R1Y3RfZGVsaXZlcnkiLCJxdWFudGl0eV9zZWxlY3RvciIsImRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciIsInNldF91cF9ub3dfYnV0dG9uIiwiYWRkX3RvX2NhcnRfYnV0dG9uIiwiYnV5X25vd19idXR0b24iLCJidXlfYm94X3dpdGhfYWNjb3JkaW9uIiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCIsImNhcnQiLCJ0ZXh0X2Zvcm1hdCIsInJlY2lwZXMiLCJtYXRjaCIsIm1hdGNoX21ldGhvZCIsIl9lbSRpbm5lclRleHQiLCJyZXBsYWNlIiwiX2VtJGlubmVyVGV4dDIiLCJfZW0kaW5uZXJUZXh0MyIsInJhbmdlIiwia2VlcF9hdHRyIiwib3ZlcnJpZGVfYXR0ciIsInN0ZXBfdmFsdWVzIiwiZm9ybUVtIiwicHJvcCIsInN0ZXBzIiwiSlNPTiIsInBhcnNlIiwic3RlcExhYmVscyIsImN1cnJlbnRfdmFsdWUiLCJOdW1iZXIiLCJwYXJzZUludCIsImluc2VydF9zcGxpdF9tYXJrZXIiLCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsImNsaWNrX3NlbGVjdG9yIiwibWF0Y2hfdGV4dCIsImxhYmVsIiwiX2VtJGlubmVyVGV4dDQiLCJfZW0kcXVlcnlTZWxlY3RvciIsIl9lbSRxdWVyeVNlbGVjdG9yMiIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NSIsImFzaW5FbSIsInRlcm1pbmF0ZSIsImFyZ3VtZW50cyIsInRlcm1pbmF0ZV9jYWxsYmFjayIsImlzRnJvbVBvcHVwIiwidXBkYXRlX2ljb24iLCJpbmNsdWRlcyIsInNvbWUiLCJleGNsdWRlVXJsIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJmaW5kUGFnZU1ldGEiLCJhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSIsImRvY3VtZW50IiwiZ3JvdXBlZFJlc3VsdCIsImZvckVhY2giLCJtZXRhTmFtZSIsIm1ldGFEYXRhIiwicHVzaCIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsInNob3VsZEV4Y2x1ZGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJ2NCIsInV1aWR2NCIsIkpTWmlwIiwiaW50ZXJhY3Rpb25zIiwic2NyZWVuc2hvdHMiLCJyZWFzb25zQW5ub3RhdGlvbiIsImFjdGlvblNlcXVlbmNlSWQiLCJ1cGxvYWRUaW1lciIsInVzZXJJZCIsImxhc3RUaW1lc3RhbXAiLCJsYXN0dXBsb2FkVGltZXN0YW1wIiwibGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlIiwiaW50ZXJhY3Rpb25zX3VybCIsImdlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybCIsInRhYk5hdmlnYXRpb25IaXN0b3J5IiwiYW5hbHl6ZU5hdmlnYXRpb24iLCJ0YWJJZCIsImJhY2tTdGFjayIsImZvcndhcmRTdGFjayIsImN1cnJlbnRVcmwiLCJoaXN0b3J5IiwiZ2V0Q3VzdG9tUXVlc3Rpb24iLCJldmVudFR5cGUiLCJfZGF0YSR0YXJnZXQkY2xhc3NOYW0iLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25UeXBlIiwic2F2ZVNjcmVlbnNob3RfMSIsIl94IiwiX3gyIiwiX3NhdmVTY3JlZW5zaG90XyIsIl9jYWxsZWUxMiIsInNjcmVlbnNob3REYXRhVXJsIiwic2NyZWVuc2hvdElkIiwicmVzdWx0Iiwic3RvcmVTY3JlZW5zaG90cyIsIl9jYWxsZWUxMiQiLCJfY29udGV4dDEyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2V0IiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIl9jYWxsZWUyIiwiX3NlbmRlciR0YWIyIiwiX3NlbmRlciR0YWIiLCJjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCIsInV1aWQiLCJzYXZlRGF0YSIsInN1Y2Nlc3MiLCJfc3VjY2VzcyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl9yZWYyIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJhbGwiLCJzZW5kUG9wdXAiLCJ0YWIiLCJ0aW1lc3RhbXAiLCJ0MCIsImVycm9yIiwiY2FwdHVyZVNjcmVlbnNob3QiLCJ0MSIsImRvd25sb2FkRGF0YUxvY2FsbHkiLCJ0MiIsInNlbGVjdFJlY2lwZSIsInJlY2lwZSIsIl9jYXB0dXJlU2NyZWVuc2hvdCIsIl9jYWxsZWUxMyIsIl95aWVsZCRjaHJvbWUkdGFicyRxdSIsIl95aWVsZCRjaHJvbWUkdGFicyRxdTIiLCJfY2FsbGVlMTMkIiwiX2NvbnRleHQxMyIsInRhYnMiLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJfc2xpY2VkVG9BcnJheSIsImNhcHR1cmVWaXNpYmxlVGFiIiwid2luZG93SWQiLCJmb3JtYXQiLCJxdWFsaXR5IiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwic2F2ZUhUTUwiLCJfcmVmMyIsIl9jYWxsZWUzIiwiaHRtbENvbnRlbnQiLCJjdXJyZW50U25hcHNob3RJZCIsImh0bWxTbmFwc2hvdHMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDMiLCJfeDQiLCJzYXZlSW50ZXJhY3Rpb24iLCJfcmVmNCIsIl9jYWxsZWU0IiwidGFyZ2V0X3VybCIsImh0bWxTbmFwc2hvdElkIiwicGFnZU1ldGEiLCJzdG9yZUludGVyYWN0aW9ucyIsIl9hcmdzNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NSIsIl94NiIsIl94NyIsIl94OCIsIl94OSIsIl94MTAiLCJzYXZlU2NyZWVuc2hvdCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfeDExIiwiX3gxMiIsIl94MTMiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX2RhdGEkdGFyZ2V0IiwiX2RhdGEkdGFyZ2V0MiIsInF1ZXN0aW9uIiwicmVhc29uIiwibmV3aXRlbSIsInN0b3JlUmVhc29uc0Fubm90YXRpb24iLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJ0b0xvd2VyQ2FzZSIsIk1hdGgiLCJyYW5kb20iLCJzZW5kTWVzc2FnZSIsImlucHV0IiwiYWN0aW9uX3V1aWQiLCJfeDE0IiwiX3gxNSIsIl94MTYiLCJfeDE3IiwiX3gxOCIsIm9uQWN0aXZhdGVkIiwiX3JlZjciLCJfY2FsbGVlOCIsImFjdGl2ZUluZm8iLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJEYXRlIiwidG9JU09TdHJpbmciLCJfcmVmOCIsIl9jYWxsZWU3IiwicmVzcG9uc2UiLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJodG1sIiwiX3gyMCIsIl94MTkiLCJfeDIxIiwiX3gyMiIsIl9zZWxlY3RSZWNpcGUiLCJfY2FsbGVlMTQiLCJwYXJzZWRVcmwiLCJtYXRjaE1ldGhvZCIsIl95aWVsZCRjaHJvbWUkc2NyaXB0aSIsIl95aWVsZCRjaHJvbWUkc2NyaXB0aTIiLCJoYXNNYXRjaCIsIl9jYWxsZWUxNCQiLCJfY29udGV4dDE0IiwiVVJMIiwicGF0aG5hbWUiLCJzY3JpcHRpbmciLCJleGVjdXRlU2NyaXB0IiwiZnVuYyIsIm1hdGNoVGV4dCIsIl9lbGVtZW50JHRleHRDb250ZW50JCIsIl9lbGVtZW50JHRleHRDb250ZW50IiwidGV4dENvbnRlbnQiLCJhcmdzIiwid2ViTmF2aWdhdGlvbiIsIm9uQ29tcGxldGVkIiwiX3JlZjkiLCJfY2FsbGVlMTAiLCJkZXRhaWxzIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJmcmFtZUlkIiwiX3JlZjEwIiwiX2NhbGxlZTkiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJ0MyIsInQ0IiwidDUiLCJ0NiIsInQ3IiwidDgiLCJfeDI0IiwiX3gyMyIsIm9uUmVtb3ZlZCIsIl9kb3dubG9hZERhdGFMb2NhbGx5IiwiX2NhbGxlZTE1IiwidXNlcklkUmVzdWx0IiwiY3VycmVudFVzZXJJZCIsInVzZXJfaWQiLCJmb2xkZXJOYW1lIiwic25hcHNob3RzIiwiaW50ZXJhY3QiLCJvcmRlckRldGFpbHMiLCJzY3JlZW4iLCJSZWFzb25zQW5ub3RhdGlvbiIsInN0b3JlT3JkZXJEZXRhaWxzIiwic2Vlbl9pbnRlcmFjdCIsInNlZW5fc25hcHNob3RzIiwic2Vlbl9vcmRlckRldGFpbHMiLCJzZWVuX3NjcmVlbiIsInNlZW5fUmVhc29uc0Fubm90YXRpb24iLCJzZWVuX3N0b3JlSW50ZXJhY3Rpb25zIiwic2Vlbl9odG1sU25hcHNob3RzIiwic2Vlbl9zdG9yZU9yZGVyRGV0YWlscyIsInNlZW5fc3RvcmVTY3JlZW5zaG90cyIsInNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiIsInNlc3Npb25JbmZvQ29udGVudCIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwic25hcHNob3RJZCIsImZ1bGxEYXRhIiwiaW50ZXJhY3Rpb25zRGF0YSIsIl9zdGVwMiR2YWx1ZSIsInNjcmVlbnNob3REYXRhIiwiX3ppcCIsIl9mdWxsRGF0YSIsImludGVyYWN0aW9uc19qc29uIiwic2NyZWVuc2hvdHNGb2xkZXIiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX3N0ZXAzJHZhbHVlIiwiX3NjcmVlbnNob3REYXRhIiwiX3NjcmVlbnNob3RJZCIsImJsb2IiLCJodG1sU25hcHNob3RzRm9sZGVyIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJfc25hcHNob3RJZCIsIl9odG1sQ29udGVudCIsInppcEJsb2IiLCJyZWFkZXIiLCJfY2FsbGVlMTUkIiwiX2NvbnRleHQxNSIsInNlZW5faW50ZXJhY3Rpb25zIiwic2Vlbl9zY3JlZW5zaG90cyIsInNlZW5fcmVhc29uc0Fubm90YXRpb24iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIiwic3RyaW5naWZ5Iiwic3RvcmVvcmRlckRldGFpbHMiLCJkb3dubG9hZHMiLCJkb3dubG9hZCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZpbGVuYW1lIiwic2F2ZUFzIiwiZW50cmllcyIsInJlYXNvbnMiLCJmaWxlIiwiZm9sZGVyIiwiZmV0Y2giLCJnZW5lcmF0ZUFzeW5jIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJhc2U2NFppcCIsInNwbGl0IiwicmVhZEFzRGF0YVVSTCIsInJlbW92ZSIsInByZXNpZ25lZEZvcm1EYXRhIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpZWxkcyIsImtleSIsImN1c3RvbUZldGNoIiwiX3JlZjExIiwiX2NhbGxlZTExIiwiX2NhbGxlZTExJCIsIl9jb250ZXh0MTEiLCJvayIsInN0YXR1cyIsIl94MjUiLCJfeDI2IiwiZ3ppcEh0bWwiLCJfeDI3IiwiX2d6aXBIdG1sIiwiX2NhbGxlZTE2IiwiY29udGVudCIsImNzIiwid3JpdGVyIiwiZW5jb2RlciIsImVuY29kZWRDb250ZW50IiwiY29tcHJlc3NlZEJsb2IiLCJfY2FsbGVlMTYkIiwiX2NvbnRleHQxNiIsIkNvbXByZXNzaW9uU3RyZWFtIiwiZ2V0V3JpdGVyIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJ3cml0ZSIsImNsb3NlIiwiUmVzcG9uc2UiLCJyZWFkYWJsZSIsInVwbG9hZERhdGFUb1NlcnZlciIsIl91cGxvYWREYXRhVG9TZXJ2ZXIiLCJfY2FsbGVlMTciLCJfbGFzdEdlbmVyYXRlUHJlc2lnbmUiLCJfbGFzdEdlbmVyYXRlUHJlc2lnbmUyIiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lMyIsInBvc3RVcmxSZXN1bHQiLCJzZXNzaW9uSW5mbyIsInNlc3Npb25Gb3JtRGF0YSIsIl9pMyIsIl9PYmplY3QkZW50cmllczMiLCJfT2JqZWN0JGVudHJpZXMzJF9pIiwiaHRtbEJsb2IiLCJfaXRlcmF0b3I0IiwiX3N0ZXA0IiwiX3N0ZXA0JHZhbHVlIiwiX2Zvcm1EYXRhIiwiaW50ZXJhY3Rpb25zQmxvYiIsImpzb25Gb3JtRGF0YUZpbGUiLCJqc29uRm9ybURhdGEiLCJfY2FsbGVlMTckIiwiX2NvbnRleHQxNyIsInN0b3BQZXJpb2RpY1VwbG9hZCIsInN0YXJ0UGVyaW9kaWNVcGxvYWQiLCJ1c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXAiLCJleHBpcmVfdGltZXN0YW1wIiwibm93IiwianNvbiIsIkJsb2IiLCJib2R5Iiwic2V0SW50ZXJ2YWwiLCJ1cGxvYWREYXRhVG9TZXJ2ZXJfbmV3IiwiY2xlYXJJbnRlcnZhbCIsIl91cGxvYWREYXRhVG9TZXJ2ZXJfbmV3IiwiX2NhbGxlZTE4IiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lNCIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTUiLCJjaGVja0ludGVyYWN0IiwiY2hlY2tzdG9yZUludGVyYWN0aW9ucyIsImN1cnJlbnRUaW1lc3RhbXAiLCJpbnRlcmFjdGlvbnNUb1VwbG9hZCIsInNuYXBzaG90c1RvVXBsb2FkIiwic2NyZWVuc2hvdHNUb1VwbG9hZCIsInJlYXNvbnNBbm5vdGF0aW9uVG9VcGxvYWQiLCJvcmRlckRldGFpbHNUb1VwbG9hZCIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTYiLCJfaXRlcmF0b3I1IiwiX3N0ZXA1IiwiX3N0ZXA1JHZhbHVlIiwiX2l0ZXJhdG9yNiIsIl9zdGVwNiIsIl9zdGVwNiR2YWx1ZSIsIl9mb3JtRGF0YTIiLCJjdXJyZW50RGF0YSIsIm5ld0RhdGEiLCJfY2FsbGVlMTgkIiwiX2NvbnRleHQxOCIsImZpbHRlciIsIml0ZW0iLCJfcmVmMTIiLCJfcmVmMTMiLCJ0aW1lc3RhbXBNYXRjaCIsInNuYXBzaG90VGltZXN0YW1wIiwiX3JlZjE0IiwiX3JlZjE1Iiwic2NyZWVuc2hvdFRpbWVzdGFtcCIsImZyb21FbnRyaWVzIiwiX3JlZjE2IiwiX3JlZjE3IiwiX3JlZjE4IiwiX3JlZjE5IiwiXyJdLCJzb3VyY2VSb290IjoiIn0=
