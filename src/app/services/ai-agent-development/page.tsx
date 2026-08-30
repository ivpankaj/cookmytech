import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Agent Development Company | Custom Autonomous AI Agents",
  description:
    "CookMyTech is an AI agent development company engineering autonomous AI agents, tool-calling workflows, multi-agent orchestration, and task automation software.",
  path: "/services/ai-agent-development",
  keywords: [
    "AI agent development company",
    "custom AI agents",
    "autonomous AI agents",
    "AI agent software development",
    "multi-agent orchestration",
  ],
});

export default function AiAgentDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/ai-agent-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Agent Development Services",
    description: "Engineering autonomous AI agents with function calling, external tool integration, memory systems, and multi-agent coordination.",
    url: serviceUrl,
    serviceType: "Autonomous AI Agent Engineering",
  });

  const faqs = [
    {
      question: "What is an AI agent and how does it differ from a standard chatbot?",
      answer:
        "A chatbot simply answers questions, whereas an AI agent has agency: it plans steps, calls APIs, executes database queries, verifies tool outputs, and completes multi-step workflows autonomously.",
    },
    {
      question: "What frameworks do you use for AI agent orchestration?",
      answer:
        "We build with custom TypeScript/Python agent loops, LangChain, LangGraph, AutoGen, CrewAI, and OpenAI Assistants API depending on project requirements.",
    },
    {
      question: "How do you ensure AI agents don't perform unintended actions?",
      answer:
        "We engineer human-in-the-loop (HITL) approval steps for critical actions (e.g. database mutations, payments), state sandboxing, and strict permission boundaries.",
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
            { name: "AI Agent Development", item: "/services/ai-agent-development" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Autonomous Systems Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            AI Agent Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Deploy autonomous AI agents that work for your business 24/7. We design intelligent agentic architectures capable of tool execution, browser interaction, API integration, and complex decision-making.
          </p>
          <Link href="/contact" className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block">
            Build AI Agents →
          </Link>
        </section>

        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Core Agent Capabilities</h2>
            <ul className="space-y-3 text-xs text-gray-700">
              <li>• Tool & API Function Calling Integration</li>
              <li>• Short-Term & Long-Term Memory (Redis/Vector DB)</li>
              <li>• Multi-Agent Collaboration & Supervisor Networks</li>
              <li>• Human-in-the-Loop Safeguards & Audit Logs</li>
            </ul>
          </div>
          <div className="p-8 border border-black bg-white">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">Commercial Use Cases</h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Autonomous customer triage agents, automated lead scraping & outreach, financial report compilation agents, and automated software QA test bots.
            </p>
            <Link href="/services/rag-development" className="text-xs font-bold underline">
              Explore RAG Systems →
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
            <h2 className="font-display text-xl font-bold uppercase">Automate Business Workflows With AI Agents</h2>
            <p className="text-xs text-gray-400 mt-1">Get an architecture roadmap and scope within 24 hours.</p>
          </div>
          <Link href="/contact" className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
            Schedule Agent Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
