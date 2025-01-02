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
