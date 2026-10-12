import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Chatbot Development Company | Custom Conversational AI",
  description:
    "CookMyTech is an AI chatbot development company building intelligent, multi-channel conversational AI assistants, customer support agents, and enterprise RAG bots.",
  path: "/services/ai-chatbot-development",
  keywords: [
    "AI chatbot development company",
    "custom AI chatbot development",
    "conversational AI development services",
    "enterprise chatbot solutions",
    "build customer support AI chatbot",
    "LLM chatbot integration",
  ],
});

export default function AiChatbotDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/ai-chatbot-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Chatbot & Conversational AI Development Services",
    description:
      "Design, engineering, and deployment of enterprise-grade conversational AI assistants with custom document retrieval, multi-channel integrations, and tool execution.",
    url: serviceUrl,
    serviceType: "Conversational AI & Chatbot Engineering",
  });

  const faqs = [
    {
      question: "How does an enterprise AI chatbot differ from basic rule-based bots?",
      answer:
        "Rule-based bots follow rigid decision trees. Our enterprise AI chatbots leverage foundation LLMs combined with Retrieval-Augmented Generation (RAG) to understand natural human intent, parse complex multi-turn context, search private company documentation, and execute API actions dynamically.",
    },
    {
      question: "Can the chatbot integrate with our existing CRM, ticketing system, or database?",
      answer:
        "Yes. We build custom API connectors for Zendesk, HubSpot, Salesforce, Shopify, PostgreSQL, Slack, WhatsApp, and internal REST/GraphQL endpoints with secure OAuth2 authentication.",
    },
    {
      question: "How do you prevent the AI chatbot from hallucinating or providing inaccurate answers?",
      answer:
        "We implement strict grounding constraints, cosine similarity thresholds on vector chunk retrieval, system prompt guardrails, and deterministic fallback protocols that gracefully escalate to human operators when confidence is below threshold.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

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
      <Navbar />
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "AI Chatbot Development", item: "/services/ai-chatbot-development" },
          ]}
        />

        <section className="py-8 sm:py-12 border-b border-black">
          <div className="text-xs uppercase tracking-wider sm:tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Conversational Intelligence
          </div>
          <h1
            className="font-display text-[clamp(1.75rem,5.5vw,4.5rem)] font-bold leading-tight sm:leading-none uppercase mb-6 break-words"
            style={{ fontWeight: 800 }}
          >
            AI Chatbot Development Company
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Deploy intelligent, multi-channel conversational agents that resolve customer inquiries, automate repetitive support workflows, and guide prospects through complex sales funnels with zero human intervention and 99.9% factual accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold text-center"
            >
              Build Your Custom AI Chatbot →
            </Link>
            <Link
              href="/services/rag-development"
              className="bg-white text-black text-xs uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 border border-black hover:bg-gray-100 transition-colors font-bold text-center"
            >
              Explore RAG Technology
            </Link>
          </div>
        </section>

        {/* USE CASES GRID */}
        <section className="py-12 sm:py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-5 sm:p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Autonomous Customer Support</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Resolve up to 80% of Tier-1 and Tier-2 support tickets instantly. Our chatbots query knowledge bases, execute refunds, verify order statuses, and transfer smoothly to live agents when necessary.
            </p>
          </div>

          <div className="p-5 sm:p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Internal Knowledge Assistants</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Empower engineering, HR, legal, and operations teams to query internal Confluence, Notion, PDF policies, and Google Drive docs in natural language with source-cited responses.
            </p>
          </div>

          <div className="p-5 sm:p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Lead Qualification & Sales</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Qualify inbound leads 24/7 on your website or WhatsApp. Collect project specifications, calculate preliminary quotes, and book meetings directly into your team&apos;s calendar.
            </p>
          </div>
        </section>

        {/* TECH SPECS */}
        <section className="py-12 sm:py-16 border-b border-black">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase mb-6 sm:mb-8">
            // Core Architecture Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">INTEGRATION</span>
              <h3 className="font-bold text-sm mb-2">Omnichannel Reach</h3>
              <p className="text-gray-600">Web embed widget, WhatsApp Business API, Slack, Microsoft Teams, Discord, and custom REST API.</p>
            </div>
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">GROUNDING</span>
              <h3 className="font-bold text-sm mb-2">RAG Architecture</h3>
              <p className="text-gray-600">Vector search over proprietary PDF, Markdown, database, and API feeds with strict hallucination controls.</p>
            </div>
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">ACTION</span>
              <h3 className="font-bold text-sm mb-2">Function & Tool Calling</h3>
              <p className="text-gray-600">Agents that trigger database mutations, dispatch webhooks, update CRM records, and send email confirmations.</p>
            </div>
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">SECURITY</span>
              <h3 className="font-bold text-sm mb-2">Enterprise Privacy</h3>
              <p className="text-gray-600">Zero data retention APIs, automated PII redaction, encryption at rest and in transit, and multi-tenant isolation.</p>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-12 sm:py-16 border-b border-black">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-4">
                <h3 className="font-display text-base sm:text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <div className="bg-black text-white p-6 sm:p-8 border border-black flex flex-col md:flex-row md:items-center justify-between gap-6 mt-10 sm:mt-12">
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase break-words">Launch an AI Chatbot in Weeks</h2>
            <p className="text-xs text-gray-400 mt-1">Talk with our senior engineers and review architectural options today.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors text-center w-full md:w-auto"
          >
            Start Chatbot Discovery →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
