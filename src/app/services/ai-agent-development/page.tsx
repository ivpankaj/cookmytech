import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "AI Agent Development Company | Custom Autonomous AI Agent Services",
  description:
    "CookMyTech is an AI agent development company engineering autonomous AI agents, multi-agent systems, tool-calling pipelines, and business workflow automation with senior engineers.",
  path: "/services/ai-agent-development",
});

export default function AiAgentDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/ai-agent-development";
  const serviceSchema = generateServiceSchema({
    name: "AI Agent Development Services",
    description:
      "Engineering autonomous AI agents with function calling, external tool integration, memory systems, human-in-the-loop safeguards, and multi-agent coordination.",
    url: serviceUrl,
    serviceType: "Autonomous AI Agent Engineering",
  });

  const faqs = [
    {
      question: "What is an AI agent and how does it differ from a standard chatbot?",
      answer:
        "A conventional chatbot only generates conversational text responses to single prompts. An AI agent possesses agency: it formulates multi-step execution plans, accesses structured external tools and APIs, queries vector databases, observes intermediate execution feedback, recovers from runtime errors, and completes complex operational tasks autonomously without constant human prompting.",
    },
    {
      question: "Which frameworks and architectures do you use to build production AI agents?",
      answer:
        "We engineer deterministic agentic systems using LangGraph, LangChain, custom TypeScript and Python state machines, OpenAI function calling, Anthropic tool use, and AutoGen. We prioritize typed state graphs over unpredictable prompt chains to guarantee repeatable execution.",
    },
    {
      question: "How do you prevent AI agents from performing unauthorized or dangerous actions?",
      answer:
        "We implement defense-in-depth safety boundaries: role-based access control (RBAC), sandboxed runtime environments, token expenditure caps, parameter validation schemas (Zod/Pydantic), and mandatory human-in-the-loop (HITL) authorization gates for critical write operations such as financial transactions, record deletions, or external communications.",
    },
    {
      question: "What factors influence the cost and timeline of an AI agent project?",
      answer:
        "AI agent development costs and timelines depend on tool integration complexity (number of third-party APIs and databases), the degree of multi-agent orchestration required, long-term memory architecture (Redis vs pgvector), and custom evaluation benchmarks. Scoped MVPs typically ship in 4 to 8 weeks, with transparent milestone-based engineering.",
    },
    {
      question: "Do we retain 100% intellectual property and full access to source code?",
      answer:
        "Yes, absolutely. CookMyTech operates with full IP transfer. You own 100% of the Git repository, system prompts, evaluation suites, Docker containers, and infrastructure deployment scripts upon delivery, with zero vendor lock-in.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Workflow Mapping",
      desc: "We analyze your business operations to identify high-ROI agentic opportunities, map human decision trees, and establish deterministic input/output schemas.",
    },
    {
      step: "02",
      title: "State Machine & Architecture Design",
      desc: "We architect cyclical state graphs (LangGraph/Python/TypeScript) with isolated nodes for planning, tool execution, reflection verification, and human review.",
    },
    {
      step: "03",
      title: "Tool Integration & Memory Systems",
      desc: "We connect your internal APIs, SQL databases, vector indices, and SaaS tools with strict Zod/Pydantic validation, Redis session caches, and pgvector long-term memory.",
    },
    {
      step: "04",
      title: "Red-Teaming & Benchmark Evaluation",
      desc: "We run automated red-teaming to stress-test prompt injection vulnerabilities, verify tool execution reliability across edge cases, and measure task completion rates.",
    },
    {
      step: "05",
      title: "Production Deployment & Observability",
      desc: "We deploy containerized worker nodes with OpenTelemetry tracing, LangSmith/Helicone observability, token budget guards, and alerting dashboards.",
    },
  ];

  const deliverables = [
    "Production-ready Git repository with typed TypeScript or Python source code",
    "Deterministic state graph workflow definitions and custom tool handlers",
    "Vector embedding and retrieval connectors with sub-100ms response targets",
    "Docker container configurations and automated CI/CD deployment pipelines",
    "Human-in-the-loop (HITL) approval dashboard and audit logging",
    "Automated evaluation suite with regression testing benchmarks",
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
            { name: "AI Agent Development", item: "/services/ai-agent-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Autonomous Systems Engineering
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            AI Agent Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a custom AI agent development company. We engineer autonomous AI agents, multi-agent supervisor systems, and deterministic tool-calling workflows that automate complex multi-step operations for growing startups and tech-forward businesses in India, the US, UK, and worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult AI Agent Engineers →
            </Link>
            <Link
              href="/blog/what-are-ai-agents-and-how-do-they-work"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read AI Agent Technical Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Operational Bottleneck
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Why Traditional Scripts and Basic Chatbots Fall Short
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Legacy rule-based automation (like Zapier or cron scripts) breaks whenever inputs change unexpectedly. Conversely, standard LLM chat interfaces only answer questions in isolation without the ability to verify calculations, query private databases, or trigger external API actions.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Without stateful memory, multi-step planning, and reflection verifiers, linear LLM prompts suffer from hallucinations, unbounded API token consumption, and catastrophic failures in high-volume production operations.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Solution
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Deterministic, Tool-Calling AI Agent Graphs
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We build production-grade agentic architectures that replace brittle linear prompts with stateful, self-correcting graphs. Our agents plan sequentially, execute validated tool calls against your APIs, inspect responses, and reflect before returning verified results.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Stateful ReAct reasoning loops with runtime error recovery</li>
              <li className="flex items-center gap-2">✔ Strict schema enforcement via Zod, Pydantic, and OpenAPI</li>
              <li className="flex items-center gap-2">✔ Short-term Redis session cache + long-term vector memory</li>
              <li className="flex items-center gap-2">✔ Human-in-the-loop authorization gates for mission-critical write events</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience & Suitability
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our AI Agent Development Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Tech Startups & Founders</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders building AI-native products, vertical AI assistants, automated sales outreach pipelines, or intelligence features who need senior architecture without hiring expensive in-house AI research teams.
                </p>
              </div>
              <Link href="/services/mvp-development" className="text-xs font-bold uppercase underline">
                Explore MVP Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">SaaS Companies & Product Teams</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Software companies looking to integrate agentic copilot capabilities into their existing multi-tenant SaaS platforms to eliminate repetitive customer workflows and boost retention.
                </p>
              </div>
              <Link href="/services/saas-development" className="text-xs font-bold uppercase underline">
                Explore SaaS Engineering →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Growing Digital Enterprises</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Enterprises in India, the US, and UK seeking to automate complex internal operations like compliance auditing, supplier reconciliation, customer support triage, and document extraction.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-xs font-bold uppercase underline">
                Custom Enterprise Systems →
              </Link>
            </div>
          </div>
        </section>

        {/* TECH STACK & ARCHITECTURES */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering Frameworks
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Supported AI Agent Architectures & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "LangGraph", desc: "Cyclic state graphs & supervisor topologies" },
              { title: "LangChain", desc: "Chaining & prompt engineering layers" },
              { title: "OpenAI Assistants API", desc: "Native tool calling & file search" },
              { title: "Anthropic Tool Use", desc: "Claude 3.5 Sonnet function execution" },
              { title: "Llama 3 & Open Source", desc: "Private local inference via vLLM/Ollama" },
              { title: "Pinecone & Qdrant", desc: "Low-latency vector memory indexes" },
              { title: "Redis State Store", desc: "Distributed session memory & rate limiting" },
              { title: "FastAPI & Next.js", desc: "High-concurrency backend & reactive UI" },
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
            Execution Methodology
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our AI Agent Development Process
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
              What We Deliver
            </h2>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Every engagement produces production-hardened software built for direct transfer to your engineering infrastructure.
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
              Enterprise AI agent deployment requires robust governance. We protect your organization against unexpected token spend and unauthorized mutations through:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Token Spend Caps:</strong> Hard limits per user, organization, or worker task to eliminate runaway API bills.</li>
              <li>• <strong>Prompt Injection Defense:</strong> Input sanitization and isolated verifier nodes to prevent malicious prompt tampering.</li>
              <li>• <strong>Zero Training Retention:</strong> Enterprise API routing ensuring your proprietary customer data is never used for LLM retraining.</li>
              <li>• <strong>Audit Trails:</strong> Immutable JSON logging for every tool invocation, arguments passed, and system response.</li>
            </ul>
          </div>
        </section>

        {/* RELATED SERVICES & GUIDES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Complementary Services & Deep Dives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/services/rag-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">RAG Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Vector embeddings & document Q&A pipelines</div>
            </Link>
            <Link
              href="/services/ai-software-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">AI Software Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">End-to-end custom machine learning systems</div>
            </Link>
            <Link
              href="/blog/what-are-ai-agents-and-how-do-they-work"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: What Are AI Agents? →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Architecture, loops, and production design</div>
            </Link>
            <Link
              href="/blog/ai-agent-development-cost-in-india"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">AI Agent Cost Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Realistic pricing factors & scoping for 2026</div>
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
              Ready to Automate Complex Workflows?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build Custom AI Agents With CookMyTech
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Discuss your workflows directly with senior AI engineers. We provide an actionable architectural roadmap and scope within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Agent Consultation →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
