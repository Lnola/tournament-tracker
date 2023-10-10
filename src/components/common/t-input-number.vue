<template>
  <span>
    <label :for="inputId" class="block text-xs mb-2">{{ label }}</label>
    <InputNumber
      v-bind="bind"
      showButtons
      buttonLayout="vertical"
      :style="{ width }"
      :input-id="inputId"
      :disabled="disabled"
      mode="decimal"
      :max-fraction-digits="2"
    />
  </span>
</template>

<script lang="ts" setup>
import InputNumber from 'primevue/inputnumber';

defineProps({
  bind: { type: Object, required: true },
  label: { type: String, required: true },
  inputId: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  width: { type: String, default: '4rem' },
});
</script>
