export interface CashGame {
  id: number;
  date: string;
  status: CashGameStatus;
  stakes: CashGameStakes;
}

export type CashGameStatus = 'in_progress' | 'complete';

export type CashGameStakes = '10NL' | '50NL' | 'NL1';
