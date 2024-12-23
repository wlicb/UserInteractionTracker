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
          } else {
            elementText = recipe.text_format
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
          const result = yield chrome.storage.local.get(['htmlSnapshots'])
          const htmlSnapshots = result.htmlSnapshots || {}
          htmlSnapshots[event.data.data.htmlSnapshotId] = event.data.data.htmlContent
          chrome.storage.local.set({ htmlSnapshots })
          const dataForBackground = Object.assign({}, event.data.data)
          delete dataForBackground.htmlContent
          const response2 = yield chrome.runtime.sendMessage({
            action: 'saveData',
            data: dataForBackground
          })
          if (!response2.success) {
            throw new Error(response2.message || 'interaction capture failed')
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
        // await new Promise((resolve, reject) => {
        const result = yield chrome.storage.local.get(['htmlSnapshots'])
        const htmlSnapshots = result.htmlSnapshots || {}
        htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML
        chrome.storage.local.set({ htmlSnapshots })
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
    // if attach-desktop-sideSheet exists
    if (document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')) {
      document
        .querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')
        .appendChild(modalContainer)
    } else {
      document.body.appendChild(modalContainer)
    }
    // Add event listeners
    document.getElementById('reason-submit').addEventListener('click', () => {
      const input = document.getElementById('reason-input')
      console.log('submitBtn clicked')
      const value = input.value
      modalContainer.remove()
      sendResponse({ input: value })
    })
    document.getElementById('reason-skip').addEventListener('click', () => {
      const input = document.getElementById('reason-input')
      modalContainer.remove()
      sendResponse({ input: null })
    })
  }
  // Listen for messages from background script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'show_popup') {
      console.log('show_popup', message)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy9lbGVtZW50LXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHRfdGVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoZWxlbWVudCwgcmVjaXBlLCBwYXJlbnROYW1lID0gJycsIG50aENoaWxkID0gMCkge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBlbGVtZW50IHVzaW5nIHRoZSBET00gQVBJXG4gICAgbGV0IHRhZ05hbWUgPSByZWNpcGUudGFnX25hbWUgfHwgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gSGFuZGxlIHVuZGVyc2NvcmVkIHRhZ3NcbiAgICBpZiAodGFnTmFtZS5lbmRzV2l0aCgnXycpKSB7XG4gICAgICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgLy8gRXh0cmFjdCB0ZXh0IGNvbnRlbnQgYmFzZWQgb24gdGhlIHJlY2lwZVxuICAgIGxldCBlbGVtZW50VGV4dCA9ICcnO1xuICAgIGlmIChyZWNpcGUudGV4dF9zZWxlY3Rvcikge1xuICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUudGV4dF9zZWxlY3Rvcik7XG4gICAgICAgIGlmICh0ZXh0RWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudFRleHQgPSB0ZXh0RWxlbWVudC5pbm5lclRleHQgfHwgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgfHwgJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocmVjaXBlLnRleHRfanMpIHtcbiAgICAgICAgZWxlbWVudFRleHQgPSBldmFsKHJlY2lwZS50ZXh0X2pzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVjaXBlLmFkZF90ZXh0KSB7XG4gICAgICAgIGVsZW1lbnRUZXh0ID0gZWxlbWVudC5pbm5lclRleHQgfHwgZWxlbWVudC50ZXh0Q29udGVudCB8fCAnJztcbiAgICB9XG4gICAgZWxlbWVudFRleHQgPSBlbGVtZW50VGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpO1xuICAgIGlmIChyZWNpcGUudGV4dF9mb3JtYXQgJiYgZWxlbWVudFRleHQpIHtcbiAgICAgICAgZWxlbWVudFRleHQgPSByZWNpcGUudGV4dF9mb3JtYXQucmVwbGFjZSgne30nLCBlbGVtZW50VGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbGVtZW50VGV4dCA9IHJlY2lwZS50ZXh0X2Zvcm1hdDtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnRUZXh0ICYmIHJlY2lwZS5hZGRfdGV4dCkge1xuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudFRleHQ7XG4gICAgfVxuICAgIC8vIEJ1aWxkIHRoZSBub2RlIGF0dHJpYnV0ZXNcbiAgICBsZXQgZWxlbWVudE5hbWUgPSAnJztcbiAgICBpZiAocmVjaXBlLm5hbWUpIHtcbiAgICAgICAgaWYgKHJlY2lwZS5uYW1lID09PSAnZnJvbV90ZXh0Jykge1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgPSBwYXJlbnROYW1lID8gcGFyZW50TmFtZSArICcuJyA6ICcnO1xuICAgICAgICAgICAgZWxlbWVudE5hbWUgKz0gZWxlbWVudFRleHQudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXlxcd10rL2csICdfJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVjaXBlLm5hbWUgPT09ICdmcm9tX250aF9jaGlsZCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnROYW1lID0gcGFyZW50TmFtZSA/IHBhcmVudE5hbWUgKyAnLicgOiAnJztcbiAgICAgICAgICAgIGVsZW1lbnROYW1lICs9IG50aENoaWxkLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSA9IHBhcmVudE5hbWUgPyBwYXJlbnROYW1lICsgJy4nIDogJyc7XG4gICAgICAgICAgICBlbGVtZW50TmFtZSArPSByZWNpcGUubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgcGFyZW50TmFtZSA9IGVsZW1lbnROYW1lO1xuICAgIH1cbiAgICAvLyBIYW5kbGUgY2xpY2thYmxlcyBhbmQgaW5wdXRzXG4gICAgaWYgKHJlY2lwZS5jbGlja2FibGUpIHtcbiAgICAgICAgaWYgKCFyZWNpcGUubmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGlja2FibGUgZWxlbWVudCBtdXN0IGhhdmUgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaGFuZGxlIGNsaWNrX3NlbGVjdG9yXG4gICAgICAgIGxldCBjbGlja19lbGVtZW50O1xuICAgICAgICBpZiAocmVjaXBlLmNsaWNrX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5jbGlja19zZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGlja19lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpY2tfZWxlbWVudCkge1xuICAgICAgICAgICAgY2xpY2tfZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJywgZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrLWVsZW1lbnQgbm90IGZvdW5kJywgZWxlbWVudCwgcmVjaXBlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdpbmRvdy5jbGlja2FibGVfcmVjaXBlcykge1xuICAgICAgICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmNsaWNrYWJsZV9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZTtcbiAgICB9XG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgICAgaWYgKFsndGV4dCcsICdudW1iZXInXS5pbmNsdWRlcyhpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWlucHV0LWlkJywgZWxlbWVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBlbGVtZW50LmNoZWNrZWQudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXRUeXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsIGVsZW1lbnQuY2hlY2tlZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdpbmRvdy5pbnB1dF9yZWNpcGVzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaW5wdXRfcmVjaXBlcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5pbnB1dF9yZWNpcGVzW2VsZW1lbnROYW1lXSA9IHJlY2lwZTtcbiAgICB9XG4gICAgLy8gKipIYW5kbGUgc2VsZWN0IGVsZW1lbnRzKipcbiAgICBpZiAodGFnTmFtZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgLy8gVGFnIHRoZSBzZWxlY3QgZWxlbWVudCB3aXRoIGRhdGEtc2VsZWN0LWlkXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdC1pZCcsIGVsZW1lbnROYW1lKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgb3B0aW9uLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbk5hbWUgPSBlbGVtZW50TmFtZSArICcuJyArIG9wdGlvblZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBuZXdPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvblZhbHVlKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvcHRpb25OYW1lKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgb3B0aW9uLnNlbGVjdGVkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnLCBvcHRpb25OYW1lKTsgLy8gVGFnIGFjdHVhbCBET00gb3B0aW9uIGVsZW1lbnRcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENvcHkgc3BlY2lmaWVkIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBhdHRyc1RvQ29weSA9IFtcbiAgICAgICAgJ2FsdCcsXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICd0eXBlJyxcbiAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgJ3JvbGUnLFxuICAgICAgICAnYXJpYS1sYWJlbCcsXG4gICAgICAgICdhcmlhLWhpZGRlbicsXG4gICAgICAgICdhcmlhLXNlbGVjdGVkJ1xuICAgIF07XG4gICAgYXR0cnNUb0NvcHkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChyZWNpcGUua2VlcF9hdHRyKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlY2lwZS5rZWVwX2F0dHIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZWNpcGVbJ2NsYXNzJ10pIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVjaXBlWydjbGFzcyddKTtcbiAgICB9XG4gICAgaWYgKHJlY2lwZVsnaWQnXSkge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCByZWNpcGVbJ2lkJ10pO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZSBhdHRyaWJ1dGVzIGlmIHNwZWNpZmllZFxuICAgIGlmIChyZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZWNpcGUub3ZlcnJpZGVfYXR0cikge1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBldmFsKHJlY2lwZS5vdmVycmlkZV9hdHRyW2tleV0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBQcm9jZXNzIGNoaWxkcmVuXG4gICAgaWYgKHJlY2lwZS5jaGlsZHJlbiAmJiByZWNpcGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkUmVjaXBlIG9mIHJlY2lwZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBjaGlsZFJlY2lwZS5kaXJlY3RfY2hpbGRcbiAgICAgICAgICAgICAgICA/IGA6c2NvcGUgPiAke2NoaWxkUmVjaXBlLnNlbGVjdG9yfWBcbiAgICAgICAgICAgICAgICA6IGNoaWxkUmVjaXBlLnNlbGVjdG9yO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBwcm9jZXNzRWxlbWVudChjaGlsZEVsZW1lbnQsIGNoaWxkUmVjaXBlLCBwYXJlbnROYW1lLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZFJlY2lwZS5pbnNlcnRfc3BsaXRfbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZXJ5ID0gY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSBldmVyeSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwbGl0LW1hcmtlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRSZWNpcGUuaW5zZXJ0X3NwbGl0X21hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluc2VydGluZyBzcGxpdCBtYXJrZXIgMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGxpdC1tYXJrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChzcGxpdE1hcmtlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3BsaXQgbWFya2VyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIGVtcHR5IG1lc3NhZ2VzXG4gICAgaWYgKHJlY2lwZS5lbXB0eV9tZXNzYWdlICYmIG5ld0VsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZWNpcGUuZW1wdHlfbWVzc2FnZSk7XG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoZW1wdHlUZXh0Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGw7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgaXNGcm9tUG9wdXAgfSBmcm9tICcuL3V0aWxzL3V0aWwnO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChldmVudC5zb3VyY2UgIT09IHdpbmRvdylcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FQVFVSRV9TQ1JFRU5TSE9UJykge1xuICAgICAgICB5aWVsZCBjYXB0dXJlU2NyZWVuc2hvdChldmVudC5kYXRhLnRpbWVzdGFtcCk7XG4gICAgfVxuICAgIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnaHRtbFNuYXBzaG90cyddKTtcbiAgICAgICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fTtcbiAgICAgICAgICAgIGh0bWxTbmFwc2hvdHNbZXZlbnQuZGF0YS5kYXRhLmh0bWxTbmFwc2hvdElkXSA9IGV2ZW50LmRhdGEuZGF0YS5odG1sQ29udGVudDtcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGh0bWxTbmFwc2hvdHMgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhRm9yQmFja2dyb3VuZCA9IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgZGF0YUZvckJhY2tncm91bmQuaHRtbENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTIgPSB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnc2F2ZURhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFGb3JCYWNrZ3JvdW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UyLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UyLm1lc3NhZ2UgfHwgJ2ludGVyYWN0aW9uIGNhcHR1cmUgZmFpbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZTIpO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGludGVyYWN0aW9uIGRhdGE6JywgZXJyb3IpO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnSU5URVJBQ1RJT05fQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogZXZlbnQuZGF0YS5kYXRhLnRpbWVzdGFtcFxuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgfVxuICAgIH1cbn0pKTtcbmZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90SWQgPSBgc2NyZWVuc2hvdF8ke3RpbWVzdGFtcH1gO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY2FwdHVyZVNjcmVlbnNob3QnLFxuICAgICAgICAgICAgICAgIHNjcmVlbnNob3RJZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCAnU2NyZWVuc2hvdCBjYXB0dXJlIGZhaWxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90IGluIGNvbnRlbnQgc2NyaXB0OicsIGVycm9yKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1NDUkVFTlNIT1RfQ09NUExFVEUnLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5pbXBvcnQgeyBwcm9jZXNzRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudC1wcm9jZXNzb3InO1xubGV0IGxhc3RTY3JvbGxUaW1lID0gMDsgLy8gVHJhY2sgbGFzdCBzY3JvbGwgdGltZXN0YW1wXG5jb25zdCBTQ1JPTExfVEhSRVNIT0xEID0gMTUwMDsgLy8gTWluaW11bSB0aW1lIGluIG1zIGJldHdlZW4gc2NyZWVuc2hvdHMgZm9yIHNjcm9sbCBhY3Rpb25zXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQnKTtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZ2V0UmVjaXBlJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlY2lwZSkge1xuICAgICAgICAgICAgY29uc3QgcmVjaXBlID0gcmVzcG9uc2UucmVjaXBlO1xuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5zZWxlY3Rvcik7XG4gICAgICAgICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb290ID0gcHJvY2Vzc0VsZW1lbnQocm9vdEVsZW1lbnQsIHJlY2lwZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3Um9vdC5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgY2xpY2thYmxlIGVsZW1lbnRzOicsIGVycm9yKTtcbiAgICB9XG59KSk7XG5mdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1gO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpO1xuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKCk7XG59XG4vLyBGdW5jdGlvbiB0byBnZXQgY2xpY2thYmxlIGVsZW1lbnRzIGluIHRoZSB2aWV3cG9ydFxuZnVuY3Rpb24gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnRzID0gW107IC8vIEFycmF5IHRvIHN0b3JlIGNsaWNrYWJsZSBlbGVtZW50c1xuICAgIC8vIFNlbGVjdCBhbGwgcG90ZW50aWFsIGNsaWNrYWJsZSBlbGVtZW50c1xuICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uLCBbb25jbGlja10sIGlucHV0W3R5cGU9XCJidXR0b25cIl0sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAvLyBDaGVjayBpZiBlYWNoIGVsZW1lbnQgaXMgaW4gdGhlIHZpZXdwb3J0XG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QudG9wID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAgICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICAgICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgICAgICBjbGlja2FibGVFbGVtZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiBlbGVtZW50LnRhZ05hbWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBlbGVtZW50LmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICBpbm5lclRleHQ6IGVsZW1lbnQuaW5uZXJUZXh0LnRyaW0oKSxcbiAgICAgICAgICAgICAgICBvdXRlckhUTUw6IGVsZW1lbnQub3V0ZXJIVE1MLnRyaW0oKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2xpY2thYmxlRWxlbWVudHM7XG59XG4vLyBGdW5jdGlvbiB0byBjYXB0dXJlIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGFyZ2V0LCB0aW1lc3RhbXAsIHNlbGVjdG9yLCBjbGlja2FibGVJZCwgdXJsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKTtcbiAgICAgICAgICAgIC8vIFNhdmUgSFRNTCBzbmFwc2hvdCBhbmQgd2FpdCBmb3IgaXQgdG8gY29tcGxldGVcbiAgICAgICAgICAgIC8vIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSk7XG4gICAgICAgICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge307XG4gICAgICAgICAgICBodG1sU25hcHNob3RzW2N1cnJlbnRTbmFwc2hvdElkXSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgIC8vIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnRzID0gZ2V0Q2xpY2thYmxlRWxlbWVudHNJblZpZXdwb3J0KCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAvLyAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgICAgICAgICAvLyAgIHRhcmdldENsYXNzOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIC8vICAgdGFyZ2V0SWQ6IHRhcmdldC5pZCxcbiAgICAgICAgICAgICAgICAvLyAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgICAgICAvLyBjbGlja2FibGVFbGVtZW50czogY2xpY2thYmxlRWxlbWVudHMsXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZUlkOiBjbGlja2FibGVJZCB8fCAnJyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybCB8fCAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHlpZWxkIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnc2F2ZURhdGEnLCBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZHVyaW5nICR7ZXZlbnRUeXBlfSBldmVudCBoYW5kbGluZzpgLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIENhcHR1cmUgc2Nyb2xsIGludGVyYWN0aW9uc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBzY3JvbGwgZG9uJ3QgaGF2ZSBhIHNwZWNpZmljIHRhcmdldCwgc28gd2UganVkZ2Ugd2hldGhlciBwb3B1cCBpcyBvcGVuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChjdXJyZW50VGltZSAtIGxhc3RTY3JvbGxUaW1lID49IFNDUk9MTF9USFJFU0hPTEQpIHtcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB5aWVsZCBjYXB0dXJlSW50ZXJhY3Rpb24oJ3Njcm9sbCcsIGV2ZW50LnRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnKTtcbiAgICAgICAgICAgIHlpZWxkIGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzY3JvbGwgZXZlbnQgaGFuZGxpbmc6JywgZXJyb3IpO1xuICAgIH1cbn0pKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmICh0YXJnZXQgJiZcbiAgICAgICAgKCh0YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiB0YXJnZXQudHlwZSA9PT0gJ3RleHQnKSB8fFxuICAgICAgICAgICAgdGFyZ2V0LnRhZ05hbWUgPT09ICdURVhUQVJFQScpKSB7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgeWllbGQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wKTtcbiAgICAgICAgeWllbGQgY2FwdHVyZUludGVyYWN0aW9uKCdpbnB1dCcsIHRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnKTtcbiAgICB9XG59KSwgdHJ1ZSk7XG4vLyBDYXB0dXJlIGNsaWNrIGludGVyYWN0aW9uc1xuZnVuY3Rpb24gZ2V0VW5pcXVlU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignLicpO1xuICAgICAgICByZXR1cm4gYCR7ZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LiR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGdldEZ1bGxTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBhdGgudW5zaGlmdChnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSk7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpO1xufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyBIYW5kbGUgYWxsIHR5cGVzIG9mIG9yZGVyIGJ1dHRvbnNcbiAgICBjb25zdCBwbGFjZU9yZGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2lkPVwicGxhY2VPcmRlclwiXSwgaW5wdXRbaWQ9XCJ0dXJiby1jaGVja291dC1weW8tYnV0dG9uXCJdJyk7XG4gICAgY29uc3QgYnV5Tm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJidXktbm93LWJ1dHRvblwiXScpO1xuICAgIGNvbnN0IHNldHVwTm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwicmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlXCJdJyk7XG4gICAgY29uc3QgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvY2VlZFRvUmV0YWlsQ2hlY2tvdXRcIl0nKTtcbiAgICBbYnV5Tm93QnV0dG9uLCBzZXR1cE5vd0J1dHRvbl0uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogKChfYiA9IChfYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiAoKF9kID0gKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3Bhbi5hLXByaWNlLmFvay1hbGlnbi1jZW50ZXIucmVpbnZlbnRQcmljZVByaWNlVG9QYXlNYXJnaW4ucHJpY2VUb1BheScpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5uZXJUZXh0KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudHJpbSgpKSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW46ICgoX2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNBU0lOJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS52YWx1ZSkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgYWxsIG9wdGlvbiBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvblJvd3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJykpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9ICgoX2IgPSAoX2EgPSByb3cucXVlcnlTZWxlY3RvcignbGFiZWwuYS1mb3JtLWxhYmVsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pbm5lclRleHQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKCc6ICcsICcnKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICgoX2MgPSByb3cucXVlcnlTZWxlY3Rvcignc3Bhbi5zZWxlY3Rpb24nKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmlubmVyVGV4dCkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEluZm8ub3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2J1dHRvbi5pZH0gY2xpY2tlZCAtIFByb2R1Y3QgSW5mbzpgLCBwcm9kdWN0SW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHJlc3VsdC5vcmRlckRldGFpbHMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3RJbmZvLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJvZHVjdEluZm8ucHJpY2UucmVwbGFjZSgvW14wLTkuXS9nLCAnJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbjogcHJvZHVjdEluZm8uYXNpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHByb2R1Y3RJbmZvLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGNhcHR1cmluZyAke2J1dHRvbi5pZH0gcHJvZHVjdCBpbmZvOmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24pIHtcbiAgICAgICAgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJ0SXRlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpZF49XCJzYy1hY3RpdmUtXCJdJykpLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gJ3NjLWFjdGl2ZS1jYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNhcnRJdGVtcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2JveCAmJiBjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TGluayA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJvZHVjdC10aXRsZS1jb250IC5zYy1wcm9kdWN0LWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0TGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lRWxlbWVudCA9IHByb2R1Y3RMaW5rLnF1ZXJ5U2VsZWN0b3IoJy5hLXRydW5jYXRlLWZ1bGwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKChfYSA9IGZ1bGxOYW1lRWxlbWVudCA9PT0gbnVsbCB8fCBmdWxsTmFtZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZ1bGxOYW1lRWxlbWVudC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRyaW0oKSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IHByb2R1Y3RMaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzaW4gPSAoKF9iID0gaHJlZi5tYXRjaCgvcHJvZHVjdFxcLyhbQS1aMC05XXsxMH0pLykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYlsxXSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc2MtaXRlbS1wcmljZS1ibG9jayAuYS1vZmZzY3JlZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IHByaWNlRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQoKChfYyA9IHByaWNlRWxlbWVudC50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKSB8fCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uRWxlbWVudHMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zYy1wcm9kdWN0LXZhcmlhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbkVsZW1lbnRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gKChfYiA9IChfYSA9IHZhcmlhdGlvbi5xdWVyeVNlbGVjdG9yKCcuYS10ZXh0LWJvbGQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpLnJlcGxhY2UoJzonLCAnJykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAoKF9kID0gKF9jID0gdmFyaWF0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hLXNpemUtc21hbGw6bm90KC5hLXRleHQtYm9sZCknKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudHJpbSgpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gcmVzdWx0Lm9yZGVyRGV0YWlscyB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZE9yZGVyRGV0YWlscyA9IG9yZGVyRGV0YWlscy5jb25jYXQoc2VsZWN0ZWRJdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlsczogdXBkYXRlZE9yZGVyRGV0YWlscyB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N0b3JlZCBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzZWxlY3RlZCBjYXJ0IGl0ZW1zOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ2dldEhUTUwnKSB7XG4gICAgICAgIGNvbnN0IGh0bWxDb250ZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTDtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaHRtbDogaHRtbENvbnRlbnQgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVNb2RhbChxdWVzdGlvbiwgc2VuZFJlc3BvbnNlKSB7XG4gICAgY29uc3QgbW9kYWxIdG1sID0gYFxuICAgICAgICA8ZGl2IGlkPVwicmVhc29uLW1vZGFsXCIgc3R5bGU9XCJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPGgzPiR7cXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyZWFzb24taW5wdXRcIiBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWFzb24tc2tpcFwiPlNraXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1zdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuaW5uZXJIVE1MID0gbW9kYWxIdG1sO1xuICAgIC8vIGlmIGF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldCBleGlzdHNcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjaC1kZXNrdG9wLXNpZGVTaGVldDpub3QoLmFvay1oaWRkZW4pJykuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG4gICAgfVxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLXN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24taW5wdXQnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdEJ0biBjbGlja2VkJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBpbnB1dDogdmFsdWUgfSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1za2lwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1pbnB1dCcpO1xuICAgICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IG51bGwgfSk7XG4gICAgfSk7XG59XG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGZyb20gYmFja2dyb3VuZCBzY3JpcHRcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93X3BvcHVwJykge1xuICAgICAgICBjb25zb2xlLmxvZygnc2hvd19wb3B1cCcsIG1lc3NhZ2UpO1xuICAgICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLW1vZGFsJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVNb2RhbChtZXNzYWdlLnF1ZXN0aW9uLCBzZW5kUmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gV2lsbCByZXNwb25kIGFzeW5jaHJvbm91c2x5XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
