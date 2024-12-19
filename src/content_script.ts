import { isFromPopup } from './utils/util'

// 内容脚本中的代码
window.addEventListener('message', async (event) => {
  // 确保消息来自当前页面，而非其他iframe或窗口
  if (event.source !== window) return

  if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
    await captureScreenshot(event.data.timestamp)
  }
  if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
    try {
      // 使用 Chrome API 保存 HTML snapshot
      const response1 = await chrome.storage.local.get(['htmlSnapshots'], (result) => {
        const htmlSnapshots = result.htmlSnapshots || {}
        htmlSnapshots[event.data.data.htmlSnapshotId] = event.data.data.htmlContent
        chrome.storage.local.set({ htmlSnapshots })
      })
      console.log(response1)
      const dataForBackground = { ...event.data.data }
      delete dataForBackground.htmlContent
      // 发送数据给 background script
      const response2 = await chrome.runtime.sendMessage({
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

async function captureScreenshot(timestamp: string) {
  try {
    const screenshotId = `screenshot_${timestamp}`
    // 发送消息到background并等待响应
    const response = await chrome.runtime.sendMessage({
      action: 'captureScreenshot',
      screenshotId
    })

    if (!response.success) {
      throw new Error(response.message || 'Screenshot capture failed')
    }

    // 在截图处理成功后发送消息
    window.postMessage(
      {
        type: 'SCREENSHOT_COMPLETE',
        timestamp: timestamp,
        success: true
      },
      '*'
    )
  } catch (error) {
    console.error('捕获截图时出错:', error)
    // 发送失败消息
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
}

export {} // Makes this file a module
import { processElement } from './utils/element-processor'
// Define interfaces for Recipe and OrderDetail
interface Recipe {
  tag_name?: string
  text_selector?: string
  text_js?: string
  add_text?: boolean
  text_format?: string
  name?: string
  clickable?: boolean
  click_selector?: string
  keep_attr?: { [key: string]: string }
  override_attr?: { [key: string]: string }
  children?: Recipe[]
  insert_split_marker?: boolean
  insert_split_marker_every?: number
  direct_child?: boolean
  empty_message?: string
  [key: string]: any // Allow additional properties
}

interface OrderDetail {
  name: string
  price: number
}

// Extend the Window interface to include custom properties
declare global {
  interface Window {
    clickable_recipes?: { [key: string]: Recipe }
    input_recipes?: { [key: string]: Recipe }
  }
}

let lastScrollTime = 0 // Track last scroll timestamp
const SCROLL_THRESHOLD = 1500 // Minimum time in ms between screenshots for scroll actions

document.addEventListener('DOMContentLoaded', async () => {
  console.log('DOMContentLoaded')

  const url = window.location.href
  try {
    const response = await new Promise<{ recipe?: any }>((resolve) => {
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
        const newRoot = processElement(rootElement, recipe)
        console.log(newRoot.outerHTML)
      }
    }
  } catch (error) {
    console.error('Error initializing clickable elements:', error)
  }
})

function generateHtmlSnapshotId() {
  const url = window.location.href
  const timestamp = new Date().toISOString()
  return `html_${hashCode(url)}_${timestamp}`
}
function hashCode(str: string) {
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
  const clickableElements: any[] = [] // Array to store clickable elements

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
        innerText: (element as HTMLElement).innerText.trim(),
        outerHTML: element.outerHTML.trim()
      })
    }
  })

  return clickableElements
}

// Function to capture interactions
async function captureInteraction(
  eventType: string,
  target: any,
  timestamp: string,
  selector: string,
  clickableId: string,
  url: string
) {
  try {
    // Generate new HTML snapshot ID
    const currentSnapshotId = generateHtmlSnapshotId()

    // Save HTML snapshot and wait for it to complete
    await new Promise((resolve, reject) => {
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
      htmlSnapshotId: currentSnapshotId, // Use the new snapshot ID
      // clickableElements: clickableElements,
      selector: selector || '',
      clickableId: clickableId || '',
      url: url || ''
    }

    await chrome.runtime.sendMessage({ action: 'saveData', data })
  } catch (error) {
    console.error(`Error during ${eventType} event handling:`, error)
  }
}

// Capture scroll interactions
document.addEventListener('scroll', async (event) => {
  try {
    const currentTime = Date.now()
    if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
      lastScrollTime = currentTime
      const timestamp = new Date().toISOString()
      await captureInteraction('scroll', event.target, timestamp, '', '', '')
      await captureScreenshot(timestamp)
    }
  } catch (error) {
    console.error('Error during scroll event handling:', error)
  }
})

document.addEventListener(
  'blur',
  async (event) => {
    const target = event.target as HTMLElement
    if (
      target &&
      ((target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'text') ||
        target.tagName === 'TEXTAREA')
    ) {
      const timestamp = new Date().toISOString()
      await captureScreenshot(timestamp)
      await captureInteraction('input', target, timestamp, '', '', '')
    }
  },
  true
)

// Capture click interactions
function getUniqueSelector(element: any) {
  if (element.id) {
    return `#${element.id}`
  }
  if (element.className) {
    const className = element.className.trim().split(/\s+/).join('.')
    return `${element.tagName.toLowerCase()}.${className}`
  }
  return element.tagName.toLowerCase()
}

function getFullSelector(element: any) {
  let path: string[] = []
  while (element.parentElement) {
    path.unshift(getUniqueSelector(element))
    element = element.parentElement
  }
  return path.join(' > ')
}

// document.addEventListener('click', (event) => {
//     try {

//         function findClickableParent(element: HTMLElement | null, depth: number = 0): HTMLElement | null {
//             if (!element || depth>=2) return null;
//             if (element.hasAttribute('data-clickable-id')) {
//                 return element;
//             }
//             return findClickableParent(element.parentElement,depth+1);
//         }

//         const clickableElement = findClickableParent(event.target as HTMLElement);
//         const clickableId = clickableElement ? clickableElement.getAttribute('data-clickable-id') || '' : '';
//         console.log('click')
//         const timestamp=new Date().toISOString();
//         console.log(timestamp)
//         const selector=getFullSelector(event.target);
//         console.log('srart screenshot')
//         captureScreenshot(timestamp);
//         console.log('end screenshot')
//         captureInteraction('click', event.target,timestamp,selector,clickableId,'');
//         console.log('end')

//     } catch (error) {
//         console.error('Error during click event handling:', error);
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
  // Handle all types of order buttons
  const placeOrderButtons = document.querySelectorAll(
    'input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]'
  )
  const buyNowButton = document.querySelector('input[id="buy-now-button"]')
  const setupNowButton = document.querySelector('button[id="rcx-subscribe-submit-button-announce"]')
  const proceedToCheckoutButton = document.querySelector('input[name="proceedToRetailCheckout"]')

  // Handle Buy Now and Set Up Now buttons if present
  ;[buyNowButton, setupNowButton].forEach((button) => {
    if (button) {
      button.addEventListener('click', async () => {
        try {
          const productInfo = {
            title: (document.querySelector('#title') as HTMLElement)?.innerText?.trim() || '',
            price:
              (
                document.querySelector(
                  'span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay'
                ) as HTMLElement
              )?.innerText?.trim() || '',
            asin: (document.querySelector('input#ASIN') as HTMLInputElement)?.value || '',
            options: {}
          }

          // Get all option selections
          const optionRows = Array.from(
            document.querySelectorAll(
              '#twister div.a-row:has(label.a-form-label):has(span.selection)'
            )
          )
          optionRows.forEach((row) => {
            const label =
              (row.querySelector('label.a-form-label') as HTMLElement)?.innerText?.replace(
                ': ',
                ''
              ) || ''
            const value = (row.querySelector('span.selection') as HTMLElement)?.innerText || ''
            if (label && value) {
              ;(productInfo.options as any)[label] = value
            }
          })

          console.log(`${button.id} clicked - Product Info:`, productInfo)

          // Store the product info
          let result = await chrome.storage.local.get({ orderDetails: [] })
          const orderDetails = result.orderDetails || []
          orderDetails.push({
            name: productInfo.title,
            price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
            asin: productInfo.asin,
            options: productInfo.options
          })
          await chrome.storage.local.set({ orderDetails })
        } catch (error) {
          console.error(`Error capturing ${button.id} product info:`, error)
        }
      })
    }
  })
  if (proceedToCheckoutButton) {
    proceedToCheckoutButton.addEventListener('click', async (event) => {
      try {
        const selectedItems = []
        const cartItems = Array.from(document.querySelectorAll('[id^="sc-active-"]')).filter(
          (item) => item.id !== 'sc-active-cart'
        )
        for (const item of cartItems) {
          const checkbox = item.querySelector('input[type="checkbox"]') as HTMLInputElement
          if (checkbox && checkbox.checked) {
            const productLink = item.querySelector('.sc-item-product-title-cont .sc-product-link')
            if (productLink) {
              const fullNameElement = productLink.querySelector('.a-truncate-full')
              const name = fullNameElement?.textContent?.trim() || ''

              const href = productLink.getAttribute('href') || ''
              const asin = href.match(/product\/([A-Z0-9]{10})/)?.[1] || ''

              const priceElement = item.querySelector('.sc-item-price-block .a-offscreen')
              const price = priceElement
                ? parseFloat(priceElement.textContent?.replace(/[^0-9.]/g, '') || '0')
                : 0

              const options: { [key: string]: string } = {}
              const variationElements = item.querySelectorAll('.sc-product-variation')
              variationElements.forEach((variation) => {
                const label =
                  variation.querySelector('.a-text-bold')?.textContent?.trim().replace(':', '') ||
                  ''
                const value =
                  variation.querySelector('.a-size-small:not(.a-text-bold)')?.textContent?.trim() ||
                  ''
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
          let result = await chrome.storage.local.get({ orderDetails: [] })
          const orderDetails = result.orderDetails || []
          const updatedOrderDetails = orderDetails.concat(selectedItems)
          await chrome.storage.local.set({ orderDetails: updatedOrderDetails })
          console.log('Stored selected cart items:', selectedItems)
        }
      } catch (error) {
        console.error('Error capturing selected cart items:', error)
      }
    })
  }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse: (response?: any) => void) => {
  if (message.action === 'getHTML') {
    const htmlContent = document.documentElement.outerHTML
    sendResponse({ html: htmlContent })
  }
  return true
})
