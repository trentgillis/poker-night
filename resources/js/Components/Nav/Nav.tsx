import { Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';
import React from 'react';

import { Button, Logo } from '@/components';

import { Link } from '@inertiajs/react';
import NavLink from './NavLink';

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ menuOpen, setMenuOpen }: NavProps) {
  return (
    <Transition show={menuOpen}>
      <div className="relative z-50" role="dialog" aria-modal="true">
        <TransitionChild>
          <div
            className="fixed inset-0 bg-zinc-950/80 transition duration-300 ease-linear data-[closed]:opacity-0"
            aria-hidden="true"
          ></div>
        </TransitionChild>
        <div className="fixed inset-0 flex justify-end">
          <TransitionChild>
            <div className="relative ml-16 flex w-full max-w-xs flex-1 transform transition ease-in-out data-[closed]:translate-x-full">
              <TransitionChild>
                <div className="absolute right-0 top-0 flex w-16 justify-center pt-5 transition duration-300 ease-in-out">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X size={20} strokeWidth={1} />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-4 overflow-y-auto border-l border-zinc-500/50 bg-zinc-950 px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <Logo height={20} />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-2">
                        <NavLink href="/">Leaderboard</NavLink>
                        <NavLink href="/games">Previous Games</NavLink>
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <div className="-mx-2 flex flex-1 flex-col gap-2">
                        <Button asChild>
                          <Link href="/register">Register</Link>
                        </Button>
                        <Button variant="outlined" asChild>
                          <Link href="/login">Login</Link>
                        </Button>
                      </div>
                    </li>
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
