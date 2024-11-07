let captureInterval = null;
let downloadInterval = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.toggleCapture) {
    if (captureInterval) {
      clearInterval(captureInterval);
      clearInterval(downloadInterval);
      captureInterval = null;
      downloadInterval = null;
      downloadScreenshots()
      console.log("Auto screenshot capture stopped.");
    } else {
      captureInterval = setInterval(captureScreenshot, 10000); // capture screen every 10000ms
      downloadInterval = setInterval(downloadScreenshots, 1 * 60 * 1000); // download every min
      console.log("Auto screenshot capture started.");
    }
  }
});

function captureScreenshot() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;

    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
      if (chrome.runtime.lastError || !dataUrl) return;

      // create screenshot
      const screenshot = {
        dataUrl,
        timestamp: new Date().toISOString().replace(/[:.]/g, "-")
      };

      // get current screenshot data in chrome storage
      chrome.storage.local.get({ screenshotData: [] }, (result) => {
        const screenshots = result.screenshotData || [];
        screenshots.push(screenshot);

        // update screenshot data in storage
        chrome.storage.local.set({ screenshotData: screenshots }, () => {
          console.log("Screenshot captured and saved temporarily in storage.");
        });
      });
    });
  });
}

function downloadScreenshots() {
  // get current screenshot data in chrome storage
  chrome.storage.local.get({ screenshotData: [] }, (result) => {
    const screenshots = result.screenshotData || [];

    if (screenshots.length === 0) {
      console.log("No screenshots to download.");
      return;
    }

    console.log(`Downloading ${screenshots.length} screenshots...`);

    // download screenshot to local
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

    // clear storage
    chrome.storage.local.set({ screenshotData: [] }, () => {
      console.log("All screenshots have been downloaded and storage is cleared.");
    });
  });
}
