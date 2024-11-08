setInterval(downloadDataAndClearStorage, 1 * 10 * 1000);
  
function downloadDataAndClearStorage() {
    console.log('start download')
    chrome.storage.local.get(null, (result) => {
      const sessionData = {};
      const screenshots = result.screenshots || [];
  
      for (const key in result) {
        if (key.startsWith("session_")) {
          sessionData[key] = result[key];
        }
      }
  
      if (Object.keys(sessionData).length > 0) {
        // convert sessionData to Json to store
        const sessionDataJson = JSON.stringify(sessionData, null, 2);
        const sessionDataBlob = new Blob([sessionDataJson], { type: 'application/json' });
        const reader = new FileReader();
  

        reader.onloadend = function () {
          const sessionDataUrl = reader.result;
          chrome.downloads.download({
            url: sessionDataUrl,
            filename: `session_data_${new Date().toISOString().replace(/[:.]/g, "-")}.json`,
            saveAs: false
          }, (downloadId) => {
            if (chrome.runtime.lastError) {
              console.error("Download error:", chrome.runtime.lastError.message);
            } else {
              console.log("Session data downloaded.");
              Object.keys(sessionData).forEach(key => chrome.storage.local.remove(key));
            }
          });
        };
  
        reader.readAsDataURL(sessionDataBlob);
      }
  
      if (screenshots.length > 0) {
        screenshots.forEach((screenshot, index) => {
          const filename = `screenshot_${screenshot.timestamp}_${index + 1}.png`;
          chrome.downloads.download({
            url: screenshot.dataUrl, 
            filename: filename,
            saveAs: false
          }, (downloadId) => {
            if (chrome.runtime.lastError) {
              console.error("Download error:", chrome.runtime.lastError.message);
            } else {
              console.log("Screenshot downloaded:", filename);
            }
          });
        });
  
        chrome.storage.local.set({ screenshots: [] }, () => {
          console.log("All screenshots have been downloaded and storage is cleared.");
        });
      }
    });
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'capture') {
      chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
        if (chrome.runtime.lastError || !dataUrl) {
          console.error("Capture error:", chrome.runtime.lastError.message);
          sendResponse({ success: false });
        } else {
          sendResponse({ success: true, dataUrl: dataUrl });
        }
      });
      return true; 
    }
  });
  