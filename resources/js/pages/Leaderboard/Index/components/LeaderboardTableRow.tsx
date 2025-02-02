import { Avatar } from '@/components';

interface LeaderboardTableRowProps {
  rank: number;
  firstName: string;
  lastName: string;
  winnings: number;
  gamesPlayed: number;
}

export default function LeaderboardTableRow({
  rank,
  firstName,
  lastName,
  winnings,
  gamesPlayed,
}: LeaderboardTableRowProps) {
  return (
    <tr>
      <td className="px-3 py-4 text-xs font-medium whitespace-nowrap">
        #{rank}
      </td>
      <td className="px-3 py-4 text-xs font-medium whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Avatar
            className="h-6 w-6"
            imgSrc=""
            fallback={`${firstName.slice(0, 1)}${lastName.slice(0, 1)}`}
          />
          <span>
            {firstName} {lastName.slice(0, 1)}.
          </span>
        </div>
      </td>
      <td
        className={`w-20 px-1.5 py-4 text-center font-mono text-xs whitespace-nowrap ${winnings > 0 ? 'text-green-400' : 'text-red-400'}`}
      >
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
        }).format(Math.abs(winnings / 100))}
      </td>
      <td className="w-22 px-1.5 py-4 text-center text-xs whitespace-nowrap">
        {gamesPlayed}
      </td>
    </tr>
  );
}
