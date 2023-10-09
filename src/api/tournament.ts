import { v4 as uuid } from 'uuid';
import db, { equalTo, orderByChild, query, ref, set } from '@/plugins/firebase';
import { getValue } from './helpers';
import { generateBrackets } from '@/utils/generate-brackets';
import { Round, Tournament } from '@/types/tournament';
import { QueryConstraint } from 'firebase/database';

type GetTournamentOrderBy = {
  key: 'publicId';
  value: string;
};
type GetTournamentParams = {
  tournamentId?: string;
  orderBy?: GetTournamentOrderBy;
};
type CreateTournamentDto = Pick<Tournament, 'name' | 'competitors' | 'points'>;

export const getTournament = async ({
  tournamentId = '',
  orderBy,
}: GetTournamentParams) => {
  const params = [
    orderBy && orderByChild(orderBy.key),
    orderBy && equalTo(orderBy.value),
  ].filter(Boolean) as QueryConstraint[];
  const tournamentRef = query(ref(db, `tournament/${tournamentId}`), ...params);
  const tournament = await getValue(tournamentRef);
  if (!tournamentId) return Object.values(tournament)[0];
  return tournament;
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
