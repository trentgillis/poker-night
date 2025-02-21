import { CashGame } from '@/types/cash-game';
import { getStakesString } from '@/util';
import { router } from '@inertiajs/react';

interface ProfileGamesTableRowProps {
  cashGame: CashGame;
}

export default function ProfileGamesTableRow({
  cashGame,
}: ProfileGamesTableRowProps) {
  const gameResult =
    (cashGame.results?.[0].cash_out_amt ?? 0) -
    (cashGame.results?.[0].buy_in_amt ?? 0);

  function handleRowClick() {
    router.visit(route('cash-games.show', cashGame.id));
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
      <td
        className={`px-1.5 py-4 text-center text-xs whitespace-nowrap ${gameResult >= 0 ? 'text-green-400' : 'text-red-400'}`}
      >
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
        }).format(Math.abs(gameResult / 100))}
      </td>
    </tr>
  );
}
