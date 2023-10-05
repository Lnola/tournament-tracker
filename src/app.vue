<template>
  <TLoading v-if="isLoading" />
  <template v-else>
    <TNav />
    <RouterView />
  </template>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import TLoading from '@/components/common/t-loading.vue';
import TNav from '@/components/common/t-nav.vue';

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
</style>
