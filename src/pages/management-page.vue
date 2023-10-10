<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <ManagementSkeleton v-if="isFetching" />
    <ManagementCreate v-else-if="!tournament" @created="fetchTournament" />
    <ManagementResults v-else :tournament="tournament" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import ManagementSkeleton from '@/components/Management/management-skeleton.vue';
import ManagementCreate from '@/components/Management/management-create.vue';
import ManagementResults from '@/components/Management/management-results.vue';
import { getTournaments } from '@/api/tournament';
import { getTournamentId } from '@/api/helpers';
import { Tournament } from '@/types/tournament';

const { user } = useAuth0();

const tournament = ref<Tournament | null>(null);
const isFetching = ref<boolean>(false);

const fetchTournament = async () => {
  try {
    const tournamentId = getTournamentId(user);
    tournament.value = (await getTournaments({ tournamentId }))[0];
  } catch {}
};

onMounted(async () => {
  isFetching.value = true;
  await fetchTournament();
  isFetching.value = false;
});
</script>

<style scoped>
main {
  height: calc(100% - 72px);
}
</style>
