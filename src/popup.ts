const downloadDataBtn = document.getElementById('downloadData') as HTMLButtonElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;
const clearCacheBtn = document.getElementById('clearCache') as HTMLButtonElement;
const userIdInput = document.getElementById('userId') as HTMLInputElement;

// 加载保存的用户ID
chrome.storage.local.get(['userId'], (result) => {
    if (result.userId) {
        userIdInput.value = result.userId;
    }
});

// 监听输入变化并保存
userIdInput.addEventListener('change', () => {
    const userId = userIdInput.value.trim();
    chrome.storage.local.set({ userId: userId }, () => {
        outputDiv.textContent = 'User ID saved.';
    });
});

downloadDataBtn.addEventListener('click', () => {
    try {
        const userId = userIdInput.value.trim();
        chrome.runtime.sendMessage({ action: 'downloadData', userId }, (response) => {
            if (response.success) {
                outputDiv.textContent = 'Data downloaded successfully.';
            } else {
                outputDiv.textContent = `Failed to download data: ${response.error || 'Unknown error'}`;
            }
        });
    } catch (error) {
        outputDiv.textContent = `Error: ${(error as Error).message}`;
    }
});
clearCacheBtn.addEventListener('click', () => {
    try {
        chrome.storage.local.remove('orderDetails');
        chrome.storage.local.remove('htmlSnapshots');
        chrome.storage.local.remove('interactions');
        chrome.storage.local.remove('screenshots');
        outputDiv.textContent = 'Cache cleared successfully.';
        }catch (error) {
        outputDiv.textContent = `Error: ${(error as Error).message}`;
    }
});
