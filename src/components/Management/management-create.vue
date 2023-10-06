<template>
  <form @submit="onSubmit" class="flex flex-column align-items-center">
    <TInputText
      :bind="tournamentName"
      :disabled="disabled"
      :error-message="errors.tournamentName"
      label="Tournament name"
      input-id="tournament-name"
      class="mb-5"
    />
    <TChips
      :bind="teamNames"
      :disabled="disabled"
      :error-message="errors.teamNames"
      label="Team names"
      input-id="team-names"
      class="mb-3"
    />

    <section class="flex gap-3 mb-5">
      <TInputNumber
        :bind="pointsWin"
        :disabled="disabled"
        label="Points Win"
        input-id="points-win"
      />
      <TInputNumber
        :bind="pointsDraw"
        :disabled="disabled"
        label="Points Draw"
        input-id="points-draw"
      />
      <TInputNumber
        :bind="pointsLoss"
        :disabled="disabled"
        label="Points Loss"
        input-id="points-loss"
      />
    </section>

    <Button
      v-if="!disabled"
      :disabled="!meta.valid"
      type="submit"
      label="Create"
      class="w-15rem"
    />
  </form>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import { object, string, array, number } from 'yup';
import { toTypedSchema } from '@vee-validate/yup';
import Button from 'primevue/button';
import TInputText from '@/components/common/t-input-text.vue';
import TInputNumber from '@/components/common/t-input-number.vue';
import TChips from '@/components/common/t-chips.vue';

defineProps({
  disabled: { type: Boolean, default: false },
});

const { handleSubmit, defineInputBinds, defineComponentBinds, errors, meta } =
  useForm({
    validationSchema: toTypedSchema(
      object({
        tournamentName: string().required(),
        teamNames: array().of(string()).min(4).max(8).required(),
        points: object({
          win: number().required().default(0),
          draw: number().required().default(0),
          loss: number().required().default(0),
        }),
      }),
    ),
  });

const tournamentName = defineInputBinds('tournamentName');
const teamNames = defineComponentBinds('teamNames');
const pointsWin = defineComponentBinds('points.win');
const pointsDraw = defineComponentBinds('points.draw');
const pointsLoss = defineComponentBinds('points.loss');

const onSubmit = handleSubmit((values) => console.log(values));
</script>
