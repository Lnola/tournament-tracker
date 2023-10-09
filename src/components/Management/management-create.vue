<template>
  <form @submit="onSubmit" class="flex flex-column align-items-center">
    <TInputText
      :bind="name"
      :disabled="isDisabled"
      :error-message="errors.name"
      label="Tournament name"
      input-id="tournament-name"
      class="mb-5"
    />
    <TChips
      :bind="competitors"
      :disabled="isDisabled"
      :error-message="errors.competitors"
      label="Competitor names"
      input-id="competitor-names"
      class="mb-3"
    />

    <section class="flex gap-3 mb-5">
      <TInputNumber
        :bind="pointsWin"
        :disabled="isDisabled"
        label="Points Win"
        input-id="points-win"
      />
      <TInputNumber
        :bind="pointsDraw"
        :disabled="isDisabled"
        label="Points Draw"
        input-id="points-draw"
      />
      <TInputNumber
        :bind="pointsLoss"
        :disabled="isDisabled"
        label="Points Loss"
        input-id="points-loss"
      />
    </section>

    <Button
      v-if="!disabled"
      :disabled="isSubmitDisabled"
      type="submit"
      label="Create"
      class="w-15rem"
    />
  </form>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useForm } from 'vee-validate';
import { useAuth0 } from '@auth0/auth0-vue';
import { toTypedSchema } from '@vee-validate/yup';
import { object, string, array, number } from '@/plugins/yup';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import TInputText from '@/components/common/t-input-text.vue';
import TInputNumber from '@/components/common/t-input-number.vue';
import TChips from '@/components/common/t-chips.vue';
import { CreateTournamentDto, createTournament } from '@/api/tournament';
import { getTournamentId } from '@/api/helpers';

const emits = defineEmits(['created']);

const props = defineProps({
  disabled: { type: Boolean, default: false },
});

const { user } = useAuth0();
const toast = useToast();
const competitorRegex = /^[a-zA-Z_][a-zA-Z0-9_ ]*$/;

const isDisabled = computed(() => isSubmitting.value || props.disabled);
const isInValid = computed(() => !meta.value.valid);
const isSubmitDisabled = computed(() => isSubmitting.value || isInValid.value);

const {
  meta,
  isSubmitting,
  handleSubmit,
  defineInputBinds,
  defineComponentBinds,
  resetForm,
  errors,
} = useForm({
  validationSchema: toTypedSchema(
    object({
      name: string().required(),
      competitors: array()
        .of(string().matches(competitorRegex).required())
        // @ts-ignore
        .unique('Competitor names must be unique')
        .min(4)
        .max(8)
        .required(),
      points: object({
        win: number().required().default(0),
        draw: number().required().default(0),
        loss: number().required().default(0),
      }),
    }),
  ),
});

const name = defineInputBinds('name');
const competitors = defineComponentBinds('competitors');
const pointsWin = defineComponentBinds('points.win');
const pointsDraw = defineComponentBinds('points.draw');
const pointsLoss = defineComponentBinds('points.loss');

const onSubmit = handleSubmit(async (values) => {
  try {
    const tournamentId = getTournamentId(user);
    await createTournament(tournamentId, values as CreateTournamentDto);
    resetForm();
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Tournament created!',
      life: 3000,
    });
    emits('created');
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to create the tournament!',
      life: 3000,
    });
  }
});
</script>
