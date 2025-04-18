<script setup lang="ts">
import { ref } from 'vue'
import { isValidReason } from '../utils/util'
import { NButton, NInput } from 'naive-ui'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  question: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['submit', 'skip'])

const reason_text = ref('')
const showError = ref(false)

const textareaRef = ref()

function submit() {
  if (!isValidReason(reason_text.value)) {
    showError.value = true
    return
  }

  showError.value = false
  emit('submit', { input: reason_text.value, success: true })
  reset()
}

function skip() {
  emit('skip', { input: null, success: false })
  reset()
}

function reset() {
  reason_text.value = ''
  showError.value = false
}

const handleFocusIn = (e) => {
  e.stopPropagation()
  e.stopImmediatePropagation()
}
</script>

<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
.reason-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.reason-modal-content {
  background: white;
  padding: 20px 20px 10px 20px;
  border-radius: 8px;
  width: 400px;
}

:deep(.highlight-question) {
  padding: 0px 6px;
  border-radius: 3px;
  display: inline-block;
  color: rgb(24, 160, 88);
  border: 1px solid rgba(24, 160, 88, 0.3);
  background: rgba(24, 160, 88, 0.1);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
:deep(.highlight-question-blue) {
  padding: 0px 6px;
  border-radius: 3px;
  display: inline-block;
  color: rgb(24, 106, 160);
  border: 1px solid rgba(24, 106, 160, 0.3);
  background: rgba(24, 106, 160, 0.1);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.reason-textarea {
  margin-top: 10px;
  width: 100%;
  height: 100px;
  :deep(textarea) {
    box-shadow: none;
    font-size: 16px;
  }
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.button-container {
  text-align: right;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.equal-width-button {
  min-width: 80px; /* Adjust this value as needed */
}
#reason-skip {
  background-color: #f5f5f5;
  color: #adabab;
  &:hover {
    background-color: #e7e6e6;
  }
}
:deep(.bold-question) {
  font-weight: bold;
}

:deep(.question) {
  font-size: 18px;
  font-weight: 500;
}
</style>

<template>
  <div v-if="visible" id="reason-modal" class="reason-modal-overlay">
    <div class="reason-modal-content">
      <span class="question" v-html="question"></span>
      <NInput
        ref="textareaRef"
        type="textarea"
        id="reason-input"
        v-model:value="reason_text"
        :placeholder="placeholder"
        class="reason-textarea"
        @keydown.enter.prevent="submit"
        @focusin.capture="handleFocusIn"
      />
      <div id="error-message" class="error-message" v-show="showError">
        Please enter a valid reason.
      </div>
      <div class="button-container">
        <NButton
          strong
          secondary
          type="tertiary"
          id="reason-skip"
          @click="skip"
          class="equal-width-button"
          >Skip</NButton
        >
        <NButton
          strong
          secondary
          type="info"
          id="reason-submit"
          @click="submit"
          class="equal-width-button"
          >Submit</NButton
        >
      </div>
    </div>
  </div>
</template>
