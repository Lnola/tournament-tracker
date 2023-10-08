import { Competitor, Round } from '@/types/tournament';

const BYE: Competitor = 'BYE';
export const generateBrackets = (competitors: Competitor[]): Round[] => {
  const schedule = [];

  if (competitors.length % 2 !== 0) competitors.push(BYE);
  for (let round = 1; round < competitors.length; round++) {
    const roundMatches = [];

    for (let i = 0, j = competitors.length - 1; i < j; i++, j--) {
      const [home, away] = [competitors[i], competitors[j]];
      if (home === BYE || away === BYE) continue;
      roundMatches.push({ home, away });
    }
    schedule.push(roundMatches);

    competitors.splice(1, 0, competitors.pop() || '');
  }

  return schedule;
};
