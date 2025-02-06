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
/* harmony export */   fresh_cart: () => (/* binding */ fresh_cart),
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
                        const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
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
        name: 'amazon_fresh_cart',
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
                        const optionValue = optionValueEm === null || optionValueEm === void 0 ? void 0 : optionValueEm.innerText;
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
                                const optionValue = optionValueEm === null || optionValueEm === void 0 ? void 0 : optionValueEm.innerText;
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
                                name: 'check_out'
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
                                name: 'check_out'
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
function processElement(element, recipe, parentName = '', nthChild = 0) {
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
                const childNode = processElement(childElement, childRecipe, parentName, index);
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
function findPageMeta() {
    const all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]');
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
    // Create a copy of the document
    // Select all elements
    const allElements = document.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport and add marker
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const inViewport = rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        // Add marker attribute to the element
        element.setAttribute('visible-clickable-element-marker', inViewport ? 'true' : 'false');
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


function selectRecipe() {
    var _a, _b;
    const parsedUrl = new URL(window.location.href);
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
function processRecipe() {
    console.log('start process recipe');
    try {
        const recipe = selectRecipe();
        const rootElement = document.querySelector(recipe.selector);
        if (rootElement) {
            const newRoot = (0,_element_processor__WEBPACK_IMPORTED_MODULE_2__.processElement)(rootElement, recipe);
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
    document.addEventListener('DOMContentLoaded', () => {
        // Handle all types of order buttons
        const placeOrderButtons = document.querySelectorAll('input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]');
        const buyNowButton = document.querySelector('input[id="buy-now-button"]');
        const setupNowButton = document.querySelector('button[id="rcx-subscribe-submit-button-announce"]');
        const proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]');
        [buyNowButton, setupNowButton].forEach((button) => {
            if (button) {
                button.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
                    var _a, _b, _c, _d, _e;
                    try {
                        const productInfo = {
                            title: ((_b = (_a = document.querySelector('#title')) === null || _a === void 0 ? void 0 : _a.innerText) === null || _b === void 0 ? void 0 : _b.trim()) || '',
                            price: ((_d = (_c = document.querySelector('span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay')) === null || _c === void 0 ? void 0 : _c.innerText) === null || _d === void 0 ? void 0 : _d.trim()) || '',
                            asin: ((_e = document.querySelector('input#ASIN')) === null || _e === void 0 ? void 0 : _e.value) || '',
                            options: {}
                        };
                        // Get all option selections
                        const optionRows = Array.from(document.querySelectorAll('#twister div.a-row:has(label.a-form-label):has(span.selection)'));
                        optionRows.forEach((row) => {
                            var _a, _b, _c;
                            const label = ((_b = (_a = row.querySelector('label.a-form-label')) === null || _a === void 0 ? void 0 : _a.innerText) === null || _b === void 0 ? void 0 : _b.replace(': ', '')) || '';
                            const value = ((_c = row.querySelector('span.selection')) === null || _c === void 0 ? void 0 : _c.innerText) || '';
                            if (label && value) {
                                ;
                                productInfo.options[label] = value;
                            }
                        });
                        console.log(`${button.id} clicked - Product Info:`, productInfo);
                        yield chrome.runtime.sendMessage({
                            action: 'saveOrder',
                            data: {
                                timestamp: new Date().toISOString(),
                                name: productInfo.title,
                                price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
                                asin: productInfo.asin,
                                options: productInfo.options
                            }
                        });
                    }
                    catch (error) {
                        console.error(`Error capturing ${button.id} product info:`, error);
                    }
                }));
            }
        });
        if (proceedToCheckoutButton) {
            proceedToCheckoutButton.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b, _c;
                try {
                    const selectedItems = [];
                    const cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter((item) => item.id !== 'sc-active-cart');
                    for (const item of cartItems) {
                        const checkbox = item.querySelector('input[type="checkbox"]');
                        if (checkbox && checkbox.checked) {
                            const productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link');
                            if (productLink) {
                                const fullNameElement = productLink.querySelector('.a-truncate-full');
                                const name = ((_a = fullNameElement === null || fullNameElement === void 0 ? void 0 : fullNameElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                                const href = productLink.getAttribute('href') || '';
                                const asin = ((_b = href.match(/product\/([A-Z0-9]{10})/)) === null || _b === void 0 ? void 0 : _b[1]) || '';
                                const priceElement = item.querySelector('.sc-item-price-block .a-offscreen');
                                const price = priceElement
                                    ? parseFloat(((_c = priceElement.textContent) === null || _c === void 0 ? void 0 : _c.replace(/[^0-9.]/g, '')) || '0')
                                    : 0;
                                const options = {};
                                const variationElements = item.querySelectorAll('.sc-product-variation');
                                variationElements.forEach((variation) => {
                                    var _a, _b, _c, _d;
                                    const label = ((_b = (_a = variation.querySelector('.a-text-bold')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim().replace(':', '')) ||
                                        '';
                                    const value = ((_d = (_c = variation
                                        .querySelector('.a-size-small:not(.a-text-bold)')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || '';
                                    if (label && value) {
                                        options[label] = value;
                                    }
                                });
                                selectedItems.push({
                                    timestamp: new Date().toISOString(),
                                    name,
                                    asin,
                                    price,
                                    options
                                });
                            }
                        }
                    }
                    if (selectedItems.length > 0) {
                        yield chrome.runtime.sendMessage({ action: 'saveOrder', data: selectedItems });
                    }
                }
                catch (error) {
                    console.error('Error capturing selected cart items:', error);
                }
            }));
        }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNwRSxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBd0I7WUFDNUUsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUN2QixZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUNELDBEQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLE1BQU0sQ0FBQztJQUNwRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsSUFBSSxFQUFFO0tBQ1A7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMVxuZXhwb3J0IGNvbnN0IHBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5ID0gMC4yXG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZVxuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCByYXRpb25hbGVfc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9yYXRpb25hbGVfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IGNoZWNrX3VzZXJfaWRfdXJsID0gYCR7YmFzZV91cmx9L2NoZWNrX3VzZXJfaWRgXG5leHBvcnQgY29uc3QgZmlsdGVyX3VybCA9IFtcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvYnV5LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2EvYWRkcmVzc2VzJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9zaWduaW4nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9jdmYvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvcHJvZmlsZS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9heC9hY2NvdW50LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2FydC9kZXNrdG9wLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3ByaW1lY2VudHJhbC9lZGl0UGF5bWVudFByZWZlcmVuY2UnXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IGVtPy52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF90ZXJtJywgZGF0YTogeyB0ZXJtIH0gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYnV0dG9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0IHNwYW4ubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdhY2NvdW50X2FuZF9saXN0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1vcmRlcnMnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnb3JkZXJfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWNhcnQnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtY2FydCAubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdjYXJ0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1mbHlvdXQtc2VhcmNoQWpheCcsXG4gICAgICBuYW1lOiAnc3VnZ2VzdGVkX3Rlcm1zJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXN1Z2dlc3Rpb24tZWxsaXBzaXMtZGlyZWN0aW9uJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydF9zaWRlX2JhciA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2LWZseW91dC1ld2MnLFxuICBuYW1lOiAnY2FydF9zaWRlX2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWNhcnQtaGVhZGVyJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtY29tcGFjdC1hY3Rpb25zIGEnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI2V3Yy1jb21wYWN0LWJvZHkgdWwnLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfbGlzdCcsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwibGkgZGl2W2lkXj0nc2MtaXRlbSddXCIsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0aXRsZUVtPy5hbHQgfHwgJydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1pdGVtLWltYWdlIGEuc2MtcHJvZHVjdC1saW5rIGltZzpub3QoLmV3Yy1zZmwtaW1hZ2Utc21hbGwpJyxcbiAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uZXdjLXVuaXQtcHJpY2UnLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAnZGl2W2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0sIHNwYW5bZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXScsXG4gICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1kZWxldGUtaWNvbi1jb250YWluZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmV3Yy11bml0LXByaWNlJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnZGl2LmV3Yy1pdGVtLWltYWdlIGEuc2MtcHJvZHVjdC1saW5rIGltZzpub3QoLmV3Yy1zZmwtaW1hZ2Utc21hbGwpJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5hbHRcbiAgICAgICAgICAgIGNvbnN0IHVybEVtID0gdGl0bGVFbT8ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuW2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2NhcnRfaXRlbXMnLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICd1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKScsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG5cbiAgICAgIGxldCB1cmwgPSAnJ1xuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIH1cblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjpcbiAgICAgIFwidWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBsaSA+IHNwYW4gPiBkaXZbZGF0YS1hLWV4cGFuZGVyLW5hbWU9J2ZpbHRlci1jb250ZW50LWV4cGFuZGVyJ11cIixcbiAgICBuYW1lOiAnbW9yZV9vcHRpb25zJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogXCJhW2RhdGEtY3NhLWMtZnVuYy1kZXBzPSdhdWktZGEtYS1leHBhbmRlci10b2dnbGUnXVwiLFxuICAgICAgICBuYW1lOiAndG9nZ2xlX2V4cGFuc2lvbicsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAvLyB0ZXh0ID0gJ0NsZWFyIE9wdGlvbiAnICsgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KCd1bCcpXG4gICAgICAgICAgICA/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2ZhY3RzID0ge1xuICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICdkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG59XG5cbmV4cG9ydCBjb25zdCBxdWFudGl0eV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjc2VsZWN0UXVhbnRpdHksIGRpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdJyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X3F1YW50aXR5JywgZGF0YTogeyBxdWFudGl0eTogZW0uaW5uZXJUZXh0IH0gfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdidXR0b24nLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNyZXBsZW5pc2htZW50RnJlcXVlbmN5X2ZlYXR1cmVfZGl2JyxcbiAgbmFtZTogJ2RlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcicsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1taWNybyA+IHNwYW4nLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBzZXRfdXBfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6ICcjcmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ3NldF91cF9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3Qtc2V0LXVwLW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGFkZF90b19jYXJ0X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6XG4gICAgXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddLCAjZnJlc2hBZGRUb0NhcnRCdXR0b24gaW5wdXRcIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ10sIGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfbW9iaWxlX2FjY29yZGlvbl9oZWFkZXInXVwiLFxuICAgICAgbmFtZTogJ2FjY29yZGlvbl9zZWxlY3RvcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdoNSBzcGFuLmEtdGV4dC1ib2xkJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1hY2NvcmRpb24taW5uZXIuYWNjb3JkaW9uLXJvdy1jb250ZW50JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IsXG4gICAgICAgIHNldF91cF9ub3dfYnV0dG9uLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfZ3JvdXBfMl9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNwaWNrVXBPZmZlckRpc3BsYXknLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWNvbGxhcHNlZC1jYXJ0cy1jb250YWluZXInLFxuICAgIG5hbWU6ICdhbWF6b25fZnJlc2hfY2FydCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbG9jYWxtYXJrZXQtdGV4dC1sb2dvJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtbmFtZT1cImNvbGxhcHNlZF9pdGVtX2xpc3RcIl0nLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdpdGVtX2xpc3QnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgbGFiZWwnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaW1hZ2Utd3JhcHBlciBhJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtcHJvZHVjdC12YXJpYXRpb24nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdzYXZlLWZvci1sYXRlciddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlX2Zvcl9sYXRlcidcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luID0gZW0ucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJylcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyIGRpdltyb2xlPSdzcGluYnV0dG9uJ11cIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcpXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZEVtPy5nZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnKSAhPT0gbnVsbFxuICAgICAgICAgIGNvbnN0IG9wdGlvbnNFbSA9IGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLnNjLXByb2R1Y3QtdmFyaWF0aW9uID4gc3BhbicpXG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgICAgICAgZm9yIChjb25zdCBvcHRpb25FbSBvZiBvcHRpb25zRW0pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS10ZXh0LWJvbGQnKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuOm5vdCguYS10ZXh0LWJvbGQpJylcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleSA9IG9wdGlvbktleUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7IFtvcHRpb25LZXldOiBvcHRpb25WYWx1ZSB9XG4gICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSwgc2VsZWN0ZWQsIG9wdGlvbnMgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX2NhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtcHJvZHVjdC1pbWFnZS1kZXNrdG9wIGEgaW1nJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYWN0aW9uLWxpbmtzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdSZW1vdmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVhbnRpdHlfZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJylcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScpXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWFjdGlvbi1saW5rcyBkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGlucHV0W25hbWVePVwicHJvY2VlZFRvQUxNQ2hlY2tvdXRcIl0nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggYScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1jYXJ0LWFib3ZlLWFjdGlvbnMgYnV0dG9uLCAjc2MtY2FydC1hYm92ZS1hY3Rpb25zIGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBidXlfYWdhaW4gPSBbXG4gIG5hdixcbiAgY2FydF9zaWRlX2JhcixcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbjpoYXMoZGl2LmZpbHRlci1jb250YWluZXIpJyxcbiAgICBuYW1lOiAnZmlsdGVycycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuZmlsdGVyLWNvbnRhaW5lcicsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuI2ZpbHRlci1jb250YWluZXItaGVhZGVyJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtXG4gICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2Rpdi5maWx0ZXItY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicpXG4gICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvWyBdL2csICdfJykudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXJzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hbG0tZ3JpZC1kZXNrdG9wLWdyaWQtY29udGFpbmVyJyxcbiAgICBuYW1lOiAncHJvZHVjdF9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJncmlkQ2VsbFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2dyaWRFbGVtZW50J11cIixcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2Nsb3NlZENhcmQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZWRfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdpbmZvJ11cIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wZW5fcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ09wZW4gUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtIHNwYW4uYS1idXR0b24taW5uZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJzZWVCdXlpbmdPcHRpb25zV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9idXlpbmdfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdleHBhbmRlZEltYWdlJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VfcHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGRpdltpZF49J2luZm8nXVwiKVxuICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSBzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdICN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zX2Nsb3NlZCcsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVhdHVyZWRcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImRldGFpbENvbnRlbnRXcmFwcGVyXCJdIGRpdltpZF49XCJkZXRhaWxDb250ZW50XCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdkZXRhaWxlZF9jb250ZW50JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdjpoYXMoPiBpbWcpJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbY2xhc3MqPSdtdWx0aU9mZmVyUGlsbENvbnRhaW5lciddIGFcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdORVcnXSwgZGl2W2NsYXNzKj0nYXNpbkRldGFpbEluZm9Db2x1bW5zJ106aGFzKGlucHV0W25hbWU9J3N1Ym1pdC5hZGRUb0NhcnQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvbmVfdGltZV9wdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJhY3Rpb25CdXR0b25zUm93XCJdLCBkaXZbY2xhc3MqPVwiYXNpbkRldGFpbEFjdGlvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbaWRePVwiYnV5LW5vd1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXlfbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5jbG9zZXN0KCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbbmFtZT1cImF4LXFzXCJdIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dCB8fCAnMSdcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXNfb3BlbmVkX3B1cmNoYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnksIHF1YW50aXR5IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdTTlMnXSwgZGl2W2NsYXNzKj0nc25zVXBzZWxsQmxvY2tDb250YWluZXInXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInNuc0J1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic3Vic2NyaXB0aW9uQnV0dG9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZXRfdXBfc3Vic2NyaXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5jbG9zZXN0KCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXNfb3BlbmVkX3NucycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2RldGFpbC12aWV3LXNpbWlsYXItaXRlbXMnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3NpbWlsYXJfaXRlbXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1pbWFnZS1jb250YWluZXI6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXSwgaW5wdXRbbmFtZV49XCJhdGZjU2hpbVwiXSwgYnV0dG9uW2FyaWEtbGFiZWw9XCJBZGQgdG8gQ2FydC4gQ2xpY2sgdG8gY2hhbmdlIHF1YW50aXR5XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nUmVtb3ZlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXN1bW1hcnktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1hdGMtYXRmY1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGVFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXZbaWRePVwiZmVhdHVyZWRcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBhW2lkXj1cInRpdGxlXCJdIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUaXRsZSA9IHBhcmVudFRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICA/LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cImRlbGlnaHRGYWNlb3V0XCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcGFyZW50VGl0bGUgKyAnLnNpbWlsYXJfaXRlbXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc25zVXBzZWxsTW9kYWwnLFxuICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmVfcG9wb3ZlcicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwibW9kYWxIZWFkZXJcIl0nLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJtb2RhbEhlYWRlclRleHRcIl0nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltkYXRhLWFjdGlvbj1cImEtcG9wb3Zlci1jbG9zZVwiXScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cIm1vZGFsQ29udGVudFwiXScsXG4gICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdjpub3QoW2NsYXNzKj1cImJ1dHRvbkNvbnRhaW5lclwiXSk6bm90KDpoYXMoc2VsZWN0KSknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgLy8gICBuYW1lOiAnb3Blbl9kcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgLy8gICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgLy8gICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAvLyAgIHRleHRfZm9ybWF0OiBcIkRlbGl2ZXJ5IGV2ZXJ5OiB7fVwiLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYnV0dG9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJjYW5jZWxCdXR0b25Db250YWluZXJcIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJzdWJzY3JpcHRpb25CdXR0b25Db250YWluZXJcIl0gaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFN1YnNjcmlwdGlvbiB0byBDYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cIm1vZGFsQ29udGVudFwiXScpXG4gICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5pZD8uc3BsaXQoJy0nKVsxXT8udHJpbSgpXG4gICAgICByZXR1cm4geyBuYW1lOiAncG9wb3Zlcl9pdGVtJywgZGF0YTogeyBhc2luIH0gfVxuICAgIH1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXYsIGNhcnRfc2lkZV9iYXJdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZm1jL3N0b3JlZnJvbnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbbmF2LCBjYXJ0X3NpZGVfYmFyXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL3MnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RvcFJlZmluZW1lbnRzXFxcXC8wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9wX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmVjZW50bHkgdXNlZCBmaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcmljZVJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAvLyAyIGNhc2VzOiBzZWxlY3Rpb24gLyBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF8zNi10aXRsZSwgZGl2LnNmLXJlZmluZW1lbnQtaGVhZGluZyBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAyOiBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuQWRIb2xkZXInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhZHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtYXNpbl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKCkgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbZGF0YS10eXBlPSdwcm9kdWN0VGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhZHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3NlYXJjaC1yZXN1bHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW5hbWUnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X25hbWUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLXByb2R1Y3QtaW1hZ2UtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXZhaWxhYmxlX2NvbG9ycycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtcGFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy10eXBlPSdsaW5rJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5zLXZhcmlhdGlvbnMtb3B0aW9ucy1lbGV2YXRlZCwgZGl2LnMtdmFyaWF0aW9ucy1vcHRpb25zLWp1c3RpZnktY29udGVudCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZ19jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b24sIHNwYW5baWQqPSdhZGQtdG8tY2FydCddIGlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J3Mtc2VhcmNoLXNlZS1kZXRhaWxzLWJ1dHRvbiddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9vcHRpb25zJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItd3JhcHBlcicsXG4gICAgICAgICAgICBuYW1lOiAncG9wb3ZlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoZWFkZXIuYS1wb3BvdmVyLWhlYWRlciBidXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2UnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgxKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2RhdGEtY29tcG9uZW50LXR5cGU9J3MtcHJvZHVjdC1pbWFnZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9zcGVjaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMiknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhLmEtdGV4dC1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1kZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDMpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLW5vLWpzLWhpZGUgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1hdGNiLWFkZC1jb250YWluZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFzaW5dJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcmljZSBhLmEtdGV4dC1ub3JtYWwgc3BhblthcmlhLWhpZGRlbj1cInRydWVcIl0nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDEpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSB0aXRsZUVtXG4gICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0nKVxuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zRW0gPSBlbS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSkgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjLCBkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkVtIG9mIG9wdGlvbnNFbSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlRW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZSwgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5ID0gb3B0aW9uS2V5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0geyBbb3B0aW9uS2V5XTogb3B0aW9uVmFsdWUgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncG9wb3Zlcl9pdGVtJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBvcHRpb25zIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZScsXG4gICAgbWF0Y2hfdGV4dDogJycsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6aGFzKCNzbnMtYmFzZS1wcmljZSkgI3Nucy1iYXNlLXByaWNlIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdJyArXG4gICAgICAgICAgICAgICAgICAnID4gZGl2W2NsYXNzPVwib2ZmZXJzQ29uc2lzdGVuY3lFbmFibGVkXCJdID4gZGl2Om5vdChbc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCJdKTpub3QoW3N0eWxlPVwiZGlzcGxheTogbm9uZTtcIl0pICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXY6bm90KDpoYXMoI3Nucy1iYXNlLXByaWNlKSkgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPVwiYXBleF93aXRoX3Jpb19jeFwiXSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIHNwYW46bm90KC5hb2staGlkZGVuKSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLmEtdW5vcmRlcmVkLWxpc3QsICNmZWF0dXJlYnVsbGV0c19mZWF0dXJlX2RpdiB1bC5hLXVub3JkZXJlZC1saXN0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbTogJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYnVsbGV0X2xpc3Q6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXBfdGFiJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8xJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9kZXNrdG9wX2J1eWJveF9ncm91cF8yJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQaWNrIFVwJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICcjYnV5Ym94Om5vdCg6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpKTpub3QoOmhhcygjcGFydGlhbFN0YXRlX2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2kuYS1pY29uLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYWRkLXRvLWNhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvY2FydC92aWV3Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2xvY2FsbWFya2V0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogZnJlc2hfY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXlhZ2FpbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGJ1eV9hZ2FpblxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuIiwiZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjbGlja2FibGVfcmVjaXBlczogYW55XG4gICAgaW5wdXRfcmVjaXBlczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQ6IGFueSwgcmVjaXBlOiBhbnksIHBhcmVudE5hbWUgPSAnJywgbnRoQ2hpbGQgPSAwKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpXG4gIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdC5yZXBsYWNlKCd7fScsIGVsZW1lbnRUZXh0KVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0XG4gIH1cblxuICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gIGxldCBlbGVtZW50TmFtZSA9ICcnXG4gIGlmIChyZWNpcGUubmFtZSkge1xuICAgIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fdGV4dCcpIHtcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KVxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfVxuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudCB0ZXh0IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgZWxlbWVudE5hbWUgPSAnJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV9udGhfY2hpbGQnKSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZVxuICAgIH1cbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKVxuICAgIHBhcmVudE5hbWUgPSBlbGVtZW50TmFtZVxuICB9XG5cbiAgaWYgKHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YSkge1xuICAgIGNvbnN0IG1ldGFvYmogPSByZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEoZWxlbWVudClcbiAgICBjb25zdCBtZXRhZGF0YSA9IEpTT04uc3RyaW5naWZ5KG1ldGFvYmouZGF0YSlcbiAgICBjb25zdCBtZXRhbmFtZSA9IG1ldGFvYmoubmFtZVxuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnLCBtZXRhbmFtZSlcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScsIG1ldGFkYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCdtZXRhZGF0YSBnZW5lcmF0ZWQ6ICcsIG1ldGFkYXRhLCAnIHdpdGggbmFtZTogJywgbWV0YW5hbWUpXG4gIH1cblxuICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gIGlmIChyZWNpcGUuY2xpY2thYmxlKSB7XG4gICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICB9XG4gICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgbGV0IGNsaWNrX2VsZW1lbnQ6IEVsZW1lbnQgfCBudWxsXG4gICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZVxuICB9XG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKCkgfHwgb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KVxuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKVxuICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSlcbiAgfVxuXG4gIHJldHVybiBuZXdFbGVtZW50XG59XG4iLCJpbXBvcnQgeyBzdGFydHNXaXRoIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZmlsdGVyX3VybCwgdXJsX2luY2x1ZGVzLCBjaGVja191c2VyX2lkX3VybCB9IGZyb20gJy4uL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZV9pY29uKHVybCkge1xuICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpXG4gIGlmICghKGF3YWl0IHNob3VsZEV4Y2x1ZGUodXJsKSkpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaWNvbi5wbmcnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnaW5hY3RpdmUgaWNvbicpXG4gICAgY2hyb21lLmFjdGlvbi5zZXRJY29uKHtcbiAgICAgIHBhdGg6ICcuLi9pbmFjdGl2ZV9pY29uLnBuZydcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFnZU1ldGEoKSB7XG4gIGNvbnN0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZWxlbWVudC1tZXRhLW5hbWVdJylcblxuICBjb25zdCBncm91cGVkUmVzdWx0ID0ge31cblxuICBhbGxfZWxlbWVudF93aXRoX21ldGFfZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgbWV0YU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpXG4gICAgY29uc3QgbWV0YURhdGEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpXG5cbiAgICBpZiAoIWdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdKSB7XG4gICAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXSA9IFtdXG4gICAgfVxuICAgIGdyb3VwZWRSZXN1bHRbbWV0YU5hbWVdLnB1c2goSlNPTi5wYXJzZShtZXRhRGF0YSkpXG4gIH0pXG5cbiAgcmV0dXJuIGdyb3VwZWRSZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCgpIHtcbiAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gIGNvbnN0IGRvY3VtZW50Q29weSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBEb2N1bWVudFxuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50Q29weS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSdcbiAgKVxuXG4gIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnQgYW5kIGFkZCBtYXJrZXJcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgaWYgKFxuICAgICAgcmVjdC50b3AgPj0gMCAmJlxuICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcbiAgICApIHtcbiAgICAgIC8vIEFkZCBtYXJrZXIgYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCAndHJ1ZScpXG4gICAgfVxuICB9KVxuICByZXR1cm4gZG9jdW1lbnRDb3B5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYXJrVmlld2FibGVFbGVtZW50cygpIHtcbiAgLy8gQ3JlYXRlIGEgY29weSBvZiB0aGUgZG9jdW1lbnRcblxuICAvLyBTZWxlY3QgYWxsIGVsZW1lbnRzXG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBpblZpZXdwb3J0ID1cbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInLCBpblZpZXdwb3J0ID8gJ3RydWUnIDogJ2ZhbHNlJylcbiAgfSlcbn1cblxuLy8gQWRkIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIG1hcmtlcnMgd2hlbiBuZWVkZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja2FibGVNYXJrZXJzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbdmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd2aXNpYmxlLWNsaWNrYWJsZS1lbGVtZW50LW1hcmtlcicpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaG91bGRFeGNsdWRlKHVybDogc3RyaW5nLCBpZ25vcmVVc2VySWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICBpZiAoIWlnbm9yZVVzZXJJZCkge1xuICAgIGlmIChjaHJvbWUuc3RvcmFnZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VySWQnKVxuICAgICAgaWYgKCFyZXN1bHQudXNlcklkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyB1c2VyIGlkJylcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gdXNlciBpZCwgd2Ugc2hvdWxkIG5vdCBiZSByZWNvcmRpbmcgYW55dGhpbmdcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnR0VUX1VTRVJfSURfUkVTUE9OU0UnKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEudXNlcklkKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdHRVRfVVNFUl9JRCcgfSwgJyonKVxuICAgICAgfSlcbiAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gKFxuICAgICF1cmxfaW5jbHVkZXMuc29tZSgoaW5jbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGluY2x1ZGVVcmwpKSB8fFxuICAgIGZpbHRlcl91cmwuc29tZSgoZXhjbHVkZVVybCkgPT4gdXJsLmluY2x1ZGVzKGV4Y2x1ZGVVcmwpKVxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHRpbWVzdGFtcDogc3RyaW5nLCB1dWlkOiBzdHJpbmcpIHtcbiAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG59XG5leHBvcnQgZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbiAgbGV0IGhhc2ggPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGFzaCB8PSAwXG4gIH1cbiAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuICByZXR1cm4gaGFzaC50b1N0cmluZygpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja191c2VyX2lkKHVzZXJfaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y2hlY2tfdXNlcl9pZF91cmx9P3VzZXJfaWQ9JHt1c2VyX2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuICdzdWNjZXNzJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YSB8fCAnVW5rbm93biBlcnJvcidcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yOiAkeyhlcnJvciBhcyBFcnJvcikubWVzc2FnZX1gKVxuICB9XG4gIHJldHVybiAnVW5rbm93biBlcnJvcidcbn1cblxuaW1wb3J0IHsgcmVjaXBlcyB9IGZyb20gJy4uL3JlY2lwZV9uZXcnXG5pbXBvcnQgeyBwcm9jZXNzRWxlbWVudCB9IGZyb20gJy4vZWxlbWVudC1wcm9jZXNzb3InXG5mdW5jdGlvbiBzZWxlY3RSZWNpcGUoKSB7XG4gIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gIGxldCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lXG4gIHBhdGggPSBwYXRoICE9PSAnLycgPyBwYXRoLnJlcGxhY2UoL1xcLyskLywgJycpIDogcGF0aFxuXG4gIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICBjb25zdCBtYXRjaE1ldGhvZCA9IHJlY2lwZS5tYXRjaF9tZXRob2QgfHwgJ3RleHQnXG4gICAgaWYgKG1hdGNoTWV0aG9kID09PSAndGV4dCcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUubWF0Y2gpXG5cbiAgICAgICAgY29uc3QgaGFzTWF0Y2ggPVxuICAgICAgICAgIGVsZW1lbnQgJiZcbiAgICAgICAgICAoIXJlY2lwZS5tYXRjaF90ZXh0IHx8XG4gICAgICAgICAgICAoZWxlbWVudC50ZXh0Q29udGVudD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhyZWNpcGUubWF0Y2hfdGV4dC50b0xvd2VyQ2FzZSgpKSA/PyBmYWxzZSkpXG5cbiAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoZWQgd2l0aCByZWNpcGUgJywgcmVjaXBlLm1hdGNoKVxuICAgICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hlY2tpbmcgdGV4dCBtYXRjaDonLCBlcnJvcilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hdGNoTWV0aG9kID09PSAndXJsJykge1xuICAgICAgaWYgKHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHJlY2lwZS5tYXRjaF93aXRoX3JlZiAmJlxuICAgICAgICAocGF0aC5zdGFydHNXaXRoKHJlY2lwZS5tYXRjaCArICcvcmVmPScpIHx8IHBhdGguc3RhcnRzV2l0aChyZWNpcGUubWF0Y2ggKyAncmVmPScpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgcmV0dXJuIHJlY2lwZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSZWNpcGUoKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKClcbiAgICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnNlbGVjdG9yKVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICBkYXRhOiBhbnlcbik6IHsgcXVlc3Rpb246IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZyB9IHtcbiAgbGV0IHF1ZXN0aW9uID0gJydcbiAgbGV0IHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSAnY2xpY2tfYSc6XG4gICAgY2FzZSAnY2xpY2tfYic6XG4gICAgY2FzZSAnY2xpY2tfYyc6XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkuc3Vic2NyaWJlX3NhdmVfLnB1cmNoYXNlX2Zvcm0uc2V0X3VwX25vdycgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdydcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZXQgdXAgbm93IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBzdWJzY3JpYmUgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYnV5IG5vdyBidXR0b24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFtIGJ1eWluZyB0aGlzIHByb2R1Y3QgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnc2VhcmNoX3Jlc3VsdHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X2xpc3QuJykgfHxcbiAgICAgICAgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnYWN0aXZlX2l0ZW1fbGlzdC4nKSAmJlxuICAgICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJy5wcm9kdWN0X2RldGFpbCcpKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5jbGFzc05hbWU/LmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBwcm9kdWN0LiBXaGF0IGNhdWdodCB5b3VyIGF0dGVudGlvbiBjb21wYXJlZCB0byB0aGUgb3RoZXIgb3B0aW9ucyB5b3Ugc2F3PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBsaWtlIHRoaXMgcHJvZHVjdCBiZWNhdXNlw58uLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCdhZGRfdG9fY2FydCcpIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5uYW1lID09PSAnc3VibWl0LmFkZFRvQ2FydCcgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnQWRkIHRvIENhcnQnXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYWRkIHRvIGNhcnQgYnV0dG9uLiBXaGF0IG1ha2VzIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFkZCB0aGlzIGl0ZW0gdG8gbXkgY2FydCBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICduYXZfYmFyLnNlYXJjaF9idXR0b24nKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIHNlYXJjaCBidXR0b24uIFdoYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdyZWZpbmVtZW50cy4nKSB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2ZpbHRlcnMuJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgZmlsdGVyLiBXaGF0IGFyZSB5b3UgaG9waW5nIHRvIGZpbmQgd2l0aCB0aGlzIGZpbHRlcj8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X29wdGlvbnMuJykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIHByb2R1Y3Qgb3B0aW9uLiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcHJvZHVjdCBvcHRpb24/J1xuICAgICAgICBpZiAoZGF0YVsnZWxlbWVudC1tZXRhLW5hbWUnXSA9PT0gJ3Byb2R1Y3Rfb3B0aW9ucycgJiYgZGF0YVsnZWxlbWVudC1tZXRhLWRhdGEnXSAhPT0gJycpIHtcbiAgICAgICAgICBxdWVzdGlvbiA9IGBZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiAke2RhdGFbJ2VsZW1lbnQtbWV0YS1kYXRhJ11bJ3ZhbHVlJ119LiBXaGF0IGRvIHlvdSBsaWtlIGFib3V0IHRoaXMgcHJvZHVjdCBvcHRpb24/YFxuICAgICAgICB9XG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgbGlrZSB0aGlzIHByb2R1Y3Qgb3B0aW9uIGJlY2F1c2UuLi7DnydcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnY2hlY2tfb3V0JykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBjaGVja291dCBidXR0b24uIFdoYXQgbWFrZXMgeW91IGNob29zZSB0byBjaGVja291dD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgY2hvb3NlIHRvIGNoZWNrb3V0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgZWxlbWVudC4gQ291bGQgeW91IHNoYXJlIHdoYXQgeW91IHdlcmUgdHJ5aW5nIHRvIGRvIG9yIGZpbmQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+c2Nyb2xsZWQ8L3NwYW4+IG9uIHRoaXMgcGFnZS4gV2hhdCBpbmZvcm1hdGlvbiBhcmUgeW91IGxvb2tpbmcgZm9yPydcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaW5wdXQnOlxuICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+dHlwZWQ8L3NwYW4+IGluIHRoaXMgaW5wdXQgZmllbGQuIFdoYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yPydcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbmF2aWdhdGlvbic6XG4gICAgICBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2JhY2snKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Z28gYmFjazwvc3Bhbj4gdG8gdGhlIHByZXZpb3VzIHBhZ2U/J1xuICAgICAgICBwbGFjZWhvbGRlciA9IFwiSSdtIGJhY2sgYmVjYXVzZS4uLlwiXG4gICAgICB9IGVsc2UgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdmb3J3YXJkJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnJldHVybjwvc3Bhbj4gdG8gdGhpcyBwYWdlID8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgd2FudCB0byBmaW5kIC4uLidcbiAgICAgIH1cbiAgICAgIHF1ZXN0aW9uID0gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPiR7ZGF0YS5uYXZpZ2F0aW9uVHlwZX0gbmF2aWdhdGlvbjwvc3Bhbj4/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndGFiQWN0aXZhdGUnOlxuICAgICAgcXVlc3Rpb24gPSBgV2h5IGRpZCB5b3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5zd2l0Y2ggdG8gdGhpcyB0YWI8L3NwYW4+P2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0kgc3dpdGNoZWQgdG8gdGhpcyB0YWIgYmVjYXVzZS4uLidcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHF1ZXN0aW9uID0gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlICR7ZXZlbnRUeXBlfSBhY3Rpb24/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciByZWFzb24gaGVyZS4uLidcbiAgICAgIGJyZWFrXG4gIH1cbiAgcmV0dXJuIHsgcXVlc3Rpb24sIHBsYWNlaG9sZGVyIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSZWFzb24ocmVhc29uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCFyZWFzb24gfHwgcmVhc29uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gRW1wdHkgaW5wdXRcbiAgfVxuICBpZiAocmVhc29uLnRyaW0oKS5sZW5ndGggPCAyIHx8IHJlYXNvbi5sZW5ndGggPCA1KSB7XG4gICAgcmV0dXJuIGZhbHNlIC8vIFRvbyBzaG9ydCB0byBiZSBtZWFuaW5nZnVsLCBhdCBsZWFzdCA1IGNoYXJhY3RlcnMgYW5kIDIgd29yZHNcbiAgfVxuICAvLyBDaGVjayBmb3IgcmVwZXRpdGl2ZSBvciBtZWFuaW5nbGVzcyBpbnB1dCAoZS5nLiwgXCJhYWFcIixcIiEhIVwiKVxuICBjb25zdCBtZWFuaW5nbGVzc1BhdHRlcm5zID0gWy9eKC4pXFwxezMsfSQvLCAvXlteYS16QS1aMC05XSskL11cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIG1lYW5pbmdsZXNzUGF0dGVybnMpIHtcbiAgICBpZiAocGF0dGVybi50ZXN0KHJlYXNvbi50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQgeyByYW5kb21VVUlEIH07XG4iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLThdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMHxmZmZmZmZmZi1mZmZmLWZmZmYtZmZmZi1mZmZmZmZmZmZmZmYpJC9pO1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdXVpZDtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTtcbiIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcbiAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuICAgIGlmIChidWYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgdjQ7XG4iLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGZpbmRQYWdlTWV0YSxcbiAgaXNGcm9tUG9wdXAsXG4gIGdldENsaWNrYWJsZUVsZW1lbnRzSW5WaWV3cG9ydCxcbiAgc2hvdWxkRXhjbHVkZSxcbiAgZ2VuZXJhdGVIdG1sU25hcHNob3RJZCxcbiAgcHJvY2Vzc1JlY2lwZSxcbiAgaXNWYWxpZFJlYXNvbixcbiAgTWFya1ZpZXdhYmxlRWxlbWVudHNcbn0gZnJvbSAnLi91dGlscy91dGlsJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IHNjcm9sbF90aHJlc2hvbGQgfSBmcm9tICcuL2NvbmZpZydcblxuYXN5bmMgZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wOiBzdHJpbmcsIHV1aWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuICAgIGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIGFjdGlvbjogJ2NhcHR1cmVTY3JlZW5zaG90JyxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIHV1aWRcbiAgICB9KSkgYXMgYW55XG5cbiAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5tZXNzYWdlIHx8ICdTY3JlZW5zaG90IGNhcHR1cmUgZmFpbGVkJylcbiAgICB9XG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgIH0sXG4gICAgICAnKidcbiAgICApXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3QgaW4gY29udGVudCBzY3JpcHQ6JywgZXJyb3IpXG5cbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfSxcbiAgICAgICcqJ1xuICAgIClcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpIHJldHVyblxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICBjb25zdCB1c2VySWQgPSByZXN1bHQudXNlcklkXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJywgdXNlcklkOiB1c2VySWQgfSwgJyonKVxuICB9XG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FQVFVSRV9TQ1JFRU5TSE9UJykge1xuICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KGV2ZW50LmRhdGEudGltZXN0YW1wLCBldmVudC5kYXRhLnV1aWQpXG4gIH1cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFGb3JCYWNrZ3JvdW5kID0geyAuLi5ldmVudC5kYXRhLmRhdGEgfVxuXG4gICAgICBjb25zdCByZXNwb25zZTIgPSAoYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICBhY3Rpb246ICdzYXZlRGF0YScsXG4gICAgICAgIGRhdGE6IGRhdGFGb3JCYWNrZ3JvdW5kXG4gICAgICB9KSkgYXMgYW55XG4gICAgICBpZiAoIXJlc3BvbnNlMi5zdWNjZXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZTIubWVzc2FnZSB8fCAnaW50ZXJhY3Rpb24gY2FwdHVyZSBmYWlsZWQnKVxuICAgICAgfVxuICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGludGVyYWN0aW9uIGRhdGE6JywgZXJyb3IpXG4gICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcFxuICAgICAgICB9LFxuICAgICAgICAnKidcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIC8vIERlZmluZSBpbnRlcmZhY2VzIGZvciBSZWNpcGUgYW5kIE9yZGVyRGV0YWlsXG4gIGludGVyZmFjZSBSZWNpcGUge1xuICAgIHRhZ19uYW1lPzogc3RyaW5nXG4gICAgdGV4dF9zZWxlY3Rvcj86IHN0cmluZ1xuICAgIHRleHRfanM/OiBzdHJpbmdcbiAgICBhZGRfdGV4dD86IGJvb2xlYW5cbiAgICB0ZXh0X2Zvcm1hdD86IHN0cmluZ1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBjbGlja2FibGU/OiBib29sZWFuXG4gICAgY2xpY2tfc2VsZWN0b3I/OiBzdHJpbmdcbiAgICBrZWVwX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4gICAgb3ZlcnJpZGVfYXR0cj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBjaGlsZHJlbj86IFJlY2lwZVtdXG4gICAgaW5zZXJ0X3NwbGl0X21hcmtlcj86IGJvb2xlYW5cbiAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5PzogbnVtYmVyXG4gICAgZGlyZWN0X2NoaWxkPzogYm9vbGVhblxuICAgIGVtcHR5X21lc3NhZ2U/OiBzdHJpbmdcbiAgICBba2V5OiBzdHJpbmddOiBhbnkgLy8gQWxsb3cgYWRkaXRpb25hbCBwcm9wZXJ0aWVzXG4gIH1cblxuICBpbnRlcmZhY2UgT3JkZXJEZXRhaWwge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIHByaWNlOiBudW1iZXJcbiAgfVxuXG4gIC8vIEV4dGVuZCB0aGUgV2luZG93IGludGVyZmFjZSB0byBpbmNsdWRlIGN1c3RvbSBwcm9wZXJ0aWVzXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCBldmVudCB0cmlnZ2VyZWQnKVxuICAgIE1hcmtWaWV3YWJsZUVsZW1lbnRzKClcbiAgICBwcm9jZXNzUmVjaXBlKClcbiAgfSlcblxuICAvLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuICBhc3luYyBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgZXZlbnRUeXBlOiBzdHJpbmcsXG4gICAgdGFyZ2V0OiBhbnksXG4gICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgdXVpZDogc3RyaW5nLFxuICAgIHdpbmRvd1NpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSxcbiAgICBzY3JvbGxEaXN0YW5jZT86IG51bWJlcixcbiAgICBzY3JvbGxDdXJyZW50VG9wPzogbnVtYmVyLFxuICAgIHNjcm9sbEN1cnJlbnRMZWZ0PzogbnVtYmVyLFxuICAgIHNjcm9sbERpc3RhbmNlX1g/OiBudW1iZXJcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0IHRpbWU6JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKVxuICAgICAgTWFya1ZpZXdhYmxlRWxlbWVudHMoKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2VuZCB0aW1lOicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSlcbiAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG5cbiAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLCAvLyBVc2UgdGhlIG5ldyBzbmFwc2hvdCBJRFxuICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgIGh0bWxDb250ZW50OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUxcbiAgICAgIH1cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdzY3JvbGwnKSB7XG4gICAgICAgIGRhdGFbJ3dpbmRvd1NpemUnXSA9IHdpbmRvd1NpemVcbiAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWSddID0gc2Nyb2xsRGlzdGFuY2VcbiAgICAgICAgZGF0YVsnc2Nyb2xsQ3VycmVudFRvcCddID0gc2Nyb2xsQ3VycmVudFRvcFxuICAgICAgICBkYXRhWydzY3JvbGxDdXJyZW50TGVmdCddID0gc2Nyb2xsQ3VycmVudExlZnRcbiAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWCddID0gc2Nyb2xsRGlzdGFuY2VfWFxuICAgICAgICBkYXRhWyd0YXJnZXQnXSA9IHRhcmdldFxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC12YWx1ZXMnXSA9IHRhcmdldD8udmFsdWUgfHwgJydcbiAgICAgICAgZGF0YVsnaW5wdXQtaWQnXSA9IHRhcmdldD8uaWQgfHwgJydcbiAgICAgICAgZGF0YVsnZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpIHx8ICcnXG4gICAgICAgIGRhdGFbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSB8fCAnJ1xuICAgICAgfVxuICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlRGF0YScsIGRhdGEgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcilcbiAgICB9XG4gIH1cbiAgLy8gVmFyaWFibGVzIHRvIHRyYWNrIHNjcm9sbCBldmVudHNcbiAgbGV0IGlzU2Nyb2xsaW5nID0gZmFsc2VcbiAgbGV0IHNjcm9sbFRpbWVvdXQ6IG51bWJlciB8IHVuZGVmaW5lZFxuICBsZXQgc2Nyb2xsU3RhcnRUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICBsZXQgc2Nyb2xsU3RhcnRMZWZ0ID0gd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnRcbiAgbGV0IGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCA9IDBcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBmaXJzdCBzY3JvbGwgZXZlbnQgaW4gYSBzY3JvbGwgc2VxdWVuY2VcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmlyc3RTY3JvbGwoc2Nyb2xsVXVpZDogc3RyaW5nLCBzY3JvbGxUaW1lc3RhbXA6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyc3Qgc2Nyb2xsIGV2ZW50JylcbiAgICAgIGNhcHR1cmVTY3JlZW5zaG90KHNjcm9sbFRpbWVzdGFtcCwgc2Nyb2xsVXVpZClcbiAgICAgIHByb2Nlc3NSZWNpcGUoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgZmlyc3Qgc2Nyb2xsIGhhbmRsaW5nOicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuIHNjcm9sbGluZyBzdG9wcyAobm8gc2Nyb2xsIGV2ZW50cyB3aXRoaW4gdGhlIHRocmVzaG9sZClcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsU3RvcChzY3JvbGxVdWlkOiBzdHJpbmcsIHNjcm9sbFRpbWVzdGFtcDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGwgc3RvcCB1dWlkJywgc2Nyb2xsVXVpZClcbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICs9IGN1cnJlbnRTY3JvbGxUb3AgLSBzY3JvbGxTdGFydFRvcFxuXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggKz0gY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxTdGFydExlZnRcblxuICAgICAgLy8gSU5TRVJUX1lPVVJfQ09ERVxuICAgICAgY29uc3Qgd2luZG93U2l6ZSA9IHtcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfVxuICAgICAgaWYgKGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgIT09IDAgfHwgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YICE9PSAwKSB7XG4gICAgICAgIC8vIFJlY29yZCB0aGUgc2Nyb2xsIGludGVyYWN0aW9uIHdpdGggdGhlIGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ3Njcm9sbCcsXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgc2Nyb2xsVGltZXN0YW1wLFxuICAgICAgICAgIHNjcm9sbFV1aWQsXG4gICAgICAgICAgd2luZG93U2l6ZSxcbiAgICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlLFxuICAgICAgICAgIGN1cnJlbnRTY3JvbGxUb3AsXG4gICAgICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YLFxuICAgICAgICAgIGN1cnJlbnRTY3JvbGxMZWZ0XG4gICAgICAgIClcbiAgICAgICAgLy8gUmVzZXQgYWNjdW11bGF0ZWQgc2Nyb2xsIGRpc3RhbmNlXG4gICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2UgPSAwXG4gICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCA9IDBcbiAgICAgICAgc2Nyb2xsU3RhcnRUb3AgPSBjdXJyZW50U2Nyb2xsVG9wXG4gICAgICAgIHNjcm9sbFN0YXJ0TGVmdCA9IGN1cnJlbnRTY3JvbGxMZWZ0XG4gICAgICB9XG4gICAgICBpc1Njcm9sbGluZyA9IGZhbHNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzY3JvbGwgc3RvcCBoYW5kbGluZzonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICBsZXQgc2Nyb2xsVXVpZCA9ICcnXG4gIGxldCBzY3JvbGxUaW1lc3RhbXAgPSAnJ1xuICAvLyBFdmVudCBsaXN0ZW5lciBmb3Igc2Nyb2xsIGV2ZW50c1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2Nyb2xsIGV2ZW50JylcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgIT09IHdpbmRvdyAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudCAmJlxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTY3JvbGwgZXZlbnQgaWdub3JlZCBmcm9tIGEgbmVzdGVkIHNjcm9sbGFibGUgY29udGFpbmVyJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghaXNTY3JvbGxpbmcpIHtcbiAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZVxuICAgICAgc2Nyb2xsU3RhcnRUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgICBzY3JvbGxVdWlkID0gdXVpZHY0KClcbiAgICAgIHNjcm9sbFRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgYXdhaXQgaGFuZGxlRmlyc3RTY3JvbGwoc2Nyb2xsVXVpZCwgc2Nyb2xsVGltZXN0YW1wKVxuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBleGlzdGluZyB0aW1lb3V0IGFuZCBzZXQgYSBuZXcgb25lXG4gICAgd2luZG93LmNsZWFyVGltZW91dChzY3JvbGxUaW1lb3V0KVxuICAgIHNjcm9sbFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICgpID0+IGhhbmRsZVNjcm9sbFN0b3Aoc2Nyb2xsVXVpZCwgc2Nyb2xsVGltZXN0YW1wKSxcbiAgICAgIHNjcm9sbF90aHJlc2hvbGRcbiAgICApIC8vIFRocmVzaG9sZCBvZiAzMDBtc1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGFsbCB0eXBlcyBvZiBvcmRlciBidXR0b25zXG4gICAgY29uc3QgcGxhY2VPcmRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJ2lucHV0W2lkPVwicGxhY2VPcmRlclwiXSwgaW5wdXRbaWQ9XCJ0dXJiby1jaGVja291dC1weW8tYnV0dG9uXCJdJ1xuICAgIClcbiAgICBjb25zdCBidXlOb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImJ1eS1ub3ctYnV0dG9uXCJdJylcbiAgICBjb25zdCBzZXR1cE5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYnV0dG9uW2lkPVwicmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlXCJdJ1xuICAgIClcbiAgICBjb25zdCBwcm9jZWVkVG9DaGVja291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcm9jZWVkVG9SZXRhaWxDaGVja291dFwiXScpXG5cbiAgICAvLyBIYW5kbGUgQnV5IE5vdyBhbmQgU2V0IFVwIE5vdyBidXR0b25zIGlmIHByZXNlbnRcbiAgICA7W2J1eU5vd0J1dHRvbiwgc2V0dXBOb3dCdXR0b25dLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvID0ge1xuICAgICAgICAgICAgICB0aXRsZTogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0Py50cmltKCkgfHwgJycsXG4gICAgICAgICAgICAgIHByaWNlOlxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5J1xuICAgICAgICAgICAgICAgICAgKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICk/LmlubmVyVGV4dD8udHJpbSgpIHx8ICcnLFxuICAgICAgICAgICAgICBhc2luOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gR2V0IGFsbCBvcHRpb24gc2VsZWN0aW9uc1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uUm93cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJyN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9XG4gICAgICAgICAgICAgICAgKHJvdy5xdWVyeVNlbGVjdG9yKCdsYWJlbC5hLWZvcm0tbGFiZWwnKSBhcyBIVE1MRWxlbWVudCk/LmlubmVyVGV4dD8ucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICc6ICcsXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICkgfHwgJydcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocm93LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc2VsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgOyhwcm9kdWN0SW5mby5vcHRpb25zIGFzIGFueSlbbGFiZWxdID0gdmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7YnV0dG9uLmlkfSBjbGlja2VkIC0gUHJvZHVjdCBJbmZvOmAsIHByb2R1Y3RJbmZvKVxuXG4gICAgICAgICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgIGFjdGlvbjogJ3NhdmVPcmRlcicsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby50aXRsZSxcbiAgICAgICAgICAgICAgICBwcmljZTogcGFyc2VGbG9hdChwcm9kdWN0SW5mby5wcmljZS5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSksXG4gICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBwcm9kdWN0SW5mby5vcHRpb25zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChwcm9jZWVkVG9DaGVja291dEJ1dHRvbikge1xuICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW11cbiAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJzYy1hY3RpdmUtXCJdJykpLmZpbHRlcihcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkICE9PSAnc2MtYWN0aXZlLWNhcnQnXG4gICAgICAgICAgKVxuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TGluayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJvZHVjdC10aXRsZS1jb250IC5zYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgICAgICAgICBpZiAocHJvZHVjdExpbmspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZUVsZW1lbnQgPSBwcm9kdWN0TGluay5xdWVyeVNlbGVjdG9yKCcuYS10cnVuY2F0ZS1mdWxsJylcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZnVsbE5hbWVFbGVtZW50Py50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnXG5cbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gcHJvZHVjdExpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcbiAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gaHJlZi5tYXRjaCgvcHJvZHVjdFxcLyhbQS1aMC05XXsxMH0pLyk/LlsxXSB8fCAnJ1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcmljZS1ibG9jayAuYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbGVtZW50XG4gICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQocHJpY2VFbGVtZW50LnRleHRDb250ZW50Py5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSB8fCAnMCcpXG4gICAgICAgICAgICAgICAgICA6IDBcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbkVsZW1lbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtcHJvZHVjdC12YXJpYXRpb24nKVxuICAgICAgICAgICAgICAgIHZhcmlhdGlvbkVsZW1lbnRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb24ucXVlcnlTZWxlY3RvcignLmEtdGV4dC1ib2xkJyk/LnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgnOicsICcnKSB8fFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPVxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmEtc2l6ZS1zbWFsbDpub3QoLmEtdGV4dC1ib2xkKScpXG4gICAgICAgICAgICAgICAgICAgICAgPy50ZXh0Q29udGVudD8udHJpbSgpIHx8ICcnXG4gICAgICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgYXNpbixcbiAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdzYXZlT3JkZXInLCBkYXRhOiBzZWxlY3RlZEl0ZW1zIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoXG4gICAgKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgbWVzc2FnZSlcbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICAgIE1hcmtWaWV3YWJsZUVsZW1lbnRzKClcbiAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gZmluZFBhZ2VNZXRhKClcbiAgICAgICAgY29uc3Qgd2luZG93U2l6ZSA9IHtcbiAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgIGh0bWw6IGh0bWxDb250ZW50LFxuICAgICAgICAgIHBhZ2VNZXRhOiBwYWdlTWV0YSxcbiAgICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUwsXG4gICAgICAgICAgd2luZG93U2l6ZTogd2luZG93U2l6ZVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd19wb3B1cCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3dfcG9wdXAnLCBtZXNzYWdlKVxuICAgICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ3BvcHVwIGFscmVhZHkgZXhpc3RzJyB9KVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZU1vZGFsKG1lc3NhZ2UucXVlc3Rpb24sIG1lc3NhZ2UucGxhY2Vob2xkZXIsIHNlbmRSZXNwb25zZSlcbiAgICAgICAgcmV0dXJuIHRydWUgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93UmVtaW5kZXInKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93UmVtaW5kZXInKVxuICAgICAgICBjb25zdCBkYXRhID0gbWVzc2FnZS5kYXRhXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYFRoYW5rIHlvdSBmb3IgcGFydGljaXBhdGluZyFcXG5Zb3UgaGF2ZSBjb250cmlidXRlZCAke2RhdGEub25fZGF0ZX0gcmF0aW9uYWxlcyB0aGlzIHdlZWtcXG5Zb3UgaGF2ZSBjb250cmlidXRlZCAke2RhdGEuYWxsX3RpbWV9IHJhdGlvbmFsZXMgaW4gdG90YWwuIGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgKVxuICBmdW5jdGlvbiBjcmVhdGVNb2RhbChcbiAgICBxdWVzdGlvbjogc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWRcbiAgKSB7XG4gICAgY29uc3QgbW9kYWxIdG1sID0gYFxuICAgICAgICA8ZGl2IGlkPVwicmVhc29uLW1vZGFsXCIgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0LXF1ZXN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI0LCAxNjAsIDg4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQsIDE2MCwgODgsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0LCAxNjAsIDg4LCAwLjEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8aDM+JHtxdWVzdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlYXNvbi1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiJHtwbGFjZWhvbGRlcn1cIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXJyb3ItbWVzc2FnZVwiIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCByZWFzb24uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXNraXBcIj5Ta2lwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWFzb24tc3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IG1vZGFsSHRtbFxuICAgIC8vIGlmIGF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldCBleGlzdHNcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJykpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNoLWRlc2t0b3Atc2lkZVNoZWV0Om5vdCguYW9rLWhpZGRlbiknKVxuICAgICAgICAuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4gICAgfVxuXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItbWVzc2FnZScpIGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlXG5cbiAgICAgIGlmICghaXNWYWxpZFJlYXNvbih2YWx1ZSkpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIC8vIFNob3cgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgcmV0dXJuIC8vIFByZXZlbnQgc3VibWlzc2lvbiBpZiB0aGUgcmVhc29uIGlzIGludmFsaWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIEhpZGUgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgIH1cblxuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKClcbiAgICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiB2YWx1ZSwgc3VjY2VzczogdHJ1ZSB9KVxuICAgIH0pXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1za2lwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50XG4gICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKVxuICAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IG51bGwsIHN1Y2Nlc3M6IGZhbHNlIH0pXG4gICAgfSlcbiAgfVxufVxuc2hvdWxkRXhjbHVkZSh3aW5kb3cubG9jYXRpb24uaHJlZikudGhlbigocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdjb250ZW50IHNjcmlwdCwgc2hvdWxkRXhjbHVkZScsIHJlc3VsdClcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB3b3JrKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
