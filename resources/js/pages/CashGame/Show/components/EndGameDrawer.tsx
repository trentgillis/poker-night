import { router } from '@inertiajs/react';
import React from 'react';

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
import { CashGame } from '@/types/cash-game';

interface EndGameDrawerProps {
  cashGame: CashGame;
}

export default function EndGameDrawer({ cashGame }: EndGameDrawerProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function handleConfirm() {
    router.post(
      route('cash-games.end', { cashGame }),
      {},
      {
        onSuccess: () => setIsOpen(false),
      },
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DrawerTrigger asChild>
        <Button variant="primary" className="w-full">
          End Game
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>End Game</DrawerTitle>
          <DrawerDescription>
            Are you sure you want to end the current game?
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full px-4">
          <Button onClick={handleConfirm} className="w-full">
            Confirm
          </Button>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
