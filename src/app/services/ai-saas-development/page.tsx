import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI SaaS Development Company | Multi-Tenant AI Product Engineering",
  description:
    "CookMyTech builds commercial AI SaaS platforms with multi-tenancy, Stripe billing integration, token rate limiting, and scalable cloud architecture.",
  path: "/services/ai-saas-development",
  keywords: [
    "AI SaaS development company",
    "AI SaaS development services",
    "custom AI SaaS",
    "AI product engineering",
    "multi-tenant AI platform",
  ],
});

export default function AiSaasDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/ai-saas-development";
  const serviceSchema = generateServiceSchema({
    name: "AI SaaS Development Services",
    description: "Multi-tenant software-as-a-service architecture engineered for AI products, subscription billing, and usage metering.",
    url: serviceUrl,
    serviceType: "SaaS & AI Software Development",
  });

  const faqs = [
    {
      question: "How do you handle API cost controls and token limits in AI SaaS platforms?",
      answer:
        "We implement per-user token quotas, Redis rate limiting, semantic caching, and dynamic model routing (e.g. GPT-4o-mini for simple tasks, GPT-4o for complex queries) to protect profit margins.",
    },
    {
      question: "What components are included in an AI SaaS MVP build?",
      answer:
        "Authentication (NextAuth/Clerk), Stripe billing & usage-based subscriptions, user tenant isolation, AI prompt pipelines, vector DB indexing, and admin analytics dashboards.",
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
            { name: "AI SaaS Development", item: "/services/ai-saas-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            SaaS & AI Engineering
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            AI SaaS Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Turn your AI concept into a profitable commercial SaaS product. We engineer multi-tenant platforms with user authentication, usage-based Stripe billing, token rate limiting, and scalable cloud infrastructure.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Launch AI SaaS →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">AI SaaS Platform Architecture</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>• Multi-Tenant Isolation & Role-Based Access (RBAC)</li>
              <li>• Stripe Subscription & Token Metered Billing</li>
              <li>• Redis Caching & Token Rate-Limiting Middleware</li>
              <li>• Vector Index Partitioning (Pinecone/Qdrant)</li>
            </ul>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Margin Protection Engineering</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Building an AI SaaS without token cost controls can kill your profit margins. We engineer semantic response caches and fallback model routing to keep your margins high as user traffic scales.
            </p>
            <Link href="/services/saas-development" className="text-xs font-bold underline">
              General SaaS Services →
            </Link>
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build an AI SaaS?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an architecture roadmap and fixed-price estimate within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Get Started →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
