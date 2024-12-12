/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
const downloadDataBtn = document.getElementById('downloadData');
const outputDiv = document.getElementById('output');
const clearCacheBtn = document.getElementById('clearCache');
const userIdInput = document.getElementById('userId');
chrome.storage.local.get(['userId'], (result) => {
    if (result.userId) {
        userIdInput.value = result.userId;
    }
});
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
            }
            else {
                outputDiv.textContent = `Failed to download data: ${response.error || 'Unknown error'}`;
            }
        });
    }
    catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});
clearCacheBtn.addEventListener('click', () => {
    try {
        chrome.storage.local.remove('htmlSnapshots');
        chrome.storage.local.remove('orderDetails');
        chrome.storage.local.remove('interactions');
        chrome.storage.local.remove('screenshots');
        chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
            outputDiv.textContent = 'Cache cleared successfully.';
        });
    }
    catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0Usa0NBQWtDO0FBQ3RHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNEJBQTRCO0FBQ2pFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL3NyYy9wb3B1cC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkb3dubG9hZERhdGFCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bmxvYWREYXRhJyk7XG5jb25zdCBvdXRwdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jyk7XG5jb25zdCBjbGVhckNhY2hlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQ2FjaGUnKTtcbmNvbnN0IHVzZXJJZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJJZCcpO1xuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsndXNlcklkJ10sIChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0LnVzZXJJZCkge1xuICAgICAgICB1c2VySWRJbnB1dC52YWx1ZSA9IHJlc3VsdC51c2VySWQ7XG4gICAgfVxufSk7XG51c2VySWRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklkID0gdXNlcklkSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHVzZXJJZDogdXNlcklkIH0sICgpID0+IHtcbiAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gJ1VzZXIgSUQgc2F2ZWQuJztcbiAgICB9KTtcbn0pO1xuZG93bmxvYWREYXRhQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJJZElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdkb3dubG9hZERhdGEnLCB1c2VySWQgfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9ICdEYXRhIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5Lic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRmFpbGVkIHRvIGRvd25sb2FkIGRhdGE6ICR7cmVzcG9uc2UuZXJyb3IgfHwgJ1Vua25vd24gZXJyb3InfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG59KTtcbmNsZWFyQ2FjaGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKCdodG1sU25hcHNob3RzJyk7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgnb3JkZXJEZXRhaWxzJyk7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgnaW50ZXJhY3Rpb25zJyk7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZSgnc2NyZWVuc2hvdHMnKTtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246ICdjbGVhck1lbW9yeUNhY2hlJyB9LCAoKSA9PiB7XG4gICAgICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnQ2FjaGUgY2xlYXJlZCBzdWNjZXNzZnVsbHkuJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9