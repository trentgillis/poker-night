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

import RebuyForm from './RebuyForm';

export default function RebuyDrawer() {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  return (
    <Drawer open={drawerOpen} onOpenChange={(isOpen) => setDrawerOpen(isOpen)}>
      <DrawerTrigger asChild>
        <Button variant="primary" className="text-background w-full bg-white">
          Rebuy
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Rebuy</DrawerTitle>
          <DrawerDescription>Add money to your rebuy amount</DrawerDescription>
        </DrawerHeader>
        <RebuyForm setDrawerOpen={setDrawerOpen} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
