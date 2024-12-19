/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
    /***/ './src/recipe.ts':
      /*!***********************!*\
  !*** ./src/recipe.ts ***!
  \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ nav: () => /* binding */ nav,
          /* harmony export */ recipes: () => /* binding */ recipes,
          /* harmony export */ refinement_option: () => /* binding */ refinement_option
          /* harmony export */
        })
        const nav = {
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
        }
        const refinement_option = [
          {
            selector: 'span.a-size-base.a-color-base.puis-bold-weight-text',
            add_text: true,
            class: 'refinement-title'
          },
          {
            selector: 'ul:nth-of-type(1) > span.a-declarative > span > li',
            add_text: true,
            name: 'from_text',
            clickable: true,
            click_selector: 'a',
            direct_child: true,
            children: [{ selector: "input[type='checkbox']" }]
          }
        ]
        const recipes = [
          {
            match: '/',
            match_method: 'url',
            selector: 'html',
            children: [
              { selector: 'head', children: [{ selector: 'title', add_text: true }] },
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
              { selector: 'head', children: [{ selector: 'title', add_text: true }] },
              {
                selector: 'body',
                children: [
                  nav,
                  {
                    selector: '#s-refinements',
                    name: 'refinements',
                    children: [
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
                        text_selector: 'span.a-size-base-plus.a-color-base.a-text-normal',
                        name: 'from_text',
                        class: 'search-result',
                        children: [
                          {
                            selector: "div[data-cy='title-recipe'] a",
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
            terminate: 'return !!arguments[0]',
            terminate_callback: 'return arguments[0]',
            children: [
              { selector: 'head', children: [{ selector: 'title', add_text: true }] },
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
                        selector:
                          '#apex_desktop_newAccordionRow #corePriceDisplay_desktop_feature_div span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay',
                        add_text: true,
                        text_format: 'Price: {}',
                        class: 'product-price'
                      },
                      {
                        selector: '#twister',
                        class: 'product-options',
                        children: [
                          {
                            selector: 'div.a-row:has(label.a-form-label):has(span.selection)',
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
                          }
                        ]
                      }
                    ]
                  },
                  {
                    selector: '#addToCart:has(#buy-now-button)',
                    name: 'add_to_cart',
                    children: [
                      {
                        selector: '#productFactsDesktopExpander',
                        add_text: true,
                        class: 'product-facts'
                      },
                      {
                        selector:
                          'div.mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE',
                        add_text: true,
                        class: 'product-delivery'
                      },
                      {
                        selector: '#buy-now-button',
                        add_text: true,
                        clickable: true,
                        name: 'buy_now',
                        class: 'product-buy-now',
                        before_hook: `
const title = document.querySelector("#title").innerText
const price = document.querySelector("span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay").innerText
const options = Array.from(document.querySelectorAll("#twister div.a-row:has(label.a-form-label):has(span.selection)")).map(a => ({label: a.querySelector("label.a-form-label").innerText, value: a.querySelector("span.selection").innerText}))
const options_dict = {}
for (const option of options) {
    options_dict[option["label"].replace(": ", "")] = option["value"]
}
const asin = document.querySelector("input#ASIN").value
console.log({title, price, options: options_dict, asin})
return {title, price, options: options_dict, asin}
`
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            match: '/ap/signin',
            match_method: 'url',
            terminate: 'return !!arguments[0]',
            terminate_callback: 'return arguments[0]',
            selector: 'html'
          }
        ]

        /***/
      }

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ ;(() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}
  /*!********************************!*\
  !*** ./src/background_test.ts ***!
  \********************************/
  __webpack_require__.r(__webpack_exports__)
  /* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./recipe */ './src/recipe.ts'
  )
  // src/background_test.ts
  var __awaiter =
    (undefined && undefined.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P
          ? value
          : new P(function (resolve) {
              resolve(value)
            })
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value))
          } catch (e) {
            reject(e)
          }
        }
        function rejected(value) {
          try {
            step(generator['throw'](value))
          } catch (e) {
            reject(e)
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next())
      })
    }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck
  chrome.webNavigation.onCommitted.addListener(
    (details) => {
      if (details.frameId === 0) {
        // Only inject into the main frame
        chrome.scripting.executeScript({
          target: { tabId: details.tabId },
          files: ['js/injected.js'],
          world: 'MAIN' // Ensures the script is injected into the main world
        })
      }
    },
    { url: [{ urlMatches: '.*amazon\\.com.*' }] }
  )
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck

  let upload_url = 'http://userdatacollect.hailab.io/upload'
  let interactions = []
  const interactionsLimit = 100
  let screenshots = []
  let reasonsAnnotation = []
  const reasonsLimit = 100
  const screenshotLimit = 100
  let actionSequenceId = 0
  let uploadTimer = null
  let userId = ''
  let navigation_probability = 1
  let popup_probability = 1
  const tabNavigationHistory = {}
  function analyzeNavigation(tabId, url) {
    if (!tabNavigationHistory[tabId]) {
      tabNavigationHistory[tabId] = {
        backStack: [],
        forwardStack: [],
        currentUrl: null
      }
    }
    const history = tabNavigationHistory[tabId]
    if (!history.currentUrl) {
      history.currentUrl = url
      return 'new'
    }
    if (history.currentUrl === url) {
      return 'reload'
    }
    if (history.backStack.length > 0 && history.backStack[history.backStack.length - 1] === url) {
      history.forwardStack.push(history.currentUrl)
      history.currentUrl = history.backStack.pop()
      return 'back'
    }
    if (
      history.forwardStack.length > 0 &&
      history.forwardStack[history.forwardStack.length - 1] === url
    ) {
      history.backStack.push(history.currentUrl)
      history.currentUrl = history.forwardStack.pop()
      return 'forward'
    }
    history.backStack.push(history.currentUrl)
    history.forwardStack = []
    history.currentUrl = url
    return 'new'
  }
  // Replace the simple question with a more detailed one based on event type
  function getCustomQuestion(eventType, data) {
    var _a
    switch (eventType) {
      case 'click':
        // Check if it's a specific type of click
        if (data.target.innerText === 'Set Up Now') {
          return "Why did you choose 'Set Up Now' instead of buy once, and why do you like this particular product?"
        } else if (data.target.id === 'buy-now-button') {
          return 'Why did you choose to buy this product immediately, and what convinced you to skip further exploration of other options? Why do you like this particular product?'
        } else if (
          (_a = data.target.className) === null || _a === void 0
            ? void 0
            : _a.includes('sc-product-link')
        ) {
          return 'What made you click on this product, and what specific aspects attracted your attention compared to other search results?'
        } else if (data.target.id === 'add-to-cart-button') {
          return 'Why did you decide to add this item to your cart, and are you planning to buy it now or later? What convinced you that this item was the right choice for your needs?'
        } else {
          return 'What was your reason for clicking on this element?'
        }
      case 'scroll':
        return 'What are you doing while scrolling—are you browsing search results, looking at reviews, or something else, and what are you hoping to find?'
      case 'input':
        return 'What are you searching for, and how did you decide on the search terms you used? Are you looking for a specific product, brand, or feature?'
      case 'navigation':
        if (data.navigationType === 'back') {
          return 'Why did you decide to go back to the previous page, and what were you hoping to revisit or reconsider?'
        } else if (data.navigationType === 'forward') {
          return 'Why did you decide to return to this page after previously navigating away, and what new or unresolved information are you looking for now?'
        }
        return `What is the reason for this ${data.navigationType} navigation?`
      case 'tabActivate':
        return `Why did you switch to this tab? Do you have specific task or information in mind?`
      default:
        return `What is the reason for the ${eventType} action?`
    }
  }
  // Add new function to handle screenshot saving
  function saveScreenshot(screenshotDataUrl, screenshotId) {
    return __awaiter(this, void 0, void 0, function* () {
      if (screenshotDataUrl) {
        // Get existing screenshots from storage
        let result = yield chrome.storage.local.get({ screenshots: [] })
        let storeScreenshots = result.screenshots || []
        // Add new screenshot
        storeScreenshots.push([screenshotDataUrl, screenshotId])
        // Save back to storage
        yield chrome.storage.local.set({ screenshots: storeScreenshots })
        return true
      }
      return false
    })
  }
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    ;(() =>
      __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b
        if (message.action === 'saveData') {
          try {
            console.log('saveData ', message.data.eventType)
            actionSequenceId++
            console.log(actionSequenceId)
            message.data.actionSequenceId = actionSequenceId
            // 直接存储到 chrome.storage.local
            let result = yield chrome.storage.local.get({ interactions: [] })
            result = result.interactions || []
            result.push(message.data)
            yield chrome.storage.local.set({ interactions: result })
            console.log('send message to popup')
            const question = getCustomQuestion(message.data.eventType, message.data)
            if (
              Math.random() < popup_probability &&
              ((_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id)
            ) {
              try {
                const reason = yield chrome.tabs.sendMessage(sender.tab.id, {
                  action: 'show_popup',
                  question: question
                })
                if (reason && reason.input !== null) {
                  const newitem = {
                    actionSequenceId: message.data.actionSequenceId,
                    timestamp: message.data.timestamp,
                    eventType: message.data.eventType,
                    reason: reason
                  }
                  let result = yield chrome.storage.local.get({ reasonsAnnotation: [] })
                  let storeReasonsAnnotation = result.reasonsAnnotation || []
                  // Add new reason
                  storeReasonsAnnotation.push(newitem)
                  // Save back to storage
                  yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation })
                }
              } catch (error) {
                console.error('Error popup:', error)
              }
            }
            sendResponse({ success: true })
          } catch (error) {
            console.error('Error in saveData:', error)
            sendResponse({ success: false, error: error.message })
          }
          return true // Keep message channel open for async response
        }
        // Capture screenshot on demand
        if (message.action === 'captureScreenshot') {
          try {
            console.log('get screenshot request')
            const screenshotDataUrl = yield captureScreenshot()
            if (screenshotDataUrl) {
              const success = yield saveScreenshot(screenshotDataUrl, message.screenshotId)
              sendResponse({
                success,
                message: success ? undefined : 'Failed to capture screenshot'
              })
            } else {
              sendResponse({ success: false, message: 'Failed to capture screenshot' })
            }
          } catch (error) {
            console.error('Error in captureScreenshot:', error)
            sendResponse({ success: false, message: 'Failed to capture screenshot' })
          }
          return true
        }
        // Download data on user request
        if (message.action === 'downloadData') {
          try {
            console.log('downloadData')
            const success = yield uploadDataToServer()
            sendResponse({ success })
          } catch (error) {
            console.error('Error handling download:', error)
            sendResponse({ success: false, error: error.message })
          }
          return true
        }
        if (message.action === 'clearMemoryCache') {
          try {
            interactions = []
            screenshots = []
            reasonsAnnotation = []
            actionSequenceId = 0
            sendResponse({ success: true })
          } catch (error) {
            console.error('Error handling clearMemoryCache:', error)
            sendResponse({ success: false, error: error.message })
          }
          return true
        }
        if (
          message.action === 'getRecipe' &&
          ((_b = sender.tab) === null || _b === void 0 ? void 0 : _b.id)
        ) {
          try {
            selectRecipe(sender.tab.id, message.url)
              .then((recipe) => {
                sendResponse({ recipe: recipe })
              })
              .catch((error) => {
                sendResponse({ error: error.message })
              })
          } catch (error) {
            console.error('Error handling getRecipe:', error)
            sendResponse({ success: false, error: error.message })
          }
          return true // Indicate that sendResponse will be called asynchronously
        }
      }))()
    return true // Keeps the message channel open for async responses
  })
  // Capture the screenshot in the current tab
  function captureScreenshot() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true })
        if (tab) {
          return yield chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 25 })
        }
      } catch (error) {
        console.error('Error capturing screenshot:', error)
      }
      return null
    })
  }
  function hashCode(str) {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0
    }
    console.log('Hash value before return:', hash)
    return hash.toString()
  }
  // listen to switches between activated tabs
  chrome.tabs.onActivated.addListener((activeInfo) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const tabId = activeInfo.tabId
        const tab = yield chrome.tabs.get(tabId)
        if (!tab) {
          console.error(`Failed to get tab with ID: ${tabId}`)
          return
        }
        console.log(`Switched to tab ${tabId} with URL: ${tab.url}`)
        if (tab.url && tab.url.includes('amazon.com')) {
          const timestamp = new Date().toISOString()
          const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}`
          chrome.tabs.sendMessage(tabId, { action: 'getHTML' }, (response) =>
            __awaiter(void 0, void 0, void 0, function* () {
              const htmlContent = response === null || response === void 0 ? void 0 : response.html
              let result = yield chrome.storage.local.get({ htmlSnapshots: {} })
              const htmlSnapshots = result.htmlSnapshots || {}
              htmlSnapshots[currentSnapshotId] = htmlContent
              yield chrome.storage.local.set({ htmlSnapshots })
              actionSequenceId++
              const currentactionSequenceId = actionSequenceId
              const data = {
                eventType: 'tabActivate',
                timestamp: timestamp,
                target_url: tab.url,
                htmlSnapshotId: currentSnapshotId,
                actionSequenceId: currentactionSequenceId
              }
              let interactions = yield chrome.storage.local.get({ interactions: [] })
              let storeInteractions = interactions.interactions || []
              storeInteractions.push(data)
              yield chrome.storage.local.set({ interactions: storeInteractions })
              const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(tab.windowId, {
                format: 'jpeg',
                quality: 25
              })
              const screenshotId = `screenshot_${timestamp}`
              yield saveScreenshot(screenshotDataUrl, screenshotId)
              console.log('send message to popup tabActivate')
              const question = getCustomQuestion('tabActivate', data)
              if (Math.random() < navigation_probability && tabId) {
                try {
                  const reason = yield chrome.tabs.sendMessage(tabId, {
                    action: 'show_popup',
                    question: question
                  })
                  if (reason && reason.input !== null) {
                    const newitem = {
                      actionSequenceId: currentactionSequenceId,
                      timestamp: timestamp,
                      eventType: 'tabActivate',
                      reason: reason
                    }
                    let result = yield chrome.storage.local.get({ reasonsAnnotation: [] })
                    let storeReasonsAnnotation = result.reasonsAnnotation || []
                    // Add new reason
                    storeReasonsAnnotation.push(newitem)
                    // Save back to storage
                    yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation })
                  }
                } catch (error) {
                  console.error('Error popup:', error)
                }
              }
            })
          )
        }
      } catch (error) {
        console.error('Error in tab activate handler:', error)
      }
    })
  )
  function selectRecipe(tabId, url) {
    return __awaiter(this, void 0, void 0, function* () {
      const parsedUrl = new URL(url)
      const path = parsedUrl.pathname
      for (const recipe of _recipe__WEBPACK_IMPORTED_MODULE_0__.recipes) {
        const matchMethod = recipe.match_method || 'text'
        if (matchMethod === 'text') {
          try {
            // Execute script in tab to check for matching element
            const [{ result: hasMatch }] = yield chrome.scripting.executeScript({
              target: { tabId },
              func: (selector, matchText) => {
                var _a, _b
                const element = document.querySelector(selector)
                return (
                  element &&
                  (!matchText ||
                    ((_b =
                      (_a = element.textContent) === null || _a === void 0
                        ? void 0
                        : _a.toLowerCase().includes(matchText.toLowerCase())) !== null &&
                    _b !== void 0
                      ? _b
                      : false))
                )
              },
              args: [recipe.match, recipe.match_text || '']
            })
            if (hasMatch) {
              return recipe
            }
          } catch (error) {
            console.error('Error checking text match:', error)
          }
        } else if (matchMethod === 'url' && recipe.match === path) {
          return recipe
        }
      }
      throw new Error(`No matching recipe found for path: ${path}`)
    })
  }
  chrome.webNavigation.onCommitted.addListener((details) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (details.frameId !== 0) return
      console.log('webNavigation onCommitted event triggered:', details)
      if (details.url.includes('amazon.com')) {
        const navigationType = analyzeNavigation(details.tabId, details.url)
        console.log(`Navigation type: ${navigationType} for tab ${details.tabId} to ${details.url}`)
        const timestamp = new Date().toISOString()
        chrome.tabs.sendMessage(details.tabId, { action: 'getHTML' }, (response) =>
          __awaiter(void 0, void 0, void 0, function* () {
            const htmlContent = response === null || response === void 0 ? void 0 : response.html
            const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}`
            let result = yield chrome.storage.local.get({ htmlSnapshots: {} })
            const htmlSnapshots = result.htmlSnapshots || {}
            htmlSnapshots[currentSnapshotId] = htmlContent
            yield chrome.storage.local.set({ htmlSnapshots })
            actionSequenceId++
            const currentactionSequenceId = actionSequenceId
            const data = {
              eventType: 'navigation',
              navigationType: navigationType,
              timestamp: timestamp,
              target_url: details.url,
              htmlSnapshotId: currentSnapshotId,
              actionSequenceId: currentactionSequenceId
            }
            let interactions = yield chrome.storage.local.get({ interactions: [] })
            let storeInteractions = interactions.interactions || []
            storeInteractions.push(data)
            yield chrome.storage.local.set({ interactions: storeInteractions })
            // add screenshot
            const tab = yield chrome.tabs.get(details.tabId)
            const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(tab.windowId, {
              format: 'jpeg',
              quality: 25
            })
            const screenshotId = `screenshot_${timestamp}`
            yield saveScreenshot(screenshotDataUrl, screenshotId)
            if (navigationType !== 'new' && navigationType !== 'reload') {
              console.log('send message to popup navigation')
              const question = getCustomQuestion('navigation', data)
              if (Math.random() < navigation_probability && details.tabId) {
                try {
                  const reason = yield chrome.tabs.sendMessage(details.tabId, {
                    action: 'show_popup',
                    question: question
                  })
                  if (reason && reason.input !== null) {
                    const newitem = {
                      actionSequenceId: currentactionSequenceId,
                      timestamp: timestamp,
                      eventType: 'navigation',
                      reason: reason
                    }
                    let result = yield chrome.storage.local.get({ reasonsAnnotation: [] })
                    let storeReasonsAnnotation = result.reasonsAnnotation || []
                    // Add new reason
                    storeReasonsAnnotation.push(newitem)
                    // Save back to storage
                    yield chrome.storage.local.set({ reasonsAnnotation: storeReasonsAnnotation })
                  }
                } catch (error) {
                  console.error('Error popup:', error)
                }
              }
            }
          })
        )
      }
    })
  )
  // Add cleanup when tab is closed
  chrome.tabs.onRemoved.addListener((tabId) => {
    delete tabNavigationHistory[tabId]
  })
  // Add this function to handle data upload
  function uploadDataToServer() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
        const folderName = `DATA/SESSION_${timestamp}`
        // Get userId and data from storage
        const userIdResult = yield chrome.storage.local.get({ userId: '' })
        const currentUserId = userIdResult.userId
        const snapshots = yield chrome.storage.local.get({ htmlSnapshots: [] })
        const interact = yield chrome.storage.local.get({ interactions: [] })
        const orderDetails = yield chrome.storage.local.get({ orderDetails: [] })
        const screen = yield chrome.storage.local.get({ screenshots: [] })
        const ReasonsAnnotation = yield chrome.storage.local.get({ reasonsAnnotation: [] })
        let htmlSnapshots = snapshots.htmlSnapshots || {}
        let storeInteractions = interact.interactions || []
        let storeorderDetails = orderDetails.orderDetails || []
        let storeScreenshots = screen.screenshots || []
        let storeReasonsAnnotation = ReasonsAnnotation.reasonsAnnotation || []
        // const allInteractions = [...storeInteractions, ...interactions];
        // const allScreenshots = [...storeScreenshots, ...screenshots];
        // const allReasons = [...storeReasonsAnnotation, ...reasonsAnnotation];
        // Upload session info
        const sessionInfo = new Blob(
          [
            `Session data for timestamp: ${timestamp}, user id: ${currentUserId} \n order details: \n ${JSON.stringify(
              orderDetails
            )}`
          ],
          { type: 'text/plain' }
        )
        const sessionFormData = new FormData()
        sessionFormData.append('file', sessionInfo, `${folderName}/session_info.txt`)
        console.log('uploading session info')
        yield fetch(upload_url, {
          method: 'POST',
          body: sessionFormData
        })
        // Upload HTML snapshots as separate files
        console.log('uploading html snapshots')
        for (const [snapshotId, htmlContent] of Object.entries(htmlSnapshots)) {
          const htmlBlob = new Blob([htmlContent], { type: 'text/html' })
          const formData = new FormData()
          formData.append('file', htmlBlob, `${folderName}/html/${snapshotId}.html`)
          yield fetch(upload_url, { method: 'POST', body: formData })
        }
        // Upload interactions JSON
        console.log('uploading interactions')
        const fullData = {
          interactions: storeInteractions,
          reasons: storeReasonsAnnotation,
          orderDetails: orderDetails
        }
        const interactionsBlob = new Blob([JSON.stringify(fullData, null, 2)], {
          type: 'application/json'
        })
        const jsonFormData = new FormData()
        jsonFormData.append('file', interactionsBlob, `${folderName}/interactions.json`)
        yield fetch(upload_url, {
          method: 'POST',
          body: jsonFormData
        })
        // Upload screenshots
        console.log('uploading screenshots')
        for (const [screenshotData, screenshotId] of storeScreenshots) {
          const response = yield fetch(screenshotData)
          const blob = yield response.blob()
          const formData = new FormData()
          formData.append(
            'file',
            blob,
            `${folderName}/screenshots/${screenshotId.replace(/[:.]/g, '-')}.jpg`
          )
          console.log('uploading screenshots')
          yield fetch(upload_url, {
            method: 'POST',
            body: formData
          })
        }
        // Clear cache after successful upload
        chrome.storage.local.remove([
          'htmlSnapshots',
          'interactions',
          'orderDetails',
          'screenshots',
          'reasonsAnnotation'
        ])
        interactions.length = 0
        screenshots.length = 0
        reasonsAnnotation.length = 0
        return true
      } catch (error) {
        console.error('Error uploading data:', error)
        return false
      }
    })
  }
  // Start the periodic upload timer
  function startPeriodicUpload() {
    if (!uploadTimer) {
      uploadTimer = setInterval(uploadDataToServer, 60000) // 60 seconds
    }
  }
  // Stop the periodic upload timer
  function stopPeriodicUpload() {
    if (uploadTimer) {
      clearInterval(uploadTimer)
      uploadTimer = null
    }
  }
  // startPeriodicUpload();

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CO0FBQ2xGLDhEQUE4RCxrQkFBa0I7QUFDaEYsa0VBQWtFLGtCQUFrQjtBQUNwRiw0REFBNEQsaUJBQWlCO0FBQzdFLHVFQUF1RSx1QkFBdUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLFVBQVUsYUFBYSxlQUFlLHVCQUF1Qiw2QkFBNkIsTUFBTSxvQkFBb0I7QUFDN0w7QUFDQSwyREFBMkQsV0FBVztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsbUJBQW1CO0FBQzlFO0FBQ0EscURBQXFELFdBQVcsUUFBUSxXQUFXO0FBQ25GLDBDQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRiwwQkFBMEI7QUFDL0c7QUFDQSw2REFBNkQsV0FBVztBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVcsZUFBZSxtQ0FBbUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYmFja2dyb3VuZF90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gICAgXCJzZWxlY3RvclwiOiBcIiNuYXYtc2VhcmNoLWJhci1mb3JtXCIsXG4gICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94XCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hfaW5wdXRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b25cIixcbiAgICAgICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJzZWFyY2hfYnV0dG9uXCIsXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gICAge1xuICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0XCIsXG4gICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgXCJjbGFzc1wiOiBcInJlZmluZW1lbnQtdGl0bGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcInVsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpXCIsXG4gICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgXCJuYW1lXCI6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgIFwiY2xpY2thYmxlXCI6IHRydWUsXG4gICAgICAgIFwiY2xpY2tfc2VsZWN0b3JcIjogXCJhXCIsXG4gICAgICAgIFwiZGlyZWN0X2NoaWxkXCI6IHRydWUsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW3sgXCJzZWxlY3RvclwiOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiB9XSxcbiAgICB9LFxuXTtcbmV4cG9ydCBjb25zdCByZWNpcGVzID0gW1xuICAgIHtcbiAgICAgICAgXCJtYXRjaFwiOiBcIi9cIixcbiAgICAgICAgXCJtYXRjaF9tZXRob2RcIjogXCJ1cmxcIixcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcImh0bWxcIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7IFwic2VsZWN0b3JcIjogXCJoZWFkXCIsIFwiY2hpbGRyZW5cIjogW3sgXCJzZWxlY3RvclwiOiBcInRpdGxlXCIsIFwiYWRkX3RleHRcIjogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJib2R5XCIsXG4gICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbbmF2XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibWF0Y2hcIjogXCIvc1wiLFxuICAgICAgICBcIm1hdGNoX21ldGhvZFwiOiBcInVybFwiLFxuICAgICAgICBcInNlbGVjdG9yXCI6IFwiaHRtbFwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHsgXCJzZWxlY3RvclwiOiBcImhlYWRcIiwgXCJjaGlsZHJlblwiOiBbeyBcInNlbGVjdG9yXCI6IFwidGl0bGVcIiwgXCJhZGRfdGV4dFwiOiB0cnVlIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImJvZHlcIixcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3MtcmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJlZmluZW1lbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXYuYS1zZWN0aW9uLmEtc3BhY2luZy1ub25lOm5vdCg6aGFzKCNuLXRpdGxlKSk6aGFzKHNwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCk6aGFzKHVsIHNwYW4uYS1kZWNsYXJhdGl2ZSA+IHNwYW4gPiBsaSk6bm90KCNyZXZpZXdzUmVmaW5lbWVudHMpOm5vdCgjZGVwYXJ0bWVudHMpOm5vdCgjcHJpY2VSZWZpbmVtZW50cyk6bm90KCNmaWx0ZXJzKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X3NlbGVjdG9yXCI6IFwic3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogcmVmaW5lbWVudF9vcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjZGVwYXJ0bWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGVwYXJ0bWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImxpIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZnJvbV90ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNyZXZpZXdzUmVmaW5lbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicmV2aWV3c19yZWZpbmVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwibGkgYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwic2VhcmNoX3Jlc3VsdHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnNlcnRfc3BsaXRfbWFya2VyXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeVwiOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dF9zZWxlY3RvclwiOiBcInNwYW4uYS1zaXplLWJhc2UtcGx1cy5hLWNvbG9yLWJhc2UuYS10ZXh0LW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlYXJjaC1yZXN1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImRpdltkYXRhLWN5PSd0aXRsZS1yZWNpcGUnXSBhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZpZXdfcHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXJldmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5hLWljb24tYWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1yYXRpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcInNwYW4uYS1zaXplLWJhc2Uucy11bmRlcmxpbmUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X2Zvcm1hdFwiOiBcInt9IHJldmlld3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwcm9kdWN0LXJhdGluZy1jb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXZbZGF0YS1jeT0ncHJpY2UtcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiYS5hLWxpbmstbm9ybWFsID4gc3Bhbi5hLXByaWNlID4gc3Bhbi5hLW9mZnNjcmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCJkaXZbZGF0YS1jeT0nZGVsaXZlcnktcmVjaXBlJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3QtZGVsaXZlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcInNwYW4ucy1wYWdpbmF0aW9uLXN0cmlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwYWdpbmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIucy1wYWdpbmF0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmcm9tX3RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm1hdGNoXCI6IFwiI3Byb2R1Y3RUaXRsZVwiLFxuICAgICAgICBcIm1hdGNoX3RleHRcIjogXCJcIixcbiAgICAgICAgXCJzZWxlY3RvclwiOiBcImh0bWxcIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVcIjogXCJyZXR1cm4gISFhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVfY2FsbGJhY2tcIjogXCJyZXR1cm4gYXJndW1lbnRzWzBdXCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgeyBcInNlbGVjdG9yXCI6IFwiaGVhZFwiLCBcImNoaWxkcmVuXCI6IFt7IFwic2VsZWN0b3JcIjogXCJ0aXRsZVwiLCBcImFkZF90ZXh0XCI6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiYm9keVwiLFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjY2VudGVyQ29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0b3JcIjogXCIjdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtlZXBfYXR0clwiOiBbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJyZXZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcInNwYW4uYS1pY29uLWFsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNhY3JDdXN0b21lclJldmlld1RleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFkZF90ZXh0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2FwZXhfZGVza3RvcF9uZXdBY2NvcmRpb25Sb3cgI2NvcmVQcmljZURpc3BsYXlfZGVza3RvcF9mZWF0dXJlX2RpdiBzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0X2Zvcm1hdFwiOiBcIlByaWNlOiB7fVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1wcmljZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI3R3aXN0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBcInByb2R1Y3Qtb3B0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcImxhYmVsLmEtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwic3Bhbi5zZWxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2FkZFRvQ2FydDpoYXMoI2J1eS1ub3ctYnV0dG9uKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYWRkX3RvX2NhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RvclwiOiBcIiNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1mYWN0c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhZGRfdGV4dFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1kZWxpdmVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdG9yXCI6IFwiI2J1eS1ub3ctYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWRkX3RleHRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlja2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYnV5X25vd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFwicHJvZHVjdC1idXktbm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmVmb3JlX2hvb2tcIjogYFxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLmlubmVyVGV4dFxuY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheVwiKS5pbm5lclRleHRcbmNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKVwiKSkubWFwKGEgPT4gKHtsYWJlbDogYS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuYS1mb3JtLWxhYmVsXCIpLmlubmVyVGV4dCwgdmFsdWU6IGEucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpLmlubmVyVGV4dH0pKVxuY29uc3Qgb3B0aW9uc19kaWN0ID0ge31cbmZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zX2RpY3Rbb3B0aW9uW1wibGFiZWxcIl0ucmVwbGFjZShcIjogXCIsIFwiXCIpXSA9IG9wdGlvbltcInZhbHVlXCJdXG59XG5jb25zdCBhc2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I0FTSU5cIikudmFsdWVcbmNvbnNvbGUubG9nKHt0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbn0pXG5yZXR1cm4ge3RpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2lufVxuYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJtYXRjaFwiOiBcIi9hcC9zaWduaW5cIixcbiAgICAgICAgXCJtYXRjaF9tZXRob2RcIjogXCJ1cmxcIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVcIjogXCJyZXR1cm4gISFhcmd1bWVudHNbMF1cIixcbiAgICAgICAgXCJ0ZXJtaW5hdGVfY2FsbGJhY2tcIjogXCJyZXR1cm4gYXJndW1lbnRzWzBdXCIsXG4gICAgICAgIFwic2VsZWN0b3JcIjogXCJodG1sXCIsXG4gICAgfSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNyYy9iYWNrZ3JvdW5kX3Rlc3QudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCA9PT0gMCkgeyAvLyBPbmx5IGluamVjdCBpbnRvIHRoZSBtYWluIGZyYW1lXG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbiAgICAgICAgICAgIGZpbGVzOiBbXCJqcy9pbmplY3RlZC5qc1wiXSxcbiAgICAgICAgICAgIHdvcmxkOiBcIk1BSU5cIiAvLyBFbnN1cmVzIHRoZSBzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGUgbWFpbiB3b3JsZFxuICAgICAgICB9KTtcbiAgICB9XG59LCB7IHVybDogW3sgdXJsTWF0Y2hlczogXCIuKmFtYXpvblxcXFwuY29tLipcIiB9XSB9KTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi9yZWNpcGUnO1xubGV0IHVwbG9hZF91cmwgPSBcImh0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZFwiO1xubGV0IGludGVyYWN0aW9ucyA9IFtdO1xuY29uc3QgaW50ZXJhY3Rpb25zTGltaXQgPSAxMDA7XG5sZXQgc2NyZWVuc2hvdHMgPSBbXTtcbmxldCByZWFzb25zQW5ub3RhdGlvbiA9IFtdO1xuY29uc3QgcmVhc29uc0xpbWl0ID0gMTAwO1xuY29uc3Qgc2NyZWVuc2hvdExpbWl0ID0gMTAwO1xubGV0IGFjdGlvblNlcXVlbmNlSWQgPSAwO1xubGV0IHVwbG9hZFRpbWVyID0gbnVsbDtcbmxldCB1c2VySWQgPSBcIlwiO1xubGV0IG5hdmlnYXRpb25fcHJvYmFiaWxpdHkgPSAxO1xubGV0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMTtcbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5ID0ge307XG5mdW5jdGlvbiBhbmFseXplTmF2aWdhdGlvbih0YWJJZCwgdXJsKSB7XG4gICAgaWYgKCF0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0pIHtcbiAgICAgICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGhpc3RvcnkgPSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG4gICAgaWYgKCFoaXN0b3J5LmN1cnJlbnRVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gJ25ldyc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmN1cnJlbnRVcmwgPT09IHVybCkge1xuICAgICAgICByZXR1cm4gJ3JlbG9hZCc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggPiAwICYmXG4gICAgICAgIGhpc3RvcnkuYmFja1N0YWNrW2hpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmJhY2tTdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuICdiYWNrJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuZm9yd2FyZFN0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2ZvcndhcmQnO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sgPSBbXTtcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgcmV0dXJuICduZXcnO1xufVxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5mdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGUsIGRhdGEpIHtcbiAgICB2YXIgX2E7XG4gICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgICAgICAgIGlmIChkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGNob29zZSAnU2V0IFVwIE5vdycgaW5zdGVhZCBvZiBidXkgb25jZSwgYW5kIHdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgY2hvb3NlIHRvIGJ1eSB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHksIGFuZCB3aGF0IGNvbnZpbmNlZCB5b3UgdG8gc2tpcCBmdXJ0aGVyIGV4cGxvcmF0aW9uIG9mIG90aGVyIG9wdGlvbnM/IFdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChfYSA9IGRhdGEudGFyZ2V0LmNsYXNzTmFtZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluY2x1ZGVzKCdzYy1wcm9kdWN0LWxpbmsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoYXQgbWFkZSB5b3UgY2xpY2sgb24gdGhpcyBwcm9kdWN0LCBhbmQgd2hhdCBzcGVjaWZpYyBhc3BlY3RzIGF0dHJhY3RlZCB5b3VyIGF0dGVudGlvbiBjb21wYXJlZCB0byBvdGhlciBzZWFyY2ggcmVzdWx0cz9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGRlY2lkZSB0byBhZGQgdGhpcyBpdGVtIHRvIHlvdXIgY2FydCwgYW5kIGFyZSB5b3UgcGxhbm5pbmcgdG8gYnV5IGl0IG5vdyBvciBsYXRlcj8gV2hhdCBjb252aW5jZWQgeW91IHRoYXQgdGhpcyBpdGVtIHdhcyB0aGUgcmlnaHQgY2hvaWNlIGZvciB5b3VyIG5lZWRzP1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2hhdCB3YXMgeW91ciByZWFzb24gZm9yIGNsaWNraW5nIG9uIHRoaXMgZWxlbWVudD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiBcIldoYXQgYXJlIHlvdSBkb2luZyB3aGlsZSBzY3JvbGxpbmfigJRhcmUgeW91IGJyb3dzaW5nIHNlYXJjaCByZXN1bHRzLCBsb29raW5nIGF0IHJldmlld3MsIG9yIHNvbWV0aGluZyBlbHNlLCBhbmQgd2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kP1wiO1xuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICByZXR1cm4gXCJXaGF0IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciwgYW5kIGhvdyBkaWQgeW91IGRlY2lkZSBvbiB0aGUgc2VhcmNoIHRlcm1zIHlvdSB1c2VkPyBBcmUgeW91IGxvb2tpbmcgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdCwgYnJhbmQsIG9yIGZlYXR1cmU/XCI7XG4gICAgICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGRlY2lkZSB0byBnbyBiYWNrIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBhbmQgd2hhdCB3ZXJlIHlvdSBob3BpbmcgdG8gcmV2aXNpdCBvciByZWNvbnNpZGVyP1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYXZpZ2F0aW9uVHlwZSA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiV2h5IGRpZCB5b3UgZGVjaWRlIHRvIHJldHVybiB0byB0aGlzIHBhZ2UgYWZ0ZXIgcHJldmlvdXNseSBuYXZpZ2F0aW5nIGF3YXksIGFuZCB3aGF0IG5ldyBvciB1bnJlc29sdmVkIGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3Igbm93P1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2A7XG4gICAgICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgICAgICAgIHJldHVybiBgV2h5IGRpZCB5b3Ugc3dpdGNoIHRvIHRoaXMgdGFiPyBEbyB5b3UgaGF2ZSBzcGVjaWZpYyB0YXNrIG9yIGluZm9ybWF0aW9uIGluIG1pbmQ/YDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gO1xuICAgIH1cbn1cbi8vIEFkZCBuZXcgZnVuY3Rpb24gdG8gaGFuZGxlIHNjcmVlbnNob3Qgc2F2aW5nXG5mdW5jdGlvbiBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAvLyBHZXQgZXhpc3Rpbmcgc2NyZWVuc2hvdHMgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgJ3NjcmVlbnNob3RzJzogW10gfSk7XG4gICAgICAgICAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHJlc3VsdC5zY3JlZW5zaG90cyB8fCBbXTtcbiAgICAgICAgICAgIC8vIEFkZCBuZXcgc2NyZWVuc2hvdFxuICAgICAgICAgICAgc3RvcmVTY3JlZW5zaG90cy5wdXNoKFtzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkXSk7XG4gICAgICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgJ3NjcmVlbnNob3RzJzogc3RvcmVTY3JlZW5zaG90cyB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3NhdmVEYXRhJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZURhdGEgJywgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSk7XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvblNlcXVlbmNlSWQpO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZGF0YS5hY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZDtcbiAgICAgICAgICAgICAgICAvLyDnm7TmjqXlrZjlgqjliLAgY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiByZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24obWVzc2FnZS5kYXRhLmV2ZW50VHlwZSwgbWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHBvcHVwX3Byb2JhYmlsaXR5ICYmICgoX2EgPSBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShzZW5kZXIudGFiLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnc2hvd19wb3B1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3aXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogbWVzc2FnZS5kYXRhLmFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbWVzc2FnZS5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHJlc3VsdC5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbmV3IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVhc29uc0Fubm90YXRpb24ucHVzaChuZXdpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9wdXA6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzYXZlRGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FwdHVyZSBzY3JlZW5zaG90IG9uIGRlbWFuZFxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjYXB0dXJlU2NyZWVuc2hvdCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBzY3JlZW5zaG90IHJlcXVlc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgbWVzc2FnZS5zY3JlZW5zaG90SWQpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzLCBtZXNzYWdlOiBzdWNjZXNzID8gdW5kZWZpbmVkIDogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjYXB0dXJlU2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIERvd25sb2FkIGRhdGEgb24gdXNlciByZXF1ZXN0XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2Rvd25sb2FkRGF0YScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkRGF0YScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCB1cGxvYWREYXRhVG9TZXJ2ZXIoKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgZG93bmxvYWQ6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NsZWFyTWVtb3J5Q2FjaGUnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgIHNjcmVlbnNob3RzID0gW107XG4gICAgICAgICAgICAgICAgcmVhc29uc0Fubm90YXRpb24gPSBbXTtcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkID0gMDtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgY2xlYXJNZW1vcnlDYWNoZTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0UmVjaXBlJyAmJiAoKF9iID0gc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmlkKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RSZWNpcGUoc2VuZGVyLnRhYi5pZCwgbWVzc2FnZS51cmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZWNpcGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgcmVjaXBlOiByZWNpcGUgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGdldFJlY2lwZTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEluZGljYXRlIHRoYXQgc2VuZFJlc3BvbnNlIHdpbGwgYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIH1cbiAgICB9KSkoKTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcHMgdGhlIG1lc3NhZ2UgY2hhbm5lbCBvcGVuIGZvciBhc3luYyByZXNwb25zZXNcbn0pO1xuLy8gQ2FwdHVyZSB0aGUgc2NyZWVuc2hvdCBpbiB0aGUgY3VycmVudCB0YWJcbmZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBbdGFiXSA9IHlpZWxkIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHsgZm9ybWF0OiAnanBlZycsIHF1YWxpdHk6IDI1IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOlwiLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuLy8gbGlzdGVuIHRvIHN3aXRjaGVzIGJldHdlZW4gYWN0aXZhdGVkIHRhYnNcbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKChhY3RpdmVJbmZvKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJJZCA9IGFjdGl2ZUluZm8udGFiSWQ7XG4gICAgICAgIGNvbnN0IHRhYiA9IHlpZWxkIGNocm9tZS50YWJzLmdldCh0YWJJZCk7XG4gICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHRhYiB3aXRoIElEOiAke3RhYklkfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBTd2l0Y2hlZCB0byB0YWIgJHt0YWJJZH0gd2l0aCBVUkw6ICR7dGFiLnVybH1gKTtcbiAgICAgICAgaWYgKHRhYi51cmwgJiYgdGFiLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUodGFiLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IHt9IH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGh0bWxDb250ZW50O1xuICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSk7XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkID0gYWN0aW9uU2VxdWVuY2VJZDtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IFwidGFiQWN0aXZhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldF91cmw6IHRhYi51cmwsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25zID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdGlvbnMuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgICAgIHN0b3JlSW50ZXJhY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHRhYi53aW5kb3dJZCwgeyBmb3JtYXQ6ICdqcGVnJywgcXVhbGl0eTogMjUgfSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgICAgICB5aWVsZCBzYXZlU2NyZWVuc2hvdChzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCBtZXNzYWdlIHRvIHBvcHVwIHRhYkFjdGl2YXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBnZXRDdXN0b21RdWVzdGlvbihcInRhYkFjdGl2YXRlXCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSAmJiB0YWJJZCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhc29uID0geWllbGQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdzaG93X3BvcHVwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24uaW5wdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkOiBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZTogXCJ0YWJBY3RpdmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHJlc3VsdC5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbmV3IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVhc29uc0Fubm90YXRpb24ucHVzaChuZXdpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9wdXA6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0YWIgYWN0aXZhdGUgaGFuZGxlcjonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHRhYklkLCB1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgICAgIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCBcInRleHRcIjtcbiAgICAgICAgICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHNjcmlwdCBpbiB0YWIgdG8gY2hlY2sgZm9yIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW3sgcmVzdWx0OiBoYXNNYXRjaCB9XSA9IHlpZWxkIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmM6IChzZWxlY3RvciwgbWF0Y2hUZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgKCFtYXRjaFRleHQgfHwgKChfYiA9IChfYSA9IGVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG1hdGNoVGV4dC50b0xvd2VyQ2FzZSgpKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbcmVjaXBlLm1hdGNoLCByZWNpcGUubWF0Y2hfdGV4dCB8fCBcIlwiXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hlY2tpbmcgdGV4dCBtYXRjaDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoTWV0aG9kID09PSBcInVybFwiICYmIHJlY2lwZS5tYXRjaCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWNpcGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKTtcbiAgICB9KTtcbn1cbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoZGV0YWlscy5mcmFtZUlkICE9PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc29sZS5sb2coJ3dlYk5hdmlnYXRpb24gb25Db21taXR0ZWQgZXZlbnQgdHJpZ2dlcmVkOicsIGRldGFpbHMpO1xuICAgIGlmIChkZXRhaWxzLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpKSB7XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25UeXBlID0gYW5hbHl6ZU5hdmlnYXRpb24oZGV0YWlscy50YWJJZCwgZGV0YWlscy51cmwpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTmF2aWdhdGlvbiB0eXBlOiAke25hdmlnYXRpb25UeXBlfSBmb3IgdGFiICR7ZGV0YWlscy50YWJJZH0gdG8gJHtkZXRhaWxzLnVybH1gKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShkZXRhaWxzLnRhYklkLCB7IGFjdGlvbjogJ2dldEhUTUwnIH0sIChyZXNwb25zZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5odG1sO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKGRldGFpbHMudXJsKX1fJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiB7fSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICAgICAgICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gaHRtbENvbnRlbnQ7XG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xuICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25UeXBlOiBuYXZpZ2F0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICB0YXJnZXRfdXJsOiBkZXRhaWxzLnVybCxcbiAgICAgICAgICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGludGVyYWN0aW9ucyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdGlvbnMuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgc3RvcmVJbnRlcmFjdGlvbnMucHVzaChkYXRhKTtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogc3RvcmVJbnRlcmFjdGlvbnMgfSk7XG4gICAgICAgICAgICAvLyBhZGQgc2NyZWVuc2hvdFxuICAgICAgICAgICAgY29uc3QgdGFiID0geWllbGQgY2hyb21lLnRhYnMuZ2V0KGRldGFpbHMudGFiSWQpO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih0YWIud2luZG93SWQsIHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdqcGVnJyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5OiAyNVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgeWllbGQgc2F2ZVNjcmVlbnNob3Qoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZCk7XG4gICAgICAgICAgICBpZiAobmF2aWdhdGlvblR5cGUgIT09ICduZXcnICYmIG5hdmlnYXRpb25UeXBlICE9PSAncmVsb2FkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIG1lc3NhZ2UgdG8gcG9wdXAgbmF2aWdhdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oXCJuYXZpZ2F0aW9uXCIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSAmJiBkZXRhaWxzLnRhYklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShkZXRhaWxzLnRhYklkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnc2hvd19wb3B1cCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3aXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IHJlc3VsdC5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbmV3IHJlYXNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlUmVhc29uc0Fubm90YXRpb24ucHVzaChuZXdpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9wdXA6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxufSkpO1xuLy8gQWRkIGNsZWFudXAgd2hlbiB0YWIgaXMgY2xvc2VkXG5jaHJvbWUudGFicy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKHRhYklkKSA9PiB7XG4gICAgZGVsZXRlIHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXTtcbn0pO1xuLy8gQWRkIHRoaXMgZnVuY3Rpb24gdG8gaGFuZGxlIGRhdGEgdXBsb2FkXG5mdW5jdGlvbiB1cGxvYWREYXRhVG9TZXJ2ZXIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9bOi5dL2csICctJyk7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJOYW1lID0gYERBVEEvU0VTU0lPTl8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgLy8gR2V0IHVzZXJJZCBhbmQgZGF0YSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnN0IHVzZXJJZFJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHVzZXJJZDogXCJcIiB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB1c2VySWRSZXN1bHQudXNlcklkO1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBvcmRlckRldGFpbHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2NyZWVuID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgc2NyZWVuc2hvdHM6IFtdIH0pO1xuICAgICAgICAgICAgY29uc3QgUmVhc29uc0Fubm90YXRpb24gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICBsZXQgaHRtbFNuYXBzaG90cyA9IHNuYXBzaG90cy5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgbGV0IHN0b3JlSW50ZXJhY3Rpb25zID0gaW50ZXJhY3QuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3Jlb3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gc2NyZWVuLnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSBSZWFzb25zQW5ub3RhdGlvbi5yZWFzb25zQW5ub3RhdGlvbiB8fCBbXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbEludGVyYWN0aW9ucyA9IFsuLi5zdG9yZUludGVyYWN0aW9ucywgLi4uaW50ZXJhY3Rpb25zXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFNjcmVlbnNob3RzID0gWy4uLnN0b3JlU2NyZWVuc2hvdHMsIC4uLnNjcmVlbnNob3RzXTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGFsbFJlYXNvbnMgPSBbLi4uc3RvcmVSZWFzb25zQW5ub3RhdGlvbiwgLi4ucmVhc29uc0Fubm90YXRpb25dO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNlc3Npb24gaW5mb1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkluZm8gPSBuZXcgQmxvYihbYFNlc3Npb24gZGF0YSBmb3IgdGltZXN0YW1wOiAke3RpbWVzdGFtcH0sIHVzZXIgaWQ6ICR7Y3VycmVudFVzZXJJZH0gXFxuIG9yZGVyIGRldGFpbHM6IFxcbiAke0pTT04uc3RyaW5naWZ5KG9yZGVyRGV0YWlscyl9YF0sIHsgdHlwZTogJ3RleHQvcGxhaW4nIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBzZXNzaW9uRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgc2Vzc2lvbkluZm8sIGAke2ZvbGRlck5hbWV9L3Nlc3Npb25faW5mby50eHRgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2Vzc2lvbiBpbmZvJyk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogc2Vzc2lvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBIVE1MIHNuYXBzaG90cyBhcyBzZXBhcmF0ZSBmaWxlc1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBodG1sIHNuYXBzaG90cycpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbc25hcHNob3RJZCwgaHRtbENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGh0bWxTbmFwc2hvdHMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbEJsb2IgPSBuZXcgQmxvYihbaHRtbENvbnRlbnRdLCB7IHR5cGU6ICd0ZXh0L2h0bWwnIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaHRtbEJsb2IsIGAke2ZvbGRlck5hbWV9L2h0bWwvJHtzbmFwc2hvdElkfS5odG1sYCk7XG4gICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogZm9ybURhdGEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGxvYWQgaW50ZXJhY3Rpb25zIEpTT05cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaW50ZXJhY3Rpb25zJyk7XG4gICAgICAgICAgICBjb25zdCBmdWxsRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zLFxuICAgICAgICAgICAgICAgIHJlYXNvbnM6IHN0b3JlUmVhc29uc0Fubm90YXRpb24sXG4gICAgICAgICAgICAgICAgb3JkZXJEZXRhaWxzOiBvcmRlckRldGFpbHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbnNCbG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGZ1bGxEYXRhLCBudWxsLCAyKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgICAgICAgICAgY29uc3QganNvbkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBqc29uRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgaW50ZXJhY3Rpb25zQmxvYiwgYCR7Zm9sZGVyTmFtZX0vaW50ZXJhY3Rpb25zLmpzb25gKTtcbiAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBqc29uRm9ybURhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVXBsb2FkIHNjcmVlbnNob3RzXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtzY3JlZW5zaG90RGF0YSwgc2NyZWVuc2hvdElkXSBvZiBzdG9yZVNjcmVlbnNob3RzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChzY3JlZW5zaG90RGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IHlpZWxkIHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGJsb2IsIGAke2ZvbGRlck5hbWV9L3NjcmVlbnNob3RzLyR7c2NyZWVuc2hvdElkLnJlcGxhY2UoL1s6Ll0vZywgXCItXCIpfS5qcGdgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNjcmVlbnNob3RzJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENsZWFyIGNhY2hlIGFmdGVyIHN1Y2Nlc3NmdWwgdXBsb2FkXG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoWydodG1sU25hcHNob3RzJywgJ2ludGVyYWN0aW9ucycsICdvcmRlckRldGFpbHMnLCAnc2NyZWVuc2hvdHMnLCAncmVhc29uc0Fubm90YXRpb24nXSk7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgNjAwMDApOyAvLyA2MCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuLy8gc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
