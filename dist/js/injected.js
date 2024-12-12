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
function captureInteraction(eventType, target, timestamp, selector, clickableId, url) {
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
    window.postMessage({
        type: 'SAVE_INTERACTION_DATA',
        data: data
    }, '*');
}
// Monkey patch addEventListener
EventTarget.prototype.addEventListener = function (type, listener, options) {
    console.log('[Monkey Patch] Adding event listener for type:', type);
    if (type === 'click' && listener) {
        const wrappedListener = function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('[Monkey Patch] Click detected on:', event.target);
                const timestamp = new Date().toISOString();
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
                    // Request screenshot
                    window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
                    captureInteraction('click', event.target, timestamp, generateSelector(event.target), '', window.location.href);
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
// // Function to handle clicks on <a> tags
// function handleAnchorClicks() {
//     document.addEventListener('click', async function (event) {
//         const target = event.target as HTMLElement;
//         // Find the closest <a> tag in case of nested elements inside the <a>
//         const anchor = target.closest('a');
//         if (anchor && anchor.tagName.toLowerCase() === 'a' && anchor.href) {
//             console.log('[Intercepted] Click on <a> tag:', anchor.href);
//             if (!anchor.href.startsWith('javascript:')) {
//                 event.preventDefault();
//                 event.stopPropagation();
//                 const timestamp = new Date().toISOString();
//                 const targetHref = anchor.href;
//                 try {
//                     // 监听截图完成的消息
//                     const screenshotComplete = new Promise((resolve, reject) => {
//                         function handleMessage(event: MessageEvent) {
//                             if (event.data.type === 'SCREENSHOT_COMPLETE' && 
//                                 event.data.timestamp === timestamp) {
//                                 window.removeEventListener('message', handleMessage);
//                                 if (event.data.success) {
//                                     resolve(void 0);
//                                 } else {
//                                     reject(new Error(event.data.error || 'Screenshot failed'));
//                                 }
//                             }
//                         }
//                         window.addEventListener('message', handleMessage);
//                         // 添加超时处理
//                         setTimeout(() => {
//                             window.removeEventListener('message', handleMessage);
//                             reject(new Error('Screenshot timeout'));
//                         }, 3000); // 3秒超时
//                     });
//                     // 发送截图请求
//                     window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*');
//                     // 等待截图完成
//                     await screenshotComplete;
//                     // 截图确认完成后再跳转
//                     window.location.href = targetHref;
//                 } catch (error) {
//                     console.error('Error capturing screenshot:', error);
//                     window.location.href = targetHref;
//                 }
//             }
//         }
//     }, true); // Use capture phase to intercept the event earlier
// }
// // Call the function to handle <a> tag clicks
// handleAnchorClicks();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjLEdBQUcsVUFBVTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EseUNBQXlDLGtEQUFrRDtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckMsd0JBQXdCO0FBQ3hCO0FBQ0EsNENBQTRDLGtEQUFrRDtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxTQUFTO0FBQ2pCO0FBQ0E7QUFDQTs7Ozs7Ozs7VUUzTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL2luamVjdGVkLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi10eXBlc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIEV4YW1wbGU6IE1vbmtleXBhdGNoIGEgZ2xvYmFsIGZ1bmN0aW9uXG5jb25zdCBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIgPSBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcjtcbmNvbnNvbGUubG9nKCdzdGFydCcpO1xuZnVuY3Rpb24gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIGBodG1sXyR7aGFzaENvZGUodXJsKX1fJHt0aW1lc3RhbXB9YDtcbn1cbmZ1bmN0aW9uIGhhc2hDb2RlKHN0cikge1xuICAgIGxldCBoYXNoID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIkhhc2ggdmFsdWUgYmVmb3JlIHJldHVybjpcIiwgaGFzaCk7XG4gICAgcmV0dXJuIGhhc2gudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0b3IoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICAgIHJldHVybiBgIyR7ZWxlbWVudC5pZH1gO1xuICAgIH1cbiAgICBsZXQgcGF0aCA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIGN1cnJlbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8g5re75Yqg57G75ZCN77yI5Y+v6YCJ77yJXG4gICAgICAgIGlmIChjdXJyZW50LmNsYXNzTmFtZSAmJiB0eXBlb2YgY3VycmVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzZWxlY3RvciArPSAnLicgKyBjdXJyZW50LmNsYXNzTmFtZS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOa3u+WKoOWQjOe6p+WFg+e0oOS4reeahOS9jee9rlxuICAgICAgICBsZXQgc2libGluZyA9IGN1cnJlbnQ7XG4gICAgICAgIGxldCBudGggPSAxO1xuICAgICAgICB3aGlsZSAoc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gY3VycmVudC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgbnRoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG50aCA+IDEpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yICs9IGA6bnRoLW9mLXR5cGUoJHtudGh9KWA7XG4gICAgICAgIH1cbiAgICAgICAgcGF0aC51bnNoaWZ0KHNlbGVjdG9yKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGguam9pbignID4gJyk7XG59XG5mdW5jdGlvbiBjYXB0dXJlSW50ZXJhY3Rpb24oZXZlbnRUeXBlLCB0YXJnZXQsIHRpbWVzdGFtcCwgc2VsZWN0b3IsIGNsaWNrYWJsZUlkLCB1cmwpIHtcbiAgICAvLyBHZW5lcmF0ZSBuZXcgSFRNTCBzbmFwc2hvdCBJRFxuICAgIGNvbnN0IGN1cnJlbnRTbmFwc2hvdElkID0gZ2VuZXJhdGVIdG1sU25hcHNob3RJZCgpO1xuICAgIC8vIENyZWF0ZSBhIHNlcmlhbGl6YWJsZSB2ZXJzaW9uIG9mIHRoZSB0YXJnZXRcbiAgICBjb25zdCBzZXJpYWxpemVkVGFyZ2V0ID0ge1xuICAgICAgICB0YWdOYW1lOiB0YXJnZXQudGFnTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lOiB0YXJnZXQuY2xhc3NOYW1lLFxuICAgICAgICBpZDogdGFyZ2V0LmlkLFxuICAgICAgICBpbm5lclRleHQ6IHRhcmdldC5pbm5lclRleHQgfHwgdGFyZ2V0LnZhbHVlIHx8ICcnLFxuICAgICAgICBvdXRlckhUTUw6IHRhcmdldC5vdXRlckhUTUxcbiAgICB9O1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGV2ZW50VHlwZSxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gICAgICAgIHRhcmdldDogc2VyaWFsaXplZFRhcmdldCxcbiAgICAgICAgdGFyZ2V0T3V0ZXJIVE1MOiB0YXJnZXQub3V0ZXJIVE1MLFxuICAgICAgICB0YXJnZXRDbGFzczogdGFyZ2V0LmNsYXNzTmFtZSxcbiAgICAgICAgdGFyZ2V0SWQ6IHRhcmdldC5pZCxcbiAgICAgICAgdGFyZ2V0VGV4dDogdGFyZ2V0LmlubmVyVGV4dCB8fCB0YXJnZXQudmFsdWUgfHwgJycsXG4gICAgICAgIGh0bWxTbmFwc2hvdElkOiBjdXJyZW50U25hcHNob3RJZCxcbiAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yIHx8ICcnLFxuICAgICAgICBjbGlja2FibGVJZDogY2xpY2thYmxlSWQgfHwgJycsXG4gICAgICAgIHVybDogdXJsIHx8ICcnLFxuICAgICAgICBodG1sQ29udGVudDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm91dGVySFRNTFxuICAgIH07XG4gICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ1NBVkVfSU5URVJBQ1RJT05fREFUQScsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICB9LCAnKicpO1xufVxuLy8gTW9ua2V5IHBhdGNoIGFkZEV2ZW50TGlzdGVuZXJcbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIEFkZGluZyBldmVudCBsaXN0ZW5lciBmb3IgdHlwZTonLCB0eXBlKTtcbiAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJyAmJiBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCB3cmFwcGVkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tNb25rZXkgUGF0Y2hdIENsaWNrIGRldGVjdGVkIG9uOicsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHByb21pc2UgdG8gd2FpdCBmb3Igc2NyZWVuc2hvdCBjb21wbGV0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSAnU0NSRUVOU0hPVF9DT01QTEVURScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1NjcmVlbnNob3QgdGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBzY3JlZW5zaG90XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9LCAnKicpO1xuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlSW50ZXJhY3Rpb24oJ2NsaWNrJywgZXZlbnQudGFyZ2V0LCB0aW1lc3RhbXAsIGdlbmVyYXRlU2VsZWN0b3IoZXZlbnQudGFyZ2V0KSwgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJhY3Rpb25Db21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UxKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ0lOVEVSQUNUSU9OX0NPTVBMRVRFJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLnRpbWVzdGFtcCA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ0ludGVyYWN0aW9uIGZhaWxlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ludGVyYWN0aW9uIHRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNjcmVlbnNob3QgdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2NyZWVuc2hvdENvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBpbnRlcmFjdGlvbkNvbXBsZXRlO1xuICAgICAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIG9yaWdpbmFsIGxpc3RlbmVyIGFmdGVyIHNjcmVlbnNob3QgaXMgY2FwdHVyZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBvcmlnaW5hbCBsaXN0ZW5lciBldmVuIGlmIHNjcmVlbnNob3QgZmFpbHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudC5jYWxsKGxpc3RlbmVyLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciB3aXRoIHRoZSB3cmFwcGVkIGxpc3RlbmVyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0eXBlLCB3cmFwcGVkTGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgYWRkRXZlbnRMaXN0ZW5lciBmb3Igbm9uLWNsaWNrIGV2ZW50c1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxBZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpO1xuICAgIH1cbn07XG5jb25zb2xlLmxvZygnW01vbmtleSBQYXRjaF0gYWRkRXZlbnRMaXN0ZW5lciBzdWNjZXNzZnVsbHkgcGF0Y2hlZC4nKTtcbi8vIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBjbGlja3Mgb24gPGE+IHRhZ3Ncbi8vIGZ1bmN0aW9uIGhhbmRsZUFuY2hvckNsaWNrcygpIHtcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4vLyAgICAgICAgIC8vIEZpbmQgdGhlIGNsb3Nlc3QgPGE+IHRhZyBpbiBjYXNlIG9mIG5lc3RlZCBlbGVtZW50cyBpbnNpZGUgdGhlIDxhPlxuLy8gICAgICAgICBjb25zdCBhbmNob3IgPSB0YXJnZXQuY2xvc2VzdCgnYScpO1xuLy8gICAgICAgICBpZiAoYW5jaG9yICYmIGFuY2hvci50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdhJyAmJiBhbmNob3IuaHJlZikge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1tJbnRlcmNlcHRlZF0gQ2xpY2sgb24gPGE+IHRhZzonLCBhbmNob3IuaHJlZik7XG4vLyAgICAgICAgICAgICBpZiAoIWFuY2hvci5ocmVmLnN0YXJ0c1dpdGgoJ2phdmFzY3JpcHQ6JykpIHtcbi8vICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbi8vICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRIcmVmID0gYW5jaG9yLmhyZWY7XG4vLyAgICAgICAgICAgICAgICAgdHJ5IHtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8g55uR5ZCs5oiq5Zu+5a6M5oiQ55qE5raI5oGvXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcmVlbnNob3RDb21wbGV0ZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhLnR5cGUgPT09ICdTQ1JFRU5TSE9UX0NPTVBMRVRFJyAmJiBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS50aW1lc3RhbXAgPT09IHRpbWVzdGFtcCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zdWNjZXNzKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZvaWQgMCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV2ZW50LmRhdGEuZXJyb3IgfHwgJ1NjcmVlbnNob3QgZmFpbGVkJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOa3u+WKoOi2heaXtuWkhOeQhlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdTY3JlZW5zaG90IHRpbWVvdXQnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTsgLy8gM+enkui2heaXtlxuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8g5Y+R6YCB5oiq5Zu+6K+35rGCXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6ICdDQVBUVVJFX1NDUkVFTlNIT1QnLCB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9LCAnKicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyDnrYnlvoXmiKrlm77lrozmiJBcbi8vICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2NyZWVuc2hvdENvbXBsZXRlO1xuLy8gICAgICAgICAgICAgICAgICAgICAvLyDmiKrlm77noa7orqTlrozmiJDlkI7lho3ot7Povaxcbi8vICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmO1xuLy8gICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhcHR1cmluZyBzY3JlZW5zaG90OicsIGVycm9yKTtcbi8vICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRIcmVmO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH0sIHRydWUpOyAvLyBVc2UgY2FwdHVyZSBwaGFzZSB0byBpbnRlcmNlcHQgdGhlIGV2ZW50IGVhcmxpZXJcbi8vIH1cbi8vIC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSA8YT4gdGFnIGNsaWNrc1xuLy8gaGFuZGxlQW5jaG9yQ2xpY2tzKCk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2luamVjdGVkLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=