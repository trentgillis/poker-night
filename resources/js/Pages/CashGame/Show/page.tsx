import { Layout } from '@/components';

interface CashGameShowProps {
  cash_game: any;
  players: any;
}

export default function CashGameShow({
  cash_game,
  players,
}: CashGameShowProps) {
  console.log(cash_game);
  console.log(players);

  return <Layout>CashGameShow</Layout>;
}
