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
/* harmony export */   purchase_status_url: () => (/* binding */ purchase_status_url),
/* harmony export */   rationale_status_url: () => (/* binding */ rationale_status_url),
/* harmony export */   scroll_threshold: () => (/* binding */ scroll_threshold),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_includes: () => (/* binding */ url_includes),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
const popup_probability = 0.15;
const popup_scroll_probability = 0.05;
const popup_click_probability = 0.2;
const popup_navigation_probability = 0.15;
const popup_tabActivate_probability = 0.15;
const folder_name = `user_interaction_data`; // the folder name to save the data
const zip = true; // whether to zip the data when downloading
const upload_url = 'http://userdatacollect.hailab.io/api/upload';
const base_url = 'http://userdatacollect.hailab.io/api';
const data_collector_secret_id = 'hailab';
const url_includes = ['www.amazon.com'];
const interaction_status_url = `${base_url}/interactions_record_status`;
const rationale_status_url = `${base_url}/rationale_status`;
const purchase_status_url = `${base_url}/order_status`;
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
/* harmony export */   carousel_card: () => (/* binding */ carousel_card),
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   cart_side_bar: () => (/* binding */ cart_side_bar),
/* harmony export */   delivery_frequency_selector: () => (/* binding */ delivery_frequency_selector),
/* harmony export */   fresh_carousel_card: () => (/* binding */ fresh_carousel_card),
/* harmony export */   fresh_cart: () => (/* binding */ fresh_cart),
/* harmony export */   fresh_substitution_card: () => (/* binding */ fresh_substitution_card),
/* harmony export */   go_to_cart_button_for_flash_sales: () => (/* binding */ go_to_cart_button_for_flash_sales),
/* harmony export */   luxury_carousel_card: () => (/* binding */ luxury_carousel_card),
/* harmony export */   luxury_cart: () => (/* binding */ luxury_cart),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   popular_products: () => (/* binding */ popular_products),
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
            selector: '#nav-logo',
            add_text: true,
            text_format: 'Homepage',
            clickable: true,
            name: 'from_text'
        },
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
                    selector: 'div.cards_carousel_widget-sug-column',
                    name: 'from_text',
                    clickable: true,
                    add_text: true,
                    text_selector: 'div.cards_carousel_text_left_widget-sug-text'
                },
                {
                    selector: 'div.s-suggestion-container',
                    name: 'from_text',
                    add_text: true,
                    clickable: true
                }
            ]
        },
        {
            selector: '#nav-hamburger-menu',
            name: 'from_text',
            add_text: true,
            clickable: true,
            text_format: 'Menu'
        },
        {
            selector: '#nav-xshop',
            name: 'stores',
            children: [
                {
                    selector: 'li',
                    clickable: true,
                    add_text: true,
                    name: 'from_text'
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
            selector: 'div.ewc-multi-cart-dropdown',
            name: 'cart_selector',
            children: [
                {
                    selector: 'div.ewc-cart-header',
                    add_text: true,
                    clickable: true,
                    name: 'from_text',
                    text_js: (em) => {
                        var _a;
                        return ((_a = em.querySelector('img')) === null || _a === void 0 ? void 0 : _a.alt) || '';
                    }
                }
            ]
        },
        {
            selector: 'div.ewc-compact-view-cart-header div.ewc-cart-header-logo',
            name: 'open_cart_selector',
            clickable: true,
            add_text: true,
            text_format: 'Open Cart Selector'
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
                            selector: 'div[id^="qs-widget-button-container-"]',
                            name: 'drop_down_list',
                            clickable: true,
                            add_text: true,
                            children: [
                                {
                                    selector: 'div[id^="qs-widget-dropdown-container-"]',
                                    match_id_with_parent: true,
                                    use_root: true,
                                    children: [
                                        {
                                            selector: 'li',
                                            add_text: true,
                                            name: 'from_text',
                                            clickable: true
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            selector: 'div.ewc-delete-icon-container button',
                            name: 'delete',
                            add_text: true,
                            text_format: 'delete',
                            clickable: true
                        },
                        {
                            selector: 'span.sc-quantity-stepper',
                            children: [
                                {
                                    selector: 'button[data-a-selector="decrement"]',
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
                                    selector: 'button[data-a-selector="increment"]',
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
                        var _a;
                        const asin = em.getAttribute('data-asin');
                        const priceEm = em.querySelector('span.ewc-unit-price');
                        const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '').trim();
                        const titleEm = em.querySelector('div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)');
                        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.alt;
                        const urlEm = titleEm === null || titleEm === void 0 ? void 0 : titleEm.parentElement;
                        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                        const quantityEm = em.querySelector('div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"], span.sc-quantity-stepper div[role="spinbutton"]');
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
            const name = (_c = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _c === void 0 ? void 0 : _c.trim().replace(/[ ]/g, '_').toLowerCase().trim().replace(/^_+|_+$/g, '').replace(/[_\d]+$/, '');
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
                    const name = (_e = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _e === void 0 ? void 0 : _e.trim().replace(/[ ]/g, '_').toLowerCase().trim().replace(/^_+|_+$/g, '').replace(/[_\d]+$/, '');
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
    selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb'], #freshAddToCartButton input, #dealsx_atc_btn",
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
const go_to_cart_button_for_flash_sales = {
    selector: '#dealsx_incart span.a-button',
    add_text: true,
    clickable: true,
    name: 'from_text'
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
                go_to_cart_button_for_flash_sales,
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
const carousel_card = {
    selector: 'li.a-carousel-card:not(.a-carousel-card-empty), #gridItemRoot',
    name: 'from_text',
    text_js: (em) => {
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title');
        const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.title) || (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
        const imgEm = em.querySelector('img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"] img.s-image');
        const imgAlt = imgEm === null || imgEm === void 0 ? void 0 : imgEm.alt;
        return title || imgAlt || '';
    },
    children: [
        {
            selector: 'a:has(img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"]), img.s-image, a[target="_top"]:has(img):not(:has(div, span)), a.sw-product-image-link',
            name: 'product_image',
            add_text: true,
            text_format: 'Product Image',
            clickable: true
        },
        {
            selector: 'a div[class*="sc-truncate-desktop"], a div:has(> span.title), a div[class*="sc-css-line-clamp"], a:has(span[class*="titleR3"]), div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title',
            add_text: true,
            name: 'product_title',
            clickable: true
        },
        {
            selector: 'div[class*="singleSwatchesContainer"]',
            name: 'options',
            children: [
                {
                    selector: 'li a',
                    add_text: true,
                    name: 'from_text',
                    clickable: true,
                    text_js: (em) => {
                        return em.getAttribute('aria-label') || em.innerText || '';
                    }
                },
                {
                    selector: 'a[class*="_link_"]',
                    add_text: true,
                    name: 'from_text',
                    clickable: true
                }
            ]
        },
        {
            selector: 'div[class*="variationLink"] a',
            clickable: true,
            add_text: true,
            name: 'from_text'
        },
        {
            selector: 'a:has(i[class*="star"]), a:has(i[data-cy="reviews-ratings-slot"]), a.adReviewLink',
            name: 'product_rating',
            clickable: true,
            add_text: true,
            text_js: (em) => {
                return em.title || em.getAttribute('aria-label') || '';
            }
        },
        {
            selector: 'span.a-size-base.s-underline-text',
            add_text: true,
            text_format: '{} reviews',
            class: 'product-rating-count',
            name: 'product_rating_count',
            clickable: true
        },
        {
            selector: 'a[aria-describedby*="sp_detail_thematic-deals"]:not(:has(span.a-price)), a[aria-describedby*="sp_detail_thematic-recent_history"]:not(:has(span.a-price))',
            add_text: true,
            name: 'from_text',
            clickable: true
        },
        {
            selector: 'div[class*="sc-price"]',
            add_text: true,
            text_selector: 'span[class*="sc-price"]',
            name: 'product_price',
            clickable: true
        },
        {
            selector: 'div.a-section.aok-relative:has(span.a-price span.a-offscreen), div.a-color-price:has(span.a-price span.a-offscreen), a[aria-describedby="price-link"]:has(span.a-price span.a-offscreen)',
            add_text: true,
            clickable: true,
            text_selector: 'span.a-price span.a-offscreen',
            name: 'product_price'
        },
        {
            selector: 'span.a-price span.a-offscreen',
            add_text: true
        },
        {
            selector: 'a.pBooks-sf-points-component',
            add_text: true,
            clickable: true,
            name: 'product_points'
        },
        {
            selector: 'input[name="submit.addToCart"], span[class*="actionButton"]:has(i.a-icon-cart)',
            name: 'add_to_cart',
            add_text: true,
            text_format: 'Add To Cart',
            clickable: true
        },
        {
            selector: 'div[name="ax-qs"], div[id^="atcStepperSection"]',
            children: [
                {
                    selector: "button[aria-label='Decrease quantity by one'], button[data-action='remove']",
                    add_text: true,
                    text_format: 'Decrease quantity by one',
                    clickable: true,
                    name: 'from_text'
                },
                {
                    selector: "div[role='spinbutton'], span.atcStepperQuantity",
                    add_text: true,
                    text_format: 'Current Quantity: {}'
                },
                {
                    selector: "button[aria-label='Increase quantity by one'], button[data-action='add']",
                    add_text: true,
                    text_format: 'Increase quantity by one',
                    clickable: true,
                    name: 'from_text'
                }
            ]
        },
        {
            selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
            add_text: true,
            clickable: true,
            name: 'from_text'
        }
    ],
    generate_metadata: (em) => {
        var _a, _b, _c;
        const asinJSONString = (_a = em
            .querySelector('div[data-adfeedbackdetails]')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-adfeedbackdetails');
        let asinJSON;
        if (asinJSONString !== undefined) {
            asinJSON = JSON.parse(asinJSONString);
        }
        const asinEm = em.querySelector('div[id*="sc-turbo-container"], div[data-asin], input[data-asin]');
        const asin = (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin')) ||
            ((_b = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('id')) === null || _b === void 0 ? void 0 : _b.split('-').pop()) ||
            (asinJSON === null || asinJSON === void 0 ? void 0 : asinJSON.asinId) ||
            '';
        const priceEm = em.querySelector('a span[class*="sc-price"], span.a-price span.a-offscreen');
        const price = (_c = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _c === void 0 ? void 0 : _c.replace(/[\n]/g, '');
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title');
        const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.title) || (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
        const imgEm = em.querySelector('img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"] img.s-image');
        const imgAlt = imgEm === null || imgEm === void 0 ? void 0 : imgEm.alt;
        const urlEm = em.querySelector('a:has(div[class*="sc-truncate-desktop"]), a:has(span.title), a:has(span[class*="title"])');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"], div[id^="atcStepperSection"] span.atcStepperQuantity');
        const quantity = (quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText) || '';
        return {
            name: 'promotion_items',
            data: { title: title || imgAlt || '', asin, price, url, quantity }
        };
    }
};
const cart = [
    nav,
    {
        selector: '#sc-collapsed-carts-container',
        name: 'carts',
        children: [
            {
                selector: 'div.sc-collapsed-cart-container',
                name: 'from_text',
                text_js: (em) => {
                    var _a;
                    const titleEm = em.querySelector('div.sc-cart-header');
                    const title = ((_a = titleEm === null || titleEm === void 0 ? void 0 : titleEm.querySelector('h2[aria-label]')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-label')) ||
                        (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) ||
                        'cart';
                    return title;
                },
                children: [
                    {
                        selector: 'div.sc-cart-header:has(a h2 img)',
                        clickable: true,
                        name: 'from_text',
                        text_js: (em) => {
                            var _a;
                            return ((_a = em.querySelector('a h2 img')) === null || _a === void 0 ? void 0 : _a.alt) || '';
                        }
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
                        selector: 'a.sns-opt-in-link-desktop',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                    },
                    {
                        selector: 'a.sns-recurrence-period-selector',
                        add_text: true,
                        clickable: true,
                        name: 'from_text',
                        text_format: 'Delivery every: {}'
                    },
                    {
                        selector: 'div.sc-item-content-group span.sc-quantity-stepper',
                        children: [
                            {
                                selector: "button[aria-label='Decrease quantity by one'], button[data-action='a-stepper-decrement']",
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
    },
    {
        selector: 'div.a-modal-scroller div.a-popover-wrapper',
        use_root: true,
        name: 'subscribe_n_save_popover',
        children: [
            {
                selector: 'button.a-button-close',
                clickable: true,
                name: 'from_text',
                text_format: 'Close',
                add_Text: true
            },
            {
                selector: 'select',
                name: 'drop_down_list'
            },
            {
                selector: 'li',
                clickable: true,
                name: 'from_text',
                add_text: true
            },
            {
                selector: 'div.a-popover-footer span.a-button-inner',
                name: 'from_text',
                clickable: true,
                add_text: true,
                text_selector: 'span.a-button-text'
            }
        ]
    },
    {
        selector: '#sns-accordion',
        use_root: true,
        name: 'subscribe_n_save_frequency_selector_popover',
        children: [
            {
                selector: 'div.a-box',
                add_text: true,
                name: 'from_text',
                clickable: true
            }
        ]
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
            selector: 'a > span > span.a-truncate',
            add_text: true,
            name: 'product_detail',
            clickable: true,
            text_selector: 'span.a-truncate-full'
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
                                        selector: "input[aria-label^='Remove']",
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
                                        selector: "input[aria-label^='Add']",
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
        selector: 'div[id^="CardInstance"]',
        text_selector: 'h2.a-carousel-heading',
        name: 'from_text',
        children: [
            {
                selector: 'h2.a-carousel-heading',
                add_text: true
            },
            fresh_carousel_card
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
        selector: '#sc-cart-above-actions span.a-button, #sc-cart-above-actions a',
        clickable: true,
        name: 'from_text',
        add_text: true
    }
];
const luxury_carousel_card = {
    selector: 'li.a-carousel-card, div[id^="gridElement"]',
    name: 'from_text',
    text_selector: 'span.a-truncate-full',
    children: [
        {
            selector: 'a',
            clickable: true,
            add_text: true,
            name: 'from_text',
            text_selector: '#bondWalledCarouselElementDescription'
        }
    ],
    generate_metadata: (em) => {
        var _a, _b;
        const asinEm = em.querySelector('a');
        const asin = (_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.split('/').at(-2);
        const priceEm = em.querySelector('span.a-price span.a-offscreen');
        const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
        const titleEm = em.querySelector('a #bondWalledCarouselElementDescription');
        const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
        const urlEm = em.querySelector('a');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        return {
            name: 'promotion_items',
            data: { title, asin, price, url }
        };
    }
};
const luxury_cart = [
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
                        text_selector: 'span.sc-product-title',
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
                                selector: 'span.sc-quantity-stepper',
                                children: [
                                    {
                                        selector: 'button[data-action="a-stepper-decrement"]',
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
                                        selector: 'div[role="spinbutton"]',
                                        add_text: true,
                                        name: 'quantity_drop_down_list',
                                        text_format: 'Current Quantity: {}'
                                    },
                                    {
                                        selector: 'button[data-action="a-stepper-increment"]',
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
                    const titleEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title span.sc-product-title');
                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                    const urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title');
                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                    const quantityEm = em.querySelector('span.sc-quantity-stepper div[role="spinbutton"]');
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
        selector: 'div.sc-buy-box-inner-box input[name^="proceedToLuxuryCheckout"]',
        clickable: true,
        name: 'check_out',
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
                                selector: 'div[class*="asinDetailReviewsRow"] a',
                                clickable: true,
                                add_text: true,
                                text_selector: 'i.a-icon-star-mini',
                                name: 'product_rating'
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
                                        selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailPurchaseColumn"]',
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
                                        selector: 'div[class*="reviewsRow"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_selector: 'i.a-icon-star-mini',
                                        name: 'product_rating'
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
const popular_products = [
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
                selector: '#zg_header',
                name: 'categories',
                children: [
                    {
                        selector: 'li a',
                        clickable: true,
                        name: 'from_text',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'div[class*="zg-banner-landing-page-header"]',
                add_text: true
            },
            {
                selector: 'div[class*="g-nav-tree-all_style_zg-browse-root"]',
                name: 'departments',
                children: [
                    {
                        selector: 'div[class*="zg-nav-tree-all_style_zg-root-browse-item"] > a, div[class*="zg-nav-tree-all_style_zg-browse-item"] > a',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                    },
                    {
                        selector: 'div[class*="zg-nav-tree-all_style_zg-root-browse-item"] > span, div[class*="zg-nav-tree-all_style_zg-browse-item"] > span',
                        name: 'from_text',
                        add_text: true
                    }
                ]
            },
            {
                selector: 'div[id^="CardInstance"]',
                text_selector: 'h2.a-carousel-heading, h1',
                name: 'from_text',
                children: [
                    {
                        selector: 'h2.a-carousel-heading, h1',
                        add_text: true
                    },
                    {
                        selector: 'div.a-carousel-header-row a',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                    },
                    carousel_card
                ]
            }
        ]
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
                children: [
                    nav,
                    cart_side_bar,
                    {
                        selector: 'div.gw-col',
                        text_selector: 'h1 span.a-truncate-full, h2 span.a-truncate-full, h3 span.a-truncate-full, h1:not(:has(span.a-truncate-full)), h2:not(:has(span.a-truncate-full)), h3:not(:has(span.a-truncate-full))',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h1 span.a-truncate-full, h2 span.a-truncate-full, h3 span.a-truncate-full, h1:not(:has(span.a-truncate-full)), h2:not(:has(span.a-truncate-full)), h3:not(:has(span.a-truncate-full))',
                                add_text: true
                            },
                            {
                                selector: 'a',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    var _a, _b;
                                    return (em.getAttribute('aria-label') ||
                                        ((_a = em.querySelector('img')) === null || _a === void 0 ? void 0 : _a.alt) ||
                                        ((_b = em.querySelector('span.a-truncate-full')) === null || _b === void 0 ? void 0 : _b.innerText) ||
                                        em.innerText ||
                                        '');
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[data-card-metrics-id*="rhf"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div[data-card-metrics-id*="rvi"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            {
                                selector: 'a',
                                clickable: true,
                                add_text: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    var _a;
                                    return ((_a = em.querySelector('img')) === null || _a === void 0 ? void 0 : _a.alt) || em.innerText || '';
                                }
                            }
                        ]
                    }
                ]
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
                        selector: 'div.sf-rib-v1-toolbar',
                        name: 'refinements_toolbar',
                        children: [
                            {
                                selector: 'span[data-csa-c-slot-id="nav-rib"], div[data-csa-c-slot-id="nav-rib"], a.sf-clear-all',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    if (em.getAttribute('data-csa-c-content-id') == 's-all-filters') {
                                        return 'Show All Filters';
                                    }
                                    return em.getAttribute('aria-label') || em.innerText || '';
                                }
                            },
                            {
                                selector: 'div.sf-rib-v1-dropdown-main-container',
                                name: 'drop_down_lists',
                                children: [
                                    {
                                        selector: 'div.a-section.a-spacing-none',
                                        name: 'from_text',
                                        text_selector: 'div.sf-rib-v1-dropdown-popup-title-container',
                                        direct_child: true,
                                        children: [
                                            {
                                                selector: 'div.sf-rib-v1-dropdown-popup-title-container',
                                                add_text: true
                                            },
                                            {
                                                selector: 'ul span[role="listitem"]',
                                                clickable: true,
                                                add_text: true,
                                                name: 'from_text',
                                                children: [
                                                    {
                                                        selector: 'input[type="checkbox"]'
                                                    }
                                                ]
                                            },
                                            {
                                                selector: 'div.sf-rib-v1-range-slider-label-container',
                                                add_text: true
                                            },
                                            {
                                                selector: 'div.s-slider-container div.s-lower-bound input',
                                                name: 'price_min_value',
                                                add_text: true,
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
                                                selector: 'div.s-slider-container div.s-upper-bound input',
                                                name: 'price_min_value',
                                                add_text: true,
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
                                                selector: 'div.sf-rib-v1-dropdown-buttons button, div.sf-rib-v1-dropdown-buttons input',
                                                name: 'from_text',
                                                add_text: true,
                                                clickable: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
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
                                            var _a;
                                            const selected = em === null || em === void 0 ? void 0 : em.getAttribute('aria-current');
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
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
                                            var _a, _b;
                                            const title = (_b = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ')) === null || _b === void 0 ? void 0 : _b.trim();
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
                                            var _a, _b;
                                            const title = (_b = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, ' ')) === null || _b === void 0 ? void 0 : _b.trim();
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
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
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
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
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
                                            const range = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, '');
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
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
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
                                            var _a;
                                            const title = (_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.trim();
                                            const url = em === null || em === void 0 ? void 0 : em.getAttribute('href');
                                            return { name: 'refinements.price', data: { title, selected: false, url } };
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'div:has(> span[data-component-type="s-searchgrid-carousel"])',
                        name: 'from_text',
                        text_selector: 'div.sg-row h2',
                        children: [
                            {
                                selector: 'div.sg-row h2',
                                add_text: true
                            },
                            carousel_card
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
                                        selector: 'div.s-product-image-container, div.s-image-overlay-black',
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
                                                selector: 'a:has(i[data-cy="reviews-ratings-slot"])',
                                                clickable: true,
                                                name: 'product_rating'
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
                                                selector: 'a.a-link-normal:has(> span.a-price > span.a-offscreen)',
                                                clickable: true,
                                                name: 'product_price',
                                                add_text: true,
                                                text_selector: 'a > span.a-price > span.a-offscreen'
                                            }
                                        ]
                                    },
                                    {
                                        selector: "div[data-cy='delivery-recipe']",
                                        add_text: true,
                                        class: 'product-delivery'
                                    },
                                    {
                                        selector: "div[data-cy='add-to-cart'] span.a-button:has(button), span[id*='add-to-cart'] input",
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
        match: '#productTitle, #titleBlock',
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
                                selector: '#bondByLine_feature_div',
                                add_text: true,
                                clickable: true,
                                name: 'product_brand',
                                generate_metadata: (em) => {
                                    return {
                                        name: 'product_details',
                                        data: { brand: (em === null || em === void 0 ? void 0 : em.innerText) || '' }
                                    };
                                }
                            },
                            {
                                selector: '#bondByLine_feature_div',
                                add_text: true,
                                name: 'product_title',
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
                                selector: 'span.bondApexPrice span.a-offscreen',
                                add_text: true,
                                text_format: 'Price: {}',
                                class: 'product-price',
                                generate_metadata: (em) => {
                                    var _a;
                                    return {
                                        name: 'product_details',
                                        data: { price: ((_a = em === null || em === void 0 ? void 0 : em.innerText) === null || _a === void 0 ? void 0 : _a.replace(/\n/g, '')) || '' }
                                    };
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
                                                        selector: 'li:has(span.a-button:not(.aok-hidden) input)',
                                                        add_text: true,
                                                        clickable: true,
                                                        name: 'from_text',
                                                        text_js: function (element) {
                                                            const textEm = element.querySelector('span.a-button-text');
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
                                selector: '#productFactsDesktopExpander ul.a-unordered-list, #featurebullets_feature_div ul.a-unordered-list, #bond-feature-bullets-desktop ul.a-unordered-list',
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
                        selector: '#buybox:has(div.a-tab-container):not(:has(#partialState_buybox_desktop)):not(:has(#luxury_buybox_desktop))',
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
                        selector: '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop)):not(:has(#luxury_buybox_desktop))',
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
                        selector: '#buybox:has(#luxury_buybox_desktop)',
                        name: 'buybox',
                        children: [
                            {
                                selector: '#bondApexPrice_feature_div',
                                add_text: true
                            },
                            {
                                selector: '#deliveryBlockMessage',
                                add_text: true
                            },
                            {
                                selector: 'span.a-dropdown-container select',
                                name: 'drop_down_list'
                            },
                            {
                                selector: '#bond-atc-button input',
                                name: 'from_text',
                                text_format: 'Add To Cart',
                                clickable: true,
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
                        selector: '#outOfStock',
                        add_text: true,
                        text_format: 'Currently Unavailable'
                    },
                    {
                        selector: 'div.cardRoot.bucket',
                        name: 'from_text',
                        text_selector: 'h2#similarities-product-bundle-widget-title, h2.a-carousel-heading',
                        children: [
                            {
                                selector: 'h2#similarities-product-bundle-widget-title, h2.a-carousel-heading',
                                add_text: true
                            },
                            {
                                selector: 'div[class*="new-detail-faceout-box"]',
                                name: 'from_text',
                                text_selector: 'div[id^="ProductTitle"], div[class*="title-component"]',
                                children: [
                                    {
                                        selector: 'input[id^="fbtCheck"], div[class*="thematicBundle-checkbox"]',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Checkbox',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="desktop-sims-fbt_fbt-desktop_image-link"], div[class*="image-background"] a',
                                        text_format: 'Product Image',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[id^="ProductTitle"]:has(a), a:has(div[class*="title-component"])',
                                        clickable: true,
                                        add_text: true,
                                        name: 'product_title'
                                    },
                                    {
                                        selector: 'div[id^="ProductTitle"]:not(:has(a)) div > div[class*="title-component"]',
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[class*="reviews-section"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Reviewed by {}',
                                        name: 'product_rating_count'
                                    },
                                    {
                                        selector: 'div[class*="desktop-sims-fbt_price_p13n"] span.a-price span.a-offscreen',
                                        add_text: true
                                    }
                                ]
                            },
                            {
                                selector: 'span.add-to-cart-button',
                                clickable: true,
                                add_text: true,
                                name: 'from_text'
                            }
                        ]
                    },
                    {
                        selector: 'div#dp:not(.grocery):not(.luxury) #similarities_feature_div',
                        text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div.grocery #similarities_feature_div',
                        text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                                add_text: true
                            },
                            fresh_carousel_card
                        ]
                    },
                    {
                        selector: 'div.luxury #similarities_feature_div',
                        text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                                add_text: true
                            },
                            luxury_carousel_card
                        ]
                    },
                    {
                        selector: '#product-comparison_feature_div',
                        name: 'product_comparison',
                        children: [
                            {
                                selector: 'h2',
                                add_text: true
                            },
                            {
                                selector: 'tr:has(div[class^="_product-comparison-desktop_titleStyle"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_selector: 'div[class^="_product-comparison-desktop_titleStyle"]',
                                        children: [
                                            {
                                                selector: 'a > div[id^="imageContainer"]',
                                                name: 'product_image',
                                                clickable: true,
                                                add_text: true,
                                                text_format: 'Product Image'
                                            },
                                            {
                                                selector: 'div > div[id^="imageContainer"]',
                                                name: 'product_image',
                                                add_text: true,
                                                text_format: 'Product Image'
                                            },
                                            {
                                                selector: 'a > div[class^="_product-comparison-desktop_titleStyle"]',
                                                add_text: true,
                                                clickable: true,
                                                name: 'product_title'
                                            },
                                            {
                                                selector: 'div > div[class^="_product-comparison-desktop_titleStyle"]',
                                                add_text: true,
                                                name: 'product_title'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(input[name="submit.addToCart"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelector('tr:has(div[class^="_product-comparison-desktop_titleStyle"])')) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'input[name="submit.addToCart"]',
                                                name: 'add_to_cart',
                                                clickable: true,
                                                add_text: true
                                            }
                                        ],
                                        generate_metadata: (em) => {
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const titleEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelector('tr:has(div[class^="_product-comparison-desktop_titleStyle"])')) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
                                            const asin = (_e = (_d = em
                                                .querySelector('input[name="submit.addToCart"]')) === null || _d === void 0 ? void 0 : _d.getAttribute('data-asins')) === null || _e === void 0 ? void 0 : _e.replace(/[\[\]"]/g, '');
                                            const priceEm = (_h = (_g = (_f = em
                                                .closest('tbody')) === null || _f === void 0 ? void 0 : _f.querySelector('tr:has(span.a-price)')) === null || _g === void 0 ? void 0 : _g.querySelector(selector)) === null || _h === void 0 ? void 0 : _h.querySelector('span.a-price span.a-offscreen');
                                            const price = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText;
                                            const urlEm = (_l = (_k = (_j = em
                                                .closest('tbody')) === null || _j === void 0 ? void 0 : _j.querySelector('tr:has(div[class^="_product-comparison-desktop_titleStyle"])')) === null || _k === void 0 ? void 0 : _k.querySelector(selector)) === null || _l === void 0 ? void 0 : _l.querySelector('a:has(div[class^="_product-comparison-desktop_titleStyle"])');
                                            const url = (urlEm === null || urlEm === void 0 ? void 0 : urlEm.href) || window.location.href;
                                            return { name: 'comparison_items', data: { title, asin, price, url } };
                                        }
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(span.a-price)',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr')[0]) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'span.a-price span.a-offscreen',
                                                name: 'product_price',
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(div[class*="delivery"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr')[0]) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'div[class*="delivery"]',
                                                name: 'product_delivery',
                                                add_text: true
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                selector: 'tr:has(div[class*="reviews-rating"])',
                                children: [
                                    {
                                        selector: 'td[class*="asin"]',
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a, _b, _c;
                                            const classes = em.classList.value;
                                            const selector = classes
                                                .split(' ')
                                                .map((cls) => `.${cls}`)
                                                .join(', ');
                                            const textEm = (_c = (_b = (_a = em
                                                .closest('tbody')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('tr')[0]) === null || _b === void 0 ? void 0 : _b.querySelector(selector)) === null || _c === void 0 ? void 0 : _c.querySelector('div[class^="_product-comparison-desktop_titleStyle"]');
                                            return (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        },
                                        children: [
                                            {
                                                selector: 'div[class*="reviews-rating"]',
                                                name: 'product_rating',
                                                add_text: true,
                                                text_js: (em) => {
                                                    const icon = em.querySelector('i');
                                                    const span = em.querySelector('span.a-size-base.a-color-link');
                                                    return (icon === null || icon === void 0 ? void 0 : icon.innerText) + ' Reviewed by ' + (span === null || span === void 0 ? void 0 : span.innerText) || '';
                                                },
                                                clickable: true
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
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
        match: '/hz/mobile/mission',
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
                        selector: 'div[data-intent="intent-feed-mission-switcher"]',
                        name: 'category_switcher',
                        children: [
                            {
                                selector: 'h4',
                                clickable: true,
                                name: 'from_text',
                                add_text: true
                            },
                            {
                                selector: 'li.a-carousel-card',
                                clickable: true,
                                name: 'from_text',
                                add_text: true,
                                text_js: (em) => {
                                    const imgEm = em.querySelector('img');
                                    return (imgEm === null || imgEm === void 0 ? void 0 : imgEm.alt) || '';
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[class*="singleProductContainer"]',
                        name: 'from_text',
                        text_selector: 'span[class*="titleR2"]',
                        children: [
                            {
                                selector: 'a:has(img)',
                                add_text: true,
                                text_format: 'Product Image',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'div[class*="singleSwatchesContainer"]',
                                name: 'options',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        text_js: (em) => {
                                            return em.getAttribute('aria-label') || em.innerText || '';
                                        }
                                    },
                                    {
                                        selector: 'a[class*="_link_"]',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true
                                    }
                                ]
                            },
                            {
                                selector: 'div[class*="variationLink"] a',
                                clickable: true,
                                add_text: true,
                                name: 'from_text'
                            },
                            {
                                selector: 'a:not(:has(img))',
                                add_text: true,
                                direct_child: true,
                                text_format: 'Product Detail',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'div[class*="singleProductDetails"] a',
                                add_text: true,
                                direct_child: true,
                                text_format: 'Product Detail',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'span.a-button:has(input)',
                                clickable: true,
                                add_text: true,
                                name: 'add_to_cart'
                            },
                            {
                                selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                                add_text: true,
                                clickable: true,
                                name: 'from_text'
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a;
                            const asinEm = em.querySelector('div[data-asin]');
                            const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                            const priceEm = em.querySelector('span.a-price span.a-offscreen');
                            const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                            const titleEm = em.querySelector('span[class*="titleR2"]');
                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText.replace('"', '');
                            const urlEm = em.querySelector('a:not(:has(img))');
                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                            return {
                                name: 'promotion_items',
                                data: { title, asin, price, url }
                            };
                        }
                    },
                    {
                        selector: '#intent-tabs',
                        name: 'intent_tabs',
                        children: [
                            {
                                selector: 'li',
                                clickable: true,
                                name: 'from_text',
                                add_text: true,
                                text_js: (em) => {
                                    var _a;
                                    return (((_a = em
                                        .getAttribute('data-intent')) === null || _a === void 0 ? void 0 : _a.replace('intent-feed-', '').replaceAll('-', '_')) || '');
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]:has(div[class*="productContainer"])',
                        text_selector: 'h4',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h4',
                                add_text: true
                            },
                            carousel_card
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]:has(div[class*="twoAsinsProductDetails"])',
                        text_selector: 'h4',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h4',
                                add_text: true
                            },
                            carousel_card,
                            {
                                selector: 'div[class*="twoAsinsProductContainer"]',
                                text_js: (em) => {
                                    const aEm = em.querySelector('div[class*="twoAsinsProductDetails"] a[aria-label]');
                                    return aEm.getAttribute('aria-label') || '';
                                },
                                name: 'from_text',
                                children: [
                                    {
                                        selector: 'div[class*="imageBlockContainer"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[class*="twoAsinsProductDetails"] a',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Product Details',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'span[class*="actionButton"]:has(i.a-icon-cart)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a;
                                    const asinEm = em.querySelector('input[data-asin]');
                                    const asin = (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin')) || '';
                                    const priceEm = em.querySelector('span.a-price span.a-offscreen');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('div[class*="twoAsinsProductDetails"] a');
                                    const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.getAttribute('aria-label')) || '';
                                    const urlEm = em.querySelector('div[class*="twoAsinsProductDetails"] a');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    return {
                                        name: 'promotion_items',
                                        data: { title, asin, price, url }
                                    };
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[class*="intuition-sticky-container"]',
                        name: 'refinements',
                        children: [
                            {
                                selector: 'li[class*="intuition-attribute-bar"]',
                                name: 'from_text',
                                text_js: (em) => {
                                    const textEm = em.querySelector('a-cardui-header');
                                    const ariaEm = em.querySelector('button[aria-label]');
                                    return (ariaEm === null || ariaEm === void 0 ? void 0 : ariaEm.getAttribute('aria-label')) || (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                },
                                children: [
                                    {
                                        selector: 'div[class*="intuition-attribute-with-chevron__attributeWithChevronContainer"]',
                                        clickable: true,
                                        name: 'apply_filters',
                                        add_text: true,
                                        text_js: (em) => {
                                            const textEm = em.querySelector('span.a-truncate-full');
                                            const ariaEm = em.querySelector('button[aria-label]');
                                            return (ariaEm === null || ariaEm === void 0 ? void 0 : ariaEm.getAttribute('aria-label')) || (textEm === null || textEm === void 0 ? void 0 : textEm.innerText) || '';
                                        }
                                    },
                                    {
                                        selector: 'div[class*="intuition-attribute-with-chevron__chevronOuterContainer"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_format: 'Open Filters'
                                    },
                                    {
                                        selector: 'div[class*="closeModalIconContainer"]',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Close Filters',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div.a-cardui-content > div > div',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_js: (em) => {
                                            const button = em.querySelector('button');
                                            return (button === null || button === void 0 ? void 0 : button.getAttribute('aria-label')) || (button === null || button === void 0 ? void 0 : button.innerText) || '';
                                        }
                                    },
                                    {
                                        selector: 'div[class*="actionContainer"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: '#intent-content-default',
                        name: 'from_text',
                        text_js: (em) => {
                            var _a;
                            return (((_a = em.getAttribute('data-intent')) === null || _a === void 0 ? void 0 : _a.replace('intent-feed-', '').replaceAll('-', '_')) ||
                                '');
                        },
                        children: [
                            {
                                selector: 'li[class*="productContainer"]',
                                name: 'from_text',
                                text_selector: 'span[class*="titleR3"], span[class*="titleR4"]',
                                children: [
                                    {
                                        selector: 'a:has(img)',
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div[class*="swatches"], div[class*="variationContainer"]',
                                        name: 'options',
                                        children: [
                                            {
                                                selector: 'li a',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true,
                                                text_js: (em) => {
                                                    return em.getAttribute('aria-label') || em.innerText || '';
                                                }
                                            },
                                            {
                                                selector: 'a[class*="_link_"]',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div[class*="variationLink"] a',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="productLink"]',
                                        clickable: true,
                                        add_text: true,
                                        name: 'product_title'
                                    },
                                    {
                                        selector: 'span.a-button:has(input)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                                        add_text: true,
                                        clickable: true,
                                        name: 'from_text'
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b;
                                    const asinEm = em.querySelector('div[data-asin]');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span.a-price span.a-offscreen');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('span[class*="titleR3"]');
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText.replace('"', '');
                                    const urlEm = em.querySelector('a:not(:has(img))');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const nameEm = em.closest('#intent-content-default');
                                    const name = ((_b = nameEm === null || nameEm === void 0 ? void 0 : nameEm.getAttribute('data-intent')) === null || _b === void 0 ? void 0 : _b.replace('intent-feed-', '').replaceAll('-', '_')) || '';
                                    return {
                                        name: name,
                                        data: { title, asin, price, url }
                                    };
                                }
                            },
                            {
                                selector: 'li[class*="intuition-product-grid__faceout"]',
                                name: 'from_text',
                                text_selector: 'span[class*="titleR3"], span[class*="titleR4"]',
                                children: [
                                    {
                                        selector: 'a:has(img)',
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div[class*="swatches"], div[class*="variationContainer"]',
                                        name: 'options',
                                        children: [
                                            {
                                                selector: 'li a',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true,
                                                text_js: (em) => {
                                                    return em.getAttribute('aria-label') || em.innerText || '';
                                                }
                                            },
                                            {
                                                selector: 'a[class*="_link_"]',
                                                add_text: true,
                                                name: 'from_text',
                                                clickable: true
                                            }
                                        ]
                                    },
                                    {
                                        selector: 'div[class*="variationLink"] a',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="productLink"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_format: 'Product Detail'
                                    },
                                    {
                                        selector: 'span.a-button:has(input)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: 'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                                        add_text: true,
                                        clickable: true,
                                        name: 'from_text'
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b;
                                    const asinEm = em.querySelector('input');
                                    const asin = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin');
                                    const priceEm = em.querySelector('span.a-price span.a-offscreen');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('span[class*="titleR3"]');
                                    const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText.replace('"', '');
                                    const urlEm = em.querySelector('a:not(:has(img))');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                                    const nameEm = em.closest('#intent-content-default');
                                    const name = ((_b = nameEm === null || nameEm === void 0 ? void 0 : nameEm.getAttribute('data-intent')) === null || _b === void 0 ? void 0 : _b.replace('intent-feed-', '').replaceAll('-', '_')) || '';
                                    return {
                                        name: name,
                                        data: { title, asin, price, url }
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
                            },
                            {
                                selector: 'div.sw-atf-recommendations-container div[id^="CardInstance"], div#smart-wagon-recommendations-btf div[id^="CardInstance"]',
                                text_selector: 'h1.a-carousel-heading',
                                name: 'from_text',
                                children: [
                                    {
                                        selector: 'h1.a-carousel-heading',
                                        add_text: true
                                    },
                                    carousel_card
                                ]
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
                    },
                    {
                        selector: 'div.sw-atf-recommendations-container div[id^="CardInstance"], div#smart-wagon-recommendations-btf div[id^="CardInstance"]',
                        text_selector: 'h1.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h1.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
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
        match: '/cart/luxury',
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
                children: luxury_cart
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
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            fresh_carousel_card
                        ]
                    }
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
        match: '/cart/byc',
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
                    {
                        selector: 'a[name="sc-byc-ptc-button"]',
                        name: 'check_out',
                        add_text: true,
                        clickable: true
                    },
                    {
                        selector: 'span[cel_widget_id^="byc-back-button"] a',
                        name: 'back_to_cart',
                        add_text: true,
                        clickable: true
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.a-carousel-heading',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/fmc/ssd-storefront',
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
                        selector: 'div[class*="store-subnav-desktop_style_subnav-content-container"]',
                        name: 'sub_stores',
                        children: [
                            {
                                selector: 'a[class*="store-subnav-desktop_style"], a[class*="store-subnav-desktop-flyout_style"]',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    return em.innerText || 'Same Day Store';
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.seeMoreTitleHeader',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/fmc/ssd-category',
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
                        selector: 'div[class*="store-subnav-desktop_style_subnav-content-container"]',
                        name: 'sub_stores',
                        children: [
                            {
                                selector: 'a[class*="store-subnav-desktop_style"]',
                                add_text: true,
                                clickable: true,
                                name: 'from_text',
                                text_js: (em) => {
                                    return em.innerText || 'Same Day Store';
                                }
                            }
                        ]
                    },
                    {
                        selector: 'div.dcl-container',
                        name: 'categories',
                        children: [
                            {
                                selector: 'h2.dcl-header-title',
                                add_text: true
                            },
                            {
                                selector: 'li.a-carousel-card.dcl-carousel-element a',
                                text_selector: 'div.dcl-card-footer',
                                add_text: true,
                                clickable: true,
                                name: 'from_text'
                            }
                        ]
                    },
                    {
                        selector: 'div[id^="CardInstance"]',
                        text_selector: 'h2.seeMoreTitleHeader',
                        name: 'from_text',
                        children: [
                            {
                                selector: 'h2.a-carousel-heading',
                                add_text: true
                            },
                            carousel_card
                        ]
                    }
                ]
            }
        ]
    },
    {
        match: '/gp/bestsellers',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        children: popular_products
    },
    {
        match: '/gp/new-releases/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/gp/movers-and-shakers/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/gp/most-wished-for/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/gp/most-gifted/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/Best-Sellers*/zgbs/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/Best-Sellers*/zgbs/*/*',
        match_method: 'url',
        selector: 'html',
        match_with_ref: true,
        match_with_wildcard: true,
        children: popular_products
    },
    {
        match: '/*/b',
        match_method: 'url',
        selector: 'html',
        match_with_wildcard: true,
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
                        selector: '#nav-subnav',
                        name: 'sub_stores',
                        children: [
                            {
                                selector: 'a',
                                direct_child: true,
                                clickable: true,
                                name: 'from_text',
                                add_text: true
                            },
                            {
                                selector: 'li.generic-subnav-flyout-item',
                                clickable: true,
                                use_root: true,
                                name: 'from_text',
                                add_text: true
                            }
                        ]
                    },
                    {
                        selector: 'div[class^="DesktopRefinements-module__root"]',
                        name: 'refinements',
                        children: [
                            {
                                selector: 'div',
                                direct_child: true,
                                name: 'from_text',
                                text_selector: 'span.a-size-base.a-color-base.a-text-bold',
                                children: [
                                    {
                                        selector: 'span.a-size-base.a-color-base.a-text-bold',
                                        add_text: true
                                    },
                                    {
                                        selector: 'ul[class^="Breadcrumbs-module"] li:has(a)',
                                        add_text: true,
                                        clickable: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'ul[class^="Breadcrumbs-module"] li:not(:has(a))',
                                        add_text: true
                                    },
                                    {
                                        selector: 'div[role="radiogroup"] > span, div[role="group"] > span',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a;
                                            return (((_a = em.querySelector('div[aria-label]')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-label')) ||
                                                em.innerText);
                                        },
                                        generate_metadata: (em) => {
                                            var _a, _b, _c, _d;
                                            const nameEm = (_b = (_a = em.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.firstElementChild;
                                            const name = (_c = nameEm === null || nameEm === void 0 ? void 0 : nameEm.innerText) === null || _c === void 0 ? void 0 : _c.trim().replace(/[ ]/g, '_').toLowerCase().trim().replace(/^_+|_+$/g, '');
                                            const text = ((_d = em.querySelector('div[aria-label]')) === null || _d === void 0 ? void 0 : _d.getAttribute('aria-label')) ||
                                                em.innerText;
                                            const selectEm = em.querySelector('input[type="radio"], input[type="checkbox"]');
                                            const selected = selectEm === null || selectEm === void 0 ? void 0 : selectEm.getAttribute('data-processed-input-checked');
                                            return {
                                                name: 'refinements.' + name,
                                                data: { title: (text === null || text === void 0 ? void 0 : text.trim()) || '', selected: false }
                                            };
                                        }
                                    },
                                    {
                                        selector: 'button[class*="SeeMoreButton-module"]',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        selector: 'div[class^="ProductCard-module__card"]',
                        name: 'from_text',
                        text_selector: 'p[id^="title"] span.a-truncate-full',
                        children: [
                            {
                                selector: 'div[class*="imageWrapper"] a',
                                clickable: true,
                                text_format: 'Product Image',
                                add_text: true,
                                name: 'from_text'
                            },
                            {
                                selector: 'a[class*="cardContainingLink"]',
                                clickable: true,
                                add_text: true,
                                name: 'product_detail'
                            },
                            {
                                selector: 'div[data-testid="color-swatch"] ul',
                                name: 'colors',
                                children: [
                                    {
                                        selector: 'li',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text',
                                        text_js: (em) => {
                                            var _a;
                                            return ((_a = em.querySelector('a')) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-label')) || '';
                                        }
                                    }
                                ]
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a;
                            const asin = em.getAttribute('data-asin');
                            const title = (_a = em.querySelector('p[id^="title"] span.a-truncate-full')) === null || _a === void 0 ? void 0 : _a.innerText;
                            return {
                                name: 'promotion_items',
                                data: { asin, title }
                            };
                        }
                    }
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
    if (elementText == null) {
        console.log(element);
        console.log(elementText);
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
                elementName += elementText
                    .toLowerCase()
                    .replace(/[^\w]+/g, '_')
                    .replace(/^_+|_+$/g, '');
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
                var _a, _b;
                let matched = true;
                if (childRecipe.match_id_with_parent) {
                    const regex = /([a-f0-9-]+-\d+)$/;
                    const match1 = (_a = element.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.match(regex);
                    const match2 = (_b = childElement.getAttribute('id')) === null || _b === void 0 ? void 0 : _b.match(regex);
                    if (!match1 || !match2 || match1[1] !== match2[1]) {
                        matched = false;
                    }
                }
                if (matched) {
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
    // return element.closest('#reason-modal') !== null
    const selectors = ['#user-interaction-tracker-app', '.n-modal-container'];
    return selectors.some((selector) => element.closest(selector) !== null);
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
    path = path !== '/' ? path.replace(/\/+/g, '/').replace(/\/$/, '') : path;
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
            const match = recipe.match == '/'
                ? recipe.match
                : recipe.match.replace(/\*/g, '').replace(/\/+/g, '/').replace(/\/$/, '');
            const wildcard_match = '^' + recipe.match.replace(/\*/g, '[^/]*') + '$';
            const wildcard_match_with_ref = '^' + recipe.match.replace(/\*/g, '[^/]+') + '(/ref=.+)$';
            if (match === path) {
                console.log('matched with recipe ', recipe.match);
                return recipe;
            }
            else if (recipe.match_with_ref &&
                (path.startsWith(match + '/ref=') || path.startsWith(match + 'ref='))) {
                console.log('matched with recipe ', recipe.match);
                return recipe;
            }
            else if (recipe.match_with_wildcard) {
                const regExp = new RegExp(wildcard_match);
                const regExpWithRef = new RegExp(wildcard_match_with_ref);
                if (regExp.test(path)) {
                    console.log('matched with recipe ', recipe.match);
                    return recipe;
                }
                else if (recipe.match_with_ref && regExpWithRef.test(path)) {
                    console.log('matched with recipe ', recipe.match);
                    return recipe;
                }
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
            else if (((_a = data['data-semantic-id']) === null || _a === void 0 ? void 0 : _a.endsWith('add_to_cart')) ||
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
            else if (((_b = data['data-semantic-id']) === null || _b === void 0 ? void 0 : _b.startsWith('refinements.')) ||
                ((_c = data['data-semantic-id']) === null || _c === void 0 ? void 0 : _c.startsWith('filters.'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this filter. What are you hoping to find with this filter?';
                placeholder = 'I want to find ...';
            }
            else if ((_d = data['data-semantic-id']) === null || _d === void 0 ? void 0 : _d.startsWith('product_options.')) {
                question =
                    'You <span class="highlight-question">clicked</span> on this product option. What do you like about this product option?';
                // if (data['element-meta-name'] === 'product_options' && data['element-meta-data'] !== '') {
                //   question = `You <span class="highlight-question">clicked</span> on ${data['element-meta-data']['value']}. What do you like about this product option?`
                // }
                placeholder = 'I like this product option because...';
            }
            else if ((_e = data['data-semantic-id']) === null || _e === void 0 ? void 0 : _e.endsWith('check_out')) {
                question =
                    'You <span class="highlight-question">clicked</span> checkout button. What makes you choose to checkout?';
                placeholder = 'I choose to checkout because...';
            }
            else if (((_f = data['data-semantic-id']) === null || _f === void 0 ? void 0 : _f.startsWith('search_results.')) ||
                ((_g = data['data-semantic-id']) === null || _g === void 0 ? void 0 : _g.startsWith('product_list.')) ||
                (((_h = data['data-semantic-id']) === null || _h === void 0 ? void 0 : _h.startsWith('active_item_list.')) &&
                    ((_j = data['data-semantic-id']) === null || _j === void 0 ? void 0 : _j.endsWith('.product_detail'))) ||
                ((_k = data.target.className) === null || _k === void 0 ? void 0 : _k.includes('sc-product-link'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this product. What caught your attention compared to the other options you saw?';
                placeholder = 'I like this product because...';
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
/*!*******************************!*\
  !*** ./src/content_script.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _medv_finder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @medv/finder */ "./node_modules/@medv/finder/finder.js");
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
    function captureInteraction(eventType, target, timestamp, uuid, windowSize, scrollDistance, scrollCurrentTop, scrollCurrentLeft, scrollDistance_X, url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = {};
                if (eventType === 'input') {
                    const selector = (0,_medv_finder__WEBPACK_IMPORTED_MODULE_2__.finder)(target, {
                        maxNumberOfPathChecks: 0
                    });
                    data = {
                        uuid: uuid,
                        eventType,
                        timestamp: timestamp,
                        url: url,
                        htmlSnapshotId: '',
                        pageMeta: '',
                        htmlContent: '',
                        simplifiedHTML: ''
                    };
                    data['selector'] = selector;
                    data['input-values'] = (target === null || target === void 0 ? void 0 : target.value) || '';
                    data['input-id'] = (target === null || target === void 0 ? void 0 : target.id) || '';
                    data['data-element-meta-name'] = target.getAttribute('data-element-meta-name') || '';
                    data['data-element-meta-data'] = target.getAttribute('data-element-meta-data') || '';
                }
                else {
                    // Generate new HTML snapshot ID
                    const currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
                    const simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
                    // console.log('start time:', new Date().toISOString())
                    (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
                    // console.log('end time:', new Date().toISOString())
                    const pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
                    data = {
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
            scrollUuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
            scrollTimestamp = new Date().toISOString();
            yield handleFirstScroll(scrollUuid, scrollTimestamp);
        }
        // Clear the existing timeout and set a new one
        window.clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => handleScrollStop(scrollUuid, scrollTimestamp), _config__WEBPACK_IMPORTED_MODULE_1__.scroll_threshold); // Threshold of 300ms
    }));
    document.addEventListener('blur', (event) => __awaiter(void 0, void 0, void 0, function* () {
        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const target = event.target;
        if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target))
            return;
        if (target &&
            ((target.tagName === 'INPUT' && target.type === 'text') ||
                target.tagName === 'TEXTAREA')) {
            const timestamp = new Date().toISOString();
            yield captureInteraction('input', target, timestamp, uuid, {
                width: window.innerWidth,
                height: window.innerHeight
            }, 0, 0, 0, 0, window.location.href);
        }
    }), true);
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        var _a;
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
            // Use the Vue app to show the modal
            const event = new CustomEvent('show-modal', {
                detail: {
                    question: message.question,
                    placeholder: message.placeholder,
                    callback: (response) => {
                        sendResponse(response);
                    }
                }
            });
            document.dispatchEvent(event);
            return true; // Will respond asynchronously
        }
        if (message.action === 'showReminder') {
            console.log('showReminder');
            if (document.getElementById('reason-modal')) {
                sendResponse({ success: false, message: 'reminder:popup already exists' });
                return;
            }
            const data = message.data;
            // alert(
            //   `Thank you for participating!\nYou have contributed ${data.on_date} rationales this week\nYou have contributed ${data.all_time} rationales in total. `
            // )
            (_a = window.$dialog) === null || _a === void 0 ? void 0 : _a.info({
                title: 'Thank you for participating!',
                content: `You have contributed ${data.on_date} rationales this week.
          You have contributed ${data.all_time} rationales in total. `
            });
        }
    });
};
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then((result) => {
    console.log('content script, shouldExclude', result);
    if (!result) {
        work();
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixJQUFJO1lBQ0osWUFBTSxDQUFDLE9BQU8sMENBQUUsSUFBSSxDQUFDO2dCQUNuQixLQUFLLEVBQUUsOEJBQThCO2dCQUNyQyxPQUFPLEVBQUUsd0JBQXdCLElBQUksQ0FBQyxPQUFPO2lDQUN0QixJQUFJLENBQUMsUUFBUSx3QkFBd0I7YUFDN0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQyxDQUNGO0FBQ0gsQ0FBQztBQUVELDBEQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixFQUFFLE1BQU0sQ0FBQztJQUNwRCxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsSUFBSSxFQUFFO0tBQ1A7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlX25ldy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0BtZWR2L2ZpbmRlci9maW5kZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb250ZW50X3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfc2Nyb2xsX3Byb2JhYmlsaXR5ID0gMC4wNVxuZXhwb3J0IGNvbnN0IHBvcHVwX2NsaWNrX3Byb2JhYmlsaXR5ID0gMC4yXG5leHBvcnQgY29uc3QgcG9wdXBfbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF90YWJBY3RpdmF0ZV9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgIC8vIHRoZSBmb2xkZXIgbmFtZSB0byBzYXZlIHRoZSBkYXRhXG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZSAvLyB3aGV0aGVyIHRvIHppcCB0aGUgZGF0YSB3aGVuIGRvd25sb2FkaW5nXG5leHBvcnQgY29uc3QgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby9hcGkvdXBsb2FkJ1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL2FwaSdcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnaGFpbGFiJ1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlcyA9IFsnd3d3LmFtYXpvbi5jb20nXVxuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zX3JlY29yZF9zdGF0dXNgXG5leHBvcnQgY29uc3QgcmF0aW9uYWxlX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vcmF0aW9uYWxlX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBwdXJjaGFzZV9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L29yZGVyX3N0YXR1c2BcbmV4cG9ydCBjb25zdCBjaGVja191c2VyX2lkX3VybCA9IGAke2Jhc2VfdXJsfS9jaGVja191c2VyX2lkYFxuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2J1eS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvc2lnbmluJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvY3ZmLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL3Byb2ZpbGUvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXgvYWNjb3VudC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NoZWNrb3V0cG9ydGFsLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcmltZWNlbnRyYWwvZWRpdFBheW1lbnRQcmVmZXJlbmNlJ1xuXVxuZXhwb3J0IGNvbnN0IHNjcm9sbF90aHJlc2hvbGQgPSAzMDBcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gIHNlbGVjdG9yOiAnI25hdmJhci1tYWluJyxcbiAgbmFtZTogJ25hdl9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1sb2dvJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdIb21lcGFnZScsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IGVtPy52YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF90ZXJtJywgZGF0YTogeyB0ZXJtIH0gfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYnV0dG9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0IHNwYW4ubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdhY2NvdW50X2FuZF9saXN0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1vcmRlcnMnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnb3JkZXJfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWNhcnQnLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtY2FydCAubmF2LWxpbmUtMicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdjYXJ0X2J1dHRvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1mbHlvdXQtc2VhcmNoQWpheCcsXG4gICAgICBuYW1lOiAnc3VnZ2VzdGVkX3Rlcm1zJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5jYXJkc19jYXJvdXNlbF93aWRnZXQtc3VnLWNvbHVtbicsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuY2FyZHNfY2Fyb3VzZWxfdGV4dF9sZWZ0X3dpZGdldC1zdWctdGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc3VnZ2VzdGlvbi1jb250YWluZXInLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtaGFtYnVyZ2VyLW1lbnUnLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnTWVudSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi14c2hvcCcsXG4gICAgICBuYW1lOiAnc3RvcmVzJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgY2FydF9zaWRlX2JhciA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2LWZseW91dC1ld2MnLFxuICBuYW1lOiAnY2FydF9zaWRlX2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLW11bHRpLWNhcnQtZHJvcGRvd24nLFxuICAgICAgbmFtZTogJ2NhcnRfc2VsZWN0b3InLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1jYXJ0LWhlYWRlcicsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpPy5hbHQgfHwgJydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1jb21wYWN0LXZpZXctY2FydC1oZWFkZXIgZGl2LmV3Yy1jYXJ0LWhlYWRlci1sb2dvJyxcbiAgICAgIG5hbWU6ICdvcGVuX2NhcnRfc2VsZWN0b3InLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ09wZW4gQ2FydCBTZWxlY3RvcidcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1jb21wYWN0LWFjdGlvbnMgYScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjZXdjLWNvbXBhY3QtYm9keSB1bCcsXG4gICAgICBuYW1lOiAncHJvZHVjdF9saXN0JyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJsaSBkaXZbaWRePSdzYy1pdGVtJ11cIixcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnZGl2LmV3Yy1pdGVtLWltYWdlIGEuc2MtcHJvZHVjdC1saW5rIGltZzpub3QoLmV3Yy1zZmwtaW1hZ2Utc21hbGwpJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlRW0/LmFsdCB8fCAnJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWl0ZW0taW1hZ2UgYS5zYy1wcm9kdWN0LWxpbmsgaW1nOm5vdCguZXdjLXNmbC1pbWFnZS1zbWFsbCknLFxuICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5ld2MtdW5pdC1wcmljZScsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICdkaXZbZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXSwgc3BhbltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1jb250YWluZXItXCJdJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJxcy13aWRnZXQtZHJvcGRvd24tY29udGFpbmVyLVwiXScsXG4gICAgICAgICAgICAgICAgICBtYXRjaF9pZF93aXRoX3BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtZGVsZXRlLWljb24tY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltkYXRhLWEtc2VsZWN0b3I9XCJkZWNyZW1lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2RhdGEtYS1zZWxlY3Rvcj1cImluY3JlbWVudFwiXScsXG4gICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmV3Yy11bml0LXByaWNlJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uYWx0XG4gICAgICAgICAgICBjb25zdCB1cmxFbSA9IHRpdGxlRW0/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXZbZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXSwgc3BhbltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdjYXJ0X2l0ZW1zJyxcbiAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAndWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSknLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG4gICAgICAgID8udHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bIF0vZywgJ18nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9eXyt8XyskL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvW19cXGRdKyQvLCAnJylcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IGxpID4gc3BhbiA+IGRpdltkYXRhLWEtZXhwYW5kZXItbmFtZT0nZmlsdGVyLWNvbnRlbnQtZXhwYW5kZXInXVwiLFxuICAgIG5hbWU6ICdtb3JlX29wdGlvbnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImFbZGF0YS1jc2EtYy1mdW5jLWRlcHM9J2F1aS1kYS1hLWV4cGFuZGVyLXRvZ2dsZSddXCIsXG4gICAgICAgIG5hbWU6ICd0b2dnbGVfZXhwYW5zaW9uJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJ3VsJylcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgID8udHJpbSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvWyBdL2csICdfJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvXl8rfF8rJC9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bX1xcZF0rJC8sICcnKVxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2ZhY3RzID0ge1xuICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICdkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG59XG5cbmV4cG9ydCBjb25zdCBxdWFudGl0eV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjc2VsZWN0UXVhbnRpdHksIGRpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdJyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X3F1YW50aXR5JywgZGF0YTogeyBxdWFudGl0eTogZW0uaW5uZXJUZXh0IH0gfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdidXR0b24nLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNyZXBsZW5pc2htZW50RnJlcXVlbmN5X2ZlYXR1cmVfZGl2JyxcbiAgbmFtZTogJ2RlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcicsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1taWNybyA+IHNwYW4nLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBzZXRfdXBfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6ICcjcmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ3NldF91cF9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3Qtc2V0LXVwLW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGFkZF90b19jYXJ0X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6XG4gICAgXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddLCAjZnJlc2hBZGRUb0NhcnRCdXR0b24gaW5wdXQsICNkZWFsc3hfYXRjX2J0blwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICBjbGFzczogJ3Byb2R1Y3QtYWRkLXRvLWNhcnQnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6IFwiaW5wdXRbbmFtZT0nc3VibWl0LmJ1eS1ub3cnXVwiLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnYnV5X25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1idXktbm93J1xufVxuXG5leHBvcnQgY29uc3QgZ29fdG9fY2FydF9idXR0b25fZm9yX2ZsYXNoX3NhbGVzID0ge1xuICBzZWxlY3RvcjogJyNkZWFsc3hfaW5jYXJ0IHNwYW4uYS1idXR0b24nLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnZnJvbV90ZXh0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRoX2FjY29yZGlvbiA9IHtcbiAgc2VsZWN0b3I6ICcjYnV5Qm94QWNjb3JkaW9uID4gZGl2LmEtYm94LmNlbHdpZGdldCcsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmFjY29yZGlvbi1jYXB0aW9uID4gc3BhbicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgIFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9kZXNrdG9wX2FjY29yZGlvbl9oZWFkZXInXSwgZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nb2ZmZXJfZGlzcGxheV9tb2JpbGVfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLWFjY29yZGlvbi1pbm5lci5hY2NvcmRpb24tcm93LWNvbnRlbnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGRlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcixcbiAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgZ29fdG9fY2FydF9idXR0b25fZm9yX2ZsYXNoX3NhbGVzLFxuICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gIHNlbGVjdG9yOiAnI2dzb2Rfc2luZ2xlT2ZmZXJEaXNwbGF5X2dyb3VwXzJfRGVza3RvcCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcGlja1VwT2ZmZXJEaXNwbGF5JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJvdXNlbF9jYXJkID0ge1xuICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZDpub3QoLmEtY2Fyb3VzZWwtY2FyZC1lbXB0eSksICNncmlkSXRlbVJvb3QnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYSBkaXZbY2xhc3MqPVwic2MtdHJ1bmNhdGUtZGVza3RvcFwiXSwgYSBzcGFuLnRpdGxlLCBhIGRpdltjbGFzcyo9XCJzYy1jc3MtbGluZS1jbGFtcFwiXSwgYSBzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0sIGRpdltkYXRhLWN5PVwidGl0bGUtcmVjaXBlXCJdLCBhW2lkKj1cInRpdGxlXCJdLCBhLnN3LXByb2R1Y3QtdGl0bGUnXG4gICAgKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8udGl0bGUgfHwgdGl0bGVFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgY29uc3QgaW1nRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2ltZ1tjbGFzcyo9XCJwcm9kdWN0LWltYWdlXCJdLCBpbWcuYS1keW5hbWljLWltYWdlLCBpbWdbY2xhc3MqPVwiY2Fyb3VzZWwtaW1hZ2VcIl0gaW1nLnMtaW1hZ2UnXG4gICAgKVxuICAgIGNvbnN0IGltZ0FsdCA9IGltZ0VtPy5hbHRcbiAgICByZXR1cm4gdGl0bGUgfHwgaW1nQWx0IHx8ICcnXG4gIH0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdhOmhhcyhpbWdbY2xhc3MqPVwicHJvZHVjdC1pbWFnZVwiXSwgaW1nLmEtZHluYW1pYy1pbWFnZSwgaW1nW2NsYXNzKj1cImNhcm91c2VsLWltYWdlXCJdKSwgaW1nLnMtaW1hZ2UsIGFbdGFyZ2V0PVwiX3RvcFwiXTpoYXMoaW1nKTpub3QoOmhhcyhkaXYsIHNwYW4pKSwgYS5zdy1wcm9kdWN0LWltYWdlLWxpbmsnLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjpcbiAgICAgICAgJ2EgZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0sIGEgZGl2Omhhcyg+IHNwYW4udGl0bGUpLCBhIGRpdltjbGFzcyo9XCJzYy1jc3MtbGluZS1jbGFtcFwiXSwgYTpoYXMoc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdKSwgZGl2W2RhdGEtY3k9XCJ0aXRsZS1yZWNpcGVcIl0sIGFbaWQqPVwidGl0bGVcIl0sIGEuc3ctcHJvZHVjdC10aXRsZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic2luZ2xlU3dhdGNoZXNDb250YWluZXJcIl0nLFxuICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJfbGlua19cIl0nLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ2YXJpYXRpb25MaW5rXCJdIGEnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpW2NsYXNzKj1cInN0YXJcIl0pLCBhOmhhcyhpW2RhdGEtY3k9XCJyZXZpZXdzLXJhdGluZ3Mtc2xvdFwiXSksIGEuYWRSZXZpZXdMaW5rJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZycsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZW0udGl0bGUgfHwgZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nX2NvdW50JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdhW2FyaWEtZGVzY3JpYmVkYnkqPVwic3BfZGV0YWlsX3RoZW1hdGljLWRlYWxzXCJdOm5vdCg6aGFzKHNwYW4uYS1wcmljZSkpLCBhW2FyaWEtZGVzY3JpYmVkYnkqPVwic3BfZGV0YWlsX3RoZW1hdGljLXJlY2VudF9oaXN0b3J5XCJdOm5vdCg6aGFzKHNwYW4uYS1wcmljZSkpJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNjLXByaWNlXCJdJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic2MtcHJpY2VcIl0nLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjpcbiAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYW9rLXJlbGF0aXZlOmhhcyhzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbiksIGRpdi5hLWNvbG9yLXByaWNlOmhhcyhzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbiksIGFbYXJpYS1kZXNjcmliZWRieT1cInByaWNlLWxpbmtcIl06aGFzKHNwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuKScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICBuYW1lOiAncHJvZHVjdF9wcmljZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYS5wQm9va3Mtc2YtcG9pbnRzLWNvbXBvbmVudCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3BvaW50cydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIHNwYW5bY2xhc3MqPVwiYWN0aW9uQnV0dG9uXCJdOmhhcyhpLmEtaWNvbi1jYXJ0KScsXG4gICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBUbyBDYXJ0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdLCBkaXZbaWRePVwiYXRjU3RlcHBlclNlY3Rpb25cIl0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXSwgYnV0dG9uW2RhdGEtYWN0aW9uPSdyZW1vdmUnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ10sIHNwYW4uYXRjU3RlcHBlclF1YW50aXR5XCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXSwgYnV0dG9uW2RhdGEtYWN0aW9uPSdhZGQnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtYnV0dG9uIGEsIGRpdltkYXRhLWNvbXBvbmVudC1pZD1cInNlZUFsbEJ1eWluZ09wdGlvbnNCdXR0b25cIl0gc3Bhbi5hLWJ1dHRvbicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgfVxuICBdLFxuICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgY29uc3QgYXNpbkpTT05TdHJpbmcgPSBlbVxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFkZmVlZGJhY2tkZXRhaWxzXScpXG4gICAgICA/LmdldEF0dHJpYnV0ZSgnZGF0YS1hZGZlZWRiYWNrZGV0YWlscycpXG4gICAgbGV0IGFzaW5KU09OXG4gICAgaWYgKGFzaW5KU09OU3RyaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzaW5KU09OID0gSlNPTi5wYXJzZShhc2luSlNPTlN0cmluZylcbiAgICB9XG4gICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdkaXZbaWQqPVwic2MtdHVyYm8tY29udGFpbmVyXCJdLCBkaXZbZGF0YS1hc2luXSwgaW5wdXRbZGF0YS1hc2luXSdcbiAgICApXG4gICAgY29uc3QgYXNpbiA9XG4gICAgICBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJykgfHxcbiAgICAgIGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdpZCcpPy5zcGxpdCgnLScpLnBvcCgpIHx8XG4gICAgICBhc2luSlNPTj8uYXNpbklkIHx8XG4gICAgICAnJ1xuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhIHNwYW5bY2xhc3MqPVwic2MtcHJpY2VcIl0sIHNwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYSBkaXZbY2xhc3MqPVwic2MtdHJ1bmNhdGUtZGVza3RvcFwiXSwgYSBzcGFuLnRpdGxlLCBhIGRpdltjbGFzcyo9XCJzYy1jc3MtbGluZS1jbGFtcFwiXSwgYSBzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0sIGRpdltkYXRhLWN5PVwidGl0bGUtcmVjaXBlXCJdLCBhW2lkKj1cInRpdGxlXCJdLCBhLnN3LXByb2R1Y3QtdGl0bGUnXG4gICAgKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8udGl0bGUgfHwgdGl0bGVFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgY29uc3QgaW1nRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2ltZ1tjbGFzcyo9XCJwcm9kdWN0LWltYWdlXCJdLCBpbWcuYS1keW5hbWljLWltYWdlLCBpbWdbY2xhc3MqPVwiY2Fyb3VzZWwtaW1hZ2VcIl0gaW1nLnMtaW1hZ2UnXG4gICAgKVxuICAgIGNvbnN0IGltZ0FsdCA9IGltZ0VtPy5hbHRcbiAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnYTpoYXMoZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0pLCBhOmhhcyhzcGFuLnRpdGxlKSwgYTpoYXMoc3BhbltjbGFzcyo9XCJ0aXRsZVwiXSknXG4gICAgKVxuICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2RpdltuYW1lPVwiYXgtcXNcIl0gZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdLCBkaXZbaWRePVwiYXRjU3RlcHBlclNlY3Rpb25cIl0gc3Bhbi5hdGNTdGVwcGVyUXVhbnRpdHknXG4gICAgKVxuICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdwcm9tb3Rpb25faXRlbXMnLFxuICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGUgfHwgaW1nQWx0IHx8ICcnLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1jb2xsYXBzZWQtY2FydHMtY29udGFpbmVyJyxcbiAgICBuYW1lOiAnY2FydHMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWNvbGxhcHNlZC1jYXJ0LWNvbnRhaW5lcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWNhcnQtaGVhZGVyJylcbiAgICAgICAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgICAgICB0aXRsZUVtPy5xdWVyeVNlbGVjdG9yKCdoMlthcmlhLWxhYmVsXScpPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuICAgICAgICAgICAgdGl0bGVFbT8uaW5uZXJUZXh0IHx8XG4gICAgICAgICAgICAnY2FydCdcbiAgICAgICAgICByZXR1cm4gdGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1jYXJ0LWhlYWRlcjpoYXMoYSBoMiBpbWcpJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBlbS5xdWVyeVNlbGVjdG9yKCdhIGgyIGltZycpPy5hbHQgfHwgJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtbmFtZT1cImNvbGxhcHNlZF9pdGVtX2xpc3RcIl0nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2l0ZW1fbGlzdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGlucHV0W25hbWVePVwicHJvY2VlZFRvQUxNQ2hlY2tvdXRcIl0nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBsYWJlbCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pbWFnZS13cmFwcGVyIGEnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5zYy1kZWxpdmVyeS1tZXNzYWdpbmcnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByb2R1Y3QtcHJpY2Ugc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5zYy1wcm9kdWN0LXZhcmlhdGlvbicsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnNucy1vcHQtaW4tbGluay1kZXNrdG9wJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zbnMtcmVjdXJyZW5jZS1wZXJpb2Qtc2VsZWN0b3InLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVsaXZlcnkgZXZlcnk6IHt9J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXSwgYnV0dG9uW2RhdGEtYWN0aW9uPSdhLXN0ZXBwZXItZGVjcmVtZW50J11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRFbT8uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGxcbiAgICAgICAgICBjb25zdCBvcHRpb25zRW0gPSBlbS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5zYy1wcm9kdWN0LXZhcmlhdGlvbiA+IHNwYW4nKVxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uRW0gb2Ygb3B0aW9uc0VtKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXlFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdGV4dC1ib2xkJylcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlRW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbjpub3QoLmEtdGV4dC1ib2xkKScpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXkgPSBvcHRpb25LZXlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1s6XFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlRW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0geyBbb3B0aW9uS2V5XTogb3B0aW9uVmFsdWUgfVxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSwgcXVhbnRpdHksIHNlbGVjdGVkLCBvcHRpb25zIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gaW5wdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYS1tb2RhbC1zY3JvbGxlciBkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgIHVzZV9yb290OiB0cnVlLFxuICAgIG5hbWU6ICdzdWJzY3JpYmVfbl9zYXZlX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uLmEtYnV0dG9uLWNsb3NlJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZScsXG4gICAgICAgIGFkZF9UZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWZvb3RlciBzcGFuLmEtYnV0dG9uLWlubmVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtYnV0dG9uLXRleHQnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc25zLWFjY29yZGlvbicsXG4gICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgbmFtZTogJ3N1YnNjcmliZV9uX3NhdmVfZnJlcXVlbmN5X3NlbGVjdG9yX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYm94JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX2Nhcm91c2VsX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkLCBkaXZbaWRePVwiZ3JpZEVsZW1lbnRcIl0nLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2E6aGFzKGRpdi5hLWltYWdlLWNvbnRhaW5lciknLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJzcGFuW2lkXj0ncXMtd2lkZ2V0LWF0Yy1idXR0b24nXVwiLFxuICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgVG8gQ2FydCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0nLFxuICAgICAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsXj0nUmVtb3ZlJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlY3JlYXNlIHF1YW50aXR5IGJ5IDEnLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2lkXj0ncXMtd2lkZ2V0LWJ1dHRvbi1hdGZjJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbF49J0FkZCddXCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9mb3JtYXQ6ICdJbmNyZWFzZSBxdWFudGl0eSBieSAxJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhID4gc3BhbiA+IHNwYW4uYS10cnVuY2F0ZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCcsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdiA+IHNwYW4gPiBzcGFuID4gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInByaWNlVG9QYXlcIl0gc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQgYS5hLXNpemUtbWluaScsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfVxuICBdLFxuICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtY3NhLWMtaXRlbS1pZF49XCJhbXpuMS5hc2luXCJdJylcbiAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NhLWMtaXRlbS1pZCcpPy5zcGxpdCgnOicpWzBdLnNwbGl0KCcuJykucG9wKClcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cInByaWNlVG9QYXlcIl0gc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKScpXG4gICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0gYnV0dG9uW2lkXj1cInFzLXdpZGdldC1idXR0b24tYXRmY1wiXSdcbiAgICApXG4gICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmVzaF9zdWJzdGl0dXRpb25fY2FyZCA9IHtcbiAgc2VsZWN0b3I6ICdkaXYuc3Vicy1jYXJ0LWl0ZW0nLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNwYWNpbmctdG9wLWJhc2Ugc3Bhbi5hLXNpemUtYmFzZScsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zcGFjaW5nLXRvcC1iYXNlIHNwYW4uYS1zaXplLWJhc2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc3BhY2luZy10b3AtbWluaSBzcGFuLmEtY29sb3ItcHJpY2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9XG4gIF0sXG4gIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1jYXJ0LWl0ZW0tYXNpbl0nKVxuICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1jYXJ0LWl0ZW0tYXNpbicpXG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5hLXNwYWNpbmctdG9wLWJhc2Ugc3Bhbi5hLXNpemUtYmFzZScpXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LmEtc3BhY2luZy10b3AtbWluaSBzcGFuLmEtY29sb3ItcHJpY2UnKVxuICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtcycsIGRhdGE6IHsgYXNpbiwgdGl0bGUsIHByaWNlIH0gfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmcmVzaF9jYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLXByb2R1Y3QtaW1hZ2UtZGVza3RvcCBhIGltZycsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWFjdGlvbi1saW5rcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbF49J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWFudGl0eV9kcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtcXVhbnRpdHktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1xdWFudGl0eS1jaGFuZ2VsaW5rLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXN1bW1hcnktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1hdGMtYXRmY1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbF49J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJylcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScpXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWFjdGlvbi1saW5rcyBkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZyZXNoX2Nhcm91c2VsX2NhcmRcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY2FydC1hYm92ZS1hY3Rpb25zIHNwYW4uYS1idXR0b24sICNzYy1jYXJ0LWFib3ZlLWFjdGlvbnMgYScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGx1eHVyeV9jYXJvdXNlbF9jYXJkID0ge1xuICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCwgZGl2W2lkXj1cImdyaWRFbGVtZW50XCJdJyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI2JvbmRXYWxsZWRDYXJvdXNlbEVsZW1lbnREZXNjcmlwdGlvbidcbiAgICB9XG4gIF0sXG4gIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKT8uc3BsaXQoJy8nKS5hdCgtMilcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignYSAjYm9uZFdhbGxlZENhcm91c2VsRWxlbWVudERlc2NyaXB0aW9uJylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignYScpXG4gICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdwcm9tb3Rpb25faXRlbXMnLFxuICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsdXh1cnlfY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICBuYW1lOiAnYWN0aXZlX2l0ZW1fbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtLWNvbnRlbnQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1wcm9kdWN0LWltYWdlLWRlc2t0b3AgYSBpbWcnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYWN0aW9uLWxpbmtzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2MtcXVhbnRpdHktc3RlcHBlcicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdidXR0b25bZGF0YS1hY3Rpb249XCJhLXN0ZXBwZXItZGVjcmVtZW50XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdxdWFudGl0eV9kcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltkYXRhLWFjdGlvbj1cImEtc3RlcHBlci1pbmNyZW1lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScpXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJylcbiAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXScpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggaW5wdXRbbmFtZV49XCJwcm9jZWVkVG9MdXh1cnlDaGVja291dFwiXScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGJ1eV9hZ2FpbiA9IFtcbiAgbmF2LFxuICBjYXJ0X3NpZGVfYmFyLFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uOmhhcyhkaXYuZmlsdGVyLWNvbnRhaW5lciknLFxuICAgIG5hbWU6ICdmaWx0ZXJzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5maWx0ZXItY29udGFpbmVyJyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4jZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbS5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW1cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2LmZpbHRlci1jb250YWluZXInKVxuICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignI2ZpbHRlci1jb250YWluZXItaGVhZGVyJylcbiAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bIF0vZywgJ18nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcnMuJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGl0bGU/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmFsbS1ncmlkLWRlc2t0b3AtZ3JpZC1jb250YWluZXInLFxuICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImdyaWRDZWxsXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZ3JpZEVsZW1lbnQnXVwiLFxuICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlZF9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2luZm8nXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3Blbl9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnT3BlbiBQcm9kdWN0IENhcmQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm0gc3Bhbi5hLWJ1dHRvbi1pbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltpZF49J2V4cGFuZGVkSW1hZ2UnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZV9wcm9kdWN0X2NhcmQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gZGl2W2lkXj0naW5mbyddXCIpXG4gICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2RpdltpZF49XCJjbG9zZWRDYXJkXCJdIGRpdltpZF49XCJpbmZvXCJdIHNwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpdltpZF49J2Nsb3NlZENhcmQnXSBhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdhY3RpdmVfaXRlbXNfY2xvc2VkJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIGRlbGl2ZXJ5IH0gfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWF0dXJlZFwiXScsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gZGl2W2lkXj1cImRldGFpbENvbnRlbnRcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2RldGFpbGVkX2NvbnRlbnQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Omhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ11cIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxSZXZpZXdzUm93XCJdIGEnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaS5hLWljb24tc3Rhci1taW5pJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmcnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbY2xhc3MqPSdtdWx0aU9mZmVyUGlsbENvbnRhaW5lciddIGFcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdORVcnXSwgZGl2W2NsYXNzKj0nYXNpbkRldGFpbEluZm9Db2x1bW5zJ106aGFzKGlucHV0W25hbWU9J3N1Ym1pdC5hZGRUb0NhcnQnXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvbmVfdGltZV9wdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJhY3Rpb25CdXR0b25zUm93XCJdLCBkaXZbY2xhc3MqPVwiYXNpbkRldGFpbEFjdGlvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbaWRePVwiYnV5LW5vd1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXlfbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5jbG9zZXN0KCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbbmFtZT1cImF4LXFzXCJdIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dCB8fCAnMSdcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXNfb3BlbmVkX3B1cmNoYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnksIHF1YW50aXR5IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1idXlpbmdvcHRpb250eXBlPSdTTlMnXSwgZGl2W2NsYXNzKj0nc25zVXBzZWxsQmxvY2tDb250YWluZXInXVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmUnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJhY3Rpb25CdXR0b25zUm93XCJdLCBkaXZbY2xhc3MqPVwiYXNpbkRldGFpbFB1cmNoYXNlQ29sdW1uXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic25zQnV0dG9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3N1YnNjcmliZV9hbmRfc2F2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzdWJzY3JpcHRpb25CdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NldF91cF9zdWJzY3JpcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLmNsb3Nlc3QoJ2RpdltkYXRhLWFzaW5dJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtc19vcGVuZWRfc25zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZGV0YWlsLXZpZXctc2ltaWxhci1pdGVtcyddXCIsXG4gICAgICAgICAgICBuYW1lOiAnc2ltaWxhcl9pdGVtcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWltYWdlLWNvbnRhaW5lcjpoYXMoPiBpbWcpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInJldmlld3NSb3dcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdpLmEtaWNvbi1zdGFyLW1pbmknLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXSwgaW5wdXRbbmFtZV49XCJhdGZjU2hpbVwiXSwgYnV0dG9uW2FyaWEtbGFiZWw9XCJBZGQgdG8gQ2FydC4gQ2xpY2sgdG8gY2hhbmdlIHF1YW50aXR5XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nUmVtb3ZlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXN1bW1hcnktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1hdGMtYXRmY1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGVFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXZbaWRePVwiZmVhdHVyZWRcIl0nKVxuICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBhW2lkXj1cInRpdGxlXCJdIHNwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUaXRsZSA9IHBhcmVudFRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICA/LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cImRlbGlnaHRGYWNlb3V0XCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcGFyZW50VGl0bGUgKyAnLnNpbWlsYXJfaXRlbXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc25zVXBzZWxsTW9kYWwnLFxuICAgIG5hbWU6ICdzdWJzY3JpYmVfYW5kX3NhdmVfcG9wb3ZlcicsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwibW9kYWxIZWFkZXJcIl0nLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJtb2RhbEhlYWRlclRleHRcIl0nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltkYXRhLWFjdGlvbj1cImEtcG9wb3Zlci1jbG9zZVwiXScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cIm1vZGFsQ29udGVudFwiXScsXG4gICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdjpub3QoW2NsYXNzKj1cImJ1dHRvbkNvbnRhaW5lclwiXSk6bm90KDpoYXMoc2VsZWN0KSknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgLy8gICBuYW1lOiAnb3Blbl9kcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgLy8gICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgLy8gICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAvLyAgIHRleHRfZm9ybWF0OiBcIkRlbGl2ZXJ5IGV2ZXJ5OiB7fVwiLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYnV0dG9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJjYW5jZWxCdXR0b25Db250YWluZXJcIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJzdWJzY3JpcHRpb25CdXR0b25Db250YWluZXJcIl0gaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFN1YnNjcmlwdGlvbiB0byBDYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cIm1vZGFsQ29udGVudFwiXScpXG4gICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5pZD8uc3BsaXQoJy0nKVsxXT8udHJpbSgpXG4gICAgICByZXR1cm4geyBuYW1lOiAncG9wb3Zlcl9pdGVtJywgZGF0YTogeyBhc2luIH0gfVxuICAgIH1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcG9wdWxhcl9wcm9kdWN0cyA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgbmF2LFxuICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcjemdfaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ6Zy1iYW5uZXItbGFuZGluZy1wYWdlLWhlYWRlclwiXScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJnLW5hdi10cmVlLWFsbF9zdHlsZV96Zy1icm93c2Utcm9vdFwiXScsXG4gICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiemctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLXJvb3QtYnJvd3NlLWl0ZW1cIl0gPiBhLCBkaXZbY2xhc3MqPVwiemctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLWJyb3dzZS1pdGVtXCJdID4gYScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJ6Zy1uYXYtdHJlZS1hbGxfc3R5bGVfemctcm9vdC1icm93c2UtaXRlbVwiXSA+IHNwYW4sIGRpdltjbGFzcyo9XCJ6Zy1uYXYtdHJlZS1hbGxfc3R5bGVfemctYnJvd3NlLWl0ZW1cIl0gPiBzcGFuJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWNhcm91c2VsLWhlYWRlci1yb3cgYScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZ3ctY29sJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICdoMSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDIgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgzIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMTpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpLCBoMjpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpLCBoMzpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2gxIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMiBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDMgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgxOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSksIGgyOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSksIGgzOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpPy5hbHQgfHxcbiAgICAgICAgICAgICAgICAgICAgZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXRydW5jYXRlLWZ1bGwnKT8uaW5uZXJUZXh0IHx8XG4gICAgICAgICAgICAgICAgICAgIGVtLmlubmVyVGV4dCB8fFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jYXJkLW1ldHJpY3MtaWQqPVwicmhmXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY2FyZC1tZXRyaWNzLWlkKj1cInJ2aVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0ucXVlcnlTZWxlY3RvcignaW1nJyk/LmFsdCB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9mbWMvc3RvcmVmcm9udCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXYsIGNhcnRfc2lkZV9iYXJdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtdG9vbGJhcicsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHNfdG9vbGJhcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3BhbltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJuYXYtcmliXCJdLCBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwibmF2LXJpYlwiXSwgYS5zZi1jbGVhci1hbGwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NhLWMtY29udGVudC1pZCcpID09ICdzLWFsbC1maWx0ZXJzJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1Nob3cgQWxsIEZpbHRlcnMnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLWRyb3Bkb3duLW1haW4tY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3RzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtZHJvcGRvd24tcG9wdXAtdGl0bGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJpYi12MS1kcm9wZG93bi1wb3B1cC10aXRsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgc3Bhbltyb2xlPVwibGlzdGl0ZW1cIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLXJhbmdlLXNsaWRlci1sYWJlbC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc2xpZGVyLWNvbnRhaW5lciBkaXYucy1sb3dlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc2xpZGVyLWNvbnRhaW5lciBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LnNmLXJpYi12MS1kcm9wZG93bi1idXR0b25zIGJ1dHRvbiwgZGl2LnNmLXJpYi12MS1kcm9wZG93bi1idXR0b25zIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0b3BSZWZpbmVtZW50c1xcXFwvMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvcF9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1JlY2VudGx5IHVzZWQgZmlsdGVycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJyk/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpPy50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDI6IHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xccysvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Omhhcyg+IHNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoZ3JpZC1jYXJvdXNlbFwiXSknLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNnLXJvdyBoMicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2ctcm93IGgyJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHMnLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5BZEhvbGRlcicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FkcycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1hc2luXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXR5cGU9J3Byb2R1Y3RUaXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FkcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtcHJvZHVjdC1pbWFnZS1jb250YWluZXIsIGRpdi5zLWltYWdlLW92ZXJsYXktYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdmFpbGFibGVfY29sb3JzJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1wYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLXR5cGU9J2xpbmsnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LnMtdmFyaWF0aW9ucy1vcHRpb25zLWVsZXZhdGVkLCBkaXYucy12YXJpYXRpb25zLW9wdGlvbnMtanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaVtkYXRhLWN5PVwicmV2aWV3cy1yYXRpbmdzLXNsb3RcIl0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nX2NvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWw6aGFzKD4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnYSA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J2FkZC10by1jYXJ0J10gc3Bhbi5hLWJ1dHRvbjpoYXMoYnV0dG9uKSwgc3BhbltpZCo9J2FkZC10by1jYXJ0J10gaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci5hLXBvcG92ZXItaGVhZGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT0ncy1wcm9kdWN0LWltYWdlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3NwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgyKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYXNpbl0nKT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDIpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCBzcGFuW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSkgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IHRpdGxlRW1cbiAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXScpXG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNFbSA9IGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgxKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMsIGRpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uRW0gb2Ygb3B0aW9uc0VtKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5RW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLCBzcGFuLmEtZHJvcGRvd24tcHJvbXB0J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25LZXkgPSBvcHRpb25LZXlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1s6XFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7IFtvcHRpb25LZXldOiBvcHRpb25WYWx1ZSB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyX2l0ZW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIG9wdGlvbnMgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlLCAjdGl0bGVCbG9jaycsXG4gICAgbWF0Y2hfdGV4dDogJycsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmRCeUxpbmVfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9icmFuZCcsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYnJhbmQ6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmRCeUxpbmVfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogZW0/LmlubmVyVGV4dCB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXZlcmFnZUN1c3RvbWVyUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdjpoYXMoI3Nucy1iYXNlLXByaWNlKSAjc25zLWJhc2UtcHJpY2Ugc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2Rpdjpub3QoOmhhcygjc25zLWJhc2UtcHJpY2UpKSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9XCJhcGV4X3dpdGhfcmlvX2N4XCJdICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgcHJpY2U6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5ib25kQXBleFByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpOmhhcyhzcGFuLmEtYnV0dG9uOm5vdCguYW9rLWhpZGRlbikgaW5wdXQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi10ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bC5hLXVub3JkZXJlZC1saXN0LCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwuYS11bm9yZGVyZWQtbGlzdCwgI2JvbmQtZmVhdHVyZS1idWxsZXRzLWRlc2t0b3AgdWwuYS11bm9yZGVyZWQtbGlzdCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Fib3V0X3RoaXNfaXRlbScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBYm91dCB0aGlzIGl0ZW06ICcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldF9saXN0OiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKTpub3QoOmhhcygjbHV4dXJ5X2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMiBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cF90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKTpub3QoOmhhcygjbHV4dXJ5X2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKCNsdXh1cnlfYnV5Ym94X2Rlc2t0b3ApJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmRBcGV4UHJpY2VfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZWxpdmVyeUJsb2NrTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLWNvbnRhaW5lciBzZWxlY3QnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmQtYXRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgVG8gQ2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI291dE9mU3RvY2snLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnRseSBVbmF2YWlsYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmNhcmRSb290LmJ1Y2tldCcsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMiNzaW1pbGFyaXRpZXMtcHJvZHVjdC1idW5kbGUtd2lkZ2V0LXRpdGxlLCBoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIjc2ltaWxhcml0aWVzLXByb2R1Y3QtYnVuZGxlLXdpZGdldC10aXRsZSwgaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwibmV3LWRldGFpbC1mYWNlb3V0LWJveFwiXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2RpdltpZF49XCJQcm9kdWN0VGl0bGVcIl0sIGRpdltjbGFzcyo9XCJ0aXRsZS1jb21wb25lbnRcIl0nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbaWRePVwiZmJ0Q2hlY2tcIl0sIGRpdltjbGFzcyo9XCJ0aGVtYXRpY0J1bmRsZS1jaGVja2JveFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2FbY2xhc3MqPVwiZGVza3RvcC1zaW1zLWZidF9mYnQtZGVza3RvcF9pbWFnZS1saW5rXCJdLCBkaXZbY2xhc3MqPVwiaW1hZ2UtYmFja2dyb3VuZFwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiUHJvZHVjdFRpdGxlXCJdOmhhcyhhKSwgYTpoYXMoZGl2W2NsYXNzKj1cInRpdGxlLWNvbXBvbmVudFwiXSknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiUHJvZHVjdFRpdGxlXCJdOm5vdCg6aGFzKGEpKSBkaXYgPiBkaXZbY2xhc3MqPVwidGl0bGUtY29tcG9uZW50XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInJldmlld3Mtc2VjdGlvblwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdSZXZpZXdlZCBieSB7fScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZ19jb3VudCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiZGVza3RvcC1zaW1zLWZidF9wcmljZV9wMTNuXCJdIHNwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYWRkLXRvLWNhcnQtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYjZHA6bm90KC5ncm9jZXJ5KTpub3QoLmx1eHVyeSkgI3NpbWlsYXJpdGllc19mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ncm9jZXJ5ICNzaW1pbGFyaXRpZXNfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDFbY2xhc3MqPVwiY2Fyb3VzZWwtaGVhZGluZ1wiXScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDFbY2xhc3MqPVwiY2Fyb3VzZWwtaGVhZGluZ1wiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnJlc2hfY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYubHV4dXJ5ICNzaW1pbGFyaXRpZXNfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDFbY2xhc3MqPVwiY2Fyb3VzZWwtaGVhZGluZ1wiXScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDFbY2xhc3MqPVwiY2Fyb3VzZWwtaGVhZGluZ1wiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbHV4dXJ5X2Nhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Byb2R1Y3QtY29tcGFyaXNvbl9mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9jb21wYXJpc29uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0cjpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0ZFtjbGFzcyo9XCJhc2luXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYSA+IGRpdltpZF49XCJpbWFnZUNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2ID4gZGl2W2lkXj1cImltYWdlQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhID4gZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdiA+IGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKGlucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0ZFtjbGFzcyo9XCJhc2luXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbS5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbHMpID0+IGAuJHtjbHN9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0cjpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbS5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbHMpID0+IGAuJHtjbHN9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAndHI6aGFzKGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXSknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2lucycpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoL1tcXFtcXF1cIl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCd0cjpoYXMoc3Bhbi5hLXByaWNlKScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0cjpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2E6aGFzKGRpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXSknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmhyZWYgfHwgd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnY29tcGFyaXNvbl9pdGVtcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhzcGFuLmEtcHJpY2UpJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbCgndHInKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhkaXZbY2xhc3MqPVwiZGVsaXZlcnlcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbCgndHInKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImRlbGl2ZXJ5XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0cjpoYXMoZGl2W2NsYXNzKj1cInJldmlld3MtcmF0aW5nXCJdKScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0ZFtjbGFzcyo9XCJhc2luXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBlbS5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNsYXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbHMpID0+IGAuJHtjbHN9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJylbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJyZXZpZXdzLXJhdGluZ1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2knKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWxpbmsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWNvbj8uaW5uZXJUZXh0ICsgJyBSZXZpZXdlZCBieSAnICsgc3Bhbj8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktcGFuZSAjYXR0YWNoLXdhcnJhbnR5LWRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3dhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYXR0YWNoLXdhcnJhbnR5LWJveCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2kuYS1pY29uLWNoZWNrYm94JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXR0YWNoLXdhcnJhbnR5LWNhcmQtZGlzcGxheS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmF0dGFjaC13YXJyYW50eS1idXR0b24tcm93JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpQWRkQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaU5vQ292ZXJhZ2UtYW5ub3VuY2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbm9fcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnTm8gVGhhbmtzJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2h6L21vYmlsZS9taXNzaW9uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtaW50ZW50PVwiaW50ZW50LWZlZWQtbWlzc2lvbi1zd2l0Y2hlclwiXScsXG4gICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlfc3dpdGNoZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0VtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdFbT8uYWx0IHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzaW5nbGVQcm9kdWN0Q29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwidGl0bGVSMlwiXScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpbWcpJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic2luZ2xlU3dhdGNoZXNDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiX2xpbmtfXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ2YXJpYXRpb25MaW5rXCJdIGEnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOm5vdCg6aGFzKGltZykpJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IERldGFpbCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzaW5nbGVQcm9kdWN0RGV0YWlsc1wiXSBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IERldGFpbCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1idXR0b246aGFzKGlucHV0KScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1idXR0b24gYSwgZGl2W2RhdGEtY29tcG9uZW50LWlkPVwic2VlQWxsQnV5aW5nT3B0aW9uc0J1dHRvblwiXSBzcGFuLmEtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bY2xhc3MqPVwidGl0bGVSMlwiXScpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0LnJlcGxhY2UoJ1wiJywgJycpXG4gICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignYTpub3QoOmhhcyhpbWcpKScpXG4gICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9tb3Rpb25faXRlbXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNpbnRlbnQtdGFicycsXG4gICAgICAgICAgICBuYW1lOiAnaW50ZW50X3RhYnMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGVtXG4gICAgICAgICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgnaW50ZW50LWZlZWQtJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VBbGwoJy0nLCAnXycpIHx8ICcnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl06aGFzKGRpdltjbGFzcyo9XCJwcm9kdWN0Q29udGFpbmVyXCJdKScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoNCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdOmhhcyhkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0RGV0YWlsc1wiXSknLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmQsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3RDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0gYVthcmlhLWxhYmVsXScpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYUVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJpbWFnZUJsb2NrQ29udGFpbmVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0RGV0YWlsc1wiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IERldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cImFjdGlvbkJ1dHRvblwiXTpoYXMoaS5hLWljb24tY2FydCknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLWFzaW5dJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJykgfHwgJydcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0gYScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdIGEnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJpbnR1aXRpb24tc3RpY2t5LWNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGlbY2xhc3MqPVwiaW50dWl0aW9uLWF0dHJpYnV0ZS1iYXJcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZW0ucXVlcnlTZWxlY3RvcignYS1jYXJkdWktaGVhZGVyJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFyaWFFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsXScpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYXJpYUVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJpbnR1aXRpb24tYXR0cmlidXRlLXdpdGgtY2hldnJvbl9fYXR0cmlidXRlV2l0aENoZXZyb25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhcHBseV9maWx0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmlhRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbF0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmlhRW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiaW50dWl0aW9uLWF0dHJpYnV0ZS13aXRoLWNoZXZyb25fX2NoZXZyb25PdXRlckNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ09wZW4gRmlsdGVycydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImNsb3NlTW9kYWxJY29uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSBGaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtY2FyZHVpLWNvbnRlbnQgPiBkaXYgPiBkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnV0dG9uPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBidXR0b24/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJhY3Rpb25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjaW50ZW50LWNvbnRlbnQtZGVmYXVsdCcsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlbnQnKT8ucmVwbGFjZSgnaW50ZW50LWZlZWQtJywgJycpLnJlcGxhY2VBbGwoJy0nLCAnXycpIHx8XG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpW2NsYXNzKj1cInByb2R1Y3RDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0sIHNwYW5bY2xhc3MqPVwidGl0bGVSNFwiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpbWcpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInN3YXRjaGVzXCJdLCBkaXZbY2xhc3MqPVwidmFyaWF0aW9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJfbGlua19cIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidmFyaWF0aW9uTGlua1wiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJwcm9kdWN0TGlua1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtYnV0dG9uOmhhcyhpbnB1dCknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWJ1dHRvbiBhLCBkaXZbZGF0YS1jb21wb25lbnQtaWQ9XCJzZWVBbGxCdXlpbmdPcHRpb25zQnV0dG9uXCJdIHNwYW4uYS1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHQucmVwbGFjZSgnXCInLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignYTpub3QoOmhhcyhpbWcpKScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtLmNsb3Nlc3QoJyNpbnRlbnQtY29udGVudC1kZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPVxuICAgICAgICAgICAgICAgICAgICBuYW1lRW1cbiAgICAgICAgICAgICAgICAgICAgICA/LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgnaW50ZW50LWZlZWQtJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VBbGwoJy0nLCAnXycpIHx8ICcnXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpW2NsYXNzKj1cImludHVpdGlvbi1wcm9kdWN0LWdyaWRfX2ZhY2VvdXRcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0sIHNwYW5bY2xhc3MqPVwidGl0bGVSNFwiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpbWcpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInN3YXRjaGVzXCJdLCBkaXZbY2xhc3MqPVwidmFyaWF0aW9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJfbGlua19cIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidmFyaWF0aW9uTGlua1wiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJwcm9kdWN0TGlua1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgRGV0YWlsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtYnV0dG9uOmhhcyhpbnB1dCknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWJ1dHRvbiBhLCBkaXZbZGF0YS1jb21wb25lbnQtaWQ9XCJzZWVBbGxCdXlpbmdPcHRpb25zQnV0dG9uXCJdIHNwYW4uYS1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHQucmVwbGFjZSgnXCInLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignYTpub3QoOmhhcyhpbWcpKScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtLmNsb3Nlc3QoJyNpbnRlbnQtY29udGVudC1kZWZhdWx0JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPVxuICAgICAgICAgICAgICAgICAgICBuYW1lRW1cbiAgICAgICAgICAgICAgICAgICAgICA/LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgnaW50ZW50LWZlZWQtJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VBbGwoJy0nLCAnXycpIHx8ICcnXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2FkZC10by1jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgICAgIGZldGNoX3VybDogJy9jYXJ0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5zdy1hdGYtcmVjb21tZW5kYXRpb25zLWNvbnRhaW5lciBkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdLCBkaXYjc21hcnQtd2Fnb24tcmVjb21tZW5kYXRpb25zLWJ0ZiBkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDEuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gxLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvc21hcnQtd2Fnb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICAgICAgZmV0Y2hfdXJsOiAnL2NhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJ2Rpdi5zdy1hdGYtcmVjb21tZW5kYXRpb25zLWNvbnRhaW5lciBkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdLCBkaXYjc21hcnQtd2Fnb24tcmVjb21tZW5kYXRpb25zLWJ0ZiBkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMS5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMS5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9jYXJ0L3ZpZXcuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGNhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvbHV4dXJ5JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogbHV4dXJ5X2NhcnRcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L2xvY2FsbWFya2V0JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogZnJlc2hfY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FsbS9ieWcnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdhW25hbWU9XCJwcm9jZWVkVG9DaGVja291dFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnJlc2hfY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FsbS9zdWJzdGl0dXRpb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3Vic0NvbnRpbnVlQnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NvbnRpbnVlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZnJlc2hfc3Vic3RpdHV0aW9uX2NhcmRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYnljJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtuYW1lPVwic2MtYnljLXB0Yy1idXR0b25cIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NlbF93aWRnZXRfaWRePVwiYnljLWJhY2stYnV0dG9uXCJdIGEnLFxuICAgICAgICAgICAgbmFtZTogJ2JhY2tfdG9fY2FydCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9mbWMvc3NkLXN0b3JlZnJvbnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3Bfc3R5bGVfc3VibmF2LWNvbnRlbnQtY29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdzdWJfc3RvcmVzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdhW2NsYXNzKj1cInN0b3JlLXN1Ym5hdi1kZXNrdG9wX3N0eWxlXCJdLCBhW2NsYXNzKj1cInN0b3JlLXN1Ym5hdi1kZXNrdG9wLWZseW91dF9zdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmlubmVyVGV4dCB8fCAnU2FtZSBEYXkgU3RvcmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLnNlZU1vcmVUaXRsZUhlYWRlcicsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2ZtYy9zc2QtY2F0ZWdvcnknLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3Bfc3R5bGVfc3VibmF2LWNvbnRlbnQtY29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdzdWJfc3RvcmVzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3Bfc3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5pbm5lclRleHQgfHwgJ1NhbWUgRGF5IFN0b3JlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZGNsLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcmllcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5kY2wtaGVhZGVyLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQuZGNsLWNhcm91c2VsLWVsZW1lbnQgYScsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5kY2wtY2FyZC1mb290ZXInLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLnNlZU1vcmVUaXRsZUhlYWRlcicsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2Jlc3RzZWxsZXJzJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL25ldy1yZWxlYXNlcy8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvbW92ZXJzLWFuZC1zaGFrZXJzLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9tb3N0LXdpc2hlZC1mb3IvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL21vc3QtZ2lmdGVkLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9CZXN0LVNlbGxlcnMqL3pnYnMvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL0Jlc3QtU2VsbGVycyovemdicy8qLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy8qL2InLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc3VibmF2JyxcbiAgICAgICAgICAgIG5hbWU6ICdzdWJfc3RvcmVzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuZ2VuZXJpYy1zdWJuYXYtZmx5b3V0LWl0ZW0nLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzc149XCJEZXNrdG9wUmVmaW5lbWVudHMtbW9kdWxlX19yb290XCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYnLFxuICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UuYS10ZXh0LWJvbGQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UuYS10ZXh0LWJvbGQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bFtjbGFzc149XCJCcmVhZGNydW1icy1tb2R1bGVcIl0gbGk6aGFzKGEpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWxbY2xhc3NePVwiQnJlYWRjcnVtYnMtbW9kdWxlXCJdIGxpOm5vdCg6aGFzKGEpKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdltyb2xlPVwicmFkaW9ncm91cFwiXSA+IHNwYW4sIGRpdltyb2xlPVwiZ3JvdXBcIl0gPiBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbYXJpYS1sYWJlbF0nKT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtLmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1sgXS9nLCAnXycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL15fK3xfKyQvZywgJycpXG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdlthcmlhLWxhYmVsXScpPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZW0uaW5uZXJUZXh0XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0RW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQtaW5wdXQtY2hlY2tlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2NsYXNzKj1cIlNlZU1vcmVCdXR0b24tbW9kdWxlXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzXj1cIlByb2R1Y3RDYXJkLW1vZHVsZV9fY2FyZFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdwW2lkXj1cInRpdGxlXCJdIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJpbWFnZVdyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJjYXJkQ29udGFpbmluZ0xpbmtcIl0nLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLXRlc3RpZD1cImNvbG9yLXN3YXRjaFwiXSB1bCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbG9ycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW0ucXVlcnlTZWxlY3RvcignYScpPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3BbaWRePVwidGl0bGVcIl0gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnKT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luLCB0aXRsZSB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISFhcmd1bWVudHNbMF1cbiAgICB9LFxuICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgc2VsZWN0b3I6ICdodG1sJ1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYnV5YWdhaW4nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBidXlfYWdhaW5cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cbiIsImRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY2xpY2thYmxlX3JlY2lwZXM6IGFueVxuICAgIGlucHV0X3JlY2lwZXM6IGFueVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChcbiAgZWxlbWVudDogYW55LFxuICByZWNpcGU6IGFueSxcbiAgcGFyZW50TmFtZSA9ICcnLFxuICBudGhDaGlsZCA9IDAsXG4gIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCxcbiAgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3dcbikge1xuICAvLyBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgZWxlbWVudDogXCIsIGVsZW1lbnQsIHJlY2lwZSk7XG4gIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gIGxldCB0YWdOYW1lID0gcmVjaXBlLnRhZ19uYW1lIHx8IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIC8vIEhhbmRsZSB1bmRlcnNjb3JlZCB0YWdzXG4gIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSlcbiAgfVxuICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxuXG4gIC8vIEV4dHJhY3QgdGV4dCBjb250ZW50IGJhc2VkIG9uIHRoZSByZWNpcGVcbiAgbGV0IGVsZW1lbnRUZXh0ID0gJydcbiAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpXG4gICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICAgIH1cbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfanMoZWxlbWVudClcbiAgICBpZiAoZWxlbWVudFRleHQgPT09ICcnIHx8IGVsZW1lbnRUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0IGpzIGRvZXMgbm90IGRldGVjdCB0ZXh0IGZvciBlbGVtZW50ICcsIGVsZW1lbnQpXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJ1xuICB9XG4gIGlmIChlbGVtZW50VGV4dCA9PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coZWxlbWVudClcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50VGV4dClcbiAgfVxuICBlbGVtZW50VGV4dCA9IGVsZW1lbnRUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKClcbiAgaWYgKHJlY2lwZS50ZXh0X2Zvcm1hdCkge1xuICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0LnJlcGxhY2UoJ3t9JywgZWxlbWVudFRleHQpXG4gIH0gZWxzZSBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXRcbiAgfVxuXG4gIGlmIChlbGVtZW50VGV4dCAmJiByZWNpcGUuYWRkX3RleHQpIHtcbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHRcbiAgfVxuXG4gIC8vIEJ1aWxkIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgbGV0IGVsZW1lbnROYW1lID0gJydcbiAgaWYgKHJlY2lwZS5uYW1lKSB7XG4gICAgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV90ZXh0Jykge1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZWxlbWVudFRleHQgaXMgZW1wdHknLCByZWNpcGUsIGVsZW1lbnQpXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGlmICghZWxlbWVudFRleHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50IHRleHQgbm90IGZvdW5kXCIpO1xuICAgICAgICBlbGVtZW50TmFtZSA9ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50TmFtZSArPSBlbGVtZW50VGV4dFxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teXFx3XSsvZywgJ18nKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXyt8XyskL2csICcnKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX250aF9jaGlsZCcpIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gbnRoQ2hpbGQudG9TdHJpbmcoKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJydcbiAgICAgIGVsZW1lbnROYW1lICs9IHJlY2lwZS5uYW1lXG4gICAgfVxuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgZWxlbWVudE5hbWUpXG4gICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lXG4gIH1cblxuICBpZiAocmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKSB7XG4gICAgY29uc3QgbWV0YW9iaiA9IHJlY2lwZS5nZW5lcmF0ZV9tZXRhZGF0YShlbGVtZW50KVxuICAgIGNvbnN0IG1ldGFkYXRhID0gSlNPTi5zdHJpbmdpZnkobWV0YW9iai5kYXRhKVxuICAgIGNvbnN0IG1ldGFuYW1lID0gbWV0YW9iai5uYW1lXG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScsIG1ldGFuYW1lKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1kYXRhJywgbWV0YWRhdGEpXG4gICAgLy8gY29uc29sZS5sb2coJ21ldGFkYXRhIGdlbmVyYXRlZDogJywgbWV0YWRhdGEsICcgd2l0aCBuYW1lOiAnLCBtZXRhbmFtZSlcbiAgfVxuXG4gIC8vIEhhbmRsZSBjbGlja2FibGVzIGFuZCBpbnB1dHNcbiAgaWYgKHJlY2lwZS5jbGlja2FibGUpIHtcbiAgICBpZiAoIXJlY2lwZS5uYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsaWNrYWJsZSBlbGVtZW50IG11c3QgaGF2ZSBhIG5hbWUnKVxuICAgIH1cbiAgICAvLyBoYW5kbGUgY2xpY2tfc2VsZWN0b3JcbiAgICBsZXQgY2xpY2tfZWxlbWVudDogRWxlbWVudCB8IG51bGxcbiAgICBpZiAocmVjaXBlLmNsaWNrX3NlbGVjdG9yKSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5jbGlja19zZWxlY3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG4gICAgaWYgKGNsaWNrX2VsZW1lbnQpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2stZWxlbWVudCBub3QgZm91bmQnLCBlbGVtZW50LCByZWNpcGUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzKSB7XG4gICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cblxuICBpZiAocmVjaXBlLmZldGNoX3VybCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWZldGNoLXVybCcsIHJlY2lwZS5mZXRjaF91cmwpXG4gIH1cblxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJylcbiAgICBpZiAoWyd0ZXh0JywgJ251bWJlciddLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pbnB1dC1pZCcsIGVsZW1lbnROYW1lKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgIH0gZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfVxuICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge31cbiAgICB9XG4gICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlXG4gIH1cbiAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgaWYgKHRhZ05hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJywgZWxlbWVudE5hbWUpXG5cbiAgICBjb25zdCBzZWxlY3RJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXG5cbiAgICBjb25zdCBuYW1lSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpXG5cbiAgICBjb25zdCB0YWcgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1idXR0b24tZHJvcGRvd24gc3Bhbi5hLWJ1dHRvbi10ZXh0JylcbiAgICBjb25zdCBuZXdUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBuZXdUYWcudGV4dENvbnRlbnQgPSB0YWcudGV4dENvbnRlbnRcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudE5hbWUgKyAnLm9wZW5fZHJvcF9kb3duX2xpc3QnXG4gICAgbmV3VGFnLnNldEF0dHJpYnV0ZSgnbmFtZScsIHRhZ05hbWUpXG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCB0YWdOYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdUYWcpXG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtpZF49XCInICsgc2VsZWN0SWQgKyAnXCJdJylcbiAgICBvcHRpb25zLmZvckVhY2goYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpIHx8IG9wdGlvbi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgICBjb25zdCBvcHRpb25OYW1lID0gZWxlbWVudE5hbWUgKyAnLicgKyBvcHRpb25WYWx1ZVxuICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnRcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpXG4gICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLmdldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpKVxuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBvcHRpb25OYW1lKSAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pXG4gICAgfSlcbiAgfVxuICAvLyBDb3B5IHNwZWNpZmllZCBhdHRyaWJ1dGVzXG4gIGNvbnN0IGF0dHJzVG9Db3B5ID0gW1xuICAgICdhbHQnLFxuICAgICd0aXRsZScsXG4gICAgJ3R5cGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3JvbGUnLFxuICAgICdhcmlhLWxhYmVsJyxcbiAgICAnYXJpYS1oaWRkZW4nLFxuICAgICdhcmlhLXNlbGVjdGVkJ1xuICBdXG4gIGF0dHJzVG9Db3B5LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIGlmIChyZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJhdHRyaWJ1dGVzIHRvIGtlZXA6IFwiLCByZWNpcGUua2VlcF9hdHRyKTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiByZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSwgdmFsdWUpXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHJlY2lwZVsnY2xhc3MnXSkge1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlY2lwZVsnY2xhc3MnXSlcbiAgfVxuICBpZiAocmVjaXBlWydpZCddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgcmVjaXBlWydpZCddKVxuICB9XG5cbiAgLy8gT3ZlcnJpZGUgYXR0cmlidXRlcyBpZiBzcGVjaWZpZWRcbiAgaWYgKHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcmVjaXBlLm92ZXJyaWRlX2F0dHJba2V5XShlbGVtZW50KSlcbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIGNoaWxkcmVuXG4gIGlmIChyZWNpcGUuY2hpbGRyZW4gJiYgcmVjaXBlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGNvbnN0IGNoaWxkUmVjaXBlIG9mIHJlY2lwZS5jaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZFJlY2lwZS5kaXJlY3RfY2hpbGRcbiAgICAgICAgPyBgOnNjb3BlID4gJHtjaGlsZFJlY2lwZS5zZWxlY3Rvcn1gXG4gICAgICAgIDogY2hpbGRSZWNpcGUuc2VsZWN0b3JcbiAgICAgIGxldCBjaGlsZEVsZW1lbnRzXG4gICAgICBpZiAoY2hpbGRSZWNpcGUudXNlX3Jvb3QpIHtcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2Ugcm9vdCBmb3IgJywgY2hpbGRFbGVtZW50cylcbiAgICAgIH0gZWxzZSBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgbWF0Y2hlZCA9IHRydWVcbiAgICAgICAgaWYgKGNoaWxkUmVjaXBlLm1hdGNoX2lkX3dpdGhfcGFyZW50KSB7XG4gICAgICAgICAgY29uc3QgcmVnZXggPSAvKFthLWYwLTktXSstXFxkKykkL1xuXG4gICAgICAgICAgY29uc3QgbWF0Y2gxID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk/Lm1hdGNoKHJlZ2V4KVxuICAgICAgICAgIGNvbnN0IG1hdGNoMiA9IGNoaWxkRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk/Lm1hdGNoKHJlZ2V4KVxuICAgICAgICAgIGlmICghbWF0Y2gxIHx8ICFtYXRjaDIgfHwgbWF0Y2gxWzFdICE9PSBtYXRjaDJbMV0pIHtcbiAgICAgICAgICAgIG1hdGNoZWQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KFxuICAgICAgICAgICAgY2hpbGRFbGVtZW50LFxuICAgICAgICAgICAgY2hpbGRSZWNpcGUsXG4gICAgICAgICAgICBwYXJlbnROYW1lLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgIHdpbmRvd1xuICAgICAgICAgIClcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSlcbiAgICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgICAgY29uc3QgZXZlcnkgPSBjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IHx8IDFcbiAgICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vIHNwbGl0IG1hcmtlcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZXMsIGNoZWNrX3VzZXJfaWRfdXJsIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgLy8gcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFsnI3VzZXItaW50ZXJhY3Rpb24tdHJhY2tlci1hcHAnLCAnLm4tbW9kYWwtY29udGFpbmVyJ11cbiAgcmV0dXJuIHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKHJvb3QgPSBudWxsLCBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgbGV0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhXG4gIGlmIChyb290KSB7XG4gICAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG4gIH0gZWxzZSB7XG4gICAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuICB9XG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFya1ZpZXdhYmxlRWxlbWVudHMoKSB7XG4gIE1hcmtJbnB1dFN0YXR1cygpXG5cbiAgLy8gU2VsZWN0IGFsbCBlbGVtZW50c1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgc2VsZWN0LCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBpblZpZXdwb3J0ID1cbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQtdmlzaWJsZS1jbGlja2FibGUtbWFya2VyJywgaW5WaWV3cG9ydCA/ICd0cnVlJyA6ICdmYWxzZScpXG4gIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gTWFya0lucHV0U3RhdHVzKCkge1xuICAvLyBFeGNsdWRlIGhpZGRlbiBpbnB1dHMgYnkgdXNpbmcgJzpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJ1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJylcbiAgaW5wdXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudFxuXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LXZhbHVlJywgaW5wdXQudmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dC50eXBlID09PSAncmFkaW8nKVxuICAgICkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1jaGVja2VkJywgU3RyaW5nKGlucHV0LmNoZWNrZWQpKVxuICAgIH1cblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFRleHRzID0gQXJyYXkuZnJvbShpbnB1dC5zZWxlY3RlZE9wdGlvbnMpXG4gICAgICAgIC5tYXAoKG9wdCkgPT4gb3B0LnRleHRDb250ZW50Py50cmltKCkgPz8gJycpXG4gICAgICAgIC5qb2luKCd8fCcpXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LXNlbGVjdGVkLXRleHQnLCBzZWxlY3RlZFRleHRzKVxuICAgIH1cbiAgfSlcbn1cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IGNhcnQsIHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHVybCA9IG51bGwsIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCwgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3cpIHtcbiAgbGV0IHBhcnNlZFVybFxuICBpZiAodXJsKSB7XG4gICAgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpXG4gIH0gZWxzZSB7XG4gICAgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgfVxuICBsZXQgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuICBwYXRoID0gcGF0aCAhPT0gJy8nID8gcGF0aC5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKSA6IHBhdGhcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgIGNvbnN0IG1hdGNoID1cbiAgICAgICAgcmVjaXBlLm1hdGNoID09ICcvJ1xuICAgICAgICAgID8gcmVjaXBlLm1hdGNoXG4gICAgICAgICAgOiByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICcnKS5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKVxuICAgICAgY29uc3Qgd2lsZGNhcmRfbWF0Y2ggPSAnXicgKyByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICdbXi9dKicpICsgJyQnXG4gICAgICBjb25zdCB3aWxkY2FyZF9tYXRjaF93aXRoX3JlZiA9ICdeJyArIHJlY2lwZS5tYXRjaC5yZXBsYWNlKC9cXCovZywgJ1teL10rJykgKyAnKC9yZWY9LispJCdcbiAgICAgIGlmIChtYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHJlY2lwZS5tYXRjaF93aXRoX3JlZiAmJlxuICAgICAgICAocGF0aC5zdGFydHNXaXRoKG1hdGNoICsgJy9yZWY9JykgfHwgcGF0aC5zdGFydHNXaXRoKG1hdGNoICsgJ3JlZj0nKSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAocmVjaXBlLm1hdGNoX3dpdGhfd2lsZGNhcmQpIHtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCh3aWxkY2FyZF9tYXRjaClcbiAgICAgICAgY29uc3QgcmVnRXhwV2l0aFJlZiA9IG5ldyBSZWdFeHAod2lsZGNhcmRfbWF0Y2hfd2l0aF9yZWYpXG4gICAgICAgIGlmIChyZWdFeHAudGVzdChwYXRoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH0gZWxzZSBpZiAocmVjaXBlLm1hdGNoX3dpdGhfcmVmICYmIHJlZ0V4cFdpdGhSZWYudGVzdChwYXRoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVjaXBlKFxuICByb290ID0gbnVsbCxcbiAgdXJsID0gbnVsbCxcbiAgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50LFxuICB3aW5kb3cgPSBnbG9iYWxUaGlzLndpbmRvd1xuKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKHVybCwgZG9jdW1lbnQsIHdpbmRvdylcbiAgICBsZXQgcm9vdEVsZW1lbnRcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdEVsZW1lbnQgPSByb290XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgfVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQpXG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSwgJycsIDAsIGRvY3VtZW50LCB3aW5kb3cpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICBkYXRhOiBhbnlcbik6IHsgcXVlc3Rpb246IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZyB9IHtcbiAgbGV0IHF1ZXN0aW9uID0gJydcbiAgbGV0IHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSAnY2xpY2tfYSc6XG4gICAgY2FzZSAnY2xpY2tfYic6XG4gICAgY2FzZSAnY2xpY2tfYyc6XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkuc3Vic2NyaWJlX3NhdmVfLnB1cmNoYXNlX2Zvcm0uc2V0X3VwX25vdycgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdydcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZXQgdXAgbm93IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBzdWJzY3JpYmUgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYnV5IG5vdyBidXR0b24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFtIGJ1eWluZyB0aGlzIHByb2R1Y3QgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2FkZF90b19jYXJ0JykgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0Lm5hbWUgPT09ICdzdWJtaXQuYWRkVG9DYXJ0JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdBZGQgdG8gQ2FydCdcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBhZGQgdG8gY2FydCBidXR0b24uIFdoYXQgbWFrZXMgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgYWRkIHRoaXMgaXRlbSB0byBteSBjYXJ0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ25hdl9iYXIuc2VhcmNoX2J1dHRvbicpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgc2VhcmNoIGJ1dHRvbi4gV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3JlZmluZW1lbnRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnZmlsdGVycy4nKVxuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBmaWx0ZXIuIFdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZCB3aXRoIHRoaXMgZmlsdGVyPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3Rfb3B0aW9ucy4nKSkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdCBvcHRpb24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwcm9kdWN0IG9wdGlvbj8nXG4gICAgICAgIC8vIGlmIChkYXRhWydlbGVtZW50LW1ldGEtbmFtZSddID09PSAncHJvZHVjdF9vcHRpb25zJyAmJiBkYXRhWydlbGVtZW50LW1ldGEtZGF0YSddICE9PSAnJykge1xuICAgICAgICAvLyAgIHF1ZXN0aW9uID0gYFlvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uICR7ZGF0YVsnZWxlbWVudC1tZXRhLWRhdGEnXVsndmFsdWUnXX0uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwcm9kdWN0IG9wdGlvbj9gXG4gICAgICAgIC8vIH1cbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBsaWtlIHRoaXMgcHJvZHVjdCBvcHRpb24gYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnY2hlY2tfb3V0JykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBjaGVja291dCBidXR0b24uIFdoYXQgbWFrZXMgeW91IGNob29zZSB0byBjaGVja291dD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgY2hvb3NlIHRvIGNoZWNrb3V0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3NlYXJjaF9yZXN1bHRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9saXN0LicpIHx8XG4gICAgICAgIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2FjdGl2ZV9pdGVtX2xpc3QuJykgJiZcbiAgICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCcucHJvZHVjdF9kZXRhaWwnKSkgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdC4gV2hhdCBjYXVnaHQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gdGhlIG90aGVyIG9wdGlvbnMgeW91IHNhdz8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgbGlrZSB0aGlzIHByb2R1Y3QgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBlbGVtZW50LiBDb3VsZCB5b3Ugc2hhcmUgd2hhdCB5b3Ugd2VyZSB0cnlpbmcgdG8gZG8gb3IgZmluZD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICBxdWVzdGlvbiA9XG4gICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5zY3JvbGxlZDwvc3Bhbj4gb24gdGhpcyBwYWdlLiBXaGF0IGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3I/J1xuICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICBxdWVzdGlvbiA9XG4gICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj50eXBlZDwvc3Bhbj4gaW4gdGhpcyBpbnB1dCBmaWVsZC4gV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5nbyBiYWNrPC9zcGFuPiB0byB0aGUgcHJldmlvdXMgcGFnZT8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gXCJJJ20gYmFjayBiZWNhdXNlLi4uXCJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+cmV0dXJuPC9zcGFuPiB0byB0aGlzIHBhZ2UgPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfVxuICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+JHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uPC9zcGFuPj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICBxdWVzdGlvbiA9IGBXaHkgZGlkIHlvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnN3aXRjaCB0byB0aGlzIHRhYjwvc3Bhbj4/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnSSBzd2l0Y2hlZCB0byB0aGlzIHRhYiBiZWNhdXNlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgfVxuICByZXR1cm4geyBxdWVzdGlvbiwgcGxhY2Vob2xkZXIgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFJlYXNvbihyZWFzb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIXJlYXNvbiB8fCByZWFzb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZSAvLyBFbXB0eSBpbnB1dFxuICB9XG4gIGlmIChyZWFzb24udHJpbSgpLmxlbmd0aCA8IDIgfHwgcmVhc29uLmxlbmd0aCA8IDUpIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gVG9vIHNob3J0IHRvIGJlIG1lYW5pbmdmdWwsIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBhbmQgMiB3b3Jkc1xuICB9XG4gIC8vIENoZWNrIGZvciByZXBldGl0aXZlIG9yIG1lYW5pbmdsZXNzIGlucHV0IChlLmcuLCBcImFhYVwiLFwiISEhXCIpXG4gIGNvbnN0IG1lYW5pbmdsZXNzUGF0dGVybnMgPSBbL14oLilcXDF7Myx9JC8sIC9eW15hLXpBLVowLTldKyQvXVxuICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgbWVhbmluZ2xlc3NQYXR0ZXJucykge1xuICAgIGlmIChwYXR0ZXJuLnRlc3QocmVhc29uLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIExpY2Vuc2U6IE1JVFxuLy8gQXV0aG9yOiBBbnRvbiBNZWR2ZWRldiA8YW50b25AbWVkdi5pbz5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FudG9ubWVkdi9maW5kZXJcbmNvbnN0IGFjY2VwdGVkQXR0ck5hbWVzID0gbmV3IFNldChbJ3JvbGUnLCAnbmFtZScsICdhcmlhLWxhYmVsJywgJ3JlbCcsICdocmVmJ10pO1xuLyoqIENoZWNrIGlmIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBhcmUgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbmFtZUlzT2sgPSBhY2NlcHRlZEF0dHJOYW1lcy5oYXMobmFtZSk7XG4gICAgbmFtZUlzT2sgfHw9IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSAmJiB3b3JkTGlrZShuYW1lKTtcbiAgICBsZXQgdmFsdWVJc09rID0gd29yZExpa2UodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDEwMDtcbiAgICB2YWx1ZUlzT2sgfHw9IHZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiB3b3JkTGlrZSh2YWx1ZS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5hbWVJc09rICYmIHZhbHVlSXNPaztcbn1cbi8qKiBDaGVjayBpZiBpZCBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZE5hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiBjbGFzcyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiB0YWcgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gdGFnTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKiogRmluZHMgdW5pcXVlIENTUyBzZWxlY3RvcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRlcihpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChpbnB1dC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZW5lcmF0ZSBDU1Mgc2VsZWN0b3IgZm9yIG5vbi1lbGVtZW50IG5vZGUgdHlwZS5gKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICByb290OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBpZE5hbWU6IGlkTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIHRpbWVvdXRNczogMTAwMCxcbiAgICAgICAgc2VlZE1pbkxlbmd0aDogMyxcbiAgICAgICAgb3B0aW1pemVkTWluTGVuZ3RoOiAyLFxuICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IEluZmluaXR5LFxuICAgIH07XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3Qgcm9vdERvY3VtZW50ID0gZmluZFJvb3REb2N1bWVudChjb25maWcucm9vdCwgZGVmYXVsdHMpO1xuICAgIGxldCBmb3VuZFBhdGg7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSkge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMgfHxcbiAgICAgICAgICAgIGNvdW50ID49IGNvbmZpZy5tYXhOdW1iZXJPZlBhdGhDaGVja3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGZQYXRoID0gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIWZQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lb3V0OiBDYW4ndCBmaW5kIGEgdW5pcXVlIHNlbGVjdG9yIGFmdGVyICR7Y29uZmlnLnRpbWVvdXRNc31tc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yKGZQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAodW5pcXVlKGNhbmRpZGF0ZSwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICAgICAgZm91bmRQYXRoID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxlY3RvciB3YXMgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICBjb25zdCBvcHRpbWl6ZWQgPSBbXG4gICAgICAgIC4uLm9wdGltaXplKGZvdW5kUGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpLFxuICAgIF07XG4gICAgb3B0aW1pemVkLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBpZiAob3B0aW1pemVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKG9wdGltaXplZFswXSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcihmb3VuZFBhdGgpO1xufVxuZnVuY3Rpb24qIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgIGxldCBwYXRocyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRpZShjdXJyZW50LCBjb25maWcpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbGV2ZWwpIHtcbiAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2gobGV2ZWwpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgICAgIHBhdGhzLnB1c2goLi4uY29tYmluYXRpb25zKHN0YWNrKSk7XG4gICAgICAgIGlmIChpID49IGNvbmZpZy5zZWVkTWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGhzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB3b3JkTGlrZShuYW1lKSB7XG4gICAgaWYgKC9eW2EtelxcLV17Myx9JC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBuYW1lLnNwbGl0KC8tfFtBLVpdLyk7XG4gICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICAgICAgaWYgKHdvcmQubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1teYWVpb3VdezQsfS9pLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRpZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBjb25zdCBsZXZlbCA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChlbGVtZW50SWQgJiYgY29uZmlnLmlkTmFtZShlbGVtZW50SWQpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJyMnICsgQ1NTLmVzY2FwZShlbGVtZW50SWQpLFxuICAgICAgICAgICAgcGVuYWx0eTogMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZiAoY29uZmlnLmNsYXNzTmFtZShuYW1lKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJy4nICsgQ1NTLmVzY2FwZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5hdHRyKGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGBbJHtDU1MuZXNjYXBlKGF0dHIubmFtZSl9PVwiJHtDU1MuZXNjYXBlKGF0dHIudmFsdWUpfVwiXWAsXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoY29uZmlnLnRhZ05hbWUodGFnTmFtZSkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgcGVuYWx0eTogNSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMTAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBudGggPSBpbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChudGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aENoaWxkKHRhZ05hbWUsIG50aCksXG4gICAgICAgICAgICBwZW5hbHR5OiA1MCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbDtcbn1cbmZ1bmN0aW9uIHNlbGVjdG9yKHBhdGgpIHtcbiAgICBsZXQgbm9kZSA9IHBhdGhbMF07XG4gICAgbGV0IHF1ZXJ5ID0gbm9kZS5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHBhdGhbaV0ubGV2ZWwgfHwgMDtcbiAgICAgICAgaWYgKG5vZGUubGV2ZWwgPT09IGxldmVsIC0gMSkge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ID4gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcGF0aFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gcGVuYWx0eShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgubWFwKChub2RlKSA9PiBub2RlLnBlbmFsdHkpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKTtcbn1cbmZ1bmN0aW9uIGJ5UGVuYWx0eShhLCBiKSB7XG4gICAgcmV0dXJuIHBlbmFsdHkoYSkgLSBwZW5hbHR5KGIpO1xufVxuZnVuY3Rpb24gaW5kZXhPZihpbnB1dCwgdGFnTmFtZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgICAgICh0YWdOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUpKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBpbnB1dCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihjdXJyZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgIHBlbmFsdHk6IE5hTixcbiAgICAgICAgICAgIGxldmVsOiBpLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpZiAodW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gbnRoQ2hpbGQodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtY2hpbGQoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uIG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1vZi10eXBlKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiogY29tYmluYXRpb25zKHN0YWNrLCBwYXRoID0gW10pIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHN0YWNrWzBdKSB7XG4gICAgICAgICAgICB5aWVsZCogY29tYmluYXRpb25zKHN0YWNrLnNsaWNlKDEsIHN0YWNrLmxlbmd0aCksIHBhdGguY29uY2F0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBmaW5kUm9vdERvY3VtZW50KHJvb3ROb2RlLCBkZWZhdWx0cykge1xuICAgIGlmIChyb290Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG4gICAgaWYgKHJvb3ROb2RlID09PSBkZWZhdWx0cy5yb290KSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZS5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcm9vdE5vZGU7XG59XG5mdW5jdGlvbiB1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3QgY3NzID0gc2VsZWN0b3IocGF0aCk7XG4gICAgc3dpdGNoIChyb290RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjc3MpLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHNlbGVjdCBhbnkgbm9kZSB3aXRoIHRoaXMgc2VsZWN0b3I6ICR7Y3NzfWApO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiogb3B0aW1pemUocGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPiAyICYmIHBhdGgubGVuZ3RoID4gY29uZmlnLm9wdGltaXplZE1pbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IFsuLi5wYXRoXTtcbiAgICAgICAgICAgIG5ld1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaWYgKHVuaXF1ZShuZXdQYXRoLCByb290RG9jdW1lbnQpICYmXG4gICAgICAgICAgICAgICAgcm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IobmV3UGF0aCkpID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG5ld1BhdGg7XG4gICAgICAgICAgICAgICAgeWllbGQqIG9wdGltaXplKG5ld1BhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBpc0Zyb21Qb3B1cCxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlLFxuICBpc1ZhbGlkUmVhc29uLFxuICBNYXJrVmlld2FibGVFbGVtZW50c1xufSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgc2Nyb2xsX3RocmVzaG9sZCB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgZmluZGVyIH0gZnJvbSAnQG1lZHYvZmluZGVyJ1xuXG5hc3luYyBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgdXVpZFxuICAgIH0pKSBhcyBhbnlcblxuICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgJ1NjcmVlbnNob3QgY2FwdHVyZSBmYWlsZWQnKVxuICAgIH1cblxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgfSxcbiAgICAgICcqJ1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdCBpbiBjb250ZW50IHNjcmlwdDonLCBlcnJvcilcblxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9LFxuICAgICAgJyonXG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5zb3VyY2UgIT09IHdpbmRvdykgcmV0dXJuXG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnR0VUX1VTRVJfSUQnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VySWQnKVxuICAgIGNvbnN0IHVzZXJJZCA9IHJlc3VsdC51c2VySWRcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSURfUkVTUE9OU0UnLCB1c2VySWQ6IHVzZXJJZCB9LCAnKicpXG4gIH1cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQVBUVVJFX1NDUkVFTlNIT1QnKSB7XG4gICAgYXdhaXQgY2FwdHVyZVNjcmVlbnNob3QoZXZlbnQuZGF0YS50aW1lc3RhbXAsIGV2ZW50LmRhdGEudXVpZClcbiAgfVxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NBVkVfSU5URVJBQ1RJT05fREFUQScpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YUZvckJhY2tncm91bmQgPSB7IC4uLmV2ZW50LmRhdGEuZGF0YSB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IChhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogJ3NhdmVEYXRhJyxcbiAgICAgICAgZGF0YTogZGF0YUZvckJhY2tncm91bmRcbiAgICAgIH0pKSBhcyBhbnlcbiAgICAgIGlmICghcmVzcG9uc2UyLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlMi5tZXNzYWdlIHx8ICdpbnRlcmFjdGlvbiBjYXB0dXJlIGZhaWxlZCcpXG4gICAgICB9XG4gICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICcqJ1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgaW50ZXJhY3Rpb24gZGF0YTonLCBlcnJvcilcbiAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wXG4gICAgICAgIH0sXG4gICAgICAgICcqJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufSlcblxuY29uc3Qgd29yayA9ICgpID0+IHtcbiAgLy8gRGVmaW5lIGludGVyZmFjZXMgZm9yIFJlY2lwZSBhbmQgT3JkZXJEZXRhaWxcbiAgaW50ZXJmYWNlIFJlY2lwZSB7XG4gICAgdGFnX25hbWU/OiBzdHJpbmdcbiAgICB0ZXh0X3NlbGVjdG9yPzogc3RyaW5nXG4gICAgdGV4dF9qcz86IHN0cmluZ1xuICAgIGFkZF90ZXh0PzogYm9vbGVhblxuICAgIHRleHRfZm9ybWF0Pzogc3RyaW5nXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICBjbGlja19zZWxlY3Rvcj86IHN0cmluZ1xuICAgIGtlZXBfYXR0cj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBvdmVycmlkZV9hdHRyPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGNoaWxkcmVuPzogUmVjaXBlW11cbiAgICBpbnNlcnRfc3BsaXRfbWFya2VyPzogYm9vbGVhblxuICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk/OiBudW1iZXJcbiAgICBkaXJlY3RfY2hpbGQ/OiBib29sZWFuXG4gICAgZW1wdHlfbWVzc2FnZT86IHN0cmluZ1xuICAgIFtrZXk6IHN0cmluZ106IGFueSAvLyBBbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXNcbiAgfVxuXG4gIGludGVyZmFjZSBPcmRlckRldGFpbCB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgcHJpY2U6IG51bWJlclxuICB9XG5cbiAgLy8gRXh0ZW5kIHRoZSBXaW5kb3cgaW50ZXJmYWNlIHRvIGluY2x1ZGUgY3VzdG9tIHByb3BlcnRpZXNcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIGV2ZW50IHRyaWdnZXJlZCcpXG4gICAgTWFya1ZpZXdhYmxlRWxlbWVudHMoKVxuICAgIHByb2Nlc3NSZWNpcGUoKVxuICB9KVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNhcHR1cmUgaW50ZXJhY3Rpb25zXG4gIGFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICB0YXJnZXQ6IGFueSxcbiAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICB1dWlkOiBzdHJpbmcsXG4gICAgd2luZG93U2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9LFxuICAgIHNjcm9sbERpc3RhbmNlPzogbnVtYmVyLFxuICAgIHNjcm9sbEN1cnJlbnRUb3A/OiBudW1iZXIsXG4gICAgc2Nyb2xsQ3VycmVudExlZnQ/OiBudW1iZXIsXG4gICAgc2Nyb2xsRGlzdGFuY2VfWD86IG51bWJlcixcbiAgICB1cmw/OiBzdHJpbmdcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYXRhID0ge31cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBmaW5kZXIodGFyZ2V0IGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgaHRtbFNuYXBzaG90SWQ6ICcnLFxuICAgICAgICAgIHBhZ2VNZXRhOiAnJyxcbiAgICAgICAgICBodG1sQ29udGVudDogJycsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVsnc2VsZWN0b3InXSA9IHNlbGVjdG9yXG4gICAgICAgIGRhdGFbJ2lucHV0LXZhbHVlcyddID0gdGFyZ2V0Py52YWx1ZSB8fCAnJ1xuICAgICAgICBkYXRhWydpbnB1dC1pZCddID0gdGFyZ2V0Py5pZCB8fCAnJ1xuICAgICAgICBkYXRhWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgICAgZGF0YVsnZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCB0aW1lOicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSlcbiAgICAgICAgTWFya1ZpZXdhYmxlRWxlbWVudHMoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5kIHRpbWU6JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKVxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblxuICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCwgLy8gVXNlIHRoZSBuZXcgc25hcHNob3QgSURcbiAgICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgICAgaHRtbENvbnRlbnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgICAgICBkYXRhWyd3aW5kb3dTaXplJ10gPSB3aW5kb3dTaXplXG4gICAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWSddID0gc2Nyb2xsRGlzdGFuY2VcbiAgICAgICAgICBkYXRhWydzY3JvbGxDdXJyZW50VG9wJ10gPSBzY3JvbGxDdXJyZW50VG9wXG4gICAgICAgICAgZGF0YVsnc2Nyb2xsQ3VycmVudExlZnQnXSA9IHNjcm9sbEN1cnJlbnRMZWZ0XG4gICAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWCddID0gc2Nyb2xsRGlzdGFuY2VfWFxuICAgICAgICAgIGRhdGFbJ3RhcmdldCddID0gdGFyZ2V0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpXG4gICAgfVxuICB9XG4gIC8vIFZhcmlhYmxlcyB0byB0cmFjayBzY3JvbGwgZXZlbnRzXG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlXG4gIGxldCBzY3JvbGxUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgbGV0IHNjcm9sbFN0YXJ0TGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggPSAwXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZmlyc3Qgc2Nyb2xsIGV2ZW50IGluIGEgc2Nyb2xsIHNlcXVlbmNlXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQ6IHN0cmluZywgc2Nyb2xsVGltZXN0YW1wOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcnN0IHNjcm9sbCBldmVudCcpXG4gICAgICBjYXB0dXJlU2NyZWVuc2hvdChzY3JvbGxUaW1lc3RhbXAsIHNjcm9sbFV1aWQpXG4gICAgICBwcm9jZXNzUmVjaXBlKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGZpcnN0IHNjcm9sbCBoYW5kbGluZzonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgd2hlbiBzY3JvbGxpbmcgc3RvcHMgKG5vIHNjcm9sbCBldmVudHMgd2l0aGluIHRoZSB0aHJlc2hvbGQpXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbFN0b3Aoc2Nyb2xsVXVpZDogc3RyaW5nLCBzY3JvbGxUaW1lc3RhbXA6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsIHN0b3AgdXVpZCcsIHNjcm9sbFV1aWQpXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSArPSBjdXJyZW50U2Nyb2xsVG9wIC0gc2Nyb2xsU3RhcnRUb3BcblxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YICs9IGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsU3RhcnRMZWZ0XG5cbiAgICAgIC8vIElOU0VSVF9ZT1VSX0NPREVcbiAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICE9PSAwIHx8IGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCAhPT0gMCkge1xuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBpbnRlcmFjdGlvbiB3aXRoIHRoZSBhY2N1bXVsYXRlZCBzY3JvbGwgZGlzdGFuY2VcbiAgICAgICAgYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgIHNjcm9sbFRpbWVzdGFtcCxcbiAgICAgICAgICBzY3JvbGxVdWlkLFxuICAgICAgICAgIHdpbmRvd1NpemUsXG4gICAgICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wLFxuICAgICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsTGVmdFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc2V0IGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggPSAwXG4gICAgICAgIHNjcm9sbFN0YXJ0VG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAgICAgICBzY3JvbGxTdGFydExlZnQgPSBjdXJyZW50U2Nyb2xsTGVmdFxuICAgICAgfVxuICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIHN0b3AgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgbGV0IHNjcm9sbFV1aWQgPSAnJ1xuICBsZXQgc2Nyb2xsVGltZXN0YW1wID0gJydcbiAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCBldmVudCcpXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsIGV2ZW50IGlnbm9yZWQgZnJvbSBhIG5lc3RlZCBzY3JvbGxhYmxlIGNvbnRhaW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsaW5nKSB7XG4gICAgICBpc1Njcm9sbGluZyA9IHRydWVcbiAgICAgIHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgc2Nyb2xsVXVpZCA9IHV1aWR2NCgpXG4gICAgICBzY3JvbGxUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIGF3YWl0IGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcClcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGltZW91dCBhbmQgc2V0IGEgbmV3IG9uZVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dClcbiAgICBzY3JvbGxUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAoKSA9PiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcCksXG4gICAgICBzY3JvbGxfdGhyZXNob2xkXG4gICAgKSAvLyBUaHJlc2hvbGQgb2YgMzAwbXNcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdibHVyJyxcbiAgICBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSkgcmV0dXJuXG4gICAgICBpZiAoXG4gICAgICAgIHRhcmdldCAmJlxuICAgICAgICAoKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmICh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSA9PT0gJ3RleHQnKSB8fFxuICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgIHV1aWQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApXG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRIVE1MJykge1xuICAgICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgICBNYXJrVmlld2FibGVFbGVtZW50cygpXG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICBodG1sOiBodG1sQ29udGVudCxcbiAgICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MLFxuICAgICAgICAgIHdpbmRvd1NpemU6IHdpbmRvd1NpemVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3Nob3dfcG9wdXAnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93X3BvcHVwJywgbWVzc2FnZSlcbiAgICAgICAgLy8gYXNzZXJ0IHRoZXJlIGlzbid0IGFscmVhZHkgYSBwb3B1cFxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdwb3B1cCBhbHJlYWR5IGV4aXN0cycgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSB0aGUgVnVlIGFwcCB0byBzaG93IHRoZSBtb2RhbFxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2hvdy1tb2RhbCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uOiBtZXNzYWdlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1lc3NhZ2UucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIHJldHVybiB0cnVlIC8vIFdpbGwgcmVzcG9uZCBhc3luY2hyb25vdXNseVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd1JlbWluZGVyJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd1JlbWluZGVyJylcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAncmVtaW5kZXI6cG9wdXAgYWxyZWFkeSBleGlzdHMnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YVxuICAgICAgICAvLyBhbGVydChcbiAgICAgICAgLy8gICBgVGhhbmsgeW91IGZvciBwYXJ0aWNpcGF0aW5nIVxcbllvdSBoYXZlIGNvbnRyaWJ1dGVkICR7ZGF0YS5vbl9kYXRlfSByYXRpb25hbGVzIHRoaXMgd2Vla1xcbllvdSBoYXZlIGNvbnRyaWJ1dGVkICR7ZGF0YS5hbGxfdGltZX0gcmF0aW9uYWxlcyBpbiB0b3RhbC4gYFxuICAgICAgICAvLyApXG4gICAgICAgIHdpbmRvdy4kZGlhbG9nPy5pbmZvKHtcbiAgICAgICAgICB0aXRsZTogJ1RoYW5rIHlvdSBmb3IgcGFydGljaXBhdGluZyEnLFxuICAgICAgICAgIGNvbnRlbnQ6IGBZb3UgaGF2ZSBjb250cmlidXRlZCAke2RhdGEub25fZGF0ZX0gcmF0aW9uYWxlcyB0aGlzIHdlZWsuXG4gICAgICAgICAgWW91IGhhdmUgY29udHJpYnV0ZWQgJHtkYXRhLmFsbF90aW1lfSByYXRpb25hbGVzIGluIHRvdGFsLiBgXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbnNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBjb25zb2xlLmxvZygnY29udGVudCBzY3JpcHQsIHNob3VsZEV4Y2x1ZGUnLCByZXN1bHQpXG4gIGlmICghcmVzdWx0KSB7XG4gICAgd29yaygpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=