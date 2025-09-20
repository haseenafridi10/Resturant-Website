"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black dark:bg-gray-900 dark:text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="font-bold text-lg">🍴 My Restaurant</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/menu" className="hover:text-yellow-400">Menu</Link>
          <Link href="/specials" className="hover:text-yellow-400">Specials</Link>
          <Link href="/faq" className="hover:text-yellow-400">FAQ</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
          
          {/* Compact Theme Switcher */}
          <ThemeSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 px-6 py-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Home</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Menu</Link>
          <Link href="/specials" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Specials</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">FAQ</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">Contact</Link>
          
          {/* Compact Theme Switcher also in mobile menu */}
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
}
