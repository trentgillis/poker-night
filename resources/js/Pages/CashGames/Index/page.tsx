import { Layout } from '@/components';

interface CashGameIndexProps {
  cashGames: any;
}

export default function CashGamesIndex({ cashGames }: CashGameIndexProps) {
  console.log(cashGames);

  return <Layout>Cash game index</Layout>;
}
