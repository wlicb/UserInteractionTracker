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
      targetOuterHTML: target.outerHTML,
      targetClass: target.className,
      targetId: target.id,
      targetText: target.innerText || target.value || '',
      htmlSnapshotId: currentSnapshotId,
      selector: selector || '',
      clickableId: clickableId || '',
      url: url || '',
      htmlContent: document.documentElement.outerHTML
    }
    return data
  }
  // Monkey patch addEventListener
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    // console.log('[Monkey Patch] Adding event listener for type:', type);
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
          // Add debouncing logic
          const now = Date.now()
          if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
            console.log('[Monkey Patch] Debouncing click event')
            return
          }
          lastClickTimestamp = now
          console.log('[Monkey Patch] Click detected on:', event.target)
          console.log(event.currentTarget)
          const timestamp = new Date().toISOString()
          const anchor = target.closest('a')
          if (
            anchor &&
            anchor.href &&
            anchor.tagName.toLowerCase() === 'a' &&
            !anchor.href.startsWith('javascript:')
          ) {
            event.preventDefault()
            event.stopPropagation()
            const targetHref = anchor.href
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
              window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
              window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
              // Wait for screenshot to complete
              yield screenshotComplete
              yield interactionComplete
              window.location.href = targetHref
            } catch (error) {
              console.error('Error:', error)
              window.location.href = targetHref
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
            if (typeof listener === 'function') {
              listener.call(this, event)
            } else if (listener && typeof listener.handleEvent === 'function') {
              listener.handleEvent.call(listener, event)
            }
          } catch (error) {
            console.error('Error capturing screenshot:', error)
            // Execute original listener even if screenshot fails
            if (typeof listener === 'function') {
              listener.call(this, event)
            } else if (listener && typeof listener.handleEvent === 'function') {
              listener.handleEvent.call(listener, event)
            }
          }
        })
      }
      // Call the original addEventListener with the wrapped listener
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
          // Add debouncing logic
          const now = Date.now()
          if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
            console.log('[Monkey Patch] Debouncing anchor click event')
            return
          }
          lastClickTimestamp = now
          const target = event.target
          // Find the closest <a> tag in case of nested elements inside the <a>
          const anchor = target.closest('a')
          if (anchor && anchor.tagName.toLowerCase() === 'a' && anchor.href) {
            console.log('[Intercepted] Click on <a> tag:', anchor.href)
            if (!anchor.href.startsWith('javascript:')) {
              event.preventDefault()
              event.stopPropagation()
              const timestamp = new Date().toISOString()
              const targetHref = anchor.href
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
                  window.addEventListener('message', handleMessage)
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
                window.location.href = targetHref
              } catch (error) {
                console.error('Error capturing screenshot:', error)
                window.location.href = targetHref
              }
            }
          }
        })
      },
      true
    ) // Use capture phase to intercept the event earlier
  }
  // Call the function to handle <a> tag clicks
  handleAnchorClicks()

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDLHlCQUF5QjtBQUN6QjtBQUNBLDZDQUE2QyxrREFBa0Q7QUFDL0Y7QUFDQSw2Q0FBNkMsMkNBQTJDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssU0FBUztBQUNkO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3V0aWxzL3V0aWwudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9pbmplY3RlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNGcm9tUG9wdXAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoJyNyZWFzb24tbW9kYWwnKSAhPT0gbnVsbDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBpc0Zyb21Qb3B1cCB9IGZyb20gJy4vdXRpbHMvdXRpbCc7XG5jb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbi8vIEFkZCB0aGlzIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmNvbnN0IERFQk9VTkNFX0RFTEFZID0gMTUwOyAvLyAzMDBtc1xubGV0IGxhc3RDbGlja1RpbWVzdGFtcCA9IDA7XG5jb25zdCBUaW1lT3V0ID0gMzAwMDA7XG5mdW5jdGlvbiBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gYGh0bWxfJHtoYXNoQ29kZSh1cmwpfV8ke3RpbWVzdGFtcH1gO1xufVxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKSB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiSGFzaCB2YWx1ZSBiZWZvcmUgcmV0dXJuOlwiLCBoYXNoKTtcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTZWxlY3RvcihlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuaWQpIHtcbiAgICAgICAgcmV0dXJuIGAjJHtlbGVtZW50LmlkfWA7XG4gICAgfVxuICAgIGxldCBwYXRoID0gW107XG4gICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkgJiYgY3VycmVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGxldCBzZWxlY3RvciA9IGN1cnJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUgJiYgdHlwZW9mIGN1cnJlbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZWN0b3IgKz0gJy4nICsgY3VycmVudC5jbGFzc05hbWUudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2libGluZyA9IGN1cnJlbnQ7XG4gICAgICAgIGxldCBudGggPSAxO1xuICAgICAgICB3aGlsZSAoc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gY3VycmVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgbnRoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG50aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yICs9IGA6bnRoLW9mLXR5cGUoJHtudGh9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC51bnNoaWZ0KHNlbGVjdG9yKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguam9pbignID4gJyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0YXJnZXQsIHRpbWVzdGFtcCwgc2VsZWN0b3IsIHVybCkge1xuICAgIGZ1bmN0aW9uIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudCwgZGVwdGggPSAwKSB7XG4gICAgICAgIGlmICghZWxlbWVudCB8fCBkZXB0aCA+PSA1KVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmRDbGlja2FibGVQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBkZXB0aCArIDEpO1xuICAgIH1cbiAgICBjb25zdCBjbGlja2FibGVFbGVtZW50ID0gZmluZENsaWNrYWJsZVBhcmVudCh0YXJnZXQpO1xuICAgIGNvbnN0IGNsaWNrYWJsZUlkID0gY2xpY2thYmxlRWxlbWVudCA/IGNsaWNrYWJsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWNrYWJsZS1pZCcpIHx8ICcnIDogJyc7XG4gICAgLy8gR2VuZXJhdGUgbmV3IEhUTUwgc25hcHNob3QgSURcbiAgICBjb25zdCBjdXJyZW50U25hcHNob3RJZCA9IGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKTtcbiAgICAvLyBDcmVhdGUgYSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgdGFyZ2V0XG4gICAgY29uc3Qgc2VyaWFsaXplZFRhcmdldCA9IHtcbiAgICAgICAgdGFnTmFtZTogdGFyZ2V0LnRhZ05hbWUsXG4gICAgICAgIGNsYXNzTmFtZTogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgaWQ6IHRhcmdldC5pZCxcbiAgICAgICAgaW5uZXJUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgICAgb3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MXG4gICAgfTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBldmVudFR5cGUsXG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuICAgICAgICB0YXJnZXQ6IHNlcmlhbGl6ZWRUYXJnZXQsXG4gICAgICAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbiAgICAgICAgdGFyZ2V0Q2xhc3M6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAgIHRhcmdldElkOiB0YXJnZXQuaWQsXG4gICAgICAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBodG1sU25hcHNob3RJZDogY3VycmVudFNuYXBzaG90SWQsXG4gICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvciB8fCAnJyxcbiAgICAgICAgY2xpY2thYmxlSWQ6IGNsaWNrYWJsZUlkIHx8ICcnLFxuICAgICAgICB1cmw6IHVybCB8fCAnJyxcbiAgICAgICAgaHRtbENvbnRlbnQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbiAgICB9O1xuICAgIHJldHVybiBkYXRhO1xufVxuLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIEFkZGluZyBldmVudCBsaXN0ZW5lciBmb3IgdHlwZTonLCB0eXBlKTtcbiAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJyAmJiBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCB3cmFwcGVkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIGRlYm91bmNpbmcgbG9naWNcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGlmIChub3cgLSBsYXN0Q2xpY2tUaW1lc3RhbXAgPCBERUJPVU5DRV9ERUxBWSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gRGVib3VuY2luZyBjbGljayBldmVudCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3RDbGlja1RpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gQ2xpY2sgZGV0ZWN0ZWQgb246JywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yICYmIGFuY2hvci5ocmVmICYmIGFuY2hvci50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJyAmJiAhYW5jaG9yLmhyZWYuc3RhcnRzV2l0aCgnamF2YXNjcmlwdDonKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oJ2NsaWNrX2EnLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgZ2VuZXJhdGVTZWxlY3RvcihldmVudC50YXJnZXQpLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBzY3JlZW5zaG90Q29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBpbnRlcmFjdGlvbkNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0byB3YWl0IGZvciBzY3JlZW5zaG90IGNvbXBsZXRpb25cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKCdjbGlja19iJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsIGdlbmVyYXRlU2VsZWN0b3IoZXZlbnQudGFyZ2V0KSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXF1ZXN0IHNjcmVlbnNob3RcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnLCBkYXRhOiBkYXRhIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdJTlRFUkFDVElPTl9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdJbnRlcmFjdGlvbiB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBXYWl0IGZvciBzY3JlZW5zaG90IHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNjcmVlbnNob3RDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgaW50ZXJhY3Rpb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBhZnRlciBzY3JlZW5zaG90IGlzIGNhcHR1cmVkXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgZXZlbiBpZiBzY3JlZW5zaG90IGZhaWxzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQuY2FsbChsaXN0ZW5lciwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgd2l0aCB0aGUgd3JhcHBlZCBsaXN0ZW5lclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgd3JhcHBlZExpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGFkZEV2ZW50TGlzdGVuZXIgZm9yIG5vbi1jbGljayBldmVudHNcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICB9XG59O1xuY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIGFkZEV2ZW50TGlzdGVuZXIgc3VjY2Vzc2Z1bGx5IHBhdGNoZWQuJyk7XG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2tzIG9uIDxhPiB0YWdzXG5mdW5jdGlvbiBoYW5kbGVBbmNob3JDbGlja3MoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKG5vdyAtIGxhc3RDbGlja1RpbWVzdGFtcCA8IERFQk9VTkNFX0RFTEFZKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgYW5jaG9yIGNsaWNrIGV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdENsaWNrVGltZXN0YW1wID0gbm93O1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCA8YT4gdGFnIGluIGNhc2Ugb2YgbmVzdGVkIGVsZW1lbnRzIGluc2lkZSB0aGUgPGE+XG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpO1xuICAgICAgICAgICAgaWYgKGFuY2hvciAmJiBhbmNob3IudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYScgJiYgYW5jaG9yLmhyZWYpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0ludGVyY2VwdGVkXSBDbGljayBvbiA8YT4gdGFnOicsIGFuY2hvci5ocmVmKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SHJlZiA9IGFuY2hvci5ocmVmO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g55uR5ZCs5oiq5Zu+5a6M5oiQ55qE5raI5oGvXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgVGltZU91dCk7IC8vIDPnp5LotoXml7ZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6YCB5oiq5Zu+6K+35rGCXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnQ0FQVFVSRV9TQ1JFRU5TSE9UJywgdGltZXN0YW1wOiB0aW1lc3RhbXAgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjYXB0dXJlSW50ZXJhY3Rpb24oJ2NsaWNrX2MnLCBldmVudC50YXJnZXQsIHRpbWVzdGFtcCwgZ2VuZXJhdGVTZWxlY3Rvcih0YXJnZXQpLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBUaW1lT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g562J5b6F5oiq5Zu+5a6M5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBzY3JlZW5zaG90Q29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBpbnRlcmFjdGlvbkNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5oiq5Zu+56Gu6K6k5a6M5oiQ5ZCO5YaN6Lez6L2sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2NyZWVuc2hvdDonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIHRydWUpOyAvLyBVc2UgY2FwdHVyZSBwaGFzZSB0byBpbnRlcmNlcHQgdGhlIGV2ZW50IGVhcmxpZXJcbn1cbi8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSA8YT4gdGFnIGNsaWNrc1xuaGFuZGxlQW5jaG9yQ2xpY2tzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
