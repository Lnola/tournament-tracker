<template>
  <span class="p-float-label mb-5">
    <InputText
      v-bind="bind"
      :id="inputId"
      :style="{ width }"
      :disabled="disabled"
    />
    <label :for="inputId">{{ label }}</label>
    <div>{{ errorMessage }}</div>
  </span>
</template>

<script lang="ts" setup>
import InputText from 'primevue/inputtext';

defineProps({
  bind: { type: Object, required: true },
  label: { type: String, required: true },
  inputId: { type: String, required: true },
  errorMessage: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  width: { type: String, default: '15rem' },
});
</script>
