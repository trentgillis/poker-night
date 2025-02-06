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

export default function CreateCashGameDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full">Create Game</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Cash Game</DrawerTitle>
        </DrawerHeader>
        <CashGameForm />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
