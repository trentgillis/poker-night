interface GameHeaderProps {
  gameStatus: string;
  gameType: string;
  stakes: string;
  datePlayed: Date;
}

export default function GameHeader({
  gameType,
  gameStatus,
  stakes,
  datePlayed,
}: GameHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="order-2 text-lg font-semibold">
        {stakes} {gameType}
      </h1>
      <div className="order-1 flex items-center gap-2">
        <span className="text-white-muted text-xs">
          {datePlayed.toLocaleDateString('en-us', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        {gameStatus === 'in_progress' && (
          <span className="grid content-center rounded-sm bg-green-500/10 px-1.5 py-0.5 text-[8px] text-green-400/80 ring-1 ring-green-400/80">
            In Progress
          </span>
        )}
      </div>
    </div>
  );
}
