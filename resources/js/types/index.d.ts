export interface User {
  id: number;
  first_name: string;
  last_name: string;
  is_admin: boolean;
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
};
