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
  const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
    {},
  );
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  return (
    <Drawer open={drawerOpen} onOpenChange={(isOpen) => setDrawerOpen(isOpen)}>
      <DrawerTrigger asChild>
        <Button className="w-full">Create Game</Button>
      </DrawerTrigger>
      <DrawerContent aria-describedby="">
        <DrawerHeader>
          <DrawerTitle>Create Cash Game</DrawerTitle>
        </DrawerHeader>
        <CashGameForm
          errors={formErrors}
          setErrors={setFormErrors}
          setDrawerOpen={setDrawerOpen}
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button onClick={() => setFormErrors({})} variant="outlined">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
