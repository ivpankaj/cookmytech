import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About CookMyTech | Senior Full-Stack & AI Software Engineering Studio",
  description:
    "Learn about CookMyTech: a specialized full-stack and AI software engineering studio. Senior developers building production web apps, AI agents, RAG systems, and cloud architectures.",
  path: "/about",
  keywords: [
    "About CookMyTech",
    "software engineering studio",
    "senior full stack engineers",
    "AI development company background",
  ],
});

export default function AboutPage() {
  const principles = [
    {
      title: "Senior-Only Execution",
      desc: "No junior developer handoffs or bloated account management layers. Senior software specialists directly design, write, test, and maintain your codebase.",
    },
    {
      title: "Fixed Scope & Transparent Pricing",
      desc: "We define precise technical specifications, deliverables, and timelines upfront. Zero unexpected billing surprises or endless scope creep.",
    },
    {
      title: "100% Intellectual Property Ownership",
      desc: "You retain total ownership of all code repositories, cloud infrastructure, API credentials, and documentation with zero vendor lock-in.",
    },
    {
      title: "AI-Native Architecture",
      desc: "We design modern software systems with artificial intelligence, vector caching, and LLM integrations engineered directly into the core stack.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "About", item: "/about" }]} />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Studio Engineering Philosophy
          </div>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            ABOUT COOKMYTECH
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a specialized full-stack and AI software engineering studio. We partner with tech startups, founders, and growth companies to design, architect, and ship high-scale web applications, autonomous AI agents, and enterprise cloud infrastructure.
          </p>
        </section>

        {/* ENGINEERING PRINCIPLES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-8">// Our Core Engineering Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.title} className="p-8 border border-black bg-gray-50">
                <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH CAPABILITIES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">// What We Build</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold">
            <div className="p-4 border border-black text-center bg-white">Production Web Apps</div>
            <div className="p-4 border border-black text-center bg-white">Autonomous AI Agents</div>
            <div className="p-4 border border-black text-center bg-white">Enterprise RAG Pipelines</div>
            <div className="p-4 border border-black text-center bg-white">Multi-Tenant AI SaaS</div>
            <div className="p-4 border border-black text-center bg-white">MERN & Next.js Apps</div>
            <div className="p-4 border border-black text-center bg-white">High-Concurrency APIs</div>
            <div className="p-4 border border-black text-center bg-white">Cloud Infrastructure</div>
            <div className="p-4 border border-black text-center bg-white">Startup MVPs</div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Ready to Partner With Senior Engineers?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable technical specification and proposal within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Start Project Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
