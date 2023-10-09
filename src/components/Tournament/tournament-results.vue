<template>
  <TResults :tournament="tournament" />
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import TResults from '@/components/common/t-results.vue';
import { Tournament } from '@/types/tournament';

defineProps({
  tournament: { type: Object as PropType<Tournament>, required: true },
});
</script>
