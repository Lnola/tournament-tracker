import { useAuth0 } from '@auth0/auth0-vue';

export const getTournamentId = () => {
  const { user } = useAuth0();
  if (!user.value?.sub) return;
  return user.value.sub;
};
