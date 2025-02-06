import { usePage } from '@inertiajs/react';

export function useUser() {
  const page = usePage();

  return page.props.auth.user;
}
