import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "API Development Services | REST & GraphQL API Engineering",
  description:
    "CookMyTech provides API development services. We design, build, and document secure REST and GraphQL APIs, webhooks, and third-party SaaS integrations.",
  path: "/services/api-development",
  keywords: [
    "API development services",
    "REST API development",
    "GraphQL API engineering",
    "custom API development",
    "third-party integrations",
  ],
});

export default function ApiDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/api-development";
  const serviceSchema = generateServiceSchema({
    name: "API Development Services",
    description: "Self-documenting REST and GraphQL API engineering, webhook orchestrations, and high-concurrency API gateways.",
    url: serviceUrl,
    serviceType: "API & Systems Integration Engineering",
  });

  const faqs = [
    {
      question: "Do you provide self-documenting OpenAPI / Swagger specs with API builds?",
      answer:
        "Yes, all APIs engineered by CookMyTech include OpenAPI 3.0 specs, TypeScript SDK definitions, interactive Swagger documentation, and automated Postman collections.",
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
            { name: "API Development", item: "/services/api-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            API Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            API Development & Integration Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Clean, documented, and resilient API architecture. We engineer high-throughput REST and GraphQL APIs, OAuth2 authentication flows, webhook pipelines, and third-party SaaS integrations.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Build APIs →
          </Link>
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build Clean APIs?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an API design specification within 24 hours.</p>
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
