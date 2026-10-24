import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "API Development Company | Custom REST & GraphQL API Engineering",
  description:
    "CookMyTech is a custom API development company engineering high-concurrency REST and GraphQL APIs, webhook processing pipelines, and third-party SaaS integrations.",
  path: "/services/api-development",
});

export default function ApiDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/api-development";
  const serviceSchema = generateServiceSchema({
    name: "API Development Services",
    description:
      "Enterprise REST and GraphQL API engineering, OpenAPI specifications, webhook infrastructure, OAuth2 authentication, and high-concurrency API gateways.",
    url: serviceUrl,
    serviceType: "API & Backend Systems Engineering",
  });

  const faqs = [
    {
      question: "What is the difference between REST and GraphQL APIs, and which should we choose?",
      answer:
        "REST APIs structure data across distinct HTTP endpoints (e.g. /users, /orders) and are ideal for public integrations, cached resource retrieval, and microservices. GraphQL allows client applications to query exact data shapes in a single request, eliminating over-fetching and multiple network roundtrips. We help you choose the right approach or build unified hybrid architectures based on your client requirements.",
    },
    {
      question: "Do you provide self-documenting OpenAPI / Swagger specifications and client SDKs?",
      answer:
        "Yes, every API built by CookMyTech includes interactive Swagger UI / OpenAPI 3.0 documentation, automated Postman collections, and auto-generated TypeScript client SDKs to ensure seamless integration by internal and external developers.",
    },
    {
      question: "How do you engineer webhook integrations to ensure zero dropped events?",
      answer:
        "We build resilient webhook receivers utilizing background queues (Redis / BullMQ / AWS SQS) with idempotency key checking to prevent duplicate transaction processing. Failed deliveries are routed to Dead Letter Queues (DLQ) with automated exponential backoff retries and alerting.",
    },
    {
      question: "What security measures do you implement for production APIs?",
      answer:
        "We implement industry-standard API security: OAuth 2.0 and PKCE flows, short-lived JWTs with cryptographically signed keys, API key generation with per-tenant rate limiting, CORS whitelisting, IP throttling, and automated input validation via Zod schemas to block injection attacks.",
    },
    {
      question: "What factors influence the cost and timeline of custom API development?",
      answer:
        "Cost and delivery timelines depend on endpoint quantity, database complexity, third-party SaaS integration count (e.g. payment gateways, CRMs, ERPs), real-time WebSocket requirements, and compliance standards. Standard API microservices typically ship within 3 to 6 weeks.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "API Specification & Data Contract Design",
      desc: "We define REST resources or GraphQL schemas, payload structures, pagination models (cursor vs offset), and status code standards in an OpenAPI 3.0 blueprint.",
    },
    {
      step: "02",
      title: "Backend Microservice Engineering",
      desc: "We build high-concurrency API routers using Node.js, Express, Fastify, or Go, enforcing input schema validation and centralized error handling.",
    },
    {
      step: "03",
      title: "Authentication & Role-Based Access Control",
      desc: "We configure OAuth2, API key hashing, JWT validation, and granular role permissions ensuring secure multi-tenant isolation.",
    },
    {
      step: "04",
      title: "Resilient Webhooks & Caching Integration",
      desc: "We engineer asynchronous queue workers, Redis caching for high-read endpoints, and idempotent webhook listeners for external event feeds.",
    },
    {
      step: "05",
      title: "Automated Testing, Documentation & Cloud CI/CD",
      desc: "We write automated integration test suites (Supertest), generate interactive Swagger documentation, and deploy to AWS, GCP, or Docker with CI/CD.",
    },
  ];

  const deliverables = [
    "Production-ready API codebase in TypeScript (Node.js/Fastify) or Go",
    "OpenAPI 3.0 / Swagger documentation with interactive testing console",
    "Auto-generated TypeScript client SDK for seamless frontend integration",
    "Secure authentication engine with API key management and JWT rotation",
    "Asynchronous webhook receiver with idempotency guards and Redis task queues",
    "Automated unit and integration test suite with high test coverage",
    "Docker containerization manifests and automated CI/CD deployment pipelines",
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
            { name: "API Development", item: "/services/api-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            API & Backend Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            API Development & Integration Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a custom API development company. We engineer high-throughput RESTful and GraphQL APIs, secure API gateways, asynchronous webhook pipelines, and third-party SaaS integrations designed for high concurrency, security, and developer clarity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult API Engineers →
            </Link>
            <Link
              href="/blog/rest-vs-graphql-apis"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read REST vs GraphQL Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Integration Challenge
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Brittle APIs, Undocumented Endpoints & Lost Webhooks
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Poorly designed APIs cause endless developer frustration: missing documentation, inconsistent error formats, unindexed database queries that spike latency, and lack of rate limiting that leaves systems vulnerable to DDoS attacks.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              When processing third-party webhooks (like Stripe payments or CRM events), synchronous handling causes dropped transactions during network hiccups, leading to revenue loss and data corruption.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Standard
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Self-Documenting, Resilient API Architecture
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We design APIs strictly around modern industry standards: clear HTTP semantics, strict JSON validation schemas, cursor-based pagination, Redis caching for sub-25ms response speeds, and asynchronous queue workers.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ OpenAPI 3.0 specs with live interactive Swagger testing</li>
              <li className="flex items-center gap-2">✔ Idempotent webhook receivers with dead-letter queue recovery</li>
              <li className="flex items-center gap-2">✔ Token-bucket rate limiting and DDoS protection per tenant</li>
              <li className="flex items-center gap-2">✔ High-concurrency Node.js, Fastify, and Go microservices</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our API Development Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">SaaS Founders & Product Teams</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Companies engineering public developer APIs, webhook notification networks, and partner ecosystems to turn their standalone software into an extensible platform.
                </p>
              </div>
              <Link href="/services/saas-development" className="text-xs font-bold uppercase underline">
                SaaS Development Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Mobile & Cross-Platform Teams</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Engineering teams requiring unified, high-speed GraphQL or REST backends serving iOS, Android, and web clients with zero data duplication.
                </p>
              </div>
              <Link href="/services/full-stack-development" className="text-xs font-bold uppercase underline">
                Full-Stack Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprise Systems Integrations</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Businesses connecting legacy ERPs, payment processors, CRMs, and internal databases into secure, unified API endpoints.
                </p>
              </div>
              <Link href="/services/cloud-architecture" className="text-xs font-bold uppercase underline">
                Cloud Architecture Services →
              </Link>
            </div>
          </div>
        </section>

        {/* PROTOCOLS & TECHNOLOGIES */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Architecture Stack
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Supported API Frameworks & Protocols
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "RESTful APIs", desc: "Clean HTTP methods, status codes & HATEOAS standards" },
              { title: "GraphQL", desc: "Apollo Server & custom schema resolvers with zero over-fetching" },
              { title: "Fastify & Express", desc: "Low-overhead, high-concurrency Node.js API servers" },
              { title: "OpenAPI 3.0", desc: "Automated Swagger documentation and client SDK generation" },
              { title: "Redis & BullMQ", desc: "Asynchronous task processing, queues & rate limiting" },
              { title: "OAuth 2.0 & JWT", desc: "Cryptographic token rotation and API key access control" },
              { title: "PostgreSQL & Prisma", desc: "Relational data persistence with connection pooling" },
              { title: "Docker & K8s", desc: "Containerized microservice packaging and orchestration" },
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
            Engineering Methodology
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our API Development Process
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
              Every API build is delivered fully documented with client SDKs and automated testing pipelines.
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
              Security, Rate Limiting & Reliability
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We design APIs to withstand malicious payloads and sudden traffic spikes:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Token-Bucket Rate Limiting:</strong> Configurable requests-per-minute limits to protect backends from brute force and abusive bots.</li>
              <li>• <strong>Strict Schema Sanitization:</strong> Request bodies and query parameters validated against Zod schemas before hitting business logic.</li>
              <li>• <strong>Idempotency Keys:</strong> Preventing duplicate charges or record mutations by tracking idempotency keys on mutation endpoints.</li>
              <li>• <strong>Zero Platform Lock-In:</strong> Fully containerized microservices ready to run on any cloud provider.</li>
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
              href="/services/cloud-architecture"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Cloud Architecture Consulting →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">AWS & GCP containerized infrastructure</div>
            </Link>
            <Link
              href="/services/saas-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">SaaS Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Multi-tenant platforms & Stripe billing</div>
            </Link>
            <Link
              href="/blog/rest-vs-graphql-apis"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: REST vs GraphQL APIs →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Comparing latency, caching & developer velocity</div>
            </Link>
            <Link
              href="/blog/how-to-design-a-scalable-backend"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Scalable Backend Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Microservices, caching & connection pooling</div>
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
              Ready to Build Resilient APIs?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's Backend Engineers
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior backend engineers to discuss your endpoint specifications, database connections, and integration timelines.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start API Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
