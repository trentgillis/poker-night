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
import React from 'react';

import CashOutForm from './CashOutForm';

interface CashOutDrawerProps {
  player: CashGamePlayer;
}

export default function CashOutDrawer({ player }: CashOutDrawerProps) {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  return (
    <Drawer open={drawerOpen} onOpenChange={(isOpen) => setDrawerOpen(isOpen)}>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="w-full">
          Cash Out
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Cash Out</DrawerTitle>
          <DrawerDescription>Cash out of the current game</DrawerDescription>
        </DrawerHeader>
        <CashOutForm player={player} setDrawerOpen={setDrawerOpen} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
