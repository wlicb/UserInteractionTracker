(function () {
  // 添加类型声明
  interface ExtendedEventTarget extends EventTarget {
    _listenerMap?: Map<EventListenerOrEventListenerObject, EventListener>;
  }

  interface ExtendedHTMLElement extends HTMLElement {
    _onclickHandler?: (event: Event) => void;
  }

  // 保存原始的方法
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  const originalRemoveEventListener = EventTarget.prototype.removeEventListener;

  // Monkey Patch addEventListener
  EventTarget.prototype.addEventListener = function (
    this: ExtendedEventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ) {
    if (type === 'click' && listener) {
      const wrappedListener = function (this: any, event: Event) {
        // 在点击事件执行前，插入自定义逻辑
        console.log('[Monkey Patch] Click detected on:', event.target);
        console.log('[Monkey Patch] Event details:', event);

        // 执行原始监听器
        if (typeof listener === 'function') {
          listener.call(this, event);
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        }
      };

      if (!this._listenerMap) this._listenerMap = new Map();
      this._listenerMap.set(listener, wrappedListener);

      return originalAddEventListener.call(this, type, wrappedListener, options);
    }
    return originalAddEventListener.call(this, type, listener, options);
  };

  // Monkey Patch removeEventListener
  EventTarget.prototype.removeEventListener = function (
    this: ExtendedEventTarget,
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions
  ) {
    if (type === 'click' && listener && this._listenerMap && this._listenerMap.has(listener)) {
      const wrappedListener = this._listenerMap.get(listener);
      this._listenerMap.delete(listener);
      if (wrappedListener) {
        return originalRemoveEventListener.call(this, type, wrappedListener, options);
      }
    }
    return originalRemoveEventListener.call(this, type, listener, options);
  };

  // Monkey Patch onclick property
  Object.defineProperty(HTMLElement.prototype, 'onclick', {
    get: function (this: ExtendedHTMLElement) {
      return this._onclickHandler || null;
    },
    set: function (this: ExtendedHTMLElement, handler: ((event: Event) => void) | null) {
      if (handler) {
        const wrappedHandler = function (this: HTMLElement, event: Event) {
          console.log('[Monkey Patch] Click detected on (onclick):', event.target);
          console.log('[Monkey Patch] Event details (onclick):', event);
          return handler.call(this, event);
        };
        this._onclickHandler = handler;
        this.addEventListener('click', wrappedHandler);
      } else {
        if (this._onclickHandler) {
          this.removeEventListener('click', this._onclickHandler);
        }
        this._onclickHandler = undefined;
      }
    },
  });

  // 动态内容支持：使用 MutationObserver
  const observer = new MutationObserver((mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          const element = node as ExtendedHTMLElement;
          if (element.onclick) {
            const handler = element.onclick;
            element.onclick = handler;
          }
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  console.log('[Monkey Patch] Click interception is active.');
})();
