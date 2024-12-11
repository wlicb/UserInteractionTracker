(() => {
    const originalAddEventListener = HTMLElement.prototype.addEventListener;
    console.log('start')
    HTMLElement.prototype.addEventListener = function (
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions
    ): void {
        if (listener) {
            console.log(`[Monkey Patch] Adding listener on element ${this.tagName} for type: ${type}`);
            return originalAddEventListener.call(this, type, listener, options);
        }
    };
})();


(() => {
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        console.log('[MutationObserver] Node added:', node.tagName);
                        // 动态监听绑定行为
                        node.addEventListener('click', (event) => {
                            console.log('[Monkey Patch] Click intercepted:', event.target);
                        });
                    }
                });
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
