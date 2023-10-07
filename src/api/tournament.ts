import db, { ref, set } from '@/plugins/firebase';
import { Game, Tournament } from '@/types/tournament';
import { generateBrackets } from '@/utils/generate-brackets';

type CreateTournamentDto = Pick<Tournament, 'name' | 'competitors' | 'points'>;

export const createTournament = (
  tournamentId: string,
  dto: CreateTournamentDto,
) => {
  const schedule: Game[] = generateBrackets(dto.competitors);
  const location = ref(db, `tournament/${tournamentId}`);
  const data: Tournament = { ...dto, schedule };
  return set(location, data);
};
