interface GameDetailsProps {
  gameType: string;
  stakes: string;
  numberOfPlayers: number;
}

export default function GameDetails({
  gameType,
  stakes,
  numberOfPlayers,
}: GameDetailsProps) {
  return (
    <div className="mt-6 grid grid-cols-3 gap-5">
      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-white-muted text-[10px]">Game Type</span>
        <span className="text-xs">{gameType}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-white-muted text-[10px]">Stakes</span>
        <span className="text-xs">{stakes}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-white-muted text-[10px]">Number of Players</span>
        <span className="text-xs">{numberOfPlayers}</span>
      </div>
    </div>
  );
}
