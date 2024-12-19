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
  // chrome.webNavigation.onCommitted.addListener(
  //   (details) => {
  //     if (details.frameId === 0) {
  //       // Only inject into the main frame
  //       chrome.scripting.executeScript({
  //         target: { tabId: details.tabId },
  //         files: ['js/injected.js'],
  //         world: 'MAIN' // Ensures the script is injected into the main world
  //       })
  //     }
  //   },
  //   { url: [{ urlMatches: '.*amazon\\.com.*' }, { urlMatches: 'file://.*' }] }
  // )
  // chrome.tabs.onCreated.addListener((tab) => {
  //   if (tab.url.includes('amazon.com') || tab.url.includes('file')) {
  //       chrome.scripting.executeScript({
  //         target: { tabId: details.tabId },
  //         files: ['js/injected.js'],
  //         world: 'MAIN' // Ensures the script is injected into the main world
  //       })
  //   }
  // })
  // chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  //   if (changeInfo.status === 'loading' && (tab.url.includes('amazon.com') || tab.url.includes('file'))) {
  //     chrome.scripting.executeScript({
  //       target: { tabId: tabId },
  //       files: ['js/injected.js'],
  //       world: 'MAIN' // Ensures the script is injected into the main world
  //     })
  //   }
  // })
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
        if (tab.url && (tab.url.includes('amazon.com') || tab.url.includes('file'))) {
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
      if (details.url.includes('amazon.com') || details.url.includes('file')) {
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
            `Session data for timestamp: ${timestamp}, user id: ${currentUserId} \n order details: \n ${JSON.stringify(orderDetails)}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsMkRBQTJELG1CQUFtQjtBQUM5RTtBQUNBLHFEQUFxRCxXQUFXLFFBQVEsV0FBVztBQUNuRiwwQ0FBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNkRBQTZELFdBQVc7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXLGVBQWUsbUNBQW1DO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3JlY2lwZS50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2JhY2tncm91bmRfdGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbmF2ID0ge1xuICAgIHNlbGVjdG9yOiAnI25hdi1zZWFyY2gtYmFyLWZvcm0nLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaW5wdXQjdHdvdGFic2VhcmNodGV4dGJveCcsXG4gICAgICAgICAgICBuYW1lOiAnc2VhcmNoX2lucHV0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNuYXYtc2VhcmNoLXN1Ym1pdC1idXR0b24nLFxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZTogJ3NlYXJjaF9idXR0b24nXG4gICAgICAgIH1cbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IHJlZmluZW1lbnRfb3B0aW9uID0gW1xuICAgIHtcbiAgICAgICAgc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgY2xhc3M6ICdyZWZpbmVtZW50LXRpdGxlJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBzZWxlY3RvcjogJ3VsOm50aC1vZi10eXBlKDEpID4gc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpJyxcbiAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgIG5hbWU6ICdmcm9tX3RleHQnLFxuICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgIGNsaWNrX3NlbGVjdG9yOiAnYScsXG4gICAgICAgIGRpcmVjdF9jaGlsZDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFt7IHNlbGVjdG9yOiBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiB9XVxuICAgIH1cbl07XG5leHBvcnQgY29uc3QgcmVjaXBlcyA9IFtcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnLycsXG4gICAgICAgIG1hdGNoX21ldGhvZDogJ3VybCcsXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHNlbGVjdG9yOiAnaGVhZCcsIGNoaWxkcmVuOiBbeyBzZWxlY3RvcjogJ3RpdGxlJywgYWRkX3RleHQ6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbbmF2XVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG1hdGNoOiAnL3MnLFxuICAgICAgICBtYXRjaF9tZXRob2Q6ICd1cmwnLFxuICAgICAgICBzZWxlY3RvcjogJ2h0bWwnLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgeyBzZWxlY3RvcjogJ2hlYWQnLCBjaGlsZHJlbjogW3sgc2VsZWN0b3I6ICd0aXRsZScsIGFkZF90ZXh0OiB0cnVlIH1dIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICBuYXYsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3MtcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5hLXNlY3Rpb24uYS1zcGFjaW5nLW5vbmU6bm90KDpoYXMoI24tdGl0bGUpKTpoYXMoc3Bhbi5hLXNpemUtYmFzZS5hLWNvbG9yLWJhc2UucHVpcy1ib2xkLXdlaWdodC10ZXh0KTpoYXModWwgc3Bhbi5hLWRlY2xhcmF0aXZlID4gc3BhbiA+IGxpKTpub3QoI3Jldmlld3NSZWZpbmVtZW50cyk6bm90KCNkZXBhcnRtZW50cyk6bm90KCNwcmljZVJlZmluZW1lbnRzKTpub3QoI2ZpbHRlcnMpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfc2VsZWN0b3I6ICdzcGFuLmEtc2l6ZS1iYXNlLmEtY29sb3ItYmFzZS5wdWlzLWJvbGQtd2VpZ2h0LXRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogcmVmaW5lbWVudF9vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnZGVwYXJ0bWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjcmV2aWV3c1JlZmluZW1lbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3Jldmlld3NfcmVmaW5lbWVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnbGkgYScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2LnMtbWFpbi1zbG90LnMtcmVzdWx0LWxpc3Qucy1zZWFyY2gtcmVzdWx0cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VhcmNoX3Jlc3VsdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydF9zcGxpdF9tYXJrZXJfZXZlcnk6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZGl2W2RhdGEtY29tcG9uZW50LXR5cGU9XCJzLXNlYXJjaC1yZXN1bHRcIl0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3NlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS1wbHVzLmEtY29sb3ItYmFzZS5hLXRleHQtbm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnc2VhcmNoLXJlc3VsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwiZGl2W2RhdGEtY3k9J3RpdGxlLXJlY2lwZSddIGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtbmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICd2aWV3X3Byb2R1Y3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdyZXZpZXdzLWJsb2NrJ11cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ3NwYW4uYS1pY29uLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLXNpemUtYmFzZS5zLXVuZGVybGluZS10ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICd7fSByZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1yYXRpbmctY291bnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdwcmljZS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1wcmljZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdhLmEtbGluay1ub3JtYWwgPiBzcGFuLmEtcHJpY2UgPiBzcGFuLmEtb2Zmc2NyZWVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBcImRpdltkYXRhLWN5PSdkZWxpdmVyeS1yZWNpcGUnXVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnMtcGFnaW5hdGlvbi1zdHJpcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcucy1wYWdpbmF0aW9uLWl0ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2Zyb21fdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBtYXRjaDogJyNwcm9kdWN0VGl0bGUnLFxuICAgICAgICBtYXRjaF90ZXh0OiAnJyxcbiAgICAgICAgc2VsZWN0b3I6ICdodG1sJyxcbiAgICAgICAgdGVybWluYXRlOiAncmV0dXJuICEhYXJndW1lbnRzWzBdJyxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiAncmV0dXJuIGFyZ3VtZW50c1swXScsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7IHNlbGVjdG9yOiAnaGVhZCcsIGNoaWxkcmVuOiBbeyBzZWxlY3RvcjogJ3RpdGxlJywgYWRkX3RleHQ6IHRydWUgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIG5hdixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjY2VudGVyQ29sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1jYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyN0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWVwX2F0dHI6IFsnaWQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhdmVyYWdlQ3VzdG9tZXJSZXZpZXdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdyZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnc3Bhbi5hLWljb24tYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhY3JDdXN0b21lclJldmlld1RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZF90ZXh0OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYXBleF9kZXNrdG9wX25ld0FjY29yZGlvblJvdyAjY29yZVByaWNlRGlzcGxheV9kZXNrdG9wX2ZlYXR1cmVfZGl2IHNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9mb3JtYXQ6ICdQcmljZToge30nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3QtcHJpY2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI3R3aXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ3Byb2R1Y3Qtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdkaXYuYS1yb3c6aGFzKGxhYmVsLmEtZm9ybS1sYWJlbCk6aGFzKHNwYW4uc2VsZWN0aW9uKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdsYWJlbC5hLWZvcm0tbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdzcGFuLnNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNhZGRUb0NhcnQ6aGFzKCNidXktbm93LWJ1dHRvbiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FkZF90b19jYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNwcm9kdWN0RmFjdHNEZXNrdG9wRXhwYW5kZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdwcm9kdWN0LWZhY3RzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Rpdi5taXItbGF5b3V0LURFTElWRVJZX0JMT0NLLXNsb3QtUFJJTUFSWV9ERUxJVkVSWV9NRVNTQUdFX0xBUkdFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkX3RleHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1kZWxpdmVyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjYnV5LW5vdy1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRfdGV4dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYnV5X25vdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAncHJvZHVjdC1idXktbm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlX2hvb2s6IGBcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5pbm5lclRleHRcbmNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4uYS1wcmljZS5hb2stYWxpZ24tY2VudGVyLnJlaW52ZW50UHJpY2VQcmljZVRvUGF5TWFyZ2luLnByaWNlVG9QYXlcIikuaW5uZXJUZXh0XG5jb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIikpLm1hcChhID0+ICh7bGFiZWw6IGEucXVlcnlTZWxlY3RvcihcImxhYmVsLmEtZm9ybS1sYWJlbFwiKS5pbm5lclRleHQsIHZhbHVlOiBhLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLnNlbGVjdGlvblwiKS5pbm5lclRleHR9KSlcbmNvbnN0IG9wdGlvbnNfZGljdCA9IHt9XG5mb3IgKGNvbnN0IG9wdGlvbiBvZiBvcHRpb25zKSB7XG4gICAgb3B0aW9uc19kaWN0W29wdGlvbltcImxhYmVsXCJdLnJlcGxhY2UoXCI6IFwiLCBcIlwiKV0gPSBvcHRpb25bXCJ2YWx1ZVwiXVxufVxuY29uc3QgYXNpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNBU0lOXCIpLnZhbHVlXG5jb25zb2xlLmxvZyh7dGl0bGUsIHByaWNlLCBvcHRpb25zOiBvcHRpb25zX2RpY3QsIGFzaW59KVxucmV0dXJuIHt0aXRsZSwgcHJpY2UsIG9wdGlvbnM6IG9wdGlvbnNfZGljdCwgYXNpbn1cbmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbWF0Y2g6ICcvYXAvc2lnbmluJyxcbiAgICAgICAgbWF0Y2hfbWV0aG9kOiAndXJsJyxcbiAgICAgICAgdGVybWluYXRlOiAncmV0dXJuICEhYXJndW1lbnRzWzBdJyxcbiAgICAgICAgdGVybWluYXRlX2NhbGxiYWNrOiAncmV0dXJuIGFyZ3VtZW50c1swXScsXG4gICAgICAgIHNlbGVjdG9yOiAnaHRtbCdcbiAgICB9XG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzcmMvYmFja2dyb3VuZF90ZXN0LnRzXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG4vLyBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbW1pdHRlZC5hZGRMaXN0ZW5lcihcbi8vICAgKGRldGFpbHMpID0+IHtcbi8vICAgICBpZiAoZGV0YWlscy5mcmFtZUlkID09PSAwKSB7XG4vLyAgICAgICAvLyBPbmx5IGluamVjdCBpbnRvIHRoZSBtYWluIGZyYW1lXG4vLyAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuLy8gICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbi8vICAgICAgICAgZmlsZXM6IFsnanMvaW5qZWN0ZWQuanMnXSxcbi8vICAgICAgICAgd29ybGQ6ICdNQUlOJyAvLyBFbnN1cmVzIHRoZSBzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGUgbWFpbiB3b3JsZFxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIHsgdXJsOiBbeyB1cmxNYXRjaGVzOiAnLiphbWF6b25cXFxcLmNvbS4qJyB9LCB7IHVybE1hdGNoZXM6ICdmaWxlOi8vLionIH1dIH1cbi8vIClcbi8vIGNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigodGFiKSA9PiB7XG4vLyAgIGlmICh0YWIudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgdGFiLnVybC5pbmNsdWRlcygnZmlsZScpKSB7XG4vLyAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuLy8gICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGRldGFpbHMudGFiSWQgfSxcbi8vICAgICAgICAgZmlsZXM6IFsnanMvaW5qZWN0ZWQuanMnXSxcbi8vICAgICAgICAgd29ybGQ6ICdNQUlOJyAvLyBFbnN1cmVzIHRoZSBzY3JpcHQgaXMgaW5qZWN0ZWQgaW50byB0aGUgbWFpbiB3b3JsZFxuLy8gICAgICAgfSlcbi8vICAgfVxuLy8gfSlcbi8vIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8pID0+IHtcbi8vICAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09PSAnbG9hZGluZycgJiYgKHRhYi51cmwuaW5jbHVkZXMoJ2FtYXpvbi5jb20nKSB8fCB0YWIudXJsLmluY2x1ZGVzKCdmaWxlJykpKSB7XG4vLyAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbi8vICAgICAgIHRhcmdldDogeyB0YWJJZDogdGFiSWQgfSxcbi8vICAgICAgIGZpbGVzOiBbJ2pzL2luamVjdGVkLmpzJ10sXG4vLyAgICAgICB3b3JsZDogJ01BSU4nIC8vIEVuc3VyZXMgdGhlIHNjcmlwdCBpcyBpbmplY3RlZCBpbnRvIHRoZSBtYWluIHdvcmxkXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfSlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi9yZWNpcGUnO1xubGV0IHVwbG9hZF91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8vdXBsb2FkJztcbmxldCBpbnRlcmFjdGlvbnMgPSBbXTtcbmNvbnN0IGludGVyYWN0aW9uc0xpbWl0ID0gMTAwO1xubGV0IHNjcmVlbnNob3RzID0gW107XG5sZXQgcmVhc29uc0Fubm90YXRpb24gPSBbXTtcbmNvbnN0IHJlYXNvbnNMaW1pdCA9IDEwMDtcbmNvbnN0IHNjcmVlbnNob3RMaW1pdCA9IDEwMDtcbmxldCBhY3Rpb25TZXF1ZW5jZUlkID0gMDtcbmxldCB1cGxvYWRUaW1lciA9IG51bGw7XG5sZXQgdXNlcklkID0gJyc7XG5sZXQgbmF2aWdhdGlvbl9wcm9iYWJpbGl0eSA9IDE7XG5jb25zdCB0YWJOYXZpZ2F0aW9uSGlzdG9yeSA9IHt9O1xuZnVuY3Rpb24gYW5hbHl6ZU5hdmlnYXRpb24odGFiSWQsIHVybCkge1xuICAgIGlmICghdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdKSB7XG4gICAgICAgIHRhYk5hdmlnYXRpb25IaXN0b3J5W3RhYklkXSA9IHtcbiAgICAgICAgICAgIGJhY2tTdGFjazogW10sXG4gICAgICAgICAgICBmb3J3YXJkU3RhY2s6IFtdLFxuICAgICAgICAgICAgY3VycmVudFVybDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBoaXN0b3J5ID0gdGFiTmF2aWdhdGlvbkhpc3RvcnlbdGFiSWRdO1xuICAgIGlmICghaGlzdG9yeS5jdXJyZW50VXJsKSB7XG4gICAgICAgIGhpc3RvcnkuY3VycmVudFVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuICduZXcnO1xuICAgIH1cbiAgICBpZiAoaGlzdG9yeS5jdXJyZW50VXJsID09PSB1cmwpIHtcbiAgICAgICAgcmV0dXJuICdyZWxvYWQnO1xuICAgIH1cbiAgICBpZiAoaGlzdG9yeS5iYWNrU3RhY2subGVuZ3RoID4gMCAmJiBoaXN0b3J5LmJhY2tTdGFja1toaXN0b3J5LmJhY2tTdGFjay5sZW5ndGggLSAxXSA9PT0gdXJsKSB7XG4gICAgICAgIGhpc3RvcnkuZm9yd2FyZFN0YWNrLnB1c2goaGlzdG9yeS5jdXJyZW50VXJsKTtcbiAgICAgICAgaGlzdG9yeS5jdXJyZW50VXJsID0gaGlzdG9yeS5iYWNrU3RhY2sucG9wKCk7XG4gICAgICAgIHJldHVybiAnYmFjayc7XG4gICAgfVxuICAgIGlmIChoaXN0b3J5LmZvcndhcmRTdGFjay5sZW5ndGggPiAwICYmXG4gICAgICAgIGhpc3RvcnkuZm9yd2FyZFN0YWNrW2hpc3RvcnkuZm9yd2FyZFN0YWNrLmxlbmd0aCAtIDFdID09PSB1cmwpIHtcbiAgICAgICAgaGlzdG9yeS5iYWNrU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgICAgICBoaXN0b3J5LmN1cnJlbnRVcmwgPSBoaXN0b3J5LmZvcndhcmRTdGFjay5wb3AoKTtcbiAgICAgICAgcmV0dXJuICdmb3J3YXJkJztcbiAgICB9XG4gICAgaGlzdG9yeS5iYWNrU3RhY2sucHVzaChoaXN0b3J5LmN1cnJlbnRVcmwpO1xuICAgIGhpc3RvcnkuZm9yd2FyZFN0YWNrID0gW107XG4gICAgaGlzdG9yeS5jdXJyZW50VXJsID0gdXJsO1xuICAgIHJldHVybiAnbmV3Jztcbn1cbi8vIFJlcGxhY2UgdGhlIHNpbXBsZSBxdWVzdGlvbiB3aXRoIGEgbW9yZSBkZXRhaWxlZCBvbmUgYmFzZWQgb24gZXZlbnQgdHlwZVxuZnVuY3Rpb24gZ2V0Q3VzdG9tUXVlc3Rpb24oZXZlbnRUeXBlLCBkYXRhKSB7XG4gICAgdmFyIF9hO1xuICAgIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYSBzcGVjaWZpYyB0eXBlIG9mIGNsaWNrXG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2V0IFVwIE5vdycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJXaHkgZGlkIHlvdSBjaG9vc2UgJ1NldCBVcCBOb3cnIGluc3RlYWQgb2YgYnV5IG9uY2UsIGFuZCB3aHkgZG8geW91IGxpa2UgdGhpcyBwYXJ0aWN1bGFyIHByb2R1Y3Q/XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLnRhcmdldC5pZCA9PT0gJ2J1eS1ub3ctYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgY2hvb3NlIHRvIGJ1eSB0aGlzIHByb2R1Y3QgaW1tZWRpYXRlbHksIGFuZCB3aGF0IGNvbnZpbmNlZCB5b3UgdG8gc2tpcCBmdXJ0aGVyIGV4cGxvcmF0aW9uIG9mIG90aGVyIG9wdGlvbnM/IFdoeSBkbyB5b3UgbGlrZSB0aGlzIHBhcnRpY3VsYXIgcHJvZHVjdD8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKF9hID0gZGF0YS50YXJnZXQuY2xhc3NOYW1lKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5jbHVkZXMoJ3NjLXByb2R1Y3QtbGluaycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdXaGF0IG1hZGUgeW91IGNsaWNrIG9uIHRoaXMgcHJvZHVjdCwgYW5kIHdoYXQgc3BlY2lmaWMgYXNwZWN0cyBhdHRyYWN0ZWQgeW91ciBhdHRlbnRpb24gY29tcGFyZWQgdG8gb3RoZXIgc2VhcmNoIHJlc3VsdHM/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudGFyZ2V0LmlkID09PSAnYWRkLXRvLWNhcnQtYnV0dG9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2h5IGRpZCB5b3UgZGVjaWRlIHRvIGFkZCB0aGlzIGl0ZW0gdG8geW91ciBjYXJ0LCBhbmQgYXJlIHlvdSBwbGFubmluZyB0byBidXkgaXQgbm93IG9yIGxhdGVyPyBXaGF0IGNvbnZpbmNlZCB5b3UgdGhhdCB0aGlzIGl0ZW0gd2FzIHRoZSByaWdodCBjaG9pY2UgZm9yIHlvdXIgbmVlZHM/JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnV2hhdCB3YXMgeW91ciByZWFzb24gZm9yIGNsaWNraW5nIG9uIHRoaXMgZWxlbWVudD8nO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlICdzY3JvbGwnOlxuICAgICAgICAgICAgcmV0dXJuICdXaGF0IGFyZSB5b3UgZG9pbmcgd2hpbGUgc2Nyb2xsaW5n4oCUYXJlIHlvdSBicm93c2luZyBzZWFyY2ggcmVzdWx0cywgbG9va2luZyBhdCByZXZpZXdzLCBvciBzb21ldGhpbmcgZWxzZSwgYW5kIHdoYXQgYXJlIHlvdSBob3BpbmcgdG8gZmluZD8nO1xuICAgICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgICAgICByZXR1cm4gJ1doYXQgYXJlIHlvdSBzZWFyY2hpbmcgZm9yLCBhbmQgaG93IGRpZCB5b3UgZGVjaWRlIG9uIHRoZSBzZWFyY2ggdGVybXMgeW91IHVzZWQ/IEFyZSB5b3UgbG9va2luZyBmb3IgYSBzcGVjaWZpYyBwcm9kdWN0LCBicmFuZCwgb3IgZmVhdHVyZT8nO1xuICAgICAgICBjYXNlICduYXZpZ2F0aW9uJzpcbiAgICAgICAgICAgIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnYmFjaycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byBnbyBiYWNrIHRvIHRoZSBwcmV2aW91cyBwYWdlLCBhbmQgd2hhdCB3ZXJlIHlvdSBob3BpbmcgdG8gcmV2aXNpdCBvciByZWNvbnNpZGVyPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5hdmlnYXRpb25UeXBlID09PSAnZm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1doeSBkaWQgeW91IGRlY2lkZSB0byByZXR1cm4gdG8gdGhpcyBwYWdlIGFmdGVyIHByZXZpb3VzbHkgbmF2aWdhdGluZyBhd2F5LCBhbmQgd2hhdCBuZXcgb3IgdW5yZXNvbHZlZCBpbmZvcm1hdGlvbiBhcmUgeW91IGxvb2tpbmcgZm9yIG5vdz8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGBXaGF0IGlzIHRoZSByZWFzb24gZm9yIHRoaXMgJHtkYXRhLm5hdmlnYXRpb25UeXBlfSBuYXZpZ2F0aW9uP2A7XG4gICAgICAgIGNhc2UgJ3RhYkFjdGl2YXRlJzpcbiAgICAgICAgICAgIHJldHVybiBgV2h5IGRpZCB5b3Ugc3dpdGNoIHRvIHRoaXMgdGFiPyBEbyB5b3UgaGF2ZSBzcGVjaWZpYyB0YXNrIG9yIGluZm9ybWF0aW9uIGluIG1pbmQ/YDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBgV2hhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgJHtldmVudFR5cGV9IGFjdGlvbj9gO1xuICAgIH1cbn1cbi8vIEFkZCBuZXcgZnVuY3Rpb24gdG8gaGFuZGxlIHNjcmVlbnNob3Qgc2F2aW5nXG5mdW5jdGlvbiBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBzY3JlZW5zaG90SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoc2NyZWVuc2hvdERhdGFVcmwpIHtcbiAgICAgICAgICAgIC8vIEdldCBleGlzdGluZyBzY3JlZW5zaG90cyBmcm9tIHN0b3JhZ2VcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBsZXQgc3RvcmVTY3JlZW5zaG90cyA9IHJlc3VsdC5zY3JlZW5zaG90cyB8fCBbXTtcbiAgICAgICAgICAgIC8vIEFkZCBuZXcgc2NyZWVuc2hvdFxuICAgICAgICAgICAgc3RvcmVTY3JlZW5zaG90cy5wdXNoKFtzY3JlZW5zaG90RGF0YVVybCwgc2NyZWVuc2hvdElkXSk7XG4gICAgICAgICAgICAvLyBTYXZlIGJhY2sgdG8gc3RvcmFnZVxuICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2NyZWVuc2hvdHM6IHN0b3JlU2NyZWVuc2hvdHMgfSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgO1xuICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc2F2ZURhdGEnKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVEYXRhID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlRGF0YSAnLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU2VxdWVuY2VJZCsrO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb25TZXF1ZW5jZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5kYXRhLmFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXlrZjlgqjliLAgY2hyb21lLnN0b3JhZ2UubG9jYWxcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGludGVyYWN0aW9uczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGludGVyYWN0aW9uczogcmVzdWx0IH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIHBvcHVwXG4gICAgICAgICAgICAgICAgLy8gYXdhaXQgc2VuZFBvcHVwKHNlbmRlci50YWI/LmlkLCBtZXNzYWdlLmRhdGEudGltZXN0YW1wLCBtZXNzYWdlLmRhdGEuZXZlbnRUeXBlLCBhY3Rpb25TZXF1ZW5jZUlkKVxuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZURhdGEoKSxcbiAgICAgICAgICAgICAgICAgICAgc2VuZFBvcHVwKChfYSA9IHNlbmRlci50YWIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCwgbWVzc2FnZS5kYXRhLnRpbWVzdGFtcCwgbWVzc2FnZS5kYXRhLmV2ZW50VHlwZSwgbWVzc2FnZS5kYXRhKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzYXZlRGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIEtlZXAgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FwdHVyZSBzY3JlZW5zaG90IG9uIGRlbWFuZFxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdjYXB0dXJlU2NyZWVuc2hvdCcpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldCBzY3JlZW5zaG90IHJlcXVlc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90RGF0YVVybCA9IHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlbnNob3REYXRhVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB5aWVsZCBzYXZlU2NyZWVuc2hvdF8xKHNjcmVlbnNob3REYXRhVXJsLCBtZXNzYWdlLnNjcmVlbnNob3RJZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3MsIG1lc3NhZ2U6IHN1Y2Nlc3MgPyB1bmRlZmluZWQgOiAnRmFpbGVkIHRvIGNhcHR1cmUgc2NyZWVuc2hvdCcgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGNhcHR1cmVTY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ0ZhaWxlZCB0byBjYXB0dXJlIHNjcmVlbnNob3QnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRG93bmxvYWQgZGF0YSBvbiB1c2VyIHJlcXVlc3RcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZG93bmxvYWREYXRhJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZG93bmxvYWREYXRhJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHlpZWxkIHVwbG9hZERhdGFUb1NlcnZlcigpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3MgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBkb3dubG9hZDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnY2xlYXJNZW1vcnlDYWNoZScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdHMgPSBbXTtcbiAgICAgICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbiA9IFtdO1xuICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQgPSAwO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYW5kbGluZyBjbGVhck1lbW9yeUNhY2hlOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnZXRSZWNpcGUnICYmICgoX2IgPSBzZW5kZXIudGFiKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaWQpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNlbGVjdFJlY2lwZShzZW5kZXIudGFiLmlkLCBtZXNzYWdlLnVybClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlY2lwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyByZWNpcGU6IHJlY2lwZSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFuZGxpbmcgZ2V0UmVjaXBlOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGUgdGhhdCBzZW5kUmVzcG9uc2Ugd2lsbCBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgfVxuICAgIH0pKSgpO1xuICAgIHJldHVybiB0cnVlOyAvLyBLZWVwcyB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlc1xufSk7XG4vLyBDYXB0dXJlIHRoZSBzY3JlZW5zaG90IGluIHRoZSBjdXJyZW50IHRhYlxuZnVuY3Rpb24gY2FwdHVyZVNjcmVlbnNob3QoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt0YWJdID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodGFiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKHRhYi53aW5kb3dJZCwgeyBmb3JtYXQ6ICdqcGVnJywgcXVhbGl0eTogMjUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBoYXNoQ29kZShzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46JywgaGFzaCk7XG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cbmNvbnN0IHNhdmVIVE1MID0gKGh0bWxDb250ZW50LCBjdXJyZW50U25hcHNob3RJZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IGh0bWxTbmFwc2hvdHM6IHt9IH0pO1xuICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGh0bWxDb250ZW50O1xuICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSk7XG59KTtcbmNvbnN0IHNhdmVJbnRlcmFjdGlvbiA9IChldmVudFR5cGUsIHRpbWVzdGFtcCwgdGFyZ2V0X3VybCwgaHRtbFNuYXBzaG90SWQsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcCxcbiAgICAgICAgdGFyZ2V0X3VybCxcbiAgICAgICAgaHRtbFNuYXBzaG90SWQsXG4gICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkXG4gICAgfTtcbiAgICBsZXQgaW50ZXJhY3Rpb25zID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdGlvbnMuaW50ZXJhY3Rpb25zIHx8IFtdO1xuICAgIHN0b3JlSW50ZXJhY3Rpb25zLnB1c2goZGF0YSk7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyB9KTtcbn0pO1xuY29uc3Qgc2F2ZVNjcmVlbnNob3QgPSAod2luZG93SWQsIHRpbWVzdGFtcCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3Qgc2NyZWVuc2hvdERhdGFVcmwgPSB5aWVsZCBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYih3aW5kb3dJZCwge1xuICAgICAgICBmb3JtYXQ6ICdqcGVnJyxcbiAgICAgICAgcXVhbGl0eTogMjVcbiAgICB9KTtcbiAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgIHlpZWxkIHNhdmVTY3JlZW5zaG90XzEoc2NyZWVuc2hvdERhdGFVcmwsIHNjcmVlbnNob3RJZCk7XG59KTtcbmNvbnN0IHNlbmRQb3B1cCA9ICh0YWJJZCwgdGltZXN0YW1wLCBldmVudFR5cGUsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLCBkYXRhKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IGdldEN1c3RvbVF1ZXN0aW9uKGV2ZW50VHlwZSwgZGF0YSk7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPCBuYXZpZ2F0aW9uX3Byb2JhYmlsaXR5ICYmIHRhYklkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3Nob3dfcG9wdXAnLFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5pbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld2l0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNlcXVlbmNlSWQ6IGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgcmVhc29uc0Fubm90YXRpb246IFtdIH0pO1xuICAgICAgICAgICAgICAgIGxldCBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uID0gcmVzdWx0LnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgcmVhc29uXG4gICAgICAgICAgICAgICAgc3RvcmVSZWFzb25zQW5ub3RhdGlvbi5wdXNoKG5ld2l0ZW0pO1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgYmFjayB0byBzdG9yYWdlXG4gICAgICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmVhc29uc0Fubm90YXRpb246IHN0b3JlUmVhc29uc0Fubm90YXRpb24gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3B1cDonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIGxpc3RlbiB0byBzd2l0Y2hlcyBiZXR3ZWVuIGFjdGl2YXRlZCB0YWJzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcigoYWN0aXZlSW5mbykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdGFiSWQgPSBhY3RpdmVJbmZvLnRhYklkO1xuICAgICAgICBjb25zdCB0YWIgPSB5aWVsZCBjaHJvbWUudGFicy5nZXQodGFiSWQpO1xuICAgICAgICBpZiAoIXRhYikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGdldCB0YWIgd2l0aCBJRDogJHt0YWJJZH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgU3dpdGNoZWQgdG8gdGFiICR7dGFiSWR9IHdpdGggVVJMOiAke3RhYi51cmx9YCk7XG4gICAgICAgIGlmICh0YWIudXJsICYmICh0YWIudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgdGFiLnVybC5pbmNsdWRlcygnZmlsZScpKSkge1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBgaHRtbF8ke2hhc2hDb2RlKHRhYi51cmwpfV8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgYWN0aW9uOiAnZ2V0SFRNTCcgfSwgKHJlc3BvbnNlKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sQ29udGVudCA9IHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5odG1sO1xuICAgICAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVIVE1MKGh0bWxDb250ZW50LCBjdXJyZW50U25hcHNob3RJZClcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBzYXZlSW50ZXJhY3Rpb24oJ3RhYkFjdGl2YXRlJywgdGltZXN0YW1wLCB0YWIudXJsLCBjdXJyZW50U25hcHNob3RJZCwgYWN0aW9uU2VxdWVuY2VJZClcbiAgICAgICAgICAgICAgICAvLyBhd2FpdCBzYXZlU2NyZWVuc2hvdCh0YWIud2luZG93SWQsIHRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudGFjdGlvblNlcXVlbmNlSWQgPSBhY3Rpb25TZXF1ZW5jZUlkO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUludGVyYWN0aW9uKCd0YWJBY3RpdmF0ZScsIHRpbWVzdGFtcCwgdGFiLnVybCwgY3VycmVudFNuYXBzaG90SWQsIGN1cnJlbnRhY3Rpb25TZXF1ZW5jZUlkKSxcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVNjcmVlbnNob3QodGFiLndpbmRvd0lkLCB0aW1lc3RhbXApLFxuICAgICAgICAgICAgICAgICAgICBzZW5kUG9wdXAodGFiSWQsIHRpbWVzdGFtcCwgJ3RhYkFjdGl2YXRlJywgY3VycmVudGFjdGlvblNlcXVlbmNlSWQsIHt9KVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0YWIgYWN0aXZhdGUgaGFuZGxlcjonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gc2VsZWN0UmVjaXBlKHRhYklkLCB1cmwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBwYXJzZWRVcmwucGF0aG5hbWU7XG4gICAgICAgIGZvciAoY29uc3QgcmVjaXBlIG9mIHJlY2lwZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCc7XG4gICAgICAgICAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgc2NyaXB0IGluIHRhYiB0byBjaGVjayBmb3IgbWF0Y2hpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbeyByZXN1bHQ6IGhhc01hdGNoIH1dID0geWllbGQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuYzogKHNlbGVjdG9yLCBtYXRjaFRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCFtYXRjaFRleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoX2IgPSAoX2EgPSBlbGVtZW50LnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaFRleHQudG9Mb3dlckNhc2UoKSkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFtyZWNpcGUubWF0Y2gsIHJlY2lwZS5tYXRjaF90ZXh0IHx8ICcnXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjaGVja2luZyB0ZXh0IG1hdGNoOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2lwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hdGNoaW5nIHJlY2lwZSBmb3VuZCBmb3IgcGF0aDogJHtwYXRofWApO1xuICAgIH0pO1xufVxuY2hyb21lLndlYk5hdmlnYXRpb24ub25Db21taXR0ZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChkZXRhaWxzLmZyYW1lSWQgIT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zb2xlLmxvZygnd2ViTmF2aWdhdGlvbiBvbkNvbW1pdHRlZCBldmVudCB0cmlnZ2VyZWQ6JywgZGV0YWlscyk7XG4gICAgaWYgKGRldGFpbHMudXJsLmluY2x1ZGVzKCdhbWF6b24uY29tJykgfHwgZGV0YWlscy51cmwuaW5jbHVkZXMoJ2ZpbGUnKSkge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVHlwZSA9IGFuYWx5emVOYXZpZ2F0aW9uKGRldGFpbHMudGFiSWQsIGRldGFpbHMudXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5hdmlnYXRpb24gdHlwZTogJHtuYXZpZ2F0aW9uVHlwZX0gZm9yIHRhYiAke2RldGFpbHMudGFiSWR9IHRvICR7ZGV0YWlscy51cmx9YCk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoZGV0YWlscy50YWJJZCwgeyBhY3Rpb246ICdnZXRIVE1MJyB9LCAocmVzcG9uc2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgaHRtbENvbnRlbnQgPSByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuaHRtbDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gYGh0bWxfJHtoYXNoQ29kZShkZXRhaWxzLnVybCl9XyR7dGltZXN0YW1wfWA7XG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSFRNTChodG1sQ29udGVudCwgY3VycmVudFNuYXBzaG90SWQpXG4gICAgICAgICAgICAvLyBhd2FpdCBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZClcbiAgICAgICAgICAgIC8vIGF3YWl0IHNhdmVTY3JlZW5zaG90KChhd2FpdCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBhY3Rpb25TZXF1ZW5jZUlkKys7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCA9IGFjdGlvblNlcXVlbmNlSWQ7XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgc2F2ZUhUTUwoaHRtbENvbnRlbnQsIGN1cnJlbnRTbmFwc2hvdElkKSxcbiAgICAgICAgICAgICAgICBzYXZlSW50ZXJhY3Rpb24oJ25hdmlnYXRpb24nLCB0aW1lc3RhbXAsIGRldGFpbHMudXJsLCBjdXJyZW50U25hcHNob3RJZCwgY3VycmVudGFjdGlvblNlcXVlbmNlSWQpLFxuICAgICAgICAgICAgICAgIHNhdmVTY3JlZW5zaG90KCh5aWVsZCBjaHJvbWUudGFicy5nZXQoZGV0YWlscy50YWJJZCkpLndpbmRvd0lkLCB0aW1lc3RhbXApXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0aW9uVHlwZSAhPT0gJ25ldycgJiYgbmF2aWdhdGlvblR5cGUgIT09ICdyZWxvYWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmQgbWVzc2FnZSB0byBwb3B1cCBuYXZpZ2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgeWllbGQgc2VuZFBvcHVwKGRldGFpbHMudGFiSWQsIHRpbWVzdGFtcCwgJ25hdmlnYXRpb24nLCBjdXJyZW50YWN0aW9uU2VxdWVuY2VJZCwge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uVHlwZTogbmF2aWdhdGlvblR5cGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pKTtcbi8vIEFkZCBjbGVhbnVwIHdoZW4gdGFiIGlzIGNsb3NlZFxuY2hyb21lLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKCh0YWJJZCkgPT4ge1xuICAgIGRlbGV0ZSB0YWJOYXZpZ2F0aW9uSGlzdG9yeVt0YWJJZF07XG59KTtcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGhhbmRsZSBkYXRhIHVwbG9hZFxuZnVuY3Rpb24gdXBsb2FkRGF0YVRvU2VydmVyKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWzouXS9nLCAnLScpO1xuICAgICAgICAgICAgY29uc3QgZm9sZGVyTmFtZSA9IGBEQVRBL1NFU1NJT05fJHt0aW1lc3RhbXB9YDtcbiAgICAgICAgICAgIC8vIEdldCB1c2VySWQgYW5kIGRhdGEgZnJvbSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCB1c2VySWRSZXN1bHQgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyB1c2VySWQ6ICcnIH0pO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHVzZXJJZFJlc3VsdC51c2VySWQ7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdHMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBodG1sU25hcHNob3RzOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGludGVyYWN0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgaW50ZXJhY3Rpb25zOiBbXSB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW4gPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoeyBzY3JlZW5zaG90czogW10gfSk7XG4gICAgICAgICAgICBjb25zdCBSZWFzb25zQW5ub3RhdGlvbiA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IHJlYXNvbnNBbm5vdGF0aW9uOiBbXSB9KTtcbiAgICAgICAgICAgIGxldCBodG1sU25hcHNob3RzID0gc25hcHNob3RzLmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBsZXQgc3RvcmVJbnRlcmFjdGlvbnMgPSBpbnRlcmFjdC5pbnRlcmFjdGlvbnMgfHwgW107XG4gICAgICAgICAgICBsZXQgc3RvcmVvcmRlckRldGFpbHMgPSBvcmRlckRldGFpbHMub3JkZXJEZXRhaWxzIHx8IFtdO1xuICAgICAgICAgICAgbGV0IHN0b3JlU2NyZWVuc2hvdHMgPSBzY3JlZW4uc2NyZWVuc2hvdHMgfHwgW107XG4gICAgICAgICAgICBsZXQgc3RvcmVSZWFzb25zQW5ub3RhdGlvbiA9IFJlYXNvbnNBbm5vdGF0aW9uLnJlYXNvbnNBbm5vdGF0aW9uIHx8IFtdO1xuICAgICAgICAgICAgLy8gY29uc3QgYWxsSW50ZXJhY3Rpb25zID0gWy4uLnN0b3JlSW50ZXJhY3Rpb25zLCAuLi5pbnRlcmFjdGlvbnNdO1xuICAgICAgICAgICAgLy8gY29uc3QgYWxsU2NyZWVuc2hvdHMgPSBbLi4uc3RvcmVTY3JlZW5zaG90cywgLi4uc2NyZWVuc2hvdHNdO1xuICAgICAgICAgICAgLy8gY29uc3QgYWxsUmVhc29ucyA9IFsuLi5zdG9yZVJlYXNvbnNBbm5vdGF0aW9uLCAuLi5yZWFzb25zQW5ub3RhdGlvbl07XG4gICAgICAgICAgICAvLyBVcGxvYWQgc2Vzc2lvbiBpbmZvXG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uSW5mbyA9IG5ldyBCbG9iKFtcbiAgICAgICAgICAgICAgICBgU2Vzc2lvbiBkYXRhIGZvciB0aW1lc3RhbXA6ICR7dGltZXN0YW1wfSwgdXNlciBpZDogJHtjdXJyZW50VXNlcklkfSBcXG4gb3JkZXIgZGV0YWlsczogXFxuICR7SlNPTi5zdHJpbmdpZnkob3JkZXJEZXRhaWxzKX1gXG4gICAgICAgICAgICBdLCB7IHR5cGU6ICd0ZXh0L3BsYWluJyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgc2Vzc2lvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHNlc3Npb25JbmZvLCBgJHtmb2xkZXJOYW1lfS9zZXNzaW9uX2luZm8udHh0YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIHNlc3Npb24gaW5mbycpO1xuICAgICAgICAgICAgeWllbGQgZmV0Y2godXBsb2FkX3VybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IHNlc3Npb25Gb3JtRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBVcGxvYWQgSFRNTCBzbmFwc2hvdHMgYXMgc2VwYXJhdGUgZmlsZXNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgaHRtbCBzbmFwc2hvdHMnKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3NuYXBzaG90SWQsIGh0bWxDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhodG1sU25hcHNob3RzKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxCbG9iID0gbmV3IEJsb2IoW2h0bWxDb250ZW50XSwgeyB0eXBlOiAndGV4dC9odG1sJyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGh0bWxCbG9iLCBgJHtmb2xkZXJOYW1lfS9odG1sLyR7c25hcHNob3RJZH0uaHRtbGApO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZldGNoKHVwbG9hZF91cmwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IGZvcm1EYXRhIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBsb2FkIGludGVyYWN0aW9ucyBKU09OXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkaW5nIGludGVyYWN0aW9ucycpO1xuICAgICAgICAgICAgY29uc3QgZnVsbERhdGEgPSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zOiBzdG9yZUludGVyYWN0aW9ucyxcbiAgICAgICAgICAgICAgICByZWFzb25zOiBzdG9yZVJlYXNvbnNBbm5vdGF0aW9uLFxuICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlsczogb3JkZXJEZXRhaWxzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25zQmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShmdWxsRGF0YSwgbnVsbCwgMildLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGpzb25Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAganNvbkZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGludGVyYWN0aW9uc0Jsb2IsIGAke2ZvbGRlck5hbWV9L2ludGVyYWN0aW9ucy5qc29uYCk7XG4gICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keToganNvbkZvcm1EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFVwbG9hZCBzY3JlZW5zaG90c1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwbG9hZGluZyBzY3JlZW5zaG90cycpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbc2NyZWVuc2hvdERhdGEsIHNjcmVlbnNob3RJZF0gb2Ygc3RvcmVTY3JlZW5zaG90cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goc2NyZWVuc2hvdERhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB5aWVsZCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBibG9iLCBgJHtmb2xkZXJOYW1lfS9zY3JlZW5zaG90cy8ke3NjcmVlbnNob3RJZC5yZXBsYWNlKC9bOi5dL2csICctJyl9LmpwZ2ApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGxvYWRpbmcgc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmZXRjaCh1cGxvYWRfdXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2xlYXIgY2FjaGUgYWZ0ZXIgc3VjY2Vzc2Z1bCB1cGxvYWRcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAgICAgICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgICAgICAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgICAgICAgICAgICdvcmRlckRldGFpbHMnLFxuICAgICAgICAgICAgICAgICdzY3JlZW5zaG90cycsXG4gICAgICAgICAgICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbnMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHNjcmVlbnNob3RzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICByZWFzb25zQW5ub3RhdGlvbi5sZW5ndGggPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIFN0YXJ0IHRoZSBwZXJpb2RpYyB1cGxvYWQgdGltZXJcbmZ1bmN0aW9uIHN0YXJ0UGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKCF1cGxvYWRUaW1lcikge1xuICAgICAgICB1cGxvYWRUaW1lciA9IHNldEludGVydmFsKHVwbG9hZERhdGFUb1NlcnZlciwgNjAwMDApOyAvLyA2MCBzZWNvbmRzXG4gICAgfVxufVxuLy8gU3RvcCB0aGUgcGVyaW9kaWMgdXBsb2FkIHRpbWVyXG5mdW5jdGlvbiBzdG9wUGVyaW9kaWNVcGxvYWQoKSB7XG4gICAgaWYgKHVwbG9hZFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkVGltZXIpO1xuICAgICAgICB1cGxvYWRUaW1lciA9IG51bGw7XG4gICAgfVxufVxuLy8gc3RhcnRQZXJpb2RpY1VwbG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
