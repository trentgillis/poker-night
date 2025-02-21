interface ProfileDetailsProps {
  totalWinnings: number;
  biggestWin: number;
  cashGamesCount: number;
}

export default function ProfileDetails({
  totalWinnings,
  biggestWin,
  cashGamesCount,
}: ProfileDetailsProps) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <div className="flex justify-start">
        <div className="flex flex-col gap-1">
          <span className="text-white-muted text-[10px]">Total Winnings</span>
          <span
            className={`text-center text-xs ${totalWinnings >= 0 ? 'text-green-400' : 'text-red-400'}`}
          >
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'usd',
            }).format(Math.abs(totalWinnings / 100))}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-1">
          <span className="text-white-muted text-[10px]">Biggest Win</span>
          <span
            className={`text-center text-xs ${biggestWin >= 0 ? 'text-green-400' : 'text-red-400'}`}
          >
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'usd',
            }).format(Math.abs(biggestWin / 100))}
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col gap-1">
          <span className="text-white-muted text-[10px]"># Games Played</span>
          <span className="text-center text-xs">{cashGamesCount}</span>
        </div>
      </div>
    </div>
  );
}
