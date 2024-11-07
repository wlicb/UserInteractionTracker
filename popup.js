console.log('popup.js')
document.getElementById("toggleCapture").addEventListener("click", () => {
    chrome.runtime.sendMessage({ toggleCapture: true });
  });
  