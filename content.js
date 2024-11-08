
const sessionTimestamp = new Date().toISOString().replace(/[:.]/g, "-");
const sessionId = `session_${sessionTimestamp}`;
console.log(sessionId)

function initializeSessionData() {
    chrome.storage.local.get({ [sessionId]: null }, (result) => {
        if (!result[sessionId]) {
            const sessionData = {
                htmlSnapshot: document.documentElement.outerHTML, 
                interactions: [], 
                sessionTimestamp: sessionTimestamp  
            };
            chrome.storage.local.set({ [sessionId]: sessionData }, () => {
                console.log("Initial HTML snapshot saved for session:", sessionId);
            });
        }
    });
}


initializeSessionData();


function storeInteraction(interaction) {
    chrome.storage.local.get({ [sessionId]: { interactions: [] } }, (result) => {
        const sessionData = result[sessionId];
        sessionData.interactions.push(interaction);

        chrome.storage.local.set({ [sessionId]: sessionData }, () => {
            console.log("Interaction saved to storage:", interaction);
        });
    });
}


document.addEventListener('click', (event) => {
    const target = event.target;
    const interaction = {
        type: 'click',
        target: target.outerHTML,
        timestamp: new Date().toISOString()
    };
    storeInteraction(interaction);
});


document.addEventListener('input', (event) => {
    const target = event.target;
    const interaction = {
        type: 'input',
        target: target.outerHTML,
        value: target.value,
        timestamp: new Date().toISOString()
    };
    storeInteraction(interaction);
});


let lastScrollTop = window.scrollY;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const direction = scrollTop > lastScrollTop ? 'down' : 'up';
    const pixels = Math.abs(scrollTop - lastScrollTop);
    lastScrollTop = scrollTop;
    timestamp = new Date().toISOString()
    const interaction = {
        type: 'scroll',
        direction,
        pixels,
        timestamp: timestamp
    };
    storeInteraction(interaction);
    captureScreenshot(timestamp)
});


window.addEventListener('popstate', () => {
    const interaction = {
        type: 'back',
        timestamp: new Date().toISOString()
    };
    storeInteraction(interaction);
});


captureScreenshot(sessionTimestamp);
window.addEventListener('scroll', captureScreenshot);

function captureScreenshot(timestamp) {
    console.log('try capture here')
    chrome.runtime.sendMessage({ action: 'capture' }, (response) => {
        if (response && response.dataUrl) {
            const screenshot = {
                sessionId: sessionId,
                dataUrl: response.dataUrl,
                timestamp: timestamp
            };

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
