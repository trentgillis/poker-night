import { usePage } from '@inertiajs/react';

export function useFlash() {
  const flash = usePage().props.flash;

  console.log(flash);

  return flash;
}
