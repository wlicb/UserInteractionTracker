/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  /******/ var __webpack_modules__ = {
    /***/ './src/config.ts':
      /*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ base_url: () => /* binding */ base_url,
          /* harmony export */ data_collector_secret_id: () =>
            /* binding */ data_collector_secret_id,
          /* harmony export */ folder_name: () => /* binding */ folder_name,
          /* harmony export */ interaction_url: () => /* binding */ interaction_url,
          /* harmony export */ popup_probability: () => /* binding */ popup_probability,
          /* harmony export */ upload_url: () => /* binding */ upload_url,
          /* harmony export */ url_include: () => /* binding */ url_include,
          /* harmony export */ zip: () => /* binding */ zip
          /* harmony export */
        })
        const popup_probability = 0.15
        const folder_name = `user_interaction_data`
        const zip = true
        const upload_url = 'http://userdatacollect.hailab.io/upload'
        const base_url = 'http://userdatacollect.hailab.io'
        const data_collector_secret_id = '676a665144398e6967567a2b'
        const url_include = 'amazon.com'
        const interaction_url = `${base_url}/interactions`

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
  /*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
  __webpack_require__.r(__webpack_exports__)
  /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./config */ './src/config.ts'
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
  const downloadDataBtn = document.getElementById('downloadData')
  const outputDiv = document.getElementById('output')
  const clearCacheBtn = document.getElementById('clearCache')
  const userIdInput = document.getElementById('userId')

  // Add this function to fetch and display interaction stats
  function displayInteractionStats(userId) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield fetch(
          `${_config__WEBPACK_IMPORTED_MODULE_0__.interaction_url}?user_id=${userId}`,
          {
            method: 'GET'
          }
        )
        const data = yield response.json()
        if (response.ok) {
          outputDiv.textContent = `Total uploads: ${data.all_time}\nToday's uploads: ${data.on_date}`
        } else {
          outputDiv.textContent = `Failed to fetch stats: ${data.error || 'Unknown error'}`
        }
      } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`
      }
    })
  }
  chrome.storage.local.get(['userId'], (result) => {
    if (result.userId) {
      userIdInput.value = result.userId || ''
      displayInteractionStats(result.userId)
    }
    if (result.userId.includes(_config__WEBPACK_IMPORTED_MODULE_0__.data_collector_secret_id)) {
      downloadDataBtn.style.display = 'block' // Show button
    } else {
      downloadDataBtn.style.display = 'none' // Hide button
    }
  })
  userIdInput.addEventListener('change', () => {
    const userId = userIdInput.value.trim()
    chrome.storage.local.set({ userId: userId }, () => {
      outputDiv.textContent = 'User ID saved.'
    })
  })
  downloadDataBtn.addEventListener('click', () => {
    try {
      const userId = userIdInput.value.trim()
      chrome.runtime.sendMessage({ action: 'downloadData', userId }, (response) => {
        if (response.success) {
          outputDiv.textContent = 'Data downloaded successfully.'
        } else {
          outputDiv.textContent = `Failed to download data: ${response.error || 'Unknown error'}`
        }
      })
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`
    }
  })
  clearCacheBtn.addEventListener('click', () => {
    try {
      chrome.storage.local.remove([
        'htmlSnapshots',
        'orderDetails',
        'screenshots',
        'reasonsAnnotation',
        'interactions',
        'user_interaction_tracker_last_timestamp',
        'seen_htmlSnapshots',
        'seen_interactions',
        'seen_orderDetails',
        'seen_screenshots',
        'seen_reasonsAnnotation'
      ])
      chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
        outputDiv.textContent = 'Cache cleared successfully.'
      })
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`
    }
  })

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUzs7Ozs7OztVQ1AzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9EQUFlLENBQUMsV0FBVyxPQUFPO0FBQzlFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSwwREFBMEQsY0FBYyxxQkFBcUIsYUFBYTtBQUMxRztBQUNBO0FBQ0Esa0VBQWtFLDhCQUE4QjtBQUNoRztBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkRBQXdCO0FBQ3ZELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0NBQWdDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGtDQUFrQztBQUN0RztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDRCQUE0QjtBQUNqRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMENBQTBDLGNBQWM7QUFDeEQ7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvcG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBvcHVwX3Byb2JhYmlsaXR5ID0gMC4xNTtcbmV4cG9ydCBjb25zdCBmb2xkZXJfbmFtZSA9IGB1c2VyX2ludGVyYWN0aW9uX2RhdGFgO1xuZXhwb3J0IGNvbnN0IHppcCA9IHRydWU7XG5leHBvcnQgY29uc3QgdXBsb2FkX3VybCA9ICdodHRwOi8vdXNlcmRhdGFjb2xsZWN0LmhhaWxhYi5pby91cGxvYWQnO1xuZXhwb3J0IGNvbnN0IGJhc2VfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvJztcbmV4cG9ydCBjb25zdCBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQgPSAnNjc2YTY2NTE0NDM5OGU2OTY3NTY3YTJiJztcbmV4cG9ydCBjb25zdCB1cmxfaW5jbHVkZSA9ICdhbWF6b24uY29tJztcbmV4cG9ydCBjb25zdCBpbnRlcmFjdGlvbl91cmwgPSBgJHtiYXNlX3VybH0vaW50ZXJhY3Rpb25zYDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCBkb3dubG9hZERhdGFCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWREYXRhJyk7XG5jb25zdCBvdXRwdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XG5jb25zdCBjbGVhckNhY2hlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQ2FjaGUnKTtcbmNvbnN0IHVzZXJJZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJZCcpO1xuaW1wb3J0IHsgZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkLCBpbnRlcmFjdGlvbl91cmwgfSBmcm9tICcuL2NvbmZpZyc7XG4vLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBmZXRjaCBhbmQgZGlzcGxheSBpbnRlcmFjdGlvbiBzdGF0c1xuZnVuY3Rpb24gZGlzcGxheUludGVyYWN0aW9uU3RhdHModXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7aW50ZXJhY3Rpb25fdXJsfT91c2VyX2lkPSR7dXNlcklkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgVG90YWwgdXBsb2FkczogJHtkYXRhLmFsbF90aW1lfVxcblRvZGF5J3MgdXBsb2FkczogJHtkYXRhLm9uX2RhdGV9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBGYWlsZWQgdG8gZmV0Y2ggc3RhdHM6ICR7ZGF0YS5lcnJvciB8fCAnVW5rbm93biBlcnJvcid9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3VzZXJJZCddLCAocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdC51c2VySWQpIHtcbiAgICAgICAgdXNlcklkSW5wdXQudmFsdWUgPSByZXN1bHQudXNlcklkIHx8ICcnO1xuICAgICAgICBkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyhyZXN1bHQudXNlcklkKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC51c2VySWQuaW5jbHVkZXMoZGF0YV9jb2xsZWN0b3Jfc2VjcmV0X2lkKSkge1xuICAgICAgICBkb3dubG9hZERhdGFCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIFNob3cgYnV0dG9uXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb3dubG9hZERhdGFCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gSGlkZSBidXR0b25cbiAgICB9XG59KTtcbnVzZXJJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSB1c2VySWRJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdXNlcklkOiB1c2VySWQgfSwgKCkgPT4ge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnVXNlciBJRCBzYXZlZC4nO1xuICAgIH0pO1xufSk7XG5kb3dubG9hZERhdGFCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcklkID0gdXNlcklkSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2Rvd25sb2FkRGF0YScsIHVzZXJJZCB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gJ0RhdGEgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBGYWlsZWQgdG8gZG93bmxvYWQgZGF0YTogJHtyZXNwb25zZS5lcnJvciB8fCAnVW5rbm93biBlcnJvcid9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbn0pO1xuY2xlYXJDYWNoZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1xuICAgICAgICAgICAgJ2h0bWxTbmFwc2hvdHMnLFxuICAgICAgICAgICAgJ29yZGVyRGV0YWlscycsXG4gICAgICAgICAgICAnc2NyZWVuc2hvdHMnLFxuICAgICAgICAgICAgJ3JlYXNvbnNBbm5vdGF0aW9uJyxcbiAgICAgICAgICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICAgICAgICAgJ3VzZXJfaW50ZXJhY3Rpb25fdHJhY2tlcl9sYXN0X3RpbWVzdGFtcCcsXG4gICAgICAgICAgICAnc2Vlbl9odG1sU25hcHNob3RzJyxcbiAgICAgICAgICAgICdzZWVuX2ludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAnc2Vlbl9vcmRlckRldGFpbHMnLFxuICAgICAgICAgICAgJ3NlZW5fc2NyZWVuc2hvdHMnLFxuICAgICAgICAgICAgJ3NlZW5fcmVhc29uc0Fubm90YXRpb24nXG4gICAgICAgIF0pO1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2NsZWFyTWVtb3J5Q2FjaGUnIH0sICgpID0+IHtcbiAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9ICdDYWNoZSBjbGVhcmVkIHN1Y2Nlc3NmdWxseS4nO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
