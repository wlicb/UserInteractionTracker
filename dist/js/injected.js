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
      selector: 'div.sc-item-check-checkbox-selector label',
      clickable: true,
      name: 'checkbox'
    }, {
      selector: 'div.sc-image-wrapper a',
      clickable: true,
      name: 'product_image',
      add_text: true,
      text_format: 'Product Image'
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
      var selectedEm = em.querySelector('div.sc-item-check-checkbox-selector input');
      var selected = (selectedEm === null || selectedEm === void 0 ? void 0 : selectedEm.getAttribute('checked')) !== null;
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          url: url,
          delivery: delivery,
          quantity: quantity,
          selected: selected
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
        }, {
          selector: 'div[id^="seeBuyingOptionsWrapper"] a',
          name: 'see_buying_options',
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
        name: 'close_product_card',
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
        selector: "div[data-buyingoptiontype='NEW'], div[class*='asinDetailInfoColumns']:has(input[name='submit.addToCart']",
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
          selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailActionsRow"]',
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
          }]
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$parentElement2, _priceEm$innerText3, _em$parentElement3, _em$parentElement4;
          var asinEm = (_em$parentElement2 = em.parentElement) === null || _em$parentElement2 === void 0 ? void 0 : _em$parentElement2.parentElement;
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          if (asin === null) {
            var _asinEm = em.parentElement;
            var _asin = _asinEm === null || _asinEm === void 0 ? void 0 : _asinEm.getAttribute('data-asin');
          }
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
        selector: "div[data-buyingoptiontype='SNS'], div[class*='snsUpsellBlockContainer']",
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
        }, {
          selector: 'span[class*="subscriptionButton"]',
          add_text: true,
          name: 'set_up_subscription',
          clickable: true
        }],
        generate_metadata: function generate_metadata(em) {
          var _em$parentElement5, _asinEm2, _priceEm$innerText4, _em$parentElement6, _em$parentElement7;
          var asinEm = (_em$parentElement5 = em.parentElement) === null || _em$parentElement5 === void 0 ? void 0 : _em$parentElement5.parentElement;
          var asin = (_asinEm2 = asinEm) === null || _asinEm2 === void 0 ? void 0 : _asinEm2.getAttribute('data-asin');
          if (asin === null) {
            var _asinEm3;
            asinEm = em.querySelector('input[data-mix-operations="snsModalHandler"]');
            asin = (_asinEm3 = asinEm) === null || _asinEm3 === void 0 ? void 0 : _asinEm3.getAttribute('data-asin');
          }
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
    }, {
      selector: "div[id^='detail-view-similar-items']",
      name: 'similar_items',
      children: [{
        selector: 'li.a-carousel-card',
        name: 'from_text',
        text_selector: "a[id^='title'] span.a-truncate-full",
        children: [{
          selector: 'div.a-image-container:has(> img)',
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
          selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
          add_text: true,
          name: 'price'
        }, {
          selector: '#udmDeliveryMessageComponent',
          add_text: true,
          name: 'delivery'
        }, {
          selector: 'input[name="submit.addToCart"], input[name^="atfcShim"], button[aria-label="Add to Cart. Click to change quantity"]',
          add_text: true,
          name: 'add_to_cart',
          clickable: true
        }, {
          selector: 'div[id^="seeBuyingOptionsWrapper"] a',
          name: 'see_buying_options',
          clickable: true,
          add_text: true
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
          selector: 'div.qs-widget-container',
          children: [{
            selector: "input[aria-label='Remove']",
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
            selector: 'div.qs-widget-dropdown-flex-wrapper button',
            add_text: true,
            clickable: true,
            name: 'drop_down_list',
            text_format: 'Current Quantity: {}'
          }, {
            selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text',
            text_format: 'Drop Down Option {}'
          }, {
            selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text'
          }, {
            selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text'
          }, {
            selector: "input[aria-label='Add']",
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
          var _em$closest2, _parentTitleEm$innerT, _priceEm$innerText5;
          var parentTitleEm = (_em$closest2 = em.closest('div[id^="featured"]')) === null || _em$closest2 === void 0 ? void 0 : _em$closest2.querySelector('div[id^="detailContentWrapper"] a[id^="title"] span.a-truncate-full');
          var parentTitle = parentTitleEm === null || parentTitleEm === void 0 || (_parentTitleEm$innerT = parentTitleEm.innerText) === null || _parentTitleEm$innerT === void 0 ? void 0 : _parentTitleEm$innerT.toLowerCase().replace(/[^\w]+/g, '_');
          var asinEm = em.querySelector('div[class*="delightFaceout"]');
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText5 = priceEm.innerText) === null || _priceEm$innerText5 === void 0 ? void 0 : _priceEm$innerText5.replace(/[\n]/g, '');
          var titleEm = em.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = em.querySelector("a[id^='title']");
          var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
          var deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
          var delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
          return {
            name: parentTitle + '.similar_items',
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
        var childElements;
        if (childRecipe.use_root) {
          childElements = document.querySelectorAll(selector);
          console.log('use root for ', childElements);
        } else childElements = element.querySelectorAll(selector);
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
/* harmony export */   isValidReason: () => (/* binding */ isValidReason),
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
  path = path !== '/' ? path.replace(/\/+$/, '') : path;
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
      return 'What are you searching for?';
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
function isValidReason(reason) {
  if (!reason || reason.trim().length === 0) {
    return false; // Empty input
  }
  if (reason.trim().length < 2 || reason.length < 5) {
    return false; // Too short to be meaningful, at least 5 characters and 2 words
  }
  // Check for repetitive or meaningless input (e.g., "aaa","!!!")
  var meaninglessPatterns = [/^(.)\1{3,}$/, /^[^a-zA-Z0-9]+$/];
  for (var _i = 0, _meaninglessPatterns = meaninglessPatterns; _i < _meaninglessPatterns.length; _i++) {
    var pattern = _meaninglessPatterns[_i];
    if (pattern.test(reason.toLowerCase().replace(/\s+/g, ''))) {
      return false;
    }
  }
  return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7SUFDQUMsa0JBQWtCLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQ0QsSUFBSSxDQUFDak8sTUFBTSxDQUFDeUosYUFBYSxFQUFFO0lBQ3pCRCxXQUFXLENBQUMsQ0FBQztFQUNmO0VBQ0FySyxRQUFRLENBQUNtRyxnQkFBZ0IsQ0FDdkIsa0JBQWtCLEVBQ2xCLFlBQU07SUFDSjdVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQy9Ca1MsMERBQWEsQ0FBQzVDLE1BQU0sQ0FBQzhGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUN6SyxJQUFJLENBQUMsVUFBQ3FKLE1BQU0sRUFBSztNQUNuRGxVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRWlVLE1BQU0sQ0FBQztNQUNwQzNFLE1BQU0sQ0FBQzRDLGFBQWEsR0FBRytCLE1BQU07SUFDL0IsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxFQUNEO0lBQ0VpRyxJQUFJLEVBQUU7RUFDUixDQUNGLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0FoSSwwREFBYSxDQUFDNUMsTUFBTSxDQUFDOEYsUUFBUSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUN6SyxJQUFJLENBQUMsVUFBQ3FKLE1BQU0sRUFBSztFQUN6RCxJQUFJLENBQUNBLE1BQU0sRUFBRTtJQUNYNEUsSUFBSSxDQUFDLENBQUM7RUFDUjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AbWVkdi9maW5kZXIvZmluZGVyLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvaW5qZWN0ZWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMVxuZXhwb3J0IGNvbnN0IHBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5ID0gMC4yXG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAndWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSknLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICBsZXQgdXJsID0gJydcblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICB9XG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uY2xvc2VzdCgndWwnKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGxhYmVsJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWltYWdlLXdyYXBwZXIgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRFbT8uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGxcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSwgc2VsZWN0ZWQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGJ1eV9hZ2FpbiA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uOmhhcyhkaXYuZmlsdGVyLWNvbnRhaW5lciknLFxuICAgIG5hbWU6ICdmaWx0ZXJzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5maWx0ZXItY29udGFpbmVyJyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbS5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW1cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2LmZpbHRlci1jb250YWluZXInKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI2ZpbHRlci1jb250YWluZXItaGVhZGVyJylcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmFsbS1ncmlkLWRlc2t0b3AtZ3JpZC1jb250YWluZXInLFxuICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImdyaWRDZWxsXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZ3JpZEVsZW1lbnQnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlZF9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2luZm8nXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3Blbl9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnT3BlbiBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm0gc3Bhbi5hLWJ1dHRvbi1pbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2V4cGFuZGVkSW1hZ2UnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZV9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gZGl2W2lkXj0naW5mbyddXCIpXG4gICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdIHNwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgZGVsaXZlcnkgfSB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlYXR1cmVkXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBkaXZbaWRePVwiZGV0YWlsQ29udGVudFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0YWlsZWRfY29udGVudCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2NsYXNzKj0nbXVsdGlPZmZlclBpbGxDb250YWluZXInXSBhXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ10sIGRpdltjbGFzcyo9J2FzaW5EZXRhaWxJbmZvQ29sdW1ucyddOmhhcyhpbnB1dFtuYW1lPSdzdWJtaXQuYWRkVG9DYXJ0J11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxBY3Rpb25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImJ1eS1ub3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBpZiAoYXNpbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNpbkVtID0gZW0ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nU05TJ10sIGRpdltjbGFzcyo9J3Nuc1Vwc2VsbEJsb2NrQ29udGFpbmVyJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzbnNCdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvblwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0X3VwX3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBpZiAoYXNpbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLW1peC1vcGVyYXRpb25zPVwic25zTW9kYWxIYW5kbGVyXCJdJylcbiAgICAgICAgICAgICAgICAgICAgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdkZXRhaWwtdmlldy1zaW1pbGFyLWl0ZW1zJ11cIixcbiAgICAgICAgICAgIG5hbWU6ICdzaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtaW1hZ2UtY29udGFpbmVyOmhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIGlucHV0W25hbWVePVwiYXRmY1NoaW1cIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiQWRkIHRvIENhcnQuIENsaWNrIHRvIGNoYW5nZSBxdWFudGl0eVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2W2lkXj1cImZlYXR1cmVkXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gYVtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGUgPSBwYXJlbnRUaXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkZWxpZ2h0RmFjZW91dFwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFRpdGxlICsgJy5zaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RvcFJlZmluZW1lbnRzXFxcXC8wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9wX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmVjZW50bHkgdXNlZCBmaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcmljZVJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAvLyAyIGNhc2VzOiBzZWxlY3Rpb24gLyBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF8zNi10aXRsZSwgZGl2LnNmLXJlZmluZW1lbnQtaGVhZGluZyBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci5hLXBvcG92ZXItaGVhZGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT0ncy1wcm9kdWN0LWltYWdlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3NwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgyKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6aGFzKCNzbnMtYmFzZS1wcmljZSkgI3Nucy1iYXNlLXByaWNlIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6bm90KDpoYXMoI3Nucy1iYXNlLXByaWNlKSkgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLy8gaGFuZGxlIG5ldyB0d2lzdGVyc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3Rlci1wbHVzLWlubGluZS10d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItcm93JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBzcGFuOm5vdCguYW9rLWhpZGRlbikgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLmEtdW5vcmRlcmVkLWxpc3QsICNmZWF0dXJlYnVsbGV0c19mZWF0dXJlX2RpdiB1bC5hLXVub3JkZXJlZC1saXN0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbTogJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYnVsbGV0X2xpc3Q6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2kuYS1pY29uLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYWRkLXRvLWNhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXlhZ2FpbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGJ1eV9hZ2FpblxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQ6IGFueSwgcmVjaXBlOiBhbnksIHBhcmVudE5hbWUgPSAnJywgbnRoQ2hpbGQgPSAwKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKCd7fScsIGVsZW1lbnRUZXh0KVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0XG4gIH1cblxuICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gIGxldCBlbGVtZW50TmFtZSA9ICcnXG4gIGlmIChyZWNpcGUubmFtZSkge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fdGV4dCcpIHtcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfVxuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB0ZXh0IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgZWxlbWVudE5hbWUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV9udGhfY2hpbGQnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZVxuICAgIH1cbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKVxuICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YSkge1xuICAgIGNvbnN0IG1ldGFvYmogPSByZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEoZWxlbWVudClcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04uc3RyaW5naWZ5KG1ldGFvYmouZGF0YSlcbiAgICBjb25zdCBtZXRhbmFtZSA9IG1ldGFvYmoubmFtZVxuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnLCBtZXRhbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScsIG1ldGFkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBnZW5lcmF0ZWQ6ICcsIG1ldGFkYXRhLCAnIHdpdGggbmFtZTogJywgbWV0YW5hbWUpXG4gIH1cblxuICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgbGV0IGNsaWNrX2VsZW1lbnQ6IEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKClcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICBsZXQgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuICBwYXRoID0gcGF0aCAhPT0gJy8nID8gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKSA6IHBhdGhcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgIGlmIChyZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9IGVsc2UgaWYgKHJlY2lwZS5tYXRjaF93aXRoX3JlZiAmJiBwYXRoLnN0YXJ0c1dpdGgocmVjaXBlLm1hdGNoICsgJy9yZWY9JykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlY2lwZSgpIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IHByb2Nlc3MgcmVjaXBlJylcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNpcGUgPSBzZWxlY3RSZWNpcGUoKVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSlcbiAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gbmV3Um9vdC5vdXRlckhUTUxcbiAgICAgIHJldHVybiBzaW1wbGlmaWVkSFRNTFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwcm9jZXNzaW5nIHJlY2lwZTonLCBlcnJvcilcbiAgfVxufVxuXG4vLyBSZXBsYWNlIHRoZSBzaW1wbGUgcXVlc3Rpb24gd2l0aCBhIG1vcmUgZGV0YWlsZWQgb25lIGJhc2VkIG9uIGV2ZW50IHR5cGVcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGU6IHN0cmluZywgZGF0YTogYW55KTogc3RyaW5nIHtcbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlICdjbGlja19hJzpcbiAgICBjYXNlICdjbGlja19iJzpcbiAgICBjYXNlICdjbGlja19jJzpcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5zdWJzY3JpYmVfc2F2ZV8ucHVyY2hhc2VfZm9ybS5zZXRfdXBfbm93JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93J1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5Lm9uZV90aW1lX3B1cmNoYXNlXy5wdXJjaGFzZV9mb3JtLmJ1eV9ub3cnIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5wdXJjaGFzZV9mb3JtLmJ1eScgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdidXktbm93LWJ1dHRvbidcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJ1doYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/J1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdzZWFyY2hfcmVzdWx0cy4nKSB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3RfbGlzdC4nKSB8fFxuICAgICAgICAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdhY3RpdmVfaXRlbV9saXN0LicpICYmXG4gICAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnLnByb2R1Y3RfZGV0YWlsJykpIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmNsYXNzTmFtZT8uaW5jbHVkZXMoJ3NjLXByb2R1Y3QtbGluaycpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdZb3UgY2xpY2tlZCBvbiB0aGlzIHByb2R1Y3QuIFdoYXQgY2F1Z2h0IHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIHRoZSBvdGhlciBvcHRpb25zIHlvdSBzYXc/J1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PVxuICAgICAgICAgICdidXlib3guZGVsaXZlcnkub25lX3RpbWVfcHVyY2hhc2VfLnB1cmNoYXNlX2Zvcm0uYWRkX3RvX2NhcnQnIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5wdXJjaGFzZV9mb3JtLmFkZF90b19jYXJ0JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pZCA9PT0gJ2FkZC10by1jYXJ0LWJ1dHRvbicgfHxcbiAgICAgICAgZGF0YS50YXJnZXQubmFtZSA9PT0gJ3N1Ym1pdC5hZGRUb0NhcnQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IG1ha2VzIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQ/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICduYXZfYmFyLnNlYXJjaF9idXR0b24nKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdyZWZpbmVtZW50cy4nKSB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2ZpbHRlcnMuJylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZCB3aXRoIHRoaXMgZmlsdGVyPydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X29wdGlvbnMuJykpIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcHJvZHVjdCBvcHRpb24/J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdZb3UgY2xpY2tlZCBvbiB0aGlzIGVsZW1lbnQuIENvdWxkIHlvdSBzaGFyZSB3aGF0IHlvdSB3ZXJlIHRyeWluZyB0byBkbyBvciBmaW5kPydcbiAgICAgIH1cblxuICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICByZXR1cm4gJ1doYXQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvcj8nXG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2U/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSA/J1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2BcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICByZXR1cm4gYFdoeSBkaWQgeW91IHN3aXRjaCB0byB0aGlzIHRhYj9gXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSZWFzb24ocmVhc29uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFyZWFzb24gfHwgcmVhc29uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gRW1wdHkgaW5wdXRcbiAgfVxuICBpZiAocmVhc29uLnRyaW0oKS5sZW5ndGggPCAyIHx8IHJlYXNvbi5sZW5ndGggPCA1KSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIFRvbyBzaG9ydCB0byBiZSBtZWFuaW5nZnVsLCBhdCBsZWFzdCA1IGNoYXJhY3RlcnMgYW5kIDIgd29yZHNcbiAgfVxuICAvLyBDaGVjayBmb3IgcmVwZXRpdGl2ZSBvciBtZWFuaW5nbGVzcyBpbnB1dCAoZS5nLiwgXCJhYWFcIixcIiEhIVwiKVxuICBjb25zdCBtZWFuaW5nbGVzc1BhdHRlcm5zID0gWy9eKC4pXFwxezMsfSQvLCAvXlteYS16QS1aMC05XSskL11cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIG1lYW5pbmdsZXNzUGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybi50ZXN0KHJlYXNvbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBMaWNlbnNlOiBNSVRcbi8vIEF1dGhvcjogQW50b24gTWVkdmVkZXYgPGFudG9uQG1lZHYuaW8+XG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRvbm1lZHYvZmluZGVyXG5jb25zdCBhY2NlcHRlZEF0dHJOYW1lcyA9IG5ldyBTZXQoWydyb2xlJywgJ25hbWUnLCAnYXJpYS1sYWJlbCcsICdyZWwnLCAnaHJlZiddKTtcbi8qKiBDaGVjayBpZiBhdHRyaWJ1dGUgbmFtZSBhbmQgdmFsdWUgYXJlIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbGV0IG5hbWVJc09rID0gYWNjZXB0ZWRBdHRyTmFtZXMuaGFzKG5hbWUpO1xuICAgIG5hbWVJc09rIHx8PSBuYW1lLnN0YXJ0c1dpdGgoJ2RhdGEtJykgJiYgd29yZExpa2UobmFtZSk7XG4gICAgbGV0IHZhbHVlSXNPayA9IHdvcmRMaWtlKHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCAxMDA7XG4gICAgdmFsdWVJc09rIHx8PSB2YWx1ZS5zdGFydHNXaXRoKCcjJykgJiYgd29yZExpa2UodmFsdWUuc2xpY2UoMSkpO1xuICAgIHJldHVybiBuYW1lSXNPayAmJiB2YWx1ZUlzT2s7XG59XG4vKiogQ2hlY2sgaWYgaWQgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gaWROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgY2xhc3MgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gd29yZExpa2UobmFtZSk7XG59XG4vKiogQ2hlY2sgaWYgdGFnIG5hbWUgaXMgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhZ05hbWUobmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqIEZpbmRzIHVuaXF1ZSBDU1Mgc2VsZWN0b3JzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kZXIoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoaW5wdXQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2VuZXJhdGUgQ1NTIHNlbGVjdG9yIGZvciBub24tZWxlbWVudCBub2RlIHR5cGUuYCk7XG4gICAgfVxuICAgIGlmIChpbnB1dC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0cyA9IHtcbiAgICAgICAgcm9vdDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgaWROYW1lOiBpZE5hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICB0YWdOYW1lOiB0YWdOYW1lLFxuICAgICAgICBhdHRyOiBhdHRyLFxuICAgICAgICB0aW1lb3V0TXM6IDEwMDAsXG4gICAgICAgIHNlZWRNaW5MZW5ndGg6IDMsXG4gICAgICAgIG9wdGltaXplZE1pbkxlbmd0aDogMixcbiAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiBJbmZpbml0eSxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi5kZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IHJvb3REb2N1bWVudCA9IGZpbmRSb290RG9jdW1lbnQoY29uZmlnLnJvb3QsIGRlZmF1bHRzKTtcbiAgICBsZXQgZm91bmRQYXRoO1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2Ygc2VhcmNoKGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zIHx8XG4gICAgICAgICAgICBjb3VudCA+PSBjb25maWcubWF4TnVtYmVyT2ZQYXRoQ2hlY2tzKSB7XG4gICAgICAgICAgICBjb25zdCBmUGF0aCA9IGZhbGxiYWNrKGlucHV0LCByb290RG9jdW1lbnQpO1xuICAgICAgICAgICAgaWYgKCFmUGF0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGltZW91dDogQ2FuJ3QgZmluZCBhIHVuaXF1ZSBzZWxlY3RvciBhZnRlciAke2NvbmZpZy50aW1lb3V0TXN9bXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcihmUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYgKHVuaXF1ZShjYW5kaWRhdGUsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgICAgIGZvdW5kUGF0aCA9IGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmRQYXRoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VsZWN0b3Igd2FzIG5vdCBmb3VuZC5gKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW1pemVkID0gW1xuICAgICAgICAuLi5vcHRpbWl6ZShmb3VuZFBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSxcbiAgICBdO1xuICAgIG9wdGltaXplZC5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgaWYgKG9wdGltaXplZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RvcihvcHRpbWl6ZWRbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3IoZm91bmRQYXRoKTtcbn1cbmZ1bmN0aW9uKiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgICBsZXQgcGF0aHMgPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGxldCBpID0gMDtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aWUoY3VycmVudCwgY29uZmlnKTtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIGxldmVsKSB7XG4gICAgICAgICAgICBub2RlLmxldmVsID0gaTtcbiAgICAgICAgfVxuICAgICAgICBzdGFjay5wdXNoKGxldmVsKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgICAgICBwYXRocy5wdXNoKC4uLmNvbWJpbmF0aW9ucyhzdGFjaykpO1xuICAgICAgICBpZiAoaSA+PSBjb25maWcuc2VlZE1pbkxlbmd0aCkge1xuICAgICAgICAgICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgcGF0aHMpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRocyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdGhzLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICB5aWVsZCBjYW5kaWRhdGU7XG4gICAgfVxufVxuZnVuY3Rpb24gd29yZExpa2UobmFtZSkge1xuICAgIGlmICgvXlthLXpcXC1dezMsfSQvaS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IHdvcmRzID0gbmFtZS5zcGxpdCgvLXxbQS1aXS8pO1xuICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgICAgICAgIGlmICh3b3JkLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC9bXmFlaW91XXs0LH0vaS50ZXN0KHdvcmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiB0aWUoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBbXTtcbiAgICBjb25zdCBlbGVtZW50SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAoZWxlbWVudElkICYmIGNvbmZpZy5pZE5hbWUoZWxlbWVudElkKSkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6ICcjJyArIENTUy5lc2NhcGUoZWxlbWVudElkKSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFtpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5jbGFzc05hbWUobmFtZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6ICcuJyArIENTUy5lc2NhcGUobmFtZSksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBlbGVtZW50LmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIGlmIChjb25maWcuYXR0cihhdHRyLm5hbWUsIGF0dHIudmFsdWUpKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgWyR7Q1NTLmVzY2FwZShhdHRyLm5hbWUpfT1cIiR7Q1NTLmVzY2FwZShhdHRyLnZhbHVlKX1cIl1gLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGNvbmZpZy50YWdOYW1lKHRhZ05hbWUpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogdGFnTmFtZSxcbiAgICAgICAgICAgIHBlbmFsdHk6IDUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpLFxuICAgICAgICAgICAgICAgIHBlbmFsdHk6IDEwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbnRoID0gaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAobnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBudGhDaGlsZCh0YWdOYW1lLCBudGgpLFxuICAgICAgICAgICAgcGVuYWx0eTogNTAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGV2ZWw7XG59XG5mdW5jdGlvbiBzZWxlY3RvcihwYXRoKSB7XG4gICAgbGV0IG5vZGUgPSBwYXRoWzBdO1xuICAgIGxldCBxdWVyeSA9IG5vZGUubmFtZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBwYXRoW2ldLmxldmVsIHx8IDA7XG4gICAgICAgIGlmIChub2RlLmxldmVsID09PSBsZXZlbCAtIDEpIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSA+ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5ID0gYCR7cGF0aFtpXS5uYW1lfSAke3F1ZXJ5fWA7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHBhdGhbaV07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbmZ1bmN0aW9uIHBlbmFsdHkocGF0aCkge1xuICAgIHJldHVybiBwYXRoLm1hcCgobm9kZSkgPT4gbm9kZS5wZW5hbHR5KS5yZWR1Y2UoKGFjYywgaSkgPT4gYWNjICsgaSwgMCk7XG59XG5mdW5jdGlvbiBieVBlbmFsdHkoYSwgYikge1xuICAgIHJldHVybiBwZW5hbHR5KGEpIC0gcGVuYWx0eShiKTtcbn1cbmZ1bmN0aW9uIGluZGV4T2YoaW5wdXQsIHRhZ05hbWUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBpbnB1dC5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBjaGlsZCA9IHBhcmVudC5maXJzdENoaWxkO1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICAgICAodGFnTmFtZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAgICAgY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0YWdOYW1lKSkge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZCA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICAgIHJldHVybiBpO1xufVxuZnVuY3Rpb24gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCkge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3VycmVudCA9IGlucHV0O1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSByb290RG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoY3VycmVudCwgdGFnTmFtZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICBwZW5hbHR5OiBOYU4sXG4gICAgICAgICAgICBsZXZlbDogaSxcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaWYgKHVuaXF1ZShwYXRoLCByb290RG9jdW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG50aENoaWxkKHRhZ05hbWUsIGluZGV4KSB7XG4gICAgaWYgKHRhZ05hbWUgPT09ICdodG1sJykge1xuICAgICAgICByZXR1cm4gJ2h0bWwnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGFnTmFtZX06bnRoLWNoaWxkKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiBudGhPZlR5cGUodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtb2YtdHlwZSgke2luZGV4fSlgO1xufVxuZnVuY3Rpb24qIGNvbWJpbmF0aW9ucyhzdGFjaywgcGF0aCA9IFtdKSB7XG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBzdGFja1swXSkge1xuICAgICAgICAgICAgeWllbGQqIGNvbWJpbmF0aW9ucyhzdGFjay5zbGljZSgxLCBzdGFjay5sZW5ndGgpLCBwYXRoLmNvbmNhdChub2RlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHlpZWxkIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gZmluZFJvb3REb2N1bWVudChyb290Tm9kZSwgZGVmYXVsdHMpIHtcbiAgICBpZiAocm9vdE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICAgIGlmIChyb290Tm9kZSA9PT0gZGVmYXVsdHMucm9vdCkge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGUub3duZXJEb2N1bWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3ROb2RlO1xufVxuZnVuY3Rpb24gdW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkge1xuICAgIGNvbnN0IGNzcyA9IHNlbGVjdG9yKHBhdGgpO1xuICAgIHN3aXRjaCAocm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY3NzKS5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBzZWxlY3QgYW55IG5vZGUgd2l0aCB0aGlzIHNlbGVjdG9yOiAke2Nzc31gKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24qIG9wdGltaXplKHBhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKSB7XG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMiAmJiBwYXRoLmxlbmd0aCA+IGNvbmZpZy5vcHRpbWl6ZWRNaW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWVNcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGlmIChlbGFwc2VkVGltZU1zID4gY29uZmlnLnRpbWVvdXRNcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhdGggPSBbLi4ucGF0aF07XG4gICAgICAgICAgICBuZXdQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGlmICh1bmlxdWUobmV3UGF0aCwgcm9vdERvY3VtZW50KSAmJlxuICAgICAgICAgICAgICAgIHJvb3REb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKG5ld1BhdGgpKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXdQYXRoO1xuICAgICAgICAgICAgICAgIHlpZWxkKiBvcHRpbWl6ZShuZXdQYXRoLCBpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQsIHN0YXJ0VGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGZpbmRQYWdlTWV0YSxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBpc0Zyb21Qb3B1cCxcbiAgc2hvdWxkRXhjbHVkZSxcbiAgZ2VuZXJhdGVIdG1sU25hcHNob3RJZCxcbiAgcHJvY2Vzc1JlY2lwZVxufSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgZmluZGVyIH0gZnJvbSAnQG1lZHYvZmluZGVyJ1xuLy8gZXh0ZW5kIHdpbmRvd1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBtb25rZXlQYXRjaGVkOiBib29sZWFuXG4gICAgc2hvdWxkRXhjbHVkZTogYm9vbGVhblxuICB9XG59XG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIGNvbnN0IG1vbmtleVBhdGNoID0gKCkgPT4ge1xuICAgIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICAgIGNvbnN0IG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyXG5cbiAgICAvLyBBZGQgdGhpcyBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgY29uc3QgVGltZU91dCA9IDMwMDAwXG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICAgIHRhcmdldDogYW55LFxuICAgICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICB1dWlkOiBzdHJpbmdcbiAgICApIHtcbiAgICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoXG4gICAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgZGVwdGg6IG51bWJlciA9IDAsXG4gICAgICAgIGFsbEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgICAgKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAgIC8vIEJhc2UgY2FzZTogaWYgZWxlbWVudCBpcyBudWxsIG9yIHdlJ3ZlIHJlYWNoZWQgbWF4IGRlcHRoXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSAxNSkgcmV0dXJuIGFsbEF0dHJpYnV0ZXNcblxuICAgICAgICAvLyBDaGVjayBhbmQgY29sbGVjdCBhbGwgcmVsZXZhbnQgYXR0cmlidXRlcyBhdCBjdXJyZW50IGxldmVsXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9XG4gICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb250aW51ZSBzZWFyY2hpbmcgdXAgdGhlIHRyZWUsIHBhc3NpbmcgYWxvbmcgY29sbGVjdGVkIGF0dHJpYnV0ZXNcbiAgICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEsIGFsbEF0dHJpYnV0ZXMpXG4gICAgICB9XG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgY29uc29sZS5sb2coJ3NpbXBsaWZpZWRIVE1MJywgc2ltcGxpZmllZEhUTUwpXG4gICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICBjb25zdCBhbGxBdHRyaWJ1dGVzID0gZmluZENsaWNrYWJsZVBhcmVudCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHRpbWVzdGFtcCwgdXVpZClcblxuICAgICAgLy8gQ3JlYXRlIGEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIHRhcmdldFxuICAgICAgY29uc3Qgc2VyaWFsaXplZFRhcmdldCA9IHtcbiAgICAgICAgdGFnTmFtZTogdGFyZ2V0LnRhZ05hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgaWQ6IHRhcmdldC5pZCxcbiAgICAgICAgaW5uZXJUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgICAgb3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcmtlZERvYyA9IGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICB0YXJnZXQ6IHNlcmlhbGl6ZWRUYXJnZXQsIC8vIFJlcGxhY2UgZGlyZWN0IERPTSBlbGVtZW50IHdpdGggc2VyaWFsaXphYmxlIG9iamVjdFxuICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciB8fCAnJyxcbiAgICAgICAgJ2RhdGEtc2VtYW50aWMtaWQnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddIHx8ICcnLFxuICAgICAgICAnZWxlbWVudC1tZXRhLW5hbWUnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gfHwgJycsXG4gICAgICAgICdlbGVtZW50LW1ldGEtZGF0YSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSB8fCAnJyxcbiAgICAgICAgJ3BhZ2UtbWV0YSc6IHBhZ2VNZXRhIHx8ICcnLFxuICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgaHRtbENvbnRlbnQ6IG1hcmtlZERvYy5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUxcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiB0YXJnZXQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGRhdGFbJ2lucHV0LXRlcm1zJ10gPSB0YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQuaWQgPT09ICduYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nICYmIHRhcmdldC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC10ZXJtcyddID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJ0d290YWJzZWFyY2h0ZXh0Ym94XCJdJyk/LnZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cbiAgICAvLyB0b2RvOiBwYXRjaCByZW1vdmVFdmVudExpc3RlbmVyIHN1cHBvcnQgd3JhcFxuICAgIC8vIGNvbnN0IGJsb2NrU2lnbmFscyA9IHt9XG4gICAgLy8gY29uc3QgZmluaXNoU2lnbmFscyA9IHt9XG4gICAgY29uc3Qgd2FpdF9mb3JfYWJvcnQgPSAoc2lnbmFsKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAvLyBJZiBhbHJlYWR5IGFib3J0ZWQsIHJlc29sdmUgaW1tZWRpYXRlbHlcbiAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UsIGxpc3RlbiBmb3IgdGhlIGFib3J0IGV2ZW50XG4gICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gcmVzb2x2ZSh2b2lkIDApLCB7IG9uY2U6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYXNEZWZhdWx0QWN0aW9uID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgYW5jaG9yID0gZWxlbWVudC5jbG9zZXN0KCdhJylcbiAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIC8vIGlmIGlkIGlzIG5hdi1zZWFyY2gtc3VibWl0LWJ1dHRvblxuICAgICAgLy8gaWYgKGVsZW1lbnQuaWQgPT09ICduYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nKSB7XG4gICAgICAvLyAgIHJldHVybiB0cnVlXG4gICAgICAvLyB9XG5cbiAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvLyBNb25rZXkgcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lclxuICAgIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2tpcF9tb25rZXlfcGF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfVxuICAgICAgY29uc3QgY2FsbE9yaWdpbmFsTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09ICdjbGljaycgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zaG91bGRFeGNsdWRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGV4Y2x1ZGUnKVxuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKHRhcmdldCkpIHtcbiAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2gnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgaWYgKGV2ZW50LmJsb2NrX3NpZ25hbCkge1xuICAgICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMucHVzaChjb250cm9sbGVyKVxuICAgICAgICAgICAgaWYgKGV2ZW50LmJsb2NrX3NpZ25hbCkge1xuICAgICAgICAgICAgICBjb25zdCBzaWduYWwgPSBldmVudC5ibG9ja19zaWduYWwuc2lnbmFsXG4gICAgICAgICAgICAgIGF3YWl0IHdhaXRfZm9yX2Fib3J0KHNpZ25hbClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIHVuYmxvY2tpbmcnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIG5vIGJsb2NrIHNpZ25hbCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzID0gW11cblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBkZXRlY3RlZCBvbjonLCBldmVudC50YXJnZXQpXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICAgICAgLy8gY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIG9uIGNhbmNlbGFibGUnKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSBmYWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIHBhdGNoIGV2ZW50JywgZXZlbnQpXG4gICAgICAgICAgICAvLyBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWZcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAvLyBsb2cgYmVmb3JlIGFuZCBhZnRlciB0aW1lXG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZmluZGVyKGV2ZW50LnRhcmdldCwge1xuICAgICAgICAgICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAgICdjbGlja19hJyxcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgICAgLy8gYWxlcnQoXCIzXCIpXG4gICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhaXRpbmcgZm9yIHNjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uJylcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NjcmVlbnNob3RDb21wbGV0ZSwgaW50ZXJhY3Rpb25Db21wbGV0ZV0pXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbiBjb21wbGV0ZScpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29tcGxldGVkXCIpXG4gICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiMlwiKVxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgICAgLy8gcmUtZGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcilcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdGVuZXIpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwuYWJvcnQoKVxuICAgICAgICAgICAgICAvLyBhYm9ydCBhbGwgZmluaXNoU2lnbmFsc1xuICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscy5tYXAoKGNvbnRyb2xsZXIpID0+IHdhaXRfZm9yX2Fib3J0KGNvbnRyb2xsZXIuc2lnbmFsKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQsIDInKVxuICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwcm9taXNlIHRvIHdhaXQgZm9yIHNjcmVlbnNob3QgY29tcGxldGlvblxuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMClcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICAgICAnY2xpY2tfYicsXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgICBmaW5kZXIoZXZlbnQudGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICB9LCBUaW1lT3V0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgIC8vIGF3YWl0IEFTc2NyZWVuc2hvdENvbXBsZXRlXG4gICAgICAgICAgICAvLyBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2FpdGluZyBmb3Igc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24nKVxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NjcmVlbnNob3RDb21wbGV0ZSwgaW50ZXJhY3Rpb25Db21wbGV0ZV0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24gY29tcGxldGUnKVxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBldmVuIGlmIHNjcmVlbnNob3QgZmFpbHNcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcgb3JpZ2luYWwgbGlzdGVuZXInKVxuICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgIC8vIGFib3J0IGFsbCBmaW5pc2hTaWduYWxzXG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBpZiBib29sZWFuLCBzZXQgcGFzc2l2ZSB0byB0cnVlXG4gICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIHVzZUNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJylcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjbGlja3Mgb24gPGE+IHRhZ3NcbiAgICBmdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBhc3luYyBmdW5jdGlvbiAoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBpZiAod2luZG93LnNob3VsZEV4Y2x1ZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgZXhjbHVkZScpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoIGInKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgPGE+IHRhZyBpbiBjYXNlIG9mIG5lc3RlZCBlbGVtZW50cyBpbnNpZGUgdGhlIDxhPlxuICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcblxuICAgICAgICAgIGlmIChoYXNEZWZhdWx0QWN0aW9uKGV2ZW50KSkge1xuICAgICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIEFuY2hvciBjbGljayBldmVudCBoYW5kZXIgZnJvbSBvdXIgb3duIGxpc3RlbmVyJylcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBhbHJlYWR5IGJlIGxvZ2dlZCBpbiBvdGhlciBldmVudCBsaXN0ZW5lcnMnKVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMgPSBbXVxuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICAgIC8vIGlmICghYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocnN0YXJ0UGVyaW9kaWNVcGxvYWRlZlxuICAgICAgICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAvLyDnm5HlkKzmiKrlm77lrozmiJDnmoTmtojmga9cbiAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyDmt7vliqDotoXml7blpITnkIZcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpIC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAvLyDlj5HpgIHmiKrlm77or7fmsYJcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wLCB1dWlkOiB1dWlkIH0sXG4gICAgICAgICAgICAgICAgJyonXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgICAnY2xpY2tfYycsXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBmaW5kZXIodGFyZ2V0LCB7XG4gICAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEsIHV1aWQ6IHV1aWQgfSwgJyonKVxuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8g562J5b6F5oiq5Zu+5a6M5oiQXG4gICAgICAgICAgICAgIGF3YWl0IHNjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgICBhd2FpdCBpbnRlcmFjdGlvbkNvbXBsZXRlXG5cbiAgICAgICAgICAgICAgLy8g5oiq5Zu+56Gu6K6k5a6M5oiQ5ZCO5YaN6Lez6L2sXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpXG4gICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlLWRpc3BhdGNoIHRoZSBldmVudCBpZiBpdHMgbm90IHByZXZlbnRlZCwgMScpXG4gICAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSwgLy8gRW5zdXJlcyB0aGUgZGVmYXVsdCBiZWhhdmlvciBvY2N1cnNcbiAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWVcblxuICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChuZXdFdmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHVzZUNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgc2tpcF9tb25rZXlfcGF0Y2g6IHRydWUsXG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgKSAvLyBVc2UgY2FwdHVyZSBwaGFzZSB0byBpbnRlcmNlcHQgdGhlIGV2ZW50IGVhcmxpZXJcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBoYW5kbGUgPGE+IHRhZyBjbGlja3NcbiAgICBoYW5kbGVBbmNob3JDbGlja3MoKVxuICB9XG4gIGlmICghd2luZG93Lm1vbmtleVBhdGNoZWQpIHtcbiAgICBtb25rZXlQYXRjaCgpXG4gIH1cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnRE9NQ29udGVudExvYWRlZCcsXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKVxuICAgICAgc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGRFeGNsdWRlJywgcmVzdWx0KVxuICAgICAgICB3aW5kb3cuc2hvdWxkRXhjbHVkZSA9IHJlc3VsdFxuICAgICAgfSlcbiAgICB9LFxuICAgIHtcbiAgICAgIG9uY2U6IHRydWVcbiAgICB9XG4gIClcbn1cblxuLy8gaWdub3JlIHVzZXIgaWQgZm9yIG5vdywgYmVjYXVzZSBmdWxsIGNoZWNrIHdvdWxkIGJlIGFzeW5jLlxuc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgd29yaygpXG4gIH1cbn0pXG4iXSwibmFtZXMiOlsicG9wdXBfcHJvYmFiaWxpdHkiLCJwb3B1cF9zY3JvbGxfcHJvYmFiaWxpdHkiLCJwb3B1cF9jbGlja19wcm9iYWJpbGl0eSIsInBvcHVwX25hdmlnYXRpb25fcHJvYmFiaWxpdHkiLCJwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSIsImZvbGRlcl9uYW1lIiwiemlwIiwidXBsb2FkX3VybCIsImJhc2VfdXJsIiwiZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkIiwidXJsX2luY2x1ZGVzIiwiaW50ZXJhY3Rpb25fc3RhdHVzX3VybCIsImNvbmNhdCIsImNoZWNrX3VzZXJfaWRfdXJsIiwiZmlsdGVyX3VybCIsInNjcm9sbF90aHJlc2hvbGQiLCJuYXYiLCJzZWxlY3RvciIsIm5hbWUiLCJjaGlsZHJlbiIsImdlbmVyYXRlX21ldGFkYXRhIiwiZW0iLCJ0ZXJtIiwidmFsdWUiLCJkYXRhIiwiY2xpY2thYmxlIiwidGV4dF9zZWxlY3RvciIsImFkZF90ZXh0IiwicmVmaW5lbWVudF9vcHRpb24iLCJkaXJlY3RfY2hpbGQiLCJ0ZXh0X2pzIiwiZWxlbWVudCIsInRleHQiLCJhQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwidHJpbSIsImhhc0F0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwiX2VsZW1lbnQkY2xvc2VzdCIsIl9uYW1lRW0kaW5uZXJUZXh0IiwiX3RleHQyIiwibmFtZUVtIiwiY2xvc2VzdCIsInBhcmVudEVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInVybCIsIl90ZXh0IiwidGl0bGUiLCJzZWxlY3RlZCIsIl9lbGVtZW50JGNsb3Nlc3QyIiwiX25hbWVFbSRpbm5lclRleHQyIiwiX3RleHQ0IiwiX3RleHQzIiwicHJvZHVjdF9mYWN0cyIsInByb2R1Y3RfZGVsaXZlcnkiLCJxdWFudGl0eV9zZWxlY3RvciIsImRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciIsInNldF91cF9ub3dfYnV0dG9uIiwiYWRkX3RvX2NhcnRfYnV0dG9uIiwiYnV5X25vd19idXR0b24iLCJidXlfYm94X3dpdGhfYWNjb3JkaW9uIiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCIsImNhcnQiLCJ0ZXh0X2Zvcm1hdCIsIl9lbSRwYXJlbnRFbGVtZW50IiwiX3ByaWNlRW0kaW5uZXJUZXh0IiwiYXNpbiIsInByaWNlRW0iLCJwcmljZSIsInRpdGxlRW0iLCJ1cmxFbSIsImRlbGl2ZXJ5RW0iLCJkZWxpdmVyeSIsInF1YW50aXR5RW0iLCJxdWFudGl0eSIsInNlbGVjdGVkRW0iLCJidXlfYWdhaW4iLCJfZW0kY2xvc2VzdCIsIl9uYW1lRW0kaW5uZXJUZXh0MyIsImlucHV0IiwiY2hlY2tlZCIsIl9wcmljZUVtJGlubmVyVGV4dDIiLCJhc2luRW0iLCJfZW0kcGFyZW50RWxlbWVudDIiLCJfcHJpY2VFbSRpbm5lclRleHQzIiwiX2VtJHBhcmVudEVsZW1lbnQzIiwiX2VtJHBhcmVudEVsZW1lbnQ0IiwiX2VtJHBhcmVudEVsZW1lbnQ1IiwiX2FzaW5FbTIiLCJfcHJpY2VFbSRpbm5lclRleHQ0IiwiX2VtJHBhcmVudEVsZW1lbnQ2IiwiX2VtJHBhcmVudEVsZW1lbnQ3IiwiX2FzaW5FbTMiLCJ1c2Vfcm9vdCIsIl9lbSRjbG9zZXN0MiIsIl9wYXJlbnRUaXRsZUVtJGlubmVyVCIsIl9wcmljZUVtJGlubmVyVGV4dDUiLCJwYXJlbnRUaXRsZUVtIiwicGFyZW50VGl0bGUiLCJyZWNpcGVzIiwibWF0Y2giLCJtYXRjaF9tZXRob2QiLCJfZW0kaW5uZXJUZXh0IiwiX2VtJGlubmVyVGV4dDIiLCJfZW0kaW5uZXJUZXh0MyIsInJhbmdlIiwia2VlcF9hdHRyIiwib3ZlcnJpZGVfYXR0ciIsInN0ZXBfdmFsdWVzIiwiZm9ybUVtIiwicHJvcCIsInN0ZXBzIiwiSlNPTiIsInBhcnNlIiwic3RlcExhYmVscyIsImN1cnJlbnRfdmFsdWUiLCJOdW1iZXIiLCJwYXJzZUludCIsImluc2VydF9zcGxpdF9tYXJrZXIiLCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IiwiY2xpY2tfc2VsZWN0b3IiLCJtYXRjaF90ZXh0IiwiX2VtJGlubmVyVGV4dDQiLCJfZW0kaW5uZXJUZXh0NSIsIl9lbSRxdWVyeVNlbGVjdG9yIiwiX2VtJHF1ZXJ5U2VsZWN0b3IyIiwibGFiZWwiLCJpbm5lckhUTUwiLCJ1bmRlZmluZWQiLCJfZW0kcXVlcnlTZWxlY3RvcjMiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJvcHRpb24iLCJlcnIiLCJmIiwiaW1nQ2hpbGQiLCJhbHQiLCJfZW0kcXVlcnlTZWxlY3RvcjQiLCJfZW0kcXVlcnlTZWxlY3RvcjUiLCJfZW0kcXVlcnlTZWxlY3RvcjYiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidGV4dEVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2VtJHF1ZXJ5U2VsZWN0b3I3IiwiX2VtJHF1ZXJ5U2VsZWN0b3I4IiwiX2VtJGlubmVyVGV4dDYiLCJidWxsZXRfbGlzdCIsIm1hdGNoX3dpdGhfcmVmIiwidGVybWluYXRlIiwiYXJndW1lbnRzIiwidGVybWluYXRlX2NhbGxiYWNrIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJwcm9jZXNzRWxlbWVudCIsInJlY2lwZSIsInBhcmVudE5hbWUiLCJudGhDaGlsZCIsInRhZ05hbWUiLCJ0YWdfbmFtZSIsImVuZHNXaXRoIiwibmV3RWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnRUZXh0IiwidGV4dEVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImVsZW1lbnROYW1lIiwidG9TdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJtZXRhb2JqIiwibWV0YWRhdGEiLCJzdHJpbmdpZnkiLCJtZXRhbmFtZSIsImNsaWNrX2VsZW1lbnQiLCJ3aW5kb3ciLCJjbGlja2FibGVfcmVjaXBlcyIsImlucHV0VHlwZSIsImluY2x1ZGVzIiwiaW5wdXRfcmVjaXBlcyIsIl9lbGVtZW50JHBhcmVudEVsZW1lbiIsInNlbGVjdElkIiwibmFtZUlkIiwidGFnIiwibmV3VGFnIiwiYXBwZW5kQ2hpbGQiLCJfcmVmIiwiX2NhbGxlZSIsIm9wdGlvblZhbHVlIiwib3B0aW9uTmFtZSIsIm5ld09wdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJfeCIsImF0dHJzVG9Db3B5IiwiYXR0ciIsImtleSIsIl9sb29wIiwiY2hpbGRSZWNpcGUiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiaW5kZXgiLCJjaGlsZE5vZGUiLCJldmVyeSIsInNwbGl0TWFya2VyIiwiZW1wdHlfbWVzc2FnZSIsImVtcHR5VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIl9hcnJheUxpa2VUb0FycmF5IiwiZnJvbSIsInRlc3QiLCJpc0Zyb21Qb3B1cCIsInVwZGF0ZV9pY29uIiwiX3VwZGF0ZV9pY29uIiwic2hvdWxkRXhjbHVkZSIsImNocm9tZSIsImFjdGlvbiIsInNldEljb24iLCJwYXRoIiwiZmluZFBhZ2VNZXRhIiwiYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEiLCJncm91cGVkUmVzdWx0IiwibWV0YU5hbWUiLCJtZXRhRGF0YSIsImdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCIsImRvY3VtZW50Q29weSIsImNsb25lTm9kZSIsImFsbEVsZW1lbnRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2xpY2thYmxlTWFya2VycyIsInJlbW92ZUF0dHJpYnV0ZSIsIl94MiIsIl9zaG91bGRFeGNsdWRlIiwiX2NhbGxlZTIiLCJpZ25vcmVVc2VySWQiLCJyZXN1bHQiLCJ1c2VySWQiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc3RNZXNzYWdlIiwic29tZSIsImluY2x1ZGVVcmwiLCJleGNsdWRlVXJsIiwiZ2VuZXJhdGVIdG1sU25hcHNob3RJZCIsInRpbWVzdGFtcCIsInV1aWQiLCJsb2NhdGlvbiIsImhyZWYiLCJoYXNoQ29kZSIsInN0ciIsImhhc2giLCJjaGFyQ29kZUF0IiwiY2hlY2tfdXNlcl9pZCIsIl94MyIsIl9jaGVja191c2VyX2lkIiwiX2NhbGxlZTMiLCJ1c2VyX2lkIiwicmVzcG9uc2UiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJmZXRjaCIsImpzb24iLCJvayIsInQwIiwibWVzc2FnZSIsInNlbGVjdFJlY2lwZSIsInBhcnNlZFVybCIsIlVSTCIsInBhdGhuYW1lIiwibWF0Y2hNZXRob2QiLCJfZWxlbWVudCR0ZXh0Q29udGVudCQiLCJfZWxlbWVudCR0ZXh0Q29udGVudCIsImhhc01hdGNoIiwiZXJyb3IiLCJzdGFydHNXaXRoIiwicHJvY2Vzc1JlY2lwZSIsInJvb3RFbGVtZW50IiwibmV3Um9vdCIsInNpbXBsaWZpZWRIVE1MIiwib3V0ZXJIVE1MIiwiZ2V0Q3VzdG9tUXVlc3Rpb24iLCJldmVudFR5cGUiLCJfZGF0YSRkYXRhU2VtYW50aWNJIiwiX2RhdGEkZGF0YVNlbWFudGljSTIiLCJfZGF0YSRkYXRhU2VtYW50aWNJMyIsIl9kYXRhJGRhdGFTZW1hbnRpY0k0IiwiX2RhdGEkdGFyZ2V0JGNsYXNzTmFtIiwiX2RhdGEkZGF0YVNlbWFudGljSTUiLCJfZGF0YSRkYXRhU2VtYW50aWNJNiIsIl9kYXRhJGRhdGFTZW1hbnRpY0k3IiwidGFyZ2V0IiwiaWQiLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uVHlwZSIsImlzVmFsaWRSZWFzb24iLCJyZWFzb24iLCJtZWFuaW5nbGVzc1BhdHRlcm5zIiwiX2kiLCJfbWVhbmluZ2xlc3NQYXR0ZXJucyIsInBhdHRlcm4iLCJ2NCIsInV1aWR2NCIsImZpbmRlciIsIndvcmsiLCJtb25rZXlQYXRjaCIsIm1vbmtleVBhdGNoZWQiLCJvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudFRhcmdldCIsIlRpbWVPdXQiLCJjYXB0dXJlSW50ZXJhY3Rpb24iLCJmaW5kQ2xpY2thYmxlUGFyZW50IiwiZGVwdGgiLCJhbGxBdHRyaWJ1dGVzIiwicGFnZU1ldGEiLCJjdXJyZW50U25hcHNob3RJZCIsInNlcmlhbGl6ZWRUYXJnZXQiLCJtYXJrZWREb2MiLCJodG1sU25hcHNob3RJZCIsImh0bWxDb250ZW50IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0Iiwid2FpdF9mb3JfYWJvcnQiLCJzaWduYWwiLCJyZWplY3QiLCJhYm9ydGVkIiwib25jZSIsImhhc0RlZmF1bHRBY3Rpb24iLCJhbmNob3IiLCJsaXN0ZW5lciIsIl90aGlzIiwic2tpcF9tb25rZXlfcGF0Y2giLCJjYWxsT3JpZ2luYWxMaXN0ZW5lciIsImhhbmRsZUV2ZW50Iiwid3JhcHBlZExpc3RlbmVyIiwiY29udHJvbGxlciIsIl91dWlkIiwic2NyZWVuc2hvdENvbXBsZXRlIiwiaW50ZXJhY3Rpb25Db21wbGV0ZSIsIm5ld0V2ZW50IiwiX3NjcmVlbnNob3RDb21wbGV0ZSIsIl9kYXRhIiwiX2ludGVyYWN0aW9uQ29tcGxldGUiLCJqdXN0X2Zvcl9kZWZhdWx0IiwiYmxvY2tfc2lnbmFsIiwiQWJvcnRDb250cm9sbGVyIiwiZmluaXNoX3NpZ25hbHMiLCJhYm9ydCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInByZXZlbnREZWZhdWx0IiwibXlfZGVmYXVsdF9wcmV2ZW50ZWQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImhhbmRsZU1lc3NhZ2UxIiwibWF4TnVtYmVyT2ZQYXRoQ2hlY2tzIiwiYWxsIiwibWFwIiwiTW91c2VFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY29tcG9zZWQiLCJ2aWV3IiwiZGV0YWlsIiwic2NyZWVuWCIsInNjcmVlblkiLCJjbGllbnRYIiwiY2xpZW50WSIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJidXR0b24iLCJidXR0b25zIiwicmVsYXRlZFRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJ0MSIsInVzZUNhcHR1cmUiLCJwYXNzaXZlIiwiaGFuZGxlQW5jaG9yQ2xpY2tzIiwiX3JlZjIiLCJub3ciLCJzdG9wUHJvcGFnYXRpb24iLCJjYXB0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==
