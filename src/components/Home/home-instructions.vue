<template>
  <span class="flex flex-column gap-3 mb-5">
    <span v-if="!isAuthenticated">Sign in to create a new tournament</span>
    <Button
      label="Manage a tournament"
      icon="pi pi-plus"
      :disabled="!isAuthenticated"
    />
  </span>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import Button from 'primevue/button';

const { isAuthenticated } = useAuth0();
</script>
