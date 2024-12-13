import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { TRPCProvider } from "@/trpc/client";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poker Night",
  description: "",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <TRPCProvider>
          <Navbar />
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}
