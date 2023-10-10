<template>
  <main
    class="app-content flex flex-column align-items-center justify-content-center px-7"
  >
    <HomeInstructions />
    <HomeList />
  </main>
</template>

<script lang="ts" setup>
import HomeInstructions from '@/components/Home/home-instructions.vue';
import HomeList from '@/components/Home/home-list.vue';
</script>
