import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "MERN Stack Development Company | Custom React & Node.js Engineering",
  description:
    "CookMyTech is a MERN stack development company engineering custom web apps, real-time dashboards, and high-concurrency APIs with MongoDB, Express, React, and Node.js.",
  path: "/services/mern-stack-development",
});

export default function MernStackDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/mern-stack-development";
  const serviceSchema = generateServiceSchema({
    name: "MERN Stack Development Services",
    description:
      "Enterprise full-stack JavaScript application development engineered with MongoDB, Express.js, React, Node.js, and TypeScript.",
    url: serviceUrl,
    serviceType: "Full-Stack JavaScript & MERN Engineering",
  });

  const faqs = [
    {
      question: "What are the core advantages of building with the MERN stack?",
      answer:
        "The MERN stack (MongoDB, Express.js, React, Node.js) enables an end-to-end JavaScript/TypeScript architecture. Having a single programming language across the client, backend server, and database layer drastically improves developer velocity, enables frictionless data sharing without impedance mismatch, and simplifies full-stack testing and CI/CD maintenance.",
    },
    {
      question: "How do you decide between MERN stack and Next.js App Router for a project?",
      answer:
        "We recommend Next.js when public organic search SEO, Core Web Vitals, and server-side pre-rendering are paramount (e.g. e-commerce, marketing platforms, and content hubs). Traditional MERN architecture is ideal for complex authenticated dashboards, real-time collaborative single-page applications, private SaaS backoffices, or microservice backends with standalone mobile clients.",
    },
    {
      question: "How do you optimize MongoDB aggregation performance for heavy data workloads?",
      answer:
        "We design optimized schema models (balancing embedding vs referencing based on read/write ratios), implement compound and sparse indexes, utilize multi-stage MongoDB aggregation pipelines with strict projection filtering, and deploy Redis caching for high-frequency queries to achieve sub-50ms query response times.",
    },
    {
      question: "How do you secure Node.js and Express backends in production?",
      answer:
        "We implement security best practices: Helmet.js for secure HTTP headers, CORS whitelisting, express-rate-limit to protect against brute-force attacks, cryptographic password hashing (argon2/bcrypt), JWT token rotation with HTTP-only cookies, and Zod/Joi input sanitization to eliminate NoSQL injection vulnerabilities.",
    },
    {
      question: "What factors influence the cost and timeline of a custom MERN application?",
      answer:
        "Timelines and costs depend on the number of real-time event channels (WebSockets), complex database aggregation pipelines, third-party payment and SaaS integrations, and automated test coverage. Scoped MERN MVPs typically deploy in 4 to 8 weeks under fixed-scope milestones.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Data Modeling & API Contract Definition",
      desc: "We design flexible MongoDB document schemas, plan relational reference boundaries, and draft OpenAPI/Swagger REST and WebSocket endpoint specifications.",
    },
    {
      step: "02",
      title: "Node.js & Express API Microservice Setup",
      desc: "We engineer a modular backend architecture with Express.js, TypeScript, connection pooling with Mongoose, and centralized error-handling middlewares.",
    },
    {
      step: "03",
      title: "React Frontend & State Management",
      desc: "We build modular, accessible React user interfaces using Tailwind CSS, Zustand/Redux Toolkit for predictable client state, and TanStack Query for cache synchronization.",
    },
    {
      step: "04",
      title: "Real-Time Sockets & Caching Layers",
      desc: "We integrate Socket.io or native WebSockets for live chat, telemetry, and notifications, paired with Redis caching to protect MongoDB from read spikes.",
    },
    {
      step: "05",
      title: "Dockerization, Testing & Cloud CI/CD",
      desc: "We write unit and integration test suites (Vitest/Jest, Supertest), containerize with Docker, and deploy to AWS, DigitalOcean, or Google Cloud.",
    },
  ];

  const deliverables = [
    "Full-stack Git repository with unified TypeScript across frontend React and backend Node.js",
    "Optimized MongoDB database schema with indexed collections and aggregation pipelines",
    "RESTful Express.js API with automated OpenAPI documentation and validation schemas",
    "Real-time bidirectional event engine using Socket.io or server-sent events (SSE)",
    "Authentication system supporting JWT with HTTP-only refresh tokens and OAuth2",
    "Docker Compose development and production deployment manifests with automated CI/CD",
    "Complete intellectual property transfer and zero vendor lock-in",
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
            { name: "MERN Stack Development", item: "/services/mern-stack-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Full-Stack JavaScript Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            MERN Stack Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a full-stack MERN development company. We engineer high-performance web applications, real-time SaaS platforms, and enterprise software powered by MongoDB, Express.js, React, Node.js, and TypeScript for startups and digital businesses in India, the US, UK, and worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult MERN Engineers →
            </Link>
            <Link
              href="/blog/mern-stack-explained-with-practical-examples"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read MERN Practical Architecture Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Polyglot Dilemma
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Context Switching & Brittle Multi-Language Stacks
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              When startups split engineering teams across disparate languages (e.g. Python backend, PHP legacy services, and separate React frontends), developer velocity plummets. Type contracts diverge, API mismatches cause production outages, and onboarding new developers requires multiple skill sets.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Without unified typing and modular asynchronous task processing, monolithic legacy apps grind to a halt under real-time concurrent user load.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Unified JavaScript Solution
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              End-to-End TypeScript MERN Architecture
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We engineer MERN applications with shared TypeScript interfaces between MongoDB models, Express API routers, and React frontend hooks. One language, shared data contracts, and non-blocking asynchronous event loops ensure maximum velocity and speed.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Unified TypeScript types eliminating frontend-backend drift</li>
              <li className="flex items-center gap-2">✔ High-concurrency event-driven Node.js & Express API microservices</li>
              <li className="flex items-center gap-2">✔ Flexible MongoDB NoSQL document design with compound indexing</li>
              <li className="flex items-center gap-2">✔ Reactive React dashboards with optimistic UI updates and WebSockets</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our MERN Stack Development Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">High-Growth Startups & Founders</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders who need rapid feature iteration, real-time collaboration features, and scalable JSON document processing without the overhead of rigid relational migrations.
                </p>
              </div>
              <Link href="/services/mvp-development" className="text-xs font-bold uppercase underline">
                Explore MVP Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Interactive Dashboards & B2B Portals</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Businesses building internal analytics portals, admin command centers, operations trackers, and data visualization tools requiring live event streams.
                </p>
              </div>
              <Link href="/services/full-stack-development" className="text-xs font-bold uppercase underline">
                Full-Stack Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Real-Time Messaging & Media Apps</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Products requiring bi-directional live updates: in-app chat, multi-player collaboration, real-time auction bidding, or IoT streaming feeds.
                </p>
              </div>
              <Link href="/services/api-development" className="text-xs font-bold uppercase underline">
                API Development Services →
              </Link>
            </div>
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Core Architecture
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            The Four Pillars of Our MERN Implementation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Database</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">MongoDB</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Flexible JSON document storage with replica sets, sharding, compound indexing, and high-performance aggregation pipelines.
              </p>
            </div>
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Routing</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">Express.js</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Minimalist, fast HTTP server framework configured with custom security middlewares, Zod request validation, and rate limiting.
              </p>
            </div>
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Client</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">React</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Component-driven interactive UI built with TypeScript, TanStack Query, optimized re-renders, and responsive styling.
              </p>
            </div>
            <div className="p-6 border border-black bg-white">
              <span className="text-xs bg-black text-white px-2 py-0.5 font-bold uppercase">Runtime</span>
              <h3 className="font-display text-xl font-bold mt-3 mb-2">Node.js</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Non-blocking asynchronous I/O engine capable of handling tens of thousands of concurrent connections with low memory footprint.
              </p>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP PROCESS */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Execution Lifecycle
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our MERN Development Lifecycle
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
              We ship clean, tested code packaged for automated containerized cloud deployments.
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
              Security, Scalability & Best Practices
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Enterprise JavaScript engineering requires strict security hygiene:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>NoSQL Injection Prevention:</strong> Sanitizing all query parameters using Zod schemas to block query selector injection.</li>
              <li>• <strong>Stateless JWT & Refresh Tokens:</strong> Secure authentication with short-lived access tokens and encrypted HTTP-only refresh cookies.</li>
              <li>• <strong>Redis Micro-Caching:</strong> Caching frequent collection queries in Redis to maintain sub-50ms responses during traffic surges.</li>
              <li>• <strong>Zero Platform Lock-In:</strong> Fully containerized Docker setups portable to any cloud provider (AWS, GCP, DigitalOcean).</li>
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
              href="/services/nextjs-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Next.js Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Server components & hybrid SSR web apps</div>
            </Link>
            <Link
              href="/services/api-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">API Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">REST & GraphQL microservices engineering</div>
            </Link>
            <Link
              href="/blog/mern-stack-explained-with-practical-examples"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">MERN Practical Architecture Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Database modeling & schema design tutorial</div>
            </Link>
            <Link
              href="/blog/nextjs-vs-react-for-production-applications"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">MERN vs Next.js Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Architecture comparison for SaaS and web apps</div>
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
              Ready to Build With MERN?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's Full-Stack Engineers
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior JavaScript & TypeScript engineers. We provide a complete technical scope and quote within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start MERN Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
