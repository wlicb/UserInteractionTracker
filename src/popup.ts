import { data_collector_secret_id, interaction_status_url } from './config'
import { check_user_id } from './utils/util'
const downloadDataBtn = document.getElementById('downloadData') as HTMLButtonElement
const outputDiv = document.getElementById('output') as HTMLDivElement
const clearCacheBtn = document.getElementById('clearCache') as HTMLButtonElement
const userIdInput = document.getElementById('userId') as HTMLInputElement
const recordingDiv = document.getElementById('recording') as HTMLDivElement
const user_id_valid_div = document.getElementById('user_id_valid') as HTMLDivElement
// Add this function to fetch and display interaction stats
async function displayInteractionStats(userId: string) {
  try {
    const response = await fetch(`${interaction_status_url}?user_id=${userId}`, {
      method: 'GET'
    })

    const data = await response.json()

    if (response.ok) {
      outputDiv.textContent = `Total uploads: ${data.all_time}\nToday's uploads: ${data.on_date}`
    } else {
      outputDiv.textContent = `Failed to fetch stats: ${data.error || 'Unknown error'}`
    }
  } catch (error) {
    outputDiv.textContent = `Error: ${(error as Error).message}`
  }
}
document.addEventListener('DOMContentLoaded', async () => {
  const updateRecordingStatus = () => {
    chrome.runtime.sendMessage({ action: 'getRecordingStatus' }, (response) => {
      if (response.recording) {
        recordingDiv.textContent = 'Actions on this page will be recorded'
      } else {
        recordingDiv.textContent = 'Actions on this page will not be recorded'
      }
    })
  }
  updateRecordingStatus()
  const check_user_id_valid = async (user_id: string) => {
    const user_id_valid = await check_user_id(user_id)

    if (user_id_valid !== 'success') {
      user_id_valid_div.textContent = 'User ID is invalid, please check your user ID'
    } else {
      user_id_valid_div.textContent = ''
    }
  }
  chrome.storage.local.get(['userId'], async (result) => {
    if (result.userId) {
      userIdInput.value = result.userId || ''
      displayInteractionStats(result.userId)
      if (result.userId.includes(data_collector_secret_id)) {
        downloadDataBtn.style.display = 'block' // Show button
      } else {
        downloadDataBtn.style.display = 'none' // Hide button
      }
      check_user_id_valid(result.userId)
    } else {
      user_id_valid_div.textContent = 'Please enter your user id'
    }
  })

  userIdInput.addEventListener('change', () => {
    const userId = userIdInput.value.trim()
    chrome.storage.local.set({ userId: userId }, () => {
      outputDiv.textContent = 'User ID saved.'
    })
    updateRecordingStatus()
    check_user_id_valid(userId)
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
      chrome.storage.local.remove([
        'htmlSnapshots',
        'orderDetails',
        'screenshots',
        'reasonsAnnotation',
        'interactions',
        'user_interaction_tracker_last_timestamp',
        'seen_htmlSnapshots',
        'seen_interactions',
        'seen_orderDetails',
        'seen_screenshots',
        'seen_reasonsAnnotation'
      ])
      chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
        outputDiv.textContent = 'Cache cleared successfully.'
      })
    } catch (error) {
      outputDiv.textContent = `Error: ${(error as Error).message}`
    }
  })
})
