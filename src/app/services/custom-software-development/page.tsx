import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { constructMetadata } from "@/lib/metadata";
import { generateServiceSchema, generateFaqSchema } from "@/lib/schema";

export const metadata = constructMetadata({
  title: "Custom Software Development Company | Bespoke Business Software Solutions",
  description:
    "CookMyTech is a custom software development company in India engineering tailored business software, enterprise portals, legacy system modernizations, and cloud applications.",
  path: "/services/custom-software-development",
});

export default function CustomSoftwareDevelopmentPage() {
  const serviceUrl = "https://www.cookmytech.com/services/custom-software-development";
  const serviceSchema = generateServiceSchema({
    name: "Custom Software Development Services",
    description:
      "Bespoke software development for unique business operations, legacy system modernization, enterprise cloud applications, and automated workflows.",
    url: serviceUrl,
    serviceType: "Custom Software Engineering & Development",
  });

  const faqs = [
    {
      question: "Why should a company invest in custom software instead of buying off-the-shelf SaaS?",
      answer:
        "Off-the-shelf software forces your unique operations into generic templates, requires paying perpetual monthly seat licensing fees, and prevents you from building proprietary competitive advantages. Custom software is engineered around your exact workflows, integrates seamlessly with your internal databases, scales without arbitrary per-user pricing penalties, and gives you 100% intellectual property ownership.",
    },
    {
      question: "Can CookMyTech modernize and refactor our legacy codebase without causing downtime?",
      answer:
        "Yes. We specialize in zero-downtime legacy modernizations. Using the Strangler Fig pattern, we incrementally replace legacy monolith modules (PHP, older .NET, or unstructured Node.js) with modern, containerized Next.js and TypeScript microservices. Existing database schemas are synchronized in real time to ensure uninterrupted operations.",
    },
    {
      question: "How do you protect client data security and ensure regulatory compliance?",
      answer:
        "We implement enterprise security standards: strict role-based access control (RBAC), end-to-end data encryption at rest (AES-256) and in transit (TLS 1.3), automated vulnerability scanning in CI/CD pipelines, and architectures designed to comply with GDPR, HIPAA, and SOC2 requirements.",
    },
    {
      question: "What factors influence the budget and timeline of a custom software project?",
      answer:
        "Key cost drivers include architectural complexity, the number of third-party API integrations, legacy database migration needs, and custom analytics dashboarding. We provide fixed-scope milestone pricing with detailed sprint breakdowns, eliminating unexpected budget overruns.",
    },
    {
      question: "Do clients retain 100% ownership of source code and intellectual property?",
      answer:
        "Yes, unconditionally. All source code repositories, architectural designs, database schemas, and documentation are transferred 100% to your organization upon project completion with zero recurring vendor licensing.",
    },
  ];

  const faqSchema = generateFaqSchema(faqs);

  const processSteps = [
    {
      step: "01",
      title: "Business Process Audit & Requirements Definition",
      desc: "We analyze your existing workflows, identify operational bottlenecks, interview key stakeholders, and formulate a detailed Technical Requirements Document (TRD).",
    },
    {
      step: "02",
      title: "System Architecture & Relational Schema Design",
      desc: "We architect the database schemas (PostgreSQL / MySQL), map service boundaries, define REST/GraphQL API specifications, and design clean UI wireframes.",
    },
    {
      step: "03",
      title: "High-Heat Iterative Sprint Development",
      desc: "Our senior full-stack engineers build responsive frontends and resilient backends using modern TypeScript, Next.js, and containerized Docker services.",
    },
    {
      step: "04",
      title: "Quality Engineering & User Acceptance Testing",
      desc: "We conduct automated unit and end-to-end testing, security penetration audits, load testing, and lead structured UAT feedback loops with your team.",
    },
    {
      step: "05",
      title: "Cloud Deployment & Continuous Handover",
      desc: "We deploy the production infrastructure to AWS, GCP, or private servers with automated CI/CD pipelines, monitoring alerts, and complete team training.",
    },
  ];

  const deliverables = [
    "Full production source code repository with comprehensive TypeScript typing",
    "Clean, normalized relational database schemas with automated migration scripts",
    "Secure user authentication engine with multi-factor authentication and RBAC",
    "Comprehensive REST / GraphQL API endpoints with interactive Swagger documentation",
    "Automated CI/CD deployment pipelines targeting AWS, Google Cloud, or Docker",
    "100% intellectual property transfer, Git history, and technical architecture manual",
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
            { name: "Custom Software Development", item: "/services/custom-software-development" },
          ]}
        />

        {/* HERO */}
        <section className="py-12 border-b border-black">
          <div className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 font-bold inline-block mb-4">
            Custom Engineering Studio
          </div>
          <h1
            className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none uppercase mb-6"
            style={{ fontWeight: 800 }}
          >
            Custom Software Development Services
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-3xl mb-8">
            CookMyTech is a bespoke software development company. We engineer custom business software applications, enterprise portals, legacy system modernizations, and cloud architectures tailored to your precise operations for businesses in India, the United States, United Kingdom, and global markets.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-black text-white text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-white hover:text-black transition-colors font-bold inline-block"
            >
              Consult Software Engineers →
            </Link>
            <Link
              href="/blog/custom-software-vs-off-the-shelf-software"
              className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 border border-black hover:bg-black hover:text-white transition-colors font-bold inline-block"
            >
              Read Custom vs Off-the-Shelf Guide
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
              When Generic SaaS Software Hinders Business Growth
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Growing enterprises often find themselves juggling multiple disparate SaaS tools that don't speak to each other. Employees manually copy-paste data across spreadsheets, errors multiply, and monthly seat licensing fees escalate into hundreds of thousands of dollars annually.
            </p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Furthermore, relying on inflexible commercial platforms makes it impossible to build unique customer experiences or optimize operational workflows that set your business apart from competitors.
            </p>
          </div>

          <div className="border border-black p-8 bg-gray-50">
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
              The CookMyTech Solution
            </div>
            <h2 className="font-display text-2xl font-bold uppercase mb-4">
              Bespoke Software Tailored to Your Edge
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              We design and engineer proprietary software systems that map exactly to how your business operates. You eliminate manual friction, integrate your data into a unified single source of truth, and build permanent enterprise value.
            </p>
            <ul className="space-y-2 text-xs font-bold text-gray-900">
              <li className="flex items-center gap-2">✔ Purpose-built workflows designed around your team's operational habits</li>
              <li className="flex items-center gap-2">✔ Unified data architectures connecting legacy databases with modern clouds</li>
              <li className="flex items-center gap-2">✔ 100% intellectual property ownership with zero recurring SaaS seat fees</li>
              <li className="flex items-center gap-2">✔ Senior-only engineering execution delivering zero technical debt</li>
            </ul>
          </div>
        </section>

        {/* WHO IT IS FOR */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Target Audience
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Who Our Custom Software Development Serves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Established Mid-Market Enterprises</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Companies replacing cumbersome legacy software, manual Excel sheets, or disconnected SaaS apps with a unified, high-speed cloud platform.
                </p>
              </div>
              <Link href="/services/cloud-architecture" className="text-xs font-bold uppercase underline">
                Cloud Architecture Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Venture-Backed & Scaling Startups</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Tech founders building novel digital products, proprietary marketplaces, or automated industry platforms requiring bespoke engineering.
                </p>
              </div>
              <Link href="/services/mvp-development" className="text-xs font-bold uppercase underline">
                MVP Development Services →
              </Link>
            </div>

            <div className="p-6 border border-black bg-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Operational Leaders & Service Firms</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Logistics, healthcare, finance, or real estate firms requiring secure internal portals, custom ERP/CRM tools, and compliance reporting engines.
                </p>
              </div>
              <Link href="/services/api-development" className="text-xs font-bold uppercase underline">
                API Development Services →
              </Link>
            </div>
          </div>
        </section>

        {/* SOLUTIONS WE BUILD */}
        <section className="py-16 border-b border-black">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">
            Engineering Scope
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-6">
            Bespoke Software Systems We Build
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Custom ERP & CRM Portals", desc: "Operational management tools tailored to your workflows" },
              { title: "Legacy System Modernization", desc: "Refactoring legacy monoliths into cloud microservices" },
              { title: "Enterprise Web Applications", desc: "High-concurrency Next.js and React business software" },
              { title: "Automated Data Pipelines", desc: "ETL pipelines aggregating disparate databases in real time" },
              { title: "Customer & Partner Portals", desc: "Self-service client portals with secure billing & auth" },
              { title: "API Gateways & Integrations", desc: "Connecting payment gateways, banking APIs, and ERPs" },
              { title: "Embedded AI Tools", desc: "Custom LLM integrations and automated document processing" },
              { title: "Cloud Infrastructure Setup", desc: "Automated Docker, Kubernetes, and AWS/GCP deployments" },
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
            Delivery Lifecycle
          </div>
          <h2 className="font-display text-3xl font-bold uppercase mb-8">
            Our Custom Software Engineering Process
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
              Every custom software build is delivered with complete source code, test suites, and operational documentation.
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
              Security, Scalability & Intellectual Property
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed mb-4">
              Enterprise custom software requires absolute security and clear ownership:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>• <strong>100% IP Transfer:</strong> Complete ownership of all code, database models, and cloud credentials with zero vendor lock-in.</li>
              <li>• <strong>Enterprise Encryption:</strong> Database encryption at rest (AES-256) and TLS 1.3 encryption across all communication layers.</li>
              <li>• <strong>Automated Regression Testing:</strong> CI/CD test suites preventing regressions during future feature expansions.</li>
              <li>• <strong>Transparent Cost Factors:</strong> Scoping is based on feature milestones, database volume, and integration complexity.</li>
            </ul>
          </div>
        </section>

        {/* RELATED SERVICES & GUIDES */}
        <section className="py-16 border-b border-black">
          <h2 className="font-display text-2xl font-bold uppercase mb-6">
            Complementary Services & Strategy Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/services/saas-development"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">SaaS Development Services →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Multi-tenant platforms & recurring billing</div>
            </Link>
            <Link
              href="/services/cloud-architecture"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Cloud Architecture Consulting →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">AWS & GCP containerized infrastructure</div>
            </Link>
            <Link
              href="/blog/custom-software-vs-off-the-shelf-software"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Custom vs Off-the-Shelf Guide →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Strategic analysis of costs, security & ROI</div>
            </Link>
            <Link
              href="/blog/how-to-design-a-scalable-backend"
              className="p-5 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <div className="font-bold mb-1">Scalable Backend Architecture →</div>
              <div className="text-gray-500 hover:text-gray-300 text-[11px]">Best practices for database design & APIs</div>
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
              Ready for Tailored Software?
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase">
              Build With CookMyTech's Senior Engineers
            </h2>
            <p className="text-xs text-gray-400 mt-2 max-w-xl">
              Talk directly with senior software architects. Receive an actionable technical blueprint and transparent sprint estimate within 24 hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-black text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Start Software Project →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
