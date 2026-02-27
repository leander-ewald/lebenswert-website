"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart, Phone } from "lucide-react";

const navLinks = [
  { href: "/zukunftswerkstatt", label: "Zukunftswerkstatt" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/team", label: "Team" },
  { href: "/veranstaltungen", label: "Veranstaltungen" },
  { href: "/unterstuetzen", label: "Unterstützen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warmgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logos */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* LebensWERT Logo (Bild statt Text) */}
            <img
              src="/logos/lebenswert-dark.svg"
              alt="LebensWERT Iserlohn"
              className="h-8 sm:h-10 w-auto"
            />
            <span className="hidden sm:block w-px h-10 sm:h-14 bg-gray-300" />
            <Image
              src="/logos/zukunftswerkstatt.png"
              alt="Zukunftswerkstatt"
              width={820}
              height={416}
              className="hidden sm:block h-10 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4">
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
              href="/zukunftswerkstatt#kontakt"
              className="inline-flex items-center gap-2 bg-anthrazit text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-darkgray transition-colors"
            >
              <Phone className="w-4 h-4" />
              Hilfe finden
            </Link>
            <Link
              href="/unterstuetzen"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-500 transition-colors"
            >
              <Heart className="w-4 h-4" />
              Spenden
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2.5 -mr-2.5 text-anthrazit"
            aria-label="Menü öffnen"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-white border-t border-warmgray">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/zukunftswerkstatt#kontakt"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-anthrazit text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-darkgray transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ich brauche Hilfe
            </Link>
            <div className="h-px bg-warmgray my-2" />
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
