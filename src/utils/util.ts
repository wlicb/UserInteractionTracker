import { startsWith } from 'lodash'
import { filter_url, url_includes, check_user_id_url } from '../config'

export function isFromPopup(element: HTMLElement): boolean {
  // return element.closest('#reason-modal') !== null
  const selectors = [
    '#user-interaction-tracker-app',
    '.n-modal-container',
    '#user-interaction-tracker-app-session'
  ]
  return selectors.some((selector) => element.closest(selector) !== null)
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

export function findPageMeta(root = null, document = globalThis.document) {
  let all_element_with_meta_data
  if (root) {
    all_element_with_meta_data = root.querySelectorAll('[data-element-meta-name]')
  } else {
    all_element_with_meta_data = document.querySelectorAll('[data-element-meta-name]')
  }

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

export function MarkViewableElements() {
  MarkInputStatus()

  // Select all elements
  const allElements = document.querySelectorAll(
    'a, button, select, [onclick], input[type="button"], input[type="submit"]'
  )
  // Check if each element is in the viewport and add marker
  allElements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    const inViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // Add marker attribute to the element
    element.setAttribute('data-processed-visible-clickable-marker', inViewport ? 'true' : 'false')
  })
}
export function MarkInputStatus() {
  // Exclude hidden inputs by using ':not([type="hidden"])'
  const inputs = document.querySelectorAll('input:not([type="hidden"]), select, textarea')
  inputs.forEach((element) => {
    const input = element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

    if (input.value !== null) {
      input.setAttribute('data-processed-input-value', input.value)
    }

    if (
      input instanceof HTMLInputElement &&
      (input.type === 'checkbox' || input.type === 'radio')
    ) {
      input.setAttribute('data-processed-input-checked', String(input.checked))
    }

    if (input instanceof HTMLSelectElement) {
      const selectedTexts = Array.from(input.selectedOptions)
        .map((opt) => opt.textContent?.trim() ?? '')
        .join('||')
      input.setAttribute('data-processed-input-selected-text', selectedTexts)
    }
  })
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

import { cart, recipes } from '../recipe_new'
import { processElement } from './element-processor'
function selectRecipe(url = null, document = globalThis.document, window = globalThis.window) {
  let parsedUrl
  if (url) {
    parsedUrl = new URL(url)
  } else {
    parsedUrl = new URL(window.location.href)
  }
  let path = parsedUrl.pathname
  path = path !== '/' ? path.replace(/\/+/g, '/').replace(/\/$/, '') : path

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
      const match =
        recipe.match == '/'
          ? recipe.match
          : recipe.match.replace(/\*/g, '').replace(/\/+/g, '/').replace(/\/$/, '')
      const wildcard_match = '^' + recipe.match.replace(/\*/g, '[^/]*') + '$'
      const wildcard_match_with_ref = '^' + recipe.match.replace(/\*/g, '[^/]+') + '(/ref=.+)$'
      if (match === path) {
        console.log('matched with recipe ', recipe.match)
        return recipe
      } else if (
        recipe.match_with_ref &&
        (path.startsWith(match + '/ref=') || path.startsWith(match + 'ref='))
      ) {
        console.log('matched with recipe ', recipe.match)
        return recipe
      } else if (recipe.match_with_wildcard) {
        const regExp = new RegExp(wildcard_match)
        const regExpWithRef = new RegExp(wildcard_match_with_ref)
        if (regExp.test(path)) {
          console.log('matched with recipe ', recipe.match)
          return recipe
        } else if (recipe.match_with_ref && regExpWithRef.test(path)) {
          console.log('matched with recipe ', recipe.match)
          return recipe
        }
      }
    }
  }

  throw new Error(`No matching recipe found for path: ${path}`)
}

export function processRecipe(
  root = null,
  url = null,
  document = globalThis.document,
  window = globalThis.window
) {
  console.log('start process recipe')
  try {
    const recipe = selectRecipe(url, document, window)
    let rootElement
    if (root) {
      rootElement = root
    } else {
      rootElement = document.querySelector(recipe.selector)
    }
    if (rootElement) {
      // console.log(document)
      const newRoot = processElement(rootElement, recipe, '', 0, document, window)
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
        data?.target?.innerText === 'Set Up Now'
      ) {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"set up subscription"</span> button. <span class="bold-question">Can you tell us why you subscribed to this product?</span>'
        placeholder =
          'E.g., I like this brand;\nI want to get a discount by subscribing;\nI have used this product before ...'
      } else if (
        data['data-semantic-id'] === 'buybox.delivery.one_time_purchase_.purchase_form.buy_now' ||
        data['data-semantic-id'] === 'buybox.delivery.purchase_form.buy' ||
        data['data-semantic-id']?.endsWith('buy_now') ||
        data?.target?.id === 'buy-now-button'
      ) {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"buy now"</span> button. <span class="bold-question">Why did you do that?</span>'
        placeholder =
          'E.g., I like some product features;\nI want to get a discount by buying now;\nI have used this product before ...'
      } else if (
        data['data-semantic-id']?.endsWith('add_to_cart') ||
        data.target.id === 'add-to-cart-button' ||
        data.target.name === 'submit.addToCart' ||
        data.target.innerText === 'Add to Cart'
      ) {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"add to cart"</span> button. <span class="bold-question">Why did you add this item to your cart?</span>'
        placeholder =
          'E.g., I want to buy this product;\nI want to compare with other options;\nI want to save it for the future ...'
      } else if (data['data-semantic-id'] === 'nav_bar.search_button') {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"search"</span> button. <span class="bold-question">Why did you make this search?</span>'
        placeholder =
          'E.g., I want to search for a gift for my son;\nI am adjusting the search term to find a better option ...'
      } else if (
        data['data-semantic-id']?.startsWith('refinements.') ||
        data['data-semantic-id']?.startsWith('filters.') ||
        data['data-semantic-id']?.startsWith('refinements_toolbar.')
      ) {
        question =
          'You <span class="highlight-question">clicked</span> on this <span class="highlight-question-blue">filter</span>. <span class="bold-question">Why did you use this filter?</span>'
        placeholder = 'E.g., I have a budget constraint;\nI like a specific brand ...'
      } else if (data['data-semantic-id']?.startsWith('product_options.')) {
        question =
          'You <span class="highlight-question">clicked</span> on this <span class="highlight-question-blue">product option</span>. <span class="bold-question">Why did you click this product option?</span>'
        placeholder =
          'E.g., I want to check the details of the other options;\nI like this look ...'
      } else if (data['data-semantic-id']?.endsWith('check_out')) {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"checkout"</span> button. <span class="bold-question">What made you decide to checkout?</span>'
        placeholder = 'I decided to checkout because...'
      } else if (data['data-semantic-id']?.endsWith('decrease_quantity_by_one')) {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"decrease quantity"</span> button. <span class="bold-question">Why did you click this button?</span>'
        placeholder = 'I decreased quantity because...'
      } else if (data['data-semantic-id']?.endsWith('increase_quantity_by_one')) {
        question =
          'You <span class="highlight-question">clicked</span> on the <span class="highlight-question-blue">"increase quantity"</span> button. <span class="bold-question">Why did you click this button?</span>'
        placeholder = 'I increased quantity because...'
      } else if (
        data['data-semantic-id']?.startsWith('search_results.') ||
        data['data-semantic-id']?.startsWith('product_list.') ||
        (data['data-semantic-id']?.startsWith('active_item_list.') &&
          data['data-semantic-id']?.endsWith('.product_detail')) ||
        data.target.className?.includes('sc-product-link')
      ) {
        question =
          'You <span class="highlight-question">clicked</span> on this <span class="highlight-question-blue">product</span>. <span class="bold-question">Why did you click on this product?</span>'
        placeholder =
          'E.g., This product is on sale;\nI like the look of this product;\nI want to compare it with other options ...'
      } else {
        question =
          'We noticed that you just had a <span class="highlight-question">click</span> action. <span class="bold-question">Why did you do that?</span>'
        placeholder = 'E.g., I want to read reviews;\nI want to compare with other options ...'
      }
      break
    case 'scroll':
      const scrollDirection = data.scrollDistance_Y < 0 ? 'up' : 'down'
      question = `We saw that you <span class="highlight-question">scrolled ${scrollDirection}</span> the page. <span class="bold-question">What are you looking for?</span>`
      placeholder = 'I am looking for (e.g., specific products / reviews / information)...'
      break
    case 'input':
      question =
        'You <span class="highlight-question">typed</span> in this input field. <span class="bold-question">What are you searching for?</span>'
      placeholder = 'I want to find ...'
      break
    case 'navigation':
      if (data.navigationType === 'back') {
        question =
          '<span class="bold-question">Why did you decide to <span class="highlight-question">return</span> to this page?</span>'
        placeholder = 'I returned to this page because...'
      } else if (data.navigationType === 'forward') {
        question =
          '<span class="bold-question">Why did you decide to <span class="highlight-question">return</span> to this page?</span>'
        placeholder = 'I returned to this page because...'
      } else {
        question = `What is the reason for this <span class="highlight-question">${data.navigationType} navigation</span>?`
        placeholder = 'Enter your reason here...'
      }
      break
    case 'tabActivate':
      question = `<span class="bold-question">Why did you <span class="highlight-question">leave and come back</span> to this tab?</span>`
      placeholder = 'E.g., I was doing something else;\nI was looking for a different product ...'
      break
    default:
      question = `<span class="bold-question">What is the reason for the ${eventType} action?</span>`
      placeholder = 'Enter your reason here...'
      break
  }
  return { question, placeholder }
}

export function getHighLevelQuestion(): { question: string; placeholder: string } {
  const question =
    '<span class="highlight-question-blue">General Goal</span>: <span class="bold-question">What brings you to Amazon right now?</span>'
  const placeholder =
    'E.g., I want to buy a laptop for the lab;\nI just want to explore gift options for my boyfriend;\nI am just randomly browsing ...'
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
