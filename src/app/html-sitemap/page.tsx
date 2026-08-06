import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTML Sitemap",
  description:
    "Complete structured navigation index and HTML sitemap for CookMyTech services, tech stack, capabilities, and resources.",
  alternates: {
    canonical: "https://www.cookmytech.site/html-sitemap",
  },
};

export default function HtmlSitemapPage() {
  const mainPages = [
    {
      name: "Home Page",
      href: "/",
      desc: "Main landing page showcasing studio services, capabilities, and contact form.",
    },
    {
      name: "HTML Sitemap",
      href: "/html-sitemap",
      desc: "User-friendly structured page and section index (this page).",
    },
    {
      name: "XML Sitemap",
      href: "/sitemap.xml",
      desc: "Machine-readable XML sitemap file for search engine indexing.",
      external: true,
    },
    {
      name: "Robots.txt",
      href: "/robots.txt",
      desc: "Search engine crawler directives and index control instructions.",
      external: true,
    },
  ];

  const sections = [
    {
      name: "Services",
      href: "/#services",
      desc: "Production Web Apps, Custom AI SaaS, System Architecture, and API engineering.",
    },
    {
      name: "Why Us",
      href: "/#why-us",
      desc: "Our engineering principles, quality metrics, speed of delivery, and zero technical debt guarantees.",
    },
    {
      name: "Process",
      href: "/#process",
      desc: "4-stage execution model: Blueprint & Architecture, High-Heat Build, Quality Engineering, Deploy & Scale.",
    },
    {
      name: "Tech Stack",
      href: "/#stack",
      desc: "Comprehensive suite of languages, frameworks, cloud providers, and AI tools we use.",
    },
    {
      name: "Featured Projects",
      href: "/#projects",
      desc: "Interactive showcase of our production builds, AI agent tools, and full-stack platforms.",
    },
    {
      name: "FAQ",
      href: "/#faq",
      desc: "Frequently asked questions regarding engagement models, timelines, and codebase ownership.",
    },
    {
      name: "Contact Us",
      href: "/#contact",
      desc: "Direct project inquiry form to contact our senior engineering team.",
    },
  ];

  const capabilities = [
    "Production-Grade Web Applications (Next.js, React, Node.js, Go)",
    "AI SaaS & Custom LLM Products (OpenAI, LangChain, Vector DBs)",
    "RAG & Autonomous Agent Pipelines",
    "High-Concurrency API Design & Microservices",
    "Cloud Infrastructure, DevOps & Kubernetes Orchestration",
    "Performance Auditing & Modernization",
  ];

  const technologies = [
    {
      category: "Frontend Frameworks",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: "Backend & System APIs",
      items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
    },
    {
      category: "AI & Machine Learning",
      items: ["OpenAI API", "LangChain", "LlamaIndex", "Pinecone", "Vector Search"],
    },
    {
      category: "Cloud & Infrastructure",
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel", "GitHub Actions"],
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        {/* HEADER SECTION */}
        <div className="border-b border-black pb-10 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold">
              Index // Sitemap
            </span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-black hover:underline flex items-center gap-1 border border-gray-300 px-3 py-1"
            >
              Open XML Sitemap ↗
            </a>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-none mb-4">
            HTML Sitemap
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl leading-relaxed">
            Full directory of pages, key content sections, engineering capabilities, tech stacks, and machine-readable feeds across CookMyTech.
          </p>
        </div>

        {/* XML SITEMAP HIGHLIGHT BANNER */}
        <div className="bg-black text-white border border-black p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">
              Search Engine Crawler Feed
            </div>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight">
              XML Sitemap File (`/sitemap.xml`)
            </h2>
            <p className="text-xs text-gray-400 mt-1 max-w-xl">
              Are you an indexing crawler or SEO tool? Access our structured XML sitemap directly formatted according to standard sitemap protocol.
            </p>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Access /sitemap.xml ↗
          </a>
        </div>

        {/* TWO COLUMN GRID: CORE PAGES & WEBSITE SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* CORE PAGES */}
          <div className="border border-black p-6 space-y-6">
            <h2 className="font-display text-xl font-bold uppercase border-b border-black pb-3">
              // Core Index & Files
            </h2>
            <ul className="space-y-4">
              {mainPages.map((page) => (
                <li key={page.name} className="group">
                  <div className="flex items-center justify-between gap-2">
                    {page.external ? (
                      <a
                        href={page.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-sm hover:underline flex items-center gap-1"
                      >
                        {page.name} <span className="text-xs text-gray-400">↗</span>
                      </a>
                    ) : (
                      <Link href={page.href} className="font-bold text-sm hover:underline">
                        {page.name}
                      </Link>
                    )}
                    <span className="text-xs text-gray-400 font-mono bg-gray-100 px-2 py-0.5 border border-gray-200">
                      {page.href}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{page.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* PAGE SECTIONS */}
          <div className="border border-black p-6 space-y-6">
            <h2 className="font-display text-xl font-bold uppercase border-b border-black pb-3">
              // Website Sections
            </h2>
            <ul className="space-y-4">
              {sections.map((section) => (
                <li key={section.name}>
                  <div className="flex items-center justify-between gap-2">
                    <Link href={section.href} className="font-bold text-sm hover:underline">
                      {section.name}
                    </Link>
                    <span className="text-xs text-gray-400 font-mono bg-gray-100 px-2 py-0.5 border border-gray-200">
                      {section.href}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{section.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TWO COLUMN GRID: CAPABILITIES & TECH STACKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* CAPABILITIES */}
          <div className="border border-black p-6 space-y-6">
            <h2 className="font-display text-xl font-bold uppercase border-b border-black pb-3">
              // Core Capabilities
            </h2>
            <ul className="space-y-3">
              {capabilities.map((cap) => (
                <li key={cap} className="text-xs flex items-start gap-2 text-gray-800">
                  <span className="font-bold text-black">→</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TECHNOLOGIES */}
          <div className="border border-black p-6 space-y-6">
            <h2 className="font-display text-xl font-bold uppercase border-b border-black pb-3">
              // Technologies & Frameworks
            </h2>
            <div className="space-y-4">
              {technologies.map((tech) => (
                <div key={tech.category}>
                  <h3 className="text-xs font-bold uppercase text-gray-500 mb-1">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] bg-gray-100 border border-gray-300 px-2 py-0.5 text-gray-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER CALLOUT */}
        <div className="bg-gray-100 border border-black p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl font-bold uppercase tracking-tight mb-1">
              Ready to build high-scale software?
            </h2>
            <p className="text-xs text-gray-600 max-w-lg">
              Contact our engineering team today for a technical roadmap, fixed-scope estimate, or architectural consultation.
            </p>
          </div>
          <Link
            href="/#contact"
            className="bg-black text-white text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
