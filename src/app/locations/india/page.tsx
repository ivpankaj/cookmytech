import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI & Full-Stack Software Development Company in India | CookMyTech",
  description:
    "CookMyTech is a premier AI and software development company in India. We engineer production AI software, custom web applications, SaaS platforms, and enterprise cloud infrastructure for domestic and global innovators.",
  path: "/locations/india",
  keywords: [
    "AI software development company in India",
    "software development company India",
    "custom software development company India",
    "AI application development services India",
    "SaaS development company India",
    "top software developers India",
    "hire AI engineers India",
  ],
});

export default function IndiaLocationPage() {
  const pageUrl = "https://www.cookmytech.com/locations/india";
  const localSchema = generateLocalBusinessSchema({
    locationName: "India Software & AI Engineering Studio",
    description:
      "CookMyTech is an Indian software development studio engineering production-ready AI software, autonomous agents, RAG systems, Next.js web applications, and SaaS architectures.",
    url: pageUrl,
    locality: "Noida / Delhi NCR",
    region: "India",
    postalCode: "201301",
    country: "IN",
  });

  const faqs = [
    {
      question: "Why do Indian and international founders choose CookMyTech over traditional Indian IT companies?",
      answer:
        "Traditional Indian IT outsourcers compete on low cost with high junior developer turnover, resulting in technical debt, slow release cycles, and bloated project management. CookMyTech operates as a modern boutique engineering studio: senior-only developer execution, direct GitHub access, modern tech stacks (Next.js 16, TypeScript, Python, LLMs), guaranteed 48-hour first commit, and 100% intellectual property ownership.",
    },
    {
      question: "How do you manage communication and time zone overlap?",
      answer:
        "We are based in India (IST) and maintain dedicated overlapping hours for clients across North America (EST/PST), Europe (GMT/CET), the Middle East (GST), and Southeast Asia (SGT). We communicate asynchronously via Slack, GitHub issues, and weekly recorded video demos.",
    },
    {
      question: "What billing and engagement models do you support for Indian and global clients?",
      answer:
        "We offer transparent, fixed-scope milestone pricing (in INR for domestic Indian entities with GST invoicing, or USD/EUR/GBP for international clients via wire/Stripe) as well as monthly dedicated senior engineering sprint retainers with zero hidden charges.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  return (
    <div className="bg-white text-black min-h-screen font-mono flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Locations", item: "/locations" },
            { name: "India", item: "/locations/india" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Pan-India & Global Delivery Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            AI & Full-Stack Software Development Company in India
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered software systems built for international standards, high concurrency, and zero downtime. CookMyTech partners with ambitious founders, startups, and enterprises across India (Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune) and worldwide to build production AI applications, SaaS platforms, and modern web architectures.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Get Engineering Proposal →
            </Link>
            <Link
              href="/case-studies"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-gray-100 transition-colors font-bold inline-block"
            >
              View Case Studies
            </Link>
          </div>
        </section>

        {/* THREE CORE PILLARS */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">World-Class Engineering Rigor</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              We write TypeScript, Python, and Go code adhering to Google and Airbnb style guides, comprehensive automated testing, and zero-compromise security architecture.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Transparent Fixed Sprints</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Clear scope definitions, detailed architectural roadmaps, milestone deliverables, and zero unexpected budget expansions. Full GST tax invoicing provided for Indian entities.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">100% Intellectual Property Transferred</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              You own all intellectual property rights, Git repositories, AWS/GCP infrastructure, and deployment keys with zero proprietary license restrictions.
            </p>
          </div>
        </section>

        {/* ENGINEERING SUITE */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-8">
            // Full Engineering Capabilities Across India
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-software-development" className="hover:underline">
                  AI Software Engineering →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Custom machine learning models, predictive intelligence, and enterprise AI software pipelines.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-agent-development" className="hover:underline">
                  Autonomous AI Agents →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Multi-agent orchestration, LangGraph loops, deterministic tool calling, and workflow automation.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/nextjs-development" className="hover:underline">
                  Next.js & React Engineering →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Ultra-fast App Router applications optimized for sub-100ms TTFB, zero CLS, and top SEO visibility.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/saas-development" className="hover:underline">
                  SaaS Platforms & Cloud →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Multi-tenant database tenancy, Stripe & Razorpay subscription engines, and automated onboarding.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/rag-development" className="hover:underline">
                  Enterprise RAG Pipelines →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Vector database retrieval, semantic embeddings, document intelligence, and grounded LLM answers.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/full-stack-development" className="hover:underline">
                  Full-Stack MERN & Node.js →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                High-concurrency microservices, PostgreSQL, Redis caching, Docker, and AWS/GCP cloud orchestration.
              </p>
            </div>
          </div>
        </section>

        {/* FAQS */}
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

        {/* CTA BANNER */}
        <div className="bg-black text-white p-8 border border-black flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <div>
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build With Senior Engineers in India?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable technical specification and proposal within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Project Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
