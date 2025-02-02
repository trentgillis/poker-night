import { Layout } from '@/components';

interface CashGameIndexProps {
  cash_games: any;
}

export default function CashGamesIndex({ cash_games }: CashGameIndexProps) {
  return <Layout>Cash game index</Layout>;
}
