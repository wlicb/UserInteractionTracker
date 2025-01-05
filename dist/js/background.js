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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICc2NzZhNjY1MTQ0Mzk4ZTY5Njc1NjdhMmInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGUgPSAnYW1hem9uLmNvbSdcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl91cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICBzZWxlY3RvcjogJyNuYXZiYXItbWFpbicsXG4gIG5hbWU6ICduYXZfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKVwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKTpub3QoOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKSlcIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJsaTpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSlcIixcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImxpOm5vdCg6aGFzKGlucHV0W3R5cGU9J2NoZWNrYm94J10pKVwiLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHMnLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X25hbWUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXByb2R1Y3QtaW1hZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXZhaWxhYmxlX2NvbG9ycycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtcGFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy10eXBlPSdsaW5rJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdhZGQtdG8tY2FydCddIGJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ3RpdGxlJywgdmFsdWU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZS5hb2stYWxpZ24tY2VudGVyLmFvay1yZWxhdGl2ZSA+IHNwYW4uYW9rLW9mZnNjcmVlbiwgI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAncHJpY2UnLCB2YWx1ZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgc3Bhbjpub3QoLmFvay1oaWRkZW4pIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEVtLmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1zaW5nbGV0b24taGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dF90aGlzX2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWJvdXQgdGhpcyBpdGVtOiB7fScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdidWxsZXRfbGlzdCcsIHZhbHVlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdhc2luJywgdmFsdWU6IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdhc2luJywgdmFsdWU6IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH1cbl1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKFxuICAgIHVybCAmJlxuICAgIHVybC5pbmNsdWRlcyh1cmxfaW5jbHVkZSkgJiZcbiAgICAhZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL0luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgY29uc3QgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuLy8gQWRkIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIG1hcmtlcnMgd2hlbiBuZWVkZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja2FibGVNYXJrZXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbdmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRFeGNsdWRlKHVybDogc3RyaW5nKSB7XG4gIHJldHVybiAhdXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSB8fCBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn0iLCIvKiFcblxuSlNaaXAgdjMuMTAuMSAtIEEgSmF2YVNjcmlwdCBjbGFzcyBmb3IgZ2VuZXJhdGluZyBhbmQgcmVhZGluZyB6aXAgZmlsZXNcbjxodHRwOi8vc3R1YXJ0ay5jb20vanN6aXA+XG5cbihjKSAyMDA5LTIwMTYgU3R1YXJ0IEtuaWdodGxleSA8c3R1YXJ0IFthdF0gc3R1YXJ0ay5jb20+XG5EdWFsIGxpY2VuY2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBvciBHUEx2My4gU2VlIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vU3R1ay9qc3ppcC9tYWluL0xJQ0VOU0UubWFya2Rvd24uXG5cbkpTWmlwIHVzZXMgdGhlIGxpYnJhcnkgcGFrbyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgOlxuaHR0cHM6Ly9naXRodWIuY29tL25vZGVjYS9wYWtvL2Jsb2IvbWFpbi9MSUNFTlNFXG4qL1xuXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxlKTtlbHNleyhcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMpLkpTWmlwPWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIHMoYSxvLGgpe2Z1bmN0aW9uIHUocixlKXtpZighb1tyXSl7aWYoIWFbcl0pe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWUmJnQpcmV0dXJuIHQociwhMCk7aWYobClyZXR1cm4gbChyLCEwKTt2YXIgbj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3IrXCInXCIpO3Rocm93IG4uY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixufXZhciBpPW9bcl09e2V4cG9ydHM6e319O2Fbcl1bMF0uY2FsbChpLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIHQ9YVtyXVsxXVtlXTtyZXR1cm4gdSh0fHxlKX0saSxpLmV4cG9ydHMscyxhLG8saCl9cmV0dXJuIG9bcl0uZXhwb3J0c31mb3IodmFyIGw9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxlPTA7ZTxoLmxlbmd0aDtlKyspdShoW2VdKTtyZXR1cm4gdX0oezE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgZD1lKFwiLi91dGlsc1wiKSxjPWUoXCIuL3N1cHBvcnRcIikscD1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7ci5lbmNvZGU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LHIsbixpLHMsYSxvLGg9W10sdT0wLGw9ZS5sZW5ndGgsZj1sLGM9XCJzdHJpbmdcIiE9PWQuZ2V0VHlwZU9mKGUpO3U8ZS5sZW5ndGg7KWY9bC11LG49Yz8odD1lW3UrK10scj11PGw/ZVt1KytdOjAsdTxsP2VbdSsrXTowKToodD1lLmNoYXJDb2RlQXQodSsrKSxyPXU8bD9lLmNoYXJDb2RlQXQodSsrKTowLHU8bD9lLmNoYXJDb2RlQXQodSsrKTowKSxpPXQ+PjIscz0oMyZ0KTw8NHxyPj40LGE9MTxmPygxNSZyKTw8MnxuPj42OjY0LG89MjxmPzYzJm46NjQsaC5wdXNoKHAuY2hhckF0KGkpK3AuY2hhckF0KHMpK3AuY2hhckF0KGEpK3AuY2hhckF0KG8pKTtyZXR1cm4gaC5qb2luKFwiXCIpfSxyLmRlY29kZT1mdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGEsbz0wLGg9MCx1PVwiZGF0YTpcIjtpZihlLnN1YnN0cigwLHUubGVuZ3RoKT09PXUpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgaW5wdXQsIGl0IGxvb2tzIGxpa2UgYSBkYXRhIHVybC5cIik7dmFyIGwsZj0zKihlPWUucmVwbGFjZSgvW15BLVphLXowLTkrLz1dL2csXCJcIikpLmxlbmd0aC80O2lmKGUuY2hhckF0KGUubGVuZ3RoLTEpPT09cC5jaGFyQXQoNjQpJiZmLS0sZS5jaGFyQXQoZS5sZW5ndGgtMik9PT1wLmNoYXJBdCg2NCkmJmYtLSxmJTEhPTApdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgaW5wdXQsIGJhZCBjb250ZW50IGxlbmd0aC5cIik7Zm9yKGw9Yy51aW50OGFycmF5P25ldyBVaW50OEFycmF5KDB8Zik6bmV3IEFycmF5KDB8Zik7bzxlLmxlbmd0aDspdD1wLmluZGV4T2YoZS5jaGFyQXQobysrKSk8PDJ8KGk9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpKT4+NCxyPSgxNSZpKTw8NHwocz1wLmluZGV4T2YoZS5jaGFyQXQobysrKSkpPj4yLG49KDMmcyk8PDZ8KGE9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpKSxsW2grK109dCw2NCE9PXMmJihsW2grK109ciksNjQhPT1hJiYobFtoKytdPW4pO3JldHVybiBsfX0se1wiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzJ9XSwyOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vZXh0ZXJuYWxcIiksaT1lKFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiKSxzPWUoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLGE9ZShcIi4vc3RyZWFtL0RhdGFMZW5ndGhQcm9iZVwiKTtmdW5jdGlvbiBvKGUsdCxyLG4saSl7dGhpcy5jb21wcmVzc2VkU2l6ZT1lLHRoaXMudW5jb21wcmVzc2VkU2l6ZT10LHRoaXMuY3JjMzI9cix0aGlzLmNvbXByZXNzaW9uPW4sdGhpcy5jb21wcmVzc2VkQ29udGVudD1pfW8ucHJvdG90eXBlPXtnZXRDb250ZW50V29ya2VyOmZ1bmN0aW9uKCl7dmFyIGU9bmV3IGkobi5Qcm9taXNlLnJlc29sdmUodGhpcy5jb21wcmVzc2VkQ29udGVudCkpLnBpcGUodGhpcy5jb21wcmVzc2lvbi51bmNvbXByZXNzV29ya2VyKCkpLnBpcGUobmV3IGEoXCJkYXRhX2xlbmd0aFwiKSksdD10aGlzO3JldHVybiBlLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtpZih0aGlzLnN0cmVhbUluZm8uZGF0YV9sZW5ndGghPT10LnVuY29tcHJlc3NlZFNpemUpdGhyb3cgbmV3IEVycm9yKFwiQnVnIDogdW5jb21wcmVzc2VkIGRhdGEgc2l6ZSBtaXNtYXRjaFwiKX0pLGV9LGdldENvbXByZXNzZWRXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGkobi5Qcm9taXNlLnJlc29sdmUodGhpcy5jb21wcmVzc2VkQ29udGVudCkpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3NlZFNpemVcIix0aGlzLmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcInVuY29tcHJlc3NlZFNpemVcIix0aGlzLnVuY29tcHJlc3NlZFNpemUpLndpdGhTdHJlYW1JbmZvKFwiY3JjMzJcIix0aGlzLmNyYzMyKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzaW9uXCIsdGhpcy5jb21wcmVzc2lvbil9fSxvLmNyZWF0ZVdvcmtlckZyb209ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlLnBpcGUobmV3IHMpLnBpcGUobmV3IGEoXCJ1bmNvbXByZXNzZWRTaXplXCIpKS5waXBlKHQuY29tcHJlc3NXb3JrZXIocikpLnBpcGUobmV3IGEoXCJjb21wcmVzc2VkU2l6ZVwiKSkud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHQpfSx0LmV4cG9ydHM9b30se1wiLi9leHRlcm5hbFwiOjYsXCIuL3N0cmVhbS9DcmMzMlByb2JlXCI6MjUsXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIjoyNixcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIjoyN31dLDM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtyLlNUT1JFPXttYWdpYzpcIlxcMFxcMFwiLGNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKFwiU1RPUkUgY29tcHJlc3Npb25cIil9LHVuY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG4oXCJTVE9SRSBkZWNvbXByZXNzaW9uXCIpfX0sci5ERUZMQVRFPWUoXCIuL2ZsYXRlXCIpfSx7XCIuL2ZsYXRlXCI6NyxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDQ6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi91dGlsc1wiKTt2YXIgbz1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLHI9MDtyPDI1NjtyKyspe2U9cjtmb3IodmFyIG49MDtuPDg7bisrKWU9MSZlPzM5ODgyOTIzODReZT4+PjE6ZT4+PjE7dFtyXT1lfXJldHVybiB0fSgpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDAhPT1lJiZlLmxlbmd0aD9cInN0cmluZ1wiIT09bi5nZXRUeXBlT2YoZSk/ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9byxzPW4rcjtlXj0tMTtmb3IodmFyIGE9bjthPHM7YSsrKWU9ZT4+PjheaVsyNTUmKGVedFthXSldO3JldHVybi0xXmV9KDB8dCxlLGUubGVuZ3RoLDApOmZ1bmN0aW9uKGUsdCxyLG4pe3ZhciBpPW8scz1uK3I7ZV49LTE7Zm9yKHZhciBhPW47YTxzO2ErKyllPWU+Pj44XmlbMjU1JihlXnQuY2hhckNvZGVBdChhKSldO3JldHVybi0xXmV9KDB8dCxlLGUubGVuZ3RoLDApOjB9fSx7XCIuL3V0aWxzXCI6MzJ9XSw1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ci5iYXNlNjQ9ITEsci5iaW5hcnk9ITEsci5kaXI9ITEsci5jcmVhdGVGb2xkZXJzPSEwLHIuZGF0ZT1udWxsLHIuY29tcHJlc3Npb249bnVsbCxyLmNvbXByZXNzaW9uT3B0aW9ucz1udWxsLHIuY29tbWVudD1udWxsLHIudW5peFBlcm1pc3Npb25zPW51bGwsci5kb3NQZXJtaXNzaW9ucz1udWxsfSx7fV0sNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPW51bGw7bj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOmUoXCJsaWVcIiksdC5leHBvcnRzPXtQcm9taXNlOm59fSx7bGllOjM3fV0sNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDE2QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50MzJBcnJheSxpPWUoXCJwYWtvXCIpLHM9ZShcIi4vdXRpbHNcIiksYT1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxvPW4/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiO2Z1bmN0aW9uIGgoZSx0KXthLmNhbGwodGhpcyxcIkZsYXRlV29ya2VyL1wiK2UpLHRoaXMuX3Bha289bnVsbCx0aGlzLl9wYWtvQWN0aW9uPWUsdGhpcy5fcGFrb09wdGlvbnM9dCx0aGlzLm1ldGE9e319ci5tYWdpYz1cIlxcYlxcMFwiLHMuaW5oZXJpdHMoaCxhKSxoLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dGhpcy5tZXRhPWUubWV0YSxudWxsPT09dGhpcy5fcGFrbyYmdGhpcy5fY3JlYXRlUGFrbygpLHRoaXMuX3Bha28ucHVzaChzLnRyYW5zZm9ybVRvKG8sZS5kYXRhKSwhMSl9LGgucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuZmx1c2guY2FsbCh0aGlzKSxudWxsPT09dGhpcy5fcGFrbyYmdGhpcy5fY3JlYXRlUGFrbygpLHRoaXMuX3Bha28ucHVzaChbXSwhMCl9LGgucHJvdG90eXBlLmNsZWFuVXA9ZnVuY3Rpb24oKXthLnByb3RvdHlwZS5jbGVhblVwLmNhbGwodGhpcyksdGhpcy5fcGFrbz1udWxsfSxoLnByb3RvdHlwZS5fY3JlYXRlUGFrbz1mdW5jdGlvbigpe3RoaXMuX3Bha289bmV3IGlbdGhpcy5fcGFrb0FjdGlvbl0oe3JhdzohMCxsZXZlbDp0aGlzLl9wYWtvT3B0aW9ucy5sZXZlbHx8LTF9KTt2YXIgdD10aGlzO3RoaXMuX3Bha28ub25EYXRhPWZ1bmN0aW9uKGUpe3QucHVzaCh7ZGF0YTplLG1ldGE6dC5tZXRhfSl9fSxyLmNvbXByZXNzV29ya2VyPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgaChcIkRlZmxhdGVcIixlKX0sci51bmNvbXByZXNzV29ya2VyPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBoKFwiSW5mbGF0ZVwiLHt9KX19LHtcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vdXRpbHNcIjozMixwYWtvOjM4fV0sODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIEEoZSx0KXt2YXIgcixuPVwiXCI7Zm9yKHI9MDtyPHQ7cisrKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUoMjU1JmUpLGU+Pj49ODtyZXR1cm4gbn1mdW5jdGlvbiBuKGUsdCxyLG4saSxzKXt2YXIgYSxvLGg9ZS5maWxlLHU9ZS5jb21wcmVzc2lvbixsPXMhPT1PLnV0ZjhlbmNvZGUsZj1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIscyhoLm5hbWUpKSxjPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixPLnV0ZjhlbmNvZGUoaC5uYW1lKSksZD1oLmNvbW1lbnQscD1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIscyhkKSksbT1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGQpKSxfPWMubGVuZ3RoIT09aC5uYW1lLmxlbmd0aCxnPW0ubGVuZ3RoIT09ZC5sZW5ndGgsYj1cIlwiLHY9XCJcIix5PVwiXCIsdz1oLmRpcixrPWguZGF0ZSx4PXtjcmMzMjowLGNvbXByZXNzZWRTaXplOjAsdW5jb21wcmVzc2VkU2l6ZTowfTt0JiYhcnx8KHguY3JjMzI9ZS5jcmMzMix4LmNvbXByZXNzZWRTaXplPWUuY29tcHJlc3NlZFNpemUseC51bmNvbXByZXNzZWRTaXplPWUudW5jb21wcmVzc2VkU2l6ZSk7dmFyIFM9MDt0JiYoU3w9OCksbHx8IV8mJiFnfHwoU3w9MjA0OCk7dmFyIHo9MCxDPTA7dyYmKHp8PTE2KSxcIlVOSVhcIj09PWk/KEM9Nzk4LHp8PWZ1bmN0aW9uKGUsdCl7dmFyIHI9ZTtyZXR1cm4gZXx8KHI9dD8xNjg5MzozMzIwNCksKDY1NTM1JnIpPDwxNn0oaC51bml4UGVybWlzc2lvbnMsdykpOihDPTIwLHp8PWZ1bmN0aW9uKGUpe3JldHVybiA2MyYoZXx8MCl9KGguZG9zUGVybWlzc2lvbnMpKSxhPWsuZ2V0VVRDSG91cnMoKSxhPDw9NixhfD1rLmdldFVUQ01pbnV0ZXMoKSxhPDw9NSxhfD1rLmdldFVUQ1NlY29uZHMoKS8yLG89ay5nZXRVVENGdWxsWWVhcigpLTE5ODAsbzw8PTQsb3w9ay5nZXRVVENNb250aCgpKzEsbzw8PTUsb3w9ay5nZXRVVENEYXRlKCksXyYmKHY9QSgxLDEpK0EoQihmKSw0KStjLGIrPVwidXBcIitBKHYubGVuZ3RoLDIpK3YpLGcmJih5PUEoMSwxKStBKEIocCksNCkrbSxiKz1cInVjXCIrQSh5Lmxlbmd0aCwyKSt5KTt2YXIgRT1cIlwiO3JldHVybiBFKz1cIlxcblxcMFwiLEUrPUEoUywyKSxFKz11Lm1hZ2ljLEUrPUEoYSwyKSxFKz1BKG8sMiksRSs9QSh4LmNyYzMyLDQpLEUrPUEoeC5jb21wcmVzc2VkU2l6ZSw0KSxFKz1BKHgudW5jb21wcmVzc2VkU2l6ZSw0KSxFKz1BKGYubGVuZ3RoLDIpLEUrPUEoYi5sZW5ndGgsMikse2ZpbGVSZWNvcmQ6Ui5MT0NBTF9GSUxFX0hFQURFUitFK2YrYixkaXJSZWNvcmQ6Ui5DRU5UUkFMX0ZJTEVfSEVBREVSK0EoQywyKStFK0EocC5sZW5ndGgsMikrXCJcXDBcXDBcXDBcXDBcIitBKHosNCkrQShuLDQpK2YrYitwfX12YXIgST1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksTz1lKFwiLi4vdXRmOFwiKSxCPWUoXCIuLi9jcmMzMlwiKSxSPWUoXCIuLi9zaWduYXR1cmVcIik7ZnVuY3Rpb24gcyhlLHQscixuKXtpLmNhbGwodGhpcyxcIlppcEZpbGVXb3JrZXJcIiksdGhpcy5ieXRlc1dyaXR0ZW49MCx0aGlzLnppcENvbW1lbnQ9dCx0aGlzLnppcFBsYXRmb3JtPXIsdGhpcy5lbmNvZGVGaWxlTmFtZT1uLHRoaXMuc3RyZWFtRmlsZXM9ZSx0aGlzLmFjY3VtdWxhdGU9ITEsdGhpcy5jb250ZW50QnVmZmVyPVtdLHRoaXMuZGlyUmVjb3Jkcz1bXSx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQ9MCx0aGlzLmVudHJpZXNDb3VudD0wLHRoaXMuY3VycmVudEZpbGU9bnVsbCx0aGlzLl9zb3VyY2VzPVtdfUkuaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKGUpe3ZhciB0PWUubWV0YS5wZXJjZW50fHwwLHI9dGhpcy5lbnRyaWVzQ291bnQsbj10aGlzLl9zb3VyY2VzLmxlbmd0aDt0aGlzLmFjY3VtdWxhdGU/dGhpcy5jb250ZW50QnVmZmVyLnB1c2goZSk6KHRoaXMuYnl0ZXNXcml0dGVuKz1lLmRhdGEubGVuZ3RoLGkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLHtkYXRhOmUuZGF0YSxtZXRhOntjdXJyZW50RmlsZTp0aGlzLmN1cnJlbnRGaWxlLHBlcmNlbnQ6cj8odCsxMDAqKHItbi0xKSkvcjoxMDB9fSkpfSxzLnByb3RvdHlwZS5vcGVuZWRTb3VyY2U9ZnVuY3Rpb24oZSl7dGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PXRoaXMuYnl0ZXNXcml0dGVuLHRoaXMuY3VycmVudEZpbGU9ZS5maWxlLm5hbWU7dmFyIHQ9dGhpcy5zdHJlYW1GaWxlcyYmIWUuZmlsZS5kaXI7aWYodCl7dmFyIHI9bihlLHQsITEsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7dGhpcy5wdXNoKHtkYXRhOnIuZmlsZVJlY29yZCxtZXRhOntwZXJjZW50OjB9fSl9ZWxzZSB0aGlzLmFjY3VtdWxhdGU9ITB9LHMucHJvdG90eXBlLmNsb3NlZFNvdXJjZT1mdW5jdGlvbihlKXt0aGlzLmFjY3VtdWxhdGU9ITE7dmFyIHQ9dGhpcy5zdHJlYW1GaWxlcyYmIWUuZmlsZS5kaXIscj1uKGUsdCwhMCx0aGlzLmN1cnJlbnRTb3VyY2VPZmZzZXQsdGhpcy56aXBQbGF0Zm9ybSx0aGlzLmVuY29kZUZpbGVOYW1lKTtpZih0aGlzLmRpclJlY29yZHMucHVzaChyLmRpclJlY29yZCksdCl0aGlzLnB1c2goe2RhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIFIuREFUQV9ERVNDUklQVE9SK0EoZS5jcmMzMiw0KStBKGUuY29tcHJlc3NlZFNpemUsNCkrQShlLnVuY29tcHJlc3NlZFNpemUsNCl9KGUpLG1ldGE6e3BlcmNlbnQ6MTAwfX0pO2Vsc2UgZm9yKHRoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pO3RoaXMuY29udGVudEJ1ZmZlci5sZW5ndGg7KXRoaXMucHVzaCh0aGlzLmNvbnRlbnRCdWZmZXIuc2hpZnQoKSk7dGhpcy5jdXJyZW50RmlsZT1udWxsfSxzLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLmJ5dGVzV3JpdHRlbix0PTA7dDx0aGlzLmRpclJlY29yZHMubGVuZ3RoO3QrKyl0aGlzLnB1c2goe2RhdGE6dGhpcy5kaXJSZWNvcmRzW3RdLG1ldGE6e3BlcmNlbnQ6MTAwfX0pO3ZhciByPXRoaXMuYnl0ZXNXcml0dGVuLWUsbj1mdW5jdGlvbihlLHQscixuLGkpe3ZhciBzPUkudHJhbnNmb3JtVG8oXCJzdHJpbmdcIixpKG4pKTtyZXR1cm4gUi5DRU5UUkFMX0RJUkVDVE9SWV9FTkQrXCJcXDBcXDBcXDBcXDBcIitBKGUsMikrQShlLDIpK0EodCw0KStBKHIsNCkrQShzLmxlbmd0aCwyKStzfSh0aGlzLmRpclJlY29yZHMubGVuZ3RoLHIsZSx0aGlzLnppcENvbW1lbnQsdGhpcy5lbmNvZGVGaWxlTmFtZSk7dGhpcy5wdXNoKHtkYXRhOm4sbWV0YTp7cGVyY2VudDoxMDB9fSl9LHMucHJvdG90eXBlLnByZXBhcmVOZXh0U291cmNlPWZ1bmN0aW9uKCl7dGhpcy5wcmV2aW91cz10aGlzLl9zb3VyY2VzLnNoaWZ0KCksdGhpcy5vcGVuZWRTb3VyY2UodGhpcy5wcmV2aW91cy5zdHJlYW1JbmZvKSx0aGlzLmlzUGF1c2VkP3RoaXMucHJldmlvdXMucGF1c2UoKTp0aGlzLnByZXZpb3VzLnJlc3VtZSgpfSxzLnByb3RvdHlwZS5yZWdpc3RlclByZXZpb3VzPWZ1bmN0aW9uKGUpe3RoaXMuX3NvdXJjZXMucHVzaChlKTt2YXIgdD10aGlzO3JldHVybiBlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUpe3QucHJvY2Vzc0NodW5rKGUpfSksZS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7dC5jbG9zZWRTb3VyY2UodC5wcmV2aW91cy5zdHJlYW1JbmZvKSx0Ll9zb3VyY2VzLmxlbmd0aD90LnByZXBhcmVOZXh0U291cmNlKCk6dC5lbmQoKX0pLGUub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe3QuZXJyb3IoZSl9KSx0aGlzfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMucHJldmlvdXMmJnRoaXMuX3NvdXJjZXMubGVuZ3RoPyh0aGlzLnByZXBhcmVOZXh0U291cmNlKCksITApOnRoaXMucHJldmlvdXN8fHRoaXMuX3NvdXJjZXMubGVuZ3RofHx0aGlzLmdlbmVyYXRlZEVycm9yP3ZvaWQgMDoodGhpcy5lbmQoKSwhMCkpfSxzLnByb3RvdHlwZS5lcnJvcj1mdW5jdGlvbihlKXt2YXIgdD10aGlzLl9zb3VyY2VzO2lmKCFpLnByb3RvdHlwZS5lcnJvci5jYWxsKHRoaXMsZSkpcmV0dXJuITE7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspdHJ5e3Rbcl0uZXJyb3IoZSl9Y2F0Y2goZSl7fXJldHVybiEwfSxzLnByb3RvdHlwZS5sb2NrPWZ1bmN0aW9uKCl7aS5wcm90b3R5cGUubG9jay5jYWxsKHRoaXMpO2Zvcih2YXIgZT10aGlzLl9zb3VyY2VzLHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdLmxvY2soKX0sdC5leHBvcnRzPXN9LHtcIi4uL2NyYzMyXCI6NCxcIi4uL3NpZ25hdHVyZVwiOjIzLFwiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0ZjhcIjozMSxcIi4uL3V0aWxzXCI6MzJ9XSw5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHU9ZShcIi4uL2NvbXByZXNzaW9uc1wiKSxuPWUoXCIuL1ppcEZpbGVXb3JrZXJcIik7ci5nZW5lcmF0ZVdvcmtlcj1mdW5jdGlvbihlLGEsdCl7dmFyIG89bmV3IG4oYS5zdHJlYW1GaWxlcyx0LGEucGxhdGZvcm0sYS5lbmNvZGVGaWxlTmFtZSksaD0wO3RyeXtlLmZvckVhY2goZnVuY3Rpb24oZSx0KXtoKys7dmFyIHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj1lfHx0LG49dVtyXTtpZighbil0aHJvdyBuZXcgRXJyb3IocitcIiBpcyBub3QgYSB2YWxpZCBjb21wcmVzc2lvbiBtZXRob2QgIVwiKTtyZXR1cm4gbn0odC5vcHRpb25zLmNvbXByZXNzaW9uLGEuY29tcHJlc3Npb24pLG49dC5vcHRpb25zLmNvbXByZXNzaW9uT3B0aW9uc3x8YS5jb21wcmVzc2lvbk9wdGlvbnN8fHt9LGk9dC5kaXIscz10LmRhdGU7dC5fY29tcHJlc3NXb3JrZXIocixuKS53aXRoU3RyZWFtSW5mbyhcImZpbGVcIix7bmFtZTplLGRpcjppLGRhdGU6cyxjb21tZW50OnQuY29tbWVudHx8XCJcIix1bml4UGVybWlzc2lvbnM6dC51bml4UGVybWlzc2lvbnMsZG9zUGVybWlzc2lvbnM6dC5kb3NQZXJtaXNzaW9uc30pLnBpcGUobyl9KSxvLmVudHJpZXNDb3VudD1ofWNhdGNoKGUpe28uZXJyb3IoZSl9cmV0dXJuIG99fSx7XCIuLi9jb21wcmVzc2lvbnNcIjozLFwiLi9aaXBGaWxlV29ya2VyXCI6OH1dLDEwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbigpe2lmKCEodGhpcyBpbnN0YW5jZW9mIG4pKXJldHVybiBuZXcgbjtpZihhcmd1bWVudHMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIlRoZSBjb25zdHJ1Y3RvciB3aXRoIHBhcmFtZXRlcnMgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIik7dGhpcy5maWxlcz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuY29tbWVudD1udWxsLHRoaXMucm9vdD1cIlwiLHRoaXMuY2xvbmU9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgbjtmb3IodmFyIHQgaW4gdGhpcylcImZ1bmN0aW9uXCIhPXR5cGVvZiB0aGlzW3RdJiYoZVt0XT10aGlzW3RdKTtyZXR1cm4gZX19KG4ucHJvdG90eXBlPWUoXCIuL29iamVjdFwiKSkubG9hZEFzeW5jPWUoXCIuL2xvYWRcIiksbi5zdXBwb3J0PWUoXCIuL3N1cHBvcnRcIiksbi5kZWZhdWx0cz1lKFwiLi9kZWZhdWx0c1wiKSxuLnZlcnNpb249XCIzLjEwLjFcIixuLmxvYWRBc3luYz1mdW5jdGlvbihlLHQpe3JldHVybihuZXcgbikubG9hZEFzeW5jKGUsdCl9LG4uZXh0ZXJuYWw9ZShcIi4vZXh0ZXJuYWxcIiksdC5leHBvcnRzPW59LHtcIi4vZGVmYXVsdHNcIjo1LFwiLi9leHRlcm5hbFwiOjYsXCIuL2xvYWRcIjoxMSxcIi4vb2JqZWN0XCI6MTUsXCIuL3N1cHBvcnRcIjozMH1dLDExOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHU9ZShcIi4vdXRpbHNcIiksaT1lKFwiLi9leHRlcm5hbFwiKSxuPWUoXCIuL3V0ZjhcIikscz1lKFwiLi96aXBFbnRyaWVzXCIpLGE9ZShcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIiksbD1lKFwiLi9ub2RlanNVdGlsc1wiKTtmdW5jdGlvbiBmKG4pe3JldHVybiBuZXcgaS5Qcm9taXNlKGZ1bmN0aW9uKGUsdCl7dmFyIHI9bi5kZWNvbXByZXNzZWQuZ2V0Q29udGVudFdvcmtlcigpLnBpcGUobmV3IGEpO3Iub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe3QoZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7ci5zdHJlYW1JbmZvLmNyYzMyIT09bi5kZWNvbXByZXNzZWQuY3JjMzI/dChuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIDogQ1JDMzIgbWlzbWF0Y2hcIikpOmUoKX0pLnJlc3VtZSgpfSl9dC5leHBvcnRzPWZ1bmN0aW9uKGUsbyl7dmFyIGg9dGhpcztyZXR1cm4gbz11LmV4dGVuZChvfHx7fSx7YmFzZTY0OiExLGNoZWNrQ1JDMzI6ITEsb3B0aW1pemVkQmluYXJ5U3RyaW5nOiExLGNyZWF0ZUZvbGRlcnM6ITEsZGVjb2RlRmlsZU5hbWU6bi51dGY4ZGVjb2RlfSksbC5pc05vZGUmJmwuaXNTdHJlYW0oZSk/aS5Qcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJKU1ppcCBjYW4ndCBhY2NlcHQgYSBzdHJlYW0gd2hlbiBsb2FkaW5nIGEgemlwIGZpbGUuXCIpKTp1LnByZXBhcmVDb250ZW50KFwidGhlIGxvYWRlZCB6aXAgZmlsZVwiLGUsITAsby5vcHRpbWl6ZWRCaW5hcnlTdHJpbmcsby5iYXNlNjQpLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IHMobyk7cmV0dXJuIHQubG9hZChlKSx0fSkudGhlbihmdW5jdGlvbihlKXt2YXIgdD1baS5Qcm9taXNlLnJlc29sdmUoZSldLHI9ZS5maWxlcztpZihvLmNoZWNrQ1JDMzIpZm9yKHZhciBuPTA7bjxyLmxlbmd0aDtuKyspdC5wdXNoKGYocltuXSkpO3JldHVybiBpLlByb21pc2UuYWxsKHQpfSkudGhlbihmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zaGlmdCgpLHI9dC5maWxlcyxuPTA7bjxyLmxlbmd0aDtuKyspe3ZhciBpPXJbbl0scz1pLmZpbGVOYW1lU3RyLGE9dS5yZXNvbHZlKGkuZmlsZU5hbWVTdHIpO2guZmlsZShhLGkuZGVjb21wcmVzc2VkLHtiaW5hcnk6ITAsb3B0aW1pemVkQmluYXJ5U3RyaW5nOiEwLGRhdGU6aS5kYXRlLGRpcjppLmRpcixjb21tZW50OmkuZmlsZUNvbW1lbnRTdHIubGVuZ3RoP2kuZmlsZUNvbW1lbnRTdHI6bnVsbCx1bml4UGVybWlzc2lvbnM6aS51bml4UGVybWlzc2lvbnMsZG9zUGVybWlzc2lvbnM6aS5kb3NQZXJtaXNzaW9ucyxjcmVhdGVGb2xkZXJzOm8uY3JlYXRlRm9sZGVyc30pLGkuZGlyfHwoaC5maWxlKGEpLnVuc2FmZU9yaWdpbmFsTmFtZT1zKX1yZXR1cm4gdC56aXBDb21tZW50Lmxlbmd0aCYmKGguY29tbWVudD10LnppcENvbW1lbnQpLGh9KX19LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcEVudHJpZXNcIjozM31dLDEyOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpO2Z1bmN0aW9uIHMoZSx0KXtpLmNhbGwodGhpcyxcIk5vZGVqcyBzdHJlYW0gaW5wdXQgYWRhcHRlciBmb3IgXCIrZSksdGhpcy5fdXBzdHJlYW1FbmRlZD0hMSx0aGlzLl9iaW5kU3RyZWFtKHQpfW4uaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5fYmluZFN0cmVhbT1mdW5jdGlvbihlKXt2YXIgdD10aGlzOyh0aGlzLl9zdHJlYW09ZSkucGF1c2UoKSxlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUpe3QucHVzaCh7ZGF0YTplLG1ldGE6e3BlcmNlbnQ6MH19KX0pLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0LmlzUGF1c2VkP3RoaXMuZ2VuZXJhdGVkRXJyb3I9ZTp0LmVycm9yKGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3QuaXNQYXVzZWQ/dC5fdXBzdHJlYW1FbmRlZD0hMDp0LmVuZCgpfSl9LHMucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5wYXVzZS5jYWxsKHRoaXMpJiYodGhpcy5fc3RyZWFtLnBhdXNlKCksITApfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYodGhpcy5fdXBzdHJlYW1FbmRlZD90aGlzLmVuZCgpOnRoaXMuX3N0cmVhbS5yZXN1bWUoKSwhMCl9LHQuZXhwb3J0cz1zfSx7XCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi4vdXRpbHNcIjozMn1dLDEzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9ZShcInJlYWRhYmxlLXN0cmVhbVwiKS5SZWFkYWJsZTtmdW5jdGlvbiBuKGUsdCxyKXtpLmNhbGwodGhpcyx0KSx0aGlzLl9oZWxwZXI9ZTt2YXIgbj10aGlzO2Uub24oXCJkYXRhXCIsZnVuY3Rpb24oZSx0KXtuLnB1c2goZSl8fG4uX2hlbHBlci5wYXVzZSgpLHImJnIodCl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7bi5lbWl0KFwiZXJyb3JcIixlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtuLnB1c2gobnVsbCl9KX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMobixpKSxuLnByb3RvdHlwZS5fcmVhZD1mdW5jdGlvbigpe3RoaXMuX2hlbHBlci5yZXN1bWUoKX0sdC5leHBvcnRzPW59LHtcIi4uL3V0aWxzXCI6MzIsXCJyZWFkYWJsZS1zdHJlYW1cIjoxNn1dLDE0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPXtpc05vZGU6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlcixuZXdCdWZmZXJGcm9tOmZ1bmN0aW9uKGUsdCl7aWYoQnVmZmVyLmZyb20mJkJ1ZmZlci5mcm9tIT09VWludDhBcnJheS5mcm9tKXJldHVybiBCdWZmZXIuZnJvbShlLHQpO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcignVGhlIFwiZGF0YVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJyk7cmV0dXJuIG5ldyBCdWZmZXIoZSx0KX0sYWxsb2NCdWZmZXI6ZnVuY3Rpb24oZSl7aWYoQnVmZmVyLmFsbG9jKXJldHVybiBCdWZmZXIuYWxsb2MoZSk7dmFyIHQ9bmV3IEJ1ZmZlcihlKTtyZXR1cm4gdC5maWxsKDApLHR9LGlzQnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiBCdWZmZXIuaXNCdWZmZXIoZSl9LGlzU3RyZWFtOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnBhdXNlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnJlc3VtZX19fSx7fV0sMTU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCxyKXt2YXIgbixpPXUuZ2V0VHlwZU9mKHQpLHM9dS5leHRlbmQocnx8e30sZik7cy5kYXRlPXMuZGF0ZXx8bmV3IERhdGUsbnVsbCE9PXMuY29tcHJlc3Npb24mJihzLmNvbXByZXNzaW9uPXMuY29tcHJlc3Npb24udG9VcHBlckNhc2UoKSksXCJzdHJpbmdcIj09dHlwZW9mIHMudW5peFBlcm1pc3Npb25zJiYocy51bml4UGVybWlzc2lvbnM9cGFyc2VJbnQocy51bml4UGVybWlzc2lvbnMsOCkpLHMudW5peFBlcm1pc3Npb25zJiYxNjM4NCZzLnVuaXhQZXJtaXNzaW9ucyYmKHMuZGlyPSEwKSxzLmRvc1Blcm1pc3Npb25zJiYxNiZzLmRvc1Blcm1pc3Npb25zJiYocy5kaXI9ITApLHMuZGlyJiYoZT1nKGUpKSxzLmNyZWF0ZUZvbGRlcnMmJihuPV8oZSkpJiZiLmNhbGwodGhpcyxuLCEwKTt2YXIgYT1cInN0cmluZ1wiPT09aSYmITE9PT1zLmJpbmFyeSYmITE9PT1zLmJhc2U2NDtyJiZ2b2lkIDAhPT1yLmJpbmFyeXx8KHMuYmluYXJ5PSFhKSwodCBpbnN0YW5jZW9mIGMmJjA9PT10LnVuY29tcHJlc3NlZFNpemV8fHMuZGlyfHwhdHx8MD09PXQubGVuZ3RoKSYmKHMuYmFzZTY0PSExLHMuYmluYXJ5PSEwLHQ9XCJcIixzLmNvbXByZXNzaW9uPVwiU1RPUkVcIixpPVwic3RyaW5nXCIpO3ZhciBvPW51bGw7bz10IGluc3RhbmNlb2YgY3x8dCBpbnN0YW5jZW9mIGw/dDpwLmlzTm9kZSYmcC5pc1N0cmVhbSh0KT9uZXcgbShlLHQpOnUucHJlcGFyZUNvbnRlbnQoZSx0LHMuYmluYXJ5LHMub3B0aW1pemVkQmluYXJ5U3RyaW5nLHMuYmFzZTY0KTt2YXIgaD1uZXcgZChlLG8scyk7dGhpcy5maWxlc1tlXT1ofXZhciBpPWUoXCIuL3V0ZjhcIiksdT1lKFwiLi91dGlsc1wiKSxsPWUoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLGE9ZShcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiKSxmPWUoXCIuL2RlZmF1bHRzXCIpLGM9ZShcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxkPWUoXCIuL3ppcE9iamVjdFwiKSxvPWUoXCIuL2dlbmVyYXRlXCIpLHA9ZShcIi4vbm9kZWpzVXRpbHNcIiksbT1lKFwiLi9ub2RlanMvTm9kZWpzU3RyZWFtSW5wdXRBZGFwdGVyXCIpLF89ZnVuY3Rpb24oZSl7XCIvXCI9PT1lLnNsaWNlKC0xKSYmKGU9ZS5zdWJzdHJpbmcoMCxlLmxlbmd0aC0xKSk7dmFyIHQ9ZS5sYXN0SW5kZXhPZihcIi9cIik7cmV0dXJuIDA8dD9lLnN1YnN0cmluZygwLHQpOlwiXCJ9LGc9ZnVuY3Rpb24oZSl7cmV0dXJuXCIvXCIhPT1lLnNsaWNlKC0xKSYmKGUrPVwiL1wiKSxlfSxiPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ9dm9pZCAwIT09dD90OmYuY3JlYXRlRm9sZGVycyxlPWcoZSksdGhpcy5maWxlc1tlXXx8cy5jYWxsKHRoaXMsZSxudWxsLHtkaXI6ITAsY3JlYXRlRm9sZGVyczp0fSksdGhpcy5maWxlc1tlXX07ZnVuY3Rpb24gaChlKXtyZXR1cm5cIltvYmplY3QgUmVnRXhwXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfXZhciBuPXtsb2FkOmZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGZvckVhY2g6ZnVuY3Rpb24oZSl7dmFyIHQscixuO2Zvcih0IGluIHRoaXMuZmlsZXMpbj10aGlzLmZpbGVzW3RdLChyPXQuc2xpY2UodGhpcy5yb290Lmxlbmd0aCx0Lmxlbmd0aCkpJiZ0LnNsaWNlKDAsdGhpcy5yb290Lmxlbmd0aCk9PT10aGlzLnJvb3QmJmUocixuKX0sZmlsdGVyOmZ1bmN0aW9uKHIpe3ZhciBuPVtdO3JldHVybiB0aGlzLmZvckVhY2goZnVuY3Rpb24oZSx0KXtyKGUsdCkmJm4ucHVzaCh0KX0pLG59LGZpbGU6ZnVuY3Rpb24oZSx0LHIpe2lmKDEhPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBlPXRoaXMucm9vdCtlLHMuY2FsbCh0aGlzLGUsdCxyKSx0aGlzO2lmKGgoZSkpe3ZhciBuPWU7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIXQuZGlyJiZuLnRlc3QoZSl9KX12YXIgaT10aGlzLmZpbGVzW3RoaXMucm9vdCtlXTtyZXR1cm4gaSYmIWkuZGlyP2k6bnVsbH0sZm9sZGVyOmZ1bmN0aW9uKHIpe2lmKCFyKXJldHVybiB0aGlzO2lmKGgocikpcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQuZGlyJiZyLnRlc3QoZSl9KTt2YXIgZT10aGlzLnJvb3Qrcix0PWIuY2FsbCh0aGlzLGUpLG49dGhpcy5jbG9uZSgpO3JldHVybiBuLnJvb3Q9dC5uYW1lLG59LHJlbW92ZTpmdW5jdGlvbihyKXtyPXRoaXMucm9vdCtyO3ZhciBlPXRoaXMuZmlsZXNbcl07aWYoZXx8KFwiL1wiIT09ci5zbGljZSgtMSkmJihyKz1cIi9cIiksZT10aGlzLmZpbGVzW3JdKSxlJiYhZS5kaXIpZGVsZXRlIHRoaXMuZmlsZXNbcl07ZWxzZSBmb3IodmFyIHQ9dGhpcy5maWx0ZXIoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lLnNsaWNlKDAsci5sZW5ndGgpPT09cn0pLG49MDtuPHQubGVuZ3RoO24rKylkZWxldGUgdGhpcy5maWxlc1t0W25dLm5hbWVdO3JldHVybiB0aGlzfSxnZW5lcmF0ZTpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxnZW5lcmF0ZUludGVybmFsU3RyZWFtOmZ1bmN0aW9uKGUpe3ZhciB0LHI9e307dHJ5e2lmKChyPXUuZXh0ZW5kKGV8fHt9LHtzdHJlYW1GaWxlczohMSxjb21wcmVzc2lvbjpcIlNUT1JFXCIsY29tcHJlc3Npb25PcHRpb25zOm51bGwsdHlwZTpcIlwiLHBsYXRmb3JtOlwiRE9TXCIsY29tbWVudDpudWxsLG1pbWVUeXBlOlwiYXBwbGljYXRpb24vemlwXCIsZW5jb2RlRmlsZU5hbWU6aS51dGY4ZW5jb2RlfSkpLnR5cGU9ci50eXBlLnRvTG93ZXJDYXNlKCksci5jb21wcmVzc2lvbj1yLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCksXCJiaW5hcnlzdHJpbmdcIj09PXIudHlwZSYmKHIudHlwZT1cInN0cmluZ1wiKSwhci50eXBlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dS5jaGVja1N1cHBvcnQoci50eXBlKSxcImRhcndpblwiIT09ci5wbGF0Zm9ybSYmXCJmcmVlYnNkXCIhPT1yLnBsYXRmb3JtJiZcImxpbnV4XCIhPT1yLnBsYXRmb3JtJiZcInN1bm9zXCIhPT1yLnBsYXRmb3JtfHwoci5wbGF0Zm9ybT1cIlVOSVhcIiksXCJ3aW4zMlwiPT09ci5wbGF0Zm9ybSYmKHIucGxhdGZvcm09XCJET1NcIik7dmFyIG49ci5jb21tZW50fHx0aGlzLmNvbW1lbnR8fFwiXCI7dD1vLmdlbmVyYXRlV29ya2VyKHRoaXMscixuKX1jYXRjaChlKXsodD1uZXcgbChcImVycm9yXCIpKS5lcnJvcihlKX1yZXR1cm4gbmV3IGEodCxyLnR5cGV8fFwic3RyaW5nXCIsci5taW1lVHlwZSl9LGdlbmVyYXRlQXN5bmM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKGUpLmFjY3VtdWxhdGUodCl9LGdlbmVyYXRlTm9kZVN0cmVhbTpmdW5jdGlvbihlLHQpe3JldHVybihlPWV8fHt9KS50eXBlfHwoZS50eXBlPVwibm9kZWJ1ZmZlclwiKSx0aGlzLmdlbmVyYXRlSW50ZXJuYWxTdHJlYW0oZSkudG9Ob2RlanNTdHJlYW0odCl9fTt0LmV4cG9ydHM9bn0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vZGVmYXVsdHNcIjo1LFwiLi9nZW5lcmF0ZVwiOjksXCIuL25vZGVqcy9Ob2RlanNTdHJlYW1JbnB1dEFkYXB0ZXJcIjoxMixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcE9iamVjdFwiOjM1fV0sMTY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZShcInN0cmVhbVwiKX0se3N0cmVhbTp2b2lkIDB9XSwxNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL0RhdGFSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKTtmb3IodmFyIHQ9MDt0PHRoaXMuZGF0YS5sZW5ndGg7dCsrKWVbdF09MjU1JmVbdF19ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUuYnl0ZUF0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmRhdGFbdGhpcy56ZXJvK2VdfSxpLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5jaGFyQ29kZUF0KDApLHI9ZS5jaGFyQ29kZUF0KDEpLG49ZS5jaGFyQ29kZUF0KDIpLGk9ZS5jaGFyQ29kZUF0KDMpLHM9dGhpcy5sZW5ndGgtNDswPD1zOy0tcylpZih0aGlzLmRhdGFbc109PT10JiZ0aGlzLmRhdGFbcysxXT09PXImJnRoaXMuZGF0YVtzKzJdPT09biYmdGhpcy5kYXRhW3MrM109PT1pKXJldHVybiBzLXRoaXMuemVybztyZXR1cm4tMX0saS5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY2hhckNvZGVBdCgwKSxyPWUuY2hhckNvZGVBdCgxKSxuPWUuY2hhckNvZGVBdCgyKSxpPWUuY2hhckNvZGVBdCgzKSxzPXRoaXMucmVhZERhdGEoNCk7cmV0dXJuIHQ9PT1zWzBdJiZyPT09c1sxXSYmbj09PXNbMl0mJmk9PT1zWzNdfSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXtpZih0aGlzLmNoZWNrT2Zmc2V0KGUpLDA9PT1lKXJldHVybltdO3ZhciB0PXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCtlKTtyZXR1cm4gdGhpcy5pbmRleCs9ZSx0fSx0LmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcIi4vRGF0YVJlYWRlclwiOjE4fV0sMTg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi4vdXRpbHNcIik7ZnVuY3Rpb24gaShlKXt0aGlzLmRhdGE9ZSx0aGlzLmxlbmd0aD1lLmxlbmd0aCx0aGlzLmluZGV4PTAsdGhpcy56ZXJvPTB9aS5wcm90b3R5cGU9e2NoZWNrT2Zmc2V0OmZ1bmN0aW9uKGUpe3RoaXMuY2hlY2tJbmRleCh0aGlzLmluZGV4K2UpfSxjaGVja0luZGV4OmZ1bmN0aW9uKGUpe2lmKHRoaXMubGVuZ3RoPHRoaXMuemVybytlfHxlPDApdGhyb3cgbmV3IEVycm9yKFwiRW5kIG9mIGRhdGEgcmVhY2hlZCAoZGF0YSBsZW5ndGggPSBcIit0aGlzLmxlbmd0aCtcIiwgYXNrZWQgaW5kZXggPSBcIitlK1wiKS4gQ29ycnVwdGVkIHppcCA/XCIpfSxzZXRJbmRleDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSW5kZXgoZSksdGhpcy5pbmRleD1lfSxza2lwOmZ1bmN0aW9uKGUpe3RoaXMuc2V0SW5kZXgodGhpcy5pbmRleCtlKX0sYnl0ZUF0OmZ1bmN0aW9uKCl7fSxyZWFkSW50OmZ1bmN0aW9uKGUpe3ZhciB0LHI9MDtmb3IodGhpcy5jaGVja09mZnNldChlKSx0PXRoaXMuaW5kZXgrZS0xO3Q+PXRoaXMuaW5kZXg7dC0tKXI9KHI8PDgpK3RoaXMuYnl0ZUF0KHQpO3JldHVybiB0aGlzLmluZGV4Kz1lLHJ9LHJlYWRTdHJpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuIG4udHJhbnNmb3JtVG8oXCJzdHJpbmdcIix0aGlzLnJlYWREYXRhKGUpKX0scmVhZERhdGE6ZnVuY3Rpb24oKXt9LGxhc3RJbmRleE9mU2lnbmF0dXJlOmZ1bmN0aW9uKCl7fSxyZWFkQW5kQ2hlY2tTaWduYXR1cmU6ZnVuY3Rpb24oKXt9LHJlYWREYXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5yZWFkSW50KDQpO3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQygxOTgwKyhlPj4yNSYxMjcpLChlPj4yMSYxNSktMSxlPj4xNiYzMSxlPj4xMSYzMSxlPj41JjYzLCgzMSZlKTw8MSkpfX0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzJ9XSwxOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXt0aGlzLmNoZWNrT2Zmc2V0KGUpO3ZhciB0PXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCtlKTtyZXR1cm4gdGhpcy5pbmRleCs9ZSx0fSx0LmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcIi4vVWludDhBcnJheVJlYWRlclwiOjIxfV0sMjA6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUuYnl0ZUF0PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmRhdGEuY2hhckNvZGVBdCh0aGlzLnplcm8rZSl9LGkucHJvdG90eXBlLmxhc3RJbmRleE9mU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmRhdGEubGFzdEluZGV4T2YoZSktdGhpcy56ZXJvfSxpLnByb3RvdHlwZS5yZWFkQW5kQ2hlY2tTaWduYXR1cmU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT10aGlzLnJlYWREYXRhKDQpfSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXt0aGlzLmNoZWNrT2Zmc2V0KGUpO3ZhciB0PXRoaXMuZGF0YS5zbGljZSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCtlKTtyZXR1cm4gdGhpcy5pbmRleCs9ZSx0fSx0LmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcIi4vRGF0YVJlYWRlclwiOjE4fV0sMjE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9BcnJheVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLnJlYWREYXRhPWZ1bmN0aW9uKGUpe2lmKHRoaXMuY2hlY2tPZmZzZXQoZSksMD09PWUpcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO3ZhciB0PXRoaXMuZGF0YS5zdWJhcnJheSh0aGlzLnplcm8rdGhpcy5pbmRleCx0aGlzLnplcm8rdGhpcy5pbmRleCtlKTtyZXR1cm4gdGhpcy5pbmRleCs9ZSx0fSx0LmV4cG9ydHM9aX0se1wiLi4vdXRpbHNcIjozMixcIi4vQXJyYXlSZWFkZXJcIjoxN31dLDIyOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4uL3N1cHBvcnRcIikscz1lKFwiLi9BcnJheVJlYWRlclwiKSxhPWUoXCIuL1N0cmluZ1JlYWRlclwiKSxvPWUoXCIuL05vZGVCdWZmZXJSZWFkZXJcIiksaD1lKFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1uLmdldFR5cGVPZihlKTtyZXR1cm4gbi5jaGVja1N1cHBvcnQodCksXCJzdHJpbmdcIiE9PXR8fGkudWludDhhcnJheT9cIm5vZGVidWZmZXJcIj09PXQ/bmV3IG8oZSk6aS51aW50OGFycmF5P25ldyBoKG4udHJhbnNmb3JtVG8oXCJ1aW50OGFycmF5XCIsZSkpOm5ldyBzKG4udHJhbnNmb3JtVG8oXCJhcnJheVwiLGUpKTpuZXcgYShlKX19LHtcIi4uL3N1cHBvcnRcIjozMCxcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTcsXCIuL05vZGVCdWZmZXJSZWFkZXJcIjoxOSxcIi4vU3RyaW5nUmVhZGVyXCI6MjAsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ci5MT0NBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAzXHUwMDA0XCIsci5DRU5UUkFMX0ZJTEVfSEVBREVSPVwiUEtcdTAwMDFcdTAwMDJcIixyLkNFTlRSQUxfRElSRUNUT1JZX0VORD1cIlBLXHUwMDA1XHUwMDA2XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SPVwiUEtcdTAwMDZcdTAwMDdcIixyLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORD1cIlBLXHUwMDA2XHUwMDA2XCIsci5EQVRBX0RFU0NSSVBUT1I9XCJQS1x1MDAwN1xcYlwifSx7fV0sMjQ6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9HZW5lcmljV29ya2VyXCIpLGk9ZShcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIHMoZSl7bi5jYWxsKHRoaXMsXCJDb252ZXJ0V29ya2VyIHRvIFwiK2UpLHRoaXMuZGVzdFR5cGU9ZX1pLmluaGVyaXRzKHMsbikscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMucHVzaCh7ZGF0YTppLnRyYW5zZm9ybVRvKHRoaXMuZGVzdFR5cGUsZS5kYXRhKSxtZXRhOmUubWV0YX0pfSx0LmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9HZW5lcmljV29ya2VyXCIpLGk9ZShcIi4uL2NyYzMyXCIpO2Z1bmN0aW9uIHMoKXtuLmNhbGwodGhpcyxcIkNyYzMyUHJvYmVcIiksdGhpcy53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsMCl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKHMsbikscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMuc3RyZWFtSW5mby5jcmMzMj1pKGUuZGF0YSx0aGlzLnN0cmVhbUluZm8uY3JjMzJ8fDApLHRoaXMucHVzaChlKX0sdC5leHBvcnRzPXN9LHtcIi4uL2NyYzMyXCI6NCxcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKGUpe2kuY2FsbCh0aGlzLFwiRGF0YUxlbmd0aFByb2JlIGZvciBcIitlKSx0aGlzLnByb3BOYW1lPWUsdGhpcy53aXRoU3RyZWFtSW5mbyhlLDApfW4uaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7aWYoZSl7dmFyIHQ9dGhpcy5zdHJlYW1JbmZvW3RoaXMucHJvcE5hbWVdfHwwO3RoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXT10K2UuZGF0YS5sZW5ndGh9aS5wcm90b3R5cGUucHJvY2Vzc0NodW5rLmNhbGwodGhpcyxlKX0sdC5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKGUpe2kuY2FsbCh0aGlzLFwiRGF0YVdvcmtlclwiKTt2YXIgdD10aGlzO3RoaXMuZGF0YUlzUmVhZHk9ITEsdGhpcy5pbmRleD0wLHRoaXMubWF4PTAsdGhpcy5kYXRhPW51bGwsdGhpcy50eXBlPVwiXCIsdGhpcy5fdGlja1NjaGVkdWxlZD0hMSxlLnRoZW4oZnVuY3Rpb24oZSl7dC5kYXRhSXNSZWFkeT0hMCx0LmRhdGE9ZSx0Lm1heD1lJiZlLmxlbmd0aHx8MCx0LnR5cGU9bi5nZXRUeXBlT2YoZSksdC5pc1BhdXNlZHx8dC5fdGlja0FuZFJlcGVhdCgpfSxmdW5jdGlvbihlKXt0LmVycm9yKGUpfSl9bi5pbmhlcml0cyhzLGkpLHMucHJvdG90eXBlLmNsZWFuVXA9ZnVuY3Rpb24oKXtpLnByb3RvdHlwZS5jbGVhblVwLmNhbGwodGhpcyksdGhpcy5kYXRhPW51bGx9LHMucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucmVzdW1lLmNhbGwodGhpcykmJighdGhpcy5fdGlja1NjaGVkdWxlZCYmdGhpcy5kYXRhSXNSZWFkeSYmKHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITAsbi5kZWxheSh0aGlzLl90aWNrQW5kUmVwZWF0LFtdLHRoaXMpKSwhMCl9LHMucHJvdG90eXBlLl90aWNrQW5kUmVwZWF0PWZ1bmN0aW9uKCl7dGhpcy5fdGlja1NjaGVkdWxlZD0hMSx0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWR8fCh0aGlzLl90aWNrKCksdGhpcy5pc0ZpbmlzaGVkfHwobi5kZWxheSh0aGlzLl90aWNrQW5kUmVwZWF0LFtdLHRoaXMpLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITApKX0scy5wcm90b3R5cGUuX3RpY2s9ZnVuY3Rpb24oKXtpZih0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIGU9bnVsbCx0PU1hdGgubWluKHRoaXMubWF4LHRoaXMuaW5kZXgrMTYzODQpO2lmKHRoaXMuaW5kZXg+PXRoaXMubWF4KXJldHVybiB0aGlzLmVuZCgpO3N3aXRjaCh0aGlzLnR5cGUpe2Nhc2VcInN0cmluZ1wiOmU9dGhpcy5kYXRhLnN1YnN0cmluZyh0aGlzLmluZGV4LHQpO2JyZWFrO2Nhc2VcInVpbnQ4YXJyYXlcIjplPXRoaXMuZGF0YS5zdWJhcnJheSh0aGlzLmluZGV4LHQpO2JyZWFrO2Nhc2VcImFycmF5XCI6Y2FzZVwibm9kZWJ1ZmZlclwiOmU9dGhpcy5kYXRhLnNsaWNlKHRoaXMuaW5kZXgsdCl9cmV0dXJuIHRoaXMuaW5kZXg9dCx0aGlzLnB1c2goe2RhdGE6ZSxtZXRhOntwZXJjZW50OnRoaXMubWF4P3RoaXMuaW5kZXgvdGhpcy5tYXgqMTAwOjB9fSl9LHQuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dGhpcy5uYW1lPWV8fFwiZGVmYXVsdFwiLHRoaXMuc3RyZWFtSW5mbz17fSx0aGlzLmdlbmVyYXRlZEVycm9yPW51bGwsdGhpcy5leHRyYVN0cmVhbUluZm89e30sdGhpcy5pc1BhdXNlZD0hMCx0aGlzLmlzRmluaXNoZWQ9ITEsdGhpcy5pc0xvY2tlZD0hMSx0aGlzLl9saXN0ZW5lcnM9e2RhdGE6W10sZW5kOltdLGVycm9yOltdfSx0aGlzLnByZXZpb3VzPW51bGx9bi5wcm90b3R5cGU9e3B1c2g6ZnVuY3Rpb24oZSl7dGhpcy5lbWl0KFwiZGF0YVwiLGUpfSxlbmQ6ZnVuY3Rpb24oKXtpZih0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dGhpcy5mbHVzaCgpO3RyeXt0aGlzLmVtaXQoXCJlbmRcIiksdGhpcy5jbGVhblVwKCksdGhpcy5pc0ZpbmlzaGVkPSEwfWNhdGNoKGUpe3RoaXMuZW1pdChcImVycm9yXCIsZSl9cmV0dXJuITB9LGVycm9yOmZ1bmN0aW9uKGUpe3JldHVybiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkP3RoaXMuZ2VuZXJhdGVkRXJyb3I9ZToodGhpcy5pc0ZpbmlzaGVkPSEwLHRoaXMuZW1pdChcImVycm9yXCIsZSksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5lcnJvcihlKSx0aGlzLmNsZWFuVXAoKSksITApfSxvbjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLl9saXN0ZW5lcnNbZV0ucHVzaCh0KSx0aGlzfSxjbGVhblVwOmZ1bmN0aW9uKCl7dGhpcy5zdHJlYW1JbmZvPXRoaXMuZ2VuZXJhdGVkRXJyb3I9dGhpcy5leHRyYVN0cmVhbUluZm89bnVsbCx0aGlzLl9saXN0ZW5lcnM9W119LGVtaXQ6ZnVuY3Rpb24oZSx0KXtpZih0aGlzLl9saXN0ZW5lcnNbZV0pZm9yKHZhciByPTA7cjx0aGlzLl9saXN0ZW5lcnNbZV0ubGVuZ3RoO3IrKyl0aGlzLl9saXN0ZW5lcnNbZV1bcl0uY2FsbCh0aGlzLHQpfSxwaXBlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlZ2lzdGVyUHJldmlvdXModGhpcyl9LHJlZ2lzdGVyUHJldmlvdXM6ZnVuY3Rpb24oZSl7aWYodGhpcy5pc0xvY2tlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RyZWFtICdcIit0aGlzK1wiJyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIpO3RoaXMuc3RyZWFtSW5mbz1lLnN0cmVhbUluZm8sdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzLnByZXZpb3VzPWU7dmFyIHQ9dGhpcztyZXR1cm4gZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnByb2Nlc3NDaHVuayhlKX0pLGUub24oXCJlbmRcIixmdW5jdGlvbigpe3QuZW5kKCl9KSxlLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0LmVycm9yKGUpfSksdGhpc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc1BhdXNlZCYmIXRoaXMuaXNGaW5pc2hlZCYmKHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5wYXVzZSgpLCEwKX0scmVzdW1lOmZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNQYXVzZWR8fHRoaXMuaXNGaW5pc2hlZClyZXR1cm4hMTt2YXIgZT10aGlzLmlzUGF1c2VkPSExO3JldHVybiB0aGlzLmdlbmVyYXRlZEVycm9yJiYodGhpcy5lcnJvcih0aGlzLmdlbmVyYXRlZEVycm9yKSxlPSEwKSx0aGlzLnByZXZpb3VzJiZ0aGlzLnByZXZpb3VzLnJlc3VtZSgpLCFlfSxmbHVzaDpmdW5jdGlvbigpe30scHJvY2Vzc0NodW5rOmZ1bmN0aW9uKGUpe3RoaXMucHVzaChlKX0sd2l0aFN0cmVhbUluZm86ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5leHRyYVN0cmVhbUluZm9bZV09dCx0aGlzLm1lcmdlU3RyZWFtSW5mbygpLHRoaXN9LG1lcmdlU3RyZWFtSW5mbzpmdW5jdGlvbigpe2Zvcih2YXIgZSBpbiB0aGlzLmV4dHJhU3RyZWFtSW5mbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5leHRyYVN0cmVhbUluZm8sZSkmJih0aGlzLnN0cmVhbUluZm9bZV09dGhpcy5leHRyYVN0cmVhbUluZm9bZV0pfSxsb2NrOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0xvY2tlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3RyZWFtICdcIit0aGlzK1wiJyBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuXCIpO3RoaXMuaXNMb2NrZWQ9ITAsdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5sb2NrKCl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJXb3JrZXIgXCIrdGhpcy5uYW1lO3JldHVybiB0aGlzLnByZXZpb3VzP3RoaXMucHJldmlvdXMrXCIgLT4gXCIrZTplfX0sdC5leHBvcnRzPW59LHt9XSwyOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBoPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0NvbnZlcnRXb3JrZXJcIikscz1lKFwiLi9HZW5lcmljV29ya2VyXCIpLHU9ZShcIi4uL2Jhc2U2NFwiKSxuPWUoXCIuLi9zdXBwb3J0XCIpLGE9ZShcIi4uL2V4dGVybmFsXCIpLG89bnVsbDtpZihuLm5vZGVzdHJlYW0pdHJ5e289ZShcIi4uL25vZGVqcy9Ob2RlanNTdHJlYW1PdXRwdXRBZGFwdGVyXCIpfWNhdGNoKGUpe31mdW5jdGlvbiBsKGUsbyl7cmV0dXJuIG5ldyBhLlByb21pc2UoZnVuY3Rpb24odCxyKXt2YXIgbj1bXSxpPWUuX2ludGVybmFsVHlwZSxzPWUuX291dHB1dFR5cGUsYT1lLl9taW1lVHlwZTtlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUsdCl7bi5wdXNoKGUpLG8mJm8odCl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7bj1bXSxyKGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3RyeXt2YXIgZT1mdW5jdGlvbihlLHQscil7c3dpdGNoKGUpe2Nhc2VcImJsb2JcIjpyZXR1cm4gaC5uZXdCbG9iKGgudHJhbnNmb3JtVG8oXCJhcnJheWJ1ZmZlclwiLHQpLHIpO2Nhc2VcImJhc2U2NFwiOnJldHVybiB1LmVuY29kZSh0KTtkZWZhdWx0OnJldHVybiBoLnRyYW5zZm9ybVRvKGUsdCl9fShzLGZ1bmN0aW9uKGUsdCl7dmFyIHIsbj0wLGk9bnVsbCxzPTA7Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKylzKz10W3JdLmxlbmd0aDtzd2l0Y2goZSl7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIHQuam9pbihcIlwiKTtjYXNlXCJhcnJheVwiOnJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLHQpO2Nhc2VcInVpbnQ4YXJyYXlcIjpmb3IoaT1uZXcgVWludDhBcnJheShzKSxyPTA7cjx0Lmxlbmd0aDtyKyspaS5zZXQodFtyXSxuKSxuKz10W3JdLmxlbmd0aDtyZXR1cm4gaTtjYXNlXCJub2RlYnVmZmVyXCI6cmV0dXJuIEJ1ZmZlci5jb25jYXQodCk7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJjb25jYXQgOiB1bnN1cHBvcnRlZCB0eXBlICdcIitlK1wiJ1wiKX19KGksbiksYSk7dChlKX1jYXRjaChlKXtyKGUpfW49W119KS5yZXN1bWUoKX0pfWZ1bmN0aW9uIGYoZSx0LHIpe3ZhciBuPXQ7c3dpdGNoKHQpe2Nhc2VcImJsb2JcIjpjYXNlXCJhcnJheWJ1ZmZlclwiOm49XCJ1aW50OGFycmF5XCI7YnJlYWs7Y2FzZVwiYmFzZTY0XCI6bj1cInN0cmluZ1wifXRyeXt0aGlzLl9pbnRlcm5hbFR5cGU9bix0aGlzLl9vdXRwdXRUeXBlPXQsdGhpcy5fbWltZVR5cGU9cixoLmNoZWNrU3VwcG9ydChuKSx0aGlzLl93b3JrZXI9ZS5waXBlKG5ldyBpKG4pKSxlLmxvY2soKX1jYXRjaChlKXt0aGlzLl93b3JrZXI9bmV3IHMoXCJlcnJvclwiKSx0aGlzLl93b3JrZXIuZXJyb3IoZSl9fWYucHJvdG90eXBlPXthY2N1bXVsYXRlOmZ1bmN0aW9uKGUpe3JldHVybiBsKHRoaXMsZSl9LG9uOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcztyZXR1cm5cImRhdGFcIj09PWU/dGhpcy5fd29ya2VyLm9uKGUsZnVuY3Rpb24oZSl7dC5jYWxsKHIsZS5kYXRhLGUubWV0YSl9KTp0aGlzLl93b3JrZXIub24oZSxmdW5jdGlvbigpe2guZGVsYXkodCxhcmd1bWVudHMscil9KSx0aGlzfSxyZXN1bWU6ZnVuY3Rpb24oKXtyZXR1cm4gaC5kZWxheSh0aGlzLl93b3JrZXIucmVzdW1lLFtdLHRoaXMuX3dvcmtlciksdGhpc30scGF1c2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd29ya2VyLnBhdXNlKCksdGhpc30sdG9Ob2RlanNTdHJlYW06ZnVuY3Rpb24oZSl7aWYoaC5jaGVja1N1cHBvcnQoXCJub2Rlc3RyZWFtXCIpLFwibm9kZWJ1ZmZlclwiIT09dGhpcy5fb3V0cHV0VHlwZSl0aHJvdyBuZXcgRXJyb3IodGhpcy5fb3V0cHV0VHlwZStcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgbWV0aG9kXCIpO3JldHVybiBuZXcgbyh0aGlzLHtvYmplY3RNb2RlOlwibm9kZWJ1ZmZlclwiIT09dGhpcy5fb3V0cHV0VHlwZX0sZSl9fSx0LmV4cG9ydHM9Zn0se1wiLi4vYmFzZTY0XCI6MSxcIi4uL2V4dGVybmFsXCI6NixcIi4uL25vZGVqcy9Ob2RlanNTdHJlYW1PdXRwdXRBZGFwdGVyXCI6MTMsXCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9Db252ZXJ0V29ya2VyXCI6MjQsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDMwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7aWYoci5iYXNlNjQ9ITAsci5hcnJheT0hMCxyLnN0cmluZz0hMCxyLmFycmF5YnVmZmVyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBBcnJheUJ1ZmZlciYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXksci5ub2RlYnVmZmVyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsci51aW50OGFycmF5PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LFwidW5kZWZpbmVkXCI9PXR5cGVvZiBBcnJheUJ1ZmZlcilyLmJsb2I9ITE7ZWxzZXt2YXIgbj1uZXcgQXJyYXlCdWZmZXIoMCk7dHJ5e3IuYmxvYj0wPT09bmV3IEJsb2IoW25dLHt0eXBlOlwiYXBwbGljYXRpb24vemlwXCJ9KS5zaXplfWNhdGNoKGUpe3RyeXt2YXIgaT1uZXcoc2VsZi5CbG9iQnVpbGRlcnx8c2VsZi5XZWJLaXRCbG9iQnVpbGRlcnx8c2VsZi5Nb3pCbG9iQnVpbGRlcnx8c2VsZi5NU0Jsb2JCdWlsZGVyKTtpLmFwcGVuZChuKSxyLmJsb2I9MD09PWkuZ2V0QmxvYihcImFwcGxpY2F0aW9uL3ppcFwiKS5zaXplfWNhdGNoKGUpe3IuYmxvYj0hMX19fXRyeXtyLm5vZGVzdHJlYW09ISFlKFwicmVhZGFibGUtc3RyZWFtXCIpLlJlYWRhYmxlfWNhdGNoKGUpe3Iubm9kZXN0cmVhbT0hMX19LHtcInJlYWRhYmxlLXN0cmVhbVwiOjE2fV0sMzE6W2Z1bmN0aW9uKGUsdCxzKXtcInVzZSBzdHJpY3RcIjtmb3IodmFyIG89ZShcIi4vdXRpbHNcIiksaD1lKFwiLi9zdXBwb3J0XCIpLHI9ZShcIi4vbm9kZWpzVXRpbHNcIiksbj1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSx1PW5ldyBBcnJheSgyNTYpLGk9MDtpPDI1NjtpKyspdVtpXT0yNTI8PWk/NjoyNDg8PWk/NToyNDA8PWk/NDoyMjQ8PWk/MzoxOTI8PWk/MjoxO3VbMjU0XT11WzI1NF09MTtmdW5jdGlvbiBhKCl7bi5jYWxsKHRoaXMsXCJ1dGYtOCBkZWNvZGVcIiksdGhpcy5sZWZ0T3Zlcj1udWxsfWZ1bmN0aW9uIGwoKXtuLmNhbGwodGhpcyxcInV0Zi04IGVuY29kZVwiKX1zLnV0ZjhlbmNvZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGgubm9kZWJ1ZmZlcj9yLm5ld0J1ZmZlckZyb20oZSxcInV0Zi04XCIpOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYT1lLmxlbmd0aCxvPTA7Zm9yKGk9MDtpPGE7aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IodD1oLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkobyk6bmV3IEFycmF5KG8pLGk9cz0wO3M8bztpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxyPDEyOD90W3MrK109cjoocjwyMDQ4P3RbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/dFtzKytdPTIyNHxyPj4+MTI6KHRbcysrXT0yNDB8cj4+PjE4LHRbcysrXT0xMjh8cj4+PjEyJjYzKSx0W3MrK109MTI4fHI+Pj42JjYzKSx0W3MrK109MTI4fDYzJnIpO3JldHVybiB0fShlKX0scy51dGY4ZGVjb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBoLm5vZGVidWZmZXI/by50cmFuc2Zvcm1UbyhcIm5vZGVidWZmZXJcIixlKS50b1N0cmluZyhcInV0Zi04XCIpOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHM9ZS5sZW5ndGgsYT1uZXcgQXJyYXkoMipzKTtmb3IodD1yPTA7dDxzOylpZigobj1lW3QrK10pPDEyOClhW3IrK109bjtlbHNlIGlmKDQ8KGk9dVtuXSkpYVtyKytdPTY1NTMzLHQrPWktMTtlbHNle2ZvcihuJj0yPT09aT8zMTozPT09aT8xNTo3OzE8aSYmdDxzOyluPW48PDZ8NjMmZVt0KytdLGktLTsxPGk/YVtyKytdPTY1NTMzOm48NjU1MzY/YVtyKytdPW46KG4tPTY1NTM2LGFbcisrXT01NTI5NnxuPj4xMCYxMDIzLGFbcisrXT01NjMyMHwxMDIzJm4pfXJldHVybiBhLmxlbmd0aCE9PXImJihhLnN1YmFycmF5P2E9YS5zdWJhcnJheSgwLHIpOmEubGVuZ3RoPXIpLG8uYXBwbHlGcm9tQ2hhckNvZGUoYSl9KGU9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLGUpKX0sby5pbmhlcml0cyhhLG4pLGEucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt2YXIgdD1vLnRyYW5zZm9ybVRvKGgudWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIsZS5kYXRhKTtpZih0aGlzLmxlZnRPdmVyJiZ0aGlzLmxlZnRPdmVyLmxlbmd0aCl7aWYoaC51aW50OGFycmF5KXt2YXIgcj10Oyh0PW5ldyBVaW50OEFycmF5KHIubGVuZ3RoK3RoaXMubGVmdE92ZXIubGVuZ3RoKSkuc2V0KHRoaXMubGVmdE92ZXIsMCksdC5zZXQocix0aGlzLmxlZnRPdmVyLmxlbmd0aCl9ZWxzZSB0PXRoaXMubGVmdE92ZXIuY29uY2F0KHQpO3RoaXMubGVmdE92ZXI9bnVsbH12YXIgbj1mdW5jdGlvbihlLHQpe3ZhciByO2ZvcigodD10fHxlLmxlbmd0aCk+ZS5sZW5ndGgmJih0PWUubGVuZ3RoKSxyPXQtMTswPD1yJiYxMjg9PSgxOTImZVtyXSk7KXItLTtyZXR1cm4gcjwwP3Q6MD09PXI/dDpyK3VbZVtyXV0+dD9yOnR9KHQpLGk9dDtuIT09dC5sZW5ndGgmJihoLnVpbnQ4YXJyYXk/KGk9dC5zdWJhcnJheSgwLG4pLHRoaXMubGVmdE92ZXI9dC5zdWJhcnJheShuLHQubGVuZ3RoKSk6KGk9dC5zbGljZSgwLG4pLHRoaXMubGVmdE92ZXI9dC5zbGljZShuLHQubGVuZ3RoKSkpLHRoaXMucHVzaCh7ZGF0YTpzLnV0ZjhkZWNvZGUoaSksbWV0YTplLm1ldGF9KX0sYS5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXt0aGlzLmxlZnRPdmVyJiZ0aGlzLmxlZnRPdmVyLmxlbmd0aCYmKHRoaXMucHVzaCh7ZGF0YTpzLnV0ZjhkZWNvZGUodGhpcy5sZWZ0T3ZlciksbWV0YTp7fX0pLHRoaXMubGVmdE92ZXI9bnVsbCl9LHMuVXRmOERlY29kZVdvcmtlcj1hLG8uaW5oZXJpdHMobCxuKSxsLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dGhpcy5wdXNoKHtkYXRhOnMudXRmOGVuY29kZShlLmRhdGEpLG1ldGE6ZS5tZXRhfSl9LHMuVXRmOEVuY29kZVdvcmtlcj1sfSx7XCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRpbHNcIjozMn1dLDMyOltmdW5jdGlvbihlLHQsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcIi4vc3VwcG9ydFwiKSxoPWUoXCIuL2Jhc2U2NFwiKSxyPWUoXCIuL25vZGVqc1V0aWxzXCIpLHU9ZShcIi4vZXh0ZXJuYWxcIik7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZX1mdW5jdGlvbiBsKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDsrK3IpdFtyXT0yNTUmZS5jaGFyQ29kZUF0KHIpO3JldHVybiB0fWUoXCJzZXRpbW1lZGlhdGVcIiksYS5uZXdCbG9iPWZ1bmN0aW9uKHQscil7YS5jaGVja1N1cHBvcnQoXCJibG9iXCIpO3RyeXtyZXR1cm4gbmV3IEJsb2IoW3RdLHt0eXBlOnJ9KX1jYXRjaChlKXt0cnl7dmFyIG49bmV3KHNlbGYuQmxvYkJ1aWxkZXJ8fHNlbGYuV2ViS2l0QmxvYkJ1aWxkZXJ8fHNlbGYuTW96QmxvYkJ1aWxkZXJ8fHNlbGYuTVNCbG9iQnVpbGRlcik7cmV0dXJuIG4uYXBwZW5kKHQpLG4uZ2V0QmxvYihyKX1jYXRjaChlKXt0aHJvdyBuZXcgRXJyb3IoXCJCdWcgOiBjYW4ndCBjb25zdHJ1Y3QgdGhlIEJsb2IuXCIpfX19O3ZhciBpPXtzdHJpbmdpZnlCeUNodW5rOmZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1bXSxpPTAscz1lLmxlbmd0aDtpZihzPD1yKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZSk7Zm9yKDtpPHM7KVwiYXJyYXlcIj09PXR8fFwibm9kZWJ1ZmZlclwiPT09dD9uLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGUuc2xpY2UoaSxNYXRoLm1pbihpK3IscykpKSk6bi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlLnN1YmFycmF5KGksTWF0aC5taW4oaStyLHMpKSkpLGkrPXI7cmV0dXJuIG4uam9pbihcIlwiKX0sc3RyaW5naWZ5QnlDaGFyOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1cIlwiLHI9MDtyPGUubGVuZ3RoO3IrKyl0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGVbcl0pO3JldHVybiB0fSxhcHBseUNhbkJlVXNlZDp7dWludDhhcnJheTpmdW5jdGlvbigpe3RyeXtyZXR1cm4gby51aW50OGFycmF5JiYxPT09U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG5ldyBVaW50OEFycmF5KDEpKS5sZW5ndGh9Y2F0Y2goZSl7cmV0dXJuITF9fSgpLG5vZGVidWZmZXI6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8ubm9kZWJ1ZmZlciYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxyLmFsbG9jQnVmZmVyKDEpKS5sZW5ndGh9Y2F0Y2goZSl7cmV0dXJuITF9fSgpfX07ZnVuY3Rpb24gcyhlKXt2YXIgdD02NTUzNixyPWEuZ2V0VHlwZU9mKGUpLG49ITA7aWYoXCJ1aW50OGFycmF5XCI9PT1yP249aS5hcHBseUNhbkJlVXNlZC51aW50OGFycmF5Olwibm9kZWJ1ZmZlclwiPT09ciYmKG49aS5hcHBseUNhbkJlVXNlZC5ub2RlYnVmZmVyKSxuKWZvcig7MTx0Oyl0cnl7cmV0dXJuIGkuc3RyaW5naWZ5QnlDaHVuayhlLHIsdCl9Y2F0Y2goZSl7dD1NYXRoLmZsb29yKHQvMil9cmV0dXJuIGkuc3RyaW5naWZ5QnlDaGFyKGUpfWZ1bmN0aW9uIGYoZSx0KXtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl0W3JdPWVbcl07cmV0dXJuIHR9YS5hcHBseUZyb21DaGFyQ29kZT1zO3ZhciBjPXt9O2Muc3RyaW5nPXtzdHJpbmc6bixhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbChlLG5ldyBBcnJheShlLmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gYy5zdHJpbmcudWludDhhcnJheShlKS5idWZmZXJ9LHVpbnQ4YXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxuZXcgVWludDhBcnJheShlLmxlbmd0aCkpfSxub2RlYnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiBsKGUsci5hbGxvY0J1ZmZlcihlLmxlbmd0aCkpfX0sYy5hcnJheT17c3RyaW5nOnMsYXJyYXk6bixhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVWludDhBcnJheShlKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKGUpfX0sYy5hcnJheWJ1ZmZlcj17c3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBzKG5ldyBVaW50OEFycmF5KGUpKX0sYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYobmV3IFVpbnQ4QXJyYXkoZSksbmV3IEFycmF5KGUuYnl0ZUxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpuLHVpbnQ4YXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KGUpfSxub2RlYnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiByLm5ld0J1ZmZlckZyb20obmV3IFVpbnQ4QXJyYXkoZSkpfX0sYy51aW50OGFycmF5PXtzdHJpbmc6cyxhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihlLG5ldyBBcnJheShlLmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gZS5idWZmZXJ9LHVpbnQ4YXJyYXk6bixub2RlYnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiByLm5ld0J1ZmZlckZyb20oZSl9fSxjLm5vZGVidWZmZXI9e3N0cmluZzpzLGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKGUsbmV3IEFycmF5KGUubGVuZ3RoKSl9LGFycmF5YnVmZmVyOmZ1bmN0aW9uKGUpe3JldHVybiBjLm5vZGVidWZmZXIudWludDhhcnJheShlKS5idWZmZXJ9LHVpbnQ4YXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSxuZXcgVWludDhBcnJheShlLmxlbmd0aCkpfSxub2RlYnVmZmVyOm59LGEudHJhbnNmb3JtVG89ZnVuY3Rpb24oZSx0KXtpZih0PXR8fFwiXCIsIWUpcmV0dXJuIHQ7YS5jaGVja1N1cHBvcnQoZSk7dmFyIHI9YS5nZXRUeXBlT2YodCk7cmV0dXJuIGNbcl1bZV0odCl9LGEucmVzb2x2ZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zcGxpdChcIi9cIikscj1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07XCIuXCI9PT1pfHxcIlwiPT09aSYmMCE9PW4mJm4hPT10Lmxlbmd0aC0xfHwoXCIuLlwiPT09aT9yLnBvcCgpOnIucHVzaChpKSl9cmV0dXJuIHIuam9pbihcIi9cIil9LGEuZ2V0VHlwZU9mPWZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlP1wic3RyaW5nXCI6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpP1wiYXJyYXlcIjpvLm5vZGVidWZmZXImJnIuaXNCdWZmZXIoZSk/XCJub2RlYnVmZmVyXCI6by51aW50OGFycmF5JiZlIGluc3RhbmNlb2YgVWludDhBcnJheT9cInVpbnQ4YXJyYXlcIjpvLmFycmF5YnVmZmVyJiZlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI/XCJhcnJheWJ1ZmZlclwiOnZvaWQgMH0sYS5jaGVja1N1cHBvcnQ9ZnVuY3Rpb24oZSl7aWYoIW9bZS50b0xvd2VyQ2FzZSgpXSl0aHJvdyBuZXcgRXJyb3IoZStcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgcGxhdGZvcm1cIil9LGEuTUFYX1ZBTFVFXzE2QklUUz02NTUzNSxhLk1BWF9WQUxVRV8zMkJJVFM9LTEsYS5wcmV0dHk9ZnVuY3Rpb24oZSl7dmFyIHQscixuPVwiXCI7Zm9yKHI9MDtyPChlfHxcIlwiKS5sZW5ndGg7cisrKW4rPVwiXFxcXHhcIisoKHQ9ZS5jaGFyQ29kZUF0KHIpKTwxNj9cIjBcIjpcIlwiKSt0LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO3JldHVybiBufSxhLmRlbGF5PWZ1bmN0aW9uKGUsdCxyKXtzZXRJbW1lZGlhdGUoZnVuY3Rpb24oKXtlLmFwcGx5KHJ8fG51bGwsdHx8W10pfSl9LGEuaW5oZXJpdHM9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiByKCl7fXIucHJvdG90eXBlPXQucHJvdG90eXBlLGUucHJvdG90eXBlPW5ldyByfSxhLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBlLHQscj17fTtmb3IoZT0wO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspZm9yKHQgaW4gYXJndW1lbnRzW2VdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbZV0sdCkmJnZvaWQgMD09PXJbdF0mJihyW3RdPWFyZ3VtZW50c1tlXVt0XSk7cmV0dXJuIHJ9LGEucHJlcGFyZUNvbnRlbnQ9ZnVuY3Rpb24ocixlLG4saSxzKXtyZXR1cm4gdS5Qcm9taXNlLnJlc29sdmUoZSkudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gby5ibG9iJiYobiBpbnN0YW5jZW9mIEJsb2J8fC0xIT09W1wiW29iamVjdCBGaWxlXVwiLFwiW29iamVjdCBCbG9iXVwiXS5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuKSkpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcj9uZXcgdS5Qcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIGU9bmV3IEZpbGVSZWFkZXI7ZS5vbmxvYWQ9ZnVuY3Rpb24oZSl7dChlLnRhcmdldC5yZXN1bHQpfSxlLm9uZXJyb3I9ZnVuY3Rpb24oZSl7cihlLnRhcmdldC5lcnJvcil9LGUucmVhZEFzQXJyYXlCdWZmZXIobil9KTpufSkudGhlbihmdW5jdGlvbihlKXt2YXIgdD1hLmdldFR5cGVPZihlKTtyZXR1cm4gdD8oXCJhcnJheWJ1ZmZlclwiPT09dD9lPWEudHJhbnNmb3JtVG8oXCJ1aW50OGFycmF5XCIsZSk6XCJzdHJpbmdcIj09PXQmJihzP2U9aC5kZWNvZGUoZSk6biYmITAhPT1pJiYoZT1mdW5jdGlvbihlKXtyZXR1cm4gbChlLG8udWludDhhcnJheT9uZXcgVWludDhBcnJheShlLmxlbmd0aCk6bmV3IEFycmF5KGUubGVuZ3RoKSl9KGUpKSksZSk6dS5Qcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJDYW4ndCByZWFkIHRoZSBkYXRhIG9mICdcIityK1wiJy4gSXMgaXQgaW4gYSBzdXBwb3J0ZWQgSmF2YVNjcmlwdCB0eXBlIChTdHJpbmcsIEJsb2IsIEFycmF5QnVmZmVyLCBldGMpID9cIikpfSl9fSx7XCIuL2Jhc2U2NFwiOjEsXCIuL2V4dGVybmFsXCI6NixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3VwcG9ydFwiOjMwLHNldGltbWVkaWF0ZTo1NH1dLDMzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vcmVhZGVyL3JlYWRlckZvclwiKSxpPWUoXCIuL3V0aWxzXCIpLHM9ZShcIi4vc2lnbmF0dXJlXCIpLGE9ZShcIi4vemlwRW50cnlcIiksbz1lKFwiLi9zdXBwb3J0XCIpO2Z1bmN0aW9uIGgoZSl7dGhpcy5maWxlcz1bXSx0aGlzLmxvYWRPcHRpb25zPWV9aC5wcm90b3R5cGU9e2NoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKGUpe2lmKCF0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUoZSkpe3RoaXMucmVhZGVyLmluZGV4LT00O3ZhciB0PXRoaXMucmVhZGVyLnJlYWRTdHJpbmcoNCk7dGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IHVuZXhwZWN0ZWQgc2lnbmF0dXJlIChcIitpLnByZXR0eSh0KStcIiwgZXhwZWN0ZWQgXCIraS5wcmV0dHkoZSkrXCIpXCIpfX0saXNTaWduYXR1cmU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLnJlYWRlci5pbmRleDt0aGlzLnJlYWRlci5zZXRJbmRleChlKTt2YXIgbj10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpPT09dDtyZXR1cm4gdGhpcy5yZWFkZXIuc2V0SW5kZXgociksbn0scmVhZEJsb2NrRW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy5kaXNrTnVtYmVyPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPXRoaXMucmVhZGVyLnJlYWRJbnQoMiksdGhpcy5jZW50cmFsRGlyUmVjb3Jkcz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclNpemU9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLnppcENvbW1lbnRMZW5ndGg9dGhpcy5yZWFkZXIucmVhZEludCgyKTt2YXIgZT10aGlzLnJlYWRlci5yZWFkRGF0YSh0aGlzLnppcENvbW1lbnRMZW5ndGgpLHQ9by51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixyPWkudHJhbnNmb3JtVG8odCxlKTt0aGlzLnppcENvbW1lbnQ9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShyKX0scmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWw6ZnVuY3Rpb24oKXt0aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZT10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMucmVhZGVyLnNraXAoNCksdGhpcy5kaXNrTnVtYmVyPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5kaXNrV2l0aENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyUmVjb3Jkcz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGE9e307Zm9yKHZhciBlLHQscixuPXRoaXMuemlwNjRFbmRPZkNlbnRyYWxTaXplLTQ0OzA8bjspZT10aGlzLnJlYWRlci5yZWFkSW50KDIpLHQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSxyPXRoaXMucmVhZGVyLnJlYWREYXRhKHQpLHRoaXMuemlwNjRFeHRlbnNpYmxlRGF0YVtlXT17aWQ6ZSxsZW5ndGg6dCx2YWx1ZTpyfX0scmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yOmZ1bmN0aW9uKCl7aWYodGhpcy5kaXNrV2l0aFppcDY0Q2VudHJhbERpclN0YXJ0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5kaXNrc0NvdW50PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksMTx0aGlzLmRpc2tzQ291bnQpdGhyb3cgbmV3IEVycm9yKFwiTXVsdGktdm9sdW1lcyB6aXAgYXJlIG5vdCBzdXBwb3J0ZWRcIil9LHJlYWRMb2NhbEZpbGVzOmZ1bmN0aW9uKCl7dmFyIGUsdDtmb3IoZT0wO2U8dGhpcy5maWxlcy5sZW5ndGg7ZSsrKXQ9dGhpcy5maWxlc1tlXSx0aGlzLnJlYWRlci5zZXRJbmRleCh0LmxvY2FsSGVhZGVyT2Zmc2V0KSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuTE9DQUxfRklMRV9IRUFERVIpLHQucmVhZExvY2FsUGFydCh0aGlzLnJlYWRlciksdC5oYW5kbGVVVEY4KCksdC5wcm9jZXNzQXR0cmlidXRlcygpfSxyZWFkQ2VudHJhbERpcjpmdW5jdGlvbigpe3ZhciBlO2Zvcih0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLmNlbnRyYWxEaXJPZmZzZXQpO3RoaXMucmVhZGVyLnJlYWRBbmRDaGVja1NpZ25hdHVyZShzLkNFTlRSQUxfRklMRV9IRUFERVIpOykoZT1uZXcgYSh7emlwNjQ6dGhpcy56aXA2NH0sdGhpcy5sb2FkT3B0aW9ucykpLnJlYWRDZW50cmFsUGFydCh0aGlzLnJlYWRlciksdGhpcy5maWxlcy5wdXNoKGUpO2lmKHRoaXMuY2VudHJhbERpclJlY29yZHMhPT10aGlzLmZpbGVzLmxlbmd0aCYmMCE9PXRoaXMuY2VudHJhbERpclJlY29yZHMmJjA9PT10aGlzLmZpbGVzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwIG9yIGJ1ZzogZXhwZWN0ZWQgXCIrdGhpcy5jZW50cmFsRGlyUmVjb3JkcytcIiByZWNvcmRzIGluIGNlbnRyYWwgZGlyLCBnb3QgXCIrdGhpcy5maWxlcy5sZW5ndGgpfSxyZWFkRW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpO2lmKGU8MCl0aHJvdyF0aGlzLmlzU2lnbmF0dXJlKDAscy5MT0NBTF9GSUxFX0hFQURFUik/bmV3IEVycm9yKFwiQ2FuJ3QgZmluZCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgOiBpcyB0aGlzIGEgemlwIGZpbGUgPyBJZiBpdCBpcywgc2VlIGh0dHBzOi8vc3R1ay5naXRodWIuaW8vanN6aXAvZG9jdW1lbnRhdGlvbi9ob3d0by9yZWFkX3ppcC5odG1sXCIpOm5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XCIpO3RoaXMucmVhZGVyLnNldEluZGV4KGUpO3ZhciB0PWU7aWYodGhpcy5jaGVja1NpZ25hdHVyZShzLkNFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWFkQmxvY2tFbmRPZkNlbnRyYWwoKSx0aGlzLmRpc2tOdW1iZXI9PT1pLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9PT1pLk1BWF9WQUxVRV8xNkJJVFN8fHRoaXMuY2VudHJhbERpclJlY29yZHNPblRoaXNEaXNrPT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzPT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJTaXplPT09aS5NQVhfVkFMVUVfMzJCSVRTfHx0aGlzLmNlbnRyYWxEaXJPZmZzZXQ9PT1pLk1BWF9WQUxVRV8zMkJJVFMpe2lmKHRoaXMuemlwNjQ9ITAsKGU9dGhpcy5yZWFkZXIubGFzdEluZGV4T2ZTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9MT0NBVE9SKSk8MCl0aHJvdyBuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIHRoZSBaSVA2NCBlbmQgb2YgY2VudHJhbCBkaXJlY3RvcnkgbG9jYXRvclwiKTtpZih0aGlzLnJlYWRlci5zZXRJbmRleChlKSx0aGlzLmNoZWNrU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUiksdGhpcy5yZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbExvY2F0b3IoKSwhdGhpcy5pc1NpZ25hdHVyZSh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIscy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpJiYodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSx0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXI8MCkpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5XCIpO3RoaXMucmVhZGVyLnNldEluZGV4KHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpciksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWFkQmxvY2taaXA2NEVuZE9mQ2VudHJhbCgpfXZhciByPXRoaXMuY2VudHJhbERpck9mZnNldCt0aGlzLmNlbnRyYWxEaXJTaXplO3RoaXMuemlwNjQmJihyKz0yMCxyKz0xMit0aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZSk7dmFyIG49dC1yO2lmKDA8bil0aGlzLmlzU2lnbmF0dXJlKHQscy5DRU5UUkFMX0ZJTEVfSEVBREVSKXx8KHRoaXMucmVhZGVyLnplcm89bik7ZWxzZSBpZihuPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogbWlzc2luZyBcIitNYXRoLmFicyhuKStcIiBieXRlcy5cIil9LHByZXBhcmVSZWFkZXI6ZnVuY3Rpb24oZSl7dGhpcy5yZWFkZXI9bihlKX0sbG9hZDpmdW5jdGlvbihlKXt0aGlzLnByZXBhcmVSZWFkZXIoZSksdGhpcy5yZWFkRW5kT2ZDZW50cmFsKCksdGhpcy5yZWFkQ2VudHJhbERpcigpLHRoaXMucmVhZExvY2FsRmlsZXMoKX19LHQuZXhwb3J0cz1ofSx7XCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc2lnbmF0dXJlXCI6MjMsXCIuL3N1cHBvcnRcIjozMCxcIi4vdXRpbHNcIjozMixcIi4vemlwRW50cnlcIjozNH1dLDM0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vcmVhZGVyL3JlYWRlckZvclwiKSxzPWUoXCIuL3V0aWxzXCIpLGk9ZShcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxhPWUoXCIuL2NyYzMyXCIpLG89ZShcIi4vdXRmOFwiKSxoPWUoXCIuL2NvbXByZXNzaW9uc1wiKSx1PWUoXCIuL3N1cHBvcnRcIik7ZnVuY3Rpb24gbChlLHQpe3RoaXMub3B0aW9ucz1lLHRoaXMubG9hZE9wdGlvbnM9dH1sLnByb3RvdHlwZT17aXNFbmNyeXB0ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gMT09KDEmdGhpcy5iaXRGbGFnKX0sdXNlVVRGODpmdW5jdGlvbigpe3JldHVybiAyMDQ4PT0oMjA0OCZ0aGlzLmJpdEZsYWcpfSxyZWFkTG9jYWxQYXJ0OmZ1bmN0aW9uKGUpe3ZhciB0LHI7aWYoZS5za2lwKDIyKSx0aGlzLmZpbGVOYW1lTGVuZ3RoPWUucmVhZEludCgyKSxyPWUucmVhZEludCgyKSx0aGlzLmZpbGVOYW1lPWUucmVhZERhdGEodGhpcy5maWxlTmFtZUxlbmd0aCksZS5za2lwKHIpLC0xPT09dGhpcy5jb21wcmVzc2VkU2l6ZXx8LTE9PT10aGlzLnVuY29tcHJlc3NlZFNpemUpdGhyb3cgbmV3IEVycm9yKFwiQnVnIG9yIGNvcnJ1cHRlZCB6aXAgOiBkaWRuJ3QgZ2V0IGVub3VnaCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBjZW50cmFsIGRpcmVjdG9yeSAoY29tcHJlc3NlZFNpemUgPT09IC0xIHx8IHVuY29tcHJlc3NlZFNpemUgPT09IC0xKVwiKTtpZihudWxsPT09KHQ9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0IGluIGgpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGgsdCkmJmhbdF0ubWFnaWM9PT1lKXJldHVybiBoW3RdO3JldHVybiBudWxsfSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKSkpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IGNvbXByZXNzaW9uIFwiK3MucHJldHR5KHRoaXMuY29tcHJlc3Npb25NZXRob2QpK1wiIHVua25vd24gKGlubmVyIGZpbGUgOiBcIitzLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5maWxlTmFtZSkrXCIpXCIpO3RoaXMuZGVjb21wcmVzc2VkPW5ldyBpKHRoaXMuY29tcHJlc3NlZFNpemUsdGhpcy51bmNvbXByZXNzZWRTaXplLHRoaXMuY3JjMzIsdCxlLnJlYWREYXRhKHRoaXMuY29tcHJlc3NlZFNpemUpKX0scmVhZENlbnRyYWxQYXJ0OmZ1bmN0aW9uKGUpe3RoaXMudmVyc2lvbk1hZGVCeT1lLnJlYWRJbnQoMiksZS5za2lwKDIpLHRoaXMuYml0RmxhZz1lLnJlYWRJbnQoMiksdGhpcy5jb21wcmVzc2lvbk1ldGhvZD1lLnJlYWRTdHJpbmcoMiksdGhpcy5kYXRlPWUucmVhZERhdGUoKSx0aGlzLmNyYzMyPWUucmVhZEludCg0KSx0aGlzLmNvbXByZXNzZWRTaXplPWUucmVhZEludCg0KSx0aGlzLnVuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDQpO3ZhciB0PWUucmVhZEludCgyKTtpZih0aGlzLmV4dHJhRmllbGRzTGVuZ3RoPWUucmVhZEludCgyKSx0aGlzLmZpbGVDb21tZW50TGVuZ3RoPWUucmVhZEludCgyKSx0aGlzLmRpc2tOdW1iZXJTdGFydD1lLnJlYWRJbnQoMiksdGhpcy5pbnRlcm5hbEZpbGVBdHRyaWJ1dGVzPWUucmVhZEludCgyKSx0aGlzLmV4dGVybmFsRmlsZUF0dHJpYnV0ZXM9ZS5yZWFkSW50KDQpLHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9ZS5yZWFkSW50KDQpLHRoaXMuaXNFbmNyeXB0ZWQoKSl0aHJvdyBuZXcgRXJyb3IoXCJFbmNyeXB0ZWQgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpO2Uuc2tpcCh0KSx0aGlzLnJlYWRFeHRyYUZpZWxkcyhlKSx0aGlzLnBhcnNlWklQNjRFeHRyYUZpZWxkKGUpLHRoaXMuZmlsZUNvbW1lbnQ9ZS5yZWFkRGF0YSh0aGlzLmZpbGVDb21tZW50TGVuZ3RoKX0scHJvY2Vzc0F0dHJpYnV0ZXM6ZnVuY3Rpb24oKXt0aGlzLnVuaXhQZXJtaXNzaW9ucz1udWxsLHRoaXMuZG9zUGVybWlzc2lvbnM9bnVsbDt2YXIgZT10aGlzLnZlcnNpb25NYWRlQnk+Pjg7dGhpcy5kaXI9ISEoMTYmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwwPT1lJiYodGhpcy5kb3NQZXJtaXNzaW9ucz02MyZ0aGlzLmV4dGVybmFsRmlsZUF0dHJpYnV0ZXMpLDM9PWUmJih0aGlzLnVuaXhQZXJtaXNzaW9ucz10aGlzLmV4dGVybmFsRmlsZUF0dHJpYnV0ZXM+PjE2JjY1NTM1KSx0aGlzLmRpcnx8XCIvXCIhPT10aGlzLmZpbGVOYW1lU3RyLnNsaWNlKC0xKXx8KHRoaXMuZGlyPSEwKX0scGFyc2VaSVA2NEV4dHJhRmllbGQ6ZnVuY3Rpb24oKXtpZih0aGlzLmV4dHJhRmllbGRzWzFdKXt2YXIgZT1uKHRoaXMuZXh0cmFGaWVsZHNbMV0udmFsdWUpO3RoaXMudW5jb21wcmVzc2VkU2l6ZT09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMudW5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmNvbXByZXNzZWRTaXplPWUucmVhZEludCg4KSksdGhpcy5sb2NhbEhlYWRlck9mZnNldD09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9ZS5yZWFkSW50KDgpKSx0aGlzLmRpc2tOdW1iZXJTdGFydD09PXMuTUFYX1ZBTFVFXzMyQklUUyYmKHRoaXMuZGlza051bWJlclN0YXJ0PWUucmVhZEludCg0KSl9fSxyZWFkRXh0cmFGaWVsZHM6ZnVuY3Rpb24oZSl7dmFyIHQscixuLGk9ZS5pbmRleCt0aGlzLmV4dHJhRmllbGRzTGVuZ3RoO2Zvcih0aGlzLmV4dHJhRmllbGRzfHwodGhpcy5leHRyYUZpZWxkcz17fSk7ZS5pbmRleCs0PGk7KXQ9ZS5yZWFkSW50KDIpLHI9ZS5yZWFkSW50KDIpLG49ZS5yZWFkRGF0YShyKSx0aGlzLmV4dHJhRmllbGRzW3RdPXtpZDp0LGxlbmd0aDpyLHZhbHVlOm59O2Uuc2V0SW5kZXgoaSl9LGhhbmRsZVVURjg6ZnVuY3Rpb24oKXt2YXIgZT11LnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiO2lmKHRoaXMudXNlVVRGOCgpKXRoaXMuZmlsZU5hbWVTdHI9by51dGY4ZGVjb2RlKHRoaXMuZmlsZU5hbWUpLHRoaXMuZmlsZUNvbW1lbnRTdHI9by51dGY4ZGVjb2RlKHRoaXMuZmlsZUNvbW1lbnQpO2Vsc2V7dmFyIHQ9dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoKCk7aWYobnVsbCE9PXQpdGhpcy5maWxlTmFtZVN0cj10O2Vsc2V7dmFyIHI9cy50cmFuc2Zvcm1UbyhlLHRoaXMuZmlsZU5hbWUpO3RoaXMuZmlsZU5hbWVTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShyKX12YXIgbj10aGlzLmZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQoKTtpZihudWxsIT09bil0aGlzLmZpbGVDb21tZW50U3RyPW47ZWxzZXt2YXIgaT1zLnRyYW5zZm9ybVRvKGUsdGhpcy5maWxlQ29tbWVudCk7dGhpcy5maWxlQ29tbWVudFN0cj10aGlzLmxvYWRPcHRpb25zLmRlY29kZUZpbGVOYW1lKGkpfX19LGZpbmRFeHRyYUZpZWxkVW5pY29kZVBhdGg6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmV4dHJhRmllbGRzWzI4Nzg5XTtpZihlKXt2YXIgdD1uKGUudmFsdWUpO3JldHVybiAxIT09dC5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVOYW1lKSE9PXQucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZSh0LnJlYWREYXRhKGUubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH0sZmluZEV4dHJhRmllbGRVbmljb2RlQ29tbWVudDpmdW5jdGlvbigpe3ZhciBlPXRoaXMuZXh0cmFGaWVsZHNbMjU0NjFdO2lmKGUpe3ZhciB0PW4oZS52YWx1ZSk7cmV0dXJuIDEhPT10LnJlYWRJbnQoMSk/bnVsbDphKHRoaXMuZmlsZUNvbW1lbnQpIT09dC5yZWFkSW50KDQpP251bGw6by51dGY4ZGVjb2RlKHQucmVhZERhdGEoZS5sZW5ndGgtNSkpfXJldHVybiBudWxsfX0sdC5leHBvcnRzPWx9LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2NvbXByZXNzaW9uc1wiOjMsXCIuL2NyYzMyXCI6NCxcIi4vcmVhZGVyL3JlYWRlckZvclwiOjIyLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0ZjhcIjozMSxcIi4vdXRpbHNcIjozMn1dLDM1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQscil7dGhpcy5uYW1lPWUsdGhpcy5kaXI9ci5kaXIsdGhpcy5kYXRlPXIuZGF0ZSx0aGlzLmNvbW1lbnQ9ci5jb21tZW50LHRoaXMudW5peFBlcm1pc3Npb25zPXIudW5peFBlcm1pc3Npb25zLHRoaXMuZG9zUGVybWlzc2lvbnM9ci5kb3NQZXJtaXNzaW9ucyx0aGlzLl9kYXRhPXQsdGhpcy5fZGF0YUJpbmFyeT1yLmJpbmFyeSx0aGlzLm9wdGlvbnM9e2NvbXByZXNzaW9uOnIuY29tcHJlc3Npb24sY29tcHJlc3Npb25PcHRpb25zOnIuY29tcHJlc3Npb25PcHRpb25zfX12YXIgcz1lKFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCIpLGk9ZShcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIiksYT1lKFwiLi91dGY4XCIpLG89ZShcIi4vY29tcHJlc3NlZE9iamVjdFwiKSxoPWUoXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpO24ucHJvdG90eXBlPXtpbnRlcm5hbFN0cmVhbTpmdW5jdGlvbihlKXt2YXIgdD1udWxsLHI9XCJzdHJpbmdcIjt0cnl7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiTm8gb3V0cHV0IHR5cGUgc3BlY2lmaWVkLlwiKTt2YXIgbj1cInN0cmluZ1wiPT09KHI9ZS50b0xvd2VyQ2FzZSgpKXx8XCJ0ZXh0XCI9PT1yO1wiYmluYXJ5c3RyaW5nXCIhPT1yJiZcInRleHRcIiE9PXJ8fChyPVwic3RyaW5nXCIpLHQ9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3ZhciBpPSF0aGlzLl9kYXRhQmluYXJ5O2kmJiFuJiYodD10LnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLCFpJiZuJiYodD10LnBpcGUobmV3IGEuVXRmOERlY29kZVdvcmtlcikpfWNhdGNoKGUpeyh0PW5ldyBoKFwiZXJyb3JcIikpLmVycm9yKGUpfXJldHVybiBuZXcgcyh0LHIsXCJcIil9LGFzeW5jOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJlYW0oZSkuYWNjdW11bGF0ZSh0KX0sbm9kZVN0cmVhbTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKGV8fFwibm9kZWJ1ZmZlclwiKS50b05vZGVqc1N0cmVhbSh0KX0sX2NvbXByZXNzV29ya2VyOmZ1bmN0aW9uKGUsdCl7aWYodGhpcy5fZGF0YSBpbnN0YW5jZW9mIG8mJnRoaXMuX2RhdGEuY29tcHJlc3Npb24ubWFnaWM9PT1lLm1hZ2ljKXJldHVybiB0aGlzLl9kYXRhLmdldENvbXByZXNzZWRXb3JrZXIoKTt2YXIgcj10aGlzLl9kZWNvbXByZXNzV29ya2VyKCk7cmV0dXJuIHRoaXMuX2RhdGFCaW5hcnl8fChyPXIucGlwZShuZXcgYS5VdGY4RW5jb2RlV29ya2VyKSksby5jcmVhdGVXb3JrZXJGcm9tKHIsZSx0KX0sX2RlY29tcHJlc3NXb3JrZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YSBpbnN0YW5jZW9mIG8/dGhpcy5fZGF0YS5nZXRDb250ZW50V29ya2VyKCk6dGhpcy5fZGF0YSBpbnN0YW5jZW9mIGg/dGhpcy5fZGF0YTpuZXcgaSh0aGlzLl9kYXRhKX19O2Zvcih2YXIgdT1bXCJhc1RleHRcIixcImFzQmluYXJ5XCIsXCJhc05vZGVCdWZmZXJcIixcImFzVWludDhBcnJheVwiLFwiYXNBcnJheUJ1ZmZlclwiXSxsPWZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gcmVtb3ZlZCBpbiBKU1ppcCAzLjAsIHBsZWFzZSBjaGVjayB0aGUgdXBncmFkZSBndWlkZS5cIil9LGY9MDtmPHUubGVuZ3RoO2YrKyluLnByb3RvdHlwZVt1W2ZdXT1sO3QuZXhwb3J0cz1ufSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9zdHJlYW0vRGF0YVdvcmtlclwiOjI3LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdHJlYW0vU3RyZWFtSGVscGVyXCI6MjksXCIuL3V0ZjhcIjozMX1dLDM2OltmdW5jdGlvbihlLGwsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO3ZhciByLG4sZT10Lk11dGF0aW9uT2JzZXJ2ZXJ8fHQuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtpZihlKXt2YXIgaT0wLHM9bmV3IGUodSksYT10LmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO3Mub2JzZXJ2ZShhLHtjaGFyYWN0ZXJEYXRhOiEwfSkscj1mdW5jdGlvbigpe2EuZGF0YT1pPSsraSUyfX1lbHNlIGlmKHQuc2V0SW1tZWRpYXRlfHx2b2lkIDA9PT10Lk1lc3NhZ2VDaGFubmVsKXI9XCJkb2N1bWVudFwiaW4gdCYmXCJvbnJlYWR5c3RhdGVjaGFuZ2VcImluIHQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKT9mdW5jdGlvbigpe3ZhciBlPXQuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtlLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3UoKSxlLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSxlPW51bGx9LHQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpfTpmdW5jdGlvbigpe3NldFRpbWVvdXQodSwwKX07ZWxzZXt2YXIgbz1uZXcgdC5NZXNzYWdlQ2hhbm5lbDtvLnBvcnQxLm9ubWVzc2FnZT11LHI9ZnVuY3Rpb24oKXtvLnBvcnQyLnBvc3RNZXNzYWdlKDApfX12YXIgaD1bXTtmdW5jdGlvbiB1KCl7dmFyIGUsdDtuPSEwO2Zvcih2YXIgcj1oLmxlbmd0aDtyOyl7Zm9yKHQ9aCxoPVtdLGU9LTE7KytlPHI7KXRbZV0oKTtyPWgubGVuZ3RofW49ITF9bC5leHBvcnRzPWZ1bmN0aW9uKGUpezEhPT1oLnB1c2goZSl8fG58fHIoKX19KS5jYWxsKHRoaXMsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSl9LHt9XSwzNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCJpbW1lZGlhdGVcIik7ZnVuY3Rpb24gdSgpe312YXIgbD17fSxzPVtcIlJFSkVDVEVEXCJdLGE9W1wiRlVMRklMTEVEXCJdLG49W1wiUEVORElOR1wiXTtmdW5jdGlvbiBvKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvblwiKTt0aGlzLnN0YXRlPW4sdGhpcy5xdWV1ZT1bXSx0aGlzLm91dGNvbWU9dm9pZCAwLGUhPT11JiZkKHRoaXMsZSl9ZnVuY3Rpb24gaChlLHQscil7dGhpcy5wcm9taXNlPWUsXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKHRoaXMub25GdWxmaWxsZWQ9dCx0aGlzLmNhbGxGdWxmaWxsZWQ9dGhpcy5vdGhlckNhbGxGdWxmaWxsZWQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJih0aGlzLm9uUmVqZWN0ZWQ9cix0aGlzLmNhbGxSZWplY3RlZD10aGlzLm90aGVyQ2FsbFJlamVjdGVkKX1mdW5jdGlvbiBmKHQscixuKXtpKGZ1bmN0aW9uKCl7dmFyIGU7dHJ5e2U9cihuKX1jYXRjaChlKXtyZXR1cm4gbC5yZWplY3QodCxlKX1lPT09dD9sLnJlamVjdCh0LG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmXCIpKTpsLnJlc29sdmUodCxlKX0pfWZ1bmN0aW9uIGMoZSl7dmFyIHQ9ZSYmZS50aGVuO2lmKGUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQpcmV0dXJuIGZ1bmN0aW9uKCl7dC5hcHBseShlLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGQodCxlKXt2YXIgcj0hMTtmdW5jdGlvbiBuKGUpe3J8fChyPSEwLGwucmVqZWN0KHQsZSkpfWZ1bmN0aW9uIGkoZSl7cnx8KHI9ITAsbC5yZXNvbHZlKHQsZSkpfXZhciBzPXAoZnVuY3Rpb24oKXtlKGksbil9KTtcImVycm9yXCI9PT1zLnN0YXR1cyYmbihzLnZhbHVlKX1mdW5jdGlvbiBwKGUsdCl7dmFyIHI9e307dHJ5e3IudmFsdWU9ZSh0KSxyLnN0YXR1cz1cInN1Y2Nlc3NcIn1jYXRjaChlKXtyLnN0YXR1cz1cImVycm9yXCIsci52YWx1ZT1lfXJldHVybiByfSh0LmV4cG9ydHM9bykucHJvdG90eXBlLmZpbmFsbHk9ZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdClyZXR1cm4gdGhpczt2YXIgcj10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIHIucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZX0pfSxmdW5jdGlvbihlKXtyZXR1cm4gci5yZXNvbHZlKHQoKSkudGhlbihmdW5jdGlvbigpe3Rocm93IGV9KX0pfSxvLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsZSl9LG8ucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZ0aGlzLnN0YXRlPT09YXx8XCJmdW5jdGlvblwiIT10eXBlb2YgdCYmdGhpcy5zdGF0ZT09PXMpcmV0dXJuIHRoaXM7dmFyIHI9bmV3IHRoaXMuY29uc3RydWN0b3IodSk7dGhpcy5zdGF0ZSE9PW4/ZihyLHRoaXMuc3RhdGU9PT1hP2U6dCx0aGlzLm91dGNvbWUpOnRoaXMucXVldWUucHVzaChuZXcgaChyLGUsdCkpO3JldHVybiByfSxoLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkPWZ1bmN0aW9uKGUpe2wucmVzb2x2ZSh0aGlzLnByb21pc2UsZSl9LGgucHJvdG90eXBlLm90aGVyQ2FsbEZ1bGZpbGxlZD1mdW5jdGlvbihlKXtmKHRoaXMucHJvbWlzZSx0aGlzLm9uRnVsZmlsbGVkLGUpfSxoLnByb3RvdHlwZS5jYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24oZSl7bC5yZWplY3QodGhpcy5wcm9taXNlLGUpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZD1mdW5jdGlvbihlKXtmKHRoaXMucHJvbWlzZSx0aGlzLm9uUmVqZWN0ZWQsZSl9LGwucmVzb2x2ZT1mdW5jdGlvbihlLHQpe3ZhciByPXAoYyx0KTtpZihcImVycm9yXCI9PT1yLnN0YXR1cylyZXR1cm4gbC5yZWplY3QoZSxyLnZhbHVlKTt2YXIgbj1yLnZhbHVlO2lmKG4pZChlLG4pO2Vsc2V7ZS5zdGF0ZT1hLGUub3V0Y29tZT10O2Zvcih2YXIgaT0tMSxzPWUucXVldWUubGVuZ3RoOysraTxzOyllLnF1ZXVlW2ldLmNhbGxGdWxmaWxsZWQodCl9cmV0dXJuIGV9LGwucmVqZWN0PWZ1bmN0aW9uKGUsdCl7ZS5zdGF0ZT1zLGUub3V0Y29tZT10O2Zvcih2YXIgcj0tMSxuPWUucXVldWUubGVuZ3RoOysrcjxuOyllLnF1ZXVlW3JdLmNhbGxSZWplY3RlZCh0KTtyZXR1cm4gZX0sby5yZXNvbHZlPWZ1bmN0aW9uKGUpe2lmKGUgaW5zdGFuY2VvZiB0aGlzKXJldHVybiBlO3JldHVybiBsLnJlc29sdmUobmV3IHRoaXModSksZSl9LG8ucmVqZWN0PWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyB0aGlzKHUpO3JldHVybiBsLnJlamVjdCh0LGUpfSxvLmFsbD1mdW5jdGlvbihlKXt2YXIgcj10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciBuPWUubGVuZ3RoLGk9ITE7aWYoIW4pcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIHM9bmV3IEFycmF5KG4pLGE9MCx0PS0xLG89bmV3IHRoaXModSk7Zm9yKDsrK3Q8bjspaChlW3RdLHQpO3JldHVybiBvO2Z1bmN0aW9uIGgoZSx0KXtyLnJlc29sdmUoZSkudGhlbihmdW5jdGlvbihlKXtzW3RdPWUsKythIT09bnx8aXx8KGk9ITAsbC5yZXNvbHZlKG8scykpfSxmdW5jdGlvbihlKXtpfHwoaT0hMCxsLnJlamVjdChvLGUpKX0pfX0sby5yYWNlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aWYoXCJbb2JqZWN0IEFycmF5XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKXJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKFwibXVzdCBiZSBhbiBhcnJheVwiKSk7dmFyIHI9ZS5sZW5ndGgsbj0hMTtpZighcilyZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTt2YXIgaT0tMSxzPW5ldyB0aGlzKHUpO2Zvcig7KytpPHI7KWE9ZVtpXSx0LnJlc29sdmUoYSkudGhlbihmdW5jdGlvbihlKXtufHwobj0hMCxsLnJlc29sdmUocyxlKSl9LGZ1bmN0aW9uKGUpe258fChuPSEwLGwucmVqZWN0KHMsZSkpfSk7dmFyIGE7cmV0dXJuIHN9fSx7aW1tZWRpYXRlOjM2fV0sMzg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17fTsoMCxlKFwiLi9saWIvdXRpbHMvY29tbW9uXCIpLmFzc2lnbikobixlKFwiLi9saWIvZGVmbGF0ZVwiKSxlKFwiLi9saWIvaW5mbGF0ZVwiKSxlKFwiLi9saWIvemxpYi9jb25zdGFudHNcIikpLHQuZXhwb3J0cz1ufSx7XCIuL2xpYi9kZWZsYXRlXCI6MzksXCIuL2xpYi9pbmZsYXRlXCI6NDAsXCIuL2xpYi91dGlscy9jb21tb25cIjo0MSxcIi4vbGliL3psaWIvY29uc3RhbnRzXCI6NDR9XSwzOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBhPWUoXCIuL3psaWIvZGVmbGF0ZVwiKSxvPWUoXCIuL3V0aWxzL2NvbW1vblwiKSxoPWUoXCIuL3V0aWxzL3N0cmluZ3NcIiksaT1lKFwiLi96bGliL21lc3NhZ2VzXCIpLHM9ZShcIi4vemxpYi96c3RyZWFtXCIpLHU9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxsPTAsZj0tMSxjPTAsZD04O2Z1bmN0aW9uIHAoZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgcCkpcmV0dXJuIG5ldyBwKGUpO3RoaXMub3B0aW9ucz1vLmFzc2lnbih7bGV2ZWw6ZixtZXRob2Q6ZCxjaHVua1NpemU6MTYzODQsd2luZG93Qml0czoxNSxtZW1MZXZlbDo4LHN0cmF0ZWd5OmMsdG86XCJcIn0sZXx8e30pO3ZhciB0PXRoaXMub3B0aW9uczt0LnJhdyYmMDx0LndpbmRvd0JpdHM/dC53aW5kb3dCaXRzPS10LndpbmRvd0JpdHM6dC5nemlwJiYwPHQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDE2JiYodC53aW5kb3dCaXRzKz0xNiksdGhpcy5lcnI9MCx0aGlzLm1zZz1cIlwiLHRoaXMuZW5kZWQ9ITEsdGhpcy5jaHVua3M9W10sdGhpcy5zdHJtPW5ldyBzLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1hLmRlZmxhdGVJbml0Mih0aGlzLnN0cm0sdC5sZXZlbCx0Lm1ldGhvZCx0LndpbmRvd0JpdHMsdC5tZW1MZXZlbCx0LnN0cmF0ZWd5KTtpZihyIT09bCl0aHJvdyBuZXcgRXJyb3IoaVtyXSk7aWYodC5oZWFkZXImJmEuZGVmbGF0ZVNldEhlYWRlcih0aGlzLnN0cm0sdC5oZWFkZXIpLHQuZGljdGlvbmFyeSl7dmFyIG47aWYobj1cInN0cmluZ1wiPT10eXBlb2YgdC5kaWN0aW9uYXJ5P2guc3RyaW5nMmJ1Zih0LmRpY3Rpb25hcnkpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PXUuY2FsbCh0LmRpY3Rpb25hcnkpP25ldyBVaW50OEFycmF5KHQuZGljdGlvbmFyeSk6dC5kaWN0aW9uYXJ5LChyPWEuZGVmbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLG4pKSE9PWwpdGhyb3cgbmV3IEVycm9yKGlbcl0pO3RoaXMuX2RpY3Rfc2V0PSEwfX1mdW5jdGlvbiBuKGUsdCl7dmFyIHI9bmV3IHAodCk7aWYoci5wdXNoKGUsITApLHIuZXJyKXRocm93IHIubXNnfHxpW3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9cC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlLHQpe3ZhciByLG4saT10aGlzLnN0cm0scz10aGlzLm9wdGlvbnMuY2h1bmtTaXplO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7bj10PT09fn50P3Q6ITA9PT10PzQ6MCxcInN0cmluZ1wiPT10eXBlb2YgZT9pLmlucHV0PWguc3RyaW5nMmJ1ZihlKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwoZSk/aS5pbnB1dD1uZXcgVWludDhBcnJheShlKTppLmlucHV0PWUsaS5uZXh0X2luPTAsaS5hdmFpbF9pbj1pLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09aS5hdmFpbF9vdXQmJihpLm91dHB1dD1uZXcgby5CdWY4KHMpLGkubmV4dF9vdXQ9MCxpLmF2YWlsX291dD1zKSwxIT09KHI9YS5kZWZsYXRlKGksbikpJiZyIT09bClyZXR1cm4gdGhpcy5vbkVuZChyKSwhKHRoaXMuZW5kZWQ9ITApOzAhPT1pLmF2YWlsX291dCYmKDAhPT1pLmF2YWlsX2lufHw0IT09biYmMiE9PW4pfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz90aGlzLm9uRGF0YShoLmJ1ZjJiaW5zdHJpbmcoby5zaHJpbmtCdWYoaS5vdXRwdXQsaS5uZXh0X291dCkpKTp0aGlzLm9uRGF0YShvLnNocmlua0J1ZihpLm91dHB1dCxpLm5leHRfb3V0KSkpfXdoaWxlKCgwPGkuYXZhaWxfaW58fDA9PT1pLmF2YWlsX291dCkmJjEhPT1yKTtyZXR1cm4gND09PW4/KHI9YS5kZWZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1sKToyIT09bnx8KHRoaXMub25FbmQobCksIShpLmF2YWlsX291dD0wKSl9LHAucHJvdG90eXBlLm9uRGF0YT1mdW5jdGlvbihlKXt0aGlzLmNodW5rcy5wdXNoKGUpfSxwLnByb3RvdHlwZS5vbkVuZD1mdW5jdGlvbihlKXtlPT09bCYmKFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbihcIlwiKTp0aGlzLnJlc3VsdD1vLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj1lLHRoaXMubXNnPXRoaXMuc3RybS5tc2d9LHIuRGVmbGF0ZT1wLHIuZGVmbGF0ZT1uLHIuZGVmbGF0ZVJhdz1mdW5jdGlvbihlLHQpe3JldHVybih0PXR8fHt9KS5yYXc9ITAsbihlLHQpfSxyLmd6aXA9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkuZ3ppcD0hMCxuKGUsdCl9fSx7XCIuL3V0aWxzL2NvbW1vblwiOjQxLFwiLi91dGlscy9zdHJpbmdzXCI6NDIsXCIuL3psaWIvZGVmbGF0ZVwiOjQ2LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDA6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYz1lKFwiLi96bGliL2luZmxhdGVcIiksZD1lKFwiLi91dGlscy9jb21tb25cIikscD1lKFwiLi91dGlscy9zdHJpbmdzXCIpLG09ZShcIi4vemxpYi9jb25zdGFudHNcIiksbj1lKFwiLi96bGliL21lc3NhZ2VzXCIpLGk9ZShcIi4vemxpYi96c3RyZWFtXCIpLHM9ZShcIi4vemxpYi9nemhlYWRlclwiKSxfPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7ZnVuY3Rpb24gYShlKXtpZighKHRoaXMgaW5zdGFuY2VvZiBhKSlyZXR1cm4gbmV3IGEoZSk7dGhpcy5vcHRpb25zPWQuYXNzaWduKHtjaHVua1NpemU6MTYzODQsd2luZG93Qml0czowLHRvOlwiXCJ9LGV8fHt9KTt2YXIgdD10aGlzLm9wdGlvbnM7dC5yYXcmJjA8PXQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDE2JiYodC53aW5kb3dCaXRzPS10LndpbmRvd0JpdHMsMD09PXQud2luZG93Qml0cyYmKHQud2luZG93Qml0cz0tMTUpKSwhKDA8PXQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDE2KXx8ZSYmZS53aW5kb3dCaXRzfHwodC53aW5kb3dCaXRzKz0zMiksMTU8dC53aW5kb3dCaXRzJiZ0LndpbmRvd0JpdHM8NDgmJjA9PSgxNSZ0LndpbmRvd0JpdHMpJiYodC53aW5kb3dCaXRzfD0xNSksdGhpcy5lcnI9MCx0aGlzLm1zZz1cIlwiLHRoaXMuZW5kZWQ9ITEsdGhpcy5jaHVua3M9W10sdGhpcy5zdHJtPW5ldyBpLHRoaXMuc3RybS5hdmFpbF9vdXQ9MDt2YXIgcj1jLmluZmxhdGVJbml0Mih0aGlzLnN0cm0sdC53aW5kb3dCaXRzKTtpZihyIT09bS5aX09LKXRocm93IG5ldyBFcnJvcihuW3JdKTt0aGlzLmhlYWRlcj1uZXcgcyxjLmluZmxhdGVHZXRIZWFkZXIodGhpcy5zdHJtLHRoaXMuaGVhZGVyKX1mdW5jdGlvbiBvKGUsdCl7dmFyIHI9bmV3IGEodCk7aWYoci5wdXNoKGUsITApLHIuZXJyKXRocm93IHIubXNnfHxuW3IuZXJyXTtyZXR1cm4gci5yZXN1bHR9YS5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoPXRoaXMuc3RybSx1PXRoaXMub3B0aW9ucy5jaHVua1NpemUsbD10aGlzLm9wdGlvbnMuZGljdGlvbmFyeSxmPSExO2lmKHRoaXMuZW5kZWQpcmV0dXJuITE7bj10PT09fn50P3Q6ITA9PT10P20uWl9GSU5JU0g6bS5aX05PX0ZMVVNILFwic3RyaW5nXCI9PXR5cGVvZiBlP2guaW5wdXQ9cC5iaW5zdHJpbmcyYnVmKGUpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PV8uY2FsbChlKT9oLmlucHV0PW5ldyBVaW50OEFycmF5KGUpOmguaW5wdXQ9ZSxoLm5leHRfaW49MCxoLmF2YWlsX2luPWguaW5wdXQubGVuZ3RoO2Rve2lmKDA9PT1oLmF2YWlsX291dCYmKGgub3V0cHV0PW5ldyBkLkJ1ZjgodSksaC5uZXh0X291dD0wLGguYXZhaWxfb3V0PXUpLChyPWMuaW5mbGF0ZShoLG0uWl9OT19GTFVTSCkpPT09bS5aX05FRURfRElDVCYmbCYmKG89XCJzdHJpbmdcIj09dHlwZW9mIGw/cC5zdHJpbmcyYnVmKGwpOlwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIj09PV8uY2FsbChsKT9uZXcgVWludDhBcnJheShsKTpsLHI9Yy5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sbykpLHI9PT1tLlpfQlVGX0VSUk9SJiYhMD09PWYmJihyPW0uWl9PSyxmPSExKSxyIT09bS5aX1NUUkVBTV9FTkQmJnIhPT1tLlpfT0spcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTtoLm5leHRfb3V0JiYoMCE9PWguYXZhaWxfb3V0JiZyIT09bS5aX1NUUkVBTV9FTkQmJigwIT09aC5hdmFpbF9pbnx8biE9PW0uWl9GSU5JU0gmJm4hPT1tLlpfU1lOQ19GTFVTSCl8fChcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvPyhpPXAudXRmOGJvcmRlcihoLm91dHB1dCxoLm5leHRfb3V0KSxzPWgubmV4dF9vdXQtaSxhPXAuYnVmMnN0cmluZyhoLm91dHB1dCxpKSxoLm5leHRfb3V0PXMsaC5hdmFpbF9vdXQ9dS1zLHMmJmQuYXJyYXlTZXQoaC5vdXRwdXQsaC5vdXRwdXQsaSxzLDApLHRoaXMub25EYXRhKGEpKTp0aGlzLm9uRGF0YShkLnNocmlua0J1ZihoLm91dHB1dCxoLm5leHRfb3V0KSkpKSwwPT09aC5hdmFpbF9pbiYmMD09PWguYXZhaWxfb3V0JiYoZj0hMCl9d2hpbGUoKDA8aC5hdmFpbF9pbnx8MD09PWguYXZhaWxfb3V0KSYmciE9PW0uWl9TVFJFQU1fRU5EKTtyZXR1cm4gcj09PW0uWl9TVFJFQU1fRU5EJiYobj1tLlpfRklOSVNIKSxuPT09bS5aX0ZJTklTSD8ocj1jLmluZmxhdGVFbmQodGhpcy5zdHJtKSx0aGlzLm9uRW5kKHIpLHRoaXMuZW5kZWQ9ITAscj09PW0uWl9PSyk6biE9PW0uWl9TWU5DX0ZMVVNIfHwodGhpcy5vbkVuZChtLlpfT0spLCEoaC5hdmFpbF9vdXQ9MCkpfSxhLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaHVua3MucHVzaChlKX0sYS5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24oZSl7ZT09PW0uWl9PSyYmKFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5yZXN1bHQ9dGhpcy5jaHVua3Muam9pbihcIlwiKTp0aGlzLnJlc3VsdD1kLmZsYXR0ZW5DaHVua3ModGhpcy5jaHVua3MpKSx0aGlzLmNodW5rcz1bXSx0aGlzLmVycj1lLHRoaXMubXNnPXRoaXMuc3RybS5tc2d9LHIuSW5mbGF0ZT1hLHIuaW5mbGF0ZT1vLHIuaW5mbGF0ZVJhdz1mdW5jdGlvbihlLHQpe3JldHVybih0PXR8fHt9KS5yYXc9ITAsbyhlLHQpfSxyLnVuZ3ppcD1vfSx7XCIuL3V0aWxzL2NvbW1vblwiOjQxLFwiLi91dGlscy9zdHJpbmdzXCI6NDIsXCIuL3psaWIvY29uc3RhbnRzXCI6NDQsXCIuL3psaWIvZ3poZWFkZXJcIjo0NyxcIi4vemxpYi9pbmZsYXRlXCI6NDksXCIuL3psaWIvbWVzc2FnZXNcIjo1MSxcIi4vemxpYi96c3RyZWFtXCI6NTN9XSw0MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDE2QXJyYXkmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBJbnQzMkFycmF5O3IuYXNzaWduPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7dC5sZW5ndGg7KXt2YXIgcj10LnNoaWZ0KCk7aWYocil7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcihyK1wibXVzdCBiZSBub24tb2JqZWN0XCIpO2Zvcih2YXIgbiBpbiByKXIuaGFzT3duUHJvcGVydHkobikmJihlW25dPXJbbl0pfX1yZXR1cm4gZX0sci5zaHJpbmtCdWY9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5sZW5ndGg9PT10P2U6ZS5zdWJhcnJheT9lLnN1YmFycmF5KDAsdCk6KGUubGVuZ3RoPXQsZSl9O3ZhciBpPXthcnJheVNldDpmdW5jdGlvbihlLHQscixuLGkpe2lmKHQuc3ViYXJyYXkmJmUuc3ViYXJyYXkpZS5zZXQodC5zdWJhcnJheShyLHIrbiksaSk7ZWxzZSBmb3IodmFyIHM9MDtzPG47cysrKWVbaStzXT10W3Irc119LGZsYXR0ZW5DaHVua3M6ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhO2Zvcih0PW49MCxyPWUubGVuZ3RoO3Q8cjt0Kyspbis9ZVt0XS5sZW5ndGg7Zm9yKGE9bmV3IFVpbnQ4QXJyYXkobiksdD1pPTAscj1lLmxlbmd0aDt0PHI7dCsrKXM9ZVt0XSxhLnNldChzLGkpLGkrPXMubGVuZ3RoO3JldHVybiBhfX0scz17YXJyYXlTZXQ6ZnVuY3Rpb24oZSx0LHIsbixpKXtmb3IodmFyIHM9MDtzPG47cysrKWVbaStzXT10W3Irc119LGZsYXR0ZW5DaHVua3M6ZnVuY3Rpb24oZSl7cmV0dXJuW10uY29uY2F0LmFwcGx5KFtdLGUpfX07ci5zZXRUeXBlZD1mdW5jdGlvbihlKXtlPyhyLkJ1Zjg9VWludDhBcnJheSxyLkJ1ZjE2PVVpbnQxNkFycmF5LHIuQnVmMzI9SW50MzJBcnJheSxyLmFzc2lnbihyLGkpKTooci5CdWY4PUFycmF5LHIuQnVmMTY9QXJyYXksci5CdWYzMj1BcnJheSxyLmFzc2lnbihyLHMpKX0sci5zZXRUeXBlZChuKX0se31dLDQyOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGg9ZShcIi4vY29tbW9uXCIpLGk9ITAscz0hMDt0cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLFswXSl9Y2F0Y2goZSl7aT0hMX10cnl7U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG5ldyBVaW50OEFycmF5KDEpKX1jYXRjaChlKXtzPSExfWZvcih2YXIgdT1uZXcgaC5CdWY4KDI1Niksbj0wO248MjU2O24rKyl1W25dPTI1Mjw9bj82OjI0ODw9bj81OjI0MDw9bj80OjIyNDw9bj8zOjE5Mjw9bj8yOjE7ZnVuY3Rpb24gbChlLHQpe2lmKHQ8NjU1MzcmJihlLnN1YmFycmF5JiZzfHwhZS5zdWJhcnJheSYmaSkpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxoLnNocmlua0J1ZihlLHQpKTtmb3IodmFyIHI9XCJcIixuPTA7bjx0O24rKylyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGVbbl0pO3JldHVybiByfXVbMjU0XT11WzI1NF09MSxyLnN0cmluZzJidWY9ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhPWUubGVuZ3RoLG89MDtmb3IoaT0wO2k8YTtpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxvKz1yPDEyOD8xOnI8MjA0OD8yOnI8NjU1MzY/Mzo0O2Zvcih0PW5ldyBoLkJ1ZjgobyksaT1zPTA7czxvO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLHI8MTI4P3RbcysrXT1yOihyPDIwNDg/dFtzKytdPTE5MnxyPj4+Njoocjw2NTUzNj90W3MrK109MjI0fHI+Pj4xMjoodFtzKytdPTI0MHxyPj4+MTgsdFtzKytdPTEyOHxyPj4+MTImNjMpLHRbcysrXT0xMjh8cj4+PjYmNjMpLHRbcysrXT0xMjh8NjMmcik7cmV0dXJuIHR9LHIuYnVmMmJpbnN0cmluZz1mdW5jdGlvbihlKXtyZXR1cm4gbChlLGUubGVuZ3RoKX0sci5iaW5zdHJpbmcyYnVmPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1uZXcgaC5CdWY4KGUubGVuZ3RoKSxyPTAsbj10Lmxlbmd0aDtyPG47cisrKXRbcl09ZS5jaGFyQ29kZUF0KHIpO3JldHVybiB0fSxyLmJ1ZjJzdHJpbmc9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhPXR8fGUubGVuZ3RoLG89bmV3IEFycmF5KDIqYSk7Zm9yKHI9bj0wO3I8YTspaWYoKGk9ZVtyKytdKTwxMjgpb1tuKytdPWk7ZWxzZSBpZig0PChzPXVbaV0pKW9bbisrXT02NTUzMyxyKz1zLTE7ZWxzZXtmb3IoaSY9Mj09PXM/MzE6Mz09PXM/MTU6NzsxPHMmJnI8YTspaT1pPDw2fDYzJmVbcisrXSxzLS07MTxzP29bbisrXT02NTUzMzppPDY1NTM2P29bbisrXT1pOihpLT02NTUzNixvW24rK109NTUyOTZ8aT4+MTAmMTAyMyxvW24rK109NTYzMjB8MTAyMyZpKX1yZXR1cm4gbChvLG4pfSxyLnV0Zjhib3JkZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IoKHQ9dHx8ZS5sZW5ndGgpPmUubGVuZ3RoJiYodD1lLmxlbmd0aCkscj10LTE7MDw9ciYmMTI4PT0oMTkyJmVbcl0pOylyLS07cmV0dXJuIHI8MD90OjA9PT1yP3Q6cit1W2Vbcl1dPnQ/cjp0fX0se1wiLi9jb21tb25cIjo0MX1dLDQzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4pe2Zvcih2YXIgaT02NTUzNSZlfDAscz1lPj4+MTYmNjU1MzV8MCxhPTA7MCE9PXI7KXtmb3Ioci09YT0yZTM8cj8yZTM6cjtzPXMrKGk9aSt0W24rK118MCl8MCwtLWE7KTtpJT02NTUyMSxzJT02NTUyMX1yZXR1cm4gaXxzPDwxNnwwfX0se31dLDQ0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPXtaX05PX0ZMVVNIOjAsWl9QQVJUSUFMX0ZMVVNIOjEsWl9TWU5DX0ZMVVNIOjIsWl9GVUxMX0ZMVVNIOjMsWl9GSU5JU0g6NCxaX0JMT0NLOjUsWl9UUkVFUzo2LFpfT0s6MCxaX1NUUkVBTV9FTkQ6MSxaX05FRURfRElDVDoyLFpfRVJSTk86LTEsWl9TVFJFQU1fRVJST1I6LTIsWl9EQVRBX0VSUk9SOi0zLFpfQlVGX0VSUk9SOi01LFpfTk9fQ09NUFJFU1NJT046MCxaX0JFU1RfU1BFRUQ6MSxaX0JFU1RfQ09NUFJFU1NJT046OSxaX0RFRkFVTFRfQ09NUFJFU1NJT046LTEsWl9GSUxURVJFRDoxLFpfSFVGRk1BTl9PTkxZOjIsWl9STEU6MyxaX0ZJWEVEOjQsWl9ERUZBVUxUX1NUUkFURUdZOjAsWl9CSU5BUlk6MCxaX1RFWFQ6MSxaX1VOS05PV046MixaX0RFRkxBVEVEOjh9fSx7fV0sNDU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1mdW5jdGlvbigpe2Zvcih2YXIgZSx0PVtdLHI9MDtyPDI1NjtyKyspe2U9cjtmb3IodmFyIG49MDtuPDg7bisrKWU9MSZlPzM5ODgyOTIzODReZT4+PjE6ZT4+PjE7dFtyXT1lfXJldHVybiB0fSgpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXt2YXIgaT1vLHM9bityO2VePS0xO2Zvcih2YXIgYT1uO2E8czthKyspZT1lPj4+OF5pWzI1NSYoZV50W2FdKV07cmV0dXJuLTFeZX19LHt9XSw0NjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBoLGM9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSx1PWUoXCIuL3RyZWVzXCIpLGQ9ZShcIi4vYWRsZXIzMlwiKSxwPWUoXCIuL2NyYzMyXCIpLG49ZShcIi4vbWVzc2FnZXNcIiksbD0wLGY9NCxtPTAsXz0tMixnPS0xLGI9NCxpPTIsdj04LHk9OSxzPTI4NixhPTMwLG89MTksdz0yKnMrMSxrPTE1LHg9MyxTPTI1OCx6PVMreCsxLEM9NDIsRT0xMTMsQT0xLEk9MixPPTMsQj00O2Z1bmN0aW9uIFIoZSx0KXtyZXR1cm4gZS5tc2c9blt0XSx0fWZ1bmN0aW9uIFQoZSl7cmV0dXJuKGU8PDEpLSg0PGU/OTowKX1mdW5jdGlvbiBEKGUpe2Zvcih2YXIgdD1lLmxlbmd0aDswPD0tLXQ7KWVbdF09MH1mdW5jdGlvbiBGKGUpe3ZhciB0PWUuc3RhdGUscj10LnBlbmRpbmc7cj5lLmF2YWlsX291dCYmKHI9ZS5hdmFpbF9vdXQpLDAhPT1yJiYoYy5hcnJheVNldChlLm91dHB1dCx0LnBlbmRpbmdfYnVmLHQucGVuZGluZ19vdXQscixlLm5leHRfb3V0KSxlLm5leHRfb3V0Kz1yLHQucGVuZGluZ19vdXQrPXIsZS50b3RhbF9vdXQrPXIsZS5hdmFpbF9vdXQtPXIsdC5wZW5kaW5nLT1yLDA9PT10LnBlbmRpbmcmJih0LnBlbmRpbmdfb3V0PTApKX1mdW5jdGlvbiBOKGUsdCl7dS5fdHJfZmx1c2hfYmxvY2soZSwwPD1lLmJsb2NrX3N0YXJ0P2UuYmxvY2tfc3RhcnQ6LTEsZS5zdHJzdGFydC1lLmJsb2NrX3N0YXJ0LHQpLGUuYmxvY2tfc3RhcnQ9ZS5zdHJzdGFydCxGKGUuc3RybSl9ZnVuY3Rpb24gVShlLHQpe2UucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPXR9ZnVuY3Rpb24gUChlLHQpe2UucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPXQ+Pj44JjI1NSxlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT0yNTUmdH1mdW5jdGlvbiBMKGUsdCl7dmFyIHIsbixpPWUubWF4X2NoYWluX2xlbmd0aCxzPWUuc3Ryc3RhcnQsYT1lLnByZXZfbGVuZ3RoLG89ZS5uaWNlX21hdGNoLGg9ZS5zdHJzdGFydD5lLndfc2l6ZS16P2Uuc3Ryc3RhcnQtKGUud19zaXplLXopOjAsdT1lLndpbmRvdyxsPWUud19tYXNrLGY9ZS5wcmV2LGM9ZS5zdHJzdGFydCtTLGQ9dVtzK2EtMV0scD11W3MrYV07ZS5wcmV2X2xlbmd0aD49ZS5nb29kX21hdGNoJiYoaT4+PTIpLG8+ZS5sb29rYWhlYWQmJihvPWUubG9va2FoZWFkKTtkb3tpZih1WyhyPXQpK2FdPT09cCYmdVtyK2EtMV09PT1kJiZ1W3JdPT09dVtzXSYmdVsrK3JdPT09dVtzKzFdKXtzKz0yLHIrKztkb3t9d2hpbGUodVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnM8Yyk7aWYobj1TLShjLXMpLHM9Yy1TLGE8bil7aWYoZS5tYXRjaF9zdGFydD10LG88PShhPW4pKWJyZWFrO2Q9dVtzK2EtMV0scD11W3MrYV19fX13aGlsZSgodD1mW3QmbF0pPmgmJjAhPS0taSk7cmV0dXJuIGE8PWUubG9va2FoZWFkP2E6ZS5sb29rYWhlYWR9ZnVuY3Rpb24gaihlKXt2YXIgdCxyLG4saSxzLGEsbyxoLHUsbCxmPWUud19zaXplO2Rve2lmKGk9ZS53aW5kb3dfc2l6ZS1lLmxvb2thaGVhZC1lLnN0cnN0YXJ0LGUuc3Ryc3RhcnQ+PWYrKGYteikpe2ZvcihjLmFycmF5U2V0KGUud2luZG93LGUud2luZG93LGYsZiwwKSxlLm1hdGNoX3N0YXJ0LT1mLGUuc3Ryc3RhcnQtPWYsZS5ibG9ja19zdGFydC09Zix0PXI9ZS5oYXNoX3NpemU7bj1lLmhlYWRbLS10XSxlLmhlYWRbdF09Zjw9bj9uLWY6MCwtLXI7KTtmb3IodD1yPWY7bj1lLnByZXZbLS10XSxlLnByZXZbdF09Zjw9bj9uLWY6MCwtLXI7KTtpKz1mfWlmKDA9PT1lLnN0cm0uYXZhaWxfaW4pYnJlYWs7aWYoYT1lLnN0cm0sbz1lLndpbmRvdyxoPWUuc3Ryc3RhcnQrZS5sb29rYWhlYWQsdT1pLGw9dm9pZCAwLGw9YS5hdmFpbF9pbix1PGwmJihsPXUpLHI9MD09PWw/MDooYS5hdmFpbF9pbi09bCxjLmFycmF5U2V0KG8sYS5pbnB1dCxhLm5leHRfaW4sbCxoKSwxPT09YS5zdGF0ZS53cmFwP2EuYWRsZXI9ZChhLmFkbGVyLG8sbCxoKToyPT09YS5zdGF0ZS53cmFwJiYoYS5hZGxlcj1wKGEuYWRsZXIsbyxsLGgpKSxhLm5leHRfaW4rPWwsYS50b3RhbF9pbis9bCxsKSxlLmxvb2thaGVhZCs9cixlLmxvb2thaGVhZCtlLmluc2VydD49eClmb3Iocz1lLnN0cnN0YXJ0LWUuaW5zZXJ0LGUuaW5zX2g9ZS53aW5kb3dbc10sZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W3MrMV0pJmUuaGFzaF9tYXNrO2UuaW5zZXJ0JiYoZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W3MreC0xXSkmZS5oYXNoX21hc2ssZS5wcmV2W3MmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09cyxzKyssZS5pbnNlcnQtLSwhKGUubG9va2FoZWFkK2UuaW5zZXJ0PHgpKTspO313aGlsZShlLmxvb2thaGVhZDx6JiYwIT09ZS5zdHJtLmF2YWlsX2luKX1mdW5jdGlvbiBaKGUsdCl7Zm9yKHZhciByLG47Oyl7aWYoZS5sb29rYWhlYWQ8eil7aWYoaihlKSxlLmxvb2thaGVhZDx6JiZ0PT09bClyZXR1cm4gQTtpZigwPT09ZS5sb29rYWhlYWQpYnJlYWt9aWYocj0wLGUubG9va2FoZWFkPj14JiYoZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0KSwwIT09ciYmZS5zdHJzdGFydC1yPD1lLndfc2l6ZS16JiYoZS5tYXRjaF9sZW5ndGg9TChlLHIpKSxlLm1hdGNoX2xlbmd0aD49eClpZihuPXUuX3RyX3RhbGx5KGUsZS5zdHJzdGFydC1lLm1hdGNoX3N0YXJ0LGUubWF0Y2hfbGVuZ3RoLXgpLGUubG9va2FoZWFkLT1lLm1hdGNoX2xlbmd0aCxlLm1hdGNoX2xlbmd0aDw9ZS5tYXhfbGF6eV9tYXRjaCYmZS5sb29rYWhlYWQ+PXgpe2ZvcihlLm1hdGNoX2xlbmd0aC0tO2Uuc3Ryc3RhcnQrKyxlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQsMCE9LS1lLm1hdGNoX2xlbmd0aDspO2Uuc3Ryc3RhcnQrK31lbHNlIGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTAsZS5pbnNfaD1lLndpbmRvd1tlLnN0cnN0YXJ0XSxlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCsxXSkmZS5oYXNoX21hc2s7ZWxzZSBuPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0Kys7aWYobiYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD1lLnN0cnN0YXJ0PHgtMT9lLnN0cnN0YXJ0OngtMSx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9ZnVuY3Rpb24gVyhlLHQpe2Zvcih2YXIgcixuLGk7Oyl7aWYoZS5sb29rYWhlYWQ8eil7aWYoaihlKSxlLmxvb2thaGVhZDx6JiZ0PT09bClyZXR1cm4gQTtpZigwPT09ZS5sb29rYWhlYWQpYnJlYWt9aWYocj0wLGUubG9va2FoZWFkPj14JiYoZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0KSxlLnByZXZfbGVuZ3RoPWUubWF0Y2hfbGVuZ3RoLGUucHJldl9tYXRjaD1lLm1hdGNoX3N0YXJ0LGUubWF0Y2hfbGVuZ3RoPXgtMSwwIT09ciYmZS5wcmV2X2xlbmd0aDxlLm1heF9sYXp5X21hdGNoJiZlLnN0cnN0YXJ0LXI8PWUud19zaXplLXomJihlLm1hdGNoX2xlbmd0aD1MKGUsciksZS5tYXRjaF9sZW5ndGg8PTUmJigxPT09ZS5zdHJhdGVneXx8ZS5tYXRjaF9sZW5ndGg9PT14JiY0MDk2PGUuc3Ryc3RhcnQtZS5tYXRjaF9zdGFydCkmJihlLm1hdGNoX2xlbmd0aD14LTEpKSxlLnByZXZfbGVuZ3RoPj14JiZlLm1hdGNoX2xlbmd0aDw9ZS5wcmV2X2xlbmd0aCl7Zm9yKGk9ZS5zdHJzdGFydCtlLmxvb2thaGVhZC14LG49dS5fdHJfdGFsbHkoZSxlLnN0cnN0YXJ0LTEtZS5wcmV2X21hdGNoLGUucHJldl9sZW5ndGgteCksZS5sb29rYWhlYWQtPWUucHJldl9sZW5ndGgtMSxlLnByZXZfbGVuZ3RoLT0yOysrZS5zdHJzdGFydDw9aSYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksMCE9LS1lLnByZXZfbGVuZ3RoOyk7aWYoZS5tYXRjaF9hdmFpbGFibGU9MCxlLm1hdGNoX2xlbmd0aD14LTEsZS5zdHJzdGFydCsrLG4mJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1lbHNlIGlmKGUubWF0Y2hfYXZhaWxhYmxlKXtpZigobj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydC0xXSkpJiZOKGUsITEpLGUuc3Ryc3RhcnQrKyxlLmxvb2thaGVhZC0tLDA9PT1lLnN0cm0uYXZhaWxfb3V0KXJldHVybiBBfWVsc2UgZS5tYXRjaF9hdmFpbGFibGU9MSxlLnN0cnN0YXJ0KyssZS5sb29rYWhlYWQtLX1yZXR1cm4gZS5tYXRjaF9hdmFpbGFibGUmJihuPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0LTFdKSxlLm1hdGNoX2F2YWlsYWJsZT0wKSxlLmluc2VydD1lLnN0cnN0YXJ0PHgtMT9lLnN0cnN0YXJ0OngtMSx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9ZnVuY3Rpb24gTShlLHQscixuLGkpe3RoaXMuZ29vZF9sZW5ndGg9ZSx0aGlzLm1heF9sYXp5PXQsdGhpcy5uaWNlX2xlbmd0aD1yLHRoaXMubWF4X2NoYWluPW4sdGhpcy5mdW5jPWl9ZnVuY3Rpb24gSCgpe3RoaXMuc3RybT1udWxsLHRoaXMuc3RhdHVzPTAsdGhpcy5wZW5kaW5nX2J1Zj1udWxsLHRoaXMucGVuZGluZ19idWZfc2l6ZT0wLHRoaXMucGVuZGluZ19vdXQ9MCx0aGlzLnBlbmRpbmc9MCx0aGlzLndyYXA9MCx0aGlzLmd6aGVhZD1udWxsLHRoaXMuZ3ppbmRleD0wLHRoaXMubWV0aG9kPXYsdGhpcy5sYXN0X2ZsdXNoPS0xLHRoaXMud19zaXplPTAsdGhpcy53X2JpdHM9MCx0aGlzLndfbWFzaz0wLHRoaXMud2luZG93PW51bGwsdGhpcy53aW5kb3dfc2l6ZT0wLHRoaXMucHJldj1udWxsLHRoaXMuaGVhZD1udWxsLHRoaXMuaW5zX2g9MCx0aGlzLmhhc2hfc2l6ZT0wLHRoaXMuaGFzaF9iaXRzPTAsdGhpcy5oYXNoX21hc2s9MCx0aGlzLmhhc2hfc2hpZnQ9MCx0aGlzLmJsb2NrX3N0YXJ0PTAsdGhpcy5tYXRjaF9sZW5ndGg9MCx0aGlzLnByZXZfbWF0Y2g9MCx0aGlzLm1hdGNoX2F2YWlsYWJsZT0wLHRoaXMuc3Ryc3RhcnQ9MCx0aGlzLm1hdGNoX3N0YXJ0PTAsdGhpcy5sb29rYWhlYWQ9MCx0aGlzLnByZXZfbGVuZ3RoPTAsdGhpcy5tYXhfY2hhaW5fbGVuZ3RoPTAsdGhpcy5tYXhfbGF6eV9tYXRjaD0wLHRoaXMubGV2ZWw9MCx0aGlzLnN0cmF0ZWd5PTAsdGhpcy5nb29kX21hdGNoPTAsdGhpcy5uaWNlX21hdGNoPTAsdGhpcy5keW5fbHRyZWU9bmV3IGMuQnVmMTYoMip3KSx0aGlzLmR5bl9kdHJlZT1uZXcgYy5CdWYxNigyKigyKmErMSkpLHRoaXMuYmxfdHJlZT1uZXcgYy5CdWYxNigyKigyKm8rMSkpLEQodGhpcy5keW5fbHRyZWUpLEQodGhpcy5keW5fZHRyZWUpLEQodGhpcy5ibF90cmVlKSx0aGlzLmxfZGVzYz1udWxsLHRoaXMuZF9kZXNjPW51bGwsdGhpcy5ibF9kZXNjPW51bGwsdGhpcy5ibF9jb3VudD1uZXcgYy5CdWYxNihrKzEpLHRoaXMuaGVhcD1uZXcgYy5CdWYxNigyKnMrMSksRCh0aGlzLmhlYXApLHRoaXMuaGVhcF9sZW49MCx0aGlzLmhlYXBfbWF4PTAsdGhpcy5kZXB0aD1uZXcgYy5CdWYxNigyKnMrMSksRCh0aGlzLmRlcHRoKSx0aGlzLmxfYnVmPTAsdGhpcy5saXRfYnVmc2l6ZT0wLHRoaXMubGFzdF9saXQ9MCx0aGlzLmRfYnVmPTAsdGhpcy5vcHRfbGVuPTAsdGhpcy5zdGF0aWNfbGVuPTAsdGhpcy5tYXRjaGVzPTAsdGhpcy5pbnNlcnQ9MCx0aGlzLmJpX2J1Zj0wLHRoaXMuYmlfdmFsaWQ9MH1mdW5jdGlvbiBHKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPyhlLnRvdGFsX2luPWUudG90YWxfb3V0PTAsZS5kYXRhX3R5cGU9aSwodD1lLnN0YXRlKS5wZW5kaW5nPTAsdC5wZW5kaW5nX291dD0wLHQud3JhcDwwJiYodC53cmFwPS10LndyYXApLHQuc3RhdHVzPXQud3JhcD9DOkUsZS5hZGxlcj0yPT09dC53cmFwPzA6MSx0Lmxhc3RfZmx1c2g9bCx1Ll90cl9pbml0KHQpLG0pOlIoZSxfKX1mdW5jdGlvbiBLKGUpe3ZhciB0PUcoZSk7cmV0dXJuIHQ9PT1tJiZmdW5jdGlvbihlKXtlLndpbmRvd19zaXplPTIqZS53X3NpemUsRChlLmhlYWQpLGUubWF4X2xhenlfbWF0Y2g9aFtlLmxldmVsXS5tYXhfbGF6eSxlLmdvb2RfbWF0Y2g9aFtlLmxldmVsXS5nb29kX2xlbmd0aCxlLm5pY2VfbWF0Y2g9aFtlLmxldmVsXS5uaWNlX2xlbmd0aCxlLm1heF9jaGFpbl9sZW5ndGg9aFtlLmxldmVsXS5tYXhfY2hhaW4sZS5zdHJzdGFydD0wLGUuYmxvY2tfc3RhcnQ9MCxlLmxvb2thaGVhZD0wLGUuaW5zZXJ0PTAsZS5tYXRjaF9sZW5ndGg9ZS5wcmV2X2xlbmd0aD14LTEsZS5tYXRjaF9hdmFpbGFibGU9MCxlLmluc19oPTB9KGUuc3RhdGUpLHR9ZnVuY3Rpb24gWShlLHQscixuLGkscyl7aWYoIWUpcmV0dXJuIF87dmFyIGE9MTtpZih0PT09ZyYmKHQ9NiksbjwwPyhhPTAsbj0tbik6MTU8biYmKGE9MixuLT0xNiksaTwxfHx5PGl8fHIhPT12fHxuPDh8fDE1PG58fHQ8MHx8OTx0fHxzPDB8fGI8cylyZXR1cm4gUihlLF8pOzg9PT1uJiYobj05KTt2YXIgbz1uZXcgSDtyZXR1cm4oZS5zdGF0ZT1vKS5zdHJtPWUsby53cmFwPWEsby5nemhlYWQ9bnVsbCxvLndfYml0cz1uLG8ud19zaXplPTE8PG8ud19iaXRzLG8ud19tYXNrPW8ud19zaXplLTEsby5oYXNoX2JpdHM9aSs3LG8uaGFzaF9zaXplPTE8PG8uaGFzaF9iaXRzLG8uaGFzaF9tYXNrPW8uaGFzaF9zaXplLTEsby5oYXNoX3NoaWZ0PX5+KChvLmhhc2hfYml0cyt4LTEpL3gpLG8ud2luZG93PW5ldyBjLkJ1ZjgoMipvLndfc2l6ZSksby5oZWFkPW5ldyBjLkJ1ZjE2KG8uaGFzaF9zaXplKSxvLnByZXY9bmV3IGMuQnVmMTYoby53X3NpemUpLG8ubGl0X2J1ZnNpemU9MTw8aSs2LG8ucGVuZGluZ19idWZfc2l6ZT00Km8ubGl0X2J1ZnNpemUsby5wZW5kaW5nX2J1Zj1uZXcgYy5CdWY4KG8ucGVuZGluZ19idWZfc2l6ZSksby5kX2J1Zj0xKm8ubGl0X2J1ZnNpemUsby5sX2J1Zj0zKm8ubGl0X2J1ZnNpemUsby5sZXZlbD10LG8uc3RyYXRlZ3k9cyxvLm1ldGhvZD1yLEsoZSl9aD1bbmV3IE0oMCwwLDAsMCxmdW5jdGlvbihlLHQpe3ZhciByPTY1NTM1O2ZvcihyPmUucGVuZGluZ19idWZfc2l6ZS01JiYocj1lLnBlbmRpbmdfYnVmX3NpemUtNSk7Oyl7aWYoZS5sb29rYWhlYWQ8PTEpe2lmKGooZSksMD09PWUubG9va2FoZWFkJiZ0PT09bClyZXR1cm4gQTtpZigwPT09ZS5sb29rYWhlYWQpYnJlYWt9ZS5zdHJzdGFydCs9ZS5sb29rYWhlYWQsZS5sb29rYWhlYWQ9MDt2YXIgbj1lLmJsb2NrX3N0YXJ0K3I7aWYoKDA9PT1lLnN0cnN0YXJ0fHxlLnN0cnN0YXJ0Pj1uKSYmKGUubG9va2FoZWFkPWUuc3Ryc3RhcnQtbixlLnN0cnN0YXJ0PW4sTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEE7aWYoZS5zdHJzdGFydC1lLmJsb2NrX3N0YXJ0Pj1lLndfc2l6ZS16JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PTAsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTooZS5zdHJzdGFydD5lLmJsb2NrX3N0YXJ0JiYoTihlLCExKSxlLnN0cm0uYXZhaWxfb3V0KSxBKX0pLG5ldyBNKDQsNCw4LDQsWiksbmV3IE0oNCw1LDE2LDgsWiksbmV3IE0oNCw2LDMyLDMyLFopLG5ldyBNKDQsNCwxNiwxNixXKSxuZXcgTSg4LDE2LDMyLDMyLFcpLG5ldyBNKDgsMTYsMTI4LDEyOCxXKSxuZXcgTSg4LDMyLDEyOCwyNTYsVyksbmV3IE0oMzIsMTI4LDI1OCwxMDI0LFcpLG5ldyBNKDMyLDI1OCwyNTgsNDA5NixXKV0sci5kZWZsYXRlSW5pdD1mdW5jdGlvbihlLHQpe3JldHVybiBZKGUsdCx2LDE1LDgsMCl9LHIuZGVmbGF0ZUluaXQyPVksci5kZWZsYXRlUmVzZXQ9SyxyLmRlZmxhdGVSZXNldEtlZXA9RyxyLmRlZmxhdGVTZXRIZWFkZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmZS5zdGF0ZT8yIT09ZS5zdGF0ZS53cmFwP186KGUuc3RhdGUuZ3poZWFkPXQsbSk6X30sci5kZWZsYXRlPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHM7aWYoIWV8fCFlLnN0YXRlfHw1PHR8fHQ8MClyZXR1cm4gZT9SKGUsXyk6XztpZihuPWUuc3RhdGUsIWUub3V0cHV0fHwhZS5pbnB1dCYmMCE9PWUuYXZhaWxfaW58fDY2Nj09PW4uc3RhdHVzJiZ0IT09ZilyZXR1cm4gUihlLDA9PT1lLmF2YWlsX291dD8tNTpfKTtpZihuLnN0cm09ZSxyPW4ubGFzdF9mbHVzaCxuLmxhc3RfZmx1c2g9dCxuLnN0YXR1cz09PUMpaWYoMj09PW4ud3JhcCllLmFkbGVyPTAsVShuLDMxKSxVKG4sMTM5KSxVKG4sOCksbi5nemhlYWQ/KFUobiwobi5nemhlYWQudGV4dD8xOjApKyhuLmd6aGVhZC5oY3JjPzI6MCkrKG4uZ3poZWFkLmV4dHJhPzQ6MCkrKG4uZ3poZWFkLm5hbWU/ODowKSsobi5nemhlYWQuY29tbWVudD8xNjowKSksVShuLDI1NSZuLmd6aGVhZC50aW1lKSxVKG4sbi5nemhlYWQudGltZT4+OCYyNTUpLFUobixuLmd6aGVhZC50aW1lPj4xNiYyNTUpLFUobixuLmd6aGVhZC50aW1lPj4yNCYyNTUpLFUobiw5PT09bi5sZXZlbD8yOjI8PW4uc3RyYXRlZ3l8fG4ubGV2ZWw8Mj80OjApLFUobiwyNTUmbi5nemhlYWQub3MpLG4uZ3poZWFkLmV4dHJhJiZuLmd6aGVhZC5leHRyYS5sZW5ndGgmJihVKG4sMjU1Jm4uZ3poZWFkLmV4dHJhLmxlbmd0aCksVShuLG4uZ3poZWFkLmV4dHJhLmxlbmd0aD4+OCYyNTUpKSxuLmd6aGVhZC5oY3JjJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmcsMCkpLG4uZ3ppbmRleD0wLG4uc3RhdHVzPTY5KTooVShuLDApLFUobiwwKSxVKG4sMCksVShuLDApLFUobiwwKSxVKG4sOT09PW4ubGV2ZWw/MjoyPD1uLnN0cmF0ZWd5fHxuLmxldmVsPDI/NDowKSxVKG4sMyksbi5zdGF0dXM9RSk7ZWxzZXt2YXIgYT12KyhuLndfYml0cy04PDw0KTw8ODthfD0oMjw9bi5zdHJhdGVneXx8bi5sZXZlbDwyPzA6bi5sZXZlbDw2PzE6Nj09PW4ubGV2ZWw/MjozKTw8NiwwIT09bi5zdHJzdGFydCYmKGF8PTMyKSxhKz0zMS1hJTMxLG4uc3RhdHVzPUUsUChuLGEpLDAhPT1uLnN0cnN0YXJ0JiYoUChuLGUuYWRsZXI+Pj4xNiksUChuLDY1NTM1JmUuYWRsZXIpKSxlLmFkbGVyPTF9aWYoNjk9PT1uLnN0YXR1cylpZihuLmd6aGVhZC5leHRyYSl7Zm9yKGk9bi5wZW5kaW5nO24uZ3ppbmRleDwoNjU1MzUmbi5nemhlYWQuZXh0cmEubGVuZ3RoKSYmKG4ucGVuZGluZyE9PW4ucGVuZGluZ19idWZfc2l6ZXx8KG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmchPT1uLnBlbmRpbmdfYnVmX3NpemUpKTspVShuLDI1NSZuLmd6aGVhZC5leHRyYVtuLmd6aW5kZXhdKSxuLmd6aW5kZXgrKztuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLG4uZ3ppbmRleD09PW4uZ3poZWFkLmV4dHJhLmxlbmd0aCYmKG4uZ3ppbmRleD0wLG4uc3RhdHVzPTczKX1lbHNlIG4uc3RhdHVzPTczO2lmKDczPT09bi5zdGF0dXMpaWYobi5nemhlYWQubmFtZSl7aT1uLnBlbmRpbmc7ZG97aWYobi5wZW5kaW5nPT09bi5wZW5kaW5nX2J1Zl9zaXplJiYobi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxGKGUpLGk9bi5wZW5kaW5nLG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSkpe3M9MTticmVha31zPW4uZ3ppbmRleDxuLmd6aGVhZC5uYW1lLmxlbmd0aD8yNTUmbi5nemhlYWQubmFtZS5jaGFyQ29kZUF0KG4uZ3ppbmRleCsrKTowLFUobixzKX13aGlsZSgwIT09cyk7bi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSwwPT09cyYmKG4uZ3ppbmRleD0wLG4uc3RhdHVzPTkxKX1lbHNlIG4uc3RhdHVzPTkxO2lmKDkxPT09bi5zdGF0dXMpaWYobi5nemhlYWQuY29tbWVudCl7aT1uLnBlbmRpbmc7ZG97aWYobi5wZW5kaW5nPT09bi5wZW5kaW5nX2J1Zl9zaXplJiYobi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxGKGUpLGk9bi5wZW5kaW5nLG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSkpe3M9MTticmVha31zPW4uZ3ppbmRleDxuLmd6aGVhZC5jb21tZW50Lmxlbmd0aD8yNTUmbi5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KG4uZ3ppbmRleCsrKTowLFUobixzKX13aGlsZSgwIT09cyk7bi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSwwPT09cyYmKG4uc3RhdHVzPTEwMyl9ZWxzZSBuLnN0YXR1cz0xMDM7aWYoMTAzPT09bi5zdGF0dXMmJihuLmd6aGVhZC5oY3JjPyhuLnBlbmRpbmcrMj5uLnBlbmRpbmdfYnVmX3NpemUmJkYoZSksbi5wZW5kaW5nKzI8PW4ucGVuZGluZ19idWZfc2l6ZSYmKFUobiwyNTUmZS5hZGxlciksVShuLGUuYWRsZXI+PjgmMjU1KSxlLmFkbGVyPTAsbi5zdGF0dXM9RSkpOm4uc3RhdHVzPUUpLDAhPT1uLnBlbmRpbmcpe2lmKEYoZSksMD09PWUuYXZhaWxfb3V0KXJldHVybiBuLmxhc3RfZmx1c2g9LTEsbX1lbHNlIGlmKDA9PT1lLmF2YWlsX2luJiZUKHQpPD1UKHIpJiZ0IT09ZilyZXR1cm4gUihlLC01KTtpZig2NjY9PT1uLnN0YXR1cyYmMCE9PWUuYXZhaWxfaW4pcmV0dXJuIFIoZSwtNSk7aWYoMCE9PWUuYXZhaWxfaW58fDAhPT1uLmxvb2thaGVhZHx8dCE9PWwmJjY2NiE9PW4uc3RhdHVzKXt2YXIgbz0yPT09bi5zdHJhdGVneT9mdW5jdGlvbihlLHQpe2Zvcih2YXIgcjs7KXtpZigwPT09ZS5sb29rYWhlYWQmJihqKGUpLDA9PT1lLmxvb2thaGVhZCkpe2lmKHQ9PT1sKXJldHVybiBBO2JyZWFrfWlmKGUubWF0Y2hfbGVuZ3RoPTAscj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydF0pLGUubG9va2FoZWFkLS0sZS5zdHJzdGFydCsrLHImJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9MCx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9KG4sdCk6Mz09PW4uc3RyYXRlZ3k/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHIsbixpLHMsYT1lLndpbmRvdzs7KXtpZihlLmxvb2thaGVhZDw9Uyl7aWYoaihlKSxlLmxvb2thaGVhZDw9UyYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKGUubWF0Y2hfbGVuZ3RoPTAsZS5sb29rYWhlYWQ+PXgmJjA8ZS5zdHJzdGFydCYmKG49YVtpPWUuc3Ryc3RhcnQtMV0pPT09YVsrK2ldJiZuPT09YVsrK2ldJiZuPT09YVsrK2ldKXtzPWUuc3Ryc3RhcnQrUztkb3t9d2hpbGUobj09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSYmaTxzKTtlLm1hdGNoX2xlbmd0aD1TLShzLWkpLGUubWF0Y2hfbGVuZ3RoPmUubG9va2FoZWFkJiYoZS5tYXRjaF9sZW5ndGg9ZS5sb29rYWhlYWQpfWlmKGUubWF0Y2hfbGVuZ3RoPj14PyhyPXUuX3RyX3RhbGx5KGUsMSxlLm1hdGNoX2xlbmd0aC14KSxlLmxvb2thaGVhZC09ZS5tYXRjaF9sZW5ndGgsZS5zdHJzdGFydCs9ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg9MCk6KHI9dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnRdKSxlLmxvb2thaGVhZC0tLGUuc3Ryc3RhcnQrKyksciYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD0wLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6ZS5sYXN0X2xpdCYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpP0E6SX0obix0KTpoW24ubGV2ZWxdLmZ1bmMobix0KTtpZihvIT09TyYmbyE9PUJ8fChuLnN0YXR1cz02NjYpLG89PT1BfHxvPT09TylyZXR1cm4gMD09PWUuYXZhaWxfb3V0JiYobi5sYXN0X2ZsdXNoPS0xKSxtO2lmKG89PT1JJiYoMT09PXQ/dS5fdHJfYWxpZ24obik6NSE9PXQmJih1Ll90cl9zdG9yZWRfYmxvY2sobiwwLDAsITEpLDM9PT10JiYoRChuLmhlYWQpLDA9PT1uLmxvb2thaGVhZCYmKG4uc3Ryc3RhcnQ9MCxuLmJsb2NrX3N0YXJ0PTAsbi5pbnNlcnQ9MCkpKSxGKGUpLDA9PT1lLmF2YWlsX291dCkpcmV0dXJuIG4ubGFzdF9mbHVzaD0tMSxtfXJldHVybiB0IT09Zj9tOm4ud3JhcDw9MD8xOigyPT09bi53cmFwPyhVKG4sMjU1JmUuYWRsZXIpLFUobixlLmFkbGVyPj44JjI1NSksVShuLGUuYWRsZXI+PjE2JjI1NSksVShuLGUuYWRsZXI+PjI0JjI1NSksVShuLDI1NSZlLnRvdGFsX2luKSxVKG4sZS50b3RhbF9pbj4+OCYyNTUpLFUobixlLnRvdGFsX2luPj4xNiYyNTUpLFUobixlLnRvdGFsX2luPj4yNCYyNTUpKTooUChuLGUuYWRsZXI+Pj4xNiksUChuLDY1NTM1JmUuYWRsZXIpKSxGKGUpLDA8bi53cmFwJiYobi53cmFwPS1uLndyYXApLDAhPT1uLnBlbmRpbmc/bToxKX0sci5kZWZsYXRlRW5kPWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPyh0PWUuc3RhdGUuc3RhdHVzKSE9PUMmJjY5IT09dCYmNzMhPT10JiY5MSE9PXQmJjEwMyE9PXQmJnQhPT1FJiY2NjYhPT10P1IoZSxfKTooZS5zdGF0ZT1udWxsLHQ9PT1FP1IoZSwtMyk6bSk6X30sci5kZWZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoLHUsbD10Lmxlbmd0aDtpZighZXx8IWUuc3RhdGUpcmV0dXJuIF87aWYoMj09PShzPShyPWUuc3RhdGUpLndyYXApfHwxPT09cyYmci5zdGF0dXMhPT1DfHxyLmxvb2thaGVhZClyZXR1cm4gXztmb3IoMT09PXMmJihlLmFkbGVyPWQoZS5hZGxlcix0LGwsMCkpLHIud3JhcD0wLGw+PXIud19zaXplJiYoMD09PXMmJihEKHIuaGVhZCksci5zdHJzdGFydD0wLHIuYmxvY2tfc3RhcnQ9MCxyLmluc2VydD0wKSx1PW5ldyBjLkJ1Zjgoci53X3NpemUpLGMuYXJyYXlTZXQodSx0LGwtci53X3NpemUsci53X3NpemUsMCksdD11LGw9ci53X3NpemUpLGE9ZS5hdmFpbF9pbixvPWUubmV4dF9pbixoPWUuaW5wdXQsZS5hdmFpbF9pbj1sLGUubmV4dF9pbj0wLGUuaW5wdXQ9dCxqKHIpO3IubG9va2FoZWFkPj14Oyl7Zm9yKG49ci5zdHJzdGFydCxpPXIubG9va2FoZWFkLSh4LTEpO3IuaW5zX2g9KHIuaW5zX2g8PHIuaGFzaF9zaGlmdF5yLndpbmRvd1tuK3gtMV0pJnIuaGFzaF9tYXNrLHIucHJldltuJnIud19tYXNrXT1yLmhlYWRbci5pbnNfaF0sci5oZWFkW3IuaW5zX2hdPW4sbisrLC0taTspO3Iuc3Ryc3RhcnQ9bixyLmxvb2thaGVhZD14LTEsaihyKX1yZXR1cm4gci5zdHJzdGFydCs9ci5sb29rYWhlYWQsci5ibG9ja19zdGFydD1yLnN0cnN0YXJ0LHIuaW5zZXJ0PXIubG9va2FoZWFkLHIubG9va2FoZWFkPTAsci5tYXRjaF9sZW5ndGg9ci5wcmV2X2xlbmd0aD14LTEsci5tYXRjaF9hdmFpbGFibGU9MCxlLm5leHRfaW49byxlLmlucHV0PWgsZS5hdmFpbF9pbj1hLHIud3JhcD1zLG19LHIuZGVmbGF0ZUluZm89XCJwYWtvIGRlZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpXCJ9LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9hZGxlcjMyXCI6NDMsXCIuL2NyYzMyXCI6NDUsXCIuL21lc3NhZ2VzXCI6NTEsXCIuL3RyZWVzXCI6NTJ9XSw0NzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMudGV4dD0wLHRoaXMudGltZT0wLHRoaXMueGZsYWdzPTAsdGhpcy5vcz0wLHRoaXMuZXh0cmE9bnVsbCx0aGlzLmV4dHJhX2xlbj0wLHRoaXMubmFtZT1cIlwiLHRoaXMuY29tbWVudD1cIlwiLHRoaXMuaGNyYz0wLHRoaXMuZG9uZT0hMX19LHt9XSw0ODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoLHUsbCxmLGMsZCxwLG0sXyxnLGIsdix5LHcsayx4LFMseixDO3I9ZS5zdGF0ZSxuPWUubmV4dF9pbix6PWUuaW5wdXQsaT1uKyhlLmF2YWlsX2luLTUpLHM9ZS5uZXh0X291dCxDPWUub3V0cHV0LGE9cy0odC1lLmF2YWlsX291dCksbz1zKyhlLmF2YWlsX291dC0yNTcpLGg9ci5kbWF4LHU9ci53c2l6ZSxsPXIud2hhdmUsZj1yLnduZXh0LGM9ci53aW5kb3csZD1yLmhvbGQscD1yLmJpdHMsbT1yLmxlbmNvZGUsXz1yLmRpc3Rjb2RlLGc9KDE8PHIubGVuYml0cyktMSxiPSgxPDxyLmRpc3RiaXRzKS0xO2U6ZG97cDwxNSYmKGQrPXpbbisrXTw8cCxwKz04LGQrPXpbbisrXTw8cCxwKz04KSx2PW1bZCZnXTt0OmZvcig7Oyl7aWYoZD4+Pj15PXY+Pj4yNCxwLT15LDA9PT0oeT12Pj4+MTYmMjU1KSlDW3MrK109NjU1MzUmdjtlbHNle2lmKCEoMTYmeSkpe2lmKDA9PSg2NCZ5KSl7dj1tWyg2NTUzNSZ2KSsoZCYoMTw8eSktMSldO2NvbnRpbnVlIHR9aWYoMzImeSl7ci5tb2RlPTEyO2JyZWFrIGV9ZS5tc2c9XCJpbnZhbGlkIGxpdGVyYWwvbGVuZ3RoIGNvZGVcIixyLm1vZGU9MzA7YnJlYWsgZX13PTY1NTM1JnYsKHkmPTE1KSYmKHA8eSYmKGQrPXpbbisrXTw8cCxwKz04KSx3Kz1kJigxPDx5KS0xLGQ+Pj49eSxwLT15KSxwPDE1JiYoZCs9eltuKytdPDxwLHArPTgsZCs9eltuKytdPDxwLHArPTgpLHY9X1tkJmJdO3I6Zm9yKDs7KXtpZihkPj4+PXk9dj4+PjI0LHAtPXksISgxNiYoeT12Pj4+MTYmMjU1KSkpe2lmKDA9PSg2NCZ5KSl7dj1fWyg2NTUzNSZ2KSsoZCYoMTw8eSktMSldO2NvbnRpbnVlIHJ9ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIGNvZGVcIixyLm1vZGU9MzA7YnJlYWsgZX1pZihrPTY1NTM1JnYscDwoeSY9MTUpJiYoZCs9eltuKytdPDxwLChwKz04KTx5JiYoZCs9eltuKytdPDxwLHArPTgpKSxoPChrKz1kJigxPDx5KS0xKSl7ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVhayBlfWlmKGQ+Pj49eSxwLT15LCh5PXMtYSk8ayl7aWYobDwoeT1rLXkpJiZyLnNhbmUpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgZX1pZihTPWMsKHg9MCk9PT1mKXtpZih4Kz11LXkseTx3KXtmb3Iody09eTtDW3MrK109Y1t4KytdLC0teTspO3g9cy1rLFM9Q319ZWxzZSBpZihmPHkpe2lmKHgrPXUrZi15LCh5LT1mKTx3KXtmb3Iody09eTtDW3MrK109Y1t4KytdLC0teTspO2lmKHg9MCxmPHcpe2Zvcih3LT15PWY7Q1tzKytdPWNbeCsrXSwtLXk7KTt4PXMtayxTPUN9fX1lbHNlIGlmKHgrPWYteSx5PHcpe2Zvcih3LT15O0NbcysrXT1jW3grK10sLS15Oyk7eD1zLWssUz1DfWZvcig7Mjx3OylDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sQ1tzKytdPVNbeCsrXSx3LT0zO3cmJihDW3MrK109U1t4KytdLDE8dyYmKENbcysrXT1TW3grK10pKX1lbHNle2Zvcih4PXMtaztDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sQ1tzKytdPUNbeCsrXSwyPCh3LT0zKTspO3cmJihDW3MrK109Q1t4KytdLDE8dyYmKENbcysrXT1DW3grK10pKX1icmVha319YnJlYWt9fXdoaWxlKG48aSYmczxvKTtuLT13PXA+PjMsZCY9KDE8PChwLT13PDwzKSktMSxlLm5leHRfaW49bixlLm5leHRfb3V0PXMsZS5hdmFpbF9pbj1uPGk/aS1uKzU6NS0obi1pKSxlLmF2YWlsX291dD1zPG8/by1zKzI1NzoyNTctKHMtbyksci5ob2xkPWQsci5iaXRzPXB9fSx7fV0sNDk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgST1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLE89ZShcIi4vYWRsZXIzMlwiKSxCPWUoXCIuL2NyYzMyXCIpLFI9ZShcIi4vaW5mZmFzdFwiKSxUPWUoXCIuL2luZnRyZWVzXCIpLEQ9MSxGPTIsTj0wLFU9LTIsUD0xLG49ODUyLGk9NTkyO2Z1bmN0aW9uIEwoZSl7cmV0dXJuKGU+Pj4yNCYyNTUpKyhlPj4+OCY2NTI4MCkrKCg2NTI4MCZlKTw8OCkrKCgyNTUmZSk8PDI0KX1mdW5jdGlvbiBzKCl7dGhpcy5tb2RlPTAsdGhpcy5sYXN0PSExLHRoaXMud3JhcD0wLHRoaXMuaGF2ZWRpY3Q9ITEsdGhpcy5mbGFncz0wLHRoaXMuZG1heD0wLHRoaXMuY2hlY2s9MCx0aGlzLnRvdGFsPTAsdGhpcy5oZWFkPW51bGwsdGhpcy53Yml0cz0wLHRoaXMud3NpemU9MCx0aGlzLndoYXZlPTAsdGhpcy53bmV4dD0wLHRoaXMud2luZG93PW51bGwsdGhpcy5ob2xkPTAsdGhpcy5iaXRzPTAsdGhpcy5sZW5ndGg9MCx0aGlzLm9mZnNldD0wLHRoaXMuZXh0cmE9MCx0aGlzLmxlbmNvZGU9bnVsbCx0aGlzLmRpc3Rjb2RlPW51bGwsdGhpcy5sZW5iaXRzPTAsdGhpcy5kaXN0Yml0cz0wLHRoaXMubmNvZGU9MCx0aGlzLm5sZW49MCx0aGlzLm5kaXN0PTAsdGhpcy5oYXZlPTAsdGhpcy5uZXh0PW51bGwsdGhpcy5sZW5zPW5ldyBJLkJ1ZjE2KDMyMCksdGhpcy53b3JrPW5ldyBJLkJ1ZjE2KDI4OCksdGhpcy5sZW5keW49bnVsbCx0aGlzLmRpc3RkeW49bnVsbCx0aGlzLnNhbmU9MCx0aGlzLmJhY2s9MCx0aGlzLndhcz0wfWZ1bmN0aW9uIGEoZSl7dmFyIHQ7cmV0dXJuIGUmJmUuc3RhdGU/KHQ9ZS5zdGF0ZSxlLnRvdGFsX2luPWUudG90YWxfb3V0PXQudG90YWw9MCxlLm1zZz1cIlwiLHQud3JhcCYmKGUuYWRsZXI9MSZ0LndyYXApLHQubW9kZT1QLHQubGFzdD0wLHQuaGF2ZWRpY3Q9MCx0LmRtYXg9MzI3NjgsdC5oZWFkPW51bGwsdC5ob2xkPTAsdC5iaXRzPTAsdC5sZW5jb2RlPXQubGVuZHluPW5ldyBJLkJ1ZjMyKG4pLHQuZGlzdGNvZGU9dC5kaXN0ZHluPW5ldyBJLkJ1ZjMyKGkpLHQuc2FuZT0xLHQuYmFjaz0tMSxOKTpVfWZ1bmN0aW9uIG8oZSl7dmFyIHQ7cmV0dXJuIGUmJmUuc3RhdGU/KCh0PWUuc3RhdGUpLndzaXplPTAsdC53aGF2ZT0wLHQud25leHQ9MCxhKGUpKTpVfWZ1bmN0aW9uIGgoZSx0KXt2YXIgcixuO3JldHVybiBlJiZlLnN0YXRlPyhuPWUuc3RhdGUsdDwwPyhyPTAsdD0tdCk6KHI9MSsodD4+NCksdDw0OCYmKHQmPTE1KSksdCYmKHQ8OHx8MTU8dCk/VToobnVsbCE9PW4ud2luZG93JiZuLndiaXRzIT09dCYmKG4ud2luZG93PW51bGwpLG4ud3JhcD1yLG4ud2JpdHM9dCxvKGUpKSk6VX1mdW5jdGlvbiB1KGUsdCl7dmFyIHIsbjtyZXR1cm4gZT8obj1uZXcgcywoZS5zdGF0ZT1uKS53aW5kb3c9bnVsbCwocj1oKGUsdCkpIT09TiYmKGUuc3RhdGU9bnVsbCkscik6VX12YXIgbCxmLGM9ITA7ZnVuY3Rpb24gaihlKXtpZihjKXt2YXIgdDtmb3IobD1uZXcgSS5CdWYzMig1MTIpLGY9bmV3IEkuQnVmMzIoMzIpLHQ9MDt0PDE0NDspZS5sZW5zW3QrK109ODtmb3IoO3Q8MjU2OyllLmxlbnNbdCsrXT05O2Zvcig7dDwyODA7KWUubGVuc1t0KytdPTc7Zm9yKDt0PDI4ODspZS5sZW5zW3QrK109ODtmb3IoVChELGUubGVucywwLDI4OCxsLDAsZS53b3JrLHtiaXRzOjl9KSx0PTA7dDwzMjspZS5sZW5zW3QrK109NTtUKEYsZS5sZW5zLDAsMzIsZiwwLGUud29yayx7Yml0czo1fSksYz0hMX1lLmxlbmNvZGU9bCxlLmxlbmJpdHM9OSxlLmRpc3Rjb2RlPWYsZS5kaXN0Yml0cz01fWZ1bmN0aW9uIFooZSx0LHIsbil7dmFyIGkscz1lLnN0YXRlO3JldHVybiBudWxsPT09cy53aW5kb3cmJihzLndzaXplPTE8PHMud2JpdHMscy53bmV4dD0wLHMud2hhdmU9MCxzLndpbmRvdz1uZXcgSS5CdWY4KHMud3NpemUpKSxuPj1zLndzaXplPyhJLmFycmF5U2V0KHMud2luZG93LHQsci1zLndzaXplLHMud3NpemUsMCkscy53bmV4dD0wLHMud2hhdmU9cy53c2l6ZSk6KG48KGk9cy53c2l6ZS1zLnduZXh0KSYmKGk9biksSS5hcnJheVNldChzLndpbmRvdyx0LHItbixpLHMud25leHQpLChuLT1pKT8oSS5hcnJheVNldChzLndpbmRvdyx0LHItbixuLDApLHMud25leHQ9bixzLndoYXZlPXMud3NpemUpOihzLnduZXh0Kz1pLHMud25leHQ9PT1zLndzaXplJiYocy53bmV4dD0wKSxzLndoYXZlPHMud3NpemUmJihzLndoYXZlKz1pKSkpLDB9ci5pbmZsYXRlUmVzZXQ9byxyLmluZmxhdGVSZXNldDI9aCxyLmluZmxhdGVSZXNldEtlZXA9YSxyLmluZmxhdGVJbml0PWZ1bmN0aW9uKGUpe3JldHVybiB1KGUsMTUpfSxyLmluZmxhdGVJbml0Mj11LHIuaW5mbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoLHUsbCxmLGMsZCxwLG0sXyxnLGIsdix5LHcsayx4LFMseixDPTAsRT1uZXcgSS5CdWY4KDQpLEE9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdO2lmKCFlfHwhZS5zdGF0ZXx8IWUub3V0cHV0fHwhZS5pbnB1dCYmMCE9PWUuYXZhaWxfaW4pcmV0dXJuIFU7MTI9PT0ocj1lLnN0YXRlKS5tb2RlJiYoci5tb2RlPTEzKSxhPWUubmV4dF9vdXQsaT1lLm91dHB1dCxoPWUuYXZhaWxfb3V0LHM9ZS5uZXh0X2luLG49ZS5pbnB1dCxvPWUuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsZj1vLGM9aCx4PU47ZTpmb3IoOzspc3dpdGNoKHIubW9kZSl7Y2FzZSBQOmlmKDA9PT1yLndyYXApe3IubW9kZT0xMzticmVha31mb3IoO2w8MTY7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZigyJnIud3JhcCYmMzU2MTU9PT11KXtFW3IuY2hlY2s9MF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApLGw9dT0wLHIubW9kZT0yO2JyZWFrfWlmKHIuZmxhZ3M9MCxyLmhlYWQmJihyLmhlYWQuZG9uZT0hMSksISgxJnIud3JhcCl8fCgoKDI1NSZ1KTw8OCkrKHU+PjgpKSUzMSl7ZS5tc2c9XCJpbmNvcnJlY3QgaGVhZGVyIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWlmKDghPSgxNSZ1KSl7ZS5tc2c9XCJ1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZFwiLHIubW9kZT0zMDticmVha31pZihsLT00LGs9OCsoMTUmKHU+Pj49NCkpLDA9PT1yLndiaXRzKXIud2JpdHM9aztlbHNlIGlmKGs+ci53Yml0cyl7ZS5tc2c9XCJpbnZhbGlkIHdpbmRvdyBzaXplXCIsci5tb2RlPTMwO2JyZWFrfXIuZG1heD0xPDxrLGUuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT01MTImdT8xMDoxMixsPXU9MDticmVhaztjYXNlIDI6Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoci5mbGFncz11LDghPSgyNTUmci5mbGFncykpe2UubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYoNTczNDQmci5mbGFncyl7ZS5tc2c9XCJ1bmtub3duIGhlYWRlciBmbGFncyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oZWFkJiYoci5oZWFkLnRleHQ9dT4+OCYxKSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MCxyLm1vZGU9MztjYXNlIDM6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ci5oZWFkJiYoci5oZWFkLnRpbWU9dSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LEVbMl09dT4+PjE2JjI1NSxFWzNdPXU+Pj4yNCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSw0LDApKSxsPXU9MCxyLm1vZGU9NDtjYXNlIDQ6Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ci5oZWFkJiYoci5oZWFkLnhmbGFncz0yNTUmdSxyLmhlYWQub3M9dT4+OCksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTU7Y2FzZSA1OmlmKDEwMjQmci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ci5sZW5ndGg9dSxyLmhlYWQmJihyLmhlYWQuZXh0cmFfbGVuPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wfWVsc2Ugci5oZWFkJiYoci5oZWFkLmV4dHJhPW51bGwpO3IubW9kZT02O2Nhc2UgNjppZigxMDI0JnIuZmxhZ3MmJihvPChkPXIubGVuZ3RoKSYmKGQ9byksZCYmKHIuaGVhZCYmKGs9ci5oZWFkLmV4dHJhX2xlbi1yLmxlbmd0aCxyLmhlYWQuZXh0cmF8fChyLmhlYWQuZXh0cmE9bmV3IEFycmF5KHIuaGVhZC5leHRyYV9sZW4pKSxJLmFycmF5U2V0KHIuaGVhZC5leHRyYSxuLHMsZCxrKSksNTEyJnIuZmxhZ3MmJihyLmNoZWNrPUIoci5jaGVjayxuLGQscykpLG8tPWQscys9ZCxyLmxlbmd0aC09ZCksci5sZW5ndGgpKWJyZWFrIGU7ci5sZW5ndGg9MCxyLm1vZGU9NztjYXNlIDc6aWYoMjA0OCZyLmZsYWdzKXtpZigwPT09bylicmVhayBlO2ZvcihkPTA7az1uW3MrZCsrXSxyLmhlYWQmJmsmJnIubGVuZ3RoPDY1NTM2JiYoci5oZWFkLm5hbWUrPVN0cmluZy5mcm9tQ2hhckNvZGUoaykpLGsmJmQ8bzspO2lmKDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssbixkLHMpKSxvLT1kLHMrPWQsaylicmVhayBlfWVsc2Ugci5oZWFkJiYoci5oZWFkLm5hbWU9bnVsbCk7ci5sZW5ndGg9MCxyLm1vZGU9ODtjYXNlIDg6aWYoNDA5NiZyLmZsYWdzKXtpZigwPT09bylicmVhayBlO2ZvcihkPTA7az1uW3MrZCsrXSxyLmhlYWQmJmsmJnIubGVuZ3RoPDY1NTM2JiYoci5oZWFkLmNvbW1lbnQrPVN0cmluZy5mcm9tQ2hhckNvZGUoaykpLGsmJmQ8bzspO2lmKDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssbixkLHMpKSxvLT1kLHMrPWQsaylicmVhayBlfWVsc2Ugci5oZWFkJiYoci5oZWFkLmNvbW1lbnQ9bnVsbCk7ci5tb2RlPTk7Y2FzZSA5OmlmKDUxMiZyLmZsYWdzKXtmb3IoO2w8MTY7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZih1IT09KDY1NTM1JnIuY2hlY2spKXtlLm1zZz1cImhlYWRlciBjcmMgbWlzbWF0Y2hcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5oZWFkJiYoci5oZWFkLmhjcmM9ci5mbGFncz4+OSYxLHIuaGVhZC5kb25lPSEwKSxlLmFkbGVyPXIuY2hlY2s9MCxyLm1vZGU9MTI7YnJlYWs7Y2FzZSAxMDpmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1lLmFkbGVyPXIuY2hlY2s9TCh1KSxsPXU9MCxyLm1vZGU9MTE7Y2FzZSAxMTppZigwPT09ci5oYXZlZGljdClyZXR1cm4gZS5uZXh0X291dD1hLGUuYXZhaWxfb3V0PWgsZS5uZXh0X2luPXMsZS5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLDI7ZS5hZGxlcj1yLmNoZWNrPTEsci5tb2RlPTEyO2Nhc2UgMTI6aWYoNT09PXR8fDY9PT10KWJyZWFrIGU7Y2FzZSAxMzppZihyLmxhc3Qpe3U+Pj49NyZsLGwtPTcmbCxyLm1vZGU9Mjc7YnJlYWt9Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1zd2l0Y2goci5sYXN0PTEmdSxsLT0xLDMmKHU+Pj49MSkpe2Nhc2UgMDpyLm1vZGU9MTQ7YnJlYWs7Y2FzZSAxOmlmKGoociksci5tb2RlPTIwLDYhPT10KWJyZWFrO3U+Pj49MixsLT0yO2JyZWFrIGU7Y2FzZSAyOnIubW9kZT0xNzticmVhaztjYXNlIDM6ZS5tc2c9XCJpbnZhbGlkIGJsb2NrIHR5cGVcIixyLm1vZGU9MzB9dT4+Pj0yLGwtPTI7YnJlYWs7Y2FzZSAxNDpmb3IodT4+Pj03JmwsbC09NyZsO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZigoNjU1MzUmdSkhPSh1Pj4+MTZeNjU1MzUpKXtlLm1zZz1cImludmFsaWQgc3RvcmVkIGJsb2NrIGxlbmd0aHNcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5ndGg9NjU1MzUmdSxsPXU9MCxyLm1vZGU9MTUsNj09PXQpYnJlYWsgZTtjYXNlIDE1OnIubW9kZT0xNjtjYXNlIDE2OmlmKGQ9ci5sZW5ndGgpe2lmKG88ZCYmKGQ9byksaDxkJiYoZD1oKSwwPT09ZClicmVhayBlO0kuYXJyYXlTZXQoaSxuLHMsZCxhKSxvLT1kLHMrPWQsaC09ZCxhKz1kLHIubGVuZ3RoLT1kO2JyZWFrfXIubW9kZT0xMjticmVhaztjYXNlIDE3OmZvcig7bDwxNDspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHIubmxlbj0yNTcrKDMxJnUpLHU+Pj49NSxsLT01LHIubmRpc3Q9MSsoMzEmdSksdT4+Pj01LGwtPTUsci5uY29kZT00KygxNSZ1KSx1Pj4+PTQsbC09NCwyODY8ci5ubGVufHwzMDxyLm5kaXN0KXtlLm1zZz1cInRvbyBtYW55IGxlbmd0aCBvciBkaXN0YW5jZSBzeW1ib2xzXCIsci5tb2RlPTMwO2JyZWFrfXIuaGF2ZT0wLHIubW9kZT0xODtjYXNlIDE4OmZvcig7ci5oYXZlPHIubmNvZGU7KXtmb3IoO2w8Mzspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIubGVuc1tBW3IuaGF2ZSsrXV09NyZ1LHU+Pj49MyxsLT0zfWZvcig7ci5oYXZlPDE5OylyLmxlbnNbQVtyLmhhdmUrK11dPTA7aWYoci5sZW5jb2RlPXIubGVuZHluLHIubGVuYml0cz03LFM9e2JpdHM6ci5sZW5iaXRzfSx4PVQoMCxyLmxlbnMsMCwxOSxyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgY29kZSBsZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTk7Y2FzZSAxOTpmb3IoO3IuaGF2ZTxyLm5sZW4rci5uZGlzdDspe2Zvcig7Zz0oQz1yLmxlbmNvZGVbdSYoMTw8ci5sZW5iaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihiPDE2KXU+Pj49XyxsLT1fLHIubGVuc1tyLmhhdmUrK109YjtlbHNle2lmKDE2PT09Yil7Zm9yKHo9XysyO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHU+Pj49XyxsLT1fLDA9PT1yLmhhdmUpe2UubXNnPVwiaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdFwiLHIubW9kZT0zMDticmVha31rPXIubGVuc1tyLmhhdmUtMV0sZD0zKygzJnUpLHU+Pj49MixsLT0yfWVsc2UgaWYoMTc9PT1iKXtmb3Ioej1fKzM7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9bC09XyxrPTAsZD0zKyg3Jih1Pj4+PV8pKSx1Pj4+PTMsbC09M31lbHNle2Zvcih6PV8rNztsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1sLT1fLGs9MCxkPTExKygxMjcmKHU+Pj49XykpLHU+Pj49NyxsLT03fWlmKHIuaGF2ZStkPnIubmxlbityLm5kaXN0KXtlLm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9Zm9yKDtkLS07KXIubGVuc1tyLmhhdmUrK109a319aWYoMzA9PT1yLm1vZGUpYnJlYWs7aWYoMD09PXIubGVuc1syNTZdKXtlLm1zZz1cImludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9ja1wiLHIubW9kZT0zMDticmVha31pZihyLmxlbmJpdHM9OSxTPXtiaXRzOnIubGVuYml0c30seD1UKEQsci5sZW5zLDAsci5ubGVuLHIubGVuY29kZSwwLHIud29yayxTKSxyLmxlbmJpdHM9Uy5iaXRzLHgpe2UubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aHMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfWlmKHIuZGlzdGJpdHM9NixyLmRpc3Rjb2RlPXIuZGlzdGR5bixTPXtiaXRzOnIuZGlzdGJpdHN9LHg9VChGLHIubGVucyxyLm5sZW4sci5uZGlzdCxyLmRpc3Rjb2RlLDAsci53b3JrLFMpLHIuZGlzdGJpdHM9Uy5iaXRzLHgpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZXMgc2V0XCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubW9kZT0yMCw2PT09dClicmVhayBlO2Nhc2UgMjA6ci5tb2RlPTIxO2Nhc2UgMjE6aWYoNjw9byYmMjU4PD1oKXtlLm5leHRfb3V0PWEsZS5hdmFpbF9vdXQ9aCxlLm5leHRfaW49cyxlLmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsUihlLGMpLGE9ZS5uZXh0X291dCxpPWUub3V0cHV0LGg9ZS5hdmFpbF9vdXQscz1lLm5leHRfaW4sbj1lLmlucHV0LG89ZS5hdmFpbF9pbix1PXIuaG9sZCxsPXIuYml0cywxMj09PXIubW9kZSYmKHIuYmFjaz0tMSk7YnJlYWt9Zm9yKHIuYmFjaz0wO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoZyYmMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5sZW5jb2RlW3crKCh1JigxPDx2K3kpLTEpPj52KV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKHYrKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH11Pj4+PXYsbC09dixyLmJhY2srPXZ9aWYodT4+Pj1fLGwtPV8sci5iYWNrKz1fLHIubGVuZ3RoPWIsMD09PWcpe3IubW9kZT0yNjticmVha31pZigzMiZnKXtyLmJhY2s9LTEsci5tb2RlPTEyO2JyZWFrfWlmKDY0Jmcpe2UubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrfXIuZXh0cmE9MTUmZyxyLm1vZGU9MjI7Y2FzZSAyMjppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIubGVuZ3RoKz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1yLndhcz1yLmxlbmd0aCxyLm1vZGU9MjM7Y2FzZSAyMzpmb3IoO2c9KEM9ci5kaXN0Y29kZVt1JigxPDxyLmRpc3RiaXRzKS0xXSk+Pj4xNiYyNTUsYj02NTUzNSZDLCEoKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZigwPT0oMjQwJmcpKXtmb3Iodj1fLHk9Zyx3PWI7Zz0oQz1yLmRpc3Rjb2RlW3crKCh1JigxPDx2K3kpLTEpPj52KV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKHYrKF89Qz4+PjI0KTw9bCk7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH11Pj4+PXYsbC09dixyLmJhY2srPXZ9aWYodT4+Pj1fLGwtPV8sci5iYWNrKz1fLDY0Jmcpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrfXIub2Zmc2V0PWIsci5leHRyYT0xNSZnLHIubW9kZT0yNDtjYXNlIDI0OmlmKHIuZXh0cmEpe2Zvcih6PXIuZXh0cmE7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ci5vZmZzZXQrPXUmKDE8PHIuZXh0cmEpLTEsdT4+Pj1yLmV4dHJhLGwtPXIuZXh0cmEsci5iYWNrKz1yLmV4dHJhfWlmKHIub2Zmc2V0PnIuZG1heCl7ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVha31yLm1vZGU9MjU7Y2FzZSAyNTppZigwPT09aClicmVhayBlO2lmKGQ9Yy1oLHIub2Zmc2V0PmQpe2lmKChkPXIub2Zmc2V0LWQpPnIud2hhdmUmJnIuc2FuZSl7ZS5tc2c9XCJpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFja1wiLHIubW9kZT0zMDticmVha31wPWQ+ci53bmV4dD8oZC09ci53bmV4dCxyLndzaXplLWQpOnIud25leHQtZCxkPnIubGVuZ3RoJiYoZD1yLmxlbmd0aCksbT1yLndpbmRvd31lbHNlIG09aSxwPWEtci5vZmZzZXQsZD1yLmxlbmd0aDtmb3IoaDxkJiYoZD1oKSxoLT1kLHIubGVuZ3RoLT1kO2lbYSsrXT1tW3ArK10sLS1kOyk7MD09PXIubGVuZ3RoJiYoci5tb2RlPTIxKTticmVhaztjYXNlIDI2OmlmKDA9PT1oKWJyZWFrIGU7aVthKytdPXIubGVuZ3RoLGgtLSxyLm1vZGU9MjE7YnJlYWs7Y2FzZSAyNzppZihyLndyYXApe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHV8PW5bcysrXTw8bCxsKz04fWlmKGMtPWgsZS50b3RhbF9vdXQrPWMsci50b3RhbCs9YyxjJiYoZS5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLGksYyxhLWMpOk8oci5jaGVjayxpLGMsYS1jKSksYz1oLChyLmZsYWdzP3U6TCh1KSkhPT1yLmNoZWNrKXtlLm1zZz1cImluY29ycmVjdCBkYXRhIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yODtjYXNlIDI4OmlmKHIud3JhcCYmci5mbGFncyl7Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYodSE9PSg0Mjk0OTY3Mjk1JnIudG90YWwpKXtlLm1zZz1cImluY29ycmVjdCBsZW5ndGggY2hlY2tcIixyLm1vZGU9MzA7YnJlYWt9bD11PTB9ci5tb2RlPTI5O2Nhc2UgMjk6eD0xO2JyZWFrIGU7Y2FzZSAzMDp4PS0zO2JyZWFrIGU7Y2FzZSAzMTpyZXR1cm4tNDtjYXNlIDMyOmRlZmF1bHQ6cmV0dXJuIFV9cmV0dXJuIGUubmV4dF9vdXQ9YSxlLmF2YWlsX291dD1oLGUubmV4dF9pbj1zLGUuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwoci53c2l6ZXx8YyE9PWUuYXZhaWxfb3V0JiZyLm1vZGU8MzAmJihyLm1vZGU8Mjd8fDQhPT10KSkmJlooZSxlLm91dHB1dCxlLm5leHRfb3V0LGMtZS5hdmFpbF9vdXQpPyhyLm1vZGU9MzEsLTQpOihmLT1lLmF2YWlsX2luLGMtPWUuYXZhaWxfb3V0LGUudG90YWxfaW4rPWYsZS50b3RhbF9vdXQrPWMsci50b3RhbCs9YyxyLndyYXAmJmMmJihlLmFkbGVyPXIuY2hlY2s9ci5mbGFncz9CKHIuY2hlY2ssaSxjLGUubmV4dF9vdXQtYyk6TyhyLmNoZWNrLGksYyxlLm5leHRfb3V0LWMpKSxlLmRhdGFfdHlwZT1yLmJpdHMrKHIubGFzdD82NDowKSsoMTI9PT1yLm1vZGU/MTI4OjApKygyMD09PXIubW9kZXx8MTU9PT1yLm1vZGU/MjU2OjApLCgwPT1mJiYwPT09Y3x8ND09PXQpJiZ4PT09TiYmKHg9LTUpLHgpfSxyLmluZmxhdGVFbmQ9ZnVuY3Rpb24oZSl7aWYoIWV8fCFlLnN0YXRlKXJldHVybiBVO3ZhciB0PWUuc3RhdGU7cmV0dXJuIHQud2luZG93JiYodC53aW5kb3c9bnVsbCksZS5zdGF0ZT1udWxsLE59LHIuaW5mbGF0ZUdldEhlYWRlcj1mdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiBlJiZlLnN0YXRlPzA9PSgyJihyPWUuc3RhdGUpLndyYXApP1U6KChyLmhlYWQ9dCkuZG9uZT0hMSxOKTpVfSxyLmluZmxhdGVTZXREaWN0aW9uYXJ5PWZ1bmN0aW9uKGUsdCl7dmFyIHIsbj10Lmxlbmd0aDtyZXR1cm4gZSYmZS5zdGF0ZT8wIT09KHI9ZS5zdGF0ZSkud3JhcCYmMTEhPT1yLm1vZGU/VToxMT09PXIubW9kZSYmTygxLHQsbiwwKSE9PXIuY2hlY2s/LTM6WihlLHQsbixuKT8oci5tb2RlPTMxLC00KTooci5oYXZlZGljdD0xLE4pOlV9LHIuaW5mbGF0ZUluZm89XCJwYWtvIGluZmxhdGUgKGZyb20gTm9kZWNhIHByb2plY3QpXCJ9LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxLFwiLi9hZGxlcjMyXCI6NDMsXCIuL2NyYzMyXCI6NDUsXCIuL2luZmZhc3RcIjo0OCxcIi4vaW5mdHJlZXNcIjo1MH1dLDUwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEQ9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSxGPVszLDQsNSw2LDcsOCw5LDEwLDExLDEzLDE1LDE3LDE5LDIzLDI3LDMxLDM1LDQzLDUxLDU5LDY3LDgzLDk5LDExNSwxMzEsMTYzLDE5NSwyMjcsMjU4LDAsMF0sTj1bMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTYsMTcsMTcsMTcsMTcsMTgsMTgsMTgsMTgsMTksMTksMTksMTksMjAsMjAsMjAsMjAsMjEsMjEsMjEsMjEsMTYsNzIsNzhdLFU9WzEsMiwzLDQsNSw3LDksMTMsMTcsMjUsMzMsNDksNjUsOTcsMTI5LDE5MywyNTcsMzg1LDUxMyw3NjksMTAyNSwxNTM3LDIwNDksMzA3Myw0MDk3LDYxNDUsODE5MywxMjI4OSwxNjM4NSwyNDU3NywwLDBdLFA9WzE2LDE2LDE2LDE2LDE3LDE3LDE4LDE4LDE5LDE5LDIwLDIwLDIxLDIxLDIyLDIyLDIzLDIzLDI0LDI0LDI1LDI1LDI2LDI2LDI3LDI3LDI4LDI4LDI5LDI5LDY0LDY0XTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbixpLHMsYSxvKXt2YXIgaCx1LGwsZixjLGQscCxtLF8sZz1vLmJpdHMsYj0wLHY9MCx5PTAsdz0wLGs9MCx4PTAsUz0wLHo9MCxDPTAsRT0wLEE9bnVsbCxJPTAsTz1uZXcgRC5CdWYxNigxNiksQj1uZXcgRC5CdWYxNigxNiksUj1udWxsLFQ9MDtmb3IoYj0wO2I8PTE1O2IrKylPW2JdPTA7Zm9yKHY9MDt2PG47disrKU9bdFtyK3ZdXSsrO2ZvcihrPWcsdz0xNTsxPD13JiYwPT09T1t3XTt3LS0pO2lmKHc8ayYmKGs9dyksMD09PXcpcmV0dXJuIGlbcysrXT0yMDk3MTUyMCxpW3MrK109MjA5NzE1MjAsby5iaXRzPTEsMDtmb3IoeT0xO3k8dyYmMD09PU9beV07eSsrKTtmb3Ioazx5JiYoaz15KSxiPXo9MTtiPD0xNTtiKyspaWYoejw8PTEsKHotPU9bYl0pPDApcmV0dXJuLTE7aWYoMDx6JiYoMD09PWV8fDEhPT13KSlyZXR1cm4tMTtmb3IoQlsxXT0wLGI9MTtiPDE1O2IrKylCW2IrMV09QltiXStPW2JdO2Zvcih2PTA7djxuO3YrKykwIT09dFtyK3ZdJiYoYVtCW3Rbcit2XV0rK109dik7aWYoZD0wPT09ZT8oQT1SPWEsMTkpOjE9PT1lPyhBPUYsSS09MjU3LFI9TixULT0yNTcsMjU2KTooQT1VLFI9UCwtMSksYj15LGM9cyxTPXY9RT0wLGw9LTEsZj0oQz0xPDwoeD1rKSktMSwxPT09ZSYmODUyPEN8fDI9PT1lJiY1OTI8QylyZXR1cm4gMTtmb3IoOzspe2ZvcihwPWItUyxfPWFbdl08ZD8obT0wLGFbdl0pOmFbdl0+ZD8obT1SW1QrYVt2XV0sQVtJK2Fbdl1dKToobT05NiwwKSxoPTE8PGItUyx5PXU9MTw8eDtpW2MrKEU+PlMpKyh1LT1oKV09cDw8MjR8bTw8MTZ8X3wwLDAhPT11Oyk7Zm9yKGg9MTw8Yi0xO0UmaDspaD4+PTE7aWYoMCE9PWg/KEUmPWgtMSxFKz1oKTpFPTAsdisrLDA9PS0tT1tiXSl7aWYoYj09PXcpYnJlYWs7Yj10W3IrYVt2XV19aWYoazxiJiYoRSZmKSE9PWwpe2ZvcigwPT09UyYmKFM9ayksYys9eSx6PTE8PCh4PWItUyk7eCtTPHcmJiEoKHotPU9beCtTXSk8PTApOyl4Kyssejw8PTE7aWYoQys9MTw8eCwxPT09ZSYmODUyPEN8fDI9PT1lJiY1OTI8QylyZXR1cm4gMTtpW2w9RSZmXT1rPDwyNHx4PDwxNnxjLXN8MH19cmV0dXJuIDAhPT1FJiYoaVtjK0VdPWItUzw8MjR8NjQ8PDE2fDApLG8uYml0cz1rLDB9fSx7XCIuLi91dGlscy9jb21tb25cIjo0MX1dLDUxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPXsyOlwibmVlZCBkaWN0aW9uYXJ5XCIsMTpcInN0cmVhbSBlbmRcIiwwOlwiXCIsXCItMVwiOlwiZmlsZSBlcnJvclwiLFwiLTJcIjpcInN0cmVhbSBlcnJvclwiLFwiLTNcIjpcImRhdGEgZXJyb3JcIixcIi00XCI6XCJpbnN1ZmZpY2llbnQgbWVtb3J5XCIsXCItNVwiOlwiYnVmZmVyIGVycm9yXCIsXCItNlwiOlwiaW5jb21wYXRpYmxlIHZlcnNpb25cIn19LHt9XSw1MjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCIuLi91dGlscy9jb21tb25cIiksbz0wLGg9MTtmdW5jdGlvbiBuKGUpe2Zvcih2YXIgdD1lLmxlbmd0aDswPD0tLXQ7KWVbdF09MH12YXIgcz0wLGE9MjksdT0yNTYsbD11KzErYSxmPTMwLGM9MTksXz0yKmwrMSxnPTE1LGQ9MTYscD03LG09MjU2LGI9MTYsdj0xNyx5PTE4LHc9WzAsMCwwLDAsMCwwLDAsMCwxLDEsMSwxLDIsMiwyLDIsMywzLDMsMyw0LDQsNCw0LDUsNSw1LDUsMF0saz1bMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNiw3LDcsOCw4LDksOSwxMCwxMCwxMSwxMSwxMiwxMiwxMywxM10seD1bMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyLDMsN10sUz1bMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV0sej1uZXcgQXJyYXkoMioobCsyKSk7bih6KTt2YXIgQz1uZXcgQXJyYXkoMipmKTtuKEMpO3ZhciBFPW5ldyBBcnJheSg1MTIpO24oRSk7dmFyIEE9bmV3IEFycmF5KDI1Nik7bihBKTt2YXIgST1uZXcgQXJyYXkoYSk7bihJKTt2YXIgTyxCLFIsVD1uZXcgQXJyYXkoZik7ZnVuY3Rpb24gRChlLHQscixuLGkpe3RoaXMuc3RhdGljX3RyZWU9ZSx0aGlzLmV4dHJhX2JpdHM9dCx0aGlzLmV4dHJhX2Jhc2U9cix0aGlzLmVsZW1zPW4sdGhpcy5tYXhfbGVuZ3RoPWksdGhpcy5oYXNfc3RyZWU9ZSYmZS5sZW5ndGh9ZnVuY3Rpb24gRihlLHQpe3RoaXMuZHluX3RyZWU9ZSx0aGlzLm1heF9jb2RlPTAsdGhpcy5zdGF0X2Rlc2M9dH1mdW5jdGlvbiBOKGUpe3JldHVybiBlPDI1Nj9FW2VdOkVbMjU2KyhlPj4+NyldfWZ1bmN0aW9uIFUoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT0yNTUmdCxlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10Pj4+OCYyNTV9ZnVuY3Rpb24gUChlLHQscil7ZS5iaV92YWxpZD5kLXI/KGUuYmlfYnVmfD10PDxlLmJpX3ZhbGlkJjY1NTM1LFUoZSxlLmJpX2J1ZiksZS5iaV9idWY9dD4+ZC1lLmJpX3ZhbGlkLGUuYmlfdmFsaWQrPXItZCk6KGUuYmlfYnVmfD10PDxlLmJpX3ZhbGlkJjY1NTM1LGUuYmlfdmFsaWQrPXIpfWZ1bmN0aW9uIEwoZSx0LHIpe1AoZSxyWzIqdF0sclsyKnQrMV0pfWZ1bmN0aW9uIGooZSx0KXtmb3IodmFyIHI9MDtyfD0xJmUsZT4+Pj0xLHI8PD0xLDA8LS10Oyk7cmV0dXJuIHI+Pj4xfWZ1bmN0aW9uIFooZSx0LHIpe3ZhciBuLGkscz1uZXcgQXJyYXkoZysxKSxhPTA7Zm9yKG49MTtuPD1nO24rKylzW25dPWE9YStyW24tMV08PDE7Zm9yKGk9MDtpPD10O2krKyl7dmFyIG89ZVsyKmkrMV07MCE9PW8mJihlWzIqaV09aihzW29dKyssbykpfX1mdW5jdGlvbiBXKGUpe3ZhciB0O2Zvcih0PTA7dDxsO3QrKyllLmR5bl9sdHJlZVsyKnRdPTA7Zm9yKHQ9MDt0PGY7dCsrKWUuZHluX2R0cmVlWzIqdF09MDtmb3IodD0wO3Q8Yzt0KyspZS5ibF90cmVlWzIqdF09MDtlLmR5bl9sdHJlZVsyKm1dPTEsZS5vcHRfbGVuPWUuc3RhdGljX2xlbj0wLGUubGFzdF9saXQ9ZS5tYXRjaGVzPTB9ZnVuY3Rpb24gTShlKXs4PGUuYmlfdmFsaWQ/VShlLGUuYmlfYnVmKTowPGUuYmlfdmFsaWQmJihlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT1lLmJpX2J1ZiksZS5iaV9idWY9MCxlLmJpX3ZhbGlkPTB9ZnVuY3Rpb24gSChlLHQscixuKXt2YXIgaT0yKnQscz0yKnI7cmV0dXJuIGVbaV08ZVtzXXx8ZVtpXT09PWVbc10mJm5bdF08PW5bcl19ZnVuY3Rpb24gRyhlLHQscil7Zm9yKHZhciBuPWUuaGVhcFtyXSxpPXI8PDE7aTw9ZS5oZWFwX2xlbiYmKGk8ZS5oZWFwX2xlbiYmSCh0LGUuaGVhcFtpKzFdLGUuaGVhcFtpXSxlLmRlcHRoKSYmaSsrLCFIKHQsbixlLmhlYXBbaV0sZS5kZXB0aCkpOyllLmhlYXBbcl09ZS5oZWFwW2ldLHI9aSxpPDw9MTtlLmhlYXBbcl09bn1mdW5jdGlvbiBLKGUsdCxyKXt2YXIgbixpLHMsYSxvPTA7aWYoMCE9PWUubGFzdF9saXQpZm9yKDtuPWUucGVuZGluZ19idWZbZS5kX2J1ZisyKm9dPDw4fGUucGVuZGluZ19idWZbZS5kX2J1ZisyKm8rMV0saT1lLnBlbmRpbmdfYnVmW2UubF9idWYrb10sbysrLDA9PT1uP0woZSxpLHQpOihMKGUsKHM9QVtpXSkrdSsxLHQpLDAhPT0oYT13W3NdKSYmUChlLGktPUlbc10sYSksTChlLHM9TigtLW4pLHIpLDAhPT0oYT1rW3NdKSYmUChlLG4tPVRbc10sYSkpLG88ZS5sYXN0X2xpdDspO0woZSxtLHQpfWZ1bmN0aW9uIFkoZSx0KXt2YXIgcixuLGkscz10LmR5bl90cmVlLGE9dC5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsbz10LnN0YXRfZGVzYy5oYXNfc3RyZWUsaD10LnN0YXRfZGVzYy5lbGVtcyx1PS0xO2ZvcihlLmhlYXBfbGVuPTAsZS5oZWFwX21heD1fLHI9MDtyPGg7cisrKTAhPT1zWzIqcl0/KGUuaGVhcFsrK2UuaGVhcF9sZW5dPXU9cixlLmRlcHRoW3JdPTApOnNbMipyKzFdPTA7Zm9yKDtlLmhlYXBfbGVuPDI7KXNbMiooaT1lLmhlYXBbKytlLmhlYXBfbGVuXT11PDI/Kyt1OjApXT0xLGUuZGVwdGhbaV09MCxlLm9wdF9sZW4tLSxvJiYoZS5zdGF0aWNfbGVuLT1hWzIqaSsxXSk7Zm9yKHQubWF4X2NvZGU9dSxyPWUuaGVhcF9sZW4+PjE7MTw9cjtyLS0pRyhlLHMscik7Zm9yKGk9aDtyPWUuaGVhcFsxXSxlLmhlYXBbMV09ZS5oZWFwW2UuaGVhcF9sZW4tLV0sRyhlLHMsMSksbj1lLmhlYXBbMV0sZS5oZWFwWy0tZS5oZWFwX21heF09cixlLmhlYXBbLS1lLmhlYXBfbWF4XT1uLHNbMippXT1zWzIqcl0rc1syKm5dLGUuZGVwdGhbaV09KGUuZGVwdGhbcl0+PWUuZGVwdGhbbl0/ZS5kZXB0aFtyXTplLmRlcHRoW25dKSsxLHNbMipyKzFdPXNbMipuKzFdPWksZS5oZWFwWzFdPWkrKyxHKGUscywxKSwyPD1lLmhlYXBfbGVuOyk7ZS5oZWFwWy0tZS5oZWFwX21heF09ZS5oZWFwWzFdLGZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYSxvLGg9dC5keW5fdHJlZSx1PXQubWF4X2NvZGUsbD10LnN0YXRfZGVzYy5zdGF0aWNfdHJlZSxmPXQuc3RhdF9kZXNjLmhhc19zdHJlZSxjPXQuc3RhdF9kZXNjLmV4dHJhX2JpdHMsZD10LnN0YXRfZGVzYy5leHRyYV9iYXNlLHA9dC5zdGF0X2Rlc2MubWF4X2xlbmd0aCxtPTA7Zm9yKHM9MDtzPD1nO3MrKyllLmJsX2NvdW50W3NdPTA7Zm9yKGhbMiplLmhlYXBbZS5oZWFwX21heF0rMV09MCxyPWUuaGVhcF9tYXgrMTtyPF87cisrKXA8KHM9aFsyKmhbMioobj1lLmhlYXBbcl0pKzFdKzFdKzEpJiYocz1wLG0rKyksaFsyKm4rMV09cyx1PG58fChlLmJsX2NvdW50W3NdKyssYT0wLGQ8PW4mJihhPWNbbi1kXSksbz1oWzIqbl0sZS5vcHRfbGVuKz1vKihzK2EpLGYmJihlLnN0YXRpY19sZW4rPW8qKGxbMipuKzFdK2EpKSk7aWYoMCE9PW0pe2Rve2ZvcihzPXAtMTswPT09ZS5ibF9jb3VudFtzXTspcy0tO2UuYmxfY291bnRbc10tLSxlLmJsX2NvdW50W3MrMV0rPTIsZS5ibF9jb3VudFtwXS0tLG0tPTJ9d2hpbGUoMDxtKTtmb3Iocz1wOzAhPT1zO3MtLSlmb3Iobj1lLmJsX2NvdW50W3NdOzAhPT1uOyl1PChpPWUuaGVhcFstLXJdKXx8KGhbMippKzFdIT09cyYmKGUub3B0X2xlbis9KHMtaFsyKmkrMV0pKmhbMippXSxoWzIqaSsxXT1zKSxuLS0pfX0oZSx0KSxaKHMsdSxlLmJsX2NvdW50KX1mdW5jdGlvbiBYKGUsdCxyKXt2YXIgbixpLHM9LTEsYT10WzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9MyksdFsyKihyKzEpKzFdPTY1NTM1LG49MDtuPD1yO24rKylpPWEsYT10WzIqKG4rMSkrMV0sKytvPGgmJmk9PT1hfHwobzx1P2UuYmxfdHJlZVsyKmldKz1vOjAhPT1pPyhpIT09cyYmZS5ibF90cmVlWzIqaV0rKyxlLmJsX3RyZWVbMipiXSsrKTpvPD0xMD9lLmJsX3RyZWVbMip2XSsrOmUuYmxfdHJlZVsyKnldKysscz1pLHU9KG89MCk9PT1hPyhoPTEzOCwzKTppPT09YT8oaD02LDMpOihoPTcsNCkpfWZ1bmN0aW9uIFYoZSx0LHIpe3ZhciBuLGkscz0tMSxhPXRbMV0sbz0wLGg9Nyx1PTQ7Zm9yKDA9PT1hJiYoaD0xMzgsdT0zKSxuPTA7bjw9cjtuKyspaWYoaT1hLGE9dFsyKihuKzEpKzFdLCEoKytvPGgmJmk9PT1hKSl7aWYobzx1KWZvcig7TChlLGksZS5ibF90cmVlKSwwIT0tLW87KTtlbHNlIDAhPT1pPyhpIT09cyYmKEwoZSxpLGUuYmxfdHJlZSksby0tKSxMKGUsYixlLmJsX3RyZWUpLFAoZSxvLTMsMikpOm88PTEwPyhMKGUsdixlLmJsX3RyZWUpLFAoZSxvLTMsMykpOihMKGUseSxlLmJsX3RyZWUpLFAoZSxvLTExLDcpKTtzPWksdT0obz0wKT09PWE/KGg9MTM4LDMpOmk9PT1hPyhoPTYsMyk6KGg9Nyw0KX19bihUKTt2YXIgcT0hMTtmdW5jdGlvbiBKKGUsdCxyLG4pe1AoZSwoczw8MSkrKG4/MTowKSwzKSxmdW5jdGlvbihlLHQscixuKXtNKGUpLG4mJihVKGUsciksVShlLH5yKSksaS5hcnJheVNldChlLnBlbmRpbmdfYnVmLGUud2luZG93LHQscixlLnBlbmRpbmcpLGUucGVuZGluZys9cn0oZSx0LHIsITApfXIuX3RyX2luaXQ9ZnVuY3Rpb24oZSl7cXx8KGZ1bmN0aW9uKCl7dmFyIGUsdCxyLG4saSxzPW5ldyBBcnJheShnKzEpO2ZvcihuPXI9MDtuPGEtMTtuKyspZm9yKElbbl09cixlPTA7ZTwxPDx3W25dO2UrKylBW3IrK109bjtmb3IoQVtyLTFdPW4sbj1pPTA7bjwxNjtuKyspZm9yKFRbbl09aSxlPTA7ZTwxPDxrW25dO2UrKylFW2krK109bjtmb3IoaT4+PTc7bjxmO24rKylmb3IoVFtuXT1pPDw3LGU9MDtlPDE8PGtbbl0tNztlKyspRVsyNTYraSsrXT1uO2Zvcih0PTA7dDw9Zzt0Kyspc1t0XT0wO2ZvcihlPTA7ZTw9MTQzOyl6WzIqZSsxXT04LGUrKyxzWzhdKys7Zm9yKDtlPD0yNTU7KXpbMiplKzFdPTksZSsrLHNbOV0rKztmb3IoO2U8PTI3OTspelsyKmUrMV09NyxlKyssc1s3XSsrO2Zvcig7ZTw9Mjg3Oyl6WzIqZSsxXT04LGUrKyxzWzhdKys7Zm9yKFooeixsKzEscyksZT0wO2U8ZjtlKyspQ1syKmUrMV09NSxDWzIqZV09aihlLDUpO089bmV3IEQoeix3LHUrMSxsLGcpLEI9bmV3IEQoQyxrLDAsZixnKSxSPW5ldyBEKG5ldyBBcnJheSgwKSx4LDAsYyxwKX0oKSxxPSEwKSxlLmxfZGVzYz1uZXcgRihlLmR5bl9sdHJlZSxPKSxlLmRfZGVzYz1uZXcgRihlLmR5bl9kdHJlZSxCKSxlLmJsX2Rlc2M9bmV3IEYoZS5ibF90cmVlLFIpLGUuYmlfYnVmPTAsZS5iaV92YWxpZD0wLFcoZSl9LHIuX3RyX3N0b3JlZF9ibG9jaz1KLHIuX3RyX2ZsdXNoX2Jsb2NrPWZ1bmN0aW9uKGUsdCxyLG4pe3ZhciBpLHMsYT0wOzA8ZS5sZXZlbD8oMj09PWUuc3RybS5kYXRhX3R5cGUmJihlLnN0cm0uZGF0YV90eXBlPWZ1bmN0aW9uKGUpe3ZhciB0LHI9NDA5MzYyNDQ0Nztmb3IodD0wO3Q8PTMxO3QrKyxyPj4+PTEpaWYoMSZyJiYwIT09ZS5keW5fbHRyZWVbMip0XSlyZXR1cm4gbztpZigwIT09ZS5keW5fbHRyZWVbMThdfHwwIT09ZS5keW5fbHRyZWVbMjBdfHwwIT09ZS5keW5fbHRyZWVbMjZdKXJldHVybiBoO2Zvcih0PTMyO3Q8dTt0KyspaWYoMCE9PWUuZHluX2x0cmVlWzIqdF0pcmV0dXJuIGg7cmV0dXJuIG99KGUpKSxZKGUsZS5sX2Rlc2MpLFkoZSxlLmRfZGVzYyksYT1mdW5jdGlvbihlKXt2YXIgdDtmb3IoWChlLGUuZHluX2x0cmVlLGUubF9kZXNjLm1heF9jb2RlKSxYKGUsZS5keW5fZHRyZWUsZS5kX2Rlc2MubWF4X2NvZGUpLFkoZSxlLmJsX2Rlc2MpLHQ9Yy0xOzM8PXQmJjA9PT1lLmJsX3RyZWVbMipTW3RdKzFdO3QtLSk7cmV0dXJuIGUub3B0X2xlbis9MyoodCsxKSs1KzUrNCx0fShlKSxpPWUub3B0X2xlbiszKzc+Pj4zLChzPWUuc3RhdGljX2xlbiszKzc+Pj4zKTw9aSYmKGk9cykpOmk9cz1yKzUscis0PD1pJiYtMSE9PXQ/SihlLHQscixuKTo0PT09ZS5zdHJhdGVneXx8cz09PWk/KFAoZSwyKyhuPzE6MCksMyksSyhlLHosQykpOihQKGUsNCsobj8xOjApLDMpLGZ1bmN0aW9uKGUsdCxyLG4pe3ZhciBpO2ZvcihQKGUsdC0yNTcsNSksUChlLHItMSw1KSxQKGUsbi00LDQpLGk9MDtpPG47aSsrKVAoZSxlLmJsX3RyZWVbMipTW2ldKzFdLDMpO1YoZSxlLmR5bl9sdHJlZSx0LTEpLFYoZSxlLmR5bl9kdHJlZSxyLTEpfShlLGUubF9kZXNjLm1heF9jb2RlKzEsZS5kX2Rlc2MubWF4X2NvZGUrMSxhKzEpLEsoZSxlLmR5bl9sdHJlZSxlLmR5bl9kdHJlZSkpLFcoZSksbiYmTShlKX0sci5fdHJfdGFsbHk9ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlLnBlbmRpbmdfYnVmW2UuZF9idWYrMiplLmxhc3RfbGl0XT10Pj4+OCYyNTUsZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqZS5sYXN0X2xpdCsxXT0yNTUmdCxlLnBlbmRpbmdfYnVmW2UubF9idWYrZS5sYXN0X2xpdF09MjU1JnIsZS5sYXN0X2xpdCsrLDA9PT10P2UuZHluX2x0cmVlWzIqcl0rKzooZS5tYXRjaGVzKyssdC0tLGUuZHluX2x0cmVlWzIqKEFbcl0rdSsxKV0rKyxlLmR5bl9kdHJlZVsyKk4odCldKyspLGUubGFzdF9saXQ9PT1lLmxpdF9idWZzaXplLTF9LHIuX3RyX2FsaWduPWZ1bmN0aW9uKGUpe1AoZSwyLDMpLEwoZSxtLHopLGZ1bmN0aW9uKGUpezE2PT09ZS5iaV92YWxpZD8oVShlLGUuYmlfYnVmKSxlLmJpX2J1Zj0wLGUuYmlfdmFsaWQ9MCk6ODw9ZS5iaV92YWxpZCYmKGUucGVuZGluZ19idWZbZS5wZW5kaW5nKytdPTI1NSZlLmJpX2J1ZixlLmJpX2J1Zj4+PTgsZS5iaV92YWxpZC09OCl9KGUpfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMuaW5wdXQ9bnVsbCx0aGlzLm5leHRfaW49MCx0aGlzLmF2YWlsX2luPTAsdGhpcy50b3RhbF9pbj0wLHRoaXMub3V0cHV0PW51bGwsdGhpcy5uZXh0X291dD0wLHRoaXMuYXZhaWxfb3V0PTAsdGhpcy50b3RhbF9vdXQ9MCx0aGlzLm1zZz1cIlwiLHRoaXMuc3RhdGU9bnVsbCx0aGlzLmRhdGFfdHlwZT0yLHRoaXMuYWRsZXI9MH19LHt9XSw1NDpbZnVuY3Rpb24oZSx0LHIpeyhmdW5jdGlvbihlKXshZnVuY3Rpb24ocixuKXtcInVzZSBzdHJpY3RcIjtpZighci5zZXRJbW1lZGlhdGUpe3ZhciBpLHMsdCxhLG89MSxoPXt9LHU9ITEsbD1yLmRvY3VtZW50LGU9T2JqZWN0LmdldFByb3RvdHlwZU9mJiZPYmplY3QuZ2V0UHJvdG90eXBlT2Yocik7ZT1lJiZlLnNldFRpbWVvdXQ/ZTpyLGk9XCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHIucHJvY2Vzcyk/ZnVuY3Rpb24oZSl7cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpe2MoZSl9KX06ZnVuY3Rpb24oKXtpZihyLnBvc3RNZXNzYWdlJiYhci5pbXBvcnRTY3JpcHRzKXt2YXIgZT0hMCx0PXIub25tZXNzYWdlO3JldHVybiByLm9ubWVzc2FnZT1mdW5jdGlvbigpe2U9ITF9LHIucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksci5vbm1lc3NhZ2U9dCxlfX0oKT8oYT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLHIuYWRkRXZlbnRMaXN0ZW5lcj9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZCwhMSk6ci5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLGQpLGZ1bmN0aW9uKGUpe3IucG9zdE1lc3NhZ2UoYStlLFwiKlwiKX0pOnIuTWVzc2FnZUNoYW5uZWw/KCh0PW5ldyBNZXNzYWdlQ2hhbm5lbCkucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKGUpe2MoZS5kYXRhKX0sZnVuY3Rpb24oZSl7dC5wb3J0Mi5wb3N0TWVzc2FnZShlKX0pOmwmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiBsLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/KHM9bC5kb2N1bWVudEVsZW1lbnQsZnVuY3Rpb24oZSl7dmFyIHQ9bC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7YyhlKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLHMucmVtb3ZlQ2hpbGQodCksdD1udWxsfSxzLmFwcGVuZENoaWxkKHQpfSk6ZnVuY3Rpb24oZSl7c2V0VGltZW91dChjLDAsZSl9LGUuc2V0SW1tZWRpYXRlPWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJihlPW5ldyBGdW5jdGlvbihcIlwiK2UpKTtmb3IodmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSkscj0wO3I8dC5sZW5ndGg7cisrKXRbcl09YXJndW1lbnRzW3IrMV07dmFyIG49e2NhbGxiYWNrOmUsYXJnczp0fTtyZXR1cm4gaFtvXT1uLGkobyksbysrfSxlLmNsZWFySW1tZWRpYXRlPWZ9ZnVuY3Rpb24gZihlKXtkZWxldGUgaFtlXX1mdW5jdGlvbiBjKGUpe2lmKHUpc2V0VGltZW91dChjLDAsZSk7ZWxzZXt2YXIgdD1oW2VdO2lmKHQpe3U9ITA7dHJ5eyFmdW5jdGlvbihlKXt2YXIgdD1lLmNhbGxiYWNrLHI9ZS5hcmdzO3N3aXRjaChyLmxlbmd0aCl7Y2FzZSAwOnQoKTticmVhaztjYXNlIDE6dChyWzBdKTticmVhaztjYXNlIDI6dChyWzBdLHJbMV0pO2JyZWFrO2Nhc2UgMzp0KHJbMF0sclsxXSxyWzJdKTticmVhaztkZWZhdWx0OnQuYXBwbHkobixyKX19KHQpfWZpbmFsbHl7ZihlKSx1PSExfX19fWZ1bmN0aW9uIGQoZSl7ZS5zb3VyY2U9PT1yJiZcInN0cmluZ1wiPT10eXBlb2YgZS5kYXRhJiYwPT09ZS5kYXRhLmluZGV4T2YoYSkmJmMoK2UuZGF0YS5zbGljZShhLmxlbmd0aCkpfX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09ZT90aGlzOmU6c2VsZil9KS5jYWxsKHRoaXMsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSl9LHt9XX0se30sWzEwXSkoMTApfSk7IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBuYXYsIHJlZmluZW1lbnRfb3B0aW9uLCByZWNpcGVzIH0gZnJvbSAnLi9yZWNpcGVfbmV3J1xuaW1wb3J0IEpTWmlwIGZyb20gJ2pzemlwJ1xuaW1wb3J0IHsgdXBkYXRlX2ljb24gfSBmcm9tICcuL3V0aWxzL3V0aWwnXG5sZXQgaW50ZXJhY3Rpb25zOiBhbnlbXSA9IFtdXG5sZXQgc2NyZWVuc2hvdHM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtdXG5sZXQgcmVhc29uc0Fubm90YXRpb246IGFueVtdID0gW11cbmxldCBhY3Rpb25TZXF1ZW5jZUlkID0gMFxubGV0IHVwbG9hZFRpbWVyOiBOb2RlSlMuVGltZXIgfCBudWxsIHwgZmFsc2UgPSBudWxsXG5sZXQgdXNlcklkOiBzdHJpbmcgPSAnJ1xuXG5sZXQgbGFzdFRpbWVzdGFtcDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbmxldCBsYXN0dXBsb2FkVGltZXN0YW1wOiBzdHJpbmcgfCBudWxsID0gbnVsbFxubGV0IGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZToge1xuICB1cmw6IHN0cmluZ1xuICBmaWVsZHM6IHsga2V5OiBzdHJpbmc7IEFXU0FjY2Vzc0tleUlkOiBzdHJpbmc7IHBvbGljeTogc3RyaW5nOyBzaWduYXR1cmU6IHN0cmluZyB9XG4gIHRpbWVzdGFtcDogbnVtYmVyXG59IHwgbnVsbCA9IG51bGxcblxuaW1wb3J0IHtcbiAgcG9wdXBfcHJvYmFiaWxpdHksXG4gIGZvbGRlcl9uYW1lLFxuICB6aXAsXG4gIGJhc2VfdXJsLFxuICBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQsXG4gIHVybF9pbmNsdWRlLFxuICBmaWx0ZXJfdXJsXG59IGZyb20gJy4vY29uZmlnJ1xuXG5jb25zdCB1cGxvYWRfdXJsID0gYCR7YmFzZV91cmx9L3VwbG9hZGBcbmNvbnN0IGludGVyYWN0aW9uc191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYFxuY29uc3QgZ2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RfdXJsID0gYCR7YmFzZV91cmx9L2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0YFxuXG5pbnRlcmZhY2UgVGFiSGlzdG9yeSB7XG4gIGJhY2tTdGFjazogc3RyaW5nW11cbiAgZm9yd2FyZFN0YWNrOiBzdHJpbmdbXVxuICBjdXJyZW50VXJsOiBzdHJpbmcgfCBudWxsXG59XG5cbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5OiB7XG4gIFt0YWJJZDogbnVtYmVyXTogVGFiSGlzdG9yeVxufSA9IHt9XG5cbmZ1bmN0aW9uIGFuYWx5emVOYXZpZ2F0aW9uKHRhYklkOiBudW1iZXIsIHVybDogc3RyaW5nKTogJ25ldycgfCAnYmFjaycgfCAnZm9yd2FyZCcgfCAncmVsb2FkJyB7XG4gIGlmICghdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdKSB7XG4gICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGlzdG9yeSA9IHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXVxuXG4gIGlmICghaGlzdG9yeS5jdXJyZW50VXJsKSB7XG4gICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsXG4gICAgcmV0dXJuICduZXcnXG4gIH1cbiAgaWYgKGhpc3RvcnkuY3VycmVudFVybCA9PT0gdXJsKSB7XG4gICAgcmV0dXJuICdyZWxvYWQnXG4gIH1cblxuICBpZiAoaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoID4gMCAmJiBoaXN0b3J5LmJhY2tTdGFja1toaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsKSB7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwhKVxuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuYmFja1N0YWNrLnBvcCgpIVxuICAgIHJldHVybiAnYmFjaydcbiAgfVxuXG4gIGlmIChcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggPiAwICYmXG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybFxuICApIHtcbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCEpXG4gICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5mb3J3YXJkU3RhY2sucG9wKCkhXG4gICAgcmV0dXJuICdmb3J3YXJkJ1xuICB9XG5cbiAgaGlzdG9yeS5iYWNrU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwhKVxuICBoaXN0b3J5LmZvcndhcmRTdGFjayA9IFtdXG4gIGhpc3RvcnkuY3VycmVudFVybCA9IHVybFxuICByZXR1cm4gJ25ldydcbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5mdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGU6IHN0cmluZywgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlICdjbGlja19hJzpcbiAgICBjYXNlICdjbGlja19iJzpcbiAgICBjYXNlICdjbGlja19jJzpcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICBpZiAoZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdycpIHtcbiAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgY2hvb3NlICdTZXQgVXAgTm93JyBpbnN0ZWFkIG9mIGJ1eSBvbmNlLCBhbmQgd2h5IGRvIHlvdSBsaWtlIHRoaXMgcGFydGljdWxhciBwcm9kdWN0P1wiXG4gICAgICB9IGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgY2hvb3NlIHRvIGJ1eSB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHksIGFuZCB3aGF0IGNvbnZpbmNlZCB5b3UgdG8gc2tpcCBmdXJ0aGVyIGV4cGxvcmF0aW9uIG9mIG90aGVyIG9wdGlvbnM/IFdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD8nXG4gICAgICB9IGVsc2UgaWYgKGRhdGEudGFyZ2V0LmNsYXNzTmFtZT8uaW5jbHVkZXMoJ3NjLXByb2R1Y3QtbGluaycpKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBtYWRlIHlvdSBjbGljayBvbiB0aGlzIHByb2R1Y3QsIGFuZCB3aGF0IHNwZWNpZmljIGFzcGVjdHMgYXR0cmFjdGVkIHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIG90aGVyIHNlYXJjaCByZXN1bHRzPydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGFkZCB0aGlzIGl0ZW0gdG8geW91ciBjYXJ0LCBhbmQgYXJlIHlvdSBwbGFubmluZyB0byBidXkgaXQgbm93IG9yIGxhdGVyPyBXaGF0IGNvbnZpbmNlZCB5b3UgdGhhdCB0aGlzIGl0ZW0gd2FzIHRoZSByaWdodCBjaG9pY2UgZm9yIHlvdXIgbmVlZHM/J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IHdhcyB5b3VyIHJlYXNvbiBmb3IgY2xpY2tpbmcgb24gdGhpcyBlbGVtZW50PydcbiAgICAgIH1cbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3UgZG9pbmcgd2hpbGUgc2Nyb2xsaW5n4oCUYXJlIHlvdSBicm93c2luZyBzZWFyY2ggcmVzdWx0cywgbG9va2luZyBhdCByZXZpZXdzLCBvciBzb21ldGhpbmcgZWxzZSwgYW5kIHdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZD8nXG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciwgYW5kIGhvdyBkaWQgeW91IGRlY2lkZSBvbiB0aGUgc2VhcmNoIHRlcm1zIHlvdSB1c2VkPyBBcmUgeW91IGxvb2tpbmcgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdCwgYnJhbmQsIG9yIGZlYXR1cmU/J1xuICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBnbyBiYWNrIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBhbmQgd2hhdCB3ZXJlIHlvdSBob3BpbmcgdG8gcmV2aXNpdCBvciByZWNvbnNpZGVyPydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIHJldHVybiB0byB0aGlzIHBhZ2UgYWZ0ZXIgcHJldmlvdXNseSBuYXZpZ2F0aW5nIGF3YXksIGFuZCB3aGF0IG5ldyBvciB1bnJlc29sdmVkIGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3Igbm93PydcbiAgICAgIH1cbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzICR7ZGF0YS5uYXZpZ2F0aW9uVHlwZX0gbmF2aWdhdGlvbj9gXG4gICAgY2FzZSAndGFiQWN0aXZhdGUnOlxuICAgICAgcmV0dXJuIGBXaHkgZGlkIHlvdSBzd2l0Y2ggdG8gdGhpcyB0YWI/IERvIHlvdSBoYXZlIHNwZWNpZmljIHRhc2sgb3IgaW5mb3JtYXRpb24gaW4gbWluZD9gXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gIH1cbn1cblxuLy8gQWRkIG5ldyBmdW5jdGlvbiB0byBoYW5kbGUgc2NyZWVuc2hvdCBzYXZpbmdcbmFzeW5jIGZ1bmN0aW9uIHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmw6IHN0cmluZywgc2NyZWVuc2hvdElkOiBzdHJpbmcpIHtcbiAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIHNjcmVlbnNob3RzIGZyb20gc3RvcmFnZVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHJlc3VsdC5zY3JlZW5zaG90cyB8fCBbXVxuXG4gICAgLy8gQWRkIG5ldyBzY3JlZW5zaG90XG4gICAgc3RvcmVTY3JlZW5zaG90cy5wdXNoKFtzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkXSlcblxuICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2NyZWVuc2hvdHM6IHN0b3JlU2NyZWVuc2hvdHMgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIDsoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NhdmVEYXRhJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrXG4gICAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50YWN0aW9uU2VxdWVuY2VJZClcbiAgICAgICAgLy8gbWVzc2FnZS5kYXRhLmFjdGlvblNlcXVlbmNlSWQgPSBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZFxuICAgICAgICBjb25zdCB1dWlkID0gbWVzc2FnZS5kYXRhLnV1aWRcbiAgICAgICAgY29uc3Qgc2F2ZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVEYXRhICcsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUpXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgICAgICAgcmVzdWx0LnB1c2gobWVzc2FnZS5kYXRhKVxuICAgICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogcmVzdWx0IH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gcG9wdXBcbiAgICAgICAgLy8gYXdhaXQgc2VuZFBvcHVwKHNlbmRlci50YWI/LmlkLCBtZXNzYWdlLmRhdGEudGltZXN0YW1wLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgc2F2ZURhdGEoKSxcbiAgICAgICAgICBzZW5kUG9wdXAoXG4gICAgICAgICAgICBzZW5kZXIudGFiPy5pZCxcbiAgICAgICAgICAgIG1lc3NhZ2UuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLFxuICAgICAgICAgICAgLy8gY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEsXG4gICAgICAgICAgICB1dWlkXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzYXZlRGF0YTonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlIC8vIEtlZXAgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgfVxuXG4gICAgLy8gQ2FwdHVyZSBzY3JlZW5zaG90IG9uIGRlbWFuZFxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NhcHR1cmVTY3JlZW5zaG90Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBzY3JlZW5zaG90IHJlcXVlc3QnKVxuICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KClcbiAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmwsIG1lc3NhZ2Uuc2NyZWVuc2hvdElkKVxuICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogc3VjY2VzcyA/IHVuZGVmaW5lZCA6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjYXB0dXJlU2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBEb3dubG9hZCBkYXRhIG9uIHVzZXIgcmVxdWVzdFxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2Rvd25sb2FkRGF0YScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZERhdGEnKVxuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgZG93bmxvYWREYXRhTG9jYWxseSgpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3MgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjbGVhck1lbW9yeUNhY2hlJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW50ZXJhY3Rpb25zID0gW11cbiAgICAgICAgc2NyZWVuc2hvdHMgPSBbXVxuICAgICAgICByZWFzb25zQW5ub3RhdGlvbiA9IFtdXG4gICAgICAgIGFjdGlvblNlcXVlbmNlSWQgPSAwXG4gICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDBcbiAgICAgICAgcmVhc29uc0Fubm90YXRpb24ubGVuZ3RoID0gMFxuXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGNsZWFyTWVtb3J5Q2FjaGU6JywgZXJyb3IpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRSZWNpcGUnICYmIHNlbmRlci50YWI/LmlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxlY3RSZWNpcGUoc2VuZGVyLnRhYi5pZCwgbWVzc2FnZS51cmwpXG4gICAgICAgICAgLnRoZW4oKHJlY2lwZSkgPT4ge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgcmVjaXBlOiByZWNpcGUgfSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pXG4gICAgICAgICAgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGdldFJlY2lwZTonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlIC8vIEluZGljYXRlIHRoYXQgc2VuZFJlc3BvbnNlIHdpbGwgYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgfVxuICB9KSgpXG4gIHJldHVybiB0cnVlIC8vIEtlZXBzIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VzXG59KVxuXG4vLyBDYXB0dXJlIHRoZSBzY3JlZW5zaG90IGluIHRoZSBjdXJyZW50IHRhYlxuYXN5bmMgZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgW3RhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KVxuICAgIGlmICh0YWIpIHtcbiAgICAgIHJldHVybiBhd2FpdCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHtcbiAgICAgICAgZm9ybWF0OiAnanBlZycsXG4gICAgICAgIHF1YWxpdHk6IDI1XG4gICAgICB9KVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuY29uc3Qgc2F2ZUhUTUwgPSBhc3luYyAoaHRtbENvbnRlbnQ6IHN0cmluZywgY3VycmVudFNuYXBzaG90SWQ6IHN0cmluZykgPT4ge1xuICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czoge30gfSlcbiAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9XG4gIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gaHRtbENvbnRlbnRcbiAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KVxufVxuXG5jb25zdCBzYXZlSW50ZXJhY3Rpb24gPSBhc3luYyAoXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgdGFyZ2V0X3VybDogc3RyaW5nLFxuICBodG1sU25hcHNob3RJZDogc3RyaW5nLFxuICBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZDogbnVtYmVyLFxuICB1dWlkOiBzdHJpbmcsXG4gIG5hdmlnYXRpb25UeXBlOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgcGFnZU1ldGE6IHN0cmluZyB8IG51bGwgPSBudWxsXG4pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBldmVudFR5cGUsXG4gICAgdGltZXN0YW1wLFxuICAgIHRhcmdldF91cmwsXG4gICAgaHRtbFNuYXBzaG90SWQsXG4gICAgLy8gYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgdXVpZCxcbiAgICBwYWdlTWV0YVxuICB9XG5cbiAgLy8gQWRkIG5hdmlnYXRpb25UeXBlIG9ubHkgaWYgaXQgZXhpc3RzXG4gIGlmIChuYXZpZ2F0aW9uVHlwZSkge1xuICAgIGRhdGFbJ25hdmlnYXRpb25UeXBlJ10gPSBuYXZpZ2F0aW9uVHlwZVxuICB9XG5cbiAgbGV0IGludGVyYWN0aW9ucyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3Rpb25zLmludGVyYWN0aW9ucyB8fCBbXVxuICBzdG9yZUludGVyYWN0aW9ucy5wdXNoKGRhdGEpXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSlcbn1cblxuY29uc3Qgc2F2ZVNjcmVlbnNob3QgPSBhc3luYyAod2luZG93SWQ6IG51bWJlciwgdGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IGF3YWl0IGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHdpbmRvd0lkLCB7XG4gICAgZm9ybWF0OiAnanBlZycsXG4gICAgcXVhbGl0eTogMjVcbiAgfSlcblxuICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbiAgYXdhaXQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKVxufVxuY29uc3Qgc2VuZFBvcHVwID0gYXN5bmMgKFxuICB0YWJJZDogbnVtYmVyLFxuICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gIC8vIGFjdGlvbl91dWlkOiBzdHJpbmcsXG4gIGRhdGE6IGFueSxcbiAgdXVpZDogc3RyaW5nXG4pID0+IHtcbiAgaWYgKFxuICAgIGRhdGEudGFyZ2V0Py5pZD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncnVmdXMnKSB8fFxuICAgIGRhdGEudGFyZ2V0Py5jbGFzc05hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3J1ZnVzJylcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgcXVlc3Rpb24gPSBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGUsIGRhdGEpXG4gIGlmIChNYXRoLnJhbmRvbSgpIDwgcG9wdXBfcHJvYmFiaWxpdHkgJiYgdGFiSWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVhc29uID0gYXdhaXQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgYWN0aW9uOiAnc2hvd19wb3B1cCcsXG4gICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblxuICAgICAgfSlcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgYWN0aW9uX3V1aWQ6IHV1aWQsXG4gICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgcmVhc29uOiByZWFzb25cbiAgICAgICAgICAvLyB1dWlkOiB1dWlkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHJlc3VsdC5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuICAgICAgICAvLyBBZGQgbmV3IHJlYXNvblxuICAgICAgICBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLnB1c2gobmV3aXRlbSlcbiAgICAgICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVhc29uc0Fubm90YXRpb246IHN0b3JlUmVhc29uc0Fubm90YXRpb24gfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9wdXA6JywgZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhc3luYyAoYWN0aXZlSW5mbykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRhYklkID0gYWN0aXZlSW5mby50YWJJZFxuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmdldCh0YWJJZClcbiAgICBpZiAoIXRhYikge1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBTd2l0Y2hlZCB0byB0YWIgJHt0YWJJZH0gd2l0aCBVUkw6ICR7dGFiLnVybH1gKVxuICAgIHVwZGF0ZV9pY29uKHRhYi51cmwpXG4gICAgaWYgKFxuICAgICAgdGFiLnVybCAmJlxuICAgICAgdGFiLnVybC5pbmNsdWRlcyh1cmxfaW5jbHVkZSkgJiZcbiAgICAgICFmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHRhYi51cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gICAgKSB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKHRhYi51cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogJ2dldEhUTUwnIH0sIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlPy5odG1sXG4gICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gcmVzcG9uc2U/LnBhZ2VNZXRhXG4gICAgICAgIGFjdGlvblNlcXVlbmNlSWQrK1xuICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWRcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICBzYXZlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAndGFiQWN0aXZhdGUnLFxuICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgdGFiLnVybCxcbiAgICAgICAgICAgIGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgICAgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICB1dWlkLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHBhZ2VNZXRhXG4gICAgICAgICAgKSxcbiAgICAgICAgICBzYXZlU2NyZWVuc2hvdCh0YWIud2luZG93SWQsIHRpbWVzdGFtcCwgdXVpZCksXG4gICAgICAgICAgc2VuZFBvcHVwKHRhYklkLCB0aW1lc3RhbXAsICd0YWJBY3RpdmF0ZScsIHt9LCB1dWlkKVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdGFiIGFjdGl2YXRlIGhhbmRsZXI6JywgZXJyb3IpXG4gIH1cbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdFJlY2lwZSh0YWJJZDogbnVtYmVyLCB1cmw6IHN0cmluZykge1xuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybClcbiAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuXG4gIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgJ3RleHQnXG5cbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IFt7IHJlc3VsdDogaGFzTWF0Y2ggfV0gPSBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgIGZ1bmM6IChzZWxlY3RvciwgbWF0Y2hUZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgKCFtYXRjaFRleHQgfHxcbiAgICAgICAgICAgICAgICAoZWxlbWVudC50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaFRleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXJnczogW3JlY2lwZS5tYXRjaCwgcmVjaXBlLm1hdGNoX3RleHQgfHwgJyddXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgcmV0dXJuIHJlY2lwZVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YClcbn1cblxuY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKGRldGFpbHMpID0+IHtcbiAgaWYgKGRldGFpbHMuZnJhbWVJZCAhPT0gMCkgcmV0dXJuXG4gIGNvbnNvbGUubG9nKCd3ZWJOYXZpZ2F0aW9uIG9uQ29tcGxldGVkIGV2ZW50IHRyaWdnZXJlZDonLCBkZXRhaWxzKVxuICB1cGRhdGVfaWNvbihkZXRhaWxzLnVybClcbiAgaWYgKFxuICAgIGRldGFpbHMudXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSAmJlxuICAgICFmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IGRldGFpbHMudXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICApIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKVxuICAgIGNvbnNvbGUubG9nKGBOYXZpZ2F0aW9uIHR5cGU6ICR7bmF2aWdhdGlvblR5cGV9IGZvciB0YWIgJHtkZXRhaWxzLnRhYklkfSB0byAke2RldGFpbHMudXJsfWApXG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCBhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2U/Lmh0bWxcbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gcmVzcG9uc2U/LnBhZ2VNZXRhXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUoZGV0YWlscy51cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbiAgICAgIGFjdGlvblNlcXVlbmNlSWQrK1xuICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHNhdmVIVE1MKGh0bWxDb250ZW50LCBjdXJyZW50U25hcHNob3RJZCksXG4gICAgICAgIHNhdmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAnbmF2aWdhdGlvbicsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgIGRldGFpbHMudXJsLFxuICAgICAgICAgIGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgbmF2aWdhdGlvblR5cGUsXG4gICAgICAgICAgcGFnZU1ldGFcbiAgICAgICAgKSxcbiAgICAgICAgc2F2ZVNjcmVlbnNob3QoKGF3YWl0IGNocm9tZS50YWJzLmdldChkZXRhaWxzLnRhYklkKSkud2luZG93SWQsIHRpbWVzdGFtcCwgdXVpZClcbiAgICAgIF0pXG4gICAgICBpZiAobmF2aWdhdGlvblR5cGUgIT09ICduZXcnICYmIG5hdmlnYXRpb25UeXBlICE9PSAncmVsb2FkJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtZXNzYWdlIHRvIHBvcHVwIG5hdmlnYXRpb24nKVxuICAgICAgICBhd2FpdCBzZW5kUG9wdXAoXG4gICAgICAgICAgZGV0YWlscy50YWJJZCxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgJ25hdmlnYXRpb24nLFxuICAgICAgICAgIC8vIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25UeXBlOiBuYXZpZ2F0aW9uVHlwZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXVpZFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuLy8gQWRkIGNsZWFudXAgd2hlbiB0YWIgaXMgY2xvc2VkXG5jaHJvbWUudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKHRhYklkKSA9PiB7XG4gIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF1cbn0pXG5cbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWREYXRhTG9jYWxseSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpXG5cbiAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSlcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZFxuXG4gICAgbGV0IHVzZXJfaWQgPSBjdXJyZW50VXNlcklkIHx8ICd1bmtub3duJ1xuXG4gICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSXyR7dXNlcl9pZH0vU0VTU0lPTl8ke3RpbWVzdGFtcH1gXG5cbiAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IGludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgbGV0IGh0bWxTbmFwc2hvdHMgPSBzbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgIGxldCBzdG9yZU9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHNjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgIC8vIGNvbmNhdGVuYXRpbmcgd2l0aCB0aGUgc2VlbiBkYXRhXG4gICAgY29uc3Qgc2Vlbl9pbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9odG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IFtdIH0pXG4gICAgY29uc3Qgc2Vlbl9zY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3NjcmVlbnNob3RzOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgbGV0IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBzZWVuX2ludGVyYWN0LnNlZW5faW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgbGV0IHNlZW5faHRtbFNuYXBzaG90cyA9IHNlZW5fc25hcHNob3RzLnNlZW5faHRtbFNuYXBzaG90cyB8fCB7fVxuICAgIGxldCBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gc2Vlbl9vcmRlckRldGFpbHMuc2Vlbl9vcmRlckRldGFpbHMgfHwgW11cbiAgICBsZXQgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gc2Vlbl9zY3JlZW4uc2Vlbl9zY3JlZW5zaG90cyB8fCBbXVxuICAgIGxldCBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gPSBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uLnNlZW5fcmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgIHN0b3JlSW50ZXJhY3Rpb25zID0gWy4uLnNlZW5fc3RvcmVJbnRlcmFjdGlvbnMsIC4uLnN0b3JlSW50ZXJhY3Rpb25zXVxuICAgIGh0bWxTbmFwc2hvdHMgPSB7IC4uLnNlZW5faHRtbFNuYXBzaG90cywgLi4uaHRtbFNuYXBzaG90cyB9XG4gICAgc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgc3RvcmVTY3JlZW5zaG90cyA9IFsuLi5zZWVuX3N0b3JlU2NyZWVuc2hvdHMsIC4uLnN0b3JlU2NyZWVuc2hvdHNdXG4gICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFsuLi5zZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24sIC4uLnN0b3JlUmVhc29uc0Fubm90YXRpb25dXG5cbiAgICBpZiAoIXppcCkge1xuICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIHNlc3Npb24gaW5mbycpXG4gICAgICBjb25zdCBzZXNzaW9uSW5mb0NvbnRlbnQgPSBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfSwgdXNlciBpZDogJHtjdXJyZW50VXNlcklkfSxcXG4gb3JkZXIgZGV0YWlsczogXFxuICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIHN0b3Jlb3JkZXJEZXRhaWxzXG4gICAgICApfWBcbiAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb25JbmZvQ29udGVudCksXG4gICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9zZXNzaW9uX2luZm8udHh0YCxcbiAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgfSlcblxuICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICBjb25zb2xlLmxvZygnZG93bmxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgIGF3YWl0IGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgIHVybDogJ2RhdGE6dGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChodG1sQ29udGVudCksXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uaHRtbGAsXG4gICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICB9XG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnNEYXRhID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXG4gICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGludGVyYWN0aW9uc0RhdGEpLFxuICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zLmpzb25gLFxuICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgIHVybDogc2NyZWVuc2hvdERhdGEsXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYCxcbiAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyB6aXAgZmlsZScpXG4gICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuICAgICAgemlwLmZpbGUoXG4gICAgICAgICdzZXNzaW9uX2luZm8udHh0JyxcbiAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH1cbiAgICAgICAgICBcXG4gdXNlciBpZDogJHt1c2VyX2lkfVxuICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuICAgICAgICAgICAgICAgIFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgKVxuXG4gICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcbiAgICAgIHppcC5maWxlKCdpbnRlcmFjdGlvbnMuanNvbicsIGludGVyYWN0aW9uc19qc29uKVxuICAgICAgY29uc3Qgc2NyZWVuc2hvdHNGb2xkZXIgPSB6aXAuZm9sZGVyKCdzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2NyZWVuc2hvdERhdGEpXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKClcbiAgICAgICAgc2NyZWVuc2hvdHNGb2xkZXIuZmlsZShzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpICsgJy5qcGcnLCBibG9iKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBodG1sU25hcHNob3RzRm9sZGVyID0gemlwLmZvbGRlcignaHRtbFNuYXBzaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgaHRtbFNuYXBzaG90c0ZvbGRlci5maWxlKHNuYXBzaG90SWQgKyAnLmh0bWwnLCBodG1sQ29udGVudClcbiAgICAgIH1cblxuICAgICAgY29uc3QgemlwQmxvYiA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pXG4gICAgICBjb25zb2xlLmxvZygnemlwIGZpbGUgaXMgZ2VuZXJhdGVkJylcblxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYmFzZTY0WmlwID0gcmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdIC8vIEdldCB0aGUgYmFzZTY0IHBhcnRcbiAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgdXJsOiAnZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LCcgKyBiYXNlNjRaaXAsXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9LnppcGAsXG4gICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoemlwQmxvYilcbiAgICB9XG5cbiAgICAvLyBDbGVhciBjYWNoZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAnc2Vlbl9odG1sU25hcHNob3RzJyxcbiAgICAgICdzZWVuX2ludGVyYWN0aW9ucycsXG4gICAgICAnc2Vlbl9vcmRlckRldGFpbHMnLFxuICAgICAgJ3NlZW5fc2NyZWVuc2hvdHMnLFxuICAgICAgJ3NlZW5fcmVhc29uc0Fubm90YXRpb24nXG4gICAgXSlcblxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWQgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVzaWduZWRGb3JtRGF0YShuYW1lKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgZm9ybURhdGEuYXBwZW5kKCdrZXknLCBuYW1lKVxuXG4gIE9iamVjdC5rZXlzKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS5maWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChrZXkgIT0gJ2tleScpIGZvcm1EYXRhLmFwcGVuZChrZXksIGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS5maWVsZHNba2V5XSlcbiAgfSlcblxuICByZXR1cm4gZm9ybURhdGFcbn1cblxuY29uc3QgY3VzdG9tRmV0Y2ggPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKVxuXG4gIC8vIElmIHJlc3BvbnNlIGlzIG5vdCBPSyAoc3RhdHVzIGNvZGUgbm90IGluIDIwMC0yOTkgcmFuZ2UpLCB0aHJvdyBhbiBlcnJvclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ3ppcEh0bWwoY29udGVudCkge1xuICAvLyBDcmVhdGUgYSBuZXcgR1pJUCBjb21wcmVzc2lvbiBzdHJlYW1cbiAgY29uc3QgY3MgPSBuZXcgQ29tcHJlc3Npb25TdHJlYW0oJ2d6aXAnKVxuXG4gIC8vIENyZWF0ZSBhIHdyaXRhYmxlIHN0cmVhbSB0byB3aGljaCB3ZSdsbCB3cml0ZSB0aGUgY29tcHJlc3NlZCBkYXRhXG4gIGNvbnN0IHdyaXRlciA9IGNzLndyaXRhYmxlLmdldFdyaXRlcigpXG5cbiAgLy8gRW5jb2RlIHRoZSBjb250ZW50IHRvIFVpbnQ4QXJyYXlcbiAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG4gIGNvbnN0IGVuY29kZWRDb250ZW50ID0gZW5jb2Rlci5lbmNvZGUoY29udGVudClcblxuICAvLyBXcml0ZSB0aGUgZW5jb2RlZCBjb250ZW50IGludG8gdGhlIGNvbXByZXNzaW9uIHN0cmVhbVxuICB3cml0ZXIud3JpdGUoZW5jb2RlZENvbnRlbnQpXG5cbiAgLy8gQ2xvc2UgdGhlIHdyaXRlciB0byBmaW5pc2ggY29tcHJlc3Npb25cbiAgd3JpdGVyLmNsb3NlKClcblxuICAvLyBHZXQgdGhlIGNvbXByZXNzZWQgZGF0YSBhcyBhIEJsb2JcbiAgY29uc3QgY29tcHJlc3NlZEJsb2IgPSBhd2FpdCBuZXcgUmVzcG9uc2UoY3MucmVhZGFibGUpLmJsb2IoKVxuXG4gIHJldHVybiBjb21wcmVzc2VkQmxvYlxufVxuXG5hc3luYyBmdW5jdGlvbiB1cGxvYWREYXRhVG9TZXJ2ZXIoKSB7XG4gIHN0b3BQZXJpb2RpY1VwbG9hZCgpXG4gIHRyeSB7XG4gICAgY29uc3QgaW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgaW50ZXJhY3Rpb25zIGFuZCBnZXQgdGhlIGxhdGVzdCB0aW1lc3RhbXBcbiAgICBpZiAoc3RvcmVJbnRlcmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJhY3Rpb25zIHRvIHVwbG9hZCcpXG4gICAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBsYXN0VGltZXN0YW1wID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHtcbiAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogbnVsbFxuICAgIH0pXG4gICAgbGFzdFRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAudXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wIHx8IG51bGxcblxuICAgIGlmIChsYXN0VGltZXN0YW1wKSBjb25zb2xlLmxvZygnbGFzdFRpbWVzdGFtcCByZXN0b3JlZDogJywgbGFzdFRpbWVzdGFtcClcblxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKVxuXG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogdGltZXN0YW1wXG4gICAgfSkgLy8gbWFraW5nIHN1cmUgd2l0aCByZW9wZW5pbmcgdGhlIGJyb3dzZXIsIGl0IGNvbnRpbnVlcyBmcm9tIGxlZnQgcG9pbnQgYW5kIHJld3JpdGVzIHRoZSBpbmZvcm1hdGlvblxuXG4gICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCB1c2VySWRSZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pXG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWRcblxuICAgIGxldCB1c2VyX2lkID0gY3VycmVudFVzZXJJZCB8fCAndW5rbm93bidcblxuICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgJHtmb2xkZXJfbmFtZX0vVVNFUi8ke3VzZXJfaWR9YFxuXG4gICAgY29uc3Qgc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSlcbiAgICBjb25zdCBvcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pXG4gICAgY29uc3Qgc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbiAgICBsZXQgc3RvcmVPcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbiAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbiAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuICAgICAgb3JkZXJEZXRhaWxzOiBzdG9yZU9yZGVyRGV0YWlsc1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAhbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlIHx8XG4gICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgPCBEYXRlLm5vdygpIC8gMTAwMCB8fCAvLyBwcmV2ZW50IGZyb20gcmVxdWVzdGluZyBmb3IgcG9zdCB1cmwgb3ZlciBhbmQgb3ZlclxuICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZT8uZmllbGRzPy5rZXkuaW5jbHVkZXModXNlcl9pZClcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIG5ldyBwb3N0IHVybCcpXG4gICAgICBjb25zb2xlLmxvZyhgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWApXG4gICAgICBsZXQgcG9zdFVybFJlc3VsdCA9IGF3YWl0IGN1c3RvbUZldGNoKGAke2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9KVxuXG4gICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UgPSBhd2FpdCBwb3N0VXJsUmVzdWx0Lmpzb24oKVxuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICduZXcgcG9zdCB1cmwgcmVjZWl2ZWQnLFxuICAgICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgLSBEYXRlLm5vdygpIC8gMTAwMFxuICAgICAgKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihcbiAgICAgICAgW1xuICAgICAgICAgIGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgIFxcbiB1c2VyIGlkOiAke3VzZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuICAgICAgICAgICAgICAgICAgICBcXG4gJHtKU09OLnN0cmluZ2lmeShvcmRlckRldGFpbHMpfWBcbiAgICAgICAgXSxcbiAgICAgICAgeyB0eXBlOiAndGV4dC9wbGFpbicgfVxuICAgICAgKVxuICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vb3JkZXJfaW5mb18ke3RpbWVzdGFtcH0udHh0YClcbiAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbylcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKVxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgIC8vIGNvbnN0IGh0bWxCbG9iID0gbmV3IEJsb2IoW2h0bWxDb250ZW50XSwgeyB0eXBlOiAndGV4dC9odG1sJyB9KVxuICAgICAgICBjb25zdCBodG1sQmxvYiA9IGF3YWl0IGd6aXBIdG1sKGh0bWxDb250ZW50KVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkfS5odG1sLmd6YClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaHRtbEJsb2IpXG5cbiAgICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY3VzdG9tRmV0Y2goc2NyZWVuc2hvdERhdGEpXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKClcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBwcmVzaWduZWRGb3JtRGF0YShcbiAgICAgICAgICBgJHtmb2xkZXJOYW1lfS9zY3JlZW5zaG90cy8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csICctJyl9LmpwZ2BcbiAgICAgICAgKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKVxuICAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7ZX1gKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zJylcbiAgICAgIGNvbnN0IGludGVyYWN0aW9uc19qc29uID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXG5cbiAgICAgIGNvbnN0IGludGVyYWN0aW9uc0Jsb2IgPSBuZXcgQmxvYihbaW50ZXJhY3Rpb25zX2pzb25dLCB7XG4gICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YUZpbGUgPSBwcmVzaWduZWRGb3JtRGF0YShgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnNfJHt0aW1lc3RhbXB9Lmpzb25gKVxuXG4gICAgICBqc29uRm9ybURhdGFGaWxlLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IpXG5cbiAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YUZpbGVcbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ2ludGVyYWN0aW9ucycsIGludGVyYWN0aW9uc19qc29uKVxuICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgndXNlcl9pZCcsIHVzZXJfaWQpXG5cbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zIGFzIGEganNvbicpXG4gICAgICBhd2FpdCBjdXN0b21GZXRjaChpbnRlcmFjdGlvbnNfdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBqc29uRm9ybURhdGFcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGRhdGE6JywgZXJyb3IpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodXNlcl9pZC5pbmNsdWRlcyhkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQpKSB7XG4gICAgICBjb25zdCBzZWVuX2ludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX3NuYXBzaG90cyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faHRtbFNuYXBzaG90czogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX3NjcmVlbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fc2NyZWVuc2hvdHM6IFtdIH0pXG4gICAgICBjb25zdCBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuICAgICAgbGV0IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBzZWVuX2ludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgICAgbGV0IHNlZW5faHRtbFNuYXBzaG90cyA9IHNlZW5fc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbiAgICAgIGxldCBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gc2Vlbl9vcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gc2Vlbl9zY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbiAgICAgIGxldCBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gPSBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbiAgICAgIHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBbLi4uc2Vlbl9zdG9yZUludGVyYWN0aW9ucywgLi4uc3RvcmVJbnRlcmFjdGlvbnNdXG4gICAgICBzZWVuX2h0bWxTbmFwc2hvdHMgPSB7IC4uLnNlZW5faHRtbFNuYXBzaG90cywgLi4uaHRtbFNuYXBzaG90cyB9XG4gICAgICBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gWy4uLnNlZW5fc3RvcmVPcmRlckRldGFpbHMsIC4uLnN0b3JlT3JkZXJEZXRhaWxzXVxuICAgICAgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gWy4uLnNlZW5fc3RvcmVTY3JlZW5zaG90cywgLi4uc3RvcmVTY3JlZW5zaG90c11cbiAgICAgIHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFsuLi5zZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24sIC4uLnN0b3JlUmVhc29uc0Fubm90YXRpb25dXG5cbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faW50ZXJhY3Rpb25zOiBzZWVuX3N0b3JlSW50ZXJhY3Rpb25zIH0pXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX2h0bWxTbmFwc2hvdHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fb3JkZXJEZXRhaWxzOiBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzIH0pXG4gICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX3NjcmVlbnNob3RzOiBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fcmVhc29uc0Fubm90YXRpb246IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KVxuICAgIH1cblxuICAgIGxhc3RUaW1lc3RhbXAgPSBudWxsXG5cbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgJ29yZGVyRGV0YWlscycsXG4gICAgICAnc2NyZWVuc2hvdHMnLFxuICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbiAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCdcbiAgICBdKVxuICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBTdGFydCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdGFydFBlcmlvZGljVXBsb2FkKCkge1xuICBpZiAoIXVwbG9hZFRpbWVyKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0UGVyaW9kaWNVcGxvYWQnKVxuICAgIHVwbG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwodXBsb2FkRGF0YVRvU2VydmVyX25ldywgMTAwMDApIC8vIDEwIHNlY29uZHNcbiAgfVxufVxuXG4vLyBTdG9wIHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0b3BQZXJpb2RpY1VwbG9hZCgpIHtcbiAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3N0b3BQZXJpb2RpY1VwbG9hZCcpXG4gICAgY2xlYXJJbnRlcnZhbCh1cGxvYWRUaW1lcilcbiAgICB1cGxvYWRUaW1lciA9IGZhbHNlXG4gIH1cbn1cbmlmICh1cGxvYWRUaW1lciA9PSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKCctLWluaXRpYWxpemluZyBpbnRlcnZhbC0tJylcbiAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcl9uZXcoKSB7XG4gIHN0b3BQZXJpb2RpY1VwbG9hZCgpXG4gIHRyeSB7XG4gICAgY29uc3QgY2hlY2tJbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICBjb25zdCBjaGVja3N0b3JlSW50ZXJhY3Rpb25zID0gY2hlY2tJbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgaW50ZXJhY3Rpb25zIGFuZCBnZXQgdGhlIGxhdGVzdCB0aW1lc3RhbXBcbiAgICBpZiAoY2hlY2tzdG9yZUludGVyYWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcmFjdGlvbnMgdG8gdXBsb2FkJylcbiAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxhc3R1cGxvYWRUaW1lc3RhbXAgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBsYXN0dXBsb2FkVGltZXN0YW1wOiBudWxsIH0pXG4gICAgbGFzdHVwbG9hZFRpbWVzdGFtcCA9IGxhc3R1cGxvYWRUaW1lc3RhbXAubGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBudWxsXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7XG4gICAgICB1c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXA6IG51bGxcbiAgICB9KVxuICAgIGxhc3RUaW1lc3RhbXAgPSBsYXN0VGltZXN0YW1wLnVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCB8fCBudWxsXG5cbiAgICBpZiAobGFzdFRpbWVzdGFtcCkgY29uc29sZS5sb2coJ2xhc3RUaW1lc3RhbXAgcmVzdG9yZWQ6ICcsIGxhc3RUaW1lc3RhbXApXG5cbiAgICBjb25zdCB0aW1lc3RhbXAgPSBsYXN0VGltZXN0YW1wIHx8IGN1cnJlbnRUaW1lc3RhbXAucmVwbGFjZSgvWzouXS9nLCAnLScpXG5cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgdXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICB9KSAvLyBtYWtpbmcgc3VyZSB3aXRoIHJlb3BlbmluZyB0aGUgYnJvd3NlciwgaXQgY29udGludWVzIGZyb20gbGVmdCBwb2ludCBhbmQgcmV3cml0ZXMgdGhlIGluZm9ybWF0aW9uXG5cbiAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSlcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZFxuXG4gICAgbGV0IHVzZXJfaWQgPSBjdXJyZW50VXNlcklkIHx8ICd1bmtub3duJ1xuXG4gICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSLyR7dXNlcl9pZH1gXG5cbiAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuICAgIGNvbnN0IGludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuXG4gICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9XG4gICAgbGV0IHN0b3JlT3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXVxuICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuXG4gICAgY29uc3QgaW50ZXJhY3Rpb25zVG9VcGxvYWQgPSBzdG9yZUludGVyYWN0aW9ucy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBpdGVtLnRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHNuYXBzaG90c1RvVXBsb2FkID0gT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykuZmlsdGVyKChbc25hcHNob3RJZCwgY29udGVudF0pID0+IHtcbiAgICAgIC8vIEV4dHJhY3QgdGltZXN0YW1wIGZyb20gc25hcHNob3RJZCAoZm9ybWF0OiBodG1sXyR7aGFzaH1fJHt0aW1lc3RhbXB9XyR7dXVpZH0pXG4gICAgICBjb25zdCB0aW1lc3RhbXBNYXRjaCA9IHNuYXBzaG90SWQubWF0Y2goL18oXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn0uXFxkezN9WilfLylcbiAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlIC8vIEluY2x1ZGUgaWYgY2FuJ3QgcGFyc2UgdGltZXN0YW1wXG4gICAgICBjb25zdCBzbmFwc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgc25hcHNob3RUaW1lc3RhbXAgPiBsYXN0dXBsb2FkVGltZXN0YW1wXG4gICAgfSlcbiAgICBjb25zdCBzY3JlZW5zaG90c1RvVXBsb2FkID0gc3RvcmVTY3JlZW5zaG90cy5maWx0ZXIoKFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSkgPT4ge1xuICAgICAgLy8gRXh0cmFjdCB0aW1lc3RhbXAgZnJvbSBzY3JlZW5zaG90SWQgKGZvcm1hdDogc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1fJHt1dWlkfSlcbiAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc2NyZWVuc2hvdElkLm1hdGNoKC9zY3JlZW5zaG90XyguKz8pXy8pXG4gICAgICBpZiAoIXRpbWVzdGFtcE1hdGNoKSByZXR1cm4gdHJ1ZSAvLyBJbmNsdWRlIGlmIGNhbid0IHBhcnNlIHRpbWVzdGFtcFxuICAgICAgY29uc3Qgc2NyZWVuc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgc2NyZWVuc2hvdFRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHJlYXNvbnNBbm5vdGF0aW9uVG9VcGxvYWQgPSBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFsYXN0dXBsb2FkVGltZXN0YW1wIHx8IGl0ZW0udGltZXN0YW1wID4gbGFzdHVwbG9hZFRpbWVzdGFtcFxuICAgIH0pXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzVG9VcGxvYWQgPSBzdG9yZU9yZGVyRGV0YWlscy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBpdGVtLnRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuXG4gICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICBpbnRlcmFjdGlvbnM6IGludGVyYWN0aW9uc1RvVXBsb2FkLFxuICAgICAgcmVhc29uczogcmVhc29uc0Fubm90YXRpb25Ub1VwbG9hZCxcbiAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzVG9VcGxvYWRcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZSB8fFxuICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5leHBpcmVfdGltZXN0YW1wIDwgRGF0ZS5ub3coKSAvIDEwMDAgfHwgLy8gcHJldmVudCBmcm9tIHJlcXVlc3RpbmcgZm9yIHBvc3QgdXJsIG92ZXIgYW5kIG92ZXJcbiAgICAgICFsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmZpZWxkcz8ua2V5LmluY2x1ZGVzKHVzZXJfaWQpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBuZXcgcG9zdCB1cmwnKVxuICAgICAgY29uc29sZS5sb2coYCR7Z2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gKVxuICAgICAgbGV0IHBvc3RVcmxSZXN1bHQgPSBhd2FpdCBjdXN0b21GZXRjaChgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSlcblxuICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlID0gYXdhaXQgcG9zdFVybFJlc3VsdC5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnbmV3IHBvc3QgdXJsIHJlY2VpdmVkJyxcbiAgICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5leHBpcmVfdGltZXN0YW1wIC0gRGF0ZS5ub3coKSAvIDEwMDBcbiAgICAgIClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlc3Npb25JbmZvID0gbmV3IEJsb2IoXG4gICAgICAgIFtcbiAgICAgICAgICBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICBcXG4gdXNlciBpZDogJHt1c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICBcXG4gb3JkZXIgZGV0YWlsczpcbiAgICAgICAgICAgICAgICAgICAgXFxuICR7SlNPTi5zdHJpbmdpZnkob3JkZXJEZXRhaWxzVG9VcGxvYWQpfWBcbiAgICAgICAgXSxcbiAgICAgICAgeyB0eXBlOiAndGV4dC9wbGFpbicgfVxuICAgICAgKVxuICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vb3JkZXJfaW5mb18ke3RpbWVzdGFtcH0udHh0YClcbiAgICAgIHNlc3Npb25Gb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBzZXNzaW9uSW5mbylcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzZXNzaW9uIGluZm8nKVxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIHNuYXBzaG90c1RvVXBsb2FkKSB7XG4gICAgICAgIGNvbnN0IGh0bWxCbG9iID0gYXdhaXQgZ3ppcEh0bWwoaHRtbENvbnRlbnQpXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWR9Lmh0bWwuZ3pgKVxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBodG1sQmxvYilcblxuICAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJylcbiAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHNjcmVlbnNob3RzVG9VcGxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjdXN0b21GZXRjaChzY3JlZW5zaG90RGF0YSlcbiAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKFxuICAgICAgICAgIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYFxuICAgICAgICApXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtlfWApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtpbnRlcmFjdGlvbnNfanNvbl0sIHtcbiAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgICAgY29uc3QganNvbkZvcm1EYXRhRmlsZSA9IHByZXNpZ25lZEZvcm1EYXRhKGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9uc18ke3RpbWVzdGFtcH0uanNvbmApXG5cbiAgICAgIGpzb25Gb3JtRGF0YUZpbGUuYXBwZW5kKCdmaWxlJywgaW50ZXJhY3Rpb25zQmxvYilcblxuICAgICAgYXdhaXQgY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToganNvbkZvcm1EYXRhRmlsZVxuICAgICAgfSlcblxuICAgICAgY29uc3QganNvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnaW50ZXJhY3Rpb25zJywgaW50ZXJhY3Rpb25zX2pzb24pXG4gICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCd1c2VyX2lkJywgdXNlcl9pZClcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMgYXMgYSBqc29uJylcbiAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGludGVyYWN0aW9uc191cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh1c2VyX2lkLmluY2x1ZGVzKGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCkpIHtcbiAgICAgIGNvbnN0IHNlZW5faW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2ludGVyYWN0aW9uczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9odG1sU25hcHNob3RzOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9vcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX29yZGVyRGV0YWlsczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9zY3JlZW5zaG90czogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgICBsZXQgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IHNlZW5faW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9odG1sU25hcHNob3RzID0gc2Vlbl9zbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgICAgbGV0IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBzZWVuX29yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICAgIGxldCBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBzZWVuX3NjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgICAgbGV0IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHNlZW5fUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgICAgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IFsuLi5zZWVuX3N0b3JlSW50ZXJhY3Rpb25zLCAuLi5zdG9yZUludGVyYWN0aW9uc11cbiAgICAgIHNlZW5faHRtbFNuYXBzaG90cyA9IHsgLi4uc2Vlbl9odG1sU25hcHNob3RzLCAuLi5odG1sU25hcHNob3RzIH1cbiAgICAgIHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgICBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBbLi4uc2Vlbl9zdG9yZVNjcmVlbnNob3RzLCAuLi5zdG9yZVNjcmVlbnNob3RzXVxuICAgICAgc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gWy4uLnNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbl1cblxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faHRtbFNuYXBzaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fc2NyZWVuc2hvdHM6IHNlZW5fc3RvcmVTY3JlZW5zaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pXG4gICAgfVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IG51bGxcbiAgICBsYXN0dXBsb2FkVGltZXN0YW1wID0gY3VycmVudFRpbWVzdGFtcFxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGxhc3R1cGxvYWRUaW1lc3RhbXA6IGxhc3R1cGxvYWRUaW1lc3RhbXAgfSlcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7XG4gICAgICBpbnRlcmFjdGlvbnM6IFtdLFxuICAgICAgaHRtbFNuYXBzaG90czoge30sXG4gICAgICBvcmRlckRldGFpbHM6IFtdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgcmVhc29uc0Fubm90YXRpb246IFtdXG4gICAgfSlcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgaW50ZXJhY3Rpb25zOiBjdXJyZW50RGF0YS5pbnRlcmFjdGlvbnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXApLFxuXG4gICAgICBodG1sU25hcHNob3RzOiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGN1cnJlbnREYXRhLmh0bWxTbmFwc2hvdHMpLmZpbHRlcigoW3NuYXBzaG90SWRdKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wTWF0Y2ggPSBzbmFwc2hvdElkLm1hdGNoKC9fKFxcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfTpcXGR7Mn06XFxkezJ9LlxcZHszfVopXy8pXG4gICAgICAgICAgaWYgKCF0aW1lc3RhbXBNYXRjaCkgcmV0dXJuIHRydWVcbiAgICAgICAgICBjb25zdCBzbmFwc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICAgICAgcmV0dXJuIHNuYXBzaG90VGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIG9yZGVyRGV0YWlsczogY3VycmVudERhdGEub3JkZXJEZXRhaWxzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aW1lc3RhbXAgPiBjdXJyZW50VGltZXN0YW1wKSxcbiAgICAgIHNjcmVlbnNob3RzOiBjdXJyZW50RGF0YS5zY3JlZW5zaG90cy5maWx0ZXIoKFtfLCBzY3JlZW5zaG90SWRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc2NyZWVuc2hvdElkLm1hdGNoKC9zY3JlZW5zaG90XyguKz8pXy8pXG4gICAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlXG4gICAgICAgIGNvbnN0IHNjcmVlbnNob3RUaW1lc3RhbXAgPSB0aW1lc3RhbXBNYXRjaFsxXVxuICAgICAgICByZXR1cm4gc2NyZWVuc2hvdFRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXBcbiAgICAgIH0pLFxuICAgICAgcmVhc29uc0Fubm90YXRpb246IGN1cnJlbnREYXRhLnJlYXNvbnNBbm5vdGF0aW9uLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgKVxuICAgIH1cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQobmV3RGF0YSlcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgIC8vICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgIC8vICAgJ29yZGVyRGV0YWlscycsXG4gICAgLy8gICAnc2NyZWVuc2hvdHMnLFxuICAgIC8vICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbiAgICAvLyAgICdpbnRlcmFjdGlvbnMnLFxuICAgIC8vICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCdcbiAgICAvLyBdKVxuICAgIC8vIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgLy8gc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuICAgIC8vIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZSIsImludGVyYWN0aW9uX3VybCIsImNvbmNhdCIsImZpbHRlcl91cmwiLCJuYXYiLCJzZWxlY3RvciIsIm5hbWUiLCJjaGlsZHJlbiIsImdlbmVyYXRlX21ldGFkYXRhIiwiZW0iLCJ0ZXJtIiwidmFsdWUiLCJkYXRhIiwiY2xpY2thYmxlIiwidGV4dF9zZWxlY3RvciIsImFkZF90ZXh0IiwicmVmaW5lbWVudF9vcHRpb24iLCJkaXJlY3RfY2hpbGQiLCJ0ZXh0X2pzIiwiZWxlbWVudCIsInRleHQiLCJhQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwidHJpbSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiX2VsZW1lbnQkY2xvc2VzdCIsIm5hbWVFbSIsImNsb3Nlc3QiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidXJsIiwidGl0bGUiLCJzZWxlY3RlZCIsIl9lbGVtZW50JGNsb3Nlc3QyIiwiX2VsZW1lbnQkY2xvc2VzdDMiLCJfZWxlbWVudCRjbG9zZXN0NCIsInByb2R1Y3RfZmFjdHMiLCJwcm9kdWN0X2RlbGl2ZXJ5IiwicXVhbnRpdHlfc2VsZWN0b3IiLCJkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IiLCJzZXRfdXBfbm93X2J1dHRvbiIsImFkZF90b19jYXJ0X2J1dHRvbiIsImJ1eV9ub3dfYnV0dG9uIiwiYnV5X2JveF93aXRoX2FjY29yZGlvbiIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkiLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAiLCJjYXJ0IiwidGV4dF9mb3JtYXQiLCJyZWNpcGVzIiwibWF0Y2giLCJtYXRjaF9tZXRob2QiLCJfZW0kaW5uZXJUZXh0IiwicmVwbGFjZSIsIl9lbSRpbm5lclRleHQyIiwiX2VtJGlubmVyVGV4dDMiLCJyYW5nZSIsImtlZXBfYXR0ciIsIm92ZXJyaWRlX2F0dHIiLCJzdGVwX3ZhbHVlcyIsImZvcm1FbSIsInByb3AiLCJzdGVwcyIsIkpTT04iLCJwYXJzZSIsInN0ZXBMYWJlbHMiLCJjdXJyZW50X3ZhbHVlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJpbnNlcnRfc3BsaXRfbWFya2VyIiwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSIsImFzaW4iLCJwcmljZUVtIiwicHJpY2UiLCJ0aXRsZUVtIiwidXJsRW0iLCJkZWxpdmVyeUVtIiwiZGVsaXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJsYWJlbCIsIl9lbSRpbm5lclRleHQ0IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJpbm5lckhUTUwiLCJ1bmRlZmluZWQiLCJfZW0kcXVlcnlTZWxlY3RvcjMiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJvcHRpb24iLCJlcnIiLCJmIiwiaW1nQ2hpbGQiLCJhbHQiLCJfZW0kcXVlcnlTZWxlY3RvcjQiLCJfZW0kcXVlcnlTZWxlY3RvcjUiLCJfZW0kcXVlcnlTZWxlY3RvcjYiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidGV4dEVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2VtJHF1ZXJ5U2VsZWN0b3I3IiwiX2VtJHF1ZXJ5U2VsZWN0b3I4IiwiX2VtJGlubmVyVGV4dDUiLCJhc2luRW0iLCJ0ZXJtaW5hdGUiLCJhcmd1bWVudHMiLCJ0ZXJtaW5hdGVfY2FsbGJhY2siLCJpc0Zyb21Qb3B1cCIsInVwZGF0ZV9pY29uIiwiaW5jbHVkZXMiLCJzb21lIiwiZXhjbHVkZVVybCIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEiLCJkb2N1bWVudCIsImdyb3VwZWRSZXN1bHQiLCJmb3JFYWNoIiwibWV0YU5hbWUiLCJtZXRhRGF0YSIsInB1c2giLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzaG91bGRFeGNsdWRlIiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsInV1aWQiLCJsb2NhdGlvbiIsImhyZWYiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJoYXNoQ29kZSIsInN0ciIsImhhc2giLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJ2NCIsInV1aWR2NCIsIkpTWmlwIiwiaW50ZXJhY3Rpb25zIiwic2NyZWVuc2hvdHMiLCJyZWFzb25zQW5ub3RhdGlvbiIsImFjdGlvblNlcXVlbmNlSWQiLCJ1cGxvYWRUaW1lciIsInVzZXJJZCIsImxhc3RUaW1lc3RhbXAiLCJsYXN0dXBsb2FkVGltZXN0YW1wIiwibGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlIiwiaW50ZXJhY3Rpb25zX3VybCIsImdlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybCIsInRhYk5hdmlnYXRpb25IaXN0b3J5IiwiYW5hbHl6ZU5hdmlnYXRpb24iLCJ0YWJJZCIsImJhY2tTdGFjayIsImZvcndhcmRTdGFjayIsImN1cnJlbnRVcmwiLCJoaXN0b3J5IiwiZ2V0Q3VzdG9tUXVlc3Rpb24iLCJldmVudFR5cGUiLCJfZGF0YSR0YXJnZXQkY2xhc3NOYW0iLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25UeXBlIiwic2F2ZVNjcmVlbnNob3RfMSIsIl94IiwiX3gyIiwiX3NhdmVTY3JlZW5zaG90XyIsIl9jYWxsZWUxMiIsInNjcmVlbnNob3REYXRhVXJsIiwic2NyZWVuc2hvdElkIiwicmVzdWx0Iiwic3RvcmVTY3JlZW5zaG90cyIsIl9jYWxsZWUxMiQiLCJfY29udGV4dDEyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0Iiwic2V0IiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsIl9jYWxsZWUyIiwiX3NlbmRlciR0YWIyIiwiX3NlbmRlciR0YWIiLCJjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCIsInNhdmVEYXRhIiwic3VjY2VzcyIsIl9zdWNjZXNzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3JlZjIiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImFsbCIsInNlbmRQb3B1cCIsInRhYiIsInQwIiwiZXJyb3IiLCJjYXB0dXJlU2NyZWVuc2hvdCIsInQxIiwiZG93bmxvYWREYXRhTG9jYWxseSIsInQyIiwic2VsZWN0UmVjaXBlIiwicmVjaXBlIiwiX2NhcHR1cmVTY3JlZW5zaG90IiwiX2NhbGxlZTEzIiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1IiwiX3lpZWxkJGNocm9tZSR0YWJzJHF1MiIsIl9jYWxsZWUxMyQiLCJfY29udGV4dDEzIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIl9zbGljZWRUb0FycmF5IiwiY2FwdHVyZVZpc2libGVUYWIiLCJ3aW5kb3dJZCIsImZvcm1hdCIsInF1YWxpdHkiLCJzYXZlSFRNTCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJodG1sQ29udGVudCIsImN1cnJlbnRTbmFwc2hvdElkIiwiaHRtbFNuYXBzaG90cyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94MyIsIl94NCIsInNhdmVJbnRlcmFjdGlvbiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJ0YXJnZXRfdXJsIiwiaHRtbFNuYXBzaG90SWQiLCJwYWdlTWV0YSIsInN0b3JlSW50ZXJhY3Rpb25zIiwiX2FyZ3M0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g1IiwiX3g2IiwiX3g3IiwiX3g4IiwiX3g5IiwiX3gxMCIsInNhdmVTY3JlZW5zaG90IiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94MTEiLCJfeDEyIiwiX3gxMyIsIl9yZWY2IiwiX2NhbGxlZTYiLCJfZGF0YSR0YXJnZXQiLCJfZGF0YSR0YXJnZXQyIiwicXVlc3Rpb24iLCJyZWFzb24iLCJuZXdpdGVtIiwic3RvcmVSZWFzb25zQW5ub3RhdGlvbiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInRvTG93ZXJDYXNlIiwiTWF0aCIsInJhbmRvbSIsInNlbmRNZXNzYWdlIiwiaW5wdXQiLCJhY3Rpb25fdXVpZCIsIl94MTQiLCJfeDE1IiwiX3gxNiIsIl94MTciLCJfeDE4Iiwib25BY3RpdmF0ZWQiLCJfcmVmNyIsIl9jYWxsZWU4IiwiYWN0aXZlSW5mbyIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsIl9yZWY4IiwiX2NhbGxlZTciLCJyZXNwb25zZSIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsImh0bWwiLCJfeDIwIiwiX3gxOSIsIl94MjEiLCJfeDIyIiwiX3NlbGVjdFJlY2lwZSIsIl9jYWxsZWUxNCIsInBhcnNlZFVybCIsIm1hdGNoTWV0aG9kIiwiX3lpZWxkJGNocm9tZSRzY3JpcHRpIiwiX3lpZWxkJGNocm9tZSRzY3JpcHRpMiIsImhhc01hdGNoIiwiX2NhbGxlZTE0JCIsIl9jb250ZXh0MTQiLCJVUkwiLCJwYXRobmFtZSIsInNjcmlwdGluZyIsImV4ZWN1dGVTY3JpcHQiLCJmdW5jIiwibWF0Y2hUZXh0IiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImFyZ3MiLCJ3ZWJOYXZpZ2F0aW9uIiwib25Db21wbGV0ZWQiLCJfcmVmOSIsIl9jYWxsZWUxMCIsImRldGFpbHMiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsImZyYW1lSWQiLCJfcmVmMTAiLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsInQzIiwidDQiLCJ0NSIsInQ2IiwidDciLCJ0OCIsIl94MjQiLCJfeDIzIiwib25SZW1vdmVkIiwiX2Rvd25sb2FkRGF0YUxvY2FsbHkiLCJfY2FsbGVlMTUiLCJ1c2VySWRSZXN1bHQiLCJjdXJyZW50VXNlcklkIiwidXNlcl9pZCIsImZvbGRlck5hbWUiLCJzbmFwc2hvdHMiLCJpbnRlcmFjdCIsIm9yZGVyRGV0YWlscyIsInNjcmVlbiIsIlJlYXNvbnNBbm5vdGF0aW9uIiwic3RvcmVPcmRlckRldGFpbHMiLCJzZWVuX2ludGVyYWN0Iiwic2Vlbl9zbmFwc2hvdHMiLCJzZWVuX29yZGVyRGV0YWlscyIsInNlZW5fc2NyZWVuIiwic2Vlbl9SZWFzb25zQW5ub3RhdGlvbiIsInNlZW5fc3RvcmVJbnRlcmFjdGlvbnMiLCJzZWVuX2h0bWxTbmFwc2hvdHMiLCJzZWVuX3N0b3JlT3JkZXJEZXRhaWxzIiwic2Vlbl9zdG9yZVNjcmVlbnNob3RzIiwic2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uIiwic2Vzc2lvbkluZm9Db250ZW50IiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJzbmFwc2hvdElkIiwiZnVsbERhdGEiLCJpbnRlcmFjdGlvbnNEYXRhIiwiX3N0ZXAyJHZhbHVlIiwic2NyZWVuc2hvdERhdGEiLCJfemlwIiwiX2Z1bGxEYXRhIiwiaW50ZXJhY3Rpb25zX2pzb24iLCJzY3JlZW5zaG90c0ZvbGRlciIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJfc3RlcDMkdmFsdWUiLCJfc2NyZWVuc2hvdERhdGEiLCJfc2NyZWVuc2hvdElkIiwiYmxvYiIsImh0bWxTbmFwc2hvdHNGb2xkZXIiLCJfaTIiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsIl9zbmFwc2hvdElkIiwiX2h0bWxDb250ZW50IiwiemlwQmxvYiIsInJlYWRlciIsIl9jYWxsZWUxNSQiLCJfY29udGV4dDE1Iiwic2Vlbl9pbnRlcmFjdGlvbnMiLCJzZWVuX3NjcmVlbnNob3RzIiwic2Vlbl9yZWFzb25zQW5ub3RhdGlvbiIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJzdHJpbmdpZnkiLCJzdG9yZW9yZGVyRGV0YWlscyIsImRvd25sb2FkcyIsImRvd25sb2FkIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmlsZW5hbWUiLCJzYXZlQXMiLCJlbnRyaWVzIiwicmVhc29ucyIsImZpbGUiLCJmb2xkZXIiLCJmZXRjaCIsImdlbmVyYXRlQXN5bmMiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYmFzZTY0WmlwIiwic3BsaXQiLCJyZWFkQXNEYXRhVVJMIiwicmVtb3ZlIiwicHJlc2lnbmVkRm9ybURhdGEiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZmllbGRzIiwia2V5IiwiY3VzdG9tRmV0Y2giLCJfcmVmMTEiLCJfY2FsbGVlMTEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsIm9rIiwic3RhdHVzIiwiX3gyNSIsIl94MjYiLCJnemlwSHRtbCIsIl94MjciLCJfZ3ppcEh0bWwiLCJfY2FsbGVlMTYiLCJjb250ZW50IiwiY3MiLCJ3cml0ZXIiLCJlbmNvZGVyIiwiZW5jb2RlZENvbnRlbnQiLCJjb21wcmVzc2VkQmxvYiIsIl9jYWxsZWUxNiQiLCJfY29udGV4dDE2IiwiQ29tcHJlc3Npb25TdHJlYW0iLCJnZXRXcml0ZXIiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsIndyaXRlIiwiY2xvc2UiLCJSZXNwb25zZSIsInJlYWRhYmxlIiwidXBsb2FkRGF0YVRvU2VydmVyIiwiX3VwbG9hZERhdGFUb1NlcnZlciIsIl9jYWxsZWUxNyIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZSIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTIiLCJfbGFzdEdlbmVyYXRlUHJlc2lnbmUzIiwicG9zdFVybFJlc3VsdCIsInNlc3Npb25JbmZvIiwic2Vzc2lvbkZvcm1EYXRhIiwiX2kzIiwiX09iamVjdCRlbnRyaWVzMyIsIl9PYmplY3QkZW50cmllczMkX2kiLCJodG1sQmxvYiIsIl9pdGVyYXRvcjQiLCJfc3RlcDQiLCJfc3RlcDQkdmFsdWUiLCJfZm9ybURhdGEiLCJpbnRlcmFjdGlvbnNCbG9iIiwianNvbkZvcm1EYXRhRmlsZSIsImpzb25Gb3JtRGF0YSIsIl9jYWxsZWUxNyQiLCJfY29udGV4dDE3Iiwic3RvcFBlcmlvZGljVXBsb2FkIiwic3RhcnRQZXJpb2RpY1VwbG9hZCIsInVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCIsImV4cGlyZV90aW1lc3RhbXAiLCJub3ciLCJqc29uIiwiQmxvYiIsImJvZHkiLCJzZXRJbnRlcnZhbCIsInVwbG9hZERhdGFUb1NlcnZlcl9uZXciLCJjbGVhckludGVydmFsIiwiX3VwbG9hZERhdGFUb1NlcnZlcl9uZXciLCJfY2FsbGVlMTgiLCJfbGFzdEdlbmVyYXRlUHJlc2lnbmU0IiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lNSIsImNoZWNrSW50ZXJhY3QiLCJjaGVja3N0b3JlSW50ZXJhY3Rpb25zIiwiY3VycmVudFRpbWVzdGFtcCIsImludGVyYWN0aW9uc1RvVXBsb2FkIiwic25hcHNob3RzVG9VcGxvYWQiLCJzY3JlZW5zaG90c1RvVXBsb2FkIiwicmVhc29uc0Fubm90YXRpb25Ub1VwbG9hZCIsIm9yZGVyRGV0YWlsc1RvVXBsb2FkIiwiX2xhc3RHZW5lcmF0ZVByZXNpZ25lNiIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJfc3RlcDUkdmFsdWUiLCJfaXRlcmF0b3I2IiwiX3N0ZXA2IiwiX3N0ZXA2JHZhbHVlIiwiX2Zvcm1EYXRhMiIsImN1cnJlbnREYXRhIiwibmV3RGF0YSIsIl9jYWxsZWUxOCQiLCJfY29udGV4dDE4IiwiZmlsdGVyIiwiaXRlbSIsIl9yZWYxMiIsIl9yZWYxMyIsInRpbWVzdGFtcE1hdGNoIiwic25hcHNob3RUaW1lc3RhbXAiLCJfcmVmMTQiLCJfcmVmMTUiLCJzY3JlZW5zaG90VGltZXN0YW1wIiwiZnJvbUVudHJpZXMiLCJfcmVmMTYiLCJfcmVmMTciLCJfcmVmMTgiLCJfcmVmMTkiLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==
