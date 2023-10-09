<template>
  <Card class="w-full">
    <template #title>{{ tournament.name }}</template>
    <template #content>
      <ScrollPanel style="height: 30rem">
        <DataTable :value="competitors">
          <Column
            v-for="{ field, header } of columns"
            :key="field"
            v-bind="{ field, header }"
            style="width: 20rem"
          />
        </DataTable>
      </ScrollPanel>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import Card from 'primevue/card';
import ScrollPanel from 'primevue/scrollpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { Tournament } from '@/types/tournament';
import { getGamesPlayedCount, getPoints } from '@/utils/bracket';

const props = defineProps({
  tournament: { type: Object as PropType<Tournament>, required: true },
});

const competitors = computed(() => {
  const competitorsMapped = props.tournament.competitors.map((it) => ({
    name: it,
    gamesPlayed: getGamesPlayedCount(it, props.tournament.schedule),
    points: getPoints(it, props.tournament.schedule, props.tournament.points),
  }));
  return competitorsMapped.sort((a, b) => b.points - a.points);
});
const columns = [
  { field: 'name', header: 'Name' },
  { field: 'gamesPlayed', header: 'Games Played' },
  { field: 'points', header: 'Points' },
];
</script>
