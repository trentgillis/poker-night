import GamePlayersTableRow from '@/pages/CashGame/Show/components/GamePlayersTableRow';
import { CashGamePlayer } from '@/types/cash-game';

interface GamePlayersTableProps {
  players: CashGamePlayer[];
}

export default function GamePlayersTable({ players }: GamePlayersTableProps) {
  return (
    <div className="mt-2 py-2">
      <table className="divide-y-zinc-400 min-w-full divide-y divide-zinc-400/50">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-1.5 py-3 text-left text-xs font-medium text-zinc-300"
            >
              Player
            </th>
            <th
              scope="col"
              className="w-20 px-1.5 py-3 text-left text-xs font-medium text-zinc-300"
            >
              Buy-in
            </th>
            <th
              scope="col"
              className="w-20 px-1.5 py-3 text-left text-xs font-medium text-zinc-300"
            >
              Cash Out
            </th>
            <th
              scope="col"
              className="w-20 py-3 pr-3 pl-1.5 text-left text-xs font-medium text-zinc-300"
            >
              Winnings
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-400/50">
          {players.map((player) => (
            <GamePlayersTableRow key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
