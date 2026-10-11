import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Locations & Regional Coverage | CookMyTech Software Studio",
  description:
    "Explore CookMyTech's regional software engineering and AI development presence across Noida, Greater Noida, Delhi NCR, India, and global technology hubs.",
  path: "/locations",
  keywords: [
    "CookMyTech locations",
    "software development company Noida",
    "AI development company Greater Noida",
    "software engineering Delhi NCR",
    "AI software company India",
  ],
});

export const locationsData = [
  {
    slug: "noida",
    name: "Noida",
    title: "AI & Software Development Company in Noida",
    region: "Uttar Pradesh / Sector 62 & Expressway Corridor",
    desc: "Partner with senior AI and full-stack software engineers in Noida. We build custom web apps, autonomous AI agents, enterprise RAG systems, and SaaS platforms for high-growth tech startups and established enterprises.",
    href: "/locations/noida",
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    title: "Software & AI Development Company in Greater Noida",
    region: "Knowledge Park & Pari Chowk Industrial Hub",
    desc: "Empowering Greater Noida's expanding industrial, logistics, educational, and startup hubs with production cloud software, custom ERP/CRM tools, and intelligent business process automation.",
    href: "/locations/greater-noida",
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    title: "AI & Custom Software Development Company in Delhi NCR",
    region: "National Capital Region (Noida, Gurgaon, Delhi)",
    desc: "Serving fast-growing tech enterprises, venture-backed startups, and digital brands across the Delhi NCR metro with high-concurrency software architectures, Next.js web applications, and senior engineering leadership.",
    href: "/locations/delhi-ncr",
  },
  {
    slug: "india",
    name: "India",
    title: "AI & Full-Stack Software Development Company in India",
    region: "Pan-India Enterprise & Remote Delivery",
    desc: "Premier Indian software development studio engineering world-class custom AI applications, multi-tenant SaaS products, and resilient APIs with 100% intellectual property ownership and zero technical debt.",
    href: "/locations/india",
  },
];

export default function LocationsHubPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Locations", item: "/locations" },
          ]}
        />

        <div className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">
            Regional Presence & Engineering Coverage
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            LOCATIONS & REGIONAL HUBS
          </h1>
          <p className="text-sm leading-relaxed text-gray-700 max-w-3xl">
            CookMyTech provides dedicated senior software engineering, custom AI development, and digital product consulting to clients across the Delhi NCR corridor, throughout India, and for international innovators.
          </p>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {locationsData.map((loc) => (
            <div key={loc.slug} className="p-8 border border-black bg-gray-50 flex flex-col justify-between hover:border-black transition-colors">
              <div>
                <span className="text-[10px] uppercase tracking-widest bg-black text-white px-2.5 py-1 font-bold inline-block mb-3">
                  {loc.region}
                </span>
                <h2 className="font-display text-2xl font-bold uppercase mb-3">
                  <Link href={loc.href} className="hover:underline">
                    {loc.title}
                  </Link>
                </h2>
                <p className="text-xs text-gray-700 leading-relaxed mb-6">
                  {loc.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                <span className="text-xs font-mono text-gray-500">{loc.href}</span>
                <Link
                  href={loc.href}
                  className="text-xs font-bold uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  Explore {loc.name} Hub →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT CALLOUT */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Looking for Local or Remote Collaboration?</h2>
            <p className="text-xs text-gray-400 mt-1">Our senior engineering team conducts in-person discovery across Delhi NCR and virtual consultation globally.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Connect With Us →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
