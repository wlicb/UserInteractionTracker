chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.sendMessage(activeInfo.tabId, { action: "tabActivated" });
});

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
                    console.log(storeInteractions)
                    console.log(interactions)
                    storeInteractions=storeInteractions.concat(interactions);
                    interactions.length=0
                    const fullData={
                      htmlSnapshots:htmlSnapshots,
                      interactions:storeInteractions
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
                        const base64Data = screenshot[0].split(',')[1]; // Remove the data URL prefix
                        const filename = `${folderName}/${screenshot[1].replace(/[:.]/g, "-")}.png`;

                        chrome.downloads.download({
                            url: 'data:image/png;base64,' + base64Data,
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
          return await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' });
      }
  } catch (error) {
      console.error('Error capturing screenshot:', error);
  }
  return null;
}