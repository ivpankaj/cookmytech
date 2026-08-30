import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Software Development Company | Custom AI Solutions",
  description:
    "CookMyTech provides enterprise AI software development services. We design, engineer, and deploy scalable artificial intelligence software for startups and growth companies.",
  path: "/services/ai-software-development",
  keywords: [
    "AI software development company",
    "AI software development services",
    "custom AI software",
    "enterprise AI software",
    "AI software engineers",
  ],
});

export default function AiSoftwareDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/ai-software-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Software Development Services",
    description: "Production AI software engineering, intelligent workflow integration, and scalable AI infrastructure.",
    url: serviceUrl,
    serviceType: "Software Engineering & AI Development",
  });

  const faqs = [
    {
      question: "What makes AI software development different from traditional software?",
      answer:
        "AI software requires managing non-deterministic outputs, prompt optimization, vector index retrieval, model latency management, and token usage costs in addition to standard software engineering best practices.",
    },
    {
      question: "Can CookMyTech build custom AI software for internal enterprise business processes?",
      answer:
        "Yes, we build secure internal AI software tools such as enterprise document intelligence engines, automated customer support agents, data analytics pipelines, and workflow automation systems.",
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
            { name: "AI Software Development", item: "/services/ai-software-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            AI Engineering
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            AI Software Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered artificial intelligence software built for production resilience, zero downtime, and seamless enterprise integration. We translate complex AI capabilities into intuitive, commercial software.
          </p>
          <Link
            href="/contact"
            className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
          >
            Schedule Technical Consultation →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">What We Build</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>• Custom AI Software Applications & Web Tools</li>
              <li>• Enterprise AI Document Processing & Search</li>
              <li>• Predictive Analytics & Automated Data Pipelines</li>
              <li>• Intelligent API Gateways & LLM Orchestrators</li>
            </ul>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Why CookMyTech</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We operate as a senior software engineering studio. No junior handoffs, no unmaintainable spaghetti code. Every line of AI software is tested, documented, and delivered with 100% IP ownership.
            </p>
            <Link href="/services/ai-development" className="text-xs font-bold underline">
              View All AI Services →
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
            <h2 className="font-display text-xl font-bold uppercase">Build Your AI Software</h2>
            <p className="text-xs text-gray-400 mt-1">Get an engineering proposal and quote within 24 hours.</p>
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
