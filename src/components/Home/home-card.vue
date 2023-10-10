<template>
  <RouterLink
    :to="{ name: 'Tournament', params: { publicId } }"
    class="no-underline"
  >
    <Card>
      <template #title>
        <i class="pi pi-sitemap" />
        <span class="ml-2">{{ name }}</span>
      </template>
      <template #content>
        <Tag
          v-for="competitor in competitors"
          :key="competitor"
          :value="competitor"
          icon="pi pi-user"
          class="mr-2"
        />
      </template>
    </Card>
  </RouterLink>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import { Tournament } from '@/types/tournament';

defineProps({
  name: { type: String, required: true },
  competitors: {
    type: Array as PropType<Tournament['competitors']>,
    required: true,
  },
  publicId: { type: String, required: true },
});
</script>
