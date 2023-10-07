import { v4 as uuid } from 'uuid';
import db, { ref, set } from '@/plugins/firebase';
import { Tournament } from '@/types/tournament';

type CreateTournamentDto = Pick<Tournament, 'name' | 'competitors' | 'points'>;

export const createTournament = (dto: CreateTournamentDto) => {
  const location = ref(db, `tournament/${uuid()}`);
  const data = dto;
  return set(location, data);
};
