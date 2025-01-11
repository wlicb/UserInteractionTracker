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
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var downloadDataBtn = document.getElementById('downloadData');
var outputDiv = document.getElementById('output');
var clearCacheBtn = document.getElementById('clearCache');
var userIdInput = document.getElementById('userId');
var recordingDiv = document.getElementById('recording');
var user_id_valid_div = document.getElementById('user_id_valid');
// Add this function to fetch and display interaction stats
function displayInteractionStats(_x) {
  return _displayInteractionStats.apply(this, arguments);
}
function _displayInteractionStats() {
  _displayInteractionStats = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__.interaction_status_url, "?user_id=").concat(userId), {
            method: 'GET'
          });
        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return response.json();
        case 6:
          data = _context5.sent;
          if (response.ok) {
            outputDiv.textContent = "Total uploads: ".concat(data.all_time, "\nToday's uploads: ").concat(data.on_date);
          } else {
            outputDiv.textContent = "Failed to fetch stats: ".concat(data.error || 'Unknown error');
          }
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          outputDiv.textContent = "Error: ".concat(_context5.t0.message);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return _displayInteractionStats.apply(this, arguments);
}
document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var updateRecordingStatus, check_user_id_valid;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        updateRecordingStatus = function updateRecordingStatus() {
          // chrome.runtime.sendMessage({ action: 'getRecordingStatus' }, (response) => {

          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(tabs) {
              var url, isExcluded;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    url = tabs[0].url;
                    _context.next = 3;
                    return (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.shouldExclude)(url);
                  case 3:
                    isExcluded = _context.sent;
                    console.log('isExcluded', isExcluded);
                    // sendResponse({ recording: !isExcluded })

                    if (!isExcluded) {
                      recordingDiv.innerHTML = '<img src="icon.png" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle;" /> Actions on this page will be recorded';
                    } else {
                      recordingDiv.innerHTML = '<img src="inactive_icon.png" style="width: 16px; height: 16px; display: inline-block; vertical-align: middle;" /> Actions on this page will not be recorded';
                    }
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          // })
        };
        updateRecordingStatus();
        check_user_id_valid = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(user_id) {
            var user_id_valid;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0,_utils_util__WEBPACK_IMPORTED_MODULE_1__.check_user_id)(user_id);
                case 2:
                  user_id_valid = _context2.sent;
                  if (user_id_valid !== 'success') {
                    user_id_valid_div.textContent = 'User ID is invalid, please check your user ID';
                  } else {
                    user_id_valid_div.textContent = '';
                  }
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function check_user_id_valid(_x3) {
            return _ref3.apply(this, arguments);
          };
        }();
        chrome.storage.local.get(['userId'], /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(result) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (result.userId) {
                    userIdInput.value = result.userId || '';
                    displayInteractionStats(result.userId);
                    if (result.userId.includes(_config__WEBPACK_IMPORTED_MODULE_0__.data_collector_secret_id)) {
                      downloadDataBtn.style.display = 'block'; // Show button
                    } else {
                      downloadDataBtn.style.display = 'none'; // Hide button
                    }
                    check_user_id_valid(result.userId);
                  } else {
                    user_id_valid_div.textContent = 'Please enter your user id';
                  }
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }());
        userIdInput.addEventListener('change', function () {
          var userId = userIdInput.value.trim();
          chrome.storage.local.set({
            userId: userId
          }, function () {
            outputDiv.textContent = 'User ID saved.';
          });
          updateRecordingStatus();
          check_user_id_valid(userId);
        });
        downloadDataBtn.addEventListener('click', function () {
          try {
            var userId = userIdInput.value.trim();
            chrome.runtime.sendMessage({
              action: 'downloadData',
              userId: userId
            }, function (response) {
              if (response.success) {
                outputDiv.textContent = 'Data downloaded successfully.';
              } else {
                outputDiv.textContent = "Failed to download data: ".concat(response.error || 'Unknown error');
              }
            });
          } catch (error) {
            outputDiv.textContent = "Error: ".concat(error.message);
          }
        });
        clearCacheBtn.addEventListener('click', function () {
          try {
            chrome.storage.local.remove(['user_interaction_tracker_last_timestamp', 'lastuploadTimestamp']);
            chrome.runtime.sendMessage({
              action: 'clearMemoryCache'
            }, function () {
              outputDiv.textContent = 'Cache cleared successfully.';
            });
          } catch (error) {
            outputDiv.textContent = "Error: ".concat(error.message);
          }
        });
      case 7:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
})));
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2lYLEtBQUssQ0FBV1QsT0FBTyxDQUFFO1VBQzlEO1FBQ0YsQ0FBQyxDQUFDO1FBQ0ZrQixhQUFhLENBQUM1QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUM1QyxJQUFJO1lBQ0Z6QyxNQUFNLENBQUNtQyxPQUFPLENBQUNDLEtBQUssQ0FBQ2lGLE1BQU0sQ0FBQyxDQUMxQix5Q0FBeUMsRUFDekMscUJBQXFCLENBQ3RCLENBQUM7WUFDRnJILE1BQU0sQ0FBQ2tILE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO2NBQUVsSCxNQUFNLEVBQUU7WUFBbUIsQ0FBQyxFQUFFLFlBQU07Y0FDL0RtRixTQUFTLENBQUMzSSxXQUFXLEdBQUcsNkJBQTZCO1lBQ3ZELENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQyxPQUFPbUksS0FBSyxFQUFFO1lBQ2RRLFNBQVMsQ0FBQzNJLFdBQVcsYUFBQTlPLE1BQUEsQ0FBY2lYLEtBQUssQ0FBV1QsT0FBTyxDQUFFO1VBQzlEO1FBQ0YsQ0FBQyxDQUFDO01BQUE7TUFBQTtRQUFBLE9BQUFpQyxTQUFBLENBQUFuTCxJQUFBO0lBQUE7RUFBQSxHQUFBK0ssUUFBQTtBQUFBLENBQ0gsR0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF9zY3JvbGxfcHJvYmFiaWxpdHkgPSAwLjFcbmV4cG9ydCBjb25zdCBwb3B1cF9jbGlja19wcm9iYWJpbGl0eSA9IDAuMlxuZXhwb3J0IGNvbnN0IHBvcHVwX25hdmlnYXRpb25fcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnaGFpbGFiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlcyA9IFsnd3d3LmFtYXpvbi5jb20nXVxuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zX3JlY29yZF9zdGF0dXNgXG5leHBvcnQgY29uc3QgY2hlY2tfdXNlcl9pZF91cmwgPSBgJHtiYXNlX3VybH0vY2hlY2tfdXNlcl9pZGBcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLydcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJ1xuXVxuZXhwb3J0IGNvbnN0IHNjcm9sbF90aHJlc2hvbGQgPSAzMDBcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gIHNlbGVjdG9yOiAnI25hdmJhci1tYWluJyxcbiAgbmFtZTogJ25hdl9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtYmFyLWZvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQjdHdvdGFic2VhcmNodGV4dGJveCcsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9pbnB1dCcsXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IGVtPy52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF90ZXJtJywgZGF0YTogeyB0ZXJtIH0gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYnV0dG9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0IHNwYW4ubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdhY2NvdW50X2FuZF9saXN0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1vcmRlcnMnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnb3JkZXJfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWNhcnQnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtY2FydCAubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdjYXJ0X2J1dHRvbidcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZmluZW1lbnRfb3B0aW9uID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiAncmVmaW5lbWVudC10aXRsZSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ3VsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IGxpID4gc3BhbiA+IGRpdltkYXRhLWEtZXhwYW5kZXItbmFtZT0nZmlsdGVyLWNvbnRlbnQtZXhwYW5kZXInXVwiLFxuICAgIG5hbWU6ICdtb3JlX29wdGlvbnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImFbZGF0YS1jc2EtYy1mdW5jLWRlcHM9J2F1aS1kYS1hLWV4cGFuZGVyLXRvZ2dsZSddXCIsXG4gICAgICAgIG5hbWU6ICd0b2dnbGVfZXhwYW5zaW9uJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJ3VsJylcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eScsXG4gIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gIGNsYXNzOiAncHJvZHVjdC1hZGQtdG8tY2FydCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYnV5LW5vdyddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdidXlfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICBzZWxlY3RvcjogJyNidXlCb3hBY2NvcmRpb24gPiBkaXYuYS1ib3guY2Vsd2lkZ2V0JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0b3BSZWZpbmVtZW50c1xcXFwvMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvcF9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1JlY2VudGx5IHVzZWQgZmlsdGVycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtcHJvZHVjdC1pbWFnZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdmFpbGFibGVfY29sb3JzJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1wYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLXR5cGU9J2xpbmsnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2FkZC10by1jYXJ0J10gYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J3Mtc2VhcmNoLXNlZS1kZXRhaWxzLWJ1dHRvbiddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9vcHRpb25zJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci5hLXBvcG92ZXItaGVhZGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT0ncy1wcm9kdWN0LWltYWdlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3NwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgyKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6aGFzKCNzbnMtYmFzZS1wcmljZSkgI3Nucy1iYXNlLXByaWNlIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6bm90KDpoYXMoI3Nucy1iYXNlLXByaWNlKSkgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLy8gaGFuZGxlIG5ldyB0d2lzdGVyc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3Rlci1wbHVzLWlubGluZS10d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItcm93JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBzcGFuOm5vdCguYW9rLWhpZGRlbikgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLmEtdW5vcmRlcmVkLWxpc3QsICNmZWF0dXJlYnVsbGV0c19mZWF0dXJlX2RpdiB1bC5hLXVub3JkZXJlZC1saXN0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbTogJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYnVsbGV0X2xpc3Q6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2kuYS1pY29uLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYWRkLXRvLWNhcnQvcmVmPWRwX3N0YXJ0LWJiZl8xX2dsYW5jZScsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvcmVmPW9yZF9jYXJ0X3NocicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH1cbl1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50OiBhbnksIHJlY2lwZTogYW55LCBwYXJlbnROYW1lID0gJycsIG50aENoaWxkID0gMCkge1xuICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgZWxlbWVudDogXCIsIGVsZW1lbnQsIHJlY2lwZSk7XG4gIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSlcbiAgfVxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgbGV0IGVsZW1lbnRUZXh0ID0gJydcbiAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpXG4gICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfanMoZWxlbWVudClcbiAgICBpZiAoZWxlbWVudFRleHQgPT09ICcnIHx8IGVsZW1lbnRUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0IGpzIGRvZXMgbm90IGRldGVjdCB0ZXh0IGZvciBlbGVtZW50ICcsIGVsZW1lbnQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICBpZiAoWyd0ZXh0JywgJ251bWJlciddLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dC1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJywgZWxlbWVudE5hbWUpXG5cbiAgICBjb25zdCBzZWxlY3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXG5cbiAgICBjb25zdCBuYW1lSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXG5cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1idXR0b24tZHJvcGRvd24gc3Bhbi5hLWJ1dHRvbi10ZXh0JylcbiAgICBjb25zdCBuZXdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBuZXdUYWcudGV4dENvbnRlbnQgPSB0YWcudGV4dENvbnRlbnRcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudE5hbWUgKyAnLm9wZW5fZHJvcF9kb3duX2xpc3QnXG4gICAgbmV3VGFnLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRhZ05hbWUpXG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCB0YWdOYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYWcpXG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtpZF49XCInICsgc2VsZWN0SWQgKyAnXCJdJylcbiAgICBvcHRpb25zLmZvckVhY2goYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpXG4gICAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudE5hbWUgKyAnLicgKyBvcHRpb25WYWx1ZVxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBvcHRpb25OYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgfSlcbiAgfVxuICAvLyBDb3B5IHNwZWNpZmllZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IGF0dHJzVG9Db3B5ID0gW1xuICAgICdhbHQnLFxuICAgICd0aXRsZScsXG4gICAgJ3R5cGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3JvbGUnLFxuICAgICdhcmlhLWxhYmVsJyxcbiAgICAnYXJpYS1oaWRkZW4nLFxuICAgICdhcmlhLXNlbGVjdGVkJ1xuICBdXG4gIGF0dHJzVG9Db3B5LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIGlmIChyZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJhdHRyaWJ1dGVzIHRvIGtlZXA6IFwiLCByZWNpcGUua2VlcF9hdHRyKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiByZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJlY2lwZVsnY2xhc3MnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlY2lwZVsnY2xhc3MnXSlcbiAgfVxuICBpZiAocmVjaXBlWydpZCddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgcmVjaXBlWydpZCddKVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgYXR0cmlidXRlcyBpZiBzcGVjaWZpZWRcbiAgaWYgKHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcmVjaXBlLm92ZXJyaWRlX2F0dHJba2V5XShlbGVtZW50KSlcbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIGNoaWxkcmVuXG4gIGlmIChyZWNpcGUuY2hpbGRyZW4gJiYgcmVjaXBlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkUmVjaXBlIG9mIHJlY2lwZS5jaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZFJlY2lwZS5kaXJlY3RfY2hpbGRcbiAgICAgICAgPyBgOnNjb3BlID4gJHtjaGlsZFJlY2lwZS5zZWxlY3Rvcn1gXG4gICAgICAgIDogY2hpbGRSZWNpcGUuc2VsZWN0b3JcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZXMsIGNoZWNrX3VzZXJfaWRfdXJsIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKCEoYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpKSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgY29uc3QgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuLy8gQWRkIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIG1hcmtlcnMgd2hlbiBuZWVkZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja2FibGVNYXJrZXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbdmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG91bGRFeGNsdWRlKHVybDogc3RyaW5nLCBpZ25vcmVVc2VySWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICBpZiAoIWlnbm9yZVVzZXJJZCkge1xuICAgIGlmIChjaHJvbWUuc3RvcmFnZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VySWQnKVxuICAgICAgaWYgKCFyZXN1bHQudXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyB1c2VyIGlkJylcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnR0VUX1VTRVJfSURfUkVTUE9OU0UnKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEudXNlcklkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdHRVRfVVNFUl9JRCcgfSwgJyonKVxuICAgICAgfSlcbiAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gKFxuICAgICF1cmxfaW5jbHVkZXMuc29tZSgoaW5jbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGluY2x1ZGVVcmwpKSB8fFxuICAgIGZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHRpbWVzdGFtcDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG59XG5leHBvcnQgZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IGhhc2ggPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCB8PSAwXG4gIH1cbiAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICByZXR1cm4gaGFzaC50b1N0cmluZygpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja191c2VyX2lkKHVzZXJfaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y2hlY2tfdXNlcl9pZF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuICdzdWNjZXNzJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YSB8fCAnVW5rbm93biBlcnJvcidcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gKVxuICB9XG4gIHJldHVybiAnVW5rbm93biBlcnJvcidcbn1cblxuaW1wb3J0IHsgcmVjaXBlcyB9IGZyb20gJy4uL3JlY2lwZV9uZXcnXG5pbXBvcnQgeyBwcm9jZXNzRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudC1wcm9jZXNzb3InXG5mdW5jdGlvbiBzZWxlY3RSZWNpcGUoKSB7XG4gIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWVcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGV4dCBtYXRjaDonLCBlcnJvcilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hdGNoTWV0aG9kID09PSAndXJsJyAmJiByZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgIHJldHVybiByZWNpcGVcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVjaXBlKCkge1xuICBjb25zb2xlLmxvZygnc3RhcnQgcHJvY2VzcyByZWNpcGUnKVxuICB0cnkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHNlbGVjdFJlY2lwZSgpXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3RvcilcbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5ld1Jvb3QgPSBwcm9jZXNzRWxlbWVudChyb290RWxlbWVudCwgcmVjaXBlKVxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBuZXdSb290Lm91dGVySFRNTFxuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRIVE1MXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgcmVjaXBlOicsIGVycm9yKVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCwgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgY2hlY2tfdXNlcl9pZCwgc2hvdWxkRXhjbHVkZSB9IGZyb20gJy4vdXRpbHMvdXRpbCdcbmNvbnN0IGRvd25sb2FkRGF0YUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZERhdGEnKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuY29uc3Qgb3V0cHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpIGFzIEhUTUxEaXZFbGVtZW50XG5jb25zdCBjbGVhckNhY2hlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQ2FjaGUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuY29uc3QgdXNlcklkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJykgYXMgSFRNTElucHV0RWxlbWVudFxuY29uc3QgcmVjb3JkaW5nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29yZGluZycpIGFzIEhUTUxEaXZFbGVtZW50XG5jb25zdCB1c2VyX2lkX3ZhbGlkX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX2lkX3ZhbGlkJykgYXMgSFRNTERpdkVsZW1lbnRcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGZldGNoIGFuZCBkaXNwbGF5IGludGVyYWN0aW9uIHN0YXRzXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyh1c2VySWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW50ZXJhY3Rpb25fc3RhdHVzX3VybH0/dXNlcl9pZD0ke3VzZXJJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYFRvdGFsIHVwbG9hZHM6ICR7ZGF0YS5hbGxfdGltZX1cXG5Ub2RheSdzIHVwbG9hZHM6ICR7ZGF0YS5vbl9kYXRlfWBcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEZhaWxlZCB0byBmZXRjaCBzdGF0czogJHtkYXRhLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YFxuICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cGRhdGVSZWNvcmRpbmdTdGF0dXMgPSAoKSA9PiB7XG4gICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdnZXRSZWNvcmRpbmdTdGF0dXMnIH0sIChyZXNwb25zZSkgPT4ge1xuXG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgYXN5bmMgKHRhYnMpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IHRhYnNbMF0udXJsXG4gICAgICBjb25zdCBpc0V4Y2x1ZGVkID0gYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpXG4gICAgICBjb25zb2xlLmxvZygnaXNFeGNsdWRlZCcsIGlzRXhjbHVkZWQpXG4gICAgICAvLyBzZW5kUmVzcG9uc2UoeyByZWNvcmRpbmc6ICFpc0V4Y2x1ZGVkIH0pXG5cbiAgICAgIGlmICghaXNFeGNsdWRlZCkge1xuICAgICAgICByZWNvcmRpbmdEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGltZyBzcmM9XCJpY29uLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIC8+IEFjdGlvbnMgb24gdGhpcyBwYWdlIHdpbGwgYmUgcmVjb3JkZWQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRpbmdEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGltZyBzcmM9XCJpbmFjdGl2ZV9pY29uLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIC8+IEFjdGlvbnMgb24gdGhpcyBwYWdlIHdpbGwgbm90IGJlIHJlY29yZGVkJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gfSlcbiAgfVxuICB1cGRhdGVSZWNvcmRpbmdTdGF0dXMoKVxuICBjb25zdCBjaGVja191c2VyX2lkX3ZhbGlkID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVzZXJfaWRfdmFsaWQgPSBhd2FpdCBjaGVja191c2VyX2lkKHVzZXJfaWQpXG5cbiAgICBpZiAodXNlcl9pZF92YWxpZCAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB1c2VyX2lkX3ZhbGlkX2Rpdi50ZXh0Q29udGVudCA9ICdVc2VyIElEIGlzIGludmFsaWQsIHBsZWFzZSBjaGVjayB5b3VyIHVzZXIgSUQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJfaWRfdmFsaWRfZGl2LnRleHRDb250ZW50ID0gJydcbiAgICB9XG4gIH1cbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsndXNlcklkJ10sIGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LnVzZXJJZCkge1xuICAgICAgdXNlcklkSW5wdXQudmFsdWUgPSByZXN1bHQudXNlcklkIHx8ICcnXG4gICAgICBkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyhyZXN1bHQudXNlcklkKVxuICAgICAgaWYgKHJlc3VsdC51c2VySWQuaW5jbHVkZXMoZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkKSkge1xuICAgICAgICBkb3dubG9hZERhdGFCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jaycgLy8gU2hvdyBidXR0b25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvd25sb2FkRGF0YUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIEhpZGUgYnV0dG9uXG4gICAgICB9XG4gICAgICBjaGVja191c2VyX2lkX3ZhbGlkKHJlc3VsdC51c2VySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJfaWRfdmFsaWRfZGl2LnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciB5b3VyIHVzZXIgaWQnXG4gICAgfVxuICB9KVxuXG4gIHVzZXJJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSB1c2VySWRJbnB1dC52YWx1ZS50cmltKClcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB1c2VySWQ6IHVzZXJJZCB9LCAoKSA9PiB7XG4gICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnVXNlciBJRCBzYXZlZC4nXG4gICAgfSlcbiAgICB1cGRhdGVSZWNvcmRpbmdTdGF0dXMoKVxuICAgIGNoZWNrX3VzZXJfaWRfdmFsaWQodXNlcklkKVxuICB9KVxuXG4gIGRvd25sb2FkRGF0YUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcklkID0gdXNlcklkSW5wdXQudmFsdWUudHJpbSgpXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2Rvd25sb2FkRGF0YScsIHVzZXJJZCB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnRGF0YSBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseS4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEZhaWxlZCB0byBkb3dubG9hZCBkYXRhOiAke3Jlc3BvbnNlLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YFxuICAgIH1cbiAgfSlcbiAgY2xlYXJDYWNoZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtcbiAgICAgICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCcsXG4gICAgICAgICdsYXN0dXBsb2FkVGltZXN0YW1wJ1xuICAgICAgXSlcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnY2xlYXJNZW1vcnlDYWNoZScgfSwgKCkgPT4ge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnQ2FjaGUgY2xlYXJlZCBzdWNjZXNzZnVsbHkuJ1xuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gXG4gICAgfVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsInBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSIsInBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5IiwicG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSIsInBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZXMiLCJpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIiwiY29uY2F0IiwiY2hlY2tfdXNlcl9pZF91cmwiLCJmaWx0ZXJfdXJsIiwic2Nyb2xsX3RocmVzaG9sZCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJjbGlja2FibGUiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQiLCJfdGV4dDIiLCJuYW1lRW0iLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidXJsIiwiX3RleHQiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfbmFtZUVtJGlubmVyVGV4dDIiLCJfdGV4dDQiLCJfdGV4dDMiLCJwcm9kdWN0X2ZhY3RzIiwicHJvZHVjdF9kZWxpdmVyeSIsInF1YW50aXR5X3NlbGVjdG9yIiwiZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yIiwic2V0X3VwX25vd19idXR0b24iLCJhZGRfdG9fY2FydF9idXR0b24iLCJidXlfbm93X2J1dHRvbiIsImJ1eV9ib3hfd2l0aF9hY2NvcmRpb24iLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5IiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwIiwiY2FydCIsInRleHRfZm9ybWF0IiwicmVjaXBlcyIsIm1hdGNoIiwibWF0Y2hfbWV0aG9kIiwiX2VtJGlubmVyVGV4dCIsIl9lbSRpbm5lclRleHQyIiwiX2VtJGlubmVyVGV4dDMiLCJyYW5nZSIsImtlZXBfYXR0ciIsIm92ZXJyaWRlX2F0dHIiLCJzdGVwX3ZhbHVlcyIsImZvcm1FbSIsInByb3AiLCJzdGVwcyIsIkpTT04iLCJwYXJzZSIsInN0ZXBMYWJlbHMiLCJjdXJyZW50X3ZhbHVlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJpbnNlcnRfc3BsaXRfbWFya2VyIiwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSIsImFzaW4iLCJwcmljZUVtIiwicHJpY2UiLCJ0aXRsZUVtIiwidXJsRW0iLCJkZWxpdmVyeUVtIiwiZGVsaXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJfZW0kaW5uZXJUZXh0NCIsIl9lbSRpbm5lclRleHQ1IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJsYWJlbCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NiIsImJ1bGxldF9saXN0IiwiYXNpbkVtIiwidGVybWluYXRlIiwiYXJndW1lbnRzIiwidGVybWluYXRlX2NhbGxiYWNrIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJwcm9jZXNzRWxlbWVudCIsInJlY2lwZSIsInBhcmVudE5hbWUiLCJudGhDaGlsZCIsInRhZ05hbWUiLCJ0YWdfbmFtZSIsImVuZHNXaXRoIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsImNsaWNrX2VsZW1lbnQiLCJ3aW5kb3ciLCJjbGlja2FibGVfcmVjaXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiY2hlY2tlZCIsImlucHV0X3JlY2lwZXMiLCJfZWxlbWVudCRwYXJlbnRFbGVtZW4iLCJzZWxlY3RJZCIsIm5hbWVJZCIsInRhZyIsIm5ld1RhZyIsImFwcGVuZENoaWxkIiwiX3JlZiIsIl9jYWxsZWUiLCJvcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJuZXdPcHRpb24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX3giLCJhdHRyc1RvQ29weSIsImF0dHIiLCJrZXkiLCJfbG9vcCIsImNoaWxkUmVjaXBlIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImluZGV4IiwiY2hpbGROb2RlIiwiZXZlcnkiLCJzcGxpdE1hcmtlciIsImVtcHR5X21lc3NhZ2UiLCJlbXB0eVRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNGcm9tUG9wdXAiLCJ1cGRhdGVfaWNvbiIsIl91cGRhdGVfaWNvbiIsInNob3VsZEV4Y2x1ZGUiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhIiwiZ3JvdXBlZFJlc3VsdCIsIm1ldGFOYW1lIiwibWV0YURhdGEiLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfeDIiLCJfc2hvdWxkRXhjbHVkZSIsIl9jYWxsZWUyIiwiaWdub3JlVXNlcklkIiwicmVzdWx0IiwidXNlcklkIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0TWVzc2FnZSIsInNvbWUiLCJpbmNsdWRlVXJsIiwiZXhjbHVkZVVybCIsImdlbmVyYXRlSHRtbFNuYXBzaG90SWQiLCJ0aW1lc3RhbXAiLCJ1dWlkIiwibG9jYXRpb24iLCJocmVmIiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNoZWNrX3VzZXJfaWQiLCJfeDMiLCJfY2hlY2tfdXNlcl9pZCIsIl9jYWxsZWUzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmV0Y2giLCJqc29uIiwib2siLCJ0MCIsIm1lc3NhZ2UiLCJzZWxlY3RSZWNpcGUiLCJwYXJzZWRVcmwiLCJVUkwiLCJwYXRobmFtZSIsIm1hdGNoTWV0aG9kIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJoYXNNYXRjaCIsImVycm9yIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwiZG93bmxvYWREYXRhQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJvdXRwdXREaXYiLCJjbGVhckNhY2hlQnRuIiwidXNlcklkSW5wdXQiLCJyZWNvcmRpbmdEaXYiLCJ1c2VyX2lkX3ZhbGlkX2RpdiIsImRpc3BsYXlJbnRlcmFjdGlvblN0YXRzIiwiX2Rpc3BsYXlJbnRlcmFjdGlvblN0YXRzIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJhbGxfdGltZSIsIm9uX2RhdGUiLCJfY2FsbGVlNCIsInVwZGF0ZVJlY29yZGluZ1N0YXR1cyIsImNoZWNrX3VzZXJfaWRfdmFsaWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiX3JlZjIiLCJpc0V4Y2x1ZGVkIiwiX3JlZjMiLCJ1c2VyX2lkX3ZhbGlkIiwiX3JlZjQiLCJzdHlsZSIsImRpc3BsYXkiLCJfeDQiLCJzZXQiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJzdWNjZXNzIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==
