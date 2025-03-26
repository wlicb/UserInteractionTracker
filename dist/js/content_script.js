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
/* harmony export */   current_week_info_url: () => (/* binding */ current_week_info_url),
/* harmony export */   data_collector_secret_id: () => (/* binding */ data_collector_secret_id),
/* harmony export */   filter_url: () => (/* binding */ filter_url),
/* harmony export */   folder_name: () => (/* binding */ folder_name),
/* harmony export */   interaction_status_url: () => (/* binding */ interaction_status_url),
/* harmony export */   new_session_interval: () => (/* binding */ new_session_interval),
/* harmony export */   popup_click_probability: () => (/* binding */ popup_click_probability),
/* harmony export */   popup_navigation_probability: () => (/* binding */ popup_navigation_probability),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   popup_scroll_probability: () => (/* binding */ popup_scroll_probability),
/* harmony export */   popup_tabActivate_probability: () => (/* binding */ popup_tabActivate_probability),
/* harmony export */   purchase_status_url: () => (/* binding */ purchase_status_url),
/* harmony export */   rationale_status_url: () => (/* binding */ rationale_status_url),
/* harmony export */   scroll_popup_interval: () => (/* binding */ scroll_popup_interval),
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
const scroll_popup_interval = 10 * 1000; // 10 seconds
const new_session_interval = 1000 * 60 * 60 * 4; // 4 hours
const current_week_info_url = `${base_url}/current_week_info`;


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
    selector: 'li.a-carousel-card:not(.a-carousel-card-empty), #gridItemRoot, li > span.a-list-item',
    name: 'from_text',
    text_js: (em) => {
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title, div[id^="sp_rhf_cart"] span.a-truncate-full');
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
            name: 'from_text',
            clickable: true,
            text_format: 'Product Title'
        },
        {
            selector: '#adfeedbackdetails > a',
            add_text: true,
            text_format: 'Product Details',
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
        const asinEm = em.querySelector('div[id*="sc-turbo-container"], div[data-asin], input[data-asin], span[data-csa-c-item-id]');
        const asin = (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin')) ||
            ((_b = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('id')) === null || _b === void 0 ? void 0 : _b.split('-').pop()) ||
            (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-csa-c-item-id').split('.').pop()) ||
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
    },
    {
        selector: '#sc-secondary-list',
        name: 'secondary-list',
        children: [
            {
                selector: '#sc-secondary-list-tab',
                name: 'tabs',
                children: [
                    {
                        selector: 'li',
                        name: 'from_text',
                        add_text: true,
                        clickable: true
                    }
                ]
            },
            {
                selector: 'div[data-a-name="savedCart"]',
                name: 'saved_for_later',
                children: [
                    {
                        selector: 'div.mission-categories',
                        name: 'categories',
                        children: [
                            {
                                selector: 'span.mission-category:not(.sc-hidden)',
                                clickable: true,
                                add_text: true,
                                name: 'from_text'
                            }
                        ]
                    },
                    {
                        selector: 'div.mission-expander a',
                        clickable: true,
                        add_text: true,
                        name: 'from_text'
                    },
                    {
                        selector: '#sc-saved-cart-items',
                        name: 'saved_items',
                        children: [
                            {
                                selector: 'div[data-asin]',
                                name: 'from_text',
                                text_selector: 'li.sc-item-product-title-cont span.a-truncate-full',
                                children: [
                                    {
                                        selector: 'div.sc-image-wrapper',
                                        add_text: true,
                                        text_format: 'Product Image',
                                        name: 'from_text',
                                        clickable: true
                                    },
                                    {
                                        selector: 'a.sc-grid-item-product-title',
                                        add_text: true,
                                        text_format: 'Product Title',
                                        name: 'from_text',
                                        clickable: true
                                    },
                                    {
                                        selector: 'div.sc-action-move-to-cart, span.sc-action-delete input, span.add-to-list-text input, span[data-action="compare"] input',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true,
                                        text_js: (em) => {
                                            return em.value || em.innerText || '';
                                        }
                                    }
                                ],
                                generate_metadata: (em) => {
                                    var _a, _b;
                                    const asin = em.getAttribute('data-asin');
                                    const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-product-price span.a-offscreen, div.sc-badge-price-to-pay span.sc-product-price:not(:has(span))');
                                    const price = (_a = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _a === void 0 ? void 0 : _a.replace(/[\n]/g, '');
                                    const titleEm = em.querySelector('li.sc-item-product-title-cont span.a-truncate-full');
                                    const title = (_b = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) === null || _b === void 0 ? void 0 : _b.trim();
                                    const urlEm = em.querySelector('a.sc-grid-item-product-title');
                                    const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
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
                                        name: 'saved_items',
                                        data: { title, asin, price, url, options }
                                    };
                                }
                            }
                        ]
                    }
                ]
            },
            {
                selector: 'div[data-a-name="buyItAgain"]',
                name: 'buy_it_again',
                children: [
                    {
                        selector: 'div.sc-list-item',
                        name: 'from_text',
                        text_selector: 'a.sc-product-link',
                        children: [
                            {
                                selector: 'div.sc-product-image-desktop',
                                add_text: true,
                                text_format: 'Product Image',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'a.sc-product-link',
                                add_text: true,
                                text_format: 'Product Title',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'span.sc-atc-add-to-cart-button',
                                add_text: true,
                                name: 'from_text',
                                clickable: true
                            }
                        ],
                        generate_metadata: (em) => {
                            var _a, _b;
                            const asin = (_a = em.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.split('-').at(-1);
                            const priceEm = em.querySelector('span.sc-price');
                            const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
                            const titleEm = em.querySelector('a.sc-product-link');
                            const title = titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText;
                            const urlEm = em.querySelector('a.sc-product-link');
                            const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
                            return {
                                name: 'buy_it_again',
                                data: { title, asin, price, url }
                            };
                        }
                    }
                ]
            }
        ]
    },
    {
        selector: 'div[id^="CardInstance"]',
        name: 'from_text',
        text_selector: '.a-carousel-heading, h3',
        children: [
            {
                selector: '.a-carousel-heading, h3',
                add_text: true,
                clickable: true,
                name: 'from_text'
            },
            carousel_card
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
/* harmony export */   getHighLevelQuestion: () => (/* binding */ getHighLevelQuestion),
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
    const selectors = [
        '#user-interaction-tracker-app',
        '.n-modal-container',
        '#user-interaction-tracker-app-session'
    ];
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    let question = '';
    let placeholder = 'Enter your reason here...';
    switch (eventType) {
        case 'click_a':
        case 'click_b':
        case 'click_c':
            // Check if it's a specific type of click
            if (data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' ||
                ((_a = data === null || data === void 0 ? void 0 : data.target) === null || _a === void 0 ? void 0 : _a.innerText) === 'Set Up Now') {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">set up now button</span>. What made you decide to subscribe to this product?';
                placeholder =
                    'E.g., I like this brand;\nI want to get a discount by subscribing;\nI have used this product before ...';
            }
            else if (data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' ||
                data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' ||
                ((_b = data['data-semantic-id']) === null || _b === void 0 ? void 0 : _b.endsWith('buy_now')) ||
                ((_c = data === null || data === void 0 ? void 0 : data.target) === null || _c === void 0 ? void 0 : _c.id) === 'buy-now-button') {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">buy now button</span>. What do you like about this particular product?';
                placeholder =
                    'E.g., I like some product features;\nI want to get a discount by buying now;\nI have used this product before ...';
            }
            else if (((_d = data['data-semantic-id']) === null || _d === void 0 ? void 0 : _d.endsWith('add_to_cart')) ||
                data.target.id === 'add-to-cart-button' ||
                data.target.name === 'submit.addToCart' ||
                data.target.innerText === 'Add to Cart') {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">add to cart button</span>. What made you decide to add this item to your cart?';
                placeholder =
                    'E.g., I want to buy this product;\nI want to compare with other options;\nI want to save for future ...';
            }
            else if (data['data-semantic-id'] === 'nav_bar.search_button') {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">search button</span>. Why / how did you decide to make this search?';
                placeholder =
                    'E.g., I want to search for a gift for my son;\nNot satisfied with the previous search term ...';
            }
            else if (((_e = data['data-semantic-id']) === null || _e === void 0 ? void 0 : _e.startsWith('refinements.')) ||
                ((_f = data['data-semantic-id']) === null || _f === void 0 ? void 0 : _f.startsWith('filters.'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this <span class="highlight-question-blue">filter</span>. Why did you use this filter?';
                placeholder = 'E.g., I have a budget constraint;\nI like specific brand ...';
            }
            else if ((_g = data['data-semantic-id']) === null || _g === void 0 ? void 0 : _g.startsWith('product_options.')) {
                question =
                    'You <span class="highlight-question">clicked</span> on this <span class="highlight-question-blue">product option</span>. Why did you click this product option?';
                placeholder = 'E.g., I want to check the detail of the other options;\nI like this look ...';
            }
            else if ((_h = data['data-semantic-id']) === null || _h === void 0 ? void 0 : _h.endsWith('check_out')) {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">checkout button</span>. What made you decide to checkout?';
                placeholder = 'I decided to checkout because...';
            }
            else if ((_j = data['data-semantic-id']) === null || _j === void 0 ? void 0 : _j.endsWith('decrease_quantity_by_one')) {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">decrease quantity</span> button. Why did you click this button?';
                placeholder = 'I decreased quantity because...';
            }
            else if ((_k = data['data-semantic-id']) === null || _k === void 0 ? void 0 : _k.endsWith('increase_quantity_by_one')) {
                question =
                    'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">increase quantity</span> button. Why did you click this button?';
                placeholder = 'I increased quantity because...';
            }
            else if (((_l = data['data-semantic-id']) === null || _l === void 0 ? void 0 : _l.startsWith('search_results.')) ||
                ((_m = data['data-semantic-id']) === null || _m === void 0 ? void 0 : _m.startsWith('product_list.')) ||
                (((_o = data['data-semantic-id']) === null || _o === void 0 ? void 0 : _o.startsWith('active_item_list.')) &&
                    ((_p = data['data-semantic-id']) === null || _p === void 0 ? void 0 : _p.endsWith('.product_detail'))) ||
                ((_q = data.target.className) === null || _q === void 0 ? void 0 : _q.includes('sc-product-link'))) {
                question =
                    'You <span class="highlight-question">clicked</span> on this <span class="highlight-question-blue">product</span>. Why did you click on this product?';
                placeholder =
                    'E.g., This product is on sale;\nI like the look of this product;\nI want to compare with other options ...';
            }
            else {
                question =
                    'We noticed that you just had a <span class="highlight-question">click</span> action. Why did you do that?';
                placeholder = 'E.g., I want to read reviews;\nI want to compare with other options ...';
            }
            break;
        case 'scroll':
            const scrollDirection = data.scrollDistance_Y < 0 ? 'up' : 'down';
            question = `We saw that you <span class="highlight-question">scrolled ${scrollDirection}</span> the page. What are you looking for?`;
            placeholder = 'I am looking for (e.g., specific products / reviews / information)...';
            break;
        case 'input':
            question =
                'You <span class="highlight-question">typed</span> in this input field. What are you searching for?';
            placeholder = 'I want to find ...';
            break;
        case 'navigation':
            if (data.navigationType === 'back') {
                question =
                    'Why did you decide to <span class="highlight-question">return</span> to this page?';
                placeholder = 'I returned to this page because...';
            }
            else if (data.navigationType === 'forward') {
                question =
                    'Why did you decide to <span class="highlight-question">return</span> to this page?';
                placeholder = 'I returned to this page because...';
            }
            else {
                question = `What is the reason for this <span class="highlight-question">${data.navigationType} navigation</span>?`;
                placeholder = 'Enter your reason here...';
            }
            break;
        case 'tabActivate':
            question = `Why did you <span class="highlight-question">leave and come back</span> to this tab?`;
            placeholder = 'E.g., I was doing something else;\nI was looking for a different product ...';
            break;
        default:
            question = `What is the reason for the ${eventType} action?`;
            placeholder = 'Enter your reason here...';
            break;
    }
    return { question, placeholder };
}
function getHighLevelQuestion() {
    const question = '<span class="highlight-question-blue">High-level Intention</span>: What do you want to do in this shopping session?';
    const placeholder = 'E.g., I want to buy a laptop for the lab;\nI just want to explore gift options for my boyfriend;\nI am just randomly browsing ...';
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
        if (message.action === 'show_popup_session') {
            console.log('show_popup_session', message);
            // assert there isn't already a popup
            if (document.getElementById('reason-modal')) {
                sendResponse({ success: false, message: 'popup already exists' });
                return;
            }
            // Use the Vue app to show the modal
            const event = new CustomEvent('show-modal-session', {
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
        // if (message.action === 'showReminder') {
        //   console.log('showReminder')
        //   if (document.getElementById('reason-modal')) {
        //     sendResponse({ success: false, message: 'reminder:popup already exists' })
        //     return
        //   }
        //   const data = message.data
        //   const user_id = message.user_id
        //   if (user_id) {
        //     window.$dialog?.info({
        //       title: 'Thank you for participating!',
        //       content: `You have contributed ${data.on_date} rationales in the last 7 days.
        //     You have contributed ${data.all_time} rationales in total. `
        //     })
        //   } else {
        //     window.$dialog?.info({
        //       title: 'Thank you for participating!',
        //       content: `Please enter your user id to continue.
        //       If you don't have one, please contact us at hai-user-study-2@khoury.northeastern.edu`
        //     })
        //   }
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxNQUFNLENBQUM7SUFDcEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLElBQUksRUFBRTtLQUNQO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AbWVkdi9maW5kZXIvZmluZGVyLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3Njcm9sbF9wcm9iYWJpbGl0eSA9IDAuMDVcbmV4cG9ydCBjb25zdCBwb3B1cF9jbGlja19wcm9iYWJpbGl0eSA9IDAuMlxuZXhwb3J0IGNvbnN0IHBvcHVwX25hdmlnYXRpb25fcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgcG9wdXBfdGFiQWN0aXZhdGVfcHJvYmFiaWxpdHkgPSAwLjE1XG5leHBvcnQgY29uc3QgZm9sZGVyX25hbWUgPSBgdXNlcl9pbnRlcmFjdGlvbl9kYXRhYCAvLyB0aGUgZm9sZGVyIG5hbWUgdG8gc2F2ZSB0aGUgZGF0YVxuZXhwb3J0IGNvbnN0IHppcCA9IHRydWUgLy8gd2hldGhlciB0byB6aXAgdGhlIGRhdGEgd2hlbiBkb3dubG9hZGluZ1xuZXhwb3J0IGNvbnN0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vYXBpL3VwbG9hZCdcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby9hcGknXG5leHBvcnQgY29uc3QgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkID0gJ2hhaWxhYidcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZXMgPSBbJ3d3dy5hbWF6b24uY29tJ11cbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L2ludGVyYWN0aW9uc19yZWNvcmRfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IHJhdGlvbmFsZV9zdGF0dXNfdXJsID0gYCR7YmFzZV91cmx9L3JhdGlvbmFsZV9zdGF0dXNgXG5leHBvcnQgY29uc3QgcHVyY2hhc2Vfc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9vcmRlcl9zdGF0dXNgXG5leHBvcnQgY29uc3QgY2hlY2tfdXNlcl9pZF91cmwgPSBgJHtiYXNlX3VybH0vY2hlY2tfdXNlcl9pZGBcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jaGVja291dC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9jcGUveW91cnBheW1lbnRzLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL3NpZ25pbicsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2FwL2N2Zi8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9wcm9maWxlLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2F4L2FjY291bnQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJvZHVjdC9oYW5kbGUtYnV5LWJveC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvcHJpbWVjZW50cmFsL2VkaXRQYXltZW50UHJlZmVyZW5jZSdcbl1cbmV4cG9ydCBjb25zdCBzY3JvbGxfdGhyZXNob2xkID0gMzAwXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3BvcHVwX2ludGVydmFsID0gMTAgKiAxMDAwIC8vIDEwIHNlY29uZHNcbmV4cG9ydCBjb25zdCBuZXdfc2Vzc2lvbl9pbnRlcnZhbCA9IDEwMDAgKiA2MCAqIDYwICogNCAvLyA0IGhvdXJzXG5leHBvcnQgY29uc3QgY3VycmVudF93ZWVrX2luZm9fdXJsID0gYCR7YmFzZV91cmx9L2N1cnJlbnRfd2Vla19pbmZvYFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxvZ28nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0hvbWVwYWdlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWZseW91dC1zZWFyY2hBamF4JyxcbiAgICAgIG5hbWU6ICdzdWdnZXN0ZWRfdGVybXMnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmNhcmRzX2Nhcm91c2VsX3dpZGdldC1zdWctY29sdW1uJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5jYXJkc19jYXJvdXNlbF90ZXh0X2xlZnRfd2lkZ2V0LXN1Zy10ZXh0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1zdWdnZXN0aW9uLWNvbnRhaW5lcicsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1oYW1idXJnZXItbWVudScsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdNZW51J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LXhzaG9wJyxcbiAgICAgIG5hbWU6ICdzdG9yZXMnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBjYXJ0X3NpZGVfYmFyID0ge1xuICBzZWxlY3RvcjogJyNuYXYtZmx5b3V0LWV3YycsXG4gIG5hbWU6ICdjYXJ0X3NpZGVfYmFyJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtbXVsdGktY2FydC1kcm9wZG93bicsXG4gICAgICBuYW1lOiAnY2FydF9zZWxlY3RvcicsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWNhcnQtaGVhZGVyJyxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZW0ucXVlcnlTZWxlY3RvcignaW1nJyk/LmFsdCB8fCAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWNvbXBhY3Qtdmlldy1jYXJ0LWhlYWRlciBkaXYuZXdjLWNhcnQtaGVhZGVyLWxvZ28nLFxuICAgICAgbmFtZTogJ29wZW5fY2FydF9zZWxlY3RvcicsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnT3BlbiBDYXJ0IFNlbGVjdG9yJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWNvbXBhY3QtYWN0aW9ucyBhJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNld2MtY29tcGFjdC1ib2R5IHVsJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGRpdltpZF49J3NjLWl0ZW0nXVwiLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXYuZXdjLWl0ZW0taW1hZ2UgYS5zYy1wcm9kdWN0LWxpbmsgaW1nOm5vdCguZXdjLXNmbC1pbWFnZS1zbWFsbCknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdGl0bGVFbT8uYWx0IHx8ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKScsXG4gICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmV3Yy11bml0LXByaWNlJyxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuW2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0nLFxuICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1cIl0nLFxuICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInFzLXdpZGdldC1kcm9wZG93bi1jb250YWluZXItXCJdJyxcbiAgICAgICAgICAgICAgICAgIG1hdGNoX2lkX3dpdGhfcGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1kZWxldGUtaWNvbi1jb250YWluZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2RhdGEtYS1zZWxlY3Rvcj1cImRlY3JlbWVudFwiXScsXG4gICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdidXR0b25bZGF0YS1hLXNlbGVjdG9yPVwiaW5jcmVtZW50XCJdJyxcbiAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uZXdjLXVuaXQtcHJpY2UnKVxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAnZGl2LmV3Yy1pdGVtLWltYWdlIGEuc2MtcHJvZHVjdC1saW5rIGltZzpub3QoLmV3Yy1zZmwtaW1hZ2Utc21hbGwpJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5hbHRcbiAgICAgICAgICAgIGNvbnN0IHVybEVtID0gdGl0bGVFbT8ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuW2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0sIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2NhcnRfaXRlbXMnLFxuICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAge1xuICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICd1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKScsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIC8vIGNsaWNrX3NlbGVjdG9yOiBcImFcIixcbiAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cbiAgICB9LFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkXG4gICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcbiAgICAgICAgPy50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL1sgXS9nLCAnXycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnJlcGxhY2UoL15fK3xfKyQvZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC9bX1xcZF0rJC8sICcnKVxuXG4gICAgICBsZXQgdXJsID0gJydcblxuICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCdocmVmJykpIHtcbiAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICB9XG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6XG4gICAgICBcInVsID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgbmFtZTogJ21vcmVfb3B0aW9ucycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiYVtkYXRhLWNzYS1jLWZ1bmMtZGVwcz0nYXVpLWRhLWEtZXhwYW5kZXItdG9nZ2xlJ11cIixcbiAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgLy8gdGV4dCA9ICdDbGVhciBPcHRpb24gJyArIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gJ18nXG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5hbWVFbSA9IGVsZW1lbnQuY2xvc2VzdCgndWwnKT8ucGFyZW50RWxlbWVudD8uY2xvc2VzdCgndWwnKVxuICAgICAgICAgICAgPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgPy50cmltKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bIF0vZywgJ18nKVxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXyt8XyskL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tfXFxkXSskLywgJycpXG5cbiAgICAgICAgICBsZXQgdXJsID0gJydcblxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgICAgICB1cmwgPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy4nICsgbmFtZSxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHByb2R1Y3RfZmFjdHMgPSB7XG4gIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG59XG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbn1cblxuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNzZWxlY3RRdWFudGl0eSwgZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0nLFxuICBuYW1lOiAncXVhbnRpdHlfc2VsZWN0b3InLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3RfcXVhbnRpdHknLCBkYXRhOiB7IHF1YW50aXR5OiBlbS5pbm5lclRleHQgfSB9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2J1dHRvbicsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gIHNlbGVjdG9yOiAnI3JlcGxlbmlzaG1lbnRGcmVxdWVuY3lfZmVhdHVyZV9kaXYnLFxuICBuYW1lOiAnZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yJyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI3JjeE9yZEZyZXFPbm1sV3JhcHBlciBzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc2VsZWN0JyxcbiAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogJyNyY3gtc3Vic2NyaWJlLXN1Ym1pdC1idXR0b24tYW5ub3VuY2UnLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xpY2thYmxlOiB0cnVlLFxuICBuYW1lOiAnc2V0X3VwX25vdycsXG4gIGNsYXNzOiAncHJvZHVjdC1zZXQtdXAtbm93J1xufVxuXG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICBzZWxlY3RvcjpcbiAgICBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ10sICNmcmVzaEFkZFRvQ2FydEJ1dHRvbiBpbnB1dCwgI2RlYWxzeF9hdGNfYnRuXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gIGNsYXNzOiAncHJvZHVjdC1hZGQtdG8tY2FydCdcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICBzZWxlY3RvcjogXCJpbnB1dFtuYW1lPSdzdWJtaXQuYnV5LW5vdyddXCIsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdidXlfbm93JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnXG59XG5cbmV4cG9ydCBjb25zdCBnb190b19jYXJ0X2J1dHRvbl9mb3JfZmxhc2hfc2FsZXMgPSB7XG4gIHNlbGVjdG9yOiAnI2RlYWxzeF9pbmNhcnQgc3Bhbi5hLWJ1dHRvbicsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGlja2FibGU6IHRydWUsXG4gIG5hbWU6ICdmcm9tX3RleHQnXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICBzZWxlY3RvcjogJyNidXlCb3hBY2NvcmRpb24gPiBkaXYuYS1ib3guY2Vsd2lkZ2V0JyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjpcbiAgICAgICAgXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddLCBkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X21vYmlsZV9hY2NvcmRpb25faGVhZGVyJ11cIixcbiAgICAgIG5hbWU6ICdhY2NvcmRpb25fc2VsZWN0b3InLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnaDUgc3Bhbi5hLXRleHQtYm9sZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yLFxuICAgICAgICBzZXRfdXBfbm93X2J1dHRvbixcbiAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICBnb190b19jYXJ0X2J1dHRvbl9mb3JfZmxhc2hfc2FsZXMsXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfZ3JvdXBfMl9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNwaWNrVXBPZmZlckRpc3BsYXknLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcm91c2VsX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkOm5vdCguYS1jYXJvdXNlbC1jYXJkLWVtcHR5KSwgI2dyaWRJdGVtUm9vdCwgbGkgPiBzcGFuLmEtbGlzdC1pdGVtJyxcbiAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gIHRleHRfanM6IChlbSkgPT4ge1xuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2EgZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0sIGEgc3Bhbi50aXRsZSwgYSBkaXZbY2xhc3MqPVwic2MtY3NzLWxpbmUtY2xhbXBcIl0sIGEgc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdLCBkaXZbZGF0YS1jeT1cInRpdGxlLXJlY2lwZVwiXSwgYVtpZCo9XCJ0aXRsZVwiXSwgYS5zdy1wcm9kdWN0LXRpdGxlLCBkaXZbaWRePVwic3BfcmhmX2NhcnRcIl0gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8udGl0bGUgfHwgdGl0bGVFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgY29uc3QgaW1nRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2ltZ1tjbGFzcyo9XCJwcm9kdWN0LWltYWdlXCJdLCBpbWcuYS1keW5hbWljLWltYWdlLCBpbWdbY2xhc3MqPVwiY2Fyb3VzZWwtaW1hZ2VcIl0gaW1nLnMtaW1hZ2UnXG4gICAgKVxuICAgIGNvbnN0IGltZ0FsdCA9IGltZ0VtPy5hbHRcbiAgICByZXR1cm4gdGl0bGUgfHwgaW1nQWx0IHx8ICcnXG4gIH0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdhOmhhcyhpbWdbY2xhc3MqPVwicHJvZHVjdC1pbWFnZVwiXSwgaW1nLmEtZHluYW1pYy1pbWFnZSwgaW1nW2NsYXNzKj1cImNhcm91c2VsLWltYWdlXCJdKSwgaW1nLnMtaW1hZ2UsIGFbdGFyZ2V0PVwiX3RvcFwiXTpoYXMoaW1nKTpub3QoOmhhcyhkaXYsIHNwYW4pKSwgYS5zdy1wcm9kdWN0LWltYWdlLWxpbmsnLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjpcbiAgICAgICAgJ2EgZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0sIGEgZGl2Omhhcyg+IHNwYW4udGl0bGUpLCBhIGRpdltjbGFzcyo9XCJzYy1jc3MtbGluZS1jbGFtcFwiXSwgYTpoYXMoc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdKSwgZGl2W2RhdGEtY3k9XCJ0aXRsZS1yZWNpcGVcIl0sIGFbaWQqPVwidGl0bGVcIl0sIGEuc3ctcHJvZHVjdC10aXRsZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IFRpdGxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjYWRmZWVkYmFja2RldGFpbHMgPiBhJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IERldGFpbHMnLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNpbmdsZVN3YXRjaGVzQ29udGFpbmVyXCJdJyxcbiAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiX2xpbmtfXCJdJyxcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidmFyaWF0aW9uTGlua1wiXSBhJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaVtjbGFzcyo9XCJzdGFyXCJdKSwgYTpoYXMoaVtkYXRhLWN5PVwicmV2aWV3cy1yYXRpbmdzLXNsb3RcIl0pLCBhLmFkUmV2aWV3TGluaycsXG4gICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmcnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGVtLnRpdGxlIHx8IGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAne30gcmV2aWV3cycsXG4gICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nLWNvdW50JyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZ19jb3VudCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICAnYVthcmlhLWRlc2NyaWJlZGJ5Kj1cInNwX2RldGFpbF90aGVtYXRpYy1kZWFsc1wiXTpub3QoOmhhcyhzcGFuLmEtcHJpY2UpKSwgYVthcmlhLWRlc2NyaWJlZGJ5Kj1cInNwX2RldGFpbF90aGVtYXRpYy1yZWNlbnRfaGlzdG9yeVwiXTpub3QoOmhhcyhzcGFuLmEtcHJpY2UpKScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzYy1wcmljZVwiXScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInNjLXByaWNlXCJdJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3ByaWNlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdkaXYuYS1zZWN0aW9uLmFvay1yZWxhdGl2ZTpoYXMoc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4pLCBkaXYuYS1jb2xvci1wcmljZTpoYXMoc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4pLCBhW2FyaWEtZGVzY3JpYmVkYnk9XCJwcmljZS1saW5rXCJdOmhhcyhzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbiknLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2EucEJvb2tzLXNmLXBvaW50cy1jb21wb25lbnQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAncHJvZHVjdF9wb2ludHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdLCBzcGFuW2NsYXNzKj1cImFjdGlvbkJ1dHRvblwiXTpoYXMoaS5hLWljb24tY2FydCknLFxuICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgVG8gQ2FydCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXSwgZGl2W2lkXj1cImF0Y1N0ZXBwZXJTZWN0aW9uXCJdJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ10sIGJ1dHRvbltkYXRhLWFjdGlvbj0ncmVtb3ZlJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZScsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddLCBzcGFuLmF0Y1N0ZXBwZXJRdWFudGl0eVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ10sIGJ1dHRvbltkYXRhLWFjdGlvbj0nYWRkJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZScsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbiBhLCBkaXZbZGF0YS1jb21wb25lbnQtaWQ9XCJzZWVBbGxCdXlpbmdPcHRpb25zQnV0dG9uXCJdIHNwYW4uYS1idXR0b24nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5KU09OU3RyaW5nID0gZW1cbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hZGZlZWRiYWNrZGV0YWlsc10nKVxuICAgICAgPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWRmZWVkYmFja2RldGFpbHMnKVxuICAgIGxldCBhc2luSlNPTlxuICAgIGlmIChhc2luSlNPTlN0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc2luSlNPTiA9IEpTT04ucGFyc2UoYXNpbkpTT05TdHJpbmcpXG4gICAgfVxuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZGl2W2lkKj1cInNjLXR1cmJvLWNvbnRhaW5lclwiXSwgZGl2W2RhdGEtYXNpbl0sIGlucHV0W2RhdGEtYXNpbl0sIHNwYW5bZGF0YS1jc2EtYy1pdGVtLWlkXSdcbiAgICApXG4gICAgY29uc3QgYXNpbiA9XG4gICAgICBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJykgfHxcbiAgICAgIGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdpZCcpPy5zcGxpdCgnLScpLnBvcCgpIHx8XG4gICAgICBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1jc2EtYy1pdGVtLWlkJykuc3BsaXQoJy4nKS5wb3AoKSB8fFxuICAgICAgYXNpbkpTT04/LmFzaW5JZCB8fFxuICAgICAgJydcbiAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignYSBzcGFuW2NsYXNzKj1cInNjLXByaWNlXCJdLCBzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2EgZGl2W2NsYXNzKj1cInNjLXRydW5jYXRlLWRlc2t0b3BcIl0sIGEgc3Bhbi50aXRsZSwgYSBkaXZbY2xhc3MqPVwic2MtY3NzLWxpbmUtY2xhbXBcIl0sIGEgc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdLCBkaXZbZGF0YS1jeT1cInRpdGxlLXJlY2lwZVwiXSwgYVtpZCo9XCJ0aXRsZVwiXSwgYS5zdy1wcm9kdWN0LXRpdGxlJ1xuICAgIClcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LnRpdGxlIHx8IHRpdGxlRW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgIGNvbnN0IGltZ0VtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbWdbY2xhc3MqPVwicHJvZHVjdC1pbWFnZVwiXSwgaW1nLmEtZHluYW1pYy1pbWFnZSwgaW1nW2NsYXNzKj1cImNhcm91c2VsLWltYWdlXCJdIGltZy5zLWltYWdlJ1xuICAgIClcbiAgICBjb25zdCBpbWdBbHQgPSBpbWdFbT8uYWx0XG4gICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2E6aGFzKGRpdltjbGFzcyo9XCJzYy10cnVuY2F0ZS1kZXNrdG9wXCJdKSwgYTpoYXMoc3Bhbi50aXRsZSksIGE6aGFzKHNwYW5bY2xhc3MqPVwidGl0bGVcIl0pJ1xuICAgIClcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdkaXZbbmFtZT1cImF4LXFzXCJdIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXSwgZGl2W2lkXj1cImF0Y1N0ZXBwZXJTZWN0aW9uXCJdIHNwYW4uYXRjU3RlcHBlclF1YW50aXR5J1xuICAgIClcbiAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlIHx8IGltZ0FsdCB8fCAnJywgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2FydCA9IFtcbiAgbmF2LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY29sbGFwc2VkLWNhcnRzLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ2NhcnRzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1jb2xsYXBzZWQtY2FydC1jb250YWluZXInLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1jYXJ0LWhlYWRlcicpXG4gICAgICAgICAgY29uc3QgdGl0bGUgPVxuICAgICAgICAgICAgdGl0bGVFbT8ucXVlcnlTZWxlY3RvcignaDJbYXJpYS1sYWJlbF0nKT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcbiAgICAgICAgICAgIHRpdGxlRW0/LmlubmVyVGV4dCB8fFxuICAgICAgICAgICAgJ2NhcnQnXG4gICAgICAgICAgcmV0dXJuIHRpdGxlXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtY2FydC1oZWFkZXI6aGFzKGEgaDIgaW1nKScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gZW0ucXVlcnlTZWxlY3RvcignYSBoMiBpbWcnKT8uYWx0IHx8ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLW5hbWU9XCJjb2xsYXBzZWRfaXRlbV9saXN0XCJdJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdpdGVtX2xpc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgbGFiZWwnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaW1hZ2Utd3JhcHBlciBhJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHVsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtZGVsaXZlcnktbWVzc2FnaW5nJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkuc2MtcHJvZHVjdC12YXJpYXRpb24nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zbnMtb3B0LWluLWxpbmstZGVza3RvcCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Euc25zLXJlY3VycmVuY2UtcGVyaW9kLXNlbGVjdG9yJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5IGV2ZXJ5OiB7fSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ10sIGJ1dHRvbltkYXRhLWFjdGlvbj0nYS1zdGVwcGVyLWRlY3JlbWVudCddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgaW5wdXRbZGF0YS1hY3Rpb249J3NhdmUtZm9yLWxhdGVyJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NhdmVfZm9yX2xhdGVyJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByb2R1Y3QtcHJpY2Ugc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdsaS5zYy1kZWxpdmVyeS1tZXNzYWdpbmcnKVxuICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGlucHV0JylcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkRW0/LmdldEF0dHJpYnV0ZSgnY2hlY2tlZCcpICE9PSBudWxsXG4gICAgICAgICAgY29uc3Qgb3B0aW9uc0VtID0gZW0ucXVlcnlTZWxlY3RvckFsbCgnbGkuc2MtcHJvZHVjdC12YXJpYXRpb24gPiBzcGFuJylcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkVtIG9mIG9wdGlvbnNFbSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5RW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXRleHQtYm9sZCcpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bm90KC5hLXRleHQtYm9sZCknKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5ID0gb3B0aW9uS2V5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHsgW29wdGlvbktleV06IG9wdGlvblZhbHVlIH1cbiAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnksIHF1YW50aXR5LCBzZWxlY3RlZCwgb3B0aW9ucyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCdcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LmEtbW9kYWwtc2Nyb2xsZXIgZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICBuYW1lOiAnc3Vic2NyaWJlX25fc2F2ZV9wb3BvdmVyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbi5hLWJ1dHRvbi1jbG9zZScsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UnLFxuICAgICAgICBhZGRfVGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1mb290ZXIgc3Bhbi5hLWJ1dHRvbi1pbm5lcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbi10ZXh0J1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3Nucy1hY2NvcmRpb24nLFxuICAgIHVzZV9yb290OiB0cnVlLFxuICAgIG5hbWU6ICdzdWJzY3JpYmVfbl9zYXZlX2ZyZXF1ZW5jeV9zZWxlY3Rvcl9wb3BvdmVyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWJveCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2Mtc2Vjb25kYXJ5LWxpc3QnLFxuICAgIG5hbWU6ICdzZWNvbmRhcnktbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcjc2Mtc2Vjb25kYXJ5LWxpc3QtdGFiJyxcbiAgICAgICAgbmFtZTogJ3RhYnMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1hLW5hbWU9XCJzYXZlZENhcnRcIl0nLFxuICAgICAgICBuYW1lOiAnc2F2ZWRfZm9yX2xhdGVyJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5taXNzaW9uLWNhdGVnb3JpZXMnLFxuICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5taXNzaW9uLWNhdGVnb3J5Om5vdCguc2MtaGlkZGVuKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lm1pc3Npb24tZXhwYW5kZXIgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1zYXZlZC1jYXJ0LWl0ZW1zJyxcbiAgICAgICAgICAgIG5hbWU6ICdzYXZlZF9pdGVtcycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1hc2luXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2xpLnNjLWl0ZW0tcHJvZHVjdC10aXRsZS1jb250IHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pbWFnZS13cmFwcGVyJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYS5zYy1ncmlkLWl0ZW0tcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LnNjLWFjdGlvbi1tb3ZlLXRvLWNhcnQsIHNwYW4uc2MtYWN0aW9uLWRlbGV0ZSBpbnB1dCwgc3Bhbi5hZGQtdG8tbGlzdC10ZXh0IGlucHV0LCBzcGFuW2RhdGEtYWN0aW9uPVwiY29tcGFyZVwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW0udmFsdWUgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlIHNwYW4uYS1vZmZzY3JlZW4sIGRpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcm9kdWN0LXByaWNlOm5vdCg6aGFzKHNwYW4pKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnbGkuc2MtaXRlbS1wcm9kdWN0LXRpdGxlLWNvbnQgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Euc2MtZ3JpZC1pdGVtLXByb2R1Y3QtdGl0bGUnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zRW0gPSBlbS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5zYy1wcm9kdWN0LXZhcmlhdGlvbiA+IHNwYW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbkVtIG9mIG9wdGlvbnNFbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25LZXlFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdGV4dC1ib2xkJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuOm5vdCguYS10ZXh0LWJvbGQpJylcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5ID0gb3B0aW9uS2V5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlRW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7IFtvcHRpb25LZXldOiBvcHRpb25WYWx1ZSB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzYXZlZF9pdGVtcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIG9wdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1hLW5hbWU9XCJidXlJdEFnYWluXCJdJyxcbiAgICAgICAgbmFtZTogJ2J1eV9pdF9hZ2FpbicsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtbGlzdC1pdGVtJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Euc2MtcHJvZHVjdC1saW5rJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1wcm9kdWN0LWltYWdlLWRlc2t0b3AnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Euc2MtcHJvZHVjdC1saW5rJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgVGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNjLWF0Yy1hZGQtdG8tY2FydC1idXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdpZCcpPy5zcGxpdCgnLScpLmF0KC0xKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5zYy1wcmljZScpXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Euc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhLnNjLXByb2R1Y3QtbGluaycpXG4gICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2J1eV9pdF9hZ2FpbicsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIHRleHRfc2VsZWN0b3I6ICcuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMycsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICB9LFxuICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgZnJlc2hfY2Fyb3VzZWxfY2FyZCA9IHtcbiAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQsIGRpdltpZF49XCJncmlkRWxlbWVudFwiXScsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYTpoYXMoZGl2LmEtaW1hZ2UtY29udGFpbmVyKScsXG4gICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiBcInNwYW5baWRePSdxcy13aWRnZXQtYXRjLWJ1dHRvbiddXCIsXG4gICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBUbyBDYXJ0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1jb250YWluZXItYXRmY1wiXScsXG4gICAgICBuYW1lOiAncXVhbnRpdHlfc2VsZWN0b3InLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxePSdSZW1vdmUnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVjcmVhc2UgcXVhbnRpdHkgYnkgMScsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25baWRePSdxcy13aWRnZXQtYnV0dG9uLWF0ZmMnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsXj0nQWRkJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0luY3JlYXNlIHF1YW50aXR5IGJ5IDEnLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2EgPiBzcGFuID4gc3Bhbi5hLXRydW5jYXRlJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlsJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2ID4gc3BhbiA+IHNwYW4gPiBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwicHJpY2VUb1BheVwiXSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCBhLmEtc2l6ZS1taW5pJyxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9XG4gIF0sXG4gIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1jc2EtYy1pdGVtLWlkXj1cImFtem4xLmFzaW5cIl0nKVxuICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1jc2EtYy1pdGVtLWlkJyk/LnNwbGl0KCc6JylbMF0uc3BsaXQoJy4nKS5wb3AoKVxuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwicHJpY2VUb1BheVwiXSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignYTpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpJylcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1jb250YWluZXItYXRmY1wiXSBidXR0b25baWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1hdGZjXCJdJ1xuICAgIClcbiAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX3N1YnN0aXR1dGlvbl9jYXJkID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5zdWJzLWNhcnQtaXRlbScsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc3BhY2luZy10b3AtYmFzZSBzcGFuLmEtc2l6ZS1iYXNlJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNwYWNpbmctdG9wLWJhc2Ugc3Bhbi5hLXNpemUtYmFzZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zcGFjaW5nLXRvcC1taW5pIHNwYW4uYS1jb2xvci1wcmljZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWNhcnQtaXRlbS1hc2luXScpXG4gICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWNhcnQtaXRlbS1hc2luJylcbiAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LmEtc3BhY2luZy10b3AtYmFzZSBzcGFuLmEtc2l6ZS1iYXNlJylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuYS1zcGFjaW5nLXRvcC1taW5pIHNwYW4uYS1jb2xvci1wcmljZScpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyBhc2luLCB0aXRsZSwgcHJpY2UgfSB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX2NhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtcHJvZHVjdC1pbWFnZS1kZXNrdG9wIGEgaW1nJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYWN0aW9uLWxpbmtzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsXj0nUmVtb3ZlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi1mbGV4LXdyYXBwZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1YW50aXR5X2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1jb250YWluZXItYXRmY1wiXSBzcGFuW2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWF0Yy1hdGZjXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsXj0nQWRkJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBhc2luID0gZW0ucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJpY2UnKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlJylcbiAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYWN0aW9uLWxpbmtzIGRpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbidcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBxdWFudGl0eSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAgZnJlc2hfY2Fyb3VzZWxfY2FyZFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGlucHV0W25hbWVePVwicHJvY2VlZFRvQUxNQ2hlY2tvdXRcIl0nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggYScsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGFkZF90ZXh0OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1jYXJ0LWFib3ZlLWFjdGlvbnMgc3Bhbi5hLWJ1dHRvbiwgI3NjLWNhcnQtYWJvdmUtYWN0aW9ucyBhJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgbHV4dXJ5X2Nhcm91c2VsX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkLCBkaXZbaWRePVwiZ3JpZEVsZW1lbnRcIl0nLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjYm9uZFdhbGxlZENhcm91c2VsRWxlbWVudERlc2NyaXB0aW9uJ1xuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpPy5zcGxpdCgnLycpLmF0KC0yKVxuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhICNib25kV2FsbGVkQ2Fyb3VzZWxFbGVtZW50RGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGx1eHVyeV9jYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLXByb2R1Y3QtaW1hZ2UtZGVza3RvcCBhIGltZycsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1hY3Rpb24tbGlua3MnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltkYXRhLWFjdGlvbj1cImEtc3RlcHBlci1kZWNyZW1lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1YW50aXR5X2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2RhdGEtYWN0aW9uPVwiYS1zdGVwcGVyLWluY3JlbWVudFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJylcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5zYy1wcm9kdWN0LXRpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcigndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0x1eHVyeUNoZWNrb3V0XCJdJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgYnV5X2FnYWluID0gW1xuICBuYXYsXG4gIGNhcnRfc2lkZV9iYXIsXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb246aGFzKGRpdi5maWx0ZXItY29udGFpbmVyKScsXG4gICAgbmFtZTogJ2ZpbHRlcnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmZpbHRlci1jb250YWluZXInLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtLmlubmVyVGV4dFxuICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbVxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXYuZmlsdGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInKVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYWxtLWdyaWQtZGVza3RvcC1ncmlkLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ3Byb2R1Y3RfbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZ3JpZENlbGxcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdncmlkRWxlbWVudCddXCIsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VkX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0naW5mbyddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcGVuX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybSBzcGFuLmEtYnV0dG9uLWlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZXhwYW5kZWRJbWFnZSddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UgUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltpZF49J2Nsb3NlZENhcmQnXSBkaXZbaWRePSdpbmZvJ11cIilcbiAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSAjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50J1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtc19jbG9zZWQnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgZGVsaXZlcnkgfSB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlYXR1cmVkXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBkaXZbaWRePVwiZGV0YWlsQ29udGVudFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0YWlsZWRfY29udGVudCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYXNpbkRldGFpbFJldmlld3NSb3dcIl0gYScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdpLmEtaWNvbi1zdGFyLW1pbmknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltjbGFzcyo9J211bHRpT2ZmZXJQaWxsQ29udGFpbmVyJ10gYVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWJ1eWluZ29wdGlvbnR5cGU9J05FVyddLCBkaXZbY2xhc3MqPSdhc2luRGV0YWlsSW5mb0NvbHVtbnMnXTpoYXMoaW5wdXRbbmFtZT0nc3VibWl0LmFkZFRvQ2FydCddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29uZV90aW1lX3B1cmNoYXNlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0sIGRpdltjbGFzcyo9XCJhc2luRGV0YWlsQWN0aW9uc1Jvd1wiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtpZF49XCJidXktbm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1eV9ub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJmZWVkYmFja0J1dHRvblNlY3Rpb25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlX2l0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLmNsb3Nlc3QoJ2RpdltkYXRhLWFzaW5dJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltuYW1lPVwiYXgtcXNcIl0gZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0IHx8ICcxJ1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtc19vcGVuZWRfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSwgcXVhbnRpdHkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWJ1eWluZ29wdGlvbnR5cGU9J1NOUyddLCBkaXZbY2xhc3MqPSdzbnNVcHNlbGxCbG9ja0NvbnRhaW5lciddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3N1YnNjcmliZV9hbmRfc2F2ZScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0sIGRpdltjbGFzcyo9XCJhc2luRGV0YWlsUHVyY2hhc2VDb2x1bW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzbnNCdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0X3VwX3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0uY2xvc2VzdCgnZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zX29wZW5lZF9zbnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdkZXRhaWwtdmlldy1zaW1pbGFyLWl0ZW1zJ11cIixcbiAgICAgICAgICAgIG5hbWU6ICdzaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtaW1hZ2UtY29udGFpbmVyOmhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwicmV2aWV3c1Jvd1wiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2kuYS1pY29uLXN0YXItbWluaScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdLCBpbnB1dFtuYW1lXj1cImF0ZmNTaGltXCJdLCBidXR0b25bYXJpYS1sYWJlbD1cIkFkZCB0byBDYXJ0LiBDbGljayB0byBjaGFuZ2UgcXVhbnRpdHlcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJzZWVCdXlpbmdPcHRpb25zV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlZV9idXlpbmdfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdSZW1vdmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LnFzLXdpZGdldC1kcm9wZG93bi13cmFwcGVyIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtZHJvcGRvd24tZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Ryb3AgRG93biBPcHRpb24ge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtcXVhbnRpdHktY29udGFpbmVyLWF0ZmNcIl0gc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1xdWFudGl0eS1jaGFuZ2VsaW5rLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJxcy13aWRnZXQtc3VtbWFyeS1jb250YWluZXItYXRmY1wiXSBzcGFuW2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWF0Yy1hdGZjXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nQWRkJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRUaXRsZUVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2RpdltpZF49XCJmZWF0dXJlZFwiXScpXG4gICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cImRldGFpbENvbnRlbnRXcmFwcGVyXCJdIGFbaWRePVwidGl0bGVcIl0gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlID0gcGFyZW50VGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgID8udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwiZGVsaWdodEZhY2VvdXRcIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIilcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJlbnRUaXRsZSArICcuc2ltaWxhcl9pdGVtcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5IH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzbnNVcHNlbGxNb2RhbCcsXG4gICAgbmFtZTogJ3N1YnNjcmliZV9hbmRfc2F2ZV9wb3BvdmVyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJtb2RhbEhlYWRlclwiXScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cIm1vZGFsSGVhZGVyVGV4dFwiXScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2RhdGEtYWN0aW9uPVwiYS1wb3BvdmVyLWNsb3NlXCJdJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwibW9kYWxDb250ZW50XCJdJyxcbiAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Om5vdChbY2xhc3MqPVwiYnV0dG9uQ29udGFpbmVyXCJdKTpub3QoOmhhcyhzZWxlY3QpKScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tcHJvbXB0JyxcbiAgICAgICAgICAvLyAgIG5hbWU6ICdvcGVuX2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAvLyAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAvLyAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIC8vICAgdGV4dF9mb3JtYXQ6IFwiRGVsaXZlcnkgZXZlcnk6IHt9XCIsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJidXR0b25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImNhbmNlbEJ1dHRvbkNvbnRhaW5lclwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvbkNvbnRhaW5lclwiXSBpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgU3Vic2NyaXB0aW9uIHRvIENhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwibW9kYWxDb250ZW50XCJdJylcbiAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmlkPy5zcGxpdCgnLScpWzFdPy50cmltKClcbiAgICAgIHJldHVybiB7IG5hbWU6ICdwb3BvdmVyX2l0ZW0nLCBkYXRhOiB7IGFzaW4gfSB9XG4gICAgfVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwb3B1bGFyX3Byb2R1Y3RzID0gW1xuICB7XG4gICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICBuYXYsXG4gICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJyN6Z19oZWFkZXInLFxuICAgICAgICBuYW1lOiAnY2F0ZWdvcmllcycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInpnLWJhbm5lci1sYW5kaW5nLXBhZ2UtaGVhZGVyXCJdJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLWJyb3dzZS1yb290XCJdJyxcbiAgICAgICAgbmFtZTogJ2RlcGFydG1lbnRzJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJ6Zy1uYXYtdHJlZS1hbGxfc3R5bGVfemctcm9vdC1icm93c2UtaXRlbVwiXSA+IGEsIGRpdltjbGFzcyo9XCJ6Zy1uYXYtdHJlZS1hbGxfc3R5bGVfemctYnJvd3NlLWl0ZW1cIl0gPiBhJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cInpnLW5hdi10cmVlLWFsbF9zdHlsZV96Zy1yb290LWJyb3dzZS1pdGVtXCJdID4gc3BhbiwgZGl2W2NsYXNzKj1cInpnLW5hdi10cmVlLWFsbF9zdHlsZV96Zy1icm93c2UtaXRlbVwiXSA+IHNwYW4nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDEnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZywgaDEnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtY2Fyb3VzZWwtaGVhZGVyLXJvdyBhJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAge1xuICAgIG1hdGNoOiAnLycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ndy1jb2wnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgJ2gxIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMiBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDMgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgxOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSksIGgyOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSksIGgzOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSknLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnaDEgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgyIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMyBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDE6bm90KDpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpKSwgaDI6bm90KDpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpKSwgaDM6bm90KDpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpKScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcbiAgICAgICAgICAgICAgICAgICAgZW0ucXVlcnlTZWxlY3RvcignaW1nJyk/LmFsdCB8fFxuICAgICAgICAgICAgICAgICAgICBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpPy5pbm5lclRleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgZW0uaW5uZXJUZXh0IHx8XG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNhcmQtbWV0cmljcy1pZCo9XCJyaGZcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jYXJkLW1ldHJpY3MtaWQqPVwicnZpXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKT8uYWx0IHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2ZtYy9zdG9yZWZyb250JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW25hdiwgY2FydF9zaWRlX2Jhcl1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9zJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJpYi12MS10b29sYmFyJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50c190b29sYmFyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdzcGFuW2RhdGEtY3NhLWMtc2xvdC1pZD1cIm5hdi1yaWJcIl0sIGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJuYXYtcmliXCJdLCBhLnNmLWNsZWFyLWFsbCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jc2EtYy1jb250ZW50LWlkJykgPT0gJ3MtYWxsLWZpbHRlcnMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnU2hvdyBBbGwgRmlsdGVycydcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtZHJvcGRvd24tbWFpbi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNmLXJpYi12MS1kcm9wZG93bi1wb3B1cC10aXRsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLWRyb3Bkb3duLXBvcHVwLXRpdGxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCBzcGFuW3JvbGU9XCJsaXN0aXRlbVwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtcmFuZ2Utc2xpZGVyLWxhYmVsLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1zbGlkZXItY29udGFpbmVyIGRpdi5zLWxvd2VyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9taW5fdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1zbGlkZXItY29udGFpbmVyIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9taW5fdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuc2YtcmliLXYxLWRyb3Bkb3duLWJ1dHRvbnMgYnV0dG9uLCBkaXYuc2YtcmliLXYxLWRyb3Bkb3duLWJ1dHRvbnMgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RvcFJlZmluZW1lbnRzXFxcXC8wJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndG9wX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogJ3RydWUnLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUmVjZW50bHkgdXNlZCBmaWx0ZXJzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZXBhcnRtZW50JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZCA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cy5kZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmV2aWV3c1JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXN0b21lciBSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Eucy1uYXZpZ2F0aW9uLWNsZWFyLWxpbmsnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKT8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnJldmlld3MnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJsaSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJyk/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcmljZVJlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAvLyAyIGNhc2VzOiBzZWxlY3Rpb24gLyBzbGlkZXJcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF8zNi10aXRsZSwgZGl2LnNmLXJlZmluZW1lbnQtaGVhZGluZyBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOiBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjogc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxzKy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlOiAncHJpY2VfcmFuZ2UnLCByYW5nZSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmFuZ2Utc2xpZGVyLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucy1sb3dlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZV9taW5fdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9qczogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCB0ZXh0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRleHQpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtdXBwZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWF4X3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnbWluJywgJ21heCcsICdzdGVwJ10sXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlX2F0dHI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfdmFsdWU6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1t2YWx1ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2Ytc3VibWl0LXJhbmdlLWJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdWJtaXRfcHJpY2VfcmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdHbycsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmVzZXQtcmFuZ2UtbGluayBhJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jlc2V0X3ByaWNlX3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcF9uX2RlYWxfdHlwZS10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVhbHNfZGlzY291bnRzX2hlYWRpbmcnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gPiBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXJfZGVhbHNfZGlzY291bnRfc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2Zvcm1hdDogJ0NsZWFyIE9wdGlvbiB7fScsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiB0cnVlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddIGFbYXJpYS1jdXJyZW50PSdmYWxzZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogZmFsc2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gc3BhbltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2hncmlkLWNhcm91c2VsXCJdKScsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2ctcm93IGgyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZy1yb3cgaDInLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LkFkSG9sZGVyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWFzaW5dJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQudHJpbSgpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmdldEF0dHJpYnV0ZSgnYWx0JylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2RhdGEtdHlwZT0ncHJvZHVjdFRpdGxlJ11cIilcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5OiA0LFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9uYW1lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1wcm9kdWN0LWltYWdlLWNvbnRhaW5lciwgZGl2LnMtaW1hZ2Utb3ZlcmxheS1ibGFjaycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1jb2xvci1zd2F0Y2gtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2F2YWlsYWJsZV9jb2xvcnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLXBhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtdHlwZT0nbGluayddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXYucy12YXJpYXRpb25zLW9wdGlvbnMtZWxldmF0ZWQsIGRpdi5zLXZhcmlhdGlvbnMtb3B0aW9ucy1qdXN0aWZ5LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJldmlldycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpW2RhdGEtY3k9XCJyZXZpZXdzLXJhdGluZ3Mtc2xvdFwiXSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9yYXRpbmdfY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbDpoYXMoPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9wcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdhID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbidcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBzcGFuLmEtYnV0dG9uOmhhcyhidXR0b24pLCBzcGFuW2lkKj0nYWRkLXRvLWNhcnQnXSBpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnc3Bhbi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCwgaDIuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwgc3BhbidcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zLXBhZ2luYXRpb24tc3RyaXAnLFxuICAgICAgICAgICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLnMtcGFnaW5hdGlvbi1pdGVtJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZGVyLmEtcG9wb3Zlci1oZWFkZXIgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbicsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhbltkYXRhLWNvbXBvbmVudC10eXBlPSdzLXByb2R1Y3QtaW1hZ2UnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfc3BlY2lmaWNhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDIpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYS5hLXRleHQtbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgzKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1uby1qcy1oaWRlIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtYXRjYi1hZGQtY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hc2luXScpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJpY2UgYS5hLXRleHQtbm9ybWFsIHNwYW5bYXJpYS1oaWRkZW49XCJ0cnVlXCJdJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgxKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi10aXRsZSBhJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gdGl0bGVFbVxuICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdJylcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0VtID0gZW0ucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDEpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtc3BlYywgZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDIpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucydcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb25FbSBvZiBvcHRpb25zRW0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25LZXlFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUVtID0gb3B0aW9uRW0/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UsIHNwYW4uYS1kcm9wZG93bi1wcm9tcHQnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleSA9IG9wdGlvbktleUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlRW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHsgW29wdGlvbktleV06IG9wdGlvblZhbHVlIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2gob3B0aW9uKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BvcG92ZXJfaXRlbScsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgb3B0aW9ucyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUsICN0aXRsZUJsb2NrJyxcbiAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogZW0/LmlubmVyVGV4dCB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYm9uZEJ5TGluZV9mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2JyYW5kJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBicmFuZDogZW0/LmlubmVyVGV4dCB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYm9uZEJ5TGluZV9mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiBlbT8uaW5uZXJUZXh0IHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Omhhcygjc25zLWJhc2UtcHJpY2UpICNzbnMtYmFzZS1wcmljZSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXScgK1xuICAgICAgICAgICAgICAgICAgJyA+IGRpdltjbGFzcz1cIm9mZmVyc0NvbnNpc3RlbmN5RW5hYmxlZFwiXSA+IGRpdjpub3QoW3N0eWxlPVwiZGlzcGxheTpub25lO1wiXSk6bm90KFtzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJdKSAnICtcbiAgICAgICAgICAgICAgICAgICcjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2Om5vdCg6aGFzKCNzbnMtYmFzZS1wcmljZSkpIHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXksICcgK1xuICAgICAgICAgICAgICAgICAgJyNhcGV4X2Rlc2t0b3AgPiBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwiYXBleF9kcF9jZW50ZXJfY29sdW1uXCJdID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD1cImFwZXhfd2l0aF9yaW9fY3hcIl0gJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBwcmljZTogZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmJvbmRBcGV4UHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgcHJpY2U6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9vcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgbGFiZWwuYS1mb3JtLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSBzcGFuLnNlbGVjdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IFtsYWJlbF06IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLy8gaGFuZGxlIG5ldyB0d2lzdGVyc1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3Rlci1wbHVzLWlubGluZS10d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItcm93JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2LmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZS1leHBhbmRlZCBzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBlbS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKT8ucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdzZWxlY3RlZCcpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi5pbm5lckhUTUwudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLCBkYXRhOiB7IFtsYWJlbF06IHZhbHVlLnRyaW0oKSB9IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGk6aGFzKHNwYW4uYS1idXR0b246bm90KC5hb2staGlkZGVuKSBpbnB1dCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRFbS5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gdGV4dEVtLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSB0ZXh0RW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItc2luZ2xldG9uLWhlYWRlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5pbm5lckhUTUwucmVwbGFjZSgvWzpcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZSdcbiAgICAgICAgICAgICAgICAgICAgICApPy5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICcjcHJvZHVjdEZhY3RzRGVza3RvcEV4cGFuZGVyIHVsLmEtdW5vcmRlcmVkLWxpc3QsICNmZWF0dXJlYnVsbGV0c19mZWF0dXJlX2RpdiB1bC5hLXVub3JkZXJlZC1saXN0LCAjYm9uZC1mZWF0dXJlLWJ1bGxldHMtZGVza3RvcCB1bC5hLXVub3JkZXJlZC1saXN0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWJvdXRfdGhpc19pdGVtJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Fib3V0IHRoaXMgaXRlbTogJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgYnVsbGV0X2xpc3Q6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnI2J1eWJveDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcik6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpOm5vdCg6aGFzKCNsdXh1cnlfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8yIGEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfZGVza3RvcF9idXlib3hfZ3JvdXBfMicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3BpY2tfdXAnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUGljayBVcCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnI2J1eWJveDpub3QoOmhhcyhkaXYuYS10YWItY29udGFpbmVyKSk6bm90KDpoYXMoI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCkpOm5vdCg6aGFzKCNsdXh1cnlfYnV5Ym94X2Rlc2t0b3ApKScsXG4gICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZV9idXlib3hfZGVza3RvcCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcGFydGlhbFN0YXRlQnV5Ym94IGRpdi5hLXNlY3Rpb24uYS10ZXh0LWNlbnRlci5hLXNwYWNpbmctc21hbGwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpoYXMoI2x1eHVyeV9idXlib3hfZGVza3RvcCknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYm9uZEFwZXhQcmljZV9mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlbGl2ZXJ5QmxvY2tNZXNzYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtZHJvcGRvd24tY29udGFpbmVyIHNlbGVjdCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYm9uZC1hdGMtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBUbyBDYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhc2luOiBhc2luRW0/LnZhbHVlIHx8ICcnIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjb3V0T2ZTdG9jaycsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudGx5IFVuYXZhaWxhYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuY2FyZFJvb3QuYnVja2V0JyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyI3NpbWlsYXJpdGllcy1wcm9kdWN0LWJ1bmRsZS13aWRnZXQtdGl0bGUsIGgyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMiNzaW1pbGFyaXRpZXMtcHJvZHVjdC1idW5kbGUtd2lkZ2V0LXRpdGxlLCBoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJuZXctZGV0YWlsLWZhY2VvdXQtYm94XCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2W2lkXj1cIlByb2R1Y3RUaXRsZVwiXSwgZGl2W2NsYXNzKj1cInRpdGxlLWNvbXBvbmVudFwiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtpZF49XCJmYnRDaGVja1wiXSwgZGl2W2NsYXNzKj1cInRoZW1hdGljQnVuZGxlLWNoZWNrYm94XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnYVtjbGFzcyo9XCJkZXNrdG9wLXNpbXMtZmJ0X2ZidC1kZXNrdG9wX2ltYWdlLWxpbmtcIl0sIGRpdltjbGFzcyo9XCJpbWFnZS1iYWNrZ3JvdW5kXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJQcm9kdWN0VGl0bGVcIl06aGFzKGEpLCBhOmhhcyhkaXZbY2xhc3MqPVwidGl0bGUtY29tcG9uZW50XCJdKScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltpZF49XCJQcm9kdWN0VGl0bGVcIl06bm90KDpoYXMoYSkpIGRpdiA+IGRpdltjbGFzcyo9XCJ0aXRsZS1jb21wb25lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwicmV2aWV3cy1zZWN0aW9uXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Jldmlld2VkIGJ5IHt9JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nX2NvdW50J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJkZXNrdG9wLXNpbXMtZmJ0X3ByaWNlX3AxM25cIl0gc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hZGQtdG8tY2FydC1idXR0b24nLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdiNkcDpub3QoLmdyb2NlcnkpOm5vdCgubHV4dXJ5KSAjc2ltaWxhcml0aWVzX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lmdyb2NlcnkgI3NpbWlsYXJpdGllc19mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmcmVzaF9jYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5sdXh1cnkgI3NpbWlsYXJpdGllc19mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsdXh1cnlfY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJvZHVjdC1jb21wYXJpc29uX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2NvbXBhcmlzb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDInLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhID4gZGl2W2lkXj1cImltYWdlQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYgPiBkaXZbaWRePVwiaW1hZ2VDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EgPiBkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2ID4gZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0cjpoYXMoaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0cjpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW5zJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgvW1xcW1xcXVwiXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ3RyOmhhcyhzcGFuLmEtcHJpY2UpJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnYTpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uaHJlZiB8fCB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdjb21wYXJpc29uX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKHNwYW4uYS1wcmljZSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCd0cicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9wcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKGRpdltjbGFzcyo9XCJkZWxpdmVyeVwiXSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCd0cicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiZGVsaXZlcnlcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhkaXZbY2xhc3MqPVwicmV2aWV3cy1yYXRpbmdcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbCgndHInKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInJldmlld3MtcmF0aW5nXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZW0ucXVlcnlTZWxlY3RvcignaScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItbGluaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpY29uPy5pbm5lclRleHQgKyAnIFJldmlld2VkIGJ5ICcgKyBzcGFuPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaS5hLWljb24tY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvaHovbW9iaWxlL21pc3Npb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1pbnRlbnQ9XCJpbnRlbnQtZmVlZC1taXNzaW9uLXN3aXRjaGVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeV9zd2l0Y2hlcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoNCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW1nRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGltZ0VtPy5hbHQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNpbmdsZVByb2R1Y3RDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJ0aXRsZVIyXCJdJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6aGFzKGltZyknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzaW5nbGVTd2F0Y2hlc0NvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJfbGlua19cIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInZhcmlhdGlvbkxpbmtcIl0gYScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6bm90KDpoYXMoaW1nKSknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgRGV0YWlsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNpbmdsZVByb2R1Y3REZXRhaWxzXCJdIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgRGV0YWlsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWJ1dHRvbjpoYXMoaW5wdXQpJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3Bhbi5hLWJ1dHRvbiBhLCBkaXZbZGF0YS1jb21wb25lbnQtaWQ9XCJzZWVBbGxCdXlpbmdPcHRpb25zQnV0dG9uXCJdIHNwYW4uYS1idXR0b24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3BhbltjbGFzcyo9XCJ0aXRsZVIyXCJdJylcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHQucmVwbGFjZSgnXCInLCAnJylcbiAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhOm5vdCg6aGFzKGltZykpJylcbiAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2ludGVudC10YWJzJyxcbiAgICAgICAgICAgIG5hbWU6ICdpbnRlbnRfdGFicycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgZW1cbiAgICAgICAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLWludGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKCdpbnRlbnQtZmVlZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbCgnLScsICdfJykgfHwgJydcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXTpoYXMoZGl2W2NsYXNzKj1cInByb2R1Y3RDb250YWluZXJcIl0pJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoNCcsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl06aGFzKGRpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdKScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoNCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdENvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0RGV0YWlsc1wiXSBhW2FyaWEtbGFiZWxdJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhRW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImltYWdlQmxvY2tDb250YWluZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgRGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwiYWN0aW9uQnV0dG9uXCJdOmhhcyhpLmEtaWNvbi1jYXJ0KScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0RGV0YWlsc1wiXSBhJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0gYScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9tb3Rpb25faXRlbXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImludHVpdGlvbi1zdGlja3ktY29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZWZpbmVtZW50cycsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaVtjbGFzcyo9XCJpbnR1aXRpb24tYXR0cmlidXRlLWJhclwiXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhLWNhcmR1aS1oZWFkZXInKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXJpYUVtID0gZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWxdJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhcmlhRW0/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cImludHVpdGlvbi1hdHRyaWJ1dGUtd2l0aC1jaGV2cm9uX19hdHRyaWJ1dGVXaXRoQ2hldnJvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FwcGx5X2ZpbHRlcnMnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXRydW5jYXRlLWZ1bGwnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyaWFFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblthcmlhLWxhYmVsXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyaWFFbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJpbnR1aXRpb24tYXR0cmlidXRlLXdpdGgtY2hldnJvbl9fY2hldnJvbk91dGVyQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnT3BlbiBGaWx0ZXJzJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiY2xvc2VNb2RhbEljb25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlIEZpbHRlcnMnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1jYXJkdWktY29udGVudCA+IGRpdiA+IGRpdicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBidXR0b24/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGJ1dHRvbj8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNpbnRlbnQtY29udGVudC1kZWZhdWx0JyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWludGVudCcpPy5yZXBsYWNlKCdpbnRlbnQtZmVlZC0nLCAnJykucmVwbGFjZUFsbCgnLScsICdfJykgfHxcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGlbY2xhc3MqPVwicHJvZHVjdENvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwidGl0bGVSM1wiXSwgc3BhbltjbGFzcyo9XCJ0aXRsZVI0XCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6aGFzKGltZyknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic3dhdGNoZXNcIl0sIGRpdltjbGFzcyo9XCJ2YXJpYXRpb25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cIl9saW5rX1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ2YXJpYXRpb25MaW5rXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cInByb2R1Y3RMaW5rXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1idXR0b246aGFzKGlucHV0KScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmEtYnV0dG9uIGEsIGRpdltkYXRhLWNvbXBvbmVudC1pZD1cInNlZUFsbEJ1eWluZ09wdGlvbnNCdXR0b25cIl0gc3Bhbi5hLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bY2xhc3MqPVwidGl0bGVSM1wiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dC5yZXBsYWNlKCdcIicsICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhOm5vdCg6aGFzKGltZykpJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW0uY2xvc2VzdCgnI2ludGVudC1jb250ZW50LWRlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIG5hbWVFbVxuICAgICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKCdkYXRhLWludGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKCdpbnRlbnQtZmVlZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbCgnLScsICdfJykgfHwgJydcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGlbY2xhc3MqPVwiaW50dWl0aW9uLXByb2R1Y3QtZ3JpZF9fZmFjZW91dFwiXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwidGl0bGVSM1wiXSwgc3BhbltjbGFzcyo9XCJ0aXRsZVI0XCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6aGFzKGltZyknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic3dhdGNoZXNcIl0sIGRpdltjbGFzcyo9XCJ2YXJpYXRpb25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cIl9saW5rX1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ2YXJpYXRpb25MaW5rXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cInByb2R1Y3RMaW5rXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBEZXRhaWwnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1idXR0b246aGFzKGlucHV0KScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuLmEtYnV0dG9uIGEsIGRpdltkYXRhLWNvbXBvbmVudC1pZD1cInNlZUFsbEJ1eWluZ09wdGlvbnNCdXR0b25cIl0gc3Bhbi5hLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bY2xhc3MqPVwidGl0bGVSM1wiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dC5yZXBsYWNlKCdcIicsICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhOm5vdCg6aGFzKGltZykpJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW0uY2xvc2VzdCgnI2ludGVudC1jb250ZW50LWRlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIG5hbWVFbVxuICAgICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKCdkYXRhLWludGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKCdpbnRlbnQtZmVlZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbCgnLScsICdfJykgfHwgJydcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvYWRkLXRvLWNhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctYXRjLWJ1eS1ib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbC1pdGVtLWNvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3NjLWJ1eS1ib3gtcHRjLWJ1dHRvbiBzcGFuLmEtYnV0dG9uLWlubmVyIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICAgICAgZmV0Y2hfdXJsOiAnL2NhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnZGl2LnN3LWF0Zi1yZWNvbW1lbmRhdGlvbnMtY29udGFpbmVyIGRpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0sIGRpdiNzbWFydC13YWdvbi1yZWNvbW1lbmRhdGlvbnMtYnRmIGRpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMS5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDEuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9zbWFydC13YWdvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgICAgICBmZXRjaF91cmw6ICcvY2FydCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAnZGl2LnN3LWF0Zi1yZWNvbW1lbmRhdGlvbnMtY29udGFpbmVyIGRpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0sIGRpdiNzbWFydC13YWdvbi1yZWNvbW1lbmRhdGlvbnMtYnRmIGRpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gxLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gxLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9sdXh1cnknLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBsdXh1cnlfY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvbG9jYWxtYXJrZXQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBmcmVzaF9jYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYWxtL2J5ZycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FbbmFtZT1cInByb2NlZWRUb0NoZWNrb3V0XCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmcmVzaF9jYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYWxtL3N1YnN0aXR1dGlvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdWJzQ29udGludWVCdXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ29udGludWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmcmVzaF9zdWJzdGl0dXRpb25fY2FyZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9ieWMnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdhW25hbWU9XCJzYy1ieWMtcHRjLWJ1dHRvblwiXScsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2VsX3dpZGdldF9pZF49XCJieWMtYmFjay1idXR0b25cIl0gYScsXG4gICAgICAgICAgICBuYW1lOiAnYmFja190b19jYXJ0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2ZtYy9zc2Qtc3RvcmVmcm9udCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcF9zdHlsZV9zdWJuYXYtY29udGVudC1jb250YWluZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3N1Yl9zdG9yZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2FbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3Bfc3R5bGVcIl0sIGFbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3AtZmx5b3V0X3N0eWxlXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0uaW5uZXJUZXh0IHx8ICdTYW1lIERheSBTdG9yZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuc2VlTW9yZVRpdGxlSGVhZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZm1jL3NzZC1jYXRlZ29yeScsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcF9zdHlsZV9zdWJuYXYtY29udGVudC1jb250YWluZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3N1Yl9zdG9yZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcF9zdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmlubmVyVGV4dCB8fCAnU2FtZSBEYXkgU3RvcmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5kY2wtY29udGFpbmVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yaWVzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmRjbC1oZWFkZXItdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZC5kY2wtY2Fyb3VzZWwtZWxlbWVudCBhJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmRjbC1jYXJkLWZvb3RlcicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuc2VlTW9yZVRpdGxlSGVhZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYmVzdHNlbGxlcnMnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvbmV3LXJlbGVhc2VzLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9tb3ZlcnMtYW5kLXNoYWtlcnMvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL21vc3Qtd2lzaGVkLWZvci8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvbW9zdC1naWZ0ZWQvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL0Jlc3QtU2VsbGVycyovemdicy8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvQmVzdC1TZWxsZXJzKi96Z2JzLyovKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnLyovYicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zdWJuYXYnLFxuICAgICAgICAgICAgbmFtZTogJ3N1Yl9zdG9yZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5nZW5lcmljLXN1Ym5hdi1mbHlvdXQtaXRlbScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzXj1cIkRlc2t0b3BSZWZpbmVtZW50cy1tb2R1bGVfX3Jvb3RcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdicsXG4gICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5hLXRleHQtYm9sZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5hLXRleHQtYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsW2NsYXNzXj1cIkJyZWFkY3J1bWJzLW1vZHVsZVwiXSBsaTpoYXMoYSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bFtjbGFzc149XCJCcmVhZGNydW1icy1tb2R1bGVcIl0gbGk6bm90KDpoYXMoYSkpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W3JvbGU9XCJyYWRpb2dyb3VwXCJdID4gc3BhbiwgZGl2W3JvbGU9XCJncm91cFwiXSA+IHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdlthcmlhLWxhYmVsXScpPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZW0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvWyBdL2csICdfJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXl8rfF8rJC9nLCAnJylcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZW0ucXVlcnlTZWxlY3RvcignZGl2W2FyaWEtbGFiZWxdJyk/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlbS5pbm5lclRleHRcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSdcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RFbT8uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1jaGVja2VkJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdidXR0b25bY2xhc3MqPVwiU2VlTW9yZUJ1dHRvbi1tb2R1bGVcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3NePVwiUHJvZHVjdENhcmQtbW9kdWxlX19jYXJkXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3BbaWRePVwidGl0bGVcIl0gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImltYWdlV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cImNhcmRDb250YWluaW5nTGlua1wiXScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtdGVzdGlkPVwiY29sb3Itc3dhdGNoXCJdIHVsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sb3JzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5xdWVyeVNlbGVjdG9yKCdhJyk/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0ucXVlcnlTZWxlY3RvcigncFtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW4sIHRpdGxlIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXlhZ2FpbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGJ1eV9hZ2FpblxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuIiwiZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjbGlja2FibGVfcmVjaXBlczogYW55XG4gICAgaW5wdXRfcmVjaXBlczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KFxuICBlbGVtZW50OiBhbnksXG4gIHJlY2lwZTogYW55LFxuICBwYXJlbnROYW1lID0gJycsXG4gIG50aENoaWxkID0gMCxcbiAgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50LFxuICB3aW5kb3cgPSBnbG9iYWxUaGlzLndpbmRvd1xuKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgaWYgKGVsZW1lbnRUZXh0ID09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnRUZXh0KVxuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0XG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICAgICAgLnJlcGxhY2UoL15fK3xfKyQvZywgJycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZmV0Y2hfdXJsKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmV0Y2gtdXJsJywgcmVjaXBlLmZldGNoX3VybClcbiAgfVxuXG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKCkgfHwgb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBtYXRjaGVkID0gdHJ1ZVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUubWF0Y2hfaWRfd2l0aF9wYXJlbnQpIHtcbiAgICAgICAgICBjb25zdCByZWdleCA9IC8oW2EtZjAtOS1dKy1cXGQrKSQvXG5cbiAgICAgICAgICBjb25zdCBtYXRjaDEgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKT8ubWF0Y2gocmVnZXgpXG4gICAgICAgICAgY29uc3QgbWF0Y2gyID0gY2hpbGRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKT8ubWF0Y2gocmVnZXgpXG4gICAgICAgICAgaWYgKCFtYXRjaDEgfHwgIW1hdGNoMiB8fCBtYXRjaDFbMV0gIT09IG1hdGNoMlsxXSkge1xuICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGROb2RlID0gcHJvY2Vzc0VsZW1lbnQoXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnQsXG4gICAgICAgICAgICBjaGlsZFJlY2lwZSxcbiAgICAgICAgICAgIHBhcmVudE5hbWUsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgICAgd2luZG93XG4gICAgICAgICAgKVxuICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgICBjb25zdCBldmVyeSA9IGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnkgfHwgMVxuICAgICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3BsaXRNYXJrZXIpXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnNlcnRpbmcgc3BsaXQgbWFya2VyIDJcIik7XG4gICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpXG4gICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIGVtcHR5IG1lc3NhZ2VzXG4gIGlmIChyZWNpcGUuZW1wdHlfbWVzc2FnZSAmJiBuZXdFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZWNpcGUuZW1wdHlfbWVzc2FnZSlcbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGVtcHR5VGV4dE5vZGUpXG4gIH1cblxuICByZXR1cm4gbmV3RWxlbWVudFxufVxuIiwiaW1wb3J0IHsgc3RhcnRzV2l0aCB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IGZpbHRlcl91cmwsIHVybF9pbmNsdWRlcywgY2hlY2tfdXNlcl9pZF91cmwgfSBmcm9tICcuLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Zyb21Qb3B1cChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAvLyByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGxcbiAgY29uc3Qgc2VsZWN0b3JzID0gW1xuICAgICcjdXNlci1pbnRlcmFjdGlvbi10cmFja2VyLWFwcCcsXG4gICAgJy5uLW1vZGFsLWNvbnRhaW5lcicsXG4gICAgJyN1c2VyLWludGVyYWN0aW9uLXRyYWNrZXItYXBwLXNlc3Npb24nXG4gIF1cbiAgcmV0dXJuIHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKHJvb3QgPSBudWxsLCBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgbGV0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhXG4gIGlmIChyb290KSB7XG4gICAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG4gIH0gZWxzZSB7XG4gICAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuICB9XG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFya1ZpZXdhYmxlRWxlbWVudHMoKSB7XG4gIE1hcmtJbnB1dFN0YXR1cygpXG5cbiAgLy8gU2VsZWN0IGFsbCBlbGVtZW50c1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgc2VsZWN0LCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBpblZpZXdwb3J0ID1cbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQtdmlzaWJsZS1jbGlja2FibGUtbWFya2VyJywgaW5WaWV3cG9ydCA/ICd0cnVlJyA6ICdmYWxzZScpXG4gIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gTWFya0lucHV0U3RhdHVzKCkge1xuICAvLyBFeGNsdWRlIGhpZGRlbiBpbnB1dHMgYnkgdXNpbmcgJzpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJ1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJylcbiAgaW5wdXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudFxuXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LXZhbHVlJywgaW5wdXQudmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dC50eXBlID09PSAncmFkaW8nKVxuICAgICkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1jaGVja2VkJywgU3RyaW5nKGlucHV0LmNoZWNrZWQpKVxuICAgIH1cblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFRleHRzID0gQXJyYXkuZnJvbShpbnB1dC5zZWxlY3RlZE9wdGlvbnMpXG4gICAgICAgIC5tYXAoKG9wdCkgPT4gb3B0LnRleHRDb250ZW50Py50cmltKCkgPz8gJycpXG4gICAgICAgIC5qb2luKCd8fCcpXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LXNlbGVjdGVkLXRleHQnLCBzZWxlY3RlZFRleHRzKVxuICAgIH1cbiAgfSlcbn1cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IGNhcnQsIHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHVybCA9IG51bGwsIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCwgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3cpIHtcbiAgbGV0IHBhcnNlZFVybFxuICBpZiAodXJsKSB7XG4gICAgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpXG4gIH0gZWxzZSB7XG4gICAgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgfVxuICBsZXQgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuICBwYXRoID0gcGF0aCAhPT0gJy8nID8gcGF0aC5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKSA6IHBhdGhcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgIGNvbnN0IG1hdGNoID1cbiAgICAgICAgcmVjaXBlLm1hdGNoID09ICcvJ1xuICAgICAgICAgID8gcmVjaXBlLm1hdGNoXG4gICAgICAgICAgOiByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICcnKS5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKVxuICAgICAgY29uc3Qgd2lsZGNhcmRfbWF0Y2ggPSAnXicgKyByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICdbXi9dKicpICsgJyQnXG4gICAgICBjb25zdCB3aWxkY2FyZF9tYXRjaF93aXRoX3JlZiA9ICdeJyArIHJlY2lwZS5tYXRjaC5yZXBsYWNlKC9cXCovZywgJ1teL10rJykgKyAnKC9yZWY9LispJCdcbiAgICAgIGlmIChtYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHJlY2lwZS5tYXRjaF93aXRoX3JlZiAmJlxuICAgICAgICAocGF0aC5zdGFydHNXaXRoKG1hdGNoICsgJy9yZWY9JykgfHwgcGF0aC5zdGFydHNXaXRoKG1hdGNoICsgJ3JlZj0nKSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAocmVjaXBlLm1hdGNoX3dpdGhfd2lsZGNhcmQpIHtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCh3aWxkY2FyZF9tYXRjaClcbiAgICAgICAgY29uc3QgcmVnRXhwV2l0aFJlZiA9IG5ldyBSZWdFeHAod2lsZGNhcmRfbWF0Y2hfd2l0aF9yZWYpXG4gICAgICAgIGlmIChyZWdFeHAudGVzdChwYXRoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH0gZWxzZSBpZiAocmVjaXBlLm1hdGNoX3dpdGhfcmVmICYmIHJlZ0V4cFdpdGhSZWYudGVzdChwYXRoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVjaXBlKFxuICByb290ID0gbnVsbCxcbiAgdXJsID0gbnVsbCxcbiAgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50LFxuICB3aW5kb3cgPSBnbG9iYWxUaGlzLndpbmRvd1xuKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKHVybCwgZG9jdW1lbnQsIHdpbmRvdylcbiAgICBsZXQgcm9vdEVsZW1lbnRcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdEVsZW1lbnQgPSByb290XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgfVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQpXG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSwgJycsIDAsIGRvY3VtZW50LCB3aW5kb3cpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICBkYXRhOiBhbnlcbik6IHsgcXVlc3Rpb246IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZyB9IHtcbiAgbGV0IHF1ZXN0aW9uID0gJydcbiAgbGV0IHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSAnY2xpY2tfYSc6XG4gICAgY2FzZSAnY2xpY2tfYic6XG4gICAgY2FzZSAnY2xpY2tfYyc6XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkuc3Vic2NyaWJlX3NhdmVfLnB1cmNoYXNlX2Zvcm0uc2V0X3VwX25vdycgfHxcbiAgICAgICAgZGF0YT8udGFyZ2V0Py5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93J1xuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhlIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uLWJsdWVcIj5zZXQgdXAgbm93IGJ1dHRvbjwvc3Bhbj4uIFdoYXQgbWFkZSB5b3UgZGVjaWRlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9XG4gICAgICAgICAgJ0UuZy4sIEkgbGlrZSB0aGlzIGJyYW5kO1xcbkkgd2FudCB0byBnZXQgYSBkaXNjb3VudCBieSBzdWJzY3JpYmluZztcXG5JIGhhdmUgdXNlZCB0aGlzIHByb2R1Y3QgYmVmb3JlIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2J1eV9ub3cnKSB8fFxuICAgICAgICBkYXRhPy50YXJnZXQ/LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb24tYmx1ZVwiPmJ1eSBub3cgYnV0dG9uPC9zcGFuPi4gV2hhdCBkbyB5b3UgbGlrZSBhYm91dCB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID1cbiAgICAgICAgICAnRS5nLiwgSSBsaWtlIHNvbWUgcHJvZHVjdCBmZWF0dXJlcztcXG5JIHdhbnQgdG8gZ2V0IGEgZGlzY291bnQgYnkgYnV5aW5nIG5vdztcXG5JIGhhdmUgdXNlZCB0aGlzIHByb2R1Y3QgYmVmb3JlIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2FkZF90b19jYXJ0JykgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0Lm5hbWUgPT09ICdzdWJtaXQuYWRkVG9DYXJ0JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdBZGQgdG8gQ2FydCdcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvbi1ibHVlXCI+YWRkIHRvIGNhcnQgYnV0dG9uPC9zcGFuPi4gV2hhdCBtYWRlIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9XG4gICAgICAgICAgJ0UuZy4sIEkgd2FudCB0byBidXkgdGhpcyBwcm9kdWN0O1xcbkkgd2FudCB0byBjb21wYXJlIHdpdGggb3RoZXIgb3B0aW9ucztcXG5JIHdhbnQgdG8gc2F2ZSBmb3IgZnV0dXJlIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddID09PSAnbmF2X2Jhci5zZWFyY2hfYnV0dG9uJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvbi1ibHVlXCI+c2VhcmNoIGJ1dHRvbjwvc3Bhbj4uIFdoeSAvIGhvdyBkaWQgeW91IGRlY2lkZSB0byBtYWtlIHRoaXMgc2VhcmNoPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPVxuICAgICAgICAgICdFLmcuLCBJIHdhbnQgdG8gc2VhcmNoIGZvciBhIGdpZnQgZm9yIG15IHNvbjtcXG5Ob3Qgc2F0aXNmaWVkIHdpdGggdGhlIHByZXZpb3VzIHNlYXJjaCB0ZXJtIC4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncmVmaW5lbWVudHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdmaWx0ZXJzLicpXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uLWJsdWVcIj5maWx0ZXI8L3NwYW4+LiBXaHkgZGlkIHlvdSB1c2UgdGhpcyBmaWx0ZXI/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdFLmcuLCBJIGhhdmUgYSBidWRnZXQgY29uc3RyYWludDtcXG5JIGxpa2Ugc3BlY2lmaWMgYnJhbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3Rfb3B0aW9ucy4nKSkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb24tYmx1ZVwiPnByb2R1Y3Qgb3B0aW9uPC9zcGFuPi4gV2h5IGRpZCB5b3UgY2xpY2sgdGhpcyBwcm9kdWN0IG9wdGlvbj8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0UuZy4sIEkgd2FudCB0byBjaGVjayB0aGUgZGV0YWlsIG9mIHRoZSBvdGhlciBvcHRpb25zO1xcbkkgbGlrZSB0aGlzIGxvb2sgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCdjaGVja19vdXQnKSkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvbi1ibHVlXCI+Y2hlY2tvdXQgYnV0dG9uPC9zcGFuPi4gV2hhdCBtYWRlIHlvdSBkZWNpZGUgdG8gY2hlY2tvdXQ/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGRlY2lkZWQgdG8gY2hlY2tvdXQgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb24tYmx1ZVwiPmRlY3JlYXNlIHF1YW50aXR5PC9zcGFuPiBidXR0b24uIFdoeSBkaWQgeW91IGNsaWNrIHRoaXMgYnV0dG9uPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBkZWNyZWFzZWQgcXVhbnRpdHkgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb24tYmx1ZVwiPmluY3JlYXNlIHF1YW50aXR5PC9zcGFuPiBidXR0b24uIFdoeSBkaWQgeW91IGNsaWNrIHRoaXMgYnV0dG9uPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBpbmNyZWFzZWQgcXVhbnRpdHkgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnc2VhcmNoX3Jlc3VsdHMuJykgfHxcbiAgICAgICAgZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5zdGFydHNXaXRoKCdwcm9kdWN0X2xpc3QuJykgfHxcbiAgICAgICAgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnYWN0aXZlX2l0ZW1fbGlzdC4nKSAmJlxuICAgICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJy5wcm9kdWN0X2RldGFpbCcpKSB8fFxuICAgICAgICBkYXRhLnRhcmdldC5jbGFzc05hbWU/LmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKVxuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvbi1ibHVlXCI+cHJvZHVjdDwvc3Bhbj4uIFdoeSBkaWQgeW91IGNsaWNrIG9uIHRoaXMgcHJvZHVjdD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID1cbiAgICAgICAgICAnRS5nLiwgVGhpcyBwcm9kdWN0IGlzIG9uIHNhbGU7XFxuSSBsaWtlIHRoZSBsb29rIG9mIHRoaXMgcHJvZHVjdDtcXG5JIHdhbnQgdG8gY29tcGFyZSB3aXRoIG90aGVyIG9wdGlvbnMgLi4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdXZSBub3RpY2VkIHRoYXQgeW91IGp1c3QgaGFkIGEgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGljazwvc3Bhbj4gYWN0aW9uLiBXaHkgZGlkIHlvdSBkbyB0aGF0PydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnRS5nLiwgSSB3YW50IHRvIHJlYWQgcmV2aWV3cztcXG5JIHdhbnQgdG8gY29tcGFyZSB3aXRoIG90aGVyIG9wdGlvbnMgLi4uJ1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gZGF0YS5zY3JvbGxEaXN0YW5jZV9ZIDwgMCA/ICd1cCcgOiAnZG93bidcbiAgICAgIHF1ZXN0aW9uID0gYFdlIHNhdyB0aGF0IHlvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnNjcm9sbGVkICR7c2Nyb2xsRGlyZWN0aW9ufTwvc3Bhbj4gdGhlIHBhZ2UuIFdoYXQgYXJlIHlvdSBsb29raW5nIGZvcj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIGFtIGxvb2tpbmcgZm9yIChlLmcuLCBzcGVjaWZpYyBwcm9kdWN0cyAvIHJldmlld3MgLyBpbmZvcm1hdGlvbikuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnR5cGVkPC9zcGFuPiBpbiB0aGlzIGlucHV0IGZpZWxkLiBXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvcj8nXG4gICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICBicmVha1xuICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1doeSBkaWQgeW91IGRlY2lkZSB0byA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnJldHVybjwvc3Bhbj4gdG8gdGhpcyBwYWdlPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSByZXR1cm5lZCB0byB0aGlzIHBhZ2UgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+cmV0dXJuPC9zcGFuPiB0byB0aGlzIHBhZ2U/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHJldHVybmVkIHRvIHRoaXMgcGFnZSBiZWNhdXNlLi4uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+JHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uPC9zcGFuPj9gXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgIHF1ZXN0aW9uID0gYFdoeSBkaWQgeW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+bGVhdmUgYW5kIGNvbWUgYmFjazwvc3Bhbj4gdG8gdGhpcyB0YWI/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnRS5nLiwgSSB3YXMgZG9pbmcgc29tZXRoaW5nIGVsc2U7XFxuSSB3YXMgbG9va2luZyBmb3IgYSBkaWZmZXJlbnQgcHJvZHVjdCAuLi4nXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBxdWVzdGlvbiA9IGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSAke2V2ZW50VHlwZX0gYWN0aW9uP2BcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiB7IHF1ZXN0aW9uLCBwbGFjZWhvbGRlciB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIaWdoTGV2ZWxRdWVzdGlvbigpOiB7IHF1ZXN0aW9uOiBzdHJpbmc7IHBsYWNlaG9sZGVyOiBzdHJpbmcgfSB7XG4gIGNvbnN0IHF1ZXN0aW9uID1cbiAgICAnPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb24tYmx1ZVwiPkhpZ2gtbGV2ZWwgSW50ZW50aW9uPC9zcGFuPjogV2hhdCBkbyB5b3Ugd2FudCB0byBkbyBpbiB0aGlzIHNob3BwaW5nIHNlc3Npb24/J1xuICBjb25zdCBwbGFjZWhvbGRlciA9XG4gICAgJ0UuZy4sIEkgd2FudCB0byBidXkgYSBsYXB0b3AgZm9yIHRoZSBsYWI7XFxuSSBqdXN0IHdhbnQgdG8gZXhwbG9yZSBnaWZ0IG9wdGlvbnMgZm9yIG15IGJveWZyaWVuZDtcXG5JIGFtIGp1c3QgcmFuZG9tbHkgYnJvd3NpbmcgLi4uJ1xuICByZXR1cm4geyBxdWVzdGlvbiwgcGxhY2Vob2xkZXIgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFJlYXNvbihyZWFzb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIXJlYXNvbiB8fCByZWFzb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZSAvLyBFbXB0eSBpbnB1dFxuICB9XG4gIGlmIChyZWFzb24udHJpbSgpLmxlbmd0aCA8IDIgfHwgcmVhc29uLmxlbmd0aCA8IDUpIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gVG9vIHNob3J0IHRvIGJlIG1lYW5pbmdmdWwsIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBhbmQgMiB3b3Jkc1xuICB9XG4gIC8vIENoZWNrIGZvciByZXBldGl0aXZlIG9yIG1lYW5pbmdsZXNzIGlucHV0IChlLmcuLCBcImFhYVwiLFwiISEhXCIpXG4gIGNvbnN0IG1lYW5pbmdsZXNzUGF0dGVybnMgPSBbL14oLilcXDF7Myx9JC8sIC9eW15hLXpBLVowLTldKyQvXVxuICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgbWVhbmluZ2xlc3NQYXR0ZXJucykge1xuICAgIGlmIChwYXR0ZXJuLnRlc3QocmVhc29uLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIExpY2Vuc2U6IE1JVFxuLy8gQXV0aG9yOiBBbnRvbiBNZWR2ZWRldiA8YW50b25AbWVkdi5pbz5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FudG9ubWVkdi9maW5kZXJcbmNvbnN0IGFjY2VwdGVkQXR0ck5hbWVzID0gbmV3IFNldChbJ3JvbGUnLCAnbmFtZScsICdhcmlhLWxhYmVsJywgJ3JlbCcsICdocmVmJ10pO1xuLyoqIENoZWNrIGlmIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBhcmUgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbmFtZUlzT2sgPSBhY2NlcHRlZEF0dHJOYW1lcy5oYXMobmFtZSk7XG4gICAgbmFtZUlzT2sgfHw9IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSAmJiB3b3JkTGlrZShuYW1lKTtcbiAgICBsZXQgdmFsdWVJc09rID0gd29yZExpa2UodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDEwMDtcbiAgICB2YWx1ZUlzT2sgfHw9IHZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiB3b3JkTGlrZSh2YWx1ZS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5hbWVJc09rICYmIHZhbHVlSXNPaztcbn1cbi8qKiBDaGVjayBpZiBpZCBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZE5hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiBjbGFzcyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiB0YWcgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gdGFnTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKiogRmluZHMgdW5pcXVlIENTUyBzZWxlY3RvcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRlcihpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChpbnB1dC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZW5lcmF0ZSBDU1Mgc2VsZWN0b3IgZm9yIG5vbi1lbGVtZW50IG5vZGUgdHlwZS5gKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICByb290OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBpZE5hbWU6IGlkTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIHRpbWVvdXRNczogMTAwMCxcbiAgICAgICAgc2VlZE1pbkxlbmd0aDogMyxcbiAgICAgICAgb3B0aW1pemVkTWluTGVuZ3RoOiAyLFxuICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IEluZmluaXR5LFxuICAgIH07XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3Qgcm9vdERvY3VtZW50ID0gZmluZFJvb3REb2N1bWVudChjb25maWcucm9vdCwgZGVmYXVsdHMpO1xuICAgIGxldCBmb3VuZFBhdGg7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSkge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMgfHxcbiAgICAgICAgICAgIGNvdW50ID49IGNvbmZpZy5tYXhOdW1iZXJPZlBhdGhDaGVja3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGZQYXRoID0gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIWZQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lb3V0OiBDYW4ndCBmaW5kIGEgdW5pcXVlIHNlbGVjdG9yIGFmdGVyICR7Y29uZmlnLnRpbWVvdXRNc31tc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yKGZQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAodW5pcXVlKGNhbmRpZGF0ZSwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICAgICAgZm91bmRQYXRoID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxlY3RvciB3YXMgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICBjb25zdCBvcHRpbWl6ZWQgPSBbXG4gICAgICAgIC4uLm9wdGltaXplKGZvdW5kUGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpLFxuICAgIF07XG4gICAgb3B0aW1pemVkLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBpZiAob3B0aW1pemVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKG9wdGltaXplZFswXSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcihmb3VuZFBhdGgpO1xufVxuZnVuY3Rpb24qIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgIGxldCBwYXRocyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRpZShjdXJyZW50LCBjb25maWcpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbGV2ZWwpIHtcbiAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2gobGV2ZWwpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgICAgIHBhdGhzLnB1c2goLi4uY29tYmluYXRpb25zKHN0YWNrKSk7XG4gICAgICAgIGlmIChpID49IGNvbmZpZy5zZWVkTWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGhzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB3b3JkTGlrZShuYW1lKSB7XG4gICAgaWYgKC9eW2EtelxcLV17Myx9JC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBuYW1lLnNwbGl0KC8tfFtBLVpdLyk7XG4gICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICAgICAgaWYgKHdvcmQubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1teYWVpb3VdezQsfS9pLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRpZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBjb25zdCBsZXZlbCA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChlbGVtZW50SWQgJiYgY29uZmlnLmlkTmFtZShlbGVtZW50SWQpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJyMnICsgQ1NTLmVzY2FwZShlbGVtZW50SWQpLFxuICAgICAgICAgICAgcGVuYWx0eTogMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZiAoY29uZmlnLmNsYXNzTmFtZShuYW1lKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJy4nICsgQ1NTLmVzY2FwZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5hdHRyKGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGBbJHtDU1MuZXNjYXBlKGF0dHIubmFtZSl9PVwiJHtDU1MuZXNjYXBlKGF0dHIudmFsdWUpfVwiXWAsXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoY29uZmlnLnRhZ05hbWUodGFnTmFtZSkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgcGVuYWx0eTogNSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMTAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBudGggPSBpbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChudGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aENoaWxkKHRhZ05hbWUsIG50aCksXG4gICAgICAgICAgICBwZW5hbHR5OiA1MCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbDtcbn1cbmZ1bmN0aW9uIHNlbGVjdG9yKHBhdGgpIHtcbiAgICBsZXQgbm9kZSA9IHBhdGhbMF07XG4gICAgbGV0IHF1ZXJ5ID0gbm9kZS5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHBhdGhbaV0ubGV2ZWwgfHwgMDtcbiAgICAgICAgaWYgKG5vZGUubGV2ZWwgPT09IGxldmVsIC0gMSkge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ID4gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcGF0aFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gcGVuYWx0eShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgubWFwKChub2RlKSA9PiBub2RlLnBlbmFsdHkpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKTtcbn1cbmZ1bmN0aW9uIGJ5UGVuYWx0eShhLCBiKSB7XG4gICAgcmV0dXJuIHBlbmFsdHkoYSkgLSBwZW5hbHR5KGIpO1xufVxuZnVuY3Rpb24gaW5kZXhPZihpbnB1dCwgdGFnTmFtZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgICAgICh0YWdOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUpKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBpbnB1dCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihjdXJyZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgIHBlbmFsdHk6IE5hTixcbiAgICAgICAgICAgIGxldmVsOiBpLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpZiAodW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gbnRoQ2hpbGQodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtY2hpbGQoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uIG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1vZi10eXBlKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiogY29tYmluYXRpb25zKHN0YWNrLCBwYXRoID0gW10pIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHN0YWNrWzBdKSB7XG4gICAgICAgICAgICB5aWVsZCogY29tYmluYXRpb25zKHN0YWNrLnNsaWNlKDEsIHN0YWNrLmxlbmd0aCksIHBhdGguY29uY2F0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBmaW5kUm9vdERvY3VtZW50KHJvb3ROb2RlLCBkZWZhdWx0cykge1xuICAgIGlmIChyb290Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG4gICAgaWYgKHJvb3ROb2RlID09PSBkZWZhdWx0cy5yb290KSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZS5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcm9vdE5vZGU7XG59XG5mdW5jdGlvbiB1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3QgY3NzID0gc2VsZWN0b3IocGF0aCk7XG4gICAgc3dpdGNoIChyb290RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjc3MpLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHNlbGVjdCBhbnkgbm9kZSB3aXRoIHRoaXMgc2VsZWN0b3I6ICR7Y3NzfWApO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiogb3B0aW1pemUocGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPiAyICYmIHBhdGgubGVuZ3RoID4gY29uZmlnLm9wdGltaXplZE1pbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IFsuLi5wYXRoXTtcbiAgICAgICAgICAgIG5ld1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaWYgKHVuaXF1ZShuZXdQYXRoLCByb290RG9jdW1lbnQpICYmXG4gICAgICAgICAgICAgICAgcm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IobmV3UGF0aCkpID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG5ld1BhdGg7XG4gICAgICAgICAgICAgICAgeWllbGQqIG9wdGltaXplKG5ld1BhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBpc0Zyb21Qb3B1cCxcbiAgZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0LFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlLFxuICBpc1ZhbGlkUmVhc29uLFxuICBNYXJrVmlld2FibGVFbGVtZW50c1xufSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgc2Nyb2xsX3RocmVzaG9sZCB9IGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IHsgZmluZGVyIH0gZnJvbSAnQG1lZHYvZmluZGVyJ1xuXG5hc3luYyBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgdGltZXN0YW1wLFxuICAgICAgdXVpZFxuICAgIH0pKSBhcyBhbnlcblxuICAgIGlmICghcmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgJ1NjcmVlbnNob3QgY2FwdHVyZSBmYWlsZWQnKVxuICAgIH1cblxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgfSxcbiAgICAgICcqJ1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdCBpbiBjb250ZW50IHNjcmlwdDonLCBlcnJvcilcblxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9LFxuICAgICAgJyonXG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5zb3VyY2UgIT09IHdpbmRvdykgcmV0dXJuXG4gIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnR0VUX1VTRVJfSUQnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KCd1c2VySWQnKVxuICAgIGNvbnN0IHVzZXJJZCA9IHJlc3VsdC51c2VySWRcbiAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSURfUkVTUE9OU0UnLCB1c2VySWQ6IHVzZXJJZCB9LCAnKicpXG4gIH1cbiAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQVBUVVJFX1NDUkVFTlNIT1QnKSB7XG4gICAgYXdhaXQgY2FwdHVyZVNjcmVlbnNob3QoZXZlbnQuZGF0YS50aW1lc3RhbXAsIGV2ZW50LmRhdGEudXVpZClcbiAgfVxuICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NBVkVfSU5URVJBQ1RJT05fREFUQScpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YUZvckJhY2tncm91bmQgPSB7IC4uLmV2ZW50LmRhdGEuZGF0YSB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IChhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgIGFjdGlvbjogJ3NhdmVEYXRhJyxcbiAgICAgICAgZGF0YTogZGF0YUZvckJhY2tncm91bmRcbiAgICAgIH0pKSBhcyBhbnlcbiAgICAgIGlmICghcmVzcG9uc2UyLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlMi5tZXNzYWdlIHx8ICdpbnRlcmFjdGlvbiBjYXB0dXJlIGZhaWxlZCcpXG4gICAgICB9XG4gICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICcqJ1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgaW50ZXJhY3Rpb24gZGF0YTonLCBlcnJvcilcbiAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wXG4gICAgICAgIH0sXG4gICAgICAgICcqJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufSlcblxuY29uc3Qgd29yayA9ICgpID0+IHtcbiAgLy8gRGVmaW5lIGludGVyZmFjZXMgZm9yIFJlY2lwZSBhbmQgT3JkZXJEZXRhaWxcbiAgaW50ZXJmYWNlIFJlY2lwZSB7XG4gICAgdGFnX25hbWU/OiBzdHJpbmdcbiAgICB0ZXh0X3NlbGVjdG9yPzogc3RyaW5nXG4gICAgdGV4dF9qcz86IHN0cmluZ1xuICAgIGFkZF90ZXh0PzogYm9vbGVhblxuICAgIHRleHRfZm9ybWF0Pzogc3RyaW5nXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGNsaWNrYWJsZT86IGJvb2xlYW5cbiAgICBjbGlja19zZWxlY3Rvcj86IHN0cmluZ1xuICAgIGtlZXBfYXR0cj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cbiAgICBvdmVycmlkZV9hdHRyPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICAgIGNoaWxkcmVuPzogUmVjaXBlW11cbiAgICBpbnNlcnRfc3BsaXRfbWFya2VyPzogYm9vbGVhblxuICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk/OiBudW1iZXJcbiAgICBkaXJlY3RfY2hpbGQ/OiBib29sZWFuXG4gICAgZW1wdHlfbWVzc2FnZT86IHN0cmluZ1xuICAgIFtrZXk6IHN0cmluZ106IGFueSAvLyBBbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXNcbiAgfVxuXG4gIGludGVyZmFjZSBPcmRlckRldGFpbCB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgcHJpY2U6IG51bWJlclxuICB9XG5cbiAgLy8gRXh0ZW5kIHRoZSBXaW5kb3cgaW50ZXJmYWNlIHRvIGluY2x1ZGUgY3VzdG9tIHByb3BlcnRpZXNcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIGV2ZW50IHRyaWdnZXJlZCcpXG4gICAgTWFya1ZpZXdhYmxlRWxlbWVudHMoKVxuICAgIHByb2Nlc3NSZWNpcGUoKVxuICB9KVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGNhcHR1cmUgaW50ZXJhY3Rpb25zXG4gIGFzeW5jIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICB0YXJnZXQ6IGFueSxcbiAgICB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICB1dWlkOiBzdHJpbmcsXG4gICAgd2luZG93U2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9LFxuICAgIHNjcm9sbERpc3RhbmNlPzogbnVtYmVyLFxuICAgIHNjcm9sbEN1cnJlbnRUb3A/OiBudW1iZXIsXG4gICAgc2Nyb2xsQ3VycmVudExlZnQ/OiBudW1iZXIsXG4gICAgc2Nyb2xsRGlzdGFuY2VfWD86IG51bWJlcixcbiAgICB1cmw/OiBzdHJpbmdcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBkYXRhID0ge31cbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBmaW5kZXIodGFyZ2V0IGFzIEhUTUxFbGVtZW50LCB7XG4gICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgIH0pXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgdXVpZDogdXVpZCxcbiAgICAgICAgICBldmVudFR5cGUsXG4gICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgaHRtbFNuYXBzaG90SWQ6ICcnLFxuICAgICAgICAgIHBhZ2VNZXRhOiAnJyxcbiAgICAgICAgICBodG1sQ29udGVudDogJycsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6ICcnXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVsnc2VsZWN0b3InXSA9IHNlbGVjdG9yXG4gICAgICAgIGRhdGFbJ2lucHV0LXZhbHVlcyddID0gdGFyZ2V0Py52YWx1ZSB8fCAnJ1xuICAgICAgICBkYXRhWydpbnB1dC1pZCddID0gdGFyZ2V0Py5pZCB8fCAnJ1xuICAgICAgICBkYXRhWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgICAgZGF0YVsnZGF0YS1lbGVtZW50LW1ldGEtZGF0YSddID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQodGltZXN0YW1wLCB1dWlkKVxuXG4gICAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydCB0aW1lOicsIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSlcbiAgICAgICAgTWFya1ZpZXdhYmxlRWxlbWVudHMoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW5kIHRpbWU6JywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpKVxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblxuICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCwgLy8gVXNlIHRoZSBuZXcgc25hcHNob3QgSURcbiAgICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJycsXG4gICAgICAgICAgaHRtbENvbnRlbnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ3Njcm9sbCcpIHtcbiAgICAgICAgICBkYXRhWyd3aW5kb3dTaXplJ10gPSB3aW5kb3dTaXplXG4gICAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWSddID0gc2Nyb2xsRGlzdGFuY2VcbiAgICAgICAgICBkYXRhWydzY3JvbGxDdXJyZW50VG9wJ10gPSBzY3JvbGxDdXJyZW50VG9wXG4gICAgICAgICAgZGF0YVsnc2Nyb2xsQ3VycmVudExlZnQnXSA9IHNjcm9sbEN1cnJlbnRMZWZ0XG4gICAgICAgICAgZGF0YVsnc2Nyb2xsRGlzdGFuY2VfWCddID0gc2Nyb2xsRGlzdGFuY2VfWFxuICAgICAgICAgIGRhdGFbJ3RhcmdldCddID0gdGFyZ2V0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpXG4gICAgfVxuICB9XG4gIC8vIFZhcmlhYmxlcyB0byB0cmFjayBzY3JvbGwgZXZlbnRzXG4gIGxldCBpc1Njcm9sbGluZyA9IGZhbHNlXG4gIGxldCBzY3JvbGxUaW1lb3V0OiBudW1iZXIgfCB1bmRlZmluZWRcbiAgbGV0IHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSA9IDBcbiAgbGV0IHNjcm9sbFN0YXJ0TGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0XG4gIGxldCBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggPSAwXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgZmlyc3Qgc2Nyb2xsIGV2ZW50IGluIGEgc2Nyb2xsIHNlcXVlbmNlXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQ6IHN0cmluZywgc2Nyb2xsVGltZXN0YW1wOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ0ZpcnN0IHNjcm9sbCBldmVudCcpXG4gICAgICBjYXB0dXJlU2NyZWVuc2hvdChzY3JvbGxUaW1lc3RhbXAsIHNjcm9sbFV1aWQpXG4gICAgICBwcm9jZXNzUmVjaXBlKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGZpcnN0IHNjcm9sbCBoYW5kbGluZzonLCBlcnJvcilcbiAgICB9XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgd2hlbiBzY3JvbGxpbmcgc3RvcHMgKG5vIHNjcm9sbCBldmVudHMgd2l0aGluIHRoZSB0aHJlc2hvbGQpXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbFN0b3Aoc2Nyb2xsVXVpZDogc3RyaW5nLCBzY3JvbGxUaW1lc3RhbXA6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsIHN0b3AgdXVpZCcsIHNjcm9sbFV1aWQpXG4gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSArPSBjdXJyZW50U2Nyb2xsVG9wIC0gc2Nyb2xsU3RhcnRUb3BcblxuICAgICAgY29uc3QgY3VycmVudFNjcm9sbExlZnQgPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZV9YICs9IGN1cnJlbnRTY3JvbGxMZWZ0IC0gc2Nyb2xsU3RhcnRMZWZ0XG5cbiAgICAgIC8vIElOU0VSVF9ZT1VSX0NPREVcbiAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmIChhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlICE9PSAwIHx8IGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCAhPT0gMCkge1xuICAgICAgICAvLyBSZWNvcmQgdGhlIHNjcm9sbCBpbnRlcmFjdGlvbiB3aXRoIHRoZSBhY2N1bXVsYXRlZCBzY3JvbGwgZGlzdGFuY2VcbiAgICAgICAgYXdhaXQgY2FwdHVyZUludGVyYWN0aW9uKFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgIHNjcm9sbFRpbWVzdGFtcCxcbiAgICAgICAgICBzY3JvbGxVdWlkLFxuICAgICAgICAgIHdpbmRvd1NpemUsXG4gICAgICAgICAgYWNjdW11bGF0ZWRTY3JvbGxEaXN0YW5jZSxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wLFxuICAgICAgICAgIGFjY3VtdWxhdGVkU2Nyb2xsRGlzdGFuY2VfWCxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsTGVmdFxuICAgICAgICApXG4gICAgICAgIC8vIFJlc2V0IGFjY3VtdWxhdGVkIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlID0gMFxuICAgICAgICBhY2N1bXVsYXRlZFNjcm9sbERpc3RhbmNlX1ggPSAwXG4gICAgICAgIHNjcm9sbFN0YXJ0VG9wID0gY3VycmVudFNjcm9sbFRvcFxuICAgICAgICBzY3JvbGxTdGFydExlZnQgPSBjdXJyZW50U2Nyb2xsTGVmdFxuICAgICAgfVxuICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIHN0b3AgaGFuZGxpbmc6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgbGV0IHNjcm9sbFV1aWQgPSAnJ1xuICBsZXQgc2Nyb2xsVGltZXN0YW1wID0gJydcbiAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHNjcm9sbCBldmVudHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Njcm9sbCBldmVudCcpXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2Nyb2xsIGV2ZW50IGlnbm9yZWQgZnJvbSBhIG5lc3RlZCBzY3JvbGxhYmxlIGNvbnRhaW5lcicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWlzU2Nyb2xsaW5nKSB7XG4gICAgICBpc1Njcm9sbGluZyA9IHRydWVcbiAgICAgIHNjcm9sbFN0YXJ0VG9wID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgc2Nyb2xsVXVpZCA9IHV1aWR2NCgpXG4gICAgICBzY3JvbGxUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgIGF3YWl0IGhhbmRsZUZpcnN0U2Nyb2xsKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcClcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgZXhpc3RpbmcgdGltZW91dCBhbmQgc2V0IGEgbmV3IG9uZVxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dClcbiAgICBzY3JvbGxUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoXG4gICAgICAoKSA9PiBoYW5kbGVTY3JvbGxTdG9wKHNjcm9sbFV1aWQsIHNjcm9sbFRpbWVzdGFtcCksXG4gICAgICBzY3JvbGxfdGhyZXNob2xkXG4gICAgKSAvLyBUaHJlc2hvbGQgb2YgMzAwbXNcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdibHVyJyxcbiAgICBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSkgcmV0dXJuXG4gICAgICBpZiAoXG4gICAgICAgIHRhcmdldCAmJlxuICAgICAgICAoKHRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnICYmICh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSA9PT0gJ3RleHQnKSB8fFxuICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgIHV1aWQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApXG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIG1lc3NhZ2UpXG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRIVE1MJykge1xuICAgICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IHByb2Nlc3NSZWNpcGUoKVxuICAgICAgICBNYXJrVmlld2FibGVFbGVtZW50cygpXG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICBodG1sOiBodG1sQ29udGVudCxcbiAgICAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEsXG4gICAgICAgICAgc2ltcGxpZmllZEhUTUw6IHNpbXBsaWZpZWRIVE1MLFxuICAgICAgICAgIHdpbmRvd1NpemU6IHdpbmRvd1NpemVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3Nob3dfcG9wdXAnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaG93X3BvcHVwJywgbWVzc2FnZSlcbiAgICAgICAgLy8gYXNzZXJ0IHRoZXJlIGlzbid0IGFscmVhZHkgYSBwb3B1cFxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdwb3B1cCBhbHJlYWR5IGV4aXN0cycgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSB0aGUgVnVlIGFwcCB0byBzaG93IHRoZSBtb2RhbFxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2hvdy1tb2RhbCcsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uOiBtZXNzYWdlLnF1ZXN0aW9uLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1lc3NhZ2UucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIHJldHVybiB0cnVlIC8vIFdpbGwgcmVzcG9uZCBhc3luY2hyb25vdXNseVxuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2hvd19wb3B1cF9zZXNzaW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd19wb3B1cF9zZXNzaW9uJywgbWVzc2FnZSlcbiAgICAgICAgLy8gYXNzZXJ0IHRoZXJlIGlzbid0IGFscmVhZHkgYSBwb3B1cFxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdwb3B1cCBhbHJlYWR5IGV4aXN0cycgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVzZSB0aGUgVnVlIGFwcCB0byBzaG93IHRoZSBtb2RhbFxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnc2hvdy1tb2RhbC1zZXNzaW9uJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgcXVlc3Rpb246IG1lc3NhZ2UucXVlc3Rpb24sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogbWVzc2FnZS5wbGFjZWhvbGRlcixcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgcmV0dXJuIHRydWUgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgICB9XG4gICAgICAvLyBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93UmVtaW5kZXInKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdzaG93UmVtaW5kZXInKVxuICAgICAgLy8gICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAvLyAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdyZW1pbmRlcjpwb3B1cCBhbHJlYWR5IGV4aXN0cycgfSlcbiAgICAgIC8vICAgICByZXR1cm5cbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBjb25zdCBkYXRhID0gbWVzc2FnZS5kYXRhXG4gICAgICAvLyAgIGNvbnN0IHVzZXJfaWQgPSBtZXNzYWdlLnVzZXJfaWRcbiAgICAgIC8vICAgaWYgKHVzZXJfaWQpIHtcbiAgICAgIC8vICAgICB3aW5kb3cuJGRpYWxvZz8uaW5mbyh7XG4gICAgICAvLyAgICAgICB0aXRsZTogJ1RoYW5rIHlvdSBmb3IgcGFydGljaXBhdGluZyEnLFxuICAgICAgLy8gICAgICAgY29udGVudDogYFlvdSBoYXZlIGNvbnRyaWJ1dGVkICR7ZGF0YS5vbl9kYXRlfSByYXRpb25hbGVzIGluIHRoZSBsYXN0IDcgZGF5cy5cbiAgICAgIC8vICAgICBZb3UgaGF2ZSBjb250cmlidXRlZCAke2RhdGEuYWxsX3RpbWV9IHJhdGlvbmFsZXMgaW4gdG90YWwuIGBcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgLy8gICAgIHdpbmRvdy4kZGlhbG9nPy5pbmZvKHtcbiAgICAgIC8vICAgICAgIHRpdGxlOiAnVGhhbmsgeW91IGZvciBwYXJ0aWNpcGF0aW5nIScsXG4gICAgICAvLyAgICAgICBjb250ZW50OiBgUGxlYXNlIGVudGVyIHlvdXIgdXNlciBpZCB0byBjb250aW51ZS5cbiAgICAgIC8vICAgICAgIElmIHlvdSBkb24ndCBoYXZlIG9uZSwgcGxlYXNlIGNvbnRhY3QgdXMgYXQgaGFpLXVzZXItc3R1ZHktMkBraG91cnkubm9ydGhlYXN0ZXJuLmVkdWBcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfVxuICApXG59XG5cbnNob3VsZEV4Y2x1ZGUod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICBjb25zb2xlLmxvZygnY29udGVudCBzY3JpcHQsIHNob3VsZEV4Y2x1ZGUnLCByZXN1bHQpXG4gIGlmICghcmVzdWx0KSB7XG4gICAgd29yaygpXG4gIH1cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=