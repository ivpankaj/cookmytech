import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "High-Load E-Commerce Core Systems & API Engineering",
  description:
    "CookMyTech engineers custom e-commerce checkout engines, inventory sync microservices, and high-concurrency API backends designed for zero downtime during traffic spikes.",
  path: "/industries/ecommerce",
  keywords: ["e-commerce development studio", "high load e-commerce", "custom checkout engine", "inventory sync microservice"],
});

export default function EcommerceIndustryPage() {
  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs items={[{ name: "Home", item: "/" }, { name: "Industries", item: "/industries" }, { name: "E-Commerce", item: "/industries/ecommerce" }]} />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            E-Commerce Systems Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            E-Commerce Software Engineering
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered to survive flash sales and Black Friday traffic spikes without dropping transactions. We design custom e-commerce cores, payment gateway integrations, and real-time inventory synchronization.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Consult E-Commerce Engineers →
          </Link>
        </section>

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Building High-Load E-Commerce?</h2>
            <p className="text-xs text-gray-400 mt-1">Get a technical proposal within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Contact Us →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
