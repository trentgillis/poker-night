import { Layout } from '@/components';
import LeaderBoardTable from '@/pages/Leaderboard/components/LeaderboardTable';

export default function LeaderboardPage() {
  return (
    <Layout>
      <h1 className="font-medium">Leaderboard</h1>
      <LeaderBoardTable users={[]} />
    </Layout>
  );
}
