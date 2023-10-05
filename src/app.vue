<template>
  <base-loading v-if="isLoading" />
  <router-view v-else />
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import BaseLoading from '@/components/common/base-loading.vue';

const { isLoading } = useAuth0();
</script>
