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
var filter_url = ['https://www.amazon.com/checkout/', 'https://www.amazon.com/gp/buy/', 'https://www.amazon.com/a/addresses', 'https://www.amazon.com/cpe/yourpayments/', 'https://www.amazon.com/ap/signin', 'https://www.amazon.com/ap/cvf/', 'https://www.amazon.com/ap/profile/', 'https://www.amazon.com/ax/account/', 'https://www.amazon.com/gp/product/handle-buy-box/', 'https://www.amazon.com/gp/checkoutportal/', 'https://www.amazon.com/gp/cart/desktop/'];
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
/* harmony export */   fresh_cart: () => (/* binding */ fresh_cart),
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
      clickable: true,
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
  }, {
    selector: '#nav-flyout-searchAjax',
    name: 'suggested_terms',
    children: [{
      selector: 'div.s-suggestion-ellipsis-direction',
      name: 'from_text',
      add_text: true,
      clickable: true
    }]
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
  selector: '#selectQuantity, div[id^="qs-widget-button-container-atfc"]',
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
  }, {
    selector: 'button',
    name: 'drop_down_list',
    clickable: true,
    add_text: true
  }, {
    selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
    add_text: true,
    clickable: true,
    use_root: true,
    name: 'from_text',
    text_format: 'Drop Down Option {}'
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
  selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb'], #freshAddToCartButton input",
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
    selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header'], div[data-csa-c-content-id='offer_display_mobile_accordion_header']",
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
  selector: '#sc-collapsed-carts-container',
  name: 'amazon_fresh_cart',
  children: [{
    selector: 'div.sc-localmarket-text-logo',
    add_text: true
  }, {
    selector: 'div[data-name="collapsed_item_list"]',
    clickable: true,
    name: 'item_list'
  }, {
    selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
    clickable: true,
    name: 'check_out',
    add_text: true
  }, {
    selector: 'div.sc-buy-box-inner-box a',
    clickable: true,
    name: 'from_text',
    add_text: true
  }]
}, {
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
var fresh_cart = [nav, {
  selector: "div[data-name='Active Items']",
  name: 'active_item_list',
  children: [{
    selector: 'div.sc-list-item-content',
    text_selector: 'ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
    name: 'from_text',
    children: [{
      selector: 'div.sc-product-image-desktop a img',
      clickable: true,
      name: 'product_image',
      add_text: true,
      text_format: 'Product Image'
    }, {
      selector: 'ul > li > span.a-list-item > a.sc-product-title',
      clickable: true,
      text_selector: 'span.a-truncate-full',
      add_text: true,
      name: 'product_detail'
    }, {
      selector: 'div.sc-badge-price-to-pay span.sc-price',
      add_text: true
    }, {
      selector: 'div.sc-action-links',
      children: [{
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
          name: 'quantity_drop_down_list',
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
      }]
    }, {
      selector: "input[data-action='delete']",
      add_text: true,
      clickable: true,
      name: 'delete'
    }],
    generate_metadata: function generate_metadata(em) {
      var _em$parentElement2, _priceEm$innerText2;
      var asin = (_em$parentElement2 = em.parentElement) === null || _em$parentElement2 === void 0 ? void 0 : _em$parentElement2.getAttribute('data-asin');
      var priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText2 = priceEm.innerText) === null || _priceEm$innerText2 === void 0 ? void 0 : _priceEm$innerText2.replace(/[\n]/g, '');
      var titleEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
      var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
      var urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title');
      var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
      var quantityEm = em.querySelector('div.sc-action-links div.qs-widget-dropdown-flex-wrapper button');
      var quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
      return {
        name: 'active_items',
        data: {
          title: title,
          asin: asin,
          price: price,
          url: url,
          quantity: quantity
        }
      };
    }
  }]
}, {
  selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
  clickable: true,
  name: 'check_out',
  add_text: true
}, {
  selector: 'div.sc-buy-box-inner-box a',
  clickable: true,
  name: 'from_text',
  add_text: true
}, {
  selector: '#sc-cart-above-actions button, #sc-cart-above-actions a',
  clickable: true,
  name: 'from_text',
  add_text: true
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
      var _priceEm$innerText3;
      var asinEm = em.querySelector("div[id^='closedCard'] div[id^='info']");
      var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
      var priceEm = em.querySelector('div[id^="closedCard"] div[id^="info"] span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
      var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText3 = priceEm.innerText) === null || _priceEm$innerText3 === void 0 ? void 0 : _priceEm$innerText3.replace(/[\n]/g, '');
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
          var _em$parentElement3, _priceEm$innerText4, _em$parentElement4, _em$parentElement5;
          var asinEm = (_em$parentElement3 = em.parentElement) === null || _em$parentElement3 === void 0 ? void 0 : _em$parentElement3.parentElement;
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          if (asin === null) {
            var _asinEm = em.parentElement;
            var _asin = _asinEm === null || _asinEm === void 0 ? void 0 : _asinEm.getAttribute('data-asin');
          }
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText4 = priceEm.innerText) === null || _priceEm$innerText4 === void 0 ? void 0 : _priceEm$innerText4.replace(/[\n]/g, '');
          var titleEm = (_em$parentElement4 = em.parentElement) === null || _em$parentElement4 === void 0 || (_em$parentElement4 = _em$parentElement4.parentElement) === null || _em$parentElement4 === void 0 ? void 0 : _em$parentElement4.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = (_em$parentElement5 = em.parentElement) === null || _em$parentElement5 === void 0 || (_em$parentElement5 = _em$parentElement5.parentElement) === null || _em$parentElement5 === void 0 ? void 0 : _em$parentElement5.querySelector("a[id^='title']");
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
          var _em$parentElement6, _asinEm2, _priceEm$innerText5, _em$parentElement7, _em$parentElement8;
          var asinEm = (_em$parentElement6 = em.parentElement) === null || _em$parentElement6 === void 0 ? void 0 : _em$parentElement6.parentElement;
          var asin = (_asinEm2 = asinEm) === null || _asinEm2 === void 0 ? void 0 : _asinEm2.getAttribute('data-asin');
          if (asin === null) {
            var _asinEm3;
            asinEm = em.querySelector('input[data-mix-operations="snsModalHandler"]');
            asin = (_asinEm3 = asinEm) === null || _asinEm3 === void 0 ? void 0 : _asinEm3.getAttribute('data-asin');
          }
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText5 = priceEm.innerText) === null || _priceEm$innerText5 === void 0 ? void 0 : _priceEm$innerText5.replace(/[\n]/g, '');
          var titleEm = (_em$parentElement7 = em.parentElement) === null || _em$parentElement7 === void 0 || (_em$parentElement7 = _em$parentElement7.parentElement) === null || _em$parentElement7 === void 0 ? void 0 : _em$parentElement7.querySelector("a[id^='title'] span.a-truncate-full");
          var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
          var urlEm = (_em$parentElement8 = em.parentElement) === null || _em$parentElement8 === void 0 || (_em$parentElement8 = _em$parentElement8.parentElement) === null || _em$parentElement8 === void 0 ? void 0 : _em$parentElement8.querySelector("a[id^='title']");
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
          var _em$closest2, _parentTitleEm$innerT, _priceEm$innerText6;
          var parentTitleEm = (_em$closest2 = em.closest('div[id^="featured"]')) === null || _em$closest2 === void 0 ? void 0 : _em$closest2.querySelector('div[id^="detailContentWrapper"] a[id^="title"] span.a-truncate-full');
          var parentTitle = parentTitleEm === null || parentTitleEm === void 0 || (_parentTitleEm$innerT = parentTitleEm.innerText) === null || _parentTitleEm$innerT === void 0 ? void 0 : _parentTitleEm$innerT.toLowerCase().replace(/[^\w]+/g, '_');
          var asinEm = em.querySelector('div[class*="delightFaceout"]');
          var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
          var priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
          var price = priceEm === null || priceEm === void 0 || (_priceEm$innerText6 = priceEm.innerText) === null || _priceEm$innerText6 === void 0 ? void 0 : _priceEm$innerText6.replace(/[\n]/g, '');
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
        selector: 'div.AdHolder',
        name: 'ads',
        children: [{
          selector: 'div[data-asin]',
          name: 'from_text',
          add_text: true,
          clickable: true,
          text_js: function text_js(em) {
            var titleEm = em.querySelector('img');
            var text = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
            return text.trim() || '';
          },
          generate_metadata: function generate_metadata(em) {
            var asinEm = em;
            var asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
            var titleEm = em.querySelector('img');
            var title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
            var urlEm = em.querySelector("a[data-type='productTitle']");
            var url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
            return {
              name: 'ads',
              data: {
                title: title,
                asin: asin,
                url: url
              }
            };
          }
        }]
      }, {
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
          selector: 'div.s-variations-options-elevated',
          name: 'options',
          add_text: true,
          clickable: true,
          click_selector: 'a'
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
            "class": 'product-rating-count',
            name: 'product_rating_count',
            clickable: true
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
  match: '/cart/localmarket',
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
    children: fresh_cart
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
/* harmony export */   MarkViewableElements: () => (/* binding */ MarkViewableElements),
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
function MarkViewableElements() {
  // Create a copy of the document

  // Select all elements
  var allElements = document.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');
  // Check if each element is in the viewport and add marker
  allElements.forEach(function (element) {
    var rect = element.getBoundingClientRect();
    var inViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    // Add marker attribute to the element
    element.setAttribute('visible-clickable-element-marker', inViewport ? 'true' : 'false');
  });
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
  var _data$dataSemanticI, _data$dataSemanticI2, _data$dataSemanticI3, _data$dataSemanticI4, _data$target$classNam, _data$dataSemanticI5, _data$dataSemanticI6, _data$dataSemanticI7, _data$dataSemanticI8, _data$dataSemanticI9;
  var question = '';
  var placeholder = 'Enter your reason here...';
  switch (eventType) {
    case 'click_a':
    case 'click_b':
    case 'click_c':
      // Check if it's a specific type of click
      if (data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' || data.target.innerText === 'Set Up Now') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the set up now button. What makes you choose to subscribe to this product?';
        placeholder = 'I choose to subscribe because...';
      } else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' || data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' || data.target.id === 'buy-now-button') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the buy now button. What do you like about this particular product?';
        placeholder = 'I am buying this product because...';
      } else if ((_data$dataSemanticI = data['data-semantic-id']) !== null && _data$dataSemanticI !== void 0 && _data$dataSemanticI.startsWith('search_results.') || (_data$dataSemanticI2 = data['data-semantic-id']) !== null && _data$dataSemanticI2 !== void 0 && _data$dataSemanticI2.startsWith('product_list.') || (_data$dataSemanticI3 = data['data-semantic-id']) !== null && _data$dataSemanticI3 !== void 0 && _data$dataSemanticI3.startsWith('active_item_list.') && (_data$dataSemanticI4 = data['data-semantic-id']) !== null && _data$dataSemanticI4 !== void 0 && _data$dataSemanticI4.endsWith('.product_detail') || (_data$target$classNam = data.target.className) !== null && _data$target$classNam !== void 0 && _data$target$classNam.includes('sc-product-link')) {
        question = 'You <span style="background-color: yellow;">clicked</span> on this product. What caught your attention compared to the other options you saw?';
        placeholder = 'I like this product becauseß...';
      } else if ((_data$dataSemanticI5 = data['data-semantic-id']) !== null && _data$dataSemanticI5 !== void 0 && _data$dataSemanticI5.endsWith('add_to_cart') || data.target.id === 'add-to-cart-button' || data.target.name === 'submit.addToCart' || data.target.innerText === 'Add to Cart') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the add to cart button. What makes you decide to add this item to your cart?';
        placeholder = 'I add this item to my cart because...';
      } else if (data['data-semantic-id'] === 'nav_bar.search_button') {
        question = 'You <span style="background-color: yellow;">clicked</span> on the search button. What are you searching for?';
        placeholder = 'I want to find ...';
      } else if ((_data$dataSemanticI6 = data['data-semantic-id']) !== null && _data$dataSemanticI6 !== void 0 && _data$dataSemanticI6.startsWith('refinements.') || (_data$dataSemanticI7 = data['data-semantic-id']) !== null && _data$dataSemanticI7 !== void 0 && _data$dataSemanticI7.startsWith('filters.')) {
        question = 'You <span style="background-color: yellow;">clicked</span> on this filter. What are you hoping to find with this filter?';
        placeholder = 'I want to find ...';
      } else if ((_data$dataSemanticI8 = data['data-semantic-id']) !== null && _data$dataSemanticI8 !== void 0 && _data$dataSemanticI8.startsWith('product_options.')) {
        question = 'You <span style="background-color: yellow;">clicked</span> on this product option. What do you like about this product option?';
        if (data['element-meta-name'] === 'product_options' && data['element-meta-data'] !== '') {
          question = "You <span style=\"background-color: yellow;\">clicked</span> on ".concat(data['element-meta-data']['value'], ". What do you like about this product option?");
        }
        placeholder = 'I like this product option because...ß';
      } else if ((_data$dataSemanticI9 = data['data-semantic-id']) !== null && _data$dataSemanticI9 !== void 0 && _data$dataSemanticI9.endsWith('check_out')) {
        question = 'You <span style="background-color: yellow;">clicked</span> checkout button. What makes you choose to checkout?';
        placeholder = 'I choose to checkout because...';
      } else {
        question = 'You <span style="background-color: yellow;">clicked</span> on this element. Could you share what you were trying to do or find?';
        placeholder = 'Enter your reason here...';
      }
      break;
    case 'scroll':
      question = 'You <span style="background-color: yellow;">scrolled</span> on this page. What information are you looking for?';
      placeholder = 'I want to find ...';
      break;
    case 'input':
      question = 'You <span style="background-color: yellow;">typed</span> in this input field. What are you searching for?';
      placeholder = 'I want to find ...';
      break;
    case 'navigation':
      if (data.navigationType === 'back') {
        question = 'Why did you decide to <span style="background-color: yellow;">go back</span> to the previous page?';
        placeholder = "I'm back because...";
      } else if (data.navigationType === 'forward') {
        question = 'Why did you decide to <span style="background-color: yellow;">return</span> to this page ?';
        placeholder = 'I want to find ...';
      }
      question = "What is the reason for this <span style=\"background-color: yellow;\">".concat(data.navigationType, " navigation</span>?");
      placeholder = 'Enter your reason here...';
      break;
    case 'tabActivate':
      question = "Why did you <span style=\"background-color: yellow;\">switch to this tab</span>?";
      placeholder = 'I switched to this tab because...';
      break;
    default:
      question = "What is the reason for the ".concat(eventType, " action?");
      placeholder = 'Enter your reason here...';
      break;
  }
  return {
    question: question,
    placeholder: placeholder
  };
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
    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
  });

  // Function to capture interactions
  function captureInteraction(_x4, _x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
    return _captureInteraction.apply(this, arguments);
  } // Variables to track scroll events
  function _captureInteraction() {
    _captureInteraction = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(eventType, target, timestamp, uuid, windowSize, scrollDistance, scrollCurrentTop, scrollCurrentLeft, scrollDistance_X) {
      var currentSnapshotId, simplifiedHTML, pageMeta, data;
      return _regeneratorRuntime().wrap(function _callee5$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            // Generate new HTML snapshot ID
            currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
            simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            console.log('start time:', new Date().toISOString());
            (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
            console.log('end time:', new Date().toISOString());
            pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
            data = {
              uuid: uuid,
              eventType: eventType,
              timestamp: timestamp,
              htmlSnapshotId: currentSnapshotId,
              // Use the new snapshot ID
              pageMeta: pageMeta || '',
              htmlContent: document.documentElement.outerHTML,
              simplifiedHTML: simplifiedHTML
            };
            if (eventType === 'scroll') {
              data['windowSize'] = windowSize;
              data['scrollDistance_Y'] = scrollDistance;
              data['scrollCurrentTop'] = scrollCurrentTop;
              data['scrollCurrentLeft'] = scrollCurrentLeft;
              data['scrollDistance_X'] = scrollDistance_X;
              data['target'] = target;
            }
            if (eventType === 'input') {
              data['input-values'] = (target === null || target === void 0 ? void 0 : target.value) || '';
              data['input-id'] = (target === null || target === void 0 ? void 0 : target.id) || '';
              data['data-element-meta-name'] = target.getAttribute('data-element-meta-name') || '';
              data['data-element-meta-data'] = target.getAttribute('data-element-meta-data') || '';
            }
            _context6.next = 12;
            return chrome.runtime.sendMessage({
              action: 'saveData',
              data: data
            });
          case 12:
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            console.error("Error during ".concat(eventType, " event handling:"), _context6.t0);
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return _captureInteraction.apply(this, arguments);
  }
  var isScrolling = false;
  var scrollTimeout;
  var scrollStartTop = window.scrollY || document.documentElement.scrollTop;
  var accumulatedScrollDistance = 0;
  var scrollStartLeft = window.scrollX || document.documentElement.scrollLeft;
  var accumulatedScrollDistance_X = 0;
  // Function to handle the first scroll event in a scroll sequence
  function handleFirstScroll(_x13, _x14) {
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
  function handleScrollStop(_x15, _x16) {
    return _handleScrollStop.apply(this, arguments);
  }
  function _handleScrollStop() {
    _handleScrollStop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(scrollUuid, scrollTimestamp) {
      var currentScrollTop, currentScrollLeft, windowSize;
      return _regeneratorRuntime().wrap(function _callee7$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            console.log('scroll stop uuid', scrollUuid);
            currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            accumulatedScrollDistance += currentScrollTop - scrollStartTop;
            currentScrollLeft = window.scrollX || document.documentElement.scrollLeft;
            accumulatedScrollDistance_X += currentScrollLeft - scrollStartLeft;

            // INSERT_YOUR_CODE
            windowSize = {
              width: window.innerWidth,
              height: window.innerHeight
            };
            if (!(accumulatedScrollDistance !== 0 || accumulatedScrollDistance_X !== 0)) {
              _context8.next = 14;
              break;
            }
            _context8.next = 10;
            return captureInteraction('scroll', window.location.href, scrollTimestamp, scrollUuid, windowSize, accumulatedScrollDistance, currentScrollTop, accumulatedScrollDistance_X, currentScrollLeft);
          case 10:
            // Reset accumulated scroll distance
            accumulatedScrollDistance = 0;
            accumulatedScrollDistance_X = 0;
            scrollStartTop = currentScrollTop;
            scrollStartLeft = currentScrollLeft;
          case 14:
            isScrolling = false;
            _context8.next = 20;
            break;
          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](0);
            console.error('Error during scroll stop handling:', _context8.t0);
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee7, null, [[0, 17]]);
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
    return function (_x17) {
      return _ref2.apply(this, arguments);
    };
  }());
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
        return function (_x18) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  });
  chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('message', message);
    if (message.action === 'getHTML') {
      var simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
      (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
      var htmlContent = document.documentElement.outerHTML;
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
      createModal(message.question, message.placeholder, sendResponse);
      return true; // Will respond asynchronously
    }
  });
  function createModal(question, placeholder, sendResponse) {
    var modalHtml = "\n        <div id=\"reason-modal\" style=\"\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 10000;\n        \">\n            <div style=\"\n                background: white;\n                padding: 20px;\n                border-radius: 8px;\n                width: 400px;\n            \">\n                <h3>".concat(question, "</h3>\n                <textarea id=\"reason-input\" placeholder=\"").concat(placeholder, "\" style=\"\n                    width: 100%;\n                    height: 100px;\n                    margin: 10px 0;\n                \"></textarea>\n                <div id=\"error-message\" style=\"\n                    color: red;\n                    display: none;\n                    font-size: 12px;\n                    margin-top: 5px;\n                \">\n                    Please enter a valid reason.\n                </div>\n                <div style=\"\n                    text-align: right;\n                    display: flex;\n                    justify-content: flex-end;\n                    gap: 10px;\n                \">\n                    <button id=\"reason-skip\">Skip</button>\n                    <button id=\"reason-submit\">Submit</button>\n                </div>\n            </div>\n        </div>\n    ");
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
      var errorMessage = document.getElementById('error-message');
      var value = input.value;
      if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isValidReason)(value)) {
        errorMessage.style.display = 'block'; // Show the error message
        return; // Prevent submission if the reason is invalid
      } else {
        errorMessage.style.display = 'none'; // Hide the error message
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztFQUNKO0FBQ0YsQ0FBQztBQUNEb1AsMERBQWEsQ0FBQzVDLE1BQU0sQ0FBQ2dHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUMzSyxJQUFJLENBQUMsVUFBQ3VKLE1BQU0sRUFBSztFQUNuRHZVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLCtCQUErQixFQUFFc1UsTUFBTSxDQUFDO0VBQ3BELElBQUksQ0FBQ0EsTUFBTSxFQUFFO0lBQ1hzRyxJQUFJLENBQUMsQ0FBQztFQUNSO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMVxuZXhwb3J0IGNvbnN0IHBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5ID0gMC4yXG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvc2lnbmluJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvY3ZmLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL3Byb2ZpbGUvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXgvYWNjb3VudC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NoZWNrb3V0cG9ydGFsLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IGVtPy52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF90ZXJtJywgZGF0YTogeyB0ZXJtIH0gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYnV0dG9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0IHNwYW4ubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdhY2NvdW50X2FuZF9saXN0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1vcmRlcnMnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnb3JkZXJfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWNhcnQnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtY2FydCAubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdjYXJ0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1mbHlvdXQtc2VhcmNoQWpheCcsXG4gICAgICBuYW1lOiAnc3VnZ2VzdGVkX3Rlcm1zJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXN1Z2dlc3Rpb24tZWxsaXBzaXMtZGlyZWN0aW9uJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAndWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSknLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICBsZXQgdXJsID0gJydcblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICB9XG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uY2xvc2VzdCgndWwnKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgc2VsZWN0b3I6ICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xufVxuXG5leHBvcnQgY29uc3QgcXVhbnRpdHlfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5LCBkaXZbaWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1jb250YWluZXItYXRmY1wiXScsXG4gIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2J1dHRvbicsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjpcbiAgICBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ10sICNmcmVzaEFkZFRvQ2FydEJ1dHRvbiBpbnB1dFwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICBjbGFzczogJ3Byb2R1Y3QtYWRkLXRvLWNhcnQnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6IFwiaW5wdXRbbmFtZT0nc3VibWl0LmJ1eS1ub3cnXVwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYnV5X25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1idXktbm93J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRoX2FjY29yZGlvbiA9IHtcbiAgc2VsZWN0b3I6ICcjYnV5Qm94QWNjb3JkaW9uID4gZGl2LmEtYm94LmNlbHdpZGdldCcsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmFjY29yZGlvbi1jYXB0aW9uID4gc3BhbicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgIFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9kZXNrdG9wX2FjY29yZGlvbl9oZWFkZXInXSwgZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9tb2JpbGVfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY29sbGFwc2VkLWNhcnRzLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ2FtYXpvbl9mcmVzaF9jYXJ0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1sb2NhbG1hcmtldC10ZXh0LWxvZ28nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1uYW1lPVwiY29sbGFwc2VkX2l0ZW1fbGlzdFwiXScsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2l0ZW1fbGlzdCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGlucHV0W25hbWVePVwicHJvY2VlZFRvQUxNQ2hlY2tvdXRcIl0nLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggYScsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBsYWJlbCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pbWFnZS13cmFwcGVyIGEnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5zYy1kZWxpdmVyeS1tZXNzYWdpbmcnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByb2R1Y3QtcHJpY2Ugc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByb2R1Y3QtcHJpY2Ugc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdsaS5zYy1kZWxpdmVyeS1tZXNzYWdpbmcnKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JylcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkRW0/LmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpICE9PSBudWxsXG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSwgcXVhbnRpdHksIHNlbGVjdGVkIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gaW5wdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBmcmVzaF9jYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLXByb2R1Y3QtaW1hZ2UtZGVza3RvcCBhIGltZycsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWFjdGlvbi1saW5rcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nUmVtb3ZlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1YW50aXR5X2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1jb250YWluZXItYXRmY1wiXSBzcGFuW2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWF0Yy1hdGZjXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScpXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcigndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1hY3Rpb24tbGlua3MgZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY2FydC1hYm92ZS1hY3Rpb25zIGJ1dHRvbiwgI3NjLWNhcnQtYWJvdmUtYWN0aW9ucyBhJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgYnV5X2FnYWluID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb246aGFzKGRpdi5maWx0ZXItY29udGFpbmVyKScsXG4gICAgbmFtZTogJ2ZpbHRlcnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmZpbHRlci1jb250YWluZXInLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtLmlubmVyVGV4dFxuICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbVxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXYuZmlsdGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInKVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYWxtLWdyaWQtZGVza3RvcC1ncmlkLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ3Byb2R1Y3RfbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZ3JpZENlbGxcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdncmlkRWxlbWVudCddXCIsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VkX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0naW5mbyddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcGVuX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybSBzcGFuLmEtYnV0dG9uLWlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZXhwYW5kZWRJbWFnZSddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UgUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltpZF49J2Nsb3NlZENhcmQnXSBkaXZbaWRePSdpbmZvJ11cIilcbiAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSAjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50J1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVhdHVyZWRcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImRldGFpbENvbnRlbnRXcmFwcGVyXCJdIGRpdltpZF49XCJkZXRhaWxDb250ZW50XCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdkZXRhaWxlZF9jb250ZW50JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdjpoYXMoPiBpbWcpJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbY2xhc3MqPSdtdWx0aU9mZmVyUGlsbENvbnRhaW5lciddIGFcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdORVcnXSwgZGl2W2NsYXNzKj0nYXNpbkRldGFpbEluZm9Db2x1bW5zJ106aGFzKGlucHV0W25hbWU9J3N1Ym1pdC5hZGRUb0NhcnQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvbmVfdGltZV9wdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJhY3Rpb25CdXR0b25zUm93XCJdLCBkaXZbY2xhc3MqPVwiYXNpbkRldGFpbEFjdGlvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbaWRePVwiYnV5LW5vd1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXlfbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgYXNpbkVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgbGV0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGlmIChhc2luID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc2luRW0gPSBlbS5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdTTlMnXSwgZGl2W2NsYXNzKj0nc25zVXBzZWxsQmxvY2tDb250YWluZXInXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInNuc0J1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic3Vic2NyaXB0aW9uQnV0dG9uXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZXRfdXBfc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgYXNpbkVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICAgbGV0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGlmIChhc2luID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtbWl4LW9wZXJhdGlvbnM9XCJzbnNNb2RhbEhhbmRsZXJcIl0nKVxuICAgICAgICAgICAgICAgICAgICBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2RldGFpbC12aWV3LXNpbWlsYXItaXRlbXMnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3NpbWlsYXJfaXRlbXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1pbWFnZS1jb250YWluZXI6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXSwgaW5wdXRbbmFtZV49XCJhdGZjU2hpbVwiXSwgYnV0dG9uW2FyaWEtbGFiZWw9XCJBZGQgdG8gQ2FydC4gQ2xpY2sgdG8gY2hhbmdlIHF1YW50aXR5XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nUmVtb3ZlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXN1bW1hcnktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1hdGMtYXRmY1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGVFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXZbaWRePVwiZmVhdHVyZWRcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBhW2lkXj1cInRpdGxlXCJdIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUaXRsZSA9IHBhcmVudFRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICA/LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cImRlbGlnaHRGYWNlb3V0XCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcGFyZW50VGl0bGUgKyAnLnNpbWlsYXJfaXRlbXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCByZWNpcGVzID0gW1xuICB7XG4gICAgbWF0Y2g6ICcvJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW25hdl1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9zJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzLXJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdG9wUmVmaW5lbWVudHNcXFxcLzAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3BfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdSZWNlbnRseSB1c2VkIGZpbHRlcnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lOm5vdCg6aGFzKCNuLXRpdGxlKSk6aGFzKHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCk6aGFzKHVsIHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaSk6bm90KCNyZXZpZXdzUmVmaW5lbWVudHMpOm5vdCgjZGVwYXJ0bWVudHMpOm5vdCgjcHJpY2VSZWZpbmVtZW50cyk6bm90KCNmaWx0ZXJzKScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHJlZmluZW1lbnRfb3B0aW9uXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlcGFydG1lbnQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBlbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZCA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmV2aWV3c1JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXN0b21lciBSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3ByaWNlUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIC8vIDIgY2FzZXM6IHNlbGVjdGlvbiAvIHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwXzM2LXRpdGxlLCBkaXYuc2YtcmVmaW5lbWVudC1oZWFkaW5nIHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDE6IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDI6IHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlOiAncHJpY2VfcmFuZ2UnLCByYW5nZSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy1sb3dlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9taW5fdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRleHQpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtdXBwZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWF4X3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2Ytc3VibWl0LXJhbmdlLWJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJtaXRfcHJpY2VfcmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdHbycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmVzZXQtcmFuZ2UtbGluayBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jlc2V0X3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF9uX2RlYWxfdHlwZS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVhbHNfZGlzY291bnRzX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfZGVhbHNfZGlzY291bnRfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHMnLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5BZEhvbGRlcicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FkcycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1hc2luXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXR5cGU9J3Byb2R1Y3RUaXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FkcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtcHJvZHVjdC1pbWFnZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdmFpbGFibGVfY29sb3JzJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1wYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLXR5cGU9J2xpbmsnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXZhcmlhdGlvbnMtb3B0aW9ucy1lbGV2YXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZ19jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci5hLXBvcG92ZXItaGVhZGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT0ncy1wcm9kdWN0LWltYWdlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3NwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgyKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6aGFzKCNzbnMtYmFzZS1wcmljZSkgI3Nucy1iYXNlLXByaWNlIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6bm90KDpoYXMoI3Nucy1iYXNlLXByaWNlKSkgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBsYWJlbCwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLy8gaGFuZGxlIG5ldyB0d2lzdGVyc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3Rlci1wbHVzLWlubGluZS10d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItcm93JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IGxhYmVsLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBzcGFuOm5vdCguYW9rLWhpZGRlbikgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgbGFiZWwsIHZhbHVlOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLmEtdW5vcmRlcmVkLWxpc3QsICNmZWF0dXJlYnVsbGV0c19mZWF0dXJlX2RpdiB1bC5hLXVub3JkZXJlZC1saXN0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbTogJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYnVsbGV0X2xpc3Q6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2kuYS1pY29uLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYWRkLXRvLWNhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvbG9jYWxtYXJrZXQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBmcmVzaF9jYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYXAvc2lnbmluJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2J1eS9zcGMvaGFuZGxlcnMvZGlzcGxheS5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2J1eWFnYWluJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogYnV5X2FnYWluXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG4iLCJleHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoZWxlbWVudDogYW55LCByZWNpcGU6IGFueSwgcGFyZW50TmFtZSA9ICcnLCBudGhDaGlsZCA9IDApIHtcbiAgLy8gY29uc29sZS5sb2coXCJwcm9jZXNzaW5nIGVsZW1lbnQ6IFwiLCBlbGVtZW50LCByZWNpcGUpO1xuICAvLyBDcmVhdGUgYSBuZXcgZWxlbWVudCB1c2luZyB0aGUgRE9NIEFQSVxuICBsZXQgdGFnTmFtZSA9IHJlY2lwZS50YWdfbmFtZSB8fCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKVxuICAvLyBIYW5kbGUgdW5kZXJzY29yZWQgdGFnc1xuICBpZiAodGFnTmFtZS5lbmRzV2l0aCgnXycpKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpXG4gIH1cbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcblxuICAvLyBFeHRyYWN0IHRleHQgY29udGVudCBiYXNlZCBvbiB0aGUgcmVjaXBlXG4gIGxldCBlbGVtZW50VGV4dCA9ICcnXG4gIGlmIChyZWNpcGUudGV4dF9zZWxlY3Rvcikge1xuICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS50ZXh0X3NlbGVjdG9yKVxuICAgIGlmICh0ZXh0RWxlbWVudCkge1xuICAgICAgZWxlbWVudFRleHQgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQgfHwgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfanMpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2pzKGVsZW1lbnQpXG4gICAgaWYgKGVsZW1lbnRUZXh0ID09PSAnJyB8fCBlbGVtZW50VGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndGV4dCBqcyBkb2VzIG5vdCBkZXRlY3QgdGV4dCBmb3IgZWxlbWVudCAnLCBlbGVtZW50KVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUuYWRkX3RleHQpIHtcbiAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJydcbiAgfVxuICBlbGVtZW50VGV4dCA9IGVsZW1lbnRUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0LnJlcGxhY2UoJ3t9JywgZWxlbWVudFRleHQpXG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXRcbiAgfVxuXG4gIGlmIChlbGVtZW50VGV4dCAmJiByZWNpcGUuYWRkX3RleHQpIHtcbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHRcbiAgfVxuXG4gIC8vIEJ1aWxkIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgbGV0IGVsZW1lbnROYW1lID0gJydcbiAgaWYgKHJlY2lwZS5uYW1lKSB7XG4gICAgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV90ZXh0Jykge1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZWxlbWVudFRleHQgaXMgZW1wdHknLCByZWNpcGUsIGVsZW1lbnQpXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50IHRleHQgbm90IGZvdW5kXCIpO1xuICAgICAgICBlbGVtZW50TmFtZSA9ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50TmFtZSArPSBlbGVtZW50VGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX250aF9jaGlsZCcpIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gbnRoQ2hpbGQudG9TdHJpbmcoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IHJlY2lwZS5uYW1lXG4gICAgfVxuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgZWxlbWVudE5hbWUpXG4gICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lXG4gIH1cblxuICBpZiAocmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKSB7XG4gICAgY29uc3QgbWV0YW9iaiA9IHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YShlbGVtZW50KVxuICAgIGNvbnN0IG1ldGFkYXRhID0gSlNPTi5zdHJpbmdpZnkobWV0YW9iai5kYXRhKVxuICAgIGNvbnN0IG1ldGFuYW1lID0gbWV0YW9iai5uYW1lXG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScsIG1ldGFuYW1lKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJywgbWV0YWRhdGEpXG4gICAgLy8gY29uc29sZS5sb2coJ21ldGFkYXRhIGdlbmVyYXRlZDogJywgbWV0YWRhdGEsICcgd2l0aCBuYW1lOiAnLCBtZXRhbmFtZSlcbiAgfVxuXG4gIC8vIEhhbmRsZSBjbGlja2FibGVzIGFuZCBpbnB1dHNcbiAgaWYgKHJlY2lwZS5jbGlja2FibGUpIHtcbiAgICBpZiAoIXJlY2lwZS5uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsaWNrYWJsZSBlbGVtZW50IG11c3QgaGF2ZSBhIG5hbWUnKVxuICAgIH1cbiAgICAvLyBoYW5kbGUgY2xpY2tfc2VsZWN0b3JcbiAgICBsZXQgY2xpY2tfZWxlbWVudDogRWxlbWVudCB8IG51bGxcbiAgICBpZiAocmVjaXBlLmNsaWNrX3NlbGVjdG9yKSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5jbGlja19zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG4gICAgaWYgKGNsaWNrX2VsZW1lbnQpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2stZWxlbWVudCBub3QgZm91bmQnLCBlbGVtZW50LCByZWNpcGUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpXG4gICAgaWYgKFsndGV4dCcsICdudW1iZXInXS5pbmNsdWRlcyhpbnB1dFR5cGUpKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICB9IGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5pbnB1dF9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIC8vICoqSGFuZGxlIHNlbGVjdCBlbGVtZW50cyoqXG4gIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgIC8vIFRhZyB0aGUgc2VsZWN0IGVsZW1lbnQgd2l0aCBkYXRhLXNlbGVjdC1pZFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdC1pZCcsIGVsZW1lbnROYW1lKVxuXG4gICAgY29uc3Qgc2VsZWN0SWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKVxuXG4gICAgY29uc3QgbmFtZUlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxuXG4gICAgY29uc3QgdGFnID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtYnV0dG9uLWRyb3Bkb3duIHNwYW4uYS1idXR0b24tdGV4dCcpXG4gICAgY29uc3QgbmV3VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgbmV3VGFnLnRleHRDb250ZW50ID0gdGFnLnRleHRDb250ZW50XG4gICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnROYW1lICsgJy5vcGVuX2Ryb3BfZG93bl9saXN0J1xuICAgIG5ld1RhZy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0YWdOYW1lKVxuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgdGFnTmFtZSkgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcblxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3VGFnKVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaWRePVwiJyArIHNlbGVjdElkICsgJ1wiXScpXG4gICAgb3B0aW9ucy5mb3JFYWNoKGFzeW5jIChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLnRleHRDb250ZW50LnRyaW0oKVxuICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnROYW1lICsgJy4nICsgb3B0aW9uVmFsdWVcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50XG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvblZhbHVlKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsIG9wdGlvbk5hbWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSlcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgb3B0aW9uTmFtZSkgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKVxuICAgIH0pXG4gIH1cbiAgLy8gQ29weSBzcGVjaWZpZWQgYXR0cmlidXRlc1xuICBjb25zdCBhdHRyc1RvQ29weSA9IFtcbiAgICAnYWx0JyxcbiAgICAndGl0bGUnLFxuICAgICd0eXBlJyxcbiAgICAndmFsdWUnLFxuICAgICdyb2xlJyxcbiAgICAnYXJpYS1sYWJlbCcsXG4gICAgJ2FyaWEtaGlkZGVuJyxcbiAgICAnYXJpYS1zZWxlY3RlZCdcbiAgXVxuICBhdHRyc1RvQ29weS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuICB9KVxuICBpZiAocmVjaXBlLmtlZXBfYXR0cikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlcyB0byBrZWVwOiBcIiwgcmVjaXBlLmtlZXBfYXR0cik7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcmVjaXBlLmtlZXBfYXR0cikge1xuICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpXG4gICAgICAvLyBjb25zb2xlLmxvZyhrZXksIHZhbHVlKVxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChyZWNpcGVbJ2NsYXNzJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZWNpcGVbJ2NsYXNzJ10pXG4gIH1cbiAgaWYgKHJlY2lwZVsnaWQnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHJlY2lwZVsnaWQnXSlcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIGF0dHJpYnV0ZXMgaWYgc3BlY2lmaWVkXG4gIGlmIChyZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHJlY2lwZS5vdmVycmlkZV9hdHRyW2tleV0oZWxlbWVudCkpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJvY2VzcyBjaGlsZHJlblxuICBpZiAocmVjaXBlLmNoaWxkcmVuICYmIHJlY2lwZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChjb25zdCBjaGlsZFJlY2lwZSBvZiByZWNpcGUuY2hpbGRyZW4pIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2hpbGRSZWNpcGUuZGlyZWN0X2NoaWxkXG4gICAgICAgID8gYDpzY29wZSA+ICR7Y2hpbGRSZWNpcGUuc2VsZWN0b3J9YFxuICAgICAgICA6IGNoaWxkUmVjaXBlLnNlbGVjdG9yXG4gICAgICBsZXQgY2hpbGRFbGVtZW50c1xuICAgICAgaWYgKGNoaWxkUmVjaXBlLnVzZV9yb290KSB7XG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgICBjb25zb2xlLmxvZygndXNlIHJvb3QgZm9yICcsIGNoaWxkRWxlbWVudHMpXG4gICAgICB9IGVsc2UgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gcHJvY2Vzc0VsZW1lbnQoY2hpbGRFbGVtZW50LCBjaGlsZFJlY2lwZSwgcGFyZW50TmFtZSwgaW5kZXgpXG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZXMsIGNoZWNrX3VzZXJfaWRfdXJsIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKCEoYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpKSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YSgpIHtcbiAgY29uc3QgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtWaWV3YWJsZUVsZW1lbnRzKCkge1xuICAvLyBDcmVhdGUgYSBjb3B5IG9mIHRoZSBkb2N1bWVudFxuXG4gIC8vIFNlbGVjdCBhbGwgZWxlbWVudHNcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGluVmlld3BvcnQgPVxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsIGluVmlld3BvcnQgPyAndHJ1ZScgOiAnZmFsc2UnKVxuICB9KVxufVxuXG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSgpIHtcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgbGV0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWVcbiAgcGF0aCA9IHBhdGggIT09ICcvJyA/IHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJykgOiBwYXRoXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4gICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICBpZiAocmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcmVjaXBlLm1hdGNoX3dpdGhfcmVmICYmXG4gICAgICAgIChwYXRoLnN0YXJ0c1dpdGgocmVjaXBlLm1hdGNoICsgJy9yZWY9JykgfHwgcGF0aC5zdGFydHNXaXRoKHJlY2lwZS5tYXRjaCArICdyZWY9JykpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlY2lwZSgpIHtcbiAgY29uc29sZS5sb2coJ3N0YXJ0IHByb2Nlc3MgcmVjaXBlJylcbiAgdHJ5IHtcbiAgICBjb25zdCByZWNpcGUgPSBzZWxlY3RSZWNpcGUoKVxuICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSlcbiAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gbmV3Um9vdC5vdXRlckhUTUxcbiAgICAgIHJldHVybiBzaW1wbGlmaWVkSFRNTFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwcm9jZXNzaW5nIHJlY2lwZTonLCBlcnJvcilcbiAgfVxufVxuXG4vLyBSZXBsYWNlIHRoZSBzaW1wbGUgcXVlc3Rpb24gd2l0aCBhIG1vcmUgZGV0YWlsZWQgb25lIGJhc2VkIG9uIGV2ZW50IHR5cGVcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihcbiAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gIGRhdGE6IGFueVxuKTogeyBxdWVzdGlvbjogc3RyaW5nOyBwbGFjZWhvbGRlcjogc3RyaW5nIH0ge1xuICBsZXQgcXVlc3Rpb24gPSAnJ1xuICBsZXQgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlICdjbGlja19hJzpcbiAgICBjYXNlICdjbGlja19iJzpcbiAgICBjYXNlICdjbGlja19jJzpcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5zdWJzY3JpYmVfc2F2ZV8ucHVyY2hhc2VfZm9ybS5zZXRfdXBfbm93JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93J1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZXQgdXAgbm93IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBzdWJzY3JpYmUgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIGJ1eSBub3cgYnV0dG9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcGFydGljdWxhciBwcm9kdWN0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBhbSBidXlpbmcgdGhpcyBwcm9kdWN0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3NlYXJjaF9yZXN1bHRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9saXN0LicpIHx8XG4gICAgICAgIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2FjdGl2ZV9pdGVtX2xpc3QuJykgJiZcbiAgICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCcucHJvZHVjdF9kZXRhaWwnKSkgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIHByb2R1Y3QuIFdoYXQgY2F1Z2h0IHlvdXIgYXR0ZW50aW9uIGNvbXBhcmVkIHRvIHRoZSBvdGhlciBvcHRpb25zIHlvdSBzYXc/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGxpa2UgdGhpcyBwcm9kdWN0IGJlY2F1c2XDny4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2FkZF90b19jYXJ0JykgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0Lm5hbWUgPT09ICdzdWJtaXQuYWRkVG9DYXJ0JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdBZGQgdG8gQ2FydCdcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYWRkIHRvIGNhcnQgYnV0dG9uLiBXaGF0IG1ha2VzIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFkZCB0aGlzIGl0ZW0gdG8gbXkgY2FydCBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICduYXZfYmFyLnNlYXJjaF9idXR0b24nKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZWFyY2ggYnV0dG9uLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncmVmaW5lbWVudHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdmaWx0ZXJzLicpXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBmaWx0ZXIuIFdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZCB3aXRoIHRoaXMgZmlsdGVyPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3Rfb3B0aW9ucy4nKSkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIHByb2R1Y3Qgb3B0aW9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcHJvZHVjdCBvcHRpb24/J1xuICAgICAgICBpZiAoZGF0YVsnZWxlbWVudC1tZXRhLW5hbWUnXSA9PT0gJ3Byb2R1Y3Rfb3B0aW9ucycgJiYgZGF0YVsnZWxlbWVudC1tZXRhLWRhdGEnXSAhPT0gJycpIHtcbiAgICAgICAgICBxdWVzdGlvbiA9IGBZb3UgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Y2xpY2tlZDwvc3Bhbj4gb24gJHtkYXRhWydlbGVtZW50LW1ldGEtZGF0YSddWyd2YWx1ZSddfS4gV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHByb2R1Y3Qgb3B0aW9uP2BcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGxpa2UgdGhpcyBwcm9kdWN0IG9wdGlvbiBiZWNhdXNlLi4uw58nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2NoZWNrX291dCcpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IGNoZWNrb3V0IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIGNoZWNrb3V0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBjaG9vc2UgdG8gY2hlY2tvdXQgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgZWxlbWVudC4gQ291bGQgeW91IHNoYXJlIHdoYXQgeW91IHdlcmUgdHJ5aW5nIHRvIGRvIG9yIGZpbmQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAnWW91IDxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1wiPnNjcm9sbGVkPC9zcGFuPiBvbiB0aGlzIHBhZ2UuIFdoYXQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj50eXBlZDwvc3Bhbj4gaW4gdGhpcyBpbnB1dCBmaWVsZC4gV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+Z28gYmFjazwvc3Bhbj4gdG8gdGhlIHByZXZpb3VzIHBhZ2U/J1xuICAgICAgICBwbGFjZWhvbGRlciA9IFwiSSdtIGJhY2sgYmVjYXVzZS4uLlwiXG4gICAgICB9IGVsc2UgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdmb3J3YXJkJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5yZXR1cm48L3NwYW4+IHRvIHRoaXMgcGFnZSA/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9XG4gICAgICBxdWVzdGlvbiA9IGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgPHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XCI+JHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uPC9zcGFuPj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICBxdWVzdGlvbiA9IGBXaHkgZGlkIHlvdSA8c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIj5zd2l0Y2ggdG8gdGhpcyB0YWI8L3NwYW4+P2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0kgc3dpdGNoZWQgdG8gdGhpcyB0YWIgYmVjYXVzZS4uLidcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHF1ZXN0aW9uID0gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlICR7ZXZlbnRUeXBlfSBhY3Rpb24/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIHsgcXVlc3Rpb24sIHBsYWNlaG9sZGVyIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSZWFzb24ocmVhc29uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFyZWFzb24gfHwgcmVhc29uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gRW1wdHkgaW5wdXRcbiAgfVxuICBpZiAocmVhc29uLnRyaW0oKS5sZW5ndGggPCAyIHx8IHJlYXNvbi5sZW5ndGggPCA1KSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIFRvbyBzaG9ydCB0byBiZSBtZWFuaW5nZnVsLCBhdCBsZWFzdCA1IGNoYXJhY3RlcnMgYW5kIDIgd29yZHNcbiAgfVxuICAvLyBDaGVjayBmb3IgcmVwZXRpdGl2ZSBvciBtZWFuaW5nbGVzcyBpbnB1dCAoZS5nLiwgXCJhYWFcIixcIiEhIVwiKVxuICBjb25zdCBtZWFuaW5nbGVzc1BhdHRlcm5zID0gWy9eKC4pXFwxezMsfSQvLCAvXlteYS16QS1aMC05XSskL11cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIG1lYW5pbmdsZXNzUGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybi50ZXN0KHJlYXNvbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGZpbmRQYWdlTWV0YSxcbiAgaXNGcm9tUG9wdXAsXG4gIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCxcbiAgc2hvdWxkRXhjbHVkZSxcbiAgZ2VuZXJhdGVIdG1sU25hcHNob3RJZCxcbiAgcHJvY2Vzc1JlY2lwZSxcbiAgaXNWYWxpZFJlYXNvbixcbiAgTWFya1ZpZXdhYmxlRWxlbWVudHNcbn0gZnJvbSAnLi91dGlscy91dGlsJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IHNjcm9sbF90aHJlc2hvbGQgfSBmcm9tICcuL2NvbmZpZydcblxuYXN5bmMgZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgdXVpZFxuICAgIH0pXG5cbiAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8ICdTY3JlZW5zaG90IGNhcHR1cmUgZmFpbGVkJylcbiAgICB9XG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgIH0sXG4gICAgICAnKidcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3QgaW4gY29udGVudCBzY3JpcHQ6JywgZXJyb3IpXG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfSxcbiAgICAgICcqJ1xuICAgIClcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpIHJldHVyblxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICBjb25zdCB1c2VySWQgPSByZXN1bHQudXNlcklkXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJywgdXNlcklkOiB1c2VySWQgfSwgJyonKVxuICB9XG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FQVFVSRV9TQ1JFRU5TSE9UJykge1xuICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KGV2ZW50LmRhdGEudGltZXN0YW1wLCBldmVudC5kYXRhLnV1aWQpXG4gIH1cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFGb3JCYWNrZ3JvdW5kID0geyAuLi5ldmVudC5kYXRhLmRhdGEgfVxuXG4gICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogJ3NhdmVEYXRhJyxcbiAgICAgICAgZGF0YTogZGF0YUZvckJhY2tncm91bmRcbiAgICAgIH0pXG4gICAgICBpZiAoIXJlc3BvbnNlMi5zdWNjZXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZTIubWVzc2FnZSB8fCAnaW50ZXJhY3Rpb24gY2FwdHVyZSBmYWlsZWQnKVxuICAgICAgfVxuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGludGVyYWN0aW9uIGRhdGE6JywgZXJyb3IpXG4gICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcFxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIC8vIERlZmluZSBpbnRlcmZhY2VzIGZvciBSZWNpcGUgYW5kIE9yZGVyRGV0YWlsXG4gIGludGVyZmFjZSBSZWNpcGUge1xuICAgIHRhZ19uYW1lPzogc3RyaW5nXG4gICAgdGV4dF9zZWxlY3Rvcj86IHN0cmluZ1xuICAgIHRleHRfanM/OiBzdHJpbmdcbiAgICBhZGRfdGV4dD86IGJvb2xlYW5cbiAgICB0ZXh0X2Zvcm1hdD86IHN0cmluZ1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjbGlja2FibGU/OiBib29sZWFuXG4gICAgY2xpY2tfc2VsZWN0b3I/OiBzdHJpbmdcbiAgICBrZWVwX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgb3ZlcnJpZGVfYXR0cj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBjaGlsZHJlbj86IFJlY2lwZVtdXG4gICAgaW5zZXJ0X3NwbGl0X21hcmtlcj86IGJvb2xlYW5cbiAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5PzogbnVtYmVyXG4gICAgZGlyZWN0X2NoaWxkPzogYm9vbGVhblxuICAgIGVtcHR5X21lc3NhZ2U/OiBzdHJpbmdcbiAgICBba2V5OiBzdHJpbmddOiBhbnkgLy8gQWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gIH1cblxuICBpbnRlcmZhY2UgT3JkZXJEZXRhaWwge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHByaWNlOiBudW1iZXJcbiAgfVxuXG4gIC8vIEV4dGVuZCB0aGUgV2luZG93IGludGVyZmFjZSB0byBpbmNsdWRlIGN1c3RvbSBwcm9wZXJ0aWVzXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCBldmVudCB0cmlnZ2VyZWQnKVxuICAgIE1hcmtWaWV3YWJsZUVsZW1lbnRzKClcbiAgICBwcm9jZXNzUmVjaXBlKClcbiAgfSlcblxuICAvLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuICBhc3luYyBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgdGFyZ2V0OiBhbnksXG4gICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgdXVpZDogc3RyaW5nLFxuICAgIHdpbmRvd1NpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSxcbiAgICBzY3JvbGxEaXN0YW5jZT86IG51bWJlcixcbiAgICBzY3JvbGxDdXJyZW50VG9wPzogbnVtYmVyLFxuICAgIHNjcm9sbEN1cnJlbnRMZWZ0PzogbnVtYmVyLFxuICAgIHNjcm9sbERpc3RhbmNlX1g/OiBudW1iZXJcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgY29uc29sZS5sb2coJ3N0YXJ0IHRpbWU6JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKVxuICAgICAgTWFya1ZpZXdhYmxlRWxlbWVudHMoKVxuICAgICAgY29uc29sZS5sb2coJ2VuZCB0aW1lOicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSlcbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG5cbiAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLCAvLyBVc2UgdGhlIG5ldyBzbmFwc2hvdCBJRFxuICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgIGh0bWxDb250ZW50OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUxcbiAgICAgIH1cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdzY3JvbGwnKSB7XG4gICAgICAgIGRhdGFbJ3dpbmRvd1NpemUnXSA9IHdpbmRvd1NpemVcbiAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWSddID0gc2Nyb2xsRGlzdGFuY2VcbiAgICAgICAgZGF0YVsnc2Nyb2xsQ3VycmVudFRvcCddID0gc2Nyb2xsQ3VycmVudFRvcFxuICAgICAgICBkYXRhWydzY3JvbGxDdXJyZW50TGVmdCddID0gc2Nyb2xsQ3VycmVudExlZnRcbiAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWCddID0gc2Nyb2xsRGlzdGFuY2VfWFxuICAgICAgICBkYXRhWyd0YXJnZXQnXSA9IHRhcmdldFxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC12YWx1ZXMnXSA9IHRhcmdldD8udmFsdWUgfHwgJydcbiAgICAgICAgZGF0YVsnaW5wdXQtaWQnXSA9IHRhcmdldD8uaWQgfHwgJydcbiAgICAgICAgZGF0YVsnZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpIHx8ICcnXG4gICAgICAgIGRhdGFbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlRGF0YScsIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcilcbiAgICB9XG4gIH1cbiAgLy8gVmFyaWFibGVzIHRvIHRyYWNrIHNjcm9sbCBldmVudHNcbiAgbGV0IGlzU2Nyb2xsaW5nID0gZmFsc2VcbiAgbGV0IHNjcm9sbFRpbWVvdXQ6IG51bWJlciB8IHVuZGVmaW5lZFxuICBsZXQgc2Nyb2xsU3RhcnRUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICBsZXQgc2Nyb2xsU3RhcnRMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgbGV0IGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCA9IDBcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBmaXJzdCBzY3JvbGwgZXZlbnQgaW4gYSBzY3JvbGwgc2VxdWVuY2VcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmlyc3RTY3JvbGwoc2Nyb2xsVXVpZDogc3RyaW5nLCBzY3JvbGxUaW1lc3RhbXA6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyc3Qgc2Nyb2xsIGV2ZW50JylcbiAgICAgIGNhcHR1cmVTY3JlZW5zaG90KHNjcm9sbFRpbWVzdGFtcCwgc2Nyb2xsVXVpZClcbiAgICAgIHByb2Nlc3NSZWNpcGUoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgZmlyc3Qgc2Nyb2xsIGhhbmRsaW5nOicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuIHNjcm9sbGluZyBzdG9wcyAobm8gc2Nyb2xsIGV2ZW50cyB3aXRoaW4gdGhlIHRocmVzaG9sZClcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsU3RvcChzY3JvbGxVdWlkOiBzdHJpbmcsIHNjcm9sbFRpbWVzdGFtcDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGwgc3RvcCB1dWlkJywgc2Nyb2xsVXVpZClcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICs9IGN1cnJlbnRTY3JvbGxUb3AgLSBzY3JvbGxTdGFydFRvcFxuXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggKz0gY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxTdGFydExlZnRcblxuICAgICAgLy8gSU5TRVJUX1lPVVJfQ09ERVxuICAgICAgY29uc3Qgd2luZG93U2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfVxuICAgICAgaWYgKGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgIT09IDAgfHwgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YICE9PSAwKSB7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIGludGVyYWN0aW9uIHdpdGggdGhlIGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgc2Nyb2xsVGltZXN0YW1wLFxuICAgICAgICAgIHNjcm9sbFV1aWQsXG4gICAgICAgICAgd2luZG93U2l6ZSxcbiAgICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlLFxuICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AsXG4gICAgICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YLFxuICAgICAgICAgIGN1cnJlbnRTY3JvbGxMZWZ0XG4gICAgICAgIClcbiAgICAgICAgLy8gUmVzZXQgYWNjdW11bGF0ZWQgc2Nyb2xsIGRpc3RhbmNlXG4gICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgPSAwXG4gICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCA9IDBcbiAgICAgICAgc2Nyb2xsU3RhcnRUb3AgPSBjdXJyZW50U2Nyb2xsVG9wXG4gICAgICAgIHNjcm9sbFN0YXJ0TGVmdCA9IGN1cnJlbnRTY3JvbGxMZWZ0XG4gICAgICB9XG4gICAgICBpc1Njcm9sbGluZyA9IGZhbHNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzY3JvbGwgc3RvcCBoYW5kbGluZzonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICBsZXQgc2Nyb2xsVXVpZCA9ICcnXG4gIGxldCBzY3JvbGxUaW1lc3RhbXAgPSAnJ1xuICAvLyBFdmVudCBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50c1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2Nyb2xsIGV2ZW50JylcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgIT09IHdpbmRvdyAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudCAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGwgZXZlbnQgaWdub3JlZCBmcm9tIGEgbmVzdGVkIHNjcm9sbGFibGUgY29udGFpbmVyJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNTY3JvbGxpbmcpIHtcbiAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZVxuICAgICAgc2Nyb2xsU3RhcnRUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICBzY3JvbGxVdWlkID0gdXVpZHY0KClcbiAgICAgIHNjcm9sbFRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgYXdhaXQgaGFuZGxlRmlyc3RTY3JvbGwoc2Nyb2xsVXVpZCwgc2Nyb2xsVGltZXN0YW1wKVxuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyB0aW1lb3V0IGFuZCBzZXQgYSBuZXcgb25lXG4gICAgd2luZG93LmNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0KVxuICAgIHNjcm9sbFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICgpID0+IGhhbmRsZVNjcm9sbFN0b3Aoc2Nyb2xsVXVpZCwgc2Nyb2xsVGltZXN0YW1wKSxcbiAgICAgIHNjcm9sbF90aHJlc2hvbGRcbiAgICApIC8vIFRocmVzaG9sZCBvZiAzMDBtc1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGFsbCB0eXBlcyBvZiBvcmRlciBidXR0b25zXG4gICAgY29uc3QgcGxhY2VPcmRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2lucHV0W2lkPVwicGxhY2VPcmRlclwiXSwgaW5wdXRbaWQ9XCJ0dXJiby1jaGVja291dC1weW8tYnV0dG9uXCJdJ1xuICAgIClcbiAgICBjb25zdCBidXlOb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImJ1eS1ub3ctYnV0dG9uXCJdJylcbiAgICBjb25zdCBzZXR1cE5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uW2lkPVwicmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlXCJdJ1xuICAgIClcbiAgICBjb25zdCBwcm9jZWVkVG9DaGVja291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcm9jZWVkVG9SZXRhaWxDaGVja291dFwiXScpXG5cbiAgICAvLyBIYW5kbGUgQnV5IE5vdyBhbmQgU2V0IFVwIE5vdyBidXR0b25zIGlmIHByZXNlbnRcbiAgICA7W2J1eU5vd0J1dHRvbiwgc2V0dXBOb3dCdXR0b25dLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvID0ge1xuICAgICAgICAgICAgICB0aXRsZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0Py50cmltKCkgfHwgJycsXG4gICAgICAgICAgICAgIHByaWNlOlxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5J1xuICAgICAgICAgICAgICAgICAgKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICk/LmlubmVyVGV4dD8udHJpbSgpIHx8ICcnLFxuICAgICAgICAgICAgICBhc2luOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IGFsbCBvcHRpb24gc2VsZWN0aW9uc1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uUm93cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgICAgICAgICAgKHJvdy5xdWVyeVNlbGVjdG9yKCdsYWJlbC5hLWZvcm0tbGFiZWwnKSBhcyBIVE1MRWxlbWVudCk/LmlubmVyVGV4dD8ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICc6ICcsXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICkgfHwgJydcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocm93LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc2VsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgOyhwcm9kdWN0SW5mby5vcHRpb25zIGFzIGFueSlbbGFiZWxdID0gdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7YnV0dG9uLmlkfSBjbGlja2VkIC0gUHJvZHVjdCBJbmZvOmAsIHByb2R1Y3RJbmZvKVxuXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ3NhdmVPcmRlcicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdChwcm9kdWN0SW5mby5wcmljZS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSksXG4gICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBwcm9kdWN0SW5mby5vcHRpb25zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChwcm9jZWVkVG9DaGVja291dEJ1dHRvbikge1xuICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW11cbiAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJzYy1hY3RpdmUtXCJdJykpLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSAnc2MtYWN0aXZlLWNhcnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TGluayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJvZHVjdC10aXRsZS1jb250IC5zYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgICAgICAgICBpZiAocHJvZHVjdExpbmspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZUVsZW1lbnQgPSBwcm9kdWN0TGluay5xdWVyeVNlbGVjdG9yKCcuYS10cnVuY2F0ZS1mdWxsJylcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZnVsbE5hbWVFbGVtZW50Py50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gcHJvZHVjdExpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gaHJlZi5tYXRjaCgvcHJvZHVjdFxcLyhbQS1aMC05XXsxMH0pLyk/LlsxXSB8fCAnJ1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcmljZS1ibG9jayAuYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbGVtZW50XG4gICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQocHJpY2VFbGVtZW50LnRleHRDb250ZW50Py5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSB8fCAnMCcpXG4gICAgICAgICAgICAgICAgICA6IDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbkVsZW1lbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtcHJvZHVjdC12YXJpYXRpb24nKVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbkVsZW1lbnRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb24ucXVlcnlTZWxlY3RvcignLmEtdGV4dC1ib2xkJyk/LnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgnOicsICcnKSB8fFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmEtc2l6ZS1zbWFsbDpub3QoLmEtdGV4dC1ib2xkKScpXG4gICAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnXG4gICAgICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgYXNpbixcbiAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlT3JkZXInLCBkYXRhOiBzZWxlY3RlZEl0ZW1zIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4gICAgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgbWVzc2FnZSlcbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICAgIE1hcmtWaWV3YWJsZUVsZW1lbnRzKClcbiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaHRtbDogaHRtbENvbnRlbnQsIHBhZ2VNZXRhOiBwYWdlTWV0YSwgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MIH0pXG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93X3BvcHVwJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd19wb3B1cCcsIG1lc3NhZ2UpXG4gICAgICAgIC8vIGFzc2VydCB0aGVyZSBpc24ndCBhbHJlYWR5IGEgcG9wdXBcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAncG9wdXAgYWxyZWFkeSBleGlzdHMnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlTW9kYWwobWVzc2FnZS5xdWVzdGlvbiwgbWVzc2FnZS5wbGFjZWhvbGRlciwgc2VuZFJlc3BvbnNlKVxuICAgICAgICByZXR1cm4gdHJ1ZSAvLyBXaWxsIHJlc3BvbmQgYXN5bmNocm9ub3VzbHlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBmdW5jdGlvbiBjcmVhdGVNb2RhbChcbiAgICBxdWVzdGlvbjogc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWRcbiAgKSB7XG4gICAgY29uc3QgbW9kYWxIdG1sID0gYFxuICAgICAgICA8ZGl2IGlkPVwicmVhc29uLW1vZGFsXCIgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPGgzPiR7cXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZWFzb24taW5wdXRcIiBwbGFjZWhvbGRlcj1cIiR7cGxhY2Vob2xkZXJ9XCIgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImVycm9yLW1lc3NhZ2VcIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVhc29uLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1za2lwXCI+U2tpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBtb2RhbEh0bWxcbiAgICAvLyBpZiBhdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQgZXhpc3RzXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQ6bm90KC5hb2staGlkZGVuKScpKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJylcbiAgICAgICAgLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuXG4gICAgICBpZiAoIWlzVmFsaWRSZWFzb24odmFsdWUpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAvLyBTaG93IHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgIHJldHVybiAvLyBQcmV2ZW50IHN1Ym1pc3Npb24gaWYgdGhlIHJlYXNvbiBpcyBpbnZhbGlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBIaWRlIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICB9XG5cbiAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc2tpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKClcbiAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiBudWxsIH0pXG4gICAgfSlcbiAgfVxufVxuc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZikudGhlbigocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjb250ZW50IHNjcmlwdCwgc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB3b3JrKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJwb3B1cF9wcm9iYWJpbGl0eSIsInBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSIsInBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5IiwicG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSIsInBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5IiwiZm9sZGVyX25hbWUiLCJ6aXAiLCJ1cGxvYWRfdXJsIiwiYmFzZV91cmwiLCJkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQiLCJ1cmxfaW5jbHVkZXMiLCJpbnRlcmFjdGlvbl9zdGF0dXNfdXJsIiwiY29uY2F0IiwiY2hlY2tfdXNlcl9pZF91cmwiLCJmaWx0ZXJfdXJsIiwic2Nyb2xsX3RocmVzaG9sZCIsIm5hdiIsInNlbGVjdG9yIiwibmFtZSIsImNoaWxkcmVuIiwiY2xpY2thYmxlIiwiZ2VuZXJhdGVfbWV0YWRhdGEiLCJlbSIsInRlcm0iLCJ2YWx1ZSIsImRhdGEiLCJ0ZXh0X3NlbGVjdG9yIiwiYWRkX3RleHQiLCJyZWZpbmVtZW50X29wdGlvbiIsImRpcmVjdF9jaGlsZCIsInRleHRfanMiLCJlbGVtZW50IiwidGV4dCIsImFDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJ0cmltIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJfZWxlbWVudCRjbG9zZXN0IiwiX25hbWVFbSRpbm5lclRleHQiLCJfdGV4dDIiLCJuYW1lRW0iLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidXJsIiwiX3RleHQiLCJ0aXRsZSIsInNlbGVjdGVkIiwiX2VsZW1lbnQkY2xvc2VzdDIiLCJfbmFtZUVtJGlubmVyVGV4dDIiLCJfdGV4dDQiLCJfdGV4dDMiLCJwcm9kdWN0X2ZhY3RzIiwicHJvZHVjdF9kZWxpdmVyeSIsInF1YW50aXR5X3NlbGVjdG9yIiwidXNlX3Jvb3QiLCJ0ZXh0X2Zvcm1hdCIsImRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvciIsInNldF91cF9ub3dfYnV0dG9uIiwiYWRkX3RvX2NhcnRfYnV0dG9uIiwiYnV5X25vd19idXR0b24iLCJidXlfYm94X3dpdGhfYWNjb3JkaW9uIiwiYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSIsImJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCIsImNhcnQiLCJfZW0kcGFyZW50RWxlbWVudCIsIl9wcmljZUVtJGlubmVyVGV4dCIsImFzaW4iLCJwcmljZUVtIiwicHJpY2UiLCJ0aXRsZUVtIiwidXJsRW0iLCJkZWxpdmVyeUVtIiwiZGVsaXZlcnkiLCJxdWFudGl0eUVtIiwicXVhbnRpdHkiLCJzZWxlY3RlZEVtIiwiZnJlc2hfY2FydCIsIl9lbSRwYXJlbnRFbGVtZW50MiIsIl9wcmljZUVtJGlubmVyVGV4dDIiLCJidXlfYWdhaW4iLCJfZW0kY2xvc2VzdCIsIl9uYW1lRW0kaW5uZXJUZXh0MyIsImlucHV0IiwiY2hlY2tlZCIsIl9wcmljZUVtJGlubmVyVGV4dDMiLCJhc2luRW0iLCJfZW0kcGFyZW50RWxlbWVudDMiLCJfcHJpY2VFbSRpbm5lclRleHQ0IiwiX2VtJHBhcmVudEVsZW1lbnQ0IiwiX2VtJHBhcmVudEVsZW1lbnQ1IiwiX2VtJHBhcmVudEVsZW1lbnQ2IiwiX2FzaW5FbTIiLCJfcHJpY2VFbSRpbm5lclRleHQ1IiwiX2VtJHBhcmVudEVsZW1lbnQ3IiwiX2VtJHBhcmVudEVsZW1lbnQ4IiwiX2FzaW5FbTMiLCJfZW0kY2xvc2VzdDIiLCJfcGFyZW50VGl0bGVFbSRpbm5lclQiLCJfcHJpY2VFbSRpbm5lclRleHQ2IiwicGFyZW50VGl0bGVFbSIsInBhcmVudFRpdGxlIiwicmVjaXBlcyIsIm1hdGNoIiwibWF0Y2hfbWV0aG9kIiwibWF0Y2hfd2l0aF9yZWYiLCJfZW0kaW5uZXJUZXh0IiwiX2VtJGlubmVyVGV4dDIiLCJfZW0kaW5uZXJUZXh0MyIsInJhbmdlIiwia2VlcF9hdHRyIiwib3ZlcnJpZGVfYXR0ciIsInN0ZXBfdmFsdWVzIiwiZm9ybUVtIiwicHJvcCIsInN0ZXBzIiwiSlNPTiIsInBhcnNlIiwic3RlcExhYmVscyIsImN1cnJlbnRfdmFsdWUiLCJOdW1iZXIiLCJwYXJzZUludCIsImluc2VydF9zcGxpdF9tYXJrZXIiLCJpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IiwiY2xpY2tfc2VsZWN0b3IiLCJtYXRjaF90ZXh0IiwiX2VtJGlubmVyVGV4dDQiLCJfZW0kaW5uZXJUZXh0NSIsIl9lbSRxdWVyeVNlbGVjdG9yIiwiX2VtJHF1ZXJ5U2VsZWN0b3IyIiwibGFiZWwiLCJpbm5lckhUTUwiLCJ1bmRlZmluZWQiLCJfZW0kcXVlcnlTZWxlY3RvcjMiLCJvcHRpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJvcHRpb24iLCJlcnIiLCJmIiwiaW1nQ2hpbGQiLCJhbHQiLCJfZW0kcXVlcnlTZWxlY3RvcjQiLCJfZW0kcXVlcnlTZWxlY3RvcjUiLCJfZW0kcXVlcnlTZWxlY3RvcjYiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidGV4dEVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiX2VtJHF1ZXJ5U2VsZWN0b3I3IiwiX2VtJHF1ZXJ5U2VsZWN0b3I4IiwiX2VtJGlubmVyVGV4dDYiLCJidWxsZXRfbGlzdCIsInRlcm1pbmF0ZSIsImFyZ3VtZW50cyIsInRlcm1pbmF0ZV9jYWxsYmFjayIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwicHJvY2Vzc0VsZW1lbnQiLCJyZWNpcGUiLCJwYXJlbnROYW1lIiwibnRoQ2hpbGQiLCJ0YWdOYW1lIiwidGFnX25hbWUiLCJlbmRzV2l0aCIsIm5ld0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50VGV4dCIsInRleHRFbGVtZW50IiwidGV4dENvbnRlbnQiLCJlbGVtZW50TmFtZSIsInRvU3RyaW5nIiwic2V0QXR0cmlidXRlIiwibWV0YW9iaiIsIm1ldGFkYXRhIiwic3RyaW5naWZ5IiwibWV0YW5hbWUiLCJjbGlja19lbGVtZW50Iiwid2luZG93IiwiY2xpY2thYmxlX3JlY2lwZXMiLCJpbnB1dFR5cGUiLCJpbmNsdWRlcyIsImlucHV0X3JlY2lwZXMiLCJfZWxlbWVudCRwYXJlbnRFbGVtZW4iLCJzZWxlY3RJZCIsIm5hbWVJZCIsInRhZyIsIm5ld1RhZyIsImFwcGVuZENoaWxkIiwiX3JlZiIsIl9jYWxsZWUiLCJvcHRpb25WYWx1ZSIsIm9wdGlvbk5hbWUiLCJuZXdPcHRpb24iLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX3giLCJhdHRyc1RvQ29weSIsImF0dHIiLCJrZXkiLCJfbG9vcCIsImNoaWxkUmVjaXBlIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsImluZGV4IiwiY2hpbGROb2RlIiwiZXZlcnkiLCJzcGxpdE1hcmtlciIsImVtcHR5X21lc3NhZ2UiLCJlbXB0eVRleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNGcm9tUG9wdXAiLCJ1cGRhdGVfaWNvbiIsIl91cGRhdGVfaWNvbiIsInNob3VsZEV4Y2x1ZGUiLCJjaHJvbWUiLCJhY3Rpb24iLCJzZXRJY29uIiwicGF0aCIsImZpbmRQYWdlTWV0YSIsImFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhIiwiZ3JvdXBlZFJlc3VsdCIsIm1ldGFOYW1lIiwibWV0YURhdGEiLCJnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQiLCJkb2N1bWVudENvcHkiLCJjbG9uZU5vZGUiLCJhbGxFbGVtZW50cyIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hcmtWaWV3YWJsZUVsZW1lbnRzIiwiaW5WaWV3cG9ydCIsInJlbW92ZUNsaWNrYWJsZU1hcmtlcnMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfeDIiLCJfc2hvdWxkRXhjbHVkZSIsIl9jYWxsZWUyIiwiaWdub3JlVXNlcklkIiwicmVzdWx0IiwidXNlcklkIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiaGFuZGxlTWVzc2FnZSIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3N0TWVzc2FnZSIsInNvbWUiLCJpbmNsdWRlVXJsIiwiZXhjbHVkZVVybCIsImdlbmVyYXRlSHRtbFNuYXBzaG90SWQiLCJ0aW1lc3RhbXAiLCJ1dWlkIiwibG9jYXRpb24iLCJocmVmIiwiaGFzaENvZGUiLCJzdHIiLCJoYXNoIiwiY2hhckNvZGVBdCIsImNoZWNrX3VzZXJfaWQiLCJfeDMiLCJfY2hlY2tfdXNlcl9pZCIsIl9jYWxsZWUzIiwidXNlcl9pZCIsInJlc3BvbnNlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZmV0Y2giLCJqc29uIiwib2siLCJ0MCIsIm1lc3NhZ2UiLCJzZWxlY3RSZWNpcGUiLCJwYXJzZWRVcmwiLCJVUkwiLCJwYXRobmFtZSIsIm1hdGNoTWV0aG9kIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQkIiwiX2VsZW1lbnQkdGV4dENvbnRlbnQiLCJoYXNNYXRjaCIsImVycm9yIiwic3RhcnRzV2l0aCIsInByb2Nlc3NSZWNpcGUiLCJyb290RWxlbWVudCIsIm5ld1Jvb3QiLCJzaW1wbGlmaWVkSFRNTCIsIm91dGVySFRNTCIsImdldEN1c3RvbVF1ZXN0aW9uIiwiZXZlbnRUeXBlIiwiX2RhdGEkZGF0YVNlbWFudGljSSIsIl9kYXRhJGRhdGFTZW1hbnRpY0kyIiwiX2RhdGEkZGF0YVNlbWFudGljSTMiLCJfZGF0YSRkYXRhU2VtYW50aWNJNCIsIl9kYXRhJHRhcmdldCRjbGFzc05hbSIsIl9kYXRhJGRhdGFTZW1hbnRpY0k1IiwiX2RhdGEkZGF0YVNlbWFudGljSTYiLCJfZGF0YSRkYXRhU2VtYW50aWNJNyIsIl9kYXRhJGRhdGFTZW1hbnRpY0k4IiwiX2RhdGEkZGF0YVNlbWFudGljSTkiLCJxdWVzdGlvbiIsInBsYWNlaG9sZGVyIiwidGFyZ2V0IiwiaWQiLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uVHlwZSIsImlzVmFsaWRSZWFzb24iLCJyZWFzb24iLCJtZWFuaW5nbGVzc1BhdHRlcm5zIiwiX2kiLCJfbWVhbmluZ2xlc3NQYXR0ZXJucyIsInBhdHRlcm4iLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsInY0IiwidXVpZHY0IiwiY2FwdHVyZVNjcmVlbnNob3QiLCJfY2FwdHVyZVNjcmVlbnNob3QiLCJfY2FsbGVlOCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInN1Y2Nlc3MiLCJkYXRhRm9yQmFja2dyb3VuZCIsInJlc3BvbnNlMiIsInNvdXJjZSIsIndvcmsiLCJjYXB0dXJlSW50ZXJhY3Rpb24iLCJfeDQiLCJfeDUiLCJfeDYiLCJfeDciLCJfeDgiLCJfeDkiLCJfeDEwIiwiX3gxMSIsIl94MTIiLCJfY2FwdHVyZUludGVyYWN0aW9uIiwiX2NhbGxlZTUiLCJ3aW5kb3dTaXplIiwic2Nyb2xsRGlzdGFuY2UiLCJzY3JvbGxDdXJyZW50VG9wIiwic2Nyb2xsQ3VycmVudExlZnQiLCJzY3JvbGxEaXN0YW5jZV9YIiwiY3VycmVudFNuYXBzaG90SWQiLCJwYWdlTWV0YSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NiIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImh0bWxTbmFwc2hvdElkIiwiaHRtbENvbnRlbnQiLCJpc1Njcm9sbGluZyIsInNjcm9sbFRpbWVvdXQiLCJzY3JvbGxTdGFydFRvcCIsInNjcm9sbFkiLCJzY3JvbGxUb3AiLCJhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlIiwic2Nyb2xsU3RhcnRMZWZ0Iiwic2Nyb2xsWCIsInNjcm9sbExlZnQiLCJhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1giLCJoYW5kbGVGaXJzdFNjcm9sbCIsIl94MTMiLCJfeDE0IiwiX2hhbmRsZUZpcnN0U2Nyb2xsIiwiX2NhbGxlZTYiLCJzY3JvbGxVdWlkIiwic2Nyb2xsVGltZXN0YW1wIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ3IiwiaGFuZGxlU2Nyb2xsU3RvcCIsIl94MTUiLCJfeDE2IiwiX2hhbmRsZVNjcm9sbFN0b3AiLCJfY2FsbGVlNyIsImN1cnJlbnRTY3JvbGxUb3AiLCJjdXJyZW50U2Nyb2xsTGVmdCIsIl9jYWxsZWU3JCIsIl9jb250ZXh0OCIsIndpZHRoIiwiaGVpZ2h0IiwiX3JlZjIiLCJnZXRFbGVtZW50QnlJZCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJfeDE3IiwicGxhY2VPcmRlckJ1dHRvbnMiLCJidXlOb3dCdXR0b24iLCJzZXR1cE5vd0J1dHRvbiIsInByb2NlZWRUb0NoZWNrb3V0QnV0dG9uIiwiYnV0dG9uIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCJwcm9kdWN0SW5mbyIsIm9wdGlvblJvd3MiLCJyb3ciLCJfcm93JHF1ZXJ5U2VsZWN0b3IiLCJfcm93JHF1ZXJ5U2VsZWN0b3IyIiwicGFyc2VGbG9hdCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJzZWxlY3RlZEl0ZW1zIiwiY2FydEl0ZW1zIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ1IiwiaXRlbSIsImNoZWNrYm94IiwicHJvZHVjdExpbmsiLCJfZnVsbE5hbWVFbGVtZW50JHRleHQiLCJfaHJlZiRtYXRjaCIsIl9wcmljZUVsZW1lbnQkdGV4dENvbiIsImZ1bGxOYW1lRWxlbWVudCIsInByaWNlRWxlbWVudCIsInZhcmlhdGlvbkVsZW1lbnRzIiwiX2xvb3AkIiwiX2NvbnRleHQ0IiwidmFyaWF0aW9uIiwiX3ZhcmlhdGlvbiRxdWVyeVNlbGVjIiwiX3ZhcmlhdGlvbiRxdWVyeVNlbGVjMiIsInQxIiwidDIiLCJfeDE4Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJodG1sIiwiY3JlYXRlTW9kYWwiLCJtb2RhbEh0bWwiLCJtb2RhbENvbnRhaW5lciIsImJvZHkiLCJlcnJvck1lc3NhZ2UiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9
