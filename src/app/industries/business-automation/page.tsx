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
  title: "Enterprise Business Automation | Custom AI Agent & Workflow Engineering",
  description:
    "CookMyTech engineers custom business automation systems, autonomous AI agent pipelines, intelligent document processing, and ERP/CRM integrations to eliminate repetitive operational overhead.",
  path: "/industries/business-automation",
});

export default function BusinessAutomationPage() {
  const pageUrl = "https://www.cookmytech.com/industries/business-automation";

  const serviceSchema = generateServiceSchema({
    name: "Enterprise Business Automation Engineering",
    description:
      "Custom business process automation, autonomous AI agents, document parsing pipelines, internal tooling, and ERP/CRM system integration.",
    url: pageUrl,
    serviceType: "Business Process Automation Engineering",
  });

  const faqs = [
    {
      question: "How do custom AI automation systems differ from Zapier or Make?",
      answer:
        "Off-the-shelf tools like Zapier rely on rigid deterministic triggers (if-this-then-that) that fail when data formatting fluctuates or errors occur. Custom automation software engineered with autonomous LLM agents handles ambiguous, unstructured inputs (scanned PDFs, unstructured emails, handwritten notes), performs multi-step self-correction, verifies tool outputs, and directly interfaces with private databases and internal microservices.",
    },
    {
      question: "How do you guarantee accuracy and prevent AI hallucinations in automated business operations?",
      answer:
        "We implement deterministic validation schemas (Zod/Pydantic), confidence scoring thresholds, and Human-in-the-Loop (HITL) review gates for critical operational steps (e.g., invoices exceeding financial thresholds, customer refunds, or contract approvals). Actions below confidence cutoffs automatically route to human queues with contextual diffs.",
    },
    {
      question: "Which enterprise software systems and legacy databases can you automate?",
      answer:
        "We integrate with Salesforce, HubSpot, SAP, NetSuite, QuickBooks, Jira, Slack, Microsoft 365, Google Workspace, PostgreSQL, Oracle, and proprietary REST/SOAP APIs, building custom middleware that bridges modern AI models with legacy enterprise systems.",
    },
    {
      question: "How do you handle data security and compliance when automating sensitive business data?",
      answer:
        "All data pipelines adhere to strict zero-data-retention agreements with LLM providers. Data is encrypted in transit (TLS 1.3) and at rest (AES-256), with role-based access control, cryptographic audit logging, and full compliance with GDPR and the DPDP Act.",
    },
    {
      question: "What is the typical ROI and timeline for deploying custom business automation software?",
      answer:
        "Most enterprises achieve full capital payback within 3 to 6 months by reducing manual processing hours by 70–85%. We deliver functional production prototypes within 2 to 3 weeks and complete end-to-end operational rollouts in 6 to 10 weeks.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Industries", item: "/industries" },
    { name: "Business Automation", item: "/industries/business-automation" },
  ]);

  const solutions = [
    {
      title: "Intelligent Document Processing (IDP)",
      desc: "Extract structured data from invoices, shipping bills, legal contracts, and medical records with 99%+ accuracy using multimodal vision-language models and OCR.",
    },
    {
      title: "Autonomous Operational AI Agents",
      desc: "Multi-agent workflows that monitor inboxes, triage customer inquiries, execute database updates, and coordinate cross-departmental tasks without human intervention.",
    },
    {
      title: "ERP, CRM & Accounting Sync Engines",
      desc: "Custom bidirectional sync pipelines between Salesforce, QuickBooks, NetSuite, and internal databases with real-time discrepancy alerts.",
    },
    {
      title: "Automated Compliance & Audit Logging",
      desc: "Continuous automated verification of regulatory compliance, data access trails, and tamper-evident logging for financial and healthcare compliance.",
    },
    {
      title: "Human-in-the-Loop (HITL) Portals",
      desc: "Intuitive internal reviewer interfaces that present exception cases and AI-suggested actions for 1-click human verification and continuous reinforcement learning.",
    },
    {
      title: "Custom Internal Tools & Retool Alternatives",
      desc: "Tailored operations dashboards, admin portals, and data visualization tools built with modern Next.js and TypeScript, completely owned by your company.",
    },
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
            { name: "Business Automation", item: "/industries/business-automation" },
          ]}
        />

        {/* Hero Section */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Enterprise Automation Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Enterprise Business Process Automation
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Eliminate repetitive manual operations, data entry bottlenecks, and human error. CookMyTech engineers autonomous AI agent pipelines, intelligent document processing, and custom middleware that seamlessly interconnect your legacy ERPs, CRMs, and databases.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult Automation Engineers →
            </Link>
            <Link
              href="/services/ai-agent-development"
              className="bg-gray-100 text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Explore AI Agent Capabilities →
            </Link>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Automation Architecture
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Tailored Enterprise Automation Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="p-6 border border-black bg-gray-50 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold uppercase mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering FAQ
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-8">
            Frequently Asked Questions on Enterprise Automation
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
              Automate Your Complex Business Operations
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
              Share your workflow bottlenecks with our senior automation architects. We deliver a functional prototype and implementation roadmap within 14 business days.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Automation Scoping →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
