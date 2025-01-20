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
      <td className="whitespace-nowrap px-3 py-4 text-xs font-medium">
        #{rank}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-xs font-medium">
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
        className={`w-28 whitespace-nowrap px-3 py-4 text-center text-xs ${winnings > 0 ? 'text-green-400' : 'text-red-400'}`}
      >
        {Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'usd',
        }).format(Math.abs(winnings / 100))}
      </td>
      <td className="w-16 whitespace-nowrap px-3 py-4 text-center text-xs">
        {gamesPlayed}
      </td>
    </tr>
  );
}
