/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/injected.ts":
/*!*************************!*\
  !*** ./src/injected.ts ***!
  \*************************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Example: Monkeypatch a global function
const originalAddEventListener = EventTarget.prototype.addEventListener;
console.log('start');
// Add this at the top of the file
const DEBOUNCE_DELAY = 150; // 300ms
let lastClickTimestamp = 0;
function generateHtmlSnapshotId() {
    const url = window.location.href;
    const timestamp = new Date().toISOString();
    return `html_${hashCode(url)}_${timestamp}`;
}
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    console.log("Hash value before return:", hash);
    return hash.toString();
}
function generateSelector(element) {
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
function captureInteraction(eventType, target, timestamp, selector, url) {
    function findClickableParent(element, depth = 0) {
        if (!element || depth >= 5)
            return null;
        if (element.hasAttribute('data-clickable-id')) {
            return element;
        }
        return findClickableParent(element.parentElement, depth + 1);
    }
    const clickableElement = findClickableParent(target);
    const clickableId = clickableElement ? clickableElement.getAttribute('data-clickable-id') || '' : '';
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
        target: serializedTarget,
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
    return data;
}
// Monkey patch addEventListener
EventTarget.prototype.addEventListener = function (type, listener, options) {
    console.log('[Monkey Patch] Adding event listener for type:', type);
    if (type === 'click' && listener) {
        const wrappedListener = function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                // Add debouncing logic
                const now = Date.now();
                if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
                    console.log('[Monkey Patch] Debouncing click event');
                    return;
                }
                lastClickTimestamp = now;
                console.log('[Monkey Patch] Click detected on:', event.target);
                const timestamp = new Date().toISOString();
                const target = event.target;
                const anchor = target.closest('a');
                if (anchor && anchor.href && anchor.tagName.toLowerCase() === 'a' && !anchor.href.startsWith('javascript:')) {
                    event.preventDefault();
                    event.stopPropagation();
                    const targetHref = anchor.href;
                    try {
                        const screenshotComplete = new Promise((resolve, reject) => {
                            function handleMessage(event) {
                                if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
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
                        const interactionComplete = new Promise((resolve, reject) => {
                            function handleMessage1(event) {
                                if (event.data.type === 'INTERACTION_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage1);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
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
                        const data = captureInteraction('click_a', event.target, timestamp, generateSelector(event.target), window.location.href);
                        window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                        window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*');
                        // Wait for screenshot to complete
                        yield screenshotComplete;
                        yield interactionComplete;
                        // 手动控制跳转
                        window.location.href = targetHref;
                    }
                    catch (error) {
                        console.error('Error:', error);
                        window.location.href = targetHref;
                    }
                    return;
                }
                try {
                    // Create a promise to wait for screenshot completion
                    const screenshotComplete = new Promise((resolve, reject) => {
                        function handleMessage(event) {
                            if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                event.data.timestamp === timestamp) {
                                window.removeEventListener('message', handleMessage);
                                if (event.data.success) {
                                    resolve(void 0);
                                }
                                else {
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
                    const data = captureInteraction('click_b', event.target, timestamp, generateSelector(event.target), window.location.href);
                    // Request screenshot
                    window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                    window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*');
                    const interactionComplete = new Promise((resolve, reject) => {
                        function handleMessage1(event) {
                            if (event.data.type === 'INTERACTION_COMPLETE' &&
                                event.data.timestamp === timestamp) {
                                window.removeEventListener('message', handleMessage1);
                                if (event.data.success) {
                                    resolve(void 0);
                                }
                                else {
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
                    yield screenshotComplete;
                    yield interactionComplete;
                    // Execute original listener after screenshot is captured
                    if (typeof listener === 'function') {
                        listener.call(this, event);
                    }
                    else if (listener && typeof listener.handleEvent === 'function') {
                        listener.handleEvent.call(listener, event);
                    }
                }
                catch (error) {
                    console.error('Error capturing screenshot:', error);
                    // Execute original listener even if screenshot fails
                    if (typeof listener === 'function') {
                        listener.call(this, event);
                    }
                    else if (listener && typeof listener.handleEvent === 'function') {
                        listener.handleEvent.call(listener, event);
                    }
                }
            });
        };
        // Call the original addEventListener with the wrapped listener
        return originalAddEventListener.call(this, type, wrappedListener, options);
    }
    else {
        // Call the original addEventListener for non-click events
        return originalAddEventListener.call(this, type, listener, options);
    }
};
console.log('[Monkey Patch] addEventListener successfully patched.');
// Function to handle clicks on <a> tags
function handleAnchorClicks() {
    document.addEventListener('click', function (event) {
        return __awaiter(this, void 0, void 0, function* () {
            // Add debouncing logic
            const now = Date.now();
            if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
                console.log('[Monkey Patch] Debouncing anchor click event');
                return;
            }
            lastClickTimestamp = now;
            const target = event.target;
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
                            function handleMessage(event) {
                                if (event.data.type === 'SCREENSHOT_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
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
                        const data = captureInteraction('click_c', event.target, timestamp, generateSelector(target), window.location.href);
                        window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*');
                        const interactionComplete = new Promise((resolve, reject) => {
                            function handleMessage1(event) {
                                if (event.data.type === 'INTERACTION_COMPLETE' &&
                                    event.data.timestamp === timestamp) {
                                    window.removeEventListener('message', handleMessage1);
                                    if (event.data.success) {
                                        resolve(void 0);
                                    }
                                    else {
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
                        // 等待截图完成
                        yield screenshotComplete;
                        yield interactionComplete;
                        // 截图确认完成后再跳转
                        window.location.href = targetHref;
                    }
                    catch (error) {
                        console.error('Error capturing screenshot:', error);
                        window.location.href = targetHref;
                    }
                }
            }
        });
    }, true); // Use capture phase to intercept the event earlier
}
// Call the function to handle <a> tag clicks
handleAnchorClicks();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/injected.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsR0FBRyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLElBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLDZDQUE2QyxrREFBa0Q7QUFDL0YsNkNBQTZDLDJDQUEyQztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUNBQXlDLGtEQUFrRDtBQUMzRix5Q0FBeUMsMkNBQTJDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTO0FBQ3RDLHlCQUF5QjtBQUN6QjtBQUNBLDZDQUE2QyxrREFBa0Q7QUFDL0Y7QUFDQSw2Q0FBNkMsMkNBQTJDO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssU0FBUztBQUNkO0FBQ0E7QUFDQTs7Ozs7Ozs7VUU3VUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2luamVjdGVkLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIEV4YW1wbGU6IE1vbmtleXBhdGNoIGEgZ2xvYmFsIGZ1bmN0aW9uXG5jb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbmNvbnNvbGUubG9nKCdzdGFydCcpO1xuLy8gQWRkIHRoaXMgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuY29uc3QgREVCT1VOQ0VfREVMQVkgPSAxNTA7IC8vIDMwMG1zXG5sZXQgbGFzdENsaWNrVGltZXN0YW1wID0gMDtcbmZ1bmN0aW9uIGdlbmVyYXRlSHRtbFNuYXBzaG90SWQoKSB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIHJldHVybiBgaHRtbF8ke2hhc2hDb2RlKHVybCl9XyR7dGltZXN0YW1wfWA7XG59XG5mdW5jdGlvbiBoYXNoQ29kZShzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJIYXNoIHZhbHVlIGJlZm9yZSByZXR1cm46XCIsIGhhc2gpO1xuICAgIHJldHVybiBoYXNoLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5pZCkge1xuICAgICAgICByZXR1cm4gYCMke2VsZW1lbnQuaWR9YDtcbiAgICB9XG4gICAgbGV0IHBhdGggPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBjdXJyZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gY3VycmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIOa3u+WKoOexu+WQje+8iOWPr+mAie+8iVxuICAgICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUgJiYgdHlwZW9mIGN1cnJlbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc2VsZWN0b3IgKz0gJy4nICsgY3VycmVudC5jbGFzc05hbWUudHJpbSgpLnJlcGxhY2UoL1xccysvZywgJy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmt7vliqDlkIznuqflhYPntKDkuK3nmoTkvY3nva5cbiAgICAgICAgbGV0IHNpYmxpbmcgPSBjdXJyZW50O1xuICAgICAgICBsZXQgbnRoID0gMTtcbiAgICAgICAgd2hpbGUgKHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09IGN1cnJlbnQudGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIG50aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChudGggPiAxKSB7XG4gICAgICAgICAgICBzZWxlY3RvciArPSBgOm50aC1vZi10eXBlKCR7bnRofSlgO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgudW5zaGlmdChzZWxlY3Rvcik7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoLmpvaW4oJyA+ICcpO1xufVxuZnVuY3Rpb24gY2FwdHVyZUludGVyYWN0aW9uKGV2ZW50VHlwZSwgdGFyZ2V0LCB0aW1lc3RhbXAsIHNlbGVjdG9yLCB1cmwpIHtcbiAgICBmdW5jdGlvbiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQsIGRlcHRoID0gMCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZGVwdGggPj0gNSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2xpY2thYmxlLWlkJykpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaW5kQ2xpY2thYmxlUGFyZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCwgZGVwdGggKyAxKTtcbiAgICB9XG4gICAgY29uc3QgY2xpY2thYmxlRWxlbWVudCA9IGZpbmRDbGlja2FibGVQYXJlbnQodGFyZ2V0KTtcbiAgICBjb25zdCBjbGlja2FibGVJZCA9IGNsaWNrYWJsZUVsZW1lbnQgPyBjbGlja2FibGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlja2FibGUtaWQnKSB8fCAnJyA6ICcnO1xuICAgIC8vIEdlbmVyYXRlIG5ldyBIVE1MIHNuYXBzaG90IElEXG4gICAgY29uc3QgY3VycmVudFNuYXBzaG90SWQgPSBnZW5lcmF0ZUh0bWxTbmFwc2hvdElkKCk7XG4gICAgLy8gQ3JlYXRlIGEgc2VyaWFsaXphYmxlIHZlcnNpb24gb2YgdGhlIHRhcmdldFxuICAgIGNvbnN0IHNlcmlhbGl6ZWRUYXJnZXQgPSB7XG4gICAgICAgIHRhZ05hbWU6IHRhcmdldC50YWdOYW1lLFxuICAgICAgICBjbGFzc05hbWU6IHRhcmdldC5jbGFzc05hbWUsXG4gICAgICAgIGlkOiB0YXJnZXQuaWQsXG4gICAgICAgIGlubmVyVGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICAgIG91dGVySFRNTDogdGFyZ2V0Lm91dGVySFRNTFxuICAgIH07XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICAgICAgdGFyZ2V0OiBzZXJpYWxpemVkVGFyZ2V0LFxuICAgICAgICB0YXJnZXRPdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUwsXG4gICAgICAgIHRhcmdldENsYXNzOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICB0YXJnZXRJZDogdGFyZ2V0LmlkLFxuICAgICAgICB0YXJnZXRUZXh0OiB0YXJnZXQuaW5uZXJUZXh0IHx8IHRhcmdldC52YWx1ZSB8fCAnJyxcbiAgICAgICAgaHRtbFNuYXBzaG90SWQ6IGN1cnJlbnRTbmFwc2hvdElkLFxuICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IgfHwgJycsXG4gICAgICAgIGNsaWNrYWJsZUlkOiBjbGlja2FibGVJZCB8fCAnJyxcbiAgICAgICAgdXJsOiB1cmwgfHwgJycsXG4gICAgICAgIGh0bWxDb250ZW50OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MXG4gICAgfTtcbiAgICByZXR1cm4gZGF0YTtcbn1cbi8vIE1vbmtleSBwYXRjaCBhZGRFdmVudExpc3RlbmVyXG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBBZGRpbmcgZXZlbnQgbGlzdGVuZXIgZm9yIHR5cGU6JywgdHlwZSk7XG4gICAgaWYgKHR5cGUgPT09ICdjbGljaycgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBkZWJvdW5jaW5nIGxvZ2ljXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gbGFzdENsaWNrVGltZXN0YW1wIDwgREVCT1VOQ0VfREVMQVkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIERlYm91bmNpbmcgY2xpY2sgZXZlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0Q2xpY2tUaW1lc3RhbXAgPSBub3c7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIGRldGVjdGVkIG9uOicsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpO1xuICAgICAgICAgICAgICAgIGlmIChhbmNob3IgJiYgYW5jaG9yLmhyZWYgJiYgYW5jaG9yLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnICYmICFhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JlZW5zaG90Q29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdTY3JlZW5zaG90IGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlMShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbignY2xpY2tfYScsIGV2ZW50LnRhcmdldCwgdGltZXN0YW1wLCBnZW5lcmF0ZVNlbGVjdG9yKGV2ZW50LnRhcmdldCksIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHNjcmVlbnNob3RDb21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGludGVyYWN0aW9uQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmiYvliqjmjqfliLbot7PovaxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0SHJlZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdG8gd2FpdCBmb3Igc2NyZWVuc2hvdCBjb21wbGV0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhcHR1cmVJbnRlcmFjdGlvbignY2xpY2tfYicsIGV2ZW50LnRhcmdldCwgdGltZXN0YW1wLCBnZW5lcmF0ZVNlbGVjdG9yKGV2ZW50LnRhcmdldCksIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiAnU0FWRV9JTlRFUkFDVElPTl9EQVRBJywgZGF0YTogZGF0YSB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvbkNvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnSU5URVJBQ1RJT05fQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEudGltZXN0YW1wID09PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnSW50ZXJhY3Rpb24gZmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSW50ZXJhY3Rpb24gdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2NyZWVuc2hvdCB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzY3JlZW5zaG90Q29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGludGVyYWN0aW9uQ29tcGxldGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgb3JpZ2luYWwgbGlzdGVuZXIgYWZ0ZXIgc2NyZWVuc2hvdCBpcyBjYXB0dXJlZFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIG9yaWdpbmFsIGxpc3RlbmVyIGV2ZW4gaWYgc2NyZWVuc2hvdCBmYWlsc1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChsaXN0ZW5lciAmJiB0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50LmNhbGwobGlzdGVuZXIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIHdpdGggdGhlIHdyYXBwZWQgbGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHR5cGUsIHdyYXBwZWRMaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBhZGRFdmVudExpc3RlbmVyIGZvciBub24tY2xpY2sgZXZlbnRzXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgfVxufTtcbmNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBhZGRFdmVudExpc3RlbmVyIHN1Y2Nlc3NmdWxseSBwYXRjaGVkLicpO1xuLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGNsaWNrcyBvbiA8YT4gdGFnc1xuZnVuY3Rpb24gaGFuZGxlQW5jaG9yQ2xpY2tzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBBZGQgZGVib3VuY2luZyBsb2dpY1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGlmIChub3cgLSBsYXN0Q2xpY2tUaW1lc3RhbXAgPCBERUJPVU5DRV9ERUxBWSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbTW9ua2V5IFBhdGNoXSBEZWJvdW5jaW5nIGFuY2hvciBjbGljayBldmVudCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RDbGlja1RpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgPGE+IHRhZyBpbiBjYXNlIG9mIG5lc3RlZCBlbGVtZW50cyBpbnNpZGUgdGhlIDxhPlxuICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gdGFyZ2V0LmNsb3Nlc3QoJ2EnKTtcbiAgICAgICAgICAgIGlmIChhbmNob3IgJiYgYW5jaG9yLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnICYmIGFuY2hvci5ocmVmKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZik7XG4gICAgICAgICAgICAgICAgaWYgKCFhbmNob3IuaHJlZi5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEhyZWYgPSBhbmNob3IuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebkeWQrOaIquWbvuWujOaIkOeahOa2iOaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyZWVuc2hvdENvbXBsZXRlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ1NDUkVFTlNIT1RfQ09NUExFVEUnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXZlbnQuZGF0YS5lcnJvciB8fCAnU2NyZWVuc2hvdCBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDotoXml7blpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignU2NyZWVuc2hvdCB0aW1lb3V0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApOyAvLyAz56eS6LaF5pe2XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPkemAgeaIquWbvuivt+axglxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0NBUFRVUkVfU0NSRUVOU0hPVCcsIHRpbWVzdGFtcDogdGltZXN0YW1wIH0sICcqJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY2FwdHVyZUludGVyYWN0aW9uKCdjbGlja19jJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsIGdlbmVyYXRlU2VsZWN0b3IodGFyZ2V0KSwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsIGRhdGE6IGRhdGEgfSwgJyonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uQ29tcGxldGUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZTEoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihldmVudC5kYXRhLmVycm9yIHx8ICdJbnRlcmFjdGlvbiBmYWlsZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOetieW+heaIquWbvuWujOaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgc2NyZWVuc2hvdENvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgaW50ZXJhY3Rpb25Db21wbGV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaIquWbvuehruiupOWujOaIkOWQjuWGjei3s+i9rFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2FwdHVyaW5nIHNjcmVlbnNob3Q6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCB0cnVlKTsgLy8gVXNlIGNhcHR1cmUgcGhhc2UgdG8gaW50ZXJjZXB0IHRoZSBldmVudCBlYXJsaWVyXG59XG4vLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBoYW5kbGUgPGE+IHRhZyBjbGlja3NcbmhhbmRsZUFuY2hvckNsaWNrcygpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9pbmplY3RlZC50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9