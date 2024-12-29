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
/* harmony export */   data_collector_secret_id: () => (/* binding */ data_collector_secret_id),
/* harmony export */   filter_url: () => (/* binding */ filter_url),
/* harmony export */   folder_name: () => (/* binding */ folder_name),
/* harmony export */   interaction_url: () => (/* binding */ interaction_url),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_include: () => (/* binding */ url_include),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
const popup_probability = 0.15;
const folder_name = `user_interaction_data`;
const zip = true;
const upload_url = 'http://userdatacollect.hailab.io/upload';
const base_url = 'http://userdatacollect.hailab.io';
const data_collector_secret_id = '676a665144398e6967567a2b';
const url_include = 'amazon.com';
const interaction_url = `${base_url}/interactions`;
const filter_url = [
    'https://www.amazon.com/checkout/',
    'https://www.amazon.com/gp/buy/',
    'https://www.amazon.com/a/addresses',
    'https://www.amazon.com/cpe/yourpayments/',
    'https://www.amazon.com/gp/product/handle-buy-box/',
    'https://www.amazon.com/gp/checkoutportal/',
    'https://www.amazon.com/gp/cart/desktop/'
];


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
const nav = {
    selector: '#navbar-main',
    name: 'nav_bar',
    children: [
        {
            selector: '#nav-search-bar-form',
            children: [
                {
                    selector: 'input#twotabsearchtextbox',
                    name: 'search_input'
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
        selector: 'ul:nth-of-type(1) > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)',
        add_text: true,
        name: 'from_text',
        clickable: true,
        click_selector: 'a',
        direct_child: true,
        text_js: function (element) {
            try {
                let text = '';
                if (!element) {
                    return text;
                }
                if (element.innerText && element.innerText.trim()) {
                    text += element.innerText.trim();
                    const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
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
    },
    {
        selector: "ul:nth-of-type(1) > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
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
                click_selector: 'a',
                text_js: function (element) {
                    try {
                        let text = '';
                        if (!element) {
                            return text;
                        }
                        if (element.innerText && element.innerText.trim()) {
                            text += element.innerText.trim();
                            const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
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
    selector: '#selectQuantity',
    name: 'quantity_selector',
    children: [
        {
            selector: 'label',
            add_text: true
        },
        {
            selector: 'select',
            clickable: true,
            name: 'drop_down_list'
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
            selector: '#rcxOrdFreqOnmlWrapper select',
            clickable: true,
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
    selector: "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb']",
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
            selector: "div[data-csa-c-content-id='offer_display_desktop_accordion_header']",
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
        selector: "div[data-name='Active Items']",
        name: 'active_item_list',
        children: [
            {
                selector: 'div.sc-list-item-content',
                text_selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
                name: 'from_text',
                children: [
                    {
                        selector: 'div.sc-item-check-checkbox-selector input',
                        clickable: true,
                        name: 'checkbox'
                    },
                    {
                        selector: 'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title',
                        clickable: true,
                        text_selector: 'span.a-truncate-full',
                        add_text: true,
                        name: 'product_detail'
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
                ]
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
const recipes = [
    {
        match: '/',
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
                children: [nav]
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
                    {
                        selector: '#s-refinements',
                        name: 'refinements',
                        children: [
                            {
                                selector: 'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
                                name: 'from_text',
                                text_selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
                                children: refinement_option
                            },
                            {
                                selector: '#departments',
                                name: 'departments',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true
                                    }
                                ]
                            },
                            {
                                selector: '#reviewsRefinements',
                                name: 'reviews_refinements',
                                children: [
                                    {
                                        selector: 'li a',
                                        add_text: true,
                                        name: 'from_text',
                                        clickable: true
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
                                        name: 'view_product'
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
                                                class: 'product-rating-count'
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
                                        selector: "div[data-cy='add-to-cart'] button",
                                        add_text: true,
                                        clickable: true,
                                        name: 'add_to_cart'
                                    },
                                    {
                                        selector: "div[data-csa-c-content-id='s-search-see-details-button'] a",
                                        add_text: true,
                                        clickable: true,
                                        name: 'see_options'
                                    }
                                ]
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
                    }
                ]
            }
        ]
    },
    {
        match: '#productTitle',
        match_text: '',
        selector: 'html',
        terminate: function () {
            return !!arguments[0];
        },
        terminate_callback: function () {
            return arguments[0];
        },
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
                        selector: '#centerCol',
                        class: 'product-card',
                        children: [
                            {
                                selector: '#title',
                                add_text: true,
                                keep_attr: ['id']
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
                                selector: '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen, #apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                                add_text: true,
                                text_format: 'Price: {}',
                                class: 'product-price'
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
                                                clickable: true,
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
                                                            return text;
                                                        }
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
                        selector: '#buybox:has(div.a-tab-container)',
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
                        before_hook: function () {
                            var _a;
                            const title = document.querySelector('#title').innerText;
                            const price = (_a = document.querySelector("#apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[class='offersConsistencyEnabled'] > div:not([style='display:none;']):not([style=\"display: none;\"]) #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, #apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[data-csa-c-content-id='apex_with_rio_cx'] #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen")) === null || _a === void 0 ? void 0 : _a.innerText;
                            const options = Array.from(document.querySelectorAll('#twister div.a-row:has(label.a-form-label):has(span.selection)')).map((a) => ({
                                label: a.querySelector('label.a-form-label').innerText,
                                value: a.querySelector('span.selection').innerText
                            }));
                            const options_dict = {};
                            for (const option of options) {
                                options_dict[option['label'].replace(': ', '')] = option['value'];
                            }
                            const asin = document.querySelector('input#ASIN').value;
                            console.log({ title, price, options: options_dict, asin });
                            return { title, price, options: options_dict, asin };
                        }
                    },
                    {
                        selector: '#buybox:not(:has(div.a-tab-container))',
                        name: 'buybox',
                        children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
                        before_hook: function () {
                            var _a;
                            const title = document.querySelector('#title').innerText;
                            const price = (_a = document.querySelector("#apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[class='offersConsistencyEnabled'] > div:not([style='display:none;']):not([style=\"display: none;\"]) #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, #apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[data-csa-c-content-id='apex_with_rio_cx'] #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen")) === null || _a === void 0 ? void 0 : _a.innerText;
                            const options = Array.from(document.querySelectorAll('#twister div.a-row:has(label.a-form-label):has(span.selection)')).map((a) => ({
                                label: a.querySelector('label.a-form-label').innerText,
                                value: a.querySelector('span.selection').innerText
                            }));
                            const options_dict = {};
                            for (const option of options) {
                                options_dict[option['label'].replace(': ', '')] = option['value'];
                            }
                            const asin = document.querySelector('input#ASIN').value;
                            console.log({ title, price, options: options_dict, asin });
                            return { title, price, options: options_dict, asin };
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
                                        selector: "input[aria-label='Select warranty option']",
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
        match: '/cart',
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
function processElement(element, recipe, parentName = '', nthChild = 0) {
    if (recipe.debugger) {
        debugger;
    }
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
        elementText = recipe.text_js();
    }
    else if (recipe.add_text) {
        elementText = element.innerText || element.textContent || '';
    }
    elementText = elementText.replace(/\s+/g, ' ').trim();
    if (recipe.text_format) {
        elementText = recipe.text_format.replace('{}', elementText);
    }
    if (elementText && recipe.add_text) {
        newElement.textContent = elementText;
    }
    // Build the node attributes
    let elementName = '';
    if (recipe.name) {
        if (recipe.name === 'from_text') {
            if (!elementText) {
                console.log('elementText is empty', recipe, element);
                // debugger
            }
            elementName = parentName ? parentName + '.' : '';
            elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_');
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
        const metadata = JSON.stringify(recipe.generate_metadata());
        newElement.setAttribute('data-element-meta', metadata);
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
            console.log('click-element not found', element, recipe);
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
        const options = element.querySelectorAll('option');
        options.forEach((option) => {
            const optionValue = option.getAttribute('value') || option.textContent.trim();
            const optionName = elementName + '.' + optionValue;
            const newOption = document.createElement('option');
            newOption.textContent = option.textContent;
            newOption.setAttribute('value', optionValue);
            newOption.setAttribute('name', optionName);
            newOption.setAttribute('selected', option.selected.toString());
            option.setAttribute('data-clickable-id', optionName); // Tag actual DOM option element
            newElement.appendChild(newOption);
        });
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
        for (const key in recipe.keep_attr) {
            const value = element.getAttribute(key);
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
            newElement.setAttribute(key, eval(recipe.override_attr[key]));
        }
    }
    // Process children
    if (recipe.children && recipe.children.length > 0) {
        for (const childRecipe of recipe.children) {
            const selector = childRecipe.direct_child
                ? `:scope > ${childRecipe.selector}`
                : childRecipe.selector;
            const childElements = element.querySelectorAll(selector);
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
                    console.log('no split marker');
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
/* harmony export */   isFromPopup: () => (/* binding */ isFromPopup),
/* harmony export */   update_icon: () => (/* binding */ update_icon)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.ts");

function isFromPopup(element) {
    return element.closest('#reason-modal') !== null;
}
function update_icon(url) {
    console.log('update_icon', url);
    if (url &&
        url.includes(_config__WEBPACK_IMPORTED_MODULE_0__.url_include) &&
        !_config__WEBPACK_IMPORTED_MODULE_0__.filter_url.some((excludeUrl) => url.includes(excludeUrl))) {
        console.log('active icon');
        chrome.action.setIcon({
            path: '../icon.png'
        });
    }
    else {
        console.log('inactive icon');
        chrome.action.setIcon({
            path: '../Inactive_icon.png'
        });
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
/*!************************************!*\
  !*** ./src/content_script_test.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.ts");
/* harmony import */ var _recipe_new__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe_new */ "./src/recipe_new.ts");
/* harmony import */ var _utils_element_processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/element-processor */ "./src/utils/element-processor.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


window.addEventListener('message', (event) => __awaiter(void 0, void 0, void 0, function* () {
    if (event.source !== window)
        return;
    if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
        yield captureScreenshot(event.data.timestamp);
    }
    if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
        try {
            const result = yield chrome.storage.local.get(['htmlSnapshots']);
            const htmlSnapshots = result.htmlSnapshots || {};
            htmlSnapshots[event.data.data.htmlSnapshotId] = event.data.data.htmlContent;
            chrome.storage.local.set({ htmlSnapshots });
            const dataForBackground = Object.assign({}, event.data.data);
            delete dataForBackground.htmlContent;
            const response2 = yield chrome.runtime.sendMessage({
                action: 'saveData',
                data: dataForBackground
            });
            if (!response2.success) {
                throw new Error(response2.message || 'interaction capture failed');
            }
            console.log(response2);
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
function captureScreenshot(timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const screenshotId = `screenshot_${timestamp}`;
            const response = yield chrome.runtime.sendMessage({
                action: 'captureScreenshot',
                screenshotId
            });
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

let lastScrollTime = 0; // Track last scroll timestamp
const SCROLL_THRESHOLD = 1500; // Minimum time in ms between screenshots for scroll actions
function selectRecipe() {
    var _a, _b;
    const parsedUrl = new URL(window.location.href);
    const path = parsedUrl.pathname;
    for (const recipe of _recipe_new__WEBPACK_IMPORTED_MODULE_1__.recipes) {
        const matchMethod = recipe.match_method || 'text';
        if (matchMethod === 'text') {
            try {
                // Execute script in tab to check for matching element
                const element = document.querySelector(recipe.selector);
                const hasMatch = element &&
                    (!recipe.match_text ||
                        ((_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(recipe.match_text.toLowerCase())) !== null && _b !== void 0 ? _b : false));
                if (hasMatch) {
                    return recipe;
                }
            }
            catch (error) {
                console.error('Error checking text match:', error);
            }
        }
        else if (matchMethod === 'url' && recipe.match === path) {
            return recipe;
        }
    }
    throw new Error(`No matching recipe found for path: ${path}`);
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('DOMContentLoaded');
    const url = window.location.href;
    try {
        const recipe = selectRecipe();
        const rootElement = document.querySelector(recipe.selector);
        if (rootElement) {
            const newRoot = (0,_utils_element_processor__WEBPACK_IMPORTED_MODULE_2__.processElement)(rootElement, recipe);
            console.log(newRoot.outerHTML);
        }
    }
    catch (error) {
        console.error('Error initializing clickable elements:', error);
    }
}));
function generateHtmlSnapshotId() {
    const url = window.location.href;
    const timestamp = new Date().toISOString();
    return `html_${hashCode(url)}_${timestamp}`;
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
// Function to get clickable elements in the viewport
function getClickableElementsInViewport() {
    const clickableElements = []; // Array to store clickable elements
    // Select all potential clickable elements
    const allElements = document.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');
    // Check if each element is in the viewport
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            clickableElements.push({
                tagName: element.tagName,
                className: element.className,
                id: element.id,
                innerText: element.innerText.trim(),
                outerHTML: element.outerHTML.trim()
            });
        }
    });
    return clickableElements;
}
// Function to capture interactions
function captureInteraction(eventType, target, timestamp, selector, clickableId, url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Generate new HTML snapshot ID
            const currentSnapshotId = generateHtmlSnapshotId();
            // Save HTML snapshot and wait for it to complete
            // await new Promise((resolve, reject) => {
            const result = yield chrome.storage.local.get(['htmlSnapshots']);
            const htmlSnapshots = result.htmlSnapshots || {};
            htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML;
            chrome.storage.local.set({ htmlSnapshots });
            // })
            // const clickableElements = getClickableElementsInViewport();
            const data = {
                eventType,
                timestamp: timestamp,
                target: target,
                //   targetOuterHTML: target.outerHTML,
                //   targetClass: target.className,
                //   targetId: target.id,
                //   targetText: target.innerText || target.value || '',
                htmlSnapshotId: currentSnapshotId,
                // clickableElements: clickableElements,
                selector: selector || '',
                clickableId: clickableId || '',
                url: url || ''
            };
            yield chrome.runtime.sendMessage({ action: 'saveData', data });
        }
        catch (error) {
            console.error(`Error during ${eventType} event handling:`, error);
        }
    });
}
// Capture scroll interactions
document.addEventListener('scroll', (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // scroll don't have a specific target, so we judge whether popup is open
        if (document.getElementById('reason-modal')) {
            return;
        }
        const currentTime = Date.now();
        if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
            lastScrollTime = currentTime;
            const timestamp = new Date().toISOString();
            yield captureInteraction('scroll', event.target, timestamp, '', '', '');
            yield captureScreenshot(timestamp);
        }
    }
    catch (error) {
        console.error('Error during scroll event handling:', error);
    }
}));
document.addEventListener('blur', (event) => __awaiter(void 0, void 0, void 0, function* () {
    const target = event.target;
    if ((0,_utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target))
        return;
    if (target &&
        ((target.tagName === 'INPUT' && target.type === 'text') ||
            target.tagName === 'TEXTAREA')) {
        const timestamp = new Date().toISOString();
        yield captureScreenshot(timestamp);
        yield captureInteraction('input', target, timestamp, '', '', '');
    }
}), true);
// Capture click interactions
function getUniqueSelector(element) {
    if (element.id) {
        return `#${element.id}`;
    }
    if (element.className) {
        const className = element.className.trim().split(/\s+/).join('.');
        return `${element.tagName.toLowerCase()}.${className}`;
    }
    return element.tagName.toLowerCase();
}
function getFullSelector(element) {
    let path = [];
    while (element.parentElement) {
        path.unshift(getUniqueSelector(element));
        element = element.parentElement;
    }
    return path.join(' > ');
}
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
                    // Store the product info
                    let result = yield chrome.storage.local.get({ orderDetails: [] });
                    const orderDetails = result.orderDetails || [];
                    orderDetails.push({
                        name: productInfo.title,
                        price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
                        asin: productInfo.asin,
                        options: productInfo.options
                    });
                    yield chrome.storage.local.set({ orderDetails });
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
                                const value = ((_d = (_c = variation.querySelector('.a-size-small:not(.a-text-bold)')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) ||
                                    '';
                                if (label && value) {
                                    options[label] = value;
                                }
                            });
                            selectedItems.push({
                                name,
                                asin,
                                price,
                                options
                            });
                        }
                    }
                }
                if (selectedItems.length > 0) {
                    let result = yield chrome.storage.local.get({ orderDetails: [] });
                    const orderDetails = result.orderDetails || [];
                    const updatedOrderDetails = orderDetails.concat(selectedItems);
                    yield chrome.storage.local.set({ orderDetails: updatedOrderDetails });
                    console.log('Stored selected cart items:', selectedItems);
                }
            }
            catch (error) {
                console.error('Error capturing selected cart items:', error);
            }
        }));
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getHTML') {
        const htmlContent = document.documentElement.outerHTML;
        sendResponse({ html: htmlContent });
    }
    return true;
});
function createModal(question, sendResponse) {
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
                <h3>${question}</h3>
                <textarea id="reason-input" style="
                    width: 100%;
                    height: 100px;
                    margin: 10px 0;
                "></textarea>
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
        document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)').appendChild(modalContainer);
    }
    else {
        document.body.appendChild(modalContainer);
    }
    // Add event listeners
    document.getElementById('reason-submit').addEventListener('click', () => {
        const input = document.getElementById('reason-input');
        console.log('submitBtn clicked');
        const value = input.value;
        modalContainer.remove();
        sendResponse({ input: value });
    });
    document.getElementById('reason-skip').addEventListener('click', () => {
        const input = document.getElementById('reason-input');
        modalContainer.remove();
        sendResponse({ input: null });
    });
}
// Listen for messages from background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'show_popup') {
        console.log('show_popup', message);
        // assert there isn't already a popup
        if (document.getElementById('reason-modal')) {
            return;
        }
        createModal(message.question, sendResponse);
        return true; // Will respond asynchronously
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEUsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0Esa0xBQWtMLDhCQUE4QjtBQUNoTjtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK01BQStNLCtCQUErQjtBQUM5TztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQ0FBMkM7QUFDckYscUNBQXFDO0FBQ3JDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK01BQStNLCtCQUErQjtBQUM5TztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQ0FBMkM7QUFDckYscUNBQXFDO0FBQ3JDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3MEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TG9EO0FBQzdDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixnREFBVztBQUNoQyxTQUFTLCtDQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7VUNwQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUMyQztBQUNKO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RCxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDMkQ7QUFDM0Qsd0JBQXdCO0FBQ3hCLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3RUFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsR0FBRyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsOEJBQThCLEdBQUcsVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0Esa0VBQWtFLGtCQUFrQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsR0FBRztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxrQkFBa0I7QUFDcEY7QUFDQTtBQUNBLHFEQUFxRCxtQ0FBbUM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZV9uZXcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbnRlbnRfc2NyaXB0X3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNTtcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgO1xuZXhwb3J0IGNvbnN0IHppcCA9IHRydWU7XG5leHBvcnQgY29uc3QgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnO1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJztcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnNjc2YTY2NTE0NDM5OGU2OTY3NTY3YTJiJztcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZSA9ICdhbWF6b24uY29tJztcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl91cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYDtcbmV4cG9ydCBjb25zdCBmaWx0ZXJfdXJsID0gW1xuICAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2NoZWNrb3V0LycsXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvYnV5LycsXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vYS9hZGRyZXNzZXMnLFxuICAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2NwZS95b3VycGF5bWVudHMvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9wcm9kdWN0L2hhbmRsZS1idXktYm94LycsXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vZ3AvY2hlY2tvdXRwb3J0YWwvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jYXJ0L2Rlc2t0b3AvJ1xuXTtcbiIsImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gICAgc2VsZWN0b3I6ICcjbmF2YmFyLW1haW4nLFxuICAgIG5hbWU6ICduYXZfYmFyJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLWJhci1mb3JtJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2lucHV0I3R3b3RhYnNlYXJjaHRleHRib3gnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfYnV0dG9uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjbmF2LWxpbmstYWNjb3VudExpc3QnLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNuYXYtbGluay1hY2NvdW50TGlzdCBzcGFuLm5hdi1saW5lLTInLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnYWNjb3VudF9hbmRfbGlzdF9idXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1vcmRlcnMnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnb3JkZXJfYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtY2FydCcsXG4gICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnI25hdi1jYXJ0IC5uYXYtbGluZS0yJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2NhcnRfYnV0dG9uJ1xuICAgICAgICB9XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCByZWZpbmVtZW50X29wdGlvbiA9IFtcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIGNsYXNzOiAncmVmaW5lbWVudC10aXRsZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICd1bDpudGgtb2YtdHlwZSgxKSA+IHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaTpoYXMoYS5hLWxpbmstbm9ybWFsLnMtbmF2aWdhdGlvbi1pdGVtKScsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnLFxuICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBhQ2hpbGQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gbGkgPiBzcGFuID4gZGl2W2RhdGEtYS1leHBhbmRlci1uYW1lPSdmaWx0ZXItY29udGVudC1leHBhbmRlciddXCIsXG4gICAgICAgIG5hbWU6ICdtb3JlX29wdGlvbnMnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImFbZGF0YS1jc2EtYy1mdW5jLWRlcHM9J2F1aS1kYS1hLWV4cGFuZGVyLXRvZ2dsZSddXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvZ2dsZV9leHBhbnNpb24nLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGknLFxuICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja19zZWxlY3RvcjogJ2EnLFxuICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQgJiYgZWxlbWVudC5pbm5lclRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBlbGVtZW50LmlubmVyVGV4dC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYUNoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLmEtbGluay1ub3JtYWwucy1uYXZpZ2F0aW9uLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYUNoaWxkICYmIGFDaGlsZC5oYXNBdHRyaWJ1dGUoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSAnICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gYUNoaWxkLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhQ2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EuYS1saW5rLW5vcm1hbC5zLW5hdmlnYXRpb24taXRlbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhQ2hpbGQgJiYgYUNoaWxkLmhhc0F0dHJpYnV0ZSgndGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGFDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5leHBvcnQgY29uc3QgcHJvZHVjdF9mYWN0cyA9IHtcbiAgICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgIGNsYXNzOiAncHJvZHVjdC1mYWN0cydcbn07XG5leHBvcnQgY29uc3QgcHJvZHVjdF9kZWxpdmVyeSA9IHtcbiAgICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGFzczogJ3Byb2R1Y3QtZGVsaXZlcnknXG59O1xuZXhwb3J0IGNvbnN0IHF1YW50aXR5X3NlbGVjdG9yID0ge1xuICAgIHNlbGVjdG9yOiAnI3NlbGVjdFF1YW50aXR5JyxcbiAgICBuYW1lOiAncXVhbnRpdHlfc2VsZWN0b3InLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwnLFxuICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdzZWxlY3QnLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ2Ryb3BfZG93bl9saXN0J1xuICAgICAgICB9XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IgPSB7XG4gICAgc2VsZWN0b3I6ICcjcmVwbGVuaXNobWVudEZyZXF1ZW5jeV9mZWF0dXJlX2RpdicsXG4gICAgbmFtZTogJ2RlbGl2ZXJ5X2ZyZXF1ZW5jeV9zZWxlY3RvcicsXG4gICAgdGV4dF9zZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW1pY3JvID4gc3BhbicsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmN4T3JkRnJlcU9ubWxXcmFwcGVyIHNlbGVjdCcsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnZHJvcF9kb3duX2xpc3QnXG4gICAgICAgIH1cbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IHNldF91cF9ub3dfYnV0dG9uID0ge1xuICAgIHNlbGVjdG9yOiAnI3JjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZScsXG4gICAgYWRkX3RleHQ6IHRydWUsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIG5hbWU6ICdzZXRfdXBfbm93JyxcbiAgICBjbGFzczogJ3Byb2R1Y3Qtc2V0LXVwLW5vdydcbn07XG5leHBvcnQgY29uc3QgYWRkX3RvX2NhcnRfYnV0dG9uID0ge1xuICAgIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5hZGQtdG8tY2FydCddLCBpbnB1dFtuYW1lPSdzdWJtaXQuYWRkLXRvLWNhcnQtdWJiJ11cIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICBjbGFzczogJ3Byb2R1Y3QtYWRkLXRvLWNhcnQnXG59O1xuZXhwb3J0IGNvbnN0IGJ1eV9ub3dfYnV0dG9uID0ge1xuICAgIHNlbGVjdG9yOiBcImlucHV0W25hbWU9J3N1Ym1pdC5idXktbm93J11cIixcbiAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgbmFtZTogJ2J1eV9ub3cnLFxuICAgIGNsYXNzOiAncHJvZHVjdC1idXktbm93J1xufTtcbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhfYWNjb3JkaW9uID0ge1xuICAgIHNlbGVjdG9yOiAnI2J1eUJveEFjY29yZGlvbiA+IGRpdi5hLWJveC5jZWx3aWRnZXQnLFxuICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgIHRleHRfc2VsZWN0b3I6ICdkaXYuYWNjb3JkaW9uLWNhcHRpb24gPiBzcGFuJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdvZmZlcl9kaXNwbGF5X2Rlc2t0b3BfYWNjb3JkaW9uX2hlYWRlciddXCIsXG4gICAgICAgICAgICBuYW1lOiAnYWNjb3JkaW9uX3NlbGVjdG9yJyxcbiAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ2g1IHNwYW4uYS10ZXh0LWJvbGQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtYWNjb3JkaW9uLWlubmVyLmFjY29yZGlvbi1yb3ctY29udGVudCcsXG4gICAgICAgICAgICBuYW1lOiAncHVyY2hhc2VfZm9ybScsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfZmFjdHMsXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9kZWxpdmVyeSxcbiAgICAgICAgICAgICAgICBxdWFudGl0eV9zZWxlY3RvcixcbiAgICAgICAgICAgICAgICBkZWxpdmVyeV9mcmVxdWVuY3lfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgc2V0X3VwX25vd19idXR0b24sXG4gICAgICAgICAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnkgPSB7XG4gICAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfRGVza3RvcCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWRkVG9DYXJ0JyxcbiAgICAgICAgICAgIG5hbWU6ICdwdXJjaGFzZV9mb3JtJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9mYWN0cyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2RlbGl2ZXJ5LFxuICAgICAgICAgICAgICAgIHF1YW50aXR5X3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIGFkZF90b19jYXJ0X2J1dHRvbixcbiAgICAgICAgICAgICAgICBidXlfbm93X2J1dHRvblxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBidXlfYm94X3dpdGhvdXRfYWNjb3JkaW9uX3BpY2tfdXAgPSB7XG4gICAgc2VsZWN0b3I6ICcjZ3NvZF9zaW5nbGVPZmZlckRpc3BsYXlfZ3JvdXBfMl9EZXNrdG9wJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNwaWNrVXBPZmZlckRpc3BsYXknLFxuICAgICAgICAgICAgbmFtZTogJ3B1cmNoYXNlX2Zvcm0nLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2ZhY3RzLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RfZGVsaXZlcnksXG4gICAgICAgICAgICAgICAgcXVhbnRpdHlfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgYWRkX3RvX2NhcnRfYnV0dG9uLFxuICAgICAgICAgICAgICAgIGJ1eV9ub3dfYnV0dG9uXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGNhcnQgPSBbXG4gICAgbmF2LFxuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtbmFtZT0nQWN0aXZlIEl0ZW1zJ11cIixcbiAgICAgICAgbmFtZTogJ2FjdGl2ZV9pdGVtX2xpc3QnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWxpc3QtaXRlbS1jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZSBzcGFuLmEtdHJ1bmNhdGUtZnVsbCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuc2MtaXRlbS1jaGVjay1jaGVja2JveC1zZWxlY3RvciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCB1bCA+IGxpID4gc3Bhbi5hLWxpc3QtaXRlbSA+IGEuc2MtcHJvZHVjdC10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXRydW5jYXRlLWZ1bGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncHJvZHVjdF9kZXRhaWwnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBzcGFuLnNjLXF1YW50aXR5LXN0ZXBwZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImJ1dHRvblthcmlhLWxhYmVsPSdEZWNyZWFzZSBxdWFudGl0eSBieSBvbmUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9qczogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlY3JlYXNlX3F1YW50aXR5X2J5X29uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W3JvbGU9J3NwaW5idXR0b24nXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdDdXJyZW50IFF1YW50aXR5OiB7fSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiYnV0dG9uW2FyaWEtbGFiZWw9J0luY3JlYXNlIHF1YW50aXR5IGJ5IG9uZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2pzOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaW5jcmVhc2VfcXVhbnRpdHlfYnlfb25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nZGVsZXRlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2LnNjLWl0ZW0tY29udGVudC1ncm91cCBpbnB1dFtkYXRhLWFjdGlvbj0nc2F2ZS1mb3ItbGF0ZXInXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2F2ZV9mb3JfbGF0ZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICcjc2MtYnV5LWJveC1wdGMtYnV0dG9uIGlucHV0JyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2NoZWNrX291dCdcbiAgICB9XG5dO1xuZXhwb3J0IGNvbnN0IHJlY2lwZXMgPSBbXG4gICAge1xuICAgICAgICBtYXRjaDogJy8nLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnL3MnLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnaGVhZCcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsLCBoMi5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbCBzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGEuYS1saW5rLW5vcm1hbC5zLWxpbmstc3R5bGUuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZpZXdfcHJvZHVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0nYWRkLXRvLWNhcnQnXSBidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jc2EtYy1jb250ZW50LWlkPSdzLXNlYXJjaC1zZWUtZGV0YWlscy1idXR0b24nXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWVfb3B0aW9ucydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgICAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgdGVybWluYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gISFhcmd1bWVudHNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHRlcm1pbmF0ZV9jYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2NlbnRlckNvbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtY2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcF9hdHRyOiBbJ2lkJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXZlcmFnZUN1c3RvbWVyUmV2aWV3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYWNyQ3VzdG9tZXJSZXZpZXdUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9XCJhcGV4X2RwX2NlbnRlcl9jb2x1bW5cIl0gPiBkaXZbY2xhc3M9XCJvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWRcIl0gPiBkaXY6bm90KFtzdHlsZT1cImRpc3BsYXk6bm9uZTtcIl0pOm5vdChbc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiXSkgI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lLmFvay1hbGlnbi1jZW50ZXIuYW9rLXJlbGF0aXZlID4gc3Bhbi5hb2stb2Zmc2NyZWVuLCAjYXBleF9kZXNrdG9wID4gZGl2W2RhdGEtY3NhLWMtc2xvdC1pZD1cImFwZXhfZHBfY2VudGVyX2NvbHVtblwiXSA+IGRpdltkYXRhLWNzYS1jLWNvbnRlbnQtaWQ9XCJhcGV4X3dpdGhfcmlvX2N4XCJdICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Byb2R1Y3Rfb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1zZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpID4gbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RfY2hpbGQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGFiZWwuYS1mb3JtLWxhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkcm9wX2Rvd25fbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICd1bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV0dG9uX2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfanM6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gZWxlbWVudC5pbm5lclRleHQudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoaWxkID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1nQ2hpbGQgJiYgaW1nQ2hpbGQuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gJyAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGlsZCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0NoaWxkICYmIGltZ0NoaWxkLmFsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IGltZ0NoaWxkLmFsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5Ym94OmhhcyhkaXYuYS10YWItY29udGFpbmVyKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0YWJfaGVhZGluZ19kZXNrdG9wX2J1eWJveF9ncm91cF8xIGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcl90YWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RhYl9oZWFkaW5nX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzIgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwaWNrX3VwX3RhYicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVsaXZlcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdEZWxpdmVyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbYnV5X2JveF93aXRoX2FjY29yZGlvbiwgYnV5X2JveF93aXRob3V0X2FjY29yZGlvbl9kZWxpdmVyeV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdGFiX2Rlc2t0b3BfYnV5Ym94X2dyb3VwXzInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGlja191cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1BpY2sgVXAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fcGlja191cF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlX2hvb2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9J2FwZXhfZHBfY2VudGVyX2NvbHVtbiddID4gZGl2W2NsYXNzPSdvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWQnXSA+IGRpdjpub3QoW3N0eWxlPSdkaXNwbGF5Om5vbmU7J10pOm5vdChbc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIl0pICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9J2FwZXhfZHBfY2VudGVyX2NvbHVtbiddID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nYXBleF93aXRoX3Jpb19jeCddICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZS5hb2stYWxpZ24tY2VudGVyLmFvay1yZWxhdGl2ZSA+IHNwYW4uYW9rLW9mZnNjcmVlblwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKScpKS5tYXAoKGEpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBhLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsLmEtZm9ybS1sYWJlbCcpLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGEucXVlcnlTZWxlY3Rvcignc3Bhbi5zZWxlY3Rpb24nKS5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc19kaWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zX2RpY3Rbb3B0aW9uWydsYWJlbCddLnJlcGxhY2UoJzogJywgJycpXSA9IG9wdGlvblsndmFsdWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHRpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2luIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2luIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2J1eWJveDpub3QoOmhhcyhkaXYuYS10YWItY29udGFpbmVyKSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2J1eWJveCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2J1eV9ib3hfd2l0aF9hY2NvcmRpb24sIGJ1eV9ib3hfd2l0aG91dF9hY2NvcmRpb25fZGVsaXZlcnldLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlX2hvb2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9J2FwZXhfZHBfY2VudGVyX2NvbHVtbiddID4gZGl2W2NsYXNzPSdvZmZlcnNDb25zaXN0ZW5jeUVuYWJsZWQnXSA+IGRpdjpub3QoW3N0eWxlPSdkaXNwbGF5Om5vbmU7J10pOm5vdChbc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIl0pICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheSwgI2FwZXhfZGVza3RvcCA+IGRpdltkYXRhLWNzYS1jLXNsb3QtaWQ9J2FwZXhfZHBfY2VudGVyX2NvbHVtbiddID4gZGl2W2RhdGEtY3NhLWMtY29udGVudC1pZD0nYXBleF93aXRoX3Jpb19jeCddICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZS5hb2stYWxpZ24tY2VudGVyLmFvay1yZWxhdGl2ZSA+IHNwYW4uYW9rLW9mZnNjcmVlblwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKScpKS5tYXAoKGEpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBhLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsLmEtZm9ybS1sYWJlbCcpLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGEucXVlcnlTZWxlY3Rvcignc3Bhbi5zZWxlY3Rpb24nKS5pbm5lclRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc19kaWN0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zX2RpY3Rbb3B0aW9uWydsYWJlbCddLnJlcGxhY2UoJzogJywgJycpXSA9IG9wdGlvblsndmFsdWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I0FTSU4nKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHRpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2luIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2luIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1wYW5lICNhdHRhY2gtd2FycmFudHktZGlzcGxheScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hdHRhY2gtd2FycmFudHktYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJyNhdHRhY2gtd2FycmFudHktY2FyZC1kaXNwbGF5LXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbD0nU2VsZWN0IHdhcnJhbnR5IG9wdGlvbiddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLWRpc3BsYXktdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F0dGFjaC13YXJyYW50eS1jYXJkLXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hdHRhY2gtd2FycmFudHktYnV0dG9uLXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiaW5wdXRbYXJpYS1sYWJlbGxlZGJ5PSdhdHRhY2hTaUFkZENvdmVyYWdlLWFubm91bmNlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ0FkZCBQcm90ZWN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJpbnB1dFthcmlhLWxhYmVsbGVkYnk9J2F0dGFjaFNpTm9Db3ZlcmFnZS1hbm5vdW5jZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ25vX3Byb3RlY3Rpb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ05vIFRoYW5rcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJy9jYXJ0L3NtYXJ0LXdhZ29uJyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3N3LWF0Yy1idXktYm94JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1zdWJ0b3RhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjc3ctc3VidG90YWwtaXRlbS1jb3VudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwic3BhblthcmlhLWhpZGRlbj0ndHJ1ZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzYy1idXktYm94LXB0Yy1idXR0b24gc3Bhbi5hLWJ1dHRvbi1pbm5lciBpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnZGl2LnNjLXdpdGhvdXQtbXVsdGljYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2hlY2tfb3V0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNzdy1ndGMgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdnb190b19jYXJ0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJy9jYXJ0JyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnL2dwL2NhcnQvdmlldy5odG1sJyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2hlYWQnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogY2FydFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnL2FwL3NpZ25pbicsXG4gICAgICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgICAgIHRlcm1pbmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhYXJndW1lbnRzWzBdO1xuICAgICAgICB9LFxuICAgICAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvZ3AvYnV5L3NwYy9oYW5kbGVycy9kaXNwbGF5Lmh0bWwnLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICB0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAhIWFyZ3VtZW50c1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnXG4gICAgfVxuXTtcbiIsImV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChlbGVtZW50LCByZWNpcGUsIHBhcmVudE5hbWUgPSAnJywgbnRoQ2hpbGQgPSAwKSB7XG4gICAgaWYgKHJlY2lwZS5kZWJ1Z2dlcikge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGEgbmV3IGVsZW1lbnQgdXNpbmcgdGhlIERPTSBBUElcbiAgICBsZXQgdGFnTmFtZSA9IHJlY2lwZS50YWdfbmFtZSB8fCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBIYW5kbGUgdW5kZXJzY29yZWQgdGFnc1xuICAgIGlmICh0YWdOYW1lLmVuZHNXaXRoKCdfJykpIHtcbiAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAvLyBFeHRyYWN0IHRleHQgY29udGVudCBiYXNlZCBvbiB0aGUgcmVjaXBlXG4gICAgbGV0IGVsZW1lbnRUZXh0ID0gJyc7XG4gICAgaWYgKHJlY2lwZS50ZXh0X3NlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHRleHRFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS50ZXh0X3NlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRleHRFbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50VGV4dCA9IHRleHRFbGVtZW50LmlubmVyVGV4dCB8fCB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChyZWNpcGUudGV4dF9qcykge1xuICAgICAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2pzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlY2lwZS5hZGRfdGV4dCkge1xuICAgICAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0IHx8IGVsZW1lbnQudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgfVxuICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudFRleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKTtcbiAgICBpZiAocmVjaXBlLnRleHRfZm9ybWF0KSB7XG4gICAgICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0LnJlcGxhY2UoJ3t9JywgZWxlbWVudFRleHQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudFRleHQgJiYgcmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50VGV4dDtcbiAgICB9XG4gICAgLy8gQnVpbGQgdGhlIG5vZGUgYXR0cmlidXRlc1xuICAgIGxldCBlbGVtZW50TmFtZSA9ICcnO1xuICAgIGlmIChyZWNpcGUubmFtZSkge1xuICAgICAgICBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX3RleHQnKSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRUZXh0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VsZW1lbnRUZXh0IGlzIGVtcHR5JywgcmVjaXBlLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnO1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX250aF9jaGlsZCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJztcbiAgICAgICAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJyc7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lO1xuICAgIH1cbiAgICBpZiAocmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKSB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gSlNPTi5zdHJpbmdpZnkocmVjaXBlLmdlbmVyYXRlX21ldGFkYXRhKCkpO1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1lbGVtZW50LW1ldGEnLCBtZXRhZGF0YSk7XG4gICAgfVxuICAgIC8vIEhhbmRsZSBjbGlja2FibGVzIGFuZCBpbnB1dHNcbiAgICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgICAgICBpZiAoIXJlY2lwZS5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsaWNrYWJsZSBlbGVtZW50IG11c3QgaGF2ZSBhIG5hbWUnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgY2xpY2tfc2VsZWN0b3JcbiAgICAgICAgbGV0IGNsaWNrX2VsZW1lbnQ7XG4gICAgICAgIGlmIChyZWNpcGUuY2xpY2tfc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLmNsaWNrX3NlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsaWNrX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGlja19lbGVtZW50KSB7XG4gICAgICAgICAgICBjbGlja19lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2stZWxlbWVudCBub3QgZm91bmQnLCBlbGVtZW50LCByZWNpcGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuY2xpY2thYmxlX3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlO1xuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgICBpZiAoWyd0ZXh0JywgJ251bWJlciddLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5wdXQtaWQnLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghd2luZG93LmlucHV0X3JlY2lwZXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmlucHV0X3JlY2lwZXNbZWxlbWVudE5hbWVdID0gcmVjaXBlO1xuICAgIH1cbiAgICAvLyAqKkhhbmRsZSBzZWxlY3QgZWxlbWVudHMqKlxuICAgIGlmICh0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgICAvLyBUYWcgdGhlIHNlbGVjdCBlbGVtZW50IHdpdGggZGF0YS1zZWxlY3QtaWRcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0LWlkJywgZWxlbWVudE5hbWUpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKSB8fCBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnROYW1lICsgJy4nICsgb3B0aW9uVmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uVmFsdWUpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsIG9wdGlvbk5hbWUpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBvcHRpb24uc2VsZWN0ZWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIG9wdGlvbk5hbWUpOyAvLyBUYWcgYWN0dWFsIERPTSBvcHRpb24gZWxlbWVudFxuICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ29weSBzcGVjaWZpZWQgYXR0cmlidXRlc1xuICAgIGNvbnN0IGF0dHJzVG9Db3B5ID0gW1xuICAgICAgICAnYWx0JyxcbiAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgJ3R5cGUnLFxuICAgICAgICAndmFsdWUnLFxuICAgICAgICAncm9sZScsXG4gICAgICAgICdhcmlhLWxhYmVsJyxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnXG4gICAgXTtcbiAgICBhdHRyc1RvQ29weS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLmtlZXBfYXR0cikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlY2lwZVsnY2xhc3MnXSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZWNpcGVbJ2NsYXNzJ10pO1xuICAgIH1cbiAgICBpZiAocmVjaXBlWydpZCddKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIHJlY2lwZVsnaWQnXSk7XG4gICAgfVxuICAgIC8vIE92ZXJyaWRlIGF0dHJpYnV0ZXMgaWYgc3BlY2lmaWVkXG4gICAgaWYgKHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5vdmVycmlkZV9hdHRyKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGV2YWwocmVjaXBlLm92ZXJyaWRlX2F0dHJba2V5XSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgY2hpbGRyZW5cbiAgICBpZiAocmVjaXBlLmNoaWxkcmVuICYmIHJlY2lwZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRSZWNpcGUgb2YgcmVjaXBlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IGNoaWxkUmVjaXBlLmRpcmVjdF9jaGlsZFxuICAgICAgICAgICAgICAgID8gYDpzY29wZSA+ICR7Y2hpbGRSZWNpcGUuc2VsZWN0b3J9YFxuICAgICAgICAgICAgICAgIDogY2hpbGRSZWNpcGUuc2VsZWN0b3I7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IHByb2Nlc3NFbGVtZW50KGNoaWxkRWxlbWVudCwgY2hpbGRSZWNpcGUsIHBhcmVudE5hbWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkUmVjaXBlLmluc2VydF9zcGxpdF9tYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlcnkgPSBjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyX2V2ZXJ5IHx8IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAlIGV2ZXJ5ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BsaXQtbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAxXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5zZXJ0aW5nIHNwbGl0IG1hcmtlciAyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpO1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKHNwbGl0TWFya2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzcGxpdCBtYXJrZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKTtcbiAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBmaWx0ZXJfdXJsLCB1cmxfaW5jbHVkZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5leHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVfaWNvbih1cmwpIHtcbiAgICBjb25zb2xlLmxvZygndXBkYXRlX2ljb24nLCB1cmwpO1xuICAgIGlmICh1cmwgJiZcbiAgICAgICAgdXJsLmluY2x1ZGVzKHVybF9pbmNsdWRlKSAmJlxuICAgICAgICAhZmlsdGVyX3VybC5zb21lKChleGNsdWRlVXJsKSA9PiB1cmwuaW5jbHVkZXMoZXhjbHVkZVVybCkpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmUgaWNvbicpO1xuICAgICAgICBjaHJvbWUuYWN0aW9uLnNldEljb24oe1xuICAgICAgICAgICAgcGF0aDogJy4uL2ljb24ucG5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmFjdGl2ZSBpY29uJyk7XG4gICAgICAgIGNocm9tZS5hY3Rpb24uc2V0SWNvbih7XG4gICAgICAgICAgICBwYXRoOiAnLi4vSW5hY3RpdmVfaWNvbi5wbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBpc0Zyb21Qb3B1cCB9IGZyb20gJy4vdXRpbHMvdXRpbCc7XG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi9yZWNpcGVfbmV3JztcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ0NBUFRVUkVfU0NSRUVOU0hPVCcpIHtcbiAgICAgICAgeWllbGQgY2FwdHVyZVNjcmVlbnNob3QoZXZlbnQuZGF0YS50aW1lc3RhbXApO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuZGF0YS50eXBlICYmIGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NBVkVfSU5URVJBQ1RJT05fREFUQScpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSk7XG4gICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBodG1sU25hcHNob3RzW2V2ZW50LmRhdGEuZGF0YS5odG1sU25hcHNob3RJZF0gPSBldmVudC5kYXRhLmRhdGEuaHRtbENvbnRlbnQ7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YUZvckJhY2tncm91bmQgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudC5kYXRhLmRhdGEpO1xuICAgICAgICAgICAgZGVsZXRlIGRhdGFGb3JCYWNrZ3JvdW5kLmh0bWxDb250ZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UyID0geWllbGQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3NhdmVEYXRhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhRm9yQmFja2dyb3VuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlMi5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlMi5tZXNzYWdlIHx8ICdpbnRlcmFjdGlvbiBjYXB0dXJlIGZhaWxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UyKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBpbnRlcmFjdGlvbiBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXBcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgIH1cbiAgICB9XG59KSk7XG5mdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXApIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NhcHR1cmVTY3JlZW5zaG90JyxcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90SWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLm1lc3NhZ2UgfHwgJ1NjcmVlbnNob3QgY2FwdHVyZSBmYWlsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdCBpbiBjb250ZW50IHNjcmlwdDonLCBlcnJvcik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQtcHJvY2Vzc29yJztcbmxldCBsYXN0U2Nyb2xsVGltZSA9IDA7IC8vIFRyYWNrIGxhc3Qgc2Nyb2xsIHRpbWVzdGFtcFxuY29uc3QgU0NST0xMX1RIUkVTSE9MRCA9IDE1MDA7IC8vIE1pbmltdW0gdGltZSBpbiBtcyBiZXR3ZWVuIHNjcmVlbnNob3RzIGZvciBzY3JvbGwgYWN0aW9uc1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZTtcbiAgICBmb3IgKGNvbnN0IHJlY2lwZSBvZiByZWNpcGVzKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCc7XG4gICAgICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzTWF0Y2ggPSBlbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICgoX2IgPSAoX2EgPSBlbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhyZWNpcGUubWF0Y2hfdGV4dC50b0xvd2VyQ2FzZSgpKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2UpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YCk7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWNpcGUgPSBzZWxlY3RSZWNpcGUoKTtcbiAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3Rvcik7XG4gICAgICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Um9vdC5vdXRlckhUTUwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgY2xpY2thYmxlIGVsZW1lbnRzOicsIGVycm9yKTtcbiAgICB9XG59KSk7XG5mdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1gO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpO1xuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKCk7XG59XG4vLyBGdW5jdGlvbiB0byBnZXQgY2xpY2thYmxlIGVsZW1lbnRzIGluIHRoZSB2aWV3cG9ydFxuZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnRzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIGNsaWNrYWJsZSBlbGVtZW50c1xuICAgIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAgICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICAgICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgICAgICBjbGlja2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiBlbGVtZW50LnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBlbGVtZW50LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSxcbiAgICAgICAgICAgICAgICBvdXRlckhUTUw6IGVsZW1lbnQub3V0ZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xpY2thYmxlRWxlbWVudHM7XG59XG4vLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGFyZ2V0LCB0aW1lc3RhbXAsIHNlbGVjdG9yLCBjbGlja2FibGVJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKTtcbiAgICAgICAgICAgIC8vIFNhdmUgSFRNTCBzbmFwc2hvdCBhbmQgd2FpdCBmb3IgaXQgdG8gY29tcGxldGVcbiAgICAgICAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSk7XG4gICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnRzID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAvLyAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICAvLyAgIHRhcmdldENsYXNzOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIC8vICAgdGFyZ2V0SWQ6IHRhcmdldC5pZCxcbiAgICAgICAgICAgICAgICAvLyAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAvLyBjbGlja2FibGVFbGVtZW50czogY2xpY2thYmxlRWxlbWVudHMsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZUlkOiBjbGlja2FibGVJZCB8fCAnJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCB8fCAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIENhcHR1cmUgc2Nyb2xsIGludGVyYWN0aW9uc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBzY3JvbGwgZG9uJ3QgaGF2ZSBhIHNwZWNpZmljIHRhcmdldCwgc28gd2UganVkZ2Ugd2hldGhlciBwb3B1cCBpcyBvcGVuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIGxhc3RTY3JvbGxUaW1lID49IFNDUk9MTF9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB5aWVsZCBjYXB0dXJlSW50ZXJhY3Rpb24oJ3Njcm9sbCcsIGV2ZW50LnRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnKTtcbiAgICAgICAgICAgIHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzY3JvbGwgZXZlbnQgaGFuZGxpbmc6JywgZXJyb3IpO1xuICAgIH1cbn0pKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh0YXJnZXQgJiZcbiAgICAgICAgKCh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiB0YXJnZXQudHlwZSA9PT0gJ3RleHQnKSB8fFxuICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgeWllbGQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKTtcbiAgICAgICAgeWllbGQgY2FwdHVyZUludGVyYWN0aW9uKCdpbnB1dCcsIHRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnKTtcbiAgICB9XG59KSwgdHJ1ZSk7XG4vLyBDYXB0dXJlIGNsaWNrIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gZ2V0VW5pcXVlU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignLicpO1xuICAgICAgICByZXR1cm4gYCR7ZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LiR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGdldEZ1bGxTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhdGgudW5zaGlmdChnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSk7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBIYW5kbGUgYWxsIHR5cGVzIG9mIG9yZGVyIGJ1dHRvbnNcbiAgICBjb25zdCBwbGFjZU9yZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2lkPVwicGxhY2VPcmRlclwiXSwgaW5wdXRbaWQ9XCJ0dXJiby1jaGVja291dC1weW8tYnV0dG9uXCJdJyk7XG4gICAgY29uc3QgYnV5Tm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJidXktbm93LWJ1dHRvblwiXScpO1xuICAgIGNvbnN0IHNldHVwTm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwicmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlXCJdJyk7XG4gICAgY29uc3QgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvY2VlZFRvUmV0YWlsQ2hlY2tvdXRcIl0nKTtcbiAgICBbYnV5Tm93QnV0dG9uLCBzZXR1cE5vd0J1dHRvbl0uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKChfYiA9IChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAoKF9kID0gKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudHJpbSgpKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW46ICgoX2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS52YWx1ZSkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYWxsIG9wdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblJvd3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJykpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9ICgoX2IgPSAoX2EgPSByb3cucXVlcnlTZWxlY3RvcignbGFiZWwuYS1mb3JtLWxhYmVsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKCc6ICcsICcnKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgoX2MgPSByb3cucXVlcnlTZWxlY3Rvcignc3Bhbi5zZWxlY3Rpb24nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEluZm8ub3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2J1dHRvbi5pZH0gY2xpY2tlZCAtIFByb2R1Y3QgSW5mbzpgLCBwcm9kdWN0SW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHJlc3VsdC5vcmRlckRldGFpbHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJvZHVjdEluZm8ucHJpY2UucmVwbGFjZSgvW14wLTkuXS9nLCAnJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RJbmZvLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24pIHtcbiAgICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJzYy1hY3RpdmUtXCJdJykpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gJ3NjLWFjdGl2ZS1jYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2JveCAmJiBjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TGluayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJvZHVjdC10aXRsZS1jb250IC5zYy1wcm9kdWN0LWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0TGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lRWxlbWVudCA9IHByb2R1Y3RMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5hLXRydW5jYXRlLWZ1bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKChfYSA9IGZ1bGxOYW1lRWxlbWVudCA9PT0gbnVsbCB8fCBmdWxsTmFtZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZ1bGxOYW1lRWxlbWVudC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRyaW0oKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IHByb2R1Y3RMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSAoKF9iID0gaHJlZi5tYXRjaCgvcHJvZHVjdFxcLyhbQS1aMC05XXsxMH0pLykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYlsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcmljZS1ibG9jayAuYS1vZmZzY3JlZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQoKChfYyA9IHByaWNlRWxlbWVudC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKSB8fCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uRWxlbWVudHMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy1wcm9kdWN0LXZhcmlhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbkVsZW1lbnRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gKChfYiA9IChfYSA9IHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS10ZXh0LWJvbGQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpLnJlcGxhY2UoJzonLCAnJykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoKF9kID0gKF9jID0gdmFyaWF0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hLXNpemUtc21hbGw6bm90KC5hLXRleHQtYm9sZCknKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudHJpbSgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gcmVzdWx0Lm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5jb25jYXQoc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlsczogdXBkYXRlZE9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTDtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaHRtbDogaHRtbENvbnRlbnQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVNb2RhbChxdWVzdGlvbiwgc2VuZFJlc3BvbnNlKSB7XG4gICAgY29uc3QgbW9kYWxIdG1sID0gYFxuICAgICAgICA8ZGl2IGlkPVwicmVhc29uLW1vZGFsXCIgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPGgzPiR7cXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZWFzb24taW5wdXRcIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWFzb24tc2tpcFwiPlNraXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gbW9kYWxIdG1sO1xuICAgIC8vIGlmIGF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldCBleGlzdHNcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJykuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG4gICAgfVxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdEJ0biBjbGlja2VkJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUgfSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1za2lwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1pbnB1dCcpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IG51bGwgfSk7XG4gICAgfSk7XG59XG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gYmFja2dyb3VuZCBzY3JpcHRcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93X3BvcHVwJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd19wb3B1cCcsIG1lc3NhZ2UpO1xuICAgICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNb2RhbChtZXNzYWdlLnF1ZXN0aW9uLCBzZW5kUmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
