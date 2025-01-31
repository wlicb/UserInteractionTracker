import { data_collector_secret_id, interaction_status_url } from './config'
import { shouldExclude } from './utils/util'
const downloadDataBtn = document.getElementById('downloadData') as HTMLButtonElement
const otherInfoDiv = document.getElementById('other_info') as HTMLDivElement
const outputTotal = document.getElementById('output_total') as HTMLSpanElement
const outputToday = document.getElementById('output_today') as HTMLSpanElement
const clearCacheBtn = document.getElementById('clearCache') as HTMLButtonElement
const userIdInput = document.getElementById('userIdInput') as HTMLInputElement
const recordingDiv = document.getElementById('recording') as HTMLDivElement
const confirmUserIdBtn = document.getElementById('confirmUserId') as HTMLButtonElement
const editUserIdBtn = document.getElementById('editUserId') as HTMLButtonElement
const userIdDisplay = document.getElementById('userIdDisplay') as HTMLSpanElement
const userIdInstruction = document.getElementById('userIdInstruction') as HTMLSpanElement
// Add this function to fetch and display interaction stats
async function displayInteractionStats(userId: string) {
  try {
    const response = await fetch(`${interaction_status_url}?user_id=${userId}`, {
      method: 'GET'
    })

    const data = await response.json()

    if (response.ok) {
      outputTotal.innerHTML = `Total uploads: <b>${data.all_time}</b>`
      outputToday.innerHTML = `Today's uploads: <b>${data.on_date}</b>`
    } else {
      otherInfoDiv.textContent = `Failed to fetch stats: ${data.error || 'Unknown error'}`
    }
  } catch (error) {
    otherInfoDiv.textContent = `Error: ${(error as Error).message}`
  }
}
document.addEventListener('DOMContentLoaded', async () => {
  const updateRecordingStatus = () => {
    // chrome.runtime.sendMessage({ action: 'getRecordingStatus' }, (response) => {

    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      const url = tabs[0].url
      const isExcluded = await shouldExclude(url)
      console.log('isExcluded', isExcluded)
      // sendResponse({ recording: !isExcluded })

      if (!isExcluded) {
        recordingDiv.innerHTML =
          '<img src="icon.png" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;" /> Actions on this page will <b>be recorded</b>'
      } else {
        recordingDiv.innerHTML =
          '<img src="inactive_icon.png" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;" /> Actions on this page will <b>not be recorded</b>'
      }
    })
    // })
  }
  updateRecordingStatus()
  chrome.storage.local.get(['userId'], async (result) => {
    if (result.userId) {
      userIdInput.value = result.userId || ''
      userIdDisplay.textContent = `User ID: ${result.userId}`
      userIdInput.style.display = 'none'
      userIdDisplay.style.display = 'inline'
      confirmUserIdBtn.style.display = 'none'
      displayInteractionStats(result.userId)
      if (result.userId.includes(data_collector_secret_id)) {
        downloadDataBtn.style.display = 'block' // Show button
        clearCacheBtn.style.display = 'block'
      } else {
        downloadDataBtn.style.display = 'none' // Hide button
        clearCacheBtn.style.display = 'none'
      }
    } else {
      userIdInput.textContent = 'Please enter your user id'
    }
  })

  downloadDataBtn.addEventListener('click', () => {
    try {
      const userId = userIdInput.value.trim()
      chrome.runtime.sendMessage({ action: 'downloadData', userId }, (response) => {
        if (response.success) {
          otherInfoDiv.textContent = 'Data downloaded successfully.'
        } else {
          otherInfoDiv.textContent = `Failed to download data: ${response.error || 'Unknown error'}`
        }
      })
    } catch (error) {
      otherInfoDiv.textContent = `Error: ${(error as Error).message}`
    }
  })
  clearCacheBtn.addEventListener('click', () => {
    try {
      chrome.storage.local.remove([
        'user_interaction_tracker_last_timestamp',
        'lastuploadTimestamp'
      ])
      chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
        otherInfoDiv.textContent = 'Cache cleared successfully.'
      })
    } catch (error) {
      otherInfoDiv.textContent = `Error: ${(error as Error).message}`
    }
  })
  confirmUserIdBtn.addEventListener('click', () => {
    const userId = userIdInput.value.trim()
    chrome.storage.local.set({ userId: userId }, () => {
      otherInfoDiv.textContent = 'User ID saved.'
    })
    userIdInput.style.display = 'none'
    userIdDisplay.textContent = `User ID: ${userId}`
    userIdDisplay.style.display = 'inline'
    confirmUserIdBtn.style.display = 'none'
    editUserIdBtn.style.display = 'inline'
    userIdInstruction.style.display = 'none'
    if (userId.includes(data_collector_secret_id)) {
      downloadDataBtn.style.display = 'block' // Show button
      clearCacheBtn.style.display = 'block'
    } else {
      downloadDataBtn.style.display = 'none' // Hide button
      clearCacheBtn.style.display = 'none'
    }
    updateRecordingStatus()
  })
  editUserIdBtn.addEventListener('click', () => {
    userIdInput.style.display = 'block'
    userIdDisplay.style.display = 'none'
    confirmUserIdBtn.style.display = 'inline'
    editUserIdBtn.style.display = 'none'
    userIdInstruction.style.display = 'block'
  })
})
