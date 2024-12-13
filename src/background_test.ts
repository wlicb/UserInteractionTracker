// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
chrome.webNavigation.onCommitted.addListener((details) => {
  if (details.frameId === 0) { // Only inject into the main frame
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["js/injected.js"],
      world: "MAIN" // Ensures the script is injected into the main world
    });
  }
}, { url: [{ urlMatches: ".*" }] });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { nav, refinement_option, recipes } from './recipe';
let upload_url = "http://userdatacollect.hailab.io/upload"
let interactions: any[] = [];
const interactionsLimit = 10;
let screenshots: [string, string][] = [];
const screenshotLimit = 10;
let actionSequenceId = 0;
let uploadTimer: NodeJS.Timer | null = null;
let userId: string = "";
// background.ts

interface TabHistory {
  backStack: string[];
  forwardStack: string[];
  currentUrl: string | null;
}

const tabNavigationHistory: {
  [tabId: number]: TabHistory;
} = {};

function analyzeNavigation(
  tabId: number,
  url: string
): 'new' | 'back' | 'forward' | 'reload' {
  if (!tabNavigationHistory[tabId]) {
    tabNavigationHistory[tabId] = {
      backStack: [],
      forwardStack: [],
      currentUrl: null
    };
  }

  const history = tabNavigationHistory[tabId];

  if (!history.currentUrl) {
    history.currentUrl = url;
    return 'new';
  }
  if (history.currentUrl === url) {
    return 'reload';
  }

  if (
    history.backStack.length > 0 &&
    history.backStack[history.backStack.length - 1] === url
  ) {
    history.forwardStack.push(history.currentUrl!);
    history.currentUrl = history.backStack.pop()!;
    return 'back';
  }

  if (
    history.forwardStack.length > 0 &&
    history.forwardStack[history.forwardStack.length - 1] === url
  ) {
    history.backStack.push(history.currentUrl!);
    history.currentUrl = history.forwardStack.pop()!;
    return 'forward';
  }

  history.backStack.push(history.currentUrl!);
  history.forwardStack = [];
  history.currentUrl = url;
  return 'new';
}



// Add new function to handle screenshot saving
async function saveScreenshot(screenshotDataUrl: string, screenshotId: string) {
  if (screenshotDataUrl) {
    screenshots.push([screenshotDataUrl, screenshotId]);
    if (screenshots.length > screenshotLimit) {
      let result = await chrome.storage.local.get({ screenshots: [] })
      result = result.screenshots || []
      const storeScreenshots = result.concat(screenshots);
      screenshots.length = 0
      await chrome.storage.local.set({ screenshots: storeScreenshots });
    }
    return true;
  }
  return false;
  
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    try {
      if (message.action === 'saveData') {
        console.log('saveData ', message.data.eventType)
        actionSequenceId++;
        message.data.actionSequenceId = actionSequenceId;
        interactions.push(message.data);
        if (interactions.length > interactionsLimit) {
          let result = await chrome.storage.local.get({ interactions: [] });
          result = result.interactions || []
          let storeInteractions = result.concat(interactions);
          interactions.length = 0
          await chrome.storage.local.set({ interactions: storeInteractions });
        }
        sendResponse({ success: true });
      }

      // Capture screenshot on demand
      if (message.action === 'captureScreenshot') {
        console.log('get screenshot request')
        const screenshotDataUrl = await captureScreenshot();
        if (screenshotDataUrl) {
          const success = await saveScreenshot(screenshotDataUrl, message.screenshotId);
          sendResponse({ success, message: success ? undefined : 'Failed to capture screenshot' });
        } else {
          sendResponse({ success: false, message: 'Failed to capture screenshot' });
        }
      }

      // Download data on user request
      if (message.action === 'downloadData') {
        try {
          console.log('downloadData')
          const success = await uploadDataToServer();
          sendResponse({ success });
        } catch (error) {
          console.error('Error handling download:', error);
          sendResponse({ success: false, error: (error as Error).message });
        }
      }

      if (message.action === 'clearMemoryCache') {
        interactions = [];
        screenshots = [];
        actionSequenceId = 0;
        sendResponse({ success: true });
      }
      if (message.action === 'getRecipe' && sender.tab?.id) {
        selectRecipe(sender.tab.id, message.url)
          .then((recipe) => {
            sendResponse({ recipe: recipe });
          })
          .catch((error) => {
            sendResponse({ error: error.message });
          });
        return true; // Indicate that sendResponse will be called asynchronously
      }

    } catch (error) {
      // chrome.storage.local.clear();
      console.error('Error handling message:', error);
      sendResponse({ success: false, error: (error as Error).message });
    }
  })();
  return true; // Keeps the message channel open for async responses
});

// Capture the screenshot in the current tab
async function captureScreenshot() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      return await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 25 });
    }
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  }
  return null;
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

// listen to switches between activated tabs
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  try {
    
    const tabId = activeInfo.tabId;
    const tab = await chrome.tabs.get(tabId);
    if (!tab) {
      console.error(`Failed to get tab with ID: ${tabId}`);
      return;
    }
    console.log(`Switched to tab ${tabId} with URL: ${tab.url}`);
    if (tab.url && tab.url.includes('amazon.com')) {

      const timestamp = new Date().toISOString();
      const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}`;
      chrome.tabs.sendMessage(tabId, { action: 'getHTML' }, async (response) => {
        const htmlContent = response?.html;
        let result = await chrome.storage.local.get({ htmlSnapshots: {} })
        const htmlSnapshots = result.htmlSnapshots || {};
        htmlSnapshots[currentSnapshotId] = htmlContent;
        await chrome.storage.local.set({ htmlSnapshots });
        actionSequenceId++;
        const data = {
          
          eventType: "tabActivate",
          timestamp: timestamp,
          target_url: tab.url,
          htmlSnapshotId: currentSnapshotId,
          actionSequenceId: actionSequenceId,
        };
        interactions.push(data);
        if (interactions.length > interactionsLimit) {
          let result = await chrome.storage.local.get({ interactions: [] });
          result = result.interactions || []
          let storeInteractions = result.concat(interactions);
          interactions.length = 0
          await chrome.storage.local.set({ interactions: storeInteractions })
        };
        const screenshotDataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { format: 'jpeg', quality: 25 });

        const screenshotId = `screenshot_${timestamp}`;
        await saveScreenshot(screenshotDataUrl, screenshotId);
      });
    }
  } catch (error) {
    console.error('Error in tab activate handler:', error);
  }

});


async function selectRecipe(tabId: number, url: string) {
  const parsedUrl = new URL(url);
  const path = parsedUrl.pathname;

  for (const recipe of recipes) {
    const matchMethod = recipe.match_method || "text";

    if (matchMethod === "text") {
      try {
        // Execute script in tab to check for matching element
        const [{ result: hasMatch }] = await chrome.scripting.executeScript({
          target: { tabId },
          func: (selector, matchText) => {
            const element = document.querySelector(selector);
            return element && (!matchText || (element.textContent?.toLowerCase().includes(matchText.toLowerCase()) ?? false));
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


chrome.webNavigation.onCommitted.addListener(async (details) => {
  if (details.frameId !== 0) return;
  console.log('webNavigation onCommitted event triggered:', details);
  if (details.url.includes('amazon.com')) {
    
    const navigationType = analyzeNavigation(details.tabId, details.url);
    console.log(`Navigation type: ${navigationType} for tab ${details.tabId} to ${details.url}`);
    
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      func: () => document.documentElement.outerHTML
    }, async (results) => {
      if (results && results[0] && results[0].result) {
        const pageHtml = results[0].result;
        const timestamp = new Date().toISOString();
        const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}`;

        let result = await chrome.storage.local.get({ htmlSnapshots: {} });
        const htmlSnapshots = result.htmlSnapshots || {};
        htmlSnapshots[currentSnapshotId] = pageHtml;
        await chrome.storage.local.set({ htmlSnapshots });
        // Add navigation data to interactions
        actionSequenceId++;
        const data = {
          
          eventType: "navigation",
          navigationType: navigationType,
          timestamp: timestamp,
          target_url: details.url,
          htmlSnapshotId: currentSnapshotId,
          actionSequenceId,
        };
        
        interactions.push(data);
        if (interactions.length > interactionsLimit) {
          let result = await chrome.storage.local.get({ interactions: [] });
          result = result.interactions || []
          let storeInteractions = result.concat(interactions);
          interactions.length = 0
          await chrome.storage.local.set({ interactions: storeInteractions });
        }
        // add screenshot
        const tab = await chrome.tabs.get(details.tabId);
        const screenshotDataUrl = await chrome.tabs.captureVisibleTab(tab.windowId, { 
          format: 'jpeg', 
          quality: 25 
        });
        
        const screenshotId = `screenshot_${timestamp}`;
        await saveScreenshot(screenshotDataUrl, screenshotId);

      }
    });
  }
});

// Add cleanup when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabNavigationHistory[tabId];
});

// Add this function to handle data upload
async function uploadDataToServer() {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const folderName = `DATA/SESSION_${timestamp}`;
    
    // Get userId from storage
    const userIdResult = await chrome.storage.local.get({ userId: "" });
    const currentUserId = userIdResult.userId;
    
    // Get all data from storage
    const snapshots = await chrome.storage.local.get({ htmlSnapshots: [] });
    const interact = await chrome.storage.local.get({ interactions: [] });
    const orderDetails = await chrome.storage.local.get({ orderDetails: [] });
    const screen = await chrome.storage.local.get({ screenshots: [] });
    
    let htmlSnapshots = snapshots.htmlSnapshots || {};
    let storeInteractions = interact.interactions || [];
    let storeorderDetails = orderDetails.orderDetails || [];
    let storeScreenshots = screen.screenshots || [];
    
    // Combine with in-memory data
    storeInteractions = storeInteractions.concat(interactions);
    storeScreenshots = storeScreenshots.concat(screenshots);
    
    // Prepare the full data object
    const fullData = {
      htmlSnapshots,
      interactions: storeInteractions,
      orderDetails: storeorderDetails,
    };


    // Upload session info
    const sessionInfo = new Blob(
      [`Session data for timestamp: ${timestamp}, user id: ${currentUserId} \n order details: \n ${JSON.stringify(storeorderDetails)}`], 
      { type: 'text/plain' }
    );
    const sessionFormData = new FormData();
    sessionFormData.append('file', sessionInfo, `${folderName}/session_info.txt`);
    console.log('uploading session info')
    await fetch(upload_url, {
      method: 'POST',
      body: sessionFormData
    });

    // Upload interactions JSON
    const interactionsBlob = new Blob(
      [JSON.stringify(fullData, null, 2)], 
      { type: 'application/json' }
    );
    const jsonFormData = new FormData();
    console.log('uploading interactions')
    jsonFormData.append('file', interactionsBlob, `${folderName}/interactions.json`);
    await fetch(upload_url, {
      method: 'POST',
      body: jsonFormData
    });

    // Upload screenshots
    for (const [screenshotData, screenshotId] of storeScreenshots) {
      const response = await fetch(screenshotData);
      const blob = await response.blob();
      const formData = new FormData();
      formData.append('file', blob, `${folderName}/${screenshotId.replace(/[:.]/g, "-")}.jpg`);
      console.log('uploading screenshots')
      await fetch(upload_url, {
        method: 'POST',
        body: formData
      });
    }

    // Clear cache after successful upload
    chrome.storage.local.remove(['htmlSnapshots', 'interactions', 'orderDetails', 'screenshots']);
    interactions.length = 0;
    screenshots.length = 0;
    
    return true;
  } catch (error) {
    console.error('Error uploading data:', error);
    return false;
  }
}

// Start the periodic upload timer
function startPeriodicUpload() {
  if (!uploadTimer) {
    uploadTimer = setInterval(uploadDataToServer, 60000); // 60 seconds
  }
}

// Stop the periodic upload timer
function stopPeriodicUpload() {
  if (uploadTimer) {
    clearInterval(uploadTimer);
    uploadTimer = null;
  }
}

// startPeriodicUpload();
