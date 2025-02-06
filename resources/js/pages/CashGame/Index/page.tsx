import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Layout,
} from '@/components';
import CashGamesTable from '@/pages/CashGame/Index/components/CashGamesTable';
import { CashGame } from '@/types/cash-game';

interface CashGameIndexPageProps {
  cash_games: CashGame[];
}

export default function CashGamesIndexPage({
  cash_games,
}: CashGameIndexPageProps) {
  return (
    <Layout>
      <div className="space-y-6">
        <h1>Cash Games</h1>
        <CashGamesTable cashGames={cash_games} />
      </div>
      <div className="bg-background fixed bottom-0 left-0 w-full p-4">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full">Create Game</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Create Cash Game</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outlined">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </Layout>
  );
}
