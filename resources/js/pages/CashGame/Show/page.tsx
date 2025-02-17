import { Layout } from '@/components';
import { CashGame, CashGamePlayer } from '@/types/cash-game';

import { useUser } from '@/hooks';
import CashOutDrawer from './components/CashOutDrawer';
import GameDetails from './components/GameDetails';
import GameHeader from './components/GameHeader';
import GamePlayersTable from './components/GamePlayersTable';
import RebuyDrawer from './components/RebuyDrawer';

interface CashGameShowPageProps {
  cash_game: CashGame;
  players: CashGamePlayer[];
}

export default function CashGameShowPage({
  cash_game,
  players,
}: CashGameShowPageProps) {
  const user = useUser();

  const player = players.find((player) => {
    return player.id === user.id;
  });

  const playerCashedOut = !!player?.game_result.cash_out_amt;

  return (
    <Layout>
      <div className="grow space-y-6">
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
      {player && !playerCashedOut && cash_game.status === 'in_progress' && (
        <div className="bg-background sticky bottom-0 grid w-full grid-cols-2 gap-2 py-4">
          <CashOutDrawer player={player} />
          <RebuyDrawer />
        </div>
      )}
    </Layout>
  );
}
