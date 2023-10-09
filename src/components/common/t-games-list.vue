<template>
  <div class="card p-fluid">
    <DataTable
      v-model:editingRows="editingRows"
      :value="games"
      editMode="row"
      @row-edit-save="onRowEditSave"
      tableClass="editable-cells-table"
    >
      <Column
        v-for="column of columns"
        :key="column.field"
        :field="column.field"
        :header="column.header"
        style="width: 20rem"
      >
        <template v-if="isEditable" #editor="{ data, field }">
          <p v-if="!isFieldEditable(field)">{{ data[field] }}</p>
          <InputNumber
            v-else
            v-model="data[field]"
            :input-id="field"
            autofocus
          />
        </template>
      </Column>
      <Column
        v-if="isEditable"
        style="min-width: 7rem"
        bodyStyle="text-align:right"
        rowEditor
      />
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import find from 'lodash/find';
import { useAuth0 } from '@auth0/auth0-vue';
import DataTable, { DataTableRowEditSaveEvent } from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import { useToast } from 'primevue/usetoast';
import { updateGameScores } from '@/api/game';
import { getTournamentId } from '@/api/helpers';
import { Game } from '@/types/tournament';

const props = defineProps({
  isEditable: { type: Boolean, default: false },
  round: { type: Array as PropType<Game[]>, required: true },
  roundIndex: { type: Number, required: true },
});

const toast = useToast();
const { user } = useAuth0();

const editingRows = ref([]);
const games = ref(props.round);
const columns = ref([
  { field: 'home', header: 'Home', editable: false },
  { field: 'away', header: 'Away', editable: false },
  { field: 'homeScore', header: 'Home Score', editable: true },
  { field: 'awayScore', header: 'Away Score', editable: true },
]);

const isFieldEditable = (field: string) => {
  return find(columns.value, { field })?.editable;
};

const onRowEditSave = async (event: DataTableRowEditSaveEvent) => {
  let { newData, index } = event;
  games.value[index] = newData;
  try {
    const tournamentId = getTournamentId(user);
    await updateGameScores(tournamentId, props.roundIndex, index, newData);
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Game score updated!',
      life: 3000,
    });
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to update game scores!',
      life: 3000,
    });
  }
};
</script>

<style scoped>
:deep(.editable-cells-table td.p-cell-editing) {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}
</style>
