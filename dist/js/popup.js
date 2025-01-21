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
        } else if (recipe.match_with_ref && (path.startsWith(recipe.match + '/ref=') || path.startsWith(recipe.match + 'ref='))) {
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
      return 'You scrolled on this page. What information are you looking for?';
    case 'input':
      return 'You typed in this input field. What are you searching for?';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMVxuZXhwb3J0IGNvbnN0IHBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5ID0gMC4yXG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJ1xuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgLy8gICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAvLyAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAndWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSknLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICBsZXQgdXJsID0gJydcblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICB9XG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uY2xvc2VzdCgndWwnKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gIG5hbWU6ICdkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3InLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbWljcm8gPiBzcGFuJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3Qgc2V0X3VwX25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LXNldC11cC1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBhZGRfdG9fY2FydF9idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGxhYmVsJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWltYWdlLXdyYXBwZXIgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRFbT8uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGxcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSwgc2VsZWN0ZWQgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGJ1eV9hZ2FpbiA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uOmhhcyhkaXYuZmlsdGVyLWNvbnRhaW5lciknLFxuICAgIG5hbWU6ICdmaWx0ZXJzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5maWx0ZXItY29udGFpbmVyJyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbS5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW1cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2LmZpbHRlci1jb250YWluZXInKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI2ZpbHRlci1jb250YWluZXItaGVhZGVyJylcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmFsbS1ncmlkLWRlc2t0b3AtZ3JpZC1jb250YWluZXInLFxuICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImdyaWRDZWxsXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZ3JpZEVsZW1lbnQnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlZF9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2luZm8nXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3Blbl9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnT3BlbiBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm0gc3Bhbi5hLWJ1dHRvbi1pbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2V4cGFuZGVkSW1hZ2UnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZV9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gZGl2W2lkXj0naW5mbyddXCIpXG4gICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdIHNwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgZGVsaXZlcnkgfSB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlYXR1cmVkXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBkaXZbaWRePVwiZGV0YWlsQ29udGVudFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0YWlsZWRfY29udGVudCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2NsYXNzKj0nbXVsdGlPZmZlclBpbGxDb250YWluZXInXSBhXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ10sIGRpdltjbGFzcyo9J2FzaW5EZXRhaWxJbmZvQ29sdW1ucyddOmhhcyhpbnB1dFtuYW1lPSdzdWJtaXQuYWRkVG9DYXJ0J11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxBY3Rpb25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImJ1eS1ub3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBpZiAoYXNpbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNpbkVtID0gZW0ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBsZXQgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nU05TJ10sIGRpdltjbGFzcyo9J3Nuc1Vwc2VsbEJsb2NrQ29udGFpbmVyJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzbnNCdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvblwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0X3VwX3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGFzaW5FbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBpZiAoYXNpbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLW1peC1vcGVyYXRpb25zPVwic25zTW9kYWxIYW5kbGVyXCJdJylcbiAgICAgICAgICAgICAgICAgICAgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdkZXRhaWwtdmlldy1zaW1pbGFyLWl0ZW1zJ11cIixcbiAgICAgICAgICAgIG5hbWU6ICdzaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtaW1hZ2UtY29udGFpbmVyOmhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIGlucHV0W25hbWVePVwiYXRmY1NoaW1cIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiQWRkIHRvIENhcnQuIENsaWNrIHRvIGNoYW5nZSBxdWFudGl0eVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2W2lkXj1cImZlYXR1cmVkXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gYVtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGUgPSBwYXJlbnRUaXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkZWxpZ2h0RmFjZW91dFwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFRpdGxlICsgJy5zaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RvcFJlZmluZW1lbnRzXFxcXC8wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9wX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmVjZW50bHkgdXNlZCBmaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcmljZVJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAvLyAyIGNhc2VzOiBzZWxlY3Rpb24gLyBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF8zNi10aXRsZSwgZGl2LnNmLXJlZmluZW1lbnQtaGVhZGluZyBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci5hLXBvcG92ZXItaGVhZGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT0ncy1wcm9kdWN0LWltYWdlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3NwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgyKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6aGFzKCNzbnMtYmFzZS1wcmljZSkgI3Nucy1iYXNlLXByaWNlIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6bm90KDpoYXMoI3Nucy1iYXNlLXByaWNlKSkgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLy8gaGFuZGxlIG5ldyB0d2lzdGVyc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3Rlci1wbHVzLWlubGluZS10d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItcm93JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBzcGFuOm5vdCguYW9rLWhpZGRlbikgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLmEtdW5vcmRlcmVkLWxpc3QsICNmZWF0dXJlYnVsbGV0c19mZWF0dXJlX2RpdiB1bC5hLXVub3JkZXJlZC1saXN0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbTogJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYnVsbGV0X2xpc3Q6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2kuYS1pY29uLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYWRkLXRvLWNhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXlhZ2FpbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGJ1eV9hZ2FpblxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQ6IGFueSwgcmVjaXBlOiBhbnksIHBhcmVudE5hbWUgPSAnJywgbnRoQ2hpbGQgPSAwKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKCd7fScsIGVsZW1lbnRUZXh0KVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0XG4gIH1cblxuICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gIGxldCBlbGVtZW50TmFtZSA9ICcnXG4gIGlmIChyZWNpcGUubmFtZSkge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fdGV4dCcpIHtcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfVxuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB0ZXh0IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgZWxlbWVudE5hbWUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV9udGhfY2hpbGQnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZVxuICAgIH1cbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKVxuICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YSkge1xuICAgIGNvbnN0IG1ldGFvYmogPSByZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEoZWxlbWVudClcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04uc3RyaW5naWZ5KG1ldGFvYmouZGF0YSlcbiAgICBjb25zdCBtZXRhbmFtZSA9IG1ldGFvYmoubmFtZVxuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnLCBtZXRhbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScsIG1ldGFkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBnZW5lcmF0ZWQ6ICcsIG1ldGFkYXRhLCAnIHdpdGggbmFtZTogJywgbWV0YW5hbWUpXG4gIH1cblxuICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgbGV0IGNsaWNrX2VsZW1lbnQ6IEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKClcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICBsZXQgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuICBwYXRoID0gcGF0aCAhPT0gJy8nID8gcGF0aC5yZXBsYWNlKC9cXC8rJC8sICcnKSA6IHBhdGhcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgIGlmIChyZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICByZWNpcGUubWF0Y2hfd2l0aF9yZWYgJiZcbiAgICAgICAgKHBhdGguc3RhcnRzV2l0aChyZWNpcGUubWF0Y2ggKyAnL3JlZj0nKSB8fCBwYXRoLnN0YXJ0c1dpdGgocmVjaXBlLm1hdGNoICsgJ3JlZj0nKSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVjaXBlKCkge1xuICBjb25zb2xlLmxvZygnc3RhcnQgcHJvY2VzcyByZWNpcGUnKVxuICB0cnkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHNlbGVjdFJlY2lwZSgpXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3RvcilcbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IG5ld1Jvb3QgPSBwcm9jZXNzRWxlbWVudChyb290RWxlbWVudCwgcmVjaXBlKVxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBuZXdSb290Lm91dGVySFRNTFxuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRIVE1MXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgcmVjaXBlOicsIGVycm9yKVxuICB9XG59XG5cbi8vIFJlcGxhY2UgdGhlIHNpbXBsZSBxdWVzdGlvbiB3aXRoIGEgbW9yZSBkZXRhaWxlZCBvbmUgYmFzZWQgb24gZXZlbnQgdHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKGV2ZW50VHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBzdHJpbmcge1xuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgJ2NsaWNrX2EnOlxuICAgIGNhc2UgJ2NsaWNrX2InOlxuICAgIGNhc2UgJ2NsaWNrX2MnOlxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnN1YnNjcmliZV9zYXZlXy5wdXJjaGFzZV9mb3JtLnNldF91cF9ub3cnIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1NldCBVcCBOb3cnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IG1ha2VzIHlvdSBjaG9vc2UgdG8gc3Vic2NyaWJlIHRvIHRoaXMgcHJvZHVjdD8nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkub25lX3RpbWVfcHVyY2hhc2VfLnB1cmNoYXNlX2Zvcm0uYnV5X25vdycgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnB1cmNoYXNlX2Zvcm0uYnV5JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pZCA9PT0gJ2J1eS1ub3ctYnV0dG9uJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD8nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3NlYXJjaF9yZXN1bHRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9saXN0LicpIHx8XG4gICAgICAgIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2FjdGl2ZV9pdGVtX2xpc3QuJykgJiZcbiAgICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCcucHJvZHVjdF9kZXRhaWwnKSkgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJ1lvdSBjbGlja2VkIG9uIHRoaXMgcHJvZHVjdC4gV2hhdCBjYXVnaHQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gdGhlIG90aGVyIG9wdGlvbnMgeW91IHNhdz8nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09XG4gICAgICAgICAgJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5hZGRfdG9fY2FydCcgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnB1cmNoYXNlX2Zvcm0uYWRkX3RvX2NhcnQnIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5uYW1lID09PSAnc3VibWl0LmFkZFRvQ2FydCdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJ1doYXQgbWFrZXMgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydD8nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ25hdl9iYXIuc2VhcmNoX2J1dHRvbicpIHtcbiAgICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3JlZmluZW1lbnRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnZmlsdGVycy4nKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kIHdpdGggdGhpcyBmaWx0ZXI/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3Rfb3B0aW9ucy4nKSkge1xuICAgICAgICByZXR1cm4gJ1doYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwcm9kdWN0IG9wdGlvbj8nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ1lvdSBjbGlja2VkIG9uIHRoaXMgZWxlbWVudC4gQ291bGQgeW91IHNoYXJlIHdoYXQgeW91IHdlcmUgdHJ5aW5nIHRvIGRvIG9yIGZpbmQ/J1xuICAgICAgfVxuXG4gICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgIHJldHVybiAnWW91IHNjcm9sbGVkIG9uIHRoaXMgcGFnZS4gV2hhdCBpbmZvcm1hdGlvbiBhcmUgeW91IGxvb2tpbmcgZm9yPydcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gJ1lvdSB0eXBlZCBpbiB0aGlzIGlucHV0IGZpZWxkLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2U/J1xuICAgICAgfSBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gcmV0dXJuIHRvIHRoaXMgcGFnZSA/J1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2BcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICByZXR1cm4gYFdoeSBkaWQgeW91IHN3aXRjaCB0byB0aGlzIHRhYj9gXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSZWFzb24ocmVhc29uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFyZWFzb24gfHwgcmVhc29uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gRW1wdHkgaW5wdXRcbiAgfVxuICBpZiAocmVhc29uLnRyaW0oKS5sZW5ndGggPCAyIHx8IHJlYXNvbi5sZW5ndGggPCA1KSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIFRvbyBzaG9ydCB0byBiZSBtZWFuaW5nZnVsLCBhdCBsZWFzdCA1IGNoYXJhY3RlcnMgYW5kIDIgd29yZHNcbiAgfVxuICAvLyBDaGVjayBmb3IgcmVwZXRpdGl2ZSBvciBtZWFuaW5nbGVzcyBpbnB1dCAoZS5nLiwgXCJhYWFcIixcIiEhIVwiKVxuICBjb25zdCBtZWFuaW5nbGVzc1BhdHRlcm5zID0gWy9eKC4pXFwxezMsfSQvLCAvXlteYS16QS1aMC05XSskL11cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIG1lYW5pbmdsZXNzUGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybi50ZXN0KHJlYXNvbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCwgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgY2hlY2tfdXNlcl9pZCwgc2hvdWxkRXhjbHVkZSB9IGZyb20gJy4vdXRpbHMvdXRpbCdcbmNvbnN0IGRvd25sb2FkRGF0YUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZERhdGEnKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuY29uc3Qgb3V0cHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpIGFzIEhUTUxEaXZFbGVtZW50XG5jb25zdCBjbGVhckNhY2hlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQ2FjaGUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuY29uc3QgdXNlcklkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJykgYXMgSFRNTElucHV0RWxlbWVudFxuY29uc3QgcmVjb3JkaW5nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29yZGluZycpIGFzIEhUTUxEaXZFbGVtZW50XG5jb25zdCB1c2VyX2lkX3ZhbGlkX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX2lkX3ZhbGlkJykgYXMgSFRNTERpdkVsZW1lbnRcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGZldGNoIGFuZCBkaXNwbGF5IGludGVyYWN0aW9uIHN0YXRzXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyh1c2VySWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7aW50ZXJhY3Rpb25fc3RhdHVzX3VybH0/dXNlcl9pZD0ke3VzZXJJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYFRvdGFsIHVwbG9hZHM6ICR7ZGF0YS5hbGxfdGltZX1cXG5Ub2RheSdzIHVwbG9hZHM6ICR7ZGF0YS5vbl9kYXRlfWBcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEZhaWxlZCB0byBmZXRjaCBzdGF0czogJHtkYXRhLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YFxuICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cGRhdGVSZWNvcmRpbmdTdGF0dXMgPSAoKSA9PiB7XG4gICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdnZXRSZWNvcmRpbmdTdGF0dXMnIH0sIChyZXNwb25zZSkgPT4ge1xuXG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgYXN5bmMgKHRhYnMpID0+IHtcbiAgICAgIGNvbnN0IHVybCA9IHRhYnNbMF0udXJsXG4gICAgICBjb25zdCBpc0V4Y2x1ZGVkID0gYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpXG4gICAgICBjb25zb2xlLmxvZygnaXNFeGNsdWRlZCcsIGlzRXhjbHVkZWQpXG4gICAgICAvLyBzZW5kUmVzcG9uc2UoeyByZWNvcmRpbmc6ICFpc0V4Y2x1ZGVkIH0pXG5cbiAgICAgIGlmICghaXNFeGNsdWRlZCkge1xuICAgICAgICByZWNvcmRpbmdEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGltZyBzcmM9XCJpY29uLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIC8+IEFjdGlvbnMgb24gdGhpcyBwYWdlIHdpbGwgYmUgcmVjb3JkZWQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRpbmdEaXYuaW5uZXJIVE1MID1cbiAgICAgICAgICAnPGltZyBzcmM9XCJpbmFjdGl2ZV9pY29uLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiIC8+IEFjdGlvbnMgb24gdGhpcyBwYWdlIHdpbGwgbm90IGJlIHJlY29yZGVkJ1xuICAgICAgfVxuICAgIH0pXG4gICAgLy8gfSlcbiAgfVxuICB1cGRhdGVSZWNvcmRpbmdTdGF0dXMoKVxuICBjb25zdCBjaGVja191c2VyX2lkX3ZhbGlkID0gYXN5bmMgKHVzZXJfaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHVzZXJfaWRfdmFsaWQgPSBhd2FpdCBjaGVja191c2VyX2lkKHVzZXJfaWQpXG5cbiAgICBpZiAodXNlcl9pZF92YWxpZCAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB1c2VyX2lkX3ZhbGlkX2Rpdi50ZXh0Q29udGVudCA9ICdVc2VyIElEIGlzIGludmFsaWQsIHBsZWFzZSBjaGVjayB5b3VyIHVzZXIgSUQnXG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJfaWRfdmFsaWRfZGl2LnRleHRDb250ZW50ID0gJydcbiAgICB9XG4gIH1cbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsndXNlcklkJ10sIGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LnVzZXJJZCkge1xuICAgICAgdXNlcklkSW5wdXQudmFsdWUgPSByZXN1bHQudXNlcklkIHx8ICcnXG4gICAgICBkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyhyZXN1bHQudXNlcklkKVxuICAgICAgaWYgKHJlc3VsdC51c2VySWQuaW5jbHVkZXMoZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkKSkge1xuICAgICAgICBkb3dubG9hZERhdGFCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jaycgLy8gU2hvdyBidXR0b25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvd25sb2FkRGF0YUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIEhpZGUgYnV0dG9uXG4gICAgICB9XG4gICAgICBjaGVja191c2VyX2lkX3ZhbGlkKHJlc3VsdC51c2VySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJfaWRfdmFsaWRfZGl2LnRleHRDb250ZW50ID0gJ1BsZWFzZSBlbnRlciB5b3VyIHVzZXIgaWQnXG4gICAgfVxuICB9KVxuXG4gIHVzZXJJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSB1c2VySWRJbnB1dC52YWx1ZS50cmltKClcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB1c2VySWQ6IHVzZXJJZCB9LCAoKSA9PiB7XG4gICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnVXNlciBJRCBzYXZlZC4nXG4gICAgfSlcbiAgICB1cGRhdGVSZWNvcmRpbmdTdGF0dXMoKVxuICAgIGNoZWNrX3VzZXJfaWRfdmFsaWQodXNlcklkKVxuICB9KVxuXG4gIGRvd25sb2FkRGF0YUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlcklkID0gdXNlcklkSW5wdXQudmFsdWUudHJpbSgpXG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2Rvd25sb2FkRGF0YScsIHVzZXJJZCB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnRGF0YSBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseS4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEZhaWxlZCB0byBkb3dubG9hZCBkYXRhOiAke3Jlc3BvbnNlLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YFxuICAgIH1cbiAgfSlcbiAgY2xlYXJDYWNoZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtcbiAgICAgICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCcsXG4gICAgICAgICdsYXN0dXBsb2FkVGltZXN0YW1wJ1xuICAgICAgXSlcbiAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnY2xlYXJNZW1vcnlDYWNoZScgfSwgKCkgPT4ge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnQ2FjaGUgY2xlYXJlZCBzdWNjZXNzZnVsbHkuJ1xuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gXG4gICAgfVxuICB9KVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsInBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSIsInBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5IiwicG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSIsInBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZXMiLCJpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIiwiY29uY2F0IiwiY2hlY2tfdXNlcl9pZF91cmwiLCJmaWx0ZXJfdXJsIiwic2Nyb2xsX3RocmVzaG9sZCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJjbGlja2FibGUiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQiLCJfdGV4dDIiLCJuYW1lRW0iLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidXJsIiwiX3RleHQiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfbmFtZUVtJGlubmVyVGV4dDIiLCJfdGV4dDQiLCJfdGV4dDMiLCJwcm9kdWN0X2ZhY3RzIiwicHJvZHVjdF9kZWxpdmVyeSIsInF1YW50aXR5X3NlbGVjdG9yIiwiZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yIiwic2V0X3VwX25vd19idXR0b24iLCJhZGRfdG9fY2FydF9idXR0b24iLCJidXlfbm93X2J1dHRvbiIsImJ1eV9ib3hfd2l0aF9hY2NvcmRpb24iLCJidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5IiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwIiwiY2FydCIsInRleHRfZm9ybWF0IiwiX2VtJHBhcmVudEVsZW1lbnQiLCJfcHJpY2VFbSRpbm5lclRleHQiLCJhc2luIiwicHJpY2VFbSIsInByaWNlIiwidGl0bGVFbSIsInVybEVtIiwiZGVsaXZlcnlFbSIsImRlbGl2ZXJ5IiwicXVhbnRpdHlFbSIsInF1YW50aXR5Iiwic2VsZWN0ZWRFbSIsImJ1eV9hZ2FpbiIsIl9lbSRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQzIiwiaW5wdXQiLCJjaGVja2VkIiwiX3ByaWNlRW0kaW5uZXJUZXh0MiIsImFzaW5FbSIsIl9lbSRwYXJlbnRFbGVtZW50MiIsIl9wcmljZUVtJGlubmVyVGV4dDMiLCJfZW0kcGFyZW50RWxlbWVudDMiLCJfZW0kcGFyZW50RWxlbWVudDQiLCJfZW0kcGFyZW50RWxlbWVudDUiLCJfYXNpbkVtMiIsIl9wcmljZUVtJGlubmVyVGV4dDQiLCJfZW0kcGFyZW50RWxlbWVudDYiLCJfZW0kcGFyZW50RWxlbWVudDciLCJfYXNpbkVtMyIsInVzZV9yb290IiwiX2VtJGNsb3Nlc3QyIiwiX3BhcmVudFRpdGxlRW0kaW5uZXJUIiwiX3ByaWNlRW0kaW5uZXJUZXh0NSIsInBhcmVudFRpdGxlRW0iLCJwYXJlbnRUaXRsZSIsInJlY2lwZXMiLCJtYXRjaCIsIm1hdGNoX21ldGhvZCIsIm1hdGNoX3dpdGhfcmVmIiwiX2VtJGlubmVyVGV4dCIsIl9lbSRpbm5lclRleHQyIiwiX2VtJGlubmVyVGV4dDMiLCJyYW5nZSIsImtlZXBfYXR0ciIsIm92ZXJyaWRlX2F0dHIiLCJzdGVwX3ZhbHVlcyIsImZvcm1FbSIsInByb3AiLCJzdGVwcyIsIkpTT04iLCJwYXJzZSIsInN0ZXBMYWJlbHMiLCJjdXJyZW50X3ZhbHVlIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJpbnNlcnRfc3BsaXRfbWFya2VyIiwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSIsImNsaWNrX3NlbGVjdG9yIiwibWF0Y2hfdGV4dCIsIl9lbSRpbm5lclRleHQ0IiwiX2VtJGlubmVyVGV4dDUiLCJfZW0kcXVlcnlTZWxlY3RvciIsIl9lbSRxdWVyeVNlbGVjdG9yMiIsImxhYmVsIiwiaW5uZXJIVE1MIiwidW5kZWZpbmVkIiwiX2VtJHF1ZXJ5U2VsZWN0b3IzIiwib3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwib3B0aW9uIiwiZXJyIiwiZiIsImltZ0NoaWxkIiwiYWx0IiwiX2VtJHF1ZXJ5U2VsZWN0b3I0IiwiX2VtJHF1ZXJ5U2VsZWN0b3I1IiwiX2VtJHF1ZXJ5U2VsZWN0b3I2IiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInRleHRFbSIsIm5leHRFbGVtZW50U2libGluZyIsIl9lbSRxdWVyeVNlbGVjdG9yNyIsIl9lbSRxdWVyeVNlbGVjdG9yOCIsIl9lbSRpbm5lclRleHQ2IiwiYnVsbGV0X2xpc3QiLCJ0ZXJtaW5hdGUiLCJhcmd1bWVudHMiLCJ0ZXJtaW5hdGVfY2FsbGJhY2siLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInByb2Nlc3NFbGVtZW50IiwicmVjaXBlIiwicGFyZW50TmFtZSIsIm50aENoaWxkIiwidGFnTmFtZSIsInRhZ19uYW1lIiwiZW5kc1dpdGgiLCJuZXdFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudFRleHQiLCJ0ZXh0RWxlbWVudCIsInRleHRDb250ZW50IiwiZWxlbWVudE5hbWUiLCJ0b1N0cmluZyIsInNldEF0dHJpYnV0ZSIsIm1ldGFvYmoiLCJtZXRhZGF0YSIsInN0cmluZ2lmeSIsIm1ldGFuYW1lIiwiY2xpY2tfZWxlbWVudCIsIndpbmRvdyIsImNsaWNrYWJsZV9yZWNpcGVzIiwiaW5wdXRUeXBlIiwiaW5jbHVkZXMiLCJpbnB1dF9yZWNpcGVzIiwiX2VsZW1lbnQkcGFyZW50RWxlbWVuIiwic2VsZWN0SWQiLCJuYW1lSWQiLCJ0YWciLCJuZXdUYWciLCJhcHBlbmRDaGlsZCIsIl9yZWYiLCJfY2FsbGVlIiwib3B0aW9uVmFsdWUiLCJvcHRpb25OYW1lIiwibmV3T3B0aW9uIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl94IiwiYXR0cnNUb0NvcHkiLCJhdHRyIiwia2V5IiwiX2xvb3AiLCJjaGlsZFJlY2lwZSIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJpbmRleCIsImNoaWxkTm9kZSIsImV2ZXJ5Iiwic3BsaXRNYXJrZXIiLCJlbXB0eV9tZXNzYWdlIiwiZW1wdHlUZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX24iLCJGIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzRnJvbVBvcHVwIiwidXBkYXRlX2ljb24iLCJfdXBkYXRlX2ljb24iLCJzaG91bGRFeGNsdWRlIiwiY2hyb21lIiwiYWN0aW9uIiwic2V0SWNvbiIsInBhdGgiLCJmaW5kUGFnZU1ldGEiLCJhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YSIsImdyb3VwZWRSZXN1bHQiLCJtZXRhTmFtZSIsIm1ldGFEYXRhIiwiZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0IiwiZG9jdW1lbnRDb3B5IiwiY2xvbmVOb2RlIiwiYWxsRWxlbWVudHMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJyZW1vdmVDbGlja2FibGVNYXJrZXJzIiwicmVtb3ZlQXR0cmlidXRlIiwiX3gyIiwiX3Nob3VsZEV4Y2x1ZGUiLCJfY2FsbGVlMiIsImlnbm9yZVVzZXJJZCIsInJlc3VsdCIsInVzZXJJZCIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImhhbmRsZU1lc3NhZ2UiLCJldmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJzb21lIiwiaW5jbHVkZVVybCIsImV4Y2x1ZGVVcmwiLCJnZW5lcmF0ZUh0bWxTbmFwc2hvdElkIiwidGltZXN0YW1wIiwidXVpZCIsImxvY2F0aW9uIiwiaHJlZiIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImNoYXJDb2RlQXQiLCJjaGVja191c2VyX2lkIiwiX3gzIiwiX2NoZWNrX3VzZXJfaWQiLCJfY2FsbGVlMyIsInVzZXJfaWQiLCJyZXNwb25zZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImZldGNoIiwianNvbiIsIm9rIiwidDAiLCJtZXNzYWdlIiwic2VsZWN0UmVjaXBlIiwicGFyc2VkVXJsIiwiVVJMIiwicGF0aG5hbWUiLCJtYXRjaE1ldGhvZCIsIl9lbGVtZW50JHRleHRDb250ZW50JCIsIl9lbGVtZW50JHRleHRDb250ZW50IiwiaGFzTWF0Y2giLCJlcnJvciIsInN0YXJ0c1dpdGgiLCJwcm9jZXNzUmVjaXBlIiwicm9vdEVsZW1lbnQiLCJuZXdSb290Iiwic2ltcGxpZmllZEhUTUwiLCJvdXRlckhUTUwiLCJnZXRDdXN0b21RdWVzdGlvbiIsImV2ZW50VHlwZSIsIl9kYXRhJGRhdGFTZW1hbnRpY0kiLCJfZGF0YSRkYXRhU2VtYW50aWNJMiIsIl9kYXRhJGRhdGFTZW1hbnRpY0kzIiwiX2RhdGEkZGF0YVNlbWFudGljSTQiLCJfZGF0YSR0YXJnZXQkY2xhc3NOYW0iLCJfZGF0YSRkYXRhU2VtYW50aWNJNSIsIl9kYXRhJGRhdGFTZW1hbnRpY0k2IiwiX2RhdGEkZGF0YVNlbWFudGljSTciLCJ0YXJnZXQiLCJpZCIsImNsYXNzTmFtZSIsIm5hdmlnYXRpb25UeXBlIiwiaXNWYWxpZFJlYXNvbiIsInJlYXNvbiIsIm1lYW5pbmdsZXNzUGF0dGVybnMiLCJfaSIsIl9tZWFuaW5nbGVzc1BhdHRlcm5zIiwicGF0dGVybiIsImRvd25sb2FkRGF0YUJ0biIsImdldEVsZW1lbnRCeUlkIiwib3V0cHV0RGl2IiwiY2xlYXJDYWNoZUJ0biIsInVzZXJJZElucHV0IiwicmVjb3JkaW5nRGl2IiwidXNlcl9pZF92YWxpZF9kaXYiLCJkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyIsIl9kaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiYWxsX3RpbWUiLCJvbl9kYXRlIiwiX2NhbGxlZTQiLCJ1cGRhdGVSZWNvcmRpbmdTdGF0dXMiLCJjaGVja191c2VyX2lkX3ZhbGlkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsIl9yZWYyIiwiaXNFeGNsdWRlZCIsIl9yZWYzIiwidXNlcl9pZF92YWxpZCIsIl9yZWY0Iiwic3R5bGUiLCJkaXNwbGF5IiwiX3g0Iiwic2V0IiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwic3VjY2VzcyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=
