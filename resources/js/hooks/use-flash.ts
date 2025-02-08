import { usePage } from '@inertiajs/react';

export function useFlash() {
  const flash = usePage().props.flash;

  return flash;
}
