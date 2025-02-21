import { Avatar, Layout } from '@/components';
import ProfileDetails from '@/pages/Profile/Show/components/ProfileDetails';
import ProfileGamesTable from '@/pages/Profile/Show/components/ProfileGamesTable';
import { User } from '@/types';
import { CashGame, CashGameResult } from '@/types/cash-game';

interface ShowProfilePageProps {
  profile: User & {
    totalWinnings: number;
    biggestWin: number;
    cash_games_count: number;
    cash_game_results: CashGameResult[];
    cash_games: CashGame[];
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
      <ProfileDetails
        totalWinnings={profile.totalWinnings}
        biggestWin={profile.biggestWin}
        cashGamesCount={profile.cash_games_count}
      />
      <ProfileGamesTable cashGames={profile.cash_games} />
    </Layout>
  );
}
