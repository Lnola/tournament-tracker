<template>
  <article>
    <span class="p-float-label">
      <Chips
        v-bind="bind"
        separator=";"
        :pt="{ container: { style: { width } } }"
        :input-id="inputId"
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
