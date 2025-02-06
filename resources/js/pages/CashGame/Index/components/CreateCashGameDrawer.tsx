import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components';
import CashGameForm from '@/pages/CashGame/Index/components/CashGameForm';
import React from 'react';

export default function CreateCashGameDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  return (
    <Drawer open={drawerOpen} onOpenChange={(isOpen) => setDrawerOpen(isOpen)}>
      <DrawerTrigger asChild>
        <Button className="w-full">Create Game</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Cash Game</DrawerTitle>
        </DrawerHeader>
        <CashGameForm setDrawerOpen={setDrawerOpen} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
