<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <TabView class="w-full">
      <TabPanel header="Results">
        <TournamentResults :tournament="tournament" />
      </TabPanel>
      <TabPanel header="Brackets">
        <TournamentBracket :tournament="tournament" />
      </TabPanel>
    </TabView>
  </main>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import TournamentResults from '@/components/Tournament/tournament-results.vue';
import TournamentBracket from '@/components/Tournament/tournament-bracket.vue';
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
