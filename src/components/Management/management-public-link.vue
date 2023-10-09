<template>
  <span>Public URL: </span>
  <div class="flex align-items-center">
    <pre class="mr-2 my-0">{{ publicLink }}</pre>
    <Button
      @click="copyToClipboard"
      icon="pi pi-copy"
      severity="secondary"
      rounded
      text
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Button from 'primevue/button';

const { VITE_BASE_URL } = import.meta.env;

const props = defineProps({
  publicId: { type: String, required: true },
});

const publicLink = computed(() => [VITE_BASE_URL, props.publicId].join('/'));

const copyToClipboard = () => {
  navigator.clipboard.writeText(publicLink.value);
};
</script>
