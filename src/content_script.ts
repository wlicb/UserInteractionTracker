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







document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOMContentLoaded')
    const url = window.location.href;
    try {
        const response = await new Promise<{ recipe?: any }>(resolve => {
            chrome.runtime.sendMessage({ 
                action: 'getRecipe', 
                url: url 
            }, resolve);
        });
        console.log('response')
        if (response && response.recipe) {
            const recipe = response.recipe;
            const rootElement = document.querySelector(recipe.selector);
            if (rootElement) {
                const newRoot = processElement(rootElement, recipe);
                console.log(newRoot.outerHTML)
            }
        }
    } catch (error) {
        console.error('Error initializing clickable elements:', error);
    }
    // try{
    //     const timestamp = new Date().toISOString();
    //     captureScreenshot(timestamp);
    //     captureInteraction('navigate', '',timestamp,'','',url);
    // }catch(error){
    //     console.error('Error capturing screenshot:', error);
    // }
});




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
function getClickableElementsInViewport() {
    const clickableElements:any[] = []; // Array to store clickable elements

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
                innerText: (element as HTMLElement).innerText.trim(),
                outerHTML: element.outerHTML.trim(),
            });
        }
    });

    return clickableElements;
}

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

// Capture scroll interactions
document.addEventListener('scroll', async (event) => {
    try {
        const currentTime = Date.now();
        if (currentTime - lastScrollTime >= SCROLL_THRESHOLD) {
            lastScrollTime = currentTime;
            const timestamp=new Date().toISOString();
            await captureInteraction('scroll',event.target,timestamp,'','','');
            await captureScreenshot(timestamp);

        }
    } catch (error) {
        console.error('Error during scroll event handling:', error);
    }
});
// const debouncedScrollHandler = debounce(async (event: Event) => {
//     try {
//         const timestamp = new Date().toISOString();
//         await captureInteraction('scroll', event.target, timestamp, '', '', '');
//         await captureScreenshot(timestamp);
//     } catch (error) {
//         console.error('Error during scroll event handling:', error);
//     }
// }, 200);

// document.addEventListener('scroll', debouncedScrollHandler);


document.addEventListener("blur", async (event) => {
    if (event.target && (event.target as HTMLElement).tagName === "INPUT" || (event.target as HTMLElement).tagName === "TEXTAREA") {
        const target = event.target;
        const timestamp=new Date().toISOString();
        await captureScreenshot(timestamp);
        await captureInteraction("input", target, timestamp,'','','');
        
    }
},true);


// Capture click interactions
function getUniqueSelector(element:any) {
    if (element.id) {
        return `#${element.id}`; 
    }
    if (element.className) {
        const className = element.className.trim().split(/\s+/).join('.');
        return `${element.tagName.toLowerCase()}.${className}`;
    }
    return element.tagName.toLowerCase(); 
}

function getFullSelector(element:any) {
    let path:string[] = [];
    while (element.parentElement) {
        path.unshift(getUniqueSelector(element));
        element = element.parentElement;
    }
    return path.join(' > '); 
}

document.addEventListener('click', (event) => {
    try {
        
        function findClickableParent(element: HTMLElement | null, depth: number = 0): HTMLElement | null {
            if (!element || depth>=2) return null;
            if (element.hasAttribute('data-clickable-id')) {
                return element;
            }
            return findClickableParent(element.parentElement,depth+1);
        }

        const clickableElement = findClickableParent(event.target as HTMLElement);
        const clickableId = clickableElement ? clickableElement.getAttribute('data-clickable-id') || '' : '';
        console.log('click')
        const timestamp=new Date().toISOString();
        console.log(timestamp)
        const selector=getFullSelector(event.target);
        console.log('srart screenshot')
        captureScreenshot(timestamp);
        console.log('end screenshot')
        captureInteraction('click', event.target,timestamp,selector,clickableId,'');
        console.log('end')

    } catch (error) {
        console.error('Error during click event handling:', error);
    }
});


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


document.addEventListener("DOMContentLoaded", () => {
    // get all "Place Your Order" buttons
    const placeOrderButtons = document.querySelectorAll('input[id="placeOrder"], input[id="turbo-checkout-pyo-button"]');

    if (placeOrderButtons.length === 0) {
        console.log("No Place Your Order buttons found!");
        return;
    }
    // get all product information, filter out interference items
    const items = document.querySelectorAll('.lineitem-title-text');
    const orderDetails: OrderDetail[] = [];

    items.forEach((item) => {
        // filter out interference items
        if (item.matches('.a-size-base.lineitem-title-text')) {
            console.log("Skipping interfering element:", (item as HTMLElement).innerText);
            return;
        }

        // get product name
        const productName = (item as HTMLElement).innerText.trim();

        // get product price
        const priceElement = item.closest('div')?.querySelector('.lineitem-price-text');
        const productPrice = priceElement && (priceElement as HTMLElement).innerText
            ? (priceElement as HTMLElement).innerText.trim().replace('$', '')
            : '0.00';

        orderDetails.push({
            name: productName,
            price: parseFloat(productPrice),
        });
    });
    // add listener to each button
    placeOrderButtons.forEach((button) => {
        button.addEventListener("click", async(event) => {
            console.log("Place Your Order button clicked!");
            let result = await chrome.storage.local.get({orderDetails:[]});
            result=result.orderDetails||[]
            let storeOrderDetails = result.concat(orderDetails);
            await chrome.storage.local.set({ orderDetails:storeOrderDetails });

    });
})});

chrome.runtime.onMessage.addListener((message, sender, sendResponse:(response?: any)=>void) => {
    if (message.action === 'getHTML') {
      const htmlContent = document.documentElement.outerHTML;  
      sendResponse({ html: htmlContent });
    }
    return true;
  });
  
// // Add window beforeunload event listener
// window.addEventListener('beforeunload', async (event) => {
//     try {
//         const timestamp = new Date().toISOString();
//         const url = window.location.href;
        
//         // Capture final state before navigation
//         await captureScreenshot(timestamp);
//         await captureInteraction(
//             'navigate_away', 
//             {
//                 outerHTML: '',
//                 className: '',
//                 id: '',
//                 innerText: '',
//                 value: ''
//             },
//             timestamp,
//             '',
//             '',
//             url
//         );
//     } catch (error) {
//         console.error('Error during beforeunload event handling:', error);
//     }
// });
  