<template>
  <TResults :tournament="tournament" is-editable>
    <template #subtitle>
      <ManagementPublicLink :public-id="tournament.publicId" />
    </template>
  </TResults>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import TResults from '@/components/common/t-results.vue';
import ManagementPublicLink from './management-public-link.vue';
import { Tournament } from '@/types/tournament';

defineProps({
  tournament: { type: Object as PropType<Tournament>, required: true },
});
</script>
