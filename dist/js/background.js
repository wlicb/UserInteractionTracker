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
  /******/
  ;(() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/
  ;(() => {
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
    { url: [{ urlMatches: '.*amazon\\.com.*' }, { urlMatches: 'file://.*' }] }
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
  function saveScreenshot_1(screenshotDataUrl, screenshotId) {
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
            const saveData = () =>
              __awaiter(void 0, void 0, void 0, function* () {
                console.log('saveData ', message.data.eventType)
                actionSequenceId++
                console.log(actionSequenceId)
                message.data.actionSequenceId = actionSequenceId
                // 直接存储到 chrome.storage.local
                let result = yield chrome.storage.local.get({ interactions: [] })
                result = result.interactions || []
                result.push(message.data)
                yield chrome.storage.local.set({ interactions: result })
              })
            // popup
            // await sendPopup(sender.tab?.id, message.data.timestamp, message.data.eventType, actionSequenceId)
            yield Promise.all([
              saveData(),
              sendPopup(
                (_a = sender.tab) === null || _a === void 0 ? void 0 : _a.id,
                message.data.timestamp,
                message.data.eventType,
                message.data
              )
            ])
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
              const success = yield saveScreenshot_1(screenshotDataUrl, message.screenshotId)
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
  const saveHTML = (htmlContent, currentSnapshotId) =>
    __awaiter(void 0, void 0, void 0, function* () {
      let result = yield chrome.storage.local.get({ htmlSnapshots: {} })
      const htmlSnapshots = result.htmlSnapshots || {}
      htmlSnapshots[currentSnapshotId] = htmlContent
      yield chrome.storage.local.set({ htmlSnapshots })
    })
  const saveInteraction = (
    eventType,
    timestamp,
    target_url,
    htmlSnapshotId,
    currentactionSequenceId
  ) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const data = {
        eventType,
        timestamp,
        target_url,
        htmlSnapshotId,
        actionSequenceId: currentactionSequenceId
      }
      let interactions = yield chrome.storage.local.get({ interactions: [] })
      let storeInteractions = interactions.interactions || []
      storeInteractions.push(data)
      yield chrome.storage.local.set({ interactions: storeInteractions })
    })
  const saveScreenshot = (windowId, timestamp) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const screenshotDataUrl = yield chrome.tabs.captureVisibleTab(windowId, {
        format: 'jpeg',
        quality: 25
      })
      const screenshotId = `screenshot_${timestamp}`
      yield saveScreenshot_1(screenshotDataUrl, screenshotId)
    })
  const sendPopup = (tabId, timestamp, eventType, currentactionSequenceId, data) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const question = getCustomQuestion(eventType, data)
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
              eventType: eventType,
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
              // await saveHTML(htmlContent, currentSnapshotId)
              // await saveInteraction('tabActivate', timestamp, tab.url, currentSnapshotId, actionSequenceId)
              // await saveScreenshot(tab.windowId, timestamp)
              actionSequenceId++
              const currentactionSequenceId = actionSequenceId
              yield Promise.all([
                saveHTML(htmlContent, currentSnapshotId),
                saveInteraction(
                  'tabActivate',
                  timestamp,
                  tab.url,
                  currentSnapshotId,
                  currentactionSequenceId
                ),
                saveScreenshot(tab.windowId, timestamp),
                sendPopup(tabId, timestamp, 'tabActivate', currentactionSequenceId, {})
              ])
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
            // await saveHTML(htmlContent, currentSnapshotId)
            // await saveInteraction('navigation', timestamp, details.url, currentSnapshotId)
            // await saveScreenshot((await chrome.tabs.get(details.tabId)).windowId, timestamp)
            actionSequenceId++
            const currentactionSequenceId = actionSequenceId
            yield Promise.all([
              saveHTML(htmlContent, currentSnapshotId),
              saveInteraction(
                'navigation',
                timestamp,
                details.url,
                currentSnapshotId,
                currentactionSequenceId
              ),
              saveScreenshot((yield chrome.tabs.get(details.tabId)).windowId, timestamp)
            ])
            if (navigationType !== 'new' && navigationType !== 'reload') {
              console.log('send message to popup navigation')
              yield sendPopup(details.tabId, timestamp, 'navigation', currentactionSequenceId, {
                navigationType: navigationType
              })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBNkQsV0FBVztBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVcsZUFBZSxtQ0FBbUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcmVjaXBlLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYmFja2dyb3VuZF90ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYXYgPSB7XG4gICAgc2VsZWN0b3I6ICcjbmF2LXNlYXJjaC1iYXItZm9ybScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdpbnB1dCN0d290YWJzZWFyY2h0ZXh0Ym94JyxcbiAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfaW5wdXQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicsXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX2J1dHRvbidcbiAgICAgICAgfVxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgcmVmaW5lbWVudF9vcHRpb24gPSBbXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICBjbGFzczogJ3JlZmluZW1lbnQtdGl0bGUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNlbGVjdG9yOiAndWw6bnRoLW9mLXR5cGUoMSkgPiBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGknLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgY2xpY2tfc2VsZWN0b3I6ICdhJyxcbiAgICAgICAgZGlyZWN0X2NoaWxkOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW3sgc2VsZWN0b3I6IFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiIH1dXG4gICAgfVxuXTtcbmV4cG9ydCBjb25zdCByZWNpcGVzID0gW1xuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvJyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgc2VsZWN0b3I6ICdoZWFkJywgY2hpbGRyZW46IFt7IHNlbGVjdG9yOiAndGl0bGUnLCBhZGRfdGV4dDogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtuYXZdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvcycsXG4gICAgICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHNlbGVjdG9yOiAnaGVhZCcsIGNoaWxkcmVuOiBbeyBzZWxlY3RvcjogJ3RpdGxlJywgYWRkX3RleHQ6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcy1yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LmEtc2VjdGlvbi5hLXNwYWNpbmctbm9uZTpub3QoOmhhcygjbi10aXRsZSkpOmhhcyhzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQpOmhhcyh1bCBzcGFuLmEtZGVjbGFyYXRpdmUgPiBzcGFuID4gbGkpOm5vdCgjcmV2aWV3c1JlZmluZW1lbnRzKTpub3QoI2RlcGFydG1lbnRzKTpub3QoI3ByaWNlUmVmaW5lbWVudHMpOm5vdCgjZmlsdGVycyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9zZWxlY3RvcjogJ3NwYW4uYS1zaXplLWJhc2UuYS1jb2xvci1iYXNlLnB1aXMtYm9sZC13ZWlnaHQtdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiByZWZpbmVtZW50X29wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXBhcnRtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNyZXZpZXdzUmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmV2aWV3c19yZWZpbmVtZW50cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsaSBhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYucy1tYWluLXNsb3Qucy1yZXN1bHQtbGlzdC5zLXNlYXJjaC1yZXN1bHRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWFyY2hfcmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeTogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXZbZGF0YS1jb21wb25lbnQtdHlwZT1cInMtc2VhcmNoLXJlc3VsdFwiXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLXBsdXMuYS1jb2xvci1iYXNlLmEtdGV4dC1ub3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdzZWFyY2gtcmVzdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogXCJkaXZbZGF0YS1jeT0ndGl0bGUtcmVjaXBlJ10gYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3ZpZXdfcHJvZHVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3Jldmlld3MtYmxvY2snXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLnMtdW5kZXJsaW5lLXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ3t9IHJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXJhdGluZy1jb3VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3ByaWNlLXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LXByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2EuYS1saW5rLW5vcm1hbCA+IHNwYW4uYS1wcmljZSA+IHNwYW4uYS1vZmZzY3JlZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J2RlbGl2ZXJ5LXJlY2lwZSddXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4ucy1wYWdpbmF0aW9uLXN0cmlwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdwYWdpbmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5zLXBhZ2luYXRpb24taXRlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZnJvbV90ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnI3Byb2R1Y3RUaXRsZScsXG4gICAgICAgIG1hdGNoX3RleHQ6ICcnLFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgICAgICB0ZXJtaW5hdGU6ICdyZXR1cm4gISFhcmd1bWVudHNbMF0nLFxuICAgICAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6ICdyZXR1cm4gYXJndW1lbnRzWzBdJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgc2VsZWN0b3I6ICdoZWFkJywgY2hpbGRyZW46IFt7IHNlbGVjdG9yOiAndGl0bGUnLCBhZGRfdGV4dDogdHJ1ZSB9XSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnYm9keScsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgbmF2LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNjZW50ZXJDb2wnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWNhcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlZXBfYXR0cjogWydpZCddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2F2ZXJhZ2VDdXN0b21lclJldmlld3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3JldmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtaWNvbi1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FjckN1c3RvbWVyUmV2aWV3VGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhcGV4X2Rlc2t0b3BfbmV3QWNjb3JkaW9uUm93ICNjb3JlUHJpY2VEaXNwbGF5X2Rlc2t0b3BfZmVhdHVyZV9kaXYgc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X2Zvcm1hdDogJ1ByaWNlOiB7fScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjdHdpc3RlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2xhYmVsLmEtZm9ybS1sYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uc2VsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2FkZFRvQ2FydDpoYXMoI2J1eS1ub3ctYnV0dG9uKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYWRkX3RvX2NhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3Byb2R1Y3RGYWN0c0Rlc2t0b3BFeHBhbmRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtZmFjdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2Lm1pci1sYXlvdXQtREVMSVZFUllfQkxPQ0stc2xvdC1QUklNQVJZX0RFTElWRVJZX01FU1NBR0VfTEFSR0UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWRlbGl2ZXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNidXktbm93LWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdidXlfbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWJ1eS1ub3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVfaG9vazogYFxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLmlubmVyVGV4dFxuY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheVwiKS5pbm5lclRleHRcbmNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdHdpc3RlciBkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKVwiKSkubWFwKGEgPT4gKHtsYWJlbDogYS5xdWVyeVNlbGVjdG9yKFwibGFiZWwuYS1mb3JtLWxhYmVsXCIpLmlubmVyVGV4dCwgdmFsdWU6IGEucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpLmlubmVyVGV4dH0pKVxuY29uc3Qgb3B0aW9uc19kaWN0ID0ge31cbmZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zX2RpY3Rbb3B0aW9uW1wibGFiZWxcIl0ucmVwbGFjZShcIjogXCIsIFwiXCIpXSA9IG9wdGlvbltcInZhbHVlXCJdXG59XG5jb25zdCBhc2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I0FTSU5cIikudmFsdWVcbmNvbnNvbGUubG9nKHt0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbn0pXG5yZXR1cm4ge3RpdGxlLCBwcmljZSwgb3B0aW9uczogb3B0aW9uc19kaWN0LCBhc2lufVxuYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJy9hcC9zaWduaW4nLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICB0ZXJtaW5hdGU6ICdyZXR1cm4gISFhcmd1bWVudHNbMF0nLFxuICAgICAgICB0ZXJtaW5hdGVfY2FsbGJhY2s6ICdyZXR1cm4gYXJndW1lbnRzWzBdJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJ1xuICAgIH1cbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHNyYy9iYWNrZ3JvdW5kX3Rlc3QudHNcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNocm9tZS53ZWJOYXZpZ2F0aW9uLm9uQ29tbWl0dGVkLmFkZExpc3RlbmVyKChkZXRhaWxzKSA9PiB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCA9PT0gMCkge1xuICAgICAgICAvLyBPbmx5IGluamVjdCBpbnRvIHRoZSBtYWluIGZyYW1lXG4gICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbiAgICAgICAgICAgIGZpbGVzOiBbJ2pzL2luamVjdGVkLmpzJ10sXG4gICAgICAgICAgICB3b3JsZDogJ01BSU4nIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4gICAgICAgIH0pO1xuICAgIH1cbn0sIHsgdXJsOiBbeyB1cmxNYXRjaGVzOiAnLiphbWF6b25cXFxcLmNvbS4qJyB9LCB7IHVybE1hdGNoZXM6ICdmaWxlOi8vLionIH1dIH0pO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHJlY2lwZXMgfSBmcm9tICcuL3JlY2lwZSc7XG5sZXQgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnO1xubGV0IGludGVyYWN0aW9ucyA9IFtdO1xuY29uc3QgaW50ZXJhY3Rpb25zTGltaXQgPSAxMDA7XG5sZXQgc2NyZWVuc2hvdHMgPSBbXTtcbmxldCByZWFzb25zQW5ub3RhdGlvbiA9IFtdO1xuY29uc3QgcmVhc29uc0xpbWl0ID0gMTAwO1xuY29uc3Qgc2NyZWVuc2hvdExpbWl0ID0gMTAwO1xubGV0IGFjdGlvblNlcXVlbmNlSWQgPSAwO1xubGV0IHVwbG9hZFRpbWVyID0gbnVsbDtcbmxldCB1c2VySWQgPSAnJztcbmxldCBuYXZpZ2F0aW9uX3Byb2JhYmlsaXR5ID0gMTtcbmNvbnN0IHRhYk5hdmlnYXRpb25IaXN0b3J5ID0ge307XG5mdW5jdGlvbiBhbmFseXplTmF2aWdhdGlvbih0YWJJZCwgdXJsKSB7XG4gICAgaWYgKCF0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF0pIHtcbiAgICAgICAgdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdID0ge1xuICAgICAgICAgICAgYmFja1N0YWNrOiBbXSxcbiAgICAgICAgICAgIGZvcndhcmRTdGFjazogW10sXG4gICAgICAgICAgICBjdXJyZW50VXJsOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGhpc3RvcnkgPSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG4gICAgaWYgKCFoaXN0b3J5LmN1cnJlbnRVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsO1xuICAgICAgICByZXR1cm4gJ25ldyc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmN1cnJlbnRVcmwgPT09IHVybCkge1xuICAgICAgICByZXR1cm4gJ3JlbG9hZCc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggPiAwICYmIGhpc3RvcnkuYmFja1N0YWNrW2hpc3RvcnkuYmFja1N0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmJhY2tTdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuICdiYWNrJztcbiAgICB9XG4gICAgaWYgKGhpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgaGlzdG9yeS5mb3J3YXJkU3RhY2tbaGlzdG9yeS5mb3J3YXJkU3RhY2subGVuZ3RoIC0gMV0gPT09IHVybCkge1xuICAgICAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IGhpc3RvcnkuZm9yd2FyZFN0YWNrLnBvcCgpO1xuICAgICAgICByZXR1cm4gJ2ZvcndhcmQnO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2tTdGFjay5wdXNoKGhpc3RvcnkuY3VycmVudFVybCk7XG4gICAgaGlzdG9yeS5mb3J3YXJkU3RhY2sgPSBbXTtcbiAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSB1cmw7XG4gICAgcmV0dXJuICduZXcnO1xufVxuLy8gUmVwbGFjZSB0aGUgc2ltcGxlIHF1ZXN0aW9uIHdpdGggYSBtb3JlIGRldGFpbGVkIG9uZSBiYXNlZCBvbiBldmVudCB0eXBlXG5mdW5jdGlvbiBnZXRDdXN0b21RdWVzdGlvbihldmVudFR5cGUsIGRhdGEpIHtcbiAgICB2YXIgX2E7XG4gICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBhIHNwZWNpZmljIHR5cGUgb2YgY2xpY2tcbiAgICAgICAgICAgIGlmIChkYXRhLnRhcmdldC5pbm5lclRleHQgPT09ICdTZXQgVXAgTm93Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIldoeSBkaWQgeW91IGNob29zZSAnU2V0IFVwIE5vdycgaW5zdGVhZCBvZiBidXkgb25jZSwgYW5kIHdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD9cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYnV5LW5vdy1idXR0b24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBjaG9vc2UgdG8gYnV5IHRoaXMgcHJvZHVjdCBpbW1lZGlhdGVseSwgYW5kIHdoYXQgY29udmluY2VkIHlvdSB0byBza2lwIGZ1cnRoZXIgZXhwbG9yYXRpb24gb2Ygb3RoZXIgb3B0aW9ucz8gV2h5IGRvIHlvdSBsaWtlIHRoaXMgcGFydGljdWxhciBwcm9kdWN0Pyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoX2EgPSBkYXRhLnRhcmdldC5jbGFzc05hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbmNsdWRlcygnc2MtcHJvZHVjdC1saW5rJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doYXQgbWFkZSB5b3UgY2xpY2sgb24gdGhpcyBwcm9kdWN0LCBhbmQgd2hhdCBzcGVjaWZpYyBhc3BlY3RzIGF0dHJhY3RlZCB5b3VyIGF0dGVudGlvbiBjb21wYXJlZCB0byBvdGhlciBzZWFyY2ggcmVzdWx0cz8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS50YXJnZXQuaWQgPT09ICdhZGQtdG8tY2FydC1idXR0b24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaHkgZGlkIHlvdSBkZWNpZGUgdG8gYWRkIHRoaXMgaXRlbSB0byB5b3VyIGNhcnQsIGFuZCBhcmUgeW91IHBsYW5uaW5nIHRvIGJ1eSBpdCBub3cgb3IgbGF0ZXI/IFdoYXQgY29udmluY2VkIHlvdSB0aGF0IHRoaXMgaXRlbSB3YXMgdGhlIHJpZ2h0IGNob2ljZSBmb3IgeW91ciBuZWVkcz8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaGF0IHdhcyB5b3VyIHJlYXNvbiBmb3IgY2xpY2tpbmcgb24gdGhpcyBlbGVtZW50Pyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3Njcm9sbCc6XG4gICAgICAgICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBkb2luZyB3aGlsZSBzY3JvbGxpbmfigJRhcmUgeW91IGJyb3dzaW5nIHNlYXJjaCByZXN1bHRzLCBsb29raW5nIGF0IHJldmlld3MsIG9yIHNvbWV0aGluZyBlbHNlLCBhbmQgd2hhdCBhcmUgeW91IGhvcGluZyB0byBmaW5kPyc7XG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgIHJldHVybiAnV2hhdCBhcmUgeW91IHNlYXJjaGluZyBmb3IsIGFuZCBob3cgZGlkIHlvdSBkZWNpZGUgb24gdGhlIHNlYXJjaCB0ZXJtcyB5b3UgdXNlZD8gQXJlIHlvdSBsb29raW5nIGZvciBhIHNwZWNpZmljIHByb2R1Y3QsIGJyYW5kLCBvciBmZWF0dXJlPyc7XG4gICAgICAgIGNhc2UgJ25hdmlnYXRpb24nOlxuICAgICAgICAgICAgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdiYWNrJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGdvIGJhY2sgdG8gdGhlIHByZXZpb3VzIHBhZ2UsIGFuZCB3aGF0IHdlcmUgeW91IGhvcGluZyB0byByZXZpc2l0IG9yIHJlY29uc2lkZXI/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmF2aWdhdGlvblR5cGUgPT09ICdmb3J3YXJkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIHJldHVybiB0byB0aGlzIHBhZ2UgYWZ0ZXIgcHJldmlvdXNseSBuYXZpZ2F0aW5nIGF3YXksIGFuZCB3aGF0IG5ldyBvciB1bnJlc29sdmVkIGluZm9ybWF0aW9uIGFyZSB5b3UgbG9va2luZyBmb3Igbm93Pyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyAke2RhdGEubmF2aWdhdGlvblR5cGV9IG5hdmlnYXRpb24/YDtcbiAgICAgICAgY2FzZSAndGFiQWN0aXZhdGUnOlxuICAgICAgICAgICAgcmV0dXJuIGBXaHkgZGlkIHlvdSBzd2l0Y2ggdG8gdGhpcyB0YWI/IERvIHlvdSBoYXZlIHNwZWNpZmljIHRhc2sgb3IgaW5mb3JtYXRpb24gaW4gbWluZD9gO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSAke2V2ZW50VHlwZX0gYWN0aW9uP2A7XG4gICAgfVxufVxuLy8gQWRkIG5ldyBmdW5jdGlvbiB0byBoYW5kbGUgc2NyZWVuc2hvdCBzYXZpbmdcbmZ1bmN0aW9uIHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChzY3JlZW5zaG90RGF0YVVybCkge1xuICAgICAgICAgICAgLy8gR2V0IGV4aXN0aW5nIHNjcmVlbnNob3RzIGZyb20gc3RvcmFnZVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHNjcmVlbnNob3RzOiBbXSB9KTtcbiAgICAgICAgICAgIGxldCBzdG9yZVNjcmVlbnNob3RzID0gcmVzdWx0LnNjcmVlbnNob3RzIHx8IFtdO1xuICAgICAgICAgICAgLy8gQWRkIG5ldyBzY3JlZW5zaG90XG4gICAgICAgICAgICBzdG9yZVNjcmVlbnNob3RzLnB1c2goW3NjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWRdKTtcbiAgICAgICAgICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzY3JlZW5zaG90czogc3RvcmVTY3JlZW5zaG90cyB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICA7XG4gICAgKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzYXZlRGF0YScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZURhdGEgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmVEYXRhICcsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvblNlcXVlbmNlSWQpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmRhdGEuYWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpeWtmOWCqOWIsCBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmludGVyYWN0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiByZXN1bHQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gcG9wdXBcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBzZW5kUG9wdXAoc2VuZGVyLnRhYj8uaWQsIG1lc3NhZ2UuZGF0YS50aW1lc3RhbXAsIG1lc3NhZ2UuZGF0YS5ldmVudFR5cGUsIGFjdGlvblNlcXVlbmNlSWQpXG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBzYXZlRGF0YSgpLFxuICAgICAgICAgICAgICAgICAgICBzZW5kUG9wdXAoKF9hID0gc2VuZGVyLnRhYikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkLCBtZXNzYWdlLmRhdGEudGltZXN0YW1wLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBtZXNzYWdlLmRhdGEpXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHNhdmVEYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcCBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXB0dXJlIHNjcmVlbnNob3Qgb24gZGVtYW5kXG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2NhcHR1cmVTY3JlZW5zaG90Jykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0IHNjcmVlbnNob3QgcmVxdWVzdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3REYXRhVXJsID0geWllbGQgY2FwdHVyZVNjcmVlbnNob3QoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHlpZWxkIHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmwsIG1lc3NhZ2Uuc2NyZWVuc2hvdElkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcywgbWVzc2FnZTogc3VjY2VzcyA/IHVuZGVmaW5lZCA6ICdGYWlsZWQgdG8gY2FwdHVyZSBzY3JlZW5zaG90JyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gY2FwdHVyZVNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEb3dubG9hZCBkYXRhIG9uIHVzZXIgcmVxdWVzdFxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdkb3dubG9hZERhdGEnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZERhdGEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzID0geWllbGQgdXBsb2FkRGF0YVRvU2VydmVyKCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzcyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGRvd25sb2FkOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjbGVhck1lbW9yeUNhY2hlJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90cyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlYXNvbnNBbm5vdGF0aW9uID0gW107XG4gICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCA9IDA7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhbmRsaW5nIGNsZWFyTWVtb3J5Q2FjaGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldFJlY2lwZScgJiYgKChfYiA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pZCkpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0UmVjaXBlKHNlbmRlci50YWIuaWQsIG1lc3NhZ2UudXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVjaXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHJlY2lwZTogcmVjaXBlIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBnZXRSZWNpcGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZSB0aGF0IHNlbmRSZXNwb25zZSB3aWxsIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICB9XG4gICAgfSkpKCk7XG4gICAgcmV0dXJuIHRydWU7IC8vIEtlZXBzIHRoZSBtZXNzYWdlIGNoYW5uZWwgb3BlbiBmb3IgYXN5bmMgcmVzcG9uc2VzXG59KTtcbi8vIENhcHR1cmUgdGhlIHNjcmVlbnNob3QgaW4gdGhlIGN1cnJlbnQgdGFiXG5mdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3RhYl0gPSB5aWVsZCBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh0YWIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIodGFiLndpbmRvd0lkLCB7IGZvcm1hdDogJ2pwZWcnLCBxdWFsaXR5OiAyNSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuY29uc3Qgc2F2ZUhUTUwgPSAoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaHRtbFNuYXBzaG90czoge30gfSk7XG4gICAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gaHRtbENvbnRlbnQ7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KTtcbn0pO1xuY29uc3Qgc2F2ZUludGVyYWN0aW9uID0gKGV2ZW50VHlwZSwgdGltZXN0YW1wLCB0YXJnZXRfdXJsLCBodG1sU25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICB0YXJnZXRfdXJsLFxuICAgICAgICBodG1sU25hcHNob3RJZCxcbiAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWRcbiAgICB9O1xuICAgIGxldCBpbnRlcmFjdGlvbnMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBpbnRlcmFjdGlvbnM6IFtdIH0pO1xuICAgIGxldCBzdG9yZUludGVyYWN0aW9ucyA9IGludGVyYWN0aW9ucy5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgc3RvcmVJbnRlcmFjdGlvbnMucHVzaChkYXRhKTtcbiAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBpbnRlcmFjdGlvbnM6IHN0b3JlSW50ZXJhY3Rpb25zIH0pO1xufSk7XG5jb25zdCBzYXZlU2NyZWVuc2hvdCA9ICh3aW5kb3dJZCwgdGltZXN0YW1wKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHdpbmRvd0lkLCB7XG4gICAgICAgIGZvcm1hdDogJ2pwZWcnLFxuICAgICAgICBxdWFsaXR5OiAyNVxuICAgIH0pO1xuICAgIGNvbnN0IHNjcmVlbnNob3RJZCA9IGBzY3JlZW5zaG90XyR7dGltZXN0YW1wfWA7XG4gICAgeWllbGQgc2F2ZVNjcmVlbnNob3RfMShzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkKTtcbn0pO1xuY29uc3Qgc2VuZFBvcHVwID0gKHRhYklkLCB0aW1lc3RhbXAsIGV2ZW50VHlwZSwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIGRhdGEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHF1ZXN0aW9uID0gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlLCBkYXRhKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA8IG5hdmlnYXRpb25fcHJvYmFiaWxpdHkgJiYgdGFiSWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IHlpZWxkIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnc2hvd19wb3B1cCcsXG4gICAgICAgICAgICAgICAgcXVlc3Rpb246IHF1ZXN0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLmlucHV0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3aXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZDogY3VycmVudGFjdGlvblNlcXVlbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyByZWFzb25zQW5ub3RhdGlvbjogW10gfSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlUmVhc29uc0Fubm90YXRpb24gPSByZXN1bHQucmVhc29uc0Fubm90YXRpb24gfHwgW107XG4gICAgICAgICAgICAgICAgLy8gQWRkIG5ldyByZWFzb25cbiAgICAgICAgICAgICAgICBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLnB1c2gobmV3aXRlbSk7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBiYWNrIHRvIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZWFzb25zQW5ub3RhdGlvbjogc3RvcmVSZWFzb25zQW5ub3RhdGlvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBvcHVwOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuLy8gbGlzdGVuIHRvIHN3aXRjaGVzIGJldHdlZW4gYWN0aXZhdGVkIHRhYnNcbmNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKChhY3RpdmVJbmZvKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0YWJJZCA9IGFjdGl2ZUluZm8udGFiSWQ7XG4gICAgICAgIGNvbnN0IHRhYiA9IHlpZWxkIGNocm9tZS50YWJzLmdldCh0YWJJZCk7XG4gICAgICAgIGlmICghdGFiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gZ2V0IHRhYiB3aXRoIElEOiAke3RhYklkfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBTd2l0Y2hlZCB0byB0YWIgJHt0YWJJZH0gd2l0aCBVUkw6ICR7dGFiLnVybH1gKTtcbiAgICAgICAgaWYgKHRhYi51cmwgJiYgdGFiLnVybC5pbmNsdWRlcygnYW1hem9uLmNvbScpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGBodG1sXyR7aGFzaENvZGUodGFiLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKVxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVJbnRlcmFjdGlvbigndGFiQWN0aXZhdGUnLCB0aW1lc3RhbXAsIHRhYi51cmwsIGN1cnJlbnRTbmFwc2hvdElkLCBhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVTY3JlZW5zaG90KHRhYi53aW5kb3dJZCwgdGltZXN0YW1wKVxuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQrKztcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpLFxuICAgICAgICAgICAgICAgICAgICBzYXZlSW50ZXJhY3Rpb24oJ3RhYkFjdGl2YXRlJywgdGltZXN0YW1wLCB0YWIudXJsLCBjdXJyZW50U25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQpLFxuICAgICAgICAgICAgICAgICAgICBzYXZlU2NyZWVuc2hvdCh0YWIud2luZG93SWQsIHRpbWVzdGFtcCksXG4gICAgICAgICAgICAgICAgICAgIHNlbmRQb3B1cCh0YWJJZCwgdGltZXN0YW1wLCAndGFiQWN0aXZhdGUnLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwge30pXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHRhYiBhY3RpdmF0ZSBoYW5kbGVyOicsIGVycm9yKTtcbiAgICB9XG59KSk7XG5mdW5jdGlvbiBzZWxlY3RSZWNpcGUodGFiSWQsIHVybCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZTtcbiAgICAgICAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hNZXRob2QgPSByZWNpcGUubWF0Y2hfbWV0aG9kIHx8ICd0ZXh0JztcbiAgICAgICAgICAgIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFt7IHJlc3VsdDogaGFzTWF0Y2ggfV0gPSB5aWVsZCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jOiAoc2VsZWN0b3IsIG1hdGNoVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW1hdGNoVGV4dCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChfYiA9IChfYSA9IGVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG1hdGNoVGV4dC50b0xvd2VyQ2FzZSgpKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZmFsc2UpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW3JlY2lwZS5tYXRjaCwgcmVjaXBlLm1hdGNoX3RleHQgfHwgJyddXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWNpcGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoTWV0aG9kID09PSAndXJsJyAmJiByZWNpcGUubWF0Y2ggPT09IHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hpbmcgcmVjaXBlIGZvdW5kIGZvciBwYXRoOiAke3BhdGh9YCk7XG4gICAgfSk7XG59XG5jaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCAhPT0gMClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKCd3ZWJOYXZpZ2F0aW9uIG9uQ29tbWl0dGVkIGV2ZW50IHRyaWdnZXJlZDonLCBkZXRhaWxzKTtcbiAgICBpZiAoZGV0YWlscy51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSkge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YCk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuaHRtbDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpXG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVTY3JlZW5zaG90KChhd2FpdCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQpLFxuICAgICAgICAgICAgICAgIHNhdmVTY3JlZW5zaG90KCh5aWVsZCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uVHlwZSAhPT0gJ25ldycgJiYgbmF2aWdhdGlvblR5cGUgIT09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCBuYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2VuZFBvcHVwKGRldGFpbHMudGFiSWQsIHRpbWVzdGFtcCwgJ25hdmlnYXRpb24nLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICAgIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG59KTtcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuZnVuY3Rpb24gdXBsb2FkRGF0YVRvU2VydmVyKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IGBEQVRBL1NFU1NJT05fJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgIC8vIEdldCB1c2VySWQgYW5kIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCB1c2VySWRSZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWQ7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW4gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICBsZXQgc3RvcmVvcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW107XG4gICAgICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgLy8gY29uc3QgYWxsSW50ZXJhY3Rpb25zID0gWy4uLnN0b3JlSW50ZXJhY3Rpb25zLCAuLi5pbnRlcmFjdGlvbnNdO1xuICAgICAgICAgICAgLy8gY29uc3QgYWxsU2NyZWVuc2hvdHMgPSBbLi4uc3RvcmVTY3JlZW5zaG90cywgLi4uc2NyZWVuc2hvdHNdO1xuICAgICAgICAgICAgLy8gY29uc3QgYWxsUmVhc29ucyA9IFsuLi5zdG9yZVJlYXNvbnNBbm5vdGF0aW9uLCAuLi5yZWFzb25zQW5ub3RhdGlvbl07XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2Vzc2lvbiBpbmZvXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uSW5mbyA9IG5ldyBCbG9iKFtcbiAgICAgICAgICAgICAgICBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfSwgdXNlciBpZDogJHtjdXJyZW50VXNlcklkfSBcXG4gb3JkZXIgZGV0YWlsczogXFxuICR7SlNPTi5zdHJpbmdpZnkob3JkZXJEZXRhaWxzKX1gXG4gICAgICAgICAgICBdLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgc2Vzc2lvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlc3Npb25JbmZvLCBgJHtmb2xkZXJOYW1lfS9zZXNzaW9uX2luZm8udHh0YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpO1xuICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IHNlc3Npb25Gb3JtRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NuYXBzaG90SWQsIGh0bWxDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhodG1sU25hcHNob3RzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxCbG9iID0gbmV3IEJsb2IoW2h0bWxDb250ZW50XSwgeyB0eXBlOiAndGV4dC9odG1sJyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGh0bWxCbG9iLCBgJHtmb2xkZXJOYW1lfS9odG1sLyR7c25hcHNob3RJZH0uaHRtbGApO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBsb2FkIGludGVyYWN0aW9ucyBKU09OXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGludGVyYWN0aW9ucycpO1xuICAgICAgICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMildLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IsIGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9ucy5qc29uYCk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keToganNvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbc2NyZWVuc2hvdERhdGEsIHNjcmVlbnNob3RJZF0gb2Ygc3RvcmVTY3JlZW5zaG90cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goc2NyZWVuc2hvdERhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iLCBgJHtmb2xkZXJOYW1lfS9zY3JlZW5zaG90cy8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csICctJyl9LmpwZ2ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYXIgY2FjaGUgYWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWRcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAgICAgICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgICAgICAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgICAgICAgICAgICdvcmRlckRldGFpbHMnLFxuICAgICAgICAgICAgICAgICdzY3JlZW5zaG90cycsXG4gICAgICAgICAgICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgNjAwMDApOyAvLyA2MCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuLy8gc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
