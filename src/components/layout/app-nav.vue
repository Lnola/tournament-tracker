<template>
  <Toolbar>
    <template #start>
      <RouterLink :to="{ name: 'Home' }">
        <i class="pi pi-home p-2 hover:surface-300 border-circle text-color" />
      </RouterLink>
      <RouterLink v-if="isAuthenticated" :to="{ name: 'Management' }">
        <i class="pi pi-cog p-2 hover:surface-300 border-circle text-color" />
      </RouterLink>
    </template>
    <template #end>
      <template v-if="!isAuthenticated">
        <Button
          @click="handleSignUp"
          label="Sign Up"
          icon="pi pi-sign-in"
          class="mr-2"
        />
        <Button @click="handleSignIn" label="Sign In" outlined />
      </template>
      <template v-else>
        <Button
          @click="handleSignOut"
          label="Sign Out"
          icon="pi pi-sign-out"
          outlined
        />
      </template>
    </template>
  </Toolbar>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';

const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

const handleSignIn = () => {
  loginWithRedirect({
    appState: { target: '/management' },
  });
};

const handleSignUp = () => {
  loginWithRedirect({
    appState: { target: '/management' },
    authorizationParams: { screen_hint: 'signup' },
  });
};

const handleSignOut = () => {
  logout({
    logoutParams: { returnTo: window.location.origin },
  });
};
</script>
