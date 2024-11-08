// download screenshot every * min
downloadScreenshots()
setInterval(downloadScreenshots, 1 * 60 * 1000);

function downloadScreenshots() {
  chrome.storage.local.get({ screenshotData: [] }, (result) => {
    const screenshots = result.screenshotData;

    if (screenshots.length === 0) {
      console.log("No screenshots to download.");
      return;
    }

    console.log(`Downloading ${screenshots.length} screenshots...`);

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

    // clear downloaded data
    chrome.storage.local.set({ screenshotData: [] }, () => {
      console.log("All screenshots have been downloaded and storage is cleared.");
    });
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
  