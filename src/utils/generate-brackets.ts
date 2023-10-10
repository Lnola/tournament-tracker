import { Competitor, Round } from '@/types/tournament';

const BYE: Competitor = 'BYE';
export const generateBrackets = (competitors: Competitor[]): Round[] => {
  const schedule = [];
  const competitorsCopy = [...competitors];

  if (competitorsCopy.length % 2 !== 0) competitorsCopy.push(BYE);
  for (let round = 1; round < competitorsCopy.length; round++) {
    const roundMatches = [];

    for (let i = 0, j = competitorsCopy.length - 1; i < j; i++, j--) {
      const [home, away] = [competitorsCopy[i], competitorsCopy[j]];
      if (home === BYE || away === BYE) continue;
      roundMatches.push({ home, away });
    }
    schedule.push(roundMatches);

    competitorsCopy.splice(1, 0, competitorsCopy.pop() || '');
  }

  return schedule;
};
