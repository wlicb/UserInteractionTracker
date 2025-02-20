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
/* harmony export */   rationale_status_url: () => (/* binding */ rationale_status_url),
/* harmony export */   scroll_threshold: () => (/* binding */ scroll_threshold),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_includes: () => (/* binding */ url_includes),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
const popup_probability = 0.15;
const popup_scroll_probability = 0.1;
const popup_click_probability = 0.2;
const popup_navigation_probability = 0.15;
const popup_tabActivate_probability = 0.15;
const folder_name = `user_interaction_data`;
const zip = true;
const upload_url = 'http://userdatacollect.hailab.io/upload';
const base_url = 'http://userdatacollect.hailab.io';
const data_collector_secret_id = 'hailab';
const url_includes = ['www.amazon.com'];
const interaction_status_url = `${base_url}/interactions_record_status`;
const rationale_status_url = `${base_url}/rationale_status`;
const check_user_id_url = `${base_url}/check_user_id`;
const filter_url = [
    'https://www.amazon.com/checkout/',
    'https://www.amazon.com/gp/buy/',
    'https://www.amazon.com/a/addresses',
    'https://www.amazon.com/cpe/yourpayments/',
    'https://www.amazon.com/ap/signin',
    'https://www.amazon.com/ap/cvf/',
    'https://www.amazon.com/ap/profile/',
    'https://www.amazon.com/ax/account/',
    'https://www.amazon.com/gp/product/handle-buy-box/',
    'https://www.amazon.com/gp/checkoutportal/',
    'https://www.amazon.com/gp/cart/desktop/',
    'https://www.amazon.com/gp/primecentral/editPaymentPreference'
];
const scroll_threshold = 300;


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
/* harmony export */   cart_side_bar: () => (/* binding */ cart_side_bar),
/* harmony export */   delivery_frequency_selector: () => (/* binding */ delivery_frequency_selector),
/* harmony export */   fresh_carousel_card: () => (/* binding */ fresh_carousel_card),
/* harmony export */   fresh_cart: () => (/* binding */ fresh_cart),
/* harmony export */   fresh_substitution_card: () => (/* binding */ fresh_substitution_card),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   product_delivery: () => (/* binding */ product_delivery),
/* harmony export */   product_facts: () => (/* binding */ product_facts),
/* harmony export */   quantity_selector: () => (/* binding */ quantity_selector),
/* harmony export */   recipes: () => (/* binding */ recipes),
/* harmony export */   refinement_option: () => (/* binding */ refinement_option),
/* harmony export */   set_up_now_button: () => (/* binding */ set_up_now_button)
/* harmony export */ });
const nav = {
    selector: '#navbar-main',
    name: 'nav_bar',
    children: [
        {
            selector: '#nav-search-bar-form',
            children: [
                {
                    selector: 'input#twotabsearchtextbox',
                    name: 'search_input',
                    clickable: true,
                    generate_metadata: (em) => {
                        const term = em === null || em === void 0 ? void 0 : em.value;
                        return { name: 'search_term', data: { term } };
                    }
                },
                {
                    selector: '#nav-search-submit-button',
                    clickable: true,
                    name: 'search_button'
                }
            ]
        },
        {
            selector: '#nav-link-accountList',
            text_selector: '#nav-link-accountList span.nav-line-2',
            add_text: true,
            clickable: true,
            name: 'account_and_list_button'
        },
        {
            selector: '#nav-orders',
            add_text: true,
            clickable: true,
            name: 'order_button'
        },
        {
            selector: '#nav-cart',
            text_selector: '#nav-cart .nav-line-2',
            add_text: true,
            clickable: true,
            name: 'cart_button'
        },
        {
            selector: '#nav-flyout-searchAjax',
            name: 'suggested_terms',
            children: [
                {
                    selector: 'div.s-suggestion-ellipsis-direction',
                    name: 'from_text',
                    add_text: true,
                    clickable: true
                }
            ]
        }
    ]
};
const cart_side_bar = {
    selector: '#nav-flyout-ewc',
    name: 'cart_side_bar',
    children: [
        {
            selector: 'div.ewc-cart-header',
            add_text: true
        },
        {
            selector: 'div.ewc-compact-actions a',
            add_text: true,
            clickable: true,
            name: 'go_to_cart'
        },
        {
            selector: '#ewc-compact-body ul',
            name: 'product_list',
            children: [
                {
                    selector: "li div[id^='sc-item']",
                    name: 'from_text',
                    text_js: (em) => {
                        const titleEm = em.querySelector('div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)');
                        return (titleEm === null || titleEm === void 0 ? void 0 : titleEm.alt) || '';
                    },
                    children: [
                        {
                            selector: 'div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)',
                            name: 'product_image',
                            clickable: true,
                            add_text: true,
                            text_format: 'Product Image'
                        },
                        {
                            selector: 'span.ewc-unit-price',
                            add_text: true
                        },
                        {
                            selector: 'select',
                            name: 'drop_down_list'
                        },
                        {
                            selector: 'div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"]',
                            name: 'drop_down_list',
                            clickable: true,
                            add_text: true
                        },
                        {
                            selector: 'div.ewc-delete-icon-container button',
                            name: 'delete',
                            add_text: true,
                            text_format: 'delete',
                            clickable: true
                        }
                    ],
                    generate_metadata: (em) => {
                        var _a;
                        const asin = em.getAttribute('data-asin');
                        const priceEm = em.querySelector('span.ewc-unit-price');
                        const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '').trim();
                        const titleEm = em.querySelector('div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)');
                        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.alt;
                        const urlEm = titleEm === null || titleEm === void 0 ? void 0 : titleEm.parentElement;
                        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                        const quantityEm = em.querySelector('div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"]');
                        const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                        return {
                            name: 'cart_items',
                            data: { title, asin, price, url, quantity }
                        };
                    }
                }
            ]
        }
    ]
};
const refinement_option = [
    {
        selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
        add_text: true,
        class: 'refinement-title'
    },
    {
        selector: 'a.s-navigation-clear-link',
        add_text: true,
        name: 'clear_selection',
        clickable: true
    },
    {
        selector: 'ul > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)',
        add_text: true,
        name: 'from_text',
        clickable: true,
        // click_selector: "a",
        direct_child: true,
        text_js: function (element) {
            try {
                let text = '';
                if (!element) {
                    return text;
                }
                const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                if (element.innerText && element.innerText.trim()) {
                    text += element.innerText.trim();
                    if (aChild && aChild.hasAttribute('title')) {
                        text += ' ';
                        text += aChild.getAttribute('title');
                    }
                }
                else {
                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                    if (aChild && aChild.hasAttribute('title')) {
                        text += aChild.getAttribute('title');
                    }
                }
                if (aChild && aChild.getAttribute('aria-current') === 'true') {
                    // text = 'Clear Option ' + text
                }
                return text;
            }
            catch (e) {
                console.log(e);
                return '';
            }
        },
        generate_metadata: (element) => {
            var _a, _b, _c;
            let text = '';
            const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
            if (element.innerText && element.innerText.trim()) {
                text += element.innerText.trim();
                if (aChild && aChild.hasAttribute('title')) {
                    text += '_';
                    text += aChild.getAttribute('title');
                }
            }
            else {
                const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                if (aChild && aChild.hasAttribute('title')) {
                    text += aChild.getAttribute('title');
                }
            }
            const nameEm = (_b = (_a = element.closest('ul')) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstElementChild;
            const name = (_c = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _c === void 0 ? void 0 : _c.replace(/[ ]/g, '_').toLowerCase().trim();
            let url = '';
            if (aChild && aChild.hasAttribute('href')) {
                url = aChild.getAttribute('href');
            }
            if (aChild && aChild.getAttribute('aria-current') === 'true') {
                return {
                    name: 'refinements.' + name,
                    data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: true, url }
                };
            }
            return {
                name: 'refinements.' + name,
                data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: false, url }
            };
        },
        children: [
            {
                selector: "input[type='checkbox']"
            }
        ]
    },
    {
        selector: "ul > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
        name: 'more_options',
        children: [
            {
                selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
                name: 'toggle_expansion',
                add_text: true
            },
            {
                selector: 'li',
                add_text: true,
                name: 'from_text',
                clickable: true,
                // click_selector: "a",
                text_js: function (element) {
                    try {
                        let text = '';
                        if (!element) {
                            return text;
                        }
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                        if (element.innerText && element.innerText.trim()) {
                            text += element.innerText.trim();
                            if (aChild && aChild.hasAttribute('title')) {
                                text += ' ';
                                text += aChild.getAttribute('title');
                            }
                        }
                        else {
                            const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                            if (aChild && aChild.hasAttribute('title')) {
                                text += aChild.getAttribute('title');
                            }
                        }
                        if (aChild && aChild.getAttribute('aria-current') === 'true') {
                            // text = 'Clear Option ' + text
                        }
                        return text;
                    }
                    catch (e) {
                        console.log(e);
                        return '';
                    }
                },
                generate_metadata: (element) => {
                    var _a, _b, _c, _d, _e;
                    let text = '';
                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                    if (element.innerText && element.innerText.trim()) {
                        text += element.innerText.trim();
                        if (aChild && aChild.hasAttribute('title')) {
                            text += '_';
                            text += aChild.getAttribute('title');
                        }
                    }
                    else {
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                        if (aChild && aChild.hasAttribute('title')) {
                            text += aChild.getAttribute('title');
                        }
                    }
                    const nameEm = (_d = (_c = (_b = (_a = element.closest('ul')) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.closest('ul')) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.firstElementChild;
                    const name = (_e = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _e === void 0 ? void 0 : _e.replace(/[ ]/g, '_').toLowerCase().trim();
                    let url = '';
                    if (aChild && aChild.hasAttribute('href')) {
                        url = aChild.getAttribute('href');
                    }
                    if (aChild && aChild.getAttribute('aria-current') === 'true') {
                        return {
                            name: 'refinements.' + name,
                            data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: true, url }
                        };
                    }
                    return {
                        name: 'refinements.' + name,
                        data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: false, url }
                    };
                },
                children: [
                    {
                        selector: "input[type='checkbox']"
                    }
                ]
            }
        ]
    }
];
const product_facts = {
    selector: '#productFactsDesktopExpander',
    add_text: true,
    class: 'product-facts'
};
const product_delivery = {
    selector: 'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
    add_text: true,
    class: 'product-delivery'
};
const quantity_selector = {
    selector: '#selectQuantity, div[id^="qs-widget-button-container-atfc"]',
    name: 'quantity_selector',
    children: [
        {
            selector: 'label',
            add_text: true
        },
        {
            selector: 'span.a-dropdown-prompt',
            add_text: true,
            generate_metadata: (em) => {
                return { name: 'product_quantity', data: { quantity: em.innerText } };
            }
        },
        {
            selector: 'select',
            // clickable: true,
            name: 'drop_down_list'
        },
        {
            selector: 'button',
            name: 'drop_down_list',
            clickable: true,
            add_text: true
        },
        {
            selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
            add_text: true,
            clickable: true,
            use_root: true,
            name: 'from_text',
            text_format: 'Drop Down Option {}'
        }
    ]
};
const delivery_frequency_selector = {
    selector: '#replenishmentFrequency_feature_div',
    name: 'delivery_frequency_selector',
    text_selector: 'div.a-section.a-spacing-micro > span',
    add_text: true,
    children: [
        {
            selector: '#rcxOrdFreqOnmlWrapper span.a-dropdown-prompt',
            add_text: true
        },
        {
            selector: '#rcxOrdFreqOnmlWrapper select',
            // clickable: true,
            name: 'drop_down_list'
        }
    ]
};
const set_up_now_button = {
    selector: '#rcx-subscribe-submit-button-announce',
    add_text: true,
    clickable: true,
    name: 'set_up_now',
    class: 'product-set-up-now'
};
const add_to_cart_button = {
    selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb'], #freshAddToCartButton input",
    add_text: true,
    clickable: true,
    name: 'add_to_cart',
    class: 'product-add-to-cart'
};
const buy_now_button = {
    selector: "input[name='submit.buy-now']",
    add_text: true,
    clickable: true,
    name: 'buy_now',
    class: 'product-buy-now'
};
const buy_box_with_accordion = {
    selector: '#buyBoxAccordion > div.a-box.celwidget',
    name: 'from_text',
    text_selector: 'div.accordion-caption > span',
    children: [
        {
            selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header'], div[data-csa-c-content-id='offer_display_mobile_accordion_header']",
            name: 'accordion_selector',
            add_text: true,
            clickable: true,
            text_selector: 'h5 span.a-text-bold'
        },
        {
            selector: 'div.a-accordion-inner.accordion-row-content',
            name: 'purchase_form',
            children: [
                product_facts,
                product_delivery,
                quantity_selector,
                delivery_frequency_selector,
                set_up_now_button,
                add_to_cart_button,
                buy_now_button
            ]
        }
    ]
};
const buy_box_without_accordion_delivery = {
    selector: '#gsod_singleOfferDisplay_Desktop',
    children: [
        {
            selector: '#addToCart',
            name: 'purchase_form',
            children: [
                product_facts,
                product_delivery,
                quantity_selector,
                add_to_cart_button,
                buy_now_button
            ]
        }
    ]
};
const buy_box_without_accordion_pick_up = {
    selector: '#gsod_singleOfferDisplay_group_2_Desktop',
    children: [
        {
            selector: '#pickUpOfferDisplay',
            name: 'purchase_form',
            children: [
                product_facts,
                product_delivery,
                quantity_selector,
                add_to_cart_button,
                buy_now_button
            ]
        }
    ]
};
const cart = [
    nav,
    {
        selector: '#sc-collapsed-carts-container',
        name: 'cart',
        children: [
            {
                selector: 'div.sc-localmarket-text-logo',
                add_text: true
            },
            {
                selector: 'div[data-name="collapsed_item_list"]',
                clickable: true,
                name: 'item_list'
            },
            {
                selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
                clickable: true,
                name: 'check_out',
                add_text: true
            },
            {
                selector: 'div.sc-buy-box-inner-box a',
                clickable: true,
                name: 'from_text',
                add_text: true
            }
        ]
    },
    {
        selector: "div[data-name='Active Items']",
        name: 'active_item_list',
        children: [
            {
                selector: 'div.sc-list-item-content',
                text_selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                    {
                        selector: 'div.sc-item-check-checkbox-selector label',
                        clickable: true,
                        name: 'checkbox'
                    },
                    {
                        selector: 'div.sc-image-wrapper a',
                        clickable: true,
                        name: 'product_image',
                        add_text: true,
                        text_format: 'Product Image'
                    },
                    {
                        selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title',
                        clickable: true,
                        text_selector: 'span.a-truncate-full',
                        add_text: true,
                        name: 'product_detail'
                    },
                    {
                        selector: 'li.sc-delivery-messaging',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)',
                        add_text: true
                    },
                    {
                        selector: 'li.sc-product-variation',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-item-content-group span.sc-quantity-stepper',
                        children: [
                            {
                                selector: "button[aria-label='Decrease quantity by one']",
                                add_text: true,
                                text_js: function (element) {
                                    if (element.hasAttribute('aria-label')) {
                                        return element.getAttribute('aria-label');
                                    }
                                    return '';
                                },
                                clickable: true,
                                name: 'decrease_quantity_by_one'
                            },
                            {
                                selector: "div[role='spinbutton']",
                                add_text: true,
                                text_format: 'Current Quantity: {}'
                            },
                            {
                                selector: "button[aria-label='Increase quantity by one']",
                                add_text: true,
                                text_js: function (element) {
                                    if (element.hasAttribute('aria-label')) {
                                        return element.getAttribute('aria-label');
                                    }
                                    return '';
                                },
                                clickable: true,
                                name: 'increase_quantity_by_one'
                            }
                        ]
                    },
                    {
                        selector: "div.sc-item-content-group input[data-action='delete']",
                        add_text: true,
                        clickable: true,
                        name: 'delete'
                    },
                    {
                        selector: "div.sc-item-content-group input[data-action='save-for-later']",
                        add_text: true,
                        clickable: true,
                        name: 'save_for_later'
                    }
                ],
                generate_metadata: (em) => {
                    var _a, _b;
                    const asin = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                    const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)');
                    const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                    const titleEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const urlEm = em.querySelector('div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title');
                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                    const deliveryEm = em.querySelector('li.sc-delivery-messaging');
                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                    const quantityEm = em.querySelector("div.sc-item-content-group span.sc-quantity-stepper div[role='spinbutton']");
                    const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                    const selectedEm = em.querySelector('div.sc-item-check-checkbox-selector input');
                    const selected = (selectedEm === null || selectedEm === void 0 ? void 0 : selectedEm.getAttribute('checked')) !== null;
                    const optionsEm = em.querySelectorAll('li.sc-product-variation > span');
                    const options = [];
                    for (const optionEm of optionsEm) {
                        const optionKeyEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span.a-text-bold');
                        const optionValueEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span:not(.a-text-bold)');
                        const optionKey = optionKeyEm === null || optionKeyEm === void 0 ? void 0 : optionKeyEm.innerText.replace(/[:\n]/g, '').trim();
                        const optionValue = optionValueEm === null || optionValueEm === void 0 ? void 0 : optionValueEm.innerText.replace(/[:\n]/g, '').trim();
                        const option = { [optionKey]: optionValue };
                        options.push(option);
                    }
                    return {
                        name: 'active_items',
                        data: { title, asin, price, url, delivery, quantity, selected, options }
                    };
                }
            }
        ]
    },
    {
        selector: '#sc-buy-box-ptc-button input',
        add_text: true,
        clickable: true,
        name: 'check_out'
    }
];
const fresh_carousel_card = {
    selector: 'li.a-carousel-card, div[id^="gridElement"]',
    name: 'from_text',
    text_selector: 'span.a-truncate-full',
    children: [
        {
            selector: 'a:has(div.a-image-container)',
            name: 'product_image',
            add_text: true,
            text_format: 'Product Image',
            clickable: true
        },
        {
            selector: "span[id^='qs-widget-atc-button']",
            name: 'add_to_cart',
            add_text: true,
            text_format: 'Add To Cart',
            clickable: true
        },
        {
            selector: 'div[id^="qs-widget-button-container-atfc"]',
            name: 'quantity_selector',
            children: [
                {
                    selector: "input[aria-label^='Remove']",
                    add_text: true,
                    text_format: 'Decrease quantity by 1',
                    name: 'from_text',
                    clickable: true
                },
                {
                    selector: "button[id^='qs-widget-button-atfc']",
                    add_text: true
                },
                {
                    selector: "input[aria-label^='Add']",
                    add_text: true,
                    text_format: 'Increase quantity by 1',
                    name: 'from_text',
                    clickable: true
                }
            ]
        },
        {
            selector: 'a > span > span > span.a-truncate-full',
            add_text: true,
            name: 'product_detail',
            clickable: true
        },
        {
            selector: 'div > span > span > span.a-truncate-full',
            add_text: true
        },
        {
            selector: 'div[class*="priceToPay"] span.a-offscreen',
            add_text: true
        },
        {
            selector: 'li.a-carousel-card a.a-size-mini',
            name: 'from_text',
            clickable: true,
            add_text: true
        }
    ],
    generate_metadata: (em) => {
        var _a, _b;
        const asinEm = em.querySelector('div[data-csa-c-item-id^="amzn1.asin"]');
        const asin = (_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-csa-c-item-id')) === null || _a === void 0 ? void 0 : _a.split(':')[0].split('.').pop();
        const priceEm = em.querySelector('div[class*="priceToPay"] span.a-offscreen');
        const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
        const titleEm = em.querySelector('span.a-truncate-full');
        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
        const urlEm = em.querySelector('a:has(span.a-truncate-full)');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        const quantityEm = em.querySelector('div[id^="qs-widget-button-container-atfc"] button[id^="qs-widget-button-atfc"]');
        const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
        return {
            name: 'promotion_items',
            data: { title, asin, price, url, quantity }
        };
    }
};
const fresh_substitution_card = {
    selector: 'div.subs-cart-item',
    name: 'from_text',
    text_selector: 'div.a-spacing-top-base span.a-size-base',
    children: [
        {
            selector: 'div.a-spacing-top-base span.a-size-base',
            add_text: true
        },
        {
            selector: 'div.a-spacing-top-mini span.a-color-price',
            add_text: true
        }
    ],
    generate_metadata: (em) => {
        const asinEm = em.querySelector('div[data-cart-item-asin]');
        const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-cart-item-asin');
        const titleEm = em.querySelector('div.a-spacing-top-base span.a-size-base');
        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
        const priceEm = em.querySelector('div.a-spacing-top-mini span.a-color-price');
        const price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
        return { name: 'active_items', data: { asin, title, price } };
    }
};
const fresh_cart = [
    nav,
    {
        selector: "div[data-name='Active Items']",
        name: 'active_item_list',
        children: [
            {
                selector: 'div.sc-list-item-content',
                text_selector: 'ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                    {
                        selector: 'div.sc-product-image-desktop a img',
                        clickable: true,
                        name: 'product_image',
                        add_text: true,
                        text_format: 'Product Image'
                    },
                    {
                        selector: 'ul > li > span.a-list-item > a.sc-product-title',
                        clickable: true,
                        text_selector: 'span.a-truncate-full',
                        add_text: true,
                        name: 'product_detail'
                    },
                    {
                        selector: 'div.sc-badge-price-to-pay span.sc-price',
                        add_text: true
                    },
                    {
                        selector: 'div.sc-action-links',
                        children: [
                            {
                                selector: 'div.qs-widget-container',
                                children: [
                                    {
                                        selector: "input[aria-label='Remove']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'decrease_quantity_by_one'
                                    },
                                    {
                                        selector: 'div.qs-widget-dropdown-flex-wrapper button',
                                        add_text: true,
                                        clickable: true,
                                        name: 'quantity_drop_down_list',
                                        text_format: 'Current Quantity: {}'
                                    },
                                    {
                                        selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
                                        add_text: true,
                                        clickable: true,
                                        use_root: true,
                                        name: 'from_text',
                                        text_format: 'Drop Down Option {}'
                                    },
                                    {
                                        selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
                                        add_text: true,
                                        clickable: true,
                                        use_root: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
                                        add_text: true,
                                        clickable: true,
                                        use_root: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: "input[aria-label='Add']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'increase_quantity_by_one'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: "input[data-action='delete']",
                        add_text: true,
                        clickable: true,
                        name: 'delete'
                    }
                ],
                generate_metadata: (em) => {
                    var _a, _b;
                    const asin = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                    const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price');
                    const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                    const titleEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full');
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title');
                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                    const quantityEm = em.querySelector('div.sc-action-links div.qs-widget-dropdown-flex-wrapper button');
                    const quantity = quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText;
                    return {
                        name: 'active_items',
                        data: { title, asin, price, url, quantity }
                    };
                }
            }
        ]
    },
    fresh_carousel_card,
    {
        selector: 'div.sc-buy-box-inner-box input[name^="proceedToALMCheckout"]',
        clickable: true,
        name: 'check_out',
        add_text: true
    },
    {
        selector: 'div.sc-buy-box-inner-box a',
        clickable: true,
        name: 'from_text',
        add_text: true
    },
    {
        selector: '#sc-cart-above-actions button, #sc-cart-above-actions a',
        clickable: true,
        name: 'from_text',
        add_text: true
    }
];
const buy_again = [
    nav,
    cart_side_bar,
    {
        selector: 'div.a-section:has(div.filter-container)',
        name: 'filters',
        children: [
            {
                selector: 'div.filter-container',
                text_selector: 'span#filter-container-header',
                name: 'from_text',
                children: [
                    {
                        selector: 'span#filter-container-header',
                        add_text: true
                    },
                    {
                        selector: 'label',
                        add_text: true,
                        clickable: true,
                        name: 'from_text',
                        generate_metadata: (em) => {
                            var _a, _b;
                            const title = em.innerText;
                            const nameEm = (_a = em
                                .closest('div.filter-container')) === null || _a === void 0 ? void 0 : _a.querySelector('#filter-container-header');
                            const name = (_b = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[ ]/g, '_').toLowerCase().trim();
                            const input = em.querySelector('input');
                            if (input && input.checked) {
                                return {
                                    name: 'filters.' + name,
                                    data: { title: (title === null || title === void 0 ? void 0 : title.trim()) || '', selected: true }
                                };
                            }
                            return {
                                name: 'filters.' + name,
                                data: { title: (title === null || title === void 0 ? void 0 : title.trim()) || '', selected: false }
                            };
                        }
                    }
                ]
            }
        ]
    },
    {
        selector: 'div.alm-grid-desktop-grid-container',
        name: 'product_list',
        children: [
            {
                selector: 'div[id^="gridCell"]',
                name: 'from_text',
                text_selector: "div[id^='closedCard'] a[id^='title'] span.a-truncate-full",
                children: [
                    {
                        selector: "div[id^='gridElement']",
                        name: 'product_card',
                        children: [
                            {
                                selector: "div[id^='closedCard']",
                                name: 'closed_product_card',
                                children: [
                                    {
                                        selector: "div[id^='info']",
                                        name: 'open_product_card',
                                        clickable: true,
                                        text_format: 'Open Product Card'
                                    },
                                    {
                                        selector: 'form span.a-button-inner',
                                        name: 'add_to_cart',
                                        clickable: true,
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[id^="seeBuyingOptionsWrapper"] a',
                                        name: 'see_buying_options',
                                        clickable: true,
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: 'div[name="ax-qs"]',
                                children: [
                                    {
                                        selector: "button[aria-label='Decrease quantity by one']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'decrease_quantity_by_one'
                                    },
                                    {
                                        selector: "div[role='spinbutton']",
                                        add_text: true,
                                        text_format: 'Current Quantity: {}'
                                    },
                                    {
                                        selector: "button[aria-label='Increase quantity by one']",
                                        add_text: true,
                                        text_js: function (element) {
                                            if (element.hasAttribute('aria-label')) {
                                                return element.getAttribute('aria-label');
                                            }
                                            return '';
                                        },
                                        clickable: true,
                                        name: 'increase_quantity_by_one'
                                    }
                                ]
                            },
                            {
                                selector: "div[id^='expandedImage']",
                                name: 'close_product_card',
                                clickable: true,
                                add_text: true,
                                text_format: 'Close Product Card'
                            }
                        ]
                    }
                ],
                generate_metadata: (em) => {
                    var _a;
                    const asinEm = em.querySelector("div[id^='closedCard'] div[id^='info']");
                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                    const priceEm = em.querySelector('div[id^="closedCard"] div[id^="info"] span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                    const titleEm = em.querySelector("div[id^='closedCard'] a[id^='title'] span.a-truncate-full");
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const deliveryEm = em.querySelector('div[id^="closedCard"] div[id^="info"] #udmDeliveryMessageComponent');
                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                    return { name: 'active_items_closed', data: { title, asin, price, delivery } };
                }
            },
            {
                selector: 'div[id^="featured"]',
                name: 'from_text',
                text_selector: "a[id^='title'] span.a-truncate-full",
                children: [
                    {
                        selector: 'div[id^="detailContentWrapper"] div[id^="detailContent"]',
                        name: 'detailed_content',
                        children: [
                            {
                                selector: 'div:has(> img)',
                                clickable: true,
                                name: 'product_image',
                                add_text: true,
                                text_format: 'Product Image'
                            },
                            {
                                selector: "a[id^='title']",
                                clickable: true,
                                name: 'product_title',
                                add_text: true,
                                text_selector: 'span.a-truncate-full'
                            },
                            {
                                selector: "div[class*='multiOfferPillContainer'] a",
                                clickable: true,
                                name: 'from_text',
                                add_text: true
                            },
                            {
                                selector: "div[data-buyingoptiontype='NEW'], div[class*='asinDetailInfoColumns']:has(input[name='submit.addToCart']",
                                name: 'one_time_purchase',
                                children: [
                                    {
                                        selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                                        add_text: true,
                                        name: 'price'
                                    },
                                    {
                                        selector: '#udmDeliveryMessageComponent',
                                        add_text: true,
                                        name: 'delivery'
                                    },
                                    {
                                        selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailActionsRow"]',
                                        name: 'buttons',
                                        children: [
                                            {
                                                selector: 'input[name="submit.addToCart"]',
                                                add_text: true,
                                                name: 'add_to_cart',
                                                clickable: true
                                            },
                                            {
                                                selector: 'input[id^="buy-now"]',
                                                add_text: true,
                                                name: 'buy_now',
                                                clickable: true
                                            },
                                            {
                                                selector: 'div[id^="feedbackButtonSection"] input',
                                                add_text: true,
                                                name: 'remove_item',
                                                clickable: true
                                            },
                                            {
                                                selector: 'div[name="ax-qs"]',
                                                children: [
                                                    {
                                                        selector: "button[aria-label='Decrease quantity by one']",
                                                        add_text: true,
                                                        text_js: function (element) {
                                                            if (element.hasAttribute('aria-label')) {
                                                                return element.getAttribute('aria-label');
                                                            }
                                                            return '';
                                                        },
                                                        clickable: true,
                                                        name: 'decrease_quantity_by_one'
                                                    },
                                                    {
                                                        selector: "div[role='spinbutton']",
                                                        add_text: true,
                                                        text_format: 'Current Quantity: {}'
                                                    },
                                                    {
                                                        selector: "button[aria-label='Increase quantity by one']",
                                                        add_text: true,
                                                        text_js: function (element) {
                                                            if (element.hasAttribute('aria-label')) {
                                                                return element.getAttribute('aria-label');
                                                            }
                                                            return '';
                                                        },
                                                        clickable: true,
                                                        name: 'increase_quantity_by_one'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b, _c, _d, _e;
                                    const asinEm = em.closest('div[data-asin]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = (_c = (_b = em.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.querySelector("a[id^='title'] span.a-truncate-full");
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = (_e = (_d = em.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.querySelector("a[id^='title']");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"]');
                                    const quantity = (quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText) || '1';
                                    return {
                                        name: 'active_items_opened_purchase',
                                        data: { title, asin, price, url, delivery, quantity }
                                    };
                                }
                            },
                            {
                                selector: "div[data-buyingoptiontype='SNS'], div[class*='snsUpsellBlockContainer']",
                                name: 'subscribe_and_save',
                                children: [
                                    {
                                        selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                                        add_text: true,
                                        name: 'price'
                                    },
                                    {
                                        selector: '#udmDeliveryMessageComponent',
                                        add_text: true,
                                        name: 'delivery'
                                    },
                                    {
                                        selector: 'div[class*="actionButtonsRow"]',
                                        name: 'buttons',
                                        children: [
                                            {
                                                selector: 'input[name="submit.addToCart"]',
                                                add_text: true,
                                                name: 'add_to_cart',
                                                clickable: true
                                            },
                                            {
                                                selector: 'span[class*="snsButton"] input',
                                                add_text: true,
                                                name: 'subscribe_and_save',
                                                clickable: true
                                            },
                                            {
                                                selector: 'div[id^="feedbackButtonSection"] input',
                                                add_text: true,
                                                name: 'remove_item',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'span[class*="subscriptionButton"] input',
                                        add_text: true,
                                        name: 'set_up_subscription',
                                        clickable: true
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b, _c, _d, _e;
                                    const asinEm = em.closest('div[data-asin]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = (_c = (_b = em.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.querySelector("a[id^='title'] span.a-truncate-full");
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = (_e = (_d = em.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.querySelector("a[id^='title']");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    return {
                                        name: 'active_items_opened_sns',
                                        data: { title, asin, price, url, delivery }
                                    };
                                }
                            }
                        ]
                    },
                    {
                        selector: "div[id^='detail-view-similar-items']",
                        name: 'similar_items',
                        children: [
                            {
                                selector: 'li.a-carousel-card',
                                name: 'from_text',
                                text_selector: "a[id^='title'] span.a-truncate-full",
                                children: [
                                    {
                                        selector: 'div.a-image-container:has(> img)',
                                        clickable: true,
                                        name: 'product_image',
                                        add_text: true,
                                        text_format: 'Product Image'
                                    },
                                    {
                                        selector: "a[id^='title']",
                                        clickable: true,
                                        name: 'product_title',
                                        add_text: true,
                                        text_selector: 'span.a-truncate-full'
                                    },
                                    {
                                        selector: 'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                                        add_text: true,
                                        name: 'price'
                                    },
                                    {
                                        selector: '#udmDeliveryMessageComponent',
                                        add_text: true,
                                        name: 'delivery'
                                    },
                                    {
                                        selector: 'input[name="submit.addToCart"], input[name^="atfcShim"], button[aria-label="Add to Cart. Click to change quantity"]',
                                        add_text: true,
                                        name: 'add_to_cart',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div[id^="seeBuyingOptionsWrapper"] a',
                                        name: 'see_buying_options',
                                        clickable: true,
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[name="ax-qs"]',
                                        children: [
                                            {
                                                selector: "button[aria-label='Decrease quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'decrease_quantity_by_one'
                                            },
                                            {
                                                selector: "div[role='spinbutton']",
                                                add_text: true,
                                                text_format: 'Current Quantity: {}'
                                            },
                                            {
                                                selector: "button[aria-label='Increase quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'increase_quantity_by_one'
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.qs-widget-container',
                                        children: [
                                            {
                                                selector: "input[aria-label='Remove']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'decrease_quantity_by_one'
                                            },
                                            {
                                                selector: 'div.qs-widget-dropdown-flex-wrapper button',
                                                add_text: true,
                                                clickable: true,
                                                name: 'drop_down_list',
                                                text_format: 'Current Quantity: {}'
                                            },
                                            {
                                                selector: 'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
                                                add_text: true,
                                                clickable: true,
                                                use_root: true,
                                                name: 'from_text',
                                                text_format: 'Drop Down Option {}'
                                            },
                                            {
                                                selector: 'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
                                                add_text: true,
                                                clickable: true,
                                                use_root: true,
                                                name: 'from_text'
                                            },
                                            {
                                                selector: 'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
                                                add_text: true,
                                                clickable: true,
                                                use_root: true,
                                                name: 'from_text'
                                            },
                                            {
                                                selector: "input[aria-label='Add']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'increase_quantity_by_one'
                                            }
                                        ]
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b, _c;
                                    const parentTitleEm = (_a = em
                                        .closest('div[id^="featured"]')) === null || _a === void 0 ? void 0 : _a.querySelector('div[id^="detailContentWrapper"] a[id^="title"] span.a-truncate-full');
                                    const parentTitle = (_b = parentTitleEm === null || parentTitleEm === void 0 ? void 0 : parentTitleEm.innerText) === null || _b === void 0 ? void 0 : _b.toLowerCase().replace(/[^\w]+/g, '_');
                                    const asinEm = em.querySelector('div[class*="delightFaceout"]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)');
                                    const price = (_c = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _c === void 0 ? void 0 : _c.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector("a[id^='title'] span.a-truncate-full");
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = em.querySelector("a[id^='title']");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector('#udmDeliveryMessageComponent');
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    return {
                                        name: parentTitle + '.similar_items',
                                        data: { title, asin, price, url, delivery }
                                    };
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        selector: '#snsUpsellModal',
        name: 'subscribe_and_save_popover',
        children: [
            {
                selector: 'div[class*="modalHeader"]',
                children: [
                    {
                        selector: 'span[class*="modalHeaderText"]',
                        add_text: true
                    },
                    {
                        selector: 'span[data-action="a-popover-close"]',
                        add_text: true,
                        clickable: true,
                        text_format: 'Close',
                        name: 'from_text'
                    }
                ]
            },
            {
                selector: 'div[class*="modalContent"]',
                direct_child: true,
                children: [
                    {
                        selector: 'div:not([class*="buttonContainer"]):not(:has(select))',
                        add_text: true
                    },
                    {
                        selector: 'select',
                        name: 'drop_down_list'
                    },
                    // {
                    //   selector: 'span.a-dropdown-prompt',
                    //   name: 'open_drop_down_list',
                    //   clickable: true,
                    //   add_text: true,
                    //   text_format: "Delivery every: {}",
                    // },
                    {
                        selector: 'div[class*="buttonContainer"]',
                        children: [
                            {
                                selector: 'div[class*="cancelButtonContainer"] input',
                                add_text: true,
                                text_format: 'Cancel',
                                clickable: true,
                                name: 'from_text'
                            },
                            {
                                selector: 'div[class*="subscriptionButtonContainer"] input[name="submit.addToCart"]',
                                add_text: true,
                                text_format: 'Add Subscription to Cart',
                                clickable: true,
                                name: 'from_text'
                            }
                        ]
                    }
                ]
            }
        ],
        generate_metadata: (em) => {
            var _a, _b;
            const asinEm = em.querySelector('div[class*="modalContent"]');
            const asin = (_b = (_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.id) === null || _a === void 0 ? void 0 : _a.split('-')[1]) === null || _b === void 0 ? void 0 : _b.trim();
            return { name: 'popover_item', data: { asin } };
        }
    }
];
const recipes = [
    {
        match: '/',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [nav, cart_side_bar]
            }
        ]
    },
    {
        match: '/fmc/storefront',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [nav, cart_side_bar]
            }
        ]
    },
    {
        match: '/s',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#s-refinements',
                        name: 'refinements',
                        children: [
                            {
                                selector: '#topRefinements\\/0',
                                name: 'top_refinements',
                                add_text: 'true',
                                text_format: 'Recently used filters',
                                children: [
                                    {
                                        selector: 'li',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        text_js: function (element) {
                                            try {
                                                let text = '';
                                                if (!element) {
                                                    return text;
                                                }
                                                const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                                                if (element.innerText && element.innerText.trim()) {
                                                    text += element.innerText.trim();
                                                    if (aChild && aChild.hasAttribute('title')) {
                                                        text += ' ';
                                                        text += aChild.getAttribute('title');
                                                    }
                                                }
                                                else {
                                                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                                                    if (aChild && aChild.hasAttribute('title')) {
                                                        text += aChild.getAttribute('title');
                                                    }
                                                }
                                                return text;
                                            }
                                            catch (e) {
                                                console.log(e);
                                                return '';
                                            }
                                        },
                                        children: [
                                            {
                                                selector: "input[type='checkbox']"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
                                name: 'from_text',
                                text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
                                children: refinement_option
                            },
                            {
                                selector: '#departments',
                                name: 'departments',
                                add_text: true,
                                text_format: 'Department',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            const selected = em === null || em === void 0 ? void 0 : em.getAttribute('aria-current');
                                            const title = em === null || em === void 0 ? void 0 : em.innerText;
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            if (selected && selected == 'true') {
                                                return {
                                                    name: 'refinements.departments',
                                                    data: { title, selected: true, url }
                                                };
                                            }
                                            else {
                                                return {
                                                    name: 'refinements.departments',
                                                    data: { title, selected: false, url }
                                                };
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                selector: '#reviewsRefinements',
                                name: 'reviews_refinements',
                                add_text: true,
                                text_format: 'Customer Reviews',
                                children: [
                                    {
                                        selector: 'a.s-navigation-clear-link',
                                        add_text: true,
                                        name: 'clear_selection',
                                        clickable: true
                                    },
                                    {
                                        selector: "li a[aria-current='true']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        // text_format: 'Clear Option {}',
                                        generate_metadata: (em) => {
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ');
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.reviews', data: { title, selected: true, url } };
                                        }
                                    },
                                    {
                                        selector: "li a[aria-current='false']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ');
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.reviews', data: { title, selected: false, url } };
                                        }
                                    }
                                ]
                            },
                            {
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
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_36-title'] a[aria-current='true']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        // text_format: 'Clear Option {}',
                                        generate_metadata: (em) => {
                                            const title = em === null || em === void 0 ? void 0 : em.innerText;
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: true, url } };
                                        }
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_36-title'] a[aria-current='false']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            const title = em === null || em === void 0 ? void 0 : em.innerText;
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: false, url } };
                                        }
                                    },
                                    // case 2: slider
                                    {
                                        selector: 'div.sf-range-slider-row:nth-of-type(1)',
                                        add_text: true,
                                        generate_metadata: (em) => {
                                            var _a;
                                            const range = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '');
                                            return { name: 'refinements.price', data: { title: 'price_range', range } };
                                        }
                                    },
                                    {
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
                                            step_values: (em) => {
                                                const formEm = em.closest('form');
                                                if (formEm) {
                                                    const prop = formEm.getAttribute('data-slider-props');
                                                    if (prop) {
                                                        const steps = JSON.parse(prop).stepLabels;
                                                        return steps;
                                                    }
                                                }
                                                return '';
                                            },
                                            current_value: (em) => {
                                                const value = Number.parseInt(em.getAttribute('value'));
                                                if (value !== null) {
                                                    const formEm = em.closest('form');
                                                    if (formEm) {
                                                        const prop = formEm.getAttribute('data-slider-props');
                                                        if (prop) {
                                                            const steps = JSON.parse(prop).stepLabels;
                                                            return steps[value];
                                                        }
                                                    }
                                                }
                                                return '';
                                            }
                                        }
                                    },
                                    {
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
                                            step_values: (em) => {
                                                const formEm = em.closest('form');
                                                if (formEm) {
                                                    const prop = formEm.getAttribute('data-slider-props');
                                                    if (prop) {
                                                        const steps = JSON.parse(prop).stepLabels;
                                                        return steps;
                                                    }
                                                }
                                                return '';
                                            },
                                            current_value: (em) => {
                                                const value = Number.parseInt(em.getAttribute('value'));
                                                if (value !== null) {
                                                    const formEm = em.closest('form');
                                                    if (formEm) {
                                                        const prop = formEm.getAttribute('data-slider-props');
                                                        if (prop) {
                                                            const steps = JSON.parse(prop).stepLabels;
                                                            return steps[value];
                                                        }
                                                    }
                                                }
                                                return '';
                                            }
                                        }
                                    },
                                    {
                                        selector: 'div.sf-submit-range-button input',
                                        name: 'submit_price_range',
                                        add_text: true,
                                        text_format: 'Go',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div.sf-reset-range-link a',
                                        name: 'reset_price_selection',
                                        add_text: true,
                                        clickable: true
                                    },
                                    {
                                        selector: '#p_n_deal_type-title',
                                        add_text: true,
                                        name: 'deals_discounts_heading'
                                    },
                                    {
                                        selector: "div[aria-labelledby='p_n_deal_type-title'] > a",
                                        add_text: true,
                                        name: 'clear_deals_discount_selection',
                                        clickable: true
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='true']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        // text_format: 'Clear Option {}',
                                        generate_metadata: (em) => {
                                            const title = em === null || em === void 0 ? void 0 : em.innerText;
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: true, url } };
                                        }
                                    },
                                    {
                                        selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='false']",
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        generate_metadata: (em) => {
                                            const title = em === null || em === void 0 ? void 0 : em.innerText;
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: false, url } };
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'div.s-main-slot.s-result-list.s-search-results',
                        name: 'search_results',
                        children: [
                            {
                                selector: 'div.AdHolder',
                                name: 'ads',
                                children: [
                                    {
                                        selector: 'div[data-asin]',
                                        name: 'from_text',
                                        add_text: true,
                                        clickable: true,
                                        text_js: (em) => {
                                            const titleEm = em.querySelector('img');
                                            const text = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
                                            return text.trim() || '';
                                        },
                                        generate_metadata: (em) => {
                                            const asinEm = em;
                                            const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                            const titleEm = em.querySelector('img');
                                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('alt');
                                            const urlEm = em.querySelector("a[data-type='productTitle']");
                                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                            return { name: 'ads', data: { title, asin, url } };
                                        }
                                    }
                                ]
                            },
                            {
                                insert_split_marker: true,
                                insert_split_marker_every: 4,
                                selector: 'div[data-component-type="s-search-result"]',
                                text_selector: 'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span',
                                name: 'from_text',
                                class: 'search-result',
                                children: [
                                    {
                                        selector: "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
                                        add_text: true,
                                        class: 'product-name',
                                        clickable: true,
                                        name: 'product_name'
                                    },
                                    {
                                        selector: 'div.s-product-image-container',
                                        add_text: true,
                                        name: 'product_image',
                                        clickable: true,
                                        text_format: 'Product Image'
                                    },
                                    {
                                        selector: 'div.s-color-swatch-container',
                                        name: 'available_colors',
                                        children: [
                                            {
                                                selector: 'div.s-color-swatch-pad',
                                                name: 'from_text',
                                                clickable: true,
                                                add_text: true,
                                                text_js: (em) => {
                                                    const aChild = em.querySelector('a');
                                                    if (aChild) {
                                                        return aChild.getAttribute('aria-label') || '';
                                                    }
                                                    return '';
                                                }
                                            },
                                            {
                                                selector: "div[data-csa-c-type='link'] a",
                                                direct_child: true,
                                                name: 'from_text',
                                                clickable: true,
                                                add_text: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.s-variations-options-elevated, div.s-variations-options-justify-content',
                                        name: 'options',
                                        add_text: true,
                                        clickable: true,
                                        click_selector: 'a'
                                    },
                                    {
                                        selector: "div[data-cy='reviews-block']",
                                        class: 'product-review',
                                        children: [
                                            {
                                                selector: 'span.a-icon-alt',
                                                add_text: true,
                                                class: 'product-rating'
                                            },
                                            {
                                                selector: 'span.a-size-base.s-underline-text',
                                                add_text: true,
                                                text_format: '{} reviews',
                                                class: 'product-rating-count',
                                                name: 'product_rating_count',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='price-recipe']",
                                        class: 'product-price',
                                        children: [
                                            {
                                                selector: 'a.a-link-normal > span.a-price > span.a-offscreen',
                                                add_text: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='delivery-recipe']",
                                        add_text: true,
                                        class: 'product-delivery'
                                    },
                                    {
                                        selector: "div[data-cy='add-to-cart'] button, span[id*='add-to-cart'] input",
                                        add_text: true,
                                        clickable: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: "div[data-csa-c-content-id='s-search-see-details-button'] a",
                                        add_text: true,
                                        clickable: true,
                                        name: 'see_options'
                                    },
                                    {
                                        selector: 'div[name="ax-qs"]',
                                        children: [
                                            {
                                                selector: "button[aria-label='Decrease quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'decrease_quantity_by_one'
                                            },
                                            {
                                                selector: "div[role='spinbutton']",
                                                add_text: true,
                                                text_format: 'Current Quantity: {}'
                                            },
                                            {
                                                selector: "button[aria-label='Increase quantity by one']",
                                                add_text: true,
                                                text_js: function (element) {
                                                    if (element.hasAttribute('aria-label')) {
                                                        return element.getAttribute('aria-label');
                                                    }
                                                    return '';
                                                },
                                                clickable: true,
                                                name: 'increase_quantity_by_one'
                                            }
                                        ]
                                    }
                                ],
                                generate_metadata: (em) => {
                                    const asin = em.getAttribute('data-asin');
                                    const priceEm = em.querySelector("div[data-cy='price-recipe'] a.a-link-normal > span.a-price > span.a-offscreen");
                                    const price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
                                    const titleEm = em.querySelector('span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span');
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                                    const urlEm = em.querySelector("div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal");
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const deliveryEm = em.querySelector("div[data-cy='delivery-recipe']");
                                    const delivery = deliveryEm === null || deliveryEm === void 0 ? void 0 : deliveryEm.innerText.replace(/[\n]/g, ' ');
                                    return { name: 'search_results', data: { title, asin, price, url, delivery } };
                                }
                            }
                        ]
                    },
                    {
                        selector: 'span.s-pagination-strip',
                        name: 'pagination',
                        children: [
                            {
                                selector: '.s-pagination-item',
                                add_text: true,
                                name: 'from_text',
                                clickable: true
                            }
                        ]
                    },
                    {
                        selector: 'div.a-popover-wrapper',
                        name: 'popover',
                        children: [
                            {
                                selector: 'header.a-popover-header button',
                                add_text: true,
                                clickable: true,
                                name: 'close',
                                text_format: 'Close'
                            },
                            {
                                selector: 'div.a-popover-inner div.puis-atc-size-variation',
                                children: [
                                    {
                                        selector: 'div.a-row:nth-of-type(1)',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: "span[data-component-type='s-product-image'] a",
                                                name: 'product_image',
                                                add_text: true,
                                                clickable: true,
                                                text_format: 'Product Image'
                                            },
                                            {
                                                selector: 'div.puis-size-variation-title a',
                                                name: 'product_title',
                                                add_text: true,
                                                clickable: true
                                            },
                                            {
                                                selector: 'div.puis-size-variation-product-spec',
                                                name: 'product_specification',
                                                add_text: true,
                                                clickable: true,
                                                click_selector: 'a'
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.a-row:nth-of-type(2)',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: 'div.puis-size-variation-product-options',
                                                name: 'from_text',
                                                text_selector: 'span.a-size-base.a-color-secondary',
                                                children: [
                                                    {
                                                        selector: 'span.a-size-base.a-color-secondary',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'span.a-dropdown-prompt',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'select',
                                                        name: 'drop_down_list'
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'div.puis-size-variation-price a.a-text-normal',
                                                name: 'price',
                                                clickable: true,
                                                add_text: true,
                                                text_selector: "span[aria-hidden='true']"
                                            },
                                            {
                                                selector: 'div.puis-size-variation-delivery',
                                                add_text: true,
                                                name: 'delivery'
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.a-row:nth-of-type(3)',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: 'span.s-no-js-hide input',
                                                name: 'cancel',
                                                clickable: true,
                                                add_text: true,
                                                text_format: 'Cancel'
                                            },
                                            {
                                                selector: 'div.puis-atcb-add-container button',
                                                name: 'add_to_cart',
                                                clickable: true,
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a, _b;
                            const asin = (_a = em.querySelector('div[data-asin]')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-asin');
                            const priceEm = em.querySelector('div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(2) div.puis-size-variation-price a.a-text-normal span[aria-hidden="true"]');
                            const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                            const titleEm = em.querySelector('div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(1) div.puis-size-variation-title a');
                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                            const urlEm = titleEm;
                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                            const quantityEm = em.querySelector('div[data-action="a-dropdown-button"]');
                            const optionsEm = em.querySelectorAll('div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(1) div.puis-size-variation-product-spec, div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(2) div.puis-size-variation-product-options');
                            const options = [];
                            for (const optionEm of optionsEm) {
                                const optionKeyEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span.a-size-base.a-color-secondary');
                                const optionValueEm = optionEm === null || optionEm === void 0 ? void 0 : optionEm.querySelector('span.a-size-base.a-color-base, span.a-dropdown-prompt');
                                const optionKey = optionKeyEm === null || optionKeyEm === void 0 ? void 0 : optionKeyEm.innerText.replace(/[:\n]/g, '').trim();
                                const optionValue = optionValueEm === null || optionValueEm === void 0 ? void 0 : optionValueEm.innerText.replace(/[:\n]/g, '').trim();
                                const option = { [optionKey]: optionValue };
                                options.push(option);
                            }
                            return {
                                name: 'popover_item',
                                data: { title, asin, price, url, options }
                            };
                        }
                    }
                ]
            }
        ]
    },
    {
        match: '#productTitle',
        match_text: '',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#centerCol',
                        class: 'product-card',
                        children: [
                            {
                                selector: '#title',
                                add_text: true,
                                keep_attr: ['id'],
                                generate_metadata: (em) => {
                                    return {
                                        name: 'product_details',
                                        data: { title: (em === null || em === void 0 ? void 0 : em.innerText) || '' }
                                    };
                                }
                            },
                            {
                                selector: '#averageCustomerReviews',
                                class: 'review',
                                children: [
                                    {
                                        selector: 'span.a-icon-alt',
                                        add_text: true
                                    },
                                    {
                                        selector: '#acrCustomerReviewText',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' +
                                    ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' +
                                    '#corePriceDisplay_desktop_feature_div:has(#sns-base-price) #sns-base-price span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' +
                                    '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' +
                                    ' > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) ' +
                                    '#corePriceDisplay_desktop_feature_div:not(:has(#sns-base-price)) span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, ' +
                                    '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] ' +
                                    '#corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                                add_text: true,
                                text_format: 'Price: {}',
                                class: 'product-price',
                                generate_metadata: (em) => {
                                    var _a;
                                    return {
                                        name: 'product_details',
                                        data: { price: ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) || '' }
                                    };
                                },
                                text_js: (em) => {
                                    var _a;
                                    return ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) || '';
                                }
                            },
                            {
                                selector: '#twister',
                                class: 'product-options',
                                name: 'product_options',
                                children: [
                                    {
                                        selector: 'div.a-section',
                                        text_selector: 'div.a-row:has(label.a-form-label) > label.a-form-label',
                                        name: 'from_text',
                                        direct_child: true,
                                        generate_metadata: (em) => {
                                            var _a, _b, _c;
                                            const label = (_a = em
                                                .querySelector('div.a-row:has(label.a-form-label) label.a-form-label')) === null || _a === void 0 ? void 0 : _a.innerHTML.replace(/[:\n]/g, '').trim();
                                            let value = (_b = em.querySelector('div.a-row:has(label.a-form-label) span.selection')) === null || _b === void 0 ? void 0 : _b.innerHTML;
                                            if (value === undefined || value === '') {
                                                const options = (_c = em.querySelector('select')) === null || _c === void 0 ? void 0 : _c.querySelectorAll('option');
                                                // console.log(options);
                                                if (options) {
                                                    for (const option of options) {
                                                        // console.log(option);
                                                        if (option && option.getAttribute('selected') !== null) {
                                                            value = option.innerHTML.trim();
                                                        }
                                                    }
                                                }
                                                // console.log(value);
                                            }
                                            return { name: 'product_options', data: { [label]: value.trim() } };
                                        },
                                        children: [
                                            {
                                                selector: 'div.a-row:has(label.a-form-label)',
                                                children: [
                                                    {
                                                        selector: 'label.a-form-label',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'span.selection',
                                                        add_text: true
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'select',
                                                add_text: true,
                                                // clickable: true,
                                                name: 'drop_down_list'
                                            },
                                            {
                                                selector: 'ul',
                                                name: 'button_list',
                                                children: [
                                                    {
                                                        selector: 'li button',
                                                        add_text: true,
                                                        clickable: true,
                                                        name: 'from_text',
                                                        text_js: function (element) {
                                                            let text = '';
                                                            if (element.innerText.trim()) {
                                                                text += element.innerText.trim();
                                                                const imgChild = element.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += ' ';
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            else {
                                                                const imgChild = element.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            return text.trim();
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            // handle new twisters
                            {
                                selector: '#twister-plus-inline-twister',
                                class: 'product-options',
                                name: 'product_options',
                                children: [
                                    {
                                        selector: 'div.inline-twister-row',
                                        text_selector: 'div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary',
                                        name: 'from_text',
                                        direct_child: true,
                                        generate_metadata: (em) => {
                                            var _a, _b, _c;
                                            const label = (_a = em
                                                .querySelector('div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary')) === null || _a === void 0 ? void 0 : _a.innerHTML.replace(/[:\n]/g, '').trim();
                                            let value = (_b = em.querySelector('div.inline-twister-dim-title-value-truncate-expanded span.inline-twister-dim-title-value')) === null || _b === void 0 ? void 0 : _b.innerHTML;
                                            if (value === undefined || value === '') {
                                                const options = (_c = em.querySelector('select')) === null || _c === void 0 ? void 0 : _c.querySelectorAll('option');
                                                // console.log(options);
                                                if (options) {
                                                    for (const option of options) {
                                                        // console.log(option);
                                                        if (option && option.getAttribute('selected') !== null) {
                                                            value = option.innerHTML.trim();
                                                        }
                                                    }
                                                }
                                                // console.log(value);
                                            }
                                            return { name: 'product_options', data: { [label]: value.trim() } };
                                        },
                                        children: [
                                            {
                                                selector: 'div.inline-twister-dim-title-value-truncate-expanded',
                                                children: [
                                                    {
                                                        selector: 'span.a-size-base.a-color-secondary',
                                                        add_text: true
                                                    },
                                                    {
                                                        selector: 'span.inline-twister-dim-title-value',
                                                        add_text: true
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'select',
                                                add_text: true,
                                                // clickable: true,
                                                name: 'drop_down_list'
                                            },
                                            {
                                                selector: 'ul',
                                                name: 'button_list',
                                                children: [
                                                    {
                                                        selector: 'li span:not(.aok-hidden) input',
                                                        add_text: true,
                                                        clickable: true,
                                                        name: 'from_text',
                                                        text_js: function (element) {
                                                            const textEm = element.nextElementSibling;
                                                            let text = '';
                                                            if (textEm.innerText.trim()) {
                                                                text += textEm.innerText.trim();
                                                                const imgChild = textEm.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += ' ';
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            else {
                                                                const imgChild = textEm.querySelector('img');
                                                                if (imgChild && imgChild.alt) {
                                                                    text += imgChild.alt;
                                                                }
                                                            }
                                                            return text.trim();
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div.inline-twister-singleton-header',
                                        text_selector: 'span.a-size-base.a-color-secondary',
                                        name: 'from_text',
                                        children: [
                                            {
                                                selector: 'span.a-size-base.a-color-secondary',
                                                add_text: true
                                            },
                                            {
                                                selector: 'span.inline-twister-dim-title-value-truncate',
                                                add_text: true
                                            }
                                        ],
                                        generate_metadata: (em) => {
                                            var _a, _b;
                                            const label = (_a = em
                                                .querySelector('span.a-size-base.a-color-secondary')) === null || _a === void 0 ? void 0 : _a.innerHTML.replace(/[:\n]/g, '').trim();
                                            const value = (_b = em.querySelector('span.inline-twister-dim-title-value-truncate')) === null || _b === void 0 ? void 0 : _b.innerHTML;
                                            return { name: 'product_options', data: { [label]: value.trim() } };
                                        }
                                    }
                                ]
                            },
                            {
                                selector: '#productFactsDesktopExpander ul.a-unordered-list, #featurebullets_feature_div ul.a-unordered-list',
                                add_text: true,
                                name: 'about_this_item',
                                text_format: 'About this item: ',
                                children: [
                                    {
                                        selector: 'li',
                                        add_text: true
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a;
                                    return {
                                        name: 'product_details',
                                        data: {
                                            bullet_list: ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ')) || ''
                                        }
                                    };
                                }
                            }
                        ]
                    },
                    {
                        selector: '#buybox:has(div.a-tab-container):not(:has(#partialState_buybox_desktop))',
                        name: 'buybox',
                        children: [
                            {
                                selector: '#tab_heading_desktop_buybox_group_1 a',
                                name: 'deliver_tab',
                                clickable: true,
                                add_text: true
                            },
                            {
                                selector: '#tab_heading_desktop_buybox_group_2 a',
                                name: 'pick_up_tab',
                                clickable: true,
                                add_text: true
                            },
                            {
                                selector: '#tab_desktop_buybox_group_1',
                                name: 'delivery',
                                add_text: true,
                                text_format: 'Delivery',
                                children: [buy_box_with_accordion, buy_box_without_accordion_delivery]
                            },
                            {
                                selector: '#tab_desktop_buybox_group_2',
                                name: 'pick_up',
                                add_text: true,
                                text_format: 'Pick Up',
                                children: [buy_box_without_accordion_pick_up]
                            }
                        ],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop))',
                        name: 'buybox',
                        children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#partialState_buybox_desktop',
                        children: [
                            {
                                selector: '#partialStateBuybox div.a-section.a-text-center.a-spacing-small',
                                add_text: true
                            }
                        ],
                        generate_metadata: (em) => {
                            const asinEm = em.querySelector('input#ASIN');
                            return {
                                name: 'product_details',
                                data: { asin: (asinEm === null || asinEm === void 0 ? void 0 : asinEm.value) || '' }
                            };
                        }
                    },
                    {
                        selector: '#attach-warranty-pane #attach-warranty-display',
                        name: 'warranty-box',
                        children: [
                            {
                                selector: 'div.attach-warranty-box',
                                text_selector: '#attach-warranty-card-display-title',
                                name: 'from_text',
                                children: [
                                    {
                                        selector: 'i.a-icon-checkbox',
                                        name: 'select',
                                        clickable: true
                                    },
                                    {
                                        selector: '#attach-warranty-card-display-title',
                                        add_text: true
                                    },
                                    {
                                        selector: '#attach-warranty-card-price',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: 'div.a-section.attach-warranty-button-row',
                                children: [
                                    {
                                        selector: "input[aria-labelledby='attachSiAddCoverage-announce']",
                                        name: 'add_protection',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Add Protection'
                                    },
                                    {
                                        selector: "input[aria-labelledby='attachSiNoCoverage-announce']",
                                        name: 'no_protection',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'No Thanks'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/cart/add-to-cart',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#sw-atc-buy-box',
                        children: [
                            {
                                selector: '#sw-subtotal',
                                children: [
                                    {
                                        selector: '#sw-subtotal-item-count',
                                        add_text: true
                                    },
                                    {
                                        selector: "span[aria-hidden='true']",
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#sc-buy-box-ptc-button span.a-button-inner input',
                                add_text: true,
                                text_selector: 'div.sc-without-multicart',
                                clickable: true,
                                name: 'check_out',
                                fetch_url: '/cart'
                            },
                            {
                                selector: '#sw-gtc a',
                                add_text: true,
                                clickable: true,
                                name: 'go_to_cart'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/cart/smart-wagon',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: '#sw-atc-buy-box',
                        children: [
                            {
                                selector: '#sw-subtotal',
                                children: [
                                    {
                                        selector: '#sw-subtotal-item-count',
                                        add_text: true
                                    },
                                    {
                                        selector: "span[aria-hidden='true']",
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: '#sc-buy-box-ptc-button span.a-button-inner input',
                                add_text: true,
                                text_selector: 'div.sc-without-multicart',
                                clickable: true,
                                name: 'check_out',
                                fetch_url: '/cart'
                            },
                            {
                                selector: '#sw-gtc a',
                                add_text: true,
                                clickable: true,
                                name: 'go_to_cart'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/gp/cart/view.html',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: cart
            }
        ]
    },
    {
        match: '/cart',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: cart
            }
        ]
    },
    {
        match: '/cart/localmarket',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: fresh_cart
            }
        ]
    },
    {
        match: '/alm/byg',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    {
                        selector: 'a[name="proceedToCheckout"]',
                        name: 'check_out',
                        add_text: true,
                        clickable: true
                    },
                    fresh_carousel_card
                ]
            }
        ]
    },
    {
        match: '/alm/substitution',
        match_method: 'url',
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: [
                    {
                        selector: '#subsContinueButton input',
                        name: 'check_out',
                        add_text: true,
                        clickable: true,
                        text_format: 'Continue'
                    },
                    fresh_substitution_card
                ]
            }
        ]
    },
    {
        match: '/ap/signin',
        match_method: 'url',
        terminate: function () {
            return !!arguments[0];
        },
        terminate_callback: function () {
            return arguments[0];
        },
        selector: 'html'
    },
    {
        match: '/gp/buy/spc/handlers/display.html',
        match_method: 'url',
        terminate: function () {
            return !!arguments[0];
        },
        terminate_callback: function () {
            return arguments[0];
        },
        selector: 'html'
    },
    {
        match: '/gp/buyagain',
        match_method: 'url',
        match_with_ref: true,
        selector: 'html',
        children: [
            {
                selector: 'head',
                children: [
                    {
                        selector: 'title',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'body',
                children: buy_again
            }
        ]
    }
];


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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function processElement(element, recipe, parentName = '', nthChild = 0, document = globalThis.document, window = globalThis.window) {
    var _a;
    // console.log("processing element: ", element, recipe);
    // Create a new element using the DOM API
    let tagName = recipe.tag_name || element.tagName.toLowerCase();
    // Handle underscored tags
    if (tagName.endsWith('_')) {
        tagName = tagName.slice(0, -1);
    }
    const newElement = document.createElement(tagName);
    // Extract text content based on the recipe
    let elementText = '';
    if (recipe.text_selector) {
        const textElement = element.querySelector(recipe.text_selector);
        if (textElement) {
            elementText = textElement.innerText || textElement.textContent || '';
        }
    }
    else if (recipe.text_js) {
        elementText = recipe.text_js(element);
        if (elementText === '' || elementText === undefined) {
            // console.log('text js does not detect text for element ', element)
        }
    }
    else if (recipe.add_text) {
        elementText = element.innerText || element.textContent || '';
    }
    elementText = elementText.replace(/\s+/g, ' ').trim();
    if (recipe.text_format) {
        elementText = recipe.text_format.replace('{}', elementText);
    }
    else if (recipe.text_format) {
        elementText = recipe.text_format;
    }
    if (elementText && recipe.add_text) {
        newElement.textContent = elementText;
    }
    // Build the node attributes
    let elementName = '';
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
            }
            else {
                elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_');
            }
        }
        else if (recipe.name === 'from_nth_child') {
            elementName = parentName ? parentName + '.' : '';
            elementName += nthChild.toString();
        }
        else {
            elementName = parentName ? parentName + '.' : '';
            elementName += recipe.name;
        }
        newElement.setAttribute('name', elementName);
        parentName = elementName;
    }
    if (recipe.generate_metadata) {
        const metaobj = recipe.generate_metadata(element);
        const metadata = JSON.stringify(metaobj.data);
        const metaname = metaobj.name;
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
        let click_element;
        if (recipe.click_selector) {
            click_element = element.querySelector(recipe.click_selector);
        }
        else {
            click_element = element;
        }
        if (click_element) {
            click_element.setAttribute('data-clickable-id', elementName);
        }
        else {
            // console.log('click-element not found', element, recipe)
        }
        if (!window.clickable_recipes) {
            window.clickable_recipes = {};
        }
        window.clickable_recipes[elementName] = recipe;
    }
    if (recipe.fetch_url) {
        element.setAttribute('data-fetch-url', recipe.fetch_url);
    }
    if (tagName === 'input') {
        const inputType = element.getAttribute('type');
        if (['text', 'number'].includes(inputType)) {
            newElement.setAttribute('value', element.value);
            element.setAttribute('data-input-id', elementName);
        }
        else if (inputType === 'checkbox') {
            newElement.setAttribute('checked', element.checked.toString());
        }
        else if (inputType === 'radio') {
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
        const selectId = element.getAttribute('id');
        const nameId = element.getAttribute('name');
        const tag = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('span.a-button-dropdown span.a-button-text');
        const newTag = document.createElement('span');
        newTag.textContent = tag.textContent;
        const tagName = elementName + '.open_drop_down_list';
        newTag.setAttribute('name', tagName);
        tag.setAttribute('data-clickable-id', tagName); // Tag actual DOM option element
        newElement.appendChild(newTag);
        const options = document.querySelectorAll('a[id^="' + selectId + '"]');
        options.forEach((option) => __awaiter(this, void 0, void 0, function* () {
            const optionValue = option.textContent.trim() || option.querySelector('input').value;
            const optionName = elementName + '.' + optionValue;
            const newOption = document.createElement('a');
            newOption.textContent = option.textContent;
            newOption.setAttribute('value', optionValue);
            newOption.setAttribute('name', optionName);
            newOption.setAttribute('selected', option.getAttribute('aria-selected'));
            option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
            newElement.appendChild(newOption);
        }));
    }
    // Copy specified attributes
    const attrsToCopy = [
        'alt',
        'title',
        'type',
        'value',
        'role',
        'aria-label',
        'aria-hidden',
        'aria-selected'
    ];
    attrsToCopy.forEach((attr) => {
        const value = element.getAttribute(attr);
        if (value) {
            newElement.setAttribute(attr, value);
        }
    });
    if (recipe.keep_attr) {
        // console.log("attributes to keep: ", recipe.keep_attr);
        for (const key of recipe.keep_attr) {
            const value = element.getAttribute(key);
            // console.log(key, value)
            if (value) {
                newElement.setAttribute(key, value);
            }
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
        for (const key in recipe.override_attr) {
            newElement.setAttribute(key, recipe.override_attr[key](element));
        }
    }
    // Process children
    if (recipe.children && recipe.children.length > 0) {
        for (const childRecipe of recipe.children) {
            const selector = childRecipe.direct_child
                ? `:scope > ${childRecipe.selector}`
                : childRecipe.selector;
            let childElements;
            if (childRecipe.use_root) {
                childElements = document.querySelectorAll(selector);
                // console.log('use root for ', childElements)
            }
            else
                childElements = element.querySelectorAll(selector);
            childElements.forEach((childElement, index) => {
                const childNode = processElement(childElement, childRecipe, parentName, index, document, window);
                newElement.appendChild(childNode);
                if (childRecipe.insert_split_marker) {
                    const every = childRecipe.insert_split_marker_every || 1;
                    if (index % every == 0) {
                        const splitMarker = document.createElement('split-marker');
                        newElement.appendChild(splitMarker);
                        // console.log("inserting split marker 1");
                    }
                }
                if (childRecipe.insert_split_marker) {
                    // console.log("inserting split marker 2");
                    const splitMarker = document.createElement('split-marker');
                    newElement.appendChild(splitMarker);
                }
                else {
                    // console.log('no split marker')
                }
            });
        }
    }
    // Handle empty messages
    if (recipe.empty_message && newElement.children.length === 0) {
        const emptyTextNode = document.createTextNode(recipe.empty_message);
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
/* harmony export */   MarkInputStatus: () => (/* binding */ MarkInputStatus),
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function isFromPopup(element) {
    return element.closest('#reason-modal') !== null;
}
function update_icon(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('update_icon', url);
        if (!(yield shouldExclude(url))) {
            console.log('active icon');
            chrome.action.setIcon({
                path: '../icon.png'
            });
        }
        else {
            console.log('inactive icon');
            chrome.action.setIcon({
                path: '../inactive_icon.png'
            });
        }
    });
}
function findPageMeta(root = null, document = globalThis.document) {
    let all_element_with_meta_data;
    if (root) {
        all_element_with_meta_data = root.querySelectorAll('[data-element-meta-name]');
    }
    else {
        all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]');
    }
    const groupedResult = {};
    all_element_with_meta_data.forEach((element) => {
        const metaName = element.getAttribute('data-element-meta-name');
        const metaData = element.getAttribute('data-element-meta-data');
        if (!groupedResult[metaName]) {
            groupedResult[metaName] = [];
        }
        groupedResult[metaName].push(JSON.parse(metaData));
    });
    return groupedResult;
}
function getClickableElementsInViewport() {
    // Select all potential clickable elements
    const documentCopy = document.cloneNode(true);
    const allElements = documentCopy.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport and add marker
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            // Add marker attribute to the element
            element.setAttribute('visible-clickable-element-marker', 'true');
        }
    });
    return documentCopy;
}
function MarkViewableElements() {
    MarkInputStatus();
    // Select all elements
    const allElements = document.querySelectorAll('a, button, select, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport and add marker
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const inViewport = rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        // Add marker attribute to the element
        element.setAttribute('data-processed-visible-clickable-marker', inViewport ? 'true' : 'false');
    });
}
function MarkInputStatus() {
    // Exclude hidden inputs by using ':not([type="hidden"])'
    const inputs = document.querySelectorAll('input:not([type="hidden"]), select, textarea');
    inputs.forEach((element) => {
        const input = element;
        if (input.value !== null) {
            input.setAttribute('data-processed-input-value', input.value);
        }
        if (input instanceof HTMLInputElement &&
            (input.type === 'checkbox' || input.type === 'radio')) {
            input.setAttribute('data-processed-input-checked', String(input.checked));
        }
        if (input instanceof HTMLSelectElement) {
            const selectedTexts = Array.from(input.selectedOptions)
                .map((opt) => { var _a, _b; return (_b = (_a = opt.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : ''; })
                .join('||');
            input.setAttribute('data-processed-input-selected-text', selectedTexts);
        }
    });
}
// Add cleanup function to remove markers when needed
function removeClickableMarkers() {
    document.querySelectorAll('[visible-clickable-element-marker]').forEach((element) => {
        element.removeAttribute('visible-clickable-element-marker');
    });
}
function shouldExclude(url, ignoreUserId = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!ignoreUserId) {
            if (chrome.storage) {
                const result = yield chrome.storage.local.get('userId');
                if (!result.userId) {
                    console.log('no user id');
                    // if there is no user id, we should not be recording anything
                    return true;
                }
            }
            else {
                const userId = yield new Promise((resolve) => {
                    const handleMessage = (event) => {
                        if (event.data.type === 'GET_USER_ID_RESPONSE') {
                            window.removeEventListener('message', handleMessage);
                            resolve(event.data.userId);
                        }
                    };
                    window.addEventListener('message', handleMessage);
                    window.postMessage({ type: 'GET_USER_ID' }, '*');
                });
                if (!userId) {
                    // if there is no user id, we should not be recording anything
                    return true;
                }
            }
        }
        if (!url) {
            return true;
        }
        return (!_config__WEBPACK_IMPORTED_MODULE_0__.url_includes.some((includeUrl) => url.includes(includeUrl)) ||
            _config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some((excludeUrl) => url.includes(excludeUrl)));
    });
}
function generateHtmlSnapshotId(timestamp, uuid) {
    const url = window.location.href;
    return `html_${hashCode(url)}_${timestamp}_${uuid}`;
}
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    console.log('Hash value before return:', hash);
    return hash.toString();
}
function check_user_id(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.check_user_id_url}?user_id=${user_id}`, {
                method: 'GET'
            });
            const data = yield response.json();
            if (response.ok) {
                return 'success';
            }
            else {
                return data || 'Unknown error';
            }
        }
        catch (error) {
            console.log(`Error: ${error.message}`);
        }
        return 'Unknown error';
    });
}


function selectRecipe(url = null, document = globalThis.document, window = globalThis.window) {
    var _a, _b;
    let parsedUrl;
    if (url) {
        parsedUrl = new URL(url);
    }
    else {
        parsedUrl = new URL(window.location.href);
    }
    let path = parsedUrl.pathname;
    path = path !== '/' ? path.replace(/\/+$/, '') : path;
    for (const recipe of _recipe_new__WEBPACK_IMPORTED_MODULE_1__.recipes) {
        const matchMethod = recipe.match_method || 'text';
        if (matchMethod === 'text') {
            try {
                // Execute script in tab to check for matching element
                const element = document.querySelector(recipe.match);
                const hasMatch = element &&
                    (!recipe.match_text ||
                        ((_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(recipe.match_text.toLowerCase())) !== null && _b !== void 0 ? _b : false));
                if (hasMatch) {
                    console.log('matched with recipe ', recipe.match);
                    return recipe;
                }
            }
            catch (error) {
                console.error('Error checking text match:', error);
            }
        }
        else if (matchMethod === 'url') {
            if (recipe.match === path) {
                console.log('matched with recipe ', recipe.match);
                return recipe;
            }
            else if (recipe.match_with_ref &&
                (path.startsWith(recipe.match + '/ref=') || path.startsWith(recipe.match + 'ref='))) {
                console.log('matched with recipe ', recipe.match);
                return recipe;
            }
        }
    }
    throw new Error(`No matching recipe found for path: ${path}`);
}
function processRecipe(root = null, url = null, document = globalThis.document, window = globalThis.window) {
    console.log('start process recipe');
    try {
        const recipe = selectRecipe(url, document, window);
        let rootElement;
        if (root) {
            rootElement = root;
        }
        else {
            rootElement = document.querySelector(recipe.selector);
        }
        if (rootElement) {
            // console.log(document)
            const newRoot = (0,_element_processor__WEBPACK_IMPORTED_MODULE_2__.processElement)(rootElement, recipe, '', 0, document, window);
            const simplifiedHTML = newRoot.outerHTML;
            return simplifiedHTML;
        }
    }
    catch (error) {
        console.error('Error processing recipe:', error);
    }
}
// Replace the simple question with a more detailed one based on event type
function getCustomQuestion(eventType, data) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    let question = '';
    let placeholder = 'Enter your reason here...';
    switch (eventType) {
        case 'click_a':
        case 'click_b':
        case 'click_c':
            // Check if it's a specific type of click
            if (data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' ||
                data.target.innerText === 'Set Up Now') {
                question =
                    'You <span class="highlight-question">clicked</span> on the set up now button. What makes you choose to subscribe to this product?';
                placeholder = 'I choose to subscribe because...';
            }
            else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' ||
                data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' ||
                data.target.id === 'buy-now-button') {
                question =
                    'You <span class="highlight-question">clicked</span> on the buy now button. What do you like about this particular product?';
                placeholder = 'I am buying this product because...';
            }
            else if (((_a = data['data-semantic-id']) === null || _a === void 0 ? void 0 : _a.startsWith('search_results.')) ||
                ((_b = data['data-semantic-id']) === null || _b === void 0 ? void 0 : _b.startsWith('product_list.')) ||
                (((_c = data['data-semantic-id']) === null || _c === void 0 ? void 0 : _c.startsWith('active_item_list.')) &&
                    ((_d = data['data-semantic-id']) === null || _d === void 0 ? void 0 : _d.endsWith('.product_detail'))) ||
                ((_e = data.target.className) === null || _e === void 0 ? void 0 : _e.includes('sc-product-link'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this product. What caught your attention compared to the other options you saw?';
                placeholder = 'I like this product becauseß...';
            }
            else if (((_f = data['data-semantic-id']) === null || _f === void 0 ? void 0 : _f.endsWith('add_to_cart')) ||
                data.target.id === 'add-to-cart-button' ||
                data.target.name === 'submit.addToCart' ||
                data.target.innerText === 'Add to Cart') {
                question =
                    'You <span class="highlight-question">clicked</span> on the add to cart button. What makes you decide to add this item to your cart?';
                placeholder = 'I add this item to my cart because...';
            }
            else if (data['data-semantic-id'] === 'nav_bar.search_button') {
                question =
                    'You <span class="highlight-question">clicked</span> on the search button. What are you searching for?';
                placeholder = 'I want to find ...';
            }
            else if (((_g = data['data-semantic-id']) === null || _g === void 0 ? void 0 : _g.startsWith('refinements.')) ||
                ((_h = data['data-semantic-id']) === null || _h === void 0 ? void 0 : _h.startsWith('filters.'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this filter. What are you hoping to find with this filter?';
                placeholder = 'I want to find ...';
            }
            else if ((_j = data['data-semantic-id']) === null || _j === void 0 ? void 0 : _j.startsWith('product_options.')) {
                question =
                    'You <span class="highlight-question">clicked</span> on this product option. What do you like about this product option?';
                if (data['element-meta-name'] === 'product_options' && data['element-meta-data'] !== '') {
                    question = `You <span class="highlight-question">clicked</span> on ${data['element-meta-data']['value']}. What do you like about this product option?`;
                }
                placeholder = 'I like this product option because...ß';
            }
            else if ((_k = data['data-semantic-id']) === null || _k === void 0 ? void 0 : _k.endsWith('check_out')) {
                question =
                    'You <span class="highlight-question">clicked</span> checkout button. What makes you choose to checkout?';
                placeholder = 'I choose to checkout because...';
            }
            else {
                question =
                    'You <span class="highlight-question">clicked</span> on this element. Could you share what you were trying to do or find?';
                placeholder = 'Enter your reason here...';
            }
            break;
        case 'scroll':
            question =
                'You <span class="highlight-question">scrolled</span> on this page. What information are you looking for?';
            placeholder = 'I want to find ...';
            break;
        case 'input':
            question =
                'You <span class="highlight-question">typed</span> in this input field. What are you searching for?';
            placeholder = 'I want to find ...';
            break;
        case 'navigation':
            if (data.navigationType === 'back') {
                question =
                    'Why did you decide to <span class="highlight-question">go back</span> to the previous page?';
                placeholder = "I'm back because...";
            }
            else if (data.navigationType === 'forward') {
                question =
                    'Why did you decide to <span class="highlight-question">return</span> to this page ?';
                placeholder = 'I want to find ...';
            }
            question = `What is the reason for this <span class="highlight-question">${data.navigationType} navigation</span>?`;
            placeholder = 'Enter your reason here...';
            break;
        case 'tabActivate':
            question = `Why did you <span class="highlight-question">switch to this tab</span>?`;
            placeholder = 'I switched to this tab because...';
            break;
        default:
            question = `What is the reason for the ${eventType} action?`;
            placeholder = 'Enter your reason here...';
            break;
    }
    return { question, placeholder };
}
function isValidReason(reason) {
    if (!reason || reason.trim().length === 0) {
        return false; // Empty input
    }
    if (reason.trim().length < 2 || reason.length < 5) {
        return false; // Too short to be meaningful, at least 5 characters and 2 words
    }
    // Check for repetitive or meaningless input (e.g., "aaa","!!!")
    const meaninglessPatterns = [/^(.)\1{3,}$/, /^[^a-zA-Z0-9]+$/];
    for (const pattern of meaninglessPatterns) {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function captureScreenshot(timestamp, uuid) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const screenshotId = `screenshot_${timestamp}_${uuid}`
            const response = (yield chrome.runtime.sendMessage({
                action: 'captureScreenshot',
                timestamp,
                uuid
            }));
            if (!response.success) {
                throw new Error(response.message || 'Screenshot capture failed');
            }
            window.postMessage({
                type: 'SCREENSHOT_COMPLETE',
                timestamp: timestamp,
                success: true
            }, '*');
        }
        catch (error) {
            console.error('Error capturing screenshot in content script:', error);
            window.postMessage({
                type: 'SCREENSHOT_COMPLETE',
                timestamp: timestamp,
                success: false,
                error: error.message
            }, '*');
        }
    });
}
window.addEventListener('message', (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.source !== window)
        return;
    if (event.data.type && event.data.type === 'GET_USER_ID') {
        const result = yield chrome.storage.local.get('userId');
        const userId = result.userId;
        window.postMessage({ type: 'GET_USER_ID_RESPONSE', userId: userId }, '*');
    }
    if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
        yield captureScreenshot(event.data.timestamp, event.data.uuid);
    }
    if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
        try {
            const dataForBackground = Object.assign({}, event.data.data);
            const response2 = (yield chrome.runtime.sendMessage({
                action: 'saveData',
                data: dataForBackground
            }));
            if (!response2.success) {
                throw new Error(response2.message || 'interaction capture failed');
            }
            window.postMessage({
                type: 'INTERACTION_COMPLETE',
                timestamp: event.data.data.timestamp,
                success: true
            }, '*');
        }
        catch (error) {
            console.error('Error saving interaction data:', error);
            window.postMessage({
                type: 'INTERACTION_COMPLETE',
                success: false,
                error: error.message,
                timestamp: event.data.data.timestamp
            }, '*');
        }
    }
}));
const work = () => {
    // Extend the Window interface to include custom properties
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded event triggered');
        (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
        (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
    });
    // Function to capture interactions
    function captureInteraction(eventType, target, timestamp, uuid, windowSize, scrollDistance, scrollCurrentTop, scrollCurrentLeft, scrollDistance_X) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Generate new HTML snapshot ID
                const currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
                const simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
                // console.log('start time:', new Date().toISOString())
                (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
                // console.log('end time:', new Date().toISOString())
                const pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
                let data = {
                    uuid: uuid,
                    eventType,
                    timestamp: timestamp,
                    htmlSnapshotId: currentSnapshotId,
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
                yield chrome.runtime.sendMessage({ action: 'saveData', data });
            }
            catch (error) {
                console.error(`Error during ${eventType} event handling:`, error);
            }
        });
    }
    // Variables to track scroll events
    let isScrolling = false;
    let scrollTimeout;
    let scrollStartTop = window.scrollY || document.documentElement.scrollTop;
    let accumulatedScrollDistance = 0;
    let scrollStartLeft = window.scrollX || document.documentElement.scrollLeft;
    let accumulatedScrollDistance_X = 0;
    // Function to handle the first scroll event in a scroll sequence
    function handleFirstScroll(scrollUuid, scrollTimestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('First scroll event');
                captureScreenshot(scrollTimestamp, scrollUuid);
                (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            }
            catch (error) {
                console.error('Error during first scroll handling:', error);
            }
        });
    }
    // Function to handle when scrolling stops (no scroll events within the threshold)
    function handleScrollStop(scrollUuid, scrollTimestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('scroll stop uuid', scrollUuid);
                const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
                accumulatedScrollDistance += currentScrollTop - scrollStartTop;
                const currentScrollLeft = window.scrollX || document.documentElement.scrollLeft;
                accumulatedScrollDistance_X += currentScrollLeft - scrollStartLeft;
                // INSERT_YOUR_CODE
                const windowSize = {
                    width: window.innerWidth,
                    height: window.innerHeight
                };
                if (accumulatedScrollDistance !== 0 || accumulatedScrollDistance_X !== 0) {
                    // Record the scroll interaction with the accumulated scroll distance
                    yield captureInteraction('scroll', window.location.href, scrollTimestamp, scrollUuid, windowSize, accumulatedScrollDistance, currentScrollTop, accumulatedScrollDistance_X, currentScrollLeft);
                    // Reset accumulated scroll distance
                    accumulatedScrollDistance = 0;
                    accumulatedScrollDistance_X = 0;
                    scrollStartTop = currentScrollTop;
                    scrollStartLeft = currentScrollLeft;
                }
                isScrolling = false;
            }
            catch (error) {
                console.error('Error during scroll stop handling:', error);
            }
        });
    }
    let scrollUuid = '';
    let scrollTimestamp = '';
    // Event listener for scroll events
    document.addEventListener('scroll', (event) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('scroll event');
        if (document.getElementById('reason-modal')) {
            return;
        }
        if (event.target !== window &&
            event.target !== document &&
            event.target !== document.documentElement) {
            console.log('Scroll event ignored from a nested scrollable container');
            return;
        }
        if (!isScrolling) {
            isScrolling = true;
            scrollStartTop = window.scrollY || document.documentElement.scrollTop;
            scrollUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
            scrollTimestamp = new Date().toISOString();
            yield handleFirstScroll(scrollUuid, scrollTimestamp);
        }
        // Clear the existing timeout and set a new one
        window.clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => handleScrollStop(scrollUuid, scrollTimestamp), _config__WEBPACK_IMPORTED_MODULE_1__.scroll_threshold); // Threshold of 300ms
    }));
    // document.addEventListener('DOMContentLoaded', () => {
    //   // Handle all types of order buttons
    //   const placeOrderButtons = document.querySelectorAll(
    //     'input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]'
    //   )
    //   const buyNowButton = document.querySelector('input[id="buy-now-button"]')
    //   const setupNowButton = document.querySelector(
    //     'button[id="rcx-subscribe-submit-button-announce"]'
    //   )
    //   const proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]')
    //   // Handle Buy Now and Set Up Now buttons if present
    //   ;[buyNowButton, setupNowButton].forEach((button) => {
    //     if (button) {
    //       button.addEventListener('click', async () => {
    //         try {
    //           const productInfo = {
    //             title: (document.querySelector('#title') as HTMLElement)?.innerText?.trim() || '',
    //             price:
    //               (
    //                 document.querySelector(
    //                   'span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay'
    //                 ) as HTMLElement
    //               )?.innerText?.trim() || '',
    //             asin: (document.querySelector('input#ASIN') as HTMLInputElement)?.value || '',
    //             options: {}
    //           }
    //           // Get all option selections
    //           const optionRows = Array.from(
    //             document.querySelectorAll(
    //               '#twister div.a-row:has(label.a-form-label):has(span.selection)'
    //             )
    //           )
    //           optionRows.forEach((row) => {
    //             const label =
    //               (row.querySelector('label.a-form-label') as HTMLElement)?.innerText?.replace(
    //                 ': ',
    //                 ''
    //               ) || ''
    //             const value = (row.querySelector('span.selection') as HTMLElement)?.innerText || ''
    //             if (label && value) {
    //               ;(productInfo.options as any)[label] = value
    //             }
    //           })
    //           console.log(`${button.id} clicked - Product Info:`, productInfo)
    //           await chrome.runtime.sendMessage({
    //             action: 'saveOrder',
    //             data: {
    //               timestamp: new Date().toISOString(),
    //               name: productInfo.title,
    //               price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
    //               asin: productInfo.asin,
    //               options: productInfo.options
    //             }
    //           })
    //         } catch (error) {
    //           console.error(`Error capturing ${button.id} product info:`, error)
    //         }
    //       })
    //     }
    //   })
    //   if (proceedToCheckoutButton) {
    //     proceedToCheckoutButton.addEventListener('click', async (event) => {
    //       try {
    //         const selectedItems = []
    //         const cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter(
    //           (item) => item.id !== 'sc-active-cart'
    //         )
    //         for (const item of cartItems) {
    //           const checkbox = item.querySelector('input[type="checkbox"]') as HTMLInputElement
    //           if (checkbox && checkbox.checked) {
    //             const productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link')
    //             if (productLink) {
    //               const fullNameElement = productLink.querySelector('.a-truncate-full')
    //               const name = fullNameElement?.textContent?.trim() || ''
    //               const href = productLink.getAttribute('href') || ''
    //               const asin = href.match(/product\/([A-Z0-9]{10})/)?.[1] || ''
    //               const priceElement = item.querySelector('.sc-item-price-block .a-offscreen')
    //               const price = priceElement
    //                 ? parseFloat(priceElement.textContent?.replace(/[^0-9.]/g, '') || '0')
    //                 : 0
    //               const options: { [key: string]: string } = {}
    //               const variationElements = item.querySelectorAll('.sc-product-variation')
    //               variationElements.forEach((variation) => {
    //                 const label =
    //                   variation.querySelector('.a-text-bold')?.textContent?.trim().replace(':', '') ||
    //                   ''
    //                 const value =
    //                   variation
    //                     .querySelector('.a-size-small:not(.a-text-bold)')
    //                     ?.textContent?.trim() || ''
    //                 if (label && value) {
    //                   options[label] = value
    //                 }
    //               })
    //               selectedItems.push({
    //                 timestamp: new Date().toISOString(),
    //                 name,
    //                 asin,
    //                 price,
    //                 options
    //               })
    //             }
    //           }
    //         }
    //         if (selectedItems.length > 0) {
    //           await chrome.runtime.sendMessage({ action: 'saveOrder', data: selectedItems })
    //         }
    //       } catch (error) {
    //         console.error('Error capturing selected cart items:', error)
    //       }
    //     })
    //   }
    // })
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log('message', message);
        if (message.action === 'getHTML') {
            const simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
            (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
            const htmlContent = document.documentElement.outerHTML;
            const pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
            const windowSize = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            sendResponse({
                html: htmlContent,
                pageMeta: pageMeta,
                simplifiedHTML: simplifiedHTML,
                windowSize: windowSize
            });
        }
        if (message.action === 'show_popup') {
            console.log('show_popup', message);
            // assert there isn't already a popup
            if (document.getElementById('reason-modal')) {
                sendResponse({ success: false, message: 'popup already exists' });
                return;
            }
            createModal(message.question, message.placeholder, sendResponse);
            return true; // Will respond asynchronously
        }
        if (message.action === 'showReminder') {
            console.log('showReminder');
            const data = message.data;
            // console.log('data', data)
            alert(`Thank you for participating!\nYou have contributed ${data.on_date} rationales this week\nYou have contributed ${data.all_time} rationales in total. `);
        }
    });
    function createModal(question, placeholder, sendResponse) {
        const modalHtml = `
        <div id="reason-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
        ">
            <div style="
                background: white;
                padding: 20px;
                border-radius: 8px;
                width: 400px;
            ">
                <style>
                    .highlight-question {
                        padding: 0px 6px;
                        border-radius: 3px;
                        display: inline-block;
                        color: rgb(24, 160, 88);
                        border: 1px solid rgba(24, 160, 88, 0.3);
                        background: rgba(24, 160, 88, 0.1);
                        transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                </style>
                <h3>${question}</h3>
                <textarea id="reason-input" placeholder="${placeholder}" style="
                    width: 100%;
                    height: 100px;
                    margin: 10px 0;
                "></textarea>
                <div id="error-message" style="
                    color: red;
                    display: none;
                    font-size: 12px;
                    margin-top: 5px;
                ">
                    Please enter a valid reason.
                </div>
                <div style="
                    text-align: right;
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                ">
                    <button id="reason-skip">Skip</button>
                    <button id="reason-submit">Submit</button>
                </div>
            </div>
        </div>
    `;
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHtml;
        // if attach-desktop-sideSheet exists
        if (document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')) {
            document
                .querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')
                .appendChild(modalContainer);
        }
        else {
            document.body.appendChild(modalContainer);
        }
        // Add event listeners
        document.getElementById('reason-submit').addEventListener('click', () => {
            const input = document.getElementById('reason-input');
            const errorMessage = document.getElementById('error-message');
            const value = input.value;
            if (!(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isValidReason)(value)) {
                errorMessage.style.display = 'block'; // Show the error message
                return; // Prevent submission if the reason is invalid
            }
            else {
                errorMessage.style.display = 'none'; // Hide the error message
            }
            modalContainer.remove();
            sendResponse({ input: value, success: true });
        });
        document.getElementById('reason-skip').addEventListener('click', () => {
            const input = document.getElementById('reason-input');
            modalContainer.remove();
            sendResponse({ input: null, success: false });
        });
    }
};
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then((result) => {
    console.log('content script, shouldExclude', result);
    if (!result) {
        work();
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN2QixZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUM7UUFDRixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDcEUsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXdCO1lBQzVFLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsWUFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFDRCwwREFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxNQUFNLENBQUM7SUFDcEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLElBQUksRUFBRTtLQUNQO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF9zY3JvbGxfcHJvYmFiaWxpdHkgPSAwLjFcbmV4cG9ydCBjb25zdCBwb3B1cF9jbGlja19wcm9iYWJpbGl0eSA9IDAuMlxuZXhwb3J0IGNvbnN0IHBvcHVwX25hdmlnYXRpb25fcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYFxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWVcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pbydcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnaGFpbGFiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlcyA9IFsnd3d3LmFtYXpvbi5jb20nXVxuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zX3JlY29yZF9zdGF0dXNgXG5leHBvcnQgY29uc3QgcmF0aW9uYWxlX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vcmF0aW9uYWxlX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvc2lnbmluJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvY3ZmLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL3Byb2ZpbGUvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXgvYWNjb3VudC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NoZWNrb3V0cG9ydGFsLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcmltZWNlbnRyYWwvZWRpdFBheW1lbnRQcmVmZXJlbmNlJ1xuXVxuZXhwb3J0IGNvbnN0IHNjcm9sbF90aHJlc2hvbGQgPSAzMDBcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gIHNlbGVjdG9yOiAnI25hdmJhci1tYWluJyxcbiAgbmFtZTogJ25hdl9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtYmFyLWZvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQjdHdvdGFic2VhcmNodGV4dGJveCcsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9pbnB1dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBlbT8udmFsdWVcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfdGVybScsIGRhdGE6IHsgdGVybSB9IH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtb3JkZXJzJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ29yZGVyX2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1jYXJ0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWNhcnQgLm5hdi1saW5lLTInLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnY2FydF9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtZmx5b3V0LXNlYXJjaEFqYXgnLFxuICAgICAgbmFtZTogJ3N1Z2dlc3RlZF90ZXJtcycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1zdWdnZXN0aW9uLWVsbGlwc2lzLWRpcmVjdGlvbicsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRfc2lkZV9iYXIgPSB7XG4gIHNlbGVjdG9yOiAnI25hdi1mbHlvdXQtZXdjJyxcbiAgbmFtZTogJ2NhcnRfc2lkZV9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1jYXJ0LWhlYWRlcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWNvbXBhY3QtYWN0aW9ucyBhJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNld2MtY29tcGFjdC1ib2R5IHVsJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGRpdltpZF49J3NjLWl0ZW0nXVwiLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXYuZXdjLWl0ZW0taW1hZ2UgYS5zYy1wcm9kdWN0LWxpbmsgaW1nOm5vdCguZXdjLXNmbC1pbWFnZS1zbWFsbCknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdGl0bGVFbT8uYWx0IHx8ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKScsXG4gICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmV3Yy11bml0LXByaWNlJyxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuW2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0nLFxuICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtZGVsZXRlLWljb24tY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5ld2MtdW5pdC1wcmljZScpXG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXYuZXdjLWl0ZW0taW1hZ2UgYS5zYy1wcm9kdWN0LWxpbmsgaW1nOm5vdCguZXdjLXNmbC1pbWFnZS1zbWFsbCknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmFsdFxuICAgICAgICAgICAgY29uc3QgdXJsRW0gPSB0aXRsZUVtPy5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnZGl2W2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0sIHNwYW5bZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAnY2FydF9pdGVtcycsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZmluZW1lbnRfb3B0aW9uID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiAncmVmaW5lbWVudC10aXRsZSdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ3VsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpOmhhcyhhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0pJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IGxpID4gc3BhbiA+IGRpdltkYXRhLWEtZXhwYW5kZXItbmFtZT0nZmlsdGVyLWNvbnRlbnQtZXhwYW5kZXInXVwiLFxuICAgIG5hbWU6ICdtb3JlX29wdGlvbnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImFbZGF0YS1jc2EtYy1mdW5jLWRlcHM9J2F1aS1kYS1hLWV4cGFuZGVyLXRvZ2dsZSddXCIsXG4gICAgICAgIG5hbWU6ICd0b2dnbGVfZXhwYW5zaW9uJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJ3VsJylcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eSwgZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0nLFxuICBuYW1lOiAncXVhbnRpdHlfc2VsZWN0b3InLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3RfcXVhbnRpdHknLCBkYXRhOiB7IHF1YW50aXR5OiBlbS5pbm5lclRleHQgfSB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2J1dHRvbicsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjpcbiAgICBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ10sICNmcmVzaEFkZFRvQ2FydEJ1dHRvbiBpbnB1dFwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICBjbGFzczogJ3Byb2R1Y3QtYWRkLXRvLWNhcnQnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6IFwiaW5wdXRbbmFtZT0nc3VibWl0LmJ1eS1ub3cnXVwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYnV5X25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1idXktbm93J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRoX2FjY29yZGlvbiA9IHtcbiAgc2VsZWN0b3I6ICcjYnV5Qm94QWNjb3JkaW9uID4gZGl2LmEtYm94LmNlbHdpZGdldCcsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmFjY29yZGlvbi1jYXB0aW9uID4gc3BhbicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgIFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9kZXNrdG9wX2FjY29yZGlvbl9oZWFkZXInXSwgZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9tb2JpbGVfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9ncm91cF8yX0Rlc2t0b3AnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3BpY2tVcE9mZmVyRGlzcGxheScsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY29sbGFwc2VkLWNhcnRzLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ2NhcnQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxvY2FsbWFya2V0LXRleHQtbG9nbycsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLW5hbWU9XCJjb2xsYXBzZWRfaXRlbV9saXN0XCJdJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnaXRlbV9saXN0J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggaW5wdXRbbmFtZV49XCJwcm9jZWVkVG9BTE1DaGVja291dFwiXScsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBhJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGxhYmVsJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWltYWdlLXdyYXBwZXIgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLXByb2R1Y3QtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRFbT8uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGxcbiAgICAgICAgICBjb25zdCBvcHRpb25zRW0gPSBlbS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5zYy1wcm9kdWN0LXZhcmlhdGlvbiA+IHNwYW4nKVxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uRW0gb2Ygb3B0aW9uc0VtKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXlFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdGV4dC1ib2xkJylcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlRW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbjpub3QoLmEtdGV4dC1ib2xkKScpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXkgPSBvcHRpb25LZXlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1s6XFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlRW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0geyBbb3B0aW9uS2V5XTogb3B0aW9uVmFsdWUgfVxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSwgcXVhbnRpdHksIHNlbGVjdGVkLCBvcHRpb25zIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gaW5wdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBmcmVzaF9jYXJvdXNlbF9jYXJkID0ge1xuICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCwgZGl2W2lkXj1cImdyaWRFbGVtZW50XCJdJyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhOmhhcyhkaXYuYS1pbWFnZS1jb250YWluZXIpJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6IFwic3BhbltpZF49J3FzLXdpZGdldC1hdGMtYnV0dG9uJ11cIixcbiAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFRvIENhcnQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdJyxcbiAgICAgIG5hbWU6ICdxdWFudGl0eV9zZWxlY3RvcicsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbF49J1JlbW92ZSddXCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWNyZWFzZSBxdWFudGl0eSBieSAxJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvbltpZF49J3FzLXdpZGdldC1idXR0b24tYXRmYyddXCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxePSdBZGQnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnSW5jcmVhc2UgcXVhbnRpdHkgYnkgMScsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYSA+IHNwYW4gPiBzcGFuID4gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdiA+IHNwYW4gPiBzcGFuID4gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInByaWNlVG9QYXlcIl0gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQgYS5hLXNpemUtbWluaScsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfVxuICBdLFxuICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtY3NhLWMtaXRlbS1pZF49XCJhbXpuMS5hc2luXCJdJylcbiAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NhLWMtaXRlbS1pZCcpPy5zcGxpdCgnOicpWzBdLnNwbGl0KCcuJykucG9wKClcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cInByaWNlVG9QYXlcIl0gc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKScpXG4gICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0gYnV0dG9uW2lkXj1cInFzLXdpZGdldC1idXR0b24tYXRmY1wiXSdcbiAgICApXG4gICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmVzaF9zdWJzdGl0dXRpb25fY2FyZCA9IHtcbiAgc2VsZWN0b3I6ICdkaXYuc3Vicy1jYXJ0LWl0ZW0nLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNwYWNpbmctdG9wLWJhc2Ugc3Bhbi5hLXNpemUtYmFzZScsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zcGFjaW5nLXRvcC1iYXNlIHNwYW4uYS1zaXplLWJhc2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc3BhY2luZy10b3AtbWluaSBzcGFuLmEtY29sb3ItcHJpY2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9XG4gIF0sXG4gIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1jYXJ0LWl0ZW0tYXNpbl0nKVxuICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1jYXJ0LWl0ZW0tYXNpbicpXG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXNwYWNpbmctdG9wLWJhc2Ugc3Bhbi5hLXNpemUtYmFzZScpXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LmEtc3BhY2luZy10b3AtbWluaSBzcGFuLmEtY29sb3ItcHJpY2UnKVxuICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtcycsIGRhdGE6IHsgYXNpbiwgdGl0bGUsIHByaWNlIH0gfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmVzaF9jYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLXByb2R1Y3QtaW1hZ2UtZGVza3RvcCBhIGltZycsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWFjdGlvbi1saW5rcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nUmVtb3ZlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1YW50aXR5X2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1jb250YWluZXItYXRmY1wiXSBzcGFuW2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWF0Yy1hdGZjXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScpXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcigndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1hY3Rpb24tbGlua3MgZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIGZyZXNoX2Nhcm91c2VsX2NhcmQsXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY2FydC1hYm92ZS1hY3Rpb25zIGJ1dHRvbiwgI3NjLWNhcnQtYWJvdmUtYWN0aW9ucyBhJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgYnV5X2FnYWluID0gW1xuICBuYXYsXG4gIGNhcnRfc2lkZV9iYXIsXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb246aGFzKGRpdi5maWx0ZXItY29udGFpbmVyKScsXG4gICAgbmFtZTogJ2ZpbHRlcnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmZpbHRlci1jb250YWluZXInLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtLmlubmVyVGV4dFxuICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbVxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXYuZmlsdGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInKVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYWxtLWdyaWQtZGVza3RvcC1ncmlkLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ3Byb2R1Y3RfbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZ3JpZENlbGxcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdncmlkRWxlbWVudCddXCIsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VkX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0naW5mbyddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcGVuX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybSBzcGFuLmEtYnV0dG9uLWlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZXhwYW5kZWRJbWFnZSddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UgUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltpZF49J2Nsb3NlZENhcmQnXSBkaXZbaWRePSdpbmZvJ11cIilcbiAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSAjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50J1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtc19jbG9zZWQnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgZGVsaXZlcnkgfSB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlYXR1cmVkXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBkaXZbaWRePVwiZGV0YWlsQ29udGVudFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0YWlsZWRfY29udGVudCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2NsYXNzKj0nbXVsdGlPZmZlclBpbGxDb250YWluZXInXSBhXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ10sIGRpdltjbGFzcyo9J2FzaW5EZXRhaWxJbmZvQ29sdW1ucyddOmhhcyhpbnB1dFtuYW1lPSdzdWJtaXQuYWRkVG9DYXJ0J11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxBY3Rpb25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImJ1eS1ub3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0uY2xvc2VzdCgnZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W25hbWU9XCJheC1xc1wiXSBkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHQgfHwgJzEnXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zX29wZW5lZF9wdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nU05TJ10sIGRpdltjbGFzcyo9J3Nuc1Vwc2VsbEJsb2NrQ29udGFpbmVyJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzbnNCdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0X3VwX3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0uY2xvc2VzdCgnZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zX29wZW5lZF9zbnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdkZXRhaWwtdmlldy1zaW1pbGFyLWl0ZW1zJ11cIixcbiAgICAgICAgICAgIG5hbWU6ICdzaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtaW1hZ2UtY29udGFpbmVyOmhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIGlucHV0W25hbWVePVwiYXRmY1NoaW1cIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiQWRkIHRvIENhcnQuIENsaWNrIHRvIGNoYW5nZSBxdWFudGl0eVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2W2lkXj1cImZlYXR1cmVkXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gYVtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGUgPSBwYXJlbnRUaXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkZWxpZ2h0RmFjZW91dFwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFRpdGxlICsgJy5zaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3Nuc1Vwc2VsbE1vZGFsJyxcbiAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cIm1vZGFsSGVhZGVyXCJdJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwibW9kYWxIZWFkZXJUZXh0XCJdJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bZGF0YS1hY3Rpb249XCJhLXBvcG92ZXItY2xvc2VcIl0nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJtb2RhbENvbnRlbnRcIl0nLFxuICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6bm90KFtjbGFzcyo9XCJidXR0b25Db250YWluZXJcIl0pOm5vdCg6aGFzKHNlbGVjdCkpJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgIC8vICAgbmFtZTogJ29wZW5fZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgIC8vICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIC8vICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgLy8gICB0ZXh0X2Zvcm1hdDogXCJEZWxpdmVyeSBldmVyeToge31cIixcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImJ1dHRvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiY2FuY2VsQnV0dG9uQ29udGFpbmVyXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwic3Vic2NyaXB0aW9uQnV0dG9uQ29udGFpbmVyXCJdIGlucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBTdWJzY3JpcHRpb24gdG8gQ2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJtb2RhbENvbnRlbnRcIl0nKVxuICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uaWQ/LnNwbGl0KCctJylbMV0/LnRyaW0oKVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3BvcG92ZXJfaXRlbScsIGRhdGE6IHsgYXNpbiB9IH1cbiAgICB9XG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2LCBjYXJ0X3NpZGVfYmFyXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2ZtYy9zdG9yZWZyb250JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW25hdiwgY2FydF9zaWRlX2Jhcl1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9zJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0b3BSZWZpbmVtZW50c1xcXFwvMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvcF9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1JlY2VudGx5IHVzZWQgZmlsdGVycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXZpZXdzX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1c3RvbWVyIFJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zLW5hdmlnYXRpb24tY2xlYXItbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGU6ICdwcmljZV9yYW5nZScsIHJhbmdlIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21pbl92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2codGV4dClcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9tYXhfdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1zdWJtaXQtcmFuZ2UtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdF9wcmljZV9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0dvJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yZXNldC1yYW5nZS1saW5rIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVzZXRfcHJpY2Vfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwX25fZGVhbF90eXBlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWFsc19kaXNjb3VudHNfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9kZWFsc19kaXNjb3VudF9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LkFkSG9sZGVyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWFzaW5dJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2RhdGEtdHlwZT0ncHJvZHVjdFRpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYucy12YXJpYXRpb25zLW9wdGlvbnMtZWxldmF0ZWQsIGRpdi5zLXZhcmlhdGlvbnMtb3B0aW9ucy1qdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmdfY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2FkZC10by1jYXJ0J10gYnV0dG9uLCBzcGFuW2lkKj0nYWRkLXRvLWNhcnQnXSBpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZGVyLmEtcG9wb3Zlci1oZWFkZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhbltkYXRhLWNvbXBvbmVudC10eXBlPSdzLXByb2R1Y3QtaW1hZ2UnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfc3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDIpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYS5hLXRleHQtbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hc2luXScpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYS5hLXRleHQtbm9ybWFsIHNwYW5bYXJpYS1oaWRkZW49XCJ0cnVlXCJdJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgxKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gdGl0bGVFbVxuICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdJylcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0VtID0gZW0ucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDEpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYywgZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDIpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb25FbSBvZiBvcHRpb25zRW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25LZXlFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UsIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleSA9IG9wdGlvbktleUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlRW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHsgW29wdGlvbktleV06IG9wdGlvblZhbHVlIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXJfaXRlbScsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgb3B0aW9ucyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2NlbnRlckNvbCcsXG4gICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydpZCddLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Omhhcygjc25zLWJhc2UtcHJpY2UpICNzbnMtYmFzZS1wcmljZSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Om5vdCg6aGFzKCNzbnMtYmFzZS1wcmljZSkpIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBwcmljZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgPiBsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBsYWJlbC5hLWZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIHNwYW4uc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAvLyBoYW5kbGUgbmV3IHR3aXN0ZXJzXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyLXBsdXMtaW5saW5lLXR3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1yb3cnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkIHNwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICk/LmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpPy5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uLmlubmVySFRNTC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBzcGFuOm5vdCguYW9rLWhpZGRlbikgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bC5hLXVub3JkZXJlZC1saXN0LCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwuYS11bm9yZGVyZWQtbGlzdCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Fib3V0X3RoaXNfaXRlbScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBYm91dCB0aGlzIGl0ZW06ICcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldF9saXN0OiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnI2J1eWJveDpub3QoOmhhcyhkaXYuYS10YWItY29udGFpbmVyKSk6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVCdXlib3ggZGl2LmEtc2VjdGlvbi5hLXRleHQtY2VudGVyLmEtc3BhY2luZy1zbWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LXBhbmUgI2F0dGFjaC13YXJyYW50eS1kaXNwbGF5JyxcbiAgICAgICAgICAgIG5hbWU6ICd3YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmF0dGFjaC13YXJyYW50eS1ib3gnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpLmEtaWNvbi1jaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hdHRhY2gtd2FycmFudHktYnV0dG9uLXJvdycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF9wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgUHJvdGVjdGlvbidcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lOb0NvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25vX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ05vIFRoYW5rcydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2FkZC10by1jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgICAgIGZldGNoX3VybDogJy9jYXJ0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICAgICAgZmV0Y2hfdXJsOiAnL2NhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvY2FydC92aWV3Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2xvY2FsbWFya2V0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogZnJlc2hfY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FsbS9ieWcnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdhW25hbWU9XCJwcm9jZWVkVG9DaGVja291dFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmcmVzaF9jYXJvdXNlbF9jYXJkXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hbG0vc3Vic3RpdHV0aW9uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N1YnNDb250aW51ZUJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDb250aW51ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZyZXNoX3N1YnN0aXR1dGlvbl9jYXJkXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5YWdhaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBidXlfYWdhaW5cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbiIsImRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY2xpY2thYmxlX3JlY2lwZXM6IGFueVxuICAgIGlucHV0X3JlY2lwZXM6IGFueVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChcbiAgZWxlbWVudDogYW55LFxuICByZWNpcGU6IGFueSxcbiAgcGFyZW50TmFtZSA9ICcnLFxuICBudGhDaGlsZCA9IDAsXG4gIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCxcbiAgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3dcbikge1xuICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgZWxlbWVudDogXCIsIGVsZW1lbnQsIHJlY2lwZSk7XG4gIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSlcbiAgfVxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgbGV0IGVsZW1lbnRUZXh0ID0gJydcbiAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpXG4gICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfanMoZWxlbWVudClcbiAgICBpZiAoZWxlbWVudFRleHQgPT09ICcnIHx8IGVsZW1lbnRUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0IGpzIGRvZXMgbm90IGRldGVjdCB0ZXh0IGZvciBlbGVtZW50ICcsIGVsZW1lbnQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZmV0Y2hfdXJsKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmV0Y2gtdXJsJywgcmVjaXBlLmZldGNoX3VybClcbiAgfVxuXG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKCkgfHwgb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KFxuICAgICAgICAgIGNoaWxkRWxlbWVudCxcbiAgICAgICAgICBjaGlsZFJlY2lwZSxcbiAgICAgICAgICBwYXJlbnROYW1lLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgIHdpbmRvd1xuICAgICAgICApXG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZXMsIGNoZWNrX3VzZXJfaWRfdXJsIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlX2ljb24odXJsKSB7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGVfaWNvbicsIHVybClcbiAgaWYgKCEoYXdhaXQgc2hvdWxkRXhjbHVkZSh1cmwpKSkge1xuICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pY29uLnBuZydcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2luYWN0aXZlX2ljb24ucG5nJ1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYWdlTWV0YShyb290ID0gbnVsbCwgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50KSB7XG4gIGxldCBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YVxuICBpZiAocm9vdCkge1xuICAgIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuICB9IGVsc2Uge1xuICAgIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcbiAgfVxuXG4gIGNvbnN0IGdyb3VwZWRSZXN1bHQgPSB7fVxuXG4gIGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBtZXRhTmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJylcbiAgICBjb25zdCBtZXRhRGF0YSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJylcblxuICAgIGlmICghZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0pIHtcbiAgICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdID0gW11cbiAgICB9XG4gICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0ucHVzaChKU09OLnBhcnNlKG1ldGFEYXRhKSlcbiAgfSlcblxuICByZXR1cm4gZ3JvdXBlZFJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAvLyBTZWxlY3QgYWxsIHBvdGVudGlhbCBjbGlja2FibGUgZWxlbWVudHNcbiAgY29uc3QgZG9jdW1lbnRDb3B5ID0gZG9jdW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIERvY3VtZW50XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnRDb3B5LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG5cbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBpZiAoXG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgICkge1xuICAgICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicsICd0cnVlJylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBkb2N1bWVudENvcHlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtWaWV3YWJsZUVsZW1lbnRzKCkge1xuICBNYXJrSW5wdXRTdGF0dXMoKVxuXG4gIC8vIFNlbGVjdCBhbGwgZWxlbWVudHNcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIHNlbGVjdCwgW29uY2xpY2tdLCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJ1xuICApXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgaW5WaWV3cG9ydCA9XG4gICAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLXZpc2libGUtY2xpY2thYmxlLW1hcmtlcicsIGluVmlld3BvcnQgPyAndHJ1ZScgOiAnZmFsc2UnKVxuICB9KVxufVxuZXhwb3J0IGZ1bmN0aW9uIE1hcmtJbnB1dFN0YXR1cygpIHtcbiAgLy8gRXhjbHVkZSBoaWRkZW4gaW5wdXRzIGJ5IHVzaW5nICc6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSdcbiAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6bm90KFt0eXBlPVwiaGlkZGVuXCJdKSwgc2VsZWN0LCB0ZXh0YXJlYScpXG4gIGlucHV0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnRcblxuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC12YWx1ZScsIGlucHV0LnZhbHVlKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgICAgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJylcbiAgICApIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQtaW5wdXQtY2hlY2tlZCcsIFN0cmluZyhpbnB1dC5jaGVja2VkKSlcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0cyA9IEFycmF5LmZyb20oaW5wdXQuc2VsZWN0ZWRPcHRpb25zKVxuICAgICAgICAubWFwKChvcHQpID0+IG9wdC50ZXh0Q29udGVudD8udHJpbSgpID8/ICcnKVxuICAgICAgICAuam9pbignfHwnKVxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1zZWxlY3RlZC10ZXh0Jywgc2VsZWN0ZWRUZXh0cylcbiAgICB9XG4gIH0pXG59XG4vLyBBZGQgY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgbWFya2VycyB3aGVuIG5lZWRlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrYWJsZU1hcmtlcnMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcl0nKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJylcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNob3VsZEV4Y2x1ZGUodXJsOiBzdHJpbmcsIGlnbm9yZVVzZXJJZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGlmICghaWdub3JlVXNlcklkKSB7XG4gICAgaWYgKGNocm9tZS5zdG9yYWdlKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgICBpZiAoIXJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vIHVzZXIgaWQnKVxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRF9SRVNQT05TRScpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS51c2VySWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEJyB9LCAnKicpXG4gICAgICB9KVxuICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiAoXG4gICAgIXVybF9pbmNsdWRlcy5zb21lKChpbmNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoaW5jbHVkZVVybCkpIHx8XG4gICAgZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpXG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZlxuICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbn1cbmV4cG9ydCBmdW5jdGlvbiBoYXNoQ29kZShzdHI6IHN0cmluZykge1xuICBsZXQgaGFzaCA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoYXNoIHw9IDBcbiAgfVxuICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpXG4gIHJldHVybiBoYXNoLnRvU3RyaW5nKClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrX3VzZXJfaWQodXNlcl9pZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjaGVja191c2VyX2lkX3VybH0/dXNlcl9pZD0ke3VzZXJfaWR9YCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gJ3N1Y2Nlc3MnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhIHx8ICdVbmtub3duIGVycm9yJ1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgRXJyb3I6ICR7KGVycm9yIGFzIEVycm9yKS5tZXNzYWdlfWApXG4gIH1cbiAgcmV0dXJuICdVbmtub3duIGVycm9yJ1xufVxuXG5pbXBvcnQgeyBjYXJ0LCByZWNpcGVzIH0gZnJvbSAnLi4vcmVjaXBlX25ldydcbmltcG9ydCB7IHByb2Nlc3NFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50LXByb2Nlc3NvcidcbmZ1bmN0aW9uIHNlbGVjdFJlY2lwZSh1cmwgPSBudWxsLCBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQsIHdpbmRvdyA9IGdsb2JhbFRoaXMud2luZG93KSB7XG4gIGxldCBwYXJzZWRVcmxcbiAgaWYgKHVybCkge1xuICAgIHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKVxuICB9IGVsc2Uge1xuICAgIHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIH1cbiAgbGV0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWVcbiAgcGF0aCA9IHBhdGggIT09ICcvJyA/IHBhdGgucmVwbGFjZSgvXFwvKyQvLCAnJykgOiBwYXRoXG5cbiAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbiAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4gICAgICAgICAgZWxlbWVudCAmJlxuICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWF0Y2hNZXRob2QgPT09ICd1cmwnKSB7XG4gICAgICBpZiAocmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgcmVjaXBlLm1hdGNoX3dpdGhfcmVmICYmXG4gICAgICAgIChwYXRoLnN0YXJ0c1dpdGgocmVjaXBlLm1hdGNoICsgJy9yZWY9JykgfHwgcGF0aC5zdGFydHNXaXRoKHJlY2lwZS5tYXRjaCArICdyZWY9JykpXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1JlY2lwZShcbiAgcm9vdCA9IG51bGwsXG4gIHVybCA9IG51bGwsXG4gIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCxcbiAgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3dcbikge1xuICBjb25zb2xlLmxvZygnc3RhcnQgcHJvY2VzcyByZWNpcGUnKVxuICB0cnkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHNlbGVjdFJlY2lwZSh1cmwsIGRvY3VtZW50LCB3aW5kb3cpXG4gICAgbGV0IHJvb3RFbGVtZW50XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gcm9vdFxuICAgIH0gZWxzZSB7XG4gICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIH1cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50KVxuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUsICcnLCAwLCBkb2N1bWVudCwgd2luZG93KVxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBuZXdSb290Lm91dGVySFRNTFxuICAgICAgcmV0dXJuIHNpbXBsaWZpZWRIVE1MXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgcmVjaXBlOicsIGVycm9yKVxuICB9XG59XG5cbi8vIFJlcGxhY2UgdGhlIHNpbXBsZSBxdWVzdGlvbiB3aXRoIGEgbW9yZSBkZXRhaWxlZCBvbmUgYmFzZWQgb24gZXZlbnQgdHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVF1ZXN0aW9uKFxuICBldmVudFR5cGU6IHN0cmluZyxcbiAgZGF0YTogYW55XG4pOiB7IHF1ZXN0aW9uOiBzdHJpbmc7IHBsYWNlaG9sZGVyOiBzdHJpbmcgfSB7XG4gIGxldCBxdWVzdGlvbiA9ICcnXG4gIGxldCBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgJ2NsaWNrX2EnOlxuICAgIGNhc2UgJ2NsaWNrX2InOlxuICAgIGNhc2UgJ2NsaWNrX2MnOlxuICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnN1YnNjcmliZV9zYXZlXy5wdXJjaGFzZV9mb3JtLnNldF91cF9ub3cnIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1NldCBVcCBOb3cnXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgc2V0IHVwIG5vdyBidXR0b24uIFdoYXQgbWFrZXMgeW91IGNob29zZSB0byBzdWJzY3JpYmUgdG8gdGhpcyBwcm9kdWN0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBjaG9vc2UgdG8gc3Vic2NyaWJlIGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkub25lX3RpbWVfcHVyY2hhc2VfLnB1cmNoYXNlX2Zvcm0uYnV5X25vdycgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnYnV5Ym94LmRlbGl2ZXJ5LnB1cmNoYXNlX2Zvcm0uYnV5JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pZCA9PT0gJ2J1eS1ub3ctYnV0dG9uJ1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIGJ1eSBub3cgYnV0dG9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcGFydGljdWxhciBwcm9kdWN0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBhbSBidXlpbmcgdGhpcyBwcm9kdWN0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3NlYXJjaF9yZXN1bHRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9saXN0LicpIHx8XG4gICAgICAgIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2FjdGl2ZV9pdGVtX2xpc3QuJykgJiZcbiAgICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCcucHJvZHVjdF9kZXRhaWwnKSkgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdC4gV2hhdCBjYXVnaHQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gdGhlIG90aGVyIG9wdGlvbnMgeW91IHNhdz8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgbGlrZSB0aGlzIHByb2R1Y3QgYmVjYXVzZcOfLi4uJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnYWRkX3RvX2NhcnQnKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pZCA9PT0gJ2FkZC10by1jYXJ0LWJ1dHRvbicgfHxcbiAgICAgICAgZGF0YS50YXJnZXQubmFtZSA9PT0gJ3N1Ym1pdC5hZGRUb0NhcnQnIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0FkZCB0byBDYXJ0J1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIGFkZCB0byBjYXJ0IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgZGVjaWRlIHRvIGFkZCB0aGlzIGl0ZW0gdG8geW91ciBjYXJ0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBhZGQgdGhpcyBpdGVtIHRvIG15IGNhcnQgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnbmF2X2Jhci5zZWFyY2hfYnV0dG9uJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZWFyY2ggYnV0dG9uLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncmVmaW5lbWVudHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdmaWx0ZXJzLicpXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIGZpbHRlci4gV2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kIHdpdGggdGhpcyBmaWx0ZXI/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9vcHRpb25zLicpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBwcm9kdWN0IG9wdGlvbi4gV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHByb2R1Y3Qgb3B0aW9uPydcbiAgICAgICAgaWYgKGRhdGFbJ2VsZW1lbnQtbWV0YS1uYW1lJ10gPT09ICdwcm9kdWN0X29wdGlvbnMnICYmIGRhdGFbJ2VsZW1lbnQtbWV0YS1kYXRhJ10gIT09ICcnKSB7XG4gICAgICAgICAgcXVlc3Rpb24gPSBgWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gJHtkYXRhWydlbGVtZW50LW1ldGEtZGF0YSddWyd2YWx1ZSddfS4gV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHByb2R1Y3Qgb3B0aW9uP2BcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGxpa2UgdGhpcyBwcm9kdWN0IG9wdGlvbiBiZWNhdXNlLi4uw58nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2NoZWNrX291dCcpKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gY2hlY2tvdXQgYnV0dG9uLiBXaGF0IG1ha2VzIHlvdSBjaG9vc2UgdG8gY2hlY2tvdXQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBjaGVja291dCBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIGVsZW1lbnQuIENvdWxkIHlvdSBzaGFyZSB3aGF0IHlvdSB3ZXJlIHRyeWluZyB0byBkbyBvciBmaW5kPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnNjcm9sbGVkPC9zcGFuPiBvbiB0aGlzIHBhZ2UuIFdoYXQgaW5mb3JtYXRpb24gYXJlIHlvdSBsb29raW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnR5cGVkPC9zcGFuPiBpbiB0aGlzIGlucHV0IGZpZWxkLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmdvIGJhY2s8L3NwYW4+IHRvIHRoZSBwcmV2aW91cyBwYWdlPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkknbSBiYWNrIGJlY2F1c2UuLi5cIlxuICAgICAgfSBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5yZXR1cm48L3NwYW4+IHRvIHRoaXMgcGFnZSA/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9XG4gICAgICBxdWVzdGlvbiA9IGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj4ke2RhdGEubmF2aWdhdGlvblR5cGV9IG5hdmlnYXRpb248L3NwYW4+P2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgIHF1ZXN0aW9uID0gYFdoeSBkaWQgeW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+c3dpdGNoIHRvIHRoaXMgdGFiPC9zcGFuPj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHN3aXRjaGVkIHRvIHRoaXMgdGFiIGJlY2F1c2UuLi4nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBxdWVzdGlvbiA9IGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSAke2V2ZW50VHlwZX0gYWN0aW9uP2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiB7IHF1ZXN0aW9uLCBwbGFjZWhvbGRlciB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkUmVhc29uKHJlYXNvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghcmVhc29uIHx8IHJlYXNvbi50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIEVtcHR5IGlucHV0XG4gIH1cbiAgaWYgKHJlYXNvbi50cmltKCkubGVuZ3RoIDwgMiB8fCByZWFzb24ubGVuZ3RoIDwgNSkge1xuICAgIHJldHVybiBmYWxzZSAvLyBUb28gc2hvcnQgdG8gYmUgbWVhbmluZ2Z1bCwgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzIGFuZCAyIHdvcmRzXG4gIH1cbiAgLy8gQ2hlY2sgZm9yIHJlcGV0aXRpdmUgb3IgbWVhbmluZ2xlc3MgaW5wdXQgKGUuZy4sIFwiYWFhXCIsXCIhISFcIilcbiAgY29uc3QgbWVhbmluZ2xlc3NQYXR0ZXJucyA9IFsvXiguKVxcMXszLH0kLywgL15bXmEtekEtWjAtOV0rJC9dXG4gIGZvciAoY29uc3QgcGF0dGVybiBvZiBtZWFuaW5nbGVzc1BhdHRlcm5zKSB7XG4gICAgaWYgKHBhdHRlcm4udGVzdChyZWFzb24udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcnKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuIiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBmaW5kUGFnZU1ldGEsXG4gIGlzRnJvbVBvcHVwLFxuICBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQsXG4gIHNob3VsZEV4Y2x1ZGUsXG4gIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQsXG4gIHByb2Nlc3NSZWNpcGUsXG4gIGlzVmFsaWRSZWFzb24sXG4gIE1hcmtWaWV3YWJsZUVsZW1lbnRzXG59IGZyb20gJy4vdXRpbHMvdXRpbCdcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBzY3JvbGxfdGhyZXNob2xkIH0gZnJvbSAnLi9jb25maWcnXG5cbmFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1fJHt1dWlkfWBcbiAgICBjb25zdCByZXNwb25zZSA9IChhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICBhY3Rpb246ICdjYXB0dXJlU2NyZWVuc2hvdCcsXG4gICAgICB0aW1lc3RhbXAsXG4gICAgICB1dWlkXG4gICAgfSkpIGFzIGFueVxuXG4gICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCAnU2NyZWVuc2hvdCBjYXB0dXJlIGZhaWxlZCcpXG4gICAgfVxuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICB9LFxuICAgICAgJyonXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90IGluIGNvbnRlbnQgc2NyaXB0OicsIGVycm9yKVxuXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAge1xuICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICAnKidcbiAgICApXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnNvdXJjZSAhPT0gd2luZG93KSByZXR1cm5cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdHRVRfVVNFUl9JRCcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoJ3VzZXJJZCcpXG4gICAgY29uc3QgdXNlcklkID0gcmVzdWx0LnVzZXJJZFxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdHRVRfVVNFUl9JRF9SRVNQT05TRScsIHVzZXJJZDogdXNlcklkIH0sICcqJylcbiAgfVxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBUFRVUkVfU0NSRUVOU0hPVCcpIHtcbiAgICBhd2FpdCBjYXB0dXJlU2NyZWVuc2hvdChldmVudC5kYXRhLnRpbWVzdGFtcCwgZXZlbnQuZGF0YS51dWlkKVxuICB9XG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhRm9yQmFja2dyb3VuZCA9IHsgLi4uZXZlbnQuZGF0YS5kYXRhIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UyID0gKGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgYWN0aW9uOiAnc2F2ZURhdGEnLFxuICAgICAgICBkYXRhOiBkYXRhRm9yQmFja2dyb3VuZFxuICAgICAgfSkpIGFzIGFueVxuICAgICAgaWYgKCFyZXNwb25zZTIuc3VjY2Vzcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UyLm1lc3NhZ2UgfHwgJ2ludGVyYWN0aW9uIGNhcHR1cmUgZmFpbGVkJylcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4gICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJyonXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBpbnRlcmFjdGlvbiBkYXRhOicsIGVycm9yKVxuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXBcbiAgICAgICAgfSxcbiAgICAgICAgJyonXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuXG5jb25zdCB3b3JrID0gKCkgPT4ge1xuICAvLyBEZWZpbmUgaW50ZXJmYWNlcyBmb3IgUmVjaXBlIGFuZCBPcmRlckRldGFpbFxuICBpbnRlcmZhY2UgUmVjaXBlIHtcbiAgICB0YWdfbmFtZT86IHN0cmluZ1xuICAgIHRleHRfc2VsZWN0b3I/OiBzdHJpbmdcbiAgICB0ZXh0X2pzPzogc3RyaW5nXG4gICAgYWRkX3RleHQ/OiBib29sZWFuXG4gICAgdGV4dF9mb3JtYXQ/OiBzdHJpbmdcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgY2xpY2thYmxlPzogYm9vbGVhblxuICAgIGNsaWNrX3NlbGVjdG9yPzogc3RyaW5nXG4gICAga2VlcF9hdHRyPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIG92ZXJyaWRlX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgY2hpbGRyZW4/OiBSZWNpcGVbXVxuICAgIGluc2VydF9zcGxpdF9tYXJrZXI/OiBib29sZWFuXG4gICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeT86IG51bWJlclxuICAgIGRpcmVjdF9jaGlsZD86IGJvb2xlYW5cbiAgICBlbXB0eV9tZXNzYWdlPzogc3RyaW5nXG4gICAgW2tleTogc3RyaW5nXTogYW55IC8vIEFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllc1xuICB9XG5cbiAgaW50ZXJmYWNlIE9yZGVyRGV0YWlsIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBwcmljZTogbnVtYmVyXG4gIH1cblxuICAvLyBFeHRlbmQgdGhlIFdpbmRvdyBpbnRlcmZhY2UgdG8gaW5jbHVkZSBjdXN0b20gcHJvcGVydGllc1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQgZXZlbnQgdHJpZ2dlcmVkJylcbiAgICBNYXJrVmlld2FibGVFbGVtZW50cygpXG4gICAgcHJvY2Vzc1JlY2lwZSgpXG4gIH0pXG5cbiAgLy8gRnVuY3Rpb24gdG8gY2FwdHVyZSBpbnRlcmFjdGlvbnNcbiAgYXN5bmMgZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIHRhcmdldDogYW55LFxuICAgIHRpbWVzdGFtcDogc3RyaW5nLFxuICAgIHV1aWQ6IHN0cmluZyxcbiAgICB3aW5kb3dTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0sXG4gICAgc2Nyb2xsRGlzdGFuY2U/OiBudW1iZXIsXG4gICAgc2Nyb2xsQ3VycmVudFRvcD86IG51bWJlcixcbiAgICBzY3JvbGxDdXJyZW50TGVmdD86IG51bWJlcixcbiAgICBzY3JvbGxEaXN0YW5jZV9YPzogbnVtYmVyXG4gICkge1xuICAgIHRyeSB7XG4gICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHRpbWVzdGFtcCwgdXVpZClcblxuICAgICAgY29uc3Qgc2ltcGxpZmllZEhUTUwgPSBwcm9jZXNzUmVjaXBlKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCB0aW1lOicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSlcbiAgICAgIE1hcmtWaWV3YWJsZUVsZW1lbnRzKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbmQgdGltZTonLCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkpXG4gICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG5cbiAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuXG4gICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCwgLy8gVXNlIHRoZSBuZXcgc25hcHNob3QgSURcbiAgICAgICAgcGFnZU1ldGE6IHBhZ2VNZXRhIHx8ICcnLFxuICAgICAgICBodG1sQ29udGVudDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTCxcbiAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MXG4gICAgICB9XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnc2Nyb2xsJykge1xuICAgICAgICBkYXRhWyd3aW5kb3dTaXplJ10gPSB3aW5kb3dTaXplXG4gICAgICAgIGRhdGFbJ3Njcm9sbERpc3RhbmNlX1knXSA9IHNjcm9sbERpc3RhbmNlXG4gICAgICAgIGRhdGFbJ3Njcm9sbEN1cnJlbnRUb3AnXSA9IHNjcm9sbEN1cnJlbnRUb3BcbiAgICAgICAgZGF0YVsnc2Nyb2xsQ3VycmVudExlZnQnXSA9IHNjcm9sbEN1cnJlbnRMZWZ0XG4gICAgICAgIGRhdGFbJ3Njcm9sbERpc3RhbmNlX1gnXSA9IHNjcm9sbERpc3RhbmNlX1hcbiAgICAgICAgZGF0YVsndGFyZ2V0J10gPSB0YXJnZXRcbiAgICAgIH1cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgZGF0YVsnaW5wdXQtdmFsdWVzJ10gPSB0YXJnZXQ/LnZhbHVlIHx8ICcnXG4gICAgICAgIGRhdGFbJ2lucHV0LWlkJ10gPSB0YXJnZXQ/LmlkIHx8ICcnXG4gICAgICAgIGRhdGFbJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnXSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKSB8fCAnJ1xuICAgICAgICBkYXRhWydkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJ10gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJykgfHwgJydcbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpXG4gICAgfVxuICB9XG4gIC8vIFZhcmlhYmxlcyB0byB0cmFjayBzY3JvbGwgZXZlbnRzXG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlXG4gIGxldCBzY3JvbGxUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgbGV0IHNjcm9sbFN0YXJ0TGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggPSAwXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZmlyc3Qgc2Nyb2xsIGV2ZW50IGluIGEgc2Nyb2xsIHNlcXVlbmNlXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQ6IHN0cmluZywgc2Nyb2xsVGltZXN0YW1wOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcnN0IHNjcm9sbCBldmVudCcpXG4gICAgICBjYXB0dXJlU2NyZWVuc2hvdChzY3JvbGxUaW1lc3RhbXAsIHNjcm9sbFV1aWQpXG4gICAgICBwcm9jZXNzUmVjaXBlKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGZpcnN0IHNjcm9sbCBoYW5kbGluZzonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgd2hlbiBzY3JvbGxpbmcgc3RvcHMgKG5vIHNjcm9sbCBldmVudHMgd2l0aGluIHRoZSB0aHJlc2hvbGQpXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbFN0b3Aoc2Nyb2xsVXVpZDogc3RyaW5nLCBzY3JvbGxUaW1lc3RhbXA6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsIHN0b3AgdXVpZCcsIHNjcm9sbFV1aWQpXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSArPSBjdXJyZW50U2Nyb2xsVG9wIC0gc2Nyb2xsU3RhcnRUb3BcblxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YICs9IGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsU3RhcnRMZWZ0XG5cbiAgICAgIC8vIElOU0VSVF9ZT1VSX0NPREVcbiAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICE9PSAwIHx8IGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCAhPT0gMCkge1xuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBpbnRlcmFjdGlvbiB3aXRoIHRoZSBhY2N1bXVsYXRlZCBzY3JvbGwgZGlzdGFuY2VcbiAgICAgICAgYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgIHNjcm9sbFRpbWVzdGFtcCxcbiAgICAgICAgICBzY3JvbGxVdWlkLFxuICAgICAgICAgIHdpbmRvd1NpemUsXG4gICAgICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wLFxuICAgICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsTGVmdFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc2V0IGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggPSAwXG4gICAgICAgIHNjcm9sbFN0YXJ0VG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAgICAgICBzY3JvbGxTdGFydExlZnQgPSBjdXJyZW50U2Nyb2xsTGVmdFxuICAgICAgfVxuICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIHN0b3AgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgbGV0IHNjcm9sbFV1aWQgPSAnJ1xuICBsZXQgc2Nyb2xsVGltZXN0YW1wID0gJydcbiAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCBldmVudCcpXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsIGV2ZW50IGlnbm9yZWQgZnJvbSBhIG5lc3RlZCBzY3JvbGxhYmxlIGNvbnRhaW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsaW5nKSB7XG4gICAgICBpc1Njcm9sbGluZyA9IHRydWVcbiAgICAgIHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgc2Nyb2xsVXVpZCA9IHV1aWR2NCgpXG4gICAgICBzY3JvbGxUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIGF3YWl0IGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcClcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGltZW91dCBhbmQgc2V0IGEgbmV3IG9uZVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dClcbiAgICBzY3JvbGxUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAoKSA9PiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcCksXG4gICAgICBzY3JvbGxfdGhyZXNob2xkXG4gICAgKSAvLyBUaHJlc2hvbGQgb2YgMzAwbXNcbiAgfSlcblxuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyAgIC8vIEhhbmRsZSBhbGwgdHlwZXMgb2Ygb3JkZXIgYnV0dG9uc1xuICAvLyAgIGNvbnN0IHBsYWNlT3JkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgLy8gICAgICdpbnB1dFtpZD1cInBsYWNlT3JkZXJcIl0sIGlucHV0W2lkPVwidHVyYm8tY2hlY2tvdXQtcHlvLWJ1dHRvblwiXSdcbiAgLy8gICApXG4gIC8vICAgY29uc3QgYnV5Tm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJidXktbm93LWJ1dHRvblwiXScpXG4gIC8vICAgY29uc3Qgc2V0dXBOb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgJ2J1dHRvbltpZD1cInJjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZVwiXSdcbiAgLy8gICApXG4gIC8vICAgY29uc3QgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvY2VlZFRvUmV0YWlsQ2hlY2tvdXRcIl0nKVxuXG4gIC8vICAgLy8gSGFuZGxlIEJ1eSBOb3cgYW5kIFNldCBVcCBOb3cgYnV0dG9ucyBpZiBwcmVzZW50XG4gIC8vICAgO1tidXlOb3dCdXR0b24sIHNldHVwTm93QnV0dG9uXS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgLy8gICAgIGlmIChidXR0b24pIHtcbiAgLy8gICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAvLyAgICAgICAgIHRyeSB7XG4gIC8vICAgICAgICAgICBjb25zdCBwcm9kdWN0SW5mbyA9IHtcbiAgLy8gICAgICAgICAgICAgdGl0bGU6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKSBhcyBIVE1MRWxlbWVudCk/LmlubmVyVGV4dD8udHJpbSgpIHx8ICcnLFxuICAvLyAgICAgICAgICAgICBwcmljZTpcbiAgLy8gICAgICAgICAgICAgICAoXG4gIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAvLyAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSdcbiAgLy8gICAgICAgICAgICAgICAgICkgYXMgSFRNTEVsZW1lbnRcbiAgLy8gICAgICAgICAgICAgICApPy5pbm5lclRleHQ/LnRyaW0oKSB8fCAnJyxcbiAgLy8gICAgICAgICAgICAgYXNpbjogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKSBhcyBIVE1MSW5wdXRFbGVtZW50KT8udmFsdWUgfHwgJycsXG4gIC8vICAgICAgICAgICAgIG9wdGlvbnM6IHt9XG4gIC8vICAgICAgICAgICB9XG5cbiAgLy8gICAgICAgICAgIC8vIEdldCBhbGwgb3B0aW9uIHNlbGVjdGlvbnNcbiAgLy8gICAgICAgICAgIGNvbnN0IG9wdGlvblJvd3MgPSBBcnJheS5mcm9tKFxuICAvLyAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAvLyAgICAgICAgICAgICAgICcjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKSdcbiAgLy8gICAgICAgICAgICAgKVxuICAvLyAgICAgICAgICAgKVxuICAvLyAgICAgICAgICAgb3B0aW9uUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgLy8gICAgICAgICAgICAgY29uc3QgbGFiZWwgPVxuICAvLyAgICAgICAgICAgICAgIChyb3cucXVlcnlTZWxlY3RvcignbGFiZWwuYS1mb3JtLWxhYmVsJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQ/LnJlcGxhY2UoXG4gIC8vICAgICAgICAgICAgICAgICAnOiAnLFxuICAvLyAgICAgICAgICAgICAgICAgJydcbiAgLy8gICAgICAgICAgICAgICApIHx8ICcnXG4gIC8vICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKHJvdy5xdWVyeVNlbGVjdG9yKCdzcGFuLnNlbGVjdGlvbicpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0IHx8ICcnXG4gIC8vICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAvLyAgICAgICAgICAgICAgIDsocHJvZHVjdEluZm8ub3B0aW9ucyBhcyBhbnkpW2xhYmVsXSA9IHZhbHVlXG4gIC8vICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgIH0pXG5cbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGAke2J1dHRvbi5pZH0gY2xpY2tlZCAtIFByb2R1Y3QgSW5mbzpgLCBwcm9kdWN0SW5mbylcblxuICAvLyAgICAgICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAvLyAgICAgICAgICAgICBhY3Rpb246ICdzYXZlT3JkZXInLFxuICAvLyAgICAgICAgICAgICBkYXRhOiB7XG4gIC8vICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIC8vICAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdEluZm8udGl0bGUsXG4gIC8vICAgICAgICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJvZHVjdEluZm8ucHJpY2UucmVwbGFjZSgvW14wLTkuXS9nLCAnJykpLFxuICAvLyAgICAgICAgICAgICAgIGFzaW46IHByb2R1Y3RJbmZvLmFzaW4sXG4gIC8vICAgICAgICAgICAgICAgb3B0aW9uczogcHJvZHVjdEluZm8ub3B0aW9uc1xuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICB9KVxuICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjYXB0dXJpbmcgJHtidXR0b24uaWR9IHByb2R1Y3QgaW5mbzpgLCBlcnJvcilcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gICBpZiAocHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24pIHtcbiAgLy8gICAgIHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIC8vICAgICAgIHRyeSB7XG4gIC8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdXG4gIC8vICAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwic2MtYWN0aXZlLVwiXScpKS5maWx0ZXIoXG4gIC8vICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gJ3NjLWFjdGl2ZS1jYXJ0J1xuICAvLyAgICAgICAgIClcbiAgLy8gICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2FydEl0ZW1zKSB7XG4gIC8vICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykgYXMgSFRNTElucHV0RWxlbWVudFxuICAvLyAgICAgICAgICAgaWYgKGNoZWNrYm94ICYmIGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgLy8gICAgICAgICAgICAgY29uc3QgcHJvZHVjdExpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByb2R1Y3QtdGl0bGUtY29udCAuc2MtcHJvZHVjdC1saW5rJylcbiAgLy8gICAgICAgICAgICAgaWYgKHByb2R1Y3RMaW5rKSB7XG4gIC8vICAgICAgICAgICAgICAgY29uc3QgZnVsbE5hbWVFbGVtZW50ID0gcHJvZHVjdExpbmsucXVlcnlTZWxlY3RvcignLmEtdHJ1bmNhdGUtZnVsbCcpXG4gIC8vICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZ1bGxOYW1lRWxlbWVudD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCAnJ1xuXG4gIC8vICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IHByb2R1Y3RMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnXG4gIC8vICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGhyZWYubWF0Y2goL3Byb2R1Y3RcXC8oW0EtWjAtOV17MTB9KS8pPy5bMV0gfHwgJydcblxuICAvLyAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJpY2UtYmxvY2sgLmEtb2Zmc2NyZWVuJylcbiAgLy8gICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRWxlbWVudFxuICAvLyAgICAgICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHByaWNlRWxlbWVudC50ZXh0Q29udGVudD8ucmVwbGFjZSgvW14wLTkuXS9nLCAnJykgfHwgJzAnKVxuICAvLyAgICAgICAgICAgICAgICAgOiAwXG5cbiAgLy8gICAgICAgICAgICAgICBjb25zdCBvcHRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge31cbiAgLy8gICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25FbGVtZW50cyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLnNjLXByb2R1Y3QtdmFyaWF0aW9uJylcbiAgLy8gICAgICAgICAgICAgICB2YXJpYXRpb25FbGVtZW50cy5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID1cbiAgLy8gICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hLXRleHQtYm9sZCcpPy50ZXh0Q29udGVudD8udHJpbSgpLnJlcGxhY2UoJzonLCAnJykgfHxcbiAgLy8gICAgICAgICAgICAgICAgICAgJydcbiAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID1cbiAgLy8gICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uXG4gIC8vICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5hLXNpemUtc21hbGw6bm90KC5hLXRleHQtYm9sZCknKVxuICAvLyAgICAgICAgICAgICAgICAgICAgID8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCAnJ1xuICAvLyAgICAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gIC8vICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbbGFiZWxdID0gdmFsdWVcbiAgLy8gICAgICAgICAgICAgICAgIH1cbiAgLy8gICAgICAgICAgICAgICB9KVxuXG4gIC8vICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcy5wdXNoKHtcbiAgLy8gICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAvLyAgICAgICAgICAgICAgICAgbmFtZSxcbiAgLy8gICAgICAgICAgICAgICAgIGFzaW4sXG4gIC8vICAgICAgICAgICAgICAgICBwcmljZSxcbiAgLy8gICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgLy8gICAgICAgICAgICAgICB9KVxuICAvLyAgICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgICAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZU9yZGVyJywgZGF0YTogc2VsZWN0ZWRJdGVtcyB9KVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2VsZWN0ZWQgY2FydCBpdGVtczonLCBlcnJvcilcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vIH0pXG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRIVE1MJykge1xuICAgICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgICBNYXJrVmlld2FibGVFbGVtZW50cygpXG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICBodG1sOiBodG1sQ29udGVudCxcbiAgICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MLFxuICAgICAgICAgIHdpbmRvd1NpemU6IHdpbmRvd1NpemVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3Nob3dfcG9wdXAnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93X3BvcHVwJywgbWVzc2FnZSlcbiAgICAgICAgLy8gYXNzZXJ0IHRoZXJlIGlzbid0IGFscmVhZHkgYSBwb3B1cFxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdwb3B1cCBhbHJlYWR5IGV4aXN0cycgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNb2RhbChtZXNzYWdlLnF1ZXN0aW9uLCBtZXNzYWdlLnBsYWNlaG9sZGVyLCBzZW5kUmVzcG9uc2UpXG4gICAgICAgIHJldHVybiB0cnVlIC8vIFdpbGwgcmVzcG9uZCBhc3luY2hyb25vdXNseVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd1JlbWluZGVyJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd1JlbWluZGVyJylcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIGBUaGFuayB5b3UgZm9yIHBhcnRpY2lwYXRpbmchXFxuWW91IGhhdmUgY29udHJpYnV0ZWQgJHtkYXRhLm9uX2RhdGV9IHJhdGlvbmFsZXMgdGhpcyB3ZWVrXFxuWW91IGhhdmUgY29udHJpYnV0ZWQgJHtkYXRhLmFsbF90aW1lfSByYXRpb25hbGVzIGluIHRvdGFsLiBgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIClcbiAgZnVuY3Rpb24gY3JlYXRlTW9kYWwoXG4gICAgcXVlc3Rpb246IHN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nLFxuICAgIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkXG4gICkge1xuICAgIGNvbnN0IG1vZGFsSHRtbCA9IGBcbiAgICAgICAgPGRpdiBpZD1cInJlYXNvbi1tb2RhbFwiIHN0eWxlPVwiXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgIFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodC1xdWVzdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNCwgMTYwLCA4OCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0LCAxNjAsIDg4LCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNCwgMTYwLCA4OCwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGgzPiR7cXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZWFzb24taW5wdXRcIiBwbGFjZWhvbGRlcj1cIiR7cGxhY2Vob2xkZXJ9XCIgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgIFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImVycm9yLW1lc3NhZ2VcIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIGEgdmFsaWQgcmVhc29uLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgICAgICAgICBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1za2lwXCI+U2tpcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcblxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbENvbnRhaW5lci5pbm5lckhUTUwgPSBtb2RhbEh0bWxcbiAgICAvLyBpZiBhdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQgZXhpc3RzXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQ6bm90KC5hb2staGlkZGVuKScpKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJylcbiAgICAgICAgLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLW1lc3NhZ2UnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuXG4gICAgICBpZiAoIWlzVmFsaWRSZWFzb24odmFsdWUpKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyAvLyBTaG93IHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICAgIHJldHVybiAvLyBQcmV2ZW50IHN1Ym1pc3Npb24gaWYgdGhlIHJlYXNvbiBpcyBpbnZhbGlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBIaWRlIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICB9XG5cbiAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUsIHN1Y2Nlc3M6IHRydWUgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc2tpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKClcbiAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiBudWxsLCBzdWNjZXNzOiBmYWxzZSB9KVxuICAgIH0pXG4gIH1cbn1cbnNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBjb25zb2xlLmxvZygnY29udGVudCBzY3JpcHQsIHNob3VsZEV4Y2x1ZGUnLCByZXN1bHQpXG4gIGlmICghcmVzdWx0KSB7XG4gICAgd29yaygpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
