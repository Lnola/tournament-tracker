import { v4 as uuid } from 'uuid';
import db, { ref, set } from '@/plugins/firebase';

type CreateTournamentDto = {
  name: string;
  competitors: string[];
  points: {
    win: number;
    draw: number;
    loss: number;
  };
};

export const createTournament = (dto: CreateTournamentDto) => {
  const location = ref(db, `tournament/${uuid()}`);
  return set(location, dto);
};
