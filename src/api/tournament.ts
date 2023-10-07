import { v4 as uuid } from 'uuid';
import db, { ref, set } from '@/plugins/firebase';
import { Game, Tournament } from '@/types/tournament';
import { generateBrackets } from '@/utils/generate-brackets';

type CreateTournamentDto = Pick<Tournament, 'name' | 'competitors' | 'points'>;

export const createTournament = (dto: CreateTournamentDto) => {
  const schedule: Game[] = generateBrackets(dto.competitors);
  const location = ref(db, `tournament/${uuid()}`);
  const data: Tournament = { ...dto, schedule };
  return set(location, data);
};
