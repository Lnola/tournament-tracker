<template>
  <span class="p-float-label mb-5">
    <InputText
      id="tournament-name"
      v-model="tournamentName"
      :disabled="disabled"
    />
    <label for="tournament-name">Tournament name</label>
  </span>
  <span class="p-float-label mb-5">
    <Chips
      id="team-names"
      v-model="teamNames"
      separator=";"
      :disabled="disabled"
    />
    <label for="team-names">Chips</label>
  </span>

  <span class="mb-5">
    <label for="points-win" class="block text-xs mb-2">Points Win</label>
    <InputNumber
      id="points-win"
      v-model="points.win"
      showButtons
      buttonLayout="vertical"
      style="width: 4rem"
      :disabled="disabled"
    />
  </span>
  <span class="mb-5">
    <label for="points-draw" class="block text-xs mb-2">Points Draw</label>
    <InputNumber
      id="points-draw"
      v-model="points.draw"
      showButtons
      buttonLayout="vertical"
      style="width: 4rem"
      :disabled="disabled"
    />
  </span>
  <span class="mb-5">
    <label for="points-loss" class="block text-xs mb-2">Points Loss</label>
    <InputNumber
      id="points-loss"
      v-model="points.loss"
      showButtons
      buttonLayout="vertical"
      style="width: 4rem"
      :disabled="disabled"
    />
  </span>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Chips from 'primevue/chips';
import InputNumber from 'primevue/inputnumber';
import { type Points } from '@/types/points';

defineProps({
  disabled: { type: Boolean, default: false },
});

const tournamentName = ref<string>('');
const teamNames = ref<string[]>([]);
const points = reactive<Points>({ win: 0, draw: 0, loss: 0 });
</script>
