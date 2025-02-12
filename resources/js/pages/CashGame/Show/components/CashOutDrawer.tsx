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

import CashOutForm from './CashOutForm';

export default function CashOutDrawer() {
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
        <CashOutForm />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
