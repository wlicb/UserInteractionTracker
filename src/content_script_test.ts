export {};  // Makes this file a module
import { processElement } from './utils/element-processor';
// Define interfaces for Recipe and OrderDetail
interface Recipe {
    tag_name?: string;
    text_selector?: string;
    text_js?: string;
    add_text?: boolean;
    text_format?: string;
    name?: string;
    clickable?: boolean;
    click_selector?: string;
    keep_attr?: { [key: string]: string };
    override_attr?: { [key: string]: string };
    children?: Recipe[];
    insert_split_marker?: boolean;
    insert_split_marker_every?: number;
    direct_child?: boolean;
    empty_message?: string;
    [key: string]: any; // Allow additional properties
  }
  
  interface OrderDetail {
    name: string;
    price: number;
  }
  
  // Extend the Window interface to include custom properties
  declare global {
    interface Window {
      clickable_recipes?: { [key: string]: Recipe };
      input_recipes?: { [key: string]: Recipe };
    }
  }

let lastScrollTime = 0;  // Track last scroll timestamp
const SCROLL_THRESHOLD = 1500; // Minimum time in ms between screenshots for scroll actions










function generateHtmlSnapshotId() {
    const url = window.location.href;
    const timestamp = new Date().toISOString();
    return `html_${hashCode(url)}_${timestamp}`;
}
function hashCode(str:string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; 
    }
    console.log("Hash value before return:", hash);
    return hash.toString();
  }  

// Function to get clickable elements in the viewport


// Function to capture interactions
async function captureInteraction(eventType:string, target:any, timestamp:string,selector:string,clickableId:string,url:string) {
    try {
        // Generate new HTML snapshot ID
        const currentSnapshotId = generateHtmlSnapshotId();
        
        // Save HTML snapshot and wait for it to complete
        await new Promise((resolve, reject) => {
            chrome.storage.local.get(['htmlSnapshots'], (result) => {
                const htmlSnapshots = result.htmlSnapshots || {};
                htmlSnapshots[currentSnapshotId] = document.documentElement.outerHTML;
                chrome.storage.local.set({ htmlSnapshots }, () => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(void 0);
                    }
                });
            });
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
            selector: selector || '',
            clickableId: clickableId || '',
            url: url || '',
        };

        await chrome.runtime.sendMessage({ action: 'saveData', data });
    } catch (error) {
        console.error(`Error during ${eventType} event handling:`, error);
    }
}



// Function to capture screenshots with unique ID
async function captureScreenshot(timestamp:string) {
  try {
      // Generate a unique screenshot ID
      const screenshotId = `screenshot_${timestamp}`;
      // Capture the screenshot
      await chrome.runtime.sendMessage({ action: 'captureScreenshot', screenshotId });


  } catch (error) {
      console.error('Error capturing screenshot:', error);
  }
}

