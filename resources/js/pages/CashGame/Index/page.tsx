import { Layout } from '@/components';
import CashGamesTable from '@/pages/CashGame/Index/components/CashGamesTable';
import { CashGame } from '@/types/cash-game';

interface CashGameIndexProps {
  cash_games: CashGame[];
}

export default function CashGamesIndex({ cash_games }: CashGameIndexProps) {
  return (
    <Layout>
      <div className="space-y-6">
        <h1>Cash Games</h1>
        <CashGamesTable cashGames={cash_games} />
      </div>
    </Layout>
  );
}
