<template>
  <div class="flex flex-column align-items-center">
    <span class="p-float-label mb-5">
      <InputText
        id="tournament-name"
        v-model="tournamentName"
        style="width: 15rem"
        :disabled="disabled"
      />
      <label for="tournament-name">Tournament name</label>
    </span>
    <span class="p-float-label mb-3">
      <Chips
        input-id="team-names"
        v-model="teamNames"
        separator=";"
        :pt="{ container: { style: { width: '15rem' } } }"
        :max="8"
        :min="4"
        :disabled="disabled"
      />
      <label for="team-names">Chips</label>
    </span>

    <section class="flex gap-3 mb-5">
      <span>
        <label for="points-win" class="block text-xs mb-2">Points Win</label>
        <InputNumber
          input-id="points-win"
          v-model="points.win"
          showButtons
          buttonLayout="vertical"
          style="width: 4rem"
          :disabled="disabled"
        />
      </span>
      <span>
        <label for="points-draw" class="block text-xs mb-2">Points Draw</label>
        <InputNumber
          input-id="points-draw"
          v-model="points.draw"
          showButtons
          buttonLayout="vertical"
          style="width: 4rem"
          :disabled="disabled"
        />
      </span>
      <span>
        <label for="points-loss" class="block text-xs mb-2">Points Loss</label>
        <InputNumber
          input-id="points-loss"
          v-model="points.loss"
          showButtons
          buttonLayout="vertical"
          style="width: 4rem"
          :disabled="disabled"
        />
      </span>
    </section>

    <Button type="submit" label="Submit" class="w-15rem" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Chips from 'primevue/chips';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import { type Points } from '@/types/points';

defineProps({
  disabled: { type: Boolean, default: false },
});

const tournamentName = ref<string>('');
const teamNames = ref<string[]>([]);
const points = reactive<Points>({ win: 0, draw: 0, loss: 0 });
</script>
