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

/***/ "./src/utils/element-processor.ts":
/*!****************************************!*\
  !*** ./src/utils/element-processor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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

var upload_url = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__.base_url, "/upload");
var interactions_url = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__.base_url, "/interactions");
var generate_presigned_post_url = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__.base_url, "/generate_presigned_post");
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
    var _sender$tab, currentactionSequenceId, uuid, saveData, start_time, screenshotDataUrl, success, _success;
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
            _context2.next = 42;
            break;
          }
          _context2.prev = 18;
          console.log('get screenshot request');
          start_time = new Date().getTime();
          _context2.next = 23;
          return captureScreenshot();
        case 23:
          screenshotDataUrl = _context2.sent;
          console.log('capture screenshot time: ', new Date().getTime() - start_time);
          if (!screenshotDataUrl) {
            _context2.next = 34;
            break;
          }
          _context2.next = 28;
          return saveScreenshot_1(screenshotDataUrl, message.screenshotId);
        case 28:
          success = _context2.sent;
          console.log('save screenshot success', success);
          console.log('time: ', new Date().getTime() - start_time);
          sendResponse({
            success: success,
            message: success ? undefined : 'Failed to capture screenshot'
          });
          _context2.next = 35;
          break;
        case 34:
          sendResponse({
            success: false,
            message: 'Failed to capture screenshot'
          });
        case 35:
          _context2.next = 41;
          break;
        case 37:
          _context2.prev = 37;
          _context2.t1 = _context2["catch"](18);
          console.error('Error in captureScreenshot:', _context2.t1);
          sendResponse({
            success: false,
            message: 'Failed to capture screenshot'
          });
        case 41:
          return _context2.abrupt("return", true);
        case 42:
          if (!(message.action === 'downloadData')) {
            _context2.next = 56;
            break;
          }
          _context2.prev = 43;
          console.log('downloadData');
          _context2.next = 47;
          return downloadDataLocally();
        case 47:
          _success = _context2.sent;
          sendResponse({
            success: _success
          });
          _context2.next = 55;
          break;
        case 51:
          _context2.prev = 51;
          _context2.t2 = _context2["catch"](43);
          console.error('Error handling download:', _context2.t2);
          sendResponse({
            success: false,
            error: _context2.t2.message
          });
        case 55:
          return _context2.abrupt("return", true);
        case 56:
          if (!(message.action === 'clearMemoryCache')) {
            _context2.next = 59;
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
        case 59:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12], [18, 37], [43, 51]]);
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
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(htmlContent, simplifiedHTML, currentSnapshotId) {
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
          htmlSnapshots[currentSnapshotId + '_simplified'] = simplifiedHTML;
          _context3.next = 8;
          return chrome.storage.local.set({
            htmlSnapshots: htmlSnapshots
          });
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function saveHTML(_x3, _x4, _x5) {
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
  return function saveInteraction(_x6, _x7, _x8, _x9, _x10, _x11) {
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
  return function saveScreenshot(_x12, _x13, _x14) {
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
          if (!(Math.random() < _config__WEBPACK_IMPORTED_MODULE_2__.popup_probability && tabId)) {
            _context6.next = 24;
            break;
          }
          console.log('send popup');
          _context6.prev = 5;
          _context6.next = 8;
          return chrome.tabs.sendMessage(tabId, {
            action: 'show_popup',
            question: question
          });
        case 8:
          reason = _context6.sent;
          console.log('reason', reason);
          if (!(reason && reason.input !== null)) {
            _context6.next = 19;
            break;
          }
          newitem = {
            action_uuid: uuid,
            timestamp: timestamp,
            eventType: eventType,
            reason: reason
            // uuid: uuid
          };
          _context6.next = 14;
          return chrome.storage.local.get({
            reasonsAnnotation: []
          });
        case 14:
          result = _context6.sent;
          storeReasonsAnnotation = result.reasonsAnnotation || []; // Add new reason
          storeReasonsAnnotation.push(newitem);
          // Save back to storage
          _context6.next = 19;
          return chrome.storage.local.set({
            reasonsAnnotation: storeReasonsAnnotation
          });
        case 19:
          _context6.next = 24;
          break;
        case 21:
          _context6.prev = 21;
          _context6.t0 = _context6["catch"](5);
          console.error('Error popup:', _context6.t0);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 21]]);
  }));
  return function sendPopup(_x15, _x16, _x17, _x18, _x19) {
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
          (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.update_icon)(tab.url);
          _context8.t0 = tab.url;
          if (!_context8.t0) {
            _context8.next = 15;
            break;
          }
          _context8.next = 14;
          return (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.shouldExclude)(tab.url);
        case 14:
          _context8.t0 = !_context8.sent;
        case 15:
          if (!_context8.t0) {
            _context8.next = 20;
            break;
          }
          timestamp = new Date().toISOString();
          uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
          currentSnapshotId = "html_".concat(hashCode(tab.url), "_").concat(timestamp, "_").concat(uuid);
          chrome.tabs.sendMessage(tabId, {
            action: 'getHTML'
          }, /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response) {
              var htmlContent, simplifiedHTML, pageMeta, currentactionSequenceId;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    htmlContent = response === null || response === void 0 ? void 0 : response.html;
                    simplifiedHTML = response === null || response === void 0 ? void 0 : response.simplifiedHTML;
                    pageMeta = response === null || response === void 0 ? void 0 : response.pageMeta;
                    actionSequenceId++;
                    currentactionSequenceId = actionSequenceId;
                    _context7.next = 7;
                    return Promise.all([saveHTML(htmlContent, simplifiedHTML, currentSnapshotId), saveInteraction('tabActivate', timestamp, tab.url, currentSnapshotId, currentactionSequenceId, uuid, null, pageMeta), saveScreenshot(tab.windowId, timestamp, uuid), sendPopup(tabId, timestamp, 'tabActivate', {}, uuid)]);
                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x21) {
              return _ref8.apply(this, arguments);
            };
          }());
        case 20:
          _context8.next = 25;
          break;
        case 22:
          _context8.prev = 22;
          _context8.t1 = _context8["catch"](0);
          console.error('Error in tab activate handler:', _context8.t1);
        case 25:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 22]]);
  }));
  return function (_x20) {
    return _ref7.apply(this, arguments);
  };
}());
chrome.webNavigation.onCommitted.addListener(/*#__PURE__*/function () {
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
          console.log('webNavigation onHistoryStateUpdated event triggered:', details);
          (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.update_icon)(details.url);
          _context10.next = 6;
          return (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.shouldExclude)(details.url);
        case 6:
          if (_context10.sent) {
            _context10.next = 12;
            break;
          }
          // chrome.tabs.sendMessage(details.tabId, { action: 'processRecipe' })
          navigationType = analyzeNavigation(details.tabId, details.url);
          console.log("Navigation type: ".concat(navigationType, " for tab ").concat(details.tabId, " to ").concat(details.url));
          timestamp = new Date().toISOString();
          uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
          chrome.tabs.sendMessage(details.tabId, {
            action: 'getHTML'
          }, /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(response) {
              var htmlContent, simplifiedHTML, pageMeta, currentSnapshotId, currentactionSequenceId;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    htmlContent = response === null || response === void 0 ? void 0 : response.html;
                    simplifiedHTML = response === null || response === void 0 ? void 0 : response.simplifiedHTML;
                    pageMeta = response === null || response === void 0 ? void 0 : response.pageMeta;
                    currentSnapshotId = "html_".concat(hashCode(details.url), "_").concat(timestamp, "_").concat(uuid);
                    actionSequenceId++;
                    currentactionSequenceId = actionSequenceId;
                    _context9.t0 = Promise;
                    _context9.t1 = saveHTML(htmlContent, simplifiedHTML, currentSnapshotId);
                    _context9.t2 = saveInteraction('navigation', timestamp, details.url, currentSnapshotId, currentactionSequenceId, uuid, navigationType, pageMeta);
                    _context9.t3 = saveScreenshot;
                    _context9.next = 12;
                    return chrome.tabs.get(details.tabId);
                  case 12:
                    _context9.t4 = _context9.sent.windowId;
                    _context9.t5 = timestamp;
                    _context9.t6 = uuid;
                    _context9.t7 = (0, _context9.t3)(_context9.t4, _context9.t5, _context9.t6);
                    _context9.t8 = [_context9.t1, _context9.t2, _context9.t7];
                    _context9.next = 19;
                    return _context9.t0.all.call(_context9.t0, _context9.t8);
                  case 19:
                    if (!(navigationType !== 'new' && navigationType !== 'reload')) {
                      _context9.next = 23;
                      break;
                    }
                    console.log('send message to popup navigation');
                    _context9.next = 23;
                    return sendPopup(details.tabId, timestamp, 'navigation',
                    // currentactionSequenceId,
                    {
                      navigationType: navigationType
                    }, uuid);
                  case 23:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
            return function (_x23) {
              return _ref10.apply(this, arguments);
            };
          }());
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x22) {
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
  _downloadDataLocally = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, interact, orderDetails, screen, ReasonsAnnotation, htmlSnapshots, storeInteractions, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation, sessionInfoContent, _i, _Object$entries, _Object$entries$_i, snapshotId, htmlContent, fullData, interactionsData, _iterator, _step, _step$value, screenshotData, screenshotId, _zip, _fullData, interactions_json, screenshotsFolder, _iterator2, _step2, _step2$value, _screenshotData, _screenshotId, response, blob, htmlSnapshotsFolder, _i2, _Object$entries2, _Object$entries2$_i, _snapshotId, _htmlContent, zipBlob, reader;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Get userId and data from storage
          _context14.next = 4;
          return chrome.storage.local.get({
            userId: ''
          });
        case 4:
          userIdResult = _context14.sent;
          currentUserId = userIdResult.userId;
          user_id = currentUserId || 'unknown';
          folderName = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__.folder_name, "/USER_").concat(user_id, "/SESSION_").concat(timestamp);
          _context14.next = 10;
          return chrome.storage.local.get({
            htmlSnapshots: []
          });
        case 10:
          snapshots = _context14.sent;
          _context14.next = 13;
          return chrome.storage.local.get({
            interactions: []
          });
        case 13:
          interact = _context14.sent;
          _context14.next = 16;
          return chrome.storage.local.get({
            orderDetails: []
          });
        case 16:
          orderDetails = _context14.sent;
          _context14.next = 19;
          return chrome.storage.local.get({
            screenshots: []
          });
        case 19:
          screen = _context14.sent;
          _context14.next = 22;
          return chrome.storage.local.get({
            reasonsAnnotation: []
          });
        case 22:
          ReasonsAnnotation = _context14.sent;
          htmlSnapshots = snapshots.htmlSnapshots || {};
          storeInteractions = interact.interactions || [];
          storeOrderDetails = orderDetails.orderDetails || [];
          storeScreenshots = screen.screenshots || [];
          storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || []; // concatenating with the seen data
          _context14.next = 30;
          return chrome.storage.local.get({
            seen_interactions: []
          });
        case 30:
          seen_interact = _context14.sent;
          _context14.next = 33;
          return chrome.storage.local.get({
            seen_htmlSnapshots: []
          });
        case 33:
          seen_snapshots = _context14.sent;
          _context14.next = 36;
          return chrome.storage.local.get({
            seen_orderDetails: []
          });
        case 36:
          seen_orderDetails = _context14.sent;
          _context14.next = 39;
          return chrome.storage.local.get({
            seen_screenshots: []
          });
        case 39:
          seen_screen = _context14.sent;
          _context14.next = 42;
          return chrome.storage.local.get({
            seen_reasonsAnnotation: []
          });
        case 42:
          seen_ReasonsAnnotation = _context14.sent;
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
          if (_config__WEBPACK_IMPORTED_MODULE_2__.zip) {
            _context14.next = 75;
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
            _context14.next = 66;
            break;
          }
          _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), snapshotId = _Object$entries$_i[0], htmlContent = _Object$entries$_i[1];
          _context14.next = 63;
          return chrome.downloads.download({
            url: 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent),
            filename: "".concat(folderName, "/html/").concat(snapshotId.replace(/[:.]/g, '-'), ".html"),
            saveAs: false
          });
        case 63:
          _i++;
          _context14.next = 59;
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
          _iterator = _createForOfIteratorHelper(storeScreenshots);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _step$value = _slicedToArray(_step.value, 2), screenshotData = _step$value[0], screenshotId = _step$value[1];
              chrome.downloads.download({
                url: screenshotData,
                filename: "".concat(folderName, "/screenshots/").concat(screenshotId.replace(/[:.]/g, '-'), ".jpg"),
                saveAs: false
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _context14.next = 113;
          break;
        case 75:
          console.log('downloading zip file');
          _zip = new (jszip__WEBPACK_IMPORTED_MODULE_0___default())();
          _zip.file('session_info.txt', "Session data for timestamp: ".concat(timestamp, "\n          \n user id: ").concat(user_id, "\n                \n order details:\n                \n ").concat(JSON.stringify(orderDetails)));
          _fullData = {
            interactions: storeInteractions,
            reasons: storeReasonsAnnotation,
            orderDetails: orderDetails
          };
          interactions_json = JSON.stringify(_fullData, null, 2);
          _zip.file('interactions.json', interactions_json);
          screenshotsFolder = _zip.folder('screenshots');
          _iterator2 = _createForOfIteratorHelper(storeScreenshots);
          _context14.prev = 83;
          _iterator2.s();
        case 85:
          if ((_step2 = _iterator2.n()).done) {
            _context14.next = 96;
            break;
          }
          _step2$value = _slicedToArray(_step2.value, 2), _screenshotData = _step2$value[0], _screenshotId = _step2$value[1];
          _context14.next = 89;
          return fetch(_screenshotData);
        case 89:
          response = _context14.sent;
          _context14.next = 92;
          return response.blob();
        case 92:
          blob = _context14.sent;
          screenshotsFolder.file(_screenshotId.replace(/[:.]/g, '-') + '.jpg', blob);
        case 94:
          _context14.next = 85;
          break;
        case 96:
          _context14.next = 101;
          break;
        case 98:
          _context14.prev = 98;
          _context14.t0 = _context14["catch"](83);
          _iterator2.e(_context14.t0);
        case 101:
          _context14.prev = 101;
          _iterator2.f();
          return _context14.finish(101);
        case 104:
          htmlSnapshotsFolder = _zip.folder('htmlSnapshots');
          for (_i2 = 0, _Object$entries2 = Object.entries(htmlSnapshots); _i2 < _Object$entries2.length; _i2++) {
            _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), _snapshotId = _Object$entries2$_i[0], _htmlContent = _Object$entries2$_i[1];
            htmlSnapshotsFolder.file(_snapshotId + '.html', _htmlContent);
          }
          _context14.next = 108;
          return _zip.generateAsync({
            type: 'blob'
          });
        case 108:
          zipBlob = _context14.sent;
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
          return _context14.abrupt("return", true);
        case 117:
          _context14.prev = 117;
          _context14.t1 = _context14["catch"](0);
          console.error('Error download data:', _context14.t1);
          return _context14.abrupt("return", false);
        case 121:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 117], [83, 98, 101, 104]]);
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
  return function customFetch(_x24, _x25) {
    return _ref11.apply(this, arguments);
  };
}();
function gzipHtml(_x26) {
  return _gzipHtml.apply(this, arguments);
} // async function uploadDataToServer() {
//   stopPeriodicUpload()
//   try {
//     const interact = await chrome.storage.local.get({ interactions: [] })
//     const storeInteractions = interact.interactions || []
//     // Check if there are any interactions and get the latest timestamp
//     if (storeInteractions.length === 0) {
//       console.log('No interactions to upload')
//       startPeriodicUpload()
//       return false
//     }
//     lastTimestamp = await chrome.storage.local.get({
//       user_interaction_tracker_last_timestamp: null
//     })
//     lastTimestamp = lastTimestamp.user_interaction_tracker_last_timestamp || null
//     if (lastTimestamp) console.log('lastTimestamp restored: ', lastTimestamp)
//     const timestamp = lastTimestamp || new Date().toISOString().replace(/[:.]/g, '-')
//     await chrome.storage.local.set({
//       user_interaction_tracker_last_timestamp: timestamp
//     }) // making sure with reopening the browser, it continues from left point and rewrites the information
//     // Get userId and data from storage
//     const userIdResult = await chrome.storage.local.get({ userId: '' })
//     const currentUserId = userIdResult.userId
//     let user_id = currentUserId || 'unknown'
//     const folderName = `${folder_name}/USER/${user_id}`
//     const snapshots = await chrome.storage.local.get({ htmlSnapshots: [] })
//     const orderDetails = await chrome.storage.local.get({ orderDetails: [] })
//     const screen = await chrome.storage.local.get({ screenshots: [] })
//     const ReasonsAnnotation = await chrome.storage.local.get({ reasonsAnnotation: [] })
//     let htmlSnapshots = snapshots.htmlSnapshots || {}
//     let storeOrderDetails = orderDetails.orderDetails || []
//     let storeScreenshots = screen.screenshots || []
//     let storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || []
//     const fullData = {
//       interactions: storeInteractions,
//       reasons: storeReasonsAnnotation,
//       orderDetails: storeOrderDetails
//     }
//     if (
//       !lastGeneratePresignedPostResponse ||
//       lastGeneratePresignedPostResponse?.expire_timestamp < Date.now() / 1000 || // prevent from requesting for post url over and over
//       !lastGeneratePresignedPostResponse?.fields?.key.includes(user_id)
//     ) {
//       console.log('getting new post url')
//       console.log(`${generate_presigned_post_url}?user_id=${user_id}`)
//       let postUrlResult = await customFetch(`${generate_presigned_post_url}?user_id=${user_id}`, {
//         method: 'GET'
//       })
//       lastGeneratePresignedPostResponse = await postUrlResult.json()
//       console.log(
//         'new post url received',
//         lastGeneratePresignedPostResponse?.expire_timestamp - Date.now() / 1000
//       )
//     }
//     try {
//       const sessionInfo = new Blob(
//         [
//           `Session data for timestamp: ${timestamp}
//                     \n user id: ${user_id}
//                     \n order details:
//                     \n ${JSON.stringify(orderDetails)}`
//         ],
//         { type: 'text/plain' }
//       )
//       const sessionFormData = presignedFormData(
//         `${folderName}/order_info/order_info_${timestamp}.txt`
//       )
//       sessionFormData.append('file', sessionInfo)
//       console.log('uploading session info')
//       await customFetch(lastGeneratePresignedPostResponse.url, {
//         method: 'POST',
//         body: sessionFormData
//       })
//       // Upload HTML snapshots as separate files
//       console.log('uploading html snapshots')
//       for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
//         // const htmlBlob = new Blob([htmlContent], { type: 'text/html' })
//         const htmlBlob = await gzipHtml(htmlContent)
//         const formData = presignedFormData(`${folderName}/html/${snapshotId}.html.gz`)
//         formData.append('file', htmlBlob)
//         await customFetch(lastGeneratePresignedPostResponse.url, {
//           method: 'POST',
//           body: formData
//         })
//       }
//       // Upload screenshots
//       console.log('uploading screenshots')
//       for (const [screenshotData, screenshotId] of storeScreenshots) {
//         const response = await customFetch(screenshotData)
//         const blob = await response.blob()
//         const formData = presignedFormData(
//           `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, '-')}.jpg`
//         )
//         formData.append('file', blob)
//         console.log('uploading screenshots')
//         await customFetch(lastGeneratePresignedPostResponse.url, {
//           method: 'POST',
//           body: formData
//         }).catch(() => {
//           throw new Error(`Error: ${e}`)
//         })
//       }
//       // Upload interactions JSON
//       console.log('uploading interactions')
//       const interactions_json = JSON.stringify(fullData, null, 2)
//       const interactionsBlob = new Blob([interactions_json], {
//         type: 'application/json'
//       })
//       const jsonFormDataFile = presignedFormData(
//         `${folderName}/interactions/interactions_${timestamp}.json`
//       )
//       jsonFormDataFile.append('file', interactionsBlob)
//       await customFetch(lastGeneratePresignedPostResponse.url, {
//         method: 'POST',
//         body: jsonFormDataFile
//       })
//       const jsonFormData = new FormData()
//       jsonFormData.append('interactions', interactions_json)
//       jsonFormData.append('user_id', user_id)
//       console.log('uploading interactions as a json')
//       await customFetch(interactions_url, {
//         method: 'POST',
//         body: jsonFormData
//       })
//     } catch (error) {
//       startPeriodicUpload()
//       console.error('Error uploading data:', error)
//       return false
//     }
//     if (user_id.includes(data_collector_secret_id)) {
//       const seen_interact = await chrome.storage.local.get({ seen_interactions: [] })
//       const seen_snapshots = await chrome.storage.local.get({ seen_htmlSnapshots: [] })
//       const seen_orderDetails = await chrome.storage.local.get({ seen_orderDetails: [] })
//       const seen_screen = await chrome.storage.local.get({ seen_screenshots: [] })
//       const seen_ReasonsAnnotation = await chrome.storage.local.get({ seen_reasonsAnnotation: [] })
//       let seen_storeInteractions = seen_interact.interactions || []
//       let seen_htmlSnapshots = seen_snapshots.htmlSnapshots || {}
//       let seen_storeOrderDetails = seen_orderDetails.orderDetails || []
//       let seen_storeScreenshots = seen_screen.screenshots || []
//       let seen_storeReasonsAnnotation = seen_ReasonsAnnotation.reasonsAnnotation || []
//       seen_storeInteractions = [...seen_storeInteractions, ...storeInteractions]
//       seen_htmlSnapshots = { ...seen_htmlSnapshots, ...htmlSnapshots }
//       seen_storeOrderDetails = [...seen_storeOrderDetails, ...storeOrderDetails]
//       seen_storeScreenshots = [...seen_storeScreenshots, ...storeScreenshots]
//       seen_storeReasonsAnnotation = [...seen_storeReasonsAnnotation, ...storeReasonsAnnotation]
//       await chrome.storage.local.set({ seen_interactions: seen_storeInteractions })
//       await chrome.storage.local.set({ seen_htmlSnapshots })
//       await chrome.storage.local.set({ seen_orderDetails: seen_storeOrderDetails })
//       await chrome.storage.local.set({ seen_screenshots: seen_storeScreenshots })
//       await chrome.storage.local.set({ seen_reasonsAnnotation: seen_storeReasonsAnnotation })
//     }
//     lastTimestamp = null
//     chrome.storage.local.remove([
//       'htmlSnapshots',
//       'orderDetails',
//       'screenshots',
//       'reasonsAnnotation',
//       'interactions',
//       'user_interaction_tracker_last_timestamp'
//     ])
//     interactions.length = 0
//     screenshots.length = 0
//     reasonsAnnotation.length = 0
//     startPeriodicUpload()
//     return true
//   } catch (error) {
//     startPeriodicUpload()
//     console.error('Error uploading data:', error)
//     return false
//   }
// }
// Start the periodic upload timer
function _gzipHtml() {
  _gzipHtml = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(content) {
    var cs, writer, encoder, encodedContent, compressedBlob;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
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
          _context15.next = 8;
          return new Response(cs.readable).blob();
        case 8:
          compressedBlob = _context15.sent;
          return _context15.abrupt("return", compressedBlob);
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _gzipHtml.apply(this, arguments);
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
} // if user id change
function _uploadDataToServer_new() {
  _uploadDataToServer_new = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    var _lastGeneratePresigne, _lastGeneratePresigne2, checkInteract, checkstoreInteractions, currentTimestamp, timestamp, userIdResult, currentUserId, user_id, folderName, snapshots, orderDetails, screen, ReasonsAnnotation, interact, storeInteractions, htmlSnapshots, storeOrderDetails, storeScreenshots, storeReasonsAnnotation, interactionsToUpload, snapshotsToUpload, screenshotsToUpload, reasonsAnnotationToUpload, orderDetailsToUpload, fullData, _lastGeneratePresigne3, postUrlResult, sessionInfo, sessionFormData, sessionUploadPromise, htmlUploadPromises, screenshotUploadPromises, interactions_json, interactionsBlob, jsonFormDataFile, jsonUploadPromise, jsonFormData, json2dbUploadPromise, seen_interact, seen_snapshots, seen_orderDetails, seen_screen, seen_ReasonsAnnotation, seen_storeInteractions, seen_htmlSnapshots, seen_storeOrderDetails, seen_storeScreenshots, seen_storeReasonsAnnotation, currentData, newData;
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
          folderName = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__.folder_name, "/USER/").concat(user_id);
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
          if (!(!lastGeneratePresignedPostResponse || ((_lastGeneratePresigne = lastGeneratePresignedPostResponse) === null || _lastGeneratePresigne === void 0 ? void 0 : _lastGeneratePresigne.expire_timestamp) < Date.now() / 1000 ||
          // prevent from requesting for post url over and over
          !((_lastGeneratePresigne2 = lastGeneratePresignedPostResponse) !== null && _lastGeneratePresigne2 !== void 0 && (_lastGeneratePresigne2 = _lastGeneratePresigne2.fields) !== null && _lastGeneratePresigne2 !== void 0 && _lastGeneratePresigne2.key.includes(user_id)))) {
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
          console.log('new post url received', ((_lastGeneratePresigne3 = lastGeneratePresignedPostResponse) === null || _lastGeneratePresigne3 === void 0 ? void 0 : _lastGeneratePresigne3.expire_timestamp) - Date.now() / 1000);
        case 65:
          _context18.prev = 65;
          sessionInfo = new Blob(["Session data for timestamp: ".concat(timestamp, "\n                    \n user id: ").concat(user_id, "\n                    \n order details:\n                    \n ").concat(JSON.stringify(orderDetailsToUpload))], {
            type: 'text/plain'
          });
          sessionFormData = presignedFormData("".concat(folderName, "/order_info/order_info_").concat(timestamp, ".txt"));
          sessionFormData.append('file', sessionInfo);
          console.log('uploading session info');
          sessionUploadPromise = customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: sessionFormData
          }); // Upload HTML snapshots as separate files
          console.log('uploading html snapshots');
          htmlUploadPromises = snapshotsToUpload.map(/*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(_ref16) {
              var _ref18, snapshotId, htmlContent, htmlBlob, formData;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _ref18 = _slicedToArray(_ref16, 2), snapshotId = _ref18[0], htmlContent = _ref18[1];
                    _context16.next = 3;
                    return gzipHtml(htmlContent);
                  case 3:
                    htmlBlob = _context16.sent;
                    formData = presignedFormData("".concat(folderName, "/html/").concat(snapshotId, ".html.gz"));
                    formData.append('file', htmlBlob);
                    return _context16.abrupt("return", customFetch(lastGeneratePresignedPostResponse.url, {
                      method: 'POST',
                      body: formData
                    }));
                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }));
            return function (_x27) {
              return _ref17.apply(this, arguments);
            };
          }()); // Upload screenshots
          console.log('uploading screenshots');
          screenshotUploadPromises = screenshotsToUpload.map(/*#__PURE__*/function () {
            var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(_ref19) {
              var _ref21, screenshotData, screenshotId, response, blob, formData;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    _ref21 = _slicedToArray(_ref19, 2), screenshotData = _ref21[0], screenshotId = _ref21[1];
                    _context17.next = 3;
                    return customFetch(screenshotData);
                  case 3:
                    response = _context17.sent;
                    _context17.next = 6;
                    return response.blob();
                  case 6:
                    blob = _context17.sent;
                    formData = presignedFormData("".concat(folderName, "/screenshots/").concat(screenshotId.replace(/[:.]/g, '-'), ".jpg"));
                    formData.append('file', blob);
                    console.log('uploading screenshots');
                    return _context17.abrupt("return", customFetch(lastGeneratePresignedPostResponse.url, {
                      method: 'POST',
                      body: formData
                    }));
                  case 11:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }));
            return function (_x28) {
              return _ref20.apply(this, arguments);
            };
          }()); // Upload interactions JSON
          console.log('uploading interactions');
          interactions_json = JSON.stringify(fullData, null, 2);
          interactionsBlob = new Blob([interactions_json], {
            type: 'application/json'
          });
          jsonFormDataFile = presignedFormData("".concat(folderName, "/interactions/interactions_").concat(timestamp, ".json"));
          jsonFormDataFile.append('file', interactionsBlob);
          jsonUploadPromise = customFetch(lastGeneratePresignedPostResponse.url, {
            method: 'POST',
            body: jsonFormDataFile
          });
          jsonFormData = new FormData();
          jsonFormData.append('interactions', interactions_json);
          jsonFormData.append('user_id', user_id);
          console.log('uploading interactions as a json');
          json2dbUploadPromise = customFetch(interactions_url, {
            method: 'POST',
            body: jsonFormData
          });
          _context18.next = 88;
          return Promise.all([sessionUploadPromise].concat(_toConsumableArray(htmlUploadPromises), _toConsumableArray(screenshotUploadPromises), [jsonUploadPromise, json2dbUploadPromise]));
        case 88:
          _context18.next = 95;
          break;
        case 90:
          _context18.prev = 90;
          _context18.t0 = _context18["catch"](65);
          startPeriodicUpload();
          console.error('Error uploading data:', _context18.t0);
          return _context18.abrupt("return", false);
        case 95:
          if (!user_id.includes(_config__WEBPACK_IMPORTED_MODULE_2__.data_collector_secret_id)) {
            _context18.next = 131;
            break;
          }
          _context18.next = 98;
          return chrome.storage.local.get({
            seen_interactions: []
          });
        case 98:
          seen_interact = _context18.sent;
          _context18.next = 101;
          return chrome.storage.local.get({
            seen_htmlSnapshots: []
          });
        case 101:
          seen_snapshots = _context18.sent;
          _context18.next = 104;
          return chrome.storage.local.get({
            seen_orderDetails: []
          });
        case 104:
          seen_orderDetails = _context18.sent;
          _context18.next = 107;
          return chrome.storage.local.get({
            seen_screenshots: []
          });
        case 107:
          seen_screen = _context18.sent;
          _context18.next = 110;
          return chrome.storage.local.get({
            seen_reasonsAnnotation: []
          });
        case 110:
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
          _context18.next = 123;
          return chrome.storage.local.set({
            seen_interactions: seen_storeInteractions
          });
        case 123:
          _context18.next = 125;
          return chrome.storage.local.set({
            seen_htmlSnapshots: seen_htmlSnapshots
          });
        case 125:
          _context18.next = 127;
          return chrome.storage.local.set({
            seen_orderDetails: seen_storeOrderDetails
          });
        case 127:
          _context18.next = 129;
          return chrome.storage.local.set({
            seen_screenshots: seen_storeScreenshots
          });
        case 129:
          _context18.next = 131;
          return chrome.storage.local.set({
            seen_reasonsAnnotation: seen_storeReasonsAnnotation
          });
        case 131:
          lastTimestamp = null;
          lastuploadTimestamp = currentTimestamp;
          _context18.next = 135;
          return chrome.storage.local.set({
            lastuploadTimestamp: lastuploadTimestamp
          });
        case 135:
          _context18.next = 137;
          return chrome.storage.local.get({
            interactions: [],
            htmlSnapshots: {},
            orderDetails: [],
            screenshots: [],
            reasonsAnnotation: []
          });
        case 137:
          currentData = _context18.sent;
          newData = {
            interactions: currentData.interactions.filter(function (item) {
              return item.timestamp > currentTimestamp;
            }),
            htmlSnapshots: Object.fromEntries(Object.entries(currentData.htmlSnapshots).filter(function (_ref22) {
              var _ref23 = _slicedToArray(_ref22, 1),
                snapshotId = _ref23[0];
              var timestampMatch = snapshotId.match(/_(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z)_/);
              if (!timestampMatch) return true;
              var snapshotTimestamp = timestampMatch[1];
              return snapshotTimestamp > currentTimestamp;
            })),
            orderDetails: currentData.orderDetails.filter(function (item) {
              return item.timestamp > currentTimestamp;
            }),
            screenshots: currentData.screenshots.filter(function (_ref24) {
              var _ref25 = _slicedToArray(_ref24, 2),
                _ = _ref25[0],
                screenshotId = _ref25[1];
              var timestampMatch = screenshotId.match(/screenshot_(.+?)_/);
              if (!timestampMatch) return true;
              var screenshotTimestamp = timestampMatch[1];
              return screenshotTimestamp > currentTimestamp;
            }),
            reasonsAnnotation: currentData.reasonsAnnotation.filter(function (item) {
              return item.timestamp > currentTimestamp;
            })
          };
          _context18.next = 141;
          return chrome.storage.local.set(newData);
        case 141:
          chrome.storage.local.remove('user_interaction_tracker_last_timestamp');

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
        case 146:
          _context18.prev = 146;
          _context18.t1 = _context18["catch"](1);
          startPeriodicUpload();
          console.error('Error uploading data:', _context18.t1);
          return _context18.abrupt("return", false);
        case 151:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[1, 146], [65, 90]]);
  }));
  return _uploadDataToServer_new.apply(this, arguments);
}
chrome.storage.local.onChanged.addListener(function (changes) {
  if (changes.userId) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      var _tabs$;
      var url = (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.url;
      (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.update_icon)(url);
    });
  }
});
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'invalid_user_id') {
    console.log('invalid_user_id', message);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBLFNBQUEwZSxVQUFBO0VBQUFBLFNBQUEsR0FBQWpWLGlCQUFBLGNBQUFyRyxtQkFBQSxHQUFBMEUsSUFBQSxDQWxPQSxTQUFBNlcsVUFBd0JDLE9B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TSxFQUFFQyxZQUFZLEVBQUs7RUFDdEUsSUFBSXZELE9BQU8sQ0FBQ2xFLE1BQU0sS0FBSyxpQkFBaUIsRUFBRTtJQUN4QzdQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFOFQsT0FBTyxDQUFDO0VBQ3pDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2pzemlwL2Rpc3QvanN6aXAubWluLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICBzZWxlY3RvcjogJyNuYXZiYXItbWFpbicsXG4gIG5hbWU6ICduYXZfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKVwiLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKTpub3QoOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKSlcIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJsaTpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSlcIixcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImxpOm5vdCg6aGFzKGlucHV0W3R5cGU9J2NoZWNrYm94J10pKVwiLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLCBkYXRhOiB7IHRpdGxlOiB0ZXh0LCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHMnLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X25hbWUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXByb2R1Y3QtaW1hZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXZhaWxhYmxlX2NvbG9ycycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtcGFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy10eXBlPSdsaW5rJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdhZGQtdG8tY2FydCddIGJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ3RpdGxlJywgdmFsdWU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZS5hb2stYWxpZ24tY2VudGVyLmFvay1yZWxhdGl2ZSA+IHNwYW4uYW9rLW9mZnNjcmVlbiwgI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAncHJpY2UnLCB2YWx1ZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgc3Bhbjpub3QoLmFvay1oaWRkZW4pIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEVtLmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1zaW5nbGV0b24taGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dF90aGlzX2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWJvdXQgdGhpcyBpdGVtOiB7fScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdidWxsZXRfbGlzdCcsIHZhbHVlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdhc2luJywgdmFsdWU6IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICdhc2luJywgdmFsdWU6IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH1cbl1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50OiBhbnksIHJlY2lwZTogYW55LCBwYXJlbnROYW1lID0gJycsIG50aENoaWxkID0gMCkge1xuICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgZWxlbWVudDogXCIsIGVsZW1lbnQsIHJlY2lwZSk7XG4gIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSlcbiAgfVxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgbGV0IGVsZW1lbnRUZXh0ID0gJydcbiAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpXG4gICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfanMoZWxlbWVudClcbiAgICBpZiAoZWxlbWVudFRleHQgPT09ICcnIHx8IGVsZW1lbnRUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0IGpzIGRvZXMgbm90IGRldGVjdCB0ZXh0IGZvciBlbGVtZW50ICcsIGVsZW1lbnQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICBpZiAoWyd0ZXh0JywgJ251bWJlciddLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dC1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJywgZWxlbWVudE5hbWUpXG5cbiAgICBjb25zdCBvcHRpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKSB8fCBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpXG4gICAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudE5hbWUgKyAnLicgKyBvcHRpb25WYWx1ZVxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uc2VsZWN0ZWQudG9TdHJpbmcoKSlcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgb3B0aW9uTmFtZSkgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKVxuICAgIH0pXG4gIH1cbiAgLy8gQ29weSBzcGVjaWZpZWQgYXR0cmlidXRlc1xuICBjb25zdCBhdHRyc1RvQ29weSA9IFtcbiAgICAnYWx0JyxcbiAgICAndGl0bGUnLFxuICAgICd0eXBlJyxcbiAgICAndmFsdWUnLFxuICAgICdyb2xlJyxcbiAgICAnYXJpYS1sYWJlbCcsXG4gICAgJ2FyaWEtaGlkZGVuJyxcbiAgICAnYXJpYS1zZWxlY3RlZCdcbiAgXVxuICBhdHRyc1RvQ29weS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuICB9KVxuICBpZiAocmVjaXBlLmtlZXBfYXR0cikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlcyB0byBrZWVwOiBcIiwgcmVjaXBlLmtlZXBfYXR0cik7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcmVjaXBlLmtlZXBfYXR0cikge1xuICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpXG4gICAgICAvLyBjb25zb2xlLmxvZyhrZXksIHZhbHVlKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChyZWNpcGVbJ2NsYXNzJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZWNpcGVbJ2NsYXNzJ10pXG4gIH1cbiAgaWYgKHJlY2lwZVsnaWQnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHJlY2lwZVsnaWQnXSlcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIGF0dHJpYnV0ZXMgaWYgc3BlY2lmaWVkXG4gIGlmIChyZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHJlY2lwZS5vdmVycmlkZV9hdHRyW2tleV0oZWxlbWVudCkpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyBjaGlsZHJlblxuICBpZiAocmVjaXBlLmNoaWxkcmVuICYmIHJlY2lwZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCBjaGlsZFJlY2lwZSBvZiByZWNpcGUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2hpbGRSZWNpcGUuZGlyZWN0X2NoaWxkXG4gICAgICAgID8gYDpzY29wZSA+ICR7Y2hpbGRSZWNpcGUuc2VsZWN0b3J9YFxuICAgICAgICA6IGNoaWxkUmVjaXBlLnNlbGVjdG9yXG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBwcm9jZXNzRWxlbWVudChjaGlsZEVsZW1lbnQsIGNoaWxkUmVjaXBlLCBwYXJlbnROYW1lLCBpbmRleClcbiAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpXG4gICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgY29uc3QgZXZlcnkgPSBjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IHx8IDFcbiAgICAgICAgICBpZiAoaW5kZXggJSBldmVyeSA9PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDFcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDJcIik7XG4gICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vIHNwbGl0IG1hcmtlcicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIGVtcHR5IG1lc3NhZ2VzXG4gIGlmIChyZWNpcGUuZW1wdHlfbWVzc2FnZSAmJiBuZXdFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZWNpcGUuZW1wdHlfbWVzc2FnZSlcbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpXG4gIH1cblxuICByZXR1cm4gbmV3RWxlbWVudFxufVxuIiwiaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4gICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICByZXR1cm4gcmVjaXBlXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlY2lwZSgpIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IHByb2Nlc3MgcmVjaXBlJylcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNpcGUgPSBzZWxlY3RSZWNpcGUoKVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSlcbiAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gbmV3Um9vdC5vdXRlckhUTUxcbiAgICAgIHJldHVybiBzaW1wbGlmaWVkSFRNTFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwcm9jZXNzaW5nIHJlY2lwZTonLCBlcnJvcilcbiAgfVxufVxuIiwiLyohXG5cbkpTWmlwIHYzLjEwLjEgLSBBIEphdmFTY3JpcHQgY2xhc3MgZm9yIGdlbmVyYXRpbmcgYW5kIHJlYWRpbmcgemlwIGZpbGVzXG48aHR0cDovL3N0dWFydGsuY29tL2pzemlwPlxuXG4oYykgMjAwOS0yMDE2IFN0dWFydCBLbmlnaHRsZXkgPHN0dWFydCBbYXRdIHN0dWFydGsuY29tPlxuRHVhbCBsaWNlbmNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2Ugb3IgR1BMdjMuIFNlZSBodHRwczovL3Jhdy5naXRodWIuY29tL1N0dWsvanN6aXAvbWFpbi9MSUNFTlNFLm1hcmtkb3duLlxuXG5KU1ppcCB1c2VzIHRoZSBsaWJyYXJ5IHBha28gcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIDpcbmh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlY2EvcGFrby9ibG9iL21haW4vTElDRU5TRVxuKi9cblxuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXsoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzKS5KU1ppcD1lKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBzKGEsbyxoKXtmdW5jdGlvbiB1KHIsZSl7aWYoIW9bcl0pe2lmKCFhW3JdKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFlJiZ0KXJldHVybiB0KHIsITApO2lmKGwpcmV0dXJuIGwociwhMCk7dmFyIG49bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBuLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsbn12YXIgaT1vW3JdPXtleHBvcnRzOnt9fTthW3JdWzBdLmNhbGwoaS5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciB0PWFbcl1bMV1bZV07cmV0dXJuIHUodHx8ZSl9LGksaS5leHBvcnRzLHMsYSxvLGgpfXJldHVybiBvW3JdLmV4cG9ydHN9Zm9yKHZhciBsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZT0wO2U8aC5sZW5ndGg7ZSsrKXUoaFtlXSk7cmV0dXJuIHV9KHsxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGQ9ZShcIi4vdXRpbHNcIiksYz1lKFwiLi9zdXBwb3J0XCIpLHA9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiO3IuZW5jb2RlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyLG4saSxzLGEsbyxoPVtdLHU9MCxsPWUubGVuZ3RoLGY9bCxjPVwic3RyaW5nXCIhPT1kLmdldFR5cGVPZihlKTt1PGUubGVuZ3RoOylmPWwtdSxuPWM/KHQ9ZVt1KytdLHI9dTxsP2VbdSsrXTowLHU8bD9lW3UrK106MCk6KHQ9ZS5jaGFyQ29kZUF0KHUrKykscj11PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCx1PGw/ZS5jaGFyQ29kZUF0KHUrKyk6MCksaT10Pj4yLHM9KDMmdCk8PDR8cj4+NCxhPTE8Zj8oMTUmcik8PDJ8bj4+Njo2NCxvPTI8Zj82MyZuOjY0LGgucHVzaChwLmNoYXJBdChpKStwLmNoYXJBdChzKStwLmNoYXJBdChhKStwLmNoYXJBdChvKSk7cmV0dXJuIGguam9pbihcIlwiKX0sci5kZWNvZGU9ZnVuY3Rpb24oZSl7dmFyIHQscixuLGkscyxhLG89MCxoPTAsdT1cImRhdGE6XCI7aWYoZS5zdWJzdHIoMCx1Lmxlbmd0aCk9PT11KXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBpdCBsb29rcyBsaWtlIGEgZGF0YSB1cmwuXCIpO3ZhciBsLGY9MyooZT1lLnJlcGxhY2UoL1teQS1aYS16MC05Ky89XS9nLFwiXCIpKS5sZW5ndGgvNDtpZihlLmNoYXJBdChlLmxlbmd0aC0xKT09PXAuY2hhckF0KDY0KSYmZi0tLGUuY2hhckF0KGUubGVuZ3RoLTIpPT09cC5jaGFyQXQoNjQpJiZmLS0sZiUxIT0wKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYmFzZTY0IGlucHV0LCBiYWQgY29udGVudCBsZW5ndGguXCIpO2ZvcihsPWMudWludDhhcnJheT9uZXcgVWludDhBcnJheSgwfGYpOm5ldyBBcnJheSgwfGYpO288ZS5sZW5ndGg7KXQ9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpPDwyfChpPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSk+PjQscj0oMTUmaSk8PDR8KHM9cC5pbmRleE9mKGUuY2hhckF0KG8rKykpKT4+MixuPSgzJnMpPDw2fChhPXAuaW5kZXhPZihlLmNoYXJBdChvKyspKSksbFtoKytdPXQsNjQhPT1zJiYobFtoKytdPXIpLDY0IT09YSYmKGxbaCsrXT1uKTtyZXR1cm4gbH19LHtcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGlsc1wiOjMyfV0sMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL2V4dGVybmFsXCIpLGk9ZShcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIikscz1lKFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiKSxhPWUoXCIuL3N0cmVhbS9EYXRhTGVuZ3RoUHJvYmVcIik7ZnVuY3Rpb24gbyhlLHQscixuLGkpe3RoaXMuY29tcHJlc3NlZFNpemU9ZSx0aGlzLnVuY29tcHJlc3NlZFNpemU9dCx0aGlzLmNyYzMyPXIsdGhpcy5jb21wcmVzc2lvbj1uLHRoaXMuY29tcHJlc3NlZENvbnRlbnQ9aX1vLnByb3RvdHlwZT17Z2V0Q29udGVudFdvcmtlcjpmdW5jdGlvbigpe3ZhciBlPW5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS5waXBlKHRoaXMuY29tcHJlc3Npb24udW5jb21wcmVzc1dvcmtlcigpKS5waXBlKG5ldyBhKFwiZGF0YV9sZW5ndGhcIikpLHQ9dGhpcztyZXR1cm4gZS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7aWYodGhpcy5zdHJlYW1JbmZvLmRhdGFfbGVuZ3RoIT09dC51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyA6IHVuY29tcHJlc3NlZCBkYXRhIHNpemUgbWlzbWF0Y2hcIil9KSxlfSxnZXRDb21wcmVzc2VkV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBpKG4uUHJvbWlzZS5yZXNvbHZlKHRoaXMuY29tcHJlc3NlZENvbnRlbnQpKS53aXRoU3RyZWFtSW5mbyhcImNvbXByZXNzZWRTaXplXCIsdGhpcy5jb21wcmVzc2VkU2l6ZSkud2l0aFN0cmVhbUluZm8oXCJ1bmNvbXByZXNzZWRTaXplXCIsdGhpcy51bmNvbXByZXNzZWRTaXplKS53aXRoU3RyZWFtSW5mbyhcImNyYzMyXCIsdGhpcy5jcmMzMikud2l0aFN0cmVhbUluZm8oXCJjb21wcmVzc2lvblwiLHRoaXMuY29tcHJlc3Npb24pfX0sby5jcmVhdGVXb3JrZXJGcm9tPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5waXBlKG5ldyBzKS5waXBlKG5ldyBhKFwidW5jb21wcmVzc2VkU2l6ZVwiKSkucGlwZSh0LmNvbXByZXNzV29ya2VyKHIpKS5waXBlKG5ldyBhKFwiY29tcHJlc3NlZFNpemVcIikpLndpdGhTdHJlYW1JbmZvKFwiY29tcHJlc3Npb25cIix0KX0sdC5leHBvcnRzPW99LHtcIi4vZXh0ZXJuYWxcIjo2LFwiLi9zdHJlYW0vQ3JjMzJQcm9iZVwiOjI1LFwiLi9zdHJlYW0vRGF0YUxlbmd0aFByb2JlXCI6MjYsXCIuL3N0cmVhbS9EYXRhV29ya2VyXCI6Mjd9XSwzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIik7ci5TVE9SRT17bWFnaWM6XCJcXDBcXDBcIixjb21wcmVzc1dvcmtlcjpmdW5jdGlvbigpe3JldHVybiBuZXcgbihcIlNUT1JFIGNvbXByZXNzaW9uXCIpfSx1bmNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBuKFwiU1RPUkUgZGVjb21wcmVzc2lvblwiKX19LHIuREVGTEFURT1lKFwiLi9mbGF0ZVwiKX0se1wiLi9mbGF0ZVwiOjcsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6Mjh9XSw0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vdXRpbHNcIik7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwIT09ZSYmZS5sZW5ndGg/XCJzdHJpbmdcIiE9PW4uZ2V0VHlwZU9mKGUpP2Z1bmN0aW9uKGUsdCxyLG4pe3ZhciBpPW8scz1uK3I7ZV49LTE7Zm9yKHZhciBhPW47YTxzO2ErKyllPWU+Pj44XmlbMjU1JihlXnRbYV0pXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTpmdW5jdGlvbihlLHQscixuKXt2YXIgaT1vLHM9bityO2VePS0xO2Zvcih2YXIgYT1uO2E8czthKyspZT1lPj4+OF5pWzI1NSYoZV50LmNoYXJDb2RlQXQoYSkpXTtyZXR1cm4tMV5lfSgwfHQsZSxlLmxlbmd0aCwwKTowfX0se1wiLi91dGlsc1wiOjMyfV0sNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuYmFzZTY0PSExLHIuYmluYXJ5PSExLHIuZGlyPSExLHIuY3JlYXRlRm9sZGVycz0hMCxyLmRhdGU9bnVsbCxyLmNvbXByZXNzaW9uPW51bGwsci5jb21wcmVzc2lvbk9wdGlvbnM9bnVsbCxyLmNvbW1lbnQ9bnVsbCxyLnVuaXhQZXJtaXNzaW9ucz1udWxsLHIuZG9zUGVybWlzc2lvbnM9bnVsbH0se31dLDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1udWxsO249XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2U/UHJvbWlzZTplKFwibGllXCIpLHQuZXhwb3J0cz17UHJvbWlzZTpufX0se2xpZTozN31dLDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDMyQXJyYXksaT1lKFwicGFrb1wiKSxzPWUoXCIuL3V0aWxzXCIpLGE9ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksbz1uP1widWludDhhcnJheVwiOlwiYXJyYXlcIjtmdW5jdGlvbiBoKGUsdCl7YS5jYWxsKHRoaXMsXCJGbGF0ZVdvcmtlci9cIitlKSx0aGlzLl9wYWtvPW51bGwsdGhpcy5fcGFrb0FjdGlvbj1lLHRoaXMuX3Bha29PcHRpb25zPXQsdGhpcy5tZXRhPXt9fXIubWFnaWM9XCJcXGJcXDBcIixzLmluaGVyaXRzKGgsYSksaC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMubWV0YT1lLm1ldGEsbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2gocy50cmFuc2Zvcm1UbyhvLGUuZGF0YSksITEpfSxoLnByb3RvdHlwZS5mbHVzaD1mdW5jdGlvbigpe2EucHJvdG90eXBlLmZsdXNoLmNhbGwodGhpcyksbnVsbD09PXRoaXMuX3Bha28mJnRoaXMuX2NyZWF0ZVBha28oKSx0aGlzLl9wYWtvLnB1c2goW10sITApfSxoLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7YS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuX3Bha289bnVsbH0saC5wcm90b3R5cGUuX2NyZWF0ZVBha289ZnVuY3Rpb24oKXt0aGlzLl9wYWtvPW5ldyBpW3RoaXMuX3Bha29BY3Rpb25dKHtyYXc6ITAsbGV2ZWw6dGhpcy5fcGFrb09wdGlvbnMubGV2ZWx8fC0xfSk7dmFyIHQ9dGhpczt0aGlzLl9wYWtvLm9uRGF0YT1mdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOnQubWV0YX0pfX0sci5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IGgoXCJEZWZsYXRlXCIsZSl9LHIudW5jb21wcmVzc1dvcmtlcj1mdW5jdGlvbigpe3JldHVybiBuZXcgaChcIkluZmxhdGVcIix7fSl9fSx7XCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3V0aWxzXCI6MzIscGFrbzozOH1dLDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBBKGUsdCl7dmFyIHIsbj1cIlwiO2ZvcihyPTA7cjx0O3IrKyluKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZlKSxlPj4+PTg7cmV0dXJuIG59ZnVuY3Rpb24gbihlLHQscixuLGkscyl7dmFyIGEsbyxoPWUuZmlsZSx1PWUuY29tcHJlc3Npb24sbD1zIT09Ty51dGY4ZW5jb2RlLGY9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoaC5uYW1lKSksYz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsTy51dGY4ZW5jb2RlKGgubmFtZSkpLGQ9aC5jb21tZW50LHA9SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHMoZCkpLG09SS50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLE8udXRmOGVuY29kZShkKSksXz1jLmxlbmd0aCE9PWgubmFtZS5sZW5ndGgsZz1tLmxlbmd0aCE9PWQubGVuZ3RoLGI9XCJcIix2PVwiXCIseT1cIlwiLHc9aC5kaXIsaz1oLmRhdGUseD17Y3JjMzI6MCxjb21wcmVzc2VkU2l6ZTowLHVuY29tcHJlc3NlZFNpemU6MH07dCYmIXJ8fCh4LmNyYzMyPWUuY3JjMzIseC5jb21wcmVzc2VkU2l6ZT1lLmNvbXByZXNzZWRTaXplLHgudW5jb21wcmVzc2VkU2l6ZT1lLnVuY29tcHJlc3NlZFNpemUpO3ZhciBTPTA7dCYmKFN8PTgpLGx8fCFfJiYhZ3x8KFN8PTIwNDgpO3ZhciB6PTAsQz0wO3cmJih6fD0xNiksXCJVTklYXCI9PT1pPyhDPTc5OCx6fD1mdW5jdGlvbihlLHQpe3ZhciByPWU7cmV0dXJuIGV8fChyPXQ/MTY4OTM6MzMyMDQpLCg2NTUzNSZyKTw8MTZ9KGgudW5peFBlcm1pc3Npb25zLHcpKTooQz0yMCx6fD1mdW5jdGlvbihlKXtyZXR1cm4gNjMmKGV8fDApfShoLmRvc1Blcm1pc3Npb25zKSksYT1rLmdldFVUQ0hvdXJzKCksYTw8PTYsYXw9ay5nZXRVVENNaW51dGVzKCksYTw8PTUsYXw9ay5nZXRVVENTZWNvbmRzKCkvMixvPWsuZ2V0VVRDRnVsbFllYXIoKS0xOTgwLG88PD00LG98PWsuZ2V0VVRDTW9udGgoKSsxLG88PD01LG98PWsuZ2V0VVRDRGF0ZSgpLF8mJih2PUEoMSwxKStBKEIoZiksNCkrYyxiKz1cInVwXCIrQSh2Lmxlbmd0aCwyKSt2KSxnJiYoeT1BKDEsMSkrQShCKHApLDQpK20sYis9XCJ1Y1wiK0EoeS5sZW5ndGgsMikreSk7dmFyIEU9XCJcIjtyZXR1cm4gRSs9XCJcXG5cXDBcIixFKz1BKFMsMiksRSs9dS5tYWdpYyxFKz1BKGEsMiksRSs9QShvLDIpLEUrPUEoeC5jcmMzMiw0KSxFKz1BKHguY29tcHJlc3NlZFNpemUsNCksRSs9QSh4LnVuY29tcHJlc3NlZFNpemUsNCksRSs9QShmLmxlbmd0aCwyKSxFKz1BKGIubGVuZ3RoLDIpLHtmaWxlUmVjb3JkOlIuTE9DQUxfRklMRV9IRUFERVIrRStmK2IsZGlyUmVjb3JkOlIuQ0VOVFJBTF9GSUxFX0hFQURFUitBKEMsMikrRStBKHAubGVuZ3RoLDIpK1wiXFwwXFwwXFwwXFwwXCIrQSh6LDQpK0Eobiw0KStmK2IrcH19dmFyIEk9ZShcIi4uL3V0aWxzXCIpLGk9ZShcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCIpLE89ZShcIi4uL3V0ZjhcIiksQj1lKFwiLi4vY3JjMzJcIiksUj1lKFwiLi4vc2lnbmF0dXJlXCIpO2Z1bmN0aW9uIHMoZSx0LHIsbil7aS5jYWxsKHRoaXMsXCJaaXBGaWxlV29ya2VyXCIpLHRoaXMuYnl0ZXNXcml0dGVuPTAsdGhpcy56aXBDb21tZW50PXQsdGhpcy56aXBQbGF0Zm9ybT1yLHRoaXMuZW5jb2RlRmlsZU5hbWU9bix0aGlzLnN0cmVhbUZpbGVzPWUsdGhpcy5hY2N1bXVsYXRlPSExLHRoaXMuY29udGVudEJ1ZmZlcj1bXSx0aGlzLmRpclJlY29yZHM9W10sdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0PTAsdGhpcy5lbnRyaWVzQ291bnQ9MCx0aGlzLmN1cnJlbnRGaWxlPW51bGwsdGhpcy5fc291cmNlcz1bXX1JLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHVzaD1mdW5jdGlvbihlKXt2YXIgdD1lLm1ldGEucGVyY2VudHx8MCxyPXRoaXMuZW50cmllc0NvdW50LG49dGhpcy5fc291cmNlcy5sZW5ndGg7dGhpcy5hY2N1bXVsYXRlP3RoaXMuY29udGVudEJ1ZmZlci5wdXNoKGUpOih0aGlzLmJ5dGVzV3JpdHRlbis9ZS5kYXRhLmxlbmd0aCxpLnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcyx7ZGF0YTplLmRhdGEsbWV0YTp7Y3VycmVudEZpbGU6dGhpcy5jdXJyZW50RmlsZSxwZXJjZW50OnI/KHQrMTAwKihyLW4tMSkpL3I6MTAwfX0pKX0scy5wcm90b3R5cGUub3BlbmVkU291cmNlPWZ1bmN0aW9uKGUpe3RoaXMuY3VycmVudFNvdXJjZU9mZnNldD10aGlzLmJ5dGVzV3JpdHRlbix0aGlzLmN1cnJlbnRGaWxlPWUuZmlsZS5uYW1lO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyO2lmKHQpe3ZhciByPW4oZSx0LCExLHRoaXMuY3VycmVudFNvdXJjZU9mZnNldCx0aGlzLnppcFBsYXRmb3JtLHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpyLmZpbGVSZWNvcmQsbWV0YTp7cGVyY2VudDowfX0pfWVsc2UgdGhpcy5hY2N1bXVsYXRlPSEwfSxzLnByb3RvdHlwZS5jbG9zZWRTb3VyY2U9ZnVuY3Rpb24oZSl7dGhpcy5hY2N1bXVsYXRlPSExO3ZhciB0PXRoaXMuc3RyZWFtRmlsZXMmJiFlLmZpbGUuZGlyLHI9bihlLHQsITAsdGhpcy5jdXJyZW50U291cmNlT2Zmc2V0LHRoaXMuemlwUGxhdGZvcm0sdGhpcy5lbmNvZGVGaWxlTmFtZSk7aWYodGhpcy5kaXJSZWNvcmRzLnB1c2goci5kaXJSZWNvcmQpLHQpdGhpcy5wdXNoKHtkYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBSLkRBVEFfREVTQ1JJUFRPUitBKGUuY3JjMzIsNCkrQShlLmNvbXByZXNzZWRTaXplLDQpK0EoZS51bmNvbXByZXNzZWRTaXplLDQpfShlKSxtZXRhOntwZXJjZW50OjEwMH19KTtlbHNlIGZvcih0aGlzLnB1c2goe2RhdGE6ci5maWxlUmVjb3JkLG1ldGE6e3BlcmNlbnQ6MH19KTt0aGlzLmNvbnRlbnRCdWZmZXIubGVuZ3RoOyl0aGlzLnB1c2godGhpcy5jb250ZW50QnVmZmVyLnNoaWZ0KCkpO3RoaXMuY3VycmVudEZpbGU9bnVsbH0scy5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24oKXtmb3IodmFyIGU9dGhpcy5ieXRlc1dyaXR0ZW4sdD0wO3Q8dGhpcy5kaXJSZWNvcmRzLmxlbmd0aDt0KyspdGhpcy5wdXNoKHtkYXRhOnRoaXMuZGlyUmVjb3Jkc1t0XSxtZXRhOntwZXJjZW50OjEwMH19KTt2YXIgcj10aGlzLmJ5dGVzV3JpdHRlbi1lLG49ZnVuY3Rpb24oZSx0LHIsbixpKXt2YXIgcz1JLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsaShuKSk7cmV0dXJuIFIuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EK1wiXFwwXFwwXFwwXFwwXCIrQShlLDIpK0EoZSwyKStBKHQsNCkrQShyLDQpK0Eocy5sZW5ndGgsMikrc30odGhpcy5kaXJSZWNvcmRzLmxlbmd0aCxyLGUsdGhpcy56aXBDb21tZW50LHRoaXMuZW5jb2RlRmlsZU5hbWUpO3RoaXMucHVzaCh7ZGF0YTpuLG1ldGE6e3BlcmNlbnQ6MTAwfX0pfSxzLnByb3RvdHlwZS5wcmVwYXJlTmV4dFNvdXJjZT1mdW5jdGlvbigpe3RoaXMucHJldmlvdXM9dGhpcy5fc291cmNlcy5zaGlmdCgpLHRoaXMub3BlbmVkU291cmNlKHRoaXMucHJldmlvdXMuc3RyZWFtSW5mbyksdGhpcy5pc1BhdXNlZD90aGlzLnByZXZpb3VzLnBhdXNlKCk6dGhpcy5wcmV2aW91cy5yZXN1bWUoKX0scy5wcm90b3R5cGUucmVnaXN0ZXJQcmV2aW91cz1mdW5jdGlvbihlKXt0aGlzLl9zb3VyY2VzLnB1c2goZSk7dmFyIHQ9dGhpcztyZXR1cm4gZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnByb2Nlc3NDaHVuayhlKX0pLGUub24oXCJlbmRcIixmdW5jdGlvbigpe3QuY2xvc2VkU291cmNlKHQucHJldmlvdXMuc3RyZWFtSW5mbyksdC5fc291cmNlcy5sZW5ndGg/dC5wcmVwYXJlTmV4dFNvdXJjZSgpOnQuZW5kKCl9KSxlLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0LmVycm9yKGUpfSksdGhpc30scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKCF0aGlzLnByZXZpb3VzJiZ0aGlzLl9zb3VyY2VzLmxlbmd0aD8odGhpcy5wcmVwYXJlTmV4dFNvdXJjZSgpLCEwKTp0aGlzLnByZXZpb3VzfHx0aGlzLl9zb3VyY2VzLmxlbmd0aHx8dGhpcy5nZW5lcmF0ZWRFcnJvcj92b2lkIDA6KHRoaXMuZW5kKCksITApKX0scy5wcm90b3R5cGUuZXJyb3I9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fc291cmNlcztpZighaS5wcm90b3R5cGUuZXJyb3IuY2FsbCh0aGlzLGUpKXJldHVybiExO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXRyeXt0W3JdLmVycm9yKGUpfWNhdGNoKGUpe31yZXR1cm4hMH0scy5wcm90b3R5cGUubG9jaz1mdW5jdGlvbigpe2kucHJvdG90eXBlLmxvY2suY2FsbCh0aGlzKTtmb3IodmFyIGU9dGhpcy5fc291cmNlcyx0PTA7dDxlLmxlbmd0aDt0KyspZVt0XS5sb2NrKCl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi9zaWduYXR1cmVcIjoyMyxcIi4uL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuLi91dGY4XCI6MzEsXCIuLi91dGlsc1wiOjMyfV0sOTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuLi9jb21wcmVzc2lvbnNcIiksbj1lKFwiLi9aaXBGaWxlV29ya2VyXCIpO3IuZ2VuZXJhdGVXb3JrZXI9ZnVuY3Rpb24oZSxhLHQpe3ZhciBvPW5ldyBuKGEuc3RyZWFtRmlsZXMsdCxhLnBsYXRmb3JtLGEuZW5jb2RlRmlsZU5hbWUpLGg9MDt0cnl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7aCsrO3ZhciByPWZ1bmN0aW9uKGUsdCl7dmFyIHI9ZXx8dCxuPXVbcl07aWYoIW4pdGhyb3cgbmV3IEVycm9yKHIrXCIgaXMgbm90IGEgdmFsaWQgY29tcHJlc3Npb24gbWV0aG9kICFcIik7cmV0dXJuIG59KHQub3B0aW9ucy5jb21wcmVzc2lvbixhLmNvbXByZXNzaW9uKSxuPXQub3B0aW9ucy5jb21wcmVzc2lvbk9wdGlvbnN8fGEuY29tcHJlc3Npb25PcHRpb25zfHx7fSxpPXQuZGlyLHM9dC5kYXRlO3QuX2NvbXByZXNzV29ya2VyKHIsbikud2l0aFN0cmVhbUluZm8oXCJmaWxlXCIse25hbWU6ZSxkaXI6aSxkYXRlOnMsY29tbWVudDp0LmNvbW1lbnR8fFwiXCIsdW5peFBlcm1pc3Npb25zOnQudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOnQuZG9zUGVybWlzc2lvbnN9KS5waXBlKG8pfSksby5lbnRyaWVzQ291bnQ9aH1jYXRjaChlKXtvLmVycm9yKGUpfXJldHVybiBvfX0se1wiLi4vY29tcHJlc3Npb25zXCI6MyxcIi4vWmlwRmlsZVdvcmtlclwiOjh9XSwxMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG47aWYoYXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29uc3RydWN0b3Igd2l0aCBwYXJhbWV0ZXJzIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpO3RoaXMuZmlsZXM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmNvbW1lbnQ9bnVsbCx0aGlzLnJvb3Q9XCJcIix0aGlzLmNsb25lPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IG47Zm9yKHZhciB0IGluIHRoaXMpXCJmdW5jdGlvblwiIT10eXBlb2YgdGhpc1t0XSYmKGVbdF09dGhpc1t0XSk7cmV0dXJuIGV9fShuLnByb3RvdHlwZT1lKFwiLi9vYmplY3RcIikpLmxvYWRBc3luYz1lKFwiLi9sb2FkXCIpLG4uc3VwcG9ydD1lKFwiLi9zdXBwb3J0XCIpLG4uZGVmYXVsdHM9ZShcIi4vZGVmYXVsdHNcIiksbi52ZXJzaW9uPVwiMy4xMC4xXCIsbi5sb2FkQXN5bmM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4obmV3IG4pLmxvYWRBc3luYyhlLHQpfSxuLmV4dGVybmFsPWUoXCIuL2V4dGVybmFsXCIpLHQuZXhwb3J0cz1ufSx7XCIuL2RlZmF1bHRzXCI6NSxcIi4vZXh0ZXJuYWxcIjo2LFwiLi9sb2FkXCI6MTEsXCIuL29iamVjdFwiOjE1LFwiLi9zdXBwb3J0XCI6MzB9XSwxMTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciB1PWUoXCIuL3V0aWxzXCIpLGk9ZShcIi4vZXh0ZXJuYWxcIiksbj1lKFwiLi91dGY4XCIpLHM9ZShcIi4vemlwRW50cmllc1wiKSxhPWUoXCIuL3N0cmVhbS9DcmMzMlByb2JlXCIpLGw9ZShcIi4vbm9kZWpzVXRpbHNcIik7ZnVuY3Rpb24gZihuKXtyZXR1cm4gbmV3IGkuUHJvbWlzZShmdW5jdGlvbihlLHQpe3ZhciByPW4uZGVjb21wcmVzc2VkLmdldENvbnRlbnRXb3JrZXIoKS5waXBlKG5ldyBhKTtyLm9uKFwiZXJyb3JcIixmdW5jdGlvbihlKXt0KGUpfSkub24oXCJlbmRcIixmdW5jdGlvbigpe3Iuc3RyZWFtSW5mby5jcmMzMiE9PW4uZGVjb21wcmVzc2VkLmNyYzMyP3QobmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCA6IENSQzMyIG1pc21hdGNoXCIpKTplKCl9KS5yZXN1bWUoKX0pfXQuZXhwb3J0cz1mdW5jdGlvbihlLG8pe3ZhciBoPXRoaXM7cmV0dXJuIG89dS5leHRlbmQob3x8e30se2Jhc2U2NDohMSxjaGVja0NSQzMyOiExLG9wdGltaXplZEJpbmFyeVN0cmluZzohMSxjcmVhdGVGb2xkZXJzOiExLGRlY29kZUZpbGVOYW1lOm4udXRmOGRlY29kZX0pLGwuaXNOb2RlJiZsLmlzU3RyZWFtKGUpP2kuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSlNaaXAgY2FuJ3QgYWNjZXB0IGEgc3RyZWFtIHdoZW4gbG9hZGluZyBhIHppcCBmaWxlLlwiKSk6dS5wcmVwYXJlQ29udGVudChcInRoZSBsb2FkZWQgemlwIGZpbGVcIixlLCEwLG8ub3B0aW1pemVkQmluYXJ5U3RyaW5nLG8uYmFzZTY0KS50aGVuKGZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBzKG8pO3JldHVybiB0LmxvYWQoZSksdH0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9W2kuUHJvbWlzZS5yZXNvbHZlKGUpXSxyPWUuZmlsZXM7aWYoby5jaGVja0NSQzMyKWZvcih2YXIgbj0wO248ci5sZW5ndGg7bisrKXQucHVzaChmKHJbbl0pKTtyZXR1cm4gaS5Qcm9taXNlLmFsbCh0KX0pLnRoZW4oZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc2hpZnQoKSxyPXQuZmlsZXMsbj0wO248ci5sZW5ndGg7bisrKXt2YXIgaT1yW25dLHM9aS5maWxlTmFtZVN0cixhPXUucmVzb2x2ZShpLmZpbGVOYW1lU3RyKTtoLmZpbGUoYSxpLmRlY29tcHJlc3NlZCx7YmluYXJ5OiEwLG9wdGltaXplZEJpbmFyeVN0cmluZzohMCxkYXRlOmkuZGF0ZSxkaXI6aS5kaXIsY29tbWVudDppLmZpbGVDb21tZW50U3RyLmxlbmd0aD9pLmZpbGVDb21tZW50U3RyOm51bGwsdW5peFBlcm1pc3Npb25zOmkudW5peFBlcm1pc3Npb25zLGRvc1Blcm1pc3Npb25zOmkuZG9zUGVybWlzc2lvbnMsY3JlYXRlRm9sZGVyczpvLmNyZWF0ZUZvbGRlcnN9KSxpLmRpcnx8KGguZmlsZShhKS51bnNhZmVPcmlnaW5hbE5hbWU9cyl9cmV0dXJuIHQuemlwQ29tbWVudC5sZW5ndGgmJihoLmNvbW1lbnQ9dC56aXBDb21tZW50KSxofSl9fSx7XCIuL2V4dGVybmFsXCI6NixcIi4vbm9kZWpzVXRpbHNcIjoxNCxcIi4vc3RyZWFtL0NyYzMyUHJvYmVcIjoyNSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBFbnRyaWVzXCI6MzN9XSwxMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtmdW5jdGlvbiBzKGUsdCl7aS5jYWxsKHRoaXMsXCJOb2RlanMgc3RyZWFtIGlucHV0IGFkYXB0ZXIgZm9yIFwiK2UpLHRoaXMuX3Vwc3RyZWFtRW5kZWQ9ITEsdGhpcy5fYmluZFN0cmVhbSh0KX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUuX2JpbmRTdHJlYW09ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczsodGhpcy5fc3RyZWFtPWUpLnBhdXNlKCksZS5vbihcImRhdGFcIixmdW5jdGlvbihlKXt0LnB1c2goe2RhdGE6ZSxtZXRhOntwZXJjZW50OjB9fSl9KS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6dC5lcnJvcihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmlzUGF1c2VkP3QuX3Vwc3RyZWFtRW5kZWQ9ITA6dC5lbmQoKX0pfSxzLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbigpe3JldHVybiEhaS5wcm90b3R5cGUucGF1c2UuY2FsbCh0aGlzKSYmKHRoaXMuX3N0cmVhbS5wYXVzZSgpLCEwKX0scy5wcm90b3R5cGUucmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISFpLnByb3RvdHlwZS5yZXN1bWUuY2FsbCh0aGlzKSYmKHRoaXMuX3Vwc3RyZWFtRW5kZWQ/dGhpcy5lbmQoKTp0aGlzLl9zdHJlYW0ucmVzdW1lKCksITApfSx0LmV4cG9ydHM9c30se1wiLi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4uL3V0aWxzXCI6MzJ9XSwxMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBpPWUoXCJyZWFkYWJsZS1zdHJlYW1cIikuUmVhZGFibGU7ZnVuY3Rpb24gbihlLHQscil7aS5jYWxsKHRoaXMsdCksdGhpcy5faGVscGVyPWU7dmFyIG49dGhpcztlLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUsdCl7bi5wdXNoKGUpfHxuLl9oZWxwZXIucGF1c2UoKSxyJiZyKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe24uZW1pdChcImVycm9yXCIsZSl9KS5vbihcImVuZFwiLGZ1bmN0aW9uKCl7bi5wdXNoKG51bGwpfSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKG4saSksbi5wcm90b3R5cGUuX3JlYWQ9ZnVuY3Rpb24oKXt0aGlzLl9oZWxwZXIucmVzdW1lKCl9LHQuZXhwb3J0cz1ufSx7XCIuLi91dGlsc1wiOjMyLFwicmVhZGFibGUtc3RyZWFtXCI6MTZ9XSwxNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17aXNOb2RlOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBCdWZmZXIsbmV3QnVmZmVyRnJvbTpmdW5jdGlvbihlLHQpe2lmKEJ1ZmZlci5mcm9tJiZCdWZmZXIuZnJvbSE9PVVpbnQ4QXJyYXkuZnJvbSlyZXR1cm4gQnVmZmVyLmZyb20oZSx0KTtpZihcIm51bWJlclwiPT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImRhdGFcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO3JldHVybiBuZXcgQnVmZmVyKGUsdCl9LGFsbG9jQnVmZmVyOmZ1bmN0aW9uKGUpe2lmKEJ1ZmZlci5hbGxvYylyZXR1cm4gQnVmZmVyLmFsbG9jKGUpO3ZhciB0PW5ldyBCdWZmZXIoZSk7cmV0dXJuIHQuZmlsbCgwKSx0fSxpc0J1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGUpfSxpc1N0cmVhbTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5vbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wYXVzZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZXN1bWV9fX0se31dLDE1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQscil7dmFyIG4saT11LmdldFR5cGVPZih0KSxzPXUuZXh0ZW5kKHJ8fHt9LGYpO3MuZGF0ZT1zLmRhdGV8fG5ldyBEYXRlLG51bGwhPT1zLmNvbXByZXNzaW9uJiYocy5jb21wcmVzc2lvbj1zLmNvbXByZXNzaW9uLnRvVXBwZXJDYXNlKCkpLFwic3RyaW5nXCI9PXR5cGVvZiBzLnVuaXhQZXJtaXNzaW9ucyYmKHMudW5peFBlcm1pc3Npb25zPXBhcnNlSW50KHMudW5peFBlcm1pc3Npb25zLDgpKSxzLnVuaXhQZXJtaXNzaW9ucyYmMTYzODQmcy51bml4UGVybWlzc2lvbnMmJihzLmRpcj0hMCkscy5kb3NQZXJtaXNzaW9ucyYmMTYmcy5kb3NQZXJtaXNzaW9ucyYmKHMuZGlyPSEwKSxzLmRpciYmKGU9ZyhlKSkscy5jcmVhdGVGb2xkZXJzJiYobj1fKGUpKSYmYi5jYWxsKHRoaXMsbiwhMCk7dmFyIGE9XCJzdHJpbmdcIj09PWkmJiExPT09cy5iaW5hcnkmJiExPT09cy5iYXNlNjQ7ciYmdm9pZCAwIT09ci5iaW5hcnl8fChzLmJpbmFyeT0hYSksKHQgaW5zdGFuY2VvZiBjJiYwPT09dC51bmNvbXByZXNzZWRTaXplfHxzLmRpcnx8IXR8fDA9PT10Lmxlbmd0aCkmJihzLmJhc2U2ND0hMSxzLmJpbmFyeT0hMCx0PVwiXCIscy5jb21wcmVzc2lvbj1cIlNUT1JFXCIsaT1cInN0cmluZ1wiKTt2YXIgbz1udWxsO289dCBpbnN0YW5jZW9mIGN8fHQgaW5zdGFuY2VvZiBsP3Q6cC5pc05vZGUmJnAuaXNTdHJlYW0odCk/bmV3IG0oZSx0KTp1LnByZXBhcmVDb250ZW50KGUsdCxzLmJpbmFyeSxzLm9wdGltaXplZEJpbmFyeVN0cmluZyxzLmJhc2U2NCk7dmFyIGg9bmV3IGQoZSxvLHMpO3RoaXMuZmlsZXNbZV09aH12YXIgaT1lKFwiLi91dGY4XCIpLHU9ZShcIi4vdXRpbHNcIiksbD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKSxhPWUoXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIiksZj1lKFwiLi9kZWZhdWx0c1wiKSxjPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksZD1lKFwiLi96aXBPYmplY3RcIiksbz1lKFwiLi9nZW5lcmF0ZVwiKSxwPWUoXCIuL25vZGVqc1V0aWxzXCIpLG09ZShcIi4vbm9kZWpzL05vZGVqc1N0cmVhbUlucHV0QWRhcHRlclwiKSxfPWZ1bmN0aW9uKGUpe1wiL1wiPT09ZS5zbGljZSgtMSkmJihlPWUuc3Vic3RyaW5nKDAsZS5sZW5ndGgtMSkpO3ZhciB0PWUubGFzdEluZGV4T2YoXCIvXCIpO3JldHVybiAwPHQ/ZS5zdWJzdHJpbmcoMCx0KTpcIlwifSxnPWZ1bmN0aW9uKGUpe3JldHVyblwiL1wiIT09ZS5zbGljZSgtMSkmJihlKz1cIi9cIiksZX0sYj1mdW5jdGlvbihlLHQpe3JldHVybiB0PXZvaWQgMCE9PXQ/dDpmLmNyZWF0ZUZvbGRlcnMsZT1nKGUpLHRoaXMuZmlsZXNbZV18fHMuY2FsbCh0aGlzLGUsbnVsbCx7ZGlyOiEwLGNyZWF0ZUZvbGRlcnM6dH0pLHRoaXMuZmlsZXNbZV19O2Z1bmN0aW9uIGgoZSl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKX12YXIgbj17bG9hZDpmdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmb3JFYWNoOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbjtmb3IodCBpbiB0aGlzLmZpbGVzKW49dGhpcy5maWxlc1t0XSwocj10LnNsaWNlKHRoaXMucm9vdC5sZW5ndGgsdC5sZW5ndGgpKSYmdC5zbGljZSgwLHRoaXMucm9vdC5sZW5ndGgpPT09dGhpcy5yb290JiZlKHIsbil9LGZpbHRlcjpmdW5jdGlvbihyKXt2YXIgbj1bXTtyZXR1cm4gdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7cihlLHQpJiZuLnB1c2godCl9KSxufSxmaWxlOmZ1bmN0aW9uKGUsdCxyKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZT10aGlzLnJvb3QrZSxzLmNhbGwodGhpcyxlLHQsciksdGhpcztpZihoKGUpKXt2YXIgbj1lO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiF0LmRpciYmbi50ZXN0KGUpfSl9dmFyIGk9dGhpcy5maWxlc1t0aGlzLnJvb3QrZV07cmV0dXJuIGkmJiFpLmRpcj9pOm51bGx9LGZvbGRlcjpmdW5jdGlvbihyKXtpZighcilyZXR1cm4gdGhpcztpZihoKHIpKXJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbihlLHQpe3JldHVybiB0LmRpciYmci50ZXN0KGUpfSk7dmFyIGU9dGhpcy5yb290K3IsdD1iLmNhbGwodGhpcyxlKSxuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi5yb290PXQubmFtZSxufSxyZW1vdmU6ZnVuY3Rpb24ocil7cj10aGlzLnJvb3Qrcjt2YXIgZT10aGlzLmZpbGVzW3JdO2lmKGV8fChcIi9cIiE9PXIuc2xpY2UoLTEpJiYocis9XCIvXCIpLGU9dGhpcy5maWxlc1tyXSksZSYmIWUuZGlyKWRlbGV0ZSB0aGlzLmZpbGVzW3JdO2Vsc2UgZm9yKHZhciB0PXRoaXMuZmlsdGVyKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZS5zbGljZSgwLHIubGVuZ3RoKT09PXJ9KSxuPTA7bjx0Lmxlbmd0aDtuKyspZGVsZXRlIHRoaXMuZmlsZXNbdFtuXS5uYW1lXTtyZXR1cm4gdGhpc30sZ2VuZXJhdGU6ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiByZW1vdmVkIGluIEpTWmlwIDMuMCwgcGxlYXNlIGNoZWNrIHRoZSB1cGdyYWRlIGd1aWRlLlwiKX0sZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbTpmdW5jdGlvbihlKXt2YXIgdCxyPXt9O3RyeXtpZigocj11LmV4dGVuZChlfHx7fSx7c3RyZWFtRmlsZXM6ITEsY29tcHJlc3Npb246XCJTVE9SRVwiLGNvbXByZXNzaW9uT3B0aW9uczpudWxsLHR5cGU6XCJcIixwbGF0Zm9ybTpcIkRPU1wiLGNvbW1lbnQ6bnVsbCxtaW1lVHlwZTpcImFwcGxpY2F0aW9uL3ppcFwiLGVuY29kZUZpbGVOYW1lOmkudXRmOGVuY29kZX0pKS50eXBlPXIudHlwZS50b0xvd2VyQ2FzZSgpLHIuY29tcHJlc3Npb249ci5jb21wcmVzc2lvbi50b1VwcGVyQ2FzZSgpLFwiYmluYXJ5c3RyaW5nXCI9PT1yLnR5cGUmJihyLnR5cGU9XCJzdHJpbmdcIiksIXIudHlwZSl0aHJvdyBuZXcgRXJyb3IoXCJObyBvdXRwdXQgdHlwZSBzcGVjaWZpZWQuXCIpO3UuY2hlY2tTdXBwb3J0KHIudHlwZSksXCJkYXJ3aW5cIiE9PXIucGxhdGZvcm0mJlwiZnJlZWJzZFwiIT09ci5wbGF0Zm9ybSYmXCJsaW51eFwiIT09ci5wbGF0Zm9ybSYmXCJzdW5vc1wiIT09ci5wbGF0Zm9ybXx8KHIucGxhdGZvcm09XCJVTklYXCIpLFwid2luMzJcIj09PXIucGxhdGZvcm0mJihyLnBsYXRmb3JtPVwiRE9TXCIpO3ZhciBuPXIuY29tbWVudHx8dGhpcy5jb21tZW50fHxcIlwiO3Q9by5nZW5lcmF0ZVdvcmtlcih0aGlzLHIsbil9Y2F0Y2goZSl7KHQ9bmV3IGwoXCJlcnJvclwiKSkuZXJyb3IoZSl9cmV0dXJuIG5ldyBhKHQsci50eXBlfHxcInN0cmluZ1wiLHIubWltZVR5cGUpfSxnZW5lcmF0ZUFzeW5jOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZ2VuZXJhdGVJbnRlcm5hbFN0cmVhbShlKS5hY2N1bXVsYXRlKHQpfSxnZW5lcmF0ZU5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZT1lfHx7fSkudHlwZXx8KGUudHlwZT1cIm5vZGVidWZmZXJcIiksdGhpcy5nZW5lcmF0ZUludGVybmFsU3RyZWFtKGUpLnRvTm9kZWpzU3RyZWFtKHQpfX07dC5leHBvcnRzPW59LHtcIi4vY29tcHJlc3NlZE9iamVjdFwiOjIsXCIuL2RlZmF1bHRzXCI6NSxcIi4vZ2VuZXJhdGVcIjo5LFwiLi9ub2RlanMvTm9kZWpzU3RyZWFtSW5wdXRBZGFwdGVyXCI6MTIsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N0cmVhbS9HZW5lcmljV29ya2VyXCI6MjgsXCIuL3N0cmVhbS9TdHJlYW1IZWxwZXJcIjoyOSxcIi4vdXRmOFwiOjMxLFwiLi91dGlsc1wiOjMyLFwiLi96aXBPYmplY3RcIjozNX1dLDE2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWUoXCJzdHJlYW1cIil9LHtzdHJlYW06dm9pZCAwfV0sMTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9EYXRhUmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSk7Zm9yKHZhciB0PTA7dDx0aGlzLmRhdGEubGVuZ3RoO3QrKyllW3RdPTI1NSZlW3RdfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhW3RoaXMuemVybytlXX0saS5wcm90b3R5cGUubGFzdEluZGV4T2ZTaWduYXR1cmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hhckNvZGVBdCgwKSxyPWUuY2hhckNvZGVBdCgxKSxuPWUuY2hhckNvZGVBdCgyKSxpPWUuY2hhckNvZGVBdCgzKSxzPXRoaXMubGVuZ3RoLTQ7MDw9czstLXMpaWYodGhpcy5kYXRhW3NdPT09dCYmdGhpcy5kYXRhW3MrMV09PT1yJiZ0aGlzLmRhdGFbcysyXT09PW4mJnRoaXMuZGF0YVtzKzNdPT09aSlyZXR1cm4gcy10aGlzLnplcm87cmV0dXJuLTF9LGkucHJvdG90eXBlLnJlYWRBbmRDaGVja1NpZ25hdHVyZT1mdW5jdGlvbihlKXt2YXIgdD1lLmNoYXJDb2RlQXQoMCkscj1lLmNoYXJDb2RlQXQoMSksbj1lLmNoYXJDb2RlQXQoMiksaT1lLmNoYXJDb2RlQXQoMykscz10aGlzLnJlYWREYXRhKDQpO3JldHVybiB0PT09c1swXSYmcj09PXNbMV0mJm49PT1zWzJdJiZpPT09c1szXX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7aWYodGhpcy5jaGVja09mZnNldChlKSwwPT09ZSlyZXR1cm5bXTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDE4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4uL3V0aWxzXCIpO2Z1bmN0aW9uIGkoZSl7dGhpcy5kYXRhPWUsdGhpcy5sZW5ndGg9ZS5sZW5ndGgsdGhpcy5pbmRleD0wLHRoaXMuemVybz0wfWkucHJvdG90eXBlPXtjaGVja09mZnNldDpmdW5jdGlvbihlKXt0aGlzLmNoZWNrSW5kZXgodGhpcy5pbmRleCtlKX0sY2hlY2tJbmRleDpmdW5jdGlvbihlKXtpZih0aGlzLmxlbmd0aDx0aGlzLnplcm8rZXx8ZTwwKXRocm93IG5ldyBFcnJvcihcIkVuZCBvZiBkYXRhIHJlYWNoZWQgKGRhdGEgbGVuZ3RoID0gXCIrdGhpcy5sZW5ndGgrXCIsIGFza2VkIGluZGV4ID0gXCIrZStcIikuIENvcnJ1cHRlZCB6aXAgP1wiKX0sc2V0SW5kZXg6ZnVuY3Rpb24oZSl7dGhpcy5jaGVja0luZGV4KGUpLHRoaXMuaW5kZXg9ZX0sc2tpcDpmdW5jdGlvbihlKXt0aGlzLnNldEluZGV4KHRoaXMuaW5kZXgrZSl9LGJ5dGVBdDpmdW5jdGlvbigpe30scmVhZEludDpmdW5jdGlvbihlKXt2YXIgdCxyPTA7Zm9yKHRoaXMuY2hlY2tPZmZzZXQoZSksdD10aGlzLmluZGV4K2UtMTt0Pj10aGlzLmluZGV4O3QtLSlyPShyPDw4KSt0aGlzLmJ5dGVBdCh0KTtyZXR1cm4gdGhpcy5pbmRleCs9ZSxyfSxyZWFkU3RyaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBuLnRyYW5zZm9ybVRvKFwic3RyaW5nXCIsdGhpcy5yZWFkRGF0YShlKSl9LHJlYWREYXRhOmZ1bmN0aW9uKCl7fSxsYXN0SW5kZXhPZlNpZ25hdHVyZTpmdW5jdGlvbigpe30scmVhZEFuZENoZWNrU2lnbmF0dXJlOmZ1bmN0aW9uKCl7fSxyZWFkRGF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZEludCg0KTtyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoMTk4MCsoZT4+MjUmMTI3KSwoZT4+MjEmMTUpLTEsZT4+MTYmMzEsZT4+MTEmMzEsZT4+NSY2MywoMzEmZSk8PDEpKX19LHQuZXhwb3J0cz1pfSx7XCIuLi91dGlsc1wiOjMyfV0sMTk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9VaW50OEFycmF5UmVhZGVyXCIpO2Z1bmN0aW9uIGkoZSl7bi5jYWxsKHRoaXMsZSl9ZShcIi4uL3V0aWxzXCIpLmluaGVyaXRzKGksbiksaS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL1VpbnQ4QXJyYXlSZWFkZXJcIjoyMX1dLDIwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vRGF0YVJlYWRlclwiKTtmdW5jdGlvbiBpKGUpe24uY2FsbCh0aGlzLGUpfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhpLG4pLGkucHJvdG90eXBlLmJ5dGVBdD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmNoYXJDb2RlQXQodGhpcy56ZXJvK2UpfSxpLnByb3RvdHlwZS5sYXN0SW5kZXhPZlNpZ25hdHVyZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5kYXRhLmxhc3RJbmRleE9mKGUpLXRoaXMuemVyb30saS5wcm90b3R5cGUucmVhZEFuZENoZWNrU2lnbmF0dXJlPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09dGhpcy5yZWFkRGF0YSg0KX0saS5wcm90b3R5cGUucmVhZERhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaGVja09mZnNldChlKTt2YXIgdD10aGlzLmRhdGEuc2xpY2UodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0RhdGFSZWFkZXJcIjoxOH1dLDIxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vQXJyYXlSZWFkZXJcIik7ZnVuY3Rpb24gaShlKXtuLmNhbGwodGhpcyxlKX1lKFwiLi4vdXRpbHNcIikuaW5oZXJpdHMoaSxuKSxpLnByb3RvdHlwZS5yZWFkRGF0YT1mdW5jdGlvbihlKXtpZih0aGlzLmNoZWNrT2Zmc2V0KGUpLDA9PT1lKXJldHVybiBuZXcgVWludDhBcnJheSgwKTt2YXIgdD10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy56ZXJvK3RoaXMuaW5kZXgsdGhpcy56ZXJvK3RoaXMuaW5kZXgrZSk7cmV0dXJuIHRoaXMuaW5kZXgrPWUsdH0sdC5leHBvcnRzPWl9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0FycmF5UmVhZGVyXCI6MTd9XSwyMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuLi9zdXBwb3J0XCIpLHM9ZShcIi4vQXJyYXlSZWFkZXJcIiksYT1lKFwiLi9TdHJpbmdSZWFkZXJcIiksbz1lKFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCIpLGg9ZShcIi4vVWludDhBcnJheVJlYWRlclwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9bi5nZXRUeXBlT2YoZSk7cmV0dXJuIG4uY2hlY2tTdXBwb3J0KHQpLFwic3RyaW5nXCIhPT10fHxpLnVpbnQ4YXJyYXk/XCJub2RlYnVmZmVyXCI9PT10P25ldyBvKGUpOmkudWludDhhcnJheT9uZXcgaChuLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpKTpuZXcgcyhuLnRyYW5zZm9ybVRvKFwiYXJyYXlcIixlKSk6bmV3IGEoZSl9fSx7XCIuLi9zdXBwb3J0XCI6MzAsXCIuLi91dGlsc1wiOjMyLFwiLi9BcnJheVJlYWRlclwiOjE3LFwiLi9Ob2RlQnVmZmVyUmVhZGVyXCI6MTksXCIuL1N0cmluZ1JlYWRlclwiOjIwLFwiLi9VaW50OEFycmF5UmVhZGVyXCI6MjF9XSwyMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuTE9DQUxfRklMRV9IRUFERVI9XCJQS1x1MDAwM1x1MDAwNFwiLHIuQ0VOVFJBTF9GSUxFX0hFQURFUj1cIlBLXHUwMDAxXHUwMDAyXCIsci5DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNVx1MDAwNlwiLHIuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUj1cIlBLXHUwMDA2XHUwMDA3XCIsci5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQ9XCJQS1x1MDAwNlx1MDAwNlwiLHIuREFUQV9ERVNDUklQVE9SPVwiUEtcdTAwMDdcXGJcIn0se31dLDI0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi91dGlsc1wiKTtmdW5jdGlvbiBzKGUpe24uY2FsbCh0aGlzLFwiQ29udmVydFdvcmtlciB0byBcIitlKSx0aGlzLmRlc3RUeXBlPWV9aS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnB1c2goe2RhdGE6aS50cmFuc2Zvcm1Ubyh0aGlzLmRlc3RUeXBlLGUuZGF0YSksbWV0YTplLm1ldGF9KX0sdC5leHBvcnRzPXN9LHtcIi4uL3V0aWxzXCI6MzIsXCIuL0dlbmVyaWNXb3JrZXJcIjoyOH1dLDI1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vR2VuZXJpY1dvcmtlclwiKSxpPWUoXCIuLi9jcmMzMlwiKTtmdW5jdGlvbiBzKCl7bi5jYWxsKHRoaXMsXCJDcmMzMlByb2JlXCIpLHRoaXMud2l0aFN0cmVhbUluZm8oXCJjcmMzMlwiLDApfWUoXCIuLi91dGlsc1wiKS5pbmhlcml0cyhzLG4pLHMucHJvdG90eXBlLnByb2Nlc3NDaHVuaz1mdW5jdGlvbihlKXt0aGlzLnN0cmVhbUluZm8uY3JjMzI9aShlLmRhdGEsdGhpcy5zdHJlYW1JbmZvLmNyYzMyfHwwKSx0aGlzLnB1c2goZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi9jcmMzMlwiOjQsXCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFMZW5ndGhQcm9iZSBmb3IgXCIrZSksdGhpcy5wcm9wTmFtZT1lLHRoaXMud2l0aFN0cmVhbUluZm8oZSwwKX1uLmluaGVyaXRzKHMsaSkscy5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe2lmKGUpe3ZhciB0PXRoaXMuc3RyZWFtSW5mb1t0aGlzLnByb3BOYW1lXXx8MDt0aGlzLnN0cmVhbUluZm9bdGhpcy5wcm9wTmFtZV09dCtlLmRhdGEubGVuZ3RofWkucHJvdG90eXBlLnByb2Nlc3NDaHVuay5jYWxsKHRoaXMsZSl9LHQuZXhwb3J0cz1zfSx7XCIuLi91dGlsc1wiOjMyLFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwyNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuLi91dGlsc1wiKSxpPWUoXCIuL0dlbmVyaWNXb3JrZXJcIik7ZnVuY3Rpb24gcyhlKXtpLmNhbGwodGhpcyxcIkRhdGFXb3JrZXJcIik7dmFyIHQ9dGhpczt0aGlzLmRhdGFJc1JlYWR5PSExLHRoaXMuaW5kZXg9MCx0aGlzLm1heD0wLHRoaXMuZGF0YT1udWxsLHRoaXMudHlwZT1cIlwiLHRoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsZS50aGVuKGZ1bmN0aW9uKGUpe3QuZGF0YUlzUmVhZHk9ITAsdC5kYXRhPWUsdC5tYXg9ZSYmZS5sZW5ndGh8fDAsdC50eXBlPW4uZ2V0VHlwZU9mKGUpLHQuaXNQYXVzZWR8fHQuX3RpY2tBbmRSZXBlYXQoKX0sZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pfW4uaW5oZXJpdHMocyxpKSxzLnByb3RvdHlwZS5jbGVhblVwPWZ1bmN0aW9uKCl7aS5wcm90b3R5cGUuY2xlYW5VcC5jYWxsKHRoaXMpLHRoaXMuZGF0YT1udWxsfSxzLnByb3RvdHlwZS5yZXN1bWU9ZnVuY3Rpb24oKXtyZXR1cm4hIWkucHJvdG90eXBlLnJlc3VtZS5jYWxsKHRoaXMpJiYoIXRoaXMuX3RpY2tTY2hlZHVsZWQmJnRoaXMuZGF0YUlzUmVhZHkmJih0aGlzLl90aWNrU2NoZWR1bGVkPSEwLG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSksITApfSxzLnByb3RvdHlwZS5fdGlja0FuZFJlcGVhdD1mdW5jdGlvbigpe3RoaXMuX3RpY2tTY2hlZHVsZWQ9ITEsdGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkfHwodGhpcy5fdGljaygpLHRoaXMuaXNGaW5pc2hlZHx8KG4uZGVsYXkodGhpcy5fdGlja0FuZFJlcGVhdCxbXSx0aGlzKSx0aGlzLl90aWNrU2NoZWR1bGVkPSEwKSl9LHMucHJvdG90eXBlLl90aWNrPWZ1bmN0aW9uKCl7aWYodGhpcy5pc1BhdXNlZHx8dGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3ZhciBlPW51bGwsdD1NYXRoLm1pbih0aGlzLm1heCx0aGlzLmluZGV4KzE2Mzg0KTtpZih0aGlzLmluZGV4Pj10aGlzLm1heClyZXR1cm4gdGhpcy5lbmQoKTtzd2l0Y2godGhpcy50eXBlKXtjYXNlXCJzdHJpbmdcIjplPXRoaXMuZGF0YS5zdWJzdHJpbmcodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJ1aW50OGFycmF5XCI6ZT10aGlzLmRhdGEuc3ViYXJyYXkodGhpcy5pbmRleCx0KTticmVhaztjYXNlXCJhcnJheVwiOmNhc2VcIm5vZGVidWZmZXJcIjplPXRoaXMuZGF0YS5zbGljZSh0aGlzLmluZGV4LHQpfXJldHVybiB0aGlzLmluZGV4PXQsdGhpcy5wdXNoKHtkYXRhOmUsbWV0YTp7cGVyY2VudDp0aGlzLm1heD90aGlzLmluZGV4L3RoaXMubWF4KjEwMDowfX0pfSx0LmV4cG9ydHM9c30se1wiLi4vdXRpbHNcIjozMixcIi4vR2VuZXJpY1dvcmtlclwiOjI4fV0sMjg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3RoaXMubmFtZT1lfHxcImRlZmF1bHRcIix0aGlzLnN0cmVhbUluZm89e30sdGhpcy5nZW5lcmF0ZWRFcnJvcj1udWxsLHRoaXMuZXh0cmFTdHJlYW1JbmZvPXt9LHRoaXMuaXNQYXVzZWQ9ITAsdGhpcy5pc0ZpbmlzaGVkPSExLHRoaXMuaXNMb2NrZWQ9ITEsdGhpcy5fbGlzdGVuZXJzPXtkYXRhOltdLGVuZDpbXSxlcnJvcjpbXX0sdGhpcy5wcmV2aW91cz1udWxsfW4ucHJvdG90eXBlPXtwdXNoOmZ1bmN0aW9uKGUpe3RoaXMuZW1pdChcImRhdGFcIixlKX0sZW5kOmZ1bmN0aW9uKCl7aWYodGhpcy5pc0ZpbmlzaGVkKXJldHVybiExO3RoaXMuZmx1c2goKTt0cnl7dGhpcy5lbWl0KFwiZW5kXCIpLHRoaXMuY2xlYW5VcCgpLHRoaXMuaXNGaW5pc2hlZD0hMH1jYXRjaChlKXt0aGlzLmVtaXQoXCJlcnJvclwiLGUpfXJldHVybiEwfSxlcnJvcjpmdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5pc0ZpbmlzaGVkJiYodGhpcy5pc1BhdXNlZD90aGlzLmdlbmVyYXRlZEVycm9yPWU6KHRoaXMuaXNGaW5pc2hlZD0hMCx0aGlzLmVtaXQoXCJlcnJvclwiLGUpLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMuZXJyb3IoZSksdGhpcy5jbGVhblVwKCkpLCEwKX0sb246ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2VdLnB1c2godCksdGhpc30sY2xlYW5VcDpmdW5jdGlvbigpe3RoaXMuc3RyZWFtSW5mbz10aGlzLmdlbmVyYXRlZEVycm9yPXRoaXMuZXh0cmFTdHJlYW1JbmZvPW51bGwsdGhpcy5fbGlzdGVuZXJzPVtdfSxlbWl0OmZ1bmN0aW9uKGUsdCl7aWYodGhpcy5fbGlzdGVuZXJzW2VdKWZvcih2YXIgcj0wO3I8dGhpcy5fbGlzdGVuZXJzW2VdLmxlbmd0aDtyKyspdGhpcy5fbGlzdGVuZXJzW2VdW3JdLmNhbGwodGhpcyx0KX0scGlwZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZWdpc3RlclByZXZpb3VzKHRoaXMpfSxyZWdpc3RlclByZXZpb3VzOmZ1bmN0aW9uKGUpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLnN0cmVhbUluZm89ZS5zdHJlYW1JbmZvLHRoaXMubWVyZ2VTdHJlYW1JbmZvKCksdGhpcy5wcmV2aW91cz1lO3ZhciB0PXRoaXM7cmV0dXJuIGUub24oXCJkYXRhXCIsZnVuY3Rpb24oZSl7dC5wcm9jZXNzQ2h1bmsoZSl9KSxlLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0LmVuZCgpfSksZS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7dC5lcnJvcihlKX0pLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNQYXVzZWQmJiF0aGlzLmlzRmluaXNoZWQmJih0aGlzLmlzUGF1c2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMucGF1c2UoKSwhMCl9LHJlc3VtZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzUGF1c2VkfHx0aGlzLmlzRmluaXNoZWQpcmV0dXJuITE7dmFyIGU9dGhpcy5pc1BhdXNlZD0hMTtyZXR1cm4gdGhpcy5nZW5lcmF0ZWRFcnJvciYmKHRoaXMuZXJyb3IodGhpcy5nZW5lcmF0ZWRFcnJvciksZT0hMCksdGhpcy5wcmV2aW91cyYmdGhpcy5wcmV2aW91cy5yZXN1bWUoKSwhZX0sZmx1c2g6ZnVuY3Rpb24oKXt9LHByb2Nlc3NDaHVuazpmdW5jdGlvbihlKXt0aGlzLnB1c2goZSl9LHdpdGhTdHJlYW1JbmZvOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdPXQsdGhpcy5tZXJnZVN0cmVhbUluZm8oKSx0aGlzfSxtZXJnZVN0cmVhbUluZm86ZnVuY3Rpb24oKXtmb3IodmFyIGUgaW4gdGhpcy5leHRyYVN0cmVhbUluZm8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuZXh0cmFTdHJlYW1JbmZvLGUpJiYodGhpcy5zdHJlYW1JbmZvW2VdPXRoaXMuZXh0cmFTdHJlYW1JbmZvW2VdKX0sbG9jazpmdW5jdGlvbigpe2lmKHRoaXMuaXNMb2NrZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0cmVhbSAnXCIrdGhpcytcIicgaGFzIGFscmVhZHkgYmVlbiB1c2VkLlwiKTt0aGlzLmlzTG9ja2VkPSEwLHRoaXMucHJldmlvdXMmJnRoaXMucHJldmlvdXMubG9jaygpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBlPVwiV29ya2VyIFwiK3RoaXMubmFtZTtyZXR1cm4gdGhpcy5wcmV2aW91cz90aGlzLnByZXZpb3VzK1wiIC0+IFwiK2U6ZX19LHQuZXhwb3J0cz1ufSx7fV0sMjk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaD1lKFwiLi4vdXRpbHNcIiksaT1lKFwiLi9Db252ZXJ0V29ya2VyXCIpLHM9ZShcIi4vR2VuZXJpY1dvcmtlclwiKSx1PWUoXCIuLi9iYXNlNjRcIiksbj1lKFwiLi4vc3VwcG9ydFwiKSxhPWUoXCIuLi9leHRlcm5hbFwiKSxvPW51bGw7aWYobi5ub2Rlc3RyZWFtKXRyeXtvPWUoXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiKX1jYXRjaChlKXt9ZnVuY3Rpb24gbChlLG8pe3JldHVybiBuZXcgYS5Qcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIG49W10saT1lLl9pbnRlcm5hbFR5cGUscz1lLl9vdXRwdXRUeXBlLGE9ZS5fbWltZVR5cGU7ZS5vbihcImRhdGFcIixmdW5jdGlvbihlLHQpe24ucHVzaChlKSxvJiZvKHQpfSkub24oXCJlcnJvclwiLGZ1bmN0aW9uKGUpe249W10scihlKX0pLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZnVuY3Rpb24oZSx0LHIpe3N3aXRjaChlKXtjYXNlXCJibG9iXCI6cmV0dXJuIGgubmV3QmxvYihoLnRyYW5zZm9ybVRvKFwiYXJyYXlidWZmZXJcIix0KSxyKTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gdS5lbmNvZGUodCk7ZGVmYXVsdDpyZXR1cm4gaC50cmFuc2Zvcm1UbyhlLHQpfX0ocyxmdW5jdGlvbihlLHQpe3ZhciByLG49MCxpPW51bGwscz0wO2ZvcihyPTA7cjx0Lmxlbmd0aDtyKyspcys9dFtyXS5sZW5ndGg7c3dpdGNoKGUpe2Nhc2VcInN0cmluZ1wiOnJldHVybiB0LmpvaW4oXCJcIik7Y2FzZVwiYXJyYXlcIjpyZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSx0KTtjYXNlXCJ1aW50OGFycmF5XCI6Zm9yKGk9bmV3IFVpbnQ4QXJyYXkocykscj0wO3I8dC5sZW5ndGg7cisrKWkuc2V0KHRbcl0sbiksbis9dFtyXS5sZW5ndGg7cmV0dXJuIGk7Y2FzZVwibm9kZWJ1ZmZlclwiOnJldHVybiBCdWZmZXIuY29uY2F0KHQpO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKFwiY29uY2F0IDogdW5zdXBwb3J0ZWQgdHlwZSAnXCIrZStcIidcIil9fShpLG4pLGEpO3QoZSl9Y2F0Y2goZSl7cihlKX1uPVtdfSkucmVzdW1lKCl9KX1mdW5jdGlvbiBmKGUsdCxyKXt2YXIgbj10O3N3aXRjaCh0KXtjYXNlXCJibG9iXCI6Y2FzZVwiYXJyYXlidWZmZXJcIjpuPVwidWludDhhcnJheVwiO2JyZWFrO2Nhc2VcImJhc2U2NFwiOm49XCJzdHJpbmdcIn10cnl7dGhpcy5faW50ZXJuYWxUeXBlPW4sdGhpcy5fb3V0cHV0VHlwZT10LHRoaXMuX21pbWVUeXBlPXIsaC5jaGVja1N1cHBvcnQobiksdGhpcy5fd29ya2VyPWUucGlwZShuZXcgaShuKSksZS5sb2NrKCl9Y2F0Y2goZSl7dGhpcy5fd29ya2VyPW5ldyBzKFwiZXJyb3JcIiksdGhpcy5fd29ya2VyLmVycm9yKGUpfX1mLnByb3RvdHlwZT17YWNjdW11bGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gbCh0aGlzLGUpfSxvbjpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7cmV0dXJuXCJkYXRhXCI9PT1lP3RoaXMuX3dvcmtlci5vbihlLGZ1bmN0aW9uKGUpe3QuY2FsbChyLGUuZGF0YSxlLm1ldGEpfSk6dGhpcy5fd29ya2VyLm9uKGUsZnVuY3Rpb24oKXtoLmRlbGF5KHQsYXJndW1lbnRzLHIpfSksdGhpc30scmVzdW1lOmZ1bmN0aW9uKCl7cmV0dXJuIGguZGVsYXkodGhpcy5fd29ya2VyLnJlc3VtZSxbXSx0aGlzLl93b3JrZXIpLHRoaXN9LHBhdXNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dvcmtlci5wYXVzZSgpLHRoaXN9LHRvTm9kZWpzU3RyZWFtOmZ1bmN0aW9uKGUpe2lmKGguY2hlY2tTdXBwb3J0KFwibm9kZXN0cmVhbVwiKSxcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGUpdGhyb3cgbmV3IEVycm9yKHRoaXMuX291dHB1dFR5cGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIG1ldGhvZFwiKTtyZXR1cm4gbmV3IG8odGhpcyx7b2JqZWN0TW9kZTpcIm5vZGVidWZmZXJcIiE9PXRoaXMuX291dHB1dFR5cGV9LGUpfX0sdC5leHBvcnRzPWZ9LHtcIi4uL2Jhc2U2NFwiOjEsXCIuLi9leHRlcm5hbFwiOjYsXCIuLi9ub2RlanMvTm9kZWpzU3RyZWFtT3V0cHV0QWRhcHRlclwiOjEzLFwiLi4vc3VwcG9ydFwiOjMwLFwiLi4vdXRpbHNcIjozMixcIi4vQ29udmVydFdvcmtlclwiOjI0LFwiLi9HZW5lcmljV29ya2VyXCI6Mjh9XSwzMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2lmKHIuYmFzZTY0PSEwLHIuYXJyYXk9ITAsci5zdHJpbmc9ITAsci5hcnJheWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LHIubm9kZWJ1ZmZlcj1cInVuZGVmaW5lZFwiIT10eXBlb2YgQnVmZmVyLHIudWludDhhcnJheT1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSxcInVuZGVmaW5lZFwiPT10eXBlb2YgQXJyYXlCdWZmZXIpci5ibG9iPSExO2Vsc2V7dmFyIG49bmV3IEFycmF5QnVmZmVyKDApO3RyeXtyLmJsb2I9MD09PW5ldyBCbG9iKFtuXSx7dHlwZTpcImFwcGxpY2F0aW9uL3ppcFwifSkuc2l6ZX1jYXRjaChlKXt0cnl7dmFyIGk9bmV3KHNlbGYuQmxvYkJ1aWxkZXJ8fHNlbGYuV2ViS2l0QmxvYkJ1aWxkZXJ8fHNlbGYuTW96QmxvYkJ1aWxkZXJ8fHNlbGYuTVNCbG9iQnVpbGRlcik7aS5hcHBlbmQobiksci5ibG9iPTA9PT1pLmdldEJsb2IoXCJhcHBsaWNhdGlvbi96aXBcIikuc2l6ZX1jYXRjaChlKXtyLmJsb2I9ITF9fX10cnl7ci5ub2Rlc3RyZWFtPSEhZShcInJlYWRhYmxlLXN0cmVhbVwiKS5SZWFkYWJsZX1jYXRjaChlKXtyLm5vZGVzdHJlYW09ITF9fSx7XCJyZWFkYWJsZS1zdHJlYW1cIjoxNn1dLDMxOltmdW5jdGlvbihlLHQscyl7XCJ1c2Ugc3RyaWN0XCI7Zm9yKHZhciBvPWUoXCIuL3V0aWxzXCIpLGg9ZShcIi4vc3VwcG9ydFwiKSxyPWUoXCIuL25vZGVqc1V0aWxzXCIpLG49ZShcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIiksdT1uZXcgQXJyYXkoMjU2KSxpPTA7aTwyNTY7aSsrKXVbaV09MjUyPD1pPzY6MjQ4PD1pPzU6MjQwPD1pPzQ6MjI0PD1pPzM6MTkyPD1pPzI6MTt1WzI1NF09dVsyNTRdPTE7ZnVuY3Rpb24gYSgpe24uY2FsbCh0aGlzLFwidXRmLTggZGVjb2RlXCIpLHRoaXMubGVmdE92ZXI9bnVsbH1mdW5jdGlvbiBsKCl7bi5jYWxsKHRoaXMsXCJ1dGYtOCBlbmNvZGVcIil9cy51dGY4ZW5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBoLm5vZGVidWZmZXI/ci5uZXdCdWZmZXJGcm9tKGUsXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzLGE9ZS5sZW5ndGgsbz0wO2ZvcihpPTA7aTxhO2krKyk1NTI5Nj09KDY0NTEyJihyPWUuY2hhckNvZGVBdChpKSkpJiZpKzE8YSYmNTYzMjA9PSg2NDUxMiYobj1lLmNoYXJDb2RlQXQoaSsxKSkpJiYocj02NTUzNisoci01NTI5Njw8MTApKyhuLTU2MzIwKSxpKyspLG8rPXI8MTI4PzE6cjwyMDQ4PzI6cjw2NTUzNj8zOjQ7Zm9yKHQ9aC51aW50OGFycmF5P25ldyBVaW50OEFycmF5KG8pOm5ldyBBcnJheShvKSxpPXM9MDtzPG87aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKykscjwxMjg/dFtzKytdPXI6KHI8MjA0OD90W3MrK109MTkyfHI+Pj42OihyPDY1NTM2P3RbcysrXT0yMjR8cj4+PjEyOih0W3MrK109MjQwfHI+Pj4xOCx0W3MrK109MTI4fHI+Pj4xMiY2MyksdFtzKytdPTEyOHxyPj4+NiY2MyksdFtzKytdPTEyOHw2MyZyKTtyZXR1cm4gdH0oZSl9LHMudXRmOGRlY29kZT1mdW5jdGlvbihlKXtyZXR1cm4gaC5ub2RlYnVmZmVyP28udHJhbnNmb3JtVG8oXCJub2RlYnVmZmVyXCIsZSkudG9TdHJpbmcoXCJ1dGYtOFwiKTpmdW5jdGlvbihlKXt2YXIgdCxyLG4saSxzPWUubGVuZ3RoLGE9bmV3IEFycmF5KDIqcyk7Zm9yKHQ9cj0wO3Q8czspaWYoKG49ZVt0KytdKTwxMjgpYVtyKytdPW47ZWxzZSBpZig0PChpPXVbbl0pKWFbcisrXT02NTUzMyx0Kz1pLTE7ZWxzZXtmb3IobiY9Mj09PWk/MzE6Mz09PWk/MTU6NzsxPGkmJnQ8czspbj1uPDw2fDYzJmVbdCsrXSxpLS07MTxpP2FbcisrXT02NTUzMzpuPDY1NTM2P2FbcisrXT1uOihuLT02NTUzNixhW3IrK109NTUyOTZ8bj4+MTAmMTAyMyxhW3IrK109NTYzMjB8MTAyMyZuKX1yZXR1cm4gYS5sZW5ndGghPT1yJiYoYS5zdWJhcnJheT9hPWEuc3ViYXJyYXkoMCxyKTphLmxlbmd0aD1yKSxvLmFwcGx5RnJvbUNoYXJDb2RlKGEpfShlPW8udHJhbnNmb3JtVG8oaC51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIixlKSl9LG8uaW5oZXJpdHMoYSxuKSxhLnByb3RvdHlwZS5wcm9jZXNzQ2h1bms9ZnVuY3Rpb24oZSl7dmFyIHQ9by50cmFuc2Zvcm1UbyhoLnVpbnQ4YXJyYXk/XCJ1aW50OGFycmF5XCI6XCJhcnJheVwiLGUuZGF0YSk7aWYodGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgpe2lmKGgudWludDhhcnJheSl7dmFyIHI9dDsodD1uZXcgVWludDhBcnJheShyLmxlbmd0aCt0aGlzLmxlZnRPdmVyLmxlbmd0aCkpLnNldCh0aGlzLmxlZnRPdmVyLDApLHQuc2V0KHIsdGhpcy5sZWZ0T3Zlci5sZW5ndGgpfWVsc2UgdD10aGlzLmxlZnRPdmVyLmNvbmNhdCh0KTt0aGlzLmxlZnRPdmVyPW51bGx9dmFyIG49ZnVuY3Rpb24oZSx0KXt2YXIgcjtmb3IoKHQ9dHx8ZS5sZW5ndGgpPmUubGVuZ3RoJiYodD1lLmxlbmd0aCkscj10LTE7MDw9ciYmMTI4PT0oMTkyJmVbcl0pOylyLS07cmV0dXJuIHI8MD90OjA9PT1yP3Q6cit1W2Vbcl1dPnQ/cjp0fSh0KSxpPXQ7biE9PXQubGVuZ3RoJiYoaC51aW50OGFycmF5PyhpPXQuc3ViYXJyYXkoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc3ViYXJyYXkobix0Lmxlbmd0aCkpOihpPXQuc2xpY2UoMCxuKSx0aGlzLmxlZnRPdmVyPXQuc2xpY2Uobix0Lmxlbmd0aCkpKSx0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKGkpLG1ldGE6ZS5tZXRhfSl9LGEucHJvdG90eXBlLmZsdXNoPWZ1bmN0aW9uKCl7dGhpcy5sZWZ0T3ZlciYmdGhpcy5sZWZ0T3Zlci5sZW5ndGgmJih0aGlzLnB1c2goe2RhdGE6cy51dGY4ZGVjb2RlKHRoaXMubGVmdE92ZXIpLG1ldGE6e319KSx0aGlzLmxlZnRPdmVyPW51bGwpfSxzLlV0ZjhEZWNvZGVXb3JrZXI9YSxvLmluaGVyaXRzKGwsbiksbC5wcm90b3R5cGUucHJvY2Vzc0NodW5rPWZ1bmN0aW9uKGUpe3RoaXMucHVzaCh7ZGF0YTpzLnV0ZjhlbmNvZGUoZS5kYXRhKSxtZXRhOmUubWV0YX0pfSxzLlV0ZjhFbmNvZGVXb3JrZXI9bH0se1wiLi9ub2RlanNVdGlsc1wiOjE0LFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiOjI4LFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzJ9XSwzMjpbZnVuY3Rpb24oZSx0LGEpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL3N1cHBvcnRcIiksaD1lKFwiLi9iYXNlNjRcIikscj1lKFwiLi9ub2RlanNVdGlsc1wiKSx1PWUoXCIuL2V4dGVybmFsXCIpO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGV9ZnVuY3Rpb24gbChlLHQpe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7KytyKXRbcl09MjU1JmUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH1lKFwic2V0aW1tZWRpYXRlXCIpLGEubmV3QmxvYj1mdW5jdGlvbih0LHIpe2EuY2hlY2tTdXBwb3J0KFwiYmxvYlwiKTt0cnl7cmV0dXJuIG5ldyBCbG9iKFt0XSx7dHlwZTpyfSl9Y2F0Y2goZSl7dHJ5e3ZhciBuPW5ldyhzZWxmLkJsb2JCdWlsZGVyfHxzZWxmLldlYktpdEJsb2JCdWlsZGVyfHxzZWxmLk1vekJsb2JCdWlsZGVyfHxzZWxmLk1TQmxvYkJ1aWxkZXIpO3JldHVybiBuLmFwcGVuZCh0KSxuLmdldEJsb2Iocil9Y2F0Y2goZSl7dGhyb3cgbmV3IEVycm9yKFwiQnVnIDogY2FuJ3QgY29uc3RydWN0IHRoZSBCbG9iLlwiKX19fTt2YXIgaT17c3RyaW5naWZ5QnlDaHVuazpmdW5jdGlvbihlLHQscil7dmFyIG49W10saT0wLHM9ZS5sZW5ndGg7aWYoczw9cilyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGUpO2Zvcig7aTxzOylcImFycmF5XCI9PT10fHxcIm5vZGVidWZmZXJcIj09PXQ/bi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxlLnNsaWNlKGksTWF0aC5taW4oaStyLHMpKSkpOm4ucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZS5zdWJhcnJheShpLE1hdGgubWluKGkrcixzKSkpKSxpKz1yO3JldHVybiBuLmpvaW4oXCJcIil9LHN0cmluZ2lmeUJ5Q2hhcjpmdW5jdGlvbihlKXtmb3IodmFyIHQ9XCJcIixyPTA7cjxlLmxlbmd0aDtyKyspdCs9U3RyaW5nLmZyb21DaGFyQ29kZShlW3JdKTtyZXR1cm4gdH0sYXBwbHlDYW5CZVVzZWQ6e3VpbnQ4YXJyYXk6ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG8udWludDhhcnJheSYmMT09PVN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKSxub2RlYnVmZmVyOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBvLm5vZGVidWZmZXImJjE9PT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsci5hbGxvY0J1ZmZlcigxKSkubGVuZ3RofWNhdGNoKGUpe3JldHVybiExfX0oKX19O2Z1bmN0aW9uIHMoZSl7dmFyIHQ9NjU1MzYscj1hLmdldFR5cGVPZihlKSxuPSEwO2lmKFwidWludDhhcnJheVwiPT09cj9uPWkuYXBwbHlDYW5CZVVzZWQudWludDhhcnJheTpcIm5vZGVidWZmZXJcIj09PXImJihuPWkuYXBwbHlDYW5CZVVzZWQubm9kZWJ1ZmZlciksbilmb3IoOzE8dDspdHJ5e3JldHVybiBpLnN0cmluZ2lmeUJ5Q2h1bmsoZSxyLHQpfWNhdGNoKGUpe3Q9TWF0aC5mbG9vcih0LzIpfXJldHVybiBpLnN0cmluZ2lmeUJ5Q2hhcihlKX1mdW5jdGlvbiBmKGUsdCl7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspdFtyXT1lW3JdO3JldHVybiB0fWEuYXBwbHlGcm9tQ2hhckNvZGU9czt2YXIgYz17fTtjLnN0cmluZz17c3RyaW5nOm4sYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGMuc3RyaW5nLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBsKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gbChlLHIuYWxsb2NCdWZmZXIoZS5sZW5ndGgpKX19LGMuYXJyYXk9e3N0cmluZzpzLGFycmF5Om4sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KGUpLmJ1ZmZlcn0sdWludDhhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZSl9LG5vZGVidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHIubmV3QnVmZmVyRnJvbShlKX19LGMuYXJyYXlidWZmZXI9e3N0cmluZzpmdW5jdGlvbihlKXtyZXR1cm4gcyhuZXcgVWludDhBcnJheShlKSl9LGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKG5ldyBVaW50OEFycmF5KGUpLG5ldyBBcnJheShlLmJ5dGVMZW5ndGgpKX0sYXJyYXlidWZmZXI6bix1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBuZXcgVWludDhBcnJheShlKX0sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKG5ldyBVaW50OEFycmF5KGUpKX19LGMudWludDhhcnJheT17c3RyaW5nOnMsYXJyYXk6ZnVuY3Rpb24oZSl7cmV0dXJuIGYoZSxuZXcgQXJyYXkoZS5sZW5ndGgpKX0sYXJyYXlidWZmZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuYnVmZmVyfSx1aW50OGFycmF5Om4sbm9kZWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gci5uZXdCdWZmZXJGcm9tKGUpfX0sYy5ub2RlYnVmZmVyPXtzdHJpbmc6cyxhcnJheTpmdW5jdGlvbihlKXtyZXR1cm4gZihlLG5ldyBBcnJheShlLmxlbmd0aCkpfSxhcnJheWJ1ZmZlcjpmdW5jdGlvbihlKXtyZXR1cm4gYy5ub2RlYnVmZmVyLnVpbnQ4YXJyYXkoZSkuYnVmZmVyfSx1aW50OGFycmF5OmZ1bmN0aW9uKGUpe3JldHVybiBmKGUsbmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpKX0sbm9kZWJ1ZmZlcjpufSxhLnRyYW5zZm9ybVRvPWZ1bmN0aW9uKGUsdCl7aWYodD10fHxcIlwiLCFlKXJldHVybiB0O2EuY2hlY2tTdXBwb3J0KGUpO3ZhciByPWEuZ2V0VHlwZU9mKHQpO3JldHVybiBjW3JdW2VdKHQpfSxhLnJlc29sdmU9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuc3BsaXQoXCIvXCIpLHI9W10sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO1wiLlwiPT09aXx8XCJcIj09PWkmJjAhPT1uJiZuIT09dC5sZW5ndGgtMXx8KFwiLi5cIj09PWk/ci5wb3AoKTpyLnB1c2goaSkpfXJldHVybiByLmpvaW4oXCIvXCIpfSxhLmdldFR5cGVPZj1mdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9cInN0cmluZ1wiOlwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKT9cImFycmF5XCI6by5ub2RlYnVmZmVyJiZyLmlzQnVmZmVyKGUpP1wibm9kZWJ1ZmZlclwiOm8udWludDhhcnJheSYmZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk/XCJ1aW50OGFycmF5XCI6by5hcnJheWJ1ZmZlciYmZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyP1wiYXJyYXlidWZmZXJcIjp2b2lkIDB9LGEuY2hlY2tTdXBwb3J0PWZ1bmN0aW9uKGUpe2lmKCFvW2UudG9Mb3dlckNhc2UoKV0pdGhyb3cgbmV3IEVycm9yKGUrXCIgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIHBsYXRmb3JtXCIpfSxhLk1BWF9WQUxVRV8xNkJJVFM9NjU1MzUsYS5NQVhfVkFMVUVfMzJCSVRTPS0xLGEucHJldHR5PWZ1bmN0aW9uKGUpe3ZhciB0LHIsbj1cIlwiO2ZvcihyPTA7cjwoZXx8XCJcIikubGVuZ3RoO3IrKyluKz1cIlxcXFx4XCIrKCh0PWUuY2hhckNvZGVBdChyKSk8MTY/XCIwXCI6XCJcIikrdC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gbn0sYS5kZWxheT1mdW5jdGlvbihlLHQscil7c2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7ZS5hcHBseShyfHxudWxsLHR8fFtdKX0pfSxhLmluaGVyaXRzPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gcigpe31yLnByb3RvdHlwZT10LnByb3RvdHlwZSxlLnByb3RvdHlwZT1uZXcgcn0sYS5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgZSx0LHI9e307Zm9yKGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWZvcih0IGluIGFyZ3VtZW50c1tlXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJndW1lbnRzW2VdLHQpJiZ2b2lkIDA9PT1yW3RdJiYoclt0XT1hcmd1bWVudHNbZV1bdF0pO3JldHVybiByfSxhLnByZXBhcmVDb250ZW50PWZ1bmN0aW9uKHIsZSxuLGkscyl7cmV0dXJuIHUuUHJvbWlzZS5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24obil7cmV0dXJuIG8uYmxvYiYmKG4gaW5zdGFuY2VvZiBCbG9ifHwtMSE9PVtcIltvYmplY3QgRmlsZV1cIixcIltvYmplY3QgQmxvYl1cIl0uaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobikpKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI/bmV3IHUuUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBlPW5ldyBGaWxlUmVhZGVyO2Uub25sb2FkPWZ1bmN0aW9uKGUpe3QoZS50YXJnZXQucmVzdWx0KX0sZS5vbmVycm9yPWZ1bmN0aW9uKGUpe3IoZS50YXJnZXQuZXJyb3IpfSxlLnJlYWRBc0FycmF5QnVmZmVyKG4pfSk6bn0pLnRoZW4oZnVuY3Rpb24oZSl7dmFyIHQ9YS5nZXRUeXBlT2YoZSk7cmV0dXJuIHQ/KFwiYXJyYXlidWZmZXJcIj09PXQ/ZT1hLnRyYW5zZm9ybVRvKFwidWludDhhcnJheVwiLGUpOlwic3RyaW5nXCI9PT10JiYocz9lPWguZGVjb2RlKGUpOm4mJiEwIT09aSYmKGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxvLnVpbnQ4YXJyYXk/bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpOm5ldyBBcnJheShlLmxlbmd0aCkpfShlKSkpLGUpOnUuUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2FuJ3QgcmVhZCB0aGUgZGF0YSBvZiAnXCIrcitcIicuIElzIGl0IGluIGEgc3VwcG9ydGVkIEphdmFTY3JpcHQgdHlwZSAoU3RyaW5nLCBCbG9iLCBBcnJheUJ1ZmZlciwgZXRjKSA/XCIpKX0pfX0se1wiLi9iYXNlNjRcIjoxLFwiLi9leHRlcm5hbFwiOjYsXCIuL25vZGVqc1V0aWxzXCI6MTQsXCIuL3N1cHBvcnRcIjozMCxzZXRpbW1lZGlhdGU6NTR9XSwzMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIiksaT1lKFwiLi91dGlsc1wiKSxzPWUoXCIuL3NpZ25hdHVyZVwiKSxhPWUoXCIuL3ppcEVudHJ5XCIpLG89ZShcIi4vc3VwcG9ydFwiKTtmdW5jdGlvbiBoKGUpe3RoaXMuZmlsZXM9W10sdGhpcy5sb2FkT3B0aW9ucz1lfWgucHJvdG90eXBlPXtjaGVja1NpZ25hdHVyZTpmdW5jdGlvbihlKXtpZighdGhpcy5yZWFkZXIucmVhZEFuZENoZWNrU2lnbmF0dXJlKGUpKXt0aGlzLnJlYWRlci5pbmRleC09NDt2YXIgdD10aGlzLnJlYWRlci5yZWFkU3RyaW5nKDQpO3Rocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgb3IgYnVnOiB1bmV4cGVjdGVkIHNpZ25hdHVyZSAoXCIraS5wcmV0dHkodCkrXCIsIGV4cGVjdGVkIFwiK2kucHJldHR5KGUpK1wiKVwiKX19LGlzU2lnbmF0dXJlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcy5yZWFkZXIuaW5kZXg7dGhpcy5yZWFkZXIuc2V0SW5kZXgoZSk7dmFyIG49dGhpcy5yZWFkZXIucmVhZFN0cmluZyg0KT09PXQ7cmV0dXJuIHRoaXMucmVhZGVyLnNldEluZGV4KHIpLG59LHJlYWRCbG9ja0VuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3RoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDIpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCksdGhpcy56aXBDb21tZW50TGVuZ3RoPXRoaXMucmVhZGVyLnJlYWRJbnQoMik7dmFyIGU9dGhpcy5yZWFkZXIucmVhZERhdGEodGhpcy56aXBDb21tZW50TGVuZ3RoKSx0PW8udWludDhhcnJheT9cInVpbnQ4YXJyYXlcIjpcImFycmF5XCIscj1pLnRyYW5zZm9ybVRvKHQsZSk7dGhpcy56aXBDb21tZW50PXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsOmZ1bmN0aW9uKCl7dGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemU9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLnJlYWRlci5za2lwKDQpLHRoaXMuZGlza051bWJlcj10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMuZGlza1dpdGhDZW50cmFsRGlyU3RhcnQ9dGhpcy5yZWFkZXIucmVhZEludCg0KSx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuY2VudHJhbERpclJlY29yZHM9dGhpcy5yZWFkZXIucmVhZEludCg4KSx0aGlzLmNlbnRyYWxEaXJTaXplPXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy5jZW50cmFsRGlyT2Zmc2V0PXRoaXMucmVhZGVyLnJlYWRJbnQoOCksdGhpcy56aXA2NEV4dGVuc2libGVEYXRhPXt9O2Zvcih2YXIgZSx0LHIsbj10aGlzLnppcDY0RW5kT2ZDZW50cmFsU2l6ZS00NDswPG47KWU9dGhpcy5yZWFkZXIucmVhZEludCgyKSx0PXRoaXMucmVhZGVyLnJlYWRJbnQoNCkscj10aGlzLnJlYWRlci5yZWFkRGF0YSh0KSx0aGlzLnppcDY0RXh0ZW5zaWJsZURhdGFbZV09e2lkOmUsbGVuZ3RoOnQsdmFsdWU6cn19LHJlYWRCbG9ja1ppcDY0RW5kT2ZDZW50cmFsTG9jYXRvcjpmdW5jdGlvbigpe2lmKHRoaXMuZGlza1dpdGhaaXA2NENlbnRyYWxEaXJTdGFydD10aGlzLnJlYWRlci5yZWFkSW50KDQpLHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5yZWFkSW50KDgpLHRoaXMuZGlza3NDb3VudD10aGlzLnJlYWRlci5yZWFkSW50KDQpLDE8dGhpcy5kaXNrc0NvdW50KXRocm93IG5ldyBFcnJvcihcIk11bHRpLXZvbHVtZXMgemlwIGFyZSBub3Qgc3VwcG9ydGVkXCIpfSxyZWFkTG9jYWxGaWxlczpmdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKGU9MDtlPHRoaXMuZmlsZXMubGVuZ3RoO2UrKyl0PXRoaXMuZmlsZXNbZV0sdGhpcy5yZWFkZXIuc2V0SW5kZXgodC5sb2NhbEhlYWRlck9mZnNldCksdGhpcy5jaGVja1NpZ25hdHVyZShzLkxPQ0FMX0ZJTEVfSEVBREVSKSx0LnJlYWRMb2NhbFBhcnQodGhpcy5yZWFkZXIpLHQuaGFuZGxlVVRGOCgpLHQucHJvY2Vzc0F0dHJpYnV0ZXMoKX0scmVhZENlbnRyYWxEaXI6ZnVuY3Rpb24oKXt2YXIgZTtmb3IodGhpcy5yZWFkZXIuc2V0SW5kZXgodGhpcy5jZW50cmFsRGlyT2Zmc2V0KTt0aGlzLnJlYWRlci5yZWFkQW5kQ2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0ZJTEVfSEVBREVSKTspKGU9bmV3IGEoe3ppcDY0OnRoaXMuemlwNjR9LHRoaXMubG9hZE9wdGlvbnMpKS5yZWFkQ2VudHJhbFBhcnQodGhpcy5yZWFkZXIpLHRoaXMuZmlsZXMucHVzaChlKTtpZih0aGlzLmNlbnRyYWxEaXJSZWNvcmRzIT09dGhpcy5maWxlcy5sZW5ndGgmJjAhPT10aGlzLmNlbnRyYWxEaXJSZWNvcmRzJiYwPT09dGhpcy5maWxlcy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcCBvciBidWc6IGV4cGVjdGVkIFwiK3RoaXMuY2VudHJhbERpclJlY29yZHMrXCIgcmVjb3JkcyBpbiBjZW50cmFsIGRpciwgZ290IFwiK3RoaXMuZmlsZXMubGVuZ3RoKX0scmVhZEVuZE9mQ2VudHJhbDpmdW5jdGlvbigpe3ZhciBlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKTtpZihlPDApdGhyb3chdGhpcy5pc1NpZ25hdHVyZSgwLHMuTE9DQUxfRklMRV9IRUFERVIpP25ldyBFcnJvcihcIkNhbid0IGZpbmQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IDogaXMgdGhpcyBhIHppcCBmaWxlID8gSWYgaXQgaXMsIHNlZSBodHRwczovL3N0dWsuZ2l0aHViLmlvL2pzemlwL2RvY3VtZW50YXRpb24vaG93dG8vcmVhZF96aXAuaHRtbFwiKTpuZXcgRXJyb3IoXCJDb3JydXB0ZWQgemlwOiBjYW4ndCBmaW5kIGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleChlKTt2YXIgdD1lO2lmKHRoaXMuY2hlY2tTaWduYXR1cmUocy5DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrRW5kT2ZDZW50cmFsKCksdGhpcy5kaXNrTnVtYmVyPT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmRpc2tXaXRoQ2VudHJhbERpclN0YXJ0PT09aS5NQVhfVkFMVUVfMTZCSVRTfHx0aGlzLmNlbnRyYWxEaXJSZWNvcmRzT25UaGlzRGlzaz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyUmVjb3Jkcz09PWkuTUFYX1ZBTFVFXzE2QklUU3x8dGhpcy5jZW50cmFsRGlyU2l6ZT09PWkuTUFYX1ZBTFVFXzMyQklUU3x8dGhpcy5jZW50cmFsRGlyT2Zmc2V0PT09aS5NQVhfVkFMVUVfMzJCSVRTKXtpZih0aGlzLnppcDY0PSEwLChlPXRoaXMucmVhZGVyLmxhc3RJbmRleE9mU2lnbmF0dXJlKHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfTE9DQVRPUikpPDApdGhyb3cgbmV3IEVycm9yKFwiQ29ycnVwdGVkIHppcDogY2FuJ3QgZmluZCB0aGUgWklQNjQgZW5kIG9mIGNlbnRyYWwgZGlyZWN0b3J5IGxvY2F0b3JcIik7aWYodGhpcy5yZWFkZXIuc2V0SW5kZXgoZSksdGhpcy5jaGVja1NpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0xPQ0FUT1IpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWxMb2NhdG9yKCksIXRoaXMuaXNTaWduYXR1cmUodGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyLHMuWklQNjRfQ0VOVFJBTF9ESVJFQ1RPUllfRU5EKSYmKHRoaXMucmVsYXRpdmVPZmZzZXRFbmRPZlppcDY0Q2VudHJhbERpcj10aGlzLnJlYWRlci5sYXN0SW5kZXhPZlNpZ25hdHVyZShzLlpJUDY0X0NFTlRSQUxfRElSRUNUT1JZX0VORCksdGhpcy5yZWxhdGl2ZU9mZnNldEVuZE9mWmlwNjRDZW50cmFsRGlyPDApKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IGNhbid0IGZpbmQgdGhlIFpJUDY0IGVuZCBvZiBjZW50cmFsIGRpcmVjdG9yeVwiKTt0aGlzLnJlYWRlci5zZXRJbmRleCh0aGlzLnJlbGF0aXZlT2Zmc2V0RW5kT2ZaaXA2NENlbnRyYWxEaXIpLHRoaXMuY2hlY2tTaWduYXR1cmUocy5aSVA2NF9DRU5UUkFMX0RJUkVDVE9SWV9FTkQpLHRoaXMucmVhZEJsb2NrWmlwNjRFbmRPZkNlbnRyYWwoKX12YXIgcj10aGlzLmNlbnRyYWxEaXJPZmZzZXQrdGhpcy5jZW50cmFsRGlyU2l6ZTt0aGlzLnppcDY0JiYocis9MjAscis9MTIrdGhpcy56aXA2NEVuZE9mQ2VudHJhbFNpemUpO3ZhciBuPXQtcjtpZigwPG4pdGhpcy5pc1NpZ25hdHVyZSh0LHMuQ0VOVFJBTF9GSUxFX0hFQURFUil8fCh0aGlzLnJlYWRlci56ZXJvPW4pO2Vsc2UgaWYobjwwKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXA6IG1pc3NpbmcgXCIrTWF0aC5hYnMobikrXCIgYnl0ZXMuXCIpfSxwcmVwYXJlUmVhZGVyOmZ1bmN0aW9uKGUpe3RoaXMucmVhZGVyPW4oZSl9LGxvYWQ6ZnVuY3Rpb24oZSl7dGhpcy5wcmVwYXJlUmVhZGVyKGUpLHRoaXMucmVhZEVuZE9mQ2VudHJhbCgpLHRoaXMucmVhZENlbnRyYWxEaXIoKSx0aGlzLnJlYWRMb2NhbEZpbGVzKCl9fSx0LmV4cG9ydHM9aH0se1wiLi9yZWFkZXIvcmVhZGVyRm9yXCI6MjIsXCIuL3NpZ25hdHVyZVwiOjIzLFwiLi9zdXBwb3J0XCI6MzAsXCIuL3V0aWxzXCI6MzIsXCIuL3ppcEVudHJ5XCI6MzR9XSwzNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL3JlYWRlci9yZWFkZXJGb3JcIikscz1lKFwiLi91dGlsc1wiKSxpPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksYT1lKFwiLi9jcmMzMlwiKSxvPWUoXCIuL3V0ZjhcIiksaD1lKFwiLi9jb21wcmVzc2lvbnNcIiksdT1lKFwiLi9zdXBwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0KXt0aGlzLm9wdGlvbnM9ZSx0aGlzLmxvYWRPcHRpb25zPXR9bC5wcm90b3R5cGU9e2lzRW5jcnlwdGVkOmZ1bmN0aW9uKCl7cmV0dXJuIDE9PSgxJnRoaXMuYml0RmxhZyl9LHVzZVVURjg6ZnVuY3Rpb24oKXtyZXR1cm4gMjA0OD09KDIwNDgmdGhpcy5iaXRGbGFnKX0scmVhZExvY2FsUGFydDpmdW5jdGlvbihlKXt2YXIgdCxyO2lmKGUuc2tpcCgyMiksdGhpcy5maWxlTmFtZUxlbmd0aD1lLnJlYWRJbnQoMikscj1lLnJlYWRJbnQoMiksdGhpcy5maWxlTmFtZT1lLnJlYWREYXRhKHRoaXMuZmlsZU5hbWVMZW5ndGgpLGUuc2tpcChyKSwtMT09PXRoaXMuY29tcHJlc3NlZFNpemV8fC0xPT09dGhpcy51bmNvbXByZXNzZWRTaXplKXRocm93IG5ldyBFcnJvcihcIkJ1ZyBvciBjb3JydXB0ZWQgemlwIDogZGlkbid0IGdldCBlbm91Z2ggaW5mb3JtYXRpb24gZnJvbSB0aGUgY2VudHJhbCBkaXJlY3RvcnkgKGNvbXByZXNzZWRTaXplID09PSAtMSB8fCB1bmNvbXByZXNzZWRTaXplID09PSAtMSlcIik7aWYobnVsbD09PSh0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCBpbiBoKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoLHQpJiZoW3RdLm1hZ2ljPT09ZSlyZXR1cm4gaFt0XTtyZXR1cm4gbnVsbH0odGhpcy5jb21wcmVzc2lvbk1ldGhvZCkpKXRocm93IG5ldyBFcnJvcihcIkNvcnJ1cHRlZCB6aXAgOiBjb21wcmVzc2lvbiBcIitzLnByZXR0eSh0aGlzLmNvbXByZXNzaW9uTWV0aG9kKStcIiB1bmtub3duIChpbm5lciBmaWxlIDogXCIrcy50cmFuc2Zvcm1UbyhcInN0cmluZ1wiLHRoaXMuZmlsZU5hbWUpK1wiKVwiKTt0aGlzLmRlY29tcHJlc3NlZD1uZXcgaSh0aGlzLmNvbXByZXNzZWRTaXplLHRoaXMudW5jb21wcmVzc2VkU2l6ZSx0aGlzLmNyYzMyLHQsZS5yZWFkRGF0YSh0aGlzLmNvbXByZXNzZWRTaXplKSl9LHJlYWRDZW50cmFsUGFydDpmdW5jdGlvbihlKXt0aGlzLnZlcnNpb25NYWRlQnk9ZS5yZWFkSW50KDIpLGUuc2tpcCgyKSx0aGlzLmJpdEZsYWc9ZS5yZWFkSW50KDIpLHRoaXMuY29tcHJlc3Npb25NZXRob2Q9ZS5yZWFkU3RyaW5nKDIpLHRoaXMuZGF0ZT1lLnJlYWREYXRlKCksdGhpcy5jcmMzMj1lLnJlYWRJbnQoNCksdGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoNCksdGhpcy51bmNvbXByZXNzZWRTaXplPWUucmVhZEludCg0KTt2YXIgdD1lLnJlYWRJbnQoMik7aWYodGhpcy5leHRyYUZpZWxkc0xlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5maWxlQ29tbWVudExlbmd0aD1lLnJlYWRJbnQoMiksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9ZS5yZWFkSW50KDIpLHRoaXMuaW50ZXJuYWxGaWxlQXR0cmlidXRlcz1lLnJlYWRJbnQoMiksdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPWUucmVhZEludCg0KSx0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg0KSx0aGlzLmlzRW5jcnlwdGVkKCkpdGhyb3cgbmV3IEVycm9yKFwiRW5jcnlwdGVkIHppcCBhcmUgbm90IHN1cHBvcnRlZFwiKTtlLnNraXAodCksdGhpcy5yZWFkRXh0cmFGaWVsZHMoZSksdGhpcy5wYXJzZVpJUDY0RXh0cmFGaWVsZChlKSx0aGlzLmZpbGVDb21tZW50PWUucmVhZERhdGEodGhpcy5maWxlQ29tbWVudExlbmd0aCl9LHByb2Nlc3NBdHRyaWJ1dGVzOmZ1bmN0aW9uKCl7dGhpcy51bml4UGVybWlzc2lvbnM9bnVsbCx0aGlzLmRvc1Blcm1pc3Npb25zPW51bGw7dmFyIGU9dGhpcy52ZXJzaW9uTWFkZUJ5Pj44O3RoaXMuZGlyPSEhKDE2JnRoaXMuZXh0ZXJuYWxGaWxlQXR0cmlidXRlcyksMD09ZSYmKHRoaXMuZG9zUGVybWlzc2lvbnM9NjMmdGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzKSwzPT1lJiYodGhpcy51bml4UGVybWlzc2lvbnM9dGhpcy5leHRlcm5hbEZpbGVBdHRyaWJ1dGVzPj4xNiY2NTUzNSksdGhpcy5kaXJ8fFwiL1wiIT09dGhpcy5maWxlTmFtZVN0ci5zbGljZSgtMSl8fCh0aGlzLmRpcj0hMCl9LHBhcnNlWklQNjRFeHRyYUZpZWxkOmZ1bmN0aW9uKCl7aWYodGhpcy5leHRyYUZpZWxkc1sxXSl7dmFyIGU9bih0aGlzLmV4dHJhRmllbGRzWzFdLnZhbHVlKTt0aGlzLnVuY29tcHJlc3NlZFNpemU9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLnVuY29tcHJlc3NlZFNpemU9ZS5yZWFkSW50KDgpKSx0aGlzLmNvbXByZXNzZWRTaXplPT09cy5NQVhfVkFMVUVfMzJCSVRTJiYodGhpcy5jb21wcmVzc2VkU2l6ZT1lLnJlYWRJbnQoOCkpLHRoaXMubG9jYWxIZWFkZXJPZmZzZXQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmxvY2FsSGVhZGVyT2Zmc2V0PWUucmVhZEludCg4KSksdGhpcy5kaXNrTnVtYmVyU3RhcnQ9PT1zLk1BWF9WQUxVRV8zMkJJVFMmJih0aGlzLmRpc2tOdW1iZXJTdGFydD1lLnJlYWRJbnQoNCkpfX0scmVhZEV4dHJhRmllbGRzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpPWUuaW5kZXgrdGhpcy5leHRyYUZpZWxkc0xlbmd0aDtmb3IodGhpcy5leHRyYUZpZWxkc3x8KHRoaXMuZXh0cmFGaWVsZHM9e30pO2UuaW5kZXgrNDxpOyl0PWUucmVhZEludCgyKSxyPWUucmVhZEludCgyKSxuPWUucmVhZERhdGEociksdGhpcy5leHRyYUZpZWxkc1t0XT17aWQ6dCxsZW5ndGg6cix2YWx1ZTpufTtlLnNldEluZGV4KGkpfSxoYW5kbGVVVEY4OmZ1bmN0aW9uKCl7dmFyIGU9dS51aW50OGFycmF5P1widWludDhhcnJheVwiOlwiYXJyYXlcIjtpZih0aGlzLnVzZVVURjgoKSl0aGlzLmZpbGVOYW1lU3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVOYW1lKSx0aGlzLmZpbGVDb21tZW50U3RyPW8udXRmOGRlY29kZSh0aGlzLmZpbGVDb21tZW50KTtlbHNle3ZhciB0PXRoaXMuZmluZEV4dHJhRmllbGRVbmljb2RlUGF0aCgpO2lmKG51bGwhPT10KXRoaXMuZmlsZU5hbWVTdHI9dDtlbHNle3ZhciByPXMudHJhbnNmb3JtVG8oZSx0aGlzLmZpbGVOYW1lKTt0aGlzLmZpbGVOYW1lU3RyPXRoaXMubG9hZE9wdGlvbnMuZGVjb2RlRmlsZU5hbWUocil9dmFyIG49dGhpcy5maW5kRXh0cmFGaWVsZFVuaWNvZGVDb21tZW50KCk7aWYobnVsbCE9PW4pdGhpcy5maWxlQ29tbWVudFN0cj1uO2Vsc2V7dmFyIGk9cy50cmFuc2Zvcm1UbyhlLHRoaXMuZmlsZUNvbW1lbnQpO3RoaXMuZmlsZUNvbW1lbnRTdHI9dGhpcy5sb2FkT3B0aW9ucy5kZWNvZGVGaWxlTmFtZShpKX19fSxmaW5kRXh0cmFGaWVsZFVuaWNvZGVQYXRoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5leHRyYUZpZWxkc1syODc4OV07aWYoZSl7dmFyIHQ9bihlLnZhbHVlKTtyZXR1cm4gMSE9PXQucmVhZEludCgxKT9udWxsOmEodGhpcy5maWxlTmFtZSkhPT10LnJlYWRJbnQoNCk/bnVsbDpvLnV0ZjhkZWNvZGUodC5yZWFkRGF0YShlLmxlbmd0aC01KSl9cmV0dXJuIG51bGx9LGZpbmRFeHRyYUZpZWxkVW5pY29kZUNvbW1lbnQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmV4dHJhRmllbGRzWzI1NDYxXTtpZihlKXt2YXIgdD1uKGUudmFsdWUpO3JldHVybiAxIT09dC5yZWFkSW50KDEpP251bGw6YSh0aGlzLmZpbGVDb21tZW50KSE9PXQucmVhZEludCg0KT9udWxsOm8udXRmOGRlY29kZSh0LnJlYWREYXRhKGUubGVuZ3RoLTUpKX1yZXR1cm4gbnVsbH19LHQuZXhwb3J0cz1sfSx7XCIuL2NvbXByZXNzZWRPYmplY3RcIjoyLFwiLi9jb21wcmVzc2lvbnNcIjozLFwiLi9jcmMzMlwiOjQsXCIuL3JlYWRlci9yZWFkZXJGb3JcIjoyMixcIi4vc3VwcG9ydFwiOjMwLFwiLi91dGY4XCI6MzEsXCIuL3V0aWxzXCI6MzJ9XSwzNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LHIpe3RoaXMubmFtZT1lLHRoaXMuZGlyPXIuZGlyLHRoaXMuZGF0ZT1yLmRhdGUsdGhpcy5jb21tZW50PXIuY29tbWVudCx0aGlzLnVuaXhQZXJtaXNzaW9ucz1yLnVuaXhQZXJtaXNzaW9ucyx0aGlzLmRvc1Blcm1pc3Npb25zPXIuZG9zUGVybWlzc2lvbnMsdGhpcy5fZGF0YT10LHRoaXMuX2RhdGFCaW5hcnk9ci5iaW5hcnksdGhpcy5vcHRpb25zPXtjb21wcmVzc2lvbjpyLmNvbXByZXNzaW9uLGNvbXByZXNzaW9uT3B0aW9uczpyLmNvbXByZXNzaW9uT3B0aW9uc319dmFyIHM9ZShcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiKSxpPWUoXCIuL3N0cmVhbS9EYXRhV29ya2VyXCIpLGE9ZShcIi4vdXRmOFwiKSxvPWUoXCIuL2NvbXByZXNzZWRPYmplY3RcIiksaD1lKFwiLi9zdHJlYW0vR2VuZXJpY1dvcmtlclwiKTtuLnByb3RvdHlwZT17aW50ZXJuYWxTdHJlYW06ZnVuY3Rpb24oZSl7dmFyIHQ9bnVsbCxyPVwic3RyaW5nXCI7dHJ5e2lmKCFlKXRocm93IG5ldyBFcnJvcihcIk5vIG91dHB1dCB0eXBlIHNwZWNpZmllZC5cIik7dmFyIG49XCJzdHJpbmdcIj09PShyPWUudG9Mb3dlckNhc2UoKSl8fFwidGV4dFwiPT09cjtcImJpbmFyeXN0cmluZ1wiIT09ciYmXCJ0ZXh0XCIhPT1yfHwocj1cInN0cmluZ1wiKSx0PXRoaXMuX2RlY29tcHJlc3NXb3JrZXIoKTt2YXIgaT0hdGhpcy5fZGF0YUJpbmFyeTtpJiYhbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhFbmNvZGVXb3JrZXIpKSwhaSYmbiYmKHQ9dC5waXBlKG5ldyBhLlV0ZjhEZWNvZGVXb3JrZXIpKX1jYXRjaChlKXsodD1uZXcgaChcImVycm9yXCIpKS5lcnJvcihlKX1yZXR1cm4gbmV3IHModCxyLFwiXCIpfSxhc3luYzpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmludGVybmFsU3RyZWFtKGUpLmFjY3VtdWxhdGUodCl9LG5vZGVTdHJlYW06ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5pbnRlcm5hbFN0cmVhbShlfHxcIm5vZGVidWZmZXJcIikudG9Ob2RlanNTdHJlYW0odCl9LF9jb21wcmVzc1dvcmtlcjpmdW5jdGlvbihlLHQpe2lmKHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvJiZ0aGlzLl9kYXRhLmNvbXByZXNzaW9uLm1hZ2ljPT09ZS5tYWdpYylyZXR1cm4gdGhpcy5fZGF0YS5nZXRDb21wcmVzc2VkV29ya2VyKCk7dmFyIHI9dGhpcy5fZGVjb21wcmVzc1dvcmtlcigpO3JldHVybiB0aGlzLl9kYXRhQmluYXJ5fHwocj1yLnBpcGUobmV3IGEuVXRmOEVuY29kZVdvcmtlcikpLG8uY3JlYXRlV29ya2VyRnJvbShyLGUsdCl9LF9kZWNvbXByZXNzV29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGEgaW5zdGFuY2VvZiBvP3RoaXMuX2RhdGEuZ2V0Q29udGVudFdvcmtlcigpOnRoaXMuX2RhdGEgaW5zdGFuY2VvZiBoP3RoaXMuX2RhdGE6bmV3IGkodGhpcy5fZGF0YSl9fTtmb3IodmFyIHU9W1wiYXNUZXh0XCIsXCJhc0JpbmFyeVwiLFwiYXNOb2RlQnVmZmVyXCIsXCJhc1VpbnQ4QXJyYXlcIixcImFzQXJyYXlCdWZmZXJcIl0sbD1mdW5jdGlvbigpe3Rocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIHJlbW92ZWQgaW4gSlNaaXAgMy4wLCBwbGVhc2UgY2hlY2sgdGhlIHVwZ3JhZGUgZ3VpZGUuXCIpfSxmPTA7Zjx1Lmxlbmd0aDtmKyspbi5wcm90b3R5cGVbdVtmXV09bDt0LmV4cG9ydHM9bn0se1wiLi9jb21wcmVzc2VkT2JqZWN0XCI6MixcIi4vc3RyZWFtL0RhdGFXb3JrZXJcIjoyNyxcIi4vc3RyZWFtL0dlbmVyaWNXb3JrZXJcIjoyOCxcIi4vc3RyZWFtL1N0cmVhbUhlbHBlclwiOjI5LFwiLi91dGY4XCI6MzF9XSwzNjpbZnVuY3Rpb24oZSxsLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgcixuLGU9dC5NdXRhdGlvbk9ic2VydmVyfHx0LldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7aWYoZSl7dmFyIGk9MCxzPW5ldyBlKHUpLGE9dC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtzLm9ic2VydmUoYSx7Y2hhcmFjdGVyRGF0YTohMH0pLHI9ZnVuY3Rpb24oKXthLmRhdGE9aT0rK2klMn19ZWxzZSBpZih0LnNldEltbWVkaWF0ZXx8dm9pZCAwPT09dC5NZXNzYWdlQ2hhbm5lbClyPVwiZG9jdW1lbnRcImluIHQmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB0LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oKXt2YXIgZT10LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ZS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt1KCksZS5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksZT1udWxsfSx0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKX06ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KHUsMCl9O2Vsc2V7dmFyIG89bmV3IHQuTWVzc2FnZUNoYW5uZWw7by5wb3J0MS5vbm1lc3NhZ2U9dSxyPWZ1bmN0aW9uKCl7by5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19dmFyIGg9W107ZnVuY3Rpb24gdSgpe3ZhciBlLHQ7bj0hMDtmb3IodmFyIHI9aC5sZW5ndGg7cjspe2Zvcih0PWgsaD1bXSxlPS0xOysrZTxyOyl0W2VdKCk7cj1oLmxlbmd0aH1uPSExfWwuZXhwb3J0cz1mdW5jdGlvbihlKXsxIT09aC5wdXNoKGUpfHxufHxyKCl9fSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV0sMzc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiaW1tZWRpYXRlXCIpO2Z1bmN0aW9uIHUoKXt9dmFyIGw9e30scz1bXCJSRUpFQ1RFRFwiXSxhPVtcIkZVTEZJTExFRFwiXSxuPVtcIlBFTkRJTkdcIl07ZnVuY3Rpb24gbyhlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyZXNvbHZlciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7dGhpcy5zdGF0ZT1uLHRoaXMucXVldWU9W10sdGhpcy5vdXRjb21lPXZvaWQgMCxlIT09dSYmZCh0aGlzLGUpfWZ1bmN0aW9uIGgoZSx0LHIpe3RoaXMucHJvbWlzZT1lLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJih0aGlzLm9uRnVsZmlsbGVkPXQsdGhpcy5jYWxsRnVsZmlsbGVkPXRoaXMub3RoZXJDYWxsRnVsZmlsbGVkKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYodGhpcy5vblJlamVjdGVkPXIsdGhpcy5jYWxsUmVqZWN0ZWQ9dGhpcy5vdGhlckNhbGxSZWplY3RlZCl9ZnVuY3Rpb24gZih0LHIsbil7aShmdW5jdGlvbigpe3ZhciBlO3RyeXtlPXIobil9Y2F0Y2goZSl7cmV0dXJuIGwucmVqZWN0KHQsZSl9ZT09PXQ/bC5yZWplY3QodCxuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlc29sdmUgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKSk6bC5yZXNvbHZlKHQsZSl9KX1mdW5jdGlvbiBjKGUpe3ZhciB0PWUmJmUudGhlbjtpZihlJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBmdW5jdGlvbigpe3QuYXBwbHkoZSxhcmd1bWVudHMpfX1mdW5jdGlvbiBkKHQsZSl7dmFyIHI9ITE7ZnVuY3Rpb24gbihlKXtyfHwocj0hMCxsLnJlamVjdCh0LGUpKX1mdW5jdGlvbiBpKGUpe3J8fChyPSEwLGwucmVzb2x2ZSh0LGUpKX12YXIgcz1wKGZ1bmN0aW9uKCl7ZShpLG4pfSk7XCJlcnJvclwiPT09cy5zdGF0dXMmJm4ocy52YWx1ZSl9ZnVuY3Rpb24gcChlLHQpe3ZhciByPXt9O3RyeXtyLnZhbHVlPWUodCksci5zdGF0dXM9XCJzdWNjZXNzXCJ9Y2F0Y2goZSl7ci5zdGF0dXM9XCJlcnJvclwiLHIudmFsdWU9ZX1yZXR1cm4gcn0odC5leHBvcnRzPW8pLnByb3RvdHlwZS5maW5hbGx5PWZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpcmV0dXJuIHRoaXM7dmFyIHI9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiByLnJlc29sdmUodCgpKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGV9KX0sZnVuY3Rpb24oZSl7cmV0dXJuIHIucmVzb2x2ZSh0KCkpLnRoZW4oZnVuY3Rpb24oKXt0aHJvdyBlfSl9KX0sby5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbihudWxsLGUpfSxvLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmdGhpcy5zdGF0ZT09PWF8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJnRoaXMuc3RhdGU9PT1zKXJldHVybiB0aGlzO3ZhciByPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHUpO3RoaXMuc3RhdGUhPT1uP2Yocix0aGlzLnN0YXRlPT09YT9lOnQsdGhpcy5vdXRjb21lKTp0aGlzLnF1ZXVlLnB1c2gobmV3IGgocixlLHQpKTtyZXR1cm4gcn0saC5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZD1mdW5jdGlvbihlKXtsLnJlc29sdmUodGhpcy5wcm9taXNlLGUpfSxoLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vbkZ1bGZpbGxlZCxlKX0saC5wcm90b3R5cGUuY2FsbFJlamVjdGVkPWZ1bmN0aW9uKGUpe2wucmVqZWN0KHRoaXMucHJvbWlzZSxlKX0saC5wcm90b3R5cGUub3RoZXJDYWxsUmVqZWN0ZWQ9ZnVuY3Rpb24oZSl7Zih0aGlzLnByb21pc2UsdGhpcy5vblJlamVjdGVkLGUpfSxsLnJlc29sdmU9ZnVuY3Rpb24oZSx0KXt2YXIgcj1wKGMsdCk7aWYoXCJlcnJvclwiPT09ci5zdGF0dXMpcmV0dXJuIGwucmVqZWN0KGUsci52YWx1ZSk7dmFyIG49ci52YWx1ZTtpZihuKWQoZSxuKTtlbHNle2Uuc3RhdGU9YSxlLm91dGNvbWU9dDtmb3IodmFyIGk9LTEscz1lLnF1ZXVlLmxlbmd0aDsrK2k8czspZS5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHQpfXJldHVybiBlfSxsLnJlamVjdD1mdW5jdGlvbihlLHQpe2Uuc3RhdGU9cyxlLm91dGNvbWU9dDtmb3IodmFyIHI9LTEsbj1lLnF1ZXVlLmxlbmd0aDsrK3I8bjspZS5xdWV1ZVtyXS5jYWxsUmVqZWN0ZWQodCk7cmV0dXJuIGV9LG8ucmVzb2x2ZT1mdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgdGhpcylyZXR1cm4gZTtyZXR1cm4gbC5yZXNvbHZlKG5ldyB0aGlzKHUpLGUpfSxvLnJlamVjdD1mdW5jdGlvbihlKXt2YXIgdD1uZXcgdGhpcyh1KTtyZXR1cm4gbC5yZWplY3QodCxlKX0sby5hbGw9ZnVuY3Rpb24oZSl7dmFyIHI9dGhpcztpZihcIltvYmplY3QgQXJyYXldXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoXCJtdXN0IGJlIGFuIGFycmF5XCIpKTt2YXIgbj1lLmxlbmd0aCxpPSExO2lmKCFuKXJldHVybiB0aGlzLnJlc29sdmUoW10pO3ZhciBzPW5ldyBBcnJheShuKSxhPTAsdD0tMSxvPW5ldyB0aGlzKHUpO2Zvcig7Kyt0PG47KWgoZVt0XSx0KTtyZXR1cm4gbztmdW5jdGlvbiBoKGUsdCl7ci5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24oZSl7c1t0XT1lLCsrYSE9PW58fGl8fChpPSEwLGwucmVzb2x2ZShvLHMpKX0sZnVuY3Rpb24oZSl7aXx8KGk9ITAsbC5yZWplY3QobyxlKSl9KX19LG8ucmFjZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO2lmKFwiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKSlyZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcihcIm11c3QgYmUgYW4gYXJyYXlcIikpO3ZhciByPWUubGVuZ3RoLG49ITE7aWYoIXIpcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7dmFyIGk9LTEscz1uZXcgdGhpcyh1KTtmb3IoOysraTxyOylhPWVbaV0sdC5yZXNvbHZlKGEpLnRoZW4oZnVuY3Rpb24oZSl7bnx8KG49ITAsbC5yZXNvbHZlKHMsZSkpfSxmdW5jdGlvbihlKXtufHwobj0hMCxsLnJlamVjdChzLGUpKX0pO3ZhciBhO3JldHVybiBzfX0se2ltbWVkaWF0ZTozNn1dLDM4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49e307KDAsZShcIi4vbGliL3V0aWxzL2NvbW1vblwiKS5hc3NpZ24pKG4sZShcIi4vbGliL2RlZmxhdGVcIiksZShcIi4vbGliL2luZmxhdGVcIiksZShcIi4vbGliL3psaWIvY29uc3RhbnRzXCIpKSx0LmV4cG9ydHM9bn0se1wiLi9saWIvZGVmbGF0ZVwiOjM5LFwiLi9saWIvaW5mbGF0ZVwiOjQwLFwiLi9saWIvdXRpbHMvY29tbW9uXCI6NDEsXCIuL2xpYi96bGliL2NvbnN0YW50c1wiOjQ0fV0sMzk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgYT1lKFwiLi96bGliL2RlZmxhdGVcIiksbz1lKFwiLi91dGlscy9jb21tb25cIiksaD1lKFwiLi91dGlscy9zdHJpbmdzXCIpLGk9ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxzPWUoXCIuL3psaWIvenN0cmVhbVwiKSx1PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsbD0wLGY9LTEsYz0wLGQ9ODtmdW5jdGlvbiBwKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIHApKXJldHVybiBuZXcgcChlKTt0aGlzLm9wdGlvbnM9by5hc3NpZ24oe2xldmVsOmYsbWV0aG9kOmQsY2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MTUsbWVtTGV2ZWw6OCxzdHJhdGVneTpjLHRvOlwiXCJ9LGV8fHt9KTt2YXIgdD10aGlzLm9wdGlvbnM7dC5yYXcmJjA8dC53aW5kb3dCaXRzP3Qud2luZG93Qml0cz0tdC53aW5kb3dCaXRzOnQuZ3ppcCYmMDx0LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cys9MTYpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgcyx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9YS5kZWZsYXRlSW5pdDIodGhpcy5zdHJtLHQubGV2ZWwsdC5tZXRob2QsdC53aW5kb3dCaXRzLHQubWVtTGV2ZWwsdC5zdHJhdGVneSk7aWYociE9PWwpdGhyb3cgbmV3IEVycm9yKGlbcl0pO2lmKHQuaGVhZGVyJiZhLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLHQuaGVhZGVyKSx0LmRpY3Rpb25hcnkpe3ZhciBuO2lmKG49XCJzdHJpbmdcIj09dHlwZW9mIHQuZGljdGlvbmFyeT9oLnN0cmluZzJidWYodC5kaWN0aW9uYXJ5KTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT11LmNhbGwodC5kaWN0aW9uYXJ5KT9uZXcgVWludDhBcnJheSh0LmRpY3Rpb25hcnkpOnQuZGljdGlvbmFyeSwocj1hLmRlZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSxuKSkhPT1sKXRocm93IG5ldyBFcnJvcihpW3JdKTt0aGlzLl9kaWN0X3NldD0hMH19ZnVuY3Rpb24gbihlLHQpe3ZhciByPW5ldyBwKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8aVtyLmVycl07cmV0dXJuIHIucmVzdWx0fXAucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGk9dGhpcy5zdHJtLHM9dGhpcy5vcHRpb25zLmNodW5rU2l6ZTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD80OjAsXCJzdHJpbmdcIj09dHlwZW9mIGU/aS5pbnB1dD1oLnN0cmluZzJidWYoZSk6XCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiPT09dS5jYWxsKGUpP2kuaW5wdXQ9bmV3IFVpbnQ4QXJyYXkoZSk6aS5pbnB1dD1lLGkubmV4dF9pbj0wLGkuYXZhaWxfaW49aS5pbnB1dC5sZW5ndGg7ZG97aWYoMD09PWkuYXZhaWxfb3V0JiYoaS5vdXRwdXQ9bmV3IG8uQnVmOChzKSxpLm5leHRfb3V0PTAsaS5hdmFpbF9vdXQ9cyksMSE9PShyPWEuZGVmbGF0ZShpLG4pKSYmciE9PWwpcmV0dXJuIHRoaXMub25FbmQociksISh0aGlzLmVuZGVkPSEwKTswIT09aS5hdmFpbF9vdXQmJigwIT09aS5hdmFpbF9pbnx8NCE9PW4mJjIhPT1uKXx8KFwic3RyaW5nXCI9PT10aGlzLm9wdGlvbnMudG8/dGhpcy5vbkRhdGEoaC5idWYyYmluc3RyaW5nKG8uc2hyaW5rQnVmKGkub3V0cHV0LGkubmV4dF9vdXQpKSk6dGhpcy5vbkRhdGEoby5zaHJpbmtCdWYoaS5vdXRwdXQsaS5uZXh0X291dCkpKX13aGlsZSgoMDxpLmF2YWlsX2lufHwwPT09aS5hdmFpbF9vdXQpJiYxIT09cik7cmV0dXJuIDQ9PT1uPyhyPWEuZGVmbGF0ZUVuZCh0aGlzLnN0cm0pLHRoaXMub25FbmQociksdGhpcy5lbmRlZD0hMCxyPT09bCk6MiE9PW58fCh0aGlzLm9uRW5kKGwpLCEoaS5hdmFpbF9vdXQ9MCkpfSxwLnByb3RvdHlwZS5vbkRhdGE9ZnVuY3Rpb24oZSl7dGhpcy5jaHVua3MucHVzaChlKX0scC5wcm90b3R5cGUub25FbmQ9ZnVuY3Rpb24oZSl7ZT09PWwmJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9by5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkRlZmxhdGU9cCxyLmRlZmxhdGU9bixyLmRlZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG4oZSx0KX0sci5nemlwPWZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQ9dHx8e30pLmd6aXA9ITAsbihlLHQpfX0se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2RlZmxhdGVcIjo0NixcIi4vemxpYi9tZXNzYWdlc1wiOjUxLFwiLi96bGliL3pzdHJlYW1cIjo1M31dLDQwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9ZShcIi4vemxpYi9pbmZsYXRlXCIpLGQ9ZShcIi4vdXRpbHMvY29tbW9uXCIpLHA9ZShcIi4vdXRpbHMvc3RyaW5nc1wiKSxtPWUoXCIuL3psaWIvY29uc3RhbnRzXCIpLG49ZShcIi4vemxpYi9tZXNzYWdlc1wiKSxpPWUoXCIuL3psaWIvenN0cmVhbVwiKSxzPWUoXCIuL3psaWIvZ3poZWFkZXJcIiksXz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO2Z1bmN0aW9uIGEoZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgYSkpcmV0dXJuIG5ldyBhKGUpO3RoaXMub3B0aW9ucz1kLmFzc2lnbih7Y2h1bmtTaXplOjE2Mzg0LHdpbmRvd0JpdHM6MCx0bzpcIlwifSxlfHx7fSk7dmFyIHQ9dGhpcy5vcHRpb25zO3QucmF3JiYwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNiYmKHQud2luZG93Qml0cz0tdC53aW5kb3dCaXRzLDA9PT10LndpbmRvd0JpdHMmJih0LndpbmRvd0JpdHM9LTE1KSksISgwPD10LndpbmRvd0JpdHMmJnQud2luZG93Qml0czwxNil8fGUmJmUud2luZG93Qml0c3x8KHQud2luZG93Qml0cys9MzIpLDE1PHQud2luZG93Qml0cyYmdC53aW5kb3dCaXRzPDQ4JiYwPT0oMTUmdC53aW5kb3dCaXRzKSYmKHQud2luZG93Qml0c3w9MTUpLHRoaXMuZXJyPTAsdGhpcy5tc2c9XCJcIix0aGlzLmVuZGVkPSExLHRoaXMuY2h1bmtzPVtdLHRoaXMuc3RybT1uZXcgaSx0aGlzLnN0cm0uYXZhaWxfb3V0PTA7dmFyIHI9Yy5pbmZsYXRlSW5pdDIodGhpcy5zdHJtLHQud2luZG93Qml0cyk7aWYociE9PW0uWl9PSyl0aHJvdyBuZXcgRXJyb3IobltyXSk7dGhpcy5oZWFkZXI9bmV3IHMsYy5pbmZsYXRlR2V0SGVhZGVyKHRoaXMuc3RybSx0aGlzLmhlYWRlcil9ZnVuY3Rpb24gbyhlLHQpe3ZhciByPW5ldyBhKHQpO2lmKHIucHVzaChlLCEwKSxyLmVycil0aHJvdyByLm1zZ3x8bltyLmVycl07cmV0dXJuIHIucmVzdWx0fWEucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saD10aGlzLnN0cm0sdT10aGlzLm9wdGlvbnMuY2h1bmtTaXplLGw9dGhpcy5vcHRpb25zLmRpY3Rpb25hcnksZj0hMTtpZih0aGlzLmVuZGVkKXJldHVybiExO249dD09PX5+dD90OiEwPT09dD9tLlpfRklOSVNIOm0uWl9OT19GTFVTSCxcInN0cmluZ1wiPT10eXBlb2YgZT9oLmlucHV0PXAuYmluc3RyaW5nMmJ1ZihlKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwoZSk/aC5pbnB1dD1uZXcgVWludDhBcnJheShlKTpoLmlucHV0PWUsaC5uZXh0X2luPTAsaC5hdmFpbF9pbj1oLmlucHV0Lmxlbmd0aDtkb3tpZigwPT09aC5hdmFpbF9vdXQmJihoLm91dHB1dD1uZXcgZC5CdWY4KHUpLGgubmV4dF9vdXQ9MCxoLmF2YWlsX291dD11KSwocj1jLmluZmxhdGUoaCxtLlpfTk9fRkxVU0gpKT09PW0uWl9ORUVEX0RJQ1QmJmwmJihvPVwic3RyaW5nXCI9PXR5cGVvZiBsP3Auc3RyaW5nMmJ1ZihsKTpcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI9PT1fLmNhbGwobCk/bmV3IFVpbnQ4QXJyYXkobCk6bCxyPWMuaW5mbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLG8pKSxyPT09bS5aX0JVRl9FUlJPUiYmITA9PT1mJiYocj1tLlpfT0ssZj0hMSksciE9PW0uWl9TVFJFQU1fRU5EJiZyIT09bS5aX09LKXJldHVybiB0aGlzLm9uRW5kKHIpLCEodGhpcy5lbmRlZD0hMCk7aC5uZXh0X291dCYmKDAhPT1oLmF2YWlsX291dCYmciE9PW0uWl9TVFJFQU1fRU5EJiYoMCE9PWguYXZhaWxfaW58fG4hPT1tLlpfRklOSVNIJiZuIT09bS5aX1NZTkNfRkxVU0gpfHwoXCJzdHJpbmdcIj09PXRoaXMub3B0aW9ucy50bz8oaT1wLnV0Zjhib3JkZXIoaC5vdXRwdXQsaC5uZXh0X291dCkscz1oLm5leHRfb3V0LWksYT1wLmJ1ZjJzdHJpbmcoaC5vdXRwdXQsaSksaC5uZXh0X291dD1zLGguYXZhaWxfb3V0PXUtcyxzJiZkLmFycmF5U2V0KGgub3V0cHV0LGgub3V0cHV0LGkscywwKSx0aGlzLm9uRGF0YShhKSk6dGhpcy5vbkRhdGEoZC5zaHJpbmtCdWYoaC5vdXRwdXQsaC5uZXh0X291dCkpKSksMD09PWguYXZhaWxfaW4mJjA9PT1oLmF2YWlsX291dCYmKGY9ITApfXdoaWxlKCgwPGguYXZhaWxfaW58fDA9PT1oLmF2YWlsX291dCkmJnIhPT1tLlpfU1RSRUFNX0VORCk7cmV0dXJuIHI9PT1tLlpfU1RSRUFNX0VORCYmKG49bS5aX0ZJTklTSCksbj09PW0uWl9GSU5JU0g/KHI9Yy5pbmZsYXRlRW5kKHRoaXMuc3RybSksdGhpcy5vbkVuZChyKSx0aGlzLmVuZGVkPSEwLHI9PT1tLlpfT0spOm4hPT1tLlpfU1lOQ19GTFVTSHx8KHRoaXMub25FbmQobS5aX09LKSwhKGguYXZhaWxfb3V0PTApKX0sYS5wcm90b3R5cGUub25EYXRhPWZ1bmN0aW9uKGUpe3RoaXMuY2h1bmtzLnB1c2goZSl9LGEucHJvdG90eXBlLm9uRW5kPWZ1bmN0aW9uKGUpe2U9PT1tLlpfT0smJihcInN0cmluZ1wiPT09dGhpcy5vcHRpb25zLnRvP3RoaXMucmVzdWx0PXRoaXMuY2h1bmtzLmpvaW4oXCJcIik6dGhpcy5yZXN1bHQ9ZC5mbGF0dGVuQ2h1bmtzKHRoaXMuY2h1bmtzKSksdGhpcy5jaHVua3M9W10sdGhpcy5lcnI9ZSx0aGlzLm1zZz10aGlzLnN0cm0ubXNnfSxyLkluZmxhdGU9YSxyLmluZmxhdGU9byxyLmluZmxhdGVSYXc9ZnVuY3Rpb24oZSx0KXtyZXR1cm4odD10fHx7fSkucmF3PSEwLG8oZSx0KX0sci51bmd6aXA9b30se1wiLi91dGlscy9jb21tb25cIjo0MSxcIi4vdXRpbHMvc3RyaW5nc1wiOjQyLFwiLi96bGliL2NvbnN0YW50c1wiOjQ0LFwiLi96bGliL2d6aGVhZGVyXCI6NDcsXCIuL3psaWIvaW5mbGF0ZVwiOjQ5LFwiLi96bGliL21lc3NhZ2VzXCI6NTEsXCIuL3psaWIvenN0cmVhbVwiOjUzfV0sNDE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQxNkFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgSW50MzJBcnJheTtyLmFzc2lnbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpO3QubGVuZ3RoOyl7dmFyIHI9dC5zaGlmdCgpO2lmKHIpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IocitcIm11c3QgYmUgbm9uLW9iamVjdFwiKTtmb3IodmFyIG4gaW4gcilyLmhhc093blByb3BlcnR5KG4pJiYoZVtuXT1yW25dKX19cmV0dXJuIGV9LHIuc2hyaW5rQnVmPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPT09dD9lOmUuc3ViYXJyYXk/ZS5zdWJhcnJheSgwLHQpOihlLmxlbmd0aD10LGUpfTt2YXIgaT17YXJyYXlTZXQ6ZnVuY3Rpb24oZSx0LHIsbixpKXtpZih0LnN1YmFycmF5JiZlLnN1YmFycmF5KWUuc2V0KHQuc3ViYXJyYXkocixyK24pLGkpO2Vsc2UgZm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYTtmb3IodD1uPTAscj1lLmxlbmd0aDt0PHI7dCsrKW4rPWVbdF0ubGVuZ3RoO2ZvcihhPW5ldyBVaW50OEFycmF5KG4pLHQ9aT0wLHI9ZS5sZW5ndGg7dDxyO3QrKylzPWVbdF0sYS5zZXQocyxpKSxpKz1zLmxlbmd0aDtyZXR1cm4gYX19LHM9e2FycmF5U2V0OmZ1bmN0aW9uKGUsdCxyLG4saSl7Zm9yKHZhciBzPTA7czxuO3MrKyllW2krc109dFtyK3NdfSxmbGF0dGVuQ2h1bmtzOmZ1bmN0aW9uKGUpe3JldHVybltdLmNvbmNhdC5hcHBseShbXSxlKX19O3Iuc2V0VHlwZWQ9ZnVuY3Rpb24oZSl7ZT8oci5CdWY4PVVpbnQ4QXJyYXksci5CdWYxNj1VaW50MTZBcnJheSxyLkJ1ZjMyPUludDMyQXJyYXksci5hc3NpZ24ocixpKSk6KHIuQnVmOD1BcnJheSxyLkJ1ZjE2PUFycmF5LHIuQnVmMzI9QXJyYXksci5hc3NpZ24ocixzKSl9LHIuc2V0VHlwZWQobil9LHt9XSw0MjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBoPWUoXCIuL2NvbW1vblwiKSxpPSEwLHM9ITA7dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxbMF0pfWNhdGNoKGUpe2k9ITF9dHJ5e1N0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCxuZXcgVWludDhBcnJheSgxKSl9Y2F0Y2goZSl7cz0hMX1mb3IodmFyIHU9bmV3IGguQnVmOCgyNTYpLG49MDtuPDI1NjtuKyspdVtuXT0yNTI8PW4/NjoyNDg8PW4/NToyNDA8PW4/NDoyMjQ8PW4/MzoxOTI8PW4/MjoxO2Z1bmN0aW9uIGwoZSx0KXtpZih0PDY1NTM3JiYoZS5zdWJhcnJheSYmc3x8IWUuc3ViYXJyYXkmJmkpKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsaC5zaHJpbmtCdWYoZSx0KSk7Zm9yKHZhciByPVwiXCIsbj0wO248dDtuKyspcis9U3RyaW5nLmZyb21DaGFyQ29kZShlW25dKTtyZXR1cm4gcn11WzI1NF09dVsyNTRdPTEsci5zdHJpbmcyYnVmPWZ1bmN0aW9uKGUpe3ZhciB0LHIsbixpLHMsYT1lLmxlbmd0aCxvPTA7Zm9yKGk9MDtpPGE7aSsrKTU1Mjk2PT0oNjQ1MTImKHI9ZS5jaGFyQ29kZUF0KGkpKSkmJmkrMTxhJiY1NjMyMD09KDY0NTEyJihuPWUuY2hhckNvZGVBdChpKzEpKSkmJihyPTY1NTM2KyhyLTU1Mjk2PDwxMCkrKG4tNTYzMjApLGkrKyksbys9cjwxMjg/MTpyPDIwNDg/MjpyPDY1NTM2PzM6NDtmb3IodD1uZXcgaC5CdWY4KG8pLGk9cz0wO3M8bztpKyspNTUyOTY9PSg2NDUxMiYocj1lLmNoYXJDb2RlQXQoaSkpKSYmaSsxPGEmJjU2MzIwPT0oNjQ1MTImKG49ZS5jaGFyQ29kZUF0KGkrMSkpKSYmKHI9NjU1MzYrKHItNTUyOTY8PDEwKSsobi01NjMyMCksaSsrKSxyPDEyOD90W3MrK109cjoocjwyMDQ4P3RbcysrXT0xOTJ8cj4+PjY6KHI8NjU1MzY/dFtzKytdPTIyNHxyPj4+MTI6KHRbcysrXT0yNDB8cj4+PjE4LHRbcysrXT0xMjh8cj4+PjEyJjYzKSx0W3MrK109MTI4fHI+Pj42JjYzKSx0W3MrK109MTI4fDYzJnIpO3JldHVybiB0fSxyLmJ1ZjJiaW5zdHJpbmc9ZnVuY3Rpb24oZSl7cmV0dXJuIGwoZSxlLmxlbmd0aCl9LHIuYmluc3RyaW5nMmJ1Zj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IGguQnVmOChlLmxlbmd0aCkscj0wLG49dC5sZW5ndGg7cjxuO3IrKyl0W3JdPWUuY2hhckNvZGVBdChyKTtyZXR1cm4gdH0sci5idWYyc3RyaW5nPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbixpLHMsYT10fHxlLmxlbmd0aCxvPW5ldyBBcnJheSgyKmEpO2ZvcihyPW49MDtyPGE7KWlmKChpPWVbcisrXSk8MTI4KW9bbisrXT1pO2Vsc2UgaWYoNDwocz11W2ldKSlvW24rK109NjU1MzMscis9cy0xO2Vsc2V7Zm9yKGkmPTI9PT1zPzMxOjM9PT1zPzE1Ojc7MTxzJiZyPGE7KWk9aTw8Nnw2MyZlW3IrK10scy0tOzE8cz9vW24rK109NjU1MzM6aTw2NTUzNj9vW24rK109aTooaS09NjU1MzYsb1tuKytdPTU1Mjk2fGk+PjEwJjEwMjMsb1tuKytdPTU2MzIwfDEwMjMmaSl9cmV0dXJuIGwobyxuKX0sci51dGY4Ym9yZGVyPWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKCh0PXR8fGUubGVuZ3RoKT5lLmxlbmd0aCYmKHQ9ZS5sZW5ndGgpLHI9dC0xOzA8PXImJjEyOD09KDE5MiZlW3JdKTspci0tO3JldHVybiByPDA/dDowPT09cj90OnIrdVtlW3JdXT50P3I6dH19LHtcIi4vY29tbW9uXCI6NDF9XSw0MzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXtmb3IodmFyIGk9NjU1MzUmZXwwLHM9ZT4+PjE2JjY1NTM1fDAsYT0wOzAhPT1yOyl7Zm9yKHItPWE9MmUzPHI/MmUzOnI7cz1zKyhpPWkrdFtuKytdfDApfDAsLS1hOyk7aSU9NjU1MjEscyU9NjU1MjF9cmV0dXJuIGl8czw8MTZ8MH19LHt9XSw0NDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17Wl9OT19GTFVTSDowLFpfUEFSVElBTF9GTFVTSDoxLFpfU1lOQ19GTFVTSDoyLFpfRlVMTF9GTFVTSDozLFpfRklOSVNIOjQsWl9CTE9DSzo1LFpfVFJFRVM6NixaX09LOjAsWl9TVFJFQU1fRU5EOjEsWl9ORUVEX0RJQ1Q6MixaX0VSUk5POi0xLFpfU1RSRUFNX0VSUk9SOi0yLFpfREFUQV9FUlJPUjotMyxaX0JVRl9FUlJPUjotNSxaX05PX0NPTVBSRVNTSU9OOjAsWl9CRVNUX1NQRUVEOjEsWl9CRVNUX0NPTVBSRVNTSU9OOjksWl9ERUZBVUxUX0NPTVBSRVNTSU9OOi0xLFpfRklMVEVSRUQ6MSxaX0hVRkZNQU5fT05MWToyLFpfUkxFOjMsWl9GSVhFRDo0LFpfREVGQVVMVF9TVFJBVEVHWTowLFpfQklOQVJZOjAsWl9URVhUOjEsWl9VTktOT1dOOjIsWl9ERUZMQVRFRDo4fX0se31dLDQ1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD1bXSxyPTA7cjwyNTY7cisrKXtlPXI7Zm9yKHZhciBuPTA7bjw4O24rKyllPTEmZT8zOTg4MjkyMzg0XmU+Pj4xOmU+Pj4xO3Rbcl09ZX1yZXR1cm4gdH0oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7dmFyIGk9byxzPW4rcjtlXj0tMTtmb3IodmFyIGE9bjthPHM7YSsrKWU9ZT4+PjheaVsyNTUmKGVedFthXSldO3JldHVybi0xXmV9fSx7fV0sNDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaCxjPWUoXCIuLi91dGlscy9jb21tb25cIiksdT1lKFwiLi90cmVlc1wiKSxkPWUoXCIuL2FkbGVyMzJcIikscD1lKFwiLi9jcmMzMlwiKSxuPWUoXCIuL21lc3NhZ2VzXCIpLGw9MCxmPTQsbT0wLF89LTIsZz0tMSxiPTQsaT0yLHY9OCx5PTkscz0yODYsYT0zMCxvPTE5LHc9MipzKzEsaz0xNSx4PTMsUz0yNTgsej1TK3grMSxDPTQyLEU9MTEzLEE9MSxJPTIsTz0zLEI9NDtmdW5jdGlvbiBSKGUsdCl7cmV0dXJuIGUubXNnPW5bdF0sdH1mdW5jdGlvbiBUKGUpe3JldHVybihlPDwxKS0oNDxlPzk6MCl9ZnVuY3Rpb24gRChlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9ZnVuY3Rpb24gRihlKXt2YXIgdD1lLnN0YXRlLHI9dC5wZW5kaW5nO3I+ZS5hdmFpbF9vdXQmJihyPWUuYXZhaWxfb3V0KSwwIT09ciYmKGMuYXJyYXlTZXQoZS5vdXRwdXQsdC5wZW5kaW5nX2J1Zix0LnBlbmRpbmdfb3V0LHIsZS5uZXh0X291dCksZS5uZXh0X291dCs9cix0LnBlbmRpbmdfb3V0Kz1yLGUudG90YWxfb3V0Kz1yLGUuYXZhaWxfb3V0LT1yLHQucGVuZGluZy09ciwwPT09dC5wZW5kaW5nJiYodC5wZW5kaW5nX291dD0wKSl9ZnVuY3Rpb24gTihlLHQpe3UuX3RyX2ZsdXNoX2Jsb2NrKGUsMDw9ZS5ibG9ja19zdGFydD9lLmJsb2NrX3N0YXJ0Oi0xLGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydCx0KSxlLmJsb2NrX3N0YXJ0PWUuc3Ryc3RhcnQsRihlLnN0cm0pfWZ1bmN0aW9uIFUoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10fWZ1bmN0aW9uIFAoZSx0KXtlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT10Pj4+OCYyNTUsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnR9ZnVuY3Rpb24gTChlLHQpe3ZhciByLG4saT1lLm1heF9jaGFpbl9sZW5ndGgscz1lLnN0cnN0YXJ0LGE9ZS5wcmV2X2xlbmd0aCxvPWUubmljZV9tYXRjaCxoPWUuc3Ryc3RhcnQ+ZS53X3NpemUtej9lLnN0cnN0YXJ0LShlLndfc2l6ZS16KTowLHU9ZS53aW5kb3csbD1lLndfbWFzayxmPWUucHJldixjPWUuc3Ryc3RhcnQrUyxkPXVbcythLTFdLHA9dVtzK2FdO2UucHJldl9sZW5ndGg+PWUuZ29vZF9tYXRjaCYmKGk+Pj0yKSxvPmUubG9va2FoZWFkJiYobz1lLmxvb2thaGVhZCk7ZG97aWYodVsocj10KSthXT09PXAmJnVbcithLTFdPT09ZCYmdVtyXT09PXVbc10mJnVbKytyXT09PXVbcysxXSl7cys9MixyKys7ZG97fXdoaWxlKHVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZ1Wysrc109PT11Wysrcl0mJnVbKytzXT09PXVbKytyXSYmdVsrK3NdPT09dVsrK3JdJiZzPGMpO2lmKG49Uy0oYy1zKSxzPWMtUyxhPG4pe2lmKGUubWF0Y2hfc3RhcnQ9dCxvPD0oYT1uKSlicmVhaztkPXVbcythLTFdLHA9dVtzK2FdfX19d2hpbGUoKHQ9Zlt0JmxdKT5oJiYwIT0tLWkpO3JldHVybiBhPD1lLmxvb2thaGVhZD9hOmUubG9va2FoZWFkfWZ1bmN0aW9uIGooZSl7dmFyIHQscixuLGkscyxhLG8saCx1LGwsZj1lLndfc2l6ZTtkb3tpZihpPWUud2luZG93X3NpemUtZS5sb29rYWhlYWQtZS5zdHJzdGFydCxlLnN0cnN0YXJ0Pj1mKyhmLXopKXtmb3IoYy5hcnJheVNldChlLndpbmRvdyxlLndpbmRvdyxmLGYsMCksZS5tYXRjaF9zdGFydC09ZixlLnN0cnN0YXJ0LT1mLGUuYmxvY2tfc3RhcnQtPWYsdD1yPWUuaGFzaF9zaXplO249ZS5oZWFkWy0tdF0sZS5oZWFkW3RdPWY8PW4/bi1mOjAsLS1yOyk7Zm9yKHQ9cj1mO249ZS5wcmV2Wy0tdF0sZS5wcmV2W3RdPWY8PW4/bi1mOjAsLS1yOyk7aSs9Zn1pZigwPT09ZS5zdHJtLmF2YWlsX2luKWJyZWFrO2lmKGE9ZS5zdHJtLG89ZS53aW5kb3csaD1lLnN0cnN0YXJ0K2UubG9va2FoZWFkLHU9aSxsPXZvaWQgMCxsPWEuYXZhaWxfaW4sdTxsJiYobD11KSxyPTA9PT1sPzA6KGEuYXZhaWxfaW4tPWwsYy5hcnJheVNldChvLGEuaW5wdXQsYS5uZXh0X2luLGwsaCksMT09PWEuc3RhdGUud3JhcD9hLmFkbGVyPWQoYS5hZGxlcixvLGwsaCk6Mj09PWEuc3RhdGUud3JhcCYmKGEuYWRsZXI9cChhLmFkbGVyLG8sbCxoKSksYS5uZXh0X2luKz1sLGEudG90YWxfaW4rPWwsbCksZS5sb29rYWhlYWQrPXIsZS5sb29rYWhlYWQrZS5pbnNlcnQ+PXgpZm9yKHM9ZS5zdHJzdGFydC1lLmluc2VydCxlLmluc19oPWUud2luZG93W3NdLGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzKzFdKSZlLmhhc2hfbWFzaztlLmluc2VydCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tzK3gtMV0pJmUuaGFzaF9tYXNrLGUucHJldltzJmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPXMscysrLGUuaW5zZXJ0LS0sIShlLmxvb2thaGVhZCtlLmluc2VydDx4KSk7KTt9d2hpbGUoZS5sb29rYWhlYWQ8eiYmMCE9PWUuc3RybS5hdmFpbF9pbil9ZnVuY3Rpb24gWihlLHQpe2Zvcih2YXIgcixuOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksMCE9PXImJmUuc3Ryc3RhcnQtcjw9ZS53X3NpemUteiYmKGUubWF0Y2hfbGVuZ3RoPUwoZSxyKSksZS5tYXRjaF9sZW5ndGg+PXgpaWYobj11Ll90cl90YWxseShlLGUuc3Ryc3RhcnQtZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aC14KSxlLmxvb2thaGVhZC09ZS5tYXRjaF9sZW5ndGgsZS5tYXRjaF9sZW5ndGg8PWUubWF4X2xhenlfbWF0Y2gmJmUubG9va2FoZWFkPj14KXtmb3IoZS5tYXRjaF9sZW5ndGgtLTtlLnN0cnN0YXJ0KyssZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQreC0xXSkmZS5oYXNoX21hc2sscj1lLnByZXZbZS5zdHJzdGFydCZlLndfbWFza109ZS5oZWFkW2UuaW5zX2hdLGUuaGVhZFtlLmluc19oXT1lLnN0cnN0YXJ0LDAhPS0tZS5tYXRjaF9sZW5ndGg7KTtlLnN0cnN0YXJ0Kyt9ZWxzZSBlLnN0cnN0YXJ0Kz1lLm1hdGNoX2xlbmd0aCxlLm1hdGNoX2xlbmd0aD0wLGUuaW5zX2g9ZS53aW5kb3dbZS5zdHJzdGFydF0sZS5pbnNfaD0oZS5pbnNfaDw8ZS5oYXNoX3NoaWZ0XmUud2luZG93W2Uuc3Ryc3RhcnQrMV0pJmUuaGFzaF9tYXNrO2Vsc2Ugbj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydF0pLGUubG9va2FoZWFkLS0sZS5zdHJzdGFydCsrO2lmKG4mJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIFcoZSx0KXtmb3IodmFyIHIsbixpOzspe2lmKGUubG9va2FoZWFkPHope2lmKGooZSksZS5sb29rYWhlYWQ8eiYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWlmKHI9MCxlLmxvb2thaGVhZD49eCYmKGUuaW5zX2g9KGUuaW5zX2g8PGUuaGFzaF9zaGlmdF5lLndpbmRvd1tlLnN0cnN0YXJ0K3gtMV0pJmUuaGFzaF9tYXNrLHI9ZS5wcmV2W2Uuc3Ryc3RhcnQmZS53X21hc2tdPWUuaGVhZFtlLmluc19oXSxlLmhlYWRbZS5pbnNfaF09ZS5zdHJzdGFydCksZS5wcmV2X2xlbmd0aD1lLm1hdGNoX2xlbmd0aCxlLnByZXZfbWF0Y2g9ZS5tYXRjaF9zdGFydCxlLm1hdGNoX2xlbmd0aD14LTEsMCE9PXImJmUucHJldl9sZW5ndGg8ZS5tYXhfbGF6eV9tYXRjaCYmZS5zdHJzdGFydC1yPD1lLndfc2l6ZS16JiYoZS5tYXRjaF9sZW5ndGg9TChlLHIpLGUubWF0Y2hfbGVuZ3RoPD01JiYoMT09PWUuc3RyYXRlZ3l8fGUubWF0Y2hfbGVuZ3RoPT09eCYmNDA5NjxlLnN0cnN0YXJ0LWUubWF0Y2hfc3RhcnQpJiYoZS5tYXRjaF9sZW5ndGg9eC0xKSksZS5wcmV2X2xlbmd0aD49eCYmZS5tYXRjaF9sZW5ndGg8PWUucHJldl9sZW5ndGgpe2ZvcihpPWUuc3Ryc3RhcnQrZS5sb29rYWhlYWQteCxuPXUuX3RyX3RhbGx5KGUsZS5zdHJzdGFydC0xLWUucHJldl9tYXRjaCxlLnByZXZfbGVuZ3RoLXgpLGUubG9va2FoZWFkLT1lLnByZXZfbGVuZ3RoLTEsZS5wcmV2X2xlbmd0aC09MjsrK2Uuc3Ryc3RhcnQ8PWkmJihlLmluc19oPShlLmluc19oPDxlLmhhc2hfc2hpZnReZS53aW5kb3dbZS5zdHJzdGFydCt4LTFdKSZlLmhhc2hfbWFzayxyPWUucHJldltlLnN0cnN0YXJ0JmUud19tYXNrXT1lLmhlYWRbZS5pbnNfaF0sZS5oZWFkW2UuaW5zX2hdPWUuc3Ryc3RhcnQpLDAhPS0tZS5wcmV2X2xlbmd0aDspO2lmKGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5tYXRjaF9sZW5ndGg9eC0xLGUuc3Ryc3RhcnQrKyxuJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9ZWxzZSBpZihlLm1hdGNoX2F2YWlsYWJsZSl7aWYoKG49dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnQtMV0pKSYmTihlLCExKSxlLnN0cnN0YXJ0KyssZS5sb29rYWhlYWQtLSwwPT09ZS5zdHJtLmF2YWlsX291dClyZXR1cm4gQX1lbHNlIGUubWF0Y2hfYXZhaWxhYmxlPTEsZS5zdHJzdGFydCsrLGUubG9va2FoZWFkLS19cmV0dXJuIGUubWF0Y2hfYXZhaWxhYmxlJiYobj11Ll90cl90YWxseShlLDAsZS53aW5kb3dbZS5zdHJzdGFydC0xXSksZS5tYXRjaF9hdmFpbGFibGU9MCksZS5pbnNlcnQ9ZS5zdHJzdGFydDx4LTE/ZS5zdHJzdGFydDp4LTEsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfWZ1bmN0aW9uIE0oZSx0LHIsbixpKXt0aGlzLmdvb2RfbGVuZ3RoPWUsdGhpcy5tYXhfbGF6eT10LHRoaXMubmljZV9sZW5ndGg9cix0aGlzLm1heF9jaGFpbj1uLHRoaXMuZnVuYz1pfWZ1bmN0aW9uIEgoKXt0aGlzLnN0cm09bnVsbCx0aGlzLnN0YXR1cz0wLHRoaXMucGVuZGluZ19idWY9bnVsbCx0aGlzLnBlbmRpbmdfYnVmX3NpemU9MCx0aGlzLnBlbmRpbmdfb3V0PTAsdGhpcy5wZW5kaW5nPTAsdGhpcy53cmFwPTAsdGhpcy5nemhlYWQ9bnVsbCx0aGlzLmd6aW5kZXg9MCx0aGlzLm1ldGhvZD12LHRoaXMubGFzdF9mbHVzaD0tMSx0aGlzLndfc2l6ZT0wLHRoaXMud19iaXRzPTAsdGhpcy53X21hc2s9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMud2luZG93X3NpemU9MCx0aGlzLnByZXY9bnVsbCx0aGlzLmhlYWQ9bnVsbCx0aGlzLmluc19oPTAsdGhpcy5oYXNoX3NpemU9MCx0aGlzLmhhc2hfYml0cz0wLHRoaXMuaGFzaF9tYXNrPTAsdGhpcy5oYXNoX3NoaWZ0PTAsdGhpcy5ibG9ja19zdGFydD0wLHRoaXMubWF0Y2hfbGVuZ3RoPTAsdGhpcy5wcmV2X21hdGNoPTAsdGhpcy5tYXRjaF9hdmFpbGFibGU9MCx0aGlzLnN0cnN0YXJ0PTAsdGhpcy5tYXRjaF9zdGFydD0wLHRoaXMubG9va2FoZWFkPTAsdGhpcy5wcmV2X2xlbmd0aD0wLHRoaXMubWF4X2NoYWluX2xlbmd0aD0wLHRoaXMubWF4X2xhenlfbWF0Y2g9MCx0aGlzLmxldmVsPTAsdGhpcy5zdHJhdGVneT0wLHRoaXMuZ29vZF9tYXRjaD0wLHRoaXMubmljZV9tYXRjaD0wLHRoaXMuZHluX2x0cmVlPW5ldyBjLkJ1ZjE2KDIqdyksdGhpcy5keW5fZHRyZWU9bmV3IGMuQnVmMTYoMiooMiphKzEpKSx0aGlzLmJsX3RyZWU9bmV3IGMuQnVmMTYoMiooMipvKzEpKSxEKHRoaXMuZHluX2x0cmVlKSxEKHRoaXMuZHluX2R0cmVlKSxEKHRoaXMuYmxfdHJlZSksdGhpcy5sX2Rlc2M9bnVsbCx0aGlzLmRfZGVzYz1udWxsLHRoaXMuYmxfZGVzYz1udWxsLHRoaXMuYmxfY291bnQ9bmV3IGMuQnVmMTYoaysxKSx0aGlzLmhlYXA9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5oZWFwKSx0aGlzLmhlYXBfbGVuPTAsdGhpcy5oZWFwX21heD0wLHRoaXMuZGVwdGg9bmV3IGMuQnVmMTYoMipzKzEpLEQodGhpcy5kZXB0aCksdGhpcy5sX2J1Zj0wLHRoaXMubGl0X2J1ZnNpemU9MCx0aGlzLmxhc3RfbGl0PTAsdGhpcy5kX2J1Zj0wLHRoaXMub3B0X2xlbj0wLHRoaXMuc3RhdGljX2xlbj0wLHRoaXMubWF0Y2hlcz0wLHRoaXMuaW5zZXJ0PTAsdGhpcy5iaV9idWY9MCx0aGlzLmJpX3ZhbGlkPTB9ZnVuY3Rpb24gRyhlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8oZS50b3RhbF9pbj1lLnRvdGFsX291dD0wLGUuZGF0YV90eXBlPWksKHQ9ZS5zdGF0ZSkucGVuZGluZz0wLHQucGVuZGluZ19vdXQ9MCx0LndyYXA8MCYmKHQud3JhcD0tdC53cmFwKSx0LnN0YXR1cz10LndyYXA/QzpFLGUuYWRsZXI9Mj09PXQud3JhcD8wOjEsdC5sYXN0X2ZsdXNoPWwsdS5fdHJfaW5pdCh0KSxtKTpSKGUsXyl9ZnVuY3Rpb24gSyhlKXt2YXIgdD1HKGUpO3JldHVybiB0PT09bSYmZnVuY3Rpb24oZSl7ZS53aW5kb3dfc2l6ZT0yKmUud19zaXplLEQoZS5oZWFkKSxlLm1heF9sYXp5X21hdGNoPWhbZS5sZXZlbF0ubWF4X2xhenksZS5nb29kX21hdGNoPWhbZS5sZXZlbF0uZ29vZF9sZW5ndGgsZS5uaWNlX21hdGNoPWhbZS5sZXZlbF0ubmljZV9sZW5ndGgsZS5tYXhfY2hhaW5fbGVuZ3RoPWhbZS5sZXZlbF0ubWF4X2NoYWluLGUuc3Ryc3RhcnQ9MCxlLmJsb2NrX3N0YXJ0PTAsZS5sb29rYWhlYWQ9MCxlLmluc2VydD0wLGUubWF0Y2hfbGVuZ3RoPWUucHJldl9sZW5ndGg9eC0xLGUubWF0Y2hfYXZhaWxhYmxlPTAsZS5pbnNfaD0wfShlLnN0YXRlKSx0fWZ1bmN0aW9uIFkoZSx0LHIsbixpLHMpe2lmKCFlKXJldHVybiBfO3ZhciBhPTE7aWYodD09PWcmJih0PTYpLG48MD8oYT0wLG49LW4pOjE1PG4mJihhPTIsbi09MTYpLGk8MXx8eTxpfHxyIT09dnx8bjw4fHwxNTxufHx0PDB8fDk8dHx8czwwfHxiPHMpcmV0dXJuIFIoZSxfKTs4PT09biYmKG49OSk7dmFyIG89bmV3IEg7cmV0dXJuKGUuc3RhdGU9bykuc3RybT1lLG8ud3JhcD1hLG8uZ3poZWFkPW51bGwsby53X2JpdHM9bixvLndfc2l6ZT0xPDxvLndfYml0cyxvLndfbWFzaz1vLndfc2l6ZS0xLG8uaGFzaF9iaXRzPWkrNyxvLmhhc2hfc2l6ZT0xPDxvLmhhc2hfYml0cyxvLmhhc2hfbWFzaz1vLmhhc2hfc2l6ZS0xLG8uaGFzaF9zaGlmdD1+figoby5oYXNoX2JpdHMreC0xKS94KSxvLndpbmRvdz1uZXcgYy5CdWY4KDIqby53X3NpemUpLG8uaGVhZD1uZXcgYy5CdWYxNihvLmhhc2hfc2l6ZSksby5wcmV2PW5ldyBjLkJ1ZjE2KG8ud19zaXplKSxvLmxpdF9idWZzaXplPTE8PGkrNixvLnBlbmRpbmdfYnVmX3NpemU9NCpvLmxpdF9idWZzaXplLG8ucGVuZGluZ19idWY9bmV3IGMuQnVmOChvLnBlbmRpbmdfYnVmX3NpemUpLG8uZF9idWY9MSpvLmxpdF9idWZzaXplLG8ubF9idWY9MypvLmxpdF9idWZzaXplLG8ubGV2ZWw9dCxvLnN0cmF0ZWd5PXMsby5tZXRob2Q9cixLKGUpfWg9W25ldyBNKDAsMCwwLDAsZnVuY3Rpb24oZSx0KXt2YXIgcj02NTUzNTtmb3Iocj5lLnBlbmRpbmdfYnVmX3NpemUtNSYmKHI9ZS5wZW5kaW5nX2J1Zl9zaXplLTUpOzspe2lmKGUubG9va2FoZWFkPD0xKXtpZihqKGUpLDA9PT1lLmxvb2thaGVhZCYmdD09PWwpcmV0dXJuIEE7aWYoMD09PWUubG9va2FoZWFkKWJyZWFrfWUuc3Ryc3RhcnQrPWUubG9va2FoZWFkLGUubG9va2FoZWFkPTA7dmFyIG49ZS5ibG9ja19zdGFydCtyO2lmKCgwPT09ZS5zdHJzdGFydHx8ZS5zdHJzdGFydD49bikmJihlLmxvb2thaGVhZD1lLnN0cnN0YXJ0LW4sZS5zdHJzdGFydD1uLE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBO2lmKGUuc3Ryc3RhcnQtZS5ibG9ja19zdGFydD49ZS53X3NpemUteiYmKE4oZSwhMSksMD09PWUuc3RybS5hdmFpbF9vdXQpKXJldHVybiBBfXJldHVybiBlLmluc2VydD0wLHQ9PT1mPyhOKGUsITApLDA9PT1lLnN0cm0uYXZhaWxfb3V0P086Qik6KGUuc3Ryc3RhcnQ+ZS5ibG9ja19zdGFydCYmKE4oZSwhMSksZS5zdHJtLmF2YWlsX291dCksQSl9KSxuZXcgTSg0LDQsOCw0LFopLG5ldyBNKDQsNSwxNiw4LFopLG5ldyBNKDQsNiwzMiwzMixaKSxuZXcgTSg0LDQsMTYsMTYsVyksbmV3IE0oOCwxNiwzMiwzMixXKSxuZXcgTSg4LDE2LDEyOCwxMjgsVyksbmV3IE0oOCwzMiwxMjgsMjU2LFcpLG5ldyBNKDMyLDEyOCwyNTgsMTAyNCxXKSxuZXcgTSgzMiwyNTgsMjU4LDQwOTYsVyldLHIuZGVmbGF0ZUluaXQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gWShlLHQsdiwxNSw4LDApfSxyLmRlZmxhdGVJbml0Mj1ZLHIuZGVmbGF0ZVJlc2V0PUssci5kZWZsYXRlUmVzZXRLZWVwPUcsci5kZWZsYXRlU2V0SGVhZGVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJmUuc3RhdGU/MiE9PWUuc3RhdGUud3JhcD9fOihlLnN0YXRlLmd6aGVhZD10LG0pOl99LHIuZGVmbGF0ZT1mdW5jdGlvbihlLHQpe3ZhciByLG4saSxzO2lmKCFlfHwhZS5zdGF0ZXx8NTx0fHx0PDApcmV0dXJuIGU/UihlLF8pOl87aWYobj1lLnN0YXRlLCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2lufHw2NjY9PT1uLnN0YXR1cyYmdCE9PWYpcmV0dXJuIFIoZSwwPT09ZS5hdmFpbF9vdXQ/LTU6Xyk7aWYobi5zdHJtPWUscj1uLmxhc3RfZmx1c2gsbi5sYXN0X2ZsdXNoPXQsbi5zdGF0dXM9PT1DKWlmKDI9PT1uLndyYXApZS5hZGxlcj0wLFUobiwzMSksVShuLDEzOSksVShuLDgpLG4uZ3poZWFkPyhVKG4sKG4uZ3poZWFkLnRleHQ/MTowKSsobi5nemhlYWQuaGNyYz8yOjApKyhuLmd6aGVhZC5leHRyYT80OjApKyhuLmd6aGVhZC5uYW1lPzg6MCkrKG4uZ3poZWFkLmNvbW1lbnQ/MTY6MCkpLFUobiwyNTUmbi5nemhlYWQudGltZSksVShuLG4uZ3poZWFkLnRpbWU+PjgmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MTYmMjU1KSxVKG4sbi5nemhlYWQudGltZT4+MjQmMjU1KSxVKG4sOT09PW4ubGV2ZWw/MjoyPD1uLnN0cmF0ZWd5fHxuLmxldmVsPDI/NDowKSxVKG4sMjU1Jm4uZ3poZWFkLm9zKSxuLmd6aGVhZC5leHRyYSYmbi5nemhlYWQuZXh0cmEubGVuZ3RoJiYoVShuLDI1NSZuLmd6aGVhZC5leHRyYS5sZW5ndGgpLFUobixuLmd6aGVhZC5leHRyYS5sZW5ndGg+PjgmMjU1KSksbi5nemhlYWQuaGNyYyYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLDApKSxuLmd6aW5kZXg9MCxuLnN0YXR1cz02OSk6KFUobiwwKSxVKG4sMCksVShuLDApLFUobiwwKSxVKG4sMCksVShuLDk9PT1uLmxldmVsPzI6Mjw9bi5zdHJhdGVneXx8bi5sZXZlbDwyPzQ6MCksVShuLDMpLG4uc3RhdHVzPUUpO2Vsc2V7dmFyIGE9disobi53X2JpdHMtODw8NCk8PDg7YXw9KDI8PW4uc3RyYXRlZ3l8fG4ubGV2ZWw8Mj8wOm4ubGV2ZWw8Nj8xOjY9PT1uLmxldmVsPzI6Myk8PDYsMCE9PW4uc3Ryc3RhcnQmJihhfD0zMiksYSs9MzEtYSUzMSxuLnN0YXR1cz1FLFAobixhKSwwIT09bi5zdHJzdGFydCYmKFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksZS5hZGxlcj0xfWlmKDY5PT09bi5zdGF0dXMpaWYobi5nemhlYWQuZXh0cmEpe2ZvcihpPW4ucGVuZGluZztuLmd6aW5kZXg8KDY1NTM1Jm4uZ3poZWFkLmV4dHJhLmxlbmd0aCkmJihuLnBlbmRpbmchPT1uLnBlbmRpbmdfYnVmX3NpemV8fChuLmd6aGVhZC5oY3JjJiZuLnBlbmRpbmc+aSYmKGUuYWRsZXI9cChlLmFkbGVyLG4ucGVuZGluZ19idWYsbi5wZW5kaW5nLWksaSkpLEYoZSksaT1uLnBlbmRpbmcsbi5wZW5kaW5nIT09bi5wZW5kaW5nX2J1Zl9zaXplKSk7KVUobiwyNTUmbi5nemhlYWQuZXh0cmFbbi5nemluZGV4XSksbi5nemluZGV4Kys7bi5nemhlYWQuaGNyYyYmbi5wZW5kaW5nPmkmJihlLmFkbGVyPXAoZS5hZGxlcixuLnBlbmRpbmdfYnVmLG4ucGVuZGluZy1pLGkpKSxuLmd6aW5kZXg9PT1uLmd6aGVhZC5leHRyYS5sZW5ndGgmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz03Myl9ZWxzZSBuLnN0YXR1cz03MztpZig3Mz09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLm5hbWUpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQubmFtZS5sZW5ndGg/MjU1Jm4uZ3poZWFkLm5hbWUuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLmd6aW5kZXg9MCxuLnN0YXR1cz05MSl9ZWxzZSBuLnN0YXR1cz05MTtpZig5MT09PW4uc3RhdHVzKWlmKG4uZ3poZWFkLmNvbW1lbnQpe2k9bi5wZW5kaW5nO2Rve2lmKG4ucGVuZGluZz09PW4ucGVuZGluZ19idWZfc2l6ZSYmKG4uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksRihlKSxpPW4ucGVuZGluZyxuLnBlbmRpbmc9PT1uLnBlbmRpbmdfYnVmX3NpemUpKXtzPTE7YnJlYWt9cz1uLmd6aW5kZXg8bi5nemhlYWQuY29tbWVudC5sZW5ndGg/MjU1Jm4uZ3poZWFkLmNvbW1lbnQuY2hhckNvZGVBdChuLmd6aW5kZXgrKyk6MCxVKG4scyl9d2hpbGUoMCE9PXMpO24uZ3poZWFkLmhjcmMmJm4ucGVuZGluZz5pJiYoZS5hZGxlcj1wKGUuYWRsZXIsbi5wZW5kaW5nX2J1ZixuLnBlbmRpbmctaSxpKSksMD09PXMmJihuLnN0YXR1cz0xMDMpfWVsc2Ugbi5zdGF0dXM9MTAzO2lmKDEwMz09PW4uc3RhdHVzJiYobi5nemhlYWQuaGNyYz8obi5wZW5kaW5nKzI+bi5wZW5kaW5nX2J1Zl9zaXplJiZGKGUpLG4ucGVuZGluZysyPD1uLnBlbmRpbmdfYnVmX3NpemUmJihVKG4sMjU1JmUuYWRsZXIpLFUobixlLmFkbGVyPj44JjI1NSksZS5hZGxlcj0wLG4uc3RhdHVzPUUpKTpuLnN0YXR1cz1FKSwwIT09bi5wZW5kaW5nKXtpZihGKGUpLDA9PT1lLmF2YWlsX291dClyZXR1cm4gbi5sYXN0X2ZsdXNoPS0xLG19ZWxzZSBpZigwPT09ZS5hdmFpbF9pbiYmVCh0KTw9VChyKSYmdCE9PWYpcmV0dXJuIFIoZSwtNSk7aWYoNjY2PT09bi5zdGF0dXMmJjAhPT1lLmF2YWlsX2luKXJldHVybiBSKGUsLTUpO2lmKDAhPT1lLmF2YWlsX2lufHwwIT09bi5sb29rYWhlYWR8fHQhPT1sJiY2NjYhPT1uLnN0YXR1cyl7dmFyIG89Mj09PW4uc3RyYXRlZ3k/ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI7Oyl7aWYoMD09PWUubG9va2FoZWFkJiYoaihlKSwwPT09ZS5sb29rYWhlYWQpKXtpZih0PT09bClyZXR1cm4gQTticmVha31pZihlLm1hdGNoX2xlbmd0aD0wLHI9dS5fdHJfdGFsbHkoZSwwLGUud2luZG93W2Uuc3Ryc3RhcnRdKSxlLmxvb2thaGVhZC0tLGUuc3Ryc3RhcnQrKyxyJiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCkpcmV0dXJuIEF9cmV0dXJuIGUuaW5zZXJ0PTAsdD09PWY/KE4oZSwhMCksMD09PWUuc3RybS5hdmFpbF9vdXQ/TzpCKTplLmxhc3RfbGl0JiYoTihlLCExKSwwPT09ZS5zdHJtLmF2YWlsX291dCk/QTpJfShuLHQpOjM9PT1uLnN0cmF0ZWd5P2Z1bmN0aW9uKGUsdCl7Zm9yKHZhciByLG4saSxzLGE9ZS53aW5kb3c7Oyl7aWYoZS5sb29rYWhlYWQ8PVMpe2lmKGooZSksZS5sb29rYWhlYWQ8PVMmJnQ9PT1sKXJldHVybiBBO2lmKDA9PT1lLmxvb2thaGVhZClicmVha31pZihlLm1hdGNoX2xlbmd0aD0wLGUubG9va2FoZWFkPj14JiYwPGUuc3Ryc3RhcnQmJihuPWFbaT1lLnN0cnN0YXJ0LTFdKT09PWFbKytpXSYmbj09PWFbKytpXSYmbj09PWFbKytpXSl7cz1lLnN0cnN0YXJ0K1M7ZG97fXdoaWxlKG49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJm49PT1hWysraV0mJmk8cyk7ZS5tYXRjaF9sZW5ndGg9Uy0ocy1pKSxlLm1hdGNoX2xlbmd0aD5lLmxvb2thaGVhZCYmKGUubWF0Y2hfbGVuZ3RoPWUubG9va2FoZWFkKX1pZihlLm1hdGNoX2xlbmd0aD49eD8ocj11Ll90cl90YWxseShlLDEsZS5tYXRjaF9sZW5ndGgteCksZS5sb29rYWhlYWQtPWUubWF0Y2hfbGVuZ3RoLGUuc3Ryc3RhcnQrPWUubWF0Y2hfbGVuZ3RoLGUubWF0Y2hfbGVuZ3RoPTApOihyPXUuX3RyX3RhbGx5KGUsMCxlLndpbmRvd1tlLnN0cnN0YXJ0XSksZS5sb29rYWhlYWQtLSxlLnN0cnN0YXJ0KyspLHImJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KSlyZXR1cm4gQX1yZXR1cm4gZS5pbnNlcnQ9MCx0PT09Zj8oTihlLCEwKSwwPT09ZS5zdHJtLmF2YWlsX291dD9POkIpOmUubGFzdF9saXQmJihOKGUsITEpLDA9PT1lLnN0cm0uYXZhaWxfb3V0KT9BOkl9KG4sdCk6aFtuLmxldmVsXS5mdW5jKG4sdCk7aWYobyE9PU8mJm8hPT1CfHwobi5zdGF0dXM9NjY2KSxvPT09QXx8bz09PU8pcmV0dXJuIDA9PT1lLmF2YWlsX291dCYmKG4ubGFzdF9mbHVzaD0tMSksbTtpZihvPT09SSYmKDE9PT10P3UuX3RyX2FsaWduKG4pOjUhPT10JiYodS5fdHJfc3RvcmVkX2Jsb2NrKG4sMCwwLCExKSwzPT09dCYmKEQobi5oZWFkKSwwPT09bi5sb29rYWhlYWQmJihuLnN0cnN0YXJ0PTAsbi5ibG9ja19zdGFydD0wLG4uaW5zZXJ0PTApKSksRihlKSwwPT09ZS5hdmFpbF9vdXQpKXJldHVybiBuLmxhc3RfZmx1c2g9LTEsbX1yZXR1cm4gdCE9PWY/bTpuLndyYXA8PTA/MTooMj09PW4ud3JhcD8oVShuLDI1NSZlLmFkbGVyKSxVKG4sZS5hZGxlcj4+OCYyNTUpLFUobixlLmFkbGVyPj4xNiYyNTUpLFUobixlLmFkbGVyPj4yNCYyNTUpLFUobiwyNTUmZS50b3RhbF9pbiksVShuLGUudG90YWxfaW4+PjgmMjU1KSxVKG4sZS50b3RhbF9pbj4+MTYmMjU1KSxVKG4sZS50b3RhbF9pbj4+MjQmMjU1KSk6KFAobixlLmFkbGVyPj4+MTYpLFAobiw2NTUzNSZlLmFkbGVyKSksRihlKSwwPG4ud3JhcCYmKG4ud3JhcD0tbi53cmFwKSwwIT09bi5wZW5kaW5nP206MSl9LHIuZGVmbGF0ZUVuZD1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZSYmZS5zdGF0ZT8odD1lLnN0YXRlLnN0YXR1cykhPT1DJiY2OSE9PXQmJjczIT09dCYmOTEhPT10JiYxMDMhPT10JiZ0IT09RSYmNjY2IT09dD9SKGUsXyk6KGUuc3RhdGU9bnVsbCx0PT09RT9SKGUsLTMpOm0pOl99LHIuZGVmbGF0ZVNldERpY3Rpb25hcnk9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGw9dC5sZW5ndGg7aWYoIWV8fCFlLnN0YXRlKXJldHVybiBfO2lmKDI9PT0ocz0ocj1lLnN0YXRlKS53cmFwKXx8MT09PXMmJnIuc3RhdHVzIT09Q3x8ci5sb29rYWhlYWQpcmV0dXJuIF87Zm9yKDE9PT1zJiYoZS5hZGxlcj1kKGUuYWRsZXIsdCxsLDApKSxyLndyYXA9MCxsPj1yLndfc2l6ZSYmKDA9PT1zJiYoRChyLmhlYWQpLHIuc3Ryc3RhcnQ9MCxyLmJsb2NrX3N0YXJ0PTAsci5pbnNlcnQ9MCksdT1uZXcgYy5CdWY4KHIud19zaXplKSxjLmFycmF5U2V0KHUsdCxsLXIud19zaXplLHIud19zaXplLDApLHQ9dSxsPXIud19zaXplKSxhPWUuYXZhaWxfaW4sbz1lLm5leHRfaW4saD1lLmlucHV0LGUuYXZhaWxfaW49bCxlLm5leHRfaW49MCxlLmlucHV0PXQsaihyKTtyLmxvb2thaGVhZD49eDspe2ZvcihuPXIuc3Ryc3RhcnQsaT1yLmxvb2thaGVhZC0oeC0xKTtyLmluc19oPShyLmluc19oPDxyLmhhc2hfc2hpZnReci53aW5kb3dbbit4LTFdKSZyLmhhc2hfbWFzayxyLnByZXZbbiZyLndfbWFza109ci5oZWFkW3IuaW5zX2hdLHIuaGVhZFtyLmluc19oXT1uLG4rKywtLWk7KTtyLnN0cnN0YXJ0PW4sci5sb29rYWhlYWQ9eC0xLGoocil9cmV0dXJuIHIuc3Ryc3RhcnQrPXIubG9va2FoZWFkLHIuYmxvY2tfc3RhcnQ9ci5zdHJzdGFydCxyLmluc2VydD1yLmxvb2thaGVhZCxyLmxvb2thaGVhZD0wLHIubWF0Y2hfbGVuZ3RoPXIucHJldl9sZW5ndGg9eC0xLHIubWF0Y2hfYXZhaWxhYmxlPTAsZS5uZXh0X2luPW8sZS5pbnB1dD1oLGUuYXZhaWxfaW49YSxyLndyYXA9cyxtfSxyLmRlZmxhdGVJbmZvPVwicGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9tZXNzYWdlc1wiOjUxLFwiLi90cmVlc1wiOjUyfV0sNDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLnRleHQ9MCx0aGlzLnRpbWU9MCx0aGlzLnhmbGFncz0wLHRoaXMub3M9MCx0aGlzLmV4dHJhPW51bGwsdGhpcy5leHRyYV9sZW49MCx0aGlzLm5hbWU9XCJcIix0aGlzLmNvbW1lbnQ9XCJcIix0aGlzLmhjcmM9MCx0aGlzLmRvbmU9ITF9fSx7fV0sNDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQztyPWUuc3RhdGUsbj1lLm5leHRfaW4sej1lLmlucHV0LGk9bisoZS5hdmFpbF9pbi01KSxzPWUubmV4dF9vdXQsQz1lLm91dHB1dCxhPXMtKHQtZS5hdmFpbF9vdXQpLG89cysoZS5hdmFpbF9vdXQtMjU3KSxoPXIuZG1heCx1PXIud3NpemUsbD1yLndoYXZlLGY9ci53bmV4dCxjPXIud2luZG93LGQ9ci5ob2xkLHA9ci5iaXRzLG09ci5sZW5jb2RlLF89ci5kaXN0Y29kZSxnPSgxPDxyLmxlbmJpdHMpLTEsYj0oMTw8ci5kaXN0Yml0cyktMTtlOmRve3A8MTUmJihkKz16W24rK108PHAscCs9OCxkKz16W24rK108PHAscCs9OCksdj1tW2QmZ107dDpmb3IoOzspe2lmKGQ+Pj49eT12Pj4+MjQscC09eSwwPT09KHk9dj4+PjE2JjI1NSkpQ1tzKytdPTY1NTM1JnY7ZWxzZXtpZighKDE2JnkpKXtpZigwPT0oNjQmeSkpe3Y9bVsoNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSB0fWlmKDMyJnkpe3IubW9kZT0xMjticmVhayBlfWUubXNnPVwiaW52YWxpZCBsaXRlcmFsL2xlbmd0aCBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9dz02NTUzNSZ2LCh5Jj0xNSkmJihwPHkmJihkKz16W24rK108PHAscCs9OCksdys9ZCYoMTw8eSktMSxkPj4+PXkscC09eSkscDwxNSYmKGQrPXpbbisrXTw8cCxwKz04LGQrPXpbbisrXTw8cCxwKz04KSx2PV9bZCZiXTtyOmZvcig7Oyl7aWYoZD4+Pj15PXY+Pj4yNCxwLT15LCEoMTYmKHk9dj4+PjE2JjI1NSkpKXtpZigwPT0oNjQmeSkpe3Y9X1soNjU1MzUmdikrKGQmKDE8PHkpLTEpXTtjb250aW51ZSByfWUubXNnPVwiaW52YWxpZCBkaXN0YW5jZSBjb2RlXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoaz02NTUzNSZ2LHA8KHkmPTE1KSYmKGQrPXpbbisrXTw8cCwocCs9OCk8eSYmKGQrPXpbbisrXTw8cCxwKz04KSksaDwoays9ZCYoMTw8eSktMSkpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWsgZX1pZihkPj4+PXkscC09eSwoeT1zLWEpPGspe2lmKGw8KHk9ay15KSYmci5zYW5lKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrXCIsci5tb2RlPTMwO2JyZWFrIGV9aWYoUz1jLCh4PTApPT09Zil7aWYoeCs9dS15LHk8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTt4PXMtayxTPUN9fWVsc2UgaWYoZjx5KXtpZih4Kz11K2YteSwoeS09Zik8dyl7Zm9yKHctPXk7Q1tzKytdPWNbeCsrXSwtLXk7KTtpZih4PTAsZjx3KXtmb3Iody09eT1mO0NbcysrXT1jW3grK10sLS15Oyk7eD1zLWssUz1DfX19ZWxzZSBpZih4Kz1mLXkseTx3KXtmb3Iody09eTtDW3MrK109Y1t4KytdLC0teTspO3g9cy1rLFM9Q31mb3IoOzI8dzspQ1tzKytdPVNbeCsrXSxDW3MrK109U1t4KytdLENbcysrXT1TW3grK10sdy09Mzt3JiYoQ1tzKytdPVNbeCsrXSwxPHcmJihDW3MrK109U1t4KytdKSl9ZWxzZXtmb3IoeD1zLWs7Q1tzKytdPUNbeCsrXSxDW3MrK109Q1t4KytdLENbcysrXT1DW3grK10sMjwody09Myk7KTt3JiYoQ1tzKytdPUNbeCsrXSwxPHcmJihDW3MrK109Q1t4KytdKSl9YnJlYWt9fWJyZWFrfX13aGlsZShuPGkmJnM8byk7bi09dz1wPj4zLGQmPSgxPDwocC09dzw8MykpLTEsZS5uZXh0X2luPW4sZS5uZXh0X291dD1zLGUuYXZhaWxfaW49bjxpP2ktbis1OjUtKG4taSksZS5hdmFpbF9vdXQ9czxvP28tcysyNTc6MjU3LShzLW8pLHIuaG9sZD1kLHIuYml0cz1wfX0se31dLDQ5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIEk9ZShcIi4uL3V0aWxzL2NvbW1vblwiKSxPPWUoXCIuL2FkbGVyMzJcIiksQj1lKFwiLi9jcmMzMlwiKSxSPWUoXCIuL2luZmZhc3RcIiksVD1lKFwiLi9pbmZ0cmVlc1wiKSxEPTEsRj0yLE49MCxVPS0yLFA9MSxuPTg1MixpPTU5MjtmdW5jdGlvbiBMKGUpe3JldHVybihlPj4+MjQmMjU1KSsoZT4+PjgmNjUyODApKygoNjUyODAmZSk8PDgpKygoMjU1JmUpPDwyNCl9ZnVuY3Rpb24gcygpe3RoaXMubW9kZT0wLHRoaXMubGFzdD0hMSx0aGlzLndyYXA9MCx0aGlzLmhhdmVkaWN0PSExLHRoaXMuZmxhZ3M9MCx0aGlzLmRtYXg9MCx0aGlzLmNoZWNrPTAsdGhpcy50b3RhbD0wLHRoaXMuaGVhZD1udWxsLHRoaXMud2JpdHM9MCx0aGlzLndzaXplPTAsdGhpcy53aGF2ZT0wLHRoaXMud25leHQ9MCx0aGlzLndpbmRvdz1udWxsLHRoaXMuaG9sZD0wLHRoaXMuYml0cz0wLHRoaXMubGVuZ3RoPTAsdGhpcy5vZmZzZXQ9MCx0aGlzLmV4dHJhPTAsdGhpcy5sZW5jb2RlPW51bGwsdGhpcy5kaXN0Y29kZT1udWxsLHRoaXMubGVuYml0cz0wLHRoaXMuZGlzdGJpdHM9MCx0aGlzLm5jb2RlPTAsdGhpcy5ubGVuPTAsdGhpcy5uZGlzdD0wLHRoaXMuaGF2ZT0wLHRoaXMubmV4dD1udWxsLHRoaXMubGVucz1uZXcgSS5CdWYxNigzMjApLHRoaXMud29yaz1uZXcgSS5CdWYxNigyODgpLHRoaXMubGVuZHluPW51bGwsdGhpcy5kaXN0ZHluPW51bGwsdGhpcy5zYW5lPTAsdGhpcy5iYWNrPTAsdGhpcy53YXM9MH1mdW5jdGlvbiBhKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPyh0PWUuc3RhdGUsZS50b3RhbF9pbj1lLnRvdGFsX291dD10LnRvdGFsPTAsZS5tc2c9XCJcIix0LndyYXAmJihlLmFkbGVyPTEmdC53cmFwKSx0Lm1vZGU9UCx0Lmxhc3Q9MCx0LmhhdmVkaWN0PTAsdC5kbWF4PTMyNzY4LHQuaGVhZD1udWxsLHQuaG9sZD0wLHQuYml0cz0wLHQubGVuY29kZT10LmxlbmR5bj1uZXcgSS5CdWYzMihuKSx0LmRpc3Rjb2RlPXQuZGlzdGR5bj1uZXcgSS5CdWYzMihpKSx0LnNhbmU9MSx0LmJhY2s9LTEsTik6VX1mdW5jdGlvbiBvKGUpe3ZhciB0O3JldHVybiBlJiZlLnN0YXRlPygodD1lLnN0YXRlKS53c2l6ZT0wLHQud2hhdmU9MCx0LnduZXh0PTAsYShlKSk6VX1mdW5jdGlvbiBoKGUsdCl7dmFyIHIsbjtyZXR1cm4gZSYmZS5zdGF0ZT8obj1lLnN0YXRlLHQ8MD8ocj0wLHQ9LXQpOihyPTErKHQ+PjQpLHQ8NDgmJih0Jj0xNSkpLHQmJih0PDh8fDE1PHQpP1U6KG51bGwhPT1uLndpbmRvdyYmbi53Yml0cyE9PXQmJihuLndpbmRvdz1udWxsKSxuLndyYXA9cixuLndiaXRzPXQsbyhlKSkpOlV9ZnVuY3Rpb24gdShlLHQpe3ZhciByLG47cmV0dXJuIGU/KG49bmV3IHMsKGUuc3RhdGU9bikud2luZG93PW51bGwsKHI9aChlLHQpKSE9PU4mJihlLnN0YXRlPW51bGwpLHIpOlV9dmFyIGwsZixjPSEwO2Z1bmN0aW9uIGooZSl7aWYoYyl7dmFyIHQ7Zm9yKGw9bmV3IEkuQnVmMzIoNTEyKSxmPW5ldyBJLkJ1ZjMyKDMyKSx0PTA7dDwxNDQ7KWUubGVuc1t0KytdPTg7Zm9yKDt0PDI1NjspZS5sZW5zW3QrK109OTtmb3IoO3Q8MjgwOyllLmxlbnNbdCsrXT03O2Zvcig7dDwyODg7KWUubGVuc1t0KytdPTg7Zm9yKFQoRCxlLmxlbnMsMCwyODgsbCwwLGUud29yayx7Yml0czo5fSksdD0wO3Q8MzI7KWUubGVuc1t0KytdPTU7VChGLGUubGVucywwLDMyLGYsMCxlLndvcmsse2JpdHM6NX0pLGM9ITF9ZS5sZW5jb2RlPWwsZS5sZW5iaXRzPTksZS5kaXN0Y29kZT1mLGUuZGlzdGJpdHM9NX1mdW5jdGlvbiBaKGUsdCxyLG4pe3ZhciBpLHM9ZS5zdGF0ZTtyZXR1cm4gbnVsbD09PXMud2luZG93JiYocy53c2l6ZT0xPDxzLndiaXRzLHMud25leHQ9MCxzLndoYXZlPTAscy53aW5kb3c9bmV3IEkuQnVmOChzLndzaXplKSksbj49cy53c2l6ZT8oSS5hcnJheVNldChzLndpbmRvdyx0LHItcy53c2l6ZSxzLndzaXplLDApLHMud25leHQ9MCxzLndoYXZlPXMud3NpemUpOihuPChpPXMud3NpemUtcy53bmV4dCkmJihpPW4pLEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4saSxzLnduZXh0KSwobi09aSk/KEkuYXJyYXlTZXQocy53aW5kb3csdCxyLW4sbiwwKSxzLnduZXh0PW4scy53aGF2ZT1zLndzaXplKToocy53bmV4dCs9aSxzLnduZXh0PT09cy53c2l6ZSYmKHMud25leHQ9MCkscy53aGF2ZTxzLndzaXplJiYocy53aGF2ZSs9aSkpKSwwfXIuaW5mbGF0ZVJlc2V0PW8sci5pbmZsYXRlUmVzZXQyPWgsci5pbmZsYXRlUmVzZXRLZWVwPWEsci5pbmZsYXRlSW5pdD1mdW5jdGlvbihlKXtyZXR1cm4gdShlLDE1KX0sci5pbmZsYXRlSW5pdDI9dSxyLmluZmxhdGU9ZnVuY3Rpb24oZSx0KXt2YXIgcixuLGkscyxhLG8saCx1LGwsZixjLGQscCxtLF8sZyxiLHYseSx3LGsseCxTLHosQz0wLEU9bmV3IEkuQnVmOCg0KSxBPVsxNiwxNywxOCwwLDgsNyw5LDYsMTAsNSwxMSw0LDEyLDMsMTMsMiwxNCwxLDE1XTtpZighZXx8IWUuc3RhdGV8fCFlLm91dHB1dHx8IWUuaW5wdXQmJjAhPT1lLmF2YWlsX2luKXJldHVybiBVOzEyPT09KHI9ZS5zdGF0ZSkubW9kZSYmKHIubW9kZT0xMyksYT1lLm5leHRfb3V0LGk9ZS5vdXRwdXQsaD1lLmF2YWlsX291dCxzPWUubmV4dF9pbixuPWUuaW5wdXQsbz1lLmF2YWlsX2luLHU9ci5ob2xkLGw9ci5iaXRzLGY9byxjPWgseD1OO2U6Zm9yKDs7KXN3aXRjaChyLm1vZGUpe2Nhc2UgUDppZigwPT09ci53cmFwKXtyLm1vZGU9MTM7YnJlYWt9Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMiZyLndyYXAmJjM1NjE1PT09dSl7RVtyLmNoZWNrPTBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSxsPXU9MCxyLm1vZGU9MjticmVha31pZihyLmZsYWdzPTAsci5oZWFkJiYoci5oZWFkLmRvbmU9ITEpLCEoMSZyLndyYXApfHwoKCgyNTUmdSk8PDgpKyh1Pj44KSklMzEpe2UubXNnPVwiaW5jb3JyZWN0IGhlYWRlciBjaGVja1wiLHIubW9kZT0zMDticmVha31pZig4IT0oMTUmdSkpe2UubXNnPVwidW5rbm93biBjb21wcmVzc2lvbiBtZXRob2RcIixyLm1vZGU9MzA7YnJlYWt9aWYobC09NCxrPTgrKDE1Jih1Pj4+PTQpKSwwPT09ci53Yml0cylyLndiaXRzPWs7ZWxzZSBpZihrPnIud2JpdHMpe2UubXNnPVwiaW52YWxpZCB3aW5kb3cgc2l6ZVwiLHIubW9kZT0zMDticmVha31yLmRtYXg9MTw8ayxlLmFkbGVyPXIuY2hlY2s9MSxyLm1vZGU9NTEyJnU/MTA6MTIsbD11PTA7YnJlYWs7Y2FzZSAyOmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHIuZmxhZ3M9dSw4IT0oMjU1JnIuZmxhZ3MpKXtlLm1zZz1cInVua25vd24gY29tcHJlc3Npb24gbWV0aG9kXCIsci5tb2RlPTMwO2JyZWFrfWlmKDU3MzQ0JnIuZmxhZ3Mpe2UubXNnPVwidW5rbm93biBoZWFkZXIgZmxhZ3Mgc2V0XCIsci5tb2RlPTMwO2JyZWFrfXIuaGVhZCYmKHIuaGVhZC50ZXh0PXU+PjgmMSksNTEyJnIuZmxhZ3MmJihFWzBdPTI1NSZ1LEVbMV09dT4+PjgmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsMiwwKSksbD11PTAsci5tb2RlPTM7Y2FzZSAzOmZvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC50aW1lPXUpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxFWzJdPXU+Pj4xNiYyNTUsRVszXT11Pj4+MjQmMjU1LHIuY2hlY2s9QihyLmNoZWNrLEUsNCwwKSksbD11PTAsci5tb2RlPTQ7Y2FzZSA0OmZvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIuaGVhZCYmKHIuaGVhZC54ZmxhZ3M9MjU1JnUsci5oZWFkLm9zPXU+PjgpLDUxMiZyLmZsYWdzJiYoRVswXT0yNTUmdSxFWzFdPXU+Pj44JjI1NSxyLmNoZWNrPUIoci5jaGVjayxFLDIsMCkpLGw9dT0wLHIubW9kZT01O2Nhc2UgNTppZigxMDI0JnIuZmxhZ3Mpe2Zvcig7bDwxNjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIubGVuZ3RoPXUsci5oZWFkJiYoci5oZWFkLmV4dHJhX2xlbj11KSw1MTImci5mbGFncyYmKEVbMF09MjU1JnUsRVsxXT11Pj4+OCYyNTUsci5jaGVjaz1CKHIuY2hlY2ssRSwyLDApKSxsPXU9MH1lbHNlIHIuaGVhZCYmKHIuaGVhZC5leHRyYT1udWxsKTtyLm1vZGU9NjtjYXNlIDY6aWYoMTAyNCZyLmZsYWdzJiYobzwoZD1yLmxlbmd0aCkmJihkPW8pLGQmJihyLmhlYWQmJihrPXIuaGVhZC5leHRyYV9sZW4tci5sZW5ndGgsci5oZWFkLmV4dHJhfHwoci5oZWFkLmV4dHJhPW5ldyBBcnJheShyLmhlYWQuZXh0cmFfbGVuKSksSS5hcnJheVNldChyLmhlYWQuZXh0cmEsbixzLGQsaykpLDUxMiZyLmZsYWdzJiYoci5jaGVjaz1CKHIuY2hlY2ssbixkLHMpKSxvLT1kLHMrPWQsci5sZW5ndGgtPWQpLHIubGVuZ3RoKSlicmVhayBlO3IubGVuZ3RoPTAsci5tb2RlPTc7Y2FzZSA3OmlmKDIwNDgmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5uYW1lKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5uYW1lPW51bGwpO3IubGVuZ3RoPTAsci5tb2RlPTg7Y2FzZSA4OmlmKDQwOTYmci5mbGFncyl7aWYoMD09PW8pYnJlYWsgZTtmb3IoZD0wO2s9bltzK2QrK10sci5oZWFkJiZrJiZyLmxlbmd0aDw2NTUzNiYmKHIuaGVhZC5jb21tZW50Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKGspKSxrJiZkPG87KTtpZig1MTImci5mbGFncyYmKHIuY2hlY2s9QihyLmNoZWNrLG4sZCxzKSksby09ZCxzKz1kLGspYnJlYWsgZX1lbHNlIHIuaGVhZCYmKHIuaGVhZC5jb21tZW50PW51bGwpO3IubW9kZT05O2Nhc2UgOTppZig1MTImci5mbGFncyl7Zm9yKDtsPDE2Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYodSE9PSg2NTUzNSZyLmNoZWNrKSl7ZS5tc2c9XCJoZWFkZXIgY3JjIG1pc21hdGNoXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIuaGVhZCYmKHIuaGVhZC5oY3JjPXIuZmxhZ3M+PjkmMSxyLmhlYWQuZG9uZT0hMCksZS5hZGxlcj1yLmNoZWNrPTAsci5tb2RlPTEyO2JyZWFrO2Nhc2UgMTA6Zm9yKDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9ZS5hZGxlcj1yLmNoZWNrPUwodSksbD11PTAsci5tb2RlPTExO2Nhc2UgMTE6aWYoMD09PXIuaGF2ZWRpY3QpcmV0dXJuIGUubmV4dF9vdXQ9YSxlLmF2YWlsX291dD1oLGUubmV4dF9pbj1zLGUuYXZhaWxfaW49byxyLmhvbGQ9dSxyLmJpdHM9bCwyO2UuYWRsZXI9ci5jaGVjaz0xLHIubW9kZT0xMjtjYXNlIDEyOmlmKDU9PT10fHw2PT09dClicmVhayBlO2Nhc2UgMTM6aWYoci5sYXN0KXt1Pj4+PTcmbCxsLT03Jmwsci5tb2RlPTI3O2JyZWFrfWZvcig7bDwzOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9c3dpdGNoKHIubGFzdD0xJnUsbC09MSwzJih1Pj4+PTEpKXtjYXNlIDA6ci5tb2RlPTE0O2JyZWFrO2Nhc2UgMTppZihqKHIpLHIubW9kZT0yMCw2IT09dClicmVhazt1Pj4+PTIsbC09MjticmVhayBlO2Nhc2UgMjpyLm1vZGU9MTc7YnJlYWs7Y2FzZSAzOmUubXNnPVwiaW52YWxpZCBibG9jayB0eXBlXCIsci5tb2RlPTMwfXU+Pj49MixsLT0yO2JyZWFrO2Nhc2UgMTQ6Zm9yKHU+Pj49NyZsLGwtPTcmbDtsPDMyOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoKDY1NTM1JnUpIT0odT4+PjE2XjY1NTM1KSl7ZS5tc2c9XCJpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzXCIsci5tb2RlPTMwO2JyZWFrfWlmKHIubGVuZ3RoPTY1NTM1JnUsbD11PTAsci5tb2RlPTE1LDY9PT10KWJyZWFrIGU7Y2FzZSAxNTpyLm1vZGU9MTY7Y2FzZSAxNjppZihkPXIubGVuZ3RoKXtpZihvPGQmJihkPW8pLGg8ZCYmKGQ9aCksMD09PWQpYnJlYWsgZTtJLmFycmF5U2V0KGksbixzLGQsYSksby09ZCxzKz1kLGgtPWQsYSs9ZCxyLmxlbmd0aC09ZDticmVha31yLm1vZGU9MTI7YnJlYWs7Y2FzZSAxNzpmb3IoO2w8MTQ7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZihyLm5sZW49MjU3KygzMSZ1KSx1Pj4+PTUsbC09NSxyLm5kaXN0PTErKDMxJnUpLHU+Pj49NSxsLT01LHIubmNvZGU9NCsoMTUmdSksdT4+Pj00LGwtPTQsMjg2PHIubmxlbnx8MzA8ci5uZGlzdCl7ZS5tc2c9XCJ0b28gbWFueSBsZW5ndGggb3IgZGlzdGFuY2Ugc3ltYm9sc1wiLHIubW9kZT0zMDticmVha31yLmhhdmU9MCxyLm1vZGU9MTg7Y2FzZSAxODpmb3IoO3IuaGF2ZTxyLm5jb2RlOyl7Zm9yKDtsPDM7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbnNbQVtyLmhhdmUrK11dPTcmdSx1Pj4+PTMsbC09M31mb3IoO3IuaGF2ZTwxOTspci5sZW5zW0Fbci5oYXZlKytdXT0wO2lmKHIubGVuY29kZT1yLmxlbmR5bixyLmxlbmJpdHM9NyxTPXtiaXRzOnIubGVuYml0c30seD1UKDAsci5sZW5zLDAsMTksci5sZW5jb2RlLDAsci53b3JrLFMpLHIubGVuYml0cz1TLmJpdHMseCl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgbGVuZ3RocyBzZXRcIixyLm1vZGU9MzA7YnJlYWt9ci5oYXZlPTAsci5tb2RlPTE5O2Nhc2UgMTk6Zm9yKDtyLmhhdmU8ci5ubGVuK3IubmRpc3Q7KXtmb3IoO2c9KEM9ci5sZW5jb2RlW3UmKDE8PHIubGVuYml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoYjwxNil1Pj4+PV8sbC09XyxyLmxlbnNbci5oYXZlKytdPWI7ZWxzZXtpZigxNj09PWIpe2Zvcih6PV8rMjtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1pZih1Pj4+PV8sbC09XywwPT09ci5oYXZlKXtlLm1zZz1cImludmFsaWQgYml0IGxlbmd0aCByZXBlYXRcIixyLm1vZGU9MzA7YnJlYWt9az1yLmxlbnNbci5oYXZlLTFdLGQ9MysoMyZ1KSx1Pj4+PTIsbC09Mn1lbHNlIGlmKDE3PT09Yil7Zm9yKHo9XyszO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWwtPV8saz0wLGQ9MysoNyYodT4+Pj1fKSksdT4+Pj0zLGwtPTN9ZWxzZXtmb3Ioej1fKzc7bDx6Oyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9bC09XyxrPTAsZD0xMSsoMTI3Jih1Pj4+PV8pKSx1Pj4+PTcsbC09N31pZihyLmhhdmUrZD5yLm5sZW4rci5uZGlzdCl7ZS5tc2c9XCJpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0XCIsci5tb2RlPTMwO2JyZWFrfWZvcig7ZC0tOylyLmxlbnNbci5oYXZlKytdPWt9fWlmKDMwPT09ci5tb2RlKWJyZWFrO2lmKDA9PT1yLmxlbnNbMjU2XSl7ZS5tc2c9XCJpbnZhbGlkIGNvZGUgLS0gbWlzc2luZyBlbmQtb2YtYmxvY2tcIixyLm1vZGU9MzA7YnJlYWt9aWYoci5sZW5iaXRzPTksUz17Yml0czpyLmxlbmJpdHN9LHg9VChELHIubGVucywwLHIubmxlbixyLmxlbmNvZGUsMCxyLndvcmssUyksci5sZW5iaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGhzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLmRpc3RiaXRzPTYsci5kaXN0Y29kZT1yLmRpc3RkeW4sUz17Yml0czpyLmRpc3RiaXRzfSx4PVQoRixyLmxlbnMsci5ubGVuLHIubmRpc3Qsci5kaXN0Y29kZSwwLHIud29yayxTKSxyLmRpc3RiaXRzPVMuYml0cyx4KXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2VzIHNldFwiLHIubW9kZT0zMDticmVha31pZihyLm1vZGU9MjAsNj09PXQpYnJlYWsgZTtjYXNlIDIwOnIubW9kZT0yMTtjYXNlIDIxOmlmKDY8PW8mJjI1ODw9aCl7ZS5uZXh0X291dD1hLGUuYXZhaWxfb3V0PWgsZS5uZXh0X2luPXMsZS5hdmFpbF9pbj1vLHIuaG9sZD11LHIuYml0cz1sLFIoZSxjKSxhPWUubmV4dF9vdXQsaT1lLm91dHB1dCxoPWUuYXZhaWxfb3V0LHM9ZS5uZXh0X2luLG49ZS5pbnB1dCxvPWUuYXZhaWxfaW4sdT1yLmhvbGQsbD1yLmJpdHMsMTI9PT1yLm1vZGUmJihyLmJhY2s9LTEpO2JyZWFrfWZvcihyLmJhY2s9MDtnPShDPXIubGVuY29kZVt1JigxPDxyLmxlbmJpdHMpLTFdKT4+PjE2JjI1NSxiPTY1NTM1JkMsISgoXz1DPj4+MjQpPD1sKTspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKGcmJjA9PSgyNDAmZykpe2Zvcih2PV8seT1nLHc9YjtnPShDPXIubGVuY29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9XyxyLmxlbmd0aD1iLDA9PT1nKXtyLm1vZGU9MjY7YnJlYWt9aWYoMzImZyl7ci5iYWNrPS0xLHIubW9kZT0xMjticmVha31pZig2NCZnKXtlLm1zZz1cImludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZVwiLHIubW9kZT0zMDticmVha31yLmV4dHJhPTE1Jmcsci5tb2RlPTIyO2Nhc2UgMjI6aWYoci5leHRyYSl7Zm9yKHo9ci5leHRyYTtsPHo7KXtpZigwPT09bylicmVhayBlO28tLSx1Kz1uW3MrK108PGwsbCs9OH1yLmxlbmd0aCs9dSYoMTw8ci5leHRyYSktMSx1Pj4+PXIuZXh0cmEsbC09ci5leHRyYSxyLmJhY2srPXIuZXh0cmF9ci53YXM9ci5sZW5ndGgsci5tb2RlPTIzO2Nhc2UgMjM6Zm9yKDtnPShDPXIuZGlzdGNvZGVbdSYoMTw8ci5kaXN0Yml0cyktMV0pPj4+MTYmMjU1LGI9NjU1MzUmQywhKChfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9aWYoMD09KDI0MCZnKSl7Zm9yKHY9Xyx5PWcsdz1iO2c9KEM9ci5kaXN0Y29kZVt3KygodSYoMTw8dit5KS0xKT4+dildKT4+PjE2JjI1NSxiPTY1NTM1JkMsISh2KyhfPUM+Pj4yNCk8PWwpOyl7aWYoMD09PW8pYnJlYWsgZTtvLS0sdSs9bltzKytdPDxsLGwrPTh9dT4+Pj12LGwtPXYsci5iYWNrKz12fWlmKHU+Pj49XyxsLT1fLHIuYmFjays9Xyw2NCZnKXtlLm1zZz1cImludmFsaWQgZGlzdGFuY2UgY29kZVwiLHIubW9kZT0zMDticmVha31yLm9mZnNldD1iLHIuZXh0cmE9MTUmZyxyLm1vZGU9MjQ7Y2FzZSAyNDppZihyLmV4dHJhKXtmb3Ioej1yLmV4dHJhO2w8ejspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fXIub2Zmc2V0Kz11JigxPDxyLmV4dHJhKS0xLHU+Pj49ci5leHRyYSxsLT1yLmV4dHJhLHIuYmFjays9ci5leHRyYX1pZihyLm9mZnNldD5yLmRtYXgpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9ci5tb2RlPTI1O2Nhc2UgMjU6aWYoMD09PWgpYnJlYWsgZTtpZihkPWMtaCxyLm9mZnNldD5kKXtpZigoZD1yLm9mZnNldC1kKT5yLndoYXZlJiZyLnNhbmUpe2UubXNnPVwiaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2tcIixyLm1vZGU9MzA7YnJlYWt9cD1kPnIud25leHQ/KGQtPXIud25leHQsci53c2l6ZS1kKTpyLnduZXh0LWQsZD5yLmxlbmd0aCYmKGQ9ci5sZW5ndGgpLG09ci53aW5kb3d9ZWxzZSBtPWkscD1hLXIub2Zmc2V0LGQ9ci5sZW5ndGg7Zm9yKGg8ZCYmKGQ9aCksaC09ZCxyLmxlbmd0aC09ZDtpW2ErK109bVtwKytdLC0tZDspOzA9PT1yLmxlbmd0aCYmKHIubW9kZT0yMSk7YnJlYWs7Y2FzZSAyNjppZigwPT09aClicmVhayBlO2lbYSsrXT1yLmxlbmd0aCxoLS0sci5tb2RlPTIxO2JyZWFrO2Nhc2UgMjc6aWYoci53cmFwKXtmb3IoO2w8MzI7KXtpZigwPT09bylicmVhayBlO28tLSx1fD1uW3MrK108PGwsbCs9OH1pZihjLT1oLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsYyYmKGUuYWRsZXI9ci5jaGVjaz1yLmZsYWdzP0Ioci5jaGVjayxpLGMsYS1jKTpPKHIuY2hlY2ssaSxjLGEtYykpLGM9aCwoci5mbGFncz91OkwodSkpIT09ci5jaGVjayl7ZS5tc2c9XCJpbmNvcnJlY3QgZGF0YSBjaGVja1wiLHIubW9kZT0zMDticmVha31sPXU9MH1yLm1vZGU9Mjg7Y2FzZSAyODppZihyLndyYXAmJnIuZmxhZ3Mpe2Zvcig7bDwzMjspe2lmKDA9PT1vKWJyZWFrIGU7by0tLHUrPW5bcysrXTw8bCxsKz04fWlmKHUhPT0oNDI5NDk2NzI5NSZyLnRvdGFsKSl7ZS5tc2c9XCJpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrXCIsci5tb2RlPTMwO2JyZWFrfWw9dT0wfXIubW9kZT0yOTtjYXNlIDI5Ong9MTticmVhayBlO2Nhc2UgMzA6eD0tMzticmVhayBlO2Nhc2UgMzE6cmV0dXJuLTQ7Y2FzZSAzMjpkZWZhdWx0OnJldHVybiBVfXJldHVybiBlLm5leHRfb3V0PWEsZS5hdmFpbF9vdXQ9aCxlLm5leHRfaW49cyxlLmF2YWlsX2luPW8sci5ob2xkPXUsci5iaXRzPWwsKHIud3NpemV8fGMhPT1lLmF2YWlsX291dCYmci5tb2RlPDMwJiYoci5tb2RlPDI3fHw0IT09dCkpJiZaKGUsZS5vdXRwdXQsZS5uZXh0X291dCxjLWUuYXZhaWxfb3V0KT8oci5tb2RlPTMxLC00KTooZi09ZS5hdmFpbF9pbixjLT1lLmF2YWlsX291dCxlLnRvdGFsX2luKz1mLGUudG90YWxfb3V0Kz1jLHIudG90YWwrPWMsci53cmFwJiZjJiYoZS5hZGxlcj1yLmNoZWNrPXIuZmxhZ3M/QihyLmNoZWNrLGksYyxlLm5leHRfb3V0LWMpOk8oci5jaGVjayxpLGMsZS5uZXh0X291dC1jKSksZS5kYXRhX3R5cGU9ci5iaXRzKyhyLmxhc3Q/NjQ6MCkrKDEyPT09ci5tb2RlPzEyODowKSsoMjA9PT1yLm1vZGV8fDE1PT09ci5tb2RlPzI1NjowKSwoMD09ZiYmMD09PWN8fDQ9PT10KSYmeD09PU4mJih4PS01KSx4KX0sci5pbmZsYXRlRW5kPWZ1bmN0aW9uKGUpe2lmKCFlfHwhZS5zdGF0ZSlyZXR1cm4gVTt2YXIgdD1lLnN0YXRlO3JldHVybiB0LndpbmRvdyYmKHQud2luZG93PW51bGwpLGUuc3RhdGU9bnVsbCxOfSxyLmluZmxhdGVHZXRIZWFkZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZSYmZS5zdGF0ZT8wPT0oMiYocj1lLnN0YXRlKS53cmFwKT9VOigoci5oZWFkPXQpLmRvbmU9ITEsTik6VX0sci5pbmZsYXRlU2V0RGljdGlvbmFyeT1mdW5jdGlvbihlLHQpe3ZhciByLG49dC5sZW5ndGg7cmV0dXJuIGUmJmUuc3RhdGU/MCE9PShyPWUuc3RhdGUpLndyYXAmJjExIT09ci5tb2RlP1U6MTE9PT1yLm1vZGUmJk8oMSx0LG4sMCkhPT1yLmNoZWNrPy0zOlooZSx0LG4sbik/KHIubW9kZT0zMSwtNCk6KHIuaGF2ZWRpY3Q9MSxOKTpVfSxyLmluZmxhdGVJbmZvPVwicGFrbyBpbmZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KVwifSx7XCIuLi91dGlscy9jb21tb25cIjo0MSxcIi4vYWRsZXIzMlwiOjQzLFwiLi9jcmMzMlwiOjQ1LFwiLi9pbmZmYXN0XCI6NDgsXCIuL2luZnRyZWVzXCI6NTB9XSw1MDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBEPWUoXCIuLi91dGlscy9jb21tb25cIiksRj1bMyw0LDUsNiw3LDgsOSwxMCwxMSwxMywxNSwxNywxOSwyMywyNywzMSwzNSw0Myw1MSw1OSw2Nyw4Myw5OSwxMTUsMTMxLDE2MywxOTUsMjI3LDI1OCwwLDBdLE49WzE2LDE2LDE2LDE2LDE2LDE2LDE2LDE2LDE3LDE3LDE3LDE3LDE4LDE4LDE4LDE4LDE5LDE5LDE5LDE5LDIwLDIwLDIwLDIwLDIxLDIxLDIxLDIxLDE2LDcyLDc4XSxVPVsxLDIsMyw0LDUsNyw5LDEzLDE3LDI1LDMzLDQ5LDY1LDk3LDEyOSwxOTMsMjU3LDM4NSw1MTMsNzY5LDEwMjUsMTUzNywyMDQ5LDMwNzMsNDA5Nyw2MTQ1LDgxOTMsMTIyODksMTYzODUsMjQ1NzcsMCwwXSxQPVsxNiwxNiwxNiwxNiwxNywxNywxOCwxOCwxOSwxOSwyMCwyMCwyMSwyMSwyMiwyMiwyMywyMywyNCwyNCwyNSwyNSwyNiwyNiwyNywyNywyOCwyOCwyOSwyOSw2NCw2NF07dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLG4saSxzLGEsbyl7dmFyIGgsdSxsLGYsYyxkLHAsbSxfLGc9by5iaXRzLGI9MCx2PTAseT0wLHc9MCxrPTAseD0wLFM9MCx6PTAsQz0wLEU9MCxBPW51bGwsST0wLE89bmV3IEQuQnVmMTYoMTYpLEI9bmV3IEQuQnVmMTYoMTYpLFI9bnVsbCxUPTA7Zm9yKGI9MDtiPD0xNTtiKyspT1tiXT0wO2Zvcih2PTA7djxuO3YrKylPW3Rbcit2XV0rKztmb3Ioaz1nLHc9MTU7MTw9dyYmMD09PU9bd107dy0tKTtpZih3PGsmJihrPXcpLDA9PT13KXJldHVybiBpW3MrK109MjA5NzE1MjAsaVtzKytdPTIwOTcxNTIwLG8uYml0cz0xLDA7Zm9yKHk9MTt5PHcmJjA9PT1PW3ldO3krKyk7Zm9yKGs8eSYmKGs9eSksYj16PTE7Yjw9MTU7YisrKWlmKHo8PD0xLCh6LT1PW2JdKTwwKXJldHVybi0xO2lmKDA8eiYmKDA9PT1lfHwxIT09dykpcmV0dXJuLTE7Zm9yKEJbMV09MCxiPTE7YjwxNTtiKyspQltiKzFdPUJbYl0rT1tiXTtmb3Iodj0wO3Y8bjt2KyspMCE9PXRbcit2XSYmKGFbQlt0W3Irdl1dKytdPXYpO2lmKGQ9MD09PWU/KEE9Uj1hLDE5KToxPT09ZT8oQT1GLEktPTI1NyxSPU4sVC09MjU3LDI1Nik6KEE9VSxSPVAsLTEpLGI9eSxjPXMsUz12PUU9MCxsPS0xLGY9KEM9MTw8KHg9aykpLTEsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7Zm9yKDs7KXtmb3IocD1iLVMsXz1hW3ZdPGQ/KG09MCxhW3ZdKTphW3ZdPmQ/KG09UltUK2Fbdl1dLEFbSSthW3ZdXSk6KG09OTYsMCksaD0xPDxiLVMseT11PTE8PHg7aVtjKyhFPj5TKSsodS09aCldPXA8PDI0fG08PDE2fF98MCwwIT09dTspO2ZvcihoPTE8PGItMTtFJmg7KWg+Pj0xO2lmKDAhPT1oPyhFJj1oLTEsRSs9aCk6RT0wLHYrKywwPT0tLU9bYl0pe2lmKGI9PT13KWJyZWFrO2I9dFtyK2Fbdl1dfWlmKGs8YiYmKEUmZikhPT1sKXtmb3IoMD09PVMmJihTPWspLGMrPXksej0xPDwoeD1iLVMpO3grUzx3JiYhKCh6LT1PW3grU10pPD0wKTspeCsrLHo8PD0xO2lmKEMrPTE8PHgsMT09PWUmJjg1MjxDfHwyPT09ZSYmNTkyPEMpcmV0dXJuIDE7aVtsPUUmZl09azw8MjR8eDw8MTZ8Yy1zfDB9fXJldHVybiAwIT09RSYmKGlbYytFXT1iLVM8PDI0fDY0PDwxNnwwKSxvLmJpdHM9aywwfX0se1wiLi4vdXRpbHMvY29tbW9uXCI6NDF9XSw1MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17MjpcIm5lZWQgZGljdGlvbmFyeVwiLDE6XCJzdHJlYW0gZW5kXCIsMDpcIlwiLFwiLTFcIjpcImZpbGUgZXJyb3JcIixcIi0yXCI6XCJzdHJlYW0gZXJyb3JcIixcIi0zXCI6XCJkYXRhIGVycm9yXCIsXCItNFwiOlwiaW5zdWZmaWNpZW50IG1lbW9yeVwiLFwiLTVcIjpcImJ1ZmZlciBlcnJvclwiLFwiLTZcIjpcImluY29tcGF0aWJsZSB2ZXJzaW9uXCJ9fSx7fV0sNTI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgaT1lKFwiLi4vdXRpbHMvY29tbW9uXCIpLG89MCxoPTE7ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGg7MDw9LS10OyllW3RdPTB9dmFyIHM9MCxhPTI5LHU9MjU2LGw9dSsxK2EsZj0zMCxjPTE5LF89MipsKzEsZz0xNSxkPTE2LHA9NyxtPTI1NixiPTE2LHY9MTcseT0xOCx3PVswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdLGs9WzAsMCwwLDAsMSwxLDIsMiwzLDMsNCw0LDUsNSw2LDYsNyw3LDgsOCw5LDksMTAsMTAsMTEsMTEsMTIsMTIsMTMsMTNdLHg9WzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMiwzLDddLFM9WzE2LDE3LDE4LDAsOCw3LDksNiwxMCw1LDExLDQsMTIsMywxMywyLDE0LDEsMTVdLHo9bmV3IEFycmF5KDIqKGwrMikpO24oeik7dmFyIEM9bmV3IEFycmF5KDIqZik7bihDKTt2YXIgRT1uZXcgQXJyYXkoNTEyKTtuKEUpO3ZhciBBPW5ldyBBcnJheSgyNTYpO24oQSk7dmFyIEk9bmV3IEFycmF5KGEpO24oSSk7dmFyIE8sQixSLFQ9bmV3IEFycmF5KGYpO2Z1bmN0aW9uIEQoZSx0LHIsbixpKXt0aGlzLnN0YXRpY190cmVlPWUsdGhpcy5leHRyYV9iaXRzPXQsdGhpcy5leHRyYV9iYXNlPXIsdGhpcy5lbGVtcz1uLHRoaXMubWF4X2xlbmd0aD1pLHRoaXMuaGFzX3N0cmVlPWUmJmUubGVuZ3RofWZ1bmN0aW9uIEYoZSx0KXt0aGlzLmR5bl90cmVlPWUsdGhpcy5tYXhfY29kZT0wLHRoaXMuc3RhdF9kZXNjPXR9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZTwyNTY/RVtlXTpFWzI1NisoZT4+PjcpXX1mdW5jdGlvbiBVKGUsdCl7ZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109MjU1JnQsZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109dD4+PjgmMjU1fWZ1bmN0aW9uIFAoZSx0LHIpe2UuYmlfdmFsaWQ+ZC1yPyhlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxVKGUsZS5iaV9idWYpLGUuYmlfYnVmPXQ+PmQtZS5iaV92YWxpZCxlLmJpX3ZhbGlkKz1yLWQpOihlLmJpX2J1Znw9dDw8ZS5iaV92YWxpZCY2NTUzNSxlLmJpX3ZhbGlkKz1yKX1mdW5jdGlvbiBMKGUsdCxyKXtQKGUsclsyKnRdLHJbMip0KzFdKX1mdW5jdGlvbiBqKGUsdCl7Zm9yKHZhciByPTA7cnw9MSZlLGU+Pj49MSxyPDw9MSwwPC0tdDspO3JldHVybiByPj4+MX1mdW5jdGlvbiBaKGUsdCxyKXt2YXIgbixpLHM9bmV3IEFycmF5KGcrMSksYT0wO2ZvcihuPTE7bjw9ZztuKyspc1tuXT1hPWErcltuLTFdPDwxO2ZvcihpPTA7aTw9dDtpKyspe3ZhciBvPWVbMippKzFdOzAhPT1vJiYoZVsyKmldPWooc1tvXSsrLG8pKX19ZnVuY3Rpb24gVyhlKXt2YXIgdDtmb3IodD0wO3Q8bDt0KyspZS5keW5fbHRyZWVbMip0XT0wO2Zvcih0PTA7dDxmO3QrKyllLmR5bl9kdHJlZVsyKnRdPTA7Zm9yKHQ9MDt0PGM7dCsrKWUuYmxfdHJlZVsyKnRdPTA7ZS5keW5fbHRyZWVbMiptXT0xLGUub3B0X2xlbj1lLnN0YXRpY19sZW49MCxlLmxhc3RfbGl0PWUubWF0Y2hlcz0wfWZ1bmN0aW9uIE0oZSl7ODxlLmJpX3ZhbGlkP1UoZSxlLmJpX2J1Zik6MDxlLmJpX3ZhbGlkJiYoZS5wZW5kaW5nX2J1ZltlLnBlbmRpbmcrK109ZS5iaV9idWYpLGUuYmlfYnVmPTAsZS5iaV92YWxpZD0wfWZ1bmN0aW9uIEgoZSx0LHIsbil7dmFyIGk9Mip0LHM9MipyO3JldHVybiBlW2ldPGVbc118fGVbaV09PT1lW3NdJiZuW3RdPD1uW3JdfWZ1bmN0aW9uIEcoZSx0LHIpe2Zvcih2YXIgbj1lLmhlYXBbcl0saT1yPDwxO2k8PWUuaGVhcF9sZW4mJihpPGUuaGVhcF9sZW4mJkgodCxlLmhlYXBbaSsxXSxlLmhlYXBbaV0sZS5kZXB0aCkmJmkrKywhSCh0LG4sZS5oZWFwW2ldLGUuZGVwdGgpKTspZS5oZWFwW3JdPWUuaGVhcFtpXSxyPWksaTw8PTE7ZS5oZWFwW3JdPW59ZnVuY3Rpb24gSyhlLHQscil7dmFyIG4saSxzLGEsbz0wO2lmKDAhPT1lLmxhc3RfbGl0KWZvcig7bj1lLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvXTw8OHxlLnBlbmRpbmdfYnVmW2UuZF9idWYrMipvKzFdLGk9ZS5wZW5kaW5nX2J1ZltlLmxfYnVmK29dLG8rKywwPT09bj9MKGUsaSx0KTooTChlLChzPUFbaV0pK3UrMSx0KSwwIT09KGE9d1tzXSkmJlAoZSxpLT1JW3NdLGEpLEwoZSxzPU4oLS1uKSxyKSwwIT09KGE9a1tzXSkmJlAoZSxuLT1UW3NdLGEpKSxvPGUubGFzdF9saXQ7KTtMKGUsbSx0KX1mdW5jdGlvbiBZKGUsdCl7dmFyIHIsbixpLHM9dC5keW5fdHJlZSxhPXQuc3RhdF9kZXNjLnN0YXRpY190cmVlLG89dC5zdGF0X2Rlc2MuaGFzX3N0cmVlLGg9dC5zdGF0X2Rlc2MuZWxlbXMsdT0tMTtmb3IoZS5oZWFwX2xlbj0wLGUuaGVhcF9tYXg9XyxyPTA7cjxoO3IrKykwIT09c1syKnJdPyhlLmhlYXBbKytlLmhlYXBfbGVuXT11PXIsZS5kZXB0aFtyXT0wKTpzWzIqcisxXT0wO2Zvcig7ZS5oZWFwX2xlbjwyOylzWzIqKGk9ZS5oZWFwWysrZS5oZWFwX2xlbl09dTwyPysrdTowKV09MSxlLmRlcHRoW2ldPTAsZS5vcHRfbGVuLS0sbyYmKGUuc3RhdGljX2xlbi09YVsyKmkrMV0pO2Zvcih0Lm1heF9jb2RlPXUscj1lLmhlYXBfbGVuPj4xOzE8PXI7ci0tKUcoZSxzLHIpO2ZvcihpPWg7cj1lLmhlYXBbMV0sZS5oZWFwWzFdPWUuaGVhcFtlLmhlYXBfbGVuLS1dLEcoZSxzLDEpLG49ZS5oZWFwWzFdLGUuaGVhcFstLWUuaGVhcF9tYXhdPXIsZS5oZWFwWy0tZS5oZWFwX21heF09bixzWzIqaV09c1syKnJdK3NbMipuXSxlLmRlcHRoW2ldPShlLmRlcHRoW3JdPj1lLmRlcHRoW25dP2UuZGVwdGhbcl06ZS5kZXB0aFtuXSkrMSxzWzIqcisxXT1zWzIqbisxXT1pLGUuaGVhcFsxXT1pKyssRyhlLHMsMSksMjw9ZS5oZWFwX2xlbjspO2UuaGVhcFstLWUuaGVhcF9tYXhdPWUuaGVhcFsxXSxmdW5jdGlvbihlLHQpe3ZhciByLG4saSxzLGEsbyxoPXQuZHluX3RyZWUsdT10Lm1heF9jb2RlLGw9dC5zdGF0X2Rlc2Muc3RhdGljX3RyZWUsZj10LnN0YXRfZGVzYy5oYXNfc3RyZWUsYz10LnN0YXRfZGVzYy5leHRyYV9iaXRzLGQ9dC5zdGF0X2Rlc2MuZXh0cmFfYmFzZSxwPXQuc3RhdF9kZXNjLm1heF9sZW5ndGgsbT0wO2ZvcihzPTA7czw9ZztzKyspZS5ibF9jb3VudFtzXT0wO2ZvcihoWzIqZS5oZWFwW2UuaGVhcF9tYXhdKzFdPTAscj1lLmhlYXBfbWF4KzE7cjxfO3IrKylwPChzPWhbMipoWzIqKG49ZS5oZWFwW3JdKSsxXSsxXSsxKSYmKHM9cCxtKyspLGhbMipuKzFdPXMsdTxufHwoZS5ibF9jb3VudFtzXSsrLGE9MCxkPD1uJiYoYT1jW24tZF0pLG89aFsyKm5dLGUub3B0X2xlbis9byoocythKSxmJiYoZS5zdGF0aWNfbGVuKz1vKihsWzIqbisxXSthKSkpO2lmKDAhPT1tKXtkb3tmb3Iocz1wLTE7MD09PWUuYmxfY291bnRbc107KXMtLTtlLmJsX2NvdW50W3NdLS0sZS5ibF9jb3VudFtzKzFdKz0yLGUuYmxfY291bnRbcF0tLSxtLT0yfXdoaWxlKDA8bSk7Zm9yKHM9cDswIT09cztzLS0pZm9yKG49ZS5ibF9jb3VudFtzXTswIT09bjspdTwoaT1lLmhlYXBbLS1yXSl8fChoWzIqaSsxXSE9PXMmJihlLm9wdF9sZW4rPShzLWhbMippKzFdKSpoWzIqaV0saFsyKmkrMV09cyksbi0tKX19KGUsdCksWihzLHUsZS5ibF9jb3VudCl9ZnVuY3Rpb24gWChlLHQscil7dmFyIG4saSxzPS0xLGE9dFsxXSxvPTAsaD03LHU9NDtmb3IoMD09PWEmJihoPTEzOCx1PTMpLHRbMioocisxKSsxXT02NTUzNSxuPTA7bjw9cjtuKyspaT1hLGE9dFsyKihuKzEpKzFdLCsrbzxoJiZpPT09YXx8KG88dT9lLmJsX3RyZWVbMippXSs9bzowIT09aT8oaSE9PXMmJmUuYmxfdHJlZVsyKmldKyssZS5ibF90cmVlWzIqYl0rKyk6bzw9MTA/ZS5ibF90cmVlWzIqdl0rKzplLmJsX3RyZWVbMip5XSsrLHM9aSx1PShvPTApPT09YT8oaD0xMzgsMyk6aT09PWE/KGg9NiwzKTooaD03LDQpKX1mdW5jdGlvbiBWKGUsdCxyKXt2YXIgbixpLHM9LTEsYT10WzFdLG89MCxoPTcsdT00O2ZvcigwPT09YSYmKGg9MTM4LHU9Myksbj0wO248PXI7bisrKWlmKGk9YSxhPXRbMioobisxKSsxXSwhKCsrbzxoJiZpPT09YSkpe2lmKG88dSlmb3IoO0woZSxpLGUuYmxfdHJlZSksMCE9LS1vOyk7ZWxzZSAwIT09aT8oaSE9PXMmJihMKGUsaSxlLmJsX3RyZWUpLG8tLSksTChlLGIsZS5ibF90cmVlKSxQKGUsby0zLDIpKTpvPD0xMD8oTChlLHYsZS5ibF90cmVlKSxQKGUsby0zLDMpKTooTChlLHksZS5ibF90cmVlKSxQKGUsby0xMSw3KSk7cz1pLHU9KG89MCk9PT1hPyhoPTEzOCwzKTppPT09YT8oaD02LDMpOihoPTcsNCl9fW4oVCk7dmFyIHE9ITE7ZnVuY3Rpb24gSihlLHQscixuKXtQKGUsKHM8PDEpKyhuPzE6MCksMyksZnVuY3Rpb24oZSx0LHIsbil7TShlKSxuJiYoVShlLHIpLFUoZSx+cikpLGkuYXJyYXlTZXQoZS5wZW5kaW5nX2J1ZixlLndpbmRvdyx0LHIsZS5wZW5kaW5nKSxlLnBlbmRpbmcrPXJ9KGUsdCxyLCEwKX1yLl90cl9pbml0PWZ1bmN0aW9uKGUpe3F8fChmdW5jdGlvbigpe3ZhciBlLHQscixuLGkscz1uZXcgQXJyYXkoZysxKTtmb3Iobj1yPTA7bjxhLTE7bisrKWZvcihJW25dPXIsZT0wO2U8MTw8d1tuXTtlKyspQVtyKytdPW47Zm9yKEFbci0xXT1uLG49aT0wO248MTY7bisrKWZvcihUW25dPWksZT0wO2U8MTw8a1tuXTtlKyspRVtpKytdPW47Zm9yKGk+Pj03O248ZjtuKyspZm9yKFRbbl09aTw8NyxlPTA7ZTwxPDxrW25dLTc7ZSsrKUVbMjU2K2krK109bjtmb3IodD0wO3Q8PWc7dCsrKXNbdF09MDtmb3IoZT0wO2U8PTE0MzspelsyKmUrMV09OCxlKyssc1s4XSsrO2Zvcig7ZTw9MjU1Oyl6WzIqZSsxXT05LGUrKyxzWzldKys7Zm9yKDtlPD0yNzk7KXpbMiplKzFdPTcsZSsrLHNbN10rKztmb3IoO2U8PTI4NzspelsyKmUrMV09OCxlKyssc1s4XSsrO2ZvcihaKHosbCsxLHMpLGU9MDtlPGY7ZSsrKUNbMiplKzFdPTUsQ1syKmVdPWooZSw1KTtPPW5ldyBEKHosdyx1KzEsbCxnKSxCPW5ldyBEKEMsaywwLGYsZyksUj1uZXcgRChuZXcgQXJyYXkoMCkseCwwLGMscCl9KCkscT0hMCksZS5sX2Rlc2M9bmV3IEYoZS5keW5fbHRyZWUsTyksZS5kX2Rlc2M9bmV3IEYoZS5keW5fZHRyZWUsQiksZS5ibF9kZXNjPW5ldyBGKGUuYmxfdHJlZSxSKSxlLmJpX2J1Zj0wLGUuYmlfdmFsaWQ9MCxXKGUpfSxyLl90cl9zdG9yZWRfYmxvY2s9SixyLl90cl9mbHVzaF9ibG9jaz1mdW5jdGlvbihlLHQscixuKXt2YXIgaSxzLGE9MDswPGUubGV2ZWw/KDI9PT1lLnN0cm0uZGF0YV90eXBlJiYoZS5zdHJtLmRhdGFfdHlwZT1mdW5jdGlvbihlKXt2YXIgdCxyPTQwOTM2MjQ0NDc7Zm9yKHQ9MDt0PD0zMTt0Kysscj4+Pj0xKWlmKDEmciYmMCE9PWUuZHluX2x0cmVlWzIqdF0pcmV0dXJuIG87aWYoMCE9PWUuZHluX2x0cmVlWzE4XXx8MCE9PWUuZHluX2x0cmVlWzIwXXx8MCE9PWUuZHluX2x0cmVlWzI2XSlyZXR1cm4gaDtmb3IodD0zMjt0PHU7dCsrKWlmKDAhPT1lLmR5bl9sdHJlZVsyKnRdKXJldHVybiBoO3JldHVybiBvfShlKSksWShlLGUubF9kZXNjKSxZKGUsZS5kX2Rlc2MpLGE9ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKFgoZSxlLmR5bl9sdHJlZSxlLmxfZGVzYy5tYXhfY29kZSksWChlLGUuZHluX2R0cmVlLGUuZF9kZXNjLm1heF9jb2RlKSxZKGUsZS5ibF9kZXNjKSx0PWMtMTszPD10JiYwPT09ZS5ibF90cmVlWzIqU1t0XSsxXTt0LS0pO3JldHVybiBlLm9wdF9sZW4rPTMqKHQrMSkrNSs1KzQsdH0oZSksaT1lLm9wdF9sZW4rMys3Pj4+Mywocz1lLnN0YXRpY19sZW4rMys3Pj4+Myk8PWkmJihpPXMpKTppPXM9cis1LHIrNDw9aSYmLTEhPT10P0ooZSx0LHIsbik6ND09PWUuc3RyYXRlZ3l8fHM9PT1pPyhQKGUsMisobj8xOjApLDMpLEsoZSx6LEMpKTooUChlLDQrKG4/MTowKSwzKSxmdW5jdGlvbihlLHQscixuKXt2YXIgaTtmb3IoUChlLHQtMjU3LDUpLFAoZSxyLTEsNSksUChlLG4tNCw0KSxpPTA7aTxuO2krKylQKGUsZS5ibF90cmVlWzIqU1tpXSsxXSwzKTtWKGUsZS5keW5fbHRyZWUsdC0xKSxWKGUsZS5keW5fZHRyZWUsci0xKX0oZSxlLmxfZGVzYy5tYXhfY29kZSsxLGUuZF9kZXNjLm1heF9jb2RlKzEsYSsxKSxLKGUsZS5keW5fbHRyZWUsZS5keW5fZHRyZWUpKSxXKGUpLG4mJk0oZSl9LHIuX3RyX3RhbGx5PWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZS5wZW5kaW5nX2J1ZltlLmRfYnVmKzIqZS5sYXN0X2xpdF09dD4+PjgmMjU1LGUucGVuZGluZ19idWZbZS5kX2J1ZisyKmUubGFzdF9saXQrMV09MjU1JnQsZS5wZW5kaW5nX2J1ZltlLmxfYnVmK2UubGFzdF9saXRdPTI1NSZyLGUubGFzdF9saXQrKywwPT09dD9lLmR5bl9sdHJlZVsyKnJdKys6KGUubWF0Y2hlcysrLHQtLSxlLmR5bl9sdHJlZVsyKihBW3JdK3UrMSldKyssZS5keW5fZHRyZWVbMipOKHQpXSsrKSxlLmxhc3RfbGl0PT09ZS5saXRfYnVmc2l6ZS0xfSxyLl90cl9hbGlnbj1mdW5jdGlvbihlKXtQKGUsMiwzKSxMKGUsbSx6KSxmdW5jdGlvbihlKXsxNj09PWUuYmlfdmFsaWQ/KFUoZSxlLmJpX2J1ZiksZS5iaV9idWY9MCxlLmJpX3ZhbGlkPTApOjg8PWUuYmlfdmFsaWQmJihlLnBlbmRpbmdfYnVmW2UucGVuZGluZysrXT0yNTUmZS5iaV9idWYsZS5iaV9idWY+Pj04LGUuYmlfdmFsaWQtPTgpfShlKX19LHtcIi4uL3V0aWxzL2NvbW1vblwiOjQxfV0sNTM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLmlucHV0PW51bGwsdGhpcy5uZXh0X2luPTAsdGhpcy5hdmFpbF9pbj0wLHRoaXMudG90YWxfaW49MCx0aGlzLm91dHB1dD1udWxsLHRoaXMubmV4dF9vdXQ9MCx0aGlzLmF2YWlsX291dD0wLHRoaXMudG90YWxfb3V0PTAsdGhpcy5tc2c9XCJcIix0aGlzLnN0YXRlPW51bGwsdGhpcy5kYXRhX3R5cGU9Mix0aGlzLmFkbGVyPTB9fSx7fV0sNTQ6W2Z1bmN0aW9uKGUsdCxyKXsoZnVuY3Rpb24oZSl7IWZ1bmN0aW9uKHIsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIXIuc2V0SW1tZWRpYXRlKXt2YXIgaSxzLHQsYSxvPTEsaD17fSx1PSExLGw9ci5kb2N1bWVudCxlPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpO2U9ZSYmZS5zZXRUaW1lb3V0P2U6cixpPVwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChyLnByb2Nlc3MpP2Z1bmN0aW9uKGUpe3Byb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKXtjKGUpfSl9OmZ1bmN0aW9uKCl7aWYoci5wb3N0TWVzc2FnZSYmIXIuaW1wb3J0U2NyaXB0cyl7dmFyIGU9ITAsdD1yLm9ubWVzc2FnZTtyZXR1cm4gci5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtlPSExfSxyLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLHIub25tZXNzYWdlPXQsZX19KCk/KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixyLmFkZEV2ZW50TGlzdGVuZXI/ci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGQsITEpOnIuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixkKSxmdW5jdGlvbihlKXtyLnBvc3RNZXNzYWdlKGErZSxcIipcIil9KTpyLk1lc3NhZ2VDaGFubmVsPygodD1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtjKGUuZGF0YSl9LGZ1bmN0aW9uKGUpe3QucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTpsJiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gbC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhzPWwuZG9jdW1lbnRFbGVtZW50LGZ1bmN0aW9uKGUpe3ZhciB0PWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2MoZSksdC5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxzLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH0scy5hcHBlbmRDaGlsZCh0KX0pOmZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoYywwLGUpfSxlLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdPWFyZ3VtZW50c1tyKzFdO3ZhciBuPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGhbb109bixpKG8pLG8rK30sZS5jbGVhckltbWVkaWF0ZT1mfWZ1bmN0aW9uIGYoZSl7ZGVsZXRlIGhbZV19ZnVuY3Rpb24gYyhlKXtpZih1KXNldFRpbWVvdXQoYywwLGUpO2Vsc2V7dmFyIHQ9aFtlXTtpZih0KXt1PSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxyPWUuYXJncztzd2l0Y2goci5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoclswXSk7YnJlYWs7Y2FzZSAyOnQoclswXSxyWzFdKTticmVhaztjYXNlIDM6dChyWzBdLHJbMV0sclsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KG4scil9fSh0KX1maW5hbGx5e2YoZSksdT0hMX19fX1mdW5jdGlvbiBkKGUpe2Uuc291cmNlPT09ciYmXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PWUuZGF0YS5pbmRleE9mKGEpJiZjKCtlLmRhdGEuc2xpY2UoYS5sZW5ndGgpKX19KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP3ZvaWQgMD09PWU/dGhpczplOnNlbGYpfSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7fV19LHt9LFsxMF0pKDEwKX0pOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgbmF2LCByZWZpbmVtZW50X29wdGlvbiwgcmVjaXBlcyB9IGZyb20gJy4vcmVjaXBlX25ldydcbmltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCdcbmltcG9ydCB7IHVwZGF0ZV9pY29uIH0gZnJvbSAnLi91dGlscy91dGlsJ1xuaW1wb3J0IHsgc2hvdWxkRXhjbHVkZSB9IGZyb20gJy4vdXRpbHMvdXRpbCdcblxubGV0IGludGVyYWN0aW9uczogYW55W10gPSBbXVxubGV0IHNjcmVlbnNob3RzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXVxubGV0IHJlYXNvbnNBbm5vdGF0aW9uOiBhbnlbXSA9IFtdXG5sZXQgYWN0aW9uU2VxdWVuY2VJZCA9IDBcbmxldCB1cGxvYWRUaW1lcjogTm9kZUpTLlRpbWVyIHwgbnVsbCB8IGZhbHNlID0gbnVsbFxubGV0IHVzZXJJZDogc3RyaW5nID0gJydcblxubGV0IGxhc3RUaW1lc3RhbXA6IHN0cmluZyB8IG51bGwgPSBudWxsXG5sZXQgbGFzdHVwbG9hZFRpbWVzdGFtcDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbmxldCBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U6IHtcbiAgdXJsOiBzdHJpbmdcbiAgZmllbGRzOiB7IGtleTogc3RyaW5nOyBBV1NBY2Nlc3NLZXlJZDogc3RyaW5nOyBwb2xpY3k6IHN0cmluZzsgc2lnbmF0dXJlOiBzdHJpbmcgfVxuICB0aW1lc3RhbXA6IG51bWJlclxufSB8IG51bGwgPSBudWxsXG5cbmltcG9ydCB7XG4gIHBvcHVwX3Byb2JhYmlsaXR5LFxuICBmb2xkZXJfbmFtZSxcbiAgemlwLFxuICBiYXNlX3VybCxcbiAgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkLFxuICBmaWx0ZXJfdXJsXG59IGZyb20gJy4vY29uZmlnJ1xuXG5jb25zdCB1cGxvYWRfdXJsID0gYCR7YmFzZV91cmx9L3VwbG9hZGBcbmNvbnN0IGludGVyYWN0aW9uc191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYFxuY29uc3QgZ2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RfdXJsID0gYCR7YmFzZV91cmx9L2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0YFxuXG5pbnRlcmZhY2UgVGFiSGlzdG9yeSB7XG4gIGJhY2tTdGFjazogc3RyaW5nW11cbiAgZm9yd2FyZFN0YWNrOiBzdHJpbmdbXVxuICBjdXJyZW50VXJsOiBzdHJpbmcgfCBudWxsXG59XG5cbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5OiB7XG4gIFt0YWJJZDogbnVtYmVyXTogVGFiSGlzdG9yeVxufSA9IHt9XG5cbmZ1bmN0aW9uIGFuYWx5emVOYXZpZ2F0aW9uKHRhYklkOiBudW1iZXIsIHVybDogc3RyaW5nKTogJ25ldycgfCAnYmFjaycgfCAnZm9yd2FyZCcgfCAncmVsb2FkJyB7XG4gIGlmICghdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdKSB7XG4gICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGlzdG9yeSA9IHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXVxuXG4gIGlmICghaGlzdG9yeS5jdXJyZW50VXJsKSB7XG4gICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsXG4gICAgcmV0dXJuICduZXcnXG4gIH1cbiAgaWYgKGhpc3RvcnkuY3VycmVudFVybCA9PT0gdXJsKSB7XG4gICAgcmV0dXJuICdyZWxvYWQnXG4gIH1cblxuICBpZiAoaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoID4gMCAmJiBoaXN0b3J5LmJhY2tTdGFja1toaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsKSB7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwhKVxuICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuYmFja1N0YWNrLnBvcCgpIVxuICAgIHJldHVybiAnYmFjaydcbiAgfVxuXG4gIGlmIChcbiAgICBoaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggPiAwICYmXG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybFxuICApIHtcbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCEpXG4gICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5mb3J3YXJkU3RhY2sucG9wKCkhXG4gICAgcmV0dXJuICdmb3J3YXJkJ1xuICB9XG5cbiAgaGlzdG9yeS5iYWNrU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwhKVxuICBoaXN0b3J5LmZvcndhcmRTdGFjayA9IFtdXG4gIGhpc3RvcnkuY3VycmVudFVybCA9IHVybFxuICByZXR1cm4gJ25ldydcbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5mdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGU6IHN0cmluZywgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlICdjbGlja19hJzpcbiAgICBjYXNlICdjbGlja19iJzpcbiAgICBjYXNlICdjbGlja19jJzpcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICBpZiAoZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdycpIHtcbiAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgY2hvb3NlICdTZXQgVXAgTm93JyBpbnN0ZWFkIG9mIGJ1eSBvbmNlLCBhbmQgd2h5IGRvIHlvdSBsaWtlIHRoaXMgcGFydGljdWxhciBwcm9kdWN0P1wiXG4gICAgICB9IGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgY2hvb3NlIHRvIGJ1eSB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHksIGFuZCB3aGF0IGNvbnZpbmNlZCB5b3UgdG8gc2tpcCBmdXJ0aGVyIGV4cGxvcmF0aW9uIG9mIG90aGVyIG9wdGlvbnM/IFdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD8nXG4gICAgICB9IGVsc2UgaWYgKGRhdGEudGFyZ2V0LmNsYXNzTmFtZT8uaW5jbHVkZXMoJ3NjLXByb2R1Y3QtbGluaycpKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBtYWRlIHlvdSBjbGljayBvbiB0aGlzIHByb2R1Y3QsIGFuZCB3aGF0IHNwZWNpZmljIGFzcGVjdHMgYXR0cmFjdGVkIHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIG90aGVyIHNlYXJjaCByZXN1bHRzPydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGFkZCB0aGlzIGl0ZW0gdG8geW91ciBjYXJ0LCBhbmQgYXJlIHlvdSBwbGFubmluZyB0byBidXkgaXQgbm93IG9yIGxhdGVyPyBXaGF0IGNvbnZpbmNlZCB5b3UgdGhhdCB0aGlzIGl0ZW0gd2FzIHRoZSByaWdodCBjaG9pY2UgZm9yIHlvdXIgbmVlZHM/J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IHdhcyB5b3VyIHJlYXNvbiBmb3IgY2xpY2tpbmcgb24gdGhpcyBlbGVtZW50PydcbiAgICAgIH1cbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3UgZG9pbmcgd2hpbGUgc2Nyb2xsaW5n4oCUYXJlIHlvdSBicm93c2luZyBzZWFyY2ggcmVzdWx0cywgbG9va2luZyBhdCByZXZpZXdzLCBvciBzb21ldGhpbmcgZWxzZSwgYW5kIHdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZD8nXG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciwgYW5kIGhvdyBkaWQgeW91IGRlY2lkZSBvbiB0aGUgc2VhcmNoIHRlcm1zIHlvdSB1c2VkPyBBcmUgeW91IGxvb2tpbmcgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdCwgYnJhbmQsIG9yIGZlYXR1cmU/J1xuICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBnbyBiYWNrIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBhbmQgd2hhdCB3ZXJlIHlvdSBob3BpbmcgdG8gcmV2aXNpdCBvciByZWNvbnNpZGVyPydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIHJldHVybiB0byB0aGlzIHBhZ2UgYWZ0ZXIgcHJldmlvdXNseSBuYXZpZ2F0aW5nIGF3YXksIGFuZCB3aGF0IG5ldyBvciB1bnJlc29sdmVkIGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3Igbm93PydcbiAgICAgIH1cbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzICR7ZGF0YS5uYXZpZ2F0aW9uVHlwZX0gbmF2aWdhdGlvbj9gXG4gICAgY2FzZSAndGFiQWN0aXZhdGUnOlxuICAgICAgcmV0dXJuIGBXaHkgZGlkIHlvdSBzd2l0Y2ggdG8gdGhpcyB0YWI/IERvIHlvdSBoYXZlIHNwZWNpZmljIHRhc2sgb3IgaW5mb3JtYXRpb24gaW4gbWluZD9gXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gIH1cbn1cblxuLy8gQWRkIG5ldyBmdW5jdGlvbiB0byBoYW5kbGUgc2NyZWVuc2hvdCBzYXZpbmdcbmFzeW5jIGZ1bmN0aW9uIHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmw6IHN0cmluZywgc2NyZWVuc2hvdElkOiBzdHJpbmcpIHtcbiAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIHNjcmVlbnNob3RzIGZyb20gc3RvcmFnZVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHJlc3VsdC5zY3JlZW5zaG90cyB8fCBbXVxuXG4gICAgLy8gQWRkIG5ldyBzY3JlZW5zaG90XG4gICAgc3RvcmVTY3JlZW5zaG90cy5wdXNoKFtzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkXSlcblxuICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2NyZWVuc2hvdHM6IHN0b3JlU2NyZWVuc2hvdHMgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIDsoYXN5bmMgKCkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NhdmVEYXRhJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrXG4gICAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50YWN0aW9uU2VxdWVuY2VJZClcbiAgICAgICAgLy8gbWVzc2FnZS5kYXRhLmFjdGlvblNlcXVlbmNlSWQgPSBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZFxuICAgICAgICBjb25zdCB1dWlkID0gbWVzc2FnZS5kYXRhLnV1aWRcbiAgICAgICAgY29uc3Qgc2F2ZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVEYXRhICcsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUpXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgICAgICAgcmVzdWx0LnB1c2gobWVzc2FnZS5kYXRhKVxuICAgICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogcmVzdWx0IH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8gcG9wdXBcbiAgICAgICAgLy8gYXdhaXQgc2VuZFBvcHVwKHNlbmRlci50YWI/LmlkLCBtZXNzYWdlLmRhdGEudGltZXN0YW1wLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgc2F2ZURhdGEoKSxcbiAgICAgICAgICBzZW5kUG9wdXAoXG4gICAgICAgICAgICBzZW5kZXIudGFiPy5pZCxcbiAgICAgICAgICAgIG1lc3NhZ2UuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLFxuICAgICAgICAgICAgLy8gY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICBtZXNzYWdlLmRhdGEsXG4gICAgICAgICAgICB1dWlkXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzYXZlRGF0YTonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlIC8vIEtlZXAgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgfVxuXG4gICAgLy8gQ2FwdHVyZSBzY3JlZW5zaG90IG9uIGRlbWFuZFxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NhcHR1cmVTY3JlZW5zaG90Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldCBzY3JlZW5zaG90IHJlcXVlc3QnKVxuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSBhd2FpdCBjYXB0dXJlU2NyZWVuc2hvdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXB0dXJlIHNjcmVlbnNob3QgdGltZTogJywgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydF90aW1lKVxuICAgICAgICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgbWVzc2FnZS5zY3JlZW5zaG90SWQpXG4gICAgICAgICAgY29uc29sZS5sb2coJ3NhdmUgc2NyZWVuc2hvdCBzdWNjZXNzJywgc3VjY2VzcylcbiAgICAgICAgICBjb25zb2xlLmxvZygndGltZTogJywgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydF90aW1lKVxuICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICBzdWNjZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogc3VjY2VzcyA/IHVuZGVmaW5lZCA6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjYXB0dXJlU2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBEb3dubG9hZCBkYXRhIG9uIHVzZXIgcmVxdWVzdFxuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2Rvd25sb2FkRGF0YScpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZERhdGEnKVxuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgZG93bmxvYWREYXRhTG9jYWxseSgpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3MgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKVxuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IChlcnJvciBhcyBFcnJvcikubWVzc2FnZSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjbGVhck1lbW9yeUNhY2hlJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW50ZXJhY3Rpb25zID0gW11cbiAgICAgICAgc2NyZWVuc2hvdHMgPSBbXVxuICAgICAgICByZWFzb25zQW5ub3RhdGlvbiA9IFtdXG4gICAgICAgIGFjdGlvblNlcXVlbmNlSWQgPSAwXG4gICAgICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDBcbiAgICAgICAgcmVhc29uc0Fubm90YXRpb24ubGVuZ3RoID0gMFxuXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGNsZWFyTWVtb3J5Q2FjaGU6JywgZXJyb3IpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfSkoKVxuICByZXR1cm4gdHJ1ZSAvLyBLZWVwcyB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlc1xufSlcblxuLy8gQ2FwdHVyZSB0aGUgc2NyZWVuc2hvdCBpbiB0aGUgY3VycmVudCB0YWJcbmFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KCkge1xuICB0cnkge1xuICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSlcbiAgICBpZiAodGFiKSB7XG4gICAgICByZXR1cm4gYXdhaXQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7XG4gICAgICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgICAgICBxdWFsaXR5OiAyNVxuICAgICAgfSlcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IGhhc2ggPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCB8PSAwXG4gIH1cbiAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICByZXR1cm4gaGFzaC50b1N0cmluZygpXG59XG5cbmNvbnN0IHNhdmVIVE1MID0gYXN5bmMgKGh0bWxDb250ZW50OiBzdHJpbmcsIHNpbXBsaWZpZWRIVE1MOiBzdHJpbmcsIGN1cnJlbnRTbmFwc2hvdElkOiBzdHJpbmcpID0+IHtcbiAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IHt9IH0pXG4gIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fVxuICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGh0bWxDb250ZW50XG4gIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWQgKyAnX3NpbXBsaWZpZWQnXSA9IHNpbXBsaWZpZWRIVE1MXG4gIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSlcbn1cblxuY29uc3Qgc2F2ZUludGVyYWN0aW9uID0gYXN5bmMgKFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgdGltZXN0YW1wOiBzdHJpbmcsXG4gIHRhcmdldF91cmw6IHN0cmluZyxcbiAgaHRtbFNuYXBzaG90SWQ6IHN0cmluZyxcbiAgY3VycmVudGFjdGlvblNlcXVlbmNlSWQ6IG51bWJlcixcbiAgdXVpZDogc3RyaW5nLFxuICBuYXZpZ2F0aW9uVHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gIHBhZ2VNZXRhOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZXZlbnRUeXBlLFxuICAgIHRpbWVzdGFtcCxcbiAgICB0YXJnZXRfdXJsLFxuICAgIGh0bWxTbmFwc2hvdElkLFxuICAgIC8vIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgIHV1aWQsXG4gICAgcGFnZU1ldGFcbiAgfVxuXG4gIC8vIEFkZCBuYXZpZ2F0aW9uVHlwZSBvbmx5IGlmIGl0IGV4aXN0c1xuICBpZiAobmF2aWdhdGlvblR5cGUpIHtcbiAgICBkYXRhWyduYXZpZ2F0aW9uVHlwZSddID0gbmF2aWdhdGlvblR5cGVcbiAgfVxuXG4gIGxldCBpbnRlcmFjdGlvbnMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4gIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0aW9ucy5pbnRlcmFjdGlvbnMgfHwgW11cbiAgc3RvcmVJbnRlcmFjdGlvbnMucHVzaChkYXRhKVxuICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zIH0pXG59XG5cbmNvbnN0IHNhdmVTY3JlZW5zaG90ID0gYXN5bmMgKHdpbmRvd0lkOiBudW1iZXIsIHRpbWVzdGFtcDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSBhd2FpdCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih3aW5kb3dJZCwge1xuICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgIHF1YWxpdHk6IDI1XG4gIH0pXG5cbiAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4gIGF3YWl0IHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZClcbn1cbmNvbnN0IHNlbmRQb3B1cCA9IGFzeW5jIChcbiAgdGFiSWQ6IG51bWJlcixcbiAgdGltZXN0YW1wOiBzdHJpbmcsXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICAvLyBhY3Rpb25fdXVpZDogc3RyaW5nLFxuICBkYXRhOiBhbnksXG4gIHV1aWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGlmIChcbiAgICBkYXRhLnRhcmdldD8uaWQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3J1ZnVzJykgfHxcbiAgICBkYXRhLnRhcmdldD8uY2xhc3NOYW1lPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdydWZ1cycpXG4gICkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlLCBkYXRhKVxuICBpZiAoTWF0aC5yYW5kb20oKSA8IHBvcHVwX3Byb2JhYmlsaXR5ICYmIHRhYklkKSB7XG4gICAgY29uc29sZS5sb2coJ3NlbmQgcG9wdXAnKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWFzb24gPSBhd2FpdCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBhY3Rpb246ICdzaG93X3BvcHVwJyxcbiAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ3JlYXNvbicsIHJlYXNvbilcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgYWN0aW9uX3V1aWQ6IHV1aWQsXG4gICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgcmVhc29uOiByZWFzb25cbiAgICAgICAgICAvLyB1dWlkOiB1dWlkXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHJlc3VsdC5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuICAgICAgICAvLyBBZGQgbmV3IHJlYXNvblxuICAgICAgICBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLnB1c2gobmV3aXRlbSlcbiAgICAgICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVhc29uc0Fubm90YXRpb246IHN0b3JlUmVhc29uc0Fubm90YXRpb24gfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9wdXA6JywgZXJyb3IpXG4gICAgfVxuICB9XG59XG5cbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhc3luYyAoYWN0aXZlSW5mbykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRhYklkID0gYWN0aXZlSW5mby50YWJJZFxuICAgIGNvbnN0IHRhYiA9IGF3YWl0IGNocm9tZS50YWJzLmdldCh0YWJJZClcbiAgICBpZiAoIXRhYikge1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBTd2l0Y2hlZCB0byB0YWIgJHt0YWJJZH0gd2l0aCBVUkw6ICR7dGFiLnVybH1gKVxuICAgIHVwZGF0ZV9pY29uKHRhYi51cmwpXG4gICAgaWYgKHRhYi51cmwgJiYgIShhd2FpdCBzaG91bGRFeGNsdWRlKHRhYi51cmwpKSkge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZSh0YWIudXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG5cbiAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7IGFjdGlvbjogJ2dldEhUTUwnIH0sIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlPy5odG1sXG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcmVzcG9uc2U/LnNpbXBsaWZpZWRIVE1MXG4gICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gcmVzcG9uc2U/LnBhZ2VNZXRhXG4gICAgICAgIGFjdGlvblNlcXVlbmNlSWQrK1xuICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWRcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIHNpbXBsaWZpZWRIVE1MLCBjdXJyZW50U25hcHNob3RJZCksXG4gICAgICAgICAgc2F2ZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgJ3RhYkFjdGl2YXRlJyxcbiAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgIHRhYi51cmwsXG4gICAgICAgICAgICBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgdXVpZCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBwYWdlTWV0YVxuICAgICAgICAgICksXG4gICAgICAgICAgc2F2ZVNjcmVlbnNob3QodGFiLndpbmRvd0lkLCB0aW1lc3RhbXAsIHV1aWQpLFxuICAgICAgICAgIHNlbmRQb3B1cCh0YWJJZCwgdGltZXN0YW1wLCAndGFiQWN0aXZhdGUnLCB7fSwgdXVpZClcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHRhYiBhY3RpdmF0ZSBoYW5kbGVyOicsIGVycm9yKVxuICB9XG59KVxuXG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcihhc3luYyAoZGV0YWlscykgPT4ge1xuICBpZiAoZGV0YWlscy5mcmFtZUlkICE9PSAwKSByZXR1cm5cbiAgY29uc29sZS5sb2coJ3dlYk5hdmlnYXRpb24gb25IaXN0b3J5U3RhdGVVcGRhdGVkIGV2ZW50IHRyaWdnZXJlZDonLCBkZXRhaWxzKVxuICB1cGRhdGVfaWNvbihkZXRhaWxzLnVybClcbiAgaWYgKCEoYXdhaXQgc2hvdWxkRXhjbHVkZShkZXRhaWxzLnVybCkpKSB7XG4gICAgLy8gY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdwcm9jZXNzUmVjaXBlJyB9KVxuXG4gICAgY29uc3QgbmF2aWdhdGlvblR5cGUgPSBhbmFseXplTmF2aWdhdGlvbihkZXRhaWxzLnRhYklkLCBkZXRhaWxzLnVybClcbiAgICBjb25zb2xlLmxvZyhgTmF2aWdhdGlvbiB0eXBlOiAke25hdmlnYXRpb25UeXBlfSBmb3IgdGFiICR7ZGV0YWlscy50YWJJZH0gdG8gJHtkZXRhaWxzLnVybH1gKVxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGRldGFpbHMudGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlPy5odG1sXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHJlc3BvbnNlPy5zaW1wbGlmaWVkSFRNTFxuICAgICAgY29uc3QgcGFnZU1ldGEgPSByZXNwb25zZT8ucGFnZU1ldGFcbiAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrXG4gICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWRcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIHNpbXBsaWZpZWRIVE1MLCBjdXJyZW50U25hcHNob3RJZCksXG4gICAgICAgIHNhdmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAnbmF2aWdhdGlvbicsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgIGRldGFpbHMudXJsLFxuICAgICAgICAgIGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICAgIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgIHV1aWQsXG4gICAgICAgICAgbmF2aWdhdGlvblR5cGUsXG4gICAgICAgICAgcGFnZU1ldGFcbiAgICAgICAgKSxcbiAgICAgICAgc2F2ZVNjcmVlbnNob3QoKGF3YWl0IGNocm9tZS50YWJzLmdldChkZXRhaWxzLnRhYklkKSkud2luZG93SWQsIHRpbWVzdGFtcCwgdXVpZClcbiAgICAgIF0pXG4gICAgICBpZiAobmF2aWdhdGlvblR5cGUgIT09ICduZXcnICYmIG5hdmlnYXRpb25UeXBlICE9PSAncmVsb2FkJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtZXNzYWdlIHRvIHBvcHVwIG5hdmlnYXRpb24nKVxuICAgICAgICBhd2FpdCBzZW5kUG9wdXAoXG4gICAgICAgICAgZGV0YWlscy50YWJJZCxcbiAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgJ25hdmlnYXRpb24nLFxuICAgICAgICAgIC8vIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25UeXBlOiBuYXZpZ2F0aW9uVHlwZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXVpZFxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuLy8gQWRkIGNsZWFudXAgd2hlbiB0YWIgaXMgY2xvc2VkXG5jaHJvbWUudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKHRhYklkKSA9PiB7XG4gIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF1cbn0pXG5cbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuYXN5bmMgZnVuY3Rpb24gZG93bmxvYWREYXRhTG9jYWxseSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpXG5cbiAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSlcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZFxuXG4gICAgbGV0IHVzZXJfaWQgPSBjdXJyZW50VXNlcklkIHx8ICd1bmtub3duJ1xuXG4gICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSXyR7dXNlcl9pZH0vU0VTU0lPTl8ke3RpbWVzdGFtcH1gXG5cbiAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IGludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgbGV0IGh0bWxTbmFwc2hvdHMgPSBzbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuICAgIGxldCBzdG9yZU9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHNjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgIC8vIGNvbmNhdGVuYXRpbmcgd2l0aCB0aGUgc2VlbiBkYXRhXG4gICAgY29uc3Qgc2Vlbl9pbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faW50ZXJhY3Rpb25zOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9odG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IFtdIH0pXG4gICAgY29uc3Qgc2Vlbl9zY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3NjcmVlbnNob3RzOiBbXSB9KVxuICAgIGNvbnN0IHNlZW5fUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgbGV0IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBzZWVuX2ludGVyYWN0LnNlZW5faW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgbGV0IHNlZW5faHRtbFNuYXBzaG90cyA9IHNlZW5fc25hcHNob3RzLnNlZW5faHRtbFNuYXBzaG90cyB8fCB7fVxuICAgIGxldCBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gc2Vlbl9vcmRlckRldGFpbHMuc2Vlbl9vcmRlckRldGFpbHMgfHwgW11cbiAgICBsZXQgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gc2Vlbl9zY3JlZW4uc2Vlbl9zY3JlZW5zaG90cyB8fCBbXVxuICAgIGxldCBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gPSBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uLnNlZW5fcmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgIHN0b3JlSW50ZXJhY3Rpb25zID0gWy4uLnNlZW5fc3RvcmVJbnRlcmFjdGlvbnMsIC4uLnN0b3JlSW50ZXJhY3Rpb25zXVxuICAgIGh0bWxTbmFwc2hvdHMgPSB7IC4uLnNlZW5faHRtbFNuYXBzaG90cywgLi4uaHRtbFNuYXBzaG90cyB9XG4gICAgc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgc3RvcmVTY3JlZW5zaG90cyA9IFsuLi5zZWVuX3N0b3JlU2NyZWVuc2hvdHMsIC4uLnN0b3JlU2NyZWVuc2hvdHNdXG4gICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFsuLi5zZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24sIC4uLnN0b3JlUmVhc29uc0Fubm90YXRpb25dXG5cbiAgICBpZiAoIXppcCkge1xuICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkaW5nIHNlc3Npb24gaW5mbycpXG4gICAgICBjb25zdCBzZXNzaW9uSW5mb0NvbnRlbnQgPSBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfSwgdXNlciBpZDogJHtjdXJyZW50VXNlcklkfSxcXG4gb3JkZXIgZGV0YWlsczogXFxuICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgIHN0b3Jlb3JkZXJEZXRhaWxzXG4gICAgICApfWBcbiAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICB1cmw6ICdkYXRhOnRleHQvcGxhaW47Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlc3Npb25JbmZvQ29udGVudCksXG4gICAgICAgIGZpbGVuYW1lOiBgJHtmb2xkZXJOYW1lfS9zZXNzaW9uX2luZm8udHh0YCxcbiAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgfSlcblxuICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICBjb25zb2xlLmxvZygnZG93bmxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKVxuICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgIGF3YWl0IGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgIHVybDogJ2RhdGE6dGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChodG1sQ29udGVudCksXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uaHRtbGAsXG4gICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4gICAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICB9XG4gICAgICBjb25zdCBpbnRlcmFjdGlvbnNEYXRhID0gSlNPTi5zdHJpbmdpZnkoZnVsbERhdGEsIG51bGwsIDIpXG4gICAgICBjaHJvbWUuZG93bmxvYWRzLmRvd25sb2FkKHtcbiAgICAgICAgdXJsOiAnZGF0YTp0ZXh0L2pzb247Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KGludGVyYWN0aW9uc0RhdGEpLFxuICAgICAgICBmaWxlbmFtZTogYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zLmpzb25gLFxuICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICB9KVxuXG4gICAgICAvLyBVcGxvYWQgc2NyZWVuc2hvdHNcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNocm9tZS5kb3dubG9hZHMuZG93bmxvYWQoe1xuICAgICAgICAgIHVybDogc2NyZWVuc2hvdERhdGEsXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYCxcbiAgICAgICAgICBzYXZlQXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZGluZyB6aXAgZmlsZScpXG4gICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKVxuICAgICAgemlwLmZpbGUoXG4gICAgICAgICdzZXNzaW9uX2luZm8udHh0JyxcbiAgICAgICAgYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH1cbiAgICAgICAgICBcXG4gdXNlciBpZDogJHt1c2VyX2lkfVxuICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuICAgICAgICAgICAgICAgIFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YFxuICAgICAgKVxuXG4gICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgcmVhc29uczogc3RvcmVSZWFzb25zQW5ub3RhdGlvbixcbiAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcbiAgICAgIHppcC5maWxlKCdpbnRlcmFjdGlvbnMuanNvbicsIGludGVyYWN0aW9uc19qc29uKVxuICAgICAgY29uc3Qgc2NyZWVuc2hvdHNGb2xkZXIgPSB6aXAuZm9sZGVyKCdzY3JlZW5zaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2NyZWVuc2hvdERhdGEpXG4gICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKClcbiAgICAgICAgc2NyZWVuc2hvdHNGb2xkZXIuZmlsZShzY3JlZW5zaG90SWQucmVwbGFjZSgvWzouXS9nLCAnLScpICsgJy5qcGcnLCBibG9iKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBodG1sU25hcHNob3RzRm9sZGVyID0gemlwLmZvbGRlcignaHRtbFNuYXBzaG90cycpXG4gICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbiAgICAgICAgaHRtbFNuYXBzaG90c0ZvbGRlci5maWxlKHNuYXBzaG90SWQgKyAnLmh0bWwnLCBodG1sQ29udGVudClcbiAgICAgIH1cblxuICAgICAgY29uc3QgemlwQmxvYiA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pXG4gICAgICBjb25zb2xlLmxvZygnemlwIGZpbGUgaXMgZ2VuZXJhdGVkJylcblxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYmFzZTY0WmlwID0gcmVhZGVyLnJlc3VsdC5zcGxpdCgnLCcpWzFdIC8vIEdldCB0aGUgYmFzZTY0IHBhcnRcbiAgICAgICAgY2hyb21lLmRvd25sb2Fkcy5kb3dubG9hZCh7XG4gICAgICAgICAgdXJsOiAnZGF0YTphcHBsaWNhdGlvbi96aXA7YmFzZTY0LCcgKyBiYXNlNjRaaXAsXG4gICAgICAgICAgZmlsZW5hbWU6IGAke2ZvbGRlck5hbWV9LnppcGAsXG4gICAgICAgICAgc2F2ZUFzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoemlwQmxvYilcbiAgICB9XG5cbiAgICAvLyBDbGVhciBjYWNoZSBhZnRlciBzdWNjZXNzZnVsIHVwbG9hZFxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAnc2Vlbl9odG1sU25hcHNob3RzJyxcbiAgICAgICdzZWVuX2ludGVyYWN0aW9ucycsXG4gICAgICAnc2Vlbl9vcmRlckRldGFpbHMnLFxuICAgICAgJ3NlZW5fc2NyZWVuc2hvdHMnLFxuICAgICAgJ3NlZW5fcmVhc29uc0Fubm90YXRpb24nXG4gICAgXSlcblxuICAgIHJldHVybiB0cnVlXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWQgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVzaWduZWRGb3JtRGF0YShuYW1lKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgZm9ybURhdGEuYXBwZW5kKCdrZXknLCBuYW1lKVxuXG4gIE9iamVjdC5rZXlzKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS5maWVsZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChrZXkgIT0gJ2tleScpIGZvcm1EYXRhLmFwcGVuZChrZXksIGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS5maWVsZHNba2V5XSlcbiAgfSlcblxuICByZXR1cm4gZm9ybURhdGFcbn1cblxuY29uc3QgY3VzdG9tRmV0Y2ggPSBhc3luYyAodXJsLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKVxuXG4gIC8vIElmIHJlc3BvbnNlIGlzIG5vdCBPSyAoc3RhdHVzIGNvZGUgbm90IGluIDIwMC0yOTkgcmFuZ2UpLCB0aHJvdyBhbiBlcnJvclxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ3ppcEh0bWwoY29udGVudCkge1xuICAvLyBDcmVhdGUgYSBuZXcgR1pJUCBjb21wcmVzc2lvbiBzdHJlYW1cbiAgY29uc3QgY3MgPSBuZXcgQ29tcHJlc3Npb25TdHJlYW0oJ2d6aXAnKVxuXG4gIC8vIENyZWF0ZSBhIHdyaXRhYmxlIHN0cmVhbSB0byB3aGljaCB3ZSdsbCB3cml0ZSB0aGUgY29tcHJlc3NlZCBkYXRhXG4gIGNvbnN0IHdyaXRlciA9IGNzLndyaXRhYmxlLmdldFdyaXRlcigpXG5cbiAgLy8gRW5jb2RlIHRoZSBjb250ZW50IHRvIFVpbnQ4QXJyYXlcbiAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG4gIGNvbnN0IGVuY29kZWRDb250ZW50ID0gZW5jb2Rlci5lbmNvZGUoY29udGVudClcblxuICAvLyBXcml0ZSB0aGUgZW5jb2RlZCBjb250ZW50IGludG8gdGhlIGNvbXByZXNzaW9uIHN0cmVhbVxuICB3cml0ZXIud3JpdGUoZW5jb2RlZENvbnRlbnQpXG5cbiAgLy8gQ2xvc2UgdGhlIHdyaXRlciB0byBmaW5pc2ggY29tcHJlc3Npb25cbiAgd3JpdGVyLmNsb3NlKClcblxuICAvLyBHZXQgdGhlIGNvbXByZXNzZWQgZGF0YSBhcyBhIEJsb2JcbiAgY29uc3QgY29tcHJlc3NlZEJsb2IgPSBhd2FpdCBuZXcgUmVzcG9uc2UoY3MucmVhZGFibGUpLmJsb2IoKVxuXG4gIHJldHVybiBjb21wcmVzc2VkQmxvYlxufVxuXG4vLyBhc3luYyBmdW5jdGlvbiB1cGxvYWREYXRhVG9TZXJ2ZXIoKSB7XG4vLyAgIHN0b3BQZXJpb2RpY1VwbG9hZCgpXG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgaW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pXG4vLyAgICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cblxuLy8gICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgaW50ZXJhY3Rpb25zIGFuZCBnZXQgdGhlIGxhdGVzdCB0aW1lc3RhbXBcbi8vICAgICBpZiAoc3RvcmVJbnRlcmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygnTm8gaW50ZXJhY3Rpb25zIHRvIHVwbG9hZCcpXG4vLyAgICAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbi8vICAgICAgIHJldHVybiBmYWxzZVxuLy8gICAgIH1cbi8vICAgICBsYXN0VGltZXN0YW1wID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHtcbi8vICAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogbnVsbFxuLy8gICAgIH0pXG4vLyAgICAgbGFzdFRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAudXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wIHx8IG51bGxcblxuLy8gICAgIGlmIChsYXN0VGltZXN0YW1wKSBjb25zb2xlLmxvZygnbGFzdFRpbWVzdGFtcCByZXN0b3JlZDogJywgbGFzdFRpbWVzdGFtcClcblxuLy8gICAgIGNvbnN0IHRpbWVzdGFtcCA9IGxhc3RUaW1lc3RhbXAgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1s6Ll0vZywgJy0nKVxuXG4vLyAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHtcbi8vICAgICAgIHVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcDogdGltZXN0YW1wXG4vLyAgICAgfSkgLy8gbWFraW5nIHN1cmUgd2l0aCByZW9wZW5pbmcgdGhlIGJyb3dzZXIsIGl0IGNvbnRpbnVlcyBmcm9tIGxlZnQgcG9pbnQgYW5kIHJld3JpdGVzIHRoZSBpbmZvcm1hdGlvblxuXG4vLyAgICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2Vcbi8vICAgICBjb25zdCB1c2VySWRSZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pXG4vLyAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWRcblxuLy8gICAgIGxldCB1c2VyX2lkID0gY3VycmVudFVzZXJJZCB8fCAndW5rbm93bidcblxuLy8gICAgIGNvbnN0IGZvbGRlck5hbWUgPSBgJHtmb2xkZXJfbmFtZX0vVVNFUi8ke3VzZXJfaWR9YFxuXG4vLyAgICAgY29uc3Qgc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSlcbi8vICAgICBjb25zdCBvcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pXG4vLyAgICAgY29uc3Qgc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pXG4vLyAgICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuLy8gICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbi8vICAgICBsZXQgc3RvcmVPcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4vLyAgICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbi8vICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbi8vICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbi8vICAgICAgIGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMsXG4vLyAgICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuLy8gICAgICAgb3JkZXJEZXRhaWxzOiBzdG9yZU9yZGVyRGV0YWlsc1xuLy8gICAgIH1cbi8vICAgICBpZiAoXG4vLyAgICAgICAhbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlIHx8XG4vLyAgICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgPCBEYXRlLm5vdygpIC8gMTAwMCB8fCAvLyBwcmV2ZW50IGZyb20gcmVxdWVzdGluZyBmb3IgcG9zdCB1cmwgb3ZlciBhbmQgb3ZlclxuLy8gICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZT8uZmllbGRzPy5rZXkuaW5jbHVkZXModXNlcl9pZClcbi8vICAgICApIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIG5ldyBwb3N0IHVybCcpXG4vLyAgICAgICBjb25zb2xlLmxvZyhgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWApXG4vLyAgICAgICBsZXQgcG9zdFVybFJlc3VsdCA9IGF3YWl0IGN1c3RvbUZldGNoKGAke2dlbmVyYXRlX3ByZXNpZ25lZF9wb3N0X3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuLy8gICAgICAgICBtZXRob2Q6ICdHRVQnXG4vLyAgICAgICB9KVxuXG4vLyAgICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UgPSBhd2FpdCBwb3N0VXJsUmVzdWx0Lmpzb24oKVxuLy8gICAgICAgY29uc29sZS5sb2coXG4vLyAgICAgICAgICduZXcgcG9zdCB1cmwgcmVjZWl2ZWQnLFxuLy8gICAgICAgICBsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmV4cGlyZV90aW1lc3RhbXAgLSBEYXRlLm5vdygpIC8gMTAwMFxuLy8gICAgICAgKVxuLy8gICAgIH1cbi8vICAgICB0cnkge1xuLy8gICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihcbi8vICAgICAgICAgW1xuLy8gICAgICAgICAgIGBTZXNzaW9uIGRhdGEgZm9yIHRpbWVzdGFtcDogJHt0aW1lc3RhbXB9XG4vLyAgICAgICAgICAgICAgICAgICAgIFxcbiB1c2VyIGlkOiAke3VzZXJfaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgIFxcbiBvcmRlciBkZXRhaWxzOlxuLy8gICAgICAgICAgICAgICAgICAgICBcXG4gJHtKU09OLnN0cmluZ2lmeShvcmRlckRldGFpbHMpfWBcbi8vICAgICAgICAgXSxcbi8vICAgICAgICAgeyB0eXBlOiAndGV4dC9wbGFpbicgfVxuLy8gICAgICAgKVxuLy8gICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoXG4vLyAgICAgICAgIGAke2ZvbGRlck5hbWV9L29yZGVyX2luZm8vb3JkZXJfaW5mb18ke3RpbWVzdGFtcH0udHh0YFxuLy8gICAgICAgKVxuLy8gICAgICAgc2Vzc2lvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlc3Npb25JbmZvKVxuXG4vLyAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpXG4vLyAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICBib2R5OiBzZXNzaW9uRm9ybURhdGFcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIC8vIFVwbG9hZCBIVE1MIHNuYXBzaG90cyBhcyBzZXBhcmF0ZSBmaWxlc1xuLy8gICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBodG1sIHNuYXBzaG90cycpXG4vLyAgICAgICBmb3IgKGNvbnN0IFtzbmFwc2hvdElkLCBodG1sQ29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykpIHtcbi8vICAgICAgICAgLy8gY29uc3QgaHRtbEJsb2IgPSBuZXcgQmxvYihbaHRtbENvbnRlbnRdLCB7IHR5cGU6ICd0ZXh0L2h0bWwnIH0pXG4vLyAgICAgICAgIGNvbnN0IGh0bWxCbG9iID0gYXdhaXQgZ3ppcEh0bWwoaHRtbENvbnRlbnQpXG4vLyAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoYCR7Zm9sZGVyTmFtZX0vaHRtbC8ke3NuYXBzaG90SWR9Lmh0bWwuZ3pgKVxuLy8gICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBodG1sQmxvYilcblxuLy8gICAgICAgICBhd2FpdCBjdXN0b21GZXRjaChsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2UudXJsLCB7XG4vLyAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgICAgYm9keTogZm9ybURhdGFcbi8vICAgICAgICAgfSlcbi8vICAgICAgIH1cblxuLy8gICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4vLyAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJylcbi8vICAgICAgIGZvciAoY29uc3QgW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdIG9mIHN0b3JlU2NyZWVuc2hvdHMpIHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjdXN0b21GZXRjaChzY3JlZW5zaG90RGF0YSlcbi8vICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuLy8gICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKFxuLy8gICAgICAgICAgIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYFxuLy8gICAgICAgICApXG4vLyAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IpXG5cbi8vICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4vLyAgICAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbi8vICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuLy8gICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4vLyAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvcjogJHtlfWApXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICB9XG5cbi8vICAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuLy8gICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuLy8gICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcblxuLy8gICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtpbnRlcmFjdGlvbnNfanNvbl0sIHtcbi8vICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICB9KVxuLy8gICAgICAgY29uc3QganNvbkZvcm1EYXRhRmlsZSA9IHByZXNpZ25lZEZvcm1EYXRhKFxuLy8gICAgICAgICBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMvaW50ZXJhY3Rpb25zXyR7dGltZXN0YW1wfS5qc29uYFxuLy8gICAgICAgKVxuXG4vLyAgICAgICBqc29uRm9ybURhdGFGaWxlLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IpXG5cbi8vICAgICAgIGF3YWl0IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbi8vICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgIGJvZHk6IGpzb25Gb3JtRGF0YUZpbGVcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbi8vICAgICAgIGpzb25Gb3JtRGF0YS5hcHBlbmQoJ2ludGVyYWN0aW9ucycsIGludGVyYWN0aW9uc19qc29uKVxuLy8gICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgndXNlcl9pZCcsIHVzZXJfaWQpXG5cbi8vICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zIGFzIGEganNvbicpXG4vLyAgICAgICBhd2FpdCBjdXN0b21GZXRjaChpbnRlcmFjdGlvbnNfdXJsLCB7XG4vLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgICBib2R5OiBqc29uRm9ybURhdGFcbi8vICAgICAgIH0pXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGRhdGE6JywgZXJyb3IpXG4vLyAgICAgICByZXR1cm4gZmFsc2Vcbi8vICAgICB9XG5cbi8vICAgICBpZiAodXNlcl9pZC5pbmNsdWRlcyhkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQpKSB7XG4vLyAgICAgICBjb25zdCBzZWVuX2ludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IFtdIH0pXG4vLyAgICAgICBjb25zdCBzZWVuX3NuYXBzaG90cyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5faHRtbFNuYXBzaG90czogW10gfSlcbi8vICAgICAgIGNvbnN0IHNlZW5fb3JkZXJEZXRhaWxzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IFtdIH0pXG4vLyAgICAgICBjb25zdCBzZWVuX3NjcmVlbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNlZW5fc2NyZWVuc2hvdHM6IFtdIH0pXG4vLyAgICAgICBjb25zdCBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogW10gfSlcblxuLy8gICAgICAgbGV0IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBzZWVuX2ludGVyYWN0LmludGVyYWN0aW9ucyB8fCBbXVxuLy8gICAgICAgbGV0IHNlZW5faHRtbFNuYXBzaG90cyA9IHNlZW5fc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge31cbi8vICAgICAgIGxldCBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gc2Vlbl9vcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdXG4vLyAgICAgICBsZXQgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gc2Vlbl9zY3JlZW4uc2NyZWVuc2hvdHMgfHwgW11cbi8vICAgICAgIGxldCBzZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24gPSBzZWVuX1JlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdXG5cbi8vICAgICAgIHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgPSBbLi4uc2Vlbl9zdG9yZUludGVyYWN0aW9ucywgLi4uc3RvcmVJbnRlcmFjdGlvbnNdXG4vLyAgICAgICBzZWVuX2h0bWxTbmFwc2hvdHMgPSB7IC4uLnNlZW5faHRtbFNuYXBzaG90cywgLi4uaHRtbFNuYXBzaG90cyB9XG4vLyAgICAgICBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzID0gWy4uLnNlZW5fc3RvcmVPcmRlckRldGFpbHMsIC4uLnN0b3JlT3JkZXJEZXRhaWxzXVxuLy8gICAgICAgc2Vlbl9zdG9yZVNjcmVlbnNob3RzID0gWy4uLnNlZW5fc3RvcmVTY3JlZW5zaG90cywgLi4uc3RvcmVTY3JlZW5zaG90c11cbi8vICAgICAgIHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFsuLi5zZWVuX3N0b3JlUmVhc29uc0Fubm90YXRpb24sIC4uLnN0b3JlUmVhc29uc0Fubm90YXRpb25dXG5cbi8vICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faW50ZXJhY3Rpb25zOiBzZWVuX3N0b3JlSW50ZXJhY3Rpb25zIH0pXG4vLyAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX2h0bWxTbmFwc2hvdHMgfSlcbi8vICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fb3JkZXJEZXRhaWxzOiBzZWVuX3N0b3JlT3JkZXJEZXRhaWxzIH0pXG4vLyAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzZWVuX3NjcmVlbnNob3RzOiBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgfSlcbi8vICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fcmVhc29uc0Fubm90YXRpb246IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KVxuLy8gICAgIH1cblxuLy8gICAgIGxhc3RUaW1lc3RhbXAgPSBudWxsXG5cbi8vICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuLy8gICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuLy8gICAgICAgJ29yZGVyRGV0YWlscycsXG4vLyAgICAgICAnc2NyZWVuc2hvdHMnLFxuLy8gICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbi8vICAgICAgICdpbnRlcmFjdGlvbnMnLFxuLy8gICAgICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCdcbi8vICAgICBdKVxuLy8gICAgIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4vLyAgICAgc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuLy8gICAgIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuLy8gICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuXG4vLyAgICAgcmV0dXJuIHRydWVcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbi8vICAgICByZXR1cm4gZmFsc2Vcbi8vICAgfVxuLy8gfVxuXG4vLyBTdGFydCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdGFydFBlcmlvZGljVXBsb2FkKCkge1xuICBpZiAoIXVwbG9hZFRpbWVyKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXJ0UGVyaW9kaWNVcGxvYWQnKVxuICAgIHVwbG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwodXBsb2FkRGF0YVRvU2VydmVyX25ldywgMTAwMDApIC8vIDEwIHNlY29uZHNcbiAgfVxufVxuXG4vLyBTdG9wIHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0b3BQZXJpb2RpY1VwbG9hZCgpIHtcbiAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3N0b3BQZXJpb2RpY1VwbG9hZCcpXG4gICAgY2xlYXJJbnRlcnZhbCh1cGxvYWRUaW1lcilcbiAgICB1cGxvYWRUaW1lciA9IGZhbHNlXG4gIH1cbn1cbmlmICh1cGxvYWRUaW1lciA9PSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKCctLWluaXRpYWxpemluZyBpbnRlcnZhbC0tJylcbiAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwbG9hZERhdGFUb1NlcnZlcl9uZXcoKSB7XG4gIHN0b3BQZXJpb2RpY1VwbG9hZCgpXG4gIHRyeSB7XG4gICAgY29uc3QgY2hlY2tJbnRlcmFjdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSlcbiAgICBjb25zdCBjaGVja3N0b3JlSW50ZXJhY3Rpb25zID0gY2hlY2tJbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGFyZSBhbnkgaW50ZXJhY3Rpb25zIGFuZCBnZXQgdGhlIGxhdGVzdCB0aW1lc3RhbXBcbiAgICBpZiAoY2hlY2tzdG9yZUludGVyYWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBpbnRlcmFjdGlvbnMgdG8gdXBsb2FkJylcbiAgICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGxhc3R1cGxvYWRUaW1lc3RhbXAgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBsYXN0dXBsb2FkVGltZXN0YW1wOiBudWxsIH0pXG4gICAgbGFzdHVwbG9hZFRpbWVzdGFtcCA9IGxhc3R1cGxvYWRUaW1lc3RhbXAubGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBudWxsXG4gICAgY29uc3QgY3VycmVudFRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7XG4gICAgICB1c2VyX2ludGVyYWN0aW9uX3RyYWNrZXJfbGFzdF90aW1lc3RhbXA6IG51bGxcbiAgICB9KVxuICAgIGxhc3RUaW1lc3RhbXAgPSBsYXN0VGltZXN0YW1wLnVzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCB8fCBudWxsXG5cbiAgICBpZiAobGFzdFRpbWVzdGFtcCkgY29uc29sZS5sb2coJ2xhc3RUaW1lc3RhbXAgcmVzdG9yZWQ6ICcsIGxhc3RUaW1lc3RhbXApXG5cbiAgICBjb25zdCB0aW1lc3RhbXAgPSBsYXN0VGltZXN0YW1wIHx8IGN1cnJlbnRUaW1lc3RhbXAucmVwbGFjZSgvWzouXS9nLCAnLScpXG5cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgdXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICB9KSAvLyBtYWtpbmcgc3VyZSB3aXRoIHJlb3BlbmluZyB0aGUgYnJvd3NlciwgaXQgY29udGludWVzIGZyb20gbGVmdCBwb2ludCBhbmQgcmV3cml0ZXMgdGhlIGluZm9ybWF0aW9uXG5cbiAgICAvLyBHZXQgdXNlcklkIGFuZCBkYXRhIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogJycgfSlcbiAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdXNlcklkUmVzdWx0LnVzZXJJZFxuXG4gICAgbGV0IHVzZXJfaWQgPSBjdXJyZW50VXNlcklkIHx8ICd1bmtub3duJ1xuXG4gICAgY29uc3QgZm9sZGVyTmFtZSA9IGAke2ZvbGRlcl9uYW1lfS9VU0VSLyR7dXNlcl9pZH1gXG5cbiAgICBjb25zdCBzbmFwc2hvdHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KVxuICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbiAgICBjb25zdCBzY3JlZW4gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSlcbiAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuICAgIGNvbnN0IGludGVyYWN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KVxuXG4gICAgY29uc3Qgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW11cbiAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9XG4gICAgbGV0IHN0b3JlT3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXVxuICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdXG4gICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXVxuXG4gICAgY29uc3QgaW50ZXJhY3Rpb25zVG9VcGxvYWQgPSBzdG9yZUludGVyYWN0aW9ucy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBpdGVtLnRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHNuYXBzaG90c1RvVXBsb2FkID0gT2JqZWN0LmVudHJpZXMoaHRtbFNuYXBzaG90cykuZmlsdGVyKChbc25hcHNob3RJZCwgY29udGVudF0pID0+IHtcbiAgICAgIC8vIEV4dHJhY3QgdGltZXN0YW1wIGZyb20gc25hcHNob3RJZCAoZm9ybWF0OiBodG1sXyR7aGFzaH1fJHt0aW1lc3RhbXB9XyR7dXVpZH0pXG4gICAgICBjb25zdCB0aW1lc3RhbXBNYXRjaCA9IHNuYXBzaG90SWQubWF0Y2goL18oXFxkezR9LVxcZHsyfS1cXGR7Mn1UXFxkezJ9OlxcZHsyfTpcXGR7Mn0uXFxkezN9WilfLylcbiAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlIC8vIEluY2x1ZGUgaWYgY2FuJ3QgcGFyc2UgdGltZXN0YW1wXG4gICAgICBjb25zdCBzbmFwc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgc25hcHNob3RUaW1lc3RhbXAgPiBsYXN0dXBsb2FkVGltZXN0YW1wXG4gICAgfSlcbiAgICBjb25zdCBzY3JlZW5zaG90c1RvVXBsb2FkID0gc3RvcmVTY3JlZW5zaG90cy5maWx0ZXIoKFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSkgPT4ge1xuICAgICAgLy8gRXh0cmFjdCB0aW1lc3RhbXAgZnJvbSBzY3JlZW5zaG90SWQgKGZvcm1hdDogc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1fJHt1dWlkfSlcbiAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc2NyZWVuc2hvdElkLm1hdGNoKC9zY3JlZW5zaG90XyguKz8pXy8pXG4gICAgICBpZiAoIXRpbWVzdGFtcE1hdGNoKSByZXR1cm4gdHJ1ZSAvLyBJbmNsdWRlIGlmIGNhbid0IHBhcnNlIHRpbWVzdGFtcFxuICAgICAgY29uc3Qgc2NyZWVuc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICByZXR1cm4gIWxhc3R1cGxvYWRUaW1lc3RhbXAgfHwgc2NyZWVuc2hvdFRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuICAgIGNvbnN0IHJlYXNvbnNBbm5vdGF0aW9uVG9VcGxvYWQgPSBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuICFsYXN0dXBsb2FkVGltZXN0YW1wIHx8IGl0ZW0udGltZXN0YW1wID4gbGFzdHVwbG9hZFRpbWVzdGFtcFxuICAgIH0pXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzVG9VcGxvYWQgPSBzdG9yZU9yZGVyRGV0YWlscy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAhbGFzdHVwbG9hZFRpbWVzdGFtcCB8fCBpdGVtLnRpbWVzdGFtcCA+IGxhc3R1cGxvYWRUaW1lc3RhbXBcbiAgICB9KVxuXG4gICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICBpbnRlcmFjdGlvbnM6IGludGVyYWN0aW9uc1RvVXBsb2FkLFxuICAgICAgcmVhc29uczogcmVhc29uc0Fubm90YXRpb25Ub1VwbG9hZCxcbiAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzVG9VcGxvYWRcbiAgICB9XG4gICAgaWYgKFxuICAgICAgIWxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZSB8fFxuICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5leHBpcmVfdGltZXN0YW1wIDwgRGF0ZS5ub3coKSAvIDEwMDAgfHwgLy8gcHJldmVudCBmcm9tIHJlcXVlc3RpbmcgZm9yIHBvc3QgdXJsIG92ZXIgYW5kIG92ZXJcbiAgICAgICFsYXN0R2VuZXJhdGVQcmVzaWduZWRQb3N0UmVzcG9uc2U/LmZpZWxkcz8ua2V5LmluY2x1ZGVzKHVzZXJfaWQpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnZ2V0dGluZyBuZXcgcG9zdCB1cmwnKVxuICAgICAgY29uc29sZS5sb2coYCR7Z2VuZXJhdGVfcHJlc2lnbmVkX3Bvc3RfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gKVxuICAgICAgbGV0IHBvc3RVcmxSZXN1bHQgPSBhd2FpdCBjdXN0b21GZXRjaChgJHtnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfSlcblxuICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlID0gYXdhaXQgcG9zdFVybFJlc3VsdC5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnbmV3IHBvc3QgdXJsIHJlY2VpdmVkJyxcbiAgICAgICAgbGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlPy5leHBpcmVfdGltZXN0YW1wIC0gRGF0ZS5ub3coKSAvIDEwMDBcbiAgICAgIClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlc3Npb25JbmZvID0gbmV3IEJsb2IoXG4gICAgICAgIFtcbiAgICAgICAgICBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICBcXG4gdXNlciBpZDogJHt1c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICBcXG4gb3JkZXIgZGV0YWlsczpcbiAgICAgICAgICAgICAgICAgICAgXFxuICR7SlNPTi5zdHJpbmdpZnkob3JkZXJEZXRhaWxzVG9VcGxvYWQpfWBcbiAgICAgICAgXSxcbiAgICAgICAgeyB0eXBlOiAndGV4dC9wbGFpbicgfVxuICAgICAgKVxuICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gcHJlc2lnbmVkRm9ybURhdGEoXG4gICAgICAgIGAke2ZvbGRlck5hbWV9L29yZGVyX2luZm8vb3JkZXJfaW5mb18ke3RpbWVzdGFtcH0udHh0YFxuICAgICAgKVxuICAgICAgc2Vzc2lvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlc3Npb25JbmZvKVxuXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpXG4gICAgICBjb25zdCBzZXNzaW9uVXBsb2FkUHJvbWlzZSA9IGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IHNlc3Npb25Gb3JtRGF0YVxuICAgICAgfSlcblxuICAgICAgLy8gVXBsb2FkIEhUTUwgc25hcHNob3RzIGFzIHNlcGFyYXRlIGZpbGVzXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGh0bWwgc25hcHNob3RzJylcbiAgICAgIGNvbnN0IGh0bWxVcGxvYWRQcm9taXNlcyA9IHNuYXBzaG90c1RvVXBsb2FkLm1hcChhc3luYyAoW3NuYXBzaG90SWQsIGh0bWxDb250ZW50XSkgPT4ge1xuICAgICAgICBjb25zdCBodG1sQmxvYiA9IGF3YWl0IGd6aXBIdG1sKGh0bWxDb250ZW50KVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IHByZXNpZ25lZEZvcm1EYXRhKGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkfS5odG1sLmd6YClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaHRtbEJsb2IpXG5cbiAgICAgICAgcmV0dXJuIGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4gICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJylcbiAgICAgIGNvbnN0IHNjcmVlbnNob3RVcGxvYWRQcm9taXNlcyA9IHNjcmVlbnNob3RzVG9VcGxvYWQubWFwKFxuICAgICAgICBhc3luYyAoW3NjcmVlbnNob3REYXRhLCBzY3JlZW5zaG90SWRdKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjdXN0b21GZXRjaChzY3JlZW5zaG90RGF0YSlcbiAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpXG4gICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBwcmVzaWduZWRGb3JtRGF0YShcbiAgICAgICAgICAgIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgJy0nKX0uanBnYFxuICAgICAgICAgIClcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iKVxuXG4gICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpXG4gICAgICAgICAgcmV0dXJuIGN1c3RvbUZldGNoKGxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZS51cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIC8vIFVwbG9hZCBpbnRlcmFjdGlvbnMgSlNPTlxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMnKVxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zX2pzb24gPSBKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMilcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtpbnRlcmFjdGlvbnNfanNvbl0sIHtcbiAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgICAgY29uc3QganNvbkZvcm1EYXRhRmlsZSA9IHByZXNpZ25lZEZvcm1EYXRhKFxuICAgICAgICBgJHtmb2xkZXJOYW1lfS9pbnRlcmFjdGlvbnMvaW50ZXJhY3Rpb25zXyR7dGltZXN0YW1wfS5qc29uYFxuICAgICAgKVxuXG4gICAgICBqc29uRm9ybURhdGFGaWxlLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IpXG5cbiAgICAgIGNvbnN0IGpzb25VcGxvYWRQcm9taXNlID0gY3VzdG9tRmV0Y2gobGFzdEdlbmVyYXRlUHJlc2lnbmVkUG9zdFJlc3BvbnNlLnVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToganNvbkZvcm1EYXRhRmlsZVxuICAgICAgfSlcblxuICAgICAgY29uc3QganNvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnaW50ZXJhY3Rpb25zJywgaW50ZXJhY3Rpb25zX2pzb24pXG4gICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCd1c2VyX2lkJywgdXNlcl9pZClcblxuICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBpbnRlcmFjdGlvbnMgYXMgYSBqc29uJylcbiAgICAgIGNvbnN0IGpzb24yZGJVcGxvYWRQcm9taXNlID0gY3VzdG9tRmV0Y2goaW50ZXJhY3Rpb25zX3VybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keToganNvbkZvcm1EYXRhXG4gICAgICB9KVxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBzZXNzaW9uVXBsb2FkUHJvbWlzZSxcbiAgICAgICAgLi4uaHRtbFVwbG9hZFByb21pc2VzLFxuICAgICAgICAuLi5zY3JlZW5zaG90VXBsb2FkUHJvbWlzZXMsXG4gICAgICAgIGpzb25VcGxvYWRQcm9taXNlLFxuICAgICAgICBqc29uMmRiVXBsb2FkUHJvbWlzZVxuICAgICAgXSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc3RhcnRQZXJpb2RpY1VwbG9hZCgpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh1c2VyX2lkLmluY2x1ZGVzKGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCkpIHtcbiAgICAgIGNvbnN0IHNlZW5faW50ZXJhY3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX2ludGVyYWN0aW9uczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc25hcHNob3RzID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9odG1sU25hcHNob3RzOiBbXSB9KVxuICAgICAgY29uc3Qgc2Vlbl9vcmRlckRldGFpbHMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX29yZGVyRGV0YWlsczogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fc2NyZWVuID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2Vlbl9zY3JlZW5zaG90czogW10gfSlcbiAgICAgIGNvbnN0IHNlZW5fUmVhc29uc0Fubm90YXRpb24gPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzZWVuX3JlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KVxuXG4gICAgICBsZXQgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IHNlZW5faW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdXG4gICAgICBsZXQgc2Vlbl9odG1sU25hcHNob3RzID0gc2Vlbl9zbmFwc2hvdHMuaHRtbFNuYXBzaG90cyB8fCB7fVxuICAgICAgbGV0IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBzZWVuX29yZGVyRGV0YWlscy5vcmRlckRldGFpbHMgfHwgW11cbiAgICAgIGxldCBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBzZWVuX3NjcmVlbi5zY3JlZW5zaG90cyB8fCBbXVxuICAgICAgbGV0IHNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHNlZW5fUmVhc29uc0Fubm90YXRpb24ucmVhc29uc0Fubm90YXRpb24gfHwgW11cblxuICAgICAgc2Vlbl9zdG9yZUludGVyYWN0aW9ucyA9IFsuLi5zZWVuX3N0b3JlSW50ZXJhY3Rpb25zLCAuLi5zdG9yZUludGVyYWN0aW9uc11cbiAgICAgIHNlZW5faHRtbFNuYXBzaG90cyA9IHsgLi4uc2Vlbl9odG1sU25hcHNob3RzLCAuLi5odG1sU25hcHNob3RzIH1cbiAgICAgIHNlZW5fc3RvcmVPcmRlckRldGFpbHMgPSBbLi4uc2Vlbl9zdG9yZU9yZGVyRGV0YWlscywgLi4uc3RvcmVPcmRlckRldGFpbHNdXG4gICAgICBzZWVuX3N0b3JlU2NyZWVuc2hvdHMgPSBbLi4uc2Vlbl9zdG9yZVNjcmVlbnNob3RzLCAuLi5zdG9yZVNjcmVlbnNob3RzXVxuICAgICAgc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gWy4uLnNlZW5fc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbl1cblxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9pbnRlcmFjdGlvbnM6IHNlZW5fc3RvcmVJbnRlcmFjdGlvbnMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5faHRtbFNuYXBzaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9vcmRlckRldGFpbHM6IHNlZW5fc3RvcmVPcmRlckRldGFpbHMgfSlcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNlZW5fc2NyZWVuc2hvdHM6IHNlZW5fc3RvcmVTY3JlZW5zaG90cyB9KVxuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2Vlbl9yZWFzb25zQW5ub3RhdGlvbjogc2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pXG4gICAgfVxuXG4gICAgbGFzdFRpbWVzdGFtcCA9IG51bGxcbiAgICBsYXN0dXBsb2FkVGltZXN0YW1wID0gY3VycmVudFRpbWVzdGFtcFxuICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGxhc3R1cGxvYWRUaW1lc3RhbXA6IGxhc3R1cGxvYWRUaW1lc3RhbXAgfSlcbiAgICBjb25zdCBjdXJyZW50RGF0YSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7XG4gICAgICBpbnRlcmFjdGlvbnM6IFtdLFxuICAgICAgaHRtbFNuYXBzaG90czoge30sXG4gICAgICBvcmRlckRldGFpbHM6IFtdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgcmVhc29uc0Fubm90YXRpb246IFtdXG4gICAgfSlcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgaW50ZXJhY3Rpb25zOiBjdXJyZW50RGF0YS5pbnRlcmFjdGlvbnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXApLFxuXG4gICAgICBodG1sU25hcHNob3RzOiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGN1cnJlbnREYXRhLmh0bWxTbmFwc2hvdHMpLmZpbHRlcigoW3NuYXBzaG90SWRdKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wTWF0Y2ggPSBzbmFwc2hvdElkLm1hdGNoKC9fKFxcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfTpcXGR7Mn06XFxkezJ9LlxcZHszfVopXy8pXG4gICAgICAgICAgaWYgKCF0aW1lc3RhbXBNYXRjaCkgcmV0dXJuIHRydWVcbiAgICAgICAgICBjb25zdCBzbmFwc2hvdFRpbWVzdGFtcCA9IHRpbWVzdGFtcE1hdGNoWzFdXG4gICAgICAgICAgcmV0dXJuIHNuYXBzaG90VGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIG9yZGVyRGV0YWlsczogY3VycmVudERhdGEub3JkZXJEZXRhaWxzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aW1lc3RhbXAgPiBjdXJyZW50VGltZXN0YW1wKSxcbiAgICAgIHNjcmVlbnNob3RzOiBjdXJyZW50RGF0YS5zY3JlZW5zaG90cy5maWx0ZXIoKFtfLCBzY3JlZW5zaG90SWRdKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcE1hdGNoID0gc2NyZWVuc2hvdElkLm1hdGNoKC9zY3JlZW5zaG90XyguKz8pXy8pXG4gICAgICAgIGlmICghdGltZXN0YW1wTWF0Y2gpIHJldHVybiB0cnVlXG4gICAgICAgIGNvbnN0IHNjcmVlbnNob3RUaW1lc3RhbXAgPSB0aW1lc3RhbXBNYXRjaFsxXVxuICAgICAgICByZXR1cm4gc2NyZWVuc2hvdFRpbWVzdGFtcCA+IGN1cnJlbnRUaW1lc3RhbXBcbiAgICAgIH0pLFxuICAgICAgcmVhc29uc0Fubm90YXRpb246IGN1cnJlbnREYXRhLnJlYXNvbnNBbm5vdGF0aW9uLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udGltZXN0YW1wID4gY3VycmVudFRpbWVzdGFtcFxuICAgICAgKVxuICAgIH1cbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQobmV3RGF0YSlcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCcpXG5cbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgIC8vICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgIC8vICAgJ29yZGVyRGV0YWlscycsXG4gICAgLy8gICAnc2NyZWVuc2hvdHMnLFxuICAgIC8vICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbiAgICAvLyAgICdpbnRlcmFjdGlvbnMnLFxuICAgIC8vICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCdcbiAgICAvLyBdKVxuICAgIC8vIGludGVyYWN0aW9ucy5sZW5ndGggPSAwXG4gICAgLy8gc2NyZWVuc2hvdHMubGVuZ3RoID0gMFxuICAgIC8vIHJlYXNvbnNBbm5vdGF0aW9uLmxlbmd0aCA9IDBcblxuICAgIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzdGFydFBlcmlvZGljVXBsb2FkKClcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcilcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBpZiB1c2VyIGlkIGNoYW5nZVxuY2hyb21lLnN0b3JhZ2UubG9jYWwub25DaGFuZ2VkLmFkZExpc3RlbmVyKChjaGFuZ2VzKSA9PiB7XG4gIGlmIChjaGFuZ2VzLnVzZXJJZCkge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSB0YWJzWzBdPy51cmxcbiAgICAgIHVwZGF0ZV9pY29uKHVybClcbiAgICB9KVxuICB9XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2ludmFsaWRfdXNlcl9pZCcpIHtcbiAgICBjb25zb2xlLmxvZygnaW52YWxpZF91c2VyX2lkJywgbWVzc2FnZSlcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsImZvbGRlcl9uYW1lIiwiemlwIiwidXBsb2FkX3VybCIsImJhc2VfdXJsIiwiZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkIiwidXJsX2luY2x1ZGVzIiwiaW50ZXJhY3Rpb25fc3RhdHVzX3VybCIsImNvbmNhdCIsImNoZWNrX3VzZXJfaWRfdXJsIiwiZmlsdGVyX3VybCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJjbGlja2FibGUiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwibmFtZUVtIiwiY2xvc2VzdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ1cmwiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfZWxlbWVudCRjbG9zZXN0MyIsIl9lbGVtZW50JGNsb3Nlc3Q0IiwicHJvZHVjdF9mYWN0cyIsInByb2R1Y3RfZGVsaXZlcnkiLCJxdWFudGl0eV9zZWxlY3RvciIsImRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciIsInNldF91cF9ub3dfYnV0dG9uIiwiYWRkX3RvX2NhcnRfYnV0dG9uIiwiYnV5X25vd19idXR0b24iLCJidXlfYm94X3dpdGhfYWNjb3JkaW9uIiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCIsImNhcnQiLCJ0ZXh0X2Zvcm1hdCIsInJlY2lwZXMiLCJtYXRjaCIsIm1hdGNoX21ldGhvZCIsIl9lbSRpbm5lclRleHQiLCJyZXBsYWNlIiwiX2VtJGlubmVyVGV4dDIiLCJfZW0kaW5uZXJUZXh0MyIsInJhbmdlIiwia2VlcF9hdHRyIiwib3ZlcnJpZGVfYXR0ciIsInN0ZXBfdmFsdWVzIiwiZm9ybUVtIiwicHJvcCIsInN0ZXBzIiwiSlNPTiIsInBhcnNlIiwic3RlcExhYmVscyIsImN1cnJlbnRfdmFsdWUiLCJOdW1iZXIiLCJwYXJzZUludCIsImluc2VydF9zcGxpdF9tYXJrZXIiLCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsImNsaWNrX3NlbGVjdG9yIiwibWF0Y2hfdGV4dCIsImxhYmVsIiwiX2VtJGlubmVyVGV4dDQiLCJfZW0kcXVlcnlTZWxlY3RvciIsIl9lbSRxdWVyeVNlbGVjdG9yMiIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NSIsImFzaW5FbSIsInRlcm1pbmF0ZSIsImFyZ3VtZW50cyIsInRlcm1pbmF0ZV9jYWxsYmFjayIsInByb2Nlc3NFbGVtZW50IiwicmVjaXBlIiwicGFyZW50TmFtZSIsImxlbmd0aCIsIm50aENoaWxkIiwidGFnTmFtZSIsInRhZ19uYW1lIiwidG9Mb3dlckNhc2UiLCJlbmRzV2l0aCIsInNsaWNlIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsIkVycm9yIiwiY2xpY2tfZWxlbWVudCIsIndpbmRvdyIsImNsaWNrYWJsZV9yZWNpcGVzIiwiaW5wdXRUeXBlIiwiaW5jbHVkZXMiLCJjaGVja2VkIiwiaW5wdXRfcmVjaXBlcyIsImZvckVhY2giLCJvcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJuZXdPcHRpb24iLCJhcHBlbmRDaGlsZCIsImF0dHJzVG9Db3B5IiwiYXR0ciIsImtleSIsIl9sb29wIiwiY2hpbGRSZWNpcGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJldmVyeSIsInNwbGl0TWFya2VyIiwiZW1wdHlfbWVzc2FnZSIsImVtcHR5VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIl9hcnJheUxpa2VUb0FycmF5IiwiZnJvbSIsInRlc3QiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJpc0Zyb21Qb3B1cCIsInVwZGF0ZV9pY29uIiwiX3giLCJfdXBkYXRlX2ljb24iLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInNob3VsZEV4Y2x1ZGUiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhIiwiZ3JvdXBlZFJlc3VsdCIsIm1ldGFOYW1lIiwibWV0YURhdGEiLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfeDIiLCJfc2hvdWxkRXhjbHVkZSIsIl9jYWxsZWUyIiwiaWdub3JlVXNlcklkIiwicmVzdWx0IiwidXNlcklkIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0TWVzc2FnZSIsInNvbWUiLCJpbmNsdWRlVXJsIiwiZXhjbHVkZVVybCIsImdlbmVyYXRlSHRtbFNuYXBzaG90SWQiLCJ0aW1lc3RhbXAiLCJ1dWlkIiwibG9jYXRpb24iLCJocmVmIiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNoZWNrX3VzZXJfaWQiLCJfeDMiLCJfY2hlY2tfdXNlcl9pZCIsIl9jYWxsZWUzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmV0Y2giLCJqc29uIiwib2siLCJ0MCIsIm1lc3NhZ2UiLCJzZWxlY3RSZWNpcGUiLCJwYXJzZWRVcmwiLCJVUkwiLCJwYXRobmFtZSIsIm1hdGNoTWV0aG9kIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJoYXNNYXRjaCIsImVycm9yIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwidjQiLCJ1dWlkdjQiLCJKU1ppcCIsImludGVyYWN0aW9ucyIsInNjcmVlbnNob3RzIiwicmVhc29uc0Fubm90YXRpb24iLCJhY3Rpb25TZXF1ZW5jZUlkIiwidXBsb2FkVGltZXIiLCJsYXN0VGltZXN0YW1wIiwibGFzdHVwbG9hZFRpbWVzdGFtcCIsImxhc3RHZW5lcmF0ZVByZXNpZ25lZFBvc3RSZXNwb25zZSIsImludGVyYWN0aW9uc191cmwiLCJnZW5lcmF0ZV9wcmVzaWduZWRfcG9zdF91cmwiLCJ0YWJOYXZpZ2F0aW9uSGlzdG9yeSIsImFuYWx5emVOYXZpZ2F0aW9uIiwidGFiSWQiLCJiYWNrU3RhY2siLCJmb3J3YXJkU3RhY2siLCJjdXJyZW50VXJsIiwiaGlzdG9yeSIsImdldEN1c3RvbVF1ZXN0aW9uIiwiZXZlbnRUeXBlIiwiX2RhdGEkdGFyZ2V0JGNsYXNzTmFtIiwidGFyZ2V0IiwiaWQiLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uVHlwZSIsInNhdmVTY3JlZW5zaG90XzEiLCJfc2F2ZVNjcmVlbnNob3RfIiwiX2NhbGxlZTEyIiwic2NyZWVuc2hvdERhdGFVcmwiLCJzY3JlZW5zaG90SWQiLCJzdG9yZVNjcmVlbnNob3RzIiwiX2NhbGxlZTEyJCIsIl9jb250ZXh0MTIiLCJzZXQiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJfc2VuZGVyJHRhYiIsImN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkIiwic2F2ZURhdGEiLCJzdGFydF90aW1lIiwic3VjY2VzcyIsIl9zdWNjZXNzIiwiX3JlZjIiLCJhbGwiLCJzZW5kUG9wdXAiLCJ0YWIiLCJEYXRlIiwiZ2V0VGltZSIsImNhcHR1cmVTY3JlZW5zaG90IiwidDEiLCJkb3dubG9hZERhdGFMb2NhbGx5IiwidDIiLCJfY2FwdHVyZVNjcmVlbnNob3QiLCJfY2FsbGVlMTMiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUiLCJfeWllbGQkY2hyb21lJHRhYnMkcXUyIiwiX2NhbGxlZTEzJCIsIl9jb250ZXh0MTMiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiX3NsaWNlZFRvQXJyYXkiLCJjYXB0dXJlVmlzaWJsZVRhYiIsIndpbmRvd0lkIiwiZm9ybWF0IiwicXVhbGl0eSIsInNhdmVIVE1MIiwiX3JlZjMiLCJodG1sQ29udGVudCIsImN1cnJlbnRTbmFwc2hvdElkIiwiaHRtbFNuYXBzaG90cyIsIl94NCIsIl94NSIsInNhdmVJbnRlcmFjdGlvbiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJ0YXJnZXRfdXJsIiwiaHRtbFNuYXBzaG90SWQiLCJwYWdlTWV0YSIsInN0b3JlSW50ZXJhY3Rpb25zIiwiX2FyZ3M0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g2IiwiX3g3IiwiX3g4IiwiX3g5IiwiX3gxMCIsIl94MTEiLCJzYXZlU2NyZWVuc2hvdCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfeDEyIiwiX3gxMyIsIl94MTQiLCJfcmVmNiIsIl9jYWxsZWU2IiwiX2RhdGEkdGFyZ2V0IiwiX2RhdGEkdGFyZ2V0MiIsInF1ZXN0aW9uIiwicmVhc29uIiwibmV3aXRlbSIsInN0b3JlUmVhc29uc0Fubm90YXRpb24iLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJNYXRoIiwicmFuZG9tIiwic2VuZE1lc3NhZ2UiLCJpbnB1dCIsImFjdGlvbl91dWlkIiwiX3gxNSIsIl94MTYiLCJfeDE3IiwiX3gxOCIsIl94MTkiLCJvbkFjdGl2YXRlZCIsIl9yZWY3IiwiX2NhbGxlZTgiLCJhY3RpdmVJbmZvIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwidG9JU09TdHJpbmciLCJfcmVmOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiaHRtbCIsIl94MjEiLCJfeDIwIiwid2ViTmF2aWdhdGlvbiIsIm9uQ29tbWl0dGVkIiwiX3JlZjkiLCJfY2FsbGVlMTAiLCJkZXRhaWxzIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJmcmFtZUlkIiwiX3JlZjEwIiwiX2NhbGxlZTkiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJ0MyIsInQ0IiwidDUiLCJ0NiIsInQ3IiwidDgiLCJfeDIzIiwiX3gyMiIsIm9uUmVtb3ZlZCIsIl9kb3dubG9hZERhdGFMb2NhbGx5IiwiX2NhbGxlZTE0IiwidXNlcklkUmVzdWx0IiwiY3VycmVudFVzZXJJZCIsImZvbGRlck5hbWUiLCJzbmFwc2hvdHMiLCJpbnRlcmFjdCIsIm9yZGVyRGV0YWlscyIsInNjcmVlbiIsIlJlYXNvbnNBbm5vdGF0aW9uIiwic3RvcmVPcmRlckRldGFpbHMiLCJzZWVuX2ludGVyYWN0Iiwic2Vlbl9zbmFwc2hvdHMiLCJzZWVuX29yZGVyRGV0YWlscyIsInNlZW5fc2NyZWVuIiwic2Vlbl9SZWFzb25zQW5ub3RhdGlvbiIsInNlZW5fc3RvcmVJbnRlcmFjdGlvbnMiLCJzZWVuX2h0bWxTbmFwc2hvdHMiLCJzZWVuX3N0b3JlT3JkZXJEZXRhaWxzIiwic2Vlbl9zdG9yZVNjcmVlbnNob3RzIiwic2Vlbl9zdG9yZVJlYXNvbnNBbm5vdGF0aW9uIiwic2Vzc2lvbkluZm9Db250ZW50IiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJzbmFwc2hvdElkIiwiZnVsbERhdGEiLCJpbnRlcmFjdGlvbnNEYXRhIiwiX3N0ZXAkdmFsdWUiLCJzY3JlZW5zaG90RGF0YSIsIl96aXAiLCJfZnVsbERhdGEiLCJpbnRlcmFjdGlvbnNfanNvbiIsInNjcmVlbnNob3RzRm9sZGVyIiwiX3N0ZXAyJHZhbHVlIiwiX3NjcmVlbnNob3REYXRhIiwiX3NjcmVlbnNob3RJZCIsImJsb2IiLCJodG1sU25hcHNob3RzRm9sZGVyIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJfc25hcHNob3RJZCIsIl9odG1sQ29udGVudCIsInppcEJsb2IiLCJyZWFkZXIiLCJfY2FsbGVlMTQkIiwiX2NvbnRleHQxNCIsInNlZW5faW50ZXJhY3Rpb25zIiwic2Vlbl9zY3JlZW5zaG90cyIsInNlZW5fcmVhc29uc0Fubm90YXRpb24iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfb2JqZWN0U3ByZWFkIiwic3RvcmVvcmRlckRldGFpbHMiLCJkb3dubG9hZHMiLCJkb3dubG9hZCIsImVuY29kZVVSSUNvbXBvbmVudCIsImZpbGVuYW1lIiwic2F2ZUFzIiwiZW50cmllcyIsInJlYXNvbnMiLCJmaWxlIiwiZm9sZGVyIiwiZ2VuZXJhdGVBc3luYyIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJiYXNlNjRaaXAiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJyZW1vdmUiLCJwcmVzaWduZWRGb3JtRGF0YSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWVsZHMiLCJjdXN0b21GZXRjaCIsIl9yZWYxMSIsIl9jYWxsZWUxMSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwic3RhdHVzIiwiX3gyNCIsIl94MjUiLCJnemlwSHRtbCIsIl94MjYiLCJfZ3ppcEh0bWwiLCJfY2FsbGVlMTUiLCJjb250ZW50IiwiY3MiLCJ3cml0ZXIiLCJlbmNvZGVyIiwiZW5jb2RlZENvbnRlbnQiLCJjb21wcmVzc2VkQmxvYiIsIl9jYWxsZWUxNSQiLCJfY29udGV4dDE1IiwiQ29tcHJlc3Npb25TdHJlYW0iLCJnZXRXcml0ZXIiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsIndyaXRlIiwiY2xvc2UiLCJSZXNwb25zZSIsInJlYWRhYmxlIiwic3RhcnRQZXJpb2RpY1VwbG9hZCIsInNldEludGVydmFsIiwidXBsb2FkRGF0YVRvU2VydmVyX25ldyIsInN0b3BQZXJpb2RpY1VwbG9hZCIsImNsZWFySW50ZXJ2YWwiLCJfdXBsb2FkRGF0YVRvU2VydmVyX25ldyIsIl9jYWxsZWUxOCIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZSIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTIiLCJjaGVja0ludGVyYWN0IiwiY2hlY2tzdG9yZUludGVyYWN0aW9ucyIsImN1cnJlbnRUaW1lc3RhbXAiLCJpbnRlcmFjdGlvbnNUb1VwbG9hZCIsInNuYXBzaG90c1RvVXBsb2FkIiwic2NyZWVuc2hvdHNUb1VwbG9hZCIsInJlYXNvbnNBbm5vdGF0aW9uVG9VcGxvYWQiLCJvcmRlckRldGFpbHNUb1VwbG9hZCIsIl9sYXN0R2VuZXJhdGVQcmVzaWduZTMiLCJwb3N0VXJsUmVzdWx0Iiwic2Vzc2lvbkluZm8iLCJzZXNzaW9uRm9ybURhdGEiLCJzZXNzaW9uVXBsb2FkUHJvbWlzZSIsImh0bWxVcGxvYWRQcm9taXNlcyIsInNjcmVlbnNob3RVcGxvYWRQcm9taXNlcyIsImludGVyYWN0aW9uc0Jsb2IiLCJqc29uRm9ybURhdGFGaWxlIiwianNvblVwbG9hZFByb21pc2UiLCJqc29uRm9ybURhdGEiLCJqc29uMmRiVXBsb2FkUHJvbWlzZSIsImN1cnJlbnREYXRhIiwibmV3RGF0YSIsIl9jYWxsZWUxOCQiLCJfY29udGV4dDE4IiwidXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wIiwiZmlsdGVyIiwiaXRlbSIsIl9yZWYxMiIsIl9yZWYxMyIsInRpbWVzdGFtcE1hdGNoIiwic25hcHNob3RUaW1lc3RhbXAiLCJfcmVmMTQiLCJfcmVmMTUiLCJzY3JlZW5zaG90VGltZXN0YW1wIiwiZXhwaXJlX3RpbWVzdGFtcCIsIm5vdyIsIkJsb2IiLCJib2R5IiwibWFwIiwiX3JlZjE3IiwiX2NhbGxlZTE2IiwiX3JlZjE2IiwiX3JlZjE4IiwiaHRtbEJsb2IiLCJfY2FsbGVlMTYkIiwiX2NvbnRleHQxNiIsIl94MjciLCJfcmVmMjAiLCJfY2FsbGVlMTciLCJfcmVmMTkiLCJfcmVmMjEiLCJfY2FsbGVlMTckIiwiX2NvbnRleHQxNyIsIl94MjgiLCJmcm9tRW50cmllcyIsIl9yZWYyMiIsIl9yZWYyMyIsIl9yZWYyNCIsIl9yZWYyNSIsIl8iLCJvbkNoYW5nZWQiLCJjaGFuZ2VzIiwiX3RhYnMkIl0sInNvdXJjZVJvb3QiOiIifQ==
