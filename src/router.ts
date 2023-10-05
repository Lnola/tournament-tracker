import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home-page.vue';
import Profile from '@/pages/profile-page.vue';
import Callback from '@/pages/callback-page.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
