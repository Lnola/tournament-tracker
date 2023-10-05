<template>
  <template v-if="!isAuthenticated">
    <button @click="handleLogin">LOGIN</button>
    <button @click="handleSignup">SIGNUP</button>
  </template>
  <template v-else>
    <button @click="handleLogout">LOGOUT</button>
  </template>
</template>

<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: { target: '/profile' },
  });
};

const handleSignup = () => {
  loginWithRedirect({
    appState: { target: '/profile' },
    authorizationParams: { screen_hint: 'signup' },
  });
};

const handleLogout = () => {
  logout({
    logoutParams: { returnTo: window.location.origin },
  });
};
</script>
