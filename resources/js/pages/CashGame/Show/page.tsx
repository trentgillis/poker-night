import { Layout } from '@/components';
import { CashGame, CashGamePlayer } from '@/types/cash-game';
import { usePage } from '@inertiajs/react';

import CashOutDrawer from './components/CashOutDrawer';
import GameDetails from './components/GameDetails';
import GameHeader from './components/GameHeader';
import GamePlayersTable from './components/GamePlayersTable';
import RebuyDrawer from './components/RebuyDrawer';

interface CashGameShowProps {
  cash_game: CashGame;
  players: CashGamePlayer[];
}

export default function CashGameShowPage({
  cash_game,
  players,
}: CashGameShowProps) {
  const page = usePage();

  return (
    <Layout>
      <div className="space-y-6">
        <GameHeader
          gameType="No Limit Hold'em"
          gameStatus={cash_game.status}
          stakes={cash_game.stakes}
          datePlayed={new Date(cash_game.date)}
        />
        <GameDetails
          gameType="No Limit Hold'em"
          stakes={cash_game.stakes}
          numberOfPlayers={players.length}
        />
        <GamePlayersTable players={players} />
      </div>
      {page.props.user_joined_game && (
        <div className="bg-background fixed bottom-0 left-0 grid w-full grid-cols-2 gap-2 p-4">
          <CashOutDrawer />
          <RebuyDrawer />
        </div>
      )}
    </Layout>
  );
}
