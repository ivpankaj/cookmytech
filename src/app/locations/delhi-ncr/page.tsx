import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI & Custom Software Development Company in Delhi NCR | CookMyTech",
  description:
    "CookMyTech is a senior software engineering studio in Delhi NCR. We build custom AI software, autonomous AI agents, enterprise RAG, high-scale web applications, and multi-tenant SaaS platforms.",
  path: "/locations/delhi-ncr",
  keywords: [
    "software development company Delhi NCR",
    "AI development company Delhi NCR",
    "custom software developers Delhi NCR",
    "AI software company Delhi NCR",
    "web development company Delhi NCR",
    "hire software developers Gurgaon Delhi Noida",
  ],
});

export default function DelhiNcrLocationPage() {
  const pageUrl = "https://www.cookmytech.com/locations/delhi-ncr";
  const localSchema = generateLocalBusinessSchema({
    locationName: "Delhi NCR Software & AI Studio",
    description:
      "CookMyTech provides enterprise software development, generative AI solutions, autonomous agents, and Next.js applications across the Delhi NCR metro region.",
    url: pageUrl,
    locality: "Delhi NCR",
    region: "National Capital Region",
    postalCode: "110001",
    country: "IN",
  });

  const faqs = [
    {
      question: "How does CookMyTech collaborate with tech startups and enterprises in Delhi NCR?",
      answer:
        "We operate as an extension of your product and engineering leadership. We participate in technical architecture sprint planning, provide senior developers on dedicated sprints, deliver first commits within 48 hours, and offer both in-person discovery meetings in Delhi, Gurgaon, and Noida, as well as seamless hybrid collaboration.",
    },
    {
      question: "What makes CookMyTech different from traditional IT outsourcing agencies in Delhi NCR?",
      answer:
        "Unlike bloated IT agencies that staff projects with junior freshers and multiple management layers, CookMyTech is a senior-only engineering studio. Senior software specialists write, test, and ship every line of your codebase with zero technical debt.",
    },
    {
      question: "Can you build multi-tenant AI SaaS platforms for venture-backed startups in Delhi NCR?",
      answer:
        "Yes. We have architected numerous multi-tenant SaaS products featuring Stripe/Razorpay billing, organization workspaces, role-based access control (RBAC), and embedded LLM workflows that scale smoothly to hundreds of thousands of users.",
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
            { name: "Delhi NCR", item: "/locations/delhi-ncr" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            National Capital Region Tech Partner
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            AI & Custom Software Development Company in Delhi NCR
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Partner with senior full-stack and AI software engineers who understand high scale. CookMyTech helps funded startups, digital product brands, and enterprises across Delhi, Gurgaon, and Noida build resilient web apps, autonomous AI agents, and enterprise cloud infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Start Delhi NCR Project Discovery →
            </Link>
            <Link
              href="/case-studies"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-gray-100 transition-colors font-bold inline-block"
            >
              Explore Production Builds
            </Link>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Senior-Only Engineering</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Every system architecture and line of code is produced by experienced software specialists. No junior handoffs, no unmaintainable spaghetti code, and no hidden management overhead.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Rapid 48-Hour First Commit</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              We eliminate traditional agency onboarding inertia. Within 48 hours of sprint approval, your project repository is initialized, dependencies configured, and first code committed.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Enterprise Security & Compliance</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Strict mutual NDAs, SOC2/GDPR compliance standards, zero-data-retention AI API policies, and complete intellectual property ownership transferred to you upon milestone completion.
            </p>
          </div>
        </section>

        {/* SERVICES IN NCR */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-8">
            // Full-Stack & AI Capabilities Across Delhi NCR
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-software-development" className="hover:underline">
                  AI Software Engineering →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Production-grade artificial intelligence software, predictive engines, and intelligent customer-facing tools.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/saas-development" className="hover:underline">
                  Multi-Tenant SaaS Platforms →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Subscription engines, multi-region database tenancy, automated onboarding, and enterprise security for SaaS founders.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/nextjs-development" className="hover:underline">
                  Next.js 16 Web Applications →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                High-speed App Router web applications engineered for sub-100ms TTFB, zero CLS, and superior search rankings.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-agent-development" className="hover:underline">
                  Autonomous AI Agents →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Deterministic agent loops, tool-calling pipelines, LangGraph workflows, and automated operational workers.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/rag-development" className="hover:underline">
                  Enterprise RAG Pipelines →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Vector database embeddings, hybrid search, document intelligence, and zero-hallucination knowledge assistants.
              </p>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/full-stack-development" className="hover:underline">
                  Full-Stack TypeScript & Node.js →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Robust microservices, PostgreSQL, Redis caching, Docker containerization, and AWS/GCP cloud architectures.
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build With Senior Engineers in Delhi NCR?</h2>
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
