import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Startup MVP Development Services | Rapid Production Builds",
  description:
    "CookMyTech provides MVP development services for startups and founders. We engineer production-ready SaaS and AI MVPs in weeks with fixed-scope pricing.",
  path: "/services/mvp-development",
  keywords: [
    "MVP development services",
    "SaaS MVP development",
    "startup MVP engineering",
    "rapid prototype software",
    "founder technical studio",
  ],
});

export default function MvpDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/mvp-development";
  const serviceSchema = generateServiceSchema({
    name: "MVP Development Services",
    description: "Rapid production-grade minimum viable product engineering for tech startups and venture-backed founders.",
    url: serviceUrl,
    serviceType: "Startup Product & MVP Engineering",
  });

  const faqs = [
    {
      question: "How quickly can CookMyTech ship a production MVP?",
      answer:
        "Our standard MVP engineering sprint delivers the first code commit in 48 hours and ships a fully functional, production-ready MVP in 3 to 6 weeks.",
    },
    {
      question: "Will the MVP codebase be production scalable or will it need to be rewritten?",
      answer:
        "We build MVPs on production-grade Next.js, React, Node.js, and TypeScript architectures so you can scale smoothly to thousands of active users without rewriting your core software.",
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
            { name: "MVP Development", item: "/services/mvp-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Startup MVP Engineering
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            MVP Development Services for Startups
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Launch your software product fast without sacrificing engineering quality. We build production-ready MVPs complete with authentication, payments, database design, and AI capabilities in weeks.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Launch Your MVP →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">MVP Core Deliverables</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>• Responsive Frontend UX (Next.js / React / Tailwind)</li>
              <li>• Secure Authentication & Database Schema Setup</li>
              <li>• Stripe Subscription or One-Time Payment Gateway</li>
              <li>• Optional AI / LLM Feature Integration</li>
            </ul>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">48-Hour First Commit</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We start building immediately upon onboarding with full repository access, daily updates, and zero administrative bureaucracy.
            </p>
            <Link href="/industries/startups" className="text-xs font-bold underline">
              View Startup Industry Hub →
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Launch Your MVP?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable MVP scope and fixed quote within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Schedule MVP Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
