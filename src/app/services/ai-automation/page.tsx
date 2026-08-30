import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Automation Development Services | Business Process Automation",
  description:
    "CookMyTech engineers custom AI automation solutions, intelligent workflow pipelines, automated background jobs, and API integrations for modern businesses.",
  path: "/services/ai-automation",
  keywords: [
    "AI automation development",
    "business process automation",
    "custom AI pipelines",
    "workflow automation engineering",
  ],
});

export default function AiAutomationPage() {
  const serviceUrl = "https://www.cookmytech.site/services/ai-automation";
  const serviceSchema = generateServiceSchema({
    name: "AI Automation Development Services",
    description: "End-to-end intelligent workflow automation, automated data extraction pipelines, and background AI queue engineering.",
    url: serviceUrl,
    serviceType: "Business Process & AI Automation",
  });

  const faqs = [
    {
      question: "How does AI automation differ from traditional Zapier or Make integrations?",
      answer:
        "Traditional automation follows rigid if/else rules. AI automation handles unstructured text, messy PDF documents, complex decision trees, and natural language logic seamlessly.",
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
            { name: "AI Automation", item: "/services/ai-automation" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Workflow Automation Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            AI Automation Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Replace manual repetitive work with intelligent AI automation pipelines. We engineer custom background workers, API connectors, document extractors, and automated triage systems.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Automate Operations →
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Automate Your Business?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an automation technical plan within 24 hours.</p>
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
