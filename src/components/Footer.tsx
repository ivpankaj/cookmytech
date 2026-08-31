"use client";

import React from "react";
import Link from "next/link";
import TechIcon from "./TechIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const primaryServices = [
    { label: "AI Development", href: "/services/ai-development" },
    { label: "AI Agent Development", href: "/services/ai-agent-development" },
    { label: "RAG Systems", href: "/services/rag-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Full-Stack Web Apps", href: "/services/full-stack-development" },
    { label: "MERN Stack Development", href: "/services/mern-stack-development" },
    { label: "Next.js Development", href: "/services/nextjs-development" },
    { label: "Custom Software", href: "/services/custom-software-development" },
  ];

  const companyLinks = [
    { label: "Services Hub", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Technical Guides", href: "/blog" },
    { label: "About CookMyTech", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socials = [
    { label: "Email", slug: "gmail", href: "mailto:hello@cookmytech.site" },
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
          
          {/* BRAND COLUMN (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
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
              AI & Full-Stack Software Engineering Studio. We design, architect, and ship production-grade web applications, autonomous AI agents, enterprise RAG systems, and resilient cloud architectures.
            </p>

            <div className="text-xs text-gray-400 space-y-1">
              <div>
                <span className="text-white font-bold">Email:</span>{" "}
                <a href="mailto:hello@cookmytech.site" className="hover:text-white underline">
                  hello@cookmytech.site
                </a>
              </div>
              <div>
                <span className="text-white font-bold">Phone:</span>{" "}
                <a href="tel:+918929517046" className="hover:text-white underline">
                  +918929517046
                </a>
              </div>
            </div>
          </div>

          {/* CORE SERVICES (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              // Commercial Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {primaryServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY & RESOURCES (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              // Navigation
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
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
          <span className="text-gray-800 font-bold">•</span>
          <a
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline underline-offset-2 inline-flex items-center gap-0.5"
          >
            <span>Robots.txt</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>

        <div className="uppercase tracking-widest text-[11px] text-gray-400">
          Built for top technical performance<span className="cursor-blink ml-0.5" aria-hidden="true">_</span>
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
