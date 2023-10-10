import { v4 as uuid } from 'uuid';
import db, {
  equalTo,
  orderByChild,
  orderByKey,
  query,
  ref,
  set,
} from '@/plugins/firebase';
import { getValue } from './helpers';
import { generateBrackets } from '@/utils/generate-brackets';
import { Round, Tournament } from '@/types/tournament';
import { QueryConstraint } from 'firebase/database';

type GetTournamentsOrderBy = {
  key: 'publicId';
  value: string;
};
type GetTournamentsParams = {
  tournamentId?: string;
  orderBy?: GetTournamentsOrderBy;
};
export type CreateTournamentDto = Pick<
  Tournament,
  'name' | 'competitors' | 'points'
>;

export const getTournaments = async ({
  tournamentId = '',
  orderBy,
}: GetTournamentsParams): Promise<Tournament[]> => {
  const params = [
    tournamentId.length && orderByKey(),
    tournamentId.length && equalTo(tournamentId),
    orderBy && orderByChild(orderBy.key),
    orderBy && equalTo(orderBy.value),
  ].filter(Boolean) as QueryConstraint[];
  const tournamentRef = query(ref(db, `tournament`), ...params);
  const tournament = await getValue(tournamentRef);
  return Object.values(tournament);
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
