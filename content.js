console.log('content.js')
const visibleItems = new Set();
const productItems = document.querySelectorAll('#search .s-main-slot .s-result-item');

// capture screen when web first loaded
captureScreenshot();

// monitor scroll and capture screen
window.addEventListener('scroll', () => {
  updateVisibleItemsCount();
  captureScreenshot();
});

// update visible item count
function updateVisibleItemsCount() {
  visibleItems.clear();

  productItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      visibleItems.add(item);
    }
  });

  console.log(`Currently visible products: ${visibleItems.size}`);
}

// make screenshot and store
function captureScreenshot() {
  chrome.runtime.sendMessage({ action: 'capture' }, (response) => {
    if (response && response.dataUrl) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const screenshot = {
        dataUrl: response.dataUrl,
        timestamp: timestamp
      };

      // get current screenshot data & store new screenshot
      chrome.storage.local.get({ screenshotData: [] }, (result) => {
        const screenshots = result.screenshotData;
        screenshots.push(screenshot);

        chrome.storage.local.set({ screenshotData: screenshots }, () => {
          console.log("Screenshot captured and saved temporarily in storage.");
        });
      });
    }
  });
}
