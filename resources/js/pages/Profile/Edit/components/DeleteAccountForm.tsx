import { router } from '@inertiajs/react';
import { FormProvider, useForm } from 'react-hook-form';

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
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@/components';
import React from 'react';

interface DeleteAccountFormData {
  delete_confirm_password: string;
}

interface DeleteAccountFormProps {
  errors: Record<string, string>;
}

export default function DeleteAccountForm({ errors }: DeleteAccountFormProps) {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState<boolean>(false);
  const form = useForm<DeleteAccountFormData>({
    defaultValues: {
      delete_confirm_password: '',
    },
  });

  function onSubmit(formData: DeleteAccountFormData) {
    router.delete(route('profile.destroy'), {
      data: formData as any,
      onSuccess: () => setDrawerIsOpen(false),
    });
  }

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-6 pt-8 pb-10">
        <div>
          <h2 className="text-base/7 font-semibold">Delete Account</h2>
          <p className="text-white-muted mt-1 text-xs/4">
            You can delete your account here. Once you delete your account, all
            information related to the account will also be deleted. This action
            cannot be undone.
          </p>
        </div>
        <Drawer
          open={drawerIsOpen}
          onOpenChange={(isOpen) => setDrawerIsOpen(isOpen)}
        >
          <DrawerTrigger asChild>
            <Button className="w-fit px-4">Delete Account</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Delete Account</DrawerTitle>
              <DrawerDescription>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name="delete_confirm_password"
                  errors={errors}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" {...field} />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Confirm
                </Button>
              </form>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outlined">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </FormProvider>
  );
}
