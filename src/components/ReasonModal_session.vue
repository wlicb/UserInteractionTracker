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

const emit = defineEmits(['submit'])

const reason_text = ref('')
const showError = ref(false)

function submit() {
  if (!isValidReason(reason_text.value)) {
    showError.value = true
    return
  }

  showError.value = false
  emit('submit', { input: reason_text.value, success: true })
  reset()
}

function reset() {
  reason_text.value = ''
  showError.value = false
}
</script>

<style scoped lang="scss">
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
</style>

<template>
  <div v-if="visible" id="reason-modal" class="reason-modal-overlay">
    <div class="reason-modal-content">
      <h3 v-html="question"></h3>
      <NInput
        type="textarea"
        id="reason-input"
        v-model:value="reason_text"
        :placeholder="placeholder"
        class="reason-textarea"
      />
      <div id="error-message" class="error-message" v-show="showError">
        Please enter a valid reason.
      </div>
      <div class="button-container">
        <NButton strong secondary type="info" id="reason-submit" @click="submit">Submit</NButton>
      </div>
    </div>
  </div>
</template>
