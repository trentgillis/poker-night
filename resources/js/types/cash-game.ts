export interface CashGame {
  id: number;
  date: string;
  status: CashGameStatus;
  stakes: CashGameStakes;
  results?: CashGameResult[];
}

export interface CashGamePlayer {
  id: number;
  first_name: string;
  last_name: string;
  game_result: CashGameResult;
}

export interface CashGameResult {
  buy_in_amt: number;
  cash_out_amt: number;
}

export type CashGameStatus = 'in_progress' | 'complete';

export type CashGameStakes = '10NL' | '50NL' | 'NL1';
