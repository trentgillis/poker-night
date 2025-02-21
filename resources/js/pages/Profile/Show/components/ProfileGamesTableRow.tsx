import { CashGame } from '@/types/cash-game';
import { getStakesString } from '@/util';

interface ProfileGamesTableRowProps {
  cashGame: CashGame;
}

export default function ProfileGamesTableRow({
  cashGame,
}: ProfileGamesTableRowProps) {
  function handleRowClick() {}

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
