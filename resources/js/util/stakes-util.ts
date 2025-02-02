import { CashGameStakes } from '@/types/cash-game';

export function getStakesString(stakes: CashGameStakes, showCurrency = false) {
  switch (stakes) {
    case '10NL':
      return showCurrency ? '5¢/10¢' : '5/10';
    case '50NL':
      return showCurrency ? '25¢/50¢' : '25/50';
    case 'NL1':
      return showCurrency ? '50¢/1$' : '50/1';
    default:
      throw new Error('Invalid stakes passed to getStakesString');
  }
}
