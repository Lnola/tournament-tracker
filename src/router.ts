import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home-page.vue';
import Management from '@/pages/management-page.vue';
import Callback from '@/pages/callback-page.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/management',
    name: 'Management',
    component: Management,
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
