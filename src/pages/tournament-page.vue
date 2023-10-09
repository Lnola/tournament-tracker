<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <TournamentResults :tournament="tournament" />
  </main>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import TournamentResults from '@/components/Tournament/tournament-results.vue';
import { Tournament } from '@/types/tournament';

defineProps({
  publicId: { type: String, required: true },
  tournament: { type: Object as PropType<Tournament>, required: true },
});
</script>

<style scoped>
main {
  height: calc(100% - 72px);
}
</style>
