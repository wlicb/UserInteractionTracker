/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base_url: () => (/* binding */ base_url),
/* harmony export */   data_collector_secret_id: () => (/* binding */ data_collector_secret_id),
/* harmony export */   filter_url: () => (/* binding */ filter_url),
/* harmony export */   folder_name: () => (/* binding */ folder_name),
/* harmony export */   interaction_url: () => (/* binding */ interaction_url),
/* harmony export */   popup_probability: () => (/* binding */ popup_probability),
/* harmony export */   upload_url: () => (/* binding */ upload_url),
/* harmony export */   url_include: () => (/* binding */ url_include),
/* harmony export */   zip: () => (/* binding */ zip)
/* harmony export */ });
const popup_probability = 0.15;
const folder_name = `user_interaction_data`;
const zip = true;
const upload_url = 'http://userdatacollect.hailab.io/upload';
const base_url = 'http://userdatacollect.hailab.io';
const data_collector_secret_id = '676a665144398e6967567a2b';
const url_include = 'amazon.com';
const interaction_url = `${base_url}/interactions`;
const filter_url = [
    'https://www.amazon.com/checkout/',
    'https://www.amazon.com/gp/buy/',
    'https://www.amazon.com/a/addresses',
    'https://www.amazon.com/cpe/yourpayments/',
    'https://www.amazon.com/gp/product/handle-buy-box/',
    'https://www.amazon.com/gp/checkoutportal/',
    'https://www.amazon.com/gp/cart/desktop/'
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const downloadDataBtn = document.getElementById('downloadData');
const outputDiv = document.getElementById('output');
const clearCacheBtn = document.getElementById('clearCache');
const userIdInput = document.getElementById('userId');

// Add this function to fetch and display interaction stats
function displayInteractionStats(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__.interaction_url}?user_id=${userId}`, {
                method: 'GET'
            });
            const data = yield response.json();
            if (response.ok) {
                outputDiv.textContent = `Total uploads: ${data.all_time}\nToday's uploads: ${data.on_date}`;
            }
            else {
                outputDiv.textContent = `Failed to fetch stats: ${data.error || 'Unknown error'}`;
            }
        }
        catch (error) {
            outputDiv.textContent = `Error: ${error.message}`;
        }
    });
}
chrome.storage.local.get(['userId'], (result) => {
    if (result.userId) {
        userIdInput.value = result.userId || '';
        displayInteractionStats(result.userId);
    }
    if (result.userId.includes(_config__WEBPACK_IMPORTED_MODULE_0__.data_collector_secret_id)) {
        downloadDataBtn.style.display = 'block'; // Show button
    }
    else {
        downloadDataBtn.style.display = 'none'; // Hide button
    }
});
userIdInput.addEventListener('change', () => {
    const userId = userIdInput.value.trim();
    chrome.storage.local.set({ userId: userId }, () => {
        outputDiv.textContent = 'User ID saved.';
    });
});
downloadDataBtn.addEventListener('click', () => {
    try {
        const userId = userIdInput.value.trim();
        chrome.runtime.sendMessage({ action: 'downloadData', userId }, (response) => {
            if (response.success) {
                outputDiv.textContent = 'Data downloaded successfully.';
            }
            else {
                outputDiv.textContent = `Failed to download data: ${response.error || 'Unknown error'}`;
            }
        });
    }
    catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});
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
        ]);
        chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
            outputDiv.textContent = 'Cache cleared successfully.';
        });
    }
    catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsb0RBQWUsQ0FBQyxXQUFXLE9BQU87QUFDOUU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDBEQUEwRCxjQUFjLHFCQUFxQixhQUFhO0FBQzFHO0FBQ0E7QUFDQSxrRUFBa0UsOEJBQThCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2REFBd0I7QUFDdkQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0Usa0NBQWtDO0FBQ3RHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNEJBQTRCO0FBQ2pFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcG9wdXBfcHJvYmFiaWxpdHkgPSAwLjE1O1xuZXhwb3J0IGNvbnN0IGZvbGRlcl9uYW1lID0gYHVzZXJfaW50ZXJhY3Rpb25fZGF0YWA7XG5leHBvcnQgY29uc3QgemlwID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCB1cGxvYWRfdXJsID0gJ2h0dHA6Ly91c2VyZGF0YWNvbGxlY3QuaGFpbGFiLmlvL3VwbG9hZCc7XG5leHBvcnQgY29uc3QgYmFzZV91cmwgPSAnaHR0cDovL3VzZXJkYXRhY29sbGVjdC5oYWlsYWIuaW8nO1xuZXhwb3J0IGNvbnN0IGRhdGFfY29sbGVjdG9yX3NlY3JldF9pZCA9ICc2NzZhNjY1MTQ0Mzk4ZTY5Njc1NjdhMmInO1xuZXhwb3J0IGNvbnN0IHVybF9pbmNsdWRlID0gJ2FtYXpvbi5jb20nO1xuZXhwb3J0IGNvbnN0IGludGVyYWN0aW9uX3VybCA9IGAke2Jhc2VfdXJsfS9pbnRlcmFjdGlvbnNgO1xuZXhwb3J0IGNvbnN0IGZpbHRlcl91cmwgPSBbXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY2hlY2tvdXQvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9idXkvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9hL2FkZHJlc3NlcycsXG4gICAgJ2h0dHBzOi8vd3d3LmFtYXpvbi5jb20vY3BlL3lvdXJwYXltZW50cy8nLFxuICAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL3Byb2R1Y3QvaGFuZGxlLWJ1eS1ib3gvJyxcbiAgICAnaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9ncC9jaGVja291dHBvcnRhbC8nLFxuICAgICdodHRwczovL3d3dy5hbWF6b24uY29tL2dwL2NhcnQvZGVza3RvcC8nXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IGRvd25sb2FkRGF0YUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZERhdGEnKTtcbmNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmNvbnN0IGNsZWFyQ2FjaGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJDYWNoZScpO1xuY29uc3QgdXNlcklkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJyk7XG5pbXBvcnQgeyBkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQsIGludGVyYWN0aW9uX3VybCB9IGZyb20gJy4vY29uZmlnJztcbi8vIEFkZCB0aGlzIGZ1bmN0aW9uIHRvIGZldGNoIGFuZCBkaXNwbGF5IGludGVyYWN0aW9uIHN0YXRzXG5mdW5jdGlvbiBkaXNwbGF5SW50ZXJhY3Rpb25TdGF0cyh1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtpbnRlcmFjdGlvbl91cmx9P3VzZXJfaWQ9JHt1c2VySWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBUb3RhbCB1cGxvYWRzOiAke2RhdGEuYWxsX3RpbWV9XFxuVG9kYXkncyB1cGxvYWRzOiAke2RhdGEub25fZGF0ZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEZhaWxlZCB0byBmZXRjaCBzdGF0czogJHtkYXRhLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsndXNlcklkJ10sIChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LnVzZXJJZCkge1xuICAgICAgICB1c2VySWRJbnB1dC52YWx1ZSA9IHJlc3VsdC51c2VySWQgfHwgJyc7XG4gICAgICAgIGRpc3BsYXlJbnRlcmFjdGlvblN0YXRzKHJlc3VsdC51c2VySWQpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LnVzZXJJZC5pbmNsdWRlcyhkYXRhX2NvbGxlY3Rvcl9zZWNyZXRfaWQpKSB7XG4gICAgICAgIGRvd25sb2FkRGF0YUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gU2hvdyBidXR0b25cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvd25sb2FkRGF0YUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIGJ1dHRvblxuICAgIH1cbn0pO1xudXNlcklkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJJZElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB1c2VySWQ6IHVzZXJJZCB9LCAoKSA9PiB7XG4gICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9ICdVc2VyIElEIHNhdmVkLic7XG4gICAgfSk7XG59KTtcbmRvd25sb2FkRGF0YUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VySWQgPSB1c2VySWRJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnZG93bmxvYWREYXRhJywgdXNlcklkIH0sIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnRGF0YSBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseS4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEZhaWxlZCB0byBkb3dubG9hZCBkYXRhOiAke3Jlc3BvbnNlLmVycm9yIHx8ICdVbmtub3duIGVycm9yJ31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWA7XG4gICAgfVxufSk7XG5jbGVhckNhY2hlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShbXG4gICAgICAgICAgICAnaHRtbFNuYXBzaG90cycsXG4gICAgICAgICAgICAnb3JkZXJEZXRhaWxzJyxcbiAgICAgICAgICAgICdzY3JlZW5zaG90cycsXG4gICAgICAgICAgICAncmVhc29uc0Fubm90YXRpb24nLFxuICAgICAgICAgICAgJ2ludGVyYWN0aW9ucycsXG4gICAgICAgICAgICAndXNlcl9pbnRlcmFjdGlvbl90cmFja2VyX2xhc3RfdGltZXN0YW1wJyxcbiAgICAgICAgICAgICdzZWVuX2h0bWxTbmFwc2hvdHMnLFxuICAgICAgICAgICAgJ3NlZW5faW50ZXJhY3Rpb25zJyxcbiAgICAgICAgICAgICdzZWVuX29yZGVyRGV0YWlscycsXG4gICAgICAgICAgICAnc2Vlbl9zY3JlZW5zaG90cycsXG4gICAgICAgICAgICAnc2Vlbl9yZWFzb25zQW5ub3RhdGlvbidcbiAgICAgICAgXSk7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnY2xlYXJNZW1vcnlDYWNoZScgfSwgKCkgPT4ge1xuICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gJ0NhY2hlIGNsZWFyZWQgc3VjY2Vzc2Z1bGx5Lic7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
