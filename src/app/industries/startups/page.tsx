import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Software Engineering Studio for Startups & Founders",
  description:
    "CookMyTech is the dedicated software engineering partner for tech startups and founders. We build production MVPs, AI platforms, and web applications fast.",
  path: "/industries/startups",
  keywords: ["software development studio for startups", "startup tech partner", "founder technical team", "startup software engineering"],
});

export default function StartupsIndustryPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Industries", item: "/industries" }, { name: "Startups", item: "/industries/startups" }]} />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Startup Engineering Partner
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Software Engineering for Startups & Founders
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Speed matters for startups. CookMyTech operates as your fractional senior engineering team, building scalable production MVPs, custom AI features, and web applications so you can launch fast and attract investors.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Start Project Consultation →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">First Commit in 48 Hours</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We skip bureaucratic setup and start writing clean, production-ready code within 48 hours of onboarding.
            </p>
          </div>
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">100% Code & IP Ownership</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              You own all repositories, cloud deployments, and credentials from day one with zero vendor lock-in.
            </p>
          </div>
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">Investor-Ready Architecture</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Built on Next.js, TypeScript, and modern cloud standards that satisfy technical due diligence audits.
            </p>
          </div>
        </section>

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Building a Tech Startup?</h2>
            <p className="text-xs text-gray-400 mt-1">Talk directly with our senior engineers today.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Schedule Founder Call →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
