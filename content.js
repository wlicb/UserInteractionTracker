let lastScrollTime = 0;  // Track last scroll timestamp
const SCROLL_THRESHOLD = 1500; // Minimum time in ms between screenshots for scroll actions
let htmlSnapshotId = null;


// initializeHtmlSnapshot()
document.addEventListener('DOMContentLoaded',()=>{
    currenttimestamp=new Date()
    captureScreenshot(timestamp=currenttimestamp)
});


// async function initializeHtmlSnapshot() {
//   const currentSnapshotId = generateHtmlSnapshotId();
//   chrome.storage.local.get(['htmlSnapshots'], (result) => {
//     const htmlSnapshots = result.htmlSnapshots || {};

//     if (!htmlSnapshots[currentSnapshotId] || htmlSnapshotId !== currentSnapshotId) {
//       htmlSnapshotId = currentSnapshotId;
//       htmlSnapshots[htmlSnapshotId] = document.documentElement.outerHTML;
//       chrome.storage.local.set({ htmlSnapshots }, () => {
//         console.log("HTML snapshot saved with new ID:", htmlSnapshotId);
//       });
//     }
//   });
// }
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

chrome.runtime.onMessage.addListener((message) => {
if (message.action === "tabActivated") {
    initializeHtmlSnapshot();
}
});


// Function to get clickable elements in the viewport
function getClickableElementsInViewport() {
    const clickableElements = []; // Array to store clickable elements

    // Select all potential clickable elements
    const allElements = document.querySelectorAll('a, button, [onclick], input[type="button"], input[type="submit"]');

    // Check if each element is in the viewport
    allElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            clickableElements.push({
                tagName: element.tagName,
                className: element.className,
                id: element.id,
                innerText: element.innerText.trim(),
                outerHTML: element.outerHTML.trim(),
            });
        }
    });

    return clickableElements;
}

// Function to capture interactions
async function captureInteraction(eventType, target, timestamp) {
    try {
        // Generate new HTML snapshot ID and capture current HTML
        const currentSnapshotId = generateHtmlSnapshotId();
        
        // Save HTML snapshot
        chrome.storage.local.get(['htmlSnapshots'], (result) => {
            const htmlSnapshots = result.htmlSnapshots || {};
            htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML;
            chrome.storage.local.set({ htmlSnapshots });
        });

        // const clickableElements = getClickableElementsInViewport();
        const data = {
            eventType,
            timestamp: timestamp,
            target: target,
            targetOuterHTML: target.outerHTML,
            targetClass: target.className,
            targetId: target.id,
            targetText: target.innerText || target.value || '',
            htmlSnapshotId: currentSnapshotId,  // Use the new snapshot ID
            // clickableElements: clickableElements,
        };

        await chrome.runtime.sendMessage({ action: 'saveData', data });
    } catch (error) {
        console.error(`Error during ${eventType} event handling:`, error);
    }
}

// Capture scroll interactions
document.addEventListener('scroll', async (event) => {
    try {
        const currentTime = Date.now();
        if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
            lastScrollTime = currentTime;
            timestamp=new Date()
            // Only capture the screenshot after 3 seconds of inactivity
            await captureInteraction('scroll',event.target,timestamp);
            await captureScreenshot(timestamp);

        }
    } catch (error) {
        console.error('Error during scroll event handling:', error);
    }
});

// Capture input (typing) interactions
// document.addEventListener('input', async (event) => {
//     try {
//         timestamp=new Date()
//         await captureInteraction('input', event.target,timestamp);
//         await captureScreenshot(timestamp);
//     } catch (error) {
//         console.error('Error during input event handling:', error);
//     }
// });

document.addEventListener("blur", async (event) => {
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
        const target = event.target;
        timestamp=new Date()
        await captureScreenshot(timestamp);
        await captureInteraction("input", target, timestamp);
        
    }
});


// Capture click interactions
document.addEventListener('click', async (event) => {
    try {
        timestamp=new Date()
        await captureScreenshot(timestamp);
        await captureInteraction('click', event.target,timestamp);
        
    } catch (error) {
        console.error('Error during click event handling:', error);
    }
});

let lastUrl = location.href;
window.addEventListener("popstate", async () => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
        lastUrl = currentUrl; // Update URL to prevent duplicate back actions
        timestamp=new Date()
        await captureScreenshot(timestamp);
        await captureInteraction("back", document.body, timestamp);
    } else {
        console.log("Ignored duplicate back action.");
    }
});

// Function to capture screenshots with unique ID
async function captureScreenshot(timestamp) {
  try {
      // Generate a unique screenshot ID
      const screenshotId = `screenshot_${timestamp.toISOString()}`;
      // Capture the screenshot
      await chrome.runtime.sendMessage({ action: 'captureScreenshot', screenshotId });


  } catch (error) {
      console.error('Error capturing screenshot:', error);
  }
}
