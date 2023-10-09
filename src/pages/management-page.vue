<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <ManagementSkeleton v-if="isFetching" />
    <ManagementCreate v-else-if="!tournament" />
    <ManagementResults v-else :tournament="tournament" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import ManagementSkeleton from '@/components/Management/management-skeleton.vue';
import ManagementCreate from '@/components/Management/management-create.vue';
import ManagementResults from '@/components/Management/management-results.vue';
import { getTournament } from '@/api/tournament';
import { Tournament } from '@/types/tournament';

const { user } = useAuth0();

const tournament = ref<Tournament | null>(null);
const isFetching = ref<boolean>(false);

const fetchTournament = async () => {
  if (!user.value?.sub) return;
  const tournamentId = user.value.sub;
  tournament.value = await getTournament(tournamentId);
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
