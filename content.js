let htmlSnapshotId = null;
currenttimestamp=new Date().toISOString()
initializeHtmlSnapshot()
captureScreenshot(currenttimestamp)
function initializeHtmlSnapshot() {
  const currentSnapshotId = generateHtmlSnapshotId();
  chrome.storage.local.get(['htmlSnapshots'], (result) => {
    const htmlSnapshots = result.htmlSnapshots || {};

    if (!htmlSnapshots[currentSnapshotId] || htmlSnapshotId !== currentSnapshotId) {
      htmlSnapshotId = currentSnapshotId;
      htmlSnapshots[htmlSnapshotId] = document.documentElement.outerHTML;
      chrome.storage.local.set({ htmlSnapshots }, () => {
        console.log("HTML snapshot saved with new ID:", htmlSnapshotId);
      });
    }
  });
}
function generateHtmlSnapshotId() {
    const pageContent = document.body.innerHTML;
    return `html_${hashCode(pageContent)}`;
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

chrome.runtime.onMessage.addListener((message) => {
if (message.action === "tabActivated") {
    initializeHtmlSnapshot();
}
});
// let sessionId;
// function initializeSession() {
//     if (!sessionId) {
//         const sessionTimestamp = new Date().toISOString().replace(/[:.]/g, "-");
//         sessionId = `session_${sessionTimestamp}`;
//     }
//     return sessionId;
// }
// function getTabSessionId() {
//     return new Promise((resolve) => {
//         // 使用tab的URL作为key来存储sessionId
//         const tabKey = `tab_${window.location.href}`;
//         chrome.storage.local.get(tabKey, (result) => {
//             if (result[tabKey]) {
//                 resolve(result[tabKey]);
//             } else {
//                 const newSessionId = `session_${new Date().toISOString().replace(/[:.]/g, "-")}`;
//                 chrome.storage.local.set({ [tabKey]: newSessionId }, () => {
//                     resolve(newSessionId);
//                 });
//             }
//         });
//     });
// }

// // 使用async/await来获取sessionId
// async function initializeHtmlSnapshot() {
//     const sessionId = await getTabSessionId();
//     // 使用正确的sessionId更新HTML快照
//     chrome.storage.local.get({ [sessionId]: null }, (result) => {
//         if (result[sessionId]) {
//             result[sessionId].htmlSnapshot = document.documentElement.outerHTML;
//             chrome.storage.local.set({ [sessionId]: result[sessionId] });
//         }
//     });
// }




function storeInteraction(interaction) {
    chrome.storage.local.get(['interactions'], (result) => {
        const interactions = result.interactions || [];
        interactions.push({ htmlSnapshotId, ...interaction });
        chrome.storage.local.set({ interactions }, () => {
            console.log("Interaction recorded:", interaction);
        });
    });
}

document.addEventListener("click", (event) => {
    const target = event.target;
    const timestamp=new Date().toISOString()
    const interaction = {
        type: "click",
        target: target.outerHTML,
        timestamp: timestamp
    };
    storeInteraction(interaction);
    captureScreenshot(timestamp)
});

document.addEventListener("input", (event) => {
    const target = event.target;
    const timestamp=new Date().toISOString()
    const interaction = {
        type: "input",
        target: target.outerHTML,
        value: target.value,
        timestamp: timestamp
    };
    storeInteraction(interaction);
    captureScreenshot(timestamp)
});

let lastScrollTop = window.scrollY;
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const direction = scrollTop > lastScrollTop ? "down" : "up";
    const pixels = Math.abs(scrollTop - lastScrollTop);
    lastScrollTop = scrollTop;
    const timestamp=new Date().toISOString()
    const interaction = {
        type: "scroll",
        direction,
        pixels,
        timestamp: timestamp
    };
    storeInteraction(interaction);
    captureScreenshot(timestamp)
});

window.addEventListener('popstate', () => {
    const timestamp=new Date().toISOString()
    const interaction = {
        type: 'back',
        timestamp: timestamp
    };
    storeInteraction(interaction);
    captureScreenshot(timestamp)
});

function captureScreenshot(timestamp) {
    console.log('try capture here')
    chrome.runtime.sendMessage({ action: 'capture' }, (response) => {
        if (response && response.dataUrl) {
            const screenshot = {
                dataUrl: response.dataUrl,
                timestamp: timestamp
            };
            console.log(timestamp)
            console.log(response.dataUrl)
            chrome.storage.local.get({ screenshots: [] }, (result) => {
                const screenshots = result.screenshots || [];
                screenshots.push(screenshot);

                chrome.storage.local.set({ screenshots }, () => {
                    console.log("Screenshot captured and stored.");
                });
            });
        }
    });
}
