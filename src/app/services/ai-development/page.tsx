import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Development Company | Custom AI Application Engineering",
  description:
    "CookMyTech is a custom AI development studio engineering production AI applications, autonomous agents, RAG systems, and LLM products for startups and enterprises.",
  path: "/services/ai-development",
  keywords: [
    "AI development company",
    "AI development services",
    "custom AI development",
    "AI application development",
    "AI software development",
    "AI product engineering",
  ],
});

export default function AiDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.site/services/ai-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Development Services",
    description:
      "End-to-end custom AI application engineering, LLM integrations, autonomous AI agents, enterprise RAG, and AI automation.",
    url: serviceUrl,
    serviceType: "Artificial Intelligence Engineering",
  });

  const faqs = [
    {
      question: "How much does custom AI development cost?",
      answer:
        "AI development costs vary based on model complexity, data pipelines, fine-tuning needs, and UI integration. CookMyTech provides transparent, fixed-scope sprint pricing starting with a clear technical specification.",
    },
    {
      question: "Can you integrate OpenAI or Claude models into existing applications?",
      answer:
        "Yes. We design enterprise AI integrations using OpenAI API, Anthropic Claude, Llama 3, and open-source LLMs with secure API gateways, rate limiting, and cost optimization.",
    },
    {
      question: "How long does it take to build an AI application or MVP?",
      answer:
        "A functional AI MVP or prototype with LLM integration can be shipped in 3 to 6 weeks depending on data preparation and system workflow requirements.",
    },
    {
      question: "Do clients own the intellectual property and code?",
      answer:
        "Yes, 100%. Clients own all repositories, custom model prompts, pipeline code, and infrastructure configurations with zero vendor lock-in.",
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
            { name: "AI Development", item: "/services/ai-development" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            AI Engineering Studio
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6" style={{ fontWeight: 800 }}>
            Custom AI Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            We engineer production-grade artificial intelligence systems that solve real business bottlenecks. From autonomous AI agents and retrieval-augmented generation (RAG) to custom LLM wrappers and AI SaaS products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold"
            >
              Consult AI Engineers →
            </Link>
            <Link
              href="#capabilities"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              View AI Stack
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              The Problem With Generic AI Tools
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Off-the-shelf AI tools and simple wrapper scripts often fail in production. They suffer from latency issues, high API token expenses, data security risks, and unpredictable hallucinations that disrupt business logic.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              To build commercial AI products, companies need robust systems with caching layers, structured schema outputs, fallback models, and scalable vector databases.
            </p>
          </div>
          <div className="border border-black p-8 bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Our AI Engineering Approach
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              CookMyTech designs production AI applications from the ground up. We build custom pipelines that bridge large language models with your business data, databases, and APIs.
            </p>
            <ul className="space-y-2 text-xs font-bold">
              <li className="flex items-center gap-2">✔ Deterministic JSON output parsing</li>
              <li className="flex items-center gap-2">✔ Vector search with sub-100ms response</li>
              <li className="flex items-center gap-2">✔ Enterprise security & private data guards</li>
              <li className="flex items-center gap-2">✔ Automatic API token cost optimization</li>
            </ul>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section id="capabilities" className="py-16 border-b border-black">
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            What We Build in AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white">
              <h3 className="font-display text-xl font-bold mb-2">Autonomous AI Agents</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Multi-agent orchestrations with function calling, external tool usage, and automated multi-step decision workflows.
              </p>
              <Link href="/services/ai-agent-development" className="text-xs font-bold underline">
                AI Agent Services →
              </Link>
            </div>
            <div className="p-6 border border-black bg-white">
              <h3 className="font-display text-xl font-bold mb-2">Enterprise RAG Systems</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Document Q&A engines querying PDF, SQL, and internal knowledge bases using vector embeddings and semantic search.
              </p>
              <Link href="/services/rag-development" className="text-xs font-bold underline">
                RAG Services →
              </Link>
            </div>
            <div className="p-6 border border-black bg-white">
              <h3 className="font-display text-xl font-bold mb-2">AI SaaS Products</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Full-stack multi-tenant AI applications complete with Stripe subscriptions, rate limits, and usage analytics.
              </p>
              <Link href="/services/ai-saas-development" className="text-xs font-bold underline">
                AI SaaS Services →
              </Link>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            AI Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {["OpenAI GPT-4o", "Anthropic Claude 3.5", "Llama 3", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "pgvector", "Python", "Next.js", "TypeScript", "FastAPI"].map((tech) => (
              <span key={tech} className="border border-black bg-gray-100 px-4 py-2 text-xs font-bold uppercase">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Related Engineering Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <Link href="/services/ai-software-development" className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold">
              AI Software Dev →
            </Link>
            <Link href="/services/ai-web-app-development" className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold">
              AI Web Apps →
            </Link>
            <Link href="/services/llm-development" className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold">
              LLM Applications →
            </Link>
            <Link href="/services/ai-automation" className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold">
              AI Automation →
            </Link>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-display text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white p-8 md:p-12 border border-black flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Ready to build custom AI software?
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior AI engineers to discuss your architecture, data, and timeline requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Project Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
