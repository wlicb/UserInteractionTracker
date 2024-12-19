/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
    /***/ './src/utils/element-processor.ts':
      /*!****************************************!*\
  !*** ./src/utils/element-processor.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ processElement: () => /* binding */ processElement
          /* harmony export */
        })
        function processElement(element, recipe, parentName = '', nthChild = 0) {
          // Create a new element using the DOM API
          let tagName = recipe.tag_name || element.tagName.toLowerCase()
          // Handle underscored tags
          if (tagName.endsWith('_')) {
            tagName = tagName.slice(0, -1)
          }
          const newElement = document.createElement(tagName)
          // Extract text content based on the recipe
          let elementText = ''
          if (recipe.text_selector) {
            const textElement = element.querySelector(recipe.text_selector)
            if (textElement) {
              elementText = textElement.innerText || textElement.textContent || ''
            }
          } else if (recipe.text_js) {
            elementText = eval(recipe.text_js)
          } else if (recipe.add_text) {
            elementText = element.innerText || element.textContent || ''
          }
          elementText = elementText.replace(/\s+/g, ' ').trim()
          if (recipe.text_format && elementText) {
            elementText = recipe.text_format.replace('{}', elementText)
          }
          if (elementText && recipe.add_text) {
            newElement.textContent = elementText
          }
          // Build the node attributes
          let elementName = ''
          if (recipe.name) {
            if (recipe.name === 'from_text') {
              elementName = parentName ? parentName + '.' : ''
              elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_')
            } else if (recipe.name === 'from_nth_child') {
              elementName = parentName ? parentName + '.' : ''
              elementName += nthChild.toString()
            } else {
              elementName = parentName ? parentName + '.' : ''
              elementName += recipe.name
            }
            newElement.setAttribute('name', elementName)
            parentName = elementName
          }
          // Handle clickables and inputs
          if (recipe.clickable) {
            if (!recipe.name) {
              throw new Error('clickable element must have a name')
            }
            // handle click_selector
            let click_element
            if (recipe.click_selector) {
              click_element = element.querySelector(recipe.click_selector)
            } else {
              click_element = element
            }
            if (click_element) {
              click_element.setAttribute('data-clickable-id', elementName)
            } else {
              console.log('click-element not found', element, recipe)
            }
            if (!window.clickable_recipes) {
              window.clickable_recipes = {}
            }
            window.clickable_recipes[elementName] = recipe
          }
          if (tagName === 'input') {
            const inputType = element.getAttribute('type')
            if (['text', 'number'].includes(inputType)) {
              newElement.setAttribute('value', element.value)
              element.setAttribute('data-input-id', elementName)
            } else if (inputType === 'checkbox') {
              newElement.setAttribute('checked', element.checked.toString())
            } else if (inputType === 'radio') {
              newElement.setAttribute('checked', element.checked.toString())
              element.setAttribute('data-clickable-id', elementName)
            }
            if (!window.input_recipes) {
              window.input_recipes = {}
            }
            window.input_recipes[elementName] = recipe
          }
          // **Handle select elements**
          if (tagName === 'select') {
            // Tag the select element with data-select-id
            element.setAttribute('data-select-id', elementName)
            const options = element.querySelectorAll('option')
            options.forEach((option) => {
              const optionValue = option.getAttribute('value') || option.textContent.trim()
              const optionName = elementName + '.' + optionValue
              const newOption = document.createElement('option')
              newOption.textContent = option.textContent
              newOption.setAttribute('value', optionValue)
              newOption.setAttribute('name', optionName)
              newOption.setAttribute('selected', option.selected.toString())
              option.setAttribute('data-clickable-id', optionName) // Tag actual DOM option element
              newElement.appendChild(newOption)
            })
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
          ]
          attrsToCopy.forEach((attr) => {
            const value = element.getAttribute(attr)
            if (value) {
              newElement.setAttribute(attr, value)
            }
          })
          if (recipe.keep_attr) {
            for (const key in recipe.keep_attr) {
              const value = element.getAttribute(key)
              if (value) {
                newElement.setAttribute(key, value)
              }
            }
          }
          if (recipe['class']) {
            newElement.setAttribute('class', recipe['class'])
          }
          if (recipe['id']) {
            newElement.setAttribute('id', recipe['id'])
          }
          // Override attributes if specified
          if (recipe.override_attr) {
            for (const key in recipe.override_attr) {
              newElement.setAttribute(key, eval(recipe.override_attr[key]))
            }
          }
          // Process children
          if (recipe.children && recipe.children.length > 0) {
            for (const childRecipe of recipe.children) {
              const selector = childRecipe.direct_child
                ? `:scope > ${childRecipe.selector}`
                : childRecipe.selector
              const childElements = element.querySelectorAll(selector)
              childElements.forEach((childElement, index) => {
                const childNode = processElement(childElement, childRecipe, parentName, index)
                newElement.appendChild(childNode)
                if (childRecipe.insert_split_marker) {
                  const every = childRecipe.insert_split_marker_every || 1
                  if (index % every == 0) {
                    const splitMarker = document.createElement('split-marker')
                    newElement.appendChild(splitMarker)
                    // console.log("inserting split marker 1");
                  }
                }
                if (childRecipe.insert_split_marker) {
                  // console.log("inserting split marker 2");
                  const splitMarker = document.createElement('split-marker')
                  newElement.appendChild(splitMarker)
                } else {
                  console.log('no split marker')
                }
              })
            }
          }
          // Handle empty messages
          if (recipe.empty_message && newElement.children.length === 0) {
            const emptyTextNode = document.createTextNode(recipe.empty_message)
            newElement.appendChild(emptyTextNode)
          }
          return newElement
        }

        /***/
      },

    /***/ './src/utils/util.ts':
      /*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ isFromPopup: () => /* binding */ isFromPopup
          /* harmony export */
        })
        function isFromPopup(element) {
          return element.closest('#reason-modal') !== null
        }

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
  /*!************************************!*\
  !*** ./src/content_script_test.ts ***!
  \************************************/
  __webpack_require__.r(__webpack_exports__)
  /* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./utils/util */ './src/utils/util.ts'
  )
  /* harmony import */ var _utils_element_processor__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(/*! ./utils/element-processor */ './src/utils/element-processor.ts')
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

  window.addEventListener('message', (event) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (event.source !== window) return
      if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
        yield captureScreenshot(event.data.timestamp)
      }
      if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
        try {
          const response1 = yield chrome.storage.local.get(['htmlSnapshots'], (result) => {
            const htmlSnapshots = result.htmlSnapshots || {}
            htmlSnapshots[event.data.data.htmlSnapshotId] = event.data.data.htmlContent
            chrome.storage.local.set({ htmlSnapshots })
          })
          console.log(response1)
          const dataForBackground = Object.assign({}, event.data.data)
          delete dataForBackground.htmlContent
          const response2 = yield chrome.runtime.sendMessage({
            action: 'saveData',
            data: dataForBackground
          })
          if (!response1.success || !response2.success) {
            throw new Error(response1.message + response2.message || 'interaction capture failed')
          }
          console.log(response2)
          window.postMessage(
            {
              type: 'INTERACTION_COMPLETE',
              timestamp: event.data.data.timestamp,
              success: true
            },
            '*'
          )
        } catch (error) {
          console.error('Error saving interaction data:', error)
          window.postMessage(
            {
              type: 'INTERACTION_COMPLETE',
              success: false,
              error: error.message,
              timestamp: event.data.data.timestamp
            },
            '*'
          )
        }
      }
    })
  )
  function captureScreenshot(timestamp) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const screenshotId = `screenshot_${timestamp}`
        const response = yield chrome.runtime.sendMessage({
          action: 'captureScreenshot',
          screenshotId
        })
        if (!response.success) {
          throw new Error(response.message || 'Screenshot capture failed')
        }
        window.postMessage(
          {
            type: 'SCREENSHOT_COMPLETE',
            timestamp: timestamp,
            success: true
          },
          '*'
        )
      } catch (error) {
        console.error('Error capturing screenshot in content script:', error)
        window.postMessage(
          {
            type: 'SCREENSHOT_COMPLETE',
            timestamp: timestamp,
            success: false,
            error: error.message
          },
          '*'
        )
      }
    })
  }

  let lastScrollTime = 0 // Track last scroll timestamp
  const SCROLL_THRESHOLD = 1500 // Minimum time in ms between screenshots for scroll actions
  document.addEventListener('DOMContentLoaded', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      console.log('DOMContentLoaded')
      const url = window.location.href
      try {
        const response = yield new Promise((resolve) => {
          chrome.runtime.sendMessage(
            {
              action: 'getRecipe',
              url: url
            },
            resolve
          )
        })
        console.log('response')
        if (response && response.recipe) {
          const recipe = response.recipe
          const rootElement = document.querySelector(recipe.selector)
          if (rootElement) {
            const newRoot = (0,
            _utils_element_processor__WEBPACK_IMPORTED_MODULE_1__.processElement)(
              rootElement,
              recipe
            )
            console.log(newRoot.outerHTML)
          }
        }
      } catch (error) {
        console.error('Error initializing clickable elements:', error)
      }
    })
  )
  function generateHtmlSnapshotId() {
    const url = window.location.href
    const timestamp = new Date().toISOString()
    return `html_${hashCode(url)}_${timestamp}`
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
  // Function to get clickable elements in the viewport
  function getClickableElementsInViewport() {
    const clickableElements = [] // Array to store clickable elements
    // Select all potential clickable elements
    const allElements = document.querySelectorAll(
      'a, button, [onclick], input[type="button"], input[type="submit"]'
    )
    // Check if each element is in the viewport
    allElements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      ) {
        clickableElements.push({
          tagName: element.tagName,
          className: element.className,
          id: element.id,
          innerText: element.innerText.trim(),
          outerHTML: element.outerHTML.trim()
        })
      }
    })
    return clickableElements
  }
  // Function to capture interactions
  function captureInteraction(eventType, target, timestamp, selector, clickableId, url) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        // Generate new HTML snapshot ID
        const currentSnapshotId = generateHtmlSnapshotId()
        // Save HTML snapshot and wait for it to complete
        yield new Promise((resolve, reject) => {
          chrome.storage.local.get(['htmlSnapshots'], (result) => {
            const htmlSnapshots = result.htmlSnapshots || {}
            htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML
            chrome.storage.local.set({ htmlSnapshots }, () => {
              if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError)
              } else {
                resolve(void 0)
              }
            })
          })
        })
        // const clickableElements = getClickableElementsInViewport();
        const data = {
          eventType,
          timestamp: timestamp,
          target: target,
          targetOuterHTML: target.outerHTML,
          targetClass: target.className,
          targetId: target.id,
          targetText: target.innerText || target.value || '',
          htmlSnapshotId: currentSnapshotId,
          // clickableElements: clickableElements,
          selector: selector || '',
          clickableId: clickableId || '',
          url: url || ''
        }
        yield chrome.runtime.sendMessage({ action: 'saveData', data })
      } catch (error) {
        console.error(`Error during ${eventType} event handling:`, error)
      }
    })
  }
  // Capture scroll interactions
  document.addEventListener('scroll', (event) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        // scroll don't have a specific target, so we judge whether popup is open
        if (document.getElementById('reason-modal')) {
          return
        }
        const currentTime = Date.now()
        if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
          lastScrollTime = currentTime
          const timestamp = new Date().toISOString()
          yield captureInteraction('scroll', event.target, timestamp, '', '', '')
          yield captureScreenshot(timestamp)
        }
      } catch (error) {
        console.error('Error during scroll event handling:', error)
      }
    })
  )
  document.addEventListener(
    'blur',
    (event) =>
      __awaiter(void 0, void 0, void 0, function* () {
        const target = event.target
        if ((0, _utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) return
        if (
          target &&
          ((target.tagName === 'INPUT' && target.type === 'text') || target.tagName === 'TEXTAREA')
        ) {
          const timestamp = new Date().toISOString()
          yield captureScreenshot(timestamp)
          yield captureInteraction('input', target, timestamp, '', '', '')
        }
      }),
    true
  )
  // Capture click interactions
  function getUniqueSelector(element) {
    if (element.id) {
      return `#${element.id}`
    }
    if (element.className) {
      const className = element.className.trim().split(/\s+/).join('.')
      return `${element.tagName.toLowerCase()}.${className}`
    }
    return element.tagName.toLowerCase()
  }
  function getFullSelector(element) {
    let path = []
    while (element.parentElement) {
      path.unshift(getUniqueSelector(element))
      element = element.parentElement
    }
    return path.join(' > ')
  }
  document.addEventListener('DOMContentLoaded', () => {
    // Handle all types of order buttons
    const placeOrderButtons = document.querySelectorAll(
      'input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]'
    )
    const buyNowButton = document.querySelector('input[id="buy-now-button"]')
    const setupNowButton = document.querySelector(
      'button[id="rcx-subscribe-submit-button-announce"]'
    )
    const proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]')
    // Handle Buy Now and Set Up Now buttons if present
    ;[buyNowButton, setupNowButton].forEach((button) => {
      if (button) {
        button.addEventListener('click', () =>
          __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e
            try {
              const productInfo = {
                title:
                  ((_b =
                    (_a = document.querySelector('#title')) === null || _a === void 0
                      ? void 0
                      : _a.innerText) === null || _b === void 0
                    ? void 0
                    : _b.trim()) || '',
                price:
                  ((_d =
                    (_c = document.querySelector(
                      'span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay'
                    )) === null || _c === void 0
                      ? void 0
                      : _c.innerText) === null || _d === void 0
                    ? void 0
                    : _d.trim()) || '',
                asin:
                  ((_e = document.querySelector('input#ASIN')) === null || _e === void 0
                    ? void 0
                    : _e.value) || '',
                options: {}
              }
              // Get all option selections
              const optionRows = Array.from(
                document.querySelectorAll(
                  '#twister div.a-row:has(label.a-form-label):has(span.selection)'
                )
              )
              optionRows.forEach((row) => {
                var _a, _b, _c
                const label =
                  ((_b =
                    (_a = row.querySelector('label.a-form-label')) === null || _a === void 0
                      ? void 0
                      : _a.innerText) === null || _b === void 0
                    ? void 0
                    : _b.replace(': ', '')) || ''
                const value =
                  ((_c = row.querySelector('span.selection')) === null || _c === void 0
                    ? void 0
                    : _c.innerText) || ''
                if (label && value) {
                  productInfo.options[label] = value
                }
              })
              console.log(`${button.id} clicked - Product Info:`, productInfo)
              // Store the product info
              let result = yield chrome.storage.local.get({ orderDetails: [] })
              const orderDetails = result.orderDetails || []
              orderDetails.push({
                name: productInfo.title,
                price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
                asin: productInfo.asin,
                options: productInfo.options
              })
              yield chrome.storage.local.set({ orderDetails })
            } catch (error) {
              console.error(`Error capturing ${button.id} product info:`, error)
            }
          })
        )
      }
    })
    if (proceedToCheckoutButton) {
      proceedToCheckoutButton.addEventListener('click', (event) =>
        __awaiter(void 0, void 0, void 0, function* () {
          var _a, _b, _c
          try {
            const selectedItems = []
            const cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter(
              (item) => item.id !== 'sc-active-cart'
            )
            for (const item of cartItems) {
              const checkbox = item.querySelector('input[type="checkbox"]')
              if (checkbox && checkbox.checked) {
                const productLink = item.querySelector(
                  '.sc-item-product-title-cont .sc-product-link'
                )
                if (productLink) {
                  const fullNameElement = productLink.querySelector('.a-truncate-full')
                  const name =
                    ((_a =
                      fullNameElement === null || fullNameElement === void 0
                        ? void 0
                        : fullNameElement.textContent) === null || _a === void 0
                      ? void 0
                      : _a.trim()) || ''
                  const href = productLink.getAttribute('href') || ''
                  const asin =
                    ((_b = href.match(/product\/([A-Z0-9]{10})/)) === null || _b === void 0
                      ? void 0
                      : _b[1]) || ''
                  const priceElement = item.querySelector('.sc-item-price-block .a-offscreen')
                  const price = priceElement
                    ? parseFloat(
                        ((_c = priceElement.textContent) === null || _c === void 0
                          ? void 0
                          : _c.replace(/[^0-9.]/g, '')) || '0'
                      )
                    : 0
                  const options = {}
                  const variationElements = item.querySelectorAll('.sc-product-variation')
                  variationElements.forEach((variation) => {
                    var _a, _b, _c, _d
                    const label =
                      ((_b =
                        (_a = variation.querySelector('.a-text-bold')) === null || _a === void 0
                          ? void 0
                          : _a.textContent) === null || _b === void 0
                        ? void 0
                        : _b.trim().replace(':', '')) || ''
                    const value =
                      ((_d =
                        (_c = variation.querySelector('.a-size-small:not(.a-text-bold)')) ===
                          null || _c === void 0
                          ? void 0
                          : _c.textContent) === null || _d === void 0
                        ? void 0
                        : _d.trim()) || ''
                    if (label && value) {
                      options[label] = value
                    }
                  })
                  selectedItems.push({
                    name,
                    asin,
                    price,
                    options
                  })
                }
              }
            }
            if (selectedItems.length > 0) {
              let result = yield chrome.storage.local.get({ orderDetails: [] })
              const orderDetails = result.orderDetails || []
              const updatedOrderDetails = orderDetails.concat(selectedItems)
              yield chrome.storage.local.set({ orderDetails: updatedOrderDetails })
              console.log('Stored selected cart items:', selectedItems)
            }
          } catch (error) {
            console.error('Error capturing selected cart items:', error)
          }
        })
      )
    }
  })
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getHTML') {
      const htmlContent = document.documentElement.outerHTML
      sendResponse({ html: htmlContent })
    }
    return true
  })
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
    `
    const modalContainer = document.createElement('div')
    modalContainer.innerHTML = modalHtml
    document.body.appendChild(modalContainer)
    // Add event listeners
    const submitBtn = document.getElementById('reason-submit')
    const skipBtn = document.getElementById('reason-skip')
    const input = document.getElementById('reason-input')
    submitBtn === null || submitBtn === void 0
      ? void 0
      : submitBtn.addEventListener('click', () => {
          const value = input.value
          modalContainer.remove()
          sendResponse({ input: value })
        })
    skipBtn === null || skipBtn === void 0
      ? void 0
      : skipBtn.addEventListener('click', () => {
          modalContainer.remove()
          sendResponse({ input: null })
        })
  }
  // Listen for messages from background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'show_popup') {
      // assert there isn't already a popup
      if (document.getElementById('reason-modal')) {
        return
      }
      createModal(message.question, sendResponse)
      return true // Will respond asynchronously
    }
  })

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvZWxlbWVudC1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvdXRpbHMvdXRpbC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2NvbnRlbnRfc2NyaXB0X3Rlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50KGVsZW1lbnQsIHJlY2lwZSwgcGFyZW50TmFtZSA9IFwiXCIsIG50aENoaWxkID0gMCkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gICAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgICBpZiAodGFnTmFtZS5lbmRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgdGFnTmFtZSA9IHRhZ05hbWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAvLyBFeHRyYWN0IHRleHQgY29udGVudCBiYXNlZCBvbiB0aGUgcmVjaXBlXG4gICAgbGV0IGVsZW1lbnRUZXh0ID0gXCJcIjtcbiAgICBpZiAocmVjaXBlLnRleHRfc2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IocmVjaXBlLnRleHRfc2VsZWN0b3IpO1xuICAgICAgICBpZiAodGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRUZXh0ID0gdGV4dEVsZW1lbnQuaW5uZXJUZXh0IHx8IHRleHRFbGVtZW50LnRleHRDb250ZW50IHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmVjaXBlLnRleHRfanMpIHtcbiAgICAgICAgZWxlbWVudFRleHQgPSBldmFsKHJlY2lwZS50ZXh0X2pzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgIH1cbiAgICBlbGVtZW50VGV4dCA9IGVsZW1lbnRUZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICBpZiAocmVjaXBlLnRleHRfZm9ybWF0ICYmIGVsZW1lbnRUZXh0KSB7XG4gICAgICAgIGVsZW1lbnRUZXh0ID0gcmVjaXBlLnRleHRfZm9ybWF0LnJlcGxhY2UoXCJ7fVwiLCBlbGVtZW50VGV4dCk7XG4gICAgfVxuICAgIGlmIChlbGVtZW50VGV4dCAmJiByZWNpcGUuYWRkX3RleHQpIHtcbiAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnRUZXh0O1xuICAgIH1cbiAgICAvLyBCdWlsZCB0aGUgbm9kZSBhdHRyaWJ1dGVzXG4gICAgbGV0IGVsZW1lbnROYW1lID0gXCJcIjtcbiAgICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICAgICAgaWYgKHJlY2lwZS5uYW1lID09PSBcImZyb21fdGV4dFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgXCIuXCIgOiBcIlwiO1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csIFwiX1wiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWNpcGUubmFtZSA9PT0gXCJmcm9tX250aF9jaGlsZFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgXCIuXCIgOiBcIlwiO1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgKz0gbnRoQ2hpbGQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyBcIi5cIiA6IFwiXCI7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgZWxlbWVudE5hbWUpO1xuICAgICAgICBwYXJlbnROYW1lID0gZWxlbWVudE5hbWU7XG4gICAgfVxuICAgIC8vIEhhbmRsZSBjbGlja2FibGVzIGFuZCBpbnB1dHNcbiAgICBpZiAocmVjaXBlLmNsaWNrYWJsZSkge1xuICAgICAgICBpZiAoIXJlY2lwZS5uYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBjbGlja19zZWxlY3RvclxuICAgICAgICBsZXQgY2xpY2tfZWxlbWVudDtcbiAgICAgICAgaWYgKHJlY2lwZS5jbGlja19zZWxlY3Rvcikge1xuICAgICAgICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuY2xpY2tfc2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xpY2tfZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWNrX2VsZW1lbnQpIHtcbiAgICAgICAgICAgIGNsaWNrX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jbGlja2FibGUtaWRcIiwgZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZTtcbiAgICB9XG4gICAgaWYgKHRhZ05hbWUgPT09IFwiaW5wdXRcIikge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIGlmIChbXCJ0ZXh0XCIsIFwibnVtYmVyXCJdLmluY2x1ZGVzKGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaW5wdXQtaWRcIiwgZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gXCJjaGVja2JveFwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gXCJyYWRpb1wiKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgZWxlbWVudC5jaGVja2VkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNsaWNrYWJsZS1pZFwiLCBlbGVtZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3aW5kb3cuaW5wdXRfcmVjaXBlcykge1xuICAgICAgICAgICAgd2luZG93LmlucHV0X3JlY2lwZXMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlc1tlbGVtZW50TmFtZV0gPSByZWNpcGU7XG4gICAgfVxuICAgIC8vICoqSGFuZGxlIHNlbGVjdCBlbGVtZW50cyoqXG4gICAgaWYgKHRhZ05hbWUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zZWxlY3QtaWRcIiwgZWxlbWVudE5hbWUpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgndmFsdWUnKSB8fCBvcHRpb24udGV4dENvbnRlbnQudHJpbSgpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTmFtZSA9IGVsZW1lbnROYW1lICsgXCIuXCIgKyBvcHRpb25WYWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbmV3T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb25WYWx1ZSk7XG4gICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgb3B0aW9uTmFtZSk7XG4gICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIG9wdGlvbi5zZWxlY3RlZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgb3B0aW9uTmFtZSk7IC8vIFRhZyBhY3R1YWwgRE9NIG9wdGlvbiBlbGVtZW50XG4gICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDb3B5IHNwZWNpZmllZCBhdHRyaWJ1dGVzXG4gICAgY29uc3QgYXR0cnNUb0NvcHkgPSBbXCJhbHRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiLCBcInJvbGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiYXJpYS1oaWRkZW5cIiwgXCJhcmlhLXNlbGVjdGVkXCJdO1xuICAgIGF0dHJzVG9Db3B5LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocmVjaXBlLmtlZXBfYXR0cikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVjaXBlWydjbGFzcyddKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlY2lwZVsnY2xhc3MnXSk7XG4gICAgfVxuICAgIGlmIChyZWNpcGVbJ2lkJ10pIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgcmVjaXBlWydpZCddKTtcbiAgICB9XG4gICAgLy8gT3ZlcnJpZGUgYXR0cmlidXRlcyBpZiBzcGVjaWZpZWRcbiAgICBpZiAocmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVjaXBlLm92ZXJyaWRlX2F0dHIpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgZXZhbChyZWNpcGUub3ZlcnJpZGVfYXR0cltrZXldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvY2VzcyBjaGlsZHJlblxuICAgIGlmIChyZWNpcGUuY2hpbGRyZW4gJiYgcmVjaXBlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZFJlY2lwZSBvZiByZWNpcGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gY2hpbGRSZWNpcGUuZGlyZWN0X2NoaWxkID8gYDpzY29wZSA+ICR7Y2hpbGRSZWNpcGUuc2VsZWN0b3J9YCA6IGNoaWxkUmVjaXBlLnNlbGVjdG9yO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBwcm9jZXNzRWxlbWVudChjaGlsZEVsZW1lbnQsIGNoaWxkUmVjaXBlLCBwYXJlbnROYW1lLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSBldmVyeSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHNwbGl0IG1hcmtlclwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgZW1wdHkgbWVzc2FnZXNcbiAgICBpZiAocmVjaXBlLmVtcHR5X21lc3NhZ2UgJiYgbmV3RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZW1wdHlUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlY2lwZS5lbXB0eV9tZXNzYWdlKTtcbiAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChlbXB0eVRleHROb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBpc0Zyb21Qb3B1cCB9IGZyb20gJy4vdXRpbHMvdXRpbCc7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGV2ZW50LnNvdXJjZSAhPT0gd2luZG93KVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQVBUVVJFX1NDUkVFTlNIT1QnKSB7XG4gICAgICAgIHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KGV2ZW50LmRhdGEudGltZXN0YW1wKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTEgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydodG1sU25hcHNob3RzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICAgICAgaHRtbFNuYXBzaG90c1tldmVudC5kYXRhLmRhdGEuaHRtbFNuYXBzaG90SWRdID0gZXZlbnQuZGF0YS5kYXRhLmh0bWxDb250ZW50O1xuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlMSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhRm9yQmFja2dyb3VuZCA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUZvckJhY2tncm91bmQuaHRtbENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnc2F2ZURhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFGb3JCYWNrZ3JvdW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UxLnN1Y2Nlc3MgfHwgIXJlc3BvbnNlMi5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlMS5tZXNzYWdlICsgcmVzcG9uc2UyLm1lc3NhZ2UgfHwgJ2ludGVyYWN0aW9uIGNhcHR1cmUgZmFpbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZTIpO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGludGVyYWN0aW9uIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcFxuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgfVxuICAgIH1cbn0pKTtcbmZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgICAgICAgICAgIHNjcmVlbnNob3RJZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCAnU2NyZWVuc2hvdCBjYXB0dXJlIGZhaWxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90IGluIGNvbnRlbnQgc2NyaXB0OicsIGVycm9yKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5pbXBvcnQgeyBwcm9jZXNzRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudC1wcm9jZXNzb3InO1xubGV0IGxhc3RTY3JvbGxUaW1lID0gMDsgLy8gVHJhY2sgbGFzdCBzY3JvbGwgdGltZXN0YW1wXG5jb25zdCBTQ1JPTExfVEhSRVNIT0xEID0gMTUwMDsgLy8gTWluaW11bSB0aW1lIGluIG1zIGJldHdlZW4gc2NyZWVuc2hvdHMgZm9yIHNjcm9sbCBhY3Rpb25zXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2dldFJlY2lwZScsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgIH0sIHJlc29sdmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJyk7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZWNpcGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY2lwZSA9IHJlc3BvbnNlLnJlY2lwZTtcbiAgICAgICAgICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpO1xuICAgICAgICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um9vdCA9IHByb2Nlc3NFbGVtZW50KHJvb3RFbGVtZW50LCByZWNpcGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1Jvb3Qub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIGNsaWNrYWJsZSBlbGVtZW50czonLCBlcnJvcik7XG4gICAgfVxufSkpO1xuZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9YDtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhhc2ggdmFsdWUgYmVmb3JlIHJldHVybjpcIiwgaGFzaCk7XG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cbi8vIEZ1bmN0aW9uIHRvIGdldCBjbGlja2FibGUgZWxlbWVudHMgaW4gdGhlIHZpZXdwb3J0XG5mdW5jdGlvbiBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKSB7XG4gICAgY29uc3QgY2xpY2thYmxlRWxlbWVudHMgPSBbXTsgLy8gQXJyYXkgdG8gc3RvcmUgY2xpY2thYmxlIGVsZW1lbnRzXG4gICAgLy8gU2VsZWN0IGFsbCBwb3RlbnRpYWwgY2xpY2thYmxlIGVsZW1lbnRzXG4gICAgY29uc3QgYWxsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLCBidXR0b24sIFtvbmNsaWNrXSwgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSwgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIC8vIENoZWNrIGlmIGVhY2ggZWxlbWVudCBpcyBpbiB0aGUgdmlld3BvcnRcbiAgICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAocmVjdC50b3AgPj0gMCAmJlxuICAgICAgICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgICAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgICAgIGNsaWNrYWJsZUVsZW1lbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhZ05hbWU6IGVsZW1lbnQudGFnTmFtZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGVsZW1lbnQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50LmlkLFxuICAgICAgICAgICAgICAgIGlubmVyVGV4dDogZWxlbWVudC5pbm5lclRleHQudHJpbSgpLFxuICAgICAgICAgICAgICAgIG91dGVySFRNTDogZWxlbWVudC5vdXRlckhUTUwudHJpbSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xpY2thYmxlRWxlbWVudHM7XG59XG4vLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGFyZ2V0LCB0aW1lc3RhbXAsIHNlbGVjdG9yLCBjbGlja2FibGVJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKTtcbiAgICAgICAgICAgIC8vIFNhdmUgSFRNTCBzbmFwc2hvdCBhbmQgd2FpdCBmb3IgaXQgdG8gY29tcGxldGVcbiAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydodG1sU25hcHNob3RzJ10sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbFNuYXBzaG90cyA9IHJlc3VsdC5odG1sU25hcHNob3RzIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc3QgY2xpY2thYmxlRWxlbWVudHMgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICB0YXJnZXRDbGFzczogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICB0YXJnZXRJZDogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAvLyBjbGlja2FibGVFbGVtZW50czogY2xpY2thYmxlRWxlbWVudHMsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZUlkOiBjbGlja2FibGVJZCB8fCAnJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3NhdmVEYXRhJywgZGF0YSB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBDYXB0dXJlIHNjcm9sbCBpbnRlcmFjdGlvbnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gc2Nyb2xsIGRvbid0IGhhdmUgYSBzcGVjaWZpYyB0YXJnZXQsIHNvIHdlIGp1ZGdlIHdoZXRoZXIgcG9wdXAgaXMgb3BlblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1tb2RhbCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAoY3VycmVudFRpbWUgLSBsYXN0U2Nyb2xsVGltZSA+PSBTQ1JPTExfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgICBsYXN0U2Nyb2xsVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgeWllbGQgY2FwdHVyZUludGVyYWN0aW9uKCdzY3JvbGwnLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgJycsICcnLCAnJyk7XG4gICAgICAgICAgICB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIGV2ZW50IGhhbmRsaW5nOicsIGVycm9yKTtcbiAgICB9XG59KSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh0YXJnZXQgJiZcbiAgICAgICAgKCh0YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiICYmIHRhcmdldC50eXBlID09PSBcInRleHRcIikgfHxcbiAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIpKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgeWllbGQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKTtcbiAgICAgICAgeWllbGQgY2FwdHVyZUludGVyYWN0aW9uKFwiaW5wdXRcIiwgdGFyZ2V0LCB0aW1lc3RhbXAsICcnLCAnJywgJycpO1xuICAgIH1cbn0pLCB0cnVlKTtcbi8vIENhcHR1cmUgY2xpY2sgaW50ZXJhY3Rpb25zXG5mdW5jdGlvbiBnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuaWQpIHtcbiAgICAgICAgcmV0dXJuIGAjJHtlbGVtZW50LmlkfWA7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS50cmltKCkuc3BsaXQoL1xccysvKS5qb2luKCcuJyk7XG4gICAgICAgIHJldHVybiBgJHtlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0uJHtjbGFzc05hbWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gZ2V0RnVsbFNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBsZXQgcGF0aCA9IFtdO1xuICAgIHdoaWxlIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcGF0aC51bnNoaWZ0KGdldFVuaXF1ZVNlbGVjdG9yKGVsZW1lbnQpKTtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguam9pbignID4gJyk7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gSGFuZGxlIGFsbCB0eXBlcyBvZiBvcmRlciBidXR0b25zXG4gICAgY29uc3QgcGxhY2VPcmRlckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtpZD1cInBsYWNlT3JkZXJcIl0sIGlucHV0W2lkPVwidHVyYm8tY2hlY2tvdXQtcHlvLWJ1dHRvblwiXScpO1xuICAgIGNvbnN0IGJ1eU5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiYnV5LW5vdy1idXR0b25cIl0nKTtcbiAgICBjb25zdCBzZXR1cE5vd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cInJjeC1zdWJzY3JpYmUtc3VibWl0LWJ1dHRvbi1hbm5vdW5jZVwiXScpO1xuICAgIGNvbnN0IHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2NlZWRUb1JldGFpbENoZWNrb3V0XCJdJyk7XG4gICAgLy8gSGFuZGxlIEJ1eSBOb3cgYW5kIFNldCBVcCBOb3cgYnV0dG9ucyBpZiBwcmVzZW50XG4gICAgW2J1eU5vd0J1dHRvbiwgc2V0dXBOb3dCdXR0b25dLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICgoX2IgPSAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICgoX2QgPSAoX2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheVwiKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRyaW0oKSkgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW46ICgoX2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjQVNJTlwiKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnZhbHVlKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGFsbCBvcHRpb24gc2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25Sb3dzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3R3aXN0ZXIgZGl2LmEtcm93OmhhcyhsYWJlbC5hLWZvcm0tbGFiZWwpOmhhcyhzcGFuLnNlbGVjdGlvbilcIikpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAoKF9iID0gKF9hID0gcm93LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbC5hLWZvcm0tbGFiZWxcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKFwiOiBcIiwgXCJcIikpIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgoX2MgPSByb3cucXVlcnlTZWxlY3RvcihcInNwYW4uc2VsZWN0aW9uXCIpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5uZXJUZXh0KSB8fCBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEluZm8ub3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2J1dHRvbi5pZH0gY2xpY2tlZCAtIFByb2R1Y3QgSW5mbzpgLCBwcm9kdWN0SW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHJlc3VsdC5vcmRlckRldGFpbHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJvZHVjdEluZm8ucHJpY2UucmVwbGFjZSgvW14wLTkuXS9nLCAnJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RJbmZvLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24pIHtcbiAgICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cInNjLWFjdGl2ZS1cIl0nKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09ICdzYy1hY3RpdmUtY2FydCcpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBjYXJ0SXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdExpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByb2R1Y3QtdGl0bGUtY29udCAuc2MtcHJvZHVjdC1saW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZUVsZW1lbnQgPSBwcm9kdWN0TGluay5xdWVyeVNlbGVjdG9yKCcuYS10cnVuY2F0ZS1mdWxsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICgoX2EgPSBmdWxsTmFtZUVsZW1lbnQgPT09IG51bGwgfHwgZnVsbE5hbWVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmdWxsTmFtZUVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwcm9kdWN0TGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc2luID0gKChfYiA9IGhyZWYubWF0Y2goL3Byb2R1Y3RcXC8oW0EtWjAtOV17MTB9KS8pKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMV0pIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJpY2UtYmxvY2sgLmEtb2Zmc2NyZWVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVsZW1lbnQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KCgoX2MgPSBwcmljZUVsZW1lbnQudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSkgfHwgJzAnKSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbkVsZW1lbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtcHJvZHVjdC12YXJpYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25FbGVtZW50cy5mb3JFYWNoKHZhcmlhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAoKF9iID0gKF9hID0gdmFyaWF0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hLXRleHQtYm9sZCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50cmltKCkucmVwbGFjZSgnOicsICcnKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKChfZCA9IChfYyA9IHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS1zaXplLXNtYWxsOm5vdCguYS10ZXh0LWJvbGQpJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRyaW0oKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gcmVzdWx0Lm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5jb25jYXQoc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlsczogdXBkYXRlZE9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTDtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaHRtbDogaHRtbENvbnRlbnQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVNb2RhbChxdWVzdGlvbiwgc2VuZFJlc3BvbnNlKSB7XG4gICAgY29uc3QgbW9kYWxIdG1sID0gYFxuICAgICAgICA8ZGl2IGlkPVwicmVhc29uLW1vZGFsXCIgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPGgzPiR7cXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZWFzb24taW5wdXRcIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWFzb24tc2tpcFwiPlNraXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gbW9kYWxIdG1sO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpO1xuICAgIGNvbnN0IHNraXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXNraXAnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKTtcbiAgICBzdWJtaXRCdG4gPT09IG51bGwgfHwgc3VibWl0QnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUgfSk7XG4gICAgfSk7XG4gICAgc2tpcEJ0biA9PT0gbnVsbCB8fCBza2lwQnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBza2lwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IG51bGwgfSk7XG4gICAgfSk7XG59XG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gYmFja2dyb3VuZCBzY3JpcHRcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93X3BvcHVwJykge1xuICAgICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNb2RhbChtZXNzYWdlLnF1ZXN0aW9uLCBzZW5kUmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
