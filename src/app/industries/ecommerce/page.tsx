import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import {
  generateServiceSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata = constructMetadata({
  title: "High-Load E-Commerce Engineering | Scalable Checkout & Inventory Systems",
  description:
    "CookMyTech engineers custom e-commerce cores, high-concurrency checkout engines, real-time multi-warehouse inventory sync, and headless Next.js architectures built for zero downtime during flash sales.",
  path: "/industries/ecommerce",
});

export default function EcommerceIndustryPage() {
  const pageUrl = "https://www.cookmytech.com/industries/ecommerce";

  const serviceSchema = generateServiceSchema({
    name: "High-Load E-Commerce Engineering Services",
    description:
      "Enterprise e-commerce software engineering, distributed checkout engines, real-time inventory synchronization, payment gateway failover, and headless storefront architectures.",
    url: pageUrl,
    serviceType: "E-Commerce Systems Engineering",
  });

  const faqs = [
    {
      question: "How do you prevent duplicate charges and race conditions during high-volume flash sales?",
      answer:
        "We implement distributed locking using Redis (Redlock) combined with database-level isolation and strict idempotency keys across all payment provider webhooks. Every order placement request generates a unique cryptographic idempotency token; subsequent identical payloads are deduplicated instantly, guaranteeing zero double charges and eliminating inventory overselling even under 50,000 concurrent requests per minute.",
    },
    {
      question: "How do you achieve sub-50ms real-time multi-warehouse inventory synchronization?",
      answer:
        "We architect event-driven messaging pipelines utilizing Kafka or Redis Streams paired with Change Data Capture (CDC via Debezium). When stock decrements at any node or retail terminal, inventory updates stream asynchronously to all fulfillment centers and edge storefront caches within 30 to 50 milliseconds, eliminating split-brain stock discrepancies.",
    },
    {
      question: "Why should an enterprise choose headless Next.js e-commerce over monolithic platforms like Shopify or Magento?",
      answer:
        "Headless Next.js App Router decouples your presentation layer from backend ERP and commerce engines. This architecture yields sub-second TTFB, 99+ Google Core Web Vitals scores, Partial Prerendering (PPR) for personalized carts, complete database and IP ownership, and zero revenue-share transaction penalties imposed by proprietary SaaS commerce providers.",
    },
    {
      question: "What payment gateways and international checkout systems do you integrate?",
      answer:
        "We engineer resilient multi-provider payment routers integrating Stripe, Razorpay, Adyen, PayPal, Apple Pay, and Klarna. Our smart routing middleware dynamically routes transactions through the highest-converting, lowest-fee gateway with automatic instantaneous failover if a primary gateway experiences downtime or latency spikes.",
    },
    {
      question: "Can you incorporate AI product recommendations and vector semantic search into our store?",
      answer:
        "Yes. We build custom hybrid search pipelines combining dense vector embeddings (Pinecone/pgvector) with sparse lexical filtering. This enables natural language search (e.g. 'breathable running shoes for wide feet'), semantic visual similarities, and personalized reranking algorithms that increase cart conversion rates by 18–35%.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
    { name: "E-Commerce", item: "/industries/ecommerce" },
  ]);

  const architectureFeatures = [
    {
      title: "Distributed Checkout & Cart Engine",
      desc: "Zero-lock contention checkout pipelines designed with PostgreSQL row locking, Redis session stores, and idempotent webhook handlers to process peak transaction surges flawlessly.",
    },
    {
      title: "Real-Time Multi-Warehouse Inventory Sync",
      desc: "Sub-50ms stock reconciliation across ERPs, Shopify, warehouse management systems (WMS), and physical point-of-sale terminals via Kafka and event streams.",
    },
    {
      title: "Headless Next.js 16 Storefront Performance",
      desc: "Engineered with React Server Components (RSC), Turbopack bundling, and edge caching for instant product detail page loads and 100/100 Google Lighthouse Core Web Vitals.",
    },
    {
      title: "Intelligent Payment Gateway Routing & Failover",
      desc: "Dynamic multi-rail payment routing across Stripe, Razorpay, and Adyen with automatic failover, fraud scoring, 3D Secure 2 compliance, and zero revenue loss.",
    },
    {
      title: "AI-Powered Semantic Search & Discovery",
      desc: "Hybrid vector search pipelines that understand user intent, surface relevant long-tail catalog queries, and deliver real-time personalized recommendations.",
    },
    {
      title: "Order Management & Fulfillment Automation",
      desc: "Automated routing microservices that assign orders to nearest fulfillment centers, generate shipping labels via carrier APIs, and dispatch real-time SMS/WhatsApp updates.",
    },
  ];

  const specs = [
    { metric: "Peak Request Concurrency", value: "50,000+ req/sec", benchmark: "Tested on AWS ECS / Kubernetes" },
    { metric: "Average Cart & Checkout Latency", value: "<150ms p95", benchmark: "Sub-second global TTFB" },
    { metric: "Inventory Synchronization Latency", value: "<50ms", benchmark: "Redis Streams + CDC Pipeline" },
    { metric: "Google Core Web Vitals Score", value: "98–100 / 100", benchmark: "Lighthouse Mobile & Desktop" },
    { metric: "Uptime SLA During Traffic Spikes", value: "99.99%", benchmark: "Multi-Region Cloud Deployment" },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Industries", item: "/industries" },
            { name: "E-Commerce", item: "/industries/ecommerce" },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            E-Commerce Systems Engineering Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            High-Load E-Commerce Software Engineering
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered to survive flash sales, product drops, and Black Friday traffic spikes without dropping a single transaction. We design custom e-commerce cores, distributed checkout engines, real-time inventory synchronization, and headless Next.js storefronts with sub-second response times.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult E-Commerce Engineers →
            </Link>
            <Link
              href="/case-studies/realtime-ecommerce-engine"
              className="bg-gray-100 text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              View E-Commerce Case Study →
            </Link>
          </div>
        </section>

        {/* Technical Architecture Grid */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Architectural Capabilities
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Mission-Critical E-Commerce Engineering Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureFeatures.map((feat) => (
              <div
                key={feat.title}
                className="p-6 border border-black bg-gray-50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold uppercase mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Benchmarks Table */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering Benchmarks
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Production Performance & Concurrency Targets
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-black">
              <thead className="bg-black text-white uppercase">
                <tr>
                  <th className="p-4 border-r border-gray-700">Performance Metric</th>
                  <th className="p-4 border-r border-gray-700">Engineered Target</th>
                  <th className="p-4">Benchmark Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black">
                {specs.map((row) => (
                  <tr key={row.metric} className="hover:bg-gray-50">
                    <td className="p-4 font-bold border-r border-black">{row.metric}</td>
                    <td className="p-4 text-emerald-700 font-bold border-r border-black">{row.value}</td>
                    <td className="p-4 text-gray-600">{row.benchmark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering FAQ
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Frequently Asked Questions on E-Commerce Systems
          </h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-display text-lg font-bold mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white p-8 md:p-12 border border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase">
              Building or Modernizing an E-Commerce Core?
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
              Consult directly with senior software architects. We provide a thorough architecture review, scalability blueprint, and fixed estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Schedule Technical Consultation →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
