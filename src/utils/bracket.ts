import { Required } from 'utility-types';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import values from 'lodash/values';
import reduce from 'lodash/reduce';
import findKey from 'lodash/findkey';
import { Points, Round, Game } from '@/types/tournament';

type RequiredGame = Required<Game>;

const getGamesPlayed = (
  competitor: string,
  schedule: Round[],
): RequiredGame[] => {
  const gamesPlayed = filter(schedule.flat(), (game) => {
    const competitorPlayedInGame = includes(values(game), competitor);
    const scoreWasRecorded = 'homeScore' in game && 'awayScore' in game;
    return competitorPlayedInGame && scoreWasRecorded;
  });
  return gamesPlayed as RequiredGame[];
};

export const getGamesPlayedCount = (
  competitor: string,
  schedule: Round[],
): number => {
  return getGamesPlayed(competitor, schedule).length;
};

export const getPoints = (
  competitor: string,
  schedule: Round[],
  points: Points,
): number => {
  const gamesPlayed = getGamesPlayed(competitor, schedule);
  const competitorPoints = reduce(
    gamesPlayed,
    (total: number, game: RequiredGame) => {
      const key = findKey(game, (value) => value === competitor);
      let thisTeam: keyof Game = 'homeScore';
      let otherTeam: keyof Game = 'awayScore';
      if (key === 'away') {
        thisTeam = 'awayScore';
        otherTeam = 'homeScore';
      }

      if (game[thisTeam] > game[otherTeam]) return total + points.win;
      if (game[thisTeam] < game[otherTeam]) return total + points.loss;
      return total + points.draw;
    },
    0,
  );
  return competitorPoints;
};
