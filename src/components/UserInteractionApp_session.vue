<template>
  <ReasonModal
    :visible="showModal"
    :question="modalQuestion"
    :placeholder="modalPlaceholder"
    @submit="handleModalSubmit"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ReasonModal from './ReasonModal_session.vue'

// State
const showModal = ref(false)
const modalQuestion = ref('')
const modalPlaceholder = ref('')
let modalCallback: ((response: any) => void) | null = null

// Event handlers
function showModalHandler(event: CustomEvent) {
  modalQuestion.value = event.detail.question
  modalPlaceholder.value = event.detail.placeholder
  modalCallback = event.detail.callback
  showModal.value = true
}

function handleModalSubmit(response: any) {
  if (modalCallback) {
    modalCallback(response)
  }
  showModal.value = false
}

function handleModalSkip(response: any) {
  if (modalCallback) {
    modalCallback(response)
  }
  showModal.value = false
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('show-modal-session', showModalHandler as EventListener)
})

onBeforeUnmount(() => {
  document.removeEventListener('show-modal-session', showModalHandler as EventListener)
})
</script>
