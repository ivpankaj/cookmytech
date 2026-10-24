import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "RAG Development Company | Enterprise Retrieval-Augmented Generation Services",
  description:
    "CookMyTech is a RAG development company engineering enterprise Retrieval-Augmented Generation systems, vector search pipelines, and hybrid semantic retrieval software.",
  path: "/services/rag-development",
});

export default function RagDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/rag-development";
  const serviceSchema = generateServiceSchema({
    name: "RAG Development Services",
    description:
      "Enterprise Retrieval-Augmented Generation, vector embedding pipelines, hybrid BM25 + dense search, semantic caching, and accurate citation systems.",
    url: serviceUrl,
    serviceType: "Retrieval-Augmented Generation Engineering",
  });

  const faqs = [
    {
      question: "What is Retrieval-Augmented Generation (RAG) and why do enterprises need it?",
      answer:
        "RAG is an architectural pattern that grounds Large Language Models with private enterprise knowledge bases (PDFs, SQL databases, internal wikis, CRM data) before generating an answer. Instead of training or fine-tuning an expensive model, RAG fetches the exact relevant document chunks in real time, injecting them into the context window so the model delivers factual, up-to-date responses with verifiable citations.",
    },
    {
      question: "When should a business use RAG instead of model fine-tuning?",
      answer:
        "RAG is optimal when your proprietary data updates frequently (daily or hourly), when you require exact document citations, or when data access permissions must be enforced per user. Fine-tuning is better suited for teaching a model a specialized linguistic tone, niche domain vocabulary, or formatting style—not for static knowledge recall.",
    },
    {
      question: "Which vector databases and search algorithms do you implement?",
      answer:
        "We implement managed and self-hosted vector databases based on latency, security, and scale requirements, including Pinecone, Qdrant, pgvector (PostgreSQL), Weaviate, and Milvus. We combine dense semantic embeddings with sparse BM25 lexical keyword matching (Hybrid Search) plus Cohere/BGE rerankers for top-tier retrieval accuracy.",
    },
    {
      question: "How do you guarantee data privacy and compliance in RAG systems?",
      answer:
        "We engineer end-to-end encryption for document ingestion pipelines, enforce document-level Access Control Lists (ACLs) so users only retrieve records they are authorized to view, and configure enterprise LLM gateways that forbid data retention for third-party model training.",
    },
    {
      question: "What factors influence the cost and latency of a production RAG pipeline?",
      answer:
        "Key cost and latency drivers include document volume and ingestion frequency, vector database sizing, embedding model compute, semantic caching coverage (which reduces repetitive LLM token costs by up to 60%), and reranking complexity. Typical search response latencies average under 100ms before streaming.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Data Audit & Ingestion Architecture",
      desc: "We inventory your document sources (PDFs, Notion, SQL databases, Google Drive) and establish real-time or batch parsing pipelines with automated metadata extraction.",
    },
    {
      step: "02",
      title: "Chunking & Embedding Optimization",
      desc: "We test domain-tailored chunking strategies (semantic chunking, sliding windows, hierarchical parent-child trees) paired with high-performance embedding models (text-embedding-3, Voyage AI, BGE).",
    },
    {
      step: "03",
      title: "Hybrid Search & Reranking Integration",
      desc: "We implement dense vector search alongside sparse BM25 keyword matching, running cross-encoder reranking algorithms to ensure top-K retrieved contexts are strictly relevant.",
    },
    {
      step: "04",
      title: "Citation Enforcement & Hallucination Guardrails",
      desc: "We design system prompts and post-generation verifiers that enforce strict grounding: if the retrieved context does not answer the question, the system gracefully declines rather than hallucinating.",
    },
    {
      step: "05",
      title: "Production Deployment & Semantic Caching",
      desc: "We deploy high-availability API endpoints with Redis semantic caching, OpenTelemetry tracing, retrieval benchmark evaluation suites (RAGAS), and monitoring.",
    },
  ];

  const deliverables = [
    "Production-ready RAG application repository with typed TypeScript or Python backend",
    "Automated document ingestion, cleaning, and vector indexing microservices",
    "Hybrid search (Dense Vector + BM25 Sparse) pipeline with Cohere or BGE reranking",
    "Sub-100ms vector retrieval integration with Pinecone, Qdrant, or pgvector",
    "Role-based access control (RBAC) ensuring granular document-level permission isolation",
    "Semantic caching layer (Redis) to drastically reduce repeat token expenditures",
    "Comprehensive automated evaluation suite using RAGAS for faithfullness and context precision",
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
            { name: "RAG Development", item: "/services/rag-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Vector & RAG Engineering
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            RAG Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is an enterprise RAG development company. We build high-accuracy Retrieval-Augmented Generation (RAG) systems, vector database architectures, and knowledge search engines that connect LLMs directly to your private enterprise data with sub-100ms retrieval and verifiable citations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult RAG Engineers →
            </Link>
            <Link
              href="/blog/how-to-build-a-rag-application"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read RAG Architecture Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Enterprise Challenge
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              LLMs Know the Web, But Not Your Company
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Base foundational models (like GPT-4o or Claude 3.5 Sonnet) lack access to your internal documentation, customer purchase histories, proprietary technical specs, and internal compliance handbooks.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              When prompted on private business domain knowledge, standard AI tools hallucinate convincing but incorrect answers, breach data confidentiality, or return outdated information that damages customer trust.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Solution
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Production Hybrid RAG with Strict Grounding
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We design enterprise RAG architectures that index your knowledge into high-performance vector databases. Before any response is generated, our search pipeline dynamically retrieves the most relevant chunks, reranks them for precision, and forces the model to cite exact source sentences.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Hybrid retrieval: Dense semantic vectors + Sparse BM25 keyword matching</li>
              <li className="flex items-center gap-2">✔ Cross-encoder reranking to elevate true context relevance</li>
              <li className="flex items-center gap-2">✔ Document-level ACLs ensuring strict tenant and role isolation</li>
              <li className="flex items-center gap-2">✔ Sub-100ms vector query latencies with semantic caching</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience & Use Cases
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our RAG Development Services Are Built For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprise Knowledge & Operations</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Organizations looking to empower customer success, legal, support, or engineering teams with an internal AI knowledge assistant that answers complex queries directly from internal wikis, contracts, and ticket histories.
                </p>
              </div>
              <Link href="/services/ai-chatbot-development" className="text-xs font-bold uppercase underline">
                AI Chatbot Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI SaaS Founders & Startups</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders engineering document search, legal tech analysis, medical record querying, or finance intelligence SaaS products requiring multi-tenant vector isolation and high gross margins.
                </p>
              </div>
              <Link href="/services/ai-saas-development" className="text-xs font-bold uppercase underline">
                AI SaaS Development →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Customer Support & E-Commerce</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Brands seeking 24/7 automated resolution bots that consult live product manuals, return policies, and stock catalogs to resolve customer inquiries with 0% hallucinations.
                </p>
              </div>
              <Link href="/services/ai-agent-development" className="text-xs font-bold uppercase underline">
                AI Agent Services →
              </Link>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Vector Architecture Stack
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Supported Vector Databases & RAG Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Pinecone", desc: "Serverless managed vector search with metadata filtering" },
              { title: "pgvector", desc: "PostgreSQL native vector extensions for unified data" },
              { title: "Qdrant", desc: "Rust-based vector search engine with payload filtering" },
              { title: "Weaviate", desc: "Hybrid search vector engine with built-in modules" },
              { title: "Cohere Rerank", desc: "Cross-encoder models optimizing retrieval ranking" },
              { title: "LlamaIndex", desc: "Advanced data indexing, document splitting & trees" },
              { title: "Redis Cache", desc: "Semantic response caching for token cost protection" },
              { title: "RAGAS Framework", desc: "Automated faithfulness & context precision benchmarking" },
            ].map((tech) => (
              <div key={tech.title} className="p-4 border border-black bg-gray-50">
                <div className="font-display font-bold text-sm mb-1">{tech.title}</div>
                <div className="text-[11px] text-gray-600 leading-tight">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* STEP-BY-STEP PROCESS */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Methodology
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our RAG Engineering Process
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
              We hand over clean, production-verified software with zero third-party platform lock-in.
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
              Security, Permissions & Cost Controls
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              A production RAG system must protect confidentiality and control infrastructure expenditure:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Granular Tenant Isolation:</strong> Namespace partitioning in vector databases to ensure customers never access another organization's vectors.</li>
              <li>• <strong>Document-Level Access Control (ACL):</strong> Dynamic metadata filters passed directly during similarity searches matching the querying user's auth token.</li>
              <li>• <strong>Semantic Caching:</strong> Storing recent query embeddings in Redis to serve identical questions at sub-10ms with 0 LLM token cost.</li>
              <li>• <strong>Verification Benchmarks:</strong> Automated continuous regression evaluations using synthetic test sets to track hallucination rates over time.</li>
            </ul>
          </div>
        </section>

        {/* RELATED SERVICES & ARTICLES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Complementary Services & Deep Dives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/services/ai-agent-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">AI Agent Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Autonomous reasoning & tool calling loops</div>
            </Link>
            <Link
              href="/services/llm-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">LLM Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Prompt engineering & private model setups</div>
            </Link>
            <Link
              href="/blog/rag-vs-fine-tuning-differences-costs-use-cases"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">RAG vs Fine-Tuning Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Architectural differences, costs & trade-offs</div>
            </Link>
            <Link
              href="/blog/how-to-build-a-rag-application"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Build a RAG App Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Step-by-step vector indexing tutorial</div>
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
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">
              Ready to Search Your Enterprise Knowledge?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build Production RAG Systems With CookMyTech
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior AI engineers to scope your vector pipeline, model selection, and document ingestion timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start RAG Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
