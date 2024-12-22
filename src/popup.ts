const downloadDataBtn = document.getElementById('downloadData') as HTMLButtonElement
const outputDiv = document.getElementById('output') as HTMLDivElement
const clearCacheBtn = document.getElementById('clearCache') as HTMLButtonElement
const userIdInput = document.getElementById('userId') as HTMLInputElement
import { data_collector_secret_id } from './config'

chrome.storage.local.get(['userId'], (result) => {
  if (result.userId) {
    userIdInput.value = result.userId || ''
  }
  if (result.userId.includes(data_collector_secret_id)) {
    downloadDataBtn.style.display = 'block' // Show button
  } else {
    downloadDataBtn.style.display = 'none' // Hide button
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
    outputDiv.textContent = `Error: ${(error as Error).message}`
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
    outputDiv.textContent = `Error: ${(error as Error).message}`
  }
})
