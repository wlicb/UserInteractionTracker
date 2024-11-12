setInterval(downloadDataAndClearStorage, 1 * 10 * 1000);

function downloadDataAndClearStorage() {
  console.log('start download')
  chrome.storage.local.get(null, (result) => {
    const interactionData = result.interactions || [];
    const screenshots = result.screenshots || [];
    const htmlSnapshots = result.htmlSnapshots || {};

    console.log("start download screenshots")
    console.log(screenshots.length)
    if (screenshots.length > 0) {
      screenshots.forEach((screenshot, index) => {
        const filename = `screenshot_${screenshot.timestamp.replace(/[:.]/g, "-")}_${index + 1}.png`;
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
    const fullData = {
      htmlSnapshots: htmlSnapshots,
      interactions: interactionData
    };

    if (Object.keys(fullData).length > 0) {
      // convert sessionData to Json to store
      const sessionDataJson = JSON.stringify(fullData, null, 2);
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
            chrome.storage.local.remove('interactions')
            chrome.storage.local.remove('htmlSnapshots')
          }
        });
      };

      reader.readAsDataURL(sessionDataBlob);
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
        console.log('capture success')
        sendResponse({ success: true, dataUrl: dataUrl });
      }
    });
    return true;
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.sendMessage(activeInfo.tabId, { action: "tabActivated" });
});