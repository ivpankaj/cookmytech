"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
 
    { name: "About", href: "/about" },
    { name: "Business", href: "/business" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 
        bg-white/90 backdrop-blur-xl rounded-full
        px-6 md:px-10 py-4
        w-[94%] md:w-[85%] lg:w-[75%]
        flex items-center justify-between
        shadow-[0_8px_25px_rgba(0,0,0,0.15)]
        z-50"
      >
        {/* Left */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl md:text-4xl font-extrabold tracking-tight
              transition-transform hover:scale-105 active:scale-95 text-black"
          >
            COOKMYTECH
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
                  relative
                  text-lg font-extrabold tracking-wide
                  text-gray-700
                  transition-all duration-300
                  hover:text-black hover:scale-110
                  active:scale-95
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-black
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Icon */}
        <button
          className="lg:hidden text-4xl transition-transform active:scale-90 text-black"
          onClick={() => setOpen(true)}
        >
          <IoMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full
          bg-black/90 backdrop-blur-xl
          z-50 p-8
          transition-all duration-300
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        {/* Close */}
        <button
          className="text-5xl mb-10 transition-transform active:scale-90"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col gap-8 text-xl font-extrabold">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                transition-all duration-300
                hover:translate-x-2 hover:text-black
                active:scale-95
              "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28" />
    </>
  );
}
