/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
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
  /*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
  __webpack_require__.r(__webpack_exports__)
  /* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./utils/util */ './src/utils/util.ts'
  )
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

  const monkeyPatch = () => {
    window.monkeyPatched = true
    const originalAddEventListener = EventTarget.prototype.addEventListener
    // Add this at the top of the file
    const DEBOUNCE_DELAY = 150 // 300ms
    let lastClickTimestamp = 0
    const TimeOut = 30000
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
    function generateSelector(element) {
      if (element.id) {
        return `#${element.id}`
      }
      let path = []
      let current = element
      while (current && current !== document.body && current.parentElement) {
        let selector = current.tagName.toLowerCase()
        if (current.className && typeof current.className === 'string') {
          selector += '.' + current.className.trim().replace(/\s+/g, '.')
        }
        let sibling = current
        let nth = 1
        while (sibling.previousElementSibling) {
          sibling = sibling.previousElementSibling
          if (sibling.tagName === current.tagName) {
            nth++
          }
        }
        if (nth > 1) {
          selector += `:nth-of-type(${nth})`
        }
        path.unshift(selector)
        current = current.parentElement
      }
      return path.join(' > ')
    }
    function captureInteraction(eventType, target, timestamp, selector, url) {
      function findClickableParent(element, depth = 0) {
        if (!element || depth >= 5) return null
        if (element.hasAttribute('data-clickable-id')) {
          return element
        }
        return findClickableParent(element.parentElement, depth + 1)
      }
      const clickableElement = findClickableParent(target)
      const clickableId = clickableElement
        ? clickableElement.getAttribute('data-clickable-id') || ''
        : ''
      // Generate new HTML snapshot ID
      const currentSnapshotId = generateHtmlSnapshotId()
      // Create a serializable version of the target
      const serializedTarget = {
        tagName: target.tagName,
        className: target.className,
        id: target.id,
        innerText: target.innerText || target.value || '',
        outerHTML: target.outerHTML
      }
      const data = {
        eventType,
        timestamp: timestamp,
        target: serializedTarget,
        //   targetOuterHTML: target.outerHTML,
        //   targetClass: target.className,
        //   targetId: target.id,
        //   targetText: target.innerText || target.value || '',
        htmlSnapshotId: currentSnapshotId,
        selector: selector || '',
        'data-semantic-id': clickableId || '',
        url: url || '',
        htmlContent: document.documentElement.outerHTML
      }
      return data
    }
    // todo: patch removeEventListener support wrap
    const blockSignals = {}
    const executeDefaultAction = (event) => {
      var _a
      console.log('executeDefaultAction')
      const element = event.target
      console.log(element)
      console.log(event)
      if (event.my_default_prevented) {
        console.log('default prevented in original listener')
        return
      }
      const anchor = element.closest('a')
      if (anchor) {
        window.location.href = anchor.href
      } else if (element.tagName.toLowerCase() === 'input') {
        // if type is submit, submit the form
        if (element.type === 'submit') {
          console.log('submit the form')
          ;(_a = element.form) === null || _a === void 0 ? void 0 : _a.submit()
        }
      }
    }
    const hasDefaultAction = (event) => {
      const element = event.target
      const anchor = element.closest('a')
      if (anchor) {
        if (anchor.href.startsWith('javascript:')) {
          return false
        }
        return true
      }
      // if id is nav-search-submit-button
      // if (element.id === 'nav-search-submit-button') {
      //   return true
      // }
      if (element.tagName.toLowerCase() === 'input') {
        if (element.type === 'submit') {
          return true
        }
      }
      return false
    }
    // Monkey patch addEventListener
    EventTarget.prototype.addEventListener = function (type, listener, options = {}) {
      if (options && options.skip_monkey_patch) {
        return originalAddEventListener.call(this, type, listener, options)
      }
      if (type === 'click' && listener) {
        const wrappedListener = function (event) {
          return __awaiter(this, void 0, void 0, function* () {
            const target = event.target
            if ((0, _utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(target)) {
              if (typeof listener === 'function') {
                listener.call(this, event)
              } else if (listener && typeof listener.handleEvent === 'function') {
                listener.handleEvent.call(listener, event)
              }
              return
            }
            if (event.just_for_default) {
              console.log('skip monkey patch')
              return
            }
            // Add debouncing logic
            const now = Date.now()
            if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
              console.log('[Monkey Patch] Debouncing click event, blocking')
              if (blockSignals[lastClickTimestamp]) {
                const signal = blockSignals[lastClickTimestamp].signal
                const wait_for_abort = new Promise((resolve, reject) => {
                  if (signal.aborted) {
                    // If already aborted, resolve immediately
                    resolve(void 0)
                  } else {
                    // Otherwise, listen for the abort event
                    signal.addEventListener('abort', () => resolve(void 0), { once: true })
                  }
                })
                yield wait_for_abort
                console.log('[Monkey Patch] Debouncing click event, unblocking')
              } else {
                console.log('[Monkey Patch] Debouncing click event, no block signal')
              }
              if (typeof listener === 'function') {
                listener.call(this, event)
              } else if (listener && typeof listener.handleEvent === 'function') {
                listener.handleEvent.call(listener, event)
              }
              return
            }
            lastClickTimestamp = now
            blockSignals[lastClickTimestamp] = new AbortController()
            console.log('[Monkey Patch] Click detected on:', event.target)
            console.log(event.target)
            const timestamp = new Date().toISOString()
            // const anchor = target.closest('a')
            console.log(event.target)
            if (hasDefaultAction(event)) {
              // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
              console.log('[Monkey Patch] Click on cancelable')
              event.preventDefault()
              event.stopPropagation()
              event.preventDefault = () => {
                event.my_default_prevented = true
              }
              event.my_default_prevented = false
              console.log('after patch event', event)
              // const targetHref = anchor.href
              try {
                const screenshotComplete = new Promise((resolve, reject) => {
                  function handleMessage(event) {
                    if (
                      event.data.type === 'SCREENSHOT_COMPLETE' &&
                      event.data.timestamp === timestamp
                    ) {
                      window.removeEventListener('message', handleMessage)
                      if (event.data.success) {
                        resolve(void 0)
                      } else {
                        reject(new Error(event.data.error || 'Screenshot failed'))
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage)
                  // Add timeout
                  setTimeout(() => {
                    window.removeEventListener('message', handleMessage)
                    reject(new Error('Screenshot timeout'))
                  }, TimeOut)
                })
                const interactionComplete = new Promise((resolve, reject) => {
                  function handleMessage1(event) {
                    if (
                      event.data.type === 'INTERACTION_COMPLETE' &&
                      event.data.timestamp === timestamp
                    ) {
                      window.removeEventListener('message', handleMessage1)
                      if (event.data.success) {
                        resolve(void 0)
                      } else {
                        reject(new Error(event.data.error || 'Interaction failed'))
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage1)
                  // Add timeout
                  setTimeout(() => {
                    window.removeEventListener('message', handleMessage1)
                    reject(new Error('Interaction timeout'))
                  }, TimeOut)
                })
                const data = captureInteraction(
                  'click_a',
                  event.target,
                  timestamp,
                  generateSelector(event.target),
                  window.location.href
                )
                // await sleep 5 seconds
                // await new Promise(resolve => setTimeout(resolve, 5000));
                // alert("1")
                window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
                window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
                // alert("3")
                // Wait for screenshot to complete
                yield screenshotComplete
                yield interactionComplete
                // console.log("completed")
                // debugger
                // alert("2")
                // window.location.href = targetHref
                // re-dispatch the event
              } catch (error) {
                console.error('Error:', error)
              } finally {
                console.log('running original listener')
                console.log(listener)
                blockSignals[lastClickTimestamp].abort()
                if (typeof listener === 'function') {
                  listener.call(this, event)
                } else if (listener && typeof listener.handleEvent === 'function') {
                  listener.handleEvent.call(listener, event)
                }
                console.log('re-dispatch the event if its not prevented')
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
                  })
                  newEvent.just_for_default = true
                  // Re-dispatch the new event
                  target.dispatchEvent(newEvent)
                }
              }
              return
            }
            try {
              // Create a promise to wait for screenshot completion
              const screenshotComplete = new Promise((resolve, reject) => {
                function handleMessage(event) {
                  if (
                    event.data.type === 'SCREENSHOT_COMPLETE' &&
                    event.data.timestamp === timestamp
                  ) {
                    window.removeEventListener('message', handleMessage)
                    if (event.data.success) {
                      resolve(void 0)
                    } else {
                      reject(new Error(event.data.error || 'Screenshot failed'))
                    }
                  }
                }
                window.addEventListener('message', handleMessage)
                // Add timeout
                setTimeout(() => {
                  window.removeEventListener('message', handleMessage)
                  reject(new Error('Screenshot timeout'))
                }, TimeOut)
              })
              const data = captureInteraction(
                'click_b',
                event.target,
                timestamp,
                generateSelector(event.target),
                window.location.href
              )
              // Request screenshot
              window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
              window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
              const interactionComplete = new Promise((resolve, reject) => {
                function handleMessage1(event) {
                  if (
                    event.data.type === 'INTERACTION_COMPLETE' &&
                    event.data.timestamp === timestamp
                  ) {
                    window.removeEventListener('message', handleMessage1)
                    if (event.data.success) {
                      resolve(void 0)
                    } else {
                      reject(new Error(event.data.error || 'Interaction failed'))
                    }
                  }
                }
                window.addEventListener('message', handleMessage1)
                // Add timeout
                setTimeout(() => {
                  window.removeEventListener('message', handleMessage1)
                  reject(new Error('Interaction timeout'))
                }, TimeOut)
              })
              // Wait for screenshot to complete
              yield screenshotComplete
              yield interactionComplete
              // Execute original listener after screenshot is captured
            } catch (error) {
              console.error('Error capturing screenshot:', error)
              // Execute original listener even if screenshot fails
            } finally {
              console.log('running original listener')
              blockSignals[lastClickTimestamp].abort()
              if (typeof listener === 'function') {
                listener.call(this, event)
              } else if (listener && typeof listener.handleEvent === 'function') {
                listener.handleEvent.call(listener, event)
              }
            }
          })
        }
        // Call the original addEventListener with the wrapped listener
        if (options) {
          // if boolean, set passive to true
          if (typeof options === 'boolean') {
            options = {
              useCapture: false,
              passive: false
            }
          } else if (typeof options === 'object') {
            options.passive = false
          }
        }
        return originalAddEventListener.call(this, type, wrappedListener, options)
      } else {
        // Call the original addEventListener for non-click events
        return originalAddEventListener.call(this, type, listener, options)
      }
    }
    console.log('[Monkey Patch] addEventListener successfully patched.')
    // Function to handle clicks on <a> tags
    function handleAnchorClicks() {
      document.addEventListener(
        'click',
        function (event) {
          return __awaiter(this, void 0, void 0, function* () {
            if ((0, _utils_util__WEBPACK_IMPORTED_MODULE_0__.isFromPopup)(event.target)) {
              return
            }
            if (event.just_for_default) {
              console.log('skip monkey patch b')
              return
            }
            // Add debouncing logic
            const now = Date.now()
            if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
              console.log('[Monkey Patch] Debouncing anchor click event')
              return
            }
            lastClickTimestamp = now
            blockSignals[lastClickTimestamp] = new AbortController()
            const target = event.target
            // Find the closest <a> tag in case of nested elements inside the <a>
            // const anchor = target.closest('a')
            if (hasDefaultAction(event)) {
              // console.log('[Intercepted] Click on <a> tag:', anchor.href)
              console.log('[Intercepted] Click on cancelable')
              // if (!anchor.href.startsWith('javascript:')) {
              event.preventDefault()
              event.stopPropagation()
              const timestamp = new Date().toISOString()
              // const targetHref = anchor.href
              try {
                // 监听截图完成的消息
                const screenshotComplete = new Promise((resolve, reject) => {
                  function handleMessage(event) {
                    if (
                      event.data.type === 'SCREENSHOT_COMPLETE' &&
                      event.data.timestamp === timestamp
                    ) {
                      window.removeEventListener('message', handleMessage)
                      if (event.data.success) {
                        resolve(void 0)
                      } else {
                        reject(new Error(event.data.error || 'Screenshot failed'))
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage, {
                    capture: true
                  })
                  // 添加超时处理
                  setTimeout(() => {
                    window.removeEventListener('message', handleMessage)
                    reject(new Error('Screenshot timeout'))
                  }, TimeOut) // 3秒超时
                })
                // 发送截图请求
                window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
                const data = captureInteraction(
                  'click_c',
                  event.target,
                  timestamp,
                  generateSelector(target),
                  window.location.href
                )
                window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
                const interactionComplete = new Promise((resolve, reject) => {
                  function handleMessage1(event) {
                    if (
                      event.data.type === 'INTERACTION_COMPLETE' &&
                      event.data.timestamp === timestamp
                    ) {
                      window.removeEventListener('message', handleMessage1)
                      if (event.data.success) {
                        resolve(void 0)
                      } else {
                        reject(new Error(event.data.error || 'Interaction failed'))
                      }
                    }
                  }
                  window.addEventListener('message', handleMessage1)
                  // Add timeout
                  setTimeout(() => {
                    window.removeEventListener('message', handleMessage1)
                    reject(new Error('Interaction timeout'))
                  }, TimeOut)
                })
                // 等待截图完成
                yield screenshotComplete
                yield interactionComplete
                // 截图确认完成后再跳转
                // window.location.href = targetHref
              } catch (error) {
                console.error('Error capturing screenshot:', error)
                // window.location.href = targetHref
              } finally {
                blockSignals[lastClickTimestamp].abort()
                console.log('re-dispatch the event if its not prevented')
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
                  })
                  newEvent.just_for_default = true
                  // Re-dispatch the new event
                  target.dispatchEvent(newEvent)
                }
              }
            }
          })
        },
        {
          useCapture: true,
          skip_monkey_patch: true,
          passive: false
        }
      ) // Use capture phase to intercept the event earlier
    }
    // Call the function to handle <a> tag clicks
    handleAnchorClicks()
  }
  if (!window.monkeyPatched) {
    monkeyPatch()
  }

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7Ozs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUMyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWMsR0FBRyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsWUFBWTtBQUMxRztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsa0RBQWtEO0FBQ25HLGlEQUFpRCwyQ0FBMkM7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDZDQUE2QyxrREFBa0Q7QUFDL0YsNkNBQTZDLDJDQUEyQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekMseUJBQXlCO0FBQ3pCO0FBQ0EsNkNBQTZDLGtEQUFrRDtBQUMvRjtBQUNBLDZDQUE2QywyQ0FBMkM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy91dGlscy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvaW5qZWN0ZWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRnJvbVBvcHVwKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCcjcmVhc29uLW1vZGFsJykgIT09IG51bGw7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgaXNGcm9tUG9wdXAgfSBmcm9tICcuL3V0aWxzL3V0aWwnO1xuY29uc3QgbW9ua2V5UGF0Y2ggPSAoKSA9PiB7XG4gICAgd2luZG93Lm1vbmtleVBhdGNoZWQgPSB0cnVlO1xuICAgIGNvbnN0IG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lciA9IEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyO1xuICAgIC8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbiAgICBjb25zdCBERUJPVU5DRV9ERUxBWSA9IDE1MDsgLy8gMzAwbXNcbiAgICBsZXQgbGFzdENsaWNrVGltZXN0YW1wID0gMDtcbiAgICBjb25zdCBUaW1lT3V0ID0gMzAwMDA7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9YDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgICAgIGxldCBoYXNoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgIGhhc2ggfD0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOicsIGhhc2gpO1xuICAgICAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXRoID0gW107XG4gICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBjdXJyZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RvciA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuY2xhc3NOYW1lICYmIHR5cGVvZiBjdXJyZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciArPSAnLicgKyBjdXJyZW50LmNsYXNzTmFtZS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpYmxpbmcgPSBjdXJyZW50O1xuICAgICAgICAgICAgbGV0IG50aCA9IDE7XG4gICAgICAgICAgICB3aGlsZSAoc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSBjdXJyZW50LnRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbnRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG50aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciArPSBgOm50aC1vZi10eXBlKCR7bnRofSlgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aC51bnNoaWZ0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGguam9pbignID4gJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNhcHR1cmVJbnRlcmFjdGlvbihldmVudFR5cGUsIHRhcmdldCwgdGltZXN0YW1wLCBzZWxlY3RvciwgdXJsKSB7XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudCwgZGVwdGggPSAwKSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZGVwdGggPj0gNSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsaWNrYWJsZUVsZW1lbnQgPSBmaW5kQ2xpY2thYmxlUGFyZW50KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNsaWNrYWJsZUlkID0gY2xpY2thYmxlRWxlbWVudFxuICAgICAgICAgICAgPyBjbGlja2FibGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJ1xuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IEhUTUwgc25hcHNob3QgSURcbiAgICAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKCk7XG4gICAgICAgIC8vIENyZWF0ZSBhIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFRhcmdldCA9IHtcbiAgICAgICAgICAgIHRhZ05hbWU6IHRhcmdldC50YWdOYW1lLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcbiAgICAgICAgICAgIGlubmVyVGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICAgICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICAgICAgdGFyZ2V0OiBzZXJpYWxpemVkVGFyZ2V0LFxuICAgICAgICAgICAgLy8gICB0YXJnZXRPdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUwsXG4gICAgICAgICAgICAvLyAgIHRhcmdldENsYXNzOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgLy8gICB0YXJnZXRJZDogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgLy8gICB0YXJnZXRUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciB8fCAnJyxcbiAgICAgICAgICAgICdkYXRhLXNlbWFudGljLWlkJzogY2xpY2thYmxlSWQgfHwgJycsXG4gICAgICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgICAgIGh0bWxDb250ZW50OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICAvLyB0b2RvOiBwYXRjaCByZW1vdmVFdmVudExpc3RlbmVyIHN1cHBvcnQgd3JhcFxuICAgIGNvbnN0IGJsb2NrU2lnbmFscyA9IHt9O1xuICAgIGNvbnN0IGV4ZWN1dGVEZWZhdWx0QWN0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4ZWN1dGVEZWZhdWx0QWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIGlmIChldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgcHJldmVudGVkIGluIG9yaWdpbmFsIGxpc3RlbmVyJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5jaG9yID0gZWxlbWVudC5jbG9zZXN0KCdhJyk7XG4gICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgc3VibWl0LCBzdWJtaXQgdGhlIGZvcm1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCB0aGUgZm9ybScpO1xuICAgICAgICAgICAgICAgIChfYSA9IGVsZW1lbnQuZm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYXNEZWZhdWx0QWN0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGVsZW1lbnQuY2xvc2VzdCgnYScpO1xuICAgICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgICAgICBpZiAoYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGlkIGlzIG5hdi1zZWFyY2gtc3VibWl0LWJ1dHRvblxuICAgICAgICAvLyBpZiAoZWxlbWVudC5pZCA9PT0gJ25hdi1zZWFyY2gtc3VibWl0LWJ1dHRvbicpIHtcbiAgICAgICAgLy8gICByZXR1cm4gdHJ1ZVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvLyBNb25rZXkgcGF0Y2ggYWRkRXZlbnRMaXN0ZW5lclxuICAgIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5za2lwX21vbmtleV9wYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJyAmJiBsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGcm9tUG9wdXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5qdXN0X2Zvcl9kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93IC0gbGFzdENsaWNrVGltZXN0YW1wIDwgREVCT1VOQ0VfREVMQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGNsaWNrIGV2ZW50LCBibG9ja2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2lnbmFsID0gYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uc2lnbmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdhaXRfZm9yX2Fib3J0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGFscmVhZHkgYWJvcnRlZCwgcmVzb2x2ZSBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBsaXN0ZW4gZm9yIHRoZSBhYm9ydCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4gcmVzb2x2ZSh2b2lkIDApLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB3YWl0X2Zvcl9hYm9ydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCwgdW5ibG9ja2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQsIG5vIGJsb2NrIHNpZ25hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhc3RDbGlja1RpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0gPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBkZXRlY3RlZCBvbjonLCBldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGFuY2hvciA9IHRhcmdldC5jbG9zZXN0KCdhJylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBDbGljayBvbiBjYW5jZWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5teV9kZWZhdWx0X3ByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZnRlciBwYXRjaCBldmVudCcsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFRpbWVPdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oJ2NsaWNrX2EnLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgZ2VuZXJhdGVTZWxlY3RvcihldmVudC50YXJnZXQpLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgc2xlZXAgNSBzZWNvbmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydChcIjFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0KFwiM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBzY3JlZW5zaG90Q29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgaW50ZXJhY3Rpb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBsZXRlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoXCIyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmUtZGlzcGF0Y2ggdGhlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1NpZ25hbHNbbGFzdENsaWNrVGltZXN0YW1wXS5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm15X2RlZmF1bHRfcHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb25lIHRoZSBvcmlnaW5hbCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6IGV2ZW50LmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6IGV2ZW50LnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGV2ZW50LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5ZOiBldmVudC5zY3JlZW5ZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsS2V5OiBldmVudC5jdHJsS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0S2V5OiBldmVudC5hbHRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhS2V5OiBldmVudC5tZXRhS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiBldmVudC5idXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZFRhcmdldDogZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlLWRpc3BhdGNoIHRoZSBuZXcgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3RXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0byB3YWl0IGZvciBzY3JlZW5zaG90IGNvbXBsZXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJiBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oJ2NsaWNrX2InLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgZ2VuZXJhdGVTZWxlY3RvcihldmVudC50YXJnZXQpLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXF1ZXN0IHNjcmVlbnNob3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHNjcmVlbnNob3RDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGludGVyYWN0aW9uQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIG9yaWdpbmFsIGxpc3RlbmVyIGFmdGVyIHNjcmVlbnNob3QgaXMgY2FwdHVyZWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncnVubmluZyBvcmlnaW5hbCBsaXN0ZW5lcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgd2l0aCB0aGUgd3JhcHBlZCBsaXN0ZW5lclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBib29sZWFuLCBzZXQgcGFzc2l2ZSB0byB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCB3cmFwcGVkTGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJyk7XG4gICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrcyBvbiA8YT4gdGFnc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUFuY2hvckNsaWNrcygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnJvbVBvcHVwKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuanVzdF9mb3JfZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2tpcCBtb25rZXkgcGF0Y2ggYicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gbGFzdENsaWNrVGltZXN0YW1wIDwgREVCT1VOQ0VfREVMQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgYW5jaG9yIGNsaWNrIGV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdENsaWNrVGltZXN0YW1wID0gbm93O1xuICAgICAgICAgICAgICAgIGJsb2NrU2lnbmFsc1tsYXN0Q2xpY2tUaW1lc3RhbXBdID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IDxhPiB0YWcgaW4gY2FzZSBvZiBuZXN0ZWQgZWxlbWVudHMgaW5zaWRlIHRoZSA8YT5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRBY3Rpb24oZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIDxhPiB0YWc6JywgYW5jaG9yLmhyZWYpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbSW50ZXJjZXB0ZWRdIENsaWNrIG9uIGNhbmNlbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCFhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZlxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55uR5ZCs5oiq5Zu+5a6M5oiQ55qE5raI5oGvXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7IC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6YCB5oiq5Zu+6K+35rGCXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oJ2NsaWNrX2MnLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgZ2VuZXJhdGVTZWxlY3Rvcih0YXJnZXQpLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g562J5b6F5oiq5Zu+5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBzY3JlZW5zaG90Q29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBpbnRlcmFjdGlvbkNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oiq5Zu+56Gu6K6k5a6M5oiQ5ZCO5YaN6Lez6L2sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tTaWduYWxzW2xhc3RDbGlja1RpbWVzdGFtcF0uYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZS1kaXNwYXRjaCB0aGUgZXZlbnQgaWYgaXRzIG5vdCBwcmV2ZW50ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnQubXlfZGVmYXVsdF9wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LnR5cGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlczogZXZlbnQuYnViYmxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBldmVudC5jb21wb3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldzogZXZlbnQudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiBldmVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlblg6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlblk6IGV2ZW50LnNjcmVlblksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmxLZXk6IGV2ZW50LmN0cmxLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdEtleTogZXZlbnQuYWx0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFLZXk6IGV2ZW50Lm1ldGFLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjogZXZlbnQuYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBldmVudC5idXR0b25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkVGFyZ2V0OiBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuanVzdF9mb3JfZGVmYXVsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmUtZGlzcGF0Y2ggdGhlIG5ldyBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB1c2VDYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgc2tpcF9tb25rZXlfcGF0Y2g6IHRydWUsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTsgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG4gICAgfVxuICAgIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSA8YT4gdGFnIGNsaWNrc1xuICAgIGhhbmRsZUFuY2hvckNsaWNrcygpO1xufTtcbmlmICghd2luZG93Lm1vbmtleVBhdGNoZWQpIHtcbiAgICBtb25rZXlQYXRjaCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
