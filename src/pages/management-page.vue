<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <ManagementCreate />
  </main>
</template>

<script lang="ts" setup>
import ManagementCreate from '@/components/Management/management-create.vue';
</script>

<style scoped>
main {
  height: calc(100% - 72px);
}
</style>
