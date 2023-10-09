import { RouteLocation, createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home-page.vue';
import Management from '@/pages/management-page.vue';
import Callback from '@/pages/callback-page.vue';
import Tournament from '@/pages/tournament-page.vue';
import { getTournament } from './api/tournament';

// TODO: add guards to routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tournaments/:publicId',
    name: 'Tournament',
    component: Tournament,
    props: true,
    beforeEnter: [checkPublicId],
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

async function checkPublicId(to: RouteLocation) {
  const key = 'publicId' as 'publicId';
  const value = to.params.publicId as string;
  const orderBy = { key, value };
  const tournament = await getTournament({ orderBy });

  if (!tournament.name) return false;
  to.params = { ...to.params, tournament };
  return true;
}
