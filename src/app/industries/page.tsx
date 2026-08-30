import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Software Engineering Solutions by Industry & Use Case",
  description:
    "Discover how CookMyTech builds tailored software, AI platforms, and web applications for startups, SaaS businesses, e-commerce brands, and enterprise automation.",
  path: "/industries",
  keywords: [
    "software for startups",
    "software for SaaS companies",
    "ecommerce software engineering",
    "business automation software studio",
  ],
});

export default function IndustriesHubPage() {
  const industries = [
    {
      title: "Software Engineering for Startups",
      href: "/industries/startups",
      desc: "Fast MVP builds, senior technical leadership, and scalable software architecture for ambitious founders and venture-backed startups.",
    },
    {
      title: "Software Engineering for SaaS Companies",
      href: "/industries/saas",
      desc: "Multi-tenant cloud architecture, Stripe subscription engines, AI integrations, and infrastructure scaling for SaaS founders.",
    },
    {
      title: "High-Load E-Commerce Core Systems",
      href: "/industries/ecommerce",
      desc: "Custom checkout systems, inventory sync engines, high-concurrency microservices, and headless e-commerce architectures.",
    },
    {
      title: "Enterprise Business Automation",
      href: "/industries/business-automation",
      desc: "AI agent workflows, document processing pipelines, automated data extraction, and internal business tools.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Industries", item: "/industries" }]} />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Industry Solutions Hub
          </div>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            SOFTWARE BY INDUSTRY & USE CASE
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            We partner with startups, product teams, and growing enterprises to build custom software, AI systems, and cloud backends tailored to specific commercial operational environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="p-8 border border-black bg-gray-50 hover:bg-black hover:text-white transition-colors duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 font-bold uppercase">
                    Industry Solution
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <h2 className="font-display text-2xl font-bold mb-4 group-hover:text-white">
                  {ind.title}
                </h2>
                <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-200 group-hover:border-gray-800 text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400">
                Explore Industry Details →
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Need Custom Software for Your Industry?</h2>
            <p className="text-xs text-gray-400 mt-1">Talk to our senior engineering team today.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Contact Engineering →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
