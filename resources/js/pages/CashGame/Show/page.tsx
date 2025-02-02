import { Layout } from '@/components';
import GameDetails from '@/pages/CashGame/Show/components/GameDetails';
import GameHeader from '@/pages/CashGame/Show/components/GameHeader';
import { CashGame } from '@/types/cash-game';

interface CashGameShowProps {
  cash_game: CashGame;
  players: any;
}

export default function CashGameShow({
  cash_game,
  players,
}: CashGameShowProps) {
  console.log(cash_game);
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
      </div>
    </Layout>
  );
}
