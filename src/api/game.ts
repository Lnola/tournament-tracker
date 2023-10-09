import { Required } from 'utility-types';
import db, { ref, set } from '@/plugins/firebase';
import { Game } from '@/types/tournament';

type UpdateGameScoresDto = Required<Game>;

export const updateGameScores = (
  tournamentId: string,
  roundId: number,
  gameId: number,
  dto: UpdateGameScoresDto,
) => {
  const location = `tournament/${tournamentId}/schedule/${roundId}/${gameId}`;
  const reference = ref(db, location);
  const data = dto;
  return set(reference, data);
};
