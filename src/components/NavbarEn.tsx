"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PawPrint } from "lucide-react";

export default function NavbarEn() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/en", label: "Home" },
    { href: "/en/about", label: "About" },
    { href: "/en/campaigns", label: "Campaigns" },
    { href: "/en/projects", label: "Programs" },
    { href: "/en/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/en" className="flex items-center gap-2">
            <div className="bg-green-600 rounded-full p-1.5">
              <PawPrint className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-sm sm:text-base text-green-800 block">Zografou Stray</span>
              <span className="text-xs text-green-600 font-medium block -mt-0.5">Vegan Farm</span>
            </div>
            <span className="text-xs font-medium text-green-600 hidden sm:block bg-green-50 px-2 py-0.5 rounded-full">NGO</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-green-700 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/en/donate"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/"
              className="text-xs font-semibold text-gray-400 hover:text-green-700 border border-gray-200 px-2 py-1 rounded-full transition-colors"
            >
              🇬🇷 ΕΛ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-green-700 font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/en/donate"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold text-center mt-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
              <Link href="/" className="text-center text-sm text-gray-400 hover:text-green-700 font-medium">
                🇬🇷 Ελληνικά
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
