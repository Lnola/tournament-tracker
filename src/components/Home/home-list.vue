<template>
  <main class="flex flex-column align-items-center justify-content-center px-7">
    <HomeCard
      v-for="{ name, competitors, publicId } in tournaments"
      :key="name"
      v-bind="{ name, competitors, publicId }"
      class="mb-5 w-full"
    />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import HomeCard from './home-card.vue';
import { getTournaments } from '@/api/tournament';
import { Tournament } from '@/types/tournament';

const tournaments = ref<Tournament[] | null>(null);
const isFetching = ref<boolean>(false);

const fetchTournaments = async () => {
  try {
    tournaments.value = await getTournaments({});
  } catch {}
};

onMounted(async () => {
  isFetching.value = true;
  await fetchTournaments();
  isFetching.value = false;
});
</script>

<style scoped>
main {
  height: calc(100% - 72px);
}
</style>
