"use client";

import React from "react";
import { Diamond, DiamondPlus, Gem, Spade } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-foreground">
      <div className="flex h-14 items-center px-4">
        <Link className="flex items-center gap-1" href="/">
          <Spade className="w-5 h-5 stroke-3" />
          <span className="font-bold tracking-wide">
            <span className="text-primary">Poker</span>Night
          </span>
        </Link>
      </div>
    </header>
  );
}
