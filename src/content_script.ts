import {
  findPageMeta,
  isFromPopup,
  getClickableElementsInViewport,
  shouldExclude,
  generateHtmlSnapshotId,
  processRecipe,
  isValidReason,
  MarkViewableElements
} from './utils/util'
import { v4 as uuidv4 } from 'uuid'
import { scroll_threshold } from './config'

async function captureScreenshot(timestamp: string, uuid: string) {
  try {
    // const screenshotId = `screenshot_${timestamp}_${uuid}`
    const response = (await chrome.runtime.sendMessage({
      action: 'captureScreenshot',
      timestamp,
      uuid
    })) as any

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
}

window.addEventListener('message', async (event) => {
  if (event.source !== window) return
  if (event.data.type && event.data.type === 'GET_USER_ID') {
    const result = await chrome.storage.local.get('userId')
    const userId = result.userId
    window.postMessage({ type: 'GET_USER_ID_RESPONSE', userId: userId }, '*')
  }
  if (event.data.type && event.data.type === 'CAPTURE_SCREENSHOT') {
    await captureScreenshot(event.data.timestamp, event.data.uuid)
  }
  if (event.data.type && event.data.type === 'SAVE_INTERACTION_DATA') {
    try {
      const dataForBackground = { ...event.data.data }

      const response2 = (await chrome.runtime.sendMessage({
        action: 'saveData',
        data: dataForBackground
      })) as any
      if (!response2.success) {
        throw new Error(response2.message || 'interaction capture failed')
      }
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

const work = () => {
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

  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered')
    MarkViewableElements()
    processRecipe()
  })

  // Function to capture interactions
  async function captureInteraction(
    eventType: string,
    target: any,
    timestamp: string,
    uuid: string,
    windowSize: { width: number; height: number },
    scrollDistance?: number,
    scrollCurrentTop?: number,
    scrollCurrentLeft?: number,
    scrollDistance_X?: number
  ) {
    try {
      // Generate new HTML snapshot ID
      const currentSnapshotId = generateHtmlSnapshotId(timestamp, uuid)

      const simplifiedHTML = processRecipe()
      // console.log('start time:', new Date().toISOString())
      MarkViewableElements()
      // console.log('end time:', new Date().toISOString())
      const pageMeta = findPageMeta()

      let data = {
        uuid: uuid,
        eventType,
        timestamp: timestamp,

        htmlSnapshotId: currentSnapshotId, // Use the new snapshot ID
        pageMeta: pageMeta || '',
        htmlContent: document.documentElement.outerHTML,
        simplifiedHTML: simplifiedHTML
      }
      if (eventType === 'scroll') {
        data['windowSize'] = windowSize
        data['scrollDistance_Y'] = scrollDistance
        data['scrollCurrentTop'] = scrollCurrentTop
        data['scrollCurrentLeft'] = scrollCurrentLeft
        data['scrollDistance_X'] = scrollDistance_X
        data['target'] = target
      }
      if (eventType === 'input') {
        data['input-values'] = target?.value || ''
        data['input-id'] = target?.id || ''
        data['data-element-meta-name'] = target.getAttribute('data-element-meta-name') || ''
        data['data-element-meta-data'] = target.getAttribute('data-element-meta-data') || ''
      }
      await chrome.runtime.sendMessage({ action: 'saveData', data })
    } catch (error) {
      console.error(`Error during ${eventType} event handling:`, error)
    }
  }
  // Variables to track scroll events
  let isScrolling = false
  let scrollTimeout: number | undefined
  let scrollStartTop = window.scrollY || document.documentElement.scrollTop
  let accumulatedScrollDistance = 0
  let scrollStartLeft = window.scrollX || document.documentElement.scrollLeft
  let accumulatedScrollDistance_X = 0
  // Function to handle the first scroll event in a scroll sequence
  async function handleFirstScroll(scrollUuid: string, scrollTimestamp: string) {
    try {
      console.log('First scroll event')
      captureScreenshot(scrollTimestamp, scrollUuid)
      processRecipe()
    } catch (error) {
      console.error('Error during first scroll handling:', error)
    }
  }

  // Function to handle when scrolling stops (no scroll events within the threshold)
  async function handleScrollStop(scrollUuid: string, scrollTimestamp: string) {
    try {
      console.log('scroll stop uuid', scrollUuid)
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop
      accumulatedScrollDistance += currentScrollTop - scrollStartTop

      const currentScrollLeft = window.scrollX || document.documentElement.scrollLeft
      accumulatedScrollDistance_X += currentScrollLeft - scrollStartLeft

      // INSERT_YOUR_CODE
      const windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
      if (accumulatedScrollDistance !== 0 || accumulatedScrollDistance_X !== 0) {
        // Record the scroll interaction with the accumulated scroll distance
        await captureInteraction(
          'scroll',
          window.location.href,
          scrollTimestamp,
          scrollUuid,
          windowSize,
          accumulatedScrollDistance,
          currentScrollTop,
          accumulatedScrollDistance_X,
          currentScrollLeft
        )
        // Reset accumulated scroll distance
        accumulatedScrollDistance = 0
        accumulatedScrollDistance_X = 0
        scrollStartTop = currentScrollTop
        scrollStartLeft = currentScrollLeft
      }
      isScrolling = false
    } catch (error) {
      console.error('Error during scroll stop handling:', error)
    }
  }

  let scrollUuid = ''
  let scrollTimestamp = ''
  // Event listener for scroll events
  document.addEventListener('scroll', async (event) => {
    console.log('scroll event')

    if (document.getElementById('reason-modal')) {
      return
    }
    if (
      event.target !== window &&
      event.target !== document &&
      event.target !== document.documentElement
    ) {
      console.log('Scroll event ignored from a nested scrollable container')
      return
    }

    if (!isScrolling) {
      isScrolling = true
      scrollStartTop = window.scrollY || document.documentElement.scrollTop
      scrollUuid = uuidv4()
      scrollTimestamp = new Date().toISOString()
      await handleFirstScroll(scrollUuid, scrollTimestamp)
    }

    // Clear the existing timeout and set a new one
    window.clearTimeout(scrollTimeout)
    scrollTimeout = window.setTimeout(
      () => handleScrollStop(scrollUuid, scrollTimestamp),
      scroll_threshold
    ) // Threshold of 300ms
  })

  // document.addEventListener('DOMContentLoaded', () => {
  //   // Handle all types of order buttons
  //   const placeOrderButtons = document.querySelectorAll(
  //     'input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]'
  //   )
  //   const buyNowButton = document.querySelector('input[id="buy-now-button"]')
  //   const setupNowButton = document.querySelector(
  //     'button[id="rcx-subscribe-submit-button-announce"]'
  //   )
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

  //           await chrome.runtime.sendMessage({
  //             action: 'saveOrder',
  //             data: {
  //               timestamp: new Date().toISOString(),
  //               name: productInfo.title,
  //               price: parseFloat(productInfo.price.replace(/[^0-9.]/g, '')),
  //               asin: productInfo.asin,
  //               options: productInfo.options
  //             }
  //           })
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
  //                   variation
  //                     .querySelector('.a-size-small:not(.a-text-bold)')
  //                     ?.textContent?.trim() || ''
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
  //           await chrome.runtime.sendMessage({ action: 'saveOrder', data: selectedItems })
  //         }
  //       } catch (error) {
  //         console.error('Error capturing selected cart items:', error)
  //       }
  //     })
  //   }
  // })

  chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse: (response?: any) => void) => {
      console.log('message', message)
      if (message.action === 'getHTML') {
        const simplifiedHTML = processRecipe()
        MarkViewableElements()
        const htmlContent = document.documentElement.outerHTML
        const pageMeta = findPageMeta()
        const windowSize = {
          width: window.innerWidth,
          height: window.innerHeight
        }
        sendResponse({
          html: htmlContent,
          pageMeta: pageMeta,
          simplifiedHTML: simplifiedHTML,
          windowSize: windowSize
        })
      }
      if (message.action === 'show_popup') {
        console.log('show_popup', message)
        // assert there isn't already a popup
        if (document.getElementById('reason-modal')) {
          sendResponse({ success: false, message: 'popup already exists' })
          return
        }

        // Use the Vue app to show the modal
        const event = new CustomEvent('show-modal', {
          detail: {
            question: message.question,
            placeholder: message.placeholder,
            callback: (response) => {
              sendResponse(response)
            }
          }
        })
        document.dispatchEvent(event)
        return true // Will respond asynchronously
      }
      if (message.action === 'showReminder') {
        console.log('showReminder')
        const data = message.data
        alert(
          `Thank you for participating!\nYou have contributed ${data.on_date} rationales this week\nYou have contributed ${data.all_time} rationales in total. `
        )
      }
    }
  )
}

shouldExclude(window.location.href).then((result) => {
  console.log('content script, shouldExclude', result)
  if (!result) {
    work()
  }
})
