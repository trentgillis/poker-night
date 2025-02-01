import { LeaderboardUser } from '@/pages/Leaderboard/Index/LeaderboardIndex';

import LeaderboardTableRow from './LeaderboardTableRow';

interface LeaderboardTableProps {
  users: LeaderboardUser[];
}

export default function LeaderBoardTable({ users }: LeaderboardTableProps) {
  return (
    <div className="mt-2 py-2">
      <table className="divide-y-zinc-400 min-w-full divide-y divide-zinc-400/50">
        <thead>
          <tr>
            <th scope="col" className="w-0 p-3" />
            <th
              scope="col"
              className="p-3 text-left text-xs font-medium text-zinc-300"
            >
              Player
            </th>
            <th
              scope="col"
              className="w-28 p-3 text-center text-xs font-medium text-zinc-300"
            >
              Winnings
            </th>
            <th
              scope="col"
              className="w-24 p-3 text-center text-xs font-medium text-zinc-300"
            >
              # Games
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-400/50">
          {users.map((user, index) => (
            <LeaderboardTableRow
              key={user.id}
              rank={index + 1}
              firstName={user.first_name}
              lastName={user.last_name}
              winnings={user.total_winnings}
              gamesPlayed={user.cash_games_count}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
