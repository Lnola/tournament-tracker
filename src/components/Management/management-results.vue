<template>
  <Card class="w-full">
    <template #title>{{ tournament.name }}</template>
    <template #subtitle>
      <ManagementPublicLink :public-id="tournament.publicId" />
    </template>
    <template #content>
      <ScrollPanel style="height: 30rem">
        <Accordion :activeIndex="0" multiple>
          <AccordionTab
            v-for="(round, roundIndex) in tournament.schedule"
            :key="round.toString()"
            :header="getRoundTitle(roundIndex)"
          >
            <ManagementGames v-bind="{ round, roundIndex }" />
          </AccordionTab>
        </Accordion>
      </ScrollPanel>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import Card from 'primevue/card';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ScrollPanel from 'primevue/scrollpanel';
import ManagementGames from './management-games.vue';
import ManagementPublicLink from './management-public-link.vue';
import { Tournament } from '@/types/tournament';

defineProps({
  tournament: { type: Object as PropType<Tournament>, required: true },
});

const getRoundTitle = (roundIndex: number) => `Round #${roundIndex + 1}`;
</script>
