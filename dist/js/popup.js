/******/ ;(() => {
  // webpackBootstrap
  /*!**********************!*\
  !*** ./src/popup.ts ***!
  \**********************/
  const downloadDataBtn = document.getElementById('downloadData')
  const outputDiv = document.getElementById('output')
  const clearCacheBtn = document.getElementById('clearCache')
  const userIdInput = document.getElementById('userId')
  chrome.storage.local.get(['userId'], (result) => {
    if (result.userId) {
      userIdInput.value = result.userId
    }
  })
  userIdInput.addEventListener('change', () => {
    const userId = userIdInput.value.trim()
    chrome.storage.local.set({ userId: userId }, () => {
      outputDiv.textContent = 'User ID saved.'
    })
  })
  downloadDataBtn.addEventListener('click', () => {
    try {
      const userId = userIdInput.value.trim()
      chrome.runtime.sendMessage({ action: 'downloadData', userId }, (response) => {
        if (response.success) {
          outputDiv.textContent = 'Data downloaded successfully.'
        } else {
          outputDiv.textContent = `Failed to download data: ${response.error || 'Unknown error'}`
        }
      })
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`
    }
  })
  clearCacheBtn.addEventListener('click', () => {
    try {
      chrome.storage.local.remove('htmlSnapshots')
      chrome.storage.local.remove('orderDetails')
      chrome.storage.local.remove('interactions')
      chrome.storage.local.remove('screenshots')
      chrome.storage.local.remove('reasonsAnnotation')
      chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
        outputDiv.textContent = 'Cache cleared successfully.'
      })
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`
    }
  })

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0Usa0NBQWtDO0FBQ3RHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24tdHlwZXNjcmlwdC1zdGFydGVyLy4vc3JjL3BvcHVwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvd25sb2FkRGF0YUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3dubG9hZERhdGEnKTtcbmNvbnN0IG91dHB1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKTtcbmNvbnN0IGNsZWFyQ2FjaGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXJDYWNoZScpO1xuY29uc3QgdXNlcklkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcklkJyk7XG5jaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWyd1c2VySWQnXSwgKHJlc3VsdCkgPT4ge1xuICAgIGlmIChyZXN1bHQudXNlcklkKSB7XG4gICAgICAgIHVzZXJJZElucHV0LnZhbHVlID0gcmVzdWx0LnVzZXJJZDtcbiAgICB9XG59KTtcbnVzZXJJZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjb25zdCB1c2VySWQgPSB1c2VySWRJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdXNlcklkOiB1c2VySWQgfSwgKCkgPT4ge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSAnVXNlciBJRCBzYXZlZC4nO1xuICAgIH0pO1xufSk7XG5kb3dubG9hZERhdGFCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlcklkID0gdXNlcklkSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogJ2Rvd25sb2FkRGF0YScsIHVzZXJJZCB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gJ0RhdGEgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dHB1dERpdi50ZXh0Q29udGVudCA9IGBGYWlsZWQgdG8gZG93bmxvYWQgZGF0YTogJHtyZXNwb25zZS5lcnJvciB8fCAnVW5rbm93biBlcnJvcid9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBvdXRwdXREaXYudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cbn0pO1xuY2xlYXJDYWNoZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoJ2h0bWxTbmFwc2hvdHMnKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKCdvcmRlckRldGFpbHMnKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKCdpbnRlcmFjdGlvbnMnKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKCdzY3JlZW5zaG90cycpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoJ3JlYXNvbnNBbm5vdGF0aW9uJyk7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgYWN0aW9uOiAnY2xlYXJNZW1vcnlDYWNoZScgfSwgKCkgPT4ge1xuICAgICAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gJ0NhY2hlIGNsZWFyZWQgc3VjY2Vzc2Z1bGx5Lic7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb3V0cHV0RGl2LnRleHRDb250ZW50ID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
