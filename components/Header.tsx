"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Teacher Daily Book
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-800">
          <Link
            href="/"
            className="block px-4 py-3 border-b border-blue-600"
          >
            Home
          </Link>

          <Link
            href="/features"
            className="block px-4 py-3 border-b border-blue-600"
          >
            Features
          </Link>

          <Link
            href="/contact"
            className="block px-4 py-3 border-b border-blue-600"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="block px-4 py-3"
          >
            Privacy
          </Link>
        </nav>
      )}
    </header>
  );
}