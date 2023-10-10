<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <HomeList />
  </main>
</template>

<script lang="ts" setup>
import HomeList from '@/components/Home/home-list.vue';
</script>

<style scoped>
main {
  height: calc(100% - 72px);
}
</style>
