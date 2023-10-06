<template>
  <article>
    <span class="p-float-label">
      <InputText
        :model-value="bind.value"
        @change="bind.onChange"
        :id="inputId"
        :style="{ width }"
        :disabled="disabled"
      />
      <label :for="inputId">{{ label }}</label>
    </span>
    <div class="p-error text-sm" :class="`max-w-${width}`">
      {{ errorMessage }}&nbsp;
    </div>
  </article>
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
