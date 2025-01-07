import {
  findPageMeta,
  getClickableElementsInViewport,
  isFromPopup,
  shouldExclude,
  generateHtmlSnapshotId
} from './utils/util'
import { v4 as uuidv4 } from 'uuid'
import { finder } from '@medv/finder'
// extend window
declare global {
  interface Window {
    monkeyPatched: boolean
    shouldExclude: boolean
  }
}

const work = () => {
  const monkeyPatch = () => {
    window.monkeyPatched = true
    const originalAddEventListener = EventTarget.prototype.addEventListener

    // Add this at the top of the file
    const TimeOut = 30000

    function captureInteraction(
      eventType: string,
      target: any,
      timestamp: string,
      selector: string,
      url: string,
      uuid: string
    ) {
      function findClickableParent(
        element: HTMLElement | null,
        depth: number = 0,
        allAttributes: Record<string, string> = {}
      ): Record<string, string> {
        // Base case: if element is null or we've reached max depth
        if (!element || depth >= 15) return allAttributes

        // Check and collect all relevant attributes at current level
        if (element.hasAttribute('data-clickable-id')) {
          allAttributes['data-clickable-id'] = element.getAttribute('data-clickable-id') || ''
        }
        if (element.hasAttribute('data-element-meta-name')) {
          allAttributes['data-element-meta-name'] =
            element.getAttribute('data-element-meta-name') || ''
        }
        if (element.hasAttribute('data-element-meta-data')) {
          allAttributes['data-element-meta-data'] =
            element.getAttribute('data-element-meta-data') || ''
        }

        // Continue searching up the tree, passing along collected attributes
        return findClickableParent(element.parentElement, depth + 1, allAttributes)
      }

      const pageMeta = findPageMeta()
      const allAttributes = findClickableParent(target as HTMLElement)
      // Generate new HTML snapshot ID
      const currentSnapshotId = generateHtmlSnapshotId(timestamp, uuid)

      // Create a serializable version of the target
      const serializedTarget = {
        tagName: target.tagName,
        className: target.className,
        id: target.id,
        innerText: target.innerText || target.value || '',
        outerHTML: target.outerHTML
      }
      const markedDoc = getClickableElementsInViewport()
      const data = {
        uuid: uuid,
        eventType,
        timestamp: timestamp,
        target: serializedTarget,
        htmlSnapshotId: currentSnapshotId,
        selector: selector || '',
        'data-semantic-id': allAttributes['data-clickable-id'] || '',
        'element-meta-name': allAttributes['data-element-meta-name'] || '',
        'element-meta-data': allAttributes['data-element-meta-data'] || '',
        'page-meta': pageMeta || '',
        url: url || '',
        htmlContent: markedDoc.documentElement.outerHTML
      }

      return data
    }
    // todo: patch removeEventListener support wrap
    // const blockSignals = {}
    // const finishSignals = {}
    const wait_for_abort = (signal) => {
      return new Promise((resolve, reject) => {
        if (signal.aborted) {
          // If already aborted, resolve immediately
          resolve(void 0)
        } else {
          // Otherwise, listen for the abort event
          signal.addEventListener('abort', () => resolve(void 0), { once: true })
        }
      })
    }

    const hasDefaultAction = (event: Event) => {
      const element = event.target as HTMLElement
      const anchor = element.closest('a')
      if (anchor) {
        return true
      }
      // if id is nav-search-submit-button
      // if (element.id === 'nav-search-submit-button') {
      //   return true
      // }

      if (element.tagName.toLowerCase() === 'input') {
        if (element.type === 'submit') {
          return true
        }
      }
      return false
    }
    // Monkey patch addEventListener
    EventTarget.prototype.addEventListener = function (type, listener, options = {}) {
      if (options && options.skip_monkey_patch) {
        return originalAddEventListener.call(this, type, listener, options)
      }
      const callOriginalListener = (event) => {
        if (typeof listener === 'function') {
          listener.call(this, event)
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent.call(listener, event)
        }
      }

      if (type === 'click' && listener) {
        const wrappedListener = async function (event) {
          if (window.shouldExclude) {
            console.log('should exclude')
            callOriginalListener(event)
            return
          }
          const target = event.target as HTMLElement
          if (isFromPopup(target)) {
            callOriginalListener(event)
            return
          }
          if (event.just_for_default) {
            console.log('skip monkey patch')
            return
          }
          // Add debouncing logic
          if (event.block_signal) {
            const controller = new AbortController()
            event.finish_signals.push(controller)
            if (event.block_signal) {
              const signal = event.block_signal.signal
              await wait_for_abort(signal)
              console.log('[Monkey Patch] Debouncing click event, unblocking')
            } else {
              console.log('[Monkey Patch] Debouncing click event, no block signal')
            }
            if (typeof listener === 'function') {
              listener.call(this, event)
            } else if (listener && typeof listener.handleEvent === 'function') {
              listener.handleEvent.call(listener, event)
            }
            controller.abort()
            return
          }
          event.block_signal = new AbortController()
          event.finish_signals = []

          console.log('[Monkey Patch] Click detected on:', event.target)
          console.log(event)
          const timestamp = new Date().toISOString()
          // const anchor = target.closest('a')
          console.log(event.target)
          if (hasDefaultAction(event)) {
            // console.log('[Monkey Patch] Click on <a> tag:', anchor.href)
            console.log('[Monkey Patch] Click on cancelable')
            event.preventDefault()
            event.preventDefault = () => {
              event.my_default_prevented = true
            }
            event.my_default_prevented = false
            console.log('after patch event', event)
            // const targetHref = anchor.href
            const uuid = uuidv4()
            try {
              const screenshotComplete = new Promise((resolve, reject) => {
                function handleMessage(event: MessageEvent) {
                  if (
                    event.data.type === 'SCREENSHOT_COMPLETE' &&
                    event.data.timestamp === timestamp
                  ) {
                    window.removeEventListener('message', handleMessage)
                    if (event.data.success) {
                      resolve(void 0)
                    } else {
                      reject(new Error(event.data.error || 'Screenshot failed'))
                    }
                  }
                }
                window.addEventListener('message', handleMessage)

                // Add timeout
                setTimeout(() => {
                  window.removeEventListener('message', handleMessage)
                  reject(new Error('Screenshot timeout'))
                }, TimeOut)
              })

              const interactionComplete = new Promise((resolve, reject) => {
                function handleMessage1(event: MessageEvent) {
                  if (
                    event.data.type === 'INTERACTION_COMPLETE' &&
                    event.data.timestamp === timestamp
                  ) {
                    window.removeEventListener('message', handleMessage1)
                    if (event.data.success) {
                      resolve(void 0)
                    } else {
                      reject(new Error(event.data.error || 'Interaction failed'))
                    }
                  }
                }
                window.addEventListener('message', handleMessage1)

                // Add timeout
                setTimeout(() => {
                  window.removeEventListener('message', handleMessage1)
                  reject(new Error('Interaction timeout'))
                }, TimeOut)
              })
              // log before and after time
              const selector = finder(event.target, {
                maxNumberOfPathChecks: 0
              })
              const data = captureInteraction(
                'click_a',
                event.target,
                timestamp,
                selector,
                window.location.href,
                uuid
              )

              // await sleep 5 seconds
              // await new Promise(resolve => setTimeout(resolve, 5000));
              // alert("1")
              window.postMessage(
                { type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid },
                '*'
              )
              window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*')
              // alert("3")
              // Wait for screenshot to complete
              console.log('waiting for screenshot and interaction')
              await Promise.all([screenshotComplete, interactionComplete])
              console.log('screenshot and interaction complete')
              // console.log("completed")
              // debugger
              // alert("2")
              // window.location.href = targetHref
              // re-dispatch the event
            } catch (error) {
              console.error('Error:', error)
            } finally {
              console.log('running original listener')
              console.log(listener)
              console.log(event)
              event.block_signal.abort()
              // abort all finishSignals
              await Promise.all(
                event.finish_signals.map((controller) => wait_for_abort(controller.signal))
              )
              callOriginalListener(event)
              console.log('event', event)
              console.log('re-dispatch the event if its not prevented, 2')
              if (!event.my_default_prevented) {
                // debugger
                // Clone the original event
                const newEvent = new MouseEvent(event.type, {
                  bubbles: event.bubbles,
                  cancelable: false, // Ensures the default behavior occurs
                  composed: event.composed,
                  view: event.view,
                  detail: event.detail,
                  screenX: event.screenX,
                  screenY: event.screenY,
                  clientX: event.clientX,
                  clientY: event.clientY,
                  ctrlKey: event.ctrlKey,
                  altKey: event.altKey,
                  shiftKey: event.shiftKey,
                  metaKey: event.metaKey,
                  button: event.button,
                  buttons: event.buttons,
                  relatedTarget: event.relatedTarget
                })
                newEvent.just_for_default = true

                // Re-dispatch the new event
                target.dispatchEvent(newEvent)
              }
            }
            return
          }
          const uuid = uuidv4()
          try {
            // Create a promise to wait for screenshot completion
            const screenshotComplete = new Promise((resolve, reject) => {
              function handleMessage(event: MessageEvent) {
                if (
                  event.data.type === 'SCREENSHOT_COMPLETE' &&
                  event.data.timestamp === timestamp
                ) {
                  window.removeEventListener('message', handleMessage)
                  if (event.data.success) {
                    resolve(void 0)
                  } else {
                    reject(new Error(event.data.error || 'Screenshot failed'))
                  }
                }
              }
              window.addEventListener('message', handleMessage)

              // Add timeout
              setTimeout(() => {
                window.removeEventListener('message', handleMessage)
                reject(new Error('Screenshot timeout'))
              }, TimeOut)
            })
            const data = captureInteraction(
              'click_b',
              event.target,
              timestamp,
              finder(event.target, {
                maxNumberOfPathChecks: 0
              }),
              window.location.href,
              uuid
            )
            // Request screenshot
            window.postMessage(
              { type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid },
              '*'
            )
            window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*')
            const interactionComplete = new Promise((resolve, reject) => {
              function handleMessage1(event: MessageEvent) {
                if (
                  event.data.type === 'INTERACTION_COMPLETE' &&
                  event.data.timestamp === timestamp
                ) {
                  window.removeEventListener('message', handleMessage1)
                  if (event.data.success) {
                    resolve(void 0)
                  } else {
                    reject(new Error(event.data.error || 'Interaction failed'))
                  }
                }
              }
              window.addEventListener('message', handleMessage1)

              // Add timeout
              setTimeout(() => {
                window.removeEventListener('message', handleMessage1)
                reject(new Error('Interaction timeout'))
              }, TimeOut)
            })
            // Wait for screenshot to complete
            // await ASscreenshotComplete
            // await interactionComplete
            console.log('waiting for screenshot and interaction')
            await Promise.all([screenshotComplete, interactionComplete])
            console.log('screenshot and interaction complete')
            // Execute original listener after screenshot is captured
          } catch (error) {
            console.error('Error capturing screenshot:', error)
            // Execute original listener even if screenshot fails
          } finally {
            console.log('running original listener')
            event.block_signal.abort()
            // abort all finishSignals
            await Promise.all(
              event.finish_signals.map((controller) => wait_for_abort(controller.signal))
            )
            callOriginalListener(event)
          }
        }

        // Call the original addEventListener with the wrapped listener
        if (options) {
          // if boolean, set passive to true
          if (typeof options === 'boolean') {
            options = {
              useCapture: false,
              passive: false
            }
          } else if (typeof options === 'object') {
            options.passive = false
          }
        }
        return originalAddEventListener.call(this, type, wrappedListener, options)
      } else {
        // Call the original addEventListener for non-click events
        return originalAddEventListener.call(this, type, listener, options)
      }
    }

    console.log('[Monkey Patch] addEventListener successfully patched.')

    // Function to handle clicks on <a> tags
    function handleAnchorClicks() {
      document.addEventListener(
        'click',
        async function (event: MouseEvent) {
          if (window.shouldExclude) {
            console.log('should exclude')
            return
          }
          if (isFromPopup(event.target)) {
            return
          }
          if (event.just_for_default) {
            console.log('skip monkey patch b')
            return
          }
          // Find the closest <a> tag in case of nested elements inside the <a>
          // const anchor = target.closest('a')

          if (hasDefaultAction(event)) {
            // Add debouncing logic
            const now = Date.now()
            if (event.block_signal) {
              console.log('[Monkey Patch] Anchor click event hander from our own listener')
              console.log('should already be logged in other event listeners')
              return
            }
            event.block_signal = new AbortController()
            event.finish_signals = []

            const target = event.target as HTMLElement
            // console.log('[Intercepted] Click on <a> tag:', anchor.href)
            console.log('[Intercepted] Click on cancelable')
            // if (!anchor.href.startsWith('javascript:')) {
            event.preventDefault()
            event.stopPropagation()
            const timestamp = new Date().toISOString()
            // const targetHref = anchor.hrstartPeriodicUploadef
            const uuid = uuidv4()
            try {
              // 监听截图完成的消息
              const screenshotComplete = new Promise((resolve, reject) => {
                function handleMessage(event: MessageEvent) {
                  if (
                    event.data.type === 'SCREENSHOT_COMPLETE' &&
                    event.data.timestamp === timestamp
                  ) {
                    window.removeEventListener('message', handleMessage)
                    if (event.data.success) {
                      resolve(void 0)
                    } else {
                      reject(new Error(event.data.error || 'Screenshot failed'))
                    }
                  }
                }
                window.addEventListener('message', handleMessage, {
                  capture: true
                })

                // 添加超时处理
                setTimeout(() => {
                  window.removeEventListener('message', handleMessage)
                  reject(new Error('Screenshot timeout'))
                }, TimeOut) // 3秒超时
              })

              // 发送截图请求
              window.postMessage(
                { type: 'CAPTURE_SCREENSHOT', timestamp: timestamp, uuid: uuid },
                '*'
              )
              const data = captureInteraction(
                'click_c',
                event.target,
                timestamp,
                finder(target, {
                  maxNumberOfPathChecks: 0
                }),
                window.location.href,
                uuid
              )
              window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data, uuid: uuid }, '*')
              const interactionComplete = new Promise((resolve, reject) => {
                function handleMessage1(event: MessageEvent) {
                  if (
                    event.data.type === 'INTERACTION_COMPLETE' &&
                    event.data.timestamp === timestamp
                  ) {
                    window.removeEventListener('message', handleMessage1)
                    if (event.data.success) {
                      resolve(void 0)
                    } else {
                      reject(new Error(event.data.error || 'Interaction failed'))
                    }
                  }
                }
                window.addEventListener('message', handleMessage1)

                // Add timeout
                setTimeout(() => {
                  window.removeEventListener('message', handleMessage1)
                  reject(new Error('Interaction timeout'))
                }, TimeOut)
              })
              // 等待截图完成
              await screenshotComplete
              await interactionComplete

              // 截图确认完成后再跳转
              // window.location.href = targetHref
            } catch (error) {
              console.error('Error capturing screenshot:', error)
              // window.location.href = targetHref
            } finally {
              event.block_signal.abort()
              await Promise.all(
                event.finish_signals.map((controller) => wait_for_abort(controller.signal))
              )
              console.log('re-dispatch the event if its not prevented, 1')
              if (!event.my_default_prevented) {
                // Clone the original event
                const newEvent = new MouseEvent(event.type, {
                  bubbles: event.bubbles,
                  cancelable: false, // Ensures the default behavior occurs
                  composed: event.composed,
                  view: event.view,
                  detail: event.detail,
                  screenX: event.screenX,
                  screenY: event.screenY,
                  clientX: event.clientX,
                  clientY: event.clientY,
                  ctrlKey: event.ctrlKey,
                  altKey: event.altKey,
                  shiftKey: event.shiftKey,
                  metaKey: event.metaKey,
                  button: event.button,
                  buttons: event.buttons,
                  relatedTarget: event.relatedTarget
                })
                newEvent.just_for_default = true

                // Re-dispatch the new event
                target.dispatchEvent(newEvent)
              }
            }
          }
        },
        {
          useCapture: true,
          skip_monkey_patch: true,
          passive: false
        }
      ) // Use capture phase to intercept the event earlier
    }

    // Call the function to handle <a> tag clicks
    handleAnchorClicks()
  }
  if (!window.monkeyPatched) {
    monkeyPatch()
  }
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      console.log('DOMContentLoaded')
      shouldExclude(window.location.href).then((result) => {
        console.log('shouldExclude', result)
        window.shouldExclude = result
      })
    },
    {
      once: true
    }
  )
}

// ignore user id for now, because full check would be async.
shouldExclude(window.location.href, true).then((result) => {
  if (!result) {
    work()
  }
})
