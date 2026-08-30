import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "SaaS Development Company | Custom SaaS Application Development",
  description:
    "CookMyTech is a SaaS development company building scalable software-as-a-service applications, multi-tenant architectures, subscription billing engines, and SaaS MVPs.",
  path: "/services/saas-development",
  keywords: [
    "SaaS development company",
    "SaaS development services",
    "custom SaaS development",
    "SaaS application development",
    "SaaS product development",
    "SaaS MVP development",
  ],
});

export default function SaasDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/saas-development";
  const serviceSchema = generateServiceSchema({
    name: "SaaS Development Services",
    description: "End-to-end multi-tenant SaaS application engineering, subscription billing, cloud infrastructure, and user onboarding.",
    url: serviceUrl,
    serviceType: "SaaS Software Engineering",
  });

  const faqs = [
    {
      question: "How much does SaaS development cost?",
      answer:
        "SaaS development costs depend on feature complexity, multi-tenancy model, third-party integrations, and compliance needs. CookMyTech provides fixed-scope sprint pricing with zero hidden fees.",
    },
    {
      question: "What components are included in your SaaS development services?",
      answer:
        "Multi-tenant database schema isolation, Stripe/Paddle subscription billing, user authentication (OAuth2, magic links), role-based permissions (RBAC), admin dashboard, and automated deployments.",
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
            { name: "SaaS Development", item: "/services/saas-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            SaaS Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Custom SaaS Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Engineered SaaS platforms built to scale from launch to millions of ARR. Multi-tenant database design, automated subscription billing, user onboarding, and enterprise security.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Launch SaaS Platform →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">SaaS Core Architecture</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>• Multi-Tenant Row-Level Security (RLS)</li>
              <li>• Stripe / Paddle Usage & Tiered Subscriptions</li>
              <li>• Automated User Onboarding & Team Invites</li>
              <li>• Webhook Infrastructure & Event Processing</li>
            </ul>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">AI-Enhanced SaaS</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Differentiate your SaaS by embedding native AI capabilities, smart copilots, and automated workflow triggers.
            </p>
            <Link href="/services/ai-saas-development" className="text-xs font-bold underline">
              Explore AI SaaS Services →
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build Your SaaS Product?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an technical blueprint and estimate within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Schedule SaaS Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
