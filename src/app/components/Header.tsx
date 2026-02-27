"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/zukunftswerkstatt", label: "Zukunftswerkstatt" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/unterstuetzen", label: "Unterstützen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warmgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight font-[family-name:var(--font-heading)]">
              Lebens<span className="text-orange-600">WERT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-darkgray hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/unterstuetzen"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-500 transition-colors"
            >
              <Heart className="w-4 h-4" />
              Spenden
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-anthrazit"
            aria-label="Menü öffnen"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-warmgray">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-anthrazit hover:bg-orange-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/unterstuetzen"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-orange-600 text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-orange-500 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Spenden
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
