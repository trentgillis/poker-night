import { Layout } from '@/components';

import LeaderBoardTable from './components/LeaderboardTable';

export interface LeaderboardUser {
  id: number;
  first_name: string;
  last_name: string;
  total_winnings: number;
  cash_games_count: number;
}

interface LeaderboardIndexProps {
  users: LeaderboardUser[];
}

export default function LeaderboardIndex({ users }: LeaderboardIndexProps) {
  console.log(users);
  return (
    <Layout>
      <h1 className="font-medium">Leaderboard</h1>
      <LeaderBoardTable users={users} />
    </Layout>
  );
}
