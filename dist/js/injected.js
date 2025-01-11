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
/* harmony export */   scroll_threshold: () => (/* binding */ scroll_threshold),
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
var scroll_threshold = 300;

/***/ }),

/***/ "./src/recipe_new.ts":
/*!***************************!*\
  !*** ./src/recipe_new.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/utils/element-processor.ts":
/*!****************************************!*\
  !*** ./src/utils/element-processor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   processElement: () => (/* binding */ processElement)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function processElement(element, recipe) {
  var parentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var nthChild = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  // console.log("processing element: ", element, recipe);
  // Create a new element using the DOM API
  var tagName = recipe.tag_name || element.tagName.toLowerCase();
  // Handle underscored tags
  if (tagName.endsWith('_')) {
    tagName = tagName.slice(0, -1);
  }
  var newElement = document.createElement(tagName);

  // Extract text content based on the recipe
  var elementText = '';
  if (recipe.text_selector) {
    var textElement = element.querySelector(recipe.text_selector);
    if (textElement) {
      elementText = textElement.innerText || textElement.textContent || '';
    }
  } else if (recipe.text_js) {
    elementText = recipe.text_js(element);
    if (elementText === '' || elementText === undefined) {
      // console.log('text js does not detect text for element ', element)
    }
  } else if (recipe.add_text) {
    elementText = element.innerText || element.textContent || '';
  }
  elementText = elementText.replace(/\s+/g, ' ').trim();
  if (recipe.text_format) {
    elementText = recipe.text_format.replace('{}', elementText);
  } else if (recipe.text_format) {
    elementText = recipe.text_format;
  }
  if (elementText && recipe.add_text) {
    newElement.textContent = elementText;
  }

  // Build the node attributes
  var elementName = '';
  if (recipe.name) {
    if (recipe.name === 'from_text') {
      if (!elementText) {
        // console.log('elementText is empty', recipe, element)
        // debugger
      }
      elementName = parentName ? parentName + '.' : '';
      if (!elementText) {
        // console.log("element text not found");
        elementName = '';
      } else {
        elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_');
      }
    } else if (recipe.name === 'from_nth_child') {
      elementName = parentName ? parentName + '.' : '';
      elementName += nthChild.toString();
    } else {
      elementName = parentName ? parentName + '.' : '';
      elementName += recipe.name;
    }
    newElement.setAttribute('name', elementName);
    parentName = elementName;
  }
  if (recipe.generate_metadata) {
    var metaobj = recipe.generate_metadata(element);
    var metadata = JSON.stringify(metaobj.data);
    var metaname = metaobj.name;
    element.setAttribute('data-element-meta-name', metaname);
    element.setAttribute('data-element-meta-data', metadata);
    // console.log('metadata generated: ', metadata, ' with name: ', metaname)
  }

  // Handle clickables and inputs
  if (recipe.clickable) {
    if (!recipe.name) {
      throw new Error('clickable element must have a name');
    }
    // handle click_selector
    var click_element;
    if (recipe.click_selector) {
      click_element = element.querySelector(recipe.click_selector);
    } else {
      click_element = element;
    }
    if (click_element) {
      click_element.setAttribute('data-clickable-id', elementName);
    } else {
      // console.log('click-element not found', element, recipe)
    }
    if (!window.clickable_recipes) {
      window.clickable_recipes = {};
    }
    window.clickable_recipes[elementName] = recipe;
  }
  if (tagName === 'input') {
    var inputType = element.getAttribute('type');
    if (['text', 'number'].includes(inputType)) {
      newElement.setAttribute('value', element.value);
      element.setAttribute('data-input-id', elementName);
    } else if (inputType === 'checkbox') {
      newElement.setAttribute('checked', element.checked.toString());
    } else if (inputType === 'radio') {
      newElement.setAttribute('checked', element.checked.toString());
      element.setAttribute('data-clickable-id', elementName);
    }
    if (!window.input_recipes) {
      window.input_recipes = {};
    }
    window.input_recipes[elementName] = recipe;
  }
  // **Handle select elements**
  if (tagName === 'select') {
    // Tag the select element with data-select-id
    element.setAttribute('data-select-id', elementName);
    var options = element.querySelectorAll('option');
    options.forEach(function (option) {
      var optionValue = option.getAttribute('value') || option.textContent.trim();
      var optionName = elementName + '.' + optionValue;
      var newOption = document.createElement('option');
      newOption.textContent = option.textContent;
      newOption.setAttribute('value', optionValue);
      newOption.setAttribute('name', optionName);
      newOption.setAttribute('selected', option.selected.toString());
      option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
      newElement.appendChild(newOption);
    });
  }
  // Copy specified attributes
  var attrsToCopy = ['alt', 'title', 'type', 'value', 'role', 'aria-label', 'aria-hidden', 'aria-selected'];
  attrsToCopy.forEach(function (attr) {
    var value = element.getAttribute(attr);
    if (value) {
      newElement.setAttribute(attr, value);
    }
  });
  if (recipe.keep_attr) {
    // console.log("attributes to keep: ", recipe.keep_attr);
    var _iterator = _createForOfIteratorHelper(recipe.keep_attr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var value = element.getAttribute(key);
        // console.log(key, value)
        if (value) {
          newElement.setAttribute(key, value);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (recipe['class']) {
    newElement.setAttribute('class', recipe['class']);
  }
  if (recipe['id']) {
    newElement.setAttribute('id', recipe['id']);
  }

  // Override attributes if specified
  if (recipe.override_attr) {
    for (var _key in recipe.override_attr) {
      newElement.setAttribute(_key, recipe.override_attr[_key](element));
    }
  }

  // Process children
  if (recipe.children && recipe.children.length > 0) {
    var _iterator2 = _createForOfIteratorHelper(recipe.children),
      _step2;
    try {
      var _loop = function _loop() {
        var childRecipe = _step2.value;
        var selector = childRecipe.direct_child ? ":scope > ".concat(childRecipe.selector) : childRecipe.selector;
        var childElements = element.querySelectorAll(selector);
        childElements.forEach(function (childElement, index) {
          var childNode = processElement(childElement, childRecipe, parentName, index);
          newElement.appendChild(childNode);
          if (childRecipe.insert_split_marker) {
            var every = childRecipe.insert_split_marker_every || 1;
            if (index % every == 0) {
              var splitMarker = document.createElement('split-marker');
              newElement.appendChild(splitMarker);
              // console.log("inserting split marker 1");
            }
          }
          if (childRecipe.insert_split_marker) {
            // console.log("inserting split marker 2");
            var _splitMarker = document.createElement('split-marker');
            newElement.appendChild(_splitMarker);
          } else {
            // console.log('no split marker')
          }
        });
      };
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  // Handle empty messages
  if (recipe.empty_message && newElement.children.length === 0) {
    var emptyTextNode = document.createTextNode(recipe.empty_message);
    newElement.appendChild(emptyTextNode);
  }
  return newElement;
}

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
/* harmony export */   processRecipe: () => (/* binding */ processRecipe),
/* harmony export */   removeClickableMarkers: () => (/* binding */ removeClickableMarkers),
/* harmony export */   shouldExclude: () => (/* binding */ shouldExclude),
/* harmony export */   update_icon: () => (/* binding */ update_icon)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");
/* harmony import */ var _recipe_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe_new */ "./src/recipe_new.ts");
/* harmony import */ var _element_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-processor */ "./src/utils/element-processor.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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


function selectRecipe() {
  var parsedUrl = new URL(window.location.href);
  var path = parsedUrl.pathname;
  var _iterator = _createForOfIteratorHelper(_recipe_new__WEBPACK_IMPORTED_MODULE_1__.recipes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var recipe = _step.value;
      var matchMethod = recipe.match_method || 'text';
      if (matchMethod === 'text') {
        try {
          var _element$textContent$, _element$textContent;
          // Execute script in tab to check for matching element
          var element = document.querySelector(recipe.match);
          var hasMatch = element && (!recipe.match_text || ((_element$textContent$ = (_element$textContent = element.textContent) === null || _element$textContent === void 0 ? void 0 : _element$textContent.toLowerCase().includes(recipe.match_text.toLowerCase())) !== null && _element$textContent$ !== void 0 ? _element$textContent$ : false));
          if (hasMatch) {
            return recipe;
          }
        } catch (error) {
          console.error('Error checking text match:', error);
        }
      } else if (matchMethod === 'url' && recipe.match === path) {
        return recipe;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  throw new Error("No matching recipe found for path: ".concat(path));
}
function processRecipe() {
  console.log('start process recipe');
  try {
    var recipe = selectRecipe();
    var rootElement = document.querySelector(recipe.selector);
    if (rootElement) {
      var newRoot = (0,_element_processor__WEBPACK_IMPORTED_MODULE_2__.processElement)(rootElement, recipe);
      var simplifiedHTML = newRoot.outerHTML;
      return simplifiedHTML;
    }
  } catch (error) {
    console.error('Error processing recipe:', error);
  }
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
      var simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
      console.log('simplifiedHTML', simplifiedHTML);
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
        eventType: eventType,
        timestamp: timestamp,
        uuid: uuid,
        target: serializedTarget,
        // Replace direct DOM element with serializable object
        htmlSnapshotId: currentSnapshotId,
        selector: selector || '',
        'data-semantic-id': allAttributes['data-clickable-id'] || '',
        'element-meta-name': allAttributes['data-element-meta-name'] || '',
        'element-meta-data': allAttributes['data-element-meta-data'] || '',
        'page-meta': pageMeta || '',
        url: url || '',
        htmlContent: markedDoc.documentElement.outerHTML,
        simplifiedHTML: simplifiedHTML
      };
      if (target.tagName === 'INPUT' && target.type === 'text') {
        data['input-terms'] = target.value;
      }
      if (target.id === 'nav-search-submit-button' && target.type === 'submit') {
        var _document$querySelect;
        data['input-terms'] = (_document$querySelect = document.querySelector('input[id="twotabsearchtextbox"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
      }
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
                  data = captureInteraction('click_a', event.target, timestamp, selector, window.location.href, _uuid);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRDtBQUNBaEgsMERBQWEsQ0FBQ3pJLE1BQU0sQ0FBQzJMLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDcEgsSUFBSSxDQUFDLFVBQUNnRyxNQUFNLEVBQUs7RUFDekQsSUFBSSxDQUFDQSxNQUFNLEVBQUU7SUFDWHVELElBQUksQ0FBQyxDQUFDO0VBQ1I7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGVfbmV3LnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL2VsZW1lbnQtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQG1lZHYvZmluZGVyL2ZpbmRlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2luamVjdGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKTpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSlcIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSk6bm90KDpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSkpXCIsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwibGk6aGFzKGlucHV0W3R5cGU9J2NoZWNrYm94J10pXCIsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsIGRhdGE6IHsgdGl0bGU6IHRleHQsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJsaTpub3QoOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKSlcIixcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsIGRhdGE6IHsgdGl0bGU6IHRleHQsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eScsXG4gIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gIGNsYXNzOiAncHJvZHVjdC1hZGQtdG8tY2FydCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYnV5LW5vdyddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdidXlfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICBzZWxlY3RvcjogJyNidXlCb3hBY2NvcmRpb24gPiBkaXYuYS1ib3guY2Vsd2lkZ2V0JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lOm5vdCg6aGFzKCNuLXRpdGxlKSk6aGFzKHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCk6aGFzKHVsIHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaSk6bm90KCNyZXZpZXdzUmVmaW5lbWVudHMpOm5vdCgjZGVwYXJ0bWVudHMpOm5vdCgjcHJpY2VSZWZpbmVtZW50cyk6bm90KCNmaWx0ZXJzKScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlZmluZW1lbnRfb3B0aW9uXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlcGFydG1lbnQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBlbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZCA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmV2aWV3c1JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXN0b21lciBSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3ByaWNlUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIC8vIDIgY2FzZXM6IHNlbGVjdGlvbiAvIHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwXzM2LXRpdGxlLCBkaXYuc2YtcmVmaW5lbWVudC1oZWFkaW5nIHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDE6IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZGVyLmEtcG9wb3Zlci1oZWFkZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhbltkYXRhLWNvbXBvbmVudC10eXBlPSdzLXByb2R1Y3QtaW1hZ2UnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfc3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDIpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICd0aXRsZScsIHZhbHVlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IGRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUuYW9rLWFsaWduLWNlbnRlci5hb2stcmVsYXRpdmUgPiBzcGFuLmFvay1vZmZzY3JlZW4sICNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ3ByaWNlJywgdmFsdWU6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgbGFiZWwuYS1mb3JtLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBzcGFuLnNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIHNwYW46bm90KC5hb2staGlkZGVuKSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bCwgI2ZlYXR1cmVidWxsZXRzX2ZlYXR1cmVfZGl2IHVsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbToge30nLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYnVsbGV0X2xpc3QnLCB2YWx1ZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMiBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cF90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVCdXlib3ggZGl2LmEtc2VjdGlvbi5hLXRleHQtY2VudGVyLmEtc3BhY2luZy1zbWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ2FzaW4nLCB2YWx1ZTogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9XG5dXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoZWxlbWVudDogYW55LCByZWNpcGU6IGFueSwgcGFyZW50TmFtZSA9ICcnLCBudGhDaGlsZCA9IDApIHtcbiAgLy8gY29uc29sZS5sb2coXCJwcm9jZXNzaW5nIGVsZW1lbnQ6IFwiLCBlbGVtZW50LCByZWNpcGUpO1xuICAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudCB1c2luZyB0aGUgRE9NIEFQSVxuICBsZXQgdGFnTmFtZSA9IHJlY2lwZS50YWdfbmFtZSB8fCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAvLyBIYW5kbGUgdW5kZXJzY29yZWQgdGFnc1xuICBpZiAodGFnTmFtZS5lbmRzV2l0aCgnXycpKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpXG4gIH1cbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcblxuICAvLyBFeHRyYWN0IHRleHQgY29udGVudCBiYXNlZCBvbiB0aGUgcmVjaXBlXG4gIGxldCBlbGVtZW50VGV4dCA9ICcnXG4gIGlmIChyZWNpcGUudGV4dF9zZWxlY3Rvcikge1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS50ZXh0X3NlbGVjdG9yKVxuICAgIGlmICh0ZXh0RWxlbWVudCkge1xuICAgICAgZWxlbWVudFRleHQgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQgfHwgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfanMpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2pzKGVsZW1lbnQpXG4gICAgaWYgKGVsZW1lbnRUZXh0ID09PSAnJyB8fCBlbGVtZW50VGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGV4dCBqcyBkb2VzIG5vdCBkZXRlY3QgdGV4dCBmb3IgZWxlbWVudCAnLCBlbGVtZW50KVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUuYWRkX3RleHQpIHtcbiAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgfVxuICBlbGVtZW50VGV4dCA9IGVsZW1lbnRUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0LnJlcGxhY2UoJ3t9JywgZWxlbWVudFRleHQpXG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXRcbiAgfVxuXG4gIGlmIChlbGVtZW50VGV4dCAmJiByZWNpcGUuYWRkX3RleHQpIHtcbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHRcbiAgfVxuXG4gIC8vIEJ1aWxkIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgbGV0IGVsZW1lbnROYW1lID0gJydcbiAgaWYgKHJlY2lwZS5uYW1lKSB7XG4gICAgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV90ZXh0Jykge1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZWxlbWVudFRleHQgaXMgZW1wdHknLCByZWNpcGUsIGVsZW1lbnQpXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50IHRleHQgbm90IGZvdW5kXCIpO1xuICAgICAgICBlbGVtZW50TmFtZSA9ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50TmFtZSArPSBlbGVtZW50VGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX250aF9jaGlsZCcpIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gbnRoQ2hpbGQudG9TdHJpbmcoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IHJlY2lwZS5uYW1lXG4gICAgfVxuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgZWxlbWVudE5hbWUpXG4gICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lXG4gIH1cblxuICBpZiAocmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKSB7XG4gICAgY29uc3QgbWV0YW9iaiA9IHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YShlbGVtZW50KVxuICAgIGNvbnN0IG1ldGFkYXRhID0gSlNPTi5zdHJpbmdpZnkobWV0YW9iai5kYXRhKVxuICAgIGNvbnN0IG1ldGFuYW1lID0gbWV0YW9iai5uYW1lXG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScsIG1ldGFuYW1lKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJywgbWV0YWRhdGEpXG4gICAgLy8gY29uc29sZS5sb2coJ21ldGFkYXRhIGdlbmVyYXRlZDogJywgbWV0YWRhdGEsICcgd2l0aCBuYW1lOiAnLCBtZXRhbmFtZSlcbiAgfVxuXG4gIC8vIEhhbmRsZSBjbGlja2FibGVzIGFuZCBpbnB1dHNcbiAgaWYgKHJlY2lwZS5jbGlja2FibGUpIHtcbiAgICBpZiAoIXJlY2lwZS5uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsaWNrYWJsZSBlbGVtZW50IG11c3QgaGF2ZSBhIG5hbWUnKVxuICAgIH1cbiAgICAvLyBoYW5kbGUgY2xpY2tfc2VsZWN0b3JcbiAgICBsZXQgY2xpY2tfZWxlbWVudDogRWxlbWVudCB8IG51bGxcbiAgICBpZiAocmVjaXBlLmNsaWNrX3NlbGVjdG9yKSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5jbGlja19zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG4gICAgaWYgKGNsaWNrX2VsZW1lbnQpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2stZWxlbWVudCBub3QgZm91bmQnLCBlbGVtZW50LCByZWNpcGUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgaWYgKFsndGV4dCcsICdudW1iZXInXS5pbmNsdWRlcyhpbnB1dFR5cGUpKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5pbnB1dF9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIC8vICoqSGFuZGxlIHNlbGVjdCBlbGVtZW50cyoqXG4gIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgIC8vIFRhZyB0aGUgc2VsZWN0IGVsZW1lbnQgd2l0aCBkYXRhLXNlbGVjdC1pZFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdC1pZCcsIGVsZW1lbnROYW1lKVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbjogYW55KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgb3B0aW9uLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnROYW1lICsgJy4nICsgb3B0aW9uVmFsdWVcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLnNlbGVjdGVkLnRvU3RyaW5nKCkpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gcHJvY2Vzc0VsZW1lbnQoY2hpbGRFbGVtZW50LCBjaGlsZFJlY2lwZSwgcGFyZW50TmFtZSwgaW5kZXgpXG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlcywgY2hlY2tfdXNlcl9pZF91cmwgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKCkge1xuICBjb25zdCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSgpIHtcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuXG4gIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgJ3RleHQnXG4gICAgaWYgKG1hdGNoTWV0aG9kID09PSAndGV4dCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUubWF0Y2gpXG5cbiAgICAgICAgY29uc3QgaGFzTWF0Y2ggPVxuICAgICAgICAgIGVsZW1lbnQgJiZcbiAgICAgICAgICAoIXJlY2lwZS5tYXRjaF90ZXh0IHx8XG4gICAgICAgICAgICAoZWxlbWVudC50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhyZWNpcGUubWF0Y2hfdGV4dC50b0xvd2VyQ2FzZSgpKSA/PyBmYWxzZSkpXG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgcmV0dXJuIHJlY2lwZVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZWNpcGUoKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKClcbiAgICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cbiIsIi8vIExpY2Vuc2U6IE1JVFxuLy8gQXV0aG9yOiBBbnRvbiBNZWR2ZWRldiA8YW50b25AbWVkdi5pbz5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FudG9ubWVkdi9maW5kZXJcbmNvbnN0IGFjY2VwdGVkQXR0ck5hbWVzID0gbmV3IFNldChbJ3JvbGUnLCAnbmFtZScsICdhcmlhLWxhYmVsJywgJ3JlbCcsICdocmVmJ10pO1xuLyoqIENoZWNrIGlmIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBhcmUgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbmFtZUlzT2sgPSBhY2NlcHRlZEF0dHJOYW1lcy5oYXMobmFtZSk7XG4gICAgbmFtZUlzT2sgfHw9IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSAmJiB3b3JkTGlrZShuYW1lKTtcbiAgICBsZXQgdmFsdWVJc09rID0gd29yZExpa2UodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDEwMDtcbiAgICB2YWx1ZUlzT2sgfHw9IHZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiB3b3JkTGlrZSh2YWx1ZS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5hbWVJc09rICYmIHZhbHVlSXNPaztcbn1cbi8qKiBDaGVjayBpZiBpZCBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZE5hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiBjbGFzcyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiB0YWcgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gdGFnTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKiogRmluZHMgdW5pcXVlIENTUyBzZWxlY3RvcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRlcihpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChpbnB1dC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZW5lcmF0ZSBDU1Mgc2VsZWN0b3IgZm9yIG5vbi1lbGVtZW50IG5vZGUgdHlwZS5gKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICByb290OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBpZE5hbWU6IGlkTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIHRpbWVvdXRNczogMTAwMCxcbiAgICAgICAgc2VlZE1pbkxlbmd0aDogMyxcbiAgICAgICAgb3B0aW1pemVkTWluTGVuZ3RoOiAyLFxuICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IEluZmluaXR5LFxuICAgIH07XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3Qgcm9vdERvY3VtZW50ID0gZmluZFJvb3REb2N1bWVudChjb25maWcucm9vdCwgZGVmYXVsdHMpO1xuICAgIGxldCBmb3VuZFBhdGg7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSkge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMgfHxcbiAgICAgICAgICAgIGNvdW50ID49IGNvbmZpZy5tYXhOdW1iZXJPZlBhdGhDaGVja3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGZQYXRoID0gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIWZQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lb3V0OiBDYW4ndCBmaW5kIGEgdW5pcXVlIHNlbGVjdG9yIGFmdGVyICR7Y29uZmlnLnRpbWVvdXRNc31tc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yKGZQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAodW5pcXVlKGNhbmRpZGF0ZSwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICAgICAgZm91bmRQYXRoID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxlY3RvciB3YXMgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICBjb25zdCBvcHRpbWl6ZWQgPSBbXG4gICAgICAgIC4uLm9wdGltaXplKGZvdW5kUGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpLFxuICAgIF07XG4gICAgb3B0aW1pemVkLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBpZiAob3B0aW1pemVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKG9wdGltaXplZFswXSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcihmb3VuZFBhdGgpO1xufVxuZnVuY3Rpb24qIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgIGxldCBwYXRocyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRpZShjdXJyZW50LCBjb25maWcpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbGV2ZWwpIHtcbiAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2gobGV2ZWwpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgICAgIHBhdGhzLnB1c2goLi4uY29tYmluYXRpb25zKHN0YWNrKSk7XG4gICAgICAgIGlmIChpID49IGNvbmZpZy5zZWVkTWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGhzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB3b3JkTGlrZShuYW1lKSB7XG4gICAgaWYgKC9eW2EtelxcLV17Myx9JC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBuYW1lLnNwbGl0KC8tfFtBLVpdLyk7XG4gICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICAgICAgaWYgKHdvcmQubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1teYWVpb3VdezQsfS9pLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRpZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBjb25zdCBsZXZlbCA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChlbGVtZW50SWQgJiYgY29uZmlnLmlkTmFtZShlbGVtZW50SWQpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJyMnICsgQ1NTLmVzY2FwZShlbGVtZW50SWQpLFxuICAgICAgICAgICAgcGVuYWx0eTogMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZiAoY29uZmlnLmNsYXNzTmFtZShuYW1lKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJy4nICsgQ1NTLmVzY2FwZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5hdHRyKGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGBbJHtDU1MuZXNjYXBlKGF0dHIubmFtZSl9PVwiJHtDU1MuZXNjYXBlKGF0dHIudmFsdWUpfVwiXWAsXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoY29uZmlnLnRhZ05hbWUodGFnTmFtZSkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgcGVuYWx0eTogNSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMTAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBudGggPSBpbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChudGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aENoaWxkKHRhZ05hbWUsIG50aCksXG4gICAgICAgICAgICBwZW5hbHR5OiA1MCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbDtcbn1cbmZ1bmN0aW9uIHNlbGVjdG9yKHBhdGgpIHtcbiAgICBsZXQgbm9kZSA9IHBhdGhbMF07XG4gICAgbGV0IHF1ZXJ5ID0gbm9kZS5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHBhdGhbaV0ubGV2ZWwgfHwgMDtcbiAgICAgICAgaWYgKG5vZGUubGV2ZWwgPT09IGxldmVsIC0gMSkge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ID4gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcGF0aFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gcGVuYWx0eShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgubWFwKChub2RlKSA9PiBub2RlLnBlbmFsdHkpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKTtcbn1cbmZ1bmN0aW9uIGJ5UGVuYWx0eShhLCBiKSB7XG4gICAgcmV0dXJuIHBlbmFsdHkoYSkgLSBwZW5hbHR5KGIpO1xufVxuZnVuY3Rpb24gaW5kZXhPZihpbnB1dCwgdGFnTmFtZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgICAgICh0YWdOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUpKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBpbnB1dCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihjdXJyZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgIHBlbmFsdHk6IE5hTixcbiAgICAgICAgICAgIGxldmVsOiBpLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpZiAodW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gbnRoQ2hpbGQodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtY2hpbGQoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uIG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1vZi10eXBlKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiogY29tYmluYXRpb25zKHN0YWNrLCBwYXRoID0gW10pIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHN0YWNrWzBdKSB7XG4gICAgICAgICAgICB5aWVsZCogY29tYmluYXRpb25zKHN0YWNrLnNsaWNlKDEsIHN0YWNrLmxlbmd0aCksIHBhdGguY29uY2F0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBmaW5kUm9vdERvY3VtZW50KHJvb3ROb2RlLCBkZWZhdWx0cykge1xuICAgIGlmIChyb290Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG4gICAgaWYgKHJvb3ROb2RlID09PSBkZWZhdWx0cy5yb290KSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZS5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcm9vdE5vZGU7XG59XG5mdW5jdGlvbiB1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3QgY3NzID0gc2VsZWN0b3IocGF0aCk7XG4gICAgc3dpdGNoIChyb290RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjc3MpLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHNlbGVjdCBhbnkgbm9kZSB3aXRoIHRoaXMgc2VsZWN0b3I6ICR7Y3NzfWApO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiogb3B0aW1pemUocGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPiAyICYmIHBhdGgubGVuZ3RoID4gY29uZmlnLm9wdGltaXplZE1pbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IFsuLi5wYXRoXTtcbiAgICAgICAgICAgIG5ld1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaWYgKHVuaXF1ZShuZXdQYXRoLCByb290RG9jdW1lbnQpICYmXG4gICAgICAgICAgICAgICAgcm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IobmV3UGF0aCkpID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG5ld1BhdGg7XG4gICAgICAgICAgICAgICAgeWllbGQqIG9wdGltaXplKG5ld1BhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQsXG4gIGlzRnJvbVBvcHVwLFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBmaW5kZXIgfSBmcm9tICdAbWVkdi9maW5kZXInXG4vLyBleHRlbmQgd2luZG93XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIG1vbmtleVBhdGNoZWQ6IGJvb2xlYW5cbiAgICBzaG91bGRFeGNsdWRlOiBib29sZWFuXG4gIH1cbn1cblxuY29uc3Qgd29yayA9ICgpID0+IHtcbiAgY29uc3QgbW9ua2V5UGF0Y2ggPSAoKSA9PiB7XG4gICAgd2luZG93Lm1vbmtleVBhdGNoZWQgPSB0cnVlXG4gICAgY29uc3Qgb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyID0gRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJcblxuICAgIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgICBjb25zdCBUaW1lT3V0ID0gMzAwMDBcblxuICAgIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgICAgdGFyZ2V0OiBhbnksXG4gICAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICAgIHNlbGVjdG9yOiBzdHJpbmcsXG4gICAgICB1cmw6IHN0cmluZyxcbiAgICAgIHV1aWQ6IHN0cmluZ1xuICAgICkge1xuICAgICAgZnVuY3Rpb24gZmluZENsaWNrYWJsZVBhcmVudChcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBkZXB0aDogbnVtYmVyID0gMCxcbiAgICAgICAgYWxsQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9XG4gICAgICApOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICAgICAgLy8gQmFzZSBjYXNlOiBpZiBlbGVtZW50IGlzIG51bGwgb3Igd2UndmUgcmVhY2hlZCBtYXggZGVwdGhcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IGRlcHRoID49IDE1KSByZXR1cm4gYWxsQXR0cmlidXRlc1xuXG4gICAgICAgIC8vIENoZWNrIGFuZCBjb2xsZWN0IGFsbCByZWxldmFudCBhdHRyaWJ1dGVzIGF0IGN1cnJlbnQgbGV2ZWxcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1jbGlja2FibGUtaWQnXSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpIHx8ICcnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykpIHtcbiAgICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gPVxuICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnRpbnVlIHNlYXJjaGluZyB1cCB0aGUgdHJlZSwgcGFzc2luZyBhbG9uZyBjb2xsZWN0ZWQgYXR0cmlidXRlc1xuICAgICAgICByZXR1cm4gZmluZENsaWNrYWJsZVBhcmVudChlbGVtZW50LnBhcmVudEVsZW1lbnQsIGRlcHRoICsgMSwgYWxsQXR0cmlidXRlcylcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICBjb25zb2xlLmxvZygnc2ltcGxpZmllZEhUTUwnLCBzaW1wbGlmaWVkSFRNTClcbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcbiAgICAgIGNvbnN0IGFsbEF0dHJpYnV0ZXMgPSBmaW5kQ2xpY2thYmxlUGFyZW50KHRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICAvLyBDcmVhdGUgYSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0XG4gICAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFya2VkRG9jID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KClcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIHRhcmdldDogc2VyaWFsaXplZFRhcmdldCwgLy8gUmVwbGFjZSBkaXJlY3QgRE9NIGVsZW1lbnQgd2l0aCBzZXJpYWxpemFibGUgb2JqZWN0XG4gICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAnZGF0YS1zZW1hbnRpYy1pZCc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gfHwgJycsXG4gICAgICAgICdlbGVtZW50LW1ldGEtbmFtZSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSB8fCAnJyxcbiAgICAgICAgJ2VsZW1lbnQtbWV0YS1kYXRhJzogYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddIHx8ICcnLFxuICAgICAgICAncGFnZS1tZXRhJzogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgIHVybDogdXJsIHx8ICcnLFxuICAgICAgICBodG1sQ29udGVudDogbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwsXG4gICAgICAgIHNpbXBsaWZpZWRIVE1MOiBzaW1wbGlmaWVkSFRNTFxuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmIHRhcmdldC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgZGF0YVsnaW5wdXQtdGVybXMnXSA9IHRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicgJiYgdGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgIGRhdGFbJ2lucHV0LXRlcm1zJ10gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInR3b3RhYnNlYXJjaHRleHRib3hcIl0nKT8udmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIC8vIHRvZG86IHBhdGNoIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3VwcG9ydCB3cmFwXG4gICAgLy8gY29uc3QgYmxvY2tTaWduYWxzID0ge31cbiAgICAvLyBjb25zdCBmaW5pc2hTaWduYWxzID0ge31cbiAgICBjb25zdCB3YWl0X2Zvcl9hYm9ydCA9IChzaWduYWwpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIC8vIElmIGFscmVhZHkgYWJvcnRlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSwgbGlzdGVuIGZvciB0aGUgYWJvcnQgZXZlbnRcbiAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZXNvbHZlKHZvaWQgMCksIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhc0RlZmF1bHRBY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCBhbmNob3IgPSBlbGVtZW50LmNsb3Nlc3QoJ2EnKVxuICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gaWYgaWQgaXMgbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uXG4gICAgICAvLyBpZiAoZWxlbWVudC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicpIHtcbiAgICAgIC8vICAgcmV0dXJuIHRydWVcbiAgICAgIC8vIH1cblxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIE1vbmtleSBwYXRjaCBhZGRFdmVudExpc3RlbmVyXG4gICAgRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5za2lwX21vbmtleV9wYXRjaCkge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgICBjb25zdCBjYWxsT3JpZ2luYWxMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJyAmJiBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCB3cmFwcGVkTGlzdGVuZXIgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAod2luZG93LnNob3VsZEV4Y2x1ZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgZXhjbHVkZScpXG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCcpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5wdXNoKGNvbnRyb2xsZXIpXG4gICAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNpZ25hbCA9IGV2ZW50LmJsb2NrX3NpZ25hbC5zaWduYWxcbiAgICAgICAgICAgICAgYXdhaXQgd2FpdF9mb3JfYWJvcnQoc2lnbmFsKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgdW5ibG9ja2luZycpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgbm8gYmxvY2sgc2lnbmFsJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMgPSBbXVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIGRldGVjdGVkIG9uOicsIGV2ZW50LnRhcmdldClcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IGZhbHNlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgcGF0Y2ggZXZlbnQnLCBldmVudClcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIGxvZyBiZWZvcmUgYW5kIGFmdGVyIHRpbWVcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBmaW5kZXIoZXZlbnQudGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICAgJ2NsaWNrX2EnLFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgICAvLyBhbGVydChcIjNcIilcbiAgICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2NyZWVuc2hvdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2FpdGluZyBmb3Igc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24nKVxuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbc2NyZWVuc2hvdENvbXBsZXRlLCBpbnRlcmFjdGlvbkNvbXBsZXRlXSlcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uIGNvbXBsZXRlJylcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb21wbGV0ZWRcIilcbiAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgLy8gYWxlcnQoXCIyXCIpXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgICAvLyByZS1kaXNwYXRjaCB0aGUgZXZlbnRcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0ZW5lcilcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAgIC8vIGFib3J0IGFsbCBmaW5pc2hTaWduYWxzXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlLWRpc3BhdGNoIHRoZSBldmVudCBpZiBpdHMgbm90IHByZXZlbnRlZCwgMicpXG4gICAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHRoZSBvcmlnaW5hbCBldmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLCAvLyBFbnN1cmVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9jY3Vyc1xuICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgICAgdmlldzogZXZlbnQudmlldyxcbiAgICAgICAgICAgICAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblk6IGV2ZW50LnNjcmVlblksXG4gICAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgICAgICAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcbiAgICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgICAgICAgICBidXR0b246IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgLy8gUmUtZGlzcGF0Y2ggdGhlIG5ldyBldmVudFxuICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdG8gd2FpdCBmb3Igc2NyZWVuc2hvdCBjb21wbGV0aW9uXG4gICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICdjbGlja19iJyxcbiAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgIGZpbmRlcihldmVudC50YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAvLyBSZXF1ZXN0IHNjcmVlbnNob3RcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2NyZWVuc2hvdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgLy8gYXdhaXQgQVNzY3JlZW5zaG90Q29tcGxldGVcbiAgICAgICAgICAgIC8vIGF3YWl0IGludGVyYWN0aW9uQ29tcGxldGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3YWl0aW5nIGZvciBzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbicpXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbc2NyZWVuc2hvdENvbXBsZXRlLCBpbnRlcmFjdGlvbkNvbXBsZXRlXSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbiBjb21wbGV0ZScpXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9yaWdpbmFsIGxpc3RlbmVyIGFmdGVyIHNjcmVlbnNob3QgaXMgY2FwdHVyZWRcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9yaWdpbmFsIGxpc3RlbmVyIGV2ZW4gaWYgc2NyZWVuc2hvdCBmYWlsc1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwuYWJvcnQoKVxuICAgICAgICAgICAgLy8gYWJvcnQgYWxsIGZpbmlzaFNpZ25hbHNcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5tYXAoKGNvbnRyb2xsZXIpID0+IHdhaXRfZm9yX2Fib3J0KGNvbnRyb2xsZXIuc2lnbmFsKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgd2l0aCB0aGUgd3JhcHBlZCBsaXN0ZW5lclxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIGlmIGJvb2xlYW4sIHNldCBwYXNzaXZlIHRvIHRydWVcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgdXNlQ2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCB3cmFwcGVkTGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIGZvciBub24tY2xpY2sgZXZlbnRzXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gYWRkRXZlbnRMaXN0ZW5lciBzdWNjZXNzZnVsbHkgcGF0Y2hlZC4nKVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrcyBvbiA8YT4gdGFnc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUFuY2hvckNsaWNrcygpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIChldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuc2hvdWxkRXhjbHVkZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBleGNsdWRlJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNGcm9tUG9wdXAoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2ggYicpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCA8YT4gdGFnIGluIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIGluc2lkZSB0aGUgPGE+XG4gICAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuXG4gICAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICAgICAgaWYgKGV2ZW50LmJsb2NrX3NpZ25hbCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQW5jaG9yIGNsaWNrIGV2ZW50IGhhbmRlciBmcm9tIG91ciBvd24gbGlzdGVuZXInKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGFscmVhZHkgYmUgbG9nZ2VkIGluIG90aGVyIGV2ZW50IGxpc3RlbmVycycpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsID0gbmV3IEFib3J0Q29udHJvbGxlcigpXG4gICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscyA9IFtdXG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgICAgLy8gaWYgKCFhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyc3RhcnRQZXJpb2RpY1VwbG9hZGVmXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIC8vIOebkeWQrOaIquWbvuWujOaIkOeahOa2iOaBr1xuICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dCkgLy8gM+enkui2heaXtlxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIC8vIOWPkemAgeaIquWbvuivt+axglxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAgICdjbGlja19jJyxcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIGZpbmRlcih0YXJnZXQsIHtcbiAgICAgICAgICAgICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogMFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyDnrYnlvoXmiKrlm77lrozmiJBcbiAgICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICAgIGF3YWl0IGludGVyYWN0aW9uQ29tcGxldGVcblxuICAgICAgICAgICAgICAvLyDmiKrlm77noa7orqTlrozmiJDlkI7lho3ot7PovaxcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwuYWJvcnQoKVxuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5tYXAoKGNvbnRyb2xsZXIpID0+IHdhaXRfZm9yX2Fib3J0KGNvbnRyb2xsZXIuc2lnbmFsKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkLCAxJylcbiAgICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHRoZSBvcmlnaW5hbCBldmVudFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQudHlwZSwge1xuICAgICAgICAgICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLCAvLyBFbnN1cmVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9jY3Vyc1xuICAgICAgICAgICAgICAgICAgY29tcG9zZWQ6IGV2ZW50LmNvbXBvc2VkLFxuICAgICAgICAgICAgICAgICAgdmlldzogZXZlbnQudmlldyxcbiAgICAgICAgICAgICAgICAgIGRldGFpbDogZXZlbnQuZGV0YWlsLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblk6IGV2ZW50LnNjcmVlblksXG4gICAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgICAgICAgICBhbHRLZXk6IGV2ZW50LmFsdEtleSxcbiAgICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICAgICAgICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgICAgICAgICBidXR0b246IGV2ZW50LmJ1dHRvbixcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBuZXdFdmVudC5qdXN0X2Zvcl9kZWZhdWx0ID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgLy8gUmUtZGlzcGF0Y2ggdGhlIG5ldyBldmVudFxuICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdXNlQ2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICBza2lwX21vbmtleV9wYXRjaDogdHJ1ZSxcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICApIC8vIFVzZSBjYXB0dXJlIHBoYXNlIHRvIGludGVyY2VwdCB0aGUgZXZlbnQgZWFybGllclxuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSA8YT4gdGFnIGNsaWNrc1xuICAgIGhhbmRsZUFuY2hvckNsaWNrcygpXG4gIH1cbiAgaWYgKCF3aW5kb3cubW9ua2V5UGF0Y2hlZCkge1xuICAgIG1vbmtleVBhdGNoKClcbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpXG4gICAgICBzaG91bGRFeGNsdWRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZEV4Y2x1ZGUnLCByZXN1bHQpXG4gICAgICAgIHdpbmRvdy5zaG91bGRFeGNsdWRlID0gcmVzdWx0XG4gICAgICB9KVxuICAgIH0sXG4gICAge1xuICAgICAgb25jZTogdHJ1ZVxuICAgIH1cbiAgKVxufVxuXG4vLyBpZ25vcmUgdXNlciBpZCBmb3Igbm93LCBiZWNhdXNlIGZ1bGwgY2hlY2sgd291bGQgYmUgYXN5bmMuXG5zaG91bGRFeGNsdWRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB3b3JrKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsImZvbGRlcl9uYW1lIiwiemlwIiwidXBsb2FkX3VybCIsImJhc2VfdXJsIiwiZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkIiwidXJsX2luY2x1ZGVzIiwiaW50ZXJhY3Rpb25fc3RhdHVzX3VybCIsImNvbmNhdCIsImNoZWNrX3VzZXJfaWRfdXJsIiwiZmlsdGVyX3VybCIsInNjcm9sbF90aHJlc2hvbGQiLCJuYXYiLCJzZWxlY3RvciIsIm5hbWUiLCJjaGlsZHJlbiIsImdlbmVyYXRlX21ldGFkYXRhIiwiZW0iLCJ0ZXJtIiwidmFsdWUiLCJkYXRhIiwiY2xpY2thYmxlIiwidGV4dF9zZWxlY3RvciIsImFkZF90ZXh0IiwicmVmaW5lbWVudF9vcHRpb24iLCJkaXJlY3RfY2hpbGQiLCJ0ZXh0X2pzIiwiZWxlbWVudCIsInRleHQiLCJhQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwidHJpbSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiX2VsZW1lbnQkY2xvc2VzdCIsIm5hbWVFbSIsImNsb3Nlc3QiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidXJsIiwidGl0bGUiLCJzZWxlY3RlZCIsIl9lbGVtZW50JGNsb3Nlc3QyIiwiX2VsZW1lbnQkY2xvc2VzdDMiLCJfZWxlbWVudCRjbG9zZXN0NCIsInByb2R1Y3RfZmFjdHMiLCJwcm9kdWN0X2RlbGl2ZXJ5IiwicXVhbnRpdHlfc2VsZWN0b3IiLCJkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IiLCJzZXRfdXBfbm93X2J1dHRvbiIsImFkZF90b19jYXJ0X2J1dHRvbiIsImJ1eV9ub3dfYnV0dG9uIiwiYnV5X2JveF93aXRoX2FjY29yZGlvbiIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkiLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAiLCJjYXJ0IiwidGV4dF9mb3JtYXQiLCJyZWNpcGVzIiwibWF0Y2giLCJtYXRjaF9tZXRob2QiLCJfZW0kaW5uZXJUZXh0IiwicmVwbGFjZSIsIl9lbSRpbm5lclRleHQyIiwiX2VtJGlubmVyVGV4dDMiLCJyYW5nZSIsImtlZXBfYXR0ciIsIm92ZXJyaWRlX2F0dHIiLCJzdGVwX3ZhbHVlcyIsImZvcm1FbSIsInByb3AiLCJzdGVwcyIsIkpTT04iLCJwYXJzZSIsInN0ZXBMYWJlbHMiLCJjdXJyZW50X3ZhbHVlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJpbnNlcnRfc3BsaXRfbWFya2VyIiwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSIsImFzaW4iLCJwcmljZUVtIiwicHJpY2UiLCJ0aXRsZUVtIiwidXJsRW0iLCJkZWxpdmVyeUVtIiwiZGVsaXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJsYWJlbCIsIl9lbSRpbm5lclRleHQ0IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJpbm5lckhUTUwiLCJ1bmRlZmluZWQiLCJfZW0kcXVlcnlTZWxlY3RvcjMiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJvcHRpb24iLCJlcnIiLCJmIiwiaW1nQ2hpbGQiLCJhbHQiLCJfZW0kcXVlcnlTZWxlY3RvcjQiLCJfZW0kcXVlcnlTZWxlY3RvcjUiLCJfZW0kcXVlcnlTZWxlY3RvcjYiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidGV4dEVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2VtJHF1ZXJ5U2VsZWN0b3I3IiwiX2VtJHF1ZXJ5U2VsZWN0b3I4IiwiX2VtJGlubmVyVGV4dDUiLCJhc2luRW0iLCJ0ZXJtaW5hdGUiLCJhcmd1bWVudHMiLCJ0ZXJtaW5hdGVfY2FsbGJhY2siLCJwcm9jZXNzRWxlbWVudCIsInJlY2lwZSIsInBhcmVudE5hbWUiLCJsZW5ndGgiLCJudGhDaGlsZCIsInRhZ05hbWUiLCJ0YWdfbmFtZSIsInRvTG93ZXJDYXNlIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5ld0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50VGV4dCIsInRleHRFbGVtZW50IiwidGV4dENvbnRlbnQiLCJlbGVtZW50TmFtZSIsInRvU3RyaW5nIiwic2V0QXR0cmlidXRlIiwibWV0YW9iaiIsIm1ldGFkYXRhIiwic3RyaW5naWZ5IiwibWV0YW5hbWUiLCJFcnJvciIsImNsaWNrX2VsZW1lbnQiLCJ3aW5kb3ciLCJjbGlja2FibGVfcmVjaXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiY2hlY2tlZCIsImlucHV0X3JlY2lwZXMiLCJmb3JFYWNoIiwib3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwibmV3T3B0aW9uIiwiYXBwZW5kQ2hpbGQiLCJhdHRyc1RvQ29weSIsImF0dHIiLCJrZXkiLCJfbG9vcCIsImNoaWxkUmVjaXBlIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImluZGV4IiwiY2hpbGROb2RlIiwiZXZlcnkiLCJzcGxpdE1hcmtlciIsImVtcHR5X21lc3NhZ2UiLCJlbXB0eVRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJ0ZXN0IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiaXNGcm9tUG9wdXAiLCJ1cGRhdGVfaWNvbiIsIl94IiwiX3VwZGF0ZV9pY29uIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJzaG91bGRFeGNsdWRlIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJmaW5kUGFnZU1ldGEiLCJhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSIsImdyb3VwZWRSZXN1bHQiLCJtZXRhTmFtZSIsIm1ldGFEYXRhIiwiZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0IiwiZG9jdW1lbnRDb3B5IiwiY2xvbmVOb2RlIiwiYWxsRWxlbWVudHMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDbGlja2FibGVNYXJrZXJzIiwicmVtb3ZlQXR0cmlidXRlIiwiX3gyIiwiX3Nob3VsZEV4Y2x1ZGUiLCJfY2FsbGVlMiIsImlnbm9yZVVzZXJJZCIsInJlc3VsdCIsInVzZXJJZCIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImhhbmRsZU1lc3NhZ2UiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJzb21lIiwiaW5jbHVkZVVybCIsImV4Y2x1ZGVVcmwiLCJnZW5lcmF0ZUh0bWxTbmFwc2hvdElkIiwidGltZXN0YW1wIiwidXVpZCIsImxvY2F0aW9uIiwiaHJlZiIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjaGVja191c2VyX2lkIiwiX3gzIiwiX2NoZWNrX3VzZXJfaWQiLCJfY2FsbGVlMyIsInVzZXJfaWQiLCJyZXNwb25zZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZldGNoIiwianNvbiIsIm9rIiwidDAiLCJtZXNzYWdlIiwic2VsZWN0UmVjaXBlIiwicGFyc2VkVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJtYXRjaE1ldGhvZCIsIl9lbGVtZW50JHRleHRDb250ZW50JCIsIl9lbGVtZW50JHRleHRDb250ZW50IiwiaGFzTWF0Y2giLCJlcnJvciIsInByb2Nlc3NSZWNpcGUiLCJyb290RWxlbWVudCIsIm5ld1Jvb3QiLCJzaW1wbGlmaWVkSFRNTCIsIm91dGVySFRNTCIsInY0IiwidXVpZHY0IiwiZmluZGVyIiwid29yayIsIm1vbmtleVBhdGNoIiwibW9ua2V5UGF0Y2hlZCIsIm9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciIsIkV2ZW50VGFyZ2V0IiwiVGltZU91dCIsImNhcHR1cmVJbnRlcmFjdGlvbiIsImV2ZW50VHlwZSIsInRhcmdldCIsImZpbmRDbGlja2FibGVQYXJlbnQiLCJkZXB0aCIsImFsbEF0dHJpYnV0ZXMiLCJwYXJlbnRFbGVtZW50IiwicGFnZU1ldGEiLCJjdXJyZW50U25hcHNob3RJZCIsInNlcmlhbGl6ZWRUYXJnZXQiLCJjbGFzc05hbWUiLCJpZCIsIm1hcmtlZERvYyIsImh0bWxTbmFwc2hvdElkIiwiaHRtbENvbnRlbnQiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJ3YWl0X2Zvcl9hYm9ydCIsInNpZ25hbCIsInJlamVjdCIsImFib3J0ZWQiLCJvbmNlIiwiaGFzRGVmYXVsdEFjdGlvbiIsImFuY2hvciIsImxpc3RlbmVyIiwiX3RoaXMiLCJza2lwX21vbmtleV9wYXRjaCIsImNhbGxPcmlnaW5hbExpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJ3cmFwcGVkTGlzdGVuZXIiLCJfcmVmIiwiY29udHJvbGxlciIsIl91dWlkIiwic2NyZWVuc2hvdENvbXBsZXRlIiwiaW50ZXJhY3Rpb25Db21wbGV0ZSIsIm5ld0V2ZW50IiwiX3NjcmVlbnNob3RDb21wbGV0ZSIsIl9kYXRhIiwiX2ludGVyYWN0aW9uQ29tcGxldGUiLCJqdXN0X2Zvcl9kZWZhdWx0IiwiYmxvY2tfc2lnbmFsIiwiQWJvcnRDb250cm9sbGVyIiwiZmluaXNoX3NpZ25hbHMiLCJhYm9ydCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInByZXZlbnREZWZhdWx0IiwibXlfZGVmYXVsdF9wcmV2ZW50ZWQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImhhbmRsZU1lc3NhZ2UxIiwibWF4TnVtYmVyT2ZQYXRoQ2hlY2tzIiwiYWxsIiwibWFwIiwiTW91c2VFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJ2aWV3IiwiZGV0YWlsIiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJidXR0b25zIiwicmVsYXRlZFRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJ0MSIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiaGFuZGxlQW5jaG9yQ2xpY2tzIiwiX3JlZjIiLCJub3ciLCJzdG9wUHJvcGFnYXRpb24iLCJjYXB0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==
