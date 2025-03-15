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
                    selector: 'div.s-suggestion-container',
                    name: 'from_text',
                    add_text: true,
                    clickable: true
                }
            ]
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
const carousel_card = {
    selector: 'li.a-carousel-card:not(.a-carousel-card-empty), #gridItemRoot',
    name: 'from_text',
    text_js: (em) => {
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"]');
        const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.title) || (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
        return title;
    },
    children: [
        {
            selector: 'a:has(img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"]), img.s-image, a[target="_top"]:has(img):not(:has(div, span))',
            name: 'product_image',
            add_text: true,
            text_format: 'Product Image',
            clickable: true
        },
        {
            selector: 'a div[class*="sc-truncate-desktop"], a div:has(> span.title), a div[class*="sc-css-line-clamp"], a:has(span[class*="titleR3"]), div[data-cy="title-recipe"], a[id*="title"]',
            add_text: true,
            name: 'product_title',
            clickable: true
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
        }
    ],
    generate_metadata: (em) => {
        var _a, _b;
        const asinEm = em.querySelector('div[id*="sc-turbo-container"], div[data-asin], input[data-asin]');
        const asin = (asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('data-asin')) || ((_a = asinEm === null || asinEm === void 0 ? void 0 : asinEm.getAttribute('id')) === null || _a === void 0 ? void 0 : _a.split('-').pop()) || '';
        const priceEm = em.querySelector('a span[class*="sc-price"], span.a-price span.a-offscreen');
        const price = (_b = priceEm === null || priceEm === void 0 ? void 0 : priceEm.innerText) === null || _b === void 0 ? void 0 : _b.replace(/[\n]/g, '');
        const titleEm = em.querySelector('a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"]');
        const title = (titleEm === null || titleEm === void 0 ? void 0 : titleEm.title) || (titleEm === null || titleEm === void 0 ? void 0 : titleEm.innerText) || '';
        const urlEm = em.querySelector('a:has(div[class*="sc-truncate-desktop"]), a:has(span.title), a:has(span[class*="title"])');
        const url = urlEm === null || urlEm === void 0 ? void 0 : urlEm.getAttribute('href');
        const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"], div[id^="atcStepperSection"] span.atcStepperQuantity');
        const quantity = (quantityEm === null || quantityEm === void 0 ? void 0 : quantityEm.innerText) || '';
        return {
            name: 'promotion_items',
            data: { title, asin, price, url, quantity }
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
                        selector: 'a h2 img',
                        clickable: true,
                        name: 'from_text',
                        text_js: (em) => {
                            return em.alt;
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
        selector: '#sc-cart-above-actions button, #sc-cart-above-actions a',
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
                        text_selector: 'h2#similarities-product-bundle-widget-title',
                        children: [
                            {
                                selector: 'h2#similarities-product-bundle-widget-title',
                                add_text: true
                            },
                            {
                                selector: 'div[class*="desktop-sims-fbt_fbt-desktop_new-detail-faceout-box"]',
                                name: 'from_text',
                                text_selector: 'div[id^="ProductTitle"]',
                                children: [
                                    {
                                        selector: 'input[id^="fbtCheck"]',
                                        clickable: true,
                                        add_text: true,
                                        text_format: 'Checkbox',
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'a[class*="desktop-sims-fbt_fbt-desktop_image-link"]',
                                        text_format: 'Product Image',
                                        clickable: true,
                                        add_text: true,
                                        name: 'from_text'
                                    },
                                    {
                                        selector: 'div[id^="ProductTitle"]:has(a)',
                                        clickable: true,
                                        add_text: true,
                                        name: 'product_title'
                                    },
                                    {
                                        selector: 'div[id^="ProductTitle"]:not(:has(a))',
                                        add_text: true
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
                                selector: 'a:not(:has(img))',
                                add_text: true,
                                direct_child: true,
                                text_format: 'Product Detail',
                                name: 'from_text',
                                clickable: true
                            },
                            {
                                selector: 'input',
                                add_text: true,
                                clickable: true,
                                name: 'add_to_cart'
                            },
                            {
                                selector: 'a.a-button-text',
                                clickable: true,
                                add_text: true,
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
                                text_selector: 'span[class*="titleR3"]',
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
                                        selector: 'a[class*="productLink"]',
                                        clickable: true,
                                        add_text: true,
                                        name: 'product_title'
                                    },
                                    {
                                        selector: 'input',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: 'a.a-button-text',
                                        clickable: true,
                                        add_text: true,
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
                                text_selector: 'span[class*="titleR3"]',
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
                                        selector: 'a[class*="productLink"]',
                                        clickable: true,
                                        name: 'from_text',
                                        add_text: true,
                                        text_format: 'Product Detail'
                                    },
                                    {
                                        selector: 'input',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: 'input',
                                        clickable: true,
                                        add_text: true,
                                        name: 'add_to_cart'
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
/*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _medv_finder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @medv/finder */ "./node_modules/@medv/finder/finder.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const work = () => {
    const monkeyPatch = () => {
        window.monkeyPatched = true;
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        // Add this at the top of the file
        const TimeOut = 30000;
        function captureInteraction(eventType, target, timestamp, selector, url, uuid) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                function findClickableParent(element, depth = 0, allAttributes = {}) {
                    // Base case: if element is null or we've reached max depth
                    if (!element || depth >= 20)
                        return allAttributes;
                    // Check and collect all relevant attributes at current level
                    if (element.hasAttribute('data-clickable-id')) {
                        allAttributes['data-clickable-id'] = element.getAttribute('data-clickable-id') || '';
                    }
                    if (element.hasAttribute('data-element-meta-name')) {
                        allAttributes['data-element-meta-name'] =
                            element.getAttribute('data-element-meta-name') || '';
                    }
                    if (element.hasAttribute('data-element-meta-data')) {
                        allAttributes['data-element-meta-data'] =
                            element.getAttribute('data-element-meta-data') || '';
                    }
                    if (element.hasAttribute('data-fetch-url')) {
                        allAttributes['data-fetch-url'] = element.getAttribute('data-fetch-url') || '';
                    }
                    // Continue searching up the tree, passing along collected attributes
                    return findClickableParent(element.parentElement, depth + 1, allAttributes);
                }
                const simplifiedHTML = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.processRecipe)();
                const pageMeta = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.findPageMeta)();
                const allAttributes = findClickableParent(target);
                // Generate new HTML snapshot ID
                const currentSnapshotId = (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.generateHtmlSnapshotId)(timestamp, uuid);
                // Create a serializable version of the target
                const serializedTarget = {
                    tagName: target.tagName,
                    className: target.className,
                    id: target.id,
                    innerText: target.innerText || target.value || '',
                    outerHTML: target.outerHTML
                };
                let fetchUrl;
                if (allAttributes.hasOwnProperty('data-fetch-url')) {
                    // cartInfo = await fetchCartInfo(allAttributes['data-fetch-url'])
                    fetchUrl = allAttributes['data-fetch-url'];
                }
                (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.MarkViewableElements)();
                const data = {
                    eventType,
                    timestamp: timestamp,
                    uuid: uuid,
                    target: serializedTarget,
                    htmlSnapshotId: currentSnapshotId,
                    selector: selector || '',
                    'data-semantic-id': allAttributes['data-clickable-id'] || '',
                    'element-meta-name': allAttributes['data-element-meta-name'] || '',
                    'element-meta-data': allAttributes['data-element-meta-data'] || '',
                    pageMeta: pageMeta || '',
                    fetchUrl: fetchUrl || '',
                    url: url || '',
                    windowSize: {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    htmlContent: document.documentElement.outerHTML,
                    simplifiedHTML: simplifiedHTML
                };
                if (target.tagName === 'INPUT' && target.type === 'text') {
                    data['input-terms'] = target.value;
                }
                if (target.id === 'nav-search-submit-button' && target.type === 'submit') {
                    data['input-terms'] = (_a = document.querySelector('input[id="twotabsearchtextbox"]')) === null || _a === void 0 ? void 0 : _a.value;
                }
                return data;
            });
        }
        // todo: patch removeEventListener support wrap
        // const blockSignals = {}
        // const finishSignals = {}
        const wait_for_abort = (signal) => {
            return new Promise((resolve, reject) => {
                if (signal.aborted) {
                    // If already aborted, resolve immediately
                    resolve(void 0);
                }
                else {
                    // Otherwise, listen for the abort event
                    signal.addEventListener('abort', () => resolve(void 0), { once: true });
                }
            });
        };
        const hasDefaultAction = (event) => {
            const element = event.target;
            const anchor = element.closest('a');
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
            // inside a button inside form
            if (element.closest('button') && element.closest('button').closest('form')) {
                // if the button has a type and it's button, return false
                if (element.closest('button').type === 'button') {
                    return false;
                }
                return true;
            }
            return false;
        };
        // Monkey patch addEventListener
        EventTarget.prototype.addEventListener = function (type, listener, options = {}) {
            return __awaiter(this, void 0, void 0, function* () {
                if (options && options.skip_monkey_patch) {
                    return originalAddEventListener.call(this, type, listener, options);
                }
                const callOriginalListener = (event) => {
                    if (typeof listener === 'function') {
                        listener.call(this, event);
                    }
                    else if (listener && typeof listener.handleEvent === 'function') {
                        listener.handleEvent.call(listener, event);
                    }
                };
                if (type === 'click' && listener) {
                    const wrappedListener = function (event) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (window.shouldExclude) {
                                console.log('should exclude');
                                callOriginalListener(event);
                                return;
                            }
                            const target = event.target;
                            if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
                                callOriginalListener(event);
                                return;
                            }
                            if (event.just_for_default) {
                                console.log('skip monkey patch');
                                return;
                            }
                            // Add debouncing logic
                            if (event.block_signal) {
                                const controller = new AbortController();
                                event.finish_signals.push(controller);
                                if (event.block_signal) {
                                    const signal = event.block_signal.signal;
                                    yield wait_for_abort(signal);
                                    console.log('[Monkey Patch] Debouncing click event, unblocking');
                                }
                                else {
                                    console.log('[Monkey Patch] Debouncing click event, no block signal');
                                }
                                if (typeof listener === 'function') {
                                    listener.call(this, event);
                                }
                                else if (listener && typeof listener.handleEvent === 'function') {
                                    listener.handleEvent.call(listener, event);
                                }
                                controller.abort();
                                return;
                            }
                            event.block_signal = new AbortController();
                            event.finish_signals = [];
                            console.log('[Monkey Patch] Click detected on:', event.target);
                            console.log(event);
                            const timestamp = new Date().toISOString();
                            // const anchor = target.closest('a')
                            console.log(event.target);
                            if (hasDefaultAction(event)) {
                                // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
                                console.log('[Monkey Patch] Click on cancelable');
                                event.preventDefault();
                                event.preventDefault = () => {
                                    event.my_default_prevented = true;
                                };
                                event.my_default_prevented = false;
                                console.log('after patch event', event);
                                // const targetHref = anchor.href
                                const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                                try {
                                    const screenshotComplete = new Promise((resolve, reject) => {
                                        function handleMessage(event) {
                                            if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                                event.data.timestamp === timestamp) {
                                                window.removeEventListener('message', handleMessage);
                                                if (event.data.success) {
                                                    resolve(void 0);
                                                }
                                                else {
                                                    reject(new Error(event.data.error || 'Screenshot failed'));
                                                }
                                            }
                                        }
                                        window.addEventListener('message', handleMessage);
                                        // Add timeout
                                        setTimeout(() => {
                                            window.removeEventListener('message', handleMessage);
                                            reject(new Error('Screenshot timeout'));
                                        }, TimeOut);
                                    });
                                    const interactionComplete = new Promise((resolve, reject) => {
                                        function handleMessage1(event) {
                                            if (event.data.type === 'INTERACTION_COMPLETE' &&
                                                event.data.timestamp === timestamp) {
                                                window.removeEventListener('message', handleMessage1);
                                                if (event.data.success) {
                                                    resolve(void 0);
                                                }
                                                else {
                                                    reject(new Error(event.data.error || 'Interaction failed'));
                                                }
                                            }
                                        }
                                        window.addEventListener('message', handleMessage1);
                                        // Add timeout
                                        setTimeout(() => {
                                            window.removeEventListener('message', handleMessage1);
                                            reject(new Error('Interaction timeout'));
                                        }, TimeOut);
                                    });
                                    // log before and after time
                                    const selector = (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                                        maxNumberOfPathChecks: 0
                                    });
                                    const data = yield captureInteraction('click_a', event.target, timestamp, selector, window.location.href, uuid);
                                    window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                                    window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                                    // alert("3")
                                    // Wait for screenshot to complete
                                    console.log('waiting for screenshot and interaction');
                                    yield Promise.all([screenshotComplete, interactionComplete]);
                                    console.log('screenshot and interaction complete');
                                    // console.log("completed")
                                    // debugger
                                    // alert("2")
                                    // window.location.href = targetHref
                                    // re-dispatch the event
                                }
                                catch (error) {
                                    console.error('Error:', error);
                                }
                                finally {
                                    console.log('running original listener');
                                    console.log(listener);
                                    console.log(event);
                                    event.block_signal.abort();
                                    // abort all finishSignals
                                    yield Promise.all(event.finish_signals.map((controller) => wait_for_abort(controller.signal)));
                                    callOriginalListener(event);
                                    console.log('event', event);
                                    console.log('re-dispatch the event if its not prevented, 2');
                                    if (!event.my_default_prevented) {
                                        // debugger
                                        // Clone the original event
                                        const newEvent = new MouseEvent(event.type, {
                                            bubbles: event.bubbles,
                                            cancelable: false,
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
                                }
                                return;
                            }
                            const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                            try {
                                // Create a promise to wait for screenshot completion
                                const screenshotComplete = new Promise((resolve, reject) => {
                                    function handleMessage(event) {
                                        if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                            event.data.timestamp === timestamp) {
                                            window.removeEventListener('message', handleMessage);
                                            if (event.data.success) {
                                                resolve(void 0);
                                            }
                                            else {
                                                reject(new Error(event.data.error || 'Screenshot failed'));
                                            }
                                        }
                                    }
                                    window.addEventListener('message', handleMessage);
                                    // Add timeout
                                    setTimeout(() => {
                                        window.removeEventListener('message', handleMessage);
                                        reject(new Error('Screenshot timeout'));
                                    }, TimeOut);
                                });
                                const data = yield captureInteraction('click_b', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(event.target, {
                                    maxNumberOfPathChecks: 0
                                }), window.location.href, uuid);
                                // Request screenshot
                                window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                                window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                                const interactionComplete = new Promise((resolve, reject) => {
                                    function handleMessage1(event) {
                                        if (event.data.type === 'INTERACTION_COMPLETE' &&
                                            event.data.timestamp === timestamp) {
                                            window.removeEventListener('message', handleMessage1);
                                            if (event.data.success) {
                                                resolve(void 0);
                                            }
                                            else {
                                                reject(new Error(event.data.error || 'Interaction failed'));
                                            }
                                        }
                                    }
                                    window.addEventListener('message', handleMessage1);
                                    // Add timeout
                                    setTimeout(() => {
                                        window.removeEventListener('message', handleMessage1);
                                        reject(new Error('Interaction timeout'));
                                    }, TimeOut);
                                });
                                // Wait for screenshot to complete
                                // await ASscreenshotComplete
                                // await interactionComplete
                                console.log('waiting for screenshot and interaction');
                                yield Promise.all([screenshotComplete, interactionComplete]);
                                console.log('screenshot and interaction complete');
                                // Execute original listener after screenshot is captured
                            }
                            catch (error) {
                                console.error('Error capturing screenshot:', error);
                                // Execute original listener even if screenshot fails
                            }
                            finally {
                                console.log('running original listener');
                                event.block_signal.abort();
                                // abort all finishSignals
                                yield Promise.all(event.finish_signals.map((controller) => wait_for_abort(controller.signal)));
                                callOriginalListener(event);
                            }
                        });
                    };
                    // Call the original addEventListener with the wrapped listener
                    if (options) {
                        // if boolean, set passive to true
                        if (typeof options === 'boolean') {
                            options = {
                                useCapture: false,
                                passive: false
                            };
                        }
                        else if (typeof options === 'object') {
                            options.passive = false;
                        }
                    }
                    return originalAddEventListener.call(this, type, wrappedListener, options);
                }
                else {
                    // Call the original addEventListener for non-click events
                    return originalAddEventListener.call(this, type, listener, options);
                }
            });
        };
        console.log('[Monkey Patch] addEventListener successfully patched.');
        // Function to handle clicks on <a> tags
        function handleAnchorClicks() {
            document.addEventListener('click', function (event) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (window.shouldExclude) {
                        console.log('should exclude');
                        return;
                    }
                    if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
                        return;
                    }
                    if (event.just_for_default) {
                        console.log('skip monkey patch b');
                        return;
                    }
                    // Find the closest <a> tag in case of nested elements inside the <a>
                    // const anchor = target.closest('a')
                    if (hasDefaultAction(event)) {
                        // Add debouncing logic
                        const now = Date.now();
                        if (event.block_signal) {
                            console.log('[Monkey Patch] Anchor click event hander from our own listener');
                            console.log('should already be logged in other event listeners');
                            return;
                        }
                        event.block_signal = new AbortController();
                        event.finish_signals = [];
                        const target = event.target;
                        // console.log('[Intercepted] Click on <a> tag:', anchor.href)
                        console.log('[Intercepted] Click on cancelable');
                        // if (!anchor.href.startsWith('javascript:')) {
                        event.preventDefault();
                        event.stopPropagation();
                        const timestamp = new Date().toISOString();
                        // const targetHref = anchor.hrstartPeriodicUploadef
                        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                        try {
                            // 监听截图完成的消息
                            const screenshotComplete = new Promise((resolve, reject) => {
                                function handleMessage(event) {
                                    if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                        event.data.timestamp === timestamp) {
                                        window.removeEventListener('message', handleMessage);
                                        if (event.data.success) {
                                            resolve(void 0);
                                        }
                                        else {
                                            reject(new Error(event.data.error || 'Screenshot failed'));
                                        }
                                    }
                                }
                                window.addEventListener('message', handleMessage, {
                                    capture: true
                                });
                                // 添加超时处理
                                setTimeout(() => {
                                    window.removeEventListener('message', handleMessage);
                                    reject(new Error('Screenshot timeout'));
                                }, TimeOut); // 3秒超时
                            });
                            // 发送截图请求
                            window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid }, '*');
                            const data = yield captureInteraction('click_c', event.target, timestamp, (0,_medv_finder__WEBPACK_IMPORTED_MODULE_1__.finder)(target, {
                                maxNumberOfPathChecks: 0
                            }), window.location.href, uuid);
                            window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*');
                            const interactionComplete = new Promise((resolve, reject) => {
                                function handleMessage1(event) {
                                    if (event.data.type === 'INTERACTION_COMPLETE' &&
                                        event.data.timestamp === timestamp) {
                                        window.removeEventListener('message', handleMessage1);
                                        if (event.data.success) {
                                            resolve(void 0);
                                        }
                                        else {
                                            reject(new Error(event.data.error || 'Interaction failed'));
                                        }
                                    }
                                }
                                window.addEventListener('message', handleMessage1);
                                // Add timeout
                                setTimeout(() => {
                                    window.removeEventListener('message', handleMessage1);
                                    reject(new Error('Interaction timeout'));
                                }, TimeOut);
                            });
                            // 等待截图完成
                            yield screenshotComplete;
                            yield interactionComplete;
                            // 截图确认完成后再跳转
                            // window.location.href = targetHref
                        }
                        catch (error) {
                            console.error('Error capturing screenshot:', error);
                            // window.location.href = targetHref
                        }
                        finally {
                            event.block_signal.abort();
                            yield Promise.all(event.finish_signals.map((controller) => wait_for_abort(controller.signal)));
                            console.log('re-dispatch the event if its not prevented, 1');
                            if (!event.my_default_prevented) {
                                // Clone the original event
                                const newEvent = new MouseEvent(event.type, {
                                    bubbles: event.bubbles,
                                    cancelable: false,
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
                        }
                    }
                });
            }, {
                capture: true,
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
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded');
        (0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href).then((result) => {
            console.log('shouldExclude', result);
            window.shouldExclude = result;
        });
    }, {
        once: true
    });
};
// ignore user id for now, because full check would be async.
(0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.shouldExclude)(window.location.href, true).then((result) => {
    if (!result) {
        work();
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUNiLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLO2FBQ1IsQ0FDVCxFQUFDLG1EQUFtRDtRQUN2RCxDQUFDO1FBRUQsNkNBQTZDO1FBQzdDLGtCQUFrQixFQUFFO0lBQ3RCLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtRQUN6QixXQUFXLEVBQUU7S0FDZDtJQUNELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDdkIsa0JBQWtCLEVBQ2xCLEdBQUcsRUFBRTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFDL0IsMERBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQztZQUNwQyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU07UUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUNEO1FBQ0UsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUNGO0FBQ0gsQ0FBQztBQUVELDZEQUE2RDtBQUM3RCwwREFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQ3hELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxJQUFJLEVBQUU7S0FDUDtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9yZWNpcGVfbmV3LnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL2VsZW1lbnQtcHJvY2Vzc29yLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQG1lZHYvZmluZGVyL2ZpbmRlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2luamVjdGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwb3B1cF9wcm9iYWJpbGl0eSA9IDAuMTVcbmV4cG9ydCBjb25zdCBwb3B1cF9zY3JvbGxfcHJvYmFiaWxpdHkgPSAwLjA1XG5leHBvcnQgY29uc3QgcG9wdXBfY2xpY2tfcHJvYmFiaWxpdHkgPSAwLjJcbmV4cG9ydCBjb25zdCBwb3B1cF9uYXZpZ2F0aW9uX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IHBvcHVwX3RhYkFjdGl2YXRlX3Byb2JhYmlsaXR5ID0gMC4xNVxuZXhwb3J0IGNvbnN0IGZvbGRlcl9uYW1lID0gYHVzZXJfaW50ZXJhY3Rpb25fZGF0YWAgLy8gdGhlIGZvbGRlciBuYW1lIHRvIHNhdmUgdGhlIGRhdGFcbmV4cG9ydCBjb25zdCB6aXAgPSB0cnVlIC8vIHdoZXRoZXIgdG8gemlwIHRoZSBkYXRhIHdoZW4gZG93bmxvYWRpbmdcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL2FwaS91cGxvYWQnXG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vYXBpJ1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICdoYWlsYWInXG5leHBvcnQgY29uc3QgdXJsX2luY2x1ZGVzID0gWyd3d3cuYW1hem9uLmNvbSddXG5leHBvcnQgY29uc3QgaW50ZXJhY3Rpb25fc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNfcmVjb3JkX3N0YXR1c2BcbmV4cG9ydCBjb25zdCByYXRpb25hbGVfc3RhdHVzX3VybCA9IGAke2Jhc2VfdXJsfS9yYXRpb25hbGVfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IHB1cmNoYXNlX3N0YXR1c191cmwgPSBgJHtiYXNlX3VybH0vb3JkZXJfc3RhdHVzYFxuZXhwb3J0IGNvbnN0IGNoZWNrX3VzZXJfaWRfdXJsID0gYCR7YmFzZV91cmx9L2NoZWNrX3VzZXJfaWRgXG5leHBvcnQgY29uc3QgZmlsdGVyX3VybCA9IFtcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvYnV5LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2EvYWRkcmVzc2VzJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9zaWduaW4nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hcC9jdmYvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYXAvcHJvZmlsZS8nLFxuICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9heC9hY2NvdW50LycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2FydC9kZXNrdG9wLycsXG4gICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3ByaW1lY2VudHJhbC9lZGl0UGF5bWVudFByZWZlcmVuY2UnXG5dXG5leHBvcnQgY29uc3Qgc2Nyb2xsX3RocmVzaG9sZCA9IDMwMFxuIiwiZXhwb3J0IGNvbnN0IG5hdiA9IHtcbiAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICBuYW1lOiAnbmF2X2JhcicsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWxvZ28nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0hvbWVwYWdlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gZW0/LnZhbHVlXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnc2VhcmNoX3Rlcm0nLCBkYXRhOiB7IHRlcm0gfSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnI25hdi1saW5rLWFjY291bnRMaXN0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3Qgc3Bhbi5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2FjY291bnRfYW5kX2xpc3RfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LW9yZGVycycsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdvcmRlcl9idXR0b24nXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjbmF2LWZseW91dC1zZWFyY2hBamF4JyxcbiAgICAgIG5hbWU6ICdzdWdnZXN0ZWRfdGVybXMnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc3VnZ2VzdGlvbi1jb250YWluZXInLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNuYXYteHNob3AnLFxuICAgICAgbmFtZTogJ3N0b3JlcycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRfc2lkZV9iYXIgPSB7XG4gIHNlbGVjdG9yOiAnI25hdi1mbHlvdXQtZXdjJyxcbiAgbmFtZTogJ2NhcnRfc2lkZV9iYXInLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2LmV3Yy1jYXJ0LWhlYWRlcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuZXdjLWNvbXBhY3QtYWN0aW9ucyBhJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNld2MtY29tcGFjdC1ib2R5IHVsJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2xpc3QnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGRpdltpZF49J3NjLWl0ZW0nXVwiLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXYuZXdjLWl0ZW0taW1hZ2UgYS5zYy1wcm9kdWN0LWxpbmsgaW1nOm5vdCguZXdjLXNmbC1pbWFnZS1zbWFsbCknXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdGl0bGVFbT8uYWx0IHx8ICcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKScsXG4gICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmV3Yy11bml0LXByaWNlJyxcbiAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgJ2RpdltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuW2RhdGEtYWN0aW9uPVwiYS1kcm9wZG93bi1idXR0b25cIl0nLFxuICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5ld2MtZGVsZXRlLWljb24tY29udGFpbmVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdkZWxldGUnLFxuICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltkYXRhLWEtc2VsZWN0b3I9XCJkZWNyZW1lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2RhdGEtYS1zZWxlY3Rvcj1cImluY3JlbWVudFwiXScsXG4gICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmV3Yy11bml0LXByaWNlJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgJ2Rpdi5ld2MtaXRlbS1pbWFnZSBhLnNjLXByb2R1Y3QtbGluayBpbWc6bm90KC5ld2Mtc2ZsLWltYWdlLXNtYWxsKSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uYWx0XG4gICAgICAgICAgICBjb25zdCB1cmxFbSA9IHRpdGxlRW0/LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICdkaXZbZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXSwgc3BhbltkYXRhLWFjdGlvbj1cImEtZHJvcGRvd24tYnV0dG9uXCJdLCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIG5hbWU6ICdjYXJ0X2l0ZW1zJyxcbiAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBuYW1lOiAnY2xlYXJfc2VsZWN0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAndWwgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGk6aGFzKGEuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbSknLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAvLyBjbGlja19zZWxlY3RvcjogXCJhXCIsXG4gICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmdldEF0dHJpYnV0ZSgnYXJpYS1jdXJyZW50JykgPT09ICd0cnVlJykge1xuICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgfSxcbiAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVsZW1lbnQpID0+IHtcbiAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgdGV4dCArPSAnXydcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgbmFtZUVtID0gZWxlbWVudC5jbG9zZXN0KCd1bCcpPy5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbT8uaW5uZXJUZXh0XG4gICAgICAgID8udHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9bIF0vZywgJ18nKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5yZXBsYWNlKC9eXyt8XyskL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvW19cXGRdKyQvLCAnJylcblxuICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgnaHJlZicpKSB7XG4gICAgICAgIHVybCA9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgfVxuXG4gICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOlxuICAgICAgXCJ1bCA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IGxpID4gc3BhbiA+IGRpdltkYXRhLWEtZXhwYW5kZXItbmFtZT0nZmlsdGVyLWNvbnRlbnQtZXhwYW5kZXInXVwiLFxuICAgIG5hbWU6ICdtb3JlX29wdGlvbnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcImFbZGF0YS1jc2EtYy1mdW5jLWRlcHM9J2F1aS1kYS1hLWV4cGFuZGVyLXRvZ2dsZSddXCIsXG4gICAgICAgIG5hbWU6ICd0b2dnbGVfZXhwYW5zaW9uJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgLy8gY2xpY2tfc2VsZWN0b3I6IFwiYVwiLFxuICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgIC8vIHRleHQgPSAnQ2xlYXIgT3B0aW9uICcgKyB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpXG4gICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0ICYmIGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICB0ZXh0ICs9ICdfJ1xuICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbGVtZW50LmNsb3Nlc3QoJ3VsJyk/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJ3VsJylcbiAgICAgICAgICAgID8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgID8udHJpbSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvWyBdL2csICdfJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAucmVwbGFjZSgvXl8rfF8rJC9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bX1xcZF0rJC8sICcnKVxuXG4gICAgICAgICAgbGV0IHVybCA9ICcnXG5cbiAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSkge1xuICAgICAgICAgICAgdXJsID0gYUNoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRleHQ/LnRyaW0oKSB8fCAnJywgc2VsZWN0ZWQ6IHRydWUsIHVybCB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuJyArIG5hbWUsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0ZXh0Py50cmltKCkgfHwgJycsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBwcm9kdWN0X2ZhY3RzID0ge1xuICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xufVxuXG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgc2VsZWN0b3I6ICdkaXYubWlyLWxheW91dC1ERUxJVkVSWV9CTE9DSy1zbG90LVBSSU1BUllfREVMSVZFUllfTUVTU0FHRV9MQVJHRScsXG4gIGFkZF90ZXh0OiB0cnVlLFxuICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG59XG5cbmV4cG9ydCBjb25zdCBxdWFudGl0eV9zZWxlY3RvciA9IHtcbiAgc2VsZWN0b3I6ICcjc2VsZWN0UXVhbnRpdHksIGRpdltpZF49XCJxcy13aWRnZXQtYnV0dG9uLWNvbnRhaW5lci1hdGZjXCJdJyxcbiAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xhYmVsJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IG5hbWU6ICdwcm9kdWN0X3F1YW50aXR5JywgZGF0YTogeyBxdWFudGl0eTogZW0uaW5uZXJUZXh0IH0gfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgLy8gY2xpY2thYmxlOiB0cnVlLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdidXR0b24nLFxuICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdEcm9wIERvd24gT3B0aW9uIHt9J1xuICAgIH1cbiAgXVxufVxuXG5leHBvcnQgY29uc3QgZGVsaXZlcnlfZnJlcXVlbmN5X3NlbGVjdG9yID0ge1xuICBzZWxlY3RvcjogJyNyZXBsZW5pc2htZW50RnJlcXVlbmN5X2ZlYXR1cmVfZGl2JyxcbiAgbmFtZTogJ2RlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcicsXG4gIHRleHRfc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1taWNybyA+IHNwYW4nLFxuICBhZGRfdGV4dDogdHJ1ZSxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNyY3hPcmRGcmVxT25tbFdyYXBwZXIgc3Bhbi5hLWRyb3Bkb3duLXByb21wdCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNlbGVjdCcsXG4gICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBzZXRfdXBfbm93X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6ICcjcmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlJyxcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ3NldF91cF9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3Qtc2V0LXVwLW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGFkZF90b19jYXJ0X2J1dHRvbiA9IHtcbiAgc2VsZWN0b3I6XG4gICAgXCJpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQnXSwgaW5wdXRbbmFtZT0nc3VibWl0LmFkZC10by1jYXJ0LXViYiddLCAjZnJlc2hBZGRUb0NhcnRCdXR0b24gaW5wdXRcIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgY2xhc3M6ICdwcm9kdWN0LWFkZC10by1jYXJ0J1xufVxuXG5leHBvcnQgY29uc3QgYnV5X25vd19idXR0b24gPSB7XG4gIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgYWRkX3RleHQ6IHRydWUsXG4gIGNsaWNrYWJsZTogdHJ1ZSxcbiAgbmFtZTogJ2J1eV9ub3cnLFxuICBjbGFzczogJ3Byb2R1Y3QtYnV5LW5vdydcbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aF9hY2NvcmRpb24gPSB7XG4gIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hY2NvcmRpb24tY2FwdGlvbiA+IHNwYW4nLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICBcImRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfZGVza3RvcF9hY2NvcmRpb25faGVhZGVyJ10sIGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9J29mZmVyX2Rpc3BsYXlfbW9iaWxlX2FjY29yZGlvbl9oZWFkZXInXVwiLFxuICAgICAgbmFtZTogJ2FjY29yZGlvbl9zZWxlY3RvcicsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdoNSBzcGFuLmEtdGV4dC1ib2xkJ1xuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1hY2NvcmRpb24taW5uZXIuYWNjb3JkaW9uLXJvdy1jb250ZW50JyxcbiAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IsXG4gICAgICAgIHNldF91cF9ub3dfYnV0dG9uLFxuICAgICAgICBhZGRfdG9fY2FydF9idXR0b24sXG4gICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5ID0ge1xuICBzZWxlY3RvcjogJyNnc29kX3NpbmdsZU9mZmVyRGlzcGxheV9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQnLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cCA9IHtcbiAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfZ3JvdXBfMl9EZXNrdG9wJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJyNwaWNrVXBPZmZlckRpc3BsYXknLFxuICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgYnV5X25vd19idXR0b25cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcm91c2VsX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkOm5vdCguYS1jYXJvdXNlbC1jYXJkLWVtcHR5KSwgI2dyaWRJdGVtUm9vdCcsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdhIGRpdltjbGFzcyo9XCJzYy10cnVuY2F0ZS1kZXNrdG9wXCJdLCBhIHNwYW4udGl0bGUsIGEgZGl2W2NsYXNzKj1cInNjLWNzcy1saW5lLWNsYW1wXCJdLCBhIHNwYW5bY2xhc3MqPVwidGl0bGVSM1wiXSwgZGl2W2RhdGEtY3k9XCJ0aXRsZS1yZWNpcGVcIl0sIGFbaWQqPVwidGl0bGVcIl0nXG4gICAgKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8udGl0bGUgfHwgdGl0bGVFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgcmV0dXJuIHRpdGxlXG4gIH0sXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdhOmhhcyhpbWdbY2xhc3MqPVwicHJvZHVjdC1pbWFnZVwiXSwgaW1nLmEtZHluYW1pYy1pbWFnZSwgaW1nW2NsYXNzKj1cImNhcm91c2VsLWltYWdlXCJdKSwgaW1nLnMtaW1hZ2UsIGFbdGFyZ2V0PVwiX3RvcFwiXTpoYXMoaW1nKTpub3QoOmhhcyhkaXYsIHNwYW4pKScsXG4gICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOlxuICAgICAgICAnYSBkaXZbY2xhc3MqPVwic2MtdHJ1bmNhdGUtZGVza3RvcFwiXSwgYSBkaXY6aGFzKD4gc3Bhbi50aXRsZSksIGEgZGl2W2NsYXNzKj1cInNjLWNzcy1saW5lLWNsYW1wXCJdLCBhOmhhcyhzcGFuW2NsYXNzKj1cInRpdGxlUjNcIl0pLCBkaXZbZGF0YS1jeT1cInRpdGxlLXJlY2lwZVwiXSwgYVtpZCo9XCJ0aXRsZVwiXScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpW2NsYXNzKj1cInN0YXJcIl0pLCBhOmhhcyhpW2RhdGEtY3k9XCJyZXZpZXdzLXJhdGluZ3Mtc2xvdFwiXSksIGEuYWRSZXZpZXdMaW5rJyxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZycsXG4gICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICByZXR1cm4gZW0udGl0bGUgfHwgZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nX2NvdW50JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6XG4gICAgICAgICdhW2FyaWEtZGVzY3JpYmVkYnkqPVwic3BfZGV0YWlsX3RoZW1hdGljLWRlYWxzXCJdOm5vdCg6aGFzKHNwYW4uYS1wcmljZSkpLCBhW2FyaWEtZGVzY3JpYmVkYnkqPVwic3BfZGV0YWlsX3RoZW1hdGljLXJlY2VudF9oaXN0b3J5XCJdOm5vdCg6aGFzKHNwYW4uYS1wcmljZSkpJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInNjLXByaWNlXCJdJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwic2MtcHJpY2VcIl0nLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjpcbiAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYW9rLXJlbGF0aXZlOmhhcyhzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbiksIGRpdi5hLWNvbG9yLXByaWNlOmhhcyhzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbiksIGFbYXJpYS1kZXNjcmliZWRieT1cInByaWNlLWxpbmtcIl06aGFzKHNwYW4uYS1wcmljZSBzcGFuLmEtb2Zmc2NyZWVuKScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICBuYW1lOiAncHJvZHVjdF9wcmljZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnYS5wQm9va3Mtc2YtcG9pbnRzLWNvbXBvbmVudCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X3BvaW50cydcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIHNwYW5bY2xhc3MqPVwiYWN0aW9uQnV0dG9uXCJdOmhhcyhpLmEtaWNvbi1jYXJ0KScsXG4gICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBUbyBDYXJ0JyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdLCBkaXZbaWRePVwiYXRjU3RlcHBlclNlY3Rpb25cIl0nLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXSwgYnV0dG9uW2RhdGEtYWN0aW9uPSdyZW1vdmUnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ10sIHNwYW4uYXRjU3RlcHBlclF1YW50aXR5XCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXSwgYnV0dG9uW2RhdGEtYWN0aW9uPSdhZGQnXVwiLFxuICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgIHRleHRfZm9ybWF0OiAnSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnZGl2W2lkKj1cInNjLXR1cmJvLWNvbnRhaW5lclwiXSwgZGl2W2RhdGEtYXNpbl0sIGlucHV0W2RhdGEtYXNpbl0nXG4gICAgKVxuICAgIGNvbnN0IGFzaW4gPVxuICAgICAgYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpIHx8IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdpZCcpPy5zcGxpdCgnLScpLnBvcCgpIHx8ICcnXG4gICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2Egc3BhbltjbGFzcyo9XCJzYy1wcmljZVwiXSwgc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdhIGRpdltjbGFzcyo9XCJzYy10cnVuY2F0ZS1kZXNrdG9wXCJdLCBhIHNwYW4udGl0bGUsIGEgZGl2W2NsYXNzKj1cInNjLWNzcy1saW5lLWNsYW1wXCJdLCBhIHNwYW5bY2xhc3MqPVwidGl0bGVSM1wiXSwgZGl2W2RhdGEtY3k9XCJ0aXRsZS1yZWNpcGVcIl0sIGFbaWQqPVwidGl0bGVcIl0nXG4gICAgKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8udGl0bGUgfHwgdGl0bGVFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2E6aGFzKGRpdltjbGFzcyo9XCJzYy10cnVuY2F0ZS1kZXNrdG9wXCJdKSwgYTpoYXMoc3Bhbi50aXRsZSksIGE6aGFzKHNwYW5bY2xhc3MqPVwidGl0bGVcIl0pJ1xuICAgIClcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdkaXZbbmFtZT1cImF4LXFzXCJdIGRpdltyb2xlPVwic3BpbmJ1dHRvblwiXSwgZGl2W2lkXj1cImF0Y1N0ZXBwZXJTZWN0aW9uXCJdIHNwYW4uYXRjU3RlcHBlclF1YW50aXR5J1xuICAgIClcbiAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiAnI3NjLWNvbGxhcHNlZC1jYXJ0cy1jb250YWluZXInLFxuICAgIG5hbWU6ICdjYXJ0cycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtY29sbGFwc2VkLWNhcnQtY29udGFpbmVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuc2MtY2FydC1oZWFkZXInKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID1cbiAgICAgICAgICAgIHRpdGxlRW0/LnF1ZXJ5U2VsZWN0b3IoJ2gyW2FyaWEtbGFiZWxdJyk/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG4gICAgICAgICAgICB0aXRsZUVtPy5pbm5lclRleHQgfHxcbiAgICAgICAgICAgICdjYXJ0J1xuICAgICAgICAgIHJldHVybiB0aXRsZVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYSBoMiBpbWcnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVtLmFsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1uYW1lPVwiY29sbGFwc2VkX2l0ZW1fbGlzdFwiXScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnaXRlbV9saXN0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYnV5LWJveC1pbm5lci1ib3ggaW5wdXRbbmFtZV49XCJwcm9jZWVkVG9BTE1DaGVja291dFwiXScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBhJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgdWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNoZWNrLWNoZWNrYm94LXNlbGVjdG9yIGxhYmVsJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWltYWdlLXdyYXBwZXIgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2xpLnNjLXByb2R1Y3QtdmFyaWF0aW9uJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Euc25zLW9wdC1pbi1saW5rLWRlc2t0b3AnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnNucy1yZWN1cnJlbmNlLXBlcmlvZC1zZWxlY3RvcicsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeSBldmVyeToge30nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1pdGVtLWNvbnRlbnQtZ3JvdXAgc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIGlucHV0W2RhdGEtYWN0aW9uPSdkZWxldGUnXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZGVsZXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXYuc2MtYmFkZ2UtcHJpY2UtdG8tcGF5IHNwYW4uc2MtcHJvZHVjdC1wcmljZSBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSdcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2xpLnNjLWRlbGl2ZXJ5LW1lc3NhZ2luZycpXG4gICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaXYuc2MtaXRlbS1jb250ZW50LWdyb3VwIHNwYW4uc2MtcXVhbnRpdHktc3RlcHBlciBkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWl0ZW0tY2hlY2stY2hlY2tib3gtc2VsZWN0b3IgaW5wdXQnKVxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWRFbT8uZ2V0QXR0cmlidXRlKCdjaGVja2VkJykgIT09IG51bGxcbiAgICAgICAgICBjb25zdCBvcHRpb25zRW0gPSBlbS5xdWVyeVNlbGVjdG9yQWxsKCdsaS5zYy1wcm9kdWN0LXZhcmlhdGlvbiA+IHNwYW4nKVxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uRW0gb2Ygb3B0aW9uc0VtKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXlFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdGV4dC1ib2xkJylcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlRW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbjpub3QoLmEtdGV4dC1ib2xkKScpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25LZXkgPSBvcHRpb25LZXlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1s6XFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvblZhbHVlRW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bOlxcbl0vZywgJycpLnRyaW0oKVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0geyBbb3B0aW9uS2V5XTogb3B0aW9uVmFsdWUgfVxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtcycsXG4gICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSwgcXVhbnRpdHksIHNlbGVjdGVkLCBvcHRpb25zIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gaW5wdXQnLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYS1tb2RhbC1zY3JvbGxlciBkaXYuYS1wb3BvdmVyLXdyYXBwZXInLFxuICAgIHVzZV9yb290OiB0cnVlLFxuICAgIG5hbWU6ICdzdWJzY3JpYmVfbl9zYXZlX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uLmEtYnV0dG9uLWNsb3NlJyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZScsXG4gICAgICAgIGFkZF9UZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1wb3BvdmVyLWZvb3RlciBzcGFuLmEtYnV0dG9uLWlubmVyJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtYnV0dG9uLXRleHQnXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc25zLWFjY29yZGlvbicsXG4gICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgbmFtZTogJ3N1YnNjcmliZV9uX3NhdmVfZnJlcXVlbmN5X3NlbGVjdG9yX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYm94JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX2Nhcm91c2VsX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkLCBkaXZbaWRePVwiZ3JpZEVsZW1lbnRcIl0nLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2E6aGFzKGRpdi5hLWltYWdlLWNvbnRhaW5lciknLFxuICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogXCJzcGFuW2lkXj0ncXMtd2lkZ2V0LWF0Yy1idXR0b24nXVwiLFxuICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgVG8gQ2FydCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInFzLXdpZGdldC1idXR0b24tY29udGFpbmVyLWF0ZmNcIl0nLFxuICAgICAgbmFtZTogJ3F1YW50aXR5X3NlbGVjdG9yJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsXj0nUmVtb3ZlJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0RlY3JlYXNlIHF1YW50aXR5IGJ5IDEnLFxuICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2lkXj0ncXMtd2lkZ2V0LWJ1dHRvbi1hdGZjJ11cIixcbiAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbF49J0FkZCddXCIsXG4gICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgdGV4dF9mb3JtYXQ6ICdJbmNyZWFzZSBxdWFudGl0eSBieSAxJyxcbiAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdhID4gc3BhbiA+IHNwYW4gPiBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCcsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHNlbGVjdG9yOiAnZGl2ID4gc3BhbiA+IHNwYW4gPiBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwicHJpY2VUb1BheVwiXSBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCBhLmEtc2l6ZS1taW5pJyxcbiAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICB9XG4gIF0sXG4gIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1jc2EtYy1pdGVtLWlkXj1cImFtem4xLmFzaW5cIl0nKVxuICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1jc2EtYy1pdGVtLWlkJyk/LnNwbGl0KCc6JylbMF0uc3BsaXQoJy4nKS5wb3AoKVxuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwicHJpY2VUb1BheVwiXSBzcGFuLmEtb2Zmc2NyZWVuJylcbiAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcignYTpoYXMoc3Bhbi5hLXRydW5jYXRlLWZ1bGwpJylcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1jb250YWluZXItYXRmY1wiXSBidXR0b25baWRePVwicXMtd2lkZ2V0LWJ1dHRvbi1hdGZjXCJdJ1xuICAgIClcbiAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX3N1YnN0aXR1dGlvbl9jYXJkID0ge1xuICBzZWxlY3RvcjogJ2Rpdi5zdWJzLWNhcnQtaXRlbScsXG4gIG5hbWU6ICdmcm9tX3RleHQnLFxuICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtc3BhY2luZy10b3AtYmFzZSBzcGFuLmEtc2l6ZS1iYXNlJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNwYWNpbmctdG9wLWJhc2Ugc3Bhbi5hLXNpemUtYmFzZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zcGFjaW5nLXRvcC1taW5pIHNwYW4uYS1jb2xvci1wcmljZScsXG4gICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWNhcnQtaXRlbS1hc2luXScpXG4gICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWNhcnQtaXRlbS1hc2luJylcbiAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LmEtc3BhY2luZy10b3AtYmFzZSBzcGFuLmEtc2l6ZS1iYXNlJylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXYuYS1zcGFjaW5nLXRvcC1taW5pIHNwYW4uYS1jb2xvci1wcmljZScpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHRcbiAgICByZXR1cm4geyBuYW1lOiAnYWN0aXZlX2l0ZW1zJywgZGF0YTogeyBhc2luLCB0aXRsZSwgcHJpY2UgfSB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZyZXNoX2NhcnQgPSBbXG4gIG5hdixcbiAge1xuICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLW5hbWU9J0FjdGl2ZSBJdGVtcyddXCIsXG4gICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3VsID4gbGkgPiBzcGFuLmEtbGlzdC1pdGVtID4gYS5zYy1wcm9kdWN0LXRpdGxlIHNwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtcHJvZHVjdC1pbWFnZS1kZXNrdG9wIGEgaW1nJyxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1iYWRnZS1wcmljZS10by1wYXkgc3Bhbi5zYy1wcmljZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtYWN0aW9uLWxpbmtzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdSZW1vdmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncXVhbnRpdHlfZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24td3JhcHBlciBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LWRyb3Bkb3duLWRlY2xcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwicXMtd2lkZ2V0LXF1YW50aXR5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5bZGF0YS1hY3Rpb249XCJxcy13aWRnZXQtcXVhbnRpdHktY2hhbmdlbGluay1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J0FkZCddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJylcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5hLXRydW5jYXRlLWZ1bGwnXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScpXG4gICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgY29uc3QgcXVhbnRpdHlFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2LnNjLWFjdGlvbi1saW5rcyBkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLWZsZXgtd3JhcHBlciBidXR0b24nXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcXVhbnRpdHlFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6ICdhY3RpdmVfaXRlbXMnLFxuICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgcXVhbnRpdHkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGZyZXNoX2Nhcm91c2VsX2NhcmRcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0FMTUNoZWNrb3V0XCJdJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJ1eS1ib3gtaW5uZXItYm94IGEnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICBhZGRfdGV4dDogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICcjc2MtY2FydC1hYm92ZS1hY3Rpb25zIGJ1dHRvbiwgI3NjLWNhcnQtYWJvdmUtYWN0aW9ucyBhJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgbHV4dXJ5X2Nhcm91c2VsX2NhcmQgPSB7XG4gIHNlbGVjdG9yOiAnbGkuYS1jYXJvdXNlbC1jYXJkLCBkaXZbaWRePVwiZ3JpZEVsZW1lbnRcIl0nLFxuICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJyxcbiAgY2hpbGRyZW46IFtcbiAgICB7XG4gICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgIHRleHRfc2VsZWN0b3I6ICcjYm9uZFdhbGxlZENhcm91c2VsRWxlbWVudERlc2NyaXB0aW9uJ1xuICAgIH1cbiAgXSxcbiAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpPy5zcGxpdCgnLycpLmF0KC0yKVxuICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhICNib25kV2FsbGVkQ2Fyb3VzZWxFbGVtZW50RGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGx1eHVyeV9jYXJ0ID0gW1xuICBuYXYsXG4gIHtcbiAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1uYW1lPSdBY3RpdmUgSXRlbXMnXVwiLFxuICAgIG5hbWU6ICdhY3RpdmVfaXRlbV9saXN0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1saXN0LWl0ZW0tY29udGVudCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICd1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLXByb2R1Y3QtaW1hZ2UtZGVza3RvcCBhIGltZycsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9pbWFnZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zYy1hY3Rpb24tbGlua3MnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5zYy1xdWFudGl0eS1zdGVwcGVyJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2J1dHRvbltkYXRhLWFjdGlvbj1cImEtc3RlcHBlci1kZWNyZW1lbnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3F1YW50aXR5X2Ryb3BfZG93bl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYnV0dG9uW2RhdGEtYWN0aW9uPVwiYS1zdGVwcGVyLWluY3JlbWVudFwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbZGF0YS1hY3Rpb249J2RlbGV0ZSddXCIsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbiA9IGVtLnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2LnNjLWJhZGdlLXByaWNlLXRvLXBheSBzcGFuLnNjLXByaWNlJylcbiAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUgc3Bhbi5zYy1wcm9kdWN0LXRpdGxlJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcigndWwgPiBsaSA+IHNwYW4uYS1saXN0LWl0ZW0gPiBhLnNjLXByb2R1Y3QtdGl0bGUnKVxuICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXIgZGl2W3JvbGU9XCJzcGluYnV0dG9uXCJdJylcbiAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IHF1YW50aXR5RW0/LmlubmVyVGV4dFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zJyxcbiAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIHF1YW50aXR5IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5zYy1idXktYm94LWlubmVyLWJveCBpbnB1dFtuYW1lXj1cInByb2NlZWRUb0x1eHVyeUNoZWNrb3V0XCJdJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgYWRkX3RleHQ6IHRydWVcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgYnV5X2FnYWluID0gW1xuICBuYXYsXG4gIGNhcnRfc2lkZV9iYXIsXG4gIHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb246aGFzKGRpdi5maWx0ZXItY29udGFpbmVyKScsXG4gICAgbmFtZTogJ2ZpbHRlcnMnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2LmZpbHRlci1jb250YWluZXInLFxuICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbiNmaWx0ZXItY29udGFpbmVyLWhlYWRlcicsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtLmlubmVyVGV4dFxuICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbVxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdkaXYuZmlsdGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLWNvbnRhaW5lci1oZWFkZXInKVxuICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1sgXS9nLCAnXycpLnRvTG93ZXJDYXNlKCkudHJpbSgpXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IHRpdGxlPy50cmltKCkgfHwgJycsIHNlbGVjdGVkOiB0cnVlIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsdGVycy4nICsgbmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlOiB0aXRsZT8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgc2VsZWN0b3I6ICdkaXYuYWxtLWdyaWQtZGVza3RvcC1ncmlkLWNvbnRhaW5lcicsXG4gICAgbmFtZTogJ3Byb2R1Y3RfbGlzdCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZ3JpZENlbGxcIl0nLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ10gYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdncmlkRWxlbWVudCddXCIsXG4gICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdjbG9zZWRDYXJkJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xvc2VkX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0naW5mbyddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdvcGVuX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIFByb2R1Y3QgQ2FyZCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybSBzcGFuLmEtYnV0dG9uLWlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwic2VlQnV5aW5nT3B0aW9uc1dyYXBwZXJcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfYnV5aW5nX29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VycmVudCBRdWFudGl0eToge30nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nSW5jcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdpbmNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2lkXj0nZXhwYW5kZWRJbWFnZSddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Nsb3NlX3Byb2R1Y3RfY2FyZCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UgUHJvZHVjdCBDYXJkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltpZF49J2Nsb3NlZENhcmQnXSBkaXZbaWRePSdpbmZvJ11cIilcbiAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnZGl2W2lkXj1cImNsb3NlZENhcmRcIl0gZGl2W2lkXj1cImluZm9cIl0gc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknXG4gICAgICAgICAgKVxuICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGl2W2lkXj0nY2xvc2VkQ2FyZCddIGFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICApXG4gICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICdkaXZbaWRePVwiY2xvc2VkQ2FyZFwiXSBkaXZbaWRePVwiaW5mb1wiXSAjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50J1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FjdGl2ZV9pdGVtc19jbG9zZWQnLCBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgZGVsaXZlcnkgfSB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlYXR1cmVkXCJdJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6IFwiYVtpZF49J3RpdGxlJ10gc3Bhbi5hLXRydW5jYXRlLWZ1bGxcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJkZXRhaWxDb250ZW50V3JhcHBlclwiXSBkaXZbaWRePVwiZGV0YWlsQ29udGVudFwiXScsXG4gICAgICAgICAgICBuYW1lOiAnZGV0YWlsZWRfY29udGVudCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6aGFzKD4gaW1nKScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXVwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2NsYXNzKj0nbXVsdGlPZmZlclBpbGxDb250YWluZXInXSBhXCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgIFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nTkVXJ10sIGRpdltjbGFzcyo9J2FzaW5EZXRhaWxJbmZvQ29sdW1ucyddOmhhcyhpbnB1dFtuYW1lPSdzdWJtaXQuYWRkVG9DYXJ0J11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnb25lX3RpbWVfcHVyY2hhc2UnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN1ZG1EZWxpdmVyeU1lc3NhZ2VDb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQnV0dG9uc1Jvd1wiXSwgZGl2W2NsYXNzKj1cImFzaW5EZXRhaWxBY3Rpb25zUm93XCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImJ1eS1ub3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cImZlZWRiYWNrQnV0dG9uU2VjdGlvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfaXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W25hbWU9XCJheC1xc1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0RlY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbcm9sZT0nc3BpbmJ1dHRvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0uY2xvc2VzdCgnZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eUVtID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W25hbWU9XCJheC1xc1wiXSBkaXZbcm9sZT1cInNwaW5idXR0b25cIl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBxdWFudGl0eUVtPy5pbm5lclRleHQgfHwgJzEnXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zX29wZW5lZF9wdXJjaGFzZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIGRlbGl2ZXJ5LCBxdWFudGl0eSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtYnV5aW5nb3B0aW9udHlwZT0nU05TJ10sIGRpdltjbGFzcyo9J3Nuc1Vwc2VsbEJsb2NrQ29udGFpbmVyJ11cIixcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnc3BhbltjbGFzcyo9XCJwcmljZUJsb2NrV2l0aE1hcmdpblJpZ2h0XCJdIHNwYW4uYS1wcmljZSA+IHNwYW46bm90KC5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImFjdGlvbkJ1dHRvbnNSb3dcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dFtuYW1lPVwic3VibWl0LmFkZFRvQ2FydFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJzbnNCdXR0b25cIl0gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiZmVlZGJhY2tCdXR0b25TZWN0aW9uXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZV9pdGVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuW2NsYXNzKj1cInN1YnNjcmlwdGlvbkJ1dHRvblwiXSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2V0X3VwX3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0uY2xvc2VzdCgnZGl2W2RhdGEtYXNpbl0nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuW2NsYXNzKj1cInByaWNlQmxvY2tXaXRoTWFyZ2luUmlnaHRcIl0gc3Bhbi5hLXByaWNlID4gc3Bhbjpub3QoLmEtb2Zmc2NyZWVuKSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9bXFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImFbaWRePSd0aXRsZSddIHNwYW4uYS10cnVuY2F0ZS1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcignI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGRlbGl2ZXJ5RW0/LmlubmVyVGV4dC5yZXBsYWNlKC9bXFxuXS9nLCAnICcpXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWN0aXZlX2l0ZW1zX29wZW5lZF9zbnMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsLCBkZWxpdmVyeSB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbaWRePSdkZXRhaWwtdmlldy1zaW1pbGFyLWl0ZW1zJ11cIixcbiAgICAgICAgICAgIG5hbWU6ICdzaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtaW1hZ2UtY29udGFpbmVyOmhhcyg+IGltZyknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbaWRePSd0aXRsZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS10cnVuY2F0ZS1mdWxsJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcmljZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3VkbURlbGl2ZXJ5TWVzc2FnZUNvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0sIGlucHV0W25hbWVePVwiYXRmY1NoaW1cIl0sIGJ1dHRvblthcmlhLWxhYmVsPVwiQWRkIHRvIENhcnQuIENsaWNrIHRvIGNoYW5nZSBxdWFudGl0eVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cInNlZUJ1eWluZ09wdGlvbnNXcmFwcGVyXCJdIGEnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX2J1eWluZ19vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbbmFtZT1cImF4LXFzXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJidXR0b25bYXJpYS1sYWJlbD0nRGVjcmVhc2UgcXVhbnRpdHkgYnkgb25lJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltyb2xlPSdzcGluYnV0dG9uJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdJbmNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnFzLXdpZGdldC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWw9J1JlbW92ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWNyZWFzZV9xdWFudGl0eV9ieV9vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5xcy13aWRnZXQtZHJvcGRvd24tZmxleC13cmFwcGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYucXMtd2lkZ2V0LWRyb3Bkb3duLXdyYXBwZXIgc3BhbltkYXRhLWFjdGlvbj1cInFzLXdpZGdldC1kcm9wZG93bi1kZWNsXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlX3Jvb3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRHJvcCBEb3duIE9wdGlvbiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1xdWFudGl0eS1jb250YWluZXItYXRmY1wiXSBzcGFuW2RhdGEtYWN0aW9uPVwicXMtd2lkZ2V0LXF1YW50aXR5LWNoYW5nZWxpbmstZGVjbFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2W2lkXj1cInFzLXdpZGdldC1zdW1tYXJ5LWNvbnRhaW5lci1hdGZjXCJdIHNwYW5baWRePVwicXMtd2lkZ2V0LXN1bW1hcnktYXRjLWF0ZmNcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vfcm9vdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsPSdBZGQnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2luY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFRpdGxlRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnZGl2W2lkXj1cImZlYXR1cmVkXCJdJylcbiAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbaWRePVwiZGV0YWlsQ29udGVudFdyYXBwZXJcIl0gYVtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50VGl0bGUgPSBwYXJlbnRUaXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXlxcd10rL2csICdfJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJkZWxpZ2h0RmFjZW91dFwiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW5bY2xhc3MqPVwicHJpY2VCbG9ja1dpdGhNYXJnaW5SaWdodFwiXSBzcGFuLmEtcHJpY2UgPiBzcGFuOm5vdCguYS1vZmZzY3JlZW4pJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXCJhW2lkXj0ndGl0bGUnXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbFwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybEVtID0gZW0ucXVlcnlTZWxlY3RvcihcImFbaWRePSd0aXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCcjdWRtRGVsaXZlcnlNZXNzYWdlQ29tcG9uZW50JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gZGVsaXZlcnlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1tcXG5dL2csICcgJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBhcmVudFRpdGxlICsgJy5zaW1pbGFyX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnI3Nuc1Vwc2VsbE1vZGFsJyxcbiAgICBuYW1lOiAnc3Vic2NyaWJlX2FuZF9zYXZlX3BvcG92ZXInLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cIm1vZGFsSGVhZGVyXCJdJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwibW9kYWxIZWFkZXJUZXh0XCJdJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bZGF0YS1hY3Rpb249XCJhLXBvcG92ZXItY2xvc2VcIl0nLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0Nsb3NlJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJtb2RhbENvbnRlbnRcIl0nLFxuICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXY6bm90KFtjbGFzcyo9XCJidXR0b25Db250YWluZXJcIl0pOm5vdCg6aGFzKHNlbGVjdCkpJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyB7XG4gICAgICAgICAgLy8gICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgIC8vICAgbmFtZTogJ29wZW5fZHJvcF9kb3duX2xpc3QnLFxuICAgICAgICAgIC8vICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIC8vICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgLy8gICB0ZXh0X2Zvcm1hdDogXCJEZWxpdmVyeSBldmVyeToge31cIixcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImJ1dHRvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiY2FuY2VsQnV0dG9uQ29udGFpbmVyXCJdIGlucHV0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwic3Vic2NyaXB0aW9uQnV0dG9uQ29udGFpbmVyXCJdIGlucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBTdWJzY3JpcHRpb24gdG8gQ2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJtb2RhbENvbnRlbnRcIl0nKVxuICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uaWQ/LnNwbGl0KCctJylbMV0/LnRyaW0oKVxuICAgICAgcmV0dXJuIHsgbmFtZTogJ3BvcG92ZXJfaXRlbScsIGRhdGE6IHsgYXNpbiB9IH1cbiAgICB9XG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHBvcHVsYXJfcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIG5hdixcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcjemdfaGVhZGVyJyxcbiAgICAgICAgbmFtZTogJ2NhdGVnb3JpZXMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJ6Zy1iYW5uZXItbGFuZGluZy1wYWdlLWhlYWRlclwiXScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJnLW5hdi10cmVlLWFsbF9zdHlsZV96Zy1icm93c2Utcm9vdFwiXScsXG4gICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiemctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLXJvb3QtYnJvd3NlLWl0ZW1cIl0gPiBhLCBkaXZbY2xhc3MqPVwiemctbmF2LXRyZWUtYWxsX3N0eWxlX3pnLWJyb3dzZS1pdGVtXCJdID4gYScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJ6Zy1uYXYtdHJlZS1hbGxfc3R5bGVfemctcm9vdC1icm93c2UtaXRlbVwiXSA+IHNwYW4sIGRpdltjbGFzcyo9XCJ6Zy1uYXYtdHJlZS1hbGxfc3R5bGVfemctYnJvd3NlLWl0ZW1cIl0gPiBzcGFuJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxJyxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWNhcm91c2VsLWhlYWRlci1yb3cgYScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gIHtcbiAgICBtYXRjaDogJy8nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuZ3ctY29sJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICdoMSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDIgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgzIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMTpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpLCBoMjpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpLCBoMzpub3QoOmhhcyhzcGFuLmEtdHJ1bmNhdGUtZnVsbCkpJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2gxIHNwYW4uYS10cnVuY2F0ZS1mdWxsLCBoMiBzcGFuLmEtdHJ1bmNhdGUtZnVsbCwgaDMgc3Bhbi5hLXRydW5jYXRlLWZ1bGwsIGgxOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSksIGgyOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSksIGgzOm5vdCg6aGFzKHNwYW4uYS10cnVuY2F0ZS1mdWxsKSknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG4gICAgICAgICAgICAgICAgICAgIGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpPy5hbHQgfHxcbiAgICAgICAgICAgICAgICAgICAgZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXRydW5jYXRlLWZ1bGwnKT8uaW5uZXJUZXh0IHx8XG4gICAgICAgICAgICAgICAgICAgIGVtLmlubmVyVGV4dCB8fFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jYXJkLW1ldHJpY3MtaWQqPVwicmhmXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY2FyZC1tZXRyaWNzLWlkKj1cInJ2aVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0ucXVlcnlTZWxlY3RvcignaW1nJyk/LmFsdCB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9mbWMvc3RvcmVmcm9udCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtuYXYsIGNhcnRfc2lkZV9iYXJdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvcycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtdG9vbGJhcicsXG4gICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHNfdG9vbGJhcicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnc3BhbltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJuYXYtcmliXCJdLCBkaXZbZGF0YS1jc2EtYy1zbG90LWlkPVwibmF2LXJpYlwiXSwgYS5zZi1jbGVhci1hbGwnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NhLWMtY29udGVudC1pZCcpID09ICdzLWFsbC1maWx0ZXJzJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1Nob3cgQWxsIEZpbHRlcnMnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgZW0uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLWRyb3Bkb3duLW1haW4tY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3RzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zZi1yaWItdjEtZHJvcGRvd24tcG9wdXAtdGl0bGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJpYi12MS1kcm9wZG93bi1wb3B1cC10aXRsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwgc3Bhbltyb2xlPVwibGlzdGl0ZW1cIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2YtcmliLXYxLXJhbmdlLXNsaWRlci1sYWJlbC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc2xpZGVyLWNvbnRhaW5lciBkaXYucy1sb3dlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtc2xpZGVyLWNvbnRhaW5lciBkaXYucy11cHBlci1ib3VuZCBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwX3ZhbHVlczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcCA9IGZvcm1FbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVyLXByb3BzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGVwc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIucGFyc2VJbnQoZW0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2LnNmLXJpYi12MS1kcm9wZG93bi1idXR0b25zIGJ1dHRvbiwgZGl2LnNmLXJpYi12MS1kcm9wZG93bi1idXR0b25zIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0b3BSZWZpbmVtZW50c1xcXFwvMCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvcF9yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1JlY2VudGx5IHVzZWQgZmlsdGVycycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlubmVyVGV4dCAmJiBlbGVtZW50LmlubmVyVGV4dC50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCAmJiBhQ2hpbGQuaGFzQXR0cmlidXRlKCd0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2RlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnRGVwYXJ0bWVudCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgPT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMuZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLmRlcGFydG1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Jldmlld3NSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ3VzdG9tZXIgUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLnMtbmF2aWdhdGlvbi1jbGVhci1saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImxpIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcgJyk/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5yZXZpZXdzJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwibGkgYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnICcpPy50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucmV2aWV3cycsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJpY2VSZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgLy8gMiBjYXNlczogc2VsZWN0aW9uIC8gc2xpZGVyXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BfMzYtdGl0bGUsIGRpdi5zZi1yZWZpbmVtZW50LWhlYWRpbmcgc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfaGVhZGluZydcbiAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMTogc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdlthcmlhLWxhYmVsbGVkYnk9J3BfMzYtdGl0bGUnXSA+IGFcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjbGVhcl9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInVsW2FyaWEtbGFiZWxsZWRieT0ncF8zNi10aXRsZSddIGFbYXJpYS1jdXJyZW50PSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfZm9ybWF0OiAnQ2xlYXIgT3B0aW9uIHt9JyxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IHRydWUsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwXzM2LXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J2ZhbHNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGVtPy5pbm5lclRleHQ/LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdyZWZpbmVtZW50cy5wcmljZScsIGRhdGE6IHsgdGl0bGUsIHNlbGVjdGVkOiBmYWxzZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIDI6IHNsaWRlclxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xccysvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZTogJ3ByaWNlX3JhbmdlJywgcmFuZ2UgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJhbmdlLXNsaWRlci1yb3c6bnRoLW9mLXR5cGUoMikgZGl2LnMtbG93ZXItYm91bmQgaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2VfbWluX3ZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRfanM6IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgdGV4dCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS12YWx1ZXRleHRcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyh0ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydtaW4nLCAnbWF4JywgJ3N0ZXAnXSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVfYXR0cjoge1xuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBfdmFsdWVzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1FbSA9IGVtLmNsb3Nlc3QoJ2Zvcm0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudF92YWx1ZTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChlbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtRW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0gZm9ybUVtLmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZXItcHJvcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2UocHJvcCkuc3RlcExhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ZXBzW3ZhbHVlXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zZi1yYW5nZS1zbGlkZXItcm93Om50aC1vZi10eXBlKDIpIGRpdi5zLXVwcGVyLWJvdW5kIGlucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ByaWNlX21heF92YWx1ZScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0X2pzOiAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHRleHQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ21pbicsICdtYXgnLCAnc3RlcCddLFxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZV9hdHRyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcF92YWx1ZXM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybUVtID0gZW0uY2xvc2VzdCgnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybUVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBKU09OLnBhcnNlKHByb3ApLnN0ZXBMYWJlbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X3ZhbHVlOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGVtLmdldEF0dHJpYnV0ZSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRW0gPSBlbS5jbG9zZXN0KCdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1FbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtRW0uZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlci1wcm9wcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShwcm9wKS5zdGVwTGFiZWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcHNbdmFsdWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXN1Ym1pdC1yYW5nZS1idXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3VibWl0X3ByaWNlX3JhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnR28nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNmLXJlc2V0LXJhbmdlLWxpbmsgYScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNldF9wcmljZV9zZWxlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Bfbl9kZWFsX3R5cGUtdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlYWxzX2Rpc2NvdW50c19oZWFkaW5nJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2FyaWEtbGFiZWxsZWRieT0ncF9uX2RlYWxfdHlwZS10aXRsZSddID4gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NsZWFyX2RlYWxzX2Rpc2NvdW50X3NlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwidWxbYXJpYS1sYWJlbGxlZGJ5PSdwX25fZGVhbF90eXBlLXRpdGxlJ10gYVthcmlhLWN1cnJlbnQ9J3RydWUnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGV4dF9mb3JtYXQ6ICdDbGVhciBPcHRpb24ge30nLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBlbT8uaW5uZXJUZXh0Py50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBlbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncmVmaW5lbWVudHMucHJpY2UnLCBkYXRhOiB7IHRpdGxlLCBzZWxlY3RlZDogdHJ1ZSwgdXJsIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJ1bFthcmlhLWxhYmVsbGVkYnk9J3Bfbl9kZWFsX3R5cGUtdGl0bGUnXSBhW2FyaWEtY3VycmVudD0nZmFsc2UnXVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0/LmlubmVyVGV4dD8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3JlZmluZW1lbnRzLnByaWNlJywgZGF0YTogeyB0aXRsZSwgc2VsZWN0ZWQ6IGZhbHNlLCB1cmwgfSB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Omhhcyg+IHNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoZ3JpZC1jYXJvdXNlbFwiXSknLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNnLXJvdyBoMicsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2ctcm93IGgyJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLW1haW4tc2xvdC5zLXJlc3VsdC1saXN0LnMtc2VhcmNoLXJlc3VsdHMnLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5BZEhvbGRlcicsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2FkcycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1hc2luXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGl0bGVFbT8uZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0LnRyaW0oKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FsdCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFwiYVtkYXRhLXR5cGU9J3Byb2R1Y3RUaXRsZSddXCIpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ2FkcycsIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltkYXRhLWNvbXBvbmVudC10eXBlPVwicy1zZWFyY2gtcmVzdWx0XCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYS5hLWxpbmstbm9ybWFsLnMtbGluay1zdHlsZS5hLXRleHQtbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfbmFtZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtcHJvZHVjdC1pbWFnZS1jb250YWluZXIsIGRpdi5zLWltYWdlLW92ZXJsYXktYmxhY2snLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtY29sb3Itc3dhdGNoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdmFpbGFibGVfY29sb3JzJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5zLWNvbG9yLXN3YXRjaC1wYWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbS5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhQ2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWNzYS1jLXR5cGU9J2xpbmsnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2LnMtdmFyaWF0aW9ucy1vcHRpb25zLWVsZXZhdGVkLCBkaXYucy12YXJpYXRpb25zLW9wdGlvbnMtanVzdGlmeS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ncmV2aWV3cy1ibG9jayddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYTpoYXMoaVtkYXRhLWN5PVwicmV2aWV3cy1yYXRpbmdzLXNsb3RcIl0pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcmF0aW5nX2NvdW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWw6aGFzKD4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfcHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnYSA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdhZGQtdG8tY2FydCddIGJ1dHRvbiwgc3BhbltpZCo9J2FkZC10by1jYXJ0J10gaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0ncy1zZWFyY2gtc2VlLWRldGFpbHMtYnV0dG9uJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VlX29wdGlvbnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltuYW1lPVwiYXgtcXNcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVjcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnQgUXVhbnRpdHk6IHt9J1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwsIGgyLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsIHNwYW4nXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhLmEtbGluay1ub3JtYWwucy1saW5rLXN0eWxlLmEtdGV4dC1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUVtID0gZW0ucXVlcnlTZWxlY3RvcihcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiKVxuICAgICAgICAgICAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBkZWxpdmVyeUVtPy5pbm5lclRleHQucmVwbGFjZSgvW1xcbl0vZywgJyAnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3NlYXJjaF9yZXN1bHRzJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCwgZGVsaXZlcnkgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci13cmFwcGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWRlci5hLXBvcG92ZXItaGVhZGVyIGJ1dHRvbicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbG9zZScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDbG9zZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24nLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtcm93Om50aC1vZi10eXBlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcInNwYW5bZGF0YS1jb21wb25lbnQtdHlwZT0ncy1wcm9kdWN0LWltYWdlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXRpdGxlIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tcHJvZHVjdC1zcGVjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3NwZWNpZmljYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpudGgtb2YtdHlwZSgyKScsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1kcm9wZG93bi1wcm9tcHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiBcInNwYW5bYXJpYS1oaWRkZW49J3RydWUnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLXNpemUtdmFyaWF0aW9uLWRlbGl2ZXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMyknLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtbm8tanMtaGlkZSBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5wdWlzLWF0Y2ItYWRkLWNvbnRhaW5lciBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luID0gZW0ucXVlcnlTZWxlY3RvcignZGl2W2RhdGEtYXNpbl0nKT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnZGl2LmEtcG9wb3Zlci1pbm5lciBkaXYucHVpcy1hdGMtc2l6ZS12YXJpYXRpb24gZGl2LmEtcm93Om50aC1vZi10eXBlKDIpIGRpdi5wdWlzLXNpemUtdmFyaWF0aW9uLXByaWNlIGEuYS10ZXh0LW5vcm1hbCBzcGFuW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICdkaXYuYS1wb3BvdmVyLWlubmVyIGRpdi5wdWlzLWF0Yy1zaXplLXZhcmlhdGlvbiBkaXYuYS1yb3c6bnRoLW9mLXR5cGUoMSkgZGl2LnB1aXMtc2l6ZS12YXJpYXRpb24tdGl0bGUgYSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dFxuICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IHRpdGxlRW1cbiAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hY3Rpb249XCJhLWRyb3Bkb3duLWJ1dHRvblwiXScpXG4gICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNFbSA9IGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJ2Rpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgxKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LXNwZWMsIGRpdi5hLXBvcG92ZXItaW5uZXIgZGl2LnB1aXMtYXRjLXNpemUtdmFyaWF0aW9uIGRpdi5hLXJvdzpudGgtb2YtdHlwZSgyKSBkaXYucHVpcy1zaXplLXZhcmlhdGlvbi1wcm9kdWN0LW9wdGlvbnMnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uRW0gb2Ygb3B0aW9uc0VtKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uS2V5RW0gPSBvcHRpb25FbT8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVFbSA9IG9wdGlvbkVtPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLCBzcGFuLmEtZHJvcGRvd24tcHJvbXB0J1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25LZXkgPSBvcHRpb25LZXlFbT8uaW5uZXJUZXh0LnJlcGxhY2UoL1s6XFxuXS9nLCAnJykudHJpbSgpXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZUVtPy5pbm5lclRleHQucmVwbGFjZSgvWzpcXG5dL2csICcnKS50cmltKClcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7IFtvcHRpb25LZXldOiBvcHRpb25WYWx1ZSB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwb3BvdmVyX2l0ZW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwsIG9wdGlvbnMgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcjcHJvZHVjdFRpdGxlLCAjdGl0bGVCbG9jaycsXG4gICAgbWF0Y2hfdGV4dDogJycsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIGNhcnRfc2lkZV9iYXIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ10sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGU6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmRCeUxpbmVfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9icmFuZCcsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYnJhbmQ6IGVtPy5pbm5lclRleHQgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmRCeUxpbmVfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3RpdGxlJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogZW0/LmlubmVyVGV4dCB8fCAnJyB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXZlcmFnZUN1c3RvbWVyUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdjpoYXMoI3Nucy1iYXNlLXByaWNlKSAjc25zLWJhc2UtcHJpY2Ugc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgJyArXG4gICAgICAgICAgICAgICAgICAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0nICtcbiAgICAgICAgICAgICAgICAgICcgPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgJyArXG4gICAgICAgICAgICAgICAgICAnI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2Rpdjpub3QoOmhhcygjc25zLWJhc2UtcHJpY2UpKSBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5LCAnICtcbiAgICAgICAgICAgICAgICAgICcjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9XCJhcGV4X3dpdGhfcmlvX2N4XCJdICcgK1xuICAgICAgICAgICAgICAgICAgJyNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgcHJpY2U6IGVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1xcbi9nLCAnJykgfHwgJycgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvXFxuL2csICcnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5ib25kQXBleFByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJpY2U6IHt9JyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHByaWNlOiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJycpIHx8ICcnIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0d2lzdGVyJyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKSA+IGxhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpIGxhYmVsLmEtZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmlubmVySFRNTC5yZXBsYWNlKC9bOlxcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCkgc3Bhbi5zZWxlY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXR0b25fbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBpbWdDaGlsZC5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBuZXcgdHdpc3RlcnNcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXItcGx1cy1pbmxpbmUtdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LW9wdGlvbnMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X29wdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXJvdycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpdi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUtZXhwYW5kZWQgc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gZW0ucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk/LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLmdldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBvcHRpb24uaW5uZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAncHJvZHVjdF9vcHRpb25zJywgZGF0YTogeyBbbGFiZWxdOiB2YWx1ZS50cmltKCkgfSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlLXRydW5jYXRlLWV4cGFuZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uaW5saW5lLXR3aXN0ZXItZGltLXRpdGxlLXZhbHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1dHRvbl9saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpOmhhcyhzcGFuLmEtYnV0dG9uOm5vdCguYW9rLWhpZGRlbikgaW5wdXQpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi10ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0RW0uaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IHRleHRFbS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9ICcgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gaW1nQ2hpbGQuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gdGV4dEVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWdDaGlsZCAmJiBpbWdDaGlsZC5hbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmlubGluZS10d2lzdGVyLXNpbmdsZXRvbi1oZWFkZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLXNlY29uZGFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmlubGluZS10d2lzdGVyLWRpbS10aXRsZS12YWx1ZS10cnVuY2F0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3Itc2Vjb25kYXJ5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uaW5uZXJIVE1MLnJlcGxhY2UoL1s6XFxuXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3Bhbi5pbmxpbmUtdHdpc3Rlci1kaW0tdGl0bGUtdmFsdWUtdHJ1bmNhdGUnXG4gICAgICAgICAgICAgICAgICAgICAgKT8uaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsIGRhdGE6IHsgW2xhYmVsXTogdmFsdWUudHJpbSgpIH0gfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlciB1bC5hLXVub3JkZXJlZC1saXN0LCAjZmVhdHVyZWJ1bGxldHNfZmVhdHVyZV9kaXYgdWwuYS11bm9yZGVyZWQtbGlzdCwgI2JvbmQtZmVhdHVyZS1idWxsZXRzLWRlc2t0b3AgdWwuYS11bm9yZGVyZWQtbGlzdCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Fib3V0X3RoaXNfaXRlbScsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBYm91dCB0aGlzIGl0ZW06ICcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgIGJ1bGxldF9saXN0OiBlbT8uaW5uZXJUZXh0Py5yZXBsYWNlKC9cXG4vZywgJyAnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6aGFzKGRpdi5hLXRhYi1jb250YWluZXIpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKTpub3QoOmhhcygjbHV4dXJ5X2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMSBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2hlYWRpbmdfZGVza3RvcF9idXlib3hfZ3JvdXBfMiBhJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cF90YWInLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtidXlfYm94X3dpdGhfYWNjb3JkaW9uLCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX2RlbGl2ZXJ5XVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9waWNrX3VwXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgJyNidXlib3g6bm90KDpoYXMoZGl2LmEtdGFiLWNvbnRhaW5lcikpOm5vdCg6aGFzKCNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3ApKTpub3QoOmhhcygjbHV4dXJ5X2J1eWJveF9kZXNrdG9wKSknLFxuICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwYXJ0aWFsU3RhdGVfYnV5Ym94X2Rlc2t0b3AnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3BhcnRpYWxTdGF0ZUJ1eWJveCBkaXYuYS1zZWN0aW9uLmEtdGV4dC1jZW50ZXIuYS1zcGFjaW5nLXNtYWxsJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWxzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW46IGFzaW5FbT8udmFsdWUgfHwgJycgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNidXlib3g6aGFzKCNsdXh1cnlfYnV5Ym94X2Rlc2t0b3ApJyxcbiAgICAgICAgICAgIG5hbWU6ICdidXlib3gnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmRBcGV4UHJpY2VfZmVhdHVyZV9kaXYnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZWxpdmVyeUJsb2NrTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWRyb3Bkb3duLWNvbnRhaW5lciBzZWxlY3QnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2JvbmQtYXRjLWJ1dHRvbiBpbnB1dCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdBZGQgVG8gQ2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbHMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYXNpbjogYXNpbkVtPy52YWx1ZSB8fCAnJyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI291dE9mU3RvY2snLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0N1cnJlbnRseSBVbmF2YWlsYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmNhcmRSb290LmJ1Y2tldCcsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMiNzaW1pbGFyaXRpZXMtcHJvZHVjdC1idW5kbGUtd2lkZ2V0LXRpdGxlJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyI3NpbWlsYXJpdGllcy1wcm9kdWN0LWJ1bmRsZS13aWRnZXQtdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJkZXNrdG9wLXNpbXMtZmJ0X2ZidC1kZXNrdG9wX25ldy1kZXRhaWwtZmFjZW91dC1ib3hcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXZbaWRePVwiUHJvZHVjdFRpdGxlXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0W2lkXj1cImZidENoZWNrXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDaGVja2JveCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiZGVza3RvcC1zaW1zLWZidF9mYnQtZGVza3RvcF9pbWFnZS1saW5rXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIlByb2R1Y3RUaXRsZVwiXTpoYXMoYSknLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIlByb2R1Y3RUaXRsZVwiXTpub3QoOmhhcyhhKSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6XG4gICAgICAgICAgICAgICAgICAgICAgJ2RpdltjbGFzcyo9XCJkZXNrdG9wLXNpbXMtZmJ0X3ByaWNlX3AxM25cIl0gc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hZGQtdG8tY2FydC1idXR0b24nLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdiNkcDpub3QoLmdyb2NlcnkpOm5vdCgubHV4dXJ5KSAjc2ltaWxhcml0aWVzX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcsIGgxW2NsYXNzKj1cImNhcm91c2VsLWhlYWRpbmdcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lmdyb2NlcnkgI3NpbWlsYXJpdGllc19mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmcmVzaF9jYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5sdXh1cnkgI3NpbWlsYXJpdGllc19mZWF0dXJlX2RpdicsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nLCBoMVtjbGFzcyo9XCJjYXJvdXNlbC1oZWFkaW5nXCJdJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsdXh1cnlfY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcHJvZHVjdC1jb21wYXJpc29uX2ZlYXR1cmVfZGl2JyxcbiAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2NvbXBhcmlzb24nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDInLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhID4gZGl2W2lkXj1cImltYWdlQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYgPiBkaXZbaWRePVwiaW1hZ2VDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EgPiBkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2ID4gZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0cjpoYXMoaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXRbbmFtZT1cInN1Ym1pdC5hZGRUb0NhcnRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0cjpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcignZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJzdWJtaXQuYWRkVG9DYXJ0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW5zJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVwbGFjZSgvW1xcW1xcXVwiXS9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCd0Ym9keScpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ3RyOmhhcyhzcGFuLmEtcHJpY2UpJylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gcHJpY2VFbT8uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RyOmhhcyhkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0pJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnYTpoYXMoZGl2W2NsYXNzXj1cIl9wcm9kdWN0LWNvbXBhcmlzb24tZGVza3RvcF90aXRsZVN0eWxlXCJdKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uaHJlZiB8fCB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG5hbWU6ICdjb21wYXJpc29uX2l0ZW1zJywgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKHNwYW4uYS1wcmljZSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCd0cicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9wcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndHI6aGFzKGRpdltjbGFzcyo9XCJkZWxpdmVyeVwiXSknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGRbY2xhc3MqPVwiYXNpblwiXScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gZW0uY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY2xzKSA9PiBgLiR7Y2xzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgndGJvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yQWxsKCd0cicpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzc149XCJfcHJvZHVjdC1jb21wYXJpc29uLWRlc2t0b3BfdGl0bGVTdHlsZVwiXScpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHRFbT8uaW5uZXJUZXh0IHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiZGVsaXZlcnlcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3RfZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RyOmhhcyhkaXZbY2xhc3MqPVwicmV2aWV3cy1yYXRpbmdcIl0pJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3RkW2NsYXNzKj1cImFzaW5cIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGVtLmNsYXNzTGlzdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2xhc3Nlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNscykgPT4gYC4ke2Nsc31gKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ3Rib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucXVlcnlTZWxlY3RvckFsbCgndHInKVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3NePVwiX3Byb2R1Y3QtY29tcGFyaXNvbi1kZXNrdG9wX3RpdGxlU3R5bGVcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInJldmlld3MtcmF0aW5nXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X3JhdGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZW0ucXVlcnlTZWxlY3RvcignaScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItbGluaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpY29uPy5pbm5lclRleHQgKyAnIFJldmlld2VkIGJ5ICcgKyBzcGFuPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaS5hLWljb24tY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYXR0YWNoLXdhcnJhbnR5LWJ1dHRvbi1yb3cnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W2FyaWEtbGFiZWxsZWRieT0nYXR0YWNoU2lBZGRDb3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfcHJvdGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQWRkIFByb3RlY3Rpb24nXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdub19wcm90ZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdObyBUaGFua3MnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvaHovbW9iaWxlL21pc3Npb24nLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtaW50ZW50PVwiaW50ZW50LWZlZWQtbWlzc2lvbi1zd2l0Y2hlclwiXScsXG4gICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlfc3dpdGNoZXInLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5hLWNhcm91c2VsLWNhcmQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0VtID0gZW0ucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpbWdFbT8uYWx0IHx8ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzaW5nbGVQcm9kdWN0Q29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwidGl0bGVSMlwiXScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpbWcpJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgSW1hZ2UnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic2luZ2xlU3dhdGNoZXNDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdvcHRpb25zJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpIGEnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwiX2xpbmtfXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6bm90KDpoYXMoaW1nKSknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1Byb2R1Y3QgRGV0YWlsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1idXR0b24tdGV4dCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltkYXRhLWFzaW5dJylcbiAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGFzaW5FbT8uZ2V0QXR0cmlidXRlKCdkYXRhLWFzaW4nKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuW2NsYXNzKj1cInRpdGxlUjJcIl0nKVxuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dC5yZXBsYWNlKCdcIicsICcnKVxuICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6bm90KDpoYXMoaW1nKSknKVxuICAgICAgICAgICAgICBjb25zdCB1cmwgPSB1cmxFbT8uZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRpdGxlLCBhc2luLCBwcmljZSwgdXJsIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjaW50ZW50LXRhYnMnLFxuICAgICAgICAgICAgbmFtZTogJ2ludGVudF90YWJzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICBlbVxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKCctJywgJ18nKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdOmhhcyhkaXZbY2xhc3MqPVwicHJvZHVjdENvbnRhaW5lclwiXSknLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXTpoYXMoZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0pJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoNCcsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2g0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0Q29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdIGFbYXJpYS1sYWJlbF0nKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFFbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiaW1hZ2VCbG9ja0NvbnRhaW5lclwiXSBhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInR3b0FzaW5zUHJvZHVjdERldGFpbHNcIl0gYScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBEZXRhaWxzJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJhY3Rpb25CdXR0b25cIl06aGFzKGkuYS1pY29uLWNhcnQpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVfbWV0YWRhdGE6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbkVtID0gZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpIHx8ICcnXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdltjbGFzcyo9XCJ0d29Bc2luc1Byb2R1Y3REZXRhaWxzXCJdIGEnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbY2xhc3MqPVwidHdvQXNpbnNQcm9kdWN0RGV0YWlsc1wiXSBhJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb21vdGlvbl9pdGVtcycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiaW50dWl0aW9uLXN0aWNreS1jb250YWluZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpW2NsYXNzKj1cImludHVpdGlvbi1hdHRyaWJ1dGUtYmFyXCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2EtY2FyZHVpLWhlYWRlcicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhcmlhRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdidXR0b25bYXJpYS1sYWJlbF0nKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyaWFFbT8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgdGV4dEVtPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOlxuICAgICAgICAgICAgICAgICAgICAgICdkaXZbY2xhc3MqPVwiaW50dWl0aW9uLWF0dHJpYnV0ZS13aXRoLWNoZXZyb25fX2F0dHJpYnV0ZVdpdGhDaGV2cm9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXBwbHlfZmlsdGVycycsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJpYUVtID0gZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uW2FyaWEtbGFiZWxdJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJpYUVtPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCB0ZXh0RW0/LmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjpcbiAgICAgICAgICAgICAgICAgICAgICAnZGl2W2NsYXNzKj1cImludHVpdGlvbi1hdHRyaWJ1dGUtd2l0aC1jaGV2cm9uX19jaGV2cm9uT3V0ZXJDb250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdPcGVuIEZpbHRlcnMnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJjbG9zZU1vZGFsSWNvbkNvbnRhaW5lclwiXScsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ2xvc2UgRmlsdGVycycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLWNhcmR1aS1jb250ZW50ID4gZGl2ID4gZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbj8uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHwgYnV0dG9uPy5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwiYWN0aW9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI2ludGVudC1jb250ZW50LWRlZmF1bHQnLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50Jyk/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKS5yZXBsYWNlQWxsKCctJywgJ18nKSB8fFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaVtjbGFzcyo9XCJwcm9kdWN0Q29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2E6aGFzKGltZyknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic3dhdGNoZXNcIl0sIGRpdltjbGFzcyo9XCJ2YXJpYXRpb25Db250YWluZXJcIl0nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8IGVtLmlubmVyVGV4dCB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cIl9saW5rX1wiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwicHJvZHVjdExpbmtcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF90aXRsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1idXR0b24tdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdkaXZbZGF0YS1hc2luXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gYXNpbkVtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlIHNwYW4uYS1vZmZzY3JlZW4nKVxuICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVtPy5pbm5lclRleHQ/LnJlcGxhY2UoL1tcXG5dL2csICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ3NwYW5bY2xhc3MqPVwidGl0bGVSM1wiXScpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlRW0/LmlubmVyVGV4dC5yZXBsYWNlKCdcIicsICcnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdhOm5vdCg6aGFzKGltZykpJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHVybEVtPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW0uY2xvc2VzdCgnI2ludGVudC1jb250ZW50LWRlZmF1bHQnKVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIG5hbWVFbVxuICAgICAgICAgICAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKCdkYXRhLWludGVudCcpXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXBsYWNlKCdpbnRlbnQtZmVlZC0nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbCgnLScsICdfJykgfHwgJydcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGl0bGUsIGFzaW4sIHByaWNlLCB1cmwgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGlbY2xhc3MqPVwiaW50dWl0aW9uLXByb2R1Y3QtZ3JpZF9fZmFjZW91dFwiXScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW5bY2xhc3MqPVwidGl0bGVSM1wiXScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhOmhhcyhpbWcpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBJbWFnZScsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cInN3YXRjaGVzXCJdLCBkaXZbY2xhc3MqPVwidmFyaWF0aW9uQ29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ29wdGlvbnMnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBlbS5pbm5lclRleHQgfHwgJydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJfbGlua19cIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cInByb2R1Y3RMaW5rXCJdJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnUHJvZHVjdCBEZXRhaWwnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZGRfdG9fY2FydCdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlX21ldGFkYXRhOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW5FbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBhc2luRW0/LmdldEF0dHJpYnV0ZSgnZGF0YS1hc2luJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRW0gPSBlbS5xdWVyeVNlbGVjdG9yKCdzcGFuLmEtcHJpY2Ugc3Bhbi5hLW9mZnNjcmVlbicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRW0/LmlubmVyVGV4dD8ucmVwbGFjZSgvW1xcbl0vZywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUVtID0gZW0ucXVlcnlTZWxlY3Rvcignc3BhbltjbGFzcyo9XCJ0aXRsZVIzXCJdJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVFbT8uaW5uZXJUZXh0LnJlcGxhY2UoJ1wiJywgJycpXG4gICAgICAgICAgICAgICAgICBjb25zdCB1cmxFbSA9IGVtLnF1ZXJ5U2VsZWN0b3IoJ2E6bm90KDpoYXMoaW1nKSknKVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRW0/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lRW0gPSBlbS5jbG9zZXN0KCcjaW50ZW50LWNvbnRlbnQtZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID1cbiAgICAgICAgICAgICAgICAgICAgbmFtZUVtXG4gICAgICAgICAgICAgICAgICAgICAgPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW50ZW50JylcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlcGxhY2UoJ2ludGVudC1mZWVkLScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlQWxsKCctJywgJ18nKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZSwgYXNpbiwgcHJpY2UsIHVybCB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9hZGQtdG8tY2FydCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAgY2FydF9zaWRlX2JhcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1hdGMtYnV5LWJveCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LXN1YnRvdGFsLWl0ZW0tY291bnQnLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIHNwYW4uYS1idXR0b24taW5uZXIgaW5wdXQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuc2Mtd2l0aG91dC1tdWx0aWNhcnQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgICAgICBmZXRjaF91cmw6ICcvY2FydCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWd0YyBhJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2dvX3RvX2NhcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICBjYXJ0X3NpZGVfYmFyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJzcGFuW2FyaWEtaGlkZGVuPSd0cnVlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5zYy13aXRob3V0LW11bHRpY2FydCcsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgICAgIGZldGNoX3VybDogJy9jYXJ0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctZ3RjIGEnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ29fdG9fY2FydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBjYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9sdXh1cnknLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBsdXh1cnlfY2FydFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2NhcnQvbG9jYWxtYXJrZXQnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBmcmVzaF9jYXJ0XG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYWxtL2J5ZycsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FbbmFtZT1cInByb2NlZWRUb0NoZWNrb3V0XCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdjaGVja19vdXQnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmcmVzaF9jYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvYWxtL3N1YnN0aXR1dGlvbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNzdWJzQ29udGludWVCdXR0b24gaW5wdXQnLFxuICAgICAgICAgICAgbmFtZTogJ2NoZWNrX291dCcsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHRleHRfZm9ybWF0OiAnQ29udGludWUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmcmVzaF9zdWJzdGl0dXRpb25fY2FyZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvY2FydC9ieWMnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdhW25hbWU9XCJzYy1ieWMtcHRjLWJ1dHRvblwiXScsXG4gICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW5bY2VsX3dpZGdldF9pZF49XCJieWMtYmFjay1idXR0b25cIl0gYScsXG4gICAgICAgICAgICBuYW1lOiAnYmFja190b19jYXJ0JyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltpZF49XCJDYXJkSW5zdGFuY2VcIl0nLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmEtY2Fyb3VzZWwtaGVhZGluZycsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2Fyb3VzZWxfY2FyZFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2ZtYy9zc2Qtc3RvcmVmcm9udCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuYXYsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3Bfc3R5bGVfc3VibmF2LWNvbnRlbnQtY29udGFpbmVyXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdzdWJfc3RvcmVzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2FbY2xhc3MqPVwic3RvcmUtc3VibmF2LWRlc2t0b3Bfc3R5bGVcIl0nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICB0ZXh0X2pzOiAoZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5pbm5lclRleHQgfHwgJ1NhbWUgRGF5IFN0b3JlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbaWRePVwiQ2FyZEluc3RhbmNlXCJdJyxcbiAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdoMi5zZWVNb3JlVGl0bGVIZWFkZXInLFxuICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdoMi5hLWNhcm91c2VsLWhlYWRpbmcnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNhcm91c2VsX2NhcmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9mbWMvc3NkLWNhdGVnb3J5JyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdoZWFkJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5hdixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2RpdltjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcF9zdHlsZV9zdWJuYXYtY29udGVudC1jb250YWluZXJcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3N1Yl9zdG9yZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYVtjbGFzcyo9XCJzdG9yZS1zdWJuYXYtZGVza3RvcF9zdHlsZVwiXScsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVtLmlubmVyVGV4dCB8fCAnU2FtZSBEYXkgU3RvcmUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5kY2wtY29udGFpbmVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yaWVzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2gyLmRjbC1oZWFkZXItdGl0bGUnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpLmEtY2Fyb3VzZWwtY2FyZC5kY2wtY2Fyb3VzZWwtZWxlbWVudCBhJyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmRjbC1jYXJkLWZvb3RlcicsXG4gICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2lkXj1cIkNhcmRJbnN0YW5jZVwiXScsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnaDIuc2VlTW9yZVRpdGxlSGVhZGVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaDIuYS1jYXJvdXNlbC1oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYXJvdXNlbF9jYXJkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvYmVzdHNlbGxlcnMnLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvbmV3LXJlbGVhc2VzLyonLFxuICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBtYXRjaF93aXRoX3dpbGRjYXJkOiB0cnVlLFxuICAgIGNoaWxkcmVuOiBwb3B1bGFyX3Byb2R1Y3RzXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9tb3ZlcnMtYW5kLXNoYWtlcnMvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2dwL21vc3Qtd2lzaGVkLWZvci8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvZ3AvbW9zdC1naWZ0ZWQvKicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIG1hdGNoX3dpdGhfcmVmOiB0cnVlLFxuICAgIG1hdGNoX3dpdGhfd2lsZGNhcmQ6IHRydWUsXG4gICAgY2hpbGRyZW46IHBvcHVsYXJfcHJvZHVjdHNcbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL0Jlc3QtU2VsbGVycyovemdicy8qJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF9yZWY6IHRydWUsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogcG9wdWxhcl9wcm9kdWN0c1xuICB9LFxuICB7XG4gICAgbWF0Y2g6ICcvKi9iJyxcbiAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgbWF0Y2hfd2l0aF93aWxkY2FyZDogdHJ1ZSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmF2LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zdWJuYXYnLFxuICAgICAgICAgICAgbmFtZTogJ3N1Yl9zdG9yZXMnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaS5nZW5lcmljLXN1Ym5hdi1mbHlvdXQtaXRlbScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZV9yb290OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzXj1cIkRlc2t0b3BSZWZpbmVtZW50cy1tb2R1bGVfX3Jvb3RcIl0nLFxuICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2RpdicsXG4gICAgICAgICAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5hLXRleHQtYm9sZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5hLXRleHQtYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3VsW2NsYXNzXj1cIkJyZWFkY3J1bWJzLW1vZHVsZVwiXSBsaTpoYXMoYSknLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bFtjbGFzc149XCJCcmVhZGNydW1icy1tb2R1bGVcIl0gbGk6bm90KDpoYXMoYSkpJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W3JvbGU9XCJyYWRpb2dyb3VwXCJdID4gc3BhbiwgZGl2W3JvbGU9XCJncm91cFwiXSA+IHNwYW4nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtLnF1ZXJ5U2VsZWN0b3IoJ2RpdlthcmlhLWxhYmVsXScpPy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZW0uaW5uZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZUVtID0gZW0ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVtPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8udHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvWyBdL2csICdfJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXl8rfF8rJC9nLCAnJylcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZW0ucXVlcnlTZWxlY3RvcignZGl2W2FyaWEtbGFiZWxdJyk/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBlbS5pbm5lclRleHRcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEVtID0gZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSdcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RFbT8uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1jaGVja2VkJylcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzLicgKyBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aXRsZTogdGV4dD8udHJpbSgpIHx8ICcnLCBzZWxlY3RlZDogZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdidXR0b25bY2xhc3MqPVwiU2VlTW9yZUJ1dHRvbi1tb2R1bGVcIl0nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbY2xhc3NePVwiUHJvZHVjdENhcmQtbW9kdWxlX19jYXJkXCJdJyxcbiAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3BbaWRePVwidGl0bGVcIl0gc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2NsYXNzKj1cImltYWdlV3JhcHBlclwiXSBhJyxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcm9kdWN0IEltYWdlJyxcbiAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhW2NsYXNzKj1cImNhcmRDb250YWluaW5nTGlua1wiXScsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdwcm9kdWN0X2RldGFpbCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtdGVzdGlkPVwiY29sb3Itc3dhdGNoXCJdIHVsJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29sb3JzJyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHRfanM6IChlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbS5xdWVyeVNlbGVjdG9yKCdhJyk/LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBnZW5lcmF0ZV9tZXRhZGF0YTogKGVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSBlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXNpbicpXG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZW0ucXVlcnlTZWxlY3RvcigncFtpZF49XCJ0aXRsZVwiXSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcpPy5pbm5lclRleHRcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncHJvbW90aW9uX2l0ZW1zJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFzaW4sIHRpdGxlIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXkvc3BjL2hhbmRsZXJzL2Rpc3BsYXkuaHRtbCcsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXVxuICAgIH0sXG4gICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzWzBdXG4gICAgfSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnXG4gIH0sXG4gIHtcbiAgICBtYXRjaDogJy9ncC9idXlhZ2FpbicsXG4gICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICBtYXRjaF93aXRoX3JlZjogdHJ1ZSxcbiAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgY2hpbGRyZW46IGJ1eV9hZ2FpblxuICAgICAgfVxuICAgIF1cbiAgfVxuXVxuIiwiZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjbGlja2FibGVfcmVjaXBlczogYW55XG4gICAgaW5wdXRfcmVjaXBlczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KFxuICBlbGVtZW50OiBhbnksXG4gIHJlY2lwZTogYW55LFxuICBwYXJlbnROYW1lID0gJycsXG4gIG50aENoaWxkID0gMCxcbiAgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50LFxuICB3aW5kb3cgPSBnbG9iYWxUaGlzLndpbmRvd1xuKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBlbGVtZW50OiBcIiwgZWxlbWVudCwgcmVjaXBlKTtcbiAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgaWYgKHRhZ05hbWUuZW5kc1dpdGgoJ18nKSkge1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKVxuICB9XG4gIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXG5cbiAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICBsZXQgZWxlbWVudFRleHQgPSAnJ1xuICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3RvcilcbiAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gICAgfVxuICB9IGVsc2UgaWYgKHJlY2lwZS50ZXh0X2pzKSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9qcyhlbGVtZW50KVxuICAgIGlmIChlbGVtZW50VGV4dCA9PT0gJycgfHwgZWxlbWVudFRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RleHQganMgZG9lcyBub3QgZGV0ZWN0IHRleHQgZm9yIGVsZW1lbnQgJywgZWxlbWVudClcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LnRleHRDb250ZW50IHx8ICcnXG4gIH1cbiAgaWYgKGVsZW1lbnRUZXh0ID09IG51bGwpIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnRUZXh0KVxuICB9XG4gIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKVxuICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dClcbiAgfSBlbHNlIGlmIChyZWNpcGUudGV4dF9mb3JtYXQpIHtcbiAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdFxuICB9XG5cbiAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICBsZXQgZWxlbWVudE5hbWUgPSAnJ1xuICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbGVtZW50VGV4dCBpcyBlbXB0eScsIHJlY2lwZSwgZWxlbWVudClcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH1cbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgaWYgKCFlbGVtZW50VGV4dCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnQgdGV4dCBub3QgZm91bmRcIik7XG4gICAgICAgIGVsZW1lbnROYW1lID0gJydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnROYW1lICs9IGVsZW1lbnRUZXh0XG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAucmVwbGFjZSgvW15cXHddKy9nLCAnXycpXG4gICAgICAgICAgLnJlcGxhY2UoL15fK3xfKyQvZywgJycpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gJ2Zyb21fbnRoX2NoaWxkJykge1xuICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnXG4gICAgICBlbGVtZW50TmFtZSArPSBudGhDaGlsZC50b1N0cmluZygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJ1xuICAgICAgZWxlbWVudE5hbWUgKz0gcmVjaXBlLm5hbWVcbiAgICB9XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBlbGVtZW50TmFtZSlcbiAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZ2VuZXJhdGVfbWV0YWRhdGEpIHtcbiAgICBjb25zdCBtZXRhb2JqID0gcmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKGVsZW1lbnQpXG4gICAgY29uc3QgbWV0YWRhdGEgPSBKU09OLnN0cmluZ2lmeShtZXRhb2JqLmRhdGEpXG4gICAgY29uc3QgbWV0YW5hbWUgPSBtZXRhb2JqLm5hbWVcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJywgbWV0YW5hbWUpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnLCBtZXRhZGF0YSlcbiAgICAvLyBjb25zb2xlLmxvZygnbWV0YWRhdGEgZ2VuZXJhdGVkOiAnLCBtZXRhZGF0YSwgJyB3aXRoIG5hbWU6ICcsIG1ldGFuYW1lKVxuICB9XG5cbiAgLy8gSGFuZGxlIGNsaWNrYWJsZXMgYW5kIGlucHV0c1xuICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgIGlmICghcmVjaXBlLm5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2xpY2thYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGEgbmFtZScpXG4gICAgfVxuICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgIGxldCBjbGlja19lbGVtZW50OiBFbGVtZW50IHwgbnVsbFxuICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudFxuICAgIH1cbiAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGljay1lbGVtZW50IG5vdCBmb3VuZCcsIGVsZW1lbnQsIHJlY2lwZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMpIHtcbiAgICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlcyA9IHt9XG4gICAgfVxuICAgIHdpbmRvdy5jbGlja2FibGVfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuXG4gIGlmIChyZWNpcGUuZmV0Y2hfdXJsKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmV0Y2gtdXJsJywgcmVjaXBlLmZldGNoX3VybClcbiAgfVxuXG4gIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKVxuICAgIGlmIChbJ3RleHQnLCAnbnVtYmVyJ10uaW5jbHVkZXMoaW5wdXRUeXBlKSkge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZWxlbWVudC52YWx1ZSlcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgfSBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSlcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fVxuICAgIH1cbiAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGVcbiAgfVxuICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3QtaWQnLCBlbGVtZW50TmFtZSlcblxuICAgIGNvbnN0IHNlbGVjdElkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJylcblxuICAgIGNvbnN0IG5hbWVJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJylcblxuICAgIGNvbnN0IHRhZyA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucXVlcnlTZWxlY3Rvcignc3Bhbi5hLWJ1dHRvbi1kcm9wZG93biBzcGFuLmEtYnV0dG9uLXRleHQnKVxuICAgIGNvbnN0IG5ld1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG5ld1RhZy50ZXh0Q29udGVudCA9IHRhZy50ZXh0Q29udGVudFxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50TmFtZSArICcub3Blbl9kcm9wX2Rvd25fbGlzdCdcbiAgICBuZXdUYWcuc2V0QXR0cmlidXRlKCduYW1lJywgdGFnTmFtZSlcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIHRhZ05hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG5cbiAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld1RhZylcblxuICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2lkXj1cIicgKyBzZWxlY3RJZCArICdcIl0nKVxuICAgIG9wdGlvbnMuZm9yRWFjaChhc3luYyAob3B0aW9uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKCkgfHwgb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlXG4gICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSlcbiAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKVxuICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uZ2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJykpXG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpIC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbilcbiAgICB9KVxuICB9XG4gIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXG4gICAgJ2FsdCcsXG4gICAgJ3RpdGxlJyxcbiAgICAndHlwZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAncm9sZScsXG4gICAgJ2FyaWEtbGFiZWwnLFxuICAgICdhcmlhLWhpZGRlbicsXG4gICAgJ2FyaWEtc2VsZWN0ZWQnXG4gIF1cbiAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cilcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImF0dHJpYnV0ZXMgdG8ga2VlcDogXCIsIHJlY2lwZS5rZWVwX2F0dHIpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KVxuICAgICAgLy8gY29uc29sZS5sb2coa2V5LCB2YWx1ZSlcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKVxuICB9XG4gIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pXG4gIH1cblxuICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCByZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKGVsZW1lbnQpKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgOiBjaGlsZFJlY2lwZS5zZWxlY3RvclxuICAgICAgbGV0IGNoaWxkRWxlbWVudHNcbiAgICAgIGlmIChjaGlsZFJlY2lwZS51c2Vfcm9vdCkge1xuICAgICAgICBjaGlsZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZSByb290IGZvciAnLCBjaGlsZEVsZW1lbnRzKVxuICAgICAgfSBlbHNlIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KFxuICAgICAgICAgIGNoaWxkRWxlbWVudCxcbiAgICAgICAgICBjaGlsZFJlY2lwZSxcbiAgICAgICAgICBwYXJlbnROYW1lLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGRvY3VtZW50LFxuICAgICAgICAgIHdpbmRvd1xuICAgICAgICApXG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxXG4gICAgICAgICAgaWYgKGluZGV4ICUgZXZlcnkgPT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJylcbiAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBlbXB0eSBtZXNzYWdlc1xuICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eVRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVjaXBlLmVtcHR5X21lc3NhZ2UpXG4gICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKVxuICB9XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnRcbn1cbiIsImltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZXMsIGNoZWNrX3VzZXJfaWRfdXJsIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgLy8gcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCgnI3JlYXNvbi1tb2RhbCcpICE9PSBudWxsXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFsnI3VzZXItaW50ZXJhY3Rpb24tdHJhY2tlci1hcHAnLCAnLm4tbW9kYWwtY29udGFpbmVyJ11cbiAgcmV0dXJuIHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4gZWxlbWVudC5jbG9zZXN0KHNlbGVjdG9yKSAhPT0gbnVsbClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgY29uc29sZS5sb2coJ3VwZGF0ZV9pY29uJywgdXJsKVxuICBpZiAoIShhd2FpdCBzaG91bGRFeGNsdWRlKHVybCkpKSB7XG4gICAgY29uc29sZS5sb2coJ2FjdGl2ZSBpY29uJylcbiAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ2luYWN0aXZlIGljb24nKVxuICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICBwYXRoOiAnLi4vaW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhZ2VNZXRhKHJvb3QgPSBudWxsLCBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQpIHtcbiAgbGV0IGFsbF9lbGVtZW50X3dpdGhfbWV0YV9kYXRhXG4gIGlmIChyb290KSB7XG4gICAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWVsZW1lbnQtbWV0YS1uYW1lXScpXG4gIH0gZWxzZSB7XG4gICAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbGVtZW50LW1ldGEtbmFtZV0nKVxuICB9XG5cbiAgY29uc3QgZ3JvdXBlZFJlc3VsdCA9IHt9XG5cbiAgYWxsX2VsZW1lbnRfd2l0aF9tZXRhX2RhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG1ldGFOYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLW5hbWUnKVxuICAgIGNvbnN0IG1ldGFEYXRhID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKVxuXG4gICAgaWYgKCFncm91cGVkUmVzdWx0W21ldGFOYW1lXSkge1xuICAgICAgZ3JvdXBlZFJlc3VsdFttZXRhTmFtZV0gPSBbXVxuICAgIH1cbiAgICBncm91cGVkUmVzdWx0W21ldGFOYW1lXS5wdXNoKEpTT04ucGFyc2UobWV0YURhdGEpKVxuICB9KVxuXG4gIHJldHVybiBncm91cGVkUmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICBjb25zdCBkb2N1bWVudENvcHkgPSBkb2N1bWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRG9jdW1lbnRcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudENvcHkucXVlcnlTZWxlY3RvckFsbChcbiAgICAnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcblxuICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0IGFuZCBhZGQgbWFya2VyXG4gIGFsbEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGlmIChcbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgKSB7XG4gICAgICAvLyBBZGQgbWFya2VyIGF0dHJpYnV0ZSB0byB0aGUgZWxlbWVudFxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyJywgJ3RydWUnKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGRvY3VtZW50Q29weVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFya1ZpZXdhYmxlRWxlbWVudHMoKSB7XG4gIE1hcmtJbnB1dFN0YXR1cygpXG5cbiAgLy8gU2VsZWN0IGFsbCBlbGVtZW50c1xuICBjb25zdCBhbGxFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2EsIGJ1dHRvbiwgc2VsZWN0LCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nXG4gIClcbiAgLy8gQ2hlY2sgaWYgZWFjaCBlbGVtZW50IGlzIGluIHRoZSB2aWV3cG9ydCBhbmQgYWRkIG1hcmtlclxuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBpblZpZXdwb3J0ID1cbiAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gICAgLy8gQWRkIG1hcmtlciBhdHRyaWJ1dGUgdG8gdGhlIGVsZW1lbnRcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQtdmlzaWJsZS1jbGlja2FibGUtbWFya2VyJywgaW5WaWV3cG9ydCA/ICd0cnVlJyA6ICdmYWxzZScpXG4gIH0pXG59XG5leHBvcnQgZnVuY3Rpb24gTWFya0lucHV0U3RhdHVzKCkge1xuICAvLyBFeGNsdWRlIGhpZGRlbiBpbnB1dHMgYnkgdXNpbmcgJzpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJ1xuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pLCBzZWxlY3QsIHRleHRhcmVhJylcbiAgaW5wdXRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudFxuXG4gICAgaWYgKGlucHV0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LXZhbHVlJywgaW5wdXQudmFsdWUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmXG4gICAgICAoaW5wdXQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBpbnB1dC50eXBlID09PSAncmFkaW8nKVxuICAgICkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZC1pbnB1dC1jaGVja2VkJywgU3RyaW5nKGlucHV0LmNoZWNrZWQpKVxuICAgIH1cblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFRleHRzID0gQXJyYXkuZnJvbShpbnB1dC5zZWxlY3RlZE9wdGlvbnMpXG4gICAgICAgIC5tYXAoKG9wdCkgPT4gb3B0LnRleHRDb250ZW50Py50cmltKCkgPz8gJycpXG4gICAgICAgIC5qb2luKCd8fCcpXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkLWlucHV0LXNlbGVjdGVkLXRleHQnLCBzZWxlY3RlZFRleHRzKVxuICAgIH1cbiAgfSlcbn1cbi8vIEFkZCBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBtYXJrZXJzIHdoZW4gbmVlZGVkXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2thYmxlTWFya2VycygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3Zpc2libGUtY2xpY2thYmxlLWVsZW1lbnQtbWFya2VyXScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndmlzaWJsZS1jbGlja2FibGUtZWxlbWVudC1tYXJrZXInKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hvdWxkRXhjbHVkZSh1cmw6IHN0cmluZywgaWdub3JlVXNlcklkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgaWYgKCFpZ25vcmVVc2VySWQpIHtcbiAgICBpZiAoY2hyb21lLnN0b3JhZ2UpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndXNlcklkJylcbiAgICAgIGlmICghcmVzdWx0LnVzZXJJZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm8gdXNlciBpZCcpXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHVzZXIgaWQsIHdlIHNob3VsZCBub3QgYmUgcmVjb3JkaW5nIGFueXRoaW5nXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0dFVF9VU0VSX0lEX1JFU1BPTlNFJykge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLnVzZXJJZClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnR0VUX1VTRVJfSUQnIH0sICcqJylcbiAgICAgIH0pXG4gICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyB1c2VyIGlkLCB3ZSBzaG91bGQgbm90IGJlIHJlY29yZGluZyBhbnl0aGluZ1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIChcbiAgICAhdXJsX2luY2x1ZGVzLnNvbWUoKGluY2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhpbmNsdWRlVXJsKSkgfHxcbiAgICBmaWx0ZXJfdXJsLnNvbWUoKGV4Y2x1ZGVVcmwpID0+IHVybC5pbmNsdWRlcyhleGNsdWRlVXJsKSlcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhc2hDb2RlKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhhc2ggfD0gMFxuICB9XG4gIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaClcbiAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tfdXNlcl9pZCh1c2VyX2lkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2NoZWNrX3VzZXJfaWRfdXJsfT91c2VyX2lkPSR7dXNlcl9pZH1gLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGEgfHwgJ1Vua25vd24gZXJyb3InXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHsoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2V9YClcbiAgfVxuICByZXR1cm4gJ1Vua25vd24gZXJyb3InXG59XG5cbmltcG9ydCB7IGNhcnQsIHJlY2lwZXMgfSBmcm9tICcuLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL2VsZW1lbnQtcHJvY2Vzc29yJ1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHVybCA9IG51bGwsIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudCwgd2luZG93ID0gZ2xvYmFsVGhpcy53aW5kb3cpIHtcbiAgbGV0IHBhcnNlZFVybFxuICBpZiAodXJsKSB7XG4gICAgcGFyc2VkVXJsID0gbmV3IFVSTCh1cmwpXG4gIH0gZWxzZSB7XG4gICAgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgfVxuICBsZXQgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZVxuICBwYXRoID0gcGF0aCAhPT0gJy8nID8gcGF0aC5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKSA6IHBhdGhcblxuICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0J1xuICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLm1hdGNoKVxuXG4gICAgICAgIGNvbnN0IGhhc01hdGNoID1cbiAgICAgICAgICBlbGVtZW50ICYmXG4gICAgICAgICAgKCFyZWNpcGUubWF0Y2hfdGV4dCB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGV4dENvbnRlbnQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVjaXBlLm1hdGNoX3RleHQudG9Mb3dlckNhc2UoKSkgPz8gZmFsc2UpKVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcpIHtcbiAgICAgIGNvbnN0IG1hdGNoID1cbiAgICAgICAgcmVjaXBlLm1hdGNoID09ICcvJ1xuICAgICAgICAgID8gcmVjaXBlLm1hdGNoXG4gICAgICAgICAgOiByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICcnKS5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKVxuICAgICAgY29uc3Qgd2lsZGNhcmRfbWF0Y2ggPSAnXicgKyByZWNpcGUubWF0Y2gucmVwbGFjZSgvXFwqL2csICdbXi9dKicpICsgJyQnXG4gICAgICBjb25zdCB3aWxkY2FyZF9tYXRjaF93aXRoX3JlZiA9ICdeJyArIHJlY2lwZS5tYXRjaC5yZXBsYWNlKC9cXCovZywgJ1teL10rJykgKyAnKC9yZWY9LispJCdcbiAgICAgIGlmIChtYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHJlY2lwZS5tYXRjaF93aXRoX3JlZiAmJlxuICAgICAgICAocGF0aC5zdGFydHNXaXRoKG1hdGNoICsgJy9yZWY9JykgfHwgcGF0aC5zdGFydHNXaXRoKG1hdGNoICsgJ3JlZj0nKSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZCB3aXRoIHJlY2lwZSAnLCByZWNpcGUubWF0Y2gpXG4gICAgICAgIHJldHVybiByZWNpcGVcbiAgICAgIH0gZWxzZSBpZiAocmVjaXBlLm1hdGNoX3dpdGhfd2lsZGNhcmQpIHtcbiAgICAgICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCh3aWxkY2FyZF9tYXRjaClcbiAgICAgICAgY29uc3QgcmVnRXhwV2l0aFJlZiA9IG5ldyBSZWdFeHAod2lsZGNhcmRfbWF0Y2hfd2l0aF9yZWYpXG4gICAgICAgIGlmIChyZWdFeHAudGVzdChwYXRoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH0gZWxzZSBpZiAocmVjaXBlLm1hdGNoX3dpdGhfcmVmICYmIHJlZ0V4cFdpdGhSZWYudGVzdChwYXRoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkIHdpdGggcmVjaXBlICcsIHJlY2lwZS5tYXRjaClcbiAgICAgICAgICByZXR1cm4gcmVjaXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzUmVjaXBlKFxuICByb290ID0gbnVsbCxcbiAgdXJsID0gbnVsbCxcbiAgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50LFxuICB3aW5kb3cgPSBnbG9iYWxUaGlzLndpbmRvd1xuKSB7XG4gIGNvbnNvbGUubG9nKCdzdGFydCBwcm9jZXNzIHJlY2lwZScpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVjaXBlID0gc2VsZWN0UmVjaXBlKHVybCwgZG9jdW1lbnQsIHdpbmRvdylcbiAgICBsZXQgcm9vdEVsZW1lbnRcbiAgICBpZiAocm9vdCkge1xuICAgICAgcm9vdEVsZW1lbnQgPSByb290XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG4gICAgfVxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQpXG4gICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSwgJycsIDAsIGRvY3VtZW50LCB3aW5kb3cpXG4gICAgICBjb25zdCBzaW1wbGlmaWVkSFRNTCA9IG5ld1Jvb3Qub3V0ZXJIVE1MXG4gICAgICByZXR1cm4gc2ltcGxpZmllZEhUTUxcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyByZWNpcGU6JywgZXJyb3IpXG4gIH1cbn1cblxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oXG4gIGV2ZW50VHlwZTogc3RyaW5nLFxuICBkYXRhOiBhbnlcbik6IHsgcXVlc3Rpb246IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZyB9IHtcbiAgbGV0IHF1ZXN0aW9uID0gJydcbiAgbGV0IHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSAnY2xpY2tfYSc6XG4gICAgY2FzZSAnY2xpY2tfYic6XG4gICAgY2FzZSAnY2xpY2tfYyc6XG4gICAgICAvLyBDaGVjayBpZiBpdCdzIGEgc3BlY2lmaWMgdHlwZSBvZiBjbGlja1xuICAgICAgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkuc3Vic2NyaWJlX3NhdmVfLnB1cmNoYXNlX2Zvcm0uc2V0X3VwX25vdycgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdydcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBzZXQgdXAgbm93IGJ1dHRvbi4gV2hhdCBtYWtlcyB5b3UgY2hvb3NlIHRvIHN1YnNjcmliZSB0byB0aGlzIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGNob29zZSB0byBzdWJzY3JpYmUgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ2J1eWJveC5kZWxpdmVyeS5vbmVfdGltZV9wdXJjaGFzZV8ucHVyY2hhc2VfZm9ybS5idXlfbm93JyB8fFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10gPT09ICdidXlib3guZGVsaXZlcnkucHVyY2hhc2VfZm9ybS5idXknIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nXG4gICAgICApIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgYnV5IG5vdyBidXR0b24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIGFtIGJ1eWluZyB0aGlzIHByb2R1Y3QgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uZW5kc1dpdGgoJ2FkZF90b19jYXJ0JykgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nIHx8XG4gICAgICAgIGRhdGEudGFyZ2V0Lm5hbWUgPT09ICdzdWJtaXQuYWRkVG9DYXJ0JyB8fFxuICAgICAgICBkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdBZGQgdG8gQ2FydCdcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoZSBhZGQgdG8gY2FydCBidXR0b24uIFdoYXQgbWFrZXMgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgYWRkIHRoaXMgaXRlbSB0byBteSBjYXJ0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXSA9PT0gJ25hdl9iYXIuc2VhcmNoX2J1dHRvbicpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBvbiB0aGUgc2VhcmNoIGJ1dHRvbi4gV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgICBwbGFjZWhvbGRlciA9ICdJIHdhbnQgdG8gZmluZCAuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3JlZmluZW1lbnRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgnZmlsdGVycy4nKVxuICAgICAgKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBmaWx0ZXIuIFdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZCB3aXRoIHRoaXMgZmlsdGVyPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfSBlbHNlIGlmIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3Byb2R1Y3Rfb3B0aW9ucy4nKSkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdCBvcHRpb24uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwcm9kdWN0IG9wdGlvbj8nXG4gICAgICAgIC8vIGlmIChkYXRhWydlbGVtZW50LW1ldGEtbmFtZSddID09PSAncHJvZHVjdF9vcHRpb25zJyAmJiBkYXRhWydlbGVtZW50LW1ldGEtZGF0YSddICE9PSAnJykge1xuICAgICAgICAvLyAgIHF1ZXN0aW9uID0gYFlvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uICR7ZGF0YVsnZWxlbWVudC1tZXRhLWRhdGEnXVsndmFsdWUnXX0uIFdoYXQgZG8geW91IGxpa2UgYWJvdXQgdGhpcyBwcm9kdWN0IG9wdGlvbj9gXG4gICAgICAgIC8vIH1cbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSBsaWtlIHRoaXMgcHJvZHVjdCBvcHRpb24gYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVsnZGF0YS1zZW1hbnRpYy1pZCddPy5lbmRzV2l0aCgnY2hlY2tfb3V0JykpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5jbGlja2VkPC9zcGFuPiBjaGVja291dCBidXR0b24uIFdoYXQgbWFrZXMgeW91IGNob29zZSB0byBjaGVja291dD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgY2hvb3NlIHRvIGNoZWNrb3V0IGJlY2F1c2UuLi4nXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ3NlYXJjaF9yZXN1bHRzLicpIHx8XG4gICAgICAgIGRhdGFbJ2RhdGEtc2VtYW50aWMtaWQnXT8uc3RhcnRzV2l0aCgncHJvZHVjdF9saXN0LicpIHx8XG4gICAgICAgIChkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LnN0YXJ0c1dpdGgoJ2FjdGl2ZV9pdGVtX2xpc3QuJykgJiZcbiAgICAgICAgICBkYXRhWydkYXRhLXNlbWFudGljLWlkJ10/LmVuZHNXaXRoKCcucHJvZHVjdF9kZXRhaWwnKSkgfHxcbiAgICAgICAgZGF0YS50YXJnZXQuY2xhc3NOYW1lPy5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJylcbiAgICAgICkge1xuICAgICAgICBxdWVzdGlvbiA9XG4gICAgICAgICAgJ1lvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPmNsaWNrZWQ8L3NwYW4+IG9uIHRoaXMgcHJvZHVjdC4gV2hhdCBjYXVnaHQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gdGhlIG90aGVyIG9wdGlvbnMgeW91IHNhdz8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0kgbGlrZSB0aGlzIHByb2R1Y3QgYmVjYXVzZS4uLidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnWW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+Y2xpY2tlZDwvc3Bhbj4gb24gdGhpcyBlbGVtZW50LiBDb3VsZCB5b3Ugc2hhcmUgd2hhdCB5b3Ugd2VyZSB0cnlpbmcgdG8gZG8gb3IgZmluZD8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgcmVhc29uIGhlcmUuLi4nXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICBxdWVzdGlvbiA9XG4gICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5zY3JvbGxlZDwvc3Bhbj4gb24gdGhpcyBwYWdlLiBXaGF0IGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3I/J1xuICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICBxdWVzdGlvbiA9XG4gICAgICAgICdZb3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj50eXBlZDwvc3Bhbj4gaW4gdGhpcyBpbnB1dCBmaWVsZC4gV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3I/J1xuICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgcXVlc3Rpb24gPVxuICAgICAgICAgICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gPHNwYW4gY2xhc3M9XCJoaWdobGlnaHQtcXVlc3Rpb25cIj5nbyBiYWNrPC9zcGFuPiB0byB0aGUgcHJldmlvdXMgcGFnZT8nXG4gICAgICAgIHBsYWNlaG9sZGVyID0gXCJJJ20gYmFjayBiZWNhdXNlLi4uXCJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIHF1ZXN0aW9uID1cbiAgICAgICAgICAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+cmV0dXJuPC9zcGFuPiB0byB0aGlzIHBhZ2UgPydcbiAgICAgICAgcGxhY2Vob2xkZXIgPSAnSSB3YW50IHRvIGZpbmQgLi4uJ1xuICAgICAgfVxuICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGlzIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0LXF1ZXN0aW9uXCI+JHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uPC9zcGFuPj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlICd0YWJBY3RpdmF0ZSc6XG4gICAgICBxdWVzdGlvbiA9IGBXaHkgZGlkIHlvdSA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodC1xdWVzdGlvblwiPnN3aXRjaCB0byB0aGlzIHRhYjwvc3Bhbj4/YFxuICAgICAgcGxhY2Vob2xkZXIgPSAnSSBzd2l0Y2hlZCB0byB0aGlzIHRhYiBiZWNhdXNlLi4uJ1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcXVlc3Rpb24gPSBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gXG4gICAgICBwbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIHJlYXNvbiBoZXJlLi4uJ1xuICAgICAgYnJlYWtcbiAgfVxuICByZXR1cm4geyBxdWVzdGlvbiwgcGxhY2Vob2xkZXIgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFJlYXNvbihyZWFzb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIXJlYXNvbiB8fCByZWFzb24udHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZSAvLyBFbXB0eSBpbnB1dFxuICB9XG4gIGlmIChyZWFzb24udHJpbSgpLmxlbmd0aCA8IDIgfHwgcmVhc29uLmxlbmd0aCA8IDUpIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gVG9vIHNob3J0IHRvIGJlIG1lYW5pbmdmdWwsIGF0IGxlYXN0IDUgY2hhcmFjdGVycyBhbmQgMiB3b3Jkc1xuICB9XG4gIC8vIENoZWNrIGZvciByZXBldGl0aXZlIG9yIG1lYW5pbmdsZXNzIGlucHV0IChlLmcuLCBcImFhYVwiLFwiISEhXCIpXG4gIGNvbnN0IG1lYW5pbmdsZXNzUGF0dGVybnMgPSBbL14oLilcXDF7Myx9JC8sIC9eW15hLXpBLVowLTldKyQvXVxuICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgbWVhbmluZ2xlc3NQYXR0ZXJucykge1xuICAgIGlmIChwYXR0ZXJuLnRlc3QocmVhc29uLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJykpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIExpY2Vuc2U6IE1JVFxuLy8gQXV0aG9yOiBBbnRvbiBNZWR2ZWRldiA8YW50b25AbWVkdi5pbz5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FudG9ubWVkdi9maW5kZXJcbmNvbnN0IGFjY2VwdGVkQXR0ck5hbWVzID0gbmV3IFNldChbJ3JvbGUnLCAnbmFtZScsICdhcmlhLWxhYmVsJywgJ3JlbCcsICdocmVmJ10pO1xuLyoqIENoZWNrIGlmIGF0dHJpYnV0ZSBuYW1lIGFuZCB2YWx1ZSBhcmUgd29yZC1saWtlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBsZXQgbmFtZUlzT2sgPSBhY2NlcHRlZEF0dHJOYW1lcy5oYXMobmFtZSk7XG4gICAgbmFtZUlzT2sgfHw9IG5hbWUuc3RhcnRzV2l0aCgnZGF0YS0nKSAmJiB3b3JkTGlrZShuYW1lKTtcbiAgICBsZXQgdmFsdWVJc09rID0gd29yZExpa2UodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA8IDEwMDtcbiAgICB2YWx1ZUlzT2sgfHw9IHZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiB3b3JkTGlrZSh2YWx1ZS5zbGljZSgxKSk7XG4gICAgcmV0dXJuIG5hbWVJc09rICYmIHZhbHVlSXNPaztcbn1cbi8qKiBDaGVjayBpZiBpZCBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpZE5hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiBjbGFzcyBuYW1lIGlzIHdvcmQtbGlrZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc05hbWUobmFtZSkge1xuICAgIHJldHVybiB3b3JkTGlrZShuYW1lKTtcbn1cbi8qKiBDaGVjayBpZiB0YWcgbmFtZSBpcyB3b3JkLWxpa2UuICovXG5leHBvcnQgZnVuY3Rpb24gdGFnTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKiogRmluZHMgdW5pcXVlIENTUyBzZWxlY3RvcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRlcihpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmIChpbnB1dC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZW5lcmF0ZSBDU1Mgc2VsZWN0b3IgZm9yIG5vbi1lbGVtZW50IG5vZGUgdHlwZS5gKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIGNvbnN0IGRlZmF1bHRzID0ge1xuICAgICAgICByb290OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICBpZE5hbWU6IGlkTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIHRpbWVvdXRNczogMTAwMCxcbiAgICAgICAgc2VlZE1pbkxlbmd0aDogMyxcbiAgICAgICAgb3B0aW1pemVkTWluTGVuZ3RoOiAyLFxuICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IEluZmluaXR5LFxuICAgIH07XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjb25maWcgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3Qgcm9vdERvY3VtZW50ID0gZmluZFJvb3REb2N1bWVudChjb25maWcucm9vdCwgZGVmYXVsdHMpO1xuICAgIGxldCBmb3VuZFBhdGg7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBzZWFyY2goaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50KSkge1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICBpZiAoZWxhcHNlZFRpbWVNcyA+IGNvbmZpZy50aW1lb3V0TXMgfHxcbiAgICAgICAgICAgIGNvdW50ID49IGNvbmZpZy5tYXhOdW1iZXJPZlBhdGhDaGVja3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGZQYXRoID0gZmFsbGJhY2soaW5wdXQsIHJvb3REb2N1bWVudCk7XG4gICAgICAgICAgICBpZiAoIWZQYXRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaW1lb3V0OiBDYW4ndCBmaW5kIGEgdW5pcXVlIHNlbGVjdG9yIGFmdGVyICR7Y29uZmlnLnRpbWVvdXRNc31tc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yKGZQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCsrO1xuICAgICAgICBpZiAodW5pcXVlKGNhbmRpZGF0ZSwgcm9vdERvY3VtZW50KSkge1xuICAgICAgICAgICAgZm91bmRQYXRoID0gY2FuZGlkYXRlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFmb3VuZFBhdGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWxlY3RvciB3YXMgbm90IGZvdW5kLmApO1xuICAgIH1cbiAgICBjb25zdCBvcHRpbWl6ZWQgPSBbXG4gICAgICAgIC4uLm9wdGltaXplKGZvdW5kUGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpLFxuICAgIF07XG4gICAgb3B0aW1pemVkLnNvcnQoYnlQZW5hbHR5KTtcbiAgICBpZiAob3B0aW1pemVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yKG9wdGltaXplZFswXSk7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3Rvcihmb3VuZFBhdGgpO1xufVxuZnVuY3Rpb24qIHNlYXJjaChpbnB1dCwgY29uZmlnLCByb290RG9jdW1lbnQpIHtcbiAgICBjb25zdCBzdGFjayA9IFtdO1xuICAgIGxldCBwYXRocyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHRpZShjdXJyZW50LCBjb25maWcpO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbGV2ZWwpIHtcbiAgICAgICAgICAgIG5vZGUubGV2ZWwgPSBpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLnB1c2gobGV2ZWwpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpKys7XG4gICAgICAgIHBhdGhzLnB1c2goLi4uY29tYmluYXRpb25zKHN0YWNrKSk7XG4gICAgICAgIGlmIChpID49IGNvbmZpZy5zZWVkTWluTGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRocy5zb3J0KGJ5UGVuYWx0eSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBwYXRocykge1xuICAgICAgICAgICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGhzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGF0aHMuc29ydChieVBlbmFsdHkpO1xuICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHBhdGhzKSB7XG4gICAgICAgIHlpZWxkIGNhbmRpZGF0ZTtcbiAgICB9XG59XG5mdW5jdGlvbiB3b3JkTGlrZShuYW1lKSB7XG4gICAgaWYgKC9eW2EtelxcLV17Myx9JC9pLnRlc3QobmFtZSkpIHtcbiAgICAgICAgY29uc3Qgd29yZHMgPSBuYW1lLnNwbGl0KC8tfFtBLVpdLyk7XG4gICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgICAgICAgICAgaWYgKHdvcmQubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL1teYWVpb3VdezQsfS9pLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHRpZShlbGVtZW50LCBjb25maWcpIHtcbiAgICBjb25zdCBsZXZlbCA9IFtdO1xuICAgIGNvbnN0IGVsZW1lbnRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGlmIChlbGVtZW50SWQgJiYgY29uZmlnLmlkTmFtZShlbGVtZW50SWQpKSB7XG4gICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJyMnICsgQ1NTLmVzY2FwZShlbGVtZW50SWQpLFxuICAgICAgICAgICAgcGVuYWx0eTogMCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2ldO1xuICAgICAgICBpZiAoY29uZmlnLmNsYXNzTmFtZShuYW1lKSkge1xuICAgICAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogJy4nICsgQ1NTLmVzY2FwZShuYW1lKSxcbiAgICAgICAgICAgICAgICBwZW5hbHR5OiAxLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0ciA9IGVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGNvbmZpZy5hdHRyKGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGBbJHtDU1MuZXNjYXBlKGF0dHIubmFtZSl9PVwiJHtDU1MuZXNjYXBlKGF0dHIudmFsdWUpfVwiXWAsXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoY29uZmlnLnRhZ05hbWUodGFnTmFtZSkpIHtcbiAgICAgICAgbGV2ZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiB0YWdOYW1lLFxuICAgICAgICAgICAgcGVuYWx0eTogNSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldmVsLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCksXG4gICAgICAgICAgICAgICAgcGVuYWx0eTogMTAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBudGggPSBpbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChudGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXZlbC5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG50aENoaWxkKHRhZ05hbWUsIG50aCksXG4gICAgICAgICAgICBwZW5hbHR5OiA1MCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsZXZlbDtcbn1cbmZ1bmN0aW9uIHNlbGVjdG9yKHBhdGgpIHtcbiAgICBsZXQgbm9kZSA9IHBhdGhbMF07XG4gICAgbGV0IHF1ZXJ5ID0gbm9kZS5uYW1lO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IHBhdGhbaV0ubGV2ZWwgfHwgMDtcbiAgICAgICAgaWYgKG5vZGUubGV2ZWwgPT09IGxldmVsIC0gMSkge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ID4gJHtxdWVyeX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkgPSBgJHtwYXRoW2ldLm5hbWV9ICR7cXVlcnl9YDtcbiAgICAgICAgfVxuICAgICAgICBub2RlID0gcGF0aFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gcGVuYWx0eShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgubWFwKChub2RlKSA9PiBub2RlLnBlbmFsdHkpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKTtcbn1cbmZ1bmN0aW9uIGJ5UGVuYWx0eShhLCBiKSB7XG4gICAgcmV0dXJuIHBlbmFsdHkoYSkgLSBwZW5hbHR5KGIpO1xufVxuZnVuY3Rpb24gaW5kZXhPZihpbnB1dCwgdGFnTmFtZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IGlucHV0LnBhcmVudE5vZGU7XG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGNoaWxkID0gcGFyZW50LmZpcnN0Q2hpbGQ7XG4gICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgICAgICh0YWdOYW1lID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRhZ05hbWUpKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkID09PSBpbnB1dCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gICAgcmV0dXJuIGk7XG59XG5mdW5jdGlvbiBmYWxsYmFjayhpbnB1dCwgcm9vdERvY3VtZW50KSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50ID0gaW5wdXQ7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHJvb3REb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gY3VycmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihjdXJyZW50LCB0YWdOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogbnRoT2ZUeXBlKHRhZ05hbWUsIGluZGV4KSxcbiAgICAgICAgICAgIHBlbmFsdHk6IE5hTixcbiAgICAgICAgICAgIGxldmVsOiBpLFxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpZiAodW5pcXVlKHBhdGgsIHJvb3REb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxufVxuZnVuY3Rpb24gbnRoQ2hpbGQodGFnTmFtZSwgaW5kZXgpIHtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIHJldHVybiAnaHRtbCc7XG4gICAgfVxuICAgIHJldHVybiBgJHt0YWdOYW1lfTpudGgtY2hpbGQoJHtpbmRleH0pYDtcbn1cbmZ1bmN0aW9uIG50aE9mVHlwZSh0YWdOYW1lLCBpbmRleCkge1xuICAgIGlmICh0YWdOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuICdodG1sJztcbiAgICB9XG4gICAgcmV0dXJuIGAke3RhZ05hbWV9Om50aC1vZi10eXBlKCR7aW5kZXh9KWA7XG59XG5mdW5jdGlvbiogY29tYmluYXRpb25zKHN0YWNrLCBwYXRoID0gW10pIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBub2RlIG9mIHN0YWNrWzBdKSB7XG4gICAgICAgICAgICB5aWVsZCogY29tYmluYXRpb25zKHN0YWNrLnNsaWNlKDEsIHN0YWNrLmxlbmd0aCksIHBhdGguY29uY2F0KG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgeWllbGQgcGF0aDtcbiAgICB9XG59XG5mdW5jdGlvbiBmaW5kUm9vdERvY3VtZW50KHJvb3ROb2RlLCBkZWZhdWx0cykge1xuICAgIGlmIChyb290Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZTtcbiAgICB9XG4gICAgaWYgKHJvb3ROb2RlID09PSBkZWZhdWx0cy5yb290KSB7XG4gICAgICAgIHJldHVybiByb290Tm9kZS5vd25lckRvY3VtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcm9vdE5vZGU7XG59XG5mdW5jdGlvbiB1bmlxdWUocGF0aCwgcm9vdERvY3VtZW50KSB7XG4gICAgY29uc3QgY3NzID0gc2VsZWN0b3IocGF0aCk7XG4gICAgc3dpdGNoIChyb290RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjc3MpLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHNlbGVjdCBhbnkgbm9kZSB3aXRoIHRoaXMgc2VsZWN0b3I6ICR7Y3NzfWApO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiogb3B0aW1pemUocGF0aCwgaW5wdXQsIGNvbmZpZywgcm9vdERvY3VtZW50LCBzdGFydFRpbWUpIHtcbiAgICBpZiAocGF0aC5sZW5ndGggPiAyICYmIHBhdGgubGVuZ3RoID4gY29uZmlnLm9wdGltaXplZE1pbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBhdGgubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkVGltZU1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgaWYgKGVsYXBzZWRUaW1lTXMgPiBjb25maWcudGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IFsuLi5wYXRoXTtcbiAgICAgICAgICAgIG5ld1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaWYgKHVuaXF1ZShuZXdQYXRoLCByb290RG9jdW1lbnQpICYmXG4gICAgICAgICAgICAgICAgcm9vdERvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IobmV3UGF0aCkpID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIG5ld1BhdGg7XG4gICAgICAgICAgICAgICAgeWllbGQqIG9wdGltaXplKG5ld1BhdGgsIGlucHV0LCBjb25maWcsIHJvb3REb2N1bWVudCwgc3RhcnRUaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7IHJhbmRvbVVVSUQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgaWYgKGJ1Zikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWY7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5leHBvcnQgZGVmYXVsdCB2NDtcbiIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZmluZFBhZ2VNZXRhLFxuICBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQsXG4gIGlzRnJvbVBvcHVwLFxuICBzaG91bGRFeGNsdWRlLFxuICBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkLFxuICBwcm9jZXNzUmVjaXBlLFxuICBNYXJrVmlld2FibGVFbGVtZW50c1xufSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgZmluZGVyIH0gZnJvbSAnQG1lZHYvZmluZGVyJ1xuLy8gZXh0ZW5kIHdpbmRvd1xuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBtb25rZXlQYXRjaGVkOiBib29sZWFuXG4gICAgc2hvdWxkRXhjbHVkZTogYm9vbGVhblxuICB9XG59XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBNb3VzZUV2ZW50IHtcbiAgICBqdXN0X2Zvcl9kZWZhdWx0OiBib29sZWFuXG4gICAgYmxvY2tfc2lnbmFsOiBBYm9ydENvbnRyb2xsZXJcbiAgICBmaW5pc2hfc2lnbmFsczogQWJvcnRDb250cm9sbGVyW11cbiAgICBteV9kZWZhdWx0X3ByZXZlbnRlZDogYm9vbGVhblxuICB9XG59XG5cbmNvbnN0IHdvcmsgPSAoKSA9PiB7XG4gIGNvbnN0IG1vbmtleVBhdGNoID0gKCkgPT4ge1xuICAgIHdpbmRvdy5tb25rZXlQYXRjaGVkID0gdHJ1ZVxuICAgIGNvbnN0IG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyXG5cbiAgICAvLyBBZGQgdGhpcyBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG4gICAgY29uc3QgVGltZU91dCA9IDMwMDAwXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICAgIHRhcmdldDogYW55LFxuICAgICAgdGltZXN0YW1wOiBzdHJpbmcsXG4gICAgICBzZWxlY3Rvcjogc3RyaW5nLFxuICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICB1dWlkOiBzdHJpbmdcbiAgICApIHtcbiAgICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoXG4gICAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgZGVwdGg6IG51bWJlciA9IDAsXG4gICAgICAgIGFsbEF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICAgICAgKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgICAgIC8vIEJhc2UgY2FzZTogaWYgZWxlbWVudCBpcyBudWxsIG9yIHdlJ3ZlIHJlYWNoZWQgbWF4IGRlcHRoXG4gICAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSAyMCkgcmV0dXJuIGFsbEF0dHJpYnV0ZXNcblxuICAgICAgICAvLyBDaGVjayBhbmQgY29sbGVjdCBhbGwgcmVsZXZhbnQgYXR0cmlidXRlcyBhdCBjdXJyZW50IGxldmVsXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtY2xpY2thYmxlLWlkJ10gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtbmFtZScpKSB7XG4gICAgICAgICAgYWxsQXR0cmlidXRlc1snZGF0YS1lbGVtZW50LW1ldGEtbmFtZSddID1cbiAgICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJykgfHwgJydcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnKSkge1xuICAgICAgICAgIGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSA9XG4gICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEtZGF0YScpIHx8ICcnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZmV0Y2gtdXJsJykpIHtcbiAgICAgICAgICBhbGxBdHRyaWJ1dGVzWydkYXRhLWZldGNoLXVybCddID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmV0Y2gtdXJsJykgfHwgJydcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENvbnRpbnVlIHNlYXJjaGluZyB1cCB0aGUgdHJlZSwgcGFzc2luZyBhbG9uZyBjb2xsZWN0ZWQgYXR0cmlidXRlc1xuICAgICAgICByZXR1cm4gZmluZENsaWNrYWJsZVBhcmVudChlbGVtZW50LnBhcmVudEVsZW1lbnQsIGRlcHRoICsgMSwgYWxsQXR0cmlidXRlcylcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNpbXBsaWZpZWRIVE1MID0gcHJvY2Vzc1JlY2lwZSgpXG4gICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4gICAgICBjb25zdCBhbGxBdHRyaWJ1dGVzID0gZmluZENsaWNrYWJsZVBhcmVudCh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHRpbWVzdGFtcCwgdXVpZClcblxuICAgICAgLy8gQ3JlYXRlIGEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIHRhcmdldFxuICAgICAgY29uc3Qgc2VyaWFsaXplZFRhcmdldCA9IHtcbiAgICAgICAgdGFnTmFtZTogdGFyZ2V0LnRhZ05hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgaWQ6IHRhcmdldC5pZCxcbiAgICAgICAgaW5uZXJUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgICAgb3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MXG4gICAgICB9XG5cbiAgICAgIGxldCBmZXRjaFVybFxuICAgICAgaWYgKGFsbEF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoJ2RhdGEtZmV0Y2gtdXJsJykpIHtcbiAgICAgICAgLy8gY2FydEluZm8gPSBhd2FpdCBmZXRjaENhcnRJbmZvKGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZmV0Y2gtdXJsJ10pXG4gICAgICAgIGZldGNoVXJsID0gYWxsQXR0cmlidXRlc1snZGF0YS1mZXRjaC11cmwnXVxuICAgICAgfVxuXG4gICAgICBNYXJrVmlld2FibGVFbGVtZW50cygpXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICB0YXJnZXQ6IHNlcmlhbGl6ZWRUYXJnZXQsIC8vIFJlcGxhY2UgZGlyZWN0IERPTSBlbGVtZW50IHdpdGggc2VyaWFsaXphYmxlIG9iamVjdFxuICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciB8fCAnJyxcbiAgICAgICAgJ2RhdGEtc2VtYW50aWMtaWQnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWNsaWNrYWJsZS1pZCddIHx8ICcnLFxuICAgICAgICAnZWxlbWVudC1tZXRhLW5hbWUnOiBhbGxBdHRyaWJ1dGVzWydkYXRhLWVsZW1lbnQtbWV0YS1uYW1lJ10gfHwgJycsXG4gICAgICAgICdlbGVtZW50LW1ldGEtZGF0YSc6IGFsbEF0dHJpYnV0ZXNbJ2RhdGEtZWxlbWVudC1tZXRhLWRhdGEnXSB8fCAnJyxcbiAgICAgICAgcGFnZU1ldGE6IHBhZ2VNZXRhIHx8ICcnLFxuICAgICAgICBmZXRjaFVybDogZmV0Y2hVcmwgfHwgJycsXG4gICAgICAgIHVybDogdXJsIHx8ICcnLFxuICAgICAgICB3aW5kb3dTaXplOiB7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIH0sXG4gICAgICAgIGh0bWxDb250ZW50OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICBzaW1wbGlmaWVkSFRNTDogc2ltcGxpZmllZEhUTUxcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiB0YXJnZXQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIGRhdGFbJ2lucHV0LXRlcm1zJ10gPSB0YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXQuaWQgPT09ICduYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nICYmIHRhcmdldC50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICBkYXRhWydpbnB1dC10ZXJtcyddID0gKFxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwidHdvdGFic2VhcmNodGV4dGJveFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgKT8udmFsdWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuICAgIC8vIHRvZG86IHBhdGNoIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3VwcG9ydCB3cmFwXG4gICAgLy8gY29uc3QgYmxvY2tTaWduYWxzID0ge31cbiAgICAvLyBjb25zdCBmaW5pc2hTaWduYWxzID0ge31cbiAgICBjb25zdCB3YWl0X2Zvcl9hYm9ydCA9IChzaWduYWwpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgIC8vIElmIGFscmVhZHkgYWJvcnRlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSwgbGlzdGVuIGZvciB0aGUgYWJvcnQgZXZlbnRcbiAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiByZXNvbHZlKHZvaWQgMCksIHsgb25jZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhc0RlZmF1bHRBY3Rpb24gPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCBhbmNob3IgPSBlbGVtZW50LmNsb3Nlc3QoJ2EnKVxuICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gaWYgaWQgaXMgbmF2LXNlYXJjaC1zdWJtaXQtYnV0dG9uXG4gICAgICAvLyBpZiAoZWxlbWVudC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicpIHtcbiAgICAgIC8vICAgcmV0dXJuIHRydWVcbiAgICAgIC8vIH1cblxuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGlmICgoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGluc2lkZSBhIGJ1dHRvbiBpbnNpZGUgZm9ybVxuICAgICAgaWYgKGVsZW1lbnQuY2xvc2VzdCgnYnV0dG9uJykgJiYgZWxlbWVudC5jbG9zZXN0KCdidXR0b24nKS5jbG9zZXN0KCdmb3JtJykpIHtcbiAgICAgICAgLy8gaWYgdGhlIGJ1dHRvbiBoYXMgYSB0eXBlIGFuZCBpdCdzIGJ1dHRvbiwgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICgoZWxlbWVudC5jbG9zZXN0KCdidXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8vIE1vbmtleSBwYXRjaCBhZGRFdmVudExpc3RlbmVyXG4gICAgRXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBhc3luYyBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgICBpZiAob3B0aW9ucyAmJiAob3B0aW9ucyBhcyBhbnkpLnNraXBfbW9ua2V5X3BhdGNoKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNhbGxPcmlnaW5hbExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSAnY2xpY2snICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRMaXN0ZW5lciA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuc2hvdWxkRXhjbHVkZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZCBleGNsdWRlJylcbiAgICAgICAgICAgIGNhbGxPcmlnaW5hbExpc3RlbmVyKGV2ZW50KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBjYWxsT3JpZ2luYWxMaXN0ZW5lcihldmVudClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NraXAgbW9ua2V5IHBhdGNoJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLnB1c2goY29udHJvbGxlcilcbiAgICAgICAgICAgIGlmIChldmVudC5ibG9ja19zaWduYWwpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gZXZlbnQuYmxvY2tfc2lnbmFsLnNpZ25hbFxuICAgICAgICAgICAgICBhd2FpdCB3YWl0X2Zvcl9hYm9ydChzaWduYWwpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCB1bmJsb2NraW5nJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBubyBibG9jayBzaWduYWwnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICBldmVudC5maW5pc2hfc2lnbmFscyA9IFtdXG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZilcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiBjYW5jZWxhYmxlJylcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwYXRjaCBldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgLy8gY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmXG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpXG4gICAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLy8gbG9nIGJlZm9yZSBhbmQgYWZ0ZXIgdGltZVxuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGZpbmRlcihldmVudC50YXJnZXQsIHtcbiAgICAgICAgICAgICAgICBtYXhOdW1iZXJPZlBhdGhDaGVja3M6IDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgICAnY2xpY2tfYScsXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICB1dWlkXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAsIHV1aWQ6IHV1aWQgfSxcbiAgICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSwgdXVpZDogdXVpZCB9LCAnKicpXG4gICAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3YWl0aW5nIGZvciBzY3JlZW5zaG90IGFuZCBpbnRlcmFjdGlvbicpXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzY3JlZW5zaG90Q29tcGxldGUsIGludGVyYWN0aW9uQ29tcGxldGVdKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2NyZWVuc2hvdCBhbmQgaW50ZXJhY3Rpb24gY29tcGxldGUnKVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAvLyBhbGVydChcIjJcIilcbiAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAgIC8vIHJlLWRpc3BhdGNoIHRoZSBldmVudFxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgICAgZXZlbnQuYmxvY2tfc2lnbmFsLmFib3J0KClcbiAgICAgICAgICAgICAgLy8gYWJvcnQgYWxsIGZpbmlzaFNpZ25hbHNcbiAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgICAgZXZlbnQuZmluaXNoX3NpZ25hbHMubWFwKChjb250cm9sbGVyKSA9PiB3YWl0X2Zvcl9hYm9ydChjb250cm9sbGVyLnNpZ25hbCkpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudCcsIGV2ZW50KVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmUtZGlzcGF0Y2ggdGhlIGV2ZW50IGlmIGl0cyBub3QgcHJldmVudGVkLCAyJylcbiAgICAgICAgICAgICAgaWYgKCFldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0byB3YWl0IGZvciBzY3JlZW5zaG90IGNvbXBsZXRpb25cbiAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpXG4gICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbihcbiAgICAgICAgICAgICAgJ2NsaWNrX2InLFxuICAgICAgICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgZmluZGVyKGV2ZW50LnRhcmdldCwge1xuICAgICAgICAgICAgICAgIG1heE51bWJlck9mUGF0aENoZWNrczogMFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgIHV1aWRcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIFJlcXVlc3Qgc2NyZWVuc2hvdFxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAnKidcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgfSwgVGltZU91dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAvLyBhd2FpdCBBU3NjcmVlbnNob3RDb21wbGV0ZVxuICAgICAgICAgICAgLy8gYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhaXRpbmcgZm9yIHNjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uJylcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtzY3JlZW5zaG90Q29tcGxldGUsIGludGVyYWN0aW9uQ29tcGxldGVdKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NjcmVlbnNob3QgYW5kIGludGVyYWN0aW9uIGNvbXBsZXRlJylcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgYWZ0ZXIgc2NyZWVuc2hvdCBpcyBjYXB0dXJlZFxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcilcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIG9yaWdpbmFsIGxpc3RlbmVyJylcbiAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAvLyBhYm9ydCBhbGwgZmluaXNoU2lnbmFsc1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY2FsbE9yaWdpbmFsTGlzdGVuZXIoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gaWYgYm9vbGVhbiwgc2V0IHBhc3NpdmUgdG8gdHJ1ZVxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICB1c2VDYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIHdyYXBwZWRMaXN0ZW5lciwgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG5vbi1jbGljayBldmVudHNcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpXG5cbiAgICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIDxhPiB0YWdzXG4gICAgZnVuY3Rpb24gaGFuZGxlQW5jaG9yQ2xpY2tzKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5zaG91bGRFeGNsdWRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGV4Y2x1ZGUnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50Lmp1c3RfZm9yX2RlZmF1bHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdza2lwIG1vbmtleSBwYXRjaCBiJylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IDxhPiB0YWcgaW4gY2FzZSBvZiBuZXN0ZWQgZWxlbWVudHMgaW5zaWRlIHRoZSA8YT5cbiAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG5cbiAgICAgICAgICBpZiAoaGFzRGVmYXVsdEFjdGlvbihldmVudCkpIHtcbiAgICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBpZiAoZXZlbnQuYmxvY2tfc2lnbmFsKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBBbmNob3IgY2xpY2sgZXZlbnQgaGFuZGVyIGZyb20gb3VyIG93biBsaXN0ZW5lcicpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG91bGQgYWxyZWFkeSBiZSBsb2dnZWQgaW4gb3RoZXIgZXZlbnQgbGlzdGVuZXJzJylcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5ibG9ja19zaWduYWwgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzID0gW11cblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gY2FuY2VsYWJsZScpXG4gICAgICAgICAgICAvLyBpZiAoIWFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJzdGFydFBlcmlvZGljVXBsb2FkZWZcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSB1dWlkdjQoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8g55uR5ZCs5oiq5Zu+5a6M5oiQ55qE5raI5oGvXG4gICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy8g5re75Yqg6LaF5pe25aSE55CGXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSlcbiAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KSAvLyAz56eS6LaF5pe2XG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgLy8g5Y+R6YCB5oiq5Zu+6K+35rGCXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCwgdXVpZDogdXVpZCB9LFxuICAgICAgICAgICAgICAgICcqJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oXG4gICAgICAgICAgICAgICAgJ2NsaWNrX2MnLFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgZmluZGVyKHRhcmdldCwge1xuICAgICAgICAgICAgICAgICAgbWF4TnVtYmVyT2ZQYXRoQ2hlY2tzOiAwXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgdXVpZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhLCB1dWlkOiB1dWlkIH0sICcqJylcbiAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudDogTWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSlcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKVxuICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgICBhd2FpdCBzY3JlZW5zaG90Q29tcGxldGVcbiAgICAgICAgICAgICAgYXdhaXQgaW50ZXJhY3Rpb25Db21wbGV0ZVxuXG4gICAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKVxuICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGV2ZW50LmJsb2NrX3NpZ25hbC5hYm9ydCgpXG4gICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIGV2ZW50LmZpbmlzaF9zaWduYWxzLm1hcCgoY29udHJvbGxlcikgPT4gd2FpdF9mb3JfYWJvcnQoY29udHJvbGxlci5zaWduYWwpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQsIDEnKVxuICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgdGhlIG9yaWdpbmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudChldmVudC50eXBlLCB7XG4gICAgICAgICAgICAgICAgICBidWJibGVzOiBldmVudC5idWJibGVzLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsIC8vIEVuc3VyZXMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2NjdXJzXG4gICAgICAgICAgICAgICAgICBjb21wb3NlZDogZXZlbnQuY29tcG9zZWQsXG4gICAgICAgICAgICAgICAgICB2aWV3OiBldmVudC52aWV3LFxuICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICBzY3JlZW5YOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgICAgICAgc2NyZWVuWTogZXZlbnQuc2NyZWVuWSxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgY3RybEtleTogZXZlbnQuY3RybEtleSxcbiAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgICAgICAgICAgbWV0YUtleTogZXZlbnQubWV0YUtleSxcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYXJnZXQ6IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG5ld0V2ZW50Lmp1c3RfZm9yX2RlZmF1bHQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAvLyBSZS1kaXNwYXRjaCB0aGUgbmV3IGV2ZW50XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgIHNraXBfbW9ua2V5X3BhdGNoOiB0cnVlLFxuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0gYXMgYW55XG4gICAgICApIC8vIFVzZSBjYXB0dXJlIHBoYXNlIHRvIGludGVyY2VwdCB0aGUgZXZlbnQgZWFybGllclxuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSA8YT4gdGFnIGNsaWNrc1xuICAgIGhhbmRsZUFuY2hvckNsaWNrcygpXG4gIH1cbiAgaWYgKCF3aW5kb3cubW9ua2V5UGF0Y2hlZCkge1xuICAgIG1vbmtleVBhdGNoKClcbiAgfVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdET01Db250ZW50TG9hZGVkJyxcbiAgICAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpXG4gICAgICBzaG91bGRFeGNsdWRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Nob3VsZEV4Y2x1ZGUnLCByZXN1bHQpXG4gICAgICAgIHdpbmRvdy5zaG91bGRFeGNsdWRlID0gcmVzdWx0XG4gICAgICB9KVxuICAgIH0sXG4gICAge1xuICAgICAgb25jZTogdHJ1ZVxuICAgIH1cbiAgKVxufVxuXG4vLyBpZ25vcmUgdXNlciBpZCBmb3Igbm93LCBiZWNhdXNlIGZ1bGwgY2hlY2sgd291bGQgYmUgYXN5bmMuXG5zaG91bGRFeGNsdWRlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB3b3JrKClcbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==