import { v4 as uuid } from 'uuid';
import db, { query, ref, set } from '@/plugins/firebase';
import { getValue } from './helpers';
import { generateBrackets } from '@/utils/generate-brackets';
import { Round, Tournament } from '@/types/tournament';

type CreateTournamentDto = Pick<Tournament, 'name' | 'competitors' | 'points'>;

export const getTournament = async (tournamentId: string) => {
  const tournamentRef = query(ref(db, `tournament/${tournamentId}`));
  return getValue(tournamentRef);
};

export const createTournament = (
  tournamentId: string,
  dto: CreateTournamentDto,
) => {
  const publicId = uuid();
  const schedule: Round[] = generateBrackets(dto.competitors);
  const location = ref(db, `tournament/${tournamentId}`);
  const data: Tournament = { ...dto, publicId, schedule };
  return set(location, data);
};
