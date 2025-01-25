import React from 'react';

import { UserContext } from '@/components/Layout/UserContext';

export function useUser() {
  return React.useContext(UserContext);
}
