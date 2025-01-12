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
/* harmony export */   buy_again: () => (/* binding */ buy_again),
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
        // text = 'Clear Option ' + text
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
          // text = 'Clear Option ' + text
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
      selector: 'li.sc-delivery-messaging',
      add_text: true
    }, {
      selector: 'div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)',
      add_text: true
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
    }],
    generate_metadata: function generate_metadata(em) {
      var _em$parentElement, _priceEm$innerText;
      var asin = (_em$parentElement = em.parentElement) === null || _em$parentElement === void 0 ? void 0 : _em$parentElement.getAttribute('data-asin');
      var priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText = priceEm.innerText) === null || _priceEm$innerText === void 0 ? void 0 : _priceEm$innerText.replace(/[\n]/g, '');
      var titleEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
      var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
      var urlEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title');
      var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
      var deliveryEm = em.querySelector('li.sc-delivery-messaging');
      var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
      var quantityEm = em.querySelector("div.sc-item-content-group span.sc-quantity-stepper div[role='spinbutton']");
      var quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          url: url,
          delivery: delivery,
          quantity: quantity
        }
      };
    }
  }]
}, {
  selector: '#sc-buy-box-ptc-button input',
  add_text: true,
  clickable: true,
  name: 'check_out'
}];
var buy_again = [nav, {
  selector: 'div.a-section:has(div.filter-container)',
  name: 'filters',
  children: [{
    selector: 'div.filter-container',
    text_selector: 'span#filter-container-header',
    name: 'from_text',
    children: [{
      selector: 'span#filter-container-header',
      add_text: true
    }, {
      selector: 'label',
      add_text: true,
      clickable: true,
      name: 'from_text',
      generate_metadata: function generate_metadata(em) {
        var _em$closest, _nameEm$innerText3;
        var title = em.innerText;
        var nameEm = (_em$closest = em.closest('div.filter-container')) === null || _em$closest === void 0 ? void 0 : _em$closest.querySelector('#filter-container-header');
        var name = nameEm === null || nameEm === void 0 || (_nameEm$innerText3 = nameEm.innerText) === null || _nameEm$innerText3 === void 0 ? void 0 : _nameEm$innerText3.replace(/[ ]/g, '_').toLowerCase().trim();
        var input = em.querySelector('input');
        if (input && input.checked) {
          return {
            name: 'filters.' + name,
            data: {
              title: (title === null || title === void 0 ? void 0 : title.trim()) || '',
              selected: true
            }
          };
        }
        return {
          name: 'filters.' + name,
          data: {
            title: (title === null || title === void 0 ? void 0 : title.trim()) || '',
            selected: false
          }
        };
      }
    }]
  }]
}, {
  selector: 'div.alm-grid-desktop-grid-container',
  name: 'product_list',
  children: [{
    selector: 'div[id^="gridCell"]',
    name: 'from_text',
    text_selector: "div[id^='closedCard'] a[id^='title'] span.a-truncate-full",
    children: [{
      selector: "div[id^='gridElement']",
      name: 'product_card',
      children: [{
        selector: "div[id^='closedCard']",
        name: 'closed_product_card',
        children: [{
          selector: "div[id^='info']",
          name: 'open_product_card',
          clickable: true,
          text_format: 'Open Product Card'
        }, {
          selector: 'form span.a-button-inner',
          name: 'add_to_cart',
          clickable: true,
          add_text: true
        }]
      }, {
        selector: 'div[name="ax-qs"]',
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
        selector: "div[id^='expandedImage']",
        name: 'close_prodct_card',
        clickable: true,
        add_text: true,
        text_format: 'Close Product Card'
      }]
    }],
    generate_metadata: function generate_metadata(em) {
      var _priceEm$innerText2;
      var asinEm = em.querySelector("div[id^='closedCard'] div[id^='info']");
      var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
      var priceEm = em.querySelector('div[id^="closedCard"] div[id^="info"] span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText2 = priceEm.innerText) === null || _priceEm$innerText2 === void 0 ? void 0 : _priceEm$innerText2.replace(/[\n]/g, '');
      var titleEm = em.querySelector("div[id^='closedCard'] a[id^='title'] span.a-truncate-full");
      var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
      var deliveryEm = em.querySelector('div[id^="closedCard"] div[id^="info"] #udmDeliveryMessageComponent');
      var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          delivery: delivery
        }
      };
    }
  }, {
    selector: 'div[id^="featured"]',
    name: 'from_text',
    text_selector: "a[id^='title'] span.a-truncate-full",
    children: [{
      selector: 'div[id^="detailContentWrapper"] div[id^="detailContent"]',
      name: 'detailed_content',
      children: [{
        selector: 'div:has(> img)',
        clickable: true,
        name: 'product_image',
        add_text: true,
        text_format: 'Product Image'
      }, {
        selector: "a[id^='title']",
        clickable: true,
        name: 'product_title',
        add_text: true,
        text_selector: 'span.a-truncate-full'
      }, {
        selector: "div[class*='multiOfferPillContainer'] a",
        clickable: true,
        name: 'from_text',
        add_text: true
      }, {
        selector: "div[data-buyingoptiontype='NEW']",
        name: 'one_time_purchase',
        children: [{
          selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
          add_text: true,
          name: 'price'
        }, {
          selector: '#udmDeliveryMessageComponent',
          add_text: true,
          name: 'delivery'
        }, {
          selector: 'div[class*="actionButtonsRow"]',
          name: 'buttons',
          children: [{
            selector: 'input[name="submit.addToCart"]',
            add_text: true,
            name: 'add_to_cart',
            clickable: true
          }, {
            selector: 'input[id^="buy-now"]',
            add_text: true,
            name: 'buy_now',
            clickable: true
          }, {
            selector: 'div[id^="feedbackButtonSection"] input',
            add_text: true,
            name: 'remove_item',
            clickable: true
          }]
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$parentElement2, _priceEm$innerText3, _em$parentElement3, _em$parentElement4;
          var asinEm = (_em$parentElement2 = em.parentElement) === null || _em$parentElement2 === void 0 ? void 0 : _em$parentElement2.parentElement;
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText3 = priceEm.innerText) === null || _priceEm$innerText3 === void 0 ? void 0 : _priceEm$innerText3.replace(/[\n]/g, '');
          var titleEm = (_em$parentElement3 = em.parentElement) === null || _em$parentElement3 === void 0 || (_em$parentElement3 = _em$parentElement3.parentElement) === null || _em$parentElement3 === void 0 ? void 0 : _em$parentElement3.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = (_em$parentElement4 = em.parentElement) === null || _em$parentElement4 === void 0 || (_em$parentElement4 = _em$parentElement4.parentElement) === null || _em$parentElement4 === void 0 ? void 0 : _em$parentElement4.querySelector("a[id^='title']");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: 'active_items',
            data: {
              title: title,
              asin: asin,
              price: price,
              url: url,
              delivery: delivery
            }
          };
        }
      }, {
        selector: "div[data-buyingoptiontype='SNS']",
        name: 'subscribe_and_save',
        children: [{
          selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
          add_text: true,
          name: 'price'
        }, {
          selector: '#udmDeliveryMessageComponent',
          add_text: true,
          name: 'delivery'
        }, {
          selector: 'div[class*="actionButtonsRow"]',
          name: 'buttons',
          children: [{
            selector: 'input[name="submit.addToCart"]',
            add_text: true,
            name: 'add_to_cart',
            clickable: true
          }, {
            selector: 'span[class*="snsButton"] input',
            add_text: true,
            name: 'subscribe_and_save',
            clickable: true
          }, {
            selector: 'div[id^="feedbackButtonSection"] input',
            add_text: true,
            name: 'remove_item',
            clickable: true
          }]
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$parentElement5, _priceEm$innerText4, _em$parentElement6, _em$parentElement7;
          var asinEm = (_em$parentElement5 = em.parentElement) === null || _em$parentElement5 === void 0 ? void 0 : _em$parentElement5.parentElement;
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText4 = priceEm.innerText) === null || _priceEm$innerText4 === void 0 ? void 0 : _priceEm$innerText4.replace(/[\n]/g, '');
          var titleEm = (_em$parentElement6 = em.parentElement) === null || _em$parentElement6 === void 0 || (_em$parentElement6 = _em$parentElement6.parentElement) === null || _em$parentElement6 === void 0 ? void 0 : _em$parentElement6.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = (_em$parentElement7 = em.parentElement) === null || _em$parentElement7 === void 0 || (_em$parentElement7 = _em$parentElement7.parentElement) === null || _em$parentElement7 === void 0 ? void 0 : _em$parentElement7.querySelector("a[id^='title']");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: 'active_items',
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
    }]
  }]
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
          // text_format: 'Clear Option {}',
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
          // text_format: 'Clear Option {}',
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
          // text_format: 'Clear Option {}',
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
        }, {
          selector: 'div[name="ax-qs"]',
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
  match: '/cart/add-to-cart',
  match_method: 'url',
  selector: 'html',
  match_with_ref: true,
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
  match_with_ref: true,
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
}, {
  match: '/gp/buyagain',
  match_method: 'url',
  match_with_ref: true,
  selector: 'html',
  children: [{
    selector: 'head',
    children: [{
      selector: 'title',
      add_text: true
    }]
  }, {
    selector: 'body',
    children: buy_again
  }]
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
/* harmony export */   getCustomQuestion: () => (/* binding */ getCustomQuestion),
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
            console.log('matched with recipe ', recipe.match);
            return recipe;
          }
        } catch (error) {
          console.error('Error checking text match:', error);
        }
      } else if (matchMethod === 'url') {
        if (recipe.match === path) {
          console.log('matched with recipe ', recipe.match);
          return recipe;
        } else if (recipe.match_with_ref && path.startsWith(recipe.match + '/ref=')) {
          console.log('matched with recipe ', recipe.match);
          return recipe;
        }
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

// Replace the simple question with a more detailed one based on event type
function getCustomQuestion(eventType, data) {
  var _data$dataSemanticI, _data$dataSemanticI2, _data$dataSemanticI3, _data$dataSemanticI4, _data$target$classNam, _data$dataSemanticI5, _data$dataSemanticI6, _data$dataSemanticI7;
  switch (eventType) {
    case 'click_a':
    case 'click_b':
    case 'click_c':
      // Check if it's a specific type of click
      if (data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' || data.target.innerText === 'Set Up Now') {
        return 'What makes you choose to subscribe to this product?';
      } else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' || data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' || data.target.id === 'buy-now-button') {
        return 'What do you like about this particular product?';
      } else if ((_data$dataSemanticI = data['data-semantic-id']) !== null && _data$dataSemanticI !== void 0 && _data$dataSemanticI.startsWith('search_results.') || (_data$dataSemanticI2 = data['data-semantic-id']) !== null && _data$dataSemanticI2 !== void 0 && _data$dataSemanticI2.startsWith('product_list.') || (_data$dataSemanticI3 = data['data-semantic-id']) !== null && _data$dataSemanticI3 !== void 0 && _data$dataSemanticI3.startsWith('active_item_list.') && (_data$dataSemanticI4 = data['data-semantic-id']) !== null && _data$dataSemanticI4 !== void 0 && _data$dataSemanticI4.endsWith('.product_detail') || (_data$target$classNam = data.target.className) !== null && _data$target$classNam !== void 0 && _data$target$classNam.includes('sc-product-link')) {
        return 'You clicked on this product. What caught your attention compared to the other options you saw?';
      } else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.add_to_cart' || data['data-semantic-id'] === 'buybox.delivery.purchase_form.add_to_cart' || data.target.id === 'add-to-cart-button' || data.target.name === 'submit.addToCart') {
        return 'What makes you decide to add this item to your cart?';
      } else if (data['data-semantic-id'] === 'nav_bar.search_button') {
        return 'What are you searching for?';
      } else if ((_data$dataSemanticI5 = data['data-semantic-id']) !== null && _data$dataSemanticI5 !== void 0 && _data$dataSemanticI5.startsWith('refinements.') || (_data$dataSemanticI6 = data['data-semantic-id']) !== null && _data$dataSemanticI6 !== void 0 && _data$dataSemanticI6.startsWith('filters.')) {
        return 'What are you hoping to find with this filter?';
      } else if ((_data$dataSemanticI7 = data['data-semantic-id']) !== null && _data$dataSemanticI7 !== void 0 && _data$dataSemanticI7.startsWith('product_options.')) {
        return 'What do you like about this product option?';
      } else {
        return 'You clicked on this element. Could you share what you were trying to do or find?';
      }
    case 'scroll':
      return 'What information are you looking for?';
    case 'input':
      return 'What are you searching for？';
    case 'navigation':
      if (data.navigationType === 'back') {
        return 'Why did you decide to go back to the previous page?';
      } else if (data.navigationType === 'forward') {
        return 'Why did you decide to return to this page ?';
      }
      return "What is the reason for this ".concat(data.navigationType, " navigation?");
    case 'tabActivate':
      return "Why did you switch to this tab?";
    default:
      return "What is the reason for the ".concat(eventType, " action?");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOQTtZQUFPLENBQUMsRUFBRSxVQUFDNkIsUUFBUSxFQUFLO2NBQzNFLElBQUlBLFFBQVEsQ0FBQ3VFLE9BQU8sRUFBRTtnQkFDcEJoQyxTQUFTLENBQUN6SixXQUFXLEdBQUcsK0JBQStCO2NBQ3pELENBQUMsTUFBTTtnQkFDTHlKLFNBQVMsQ0FBQ3pKLFdBQVcsK0JBQUFqUSxNQUFBLENBQStCbVgsUUFBUSxDQUFDZ0IsS0FBSyxJQUFJLGVBQWUsQ0FBRTtjQUN6RjtZQUNGLENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQyxPQUFPQSxLQUFLLEVBQUU7WUFDZHVCLFNBQVMsQ0FBQ3pKLFdBQVcsYUFBQWpRLE1BQUEsQ0FBY21ZLEtBQUssQ0FBV1QsT0FBTyxDQUFFO1VBQzlEO1FBQ0YsQ0FBQyxDQUFDO1FBQ0ZpQyxhQUFhLENBQUMzRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUM1QyxJQUFJO1lBQ0Z6QyxNQUFNLENBQUNtQyxPQUFPLENBQUNDLEtBQUssQ0FBQ2dHLE1BQU0sQ0FBQyxDQUMxQix5Q0FBeUMsRUFDekMscUJBQXFCLENBQ3RCLENBQUM7WUFDRnBJLE1BQU0sQ0FBQ2lJLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO2NBQUVqSSxNQUFNLEVBQUU7WUFBbUIsQ0FBQyxFQUFFLFlBQU07Y0FDL0RrRyxTQUFTLENBQUN6SixXQUFXLEdBQUcsNkJBQTZCO1lBQ3ZELENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQyxPQUFPa0ksS0FBSyxFQUFFO1lBQ2R1QixTQUFTLENBQUN6SixXQUFXLGFBQUFqUSxNQUFBLENBQWNtWSxLQUFLLENBQVdULE9BQU8sQ0FBRTtVQUM5RDtRQUNGLENBQUMsQ0FBQztNQUFBO01BQUE7UUFBQSxPQUFBZ0QsU0FBQSxDQUFBak0sSUFBQTtJQUFBO0VBQUEsR0FBQTZMLFFBQUE7QUFBQSxDQUNILEdBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGVfbmV3LnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL2VsZW1lbnQtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfc2Nyb2xsX3Byb2JhYmlsaXR5ID0gMC4xXG5leHBvcnQgY29uc3QgcG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkgPSAwLjJcbmV4cG9ydCBjb25zdCBwb3B1cF9uYXZpZ2F0aW9uX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IGZvbGRlcl9uYW1lID0gYHVzZXJfaW50ZXJhY3Rpb25fZGF0YWBcbmV4cG9ydCBjb25zdCB6aXAgPSB0cnVlXG5leHBvcnQgY29uc3QgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnXG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8nXG5leHBvcnQgY29uc3QgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkID0gJ2hhaWxhYidcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZXMgPSBbJ3d3dy5hbWF6b24uY29tJ11cbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc19yZWNvcmRfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IGNoZWNrX3VzZXJfaWRfdXJsID0gYCR7YmFzZV91cmx9L2NoZWNrX3VzZXJfaWRgXG5leHBvcnQgY29uc3QgZmlsdGVyX3VybCA9IFtcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvYnV5LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2EvYWRkcmVzc2VzJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJvZHVjdC9oYW5kbGUtYnV5LWJveC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NoZWNrb3V0cG9ydGFsLycsXG4gIC8vICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2FydC9kZXNrdG9wLydcbl1cbmV4cG9ydCBjb25zdCBzY3JvbGxfdGhyZXNob2xkID0gMzAwXG4iLCJleHBvcnQgY29uc3QgbmF2ID0ge1xuICBzZWxlY3RvcjogJyNuYXZiYXItbWFpbicsXG4gIG5hbWU6ICduYXZfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICd1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKScsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KCd1bCcpXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2ZhY3RzID0ge1xuICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICdkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG59XG5cbmV4cG9ydCBjb25zdCBxdWFudGl0eV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjc2VsZWN0UXVhbnRpdHknLFxuICBuYW1lOiAncXVhbnRpdHlfc2VsZWN0b3InLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNyZXBsZW5pc2htZW50RnJlcXVlbmN5X2ZlYXR1cmVfZGl2JyxcbiAgbmFtZTogJ2RlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcicsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1taWNybyA+IHNwYW4nLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBzZXRfdXBfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6ICcjcmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ3NldF91cF9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3Qtc2V0LXVwLW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGFkZF90b19jYXJ0X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6IFwiaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0J10sIGlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydC11YmInXVwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICBjbGFzczogJ3Byb2R1Y3QtYWRkLXRvLWNhcnQnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6IFwiaW5wdXRbbmFtZT0nc3VibWl0LmJ1eS1ub3cnXVwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYnV5X25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1idXktbm93J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRoX2FjY29yZGlvbiA9IHtcbiAgc2VsZWN0b3I6ICcjYnV5Qm94QWNjb3JkaW9uID4gZGl2LmEtYm94LmNlbHdpZGdldCcsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmFjY29yZGlvbi1jYXB0aW9uID4gc3BhbicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9kZXNrdG9wX2FjY29yZGlvbl9oZWFkZXInXVwiLFxuICAgICAgbmFtZTogJ2FjY29yZGlvbl9zZWxlY3RvcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdoNSBzcGFuLmEtdGV4dC1ib2xkJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1hY2NvcmRpb24taW5uZXIuYWNjb3JkaW9uLXJvdy1jb250ZW50JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IsXG4gICAgICAgIHNldF91cF9ub3dfYnV0dG9uLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfZ3JvdXBfMl9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNwaWNrVXBPZmZlckRpc3BsYXknLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdzYXZlLWZvci1sYXRlciddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlX2Zvcl9sYXRlcidcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luID0gZW0ucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJylcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyIGRpdltyb2xlPSdzcGluYnV0dG9uJ11cIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSwgcXVhbnRpdHkgfSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gaW5wdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBidXlfYWdhaW4gPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbjpoYXMoZGl2LmZpbHRlci1jb250YWluZXIpJyxcbiAgICBuYW1lOiAnZmlsdGVycycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuZmlsdGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2Rpdi5maWx0ZXItY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicpXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hbG0tZ3JpZC1kZXNrdG9wLWdyaWQtY29udGFpbmVyJyxcbiAgICBuYW1lOiAncHJvZHVjdF9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJncmlkQ2VsbFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2dyaWRFbGVtZW50J11cIixcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZWRfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdpbmZvJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wZW5fcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ09wZW4gUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtIHNwYW4uYS1idXR0b24taW5uZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZXhwYW5kZWRJbWFnZSddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlX3Byb2RjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGRpdltpZF49J2luZm8nXVwiKVxuICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSBzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdICN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWF0dXJlZFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gZGl2W2lkXj1cImRldGFpbENvbnRlbnRcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2RldGFpbGVkX2NvbnRlbnQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Omhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ11cIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltjbGFzcyo9J211bHRpT2ZmZXJQaWxsQ29udGFpbmVyJ10gYVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtpZF49XCJidXktbm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1eV9ub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdTTlMnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInNuc0J1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0b3BSZWZpbmVtZW50c1xcXFwvMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvcF9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1JlY2VudGx5IHVzZWQgZmlsdGVycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtcHJvZHVjdC1pbWFnZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdmFpbGFibGVfY29sb3JzJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1wYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLXR5cGU9J2xpbmsnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2FkZC10by1jYXJ0J10gYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J3Mtc2VhcmNoLXNlZS1kZXRhaWxzLWJ1dHRvbiddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9vcHRpb25zJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhLmEtdGV4dC1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1kZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDMpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLW5vLWpzLWhpZGUgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1hdGNiLWFkZC1jb250YWluZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZScsXG4gICAgbWF0Y2hfdGV4dDogJycsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2NlbnRlckNvbCcsXG4gICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydpZCddLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Omhhcygjc25zLWJhc2UtcHJpY2UpICNzbnMtYmFzZS1wcmljZSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Om5vdCg6aGFzKCNzbnMtYmFzZS1wcmljZSkpIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBwcmljZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgc3Bhbjpub3QoLmFvay1oaWRkZW4pIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dEVtLmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSB0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IHRleHRFbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1zaW5nbGV0b24taGVhZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bC5hLXVub3JkZXJlZC1saXN0LCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwuYS11bm9yZGVyZWQtbGlzdCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Fib3V0X3RoaXNfaXRlbScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBYm91dCB0aGlzIGl0ZW06ICcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldF9saXN0OiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnI2J1eWJveDpub3QoOmhhcyhkaXYuYS10YWItY29udGFpbmVyKSk6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVCdXlib3ggZGl2LmEtc2VjdGlvbi5hLXRleHQtY2VudGVyLmEtc3BhY2luZy1zbWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpLmEtaWNvbi1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hdHRhY2gtd2FycmFudHktYnV0dG9uLXJvdycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF9wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgUHJvdGVjdGlvbidcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lOb0NvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25vX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ05vIFRoYW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2FkZC10by1jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvY2FydC92aWV3Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5YWdhaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBidXlfYWdhaW5cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50OiBhbnksIHJlY2lwZTogYW55LCBwYXJlbnROYW1lID0gJycsIG50aENoaWxkID0gMCkge1xuICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgZWxlbWVudDogXCIsIGVsZW1lbnQsIHJlY2lwZSk7XG4gIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSlcbiAgfVxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgbGV0IGVsZW1lbnRUZXh0ID0gJydcbiAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpXG4gICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfanMoZWxlbWVudClcbiAgICBpZiAoZWxlbWVudFRleHQgPT09ICcnIHx8IGVsZW1lbnRUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0IGpzIGRvZXMgbm90IGRldGVjdCB0ZXh0IGZvciBlbGVtZW50ICcsIGVsZW1lbnQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICBpZiAoWyd0ZXh0JywgJ251bWJlciddLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dC1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJywgZWxlbWVudE5hbWUpXG5cbiAgICBjb25zdCBzZWxlY3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXG5cbiAgICBjb25zdCBuYW1lSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXG5cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1idXR0b24tZHJvcGRvd24gc3Bhbi5hLWJ1dHRvbi10ZXh0JylcbiAgICBjb25zdCBuZXdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBuZXdUYWcudGV4dENvbnRlbnQgPSB0YWcudGV4dENvbnRlbnRcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudE5hbWUgKyAnLm9wZW5fZHJvcF9kb3duX2xpc3QnXG4gICAgbmV3VGFnLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRhZ05hbWUpXG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCB0YWdOYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYWcpXG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtpZF49XCInICsgc2VsZWN0SWQgKyAnXCJdJylcbiAgICBvcHRpb25zLmZvckVhY2goYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpXG4gICAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudE5hbWUgKyAnLicgKyBvcHRpb25WYWx1ZVxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBvcHRpb25OYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgfSlcbiAgfVxuICAvLyBDb3B5IHNwZWNpZmllZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IGF0dHJzVG9Db3B5ID0gW1xuICAgICdhbHQnLFxuICAgICd0aXRsZScsXG4gICAgJ3R5cGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3JvbGUnLFxuICAgICdhcmlhLWxhYmVsJyxcbiAgICAnYXJpYS1oaWRkZW4nLFxuICAgICdhcmlhLXNlbGVjdGVkJ1xuICBdXG4gIGF0dHJzVG9Db3B5LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIGlmIChyZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJhdHRyaWJ1dGVzIHRvIGtlZXA6IFwiLCByZWNpcGUua2VlcF9hdHRyKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiByZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJlY2lwZVsnY2xhc3MnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlY2lwZVsnY2xhc3MnXSlcbiAgfVxuICBpZiAocmVjaXBlWydpZCddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgcmVjaXBlWydpZCddKVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgYXR0cmlidXRlcyBpZiBzcGVjaWZpZWRcbiAgaWYgKHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcmVjaXBlLm92ZXJyaWRlX2F0dHJba2V5XShlbGVtZW50KSlcbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIGNoaWxkcmVuXG4gIGlmIChyZWNpcGUuY2hpbGRyZW4gJiYgcmVjaXBlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkUmVjaXBlIG9mIHJlY2lwZS5jaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZFJlY2lwZS5kaXJlY3RfY2hpbGRcbiAgICAgICAgPyBgOnNjb3BlID4gJHtjaGlsZFJlY2lwZS5zZWxlY3Rvcn1gXG4gICAgICAgIDogY2hpbGRSZWNpcGUuc2VsZWN0b3JcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4gICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICBpZiAocmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgfSBlbHNlIGlmIChyZWNpcGUubWF0Y2hfd2l0aF9yZWYgJiYgcGF0aC5zdGFydHNXaXRoKHJlY2lwZS5tYXRjaCArICcvcmVmPScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZWNpcGUoKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKClcbiAgICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSAnY2xpY2tfYSc6XG4gICAgY2FzZSAnY2xpY2tfYic6XG4gICAgY2FzZSAnY2xpY2tfYyc6XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkuc3Vic2NyaWJlX3NhdmVfLnB1cmNoYXNlX2Zvcm0uc2V0X3VwX25vdycgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdydcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJ1doYXQgbWFrZXMgeW91IGNob29zZSB0byBzdWJzY3JpYmUgdG8gdGhpcyBwcm9kdWN0PydcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcGFydGljdWxhciBwcm9kdWN0PydcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnc2VhcmNoX3Jlc3VsdHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X2xpc3QuJykgfHxcbiAgICAgICAgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnYWN0aXZlX2l0ZW1fbGlzdC4nKSAmJlxuICAgICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJy5wcm9kdWN0X2RldGFpbCcpKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5jbGFzc05hbWU/LmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnWW91IGNsaWNrZWQgb24gdGhpcyBwcm9kdWN0LiBXaGF0IGNhdWdodCB5b3VyIGF0dGVudGlvbiBjb21wYXJlZCB0byB0aGUgb3RoZXIgb3B0aW9ucyB5b3Ugc2F3PydcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT1cbiAgICAgICAgICAnYnV5Ym94LmRlbGl2ZXJ5Lm9uZV90aW1lX3B1cmNoYXNlXy5wdXJjaGFzZV9mb3JtLmFkZF90b19jYXJ0JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5hZGRfdG9fY2FydCcgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0Lm5hbWUgPT09ICdzdWJtaXQuYWRkVG9DYXJ0J1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBtYWtlcyB5b3UgZGVjaWRlIHRvIGFkZCB0aGlzIGl0ZW0gdG8geW91ciBjYXJ0PydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnbmF2X2Jhci5zZWFyY2hfYnV0dG9uJykge1xuICAgICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yPydcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncmVmaW5lbWVudHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdmaWx0ZXJzLicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3UgaG9waW5nIHRvIGZpbmQgd2l0aCB0aGlzIGZpbHRlcj8nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9vcHRpb25zLicpKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHByb2R1Y3Qgb3B0aW9uPydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnWW91IGNsaWNrZWQgb24gdGhpcyBlbGVtZW50LiBDb3VsZCB5b3Ugc2hhcmUgd2hhdCB5b3Ugd2VyZSB0cnlpbmcgdG8gZG8gb3IgZmluZD8nXG4gICAgICB9XG5cbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgcmV0dXJuICdXaGF0IGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3I/J1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3LvvJ8nXG4gICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2U/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSA/J1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2BcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICByZXR1cm4gYFdoeSBkaWQgeW91IHN3aXRjaCB0byB0aGlzIHRhYj9gXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkLCBpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIH0gZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBjaGVja191c2VyX2lkLCBzaG91bGRFeGNsdWRlIH0gZnJvbSAnLi91dGlscy91dGlsJ1xuY29uc3QgZG93bmxvYWREYXRhQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd25sb2FkRGF0YScpIGFzIEhUTUxCdXR0b25FbGVtZW50XG5jb25zdCBvdXRwdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0JykgYXMgSFRNTERpdkVsZW1lbnRcbmNvbnN0IGNsZWFyQ2FjaGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJDYWNoZScpIGFzIEhUTUxCdXR0b25FbGVtZW50XG5jb25zdCB1c2VySWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VySWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50XG5jb25zdCByZWNvcmRpbmdEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb3JkaW5nJykgYXMgSFRNTERpdkVsZW1lbnRcbmNvbnN0IHVzZXJfaWRfdmFsaWRfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfaWRfdmFsaWQnKSBhcyBIVE1MRGl2RWxlbWVudFxuLy8gQWRkIHRoaXMgZnVuY3Rpb24gdG8gZmV0Y2ggYW5kIGRpc3BsYXkgaW50ZXJhY3Rpb24gc3RhdHNcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlJbnRlcmFjdGlvblN0YXRzKHVzZXJJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtpbnRlcmFjdGlvbl9zdGF0dXNfdXJsfT91c2VyX2lkPSR7dXNlcklkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgVG90YWwgdXBsb2FkczogJHtkYXRhLmFsbF90aW1lfVxcblRvZGF5J3MgdXBsb2FkczogJHtkYXRhLm9uX2RhdGV9YFxuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRmFpbGVkIHRvIGZldGNoIHN0YXRzOiAke2RhdGEuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InfWBcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gXG4gIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVwZGF0ZVJlY29yZGluZ1N0YXR1cyA9ICgpID0+IHtcbiAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2dldFJlY29yZGluZ1N0YXR1cycgfSwgKHJlc3BvbnNlKSA9PiB7XG5cbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBhc3luYyAodGFicykgPT4ge1xuICAgICAgY29uc3QgdXJsID0gdGFic1swXS51cmxcbiAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPSBhd2FpdCBzaG91bGRFeGNsdWRlKHVybClcbiAgICAgIGNvbnNvbGUubG9nKCdpc0V4Y2x1ZGVkJywgaXNFeGNsdWRlZClcbiAgICAgIC8vIHNlbmRSZXNwb25zZSh7IHJlY29yZGluZzogIWlzRXhjbHVkZWQgfSlcblxuICAgICAgaWYgKCFpc0V4Y2x1ZGVkKSB7XG4gICAgICAgIHJlY29yZGluZ0Rpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8aW1nIHNyYz1cImljb24ucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCIgLz4gQWN0aW9ucyBvbiB0aGlzIHBhZ2Ugd2lsbCBiZSByZWNvcmRlZCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlY29yZGluZ0Rpdi5pbm5lckhUTUwgPVxuICAgICAgICAgICc8aW1nIHNyYz1cImluYWN0aXZlX2ljb24ucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCIgLz4gQWN0aW9ucyBvbiB0aGlzIHBhZ2Ugd2lsbCBub3QgYmUgcmVjb3JkZWQnXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyB9KVxuICB9XG4gIHVwZGF0ZVJlY29yZGluZ1N0YXR1cygpXG4gIGNvbnN0IGNoZWNrX3VzZXJfaWRfdmFsaWQgPSBhc3luYyAodXNlcl9pZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdXNlcl9pZF92YWxpZCA9IGF3YWl0IGNoZWNrX3VzZXJfaWQodXNlcl9pZClcblxuICAgIGlmICh1c2VyX2lkX3ZhbGlkICE9PSAnc3VjY2VzcycpIHtcbiAgICAgIHVzZXJfaWRfdmFsaWRfZGl2LnRleHRDb250ZW50ID0gJ1VzZXIgSUQgaXMgaW52YWxpZCwgcGxlYXNlIGNoZWNrIHlvdXIgdXNlciBJRCdcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlcl9pZF92YWxpZF9kaXYudGV4dENvbnRlbnQgPSAnJ1xuICAgIH1cbiAgfVxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWyd1c2VySWQnXSwgYXN5bmMgKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQudXNlcklkKSB7XG4gICAgICB1c2VySWRJbnB1dC52YWx1ZSA9IHJlc3VsdC51c2VySWQgfHwgJydcbiAgICAgIGRpc3BsYXlJbnRlcmFjdGlvblN0YXRzKHJlc3VsdC51c2VySWQpXG4gICAgICBpZiAocmVzdWx0LnVzZXJJZC5pbmNsdWRlcyhkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQpKSB7XG4gICAgICAgIGRvd25sb2FkRGF0YUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAvLyBTaG93IGJ1dHRvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG93bmxvYWREYXRhQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gSGlkZSBidXR0b25cbiAgICAgIH1cbiAgICAgIGNoZWNrX3VzZXJfaWRfdmFsaWQocmVzdWx0LnVzZXJJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlcl9pZF92YWxpZF9kaXYudGV4dENvbnRlbnQgPSAnUGxlYXNlIGVudGVyIHlvdXIgdXNlciBpZCdcbiAgICB9XG4gIH0pXG5cbiAgdXNlcklkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJJZElucHV0LnZhbHVlLnRyaW0oKVxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHVzZXJJZDogdXNlcklkIH0sICgpID0+IHtcbiAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9ICdVc2VyIElEIHNhdmVkLidcbiAgICB9KVxuICAgIHVwZGF0ZVJlY29yZGluZ1N0YXR1cygpXG4gICAgY2hlY2tfdXNlcl9pZF92YWxpZCh1c2VySWQpXG4gIH0pXG5cbiAgZG93bmxvYWREYXRhQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VySWQgPSB1c2VySWRJbnB1dC52YWx1ZS50cmltKClcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnZG93bmxvYWREYXRhJywgdXNlcklkIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9ICdEYXRhIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRmFpbGVkIHRvIGRvd25sb2FkIGRhdGE6ICR7cmVzcG9uc2UuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gXG4gICAgfVxuICB9KVxuICBjbGVhckNhY2hlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgICAgICAndXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wJyxcbiAgICAgICAgJ2xhc3R1cGxvYWRUaW1lc3RhbXAnXG4gICAgICBdKVxuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdjbGVhck1lbW9yeUNhY2hlJyB9LCAoKSA9PiB7XG4gICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9ICdDYWNoZSBjbGVhcmVkIHN1Y2Nlc3NmdWxseS4nXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWBcbiAgICB9XG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbInBvcHVwX3Byb2JhYmlsaXR5IiwicG9wdXBfc2Nyb2xsX3Byb2JhYmlsaXR5IiwicG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkiLCJwb3B1cF9uYXZpZ2F0aW9uX3Byb2JhYmlsaXR5IiwicG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkiLCJmb2xkZXJfbmFtZSIsInppcCIsInVwbG9hZF91cmwiLCJiYXNlX3VybCIsImRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCIsInVybF9pbmNsdWRlcyIsImludGVyYWN0aW9uX3N0YXR1c191cmwiLCJjb25jYXQiLCJjaGVja191c2VyX2lkX3VybCIsImZpbHRlcl91cmwiLCJzY3JvbGxfdGhyZXNob2xkIiwibmF2Iiwic2VsZWN0b3IiLCJuYW1lIiwiY2hpbGRyZW4iLCJnZW5lcmF0ZV9tZXRhZGF0YSIsImVtIiwidGVybSIsInZhbHVlIiwiZGF0YSIsImNsaWNrYWJsZSIsInRleHRfc2VsZWN0b3IiLCJhZGRfdGV4dCIsInJlZmluZW1lbnRfb3B0aW9uIiwiZGlyZWN0X2NoaWxkIiwidGV4dF9qcyIsImVsZW1lbnQiLCJ0ZXh0IiwiYUNoaWxkIiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInRyaW0iLCJoYXNBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJlIiwiY29uc29sZSIsImxvZyIsIl9lbGVtZW50JGNsb3Nlc3QiLCJfbmFtZUVtJGlubmVyVGV4dCIsIl90ZXh0MiIsIm5hbWVFbSIsImNsb3Nlc3QiLCJwYXJlbnRFbGVtZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJ1cmwiLCJfdGV4dCIsInRpdGxlIiwic2VsZWN0ZWQiLCJfZWxlbWVudCRjbG9zZXN0MiIsIl9uYW1lRW0kaW5uZXJUZXh0MiIsIl90ZXh0NCIsIl90ZXh0MyIsInByb2R1Y3RfZmFjdHMiLCJwcm9kdWN0X2RlbGl2ZXJ5IiwicXVhbnRpdHlfc2VsZWN0b3IiLCJkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IiLCJzZXRfdXBfbm93X2J1dHRvbiIsImFkZF90b19jYXJ0X2J1dHRvbiIsImJ1eV9ub3dfYnV0dG9uIiwiYnV5X2JveF93aXRoX2FjY29yZGlvbiIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkiLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAiLCJjYXJ0IiwidGV4dF9mb3JtYXQiLCJfZW0kcGFyZW50RWxlbWVudCIsIl9wcmljZUVtJGlubmVyVGV4dCIsImFzaW4iLCJwcmljZUVtIiwicHJpY2UiLCJ0aXRsZUVtIiwidXJsRW0iLCJkZWxpdmVyeUVtIiwiZGVsaXZlcnkiLCJxdWFudGl0eUVtIiwicXVhbnRpdHkiLCJidXlfYWdhaW4iLCJfZW0kY2xvc2VzdCIsIl9uYW1lRW0kaW5uZXJUZXh0MyIsImlucHV0IiwiY2hlY2tlZCIsIl9wcmljZUVtJGlubmVyVGV4dDIiLCJhc2luRW0iLCJfZW0kcGFyZW50RWxlbWVudDIiLCJfcHJpY2VFbSRpbm5lclRleHQzIiwiX2VtJHBhcmVudEVsZW1lbnQzIiwiX2VtJHBhcmVudEVsZW1lbnQ0IiwiX2VtJHBhcmVudEVsZW1lbnQ1IiwiX3ByaWNlRW0kaW5uZXJUZXh0NCIsIl9lbSRwYXJlbnRFbGVtZW50NiIsIl9lbSRwYXJlbnRFbGVtZW50NyIsInJlY2lwZXMiLCJtYXRjaCIsIm1hdGNoX21ldGhvZCIsIl9lbSRpbm5lclRleHQiLCJfZW0kaW5uZXJUZXh0MiIsIl9lbSRpbm5lclRleHQzIiwicmFuZ2UiLCJrZWVwX2F0dHIiLCJvdmVycmlkZV9hdHRyIiwic3RlcF92YWx1ZXMiLCJmb3JtRW0iLCJwcm9wIiwic3RlcHMiLCJKU09OIiwicGFyc2UiLCJzdGVwTGFiZWxzIiwiY3VycmVudF92YWx1ZSIsIk51bWJlciIsInBhcnNlSW50IiwiaW5zZXJ0X3NwbGl0X21hcmtlciIsImluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkiLCJjbGlja19zZWxlY3RvciIsIm1hdGNoX3RleHQiLCJfZW0kaW5uZXJUZXh0NCIsIl9lbSRpbm5lclRleHQ1IiwiX2VtJHF1ZXJ5U2VsZWN0b3IiLCJfZW0kcXVlcnlTZWxlY3RvcjIiLCJsYWJlbCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsIl9lbSRxdWVyeVNlbGVjdG9yMyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIm9wdGlvbiIsImVyciIsImYiLCJpbWdDaGlsZCIsImFsdCIsIl9lbSRxdWVyeVNlbGVjdG9yNCIsIl9lbSRxdWVyeVNlbGVjdG9yNSIsIl9lbSRxdWVyeVNlbGVjdG9yNiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJ0ZXh0RW0iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJfZW0kcXVlcnlTZWxlY3RvcjciLCJfZW0kcXVlcnlTZWxlY3RvcjgiLCJfZW0kaW5uZXJUZXh0NiIsImJ1bGxldF9saXN0IiwibWF0Y2hfd2l0aF9yZWYiLCJ0ZXJtaW5hdGUiLCJhcmd1bWVudHMiLCJ0ZXJtaW5hdGVfY2FsbGJhY2siLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInByb2Nlc3NFbGVtZW50IiwicmVjaXBlIiwicGFyZW50TmFtZSIsIm50aENoaWxkIiwidGFnTmFtZSIsInRhZ19uYW1lIiwiZW5kc1dpdGgiLCJuZXdFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudFRleHQiLCJ0ZXh0RWxlbWVudCIsInRleHRDb250ZW50IiwiZWxlbWVudE5hbWUiLCJ0b1N0cmluZyIsInNldEF0dHJpYnV0ZSIsIm1ldGFvYmoiLCJtZXRhZGF0YSIsInN0cmluZ2lmeSIsIm1ldGFuYW1lIiwiY2xpY2tfZWxlbWVudCIsIndpbmRvdyIsImNsaWNrYWJsZV9yZWNpcGVzIiwiaW5wdXRUeXBlIiwiaW5jbHVkZXMiLCJpbnB1dF9yZWNpcGVzIiwiX2VsZW1lbnQkcGFyZW50RWxlbWVuIiwic2VsZWN0SWQiLCJuYW1lSWQiLCJ0YWciLCJuZXdUYWciLCJhcHBlbmRDaGlsZCIsIl9yZWYiLCJfY2FsbGVlIiwib3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwibmV3T3B0aW9uIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl94IiwiYXR0cnNUb0NvcHkiLCJhdHRyIiwia2V5IiwiX2xvb3AiLCJjaGlsZFJlY2lwZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJpbmRleCIsImNoaWxkTm9kZSIsImV2ZXJ5Iiwic3BsaXRNYXJrZXIiLCJlbXB0eV9tZXNzYWdlIiwiZW1wdHlUZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX24iLCJGIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzRnJvbVBvcHVwIiwidXBkYXRlX2ljb24iLCJfdXBkYXRlX2ljb24iLCJzaG91bGRFeGNsdWRlIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJmaW5kUGFnZU1ldGEiLCJhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSIsImdyb3VwZWRSZXN1bHQiLCJtZXRhTmFtZSIsIm1ldGFEYXRhIiwiZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0IiwiZG9jdW1lbnRDb3B5IiwiY2xvbmVOb2RlIiwiYWxsRWxlbWVudHMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDbGlja2FibGVNYXJrZXJzIiwicmVtb3ZlQXR0cmlidXRlIiwiX3gyIiwiX3Nob3VsZEV4Y2x1ZGUiLCJfY2FsbGVlMiIsImlnbm9yZVVzZXJJZCIsInJlc3VsdCIsInVzZXJJZCIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImhhbmRsZU1lc3NhZ2UiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJzb21lIiwiaW5jbHVkZVVybCIsImV4Y2x1ZGVVcmwiLCJnZW5lcmF0ZUh0bWxTbmFwc2hvdElkIiwidGltZXN0YW1wIiwidXVpZCIsImxvY2F0aW9uIiwiaHJlZiIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjaGVja191c2VyX2lkIiwiX3gzIiwiX2NoZWNrX3VzZXJfaWQiLCJfY2FsbGVlMyIsInVzZXJfaWQiLCJyZXNwb25zZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZldGNoIiwianNvbiIsIm9rIiwidDAiLCJtZXNzYWdlIiwic2VsZWN0UmVjaXBlIiwicGFyc2VkVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJtYXRjaE1ldGhvZCIsIl9lbGVtZW50JHRleHRDb250ZW50JCIsIl9lbGVtZW50JHRleHRDb250ZW50IiwiaGFzTWF0Y2giLCJlcnJvciIsInN0YXJ0c1dpdGgiLCJwcm9jZXNzUmVjaXBlIiwicm9vdEVsZW1lbnQiLCJuZXdSb290Iiwic2ltcGxpZmllZEhUTUwiLCJvdXRlckhUTUwiLCJnZXRDdXN0b21RdWVzdGlvbiIsImV2ZW50VHlwZSIsIl9kYXRhJGRhdGFTZW1hbnRpY0kiLCJfZGF0YSRkYXRhU2VtYW50aWNJMiIsIl9kYXRhJGRhdGFTZW1hbnRpY0kzIiwiX2RhdGEkZGF0YVNlbWFudGljSTQiLCJfZGF0YSR0YXJnZXQkY2xhc3NOYW0iLCJfZGF0YSRkYXRhU2VtYW50aWNJNSIsIl9kYXRhJGRhdGFTZW1hbnRpY0k2IiwiX2RhdGEkZGF0YVNlbWFudGljSTciLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25UeXBlIiwiZG93bmxvYWREYXRhQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJvdXRwdXREaXYiLCJjbGVhckNhY2hlQnRuIiwidXNlcklkSW5wdXQiLCJyZWNvcmRpbmdEaXYiLCJ1c2VyX2lkX3ZhbGlkX2RpdiIsImRpc3BsYXlJbnRlcmFjdGlvblN0YXRzIiwiX2Rpc3BsYXlJbnRlcmFjdGlvblN0YXRzIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJhbGxfdGltZSIsIm9uX2RhdGUiLCJfY2FsbGVlNCIsInVwZGF0ZVJlY29yZGluZ1N0YXR1cyIsImNoZWNrX3VzZXJfaWRfdmFsaWQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiX3JlZjIiLCJpc0V4Y2x1ZGVkIiwiX3JlZjMiLCJ1c2VyX2lkX3ZhbGlkIiwiX3JlZjQiLCJzdHlsZSIsImRpc3BsYXkiLCJfeDQiLCJzZXQiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJzdWNjZXNzIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==
