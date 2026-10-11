import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateLocalBusinessSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Software & AI Development Company in Greater Noida | CookMyTech",
  description:
    "CookMyTech provides custom software engineering and AI development services in Greater Noida. We build web applications, business automation, and cloud platforms for companies in Knowledge Park and Pari Chowk.",
  path: "/locations/greater-noida",
  keywords: [
    "software development company Greater Noida",
    "AI development company Greater Noida",
    "web development company Greater Noida",
    "custom software development Greater Noida",
    "IT company Knowledge Park Greater Noida",
    "business automation software Greater Noida",
  ],
});

export default function GreaterNoidaLocationPage() {
  const pageUrl = "https://www.cookmytech.com/locations/greater-noida";
  const localSchema = generateLocalBusinessSchema({
    locationName: "Greater Noida Software Studio",
    description:
      "CookMyTech delivers custom software development, business process automation, enterprise AI agents, and web applications for businesses in Greater Noida, Uttar Pradesh.",
    url: pageUrl,
    locality: "Greater Noida",
    region: "Uttar Pradesh",
    postalCode: "201310",
    country: "IN",
  });

  const faqs = [
    {
      question: "What types of businesses does CookMyTech serve in Greater Noida?",
      answer:
        "We partner with emerging startups, industrial manufacturing units, educational institutions, e-commerce distributors, and logistics firms situated across Greater Noida (Knowledge Park, Pari Chowk, Surajpur industrial area, and Ecotech zones) requiring modern cloud software, custom ERP/CRM integrations, and AI workflow automation.",
    },
    {
      question: "Can CookMyTech modernize legacy software systems for Greater Noida enterprises?",
      answer:
        "Yes. We specialize in software modernization: migrating legacy monolithic desktop and on-premise applications into scalable, secure cloud-native web architectures built with Next.js, Node.js, and PostgreSQL.",
    },
    {
      question: "How do we collaborate on engineering sprints with your team?",
      answer:
        "We offer flexible engagement models including fixed-scope milestone sprints and dedicated senior engineering pods. We provide daily Slack/Teams updates, weekly code demos, and direct access to senior developers.",
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
            { name: "Greater Noida", item: "/locations/greater-noida" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Greater Noida Technology & Industrial Hub
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Software & AI Development Company in Greater Noida
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Empowering Greater Noida&apos;s rapidly expanding industrial, logistics, educational, and tech sectors with robust custom software, AI-driven process automation, and modern web applications engineered for scalability and uptime.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Discuss Your Greater Noida Project →
            </Link>
            <Link
              href="/services/custom-software-development"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-gray-100 transition-colors font-bold inline-block"
            >
              Explore Software Services
            </Link>
          </div>
        </section>

        {/* VALUE PILLARS */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Enterprise Automation & ERPs</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Automate multi-step manufacturing workflows, supply chain inventory tracking, logistics dispatching, and custom operational dashboards with real-time data sync.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">AI Integration & Document Intelligence</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Eliminate manual data entry with custom OCR and LLM-powered document intelligence that extracts data from invoices, shipping bills, and contracts with 99.8% precision.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Zero Vendor Lock-In</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              We build your software in your private Git repositories. You retain complete ownership of all source code, deployment scripts, and intellectual property.
            </p>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-8">
            // Targeted Software Solutions for Greater Noida
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/ai-automation" className="hover:underline">
                  Business Workflow Automation →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Intelligent robotic process automation (RPA) and background workers that streamline repetitive operational bottlenecks.
              </p>
              <Link href="/services/ai-automation" className="font-bold underline text-black">
                View Automation
              </Link>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/web-application-development" className="hover:underline">
                  Cloud Web Applications →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Secure web portals, internal dashboards, and customer-facing platforms built with React, Next.js, and high-concurrency Node.js backends.
              </p>
              <Link href="/services/web-application-development" className="font-bold underline text-black">
                View Web Apps
              </Link>
            </div>

            <div className="border border-black p-6 bg-white">
              <h3 className="font-bold text-base mb-2">
                <Link href="/services/api-development" className="hover:underline">
                  API & System Integrations →
                </Link>
              </h3>
              <p className="text-gray-600 mb-3">
                Connect legacy databases, SAP/Tally accounting, payment gateways, and WhatsApp notifications into unified data streams.
              </p>
              <Link href="/services/api-development" className="font-bold underline text-black">
                View API Services
              </Link>
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
            <h2 className="font-display text-xl font-bold uppercase">Ready to Build in Greater Noida?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an actionable technical specification and fixed-scope estimate in 24 hours.</p>
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
