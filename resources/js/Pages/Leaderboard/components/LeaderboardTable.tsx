interface LeaderboardTableProps {
  users: any[];
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
        <tbody>
          <tr>
            <td className="whitespace-nowrap px-3 py-4 text-xs font-medium">
              #1
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-xs font-medium">
              <div className="flex items-center gap-1">Chris P.</div>
            </td>
            <td className="w-28 whitespace-nowrap px-3 py-4 text-center text-xs text-green-400">
              $84.35
            </td>
            <td className="w-16 whitespace-nowrap px-3 py-4 text-center text-xs">
              14
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
