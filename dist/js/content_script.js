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
/* harmony export */   popup_click_probability: () => (/* binding */ popup_click_probability),
/* harmony export */   popup_navigation_probability: () => (/* binding */ popup_navigation_probability),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   popup_scroll_probability: () => (/* binding */ popup_scroll_probability),
/* harmony export */   popup_tabActivate_probability: () => (/* binding */ popup_tabActivate_probability),
/* harmony export */   scroll_threshold: () => (/* binding */ scroll_threshold),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_includes: () => (/* binding */ url_includes),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
var popup_probability = 0.15;
var popup_scroll_probability = 0.08;
var popup_click_probability = 0.18;
var popup_navigation_probability = 0.15;
var popup_tabActivate_probability = 0.15;
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
/*!*******************************!*\
  !*** ./src/content_script.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



function captureScreenshot(_x, _x2) {
  return _captureScreenshot.apply(this, arguments);
}
function _captureScreenshot() {
  _captureScreenshot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(timestamp, uuid) {
    var response;
    return _regeneratorRuntime().wrap(function _callee8$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return chrome.runtime.sendMessage({
            action: 'captureScreenshot',
            timestamp: timestamp,
            uuid: uuid
          });
        case 3:
          response = _context9.sent;
          if (response.success) {
            _context9.next = 6;
            break;
          }
          throw new Error(response.message || 'Screenshot capture failed');
        case 6:
          window.postMessage({
            type: 'SCREENSHOT_COMPLETE',
            timestamp: timestamp,
            success: true
          }, '*');
          _context9.next = 13;
          break;
        case 9:
          _context9.prev = 9;
          _context9.t0 = _context9["catch"](0);
          console.error('Error capturing screenshot in content script:', _context9.t0);
          window.postMessage({
            type: 'SCREENSHOT_COMPLETE',
            timestamp: timestamp,
            success: false,
            error: _context9.t0.message
          }, '*');
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return _captureScreenshot.apply(this, arguments);
}
window.addEventListener('message', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var result, userId, dataForBackground, response2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(event.source !== window)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          if (!(event.data.type && event.data.type === 'GET_USER_ID')) {
            _context.next = 8;
            break;
          }
          _context.next = 5;
          return chrome.storage.local.get('userId');
        case 5:
          result = _context.sent;
          userId = result.userId;
          window.postMessage({
            type: 'GET_USER_ID_RESPONSE',
            userId: userId
          }, '*');
        case 8:
          if (!(event.data.type && event.data.type === 'CAPTURE_SCREENSHOT')) {
            _context.next = 11;
            break;
          }
          _context.next = 11;
          return captureScreenshot(event.data.timestamp, event.data.uuid);
        case 11:
          if (!(event.data.type && event.data.type === 'SAVE_INTERACTION_DATA')) {
            _context.next = 26;
            break;
          }
          _context.prev = 12;
          dataForBackground = _objectSpread({}, event.data.data);
          _context.next = 16;
          return chrome.runtime.sendMessage({
            action: 'saveData',
            data: dataForBackground
          });
        case 16:
          response2 = _context.sent;
          if (response2.success) {
            _context.next = 19;
            break;
          }
          throw new Error(response2.message || 'interaction capture failed');
        case 19:
          window.postMessage({
            type: 'INTERACTION_COMPLETE',
            timestamp: event.data.data.timestamp,
            success: true
          }, '*');
          _context.next = 26;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](12);
          console.error('Error saving interaction data:', _context.t0);
          window.postMessage({
            type: 'INTERACTION_COMPLETE',
            success: false,
            error: _context.t0.message,
            timestamp: event.data.data.timestamp
          }, '*');
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[12, 22]]);
  }));
  return function (_x3) {
    return _ref.apply(this, arguments);
  };
}());
var work = function work() {
  // Define interfaces for Recipe and OrderDetail

  // Extend the Window interface to include custom properties

  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event triggered');
    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
  });

  // Function to capture interactions
  function captureInteraction(_x4, _x5, _x6, _x7, _x8) {
    return _captureInteraction.apply(this, arguments);
  } // let accumulatedScrollDistance = 0
  // let lastScrollTop = window.scrollY || document.documentElement.scrollTop
  // let lastScrollTime = 0 // Track last scroll timestamp
  // const SCROLL_THRESHOLD = 1500 // Minimum time in ms between screenshots for scroll actions
  // // Capture scroll interactions
  // document.addEventListener('scroll', async (event) => {
  //   try {
  //     // scroll don't have a specific target, so we judge whether popup is open
  //     if (document.getElementById('reason-modal')) {
  //       return
  //     }
  //     const currentScrollTop = window.scrollY || document.documentElement.scrollTop
  //     accumulatedScrollDistance += Math.abs(currentScrollTop - lastScrollTop)
  //     lastScrollTop = currentScrollTop
  //     const currentTime = Date.now()
  //     if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
  //       lastScrollTime = currentTime
  //       const timestamp = new Date().toISOString()
  //       const uuid = uuidv4()
  //       await captureInteraction('scroll', event.target, timestamp,  uuid,accumulatedScrollDistance)
  //       await captureScreenshot(timestamp, uuid)
  //       accumulatedScrollDistance = 0
  //     }
  //   } catch (error) {
  //     console.error('Error during scroll event handling:', error)
  //   }
  // })
  // let lastScrollTop = window.scrollY || document.documentElement.scrollTop
  // let accumulatedScrollDistance = 0
  // const handleScrollStop = debounce(async () => {
  //   try {
  //     console.log('handle scroll event')
  //     const currentScrollTop = window.scrollY || document.documentElement.scrollTop
  //     accumulatedScrollDistance = currentScrollTop - lastScrollTop
  //     // console.log(window.scrollY, currentScrollTop, lastScrollTop, accumulatedScrollDistance)
  //     if (accumulatedScrollDistance !== 0) {
  //       const timestamp = new Date().toISOString()
  //       const uuid = uuidv4()
  //       await captureInteraction('scroll', null, timestamp, uuid, accumulatedScrollDistance)
  //       await captureScreenshot(timestamp, uuid)
  //       // Reset after capturing
  //       lastScrollTop = currentScrollTop
  //       accumulatedScrollDistance = 0
  //     }
  //   } catch (error) {
  //     console.error('Error during scroll event handling:', error)
  //   }
  // }, scroll_threshold) // Using the 400ms threshold
  // document.addEventListener('scroll', (event) => {
  //   console.log('scroll event')
  //   if (document.getElementById('reason-modal')) {
  //     return
  //   }
  //   if (
  //     event.target !== window &&
  //     event.target !== document &&
  //     event.target !== document.documentElement
  //   ) {
  //     console.log('Scroll event ignored from a nested scrollable container')
  //     return
  //   }
  //   handleScrollStop()
  // })
  // Variables to track scroll events
  function _captureInteraction() {
    _captureInteraction = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(eventType, target, timestamp, uuid, scrollDistance) {
      var currentSnapshotId, simplifiedHTML, markedDoc, pageMeta, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            // Generate new HTML snapshot ID
            currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
            simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
            pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
            data = {
              uuid: uuid,
              eventType: eventType,
              timestamp: timestamp,
              htmlSnapshotId: currentSnapshotId,
              // Use the new snapshot ID
              pageMeta: pageMeta || '',
              htmlContent: markedDoc.documentElement.outerHTML,
              simplifiedHTML: simplifiedHTML
            };
            if (eventType === 'scroll') {
              data['scrollDistance'] = scrollDistance;
              data['target'] = target;
            }
            if (eventType === 'input') {
              data['input-values'] = (target === null || target === void 0 ? void 0 : target.value) || '';
              data['input-id'] = (target === null || target === void 0 ? void 0 : target.id) || '';
              data['data-element-meta-name'] = target.getAttribute('data-element-meta-name') || '';
              data['data-element-meta-data'] = target.getAttribute('data-element-meta-data') || '';
            }
            _context6.next = 10;
            return chrome.runtime.sendMessage({
              action: 'saveData',
              data: data
            });
          case 10:
            _context6.next = 15;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.error("Error during ".concat(eventType, " event handling:"), _context6.t0);
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee5, null, [[0, 12]]);
    }));
    return _captureInteraction.apply(this, arguments);
  }
  var isScrolling = false;
  var scrollTimeout;
  var scrollStartTop = window.scrollY || document.documentElement.scrollTop;
  var accumulatedScrollDistance = 0;

  // Function to handle the first scroll event in a scroll sequence
  function handleFirstScroll(_x9, _x10) {
    return _handleFirstScroll.apply(this, arguments);
  } // Function to handle when scrolling stops (no scroll events within the threshold)
  function _handleFirstScroll() {
    _handleFirstScroll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(scrollUuid, scrollTimestamp) {
      return _regeneratorRuntime().wrap(function _callee6$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            try {
              console.log('First scroll event');
              captureScreenshot(scrollTimestamp, scrollUuid);
              (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            } catch (error) {
              console.error('Error during first scroll handling:', error);
            }
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee6);
    }));
    return _handleFirstScroll.apply(this, arguments);
  }
  function handleScrollStop(_x11, _x12) {
    return _handleScrollStop.apply(this, arguments);
  }
  function _handleScrollStop() {
    _handleScrollStop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(scrollUuid, scrollTimestamp) {
      var currentScrollTop;
      return _regeneratorRuntime().wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log('scroll stop uuid', scrollUuid);
            currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            accumulatedScrollDistance += currentScrollTop - scrollStartTop;
            if (!(accumulatedScrollDistance !== 0)) {
              _context8.next = 9;
              break;
            }
            _context8.next = 7;
            return captureInteraction('scroll', null, scrollTimestamp, scrollUuid, accumulatedScrollDistance);
          case 7:
            // Reset accumulated scroll distance
            accumulatedScrollDistance = 0;
            scrollStartTop = currentScrollTop;
          case 9:
            isScrolling = false;
            _context8.next = 15;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            console.error('Error during scroll stop handling:', _context8.t0);
          case 15:
          case "end":
            return _context8.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return _handleScrollStop.apply(this, arguments);
  }
  var scrollUuid = '';
  var scrollTimestamp = '';
  // Event listener for scroll events
  document.addEventListener('scroll', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log('scroll event');
            if (!document.getElementById('reason-modal')) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            if (!(event.target !== window && event.target !== document && event.target !== document.documentElement)) {
              _context2.next = 6;
              break;
            }
            console.log('Scroll event ignored from a nested scrollable container');
            return _context2.abrupt("return");
          case 6:
            if (isScrolling) {
              _context2.next = 13;
              break;
            }
            isScrolling = true;
            scrollStartTop = window.scrollY || document.documentElement.scrollTop;
            scrollUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
            scrollTimestamp = new Date().toISOString();
            _context2.next = 13;
            return handleFirstScroll(scrollUuid, scrollTimestamp);
          case 13:
            // Clear the existing timeout and set a new one
            window.clearTimeout(scrollTimeout);
            scrollTimeout = window.setTimeout(function () {
              return handleScrollStop(scrollUuid, scrollTimestamp);
            }, _config__WEBPACK_IMPORTED_MODULE_1__.scroll_threshold); // Threshold of 300ms
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x13) {
      return _ref2.apply(this, arguments);
    };
  }());

  // document.addEventListener(
  //   'blur',
  //   async (event) => {
  //     const target = event.target as HTMLElement
  //     if (isFromPopup(target)) return
  //     if (
  //       target &&
  //       ((target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'text') ||
  //         target.tagName === 'TEXTAREA')
  //     ) {
  //       const timestamp = new Date().toISOString()
  //       const uuid = uuidv4()
  //       await captureScreenshot(timestamp, uuid)
  //       await captureInteraction('input', target, timestamp, uuid)
  //     }
  //   },
  //   true
  // )

  document.addEventListener('DOMContentLoaded', function () {
    // Handle all types of order buttons
    var placeOrderButtons = document.querySelectorAll('input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]');
    var buyNowButton = document.querySelector('input[id="buy-now-button"]');
    var setupNowButton = document.querySelector('button[id="rcx-subscribe-submit-button-announce"]');
    var proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]')

    // Handle Buy Now and Set Up Now buttons if present
    ;
    [buyNowButton, setupNowButton].forEach(function (button) {
      if (button) {
        button.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var _document$querySelect, _document$querySelect2, _document$querySelect3, productInfo, optionRows;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                productInfo = {
                  title: ((_document$querySelect = document.querySelector('#title')) === null || _document$querySelect === void 0 || (_document$querySelect = _document$querySelect.innerText) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.trim()) || '',
                  price: ((_document$querySelect2 = document.querySelector('span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay')) === null || _document$querySelect2 === void 0 || (_document$querySelect2 = _document$querySelect2.innerText) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.trim()) || '',
                  asin: ((_document$querySelect3 = document.querySelector('input#ASIN')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value) || '',
                  options: {}
                }; // Get all option selections
                optionRows = Array.from(document.querySelectorAll('#twister div.a-row:has(label.a-form-label):has(span.selection)'));
                optionRows.forEach(function (row) {
                  var _row$querySelector, _row$querySelector2;
                  var label = ((_row$querySelector = row.querySelector('label.a-form-label')) === null || _row$querySelector === void 0 || (_row$querySelector = _row$querySelector.innerText) === null || _row$querySelector === void 0 ? void 0 : _row$querySelector.replace(': ', '')) || '';
                  var value = ((_row$querySelector2 = row.querySelector('span.selection')) === null || _row$querySelector2 === void 0 ? void 0 : _row$querySelector2.innerText) || '';
                  if (label && value) {
                    ;
                    productInfo.options[label] = value;
                  }
                });
                console.log("".concat(button.id, " clicked - Product Info:"), productInfo);
                _context3.next = 7;
                return chrome.runtime.sendMessage({
                  action: 'saveOrder',
                  data: {
                    timestamp: new Date().toISOString(),
                    name: productInfo.title,
                    price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
                    asin: productInfo.asin,
                    options: productInfo.options
                  }
                });
              case 7:
                _context3.next = 12;
                break;
              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.error("Error capturing ".concat(button.id, " product info:"), _context3.t0);
              case 12:
              case "end":
                return _context3.stop();
            }
          }, _callee3, null, [[0, 9]]);
        })));
      }
    });
    if (proceedToCheckoutButton) {
      proceedToCheckoutButton.addEventListener('click', /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
          var selectedItems, cartItems, _iterator, _step, _loop;
          return _regeneratorRuntime().wrap(function _callee4$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                selectedItems = [];
                cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter(function (item) {
                  return item.id !== 'sc-active-cart';
                });
                _iterator = _createForOfIteratorHelper(cartItems);
                _context5.prev = 4;
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var item, checkbox, productLink, _fullNameElement$text, _href$match, _priceElement$textCon, fullNameElement, name, href, asin, priceElement, price, options, variationElements;
                  return _regeneratorRuntime().wrap(function _loop$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        item = _step.value;
                        checkbox = item.querySelector('input[type="checkbox"]');
                        if (checkbox && checkbox.checked) {
                          productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link');
                          if (productLink) {
                            fullNameElement = productLink.querySelector('.a-truncate-full');
                            name = (fullNameElement === null || fullNameElement === void 0 || (_fullNameElement$text = fullNameElement.textContent) === null || _fullNameElement$text === void 0 ? void 0 : _fullNameElement$text.trim()) || '';
                            href = productLink.getAttribute('href') || '';
                            asin = ((_href$match = href.match(/product\/([A-Z0-9]{10})/)) === null || _href$match === void 0 ? void 0 : _href$match[1]) || '';
                            priceElement = item.querySelector('.sc-item-price-block .a-offscreen');
                            price = priceElement ? parseFloat(((_priceElement$textCon = priceElement.textContent) === null || _priceElement$textCon === void 0 ? void 0 : _priceElement$textCon.replace(/[^0-9.]/g, '')) || '0') : 0;
                            options = {};
                            variationElements = item.querySelectorAll('.sc-product-variation');
                            variationElements.forEach(function (variation) {
                              var _variation$querySelec, _variation$querySelec2;
                              var label = ((_variation$querySelec = variation.querySelector('.a-text-bold')) === null || _variation$querySelec === void 0 || (_variation$querySelec = _variation$querySelec.textContent) === null || _variation$querySelec === void 0 ? void 0 : _variation$querySelec.trim().replace(':', '')) || '';
                              var value = ((_variation$querySelec2 = variation.querySelector('.a-size-small:not(.a-text-bold)')) === null || _variation$querySelec2 === void 0 || (_variation$querySelec2 = _variation$querySelec2.textContent) === null || _variation$querySelec2 === void 0 ? void 0 : _variation$querySelec2.trim()) || '';
                              if (label && value) {
                                options[label] = value;
                              }
                            });
                            selectedItems.push({
                              timestamp: new Date().toISOString(),
                              name: name,
                              asin: asin,
                              price: price,
                              options: options
                            });
                          }
                        }
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _loop);
                });
                _iterator.s();
              case 7:
                if ((_step = _iterator.n()).done) {
                  _context5.next = 11;
                  break;
                }
                return _context5.delegateYield(_loop(), "t0", 9);
              case 9:
                _context5.next = 7;
                break;
              case 11:
                _context5.next = 16;
                break;
              case 13:
                _context5.prev = 13;
                _context5.t1 = _context5["catch"](4);
                _iterator.e(_context5.t1);
              case 16:
                _context5.prev = 16;
                _iterator.f();
                return _context5.finish(16);
              case 19:
                if (!(selectedItems.length > 0)) {
                  _context5.next = 22;
                  break;
                }
                _context5.next = 22;
                return chrome.runtime.sendMessage({
                  action: 'saveOrder',
                  data: selectedItems
                });
              case 22:
                _context5.next = 27;
                break;
              case 24:
                _context5.prev = 24;
                _context5.t2 = _context5["catch"](0);
                console.error('Error capturing selected cart items:', _context5.t2);
              case 27:
              case "end":
                return _context5.stop();
            }
          }, _callee4, null, [[0, 24], [4, 13, 16, 19]]);
        }));
        return function (_x14) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('message', message);
    if (message.action === 'getHTML') {
      var simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
      var markedDoc = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.getClickableElementsInViewport)();
      var htmlContent = markedDoc.documentElement.outerHTML;
      var pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
      sendResponse({
        html: htmlContent,
        pageMeta: pageMeta,
        simplifiedHTML: simplifiedHTML
      });
    }
    if (message.action === 'show_popup') {
      console.log('show_popup', message);
      // assert there isn't already a popup
      if (document.getElementById('reason-modal')) {
        sendResponse({
          success: false,
          message: 'popup already exists'
        });
        return;
      }
      createModal(message.question, sendResponse);
      return true; // Will respond asynchronously
    }
  });
  function createModal(question, sendResponse) {
    var modalHtml = "\n        <div id=\"reason-modal\" style=\"\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 10000;\n        \">\n            <div style=\"\n                background: white;\n                padding: 20px;\n                border-radius: 8px;\n                width: 400px;\n            \">\n                <h3>".concat(question, "</h3>\n                <textarea id=\"reason-input\" style=\"\n                    width: 100%;\n                    height: 100px;\n                    margin: 10px 0;\n                \"></textarea>\n                <div style=\"\n                    text-align: right;\n                    display: flex;\n                    justify-content: flex-end;\n                    gap: 10px;\n                \">\n                    <button id=\"reason-skip\">Skip</button>\n                    <button id=\"reason-submit\">Submit</button>\n                </div>\n            </div>\n        </div>\n    ");
    var modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHtml;
    // if attach-desktop-sideSheet exists
    if (document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')) {
      document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)').appendChild(modalContainer);
    } else {
      document.body.appendChild(modalContainer);
    }

    // Add event listeners
    document.getElementById('reason-submit').addEventListener('click', function () {
      var input = document.getElementById('reason-input');
      console.log('submitBtn clicked');
      var value = input.value;
      modalContainer.remove();
      sendResponse({
        input: value
      });
    });
    document.getElementById('reason-skip').addEventListener('click', function () {
      var input = document.getElementById('reason-input');
      modalContainer.remove();
      sendResponse({
        input: null
      });
    });
  }
};
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then(function (result) {
  console.log('content script, shouldExclude', result);
  if (!result) {
    work();
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRXlSLE1BQU0sQ0FBQztFQUNwRCxJQUFJLENBQUNBLE1BQU0sRUFBRTtJQUNYOEUsSUFBSSxDQUFDLENBQUM7RUFDUjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF9zY3JvbGxfcHJvYmFiaWxpdHkgPSAwLjA4XG5leHBvcnQgY29uc3QgcG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkgPSAwLjE4XG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKTpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSlcIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSk6bm90KDpoYXMoaW5wdXRbdHlwZT0nY2hlY2tib3gnXSkpXCIsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwibGk6aGFzKGlucHV0W3R5cGU9J2NoZWNrYm94J10pXCIsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsIGRhdGE6IHsgdGl0bGU6IHRleHQsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJsaTpub3QoOmhhcyhpbnB1dFt0eXBlPSdjaGVja2JveCddKSlcIixcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsIGRhdGE6IHsgdGl0bGU6IHRleHQsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSwgZGF0YTogeyB0aXRsZTogdGV4dCwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eScsXG4gIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gIGNsYXNzOiAncHJvZHVjdC1hZGQtdG8tY2FydCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYnV5LW5vdyddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdidXlfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICBzZWxlY3RvcjogJyNidXlCb3hBY2NvcmRpb24gPiBkaXYuYS1ib3guY2Vsd2lkZ2V0JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lOm5vdCg6aGFzKCNuLXRpdGxlKSk6aGFzKHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCk6aGFzKHVsIHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaSk6bm90KCNyZXZpZXdzUmVmaW5lbWVudHMpOm5vdCgjZGVwYXJ0bWVudHMpOm5vdCgjcHJpY2VSZWZpbmVtZW50cyk6bm90KCNmaWx0ZXJzKScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlZmluZW1lbnRfb3B0aW9uXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlcGFydG1lbnQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBlbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZCA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmV2aWV3c1JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXN0b21lciBSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3ByaWNlUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIC8vIDIgY2FzZXM6IHNlbGVjdGlvbiAvIHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwXzM2LXRpdGxlLCBkaXYuc2YtcmVmaW5lbWVudC1oZWFkaW5nIHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDE6IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZGVyLmEtcG9wb3Zlci1oZWFkZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhbltkYXRhLWNvbXBvbmVudC10eXBlPSdzLXByb2R1Y3QtaW1hZ2UnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfc3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDIpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbGFiZWw6ICd0aXRsZScsIHZhbHVlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IGRpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUuYW9rLWFsaWduLWNlbnRlci5hb2stcmVsYXRpdmUgPiBzcGFuLmFvay1vZmZzY3JlZW4sICNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ3ByaWNlJywgdmFsdWU6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgbGFiZWwuYS1mb3JtLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBzcGFuLnNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIHNwYW46bm90KC5hb2staGlkZGVuKSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bCwgI2ZlYXR1cmVidWxsZXRzX2ZlYXR1cmVfZGl2IHVsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbToge30nLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYnVsbGV0X2xpc3QnLCB2YWx1ZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMiBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cF90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGxhYmVsOiAnYXNpbicsIHZhbHVlOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVCdXlib3ggZGl2LmEtc2VjdGlvbi5hLXRleHQtY2VudGVyLmEtc3BhY2luZy1zbWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBsYWJlbDogJ2FzaW4nLCB2YWx1ZTogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9XG5dXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoZWxlbWVudDogYW55LCByZWNpcGU6IGFueSwgcGFyZW50TmFtZSA9ICcnLCBudGhDaGlsZCA9IDApIHtcbiAgLy8gY29uc29sZS5sb2coXCJwcm9jZXNzaW5nIGVsZW1lbnQ6IFwiLCBlbGVtZW50LCByZWNpcGUpO1xuICAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudCB1c2luZyB0aGUgRE9NIEFQSVxuICBsZXQgdGFnTmFtZSA9IHJlY2lwZS50YWdfbmFtZSB8fCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAvLyBIYW5kbGUgdW5kZXJzY29yZWQgdGFnc1xuICBpZiAodGFnTmFtZS5lbmRzV2l0aCgnXycpKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpXG4gIH1cbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcblxuICAvLyBFeHRyYWN0IHRleHQgY29udGVudCBiYXNlZCBvbiB0aGUgcmVjaXBlXG4gIGxldCBlbGVtZW50VGV4dCA9ICcnXG4gIGlmIChyZWNpcGUudGV4dF9zZWxlY3Rvcikge1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS50ZXh0X3NlbGVjdG9yKVxuICAgIGlmICh0ZXh0RWxlbWVudCkge1xuICAgICAgZWxlbWVudFRleHQgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQgfHwgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfanMpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2pzKGVsZW1lbnQpXG4gICAgaWYgKGVsZW1lbnRUZXh0ID09PSAnJyB8fCBlbGVtZW50VGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGV4dCBqcyBkb2VzIG5vdCBkZXRlY3QgdGV4dCBmb3IgZWxlbWVudCAnLCBlbGVtZW50KVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUuYWRkX3RleHQpIHtcbiAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgfVxuICBlbGVtZW50VGV4dCA9IGVsZW1lbnRUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0LnJlcGxhY2UoJ3t9JywgZWxlbWVudFRleHQpXG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXRcbiAgfVxuXG4gIGlmIChlbGVtZW50VGV4dCAmJiByZWNpcGUuYWRkX3RleHQpIHtcbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHRcbiAgfVxuXG4gIC8vIEJ1aWxkIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgbGV0IGVsZW1lbnROYW1lID0gJydcbiAgaWYgKHJlY2lwZS5uYW1lKSB7XG4gICAgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV90ZXh0Jykge1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZWxlbWVudFRleHQgaXMgZW1wdHknLCByZWNpcGUsIGVsZW1lbnQpXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50IHRleHQgbm90IGZvdW5kXCIpO1xuICAgICAgICBlbGVtZW50TmFtZSA9ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50TmFtZSArPSBlbGVtZW50VGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX250aF9jaGlsZCcpIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gbnRoQ2hpbGQudG9TdHJpbmcoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IHJlY2lwZS5uYW1lXG4gICAgfVxuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgZWxlbWVudE5hbWUpXG4gICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lXG4gIH1cblxuICBpZiAocmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKSB7XG4gICAgY29uc3QgbWV0YW9iaiA9IHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YShlbGVtZW50KVxuICAgIGNvbnN0IG1ldGFkYXRhID0gSlNPTi5zdHJpbmdpZnkobWV0YW9iai5kYXRhKVxuICAgIGNvbnN0IG1ldGFuYW1lID0gbWV0YW9iai5uYW1lXG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScsIG1ldGFuYW1lKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJywgbWV0YWRhdGEpXG4gICAgLy8gY29uc29sZS5sb2coJ21ldGFkYXRhIGdlbmVyYXRlZDogJywgbWV0YWRhdGEsICcgd2l0aCBuYW1lOiAnLCBtZXRhbmFtZSlcbiAgfVxuXG4gIC8vIEhhbmRsZSBjbGlja2FibGVzIGFuZCBpbnB1dHNcbiAgaWYgKHJlY2lwZS5jbGlja2FibGUpIHtcbiAgICBpZiAoIXJlY2lwZS5uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsaWNrYWJsZSBlbGVtZW50IG11c3QgaGF2ZSBhIG5hbWUnKVxuICAgIH1cbiAgICAvLyBoYW5kbGUgY2xpY2tfc2VsZWN0b3JcbiAgICBsZXQgY2xpY2tfZWxlbWVudDogRWxlbWVudCB8IG51bGxcbiAgICBpZiAocmVjaXBlLmNsaWNrX3NlbGVjdG9yKSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5jbGlja19zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG4gICAgaWYgKGNsaWNrX2VsZW1lbnQpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2stZWxlbWVudCBub3QgZm91bmQnLCBlbGVtZW50LCByZWNpcGUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgaWYgKFsndGV4dCcsICdudW1iZXInXS5pbmNsdWRlcyhpbnB1dFR5cGUpKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5pbnB1dF9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIC8vICoqSGFuZGxlIHNlbGVjdCBlbGVtZW50cyoqXG4gIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgIC8vIFRhZyB0aGUgc2VsZWN0IGVsZW1lbnQgd2l0aCBkYXRhLXNlbGVjdC1pZFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdC1pZCcsIGVsZW1lbnROYW1lKVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbjogYW55KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgb3B0aW9uLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnROYW1lICsgJy4nICsgb3B0aW9uVmFsdWVcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLnNlbGVjdGVkLnRvU3RyaW5nKCkpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gcHJvY2Vzc0VsZW1lbnQoY2hpbGRFbGVtZW50LCBjaGlsZFJlY2lwZSwgcGFyZW50TmFtZSwgaW5kZXgpXG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlcywgY2hlY2tfdXNlcl9pZF91cmwgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKCkge1xuICBjb25zdCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSgpIHtcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuXG4gIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgJ3RleHQnXG4gICAgaWYgKG1hdGNoTWV0aG9kID09PSAndGV4dCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUubWF0Y2gpXG5cbiAgICAgICAgY29uc3QgaGFzTWF0Y2ggPVxuICAgICAgICAgIGVsZW1lbnQgJiZcbiAgICAgICAgICAoIXJlY2lwZS5tYXRjaF90ZXh0IHx8XG4gICAgICAgICAgICAoZWxlbWVudC50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhyZWNpcGUubWF0Y2hfdGV4dC50b0xvd2VyQ2FzZSgpKSA/PyBmYWxzZSkpXG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgcmV0dXJuIHJlY2lwZVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZWNpcGUoKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKClcbiAgICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBpc0Zyb21Qb3B1cCxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNjcm9sbF90aHJlc2hvbGQgfSBmcm9tICcuL2NvbmZpZydcblxuYXN5bmMgZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgdXVpZFxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8ICdTY3JlZW5zaG90IGNhcHR1cmUgZmFpbGVkJylcbiAgICB9XG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgIH0sXG4gICAgICAnKidcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3QgaW4gY29udGVudCBzY3JpcHQ6JywgZXJyb3IpXG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfSxcbiAgICAgICcqJ1xuICAgIClcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpIHJldHVyblxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICBjb25zdCB1c2VySWQgPSByZXN1bHQudXNlcklkXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJywgdXNlcklkOiB1c2VySWQgfSwgJyonKVxuICB9XG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FQVFVSRV9TQ1JFRU5TSE9UJykge1xuICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KGV2ZW50LmRhdGEudGltZXN0YW1wLCBldmVudC5kYXRhLnV1aWQpXG4gIH1cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFGb3JCYWNrZ3JvdW5kID0geyAuLi5ldmVudC5kYXRhLmRhdGEgfVxuXG4gICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogJ3NhdmVEYXRhJyxcbiAgICAgICAgZGF0YTogZGF0YUZvckJhY2tncm91bmRcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlMi5zdWNjZXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZTIubWVzc2FnZSB8fCAnaW50ZXJhY3Rpb24gY2FwdHVyZSBmYWlsZWQnKVxuICAgICAgfVxuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGludGVyYWN0aW9uIGRhdGE6JywgZXJyb3IpXG4gICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcFxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIC8vIERlZmluZSBpbnRlcmZhY2VzIGZvciBSZWNpcGUgYW5kIE9yZGVyRGV0YWlsXG4gIGludGVyZmFjZSBSZWNpcGUge1xuICAgIHRhZ19uYW1lPzogc3RyaW5nXG4gICAgdGV4dF9zZWxlY3Rvcj86IHN0cmluZ1xuICAgIHRleHRfanM/OiBzdHJpbmdcbiAgICBhZGRfdGV4dD86IGJvb2xlYW5cbiAgICB0ZXh0X2Zvcm1hdD86IHN0cmluZ1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjbGlja2FibGU/OiBib29sZWFuXG4gICAgY2xpY2tfc2VsZWN0b3I/OiBzdHJpbmdcbiAgICBrZWVwX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgb3ZlcnJpZGVfYXR0cj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBjaGlsZHJlbj86IFJlY2lwZVtdXG4gICAgaW5zZXJ0X3NwbGl0X21hcmtlcj86IGJvb2xlYW5cbiAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5PzogbnVtYmVyXG4gICAgZGlyZWN0X2NoaWxkPzogYm9vbGVhblxuICAgIGVtcHR5X21lc3NhZ2U/OiBzdHJpbmdcbiAgICBba2V5OiBzdHJpbmddOiBhbnkgLy8gQWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gIH1cblxuICBpbnRlcmZhY2UgT3JkZXJEZXRhaWwge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHByaWNlOiBudW1iZXJcbiAgfVxuXG4gIC8vIEV4dGVuZCB0aGUgV2luZG93IGludGVyZmFjZSB0byBpbmNsdWRlIGN1c3RvbSBwcm9wZXJ0aWVzXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCBldmVudCB0cmlnZ2VyZWQnKVxuICAgIHByb2Nlc3NSZWNpcGUoKVxuICB9KVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNhcHR1cmUgaW50ZXJhY3Rpb25zXG4gIGFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICB0YXJnZXQ6IGFueSxcbiAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICB1dWlkOiBzdHJpbmcsXG4gICAgc2Nyb2xsRGlzdGFuY2U/OiBudW1iZXJcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgY29uc3QgbWFya2VkRG9jID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KClcblxuICAgICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblxuICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsIC8vIFVzZSB0aGUgbmV3IHNuYXBzaG90IElEXG4gICAgICAgIHBhZ2VNZXRhOiBwYWdlTWV0YSB8fCAnJyxcbiAgICAgICAgaHRtbENvbnRlbnQ6IG1hcmtlZERvYy5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUxcbiAgICAgIH1cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdzY3JvbGwnKSB7XG4gICAgICAgIGRhdGFbJ3Njcm9sbERpc3RhbmNlJ10gPSBzY3JvbGxEaXN0YW5jZVxuICAgICAgICBkYXRhWyd0YXJnZXQnXSA9IHRhcmdldFxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC12YWx1ZXMnXSA9IHRhcmdldD8udmFsdWUgfHwgJydcbiAgICAgICAgZGF0YVsnaW5wdXQtaWQnXSA9IHRhcmdldD8uaWQgfHwgJydcbiAgICAgICAgZGF0YVsnZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpIHx8ICcnXG4gICAgICAgIGRhdGFbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlRGF0YScsIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgLy8gbGV0IGxhc3RTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIC8vIGxldCBsYXN0U2Nyb2xsVGltZSA9IDAgLy8gVHJhY2sgbGFzdCBzY3JvbGwgdGltZXN0YW1wXG4gIC8vIGNvbnN0IFNDUk9MTF9USFJFU0hPTEQgPSAxNTAwIC8vIE1pbmltdW0gdGltZSBpbiBtcyBiZXR3ZWVuIHNjcmVlbnNob3RzIGZvciBzY3JvbGwgYWN0aW9uc1xuICAvLyAvLyBDYXB0dXJlIHNjcm9sbCBpbnRlcmFjdGlvbnNcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIC8vIHNjcm9sbCBkb24ndCBoYXZlIGEgc3BlY2lmaWMgdGFyZ2V0LCBzbyB3ZSBqdWRnZSB3aGV0aGVyIHBvcHVwIGlzIG9wZW5cbiAgLy8gICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgLy8gICAgICAgcmV0dXJuXG4gIC8vICAgICB9XG4gIC8vICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAvLyAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSArPSBNYXRoLmFicyhjdXJyZW50U2Nyb2xsVG9wIC0gbGFzdFNjcm9sbFRvcClcbiAgLy8gICAgIGxhc3RTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wXG4gIC8vICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KClcbiAgLy8gICAgIGlmIChjdXJyZW50VGltZSAtIGxhc3RTY3JvbGxUaW1lID49IFNDUk9MTF9USFJFU0hPTEQpIHtcbiAgLy8gICAgICAgbGFzdFNjcm9sbFRpbWUgPSBjdXJyZW50VGltZVxuICAvLyAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgLy8gICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbignc2Nyb2xsJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsICB1dWlkLGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCwgdXVpZClcbiAgLy8gICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNjcm9sbCBldmVudCBoYW5kbGluZzonLCBlcnJvcilcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gbGV0IGxhc3RTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIC8vIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuXG4gIC8vIGNvbnN0IGhhbmRsZVNjcm9sbFN0b3AgPSBkZWJvdW5jZShhc3luYyAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgc2Nyb2xsIGV2ZW50JylcbiAgLy8gICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIC8vICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gY3VycmVudFNjcm9sbFRvcCAtIGxhc3RTY3JvbGxUb3BcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCBjdXJyZW50U2Nyb2xsVG9wLCBsYXN0U2Nyb2xsVG9wLCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlKVxuICAvLyAgICAgaWYgKGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgIT09IDApIHtcbiAgLy8gICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gIC8vICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAvLyAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oJ3Njcm9sbCcsIG51bGwsIHRpbWVzdGFtcCwgdXVpZCwgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSlcbiAgLy8gICAgICAgYXdhaXQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wLCB1dWlkKVxuXG4gIC8vICAgICAgIC8vIFJlc2V0IGFmdGVyIGNhcHR1cmluZ1xuICAvLyAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAvLyAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICAvLyAgICAgfVxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIGV2ZW50IGhhbmRsaW5nOicsIGVycm9yKVxuICAvLyAgIH1cbiAgLy8gfSwgc2Nyb2xsX3RocmVzaG9sZCkgLy8gVXNpbmcgdGhlIDQwMG1zIHRocmVzaG9sZFxuXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdzY3JvbGwgZXZlbnQnKVxuXG4gIC8vICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuICAvLyAgICAgcmV0dXJuXG4gIC8vICAgfVxuICAvLyAgIGlmIChcbiAgLy8gICAgIGV2ZW50LnRhcmdldCAhPT0gd2luZG93ICYmXG4gIC8vICAgICBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ICYmXG4gIC8vICAgICBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAvLyAgICkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ1Njcm9sbCBldmVudCBpZ25vcmVkIGZyb20gYSBuZXN0ZWQgc2Nyb2xsYWJsZSBjb250YWluZXInKVxuICAvLyAgICAgcmV0dXJuXG4gIC8vICAgfVxuICAvLyAgIGhhbmRsZVNjcm9sbFN0b3AoKVxuICAvLyB9KVxuXG4gIC8vIFZhcmlhYmxlcyB0byB0cmFjayBzY3JvbGwgZXZlbnRzXG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlXG4gIGxldCBzY3JvbGxUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGZpcnN0IHNjcm9sbCBldmVudCBpbiBhIHNjcm9sbCBzZXF1ZW5jZVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaXJzdFNjcm9sbChzY3JvbGxVdWlkOiBzdHJpbmcsIHNjcm9sbFRpbWVzdGFtcDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJzdCBzY3JvbGwgZXZlbnQnKVxuICAgICAgY2FwdHVyZVNjcmVlbnNob3Qoc2Nyb2xsVGltZXN0YW1wLCBzY3JvbGxVdWlkKVxuICAgICAgcHJvY2Vzc1JlY2lwZSgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBmaXJzdCBzY3JvbGwgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHdoZW4gc2Nyb2xsaW5nIHN0b3BzIChubyBzY3JvbGwgZXZlbnRzIHdpdGhpbiB0aGUgdGhyZXNob2xkKVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQ6IHN0cmluZywgc2Nyb2xsVGltZXN0YW1wOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ3Njcm9sbCBzdG9wIHV1aWQnLCBzY3JvbGxVdWlkKVxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgKz0gY3VycmVudFNjcm9sbFRvcCAtIHNjcm9sbFN0YXJ0VG9wXG5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICE9PSAwKSB7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIGludGVyYWN0aW9uIHdpdGggdGhlIGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzY3JvbGxUaW1lc3RhbXAsXG4gICAgICAgICAgc2Nyb2xsVXVpZCxcbiAgICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlXG4gICAgICAgIClcbiAgICAgICAgLy8gUmVzZXQgYWNjdW11bGF0ZWQgc2Nyb2xsIGRpc3RhbmNlXG4gICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgPSAwXG4gICAgICAgIHNjcm9sbFN0YXJ0VG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAgICAgfVxuICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIHN0b3AgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgbGV0IHNjcm9sbFV1aWQgPSAnJ1xuICBsZXQgc2Nyb2xsVGltZXN0YW1wID0gJydcbiAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCBldmVudCcpXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsIGV2ZW50IGlnbm9yZWQgZnJvbSBhIG5lc3RlZCBzY3JvbGxhYmxlIGNvbnRhaW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsaW5nKSB7XG4gICAgICBpc1Njcm9sbGluZyA9IHRydWVcbiAgICAgIHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgc2Nyb2xsVXVpZCA9IHV1aWR2NCgpXG4gICAgICBzY3JvbGxUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIGF3YWl0IGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcClcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGltZW91dCBhbmQgc2V0IGEgbmV3IG9uZVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dClcbiAgICBzY3JvbGxUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAoKSA9PiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcCksXG4gICAgICBzY3JvbGxfdGhyZXNob2xkXG4gICAgKSAvLyBUaHJlc2hvbGQgb2YgMzAwbXNcbiAgfSlcblxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAvLyAgICdibHVyJyxcbiAgLy8gICBhc3luYyAoZXZlbnQpID0+IHtcbiAgLy8gICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAvLyAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHJldHVyblxuICAvLyAgICAgaWYgKFxuICAvLyAgICAgICB0YXJnZXQgJiZcbiAgLy8gICAgICAgKCh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiAodGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICd0ZXh0JykgfHxcbiAgLy8gICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJylcbiAgLy8gICAgICkge1xuICAvLyAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgLy8gICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCwgdXVpZClcbiAgLy8gICAgICAgYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKCdpbnB1dCcsIHRhcmdldCwgdGltZXN0YW1wLCB1dWlkKVxuICAvLyAgICAgfVxuICAvLyAgIH0sXG4gIC8vICAgdHJ1ZVxuICAvLyApXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBIYW5kbGUgYWxsIHR5cGVzIG9mIG9yZGVyIGJ1dHRvbnNcbiAgICBjb25zdCBwbGFjZU9yZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnaW5wdXRbaWQ9XCJwbGFjZU9yZGVyXCJdLCBpbnB1dFtpZD1cInR1cmJvLWNoZWNrb3V0LXB5by1idXR0b25cIl0nXG4gICAgKVxuICAgIGNvbnN0IGJ1eU5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiYnV5LW5vdy1idXR0b25cIl0nKVxuICAgIGNvbnN0IHNldHVwTm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdidXR0b25baWQ9XCJyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2VcIl0nXG4gICAgKVxuICAgIGNvbnN0IHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2NlZWRUb1JldGFpbENoZWNrb3V0XCJdJylcblxuICAgIC8vIEhhbmRsZSBCdXkgTm93IGFuZCBTZXQgVXAgTm93IGJ1dHRvbnMgaWYgcHJlc2VudFxuICAgIDtbYnV5Tm93QnV0dG9uLCBzZXR1cE5vd0J1dHRvbl0uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZm8gPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQ/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgICAgICAgcHJpY2U6XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknXG4gICAgICAgICAgICAgICAgICApIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgKT8uaW5uZXJUZXh0Py50cmltKCkgfHwgJycsXG4gICAgICAgICAgICAgIGFzaW46IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9wdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgICAgICBjb25zdCBvcHRpb25Sb3dzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbiknXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIG9wdGlvblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsID1cbiAgICAgICAgICAgICAgICAocm93LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsLmEtZm9ybS1sYWJlbCcpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0Py5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgJzogJyxcbiAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgKSB8fCAnJ1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChyb3cucXVlcnlTZWxlY3Rvcignc3Bhbi5zZWxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudCk/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICA7KHByb2R1Y3RJbmZvLm9wdGlvbnMgYXMgYW55KVtsYWJlbF0gPSB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtidXR0b24uaWR9IGNsaWNrZWQgLSBQcm9kdWN0IEluZm86YCwgcHJvZHVjdEluZm8pXG5cbiAgICAgICAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnc2F2ZU9yZGVyJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLnRpdGxlLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByb2R1Y3RJbmZvLnByaWNlLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKSxcbiAgICAgICAgICAgICAgICBhc2luOiBwcm9kdWN0SW5mby5hc2luLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RJbmZvLm9wdGlvbnNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2FwdHVyaW5nICR7YnV0dG9uLmlkfSBwcm9kdWN0IGluZm86YCwgZXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uKSB7XG4gICAgICBwcm9jZWVkVG9DaGVja291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInNjLWFjdGl2ZS1cIl0nKSkuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09ICdzYy1hY3RpdmUtY2FydCdcbiAgICAgICAgICApXG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgIGlmIChjaGVja2JveCAmJiBjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RMaW5rID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcm9kdWN0LXRpdGxlLWNvbnQgLnNjLXByb2R1Y3QtbGluaycpXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0TGluaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lRWxlbWVudCA9IHByb2R1Y3RMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5hLXRydW5jYXRlLWZ1bGwnKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmdWxsTmFtZUVsZW1lbnQ/LnRleHRDb250ZW50Py50cmltKCkgfHwgJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwcm9kdWN0TGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBocmVmLm1hdGNoKC9wcm9kdWN0XFwvKFtBLVowLTldezEwfSkvKT8uWzFdIHx8ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByaWNlLWJsb2NrIC5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgID8gcGFyc2VGbG9hdChwcmljZUVsZW1lbnQudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1teMC05Ll0vZywgJycpIHx8ICcwJylcbiAgICAgICAgICAgICAgICAgIDogMFxuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uRWxlbWVudHMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy1wcm9kdWN0LXZhcmlhdGlvbicpXG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uRWxlbWVudHMuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS10ZXh0LWJvbGQnKT8udGV4dENvbnRlbnQ/LnRyaW0oKS5yZXBsYWNlKCc6JywgJycpIHx8XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYS1zaXplLXNtYWxsOm5vdCguYS10ZXh0LWJvbGQpJylcbiAgICAgICAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50Py50cmltKCkgfHwgJydcbiAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2xhYmVsXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICBhc2luLFxuICAgICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3NhdmVPcmRlcicsIGRhdGE6IHNlbGVjdGVkSXRlbXMgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNlbGVjdGVkIGNhcnQgaXRlbXM6JywgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBtZXNzYWdlKVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0SFRNTCcpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBwcm9jZXNzUmVjaXBlKClcbiAgICAgICAgY29uc3QgbWFya2VkRG9jID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KClcbiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSBtYXJrZWREb2MuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGh0bWw6IGh0bWxDb250ZW50LCBwYWdlTWV0YTogcGFnZU1ldGEsIHNpbXBsaWZpZWRIVE1MOiBzaW1wbGlmaWVkSFRNTCB9KVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd19wb3B1cCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dfcG9wdXAnLCBtZXNzYWdlKVxuICAgICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ3BvcHVwIGFscmVhZHkgZXhpc3RzJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU1vZGFsKG1lc3NhZ2UucXVlc3Rpb24sIHNlbmRSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHRydWUgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgZnVuY3Rpb24gY3JlYXRlTW9kYWwocXVlc3Rpb246IHN0cmluZywgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQpIHtcbiAgICBjb25zdCBtb2RhbEh0bWwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJyZWFzb24tbW9kYWxcIiBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICBcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICA8aDM+JHtxdWVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlYXNvbi1pbnB1dFwiIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1za2lwXCI+U2tpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBtb2RhbEh0bWxcbiAgICAvLyBpZiBhdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQgZXhpc3RzXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQ6bm90KC5hb2staGlkZGVuKScpKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJylcbiAgICAgICAgLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdEJ0biBjbGlja2VkJylcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWVcbiAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc2tpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKClcbiAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiBudWxsIH0pXG4gICAgfSlcbiAgfVxufVxuc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZikudGhlbigocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjb250ZW50IHNjcmlwdCwgc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB3b3JrKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsInBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSIsInBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5IiwicG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSIsInBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZXMiLCJpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIiwiY29uY2F0IiwiY2hlY2tfdXNlcl9pZF91cmwiLCJmaWx0ZXJfdXJsIiwic2Nyb2xsX3RocmVzaG9sZCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJjbGlja2FibGUiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwibmFtZUVtIiwiY2xvc2VzdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ1cmwiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfZWxlbWVudCRjbG9zZXN0MyIsIl9lbGVtZW50JGNsb3Nlc3Q0IiwicHJvZHVjdF9mYWN0cyIsInByb2R1Y3RfZGVsaXZlcnkiLCJxdWFudGl0eV9zZWxlY3RvciIsImRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciIsInNldF91cF9ub3dfYnV0dG9uIiwiYWRkX3RvX2NhcnRfYnV0dG9uIiwiYnV5X25vd19idXR0b24iLCJidXlfYm94X3dpdGhfYWNjb3JkaW9uIiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCIsImNhcnQiLCJ0ZXh0X2Zvcm1hdCIsInJlY2lwZXMiLCJtYXRjaCIsIm1hdGNoX21ldGhvZCIsIl9lbSRpbm5lclRleHQiLCJyZXBsYWNlIiwiX2VtJGlubmVyVGV4dDIiLCJfZW0kaW5uZXJUZXh0MyIsInJhbmdlIiwia2VlcF9hdHRyIiwib3ZlcnJpZGVfYXR0ciIsInN0ZXBfdmFsdWVzIiwiZm9ybUVtIiwicHJvcCIsInN0ZXBzIiwiSlNPTiIsInBhcnNlIiwic3RlcExhYmVscyIsImN1cnJlbnRfdmFsdWUiLCJOdW1iZXIiLCJwYXJzZUludCIsImluc2VydF9zcGxpdF9tYXJrZXIiLCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsImNsaWNrX3NlbGVjdG9yIiwibWF0Y2hfdGV4dCIsImxhYmVsIiwiX2VtJGlubmVyVGV4dDQiLCJfZW0kcXVlcnlTZWxlY3RvciIsIl9lbSRxdWVyeVNlbGVjdG9yMiIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NSIsImFzaW5FbSIsInRlcm1pbmF0ZSIsImFyZ3VtZW50cyIsInRlcm1pbmF0ZV9jYWxsYmFjayIsInByb2Nlc3NFbGVtZW50IiwicmVjaXBlIiwicGFyZW50TmFtZSIsImxlbmd0aCIsIm50aENoaWxkIiwidGFnTmFtZSIsInRhZ19uYW1lIiwidG9Mb3dlckNhc2UiLCJlbmRzV2l0aCIsInNsaWNlIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsIkVycm9yIiwiY2xpY2tfZWxlbWVudCIsIndpbmRvdyIsImNsaWNrYWJsZV9yZWNpcGVzIiwiaW5wdXRUeXBlIiwiaW5jbHVkZXMiLCJjaGVja2VkIiwiaW5wdXRfcmVjaXBlcyIsImZvckVhY2giLCJvcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJuZXdPcHRpb24iLCJhcHBlbmRDaGlsZCIsImF0dHJzVG9Db3B5IiwiYXR0ciIsImtleSIsIl9sb29wIiwiY2hpbGRSZWNpcGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJldmVyeSIsInNwbGl0TWFya2VyIiwiZW1wdHlfbWVzc2FnZSIsImVtcHR5VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIl9hcnJheUxpa2VUb0FycmF5IiwiZnJvbSIsInRlc3QiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJpc0Zyb21Qb3B1cCIsInVwZGF0ZV9pY29uIiwiX3giLCJfdXBkYXRlX2ljb24iLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInNob3VsZEV4Y2x1ZGUiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhIiwiZ3JvdXBlZFJlc3VsdCIsIm1ldGFOYW1lIiwibWV0YURhdGEiLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfeDIiLCJfc2hvdWxkRXhjbHVkZSIsIl9jYWxsZWUyIiwiaWdub3JlVXNlcklkIiwicmVzdWx0IiwidXNlcklkIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0TWVzc2FnZSIsInNvbWUiLCJpbmNsdWRlVXJsIiwiZXhjbHVkZVVybCIsImdlbmVyYXRlSHRtbFNuYXBzaG90SWQiLCJ0aW1lc3RhbXAiLCJ1dWlkIiwibG9jYXRpb24iLCJocmVmIiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNoZWNrX3VzZXJfaWQiLCJfeDMiLCJfY2hlY2tfdXNlcl9pZCIsIl9jYWxsZWUzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmV0Y2giLCJqc29uIiwib2siLCJ0MCIsIm1lc3NhZ2UiLCJzZWxlY3RSZWNpcGUiLCJwYXJzZWRVcmwiLCJVUkwiLCJwYXRobmFtZSIsIm1hdGNoTWV0aG9kIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJoYXNNYXRjaCIsImVycm9yIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJ2NCIsInV1aWR2NCIsImNhcHR1cmVTY3JlZW5zaG90IiwiX2NhcHR1cmVTY3JlZW5zaG90IiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDkiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJzdWNjZXNzIiwiX3JlZiIsImRhdGFGb3JCYWNrZ3JvdW5kIiwicmVzcG9uc2UyIiwic291cmNlIiwid29yayIsImNhcHR1cmVJbnRlcmFjdGlvbiIsIl94NCIsIl94NSIsIl94NiIsIl94NyIsIl94OCIsIl9jYXB0dXJlSW50ZXJhY3Rpb24iLCJfY2FsbGVlNSIsImV2ZW50VHlwZSIsInRhcmdldCIsInNjcm9sbERpc3RhbmNlIiwiY3VycmVudFNuYXBzaG90SWQiLCJtYXJrZWREb2MiLCJwYWdlTWV0YSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NiIsImh0bWxTbmFwc2hvdElkIiwiaHRtbENvbnRlbnQiLCJpZCIsImlzU2Nyb2xsaW5nIiwic2Nyb2xsVGltZW91dCIsInNjcm9sbFN0YXJ0VG9wIiwic2Nyb2xsWSIsInNjcm9sbFRvcCIsImFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UiLCJoYW5kbGVGaXJzdFNjcm9sbCIsIl94OSIsIl94MTAiLCJfaGFuZGxlRmlyc3RTY3JvbGwiLCJfY2FsbGVlNiIsInNjcm9sbFV1aWQiLCJzY3JvbGxUaW1lc3RhbXAiLCJfY2FsbGVlNiQiLCJfY29udGV4dDciLCJoYW5kbGVTY3JvbGxTdG9wIiwiX3gxMSIsIl94MTIiLCJfaGFuZGxlU2Nyb2xsU3RvcCIsIl9jYWxsZWU3IiwiY3VycmVudFNjcm9sbFRvcCIsIl9jYWxsZWU3JCIsIl9jb250ZXh0OCIsIl9yZWYyIiwiZ2V0RWxlbWVudEJ5SWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX3gxMyIsInBsYWNlT3JkZXJCdXR0b25zIiwiYnV5Tm93QnV0dG9uIiwic2V0dXBOb3dCdXR0b24iLCJwcm9jZWVkVG9DaGVja291dEJ1dHRvbiIsImJ1dHRvbiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwicHJvZHVjdEluZm8iLCJvcHRpb25Sb3dzIiwicm93IiwiX3JvdyRxdWVyeVNlbGVjdG9yIiwiX3JvdyRxdWVyeVNlbGVjdG9yMiIsInBhcnNlRmxvYXQiLCJfcmVmNCIsIl9jYWxsZWU0Iiwic2VsZWN0ZWRJdGVtcyIsImNhcnRJdGVtcyIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NSIsIml0ZW0iLCJjaGVja2JveCIsInByb2R1Y3RMaW5rIiwiX2Z1bGxOYW1lRWxlbWVudCR0ZXh0IiwiX2hyZWYkbWF0Y2giLCJfcHJpY2VFbGVtZW50JHRleHRDb24iLCJmdWxsTmFtZUVsZW1lbnQiLCJwcmljZUVsZW1lbnQiLCJ2YXJpYXRpb25FbGVtZW50cyIsIl9sb29wJCIsIl9jb250ZXh0NCIsInZhcmlhdGlvbiIsIl92YXJpYXRpb24kcXVlcnlTZWxlYyIsIl92YXJpYXRpb24kcXVlcnlTZWxlYzIiLCJ0MSIsInQyIiwiX3gxNCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiaHRtbCIsImNyZWF0ZU1vZGFsIiwicXVlc3Rpb24iLCJtb2RhbEh0bWwiLCJtb2RhbENvbnRhaW5lciIsImJvZHkiLCJpbnB1dCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=
