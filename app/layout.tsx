import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavLink } from "@/components/nav-link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spire Run Tracker",
  description: "Review your Slay the Spire 2 runs, track wins and losses, and compare results across characters.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <header>
          <nav aria-label="Main" className="flex gap-6 p-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/runs">Run History</NavLink>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
