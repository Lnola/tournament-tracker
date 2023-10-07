export type Competitor = string;

export type Game = {
  home: Competitor;
  away: Competitor;
  homeScore?: number;
  awayScore?: number;
};

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
  schedule: Game[];
};
