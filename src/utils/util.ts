import { filter_url, url_include, check_user_id_url } from '../config'

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

export async function shouldExclude(url: string) {
  const result = await chrome.storage.local.get('userId')
  if (!result.userId) {
    console.log('no user id')
    // if there is no user id, we should not be recording anything
    return true
  }
  if (!url) {
    return true
  }
  return !url.includes(url_include) || filter_url.some((excludeUrl) => url.includes(excludeUrl))
}

export function generateHtmlSnapshotId(uuid: string) {
  const url = window.location.href
  const timestamp = new Date().toISOString()
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
      return data.error || 'Unknown error'
    }
  } catch (error) {
    console.log(`Error: ${(error as Error).message}`)
  }
  return 'Unknown error'
}
