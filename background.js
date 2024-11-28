let interactions = [];
const interactionsLimit = 10;
let screenshots = [];
const screenshotLimit = 10; // Maximum number of screenshots to store

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (async () => {
        try {
            if (message.action === 'saveData') {
                interactions.push(message.data);
                if (interactions.length > interactionsLimit) {
                  let result = await chrome.storage.local.get({interactions:[]});
                  result=result.interactions||[]
                  let storeInteractions = result.concat(interactions);
                  interactions.length=0
                  await chrome.storage.local.set({ interactions:storeInteractions });
                }
                sendResponse({ success: true });
            }

            // Capture screenshot on demand
            if (message.action === 'captureScreenshot') {
                  const screenshotDataUrl = await captureScreenshot();
                  if (screenshotDataUrl) {
                      screenshots.push([screenshotDataUrl,message.screenshotId]);
                      if (screenshots.length > screenshotLimit) {
                        let result= await chrome.storage.local.get({ screenshots: [] })
                        result=result.screenshots||[]
                        const storeScreenshots = result.concat(screenshots);
                        screenshots.length=0
                        await chrome.storage.local.set({ screenshots:storeScreenshots });
                      }
                      sendResponse({ success: true });
                  } else {
                      sendResponse({ success: false, message: 'Failed to capture screenshot' });
                    }
                }

            // Download data on user request
            if (message.action === 'downloadData') {
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Create a timestamp for the folder name
                const folderName = `DATA/SESSION_${timestamp}`;

                // Create a folder with the timestamp and download session info
                chrome.downloads.download({
                    url: 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Session data for timestamp: ${timestamp}`),
                    filename: `${folderName}/session_info.txt`,
                    saveAs: false
                }, async (downloadId) => {
                    // Save all interactions in a single JSON file
                    const snapshots= await chrome.storage.local.get({htmlSnapshots:[]});
                    let htmlSnapshots = snapshots.htmlSnapshots || {};
                    chrome.storage.local.remove('htmlSnapshots')
                    const result1 = await chrome.storage.local.get({interactions:[]});
                    chrome.storage.local.remove('interactions')
                    let storeInteractions = result1.interactions||[]
                    // console.log(storeInteractions)
                    // console.log(interactions)
                    storeInteractions=storeInteractions.concat(interactions);
                    interactions.length=0
                    const orderDetails = await chrome.storage.local.get({orderDetails:[]});
                    let storeorderDetails = orderDetails.orderDetails || [];
                    chrome.storage.local.remove('orderDetails')
                    const fullData={
                      htmlSnapshots:htmlSnapshots,
                      interactions:storeInteractions,
                      orderDetails:storeorderDetails,
                    }
                    const interactionsData = JSON.stringify(fullData, null, 2);
                    chrome.downloads.download({
                        url: 'data:text/json;charset=utf-8,' + encodeURIComponent(interactionsData),
                        filename: `${folderName}/interactions.json`,
                        saveAs: false
                    });
                        
                    const result2 = await chrome.storage.local.get({screenshots:[]});
                    chrome.storage.local.remove('screenshots')
                    let storeScreenshots= result2.screenshots||[]
                    storeScreenshots = storeScreenshots.concat(screenshots);
                    screenshots.length=0
                    
                    // Save all screenshots as individual PNG files
                    storeScreenshots.forEach((screenshot, index) => {
                        console.log(screenshot)
                        const filename = `${folderName}/${screenshot[1].replace(/[:.]/g, "-")}.jpg`;

                        chrome.downloads.download({
                            url: screenshot[0],
                            filename: filename,
                            saveAs: false
                        });
                    });

                    sendResponse({ success: true });
                    chrome.storage.local.clear();
                });
            }
        } catch (error) {
            chrome.storage.local.clear();
            console.error('Error handling message:', error);
            sendResponse({ success: false, error: error.message });
        }
    })();
    return true; // Keeps the message channel open for async responses
});

// Capture the screenshot in the current tab
async function captureScreenshot() {
  try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab) {
          return await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 50 });
      }
  } catch (error) {
      console.error('Error capturing screenshot:', error);
  }
  return null;
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
// chrome.tabs.onUpdated.addListener(async(tabId, changeInfo, tab) => {
//     if (changeInfo.url && changeInfo.url.includes('amazon.com') ) {
//         try {
//             const timestamp = new Date().toISOString();
//             const currentSnapshotId = `html_${hashCode(changeInfo.url)}_${timestamp}`;

//             // Execute script in the target tab to get HTML content
//             const [{ result: htmlContent }] = await chrome.scripting.executeScript({
//                 target: { tabId: tabId },
//                 func: () => document.documentElement.outerHTML
//             });

//             let result = await chrome.storage.local.get({htmlSnapshots:{}})
//             const htmlSnapshots = result.htmlSnapshots || {};
//             htmlSnapshots[currentSnapshotId] = htmlContent;
//             await chrome.storage.local.set({ htmlSnapshots });
//             const data = {
//                 eventType: "navigate",
//                 timestamp: timestamp,
//                 target_url: changeInfo.url,
//                 htmlSnapshotId: currentSnapshotId,
//             };
//             interactions.push(data);
//             if (interactions.length > interactionsLimit) {
//               let result = await chrome.storage.local.get({interactions:[]});
//               result=result.interactions||[]
//               let storeInteractions = result.concat(interactions);
//               interactions.length=0
//               await chrome.storage.local.set({ interactions:storeInteractions })};
            
//             // Wait for the page to complete loading
//             if (changeInfo.status !== 'complete') {
//                 await new Promise(resolve => {
//                     const listener = (tabId, info) => {
//                         if (info.status === 'complete') {
//                             chrome.tabs.onUpdated.removeListener(listener);
//                             resolve();
//                         }
//                     };
//                     chrome.tabs.onUpdated.addListener(listener);
//                 });
//             }
            
//             // await new Promise(resolve => setTimeout(resolve, 200));
//             const screenshotDataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 20 });
            
//             const screenshotId = `screenshot_${timestamp}`;
//             if (screenshotDataUrl) {
//                 screenshots.push([screenshotDataUrl, screenshotId]);
//                 if (screenshots.length > screenshotLimit) {
//                     let result = await chrome.storage.local.get({ screenshots: [] })
//                     result = result.screenshots || []
//                     const storeScreenshots = result.concat(screenshots);
//                     screenshots.length = 0
//                     await chrome.storage.local.set({ screenshots: storeScreenshots });
//                 }
//             }
//         } catch (error) {
//             console.error('Error in tab update handler:', error);
//         }
//     }
// });

// // listen to switches between activated tabs
// chrome.tabs.onActivated.addListener(async (activeInfo) => {
//     const tab = await chrome.tabs.get(activeInfo.tabId);
//     console.log(`Switched to tab ${activeInfo.tabId} with URL: ${tab.url}`);
//     if (tab.url && tab.url.includes('amazon.com')) {
//         try {
//             const timestamp = new Date().toISOString();
//             const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}`;

//             // Execute script in the target tab to get HTML content
//             const [{ result: htmlContent }] = await chrome.scripting.executeScript({
//                 target: { tabId: activeInfo.tabId },
//                 func: () => document.documentElement.outerHTML
//             });

//             let result = await chrome.storage.local.get({htmlSnapshots:{}})
//             const htmlSnapshots = result.htmlSnapshots || {};
//             htmlSnapshots[currentSnapshotId] = htmlContent;
//             await chrome.storage.local.set({ htmlSnapshots });

//             const data = {
//                 eventType: "navigate",
//                 timestamp: timestamp,
//                 target_url: tab.url,
//                 htmlSnapshotId: currentSnapshotId,
//             };
//             interactions.push(data);
//             if (interactions.length > interactionsLimit) {
//               let result = await chrome.storage.local.get({interactions:[]});
//               result=result.interactions||[]
//               let storeInteractions = result.concat(interactions);
//               interactions.length=0
//               await chrome.storage.local.set({ interactions:storeInteractions })};
            
//             // await new Promise(resolve => setTimeout(resolve, 200));
//             const screenshotDataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 50 });
            
//             const screenshotId = `screenshot_${timestamp}`;
//             if (screenshotDataUrl) {
//                 screenshots.push([screenshotDataUrl, screenshotId]);
//                 if (screenshots.length > screenshotLimit) {
//                     let result = await chrome.storage.local.get({ screenshots: [] })
//                     result = result.screenshots || []
//                     const storeScreenshots = result.concat(screenshots);
//                     screenshots.length = 0
//                     await chrome.storage.local.set({ screenshots: storeScreenshots });
//                 }
//             }
//         } catch (error) {
//             console.error('Error in tab activate handler:', error);
//         }
//     }
// });


async function selectRecipe(tabId, url) {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname;
    
    for (const recipe of recipes) {
      const matchMethod = recipe.match_method || "text";
      
      if (matchMethod === "text") {
        try {
          // Execute script in tab to check for matching element
          const [{result: hasMatch}] = await chrome.scripting.executeScript({
            target: { tabId },
            func: (selector, matchText) => {
              const element = document.querySelector(selector);
              return element && (!matchText || element.textContent.toLowerCase().includes(matchText.toLowerCase()));
            },
            args: [recipe.match, recipe.match_text || ""]
          });
          
          if (hasMatch) {
            return recipe;
          }
        } catch (error) {
          console.error("Error checking text match:", error);
        }
      } else if (matchMethod === "url" && recipe.match === path) {
        return recipe;
      }
    }
    
    throw new Error(`No matching recipe found for path: ${path}`);
  }


importScripts('recipe.js')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getRecipe') {
        selectRecipe(sender.tab.id, message.url)
            .then((recipe) => {
                sendResponse({ recipe: recipe });
            })
            .catch((error) => {
                sendResponse({ error: error.message });
            });
        return true; // Indicate that sendResponse will be called asynchronously
    }
});
