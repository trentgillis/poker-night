import { CashGame } from '@/types/cash-game';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  is_admin: boolean;
  email?: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
  flash: {
    success?: string;
    error?: string;
    message?: string;
  };
  in_progress: CashGame | null;
  user_joined_game: boolean;
};
