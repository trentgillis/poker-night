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

export function getStakesLabelStrings(stakes: CashGameStakes): string[] {
  switch (stakes) {
    case '10NL':
      return ['$5.00', '$10.00'];
    case '50NL':
      return ['$25.00', '$50.00'];
    case 'NL1':
      return ['$50.00', '$100.00'];
    default:
      return [];
  }
}

export function getStakesValueStrings(stakes: CashGameStakes): string[] {
  switch (stakes) {
    case '10NL':
      return ['500', '1000'];
    case '50NL':
      return ['2500', '5000'];
    case 'NL1':
      return ['5000', '10000'];
    default:
      return [];
  }
}
