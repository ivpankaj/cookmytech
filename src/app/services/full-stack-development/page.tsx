import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Full-Stack Development Company | Custom Web Application Services",
  description:
    "CookMyTech is a full-stack development company engineering custom web applications, resilient backend architectures, and high-performance cloud platforms.",
  path: "/services/full-stack-development",
});

export default function FullStackDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/full-stack-development";
  const serviceSchema = generateServiceSchema({
    name: "Full-Stack Development Services",
    description:
      "End-to-end full-stack web application engineering, database schema design, modern frontend UX, scalable cloud backends, and DevOps.",
    url: serviceUrl,
    serviceType: "Full-Stack Web Software Engineering",
  });

  const faqs = [
    {
      question: "What does CookMyTech's full-stack development service encompass?",
      answer:
        "We handle the entire software delivery lifecycle: user interface design and responsive React/Next.js frontends, backend API engineering (Node.js, Express, Python, Go), database architecture and indexing (PostgreSQL, MongoDB), authentication and security, cloud containerization (Docker, AWS, GCP), and automated CI/CD testing pipelines.",
    },
    {
      question: "How do you ensure frontend and backend code remain synchronized and bug-free?",
      answer:
        "We implement end-to-end TypeScript architectures. Shared type definitions, Zod validation schemas, and automated contract testing guarantee that API payload updates are instantly verified across the entire stack, eliminating runtime typing mismatches before deployment.",
    },
    {
      question: "Do you build custom web applications for both startups and established enterprises?",
      answer:
        "Yes. For startups, we focus on rapid MVP delivery, speed-to-market, and clean scalable foundations. For enterprises, we emphasize high concurrency, legacy migration, role-based access control, security compliance (SOC2/GDPR), and zero-downtime deployment pipelines.",
    },
    {
      question: "What factors influence the timeline and cost of a full-stack web application project?",
      answer:
        "Timelines and costs depend on the number of unique user workflows, external API integrations, real-time data needs (WebSockets), and database migration requirements. We provide transparent, fixed-scope sprint pricing with clear milestone deliverables.",
    },
    {
      question: "Do clients retain full ownership of the codebase and intellectual property?",
      answer:
        "Yes, 100%. All source code, design assets, database migrations, and cloud manifests belong entirely to your company upon milestone completion with zero recurring vendor licensing fees.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Technical Discovery & Stack Selection",
      desc: "We analyze your user personas, operational scale, and feature requirements to select the optimal frontend, backend, and database architecture.",
    },
    {
      step: "02",
      title: "Schema Modeling & API Contract Drafting",
      desc: "We design relational database schemas (PostgreSQL) or document models (MongoDB) and define OpenAPI REST or GraphQL contracts.",
    },
    {
      step: "03",
      title: "Frontend UX & Component Engineering",
      desc: "We build responsive, zero-CLS interfaces with Next.js, React, and Tailwind CSS, prioritizing mobile usability and accessible keyboard navigation.",
    },
    {
      step: "04",
      title: "Backend Microservices & Caching Integration",
      desc: "We engineer high-concurrency API route handlers, authentication flows (OAuth2/JWT), and Redis caching layers for sub-100ms response targets.",
    },
    {
      step: "05",
      title: "Automated Testing, CI/CD & Production Launch",
      desc: "We write unit and integration test suites, containerize with Docker, and configure automated GitHub Actions deployments to AWS or Vercel.",
    },
  ];

  const deliverables = [
    "Full-stack Git repository with unified TypeScript across frontend and backend",
    "Responsive, accessible web application passing Google Core Web Vitals",
    "Optimized relational or document database schema with automated migration scripts",
    "Secure user authentication engine with OAuth2, session handling, and RBAC",
    "Automated unit, integration, and end-to-end testing suites",
    "Docker containerization manifests and automated CI/CD deployment pipelines",
    "100% intellectual property transfer and comprehensive technical architecture manual",
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
            { name: "Full-Stack Development", item: "/services/full-stack-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Full-Stack Engineering Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Full-Stack Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a custom full-stack software development company. We engineer resilient web applications, cloud backends, modern frontend interfaces, and high-concurrency APIs using TypeScript, Next.js, React, Node.js, and PostgreSQL for businesses across India, the US, UK, and worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult Full-Stack Engineers →
            </Link>
            <Link
              href="/blog/how-to-design-a-scalable-backend"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read Scalable Backend Architecture Guide
            </Link>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        <section className="py-16 border-b border-black grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The Engineering Challenge
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Disconnected Teams & Brittle Frontend-Backend Boundaries
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              When software projects divide frontend and backend responsibilities between disconnected contractors or teams with different languages, friction is inevitable. API contracts diverge, UI states break, database queries run unindexed, and finger-pointing replaces problem-solving.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Without unified architectural standards, applications suffer from slow page load times, layout shifts, security holes, and ballooning maintenance expenses.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The CookMyTech Approach
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Cohesive, End-to-End TypeScript Architecture
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We execute full-stack development with senior engineers who understand both pixel-perfect frontend ergonomics and deep database query optimization. One unified codebase, shared type contracts, and rigorous automated testing ensure rapid velocity and rock-solid reliability.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ End-to-end type safety eliminating runtime data mismatches</li>
              <li className="flex items-center gap-2">✔ High-speed Next.js server components with zero client bundle bloat</li>
              <li className="flex items-center gap-2">✔ Normalized relational databases with indexed query optimization</li>
              <li className="flex items-center gap-2">✔ Automated CI/CD pipelines deploying containerized cloud services</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our Full-Stack Development Services Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Startup Founders & MVPs</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Founders building new web applications or SaaS platforms who need an integrated team capable of delivering UI, APIs, auth, and database in 4 to 8 weeks.
                </p>
              </div>
              <Link href="/services/mvp-development" className="text-xs font-bold uppercase underline">
                MVP Development Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Scaleups Building New Features</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Growth-stage businesses expanding their core product with complex new modules: payment routing, team collaboration, data dashboards, or AI tools.
                </p>
              </div>
              <Link href="/services/saas-development" className="text-xs font-bold uppercase underline">
                SaaS Engineering Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Enterprises Modernizing Web Apps</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Companies replacing legacy PHP, ASP.NET, or jQuery software with modern, cloud-native Next.js and TypeScript architectures.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-xs font-bold uppercase underline">
                Custom Software Engineering →
              </Link>
            </div>
          </div>
        </section>

        {/* FULL STACK CAPABILITIES */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Full-Stack Scope
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Frontend, Backend & Cloud Engineering Capabilities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Next.js & React", desc: "Server components, streaming SSR, and zero layout shift" },
              { title: "TypeScript", desc: "Full-stack end-to-end type safety and maintainability" },
              { title: "Node.js & Express", desc: "High-concurrency asynchronous API microservices" },
              { title: "PostgreSQL & Prisma", desc: "Relational data integrity, migrations & connection pooling" },
              { title: "Redis Caching", desc: "In-memory caching and background BullMQ task queues" },
              { title: "OAuth2 & JWT", desc: "Secure multi-provider authentication and role permissions" },
              { title: "Tailwind CSS", desc: "Modular, responsive, high-performance UI styling" },
              { title: "Docker & AWS/GCP", desc: "Automated container deployments with zero downtime" },
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
            Our Full-Stack Development Lifecycle
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
              We deliver fully tested, production-ready code with complete intellectual property ownership.
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
              Security, Quality & Maintainability
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We build custom software engineered for longevity:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>Zero Technical Debt:</strong> Clean architectural patterns, modular folder structures, and comprehensive inline documentation.</li>
              <li>• <strong>Rigorous Input Sanitization:</strong> Every form input and API payload validated using Zod to block XSS and SQL injection.</li>
              <li>• <strong>Automated Testing:</strong> Unit and integration tests integrated directly into GitHub Actions pull request workflows.</li>
              <li>• <strong>100% Repository Transfer:</strong> Full IP ownership with zero vendor lock-in from day one.</li>
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
              <div className="font-bold mb-1">Next.js Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Server components & high-speed SEO web apps</div>
            </Link>
            <Link
              href="/services/mern-stack-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">MERN Stack Development →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">MongoDB, Express, React, and Node.js solutions</div>
            </Link>
            <Link
              href="/blog/how-to-design-a-scalable-backend"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: Scalable Backend Design →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Microservices, caching & connection pooling</div>
            </Link>
            <Link
              href="/blog/how-to-choose-a-database-for-a-saas-application"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Guide: Choosing a Database →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">PostgreSQL vs MongoDB vs Vector databases</div>
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
              Ready to Build Your Full-Stack Application?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's Full-Stack Studio
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior software engineers. We provide an actionable architectural plan and fixed estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Full-Stack Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
