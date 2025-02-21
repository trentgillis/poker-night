import ProfileGamesTableRow from '@/pages/Profile/Show/components/ProfileGamesTableRow';
import { CashGame } from '@/types/cash-game';

interface ProfileGamesTableProps {
  cashGames: CashGame[];
}

export default function ProfileGamesTable({
  cashGames,
}: ProfileGamesTableProps) {
  return (
    <div className="mt-2 py-2">
      <table className="divide-y-zinc-400 min-w-full divide-y divide-zinc-400/50">
        <thead>
          <tr>
            <th
              scope="col"
              className="p-3 text-left text-xs font-medium text-zinc-300"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-1.5 py-3 text-left text-xs font-medium text-zinc-300"
            >
              Stakes
            </th>
            <th
              scope="col"
              className="px-1.5 py-3 text-center text-xs font-medium text-zinc-300"
            >
              Winnings
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-400/50">
          {cashGames.map((cashGame) => (
            <ProfileGamesTableRow key={cashGame.id} cashGame={cashGame} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
