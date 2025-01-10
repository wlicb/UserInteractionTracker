// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { v4 as uuidv4 } from 'uuid'
import { nav, refinement_option, recipes } from './recipe_new'
import JSZip from 'jszip'
import { update_icon } from './utils/util'
import { shouldExclude } from './utils/util'
import axios from 'axios'

let interactions: any[] = []
let screenshots: [string, string][] = []
let reasonsAnnotation: any[] = []
let actionSequenceId = 0
let uploadTimer: NodeJS.Timer | null | false = null
let userId: string = ''

let lastTimestamp: string | null = null
let lastuploadTimestamp: string | null = null
let lastGeneratePresignedPostResponse: {
  url: string
  fields: { key: string; AWSAccessKeyId: string; policy: string; signature: string }
  timestamp: number
} | null = null

import {
  popup_probability,
  folder_name,
  zip,
  base_url,
  data_collector_secret_id,
  filter_url
} from './config'

const upload_url = `${base_url}/upload`
const interactions_url = `${base_url}/interactions`
const generate_presigned_post_url = `${base_url}/generate_presigned_post`

interface TabHistory {
  backStack: string[]
  forwardStack: string[]
  currentUrl: string | null
}

const tabNavigationHistory: {
  [tabId: number]: TabHistory
} = {}

import { openDB } from 'idb'
const db = await openDB('userInteractions', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('interactions')) {
      const interactionsStore = db.createObjectStore('interactions', {
        keyPath: 'id',
        autoIncrement: true
      })
      interactionsStore.createIndex('timestamp', 'timestamp', { unique: false })
      interactionsStore.createIndex('uuid', 'uuid', { unique: false })
      console.log('Database interactions initialized')
    }
    if (!db.objectStoreNames.contains('screenshots')) {
      const screenshotsStore = db.createObjectStore('screenshots', {
        keyPath: 'id',
        autoIncrement: true
      })
      screenshotsStore.createIndex('timestamp', 'timestamp', { unique: false })
      screenshotsStore.createIndex('uuid', 'uuid', { unique: false })
      console.log('Database screenshots initialized')
    }
    if (!db.objectStoreNames.contains('reasonsAnnotation')) {
      const reasonsAnnotationStore = db.createObjectStore('reasonsAnnotation', {
        keyPath: 'id',
        autoIncrement: true
      })
      reasonsAnnotationStore.createIndex('timestamp', 'timestamp', { unique: false })
      reasonsAnnotationStore.createIndex('uuid', 'uuid', { unique: false })
      console.log('Database reasonsAnnotation initialized')
    }
    if (!db.objectStoreNames.contains('htmlSnapshots')) {
      const htmlSnapshotsStore = db.createObjectStore('htmlSnapshots', {
        keyPath: 'id',
        autoIncrement: true
      })
      htmlSnapshotsStore.createIndex('timestamp', 'timestamp', { unique: false })
      htmlSnapshotsStore.createIndex('uuid', 'uuid', { unique: false })
      console.log('Database htmlSnapshots initialized')
    }
    if (!db.objectStoreNames.contains('order')) {
      const orderStore = db.createObjectStore('order', { keyPath: 'id', autoIncrement: true })
      orderStore.createIndex('timestamp', 'timestamp', { unique: false })
      // orderStore.createIndex('uuid', 'uuid', { unique: false });
      console.log('Database order initialized')
    }
  }
})

function analyzeNavigation(tabId: number, url: string): 'new' | 'back' | 'forward' | 'reload' {
  if (!tabNavigationHistory[tabId]) {
    tabNavigationHistory[tabId] = {
      backStack: [],
      forwardStack: [],
      currentUrl: null
    }
  }

  const history = tabNavigationHistory[tabId]

  if (!history.currentUrl) {
    history.currentUrl = url
    return 'new'
  }
  if (history.currentUrl === url) {
    return 'reload'
  }

  if (history.backStack.length > 0 && history.backStack[history.backStack.length - 1] === url) {
    history.forwardStack.push(history.currentUrl!)
    history.currentUrl = history.backStack.pop()!
    return 'back'
  }

  if (
    history.forwardStack.length > 0 &&
    history.forwardStack[history.forwardStack.length - 1] === url
  ) {
    history.backStack.push(history.currentUrl!)
    history.currentUrl = history.forwardStack.pop()!
    return 'forward'
  }

  history.backStack.push(history.currentUrl!)
  history.forwardStack = []
  history.currentUrl = url
  return 'new'
}

// Replace the simple question with a more detailed one based on event type
function getCustomQuestion(eventType: string, data: any): string {
  switch (eventType) {
    case 'click_a':
    case 'click_b':
    case 'click_c':
      // Check if it's a specific type of click
      if (data.target.innerText === 'Set Up Now') {
        return "Why did you choose 'Set Up Now' instead of buy once, and why do you like this particular product?"
      } else if (data.target.id === 'buy-now-button') {
        return 'Why did you choose to buy this product immediately, and what convinced you to skip further exploration of other options? Why do you like this particular product?'
      } else if (data.target.className?.includes('sc-product-link')) {
        return 'What made you click on this product, and what specific aspects attracted your attention compared to other search results?'
      } else if (data.target.id === 'add-to-cart-button') {
        return 'Why did you decide to add this item to your cart, and are you planning to buy it now or later? What convinced you that this item was the right choice for your needs?'
      } else {
        return 'What was your reason for clicking on this element?'
      }
    case 'scroll':
      return 'What are you doing while scrolling—are you browsing search results, looking at reviews, or something else, and what are you hoping to find?'
    case 'input':
      return 'What are you searching for, and how did you decide on the search terms you used? Are you looking for a specific product, brand, or feature?'
    case 'navigation':
      if (data.navigationType === 'back') {
        return 'Why did you decide to go back to the previous page, and what were you hoping to revisit or reconsider?'
      } else if (data.navigationType === 'forward') {
        return 'Why did you decide to return to this page after previously navigating away, and what new or unresolved information are you looking for now?'
      }
      return `What is the reason for this ${data.navigationType} navigation?`
    case 'tabActivate':
      return `Why did you switch to this tab? Do you have specific task or information in mind?`
    default:
      return `What is the reason for the ${eventType} action?`
  }
}

// Add new function to handle screenshot saving
async function saveScreenshot_idb(screenshotDataUrl: string, timestamp: string, uuid: string) {
  if (screenshotDataUrl) {
    const screenshotId = `screenshot_${timestamp}_${uuid}`
    const screenshotData = {
      screenshotId: screenshotId,
      dataUrl: screenshotDataUrl,
      timestamp: timestamp,
      uuid: uuid
    }

    await db.add('screenshots', screenshotData)

    return true
  }
  return false
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  ;(async () => {
    if (message.action === 'saveData') {
      try {
        actionSequenceId++
        const currentactionSequenceId = actionSequenceId
        console.log(currentactionSequenceId)
        const uuid = message.data.uuid

        const htmldata = {
          htmlSnapshotId: message.data.htmlSnapshotId,
          htmlContent: message.data.htmlContent,
          simplifiedHTML: message.data.simplifiedHTML,
          timestamp: message.data.timestamp,
          uuid: uuid
        }

        delete message.data.htmlContent
        delete message.data.simplifiedHTML

        const saveData = async () => {
          console.log('saveData ', message.data.eventType)
          await db.add('interactions', message.data)
        }
        await Promise.all([
          saveData(),
          saveHTML(
            htmldata.htmlContent,
            htmldata.simplifiedHTML,
            htmldata.htmlSnapshotId,
            htmldata.timestamp,
            htmldata.uuid
          ),
          sendPopup(
            sender.tab?.id,
            message.data.timestamp,
            message.data.eventType,
            message.data,
            uuid
          )
        ])
        sendResponse({ success: true })
      } catch (error) {
        console.error('Error in saveData:', error)
        sendResponse({ success: false, error: (error as Error).message })
      }
      return true // Keep message channel open for async response
    }
    if (message.action === 'saveOrder') {
      try {
        console.log('saveOrder', message.data)
        if (typeof message.data === 'object') {
          await db.add('order', message.data)
        } else if (Array.isArray(message.data)) {
          if (message.data.length > 0) {
            const tx = db.transaction('order', 'readwrite')
            const store = tx.objectStore('order')
            await Promise.all([...message.data.map((item) => store.add(item)), tx.done])
          } else {
            console.error('Invalid data format for saveOrder:', message.data)
            sendResponse({ success: false, error: 'Invalid data format for saveOrder' })
          }
        }
        sendResponse({ success: true })
      } catch (error) {
        console.error('Error in saveOrder:', error)
        sendResponse({ success: false, error: (error as Error).message })
      }
      return true
    }
    // Capture screenshot on demand
    if (message.action === 'captureScreenshot') {
      try {
        console.log('get screenshot request')
        const start_time = new Date().getTime()
        const screenshotDataUrl = await captureScreenshot()
        console.log('capture screenshot time: ', new Date().getTime() - start_time)
        if (screenshotDataUrl) {
          const success = await saveScreenshot_idb(
            screenshotDataUrl,
            message.timestamp,
            message.uuid
          )
          console.log('save screenshot success', success)
          console.log('time: ', new Date().getTime() - start_time)
          sendResponse({
            success,
            message: success ? undefined : 'Failed to capture screenshot'
          })
        } else {
          sendResponse({ success: false, message: 'Failed to capture screenshot' })
        }
      } catch (error) {
        console.error('Error in captureScreenshot:', error)
        sendResponse({ success: false, message: 'Failed to capture screenshot' })
      }
      return true
    }

    // Download data on user request
    if (message.action === 'downloadData') {
      try {
        console.log('downloadData')
        const success = await downloadDataLocally()
        sendResponse({ success })
      } catch (error) {
        console.error('Error handling download:', error)
        sendResponse({ success: false, error: (error as Error).message })
      }
      return true
    }

    if (message.action === 'clearMemoryCache') {
      try {
        // Clear IndexedDB data
        const tx = db.transaction(
          ['interactions', 'htmlSnapshots', 'order', 'screenshots', 'reasonsAnnotation'],
          'readwrite'
        )

        const clearPromises = []

        clearPromises.push(tx.objectStore('interactions').clear())
        clearPromises.push(tx.objectStore('htmlSnapshots').clear())
        clearPromises.push(tx.objectStore('order').clear())
        clearPromises.push(tx.objectStore('screenshots').clear())
        clearPromises.push(tx.objectStore('reasonsAnnotation').clear())
        clearPromises.push(tx.done)
        await Promise.all(clearPromises)

        sendResponse({ success: true })
      } catch (error) {
        console.error('Error handling clearMemoryCache:', error)
        sendResponse({ success: false, error: (error as Error).message })
      }
      return true
    }
  })()
  return true // Keeps the message channel open for async responses
})

// Capture the screenshot in the current tab
async function captureScreenshot() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (tab) {
      return await chrome.tabs.captureVisibleTab(tab.windowId, {
        format: 'jpeg',
        quality: 25
      })
    }
  } catch (error) {
    console.error('Error capturing screenshot:', error)
  }
  return null
}

function hashCode(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  console.log('Hash value before return:', hash)
  return hash.toString()
}

const saveHTML = async (
  htmlContent: string,
  simplifiedHTML: string,
  currentSnapshotId: string,
  timestamp: string,
  uuid: string
) => {
  await db.add('htmlSnapshots', {
    htmlSnapshotId: currentSnapshotId,
    htmlContent: htmlContent,
    simplifiedHTML: simplifiedHTML,
    timestamp: timestamp,
    uuid: uuid
  })
}

const saveInteraction = async (
  eventType: string,
  timestamp: string,
  target_url: string,
  htmlSnapshotId: string,
  currentactionSequenceId: number,
  uuid: string,
  navigationType: string | null = null,
  pageMeta: string | null = null
) => {
  const data = {
    eventType,
    timestamp,
    target_url,
    htmlSnapshotId,
    uuid,
    pageMeta
  }

  // Add navigationType only if it exists
  if (navigationType) {
    data['navigationType'] = navigationType
  }

  await db.add('interactions', data)
}

const saveScreenshot = async (windowId: number, timestamp: string, uuid: string) => {
  const screenshotDataUrl = await chrome.tabs.captureVisibleTab(windowId, {
    format: 'jpeg',
    quality: 25
  })

  await saveScreenshot_idb(screenshotDataUrl, timestamp, uuid)
}
const sendPopup = async (
  tabId: number,
  timestamp: string,
  eventType: string,
  // action_uuid: string,
  data: any,
  uuid: string
) => {
  if (
    data.target?.id?.toLowerCase().includes('rufus') ||
    data.target?.className?.toLowerCase().includes('rufus')
  ) {
    return
  }
  const question = getCustomQuestion(eventType, data)
  if (Math.random() < popup_probability && tabId) {
    console.log('send popup')
    try {
      const reason = await chrome.tabs.sendMessage(tabId, {
        action: 'show_popup',
        question: question
      })
      console.log('reason', reason)
      if (reason && reason.input !== null) {
        const newitem = {
          uuid: uuid,
          timestamp: timestamp,
          eventType: eventType,
          reason: reason
        }
        await db.add('reasonsAnnotation', newitem)
      }
    } catch (error) {
      console.error('Error popup:', error)
    }
  }
}

// listen to switches between activated tabs
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  try {
    const tabId = activeInfo.tabId
    const tab = await chrome.tabs.get(tabId)
    if (!tab) {
      console.error(`Failed to get tab with ID: ${tabId}`)
      return
    }
    console.log(`Switched to tab ${tabId} with URL: ${tab.url}`)
    update_icon(tab.url)
    if (tab.url && !(await shouldExclude(tab.url))) {
      const timestamp = new Date().toISOString()
      const uuid = uuidv4()
      const currentSnapshotId = `html_${hashCode(tab.url)}_${timestamp}_${uuid}`

      chrome.tabs.sendMessage(tabId, { action: 'getHTML' }, async (response) => {
        const htmlContent = response?.html
        const simplifiedHTML = response?.simplifiedHTML
        const pageMeta = response?.pageMeta
        actionSequenceId++
        const currentactionSequenceId = actionSequenceId

        await Promise.all([
          saveHTML(htmlContent, simplifiedHTML, currentSnapshotId, timestamp, uuid),
          saveInteraction(
            'tabActivate',
            timestamp,
            tab.url,
            currentSnapshotId,
            currentactionSequenceId,
            uuid,
            null,
            pageMeta
          ),
          saveScreenshot(tab.windowId, timestamp, uuid),
          sendPopup(tabId, timestamp, 'tabActivate', {}, uuid)
        ])
      })
    }
  } catch (error) {
    console.error('Error in tab activate handler:', error)
  }
})

chrome.webNavigation.onCommitted.addListener(async (details) => {
  if (details.frameId !== 0) return
  console.log('webNavigation onHistoryStateUpdated event triggered:', details)
  update_icon(details.url)
  if (!(await shouldExclude(details.url))) {
    // chrome.tabs.sendMessage(details.tabId, { action: 'processRecipe' })

    const navigationType = analyzeNavigation(details.tabId, details.url)
    console.log(`Navigation type: ${navigationType} for tab ${details.tabId} to ${details.url}`)
    const timestamp = new Date().toISOString()
    const uuid = uuidv4()
    chrome.tabs.sendMessage(details.tabId, { action: 'getHTML' }, async (response) => {
      const htmlContent = response?.html
      const simplifiedHTML = response?.simplifiedHTML
      const pageMeta = response?.pageMeta
      const currentSnapshotId = `html_${hashCode(details.url)}_${timestamp}_${uuid}`
      actionSequenceId++
      const currentactionSequenceId = actionSequenceId
      await Promise.all([
        saveHTML(htmlContent, simplifiedHTML, currentSnapshotId, timestamp, uuid),
        saveInteraction(
          'navigation',
          timestamp,
          details.url,
          currentSnapshotId,
          currentactionSequenceId,
          uuid,
          navigationType,
          pageMeta
        ),
        saveScreenshot((await chrome.tabs.get(details.tabId)).windowId, timestamp, uuid)
      ])
      if (navigationType !== 'new' && navigationType !== 'reload') {
        console.log('send message to popup navigation')
        await sendPopup(
          details.tabId,
          timestamp,
          'navigation',
          // currentactionSequenceId,
          {
            navigationType: navigationType
          },
          uuid
        )
      }
    })
  }
})

// Add cleanup when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  delete tabNavigationHistory[tabId]
})

// Add this function to handle data upload
async function downloadDataLocally() {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')

    // Get userId and data from storage
    const userIdResult = await chrome.storage.local.get({ userId: '' })
    const currentUserId = userIdResult.userId

    let user_id = currentUserId || 'unknown'

    const folderName = `${folder_name}/USER_${user_id}/SESSION_${timestamp}`

    const interactionsToDownload = await db.getAll('interactions')
    const htmlSnapshotsToDownload = await db.getAll('htmlSnapshots')
    const orderDetailsToDownload = await db.getAll('order')
    const screenshotsToDownload = await db.getAll('screenshots')
    const reasonsAnnotationToDownload = await db.getAll('reasonsAnnotation')

    console.log('downloading zip file')
    const zip = new JSZip()
    zip.file(
      'session_info.txt',
      `Session data for timestamp: ${timestamp}
        \n user id: ${user_id}
              \n order details:
              \n ${JSON.stringify(orderDetailsToDownload)}`
    )

    const fullData = {
      interactions: interactionsToDownload,
      reasons: reasonsAnnotationToDownload,
      orderDetails: orderDetailsToDownload
    }

    const interactions_json = JSON.stringify(fullData, null, 2)
    zip.file('interactions.json', interactions_json)

    const screenshotsFolder = zip.folder('screenshots')
    for (const screenshot of screenshotsToDownload) {
      const response = await fetch(screenshot.dataUrl)
      const blob = await response.blob()
      screenshotsFolder.file(screenshot.screenshotId.replace(/[:.]/g, '-') + '.jpg', blob)
    }

    const htmlSnapshotsFolder = zip.folder('htmlSnapshots')
    for (const snapshot of htmlSnapshotsToDownload) {
      htmlSnapshotsFolder.file(snapshot.htmlSnapshotId + '.html', snapshot.htmlContent)
      if (snapshot.simplifiedHTML) {
        htmlSnapshotsFolder.file(
          'simplified_' + snapshot.htmlSnapshotId + '.html',
          snapshot.simplifiedHTML
        )
      }
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' })
    console.log('ZIP file generated')

    const reader = new FileReader()
    reader.onloadend = function () {
      const base64Zip = reader.result.split(',')[1] // Get the base64 part
      chrome.downloads.download({
        url: 'data:application/zip;base64,' + base64Zip,
        filename: `${folderName}.zip`,
        saveAs: false
      })
    }
    reader.readAsDataURL(zipBlob)

    const tx = db.transaction(
      ['interactions', 'htmlSnapshots', 'order', 'screenshots', 'reasonsAnnotation'],
      'readwrite'
    )
    const deletePromises = []

    interactionsToDownload.forEach((item) => {
      deletePromises.push(tx.objectStore('interactions').delete(item.id))
    })

    htmlSnapshotsToDownload.forEach((item) => {
      deletePromises.push(tx.objectStore('htmlSnapshots').delete(item.id))
    })

    orderDetailsToDownload.forEach((item) => {
      deletePromises.push(tx.objectStore('order').delete(item.id))
    })

    screenshotsToDownload.forEach((item) => {
      deletePromises.push(tx.objectStore('screenshots').delete(item.id))
    })

    reasonsAnnotationToDownload.forEach((item) => {
      deletePromises.push(tx.objectStore('reasonsAnnotation').delete(item.id))
    })

    deletePromises.push(tx.done)
    await Promise.all(deletePromises)
    return true
  } catch (error) {
    console.error('Error download data:', error)
    return false
  }
}

function presignedFormData(name) {
  const formData = new FormData()
  formData.append('key', name)

  Object.keys(lastGeneratePresignedPostResponse.fields).forEach((key) => {
    if (key != 'key') formData.append(key, lastGeneratePresignedPostResponse.fields[key])
  })

  return formData
}

const request = axios.create({
  baseURL: base_url
})

async function gzipHtml(content) {
  // Create a new GZIP compression stream
  const cs = new CompressionStream('gzip')

  // Create a writable stream to which we'll write the compressed data
  const writer = cs.writable.getWriter()

  // Encode the content to Uint8Array
  const encoder = new TextEncoder()
  const encodedContent = encoder.encode(content)

  // Write the encoded content into the compression stream
  writer.write(encodedContent)

  // Close the writer to finish compression
  writer.close()

  // Get the compressed data as a Blob
  const compressedBlob = await new Response(cs.readable).blob()

  return compressedBlob
}

// Start the periodic upload timer
function startPeriodicUpload() {
  if (!uploadTimer) {
    console.log('startPeriodicUpload')
    uploadTimer = setInterval(uploadDataToServer_new, 10000) // 10 seconds
  }
}

// Stop the periodic upload timer
function stopPeriodicUpload() {
  if (uploadTimer) {
    // console.log('stopPeriodicUpload')
    clearInterval(uploadTimer)
    uploadTimer = false
  }
}
if (uploadTimer == null) {
  console.log('--initializing interval--')
  startPeriodicUpload()
}

async function uploadDataToServer_new() {
  stopPeriodicUpload()
  try {
    // Retrieve the last upload timestamp
    const lastUploadResult = await chrome.storage.local.get({ lastuploadTimestamp: null })
    lastuploadTimestamp = lastUploadResult.lastuploadTimestamp || null
    const currentTimestamp = new Date().toISOString()

    const lastTimestampResult = await chrome.storage.local.get({
      user_interaction_tracker_last_timestamp: null
    })
    lastTimestamp = lastTimestampResult.user_interaction_tracker_last_timestamp || null

    if (lastTimestamp) console.log('lastTimestamp restored: ', lastTimestamp)

    const timestamp = lastTimestamp || currentTimestamp.replace(/[:.]/g, '-')

    // Update the last interaction timestamp
    await chrome.storage.local.set({
      user_interaction_tracker_last_timestamp: timestamp
    })

    // Get userId from storage
    const userIdResult = await chrome.storage.local.get({ userId: '' })
    const currentUserId = userIdResult.userId
    const user_id = currentUserId || 'unknown'

    const folderName = `${folder_name}/USER/${user_id}`

    // Create an IDBKeyRange for fetching data since the last upload
    const lowerBound =
      lastuploadTimestamp !== null ? IDBKeyRange.lowerBound(lastuploadTimestamp, true) : undefined

    // Fetch data from IndexedDB
    console.log('Fetching data from IndexedDB')

    const interactionsToUpload = await db.getAllFromIndex('interactions', 'timestamp', lowerBound)
    const htmlSnapshotsToUpload = await db.getAllFromIndex('htmlSnapshots', 'timestamp', lowerBound)
    const orderDetailsToUpload = await db.getAllFromIndex('order', 'timestamp', lowerBound)
    const screenshotsToUpload = await db.getAllFromIndex('screenshots', 'timestamp', lowerBound)
    const reasonsAnnotationToUpload = await db.getAllFromIndex(
      'reasonsAnnotation',
      'timestamp',
      lowerBound
    )

    // Check if there are any interactions to upload
    if (interactionsToUpload.length === 0) {
      console.log('No interactions to upload')
      startPeriodicUpload()
      return false
    }

    const fullData = {
      interactions: interactionsToUpload,
      reasons: reasonsAnnotationToUpload,
      orderDetails: orderDetailsToUpload
    }

    // Handle presigned post URL generation
    if (
      !lastGeneratePresignedPostResponse ||
      lastGeneratePresignedPostResponse?.expire_timestamp < Date.now() / 1000 ||
      !lastGeneratePresignedPostResponse?.fields?.key.includes(user_id)
    ) {
      console.log('Getting new presigned post URL')
      let postUrlResult = await request.get(`${generate_presigned_post_url}`, {
        params: {
          user_id: user_id
        }
      })

      lastGeneratePresignedPostResponse = postUrlResult.data
      console.log(
        'New presigned post URL received',
        lastGeneratePresignedPostResponse?.expire_timestamp - Date.now() / 1000
      )
    }

    try {
      // Prepare session information
      const sessionInfoContent = `Session data for timestamp: ${timestamp}
                                  \n user id: ${user_id}
                                  \n order details:
                                  \n ${JSON.stringify(orderDetailsToUpload)}`
      const sessionInfo = new Blob([sessionInfoContent], { type: 'text/plain' })
      const sessionFormData = presignedFormData(
        `${folderName}/order_info/order_info_${timestamp}.txt`
      )
      sessionFormData.append('file', sessionInfo)

      console.log('Uploading session info')
      const sessionUploadPromise = request.post(
        lastGeneratePresignedPostResponse.url,
        sessionFormData
      )

      // Upload HTML snapshots
      console.log('Uploading HTML snapshots')
      const htmlUploadPromises = htmlSnapshotsToUpload.map(async (snapshot) => {
        // Upload original htmlContent
        const htmlBlob = await gzipHtml(snapshot.htmlContent)
        let uploadPromises = []

        let formData = presignedFormData(`${folderName}/html/${snapshot.htmlSnapshotId}.html.gz`)
        formData.append('file', htmlBlob)
        uploadPromises.push(request.post(lastGeneratePresignedPostResponse.url, formData))

        // Check if simplifiedHTML exists
        if (snapshot.simplifiedHTML) {
          // Upload simplifiedHTML
          const simplifiedHtmlBlob = await gzipHtml(snapshot.simplifiedHTML)
          const simplifiedFormData = presignedFormData(
            `${folderName}/html/simplified${snapshot.htmlSnapshotId}.html.gz`
          )
          simplifiedFormData.append('file', simplifiedHtmlBlob)
          uploadPromises.push(
            request.post(lastGeneratePresignedPostResponse.url, simplifiedFormData)
          )
        }

        return Promise.all(uploadPromises)
      })

      // Upload screenshots
      console.log('Uploading screenshots')
      const screenshotUploadPromises = screenshotsToUpload.map(async (screenshot) => {
        const response = await fetch(screenshot.dataUrl)
        const blob = await response.blob()
        const formData = presignedFormData(
          `${folderName}/screenshots/${screenshot.screenshotId.replace(/[:.]/g, '-')}.jpg`
        )
        formData.append('file', blob)

        return request.post(lastGeneratePresignedPostResponse.url, formData)
      })

      // Upload interactions JSON
      console.log('Uploading interactions')
      const interactions_json = JSON.stringify(fullData)
      const interactionsBlob = new Blob([interactions_json], {
        type: 'application/json'
      })
      const jsonFormDataFile = presignedFormData(
        `${folderName}/interactions/interactions_${timestamp}.json`
      )

      jsonFormDataFile.append('file', interactionsBlob)

      const jsonUploadPromise = request.post(
        lastGeneratePresignedPostResponse.url,
        jsonFormDataFile
      )

      // Also upload interactions directly to the API
      const json2dbUploadPromise = request.post(interactions_url, interactions_json, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        params: {
          user_id: user_id
        }
      })

      // Wait for all uploads to complete
      await Promise.all([
        sessionUploadPromise,
        ...htmlUploadPromises,
        ...screenshotUploadPromises,
        jsonUploadPromise,
        json2dbUploadPromise
      ])
    } catch (error) {
      startPeriodicUpload()
      console.error('Error uploading data:', error)
      return false
    }

    // After successful upload, decide whether to delete the uploaded data
    if (!user_id.includes(data_collector_secret_id)) {
      // If user_id does NOT contain the secret ID, delete the data
      const tx = db.transaction(
        ['interactions', 'htmlSnapshots', 'order', 'screenshots', 'reasonsAnnotation'],
        'readwrite'
      )

      const deletePromises = []

      interactionsToUpload.forEach((item) => {
        deletePromises.push(tx.objectStore('interactions').delete(item.id))
      })

      htmlSnapshotsToUpload.forEach((item) => {
        deletePromises.push(tx.objectStore('htmlSnapshots').delete(item.id))
      })

      orderDetailsToUpload.forEach((item) => {
        deletePromises.push(tx.objectStore('order').delete(item.id))
      })

      screenshotsToUpload.forEach((item) => {
        deletePromises.push(tx.objectStore('screenshots').delete(item.id))
      })

      reasonsAnnotationToUpload.forEach((item) => {
        deletePromises.push(tx.objectStore('reasonsAnnotation').delete(item.id))
      })

      deletePromises.push(tx.done)
      await Promise.all(deletePromises)

      // Update the last upload timestamp
      lastTimestamp = null
      lastuploadTimestamp = currentTimestamp
      await chrome.storage.local.set({ lastuploadTimestamp: lastuploadTimestamp })
      chrome.storage.local.remove('user_interaction_tracker_last_timestamp')
    } else {
      // If user_id contains the secret ID, do not delete data from IndexedDB
      console.log('Data retained in IndexedDB for local download')
    }

    startPeriodicUpload()

    return true
  } catch (error) {
    startPeriodicUpload()
    console.error('Error uploading data:', error)
    return false
  }
}

// if user id change
chrome.storage.local.onChanged.addListener((changes) => {
  if (changes.userId) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url
      update_icon(url)
    })
  }
})
