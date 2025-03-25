import { createApp } from 'vue'
import UserInteractionApp from './components/UserInteractionApp.vue'
import UserInteractionApp_session from './components/UserInteractionApp_session.vue'
import { shouldExclude } from './utils/util'
import { createDiscreteApi, DialogApi } from 'naive-ui'

// Extend Window interface to include $dialog property
declare global {
  interface Window {
    $dialog?: DialogApi
  }
}

const work = () => {
  const appContainer = document.createElement('div')
  appContainer.id = 'user-interaction-tracker-app'
  document.body.appendChild(appContainer)

  const sessionContainer = document.createElement('div')
  sessionContainer.id = 'user-interaction-tracker-app-session'
  document.body.appendChild(sessionContainer)

  const app = createApp(UserInteractionApp)
  app.mount('#user-interaction-tracker-app')
  window.$dialog = createDiscreteApi(['dialog']).dialog

  const app_session = createApp(UserInteractionApp_session)
  app_session.mount('#user-interaction-tracker-app-session')
}

shouldExclude(window.location.href).then((result) => {
  console.log('content script, shouldExclude', result)
  if (!result) {
    work()
  }
})
