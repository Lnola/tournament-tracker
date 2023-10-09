import { v4 as uuid } from 'uuid';
import db, { get, child, ref, set } from '@/plugins/firebase';
import { Round, Tournament } from '@/types/tournament';
import { generateBrackets } from '@/utils/generate-brackets';

type CreateTournamentDto = Pick<Tournament, 'name' | 'competitors' | 'points'>;

export const getTournament = async (tournamentId: string) => {
  const snapshot = await get(child(ref(db), `tournament/${tournamentId}`));
  if (!snapshot.exists()) throw Error("The data doesn't exist");
  return snapshot.val();
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
