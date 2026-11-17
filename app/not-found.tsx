import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Spire Run Tracker",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1>404 - Neow Not Found</h1>
      <p>
      <Link href={"/"}>Home</Link>
      </p>
    </main>
  );
}