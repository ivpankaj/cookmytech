"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Business", href: "/business" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Overlay Background Blur */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2 
          bg-white/90 backdrop-blur-xl 
          rounded-full 
          px-6 md:px-10 py-4 
          w-[94%] md:w-[85%] lg:w-[75%]
          flex items-center justify-between
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          z-50 transition-all duration-300
        "
      >
        {/* Left Side */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold text-black tracking-tight"
          >
            COOKMYTECH
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-gray-700 font-semibold">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
                  hover:text-black 
                  transition 
                  font-bold 
                  text-sm tracking-wide
                  hover:scale-105 
                  active:scale-95
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl text-black"
          onClick={() => setOpen(true)}
        >
          <IoMenu />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full
          backdrop-blur-xl
          shadow-xl z-50 
          p-6 
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          className="text-4xl mb-8"
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </button>

        {/* Mobile Menu Items */}
        <div className="flex flex-col gap-6 text-lg font-semibold text-gray-700">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="hover:text-black transition-all active:scale-95"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28"></div>
    </>
  );
}
