<template>
  <span>Public URL: </span>
  <div class="flex align-items-center">
    <pre class="mr-2 my-0 text-overflow-ellipsis overflow-hidden">{{
      publicLink
    }}</pre>
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
import { useToast } from 'primevue/usetoast';

const { VITE_BASE_URL } = import.meta.env;

const props = defineProps({
  publicId: { type: String, required: true },
});

const toast = useToast();
const publicLink = computed(() =>
  [VITE_BASE_URL, 'tournaments', props.publicId].join('/'),
);

const copyToClipboard = () => {
  navigator.clipboard.writeText(publicLink.value);
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Public URL copied to clipboard!',
    life: 3000,
  });
};
</script>
