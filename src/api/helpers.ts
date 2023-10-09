import { User } from '@auth0/auth0-vue';

export const getTournamentId = (user: User) => {
  if (!user.value?.sub) return;
  return user.value.sub;
};
