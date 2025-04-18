export const hmenu = {
  selector: '#hmenu-container',
  use_root: true,
  name: 'hamburger_menu',
  children: [
    {
      selector: '#hmenu-close-icon',
      clickable: true,
      text_format: 'Close',
      add_text: true,
      name: 'from_text'
    },
    {
      selector: '#hmenu-customer-profile',
      clickable: true,
      add_text: true,
      name: 'from_text'
    },
    {
      selector: 'ul.hmenu.hmenu-visible',
      children: [
        {
          selector: 'li:has(a.hmenu-item)',
          add_text: true,
          clickable: true,
          name: 'from_text',
          text_js: (em) => {
            const aEm = em.querySelector('a.hmenu-item')
            return aEm?.getAttribute('aria-label') || aEm?.innerText || ''
          }
        }
      ]
    }
  ]
}

export const nav = {
  selector: '#navbar-main, #navbar',
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
          selector: 'select.nav-search-dropdown',
          name: 'search_drop_down_list',
          clickable: true
        },
        {
          selector: 'input#twotabsearchtextbox',
          name: 'search_input',
          clickable: true,
          generate_metadata: (em) => {
            const term = em?.value
            return { name: 'search_term', data: { term } }
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
          selector: 'div[aria-owns^="sac-suggestion-row"]',
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
    },
    hmenu
  ]
}

export const ratings_summary = [
  {
    selector: 'a.a-button-close, button.a-button-close',
    clickable: true,
    add_text: true,
    text_format: 'Close',
    name: 'from_text'
  },
  {
    selector: '#histogramTable',
    name: 'ratings_histogram',
    children: [
      {
        selector: 'li:has(a)',
        name: 'from_text',
        clickable: true,
        add_text: true
      }
    ]
  },
  {
    selector: '#acrPopoverLink',
    clickable: true,
    add_text: true,
    name: 'from_text'
  }
]

export const cart_side_bar = {
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
            return em.querySelector('img')?.alt || ''
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
      selector: 'div.ewc-compact-actions span.a-button',
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
            const titleEm = em.querySelector(
              'div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)'
            )
            return titleEm?.alt || ''
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
              selector:
                'div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"]',
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
                      return element.getAttribute('aria-label')
                    }
                    return ''
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
                      return element.getAttribute('aria-label')
                    }
                    return ''
                  },
                  clickable: true,
                  name: 'increase_quantity_by_one'
                }
              ]
            }
          ],
          generate_metadata: (em) => {
            const asin = em.getAttribute('data-asin')
            const priceEm = em.querySelector('span.ewc-unit-price')
            const price = priceEm?.innerText?.replace(/[\n]/g, '').trim()
            const titleEm = em.querySelector(
              'div.ewc-item-image a.sc-product-link img:not(.ewc-sfl-image-small)'
            )
            const title = titleEm?.alt
            const urlEm = titleEm?.parentElement
            const url = urlEm?.getAttribute('href')
            const quantityEm = em.querySelector(
              'div[data-action="a-dropdown-button"], span[data-action="a-dropdown-button"], span.sc-quantity-stepper div[role="spinbutton"]'
            )
            const quantity = quantityEm?.innerText
            return {
              name: 'cart_items',
              data: { title, asin, price, url, quantity }
            }
          }
        }
      ]
    }
  ]
}

export const refinement_option = [
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
        let text = ''
        if (!element) {
          return text
        }
        const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
        if (element.innerText && element.innerText.trim()) {
          text += element.innerText.trim()
          if (aChild && aChild.hasAttribute('title')) {
            text += ' '
            text += aChild.getAttribute('title')
          }
        } else {
          const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
          if (aChild && aChild.hasAttribute('title')) {
            text += aChild.getAttribute('title')
          }
        }
        if (aChild && aChild.getAttribute('aria-current') === 'true') {
          // text = 'Clear Option ' + text
        }
        return text
      } catch (e) {
        console.log(e)
        return ''
      }
    },
    generate_metadata: (element) => {
      let text = ''
      const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
      if (element.innerText && element.innerText.trim()) {
        text += element.innerText.trim()
        if (aChild && aChild.hasAttribute('title')) {
          text += '_'
          text += aChild.getAttribute('title')
        }
      } else {
        const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
        if (aChild && aChild.hasAttribute('title')) {
          text += aChild.getAttribute('title')
        }
      }
      const nameEm = element.closest('ul')?.parentElement?.firstElementChild
      const name = nameEm?.innerText
        ?.trim()
        .replace(/[ ]/g, '_')
        .toLowerCase()
        .trim()
        .replace(/^_+|_+$/g, '')
        .replace(/[_\d]+$/, '')

      let url = ''

      if (aChild && aChild.hasAttribute('href')) {
        url = aChild.getAttribute('href')
      }

      if (aChild && aChild.getAttribute('aria-current') === 'true') {
        return {
          name: 'refinements.' + name,
          data: { title: text?.trim() || '', selected: true, url }
        }
      }
      return {
        name: 'refinements.' + name,
        data: { title: text?.trim() || '', selected: false, url }
      }
    },
    children: [
      {
        selector: "input[type='checkbox']"
      }
    ]
  },
  {
    selector:
      "ul > span.a-declarative > li > span > div[data-a-expander-name='filter-content-expander']",
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
            let text = ''
            if (!element) {
              return text
            }
            const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
            if (element.innerText && element.innerText.trim()) {
              text += element.innerText.trim()
              if (aChild && aChild.hasAttribute('title')) {
                text += ' '
                text += aChild.getAttribute('title')
              }
            } else {
              const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
              if (aChild && aChild.hasAttribute('title')) {
                text += aChild.getAttribute('title')
              }
            }
            if (aChild && aChild.getAttribute('aria-current') === 'true') {
              // text = 'Clear Option ' + text
            }
            return text
          } catch (e) {
            console.log(e)
            return ''
          }
        },
        generate_metadata: (element) => {
          let text = ''
          const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
          if (element.innerText && element.innerText.trim()) {
            text += element.innerText.trim()
            if (aChild && aChild.hasAttribute('title')) {
              text += '_'
              text += aChild.getAttribute('title')
            }
          } else {
            const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
            if (aChild && aChild.hasAttribute('title')) {
              text += aChild.getAttribute('title')
            }
          }
          const nameEm = element.closest('ul')?.parentElement?.closest('ul')
            ?.parentElement?.firstElementChild
          const name = nameEm?.innerText
            ?.trim()
            .replace(/[ ]/g, '_')
            .toLowerCase()
            .trim()
            .replace(/^_+|_+$/g, '')
            .replace(/[_\d]+$/, '')

          let url = ''

          if (aChild && aChild.hasAttribute('href')) {
            url = aChild.getAttribute('href')
          }

          if (aChild && aChild.getAttribute('aria-current') === 'true') {
            return {
              name: 'refinements.' + name,
              data: { title: text?.trim() || '', selected: true, url }
            }
          }
          return {
            name: 'refinements.' + name,
            data: { title: text?.trim() || '', selected: false, url }
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
]

export const product_facts = {
  selector: '#productFactsDesktopExpander',
  add_text: true,
  class: 'product-facts'
}

export const product_delivery = {
  selector:
    'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE, #deliveryBlock_feature_div',
  add_text: true,
  class: 'product-delivery',
  name: 'product_delivery',
  children: [
    {
      selector: 'a',
      clickable: true,
      // add_text: true,
      name: 'from_text',
      text_js: (em) => {
        return em.parentElement?.innerText || ''
      }
    }
  ]
}

export const global_purchase_message = {
  selector: '#globalStoreBadgePopoverInsideBuybox_feature_div',
  name: 'from_text',
  add_text: true,
  children: [
    {
      selector: 'a.a-link-normal',
      clickable: true,
      name: 'from_text',
      add_text: true
    },
    {
      selector: 'i.a-icon-popover',
      clickable: true,
      name: 'open_learn_more_popover'
    }
  ]
}

export const quantity_selector = {
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
        return { name: 'product_quantity', data: { quantity: em.innerText } }
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
}

export const delivery_frequency_selector = {
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
}

export const set_up_now_button = {
  selector: '#rcx-subscribe-submit-button-announce',
  add_text: true,
  clickable: true,
  name: 'set_up_now',
  class: 'product-set-up-now'
}

export const add_to_cart_button = {
  selector:
    "input[name='submit.add-to-cart'], input[name='submit.add-to-cart-ubb'], #freshAddToCartButton input, #dealsx_atc_btn",
  add_text: true,
  clickable: true,
  name: 'add_to_cart',
  class: 'product-add-to-cart'
}

export const buy_now_button = {
  selector: "input[name='submit.buy-now']",
  add_text: true,
  clickable: true,
  name: 'buy_now',
  class: 'product-buy-now'
}

export const go_to_cart_button_for_flash_sales = {
  selector: '#dealsx_incart span.a-button',
  add_text: true,
  clickable: true,
  name: 'from_text'
}

export const buy_box_detail = {
  selector: 'div.a-expander-container.a-expander-partial-collapse-container',
  name: 'purchase_detail',
  children: [
    {
      selector: '.offer-display-features-container',
      add_text: true
    },
    {
      selector: 'div.a-expander-header a',
      add_text: true,
      clickable: true,
      name: 'from_text'
    }
  ]
}

export const buy_box_with_accordion = {
  selector: '#buyBoxAccordion > div.a-box.celwidget',
  name: 'from_text',
  text_selector: 'div.accordion-caption > span',
  children: [
    {
      selector:
        "div[data-csa-c-content-id='offer_display_desktop_accordion_header'], div[data-csa-c-content-id='offer_display_mobile_accordion_header']",
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
        global_purchase_message,
        quantity_selector,
        delivery_frequency_selector,
        set_up_now_button,
        add_to_cart_button,
        go_to_cart_button_for_flash_sales,
        buy_now_button,
        buy_box_detail
      ]
    }
  ]
}

export const buy_box_without_accordion_delivery = {
  selector: '#gsod_singleOfferDisplay_Desktop',
  children: [
    {
      selector: '#addToCart',
      name: 'purchase_form',
      children: [
        product_facts,
        product_delivery,
        global_purchase_message,
        quantity_selector,
        add_to_cart_button,
        buy_now_button,
        buy_box_detail
      ]
    }
  ]
}

export const buy_box_without_accordion_pick_up = {
  selector: '#gsod_singleOfferDisplay_group_2_Desktop',
  children: [
    {
      selector: '#pickUpOfferDisplay',
      name: 'purchase_form',
      children: [
        product_facts,
        product_delivery,
        global_purchase_message,
        quantity_selector,
        add_to_cart_button,
        buy_now_button,
        buy_box_detail
      ]
    }
  ]
}

export const carousel_prev_button = {
  selector: 'a.a-carousel-goto-prevpage',
  clickable: true,
  add_text: true,
  text_format: 'Prev Page',
  name: 'from_text'
}

export const carousel_next_button = {
  selector: 'a.a-carousel-goto-nextpage',
  clickable: true,
  add_text: true,
  text_format: 'Next Page',
  name: 'from_text'
}

export const bundle_card = {
  selector: '#bundles_feature_div',
  name: 'from_text',
  text_selector: '#bundles-card .a-cardui-header',
  children: [
    {
      selector: '#bundles-card .a-cardui-header',
      add_text: true
    },
    {
      selector: '#bundles-card .a-cardui-body',
      children: [
        {
          selector: 'div.a-carousel-viewport ol',
          name: 'items',
          children: [
            {
              selector: 'li',
              name: 'from_text',
              clickable: true,
              add_text: true,
              text_selector: 'div.outer-bundle-title span.a-truncate-full'
            }
          ]
        },
        carousel_prev_button,
        carousel_next_button
      ]
    },
    {
      selector: '#bundles-card span[data-action="open-bundles-drawer-side-sheet"]',
      add_text: true,
      clickable: true,
      name: 'from_text'
    },
    {
      selector: '#bundles-desktop-side-sheet-modal-wrapper',
      name: 'all_bundles',
      children: [
        {
          selector: 'a.bundles-bg-close-button',
          clickable: true,
          add_text: true,
          text_format: 'Close',
          name: 'from_text'
        },
        {
          selector: 'div.secondary-bundle-container',
          name: 'from_text',
          text_selector: 'a.bundle-expander-header',
          children: [
            {
              selector: 'a.bundle-expander-header',
              name: 'header',
              clickable: true,
              add_text: true
            },
            {
              selector: 'div.bundle-expander-content',
              children: [
                {
                  selector: 'a.bundle-details-title',
                  clickable: true,
                  add_text: true,
                  text_selector: 'span.a-truncate-full',
                  name: 'bundle_title'
                },
                {
                  selector: 'div.a-col-right > div.a-row > span.a-price span.a-offscreen',
                  add_text: true,
                  text_format: 'Bundle price: {}'
                },
                {
                  selector: 'a.bundle-components-expander-header',
                  clickable: true,
                  add_text: true,
                  name: 'from_text'
                },
                {
                  selector: 'div.bundle-components-expander-content',
                  name: 'bundle_content',
                  children: [
                    {
                      selector: 'div.bundle-component-card',
                      text_selector: 'a.item-title span.a-truncate-full',
                      name: 'from_text',
                      children: [
                        {
                          selector: 'a.item-title',
                          add_text: true,
                          text_selector: 'span.a-truncate-full',
                          clickable: true,
                          name: 'product_title'
                        },
                        {
                          selector: 'span.a-price span.a-offscreen',
                          add_text: true
                        }
                      ]
                    }
                  ]
                },
                {
                  selector: '.bundle-atc-block span.a-button',
                  clickable: true,
                  add_text: true,
                  name: 'add_to_cart'
                }
              ],
              generate_metadata: (em) => {
                const asin = em.getAttribute('id')?.split('-').at(-1)
                const priceEm = em.querySelector(
                  'a-col-right > div.a-row > span.a-price span.a-offscreen'
                )
                const price = priceEm?.innerText?.replace(/[\n]/g, '')
                const titleEm = em.querySelector('a.bundle-details-title span.a-truncate-full')
                const title = titleEm?.innerText || ''
                const urlEm = em.querySelector('a.bundle-details-title')
                const url = urlEm?.getAttribute('href')

                return {
                  name: 'bundle',
                  data: { asin, price, title, url }
                }
              }
            }
          ]
        }
      ]
    }
  ]
}

export const video_control = [
  {
    selector: 'video.vjs-tech',
    clickable: true,
    name: 'video'
  },
  {
    selector: 'svg.ive-custom-play-button, button.vjs-big-play-button',
    clickable: true,
    name: 'play'
  },
  {
    selector: 'button.vjs-play-control.vjs-paused',
    clickable: true,
    name: 'play'
  },
  {
    selector: 'div.vse-fb-trigger-container',
    clickable: true,
    name: 'report_video'
  },
  {
    selector: '#ive-vftphero-action-share',
    clickable: true,
    name: 'share'
  },
  {
    selector: 'button.vjs-play-control.vjs-playing',
    clickable: true,
    name: 'pause'
  },
  {
    selector: 'div.vjs-progress-control, div.vjs-progress-holder',
    clickable: true,
    name: 'progress_control'
  },
  {
    selector: 'div.vjs-subs-caps-button',
    clickable: true,
    name: 'captions'
  },
  {
    selector: 'button.vjs-mute-control[title="Mute"]',
    clickable: true,
    name: 'mute'
  },
  {
    selector: 'button.vjs-mute-control[title="Unmute"]',
    clickable: true,
    name: 'unmute'
  },
  {
    selector: 'div.vjs-volume-control',
    clickable: true,
    name: 'volume_control'
  },
  {
    selector: 'button.vjs-fullscreen-control',
    clickable: true,
    name: 'fullscreen'
  }
]

export const review_panel = {
  selector: '#customerReviews',
  name: 'reviews',
  children: [
    {
      selector: '.cr-widget-TitleRatingsHistogram',
      name: 'ratings',
      children: [
        {
          selector: '.AverageCustomerReviews',
          add_text: true
        },
        {
          selector: '#histogramTable li',
          add_text: true,
          clickable: true,
          name: 'from_text'
        }
      ]
    },
    {
      selector: '#product-summary',
      add_text: true
    },
    {
      selector: 'div[id^="aspect-button"]',
      text_selector: 'h4',
      name: 'from_text',
      children: [
        {
          selector: 'h4',
          add_text: true
        },
        {
          selector: 'a',
          add_text: true,
          clickable: true,
          name: 'from_text'
        }
      ]
    },
    {
      selector: '.cm_cr_grid_center_right_images_widget',
      name: 'from_text',
      text_selector: '#cr-media-carousel-heading',
      children: [
        {
          selector: 'span[data-csa-c-slot-id="cm_cr_dp_see_all_image_carousel_reviews"]',
          clickable: true,
          add_text: true,
          name: 'from_text'
        },
        {
          selector: 'ol.a-carousel',
          name: 'images',
          children: [
            {
              selector: 'li',
              clickable: true,
              name: 'from_nth_child'
            }
          ]
        },
        carousel_prev_button,
        carousel_next_button
      ]
    },
    {
      selector: '.a-popover-wrapper',
      use_root: true,
      name: 'popover',
      children: [
        {
          selector: 'button.a-button-close',
          add_text: true,
          clickable: true,
          text_format: 'Close',
          name: 'from_text'
        },
        {
          selector: 'button[class*="media-popover-see-all-container"]',
          add_text: true,
          clickable: true,
          name: 'from_text'
        },
        {
          selector: 'div[class*="gallery-container"]',
          name: 'review_images',
          children: [
            {
              selector: 'button',
              clickable: true,
              name: 'from_nth_child'
            }
          ]
        },
        {
          selector:
            'div[class*="single-review-media-popover-container"], div.cr-lightbox-popover-container',
          name: 'review_images',
          children: [
            {
              selector:
                'div[class*="media-popover-media-container"] button, div.cr-lightbox-image-viewer button',
              clickable: true,
              add_text: true,
              name: 'from_text',
              text_js: (em) => {
                return (
                  em.querySelector('img')?.getAttribute('aria-label') ||
                  em.querySelector('img')?.alt ||
                  em.getAttribute('aria-label') ||
                  em.innerText ||
                  ''
                )
              }
            },
            {
              selector: 'div[data-reviewbind="ReviewText"], div.cr-lightbox-review-body',
              add_text: true
            },
            {
              selector:
                'ul[class*="media-popover-thumbnail-image-container"], div.cr-lightbox-image-thumbnails',
              name: 'images',
              children: [
                {
                  selector: 'li, button',
                  clickable: true,
                  name: 'from_nth_child'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      selector: '.reviews-content ul',
      name: 'reviews',
      children: [
        {
          selector: 'li',
          name: 'from_nth_child',
          children: [
            {
              selector: '.review-text',
              add_text: true
            },
            {
              selector: 'div.review-text-read-more-expander',
              add_text: true,
              children: [
                {
                  selector: 'div.video-block',
                  name: 'video',
                  children: video_control
                }
              ]
            },
            {
              selector: '.review-image-tile-section',
              name: 'images',
              children: [
                {
                  selector: 'a',
                  name: 'from_nth_child',
                  clickable: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      selector: '#reviews-medley-footer',
      name: 'more_reviews',
      clickable: true,
      add_text: true
    },
    {
      selector: '.global-reviews-content ul',
      name: 'foreign_reviews',
      children: [
        {
          selector: 'li',
          name: 'from_nth_child',
          children: [
            {
              selector: '.cr-original-review-content',
              add_text: true
            }
          ]
        },
        {
          selector: 'a[data-hook="see-all-reviews-link-foot"]',
          clickable: true,
          add_text: true,
          name: 'from_text'
        }
      ]
    }
  ]
}

export const video_panel = {
  selector: '.vse-vwdp-video-block-wrapper',
  name: 'product_videos',
  children: [
    {
      selector: '#ive-hero-video-player',
      name: 'active_video',
      children: video_control
    },
    {
      selector: '#vse-placeholder-related-products-config',
      name: 'related_products',
      children: [
        {
          selector: 'ol',
          name: 'product_list',
          children: [
            {
              selector: 'li',
              name: 'from_text',
              add_text: true,
              clickable: true,
              text_selector: 'div.vse-product-title'
            }
          ]
        },
        carousel_prev_button,
        carousel_next_button
      ]
    },
    {
      selector: '#vse-placeholder-related-videos ol',
      name: 'related_videos',
      children: [
        {
          selector: 'li',
          name: 'from_text',
          add_text: true,
          clickable: true,
          text_selector: '.vse-video-title-text'
        }
      ]
    }
  ]
}

export const product_specifications = {
  selector: '#productDetails_feature_div',
  name: 'product_specifications',
  children: [
    {
      selector: 'span.voyager-expand-collapse-all-btn',
      clickable: true,
      add_text: true,
      name: 'from_text'
    },
    {
      selector: '.a-expander-container',
      text_selector: 'span[data-action="voyager-expander-heading-toggle"]',
      name: 'from_text',
      children: [
        {
          selector: 'span[data-action="voyager-expander-heading-toggle"]',
          clickable: true,
          add_text: true,
          name: 'toggle_section'
        },
        {
          selector: 'a.mvt-cm-cr-review-stars-mini-popover',
          clickable: true,
          add_text: true,
          name: 'product_ratings'
        },
        {
          selector: 'a:has(#acrCustomerReviewText)',
          clickable: true,
          add_text: true,
          name: 'product_rating_count'
        }
      ]
    }
  ]
}

export const carousel_card = {
  selector: 'li.a-carousel-card:not(.a-carousel-card-empty), #gridItemRoot, li > span.a-list-item',
  name: 'from_text',
  text_js: (em) => {
    const titleEm = em.querySelector(
      'a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title, div[id^="sp_rhf_cart"] span.a-truncate-full, div[id^="sp_rhf_search_personalized"] span.a-truncate-full'
    )
    const title = titleEm?.title || titleEm?.innerText || ''
    const imgEm = em.querySelector(
      'img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"] img.s-image'
    )
    const imgAlt = imgEm?.alt
    return title || imgAlt || ''
  },
  children: [
    {
      selector:
        'a:has(img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"]), img.s-image, a[target="_top"]:has(img):not(:has(div, span)), a.sw-product-image-link',
      name: 'product_image',
      add_text: true,
      text_format: 'Product Image',
      clickable: true
    },
    {
      selector:
        'a div[class*="sc-truncate-desktop"], a div:has(> span.title), a div[class*="sc-css-line-clamp"], a:has(span[class*="titleR3"]), div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title',
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
            return em.getAttribute('aria-label') || em.innerText || ''
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
      selector: 'div[class*="variationLink"] a, a.s-color-swatch-link',
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
        return em.title || em.getAttribute('aria-label') || ''
      }
    },
    {
      selector: 'span.a-size-base.s-underline-text, span.a-size-small.s-underline-text',
      add_text: true,
      text_format: '{} reviews',
      class: 'product-rating-count',
      name: 'product_rating_count',
      clickable: true
    },
    {
      selector:
        'a[aria-describedby*="sp_detail_thematic-deals"]:not(:has(span.a-price)), a[aria-describedby*="sp_detail_thematic-recent_history"]:not(:has(span.a-price))',
      add_text: true,
      name: 'from_text',
      clickable: true,
      text_js: (em) => {
        return em.querySelector('i')?.getAttribute('aria-label') || em.innerText || ''
      }
    },
    {
      selector: 'div[class*="sc-price"]',
      add_text: true,
      text_selector: 'span[class*="sc-price"]',
      name: 'product_price',
      clickable: true
    },
    {
      selector:
        'div.a-section.aok-relative:has(span.a-price span.a-offscreen), div.a-color-price:has(span.a-price span.a-offscreen), a[aria-describedby="price-link"]:has(span.a-price span.a-offscreen)',
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
    const asinJSONString = em
      .querySelector('div[data-adfeedbackdetails]')
      ?.getAttribute('data-adfeedbackdetails')
    let asinJSON
    if (asinJSONString !== undefined) {
      try {
        asinJSON = JSON.parse(asinJSONString)
      } catch (e) {
        console.log('data-adfeedbackdetails is not a valid JSON.')
        asinJSON = null
      }
    }
    const asinEm = em.querySelector(
      'div[id*="sc-turbo-container"], div[data-asin], input[data-asin], span[data-csa-c-item-id]'
    )
    const asin =
      asinEm?.getAttribute('data-asin') ||
      asinEm?.getAttribute('id')?.split('-').pop() ||
      asinEm?.getAttribute('data-csa-c-item-id').split('.').pop() ||
      asinJSON?.asinId ||
      ''
    const priceEm = em.querySelector('a span[class*="sc-price"], span.a-price span.a-offscreen')
    const price = priceEm?.innerText?.replace(/[\n]/g, '')
    const titleEm = em.querySelector(
      'a div[class*="sc-truncate-desktop"], a span.title, a div[class*="sc-css-line-clamp"], a span[class*="titleR3"], div[data-cy="title-recipe"], a[id*="title"], a.sw-product-title, div[id^="sp_rhf_search_personalized"] span.a-truncate-full'
    )
    const title = titleEm?.title || titleEm?.innerText || ''
    const imgEm = em.querySelector(
      'img[class*="product-image"], img.a-dynamic-image, img[class*="carousel-image"] img.s-image'
    )
    const imgAlt = imgEm?.alt
    const urlEm = em.querySelector(
      'a:has(div[class*="sc-truncate-desktop"]), a:has(span.title), a:has(span[class*="title"])'
    )
    const url = urlEm?.getAttribute('href')
    const quantityEm = em.querySelector(
      'div[name="ax-qs"] div[role="spinbutton"], div[id^="atcStepperSection"] span.atcStepperQuantity'
    )
    const quantity = quantityEm?.innerText || ''
    return {
      name: 'promotion_items',
      data: { title: title || imgAlt || '', asin, price, url, quantity }
    }
  }
}

export const cart = [
  nav,
  {
    selector: '#sc-collapsed-carts-container',
    name: 'carts',
    children: [
      {
        selector: 'div.sc-collapsed-cart-container',
        name: 'from_text',
        text_js: (em) => {
          const titleEm = em.querySelector('div.sc-cart-header')
          const title =
            titleEm?.querySelector('h2[aria-label]')?.getAttribute('aria-label') ||
            titleEm?.innerText ||
            'cart'
          return title
        },
        children: [
          {
            selector: 'div.sc-cart-header:has(a h2 img)',
            clickable: true,
            name: 'from_text',
            text_js: (em) => {
              return em.querySelector('a h2 img')?.alt || ''
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
    selector: 'div.sc-cart-header',
    name: 'cart_header',
    children: [
      {
        selector: '#sc-active-items-header',
        add_text: true
      },
      {
        selector: 'a.sc-selection-state-update',
        clickable: true,
        add_text: true,
        name: 'from_text'
      }
    ]
  },
  {
    selector: "div[data-name='Active Items']",
    name: 'active_item_list',
    children: [
      {
        selector: 'div.sc-list-item-content',
        text_selector:
          'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full',
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
                selector:
                  "button[aria-label='Decrease quantity by one'], button[data-action='a-stepper-decrement']",
                add_text: true,
                text_js: function (element) {
                  if (element.hasAttribute('aria-label')) {
                    return element.getAttribute('aria-label')
                  }
                  return ''
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
                    return element.getAttribute('aria-label')
                  }
                  return ''
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
          const asin = em.parentElement?.getAttribute('data-asin')
          const priceEm = em.querySelector(
            'div.sc-badge-price-to-pay span.sc-product-price span:not(.a-offscreen)'
          )
          const price = priceEm?.innerText?.replace(/[\n]/g, '')
          const titleEm = em.querySelector(
            'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full'
          )
          const title = titleEm?.innerText
          const urlEm = em.querySelector(
            'div.sc-item-content-group ul > li > span.a-list-item > a.sc-product-title'
          )
          const url = urlEm?.getAttribute('href')
          const deliveryEm = em.querySelector('li.sc-delivery-messaging')
          const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
          const quantityEm = em.querySelector(
            "div.sc-item-content-group span.sc-quantity-stepper div[role='spinbutton']"
          )
          const quantity = quantityEm?.innerText
          const selectedEm = em.querySelector('div.sc-item-check-checkbox-selector input')
          const selected = selectedEm?.getAttribute('checked') !== null
          const optionsEm = em.querySelectorAll('li.sc-product-variation > span')
          const options = []
          for (const optionEm of optionsEm) {
            const optionKeyEm = optionEm?.querySelector('span.a-text-bold')
            const optionValueEm = optionEm?.querySelector('span:not(.a-text-bold)')
            const optionKey = optionKeyEm?.innerText.replace(/[:\n]/g, '').trim()
            const optionValue = optionValueEm?.innerText.replace(/[:\n]/g, '').trim()
            const option = { [optionKey]: optionValue }
            options.push(option)
          }

          return {
            name: 'active_items',
            data: { title, asin, price, url, delivery, quantity, selected, options }
          }
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
    name: 'secondary_list',
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
                    selector: 'a.sc-grid-item-product-title, a.sc-product-title',
                    add_text: true,
                    text_format: 'Product Title',
                    name: 'from_text',
                    clickable: true
                  },
                  {
                    selector:
                      'div.sc-action-move-to-cart, span.sc-action-delete input, span.add-to-list-text input, span[data-action="compare"] input, span.sc-see-substitutes-available-desktop',
                    add_text: true,
                    name: 'from_text',
                    clickable: true,
                    text_js: (em) => {
                      return em.value || em.innerText || ''
                    }
                  }
                ],
                generate_metadata: (em) => {
                  const asin = em.getAttribute('data-asin')
                  const priceEm = em.querySelector(
                    'div.sc-badge-price-to-pay span.sc-product-price span.a-offscreen, div.sc-badge-price-to-pay span.sc-product-price:not(:has(span))'
                  )
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.querySelector(
                    'li.sc-item-product-title-cont span.a-truncate-full'
                  )
                  const title = titleEm?.innerText?.trim()
                  const urlEm = em.querySelector('a.sc-grid-item-product-title')
                  const url = urlEm?.getAttribute('href')
                  const optionsEm = em.querySelectorAll('li.sc-product-variation > span')
                  const options = []
                  for (const optionEm of optionsEm) {
                    const optionKeyEm = optionEm?.querySelector('span.a-text-bold')
                    const optionValueEm = optionEm?.querySelector('span:not(.a-text-bold)')
                    const optionKey = optionKeyEm?.innerText.replace(/[:\n]/g, '').trim()
                    const optionValue = optionValueEm?.innerText.replace(/[:\n]/g, '').trim()
                    const option = { [optionKey]: optionValue }
                    options.push(option)
                  }

                  return {
                    name: 'saved_items',
                    data: { title, asin, price, url, options }
                  }
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
              const asin = em.getAttribute('id')?.split('-').at(-1)
              const priceEm = em.querySelector('span.sc-price')
              const price = priceEm?.innerText?.replace(/[\n]/g, '')
              const titleEm = em.querySelector('a.sc-product-link')
              const title = titleEm?.innerText
              const urlEm = em.querySelector('a.sc-product-link')
              const url = urlEm?.getAttribute('href')

              return {
                name: 'buy_it_again',
                data: { title, asin, price, url }
              }
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
        selector: 'div.a-carousel-header-row',
        children: [
          {
            selector: '.a-carousel-heading, h3',
            add_text: true
          },
          {
            selector: 'a.a-link-normal',
            clickable: true,
            add_text: true,
            name: 'from_text'
          }
        ]
      },
      carousel_card,
      carousel_prev_button,
      carousel_next_button
    ]
  }
]

export const fresh_carousel_card = {
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
    const asinEm = em.querySelector('div[data-csa-c-item-id^="amzn1.asin"]')
    const asin = asinEm?.getAttribute('data-csa-c-item-id')?.split(':')[0].split('.').pop()
    const priceEm = em.querySelector('div[class*="priceToPay"] span.a-offscreen')
    const price = priceEm?.innerText?.replace(/[\n]/g, '')
    const titleEm = em.querySelector('span.a-truncate-full')
    const title = titleEm?.innerText
    const urlEm = em.querySelector('a:has(span.a-truncate-full)')
    const url = urlEm?.getAttribute('href')
    const quantityEm = em.querySelector(
      'div[id^="qs-widget-button-container-atfc"] button[id^="qs-widget-button-atfc"]'
    )
    const quantity = quantityEm?.innerText
    return {
      name: 'promotion_items',
      data: { title, asin, price, url, quantity }
    }
  }
}

export const fresh_substitution_card = {
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
    const asinEm = em.querySelector('div[data-cart-item-asin]')
    const asin = asinEm?.getAttribute('data-cart-item-asin')
    const titleEm = em.querySelector('div.a-spacing-top-base span.a-size-base')
    const title = titleEm?.innerText
    const priceEm = em.querySelector('div.a-spacing-top-mini span.a-color-price')
    const price = priceEm?.innerText
    return { name: 'active_items', data: { asin, title, price } }
  }
}

export const fresh_quantity_selector = {
  selector: 'div.qs-widget-container',
  children: [
    {
      selector: "input[aria-label^='Remove']",
      add_text: true,
      text_js: function (element) {
        if (element.hasAttribute('aria-label')) {
          return element.getAttribute('aria-label')
        }
        return ''
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
      selector:
        'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
      add_text: true,
      clickable: true,
      use_root: true,
      name: 'from_text'
    },
    {
      selector:
        'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
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
          return element.getAttribute('aria-label')
        }
        return ''
      },
      clickable: true,
      name: 'increase_quantity_by_one'
    }
  ]
}

export const fresh_cart = [
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
            children: [fresh_quantity_selector]
          },
          {
            selector: "input[data-action='delete']",
            add_text: true,
            clickable: true,
            name: 'delete'
          }
        ],
        generate_metadata: (em) => {
          const asin = em.parentElement?.getAttribute('data-asin')
          const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price')
          const price = priceEm?.innerText?.replace(/[\n]/g, '')
          const titleEm = em.querySelector(
            'ul > li > span.a-list-item > a.sc-product-title span.a-truncate-full'
          )
          const title = titleEm?.innerText
          const urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title')
          const url = urlEm?.getAttribute('href')
          const quantityEm = em.querySelector(
            'div.sc-action-links div.qs-widget-dropdown-flex-wrapper button'
          )
          const quantity = quantityEm?.innerText
          return {
            name: 'active_items',
            data: { title, asin, price, url, quantity }
          }
        }
      },
      {
        selector: 'div.sc-list-item-content-removed',
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
            selector: "input[data-action='delete'], input[value='Delete']",
            add_text: true,
            clickable: true,
            name: 'delete'
          },
          {
            selector: "input[value='Replace item']",
            add_text: true,
            clickable: true,
            name: 'delete'
          }
        ]
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
      fresh_carousel_card,
      carousel_prev_button,
      carousel_next_button
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
]

export const luxury_carousel_card = {
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
    const asinEm = em.querySelector('a')
    const asin = asinEm?.getAttribute('href')?.split('/').at(-2)
    const priceEm = em.querySelector('span.a-price span.a-offscreen')
    const price = priceEm?.innerText?.replace(/[\n]/g, '')
    const titleEm = em.querySelector('a #bondWalledCarouselElementDescription')
    const title = titleEm?.innerText
    const urlEm = em.querySelector('a')
    const url = urlEm?.getAttribute('href')
    return {
      name: 'promotion_items',
      data: { title, asin, price, url }
    }
  }
}

export const luxury_cart = [
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
                        return element.getAttribute('aria-label')
                      }
                      return ''
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
                        return element.getAttribute('aria-label')
                      }
                      return ''
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
          const asin = em.parentElement?.getAttribute('data-asin')
          const priceEm = em.querySelector('div.sc-badge-price-to-pay span.sc-price')
          const price = priceEm?.innerText?.replace(/[\n]/g, '')
          const titleEm = em.querySelector(
            'ul > li > span.a-list-item > a.sc-product-title span.sc-product-title'
          )
          const title = titleEm?.innerText
          const urlEm = em.querySelector('ul > li > span.a-list-item > a.sc-product-title')
          const url = urlEm?.getAttribute('href')
          const quantityEm = em.querySelector('span.sc-quantity-stepper div[role="spinbutton"]')
          const quantity = quantityEm?.innerText
          return {
            name: 'active_items',
            data: { title, asin, price, url, quantity }
          }
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
]

export const buy_again = [
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
              const title = em.innerText
              const nameEm = em
                .closest('div.filter-container')
                ?.querySelector('#filter-container-header')
              const name = nameEm?.innerText?.replace(/[ ]/g, '_').toLowerCase().trim()
              const input = em.querySelector('input')
              if (input && input.checked) {
                return {
                  name: 'filters.' + name,
                  data: { title: title?.trim() || '', selected: true }
                }
              }
              return {
                name: 'filters.' + name,
                data: { title: title?.trim() || '', selected: false }
              }
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
                  },
                  {
                    selector: 'span[id^="seeDetailsButton"] a',
                    name: 'see_product_details',
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
                        return element.getAttribute('aria-label')
                      }
                      return ''
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
                        return element.getAttribute('aria-label')
                      }
                      return ''
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
          const asinEm = em.querySelector("div[id^='closedCard'] div[id^='info']")
          const asin = asinEm?.getAttribute('data-asin')
          const priceEm = em.querySelector(
            'div[id^="closedCard"] div[id^="info"] span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)'
          )
          const price = priceEm?.innerText?.replace(/[\n]/g, '')
          const titleEm = em.querySelector(
            "div[id^='closedCard'] a[id^='title'] span.a-truncate-full"
          )
          const title = titleEm?.innerText
          const deliveryEm = em.querySelector(
            'div[id^="closedCard"] div[id^="info"] #udmDeliveryMessageComponent'
          )
          const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
          return { name: 'active_items_closed', data: { title, asin, price, delivery } }
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
                selector: 'a > div:has(> img)',
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
                selector:
                  "div[data-buyingoptiontype='NEW'], div[class*='asinDetailInfoColumns']:has(input[name='submit.addToCart'])",
                name: 'one_time_purchase',
                children: [
                  {
                    selector:
                      'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
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
                        selector: 'input[name="submit.addToCart"], span.add-to-cart-button input',
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
                        selector: 'span[class*="seeAllOffers"]',
                        add_text: true,
                        name: 'from_text',
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
                                return element.getAttribute('aria-label')
                              }
                              return ''
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
                                return element.getAttribute('aria-label')
                              }
                              return ''
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
                  const asinEm = em.closest('div[data-asin]')
                  const asin = asinEm?.getAttribute('data-asin')
                  const priceEm = em.querySelector(
                    'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)'
                  )
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.parentElement?.parentElement?.querySelector(
                    "a[id^='title'] span.a-truncate-full"
                  )
                  const title = titleEm?.innerText
                  const urlEm = em.parentElement?.parentElement?.querySelector("a[id^='title']")
                  const url = urlEm?.getAttribute('href')
                  const deliveryEm = em.querySelector('#udmDeliveryMessageComponent')
                  const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
                  const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"]')
                  const quantity = quantityEm?.innerText || '1'
                  return {
                    name: 'active_items_opened_purchase',
                    data: { title, asin, price, url, delivery, quantity }
                  }
                }
              },
              {
                selector: "div[data-buyingoptiontype='SNS'], div[class*='snsUpsellBlockContainer']",
                name: 'subscribe_and_save',
                children: [
                  {
                    selector:
                      'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                    add_text: true,
                    name: 'price'
                  },
                  {
                    selector: '#udmDeliveryMessageComponent',
                    add_text: true,
                    name: 'delivery'
                  },
                  {
                    selector:
                      'div[class*="actionButtonsRow"], div[class*="asinDetailPurchaseColumn"]',
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
                  const asinEm = em.closest('div[data-asin]')
                  const asin = asinEm?.getAttribute('data-asin')
                  const priceEm = em.querySelector(
                    'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)'
                  )
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.parentElement?.parentElement?.querySelector(
                    "a[id^='title'] span.a-truncate-full"
                  )
                  const title = titleEm?.innerText
                  const urlEm = em.parentElement?.parentElement?.querySelector("a[id^='title']")
                  const url = urlEm?.getAttribute('href')
                  const deliveryEm = em.querySelector('#udmDeliveryMessageComponent')
                  const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
                  return {
                    name: 'active_items_opened_sns',
                    data: { title, asin, price, url, delivery }
                  }
                }
              },
              {
                selector:
                  "div[data-buyingoptiontype='ALM'], div[class*='asinDetailInfoColumns']:has(span.add-to-cart-button)",
                name: 'shop_amazon_fresh',
                children: [
                  {
                    selector:
                      'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                    add_text: true,
                    name: 'price'
                  },
                  {
                    selector: '.almDeliveryMessage',
                    add_text: true,
                    name: 'delivery'
                  },
                  {
                    selector: 'div[class*="actionButtonsRow"], div[class*="asinDetailActionsRow"]',
                    name: 'buttons',
                    children: [
                      {
                        selector:
                          'span.add-to-cart-button input, div[class*="atcButtonContainer"], button',
                        add_text: true,
                        name: 'add_to_cart',
                        clickable: true
                      },
                      {
                        selector: 'span[class*="seeAllOffers"]',
                        add_text: true,
                        name: 'from_text',
                        clickable: true
                      },
                      {
                        selector: 'div[id^="feedbackButtonSection"] input',
                        add_text: true,
                        name: 'remove_this_item',
                        clickable: true
                      },
                      fresh_quantity_selector
                    ]
                  }
                ],
                generate_metadata: (em) => {
                  const asinEm = em.closest('div[data-asin]')
                  const asin = asinEm?.getAttribute('data-asin')
                  const priceEm = em.querySelector(
                    'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)'
                  )
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.parentElement?.parentElement?.querySelector(
                    "a[id^='title'] span.a-truncate-full"
                  )
                  const title = titleEm?.innerText
                  const urlEm = em.parentElement?.parentElement?.querySelector("a[id^='title']")
                  const url = urlEm?.getAttribute('href')
                  const deliveryEm = em.querySelector('#udmDeliveryMessageComponent')
                  const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
                  const quantityEm = em.querySelector('div[name="ax-qs"] div[role="spinbutton"]')
                  const quantity = quantityEm?.innerText || '1'
                  return {
                    name: 'active_items_opened_fresh',
                    data: { title, asin, price, url, delivery, quantity }
                  }
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
                    selector:
                      'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)',
                    add_text: true,
                    name: 'price'
                  },
                  {
                    selector: '#udmDeliveryMessageComponent',
                    add_text: true,
                    name: 'delivery'
                  },
                  {
                    selector:
                      'input[name="submit.addToCart"], input[name^="atfcShim"], button[aria-label="Add to Cart. Click to change quantity"]',
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
                            return element.getAttribute('aria-label')
                          }
                          return ''
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
                            return element.getAttribute('aria-label')
                          }
                          return ''
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
                            return element.getAttribute('aria-label')
                          }
                          return ''
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
                        selector:
                          'div.qs-widget-dropdown-wrapper span[data-action="qs-widget-dropdown-decl"]',
                        add_text: true,
                        clickable: true,
                        use_root: true,
                        name: 'from_text',
                        text_format: 'Drop Down Option {}'
                      },
                      {
                        selector:
                          'div[id^="qs-widget-quantity-container-atfc"] span[data-action="qs-widget-quantity-changelink-decl"]',
                        add_text: true,
                        clickable: true,
                        use_root: true,
                        name: 'from_text'
                      },
                      {
                        selector:
                          'div[id^="qs-widget-summary-container-atfc"] span[id^="qs-widget-summary-atc-atfc"]',
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
                            return element.getAttribute('aria-label')
                          }
                          return ''
                        },
                        clickable: true,
                        name: 'increase_quantity_by_one'
                      }
                    ]
                  }
                ],
                generate_metadata: (em) => {
                  const parentTitleEm = em
                    .closest('div[id^="featured"]')
                    ?.querySelector(
                      'div[id^="detailContentWrapper"] a[id^="title"] span.a-truncate-full'
                    )
                  const parentTitle = parentTitleEm?.innerText
                    ?.toLowerCase()
                    .replace(/[^\w]+/g, '_')
                  const asinEm = em.querySelector('div[class*="delightFaceout"]')
                  const asin = asinEm?.getAttribute('data-asin')
                  const priceEm = em.querySelector(
                    'span[class*="priceBlockWithMarginRight"] span.a-price > span:not(.a-offscreen)'
                  )
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.querySelector("a[id^='title'] span.a-truncate-full")
                  const title = titleEm?.innerText
                  const urlEm = em.querySelector("a[id^='title']")
                  const url = urlEm?.getAttribute('href')
                  const deliveryEm = em.querySelector('#udmDeliveryMessageComponent')
                  const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
                  return {
                    name: parentTitle + '.similar_items',
                    data: { title, asin, price, url, delivery }
                  }
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
                selector:
                  'div[class*="subscriptionButtonContainer"] input[name="submit.addToCart"]',
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
      const asinEm = em.querySelector('div[class*="modalContent"]')
      const asin = asinEm?.id?.split('-')[1]?.trim()
      return { name: 'popover_item', data: { asin } }
    }
  }
]

export const popular_products = [
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
            selector:
              'div[class*="zg-nav-tree-all_style_zg-root-browse-item"] > a, div[class*="zg-nav-tree-all_style_zg-browse-item"] > a',
            add_text: true,
            clickable: true,
            name: 'from_text'
          },
          {
            selector:
              'div[class*="zg-nav-tree-all_style_zg-root-browse-item"] > span, div[class*="zg-nav-tree-all_style_zg-browse-item"] > span',
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
          carousel_card,
          carousel_prev_button,
          carousel_next_button
        ]
      }
    ]
  }
]

export const recipes = [
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
            selector: 'div.gw-desktop-herotator',
            name: 'banner',
            children: [carousel_prev_button, carousel_next_button]
          },
          {
            selector: 'div.gw-col',
            text_selector:
              'h1 span.a-truncate-full, h2 span.a-truncate-full, h3 span.a-truncate-full, h1:not(:has(span.a-truncate-full)), h2:not(:has(span.a-truncate-full)), h3:not(:has(span.a-truncate-full))',
            name: 'from_text',
            children: [
              {
                selector:
                  'h1 span.a-truncate-full, h2 span.a-truncate-full, h3 span.a-truncate-full, h1:not(:has(span.a-truncate-full)), h2:not(:has(span.a-truncate-full)), h3:not(:has(span.a-truncate-full))',
                add_text: true
              },
              {
                selector: 'a',
                add_text: true,
                clickable: true,
                name: 'from_text',
                text_js: (em) => {
                  return (
                    em.getAttribute('aria-label') ||
                    em.querySelector('img')?.alt ||
                    em.querySelector('span.a-truncate-full')?.innerText ||
                    em.innerText ||
                    ''
                  )
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
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
                  return em.querySelector('img')?.alt || em.innerText || ''
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
                selector:
                  'span[data-csa-c-slot-id="nav-rib"], div[data-csa-c-slot-id="nav-rib"], a.sf-clear-all',
                add_text: true,
                clickable: true,
                name: 'from_text',
                text_js: (em) => {
                  if (em.getAttribute('data-csa-c-content-id') == 's-all-filters') {
                    return 'Show All Filters'
                  }
                  return em.getAttribute('aria-label') || em.innerText || ''
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
                            const formEm = em.closest('form')
                            if (formEm) {
                              const prop = formEm.getAttribute('data-slider-props')
                              if (prop) {
                                try {
                                  const steps = JSON.parse(prop).stepLabels
                                  return steps
                                } catch (e) {
                                  console.log(
                                    'price min value data-slider-props is not a valid JSON.'
                                  )
                                  return ''
                                }
                              }
                            }
                            return ''
                          },
                          current_value: (em) => {
                            const value = Number.parseInt(em.getAttribute('value'))
                            if (value !== null) {
                              const formEm = em.closest('form')
                              if (formEm) {
                                const prop = formEm.getAttribute('data-slider-props')
                                if (prop) {
                                  try {
                                    const steps = JSON.parse(prop).stepLabels
                                    return steps[value]
                                  } catch (e) {
                                    console.log(
                                      'price min value data-slider-props is not a valid JSON.'
                                    )
                                    return ''
                                  }
                                }
                              }
                            }
                            return ''
                          }
                        }
                      },
                      {
                        selector: 'div.s-slider-container div.s-upper-bound input',
                        name: 'price_max_value',
                        add_text: true,
                        clickable: true,
                        keep_attr: ['min', 'max', 'step'],
                        override_attr: {
                          step_values: (em) => {
                            const formEm = em.closest('form')
                            if (formEm) {
                              const prop = formEm.getAttribute('data-slider-props')
                              if (prop) {
                                try {
                                  const steps = JSON.parse(prop).stepLabels
                                  return steps
                                } catch (e) {
                                  console.log(
                                    'price max value data-slider-props is not a valid JSON.'
                                  )
                                  return ''
                                }
                              }
                            }
                            return ''
                          },
                          current_value: (em) => {
                            const value = Number.parseInt(em.getAttribute('value'))
                            if (value !== null) {
                              const formEm = em.closest('form')
                              if (formEm) {
                                const prop = formEm.getAttribute('data-slider-props')
                                if (prop) {
                                  try {
                                    const steps = JSON.parse(prop).stepLabels
                                    return steps[value]
                                  } catch (e) {
                                    console.log(
                                      'price min value data-slider-props is not a valid JSON.'
                                    )
                                    return ''
                                  }
                                }
                              }
                            }
                            return ''
                          }
                        }
                      },
                      {
                        selector:
                          'div.sf-rib-v1-dropdown-buttons button, div.sf-rib-v1-dropdown-buttons input',
                        name: 'from_text',
                        add_text: true,
                        clickable: true
                      }
                    ]
                  }
                ]
              },
              carousel_prev_button,
              carousel_next_button
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
                        let text = ''
                        if (!element) {
                          return text
                        }
                        const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
                        if (element.innerText && element.innerText.trim()) {
                          text += element.innerText.trim()
                          if (aChild && aChild.hasAttribute('title')) {
                            text += ' '
                            text += aChild.getAttribute('title')
                          }
                        } else {
                          const aChild = element.querySelector('a.a-link-normal.s-navigation-item')
                          if (aChild && aChild.hasAttribute('title')) {
                            text += aChild.getAttribute('title')
                          }
                        }
                        return text
                      } catch (e) {
                        console.log(e)
                        return ''
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
                selector:
                  'div.a-section.a-spacing-none:not(:has(#n-title)):has(span.a-size-base.a-color-base.puis-bold-weight-text):has(ul span.a-declarative > span > li):not(#reviewsRefinements):not(#departments):not(#priceRefinements):not(#filters)',
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
                      const selected = em?.getAttribute('aria-current')
                      const title = em?.innerText?.trim()
                      const url = em?.getAttribute('href')
                      if (selected && selected == 'true') {
                        return {
                          name: 'refinements.departments',
                          data: { title, selected: true, url }
                        }
                      } else {
                        return {
                          name: 'refinements.departments',
                          data: { title, selected: false, url }
                        }
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
                      const title = em?.innerText?.replace(/\n/g, ' ')?.trim()
                      const url = em?.getAttribute('href')
                      return { name: 'refinements.reviews', data: { title, selected: true, url } }
                    }
                  },
                  {
                    selector: "li a[aria-current='false']",
                    add_text: true,
                    name: 'from_text',
                    clickable: true,
                    generate_metadata: (em) => {
                      const title = em?.innerText?.replace(/\n/g, ' ')?.trim()
                      const url = em?.getAttribute('href')
                      return { name: 'refinements.reviews', data: { title, selected: false, url } }
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
                      const title = em?.innerText?.trim()
                      const url = em?.getAttribute('href')
                      return { name: 'refinements.price', data: { title, selected: true, url } }
                    }
                  },
                  {
                    selector: "ul[aria-labelledby='p_36-title'] a[aria-current='false']",
                    add_text: true,
                    name: 'from_text',
                    clickable: true,
                    generate_metadata: (em) => {
                      const title = em?.innerText?.trim()
                      const url = em?.getAttribute('href')
                      return { name: 'refinements.price', data: { title, selected: false, url } }
                    }
                  },

                  // case 2: slider
                  {
                    selector: 'div.sf-range-slider-row:nth-of-type(1)',
                    add_text: true,
                    generate_metadata: (em) => {
                      const range = em?.innerText?.replace(/\s+/g, '')
                      return { name: 'refinements.price', data: { title: 'price_range', range } }
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
                        const formEm = em.closest('form')
                        if (formEm) {
                          const prop = formEm.getAttribute('data-slider-props')
                          if (prop) {
                            try {
                              const steps = JSON.parse(prop).stepLabels
                              return steps
                            } catch (e) {
                              console.log('price min value data-slider-props is not a valid JSON.')
                              return ''
                            }
                          }
                        }
                        return ''
                      },
                      current_value: (em) => {
                        const value = Number.parseInt(em.getAttribute('value'))
                        if (value !== null) {
                          const formEm = em.closest('form')
                          if (formEm) {
                            const prop = formEm.getAttribute('data-slider-props')
                            if (prop) {
                              try {
                                const steps = JSON.parse(prop).stepLabels
                                return steps[value]
                              } catch (e) {
                                console.log(
                                  'price min value data-slider-props is not a valid JSON.'
                                )
                                return ''
                              }
                            }
                          }
                        }
                        return ''
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
                        const formEm = em.closest('form')
                        if (formEm) {
                          const prop = formEm.getAttribute('data-slider-props')
                          if (prop) {
                            try {
                              const steps = JSON.parse(prop).stepLabels
                              return steps
                            } catch (e) {
                              console.log('price max value data-slider-props is not a valid JSON.')
                              return ''
                            }
                          }
                        }
                        return ''
                      },
                      current_value: (em) => {
                        const value = Number.parseInt(em.getAttribute('value'))
                        if (value !== null) {
                          const formEm = em.closest('form')
                          if (formEm) {
                            const prop = formEm.getAttribute('data-slider-props')
                            if (prop) {
                              try {
                                const steps = JSON.parse(prop).stepLabels
                                return steps[value]
                              } catch (e) {
                                console.log(
                                  'price max value data-slider-props is not a valid JSON.'
                                )
                                return ''
                              }
                            }
                          }
                        }
                        return ''
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
                      const title = em?.innerText?.trim()
                      const url = em?.getAttribute('href')
                      return { name: 'refinements.price', data: { title, selected: true, url } }
                    }
                  },
                  {
                    selector: "ul[aria-labelledby='p_n_deal_type-title'] a[aria-current='false']",
                    add_text: true,
                    name: 'from_text',
                    clickable: true,
                    generate_metadata: (em) => {
                      const title = em?.innerText?.trim()
                      const url = em?.getAttribute('href')
                      return { name: 'refinements.price', data: { title, selected: false, url } }
                    }
                  }
                ]
              }
            ]
          },
          {
            selector: 'div:has(> span[data-component-type="s-searchgrid-carousel"] h2)',
            name: 'from_text',
            text_selector: 'div.sg-row h2',
            children: [
              {
                selector: 'div.sg-row h2',
                add_text: true
              },
              carousel_card,
              carousel_prev_button,
              carousel_next_button
            ]
          },
          {
            selector: 'div.s-main-slot.s-result-list.s-search-results',
            name: 'search_results',
            children: [
              {
                selector: 'div.s-messaging-widget-result-summary-sort-option-container',
                clickable: true,
                add_text: true,
                name: 'sort'
              },
              {
                selector: 'div[class*="brandLogoHeaderContainer"]',
                name: 'from_text',
                text_selector: 'a[class*="c2Itd_link"] span[class*="ctaLastWord"]',
                children: [
                  {
                    selector: 'a[class*="c2Itd_link"]',
                    clickable: true,
                    add_text: true,
                    text_format: 'Open Store',
                    name: 'from_text'
                  }
                ]
              },
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
                      const titleEm = em.querySelector('img')
                      const text = titleEm?.getAttribute('alt')
                      return text.trim() || ''
                    },
                    generate_metadata: (em) => {
                      const asinEm = em
                      const asin = asinEm?.getAttribute('data-asin')
                      const titleEm = em.querySelector('img')
                      const title = titleEm?.getAttribute('alt')
                      const urlEm = em.querySelector("a[data-type='productTitle']")
                      const url = urlEm?.getAttribute('href')
                      return { name: 'ads', data: { title, asin, url } }
                    }
                  },
                  carousel_prev_button,
                  carousel_next_button
                ]
              },
              {
                insert_split_marker: true,
                insert_split_marker_every: 4,
                selector: 'div[data-component-type="s-search-result"]',
                text_selector:
                  'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span',
                name: 'from_text',
                class: 'search-result',
                children: [
                  {
                    selector:
                      "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal",
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
                          const aChild = em.querySelector('a')
                          if (aChild) {
                            return aChild.getAttribute('aria-label') || ''
                          }
                          return ''
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
                    selector:
                      'div.s-variations-options-elevated, div.s-variations-options-justify-content',
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
                        selector:
                          'a:has(span.a-size-base.s-underline-text, span.a-size-small.s-underline-text)',
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
                    selector:
                      "div[data-cy='add-to-cart'] span.a-button:has(button), span[id*='add-to-cart'] input",
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
                            return element.getAttribute('aria-label')
                          }
                          return ''
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
                            return element.getAttribute('aria-label')
                          }
                          return ''
                        },
                        clickable: true,
                        name: 'increase_quantity_by_one'
                      }
                    ]
                  },
                  {
                    selector: 'div[data-cy="multi-offer-display"]',
                    text_selector: 'a:has(span.s-underline-text.a-text-bold)',
                    name: 'from_text',
                    children: [
                      {
                        selector: 'a:has(span.s-underline-text.a-text-bold)',
                        add_text: true,
                        clickable: true,
                        name: 'from_text'
                      },
                      {
                        selector: 'div:has(> a[aria-describedby="price-link"])',
                        clickable: true,
                        add_text: true,
                        name: 'offer_price'
                      }
                    ]
                  }
                ],
                generate_metadata: (em) => {
                  const asin = em.getAttribute('data-asin')
                  const priceEm = em.querySelector(
                    "div[data-cy='price-recipe'] a.a-link-normal > span.a-price > span.a-offscreen"
                  )
                  const price = priceEm?.innerText
                  const titleEm = em.querySelector(
                    'span.a-color-base.a-text-normal, h2.a-color-base.a-text-normal span'
                  )
                  const title = titleEm?.innerText
                  const urlEm = em.querySelector(
                    "div[data-cy='title-recipe'] a.a-link-normal.s-link-style.a-text-normal"
                  )
                  const url = urlEm?.getAttribute('href')
                  const deliveryEm = em.querySelector("div[data-cy='delivery-recipe']")
                  const delivery = deliveryEm?.innerText.replace(/[\n]/g, ' ')
                  return { name: 'search_results', data: { title, asin, price, url, delivery } }
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
            selector: '#rhf-shoveler div[id^="CardInstance"]',
            text_selector: 'h2.a-carousel-heading',
            name: 'from_text',
            children: [
              {
                selector: 'h2.a-carousel-heading',
                add_text: true
              },
              carousel_card,
              carousel_prev_button,
              carousel_next_button
            ]
          },
          {
            selector: 'div.a-popover.a-dropdown div.a-popover-wrapper',
            name: 'dropdown',
            children: [
              {
                selector: 'li.a-dropdown-item',
                clickable: true,
                add_text: true,
                name: 'from_text'
              }
            ]
          },
          {
            selector: 'div.a-popover.a-popover-no-header div.a-popover-wrapper',
            name: 'ratings_summary',
            children: ratings_summary
          },
          {
            selector:
              'div.a-popover:not(.a-dropdown):not(.a-popover-no-header) div.a-popover-wrapper',
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
              const asin = em.querySelector('div[data-asin]')?.getAttribute('data-asin')
              const priceEm = em.querySelector(
                'div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(2) div.puis-size-variation-price a.a-text-normal span[aria-hidden="true"]'
              )
              const price = priceEm?.innerText?.replace(/[\n]/g, '')
              const titleEm = em.querySelector(
                'div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(1) div.puis-size-variation-title a'
              )
              const title = titleEm?.innerText
              const urlEm = titleEm
              const url = urlEm?.getAttribute('href')
              const quantityEm = em.querySelector('div[data-action="a-dropdown-button"]')
              const optionsEm = em.querySelectorAll(
                'div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(1) div.puis-size-variation-product-spec, div.a-popover-inner div.puis-atc-size-variation div.a-row:nth-of-type(2) div.puis-size-variation-product-options'
              )
              const options = []
              for (const optionEm of optionsEm) {
                const optionKeyEm = optionEm?.querySelector('span.a-size-base.a-color-secondary')
                const optionValueEm = optionEm?.querySelector(
                  'span.a-size-base.a-color-base, span.a-dropdown-prompt'
                )
                const optionKey = optionKeyEm?.innerText.replace(/[:\n]/g, '').trim()
                const optionValue = optionValueEm?.innerText.replace(/[:\n]/g, '').trim()
                const option = { [optionKey]: optionValue }
                options.push(option)
              }
              return {
                name: 'popover_item',
                data: { title, asin, price, url, options }
              }
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
            selector: 'span[class*="family-stripe-container"]',
            name: 'product_families',
            children: [
              {
                selector: 'div[class*="showcase-item"]',
                name: 'from_text',
                clickable: true,
                add_text: true
              }
            ]
          },
          {
            selector: '.mn-nav ul',
            name: 'subnav',
            children: [
              {
                selector: 'li',
                name: 'from_text',
                clickable: true,
                add_text: true
              }
            ]
          },
          {
            selector: '#centerCol',
            class: 'product-card',
            children: [
              {
                selector: '#brandBar_feature_div',
                clickable: true,
                name: 'brand'
              },
              {
                selector: '#title',
                add_text: true,
                keep_attr: ['id'],
                generate_metadata: (em) => {
                  return {
                    name: 'product_details',
                    data: { title: em?.innerText || '' }
                  }
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
                    data: { brand: em?.innerText || '' }
                  }
                }
              },
              {
                selector: '#bondByLine_feature_div',
                add_text: true,
                name: 'product_title',
                generate_metadata: (em) => {
                  return {
                    name: 'product_details',
                    data: { title: em?.innerText || '' }
                  }
                }
              },
              {
                selector: '#bylineInfo_feature_div',
                clickable: true,
                add_text: true,
                name: 'from_text'
              },
              {
                selector: '#averageCustomerReviews',
                class: 'review',
                children: [
                  {
                    selector: 'a.mvt-cm-cr-review-stars-mini-popover',
                    add_text: true,
                    clickable: true,
                    name: 'ratings'
                  },
                  {
                    selector: '#acrCustomerReviewText',
                    add_text: true,
                    clickable: true,
                    name: 'reviews'
                  },
                  {
                    selector: 'div[aria-label="Customer Reviews Ratings Summary"]',
                    use_root: true,
                    name: 'ratings_summary',
                    children: ratings_summary
                  }
                ]
              },
              {
                selector:
                  '#apex_desktop > div[data-csa-c-slot-id="apex_dp_center_column"]' +
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
                  return {
                    name: 'product_details',
                    data: { price: em?.innerText?.replace(/\n/g, '') || '' }
                  }
                },
                text_js: (em) => {
                  return em?.innerText?.replace(/\n/g, '') || ''
                }
              },
              {
                selector: 'span.bondApexPrice span.a-offscreen',
                add_text: true,
                text_format: 'Price: {}',
                class: 'product-price',
                generate_metadata: (em) => {
                  return {
                    name: 'product_details',
                    data: { price: em?.innerText?.replace(/\n/g, '') || '' }
                  }
                }
              },
              {
                selector: '#creturns-return-policy-message',
                clickable: true,
                add_text: true,
                name: 'return_policy'
              },
              {
                selector: '#alternativeOfferEligibilityMessaging_feature_div',
                name: 'alternative_offer',
                children: [
                  {
                    selector: 'span[data-action="show-all-offers-display"]',
                    clickable: true,
                    click_selector: 'a',
                    add_text: true,
                    name: 'from_text'
                  }
                ]
              },
              {
                selector: '#promoPriceBlockMessage_feature_div:has(.newCouponBadge)',
                name: 'coupon',
                children: [
                  {
                    selector: 'div.a-checkbox',
                    clickable: true,
                    add_text: true,
                    text_format: 'Checkbox',
                    name: 'from_text'
                  },
                  {
                    selector: '[id^="couponTextpctch"]',
                    clickable: true,
                    add_text: true,
                    name: 'coupon_detail'
                  }
                ]
              },
              bundle_card,
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
                      const label = em
                        .querySelector('div.a-row:has(label.a-form-label) label.a-form-label')
                        ?.innerHTML.replace(/[:\n]/g, '')
                        .trim()
                      let value = em.querySelector(
                        'div.a-row:has(label.a-form-label) span.selection'
                      )?.innerHTML
                      if (value === undefined || value === '') {
                        const options = em.querySelector('select')?.querySelectorAll('option')
                        // console.log(options);
                        if (options) {
                          for (const option of options) {
                            // console.log(option);
                            if (option && option.getAttribute('selected') !== null) {
                              value = option.innerHTML.trim()
                            }
                          }
                        }
                        // console.log(value);
                      }
                      return { name: 'product_options', data: { [label]: value.trim() } }
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
                              let text = ''
                              if (element.innerText.trim()) {
                                text += element.innerText.trim()
                                const imgChild = element.querySelector('img')
                                if (imgChild && imgChild.alt) {
                                  text += ' '
                                  text += imgChild.alt
                                }
                              } else {
                                const imgChild = element.querySelector('img')
                                if (imgChild && imgChild.alt) {
                                  text += imgChild.alt
                                }
                              }
                              return text.trim()
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
                    text_selector:
                      'div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary',
                    name: 'from_text',
                    direct_child: true,
                    generate_metadata: (em) => {
                      const label = em
                        .querySelector(
                          'div.inline-twister-dim-title-value-truncate-expanded span.a-size-base.a-color-secondary'
                        )
                        ?.innerHTML.replace(/[:\n]/g, '')
                        .trim()
                      let value = em.querySelector(
                        'div.inline-twister-dim-title-value-truncate-expanded span.inline-twister-dim-title-value'
                      )?.innerHTML
                      if (value === undefined || value === '') {
                        const options = em.querySelector('select')?.querySelectorAll('option')
                        // console.log(options);
                        if (options) {
                          for (const option of options) {
                            // console.log(option);
                            if (option && option.getAttribute('selected') !== null) {
                              value = option.innerHTML.trim()
                            }
                          }
                        }
                        // console.log(value);
                      }
                      return { name: 'product_options', data: { [label]: value.trim() } }
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
                              const textEm = element.querySelector('span.a-button-text')
                              let text = ''
                              if (textEm.innerText.trim()) {
                                text += textEm.innerText.trim()
                                const imgChild = textEm.querySelector('img')
                                if (imgChild && imgChild.alt) {
                                  text += ' '
                                  text += imgChild.alt
                                }
                              } else {
                                const imgChild = textEm.querySelector('img')
                                if (imgChild && imgChild.alt) {
                                  text += imgChild.alt
                                }
                              }
                              return text.trim()
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
                      const label = em
                        .querySelector('span.a-size-base.a-color-secondary')
                        ?.innerHTML.replace(/[:\n]/g, '')
                        .trim()
                      const value = em.querySelector(
                        'span.inline-twister-dim-title-value-truncate'
                      )?.innerHTML
                      return { name: 'product_options', data: { [label]: value.trim() } }
                    }
                  }
                ]
              },
              {
                selector: 'div.a-expander-section-container',
                clickable: true,
                add_text: true,
                name: 'from_text'
              },
              {
                selector:
                  '#productFactsDesktopExpander, #featurebullets_feature_div, #bond-feature-bullets-desktop, #feature-bullets',
                name: 'about_this_item',
                children: [
                  {
                    selector: 'ul.a-unordered-list',
                    children: [
                      {
                        selector: 'li',
                        add_text: true
                      }
                    ],
                    generate_metadata: (em) => {
                      return {
                        name: 'product_details',
                        data: {
                          bullet_list: em?.innerText?.replace(/\n/g, ' ') || ''
                        }
                      }
                    }
                  },
                  {
                    selector: 'a.a-expander-extend-header',
                    clickable: true,
                    add_text: true,
                    name: 'from_text'
                  }
                ]
              },
              {
                selector: '#newer-version',
                name: 'newer_version',
                children: [
                  {
                    selector: 'h2.a-text-bold',
                    add_text: true
                  },
                  {
                    selector: 'div.a-col-left:has(img)',
                    clickable: true,
                    add_text: true,
                    text_format: 'Product Image',
                    name: 'from_text'
                  },
                  {
                    selector: 'div.a-col-right a',
                    clickable: true,
                    add_text: true,
                    name: 'from_text',
                    text_js: (em) => {
                      return em.innerText || em.getAttribute('aria-label') || ''
                    }
                  }
                ]
              }
            ]
          },
          {
            selector:
              '#buybox:has(div.a-tab-container):not(:has(#partialState_buybox_desktop)):not(:has(#luxury_buybox_desktop))',
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
              const asinEm = em.querySelector('input#ASIN')
              return {
                name: 'product_details',
                data: { asin: asinEm?.value || '' }
              }
            }
          },
          {
            selector:
              '#buybox:not(:has(div.a-tab-container)):not(:has(#partialState_buybox_desktop)):not(:has(#luxury_buybox_desktop))',
            name: 'buybox',
            children: [buy_box_with_accordion, buy_box_without_accordion_delivery],
            generate_metadata: (em) => {
              const asinEm = em.querySelector('input#ASIN')
              return {
                name: 'product_details',
                data: { asin: asinEm?.value || '' }
              }
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
              const asinEm = em.querySelector('input#ASIN')
              return {
                name: 'product_details',
                data: { asin: asinEm?.value || '' }
              }
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
              const asinEm = em.querySelector('input#ASIN')
              return {
                name: 'product_details',
                data: { asin: asinEm?.value || '' }
              }
            }
          },
          {
            selector: '#outOfStock',
            add_text: true,
            text_format: 'Currently Unavailable'
          },
          {
            selector: '#fodcx_feature_div',
            add_text: true,
            name: 'no_featured_offer_available',
            children: [
              {
                selector: 'a[aria-describedby="fod-cx-message-with-learn-more"]',
                clickable: true,
                add_text: true,
                name: 'from_text'
              }
            ]
          },
          {
            selector: '#unqualifiedBuyBox',
            name: 'unqualified_buybox',
            children: [
              {
                selector: 'div.a-button-stack',
                clickable: true,
                add_text: true,
                name: 'from_text'
              }
            ]
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
                    selector:
                      'a[class*="desktop-sims-fbt_fbt-desktop_image-link"], div[class*="image-background"] a',
                    text_format: 'Product Image',
                    clickable: true,
                    add_text: true,
                    name: 'from_text'
                  },
                  {
                    selector:
                      'div[id^="ProductTitle"]:has(a), a:has(div[class*="title-component"])',
                    clickable: true,
                    add_text: true,
                    name: 'product_title'
                  },
                  {
                    selector:
                      'div[id^="ProductTitle"]:not(:has(a)) div > div[class*="title-component"]',
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
                    selector:
                      'div[class*="desktop-sims-fbt_price_p13n"] span.a-price span.a-offscreen',
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
            selector:
              'div#dp:not(.grocery):not(.luxury) #similarities_feature_div, div[id^="sims-themis-sponsored-products"], div[id^="sims-simsContainer_feature_div"]',
            text_selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
            name: 'from_text',
            children: [
              {
                selector: 'h2.a-carousel-heading, h1[class*="carousel-heading"]',
                add_text: true
              },
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
              fresh_carousel_card,
              carousel_prev_button,
              carousel_next_button
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
              luxury_carousel_card,
              carousel_prev_button,
              carousel_next_button
            ]
          },
          product_specifications,
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
                      },
                      {
                        selector: 'div[id^="swatchesContainer"]',
                        name: 'colors',
                        children: [
                          {
                            selector: 'span',
                            direct_child: true,
                            add_text: true,
                            clickable: true,
                            name: 'from_nth_child'
                          },
                          {
                            selector: 'a',
                            direct_child: true,
                            add_text: true,
                            clickable: true,
                            name: 'from_text'
                          }
                        ]
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
                      const classes = em.classList.value
                      const selector = classes
                        .split(' ')
                        .map((cls) => `.${cls}`)
                        .join(', ')
                      const textEm = em
                        .closest('tbody')
                        ?.querySelector(
                          'tr:has(div[class^="_product-comparison-desktop_titleStyle"])'
                        )
                        ?.querySelector(selector)
                        ?.querySelector('div[class^="_product-comparison-desktop_titleStyle"]')
                      return textEm?.innerText || ''
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
                      const classes = em.classList.value
                      const selector = classes
                        .split(' ')
                        .map((cls) => `.${cls}`)
                        .join(', ')
                      const titleEm = em
                        .closest('tbody')
                        ?.querySelector(
                          'tr:has(div[class^="_product-comparison-desktop_titleStyle"])'
                        )
                        ?.querySelector(selector)
                        ?.querySelector('div[class^="_product-comparison-desktop_titleStyle"]')
                      const title = titleEm?.innerText || ''
                      const asin = em
                        .querySelector('input[name="submit.addToCart"]')
                        ?.getAttribute('data-asins')
                        ?.replace(/[\[\]"]/g, '')
                      const priceEm = em
                        .closest('tbody')
                        ?.querySelector('tr:has(span.a-price)')
                        ?.querySelector(selector)
                        ?.querySelector('span.a-price span.a-offscreen')
                      const price = priceEm?.innerText
                      const urlEm = em
                        .closest('tbody')
                        ?.querySelector(
                          'tr:has(div[class^="_product-comparison-desktop_titleStyle"])'
                        )
                        ?.querySelector(selector)
                        ?.querySelector(
                          'a:has(div[class^="_product-comparison-desktop_titleStyle"])'
                        )
                      const url = urlEm?.href || window.location.href
                      return { name: 'comparison_items', data: { title, asin, price, url } }
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
                      const classes = em.classList.value
                      const selector = classes
                        .split(' ')
                        .map((cls) => `.${cls}`)
                        .join(', ')
                      const textEm = em
                        .closest('tbody')
                        ?.querySelectorAll('tr')[0]
                        ?.querySelector(selector)
                        ?.querySelector('div[class^="_product-comparison-desktop_titleStyle"]')
                      return textEm?.innerText || ''
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
                      const classes = em.classList.value
                      const selector = classes
                        .split(' ')
                        .map((cls) => `.${cls}`)
                        .join(', ')
                      const textEm = em
                        .closest('tbody')
                        ?.querySelectorAll('tr')[0]
                        ?.querySelector(selector)
                        ?.querySelector('div[class^="_product-comparison-desktop_titleStyle"]')
                      return textEm?.innerText || ''
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
                      const classes = em.classList.value
                      const selector = classes
                        .split(' ')
                        .map((cls) => `.${cls}`)
                        .join(', ')
                      const textEm = em
                        .closest('tbody')
                        ?.querySelectorAll('tr')[0]
                        ?.querySelector(selector)
                        ?.querySelector('div[class^="_product-comparison-desktop_titleStyle"]')
                      return textEm?.innerText || ''
                    },
                    children: [
                      {
                        selector: 'div[class*="reviews-rating"]',
                        name: 'product_rating',
                        add_text: true,
                        text_js: (em) => {
                          const icon = em.querySelector('i')
                          const span = em.querySelector('span.a-size-base.a-color-link')
                          return icon?.innerText + ' Reviewed by ' + span?.innerText || ''
                        },
                        clickable: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          video_panel,
          {
            selector: '#aplusBrandStory_feature_div',
            name: 'brand_story',
            children: [carousel_prev_button, carousel_next_button]
          },
          {
            selector: 'div.aplus-module',
            name: 'from_text',
            text_js: (em) => {
              return em.getAttribute('cel_widget_id') || ''
            },
            children: [carousel_prev_button, carousel_next_button]
          },
          review_panel,
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
                  const imgEm = em.querySelector('img')
                  return imgEm?.alt || ''
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
                      return em.getAttribute('aria-label') || em.innerText || ''
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
                selector:
                  'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                add_text: true,
                clickable: true,
                name: 'from_text'
              }
            ],
            generate_metadata: (em) => {
              const asinEm = em.querySelector('div[data-asin]')
              const asin = asinEm?.getAttribute('data-asin')
              const priceEm = em.querySelector('span.a-price span.a-offscreen')
              const price = priceEm?.innerText?.replace(/[\n]/g, '')
              const titleEm = em.querySelector('span[class*="titleR2"]')
              const title = titleEm?.innerText.replace('"', '')
              const urlEm = em.querySelector('a:not(:has(img))')
              const url = urlEm?.getAttribute('href')
              return {
                name: 'promotion_items',
                data: { title, asin, price, url }
              }
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
                  return (
                    em
                      .getAttribute('data-intent')
                      ?.replace('intent-feed-', '')
                      .replaceAll('-', '_') || ''
                  )
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
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
              carousel_prev_button,
              carousel_next_button,
              {
                selector: 'div[class*="twoAsinsProductContainer"]',
                text_js: (em) => {
                  const aEm = em.querySelector('div[class*="twoAsinsProductDetails"] a[aria-label]')
                  return aEm.getAttribute('aria-label') || ''
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
                  const asinEm = em.querySelector('input[data-asin]')
                  const asin = asinEm?.getAttribute('data-asin') || ''
                  const priceEm = em.querySelector('span.a-price span.a-offscreen')
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.querySelector('div[class*="twoAsinsProductDetails"] a')
                  const title = titleEm?.getAttribute('aria-label') || ''
                  const urlEm = em.querySelector('div[class*="twoAsinsProductDetails"] a')
                  const url = urlEm?.getAttribute('href')
                  return {
                    name: 'promotion_items',
                    data: { title, asin, price, url }
                  }
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
                  const textEm = em.querySelector('a-cardui-header')
                  const ariaEm = em.querySelector('button[aria-label]')
                  return ariaEm?.getAttribute('aria-label') || textEm?.innerText || ''
                },
                children: [
                  {
                    selector:
                      'div[class*="intuition-attribute-with-chevron__attributeWithChevronContainer"]',
                    clickable: true,
                    name: 'apply_filters',
                    add_text: true,
                    text_js: (em) => {
                      const textEm = em.querySelector('span.a-truncate-full')
                      const ariaEm = em.querySelector('button[aria-label]')
                      return ariaEm?.getAttribute('aria-label') || textEm?.innerText || ''
                    }
                  },
                  {
                    selector:
                      'div[class*="intuition-attribute-with-chevron__chevronOuterContainer"]',
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
                      const button = em.querySelector('button')
                      return button?.getAttribute('aria-label') || button?.innerText || ''
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
              return (
                em.getAttribute('data-intent')?.replace('intent-feed-', '').replaceAll('-', '_') ||
                ''
              )
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
                          return em.getAttribute('aria-label') || em.innerText || ''
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
                    selector:
                      'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                    add_text: true,
                    clickable: true,
                    name: 'from_text'
                  }
                ],
                generate_metadata: (em) => {
                  const asinEm = em.querySelector('div[data-asin]')
                  const asin = asinEm?.getAttribute('data-asin')
                  const priceEm = em.querySelector('span.a-price span.a-offscreen')
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.querySelector('span[class*="titleR3"]')
                  const title = titleEm?.innerText.replace('"', '')
                  const urlEm = em.querySelector('a:not(:has(img))')
                  const url = urlEm?.getAttribute('href')
                  const nameEm = em.closest('#intent-content-default')
                  const name =
                    nameEm
                      ?.getAttribute('data-intent')
                      ?.replace('intent-feed-', '')
                      .replaceAll('-', '_') || ''
                  return {
                    name: name,
                    data: { title, asin, price, url }
                  }
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
                          return em.getAttribute('aria-label') || em.innerText || ''
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
                    selector:
                      'span.a-button a, div[data-component-id="seeAllBuyingOptionsButton"] span.a-button',
                    add_text: true,
                    clickable: true,
                    name: 'from_text'
                  }
                ],
                generate_metadata: (em) => {
                  const asinEm = em.querySelector('input')
                  const asin = asinEm?.getAttribute('data-asin')
                  const priceEm = em.querySelector('span.a-price span.a-offscreen')
                  const price = priceEm?.innerText?.replace(/[\n]/g, '')
                  const titleEm = em.querySelector('span[class*="titleR3"]')
                  const title = titleEm?.innerText.replace('"', '')
                  const urlEm = em.querySelector('a:not(:has(img))')
                  const url = urlEm?.getAttribute('href')
                  const nameEm = em.closest('#intent-content-default')
                  const name =
                    nameEm
                      ?.getAttribute('data-intent')
                      ?.replace('intent-feed-', '')
                      .replaceAll('-', '_') || ''
                  return {
                    name: name,
                    data: { title, asin, price, url }
                  }
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
                selector:
                  'div.sw-atf-recommendations-container div[id^="CardInstance"], div#smart-wagon-recommendations-btf div[id^="CardInstance"]',
                text_selector: 'h1.a-carousel-heading',
                name: 'from_text',
                children: [
                  {
                    selector: 'h1.a-carousel-heading',
                    add_text: true
                  },
                  carousel_card,
                  carousel_prev_button,
                  carousel_next_button
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
            selector:
              'div.sw-atf-recommendations-container div[id^="CardInstance"], div#smart-wagon-recommendations-btf div[id^="CardInstance"], #rhf-shoveler div[id^="CardInstance"]',
            text_selector: '.a-carousel-heading',
            name: 'from_text',
            children: [
              {
                selector: '.a-carousel-heading',
                add_text: true
              },
              {
                selector: '.a-carousel-header-row a',
                clickable: true,
                add_text: true,
                name: 'from_text'
              },
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
              fresh_carousel_card,
              carousel_prev_button,
              carousel_next_button
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
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
                selector:
                  'a[class*="store-subnav-desktop_style"], a[class*="store-subnav-desktop-flyout_style"]',
                add_text: true,
                clickable: true,
                name: 'from_text',
                text_js: (em) => {
                  return em.innerText || 'Same Day Store'
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
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
                  return em.innerText || 'Same Day Store'
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
              carousel_card,
              carousel_prev_button,
              carousel_next_button
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
            selector: 'div[class^="DesktopRefinements-module__root"], .apb-browse-refinements',
            name: 'refinements',
            children: [
              {
                selector: 'div',
                direct_child: true,
                name: 'from_text',
                text_selector:
                  'span.a-size-base.a-color-base.a-text-bold, h1.a-size-base.a-color-base.a-text-bold',
                children: [
                  {
                    selector:
                      'span.a-size-base.a-color-base.a-text-bold, h1.a-size-base.a-color-base.a-text-bold',
                    add_text: true
                  },
                  {
                    selector:
                      'ul[class^="Breadcrumbs-module"] li:has(a), ul[aria-labelledby*="title"] li:has(a)',
                    add_text: true,
                    clickable: true,
                    name: 'from_text'
                  },
                  {
                    selector:
                      'ul[class^="Breadcrumbs-module"] li:not(:has(a)), ul[aria-labelledby*="title"] li:not(:has(a))',
                    add_text: true
                  },
                  {
                    selector: 'div[role="radiogroup"] > span, div[role="group"] > span',
                    clickable: true,
                    add_text: true,
                    name: 'from_text',
                    text_js: (em) => {
                      return (
                        em.querySelector('div[aria-label]')?.getAttribute('aria-label') ||
                        em.innerText
                      )
                    },
                    generate_metadata: (em) => {
                      const nameEm = em.parentElement?.parentElement?.firstElementChild
                      const name = nameEm?.innerText
                        ?.trim()
                        .replace(/[ ]/g, '_')
                        .toLowerCase()
                        .trim()
                        .replace(/^_+|_+$/g, '')

                      const text =
                        em.querySelector('div[aria-label]')?.getAttribute('aria-label') ||
                        em.innerText

                      const selectEm = em.querySelector(
                        'input[type="radio"], input[type="checkbox"]'
                      )
                      const selected = selectEm?.getAttribute('data-processed-input-checked')
                      return {
                        name: 'refinements.' + name,
                        data: { title: text?.trim() || '', selected: false }
                      }
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
                      return em.querySelector('a')?.getAttribute('aria-label') || ''
                    }
                  }
                ]
              }
            ],
            generate_metadata: (em) => {
              const asin = em.getAttribute('data-asin')
              const title = em.querySelector('p[id^="title"] span.a-truncate-full')?.innerText
              return {
                name: 'promotion_items',
                data: { asin, title }
              }
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
      return !!arguments[0]
    },
    terminate_callback: function () {
      return arguments[0]
    },
    selector: 'html'
  },
  {
    match: '/gp/buy/spc/handlers/display.html',
    match_method: 'url',
    terminate: function () {
      return !!arguments[0]
    },
    terminate_callback: function () {
      return arguments[0]
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
]
