import { Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';

import { Button, Logo } from '@/components';

import { useUser } from '@/hooks/useUser';
import { Link } from '@inertiajs/react';
import NavLink from './NavLink';

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ menuOpen, setMenuOpen }: NavProps) {
  const user = useUser();

  useEffect(() => {
    setMenuOpen(false);
  }, [user]);

  return (
    <Transition show={menuOpen}>
      <div className="relative z-50" role="dialog" aria-modal="true">
        <TransitionChild>
          <div
            className="bg-background/80 fixed inset-0 transition duration-300 ease-linear data-closed:opacity-0"
            aria-hidden="true"
          ></div>
        </TransitionChild>
        <div className="fixed inset-0 flex justify-end">
          <TransitionChild>
            <div className="relative ml-16 flex w-full max-w-xs flex-1 transform transition ease-in-out data-closed:translate-x-full">
              <TransitionChild>
                <div className="absolute top-0 right-0 flex w-16 justify-center pt-5 transition duration-300 ease-in-out">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5 hover:cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X size={20} strokeWidth={1} />
                  </button>
                </div>
              </TransitionChild>
              <div className="border-border bg-background flex grow flex-col gap-y-4 overflow-y-auto border-l px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <Logo height={20} />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col">
                    <li>
                      <ul role="list" className="-mx-2 space-y-2">
                        <NavLink routeName="leaderboard">Leaderboard</NavLink>
                        <NavLink routeName="cash-games">Cash Games</NavLink>
                      </ul>
                    </li>
                    <li className="mt-auto pt-4">
                      {user ? (
                        <div className="-mx-2 flex flex-1 flex-col gap-2">
                          <Button variant="link" asChild>
                            <Link method="post" href={route('logout')}>
                              Logout
                            </Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="-mx-2 flex flex-1 flex-col gap-2">
                          <Button asChild>
                            <Link href={route('register')}>Register</Link>
                          </Button>
                          <Button variant="outlined" asChild>
                            <Link href={route('login')}>Login</Link>
                          </Button>
                        </div>
                      )}
                    </li>
                    {user.is_admin && (
                      <li className="pt-4">
                        <div className="-mx-2 flex flex-1 flex-col gap-2">
                          <Button variant="outlined" asChild>
                            <Link href={route('cash-games.create')}>
                              Create Cash Game
                            </Link>
                          </Button>
                        </div>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Transition>
  );
}
