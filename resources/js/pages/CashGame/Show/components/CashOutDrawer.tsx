import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components';
import { CashGamePlayer } from '@/types/cash-game';

import CashOutForm from './CashOutForm';

interface CashOutDrawerProps {
  player: CashGamePlayer;
}

export default function CashOutDrawer({ player }: CashOutDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="primary" className="text-background w-full bg-white">
          Cash Out
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Cash Out</DrawerTitle>
          <DrawerDescription>Cash out of the current game</DrawerDescription>
        </DrawerHeader>
        <CashOutForm player={player} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
