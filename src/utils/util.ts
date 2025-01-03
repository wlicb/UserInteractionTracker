import { filter_url, url_include } from '../config'

export function isFromPopup(element: HTMLElement): boolean {
  return element.closest('#reason-modal') !== null
}
export function update_icon(url) {
  console.log('update_icon', url)
  if (
    url &&
    url.includes(url_include) &&
    !filter_url.some((excludeUrl) => url.includes(excludeUrl))
  ) {
    console.log('active icon')
    chrome.action.setIcon({
      path: '../icon.png'
    })
  } else {
    console.log('inactive icon')
    chrome.action.setIcon({
      path: '../Inactive_icon.png'
    })
  }
}

export function findPageMeta() {
  const htmlElement = document.documentElement
  const metaData = htmlElement.getAttribute('data-element-meta-data')
  const metaName = htmlElement.getAttribute('data-element-meta-name')
  return {
    metaData: metaData,
    metaName: metaName
  }
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
      element.setAttribute('extension-clickable-marker', 'true')
    }
  })
  return documentCopy
}

// Add cleanup function to remove markers when needed
export function removeClickableMarkers() {
  document.querySelectorAll('[extension-clickable-marker]').forEach((element) => {
    element.removeAttribute('extension-clickable-marker')
  })
}
