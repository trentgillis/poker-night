import { CashGameStakes } from '@/types/cash-game';

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
