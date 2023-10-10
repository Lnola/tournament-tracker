<template>
  <AppLoading v-if="isLoading" />
  <template v-else>
    <AppNav />
    <Toast />
    <RouterView />
  </template>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import Toast from 'primevue/toast';
import AppLoading from '@/components/layout/app-loading.vue';
import AppNav from '@/components/layout/app-nav.vue';

const { isLoading } = useAuth0();
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app {
  height: 100%;
}

.app-content {
  height: calc(100% - 72px);
}
</style>
