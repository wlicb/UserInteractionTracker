
const nav = {
  selector: "#navbar-main",
  name: "nav_bar",
  children: [
    {
      selector: "#nav-search-bar-form",
      children: [
        {
          selector: "input#twotabsearchtextbox",
          name: "search_input",
        },
        {
          selector: "#nav-search-submit-button",
          clickable: true,
          name: "search_button",
        },
      ],
    },
    {
      selector: "#nav-link-accountList",
      text_selector: "#nav-link-accountList span.nav-line-2",
      add_text: true,
      clickable: true,
      name: "account_and_list_button",
    },
    {
      selector: "#nav-orders",
      add_text: true,
      clickable: true,
      name: "order_button",
    },
    {
      selector: "#nav-cart",
      text_selector: "#nav-cart .nav-line-2",
      add_text: true,
      clickable: true,
      name: "cart_button",
    },
  ],
};

const refinement_option = [
  {
    selector: "span.a-size-base.a-color-base.puis-bold-weight-text",
    add_text: true,
    class: "refinement-title",
  },
  {
    selector:
      "ul:nth-of-type(1) > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item)",
    add_text: true,
    name: "from_text",
    clickable: true,
    click_selector: "a",
    direct_child: true,
    text_js: function (element) {
      try {
        let text = "";
        if (!element) {
          return text;
        }
        if (element.innerText && element.innerText.trim()) {
          text += element.innerText.trim();
          const aChild = element.querySelector(
            "a.a-link-normal.s-navigation-item",
          );
          if (aChild && aChild.hasAttribute("title")) {
            text += " ";
            text += aChild.getAttribute("title");
          }
        } else {
          const aChild = element.querySelector(
            "a.a-link-normal.s-navigation-item",
          );
          if (aChild && aChild.hasAttribute("title")) {
            text += aChild.getAttribute("title");
          }
        }
        return text;
      } catch (e) {
        console.log(e);
        return "";
      }
    },
    children: [
      {
        selector: "input[type='checkbox']",
      },
    ],
  },
  {
    selector:
      "ul:nth-of-type(1) > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
    name: "more_options",
    children: [
      {
        selector: "a[data-csa-c-func-deps='aui-da-a-expander-toggle']",
        name: "toggle_expansion",
        add_text: true,
      },
      {
        selector: "li",
        add_text: true,
        name: "from_text",
        clickable: true,
        click_selector: "a",
        text_js: function (element) {
          try {
            let text = "";
            if (!element) {
              return text;
            }
            if (element.innerText && element.innerText.trim()) {
              text += element.innerText.trim();
              const aChild = element.querySelector(
                "a.a-link-normal.s-navigation-item",
              );
              if (aChild && aChild.hasAttribute("title")) {
                text += " ";
                text += aChild.getAttribute("title");
              }
            } else {
              const aChild = element.querySelector(
                "a.a-link-normal.s-navigation-item",
              );
              if (aChild && aChild.hasAttribute("title")) {
                text += aChild.getAttribute("title");
              }
            }
            return text;
          } catch (e) {
            console.log(e);
            return "";
          }
        },
        children: [
          {
            selector: "input[type='checkbox']",
          },
        ],
      },
    ],
  },
];

const product_facts = {
  selector: "#productFactsDesktopExpander",
  add_text: true,
  class: "product-facts",
};

const product_delivery = {
  selector: "div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE",
  add_text: true,
  class: "product-delivery",
};

const quantity_selector = {
  selector: "#selectQuantity",
  name: "quantity_selector",
  children: [
    {
      selector: "label",
      add_text: true,
    },
    {
      selector: "select",
      clickable: true,
      name: "drop_down_list",
    },
  ],
};

const delivery_frequency_selector = {
  selector: "#replenishmentFrequency_feature_div",
  name: "delivery_frequency_selector",
  text_selector: "div.a-section.a-spacing-micro > span",
  add_text: true,
  children: [
    {
      selector: "#rcxOrdFreqOnmlWrapper select",
      clickable: true,
      name: "drop_down_list",
    },
  ],
};

const set_up_now_button = {
  selector: "#rcx-subscribe-submit-button-announce",
  add_text: true,
  clickable: true,
  name: "set_up_now",
  class: "product-set-up-now",
};

const add_to_cart_button = {
  selector:
    "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb']",
  add_text: true,
  clickable: true,
  name: "add_to_cart",
  class: "product-add-to-cart",
};

const buy_now_button = {
  selector: "input[name='submit.buy-now']",
  add_text: true,
  clickable: true,
  name: "buy_now",
  class: "product-buy-now",
};

const buy_box_with_accordion = {
  selector: "#buyBoxAccordion > div.a-box.celwidget",
  name: "from_text",
  text_selector: "div.accordion-caption > span",
  children: [
    {
      selector:
        "div[data-csa-c-content-id='offer_display_desktop_accordion_header']",
      name: "accordion_selector",
      add_text: true,
      clickable: true,
      text_selector: "h5 span.a-text-bold",
    },
    {
      selector: "div.a-accordion-inner.accordion-row-content",
      name: "purchase_form",
      children: [
        product_facts,
        product_delivery,
        quantity_selector,
        delivery_frequency_selector,
        set_up_now_button,
        add_to_cart_button,
        buy_now_button
      ],
    },
  ],
};

const buy_box_without_accordion_delivery = {
  selector: "#gsod_singleOfferDisplay_Desktop",
  children: [
    {
      selector: "#addToCart",
      name: "purchase_form",
      children: [
        product_facts,
        product_delivery,
        quantity_selector,
        add_to_cart_button,
        buy_now_button
      ],
    },
  ],
};

const buy_box_without_accordion_pick_up = {
  selector: "#gsod_singleOfferDisplay_group_2_Desktop",
  children: [
    {
      selector: "#pickUpOfferDisplay",
      name: "purchase_form",
      children: [
        product_facts,
        product_delivery,
        quantity_selector,
        add_to_cart_button,
        buy_now_button
      ],
    },
  ],
};

const cart = [
  nav,
  {
    selector: "div[data-name='Active Items']",
    name: "active_item_list",
    children: [
      {
        selector: "div.sc-list-item-content",
        text_selector:
          "div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full",
        name: "from_text",
        children: [
          {
            selector: "div.sc-item-check-checkbox-selector input",
            clickable: true,
            name: "checkbox",
          },
          {
            selector:
              "div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title",
            clickable: true,
            text_selector: "span.a-truncate-full",
            add_text: true,
            name: "product_detail",
          },
          {
            selector: "div.sc-item-content-group span.sc-quantity-stepper",
            children: [
              {
                selector: "button[aria-label='Decrease quantity by one']",
                add_text: true,
                text_js: function (element) {
                  if (element.hasAttribute("aria-label")) {
                    return element.getAttribute("aria-label");
                  }
                  return "";
                },

                clickable: true,
                name: "decrease_quantity_by_one",
              },
              {
                selector: "div[role='spinbutton']",
                add_text: true,
                text_format: "Current Quantity: {}",
              },
              {
                selector: "button[aria-label='Increase quantity by one']",
                add_text: true,
                text_js: function (element) {
                  if (element.hasAttribute("aria-label")) {
                    return element.getAttribute("aria-label");
                  }
                  return "";
                },
                clickable: true,
                name: "increase_quantity_by_one",
              },
            ],
          },
          {
            selector: "div.sc-item-content-group input[data-action='delete']",
            add_text: true,
            clickable: true,
            name: "delete",
          },
          {
            selector:
              "div.sc-item-content-group input[data-action='save-for-later']",
            add_text: true,
            clickable: true,
            name: "save_for_later",
          },
        ],
      },
    ],
  },
  {
    selector: "#sc-buy-box-ptc-button input",
    add_text: true,
    clickable: true,
    name: "check_out",
  },
];

export const recipes = [
  {
    match: "/",
    match_method: "url",
    selector: "html",
    children: [
      {
        selector: "head",
        children: [
          {
            selector: "title",
            add_text: true,
          },
        ],
      },
      {
        selector: "body",
        children: [
          nav,
        ],
      },
    ],
  },
  {
    match: "/s",
    match_method: "url",
    selector: "html",
    generate_metadata: (em) => {
        const search_term = em.querySelector("#navbar-main input#twotabsearchtextbox")?.value;
        return {search_term};
    },
    children: [
      {
        selector: "head",
        children: [
          {
            selector: "title",
            add_text: true,
          },
        ],
      },
      {
        selector: "body",
        children: [
          nav,
          {
            selector: "#s-refinements",
            name: "refinements",
            children: [
              {
                selector: "div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)",
                name: "from_text",
                text_selector: "span.a-size-base.a-color-base.puis-bold-weight-text",
                children: refinement_option,
                generate_metadata: (em) => {
                  const title = em.querySelector('span.a-size-base.a-color-base.puis-bold-weight-text');
                  const refinements = em.querySelectorAll("ul:nth-of-type(1) > span.a-declarative > span > li:has(a.a-link-normal.s-navigation-item), ul:nth-of-type(1) > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander'] li");
                  const options = [];
                  for (const element of refinements) {
                    let text = "";
                    if (!element) {
                        return text;
                    }
                    if (element.innerText && element.innerText.trim()) {
                        text += element.innerText.trim();
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                        if (aChild && aChild.hasAttribute('title')) {
                            text += " ";
                            text += aChild.getAttribute('title');
                        }
                    } else {
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item');
                        if (aChild && aChild.hasAttribute('title')) {
                            text += aChild.getAttribute('title');
                        }
                    }
                    const checked = element.querySelector("input[type='checkbox']").getAttribute('checked');
                    options.push({ title, checked });
                  }
                  return {title, options};
                },
              },
              {
                selector: "#departments",
                name: "departments",
                children: [
                    {
                        selector: "li a",
                        add_text: true,
                        name: "from_text",
                        clickable: true,
                    }
                ],
              },
              {
                  selector: "#reviewsRefinements",
                  name: "reviews_refinements",
                  children: [
                      {
                          selector: "li a",
                          add_text: true,
                          name: "from_text",
                          clickable: true,
                      }
                  ],
              },
            ],
          },
          {
            selector: "div.s-main-slot.s-result-list.s-search-results",
            name: "search_results",
            children: [
              {
                insert_split_marker: true,
                insert_split_marker_every: 4,
                selector: 'div[data-component-type="s-search-result"]',
                text_selector:
                  "span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span",
                name: "from_text",
                class: "search-result",
                generate_metadata: (em) => {
                  const title = em.querySelector('span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span')?.innerHTML;
                  const price = em.querySelector("div[data-cy='price-recipe'] a.a-link-normal > span.a-price > span.a-offscreen");
                  const asin = em.getAttribute('data-asin');
                  return {title, price, asin};
                },
                children: [
                  {
                    selector:
                      "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
                    add_text: true,
                    class: "product-name",
                    clickable: true,
                    name: "view_product",
                  },
                  {
                      selector: "span[data-component-type='s-product-image'] a.a-link-normal",
                      name: "product_image",
                      clickable: true,
                      add_text: true,
                      text_format: "Product Image",
                  },
                  {
                    selector: "div[data-cy='reviews-block']",
                    class: "product-review",
                    children: [
                      {
                        selector: "span.a-icon-alt",
                        add_text: true,
                        class: "product-rating",
                      },
                      {
                        selector: "span.a-size-base.s-underline-text",
                        add_text: true,
                        text_format: "{} reviews",
                        class: "product-rating-count",
                      },
                    ],
                  },
                  {
                    selector: "div[data-cy='price-recipe']",
                    class: "product-price",
                    children: [
                      {
                        selector:
                          "a.a-link-normal > span.a-price > span.a-offscreen",
                        add_text: true,
                      },
                    ],
                  },
                  {
                    selector: "div[data-cy='delivery-recipe']",
                    add_text: true,
                    class: "product-delivery",
                  },
                  {
                    selector: "div[data-cy='add-to-cart'] button",
                    add_text: true,
                    clickable: true,
                    name: "add_to_cart",
                  },
                  {
                    selector:
                      "div[data-csa-c-content-id='s-search-see-details-button'] a",
                    add_text: true,
                    clickable: true,
                    name: "see_options",
                  },
                ],
              },
            ],
          },
          {
            selector: "span.s-pagination-strip",
            name: "pagination",
            children: [
              {
                selector: ".s-pagination-item",
                add_text: true,
                name: "from_text",
                clickable: true,
              },
            ],
          },
        ],
      },
      {
        selector: "div.a-popover-wrapper",
        name: "pop_up",
        children: [
          {
              selector: "div.puis-size-variation-title",
              add_text: true,
          },
          {
              selector: "div.puis-size-variation-product-spec",
              add_text: true,
          },
          {
              selector: "div.puis-size-variation-product-options",
              add_text: true,
              children: [
                  {
                      selector: "select",
                      clickable: true,
                      name: "pop_up_selector",
                  }
              ],
          },
          {
              selector: "div.puis-size-variation-price",
              add_text: true,
          },
          {
              selector: "div.puis-size-variation-delivery",
              add_text: true,
          },
          {
              selector: "div.puis-size-variation-action",
              children: [
                  {
                      selector: "span[data-action='a-popover-close'] input",
                      clickable: true,
                      name: "cancel",
                  },
                  {
                      selector: "span[data-action='puis-atcb-add-action-softlines-variant'] button",
                      clickable: true,
                      name: "add_to_cart",
                      add_text: true,
                  }
              ]
          }
        ]
      }
    ],
  },
  {
    match: "#productTitle",
    match_text: "",
    selector: "html",
    terminate: function () { return !!arguments[0] },
    terminate_callback: function () { return arguments[0] },
    generate_metadata: (em) => {
      const title = em.querySelector("#title").innerText
      const price = em.querySelector("#apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[class='offersConsistencyEnabled'] > div:not([style='display:none;']):not([style=\"display: none;\"]) #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay, #apex_desktop > div[data-csa-c-slot-id='apex_dp_center_column'] > div[data-csa-c-content-id='apex_with_rio_cx'] #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen")?.innerText;
      const option_elements = em.querySelectorAll("#twister div.a-row:has(label.a-form-label):has(span.selection)") as NodeListOf<HTMLElement>;
      const options = Array.from(option_elements).map(a => ({label: (a.querySelector("label.a-form-label") as HTMLElement)?.innerText, value: (a.querySelector("span.selection") as HTMLElement)?.innerText}))
      const options_dict = {}
      for (const option of options) {
        options_dict[option["label"].replace(": ", "")] = option["value"]
      }
      const asin = em.querySelector("input#ASIN").value
      return {title, price, options: options_dict, asin};
    },
    children: [
      {
        selector: "head",
        children: [
          {
            selector: "title",
            add_text: true,
          },
        ],
      },
      {
        selector: "body",
        children: [
          nav,
          {
            selector: "#centerCol",
            class: "product-card",
            children: [
              {
                selector: "#title",
                add_text: true,
                keep_attr: ["id"],
              },
              {
                selector: "#averageCustomerReviews",
                class: "review",
                children: [
                  {
                    selector: "span.a-icon-alt",
                    add_text: true,
                  },
                  {
                    selector: "#acrCustomerReviewText",
                    add_text: true,
                  },
                ],
              },
              {
                selector:
                  '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[class="offersConsistencyEnabled"] > div:not([style="display:none;"]):not([style="display: none;"]) #corePriceDisplay_desktop_feature_div div.a-section.a-spacing-none.aok-align-center.aok-relative > span.aok-offscreen, #apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"] > div[data-csa-c-content-id="apex_with_rio_cx"] #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                add_text: true,
                text_format: "Price: {}",
                class: "product-price",
              },
              {
                selector: "#twister",
                class: "product-options",
                name: "product_options",
                children: [
                  {
                    selector: "div.a-section",
                    text_selector:
                      "div.a-row:has(label.a-form-label) > label.a-form-label",
                    name: "from_text",
                    direct_child: true,
                    children: [
                      {
                        selector: "div.a-row:has(label.a-form-label)",
                        children: [
                          {
                            selector: "label.a-form-label",
                            add_text: true,
                          },
                          {
                            selector: "span.selection",
                            add_text: true,
                          },
                        ],
                      },
                      {
                        selector: "select",
                        add_text: true,
                        clickable: true,
                        name: "drop_down_list",
                      },
                      {
                        selector: "ul",
                        name: "button_list",
                        children: [
                          {
                            selector: "li button",
                            add_text: true,
                            clickable: true,
                            name: "from_text",
                            text_js: function (element) {
                              let text = "";
                              if (element.innerText.trim()) {
                                text += element.innerText.trim();
                                const imgChild = element.querySelector("img");
                                if (imgChild && imgChild.alt) {
                                  text += " ";
                                  text += imgChild.alt;
                                }
                              } else {
                                const imgChild = element.querySelector("img");
                                if (imgChild && imgChild.alt) {
                                  text += imgChild.alt;
                                }
                              }
                              return text;
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            selector: "#buybox:has(div.a-tab-container)",
            name: "buybox",
            children: [
              {
                selector: "#tab_heading_desktop_buybox_group_1 a",
                name: "deliver_tab",
                clickable: true,
                add_text: true,
              },
              {
                selector: "#tab_heading_desktop_buybox_group_2 a",
                name: "pick_up_tab",
                clickable: true,
                add_text: true,
              },
              {
                selector: "#tab_desktop_buybox_group_1",
                name: "delivery",
                add_text: true,
                text_format: "Delivery",
                children: [
                  buy_box_with_accordion,
                  buy_box_without_accordion_delivery
                ],
              },
              {
                selector: "#tab_desktop_buybox_group_2",
                name: "pick_up",
                add_text: true,
                text_format: "Pick Up",
                children: [
                  buy_box_without_accordion_pick_up
                ],
              },
            ],
          },
          {
            selector: "#buybox:not(:has(div.a-tab-container))",
            name: "buybox",
            children: [
              buy_box_with_accordion,
              buy_box_without_accordion_delivery
            ],
          },
          {
            selector: "#attach-warranty-pane #attach-warranty-display",
            name: "warranty-box",
            children: [
              {
                selector: "div.attach-warranty-box",
                text_selector: "#attach-warranty-card-display-title",
                name: "from_text",
                children: [
                  {
                    selector: "input[aria-label='Select warranty option']",
                    name: "select",
                    clickable: true,
                  },
                  {
                    selector: "#attach-warranty-card-display-title",
                    add_text: true,
                  },
                  {
                    selector: "#attach-warranty-card-price",
                    add_text: true,
                  },
                ],
              },
              {
                selector: "div.a-section.attach-warranty-button-row",
                children: [
                  {
                    selector:
                      "input[aria-labelledby='attachSiAddCoverage-announce']",
                    name: "add_protection",
                    clickable: true,
                    add_text: true,
                    text_format: "Add Protection",
                  },
                  {
                    selector:
                      "input[aria-labelledby='attachSiNoCoverage-announce']",
                    name: "no_protection",
                    clickable: true,
                    add_text: true,
                    text_format: "No Thanks",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    match: "/cart/smart-wagon",
    match_method: "url",
    selector: "html",
    children: [
      {
        selector: "head",
        children: [
          {
            selector: "title",
            add_text: true,
          },
        ],
      },
      {
        selector: "body",
        children: [
          nav,
          {
            selector: "#sw-atc-buy-box",
            children: [
              {
                selector: "#sw-subtotal",
                children: [
                  {
                    selector: "#sw-subtotal-item-count",
                    add_text: true,
                  },
                  {
                    selector: "span[aria-hidden='true']",
                    add_text: true,
                  },
                ],
              },
              {
                selector: "#sc-buy-box-ptc-button span.a-button-inner input",
                add_text: true,
                text_selector: "div.sc-without-multicart",
                clickable: true,
                name: "check_out",
              },
              {
                selector: "#sw-gtc a",
                add_text: true,
                clickable: true,
                name: "go_to_cart",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    match: "/cart",
    match_method: "url",
    selector: "html",
    children: [
      {
        selector: "head",
        children: [
          {
            selector: "title",
            add_text: true,
          },
        ],
      },
      {
        selector: "body",
        children: cart,
      },
    ],
  },
  {
    match: "/gp/cart/view.html",
    match_method: "url",
    selector: "html",
    children: [
      {
        selector: "head",
        children: [
          {
            selector: "title",
            add_text: true,
          },
        ],
      },
      {
        selector: "body",
        children: cart,
      },
    ],
  },
  {
    match: "/ap/signin",
    match_method: "url",
    terminate: function () { return !!arguments[0] },
    terminate_callback: function () { return arguments[0] },
    selector: "html",
  },
  {
    match: "/gp/buy/spc/handlers/display.html",
    match_method: "url",
    terminate: function () { return !!arguments[0] },
    terminate_callback: function () { return arguments[0] },
    selector: "html",
  },
];
