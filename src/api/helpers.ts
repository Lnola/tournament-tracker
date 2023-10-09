import { User } from '@auth0/auth0-vue';
import { Query } from 'firebase/database';
import { get } from '@/plugins/firebase';

export const getTournamentId = (user: User) => {
  if (!user.value?.sub) return;
  return user.value.sub;
};

export const getValue = async (snapshotRef: Query) => {
  const snapshot = await get(snapshotRef);
  if (!snapshot.exists()) throw Error("The data doesn't exist");
  return snapshot.val();
};
