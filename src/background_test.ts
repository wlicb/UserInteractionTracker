chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "injectScript") {
      chrome.scripting.executeScript({
          target: { tabId: sender.tab?.id! },
          func: () => {
              const originalAddEventListener = EventTarget.prototype.addEventListener;

              // Monkey patch addEventListener
              EventTarget.prototype.addEventListener = function (type, listener, options) {
                  console.log('[Monkey Patch] Adding event listener for type:', type);

                  if (type === 'click' && listener) {
                      const wrappedListener = function(this: HTMLElement, event: Event) {
                          console.log('[Monkey Patch] Click detected on:', event.target);
                          console.log('[Monkey Patch] Event details:', event);

                          if (typeof listener === 'function') {
                              listener.call(this, event);
                          }
                      };

                      return originalAddEventListener.call(this, type, wrappedListener, options);
                  }

                  return originalAddEventListener.call(this, type, listener, options);
              };
          },
      });
  }
});
