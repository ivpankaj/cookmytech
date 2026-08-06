"use client";

import React from "react";
import Link from "next/link";
import TechIcon from "./TechIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Process", href: "/#process" },
    { label: "Tech Stack", href: "/#stack" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  const capabilities = [
    "Production Web Apps",
    "AI SaaS & LLM Products",
    "RAG & Agent Pipelines",
    "System Architecture",
    "High-Concurrency APIs",
    "Cloud Infrastructure",
  ];

  const socials = [
    { label: "Gmail", slug: "gmail", href: "mailto:imvpankaj@gmail.com" },
    { label: "LinkedIn", slug: "linkedin", href: "https://linkedin.com/company/cookmytech" },
    { label: "GitHub", slug: "github", href: "https://github.com/cookmytech" },
    { label: "X", slug: "x", href: "https://x.com/cookmytech" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white border-t border-black font-mono">
      {/* TOP SECTION */}
      <div className="max-w-screen-xl mx-auto px-6 pt-16 pb-12 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* BRAND COLUMN (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="CookMyTech Official Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain bg-black border border-white/20 p-1"
              />
              <span className="font-display text-2xl tracking-tight font-extrabold text-white">
              COOKMYTECH
              </span>
            </div>

            <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
              Full-Stack & AI Software Engineering Studio. We design, architect, and ship high-scale web applications, LLM agent pipelines, and resilient cloud systems.
            </p>

          </div>

          {/* NAVIGATION (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              // Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold pt-2">
              // Sitemaps
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link
                  href="/html-sitemap"
                  className="hover:text-white hover:underline transition-colors"
                >
                  HTML Sitemap
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors inline-flex items-center gap-1"
                >
                  <span>XML Sitemap</span>
                  <span className="text-[10px] text-gray-500">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CAPABILITIES (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              // Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2">
                  <span className="text-gray-600">→</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              // Connect
            </h3>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white border border-gray-800 hover:border-gray-500 px-3 py-2 transition-colors group"
                >
                  <TechIcon name={s.slug} size={14} className="group-hover:brightness-200" />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div className="flex flex-wrap items-center gap-3">
          <span>© {currentYear} CookMyTech. All rights reserved.</span>
          <span className="text-gray-800 font-bold">|</span>
          <Link href="/html-sitemap" className="hover:text-white underline underline-offset-2">
            HTML Sitemap
          </Link>
          <span className="text-gray-800 font-bold">•</span>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline underline-offset-2 inline-flex items-center gap-0.5"
          >
            <span>XML Sitemap</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        <div className="uppercase tracking-widest text-[11px] text-gray-400">
          Built at 100% heat<span className="cursor-blink ml-0.5" aria-hidden="true">_</span>
        </div>

        <button
          onClick={scrollToTop}
          className="hover:text-white transition-colors border border-gray-800 hover:border-white px-3 py-1.5 uppercase tracking-widest text-[11px]"
          aria-label="Scroll back to top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}

