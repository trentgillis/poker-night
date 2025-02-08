import { Layout } from '@/components';
import GameDetails from '@/pages/CashGame/Show/components/GameDetails';
import GameHeader from '@/pages/CashGame/Show/components/GameHeader';
import GamePlayersTable from '@/pages/CashGame/Show/components/GamePlayersTable';
import { CashGame, CashGamePlayer } from '@/types/cash-game';

interface CashGameShowProps {
  cash_game: CashGame;
  players: CashGamePlayer[];
}

export default function CashGameShowPage({
  cash_game,
  players,
}: CashGameShowProps) {
  return (
    <Layout>
      <div className="space-y-8">
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
    </Layout>
  );
}
