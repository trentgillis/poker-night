import { CashGame } from '@/types/cash-game';
import { getStakesString } from '@/util';
import { router } from '@inertiajs/react';

interface CashGamesTableRowProps {
  cashGame: CashGame;
}

export default function CashGamesTableRow({
  cashGame,
}: CashGamesTableRowProps) {
  function handleRowClick() {
    router.visit(route('cash-game', cashGame.id));
  }

  return (
    <tr onClick={handleRowClick}>
      <td className="px-3 py-4 text-xs font-medium whitespace-nowrap">
        {new Date(cashGame.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          timeZone: 'UTC',
        })}
      </td>
      <td className="px-1.5 py-4 text-left text-xs whitespace-nowrap">
        {getStakesString(cashGame.stakes, true)}
      </td>
      <td className="px-1.5 py-4 text-center text-xs whitespace-nowrap">10</td>
    </tr>
  );
}
