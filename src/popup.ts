const downloadDataBtn = document.getElementById('downloadData') as HTMLButtonElement;
const outputDiv = document.getElementById('output') as HTMLDivElement;
const clearCacheBtn = document.getElementById('clearCache') as HTMLButtonElement;
downloadDataBtn.addEventListener('click', () => {
    try {
        chrome.runtime.sendMessage({ action: 'downloadData' }, (response) => {
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
        chrome.runtime.sendMessage({ action: 'clearCache' }, (response) => {
            if (response.success) {
                outputDiv.textContent = 'Cache cleared successfully.';
            } else {
                outputDiv.textContent = `Failed to clear cache: ${response.error || 'Unknown error'}`;
            }
        });
    } catch (error) {
        outputDiv.textContent = `Error: ${(error as Error).message}`;
    }
});
