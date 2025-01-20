import { Layout } from '@/components';
import LeaderBoardTable from '@/pages/Leaderboard/components/LeaderboardTable';

const mockUsers = [
  {
    id: 1,
    firstName: 'Chris',
    lastName: 'Poitras',
    winnings: 8_435,
    gamesPlayed: 14,
  },
  {
    id: 2,
    firstName: 'Trent',
    lastName: 'Gillis',
    winnings: -2_345,
    gamesPlayed: 16,
  },
];
export default function LeaderboardPage() {
  return (
    <Layout>
      <h1 className="font-medium">Leaderboard</h1>
      <LeaderBoardTable users={mockUsers} />
    </Layout>
  );
}
