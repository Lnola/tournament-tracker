<template>
  <span class="p-float-label mb-3">
    <Chips
      v-bind="bind"
      separator=";"
      :pt="{ container: { style: { width: '15rem' } } }"
      :max="8"
      :min="4"
      :input-id="inputId"
      :disabled="disabled"
    />
    <label :for="inputId">{{ label }}</label>
    <div>{{ errorMessage }}</div>
  </span>
</template>

<script lang="ts" setup>
import Chips from 'primevue/chips';

defineProps({
  bind: { type: Object, required: true },
  label: { type: String, required: true },
  inputId: { type: String, required: true },
  errorMessage: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  width: { type: String, default: '15rem' },
});
</script>
