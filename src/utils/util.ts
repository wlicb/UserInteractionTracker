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
  const path = parsedUrl.pathname

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
          return recipe
        }
      } catch (error) {
        console.error('Error checking text match:', error)
      }
    } else if (matchMethod === 'url' && recipe.match === path) {
      return recipe
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
