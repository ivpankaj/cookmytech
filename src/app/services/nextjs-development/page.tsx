import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Next.js Development Company | Custom Next.js Web Applications",
  description:
    "CookMyTech is a Next.js development agency engineering production web apps using Next.js App Router, Server Components, SSR, SSG, and high-performance SEO optimization.",
  path: "/services/nextjs-development",
  keywords: [
    "Next.js development company",
    "Next.js development services",
    "custom Next.js development",
    "Next.js web application development",
    "Next.js App Router developers",
  ],
});

export default function NextjsDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/nextjs-development";
  const serviceSchema = generateServiceSchema({
    name: "Next.js Development Services",
    description: "Production Next.js application development, App Router architecture, Server Components, Turbopack, and Core Web Vitals optimization.",
    url: serviceUrl,
    serviceType: "Next.js & React Engineering",
  });

  const faqs = [
    {
      question: "Why is Next.js the preferred framework for modern web applications and SEO?",
      answer:
        "Next.js offers hybrid Server-Side Rendering (SSR) and Static Site Generation (SSG), automatic code splitting, optimized image loading, built-in metadata API, and edge middleware, making it unbeatable for search engine optimization and speed.",
    },
    {
      question: "Can you migrate an existing React or Create-React-App project to Next.js?",
      answer:
        "Yes, we seamlessly migrate existing React projects to Next.js App Router, improving Google Lighthouse scores, page load times, and search engine crawlability.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "Next.js Development", item: "/services/nextjs-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Next.js Specialists
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Next.js Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered for extreme performance and top Google rankings. We build modern Next.js web applications using App Router, Server Components, TypeScript, and edge runtime deployment.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Hire Next.js Engineers →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">App Router & Server Components</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Zero-bundle-size React Server Components fetching data directly on the server for maximum rendering speed.
            </p>
          </div>
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">SEO & Metadata API</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Structured JSON-LD schema, dynamic metadata, open graph cards, robots, and automated XML sitemaps.
            </p>
          </div>
          <div className="p-6 border border-black bg-gray-50">
            <h3 className="font-display text-lg font-bold mb-2 uppercase">Edge & Serverless Deployment</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Global CDN deployment via Vercel, AWS CloudFront, or Docker with sub-50ms TTFB globally.
            </p>
          </div>
        </section>

        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-4">
                <h3 className="font-display text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build With Next.js?</h2>
            <p className="text-xs text-gray-400 mt-1">Get a technical proposal and fixed-price quote within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Contact Next.js Team →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
