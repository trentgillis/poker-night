import { useUser } from '@/hooks';
import { CashGame } from '@/types/cash-game';
import { getStakesString } from '@/util';

interface GameHeaderProps {
  gameType: string;
  cashGame: CashGame;
}

export default function GameHeader({ gameType, cashGame }: GameHeaderProps) {
  const user = useUser();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="order-2 text-lg font-semibold">
        {getStakesString(cashGame.stakes)} {gameType}
      </h1>
      <div className="order-1 flex items-center gap-2">
        <span className="text-white-muted text-xs">
          {new Date(cashGame.date).toLocaleDateString('en-us', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'utc',
          })}
        </span>
        {cashGame.status === 'in_progress' && (
          <span className="grid content-center rounded-sm bg-green-500/10 px-1.5 py-0.5 text-[8px] text-green-400/80 ring-1 ring-green-400/80">
            In Progress
          </span>
        )}
      </div>
    </div>
  );
}
