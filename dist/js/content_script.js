/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ randomUUID });


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
    if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
        return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
    return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/content_script.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

// import {debounce} from 'lodash'

console.log((0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])());
console.log(123);
// window.addEventListener('message', async (event) => {
//   if (event.source !== window) return

//   if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
//     await captureScreenshot(event.data.timestamp, event.data.uuid)
//   }
//   if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
//     try {
//       const result = await chrome.storage.local.get(['htmlSnapshots'])
//       const htmlSnapshots = result.htmlSnapshots || {}
//       const html_id = event.data.data.htmlSnapshotId + '_' + event.data.uuid
//       htmlSnapshots[html_id] = event.data.data.htmlContent
//       chrome.storage.local.set({ htmlSnapshots })
//       const dataForBackground = { ...event.data.data }
//       delete dataForBackground.htmlContent

//       const response2 = await chrome.runtime.sendMessage({
//         action: 'saveData',
//         data: dataForBackground
//       })
//       if (!response2.success) {
//         throw new Error(response2.message || 'interaction capture failed')
//       }
//       console.log(response2)
//       window.postMessage(
//         {
//           type: 'INTERACTION_COMPLETE',
//           timestamp: event.data.data.timestamp,
//           success: true
//         },
//         '*'
//       )
//     } catch (error) {
//       console.error('Error saving interaction data:', error)
//       window.postMessage(
//         {
//           type: 'INTERACTION_COMPLETE',
//           success: false,
//           error: error.message,
//           timestamp: event.data.data.timestamp
//         },
//         '*'
//       )
//     }
//   }
// })

// async function captureScreenshot(timestamp: string, uuid: string) {
//   try {
//     const screenshotId = `screenshot_${timestamp}_${uuid}`
//     const response = await chrome.runtime.sendMessage({
//       action: 'captureScreenshot',
//       screenshotId
//     })

//     if (!response.success) {
//       throw new Error(response.message || 'Screenshot capture failed')
//     }

//     window.postMessage(
//       {
//         type: 'SCREENSHOT_COMPLETE',
//         timestamp: timestamp,
//         success: true
//       },
//       '*'
//     )
//   } catch (error) {
//     console.error('Error capturing screenshot in content script:', error)

//     window.postMessage(
//       {
//         type: 'SCREENSHOT_COMPLETE',
//         timestamp: timestamp,
//         success: false,
//         error: error.message
//       },
//       '*'
//     )
//   }
// }

// export {} // Makes this file a module
// import { processElement } from './utils/element-processor'
// // Define interfaces for Recipe and OrderDetail
// interface Recipe {
//   tag_name?: string
//   text_selector?: string
//   text_js?: string
//   add_text?: boolean
//   text_format?: string
//   name?: string
//   clickable?: boolean
//   click_selector?: string
//   keep_attr?: { [key: string]: string }
//   override_attr?: { [key: string]: string }
//   children?: Recipe[]
//   insert_split_marker?: boolean
//   insert_split_marker_every?: number
//   direct_child?: boolean
//   empty_message?: string
//   [key: string]: any // Allow additional properties
// }

// interface OrderDetail {
//   name: string
//   price: number
// }

// // Extend the Window interface to include custom properties
// declare global {
//   interface Window {
//     clickable_recipes?: { [key: string]: Recipe }
//     input_recipes?: { [key: string]: Recipe }
//   }
// }

// let lastScrollTime = 0 // Track last scroll timestamp
// const SCROLL_THRESHOLD = 1500 // Minimum time in ms between screenshots for scroll actions

// function selectRecipe() {
//   const parsedUrl = new URL(window.location.href)
//   const path = parsedUrl.pathname

//   for (const recipe of recipes) {
//     const matchMethod = recipe.match_method || 'text'
//     if (matchMethod === 'text') {
//       try {
//         // Execute script in tab to check for matching element
//         const element = document.querySelector(recipe.match)

//         const hasMatch =
//           element &&
//           (!recipe.match_text ||
//             (element.textContent?.toLowerCase().includes(recipe.match_text.toLowerCase()) ?? false))

//         if (hasMatch) {
//           return recipe
//         }
//       } catch (error) {
//         console.error('Error checking text match:', error)
//       }
//     } else if (matchMethod === 'url' && recipe.match === path) {
//       return recipe
//     }
//   }

//   throw new Error(`No matching recipe found for path: ${path}`)
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   console.log('DOMContentLoaded')

//   const url = window.location.href
//   try {
//     const recipe = selectRecipe()
//     const rootElement = document.querySelector(recipe.selector)

//     if (rootElement) {
//       const newRoot = processElement(rootElement, recipe)

//       console.log(newRoot.outerHTML)
//     }
//   } catch (error) {
//     console.error('Error initializing clickable elements:', error)
//   }
// })

// function generateHtmlSnapshotId(uuid: string) {
//   const url = window.location.href
//   const timestamp = new Date().toISOString()
//   return `html_${hashCode(url)}_${timestamp}_${uuid}`
// }
// function hashCode(str: string) {
//   let hash = 0
//   for (let i = 0; i < str.length; i++) {
//     hash = (hash << 5) - hash + str.charCodeAt(i)
//     hash |= 0
//   }
//   console.log('Hash value before return:', hash)
//   return hash.toString()
// }

// // Function to capture interactions
// async function captureInteraction(
//   eventType: string,
//   target: any,
//   timestamp: string,
//   selector: string,
//   clickableId: string,
//   url: string,
//   uuid: string
// ) {
//   try {
//     // Generate new HTML snapshot ID
//     const currentSnapshotId = generateHtmlSnapshotId(uuid)

//     // Save HTML snapshot and wait for it to complete
//     // await new Promise((resolve, reject) => {
//     const result = await chrome.storage.local.get(['htmlSnapshots'])
//     const htmlSnapshots = result.htmlSnapshots || {}
//     const markedDoc = getClickableElementsInViewport()
//     htmlSnapshots[currentSnapshotId] = markedDoc.documentElement.outerHTML
//     chrome.storage.local.set({ htmlSnapshots })
//     // })
//     const pageMeta = findPageMeta()
//     // const clickableElements = getClickableElementsInViewport();
//     const data = {
//       uuid: uuid,
//       eventType,
//       timestamp: timestamp,
//       target: target,
//       //   targetOuterHTML: target.outerHTML,
//       //   targetClass: target.className,
//       //   targetId: target.id,
//       //   targetText: target.innerText || target.value || '',
//       htmlSnapshotId: currentSnapshotId, // Use the new snapshot ID
//       // clickableElements: clickableElements,
//       selector: selector || '',
//       url: url || '',
//       pageMeta: pageMeta || ''
//     }

//     await chrome.runtime.sendMessage({ action: 'saveData', data })
//   } catch (error) {
//     console.error(`Error during ${eventType} event handling:`, error)
//   }
// }

// // Capture scroll interactions
// document.addEventListener('scroll', async (event) => {
//   try {
//     // scroll don't have a specific target, so we judge whether popup is open
//     if (document.getElementById('reason-modal')) {
//       return
//     }
//     const currentTime = Date.now()
//     if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
//       lastScrollTime = currentTime
//       const timestamp = new Date().toISOString()
//       const uuid = uuidv4()
//       await captureInteraction('scroll', event.target, timestamp, '', '', '', uuid)
//       await captureScreenshot(timestamp, uuid)
//     }
//   } catch (error) {
//     console.error('Error during scroll event handling:', error)
//   }
// })

// document.addEventListener(
//   'blur',
//   async (event) => {
//     const target = event.target as HTMLElement
//     if (isFromPopup(target)) return
//     if (
//       target &&
//       ((target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'text') ||
//         target.tagName === 'TEXTAREA')
//     ) {
//       const timestamp = new Date().toISOString()
//       const uuid = uuidv4()
//       await captureScreenshot(timestamp, uuid)
//       await captureInteraction('input', target, timestamp, '', '', '', uuid)
//     }
//   },
//   true
// )

// // Capture click interactions
// function getUniqueSelector(element: any) {
//   if (element.id) {
//     return `#${element.id}`
//   }
//   if (element.className) {
//     const className = element.className.trim().split(/\s+/).join('.')
//     return `${element.tagName.toLowerCase()}.${className}`
//   }
//   return element.tagName.toLowerCase()
// }

// function getFullSelector(element: any) {
//   let path: string[] = []
//   while (element.parentElement) {
//     path.unshift(getUniqueSelector(element))
//     element = element.parentElement
//   }
//   return path.join(' > ')
// }

// document.addEventListener('DOMContentLoaded', () => {
//   // Handle all types of order buttons
//   const placeOrderButtons = document.querySelectorAll(
//     'input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]'
//   )
//   const buyNowButton = document.querySelector('input[id="buy-now-button"]')
//   const setupNowButton = document.querySelector('button[id="rcx-subscribe-submit-button-announce"]')
//   const proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]')

//   // Handle Buy Now and Set Up Now buttons if present
//   ;[buyNowButton, setupNowButton].forEach((button) => {
//     if (button) {
//       button.addEventListener('click', async () => {
//         try {
//           const productInfo = {
//             title: (document.querySelector('#title') as HTMLElement)?.innerText?.trim() || '',
//             price:
//               (
//                 document.querySelector(
//                   'span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay'
//                 ) as HTMLElement
//               )?.innerText?.trim() || '',
//             asin: (document.querySelector('input#ASIN') as HTMLInputElement)?.value || '',
//             options: {}
//           }

//           // Get all option selections
//           const optionRows = Array.from(
//             document.querySelectorAll(
//               '#twister div.a-row:has(label.a-form-label):has(span.selection)'
//             )
//           )
//           optionRows.forEach((row) => {
//             const label =
//               (row.querySelector('label.a-form-label') as HTMLElement)?.innerText?.replace(
//                 ': ',
//                 ''
//               ) || ''
//             const value = (row.querySelector('span.selection') as HTMLElement)?.innerText || ''
//             if (label && value) {
//               ;(productInfo.options as any)[label] = value
//             }
//           })

//           console.log(`${button.id} clicked - Product Info:`, productInfo)

//           // Store the product info
//           let result = await chrome.storage.local.get({ orderDetails: [] })
//           const orderDetails = result.orderDetails || []
//           orderDetails.push({
//             timestamp: new Date().toISOString(),
//             name: productInfo.title,
//             price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
//             asin: productInfo.asin,
//             options: productInfo.options
//           })
//           await chrome.storage.local.set({ orderDetails })
//         } catch (error) {
//           console.error(`Error capturing ${button.id} product info:`, error)
//         }
//       })
//     }
//   })
//   if (proceedToCheckoutButton) {
//     proceedToCheckoutButton.addEventListener('click', async (event) => {
//       try {
//         const selectedItems = []
//         const cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter(
//           (item) => item.id !== 'sc-active-cart'
//         )
//         for (const item of cartItems) {
//           const checkbox = item.querySelector('input[type="checkbox"]') as HTMLInputElement
//           if (checkbox && checkbox.checked) {
//             const productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link')
//             if (productLink) {
//               const fullNameElement = productLink.querySelector('.a-truncate-full')
//               const name = fullNameElement?.textContent?.trim() || ''

//               const href = productLink.getAttribute('href') || ''
//               const asin = href.match(/product\/([A-Z0-9]{10})/)?.[1] || ''

//               const priceElement = item.querySelector('.sc-item-price-block .a-offscreen')
//               const price = priceElement
//                 ? parseFloat(priceElement.textContent?.replace(/[^0-9.]/g, '') || '0')
//                 : 0

//               const options: { [key: string]: string } = {}
//               const variationElements = item.querySelectorAll('.sc-product-variation')
//               variationElements.forEach((variation) => {
//                 const label =
//                   variation.querySelector('.a-text-bold')?.textContent?.trim().replace(':', '') ||
//                   ''
//                 const value =
//                   variation.querySelector('.a-size-small:not(.a-text-bold)')?.textContent?.trim() ||
//                   ''
//                 if (label && value) {
//                   options[label] = value
//                 }
//               })

//               selectedItems.push({
//                 timestamp: new Date().toISOString(),
//                 name,
//                 asin,
//                 price,
//                 options
//               })
//             }
//           }
//         }
//         if (selectedItems.length > 0) {
//           let result = await chrome.storage.local.get({ orderDetails: [] })
//           const orderDetails = result.orderDetails || []
//           const updatedOrderDetails = orderDetails.concat(selectedItems)
//           await chrome.storage.local.set({ orderDetails: updatedOrderDetails })
//           console.log('Stored selected cart items:', selectedItems)
//         }
//       } catch (error) {
//         console.error('Error capturing selected cart items:', error)
//       }
//     })
//   }
// })

// chrome.runtime.onMessage.addListener((message, sender, sendResponse: (response?: any) => void) => {
//   if (message.action === 'getHTML') {
//     const markedDoc = getClickableElementsInViewport()
//     const htmlContent = markedDoc.documentElement.outerHTML
//     const pageMeta = findPageMeta()
//     sendResponse({ html: htmlContent, pageMeta: pageMeta })
//   }
//   return true
// })

// function createModal(question: string, sendResponse: (response?: any) => void) {
//   const modalHtml = `
//         <div id="reason-modal" style="
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: rgba(0, 0, 0, 0.5);
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             z-index: 10000;
//         ">
//             <div style="
//                 background: white;
//                 padding: 20px;
//                 border-radius: 8px;
//                 width: 400px;
//             ">
//                 <h3>${question}</h3>
//                 <textarea id="reason-input" style="
//                     width: 100%;
//                     height: 100px;
//                     margin: 10px 0;
//                 "></textarea>
//                 <div style="
//                     text-align: right;
//                     display: flex;
//                     justify-content: flex-end;
//                     gap: 10px;
//                 ">
//                     <button id="reason-skip">Skip</button>
//                     <button id="reason-submit">Submit</button>
//                 </div>
//             </div>
//         </div>
//     `

//   const modalContainer = document.createElement('div')
//   modalContainer.innerHTML = modalHtml
//   // if attach-desktop-sideSheet exists
//   if (document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)')) {
//     document.querySelector('.attach-desktop-sideSheet:not(.aok-hidden)').appendChild(modalContainer)
//   } else {
//     document.body.appendChild(modalContainer)
//   }

//   // Add event listeners
//   document.getElementById('reason-submit').addEventListener('click', () => {
//     const input = document.getElementById('reason-input') as HTMLTextAreaElement
//     console.log('submitBtn clicked')
//     const value = input.value
//     modalContainer.remove()
//     sendResponse({ input: value })
//   })
//   document.getElementById('reason-skip').addEventListener('click', () => {
//     const input = document.getElementById('reason-input') as HTMLTextAreaElement
//     modalContainer.remove()
//     sendResponse({ input: null })
//   })
// }

// // Listen for messages from background script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'show_popup') {
//     console.log('show_popup', message)
//     // assert there isn't already a popup
//     if (document.getElementById('reason-modal')) {
//       return
//     }
//     createModal(message.question, sendResponse)
//     return true // Will respond asynchronously
//   }
// })
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudF9zY3JpcHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlFQUFlLEVBQUUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNEOUIsaUVBQWUsY0FBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHLDhFQUE4RSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUs7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcUM7QUFDckM7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3REFBUTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENRO0FBQ047QUFDc0I7QUFDakQ7QUFDQSxRQUFRLGtEQUFNO0FBQ2QsZUFBZSxrREFBTTtBQUNyQjtBQUNBO0FBQ0EsbURBQW1ELCtDQUFHO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhEQUFlO0FBQzFCO0FBQ0EsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQy9CO0FBQ0EsdUNBQXVDLGlEQUFLO0FBQzVDO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDSnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNKbUM7QUFDbkM7O0FBRUFFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixnREFBTSxDQUFDLENBQUMsQ0FBQztBQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvY29udGVudF9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHsgcmFuZG9tVVVJRCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS04XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDB8ZmZmZmZmZmYtZmZmZi1mZmZmLWZmZmYtZmZmZmZmZmZmZmZmKSQvaTtcbiIsImxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRSYW5kb21WYWx1ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBpZiAoYnVmKSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0O1xuIiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICAgIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBmaW5kUGFnZU1ldGEsIGlzRnJvbVBvcHVwLCBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQgfSBmcm9tICcuL3V0aWxzL3V0aWwnXG5pbXBvcnQgeyByZWNpcGVzIH0gZnJvbSAnLi9yZWNpcGVfbmV3J1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbi8vIGltcG9ydCB7ZGVib3VuY2V9IGZyb20gJ2xvZGFzaCdcblxuY29uc29sZS5sb2codXVpZHY0KCkpXG5jb25zb2xlLmxvZygxMjMpXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGFzeW5jIChldmVudCkgPT4ge1xuLy8gICBpZiAoZXZlbnQuc291cmNlICE9PSB3aW5kb3cpIHJldHVyblxuXG4vLyAgIGlmIChldmVudC5kYXRhLnR5cGUgJiYgZXZlbnQuZGF0YS50eXBlID09PSAnQ0FQVFVSRV9TQ1JFRU5TSE9UJykge1xuLy8gICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KGV2ZW50LmRhdGEudGltZXN0YW1wLCBldmVudC5kYXRhLnV1aWQpXG4vLyAgIH1cbi8vICAgaWYgKGV2ZW50LmRhdGEudHlwZSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdTQVZFX0lOVEVSQUNUSU9OX0RBVEEnKSB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSlcbi8vICAgICAgIGNvbnN0IGh0bWxTbmFwc2hvdHMgPSByZXN1bHQuaHRtbFNuYXBzaG90cyB8fCB7fVxuLy8gICAgICAgY29uc3QgaHRtbF9pZCA9IGV2ZW50LmRhdGEuZGF0YS5odG1sU25hcHNob3RJZCArICdfJyArIGV2ZW50LmRhdGEudXVpZFxuLy8gICAgICAgaHRtbFNuYXBzaG90c1todG1sX2lkXSA9IGV2ZW50LmRhdGEuZGF0YS5odG1sQ29udGVudFxuLy8gICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgaHRtbFNuYXBzaG90cyB9KVxuLy8gICAgICAgY29uc3QgZGF0YUZvckJhY2tncm91bmQgPSB7IC4uLmV2ZW50LmRhdGEuZGF0YSB9XG4vLyAgICAgICBkZWxldGUgZGF0YUZvckJhY2tncm91bmQuaHRtbENvbnRlbnRcblxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuLy8gICAgICAgICBhY3Rpb246ICdzYXZlRGF0YScsXG4vLyAgICAgICAgIGRhdGE6IGRhdGFGb3JCYWNrZ3JvdW5kXG4vLyAgICAgICB9KVxuLy8gICAgICAgaWYgKCFyZXNwb25zZTIuc3VjY2Vzcykge1xuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UyLm1lc3NhZ2UgfHwgJ2ludGVyYWN0aW9uIGNhcHR1cmUgZmFpbGVkJylcbi8vICAgICAgIH1cbi8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlMilcbi8vICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIHR5cGU6ICdJTlRFUkFDVElPTl9DT01QTEVURScsXG4vLyAgICAgICAgICAgdGltZXN0YW1wOiBldmVudC5kYXRhLmRhdGEudGltZXN0YW1wLFxuLy8gICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgJyonXG4vLyAgICAgICApXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyBpbnRlcmFjdGlvbiBkYXRhOicsIGVycm9yKVxuLy8gICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgdHlwZTogJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyxcbi8vICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbi8vICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbi8vICAgICAgICAgICB0aW1lc3RhbXA6IGV2ZW50LmRhdGEuZGF0YS50aW1lc3RhbXBcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgJyonXG4vLyAgICAgICApXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9KVxuXG4vLyBhc3luYyBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdCh0aW1lc3RhbXA6IHN0cmluZywgdXVpZDogc3RyaW5nKSB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3Qgc2NyZWVuc2hvdElkID0gYHNjcmVlbnNob3RfJHt0aW1lc3RhbXB9XyR7dXVpZH1gXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4vLyAgICAgICBhY3Rpb246ICdjYXB0dXJlU2NyZWVuc2hvdCcsXG4vLyAgICAgICBzY3JlZW5zaG90SWRcbi8vICAgICB9KVxuXG4vLyAgICAgaWYgKCFyZXNwb25zZS5zdWNjZXNzKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UubWVzc2FnZSB8fCAnU2NyZWVuc2hvdCBjYXB0dXJlIGZhaWxlZCcpXG4vLyAgICAgfVxuXG4vLyAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuLy8gICAgICAge1xuLy8gICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4vLyAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuLy8gICAgICAgICBzdWNjZXNzOiB0cnVlXG4vLyAgICAgICB9LFxuLy8gICAgICAgJyonXG4vLyAgICAgKVxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90IGluIGNvbnRlbnQgc2NyaXB0OicsIGVycm9yKVxuXG4vLyAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxuLy8gICAgICAge1xuLy8gICAgICAgICB0eXBlOiAnU0NSRUVOU0hPVF9DT01QTEVURScsXG4vLyAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuLy8gICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbi8vICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2Vcbi8vICAgICAgIH0sXG4vLyAgICAgICAnKidcbi8vICAgICApXG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IHt9IC8vIE1ha2VzIHRoaXMgZmlsZSBhIG1vZHVsZVxuLy8gaW1wb3J0IHsgcHJvY2Vzc0VsZW1lbnQgfSBmcm9tICcuL3V0aWxzL2VsZW1lbnQtcHJvY2Vzc29yJ1xuLy8gLy8gRGVmaW5lIGludGVyZmFjZXMgZm9yIFJlY2lwZSBhbmQgT3JkZXJEZXRhaWxcbi8vIGludGVyZmFjZSBSZWNpcGUge1xuLy8gICB0YWdfbmFtZT86IHN0cmluZ1xuLy8gICB0ZXh0X3NlbGVjdG9yPzogc3RyaW5nXG4vLyAgIHRleHRfanM/OiBzdHJpbmdcbi8vICAgYWRkX3RleHQ/OiBib29sZWFuXG4vLyAgIHRleHRfZm9ybWF0Pzogc3RyaW5nXG4vLyAgIG5hbWU/OiBzdHJpbmdcbi8vICAgY2xpY2thYmxlPzogYm9vbGVhblxuLy8gICBjbGlja19zZWxlY3Rvcj86IHN0cmluZ1xuLy8gICBrZWVwX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4vLyAgIG92ZXJyaWRlX2F0dHI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9XG4vLyAgIGNoaWxkcmVuPzogUmVjaXBlW11cbi8vICAgaW5zZXJ0X3NwbGl0X21hcmtlcj86IGJvb2xlYW5cbi8vICAgaW5zZXJ0X3NwbGl0X21hcmtlcl9ldmVyeT86IG51bWJlclxuLy8gICBkaXJlY3RfY2hpbGQ/OiBib29sZWFuXG4vLyAgIGVtcHR5X21lc3NhZ2U/OiBzdHJpbmdcbi8vICAgW2tleTogc3RyaW5nXTogYW55IC8vIEFsbG93IGFkZGl0aW9uYWwgcHJvcGVydGllc1xuLy8gfVxuXG4vLyBpbnRlcmZhY2UgT3JkZXJEZXRhaWwge1xuLy8gICBuYW1lOiBzdHJpbmdcbi8vICAgcHJpY2U6IG51bWJlclxuLy8gfVxuXG4vLyAvLyBFeHRlbmQgdGhlIFdpbmRvdyBpbnRlcmZhY2UgdG8gaW5jbHVkZSBjdXN0b20gcHJvcGVydGllc1xuLy8gZGVjbGFyZSBnbG9iYWwge1xuLy8gICBpbnRlcmZhY2UgV2luZG93IHtcbi8vICAgICBjbGlja2FibGVfcmVjaXBlcz86IHsgW2tleTogc3RyaW5nXTogUmVjaXBlIH1cbi8vICAgICBpbnB1dF9yZWNpcGVzPzogeyBba2V5OiBzdHJpbmddOiBSZWNpcGUgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGxldCBsYXN0U2Nyb2xsVGltZSA9IDAgLy8gVHJhY2sgbGFzdCBzY3JvbGwgdGltZXN0YW1wXG4vLyBjb25zdCBTQ1JPTExfVEhSRVNIT0xEID0gMTUwMCAvLyBNaW5pbXVtIHRpbWUgaW4gbXMgYmV0d2VlbiBzY3JlZW5zaG90cyBmb3Igc2Nyb2xsIGFjdGlvbnNcblxuLy8gZnVuY3Rpb24gc2VsZWN0UmVjaXBlKCkge1xuLy8gICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuLy8gICBjb25zdCBwYXRoID0gcGFyc2VkVXJsLnBhdGhuYW1lXG5cbi8vICAgZm9yIChjb25zdCByZWNpcGUgb2YgcmVjaXBlcykge1xuLy8gICAgIGNvbnN0IG1hdGNoTWV0aG9kID0gcmVjaXBlLm1hdGNoX21ldGhvZCB8fCAndGV4dCdcbi8vICAgICBpZiAobWF0Y2hNZXRob2QgPT09ICd0ZXh0Jykge1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgLy8gRXhlY3V0ZSBzY3JpcHQgaW4gdGFiIHRvIGNoZWNrIGZvciBtYXRjaGluZyBlbGVtZW50XG4vLyAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlY2lwZS5tYXRjaClcblxuLy8gICAgICAgICBjb25zdCBoYXNNYXRjaCA9XG4vLyAgICAgICAgICAgZWxlbWVudCAmJlxuLy8gICAgICAgICAgICghcmVjaXBlLm1hdGNoX3RleHQgfHxcbi8vICAgICAgICAgICAgIChlbGVtZW50LnRleHRDb250ZW50Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHJlY2lwZS5tYXRjaF90ZXh0LnRvTG93ZXJDYXNlKCkpID8/IGZhbHNlKSlcblxuLy8gICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbi8vICAgICAgICAgICByZXR1cm4gcmVjaXBlXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIHRleHQgbWF0Y2g6JywgZXJyb3IpXG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIGlmIChtYXRjaE1ldGhvZCA9PT0gJ3VybCcgJiYgcmVjaXBlLm1hdGNoID09PSBwYXRoKSB7XG4vLyAgICAgICByZXR1cm4gcmVjaXBlXG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgdGhyb3cgbmV3IEVycm9yKGBObyBtYXRjaGluZyByZWNpcGUgZm91bmQgZm9yIHBhdGg6ICR7cGF0aH1gKVxuLy8gfVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCcpXG5cbi8vICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbi8vICAgdHJ5IHtcbi8vICAgICBjb25zdCByZWNpcGUgPSBzZWxlY3RSZWNpcGUoKVxuLy8gICAgIGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWNpcGUuc2VsZWN0b3IpXG5cbi8vICAgICBpZiAocm9vdEVsZW1lbnQpIHtcbi8vICAgICAgIGNvbnN0IG5ld1Jvb3QgPSBwcm9jZXNzRWxlbWVudChyb290RWxlbWVudCwgcmVjaXBlKVxuXG4vLyAgICAgICBjb25zb2xlLmxvZyhuZXdSb290Lm91dGVySFRNTClcbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5pdGlhbGl6aW5nIGNsaWNrYWJsZSBlbGVtZW50czonLCBlcnJvcilcbi8vICAgfVxuLy8gfSlcblxuLy8gZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCh1dWlkOiBzdHJpbmcpIHtcbi8vICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbi8vICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4vLyAgIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfV8ke3V1aWR9YFxuLy8gfVxuLy8gZnVuY3Rpb24gaGFzaENvZGUoc3RyOiBzdHJpbmcpIHtcbi8vICAgbGV0IGhhc2ggPSAwXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIHN0ci5jaGFyQ29kZUF0KGkpXG4vLyAgICAgaGFzaCB8PSAwXG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2coJ0hhc2ggdmFsdWUgYmVmb3JlIHJldHVybjonLCBoYXNoKVxuLy8gICByZXR1cm4gaGFzaC50b1N0cmluZygpXG4vLyB9XG5cbi8vIC8vIEZ1bmN0aW9uIHRvIGNhcHR1cmUgaW50ZXJhY3Rpb25zXG4vLyBhc3luYyBmdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oXG4vLyAgIGV2ZW50VHlwZTogc3RyaW5nLFxuLy8gICB0YXJnZXQ6IGFueSxcbi8vICAgdGltZXN0YW1wOiBzdHJpbmcsXG4vLyAgIHNlbGVjdG9yOiBzdHJpbmcsXG4vLyAgIGNsaWNrYWJsZUlkOiBzdHJpbmcsXG4vLyAgIHVybDogc3RyaW5nLFxuLy8gICB1dWlkOiBzdHJpbmdcbi8vICkge1xuLy8gICB0cnkge1xuLy8gICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4vLyAgICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKHV1aWQpXG5cbi8vICAgICAvLyBTYXZlIEhUTUwgc25hcHNob3QgYW5kIHdhaXQgZm9yIGl0IHRvIGNvbXBsZXRlXG4vLyAgICAgLy8gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2h0bWxTbmFwc2hvdHMnXSlcbi8vICAgICBjb25zdCBodG1sU25hcHNob3RzID0gcmVzdWx0Lmh0bWxTbmFwc2hvdHMgfHwge31cbi8vICAgICBjb25zdCBtYXJrZWREb2MgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKVxuLy8gICAgIGh0bWxTbmFwc2hvdHNbY3VycmVudFNuYXBzaG90SWRdID0gbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbi8vICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBodG1sU25hcHNob3RzIH0pXG4vLyAgICAgLy8gfSlcbi8vICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4vLyAgICAgLy8gY29uc3QgY2xpY2thYmxlRWxlbWVudHMgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKTtcbi8vICAgICBjb25zdCBkYXRhID0ge1xuLy8gICAgICAgdXVpZDogdXVpZCxcbi8vICAgICAgIGV2ZW50VHlwZSxcbi8vICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxuLy8gICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4vLyAgICAgICAvLyAgIHRhcmdldE91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTCxcbi8vICAgICAgIC8vICAgdGFyZ2V0Q2xhc3M6IHRhcmdldC5jbGFzc05hbWUsXG4vLyAgICAgICAvLyAgIHRhcmdldElkOiB0YXJnZXQuaWQsXG4vLyAgICAgICAvLyAgIHRhcmdldFRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuLy8gICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLCAvLyBVc2UgdGhlIG5ldyBzbmFwc2hvdCBJRFxuLy8gICAgICAgLy8gY2xpY2thYmxlRWxlbWVudHM6IGNsaWNrYWJsZUVsZW1lbnRzLFxuLy8gICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuLy8gICAgICAgdXJsOiB1cmwgfHwgJycsXG4vLyAgICAgICBwYWdlTWV0YTogcGFnZU1ldGEgfHwgJydcbi8vICAgICB9XG5cbi8vICAgICBhd2FpdCBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ3NhdmVEYXRhJywgZGF0YSB9KVxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGR1cmluZyAke2V2ZW50VHlwZX0gZXZlbnQgaGFuZGxpbmc6YCwgZXJyb3IpXG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gQ2FwdHVyZSBzY3JvbGwgaW50ZXJhY3Rpb25zXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhc3luYyAoZXZlbnQpID0+IHtcbi8vICAgdHJ5IHtcbi8vICAgICAvLyBzY3JvbGwgZG9uJ3QgaGF2ZSBhIHNwZWNpZmljIHRhcmdldCwgc28gd2UganVkZ2Ugd2hldGhlciBwb3B1cCBpcyBvcGVuXG4vLyAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuLy8gICAgICAgcmV0dXJuXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKVxuLy8gICAgIGlmIChjdXJyZW50VGltZSAtIGxhc3RTY3JvbGxUaW1lID49IFNDUk9MTF9USFJFU0hPTEQpIHtcbi8vICAgICAgIGxhc3RTY3JvbGxUaW1lID0gY3VycmVudFRpbWVcbi8vICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuLy8gICAgICAgY29uc3QgdXVpZCA9IHV1aWR2NCgpXG4vLyAgICAgICBhd2FpdCBjYXB0dXJlSW50ZXJhY3Rpb24oJ3Njcm9sbCcsIGV2ZW50LnRhcmdldCwgdGltZXN0YW1wLCAnJywgJycsICcnLCB1dWlkKVxuLy8gICAgICAgYXdhaXQgY2FwdHVyZVNjcmVlbnNob3QodGltZXN0YW1wLCB1dWlkKVxuLy8gICAgIH1cbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2Nyb2xsIGV2ZW50IGhhbmRsaW5nOicsIGVycm9yKVxuLy8gICB9XG4vLyB9KVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuLy8gICAnYmx1cicsXG4vLyAgIGFzeW5jIChldmVudCkgPT4ge1xuLy8gICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudFxuLy8gICAgIGlmIChpc0Zyb21Qb3B1cCh0YXJnZXQpKSByZXR1cm5cbi8vICAgICBpZiAoXG4vLyAgICAgICB0YXJnZXQgJiZcbi8vICAgICAgICgodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgKHRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS50eXBlID09PSAndGV4dCcpIHx8XG4vLyAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnKVxuLy8gICAgICkge1xuLy8gICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4vLyAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KClcbi8vICAgICAgIGF3YWl0IGNhcHR1cmVTY3JlZW5zaG90KHRpbWVzdGFtcCwgdXVpZClcbi8vICAgICAgIGF3YWl0IGNhcHR1cmVJbnRlcmFjdGlvbignaW5wdXQnLCB0YXJnZXQsIHRpbWVzdGFtcCwgJycsICcnLCAnJywgdXVpZClcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIHRydWVcbi8vIClcblxuLy8gLy8gQ2FwdHVyZSBjbGljayBpbnRlcmFjdGlvbnNcbi8vIGZ1bmN0aW9uIGdldFVuaXF1ZVNlbGVjdG9yKGVsZW1lbnQ6IGFueSkge1xuLy8gICBpZiAoZWxlbWVudC5pZCkge1xuLy8gICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gXG4vLyAgIH1cbi8vICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lKSB7XG4vLyAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUudHJpbSgpLnNwbGl0KC9cXHMrLykuam9pbignLicpXG4vLyAgICAgcmV0dXJuIGAke2VsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpfS4ke2NsYXNzTmFtZX1gXG4vLyAgIH1cbi8vICAgcmV0dXJuIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldEZ1bGxTZWxlY3RvcihlbGVtZW50OiBhbnkpIHtcbi8vICAgbGV0IHBhdGg6IHN0cmluZ1tdID0gW11cbi8vICAgd2hpbGUgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuLy8gICAgIHBhdGgudW5zaGlmdChnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSlcbi8vICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XG4vLyAgIH1cbi8vICAgcmV0dXJuIHBhdGguam9pbignID4gJylcbi8vIH1cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgLy8gSGFuZGxlIGFsbCB0eXBlcyBvZiBvcmRlciBidXR0b25zXG4vLyAgIGNvbnN0IHBsYWNlT3JkZXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbi8vICAgICAnaW5wdXRbaWQ9XCJwbGFjZU9yZGVyXCJdLCBpbnB1dFtpZD1cInR1cmJvLWNoZWNrb3V0LXB5by1idXR0b25cIl0nXG4vLyAgIClcbi8vICAgY29uc3QgYnV5Tm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJidXktbm93LWJ1dHRvblwiXScpXG4vLyAgIGNvbnN0IHNldHVwTm93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwicmN4LXN1YnNjcmliZS1zdWJtaXQtYnV0dG9uLWFubm91bmNlXCJdJylcbi8vICAgY29uc3QgcHJvY2VlZFRvQ2hlY2tvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvY2VlZFRvUmV0YWlsQ2hlY2tvdXRcIl0nKVxuXG4vLyAgIC8vIEhhbmRsZSBCdXkgTm93IGFuZCBTZXQgVXAgTm93IGJ1dHRvbnMgaWYgcHJlc2VudFxuLy8gICA7W2J1eU5vd0J1dHRvbiwgc2V0dXBOb3dCdXR0b25dLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuLy8gICAgIGlmIChidXR0b24pIHtcbi8vICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbi8vICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICBjb25zdCBwcm9kdWN0SW5mbyA9IHtcbi8vICAgICAgICAgICAgIHRpdGxlOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQ/LnRyaW0oKSB8fCAnJyxcbi8vICAgICAgICAgICAgIHByaWNlOlxuLy8gICAgICAgICAgICAgICAoXG4vLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICAgICAgICAgICAgICAgICAgICdzcGFuLmEtcHJpY2UuYW9rLWFsaWduLWNlbnRlci5yZWludmVudFByaWNlUHJpY2VUb1BheU1hcmdpbi5wcmljZVRvUGF5J1xuLy8gICAgICAgICAgICAgICAgICkgYXMgSFRNTEVsZW1lbnRcbi8vICAgICAgICAgICAgICAgKT8uaW5uZXJUZXh0Py50cmltKCkgfHwgJycsXG4vLyAgICAgICAgICAgICBhc2luOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjQVNJTicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZSB8fCAnJyxcbi8vICAgICAgICAgICAgIG9wdGlvbnM6IHt9XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgLy8gR2V0IGFsbCBvcHRpb24gc2VsZWN0aW9uc1xuLy8gICAgICAgICAgIGNvbnN0IG9wdGlvblJvd3MgPSBBcnJheS5mcm9tKFxuLy8gICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbi8vICAgICAgICAgICAgICAgJyN0d2lzdGVyIGRpdi5hLXJvdzpoYXMobGFiZWwuYS1mb3JtLWxhYmVsKTpoYXMoc3Bhbi5zZWxlY3Rpb24pJ1xuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICAgIClcbi8vICAgICAgICAgICBvcHRpb25Sb3dzLmZvckVhY2goKHJvdykgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgbGFiZWwgPVxuLy8gICAgICAgICAgICAgICAocm93LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsLmEtZm9ybS1sYWJlbCcpIGFzIEhUTUxFbGVtZW50KT8uaW5uZXJUZXh0Py5yZXBsYWNlKFxuLy8gICAgICAgICAgICAgICAgICc6ICcsXG4vLyAgICAgICAgICAgICAgICAgJydcbi8vICAgICAgICAgICAgICAgKSB8fCAnJ1xuLy8gICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAocm93LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uc2VsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQpPy5pbm5lclRleHQgfHwgJydcbi8vICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICA7KHByb2R1Y3RJbmZvLm9wdGlvbnMgYXMgYW55KVtsYWJlbF0gPSB2YWx1ZVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0pXG5cbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtidXR0b24uaWR9IGNsaWNrZWQgLSBQcm9kdWN0IEluZm86YCwgcHJvZHVjdEluZm8pXG5cbi8vICAgICAgICAgICAvLyBTdG9yZSB0aGUgcHJvZHVjdCBpbmZvXG4vLyAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh7IG9yZGVyRGV0YWlsczogW10gfSlcbi8vICAgICAgICAgICBjb25zdCBvcmRlckRldGFpbHMgPSByZXN1bHQub3JkZXJEZXRhaWxzIHx8IFtdXG4vLyAgICAgICAgICAgb3JkZXJEZXRhaWxzLnB1c2goe1xuLy8gICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4vLyAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0SW5mby50aXRsZSxcbi8vICAgICAgICAgICAgIHByaWNlOiBwYXJzZUZsb2F0KHByb2R1Y3RJbmZvLnByaWNlLnJlcGxhY2UoL1teMC05Ll0vZywgJycpKSxcbi8vICAgICAgICAgICAgIGFzaW46IHByb2R1Y3RJbmZvLmFzaW4sXG4vLyAgICAgICAgICAgICBvcHRpb25zOiBwcm9kdWN0SW5mby5vcHRpb25zXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBvcmRlckRldGFpbHMgfSlcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjYXB0dXJpbmcgJHtidXR0b24uaWR9IHByb2R1Y3QgaW5mbzpgLCBlcnJvcilcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSlcbi8vICAgICB9XG4vLyAgIH0pXG4vLyAgIGlmIChwcm9jZWVkVG9DaGVja291dEJ1dHRvbikge1xuLy8gICAgIHByb2NlZWRUb0NoZWNrb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4vLyAgICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW11cbi8vICAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwic2MtYWN0aXZlLVwiXScpKS5maWx0ZXIoXG4vLyAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgIT09ICdzYy1hY3RpdmUtY2FydCdcbi8vICAgICAgICAgKVxuLy8gICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2FydEl0ZW1zKSB7XG4vLyAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbi8vICAgICAgICAgICBpZiAoY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCkge1xuLy8gICAgICAgICAgICAgY29uc3QgcHJvZHVjdExpbmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zYy1pdGVtLXByb2R1Y3QtdGl0bGUtY29udCAuc2MtcHJvZHVjdC1saW5rJylcbi8vICAgICAgICAgICAgIGlmIChwcm9kdWN0TGluaykge1xuLy8gICAgICAgICAgICAgICBjb25zdCBmdWxsTmFtZUVsZW1lbnQgPSBwcm9kdWN0TGluay5xdWVyeVNlbGVjdG9yKCcuYS10cnVuY2F0ZS1mdWxsJylcbi8vICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZ1bGxOYW1lRWxlbWVudD8udGV4dENvbnRlbnQ/LnRyaW0oKSB8fCAnJ1xuXG4vLyAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBwcm9kdWN0TGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJ1xuLy8gICAgICAgICAgICAgICBjb25zdCBhc2luID0gaHJlZi5tYXRjaCgvcHJvZHVjdFxcLyhbQS1aMC05XXsxMH0pLyk/LlsxXSB8fCAnJ1xuXG4vLyAgICAgICAgICAgICAgIGNvbnN0IHByaWNlRWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnNjLWl0ZW0tcHJpY2UtYmxvY2sgLmEtb2Zmc2NyZWVuJylcbi8vICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwcmljZUVsZW1lbnRcbi8vICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQocHJpY2VFbGVtZW50LnRleHRDb250ZW50Py5yZXBsYWNlKC9bXjAtOS5dL2csICcnKSB8fCAnMCcpXG4vLyAgICAgICAgICAgICAgICAgOiAwXG5cbi8vICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG4vLyAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbkVsZW1lbnRzID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuc2MtcHJvZHVjdC12YXJpYXRpb24nKVxuLy8gICAgICAgICAgICAgICB2YXJpYXRpb25FbGVtZW50cy5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9XG4vLyAgICAgICAgICAgICAgICAgICB2YXJpYXRpb24ucXVlcnlTZWxlY3RvcignLmEtdGV4dC1ib2xkJyk/LnRleHRDb250ZW50Py50cmltKCkucmVwbGFjZSgnOicsICcnKSB8fFxuLy8gICAgICAgICAgICAgICAgICAgJydcbi8vICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9XG4vLyAgICAgICAgICAgICAgICAgICB2YXJpYXRpb24ucXVlcnlTZWxlY3RvcignLmEtc2l6ZS1zbWFsbDpub3QoLmEtdGV4dC1ib2xkKScpPy50ZXh0Q29udGVudD8udHJpbSgpIHx8XG4vLyAgICAgICAgICAgICAgICAgICAnJ1xuLy8gICAgICAgICAgICAgICAgIGlmIChsYWJlbCAmJiB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgb3B0aW9uc1tsYWJlbF0gPSB2YWx1ZVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgfSlcblxuLy8gICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zLnB1c2goe1xuLy8gICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuLy8gICAgICAgICAgICAgICAgIG5hbWUsXG4vLyAgICAgICAgICAgICAgICAgYXNpbixcbi8vICAgICAgICAgICAgICAgICBwcmljZSxcbi8vICAgICAgICAgICAgICAgICBvcHRpb25zXG4vLyAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbi8vICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHsgb3JkZXJEZXRhaWxzOiBbXSB9KVxuLy8gICAgICAgICAgIGNvbnN0IG9yZGVyRGV0YWlscyA9IHJlc3VsdC5vcmRlckRldGFpbHMgfHwgW11cbi8vICAgICAgICAgICBjb25zdCB1cGRhdGVkT3JkZXJEZXRhaWxzID0gb3JkZXJEZXRhaWxzLmNvbmNhdChzZWxlY3RlZEl0ZW1zKVxuLy8gICAgICAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IG9yZGVyRGV0YWlsczogdXBkYXRlZE9yZGVyRGV0YWlscyB9KVxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgc2VsZWN0ZWQgY2FydCBpdGVtczonLCBzZWxlY3RlZEl0ZW1zKVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYXB0dXJpbmcgc2VsZWN0ZWQgY2FydCBpdGVtczonLCBlcnJvcilcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gICB9XG4vLyB9KVxuXG4vLyBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQpID0+IHtcbi8vICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnZ2V0SFRNTCcpIHtcbi8vICAgICBjb25zdCBtYXJrZWREb2MgPSBnZXRDbGlja2FibGVFbGVtZW50c0luVmlld3BvcnQoKVxuLy8gICAgIGNvbnN0IGh0bWxDb250ZW50ID0gbWFya2VkRG9jLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcbi8vICAgICBjb25zdCBwYWdlTWV0YSA9IGZpbmRQYWdlTWV0YSgpXG4vLyAgICAgc2VuZFJlc3BvbnNlKHsgaHRtbDogaHRtbENvbnRlbnQsIHBhZ2VNZXRhOiBwYWdlTWV0YSB9KVxuLy8gICB9XG4vLyAgIHJldHVybiB0cnVlXG4vLyB9KVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVNb2RhbChxdWVzdGlvbjogc3RyaW5nLCBzZW5kUmVzcG9uc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZCkge1xuLy8gICBjb25zdCBtb2RhbEh0bWwgPSBgXG4vLyAgICAgICAgIDxkaXYgaWQ9XCJyZWFzb24tbW9kYWxcIiBzdHlsZT1cIlxuLy8gICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgICAgICAgICAgdG9wOiAwO1xuLy8gICAgICAgICAgICAgbGVmdDogMDtcbi8vICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xuLy8gICAgICAgICBcIj5cbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4vLyAgICAgICAgICAgICBcIj5cbi8vICAgICAgICAgICAgICAgICA8aDM+JHtxdWVzdGlvbn08L2gzPlxuLy8gICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInJlYXNvbi1pbnB1dFwiIHN0eWxlPVwiXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbi8vICAgICAgICAgICAgICAgICBcIj48L3RleHRhcmVhPlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJcbi8vICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4vLyAgICAgICAgICAgICAgICAgICAgIGdhcDogMTBweDtcbi8vICAgICAgICAgICAgICAgICBcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlYXNvbi1za2lwXCI+U2tpcDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicmVhc29uLXN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIGBcblxuLy8gICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgIG1vZGFsQ29udGFpbmVyLmlubmVySFRNTCA9IG1vZGFsSHRtbFxuLy8gICAvLyBpZiBhdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQgZXhpc3RzXG4vLyAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNoLWRlc2t0b3Atc2lkZVNoZWV0Om5vdCguYW9rLWhpZGRlbiknKSkge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdHRhY2gtZGVza3RvcC1zaWRlU2hlZXQ6bm90KC5hb2staGlkZGVuKScpLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKVxuLy8gICB9IGVsc2Uge1xuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpXG4vLyAgIH1cblxuLy8gICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhc29uLWlucHV0JykgYXMgSFRNTFRleHRBcmVhRWxlbWVudFxuLy8gICAgIGNvbnNvbGUubG9nKCdzdWJtaXRCdG4gY2xpY2tlZCcpXG4vLyAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZVxuLy8gICAgIG1vZGFsQ29udGFpbmVyLnJlbW92ZSgpXG4vLyAgICAgc2VuZFJlc3BvbnNlKHsgaW5wdXQ6IHZhbHVlIH0pXG4vLyAgIH0pXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tc2tpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYXNvbi1pbnB1dCcpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnRcbi8vICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKVxuLy8gICAgIHNlbmRSZXNwb25zZSh7IGlucHV0OiBudWxsIH0pXG4vLyAgIH0pXG4vLyB9XG5cbi8vIC8vIExpc3RlbiBmb3IgbWVzc2FnZXMgZnJvbSBiYWNrZ3JvdW5kIHNjcmlwdFxuLy8gY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuLy8gICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzaG93X3BvcHVwJykge1xuLy8gICAgIGNvbnNvbGUubG9nKCdzaG93X3BvcHVwJywgbWVzc2FnZSlcbi8vICAgICAvLyBhc3NlcnQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhIHBvcHVwXG4vLyAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFzb24tbW9kYWwnKSkge1xuLy8gICAgICAgcmV0dXJuXG4vLyAgICAgfVxuLy8gICAgIGNyZWF0ZU1vZGFsKG1lc3NhZ2UucXVlc3Rpb24sIHNlbmRSZXNwb25zZSlcbi8vICAgICByZXR1cm4gdHJ1ZSAvLyBXaWxsIHJlc3BvbmQgYXN5bmNocm9ub3VzbHlcbi8vICAgfVxuLy8gfSlcbiJdLCJuYW1lcyI6WyJ2NCIsInV1aWR2NCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9
