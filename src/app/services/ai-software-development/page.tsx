import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Software Development Company | Custom Enterprise AI Software Services",
  description:
    "CookMyTech is an AI software development company engineering custom AI applications, LLM pipelines, intelligent enterprise software, and automation systems in India and worldwide.",
  path: "/services/ai-software-development",
});

export default function AiSoftwareDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/ai-software-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Software Development Services",
    description:
      "Enterprise custom AI software development, LLM integration pipelines, generative AI solutions, predictive analytics, and automated decision engines.",
    url: serviceUrl,
    serviceType: "Artificial Intelligence Software Engineering",
  });

  const faqs = [
    {
      question: "What makes custom AI software development different from traditional software?",
      answer:
        "Traditional software operates deterministically on hard-coded business rules and database queries. AI software introduces probabilistic model outputs, token rate constraints, embedding retrieval pipelines, and non-deterministic behavior. Engineering production AI software requires building deterministic guardrails, structured JSON output validation, fallback model routing, and semantic caching layers so the AI behaves predictably within your mission-critical workflows.",
    },
    {
      question: "Can CookMyTech integrate proprietary enterprise data without exposing confidential information?",
      answer:
        "Yes, absolutely. We design zero-retention data pipelines using enterprise private LLM endpoints (OpenAI Enterprise, Anthropic, AWS Bedrock, or private self-hosted open-source models like Llama 3 on private VPCs). Your confidential business documents, customer PII, and financial records are never retained for model retraining.",
    },
    {
      question: "How do you evaluate and guarantee AI software accuracy in production?",
      answer:
        "We build automated CI/CD evaluation harnesses using frameworks like RAGAS and DeepEval. Every prompt variation, model swap, or code change is automatically benchmarked against hundreds of synthetic and verified gold-standard ground-truth queries to measure context precision, hallucination frequency, and answer relevancy before deploying to production.",
    },
    {
      question: "What factors influence the cost and timeline of an enterprise AI software build?",
      answer:
        "Cost and timelines are determined by model complexity (commercial APIs vs fine-tuned private open-source models), vector database scale, integration points with existing internal databases, and automated evaluation depth. Typical scoped AI MVPs ship in 4 to 8 weeks with transparent milestone pricing.",
    },
    {
      question: "Do clients own 100% of the custom AI software intellectual property?",
      answer:
        "Yes, 100%. Clients retain full ownership of all custom software code, prompt engineering pipelines, dataset cleaning scripts, fine-tuning adapters, and deployment configurations with zero vendor lock-in.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Business Problem & AI Feasibility Assessment",
      desc: "We analyze your operational bottlenecks, evaluate whether RAG, fine-tuning, or agentic tool calling is the optimal architectural fit, and establish baseline accuracy metrics.",
    },
    {
      step: "02",
      title: "Data Pipeline & Infrastructure Architecture",
      desc: "We architect secure data ingestion pipelines, vector database schemas (Pinecone, Qdrant, pgvector), and API token spend protection guards.",
    },
    {
      step: "03",
      title: "Model Integration & Deterministic Guardrails",
      desc: "We connect leading LLMs (GPT-4o, Claude 3.5, Llama 3) with structured Zod/Pydantic schema outputs, semantic caching in Redis, and automated fallback models.",
    },
    {
      step: "04",
      title: "Automated Red-Teaming & Benchmark Testing",
      desc: "We stress-test the system against prompt injection attacks, run synthetic evaluation benchmarks, and verify sub-100ms vector search latencies.",
    },
    {
      step: "05",
      title: "Production Deployment & Observability",
      desc: "We deploy containerized worker services with real-time OpenTelemetry tracing, token cost dashboards, error alerting, and full IP handover.",
    },
  ];

  const deliverables = [
    "Complete production-ready AI software repository in TypeScript or Python",
    "Deterministic schema validation layers ensuring 100% parseable structured JSON outputs",
    "High-speed vector database integration with hybrid semantic and keyword search",
    "Redis semantic caching layer to drastically reduce third-party API token expenses",
    "Automated regression testing benchmark suite measuring faithfulness and accuracy",
    "Containerized Docker configurations and automated GitHub Actions CI/CD pipelines",
    "Complete IP ownership, prompt manifests, and comprehensive architecture documentation",
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
            { name: "AI Software Development", item: "/services/ai-software-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            AI Software Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            AI Software Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a custom AI software development company in India serving startups, founders, and growing enterprises in India, the US, UK, and worldwide. We build production-ready artificial intelligence software, generative AI products, autonomous agent pipelines, and custom enterprise automation tools built for high load and zero downtime.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult AI Software Engineers →
            </Link>
            <Link
              href="/blog/how-to-integrate-an-llm-into-an-existing-application"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read LLM Integration Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Commercial Challenge
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Why Off-The-Shelf AI Tools & Wrappers Fail in Business
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Off-the-shelf AI tools lack your organization's business context. They cannot interact with your internal SQL databases, adhere to strict customer data privacy standards, or integrate with existing ERP and CRM software workflows.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Furthermore, relying on generic third-party SaaS wrappers exposes your business to unpredictable per-seat subscription price hikes, unexpected API deprecations, and potential customer data leakage.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Standard
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Proprietary, Secure Custom AI Software
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              CookMyTech engineers bespoke AI software applications tailored to your exact operational workflows. You gain proprietary intellectual property, complete data privacy, deterministic execution, and substantial operational leverage.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Deterministic JSON output schemas eliminating hallucination bugs</li>
              <li className="flex items-center gap-2">✔ Semantic caching layers reducing repeat LLM token costs by up to 60%</li>
              <li className="flex items-center gap-2">✔ Zero data training retention protecting proprietary enterprise assets</li>
              <li className="flex items-center gap-2">✔ Automated evaluation suites guaranteeing high context precision</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our AI Software Development Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">AI SaaS Founders & Startups</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders building vertical AI SaaS products (legal tech, medical document intelligence, financial compliance, automated coding) who need senior engineering from blueprint to launch.
                </p>
              </div>
              <Link href="/services/ai-saas-development" className="text-xs font-bold uppercase underline">
                AI SaaS Development →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprises Automating Workflows</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Companies seeking custom internal software to process thousands of unstructured invoices, automate customer support triage, or generate contextual business intelligence reports.
                </p>
              </div>
              <Link href="/services/ai-automation" className="text-xs font-bold uppercase underline">
                AI Automation Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Product Leaders Upgrading Legacy Apps</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Engineering teams embedding generative AI features, smart semantic search, or conversational copilots directly into existing web and mobile software platforms.
                </p>
              </div>
              <Link href="/services/llm-integration" className="text-xs font-bold uppercase underline">
                LLM Integration Services →
              </Link>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Core AI Capabilities
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Custom AI Software Solutions We Engineer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Agents</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">Autonomous AI Agents</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Multi-agent systems executing multi-step reasoning, external tool execution, and browser automation loops.
              </p>
              <Link href="/services/ai-agent-development" className="text-xs font-bold underline mt-4 block">
                Agent Services →
              </Link>
            </div>
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Search</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">Enterprise RAG Systems</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sub-100ms vector search across private document repositories with exact citation guarantees and hybrid retrieval.
              </p>
              <Link href="/services/rag-development" className="text-xs font-bold underline mt-4 block">
                RAG Services →
              </Link>
            </div>
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Products</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">AI SaaS Platforms</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Multi-tenant AI web applications with Stripe subscription billing, token rate limiting, and margin protection.
              </p>
              <Link href="/services/ai-saas-development" className="text-xs font-bold underline mt-4 block">
                AI SaaS Services →
              </Link>
            </div>
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Pipelines</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">LLM Integrations</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connecting OpenAI, Claude, and Llama 3 into existing databases, APIs, and microservices with security gateways.
              </p>
              <Link href="/services/llm-integration" className="text-xs font-bold underline mt-4 block">
                LLM Services →
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
            Our AI Software Engineering Process
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
              We ship clean, tested, documented code with zero vendor lock-in.
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
              Security, Privacy & Margin Governance
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We engineer AI software that protects your business margins and customer privacy:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Token Spend Controls:</strong> Setting hard budget caps per user or organization to ensure predictable API expenses.</li>
              <li>• <strong>Private Model Inference:</strong> Option to run open-source models (Llama 3, Mistral) on private VPC instances via vLLM.</li>
              <li>• <strong>Prompt Injection Defenses:</strong> Independent classifier nodes filtering malicious inputs before processing.</li>
              <li>• <strong>Full Code Ownership:</strong> 100% intellectual property transfer upon final milestone delivery.</li>
            </ul>
          </div>
        </section>

        {/* RELATED SERVICES & GUIDES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Complementary Services & Architecture Guides
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
              href="/services/rag-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">RAG Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Vector database & document search pipelines</div>
            </Link>
            <Link
              href="/blog/what-are-ai-agents-and-how-do-they-work"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: What Are AI Agents? →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Architecture, loops, and production design</div>
            </Link>
            <Link
              href="/blog/how-to-integrate-an-llm-into-an-existing-application"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: LLM Integration →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Connecting APIs with caching & guardrails</div>
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
              Ready to Engineer Custom AI Software?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's AI Engineers
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior AI software engineers. We provide an architectural plan, data assessment, and fixed estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start AI Software Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
