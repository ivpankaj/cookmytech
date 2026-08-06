"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Process", href: "/#process" },
    { label: "Stack", href: "/#stack" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black transition-all duration-150"
      style={{ borderBottomWidth: scrollY > 10 ? "2px" : "1px" }}
    >
      <nav aria-label="Main Navigation">
        <div className="max-w-screen-xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
            aria-label="CookMyTech Home"
          >
            <img
              src="/logo.png"
              alt="CookMyTech Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain bg-black border border-black"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="nav-link text-black hover:text-gray-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            className="hidden md:inline-block bg-black text-white text-xs uppercase tracking-widest px-5 py-2 border border-black hover:bg-white hover:text-black transition-colors duration-150 font-mono"
          >
            Start a Project
          </Link>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-black transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-black transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-black transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-black bg-white font-mono">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 text-xs uppercase tracking-widest border-b border-black hover:bg-black hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-xs uppercase tracking-widest bg-black text-white text-center hover:bg-gray-900 transition-colors"
            >
              Start a Project →
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

