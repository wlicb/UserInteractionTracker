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
var popup_scroll_probability = 0.1;
var popup_click_probability = 0.2;
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
  selector: 'ul > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)',
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
    var _element$closest, _nameEm$innerText, _text2;
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
    var nameEm = (_element$closest = element.closest('ul')) === null || _element$closest === void 0 || (_element$closest = _element$closest.parentElement) === null || _element$closest === void 0 ? void 0 : _element$closest.firstElementChild;
    var name = nameEm === null || nameEm === void 0 || (_nameEm$innerText = nameEm.innerText) === null || _nameEm$innerText === void 0 ? void 0 : _nameEm$innerText.replace(/[ ]/g, '_').toLowerCase().trim();
    var url = '';
    if (aChild && aChild.hasAttribute('href')) {
      url = aChild.getAttribute('href');
    }
    if (aChild && aChild.getAttribute('aria-current') === 'true') {
      var _text;
      return {
        name: 'refinements.' + name,
        data: {
          title: ((_text = text) === null || _text === void 0 ? void 0 : _text.trim()) || '',
          selected: true,
          url: url
        }
      };
    }
    return {
      name: 'refinements.' + name,
      data: {
        title: ((_text2 = text) === null || _text2 === void 0 ? void 0 : _text2.trim()) || '',
        selected: false,
        url: url
      }
    };
  },
  children: [{
    selector: "input[type='checkbox']"
  }]
}, {
  selector: "ul > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
  name: 'more_options',
  children: [{
    selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
    name: 'toggle_expansion',
    add_text: true
  }, {
    selector: 'li',
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
      var _element$closest2, _nameEm$innerText2, _text4;
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
      var nameEm = (_element$closest2 = element.closest('ul')) === null || _element$closest2 === void 0 || (_element$closest2 = _element$closest2.parentElement) === null || _element$closest2 === void 0 || (_element$closest2 = _element$closest2.closest('ul')) === null || _element$closest2 === void 0 || (_element$closest2 = _element$closest2.parentElement) === null || _element$closest2 === void 0 ? void 0 : _element$closest2.firstElementChild;
      var name = nameEm === null || nameEm === void 0 || (_nameEm$innerText2 = nameEm.innerText) === null || _nameEm$innerText2 === void 0 ? void 0 : _nameEm$innerText2.replace(/[ ]/g, '_').toLowerCase().trim();
      var url = '';
      if (aChild && aChild.hasAttribute('href')) {
        url = aChild.getAttribute('href');
      }
      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        var _text3;
        return {
          name: 'refinements.' + name,
          data: {
            title: ((_text3 = text) === null || _text3 === void 0 ? void 0 : _text3.trim()) || '',
            selected: true,
            url: url
          }
        };
      }
      return {
        name: 'refinements.' + name,
        data: {
          title: ((_text4 = text) === null || _text4 === void 0 ? void 0 : _text4.trim()) || '',
          selected: false,
          url: url
        }
      };
    },
    children: [{
      selector: "input[type='checkbox']"
    }]
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
        selector: '#topRefinements\\/0',
        name: 'top_refinements',
        add_text: 'true',
        text_format: 'Recently used filters',
        children: [{
          selector: 'li',
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
                var _aChild5 = element.querySelector('a.a-link-normal.s-navigation-item');
                if (_aChild5 && _aChild5.hasAttribute('title')) {
                  text += _aChild5.getAttribute('title');
                }
              }
              return text;
            } catch (e) {
              console.log(e);
              return '';
            }
          },
          children: [{
            selector: "input[type='checkbox']"
          }]
        }]
      }, {
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
            selector: 'div.puis-size-variation-price a.a-text-normal',
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
              title: (em === null || em === void 0 ? void 0 : em.innerText) || ''
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
        selector: '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' + ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' + '#corePriceDisplay_desktop_feature_div:has(#sns-base-price) #sns-base-price span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' + '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' + ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' + '#corePriceDisplay_desktop_feature_div:not(:has(#sns-base-price)) span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' + '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] ' + '#corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
        add_text: true,
        text_format: 'Price: {}',
        "class": 'product-price',
        generate_metadata: function generate_metadata(em) {
          var _em$innerText4;
          return {
            name: 'product_details',
            data: {
              price: (em === null || em === void 0 || (_em$innerText4 = em.innerText) === null || _em$innerText4 === void 0 ? void 0 : _em$innerText4.replace(/\n/g, '')) || ''
            }
          };
        },
        text_js: function text_js(em) {
          var _em$innerText5;
          return (em === null || em === void 0 || (_em$innerText5 = em.innerText) === null || _em$innerText5 === void 0 ? void 0 : _em$innerText5.replace(/\n/g, '')) || '';
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
        selector: '#productFactsDesktopExpander ul.a-unordered-list, #featurebullets_feature_div ul.a-unordered-list',
        add_text: true,
        name: 'about_this_item',
        text_format: 'About this item: ',
        children: [{
          selector: 'li',
          add_text: true
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$innerText6;
          return {
            name: 'product_details',
            data: {
              bullet_list: (em === null || em === void 0 || (_em$innerText6 = em.innerText) === null || _em$innerText6 === void 0 ? void 0 : _em$innerText6.replace(/\n/g, ' ')) || ''
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
            asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
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
            asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
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
            asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || ''
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
          selector: 'i.a-icon-checkbox',
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
  match: '/cart/add-to-cart/ref=dp_start-bbf_1_glance',
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
  match: '/cart/ref=ord_cart_shr',
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
    var _element$parentElemen;
    // Tag the select element with data-select-id
    element.setAttribute('data-select-id', elementName);
    var selectId = element.getAttribute('id');
    var nameId = element.getAttribute('name');
    var tag = (_element$parentElemen = element.parentElement) === null || _element$parentElemen === void 0 ? void 0 : _element$parentElemen.querySelector('span.a-button-dropdown span.a-button-text');
    var newTag = document.createElement('span');
    newTag.textContent = tag.textContent;
    var _tagName = elementName + '.open_drop_down_list';
    newTag.setAttribute('name', _tagName);
    tag.setAttribute('data-clickable-id', _tagName); // Tag actual DOM option element

    newElement.appendChild(newTag);
    var options = document.querySelectorAll('a[id^="' + selectId + '"]');
    options.forEach(/*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
        var optionValue, optionName, newOption;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              optionValue = option.textContent.trim();
              optionName = elementName + '.' + optionValue;
              newOption = document.createElement('a');
              newOption.textContent = option.textContent;
              newOption.setAttribute('value', optionValue);
              newOption.setAttribute('name', optionName);
              newOption.setAttribute('selected', option.getAttribute('aria-selected'));
              option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
              newElement.appendChild(newOption);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxSyxJQUFJLENBQUMsVUFBQ3NKLE1BQU0sRUFBSztFQUNuRHZTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixFQUFFc1MsTUFBTSxDQUFDO0VBQ3BELElBQUksQ0FBQ0EsTUFBTSxFQUFFO0lBQ1g2RSxJQUFJLENBQUMsQ0FBQztFQUNSO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMVxuZXhwb3J0IGNvbnN0IHBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5ID0gMC4yXG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAndWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSknLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICBsZXQgdXJsID0gJydcblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICB9XG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uY2xvc2VzdCgndWwnKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RvcFJlZmluZW1lbnRzXFxcXC8wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9wX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmVjZW50bHkgdXNlZCBmaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcmljZVJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAvLyAyIGNhc2VzOiBzZWxlY3Rpb24gLyBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF8zNi10aXRsZSwgZGl2LnNmLXJlZmluZW1lbnQtaGVhZGluZyBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZGVyLmEtcG9wb3Zlci1oZWFkZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhbltkYXRhLWNvbXBvbmVudC10eXBlPSdzLXByb2R1Y3QtaW1hZ2UnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfc3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDIpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYS5hLXRleHQtbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogZW0/LmlubmVyVGV4dCB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXZlcmFnZUN1c3RvbWVyUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdjpoYXMoI3Nucy1iYXNlLXByaWNlKSAjc25zLWJhc2UtcHJpY2Ugc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2Rpdjpub3QoOmhhcygjc25zLWJhc2UtcHJpY2UpKSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9XCJhcGV4X3dpdGhfcmlvX2N4XCJdICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgcHJpY2U6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgbGFiZWwuYS1mb3JtLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBzcGFuLnNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIHNwYW46bm90KC5hb2staGlkZGVuKSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXIgdWwuYS11bm9yZGVyZWQtbGlzdCwgI2ZlYXR1cmVidWxsZXRzX2ZlYXR1cmVfZGl2IHVsLmEtdW5vcmRlcmVkLWxpc3QnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhYm91dF90aGlzX2l0ZW0nLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWJvdXQgdGhpcyBpdGVtOiAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICBidWxsZXRfbGlzdDogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMiBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cF90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlQnV5Ym94IGRpdi5hLXNlY3Rpb24uYS10ZXh0LWNlbnRlci5hLXNwYWNpbmctc21hbGwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaS5hLWljb24tY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9hZGQtdG8tY2FydC9yZWY9ZHBfc3RhcnQtYmJmXzFfZ2xhbmNlJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9yZWY9b3JkX2NhcnRfc2hyJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYXAvc2lnbmluJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2J1eS9zcGMvaGFuZGxlcnMvZGlzcGxheS5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfVxuXVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQ6IGFueSwgcmVjaXBlOiBhbnksIHBhcmVudE5hbWUgPSAnJywgbnRoQ2hpbGQgPSAwKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKCd7fScsIGVsZW1lbnRUZXh0KVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0XG4gIH1cblxuICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gIGxldCBlbGVtZW50TmFtZSA9ICcnXG4gIGlmIChyZWNpcGUubmFtZSkge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fdGV4dCcpIHtcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfVxuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB0ZXh0IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgZWxlbWVudE5hbWUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV9udGhfY2hpbGQnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZVxuICAgIH1cbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKVxuICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YSkge1xuICAgIGNvbnN0IG1ldGFvYmogPSByZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEoZWxlbWVudClcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04uc3RyaW5naWZ5KG1ldGFvYmouZGF0YSlcbiAgICBjb25zdCBtZXRhbmFtZSA9IG1ldGFvYmoubmFtZVxuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnLCBtZXRhbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScsIG1ldGFkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBnZW5lcmF0ZWQ6ICcsIG1ldGFkYXRhLCAnIHdpdGggbmFtZTogJywgbWV0YW5hbWUpXG4gIH1cblxuICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgbGV0IGNsaWNrX2VsZW1lbnQ6IEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKClcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gcHJvY2Vzc0VsZW1lbnQoY2hpbGRFbGVtZW50LCBjaGlsZFJlY2lwZSwgcGFyZW50TmFtZSwgaW5kZXgpXG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlcywgY2hlY2tfdXNlcl9pZF91cmwgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKCkge1xuICBjb25zdCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSgpIHtcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuXG4gIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgJ3RleHQnXG4gICAgaWYgKG1hdGNoTWV0aG9kID09PSAndGV4dCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUubWF0Y2gpXG5cbiAgICAgICAgY29uc3QgaGFzTWF0Y2ggPVxuICAgICAgICAgIGVsZW1lbnQgJiZcbiAgICAgICAgICAoIXJlY2lwZS5tYXRjaF90ZXh0IHx8XG4gICAgICAgICAgICAoZWxlbWVudC50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhyZWNpcGUubWF0Y2hfdGV4dC50b0xvd2VyQ2FzZSgpKSA/PyBmYWxzZSkpXG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgcmV0dXJuIHJlY2lwZVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZWNpcGUoKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKClcbiAgICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBpc0Zyb21Qb3B1cCxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IHNjcm9sbF90aHJlc2hvbGQgfSBmcm9tICcuL2NvbmZpZydcblxuYXN5bmMgZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgdXVpZFxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8ICdTY3JlZW5zaG90IGNhcHR1cmUgZmFpbGVkJylcbiAgICB9XG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgIH0sXG4gICAgICAnKidcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3QgaW4gY29udGVudCBzY3JpcHQ6JywgZXJyb3IpXG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfSxcbiAgICAgICcqJ1xuICAgIClcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpIHJldHVyblxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICBjb25zdCB1c2VySWQgPSByZXN1bHQudXNlcklkXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJywgdXNlcklkOiB1c2VySWQgfSwgJyonKVxuICB9XG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FQVFVSRV9TQ1JFRU5TSE9UJykge1xuICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KGV2ZW50LmRhdGEudGltZXN0YW1wLCBldmVudC5kYXRhLnV1aWQpXG4gIH1cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFGb3JCYWNrZ3JvdW5kID0geyAuLi5ldmVudC5kYXRhLmRhdGEgfVxuXG4gICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogJ3NhdmVEYXRhJyxcbiAgICAgICAgZGF0YTogZGF0YUZvckJhY2tncm91bmRcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlMi5zdWNjZXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZTIubWVzc2FnZSB8fCAnaW50ZXJhY3Rpb24gY2FwdHVyZSBmYWlsZWQnKVxuICAgICAgfVxuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGludGVyYWN0aW9uIGRhdGE6JywgZXJyb3IpXG4gICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcFxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIC8vIERlZmluZSBpbnRlcmZhY2VzIGZvciBSZWNpcGUgYW5kIE9yZGVyRGV0YWlsXG4gIGludGVyZmFjZSBSZWNpcGUge1xuICAgIHRhZ19uYW1lPzogc3RyaW5nXG4gICAgdGV4dF9zZWxlY3Rvcj86IHN0cmluZ1xuICAgIHRleHRfanM/OiBzdHJpbmdcbiAgICBhZGRfdGV4dD86IGJvb2xlYW5cbiAgICB0ZXh0X2Zvcm1hdD86IHN0cmluZ1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjbGlja2FibGU/OiBib29sZWFuXG4gICAgY2xpY2tfc2VsZWN0b3I/OiBzdHJpbmdcbiAgICBrZWVwX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgb3ZlcnJpZGVfYXR0cj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBjaGlsZHJlbj86IFJlY2lwZVtdXG4gICAgaW5zZXJ0X3NwbGl0X21hcmtlcj86IGJvb2xlYW5cbiAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5PzogbnVtYmVyXG4gICAgZGlyZWN0X2NoaWxkPzogYm9vbGVhblxuICAgIGVtcHR5X21lc3NhZ2U/OiBzdHJpbmdcbiAgICBba2V5OiBzdHJpbmddOiBhbnkgLy8gQWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gIH1cblxuICBpbnRlcmZhY2UgT3JkZXJEZXRhaWwge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHByaWNlOiBudW1iZXJcbiAgfVxuXG4gIC8vIEV4dGVuZCB0aGUgV2luZG93IGludGVyZmFjZSB0byBpbmNsdWRlIGN1c3RvbSBwcm9wZXJ0aWVzXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCBldmVudCB0cmlnZ2VyZWQnKVxuICAgIHByb2Nlc3NSZWNpcGUoKVxuICB9KVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNhcHR1cmUgaW50ZXJhY3Rpb25zXG4gIGFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICB0YXJnZXQ6IGFueSxcbiAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICB1dWlkOiBzdHJpbmcsXG4gICAgc2Nyb2xsRGlzdGFuY2U/OiBudW1iZXJcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgY29uc3QgbWFya2VkRG9jID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KClcblxuICAgICAgY29uc3QgcGFnZU1ldGEgPSBmaW5kUGFnZU1ldGEoKVxuXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblxuICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsIC8vIFVzZSB0aGUgbmV3IHNuYXBzaG90IElEXG4gICAgICAgIHBhZ2VNZXRhOiBwYWdlTWV0YSB8fCAnJyxcbiAgICAgICAgaHRtbENvbnRlbnQ6IG1hcmtlZERvYy5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUxcbiAgICAgIH1cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdzY3JvbGwnKSB7XG4gICAgICAgIGRhdGFbJ3Njcm9sbERpc3RhbmNlJ10gPSBzY3JvbGxEaXN0YW5jZVxuICAgICAgICBkYXRhWyd0YXJnZXQnXSA9IHRhcmdldFxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC12YWx1ZXMnXSA9IHRhcmdldD8udmFsdWUgfHwgJydcbiAgICAgICAgZGF0YVsnaW5wdXQtaWQnXSA9IHRhcmdldD8uaWQgfHwgJydcbiAgICAgICAgZGF0YVsnZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpIHx8ICcnXG4gICAgICAgIGRhdGFbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlRGF0YScsIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgLy8gbGV0IGxhc3RTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIC8vIGxldCBsYXN0U2Nyb2xsVGltZSA9IDAgLy8gVHJhY2sgbGFzdCBzY3JvbGwgdGltZXN0YW1wXG4gIC8vIGNvbnN0IFNDUk9MTF9USFJFU0hPTEQgPSAxNTAwIC8vIE1pbmltdW0gdGltZSBpbiBtcyBiZXR3ZWVuIHNjcmVlbnNob3RzIGZvciBzY3JvbGwgYWN0aW9uc1xuICAvLyAvLyBDYXB0dXJlIHNjcm9sbCBpbnRlcmFjdGlvbnNcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIC8vIHNjcm9sbCBkb24ndCBoYXZlIGEgc3BlY2lmaWMgdGFyZ2V0LCBzbyB3ZSBqdWRnZSB3aGV0aGVyIHBvcHVwIGlzIG9wZW5cbiAgLy8gICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgLy8gICAgICAgcmV0dXJuXG4gIC8vICAgICB9XG4gIC8vICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAvLyAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSArPSBNYXRoLmFicyhjdXJyZW50U2Nyb2xsVG9wIC0gbGFzdFNjcm9sbFRvcClcbiAgLy8gICAgIGxhc3RTY3JvbGxUb3AgPSBjdXJyZW50U2Nyb2xsVG9wXG4gIC8vICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KClcbiAgLy8gICAgIGlmIChjdXJyZW50VGltZSAtIGxhc3RTY3JvbGxUaW1lID49IFNDUk9MTF9USFJFU0hPTEQpIHtcbiAgLy8gICAgICAgbGFzdFNjcm9sbFRpbWUgPSBjdXJyZW50VGltZVxuICAvLyAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgLy8gICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbignc2Nyb2xsJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsICB1dWlkLGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCwgdXVpZClcbiAgLy8gICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgLy8gICAgIH1cbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNjcm9sbCBldmVudCBoYW5kbGluZzonLCBlcnJvcilcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgLy8gbGV0IGxhc3RTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIC8vIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuXG4gIC8vIGNvbnN0IGhhbmRsZVNjcm9sbFN0b3AgPSBkZWJvdW5jZShhc3luYyAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgc2Nyb2xsIGV2ZW50JylcbiAgLy8gICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIC8vICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gY3VycmVudFNjcm9sbFRvcCAtIGxhc3RTY3JvbGxUb3BcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZLCBjdXJyZW50U2Nyb2xsVG9wLCBsYXN0U2Nyb2xsVG9wLCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlKVxuICAvLyAgICAgaWYgKGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgIT09IDApIHtcbiAgLy8gICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gIC8vICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAvLyAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oJ3Njcm9sbCcsIG51bGwsIHRpbWVzdGFtcCwgdXVpZCwgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSlcbiAgLy8gICAgICAgYXdhaXQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wLCB1dWlkKVxuXG4gIC8vICAgICAgIC8vIFJlc2V0IGFmdGVyIGNhcHR1cmluZ1xuICAvLyAgICAgICBsYXN0U2Nyb2xsVG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAvLyAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICAvLyAgICAgfVxuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIGV2ZW50IGhhbmRsaW5nOicsIGVycm9yKVxuICAvLyAgIH1cbiAgLy8gfSwgc2Nyb2xsX3RocmVzaG9sZCkgLy8gVXNpbmcgdGhlIDQwMG1zIHRocmVzaG9sZFxuXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdzY3JvbGwgZXZlbnQnKVxuXG4gIC8vICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuICAvLyAgICAgcmV0dXJuXG4gIC8vICAgfVxuICAvLyAgIGlmIChcbiAgLy8gICAgIGV2ZW50LnRhcmdldCAhPT0gd2luZG93ICYmXG4gIC8vICAgICBldmVudC50YXJnZXQgIT09IGRvY3VtZW50ICYmXG4gIC8vICAgICBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAvLyAgICkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ1Njcm9sbCBldmVudCBpZ25vcmVkIGZyb20gYSBuZXN0ZWQgc2Nyb2xsYWJsZSBjb250YWluZXInKVxuICAvLyAgICAgcmV0dXJuXG4gIC8vICAgfVxuICAvLyAgIGhhbmRsZVNjcm9sbFN0b3AoKVxuICAvLyB9KVxuXG4gIC8vIFZhcmlhYmxlcyB0byB0cmFjayBzY3JvbGwgZXZlbnRzXG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlXG4gIGxldCBzY3JvbGxUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIGZpcnN0IHNjcm9sbCBldmVudCBpbiBhIHNjcm9sbCBzZXF1ZW5jZVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaXJzdFNjcm9sbChzY3JvbGxVdWlkOiBzdHJpbmcsIHNjcm9sbFRpbWVzdGFtcDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaXJzdCBzY3JvbGwgZXZlbnQnKVxuICAgICAgY2FwdHVyZVNjcmVlbnNob3Qoc2Nyb2xsVGltZXN0YW1wLCBzY3JvbGxVdWlkKVxuICAgICAgcHJvY2Vzc1JlY2lwZSgpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBmaXJzdCBzY3JvbGwgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHdoZW4gc2Nyb2xsaW5nIHN0b3BzIChubyBzY3JvbGwgZXZlbnRzIHdpdGhpbiB0aGUgdGhyZXNob2xkKVxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQ6IHN0cmluZywgc2Nyb2xsVGltZXN0YW1wOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ3Njcm9sbCBzdG9wIHV1aWQnLCBzY3JvbGxVdWlkKVxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgKz0gY3VycmVudFNjcm9sbFRvcCAtIHNjcm9sbFN0YXJ0VG9wXG5cbiAgICAgIGlmIChhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICE9PSAwKSB7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIGludGVyYWN0aW9uIHdpdGggdGhlIGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzY3JvbGxUaW1lc3RhbXAsXG4gICAgICAgICAgc2Nyb2xsVXVpZCxcbiAgICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlXG4gICAgICAgIClcbiAgICAgICAgLy8gUmVzZXQgYWNjdW11bGF0ZWQgc2Nyb2xsIGRpc3RhbmNlXG4gICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgPSAwXG4gICAgICAgIHNjcm9sbFN0YXJ0VG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAgICAgfVxuICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIHN0b3AgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgbGV0IHNjcm9sbFV1aWQgPSAnJ1xuICBsZXQgc2Nyb2xsVGltZXN0YW1wID0gJydcbiAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCBldmVudCcpXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsIGV2ZW50IGlnbm9yZWQgZnJvbSBhIG5lc3RlZCBzY3JvbGxhYmxlIGNvbnRhaW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsaW5nKSB7XG4gICAgICBpc1Njcm9sbGluZyA9IHRydWVcbiAgICAgIHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgc2Nyb2xsVXVpZCA9IHV1aWR2NCgpXG4gICAgICBzY3JvbGxUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIGF3YWl0IGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcClcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGltZW91dCBhbmQgc2V0IGEgbmV3IG9uZVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dClcbiAgICBzY3JvbGxUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAoKSA9PiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcCksXG4gICAgICBzY3JvbGxfdGhyZXNob2xkXG4gICAgKSAvLyBUaHJlc2hvbGQgb2YgMzAwbXNcbiAgfSlcblxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAvLyAgICdibHVyJyxcbiAgLy8gICBhc3luYyAoZXZlbnQpID0+IHtcbiAgLy8gICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAvLyAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHJldHVyblxuICAvLyAgICAgaWYgKFxuICAvLyAgICAgICB0YXJnZXQgJiZcbiAgLy8gICAgICAgKCh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiAodGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnR5cGUgPT09ICd0ZXh0JykgfHxcbiAgLy8gICAgICAgICB0YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJylcbiAgLy8gICAgICkge1xuICAvLyAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgLy8gICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gIC8vICAgICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCwgdXVpZClcbiAgLy8gICAgICAgYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKCdpbnB1dCcsIHRhcmdldCwgdGltZXN0YW1wLCB1dWlkKVxuICAvLyAgICAgfVxuICAvLyAgIH0sXG4gIC8vICAgdHJ1ZVxuICAvLyApXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBIYW5kbGUgYWxsIHR5cGVzIG9mIG9yZGVyIGJ1dHRvbnNcbiAgICBjb25zdCBwbGFjZU9yZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnaW5wdXRbaWQ9XCJwbGFjZU9yZGVyXCJdLCBpbnB1dFtpZD1cInR1cmJvLWNoZWNrb3V0LXB5by1idXR0b25cIl0nXG4gICAgKVxuICAgIGNvbnN0IGJ1eU5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiYnV5LW5vdy1idXR0b25cIl0nKVxuICAgIGNvbnN0IHNldHVwTm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdidXR0b25baWQ9XCJyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2VcIl0nXG4gICAgKVxuICAgIGNvbnN0IHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2NlZWRUb1JldGFpbENoZWNrb3V0XCJdJylcblxuICAgIC8vIEhhbmRsZSBCdXkgTm93IGFuZCBTZXQgVXAgTm93IGJ1dHRvbnMgaWYgcHJlc2VudFxuICAgIDtbYnV5Tm93QnV0dG9uLCBzZXR1cE5vd0J1dHRvbl0uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZm8gPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQ/LnRyaW0oKSB8fCAnJyxcbiAgICAgICAgICAgICAgcHJpY2U6XG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknXG4gICAgICAgICAgICAgICAgICApIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgKT8uaW5uZXJUZXh0Py50cmltKCkgfHwgJycsXG4gICAgICAgICAgICAgIGFzaW46IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJykgYXMgSFRNTElucHV0RWxlbWVudCk/LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXQgYWxsIG9wdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgICAgICBjb25zdCBvcHRpb25Sb3dzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbiknXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIG9wdGlvblJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsID1cbiAgICAgICAgICAgICAgICAocm93LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsLmEtZm9ybS1sYWJlbCcpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0Py5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgJzogJyxcbiAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgKSB8fCAnJ1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IChyb3cucXVlcnlTZWxlY3Rvcignc3Bhbi5zZWxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudCk/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICA7KHByb2R1Y3RJbmZvLm9wdGlvbnMgYXMgYW55KVtsYWJlbF0gPSB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtidXR0b24uaWR9IGNsaWNrZWQgLSBQcm9kdWN0IEluZm86YCwgcHJvZHVjdEluZm8pXG5cbiAgICAgICAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnc2F2ZU9yZGVyJyxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLnRpdGxlLFxuICAgICAgICAgICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByb2R1Y3RJbmZvLnByaWNlLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKSxcbiAgICAgICAgICAgICAgICBhc2luOiBwcm9kdWN0SW5mby5hc2luLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RJbmZvLm9wdGlvbnNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgY2FwdHVyaW5nICR7YnV0dG9uLmlkfSBwcm9kdWN0IGluZm86YCwgZXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uKSB7XG4gICAgICBwcm9jZWVkVG9DaGVja291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXVxuICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInNjLWFjdGl2ZS1cIl0nKSkuZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09ICdzYy1hY3RpdmUtY2FydCdcbiAgICAgICAgICApXG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgIGlmIChjaGVja2JveCAmJiBjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RMaW5rID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcm9kdWN0LXRpdGxlLWNvbnQgLnNjLXByb2R1Y3QtbGluaycpXG4gICAgICAgICAgICAgIGlmIChwcm9kdWN0TGluaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lRWxlbWVudCA9IHByb2R1Y3RMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5hLXRydW5jYXRlLWZ1bGwnKVxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmdWxsTmFtZUVsZW1lbnQ/LnRleHRDb250ZW50Py50cmltKCkgfHwgJydcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwcm9kdWN0TGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBocmVmLm1hdGNoKC9wcm9kdWN0XFwvKFtBLVowLTldezEwfSkvKT8uWzFdIHx8ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVsZW1lbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByaWNlLWJsb2NrIC5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgID8gcGFyc2VGbG9hdChwcmljZUVsZW1lbnQudGV4dENvbnRlbnQ/LnJlcGxhY2UoL1teMC05Ll0vZywgJycpIHx8ICcwJylcbiAgICAgICAgICAgICAgICAgIDogMFxuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uRWxlbWVudHMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy1wcm9kdWN0LXZhcmlhdGlvbicpXG4gICAgICAgICAgICAgICAgdmFyaWF0aW9uRWxlbWVudHMuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS10ZXh0LWJvbGQnKT8udGV4dENvbnRlbnQ/LnRyaW0oKS5yZXBsYWNlKCc6JywgJycpIHx8XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYS1zaXplLXNtYWxsOm5vdCguYS10ZXh0LWJvbGQpJylcbiAgICAgICAgICAgICAgICAgICAgICA/LnRleHRDb250ZW50Py50cmltKCkgfHwgJydcbiAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2xhYmVsXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICBhc2luLFxuICAgICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3NhdmVPcmRlcicsIGRhdGE6IHNlbGVjdGVkSXRlbXMgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNlbGVjdGVkIGNhcnQgaXRlbXM6JywgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICAobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBtZXNzYWdlKVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0SFRNTCcpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBwcm9jZXNzUmVjaXBlKClcbiAgICAgICAgY29uc3QgbWFya2VkRG9jID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KClcbiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSBtYXJrZWREb2MuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICAgIHNlbmRSZXNwb25zZSh7IGh0bWw6IGh0bWxDb250ZW50LCBwYWdlTWV0YTogcGFnZU1ldGEsIHNpbXBsaWZpZWRIVE1MOiBzaW1wbGlmaWVkSFRNTCB9KVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd19wb3B1cCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dfcG9wdXAnLCBtZXNzYWdlKVxuICAgICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ3BvcHVwIGFscmVhZHkgZXhpc3RzJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU1vZGFsKG1lc3NhZ2UucXVlc3Rpb24sIHNlbmRSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHRydWUgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgZnVuY3Rpb24gY3JlYXRlTW9kYWwocXVlc3Rpb246IHN0cmluZywgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQpIHtcbiAgICBjb25zdCBtb2RhbEh0bWwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJyZWFzb24tbW9kYWxcIiBzdHlsZT1cIlxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgICAgICBcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICA8aDM+JHtxdWVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlYXNvbi1pbnB1dFwiIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1za2lwXCI+U2tpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBtb2RhbEh0bWxcbiAgICAvLyBpZiBhdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQgZXhpc3RzXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQ6bm90KC5hb2staGlkZGVuKScpKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJylcbiAgICAgICAgLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdEJ0biBjbGlja2VkJylcbiAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWVcbiAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc2tpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKClcbiAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiBudWxsIH0pXG4gICAgfSlcbiAgfVxufVxuc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZikudGhlbigocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjb250ZW50IHNjcmlwdCwgc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB3b3JrKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsInBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSIsInBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5IiwicG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSIsInBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZXMiLCJpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIiwiY29uY2F0IiwiY2hlY2tfdXNlcl9pZF91cmwiLCJmaWx0ZXJfdXJsIiwic2Nyb2xsX3RocmVzaG9sZCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJjbGlja2FibGUiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQiLCJfdGV4dDIiLCJuYW1lRW0iLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidXJsIiwiX3RleHQiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfbmFtZUVtJGlubmVyVGV4dDIiLCJfdGV4dDQiLCJfdGV4dDMiLCJwcm9kdWN0X2ZhY3RzIiwicHJvZHVjdF9kZWxpdmVyeSIsInF1YW50aXR5X3NlbGVjdG9yIiwiZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yIiwic2V0X3VwX25vd19idXR0b24iLCJhZGRfdG9fY2FydF9idXR0b24iLCJidXlfbm93X2J1dHRvbiIsImJ1eV9ib3hfd2l0aF9hY2NvcmRpb24iLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5IiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwIiwiY2FydCIsInRleHRfZm9ybWF0IiwicmVjaXBlcyIsIm1hdGNoIiwibWF0Y2hfbWV0aG9kIiwiX2VtJGlubmVyVGV4dCIsIl9lbSRpbm5lclRleHQyIiwiX2VtJGlubmVyVGV4dDMiLCJyYW5nZSIsImtlZXBfYXR0ciIsIm92ZXJyaWRlX2F0dHIiLCJzdGVwX3ZhbHVlcyIsImZvcm1FbSIsInByb3AiLCJzdGVwcyIsIkpTT04iLCJwYXJzZSIsInN0ZXBMYWJlbHMiLCJjdXJyZW50X3ZhbHVlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJpbnNlcnRfc3BsaXRfbWFya2VyIiwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSIsImFzaW4iLCJwcmljZUVtIiwicHJpY2UiLCJ0aXRsZUVtIiwidXJsRW0iLCJkZWxpdmVyeUVtIiwiZGVsaXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJfZW0kaW5uZXJUZXh0NCIsIl9lbSRpbm5lclRleHQ1IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJsYWJlbCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NiIsImJ1bGxldF9saXN0IiwiYXNpbkVtIiwidGVybWluYXRlIiwiYXJndW1lbnRzIiwidGVybWluYXRlX2NhbGxiYWNrIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJwcm9jZXNzRWxlbWVudCIsInJlY2lwZSIsInBhcmVudE5hbWUiLCJudGhDaGlsZCIsInRhZ05hbWUiLCJ0YWdfbmFtZSIsImVuZHNXaXRoIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsImNsaWNrX2VsZW1lbnQiLCJ3aW5kb3ciLCJjbGlja2FibGVfcmVjaXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiY2hlY2tlZCIsImlucHV0X3JlY2lwZXMiLCJfZWxlbWVudCRwYXJlbnRFbGVtZW4iLCJzZWxlY3RJZCIsIm5hbWVJZCIsInRhZyIsIm5ld1RhZyIsImFwcGVuZENoaWxkIiwiX3JlZiIsIl9jYWxsZWUiLCJvcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJuZXdPcHRpb24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX3giLCJhdHRyc1RvQ29weSIsImF0dHIiLCJrZXkiLCJfbG9vcCIsImNoaWxkUmVjaXBlIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImluZGV4IiwiY2hpbGROb2RlIiwiZXZlcnkiLCJzcGxpdE1hcmtlciIsImVtcHR5X21lc3NhZ2UiLCJlbXB0eVRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNGcm9tUG9wdXAiLCJ1cGRhdGVfaWNvbiIsIl91cGRhdGVfaWNvbiIsInNob3VsZEV4Y2x1ZGUiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhIiwiZ3JvdXBlZFJlc3VsdCIsIm1ldGFOYW1lIiwibWV0YURhdGEiLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfeDIiLCJfc2hvdWxkRXhjbHVkZSIsIl9jYWxsZWUyIiwiaWdub3JlVXNlcklkIiwicmVzdWx0IiwidXNlcklkIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0TWVzc2FnZSIsInNvbWUiLCJpbmNsdWRlVXJsIiwiZXhjbHVkZVVybCIsImdlbmVyYXRlSHRtbFNuYXBzaG90SWQiLCJ0aW1lc3RhbXAiLCJ1dWlkIiwibG9jYXRpb24iLCJocmVmIiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNoZWNrX3VzZXJfaWQiLCJfeDMiLCJfY2hlY2tfdXNlcl9pZCIsIl9jYWxsZWUzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmV0Y2giLCJqc29uIiwib2siLCJ0MCIsIm1lc3NhZ2UiLCJzZWxlY3RSZWNpcGUiLCJwYXJzZWRVcmwiLCJVUkwiLCJwYXRobmFtZSIsIm1hdGNoTWV0aG9kIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJoYXNNYXRjaCIsImVycm9yIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJ2NCIsInV1aWR2NCIsImNhcHR1cmVTY3JlZW5zaG90IiwiX2NhcHR1cmVTY3JlZW5zaG90IiwiX2NhbGxlZTgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDkiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJzdWNjZXNzIiwiZGF0YUZvckJhY2tncm91bmQiLCJyZXNwb25zZTIiLCJzb3VyY2UiLCJ3b3JrIiwiY2FwdHVyZUludGVyYWN0aW9uIiwiX3g0IiwiX3g1IiwiX3g2IiwiX3g3IiwiX3g4IiwiX2NhcHR1cmVJbnRlcmFjdGlvbiIsIl9jYWxsZWU1IiwiZXZlbnRUeXBlIiwidGFyZ2V0Iiwic2Nyb2xsRGlzdGFuY2UiLCJjdXJyZW50U25hcHNob3RJZCIsIm1hcmtlZERvYyIsInBhZ2VNZXRhIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ2IiwiaHRtbFNuYXBzaG90SWQiLCJodG1sQ29udGVudCIsImlkIiwiaXNTY3JvbGxpbmciLCJzY3JvbGxUaW1lb3V0Iiwic2Nyb2xsU3RhcnRUb3AiLCJzY3JvbGxZIiwic2Nyb2xsVG9wIiwiYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSIsImhhbmRsZUZpcnN0U2Nyb2xsIiwiX3g5IiwiX3gxMCIsIl9oYW5kbGVGaXJzdFNjcm9sbCIsIl9jYWxsZWU2Iiwic2Nyb2xsVXVpZCIsInNjcm9sbFRpbWVzdGFtcCIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NyIsImhhbmRsZVNjcm9sbFN0b3AiLCJfeDExIiwiX3gxMiIsIl9oYW5kbGVTY3JvbGxTdG9wIiwiX2NhbGxlZTciLCJjdXJyZW50U2Nyb2xsVG9wIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ4IiwiX3JlZjIiLCJnZXRFbGVtZW50QnlJZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJfeDEzIiwicGxhY2VPcmRlckJ1dHRvbnMiLCJidXlOb3dCdXR0b24iLCJzZXR1cE5vd0J1dHRvbiIsInByb2NlZWRUb0NoZWNrb3V0QnV0dG9uIiwiYnV0dG9uIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCJwcm9kdWN0SW5mbyIsIm9wdGlvblJvd3MiLCJyb3ciLCJfcm93JHF1ZXJ5U2VsZWN0b3IiLCJfcm93JHF1ZXJ5U2VsZWN0b3IyIiwicGFyc2VGbG9hdCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJzZWxlY3RlZEl0ZW1zIiwiY2FydEl0ZW1zIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ1IiwiaXRlbSIsImNoZWNrYm94IiwicHJvZHVjdExpbmsiLCJfZnVsbE5hbWVFbGVtZW50JHRleHQiLCJfaHJlZiRtYXRjaCIsIl9wcmljZUVsZW1lbnQkdGV4dENvbiIsImZ1bGxOYW1lRWxlbWVudCIsInByaWNlRWxlbWVudCIsInZhcmlhdGlvbkVsZW1lbnRzIiwiX2xvb3AkIiwiX2NvbnRleHQ0IiwidmFyaWF0aW9uIiwiX3ZhcmlhdGlvbiRxdWVyeVNlbGVjIiwiX3ZhcmlhdGlvbiRxdWVyeVNlbGVjMiIsInQxIiwidDIiLCJfeDE0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJodG1sIiwiY3JlYXRlTW9kYWwiLCJxdWVzdGlvbiIsIm1vZGFsSHRtbCIsIm1vZGFsQ29udGFpbmVyIiwiYm9keSIsImlucHV0IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==
