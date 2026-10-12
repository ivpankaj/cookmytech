import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Application Development Company | Custom AI Apps",
  description:
    "CookMyTech is an AI application development company building custom AI-powered web applications, predictive workflow engines, intelligent tools, and commercial AI software.",
  path: "/services/ai-application-development",
  keywords: [
    "AI application development company",
    "custom AI app development",
    "AI application development services",
    "build AI application",
    "AI web application development",
    "enterprise AI app engineering",
  ],
});

export default function AiApplicationDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/ai-application-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Application Development Services",
    description:
      "End-to-end custom artificial intelligence application engineering, model fine-tuning, responsive UI/UX, and cloud infrastructure.",
    url: serviceUrl,
    serviceType: "Artificial Intelligence Application Engineering",
  });

  const faqs = [
    {
      question: "What is involved in building a custom AI application?",
      answer:
        "Building a production AI application involves data ingestion architecture, vector embedding generation, LLM or ML model integration, prompt and inference optimization, deterministic guardrails, responsive frontend design, and scalable cloud deployment.",
    },
    {
      question: "How do you ensure data privacy when building AI applications?",
      answer:
        "We implement zero-data-retention API policies, isolated private tenant vector indexes, role-based access control (RBAC), and SOC2/GDPR-compliant cloud architectures so your proprietary data is never used to train external models.",
    },
    {
      question: "How quickly can CookMyTech launch an AI application MVP?",
      answer:
        "Our senior engineering sprints typically deliver a functional, production-ready AI application MVP within 3 to 6 weeks, complete with automated CI/CD and production monitoring.",
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
            { name: "AI Application Development", item: "/services/ai-application-development" },
          ]}
        />

        <section className="py-8 sm:py-12 border-b border-black">
          <div className="text-xs uppercase tracking-wider sm:tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Custom AI Engineering
          </div>
          <h1
            className="font-display text-[clamp(1.75rem,5.5vw,4.5rem)] font-bold leading-tight sm:leading-none uppercase mb-6 break-words"
            style={{ fontWeight: 800 }}
          >
            AI Application Development Company
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            Transform complex artificial intelligence capabilities into intuitive, scalable digital products. CookMyTech engineers custom AI web applications, intelligent enterprise workflows, and high-performance machine learning platforms built for commercial reliability and zero downtime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold text-center"
            >
              Request Architecture Blueprint →
            </Link>
            <Link
              href="/case-studies/enterprise-rag-agent-pipeline"
              className="bg-white text-black text-xs uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 border border-black hover:bg-gray-100 transition-colors font-bold text-center"
            >
              View AI Case Study
            </Link>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-12 sm:py-16 border-b border-black grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-5 sm:p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">AI Web & Mobile Applications</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Responsive, reactive web apps with embedded intelligence. Real-time document parsing, streaming LLM chat interfaces, and automated decision-support dashboards built with Next.js and React.
            </p>
          </div>

          <div className="p-5 sm:p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Predictive Analytics & Workflows</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Custom machine learning algorithms tailored to proprietary business metrics, churn prediction, recommendation engines, and automated anomaly detection across massive datasets.
            </p>
          </div>

          <div className="p-5 sm:p-8 border border-black bg-gray-50">
            <h2 className="font-display text-xl font-bold uppercase mb-4">Enterprise Guardrails & Security</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Deterministic validation layers, prompt injection defenses, token budget throttling, and structured JSON outputs ensuring compliance and zero hallucinations in commercial environments.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE WORKFLOW */}
        <section className="py-12 sm:py-16 border-b border-black">
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase mb-6 sm:mb-8">
            // Our AI Application Engineering Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">01 / MODELS</span>
              <h3 className="font-bold text-sm mb-2">Foundation & Open Source</h3>
              <p className="text-gray-600">OpenAI GPT-4o, Anthropic Claude 3.5, Llama 3, Mistral, customized via fine-tuning & prompt optimization.</p>
            </div>
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">02 / VECTOR RETRIEVAL</span>
              <h3 className="font-bold text-sm mb-2">Semantic Search</h3>
              <p className="text-gray-600">Pinecone, Qdrant, pgvector, and Milvus delivering sub-50ms hybrid keyword and vector retrieval.</p>
            </div>
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">03 / BACKEND ORCHESTRATION</span>
              <h3 className="font-bold text-sm mb-2">Event-Driven Pipelines</h3>
              <p className="text-gray-600">Python FastAPI, Node.js microservices, LangChain, LangGraph, and background Celery/Redis queues.</p>
            </div>
            <div className="border border-black p-5 sm:p-6 bg-white">
              <span className="font-bold text-gray-400 block mb-2">04 / APPLICATION LAYER</span>
              <h3 className="font-bold text-sm mb-2">High-Speed Frontend</h3>
              <p className="text-gray-600">Next.js 16 App Router, TypeScript, React Server Components, and Tailwind CSS engineered for zero layout shift.</p>
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
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase break-words">Ready to Build Your Custom AI App?</h2>
            <p className="text-xs text-gray-400 mt-1">Get an architecture specification and fixed-scope estimate in 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-wider sm:tracking-widest px-6 sm:px-8 py-3.5 font-bold hover:bg-gray-200 transition-colors text-center w-full md:w-auto"
          >
            Schedule Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
