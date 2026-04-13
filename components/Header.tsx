"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">
          Teacher Daily Book
        </h1>

        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

      </div>
    </header>
  );
}