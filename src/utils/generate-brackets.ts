import { Competitor, Game } from '@/types/tournament';

export const generateBrackets = (competitors: Competitor[]): Game[] => {
  return competitors.flatMap((home, i) =>
    competitors.slice(i + 1).map((away) => ({ home, away })),
  );
};
