import React from 'react';

import { User } from '@/types';

interface UserContextValue {
  user: User;
}

export const UserContext = React.createContext<UserContextValue>(
  {} as UserContextValue,
);
