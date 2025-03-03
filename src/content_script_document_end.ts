import { createApp } from 'vue'
import UserInteractionApp from './components/UserInteractionApp.vue'
import { shouldExclude } from './utils/util'
const work = () => {
  // Create container for Vue app
  const appContainer = document.createElement('div')
  appContainer.id = 'user-interaction-tracker-app'
  document.body.appendChild(appContainer)

  // Initialize Vue app
  const app = createApp(UserInteractionApp)
  app.mount('#user-interaction-tracker-app')
}

shouldExclude(window.location.href).then((result) => {
  console.log('content script, shouldExclude', result)
  if (!result) {
    work()
  }
})
