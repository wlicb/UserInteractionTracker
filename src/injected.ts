// Example: Monkeypatch a global function
const originalAddEventListener = EventTarget.prototype.addEventListener;
console.log('start')


function generateHtmlSnapshotId() {
    const url = window.location.href;
    const timestamp = new Date().toISOString();
    return `html_${hashCode(url)}_${timestamp}`;
}
function hashCode(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    console.log("Hash value before return:", hash);
    return hash.toString();
}
function generateSelector(element: Element): string {
    if (element.id) {
        return `#${element.id}`;
    }

    let path = [];
    let current = element;

    while (current && current !== document.body && current.parentElement) {
        let selector = current.tagName.toLowerCase();

        // 添加类名（可选）
        if (current.className && typeof current.className === 'string') {
            selector += '.' + current.className.trim().replace(/\s+/g, '.');
        }

        // 添加同级元素中的位置
        let sibling = current;
        let nth = 1;
        while (sibling.previousElementSibling) {
            sibling = sibling.previousElementSibling;
            if (sibling.tagName === current.tagName) {
                nth++;
            }
        }
        if (nth > 1) {
            selector += `:nth-of-type(${nth})`;
        }

        path.unshift(selector);
        current = current.parentElement;
    }

    return path.join(' > ');
}

function captureInteraction(eventType: string, target: any, timestamp: string, selector: string, clickableId: string, url: string) {
    // Generate new HTML snapshot ID
    const currentSnapshotId = generateHtmlSnapshotId();

    // Create a serializable version of the target
    const serializedTarget = {
        tagName: target.tagName,
        className: target.className,
        id: target.id,
        innerText: target.innerText || target.value || '',
        outerHTML: target.outerHTML
    };

    const data = {
        eventType,
        timestamp: timestamp,
        target: serializedTarget,  // Replace direct DOM element with serializable object
        targetOuterHTML: target.outerHTML,
        targetClass: target.className,
        targetId: target.id,
        targetText: target.innerText || target.value || '',
        htmlSnapshotId: currentSnapshotId,
        selector: selector || '',
        clickableId: clickableId || '',
        url: url || '',
        htmlContent: document.documentElement.outerHTML
    };

    window.postMessage({
        type: 'SAVE_INTERACTION_DATA',
        data: data
    }, '*');
}

// Monkey patch addEventListener
EventTarget.prototype.addEventListener = function (type, listener, options) {
    console.log('[Monkey Patch] Adding event listener for type:', type);

    if (type === 'click' && listener) {
        const wrappedListener = async function (event) {
            console.log('[Monkey Patch] Click detected on:', event.target);
            const timestamp = new Date().toISOString();
            
            try {
                // Create a promise to wait for screenshot completion
                const screenshotComplete = new Promise((resolve, reject) => {
                    function handleMessage(event: MessageEvent) {
                        if (event.data.type === 'SCREENSHOT_COMPLETE' && 
                            event.data.timestamp === timestamp) {
                            window.removeEventListener('message', handleMessage);
                            if (event.data.success) {
                                resolve(void 0);
                            } else {
                                reject(new Error(event.data.error || 'Screenshot failed'));
                            }
                        }
                    }
                    window.addEventListener('message', handleMessage);
                    
                    // Add timeout
                    setTimeout(() => {
                        window.removeEventListener('message', handleMessage);
                        reject(new Error('Screenshot timeout'));
                    }, 3000);
                });

                // Request screenshot
                window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                
                captureInteraction('click', event.target, timestamp, generateSelector(event.target), '', window.location.href);
                const interactionComplete = new Promise((resolve, reject) => {
                    function handleMessage1(event: MessageEvent) {
                        if (event.data.type === 'INTERACTION_COMPLETE' && 
                            event.data.timestamp === timestamp) {
                            window.removeEventListener('message', handleMessage1);
                            if (event.data.success) {
                                resolve(void 0);
                            } else {
                                reject(new Error(event.data.error || 'Interaction failed'));
                            }
                        }
                    }
                    window.addEventListener('message', handleMessage1);
                    
                    // Add timeout
                    setTimeout(() => {
                        window.removeEventListener('message', handleMessage1);
                        reject(new Error('Interaction timeout'));
                    }, 3000);
                });
                // Wait for screenshot to complete
                await screenshotComplete;
                await interactionComplete;
                // Execute original listener after screenshot is captured
                if (typeof listener === 'function') {
                    listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                    listener.handleEvent.call(listener, event);
                }
            } catch (error) {
                console.error('Error capturing screenshot:', error);
                // Execute original listener even if screenshot fails
                if (typeof listener === 'function') {
                    listener.call(this, event);
                } else if (listener && typeof listener.handleEvent === 'function') {
                    listener.handleEvent.call(listener, event);
                }
            }
        };

        // Call the original addEventListener with the wrapped listener
        return originalAddEventListener.call(this, type, wrappedListener, options);
    } else {
        // Call the original addEventListener for non-click events
        return originalAddEventListener.call(this, type, listener, options);
    }
};

console.log('[Monkey Patch] addEventListener successfully patched.');

// Function to handle clicks on <a> tags
function handleAnchorClicks() {
    document.addEventListener('click', async function (event) {
        const target = event.target as HTMLElement;

        // Find the closest <a> tag in case of nested elements inside the <a>
        const anchor = target.closest('a');

        if (anchor && anchor.tagName.toLowerCase() === 'a' && anchor.href) {
            console.log('[Intercepted] Click on <a> tag:', anchor.href);
            if (!anchor.href.startsWith('javascript:')) {
                event.preventDefault();
                event.stopPropagation();
                const timestamp = new Date().toISOString();
                const targetHref = anchor.href;
                
                try {
                    // 监听截图完成的消息
                    const screenshotComplete = new Promise((resolve, reject) => {
                        function handleMessage(event: MessageEvent) {
                            if (event.data.type === 'SCREENSHOT_COMPLETE' && 
                                event.data.timestamp === timestamp) {
                                window.removeEventListener('message', handleMessage);
                                if (event.data.success) {
                                    resolve(void 0);
                                } else {
                                    reject(new Error(event.data.error || 'Screenshot failed'));
                                }
                            }
                        }
                        window.addEventListener('message', handleMessage);
                        
                        // 添加超时处理
                        setTimeout(() => {
                            window.removeEventListener('message', handleMessage);
                            reject(new Error('Screenshot timeout'));
                        }, 3000); // 3秒超时
                    });

                    // 发送截图请求
                    window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                    
                    // 等待截图完成
                    await screenshotComplete;
                    
                    // 截图确认完成后再跳转
                    window.location.href = targetHref;
                } catch (error) {
                    console.error('Error capturing screenshot:', error);
                    window.location.href = targetHref;
                }
            }
        }
    }, true); // Use capture phase to intercept the event earlier
}

// Call the function to handle <a> tag clicks
handleAnchorClicks();