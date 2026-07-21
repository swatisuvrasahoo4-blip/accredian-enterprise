"use client";

import { useState } from "react";
import { navLinks } from "../constants/navLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Closes the mobile menu after a navigation link is selected.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span className="text-2xl font-bold text-blue-600">
            accredian
          </span>

          <span className="text-[10px] tracking-wider text-gray-500">
            credentials that matter
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-sm font-medium text-black transition-colors duration-300 hover:text-blue-600 ml-6"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}