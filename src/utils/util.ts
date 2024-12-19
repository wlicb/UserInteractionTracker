export function isFromPopup(element: HTMLElement): boolean {
  return element.closest('#reason-modal') !== null
}
