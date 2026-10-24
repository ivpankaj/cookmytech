import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Development Company in India | Custom AI Application Services",
  description:
    "CookMyTech is an AI development company in India engineering custom AI applications, autonomous AI agents, enterprise RAG systems, and generative AI solutions for global businesses.",
  path: "/services/ai-development",
});

export default function AiDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/ai-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Development Services",
    description:
      "End-to-end custom AI application engineering, LLM integrations, autonomous AI agents, enterprise RAG, and AI automation.",
    url: serviceUrl,
    serviceType: "Artificial Intelligence Engineering",
  });

  const faqs = [
    {
      question: "How much does custom AI software development cost in India?",
      answer:
        "AI software development costs in India vary based on architectural scope: integrating commercial LLM APIs with vector databases starts at a much lower cost than training custom open-source models or building multi-agent autonomous graphs. CookMyTech provides transparent, fixed-scope sprint pricing with zero hidden maintenance fees.",
    },
    {
      question: "Can you integrate OpenAI, Claude, or open-source Llama models into our existing software?",
      answer:
        "Yes. We design enterprise AI integrations using OpenAI API, Anthropic Claude, Llama 3, and private VPC-hosted models with secure API gateways, rate limiting, and semantic token caching to protect operating margins.",
    },
    {
      question: "How long does it take to build an AI application or MVP?",
      answer:
        "A functional AI MVP or prototype featuring LLM tool calling, vector search, or autonomous workflow automation typically ships in 3 to 6 weeks depending on data preparation and schema validation requirements.",
    },
    {
      question: "Do clients own the intellectual property and code?",
      answer:
        "Yes, 100%. Clients own all Git repositories, custom prompt pipelines, evaluation test suites, and cloud infrastructure deployment scripts with zero vendor lock-in.",
    },
    {
      question: "How do you prevent hallucinations in commercial AI systems?",
      answer:
        "We implement deterministic guardrails: structured JSON schema validation (Zod/Pydantic), hybrid Retrieval-Augmented Generation (RAG) with exact document citations, cross-encoder reranking, and verification reflection loops that validate answers before delivering them to users.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Discovery & AI Architecture Blueprint",
      desc: "We analyze your business bottlenecks, evaluate model feasibility (RAG vs fine-tuning vs agent loops), and define structured input/output contracts.",
    },
    {
      step: "02",
      title: "Data Pipeline & Vector Indexing",
      desc: "We parse and clean your unstructured documents (PDFs, SQL databases, Notion, tickets) and index them into low-latency vector databases (Pinecone, Qdrant, pgvector).",
    },
    {
      step: "03",
      title: "Model Integration & Guardrail Engineering",
      desc: "We connect foundation models (GPT-4o, Claude 3.5, Llama 3) with deterministic schema validation, token spend caps, and Redis semantic caching.",
    },
    {
      step: "04",
      title: "Automated Evaluation & Red-Teaming",
      desc: "We benchmark system accuracy using RAGAS and synthetic test suites to verify sub-100ms vector search latencies and 0% critical hallucinations.",
    },
    {
      step: "05",
      title: "Production Deployment & Observability",
      desc: "We deploy containerized worker nodes to AWS or GCP with OpenTelemetry tracing, real-time token telemetry dashboards, and 100% IP transfer.",
    },
  ];

  const deliverables = [
    "Production-grade AI application repository with strict TypeScript or Python type safety",
    "Deterministic schema validation layers ensuring 100% parseable structured JSON outputs",
    "High-speed vector database pipeline with hybrid semantic and keyword BM25 search",
    "Redis semantic caching layer reducing repeat LLM token expenses by up to 60%",
    "Automated continuous evaluation benchmark suite tracking faithfulness and precision",
    "Containerized Docker configurations and automated CI/CD deployment pipelines",
    "100% intellectual property transfer, prompt manifests, and technical architecture manual",
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
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Custom AI Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is an AI development company in India engineering custom AI applications, autonomous AI agents, enterprise RAG systems, and scalable LLM software for startups, founders, and growing enterprises in India, the US, UK, and worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult AI Engineers →
            </Link>
            <Link
              href="/blog/what-are-ai-agents-and-how-do-they-work"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read AI Engineering Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Production Challenge
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              The Problem With Generic AI Wrappers
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Off-the-shelf AI tools and simple wrapper scripts often fail in production. They suffer from high model latency, runaway API token bills, confidential data leaks, and unpredictable hallucinations that disrupt business workflows.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              To build commercial AI products, companies need robust systems with caching layers, structured schema outputs, fallback models, and scalable vector databases.
            </p>
          </div>
          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Standard
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Our AI Engineering Approach
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              CookMyTech designs production AI applications from the ground up. We build custom pipelines that bridge large language models with your business data, databases, and APIs.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Deterministic JSON output parsing via Zod and Pydantic</li>
              <li className="flex items-center gap-2">✔ Vector search with sub-100ms response targets</li>
              <li className="flex items-center gap-2">✔ Enterprise security & private data guards with zero training retention</li>
              <li className="flex items-center gap-2">✔ Automatic API token cost optimization with semantic caching</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our AI Development Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI SaaS Founders & Startups</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders building AI-native products, vertical AI assistants, or intelligence features who need senior architecture without hiring expensive in-house AI research teams.
                </p>
              </div>
              <Link href="/services/ai-saas-development" className="text-xs font-bold uppercase underline">
                Explore AI SaaS Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprises Automating Workflows</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Companies seeking custom internal software to process thousands of unstructured documents, automate customer support triage, or query complex private databases.
                </p>
              </div>
              <Link href="/services/ai-software-development" className="text-xs font-bold uppercase underline">
                AI Software Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Product Leaders Integrating LLMs</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Engineering teams embedding generative AI features, smart semantic search, or conversational copilots directly into existing software platforms.
                </p>
              </div>
              <Link href="/services/llm-integration" className="text-xs font-bold uppercase underline">
                LLM Integration Services →
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section id="capabilities" className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering Capabilities
          </div>
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

        {/* STEP-BY-STEP PROCESS */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Execution Lifecycle
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our AI Development Process
          </h2>
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-black bg-white flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="font-display text-3xl font-bold bg-black text-white px-4 py-2">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold uppercase mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERABLES & GOVERNANCE */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Project Deliverables
            </h2>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              We ship clean, tested code with 100% intellectual property transfer and zero vendor lock-in.
            </p>
            <ul className="space-y-3 text-xs text-gray-800">
              {deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-black">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Security, Privacy & Cost Controls
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Deploying AI software requires strict governance:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Token Spend Caps:</strong> Hard limits per organization and user to eliminate unexpected API charges.</li>
              <li>• <strong>Prompt Injection Defense:</strong> Sanitized input layers preventing malicious prompt overrides.</li>
              <li>• <strong>Zero Training Retention:</strong> Enterprise API routing ensuring private customer data is never used for model training.</li>
              <li>• <strong>Full Source Code Ownership:</strong> 100% intellectual property rights transferred upon final milestone.</li>
            </ul>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            AI Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "OpenAI GPT-4o",
              "Anthropic Claude 3.5",
              "Llama 3",
              "LangChain",
              "LangGraph",
              "LlamaIndex",
              "Pinecone",
              "Qdrant",
              "pgvector",
              "Python",
              "Next.js",
              "TypeScript",
              "FastAPI",
              "Redis Cache",
            ].map((tech) => (
              <span key={tech} className="border border-black bg-gray-100 px-4 py-2 text-xs font-bold uppercase">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* RELATED SERVICES & GUIDES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Related Engineering Services & Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/services/ai-agent-development"
              className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              <div>AI Agent Development →</div>
              <div className="text-[11px] text-gray-500 hover:text-gray-300 font-normal mt-1">Autonomous tool calling & reasoning</div>
            </Link>
            <Link
              href="/services/rag-development"
              className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              <div>RAG Systems Dev →</div>
              <div className="text-[11px] text-gray-500 hover:text-gray-300 font-normal mt-1">Vector search & document Q&A</div>
            </Link>
            <Link
              href="/blog/what-are-ai-agents-and-how-do-they-work"
              className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              <div>Guide: What Are AI Agents? →</div>
              <div className="text-[11px] text-gray-500 hover:text-gray-300 font-normal mt-1">Deep dive into state graphs and tools</div>
            </Link>
            <Link
              href="/blog/ai-agent-development-cost-in-india"
              className="p-4 border border-black hover:bg-black hover:text-white transition-colors font-bold"
            >
              <div>AI Development Cost Guide →</div>
              <div className="text-[11px] text-gray-500 hover:text-gray-300 font-normal mt-1">Sprint scoping and pricing in 2026</div>
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
