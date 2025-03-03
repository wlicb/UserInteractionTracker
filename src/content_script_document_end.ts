import { createApp } from 'vue'
import UserInteractionApp from './components/UserInteractionApp.vue'
import { shouldExclude } from './utils/util'
import { createDiscreteApi, DialogApi } from 'naive-ui'

// Extend Window interface to include $dialog property
declare global {
  interface Window {
    $dialog?: DialogApi
  }
}

const work = () => {
  // Create container for Vue app
  const appContainer = document.createElement('div')
  appContainer.id = 'user-interaction-tracker-app'
  document.body.appendChild(appContainer)

  // Initialize Vue app
  const app = createApp(UserInteractionApp)
  app.mount('#user-interaction-tracker-app')
  window.$dialog = createDiscreteApi(['dialog']).dialog
}

shouldExclude(window.location.href).then((result) => {
  console.log('content script, shouldExclude', result)
  if (!result) {
    work()
  }
})
