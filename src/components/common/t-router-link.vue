<template>
  <component :is="disabled ? 'span' : 'RouterLink'" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
defineProps({
  disabled: { type: Boolean, default: false },
});
</script>
