import filter from 'lodash/filter';
import includes from 'lodash/includes';
import keys from 'lodash/keys';
import values from 'lodash/values';
import { Round } from '@/types/tournament';

const getGamesPlayed = (competitor: string, schedule: Round[]) => {
  const gamesPlayed = filter(schedule.flat(), (game) => {
    const competitorPlayedInGame = includes(values(game), competitor);
    const scoreWasRecorded = includes(keys(game), 'homeScore');
    return competitorPlayedInGame && scoreWasRecorded;
  });
  return gamesPlayed;
};

export const getGamesPlayedCount = (competitor: string, schedule: Round[]) => {
  return getGamesPlayed(competitor, schedule).length;
};
