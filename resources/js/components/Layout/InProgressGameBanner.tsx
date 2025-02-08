import { CashGame } from '@/types/cash-game';
import { router } from '@inertiajs/react';
import { ChevronsRight } from 'lucide-react';

interface InProgressGameBannerProps {
  inProgressGame: CashGame | null;
}

export default function InProgressGameBanner({
  inProgressGame,
}: InProgressGameBannerProps) {
  function handleClick() {
    router.post(route('cash-game.join', { cashGame: inProgressGame }));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="border-border flex w-full items-center rounded-md border px-3 py-4"
    >
      <div className="flex flex-auto flex-col items-start gap-1">
        <div className="text-sm font-semibold">Game currently in progress</div>
        <div className="text-white-muted text-xs">5/10 No Limit Hold'em</div>
      </div>
      <div className="flex items-center justify-center gap-0.5">
        <span className="text-xs font-medium">Join Game</span>
        <ChevronsRight className="h-4 w-4" />
      </div>
    </button>
  );
}
