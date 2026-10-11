import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "LLM Integration Services | Enterprise LLM Engineering",
  description:
    "CookMyTech provides enterprise LLM integration services. Connect OpenAI, Claude, Llama 3, and custom language models into your existing applications, APIs, and databases.",
  path: "/services/llm-integration",
  keywords: [
    "LLM integration services",
    "LLM application development",
    "OpenAI API integration",
    "enterprise LLM implementation",
    "custom LLM integration company",
    "large language model engineering",
  ],
});

export default function LlmIntegrationPage() {
  const serviceUrl = "https://www.cookmytech.com/services/llm-integration";
  const serviceSchema = generateServiceSchema({
    name: "Enterprise LLM Integration Services",
    description:
      "Seamless integration of proprietary and open-source Large Language Models into enterprise software architectures, backend APIs, and data workflows.",
    url: serviceUrl,
    serviceType: "Large Language Model Engineering & Integration",
  });

  const faqs = [
    {
      question: "Which LLM foundation models does CookMyTech integrate?",
      answer:
        "We integrate both proprietary models (OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro) and open-source models (Meta Llama 3, Mistral, DeepSeek) deployed securely on AWS Bedrock, GCP Vertex AI, Azure AI, or private GPU clusters.",
    },
    {
      question: "How do you control high API inference costs in production LLM systems?",
      answer:
        "We implement semantic caching (Redis / GPTCache) to avoid redundant completions, model routing (sending simple queries to smaller, faster models like Llama 3 8B and reserving GPT-4o for complex reasoning), prompt token compaction, and batch processing.",
    },
    {
      question: "Can LLMs interact directly with our SQL databases and backend APIs?",
      answer:
        "Yes. Through structured tool/function calling and LangGraph orchestration, LLMs can generate parameterized SQL queries, call internal REST endpoints, validate schema responses, and execute workflows safely behind authorization layers.",
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
      <main id="main-content" className="flex-1 max-w-screen-xl mx-auto px-6 py-16 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
            { name: "LLM Integration", item: "/services/llm-integration" },
          ]}
        />

        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Model Integration & Orchestration
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            LLM Integration Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Connect state-of-the-art Large Language Models into your existing web applications, ERPs, CRMs, and backend databases. CookMyTech engineers resilient API connectors, semantic caching, token optimization, and deterministic tool-calling pipelines.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult with LLM Engineers →
            </Link>
            <Link
              href="/services/ai-agent-development"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-gray-100 transition-colors font-bold inline-block"
            >
              Explore Autonomous Agents
            </Link>
          </div>
        </section>

        {/* THREE COLUMN PILLARS */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Model Routing & Caching</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Cut inference latency by up to 70% and reduce token bills by 50%+. We engineer intelligent query routers that triage requests to optimal models and cache frequent semantic embeddings.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Deterministic Schema Outputs</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Guarantee structured JSON, Pydantic, and Zod responses. We enforce schema validation layers so LLM outputs can be piped directly into your production databases without parse errors.
            </p>
          </div>

          <div className="p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Private Cloud Deployments</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Deploy open-source weights (Llama 3, Mistral) in your own AWS VPC or GCP project with vLLM and Triton inference servers for complete regulatory compliance and IP sovereignty.
            </p>
          </div>
        </section>

        {/* WORKFLOW ROADMAP */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-8">
            // The LLM Integration Lifecycle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border border-black p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">PHASE 01</span>
              <h3 className="font-bold text-sm mb-2">Architectural Audit</h3>
              <p className="text-gray-600">Review data schemas, user workflows, security constraints, latency requirements, and expected token volumes.</p>
            </div>
            <div className="border border-black p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">PHASE 02</span>
              <h3 className="font-bold text-sm mb-2">Connector & Middleware</h3>
              <p className="text-gray-600">Develop secure API gateways, authentication proxies, rate limiters, and prompt orchestration templates.</p>
            </div>
            <div className="border border-black p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">PHASE 03</span>
              <h3 className="font-bold text-sm mb-2">Guardrails & Testing</h3>
              <p className="text-gray-600">Implement evaluation suites, automated regression testing, prompt injection guards, and human-in-the-loop triggers.</p>
            </div>
            <div className="border border-black p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">PHASE 04</span>
              <h3 className="font-bold text-sm mb-2">Telemetry & Scaling</h3>
              <p className="text-gray-600">Set up LangSmith / OpenTelemetry monitoring for token usage tracking, response latency, and output drift.</p>
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
            <h2 className="font-display text-xl font-bold uppercase">Upgrade Your Software With LLMs</h2>
            <p className="text-xs text-gray-400 mt-1">Schedule an architecture discovery session with our senior engineers today.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Integration Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
