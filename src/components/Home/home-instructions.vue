<template>
  <span class="flex flex-column align-items-center gap-3 mb-5">
    <span v-if="!isAuthenticated">Sign in to create a new tournament</span>
    <TRouterLink :to="{ name: 'Management' }" :disabled="!isAuthenticated">
      <Button
        label="Manage a tournament"
        icon="pi pi-plus"
        :disabled="!isAuthenticated"
      />
    </TRouterLink>
  </span>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import Button from 'primevue/button';
import TRouterLink from '@/components/common/t-router-link.vue';

const { isAuthenticated } = useAuth0();
</script>
