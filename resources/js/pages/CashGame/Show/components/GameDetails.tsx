import { CashGameStakes } from '@/types/cash-game';
import { getStakesString } from '@/util';

interface GameDetailsProps {
  gameType: string;
  stakes: CashGameStakes;
  numberOfPlayers: number;
}

export default function GameDetails({
  gameType,
  stakes,
  numberOfPlayers,
}: GameDetailsProps) {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-white-muted text-[10px]">Game Type</span>
        <span className="text-xs">{gameType}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-white-muted text-[10px]">Stakes</span>
        <span className="text-xs">{getStakesString(stakes, true)}</span>
      </div>
      <div className="flex w-full flex-col items-center gap-1">
        <span className="text-white-muted text-[10px]">Number of Players</span>
        <span className="text-xs">{numberOfPlayers}</span>
      </div>
    </div>
  );
}
