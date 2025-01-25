import { startsWith } from 'lodash'
import { filter_url, url_includes, check_user_id_url } from '../config'

export function isFromPopup(element: HTMLElement): boolean {
  return element.closest('#reason-modal') !== null
}
export async function update_icon(url) {
  console.log('update_icon', url)
  if (!(await shouldExclude(url))) {
    console.log('active icon')
    chrome.action.setIcon({
      path: '../icon.png'
    })
  } else {
    console.log('inactive icon')
    chrome.action.setIcon({
      path: '../inactive_icon.png'
    })
  }
}

export function findPageMeta() {
  const all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]')

  const groupedResult = {}

  all_element_with_meta_data.forEach((element) => {
    const metaName = element.getAttribute('data-element-meta-name')
    const metaData = element.getAttribute('data-element-meta-data')

    if (!groupedResult[metaName]) {
      groupedResult[metaName] = []
    }
    groupedResult[metaName].push(JSON.parse(metaData))
  })

  return groupedResult
}

export function getClickableElementsInViewport() {
  // Select all potential clickable elements
  const documentCopy = document.cloneNode(true) as Document
  const allElements = documentCopy.querySelectorAll(
    'a, button, [onclick], input[type="button"], input[type="submit"]'
  )

  // Check if each element is in the viewport and add marker
  allElements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      // Add marker attribute to the element
      element.setAttribute('visible-clickable-element-marker', 'true')
    }
  })
  return documentCopy
}

// Add cleanup function to remove markers when needed
export function removeClickableMarkers() {
  document.querySelectorAll('[visible-clickable-element-marker]').forEach((element) => {
    element.removeAttribute('visible-clickable-element-marker')
  })
}

export async function shouldExclude(url: string, ignoreUserId: boolean = false) {
  if (!ignoreUserId) {
    if (chrome.storage) {
      const result = await chrome.storage.local.get('userId')
      if (!result.userId) {
        console.log('no user id')
        // if there is no user id, we should not be recording anything
        return true
      }
    } else {
      const userId = await new Promise<string>((resolve) => {
        const handleMessage = (event: MessageEvent) => {
          if (event.data.type === 'GET_USER_ID_RESPONSE') {
            window.removeEventListener('message', handleMessage)
            resolve(event.data.userId)
          }
        }
        window.addEventListener('message', handleMessage)
        window.postMessage({ type: 'GET_USER_ID' }, '*')
      })
      if (!userId) {
        // if there is no user id, we should not be recording anything
        return true
      }
    }
  }
  if (!url) {
    return true
  }
  return (
    !url_includes.some((includeUrl) => url.includes(includeUrl)) ||
    filter_url.some((excludeUrl) => url.includes(excludeUrl))
  )
}

export function generateHtmlSnapshotId(timestamp: string, uuid: string) {
  const url = window.location.href
  return `html_${hashCode(url)}_${timestamp}_${uuid}`
}
export function hashCode(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  console.log('Hash value before return:', hash)
  return hash.toString()
}

export async function check_user_id(user_id: string) {
  try {
    const response = await fetch(`${check_user_id_url}?user_id=${user_id}`, {
      method: 'GET'
    })
    const data = await response.json()

    if (response.ok) {
      return 'success'
    } else {
      return data || 'Unknown error'
    }
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`)
  }
  return 'Unknown error'
}

import { recipes } from '../recipe_new'
import { processElement } from './element-processor'
function selectRecipe() {
  const parsedUrl = new URL(window.location.href)
  let path = parsedUrl.pathname
  path = path !== '/' ? path.replace(/\/+$/, '') : path

  for (const recipe of recipes) {
    const matchMethod = recipe.match_method || 'text'
    if (matchMethod === 'text') {
      try {
        // Execute script in tab to check for matching element
        const element = document.querySelector(recipe.match)

        const hasMatch =
          element &&
          (!recipe.match_text ||
            (element.textContent?.toLowerCase().includes(recipe.match_text.toLowerCase()) ?? false))

        if (hasMatch) {
          console.log('matched with recipe ', recipe.match)
          return recipe
        }
      } catch (error) {
        console.error('Error checking text match:', error)
      }
    } else if (matchMethod === 'url') {
      if (recipe.match === path) {
        console.log('matched with recipe ', recipe.match)
        return recipe
      } else if (
        recipe.match_with_ref &&
        (path.startsWith(recipe.match + '/ref=') || path.startsWith(recipe.match + 'ref='))
      ) {
        console.log('matched with recipe ', recipe.match)
        return recipe
      }
    }
  }

  throw new Error(`No matching recipe found for path: ${path}`)
}

export function processRecipe() {
  console.log('start process recipe')
  try {
    const recipe = selectRecipe()
    const rootElement = document.querySelector(recipe.selector)
    if (rootElement) {
      const newRoot = processElement(rootElement, recipe)
      const simplifiedHTML = newRoot.outerHTML
      return simplifiedHTML
    }
  } catch (error) {
    console.error('Error processing recipe:', error)
  }
}

// Replace the simple question with a more detailed one based on event type
export function getCustomQuestion(
  eventType: string,
  data: any
): { question: string; placeholder: string } {
  let question = ''
  let placeholder = 'Enter your reason here...'
  switch (eventType) {
    case 'click_a':
    case 'click_b':
    case 'click_c':
      // Check if it's a specific type of click
      if (
        data['data-semantic-id'] === 'buybox.delivery.subscribe_save_.purchase_form.set_up_now' ||
        data.target.innerText === 'Set Up Now'
      ) {
        question =
          'You <span style="background-color: yellow;">clicked</span> on the set up now button. What makes you choose to subscribe to this product?'
        placeholder = 'I choose to subscribe because...'
      } else if (
        data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' ||
        data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' ||
        data.target.id === 'buy-now-button'
      ) {
        question =
          'You <span style="background-color: yellow;">clicked</span> on the buy now button. What do you like about this particular product?'
        placeholder = 'I am buying this product because...'
      } else if (
        data['data-semantic-id']?.startsWith('search_results.') ||
        data['data-semantic-id']?.startsWith('product_list.') ||
        (data['data-semantic-id']?.startsWith('active_item_list.') &&
          data['data-semantic-id']?.endsWith('.product_detail')) ||
        data.target.className?.includes('sc-product-link')
      ) {
        question =
          'You <span style="background-color: yellow;">clicked</span> on this product. What caught your attention compared to the other options you saw?'
        placeholder = 'I like this product becauseß...'
      } else if (
        data['data-semantic-id']?.endsWith('add_to_cart') ||
        data.target.id === 'add-to-cart-button' ||
        data.target.name === 'submit.addToCart' ||
        data.target.innerText === 'Add to Cart'
      ) {
        question =
          'You <span style="background-color: yellow;">clicked</span> on the add to cart button. What makes you decide to add this item to your cart?'
        placeholder = 'I add this item to my cart because...'
      } else if (data['data-semantic-id'] === 'nav_bar.search_button') {
        question =
          'You <span style="background-color: yellow;">clicked</span> on the search button. What are you searching for?'
        placeholder = 'I want to find ...'
      } else if (
        data['data-semantic-id']?.startsWith('refinements.') ||
        data['data-semantic-id']?.startsWith('filters.')
      ) {
        question =
          'You <span style="background-color: yellow;">clicked</span> on this filter. What are you hoping to find with this filter?'
        placeholder = 'I want to find ...'
      } else if (data['data-semantic-id']?.startsWith('product_options.')) {
        question =
          'You <span style="background-color: yellow;">clicked</span> on this product option. What do you like about this product option?'
        if (data['element-meta-name'] === 'product_options' && data['element-meta-data'] !== '') {
          question = `You <span style="background-color: yellow;">clicked</span> on ${data['element-meta-data']['value']}. What do you like about this product option?`
        }
        placeholder = 'I like this product option because...ß'
      } else if (data['data-semantic-id']?.endsWith('check_out')) {
        question =
          'You <span style="background-color: yellow;">clicked</span> checkout button. What makes you choose to checkout?'
        placeholder = 'I choose to checkout because...'
      } else {
        question =
          'You <span style="background-color: yellow;">clicked</span> on this element. Could you share what you were trying to do or find?'
        placeholder = 'Enter your reason here...'
      }
      break
    case 'scroll':
      question =
        'You <span style="background-color: yellow;">scrolled</span> on this page. What information are you looking for?'
      placeholder = 'I want to find ...'
      break
    case 'input':
      question =
        'You <span style="background-color: yellow;">typed</span> in this input field. What are you searching for?'
      placeholder = 'I want to find ...'
      break
    case 'navigation':
      if (data.navigationType === 'back') {
        question =
          'Why did you decide to <span style="background-color: yellow;">go back</span> to the previous page?'
        placeholder = "I'm back because..."
      } else if (data.navigationType === 'forward') {
        question =
          'Why did you decide to <span style="background-color: yellow;">return</span> to this page ?'
        placeholder = 'I want to find ...'
      }
      question = `What is the reason for this <span style="background-color: yellow;">${data.navigationType} navigation</span>?`
      placeholder = 'Enter your reason here...'
      break
    case 'tabActivate':
      question = `Why did you <span style="background-color: yellow;">switch to this tab</span>?`
      placeholder = 'I switched to this tab because...'
      break
    default:
      question = `What is the reason for the ${eventType} action?`
      placeholder = 'Enter your reason here...'
      break
  }
  return { question, placeholder }
}

export function isValidReason(reason: string): boolean {
  if (!reason || reason.trim().length === 0) {
    return false // Empty input
  }
  if (reason.trim().length < 2 || reason.length < 5) {
    return false // Too short to be meaningful, at least 5 characters and 2 words
  }
  // Check for repetitive or meaningless input (e.g., "aaa","!!!")
  const meaninglessPatterns = [/^(.)\1{3,}$/, /^[^a-zA-Z0-9]+$/]
  for (const pattern of meaninglessPatterns) {
    if (pattern.test(reason.toLowerCase().replace(/\s+/g, ''))) {
      return false
    }
  }
  return true
}
