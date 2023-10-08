export type Competitor = string;

export type Game = {
  home: Competitor;
  away: Competitor;
  homeScore?: number;
  awayScore?: number;
};

export type Round = Game[];

export type Points = {
  win: number;
  draw: number;
  loss: number;
};

export type Tournament = {
  publicId: string;
  name: string;
  competitors: Competitor[];
  points: Points;
  schedule: Round[];
};
