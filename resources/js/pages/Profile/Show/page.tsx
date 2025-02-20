import { Avatar, Layout } from '@/components';
import { User } from '@/types';
import { CashGameResult } from '@/types/cash-game';

interface ShowProfilePageProps {
  profile: User & {
    totalWinnings: number;
    biggestWin: number;
    cash_games_count: number;
    cash_game_results: CashGameResult[];
  };
}

export default function ShowProfilePage({ profile }: ShowProfilePageProps) {
  return (
    <Layout>
      <div className="mt-4 flex w-full items-center gap-3">
        <Avatar className="h-6 w-6" imgSrc="" fallback={'TG'} />
        <h2>
          {profile.first_name} {profile.last_name}
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-5">
        <div className="flex justify-start">
          <div className="flex flex-col gap-1">
            <span className="text-white-muted text-[10px]">Total Winnings</span>
            <span
              className={`text-center text-xs ${profile.totalWinnings >= 0 ? 'text-green-400' : 'text-red-400'}`}
            >
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'usd',
              }).format(Math.abs(profile.totalWinnings / 100))}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-1">
            <span className="text-white-muted text-[10px]">Biggest Win</span>
            <span
              className={`text-center text-xs ${profile.biggestWin >= 0 ? 'text-green-400' : 'text-red-400'}`}
            >
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'usd',
              }).format(Math.abs(profile.biggestWin / 100))}
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col gap-1">
            <span className="text-white-muted text-[10px]"># Games Played</span>
            <span className="text-center text-xs">
              {profile.cash_games_count}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
