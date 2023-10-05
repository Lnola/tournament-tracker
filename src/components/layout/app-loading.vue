<template>
  <main class="app-loading">
    <ProgressSpinner
      strokeWidth="6"
      :pt="{
        circle: {
          style: {
            stroke: 'var(--primary-color)',
            animation: 'p-progress-spinner-dash 1.5s ease-in-out infinite',
          },
        },
      }"
    />
  </main>
</template>

<script lang="ts" setup>
import ProgressSpinner from 'primevue/progressspinner';
</script>

<style scoped>
.app-loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
