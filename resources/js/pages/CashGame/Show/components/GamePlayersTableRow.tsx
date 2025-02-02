import { Avatar } from '@/components';
import { CashGamePlayer } from '@/types/cash-game';

interface GamePlayersTableRowProps {
  player: CashGamePlayer;
}

export default function GamePlayersTableRow({
  player,
}: GamePlayersTableRowProps) {
  const playerWinnings =
    player.game_result.cash_out_amt - player.game_result.buy_in_amt;

  return (
    <tr>
      <td className="px-1.5 py-4 text-center text-xs font-medium whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Avatar
            className="h-6 w-6"
            imgSrc=""
            fallback={`${player.first_name.slice(0, 1)}${player.last_name.slice(0, 1)}`}
          />
          <span>
            {player.first_name} {player.last_name.slice(0, 1)}.
          </span>
        </div>
      </td>
      <td className="w-20 px-1.5 py-4 text-center font-mono text-xs whitespace-nowrap">
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
        }).format(Math.abs(player.game_result.buy_in_amt / 100))}
      </td>
      <td className="w-20 px-1.5 py-4 text-center font-mono text-xs whitespace-nowrap">
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
        }).format(Math.abs(player.game_result.cash_out_amt / 100))}
      </td>
      <td
        className={`w-20 py-4 pr-3 pl-1.5 text-center font-mono text-xs whitespace-nowrap ${playerWinnings > 0 ? 'text-green-400' : 'text-red-400'}`}
      >
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
        }).format(Math.abs(playerWinnings / 100))}
      </td>
    </tr>
  );
}
