<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  data_collector_secret_id,
  interaction_status_url,
  rationale_status_url,
  purchase_status_url
} from './config'
import { shouldExclude } from './utils/util'
import { NButton, NInput, NDivider } from 'naive-ui'
// State management with refs
const count = ref(0)
const userId = ref('')
const showUserIdInput = ref(true)
const showEditButton = ref(false)
const recordingStatus = ref('')
const otherInfo = ref('')
const stats = ref({ total: 0, today: 0 })
const reasonStats = ref({ total: 0, week: 0 })
const purchaseStats = ref({ total: 0, week: 0 })
const showDownloadButtons = ref(false)

// Methods
const handleClick = () => {
  count.value++
}

const displayInteractionStats = async (userId: string) => {
  try {
    const response = await fetch(`${interaction_status_url}?user_id=${userId}`, {
      method: 'GET'
    })
    const data = await response.json()
    if (response.ok) {
      stats.value = {
        total: data.all_time,
        today: data.on_date
      }
    } else {
      otherInfo.value = `Failed to fetch stats: ${data.error || 'Unknown error'}`
    }
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
  try {
    const response = await fetch(`${rationale_status_url}?user_id=${userId}`, {
      method: 'GET'
    })
    const data = await response.json()
    if (response.ok) {
      reasonStats.value = {
        total: data.all_time,
        week: data.on_date
      }
    } else {
      otherInfo.value = `Failed to fetch stats: ${data.error || 'Unknown error'}`
    }
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
  try {
    const response = await fetch(`${purchase_status_url}?user_id=${userId}`, {
      method: 'GET'
    })
    const data = await response.json()
    if (response.ok) {
      purchaseStats.value = {
        total: data.all_time,
        week: data.on_date
      }
    } else {
      otherInfo.value = `Failed to fetch stats: ${data.error || 'Unknown error'}`
    }
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
}

const updateRecordingStatus = async () => {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    const url = tabs[0].url
    const isExcluded = await shouldExclude(url)

    recordingStatus.value = !isExcluded
      ? '<img src="icon.png" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;" /> Actions on this page will <b>be recorded</b>'
      : '<img src="inactive_icon.png" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;" /> Actions on this page will <b>not be recorded</b>'
  } catch (error) {
    console.error('Error updating recording status:', error)
  }
}

const handleConfirmUserId = () => {
  chrome.storage.local.set({ userId: userId.value }, () => {
    otherInfo.value = 'User ID saved.'
  })
  showUserIdInput.value = false
  showEditButton.value = true
  showDownloadButtons.value = userId.value.includes(data_collector_secret_id)
  updateRecordingStatus()
  displayInteractionStats(userId.value)
}

const handleEditUserId = () => {
  showUserIdInput.value = true
  showEditButton.value = false
}

const handleDownloadData = async () => {
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'downloadData',
      userId: userId.value
    })
    otherInfo.value = response.success
      ? 'Data downloaded successfully.'
      : `Failed to download data: ${response.error || 'Unknown error'}`
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
}

const handleClearCache = () => {
  try {
    chrome.storage.local.remove(['user_interaction_tracker_last_timestamp', 'lastuploadTimestamp'])
    chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
      otherInfo.value = 'Cache cleared successfully.'
    })
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
}

// Lifecycle hooks
onMounted(async () => {
  updateRecordingStatus()
  const result = await chrome.storage.local.get(['userId'])
  if (result.userId) {
    userId.value = result.userId
    showUserIdInput.value = false
    showEditButton.value = true
    showDownloadButtons.value = result.userId.includes(data_collector_secret_id)
    await displayInteractionStats(result.userId)
  }
})
</script>

<template>
  <div class="popup-container">
    <!-- <h1>Hello World</h1>
    {{ count }}
    <NButton @click="handleClick">Click me</NButton> -->

    <h3>Data Collector</h3>
    <div class="input-container">
      <div v-html="recordingStatus" class="recording-status"></div>
      <div v-if="showUserIdInput" class="user-id-label">User ID:</div>
      <input
        v-if="showUserIdInput"
        v-model="userId"
        type="text"
        placeholder="Enter UserID"
        class="user-id-input"
      />

      <div v-else class="user-id-container">
        <span class="user-id-display">User ID: {{ userId }}</span>
        <NButton @click="handleEditUserId" class="edit-button">Edit</NButton>
      </div>

      <NButton v-if="showUserIdInput" @click="handleConfirmUserId" class="confirm-button">
        Confirm
      </NButton>
    </div>
    <div v-if="showDownloadButtons" class="button-container">
      <NButton @click="handleDownloadData" class="action-button">Download</NButton>
      <NButton @click="handleClearCache" class="action-button">Clear Data</NButton>
    </div>
    <NDivider class="divider" />
    <div class="info-text">{{ otherInfo }}</div>

    <div class="output-container">
      <div class="output-item">
        Total reason uploads: <b>{{ reasonStats.total }}</b>
      </div>
      <div class="output-item">
        This week's reason: <b>{{ reasonStats.week }}</b>
      </div>
    </div>
    <div class="output-container">
      <div class="output-item">
        Total purchase recorded: <b>{{ purchaseStats.total }}</b>
      </div>
      <div class="output-item">
        This week's purchase: <b>{{ purchaseStats.week }}</b>
      </div>
    </div>
    <div class="output-container">
      <div class="output-item">
        Total action uploads: <b>{{ stats.total }}</b>
      </div>
      <div class="output-item">
        Today's action uploads: <b>{{ stats.today }}</b>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  width: 320px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-container {
  width: 100%;
}

.input-container {
  margin: 5px 0;
  width: 100%;
}

.recording-status {
  width: 100%;
  margin-bottom: 20px;
  border: none;
  background-color: transparent;
  color: #333;
  vertical-align: middle;

  &:empty {
    display: none;
  }
}

.user-id-label {
  font-size: 14px;
  color: #333;
  margin-bottom: 3px;
}

.user-id-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  font-size: 14px;
}

.user-id-container {
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.user-id-display {
  display: flex;
  font-size: 14px;
  align-items: center;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.confirm-button {
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background-color: #76b1ef;
  color: white;
  transition: background-color 0.3s;
}

.edit-button {
  margin-left: auto;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #97d3e7;

  &:hover {
    color: #78c2f4;
  }
}

.action-button {
  padding: 12px 40px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #97d3e7;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
}

.divider {
  border-color: #78c2f4;
  width: 100%;
  margin-top: 15px;
}

.info-text {
  max-height: 100px;
  overflow-y: auto;
  font-size: 12px;
  background-color: #eef8fb;
  margin: 5px 0;
  padding: 0 2px;
  border-radius: 1px;
  width: 100%;

  &:empty {
    display: none;
  }
}

.output-container {
  max-height: 100px;
  overflow-y: auto;
  font-size: 12px;
  background-color: transparent;
  // margin-top: 5px;
  border-radius: 3px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  color: #676565;

  &:empty {
    display: none;
  }
}

.output-item {
  margin: 0 0;
}

h3 {
  text-align: center;
  color: #78c2f4;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
