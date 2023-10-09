<template>{{ props }}</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Tournament } from '@/types/tournament';

const props = defineProps({
  publicId: { type: String, required: true },
  tournament: { type: Object as PropType<Tournament>, required: true },
});
</script>
