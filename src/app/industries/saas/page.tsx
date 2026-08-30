import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Software Engineering Studio for SaaS Businesses",
  description:
    "CookMyTech helps SaaS founders and product teams build, scale, and modernize cloud software platforms, multi-tenant databases, and AI subscription engines.",
  path: "/industries/saas",
  keywords: ["software development for SaaS", "SaaS technical partner", "scaling SaaS backend", "AI SaaS architecture"],
});

export default function SaasIndustryPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Industries", item: "/industries" }, { name: "SaaS", item: "/industries/saas" }]} />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            SaaS Industry Partner
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Software Engineering for SaaS Platforms
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Scale your SaaS application with confidence. CookMyTech engineers multi-tenant cloud backends, Stripe billing integration, real-time analytics dashboards, and embedded AI features.
          </p>
          <Link href="/services/saas-development" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            View SaaS Capabilities →
          </Link>
        </section>

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Scaling a SaaS Application?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an technical review within 24 hours.</p>
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
