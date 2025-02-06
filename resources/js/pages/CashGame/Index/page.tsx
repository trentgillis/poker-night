import { Layout } from '@/components';
import { CashGame } from '@/types/cash-game';

import CashGamesTable from './components/CashGamesTable';
import CreateCashGameDrawer from './components/CreateCashGameDrawer';

interface CashGameIndexPageProps {
  cash_games: CashGame[];
}

export default function CashGamesIndexPage({
  cash_games,
}: CashGameIndexPageProps) {
  return (
    <Layout>
      <div className="space-y-6">
        <h1>Cash Games</h1>
        <CashGamesTable cashGames={cash_games} />
      </div>
      <div className="bg-background fixed bottom-0 left-0 w-full p-4">
        <CreateCashGameDrawer />
      </div>
    </Layout>
  );
}
